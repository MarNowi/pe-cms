// scripts/articles/lastspitzenkappung-stromspeicher-gewerbe.mjs

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
  titel: 'Lastspitzenkappung mit Stromspeicher: Wann sich Peak Shaving im Gewerbe wirklich rechnet',
  slug: 'lastspitzenkappung-stromspeicher-gewerbe',
  kategorie: 'stromspeicher',
  status: 'veroeffentlicht',
  teaser:
    'Eine einzige Viertelstunde im Jahr kann im Gewerbe entscheiden, wie hoch der Leistungspreis ausfällt – und der ist bei einem mittelständischen Betrieb schnell fünfstellig. Lastspitzenkappung mit einem Stromspeicher (Peak Shaving) verspricht, diese Spitze zu glätten. Wie das funktioniert, wann sich RLM- und physikalische Spitzenkappung unterscheiden – und warum Speicher wirtschaftlich erst im Multi-Use-Konzept überzeugen.',
  lesezeit: 12,

  seo: seo(
    'Lastspitzenkappung mit Stromspeicher: Peak Shaving im Gewerbe | PEAK.Energy',
    'Peak Shaving senkt den Leistungspreis durch gezielte Speicher-Entladung. Wann sich Lastspitzenkappung im Gewerbe wirklich rechnet, wo physikalische Spitzenkappung den Anschluss schützt, wie ein Multi-Use-Speicher mehrere Erträge stapelt – und warum prognosebasiertes EMS den Unterschied macht.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Gewerbebetriebe mit RLM-Messung zahlen den Strompreis in zwei Komponenten: Arbeitspreis (ct/kWh) und '),
      bold('Leistungspreis (€/kW)'),
      t('. Eine einzige 15-Minuten-Spitze pro Jahr definiert den Leistungspreis fürs ganze Jahr.'),
    ),
    summaryPoint(
      t('Lastspitzenkappung gibt es in zwei Varianten: '),
      bold('RLM-Spitzenkappung'),
      t(' senkt den Leistungspreis (wirtschaftlich), '),
      bold('physikalische Spitzenkappung'),
      t(' schützt den Hausanschluss vor Überlast (technisch). Beide arbeiten mit derselben Speicher-Technik, lösen aber unterschiedliche Probleme.'),
    ),
    summaryPoint(
      t('Peak Shaving allein rechnet sich oft nicht. Erst im '),
      bold('Multi-Use-Konzept'),
      t(' (Eigenverbrauch + Lastspitzen + dynamische Tarife + Flexibilität) wird ein Gewerbespeicher wirklich wirtschaftlich.'),
    ),
    summaryPoint(
      t('Die Auslegung erfolgt für Peak Shaving primär nach '),
      bold('Leistung (kW), nicht Energie (kWh)'),
      t(' – das ist die wichtigste Differenz zum Heimspeicher.'),
    ),
    summaryPoint(
      t('Voraussetzung sind ein belastbarer Lastgang und ein '),
      bold('prognosebasiert arbeitendes EMS'),
      t('. Eine rein reaktive Schwellenlogik kommt oft zu spät – und eine verpasste Spitze macht die Einsparung des ganzen Jahres kaputt.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('Im Privathaushalt ist der Strompreis simpel: Kilowattstunden mal Arbeitspreis, fertig. Wer 5.000 kWh im Jahr verbraucht, zahlt rund 5.000 kWh × 35 ct = 1.750 €. Im Gewerbe – genauer: bei allen RLM-Kunden – funktioniert das anders.'),
      ),
      p(
        t('RLM steht für '),
        bold('Registrierende Leistungsmessung'),
        t(' und ist Pflicht ab einem Jahresverbrauch von 100.000 kWh. Bei diesen Kunden wird die bezogene Leistung viertelstündlich gemessen. Und neben dem Arbeitspreis pro kWh kommt eine zweite Komponente dazu: der '),
        bold('Leistungspreis'),
        t(', meist 50 bis 150 €/kW pro Jahr, gestaffelt nach Netzbetreiber und Spannungsebene.'),
      ),
      p(
        t('Das Entscheidende daran: Maßgeblich ist nicht der durchschnittliche Bezug, sondern die '),
        bold('höchste 15-Minuten-Spitze des Jahres'),
        t('. Eine einzige Viertelstunde – ausgelöst durch das gleichzeitige Anlaufen mehrerer Maschinen, einen Kompressor, ein Schweißgerät oder die morgendliche Hochlastphase – definiert den Leistungspreis für das ganze Jahr.'),
      ),
      p(
        t('Genau hier setzt Lastspitzenkappung an – in zwei Varianten, die wir gleich auseinanderhalten.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie der Leistungspreis konkret entsteht')),
      p(
        t('Der Netzbetreiber misst über das ganze Jahr in 15-Minuten-Intervallen die bezogene Wirkleistung. Aus diesen Werten wird der höchste registrierte Wert genommen – das ist die abrechnungsrelevante Jahreshöchstlast.'),
      ),
      p(
        t('Beispiel: Ein Metallbaubetrieb hat über das Jahr meist Bezugsleistungen zwischen 80 und 180 kW. An einem einzigen Morgen im Februar laufen Druckluftkompressor, Absauganlage und zwei Schweißgeräte zufällig parallel an – die 15-Minuten-Spitze springt auf 280 kW. Bei einem Leistungspreis von 100 €/kW bedeutet das: '),
        bold('28.000 € Leistungspreis fürs ganze Jahr'),
        t(' – nur wegen dieser einen Viertelstunde.'),
      ),
      p(
        t('Hätte der Betrieb diese Spitze auf 180 kW begrenzt (etwa durch zeitversetztes Anlaufen oder einen einspringenden Speicher), läge der Leistungspreis bei 18.000 €. Ersparnis: '),
        bold('10.000 € pro Jahr'),
        t(', durch eine einzige technisch glättbare Viertelstunde.'),
      ),
    ),

    textBlock(
      h('h2', t('Was Peak Shaving technisch macht')),
      p(
        t('Ein Stromspeicher hängt parallel am Netzanschluss und beobachtet permanent die bezogene Leistung. Ein Energiemanagement-System (EMS) definiert eine Zielschwelle – zum Beispiel „Bezug niemals über 180 kW".'),
      ),
      p(
        t('Steigt der Hausbezug über diese Schwelle, springt der Speicher ein und liefert die Differenz aus seiner Batterie. Aus Sicht des Netzbetreibers bleibt die Bezugsleistung damit unter der Schwelle, auch wenn die tatsächliche Verbrauchsspitze viel höher war.'),
      ),
      p(
        t('Sobald die Spitze vorbei ist, lädt sich der Speicher in Phasen niedrigen Bezugs wieder auf – idealerweise aus eigener PV oder zu günstigen Tarifzeiten.'),
      ),
      p(
        t('Im Gegensatz zur PV funktioniert das '),
        bold('unabhängig von Tageszeit und Wetter'),
        t('. Ein Lastpeak um 5:30 Uhr im Februar wird genauso gekappt wie einer um 14 Uhr im Juni.'),
      ),
      p(
        t('Wichtig ist dabei der Unterschied zwischen reaktiver und prognosebasierter Steuerung. Eine einfache Steuerung wartet, bis die Schwelle überschritten ist, und kappt dann – das ist oft zu spät, weil der 15-Minuten-Mittelwert bereits in die falsche Richtung läuft, bis der Speicher reagiert. Ein '),
        bold('prognosebasiertes EMS'),
        t(' nutzt Lastgang-Historie, Produktionspläne und Wetterprognosen, um Spitzen im Voraus zu erkennen und den Speicher rechtzeitig vorzuladen. Das ist nicht nur zuverlässiger, sondern auch schonender für die Batterie.'),
      ),
    ),

    textBlock(
      h('h2', t('RLM oder physikalisch: Zwei Arten von Lastspitzenkappung')),
      p(
        t('Lastspitzenkappung beschreibt nicht eine, sondern zwei verwandte Anwendungsfälle. Beide arbeiten mit derselben Speicher-Technik – aber das Ziel ist unterschiedlich.'),
      ),
      p(
        bold('RLM-Lastspitzenkappung (wirtschaftlich). '),
        t('Ziel: den Leistungspreis senken. Maßgeblich ist die höchste 15-Minuten-Spitze des Jahres, gemessen vom Netzbetreiber. Der Speicher kappt diese registrierten Spitzen, damit die Abrechnung niedriger ausfällt. Das ist die in diesem Artikel bisher beschriebene Logik.'),
      ),
      p(
        bold('Physikalische Lastspitzenkappung (technisch). '),
        t('Ziel: die tatsächliche Anschlussleistung nicht überschreiten. Relevant wird das, wenn neue Verbraucher dazukommen – eine Wallbox-Flotte für den E-Fuhrpark, eine neue Wärmepumpe für die Hallenheizung, eine zusätzliche Maschine – aber der Hausanschluss nicht ausreicht und eine Erweiterung beim Netzbetreiber sechsstellig kostet oder zwölf Monate dauert.'),
      ),
      p(
        t('Der Speicher springt dann ein, sobald die tatsächliche Bezugsleistung an die Anschlussgrenze stößt, und liefert kurzfristig die Differenz. Das ermöglicht oft, neue Verbraucher anzuschließen, ohne den Netzanschluss überhaupt anfassen zu müssen.'),
      ),
      p(
        t('Im Niederrhein und Ruhrgebiet ist das gerade bei wachsenden Höfen und KMUs ein verbreitetes Thema – mehr E-Fahrzeuge, mehr Maschinenleistung, größere Wärmepumpen, aber die Anschlusserweiterung scheitert an Bearbeitungszeiten oder Investitionskosten beim Netzbetreiber.'),
      ),
      p(
        t('Beide Varianten lassen sich übrigens mit demselben Speicher abdecken, sofern das EMS beide Logiken parallel unterstützt.'),
      ),
    ),

    textBlock(
      h('h2', t('Beispielrechnung: Mittelständischer Betrieb am Niederrhein')),
      p(
        t('Eine konservative Rechnung an einem realistischen Beispiel:'),
      ),
      ul(
        p(t('Jahresverbrauch: 600.000 kWh')),
        p(t('Bisherige Jahreshöchstlast: 250 kW (15-Min-Mittel)')),
        p(t('Leistungspreis: 100 €/kW pro Jahr')),
        p(t('Aktuelle Leistungspreiskosten: 25.000 €/Jahr')),
      ),
      p(
        t('Ziel: Spitze auf 200 kW kappen. Differenz: 50 kW über typischerweise 15 bis 30 Minuten pro Ereignis.'),
      ),
      p(
        t('Speicher-Auslegung (vereinfacht): mindestens '),
        bold('50 kW Entladeleistung'),
        t(' und '),
        bold('rund 50 kWh nutzbare Kapazität'),
        t(' (für mehrere Spitzen pro Tag plus Pufferreserve). Investition: rund 60.000 bis 80.000 € installiert, je nach Hersteller und Integrationsaufwand.'),
      ),
      p(
        t('Ertrag aus Peak Shaving allein: '),
        bold('5.000 €/Jahr Leistungspreisersparnis'),
        t(' (25.000 € auf 20.000 €). Reine Peak-Shaving-Amortisation: 12 bis 16 Jahre.'),
      ),
      p(
        t('Das ist die ehrliche Zahl – und sie zeigt: '),
        bold('Peak Shaving allein ist selten der Investment-Case'),
        t('. Wirtschaftlich wird es erst, wenn der gleiche Speicher mehrere Aufgaben gleichzeitig übernimmt.'),
      ),
    ),

    tabelleBlock('Speicher-Auslegung: Heimspeicher, Peak-Shaving-Speicher, Multi-Use-Speicher', [
      {
        spalte1: 'Typischer Heimspeicher (EFH)',
        spalte2: '5 bis 15 kWh · 3 bis 5 kW',
        spalte3: 'Ziel: Eigenverbrauchsquote erhöhen, kWh sind primär',
      },
      {
        spalte1: 'Reiner Peak-Shaving-Speicher (Gewerbe)',
        spalte2: '50 bis 200 kWh · 50 bis 150 kW',
        spalte3: 'Ziel: Leistungspreis senken oder Anschluss schützen, kW sind primär',
      },
      {
        spalte1: 'Multi-Use-Speicher (Gewerbe)',
        spalte2: '100 bis 500 kWh · 50 bis 200 kW',
        spalte3: 'Eigenverbrauch + Peak Shaving + dynamische Tarife + Flexibilität in einem Asset',
      },
    ]),

    textBlock(
      h('h2', t('Speicher-Auslegung: Leistung vor Energie')),
      p(
        t('Bei der Auslegung eines Heimspeichers steht die '),
        bold('Energie'),
        t(' (kWh) im Vordergrund: Wie viel Sonnenstrom soll für den Abend zwischengespeichert werden? Bei Peak Shaving ist es umgekehrt – die '),
        bold('Leistung'),
        t(' (kW) ist die kritische Größe.'),
      ),
      p(
        t('Eine Spitze von 50 kW über 15 Minuten ist energetisch nur 12,5 kWh. Aber sie braucht eine Batterie, die diese 50 kW auch '),
        bold('liefern'),
        t(' kann – sonst nützt die schönste Energiemenge nichts.'),
      ),
      p(
        t('In der Praxis legt man die Entladeleistung etwas größer aus als die zu kappende Differenz (Reserve für unerwartete Spitzen) und die Kapazität so, dass mehrere Spitzen pro Tag plus eine gewisse Pufferreserve abgedeckt sind. Die genaue Auslegung steht und fällt mit dem '),
        bold('Lastgang'),
        t(' – ohne diesen ist jede Empfehlung Bauchgefühl.'),
      ),
    ),

    tippBlock(
      'Lastgang vor der Investitionsentscheidung analysieren',
      p(
        t('Bei RLM-Kunden liegen die viertelstündlichen Lastgangdaten beim Netzbetreiber kostenlos bereit. Mindestens 12 Monate anfordern, besser 24. Daraus lässt sich auswerten: Wie oft im Jahr treten Spitzen auf? Wie hoch sind sie? Wie lange dauern sie? Sind sie zeitlich gehäuft oder zufällig? Erst aus diesen Antworten ergibt sich die richtige Speichergröße. Wer auf Basis von „Maschinenleistung mal Daumenformel" auslegt, baut entweder zu klein (Spitze nicht erwischt) oder zu groß (kapitalgebunden ohne Mehrwert).'),
      ),
    ),

    hinweisBlock(
      'Eine verpasste Spitze macht die Jahres-Einsparung kaputt',
      p(
        t('Die Logik des Leistungspreises ist gnadenlos: Maßgeblich ist die höchste Spitze im Jahr. Wenn der Speicher in einem einzigen Moment die Schwelle nicht hält – weil er leer ist, weil eine Komponente streikt, weil das EMS rein reaktiv arbeitet und zu spät kappt – fällt der gekappte Wert komplett weg und der reguläre Leistungspreis wird wieder fällig. '),
        bold('Ein prognosebasiert arbeitendes EMS und eine ausreichend dimensionierte Reserve sind kein Luxus, sondern Voraussetzung'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann sich Peak Shaving lohnt – und wann nicht')),
      p(
        bold('Klar wirtschaftlich (RLM-Peak-Shaving). '),
        t('Betriebe mit ausgeprägten, regelmäßigen Lastspitzen – zum Beispiel durch Maschinenanläufe, Schweißprozesse, Druckluftkompressoren, Kühlanlagen, große Antriebe. Wenn die Spitze deutlich über der Grundlast liegt und das Bezugsverhalten Muster zeigt, ist die Auslegung sauber kalkulierbar.'),
      ),
      p(
        bold('Klar sinnvoll (physikalische Spitzenkappung). '),
        t('Betriebe, die zusätzliche Verbraucher anschließen wollen, aber der Hausanschluss reicht nicht. Wenn die Alternative ein Netzanschluss-Ausbau für 80.000 bis 200.000 € ist, der zudem zwölf Monate dauert, kann ein Speicher die deutlich pragmatischere Lösung sein – auch wenn er sich rein wirtschaftlich nicht aus dem Leistungspreis trägt.'),
      ),
      p(
        bold('Genau prüfen. '),
        t('Betriebe mit eher gleichmäßiger Grundlast und wenigen, aber sehr unregelmäßigen Spitzen. Hier kann die Auslegung schwierig werden, weil die Reserve groß sein muss, um auch seltene Extremspitzen sicher zu erwischen.'),
      ),
      p(
        bold('Eher nicht. '),
        t('Betriebe mit insgesamt geringem Leistungspreis (niedrige Spannungsebene mit günstigem Tarif, oder Netzgebiet mit niedrigen Netzentgelten), sehr gleichmäßiger Last ohne nennenswerte Spitzen oder absehbar stark schwankendem Verbrauchsprofil (Umbau, neue Maschinen, Standortwechsel geplant).'),
      ),
      p(
        t('Ein Sonderfall ist '),
        bold('§ 19 Abs. 2 StromNEV'),
        t(' – die atypische Netznutzung. Wer nachweisen kann, dass seine Last außerhalb der Hochlastzeitfenster des Netzbetreibers liegt, kann das Netzentgelt deutlich reduzieren (auf 20, 15 oder 10 % des regulären Satzes, je nach Erfüllungsgrad). Hier wirkt Peak Shaving doppelt: Spitze senken und gleichzeitig in günstigere Zeitfenster verschieben. Die Anforderungen sind aber detailliert und brauchen eine saubere Dokumentation.'),
      ),
    ),

    textBlock(
      h('h2', t('Multi-Use: Peak Shaving + Eigenverbrauch + Flexibilität')),
      p(
        t('Die eigentliche Stärke eines Gewerbespeichers liegt nicht in einer einzelnen Aufgabe, sondern in der '),
        bold('Kombination'),
        t('. Branchenüblich heißt das '),
        bold('Multi-Use'),
        t(' – ein Speicher übernimmt mehrere Use Cases gleichzeitig und stapelt die Erträge.'),
      ),
      p(
        bold('Tagsüber: '),
        t('PV-Überschüsse laden den Speicher und werden später im Eigenverbrauch genutzt – das spart Arbeitspreis (Differenz zwischen Gewerbestrom und Einspeisevergütung, oft 20 bis 30 ct/kWh).'),
      ),
      p(
        bold('Bei Lastspitzen: '),
        t('Der Speicher springt ein und kappt die Bezugsspitze – das spart Leistungspreis (RLM) oder schützt den Hausanschluss (physikalisch).'),
      ),
      p(
        bold('Bei dynamischen Tarifen: '),
        t('Der Speicher lädt in günstigen Stunden und entlädt in teuren – das spart zusätzlich Arbeitspreis (Time-of-Use).'),
      ),
      p(
        bold('Bei Flexibilitätsbedarf im Netz: '),
        t('Der Speicher kann perspektivisch ungenutzte Kapazität in einen Pool einbringen und dafür vergütet werden.'),
      ),
      p(
        t('Erst durch dieses Stapeln von Erträgen wird ein Gewerbespeicher wirtschaftlich attraktiv. Aus 5.000 € Peak-Shaving-Ersparnis können in der Multi-Use-Konfiguration leicht 15.000 bis 25.000 €/Jahr werden – mit Amortisationszeiten von 6 bis 10 Jahren.'),
      ),
      p(
        t('Die Bedingung: ein EMS, das diese Use Cases sauber priorisiert. Peak Shaving hat dabei immer Vorrang vor allen anderen Jobs – sonst zerstört eine verpasste Spitze die ganze Rechnung. Und die Priorisierung muss prognosebasiert erfolgen, nicht erst beim Erreichen der Schwelle.'),
      ),
    ),

    textBlock(
      h('h2', t('Wo PEAK.Flex ins Spiel kommt')),
      p(
        t('Unser PEAK.Flex-Konzept ist genau auf diese Multi-Use-Logik ausgelegt. Ein Speicher beim Kunden vor Ort übernimmt mehrere Aufgaben gleichzeitig: Eigenverbrauchsoptimierung, Lastspitzenkappung (RLM oder physikalisch) und – perspektivisch – die Bereitstellung von Flexibilität in einem kooperativ organisierten Pool, dessen wirtschaftliche Erträge transparent beim Speicher-Eigentümer ankommen.'),
      ),
      p(
        t('Der Unterschied zu klassischen Plattformmodellen: Die Steuerung läuft lokal, die Daten bleiben im Haus, die Use-Case-Priorisierung ist prognosebasiert, und Peak Shaving hat immer Vorrang vor Pool-Aufgaben. Mehr dazu: '),
        link('PEAK.Flex Pilotprogramm', '/peak-flex'),
        t(' und '),
        link('Cloud-EMS vs. lokales EMS', '/stromspeicher/cloud-ems-vs-lokales-ems-energiedaten'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Peak Shaving ist im Gewerbe ein realer Hebel, aber selten der alleinige Investment-Case. Wer einen Speicher nur für Lastspitzenkappung baut, wird oft enttäuscht sein – die Amortisationszeiten sind lang, das Risiko einer verpassten Spitze ist real.'),
      ),
      p(
        t('Wer den Speicher dagegen als '),
        bold('Multi-Use-Asset'),
        t(' versteht – Eigenverbrauch, Peak Shaving, dynamische Tarife, perspektivisch Flexibilität – kommt zu deutlich besseren Zahlen. Das setzt aber voraus, dass die Anlage offen, lokal steuerbar und durch ein zuverlässiges, prognosebasiert arbeitendes EMS koordiniert wird.'),
      ),
      p(
        t('Und ein zweiter Fall verdient mehr Aufmerksamkeit, als er in vielen Angeboten bekommt: Bei '),
        bold('physikalischer Spitzenkappung'),
        t(' kann ein Speicher faktisch eine Netzausbau-Investition ersetzen, ohne sich aus dem Leistungspreis tragen zu müssen. Für wachsende Betriebe am Niederrhein ist das oft der entscheidende Punkt.'),
      ),
      p(
        t('Vor jeder Investition steht der Lastgang. Wer dir auf Basis von „Maschinenleistung mal Erfahrungswert" eine Empfehlung gibt, hat das Projekt nicht durchgerechnet.'),
      ),
    ),

    ctaBlock({
      titel: 'Lastgang prüfen und ehrlich rechnen lassen',
      text:
        'Du betreibst einen RLM-Anschluss am Niederrhein oder im Ruhrgebiet und vermutest, dass dein Leistungspreis hoch ist – oder du willst neue Verbraucher anschließen, ohne dass der Hausanschluss erweitert werden muss? Wir analysieren deinen Lastgang, prüfen Speichergröße und Wirtschaftlichkeit und sagen dir ehrlich, ob sich RLM-Peak-Shaving, physikalische Spitzenkappung oder ein Multi-Use-Konzept lohnt.',
      buttonText: 'Lastgang-Analyse anfragen',
      buttonLink: '/loesungen/gewerbe-kmu',
    }),
  ],

  faq: [
    faqItem(
      'Was ist der Unterschied zwischen RLM- und physikalischer Lastspitzenkappung?',
      'RLM-Lastspitzenkappung zielt auf den Leistungspreis: Der Speicher kappt die höchste 15-Minuten-Spitze im Jahr, um die Netzentgelte zu senken. Physikalische Lastspitzenkappung zielt auf die tatsächliche Anschlussleistung: Der Speicher verhindert, dass neue Verbraucher (Wallbox, Wärmepumpe, neue Maschinen) den Hausanschluss überlasten. Beide arbeiten mit derselben Speicher-Hardware, aber das EMS verfolgt unterschiedliche Ziele. Beide lassen sich auch in einem Speicher kombinieren.',
    ),
    faqItem(
      'Was bedeutet „Multi-Use" bei einem Gewerbespeicher?',
      'Multi-Use bezeichnet den Einsatz eines Speichers für mehrere Anwendungsfälle gleichzeitig – typischerweise eine Kombination aus Eigenverbrauchsoptimierung, Lastspitzenkappung, Nutzung dynamischer Stromtarife (Time-of-Use) und perspektivisch Bereitstellung von Flexibilität in einem Pool. Voraussetzung ist ein EMS, das die Use Cases sauber priorisiert. Multi-Use ist die wirtschaftlich attraktivste Betriebsweise eines Gewerbespeichers.',
    ),
    faqItem(
      'Was ist der Leistungspreis und warum ist er so teuer?',
      'Der Leistungspreis ist eine Komponente der Netzentgelte für RLM-Kunden und wird zusätzlich zum Arbeitspreis fällig. Er bezahlt die vorgehaltene Anschlusskapazität. Bemessungsgrundlage ist die höchste viertelstündliche Bezugsleistung im Abrechnungsjahr. Typische Sätze liegen zwischen 50 und 150 €/kW pro Jahr – bei einer Spitze von 250 kW also schnell 12.500 bis 37.500 €/Jahr.',
    ),
    faqItem(
      'Wer hat überhaupt einen Leistungspreis?',
      'RLM-Pflicht (Registrierende Leistungsmessung) besteht ab einem Jahresverbrauch von 100.000 kWh oder einer Anschlussleistung über 30 kW. Praktisch alle mittelständischen Betriebe, Landwirtschaftsbetriebe mit Tierhaltung, größere Werkstätten, Logistiker und Industriebetriebe fallen darunter.',
    ),
    faqItem(
      'Wie misst der Netzbetreiber die Lastspitze?',
      'In 15-Minuten-Mittelwerten der bezogenen Wirkleistung. Eine sehr kurze Spitze von wenigen Sekunden oder Minuten geht im 15-Minuten-Mittel meist unter. Eine länger anhaltende Spitze oder mehrere kürzere Spitzen innerhalb einer Viertelstunde zählen voll.',
    ),
    faqItem(
      'Wie groß muss der Speicher für Peak Shaving sein?',
      'Bei Peak Shaving ist die Leistung (kW) wichtiger als die Energie (kWh). Die Entladeleistung muss mindestens der zu kappenden Spitze entsprechen, besser mit Reserve. Die Kapazität (kWh) richtet sich nach Dauer und Häufigkeit der Spitzen. Eine seriöse Auslegung erfolgt auf Basis des realen Lastgangs, nicht über Daumenformeln.',
    ),
    faqItem(
      'Was ist ein prognosebasiertes EMS und warum ist das wichtig?',
      'Ein reaktives EMS kappt erst, wenn die Schwelle bereits überschritten ist – das kann zu spät sein, weil das 15-Minuten-Mittel dann schon in die falsche Richtung läuft. Ein prognosebasiertes EMS nutzt Lastgang-Historie, Produktionspläne und Wetterprognosen, um Spitzen vorherzusehen und den Speicher rechtzeitig zu laden. Das ist zuverlässiger, schont die Batterie und ist gerade bei Multi-Use-Konfigurationen praktisch unverzichtbar.',
    ),
    faqItem(
      'Funktioniert Peak Shaving auch ohne PV?',
      'Ja. Ein Peak-Shaving-Speicher ist technisch unabhängig von einer PV-Anlage. Er kann sich aus dem Netz nachladen – idealerweise in Phasen niedriger Bezugsleistung oder günstiger Tarifzeiten. PV verbessert die Wirtschaftlichkeit, ist aber keine Voraussetzung.',
    ),
    faqItem(
      'Kann ein Speicher gleichzeitig Eigenverbrauch und Peak Shaving abdecken?',
      'Ja, das ist sogar der wirtschaftlich sinnvolle Regelfall – die klassische Multi-Use-Konfiguration. Voraussetzung ist ein EMS, das beide Aufgaben priorisiert: Peak Shaving hat immer Vorrang, Eigenverbrauch wird nachrangig optimiert. Ein gut konfigurierter Multi-Use-Speicher liefert mehrere Ertragsströme aus einem Investment.',
    ),
    faqItem(
      'Was ist § 19 Abs. 2 StromNEV?',
      'Eine Sonderregelung im Netzentgeltrecht: Wer seinen Strombezug nachweislich aus den Hochlastzeitfenstern des Netzbetreibers heraushält (atypische Netznutzung), kann ein deutlich reduziertes Netzentgelt beantragen – auf 20, 15 oder 10 % des Regelsatzes, je nach Erfüllungsgrad. Peak Shaving in Kombination mit gezielter Lastverschiebung kann diese Voraussetzung erfüllen, erfordert aber saubere Dokumentation und einen Antrag beim Netzbetreiber.',
    ),
    faqItem(
      'Was passiert, wenn der Speicher in einer Lastspitze leer ist?',
      'Dann wird die Spitze nicht gekappt und der Netzbetreiber registriert sie regulär. Genau deshalb ist die EMS-Logik so wichtig: Der Speicher muss vor erwartbaren Spitzenzeiten ausreichend geladen sein, und es braucht eine Reserve für mehrere Spitzen in Folge. Eine einzige verpasste Spitze kann die Jahreseinsparung komplett auflösen.',
    ),
  ],
}

await upsertRatgeberArticle(article)
