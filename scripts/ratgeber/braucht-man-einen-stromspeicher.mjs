import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Ein Stromspeicher ist nicht automatisch Pflicht',
      rest: ' – in vielen Fällen kann auch eine Solaranlage ohne Speicher sinnvoll und wirtschaftlich sein.',
    },
    mitSpeicherText: {
      bold: 'Ein Speicher kann den Eigenverbrauch deutlich erhöhen',
      rest: ' – besonders dann, wenn viel Strom erst abends oder nachts gebraucht wird.',
    },
    groessenText: {
      bold: 'Entscheidend ist nicht nur die Technik',
      rest: ' – sondern dein Verbrauchsprofil, deine Dachfläche und geplante Zusatzverbraucher wie Wärmepumpe oder E-Auto.',
    },
    planungsText: {
      bold: 'Die beste Lösung ist die passende Lösung',
      rest: ' – nicht automatisch die größte und auch nicht automatisch die günstigste.',
    },
  },

  intro: {
    title: '1. Braucht man einen Stromspeicher überhaupt?',
    paragraphs: [
      'Ein Stromspeicher kann sinnvoll sein, ist aber nicht automatisch bei jeder Solaranlage Pflicht.',
      'Ob er sich lohnt, hängt vor allem davon ab, wann du deinen Strom verbrauchst und wie gut die PV-Anlage zu deinem Alltag passt.',
      'Wer tagsüber schon viel Solarstrom direkt nutzt, braucht oft nicht zwingend sofort einen Speicher. Wer dagegen viel Verbrauch in die Abendstunden verlagert, kann stärker profitieren.',
    ],
  },

  faq: [
    {
      frage: 'Braucht man für eine Solaranlage zwingend einen Speicher?',
      antwort:
        'Nein. Eine Solaranlage kann auch ohne Speicher sehr sinnvoll sein. Entscheidend ist, wie dein Stromverbrauch über den Tag verteilt ist und welche Ziele du mit der Anlage verfolgst.',
    },
    {
      frage: 'Wann lohnt sich ein Stromspeicher besonders?',
      antwort:
        'Vor allem dann, wenn tagsüber wenig Strom direkt verbraucht wird, aber abends und nachts ein relevanter Strombedarf besteht – zum Beispiel mit Wärmepumpe oder künftigem E-Auto.',
    },
    {
      frage: 'Ist eine Solaranlage ohne Speicher wirtschaftlich schlechter?',
      antwort:
        'Nicht automatisch. Eine PV-Anlage ohne Speicher hat eine geringere Anfangsinvestition und kann gerade bei hohem Tagesverbrauch sehr sinnvoll sein.',
    },
    {
      frage: 'Kann man einen Speicher später nachrüsten?',
      antwort:
        'Ja, das ist grundsätzlich möglich. Wichtig ist aber, die Anlage und Technik von Anfang an so zu planen, dass eine spätere Nachrüstung sauber umsetzbar bleibt.',
    },
    {
      frage: 'Was ist der häufigste Fehler beim Thema Speicher?',
      antwort:
        'Viele betrachten den Speicher als Pflicht oder als reines Verkaufsargument. Sauberer ist es, erst Verbrauch, Dach, Anlagengröße und spätere Erweiterungen ehrlich zu prüfen.',
    },
  ],

  outro: {
    title: '2. Fazit',
    paragraphs: [
      'Ein Stromspeicher kann sehr sinnvoll sein, aber er ist kein Automatismus.',
      'Die richtige Entscheidung ergibt sich aus deinem Verbrauch, deinem Dach und deinen Ausbauplänen – nicht aus pauschalen Werbeversprechen.',
    ],
  },

  cta: {
    titel: 'Lass uns prüfen, ob ein Speicher bei dir sinnvoll ist',
    text:
      'Wir schauen uns Verbrauch, Dach, PV-Größe und spätere Erweiterungen gemeinsam an – ehrlich, praxisnah und ohne Standardverkauf.',
  },
})

const article = createArticleBase({
  titel: 'Braucht man einen Stromspeicher?',
  slug: 'braucht-man-einen-stromspeicher',
  teaser:
    'Ist ein Stromspeicher bei einer Solaranlage Pflicht oder oft eher optional? Hier findest du eine ehrliche Einordnung zu Nutzen, Alltag und typischen Denkfehlern.',
  lesezeit: 7,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,
    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Braucht man einen Stromspeicher? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Braucht man einen Stromspeicher wirklich? Ehrliche Einordnung zu Nutzen, Alltag, Wirtschaftlichkeit und typischen Denkfehlern – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
