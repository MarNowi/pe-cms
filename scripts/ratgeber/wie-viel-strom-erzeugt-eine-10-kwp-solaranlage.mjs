import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Wie viel Strom eine 10 kWp Solaranlage erzeugt, hängt nicht nur von der kWp-Zahl ab',
      rest: ' – Dachausrichtung, Standort, Verschattung und Wetter spielen eine große Rolle.',
    },
    mitSpeicherText: {
      bold: 'Eine 10 kWp Anlage ist für viele Einfamilienhäuser eine starke Größenordnung',
      rest: ' – der tatsächliche Jahresertrag kann aber je nach Dach deutlich variieren.',
    },
    groessenText: {
      bold: 'Entscheidend ist nicht nur der maximale Ertrag auf dem Papier',
      rest: ' – sondern wie gut die erzeugte Strommenge zum eigenen Verbrauch passt.',
    },
    planungsText: {
      bold: 'Eine gute 10 kWp Anlage wird nicht nur nach Ertragswerten bewertet',
      rest: ' – sondern danach, wie sauber sie zu Dach, Alltag und späteren Verbrauchern passt.',
    },
  },

  intro: {
    title: '1. Wie viel Strom erzeugt eine 10 kWp Solaranlage überhaupt?',
    paragraphs: [
      'Eine 10 kWp Solaranlage ist für viele Einfamilienhäuser eine häufige und sinnvolle Größenordnung. Wie viel Strom sie tatsächlich erzeugt, hängt aber nicht allein von der Leistung ab.',
      'Entscheidend sind unter anderem Dachausrichtung, Dachneigung, Standort, Verschattung und Wetterverlauf. Genau deshalb gibt es keine feste Ertragszahl, die auf jedes Haus gleichermaßen passt.',
      'Wichtig ist außerdem, dass Erzeugung und Nutzung nicht verwechselt werden. Ein hoher Jahresertrag allein sagt noch nicht, wie viel davon im Haus wirklich sinnvoll genutzt werden kann.',
    ],
  },

  faq: [
    {
      frage: 'Wie viel Strom produziert eine 10 kWp Solaranlage pro Jahr?',
      antwort:
        'Das hängt stark von Dach, Standort, Ausrichtung und Verschattung ab. Eine 10 kWp Solaranlage kann im Jahr eine relevante Strommenge erzeugen, aber die genaue Zahl ist immer vom konkreten Haus abhängig.',
    },
    {
      frage: 'Produziert eine 10 kWp Anlage immer gleich viel Strom?',
      antwort:
        'Nein. Zwei Anlagen mit derselben Leistung können je nach Dachausrichtung, Verschattung, Wetterlage und technischer Auslegung unterschiedlich viel Ertrag bringen.',
    },
    {
      frage: 'Welche Rolle spielt die Dachausrichtung beim Ertrag?',
      antwort:
        'Eine sehr große. Süddächer liefern oft hohe Spitzenerträge, aber auch Ost-West-Dächer können sehr sinnvoll sein. Entscheidend ist am Ende, wie gut Dach und Verbrauch zusammenpassen.',
    },
    {
      frage: 'Ist der Stromertrag im Winter deutlich geringer?',
      antwort:
        'Ja. Im Winter ist der Ertrag meist spürbar niedriger als in den sonnenstarken Monaten. Genau deshalb sollte eine Anlage immer über das Gesamtjahr und nicht nur über einzelne Monate bewertet werden.',
    },
    {
      frage: 'Reicht eine 10 kWp Solaranlage für ein Einfamilienhaus?',
      antwort:
        'Das kann sehr gut passen, ist aber nicht pauschal für jedes Haus gleich. Entscheidend sind Haushaltsstrom, spätere Verbraucher wie Wärmepumpe oder E-Auto und die nutzbare Dachfläche.',
    },
  ],

  outro: {
    title: '2. Fazit',
    paragraphs: [
      'Wie viel Strom eine 10 kWp Solaranlage erzeugt, hängt immer vom konkreten Dach und der technischen Ausgangslage ab.',
      'Wichtiger als eine pauschale Ertragszahl ist am Ende, ob die Anlage sauber geplant wurde und wie gut die erzeugte Strommenge zum Haus passt.',
    ],
  },

  cta: {
    titel: 'Lass uns realistisch einordnen, was 10 kWp bei dir bringen',
    text:
      'Wir schauen uns Dach, Ausrichtung, Verschattung und deinen Verbrauch gemeinsam an – ehrlich, praxisnah und ohne Hochglanzrechnung.',
  },
})

const article = createArticleBase({
  titel: 'Wie viel Strom erzeugt eine 10 kWp Solaranlage?',
  slug: 'wie-viel-strom-erzeugt-eine-10-kwp-solaranlage',
  kategorie: 'solaranlage',
  teaser:
    'Wie viel Strom erzeugt eine 10 kWp Solaranlage wirklich? Hier findest du eine ehrliche Einordnung zu Dach, Ertrag, Winter und typischen Denkfehlern.',
  lesezeit: 7,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,
    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Wie viel Strom erzeugt eine 10 kWp Solaranlage? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Wie viel Strom erzeugt eine 10 kWp Solaranlage wirklich? Ehrliche Einordnung zu Ertrag, Dachausrichtung, Winter und typischen Denkfehlern – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
