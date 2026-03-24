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
      bold: 'Eine gute PV-Planung beginnt nicht beim Modulpreis, sondern bei Dach, Verbrauch und Lastprofil',
      rest: ' – also bei der Frage, wie viel Strom du wann selbst nutzen kannst.',
    },
    mitSpeicherText: {
      bold: 'Verschattung, Dachfläche, Zählerschrank und künftige Verbraucher',
      rest: ' wie Wärmepumpe oder E-Auto entscheiden maßgeblich über die passende Anlagengröße.',
    },
    groessenText: {
      bold: 'Ein Speicher ist nicht automatisch Pflicht',
      rest: ' – sinnvoll wird er dann, wenn du deinen Eigenverbrauch deutlich erhöhen und Netzbezug spürbar senken willst.',
    },
    planungsText: {
      bold: 'Wer sauber plant, spart später doppelt:',
      rest: ' durch mehr Eigenverbrauch, weniger Nachrüstungen und weniger Ärger mit Technik oder Bürokratie.',
    },
  },

  dach: {
    paragraphs: [
      'Die beste Wirtschaftlichkeit beginnt mit einer geeigneten Dachfläche. Ideal ist eine möglichst unverschattete Fläche mit stabiler, intakter Dachkonstruktion.',
      'Süddächer liefern meist die höchsten Spitzenerträge. Ost-West-Dächer können trotzdem sehr sinnvoll sein – vor allem dann, wenn der Strom morgens und abends gebraucht wird.',
      'Nicht jedes Dach muss perfekt sein. Entscheidend ist, wie viel nutzbare Fläche realistisch belegt werden kann und ob Verschattung durch Gauben, Nachbargebäude, Bäume oder Kamine den Ertrag spürbar mindert.',
    ],
    list: [
      'stabile, intakte Dachfläche',
      'möglichst geringe Verschattung',
      'ausreichend nutzbare Fläche',
      'saubere Belegungsplanung statt „irgendwie voll machen“',
    ],
  },

  groesse: {
    paragraphs: [
      'Die passende Größe ergibt sich nicht allein aus dem aktuellen Haushaltsverbrauch. Wer heute nur den Status quo plant, baut oft zu klein.',
      'Wichtige Fragen sind: Kommt später ein E-Auto dazu? Ist eine Wärmepumpe geplant? Soll der Eigenverbrauch maximiert werden? Gibt es noch freie Dachflächen, die man besser direkt mitbelegt?',
      'In vielen Fällen ist es wirtschaftlich sinnvoller, die verfügbare Dachfläche gut auszunutzen, statt die Anlage künstlich klein zu halten.',
    ],
    list: [
      'aktueller Jahresverbrauch',
      'Lastspitzen am Tag',
      'künftige Verbraucher',
      'verfügbare Dachfläche',
      'Ziel: Eigenverbrauch, Autarkie oder maximale Erzeugung',
    ],
  },

  speicher: {
    paragraphs: [
      'Ein Speicher ist kein Muss, aber oft sinnvoll. Er hilft dabei, mittags erzeugten Solarstrom abends und nachts selbst zu nutzen.',
      'Entscheidend ist nicht die maximale Autarkie auf dem Papier, sondern ob der Speicher zur Anlage und zum Verbrauch passt. Zu große Speicher sind wirtschaftlich oft schwächer als sauber dimensionierte Systeme.',
      'Wer ohnehin mit Wärmepumpe, E-Auto oder höherem Abendverbrauch plant, sollte den Speicher früh in die Gesamtauslegung einbeziehen.',
    ],
  },

  technik: {
    paragraphs: [
      'Zur Planung gehört nicht nur das Dach. Auch der Zählerschrank, Leitungswege, Absicherung und die spätere Einbindung von Speicher, Wallbox oder Wärmepumpe müssen berücksichtigt werden.',
      'Gerade bei Bestandsgebäuden ist der Zählerschrank oft ein kritischer Punkt. Wird das zu spät erkannt, kommen ungeplante Mehrkosten und Zeitverzug dazu.',
    ],
    list: [
      'Zählerschrank prüfen',
      'Leitungswege früh festlegen',
      'Wechselrichterstandort sinnvoll wählen',
      'Schnittstellen für spätere Erweiterungen mitdenken',
    ],
  },

  buerokratie: {
    paragraphs: [
      'Eine PV-Anlage endet nicht mit der Montage. Auch Netzbetreiberanmeldung, Inbetriebnahme und Registrierung müssen sauber abgearbeitet werden.',
      'Wer diesen Teil früh mitdenkt, spart später Rückfragen, Verzögerungen und unnötigen Abstimmungsaufwand.',
    ],
    list: [
      'Netzbetreiberanfrage und technische Abstimmung',
      'Inbetriebnahme nach Fertigstellung',
      'Registrierung im Marktstammdatenregister',
      'Dokumentation und Einweisung',
    ],
  },

  fehler: {
    errors: [
      'nur nach Preis vergleichen',
      'zukünftige Verbraucher nicht berücksichtigen',
      'Dachfläche unnötig klein belegen',
      'Speicher blind nach Bauchgefühl auswählen',
      'Zählerschrank und Infrastruktur zu spät prüfen',
      'Bürokratie und Anmeldung unterschätzen',
    ],
  },

  ablauf: {
    paragraphs: [
      'In der Praxis hat sich ein klarer Ablauf bewährt: erst Dach und Verbrauch bewerten, dann Anlagengröße und Speicher sauber dimensionieren, danach Technik, Anmeldung und Umsetzung planen.',
      'Genau an dieser Stelle trennt sich gute Handwerksplanung von reiner Angebotsoptik.',
    ],
    list: [
      'Dach und Verschattung bewerten',
      'Verbrauch und Zukunftsbedarf analysieren',
      'Anlagengröße festlegen',
      'Speicher sinnvoll dimensionieren',
      'Technik und Zählerschrank prüfen',
      'Netzbetreiber und Registrierung mitdenken',
      'Montage und Inbetriebnahme sauber vorbereiten',
    ],
  },

  faq: {
    hauptbegriff: 'PV-Anlage',
    planungAntwort:
      'Am besten startest du mit Dachfläche, Verschattung, Verbrauch und zukünftigen Stromverbrauchern. Erst danach sollten Anlagengröße, Speicher und Technik festgelegt werden.',
    dachAntwort:
      'Süddächer liefern meist die höchsten Spitzenerträge. Ost-West-Dächer können trotzdem sehr sinnvoll sein, wenn der Stromverbrauch morgens und abends höher ist.',
    speicherAntwort:
      'Ja, zumindest konzeptionell. Ob er sofort umgesetzt wird oder später, sollte zur Anlagengröße, zum Verbrauch und zu künftigen Verbrauchern wie Wärmepumpe oder E-Auto passen.',
    fehlerAntwort:
      'Oft werden zukünftige Verbraucher, der Zustand des Zählerschranks, Leitungswege und die spätere Einbindung von Speicher oder Wallbox zu spät berücksichtigt.',
    anmeldungAntwort:
      'Ja. Eine saubere PV-Planung umfasst nicht nur Technik und Montage, sondern auch Anmeldung, Inbetriebnahme und Registrierung.',
  },
})

