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
      bold: 'Wer eine Solaranlage für eine Wärmepumpe plant, sollte nicht nur den Haushaltsstrom betrachten',
      rest: ' – der zusätzliche Strombedarf der Heizung muss von Anfang an sauber mitgedacht werden.',
    },
    mitSpeicherText: {
      bold: 'Dachfläche, Ausrichtung, Wärmepumpenlast und Jahresverlauf sind entscheidend',
      rest: ' – vor allem, weil Wärmepumpen im Winter besonders relevant werden.',
    },
    groessenText: {
      bold: 'Eine zu klein geplante Anlage ist bei Wärmepumpe oft der eigentliche Fehler',
      rest: ' – deshalb lohnt sich eine ehrliche Auslegung mit Blick auf die nächsten Jahre.',
    },
    planungsText: {
      bold: 'Speicher kann sinnvoll sein, ist aber kein Ersatz für gute Grundplanung',
      rest: ' – wichtiger ist, dass PV, Verbrauch und Wärmepumpe technisch sauber zusammenpassen.',
    },
  },

  dach: {
    title: '2. Ist dein Dach für PV und Wärmepumpe gut geeignet?',
    paragraphs: [
      'Gerade mit Wärmepumpe ist die nutzbare Dachfläche besonders wichtig. Denn der zusätzliche Strombedarf der Heizung macht eine gute PV-Auslegung oft noch relevanter.',
      'Auch hier gilt: Südausrichtung ist nicht die einzige sinnvolle Lösung. Ost-West-Belegungen können gerade dann stark sein, wenn Erzeugung besser über den Tag verteilt werden soll.',
      'Entscheidend ist, wie viel Fläche realistisch nutzbar ist und ob Verschattung den Ertrag spürbar reduziert.',
    ],
    list: [
      'möglichst gut nutzbare Dachfläche',
      'Verschattung sauber bewerten',
      'Ausrichtung nicht nur pauschal, sondern passend zur Nutzung beurteilen',
      'Dachbelegung nicht unnötig klein halten',
    ],
  },

  groesse: {
    title: '3. Wie groß sollte die Solaranlage für eine Wärmepumpe sein?',
    paragraphs: [
      'Die passende Größe ergibt sich nicht nur aus dem Haushaltsverbrauch, sondern auch aus dem zusätzlichen Strombedarf der Wärmepumpe.',
      'Wer nur mit dem klassischen Haushaltsstrom rechnet, plant bei Wärmepumpe oft zu klein. Genau deshalb sollte die PV-Anlage nicht auf den Status quo, sondern auf den echten Gesamtbedarf ausgelegt werden.',
      'In vielen Fällen ist es sinnvoll, die verfügbare Dachfläche möglichst gut zu nutzen – vor allem dann, wenn Wärmepumpe und eventuell später noch Wallbox oder E-Auto dazukommen.',
    ],
    list: [
      'Haushaltsstrom und Wärmepumpenstrom gemeinsam betrachten',
      'Jahresverbrauch realistisch einordnen',
      'Winterbetrieb nicht ausblenden',
      'künftige Zusatzverbraucher direkt mitdenken',
      'Dachfläche möglichst sauber nutzen',
    ],
  },

  speicher: {
    title: '4. Speicher bei Wärmepumpe direkt mitdenken?',
    paragraphs: [
      'Ein Speicher kann gerade in Kombination mit Wärmepumpe sinnvoll sein, weil er Solarstrom aus den Mittagsstunden in spätere Verbrauchszeiten verschieben kann.',
      'Er ist aber kein Muss und sollte nicht als Pflicht verkauft werden. Entscheidend ist, ob die Speichergröße zur PV-Anlage, zum Wärmebedarf und zum Alltag im Haus passt.',
      'Wichtiger als ein möglichst großer Speicher ist eine saubere Gesamtauslegung von PV-Anlage, Wärmepumpe und Verbrauchsprofil.',
    ],
  },

  technik: {
    title: '5. Technik und Infrastruktur mit Wärmepumpe sauber mitdenken',
    paragraphs: [
      'Bei der Kombination aus PV und Wärmepumpe reicht es nicht, nur Module aufs Dach zu planen. Zählerschrank, Leitungswege, Schnittstellen und die elektrische Einbindung müssen von Anfang an sauber berücksichtigt werden.',
      'Gerade im Bestand ist die elektrische Infrastruktur oft ein Punkt, der zu spät auffällt. Wird das früh geprüft, lassen sich spätere Überraschungen vermeiden.',
    ],
    list: [
      'Zählerschrank prüfen',
      'Leitungswege und Anschluss sauber planen',
      'Wechselrichter und Speicher passend dimensionieren',
      'Schnittstellen für Wärmepumpe und spätere Erweiterungen mitdenken',
    ],
  },

  buerokratie: {
    title: '6. Bürokratie und Anmeldung nicht vergessen',
    paragraphs: [
      'Auch bei der Kombination aus PV-Anlage und Wärmepumpe gehört die saubere Anmeldung zur Planung dazu. Dazu zählen Netzbetreiber, Inbetriebnahme und Registrierung.',
      'Wer diesen Teil früh mitdenkt, spart später Rückfragen und Verzögerungen.',
    ],
    list: [
      'Netzbetreiberanfrage und technische Abstimmung',
      'Inbetriebnahme nach Fertigstellung',
      'Registrierung im Marktstammdatenregister',
      'Dokumentation und Einweisung',
    ],
  },

  fehler: {
    title: '7. Typische Fehler bei PV für Wärmepumpe',
    lead:
      'Die meisten Fehler entstehen nicht auf dem Dach, sondern vorher – bei zu kurzer Planung oder falschen Annahmen zum Strombedarf.',
    errors: [
      'nur den Haushaltsstrom betrachten',
      'Wärmepumpe in der PV-Auslegung zu spät berücksichtigen',
      'Winterbetrieb ausblenden',
      'Dachfläche unnötig klein belegen',
      'Speicher blind als Pflicht ansehen',
      'Zählerschrank und Infrastruktur zu spät prüfen',
    ],
    outro:
      'Eine gute PV-Anlage für eine Wärmepumpe ist nicht die billigste auf dem Papier, sondern die, die technisch sauber geplant ist und im Alltag langfristig funktioniert.',
  },

  ablauf: {
    title: '8. So läuft eine saubere Auslegung in der Praxis ab',
    paragraphs: [
      'In der Praxis hat sich ein klarer Ablauf bewährt: erst Dach und Gesamtverbrauch bewerten, dann PV-Anlage und Wärmepumpe gemeinsam denken, danach Speicher, Technik und Anmeldung sauber abstimmen.',
      'Genau an dieser Stelle trennt sich gute Handwerksplanung von reiner Angebotsoptik.',
    ],
    list: [
      'Dach und Verschattung bewerten',
      'Haushalts- und Wärmepumpenverbrauch einordnen',
      'PV-Anlage auf den echten Bedarf auslegen',
      'Speicher sinnvoll prüfen',
      'Technik und Zählerschrank abstimmen',
      'Anmeldung und Inbetriebnahme mitdenken',
      'Umsetzung sauber vorbereiten',
    ],
  },

  faq: {
    hauptbegriff: 'Solaranlage für eine Wärmepumpe',
    planungAntwort:
      'Am besten startest du mit Dachfläche, Verschattung, Haushaltsstrom und dem zusätzlichen Bedarf der Wärmepumpe. Erst danach sollten Anlagengröße, Speicher und Technik festgelegt werden.',
    dachAntwort:
      'Süddächer liefern oft hohe Spitzenerträge, aber auch Ost-West-Dächer können sehr sinnvoll sein. Entscheidend ist, wie gut die Dachfläche zur Nutzung und zum Lastprofil passt.',
    speicherAntwort:
      'Ja, zumindest konzeptionell. Ob er sofort sinnvoll ist, hängt davon ab, wie gut Solarstrom in spätere Verbrauchszeiten verschoben werden kann und wie die Gesamtanlage ausgelegt wird.',
    fehlerAntwort:
      'Oft wird nur der Haushaltsstrom betrachtet, während der zusätzliche Bedarf der Wärmepumpe, die Dachfläche oder der Zählerschrank zu spät in die Planung einfließen.',
    anmeldungAntwort:
      'Ja. Auch bei der Kombination aus PV und Wärmepumpe gehören Anmeldung, Inbetriebnahme und Registrierung sauber zur Planung dazu.',
  },
})

