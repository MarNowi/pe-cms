// scripts/articles/negative-strompreise-2026-pv-speicher-eauto.mjs

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
  titel: 'Negative Strompreise 2026: Problem für die PV-Anlage oder Chance für Speicher und E-Auto?',
  slug: 'negative-strompreise-2026-pv-speicher-eauto',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'Negative Strompreise werden häufiger – aber sie bedeuten weder kostenlosen Haushaltsstrom noch automatisch ein Problem für jede PV-Anlage. Entscheidend ist, ob du Strom einspeist oder beziehst, welchen Tarif du nutzt, wann deine Anlage in Betrieb ging und ob Speicher, Wallbox oder Wärmepumpe flexibel gesteuert werden können. Eine praxisnahe Einordnung für PV-Betreiber 2026.',
  lesezeit: 16,

  seo: seo(
    'Negative Strompreise 2026: PV, Speicher & E-Auto richtig nutzen | PEAK.Energy',
    'Negative Strompreise 2026 verständlich erklärt: Folgen für PV-Einspeisung, EEG-Vergütung, dynamische Tarife, Speicher, Wallbox, Wärmepumpe und HEMS.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Negative Strompreise entstehen am Großhandelsmarkt, wenn '),
      bold('viel Stromangebot auf zu wenig Nachfrage'),
      t(' trifft. Besonders typisch sind sonnige oder windreiche Zeitfenster bei gleichzeitig niedrigem Verbrauch.'),
    ),
    summaryPoint(
      t('2025 gab es in Deutschland '),
      bold('573 Stunden mit negativen Day-Ahead-Großhandelspreisen'),
      t('. Seit Oktober 2025 wird der Day-Ahead-Markt viertelstündlich gehandelt; im ersten Quartal 2026 registrierte SMARD 172 Viertelstunden mit negativen Preisen.'),
    ),
    summaryPoint(
      t('Ein negativer Börsenpreis bedeutet '),
      bold('nicht automatisch kostenlosen Strom zu Hause'),
      t('. Netzentgelte, Steuern, Umlagen, Lieferantenaufschläge und weitere Tarifbestandteile können weiterhin anfallen.'),
    ),
    summaryPoint(
      t('Für neue PV-Anlagen kann § 51 EEG dazu führen, dass der EEG-Zahlungsanspruch in negativen Marktzeitfenstern auf '),
      bold('0 Cent'),
      t(' sinkt. Bei Anlagen unter 100 kW greift das grundsätzlich erst nach Ablauf des Kalenderjahres, in dem ein intelligentes Messsystem eingebaut wurde.'),
    ),
    summaryPoint(
      t('Speicher, E-Auto und Wärmepumpe machen negative Preise potenziell nutzbar – aber nur, wenn sie intelligent gesteuert werden. '),
      bold('Flexibilität ist wertvoller als bloß möglichst viel Verbrauch'),
      t('.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum negative Strompreise plötzlich überall Thema sind')),
      p(
        t('Noch vor wenigen Jahren wirkten negative Strompreise wie eine Kuriosität aus dem Börsenhandel. Inzwischen gehören sie zum Stromsystem dazu. Je mehr Photovoltaik und Wind gleichzeitig produzieren, desto häufiger gibt es Zeitfenster mit sehr viel günstigem Stromangebot. Wenn die Nachfrage gleichzeitig niedrig ist, kann der Preis am kurzfristigen Strommarkt unter null fallen.'),
      ),
      p(
        t('Für private Haushalte wird das Thema aus zwei Gründen relevant: Erstens verbreiten sich '),
        bold('dynamische Stromtarife'),
        t(', die Marktpreissignale stärker an Endkunden weitergeben. Zweitens verändert das Solarspitzengesetz die Förderung neuer PV-Anlagen bei negativen Preisen.'),
      ),
      p(
        t('Damit entsteht eine neue Logik: Wer Strom zu einem ungünstigen Zeitpunkt einspeist, kann weniger Vergütung erhalten. Wer dagegen Verbrauch flexibel verschieben kann, hat die Chance, günstige Marktphasen zu nutzen. Speicher, Wallbox, Wärmepumpe und HEMS werden dadurch wichtiger – nicht weil sie vorgeschrieben sind, sondern weil sie Flexibilität schaffen.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bedeutet ein negativer Strompreis überhaupt?')),
      p(
        t('Der Strompreis an der Börse entsteht aus Angebot und Nachfrage. Strom hat dabei eine Besonderheit: Er muss in jedem Moment erzeugt und verbraucht beziehungsweise gespeichert oder exportiert werden. Angebot und Nachfrage müssen sich laufend ausgleichen.'),
      ),
      p(
        t('Wenn sehr viel Strom angeboten wird, gleichzeitig aber nur wenig Nachfrage vorhanden ist, sinkt der Börsenpreis. Wird das Überangebot groß genug, kann der Preis '),
        bold('unter 0 Euro pro Megawattstunde'),
        t(' fallen. Marktteilnehmer werden dann dafür bezahlt, Strom abzunehmen.'),
      ),
      p(
        t('Das ist kein Fehler im Markt. Der negative Preis ist ein wirtschaftliches Signal: '),
        bold('In diesem Moment ist zusätzliche Nachfrage wertvoll'),
        t(' – oder zusätzliche Erzeugung sollte reduziert werden.'),
      ),
    ),

    tabelleBlock('Typische Situationen für negative Strompreise', [
      {
        spalte1: 'Sonniger Sonntagmittag',
        spalte2: 'Hohe PV-Erzeugung + geringe Gewerbe- und Industrienachfrage',
        spalte3: 'Klassisches Solarüberschuss-Fenster',
      },
      {
        spalte1: 'Windreicher Feiertag',
        spalte2: 'Hohe Windproduktion + niedriger Verbrauch',
        spalte3: 'Überangebot kann mehrere Regionen gleichzeitig betreffen',
      },
      {
        spalte1: 'Frühling / Sommer',
        spalte2: 'Mehr PV-Erzeugung, gleichzeitig weniger Heizstrombedarf',
        spalte3: 'Mittags häufiger sehr niedrige Preise',
      },
      {
        spalte1: 'Unflexible Erzeugung',
        spalte2: 'Kraftwerke oder andere Erzeuger reduzieren ihre Leistung nicht sofort',
        spalte3: 'Das Angebot reagiert langsamer als der Preis',
      },
    ]),

    textBlock(
      h('h2', t('Wie häufig sind negative Strompreise inzwischen?')),
      p(
        t('Die Entwicklung ist deutlich. Nach Daten der Bundesnetzagentur gab es 2024 insgesamt 457 Stunden mit negativen Day-Ahead-Großhandelspreisen. 2025 waren es bereits '),
        bold('573 von 8.760 Stunden'),
        t('. Gleichzeitig lag der durchschnittliche Day-Ahead-Großhandelspreis 2025 bei 89,32 Euro/MWh. Negative Preise bedeuten also nicht, dass Strom insgesamt dauerhaft billig geworden wäre – die Ausschläge nach unten und oben werden vielmehr wichtiger.'),
      ),
      p(
        t('Seit Oktober 2025 werden die Produkte im Day-Ahead-Markt in '),
        bold('Viertelstunden'),
        t(' gehandelt. Deshalb lassen sich Zahlen ab diesem Zeitpunkt nicht mehr ohne Weiteres mit früheren Stundenwerten vergleichen. Im ersten Quartal 2026 registrierte SMARD 172 negative Viertelstunden von insgesamt 8.640 Viertelstunden. Der niedrigste Day-Ahead-Preis des Quartals lag bei -13,31 Euro/MWh, der höchste bei 429,36 Euro/MWh.'),
      ),
      p(
        t('Das zeigt den eigentlichen Trend: Nicht nur niedrige Preise werden relevant. Das Stromsystem erlebt auch hohe positive Preisspitzen. Genau deshalb gewinnt die Fähigkeit an Wert, Verbrauch zeitlich zu verschieben.'),
      ),
    ),

    hinweisBlock(
      '573 Stunden 2025 und 172 Viertelstunden in Q1 2026 sind nicht direkt vergleichbar',
      p(
        t('Seit Oktober 2025 arbeitet der gekoppelte Day-Ahead-Markt mit 15-Minuten-Produkten. Früher wurde in Stunden gezählt, heute in Viertelstunden. Wer aktuelle Statistiken vergleicht, muss deshalb immer auf die jeweilige Zeiteinheit achten.'),
      ),
    ),

    textBlock(
      h('h2', t('Bedeutet negativer Börsenstrompreis kostenlosen Strom für den Haushalt?')),
      p(
        t('Nein – jedenfalls nicht automatisch. Der Börsenpreis ist nur ein Bestandteil des Strompreises, den ein Haushalt zahlt. Selbst wenn der Beschaffungspreis negativ ist, können weitere Bestandteile positiv bleiben.'),
      ),
    ),

    tabelleBlock('Börsenpreis und Haushaltsstrompreis sind nicht dasselbe', [
      {
        spalte1: 'Day-Ahead-Börsenpreis',
        spalte2: 'Kann negativ werden',
        spalte3: 'Nur der marktbasierte Beschaffungsanteil',
      },
      {
        spalte1: 'Netzentgelte',
        spalte2: 'Bleiben grundsätzlich bestehen',
        spalte3: 'Bei §14a können besondere Entgeltmodule relevant sein',
      },
      {
        spalte1: 'Steuern / Umlagen / Abgaben',
        spalte2: 'Bleiben je nach Preisbestandteil bestehen',
        spalte3: 'Werden nicht automatisch negativ',
      },
      {
        spalte1: 'Lieferantenaufschlag / Marge',
        spalte2: 'Tarifabhängig',
        spalte3: 'Kann pro kWh oder über Servicegebühren berechnet werden',
      },
      {
        spalte1: 'Grundpreis / Messstellenbetrieb',
        spalte2: 'Unabhängig vom einzelnen Marktzeitfenster',
        spalte3: 'Smart Meter kann zusätzliche Messkosten verursachen',
      },
    ]),

    p(
      t('Bei einzelnen dynamischen Tarifen kann der variable Arbeitspreis in extremen Situationen tatsächlich sehr niedrig oder sogar negativ werden. Das ist aber eine Frage des '),
      bold('konkreten Tarifmodells'),
      t(' – nicht eine automatische Folge eines negativen Börsenpreises.'),
    ),
    p(
      t('Wie dynamische Tarife funktionieren und warum ein niedriger Börsenpreis allein noch keinen günstigen Endkundenpreis garantiert, erklären wir ausführlich in '),
      link('Dynamischer Stromtarif mit PV und Speicher: Wann er sich wirklich lohnt', '/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich'),
      t('.'),
    ),

    textBlock(
      h('h2', t('Was bedeuten negative Preise für eine neue PV-Anlage?')),
      p(
        t('Für PV-Betreiber muss zwischen dem Marktpreis und dem EEG-Zahlungsanspruch unterschieden werden. § 51 EEG sieht für neue Anlagen vor: In Zeiträumen, in denen der maßgebliche Spotmarktpreis negativ ist, '),
        bold('verringert sich der anzulegende Wert auf null'),
        t('.'),
      ),
      p(
        t('Für typische private Anlagen gibt es allerdings eine wichtige Übergangsregel. Bei Anlagen mit weniger als 100 kW wird § 51 grundsätzlich '),
        bold('nicht vor Ablauf des Kalenderjahres angewendet, in dem die Anlage mit einem intelligenten Messsystem ausgestattet wurde'),
        t('.'),
      ),
      p(
        t('Beispiel: Eine neue 12-kWp-Anlage erhält im Juni 2026 ein intelligentes Messsystem. Dann greift die neue §51-Systematik grundsätzlich erst ab dem 1. Januar 2027. Der genaue Fall hängt zusätzlich von Inbetriebnahmedatum und Übergangsrecht ab.'),
      ),
      p(
        t('Das Zusammenspiel mit der 60-%-Regel erklären wir im Beitrag '),
        link('Solarspitzengesetz 2026: 60-%-Regel, negative Strompreise und Smart Meter', '/strom-energiemanagement/solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter'),
        t('.'),
      ),
    ),

    hinweisBlock(
      '0 Cent EEG-Zahlungsanspruch ist keine „Strafe"',
      p(
        t('Wenn § 51 greift, reduziert sich der anzulegende Wert für das betreffende negative Marktzeitfenster auf null. Das ist nicht automatisch dasselbe wie eine Zahlungspflicht des privaten PV-Betreibers an den Netzbetreiber. Bei Direktvermarktungs- oder anderen Vertragsmodellen können zusätzliche Marktregeln gelten.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ist mit älteren PV-Anlagen?')),
      p(
        t('Die neue Regel darf nicht pauschal auf jede Bestandsanlage übertragen werden. Entscheidend ist das '),
        bold('Inbetriebnahmedatum'),
        t('. Für Anlagen, die nach dem 31. Dezember 2022 und vor dem 25. Februar 2025 in Betrieb genommen wurden, verweist § 100 EEG auf die frühere Fassung von § 51.'),
      ),
      p(
        t('Für eine private PV-Anlage aus 2023 oder 2024 gelten deshalb andere Regeln als für eine Neuanlage aus 2026. Auch noch ältere Anlagen können wiederum unter andere EEG-Fassungen fallen.'),
      ),
      p(
        t('Wer eine Bestandsanlage betreibt, sollte deshalb nicht aus einer Überschrift wie „Bei negativen Strompreisen gibt es keine Einspeisevergütung mehr" ableiten, dass dies automatisch für die eigene Anlage gilt. Ohne Inbetriebnahmedatum ist die Aussage unvollständig.'),
      ),
    ),

    textBlock(
      h('h2', t('Werden die Nullvergütungszeiten später ausgeglichen?')),
      p(
        t('Für Anlagen, bei denen sich der anzulegende Wert nach § 51 auf null reduziert, enthält § 51a EEG einen Kompensationsmechanismus. Der Vergütungszeitraum verlängert sich grundsätzlich um entsprechende Zeitkontingente.'),
      ),
      p(
        t('Bei Solaranlagen ist das allerdings keine einfache 1:1-Regel. Die betroffenen Viertelstunden werden mit '),
        bold('Faktor 0,5'),
        t(' in sogenannte Volllastviertelstunden umgerechnet. Daraus wird später ein zusätzlicher Vergütungszeitraum berechnet.'),
      ),
      p(
        t('Damit verschwinden die negativen Preiszeiten nicht vollständig aus der Förderlogik. Trotzdem ist eine spätere Verlängerung wirtschaftlich nicht dasselbe wie eine Vergütung heute – schon allein, weil der zusätzliche Zeitraum viele Jahre in der Zukunft liegt.'),
      ),
    ),

    textBlock(
      h('h2', t('Ist ein Batteriespeicher die Lösung für negative Strompreise?')),
      p(
        t('Ein Speicher ist eine der technisch naheliegendsten Antworten auf stark schwankende Preise. Wenn Strom im Netz günstig ist, kann er – sofern das System es erlaubt – geladen werden. Wenn Strom teuer ist, kann der gespeicherte Strom später Netzbezug vermeiden.'),
      ),
      p(
        t('Für PV-Betreiber ist aber noch wichtiger: Der Speicher kann mittags '),
        bold('eigenen Solarstrom aufnehmen'),
        t(', anstatt ihn in einem ungünstigen Marktzeitfenster einzuspeisen.'),
      ),
      p(
        t('Die einfache Regel „negativer Preis = Speicher aus dem Netz vollmachen" ist trotzdem falsch. Denn ein nachts oder vormittags vollgeladener Speicher kann am sonnigen Mittag keinen PV-Überschuss mehr aufnehmen. Dann wird günstiger Netzstrom gekauft, während kostenloser eigener Solarstrom später keinen Platz mehr findet.'),
      ),
      p(
        t('Eine sinnvolle Speicherstrategie muss deshalb mindestens '),
        bold('Strompreis, PV-Prognose, Speicherfüllstand und erwarteten Verbrauch'),
        t(' zusammen betrachten.'),
      ),
    ),

    tippBlock(
      'Freie Speicherkapazität kann wertvoller sein als der billigste Strompreis',
      p(
        t('Wenn für den nächsten Mittag hohe PV-Erzeugung erwartet wird, kann es wirtschaftlich sinnvoll sein, den Speicher trotz günstiger Nachtpreise nicht vollständig aus dem Netz zu laden. Ein HEMS sollte deshalb nicht nur auf „billig" reagieren, sondern auf den gesamten nächsten Tag.'),
      ),
    ),

    textBlock(
      h('h2', t('Das E-Auto: oft der beste Verbraucher für negative Preisfenster')),
      p(
        t('Ein E-Auto ist für flexible Strompreise besonders geeignet. Es kann relativ viel Energie aufnehmen, und der genaue Ladezeitpunkt ist häufig nicht kritisch. Entscheidend ist meist nur, dass das Fahrzeug zu einer bestimmten Abfahrtszeit einen gewünschten Ladezustand erreicht.'),
      ),
      p(
        t('Steht das Auto beispielsweise von 18 Uhr bis 7 Uhr am Haus, muss es nicht zwingend direkt nach dem Einstecken laden. Eine intelligente Wallbox kann innerhalb dieses Fensters günstige Zeiträume nutzen.'),
      ),
      p(
        t('Mit Photovoltaik entsteht zusätzlich eine Priorisierung: '),
        bold('erst günstiger eigener Solarstrom, dann günstiger Netzstrom'),
        t(' – jeweils so, dass das Ladeziel rechtzeitig erreicht wird.'),
      ),
      p(
        t('Genau diese Flexibilität ist aus Systemsicht wertvoll: Statt zusätzliche PV- oder Windleistung abzuregeln, kann Strom in Mobilität verschoben werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Und die Wärmepumpe? Flexibel ja – aber nicht um jeden Preis')),
      p(
        t('Auch eine Wärmepumpe kann zeitlich etwas verschoben werden. Das Gebäude selbst speichert Wärme, ebenso Warmwasser- und gegebenenfalls Pufferspeicher.'),
      ),
      p(
        t('Trotzdem sollte eine Wärmepumpe nicht blind auf jeden negativen Strompreis reagieren. Wenn sie dafür mit unnötig hoher Vorlauftemperatur arbeitet, verschlechtert sich die Effizienz. Dann kann ein Teil des günstigen Strompreises durch einen schlechteren COP wieder verloren gehen.'),
      ),
      p(
        t('Die richtige Reihenfolge lautet: '),
        bold('effizienten Wärmepumpenbetrieb sicherstellen und innerhalb dieses Rahmens zeitlich optimieren'),
        t('. Komfort und Gebäudephysik bleiben wichtiger als das letzte Cent-Signal aus der Strombörse.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum ein HEMS wichtiger wird als die Strompreis-App')),
      p(
        t('Eine App kann anzeigen, dass Strom von 12:15 bis 12:30 Uhr besonders günstig ist. Das beantwortet aber noch nicht die entscheidende Frage: '),
        bold('Welcher Verbraucher sollte diese Energie jetzt aufnehmen?'),
      ),
      p(
        t('Ein HEMS kann mehrere Informationen zusammenführen:'),
      ),
      ul(
        p(t('aktuelle und kommende Strompreise,')),
        p(t('PV-Ertragsprognose,')),
        p(t('Hausverbrauch und erwartetes Lastprofil,')),
        p(t('Ladezustand und Reserve des Batteriespeichers,')),
        p(t('Abfahrtszeit und Ladeziel des E-Autos,')),
        p(t('Wärmebedarf und Betriebsgrenzen der Wärmepumpe,')),
        p(t('Netzentgelt-Zeitfenster nach §14a, soweit verfügbar,')),
        p(t('technische Grenzen am Netzanschluss.')),
      ),
      p(
        t('Damit lautet das Ziel nicht mehr „immer zum billigsten Preis verbrauchen", sondern '),
        bold('die Gesamtkosten des Hauses minimieren, ohne Komfort und Technik zu verschlechtern'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Ein einfaches Beispiel: negativer Mittag, teurer Abend')),
      p(
        t('Nehmen wir einen sonnigen Frühlingstag als vereinfachtes Beispiel. Mittags herrscht viel Solarstrom im Netz, der Börsenpreis wird negativ. Abends sinkt die PV-Erzeugung, gleichzeitig steigt die Nachfrage und damit der Marktpreis.'),
      ),
    ),

    tabelleBlock('Zwei Strategien im Vergleich – vereinfachtes Beispiel', [
      {
        spalte1: '12:30 Uhr',
        spalte2: 'Ohne Steuerung: Speicher bereits voll, PV speist Überschuss ein',
        spalte3: 'Mit HEMS: Speicher hat bewusst freie Kapazität und lädt PV-Überschuss',
      },
      {
        spalte1: '14:00 Uhr',
        spalte2: 'E-Auto wartet bis abends',
        spalte3: 'Wallbox nutzt PV-Überschuss bzw. günstiges Marktfenster',
      },
      {
        spalte1: '19:00 Uhr',
        spalte2: 'PV kaum noch da, Haus und Auto beziehen teuren Netzstrom',
        spalte3: 'Haus wird aus Speicher versorgt, Fahrzeug ist bereits geladen',
      },
    ]),

    p(
      t('Das Beispiel zeigt: Der wirtschaftliche Vorteil entsteht weniger daraus, dass der Strompreis einmal negativ war. Er entsteht daraus, dass '),
      bold('Energie zeitlich verschoben'),
      t(' wurde.'),
    ),

    textBlock(
      h('h2', t('Sollte man bei negativen Preisen mehr Strom verbrauchen?')),
      p(
        t('Nicht um des Verbrauchens willen. Es wäre unsinnig, elektrische Energie zu verschwenden, nur weil sie gerade günstig ist. Sinnvoll ist vielmehr, Verbrauch zu '),
        bold('verschieben'),
        t(', der ohnehin später stattfinden würde.'),
      ),
      p(
        t('Gute Beispiele sind:'),
      ),
      ul(
        p(t('E-Auto früher oder später laden,')),
        p(t('Warmwasser mit der Wärmepumpe innerhalb sinnvoller Temperaturgrenzen erzeugen,')),
        p(t('Batteriespeicher gezielt laden, wenn später teurer Netzbezug vermieden wird,')),
        p(t('Geschirrspüler oder Waschmaschine automatisiert in ein günstiges Zeitfenster legen – sofern der Komfort passt.')),
      ),
      p(
        t('Schlechte Beispiele wären unnötiges elektrisches Heizen, absichtliches Entladen und Wiederaufladen eines Speichers ohne wirtschaftlichen Vorteil oder sonstiger künstlicher Mehrverbrauch. Flexibilität senkt Kosten. Verschwendung nicht.'),
      ),
    ),

    textBlock(
      h('h2', t('Was negative Strompreise für die Wirtschaftlichkeit einer PV-Anlage bedeuten')),
      p(
        t('Die entscheidende Veränderung ist nicht, dass PV plötzlich keinen Wert mehr hat. Im Gegenteil: Jede selbst verbrauchte Kilowattstunde ersetzt weiterhin Netzstrom.'),
      ),
      p(
        t('Aber der Wert einer zusätzlichen eingespeisten Kilowattstunde wird '),
        bold('zeitabhängiger'),
        t('. Das klassische Modell „PV erzeugt, Haus nimmt ein bisschen ab, der Rest wird einfach eingespeist" verliert an Eleganz.'),
      ),
      p(
        t('Damit gewinnen vier Faktoren an Bedeutung:'),
      ),
      ul(
        p(t('Eigenverbrauch genau dann erhöhen, wenn viel PV-Leistung vorhanden ist,')),
        p(t('Speicher nicht nur nach Ladezustand, sondern prognosebasiert betreiben,')),
        p(t('flexible Verbraucher wie Wallbox und Wärmepumpe integrieren,')),
        p(t('Mess- und Steuertechnik so planen, dass das System auf neue Tarif- und Marktmodelle reagieren kann.')),
      ),
      p(
        t('Das ist auch der Grund, warum wir PV-Anlagen 2026 nicht mehr nur nach Modulanzahl und Wechselrichter bewerten würden. Die Frage lautet zunehmend: '),
        bold('Wie gut kann das gesamte Haus Energie verschieben?'),
      ),
    ),

    textBlock(
      h('h2', t('Fünf Mythen über negative Strompreise')),
      p(
        bold('„Wenn der Börsenpreis negativ ist, bekomme ich Geld fürs Stromverbrauchen." '),
        t('Nicht automatisch. Das hängt vom Endkundentarif und seinen gesamten Preisbestandteilen ab.'),
      ),
      p(
        bold('„Bei negativen Preisen muss jeder PV-Betreiber für die Einspeisung bezahlen." '),
        t('Nein. EEG-Zahlungsanspruch, Börsenpreis und konkrete Vermarktungsform sind unterschiedliche Dinge. Für Bestandsanlagen gelten zudem Übergangsregeln.'),
      ),
      p(
        bold('„Dann lohnt sich Photovoltaik nicht mehr." '),
        t('Falsch. Eigenverbrauch ersetzt weiterhin Netzbezug. Außerdem treten negative Preise nur in bestimmten Zeitfenstern auf – nicht das ganze Jahr.'),
      ),
      p(
        bold('„Ein Speicher löst das Problem automatisch." '),
        t('Nur wenn er richtig gesteuert wird. Ein zur falschen Zeit voller Speicher kann die Optimierung sogar verschlechtern.'),
      ),
      p(
        bold('„Je mehr Strom ich bei negativen Preisen verbrauche, desto besser." '),
        t('Nein. Sinnvoll ist die Verschiebung ohnehin benötigter Energie – nicht künstlicher Mehrverbrauch.'),
      ),
    ),

    textBlock(
      h('h2', t('Was wir bei einer Anlage 2026 konkret planen würden')),
      p(
        t('Bei einem Haus mit PV, Speicher, Wärmepumpe und E-Auto würden wir negative Strompreise nicht als isoliertes Tarifthema betrachten. Wir würden prüfen:'),
      ),
      ul(
        p(t('Wie hoch ist der verbleibende Netzbezug trotz PV?')),
        p(t('Wie viel Verbrauch kann ohne Komfortverlust verschoben werden?')),
        p(t('Kann die Wallbox nach Preis und PV-Überschuss gesteuert werden?')),
        p(t('Kann der Speicher Netzladen – und ist das im konkreten Mess- und Vermarktungskonzept sinnvoll?')),
        p(t('Kann die Wärmepumpe innerhalb effizienter Betriebsgrenzen Last verschieben?')),
        p(t('Ist ein intelligentes Messsystem vorhanden oder geplant?')),
        p(t('Kann ein HEMS Geräte verschiedener Hersteller gemeinsam steuern?')),
        p(t('Welche EEG-Regeln gelten aufgrund des Inbetriebnahmedatums der PV-Anlage?')),
      ),
      p(
        t('Erst danach lässt sich entscheiden, ob negative Preise für dieses Haus eher irrelevant, ein kleines Optimierungsthema oder ein echter wirtschaftlicher Hebel sind.'),
      ),
      p(
        t('Die Grundlage dafür ist eine saubere Messung. Mehr dazu in '),
        link('Smart Meter 2026: Pflicht, Kosten und Nutzen', '/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Negative Strompreise sind weder Katastrophe noch Gratisstrom-Festival. Sie sind ein '),
        bold('Preissignal für Flexibilität'),
        t('. Wenn zu viel Strom vorhanden ist, sinkt sein kurzfristiger Marktwert. Wenn Strom knapp ist, steigt er.'),
      ),
      p(
        t('Für neue PV-Anlagen bedeutet das: Der Wert der Einspeisung wird stärker zeitabhängig. Für Haushalte mit dynamischem Tarif bedeutet es: Günstige Zeitfenster können genutzt werden – aber nur, wenn tatsächlich flexibler Netzbezug vorhanden ist.'),
      ),
      p(
        t('Speicher und E-Auto können diese Flexibilität liefern. Die Wärmepumpe kann ergänzen. Das HEMS verbindet alles miteinander. '),
        bold('Nicht der negative Preis selbst spart Geld, sondern die Fähigkeit, Energie zum richtigen Zeitpunkt zu erzeugen, zu speichern oder zu verbrauchen.'),
      ),
      p(
        t('Genau deshalb sehen wir das Thema nicht als Problem der Energiewende, sondern als Übergang von einem starren zu einem intelligenten Energiesystem.'),
      ),
    ),

    ctaBlock({
      titel: 'PV, Speicher und Verbraucher intelligent zusammenbringen',
      text:
        'Du hast bereits eine PV-Anlage oder planst ein neues Energiesystem und möchtest wissen, wie Speicher, Wallbox, Wärmepumpe, Smart Meter und dynamische Strompreise sinnvoll zusammenspielen? Wir betrachten das Haus als Gesamtsystem – mit offenen Schnittstellen, realem Lastprofil und ohne unnötigen Tarif- oder Cloud-Lock-in.',
      buttonText: 'Energiesystem besprechen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was sind negative Strompreise?',
      'Negative Strompreise entstehen am Großhandelsmarkt, wenn das Stromangebot größer ist als die Nachfrage und zusätzliche Abnahme wirtschaftlich wertvoll wird. Marktteilnehmer können dann dafür bezahlt werden, Strom abzunehmen. Besonders häufig treten solche Situationen bei hoher Wind- oder Solarproduktion und gleichzeitig niedriger Nachfrage auf.',
    ),
    faqItem(
      'Wie oft gab es 2025 negative Strompreise?',
      'Nach Angaben der Bundesnetzagentur gab es 2025 in Deutschland 573 von 8.760 Stunden mit negativen Day-Ahead-Großhandelspreisen. 2024 waren es 457 Stunden. Seit Oktober 2025 wird der Day-Ahead-Markt viertelstündlich gehandelt, weshalb spätere Statistiken in einer anderen Zeiteinheit ausgewiesen werden.',
    ),
    faqItem(
      'Wie viele negative Strompreis-Zeiten gab es 2026?',
      'Für das erste Quartal 2026 weist SMARD 172 Viertelstunden mit negativen Day-Ahead-Preisen aus. Eine Jahreszahl für 2026 liegt naturgemäß erst nach Jahresende vor. Wegen der seit Oktober 2025 verwendeten Viertelstundenprodukte sind diese Werte nicht direkt mit früheren Stundenstatistiken vergleichbar.',
    ),
    faqItem(
      'Bekomme ich bei negativem Börsenpreis kostenlosen Strom?',
      'Nicht automatisch. Der Börsenpreis ist nur ein Teil des Haushaltsstrompreises. Netzentgelte, Steuern, Umlagen, Lieferantenaufschläge, Grundpreis und Messkosten können weiterhin anfallen. Ob der variable Endkundenpreis tatsächlich negativ wird, hängt vom konkreten dynamischen Tarif ab.',
    ),
    faqItem(
      'Muss ich als PV-Betreiber bei negativen Preisen Geld bezahlen?',
      'Nicht pauschal. Bei neuen EEG-Anlagen kann der anzulegende Wert nach §51 EEG in negativen Marktzeitfenstern auf null sinken. Das ist zunächst eine Reduzierung des EEG-Zahlungsanspruchs und keine automatische Strafzahlung an den Netzbetreiber. Bei Direktvermarktung oder besonderen Vertragsmodellen können zusätzliche Regeln gelten.',
    ),
    faqItem(
      'Bekomme ich bei negativen Strompreisen keine Einspeisevergütung mehr?',
      'Bei neuen Anlagen kann §51 EEG den anzulegenden Wert in negativen Marktzeitfenstern auf null reduzieren. Für Anlagen unter 100 kW wird diese Regel grundsätzlich nicht vor Ablauf des Kalenderjahres angewendet, in dem die Anlage mit einem intelligenten Messsystem ausgestattet wurde. Für ältere Anlagen gelten Übergangsregeln nach dem jeweiligen Inbetriebnahmedatum.',
    ),
    faqItem(
      'Gilt die neue Regel auch für meine PV-Anlage von 2023 oder 2024?',
      'Nicht automatisch in derselben Form wie für eine Neuanlage aus 2026. Für Anlagen, die nach dem 31. Dezember 2022 und vor dem 25. Februar 2025 in Betrieb genommen wurden, verweist §100 EEG auf die frühere Fassung von §51. Deshalb muss bei Bestandsanlagen immer das Inbetriebnahmedatum berücksichtigt werden.',
    ),
    faqItem(
      'Werden Zeiten ohne EEG-Vergütung später ausgeglichen?',
      '§51a EEG sieht eine Verlängerung des Vergütungszeitraums vor. Bei Solarstrom werden die betroffenen Viertelstunden mit Faktor 0,5 in Volllastviertelstunden umgerechnet und daraus ein zusätzlicher Vergütungszeitraum am Ende der Förderung berechnet. Es handelt sich nicht um eine einfache 1:1-Gutschrift jeder Viertelstunde.',
    ),
    faqItem(
      'Lohnt sich ein Batteriespeicher bei negativen Strompreisen?',
      'Ein Speicher kann helfen, günstigen Netzstrom oder eigenen PV-Überschuss aufzunehmen und später teuren Netzbezug zu vermeiden. Ob sich das wirtschaftlich lohnt, hängt von Preisunterschieden, Wirkungsgrad, Speicherbeanspruchung und PV-Prognose ab. Ein Speicher sollte deshalb nicht allein nach dem aktuellen Börsenpreis geladen werden.',
    ),
    faqItem(
      'Kann ich meinen Stromspeicher bei negativen Preisen aus dem Netz laden?',
      'Viele moderne Systeme können technisch aus dem Netz laden. Ob das bei deiner Anlage sinnvoll und zulässig umgesetzt werden kann, hängt von Speicher, Wechselrichter, Messkonzept, Tarif und gegebenenfalls Vermarktungsmodell ab. Wirtschaftlich sollte zusätzlich berücksichtigt werden, ob der Speicher später Platz für eigenen PV-Strom benötigt.',
    ),
    faqItem(
      'Warum ist ein E-Auto für negative Strompreise interessant?',
      'Weil sich relativ große Energiemengen zeitlich verschieben lassen. Wenn das Fahrzeug mehrere Stunden am Haus steht, kann eine intelligente Wallbox günstige Zeitfenster nutzen und trotzdem sicherstellen, dass der gewünschte Ladezustand zur Abfahrt erreicht ist. Mit PV sollte eigener Solarüberschuss zusätzlich priorisiert werden.',
    ),
    faqItem(
      'Kann eine Wärmepumpe negative Strompreise nutzen?',
      'In gewissen Grenzen ja. Gebäude und Warmwasserspeicher bieten thermische Flexibilität. Die Wärmepumpe sollte aber nicht mit unnötig hohen Temperaturen betrieben werden, nur weil Strom gerade billig ist. Effizienz, Komfort und Heizbedarf bleiben die Leitplanken; innerhalb dieses Rahmens kann ein HEMS den Betrieb zeitlich optimieren.',
    ),
    faqItem(
      'Brauche ich für negative Strompreise ein HEMS?',
      'Nein. Ein HEMS ist nicht vorgeschrieben. Es wird aber besonders nützlich, wenn PV, Speicher, E-Auto, Wärmepumpe und dynamischer Stromtarif zusammenkommen. Dann kann es Preis, PV-Prognose, Speicherfüllstand und Verbraucher gemeinsam optimieren, statt jedes Gerät einzeln reagieren zu lassen.',
    ),
  ],
}

await upsertRatgeberArticle(article)
