import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Die Einspeisevergütung 2026 hängt nicht nur vom Jahr ab',
      rest: ' – entscheidend sind Inbetriebnahmedatum, Anlagengröße und ob Teil- oder Volleinspeisung gewählt wird.',
    },
    mitSpeicherText: {
      bold: 'Für Überschusseinspeisung gelten bei Inbetriebnahme zwischen 1. Februar und 31. Juli 2026 gestufte Sätze',
      rest: ' – 7,78 ct/kWh für die ersten 10 kWp, 6,73 ct/kWh für den Teil von 10 bis 40 kWp und 5,50 ct/kWh bis 100 kWp.',
    },
    groessenText: {
      bold: 'Die Einspeisevergütung ist wichtig, aber selten der einzige Hebel',
      rest: ' – Eigenverbrauch, Dach, Verbrauch und Systemauslegung bleiben genauso relevant.',
    },
    planungsText: {
      bold: 'Eine gute PV-Anlage wird nicht nur nach der Vergütung geplant',
      rest: ' – sondern nach einer sauberen Gesamtrechnung für Haus, Alltag und Technik.',
    },
  },

  intro: {
    title: '1. Wie funktioniert die Einspeisevergütung 2026 bei Photovoltaik?',
    paragraphs: [
      'Die Einspeisevergütung für Photovoltaik hängt 2026 nicht nur davon ab, dass die Anlage in diesem Jahr in Betrieb geht. Wichtig sind vor allem das genaue Inbetriebnahmedatum, die Größe der Anlage und die Frage, ob Überschuss- oder Volleinspeisung gewählt wird.',
      'Für viele Einfamilienhäuser ist die Überschusseinspeisung der praxisnähere Fall. Dabei wird zunächst der selbst erzeugte Strom im Haus genutzt und nur der Rest ins Netz eingespeist.',
      'Wichtig ist: Die Einspeisevergütung ist ein relevanter Baustein der Wirtschaftlichkeit, aber sie ersetzt keine saubere Planung. Entscheidend bleibt immer das Gesamtsystem.',
    ],
  },

  faq: [
    {
      frage: 'Wovon hängt die Einspeisevergütung 2026 ab?',
      antwort:
        'Vor allem vom Inbetriebnahmedatum, von der Größe der Anlage und davon, ob Teil- oder Volleinspeisung gewählt wird. Genau diese Punkte bestimmen, welcher Vergütungssatz gilt.',
    },
    {
      frage: 'Wie hoch ist die Einspeisevergütung 2026 bei Überschusseinspeisung?',
      antwort:
        'Für Anlagen mit Inbetriebnahme zwischen 1. Februar und 31. Juli 2026 werden für die ersten 10 kWp 7,78 ct/kWh genannt. Für den Anlagenteil von 10 bis 40 kWp gelten 6,73 ct/kWh, bis 100 kWp 5,50 ct/kWh.',
    },
    {
      frage: 'Ist die Einspeisevergütung 2026 allein entscheidend für die Wirtschaftlichkeit?',
      antwort:
        'Nein. Sie ist ein wichtiger Baustein, aber nicht der einzige. Eigenverbrauch, Dach, Verbrauch, Speicherfrage und die gesamte Auslegung sind genauso entscheidend.',
    },
    {
      frage: 'Spielt die Anlagengröße bei der Einspeisevergütung eine Rolle?',
      antwort:
        'Ja. Die Vergütung ist gestuft nach Leistungsbereichen. Deshalb ist nicht nur die reine Existenz einer PV-Anlage wichtig, sondern auch, wie groß sie ist.',
    },
    {
      frage: 'Was ist der häufigste Denkfehler bei der Einspeisevergütung?',
      antwort:
        'Viele betrachten die Einspeisevergütung als Hauptargument für oder gegen eine Anlage. In der Praxis ist sie wichtig, aber nur ein Teil der gesamten Wirtschaftlichkeitsbetrachtung.',
    },
  ],

  outro: {
    title: '2. Fazit',
    paragraphs: [
      'Die Einspeisevergütung 2026 bleibt ein wichtiger Baustein für die Einordnung von Photovoltaik.',
      'Wichtiger als die reine Zahl ist am Ende aber, ob die Anlage sauber geplant ist und wie gut Eigenverbrauch, Dach und Alltag zum Gesamtsystem passen.',
    ],
  },

  cta: {
    titel: 'Lass uns deine PV wirtschaftlich sauber einordnen',
    text:
      'Wir schauen uns Dach, Verbrauch, Anlagengröße und die Rolle der Einspeisevergütung gemeinsam an – ehrlich, praxisnah und ohne Hochglanzrechnung.',
  },
})

const article = createArticleBase({
  titel: 'Einspeisevergütung Photovoltaik 2026: Was gilt aktuell?',
  slug: 'einspeiseverguetung-photovoltaik-2026',
  kategorie: 'solaranlage',
  teaser:
    'Was gilt 2026 bei der Einspeisevergütung für Photovoltaik? Hier findest du eine ehrliche Einordnung zu Überschusseinspeisung, Anlagengröße und typischen Denkfehlern.',
  lesezeit: 8,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,
    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Einspeisevergütung Photovoltaik 2026: Was gilt aktuell? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Einspeisevergütung Photovoltaik 2026: ehrliche Einordnung zu Überschusseinspeisung, Anlagengröße und Wirtschaftlichkeit – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
