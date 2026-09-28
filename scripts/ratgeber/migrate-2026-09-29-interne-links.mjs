// Ratgeber-Aufräumen Schritt 3: interne Verlinkung (siehe docs/ratgeber-links-schritt-3.md)
//
// - entfernt die 20 Linklisten „Passende Ratgeber zum Weiterlesen“
// - setzt die Links aus _internalLinks.mjs in den bestehenden Fließtext
// Am Wortlaut ändert sich nichts; ein Link entsteht nur, wenn der Ankertext genau an der
// hinterlegten Stelle steht.
//
// Aufruf:
//   node scripts/ratgeber/migrate-2026-09-29-interne-links.mjs           → nur Vorschau, schreibt nichts
//   node scripts/ratgeber/migrate-2026-09-29-interne-links.mjs --apply   → Änderungen schreiben
//
// Idempotent: bereits gesetzte Links und entfernte Listen werden übersprungen.

import { MongoClient } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'
import { INTERNAL_LINKS } from './_internalLinks.mjs'
import { transformArticleLinks } from './_linkTransform.mjs'

const migrationId = 'ratgeber-interne-links-2026-09-29'
const apply = process.argv.includes('--apply')
const verbose = process.argv.includes('--details')
const mongoUrl = process.env.DATABASE_URL

if (!mongoUrl) throw new Error('DATABASE_URL fehlt')

const client = new MongoClient(String(mongoUrl))

try {
  await client.connect()

  const db = client.db(resolvePayloadDbName(mongoUrl))
  const col = db.collection('ratgebers')
  const now = new Date()
  const docs = await col
    .find({}, { projection: { slug: 1, kategorie: 1, status: 1, inhalt: 1 } })
    .sort({ kategorie: 1, slug: 1 })
    .toArray()

  console.log(apply ? '▶︎ Änderungen werden geschrieben.' : '▶︎ Vorschau – es wird nichts geschrieben. Mit --apply ausführen.')

  const totals = { artikel: 0, links: 0, vorhanden: 0, nichtGefunden: 0, listen: 0 }

  for (const doc of docs) {
    const result = transformArticleLinks(doc.slug, doc.inhalt ?? [])
    const changed = result.applied.length > 0 || result.removedLists > 0

    totals.links += result.applied.length
    totals.vorhanden += result.present.length
    totals.nichtGefunden += result.notFound.length
    totals.listen += result.removedLists

    for (const spec of result.notFound) {
      console.log(`⚠️ ${doc.slug}: Stelle nicht gefunden – „${spec.anchor}“ → ${spec.url}`)
    }

    if (!changed) continue
    totals.artikel += 1

    const liste = result.removedLists ? ', Linkliste entfernt' : ''
    console.log(`🔗 ${doc.kategorie}/${doc.slug}: ${result.applied.length} Link(s)${liste}`)
    if (verbose) {
      for (const spec of result.applied) console.log(`     „${spec.anchor}“ → ${spec.url}`)
    }

    if (apply) {
      await col.updateOne({ _id: doc._id }, { $set: { inhalt: result.inhalt, updatedAt: now } })
    }
  }

  const unbekannt = Object.keys(INTERNAL_LINKS).filter((slug) => !docs.some((doc) => doc.slug === slug))
  for (const slug of unbekannt) console.log(`⚠️ Artikel aus _internalLinks.mjs nicht in der Datenbank: ${slug}`)

  console.log('')
  console.log(
    `${apply ? 'Geändert' : 'Zu ändern'}: ${totals.artikel} Artikel · ${totals.links} Links neu · ` +
      `${totals.listen} Linklisten entfernt · ${totals.vorhanden} bereits vorhanden · ${totals.nichtGefunden} nicht gefunden`,
  )

  if (apply) {
    await db.collection('_content_migrations').updateOne(
      { _id: migrationId },
      { $set: { completedAt: now, description: 'Ratgeber: interne Links im Fließtext, Linklisten entfernt' } },
      { upsert: true },
    )
    console.log(`✅ ${migrationId} abgeschlossen.`)
  } else {
    console.log('ℹ️ Vorschau beendet. Einzelne Links anzeigen: --details · Schreiben: --apply')
  }
} finally {
  await client.close()
}
