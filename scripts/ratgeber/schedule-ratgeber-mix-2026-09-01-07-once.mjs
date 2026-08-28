import { MongoClient } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'

const migrationId = 'ratgeber-mix-schedule-2026-09-01-07'
const mongoUrl = process.env.DATABASE_URL

if (!mongoUrl) {
  throw new Error('DATABASE_URL fehlt – Veröffentlichungsplan wird nicht gesetzt')
}

const dbName = resolvePayloadDbName(mongoUrl)

// 07:00 Uhr Deutschland (CEST = UTC+2 Anfang September).
// Der 31.08. ist bereits durch den vorherigen Wochen-Mix belegt.
const schedule = [
  ['pv-verschattung-leistungsoptimierer-stringdesign', '2026-09-01T05:00:00.000Z'],
  ['waermepumpe-abtauung-vereisung-kondensat', '2026-09-02T05:00:00.000Z'],
  ['stromspeicher-aufstellort-keller-garage-brandschutz', '2026-09-03T05:00:00.000Z'],
  ['dienstwagen-zuhause-laden-wallbox-stromkosten-arbeitgeber', '2026-09-04T05:00:00.000Z'],
  ['hems-wetterprognose-strompreis-ladezustand', '2026-09-05T05:00:00.000Z'],
  ['pv-anlage-fehlerdiagnose-stringmessung-isolation-hotspots', '2026-09-06T05:00:00.000Z'],
  ['eeg-2027-dach-pv-unter-25-kw', '2026-09-07T05:00:00.000Z'],
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
        description: 'Gemischte Ratgeber vom 01.–07.09.2026 täglich um 07:00 Uhr Europe/Berlin geplant',
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