const article = createArticleBase({
  titel: 'Solaranlage für Wärmepumpe auslegen: Worauf kommt es an?',
  slug: 'solaranlage-fuer-waermepumpe-auslegen',
  kategorie: 'solaranlage',
  teaser:
    'Wer eine Solaranlage für eine Wärmepumpe plant, sollte nicht nur den Haushaltsstrom betrachten. Hier findest du eine ehrliche Einordnung zu Auslegung, Dachfläche, Speicher und typischen Fehlern.',
  lesezeit: 12,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    textBlock(
      h('h2', t('1. Warum PV und Wärmepumpe zusammen sauber geplant werden müssen')),
      p(
        t(
          'Die Kombination aus Solaranlage und Wärmepumpe ist für viele Häuser sehr sinnvoll. Entscheidend ist aber, dass die PV-Anlage nicht isoliert, sondern zusammen mit dem zusätzlichen Strombedarf der Wärmepumpe geplant wird.'
        )
      ),
      p(
        t(
          'Viele Anlagen werden zu stark aus dem klassischen Haushaltsverbrauch heraus gedacht. Mit Wärmepumpe reicht das oft nicht mehr. Genau deshalb braucht es eine Auslegung, die den Gesamtbedarf realistisch einordnet.'
        )
      ),
      p(t('Besonders wichtig sind dabei:'))
    ),

    tabelleBlock('Orientierung für die Planung', [
      {
        spalte1: 'Typischer Fall',
        spalte2: 'Sinnvolle Richtung',
        spalte3: 'Worauf besonders achten?',
      },
      {
        spalte1: 'Haushalt ohne Wärmepumpe',
        spalte2: 'klassische PV-Auslegung',
        spalte3: 'Haushaltsstrom und Dachfläche sauber abgleichen',
      },
      {
        spalte1: 'Haushalt mit bestehender Wärmepumpe',
        spalte2: 'größere PV-Anlage oft sinnvoll',
        spalte3: 'Wärmebedarf und Winterverbrauch realistisch betrachten',
      },
      {
        spalte1: 'Wärmepumpe geplant',
        spalte2: 'PV direkt mit Reserve auslegen',
        spalte3: 'Dachfläche und spätere Stromlast gemeinsam denken',
      },
      {
        spalte1: 'Wärmepumpe plus spätere Wallbox',
        spalte2: 'Dachfläche möglichst gut nutzen',
        spalte3: 'Reserve, Speicher und Infrastruktur mitdenken',
      },
    ]),

    preset.blocks.dachBlock,

    hinweisBlock(
      'Nicht nur auf Sommererträge schauen',
      p(
        t(
          'Gerade bei Wärmepumpe ist der Jahresverlauf wichtig. Die höchste Relevanz der Heizung liegt nicht im Sommer, sondern in der kühleren Jahreszeit. Genau deshalb sollte die Planung nicht nur aus der sonnigen Perspektive gedacht werden.'
        )
      )
    ),

    preset.blocks.groessenBlock,
    preset.blocks.speicherBlock,

    tippBlock(
      'Wärmepumpe nicht als Nebensatz behandeln',
      p(
        t(
          'Wenn die Wärmepumpe nur „mitgemeint“ ist, wird die Solaranlage oft zu klein ausgelegt. Besser ist es, den zusätzlichen Strombedarf direkt als festen Teil der Planung zu behandeln.'
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

  metaTitle: 'Solaranlage für Wärmepumpe auslegen: Worauf kommt es an? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Solaranlage für Wärmepumpe richtig auslegen: Dachfläche, Strombedarf, Speicher, Winterbetrieb und typische Fehler – ehrlich erklärt von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
