import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Eine Wärmepumpe im Altbau ist grundsätzlich möglich',
      rest: ' – entscheidend ist aber nicht das Etikett „Altbau“, sondern der tatsächliche Zustand des Hauses.',
    },
    mitSpeicherText: {
      bold: 'Wichtig sind Heizlast, Vorlauftemperatur, Dämmzustand und vorhandene Heizflächen',
      rest: ' – pauschale Aussagen helfen hier selten weiter.',
    },
    groessenText: {
      bold: 'Nicht jeder Altbau ist automatisch problematisch',
      rest: ' – genauso wenig ist jede Wärmepumpe im Altbau automatisch sinnvoll.',
    },
    planungsText: {
      bold: 'Die richtige Entscheidung entsteht aus sauberer Bestandsaufnahme',
      rest: ' – nicht aus Angst oder aus reinen Werbeversprechen.',
    },
  },

  intro: {
    title: '1. Geht eine Wärmepumpe auch im Altbau?',
    paragraphs: [
      'Ja, eine Wärmepumpe kann auch im Altbau sinnvoll sein. Entscheidend ist aber nicht allein das Baujahr, sondern wie das Gebäude tatsächlich aufgestellt ist.',
      'Wichtig sind unter anderem Heizlast, Dämmzustand, Fenster, vorhandene Heizflächen und die benötigte Vorlauftemperatur. Genau deshalb ist die Frage „Altbau ja oder nein?“ oft zu grob.',
      'Ein Altbau muss also nicht automatisch ungeeignet sein. Gleichzeitig sollte man aber auch nicht so tun, als sei jede Wärmepumpe überall ohne Prüfung die richtige Lösung.',
    ],
  },

  faq: [
    {
      frage: 'Kann eine Wärmepumpe im Altbau funktionieren?',
      antwort:
        'Ja, das kann sie. Entscheidend ist aber nicht nur das Baujahr, sondern der energetische Zustand des Hauses, die Heizlast, die Heizflächen und die benötigte Vorlauftemperatur.',
    },
    {
      frage: 'Was ist bei einer Wärmepumpe im Altbau besonders wichtig?',
      antwort:
        'Vor allem Heizlast, Dämmung, Fenster, Heizflächen und die Frage, welche Temperaturen im Heizsystem wirklich gebraucht werden. Erst daraus lässt sich sauber bewerten, ob eine Wärmepumpe sinnvoll passt.',
    },
    {
      frage: 'Ist ein Altbau automatisch ungeeignet für eine Wärmepumpe?',
      antwort:
        'Nein. Viele Altbauten werden zu pauschal bewertet. Entscheidend ist immer die konkrete Gebäudesituation und nicht nur das Baujahr.',
    },
    {
      frage: 'Muss ein Altbau komplett saniert sein, damit eine Wärmepumpe funktioniert?',
      antwort:
        'Nicht automatisch. Eine vollständige Sanierung ist nicht in jedem Fall Voraussetzung. Wichtig ist aber eine ehrliche Bestandsaufnahme und saubere technische Einordnung.',
    },
    {
      frage: 'Was ist der häufigste Denkfehler bei Wärmepumpen im Altbau?',
      antwort:
        'Entweder pauschal zu sagen „geht nie“ oder pauschal zu sagen „geht immer“. Beides ist zu kurz. Die richtige Antwort entsteht aus der konkreten Gebäudesituation.',
    },
  ],

  outro: {
    title: '2. Fazit',
    paragraphs: [
      'Eine Wärmepumpe im Altbau kann sehr sinnvoll sein – aber nur, wenn das Gebäude und die Technik sauber bewertet werden.',
      'Entscheidend ist nicht das Schlagwort Altbau, sondern ob Heizlast, Heizflächen und Gebäudestandard zur geplanten Lösung passen.',
    ],
  },

  cta: {
    titel: 'Lass uns deinen Altbau ehrlich einordnen',
    text:
      'Wir schauen uns Gebäudesituation, Heizsystem und technische Möglichkeiten gemeinsam an – praxisnah, ehrlich und ohne pauschale Standardantwort.',
  },
})

const article = createArticleBase({
  titel: 'Wärmepumpe im Altbau: Geht das überhaupt?',
  slug: 'waermepumpe-im-altbau',
  kategorie: 'waermepumpe',
  teaser:
    'Geht eine Wärmepumpe auch im Altbau? Ja – aber nicht pauschal. Hier findest du eine ehrliche Einordnung zu Gebäudezustand, Heizlast und typischen Denkfehlern.',
  lesezeit: 7,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,
    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Wärmepumpe im Altbau: Geht das überhaupt? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Wärmepumpe im Altbau: Ehrliche Einordnung zu Heizlast, Dämmung, Heizflächen und typischen Denkfehlern – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
