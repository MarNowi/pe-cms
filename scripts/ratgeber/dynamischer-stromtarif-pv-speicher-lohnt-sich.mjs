// scripts/articles/dynamischer-stromtarif-pv-speicher-lohnt-sich.mjs

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
  titel: 'Dynamischer Stromtarif mit PV und Speicher: Wann er sich wirklich lohnt – und wann nicht',
  slug: 'dynamischer-stromtarif-pv-speicher-lohnt-sich',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'Dynamische Stromtarife versprechen günstigen Strom, wenn an der Börse viel Energie verfügbar ist. Mit Photovoltaik, Speicher, Wärmepumpe und E-Auto kann das sinnvoll sein – aber nicht automatisch. Denn ausgerechnet die billigsten Mittagsstunden fallen oft mit der eigenen PV-Erzeugung zusammen. Entscheidend sind Smart Meter, flexible Verbraucher, Speicherstrategie, Tarifaufschläge und ein Energiemanagement, das nicht nur Preise beobachtet, sondern das ganze Haus steuert.',
  lesezeit: 16,

  seo: seo(
    'Dynamischer Stromtarif mit PV & Speicher: Lohnt sich das 2026? | PEAK.Energy',
    'Dynamischer Stromtarif 2026 mit PV, Speicher, Wallbox und Wärmepumpe: Voraussetzungen, Smart Meter, Preisrisiken, HEMS und wann sich der Tarif wirklich lohnt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein dynamischer Stromtarif koppelt den variablen Arbeitspreis an die kurzfristigen Strompreise am Spotmarkt. Seit 2025 müssen '),
      bold('alle Stromlieferanten dynamische Tarife anbieten'),
      t(' – nutzen kannst du sie aber nur mit einem intelligenten Messsystem.'),
    ),
    summaryPoint(
      t('Der Börsenpreis ist '),
      bold('nicht der komplette Haushaltsstrompreis'),
      t('. Netzentgelte, Steuern, Umlagen, Lieferantenaufschläge und Grundpreise verschwinden nicht, nur weil der Börsenpreis gerade sehr niedrig oder negativ ist.'),
    ),
    summaryPoint(
      t('Mit einer PV-Anlage allein ist ein dynamischer Tarif oft weniger spektakulär als gedacht: '),
      bold('Viele günstige Stunden liegen mittags'),
      t(' – genau dann, wenn die eigene Solaranlage den Netzbezug bereits stark reduziert.'),
    ),
    summaryPoint(
      t('Besonders interessant wird der Tarif bei '),
      bold('verschiebbaren Verbräuchen'),
      t(': E-Auto, Wärmepumpe, steuerbarem Batteriespeicher oder anderen größeren Lasten. Je flexibler der Verbrauch, desto eher lässt sich ein Preisvorteil tatsächlich nutzen.'),
    ),
    summaryPoint(
      t('Ein HEMS macht aus dem Tarif erst ein Energiesystem: Es kann PV-Prognose, Speicherfüllstand, Strompreis, Wallbox und Wärmepumpe zusammenführen. '),
      bold('Preis allein ist noch keine Optimierungsstrategie'),
      t('.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Was ist ein dynamischer Stromtarif?')),
      p(
        t('Bei einem klassischen Stromvertrag kennst du deinen Arbeitspreis im Voraus. Er bleibt für einen bestimmten Zeitraum gleich oder wird nur gelegentlich angepasst. Bei einem '),
        bold('dynamischen Stromtarif'),
        t(' verändert sich dagegen ein Teil des Strompreises mit dem kurzfristigen Großhandelspreis. Der Strom kann deshalb im Tagesverlauf deutlich günstiger oder teurer werden.'),
      ),
      p(
        t('Seit dem 1. Januar 2025 müssen alle Stromlieferanten dynamische Stromtarife anbieten. Voraussetzung für die Nutzung ist ein '),
        bold('intelligentes Messsystem – also ein Smart Meter'),
        t(', das deinen Verbrauch zeitaufgelöst erfasst und für die Abrechnung bereitstellt. Ein normaler digitaler Zähler ohne Smart-Meter-Gateway reicht dafür nicht.'),
      ),
      p(
        t('Seit Oktober 2025 arbeitet der gekoppelte europäische Day-Ahead-Markt mit 15-Minuten-Produkten. Damit können dynamische Tarife die Preisbewegungen heute deutlich feiner abbilden als die früher typischen Stundenpreise. Wie genau dein Lieferant abrechnet, steht im jeweiligen Tarifmodell.'),
      ),
      p(
        t('Was ein Smart Meter kostet, wann es Pflicht wird und warum es nicht mit einem HEMS verwechselt werden sollte, erklären wir separat in '),
        link('Smart Meter 2026: Wer einen braucht, was er kostet und was er bei PV wirklich bringt', '/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile'),
        t('.'),
      ),
    ),

    hinweisBlock(
      'Dynamisch bedeutet nicht automatisch billig',
      p(
        t('Ein dynamischer Tarif gibt die Schwankungen des Marktes an dich weiter. Das ist sein Vorteil – und sein Risiko. In günstigen Zeitfenstern kannst du sparen. In angespannten Stunden können die Preise aber deutlich steigen. Wer seinen Verbrauch nicht verschieben kann oder will, kauft damit nicht automatisch günstiger ein.'),
      ),
    ),

    textBlock(
      h('h2', t('Der wichtigste Punkt: Börsenpreis ist nicht Endkundenpreis')),
      p(
        t('In Apps sieht ein Börsenpreis von beispielsweise wenigen Cent pro Kilowattstunde spektakulär aus. Für deine Stromrechnung ist er aber nur ein Teil der Wahrheit. Der Endkundenpreis besteht aus mehreren Komponenten.'),
      ),
    ),

    tabelleBlock('Was bei einem dynamischen Tarif im Strompreis steckt', [
      {
        spalte1: 'Börsen-/Beschaffungspreis',
        spalte2: 'Dynamisch',
        spalte3: 'Dieser Anteil verändert sich mit dem Markt und ist der eigentliche Kern des Tarifs',
      },
      {
        spalte1: 'Lieferantenaufschlag / Servicegebühr',
        spalte2: 'Je nach Anbieter',
        spalte3: 'Kann pro kWh, monatlich oder über andere Tarifbestandteile berechnet werden',
      },
      {
        spalte1: 'Netzentgelte',
        spalte2: 'Grundsätzlich separat',
        spalte3: 'Können bei §14a und Modul 3 zusätzlich zeitvariabel reduziert werden',
      },
      {
        spalte1: 'Steuern, Umlagen und Abgaben',
        spalte2: 'Nicht automatisch dynamisch',
        spalte3: 'Bleiben grundsätzlich Teil des Endkundenpreises',
      },
      {
        spalte1: 'Grundpreis',
        spalte2: 'Vertraglich',
        spalte3: 'Fällt unabhängig vom einzelnen Börsenpreis-Zeitfenster an',
      },
      {
        spalte1: 'Messstellenbetrieb',
        spalte2: 'Zusätzliche Kosten möglich',
        spalte3: 'Für einen dynamischen Tarif ist ein intelligentes Messsystem erforderlich',
      },
    ]),

    p(
      t('Deshalb bedeutet ein negativer Börsenpreis nicht automatisch, dass dir jemand für deinen Haushaltsverbrauch Geld überweist. Der variable Energiepreis kann zwar sehr niedrig oder negativ werden. Andere Preisbestandteile bleiben trotzdem bestehen. Entscheidend ist immer der '),
      bold('vollständige Tarifpreis am Zähler'),
      t(' – nicht nur die Börsenkurve in der App.'),
    ),

    textBlock(
      h('h2', t('Warum Photovoltaik den dynamischen Tarif paradoxerweise weniger attraktiv machen kann')),
      p(
        t('Auf den ersten Blick klingt die Kombination perfekt: PV-Anlage plus dynamischer Tarif. Tatsächlich gibt es einen kleinen Zielkonflikt. Viel Solarstrom im Netz drückt häufig gerade tagsüber den Börsenpreis. Das sind also oft die Stunden, in denen Netzstrom besonders günstig wird.'),
      ),
      p(
        t('Als PV-Betreiber kaufst du in genau diesen Stunden aber häufig '),
        bold('gar keinen oder nur wenig Netzstrom'),
        t(', weil dein Dach das Haus bereits versorgt. Der günstige Börsenpreis nützt dir dann wenig.'),
      ),
      p(
        t('Beispiel: Um 13 Uhr ist Strom am Markt sehr günstig. Deine PV-Anlage liefert gleichzeitig 8 kW, das Haus benötigt 1 kW und der Speicher lädt aus der PV. Dein Netzbezug liegt bei null. Du hast zwar den günstigsten Tarifzeitpunkt des Tages – aber nichts zu kaufen.'),
      ),
      p(
        t('Abends um 19 Uhr ist die PV-Leistung dagegen fast weg. Genau dann steigen Verbrauch und Börsenpreise häufig wieder. Ohne ausreichend gespeicherte Energie kann ein dynamischer Tarif hier sogar teurer sein als der Durchschnitt.'),
      ),
    ),

    hinweisBlock(
      'PV allein ist kein Argument für einen dynamischen Tarif',
      p(
        t('Je höher dein solarer Eigenverbrauch bereits ist, desto kleiner wird die Strommenge, auf die der dynamische Tarif überhaupt wirken kann. Entscheidend ist deshalb nicht nur die PV-Größe, sondern dein verbleibender Netzbezug und die Frage, ob dieser zeitlich verschoben werden kann.'),
      ),
    ),

    textBlock(
      h('h2', t('Mit Batteriespeicher: sinnvoll – aber nur mit der richtigen Strategie')),
      p(
        t('Ein Batteriespeicher verändert die Situation. Er kann günstigen Netzstrom aufnehmen und später teuren Netzbezug vermeiden. Technisch klingt das nach einem einfachen Arbitragegeschäft: billig laden, teuer entladen. In der Praxis muss der Preisunterschied aber groß genug sein.'),
      ),
      p(
        t('Denn beim Laden und Entladen entstehen Verluste. Zusätzlich altert ein Speicher mit jedem Energieumsatz. Dazu kommen Tarifaufschläge und weitere Preisbestandteile. Ein Preisunterschied von zwei oder drei Cent pro Kilowattstunde ist deshalb nicht automatisch ein wirtschaftlicher Grund, den Speicher aus dem Netz zu laden.'),
      ),
      p(
        t('Noch wichtiger bei PV: '),
        bold('Der Speicher darf nicht zur falschen Zeit voll sein'),
        t('. Wird er nachts komplett mit günstigem Netzstrom geladen, fehlt am nächsten sonnigen Mittag womöglich Platz für kostenlosen eigenen Solarstrom. Dann hat die vermeintliche Tarifoptimierung die PV-Optimierung verschlechtert.'),
      ),
      p(
        t('Ein gutes Energiemanagement berücksichtigt deshalb nicht nur den aktuellen Preis, sondern auch '),
        bold('PV-Prognose, erwarteten Hausverbrauch, Speicherfüllstand und die kommenden Preise'),
        t('.'),
      ),
    ),

    tippBlock(
      'Nicht „billig laden", sondern den nächsten Tag planen',
      p(
        t('Für einen Speicher ist die Frage nicht: „Ist der Strom jetzt günstig?" Sondern: „Brauche ich diese Energie später – und habe ich morgen genug Platz für meine PV?" Genau hier trennt sich ein einfacher Tarifautomat von einem echten HEMS.'),
      ),
    ),

    textBlock(
      h('h2', t('Für wen lohnt sich ein dynamischer Stromtarif besonders?')),
      p(
        t('Ein dynamischer Tarif wird umso interessanter, je größer der Anteil deines Verbrauchs ist, den du verschieben kannst, ohne Komfort einzubüßen.'),
      ),
    ),

    tabelleBlock('Typische Haushalte – wie gut passt ein dynamischer Tarif?', [
      {
        spalte1: 'Wohnung / Haus ohne große flexible Verbraucher',
        spalte2: 'Eher begrenztes Potenzial',
        spalte3: 'Kühlschrank, Licht und Kochen lassen sich kaum sinnvoll in günstige Zeitfenster verschieben',
      },
      {
        spalte1: 'PV ohne Speicher',
        spalte2: 'Mittel bis gering',
        spalte3: 'Günstige Solarstunden überschneiden sich häufig mit eigener PV-Erzeugung',
      },
      {
        spalte1: 'PV + Batteriespeicher',
        spalte2: 'Mittel',
        spalte3: 'Potenzial steigt, wenn der Speicher prognosebasiert und netzseitig sinnvoll geladen werden kann',
      },
      {
        spalte1: 'E-Auto mit flexibler Ladezeit',
        spalte2: 'Gut',
        spalte3: 'Mehrere kWh pro Ladevorgang lassen sich oft problemlos in günstige Stunden verschieben',
      },
      {
        spalte1: 'Wärmepumpe',
        spalte2: 'Gut, aber begrenzt verschiebbar',
        spalte3: 'Gebäude und Warmwasserspeicher können thermische Flexibilität liefern – Komfort und Effizienz bleiben wichtiger als der billigste Preis',
      },
      {
        spalte1: 'PV + Speicher + E-Auto + Wärmepumpe + HEMS',
        spalte2: 'Sehr gutes technisches Potenzial',
        spalte3: 'Mehrere flexible Verbraucher können gemeinsam nach PV, Preis und Netz optimiert werden',
      },
    ]),

    textBlock(
      h('h2', t('Das E-Auto ist oft der beste flexible Verbraucher')),
      p(
        t('Ein E-Auto ist für dynamische Tarife besonders interessant, weil relativ viel Energie in einem vergleichsweise großen Zeitfenster verschoben werden kann. Das Fahrzeug steht beispielsweise von 18 Uhr bis 7 Uhr am Haus, muss aber nicht zwingend um 18:05 Uhr mit voller Leistung laden.'),
      ),
      p(
        t('Ein HEMS kann innerhalb des verfügbaren Zeitfensters die günstigsten Preisphasen auswählen und gleichzeitig berücksichtigen, wann das Fahrzeug wieder fahrbereit sein muss. Mit PV wird zusätzlich tagsüber Solarüberschuss priorisiert.'),
      ),
      p(
        t('Damit wird aus „Laden sobald eingesteckt" eine echte Ladeplanung: '),
        bold('Abfahrtszeit + gewünschter Ladezustand + PV-Prognose + Strompreis'),
        t('. Genau diese Kombination erzeugt den Nutzen.'),
      ),
    ),

    textBlock(
      h('h2', t('Wärmepumpe: Strompreis optimieren, aber nicht die Effizienz kaputtregeln')),
      p(
        t('Auch eine Wärmepumpe kann Verbrauch zeitlich verschieben. Das Gebäude selbst speichert Wärme, ebenso ein Warmwasser- oder Pufferspeicher. Deshalb muss der Verdichter nicht in jeder Viertelstunde exakt dem aktuellen Wärmebedarf folgen.'),
      ),
      p(
        t('Trotzdem wäre es ein Fehler, die Wärmepumpe ausschließlich nach dem Strompreis zu steuern. Wenn eine Anlage für einen günstigen Tarifzeitpunkt mit unnötig hoher Vorlauftemperatur arbeitet, kann der schlechtere COP einen Teil des Preisvorteils wieder auffressen.'),
      ),
      p(
        t('Die Reihenfolge sollte deshalb lauten: '),
        bold('erst effizient heizen, dann innerhalb dieses effizienten Betriebsfensters zeitlich optimieren'),
        t('. Komfort, notwendige Heizleistung und Anlagenhydraulik bleiben die Leitplanken.'),
      ),
    ),

    textBlock(
      h('h2', t('Dynamischer Tarif und § 14a Modul 3: zwei verschiedene Preissignale')),
      p(
        t('Seit April 2025 gibt es für steuerbare Verbrauchseinrichtungen zusätzlich das zeitvariable Netzentgelt nach § 14a Modul 3. Das wird häufig mit einem dynamischen Stromtarif verwechselt. Es sind aber zwei verschiedene Dinge.'),
      ),
    ),

    tabelleBlock('Dynamischer Stromtarif vs. §14a Modul 3', [
      {
        spalte1: 'Dynamischer Stromtarif',
        spalte2: 'Preis für die gelieferte Energie orientiert sich am Strommarkt',
        spalte3: 'Signal kommt vom Stromlieferanten / Spotmarkt',
      },
      {
        spalte1: '§14a Modul 3',
        spalte2: 'Zeitvariables Netzentgelt mit Hoch-, Standard- und Niedrigtarifzeiten',
        spalte3: 'Signal kommt aus der lokalen Netzbelastung und wird vom Netzbetreiber festgelegt',
      },
      {
        spalte1: 'Kombination',
        spalte2: 'Beides kann zeitlich zusammenpassen – muss aber nicht',
        spalte3: 'Das günstigste Börsenzeitfenster ist nicht automatisch das günstigste Netzentgelt-Zeitfenster',
      },
    ]),

    p(
      t('Modul 3 kann nur zusammen mit Modul 1 gewählt werden. Der Netzbetreiber legt die Zeitfenster kalenderjährlich fest. Damit entstehen für ein Energiemanagement zwei Optimierungsgrößen: der '),
      bold('Energiepreis'),
      t(' und das '),
      bold('Netzentgelt'),
      t('.'),
    ),
    p(
      t('2026 ist die praktische Umsetzung allerdings noch nicht überall reibungslos. Die Bundesnetzagentur hat bereits Verfahren gegen Netzbetreiber eingeleitet, weil insbesondere das zeitvariable Modul 3 teilweise nicht oder nicht korrekt umgesetzt wurde. Für Kunden bedeutet das: Vor einer Tarifentscheidung prüfen, ob Netzbetreiber und Lieferant die Kombination tatsächlich abrechnen können.'),
    ),

    textBlock(
      h('h2', t('Was negative Strompreise für dich bedeuten')),
      p(
        t('Negative Großhandelspreise kommen inzwischen regelmäßig vor. 2025 verzeichnete die Bundesnetzagentur 573 Stunden mit negativen Day-Ahead-Großhandelspreisen. Das zeigt, dass starke Preisschwankungen kein exotischer Sonderfall mehr sind.'),
      ),
      p(
        t('Für den Haushaltskunden ist daraus aber nicht abzuleiten: „573 Stunden kostenloser Strom". Dein tatsächlicher Preis hängt vom Tarifmodell und den übrigen Preisbestandteilen ab. Trotzdem entstehen in solchen Phasen oft sehr günstige Verbrauchsfenster – besonders für Wallbox, Speicher oder andere verschiebbare Lasten.'),
      ),
      p(
        t('Für PV-Betreiber kommt eine zweite Perspektive hinzu: Neue Anlagen können bei negativen Marktpreisen zeitweise keinen EEG-Zahlungsanspruch haben. Wie 60-%-Regel, Smart Meter und negative Preise zusammenspielen, erklären wir in '),
        link('Solarspitzengesetz 2026: 60-%-Regel, negative Strompreise und Smart Meter', '/strom-energiemanagement/solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Die eigentliche Frage: Wie viel Netzstrom kannst du verschieben?')),
      p(
        t('Ob sich ein dynamischer Tarif lohnt, entscheidet nicht dein Gesamtstromverbrauch. Entscheidend ist der Teil des '),
        bold('Netzbezugs'),
        t(', den du zeitlich beeinflussen kannst.'),
      ),
      p(
        t('Ein Haushalt mit 10.000 kWh Jahresverbrauch kann ein schlechter Kandidat sein, wenn nahezu alles zu festen Zeiten gebraucht wird. Ein anderer Haushalt mit nur 6.000 kWh kann hervorragend passen, wenn davon 2.500 kWh fürs E-Auto flexibel über Nacht geladen werden können.'),
      ),
      p(
        t('Bei PV muss außerdem nur der verbleibende Netzbezug betrachtet werden. Wenn eine Anlage 70 % des Haushaltsbedarfs aus PV und Speicher deckt, wirken dynamische Preise nur noch auf die restlichen 30 %. Das ist gut für die Stromrechnung – reduziert aber gleichzeitig das absolute Sparpotenzial des Tarifs.'),
      ),
    ),

    tippBlock(
      'Vor dem Tarifwechsel erst das Lastprofil ansehen',
      p(
        t('Wenn Smart-Meter-Daten vorhanden sind, würden wir nicht mit Jahres-kWh rechnen, sondern mit dem tatsächlichen zeitlichen Verbrauch. Daraus lässt sich sehen, wie viel Strom heute in teuren Phasen bezogen wird und welcher Anteil realistisch verschiebbar wäre. Erst danach ist eine Tarifentscheidung sinnvoll.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann ein Festpreistarif die bessere Wahl sein kann')),
      p(
        t('Dynamische Tarife sind kein Qualitätsmerkmal an sich. Für manche Haushalte ist ein guter Festpreistarif die bessere Lösung. Das gilt insbesondere, wenn:'),
      ),
      ul(
        p(t('kaum größere flexible Verbraucher vorhanden sind,')),
        p(t('du Stromverbrauch nicht aktiv steuern möchtest und kein HEMS die Arbeit übernimmt,')),
        p(t('dein verbleibender Netzbezug durch PV und Speicher ohnehin sehr klein ist,')),
        p(t('der dynamische Tarif hohe Aufschläge oder einen ungünstigen Grundpreis hat,')),
        p(t('du Preissicherheit höher gewichtest als mögliche Einsparungen,')),
        p(t('deine Hauptverbräuche regelmäßig in teure Abendstunden fallen und sich kaum verschieben lassen.')),
      ),
      p(
        t('Ein Festpreistarif ist dabei nicht „altmodisch". Er überträgt einen Teil des Beschaffungsrisikos auf den Lieferanten. Dafür zahlst du einen kalkulierten Preis. Beim dynamischen Tarif trägst du mehr Marktpreisrisiko selbst – kannst dafür aber Flexibilität monetarisieren.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ein HEMS besser macht als eine Tarif-App')),
      p(
        t('Eine App kann dir zeigen, dass Strom um 3 Uhr nachts billig ist. Das ist Information. Ein HEMS geht einen Schritt weiter und entscheidet innerhalb deiner Regeln, '),
        bold('welcher Verbraucher diese günstige Energie überhaupt nutzen sollte'),
        t('.'),
      ),
      p(
        t('Ein gutes System berücksichtigt beispielsweise gleichzeitig:'),
      ),
      ul(
        p(t('Day-Ahead- bzw. Tarifpreise für die kommenden Zeitfenster,')),
        p(t('PV-Ertragsprognose für den nächsten Tag,')),
        p(t('aktuellen Ladezustand des Batteriespeichers,')),
        p(t('Abfahrtszeit und Ladeziel des E-Autos,')),
        p(t('Wärmebedarf und Betriebsgrenzen der Wärmepumpe,')),
        p(t('Netzentgelt-Zeitfenster nach §14a, soweit verfügbar,')),
        p(t('Mindestreserve für Backup- oder Notstromfunktionen,')),
        p(t('technische Leistungsgrenzen am Netzanschlusspunkt.')),
      ),
      p(
        t('Damit wird nicht der billigste Strompreis optimiert, sondern die '),
        bold('Gesamtkosten des Energiesystems'),
        t('. Das ist ein wichtiger Unterschied.'),
      ),
    ),

    hinweisBlock(
      'Hersteller-Automatik und offenes HEMS sind nicht dasselbe',
      p(
        t('Viele Speicher- und Wallboxhersteller bieten inzwischen eigene Tarifoptimierung an. Das kann gut funktionieren, solange alle relevanten Geräte aus demselben Ökosystem stammen. Wer PV, Speicher, Wallbox und Wärmepumpe verschiedener Hersteller kombinieren oder später wechseln möchte, sollte vorab prüfen, wie offen die Schnittstellen wirklich sind.'),
      ),
    ),

    textBlock(
      h('h2', t('Netzladen des Speichers: wann es sich rechnen kann')),
      p(
        t('Beim Netzladen muss der spätere vermiedene Strombezug mehr wert sein als die Summe aus günstigem Einkaufspreis, Speicherverlusten, zusätzlicher Alterung und gegebenenfalls Tarif- oder Messkosten.'),
      ),
      p(
        t('Deshalb ist die einfache Regel „unter 20 Cent laden, über 30 Cent entladen" zu grob. Entscheidend ist der konkrete '),
        bold('Preisabstand nach allen Kosten'),
        t(' und die Frage, ob die gespeicherte Energie später tatsächlich gebraucht wird.'),
      ),
      p(
        t('Außerdem muss die Anlagenkonfiguration Netzladen technisch und abrechnungstechnisch sauber unterstützen. Bei komplexen Messkonzepten, Direktvermarktung oder Multi-Use-Speichern können zusätzliche Anforderungen entstehen. Eine pauschale Freigabe allein aufgrund eines günstigen Tarifs wäre daher unseriös.'),
      ),
    ),

    textBlock(
      h('h2', t('Fünf typische Fehler bei dynamischen Stromtarifen')),
      p(
        bold('1. Nur den Börsenpreis vergleichen. '),
        t('Entscheidend ist der vollständige Endkundenpreis inklusive Aufschlägen, Grundpreis, Messung und weiterer Preisbestandteile.'),
      ),
      p(
        bold('2. PV ignorieren. '),
        t('Die billigsten Marktstunden können genau in deine stärksten PV-Stunden fallen – dann gibt es kaum Netzbezug zu optimieren.'),
      ),
      p(
        bold('3. Speicher ohne Prognose laden. '),
        t('Ein nachts vollgeladener Speicher kann am nächsten Mittag wertvollen Platz für PV-Überschuss blockieren.'),
      ),
      p(
        bold('4. Wärmepumpe nur nach Preis fahren. '),
        t('Ein niedriger Strompreis nützt wenig, wenn dafür mit unnötig hoher Vorlauftemperatur und schlechter Effizienz gearbeitet wird.'),
      ),
      p(
        bold('5. Jede Automatik für ein HEMS halten. '),
        t('Eine Tarif-App oder Speicherfunktion optimiert häufig nur ein Gerät. Ein Energiemanagement muss das Zusammenspiel aller relevanten Energieflüsse berücksichtigen.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Entscheidungscheck: Passt ein dynamischer Tarif zu deinem Haus?')),
      p(
        t('Je mehr der folgenden Fragen du mit Ja beantworten kannst, desto interessanter wird ein dynamischer Tarif:'),
      ),
      ul(
        p(t('Ist bereits ein intelligentes Messsystem vorhanden oder zeitnah verfügbar?')),
        p(t('Hast du ein E-Auto, eine Wärmepumpe oder andere größere verschiebbare Verbraucher?')),
        p(t('Kann deine Wallbox Ladeleistung und Ladezeiten automatisiert steuern?')),
        p(t('Kann dein Speicher netzseitig laden und lässt er sich extern bzw. prognosebasiert steuern?')),
        p(t('Gibt es ein HEMS, das PV, Preis und Verbraucher gemeinsam optimiert?')),
        p(t('Kannst du einen nennenswerten Anteil deines Netzbezugs in andere Zeitfenster verschieben?')),
        p(t('Akzeptierst du, dass der Strompreis zeitweise auch deutlich steigen kann?')),
        p(t('Kennst du Aufschlag, Grundpreis und Messkosten des konkreten Tarifs?')),
      ),
      p(
        t('Sind dagegen weder E-Auto noch Wärmepumpe noch steuerbarer Speicher vorhanden und möchtest du dich mit dem zeitlichen Verbrauch nicht beschäftigen, ist der wirtschaftliche Hebel häufig begrenzt.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Ein dynamischer Stromtarif ist kein Sparprodukt, sondern ein '),
        bold('Flexibilitätsprodukt'),
        t('. Er lohnt sich nicht deshalb, weil der Börsenstrom manchmal billig ist, sondern wenn dein Haus den Verbrauch tatsächlich in diese günstigen Zeitfenster verschieben kann.'),
      ),
      p(
        t('Mit Photovoltaik allein ist das Potenzial oft kleiner als erwartet, weil günstige Mittagsstunden und eigene Solarproduktion zusammenfallen. Mit E-Auto, Wärmepumpe und intelligent gesteuertem Speicher wächst die Flexibilität deutlich.'),
      ),
      p(
        t('Der größte Hebel entsteht deshalb nicht aus dem Tarif allein, sondern aus dem Zusammenspiel von '),
        bold('Smart Meter + PV + Speicher + flexible Verbraucher + HEMS'),
        t('. Dann muss niemand nachts um drei aufstehen, um die Waschmaschine einzuschalten. Das System entscheidet innerhalb klarer Vorgaben selbst, wann Energie am sinnvollsten genutzt wird.'),
      ),
      p(
        t('Unsere Empfehlung für 2026: Nicht zuerst einen dynamischen Tarif buchen und danach überlegen, was man damit macht. '),
        bold('Erst das Energiesystem und das Lastprofil verstehen – dann den Tarif wählen'),
        t('.'),
      ),
    ),

    ctaBlock({
      titel: 'Passt ein dynamischer Stromtarif zu deinem Energiesystem?',
      text:
        'Du hast PV, Speicher, Wärmepumpe oder E-Auto und möchtest wissen, ob ein dynamischer Tarif bei deinem tatsächlichen Verbrauch wirklich einen Vorteil bringt? Wir betrachten nicht nur den Tarif, sondern Smart Meter, Lastprofil, Speicherstrategie und Steuerbarkeit gemeinsam – ohne Bindung an ein geschlossenes Energie-Ökosystem.',
      buttonText: 'Energiesystem prüfen lassen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist ein dynamischer Stromtarif?',
      'Bei einem dynamischen Stromtarif verändert sich der variable Energiepreis entsprechend der kurzfristigen Strompreise am Spotmarkt. Der Preis kann sich dadurch mehrmals täglich beziehungsweise je nach Tarif in sehr kurzen Zeitintervallen ändern. Für die Nutzung ist ein intelligentes Messsystem erforderlich, damit der Verbrauch zeitaufgelöst erfasst und abgerechnet werden kann.',
    ),
    faqItem(
      'Brauche ich für einen dynamischen Stromtarif ein Smart Meter?',
      'Ja. Die Bundesnetzagentur nennt ein intelligentes Messsystem als Voraussetzung für dynamische Stromtarife. Ein intelligentes Messsystem besteht aus moderner Messeinrichtung und Smart-Meter-Gateway. Ein normaler digitaler Stromzähler allein genügt für die dynamische Abrechnung nicht.',
    ),
    faqItem(
      'Müssen Stromanbieter 2026 einen dynamischen Tarif anbieten?',
      'Ja. Seit 2025 müssen alle Stromlieferanten dynamische Stromtarife anbieten. Vor 2025 galt diese Pflicht nur stufenweise für größere Lieferanten. Ob der Tarif eines bestimmten Anbieters wirtschaftlich attraktiv ist, ist damit allerdings nicht gesagt.',
    ),
    faqItem(
      'Ist Strom bei einem negativen Börsenpreis für mich kostenlos?',
      'Nicht automatisch. Der Börsenpreis ist nur ein Bestandteil deines Endkundenpreises. Netzentgelte, Steuern, Umlagen, Lieferantenaufschläge, Grundpreis und gegebenenfalls Messkosten können weiterhin anfallen. Entscheidend ist der vollständige Tarifpreis in dem betreffenden Zeitfenster.',
    ),
    faqItem(
      'Lohnt sich ein dynamischer Stromtarif mit Photovoltaik?',
      'Das hängt vom verbleibenden Netzbezug ab. PV reduziert den Strombezug häufig gerade in den günstigen Mittagsstunden. Deshalb kann der Effekt eines dynamischen Tarifs bei einer PV-Anlage kleiner sein als bei einem Haushalt ohne PV. Interessanter wird es, wenn zusätzliche flexible Verbraucher wie E-Auto, Wärmepumpe oder steuerbarer Speicher vorhanden sind.',
    ),
    faqItem(
      'Kann ich meinen Batteriespeicher bei niedrigen Preisen aus dem Netz laden?',
      'Technisch können viele moderne Speichersysteme das. Wirtschaftlich sinnvoll ist es nur, wenn der spätere Preisvorteil größer ist als Lade- und Entladeverluste, zusätzliche Speicherbeanspruchung und weitere Tarifkosten. Außerdem müssen Anlagenkonfiguration, Messkonzept und gegebenenfalls Vermarktungsmodell das Netzladen sauber unterstützen.',
    ),
    faqItem(
      'Ist ein dynamischer Tarif mit E-Auto besonders sinnvoll?',
      'Oft ja, weil sich beim E-Auto relativ große Energiemengen zeitlich verschieben lassen. Wenn das Fahrzeug mehrere Stunden am Haus steht, kann eine intelligente Wallbox innerhalb dieses Fensters günstigere Preiszeiten nutzen. Am besten funktioniert das mit einem HEMS, das zusätzlich PV-Erzeugung, Abfahrtszeit und gewünschten Ladezustand berücksichtigt.',
    ),
    faqItem(
      'Kann eine Wärmepumpe nach dynamischen Strompreisen gesteuert werden?',
      'Ja, in gewissen Grenzen. Gebäude und Warmwasserspeicher bieten thermische Flexibilität. Die Wärmepumpe sollte aber nicht ausschließlich nach dem Strompreis betrieben werden. Effizienz, Vorlauftemperatur, Komfort und notwendige Heizleistung bleiben wichtiger. Sinnvoll ist eine Preisoptimierung innerhalb eines technisch effizienten Betriebsbereichs.',
    ),
    faqItem(
      'Was ist der Unterschied zwischen dynamischem Tarif und §14a Modul 3?',
      'Beim dynamischen Stromtarif verändert sich der Energiepreis entsprechend dem Strommarkt. Bei §14a Modul 3 geht es um zeitvariable Netzentgelte des lokalen Netzbetreibers. Modul 3 hat Hoch-, Standard- und Niedrigtarifzeiten und kann nur zusammen mit Modul 1 gewählt werden. Beide Preissignale können kombiniert werden, müssen zeitlich aber nicht identisch sein.',
    ),
    faqItem(
      'Brauche ich ein HEMS für einen dynamischen Stromtarif?',
      'Zwingend vorgeschrieben ist ein HEMS nicht. Ohne Automatisierung musst du deinen Verbrauch aber selbst nach Preisen verschieben. Mit PV, Speicher, Wallbox und Wärmepumpe wird ein HEMS besonders sinnvoll, weil es nicht nur den Strompreis, sondern auch PV-Prognose, Speicherfüllstand, Ladeziel und Wärmebedarf berücksichtigen kann.',
    ),
    faqItem(
      'Kann ein dynamischer Tarif auch teurer werden als ein Festpreistarif?',
      'Ja. Du übernimmst einen größeren Teil des Marktpreisrisikos. Wenn du viel Strom in teuren Zeitfenstern verbrauchst und den Verbrauch nicht verschieben kannst, kann ein dynamischer Tarif ungünstiger sein. Deshalb sollten nicht nur Durchschnittspreise, sondern das persönliche Lastprofil und die konkreten Tarifbedingungen verglichen werden.',
    ),
    faqItem(
      'Für wen lohnt sich ein dynamischer Stromtarif eher nicht?',
      'Für Haushalte mit geringem oder kaum verschiebbarem Netzbezug, ohne E-Auto, Wärmepumpe oder steuerbaren Speicher ist das Potenzial häufig begrenzt. Gleiches gilt, wenn Preissicherheit wichtiger ist als mögliche Einsparungen oder wenn der konkrete Tarif hohe Aufschläge und Grundkosten hat.',
    ),
  ],
}

await upsertRatgeberArticle(article)
