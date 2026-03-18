// Ausführen mit: node scripts/seed-ratgeber.mjs
// Direkt in Coolify Terminal: node /app/scripts/seed-ratgeber.mjs

import { MongoClient, ObjectId } from 'mongodb'

const URI = process.env.DATABASE_URL
const client = new MongoClient(URL)

function p(...children) {
  return { type: 'paragraph', children, direction: null, format: '', indent: 0, version: 1, textFormat: 0, textStyle: '' }
}
function t(text, format = 0) {
  return { type: 'text', text, format, detail: 0, mode: 'normal', style: '', version: 1 }
}
function bold(text) { return t(text, 1) }
function h(tag, ...children) {
  return { type: 'heading', tag, children, direction: null, format: '', indent: 0, version: 1 }
}
function ul(...items) {
  return {
    type: 'list', listType: 'bullet', tag: 'ul', start: 1,
    direction: null, format: '', indent: 0, version: 1,
    children: items.map((item, i) => ({
      type: 'listitem', value: i + 1, direction: null, format: '', indent: 0, version: 1,
      children: [t(item)],
    })),
  }
}
function root(...children) {
  return { root: { type: 'root', children, direction: null, format: '', indent: 0, version: 1 } }
}

async function seed() {
  await client.connect()
  const db = client.db('test')
  const col = db.collection('ratgebers')

  await col.deleteMany({ slug: 'kosten-solaranlage-einfamilienhaus' })

  await col.insertOne({
    _id: new ObjectId(),
    titel: 'Was kostet eine Solaranlage für ein Einfamilienhaus?',
    slug: 'kosten-solaranlage-einfamilienhaus',
    kategorie: 'solaranlage',
    lesezeit: 12,
    status: 'veroeffentlicht',
    createdAt: new Date(),
    updatedAt: new Date(),

    zusammenfassung: [
      { id: new ObjectId().toString(), punkt: root(p(bold('Eine 10-kWp-Solaranlage kostet aktuell ca. 20.000 € inkl. 9,6 kWh Speicher'), t(' – das entspricht rund 2.000 € pro kWp all-in.'))) },
      { id: new ObjectId().toString(), punkt: root(p(bold('Eigenverbrauch schlägt Einspeisung deutlich:'), t(' Wer seinen Solarstrom selbst nutzt, spart rund 30 Cent pro Kilowattstunde – die Einspeisevergütung liegt aktuell bei 7,86 Cent.'))) },
      { id: new ObjectId().toString(), punkt: root(p(bold('Ein Speicher erhöht den Eigenverbrauch von ca. 30–40 % auf bis zu 80 %'), t(' – das verkürzt die Amortisationszeit erheblich.'))) },
      { id: new ObjectId().toString(), punkt: root(p(bold('Vorsicht bei Billigangeboten:'), t(' Wer nur den Preis vergleicht, vergleicht oft Äpfel mit Birnen.'))) },
    ],

    inhalt: [
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('1. Warum die Preise so stark variieren')),
          p(t('Wer drei Angebote für eine Solaranlage einholt, wundert sich oft: Die Preisunterschiede können bei gleicher Kilowatt-Peak-Leistung mehrere Tausend Euro betragen.')),
          p(t('Ein seriöses Angebot enthält immer:')),
          ul('Verschattungsanalyse und Ertragsberechnung', 'Sauberes String-Design passend zur Dachsituation', 'Fachgerechte Dachmontage inklusive Durchdringungen und Abdichtung', 'Wechselrichter und Verkabelung nach Norm', 'Anmeldung beim Netzbetreiber und Marktstammdatenregister', 'Inbetriebnahme und Einweisung'),
          p(t('Was bei günstigen Angeboten oft fehlt: eine realistische Ertragsberechnung, korrekte Dokumentation oder die Anmeldebürokratie.'))
        )
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('2. Was kostet eine Solaranlage – konkrete Zahlen')),
          p(t('Für ein typisches Einfamilienhaus mit einem Jahresverbrauch von rund 4.000 bis 5.000 Kilowattstunden passt eine Anlage mit 10 kWp Leistung gut.')),
          p(t('Bei PEAK.Energy liegt der Richtwert für eine 10-kWp-Anlage inkl. 9,6 kWh Speicher bei ca. 20.000 € – das entspricht 2.000 € pro kWp all-in.')),
          ul('Solarmodule: ca. 25 % der Gesamtkosten', 'Wechselrichter: ca. 15 %', 'Montagesystem & Verkabelung: ca. 20 %', 'Planung, Montage, Anmeldung: ca. 40 %')
        )
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tipp',
        titel: 'Steuervorteil seit 2023',
        content: root(p(t('Seit 2023 entfällt die Mehrwertsteuer auf Solarmodule, Wechselrichter und Speicher für private Hausdächer – das spart direkt 19 % auf die Hardwarekosten.')))
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tabelle',
        titel: 'Kostenübersicht nach Anlagengröße (Richtwerte inkl. Speicher)',
        zeilen: [
          { id: new ObjectId().toString(), spalte1: 'Haushalt', spalte2: 'Anlagengröße', spalte3: 'Investition inkl. Speicher' },
          { id: new ObjectId().toString(), spalte1: '1–2 Personen', spalte2: '5–6 kWp', spalte3: 'ca. 13.000–15.000 €' },
          { id: new ObjectId().toString(), spalte1: '3–4 Personen', spalte2: '7,5–10 kWp', spalte3: 'ca. 16.000–22.000 €' },
          { id: new ObjectId().toString(), spalte1: '4+ Personen mit E-Auto/WP', spalte2: '12–15 kWp', spalte3: 'ca. 23.000–30.000 €' },
        ]
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('3. Diese Faktoren beeinflussen den Preis')),
          h('h3', t('Dachbeschaffenheit')),
          p(t('Ein Schrägdach nach Süden ohne Verschattung ist der einfachste Fall. Flachdächer, Ost-West-Belegungen oder Gauben erhöhen den Planungsaufwand.')),
          h('h3', t('Qualität der Module')),
          p(t('Premium-Module mit 30 Jahren Herstellergarantie kosten mehr – liefern aber über die gesamte Anlagenlebensdauer mehr Ertrag und weniger Ärger.')),
          h('h3', t('Zählerschrank')),
          p(t('Manchmal muss der Zählerschrank vor der PV-Installation erneuert werden. Das sollte im Vorfeld geprüft und im Angebot berücksichtigt werden.'))
        )
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('4. Lohnt sich ein Stromspeicher?')),
          p(t('Ohne Speicher nutzt du rund 30 bis 40 % des erzeugten Stroms selbst. Mit Speicher steigt dein Eigenverbrauch auf bis zu 80 %.')),
          p(t('Du vermeidest damit Netzbezug zu 30–35 Cent und nutzt deinen eigenen Strom zu rechnerisch 5–6 Cent pro Kilowattstunde.'))
        )
      },
      {
        id: new ObjectId().toString(),
        blockType: 'hinweis',
        titel: 'Solarspitzengesetz 2025',
        content: root(p(t('Seit Februar 2025 kann die Einspeisevergütung bei Netzüberlastung entfallen. Speicher werden damit noch attraktiver.')))
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tabelle',
        titel: 'Laufende Kosten im Überblick',
        zeilen: [
          { id: new ObjectId().toString(), spalte1: 'Kostenposition', spalte2: 'Details' },
          { id: new ObjectId().toString(), spalte1: 'Wartung & Inspektion', spalte2: 'Einmal jährlich empfohlen' },
          { id: new ObjectId().toString(), spalte1: 'Reinigung', spalte2: 'Nur bei Flachdach oder starker Verschmutzung' },
          { id: new ObjectId().toString(), spalte1: 'Versicherung', spalte2: 'Haftpflicht mindestens, Vollschutz empfehlenswert' },
          { id: new ObjectId().toString(), spalte1: 'Rücklagen Wechselrichter', spalte2: 'Tausch nach ca. 15–20 Jahren einplanen' },
        ]
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('6. Wie viel kannst du sparen?')),
          p(t('Ausgangssituation: 4.500 kWh Jahresverbrauch, 32 Cent/kWh Netzstrom, 10 kWp Anlage mit 9,6 kWh Speicher, Investition ca. 20.000 €.')),
          ul(
            'Eigenverbrauch: ca. 3.600 kWh/Jahr → Autarkiegrad ca. 68–80 %',
            'Netzbezug: ca. 900 kWh → Kosten ca. 288 €/Jahr',
            'Ersparnis gesamt: ca. 1.500–1.700 €/Jahr (nach Betriebskosten)',
            'Amortisation: ca. 10–14 Jahre bei 30+ Jahren Lebensdauer',
            'Rendite: ca. 11 % p.a. auf das eingesetzte Kapital'
          )
        )
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tipp',
        titel: 'Förderungen & Finanzierung',
        content: root(
          ul(
            '0 % Mehrwertsteuer auf Module, Wechselrichter und Speicher (seit 2023)',
            'KfW-Kredit 270 – günstiger Kredit für erneuerbare Energien',
            'Regionale Förderungen – manche Kommunen am Niederrhein fördern zusätzlich',
            'Einspeisevergütung – für 20 Jahre garantiert (7,86 ct/kWh bei ≤10 kWp)'
          ),
          p(bold('PEAK.Energy übernimmt auf Wunsch die komplette Antragsstellung'), t(' – von der Netzbetreiberanmeldung über das Marktstammdatenregister bis zur KfW-Beratung.'))
        )
      },
      {
        id: new ObjectId().toString(),
        blockType: 'cta',
        titel: 'Kostenlose Beratung für deine Solaranlage',
        text: 'Wir schauen uns deine Situation vor Ort an und erstellen dir ein Festpreisangebot – ohne Anzahlung, ohne versteckte Kosten.',
        buttonText: 'Jetzt Beratung anfragen',
        buttonLink: '/kontakt',
      },
    ],

    seo: {
      metaTitle: 'Was kostet eine Solaranlage? Ehrliche Preise vom Meisterbetrieb | PEAK.Energy',
      metaDescription: 'Aktuelle Preise für Solaranlagen mit Speicher für Einfamilienhäuser am Niederrhein. 10 kWp inkl. 9,6 kWh Speicher ab ca. 20.000 €.',
    },
  })

  console.log('✅ Artikel erfolgreich angelegt!')
  await client.close()
}

seed().catch(err => { console.error('❌ Fehler:', err); process.exit(1) })
