// Ratgeber-Aufräumen Schritt 1: technische Fehler (siehe docs/ratgeber-audit.md, Abschnitte 3, 6 und 8.1)
//
// 1. Kaputte interne Links korrigieren und Links auf verschobene/umbenannte Artikel nachziehen
// 2. cloud-ems-vs-lokales-ems-energiedaten: Kategorie stromspeicher → strom-energiemanagement
//    (die alte URL leitet das Frontend automatisch permanent weiter)
// 3. Durch statische Leistungsseiten verdeckte Repowering-Artikel: 4 bekommen einen neuen Slug,
//    3 Dubletten werden Entwurf. Nichts wird gelöscht.
//
// Aufruf:
//   node scripts/ratgeber/migrate-2026-09-28-technische-fehler.mjs           → nur Vorschau, schreibt nichts
//   node scripts/ratgeber/migrate-2026-09-28-technische-fehler.mjs --apply   → Änderungen schreiben
//
// Das Script ist idempotent: Bereits erledigte Schritte werden übersprungen.
// Die Ursprungs-Scripts der betroffenen Artikel sind auf denselben Stand gebracht.

import { MongoClient } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'

const migrationId = 'ratgeber-technische-fehler-2026-09-28'
const apply = process.argv.includes('--apply')
const mongoUrl = process.env.DATABASE_URL

if (!mongoUrl) throw new Error('DATABASE_URL fehlt')

const linkFixes = [
  {
    slug: 'solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter',
    from: '/solaranlage/smart-meter-2026-pv-kosten-pflicht-vorteile',
    to: '/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile',
  },
  {
    // Ankertext „Notstrom und Backup“ meint die Leistungsseite, nicht den Ratgeber
    slug: 'pv-anlage-bei-stromausfall-solarstrom-reicht-nicht',
    from: '/stromspeicher/notstrom-backup',
    to: '/repowering/notstrom-backup',
  },
  {
    // Ankertext „Notstrom und Backup bei PV-Anlagen“ = Titel der Leistungsseite
    slug: 'stromspeicher-kapazitaet-leistung-kw-kwh',
    from: '/stromspeicher/notstrom-backup',
    to: '/repowering/notstrom-backup',
  },
  {
    slug: 'pv-verschattung-leistungsoptimierer-stringdesign',
    from: '/solaranlage/solaranlage-planen',
    to: '/solaranlage/pv-anlage-planen',
  },
  {
    // wallbox-einfamilienhaus-richtig-planen ist nicht veröffentlicht
    slug: 'zwei-e-autos-zuhause-laden-wallboxen-hausanschluss',
    from: '/wallbox/wallbox-einfamilienhaus-richtig-planen',
    to: '/wallbox/wallbox-zu-hause-laden',
  },
  // Links, die heute auf den alten Slug zeigen: nach Kategoriewechsel bzw. neuem Slug auf die neue URL
  ...[
    'multi-use-stromspeicher',
    'lastspitzenkappung-stromspeicher-gewerbe',
  ].map((slug) => ({
    slug,
    from: '/stromspeicher/cloud-ems-vs-lokales-ems-energiedaten',
    to: '/strom-energiemanagement/cloud-ems-vs-lokales-ems-energiedaten',
  })),
  {
    slug: 'pid-hotspots-mikrorisse-delamination-pv-module',
    from: '/repowering/entsorgung-recycling',
    to: '/repowering/pv-module-entsorgen-recycling',
  },
  ...[
    'alte-pv-anlage-erweitern-neue-anlage-daneben',
    'alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module',
  ].map((slug) => ({
    slug,
    from: '/repowering/komponenten-tausch',
    to: '/repowering/komponenten-tausch-pv-anlage',
  })),
  ...[
    'hems-home-energy-management-system-hersteller-app',
    'smart-meter-2026-pv-kosten-pflicht-vorteile',
  ].map((slug) => ({
    slug,
    from: '/repowering/hems-monitoring',
    to: '/repowering/hems-monitoring-nachruesten',
  })),
]

const categoryMoves = [
  { slug: 'cloud-ems-vs-lokales-ems-energiedaten', from: 'stromspeicher', to: 'strom-energiemanagement' },
]

const slugRenames = [
  { from: 'entsorgung-recycling', to: 'pv-module-entsorgen-recycling' },
  { from: 'hems-monitoring', to: 'hems-monitoring-nachruesten' },
  { from: 'komponenten-tausch', to: 'komponenten-tausch-pv-anlage' },
  { from: 'rueckbau-montage', to: 'pv-anlage-rueckbau-montage' },
]

const toDraft = ['speicher-nachruesten', 'wirtschaftlichkeit-eeg', 'notstrom-backup']

