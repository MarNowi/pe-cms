import { upsertRatgeberArticle } from './_articleFactory.mjs'
import {
  h,
  hinweisBlock,
  p,
  t,
  textBlock,
  tippBlock,
  tabelleBlock,
  ul,
} from './_helpers.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Eine Solaranlage ohne Speicher ist beim Einfamilienhaus oft die schlankere Einstiegslösung',
      rest: ' – die Investition liegt in der Regel deutlich unter einer vergleichbaren Anlage mit Speicher.',
    },
    mitSpeicherText: {
      bold: 'Der Preis hängt nicht nur von der kWp-Zahl ab',
      rest: ' – auch Dach, Zählerschrank, Leitungswege und technische Ausgangslage spielen eine wichtige Rolle.',
    },
    groessenText: {
      bold: 'Gerade ohne Speicher ist die passende Anlagengröße besonders wichtig',
      rest: ' – denn sie entscheidet mit darüber, wie gut Direktverbrauch und Dachfläche zusammenpassen.',
    },
    planungsText: {
      bold: 'Wichtig ist nicht der billigste Preis auf dem Papier',
      rest: ' – sondern eine Anlage, die technisch sauber geplant ist und langfristig zum Haus passt.',
    },
  },

  intro: {
    title: '1. Was kostet eine Solaranlage ohne Speicher fürs Einfamilienhaus?',
    paragraphs: [
      'Eine Solaranlage ohne Speicher ist bei vielen Einfamilienhäusern die schlankere und günstigere Einstiegslösung. Wie hoch die Investition genau ausfällt, hängt aber nicht nur von der Leistung in kWp ab, sondern auch von Dach, Technik und Aufwand vor Ort.',
      'Im Vergleich zu einer Anlage mit Speicher fällt der Gesamtpreis meist spürbar niedriger aus. Trotzdem sollte auch ohne Speicher nicht nur der Endpreis betrachtet werden, sondern die gesamte technische Auslegung.',
      'Entscheidend ist am Ende nicht, wie günstig die Anlage im Vergleich klingt, sondern ob sie sauber zum Dach, zum Verbrauch und zu späteren Ausbauplänen passt.',
    ],
  },

  faq: [
    {
      frage: 'Ist eine Solaranlage ohne Speicher deutlich günstiger?',
      antwort:
        'Ja, in der Regel schon. Weil der Speicher als eigener größerer Kostenblock wegfällt, liegt die Investition meist spürbar niedriger als bei einer vergleichbaren PV-Anlage mit Speicher.',
    },
    {
      frage: 'Wovon hängt der Preis einer Solaranlage ohne Speicher besonders ab?',
      antwort:
        'Vor allem von Dachfläche, Anlagengröße, Modul- und Wechselrichterwahl, Montageaufwand, Leitungswegen, Zählerschrank und der allgemeinen technischen Ausgangslage.',
    },
    {
      frage: 'Ist eine Solaranlage ohne Speicher für ein Einfamilienhaus sinnvoll?',
      antwort:
        'Ja, oft sogar sehr. Gerade wenn tagsüber bereits Strom direkt verbraucht wird oder die Investition bewusst schlanker bleiben soll, kann eine PV-Anlage ohne Speicher eine sehr gute Lösung sein.',
    },
    {
      frage: 'Kann man später noch einen Speicher ergänzen?',
      antwort:
        'Ja, das ist grundsätzlich möglich. Wichtig ist aber, die Anlage und Technik von Anfang an so zu planen, dass eine spätere Nachrüstung sauber machbar bleibt.',
    },
    {
      frage: 'Was ist der häufigste Fehler bei Kostenvergleichen ohne Speicher?',
      antwort:
        'Oft wird nur der Gesamtpreis verglichen, ohne zu prüfen, ob Dach, Zählerschrank, Montageaufwand und enthaltene Leistungen wirklich identisch bewertet wurden.',
    },
  ],

  outro: {
    title: '2. Fazit',
    paragraphs: [
      'Eine Solaranlage ohne Speicher ist für viele Einfamilienhäuser eine sehr sinnvolle und oft wirtschaftlich starke Lösung.',
      'Wichtig ist nicht nur der günstigere Einstiegspreis, sondern eine saubere Planung, die auch spätere Erweiterungen und die technische Realität des Hauses berücksichtigt.',
    ],
  },

  cta: {
    titel: 'Lass uns dein Haus ehrlich ohne Speicher einordnen',
    text:
      'Wir schauen uns Dach, Verbrauch, Anlagengröße und technische Ausgangslage gemeinsam an – praxisnah und ohne Standardverkauf.',
  },
})

