import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createVergleichPreset } from './_topicPresets.mjs'
import { hinweisBlock, p, t, tippBlock } from './_helpers.mjs'

const preset = createVergleichPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Notstrom und Ersatzstrom sind nicht dasselbe',
      rest: ' – die Begriffe werden im Markt oft vermischt, obwohl technisch unterschiedliche Dinge gemeint sind.',
    },
    mitSpeicherText: {
      bold: 'Entscheidend ist nicht nur der Begriff',
      rest: ' – sondern welche Funktion im Haus im Ernstfall wirklich gebraucht wird.',
    },
    groessenText: {
      bold: 'Wer Versorgung bei Stromausfall will, sollte nicht nur auf Werbewörter schauen',
      rest: ' – sondern sauber prüfen, was tatsächlich abgesichert werden soll.',
    },
    planungsText: {
      bold: 'Die richtige Lösung ergibt sich aus Bedarf, Technik und Erwartung',
      rest: ' – nicht aus einem Schlagwort auf dem Datenblatt.',
    },
  },

  grundsatz: {
    title: '1. Notstrom oder Ersatzstrom – worum geht es eigentlich?',
    paragraphs: [
      'Die Begriffe Notstrom und Ersatzstrom werden oft durcheinandergeworfen. Im Alltag klingt beides ähnlich, technisch ist aber nicht immer dasselbe gemeint.',
      'Wer sich mit Versorgung bei Stromausfall beschäftigt, sollte deshalb zuerst klären, welche Funktion überhaupt gewünscht ist: Geht es nur um einzelne Verbraucher oder um eine weitergehende Hausversorgung?',
      'Genau dort trennt sich sinnvolle Planung von reiner Schlagwort-Kommunikation.',
    ],
  },

  unterschiede: {
    title: '2. Wo liegt der eigentliche Unterschied?',
    paragraphs: [
      'Vereinfacht gesagt geht es bei Notstrom oft um eine begrenzte Versorgung bestimmter Verbraucher im Ausfallfall. Ersatzstrom wird häufig genutzt, wenn eine weitergehende oder automatischere Versorgung eines definierten Hausbereichs gemeint ist.',
      'Wie das im Detail umgesetzt wird, hängt aber immer von Speicher, Umschaltung, Hausinstallation und technischer Auslegung ab.',
    ],
    list: [
      'Notstrom: oft eher begrenzte Versorgung ausgewählter Verbraucher',
      'Ersatzstrom: oft weitergehende Versorgung definierter Hausbereiche',
      'Notstrom: häufig eher reduzierter Funktionsumfang',
      'Ersatzstrom: meist stärker an Gesamtsystem und Umschaltung gekoppelt',
    ],
  },

  optionA: {
    title: '3. Vorteile einer Notstrom-Lösung',
    paragraphs: [
      'Eine Notstrom-Lösung kann sinnvoll sein, wenn im Stromausfall vor allem einzelne kritische Verbraucher abgesichert werden sollen.',
      'Das kann in vielen Fällen bereits ausreichend sein, wenn nicht das komplette Haus, sondern nur bestimmte Funktionen wichtig sind.',
    ],
    list: [
      'fokussiert auf wesentliche Verbraucher',
      'oft klarer auf Kernbedarf ausgerichtet',
      'kann für viele Haushalte bereits ausreichend sein',
      'sinnvoll bei begrenztem Absicherungswunsch',
    ],
  },

  optionB: {
    title: '4. Vorteile einer Ersatzstrom-Lösung',
    paragraphs: [
      'Eine Ersatzstrom-Lösung kann sinnvoll sein, wenn eine weitergehende Versorgung im Ausfallfall gewünscht ist.',
      'Wichtig ist aber, dass Technik, Speicher, Umschaltung und Hausinstallation dafür sauber vorbereitet und passend ausgelegt werden.',
    ],
    list: [
      'weitergehender Versorgungsansatz',
      'oft stärker ins Gesamtsystem integriert',
      'interessant bei höherem Komfortanspruch',
      'sinnvoll bei klar definiertem Versorgungsbedarf im Ausfallfall',
    ],
  },

  wannA: {
    title: '5. Wann ist Notstrom sinnvoll?',
    paragraphs: [
      'Notstrom ist oft dann sinnvoll, wenn es im Ernstfall vor allem darum geht, wichtige Einzelverbraucher oder Kernfunktionen abgesichert zu haben.',
      'Wer keinen Anspruch an eine weitreichende Hausversorgung hat, kann mit einer gezielten Lösung oft schon sinnvoll aufgestellt sein.',
    ],
    list: [
      'einzelne wichtige Verbraucher absichern',
      'klare Priorisierung statt Vollversorgung',
      'reduzierter, aber sinnvoller Sicherheitsanspruch',
      'pragmatische Ausfallsicherung',
    ],
  },

  wannB: {
    title: '6. Wann ist Ersatzstrom sinnvoll?',
    paragraphs: [
      'Ersatzstrom ist oft dann interessant, wenn im Ausfallfall mehr als nur einzelne Verbraucher weiter versorgt werden sollen.',
      'Dafür muss aber sauber definiert sein, welche Bereiche abgesichert werden sollen und ob Speicher, Umschaltung und Hausinstallation technisch dazu passen.',
    ],
    list: [
      'weitergehende Versorgung gewünscht',
      'höherer Komfortanspruch im Stromausfall',
      'klare technische Planung vorhanden',
      'Speicher- und Hausinstallation passend ausgelegt',
    ],
  },

  fehler: {
    errors: [
      'Notstrom und Ersatzstrom als identisch ansehen',
      'nur auf Marketingbegriffe statt auf echte Funktion schauen',
      'nicht definieren, was im Ausfallfall wirklich versorgt werden soll',
      'Speicherleistung und Hausinstallation nicht mitdenken',
      'zu hohe Erwartungen an die tatsächliche Ausfallsicherung haben',
      'Technik kaufen, bevor der Bedarf sauber geklärt ist',
    ],
    outro:
      'Die richtige Lösung ergibt sich nicht aus dem schöneren Begriff, sondern aus der Frage, was dein Haus im Ernstfall wirklich können soll.',
  },

  fazit: {
    title: '8. Fazit: Notstrom oder Ersatzstrom?',
    paragraphs: [
      'Notstrom und Ersatzstrom klingen ähnlich, sind aber in der Planung nicht einfach dasselbe. Entscheidend ist immer, welche Versorgung im Stromausfall wirklich gebraucht wird.',
      'Wer den Bedarf sauber definiert und die Technik passend auslegt, bekommt eine Lösung, die im Alltag ehrlich einzuordnen ist – statt nur mit Schlagworten zu arbeiten.',
    ],
  },

  cta: {
    titel: 'Lass uns ehrlich klären, was bei dir wirklich sinnvoll ist',
    text:
      'Wir schauen uns Bedarf, Speicher, Hausinstallation und technische Möglichkeiten gemeinsam an – praxisnah, ehrlich und ohne Schlagwortverkauf.',
  },

  faq: {
    frageTitel: 'Notstrom oder Ersatzstrom',
    optionA: 'Notstrom',
    optionB: 'Ersatzstrom',
    grundsatzAntwort:
      'Das hängt davon ab, was im Stromausfall wirklich versorgt werden soll. Die Begriffe werden oft vermischt, technisch geht es aber um unterschiedliche Versorgungsansätze.',
    optionAAntwort:
      'Vor allem dann, wenn einzelne wichtige Verbraucher oder Kernfunktionen abgesichert werden sollen und keine weitergehende Hausversorgung nötig ist.',
    optionBAntwort:
      'Wenn im Ausfallfall weitergehende Bereiche versorgt werden sollen und Speicher, Umschaltung und Hausinstallation sauber dafür ausgelegt sind.',
    fehlerAntwort:
      'Der häufigste Fehler ist, beide Begriffe als identisch zu behandeln und nicht sauber zu definieren, was im Stromausfall tatsächlich weiterlaufen soll.',
    fazitAntwort:
      'Die beste Entscheidung ergibt sich aus deinem echten Bedarf und der technischen Auslegung des Hauses. Nicht der Begriff ist entscheidend, sondern die Funktion im Ernstfall.',
    extra: [
      {
        frage: 'Braucht man für Notstrom oder Ersatzstrom immer einen Speicher?',
        antwort:
          'In der Praxis spielt der Speicher dabei oft eine zentrale Rolle. Entscheidend ist aber immer, wie das gesamte System technisch aufgebaut ist und welche Versorgung im Ausfallfall wirklich geplant ist.',
      },
    ],
  },
})

