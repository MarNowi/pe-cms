// scripts/articles/hems-home-energy-management-system-hersteller-app.mjs

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
  titel: 'HEMS: Was ein Home Energy Management System wirklich macht – und warum die Hersteller-App nicht dasselbe ist',
  slug: 'hems-home-energy-management-system-hersteller-app',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'PV, Speicher, Wallbox, Wärmepumpe, Smart Meter und dynamischer Stromtarif liefern immer mehr Daten – aber ohne gemeinsame Steuerung bleibt jedes Gerät in seiner eigenen Welt. Ein HEMS verbindet Erzeugung, Verbrauch, Speicher und Preise zu einem Energiesystem. Was ein Home Energy Management System wirklich können sollte, wo die Hersteller-App aufhört, warum offene Schnittstellen wichtig sind und welche Rolle § 14a und Smart Meter dabei spielen.',
  lesezeit: 17,

  seo: seo(
    'HEMS erklärt: Was ein Home Energy Management System wirklich macht | PEAK.Energy',
    'HEMS verständlich erklärt: PV, Speicher, Wallbox, Wärmepumpe, Smart Meter, §14a, dynamische Tarife, offene Schnittstellen und Unterschied zur Hersteller-App.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein HEMS ist die '),
      bold('Steuerungsebene des Energiesystems im Haus'),
      t('. Es verbindet Erzeugung, Speicher und flexible Verbraucher und entscheidet innerhalb vorgegebener Regeln, wann welches Gerät Energie nutzt.'),
    ),
    summaryPoint(
      t('Smart Meter und HEMS sind nicht dasselbe: Das Smart Meter '),
      bold('misst und kommuniziert'),
      t(', das HEMS verarbeitet zusätzliche Daten und steuert Geräte. Beide können zusammenarbeiten, erfüllen aber unterschiedliche Aufgaben.'),
    ),
    summaryPoint(
      t('Eine Hersteller-App kann HEMS-Funktionen enthalten. Eine reine App ist aber noch kein HEMS. Entscheidend ist, ob tatsächlich '),
      bold('mehrere Energieflüsse automatisch koordiniert'),
      t(' werden – und nicht nur ein einzelnes Produkt visualisiert oder eingestellt wird.'),
    ),
    summaryPoint(
      t('Mit § 14a wird ein EMS auch netzseitig relevant: Bei mehreren steuerbaren Verbrauchseinrichtungen kann der Netzbetreiber eine '),
      bold('gesamthafte Leistungsobergrenze'),
      t(' übermitteln, die das EMS selbst auf Wallbox, Wärmepumpe und Speicher verteilt. Eigener PV-Strom kann dabei berücksichtigt werden.'),
    ),
    summaryPoint(
      t('Für ein langlebiges Energiesystem sind '),
      bold('offene, dokumentierte Schnittstellen'),
      t(' wichtiger als eine hübsche App. Sonst kann der Austausch eines Speichers, einer Wallbox oder eines Wechselrichters später zum Ökosystem-Problem werden.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum ein HEMS überhaupt nötig wird')),
      p(
        t('Ein Haus mit einer einfachen PV-Anlage ist leicht zu verstehen: Die Module erzeugen Strom, das Haus verbraucht einen Teil und der Rest wird eingespeist. Mit Speicher, Wallbox, Wärmepumpe, Smart Meter und dynamischem Stromtarif entsteht aber ein anderes System. Plötzlich gibt es mehrere mögliche Energiequellen, Verbraucher und Zeitpunkte.'),
      ),
      p(
        t('Dann reicht die Frage „Wie viel Strom produziert meine PV-Anlage?" nicht mehr. Wichtiger wird: '),
        bold('Wann soll welcher Verbraucher welche Energiequelle nutzen?'),
      ),
      p(
        t('Soll das E-Auto sofort laden oder erst bei PV-Überschuss? Soll der Speicher nachts günstigen Netzstrom laden oder Platz für die Sonne am nächsten Mittag freihalten? Darf die Wärmepumpe Warmwasser etwas früher erzeugen, wenn viel PV-Leistung vorhanden ist? Welche Leistungsgrenze gilt gerade nach § 14a?'),
      ),
      p(
        t('Genau diese Entscheidungen sind die Aufgabe eines Home Energy Management Systems – kurz '),
        bold('HEMS'),
        t('.'),
      ),
    ),

    hinweisBlock(
      'HEMS ist der gebräuchliche Begriff – die Bundesnetzagentur spricht meist von EMS',
      p(
        t('Im Markt wird häufig von HEMS (Home Energy Management System) gesprochen. In den §14a-Regeln verwendet die Bundesnetzagentur den allgemeineren Begriff EMS – Energie-Management-System. Für das Einfamilienhaus ist damit praktisch dieselbe Steuerungsebene gemeint: ein System, das mehrere Energiegeräte hinter dem Netzanschluss koordiniert.'),
      ),
    ),

    textBlock(
      h('h2', t('Die einfachste Definition: messen, entscheiden, steuern')),
      p(
        t('Ein gutes HEMS erledigt drei Dinge:'),
      ),
      ul(
        p(t('Es sammelt Messwerte und Zustände aus dem Energiesystem.')),
        p(t('Es entscheidet anhand von Regeln, Prognosen und Zielen, was als Nächstes sinnvoll ist.')),
        p(t('Es setzt diese Entscheidung über steuerbare Geräte um.')),
      ),
      p(
        t('Das klingt banal, ist aber der entscheidende Unterschied zwischen '),
        bold('Monitoring'),
        t(' und '),
        bold('Energiemanagement'),
        t('. Eine Oberfläche, die dir schöne Stromfluss-Pfeile zeigt, hat noch keine einzige Kilowattstunde optimiert. Erst wenn das System aktiv Ladeleistung, Speicherstrategie oder Verbraucher beeinflussen kann, beginnt echtes Energiemanagement.'),
      ),
    ),

    tabelleBlock('Monitoring und HEMS im Vergleich', [
      {
        spalte1: 'PV-Leistung anzeigen',
        spalte2: 'Monitoring: ja',
        spalte3: 'HEMS: ja – und kann die Information für Steuerentscheidungen verwenden',
      },
      {
        spalte1: 'Speicher-Ladezustand anzeigen',
        spalte2: 'Monitoring: ja',
        spalte3: 'HEMS: ja – und kann Lade-/Entladestrategien beeinflussen',
      },
      {
        spalte1: 'Wallbox automatisch regeln',
        spalte2: 'Monitoring: nein',
        spalte3: 'HEMS: ja, sofern Schnittstelle und Freigabe vorhanden sind',
      },
      {
        spalte1: 'PV-Prognose berücksichtigen',
        spalte2: 'Monitoring: meist nein',
        spalte3: 'HEMS: kann zukünftige Erzeugung in Entscheidungen einbauen',
      },
      {
        spalte1: 'Dynamische Strompreise nutzen',
        spalte2: 'Monitoring: kann Preise anzeigen',
        spalte3: 'HEMS: kann Verbraucher und Speicher zeitlich verschieben',
      },
      {
        spalte1: '§14a-Leistungsgrenze verteilen',
        spalte2: 'Monitoring: nein',
        spalte3: 'EMS kann die verfügbare Bezugsleistung auf steuerbare Geräte aufteilen',
      },
    ]),

    textBlock(
      h('h2', t('Welche Daten braucht ein HEMS?')),
      p(
        t('Je mehr Geräte ein HEMS steuern soll, desto mehr Zustände muss es kennen. Typische Informationen sind:'),
      ),
      ul(
        p(t('aktuelle PV-Erzeugung,')),
        p(t('Netzbezug und Netzeinspeisung am Hausanschluss,')),
        p(t('Hausverbrauch,')),
        p(t('Ladezustand und Lade-/Entladeleistung des Batteriespeichers,')),
        p(t('Leistung, Fahrzeugstatus und Ladeziel der Wallbox,')),
        p(t('Betriebszustand und gegebenenfalls Sollwerte der Wärmepumpe,')),
        p(t('Strompreise aus einem dynamischen Tarif,')),
        p(t('PV-Ertrags- und teilweise Verbrauchsprognosen,')),
        p(t('§14a-Vorgaben beziehungsweise zulässiger netzwirksamer Leistungsbezug,')),
        p(t('technische Grenzen wie Mindestreserve, maximale Ladeleistung oder gewünschte Abfahrtszeit.')),
      ),
      p(
        t('Ein HEMS muss nicht jede dieser Informationen besitzen, um nützlich zu sein. Aber mit jedem zusätzlichen steuerbaren Gerät steigt der Wert einer gemeinsamen Logik.'),
      ),
    ),

    textBlock(
      h('h2', t('Smart Meter und HEMS: zwei völlig verschiedene Rollen')),
      p(
        t('Smart Meter und HEMS werden häufig in einen Topf geworfen. Ein '),
        bold('intelligentes Messsystem (iMSys)'),
        t(' besteht aus einer modernen Messeinrichtung und einem Smart-Meter-Gateway. Es dient der sicheren Messung und Kommunikation von Energiedaten und wird unter anderem für dynamische Stromtarife benötigt.'),
      ),
      p(
        t('Das HEMS sitzt auf einer anderen Ebene. Es kann Messwerte aus verschiedenen Quellen verarbeiten und daraus Steuerentscheidungen für Geräte im Haus ableiten.'),
      ),
      p(
        bold('Kurz gesagt: Das Smart Meter weiß, was am Netzanschluss passiert. Das HEMS entscheidet, was im Haus passieren soll.'),
      ),
      p(
        t('Wie Smart Meter, Einbaupflicht und Kosten 2026 funktionieren, erklären wir ausführlich in '),
        link('Smart Meter 2026: Wer einen braucht, was er kostet und was er bei PV wirklich bringt', '/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile'),
        t('.'),
      ),
    ),

    tabelleBlock('Smart Meter, HEMS und Hersteller-App – wer macht was?', [
      {
        spalte1: 'Smart Meter / iMSys',
        spalte2: 'Messung + sichere Kommunikation',
        spalte3: 'Offizielle Messinfrastruktur am Netzanschluss; kein vollständiges Haus-Energiemanagement',
      },
      {
        spalte1: 'HEMS / EMS',
        spalte2: 'Koordination + Optimierung + Steuerung',
        spalte3: 'Verbindet mehrere Geräte, Datenquellen und Ziele',
      },
      {
        spalte1: 'Hersteller-App',
        spalte2: 'Benutzeroberfläche',
        spalte3: 'Kann nur Monitoring sein oder echte HEMS-Funktionen enthalten – das hängt vom System ab',
      },
    ]),

    textBlock(
      h('h2', t('Warum eine Hersteller-App nicht automatisch ein HEMS ist')),
      p(
        t('Fast jeder Wechselrichter- und Speicherhersteller bietet heute eine App. Dort siehst du PV-Erzeugung, Speicherfüllstand, Netzbezug und teilweise auch Wallbox oder Wärmepumpe. Das kann sehr gut gemacht sein – trotzdem ist die App zunächst nur die '),
        bold('Benutzeroberfläche'),
        t('.'),
      ),
      p(
        t('Entscheidend ist, was hinter dieser Oberfläche passiert. Ein Hersteller-System kann durchaus ein vollwertiges HEMS enthalten. Es kann aber genauso gut nur die eigenen Geräte anzeigen und ein paar Einstellungen anbieten.'),
      ),
      p(
        t('Deshalb würden wir nicht fragen: „Hat der Speicher eine App?" Sondern:'),
      ),
      ul(
        p(t('Welche Geräte kann das System tatsächlich lesen?')),
        p(t('Welche Geräte kann es aktiv steuern?')),
        p(t('Kann es Geräte anderer Hersteller integrieren?')),
        p(t('Kann es PV-Prognosen und dynamische Preise verarbeiten?')),
        p(t('Kann es Ladeziele, Mindestreserven und Komfortgrenzen berücksichtigen?')),
        p(t('Welche Funktionen arbeiten lokal und welche nur über die Hersteller-Cloud?')),
        p(t('Was passiert, wenn der Hersteller den Cloud-Dienst ändert oder einstellt?')),
      ),
    ),

    hinweisBlock(
      'Eine App kann Teil eines sehr guten HEMS sein',
      p(
        t('Der Unterschied ist nicht „Hersteller-App schlecht, HEMS gut". Viele Hersteller bauen leistungsfähige Energiemanagement-Funktionen in ihre Plattformen ein. Kritisch wird es erst, wenn die Steuerung nur innerhalb eines geschlossenen Produktökosystems funktioniert oder wichtige Funktionen ausschließlich von einer externen Cloud abhängen.'),
      ),
    ),

    textBlock(
      h('h2', t('Das Problem geschlossener Ökosysteme')),
      p(
        t('Ein geschlossenes System kann im Neuzustand hervorragend funktionieren. Wechselrichter, Speicher, Wallbox und App stammen aus einer Hand, alles erkennt sich automatisch und der Kunde muss wenig konfigurieren.'),
      ),
      p(
        t('Die Schwäche zeigt sich häufig erst später. Ein Energiesystem im Gebäude lebt deutlich länger als eine Smartphone-App. Nach zehn oder fünfzehn Jahren kann ein Wechselrichter, Speicher oder eine Wallbox ersetzt werden müssen.'),
      ),
      p(
        t('Wenn das HEMS nur exakt definierte Geräte des Herstellers unterstützt, kann aus einem einfachen Komponententausch plötzlich ein '),
        bold('Ökosystem-Tausch'),
        t(' werden. Technisch funktionierende Komponenten werden dann nicht ersetzt, weil sie defekt sind, sondern weil das neue Gerät nicht mehr in die Plattform passt.'),
      ),
      p(
        t('Offene Schnittstellen reduzieren dieses Risiko. Sie garantieren zwar nicht, dass jedes Gerät miteinander funktioniert – aber sie schaffen die technische Möglichkeit, Geräte verschiedener Hersteller in einer gemeinsamen Steuerung zu verbinden.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Schnittstellen sind bei einem HEMS wichtig?')),
      p(
        t('Es gibt nicht die eine vorgeschriebene „HEMS-Schnittstelle". In der Praxis begegnen einem je nach Gerät und Hersteller unterschiedliche Protokolle und APIs. Typisch sind zum Beispiel Modbus TCP/RTU, lokale HTTP- oder WebSocket-APIs, MQTT, EEBUS oder herstellerspezifische Schnittstellen.'),
      ),
      p(
        t('Wichtiger als der Name des Protokolls ist für den Betreiber:'),
      ),
      ul(
        p(t('Ist die Schnittstelle dokumentiert?')),
        p(t('Funktioniert sie lokal oder nur über eine Cloud?')),
        p(t('Darf ein Drittsystem nur lesen oder auch steuern?')),
        p(t('Bleibt die Schnittstelle nach Firmware-Updates stabil?')),
        p(t('Gibt es sinnvolle Rechte- und Sicherheitsmechanismen?')),
        p(t('Ist der Hersteller bereit, Fremdsysteme offiziell zu unterstützen?')),
      ),
      p(
        t('„Hat Modbus" auf einem Datenblatt reicht deshalb nicht. Manche Geräte stellen nur wenige Register bereit, andere nahezu alle relevanten Sollwerte. Entscheidend ist der reale Funktionsumfang.'),
      ),
    ),

    textBlock(
      h('h2', t('Lokal oder Cloud: Wo sollte das HEMS laufen?')),
      p(
        t('Ein HEMS kann lokal im Gebäude, vollständig in einer Hersteller-Cloud oder als Mischsystem betrieben werden. Alle drei Varianten können technisch funktionieren.'),
      ),
    ),

    tabelleBlock('Lokales HEMS und Cloud-HEMS im Vergleich', [
      {
        spalte1: 'Reaktionszeit',
        spalte2: 'Lokal: sehr kurz',
        spalte3: 'Cloud: abhängig von Internet und Backend',
      },
      {
        spalte1: 'Internet-Ausfall',
        spalte2: 'Lokal: Grundfunktionen können weiterlaufen',
        spalte3: 'Cloud: Funktionen können je nach Architektur eingeschränkt sein',
      },
      {
        spalte1: 'Updates / neue Funktionen',
        spalte2: 'Lokal: müssen verteilt oder installiert werden',
        spalte3: 'Cloud: zentral sehr einfach aktualisierbar',
      },
      {
        spalte1: 'Daten',
        spalte2: 'Lokal: können weitgehend im Gebäude bleiben',
        spalte3: 'Cloud: Betriebsdaten werden extern verarbeitet',
      },
      {
        spalte1: 'Herstellerabhängigkeit',
        spalte2: 'Lokal: bei offenen Schnittstellen geringer',
        spalte3: 'Cloud: Dienst und Geschäftsmodell des Anbieters werden wichtiger',
      },
    ]),

    p(
      t('Wir würden daraus keine Religion machen. Wetter- und Preisprognosen kommen ohnehin häufig aus externen Diensten. Entscheidend ist eher, welche '),
      bold('Kernfunktionen'),
      t(' ohne externe Cloud weiterlaufen können. PV-Überschussladen, Speicherregelung oder eine lokale Leistungsbegrenzung sollten aus unserer Sicht nicht unnötig vom Internet abhängen, wenn die Geräte lokal erreichbar sind.'),
    ),

    textBlock(
      h('h2', t('§ 14a: Hier wird das EMS offiziell Teil der Netzsteuerung')),
      p(
        t('Bei § 14a EnWG bekommt das EMS eine zusätzliche Rolle. Die Bundesnetzagentur unterscheidet zwischen der Direktansteuerung einzelner steuerbarer Verbrauchseinrichtungen und der Steuerung über ein Energie-Management-System.'),
      ),
      p(
        t('Bei der EMS-Variante übermittelt der Netzbetreiber im Engpassfall eine '),
        bold('gesamthafte Leistungsobergrenze'),
        t(' für die angeschlossenen steuerbaren Verbrauchseinrichtungen. Das EMS darf dann selbst entscheiden, wie diese verfügbare Bezugsleistung auf Wallbox, Wärmepumpe und Speicher verteilt wird.'),
      ),
      p(
        t('Eigener PV-Strom kann zusätzlich genutzt werden. Die Bundesnetzagentur nennt die EMS-Variante deshalb ausdrücklich als besonders geeignet für die Kombination aus steuerbaren Verbrauchseinrichtungen, PV und Speicher.'),
      ),
      p(
        t('Die Details zu den Netzentgeltmodulen erklären wir in '),
        link('Zeitvariable Netzentgelte nach § 14a: Was Modul 3 bringt', '/strom-energiemanagement/zeitvariable-netzentgelte-paragraph-14a-modul-3'),
        t('.'),
      ),
    ),

    tippBlock(
      'Mehrere steuerbare Geräte: Die Verteilungslogik gehört ins Haus',
      p(
        t('Wenn Wallbox und Wärmepumpe gleichzeitig Leistung benötigen, ist eine gemeinsame Leistungsgrenze flexibler als zwei unabhängig gedimmte Geräte. Das HEMS kann zum Beispiel die Wärmepumpe priorisieren und die Fahrzeugladung stärker reduzieren – oder umgekehrt, wenn das Auto bald abfahren muss.'),
      ),
    ),

    textBlock(
      h('h2', t('HEMS und dynamischer Stromtarif')),
      p(
        t('Ein dynamischer Stromtarif ist ein typischer Anwendungsfall für ein HEMS. Der Tarif liefert zeitabhängige Preise – das HEMS entscheidet, welche Last sich in diese Zeitfenster verschieben lässt.'),
      ),
      p(
        t('Ohne Automatisierung bleibt vom dynamischen Tarif häufig nur eine App mit einer Preiskurve. Der Nutzer müsste selbst überlegen, wann Wallbox, Speicher oder Wärmepumpe laufen sollen.'),
      ),
      p(
        t('Das HEMS kann stattdessen automatisch berücksichtigen:'),
      ),
      ul(
        p(t('Wie teuer ist Netzstrom in den kommenden Zeitfenstern?')),
        p(t('Wie viel PV-Ertrag wird erwartet?')),
        p(t('Wie voll ist der Speicher?')),
        p(t('Wann muss das E-Auto fahrbereit sein?')),
        p(t('Wie flexibel ist die Wärmepumpe ohne Komfort- oder Effizienzverlust?')),
      ),
      p(
        t('Warum ein dynamischer Tarif mit PV nicht automatisch immer günstiger ist, erklären wir in '),
        link('Dynamischer Stromtarif mit PV und Speicher: Wann er sich wirklich lohnt', '/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('HEMS und Stromspeicher: Prognose statt „voll sobald Sonne da ist"')),
      p(
        t('Ein einfacher Speicher lädt, sobald PV-Überschuss vorhanden ist. Ein gutes HEMS kann vorausschauender arbeiten.'),
      ),
      p(
        t('Wenn mittags viel Sonne erwartet wird, kann es bewusst Speicherkapazität freihalten. Wenn für den nächsten Tag kaum PV-Ertrag erwartet wird und nachts Netzstrom sehr günstig ist, kann Netzladen sinnvoll sein.'),
      ),
      p(
        t('Die HTW Berlin zeigt in der Stromspeicher-Inspektion 2026, dass Netzladen nur bei ausreichendem Preisabstand und gutem Systemwirkungsgrad wirtschaftlich wird. Genau deshalb darf ein HEMS nicht nur auf „billigen Strom" reagieren, sondern muss die Verluste und den späteren Nutzen mitdenken.'),
      ),
      p(
        t('Die technische und wirtschaftliche Logik dazu erklären wir ausführlich in '),
        link('Stromspeicher aus dem Netz laden: Wann dynamisches Laden sinnvoll ist', '/strom-energiemanagement/stromspeicher-aus-netz-laden-dynamisch-sinnvoll'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('HEMS und E-Auto: Nicht laden – sondern bis zur Abfahrt optimieren')),
      p(
        t('Bei einer Wallbox ist „Laden starten" eine sehr primitive Steuerungsstrategie. Eigentlich benötigt das HEMS vier Informationen: aktuellen Ladezustand beziehungsweise benötigte Energiemenge, gewünschtes Ladeziel, Abfahrtszeit und verfügbare Leistung.'),
      ),
      p(
        t('Dann kann es entscheiden, ob das Fahrzeug sofort mit PV-Überschuss, später in einem günstigen Tarifzeitfenster oder mit einer Kombination aus beidem geladen wird.'),
      ),
      p(
        t('Das Ergebnis ist komfortabler als manuelle Tarifoptimierung: Der Nutzer sagt nicht „lade heute Nacht zwischen 2 und 4 Uhr", sondern '),
        bold('„morgen um 7 Uhr brauche ich 80 % Akku"'),
        t('. Das Energiemanagement erledigt den Weg dorthin.'),
      ),
    ),

    textBlock(
      h('h2', t('HEMS und Wärmepumpe: Preisoptimierung hat Grenzen')),
      p(
        t('Eine Wärmepumpe ist ebenfalls flexibel, aber weniger frei als ein Batteriespeicher oder E-Auto. Das Gebäude benötigt Wärme, und die Anlage arbeitet bei bestimmten Temperaturen und Vorläufen effizienter als bei anderen.'),
      ),
      p(
        t('Ein HEMS darf deshalb nicht einfach den günstigsten Strompreis zum wichtigsten Ziel machen. Es sollte die Wärmepumpe nur innerhalb sinnvoller thermischer Grenzen verschieben.'),
      ),
      p(
        t('Beispiel: Warmwasser kann bei viel PV-Leistung etwas früher erzeugt werden. Eine massive Erhöhung der Vorlauftemperatur nur wegen eines niedrigen Börsenpreises kann dagegen den COP verschlechtern und den Preisvorteil teilweise wieder vernichten.'),
      ),
      p(
        bold('Die Wärmepumpe muss zuerst effizient heizen. Erst danach wird der Zeitpunkt optimiert.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ein gutes HEMS priorisieren sollte')),
      p(
        t('Bei mehreren Zielen braucht das System eine klare Hierarchie. Eine sinnvolle Logik kann beispielsweise so aussehen:'),
      ),
      ul(
        p(t('Sicherheit und technische Gerätegrenzen haben immer Vorrang.')),
        p(t('Komfortziele wie Raumtemperatur und Abfahrts-Ladeziel müssen eingehalten werden.')),
        p(t('Eigenen PV-Strom möglichst sinnvoll im Haus nutzen.')),
        p(t('Speicher nicht unnötig zyklisieren oder lange voll stehen lassen.')),
        p(t('Netz- und §14a-Leistungsgrenzen einhalten.')),
        p(t('Innerhalb dieser Grenzen Energie- und Netzentgeltkosten optimieren.')),
      ),
      p(
        t('Das ist deutlich komplexer als „wenn Preis < x, dann Speicher laden". Genau deshalb wird Energiemanagement mit jedem zusätzlichen Gerät wertvoller.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ein HEMS nicht können muss')),
      p(
        t('Der Begriff wird inzwischen marketingseitig sehr breit verwendet. Nicht jedes Haus braucht deshalb ein KI-System, das jede Viertelstunde den Strommarkt neu erfindet.'),
      ),
      p(
        t('Ein gutes HEMS darf auch einfach sein. Für viele Haushalte reichen robuste Regeln: PV-Überschussladen, Mindestreserve im Speicher, Ladeziel des E-Autos, begrenzte Wärmepumpenverschiebung und dynamische Tarife nur bei ausreichender Preisdifferenz.'),
      ),
      p(
        t('Wichtiger als möglichst viele Funktionen ist, dass das System '),
        bold('nachvollziehbar, stabil und kontrollierbar'),
        t(' bleibt. Wenn niemand mehr versteht, warum der Speicher gerade aus dem Netz lädt oder das Auto nicht lädt, ist die Optimierung technisch vielleicht clever – im Alltag aber schlecht.'),
      ),
    ),

    textBlock(
      h('h2', t('Woran du ein gutes HEMS vor dem Kauf erkennst')),
      p(
        t('Vor einer Entscheidung würden wir nicht nur die Feature-Liste anschauen, sondern diese Fragen stellen:'),
      ),
      ul(
        p(t('Welche Wechselrichter, Speicher, Wallboxen und Wärmepumpen werden unterstützt?')),
        p(t('Sind Fremdhersteller möglich oder nur das eigene Ökosystem?')),
        p(t('Welche Schnittstellen sind dokumentiert und lokal nutzbar?')),
        p(t('Kann das System Geräte nicht nur lesen, sondern wirklich steuern?')),
        p(t('Unterstützt es PV-Überschuss, dynamische Tarife und Prognosen?')),
        p(t('Kann es mehrere steuerbare Verbraucher nach §14a koordinieren?')),
        p(t('Welche Funktionen laufen bei Internetausfall weiter?')),
        p(t('Sind Datenexport und lokale Historie möglich?')),
        p(t('Kann eine Komponente später ersetzt werden, ohne das komplette System zu tauschen?')),
        p(t('Kann der Betreiber Regeln, Prioritäten und Reserven selbst festlegen?')),
      ),
    ),

    hinweisBlock(
      '„Kompatibel" kann sehr Unterschiedliches bedeuten',
      p(
        t('Ein Hersteller kann ein Gerät als kompatibel bezeichnen, obwohl nur Messwerte gelesen werden. Für echtes Energiemanagement ist entscheidend, welche Sollwerte tatsächlich geschrieben werden dürfen: Ladeleistung, Freigabe, Leistungsgrenze, Ladeziel oder andere Steuergrößen. Vor dem Kauf lohnt der Blick in die konkrete Integrationsdokumentation.'),
      ),
    ),

    textBlock(
      h('h2', t('Bestandsanlage: HEMS nachrüsten statt alles neu kaufen')),
      p(
        t('Gerade bei älteren PV-Anlagen ist ein offenes HEMS interessant. Module funktionieren häufig noch gut, aber Monitoring, Wechselrichter oder Speichertechnik sind technisch veraltet oder voneinander getrennt.'),
      ),
      p(
        t('Dann muss nicht automatisch die gesamte Anlage erneuert werden. Je nach vorhandenen Schnittstellen kann ein Energiemanagement nachgerüstet und schrittweise erweitert werden.'),
      ),
      p(
        t('Bei älteren Anlagen beginnt der Prozess deshalb mit einer Bestandsaufnahme: Welche Komponenten liefern Daten? Welche lassen sich steuern? Welche Schnittstellen existieren? Ist der Zählerschrank für Smart Meter und Steuertechnik vorbereitet?'),
      ),
      p(
        t('Genau diese Perspektive behandeln wir zusätzlich im Repowering-Beitrag '),
        link('HEMS und Monitoring nachrüsten: Die Altanlage endlich sichtbar machen', '/repowering/hems-monitoring'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('HEMS, Smart Meter und Solarspitzengesetz')),
      p(
        t('Das Solarspitzengesetz macht Energiemanagement nicht verpflichtend. Es erhöht aber den Wert intelligenter Steuerung. Bei bestimmten neuen PV-Anlagen kann die Netzeinspeisung vorübergehend auf 60 % der installierten Leistung begrenzt sein. Gleichzeitig werden negative Börsenpreise für neue Anlagen förderseitig relevanter.'),
      ),
      p(
        t('Ein HEMS hebt solche gesetzlichen Grenzen nicht auf. Es kann aber dafür sorgen, dass eigener Solarstrom möglichst im Haus genutzt wird – beispielsweise durch Speicherladung oder E-Auto – bevor er abgeregelt oder zu einem ungünstigen Zeitpunkt eingespeist wird.'),
      ),
      p(
        t('Die Regeln dazu erklären wir in '),
        link('Solarspitzengesetz 2026: 60-%-Regel, negative Strompreise und Smart Meter', '/strom-energiemanagement/solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Fünf typische HEMS-Mythen')),
      p(
        bold('„Meine Speicher-App ist automatisch ein HEMS." '),
        t('Vielleicht – aber nicht zwingend. Entscheidend ist der reale Steuerungsumfang, nicht das App-Icon.'),
      ),
      p(
        bold('„Mit Smart Meter habe ich automatisch Energiemanagement." '),
        t('Nein. Das iMSys misst und kommuniziert. Es ersetzt keine Steuerlogik für Speicher, Wallbox und Wärmepumpe.'),
      ),
      p(
        bold('„Ein HEMS muss alle Geräte aus einer Hand haben." '),
        t('Nein. Technisch kann ein HEMS herstellerübergreifend arbeiten, wenn geeignete Schnittstellen vorhanden sind.'),
      ),
      p(
        bold('„Cloud ist immer schlecht." '),
        t('Nein. Cloud-Dienste sind für Prognosen und Updates nützlich. Problematisch wird es, wenn elementare lokale Funktionen ohne Internet oder Hersteller-Backend nicht mehr funktionieren.'),
      ),
      p(
        bold('„Je intelligenter die Automatik, desto besser." '),
        t('Nicht unbedingt. Eine robuste, nachvollziehbare Regel kann im Alltag wertvoller sein als eine komplexe Optimierung, die niemand kontrollieren kann.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Zielbild für ein Energiesystem im Einfamilienhaus')),
      p(
        t('Ein sinnvoll aufgebautes System hat aus unserer Sicht keine zentrale „Wundermarke", sondern klare Ebenen:'),
      ),
      ul(
        p(t('PV-Anlage erzeugt Energie.')),
        p(t('Smart Meter misst den Austausch mit dem öffentlichen Netz.')),
        p(t('Speicher stellt zeitliche Flexibilität bereit.')),
        p(t('Wallbox und Wärmepumpe sind steuerbare Verbraucher.')),
        p(t('HEMS verbindet diese Geräte und setzt Prioritäten.')),
        p(t('Tarif- und Wetterdaten liefern zusätzliche externe Signale.')),
        p(t('§14a- und Netzvorgaben bilden technische Leitplanken.')),
      ),
      p(
        t('Damit bleibt jede Komponente für das zuständig, was sie gut kann. Das HEMS wird zur '),
        bold('Orchestrierungsebene'),
        t(' – nicht zum Ersatz aller Geräte.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Ein Home Energy Management System ist weit mehr als eine Stromfluss-Grafik. Es ist die Ebene, auf der aus PV-Anlage, Speicher, Wallbox, Wärmepumpe und Smart Meter '),
        bold('ein gemeinsames Energiesystem'),
        t(' wird.'),
      ),
      p(
        t('Die Hersteller-App kann Teil davon sein und sogar ein hervorragendes HEMS bereitstellen. Entscheidend ist aber nicht die Oberfläche, sondern ob Geräte wirklich automatisiert koordiniert werden und wie offen das System für spätere Veränderungen bleibt.'),
      ),
      p(
        t('Mit dynamischen Tarifen, §14a und Smart Meter wird diese Steuerung zunehmend wertvoll. Strom hat nicht mehr zu jeder Zeit denselben wirtschaftlichen und netzseitigen Wert. Ein HEMS kann diese Informationen nutzen, ohne dass der Bewohner ständig Preise, Wetter und Ladezustände beobachten muss.'),
      ),
      p(
        t('Unser wichtigster Rat: '),
        bold('Beim Kauf nicht nur die heutige Geräte-Kombination betrachten.'),
        t(' Eine PV-Anlage lebt Jahrzehnte. Das Energiemanagement sollte deshalb möglichst offen genug sein, dass Speicher, Wallbox oder Wärmepumpe später ersetzt werden können, ohne das ganze Haus in ein neues Ökosystem zu zwingen.'),
      ),
    ),

    ctaBlock({
      titel: 'Aus einzelnen Geräten ein Energiesystem machen',
      text:
        'Du hast PV, Speicher, Wallbox oder Wärmepumpe – aber jedes Gerät arbeitet in seiner eigenen App? Oder du planst ein neues System und möchtest Hersteller-Lock-in vermeiden? Wir prüfen Schnittstellen, Smart Meter, §14a und Steuerbarkeit gemeinsam und planen ein Energiesystem, das auch später erweiterbar bleibt.',
      buttonText: 'Energiesystem besprechen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was bedeutet HEMS?',
      'HEMS steht für Home Energy Management System. Gemeint ist ein Energiemanagementsystem für Gebäude, das Messwerte, Erzeuger, Speicher und steuerbare Verbraucher zusammenführt. Es kann beispielsweise PV-Erzeugung, Batteriespeicher, Wallbox, Wärmepumpe und Strompreise koordinieren.',
    ),
    faqItem(
      'Was ist der Unterschied zwischen HEMS und EMS?',
      'EMS ist der allgemeinere Begriff Energie-Management-System. HEMS bezeichnet speziell ein Energiemanagement im Haus. Die Bundesnetzagentur verwendet in den §14a-Regeln den Begriff EMS. Im Einfamilienhaus wird im Markt häufig HEMS gesagt.',
    ),
    faqItem(
      'Ist ein Smart Meter ein HEMS?',
      'Nein. Ein intelligentes Messsystem besteht aus moderner Messeinrichtung und Smart-Meter-Gateway und dient der Messung sowie sicheren Kommunikation von Energiedaten. Ein HEMS verarbeitet Daten aus mehreren Quellen und steuert Geräte. Beide Systeme können zusammenarbeiten, erfüllen aber unterschiedliche Aufgaben.',
    ),
    faqItem(
      'Ist eine Speicher- oder Wechselrichter-App automatisch ein HEMS?',
      'Nein, aber sie kann HEMS-Funktionen enthalten. Eine reine Monitoring-App zeigt nur Daten und erlaubt eventuell Einstellungen. Von echtem Energiemanagement spricht man sinnvollerweise dann, wenn mehrere Energieflüsse und Geräte automatisch koordiniert und nach gemeinsamen Zielen gesteuert werden.',
    ),
    faqItem(
      'Brauche ich ein HEMS für eine PV-Anlage?',
      'Für eine einfache PV-Anlage ist ein HEMS nicht zwingend erforderlich. Je mehr flexible Komponenten hinzukommen – Batteriespeicher, Wallbox, Wärmepumpe, dynamischer Tarif oder §14a-Steuerung – desto größer wird der Nutzen einer gemeinsamen Steuerung.',
    ),
    faqItem(
      'Kann ein HEMS Geräte verschiedener Hersteller steuern?',
      'Ja, wenn die Geräte geeignete und ausreichend dokumentierte Schnittstellen bereitstellen und das HEMS diese unterstützt. In der Praxis unterscheiden sich die Möglichkeiten stark. Manche Integrationen erlauben nur das Lesen von Messwerten, andere auch das Schreiben von Sollwerten und damit echte Steuerung.',
    ),
    faqItem(
      'Welche Schnittstellen sollte ein HEMS unterstützen?',
      'Das hängt von den eingesetzten Geräten ab. Häufig anzutreffen sind Modbus TCP/RTU, lokale APIs, MQTT, EEBUS und herstellerspezifische Schnittstellen. Wichtiger als der Protokollname ist, ob die Schnittstelle dokumentiert, lokal nutzbar, stabil und für die benötigten Steuerfunktionen freigegeben ist.',
    ),
    faqItem(
      'Muss ein HEMS in der Cloud laufen?',
      'Nein. Ein HEMS kann lokal, cloudbasiert oder hybrid arbeiten. Cloud-Dienste sind beispielsweise für Wetter- und Preisprognosen nützlich. Für zentrale lokale Steuerfunktionen kann eine lokale Ausführung Vorteile bei Reaktionszeit, Internetunabhängigkeit und Datenhoheit haben.',
    ),
    faqItem(
      'Welche Rolle spielt ein HEMS bei §14a?',
      'Bei mehreren steuerbaren Verbrauchseinrichtungen kann der Netzbetreiber bei der EMS-Variante eine gesamthafte Leistungsobergrenze übermitteln. Das EMS verteilt die verfügbare netzwirksame Bezugsleistung anschließend selbst auf Wallbox, Wärmepumpe und Speicher. Eigener PV-Strom kann dabei zusätzlich genutzt werden.',
    ),
    faqItem(
      'Kann ein HEMS die 60-%-Regel beim Solarspitzengesetz umgehen?',
      'Nein. Gesetzliche oder netzseitige Leistungsgrenzen darf ein HEMS nicht eigenmächtig aufheben. Es kann aber Eigenverbrauch und Speicherladung so steuern, dass möglichst wenig PV-Leistung unnötig abgeregelt oder zu ungünstigen Zeiten eingespeist wird.',
    ),
    faqItem(
      'Lohnt sich ein HEMS mit dynamischem Stromtarif?',
      'Besonders dann, wenn flexible Verbraucher vorhanden sind. Ein HEMS kann Strompreis, PV-Prognose, Speicherfüllstand, E-Auto-Ladeziel und Wärmepumpenbedarf zusammen betrachten. Ohne flexible Lasten ist das Einsparpotenzial eines dynamischen Tarifs deutlich kleiner.',
    ),
    faqItem(
      'Kann ein HEMS den Batteriespeicher aus dem Netz laden?',
      'Wenn Speicher und Wechselrichter Netzladen technisch erlauben und über eine geeignete Schnittstelle steuerbar sind, kann ein HEMS diese Funktion nutzen. Wirtschaftlich sollte es dabei Preisabstand, Wirkungsgrad, PV-Prognose, Ladezustand und Batteriebeanspruchung berücksichtigen. Auch §14a und das EEG-/Messkonzept können relevant sein.',
    ),
    faqItem(
      'Woran erkenne ich ein zukunftssicheres HEMS?',
      'Achte auf dokumentierte Schnittstellen, Unterstützung mehrerer Hersteller, lokale Steuerungsmöglichkeiten, Datenexport, transparente Regeln und die Möglichkeit, einzelne Komponenten später auszutauschen. Entscheidend ist nicht die Anzahl der App-Funktionen, sondern wie abhängig das Gesamtsystem von einem einzelnen Hersteller und dessen Cloud bleibt.',
    ),
  ],
}

await upsertRatgeberArticle(article)
