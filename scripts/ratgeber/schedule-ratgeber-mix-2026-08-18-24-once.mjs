import { MongoClient } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'

const migrationId = 'ratgeber-mix-schedule-2026-08-18-24'
const mongoUrl = process.env.DATABASE_URL

if (!mongoUrl) {
  throw new Error('DATABASE_URL fehlt – Veröffentlichungsplan wird nicht gesetzt')
}

const dbName = resolvePayloadDbName(mongoUrl)

// 07:00 Uhr Deutschland (CEST = UTC+2 im August).
// Die Artikel werden durch die öffentliche Ratgeber-Access-Regel bis zu ihrem
// jeweiligen Veröffentlichungszeitpunkt verborgen.
const schedule = [
  ['smart-meter-auslesen-verbrauchsdaten-trudi', '2026-08-18T05:00:00.000Z'],
  ['stromspeicher-kapazitaet-leistung-kw-kwh', '2026-08-19T05:00:00.000Z'],
  ['steuerbox-paragraf-14a-smart-meter-hems', '2026-08-20T05:00:00.000Z'],
  ['zaehlerschrank-pv-waermepumpe-smart-meter', '2026-08-21T05:00:00.000Z'],
  ['mieterstrom-gemeinschaftliche-gebaeudeversorgung-2026', '2026-08-22T05:00:00.000Z'],
  ['lastgang-15-minuten-werte-verstehen', '2026-08-23T05:00:00.000Z'],
  ['westnetz-smart-meter-steuerbox-2026', '2026-08-24T05:00:00.000Z'],
]

const client = new MongoClient(String(mongoUrl))

try {
  await client.connect()

  const db = client.db(dbName)
  const migrations = db.collection('_content_migrations')
  const ratgeber = db.collection('ratgebers')

  const alreadyDone = await migrations.findOne({ _id: migrationId })

  if (alreadyDone) {
    console.log(`ℹ️ Veröffentlichungsplan ${migrationId} wurde bereits gesetzt – überspringe.`)
    process.exit(0)
  }

  const slugs = schedule.map(([slug]) => slug)
  const existing = await ratgeber
    .find({ slug: { $in: slugs } }, { projection: { slug: 1 } })
    .toArray()

  const existingSlugs = new Set(existing.map((doc) => doc.slug))
  const missing = slugs.filter((slug) => !existingSlugs.has(slug))

  if (missing.length > 0) {
    throw new Error(`Veröffentlichungsplan abgebrochen – Artikel fehlen: ${missing.join(', ')}`)
  }

  console.log(`🗓️ Setze Veröffentlichungsplan für ${schedule.length} gemischte Ratgeber …`)

  const now = new Date()

  const result = await ratgeber.bulkWrite(
    schedule.map(([slug, iso]) => ({
      updateOne: {
        filter: { slug },
        update: {
          $set: {
            status: 'veroeffentlicht',
            publishedAt: new Date(iso),
            updatedAt: now,
          },
        },
      },
    })),
    { ordered: true },
  )

  if (result.matchedCount !== schedule.length) {
    throw new Error(
      `Veröffentlichungsplan unvollständig: ${result.matchedCount}/${schedule.length} Artikel gefunden`,
    )
  }

  await migrations.updateOne(
    { _id: migrationId },
    {
      $set: {
        completedAt: new Date(),
        description: 'Gemischte Ratgeber vom 18.–24.08.2026 täglich um 07:00 Uhr Europe/Berlin geplant',
        schedule: Object.fromEntries(schedule),
      },
    },
    { upsert: true },
  )

  for (const [slug, iso] of schedule) {
    console.log(`   • ${slug}: ${iso}`)
  }

  console.log('✅ Veröffentlichungsplan gespeichert.')
} finally {
  await client.close()
}
