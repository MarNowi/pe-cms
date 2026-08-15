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
  titel: 'Lastgang verstehen: Was 15-Minuten-Werte über Verbrauch, PV und Speicher verraten',
  slug: 'lastgang-15-minuten-werte-verstehen',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'Der Jahresverbrauch sagt, wie viel Strom du brauchst – aber nicht wann. 15-Minuten-Werte zeigen Grundlast, Lastspitzen, PV-Überschuss und flexible Verbraucher. Wir erklären, wie man einen Lastgang liest und warum er für Gewerbe, Speicher und Energiemanagement wertvoll ist.',
  lesezeit: 14,

  seo: seo(
    'Lastgang & 15-Minuten-Werte einfach erklärt | PEAK.Energy',
    'Lastgang lesen und verstehen: 15-Minuten-Werte, Grundlast, Lastspitzen, kW vs. kWh sowie Nutzen für PV, Speicher, Wärmepumpe und Gewerbe.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein Jahresverbrauch von 20.000 kWh sagt nichts darüber aus, ob diese Energie gleichmäßig oder in kurzen Spitzen benötigt wird. Der '),
      bold('zeitliche Verlauf'),
      t(' ist für die Planung oft entscheidender als die Jahressumme.'),
    ),
    summaryPoint(
      t('Ein 15-Minuten-Wert beschreibt eine Energiemenge beziehungsweise einen Zählerstand in einem Viertelstundenintervall. Daraus lässt sich eine '),
      bold('mittlere Leistung für dieses Intervall'),
      t(' ableiten.'),
    ),
    summaryPoint(
      t('Lastprofile zeigen '),
      bold('Grundlast, Spitzen, Betriebszeiten und wiederkehrende Muster'),
      t(' – zum Beispiel Wallbox, Wärmepumpe, Maschinen oder Nachtverbrauch.'),
    ),
    summaryPoint(
      t('Für Batteriespeicher zählt nicht nur, wie viele kWh am Tag verbraucht werden, sondern auch '),
      bold('wann Leistung benötigt wird und wie lange Spitzen dauern'),
      t('.'),
    ),
    summaryPoint(
      t('Mit intelligenten Messsystemen gewinnen zeitlich aufgelöste Messwerte auch im privaten Bereich an Bedeutung. Ein klassischer gewerblicher RLM-Lastgang und ein Zählerstandsgang aus dem iMSys sind technisch nicht dasselbe, beantworten aber ähnliche Fragen zum '),
      bold('Zeitpunkt des Energieverbrauchs'),
      t('.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum der Jahresverbrauch für eine gute Planung nicht reicht')),
      p(
        t('Zwei Betriebe können beide 100.000 kWh Strom im Jahr verbrauchen und elektrisch trotzdem vollkommen unterschiedlich aussehen. Betrieb A hat rund um die Uhr eine gleichmäßige Grundlast. Betrieb B verbraucht fast alles werktags zwischen 8 und 16 Uhr und erzeugt dabei hohe Leistungsspitzen.'),
      ),
      p(
        t('Für PV, Speicher, Netzanschluss und Energiemanagement sind das zwei verschiedene Projekte. Die Jahressumme beantwortet nur die Frage '),
        bold('„Wie viel Energie?“'),
        t(' Der Lastgang beantwortet zusätzlich '),
        bold('„Wann und mit welcher Leistung?“'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ist ein Lastgang?')),
      p(
        t('Ein Lastgang stellt den Strombezug beziehungsweise die Leistung über die Zeit dar. Häufig werden dafür Viertelstundenintervalle verwendet. Statt eines einzelnen Jahreszählerstands entsteht eine Kurve mit vielen Messpunkten.'),
      ),
      p(
        t('Im Gewerbe ist die registrierende Lastgangmessung seit Langem ein wichtiges Instrument. Mit intelligenten Messsystemen kommen zeitlich aufgelöste Zählerstandsgänge zunehmend auch bei kleineren Verbrauchern und Erzeugern hinzu.'),
      ),
      p(
        t('Das Messstellenbetriebsgesetz unterscheidet diese Messverfahren ausdrücklich. Deshalb verwenden wir „Lastgang“ im Alltag oft als Sammelbegriff für den zeitlichen Verlauf – technisch sollte man aber zwischen '),
        bold('registrierender Lastgangmessung und Zählerstandsgang'),
        t(' unterscheiden.'),
      ),
    ),

    hinweisBlock(
      '15-Minuten-Wert ist nicht dasselbe wie Momentanleistung',
      p(
        t('Eine Viertelstunde glättet kurze Ereignisse. Ein Motor kann für wenige Sekunden deutlich mehr Leistung ziehen, ohne dass dieser kurze Peak im 15-Minuten-Mittel vollständig sichtbar wird. Für Schutztechnik und Netzanschluss können deshalb zusätzliche Leistungsdaten relevant sein.'),
      ),
    ),

    textBlock(
      h('h2', t('kW und kWh im Lastgang: ein einfaches Beispiel')),
      p(
        t('Werden in einer Viertelstunde 2 kWh Energie verbraucht, entspricht das über dieses 15-Minuten-Intervall einer mittleren Leistung von 8 kW. Denn vier Viertelstunden ergeben eine Stunde: 2 kWh × 4 = 8 kW mittlere Leistung.'),
      ),
      p(
        t('Werden dagegen nur 0,5 kWh in derselben Viertelstunde verbraucht, liegt die mittlere Leistung bei 2 kW. Diese Umrechnung hilft, wenn ein Export Energiewerte liefert und du daraus die Lastkurve verstehen möchtest.'),
      ),
    ),

    tabelleBlock('Was man in einer Lastkurve erkennen kann', [
      {
        spalte1: 'Grundlast',
        spalte2: 'dauerhaft vorhandener Verbrauch',
        spalte3: 'Server, Kühlung, Pumpen, Standby, Lüftung',
      },
      {
        spalte1: 'Lastspitze',
        spalte2: 'kurzzeitig hoher Leistungsbedarf',
        spalte3: 'Maschinenstart, Ladeleistung, gleichzeitige Verbraucher',
      },
      {
        spalte1: 'Tagesprofil',
        spalte2: 'wiederkehrender Verlauf innerhalb eines Tages',
        spalte3: 'Öffnungszeiten, Produktion, Haushalt',
      },
      {
        spalte1: 'Wochenprofil',
        spalte2: 'Unterschied Werktag / Wochenende',
        spalte3: 'Gewerbe, Büro, Gastronomie',
      },
      {
        spalte1: 'Saison',
        spalte2: 'Verbrauch verändert sich übers Jahr',
        spalte3: 'Wärmepumpe, Kühlung, Beleuchtung',
      },
    ]),

    textBlock(
      h('h2', t('Was verrät die Grundlast?')),
      p(
        t('Die Grundlast ist die Leistung, die auch dann vorhanden ist, wenn scheinbar „nichts passiert“. In einem Betrieb können das Server, Kühlanlagen, Lüftung, Pumpen oder Produktionsnebenaggregate sein. Im Wohnhaus sind es Kühlschrank, Netzwerk, Standby und dauerhafte Haustechnik.'),
      ),
      p(
        t('Eine hohe Grundlast ist für Photovoltaik zunächst attraktiv, weil tagsüber erzeugter Solarstrom mit hoher Wahrscheinlichkeit direkt verbraucht wird. Gleichzeitig kann eine unerwartet hohe Nachtgrundlast auf unnötige Verbraucher oder technische Probleme hinweisen.'),
      ),
    ),

    textBlock(
      h('h2', t('Lastspitzen: teuer oder nur optisch auffällig?')),
      p(
        t('Nicht jede sichtbare Spitze auf einer Kurve kostet automatisch zusätzliches Geld. Ob Leistungsspitzen direkt abrechnungsrelevant sind, hängt vom Mess- und Netznutzungsmodell ab. Bei leistungsgemessenen Gewerbekunden kann die höchste abrechnungsrelevante Leistung jedoch einen erheblichen Einfluss auf die Netzkosten haben.'),
      ),
      p(
        t('Deshalb sollte man vor einer Speicherinvestition wissen, '),
        bold('welche Spitze tatsächlich abgerechnet wird, wie häufig sie auftritt und wie lange sie dauert'),
        t('. Eine einmalige 15-Minuten-Spitze benötigt eine andere Batterie als eine vierstündige Hochlastphase.'),
      ),
      p(
        t('Wie Batteriespeicher solche Spitzen begrenzen können, erklären wir ausführlich unter '),
        link('Lastspitzenkappung mit Stromspeicher', '/stromspeicher/lastspitzenkappung-stromspeicher-gewerbe'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Photovoltaik: Passt die Erzeugung zum Verbrauch?')),
      p(
        t('Für eine PV-Anlage ist nicht nur die Größe des Dachs interessant. Entscheidend für den Eigenverbrauch ist, wie gut Erzeugung und Last zeitlich zusammenpassen. Ein Büro mit hoher Tageslast kann einen großen Teil des Solarstroms direkt nutzen. Ein Betrieb mit überwiegender Nachtproduktion braucht möglicherweise eine andere Strategie.'),
      ),
      p(
        t('Legt man Lastprofil und erwartete PV-Erzeugung übereinander, sieht man drei Bereiche: direkten Eigenverbrauch, PV-Überschuss und verbleibenden Netzbezug. Diese drei Flächen sind eine deutlich bessere Grundlage für Speicher- und Anlagenplanung als eine einzelne Autarkie-Prozentzahl.'),
      ),
    ),

    textBlock(
      h('h2', t('Stromspeicher: Energiebedarf und Leistungsbedarf getrennt betrachten')),
      p(
        t('Ein Speicher muss zwei Aufgaben erfüllen können: genügend Energie in kWh bereitstellen und genügend Leistung in kW liefern. Ein Lastgang zeigt beides deutlich besser als der Jahresverbrauch.'),
      ),
      p(
        t('Beispiel: Eine Spitze von 30 kW auf 50 kW dauert nur 15 Minuten. Um sie vollständig auf 30 kW zu begrenzen, wären für dieses einzelne Intervall theoretisch 5 kWh Energie nötig – aber gleichzeitig 20 kW Entladeleistung. Ein Speicher mit 15 kWh Kapazität und nur 5 kW Leistung wäre dafür trotz großer Energie nicht geeignet.'),
      ),
      p(
        t('Den Unterschied erklären wir separat in '),
        link('Stromspeicher: kW oder kWh?', '/stromspeicher/stromspeicher-kapazitaet-leistung-kw-kwh'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Wärmepumpe und Wallbox im Lastprofil')),
      p(
        t('Flexible Verbraucher erkennt man häufig an wiederkehrenden Blöcken im Verbrauch. Eine Wallbox erzeugt je nach Einstellung beispielsweise einen relativ konstanten Leistungsblock. Eine Wärmepumpe zeigt dagegen wetter- und temperaturabhängige Laufphasen.'),
      ),
      p(
        t('Mit Energiemanagement lassen sich solche Verbraucher zeitlich verschieben oder in der Leistung anpassen. Dann wird aus dem Lastgang nicht nur ein Analysewerkzeug, sondern die Grundlage für Regelentscheidungen.'),
      ),
    ),

    textBlock(
      h('h2', t('Smart Meter: 15-Minuten-Daten werden auch im Einfamilienhaus relevant')),
      p(
        t('Das Messstellenbetriebsgesetz sieht bei intelligenten Messsystemen Zählerstandsgangmessung vor; Zählerstandsgänge bestehen aus viertelstündig ermittelten Zählerständen elektrischer Arbeit. Für Nutzer müssen zudem Verbrauchsinformationen und – soweit vorhanden – Zählerstandsgänge einsehbar sein.'),
      ),
      p(
        t('Damit wird eine Datenqualität, die früher vor allem aus Gewerbeprojekten bekannt war, zunehmend auch für Haushalte, dynamische Tarife und steuerbare Verbraucher interessant.'),
      ),
      p(
        t('Wenn du wissen möchtest, wie du solche Smart-Meter-Daten selbst einsehen kannst, findest du dazu unseren Artikel '),
        link('Smart Meter auslesen: 15-Minuten-Werte und TRuDI', '/strom-energiemanagement/smart-meter-auslesen-verbrauchsdaten-trudi'),
        t('.'),
      ),
    ),

    hinweisBlock(
      'Ein Portal ist noch kein Energiemanagement',
      p(
        t('Eine schöne Lastkurve erklärt die Vergangenheit. Ein HEMS muss zusätzlich in Echtzeit beziehungsweise ausreichend schnell messen, Prognosen berücksichtigen und Geräte aktiv steuern. Reporting und Regelung sind deshalb zwei unterschiedliche Funktionen.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Daten brauchen wir für eine gute Gewerbeplanung?')),
      p(
        t('Ideal ist mindestens ein vollständiges Jahr mit zeitlich aufgelösten Verbrauchsdaten. Damit sehen wir Werktage, Wochenenden und saisonale Veränderungen. Bei stark veränderten Betriebsabläufen kann ein altes Lastprofil allerdings irreführend sein.'),
      ),
      p(
        t('Zusätzlich helfen Informationen zu geplanten Veränderungen: neue Maschinen, Elektrofahrzeuge, Wärmepumpe, Schichtbetrieb, Produktionsausbau oder Ladeinfrastruktur. Ein Speicher wird für die Zukunft gebaut – nicht für den Lastgang von gestern.'),
      ),
    ),

    tippBlock(
      'CSV statt Screenshot',
      p(
        t('Wenn dein Energieversorger oder Messstellenbetreiber Lastdaten exportieren kann, ist eine CSV- oder Excel-Datei deutlich hilfreicher als ein Screenshot aus dem Portal. Nur mit Rohdaten lassen sich Spitzen, Verteilungen und Szenarien sauber rechnen.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Energieplanung beginnt mit dem Zeitverlauf')),
      p(
        t('Der Jahresverbrauch bleibt wichtig – aber er ist nur die Summe am Ende der Rechnung. Wer PV, Batteriespeicher oder flexible Verbraucher sinnvoll planen will, sollte den zeitlichen Verlauf verstehen.'),
      ),
      p(
        t('Ein Lastgang zeigt, '),
        bold('wann Energie gebraucht wird, wie hoch die Leistung ist und wie lange bestimmte Situationen dauern'),
        t('. Genau daraus entstehen belastbare Entscheidungen über PV-Größe, Speicherleistung, Speicherkapazität und Energiemanagement.'),
      ),
    ),

    ctaBlock({
      titel: 'Lastdaten statt Bauchgefühl',
      text:
        'Bei Gewerbe-PV und Batteriespeichern analysieren wir vorhandene Lastdaten und geplante Verbraucher, bevor wir Leistung und Kapazität festlegen.',
      buttonText: 'Gewerbeprojekt anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist ein Lastgang?',
      'Ein Lastgang zeigt den zeitlichen Verlauf des Strombezugs beziehungsweise der Leistung. Häufig werden Werte in 15-Minuten-Intervallen dargestellt.',
    ),
    faqItem(
      'Wie rechne ich einen 15-Minuten-Energiewert in kW um?',
      'Wenn der Wert die in einer Viertelstunde verbrauchte Energie in kWh beschreibt, wird er für die mittlere Leistung dieses Intervalls mit vier multipliziert. 2 kWh in 15 Minuten entsprechen beispielsweise 8 kW mittlerer Leistung.',
    ),
    faqItem(
      'Ist ein Zählerstandsgang dasselbe wie eine registrierende Lastgangmessung?',
      'Nein. Das Messstellenbetriebsgesetz unterscheidet beide Messverfahren. Beide liefern zeitlich aufgelöste Informationen, technisch und energiewirtschaftlich sind sie jedoch nicht identisch.',
    ),
    faqItem(
      'Warum braucht man Lastdaten für einen Stromspeicher?',
      'Weil der Speicher sowohl zur benötigten Energiemenge in kWh als auch zur benötigten Leistung in kW passen muss. Dauer und Höhe von Lastspitzen lassen sich aus zeitlich aufgelösten Daten deutlich besser beurteilen.',
    ),
    faqItem(
      'Kann ich Lastdaten aus meinem Smart Meter bekommen?',
      'Bei einem intelligenten Messsystem sind zeitlich aufgelöste Zählerstandsgänge und Verbrauchsinformationen vorgesehen. Welche Darstellung und Exportmöglichkeiten verfügbar sind, hängt vom Messstellenbetreiber und dessen Anwendung ab.',
    ),
  ],
}

await upsertRatgeberArticle(article)
