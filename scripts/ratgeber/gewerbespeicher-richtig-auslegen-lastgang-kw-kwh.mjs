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
  titel: 'Gewerbespeicher richtig auslegen: Warum Lastgang und kW wichtiger sein können als Jahresverbrauch und kWh',
  slug: 'gewerbespeicher-richtig-auslegen-lastgang-kw-kwh',
  kategorie: 'stromspeicher',
  status: 'veroeffentlicht',
  teaser:
    '500.000 kWh Jahresverbrauch sagen noch nicht, ob ein Betrieb 100, 300 oder 1.000 kWh Batteriespeicher braucht. Für Peak Shaving, PV-Eigenverbrauch und Netzanschlussoptimierung entscheidet der zeitliche Lastgang. So wird ein Gewerbespeicher technisch sinnvoll dimensioniert.',
  lesezeit: 13,

  seo: seo(
    'Gewerbespeicher richtig auslegen: Lastgang, kW & kWh | PEAK.Energy',
    'Wie groß muss ein Gewerbespeicher sein? Warum 15-Minuten-Lastgang, Spitzenleistung, kW, kWh, PV und Betriebszeiten wichtiger sind als der Jahresverbrauch allein.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Der Jahresverbrauch zeigt, '),
      bold('wie viel Energie'),
      t(' ein Betrieb insgesamt benötigt. Er zeigt nicht, '),
      bold('wann und mit welcher Leistung'),
      t(' sie benötigt wird.'),
    ),
    summaryPoint(
      t('Für Peak Shaving ist entscheidend, wie hoch Lastspitzen sind, wie lange sie dauern und wie häufig sie auftreten. Dafür ist der '),
      bold('15-Minuten-Lastgang'),
      t(' wesentlich aussagekräftiger als die Jahres-kWh.'),
    ),
    summaryPoint(
      t('Die Batteriekapazität in kWh und die Leistung in kW müssen getrennt dimensioniert werden. Eine kurze hohe Spitze braucht viel kW, aber nicht zwingend viele kWh.'),
    ),
    summaryPoint(
      t('PV, Ladeinfrastruktur, Wärmepumpe, Produktion und Schichtzeiten verändern das optimale Speicherprofil. Deshalb gibt es für Gewerbe '),
      bold('keine sinnvolle Standardgröße pro Jahresverbrauch'),
      t('.'),
    ),
    summaryPoint(
      t('Ein wirtschaftlich guter Gewerbespeicher erfüllt möglichst mehrere Aufgaben – etwa '),
      bold('Eigenverbrauch, Peak Shaving, dynamische Beschaffung und Netzanschlussentlastung'),
      t(' – ohne dass sich die Betriebsstrategien gegenseitig blockieren.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum „Wir verbrauchen 300.000 kWh im Jahr“ für die Speicherplanung nicht reicht')),
      p(
        t('Bei einer privaten PV-Anlage kann der Jahresverbrauch ein brauchbarer erster Orientierungswert sein. Im Gewerbe ist er für die Batteriespeicher-Auslegung allein viel zu grob. Zwei Unternehmen können exakt denselben Jahresverbrauch haben und trotzdem völlig unterschiedliche Speicher benötigen.'),
      ),
      p(
        t('Der Grund ist einfach: Energie und Leistung sind zwei verschiedene Größen. Ein Betrieb kann seine 300.000 kWh relativ gleichmäßig über 24 Stunden beziehen. Ein anderer verbraucht dieselbe Energiemenge fast ausschließlich werktags zwischen 7 und 17 Uhr und erzeugt dabei kurze, hohe Spitzen.'),
      ),
      p(
        t('Für den zweiten Betrieb kann ein Speicher mit hoher Leistung enorm wertvoll sein. Beim ersten wäre möglicherweise eine ganz andere Betriebsstrategie sinnvoll.'),
      ),
    ),

    tabelleBlock('Was die wichtigsten Eingangsdaten verraten', [
      {
        spalte1: 'Jahresverbrauch in kWh',
        spalte2: 'gesamte Energiemenge',
        spalte3: 'Gut für Größenordnung und Energiekosten, aber ohne Zeitbezug',
      },
      {
        spalte1: '15-Minuten-Lastgang',
        spalte2: 'Leistungsprofil über das Jahr',
        spalte3: 'Zeigt Spitzen, Dauer, Häufigkeit und Betriebszeiten',
      },
      {
        spalte1: 'PV-Erzeugungsprofil',
        spalte2: 'wann Solarenergie verfügbar ist',
        spalte3: 'Entscheidend für Eigenverbrauch und Batterieladung',
      },
      {
        spalte1: 'Netzanschlussleistung',
        spalte2: 'technische Anschlussgrenze',
        spalte3: 'Relevant bei neuen Lasten und Ladeinfrastruktur',
      },
      {
        spalte1: 'Stromvertrag / Netzentgelte',
        spalte2: 'wirtschaftliche Preisstruktur',
        spalte3: 'Bestimmt, welche Lastverschiebung überhaupt Geld spart',
      },
    ]),

    textBlock(
      h('h2', t('Der Lastgang ist die Landkarte des Betriebs')),
      p(
        t('Ein Lastgang zeigt die elektrische Leistung des Unternehmens über die Zeit. Bei registrierender Leistungsmessung liegen typischerweise 15-Minuten-Werte vor. Damit wird sichtbar, wann Maschinen anlaufen, wann Ladepunkte genutzt werden, welche Grundlast nachts bleibt und wie stark Produktion oder Klima auf einzelne Zeiten wirken.'),
      ),
      p(
        t('Wenn du das Thema im Detail verstehen willst, lies zuerst '),
        link('Lastgang verstehen: Was 15-Minuten-Werte über einen Betrieb verraten', '/strom-energiemanagement/lastgang-15-minuten-werte-verstehen'),
        t('. Für die Speicherplanung ist dieser Datensatz eine der wichtigsten Grundlagen überhaupt.'),
      ),
    ),

    textBlock(
      h('h2', t('Beispiel: gleiche kWh, völlig andere Batterie')),
      p(
        t('Betrieb A hat eine relativ konstante Last von ungefähr 35 kW über viele Stunden. Betrieb B bewegt sich meist bei 20 kW, springt aber mehrmals täglich für 15 bis 30 Minuten auf 120 kW.'),
      ),
      p(
        t('Beide können über das Jahr auf eine ähnliche Energiemenge kommen. Für Peak Shaving ist Betrieb B aber viel interessanter: Um eine 120-kW-Spitze beispielsweise auf 70 kW zu begrenzen, muss der Speicher kurzfristig rund 50 kW zusätzliche Leistung liefern. Hält die Spitze 15 Minuten, entspricht das rechnerisch nur etwa 12,5 kWh Energie – zuzüglich Reserven und Verlusten.'),
      ),
      p(
        t('Genau hier sieht man, warum eine hohe kW-Leistung bei vergleichsweise kleiner kWh-Kapazität sinnvoll sein kann.'),
      ),
    ),

    hinweisBlock(
      'Peak Shaving ist ein Leistungsproblem',
      p(
        t('Wer Lastspitzen kappen will, darf den Speicher nicht zuerst über seine Kapazität auswählen. Die entscheidende Frage lautet: Welche zusätzliche '),
        bold('Leistung in kW'),
        t(' muss für welche '),
        bold('Dauer'),
        t(' bereitstehen? Daraus ergibt sich erst die notwendige Energiemenge.'),
      ),
    ),

    textBlock(
      h('h2', t('kW und kWh getrennt dimensionieren')),
      p(
        t('Ein Gewerbespeicher mit 500 kWh Kapazität und 100 kW Leistung ist etwas völlig anderes als ein System mit 500 kWh und 500 kW. Beide speichern dieselbe Energiemenge, aber ihre Fähigkeit, Lastspitzen zu beeinflussen, unterscheidet sich massiv.'),
      ),
      p(
        t('Die Grundlagen dazu erklären wir in '),
        link('Stromspeicher: kW oder kWh?', '/stromspeicher/stromspeicher-kapazitaet-leistung-kw-kwh'),
        t('. Im Gewerbe kommt zusätzlich die Frage hinzu, wie die Leistung über den Tag reserviert und zwischen mehreren Anwendungen verteilt wird.'),
      ),
    ),

    textBlock(
      h('h2', t('Peak Shaving: Wie viel Spitze soll wirklich verschwinden?')),
      p(
        t('Eine Lastspitze komplett auf null zu drücken wäre meist weder nötig noch wirtschaftlich. Stattdessen wird ein Zielwert definiert. Sobald die Netzbezugsleistung darüber steigt, entlädt der Speicher und hält den Bezug möglichst unter diesem Grenzwert.'),
      ),
      p(
        t('Die optimale Schwelle hängt unter anderem von Leistungspreis, Häufigkeit der Spitzen, Batterieleistung und verfügbarer Energie ab. Zu aggressives Peak Shaving kann den Speicher früh leeren – und die wirklich teure Spitze kommt dann später am selben Tag.'),
      ),
      p(
        t('Mehr zur Funktionsweise findest du unter '),
        link('Lastspitzenkappung mit Stromspeicher im Gewerbe', '/stromspeicher/lastspitzenkappung-stromspeicher-gewerbe'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('PV-Eigenverbrauch braucht eine andere Perspektive')),
      p(
        t('Für PV-Eigenverbrauch ist weniger die höchste Lastspitze entscheidend, sondern die Energiemenge, die zeitlich verschoben werden soll. Produziert die PV-Anlage mittags große Überschüsse und der Betrieb verbraucht am späten Nachmittag weiter Strom, kann eine größere kWh-Kapazität wertvoll werden.'),
      ),
      p(
        t('Ein Unternehmen mit hohem Tagesverbrauch und perfekt passender PV-Erzeugung braucht dagegen möglicherweise weniger Speicherkapazität, obwohl der Jahresverbrauch sehr hoch ist. Der Solarstrom wird dann bereits direkt verbraucht.'),
      ),
    ),

    textBlock(
      h('h2', t('Ladeinfrastruktur kann den Netzanschluss zum Engpass machen')),
      p(
        t('Mehrere 22-kW-Ladepunkte, Schnellladepunkte, elektrische Flurförderzeuge oder eine wachsende Fahrzeugflotte können die Leistungssituation eines Standorts stark verändern. Dann muss ein Speicher nicht primär Stromkosten verschieben, sondern kann helfen, zusätzliche Last innerhalb einer vorhandenen Netzanschlussgrenze zu integrieren.'),
      ),
      p(
        t('Auch hier zählt die Zeit: Zehn Fahrzeuge, die über acht Stunden verteilt laden, stellen eine andere Aufgabe dar als dieselbe Energiemenge innerhalb eines kurzen Schichtwechsels.'),
      ),
    ),

    textBlock(
      h('h2', t('Multi-Use: Ein Speicher, mehrere Aufgaben')),
      p(
        t('Wirtschaftlich interessant wird ein Gewerbespeicher häufig, wenn er nicht nur eine einzige Aufgabe erfüllt. Derselbe Speicher kann grundsätzlich PV-Überschüsse verschieben, Lastspitzen reduzieren, günstige Bezugszeiten nutzen oder Flexibilität für neue Verbraucher bereitstellen.'),
      ),
      p(
        t('Die Anwendungen konkurrieren aber um dieselbe Batterie. Wenn der Speicher morgens für eine Tarifoptimierung vollständig entladen wurde, fehlt Energie für eine Leistungsspitze am Mittag. Ein Multi-Use-Konzept braucht deshalb Prioritäten, Reserven und Prognosen.'),
      ),
      p(
        t('Unser vertiefender Beitrag dazu ist '),
        link('Multi-Use-Stromspeicher: mehrere Geschäftsmodelle kombinieren', '/stromspeicher/multi-use-stromspeicher'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Daten wir vor einer Auslegung sehen wollen')),
      ul(
        p(t('mindestens einen vollständigen Lastgang mit 15-Minuten-Werten,')),
        p(t('Stromrechnungen und Vertrags-/Netzentgeltstruktur,')),
        p(t('bestehende oder geplante PV-Erzeugung,')),
        p(t('Netzanschlussdaten und bekannte Leistungsgrenzen,')),
        p(t('geplante neue Verbraucher wie Ladeinfrastruktur, Wärmepumpe oder Produktion,')),
        p(t('Betriebszeiten, Schichtmodelle und saisonale Besonderheiten,')),
        p(t('Ziel des Speichers: Peak Shaving, Eigenverbrauch, Tarife, Backup oder Kombination.')),
      ),
    ),

    tippBlock(
      'Erst Ziel definieren, dann Batterie auswählen',
      p(
        t('Die Frage „Welchen Speicher könnt ihr liefern?“ kommt zu früh. Zuerst muss klar sein, welches Problem gelöst werden soll und wie dieses Problem im Lastgang aussieht. Daraus entstehen Leistungs- und Energieanforderung – und erst danach die konkrete Hardware.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum Simulation bei Gewerbe wichtiger ist als Faustformeln')),
      p(
        t('Ein Gewerbelastgang enthält 35.040 Viertelstundenwerte pro Jahr. Darin steckt wesentlich mehr Information als in zwölf Monatsrechnungen. Mit einer Simulation lässt sich prüfen, wie ein Speicher mit unterschiedlichen kW-/kWh-Kombinationen auf genau diesen Betrieb reagiert.'),
      ),
      p(
        t('So kann man beispielsweise sehen, wie oft ein Zielwert überschritten würde, wie viele Vollzyklen entstehen, wie viel PV-Überschuss gespeichert wird und ob ein größerer Speicher überhaupt zusätzlichen Nutzen bringt.'),
      ),
      p(
        t('Das schützt vor zwei klassischen Fehlern: '),
        bold('zu klein'),
        t(' für die eigentliche Aufgabe – oder '),
        bold('zu groß'),
        t(' und damit teuer, ohne ausreichend zusätzliche Nutzung.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Der Lastgang dimensioniert den Gewerbespeicher')),
      p(
        t('Der Jahresverbrauch bleibt wichtig, aber er ist nur die Summe am Ende. Für die eigentliche Speicherplanung müssen wir wissen, wie diese Summe entstanden ist.'),
      ),
      p(
        t('Ein sinnvoll dimensionierter Gewerbespeicher entsteht deshalb aus '),
        bold('Lastgang, Leistung, Dauer der Spitzen, PV-Profil, Netzanschluss und Betriebsstrategie'),
        t('. Erst wenn diese Größen zusammenpassen, werden kWh und kW zu einer Investition statt zu zwei großen Zahlen auf einem Angebot.'),
      ),
    ),

    ctaBlock({
      titel: 'Gewerbespeicher aus Lastdaten statt aus Bauchgefühl planen',
      text:
        'Wir analysieren Lastgang, PV, Netzanschluss und zukünftige Verbraucher und dimensionieren Leistung und Kapazität passend zum tatsächlichen Betrieb.',
      buttonText: 'Gewerbespeicher analysieren',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Wie groß sollte ein Gewerbespeicher sein?',
      'Das lässt sich aus dem Jahresverbrauch allein nicht seriös bestimmen. Benötigt werden insbesondere Lastgang, Zielanwendung, Leistungsanforderung, PV-Profil, Netzanschluss und Betriebszeiten.',
    ),
    faqItem(
      'Warum ist der Lastgang für einen Gewerbespeicher wichtig?',
      'Der Lastgang zeigt, wann und mit welcher Leistung Strom bezogen wird. Dadurch werden Lastspitzen, Grundlast, Schichtzeiten und die Dauer von Spitzen sichtbar – genau die Informationen, die für Peak Shaving und Speicherleistung entscheidend sind.',
    ),
    faqItem(
      'Was ist bei Gewerbespeichern wichtiger: kW oder kWh?',
      'Das hängt von der Aufgabe ab. Peak Shaving verlangt häufig hohe kW-Leistung, während die zeitliche Verschiebung größerer Energiemengen mehr kWh-Kapazität benötigt. In der Praxis müssen beide Werte gemeinsam optimiert werden.',
    ),
    faqItem(
      'Kann ein Gewerbespeicher Lastspitzen reduzieren?',
      'Ja. Der Speicher kann oberhalb eines definierten Netzbezugswertes zusätzliche Leistung bereitstellen. Dafür müssen Entladeleistung und verfügbare Energie zur Höhe und Dauer der Lastspitze passen.',
    ),
    faqItem(
      'Kann derselbe Gewerbespeicher PV-Eigenverbrauch und Peak Shaving übernehmen?',
      'Grundsätzlich ja. Die Anwendungen teilen sich aber dieselbe Batterie. Deshalb braucht ein Multi-Use-Konzept Prioritäten, Reserven und eine Regelstrategie, damit die Batterie zur richtigen Zeit genug Leistung und Energie bereithält.',
    ),
  ],
}

await upsertRatgeberArticle(article)
