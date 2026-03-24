import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Eine 15 kWp Solaranlage kann über das Jahr eine sehr starke Strommenge erzeugen',
      rest: ' – wie viel genau zusammenkommt, hängt aber stark von Dach, Standort und Verschattung ab.',
    },
    mitSpeicherText: {
      bold: 'Gerade bei 15 kWp wird oft viel Dachfläche genutzt',
      rest: ' – deshalb ist eine saubere Einordnung von Ertrag, Verbrauch und Eigenverbrauch besonders wichtig.',
    },
    groessenText: {
      bold: 'Hoher Ertrag allein ist nicht alles',
      rest: ' – entscheidend ist, wie gut die erzeugte Strommenge im Haus, mit Wärmepumpe oder später mit E-Auto genutzt werden kann.',
    },
    planungsText: {
      bold: 'Eine gute 15 kWp Anlage wird nicht nur auf maximale Erzeugung ausgerichtet',
      rest: ' – sondern auf eine sinnvolle Kombination aus Dachnutzung, Verbrauch und technischer Qualität.',
    },
  },

  intro: {
    title: '1. Wie viel Strom erzeugt eine 15 kWp Solaranlage?',
    paragraphs: [
      'Eine 15 kWp Solaranlage ist für viele Häuser bereits eine bewusst größere Lösung. Entsprechend kann auch der Jahresertrag deutlich höher ausfallen als bei kleineren Anlagen.',
      'Wie viel Strom tatsächlich erzeugt wird, hängt aber nicht nur von der Leistung ab. Dachausrichtung, Dachneigung, Verschattung, Standort und Wetterverlauf spielen eine große Rolle.',
      'Gerade bei 15 kWp ist außerdem wichtig, nicht nur die Erzeugung zu betrachten, sondern auch die Frage, wie gut der erzeugte Strom im Alltag genutzt werden kann.',
    ],
  },

  faq: [
    {
      frage: 'Wie viel Strom produziert eine 15 kWp Solaranlage pro Jahr?',
      antwort:
        'Das hängt stark von Dach, Standort, Ausrichtung und Verschattung ab. Eine 15 kWp Anlage kann im Jahr sehr viel Strom erzeugen, die genaue Menge ist aber immer vom konkreten Projekt abhängig.',
    },
    {
      frage: 'Ist der Ertrag einer 15 kWp Anlage automatisch doppelt so gut wie bei kleineren Anlagen?',
      antwort:
        'Nicht pauschal. Eine größere Anlage kann deutlich mehr Strom erzeugen, aber wie stark der Mehrertrag ausfällt, hängt davon ab, wie gut zusätzliche Dachflächen technisch und wirtschaftlich nutzbar sind.',
    },
    {
      frage: 'Lohnt sich 15 kWp besonders bei Wärmepumpe oder E-Auto?',
      antwort:
        'Ja, das kann sehr sinnvoll sein. Gerade bei höherem Strombedarf durch Wärmepumpe, Wallbox oder allgemein große Dachflächen ist 15 kWp oft eine interessante Größenordnung.',
    },
    {
      frage: 'Ist der Winterertrag bei 15 kWp trotzdem deutlich geringer?',
      antwort:
        'Ja. Auch bei größeren Anlagen bleibt der Winter deutlich schwächer als die sonnenstarken Monate. Deshalb sollte der Jahresertrag immer als Ganzes betrachtet werden.',
    },
    {
      frage: 'Was ist bei 15 kWp wichtiger: Ertrag oder Eigenverbrauch?',
      antwort:
        'Beides gehört zusammen. Ein hoher Ertrag ist gut, aber entscheidend ist, wie gut der erzeugte Strom zum Verbrauchsprofil, zu Wärmepumpe, E-Auto und zur Gesamtplanung des Hauses passt.',
    },
  ],

  outro: {
    title: '2. Fazit',
    paragraphs: [
      'Eine 15 kWp Solaranlage kann sehr viel Strom erzeugen, wenn Dachfläche und technische Ausgangslage gut passen.',
      'Wichtiger als eine pauschale Ertragszahl ist am Ende, ob die Anlage sauber zum Haus, zum Verbrauch und zu den Ausbauplänen passt.',
    ],
  },

  cta: {
    titel: 'Lass uns ehrlich prüfen, was 15 kWp bei deinem Haus bringen',
    text:
      'Wir schauen uns Dachfläche, Ausrichtung, Verbrauch und spätere Lasten gemeinsam an – realistisch, praxisnah und ohne Hochglanzrechnung.',
  },
})

const article = createArticleBase({
  titel: 'Wie viel Strom erzeugt eine 15 kWp Solaranlage?',
  slug: 'wie-viel-strom-erzeugt-eine-15-kwp-solaranlage',
  kategorie: 'solaranlage',
  teaser:
    'Wie viel Strom erzeugt eine 15 kWp Solaranlage wirklich? Hier findest du eine ehrliche Einordnung zu Dach, Ertrag, Winter und sinnvoller Nutzung im Alltag.',
  lesezeit: 7,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,
    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Wie viel Strom erzeugt eine 15 kWp Solaranlage? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Wie viel Strom erzeugt eine 15 kWp Solaranlage wirklich? Ehrliche Einordnung zu Ertrag, Dachfläche, Winter und sinnvoller Nutzung – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
