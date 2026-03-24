import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Ein Stromspeicher sollte nicht einfach möglichst groß gewählt werden',
      rest: ' – entscheidend ist, wie gut er zu PV-Anlage, Verbrauch und Alltag passt.',
    },
    mitSpeicherText: {
      bold: 'Zu kleine Speicher verschenken Potenzial, zu große Speicher sind oft wirtschaftlich schwächer',
      rest: ' – eine saubere Dimensionierung ist deshalb wichtiger als reine Kapazität auf dem Papier.',
    },
    groessenText: {
      bold: 'Wärmepumpe, E-Auto und Abendverbrauch beeinflussen die passende Speichergröße stark',
      rest: ' – genauso wie die Größe der PV-Anlage selbst.',
    },
    planungsText: {
      bold: 'Die beste Speichergröße ist die, die im Alltag sinnvoll arbeitet',
      rest: ' – nicht die, die im Verkaufsgespräch am beeindruckendsten klingt.',
    },
  },

  intro: {
    title: '1. Wie groß sollte ein Stromspeicher überhaupt sein?',
    paragraphs: [
      'Für einen Stromspeicher gibt es keine pauschale Idealgröße. Entscheidend ist nicht nur die Kapazität in kWh, sondern wie gut der Speicher zur PV-Anlage und zum tatsächlichen Stromverbrauch passt.',
      'Ein Speicher soll vor allem dabei helfen, tagsüber erzeugten Solarstrom in die Abend- und Nachtstunden zu verschieben. Genau deshalb ist die richtige Größe immer eine Frage von Verbrauchsprofil, Anlagengröße und späteren Verbrauchern.',
      'Wer den Speicher einfach möglichst groß auswählt, bekommt nicht automatisch die bessere Lösung. In vielen Fällen ist ein sauber abgestimmtes System wirtschaftlich stärker als eine überdimensionierte Variante.',
    ],
  },

  faq: [
    {
      frage: 'Wie groß sollte ein Stromspeicher für ein Einfamilienhaus sein?',
      antwort:
        'Das hängt von der Größe der PV-Anlage, dem Stromverbrauch und dem Alltag im Haus ab. Für viele Einfamilienhäuser ist nicht die maximal mögliche Kapazität sinnvoll, sondern eine Größe, die den Abend- und Nachtverbrauch realistisch abdeckt.',
    },
    {
      frage: 'Gibt es eine einfache Faustregel für die Speichergröße?',
      antwort:
        'Faustregeln können zur ersten Orientierung helfen, ersetzen aber keine saubere Planung. Wichtiger als eine Pauschalformel ist die Frage, wie viel Strom tatsächlich abends, nachts oder mit Wärmepumpe und E-Auto gebraucht wird.',
    },
    {
      frage: 'Ist ein größerer Stromspeicher automatisch besser?',
      antwort:
        'Nein. Ein größerer Speicher kann mehr Kapazität bieten, ist aber nicht automatisch wirtschaftlicher. Wenn er regelmäßig nicht sinnvoll genutzt wird, ist die zusätzliche Größe oft eher Verkaufsargument als echter Vorteil.',
    },
    {
      frage: 'Welche Rolle spielen Wärmepumpe und E-Auto bei der Speichergröße?',
      antwort:
        'Sie können die sinnvolle Speichergröße deutlich beeinflussen. Gerade wenn zusätzlicher Strombedarf in den Abendstunden oder über flexible Ladezeiten entsteht, sollte das bei der Planung von Anfang an mitgedacht werden.',
    },
    {
      frage: 'Kann ein Stromspeicher zu groß sein?',
      antwort:
        'Ja. Ein zu großer Speicher kann dazu führen, dass Investition und tatsächlicher Nutzen nicht mehr sauber zusammenpassen. Genau deshalb sollte die Speichergröße immer auf das reale Nutzungsverhalten abgestimmt werden.',
    },
  ],

  outro: {
    title: '2. Fazit',
    paragraphs: [
      'Die richtige Speichergröße ist kein Standardwert, sondern das Ergebnis sauberer Planung.',
      'Entscheidend ist, wie viel Solarstrom du tatsächlich sinnvoll verschieben kannst und wie gut PV-Anlage, Verbrauch, Wärmepumpe, E-Auto und Alltag zusammenpassen.',
    ],
  },

  cta: {
    titel: 'Lass uns die passende Speichergröße für dein Haus einordnen',
    text:
      'Wir schauen uns PV-Anlage, Verbrauch, spätere Erweiterungen und dein Nutzungsprofil gemeinsam an – ehrlich, praxisnah und ohne Verkaufsdruck.',
  },
})

const article = createArticleBase({
  titel: 'Wie groß sollte ein Stromspeicher sein?',
  slug: 'wie-gross-sollte-ein-stromspeicher-sein',
  kategorie: 'stromspeicher',
  teaser:
    'Wie groß ein Stromspeicher sein sollte, hängt nicht von einer pauschalen Formel ab, sondern von PV-Anlage, Verbrauch und Alltag. Hier findest du eine ehrliche Einordnung ohne Verkaufslogik.',
  lesezeit: 7,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,
    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Wie groß sollte ein Stromspeicher sein? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Wie groß sollte ein Stromspeicher sein? Ehrliche Einordnung zu PV-Anlage, Verbrauch, Wärmepumpe, E-Auto und typischen Denkfehlern – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
