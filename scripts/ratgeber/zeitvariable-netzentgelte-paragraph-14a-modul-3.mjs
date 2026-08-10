// scripts/articles/zeitvariable-netzentgelte-paragraph-14a-modul-3.mjs

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
  titel: 'Zeitvariable Netzentgelte nach § 14a: Was Modul 3 bringt – und für wen es sich lohnt',
  slug: 'zeitvariable-netzentgelte-paragraph-14a-modul-3',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'Seit April 2025 müssen Netzbetreiber mit Modul 3 ein zeitvariables Netzentgelt für steuerbare Verbrauchseinrichtungen anbieten. Wer Wallbox, Wärmepumpe oder netzladenden Speicher flexibel betreiben kann, kann Verbrauch aus teuren Hochlastzeiten in günstigere Netzzeiten verschieben. Aber Modul 3 ist kein dynamischer Stromtarif, funktioniert nur zusammen mit Modul 1 und braucht ein intelligentes Messsystem. Was 2026 wirklich gilt – und wann sich der Wechsel lohnt.',
  lesezeit: 16,

  seo: seo(
    '§14a Modul 3: Zeitvariable Netzentgelte 2026 erklärt | PEAK.Energy',
    'Zeitvariable Netzentgelte nach §14a EnWG: Modul 1, 2 und 3, Voraussetzungen, HT/NT/ST, Smart Meter, Wallbox, Wärmepumpe, Speicher und wann Modul 3 sich lohnt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Seit dem '),
      bold('1. April 2025'),
      t(' müssen Netzbetreiber Modul 3 anbieten: ein zeitvariables Netzentgelt mit Hoch-, Standard- und Niedrigtarifzeiten.'),
    ),
    summaryPoint(
      t('Modul 3 ist '),
      bold('kein eigenständiges Modul'),
      t(', sondern wird immer zusätzlich zu Modul 1 gewählt. Eine Kombination mit Modul 2 ist nicht möglich.'),
    ),
    summaryPoint(
      t('Voraussetzung sind eine steuerbare Verbrauchseinrichtung, eine Marktlokation ohne registrierende Leistungsmessung und ein '),
      bold('intelligentes Messsystem'),
      t('.'),
    ),
    summaryPoint(
      t('Das zeitvariable Netzentgelt gilt für den '),
      bold('gesamten Netzbezug der betreffenden Marktlokation'),
      t(' – nicht nur für die Wallbox oder Wärmepumpe. Das kann bei einem gemeinsamen Hauszähler besonders interessant sein.'),
    ),
    summaryPoint(
      t('Modul 3 lohnt sich vor allem, wenn größere Strommengen '),
      bold('wirklich in die Niedriglastzeiten verschoben werden können'),
      t('. Typischer Kandidat ist das E-Auto; mit HEMS können zusätzlich Speicher und Wärmepumpe sinnvoll eingebunden werden.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Was hat § 14a EnWG mit deiner Stromrechnung zu tun?')),
      p(
        t('§ 14a EnWG regelt die netzorientierte Steuerung bestimmter größerer Stromverbraucher im Niederspannungsnetz. Dazu gehören vor allem private Wallboxen, Wärmepumpen, Klimaanlagen und Stromspeicher, soweit diese Strom aus dem öffentlichen Netz beziehen können.'),
      ),
      p(
        t('Die Grundidee ist ein Tausch: Der Netzbetreiber darf den Leistungsbezug einer steuerbaren Verbrauchseinrichtung in einer konkreten Netzengpass-Situation vorübergehend reduzieren. Im Gegenzug erhält der Betreiber '),
        bold('reduzierte Netzentgelte'),
        t('.'),
      ),
      p(
        t('Seit 2024 gibt es dafür die Module 1 und 2. Seit dem '),
        bold('1. April 2025'),
        t(' kommt Modul 3 hinzu: ein zeitvariables Netzentgelt, das Verbrauch in netzschwache Zeiten verschieben soll.'),
      ),
      p(
        t('2026 ist das besonders interessant, weil immer mehr Haushalte gleichzeitig PV, Speicher, Wärmepumpe und E-Auto betreiben. Dann geht es nicht mehr nur darum, wie viel Strom verbraucht wird – sondern zunehmend auch '),
        bold('wann'),
        t('.'),
      ),
    ),

    hinweisBlock(
      'Stand dieses Artikels: 10. August 2026',
      p(
        t('Dieser Beitrag bildet den aktuellen Stand der Bundesnetzagentur und der §14a-Festlegungen ab. Die konkrete Höhe der Netzentgelte und die täglichen Zeitfenster von Modul 3 unterscheiden sich je nach Netzbetreiber und Kalenderjahr. Für eine konkrete Wirtschaftlichkeitsrechnung braucht man deshalb immer das aktuelle Preisblatt des zuständigen Netzbetreibers.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Geräte fallen unter § 14a?')),
      p(
        t('Für neu in Betrieb genommene steuerbare Verbrauchseinrichtungen gelten die neuen Regeln seit dem 1. Januar 2024 grundsätzlich ab einer Netzanschlussleistung von '),
        bold('mehr als 4,2 kW'),
        t('. Typische Geräte sind:'),
      ),
      ul(
        p(t('private Ladeeinrichtungen für Elektroautos (Wallboxen),')),
        p(t('Wärmepumpen einschließlich elektrischer Zusatz- oder Notheizungen,')),
        p(t('Anlagen zur Raumkühlung,')),
        p(t('Stromspeicher hinsichtlich ihres Strombezugs aus dem öffentlichen Netz.')),
      ),
      p(
        t('Der normale Haushaltsstrom – Licht, Kühlschrank, Herd oder Fernseher – wird dadurch nicht steuerbar. Auch eine PV-Anlage wird über § 14a nicht in ihrer Einspeisung gedimmt. § 14a betrifft den '),
        bold('Strombezug aus dem Netz'),
        t('.'),
      ),
    ),

    tabelleBlock('§14a – typische Geräte im Einfamilienhaus', [
      {
        spalte1: '11-kW-Wallbox',
        spalte2: 'Ja',
        spalte3: 'Typische steuerbare Verbrauchseinrichtung über 4,2 kW',
      },
      {
        spalte1: 'Wärmepumpe',
        spalte2: 'In der Regel ja, wenn die relevante Anschlussleistung über 4,2 kW liegt',
        spalte3: 'Zusatz- und Notheizungen werden mit betrachtet',
      },
      {
        spalte1: 'Batteriespeicher',
        spalte2: 'Ja, wenn er netzwirksam Strom aus dem öffentlichen Netz beziehen kann und die Grenze überschreitet',
        spalte3: 'Reine Softwareeinstellung auf PV-Ladung verhindert die Einordnung nicht zwingend',
      },
      {
        spalte1: 'PV-Anlage',
        spalte2: 'Nein',
        spalte3: '§14a regelt Verbrauch, nicht PV-Einspeisung',
      },
      {
        spalte1: 'Haushaltsgeräte',
        spalte2: 'Nein',
        spalte3: 'Der normale Haushaltsverbrauch bleibt von der Steuerung unberührt',
      },
    ]),

    textBlock(
      h('h2', t('Was passiert bei einer Netzsteuerung?')),
      p(
        t('Der Netzbetreiber darf eine steuerbare Verbrauchseinrichtung nicht beliebig abschalten. Die Steuerung ist für Situationen vorgesehen, in denen im lokalen Netz eine konkrete Überlastung oder Beschädigung droht.'),
      ),
      p(
        t('Bei der Direktansteuerung muss grundsätzlich eine Mindestleistung von '),
        bold('4,2 kW'),
        t(' zur Verfügung stehen. Ein E-Auto kann also weiterladen und eine typische Wärmepumpe weiterarbeiten. Bei größeren Wärmepumpen und bei mehreren Geräten gelten angepasste Berechnungen.'),
      ),
      p(
        t('Besonders interessant wird ein '),
        bold('Energiemanagementsystem (EMS/HEMS)'),
        t(': Statt jedes Gerät einzeln zu dimmen, kann der Netzbetreiber eine gesamthafte Leistungsgrenze für die steuerbaren Verbraucher vorgeben. Das EMS verteilt diese Leistung dann selbst auf Wallbox, Wärmepumpe und Speicher.'),
      ),
      p(
        t('Eigener PV-Strom darf dabei zusätzlich genutzt werden. Wenn die Wallbox beispielsweise 8 kW lädt, davon aber 4 kW direkt von der PV-Anlage kommen, ist für § 14a nur der tatsächliche netzwirksame Bezug entscheidend.'),
      ),
    ),

    tippBlock(
      'PV + mehrere steuerbare Verbraucher: EMS statt Einzellösungen mitdenken',
      p(
        t('Wer PV, Speicher, Wallbox und Wärmepumpe kombiniert, sollte die §14a-Steuerung nicht als isolierte Box neben jedem Gerät planen. Ein EMS kann den verfügbaren Netzbezug flexibel verteilen und gleichzeitig eigenen Solarstrom berücksichtigen. Das ist technisch deutlich eleganter und schafft später die Grundlage für weitere Optimierungen.'),
      ),
    ),

    textBlock(
      h('h2', t('Was sind Modul 1, Modul 2 und Modul 3?')),
      p(
        t('Die drei Module werden häufig in einen Topf geworfen. Tatsächlich lösen sie unterschiedliche Aufgaben.'),
      ),
    ),

    tabelleBlock('§14a Module im direkten Vergleich', [
      {
        spalte1: 'Modul 1',
        spalte2: 'Pauschale jährliche Netzentgeltreduzierung',
        spalte3: 'Grundmodul; kein separater Zähler zwingend erforderlich',
      },
      {
        spalte1: 'Modul 2',
        spalte2: 'Netzentgelt-Arbeitspreis der steuerbaren Verbrauchseinrichtung wird auf 40 % reduziert',
        spalte3: 'Separater Zähler / separate Marktlokation erforderlich; häufig interessant bei hohem Wärmepumpenverbrauch',
      },
      {
        spalte1: 'Modul 3',
        spalte2: 'Zeitvariables Netzentgelt mit HT, ST und NT',
        spalte3: 'Nur zusätzlich zu Modul 1; iMSys erforderlich; keine Kombination mit Modul 2',
      },
    ]),

    p(
      t('Wenn keine andere Auswahl getroffen wird, ist '),
      bold('Modul 1 das Grundmodul'),
      t('. Modul 2 und Modul 3 müssen ausdrücklich gewählt werden.'),
    ),

    textBlock(
      h('h2', t('Wie funktioniert Modul 3 konkret?')),
      p(
        t('Modul 3 teilt das Netzentgelt in drei Tarifstufen:'),
      ),
      ul(
        p(t('HT – Hochlasttarif: höheres Netzentgelt in stark belasteten Netzzeiten,')),
        p(t('ST – Standardtarif: entspricht dem normalen Arbeitspreis der Niederspannungs-Netzentgelte ohne Leistungsmessung,')),
        p(t('NT – Niedriglasttarif: niedrigeres Netzentgelt in schwächer belasteten Netzzeiten.')),
      ),
      p(
        t('Der Netzbetreiber legt die Zeitfenster für sein gesamtes Netzgebiet '),
        bold('kalenderjährlich'),
        t(' fest. Die Zeitfenster wiederholen sich täglich und unterscheiden sich innerhalb des Jahres nicht nach Wochentagen.'),
      ),
      p(
        t('Der Netzbetreiber darf in maximal zwei Quartalen auf eine zeitvariable Abrechnung verzichten. In diesen Quartalen wird dann der Standardtarif ST verwendet. In mindestens zwei Quartalen eines Jahres muss Modul 3 tatsächlich zeitvariabel abgerechnet werden.'),
      ),
      p(
        t('Wichtig: Das sind keine kurzfristig wechselnden Preise wie an der Strombörse. Die Modul-3-Zeitfenster stehen im Voraus fest. Das macht das System einfacher planbar – aber auch weniger dynamisch.'),
      ),
    ),

    hinweisBlock(
      'Modul 3 ist kein dynamischer Stromtarif',
      p(
        t('Ein dynamischer Stromtarif verändert den Energiepreis entsprechend dem Strommarkt. Modul 3 verändert dagegen den Netzentgelt-Anteil entsprechend den vom lokalen Netzbetreiber festgelegten Zeitfenstern. Beide können gleichzeitig genutzt werden – ihre günstigen Zeiten müssen aber nicht übereinstimmen.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Voraussetzungen gelten für Modul 3?')),
      p(
        t('Nach der Bundesnetzagentur gelten für Modul 3 vier wesentliche Voraussetzungen:'),
      ),
      ul(
        p(t('Es ist mindestens eine steuerbare Verbrauchseinrichtung vorhanden.')),
        p(t('Der Betreiber wählt Modul 3 ausdrücklich zusätzlich zu Modul 1.')),
        p(t('Die betreffende Marktlokation wird ohne registrierende Leistungsmessung abgerechnet.')),
        p(t('Ein intelligentes Messsystem ist vorhanden.')),
      ),
      p(
        t('Das Smart Meter ist hier nicht nur Komfortfunktion, sondern für die zeitabhängige Abrechnung notwendig. Was iMSys, moderner Zähler und Smart-Meter-Gateway unterscheidet, erklären wir in '),
        link('Smart Meter 2026: Wer einen braucht, was er kostet und was er bei PV wirklich bringt', '/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Der überraschend wichtige Punkt: Modul 3 gilt für die ganze Marktlokation')),
      p(
        t('Einer der interessantesten Punkte wird häufig übersehen: Das zeitvariable Netzentgelt gilt nach der Bundesnetzagentur für den '),
        bold('gesamten Netzbezug der Marktlokation'),
        t(', über die die steuerbare Verbrauchseinrichtung abgerechnet wird.'),
      ),
      p(
        t('Hängt eine Wallbox also gemeinsam mit dem normalen Hausverbrauch an einer Marktlokation, werden die Modul-3-Zeitfenster nicht nur auf die Wallbox-kWh angewendet, sondern auf den gesamten Netzbezug dieser Marktlokation.'),
      ),
      p(
        t('Das bedeutet nicht, dass der Netzbetreiber den Haushaltsstrom steuern darf. Die Steuerbarkeit betrifft weiterhin nur die steuerbaren Verbrauchseinrichtungen. Die '),
        bold('Abrechnung des zeitvariablen Netzentgelts'),
        t(' kann aber breiter wirken.'),
      ),
      p(
        t('Damit wird die Wahl des Messkonzepts wirtschaftlich wichtiger: Gemeinsamer Zähler, separater Wärmepumpenzähler oder mehrere Marktlokationen können zu unterschiedlichen Ergebnissen führen.'),
      ),
    ),

    textBlock(
      h('h2', t('Für wen lohnt sich Modul 3 wahrscheinlich?')),
      p(
        t('Modul 3 belohnt keine bestimmte Technik. Es belohnt '),
        bold('verschiebbaren Netzbezug'),
        t('. Deshalb ist entscheidend, wie viele Kilowattstunden tatsächlich aus HT- oder ST-Zeiten in NT-Zeiten verschoben werden können.'),
      ),
    ),

    tabelleBlock('Typische Anwendungsfälle für Modul 3', [
      {
        spalte1: 'E-Auto mit mehreren Stunden Standzeit',
        spalte2: 'Sehr interessant',
        spalte3: 'Große Energiemenge lässt sich ohne Komfortverlust in günstige Netzzeiten verschieben',
      },
      {
        spalte1: 'Wärmepumpe im effizienten Betrieb',
        spalte2: 'Interessant, aber begrenzt flexibel',
        spalte3: 'Gebäude und Warmwasser bieten thermische Flexibilität; Effizienz darf nicht geopfert werden',
      },
      {
        spalte1: 'Netzladender Batteriespeicher',
        spalte2: 'Technisch interessant',
        spalte3: 'Ladezeit kann verschoben werden; PV-Prognose und Speicherverluste müssen berücksichtigt werden',
      },
      {
        spalte1: 'PV + Wallbox + Speicher + Wärmepumpe + HEMS',
        spalte2: 'Hohes Optimierungspotenzial',
        spalte3: 'Mehrere flexible Lasten können gemeinsam nach PV, Netzzeit und Strompreis geplant werden',
      },
      {
        spalte1: 'Kaum flexibler Netzbezug',
        spalte2: 'Eher wenig Zusatznutzen',
        spalte3: 'Wer Verbrauch nicht verschieben kann, profitiert wenig vom NT und riskiert mehr Bezug im HT',
      },
    ]),

    textBlock(
      h('h2', t('Warum das E-Auto der natürliche Kandidat für Modul 3 ist')),
      p(
        t('Die Bundesnetzagentur nennt Elektromobilität selbst als besonders attraktiven Anwendungsfall. Der Grund ist einfach: Das Auto benötigt eine bestimmte Energiemenge bis zur nächsten Abfahrt – der exakte Ladezeitpunkt ist häufig flexibel.'),
      ),
      p(
        t('Wenn das Fahrzeug abends um 18 Uhr angeschlossen wird und erst morgens um 7 Uhr wieder gebraucht wird, kann eine intelligente Steuerung das Laden innerhalb dieses Zeitfensters verschieben. Liegt der Niedriglasttarif beispielsweise nachts, ist das ohne Komfortverlust nutzbar.'),
      ),
      p(
        t('Mit PV kommt eine zweite Priorität hinzu: Tagsüber sollte eigener Solarstrom oft zuerst genutzt werden. Nachts kann dann der günstigere Netzzeitraum ergänzen, falls das Ladeziel noch nicht erreicht ist.'),
      ),
    ),

    textBlock(
      h('h2', t('Wärmepumpe: Modul 2 oder Modul 1 + 3?')),
      p(
        t('Bei Wärmepumpen wird die Entscheidung spannender. Modul 2 reduziert den Netzentgelt-Arbeitspreis auf '),
        bold('40 % des regulären Arbeitspreises'),
        t(' und kann deshalb bei hohem Wärmepumpenverbrauch attraktiv sein. Dafür ist ein separater Zähler erforderlich.'),
      ),
      p(
        t('Modul 3 dagegen funktioniert nur zusammen mit Modul 1 und setzt auf zeitliche Verschiebung. Ein separater Wärmepumpenzähler ist dafür nicht zwingend erforderlich; entscheidend ist die konkrete Marktlokation und das Messkonzept.'),
      ),
      p(
        t('Welche Variante günstiger ist, lässt sich nicht pauschal beantworten. Drei Dinge müssen gerechnet werden:'),
      ),
      ul(
        p(t('jährlicher Netzbezug der Wärmepumpe,')),
        p(t('Kosten des separaten Messkonzepts bei Modul 2,')),
        p(t('real verschiebbare Energiemenge in Modul-3-Niedriglastzeiten.')),
      ),
      p(
        t('Bei einer Wärmepumpe sollte außerdem niemals nur der Strompreis entscheiden. Wenn die Anlage für ein günstiges Zeitfenster mit unnötig hoher Vorlauftemperatur arbeitet, kann der schlechtere COP einen Teil der Ersparnis wieder vernichten.'),
      ),
    ),

    textBlock(
      h('h2', t('Speicher und Modul 3: günstig laden – aber nicht blind')),
      p(
        t('Ein Batteriespeicher kann hinsichtlich des Netzladens ebenfalls unter § 14a fallen. Damit kann Modul 3 technisch interessant werden: Netzstrom in einer Niedriglastzeit laden und später teuren Netzbezug vermeiden.'),
      ),
      p(
        t('Aber auch hier gilt: '),
        bold('Billiges Netzentgelt allein macht Netzladen noch nicht wirtschaftlich'),
        t('. Zusätzlich zählen Energiepreis, Lade- und Entladeverluste, Speicherbeanspruchung und die PV-Prognose für den nächsten Tag.'),
      ),
      p(
        t('Ein nachts vollgeladener Speicher kann am sonnigen Mittag keinen eigenen PV-Überschuss mehr aufnehmen. Deshalb muss ein HEMS Netzzeit und Strompreis immer zusammen mit dem erwarteten Solarertrag betrachten.'),
      ),
      p(
        t('Mehr zur Strompreis-Seite dieses Themas findest du in '),
        link('Dynamischer Stromtarif mit PV und Speicher: Wann er sich wirklich lohnt', '/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Modul 3 + dynamischer Stromtarif: zwei Signale gleichzeitig')),
      p(
        t('Wer Modul 3 mit einem dynamischen Stromtarif kombiniert, bekommt zwei unterschiedliche Preissignale:'),
      ),
      ul(
        p(t('Der Strommarkt sagt: Wann ist die Energie selbst günstig oder teuer?')),
        p(t('Der Netzbetreiber sagt über Modul 3: Wann ist der lokale Netzbezug günstig oder teuer?')),
      ),
      p(
        t('Diese Signale können zusammenpassen – beispielsweise wenn nachts sowohl Börsenstrom als auch Netzentgelt günstig sind. Sie können aber auch gegeneinander laufen.'),
      ),
      p(
        t('Dann braucht es eine Gesamtbetrachtung. Ein HEMS darf nicht nur den Börsenpreis ansehen und gleichzeitig einen teuren HT-Netzzeitraum ignorieren. Relevant ist der '),
        bold('gesamte variable Bezugspreis'),
        t('.'),
      ),
      p(
        t('Genau deshalb sind dynamischer Tarif und Modul 3 keine Konkurrenzprodukte. Sie optimieren zwei verschiedene Bestandteile derselben Kilowattstunde.'),
      ),
    ),

    tippBlock(
      'Nicht zwei Apps gegeneinander optimieren lassen',
      p(
        t('Wenn Wallbox, Speicher und Wärmepumpe jeweils eigene Tarifautomatiken besitzen, können sich deren Strategien widersprechen. Sinnvoller ist eine zentrale Logik, die PV-Prognose, Energiepreis, Modul-3-Zeitfenster und technische Randbedingungen gemeinsam bewertet.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie bestellt man Modul 3?')),
      p(
        t('Modul 3 kann grundsätzlich über den Lieferanten oder den Netzbetreiber ausgewählt werden. Die Bundesnetzagentur weist 2026 darauf hin, dass die Bestellung über den bestehenden Stromlieferanten in der Praxis häufig zügiger durch die Marktkommunikation läuft.'),
      ),
      p(
        t('Vereinfacht passiert anschließend Folgendes: Der Lieferant bestellt die relevanten Zählzeiten beim Netzbetreiber, der Netzbetreiber gibt die Konfiguration an den Messstellenbetreiber weiter, die Zeitfenster werden im intelligenten Messsystem hinterlegt und anschließend für die Abrechnung bereitgestellt.'),
      ),
      p(
        t('Wenn Modul 3 nicht ausdrücklich gewählt wird, bleibt es beim Grundmodul 1.'),
      ),
    ),

    textBlock(
      h('h2', t('Was 2026 in der Praxis noch nicht überall sauber funktioniert')),
      p(
        t('Auf dem Papier muss Modul 3 seit dem 1. April 2025 angeboten und abgerechnet werden. In der Praxis gibt es weiterhin Umsetzungsprobleme.'),
      ),
      p(
        t('Die Bundesnetzagentur hat im Mai 2026 öffentlich gemacht, dass Beschwerden insbesondere das zeitvariable Modul 3 betreffen, und wegen unzureichender Umsetzung Verwaltungsvollstreckungsmaßnahmen gegen Netzbetreiber eingeleitet.'),
      ),
      p(
        t('Für Kunden ist das wichtig: Wenn Lieferant oder Netzbetreiber pauschal behaupten, Modul 3 existiere nicht oder könne grundsätzlich nicht abgerechnet werden, sollte man genauer nachfragen. Gleichzeitig hilft es wenig, einen Tarif auf dem Papier zu optimieren, wenn Messstellenbetrieb und Marktkommunikation technisch noch nicht sauber zusammenspielen.'),
      ),
    ),

    hinweisBlock(
      'Anspruch auf Modul 3 heißt nicht automatisch sofortige technische Umsetzung',
      p(
        t('Der regulatorische Anspruch und die praktische Marktkommunikation sind zwei verschiedene Ebenen. Vor einer Wirtschaftlichkeitsrechnung sollte deshalb geklärt werden, ob intelligentes Messsystem, Lieferant, Netzbetreiber und Messstellenbetreiber den konkreten Fall bereits durchgängig abbilden können.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie rechnet man, ob sich Modul 3 lohnt?')),
      p(
        t('Eine seriöse Rechnung beginnt nicht bei der Tarifbezeichnung, sondern beim Lastprofil. Entscheidend sind vier Werte:'),
      ),
      ul(
        p(t('Wie viele kWh Netzstrom fallen heute in HT-, ST- und NT-Zeitfenster?')),
        p(t('Wie viele davon können realistisch in NT verschoben werden?')),
        p(t('Wie groß ist der Preisunterschied zwischen HT, ST und NT im konkreten Netzgebiet?')),
        p(t('Entstehen zusätzliche Kosten für Messung, Technik oder Tarif?')),
      ),
      p(
        t('Vereinfacht ist der Zusatznutzen von Modul 3 die Summe der vermiedenen Netzentgelte durch Lastverschiebung – abzüglich möglicher Mehrkosten und zusätzlicher HT-Bezüge.'),
      ),
      p(
        t('Das bedeutet auch: Zwei Nachbarn mit derselben 11-kW-Wallbox können zu völlig unterschiedlichen Ergebnissen kommen. Der eine lädt jeden Abend sofort um 18 Uhr. Der andere lässt das Fahrzeug automatisiert in die Niedriglastzeit verschieben. Die Hardware ist gleich – das Verbrauchsverhalten nicht.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Praxis-Check für Modul 3')),
      p(
        t('Vor einer Umstellung würden wir bei einem Einfamilienhaus diese Punkte prüfen:'),
      ),
      ul(
        p(t('Welche steuerbaren Verbrauchseinrichtungen sind vorhanden und wie sind sie angeschlossen?')),
        p(t('Welche Marktlokation und welches Messkonzept bestehen aktuell?')),
        p(t('Ist ein intelligentes Messsystem bereits vorhanden?')),
        p(t('Welche HT-, ST- und NT-Zeitfenster gelten beim zuständigen Netzbetreiber 2026?')),
        p(t('Wie groß ist der tatsächliche Netzbezug in diesen Zeitfenstern?')),
        p(t('Kann die Wallbox automatisiert verschoben werden?')),
        p(t('Wie viel thermische Flexibilität bietet die Wärmepumpe ohne Effizienzverlust?')),
        p(t('Kann der Speicher netzladen und sollte er das wirtschaftlich überhaupt tun?')),
        p(t('Gibt es ein HEMS, das Stromtarif, Netzzeit, PV-Prognose und Verbraucher gemeinsam steuert?')),
      ),
      p(
        t('Erst danach ist die Frage „Lohnt sich Modul 3?" sinnvoll beantwortbar.'),
      ),
    ),

    textBlock(
      h('h2', t('Fünf typische Missverständnisse zu Modul 3')),
      p(
        bold('„Modul 3 ist ein dynamischer Stromtarif." '),
        t('Nein. Modul 3 verändert das Netzentgelt, nicht den Börsen- oder Lieferantenpreis für Energie.'),
      ),
      p(
        bold('„Ich kann Modul 3 statt Modul 1 wählen." '),
        t('Nein. Modul 3 ist eine Ergänzung zu Modul 1.'),
      ),
      p(
        bold('„Modul 3 kann ich mit Modul 2 kombinieren." '),
        t('Nein. Diese Kombination ist nicht vorgesehen.'),
      ),
      p(
        bold('„Nur der Strom meiner Wallbox wird zeitvariabel abgerechnet." '),
        t('Nicht zwingend. Modul 3 gilt für den gesamten Netzbezug der betreffenden Marktlokation.'),
      ),
      p(
        bold('„Wenn §14a greift, kann der Netzbetreiber mein ganzes Haus abschalten." '),
        t('Nein. Der normale Haushaltsverbrauch ist nicht Teil der Steuerung. Betroffen sind nur die steuerbaren Verbrauchseinrichtungen.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Modul 3 ist eines der ersten Instrumente, mit denen private Haushalte für '),
        bold('netzdienliches Verbrauchsverhalten'),
        t(' einen direkten wirtschaftlichen Anreiz bekommen. Statt jede Kilowattstunde Netzbezug gleich zu behandeln, wird der Zeitpunkt relevanter.'),
      ),
      p(
        t('Für ein flexibel ladbares E-Auto ist das Konzept besonders schlüssig. Bei Wärmepumpen und Speichern muss genauer gerechnet werden, weil Effizienz, Messkonzept, PV-Prognose und Speicherverluste dazukommen.'),
      ),
      p(
        t('Der eigentliche Hebel entsteht, wenn Modul 3 nicht isoliert betrachtet wird. Zusammen mit PV, Smart Meter, dynamischem Tarif und HEMS entsteht ein Energiesystem, das auf '),
        bold('Netz, Markt und eigenen Solarstrom'),
        t(' gleichzeitig reagieren kann.'),
      ),
      p(
        t('Unsere Empfehlung: Nicht einfach Modul 3 bestellen, weil „NT billiger" klingt. Das reale Lastprofil ansehen, Zeitfenster des Netzbetreibers prüfen und danach entscheiden, welche Verbraucher tatsächlich verschiebbar sind.'),
      ),
      p(
        t('Wie negative Börsenpreise in dieses Bild passen, erklären wir in '),
        link('Negative Strompreise 2026: Problem für PV oder Chance für Speicher und E-Auto?', '/strom-energiemanagement/negative-strompreise-2026-pv-speicher-eauto'),
        t('.'),
      ),
    ),

    ctaBlock({
      titel: '§14a, Smart Meter und Energiemanagement zusammen planen',
      text:
        'Du hast eine Wärmepumpe, Wallbox oder einen Stromspeicher und möchtest wissen, welches §14a-Modul zu deinem Messkonzept passt? Wir betrachten Lastprofil, PV, Speicher, Steuerbarkeit, Smart Meter und Tarife als Gesamtsystem – statt nur einen einzelnen Zähler oder Tarif zu optimieren.',
      buttonText: 'Energiesystem prüfen lassen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist Modul 3 nach §14a EnWG?',
      'Modul 3 ist ein zeitvariables Netzentgelt für Betreiber steuerbarer Verbrauchseinrichtungen. Es nutzt drei Tarifstufen – Hochlasttarif HT, Standardtarif ST und Niedriglasttarif NT – in vom Netzbetreiber festgelegten täglichen Zeitfenstern. Modul 3 kann seit 1. April 2025 genutzt werden und wird immer zusätzlich zu Modul 1 gewählt.',
    ),
    faqItem(
      'Kann ich Modul 3 ohne Modul 1 wählen?',
      'Nein. Modul 3 ist kein eigenständiges Netzentgeltmodul. Es kann nur in Kombination mit Modul 1 gewählt werden. Eine Kombination mit Modul 2 ist nicht vorgesehen.',
    ),
    faqItem(
      'Brauche ich für Modul 3 ein Smart Meter?',
      'Ja. Zu den Voraussetzungen für Modul 3 gehört ein intelligentes Messsystem. Es wird benötigt, um den Verbrauch den festgelegten Zeitfenstern korrekt zuzuordnen und abzurechnen.',
    ),
    faqItem(
      'Welche Geräte können unter §14a fallen?',
      'Typische steuerbare Verbrauchseinrichtungen sind private Wallboxen, Wärmepumpen einschließlich Zusatzheizung, Anlagen zur Raumkühlung und Stromspeicher hinsichtlich des Netzbezugs. Für Neuanlagen seit 1. Januar 2024 liegt die relevante Leistungsschwelle grundsätzlich bei mehr als 4,2 kW.',
    ),
    faqItem(
      'Kann der Netzbetreiber wegen §14a meinen Haushaltsstrom abschalten?',
      'Nein. Die Steuerung betrifft nur die steuerbaren Verbrauchseinrichtungen. Der normale Haushaltsverbrauch wie Licht, Kühlschrank oder Herd bleibt unberührt. Auch die PV-Einspeisung wird über §14a nicht gedimmt.',
    ),
    faqItem(
      'Wie stark darf eine Wallbox bei §14a gedimmt werden?',
      'Bei der Direktansteuerung steht einer steuerbaren Verbrauchseinrichtung grundsätzlich eine Mindestleistung von 4,2 kW zur Verfügung. Bei mehreren Geräten oder größeren Wärmepumpen gelten angepasste Berechnungen. Die Reduzierung ist für konkrete Netzengpass-Situationen vorgesehen.',
    ),
    faqItem(
      'Was ist der Unterschied zwischen Modul 2 und Modul 3?',
      'Modul 2 reduziert den Netzentgelt-Arbeitspreis der separat gemessenen steuerbaren Verbrauchseinrichtung auf 40 % und erfordert einen separaten Zähler. Modul 3 arbeitet mit zeitabhängigen Netzentgelten und kann nur zusammen mit Modul 1 genutzt werden. Dafür ist ein intelligentes Messsystem erforderlich.',
    ),
    faqItem(
      'Was bedeuten HT, ST und NT bei Modul 3?',
      'HT ist die Hochlasttarifstufe mit höherem Netzentgelt, ST der Standardtarif entsprechend dem regulären Arbeitspreis in der Niederspannung ohne Leistungsmessung und NT die günstigere Niedriglasttarifstufe. Die konkreten Preise legt der jeweilige Netzbetreiber nach den Vorgaben der Bundesnetzagentur fest.',
    ),
    faqItem(
      'Ändern sich die Modul-3-Zeitfenster jeden Tag?',
      'Nein. Der Netzbetreiber legt die täglich wiederkehrenden Zeitfenster für ein Kalenderjahr fest. Sie unterscheiden sich nicht nach Wochentagen. Der Netzbetreiber kann allerdings in maximal zwei Quartalen auf die zeitvariable Abrechnung verzichten und dort ST abrechnen.',
    ),
    faqItem(
      'Gilt Modul 3 nur für die Wallbox oder Wärmepumpe?',
      'Das zeitvariable Netzentgelt gilt für den gesamten Netzbezug der Marktlokation, über die die steuerbare Verbrauchseinrichtung abgerechnet wird. Bei einer gemeinsamen Marktlokation kann also auch der übrige Netzbezug des Hauses den HT-, ST- und NT-Zeitfenstern zugeordnet werden. Die Steuerung selbst betrifft trotzdem nur die steuerbaren Verbrauchseinrichtungen.',
    ),
    faqItem(
      'Ist Modul 3 dasselbe wie ein dynamischer Stromtarif?',
      'Nein. Ein dynamischer Stromtarif verändert den Energiepreis anhand des Strommarktes. Modul 3 verändert den Netzentgelt-Anteil anhand der vom lokalen Netzbetreiber festgelegten Netzzeitfenster. Beide können kombiniert werden, die günstigen Zeiträume müssen aber nicht identisch sein.',
    ),
    faqItem(
      'Für wen lohnt sich Modul 3 besonders?',
      'Besonders interessant ist Modul 3 für Haushalte mit größeren flexibel verschiebbaren Verbräuchen. Das klassische Beispiel ist ein E-Auto, das mehrere Stunden am Haus steht und automatisiert in Niedriglastzeiten laden kann. Auch Speicher und Wärmepumpe können Flexibilität liefern, müssen aber technisch und wirtschaftlich genauer betrachtet werden.',
    ),
    faqItem(
      'Wie bestelle ich Modul 3?',
      'Modul 3 kann grundsätzlich über den Stromlieferanten oder den Netzbetreiber ausgewählt werden. Die Bundesnetzagentur weist darauf hin, dass die Bestellung über den bestehenden Lieferanten in der Praxis häufig zügiger durch die Marktkommunikation läuft. Voraussetzung bleibt unter anderem ein intelligentes Messsystem.',
    ),
    faqItem(
      'Muss mein Netzbetreiber Modul 3 2026 anbieten?',
      'Ja. Netzbetreiber müssen Modul 3 seit 1. April 2025 anbieten und abrechnen. 2026 gibt es jedoch weiterhin praktische Umsetzungsprobleme bei einzelnen Marktteilnehmern. Die Bundesnetzagentur hat deshalb bereits Verwaltungsvollstreckungsmaßnahmen eingeleitet.',
    ),
  ],
}

await upsertRatgeberArticle(article)
