import { MongoClient } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'

const migrationId = 'ratgeber-waermepumpe-cluster-2026-08-11'
const mongoUrl = process.env.DATABASE_URL

if (!mongoUrl) {
  throw new Error('DATABASE_URL fehlt – Migration wird nicht ausgeführt')
}

const dbName = resolvePayloadDbName(mongoUrl)

async function withMigrationCollection(callback) {
  const client = new MongoClient(String(mongoUrl))

  try {
    await client.connect()
    const db = client.db(dbName)
    return await callback(db.collection('_content_migrations'))
  } finally {
    await client.close()
  }
}

const alreadyDone = await withMigrationCollection((col) =>
  col.findOne({ _id: migrationId }),
)

if (alreadyDone) {
  console.log(`ℹ️ Content-Migration ${migrationId} wurde bereits ausgeführt – überspringe.`)
  process.exit(0)
}

console.log(`🚀 Starte einmalige Content-Migration ${migrationId} in Datenbank ${dbName} …`)

await import('./run-waermepumpe-cluster-2026.mjs')

await withMigrationCollection((col) =>
  col.updateOne(
    { _id: migrationId },
    {
      $set: {
        completedAt: new Date(),
        description: 'Wärmepumpen-Ratgeber-Cluster 2026 eingespielt',
      },
    },
    { upsert: true },
  ),
)

console.log(`✅ Content-Migration ${migrationId} abgeschlossen.`)
