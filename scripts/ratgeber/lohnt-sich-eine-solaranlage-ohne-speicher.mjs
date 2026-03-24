import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Eine Solaranlage ohne Speicher kann absolut sinnvoll und wirtschaftlich sein',
      rest: ' – gerade dann, wenn viel Strom tagsüber direkt verbraucht wird oder die Investition bewusst schlanker bleiben soll.',
    },
    mitSpeicherText: {
      bold: 'Ein Speicher kann den Eigenverbrauch erhöhen',
      rest: ' – aber er ist nicht automatisch Voraussetzung dafür, dass sich eine PV-Anlage lohnt.',
    },
    groessenText: {
      bold: 'Entscheidend sind Dachfläche, Tagesverbrauch und spätere Verbraucher',
      rest: ' – nicht die pauschale Annahme, dass ohne Speicher grundsätzlich etwas fehlt.',
    },
    planungsText: {
      bold: 'Eine gute PV-Anlage ohne Speicher ist oft sinnvoller als eine schlecht abgestimmte Komplettlösung',
      rest: ' – entscheidend ist die saubere Planung.',
    },
  },

  intro: {
    title: '1. Lohnt sich eine Solaranlage auch ohne Speicher?',
    paragraphs: [
      'Ja, in vielen Fällen lohnt sich eine Solaranlage auch ohne Speicher. Der größte Vorteil liegt in der geringeren Anfangsinvestition bei gleichzeitig spürbarer Stromkostenentlastung durch selbst erzeugten Strom.',
      'Ohne Speicher wird Solarstrom direkt dann genutzt, wenn er erzeugt wird. Alles, was im Moment nicht verbraucht wird, wird eingespeist. Genau deshalb ist vor allem entscheidend, wie gut der Tagesverbrauch zur Erzeugung passt.',
      'Eine PV-Anlage ohne Speicher ist also nicht automatisch die schwächere Lösung. Für viele Haushalte ist sie ein sehr sinnvoller Einstieg oder sogar dauerhaft die passende Variante.',
    ],
  },

  faq: [
    {
      frage: 'Lohnt sich eine Solaranlage ohne Speicher wirtschaftlich?',
      antwort:
        'Ja, oft durchaus. Weil die Anfangsinvestition niedriger ist als bei einer Anlage mit Speicher, kann eine PV-Anlage ohne Speicher wirtschaftlich sehr attraktiv sein – besonders bei gutem Tagesverbrauch.',
    },
    {
      frage: 'Wann ist eine Solaranlage ohne Speicher besonders sinnvoll?',
      antwort:
        'Vor allem dann, wenn tagsüber bereits ein relevanter Teil des Stroms direkt verbraucht wird oder wenn die Investition bewusst schlanker gehalten werden soll. Auch als sauber geplanter Einstieg ist sie oft sinnvoll.',
    },
    {
      frage: 'Was ist der Nachteil einer Solaranlage ohne Speicher?',
      antwort:
        'Ohne Speicher kann weniger Solarstrom in die Abend- und Nachtstunden verschoben werden. Dadurch fällt der Eigenverbrauch oft geringer aus als bei einem passend dimensionierten System mit Speicher.',
    },
    {
      frage: 'Kann man einen Speicher später nachrüsten?',
      antwort:
        'Ja, das ist grundsätzlich möglich. Wichtig ist aber, die Anlage und Technik schon von Anfang an so zu planen, dass eine spätere Nachrüstung sauber umsetzbar bleibt.',
    },
    {
      frage: 'Ist eine Solaranlage ohne Speicher für ein Einfamilienhaus sinnvoll?',
      antwort:
        'Ja, das kann sie sehr gut sein. Entscheidend ist, wie viel Strom im Haus tagsüber direkt genutzt wird und welche Ausbaupläne es später gibt – zum Beispiel Wärmepumpe oder E-Auto.',
    },
  ],

  outro: {
    title: '2. Fazit',
    paragraphs: [
      'Eine Solaranlage ohne Speicher ist nicht die Notlösung, sondern oft eine saubere und wirtschaftlich sinnvolle Entscheidung.',
      'Ob sie für dein Haus die beste Lösung ist, hängt von Dach, Verbrauch, Alltag und späteren Erweiterungen ab – nicht von pauschalen Verkaufsargumenten.',
    ],
  },

  cta: {
    titel: 'Lass uns prüfen, ob bei dir PV ohne Speicher sinnvoll ist',
    text:
      'Wir schauen uns Dach, Verbrauch, spätere Erweiterungen und die technische Ausgangslage gemeinsam an – ehrlich, praxisnah und ohne Standardverkauf.',
  },
})

const article = createArticleBase({
  titel: 'Lohnt sich eine Solaranlage ohne Speicher?',
  slug: 'lohnt-sich-eine-solaranlage-ohne-speicher',
  kategorie: 'solaranlage',
  teaser:
    'Muss eine Solaranlage immer direkt mit Speicher gebaut werden? Nicht unbedingt. Hier findest du eine ehrliche Einordnung dazu, wann sich PV auch ohne Speicher sinnvoll lohnen kann.',
  lesezeit: 7,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,
    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Lohnt sich eine Solaranlage ohne Speicher? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Lohnt sich eine Solaranlage ohne Speicher? Ehrliche Einordnung zu Kosten, Tagesverbrauch, Nachrüstung und typischen Denkfehlern – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
