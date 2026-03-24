import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Die meisten Fehler bei Solaranlagen entstehen nicht bei der Montage, sondern vorher',
      rest: ' – nämlich bei Planung, Auslegung und falschen Annahmen.',
    },
    mitSpeicherText: {
      bold: 'Zu kleine Anlagen, falsch bewertete Dächer und unklare Speicherentscheidungen sind typische Probleme',
      rest: ' – oft nicht aus Bosheit, sondern aus zu kurzer Betrachtung.',
    },
    groessenText: {
      bold: 'Wer nur auf den Einstiegspreis schaut, vergleicht oft am falschen Ende',
      rest: ' – weil Dach, Zählerschrank, Leitungswege und spätere Verbraucher mitentscheiden.',
    },
    planungsText: {
      bold: 'Eine gute Solaranlage ist nicht die billigste auf dem Papier',
      rest: ' – sondern die, die technisch sauber geplant ist und langfristig zum Haus passt.',
    },
  },

  intro: {
    title: '1. Welche Fehler passieren bei Solaranlagen am häufigsten?',
    paragraphs: [
      'Die größten Fehler bei Solaranlagen passieren oft nicht auf dem Dach, sondern schon davor – in der Planung, bei zu groben Annahmen oder bei unvollständigen Vergleichen.',
      'Viele Entscheidungen werden nur über kWp und Preis getroffen. Das greift zu kurz. Entscheidend ist, ob Dach, Verbrauch, spätere Verbraucher und technische Ausgangslage sauber zusammen betrachtet wurden.',
      'Genau deshalb lohnt es sich, nicht nur nach dem günstigsten Angebot zu suchen, sondern nach der Lösung, die zum Haus und zum Alltag wirklich passt.',
    ],
  },

  faq: [
    {
      frage: 'Was ist der häufigste Fehler bei Solaranlagen?',
      antwort:
        'Sehr häufig wird die Anlage zu stark über den Einstiegspreis oder über eine pauschale kWp-Zahl bewertet. Wichtiger ist, ob Dach, Verbrauch, technische Infrastruktur und spätere Verbraucher sauber zusammenpassen.',
    },
    {
      frage: 'Warum werden Solaranlagen oft zu klein geplant?',
      antwort:
        'Weil häufig nur der aktuelle Haushaltsstrom betrachtet wird. Wenn später Wärmepumpe, Wallbox oder höherer Eigenverbrauch dazukommen, wirkt eine zu knapp geplante Anlage schnell unpassend.',
    },
    {
      frage: 'Spielt der Zählerschrank bei Fehlern wirklich eine große Rolle?',
      antwort:
        'Ja. Der Zählerschrank wird oft zu spät betrachtet. Dabei kann genau dort zusätzlicher Aufwand entstehen, der technisch und preislich wichtig ist.',
    },
    {
      frage: 'Ist ein Speicher automatisch sinnvoll?',
      antwort:
        'Nein. Ein Speicher kann sinnvoll sein, ist aber kein Pflichtbaustein. Entscheidend ist, ob er zu Anlage, Verbrauch und Alltag passt.',
    },
    {
      frage: 'Was ist der größte Denkfehler bei Angebotsvergleichen?',
      antwort:
        'Dass scheinbar gleiche Anlagen automatisch vergleichbar sind. In der Praxis unterscheiden sich oft Komponenten, Dachaufwand, Leitungswege, Speichergröße und enthaltene Leistungen deutlich.',
    },
  ],

  outro: {
    title: '2. Fazit',
    paragraphs: [
      'Die typischen Fehler bei Solaranlagen sind meistens keine Montagefehler, sondern Planungsfehler.',
      'Wer Dach, Verbrauch, spätere Erweiterungen und Technik sauber zusammen denkt, vermeidet genau die Probleme, die später teuer oder ärgerlich werden.',
    ],
  },

  cta: {
    titel: 'Lass uns dein Projekt ehrlich und sauber einordnen',
    text:
      'Wir schauen uns Dach, Verbrauch, Speicherfrage und technische Ausgangslage gemeinsam an – praxisnah, ehrlich und ohne Standardverkauf.',
  },
})

const article = createArticleBase({
  titel: 'Typische Fehler bei Solaranlagen: Worauf sollte man achten?',
  slug: 'typische-fehler-bei-solaranlagen',
  kategorie: 'solaranlage',
  teaser:
    'Die häufigsten Fehler bei Solaranlagen passieren oft schon in der Planung. Hier findest du eine ehrliche Einordnung zu Auslegung, Speicher, Dach und Angebotsvergleich.',
  lesezeit: 7,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,
    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Typische Fehler bei Solaranlagen: Worauf sollte man achten? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Typische Fehler bei Solaranlagen: ehrliche Einordnung zu Planung, Speicher, Zählerschrank, Auslegung und Angebotsvergleich – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
