// scripts/articles/smart-meter-2026-pv-kosten-pflicht-vorteile.mjs

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
  titel: 'Smart Meter 2026: Wer einen braucht, was er kostet – und was er bei PV wirklich bringt',
  slug: 'smart-meter-2026-pv-kosten-pflicht-vorteile',
  kategorie: 'strom & energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'Smart Meter werden bei Photovoltaik, Wärmepumpe, Wallbox und dynamischen Stromtarifen immer wichtiger. Trotzdem herrscht viel Verwirrung: Digitaler Zähler, intelligentes Messsystem und HEMS sind nicht dasselbe. Wir erklären, wer 2026 zum Pflichteinbau gehört, welche Preisobergrenzen gelten, warum der Rollout trotzdem dauern kann – und wann ein Smart Meter im Energiesystem wirklich einen Mehrwert bringt.',
  lesezeit: 16,

  seo: seo(
    'Smart Meter 2026 bei PV: Pflicht, Kosten & Nutzen | PEAK.Energy',
    'Smart Meter 2026 verständlich erklärt: Pflicht ab welchen Verbrauchs- und PV-Grenzen, Kosten, §14a, dynamische Tarife, HEMS und was bei Photovoltaik wirklich sinnvoll ist.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein Smart Meter ist nicht einfach nur ein digitaler Stromzähler. Ein '),
      bold('intelligentes Messsystem (iMSys)'),
      t(' besteht aus einer modernen Messeinrichtung und einem Smart-Meter-Gateway, das Messwerte sicher übertragen kann.'),
    ),
    summaryPoint(
      t('Pflichteinbaufälle sind 2026 unter anderem Haushalte mit '),
      bold('mehr als 6.000 kWh Jahresstromverbrauch'),
      t(', Betreiber von Erzeugungsanlagen mit mehr als 7 kW installierter Leistung sowie Haushalte mit steuerbaren Verbrauchseinrichtungen nach §14a EnWG. Bei PV und §14a kommt zusätzlich die Steuerbarkeit über eine Steuerungseinrichtung hinzu – nach den gesetzlichen Rollout-Fristen.'),
    ),
    summaryPoint(
      t('Für typische Privathaushalte liegen die jährlichen Preisobergrenzen auf Kundenseite je nach Fall bei '),
      bold('30 bis 50 Euro'),
      t('. Größere Verbräuche und PV-Anlagen können darüber liegen. Für eine vorgeschriebene Steuerungseinrichtung können zusätzlich bis zu 50 Euro pro Jahr anfallen.'),
    ),
    summaryPoint(
      t('Ein Smart Meter macht eine PV-Anlage '),
      bold('nicht automatisch intelligenter'),
      t('. Es misst und kommuniziert. Die eigentliche Optimierung von Speicher, Wallbox oder Wärmepumpe übernimmt ein Energiemanagementsystem (HEMS/EMS). Beide Systeme können zusammenarbeiten, erfüllen aber unterschiedliche Aufgaben.'),
    ),
    summaryPoint(
      t('Besonders relevant wird das iMSys bei '),
      bold('dynamischen Stromtarifen, §14a, netzdienlicher Steuerung und flexiblen Verbrauchern'),
      t('. Wer nur eine kleine PV-Anlage ohne flexible Verbraucher betreibt, hat vom Smart Meter allein wirtschaftlich meist deutlich weniger.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum Smart Meter 2026 plötzlich überall auftauchen')),
      p(
        t('Photovoltaik erzeugt Strom nicht dann, wenn das Netz oder der Haushalt ihn immer braucht. Gleichzeitig kommen immer mehr flexible Verbraucher hinzu: Wärmepumpen, Wallboxen und Batteriespeicher. Genau deshalb wird die Messung und Steuerung von Energieflüssen wichtiger.'),
      ),
      p(
        t('Der Begriff „Smart Meter" wird dabei für fast alles verwendet, was eine digitale Anzeige hat. Das ist technisch falsch. Ein digitaler Stromzähler kann eine moderne Messeinrichtung sein, ohne überhaupt Daten nach außen zu übertragen. Erst zusammen mit dem '),
        bold('Smart-Meter-Gateway'),
        t(' wird daraus ein intelligentes Messsystem.'),
      ),
      p(
        t('Für PV-Betreiber ist diese Unterscheidung wichtig. Denn vom Zähler hängt ab, welche Messdaten verfügbar sind, ob dynamische Tarife genutzt werden können und wie zukünftig Netzsteuerung umgesetzt wird. Gleichzeitig gilt: Ein Smart Meter ersetzt weder einen Speicher noch ein HEMS – und optimiert von allein überhaupt nichts.'),
      ),
    ),

    tabelleBlock('Digitaler Zähler, Smart Meter und HEMS – das ist der Unterschied', [
      {
        spalte1: 'Moderne Messeinrichtung (mME)',
        spalte2: 'Digitaler Stromzähler ohne aktive Kommunikationsanbindung',
        spalte3: 'Zeigt Verbrauch/Einspeisung digital an, wird aber nicht automatisch fernausgelesen',
      },
      {
        spalte1: 'Intelligentes Messsystem (iMSys / Smart Meter)',
        spalte2: 'Moderne Messeinrichtung + Smart-Meter-Gateway',
        spalte3: 'Kann Messwerte sicher übertragen und ist Grundlage für dynamische Tarife und standardisierte Netzkommunikation',
      },
      {
        spalte1: 'Steuerungseinrichtung',
        spalte2: 'Technik zur netzseitigen Steuerung am Netzanschlusspunkt',
        spalte3: 'Wird bei §14a-Verbrauchern und bestimmten Erzeugungsanlagen zusammen mit dem iMSys relevant',
      },
      {
        spalte1: 'HEMS / EMS',
        spalte2: 'Energiemanagement im Gebäude',
        spalte3: 'Optimiert PV, Speicher, Wallbox, Wärmepumpe und ggf. Stromtarife nach deinen Regeln',
      },
    ]),

    hinweisBlock(
      'Smart Meter und HEMS sind nicht dasselbe',
      p(
        t('Ein Smart Meter ist in erster Linie '),
        bold('Mess- und Kommunikationsinfrastruktur'),
        t('. Ein HEMS ist die Steuerungslogik im Haus. Ein HEMS kann beispielsweise PV-Überschuss erkennen, den Speicher priorisieren und danach die Wallbox freigeben. Dafür nutzt es häufig eigene lokale Energiemessung am Hausanschluss oder Daten von Wechselrichter und Speicher. Ein iMSys kann diese Welt ergänzen – aber der Einbau eines Smart Meters allein führt noch zu keiner Eigenverbrauchsoptimierung.'),
      ),
    ),

    textBlock(
      h('h2', t('Wer braucht 2026 ein intelligentes Messsystem?')),
      p(
        t('Das Messstellenbetriebsgesetz definiert sogenannte Pflichteinbaufälle. Die wichtigsten Fälle für private Energiesysteme sind 2026: Haushalte mit mehr als 6.000 kWh Jahresstromverbrauch, Betreiber von Erzeugungsanlagen mit mehr als 7 kW installierter Leistung und Betreiber steuerbarer Verbrauchseinrichtungen nach §14a EnWG.'),
      ),
      p(
        t('Bei Photovoltaikanlagen mit mehr als 7 kW und bei §14a-Verbrauchern sieht das Gesetz nicht nur ein intelligentes Messsystem, sondern grundsätzlich auch eine '),
        bold('Steuerungseinrichtung am Netzanschlusspunkt'),
        t(' vor. Der tatsächliche Einbau erfolgt allerdings im Rahmen gesetzlicher Rollout-Quoten und nicht zwingend bei jeder Bestandsanlage sofort am selben Tag.'),
      ),
    ),

    tabelleBlock('Smart-Meter-Pflicht 2026 – typische Fälle im Einfamilienhaus', [
      {
        spalte1: 'Jahresstromverbrauch bis 6.000 kWh',
        spalte2: 'Kein Pflichteinbau allein wegen des Verbrauchs',
        spalte3: 'Messstellenbetreiber kann optional ein iMSys einbauen',
      },
      {
        spalte1: 'Jahresstromverbrauch über 6.000 kWh',
        spalte2: 'Pflichteinbaufall',
        spalte3: 'Maßgeblich ist grundsätzlich der Durchschnitt der letzten drei Jahreswerte',
      },
      {
        spalte1: 'PV-Anlage bis einschließlich 7 kW',
        spalte2: 'Kein Pflichteinbau allein wegen der PV-Leistung',
        spalte3: 'Optionaler Einbau durch den Messstellenbetreiber möglich',
      },
      {
        spalte1: 'PV-Anlage über 7 kW',
        spalte2: 'Pflichteinbaufall im gesetzlichen Rollout',
        spalte3: 'iMSys plus Steuerungseinrichtung nach den Rollout-Vorgaben',
      },
      {
        spalte1: 'Neue Wallbox / Wärmepumpe / netzladender Speicher nach §14a',
        spalte2: 'Pflichteinbaufall',
        spalte3: 'iMSys plus Steuerungseinrichtung; §14a betrifft typischerweise Geräte über 4,2 kW Netzanschlussleistung',
      },
      {
        spalte1: 'Dynamischer Stromtarif gewünscht',
        spalte2: 'iMSys technisch erforderlich',
        spalte3: 'Seit 2025 müssen alle Stromlieferanten dynamische Tarife anbieten; nutzen kannst du sie nur mit iMSys',
      },
    ]),

    textBlock(
      h('h2', t('Wichtig: Pflichteinbau bedeutet nicht „morgen wird der Zähler getauscht"')),
      p(
        t('Der Smart-Meter-Rollout läuft stufenweise. Das Gesetz gibt den Messstellenbetreibern Quoten und Zieljahre vor. Für die typischen Pflichteinbaufälle im Haushaltsbereich läuft der Ausbau seit 2025. Für neu in Betrieb genommene Erzeugungsanlagen zwischen dem 25. Februar 2025 und dem 30. September 2026 muss die bis Ende 2026 ausgestattete Leistung die gesetzlich vorgegebene 90-Prozent-Quote erreichen.'),
      ),
      p(
        t('Das ist ein wichtiger Unterschied: '),
        bold('Die Pflicht richtet sich zunächst an den Messstellenbetreiber und wird über Rollout-Ziele umgesetzt.'),
        t(' Es bedeutet nicht, dass jede einzelne 8-kWp-PV-Anlage bei Inbetriebnahme automatisch sofort ein Smart-Meter-Gateway im Zählerschrank hat.'),
      ),
      p(
        t('Dass es regional Unterschiede und Wartezeiten gibt, ist 2026 weiterhin Realität. Zum Stichtag 31. Dezember 2025 waren nach Angaben der Bundesnetzagentur rund 3,09 Millionen intelligente Messsysteme eingebaut – das entsprach 5,5 % aller gemeldeten Messlokationen. Im März 2026 leitete die Bundesnetzagentur zudem Verfahren gegen Messstellenbetreiber ein, die die gesetzliche 20-Prozent-Ausbauquote für bestimmte Pflichteinbaufälle nicht erreicht hatten.'),
      ),
    ),

    textBlock(
      h('h2', t('Was kostet ein Smart Meter 2026?')),
      p(
        t('Für den grundzuständigen Messstellenbetreiber gelten gesetzliche Preisobergrenzen. Wichtig ist: Diese Preisobergrenzen beziehen sich auf den Messstellenbetrieb. Notwendige Umbauten am Zählerschrank gehören nicht automatisch dazu.'),
      ),
      p(
        t('Für Privathaushalte und typische PV-Anlagen sind vor allem folgende jährliche Höchstbeträge auf Kundenseite relevant:'),
      ),
    ),

    tabelleBlock('Preisobergrenzen 2026 für den Anschlussnutzer', [
      {
        spalte1: 'Moderne Messeinrichtung (kein iMSys)',
        spalte2: 'max. 25 € / Jahr',
        spalte3: 'Digitaler Zähler ohne aktive Gateway-Anbindung',
      },
      {
        spalte1: 'Optionales iMSys bei niedrigem Verbrauch / kleiner PV',
        spalte2: 'max. 30 € / Jahr',
        spalte3: 'Wenn der grundzuständige Messstellenbetreiber den optionalen Einbau vornimmt',
      },
      {
        spalte1: 'Verbrauch > 6.000 bis 10.000 kWh',
        spalte2: 'max. 40 € / Jahr',
        spalte3: 'Pflichteinbaufall über den Jahresverbrauch',
      },
      {
        spalte1: 'Verbrauch > 10.000 bis 20.000 kWh',
        spalte2: 'max. 50 € / Jahr',
        spalte3: 'Typisch z. B. bei Haushalten mit mehreren elektrischen Verbrauchern',
      },
      {
        spalte1: 'PV > 7 bis 15 kW oder §14a-Verbrauchseinrichtung',
        spalte2: 'max. 50 € / Jahr',
        spalte3: 'Preisobergrenze für das iMSys auf Kundenseite',
      },
      {
        spalte1: 'PV > 15 bis 25 kW / Verbrauch > 20.000 bis 50.000 kWh',
        spalte2: 'max. 110 € / Jahr',
        spalte3: 'Höhere Einbaufallgruppe',
      },
      {
        spalte1: 'PV > 25 bis 100 kW / Verbrauch > 50.000 bis 100.000 kWh',
        spalte2: 'max. 140 € / Jahr',
        spalte3: 'Vor allem größere Anlagen bzw. Gewerbe',
      },
      {
        spalte1: 'Steuerungseinrichtung bei §14a / PV > 7 kW',
        spalte2: 'zusätzlich max. 50 € / Jahr',
        spalte3: 'Für Einbau und Betrieb der Steuerungseinrichtung am Netzanschlusspunkt',
      },
    ]),

    hinweisBlock(
      'Mehrere Pflichten werden nicht einfach addiert',
      p(
        t('Wenn derselbe Zählpunkt gleichzeitig mehrere Einbaufälle erfüllt – zum Beispiel 9-kWp-PV, Wärmepumpe und 8.000 kWh Jahresverbrauch – werden die Preisobergrenzen für das iMSys nicht dreimal berechnet. Für den Messstellenbetrieb gilt grundsätzlich die '),
        bold('höchste einschlägige fallbezogene Preisobergrenze'),
        t('. Eine zusätzlich erforderliche Steuerungseinrichtung hat dagegen eine eigene Preisobergrenze.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ist mit dem Zählerschrank?')),
      p(
        t('Hier liegt eine der häufigsten Überraschungen. Die gesetzliche Preisobergrenze deckt Einbau, Betrieb und Wartung des Messsystems ab – aber nicht automatisch einen notwendigen Umbau der Kundenanlage. Ist der vorhandene Zählerplatz technisch nicht geeignet und muss der Zählerschrank erweitert oder erneuert werden, trägt diese Kosten grundsätzlich der Anschlussnehmer.'),
      ),
      p(
        t('Gerade bei älteren PV-Anlagen ist deshalb nicht der Smart Meter selbst der kostspielige Teil, sondern manchmal die '),
        bold('Modernisierung des Zählerplatzes'),
        t('. Vor einem freiwilligen Einbau sollte deshalb zuerst geprüft werden, ob der vorhandene Zählerschrank die Anforderungen erfüllt.'),
      ),
    ),

    tippBlock(
      'Smart Meter freiwillig vorziehen? Erst das Ziel klären',
      p(
        t('Seit 2025 kann eine vorzeitige Ausstattung mit einem intelligenten Messsystem verlangt werden. Für den vorzeitigen Einbau gilt ein einmaliges Entgelt von bis zu 100 € als gesetzlich vermutet angemessen; höhere tatsächliche Kosten muss der Messstellenbetreiber begründen. Bevor du das beauftragst, sollte aber klar sein, '),
        bold('wofür du das iMSys brauchst'),
        t(': dynamischer Tarif, §14a, Messdaten, HEMS-Anbindung oder Vorbereitung auf ein flexibles Energiesystem. Nur „weil Smart Meter modern klingt" ist kein sinnvoller Grund.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bringt das Smart Meter bei Photovoltaik wirklich?')),
      p(
        t('Bei einer PV-Anlage hat das iMSys drei grundsätzlich sinnvolle Rollen: Es schafft standardisierte Messdaten, es ermöglicht die sichere Kommunikation mit Markt- und Netzakteuren und es bildet eine wichtige technische Grundlage für neue Tarif- und Steuerungsmodelle.'),
      ),
      p(
        bold('1. Verbrauch und Einspeisung transparenter machen. '),
        t('Ein iMSys kann Messwerte automatisiert übertragen. Das erleichtert Abrechnung und schafft eine bessere Datengrundlage als der klassische einmal jährlich abgelesene Zählerstand.'),
      ),
      p(
        bold('2. Dynamische Stromtarife ermöglichen. '),
        t('Wer Strom zu zeitlich variablen Preisen beziehen will, braucht ein intelligentes Messsystem. Seit 2025 müssen alle Stromlieferanten dynamische Tarife anbieten. Ob sie sich lohnen, hängt aber vom Haus ab. Mehr dazu in unserer Einordnung '),
        link('Festpreis oder dynamischer Stromtarif?', '/stromtarife'),
        t('.'),
      ),
      p(
        bold('3. Steuerbare Verbraucher und Erzeugung einbinden. '),
        t('Wallbox, Wärmepumpe und netzladender Batteriespeicher können unter §14a EnWG fallen. Dafür wird die sichere Mess- und Steuerungsinfrastruktur relevant. Unsere ausführliche Einordnung findest du unter '),
        link('§14a EnWG: Wallbox, Wärmepumpe und Speicher', '/wallbox/paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen'),
        t('.'),
      ),
      p(
        bold('4. Künftige Flexibilität vorbereiten. '),
        t('Ein Haus mit PV, Speicher, Wärmepumpe und E-Auto wird zunehmend auf Preise, Netzsignale und Erzeugungsprognosen reagieren können. Das iMSys ist dafür die standardisierte Schnittstelle zur Außenwelt. Das HEMS entscheidet anschließend, was im Haus sinnvoll passiert.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ein Smart Meter ausdrücklich nicht kann')),
      p(
        t('Marketing wirft Messung und Optimierung gerne in einen Topf. In der Praxis sollte man sie trennen. Ein Smart Meter allein:'),
      ),
      ul(
        p(t('lädt deinen Batteriespeicher nicht automatisch zum besten Zeitpunkt,')),
        p(t('startet deine Wärmepumpe nicht automatisch bei PV-Überschuss,')),
        p(t('regelt die Wallbox nicht automatisch auf den verfügbaren Solarstrom,')),
        p(t('entscheidet nicht, ob ein dynamischer Tarif gerade wirtschaftlich sinnvoll ist,')),
        p(t('und ersetzt kein herstellerübergreifendes Energiemanagement.')),
      ),
      p(
        t('Genau dafür gibt es HEMS- und EMS-Systeme. Wie sich eine Bestandsanlage mit Monitoring und Energiemanagement aufrüsten lässt, erklären wir in '),
        link('HEMS und Monitoring nachrüsten', '/repowering/hems-monitoring'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Smart Meter + HEMS: Erst zusammen wird es interessant')),
      p(
        t('Der sinnvollste Blick ist deshalb nicht „Brauche ich einen Smart Meter?", sondern: '),
        bold('Wie soll mein Energiesystem in den nächsten Jahren arbeiten?'),
      ),
      p(
        t('Ein Beispiel: Mittags liefert die PV-Anlage Überschuss. Das HEMS erkennt den Überschuss und lädt zuerst den Speicher. Ist der Speicher ausreichend gefüllt, bekommt die Wallbox Leistung. Am nächsten Morgen prognostiziert das System wenig Sonne und einen günstigen Strompreis in der Nacht. Dann kann ein netzladbarer Speicher – sofern technisch, tariflich und regulatorisch passend – gezielt Energie aus dem Netz aufnehmen.'),
      ),
      p(
        t('Das iMSys liefert in diesem Gesamtsystem die standardisierte Mess- und Kommunikationsbasis zum Strommarkt und zum Netz. Das HEMS kümmert sich um die lokale Logik. Wer beide Aufgaben sauber trennt, kann Komponenten herstellerunabhängiger auswählen und vermeidet, dass der gesamte Nutzen an einer einzigen Cloud oder einem einzigen Stromtarif hängt.'),
      ),
    ),

    tabelleBlock('Wann ein Smart Meter besonders sinnvoll wird', [
      {
        spalte1: 'Kleine PV ohne Speicher, WP oder E-Auto',
        spalte2: 'Begrenzter Zusatznutzen',
        spalte3: 'Messung wird moderner, wirtschaftlicher Hebel allein aber klein',
      },
      {
        spalte1: 'PV + Batteriespeicher',
        spalte2: 'Sinnvoller Baustein',
        spalte3: 'Interessant bei dynamischem Tarif, Netzladung und HEMS – Speicheroptimierung braucht zusätzlich lokale Steuerung',
      },
      {
        spalte1: 'PV + Wallbox',
        spalte2: 'Deutlich relevanter',
        spalte3: '§14a und dynamische Ladezeiten machen Mess- und Steuerungsinfrastruktur wichtig',
      },
      {
        spalte1: 'PV + Wärmepumpe',
        spalte2: 'Deutlich relevanter',
        spalte3: 'Hoher Jahresverbrauch, §14a und flexible Laufzeiten erzeugen echten Nutzen',
      },
      {
        spalte1: 'PV + Speicher + Wallbox + Wärmepumpe',
        spalte2: 'Zentraler Infrastrukturbaustein',
        spalte3: 'Hier treffen Erzeugung, flexible Lasten, §14a, dynamische Tarife und HEMS zusammen',
      },
      {
        spalte1: 'Bestands-PV / Repowering',
        spalte2: 'Im Zuge des Umbaus prüfen',
        spalte3: 'Zählerplatz, Messkonzept, Speicher und HEMS gemeinsam betrachten statt einzeln nachzurüsten',
      },
    ]),

    textBlock(
      h('h2', t('Was gilt bei §14a für Wärmepumpe, Wallbox und Speicher?')),
      p(
        t('Seit dem 1. Januar 2024 gelten neue Regeln für steuerbare Verbrauchseinrichtungen. Betroffen sind grundsätzlich neue steuerbare Anlagen mit mehr als 4,2 kW Netzanschlussleistung – insbesondere private Wallboxen, Wärmepumpen, Klimageräte und Stromspeicher hinsichtlich ihres Netzbezugs.'),
      ),
      p(
        t('Der Netzbetreiber darf den Netzbezug dieser Geräte bei einer konkreten Überlastungssituation begrenzen. Der normale Haushaltsstrom ist davon nicht betroffen. Im Gegenzug gibt es reduzierte Netzentgelte. Technische Grundlage für die netzorientierte Steuerung sind insbesondere das iMSys und eine verbundene Steuerungseinrichtung.'),
      ),
      p(
        t('Interessant für Häuser mit mehreren Komponenten: Die Bundesnetzagentur sieht ausdrücklich einen technologieoffenen Ansatz über ein Energiemanagementsystem vor. Das EMS kann die zulässige Netzbezugsleistung innerhalb des Hauses verteilen. Eigener Solarstrom kann dabei zusätzlich genutzt werden – die Begrenzung bezieht sich auf den Netzbezug, nicht auf den lokal erzeugten PV-Strom.'),
      ),
      p(
        t('Für netzladende Batteriespeicher haben wir das separat aufbereitet: '),
        link('§14a EnWG bei Stromspeichern', '/stromspeicher/paragraf-14a-enwg-stromspeicher'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Kann ich meinen Messstellenbetreiber selbst wählen?')),
      p(
        t('Grundsätzlich ja. Neben dem grundzuständigen Messstellenbetreiber kann ein wettbewerblicher Messstellenbetreiber beauftragt werden. Das kann interessant sein, wenn der lokale Rollout langsam ist oder zusätzliche Daten- und Servicefunktionen gewünscht sind.'),
      ),
      p(
        t('Wichtig: Die gesetzlichen Preisobergrenzen des grundzuständigen Messstellenbetreibers gelten für wettbewerbliche Messstellenbetreiber nicht automatisch. Deshalb nicht nur auf die Einbaugeschwindigkeit schauen, sondern auf jährliche Kosten, Vertragslaufzeit, Datenzugang, Zusatzdienste und Kündigungsbedingungen.'),
      ),
    ),

    hinweisBlock(
      'Der günstigste Messstellenvertrag ist nicht automatisch das beste Energiesystem',
      p(
        t('Bei PV, Speicher, Wallbox und Wärmepumpe zählt nicht nur, ob irgendwo Messdaten in einer App erscheinen. Entscheidend ist, '),
        bold('ob du deine Daten und deine Technik sinnvoll weiterverwenden kannst'),
        t('. Offene Schnittstellen, lokaler Datenzugang und herstellerübergreifende Steuerbarkeit sind langfristig oft wertvoller als eine hübsche App, die nur innerhalb eines einzelnen Ökosystems funktioniert.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Praxis-Check vor Smart-Meter- oder HEMS-Nachrüstung')),
      p(
        t('Bevor wir einen Smart Meter, Speicher oder ein Energiemanagement nachrüsten, würden wir bei einem bestehenden Haus nicht mit dem Produkt anfangen, sondern mit sechs Fragen:'),
      ),
      ul(
        p(t('Wie groß sind PV-Anlage und Jahresstromverbrauch – besteht bereits ein Pflichteinbaufall?')),
        p(t('Gibt es Wärmepumpe, Wallbox oder einen netzladenden Speicher nach §14a?')),
        p(t('Ist der Zählerschrank technisch für die geplante Mess- und Steuerungstechnik vorbereitet?')),
        p(t('Soll ein dynamischer Stromtarif genutzt werden – und gibt es überhaupt genügend flexible Lasten?')),
        p(t('Welche Daten und Schnittstellen liefern Wechselrichter, Speicher, Wallbox und Wärmepumpe bereits?')),
        p(t('Soll das System herstellergebunden in einer Cloud laufen oder offen und möglichst lokal steuerbar bleiben?')),
      ),
      p(
        t('Erst daraus ergibt sich, ob lediglich der gesetzliche Zählerwechsel abzuwarten ist, ein freiwilliger Smart-Meter-Einbau sinnvoll ist oder ob das eigentliche Thema eher HEMS, Zählerschrank, Messkonzept oder Komponenten-Kompatibilität heißt.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Smart Meter sind 2026 kein Spielzeug mehr, sondern ein wachsender Teil der Energieinfrastruktur. Für Haushalte mit hohem Stromverbrauch, PV über 7 kW und steuerbaren Verbrauchern nach §14a ist der Rollout gesetzlich vorgesehen. Für dynamische Stromtarife ist das intelligente Messsystem ohnehin Voraussetzung.'),
      ),
      p(
        t('Der entscheidende Punkt wird trotzdem oft falsch dargestellt: '),
        bold('Das Smart Meter ist nicht das Energiemanagement.'),
        t(' Es misst, kommuniziert und schafft eine standardisierte Verbindung nach außen. Erst Speicher, Wallbox, Wärmepumpe und ein sauber geplantes HEMS machen aus diesen Daten ein funktionierendes Energiesystem.'),
      ),
      p(
        t('Deshalb sollte niemand einen Smart Meter isoliert betrachten. Wer heute PV plant oder eine Bestandsanlage modernisiert, sollte Zählerplatz, §14a, Speicher, dynamischen Tarif und Energiemanagement gemeinsam denken. Dann wird aus dem Pflichtzähler tatsächlich Infrastruktur, die später einen Nutzen hat.'),
      ),
    ),

    textBlock(
      h('h2', t('Stand und Quellen')),
      p(
        t('Stand dieses Artikels: 10. August 2026. Grundlage sind insbesondere das aktuelle Messstellenbetriebsgesetz und die Verbraucherinformationen der Bundesnetzagentur. Gesetzliche Vorgaben und Preisobergrenzen können sich ändern.'),
      ),
      ul(
        p(link('§ 29 MsbG – Pflichteinbaufälle', 'https://www.gesetze-im-internet.de/messbg/__29.html')),
        p(link('§ 30 MsbG – Preisobergrenzen', 'https://www.gesetze-im-internet.de/messbg/__30.html')),
        p(link('§ 45 MsbG – Rollout-Zielquoten', 'https://www.gesetze-im-internet.de/messbg/__45.html')),
        p(link('§ 41a EnWG – dynamische Stromtarife', 'https://www.gesetze-im-internet.de/enwg_2005/__41a.html')),
        p(link('Bundesnetzagentur – Messeinrichtungen und intelligente Messsysteme', 'https://www.bundesnetzagentur.de/DE/Vportal/Energie/Metering/start.html')),
        p(link('Bundesnetzagentur – §14a EnWG', 'https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/artikel.html')),
      ),
    ),

    ctaBlock({
      titel: 'Smart Meter, HEMS und Zählerplatz zusammen prüfen lassen',
      text:
        'Du planst eine PV-Anlage, möchtest einen dynamischen Stromtarif nutzen oder willst eine bestehende Anlage um Speicher, Wallbox, Wärmepumpe oder HEMS erweitern? Wir prüfen am Niederrhein und im Ruhrgebiet nicht nur den Zähler, sondern das komplette Energiesystem: Zählerschrank, Messkonzept, §14a, Schnittstellen und sinnvolle Steuerung – offen, herstellerübergreifend und ohne unnötige Technik.',
      buttonText: 'Termin anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist ein Smart Meter genau?',
      'Ein Smart Meter im gesetzlichen Sinn ist ein intelligentes Messsystem (iMSys). Es besteht aus einer modernen digitalen Messeinrichtung und einem Smart-Meter-Gateway. Das Gateway bindet den Zähler sicher an ein Kommunikationsnetz an und ermöglicht die automatisierte Übertragung von Messdaten. Ein digitaler Zähler ohne Gateway ist noch kein intelligentes Messsystem.',
    ),
    faqItem(
      'Ab wann ist ein Smart Meter 2026 Pflicht?',
      'Pflichteinbaufälle sind unter anderem Letztverbraucher mit mehr als 6.000 kWh Jahresstromverbrauch, Betreiber von Erzeugungsanlagen mit mehr als 7 kW installierter Leistung sowie Betreiber steuerbarer Verbrauchseinrichtungen nach §14a EnWG. Der tatsächliche Einbau erfolgt nach den gesetzlichen Rollout-Fristen und Zielquoten – nicht jede betroffene Anlage bekommt automatisch sofort am Tag der Inbetriebnahme ein iMSys.',
    ),
    faqItem(
      'Braucht jede PV-Anlage über 7 kWp sofort ein Smart Meter?',
      'PV-Anlagen mit mehr als 7 kW installierter Leistung gehören zum gesetzlichen Pflichteinbau. Der Rollout wird aber über Zielquoten und Fristen nach §45 MsbG umgesetzt. Deshalb kann eine Anlage bereits in Betrieb sein, obwohl das intelligente Messsystem erst später durch den Messstellenbetreiber eingebaut wird.',
    ),
    faqItem(
      'Was kostet ein Smart Meter bei einer typischen PV-Anlage?',
      'Beim grundzuständigen Messstellenbetreiber gelten gesetzliche Preisobergrenzen. Für eine PV-Anlage über 7 bis 15 kW liegt die Preisobergrenze für das iMSys auf Kundenseite bei 50 Euro brutto pro Jahr. Für eine zusätzlich erforderliche Steuerungseinrichtung können weitere bis zu 50 Euro pro Jahr berechnet werden. Notwendige Umbauten am Zählerschrank sind darin nicht enthalten.',
    ),
    faqItem(
      'Was kostet ein Smart Meter bei mehr als 6.000 kWh Stromverbrauch?',
      'Bei mehr als 6.000 bis 10.000 kWh Jahresverbrauch liegt die jährliche Preisobergrenze auf Kundenseite bei 40 Euro. Bei mehr als 10.000 bis 20.000 kWh sind es 50 Euro. Für höhere Verbrauchsgruppen gelten höhere Preisobergrenzen. Maßgeblich ist grundsätzlich der Durchschnitt der letzten drei erfassten Jahresverbrauchswerte.',
    ),
    faqItem(
      'Brauche ich für einen dynamischen Stromtarif ein Smart Meter?',
      'Ja. Für einen dynamischen Stromtarif ist ein intelligentes Messsystem erforderlich, weil der Verbrauch zeitaufgelöst erfasst und abgerechnet werden muss. Seit 2025 sind alle Stromlieferanten verpflichtet, dynamische Tarife anzubieten. Ob der Tarif wirtschaftlich sinnvoll ist, hängt aber stark davon ab, ob du flexible Verbraucher wie Speicher, Wallbox oder Wärmepumpe gezielt verschieben kannst.',
    ),
    faqItem(
      'Ist ein Smart Meter dasselbe wie ein HEMS?',
      'Nein. Das Smart Meter misst und kommuniziert. Ein HEMS oder EMS steuert die Energieflüsse im Gebäude. Es entscheidet beispielsweise, ob PV-Überschuss in den Speicher, in die Wallbox oder zur Wärmepumpe geht. Ein HEMS kann dafür auch eigene lokale Messdaten verwenden. Das Smart Meter und das HEMS ergänzen sich, ersetzen sich aber nicht.',
    ),
    faqItem(
      'Brauche ich mit Wärmepumpe oder Wallbox ein Smart Meter?',
      'Neue steuerbare Verbrauchseinrichtungen nach §14a EnWG gehören zum Pflichteinbau. Betroffen sind grundsätzlich steuerbare Geräte mit mehr als 4,2 kW Netzanschlussleistung, insbesondere Wallboxen, Wärmepumpen, Klimageräte und netzladende Stromspeicher. Für die netzorientierte Steuerung werden iMSys und Steuerungseinrichtung relevant.',
    ),
    faqItem(
      'Kann der Netzbetreiber mit dem Smart Meter meine Wärmepumpe oder Wallbox komplett abschalten?',
      'Nein. Bei §14a geht es um eine zeitweise Begrenzung des Netzbezugs in konkreten Überlastungssituationen, nicht um eine vollständige Abschaltung des Haushalts. Der normale Haushaltsstrom bleibt unberührt. Bei Einsatz eines Energiemanagementsystems kann lokal erzeugter PV-Strom zusätzlich genutzt und die verfügbare Netzleistung intelligent zwischen steuerbaren Verbrauchern verteilt werden.',
    ),
    faqItem(
      'Kann ich ein Smart Meter freiwillig früher einbauen lassen?',
      'Ja. Seit 2025 kann eine vorzeitige Ausstattung verlangt werden. Für den vorzeitigen Einbau gilt ein einmaliger Betrag bis 100 Euro als gesetzlich vermutet angemessen; bei tatsächlich höheren Kosten kann der Messstellenbetreiber mehr verlangen, muss das aber begründen. Nach dem Einbau gelten die jeweiligen jährlichen Preisobergrenzen.',
    ),
    faqItem(
      'Sind Zählerschrank-Umbauten in der Smart-Meter-Preisobergrenze enthalten?',
      'Nein. Die Preisobergrenzen des Messstellenbetriebsgesetzes betreffen den Messstellenbetrieb. Muss der Zählerschrank baulich angepasst, erweitert oder erneuert werden, trägt diese Kosten grundsätzlich der Anschlussnehmer zusätzlich. Gerade bei älteren Bestandsanlagen sollte der Zählerplatz deshalb vor einer Nachrüstung geprüft werden.',
    ),
    faqItem(
      'Kann ich einen anderen Messstellenbetreiber wählen?',
      'Grundsätzlich ja. Neben dem grundzuständigen Messstellenbetreiber kann ein wettbewerblicher Messstellenbetreiber beauftragt werden. Die gesetzlichen Preisobergrenzen für den grundzuständigen Messstellenbetreiber gelten dort jedoch nicht automatisch. Deshalb sollten laufende Kosten, Vertragslaufzeit, Datenzugang und Zusatzdienste verglichen werden.',
    ),
  ],
}

await upsertRatgeberArticle(article)
