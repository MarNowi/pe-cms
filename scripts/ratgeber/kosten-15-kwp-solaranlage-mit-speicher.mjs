import { upsertRatgeberArticle } from './_articleFactory.mjs'
import {
  faqItem,
  h,
  hinweisBlock,
  p,
  t,
  textBlock,
  tippBlock,
  ul,
} from './_helpers.mjs'
import {
  createArticleBase,
  createPreisTabelle,
  createStandardFehlerBlock,
  createStandardKostenBloeckeBlock,
  createStandardKostenCta,
  createStandardKostenSummary,
  createStandardKostenbloeckeTabelle,
  createStandardLaufendeKostenBlock,
  createStandardPreisfaktorenBlock,
} from './_templates.mjs'

const article = createArticleBase({
  titel: 'Was kostet eine 15 kWp Solaranlage mit Speicher?',
  slug: 'kosten-15-kwp-solaranlage-mit-speicher',
  teaser:
    'Eine 15 kWp Solaranlage ist für viele Häuser mit hohem Strombedarf eine starke Lösung – etwa mit Wärmepumpe, Wallbox oder viel nutzbarer Dachfläche. Aber was kostet so eine Anlage heute wirklich? Hier findest du eine ehrliche Einordnung mit typischen Preisfaktoren und Praxisblick.',
  lesezeit: 13,

  zusammenfassung: createStandardKostenSummary({
    ohneSpeicherText: {
      bold: 'Eine 15 kWp PV-Anlage ohne Speicher liegt heute oft grob im Bereich von rund 18.000 bis 24.000 Euro',
      rest: ' – abhängig von Dach, Komponenten, Montageaufwand und technischer Ausgangslage.',
    },
    mitSpeicherText: {
      bold: 'Mit Speicher landet ein solches Projekt oft deutlich höher',
      rest: ' – für viele Anlagen ist grob ein Bereich von etwa 30.000 bis 42.000 Euro realistisch.',
    },
    groessenText: {
      bold: '15 kWp ist vor allem dann interessant, wenn viel Dachfläche vorhanden ist und der Strombedarf höher liegt',
      rest: ' – zum Beispiel durch Wärmepumpe, E-Auto oder einen generell hohen Haushaltsverbrauch.',
    },
    planungsText: {
      bold: 'Wichtig ist nicht nur die reine Leistung',
      rest: ' – sondern ob Speicher, Zählerschrank, Dachbelegung und spätere Verbraucher sauber zusammen geplant wurden.',
    },
  }),

  inhalt: [
    textBlock(
      h('h2', t('1. Für wen ist eine 15 kWp Solaranlage überhaupt interessant?')),
      p(
        t(
          '15 kWp ist für viele Häuser schon eine bewusst größere Lösung. Diese Größenordnung passt oft zu Einfamilienhäusern mit sehr gut nutzbarer Dachfläche, höherem Strombedarf oder klarer Planung für Wärmepumpe, Wallbox und steigenden Eigenverbrauch.'
        )
      ),
      p(
        t(
          'Gerade wenn Strom nicht nur im klassischen Haushalt, sondern auch für Heizung oder Mobilität genutzt wird, kann eine 15 kWp Anlage sinnvoll sein. Gleichzeitig gilt aber auch hier: Nicht jedes Haus sollte automatisch so groß geplant werden.'
        )
      ),
      p(
        t(
          'Die passende Leistung ergibt sich nicht aus einer runden Zahl, sondern aus Dachfläche, Verschattung, Lastprofil und der Frage, wie viel des erzeugten Stroms später sinnvoll selbst genutzt werden kann.'
        )
      )
    ),

    hinweisBlock(
      '15 kWp ist meist kein Standardfall mehr',
      p(
        t(
          'Diese Leistungsklasse ist oft besonders dann spannend, wenn Wärmepumpe, E-Auto oder sehr gute Dachflächen zusammenkommen. Für viele kleinere Haushalte ist sie dagegen nicht automatisch die beste Wahl.'
        )
      )
    ),

    textBlock(
      h('h2', t('2. Was kostet eine 15 kWp Solaranlage ohne Speicher?')),
      p(
        t(
          'Ohne Speicher liegt eine 15 kWp Anlage heute grob oft im Bereich von etwa 18.000 bis 24.000 Euro. Sehr einfache Projekte können etwas darunter liegen, anspruchsvollere Anlagen mit komplexerer Dach- oder Elektro-Situation auch darüber.'
        )
      ),
      p(
        t(
          'Wichtig ist dabei: Ein günstiger Preis allein sagt noch nichts über die Qualität der Planung. Gerade bei größeren Anlagen sind Dachbelegung, elektrische Einbindung, Zählerschrank und Erweiterbarkeit entscheidend.'
        )
      )
    ),

    createPreisTabelle({
      titel: 'Grobe Preisorientierung ohne Speicher',
      rows: [
        {
          spalte1: 'einfaches Dach, klare Technik',
          spalte2: 'ca. 18.000 bis 20.500 €',
          spalte3: 'eher günstige Ausgangslage',
        },
        {
          spalte1: 'typisches Projekt mit guter Dachnutzung',
          spalte2: 'ca. 20.500 bis 24.000 €',
          spalte3: 'realistische Standardorientierung',
        },
        {
          spalte1: 'aufwendigeres Dach oder höhere Technikansprüche',
          spalte2: 'ca. 24.000 bis 27.000 €',
          spalte3: 'mehr Aufwand oder Zusatzkosten möglich',
        },
      ],
    }),

    textBlock(
      h('h2', t('3. Was kostet eine 15 kWp Anlage mit Speicher?')),
      p(
        t(
          'Mit Speicher verschiebt sich die Investition deutlich nach oben. Für viele 15 kWp Projekte ist grob ein Bereich von etwa 30.000 bis 42.000 Euro realistisch. Je nach Speichergröße, Systemarchitektur, Dachsituation und Elektro-Aufwand kann es auch darüber oder darunter liegen.'
        )
      ),
      p(
        t(
          'Gerade bei dieser Größenordnung ist wichtig, dass Speicher und PV-Anlage wirklich zusammen gedacht werden. Ein großer Speicher klingt im Gespräch schnell attraktiv, ist aber nicht automatisch die wirtschaftlich beste Lösung.'
        )
      )
    ),

    createPreisTabelle({
      titel: 'Grobe Preisorientierung mit Speicher',
      rows: [
        {
          spalte1: '15 kWp mit mittlerem Speicher',
          spalte2: 'ca. 30.000 bis 34.000 €',
          spalte3: 'gute Grundorientierung',
        },
        {
          spalte1: '15 kWp mit größerem Speicher und sauberer Systemintegration',
          spalte2: 'ca. 34.000 bis 38.000 €',
          spalte3: 'häufige Praxisrange',
        },
        {
          spalte1: 'aufwendigeres Projekt oder größere Speicherlösung',
          spalte2: 'ca. 38.000 bis 42.000 €',
          spalte3: 'je nach Technik und Ausgangslage',
        },
      ],
    }),

    tippBlock(
      'Große Anlage heißt nicht automatisch großer Speicher',
      p(
        t(
          'Auch bei 15 kWp sollte der Speicher nicht nach Bauchgefühl skaliert werden. Entscheidend ist, wie dein Strombedarf über den Tag verteilt ist und wie viel Solarstrom sinnvoll in die Abend- und Nachtstunden verschoben werden kann.'
        )
      )
    ),

    createStandardKostenBloeckeBlock({
      title: '4. Welche Kosten stecken in einer 15 kWp Anlage?',
      anlageLabel: '15 kWp Anlage',
      extraListItems: ['optional: Anpassungen am Zählerschrank oder Unterverteilungen'],
      outro:
        'Wer Angebote vergleicht, sollte deshalb immer sehr genau prüfen, welche Leistungen wirklich enthalten sind. Größere Leistung bedeutet nicht nur mehr Module, sondern oft auch mehr Aufwand in Planung und Elektrointegration.',
    }),

    createStandardKostenbloeckeTabelle(),

    createStandardPreisfaktorenBlock({
      title: '5. Was treibt den Preis bei 15 kWp besonders?',
      lead:
        'Bei 15 kWp fallen Projektunterschiede oft noch stärker ins Gewicht als bei kleineren Anlagen. Zwei Angebote mit gleicher Leistung können deshalb am Ende trotzdem deutlich auseinanderliegen.',
      extraItems: [
        'geplante Erweiterungen wie Wallbox, Wärmepumpe oder Energiemanagement',
      ],
      outro:
        'Gerade bei Häusern mit höherem Verbrauch lohnt sich die saubere Auslegung. Eine zu klein geplante Anlage kann später teurer werden als eine ehrliche Lösung von Anfang an.',
    }),

    hinweisBlock(
      'Größere Dachnutzung sauber bewerten',
      p(
        t(
          'Wenn viel Dachfläche vorhanden ist, ist die Frage nicht nur „Wie viel passt drauf?“, sondern auch „Wie viel davon ist technisch und wirtschaftlich sinnvoll nutzbar?“ Genau dort entscheidet sich die Qualität der Planung.'
        )
      )
    ),

    textBlock(
      h('h2', t('6. Was ist an 15 kWp technisch und wirtschaftlich besonders?')),
      p(
        t(
          '15 kWp ist für viele Häuser bereits eine klar großzügige Auslegung. Gerade bei Wärmepumpe, E-Auto oder allgemein hohem Strombedarf kann das sinnvoll sein, weil mehr Eigenverbrauchspotenzial auf dem Dach erschlossen wird.'
        )
      ),
      p(
        t(
          'Für die Einspeisung ist diese Größe ebenfalls interessant: Bei einer Anlage über 10 kWp wird der eingespeiste Strom nicht mehr komplett mit einem einheitlichen Satz vergütet, sondern in Leistungsteile aufgeteilt. Für die ersten 10 kWp gilt aktuell ein anderer Vergütungssatz als für den Anteil darüber.'
        )
      ),
      p(
        t(
          'Diese Grenze allein sollte die Planung aber nicht bestimmen. Wichtiger ist, ob die Anlage im Alltag zu deinem Haus, deinem Verbrauch und deinen Ausbauplänen passt.'
        )
      )
    ),

    tippBlock(
      'Nicht nur auf Einspeisung schauen',
      p(
        t(
          'Auch bei 15 kWp bleibt der Eigenverbrauch oft der stärkere Hebel. Die beste Lösung ist meist nicht die, die auf dem Papier am meisten einspeist, sondern die, die im Alltag möglichst viel eigenen Solarstrom sinnvoll im Haus nutzt.'
        )
      )
    ),

    textBlock(
      h('h2', t('7. Für wen ist 15 kWp mit Speicher oft sinnvoll?')),
      p(
        t(
          'Eine 15 kWp Anlage mit Speicher passt häufig gut zu Häusern mit hohem Strombedarf und sehr gut nutzbarer Dachfläche. Typisch ist das etwa bei Familienhaushalten mit Wärmepumpe, Wallbox oder klarer Ausrichtung auf hohe Eigenversorgung.'
        )
      ),
      ul(
        'Familienhaushalte mit hohem Strombedarf',
        'Haushalte mit Wärmepumpe',
        'Haushalte mit Wallbox oder geplantem E-Auto',
        'Häuser mit großer, gut nutzbarer Dachfläche',
        'Nutzer, die möglichst viel eigenen Solarstrom selbst verbrauchen wollen'
      ),
      p(
        t(
          'Ob das konkret passt, hängt aber immer davon ab, wie dein Verbrauchsprofil aussieht und ob Dach, Speicher und technische Infrastruktur sauber zusammen gedacht wurden.'
        )
      )
    ),

    createStandardLaufendeKostenBlock({
      title: '8. Welche laufenden Kosten sollte man mitdenken?',
      outro:
        'Gerade bei größeren Anlagen lohnt es sich, diese Punkte von Anfang an realistisch mitzudenken – nicht dramatisch, aber sauber.',
    }),

    createStandardFehlerBlock({
      title: '9. Typische Fehler bei 15 kWp Projekten',
      lead:
        'Viele Fehlentscheidungen entstehen nicht wegen der Leistung selbst, sondern weil größere Anlagen zu pauschal gedacht werden.',
      errors: [
        'nur auf den Endpreis schauen',
        'viel Dachfläche automatisch mit guter Planung verwechseln',
        'Speicher blind zu groß auslegen',
        'Zählerschrank und Elektrostruktur zu spät prüfen',
        'Wärmepumpe oder Wallbox nicht sauber mit einrechnen',
        'Angebote vergleichen, obwohl Leistungen nicht identisch sind',
      ],
      outro:
        'Eine gute 15 kWp Anlage ist nicht die größte oder billigste, sondern die, die technisch sauber geplant ist und langfristig zur Nutzung des Hauses passt.',
    }),

    createStandardKostenCta({
      titel: 'Lass uns deine 15 kWp Anlage realistisch einordnen',
      text:
        'Wir schauen uns Dach, Verbrauch, Speicher, Zählerschrank und spätere Erweiterungen gemeinsam an – ehrlich, praxisnah und ohne Verkaufsdruck.',
    }),
  ],

  faq: [
    faqItem(
      'Was kostet eine 15 kWp Solaranlage ohne Speicher aktuell ungefähr?',
      'Als grobe Orientierung liegt eine 15 kWp Anlage ohne Speicher heute oft im Bereich von rund 18.000 bis 24.000 Euro. Je nach Dach, Technik und Aufwand vor Ort kann der Wert aber abweichen.'
    ),
    faqItem(
      'Was kostet eine 15 kWp Solaranlage mit Speicher?',
      'Für viele Projekte liegt die grobe Orientierung mit Speicher heute oft bei etwa 30.000 bis 42.000 Euro. Die genaue Summe hängt stark von Speichergröße, Zählerschrank, Dach und Systemtechnik ab.'
    ),
    faqItem(
      'Für wen lohnt sich eine 15 kWp Anlage besonders?',
      'Sie ist oft besonders interessant für Häuser mit hoher Dachnutzung und höherem Strombedarf – zum Beispiel mit Wärmepumpe, Wallbox oder generell starkem Eigenverbrauchspotenzial.'
    ),
    faqItem(
      'Ist 15 kWp für ein Einfamilienhaus nicht schon zu groß?',
      'Das kommt auf Dachfläche, Verbrauch und Ausbaupläne an. Für manche Häuser ist 15 kWp zu groß, für andere mit Wärmepumpe und E-Auto eine sehr sinnvolle Größenordnung.'
    ),
    faqItem(
      'Sollte ich bei 15 kWp direkt einen Speicher mitplanen?',
      'Zumindest konzeptionell ja. Ob ein Speicher sofort sinnvoll ist, hängt davon ab, wie viel Solarstrom du in die Abend- und Nachtstunden verschieben kannst und welche Verbraucher im Haus vorhanden sind.'
    ),
    faqItem(
      'Warum unterscheiden sich Angebote für 15 kWp teilweise so stark?',
      'Weil Dachform, Montageaufwand, Speichergröße, Leitungswege, Zählerschrank und enthaltene Leistungen sehr unterschiedlich sein können. Gleiche Leistung bedeutet nicht automatisch gleiches Projekt.'
    ),
  ],

  metaTitle: 'Was kostet eine 15 kWp Solaranlage mit Speicher? | PEAK.Energy',
  metaDescription:
    '15 kWp Solaranlage mit Speicher: aktuelle Kosten, Preisfaktoren, Speicher-Einordnung und typische Fehler – ehrlich erklärt von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
