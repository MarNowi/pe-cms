import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { faqItem, h, hinweisBlock, p, t, textBlock, tippBlock, ul } from './_helpers.mjs'
import { createArticleBase } from './_templates.mjs'
import { createKwpKostenPreset } from './_topicPresets.mjs'

const preset = createKwpKostenPreset({
  leistungLabel: '10 kWp',

  summary: {
    ohneSpeicherText: {
      bold: 'Eine 10 kWp PV-Anlage ohne Speicher liegt heute oft grob im Bereich von rund 13.000 bis 16.000 Euro',
      rest: ' – je nach Dach, Komponenten, Montageaufwand und technischer Ausgangslage.',
    },
    mitSpeicherText: {
      bold: 'Mit Speicher verschiebt sich die Investition meist deutlich nach oben',
      rest: ' – für viele Projekte landet das Gesamtbudget dann grob im Bereich von rund 22.000 bis 29.000 Euro.',
    },
    groessenText: {
      bold: '10 kWp ist für viele Einfamilienhäuser eine interessante Zielgröße',
      rest: ' – weil sich Dachfläche, Eigenverbrauch und Anlagengröße hier oft gut treffen.',
    },
    planungsText: {
      bold: 'Entscheidend ist nicht nur der Preis',
      rest: ' – sondern ob Speicher, Dachbelegung, Zählerschrank und spätere Verbraucher wie Wärmepumpe oder E-Auto sauber mitgedacht wurden.',
    },
  },

  preisOhneSpeicher: {
    paragraph1:
      'Für eine 10 kWp Anlage ohne Speicher liegt die grobe Orientierung heute oft im Bereich von etwa 13.000 bis 16.000 Euro. Sehr einfache Projekte können etwas darunter liegen, aufwendigere Anlagen mit höherem Montage- oder Technikaufwand auch darüber.',
    paragraph2:
      'Wichtig ist dabei: Diese Zahl sagt noch nichts darüber aus, wie gut die Anlage geplant ist. Ein niedriger Preis kann attraktiv wirken, wenn aber Dachbelegung, Zählerschrank oder elektrische Einbindung nicht sauber berücksichtigt sind, ist der Vergleich oft schief.',
    rows: [
      {
        spalte1: 'einfaches Dach, übersichtliche Technik',
        spalte2: 'ca. 13.000 bis 14.500 €',
        spalte3: 'eher günstige Ausgangslage',
      },
      {
        spalte1: 'typisches Einfamilienhaus',
        spalte2: 'ca. 14.500 bis 16.000 €',
        spalte3: 'realistische Standardorientierung',
      },
      {
        spalte1: 'aufwendigeres Dach oder höhere Technikansprüche',
        spalte2: 'ca. 16.000 bis 18.000 €',
        spalte3: 'mehr Aufwand oder Zusatzkosten möglich',
      },
    ],
  },

  preisMitSpeicher: {
    paragraph1:
      'Mit Speicher steigt die Investition deutlich. Für viele 10 kWp Projekte liegt die grobe Orientierung dann oft bei rund 22.000 bis 29.000 Euro. Auch hier gilt: Je nach Speichergröße, Systemtechnik, Dachsituation und elektrischem Aufwand kann es nach oben oder unten abweichen.',
    paragraph2:
      'Der Speicher ist dabei nicht einfach ein Zusatzprodukt, sondern ein eigener großer Kostenblock. Umso wichtiger ist es, ihn nicht aus dem Bauch heraus zu wählen, sondern passend zu Verbrauch, Anlagengröße und Nutzungsverhalten.',
    rows: [
      {
        spalte1: '10 kWp mit kleinerem bis mittlerem Speicher',
        spalte2: 'ca. 22.000 bis 25.000 €',
        spalte3: 'gute Standardorientierung',
      },
      {
        spalte1: '10 kWp mit mittlerem Speicher und sauberer Systemintegration',
        spalte2: 'ca. 25.000 bis 27.500 €',
        spalte3: 'häufige Praxisrange',
      },
      {
        spalte1: 'aufwendigeres Projekt oder größere Speicherlösung',
        spalte2: 'ca. 27.500 bis 31.000 €',
        spalte3: 'je nach Technik und Ausgangslage',
      },
    ],
  },

  preisfaktoren: {
    extraItems: ['geplante Erweiterungen wie Wärmepumpe oder Wallbox'],
    outro:
      'Gerade der Zählerschrank ist oft ein klassischer Kostentreiber. Wird er im Angebot nicht sauber mitgedacht, taucht der Aufwand später als unangenehme Zusatzposition auf.',
  },

  fehler: {
    errors: [
      'nur auf den Endpreis schauen',
      'Speicher blind als Pflicht einplanen',
      'Zählerschrank zu spät prüfen',
      'Wärmepumpe oder Wallbox nicht mitdenken',
      'Dachbelegung unnötig klein halten',
      'Angebote vergleichen, obwohl Leistungen nicht identisch sind',
    ],
    outro:
      'Eine gute 10 kWp Anlage ist nicht die billigste, sondern die, die technisch sauber geplant ist und im Alltag langfristig funktioniert.',
  },

  faq: {
    ohneSpeicherAntwort:
      'Als grobe Orientierung liegt eine 10 kWp Anlage ohne Speicher heute oft im Bereich von rund 13.000 bis 16.000 Euro. Je nach Dach, Technik und Aufwand vor Ort kann es aber abweichen.',
    mitSpeicherAntwort:
      'Für viele Projekte liegt die grobe Orientierung mit Speicher heute oft bei etwa 22.000 bis 29.000 Euro. Die genaue Summe hängt stark von Speichergröße, Zählerschrank, Dach und Systemtechnik ab.',
    groessenAntwort:
      'Nein. 10 kWp ist eine häufig sinnvolle Größenordnung, aber nicht automatisch für jedes Haus ideal. Entscheidend sind Dachfläche, Verbrauch, Verschattung und geplante Zusatzverbraucher.',
    preisunterschiedeAntwort:
      'Weil Dachform, Montageaufwand, Speichergröße, Zählerschrank, Leitungswege und enthaltene Leistungen sehr unterschiedlich sein können. Gleiche Leistung heißt nicht automatisch gleiches Projekt.',
    speicherAntwort:
      'Zumindest konzeptionell ja. Ob ein Speicher sofort sinnvoll ist, hängt davon ab, wie viel Solarstrom du in die Abend- und Nachtstunden verschieben kannst und welche Verbraucher im Haus vorhanden sind.',
    extra: [
      {
        frage: 'Welche Rolle spielt die 10-kWp-Grenze?',
        antwort:
          'Sie ist für die energierechtliche Einordnung relevant und spielt bei der Einspeisevergütung eine Rolle. Sie sollte aber nicht der einzige Grund sein, warum eine Anlage genau auf diese Größe geplant wird.',
      },
    ],
  },
})

