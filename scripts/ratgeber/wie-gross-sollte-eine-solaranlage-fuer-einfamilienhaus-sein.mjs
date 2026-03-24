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
      bold: 'Die richtige Größe einer Solaranlage fürs Einfamilienhaus ergibt sich nicht aus einer festen Standardzahl',
      rest: ' – entscheidend sind Dachfläche, Stromverbrauch und spätere Verbraucher.',
    },
    mitSpeicherText: {
      bold: 'Wer nur den aktuellen Haushaltsstrom betrachtet, plant oft zu klein',
      rest: ' – Wärmepumpe, E-Auto oder steigender Eigenverbrauch sollten direkt mitgedacht werden.',
    },
    groessenText: {
      bold: 'Eine zu kleine Anlage ist in der Praxis oft der größere Fehler als eine sauber geplante größere Lösung',
      rest: ' – vor allem bei gut nutzbarer Dachfläche.',
    },
    planungsText: {
      bold: 'Entscheidend ist nicht die schönste kWp-Zahl',
      rest: ' – sondern die Anlage, die technisch und wirtschaftlich sauber zum Haus passt.',
    },
  },

  dach: {
    title: '2. Welche Rolle spielt die Dachfläche?',
    paragraphs: [
      'Die nutzbare Dachfläche ist einer der wichtigsten Punkte bei der Frage nach der passenden Größe. Denn selbst bei ähnlichem Verbrauch können zwei Häuser völlig unterschiedliche Möglichkeiten für die Belegung haben.',
      'Wichtig ist nicht nur die reine Fläche, sondern auch Ausrichtung, Verschattung und die Frage, wie gut die Dachbereiche technisch nutzbar sind.',
      'Wer eine gute Dachfläche hat, sollte nicht zu kurz denken. Gerade bei späteren Verbrauchern kann eine größere, sauber geplante Anlage sinnvoller sein als eine künstlich klein gehaltene Lösung.',
    ],
    list: [
      'nutzbare Dachfläche realistisch bewerten',
      'Ausrichtung und Verschattung sauber prüfen',
      'nicht nur „was passt drauf“, sondern „was ist sinnvoll“ fragen',
      'Reserve für spätere Verbraucher mitdenken',
    ],
  },

  groesse: {
    title: '3. Wie groß sollte die Solaranlage für ein Einfamilienhaus sein?',
    paragraphs: [
      'Die passende Größe ergibt sich aus dem Zusammenspiel von Dachfläche, Stromverbrauch und Ausbauplänen. Eine pauschale Standardgröße für jedes Einfamilienhaus gibt es nicht.',
      'Ein kleiner Haushalt ohne große Zusatzverbraucher braucht oft eine andere Lösung als ein Haus mit Wärmepumpe, Wallbox oder hohem Abendverbrauch.',
      'In vielen Fällen ist es sinnvoll, nicht nur den heutigen Zustand zu betrachten, sondern die nächsten Jahre mitzudenken. Genau dort entscheidet sich oft, ob eine Anlage später als passend oder als zu klein wahrgenommen wird.',
    ],
    list: [
      'aktuellen Haushaltsstrom einordnen',
      'Wärmepumpe und E-Auto mitdenken',
      'Dachfläche sinnvoll nutzen',
      'nicht nur auf den Einstiegspreis schauen',
      'Eigenverbrauch und künftige Nutzung gemeinsam betrachten',
    ],
  },

  speicher: {
    title: '4. Speicher direkt mitdenken?',
    paragraphs: [
      'Ein Speicher kann bei einem Einfamilienhaus sinnvoll sein, ist aber nicht automatisch Pflicht. Wichtig ist, dass die Speicherfrage erst nach sauberer Einordnung von Dach, PV-Größe und Verbrauch beantwortet wird.',
      'Wer tagsüber wenig Strom direkt nutzt und abends mehr Bedarf hat, kann stärker profitieren. Wer dagegen schon viel Direktverbrauch hat, braucht nicht zwingend sofort einen Speicher.',
      'Entscheidend ist immer die Gesamtauslegung – nicht die isolierte Frage, ob Speicher gut klingt.',
    ],
  },

  technik: {
    title: '5. Technik und Infrastruktur nicht vergessen',
    paragraphs: [
      'Zur passenden Größe gehört nicht nur die kWp-Zahl auf dem Papier. Auch Zählerschrank, Leitungswege, Wechselrichter und mögliche spätere Erweiterungen müssen von Anfang an sauber berücksichtigt werden.',
      'Gerade im Bestand ist die technische Infrastruktur oft ein Punkt, der übersehen wird. Wird das früh geklärt, lässt sich die Anlage sauberer und realistischer auslegen.',
    ],
    list: [
      'Zählerschrank prüfen',
      'Leitungswege früh bewerten',
      'Wechselrichter passend dimensionieren',
      'Reserve für Wärmepumpe, Speicher oder Wallbox mitdenken',
    ],
  },

  buerokratie: {
    title: '6. Anmeldung gehört zur sauberen Planung dazu',
    paragraphs: [
      'Auch bei Einfamilienhäusern endet die Planung nicht mit der Dachbelegung. Netzbetreiber, Inbetriebnahme und Registrierung gehören immer mit dazu.',
      'Wer diese Punkte von Anfang an sauber einordnet, vermeidet spätere Verzögerungen und unnötige Abstimmung.',
    ],
    list: [
      'Netzbetreiberanfrage',
      'technische Abstimmung',
      'Inbetriebnahme',
      'Registrierung im Marktstammdatenregister',
      'Dokumentation und Einweisung',
    ],
  },

  fehler: {
    title: '7. Typische Fehler bei der Größenwahl',
    lead:
      'Die meisten Fehler entstehen nicht bei der Montage, sondern bei der Frage, wie groß die Anlage überhaupt sein soll.',
    errors: [
      'nur den aktuellen Stromverbrauch betrachten',
      'Wärmepumpe oder E-Auto nicht mitdenken',
      'Dachfläche unnötig klein belegen',
      'zu stark auf eine „Standardgröße“ vertrauen',
      'Speicherfrage vor die PV-Größe stellen',
      'Technik und Zählerschrank zu spät prüfen',
    ],
    outro:
      'Eine gute Solaranlage fürs Einfamilienhaus ist nicht die, die auf dem Papier am einfachsten klingt, sondern die, die langfristig sauber zum Haus passt.',
  },

  ablauf: {
    title: '8. So findest du die passende Größe in der Praxis',
    paragraphs: [
      'In der Praxis funktioniert die Größenfindung am besten, wenn erst Dach und Verbrauch sauber bewertet werden und erst danach die kWp-Zahl festgelegt wird.',
      'Genau dort trennt sich gute Handwerksplanung von pauschalen Standardangeboten.',
    ],
    list: [
      'Dachfläche und Verschattung bewerten',
      'Haushaltsstrom realistisch einordnen',
      'spätere Verbraucher mitdenken',
      'PV-Größe sauber ableiten',
      'Speicher sinnvoll prüfen',
      'Technik und Anmeldung mitdenken',
      'Umsetzung realistisch vorbereiten',
    ],
  },

  faq: {
    hauptbegriff: 'Solaranlage für ein Einfamilienhaus',
    planungAntwort:
      'Am besten startest du mit Dachfläche, Verschattung, Haushaltsstrom und späteren Verbrauchern wie Wärmepumpe oder E-Auto. Erst danach sollte die passende kWp-Größe festgelegt werden.',
    dachAntwort:
      'Süddächer sind oft stark, aber nicht automatisch die einzige gute Lösung. Auch Ost-West-Dächer können sehr sinnvoll sein. Entscheidend ist die nutzbare Fläche und die Passung zum Verbrauch.',
    speicherAntwort:
      'Ja, zumindest konzeptionell. Ob ein Speicher sofort sinnvoll ist, hängt davon ab, wie gut PV-Anlage, Verbrauch und spätere Lasten zusammenpassen.',
    fehlerAntwort:
      'Oft werden spätere Verbraucher, die nutzbare Dachfläche oder der Zählerschrank zu spät berücksichtigt. Dadurch wird die Anlage häufig zu klein oder technisch zu kurz gedacht.',
    anmeldungAntwort:
      'Ja. Eine saubere Planung umfasst nicht nur die passende Größe, sondern auch Anmeldung, Inbetriebnahme und Registrierung.',
  },
})

