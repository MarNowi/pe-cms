import { upsertRatgeberArticle } from './_articleFactory.mjs'
import {
  h,
  hinweisBlock,
  p,
  t,
  textBlock,
  tippBlock,
  tabelleBlock,
} from './_helpers.mjs'
import { createArticleBase } from './_templates.mjs'
import { createPlanungsPreset } from './_topicPresets.mjs'

const preset = createPlanungsPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Wer eine Solaranlage fürs E-Auto plant, sollte nicht nur den Haushaltsstrom betrachten',
      rest: ' – der zusätzliche Ladebedarf gehört direkt in die Auslegung.',
    },
    mitSpeicherText: {
      bold: 'Dachfläche, Ladeverhalten, Wallbox und künftiger Fahralltag beeinflussen die passende PV-Größe stark',
      rest: ' – nicht nur die nackte kWp-Zahl.',
    },
    groessenText: {
      bold: 'Eine zu klein geplante Anlage ist bei E-Auto oft der eigentliche Fehler',
      rest: ' – vor allem, wenn regelmäßig zu Hause geladen wird.',
    },
    planungsText: {
      bold: 'Wichtig ist nicht nur viel Strom zu erzeugen',
      rest: ' – sondern PV, Wallbox, Ladezeiten und Verbrauch sauber zusammenzubringen.',
    },
  },

  dach: {
    title: '2. Welche Rolle spielt das Dach bei PV fürs E-Auto?',
    paragraphs: [
      'Wenn das E-Auto regelmäßig zu Hause geladen werden soll, wird die nutzbare Dachfläche noch wichtiger. Denn der zusätzliche Strombedarf kann die passende PV-Größe deutlich verändern.',
      'Entscheidend ist nicht nur, wie groß das Dach ist, sondern auch, wie gut die Fläche technisch nutzbar ist und wann die Erzeugung zum Ladealltag passt.',
      'Gerade bei typischem Laden tagsüber oder am frühen Abend kann eine saubere Dachbelegung einen großen Unterschied machen.',
    ],
    list: [
      'nutzbare Dachfläche realistisch bewerten',
      'Ausrichtung und Verschattung sauber prüfen',
      'Ladealltag mitdenken',
      'Dachbelegung nicht unnötig klein halten',
    ],
  },

  groesse: {
    title: '3. Wie groß sollte die Solaranlage fürs E-Auto sein?',
    paragraphs: [
      'Die passende Größe ergibt sich nicht nur aus dem Stromverbrauch im Haus, sondern auch aus dem zusätzlichen Ladebedarf des Fahrzeugs.',
      'Wer das E-Auto regelmäßig zu Hause lädt, sollte diese Strommenge nicht als Nebensatz behandeln. Genau dort wird eine zu kleine Anlage oft später zum Thema.',
      'In vielen Fällen ist es sinnvoll, die Dachfläche möglichst gut zu nutzen, wenn Wallbox und E-Auto von Anfang an Teil der Planung sind.',
    ],
    list: [
      'Haushaltsstrom und Ladebedarf gemeinsam betrachten',
      'Wallbox und Ladezeiten mitdenken',
      'spätere Fahrleistung realistisch einordnen',
      'nicht nur auf den Einstiegspreis schauen',
      'Reserve für künftige Entwicklung mitdenken',
    ],
  },

  speicher: {
    title: '4. Speicher bei E-Auto direkt mitdenken?',
    paragraphs: [
      'Ein Speicher kann in Kombination mit E-Auto sinnvoll sein, wenn er dabei hilft, eigenen Solarstrom besser in spätere Ladezeiten zu verschieben.',
      'Er ist aber kein Muss und ersetzt keine saubere Grundplanung. Wichtiger ist, dass PV-Anlage, Wallbox, Ladeverhalten und Hausverbrauch sinnvoll zusammenpassen.',
      'Die Speicherfrage sollte deshalb nicht isoliert, sondern immer als Teil des Gesamtsystems beantwortet werden.',
    ],
  },

  technik: {
    title: '5. Technik und Wallbox sauber mitdenken',
    paragraphs: [
      'Wenn ein E-Auto Teil der Planung ist, reicht es nicht, nur die Module auf dem Dach zu betrachten. Auch Wallbox, Leitungsweg, Hausanschluss, Zählerschrank und mögliche Lastspitzen gehören dazu.',
      'Gerade wenn später noch weitere Verbraucher dazukommen, ist eine saubere technische Grundplanung entscheidend.',
    ],
    list: [
      'Wallbox früh mitplanen',
      'Zählerschrank und Leitungswege prüfen',
      'Lasten im Haus gemeinsam betrachten',
      'Reserve für spätere Erweiterungen vorsehen',
    ],
  },

  buerokratie: {
    title: '6. Anmeldung und Umsetzung gehören dazu',
    paragraphs: [
      'Auch wenn das Thema E-Auto im Vordergrund steht, endet die Planung nicht mit der PV-Größe. Anmeldung, Inbetriebnahme und technische Abstimmung gehören genauso dazu.',
      'Wer das früh mitdenkt, vermeidet später unnötige Verzögerungen und technische Kompromisse.',
    ],
    list: [
      'Netzbetreiberanfrage',
      'technische Abstimmung',
      'Inbetriebnahme',
      'Dokumentation und Einweisung',
    ],
  },

  fehler: {
    title: '7. Typische Fehler bei PV fürs E-Auto',
    lead:
      'Die größten Fehler entstehen meist dann, wenn das E-Auto zwar erwähnt, aber nicht wirklich in die Auslegung integriert wird.',
    errors: [
      'nur den Haushaltsstrom betrachten',
      'Ladebedarf des E-Autos unterschätzen',
      'Wallbox zu spät mitdenken',
      'Dachfläche unnötig klein belegen',
      'Speicherfrage isoliert betrachten',
      'Zählerschrank und Leitungswege zu spät prüfen',
    ],
    outro:
      'Eine gute Solaranlage fürs E-Auto ist nicht die mit der schönsten Schlagzeile, sondern die, die zu Ladeverhalten, Haus und Alltag wirklich passt.',
  },

  ablauf: {
    title: '8. So läuft die Planung in der Praxis sauber ab',
    paragraphs: [
      'In der Praxis funktioniert die Auslegung am besten, wenn Dach, Haushaltsstrom und Ladebedarf gemeinsam bewertet werden und erst danach die passende PV-Größe festgelegt wird.',
      'Genau dort trennt sich gute Planung von pauschalen Standardangeboten.',
    ],
    list: [
      'Dach und Verschattung bewerten',
      'Haushaltsstrom einordnen',
      'Ladebedarf des E-Autos realistisch bewerten',
      'PV-Größe passend ableiten',
      'Wallbox und Technik sauber mitplanen',
      'Speicher sinnvoll prüfen',
      'Umsetzung sauber vorbereiten',
    ],
  },

  faq: {
    hauptbegriff: 'Solaranlage für ein E-Auto',
    planungAntwort:
      'Am besten startest du mit Dachfläche, Haushaltsstrom und dem zusätzlichen Ladebedarf. Erst danach sollten PV-Größe, Wallbox und Speicherfrage festgelegt werden.',
    dachAntwort:
      'Süddächer können stark sein, aber auch Ost-West-Dächer können sehr sinnvoll sein. Entscheidend ist, wie gut Erzeugung und Ladealltag zusammenpassen.',
    speicherAntwort:
      'Ja, zumindest konzeptionell. Ob ein Speicher sofort sinnvoll ist, hängt davon ab, wie gut Solarstrom in spätere Ladezeiten verschoben werden kann.',
    fehlerAntwort:
      'Oft wird das E-Auto zwar genannt, aber nicht wirklich in die Auslegung integriert. Dann wird die Anlage schnell zu klein oder die Technik zu kurz gedacht.',
    anmeldungAntwort:
      'Ja. Auch bei der Kombination aus Solaranlage und E-Auto gehören Anmeldung, Inbetriebnahme und technische Abstimmung sauber zur Planung dazu.',
  },
})

