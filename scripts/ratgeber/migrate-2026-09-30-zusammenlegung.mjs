// Ratgeber-Aufräumen Schritt 4: Artikel zusammenlegen (siehe docs/ratgeber-zusammenlegung-schritt-4.md)
//
// Für jeden Eintrag in _merges.mjs:
// - fehlende Inhalte aus der Quelle im Ziel ergänzen (wortgleich übernommen)
// - Quelle auf „entwurf“ setzen – nichts wird gelöscht
// Die 301-Weiterleitungen stehen im Frontend (pe: src/lib/seo/ratgeber-redirects.mjs).
// Das Frontend mit den Weiterleitungen VOR dem --apply deployen, sonst sind die alten URLs
// zwischenzeitlich 404.
//
// Aufruf:
//   node scripts/ratgeber/migrate-2026-09-30-zusammenlegung.mjs           → nur Vorschau, schreibt nichts
//   node scripts/ratgeber/migrate-2026-09-30-zusammenlegung.mjs --apply   → Änderungen schreiben
//
// Idempotent: bereits übernommene Inhalte und Entwürfe werden übersprungen.

import { MongoClient } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'
import { RATGEBER_MERGES, applyMergeContent } from './_merges.mjs'

const migrationId = 'ratgeber-zusammenlegung-2026-09-30'
const apply = process.argv.includes('--apply')
const mongoUrl = process.env.DATABASE_URL

if (!mongoUrl) throw new Error('DATABASE_URL fehlt')

const client = new MongoClient(String(mongoUrl))

try {
  await client.connect()

  const db = client.db(resolvePayloadDbName(mongoUrl))
  const col = db.collection('ratgebers')
  const now = new Date()

  console.log(apply ? '▶︎ Änderungen werden geschrieben.' : '▶︎ Vorschau – es wird nichts geschrieben. Mit --apply ausführen.')

  // Erst alles prüfen, dann schreiben: fehlt ein Ziel, bleibt die Quelle online
  const plan = []
  for (const merge of RATGEBER_MERGES) {
    const quelle = await col.findOne({ slug: merge.quelle.slug }, { projection: { slug: 1, kategorie: 1, status: 1 } })
    const ziel = await col.findOne({ slug: merge.ziel.slug }, { projection: { slug: 1, kategorie: 1, status: 1, inhalt: 1, faq: 1 } })

    if (!ziel || ziel.status !== 'veroeffentlicht' || ziel.kategorie !== merge.ziel.kategorie) {
      throw new Error(`Ziel ${merge.ziel.kategorie}/${merge.ziel.slug} fehlt oder ist nicht veröffentlicht – Abbruch, nichts geschrieben`)
    }
    if (!quelle) console.log(`⚠️ Quelle ${merge.quelle.slug} nicht in der Datenbank`)
    else if (quelle.kategorie !== merge.quelle.kategorie) {
      throw new Error(`Quelle ${merge.quelle.slug} liegt in ${quelle.kategorie}, erwartet ${merge.quelle.kategorie} – Weiterleitung prüfen, Abbruch`)
    }

    plan.push({ merge, quelle, ziel, result: applyMergeContent(ziel.slug, ziel) })
  }

  const totals = { uebernommen: 0, vorhanden: 0, entwuerfe: 0 }

  for (const { merge, quelle, ziel, result } of plan) {
    console.log(`\n🔀 /${merge.quelle.kategorie}/${merge.quelle.slug}\n   → /${merge.ziel.kategorie}/${merge.ziel.slug}`)

    for (const teil of result.applied) console.log(`   ＋ ${teil}`)
    for (const teil of result.present) console.log(`   ✓ ${teil} (schon vorhanden)`)
    for (const teil of result.notFound) console.log(`   ⚠️ nicht gefunden: ${teil}`)
    if (!result.applied.length && !result.present.length) console.log('   (keine Inhalte zu übernehmen)')

    totals.uebernommen += result.applied.length
    totals.vorhanden += result.present.length

    if (apply && result.applied.length) {
      await col.updateOne(
        { _id: ziel._id },
        { $set: { inhalt: result.article.inhalt, faq: result.article.faq, updatedAt: now } },
      )
    }

    if (quelle && quelle.status !== 'entwurf') {
      totals.entwuerfe += 1
      console.log(`   ⏸ Quelle wird Entwurf (bisher: ${quelle.status})`)
      if (apply) await col.updateOne({ _id: quelle._id }, { $set: { status: 'entwurf', updatedAt: now } })
    } else if (quelle) {
      console.log('   ✓ Quelle ist bereits Entwurf')
    }
  }

  console.log('')
  console.log(
    `${apply ? 'Geändert' : 'Zu ändern'}: ${totals.uebernommen} Teile übernommen · ${totals.entwuerfe} Quellen auf Entwurf · ` +
      `${totals.vorhanden} bereits vorhanden`,
  )

  if (apply) {
    await db.collection('_content_migrations').updateOne(
      { _id: migrationId },
      { $set: { completedAt: now, description: 'Ratgeber: 3 Artikel zusammengelegt, Quellen als Entwurf' } },
      { upsert: true },
    )
    console.log(`✅ ${migrationId} abgeschlossen.`)
  } else {
    console.log('ℹ️ Vorschau beendet. Schreiben: --apply')
  }
} finally {
  await client.close()
}