const article = createArticleBase({
  titel: 'Was kostet eine Solaranlage ohne Speicher für ein Einfamilienhaus?',
  slug: 'was-kostet-eine-solaranlage-ohne-speicher-fuer-einfamilienhaus',
  kategorie: 'solaranlage',
  teaser:
    'Wie viel kostet eine Solaranlage ohne Speicher beim Einfamilienhaus? Hier findest du eine ehrliche Einordnung zu Preis, Dach, Technik und typischen Vergleichsfehlern.',
  lesezeit: 9,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,

    textBlock(
      h('h2', t('3. Welche Preisbereiche sind grob realistisch?')),
      p(
        t(
          'Die genauen Kosten hängen immer vom konkreten Projekt ab. Für viele Einfamilienhäuser bewegen sich PV-Anlagen ohne Speicher aber grob im unteren bis mittleren fünfstelligen Bereich.'
        )
      ),
      p(
        t(
          'Wie viel davon realistisch ist, hängt unter anderem von der nutzbaren Dachfläche, der gewünschten Anlagengröße und dem Aufwand bei Montage und Elektrointegration ab.'
        )
      )
    ),

    tabelleBlock('Grobe Orientierung für Einfamilienhäuser ohne Speicher', [
      {
        spalte1: 'Typischer Fall',
        spalte2: 'Sinnvolle Richtung',
        spalte3: 'Worauf besonders achten?',
      },
      {
        spalte1: 'kleinere bis mittlere Anlage',
        spalte2: 'unterer fünfstelliger Bereich',
        spalte3: 'Dachfläche und Grundverbrauch sauber abgleichen',
      },
      {
        spalte1: 'typisches Einfamilienhaus',
        spalte2: 'mittlerer fünfstelliger Bereich',
        spalte3: 'Leistung, Dach und Technik gemeinsam bewerten',
      },
      {
        spalte1: 'größere Anlage mit mehr Aufwand',
        spalte2: 'oberer mittlerer fünfstelliger Bereich',
        spalte3: 'Zählerschrank, Leitungswege und Dachnutzung prüfen',
      },
    ]),

    textBlock(
      h('h2', t('4. Welche Kosten stecken in der Anlage?')),
      p(
        t(
          'Auch ohne Speicher besteht der Preis nicht nur aus den Modulen. Gerade bei Einfamilienhäusern machen Montage, elektrische Einbindung und Planung einen großen Unterschied.'
        )
      ),
      ul(
        'Solarmodule',
        'Wechselrichter',
        'Unterkonstruktion',
        'DC- und AC-Verkabelung',
        'Montage auf dem Dach',
        'elektrischer Anschluss',
        'Planung, Anmeldung und Dokumentation',
        'optional: Anpassungen am Zählerschrank'
      ),
      p(
        t(
          'Deshalb ist ein scheinbar günstiger Preis nur dann aussagekräftig, wenn auch die enthaltenen Leistungen sauber vergleichbar sind.'
        )
      )
    ),

    hinweisBlock(
      'Ohne Speicher heißt nicht ohne Planung',
      p(
        t(
          'Auch eine PV-Anlage ohne Speicher sollte nicht nur über den Einstiegspreis verkauft werden. Entscheidend ist, ob sie sauber zum Dach, zum Verbrauch und zu späteren Ausbauplänen passt.'
        )
      )
    ),

    textBlock(
      h('h2', t('5. Was beeinflusst den Preis besonders stark?')),
      p(
        t(
          'Selbst bei ähnlicher Leistung können zwei Projekte preislich spürbar auseinanderliegen. Das ist oft nicht willkürlich, sondern technisch begründet.'
        )
      ),
      ul(
        'Dachform und Dachhöhe',
        'Ausrichtung und nutzbare Fläche',
        'Verschattung durch Gauben, Kamine oder Bäume',
        'Zustand des Zählerschranks',
        'Leitungswege vom Dach bis zum Anschluss',
        'gewählte Module und Wechselrichter',
        'Montageaufwand und Zugänglichkeit',
        'spätere Erweiterungen wie Wärmepumpe oder Wallbox'
      )
    ),

    tippBlock(
      'Nicht nur heute rechnen',
      p(
        t(
          'Auch ohne Speicher sollte die Anlage nicht nur auf den aktuellen Haushaltsstrom ausgerichtet werden. Wenn Wärmepumpe oder E-Auto absehbar sind, lohnt sich eine vorausschauende Planung.'
        )
      )
    ),

    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle:
    'Was kostet eine Solaranlage ohne Speicher für ein Einfamilienhaus? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Was kostet eine Solaranlage ohne Speicher fürs Einfamilienhaus? Ehrliche Einordnung zu Preis, Dach, Technik und typischen Vergleichsfehlern – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
