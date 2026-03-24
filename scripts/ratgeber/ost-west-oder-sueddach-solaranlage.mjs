import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createVergleichPreset } from './_topicPresets.mjs'
import { hinweisBlock, p, t, tippBlock } from './_helpers.mjs'

const preset = createVergleichPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Ein Süddach ist nicht automatisch immer die beste Lösung',
      rest: ' – auch Ost-West-Dächer können für viele Häuser sehr sinnvoll sein.',
    },
    mitSpeicherText: {
      bold: 'Der Unterschied liegt nicht nur im maximalen Jahresertrag',
      rest: ' – sondern auch darin, wann der Strom über den Tag verteilt erzeugt wird.',
    },
    groessenText: {
      bold: 'Entscheidend ist nicht nur die Dachausrichtung',
      rest: ' – sondern wie gut die Erzeugung zum tatsächlichen Verbrauch im Haus passt.',
    },
    planungsText: {
      bold: 'Die beste Lösung ist die, die zum Alltag passt',
      rest: ' – nicht die, die in einer pauschalen Faustregel am besten klingt.',
    },
  },

  grundsatz: {
    title: '1. Ost-West oder Süddach – worum geht es bei diesem Vergleich?',
    paragraphs: [
      'Viele denken bei Photovoltaik zuerst an das klassische Süddach. Das ist nachvollziehbar, weil Südausrichtung oft mit hohen Spitzenerträgen verbunden wird.',
      'In der Praxis kann aber auch ein Ost-West-Dach sehr sinnvoll sein. Denn nicht nur die Gesamtmenge an Strom ist wichtig, sondern auch, wann dieser Strom über den Tag verteilt erzeugt wird.',
      'Genau deshalb sollte die Dachausrichtung nicht pauschal bewertet werden, sondern immer im Zusammenhang mit Verbrauch, Alltag und geplanter Nutzung.',
    ],
  },

  unterschiede: {
    title: '2. Wo liegt der eigentliche Unterschied?',
    paragraphs: [
      'Ein Süddach liefert oft hohe Ertragsspitzen rund um die Mittagszeit. Ein Ost-West-Dach verteilt die Stromerzeugung dagegen in vielen Fällen breiter über den Tag.',
      'Das kann für Haushalte interessant sein, die morgens und abends mehr Strom direkt nutzen wollen oder bei denen Lasten wie Wärmepumpe und Alltag besser über den Tag verteilt sind.',
    ],
    list: [
      'Süddach: oft hohe Spitzenerträge zur Mittagszeit',
      'Ost-West: breitere Verteilung der Erzeugung über den Tag',
      'Süddach: stark bei klassischer Ertragsmaximierung',
      'Ost-West: oft interessant für alltagsnahe Direktnutzung',
    ],
  },

  optionA: {
    title: '3. Vorteile eines Süddachs',
    paragraphs: [
      'Ein Süddach ist oft stark, wenn eine hohe Erzeugung rund um die Mittagszeit gewünscht ist und die Dachfläche möglichst ertragsstark genutzt werden soll.',
      'Gerade wenn das Dach unverschattet ist und technisch gut belegt werden kann, kann eine Südausrichtung sehr gute Ergebnisse liefern.',
    ],
    list: [
      'oft hohe Spitzenerträge',
      'klassisch starke Ertragslage',
      'bei guter Fläche sehr leistungsstark',
      'oft intuitiv leicht einzuordnen',
    ],
  },

  optionB: {
    title: '4. Vorteile eines Ost-West-Dachs',
    paragraphs: [
      'Ein Ost-West-Dach kann besonders dann sinnvoll sein, wenn Strom nicht nur um die Mittagszeit, sondern auch morgens und abends relevant ist.',
      'Durch die breitere Tagesverteilung passt die Erzeugung in vielen Fällen besser zum Alltag im Haus – selbst wenn die maximale Mittagsspitze geringer ausfällt.',
    ],
    list: [
      'breitere Tagesverteilung der Erzeugung',
      'oft alltagsnaher Direktverbrauch',
      'interessant bei typischem Familienalltag',
      'kann mit Wärmepumpe oder späteren Lasten sehr sinnvoll sein',
    ],
  },

  wannA: {
    title: '5. Wann ist ein Süddach besonders sinnvoll?',
    paragraphs: [
      'Eine Südausrichtung ist oft besonders dann stark, wenn eine sehr ertragsstarke Fläche vorhanden ist und die Anlage auf hohe Leistung und klassischen Ertrag ausgerichtet werden soll.',
      'Auch bei klaren, gut nutzbaren Dachflächen ohne starke Verschattung kann das sehr sinnvoll sein.',
    ],
    list: [
      'gute, unverschattete Südausrichtung',
      'Fokus auf hohe Ertragsspitzen',
      'klassisch starke Dachfläche',
      'technisch gut nutzbare Belegung',
    ],
  },

  wannB: {
    title: '6. Wann ist ein Ost-West-Dach besonders sinnvoll?',
    paragraphs: [
      'Ein Ost-West-Dach ist oft dann stark, wenn Strom über den Tag verteilt besser zum Verbrauch passen soll.',
      'Das gilt besonders bei typischem Familienalltag, bei höherem Direktverbrauch oder wenn nicht nur die Mittagsstunden im Fokus stehen sollen.',
    ],
    list: [
      'morgens und abends relevanter Strombedarf',
      'typischer Familienalltag',
      'Direktverbrauch soll gut über den Tag verteilt sein',
      'Wärmepumpe oder spätere Lasten mitdenken',
    ],
  },

  fehler: {
    errors: [
      'Süddach automatisch als immer beste Lösung sehen',
      'Ost-West pauschal als zweite Wahl abwerten',
      'nur auf Spitzenwerte statt auf Alltagsnutzung schauen',
      'Verschattung und Dachfläche nicht sauber bewerten',
      'Verbrauchsprofil im Haus ignorieren',
      'Dachausrichtung isoliert statt im Gesamtsystem betrachten',
    ],
    outro:
      'Die richtige Dachausrichtung ergibt sich nicht aus einer pauschalen Regel, sondern aus Dach, Verbrauch und technischer Zielsetzung des Hauses.',
  },

  fazit: {
    title: '8. Fazit: Ost-West oder Süddach?',
    paragraphs: [
      'Ein Süddach kann sehr stark sein, ist aber nicht automatisch immer die beste Lösung. Auch Ost-West-Dächer können in der Praxis sehr sinnvoll sein – gerade wenn die Erzeugung besser zum Alltag im Haus passen soll.',
      'Entscheidend ist nicht nur die theoretische Ertragsmaximierung, sondern eine saubere Planung, die Dachfläche, Verbrauch und spätere Erweiterungen sinnvoll zusammenbringt.',
    ],
  },

  cta: {
    titel: 'Lass uns prüfen, was auf deinem Dach wirklich sinnvoll ist',
    text:
      'Wir schauen uns Ausrichtung, Dachfläche, Verschattung und deinen Verbrauch gemeinsam an – ehrlich, praxisnah und ohne Pauschalantwort.',
  },

  faq: {
    frageTitel: 'Ost-West oder Süddach bei Solaranlagen',
    optionA: 'ein Süddach',
    optionB: 'ein Ost-West-Dach',
    grundsatzAntwort:
      'Beides kann sinnvoll sein. Entscheidend ist nicht nur der theoretische Ertrag, sondern wie gut die Stromerzeugung zum Dach, zum Verbrauch und zum Alltag im Haus passt.',
    optionAAntwort:
      'Vor allem dann, wenn eine gute, unverschattete Südausrichtung vorhanden ist und eine klassische ertragsstarke Dachfläche genutzt werden kann.',
    optionBAntwort:
      'Besonders dann, wenn Strom morgens und abends relevant ist und die Erzeugung besser über den Tag verteilt zum Alltag passen soll.',
    fehlerAntwort:
      'Der häufigste Fehler ist, Süddach pauschal als immer beste Lösung zu sehen und Ost-West nur nachrangig zu bewerten. In der Praxis kann Ost-West sehr sinnvoll sein.',
    fazitAntwort:
      'Die beste Entscheidung ergibt sich aus Dachfläche, Ausrichtung, Verschattung und Verbrauch. Nicht jede gute PV-Anlage braucht zwingend ein Süddach.',
    extra: [
      {
        frage: 'Ist Ost-West bei Solaranlagen schlechter als Süd?',
        antwort:
          'Nicht pauschal. Ein Süddach hat oft hohe Spitzenerträge, aber ein Ost-West-Dach kann den Strom über den Tag verteilt oft alltagsnäher liefern. Entscheidend ist die Passung zum Haus.',
      },
    ],
  },
})