const article = createArticleBase({
  titel: 'Wie groß sollte eine Solaranlage für ein Einfamilienhaus sein?',
  slug: 'wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein',
  kategorie: 'solaranlage',
  teaser:
    'Die passende Größe einer Solaranlage fürs Einfamilienhaus hängt nicht von einer festen Standardzahl ab. Hier findest du eine ehrliche Einordnung zu Dachfläche, Stromverbrauch und späteren Verbrauchern.',
  lesezeit: 11,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    textBlock(
      h('h2', t('1. Warum es keine pauschale Standardgröße gibt')),
      p(
        t(
          'Viele fragen sich, welche Größe für eine Solaranlage auf einem Einfamilienhaus „richtig“ ist. Die ehrliche Antwort lautet: Das hängt vom Haus, vom Dach und vom tatsächlichen Verbrauch ab.'
        )
      ),
      p(
        t(
          'Eine feste Standardlösung klingt einfach, führt in der Praxis aber oft zu unpassenden Ergebnissen. Genau deshalb sollte die Größe immer aus der konkreten Situation heraus geplant werden.'
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
        spalte1: 'kleiner Haushalt ohne große Zusatzverbraucher',
        spalte2: 'eher kompakte bis mittlere Anlage',
        spalte3: 'Grundverbrauch und Dachfläche sauber abgleichen',
      },
      {
        spalte1: 'Familienhaushalt',
        spalte2: 'mittlere bis größere Anlage',
        spalte3: 'tagsüberen Verbrauch und Reserven mitdenken',
      },
      {
        spalte1: 'Haus mit Wärmepumpe',
        spalte2: 'größere Anlage oft sinnvoll',
        spalte3: 'Winterbedarf realistisch einordnen',
      },
      {
        spalte1: 'Haus mit Wärmepumpe und E-Auto',
        spalte2: 'Dachfläche möglichst gut nutzen',
        spalte3: 'Reserve, Speicher und Technik gemeinsam denken',
      },
    ]),

    preset.blocks.dachBlock,

    hinweisBlock(
      'Nicht nur auf die Einstiegskosten schauen',
      p(
        t(
          'Eine zu klein geplante Anlage wirkt am Anfang oft günstiger, kann aber langfristig die schwächere Lösung sein. Gerade bei späteren Verbrauchern rächt sich zu kurzes Denken oft schneller als gedacht.'
        )
      )
    ),

    preset.blocks.groessenBlock,
    preset.blocks.speicherBlock,

    tippBlock(
      'Standardgröße ist kein Plan',
      p(
        t(
          'Wenn eine kWp-Zahl genannt wird, bevor Dach, Verbrauch und Ausbaupläne sauber eingeordnet wurden, ist das meist eher Vereinfachung als echte Planung.'
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

  metaTitle: 'Wie groß sollte eine Solaranlage für ein Einfamilienhaus sein? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Wie groß sollte eine Solaranlage fürs Einfamilienhaus sein? Ehrliche Einordnung zu Dachfläche, Verbrauch, Wärmepumpe, Speicher und typischen Fehlern – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