function replaceLinkUrls(node, from, to) {
  if (Array.isArray(node)) {
    return node.reduce((count, child) => count + replaceLinkUrls(child, from, to), 0)
  }

  if (!node || typeof node !== 'object') return 0

  let count = 0

  if (node.type === 'link' && node.fields?.url === from) {
    node.fields.url = to
    count += 1
  }

  for (const value of Object.values(node)) {
    if (value && typeof value === 'object') count += replaceLinkUrls(value, from, to)
  }

  return count
}

const client = new MongoClient(String(mongoUrl))

try {
  await client.connect()

  const db = client.db(resolvePayloadDbName(mongoUrl))
  const col = db.collection('ratgebers')
  const now = new Date()
  const log = []

  console.log(apply ? '▶︎ Änderungen werden geschrieben.' : '▶︎ Vorschau – es wird nichts geschrieben. Mit --apply ausführen.')

  // 1. Links
  for (const fix of linkFixes) {
    const doc = await col.findOne({ slug: fix.slug }, { projection: { zusammenfassung: 1, inhalt: 1 } })

    if (!doc) {
      log.push(`⚠️ Link: Artikel ${fix.slug} nicht gefunden`)
      continue
    }

    const zusammenfassung = doc.zusammenfassung ?? []
    const inhalt = doc.inhalt ?? []
    const count = replaceLinkUrls(zusammenfassung, fix.from, fix.to) + replaceLinkUrls(inhalt, fix.from, fix.to)

    if (!count) {
      log.push(`✔︎ Link bereits korrekt: ${fix.slug}`)
      continue
    }

    if (apply) {
      await col.updateOne({ _id: doc._id }, { $set: { zusammenfassung, inhalt, updatedAt: now } })
    }

    log.push(`🔗 ${fix.slug}: ${count}× ${fix.from} → ${fix.to}`)
  }

  // 2. Kategorien
  for (const move of categoryMoves) {
    const doc = await col.findOne({ slug: move.slug }, { projection: { kategorie: 1 } })

    if (!doc) {
      log.push(`⚠️ Kategorie: Artikel ${move.slug} nicht gefunden`)
    } else if (doc.kategorie === move.to) {
      log.push(`✔︎ Kategorie bereits ${move.to}: ${move.slug}`)
    } else if (doc.kategorie !== move.from) {
      log.push(`⚠️ Kategorie von ${move.slug} ist ${doc.kategorie}, erwartet ${move.from} – übersprungen`)
    } else {
      if (apply) await col.updateOne({ _id: doc._id }, { $set: { kategorie: move.to, updatedAt: now } })
      log.push(`📁 ${move.slug}: /${move.from}/ → /${move.to}/`)
    }
  }

  // 3a. Neue Slugs für verdeckte Repowering-Artikel
  for (const rename of slugRenames) {
    const oldDoc = await col.findOne({ slug: rename.from }, { projection: { kategorie: 1 } })
    const newDoc = await col.findOne({ slug: rename.to }, { projection: { _id: 1 } })

    if (!oldDoc && newDoc) {
      log.push(`✔︎ Slug bereits umbenannt: ${rename.to}`)
    } else if (!oldDoc) {
      log.push(`⚠️ Slug: Artikel ${rename.from} nicht gefunden`)
    } else if (newDoc) {
      log.push(`⚠️ Slug ${rename.to} ist schon vergeben – ${rename.from} übersprungen`)
    } else {
      if (apply) await col.updateOne({ _id: oldDoc._id }, { $set: { slug: rename.to, updatedAt: now } })
      log.push(`✏️ /${oldDoc.kategorie}/${rename.from} → /${oldDoc.kategorie}/${rename.to} (war verdeckt, jetzt erreichbar)`)
    }
  }

  // 3b. Dubletten auf Entwurf
  for (const slug of toDraft) {
    const doc = await col.findOne({ slug }, { projection: { status: 1 } })

    if (!doc) {
      log.push(`⚠️ Entwurf: Artikel ${slug} nicht gefunden`)
    } else if (doc.status === 'entwurf') {
      log.push(`✔︎ Bereits Entwurf: ${slug}`)
    } else {
      if (apply) await col.updateOne({ _id: doc._id }, { $set: { status: 'entwurf', updatedAt: now } })
      log.push(`📝 ${slug}: veroeffentlicht → entwurf`)
    }
  }

  for (const line of log) console.log(line)

  if (apply) {
    await db.collection('_content_migrations').updateOne(
      { _id: migrationId },
      {
        $set: {
          completedAt: now,
          description: 'Ratgeber: kaputte Links, Kategorie Cloud-EMS, verdeckte Repowering-Artikel',
        },
      },
      { upsert: true },
    )
    console.log(`✅ ${migrationId} abgeschlossen.`)
  } else {
    console.log('ℹ️ Vorschau beendet. Zum Schreiben: --apply')
  }
} finally {
  await client.close()
}
