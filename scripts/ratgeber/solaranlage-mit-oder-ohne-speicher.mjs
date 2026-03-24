import { upsertRatgeberArticle } from './_articleFactory.mjs'
import {
  h,
  hinweisBlock,
  p,
  t,
  textBlock,
  tippBlock,
} from './_helpers.mjs'
import { createArticleBase } from './_templates.mjs'
import { createVergleichPreset } from './_topicPresets.mjs'

const preset = createVergleichPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Eine Solaranlage ohne Speicher ist nicht automatisch die schlechtere Lösung',
      rest: ' – in vielen Fällen kann sie wirtschaftlich und technisch absolut sinnvoll sein.',
    },
    mitSpeicherText: {
      bold: 'Ein Speicher kann den Eigenverbrauch deutlich erhöhen',
      rest: ' – sinnvoll ist er aber nur dann, wenn Anlage, Verbrauch und Alltag wirklich zusammenpassen.',
    },
    groessenText: {
      bold: 'Die richtige Entscheidung hängt nicht an einer Ideologie',
      rest: ' – sondern an Verbrauchsprofil, Abendlast, Dachfläche und späteren Verbrauchern wie Wärmepumpe oder E-Auto.',
    },
    planungsText: {
      bold: 'Die beste Lösung ist die sauber geplante Lösung',
      rest: ' – nicht automatisch die kleinste und auch nicht automatisch die technisch größte.',
    },
  },

  grundsatz: {
    title: '1. Solaranlage mit oder ohne Speicher – worum geht es wirklich?',
    paragraphs: [
      'Die Frage klingt einfach: Sollte man eine Solaranlage direkt mit Speicher bauen oder erstmal ohne? In der Praxis ist die Antwort aber nicht pauschal.',
      'Ein Speicher kann die Eigenversorgung verbessern, kostet aber zusätzlich Geld. Eine Anlage ohne Speicher ist oft einfacher und günstiger, nutzt aber den tagsüber erzeugten Strom nicht so stark in den Abendstunden.',
      'Entscheidend ist deshalb nicht, welche Lösung sich besser anhört, sondern welche zu deinem Haus, deinem Verbrauch und deinen Zielen passt.',
    ],
  },

  unterschiede: {
    title: '2. Wo liegt der eigentliche Unterschied?',
    paragraphs: [
      'Ohne Speicher wird Solarstrom in erster Linie direkt dann genutzt, wenn er erzeugt wird. Alles, was im Moment nicht verbraucht wird, geht ins Netz.',
      'Mit Speicher kann ein Teil des mittags erzeugten Stroms in die Abend- und Nachtstunden verschoben werden. Dadurch steigt oft der Eigenverbrauch, aber eben auch die Investition.',
    ],
    list: [
      'ohne Speicher: geringere Investition, einfachere Struktur',
      'mit Speicher: höherer Eigenverbrauch möglich',
      'ohne Speicher: mehr Netzeinspeisung am Tag',
      'mit Speicher: mehr eigener Solarstrom am Abend nutzbar',
    ],
  },

  optionA: {
    title: '3. Vorteile einer Solaranlage mit Speicher',
    paragraphs: [
      'Ein Speicher kann besonders dann stark sein, wenn tagsüber wenig Strom direkt verbraucht wird, aber abends ein relevanter Bedarf besteht.',
      'Gerade bei Haushalten mit Wärmepumpe, späterer Wallbox oder allgemein höherer Abendlast kann ein sauber dimensionierter Speicher sinnvoll sein.',
    ],
    list: [
      'höherer Eigenverbrauch',
      'mehr Nutzung des eigenen Solarstroms in den Abendstunden',
      'weniger Netzbezug in typischen Verbrauchszeiten',
      'strategisch interessant bei geplanten Zusatzverbrauchern',
    ],
  },

  optionB: {
    title: '4. Vorteile einer Solaranlage ohne Speicher',
    paragraphs: [
      'Eine PV-Anlage ohne Speicher ist oft günstiger in der Anschaffung und technisch schlanker. Das kann besonders dann sinnvoll sein, wenn viel Strom ohnehin tagsüber direkt genutzt wird.',
      'Auch wer erstmal sauber ins Thema einsteigen will und später flexibel bleiben möchte, kann ohne Speicher gut starten – solange die Anlage und Technik vorausschauend geplant werden.',
    ],
    list: [
      'geringere Anfangsinvestition',
      'einfachere technische Struktur',
      'wirtschaftlich oft attraktiv bei gutem Tagesverbrauch',
      'spätere Speicherentscheidung bleibt offen',
    ],
  },

  wannA: {
    title: '5. Wann ist eine Solaranlage mit Speicher sinnvoll?',
    paragraphs: [
      'Ein Speicher ist oft dann sinnvoll, wenn der Eigenverbrauch ohne Speicher relativ niedrig wäre und ein relevanter Teil des Strombedarfs in die Abend- und Nachtstunden fällt.',
      'Auch wenn Wärmepumpe, Wallbox oder andere zusätzliche Verbraucher geplant sind, kann es klug sein, den Speicher zumindest direkt mitzudenken.',
    ],
    list: [
      'viel Stromverbrauch am Abend',
      'Haushalt mit Wärmepumpe',
      'Wallbox oder E-Auto geplant',
      'Wunsch nach höherem Eigenverbrauch',
      'saubere technische Gesamtauslegung vorhanden',
    ],
  },

  wannB: {
    title: '6. Wann ist eine Solaranlage ohne Speicher sinnvoll?',
    paragraphs: [
      'Ohne Speicher kann eine PV-Anlage besonders dann sinnvoll sein, wenn tagsüber schon relativ viel Strom direkt genutzt wird oder wenn die Investition bewusst schlanker gehalten werden soll.',
      'Auch bei begrenztem Budget kann eine gute PV-Anlage ohne Speicher deutlich sinnvoller sein als gar keine Anlage oder eine halbherzige Gesamtlösung.',
    ],
    list: [
      'hoher Tagesverbrauch',
      'bewusst geringere Startinvestition',
      'Speicher später eventuell nachrüsten',
      'Fokus zunächst auf saubere PV-Grundlage',
    ],
  },

  fehler: {
    errors: [
      'Speicher automatisch als Pflicht ansehen',
      'ohne Speicher pauschal als schlechte Lösung abwerten',
      'Verbrauchsprofil im Alltag nicht prüfen',
      'Wärmepumpe oder Wallbox in der Planung vergessen',
      'nur auf Autarkie-Werbung statt auf echte Nutzung schauen',
      'technische Erweiterbarkeit nicht mitdenken',
    ],
    outro:
      'Die richtige Entscheidung ist nicht „mit Speicher“ oder „ohne Speicher“ als Glaubenssatz, sondern die Lösung, die zu deinem Haus und deinem Alltag passt.',
  },

  fazit: {
    title: '8. Fazit: Mit oder ohne Speicher?',
    paragraphs: [
      'Ein Speicher kann sehr sinnvoll sein – aber eben nicht immer und nicht automatisch in jeder Größe. Genauso ist eine Solaranlage ohne Speicher nicht die schlechtere Lösung, sondern oft ein sehr vernünftiger Einstieg oder sogar die dauerhaft passende Variante.',
      'Am Ende zählt nicht, was auf dem Papier am modernsten wirkt, sondern was bei dir technisch sauber funktioniert und wirtschaftlich nachvollziehbar bleibt.',
    ],
  },

  cta: {
    titel: 'Lass uns ehrlich prüfen, was zu dir passt',
    text:
      'Wir schauen uns Verbrauch, Dach, Speicheroption, Zählerschrank und spätere Erweiterungen gemeinsam an – ohne Verkaufsdruck und ohne pauschale Standardantwort.',
  },

  faq: {
    frageTitel: 'Solaranlage mit oder ohne Speicher',
    optionA: 'eine Solaranlage mit Speicher',
    optionB: 'eine Solaranlage ohne Speicher',
    grundsatzAntwort:
      'Das hängt von Verbrauch, Dach, Abendlast, Budget und geplanten Zusatzverbrauchern ab. Ein Speicher kann sehr sinnvoll sein, ist aber nicht automatisch Pflicht.',
    optionAAntwort:
      'Vor allem dann, wenn viel Strom am Abend gebraucht wird, eine Wärmepumpe oder Wallbox geplant ist und der Eigenverbrauch ohne Speicher sonst relativ niedrig wäre.',
    optionBAntwort:
      'Wenn tagsüber schon viel Strom direkt genutzt wird, die Investition schlanker bleiben soll oder man die PV zunächst sauber als Grundsystem aufbauen möchte.',
    fehlerAntwort:
      'Der größte Fehler ist, pauschal zu entscheiden: also Speicher immer als Muss oder ohne Speicher immer als minderwertig anzusehen. Entscheidend ist der konkrete Alltag im Haus.',
    fazitAntwort:
      'Die beste Entscheidung ist die, die zu deinem Haus, deinem Verbrauch und deinen Ausbauplänen passt. Nicht jede gute Anlage braucht sofort einen Speicher – aber manchmal ist er genau der richtige Schritt.',
    extra: [
      {
        frage: 'Kann man einen Speicher später nachrüsten?',
        antwort:
          'Ja, das ist grundsätzlich möglich. Wichtig ist aber, die Anlage und Technik von Anfang an so zu planen, dass eine spätere Ergänzung sauber möglich bleibt.',
      },
    ],
  },
})