const article = createArticleBase({
  titel: 'Notstrom oder Ersatzstrom: Was ist der Unterschied?',
  slug: 'notstrom-oder-ersatzstrom',
  kategorie: 'stromspeicher',
  teaser:
    'Notstrom und Ersatzstrom werden oft durcheinandergeworfen. Hier findest du eine ehrliche Einordnung dazu, worin der Unterschied liegt und was im Alltag wirklich relevant ist.',
  lesezeit: 10,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.grundsatzBlock,
    preset.blocks.unterschiedeBlock,

    hinweisBlock(
      'Nicht nur auf Begriffe schauen',
      p(
        t(
          'Im Markt werden Notstrom und Ersatzstrom oft als schnelle Schlagworte genutzt. Für die Praxis ist aber wichtiger, was im Haus im Ausfallfall wirklich weiterlaufen soll.'
        )
      )
    ),

    preset.blocks.optionABlock,
    preset.blocks.optionBBlock,

    tippBlock(
      'Erst Bedarf klären, dann Technik auswählen',
      p(
        t(
          'Wer schon vor der eigentlichen Bedarfsfrage in Produkte oder Datenblätter springt, plant oft am eigentlichen Ziel vorbei. Zuerst muss klar sein, was abgesichert werden soll.'
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

  metaTitle: 'Notstrom oder Ersatzstrom: Was ist der Unterschied? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Notstrom oder Ersatzstrom? Ehrliche Einordnung zu Unterschieden, Bedarf, Speicher und typischen Denkfehlern – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