const article = createArticleBase({
  titel: 'Ost-West oder Süddach: Was ist für Solaranlagen sinnvoller?',
  slug: 'ost-west-oder-sueddach-solaranlage',
  kategorie: 'solaranlage',
  teaser:
    'Ist ein Süddach immer besser oder kann auch Ost-West sinnvoller sein? Hier findest du eine ehrliche Einordnung zu Ertrag, Alltag und typischen Denkfehlern.',
  lesezeit: 10,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.grundsatzBlock,
    preset.blocks.unterschiedeBlock,

    hinweisBlock(
      'Nicht nur auf die Mittagsstunden schauen',
      p(
        t(
          'Eine hohe Mittagsspitze klingt gut, passt aber nicht automatisch am besten zum Alltag im Haus. Gerade dort lohnt sich die ehrliche Betrachtung der Tagesverteilung.'
        )
      )
    ),

    preset.blocks.optionABlock,
    preset.blocks.optionBBlock,

    tippBlock(
      'Dachausrichtung nie isoliert bewerten',
      p(
        t(
          'Nicht nur die Himmelsrichtung entscheidet, sondern auch Verschattung, nutzbare Fläche, Verbrauch und spätere Erweiterungen wie Wärmepumpe oder Wallbox.'
        )
      )
    ),

    preset.blocks.wannABlock,
    preset.blocks.wannBBlock,
    preset.blocks.fehlerBlock,
    preset.blocks.fazitBlock,
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Ost-West oder Süddach: Was ist für Solaranlagen sinnvoller? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Ost-West oder Süddach bei Solaranlagen? Ehrlicher Vergleich zu Ertrag, Alltag, Verbrauch und typischen Denkfehlern – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