const article = createArticleBase({
  titel: 'Solaranlage mit oder ohne Speicher: Was ist sinnvoller?',
  slug: 'solaranlage-mit-oder-ohne-speicher',
  teaser:
    'Sollte man eine Solaranlage direkt mit Speicher bauen oder erstmal ohne starten? Die richtige Antwort hängt von Verbrauch, Dach, Budget und späteren Erweiterungen ab. Hier findest du eine ehrliche Einordnung ohne Verkaufslogik.',
  lesezeit: 11,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.grundsatzBlock,
    preset.blocks.unterschiedeBlock,

    hinweisBlock(
      'Es gibt keine pauschale Pflichtlösung',
      p(
        t(
          'Weder ist ein Speicher immer zwingend sinnvoll, noch ist eine PV-Anlage ohne Speicher automatisch „zu klein gedacht“. Entscheidend ist die Passung zum echten Alltag im Haus.'
        )
      )
    ),

    preset.blocks.optionABlock,
    preset.blocks.optionBBlock,

    tippBlock(
      'Nicht von Autarkie-Zahlen blenden lassen',
      p(
        t(
          'Hohe Autarkiewerte sehen gut aus, sagen aber allein noch nichts darüber aus, ob die Anlage wirtschaftlich, technisch und im Alltag sinnvoll ausgelegt ist.'
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

  metaTitle: 'Solaranlage mit oder ohne Speicher: Was ist sinnvoller? | PEAK.Energy',
  metaDescription:
    'Solaranlage mit oder ohne Speicher? Ehrlicher Vergleich zu Eigenverbrauch, Kosten, Alltag und typischen Denkfehlern – verständlich erklärt von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
