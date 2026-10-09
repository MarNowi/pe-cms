// Führt den MiSpeL-Ratgeber pro Datenbank nur einmal aus.
// Idempotent: der Artikel selbst wird anhand seines Slugs upserted.
import { MongoClient } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'
import { t, p, link, hinweisBlock } from './_helpers.mjs'

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
    // Nur den überholten MiSpeL-Hinweis im bereits veröffentlichten Artikel
    // korrigieren. Keinen vollständigen Bestandsartikel erneut überschreiben.
    const ratgeber = client.db(resolvePayloadDbName(mongoUrl)).collection('ratgebers')
    const old = await ratgeber.findOne({
      slug: 'stromspeicher-aus-netz-laden-dynamisch-sinnvoll',
    })
    const blocks = old?.inhalt
    if (Array.isArray(blocks)) {
      let corrected = false
      const next = blocks.map((block) => {
        if (
          block?.blockType !== 'hinweis' ||
          !String(block.titel || '').startsWith('MiSpeL soll Mischspeicher flexibler machen')
        ) return block

        corrected = true
        const neu = hinweisBlock(
          'MiSpeL seit 1. Oktober 2026 beschlossen – Umsetzung prüfen',
          p(
            t('Die Bundesnetzagentur hat MiSpeL am 1. Oktober 2026 beschlossen. Damit gibt es neue Abgrenzungs- und Pauschaloptionen für gemischt geladene Speicher. In der Übergangszeit bis Ende September 2027 ist ihre Anwendung nur mit Einverständnis von Netz- und Messstellenbetreiber möglich. Die Pauschaloption benötigt zusätzlich eine beihilferechtliche Genehmigung durch die EU-Kommission. Netzladen mit späterer Netzeinspeisung sollte deshalb nicht ohne Prüfung des Mess- und Vermarktungskonzepts aktiviert werden. Mehr im '),
            link('aktuellen MiSpeL-Ratgeber', '/strom-energiemanagement/mispel-2026-batteriespeicher-photovoltaik'),
            t('.'),
          ),
        )
        return { ...neu, id: block.id }
      })
      if (corrected) {
        await ratgeber.updateOne(
          { _id: old._id },
          { $set: { inhalt: next, updatedAt: new Date() } },
        )
        console.log('✅ Veralteten MiSpeL-Hinweis im Netzlade-Ratgeber korrigiert.')
      }
    }
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