const article = createArticleBase({
  titel: 'PV-Anlage planen: So gehst du bei Dach, Größe und Speicher richtig vor',
  slug: 'pv-anlage-planen',
  teaser:
    'Wer eine PV-Anlage plant, sollte nicht mit dem Preis starten, sondern mit Dach, Verbrauch, zukünftigen Stromverbrauchern und einer sauberen Auslegung. So vermeidest du teure Fehlentscheidungen.',
  lesezeit: 13,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    textBlock(
      h('h2', t('1. Warum gute Planung bei einer PV-Anlage so wichtig ist')),
      p(
        t(
          'Eine Photovoltaikanlage läuft im Idealfall 25 bis 30 Jahre. Fehler in der Planung wirken deshalb nicht nur ein paar Monate, sondern oft über die gesamte Lebensdauer.'
        )
      ),
      p(
        t(
          'Viele Angebote werden rein über kWp und Preis verglichen. Das greift zu kurz. Entscheidend ist, wie gut die Anlage zu deinem Dach, deinem Stromverbrauch und deinen zukünftigen Verbrauchern passt.'
        )
      ),
      p(t('Eine saubere Planung berücksichtigt immer:'))
    ),

    tabelleBlock('Orientierung für die Planung', [
      {
        spalte1: 'Typischer Fall',
        spalte2: 'Sinnvolle Richtung',
        spalte3: 'Worauf besonders achten?',
      },
      {
        spalte1: '1–2 Personen ohne große Zusatzverbraucher',
        spalte2: 'eher kompakte bis mittlere Anlage',
        spalte3: 'Dachfläche und Grundverbrauch sauber abgleichen',
      },
      {
        spalte1: 'Familie mit 3–4 Personen',
        spalte2: 'mittlere bis größere Anlage',
        spalte3: 'tagsüberer Verbrauch und spätere Reserve mitdenken',
      },
      {
        spalte1: 'Haushalt mit Wärmepumpe',
        spalte2: 'größere PV-Anlage sinnvoll',
        spalte3: 'Winterbetrieb realistisch betrachten',
      },
      {
        spalte1: 'Haushalt mit E-Auto und Wärmepumpe',
        spalte2: 'Dachfläche möglichst gut nutzen',
        spalte3: 'Ladezeiten, Lastmanagement und Speicher prüfen',
      },
    ]),

    preset.blocks.dachBlock,

    hinweisBlock(
      'Nicht nur nach Süden denken',
      p(
        t(
          'Auch Ost-West-Belegungen können sehr sinnvoll sein – besonders dann, wenn tagsüber im Haushalt gearbeitet wird, eine Wärmepumpe läuft oder ein E-Auto regelmäßig zu Hause lädt.'
        )
      )
    ),

    preset.blocks.groessenBlock,
    preset.blocks.speicherBlock,

    tippBlock(
      'Speicher nicht als Pflicht, sondern als Werkzeug sehen',
      p(
        t(
          'Die richtige Frage lautet nicht „Brauche ich unbedingt einen Speicher?“, sondern: „Wie viel zusätzlichen Eigenverbrauch kann ich sinnvoll verschieben – und lohnt sich das in meinem Fall?“'
        )
      )
    ),

    preset.blocks.technikBlock,
    preset.blocks.buerokratieBlock,

    hinweisBlock(
      'Förderung und Finanzierung',
      p(
        t(
          'Je nach Situation kann eine Finanzierung sinnvoll sein. Wichtig ist, Finanzierung und Anlagenkonzept gemeinsam zu denken – nicht als getrennte Entscheidung.'
        )
      )
    ),

    preset.blocks.fehlerBlock,
    preset.blocks.ablaufBlock,
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'PV-Anlage planen: Dach, Größe, Speicher richtig abstimmen | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'PV-Anlage planen ohne typische Fehler: So gehst du bei Dach, Ausrichtung, Größe, Speicher und Anmeldung richtig vor – ehrlich erklärt von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
