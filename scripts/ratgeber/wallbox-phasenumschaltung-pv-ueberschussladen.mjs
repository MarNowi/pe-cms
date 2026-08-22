import { upsertRatgeberArticle } from './_articleFactory.mjs'
import {
  t,
  bold,
  link,
  p,
  h,
  ul,
  summaryPoint,
  textBlock,
  hinweisBlock,
  tippBlock,
  tabelleBlock,
  ctaBlock,
  faqItem,
  seo,
} from './_helpers.mjs'

const article = {
  titel: '1-phasig oder 3-phasig laden: Warum die Phasenumschaltung beim PV-Überschussladen wichtig ist',
  slug: 'wallbox-phasenumschaltung-pv-ueberschussladen',
  kategorie: 'wallbox',
  status: 'veroeffentlicht',
  teaser:
    'Warum lädt das E-Auto bei 2 kW PV-Überschuss manchmal gar nicht? Der Grund liegt oft in der Mindeststromstärke und der Zahl der Ladephasen. Wir erklären 1- und 3-phasiges Laden, die Schwellen um 1,4 und 4,1 kW und was eine automatische Phasenumschaltung bringt.',
  lesezeit: 10,

  seo: seo(
    'Wallbox Phasenumschaltung: 1- oder 3-phasig mit PV laden | PEAK.Energy',
    'Warum PV-Überschussladen mit Phasenumschaltung effizienter ist: 6 A Mindeststrom, ca. 1,4 kW einphasig, 4,1 kW dreiphasig und wichtige Praxisregeln.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Beim AC-Laden liegt der typische Mindestladestrom bei '),
      bold('6 A je aktiver Phase'),
      t('. Daraus ergeben sich ungefähr 1,38 kW einphasig beziehungsweise 4,14 kW dreiphasig bei 230/400 V.'),
    ),
    summaryPoint(
      t('Eine Wallbox, die ausschließlich dreiphasig lädt, kann einen PV-Überschuss von beispielsweise 2,5 kW nicht vollständig nutzen, ohne zusätzlich Netzstrom zu beziehen.'),
    ),
    summaryPoint(
      t('Mit automatischer '),
      bold('1-/3-Phasenumschaltung'),
      t(' kann das Laden bei kleinen Überschüssen einphasig starten und bei höherer PV-Leistung auf drei Phasen wechseln.'),
    ),
    summaryPoint(
      t('Die Umschaltung muss technisch sauber erfolgen. Wallbox, Energiemanagement und Fahrzeug müssen das gewählte Verfahren unterstützen.'),
    ),
    summaryPoint(
      t('Gute PV-Ladung braucht zusätzlich '),
      bold('Hysterese, Mindestlaufzeiten und Lastmanagement'),
      t(', damit Wolken nicht zu ständigem Starten, Stoppen und Umschalten führen.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('2,5 kW Überschuss auf dem Dach – und das Auto lädt nicht. Warum?')),
      p(
        t('Das wirkt zunächst unlogisch: Die Photovoltaikanlage speist gerade mehrere Kilowatt ins Netz, das Auto steht angeschlossen vor der Tür, trotzdem startet die Wallbox nicht. In vielen Fällen liegt das nicht an einem Fehler, sondern an der Mindestleistung des AC-Ladens.'),
      ),
      p(
        t('Beim geregelten AC-Laden wird dem Fahrzeug ein zulässiger Ladestrom signalisiert. Ein üblicher Mindestwert ist 6 A pro aktiver Phase. Daraus entsteht eine technische Schwelle, die beim PV-Überschussladen entscheidend ist.'),
      ),
      p(
        t('Die Grundlagen zum solargeführten Laden behandeln wir in '),
        link('Wallbox mit PV laden', '/wallbox/wallbox-mit-pv-laden'),
        t('. Hier geht es speziell um die Frage, warum die Zahl der Phasen so viel ausmacht.'),
      ),
    ),

    tabelleBlock('Mindestleistung bei 6 A Ladestrom – rechnerisch', [
      {
        spalte1: '1 Phase',
        spalte2: '230 V × 6 A',
        spalte3: 'ca. 1,38 kW',
      },
      {
        spalte1: '3 Phasen',
        spalte2: '3 × 230 V × 6 A',
        spalte3: 'ca. 4,14 kW',
      },
      {
        spalte1: '1 Phase bei 16 A',
        spalte2: '230 V × 16 A',
        spalte3: 'ca. 3,68 kW',
      },
      {
        spalte1: '3 Phasen bei 16 A',
        spalte2: '3 × 230 V × 16 A',
        spalte3: 'ca. 11 kW',
      },
    ]),

    hinweisBlock(
      'Die Werte sind Näherungen',
      p(
        t('Netzspannung schwankt und Fahrzeuge sowie Wallboxen können sich im Detail unterschiedlich verhalten. Für die Planung sind 1,4 kW einphasig und rund 4,1 bis 4,2 kW dreiphasig aber sehr hilfreiche Größenordnungen.'),
      ),
    ),

    textBlock(
      h('h2', t('Was passiert ohne Phasenumschaltung?')),
      p(
        t('Angenommen, das Fahrzeug ist dreiphasig verbunden und die Regelung soll ausschließlich vorhandenen PV-Überschuss nutzen. Stehen nur 2,8 kW Überschuss zur Verfügung, liegt dieser Wert unter der dreiphasigen Mindestladeleistung. Die Regelung hat dann nur zwei Möglichkeiten: nicht laden – oder zusätzliche Energie aus dem Netz zulassen.'),
      ),
      p(
        t('Gerade morgens, abends, im Frühjahr, Herbst oder bei wechselnder Bewölkung liegt PV-Überschuss häufig über 1,4 kW, aber unter 4,1 kW. Genau in diesem Bereich bringt einphasiges Laden einen großen Vorteil.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie automatische Phasenumschaltung funktioniert')),
      p(
        t('Eine geeignete Wallbox beziehungsweise das angebundene Energiemanagement beobachtet den Überschuss am Netzanschlusspunkt. Ist genug Energie für einphasiges Laden vorhanden, startet das Fahrzeug mit einer Phase. Steigt der Überschuss über einen definierten Schwellenwert, kann das System auf drei Phasen wechseln.'),
      ),
      p(
        t('Sinkt die PV-Leistung wieder, wird je nach Regelstrategie zurückgeschaltet. Damit kann die Wallbox einen deutlich größeren Bereich der Solarproduktion nutzen, ohne unnötig Netzstrom beizumischen.'),
      ),
      p(
        t('Hersteller wie Fronius dokumentieren für entsprechende Systeme beispielsweise eine Regelung ab etwa 1,38 kW einphasig und 4,14 kW dreiphasig. Auch andere Systeme verwenden vergleichbare Schwellen – die konkrete Umsetzung muss aber immer für Wallbox und Fahrzeug geprüft werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum nicht ständig zwischen einer und drei Phasen springen?')),
      p(
        t('PV-Leistung ist nicht stabil. Eine kleine Wolke kann den Überschuss innerhalb von Sekunden verändern. Würde eine Wallbox bei jedem Grenzwert sofort umschalten, könnte sie an wechselhaften Tagen permanent zwischen Zuständen springen.'),
      ),
      p(
        t('Deshalb braucht eine gute Regelung '),
        bold('Hysterese und Zeitlogik'),
        t('. Sie wartet zum Beispiel, bis ein höherer Überschuss eine bestimmte Zeit stabil anliegt, bevor auf drei Phasen gewechselt wird. Umgekehrt wird nicht bei jedem kurzen Einbruch sofort zurückgeschaltet.'),
      ),
      p(
        t('Das macht die Regelung ruhiger und vermeidet unnötige Ladeunterbrechungen.'),
      ),
    ),

    textBlock(
      h('h2', t('Kann jedes Elektroauto während des Ladens die Phase wechseln?')),
      p(
        t('Nein, das sollte nicht pauschal angenommen werden. Fahrzeug, Onboard-Charger und Wallbox müssen mit der konkreten Umschaltlogik kompatibel sein. Manche Systeme unterbrechen den Ladevorgang kurz, schalten in einem definierten Zustand um und starten anschließend neu.'),
      ),
      p(
        t('Eine Wallbox mit Phasenumschaltung ist daher nur dann wirklich hilfreich, wenn die Funktion mit dem Fahrzeug beziehungsweise den vorgesehenen Fahrzeugen sauber zusammenspielt. Herstellerfreigaben und die aktuelle Dokumentation sind hier wichtiger als ein allgemeines Werbeversprechen.'),
      ),
    ),

    textBlock(
      h('h2', t('11 kW oder 22 kW ist eine andere Frage')),
      p(
        t('Phasenumschaltung wird häufig mit der maximalen Wallboxleistung verwechselt. Dabei geht es um unterschiedliche Dinge. 11 oder 22 kW beschreiben die maximale Ladeleistung. Die Phasenumschaltung entscheidet dagegen, '),
        bold('wie weit die Wallbox nach unten regeln kann'),
        t(' und welche PV-Überschüsse sie nutzen kann.'),
      ),
      p(
        t('Eine 11-kW-Wallbox mit guter Überschussregelung kann für ein PV-System sinnvoller sein als eine 22-kW-Wallbox ohne passende Steuerung. Mehr zur maximalen Ladeleistung findest du in '),
        link('Wallbox mit 11 oder 22 kW?', '/wallbox/wallbox-11-oder-22-kw'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Hausverbrauch und Batterie gehören in dieselbe Regelung')),
      p(
        t('PV-Überschuss ist nicht einfach die momentane PV-Leistung. Wenn die Anlage 6 kW produziert und das Haus 2 kW verbraucht, stehen am Netzanschlusspunkt nur rund 4 kW Überschuss zur Verfügung. Lädt gleichzeitig ein Stromspeicher, verändert sich die Situation erneut.'),
      ),
      p(
        t('Deshalb ist der Netzanschlusspunkt die entscheidende Messstelle. Ein gutes Energiemanagement koordiniert Hauslast, Batterie und Wallbox, statt jede Komponente unabhängig voneinander auf denselben PV-Strom zugreifen zu lassen.'),
      ),
    ),

    tippBlock(
      'Nicht nur „PV-Überschussfähig“ abhaken',
      ul(
        p(t('Unterstützt die Wallbox automatische 1-/3-Phasenumschaltung?')),
        p(t('Welche Fahrzeuge sind dafür freigegeben beziehungsweise getestet?')),
        p(t('Wo wird der Überschuss gemessen?')),
        p(t('Kann das System Batterie und Hauslast berücksichtigen?')),
        p(t('Wie sind Mindestlaufzeit, Hysterese und Netzbezug einstellbar?')),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Die untere Ladegrenze entscheidet über viele Sonnenstunden')),
      p(
        t('Bei PV-Ladung ist nicht nur wichtig, wie schnell eine Wallbox maximal laden kann. Mindestens genauso interessant ist, wie '),
        bold('langsam und flexibel'),
        t(' sie laden kann.'),
      ),
      p(
        t('Die automatische Phasenumschaltung erweitert den nutzbaren PV-Bereich deutlich. Statt erst bei gut 4 kW Überschuss zu starten, kann ein passendes System schon um 1,4 kW einphasig laden. Gerade bei kleineren Anlagen und wechselndem Wetter ist das ein echter Unterschied.'),
      ),
    ),

    ctaBlock({
      titel: 'Wallbox als Teil des Energiesystems planen',
      text:
        'Wir betrachten PV, Speicher, Hausanschluss, Fahrzeug und Energiemanagement zusammen – damit Überschussladen nicht nur im Prospekt funktioniert.',
      buttonText: 'Wallbox-Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Ab wie viel PV-Überschuss kann ein Elektroauto laden?',
      'Beim üblichen Mindestladestrom von 6 A beginnt einphasiges AC-Laden rechnerisch bei etwa 1,38 kW. Dreiphasig sind etwa 4,14 kW nötig. Fahrzeug und Wallbox können im Detail abweichen.',
    ),
    faqItem(
      'Was bringt die Phasenumschaltung bei einer Wallbox?',
      'Sie ermöglicht, bei kleinen PV-Überschüssen einphasig zu laden und bei höherer Leistung auf drei Phasen zu wechseln. Dadurch kann mehr eigener Solarstrom genutzt werden.',
    ),
    faqItem(
      'Kann jede Wallbox automatisch zwischen 1 und 3 Phasen wechseln?',
      'Nein. Die Funktion muss von der Wallbox beziehungsweise dem System ausdrücklich unterstützt werden. Zusätzlich muss die Umschaltung mit dem angeschlossenen Fahrzeug kompatibel sein.',
    ),
    faqItem(
      'Warum lädt eine dreiphasige Wallbox bei 3 kW PV-Überschuss nicht?',
      'Weil die typische dreiphasige Mindestladeleistung bei 6 A je Phase rund 4,1 kW beträgt. Ohne einphasige Umschaltung müsste das System entweder warten oder Netzstrom ergänzen.',
    ),
    faqItem(
      'Ist 1-phasiges Laden schlechter für das Auto?',
      'Grundsätzlich ist einphasiges AC-Laden ein normaler Betriebsfall, sofern Fahrzeug, Wallbox und Installation dafür ausgelegt sind. Entscheidend sind die Herstellerfreigaben und eine fachgerechte elektrische Planung.',
    ),
  ],
}

await upsertRatgeberArticle(article)