const article = createArticleBase({
  titel: 'Was kostet eine 10 kWp Solaranlage mit Speicher?',
  slug: 'kosten-10-kwp-solaranlage-mit-speicher',
  teaser:
    'Eine 10 kWp Solaranlage ist für viele Einfamilienhäuser eine starke Größenordnung. Aber was kostet sie heute wirklich – und wie verändert ein Speicher den Preis? Hier findest du eine ehrliche Einordnung mit typischen Preisfaktoren und Praxisblick.',
  lesezeit: 12,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    textBlock(
      h('h2', t('1. Warum 10 kWp für viele Häuser so relevant ist')),
      p(
        t(
          '10 kWp ist bei Einfamilienhäusern keine magische Zahl, aber eine sehr häufige Größenordnung. Sie passt oft gut zu typischen Dachflächen und ist groß genug, um einen relevanten Teil des Strombedarfs selbst zu decken.'
        )
      ),
      p(
        t(
          'Gerade wenn zusätzlich über Wärmepumpe, Wallbox oder steigenden Stromverbrauch nachgedacht wird, ist 10 kWp oft ein sinnvoller Planungspunkt. Gleichzeitig gilt aber: Nicht jedes Dach und nicht jeder Haushalt sollten automatisch auf genau diese Größe ausgelegt werden.'
        )
      ),
      p(
        t(
          'Eine gute Planung startet deshalb nicht bei der Zahl selbst, sondern bei Dach, Verbrauch, Verschattung und der Frage, wie der erzeugte Strom später im Alltag genutzt wird.'
        )
      )
    ),

    hinweisBlock(
      '10 kWp ist Orientierung – kein Dogma',
      p(
        t(
          'Für manche Häuser ist etwas weniger sinnvoll, für andere deutlich mehr. Die passende Größe ergibt sich nicht aus einem Internetwert, sondern aus Dachfläche, Nutzung und technischer Zielsetzung.'
        )
      )
    ),

    preset.blocks.preisOhneBlock,
    preset.blocks.preisOhneTabelle,
    preset.blocks.preisMitBlock,
    preset.blocks.preisMitTabelle,

    tippBlock(
      'Speicher nicht als Pflicht verkaufen lassen',
      p(
        t(
          'Ein Speicher kann sehr sinnvoll sein, aber er ist kein Automatismus. Entscheidend ist, wie viel Solarstrom du tatsächlich in die Abend- und Nachtstunden verschieben kannst.'
        )
      )
    ),

    preset.blocks.kostenBloeckeBlock,
    preset.blocks.kostenBloeckeTabelle,
    preset.blocks.preisfaktorenBlock,

    hinweisBlock(
      'Dachfläche gut nutzen',
      p(
        t(
          'Wenn Wärmepumpe oder E-Auto absehbar sind, ist eine zu klein geplante Anlage oft der eigentliche Fehler. Besser ist eine ehrliche Auslegung mit Blick auf die nächsten Jahre.'
        )
      )
    ),

    textBlock(
      h('h2', t('6. Was ist an 10 kWp technisch und wirtschaftlich besonders?')),
      p(
        t(
          '10 kWp ist auch deshalb spannend, weil diese Größe in vielen Vergleichen und Berechnungen als typischer Referenzpunkt für Einfamilienhäuser auftaucht. Sie liegt oft an der Grenze dessen, was auf einer gut nutzbaren Dachfläche noch sehr sauber darstellbar ist.'
        )
      ),
      p(
        t(
          'Außerdem ist die 10-kWp-Schwelle energierechtlich relevant. Für Anlagen bis 10 kWp gilt aktuell ein eigener EEG-Vergütungssatz für eingespeisten Strom. Diese Grenze allein sollte zwar nicht deine gesamte Planung bestimmen, sie ist aber für die Einordnung trotzdem wichtig.'
        )
      )
    ),

    tippBlock(
      '10 kWp nicht nur wegen der Grenze bauen',
      p(
        t(
          'Die wirtschaftlich beste Lösung ergibt sich aus Dach, Verbrauch und Zielsetzung – nicht aus einer reinen Fixierung auf eine runde Zahl. Die 10-kWp-Grenze ist relevant, ersetzt aber keine saubere Planung.'
        )
      )
    ),

    textBlock(
      h('h2', t('7. Für wen ist 10 kWp mit Speicher oft sinnvoll?')),
      p(
        t(
          'Eine 10 kWp Anlage mit Speicher passt häufig gut zu Haushalten, die einen spürbaren Strombedarf haben und einen relevanten Teil ihres Solarstroms nicht nur tagsüber, sondern auch am Abend nutzen wollen.'
        )
      ),
      ul(
        'Familienhaushalte mit konstantem Strombedarf',
        'Haushalte mit Wärmepumpe',
        'Haushalte mit geplanter oder vorhandener Wallbox',
        'Häuser mit guter nutzbarer Dachfläche',
        'Nutzer, die Eigenverbrauch und Unabhängigkeit erhöhen wollen'
      ),
      p(
        t(
          'Ob das konkret passt, hängt aber immer davon ab, wie dein Strombedarf über den Tag verteilt ist und wie gut Dach, Speicher und spätere Verbraucher zusammenpassen.'
        )
      )
    ),

    preset.blocks.laufendeKostenBlock,
    preset.blocks.fehlerBlock,
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Was kostet eine 10 kWp Solaranlage mit Speicher? | PEAK.Energy',
  metaDescription:
    '10 kWp Solaranlage mit Speicher: aktuelle Kosten, Preisfaktoren, Speicher-Einordnung und typische Fehler – ehrlich erklärt von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
