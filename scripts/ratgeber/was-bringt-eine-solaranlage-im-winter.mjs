import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Eine Solaranlage bringt auch im Winter etwas',
      rest: ' – allerdings deutlich weniger als in den starken Sommermonaten.',
    },
    mitSpeicherText: {
      bold: 'Entscheidend ist nicht nur die Jahreszeit, sondern der Gesamtjahresertrag',
      rest: ' – PV wird nicht nur nach Dezember und Januar bewertet.',
    },
    groessenText: {
      bold: 'Ausrichtung, Dachneigung, Wetter und Verschattung beeinflussen den Winterertrag stark',
      rest: ' – pauschale Aussagen helfen hier nur begrenzt.',
    },
    planungsText: {
      bold: 'Eine gute Solaranlage muss nicht im Winter alles alleine leisten',
      rest: ' – sie muss über das Jahr hinweg sauber zum Haus und Verbrauch passen.',
    },
  },

  intro: {
    title: '1. Bringt eine Solaranlage im Winter überhaupt etwas?',
    paragraphs: [
      'Ja, eine Solaranlage bringt auch im Winter Strom. Allerdings liegt der Ertrag in den dunkleren Monaten deutlich unter dem Niveau der sonnenstarken Jahreszeiten.',
      'Das ist kein Fehler der Anlage, sondern eine normale Folge aus kürzeren Tagen, flacherem Sonnenstand und häufig schlechterem Wetter. Entscheidend ist deshalb nicht nur der Winter isoliert betrachtet, sondern die Leistung über das gesamte Jahr.',
      'Gerade bei Wärmepumpe oder hohem Strombedarf ist der Winter trotzdem ein wichtiger Planungsfaktor. Deshalb sollte man den Winter nicht ignorieren, aber auch nicht als alleinige Bewertungsgrundlage nehmen.',
    ],
  },

  faq: [
    {
      frage: 'Erzeugt eine Solaranlage im Winter überhaupt Strom?',
      antwort:
        'Ja. Auch im Winter erzeugt eine Solaranlage Strom, nur deutlich weniger als in den sonnenstarken Monaten. Wie viel genau zusammenkommt, hängt stark von Dach, Wetter, Ausrichtung und Verschattung ab.',
    },
    {
      frage: 'Warum ist der Ertrag im Winter geringer?',
      antwort:
        'Weil die Tage kürzer sind, die Sonne tiefer steht und Wetterlagen oft ungünstiger sind. Dadurch fällt die Stromerzeugung im Winter naturgemäß niedriger aus.',
    },
    {
      frage: 'Ist eine Solaranlage wegen des Winters weniger sinnvoll?',
      antwort:
        'Nein. Eine Solaranlage wird über das Gesamtjahr bewertet. Der Winter ist wichtig, aber nicht die einzige relevante Jahresphase. Entscheidend ist, wie gut die Anlage über das Jahr hinweg zum Haus passt.',
    },
    {
      frage: 'Spielt der Winter bei Wärmepumpe eine besondere Rolle?',
      antwort:
        'Ja, denn gerade in der kälteren Jahreszeit steigt oft der Strombedarf der Wärmepumpe. Genau deshalb sollte PV in Kombination mit Wärmepumpe sauber geplant und nicht nur aus der Sommerperspektive betrachtet werden.',
    },
    {
      frage: 'Kann ein Speicher den Winterertrag ausgleichen?',
      antwort:
        'Nein, ein Speicher ersetzt keine fehlende Erzeugung. Er kann nur bereits erzeugten Strom zeitlich verschieben. Deshalb bleibt die Grundfrage immer: Wie viel PV-Strom wird im Winter überhaupt erzeugt?',
    },
  ],

  outro: {
    title: '2. Fazit',
    paragraphs: [
      'Eine Solaranlage bringt auch im Winter etwas, nur eben weniger als im Sommer.',
      'Wichtig ist, PV nicht nach einzelnen Winterwochen zu beurteilen, sondern als Gesamtsystem über das Jahr – sauber geplant und passend zum tatsächlichen Verbrauch.',
    ],
  },

  cta: {
    titel: 'Lass uns ehrlich prüfen, was PV bei deinem Haus bringt',
    text:
      'Wir schauen uns Dach, Verbrauch, Jahresverlauf und spätere Erweiterungen gemeinsam an – realistisch, praxisnah und ohne Hochglanzrechnung.',
  },
})

const article = createArticleBase({
  titel: 'Was bringt eine Solaranlage im Winter?',
  slug: 'was-bringt-eine-solaranlage-im-winter',
  kategorie: 'solaranlage',
  teaser:
    'Bringt eine Solaranlage im Winter überhaupt etwas? Ja – aber anders als im Sommer. Hier findest du eine ehrliche Einordnung zu Ertrag, Grenzen und typischen Denkfehlern.',
  lesezeit: 7,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,
    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Was bringt eine Solaranlage im Winter? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Was bringt eine Solaranlage im Winter wirklich? Ehrliche Einordnung zu Ertrag, Wetter, Wärmepumpe und typischen Denkfehlern – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
