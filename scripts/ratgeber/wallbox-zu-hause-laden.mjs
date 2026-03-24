import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Eine Wallbox zu Hause ist oft die sauberste Lösung fürs Laden',
      rest: ' – vor allem, wenn regelmäßig am eigenen Stellplatz oder in der Garage geladen wird.',
    },
    mitSpeicherText: {
      bold: 'Entscheidend ist nicht nur die Ladeleistung',
      rest: ' – sondern auch, wie Wallbox, Hausanschluss, PV-Anlage und Alltag zusammenpassen.',
    },
    groessenText: {
      bold: 'Wer eine Solaranlage hat oder plant, sollte die Wallbox direkt mitdenken',
      rest: ' – so lässt sich später sauberer und oft sinnvoller laden.',
    },
    planungsText: {
      bold: 'Die beste Wallbox ist nicht automatisch die mit den meisten Funktionen',
      rest: ' – sondern die, die technisch sauber zum Haus und zur Nutzung passt.',
    },
  },

  intro: {
    title: '1. Warum eine Wallbox zu Hause oft sinnvoll ist',
    paragraphs: [
      'Wer ein E-Auto regelmäßig zu Hause lädt, ist mit einer Wallbox in vielen Fällen deutlich sauberer aufgestellt als mit provisorischen Lösungen. Entscheidend ist dabei nicht nur die Ladegeschwindigkeit, sondern vor allem Sicherheit, Alltagstauglichkeit und eine saubere elektrische Einbindung.',
      'Gerade wenn zusätzlich eine Solaranlage vorhanden ist oder später geplant wird, lohnt es sich, die Wallbox nicht isoliert zu betrachten. Dann geht es nicht nur ums Laden, sondern um die sinnvolle Einbindung in das gesamte Energiesystem des Hauses.',
      'Wichtig ist: Nicht jede Wallbox passt automatisch zu jedem Haus. Hausanschluss, Leitungsweg, Absicherung und spätere Erweiterungen sollten von Anfang an sauber mitgedacht werden.',
    ],
  },

  faq: [
    {
      frage: 'Ist eine Wallbox zu Hause sinnvoll?',
      antwort:
        'Ja, in vielen Fällen schon. Wer regelmäßig zu Hause lädt, bekommt mit einer Wallbox meist die sauberere, sicherere und alltagstauglichere Lösung als mit Behelfslösungen.',
    },
    {
      frage: 'Muss ich beim Laden zu Hause etwas technisch beachten?',
      antwort:
        'Ja. Wichtig sind unter anderem Hausanschluss, Absicherung, Leitungsweg, Montageort und die Frage, ob später noch eine PV-Anlage oder weitere Verbraucher dazukommen.',
    },
    {
      frage: 'Lohnt sich eine Wallbox mit Solaranlage besonders?',
      antwort:
        'Das kann sehr sinnvoll sein. Wenn Solaranlage und Wallbox sauber zusammen geplant werden, lässt sich eigener Solarstrom später besser fürs Laden nutzen.',
    },
    {
      frage: 'Brauche ich zu Hause immer eine besonders starke Wallbox?',
      antwort:
        'Nicht automatisch. Entscheidend ist nicht nur die maximale Ladeleistung, sondern wie gut Wallbox, Fahrzeug, Haus und Alltag zusammenpassen.',
    },
    {
      frage: 'Was ist der häufigste Fehler beim Thema Wallbox?',
      antwort:
        'Oft wird nur auf Leistung oder Features geschaut. Wichtiger ist aber, dass die Wallbox technisch sauber zum Haus, zum Netzanschluss und zur geplanten Nutzung passt.',
    },
  ],

  outro: {
    title: '2. Fazit',
    paragraphs: [
      'Eine Wallbox zu Hause ist für viele Haushalte eine sehr sinnvolle Lösung – vor allem dann, wenn regelmäßig geladen wird und das System sauber ins Haus integriert ist.',
      'Entscheidend ist nicht die lauteste Produktwerbung, sondern eine technische Lösung, die zu Fahrzeug, Haus und späteren Ausbauplänen passt.',
    ],
  },

  cta: {
    titel: 'Lass uns prüfen, welche Wallbox zu deinem Haus passt',
    text:
      'Wir schauen uns Stellplatz, Hausanschluss, Leitungsweg und mögliche Kombinationen mit PV gemeinsam an – ehrlich, praxisnah und ohne Standardverkauf.',
  },
})

const article = createArticleBase({
  titel: 'Wallbox zu Hause laden: Worauf kommt es an?',
  slug: 'wallbox-zu-hause-laden',
  kategorie: 'wallbox',
  teaser:
    'Wallbox zu Hause laden klingt einfach – sinnvoll wird es aber erst, wenn Technik, Haus und Nutzung sauber zusammenpassen. Hier findest du eine ehrliche Einordnung.',
  lesezeit: 7,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,
    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Wallbox zu Hause laden: Worauf kommt es an? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Wallbox zu Hause laden: Ehrliche Einordnung zu Technik, Hausanschluss, PV-Kombination und typischen Denkfehlern – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
