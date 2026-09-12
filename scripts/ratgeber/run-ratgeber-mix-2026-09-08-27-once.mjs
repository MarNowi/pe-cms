import { MongoClient } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'

const migrationId = 'ratgeber-mix-2026-09-08-27-depth-v2'
const mongoUrl = process.env.DATABASE_URL

if (!mongoUrl) throw new Error('DATABASE_URL fehlt – Migration wird nicht ausgeführt')

const dbName = resolvePayloadDbName(mongoUrl)
const client = new MongoClient(String(mongoUrl))

try {
  await client.connect()
  const migrations = client.db(dbName).collection('_content_migrations')
  const alreadyDone = await migrations.findOne({ _id: migrationId })

  if (alreadyDone) {
    console.log(`ℹ️ Content-Migration ${migrationId} wurde bereits ausgeführt – überspringe.`)
    process.exit(0)
  }

  await import('./run-ratgeber-mix-2026-09-08-27.mjs')

  await migrations.updateOne(
    { _id: migrationId },
    { $set: { completedAt: new Date(), description: 'Ratgeber-Mix 08.–27.09.2026 fachlich vertieft und aktualisiert' } },
    { upsert: true },
  )
  console.log(`✅ Content-Migration ${migrationId} abgeschlossen.`)
} finally {
  await client.close()
}
