// Ratgeber-Aufräumen Schritt 4: redaktionelle Korrekturen (siehe docs/ratgeber-redaktion-schritt-4.md)
//
// - Texte aus _textCorrections.mjs: Floskel „ehrliche Einordnung“, Sie-Form → Du-Form, Tippfehler
// - metaTitle ohne „– WE ♥️ ENERGY“ und ohne doppelte Leerzeichen
// - Alt-Texte der Titelbilder aus _mediaAlt.mjs
// Fachliche Aussagen bleiben unverändert.
//
// Aufruf:
//   node scripts/ratgeber/migrate-2026-09-30-redaktion.mjs           → nur Vorschau, schreibt nichts
//   node scripts/ratgeber/migrate-2026-09-30-redaktion.mjs --apply   → Änderungen schreiben
//
// Idempotent: bereits korrigierte Stellen werden übersprungen.

import { MongoClient } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'
import { applyTextCorrections, TEXT_CORRECTIONS } from './_textCorrections.mjs'
import { MEDIA_ALT } from './_mediaAlt.mjs'

const migrationId = 'ratgeber-redaktion-2026-09-30'
const apply = process.argv.includes('--apply')
const verbose = process.argv.includes('--details')
const mongoUrl = process.env.DATABASE_URL

if (!mongoUrl) throw new Error('DATABASE_URL fehlt')

const FIELDS = ['titel', 'teaser', 'seo', 'zusammenfassung', 'inhalt', 'faq']

const client = new MongoClient(String(mongoUrl))

try {
  await client.connect()

  const db = client.db(resolvePayloadDbName(mongoUrl))
  const col = db.collection('ratgebers')
  const media = db.collection('media')
  const now = new Date()

  console.log(apply ? '▶︎ Änderungen werden geschrieben.' : '▶︎ Vorschau – es wird nichts geschrieben. Mit --apply ausführen.')

  // ─── Texte ──────────────────────────────────────────────────────────────────
  const docs = await col
    .find({}, { projection: { slug: 1, kategorie: 1, ...Object.fromEntries(FIELDS.map((f) => [f, 1])) } })
    .sort({ kategorie: 1, slug: 1 })
    .toArray()

  const totals = { artikel: 0, stellen: 0, metaTitle: 0, vorhanden: 0, nichtGefunden: 0 }

  for (const doc of docs) {
    const result = applyTextCorrections(doc.slug, doc)

    totals.stellen += result.applied.length
    totals.vorhanden += result.present.length
    totals.nichtGefunden += result.notFound.length
    if (result.metaTitle) totals.metaTitle += 1

    for (const c of result.notFound) console.log(`⚠️ ${doc.slug}: Stelle nicht gefunden (${c.feld}) – „${c.alt}“`)

    if (!result.applied.length && !result.metaTitle) continue
    totals.artikel += 1

    const teile = []
    if (result.applied.length) teile.push(`${result.applied.length} Korrektur(en)`)
    if (result.metaTitle) teile.push('metaTitle ohne Slogan')
    console.log(`✏️ ${doc.kategorie}/${doc.slug}: ${teile.join(', ')}`)
    if (verbose) {
      if (result.metaTitle) console.log(`     metaTitle: „${doc.seo?.metaTitle}“ → „${result.article.seo.metaTitle}“`)
      for (const c of result.applied) console.log(`     ${c.feld}: „${c.alt}“ → „${c.neu}“`)
    }

    if (apply) {
      const set = { updatedAt: now }
      for (const f of FIELDS) {
        if (JSON.stringify(result.article[f]) !== JSON.stringify(doc[f])) set[f] = result.article[f]
      }
      await col.updateOne({ _id: doc._id }, { $set: set })
    }
  }

  const unbekannt = Object.keys(TEXT_CORRECTIONS).filter((slug) => !docs.some((doc) => doc.slug === slug))
  for (const slug of unbekannt) console.log(`⚠️ Artikel aus _textCorrections.mjs nicht in der Datenbank: ${slug}`)

  // ─── Alt-Texte ──────────────────────────────────────────────────────────────
  let altGeaendert = 0
  for (const [filename, alt] of Object.entries(MEDIA_ALT)) {
    const medium = await media.findOne({ filename }, { projection: { alt: 1 } })
    if (!medium) {
      console.log(`⚠️ Bild nicht gefunden: ${filename}`)
      continue
    }
    if (medium.alt === alt) continue
    altGeaendert += 1
    console.log(`🖼️ ${filename}: „${medium.alt ?? ''}“ → „${alt}“`)
    if (apply) await media.updateOne({ _id: medium._id }, { $set: { alt, updatedAt: now } })
  }

  console.log('')
  console.log(
    `${apply ? 'Geändert' : 'Zu ändern'}: ${totals.artikel} Artikel · ${totals.stellen} Textstellen · ` +
      `${totals.metaTitle} metaTitle · ${altGeaendert} Alt-Texte · ${totals.vorhanden} bereits korrigiert · ` +
      `${totals.nichtGefunden} nicht gefunden`,
  )

  if (apply) {
    await db.collection('_content_migrations').updateOne(
      { _id: migrationId },
      { $set: { completedAt: now, description: 'Ratgeber: Floskeln, Du-Form, Tippfehler, metaTitle, Alt-Texte' } },
      { upsert: true },
    )
    console.log(`✅ ${migrationId} abgeschlossen.`)
  } else {
    console.log('ℹ️ Vorschau beendet. Einzelne Stellen anzeigen: --details · Schreiben: --apply')
  }
} finally {
  await client.close()
}