const article = createArticleBase({
  titel: 'Solaranlage für E-Auto auslegen: Worauf kommt es an?',
  slug: 'solaranlage-fuer-e-auto-auslegen',
  kategorie: 'solaranlage',
  teaser:
    'Wer eine Solaranlage fürs E-Auto plant, sollte nicht nur den Haushaltsstrom betrachten. Hier findest du eine ehrliche Einordnung zu Dach, Wallbox, Ladebedarf und typischen Fehlern.',
  lesezeit: 11,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    textBlock(
      h('h2', t('1. Warum PV und E-Auto zusammen gedacht werden sollten')),
      p(
        t(
          'Die Kombination aus Solaranlage und E-Auto ist für viele Haushalte sehr sinnvoll. Entscheidend ist aber, dass der zusätzliche Ladebedarf nicht nur erwähnt, sondern wirklich in die Planung integriert wird.'
        )
      ),
      p(
        t(
          'Viele Anlagen werden zu stark aus dem bisherigen Haushaltsstrom heraus gedacht. Mit Wallbox und regelmäßigem Laden kann das schnell zu klein gedacht sein.'
        )
      ),
      p(t('Besonders wichtig sind dabei:'))
    ),

    tabelleBlock('Orientierung für typische Fälle', [
      {
        spalte1: 'Typischer Fall',
        spalte2: 'Sinnvolle Richtung',
        spalte3: 'Worauf besonders achten?',
      },
      {
        spalte1: 'Haushalt ohne E-Auto',
        spalte2: 'klassische PV-Auslegung',
        spalte3: 'Haushaltsstrom und Dachfläche sauber bewerten',
      },
      {
        spalte1: 'E-Auto vorhanden, gelegentliches Laden',
        spalte2: 'PV etwas großzügiger denken',
        spalte3: 'Ladeverhalten realistisch einschätzen',
      },
      {
        spalte1: 'regelmäßiges Laden zu Hause',
        spalte2: 'größere Anlage oft sinnvoll',
        spalte3: 'Wallbox und Dachfläche gemeinsam planen',
      },
      {
        spalte1: 'E-Auto plus Wärmepumpe',
        spalte2: 'Dachfläche möglichst gut nutzen',
        spalte3: 'Reserve, Technik und Speicher gemeinsam betrachten',
      },
    ]),

    preset.blocks.dachBlock,

    hinweisBlock(
      'Nicht nur an sonnige Mittage denken',
      p(
        t(
          'Wichtig ist nicht nur, wie viel Strom mittags erzeugt wird, sondern auch, wann im Alltag geladen wird. Genau dort entscheidet sich oft, wie sinnvoll die gesamte Auslegung wirklich ist.'
        )
      )
    ),

    preset.blocks.groesseBlock,
    preset.blocks.speicherBlock,

    tippBlock(
      'Wallbox nicht als Nebensatz behandeln',
      p(
        t(
          'Wenn die Wallbox erst am Ende „auch noch“ dazugehängt wird, ist die Anlage oft schon zu kurz gedacht. Besser ist es, den Ladebedarf von Anfang an ernst zu nehmen.'
        )
      )
    ),

    preset.blocks.technikBlock,
    preset.blocks.buerokratieBlock,
    preset.blocks.fehlerBlock,
    preset.blocks.ablaufBlock,
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Solaranlage für E-Auto auslegen: Worauf kommt es an? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Solaranlage für E-Auto richtig auslegen: Dachfläche, Wallbox, Ladebedarf, Speicher und typische Fehler – ehrlich erklärt von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
