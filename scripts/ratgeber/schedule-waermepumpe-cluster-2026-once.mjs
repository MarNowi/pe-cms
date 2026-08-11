import { MongoClient } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'

const migrationId = 'ratgeber-waermepumpe-cluster-schedule-2026-08-11'
const mongoUrl = process.env.DATABASE_URL

if (!mongoUrl) {
  throw new Error('DATABASE_URL fehlt – Veröffentlichungsplan wird nicht gesetzt')
}

const dbName = resolvePayloadDbName(mongoUrl)

// 07:00 Uhr Deutschland (CEST = UTC+2 im August).
// Der erste Artikel bleibt heute sichtbar; alle folgenden werden bis zu ihrem
// Veröffentlichungszeitpunkt durch die öffentliche Ratgeber-Access-Regel verborgen.
const schedule = [
  ['heizlastberechnung-waermepumpe', '2026-08-11T05:00:00.000Z'],
  ['waermepumpe-richtig-einstellen', '2026-08-12T05:00:00.000Z'],
  ['hydraulischer-abgleich-waermepumpe', '2026-08-13T05:00:00.000Z'],
  ['pufferspeicher-waermepumpe', '2026-08-14T05:00:00.000Z'],
  ['waermepumpentarif-oder-dynamischer-stromtarif', '2026-08-15T05:00:00.000Z'],
  ['monoblock-oder-split-waermepumpe', '2026-08-16T05:00:00.000Z'],
  ['waermepumpe-lebensdauer-wartung', '2026-08-17T05:00:00.000Z'],
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

  console.log(`🗓️ Setze Veröffentlichungsplan für ${schedule.length} Wärmepumpen-Ratgeber …`)

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
        description: 'Wärmepumpen-Ratgeber vom 11.–17.08.2026 täglich um 07:00 Uhr Europe/Berlin geplant',
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
