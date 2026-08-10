// scripts/articles/pv-speicher-wallbox-waermepumpe-intelligent-steuern.mjs

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
  titel: 'PV, Speicher, Wallbox und Wärmepumpe intelligent steuern: So arbeitet ein Energiesystem im Alltag',
  slug: 'pv-speicher-wallbox-waermepumpe-intelligent-steuern',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'Eine PV-Anlage, ein Batteriespeicher, eine Wallbox und eine Wärmepumpe können einzeln hervorragend funktionieren – und trotzdem gegeneinander arbeiten. Erst ein gemeinsames Energiemanagement entscheidet, wann Solarstrom ins Haus, in den Speicher, ins Auto oder in die Wärmepumpe fließt. Wir zeigen an echten Tagesabläufen, wie ein intelligentes Energiesystem im Sommer, Winter und bei dynamischen Strompreisen arbeiten sollte.',
  lesezeit: 17,

  seo: seo(
    'PV, Speicher, Wallbox & Wärmepumpe intelligent steuern | PEAK.Energy',
    'So steuert ein HEMS PV, Batteriespeicher, Wallbox und Wärmepumpe gemeinsam: Sommer, Winter, dynamische Tarife, §14a, Smart Meter und Prioritäten erklärt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein Energiesystem wird nicht dadurch intelligent, dass jedes Gerät eine eigene App besitzt. Entscheidend ist eine '),
      bold('gemeinsame Steuerungslogik'),
      t(' für PV, Speicher, Wallbox und Wärmepumpe.'),
    ),
    summaryPoint(
      t('Die beste Reihenfolge ist nicht immer „PV → Speicher → Rest". Je nach Tageszeit kann es sinnvoller sein, Solarstrom direkt ins '),
      bold('E-Auto oder in die Wärmepumpe'),
      t(' zu schicken und bewusst Speicherkapazität für später freizuhalten.'),
    ),
    summaryPoint(
      t('Ein gutes HEMS optimiert nicht nur den aktuellen Zustand, sondern nutzt '),
      bold('PV-, Verbrauchs- und Preisprognosen'),
      t('. Dadurch kann es beispielsweise die Batterieladung in die Mittagsstunden verschieben oder das E-Auto innerhalb seines Abfahrtsfensters laden.'),
    ),
    summaryPoint(
      t('Bei § 14a kann ein EMS mehrere steuerbare Verbraucher gemeinsam koordinieren. Der Netzbetreiber gibt im Engpassfall eine '),
      bold('netzwirksame Leistungsgrenze'),
      t(' vor; das EMS verteilt die Leistung auf Wallbox, Wärmepumpe und Speicher. Eigener PV-Strom kann zusätzlich genutzt werden.'),
    ),
    summaryPoint(
      t('Das Ziel ist nicht maximale Autarkie um jeden Preis, sondern '),
      bold('niedrige Gesamtkosten bei guter Effizienz, Komfort und technischer Lebensdauer'),
      t('.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Vier gute Geräte ergeben noch kein gutes Energiesystem')),
      p(
        t('Ein modernes Einfamilienhaus kann heute vier große Energiekomponenten besitzen: Photovoltaikanlage, Batteriespeicher, Wallbox und Wärmepumpe. Jede davon kann technisch hervorragend sein. Trotzdem entsteht daraus nicht automatisch ein optimiertes Gesamtsystem.'),
      ),
      p(
        t('Das Problem beginnt dort, wo jedes Gerät nur seinen eigenen Zustand kennt. Der Speicher sieht PV-Überschuss und lädt sofort. Die Wallbox startet gleichzeitig mit voller Leistung. Die Wärmepumpe erzeugt Warmwasser nach einem festen Zeitplan. Und am nächsten Mittag ist der Speicher schon voll, obwohl die PV-Anlage gerade ihre höchste Leistung erreicht.'),
      ),
      p(
        t('Ein Home Energy Management System – HEMS – setzt darüber eine gemeinsame Logik. Es betrachtet nicht nur einzelne Geräte, sondern den '),
        bold('Energiefluss des gesamten Hauses'),
        t('.'),
      ),
      p(
        t('Was ein HEMS technisch ist und warum eine Hersteller-App nicht automatisch dasselbe leistet, erklären wir im Grundlagenartikel '),
        link('HEMS: Was ein Home Energy Management System wirklich macht', '/strom-energiemanagement/hems-home-energy-management-system-hersteller-app'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Ziele muss ein Energiemanagement gleichzeitig erfüllen?')),
      p(
        t('Eine vernünftige Steuerung hat nicht nur ein Ziel. Sie muss mehrere Interessen gegeneinander abwägen:'),
      ),
      ul(
        p(t('möglichst viel eigenen PV-Strom sinnvoll nutzen,')),
        p(t('teuren Netzbezug vermeiden,')),
        p(t('das E-Auto rechtzeitig auf den gewünschten Ladezustand bringen,')),
        p(t('die Wärmepumpe effizient und komfortabel betreiben,')),
        p(t('den Batteriespeicher nicht unnötig zyklisieren oder lange voll stehen lassen,')),
        p(t('§14a- und Netzleistungsgrenzen einhalten,')),
        p(t('bei dynamischen Tarifen günstige Zeitfenster nutzen,')),
        p(t('eine gewünschte Backup-Reserve im Speicher erhalten.')),
      ),
      p(
        t('Diese Ziele können sich widersprechen. Genau deshalb braucht es Prioritäten. Ein System, das ausschließlich Eigenverbrauch maximiert, kann beispielsweise den Speicher zu früh vollladen. Ein System, das nur auf niedrige Strompreise reagiert, kann nachts Netzstrom speichern und dadurch am nächsten Mittag Platz für kostenlosen PV-Strom blockieren.'),
      ),
    ),

    hinweisBlock(
      '„Maximaler Eigenverbrauch" ist nicht automatisch die wirtschaftlich beste Strategie',
      p(
        t('Eigenverbrauch ist wichtig, aber nicht der einzige Wert. Bei dynamischen Preisen, zeitvariablen Netzentgelten, Batteriealterung und flexiblen Verbrauchern kann es sinnvoll sein, Energie zeitlich anders zu verteilen. Entscheidend sind die Gesamtkosten des Systems – nicht die schönste Autarkie-Prozentzahl in der App.'),
      ),
    ),

    textBlock(
      h('h2', t('Die Geräte haben unterschiedliche Arten von Flexibilität')),
      p(
        t('Für das Energiemanagement ist wichtig zu verstehen, dass Speicher, E-Auto und Wärmepumpe nicht gleich steuerbar sind.'),
      ),
    ),

    tabelleBlock('Wie flexibel sind die Komponenten im Haus?', [
      {
        spalte1: 'PV-Anlage',
        spalte2: 'Erzeugung kaum verschiebbar',
        spalte3: 'Die Sonne bestimmt die Produktion; das HEMS entscheidet hauptsächlich, wohin die Energie fließt',
      },
      {
        spalte1: 'Batteriespeicher',
        spalte2: 'Sehr flexibel',
        spalte3: 'Kann laden, warten oder entladen; Kapazität und Lebensdauer setzen Grenzen',
      },
      {
        spalte1: 'E-Auto / Wallbox',
        spalte2: 'Sehr flexibel innerhalb des Standzeitfensters',
        spalte3: 'Entscheidend sind Abfahrtszeit, gewünschter Ladezustand und minimale/maximale Ladeleistung',
      },
      {
        spalte1: 'Wärmepumpe',
        spalte2: 'Begrenzt flexibel',
        spalte3: 'Gebäude und Warmwasser speichern Wärme; Komfort und Effizienz begrenzen die Verschiebung',
      },
      {
        spalte1: 'Haushaltsverbrauch',
        spalte2: 'Nur teilweise flexibel',
        spalte3: 'Kochen und Licht kaum, Waschmaschine oder Geschirrspüler teilweise verschiebbar',
      },
    ]),

    textBlock(
      h('h2', t('Sommermorgen: Warum der Speicher nicht sofort voll sein sollte')),
      p(
        t('Nehmen wir einen sonnigen Julitag. Um 7 Uhr beginnt die PV-Anlage deutlich mehr Strom zu erzeugen als das Haus benötigt. Ein einfaches Speichersystem lädt sofort mit maximal möglicher Leistung. Um 10 Uhr ist die Batterie voll.'),
      ),
      p(
        t('Genau dann kommt aber erst die stärkste Solarproduktion. Zur Mittagszeit kann keine Energie mehr in den Speicher fließen. Der Überschuss wird eingespeist – oder bei einer Leistungsbegrenzung teilweise abgeregelt.'),
      ),
      p(
        t('Ein prognosebasiertes HEMS kennt die erwartete PV-Erzeugung und kann die Batterieladung bewusst '),
        bold('in die Mittags- und Nachmittagsstunden verschieben'),
        t('.'),
      ),
      p(
        t('Das ist nicht nur Theorie: Untersuchungen von KIT und HTW Berlin zeigen, dass prognosebasierte Ladestrategien die Batterieladung gezielt in Zeiten hoher PV-Erzeugung verlagern können. Gleichzeitig lässt sich die Standzeit bei sehr hohen Ladezuständen reduzieren.'),
      ),
    ),

    tippBlock(
      'Freier Speicherplatz ist am Vormittag eine Ressource',
      p(
        t('Bei hoher erwarteter Mittagsproduktion kann ein teilweise leerer Speicher wertvoller sein als ein morgens schon voller. Das HEMS sollte deshalb nicht nur den aktuellen PV-Überschuss sehen, sondern den kommenden Tagesverlauf.'),
      ),
    ),

    textBlock(
      h('h2', t('Sommermittag: Soll zuerst das Auto oder der Speicher laden?')),
      p(
        t('Es gibt keine universelle Reihenfolge. Ein starres System arbeitet häufig nach „Haus → Speicher → Wallbox → Netz". Das ist leicht verständlich, aber nicht immer sinnvoll.'),
      ),
      p(
        t('Steht das E-Auto zu Hause und muss am Nachmittag ohnehin geladen werden, kann direkter PV-Strom ins Auto wirtschaftlich sinnvoller sein als der Umweg über den Heimspeicher. Jede zusätzliche Speicherung verursacht Verluste.'),
      ),
      p(
        t('Gleichzeitig sollte der Heimspeicher genug Energie für den Abend erhalten. Das HEMS kann deshalb beide Verbraucher parallel oder zeitlich gestaffelt versorgen.'),
      ),
    ),

    tabelleBlock('Vereinfachte Entscheidung an einem sonnigen Mittag', [
      {
        spalte1: 'Auto bleibt bis morgen stehen',
        spalte2: 'Speicher kann zunächst priorisiert oder Ladeleistung aufgeteilt werden',
        spalte3: 'Zeitdruck fürs Fahrzeug ist gering',
      },
      {
        spalte1: 'Auto fährt in 2 Stunden los',
        spalte2: 'PV-Ladung des Fahrzeugs höher priorisieren',
        spalte3: 'Sonst müsste später Netzstrom für das notwendige Ladeziel genutzt werden',
      },
      {
        spalte1: 'Speicher fast voll',
        spalte2: 'Wallbox übernimmt mehr PV-Überschuss',
        spalte3: 'Verhindert unnötige Netzeinspeisung oder Abregelung',
      },
      {
        spalte1: 'Abendverbrauch wird hoch erwartet',
        spalte2: 'Ausreichende Speicherreserve sichern',
        spalte3: 'Nicht den gesamten PV-Überschuss ins Fahrzeug geben',
      },
    ]),

    textBlock(
      h('h2', t('Sommernachmittag: Die Wärmepumpe kann Solarstrom aufnehmen')),
      p(
        t('Auch die Wärmepumpe kann einen Teil der PV-Erzeugung sinnvoll in Wärme verschieben. Besonders Warmwasser lässt sich häufig innerhalb eines gewissen Zeitfensters erzeugen.'),
      ),
      p(
        t('Wenn die PV-Anlage am Nachmittag Überschuss liefert, kann das HEMS die Warmwasserbereitung etwas vorziehen. Der elektrische Strom wird damit nicht in einer Batterie, sondern als '),
        bold('thermische Energie'),
        t(' gespeichert.'),
      ),
      p(
        t('Das darf aber nicht in extreme Temperaturen ausarten. Je höher die notwendige Temperatur, desto schlechter arbeitet eine Wärmepumpe typischerweise. Eine intelligente Steuerung nutzt deshalb vorhandene thermische Flexibilität, ohne die Effizienz durch unnötig hohe Sollwerte zu zerstören.'),
      ),
    ),

    textBlock(
      h('h2', t('Sommerabend: Jetzt zeigt sich, ob die Tagesplanung funktioniert hat')),
      p(
        t('Am Abend sinkt die PV-Leistung. Gleichzeitig steigen typische Haushaltslasten: Kochen, Beleuchtung, Unterhaltungselektronik und möglicherweise weiteres Laden.'),
      ),
      p(
        t('Der Heimspeicher übernimmt nun den Restverbrauch. Wenn das HEMS tagsüber gut geplant hat, ist genug Energie vorhanden, ohne dass die Batterie schon seit dem Vormittag bei 100 % stand.'),
      ),
      p(
        t('Das E-Auto ist entweder bereits mit PV-Energie geladen oder hat noch ein Zeitfenster für spätere günstige Netzpreise. Die Wärmepumpe hat Warmwasser möglichst aus der Solarphase erzeugt.'),
      ),
      p(
        t('Das Ziel des Tages ist damit nicht „100 % Autarkie". Das Ziel ist, die verfügbaren Energiequellen sinnvoll verteilt zu haben.'),
      ),
    ),

    textBlock(
      h('h2', t('Wintermorgen: Jetzt dreht sich die Logik um')),
      p(
        t('Im Dezember sieht derselbe Haushalt völlig anders aus. Die PV-Anlage produziert wenig, der Wärmebedarf ist hoch und der Batteriespeicher wird allein aus Solarstrom möglicherweise tagelang nicht voll.'),
      ),
      p(
        t('Hier kann ein dynamischer Stromtarif interessanter werden. Wenn nachts oder am frühen Morgen günstige Preisfenster vorhanden sind, kann es sinnvoll sein, einen Teil des erwarteten späteren Netzbezugs vorzuziehen.'),
      ),
      p(
        t('Das kann über das E-Auto, die Wärmepumpe oder – sofern technisch und wirtschaftlich sinnvoll – über Netzladen des Batteriespeichers geschehen.'),
      ),
      p(
        t('Die Speicherlogik dazu erklären wir im Detail in '),
        link('Stromspeicher aus dem Netz laden: Wann dynamisches Laden sinnvoll ist', '/strom-energiemanagement/stromspeicher-aus-netz-laden-dynamisch-sinnvoll'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Wintertag: Die Wärmepumpe darf nicht zum Preis-Spekulanten werden')),
      p(
        t('Im Winter ist die Wärmepumpe der größte kontinuierliche Verbraucher des Hauses. Sie bietet Flexibilität, aber deutlich weniger als ein E-Auto.'),
      ),
      p(
        t('Das HEMS kann Heizphasen moderat verschieben oder Warmwasser in günstigere Zeitfenster legen. Es sollte aber niemals versuchen, den gesamten Wärmebedarf in ein kurzes Billigpreisfenster zu pressen.'),
      ),
      p(
        t('Ein Beispiel: Strom ist um 4 Uhr billig. Deshalb die Vorlauftemperatur stark anzuheben, damit die Wärmepumpe später mehrere Stunden ausbleiben kann, kann die Jahresarbeitszahl verschlechtern. Dann wird zwar günstigerer Strom eingekauft, aber mehr davon benötigt.'),
      ),
      p(
        bold('Zuerst thermische Effizienz, danach Preisoptimierung.'),
      ),
    ),

    hinweisBlock(
      'Die billigste Kilowattstunde ist nicht billig, wenn du dafür mehr davon brauchst',
      p(
        t('Bei Wärmepumpen müssen Strompreis und COP beziehungsweise Anlagenwirkungsgrad gemeinsam betrachtet werden. Eine gute HEMS-Regel verschiebt Betrieb innerhalb effizienter Grenzen – sie verändert nicht die gesamte Heizungsstrategie nur wegen eines kurzfristigen Preissignals.'),
      ),
    ),

    textBlock(
      h('h2', t('E-Auto im Winter: Ladeziel statt „sofort mit 11 kW"')),
      p(
        t('Das E-Auto bleibt auch im Winter der flexibelste große Verbraucher. Das HEMS benötigt idealerweise keine komplizierte Nutzerinteraktion, sondern nur ein Ziel:'),
      ),
      p(
        bold('„Morgen um 7 Uhr brauche ich 80 % Ladezustand."'),
      ),
      p(
        t('Innerhalb dieses Fensters kann das System entscheiden, ob es sofort lädt, ein günstigeres Tarifzeitfenster abwartet oder eine kleine PV-Erzeugung am nächsten Vormittag berücksichtigt.'),
      ),
      p(
        t('Diese Logik ist deutlich leistungsfähiger als ein fester Timer. Ein Timer kennt weder Strompreis noch PV-Prognose noch den Ladebedarf des Fahrzeugs.'),
      ),
    ),

    textBlock(
      h('h2', t('Dynamischer Stromtarif: Das Haus bekommt eine zusätzliche Zeitachse')),
      p(
        t('Mit einem dynamischen Stromtarif kommt zum Energiefluss eine weitere Information: der Preis der nächsten Stunden beziehungsweise Tarifintervalle.'),
      ),
      p(
        t('Ein HEMS kann dann beispielsweise unterscheiden:'),
      ),
      ul(
        p(t('PV-Strom jetzt direkt verbrauchen,')),
        p(t('günstigen Netzstrom für ein später ohnehin benötigtes Fahrzeugladen nutzen,')),
        p(t('Speicher nur dann aus dem Netz laden, wenn der Preisabstand groß genug ist,')),
        p(t('teuren Abendbezug durch zuvor gespeicherte Energie vermeiden.')),
      ),
      p(
        t('Ein dynamischer Tarif ist deshalb vor allem ein '),
        bold('Flexibilitätstarif'),
        t('. Ohne verschiebbare Verbraucher ist der Vorteil begrenzt. Mehr dazu in '),
        link('Dynamischer Stromtarif mit PV und Speicher: Wann er sich wirklich lohnt', '/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Negative Strompreise: nicht mehr verbrauchen – sondern besser verschieben')),
      p(
        t('Sehr niedrige oder negative Börsenpreise sind ein extremes Preissignal. Ein intelligentes Haus sollte darauf nicht mit künstlichem Mehrverbrauch reagieren.'),
      ),
      p(
        t('Sinnvoll ist nur die Verschiebung von Energie, die ohnehin gebraucht wird:'),
      ),
      ul(
        p(t('E-Auto früher laden,')),
        p(t('Warmwasser innerhalb sinnvoller Grenzen vorziehen,')),
        p(t('Speicher bei ausreichender Preis- und Wirkungsgradmarge gezielt laden,')),
        p(t('andere planbare Verbraucher in ein günstiges Zeitfenster legen.')),
      ),
      p(
        t('Was negative Preise für PV-Betreiber konkret bedeuten, erklären wir in '),
        link('Negative Strompreise 2026: Problem für PV oder Chance für Speicher und E-Auto?', '/strom-energiemanagement/negative-strompreise-2026-pv-speicher-eauto'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('§ 14a: Wenn das Netz eine Leistungsgrenze vorgibt')),
      p(
        t('Wallbox, Wärmepumpe und netzladender Stromspeicher können als steuerbare Verbrauchseinrichtungen unter § 14a EnWG fallen. Bei einer konkreten Netzengpass-Situation darf der Netzbetreiber ihren '),
        bold('netzwirksamen Leistungsbezug'),
        t(' vorübergehend begrenzen.'),
      ),
      p(
        t('Mit einem EMS muss nicht jedes Gerät unabhängig gedimmt werden. Der Netzbetreiber kann eine gemeinsame Leistungsobergrenze für die angeschlossenen steuerbaren Verbraucher übermitteln. Das EMS verteilt diese Leistung anschließend selbst.'),
      ),
      p(
        t('Das erlaubt sinnvolle Prioritäten. Benötigt die Wärmepumpe gerade Leistung für den Heizbetrieb, kann das E-Auto langsamer laden. Muss das Auto in einer Stunde los, kann das EMS mehr Leistung zur Wallbox geben und einen anderen flexiblen Verbraucher zurücknehmen.'),
      ),
      p(
        t('Eigener PV-Strom kann zusätzlich genutzt werden. Die Netzgrenze bezieht sich auf den tatsächlichen Bezug aus dem öffentlichen Netz.'),
      ),
    ),

    tabelleBlock('Beispiel einer EMS-Verteilung im §14a-Fall', [
      {
        spalte1: 'Normale Situation',
        spalte2: 'Wallbox 7 kW · Wärmepumpe 2 kW · Speicher lädt 2 kW',
        spalte3: 'Gesamtsteuerung richtet sich nach Haus, PV und Preisen',
      },
      {
        spalte1: 'Netzseitige Begrenzung',
        spalte2: 'EMS erhält eine geringere zulässige Bezugsleistung',
        spalte3: 'EMS verteilt sie nach Prioritäten auf die steuerbaren Verbraucher',
      },
      {
        spalte1: 'Gleichzeitig 5 kW PV',
        spalte2: 'PV-Leistung kann innerhalb der Kundenanlage zusätzlich genutzt werden',
        spalte3: 'Nur der zulässige Bezug aus dem öffentlichen Netz ist begrenzt',
      },
    ]),

    p(
      t('Die Netzentgeltseite dazu erklären wir in '),
      link('Zeitvariable Netzentgelte nach § 14a: Was Modul 3 bringt', '/strom-energiemanagement/zeitvariable-netzentgelte-paragraph-14a-modul-3'),
      t('.'),
    ),

    textBlock(
      h('h2', t('Smart Meter: Das Energiesystem braucht einen verlässlichen Netz-Messpunkt')),
      p(
        t('Damit ein HEMS sinnvoll optimieren kann, muss es wissen, was am Netzanschluss passiert. Für viele lokale Regelungen wird dafür zusätzlich ein separater Energiemesser des Wechselrichter- oder HEMS-Systems genutzt.'),
      ),
      p(
        t('Das regulatorische intelligente Messsystem hat eine andere Rolle: Es ist die offizielle Mess- und Kommunikationsinfrastruktur für zeitaufgelöste Abrechnung und verschiedene energiewirtschaftliche Prozesse. Dynamische Stromtarife benötigen ein solches iMSys.'),
      ),
      p(
        t('Das Smart Meter ersetzt das HEMS nicht. Es liefert aber einen wichtigen Baustein für ein Energiesystem, das künftig stärker mit Strommarkt und Netz kommuniziert.'),
      ),
      p(
        t('Mehr dazu in '),
        link('Smart Meter 2026: Wer einen braucht, was er kostet und was er bei PV wirklich bringt', '/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Backup-Reserve: Wirtschaftliche Optimierung hat nicht immer Priorität')),
      p(
        t('Ein Stromspeicher kann neben Eigenverbrauch und Tarifoptimierung eine weitere Aufgabe haben: eine Reserve für Backup- oder Notstrombetrieb.'),
      ),
      p(
        t('Wenn der Betreiber beispielsweise dauerhaft mindestens 20 % Ladezustand als Notfallreserve wünscht, muss das HEMS diese Grenze respektieren. Es darf die Batterie nicht bis auf den technisch möglichen Mindestwert entladen, nur weil der Strompreis gerade hoch ist.'),
      ),
      p(
        t('Das zeigt gut, warum Energiemanagement immer Zielkonflikte lösen muss. '),
        bold('Resilienz, Komfort und Wirtschaftlichkeit'),
        t(' sind unterschiedliche Ziele. Der Betreiber sollte festlegen können, was ihm wichtiger ist.'),
      ),
    ),

    textBlock(
      h('h2', t('Ein kompletter Sommertag – vereinfacht')),
      p(
        t('So könnte ein sinnvoll gesteuerter Sommertag in einem Haus mit 12-kWp-PV, Batteriespeicher, Wärmepumpe und E-Auto aussehen:'),
      ),
    ),

    tabelleBlock('Beispielhafter Sommertag mit HEMS', [
      {
        spalte1: '06:00–09:00',
        spalte2: 'PV übernimmt Hausverbrauch, Speicher lädt nur moderat',
        spalte3: 'Kapazität für die Mittagsproduktion freihalten',
      },
      {
        spalte1: '09:00–12:00',
        spalte2: 'Wallbox nutzt PV-Überschuss; Speicher lädt parallel je nach Prognose',
        spalte3: 'Abfahrtsziel des Autos und erwartete PV-Spitze abwägen',
      },
      {
        spalte1: '12:00–15:00',
        spalte2: 'Hohe PV-Leistung lädt Speicher, Auto und ggf. Warmwasser',
        spalte3: 'Netzeinspeisung und mögliche Abregelung minimieren',
      },
      {
        spalte1: '15:00–18:00',
        spalte2: 'Speicher wird auf gewünschten Abend-SOC gebracht',
        spalte3: 'Nicht unnötig lange bei 100 % stehen lassen',
      },
      {
        spalte1: '18:00–24:00',
        spalte2: 'Speicher versorgt Haus; Fahrzeug nur laden, wenn Ladeziel es verlangt',
        spalte3: 'Teuren Netzbezug reduzieren',
      },
    ]),

    textBlock(
      h('h2', t('Ein kompletter Wintertag – vereinfacht')),
      p(
        t('Im Winter verschieben sich die Prioritäten:'),
      ),
    ),

    tabelleBlock('Beispielhafter Wintertag mit HEMS', [
      {
        spalte1: '00:00–06:00',
        spalte2: 'Günstige Preisfenster optional für Fahrzeug oder Speicher nutzen',
        spalte3: 'Nur laden, wenn späterer Nutzen und Wirkungsgrad die Rechnung tragen',
      },
      {
        spalte1: '06:00–10:00',
        spalte2: 'Wärmepumpe deckt Wärmebedarf effizient; Hausverbrauch hat Vorrang',
        spalte3: 'Keine aggressive Preisoptimierung zulasten des COP',
      },
      {
        spalte1: '10:00–15:00',
        spalte2: 'Kleine PV-Erzeugung möglichst direkt nutzen',
        spalte3: 'Warmwasser oder Wallbox können verfügbaren Überschuss aufnehmen',
      },
      {
        spalte1: '15:00–20:00',
        spalte2: 'Gespeicherte günstige Energie reduziert teuren Abendbezug',
        spalte3: 'Wärmepumpe bleibt innerhalb komfortabler Betriebsgrenzen',
      },
      {
        spalte1: '20:00–24:00',
        spalte2: 'HEMS plant nächsten Tag aus Wetter, Preisen und Ladezielen',
        spalte3: 'Entscheidet erst dann über mögliches Netzladen',
      },
    ]),

    textBlock(
      h('h2', t('Warum offene Schnittstellen im Alltag wichtiger sind als im Prospekt')),
      p(
        t('Ein Energiesystem wird über Jahre erweitert und repariert. Vielleicht kommt das E-Auto erst zwei Jahre nach der PV-Anlage. Die Wärmepumpe wird später eingebaut. Nach zehn Jahren muss der Wechselrichter ersetzt werden.'),
      ),
      p(
        t('Wenn alle Steuerungsfunktionen ausschließlich innerhalb eines geschlossenen Herstellerökosystems funktionieren, kann jede spätere Änderung schwierig werden.'),
      ),
      p(
        t('Deshalb sollten relevante Geräte dokumentierte Schnittstellen besitzen und möglichst lokal erreichbar sein. Ein offenes HEMS kann dann verschiedene Hersteller zusammenführen und die Steuerungslogik im Haus erhalten, auch wenn einzelne Komponenten ersetzt werden.'),
      ),
      p(
        t('Offen bedeutet nicht „alles funktioniert mit allem". Es bedeutet, dass Integration technisch möglich und nicht von vornherein ausgeschlossen ist.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ein HEMS nicht tun sollte')),
      ul(
        p(t('den Speicher wegen jeder minimalen Preisdifferenz unnötig laden und entladen,')),
        p(t('die Wärmepumpe mit ineffizienten Temperaturen nur nach Strompreis fahren,')),
        p(t('ein E-Auto langsam lassen, obwohl das Abfahrtsziel gefährdet ist,')),
        p(t('den Speicher nachts voll laden, obwohl am nächsten Tag hoher PV-Ertrag erwartet wird,')),
        p(t('gesetzliche oder netzseitige Leistungsgrenzen eigenmächtig umgehen,')),
        p(t('bei Internetausfall zentrale lokale Funktionen vollständig verlieren,')),
        p(t('Entscheidungen treffen, die der Betreiber weder nachvollziehen noch übersteuern kann.')),
      ),
    ),

    textBlock(
      h('h2', t('Die wichtigste HEMS-Regel: erst Pflichten, dann Optimierung')),
      p(
        t('Eine robuste Steuerungslogik kann man als Prioritätenpyramide verstehen:'),
      ),
      ul(
        p(t('1. Technische Sicherheit und Gerätegrenzen.')),
        p(t('2. Gesetzliche und netzseitige Vorgaben.')),
        p(t('3. Komfortziele: Wärme, Warmwasser, Abfahrts-Ladezustand.')),
        p(t('4. gewünschte Backup-Reserve.')),
        p(t('5. effiziente Nutzung des eigenen PV-Stroms.')),
        p(t('6. Strompreis- und Netzentgeltoptimierung.')),
      ),
      p(
        t('Ein System, das diese Reihenfolge umkehrt und wegen drei Cent Preisvorteil Komfort oder Batterielebensdauer opfert, ist zwar automatisiert – aber nicht intelligent.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Praxis-Check für ein Energiesystem')),
      p(
        t('Wenn wir PV, Speicher, Wallbox und Wärmepumpe als Gesamtsystem planen oder eine bestehende Anlage optimieren, würden wir mindestens diese Punkte prüfen:'),
      ),
      ul(
        p(t('Welche Komponenten sind bereits vorhanden und welche Schnittstellen besitzen sie?')),
        p(t('Wo wird Netzbezug und Einspeisung zuverlässig gemessen?')),
        p(t('Welche Geräte lassen sich wirklich steuern – nicht nur auslesen?')),
        p(t('Welche PV- und Verbrauchsprognosen kann das System nutzen?')),
        p(t('Welches Ladeziel und welche Abfahrtszeit kann die Wallbox berücksichtigen?')),
        p(t('Welche Sollwerte darf das HEMS bei der Wärmepumpe verändern?')),
        p(t('Kann der Speicher prognosebasiert laden und optional Netzstrom aufnehmen?')),
        p(t('Welche §14a-Regeln und Netzentgeltmodule gelten?')),
        p(t('Ist ein intelligentes Messsystem vorhanden oder geplant?')),
        p(t('Welche Funktionen laufen lokal weiter, wenn Internet oder Hersteller-Cloud ausfallen?')),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('PV, Speicher, Wallbox und Wärmepumpe intelligent zu steuern bedeutet nicht, überall möglichst viel Automatik einzubauen. Es bedeutet, die '),
        bold('richtige Entscheidung zum richtigen Zeitpunkt'),
        t(' zu treffen.'),
      ),
      p(
        t('Im Sommer heißt das oft: Speicherplatz für die Mittags-PV freihalten, das E-Auto direkt mit Solarstrom laden und Warmwasser in die Erzeugungsphase verschieben. Im Winter heißt es eher: wenig PV intelligent verteilen, flexible Verbraucher nach günstigen Zeitfenstern planen und die Wärmepumpe trotzdem effizient betreiben.'),
      ),
      p(
        t('Smart Meter, dynamische Tarife und § 14a liefern neue Informationen und Randbedingungen. Das HEMS verbindet sie mit dem Zustand des Hauses.'),
      ),
      p(
        t('Genau dadurch entsteht aus vier einzelnen Geräten ein Energiesystem: '),
        bold('nicht weil alles dieselbe Marke trägt, sondern weil alles nach einer gemeinsamen Logik arbeitet.'),
      ),
    ),

    ctaBlock({
      titel: 'Dein Haus als Energiesystem planen',
      text:
        'Du planst PV, Speicher, Wallbox und Wärmepumpe gemeinsam – oder hast bereits mehrere Geräte, die in getrennten Apps arbeiten? Wir prüfen Schnittstellen, Lastprofil, Smart Meter, §14a und Steuerungsmöglichkeiten und entwickeln daraus ein System, das Solarstrom, Komfort und Stromkosten sinnvoll zusammenbringt.',
      buttonText: 'Energiesystem besprechen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Wie sollte ein HEMS PV, Speicher und Wallbox priorisieren?',
      'Es gibt keine starre Reihenfolge, die immer optimal ist. Das HEMS sollte PV-Ertrag, Speicherfüllstand, erwarteten Abendverbrauch, Abfahrtszeit und Ladeziel des E-Autos gemeinsam betrachten. Direkter PV-Strom ins Auto kann beispielsweise sinnvoller sein als der Umweg über den Heimspeicher, wenn das Fahrzeug bald benötigt wird.',
    ),
    faqItem(
      'Sollte der Batteriespeicher morgens sofort mit PV-Strom vollgeladen werden?',
      'Nicht unbedingt. Bei einem sonnigen Tag kann prognosebasiertes Laden sinnvoller sein. Der Speicher hält vormittags Kapazität frei und lädt stärker zur Mittagszeit, wenn die PV-Erzeugung hoch ist. HTW Berlin und KIT zeigen, dass solche Strategien Erzeugungsspitzen besser aufnehmen und lange Standzeiten bei hohen Ladezuständen reduzieren können.',
    ),
    faqItem(
      'Was sollte zuerst mit PV-Überschuss geladen werden – Speicher oder E-Auto?',
      'Das hängt vom Nutzungsszenario ab. Muss das Auto bald losfahren, kann direkte PV-Ladung sinnvoller sein. Wird das Fahrzeug erst am nächsten Tag gebraucht und hoher Abendverbrauch erwartet, kann mehr Energie in den Heimspeicher fließen. Ein HEMS sollte beide Ziele gleichzeitig berücksichtigen.',
    ),
    faqItem(
      'Kann die Wärmepumpe nach PV-Überschuss gesteuert werden?',
      'Ja, innerhalb sinnvoller thermischer Grenzen. Beispielsweise kann Warmwasser bei hoher PV-Erzeugung etwas früher bereitet werden. Die Wärmepumpe sollte aber nicht mit unnötig hohen Temperaturen betrieben werden, nur um Solarstrom aufzunehmen, weil dadurch ihre Effizienz sinken kann.',
    ),
    faqItem(
      'Wie kann ein dynamischer Stromtarif in ein HEMS eingebunden werden?',
      'Das HEMS kann die kommenden Strompreise mit PV-Prognose, Speicherfüllstand, E-Auto-Ladeziel und Wärmebedarf kombinieren. Flexible Verbräuche werden dann in günstige Zeitfenster verschoben. Voraussetzung für einen dynamischen Stromtarif ist ein intelligentes Messsystem.',
    ),
    faqItem(
      'Sollte ein HEMS den Speicher bei niedrigem Strompreis automatisch aus dem Netz laden?',
      'Nur wenn der erwartete Preisvorteil groß genug ist und die PV-Prognose freie Kapazität erlaubt. Speicherverluste, Batteriebeanspruchung, der spätere Verbrauch und gegebenenfalls §14a sowie das Messkonzept müssen berücksichtigt werden. Ein niedriger Preis allein ist kein ausreichendes Signal.',
    ),
    faqItem(
      'Wie arbeitet ein HEMS mit §14a zusammen?',
      'Bei mehreren steuerbaren Verbrauchseinrichtungen kann der Netzbetreiber in einer Engpasssituation eine gemeinsame netzwirksame Leistungsobergrenze vorgeben. Das EMS verteilt die verfügbare Bezugsleistung anschließend selbst auf Wallbox, Wärmepumpe und netzladenden Speicher. Eigener PV-Strom kann innerhalb der Kundenanlage zusätzlich genutzt werden.',
    ),
    faqItem(
      'Kann der Netzbetreiber durch §14a auch meinen Haushaltsstrom begrenzen?',
      'Nein. Die §14a-Regeln betreffen steuerbare Verbrauchseinrichtungen wie Wallbox, Wärmepumpe oder netzladenden Speicher. Der normale Haushaltsstrom bleibt unberührt. Auch eigener PV-Strom kann innerhalb der Kundenanlage weiterhin genutzt werden.',
    ),
    faqItem(
      'Welche Rolle spielt das Smart Meter im Energiesystem?',
      'Das intelligente Messsystem übernimmt die offizielle zeitaufgelöste Messung und sichere Kommunikation am Netzanschluss und ist unter anderem Voraussetzung für dynamische Stromtarife. Es ersetzt aber kein HEMS. Die Steuerungslogik für Speicher, Wallbox und Wärmepumpe liegt im Energiemanagement.',
    ),
    faqItem(
      'Kann ein HEMS eine Notstromreserve im Speicher berücksichtigen?',
      'Ja, wenn das Speichersystem eine entsprechende Sollwertsteuerung zulässt. Der Betreiber kann beispielsweise festlegen, dass ein bestimmter Mindest-Ladezustand für Backup erhalten bleibt. Wirtschaftliche Optimierung darf diese Reserve dann nicht unterschreiten.',
    ),
    faqItem(
      'Ist ein herstellerübergreifendes Energiesystem möglich?',
      'Ja, wenn die Komponenten geeignete Schnittstellen bereitstellen und das HEMS diese unterstützt. Entscheidend ist nicht nur, ob Daten ausgelesen werden können, sondern ob relevante Sollwerte wie Ladeleistung, Leistungsgrenzen oder Freigaben tatsächlich steuerbar sind.',
    ),
    faqItem(
      'Was ist wichtiger: hohe Autarkie oder niedrige Stromkosten?',
      'Das hängt vom Ziel des Betreibers ab. Hohe Autarkie kann ein sinnvolles Ziel sein, ist aber nicht automatisch die wirtschaftlich beste Betriebsstrategie. Ein gutes HEMS sollte Eigenverbrauch, Strompreise, Speicherverluste, Komfort, Lebensdauer und gegebenenfalls Backup-Anforderungen gemeinsam optimieren.',
    ),
  ],
}

await upsertRatgeberArticle(article)
