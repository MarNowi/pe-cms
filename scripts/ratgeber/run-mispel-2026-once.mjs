// Führt den MiSpeL-Ratgeber pro Datenbank nur einmal aus.
// Idempotent: der Artikel selbst wird anhand seines Slugs upserted.
import { MongoClient } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'

const migrationId = 'mispel-festlegung-ratgeber-2026-10-09-v1'
const mongoUrl = process.env.DATABASE_URL

if (!mongoUrl) {
  throw new Error('DATABASE_URL fehlt – MiSpeL-Ratgeber wird nicht importiert')
}

const client = new MongoClient(String(mongoUrl))

try {
  await client.connect()
  const migrations = client.db(resolvePayloadDbName(mongoUrl)).collection('_content_migrations')

  if (await migrations.findOne({ _id: migrationId })) {
    console.log('ℹ️ MiSpeL-Ratgeber wurde bereits importiert – überspringe.')
  } else {
    await import('./mispel-2026-batteriespeicher-photovoltaik.mjs')
    await migrations.updateOne(
      { _id: migrationId },
      {
        $set: {
          completedAt: new Date(),
          description: 'MiSpeL-Festlegung vom 01.10.2026: Ratgeber veröffentlicht',
        },
      },
      { upsert: true },
    )
    console.log('✅ MiSpeL-Ratgeber erfolgreich importiert.')
  }
} finally {
  await client.close()
}
