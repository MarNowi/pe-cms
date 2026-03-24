import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Volle Autarkie ist bei normalen Einfamilienhäusern meist kein realistisches Alltagsziel',
      rest: ' – vor allem nicht über das gesamte Jahr hinweg.',
    },
    mitSpeicherText: {
      bold: 'Mit PV und Speicher lässt sich der Eigenversorgungsgrad deutlich erhöhen',
      rest: ' – aber auch dann ersetzt das nicht automatisch den Netzstrom vollständig.',
    },
    groessenText: {
      bold: 'Entscheidend sind Dachfläche, Verbrauch, Jahresverlauf und spätere Verbraucher',
      rest: ' – nicht nur eine schöne Prozentzahl aus einer Hochglanzrechnung.',
    },
    planungsText: {
      bold: 'Eine realistische Autarkie ist besser als ein überzogenes Werbeversprechen',
      rest: ' – gute Planung setzt auf Alltagstauglichkeit statt auf Fantasiewerte.',
    },
  },

  intro: {
    title: '1. Wie viel Autarkie ist bei einer Solaranlage realistisch?',
    paragraphs: [
      'Mit einer Solaranlage lässt sich die Unabhängigkeit vom Netzstrom deutlich erhöhen. Trotzdem ist volle Autarkie in normalen Einfamilienhäusern meist kein realistisches Ziel – vor allem nicht über alle Jahreszeiten hinweg.',
      'Gerade im Sommer sind hohe Eigenversorgungsanteile möglich. Im Winter sinkt die Erzeugung dagegen deutlich, während der Verbrauch zum Beispiel durch Wärmepumpe oder allgemeinen Haushaltsbedarf hoch bleiben kann.',
      'Entscheidend ist deshalb nicht die schönste Prozentzahl, sondern eine realistische Einordnung: Wie viel eigenen Strom kannst du im Alltag tatsächlich sinnvoll nutzen?',
    ],
  },

  faq: [
    {
      frage: 'Ist 100 Prozent Autarkie mit einer Solaranlage realistisch?',
      antwort:
        'Für normale Einfamilienhäuser ist das über das gesamte Jahr meist nicht realistisch. Vor allem im Winter reicht die PV-Erzeugung in der Regel nicht aus, um den kompletten Bedarf dauerhaft zu decken.',
    },
    {
      frage: 'Steigert ein Speicher die Autarkie?',
      antwort:
        'Ja, ein Speicher kann die Autarkie spürbar erhöhen, weil Solarstrom in die Abend- und Nachtstunden verschoben werden kann. Er ersetzt aber keine fehlende Erzeugung im Winter.',
    },
    {
      frage: 'Wovon hängt die realistische Autarkie besonders ab?',
      antwort:
        'Vor allem von Dachfläche, Ausrichtung, Verbrauch, Speicher, Jahresverlauf und zusätzlichen Verbrauchern wie Wärmepumpe oder E-Auto. Genau deshalb gibt es keine pauschale Prozentzahl für jedes Haus.',
    },
    {
      frage: 'Ist mehr Autarkie automatisch wirtschaftlich besser?',
      antwort:
        'Nicht automatisch. Eine sehr hohe Autarkie klingt gut, ist aber nicht immer wirtschaftlich die stärkste Lösung. Entscheidend ist, ob das System technisch und finanziell sauber zum Haus passt.',
    },
    {
      frage: 'Was ist der häufigste Denkfehler beim Thema Autarkie?',
      antwort:
        'Viele verwechseln Autarkie mit echter Planungsqualität. Eine hohe Prozentzahl allein sagt noch nicht, ob die Anlage im Alltag sinnvoll, wirtschaftlich und realistisch ausgelegt ist.',
    },
  ],

  outro: {
    title: '2. Fazit',
    paragraphs: [
      'Eine hohe Autarkie kann sinnvoll sein, sollte aber realistisch eingeordnet werden.',
      'Wichtiger als eine beeindruckende Zahl ist ein System, das im Alltag sauber funktioniert und über das Jahr hinweg sinnvoll zu deinem Haus passt.',
    ],
  },

  cta: {
    titel: 'Lass uns realistisch prüfen, was bei deinem Haus drin ist',
    text:
      'Wir schauen uns Dach, Verbrauch, Speicher und Jahresverlauf gemeinsam an – ehrlich, praxisnah und ohne Hochglanzrechnung.',
  },
})

const article = createArticleBase({
  titel: 'Wie viel Autarkie ist realistisch?',
  slug: 'wie-viel-autarkie-ist-realistisch',
  kategorie: 'solaranlage',
  teaser:
    'Wie unabhängig kann man mit einer Solaranlage wirklich werden? Hier findest du eine ehrliche Einordnung zu Autarkie, Speicher, Wintergrenzen und typischen Denkfehlern.',
  lesezeit: 7,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,
    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Wie viel Autarkie ist realistisch? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Wie viel Autarkie ist mit einer Solaranlage realistisch? Ehrliche Einordnung zu Speicher, Winter, Eigenversorgung und typischen Denkfehlern – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
