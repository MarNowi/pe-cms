// Ratgeber-Aufräumen Schritt 2: Themen-Cluster setzen (siehe docs/ratgeber-audit.md, Abschnitt 5 und 11)
//
// Setzt für jeden Artikel das Feld `cluster` nach der Zuordnung in _clusters.mjs.
// Artikel, deren Cluster nicht zur Kategorie passt oder die keine Zuordnung haben,
// werden gemeldet und nicht verändert.
//
// Aufruf:
//   node scripts/ratgeber/migrate-2026-09-29-cluster.mjs           → nur Vorschau, schreibt nichts
//   node scripts/ratgeber/migrate-2026-09-29-cluster.mjs --apply   → Änderungen schreiben
//
// Idempotent: Artikel mit bereits korrektem Cluster werden übersprungen.

import { MongoClient } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'
import { CLUSTER_BY_SLUG, RATGEBER_CLUSTERS, isClusterOfKategorie } from './_clusters.mjs'

const migrationId = 'ratgeber-cluster-2026-09-29'
const apply = process.argv.includes('--apply')
const mongoUrl = process.env.DATABASE_URL

if (!mongoUrl) throw new Error('DATABASE_URL fehlt')

const client = new MongoClient(String(mongoUrl))

try {
  await client.connect()

  const db = client.db(resolvePayloadDbName(mongoUrl))
  const col = db.collection('ratgebers')
  const now = new Date()
  const docs = await col
    .find({}, { projection: { slug: 1, kategorie: 1, cluster: 1, status: 1 } })
    .sort({ kategorie: 1, slug: 1 })
    .toArray()

  console.log(apply ? '▶︎ Änderungen werden geschrieben.' : '▶︎ Vorschau – es wird nichts geschrieben. Mit --apply ausführen.')

  const counts = { gesetzt: 0, unveraendert: 0, warnungen: 0 }
  const perCluster = new Map()

  for (const doc of docs) {
    const target = CLUSTER_BY_SLUG[doc.slug]

    if (!target) {
      counts.warnungen += 1
      console.log(`⚠️ Keine Zuordnung in _clusters.mjs: ${doc.slug} (${doc.kategorie}, ${doc.status})`)
      continue
    }

    if (!isClusterOfKategorie(target, doc.kategorie)) {
      counts.warnungen += 1
      console.log(`⚠️ Cluster ${target} passt nicht zur Kategorie ${doc.kategorie}: ${doc.slug} – übersprungen`)
      continue
    }

    if (doc.status === 'veroeffentlicht') perCluster.set(target, (perCluster.get(target) ?? 0) + 1)

    if (doc.cluster === target) {
      counts.unveraendert += 1
      continue
    }

    if (apply) await col.updateOne({ _id: doc._id }, { $set: { cluster: target, updatedAt: now } })
    counts.gesetzt += 1
    console.log(`🏷️ ${doc.kategorie}/${doc.slug}: ${doc.cluster ?? '–'} → ${target}`)
  }

  console.log('')
  console.log('Veröffentlichte Artikel je Cluster:')
  for (const { value, label, kategorie } of RATGEBER_CLUSTERS) {
    const count = perCluster.get(value) ?? 0
    console.log(`  ${count === 0 ? '⚠️' : '  '} ${kategorie.padEnd(24)} ${label.padEnd(44)} ${count}`)
  }
  console.log('')
  console.log(`${apply ? 'Gesetzt' : 'Zu setzen'}: ${counts.gesetzt} · bereits korrekt: ${counts.unveraendert} · Warnungen: ${counts.warnungen}`)

  if (apply) {
    await db.collection('_content_migrations').updateOne(
      { _id: migrationId },
      { $set: { completedAt: now, description: 'Ratgeber: Themen-Cluster gesetzt' } },
      { upsert: true },
    )
    console.log(`✅ ${migrationId} abgeschlossen.`)
  } else {
    console.log('ℹ️ Vorschau beendet. Zum Schreiben: --apply')
  }
} finally {
  await client.close()
}
