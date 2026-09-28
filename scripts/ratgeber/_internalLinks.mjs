// Interne Links im Fließtext – erzeugt für Schritt 3 (siehe docs/ratgeber-links-schritt-3.md).
//
// Pro Artikel: welcher Wortlaut (`anchor`) in welchem Satz (`context`, eindeutiger Textausschnitt)
// auf welche URL verlinkt wird. Angewendet von migrate-2026-09-29-interne-links.mjs und von
// upsertRatgeberArticle, damit ein erneut ausgeführtes Artikel-Script die Links behält.

export const INTERNAL_LINKS = {
  '14a-enwg-waermepumpe-messkonzept-8': [
    { url: "/wallbox/paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen", anchor: "§ 14a EnWG", context: "brauchseinrichtungen die Regelungen des § 14a EnWG. Dazu gehören unter" },
    { url: "/waermepumpe/waermepumpentarif-oder-dynamischer-stromtarif", anchor: "Wärmepumpentarife", context: "In unseren Projekten sehen wir aktuell Wärmepumpentarife, die je nach Anbiet" },
    { url: "/strom-energiemanagement/steuerbox-paragraf-14a-smart-meter-hems", anchor: "§ 14a", context: "eduzierte Netzentgelte. Die Idee hinter § 14a ist also kein pausc" },
    { url: "/waermepumpe/waermepumpe-stromverbrauch-berechnen", anchor: "Wärmepumpenstrom", context: "he PV-Deckung, durch die nur noch wenig Wärmepumpenstrom aus dem Netz bezoge" },
  ],
  'ab-wieviel-qm-lohnt-sich-eine-solaranlage': [
    { url: "/solaranlage/solarmodule-dach-voll-belegen-dachflaeche-freilassen", anchor: "größere Anlage", context: "wirtschaftlich sinnvoller sein als eine größere Anlage, die schlecht beleg" },
    { url: "/solaranlage/ost-west-oder-sueddach-solaranlage", anchor: "Ost-West-Dach", context: "Ein gut belegtes Ost-West-Dach kann sinnvoller sei" },
    { url: "/solaranlage/pv-verschattung-leistungsoptimierer-stringdesign", anchor: "Verschattung", context: "en, Sicherheitsabstände, Dachaufbauten, Verschattung und die Art der Bel" },
    { url: "/solaranlage/solaranlage-fuer-e-auto-auslegen", anchor: "E-Auto", context: "sserbereitung, Wärmepumpe oder späterem E-Auto. Dann kann auch ein" },
  ],
  'alte-pv-anlage-erweitern-neue-anlage-daneben': [
    { url: "/solaranlage/pv-anlage-anmelden-marktstammdatenregister", anchor: "Marktstammdatenregister", context: "Umsetzung sollten Netzbetreiberprozess, Marktstammdatenregister und Messkonzept gek" },
    { url: "/repowering/hems-monitoring-nachruesten", anchor: "Monitoring", context: "erdem Einspeisegrenzen, Prioritäten und Monitoring zusammenführen. Son" },
    { url: "/repowering/repowering-vs-neuanlage", anchor: "Neuanlage", context: "Bestands- und Neuanlage können technisch am" },
  ],
  'alte-pv-anlage-nach-20-jahren': [
    { url: "/repowering/repowering-vs-neuanlage", anchor: "Neuaufbau", context: "g gewünscht ist, kann ein vollständiger Neuaufbau die ehrlichere Lösu" },
    { url: "/repowering/komponenten-tausch-pv-anlage", anchor: "Komponententausch", context: "t oder veraltet ist, kann ein gezielter Komponententausch sinnvoll sein." },
    { url: "/repowering/pv-anlage-rueckbau-montage", anchor: "Rückbau", context: "r, weil neben der neuen Anlage auch der Rückbau der alten Technik, " },
  ],
  'alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie': [
    { url: "/repowering/pid-hotspots-mikrorisse-delamination-pv-module", anchor: "Moduldegradation", context: "t wird ein bewölkter Messtag leicht mit Moduldegradation verwechselt." },
  ],
  'alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module': [
    { url: "/repowering/alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie", anchor: "Leerlaufspannung", context: "ngen. Bei Kälte steigt insbesondere die Leerlaufspannung; sie darf auch im u" },
    { url: "/repowering/hems-monitoring-nachruesten", anchor: "Monitoring-Daten", context: "tion und bisherige Erträge. Historische Monitoring-Daten sollten vor dem Aus" },
  ],
  'amortisation-pv-anlage': [
    { url: "/solaranlage/einspeiseverguetung-photovoltaik-2026", anchor: "Einspeisevergütung", context: "d 8-kWh-Speicher, Strompreis 35 ct/kWh, Einspeisevergütung 7,7 ct/kWh (Stand A" },
    { url: "/stromspeicher/lohnt-sich-ein-stromspeicher", anchor: "Lohnt sich ein Stromspeicher?", context: "em Fall trägt, beleuchtet der Ratgeber „Lohnt sich ein Stromspeicher?\"." },
    { url: "/solaranlage/eeg-2027-dach-pv-unter-25-kw", anchor: "EEG-Reform", context: "Zweitens wird über eine EEG-Reform beraten, die die fe" },
    { url: "/solaranlage/kosten-10-kwp-solaranlage-mit-speicher", anchor: "10 kWp", context: ", steht in unseren Kosten-Ratgebern für 10 kWp und 15 kWp." },
  ],
  'batteriezellen-stromspeicher-zellspannung-temperatur-balancing': [
    { url: "/stromspeicher/wie-lange-haelt-ein-stromspeicher", anchor: "Zyklen", context: "Temperatur und Entwicklung über mehrere Zyklen." },
    { url: "/stromspeicher/stromspeicher-kapazitaet-leistung-kw-kwh", anchor: "Entladeleistung", context: "uren und begrenzt bei Bedarf Lade- oder Entladeleistung. Kleine Abweichunge" },
  ],
  'bidirektionales-laden': [
    { url: "/stromspeicher/notstrom-oder-ersatzstrom", anchor: "Notstrom", context: "chtwetterphasen, hohe Preisstunden oder Notstrom. Wie ein HEMS beide" },
  ],
  'cloud-ems-vs-lokales-ems-energiedaten': [
    { url: "/strom-energiemanagement/offene-schnittstellen-pv-speicher-hems-hersteller-app", anchor: "Schnittstellen", context: "S brauchst du offene oder dokumentierte Schnittstellen. Deshalb sollte sch" },
    { url: "/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich", anchor: "dynamischer Stromtarif", context: "cher, Smart Meter, Wallbox, Wärmepumpe, dynamischer Stromtarif, Wetterprognose und" },
    { url: "/strom-energiemanagement/hems-wetterprognose-strompreis-ladezustand", anchor: "Wetterprognosen", context: " trotzdem genutzt werden – zum Beispiel Wetterprognosen, PV-Ertragsprognose" },
    { url: "/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile", anchor: "Smart Meter", context: "n Speicher. Sobald Wallbox, Wärmepumpe, Smart Meter und dynamische Stro" },
  ],
  'cloud-speicher-stromspeicher-vergleich': [
    { url: "/strom-energiemanagement/eigenverbrauch-optimieren-100-prozent-autarkie", anchor: "Autarkie", context: "onsabgaben, EEG-Umlage in den Tarifen). Autarkie ist das Gegenteil." },
    { url: "/stromspeicher/notstrom-oder-ersatzstrom", anchor: "Stromausfall", context: "mer, hat keine Vertragsbindung, ist bei Stromausfall eine echte Versorgu" },
  ],
  'dienstwagen-zuhause-laden-wallbox-stromkosten-arbeitgeber': [
    { url: "/wallbox/wallbox-zu-hause-laden", anchor: "eigene Wallbox", context: "agen lässt sich zuhause bequem über die eigene Wallbox laden. Schwieriger " },
    { url: "/wallbox/lastmanagement-wallbox-hausanschluss-ueberlastung", anchor: "Lastmanagement", context: "dynamische Leistungsregelung und Lastmanagement am Hausanschluss" },
  ],
  'dynamischer-stromtarif-paragraf-14a-netzentgelt': [
    { url: "/strom-energiemanagement/zeitvariable-netzentgelte-paragraph-14a-modul-3", anchor: "Modul 3", context: "ungen reduzierte Netzentgelte – und mit Modul 3 sogar ein zeitvaria" },
    { url: "/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich", anchor: "dynamische Tarife", context: "lich. Seit 2025 müssen Stromlieferanten dynamische Tarife anbieten." },
    { url: "/strom-energiemanagement/strommarkt-einfach-erklaert-boersenstrompreis-netzentgelt-strompreis", anchor: "Börsenpreis", context: ". Wichtig: Der Börsenpreis ist nicht identisch" },
  ],
  'dynamischer-stromtarif-pv-speicher-lohnt-sich': [
    { url: "/strom-energiemanagement/strommarkt-einfach-erklaert-boersenstrompreis-netzentgelt-strompreis", anchor: "Börsenpreis", context: "In Apps sieht ein Börsenpreis von beispielsweise " },
    { url: "/strom-energiemanagement/stromspeicher-aus-netz-laden-dynamisch-sinnvoll", anchor: "aus dem Netz zu laden", context: "in wirtschaftlicher Grund, den Speicher aus dem Netz zu laden." },
    { url: "/strom-energiemanagement/dynamischer-stromtarif-paragraf-14a-netzentgelt", anchor: "Netzentgelt", context: "nrichtungen zusätzlich das zeitvariable Netzentgelt nach § 14a Modul 3." },
  ],
  'eeg-2027-dach-pv-unter-25-kw': [
    { url: "/solaranlage/kosten-solaranlage-mit-speicher-einfamilienhaus", anchor: "mit Speicher", context: "n als Teil eines offenen Energiesystems mit Speicher, Verbrauchern und i" },
    { url: "/solaranlage/solaranlage-fuer-e-auto-auslegen", anchor: "E-Auto", context: "assende Anlagengröße, Batteriespeicher, E-Auto, Wärmepumpe und Ene" },
  ],
  'eigenverbrauch-optimieren-100-prozent-autarkie': [
    { url: "/stromspeicher/wie-gross-sollte-ein-stromspeicher-sein", anchor: "Speichergröße", context: "Aber Speichergröße und Autarkie wachse" },
    { url: "/solaranlage/solarmodule-dach-voll-belegen-dachflaeche-freilassen", anchor: "größere PV-Anlage", context: "Eine größere PV-Anlage erzeugt morgens, ab" },
  ],
  'einspeiseverguetung-photovoltaik-2026': [
    { url: "/solaranlage/pv-anlage-planen", anchor: "saubere Planung", context: "tschaftlichkeit, aber sie ersetzt keine saubere Planung. Entscheidend bleib" },
    { url: "/solaranlage/wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein", anchor: "Größe der Anlage", context: "lem das genaue Inbetriebnahmedatum, die Größe der Anlage und die Frage, ob Ü" },
  ],
  'garantie-vs-gewaehrleistung-pv-anlage': [
    { url: "/solaranlage/solarmodule-40-jahre-garantie-produkt-leistung", anchor: "Leistungsgarantie", context: "Wenn der Modulhersteller 25 Jahre Leistungsgarantie gibt, ist das eine " },
    { url: "/solaranlage/null-euro-anzahlung-photovoltaik", anchor: "Anzahlungen", context: "Bei größeren Anzahlungen: gibt es eine Anzah" },
  ],
  'gewerbespeicher-richtig-auslegen-lastgang-kw-kwh': [
    { url: "/solaranlage/solaranlage-gewerbedach", anchor: "Gewerbe", context: "barer erster Orientierungswert sein. Im Gewerbe ist er für die Batt" },
  ],
  'heizlastberechnung-waermepumpe': [
    { url: "/waermepumpe/waermepumpe-im-altbau", anchor: "Bestandsgebäuden", context: "In vielen Bestandsgebäuden hängt noch ein Heiz" },
    { url: "/waermepumpe/waermepumpe-taktet-staendig-starts-normal", anchor: "Takten", context: ". Ein gewisses Takten ist normal. Problem" },
    { url: "/waermepumpe/hydraulischer-abgleich-waermepumpe", anchor: "Hydraulik", context: "rlauftemperatur, Modulationsbereich und Hydraulik" },
    { url: "/waermepumpe/waermepumpe-mit-heizkoerpern", anchor: "Heizkörper", context: "in anderes Gebäude braucht dafür kleine Heizkörper und deutlich höhere" },
  ],
  'heizstab-waermepumpe-sinnvoll-stromverbrauch': [
    { url: "/waermepumpe/warmwasser-waermepumpe-temperatur-legionellenschutz-kosten", anchor: "Warmwasser", context: "Heizstab kann Spitzenlasten übernehmen, Warmwasser gezielt höher erwär" },
    { url: "/waermepumpe/waermepumpe-richtig-einstellen", anchor: "Heizkurve", context: "ratur, schlechter Volumenstrom, falsche Heizkurve, gesperrter Verdich" },
    { url: "/waermepumpe/heizlastberechnung-waermepumpe", anchor: "Heizlast", context: "Die optimale Einstellung hängt von Heizlast, Leistungskurve und" },
    { url: "/waermepumpe/hydraulischer-abgleich-waermepumpe", anchor: "Hydraulik", context: "ufzeiten können aber auf Einstellungen, Hydraulik oder Auslegung hinw" },
  ],
  'hems-monitoring-nachruesten': [
    { url: "/repowering/alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module", anchor: "Wechselrichter-Tausch", context: "hselrichter die Daten ohnehin mit (beim Wechselrichter-Tausch quasi gratis), oder" },
  ],
  'hems-wetterprognose-strompreis-ladezustand': [
    { url: "/strom-energiemanagement/hems-home-energy-management-system-hersteller-app", anchor: "HEMS", context: "t sofort mit 11 kW zu starten, kann ein HEMS die Ladung in sonne" },
    { url: "/strom-energiemanagement/cloud-ems-vs-lokales-ems-energiedaten", anchor: "Datenhoheit", context: "Deshalb ist für uns Datenhoheit und offene Integrat" },
    { url: "/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich", anchor: "dynamischer Stromtarife", context: "undesnetzagentur erklärt die Grundlagen dynamischer Stromtarife unter " },
  ],
  'hybrid-wechselrichter-oder-getrennte-geraete': [
    { url: "/stromspeicher/stromspeicher-nachruesten", anchor: "nachgerüstet", context: "Bei Bestandsanlagen, die nachgerüstet werden sollen, lohn" },
    { url: "/stromspeicher/notstrom-oder-ersatzstrom", anchor: "Notstrom", context: "n Neubau oder eine Bestandsanlage? Soll Notstrom möglich sein? Wie s" },
    { url: "/solaranlage/kosten-solaranlage-mit-speicher-einfamilienhaus", anchor: "PV-Anlage mit Speicher", context: "Wer eine PV-Anlage mit Speicher plant, hat zwei gru" },
  ],
  'hydraulischer-abgleich-waermepumpe': [
    { url: "/waermepumpe/waermepumpe-vorlauftemperatur", anchor: "Vorlauftemperatur", context: "ötig hoch. Häufig wird anschließend die Vorlauftemperatur angehoben, damit au" },
    { url: "/waermepumpe/waermepumpe-foerderung-2026", anchor: "KfW-Heizungsförderung", context: "Bei der aktuellen KfW-Heizungsförderung für private Wohngeb" },
    { url: "/waermepumpe/waermepumpe-mit-heizkoerpern", anchor: "Heizkörper", context: "em geringsten hydraulischen Widerstand. Heizkörper oder Heizkreise nah" },
    { url: "/waermepumpe/waermepumpe-richtig-einstellen", anchor: "Heizkurve", context: "n schlecht versorgten Raums die gesamte Heizkurve erhöht wird, muss d" },
  ],
  'internetausfall-pv-speicher-wallbox-hems': [
    { url: "/strom-energiemanagement/cloud-ems-vs-lokales-ems-energiedaten", anchor: "lokales HEMS", context: "Ein lokales HEMS kann Messwerte und " },
    { url: "/wallbox/pv-ueberschussladen-funktioniert-nicht-ursachen", anchor: "PV-Überschussladen", context: "uf einen Standardmodus wechseln. Reines PV-Überschussladen benötigt weiterhin " },
    { url: "/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich", anchor: "dynamische Tarife", context: " insbesondere wenn externe Steuerboxen, dynamische Tarife oder Fernwartungsve" },
    { url: "/strom-energiemanagement/hems-wetterprognose-strompreis-ladezustand", anchor: "Wetterprognosen", context: "App, Fernwartung, Wetterprognosen und dynamische Prei" },
  ],
  'jaz-wirkungsgrad': [
    { url: "/waermepumpe/waermepumpe-stromverbrauch-berechnen", anchor: "Wärmepumpenstrom", context: "mebedarf kosten bei JAZ 3 und 28 ct/kWh Wärmepumpenstrom rund 1.400 € – bei " },
    { url: "/waermepumpe/waermepumpe-vorlauftemperatur", anchor: "Vorlauftemperatur", context: "anzen JAZ-Stufe. Details im Beitrag zur Vorlauftemperatur." },
    { url: "/waermepumpe/heizstab-waermepumpe-sinnvoll-stromverbrauch", anchor: "Heizstab", context: "ilt durch verbrauchten Strom, inklusive Heizstab, Warmwasser und all" },
    { url: "/waermepumpe/heizlastberechnung-waermepumpe", anchor: "Heizlast", context: " Passende Heizlast, hydraulischer Abgl" },
  ],
  'komponenten-tausch-pv-anlage': [
    { url: "/repowering/alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module", anchor: "Wechselrichter-Tausch", context: "trieb – aber genau der Grund, warum ein Wechselrichter-Tausch kein Bestellvorgang" },
    { url: "/repowering/hems-monitoring-nachruesten", anchor: "Monitoring", context: "rkungsgrad, präziseres MPP-Tracking und Monitoring ab Werk. Der intere" },
    { url: "/repowering/alte-pv-anlage-nach-20-jahren", anchor: "EEG-Ende", context: "Dach ohnehin sanierungsbedürftig oder EEG-Ende in Sicht → die groß" },
  ],
  'kosten-10-kwp-solaranlage-mit-speicher': [
    { url: "/solaranlage/wie-viel-strom-erzeugt-eine-10-kwp-solaranlage", anchor: "10 kWp", context: "10 kWp ist bei Einfamilien" },
    { url: "/solaranlage/kosten-solaranlage-mit-speicher-einfamilienhaus", anchor: "mit Speicher", context: "Eine 10 kWp Anlage mit Speicher passt häufig gut zu" },
    { url: "/solaranlage/ab-wieviel-qm-lohnt-sich-eine-solaranlage", anchor: "Dachfläche", context: "cht aus einem Internetwert, sondern aus Dachfläche, Nutzung und techni" },
    { url: "/solaranlage/pv-anlage-planen", anchor: "saubere Planung", context: "Grenze ist relevant, ersetzt aber keine saubere Planung." },
  ],
  'kosten-15-kwp-solaranlage-mit-speicher': [
    { url: "/solaranlage/wie-viel-strom-erzeugt-eine-15-kwp-solaranlage", anchor: "15 kWp", context: "15 kWp ist für viele Häuser schon eine bewusst" },
    { url: "/solaranlage/kosten-10-kwp-solaranlage-mit-speicher", anchor: "10 kWp", context: "istungsteile aufgeteilt. Für die ersten 10 kWp gilt aktuell ein an" },
    { url: "/solaranlage/kosten-solaranlage-mit-speicher-einfamilienhaus", anchor: "mit Speicher", context: "Eine 15 kWp Anlage mit Speicher passt häufig gut zu" },
    { url: "/solaranlage/ab-wieviel-qm-lohnt-sich-eine-solaranlage", anchor: "Dachfläche", context: "icht aus einer runden Zahl, sondern aus Dachfläche, Verschattung, Last" },
  ],
  'kosten-solaranlage-einfamilienhaus': [
    { url: "/solaranlage/kosten-10-kwp-solaranlage-mit-speicher", anchor: "10 kWp", context: "0 Kilowattstunden passt eine Anlage mit 10 kWp Leistung gut." },
    { url: "/solaranlage/einspeiseverguetung-photovoltaik-2026", anchor: "Einspeisevergütung", context: "Seit Februar 2025 kann die Einspeisevergütung bei Netzüberlastung" },
    { url: "/solaranlage/ost-west-oder-sueddach-solaranlage", anchor: "Ost-West-Belegungen", context: "g ist der einfachste Fall. Flachdächer, Ost-West-Belegungen oder Gauben erhöhen" },
    { url: "/solaranlage/photovoltaik-steuern", anchor: "0 % Mehrwertsteuer", context: "0 % Mehrwertsteuer auf Module, Wechsel" },
  ],
  'kosten-solaranlage-mit-speicher-einfamilienhaus': [
    { url: "/solaranlage/kosten-10-kwp-solaranlage-mit-speicher", anchor: "10-kWp-Anlage", context: "Nicht jede 10-kWp-Anlage kostet gleich viel." },
    { url: "/solaranlage/pv-anlage-planen", anchor: "saubere Planung", context: "t oft teurer und ungeschickter als eine saubere Planung von Anfang an." },
    { url: "/solaranlage/pv-verschattung-leistungsoptimierer-stringdesign", anchor: "Verschattung", context: "Verschattung durch Gauben, Kamin" },
    { url: "/solaranlage/solaranlage-mit-oder-ohne-speicher", anchor: "ohne Speicher", context: "kann eine kleine bis mittlere PV-Anlage ohne Speicher grob im unteren bis" },
  ],
  'lastgang-15-minuten-werte-verstehen': [
    { url: "/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile", anchor: "Smart-Meter-Daten", context: "Wenn du wissen möchtest, wie du solche Smart-Meter-Daten selbst einsehen kan" },
    { url: "/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich", anchor: "dynamische Tarife", context: "annt war, zunehmend auch für Haushalte, dynamische Tarife und steuerbare Verb" },
  ],
  'lastmanagement-wallbox-hausanschluss-ueberlastung': [
    { url: "/wallbox/zwei-e-autos-zuhause-laden-wallboxen-hausanschluss", anchor: "Zwei Wallboxen", context: "leiben rechnerisch 12 kW für das Laden. Zwei Wallboxen können diese Leistu" },
    { url: "/wallbox/wallbox-mit-pv-laden", anchor: "PV-Laden", context: "PV-Laden optimiert Herkunft " },
    { url: "/solaranlage/zaehlerschrank-pv-waermepumpe-smart-meter", anchor: "Zählerplatz", context: ". Leitungen, Sicherungen, Selektivität, Zählerplatz und Unterverteilung" },
  ],
  'lastspitzenkappung-stromspeicher-gewerbe': [
    { url: "/stromspeicher/gewerbespeicher-richtig-auslegen-lastgang-kw-kwh", anchor: "Gewerbespeichers", context: "Die eigentliche Stärke eines Gewerbespeichers liegt nicht in eine" },
    { url: "/strom-energiemanagement/lastgang-15-minuten-werte-verstehen", anchor: "Lastgang-Historie", context: " nutzt Lastgang-Historie, Produktionspläne u" },
    { url: "/stromspeicher/multi-use-stromspeicher", anchor: "Multi-Use-Konfiguration", context: " € Peak-Shaving-Ersparnis können in der Multi-Use-Konfiguration leicht 15.000 bis 2" },
    { url: "/stromspeicher/stromspeicher-kapazitaet-leistung-kw-kwh", anchor: "Entladeleistung", context: "In der Praxis legt man die Entladeleistung etwas größer aus al" },
  ],
  'lohnt-sich-ein-stromspeicher': [
    { url: "/strom-energiemanagement/eigenverbrauch-optimieren-100-prozent-autarkie", anchor: "Eigenverbrauchsquote", context: "drei Faktoren zu, kann der Speicher die Eigenverbrauchsquote von typischen 25–35" },
    { url: "/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich", anchor: "dynamischen Stromtarif", context: " Szenario ist die Kombination mit einem dynamischen Stromtarif, bei dem zu günstig" },
  ],
  'mieterstrom-gemeinschaftliche-gebaeudeversorgung-2026': [
    { url: "/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile", anchor: "Smart-Meter-Rollout", context: "t und gemessen wird. Anzahl der Zähler, Smart-Meter-Rollout, PV-Erzeugungsmessu" },
    { url: "/solaranlage/pv-gewerbe-wirtschaftlichkeit-beispielrechnung", anchor: "Wirtschaftlichkeitsrechnung", context: "ann auch der Mieterstromzuschlag in die Wirtschaftlichkeitsrechnung einfließen." },
  ],
  'monoblock-oder-split-waermepumpe': [
    { url: "/waermepumpe/welche-waermepumpe-fuer-mein-haus", anchor: "Luft-Wasser-Wärmepumpe", context: "Eine Luft-Wasser-Wärmepumpe entzieht der Außenl" },
    { url: "/waermepumpe/waermepumpe-richtig-aufstellen-standort-schall", anchor: "Aufstellort", context: "Gerät passt bei meiner Heizlast, meinem Aufstellort, meinem Heizsystem " },
    { url: "/waermepumpe/waermepumpe-abtauung-vereisung-kondensat", anchor: "Abtauverhalten", context: "eratur, Hydraulik, Warmwasserstrategie, Abtauverhalten und Qualität der In" },
    { url: "/waermepumpe/wie-funktioniert-eine-waermepumpe", anchor: "Kältekreis", context: "Der Kältekreis ist dabei werkseiti" },
  ],
  'multi-use-stromspeicher': [
    { url: "/stromspeicher/notstrom-oder-ersatzstrom", anchor: "Notstrom-Reserve", context: "Notstrom-Reserve. Eine Mindestladung" },
    { url: "/stromspeicher/stromspeicher-nachruesten", anchor: "nachrüsten", context: "Multi-Use lässt sich später nachrüsten – aber meist deutli" },
  ],
  'negative-strompreise-2026-pv-speicher-eauto': [
    { url: "/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich", anchor: "dynamischem Tarif", context: "stärker zeitabhängig. Für Haushalte mit dynamischem Tarif bedeutet es: Günsti" },
    { url: "/strom-energiemanagement/strommarkt-einfach-erklaert-boersenstrompreis-netzentgelt-strompreis", anchor: "Börsenpreis", context: "enig Nachfrage vorhanden ist, sinkt der Börsenpreis. Wird das Überangeb" },
    { url: "/strom-energiemanagement/eigenverbrauch-optimieren-100-prozent-autarkie", anchor: "Eigenverbrauch", context: "Eigenverbrauch genau dann erhöhen," },
  ],
  'notstrom-oder-ersatzstrom': [
    { url: "/solaranlage/pv-anlage-bei-stromausfall-solarstrom-reicht-nicht", anchor: "Versorgung bei Stromausfall", context: "Wer sich mit Versorgung bei Stromausfall beschäftigt, sollte" },
  ],
  'null-euro-anzahlung-photovoltaik': [
    { url: "/solaranlage/solarteur-insolvent-was-tun", anchor: "Insolvenzwelle", context: "Die Insolvenzwelle in der Solarbranche" },
  ],
  'offene-schnittstellen-pv-speicher-hems-hersteller-app': [
    { url: "/strom-energiemanagement/cloud-ems-vs-lokales-ems-energiedaten", anchor: "Cloud-Dienstes", context: "bühren und das Verhalten bei Ende eines Cloud-Dienstes transparent genannt" },
    { url: "/strom-energiemanagement/hems-home-energy-management-system-hersteller-app", anchor: "HEMS", context: "Eine App richtet sich an Menschen. Ein HEMS braucht maschinenle" },
  ],
  'ost-west-oder-sueddach-solaranlage': [
    { url: "/solaranlage/pv-verschattung-leistungsoptimierer-stringdesign", anchor: "Verschattung", context: "mmelsrichtung entscheidet, sondern auch Verschattung, nutzbare Fläche, V" },
    { url: "/solaranlage/ab-wieviel-qm-lohnt-sich-eine-solaranlage", anchor: "Dachfläche", context: "m die Mittagszeit gewünscht ist und die Dachfläche möglichst ertragsst" },
    { url: "/solaranlage/pv-anlage-planen", anchor: "saubere Planung", context: "tische Ertragsmaximierung, sondern eine saubere Planung, die Dachfläche, Ve" },
  ],
  'paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen': [
    { url: "/strom-energiemanagement/zeitvariable-netzentgelte-paragraph-14a-modul-3", anchor: "Netzentgelt", context: "t der Betreiber eine Vergünstigung beim Netzentgelt. Hier gibt es zwei " },
    { url: "/strom-energiemanagement/steuerbox-paragraf-14a-smart-meter-hems", anchor: "Steuerbox", context: "2 kW Anschlussleistung müssen über eine Steuerbox kommunikationsfähig" },
    { url: "/waermepumpe/14a-enwg-waermepumpe-messkonzept-8", anchor: "Wärmepumpen", context: "ig drei Wallboxen mit 11 kW laden, zwei Wärmepumpen heizen und mehrere " },
    { url: "/stromspeicher/paragraf-14a-enwg-stromspeicher", anchor: "Speicher", context: "ine neue Wallbox, Wärmepumpe oder einen Speicher mit über 4,2 kW Lei" },
  ],
  'paragraf-14a-enwg-stromspeicher': [
    { url: "/wallbox/paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen", anchor: "§14a", context: "mischen Tarifen. Damit fallen sie unter §14a, sobald die Ladelei" },
    { url: "/strom-energiemanagement/zeitvariable-netzentgelte-paragraph-14a-modul-3", anchor: "Modul 3", context: "ig – günstiger in lastschwachen Zeiten. Modul 3 wird voraussichtlic" },
    { url: "/stromspeicher/notstrom-oder-ersatzstrom", anchor: "Notstromfunktion", context: "are Verbrauchseinrichtung. Das schließt Notstromfunktion und Eigenverbrauchs" },
    { url: "/stromspeicher/stromspeicher-nachruesten", anchor: "nachgerüstet", context: "ibt es Bestandsschutz. Sie müssen nicht nachgerüstet werden, können aber" },
  ],
  'photovoltaik-foerderung': [
    { url: "/solaranlage/einspeiseverguetung-photovoltaik-2026", anchor: "Einspeisevergütung", context: "kulär, aber solide: Steuerbefreiung und Einspeisevergütung tragen die Wirtscha" },
    { url: "/solaranlage/photovoltaik-steuern", anchor: "Nullsteuersatz", context: "– meist wird dabei der ohnehin geltende Nullsteuersatz als exklusiver Raba" },
    { url: "/solaranlage/null-euro-anzahlung-photovoltaik", anchor: "0-€-Anzahlung", context: "t „billiger\". Wie sich Finanzierung und 0-€-Anzahlung kombinieren lassen," },
  ],
  'photovoltaik-steuern': [
    { url: "/solaranlage/pv-anlage-anmelden-marktstammdatenregister", anchor: "Marktstammdatenregister", context: "heißt nicht meldefrei: Die Anmeldung im Marktstammdatenregister und beim Netzbetrei" },
    { url: "/solaranlage/einspeiseverguetung-photovoltaik-2026", anchor: "Einspeisevergütung", context: "Betrieb kleiner PV-Anlagen steuerfrei – Einspeisevergütung wie Eigenverbrauch." },
    { url: "/solaranlage/amortisation-pv-anlage", anchor: "Amortisation", context: "nkret auswirkt, zeigt unser Beitrag zur Amortisation der PV-Anlage." },
    { url: "/solaranlage/mieterstrom-gemeinschaftliche-gebaeudeversorgung-2026", anchor: "Mehrfamilienhäusern", context: "Grenze einheitlich je Einheit – auch in Mehrfamilienhäusern." },
  ],
  'photovoltaik-testsieger': [
    { url: "/solaranlage/null-euro-anzahlung-photovoltaik", anchor: "Anzahlung", context: " Für Kunden mit geleisteter Anzahlung oder laufender Gewä" },
  ],
  'pid-hotspots-mikrorisse-delamination-pv-module': [
    { url: "/repowering/pv-anlage-fehlerdiagnose-stringmessung-isolation-hotspots", anchor: "Stringvergleich", context: " Minderertrag allein beweist PID nicht; Stringvergleich und geeignete Prüfv" },
    { url: "/solaranlage/solarmodule-40-jahre-garantie-produkt-leistung", anchor: "Garantiebedingungen", context: "icherheit, elektrische Messung, Ertrag, Garantiebedingungen und die Entwicklung" },
    { url: "/repowering/alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie", anchor: "elektrische Messung", context: "prüfung, Ertragsdaten, Thermografie und elektrische Messung." },
  ],
  'pufferspeicher-waermepumpe': [
    { url: "/waermepumpe/waermepumpe-abtauung-vereisung-kondensat", anchor: "Abtauvorgangs", context: "ser-Wärmepumpen benötigen während eines Abtauvorgangs kurzfristig Wärme. " },
    { url: "/waermepumpe/hydraulischer-abgleich-waermepumpe", anchor: "Hydraulik", context: "erstelleranforderungen und die konkrete Hydraulik. Eine pauschale Aus" },
    { url: "/waermepumpe/waermepumpe-mit-heizkoerpern", anchor: "Heizkörperanlagen", context: "Bei Heizkörperanlagen ist das aktive Wass" },
    { url: "/waermepumpe/waermepumpe-richtig-einstellen", anchor: "Heizkurve", context: ". Wenn die Anlage viel zu groß ist, die Heizkurve zu hoch steht oder " },
  ],
  'pv-anlage-abregeln-strom-nutzen-hems-einspeisebegrenzung': [
    { url: "/strom-energiemanagement/solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter", anchor: "Einspeisebegrenzung", context: "Bei einer dynamischen Einspeisebegrenzung misst ein Zähler de" },
    { url: "/strom-energiemanagement/hems-home-energy-management-system-hersteller-app", anchor: "HEMS", context: "m nicht automatisch verloren gehen. Ein HEMS kann Speicher, Wall" },
    { url: "/strom-energiemanagement/hems-wetterprognose-strompreis-ladezustand", anchor: "Wetterprognose", context: "zen, Mindestlaufzeiten, Abfahrtszeiten, Wetterprognose und die erwartete D" },
    { url: "/strom-energiemanagement/cloud-ems-vs-lokales-ems-energiedaten", anchor: "Cloud-Dienste", context: "Komponenten lokal kommunizieren, welche Cloud-Dienste benötigt werden und" },
  ],
  'pv-anlage-bei-stromausfall-solarstrom-reicht-nicht': [
    { url: "/stromspeicher/notstrom-oder-ersatzstrom", anchor: "Ersatzstromfunktion", context: "n Speicher allein garantiert noch keine Ersatzstromfunktion." },
    { url: "/stromspeicher/stromspeicher-kapazitaet-leistung-kw-kwh", anchor: "Entladeleistung", context: "sch jede Last versorgen. Seine maximale Entladeleistung und die Ersatzstrom" },
  ],
  'pv-anlage-dachsanierung-demontage-repowering': [
    { url: "/solaranlage/solardachpflicht-nrw-2026", anchor: "Dachsanierung", context: ". Bei einer Dachsanierung kommt zusätzlich di" },
    { url: "/repowering/alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module", anchor: "neue Wechselrichter", context: "Gleichzeitig können neue Wechselrichter, Speicher, Ersatzst" },
    { url: "/repowering/pv-anlage-rueckbau-montage", anchor: "Rückbau", context: "Vor dem Rückbau gehören Modulbelegu" },
    { url: "/repowering/pid-hotspots-mikrorisse-delamination-pv-module", anchor: "PID", context: "jüngere Anlage durch schlechte Montage, PID, beschädigte Steckv" },
  ],
  'pv-anlage-fehlerdiagnose-stringmessung-isolation-hotspots': [
    { url: "/repowering/alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie", anchor: "Kennlinien", context: "triebsdaten, DC-Spannungen, Ströme oder Kennlinien betrachtet. Bei grö" },
    { url: "/repowering/pid-hotspots-mikrorisse-delamination-pv-module", anchor: "Hotspots", context: "loßem Auge nicht erkennbar sind. Lokale Hotspots, ungewöhnliche Temp" },
  ],
  'pv-anlage-liefert-weniger-als-berechnet-abweichung-normal': [
    { url: "/solaranlage/pv-verschattung-leistungsoptimierer-stringdesign", anchor: "Verschattung", context: "ein Produktionsversprechen. Wetterjahr, Verschattung, Temperatur, Abrege" },
    { url: "/solaranlage/wie-viel-strom-erzeugt-eine-10-kwp-solaranlage", anchor: "10-kWp-Anlage", context: "Eine 10-kWp-Anlage muss deshalb weder " },
    { url: "/solaranlage/ost-west-oder-sueddach-solaranlage", anchor: "Ausrichtung", context: "mulation kombiniert Einstrahlungsdaten, Ausrichtung, Neigung und angeno" },
  ],
  'pv-anlage-planen': [
    { url: "/solaranlage/wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein", anchor: "passende Größe", context: "Die passende Größe ergibt sich nicht a" },
    { url: "/solaranlage/ost-west-oder-sueddach-solaranlage", anchor: "Ost-West-Dächer", context: "fern meist die höchsten Spitzenerträge. Ost-West-Dächer können trotzdem seh" },
    { url: "/solaranlage/zaehlerschrank-pv-waermepumpe-smart-meter", anchor: "Zählerschrank", context: "ung gehört nicht nur das Dach. Auch der Zählerschrank, Leitungswege, Absi" },
    { url: "/solaranlage/ab-wieviel-qm-lohnt-sich-eine-solaranlage", anchor: "Dachfläche", context: "ftlichkeit beginnt mit einer geeigneten Dachfläche. Ideal ist eine mög" },
  ],
  'pv-anlage-rueckbau-montage': [
    { url: "/repowering/pv-anlage-dachsanierung-demontage-repowering", anchor: "Dachsanierung", context: "ere Befunde fließen in die Entscheidung Dachsanierung ja/nein ein." },
    { url: "/repowering/pv-module-entsorgen-recycling", anchor: "Entsorgung", context: "t nach Weiterverwendung, Verwertung und Entsorgung." },
    { url: "/repowering/repowering-kosten", anchor: "Repowering-Kosten", context: "nieren, Anlage wieder rauf – die halben Repowering-Kosten noch einmal." },
  ],
  'pv-gewerbe-wirtschaftlichkeit-beispielrechnung': [
    { url: "/strom-energiemanagement/lastgang-15-minuten-werte-verstehen", anchor: "Lastganganalyse", context: "eine konkrete Lastganganalyse statt Schätzung der" },
    { url: "/solaranlage/ab-wieviel-qm-lohnt-sich-eine-solaranlage", anchor: "Dachfläche", context: "Anlage geplant. Die Größe ist sauber an Dachfläche und Verbrauch angep" },
    { url: "/solaranlage/amortisation-pv-anlage", anchor: "Amortisation", context: "(0,5 % pro Jahr) liegt die tatsächliche Amortisation eher bei " },
  ],
  'pv-landwirtschaft-stalldach': [
    { url: "/strom-energiemanagement/lastgang-15-minuten-werte-verstehen", anchor: "Lastprofile", context: " mit Asbest, wie unterscheiden sich die Lastprofile, was ist mit der Pa" },
    { url: "/solaranlage/amortisation-pv-anlage", anchor: "amortisiert", context: "ch wenn die reine PV-Investition länger amortisiert. Im Niederrhein und" },
  ],
  'pv-module-entsorgen-recycling': [
    { url: "/repowering/pv-anlage-dachsanierung-demontage-repowering", anchor: "Demontage", context: "Module, die beim Diagnose-Check und der Demontage unbeschädigt bleibe" },
  ],
  'pv-ueberschussladen-funktioniert-nicht-ursachen': [
    { url: "/wallbox/wallbox-phasenumschaltung-pv-ueberschussladen", anchor: "Phasenumschaltung", context: "egt es oft an Mindestleistung, Messung, Phasenumschaltung, Kommunikation oder" },
  ],
  'pv-verschattung-leistungsoptimierer-stringdesign': [
    { url: "/solaranlage/ost-west-oder-sueddach-solaranlage", anchor: "Ost-West-Dächern", context: "ind mehrere unabhängige MPP-Tracker bei Ost-West-Dächern, Gauben, Teilversch" },
    { url: "/solaranlage/ab-wieviel-qm-lohnt-sich-eine-solaranlage", anchor: "Dachfläche", context: "ftlicher, eine dauerhaft problematische Dachfläche gar nicht oder ande" },
    { url: "/solaranlage/solaranlage-fuer-e-auto-auslegen", anchor: "E-Auto", context: "n Sommernachmittagen, wenn gleichzeitig E-Auto, Wärmepumpe oder Sp" },
  ],
  'repowering-kosten': [
    { url: "/repowering/repowering-vs-neuanlage", anchor: "Neuanlage", context: "fernt liegt. Der Unterschied: Bei einer Neuanlage bekommt man ein dur" },
    { url: "/repowering/alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module", anchor: "Wechselrichtertausch", context: "Ein reiner Wechselrichtertausch ist eine überschaub" },
    { url: "/solaranlage/zaehlerschrank-pv-waermepumpe-smart-meter", anchor: "Zählerschrank", context: "lektrik? Und in welchem Zustand ist der Zählerschrank?" },
  ],
  'repowering-solaranlage': [
    { url: "/repowering/repowering-vs-neuanlage", anchor: "Neuanlage", context: " den Modultausch, andere eine komplette Neuanlage. " },
    { url: "/repowering/alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module", anchor: "Wechselrichtertausch", context: "Ein reiner Wechselrichtertausch bewegt sich in eine" },
    { url: "/repowering/komponenten-tausch-pv-anlage", anchor: "Komponententausch", context: "as nun ein Weiterbetrieb, ein gezielter Komponententausch oder ein vollständi" },
    { url: "/repowering/pv-anlage-dachsanierung-demontage-repowering", anchor: "Dachsanierung", context: "Auch eine anstehende Dachsanierung spielt hinein. Wenn" },
  ],
  'repowering-vs-neuanlage': [
    { url: "/repowering/alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module", anchor: "Wechselrichtertausch", context: "Denn zwischen einem reinen Wechselrichtertausch und einem vollständ" },
  ],
  'smart-meter-2026-pv-kosten-pflicht-vorteile': [
    { url: "/strom-energiemanagement/smart-meter-auslesen-verbrauchsdaten-trudi", anchor: "Messdaten", context: "chtig. Denn vom Zähler hängt ab, welche Messdaten verfügbar sind, ob " },
    { url: "/solaranlage/zaehlerschrank-pv-waermepumpe-smart-meter", anchor: "Zählerschrank", context: "tisch sofort ein Smart-Meter-Gateway im Zählerschrank hat." },
  ],
  'smart-meter-auslesen-verbrauchsdaten-trudi': [
    { url: "/strom-energiemanagement/westnetz-smart-meter-steuerbox-2026", anchor: "Westnetz-Messstellenbetrieb", context: "Für Kunden im Westnetz-Messstellenbetrieb gibt es dafür eine " },
    { url: "/strom-energiemanagement/lastgang-15-minuten-werte-verstehen", anchor: "Viertelstundenwerten", context: "ntelligenten Messsystem wird häufig von Viertelstundenwerten gesprochen. Gemeint" },
    { url: "/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich", anchor: "dynamische Stromtarife", context: "Das ist für dynamische Stromtarife, Bilanzierung und d" },
  ],
  'solaranlage-fuer-e-auto-auslegen': [
    { url: "/solaranlage/ab-wieviel-qm-lohnt-sich-eine-solaranlage", anchor: "nutzbare Dachfläche", context: " zu Hause geladen werden soll, wird die nutzbare Dachfläche noch wichtiger. Den" },
    { url: "/solaranlage/pv-anlage-planen", anchor: "gute Planung", context: "Genau dort trennt sich gute Planung von pauschalen Stan" },
    { url: "/solaranlage/wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein", anchor: "passende Größe", context: "Die passende Größe ergibt sich nicht n" },
    { url: "/solaranlage/zaehlerschrank-pv-waermepumpe-smart-meter", anchor: "Zählerschrank", context: "ch Wallbox, Leitungsweg, Hausanschluss, Zählerschrank und mögliche Lastsp" },
  ],
  'solaranlage-fuer-waermepumpe-auslegen': [
    { url: "/solaranlage/ab-wieviel-qm-lohnt-sich-eine-solaranlage", anchor: "nutzbare Dachfläche", context: "Gerade mit Wärmepumpe ist die nutzbare Dachfläche besonders wichtig. " },
    { url: "/solaranlage/ost-west-oder-sueddach-solaranlage", anchor: "Ost-West-Belegungen", context: "ist nicht die einzige sinnvolle Lösung. Ost-West-Belegungen können gerade dann " },
    { url: "/solaranlage/pv-verschattung-leistungsoptimierer-stringdesign", anchor: "Verschattung", context: "l Fläche realistisch nutzbar ist und ob Verschattung den Ertrag spürbar " },
    { url: "/solaranlage/solaranlage-fuer-e-auto-auslegen", anchor: "E-Auto", context: " und eventuell später noch Wallbox oder E-Auto dazukommen." },
  ],
  'solaranlage-gewerbedach': [
    { url: "/solaranlage/pv-gewerbe-wirtschaftlichkeit-beispielrechnung", anchor: "Wirtschaftlichkeitsrechnung", context: "Damit verschiebt sich die ganze Wirtschaftlichkeitsrechnung. Eigenverbrauch ist" },
    { url: "/solaranlage/pv-landwirtschaft-stalldach", anchor: "Landwirtschaft", context: "n neidisch macht: Im Gewerbe und in der Landwirtschaft gibt es steuerliche" },
    { url: "/strom-energiemanagement/lastgang-15-minuten-werte-verstehen", anchor: "Lastgangdaten", context: "Aus den Lastgangdaten des Netzbetreibers " },
    { url: "/solaranlage/amortisation-pv-anlage", anchor: "Amortisationszeit", context: "hoher Eigenverbrauchsquote verkürzt die Amortisationszeit im Gewerbe deutlich" },
  ],
  'solaranlage-mit-oder-ohne-speicher': [
    { url: "/solaranlage/kosten-solaranlage-mit-speicher-einfamilienhaus", anchor: "mit Speicher", context: "ach: Sollte man eine Solaranlage direkt mit Speicher bauen oder erstmal " },
  ],
  'solardachpflicht-nrw-2026': [
    { url: "/repowering/pv-anlage-dachsanierung-demontage-repowering", anchor: "Dachsanierung", context: "Wer ohnehin eine Dachsanierung plant, sollte die P" },
    { url: "/solaranlage/ab-wieviel-qm-lohnt-sich-eine-solaranlage", anchor: "Dachfläche", context: " (im Bestand, im Neubau auf die gesamte Dachfläche bezogen). „Geeignet" },
    { url: "/solaranlage/solaranlage-fuer-e-auto-auslegen", anchor: "E-Auto", context: "achfläche, Zukunftsbedarfe (Wärmepumpe, E-Auto) und das passende S" },
  ],
  'solarmodule-40-jahre-garantie-produkt-leistung': [
    { url: "/solaranlage/pv-verschattung-leistungsoptimierer-stringdesign", anchor: "Verschattung", context: "t muss außerdem sauber gemessen werden. Verschattung, Verschmutzung, Tem" },
  ],
  'solarmodule-dach-voll-belegen-dachflaeche-freilassen': [
    { url: "/strom-energiemanagement/eigenverbrauch-optimieren-100-prozent-autarkie", anchor: "Autarkie", context: "t mehr eigener Solarstrom genutzt wird. Autarkie, Gesamtertrag und K" },
    { url: "/solaranlage/ab-wieviel-qm-lohnt-sich-eine-solaranlage", anchor: "Dachfläche", context: "Der nächste sinnvolle Schritt: Nutzbare Dachfläche vollständig vermess" },
    { url: "/solaranlage/pv-verschattung-leistungsoptimierer-stringdesign", anchor: "Verschattung", context: "rtungswege, Randabstände, Entwässerung, Verschattung und statische Berei" },
    { url: "/solaranlage/solaranlage-fuer-e-auto-auslegen", anchor: "E-Auto", context: " und schafft Reserve für Wärmepumpe und E-Auto. Trotzdem zählen Da" },
  ],
  'solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter': [
    { url: "/strom-energiemanagement/pv-anlage-abregeln-strom-nutzen-hems-einspeisebegrenzung", anchor: "Abregelung", context: "aufnehmen, entsteht oft überhaupt keine Abregelung. Wie groß der reale" },
    { url: "/solaranlage/eeg-2027-dach-pv-unter-25-kw", anchor: "Direktvermarktung", context: "V-Anlagen. Bei größeren Gewerbeanlagen, Direktvermarktung, Mieterstrom oder S" },
  ],
  'solarteur-insolvent-was-tun': [
    { url: "/solaranlage/garantie-vs-gewaehrleistung-pv-anlage", anchor: "Installateurs-Gewährleistung", context: " die Anlage einen Mangel hat, der unter Installateurs-Gewährleistung gefallen wäre, muss" },
    { url: "/solaranlage/solarmodule-40-jahre-garantie-produkt-leistung", anchor: "Modul-Leistungsgarantie", context: "duktgarantie (typisch 12 bis 25 Jahre), Modul-Leistungsgarantie (25 bis 30 Jahre), " },
    { url: "/solaranlage/wer-darf-photovoltaikanlagen-installieren", anchor: "Meisterbetrieb-Status", context: "t gegangen), aber lange Firmenhistorie, Meisterbetrieb-Status, Bonitätsauskunft u" },
  ],
  'speicherwirkungsgrad-verluste-geladen-nutzbar': [
    { url: "/stromspeicher/batteriezellen-stromspeicher-zellspannung-temperatur-balancing", anchor: "Batteriemanagement", context: "Zellinnenwiderstand, Batteriemanagement, Wechselrichter, Le" },
  ],
  'steuerbox-paragraf-14a-smart-meter-hems': [
    { url: "/wallbox/paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen", anchor: "§ 14a EnWG", context: "Seit § 14a EnWG im Alltag angekomme" },
    { url: "/strom-energiemanagement/cloud-ems-vs-lokales-ems-energiedaten", anchor: "lokales Energiemanagement", context: " Meter, sichere Steuerkommunikation und lokales Energiemanagement zusammen. Die beste" },
    { url: "/strom-energiemanagement/offene-schnittstellen-pv-speicher-hems-hersteller-app", anchor: "Schnittstellen", context: "ngsweise Leistungsgrenzen an definierte Schnittstellen übergeben." },
  ],
  'stromspeicher-aufstellort-keller-garage-brandschutz': [
    { url: "/stromspeicher/stromspeicher-kapazitaet-leistung-kw-kwh", anchor: "Ladeleistung", context: "te. Bei niedrigen Temperaturen kann die Ladeleistung begrenzt werden; ho" },
  ],
  'stromspeicher-aus-netz-laden-dynamisch-sinnvoll': [
    { url: "/stromspeicher/speicherwirkungsgrad-verluste-geladen-nutzbar", anchor: "Wirkungsgradrechnung", context: "Die reine Wirkungsgradrechnung sagt nur, ob nach d" },
    { url: "/stromspeicher/paragraf-14a-enwg-stromspeicher", anchor: "§ 14a", context: "rden: das zeitvariable Netzentgelt nach § 14a Modul 3." },
  ],
  'stromspeicher-foerderung-nrw': [
    { url: "/solaranlage/photovoltaik-foerderung", anchor: "Förderprogramme", context: " kommunaler Ebene gibt es in NRW einige Förderprogramme. Sie sind aber sehr" },
    { url: "/solaranlage/photovoltaik-steuern", anchor: "0 % USt-Vorteil", context: "desebene gibt es den KfW-Kredit und den 0 % USt-Vorteil – beides nutzbar, b" },
    { url: "/stromspeicher/stromspeicher-nachruesten", anchor: "Nachrüstung", context: "ien – inklusive Stromspeicher, auch als Nachrüstung. Laufzeit 5 bis 30 " },
    { url: "/stromspeicher/lohnt-sich-ein-stromspeicher", anchor: "Wirtschaftlichkeit eines Speichers", context: "Die Wirtschaftlichkeit eines Speichers entscheidet sich an" },
  ],
  'stromspeicher-im-winter-oft-leer': [
    { url: "/stromspeicher/stromspeicher-kapazitaet-leistung-kw-kwh", anchor: "Entladeleistung", context: "en bei niedrigen Temperaturen Lade- und Entladeleistung reduzieren. Systeme" },
    { url: "/stromspeicher/batteriezellen-stromspeicher-zellspannung-temperatur-balancing", anchor: "Batteriemanagement", context: "Das Batteriemanagement schützt Zellen durc" },
    { url: "/stromspeicher/stromspeicher-aufstellort-keller-garage-brandschutz", anchor: "Aufstellort", context: "Der zulässige Aufstellort aus der Herstellerd" },
  ],
  'stromspeicher-kapazitaet-leistung-kw-kwh': [
    { url: "/stromspeicher/notstrom-oder-ersatzstrom", anchor: "Notstrom", context: "fekt passen. Sobald Wärmepumpe, E-Auto, Notstrom oder dynamische Tar" },
    { url: "/stromspeicher/batteriezellen-stromspeicher-zellspannung-temperatur-balancing", anchor: "Batteriezellen", context: "he C-Rate ist nicht automatisch besser. Batteriezellen, Wechselrichter und" },
    { url: "/stromspeicher/lastspitzenkappung-stromspeicher-gewerbe", anchor: "Lastspitzen", context: "ucher. Für die Leistung schauen wir auf Lastspitzen, gewünschte Backup-" },
  ],
  'stromspeicher-kosten': [
    { url: "/solaranlage/hybrid-wechselrichter-oder-getrennte-geraete", anchor: "Hybrid-Wechselrichter", context: "Ob der Speicher mit einem Hybrid-Wechselrichter (DC-gekoppelt) oder" },
    { url: "/stromspeicher/paragraf-14a-enwg-stromspeicher", anchor: "§14a", context: "Smart Meter Gateway, Steuerbarkeit nach §14a EnWG) nicht mehr er" },
    { url: "/stromspeicher/stromspeicher-aufstellort-keller-garage-brandschutz", anchor: "Aufstellort", context: " Diese hängen stark vom Bestand und vom Aufstellort ab – aber sie sind " },
  ],
  'stromspeicher-nachruesten': [
    { url: "/solaranlage/hybrid-wechselrichter-oder-getrennte-geraete", anchor: "Wechselrichter", context: "Wichtig ist vor allem, dass Wechselrichter, Verkabelung, Platz" },
  ],
  'stromspeicher-waermepumpe-nachts-versorgen': [
    { url: "/stromspeicher/notstrom-oder-ersatzstrom", anchor: "Ersatzstrombetrieb", context: "fferenz typischerweise aus dem Netz. Im Ersatzstrombetrieb kann die Leistungsg" },
    { url: "/stromspeicher/speicherwirkungsgrad-verluste-geladen-nutzbar", anchor: "Umwandlungsverluste", context: "In der Praxis kommen Umwandlungsverluste, Reservebereiche, W" },
  ],
  'typische-fehler-bei-solaranlagen': [
    { url: "/solaranlage/pv-anlage-planen", anchor: "gute Planung", context: " ist in Wirklichkeit gleichwertig. Eine gute Planung macht Unterschiede " },
    { url: "/solaranlage/zaehlerschrank-pv-waermepumpe-smart-meter", anchor: "Zählerschrank", context: "ant oder technische Randbedingungen wie Zählerschrank, Leitungswege und D" },
    { url: "/solaranlage/pv-verschattung-leistungsoptimierer-stringdesign", anchor: "Verschattung", context: " die technische Ausgangslage. Dachform, Verschattung, Belegung, Zustand " },
    { url: "/solaranlage/wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein", anchor: "Anlagengröße", context: "Wichtig ist vor allem, dass die Anlagengröße nicht isoliert, son" },
  ],
  'typische-fehler-beim-repowering': [
    { url: "/solaranlage/zaehlerschrank-pv-waermepumpe-smart-meter", anchor: "Zählerschrank", context: "Elektrik und Zählerschrank gehören zu den am h" },
    { url: "/repowering/repowering-vs-neuanlage", anchor: "Neuanlage", context: "Anders als bei einer Neuanlage auf einem leeren Da" },
    { url: "/repowering/alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module", anchor: "Wechselrichter tauschen", context: "en will, muss in diesen Fällen auch den Wechselrichter tauschen" },
    { url: "/repowering/pid-hotspots-mikrorisse-delamination-pv-module", anchor: "Hotspots", context: "richt. Dazu kommen mögliche Mikrorisse, Hotspots, verfärbte Zellen o" },
  ],
  'waermepumpe-abtauung-vereisung-kondensat': [
    { url: "/waermepumpe/hydraulischer-abgleich-waermepumpe", anchor: "Hydraulik", context: "olumenstrom, vorhandenes Wasservolumen, Hydraulik und Herstellervorga" },
    { url: "/waermepumpe/monoblock-oder-split-waermepumpe", anchor: "Außengeräts", context: "sitzer überrascht: Auf den Lamellen des Außengeräts bildet sich Reif od" },
    { url: "/waermepumpe/waermepumpe-richtig-einstellen", anchor: "Einstellungen", context: "er, Sensorik, Kältekreis, Hydraulik und Einstellungen in Ordnung sind." },
  ],
  'waermepumpe-foerderung-2026': [
    { url: "/waermepumpe/waermepumpe-kosten-einfamilienhaus", anchor: "Investitionsentscheidung", context: "te Regelung für 2027. Für eine konkrete Investitionsentscheidung sollte deshalb vor " },
    { url: "/waermepumpe/hydraulischer-abgleich-waermepumpe", anchor: "Hydraulik", context: "eratur, Effizienz, Schall, Aufstellort, Hydraulik und der langfristig" },
    { url: "/waermepumpe/heizlastberechnung-waermepumpe", anchor: "Heizlast", context: " Heizlast, Vorlauftemperatur, Heizflächen, Hydrau" },
    { url: "/waermepumpe/monoblock-oder-split-waermepumpe", anchor: "Kältemittel", context: " bestimmte Wärmequellen oder natürliche Kältemittel wurde zum 21. Juli " },
  ],
  'waermepumpe-im-altbau': [
    { url: "/waermepumpe/heizlastberechnung-waermepumpe", anchor: "Heizlast", context: "nt sind andere Fragen: Wie hoch ist die Heizlast? Welche Vorlauftemp" },
    { url: "/waermepumpe/waermepumpe-mit-heizkoerpern", anchor: "Heizkörper", context: "Auch vorhandene Heizkörper können funktioniere" },
    { url: "/waermepumpe/waermepumpe-vorlauftemperatur", anchor: "Vorlauftemperatur", context: "emen nicht vorbei: Heizlast, notwendige Vorlauftemperatur und vorhandene Heiz" },
  ],
  'waermepumpe-kosten-einfamilienhaus': [
    { url: "/waermepumpe/hydraulischer-abgleich-waermepumpe", anchor: "Hydraulik", context: ": also Montage, Hydraulik, Warmwasserlösung, " },
    { url: "/waermepumpe/waermepumpe-richtig-aufstellen-standort-schall", anchor: "Aufstellort", context: "ucht es punktuelle Anpassungen? Ist der Aufstellort einfach oder techni" },
    { url: "/waermepumpe/warmwasser-waermepumpe-temperatur-legionellenschutz-kosten", anchor: "Warmwasser", context: "s Gerät, Montage, Heizsystem, Elektrik, Warmwasser und den realen Anfo" },
  ],
  'waermepumpe-lebensdauer-wartung': [
    { url: "/waermepumpe/waermepumpe-taktet-staendig-starts-normal", anchor: "taktet", context: "ensionierte Wärmepumpe, die sehr häufig taktet, kann mechanisch st" },
    { url: "/waermepumpe/waermepumpe-abtauung-vereisung-kondensat", anchor: "Abtauen", context: "satablauf muss funktionieren, denn beim Abtauen entstehen je nach W" },
    { url: "/waermepumpe/heizstab-waermepumpe-sinnvoll-stromverbrauch", anchor: "Heizstab-Betriebsstunden", context: "Regelung, Heizstab-Betriebsstunden und auffällige Gerä" },
    { url: "/waermepumpe/jaz-wirkungsgrad", anchor: "Jahresarbeitszahl", context: "ch Stromverbrauch, erzeugte Wärmemenge, Jahresarbeitszahl, Verdichterstarts u" },
  ],
  'waermepumpe-mit-heizkoerpern': [
    { url: "/waermepumpe/waermepumpe-vorlauftemperatur", anchor: "Vorlauftemperatur", context: "zu grob. Entscheidend sind Wärmebedarf, Vorlauftemperatur, Größe der Heizkörp" },
    { url: "/waermepumpe/hydraulischer-abgleich-waermepumpe", anchor: "Hydraulik", context: " Vorlauftemperatur, Heizkörpergröße und Hydraulik." },
    { url: "/waermepumpe/waermepumpe-im-altbau", anchor: "Bestandsgebäude", context: " sauber plant, merkt oft schnell: Viele Bestandsgebäude mit Heizkörpern sin" },
    { url: "/waermepumpe/heizlastberechnung-waermepumpe", anchor: "Heizlast", context: "sein von Heizkörpern allein, sondern ob Heizlast, Vorlauftemperatur," },
  ],
  'waermepumpe-richtig-aufstellen-standort-schall': [
    { url: "/waermepumpe/waermepumpe-abtauung-vereisung-kondensat", anchor: "Abtauzyklen", context: "ndensat an. Im Winter kommt während der Abtauzyklen zusätzlich Wasser z" },
    { url: "/waermepumpe/heizlastberechnung-waermepumpe", anchor: "Heizlast", context: "Gerät, Schallleistung, Heizlast und Aufstellort geh" },
    { url: "/waermepumpe/welche-waermepumpe-fuer-mein-haus", anchor: "Luft-Wasser-Wärmepumpe", context: "Bei einer Luft-Wasser-Wärmepumpe steht draußen ein t" },
  ],
  'waermepumpe-richtig-einstellen': [
    { url: "/waermepumpe/waermepumpe-taktet-staendig-starts-normal", anchor: "Takten", context: "Takten bezeichnet Starts u" },
    { url: "/waermepumpe/heizstab-waermepumpe-sinnvoll-stromverbrauch", anchor: "Heizstab", context: " je nachdem, wie Heizkurve, Warmwasser, Heizstab und Hydraulik einge" },
    { url: "/waermepumpe/warmwasser-waermepumpe-temperatur-legionellenschutz-kosten", anchor: "Warmwassertemperatur", context: "st das energetisch anspruchsvoller. Die Warmwassertemperatur sollte deshalb nich" },
    { url: "/waermepumpe/waermepumpe-vorlauftemperatur", anchor: "Vorlauftemperatur", context: "e Heizkurve sagt der Wärmepumpe, welche Vorlauftemperatur sie bei welcher Auß" },
  ],
  'waermepumpe-schallpegel': [
    { url: "/waermepumpe/waermepumpe-richtig-aufstellen-standort-schall", anchor: "Aufstellort", context: "as Gerät selbst abgibt – unabhängig von Aufstellort und Entfernung. Das" },
    { url: "/waermepumpe/monoblock-oder-split-waermepumpe", anchor: "Außengerät", context: "m. Aber leise heißt nicht lautlos – ein Außengerät arbeitet mit Ventil" },
  ],
  'waermepumpe-stromverbrauch-berechnen': [
    { url: "/waermepumpe/jaz-wirkungsgrad", anchor: "Jahresarbeitszahl", context: "Die Jahresarbeitszahl, oft kurz JAZ genan" },
    { url: "/waermepumpe/waermepumpe-vorlauftemperatur", anchor: "Vorlauftemperatur", context: " Zusammenspiel aus Gebäude, Heizsystem, Vorlauftemperatur, Warmwasserbedarf u" },
    { url: "/waermepumpe/warmwasser-waermepumpe-temperatur-legionellenschutz-kosten", anchor: "Warmwasser", context: " nicht nur das Heizen, sondern auch das Warmwasser. Gerade bei mehrere" },
  ],
  'waermepumpe-taktet-staendig-starts-normal': [
    { url: "/waermepumpe/pufferspeicher-waermepumpe", anchor: "Pufferspeicheranschluss", context: "er, fehlender Volumenstrom, ungünstiger Pufferspeicheranschluss oder eine überdimen" },
    { url: "/waermepumpe/waermepumpe-richtig-einstellen", anchor: "Heizkurve", context: "Eine zu hohe Heizkurve, geringer Volumenst" },
    { url: "/waermepumpe/waermepumpe-lebensdauer-wartung", anchor: "Verschleiß", context: "e Verdichterstarts können Effizienz und Verschleiß beeinflussen. Entsc" },
    { url: "/waermepumpe/warmwasser-waermepumpe-temperatur-legionellenschutz-kosten", anchor: "Warmwasserzyklen", context: "d Rücklauf, Sollwerte, Volumenstrom und Warmwasserzyklen liefern den Kontext" },
  ],
  'waermepumpe-und-photovoltaik': [
    { url: "/solaranlage/solaranlage-fuer-waermepumpe-auslegen", anchor: "Wärmepumpe mit PV", context: "„Wärmepumpe mit PV – die perfekte Komb" },
    { url: "/waermepumpe/waermepumpe-stromverbrauch-berechnen", anchor: "Wärmepumpenstrom", context: " – denn jede vermiedene Kilowattstunde Wärmepumpenstrom ist wirtschaftlich " },
  ],
  'waermepumpe-vorlauftemperatur': [
    { url: "/waermepumpe/waermepumpe-mit-heizkoerpern", anchor: "Heizkörper", context: "ird. Dieses warme Wasser fließt also in Heizkörper oder Flächenheizung" },
    { url: "/waermepumpe/heizlastberechnung-waermepumpe", anchor: "Heizlast", context: "s kann an kleinen Heizflächen, an hoher Heizlast, an der Gebäudehüll" },
    { url: "/waermepumpe/hydraulischer-abgleich-waermepumpe", anchor: "Hydraulik", context: "uation. Fenster, Hülle, Heizflächen und Hydraulik sind oft wichtiger " },
  ],
  'waermepumpentarif-oder-dynamischer-stromtarif': [
    { url: "/waermepumpe/14a-enwg-waermepumpe-messkonzept-8", anchor: "separater Wärmepumpenzähler", context: "Ein separater Wärmepumpenzähler sollte nicht dazu f" },
    { url: "/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich", anchor: "dynamischer Stromtarif", context: "Ein dynamischer Stromtarif verändert vor allem" },
    { url: "/strom-energiemanagement/zeitvariable-netzentgelte-paragraph-14a-modul-3", anchor: "Netzentgelte", context: "nung wirken unter anderem Energiepreis, Netzentgelte, Messstellenbetrieb" },
    { url: "/waermepumpe/warmwasser-waermepumpe-temperatur-legionellenschutz-kosten", anchor: "Warmwasserspeicher", context: "n Gebäude, eine Fußbodenheizung und ein Warmwasserspeicher können begrenzt Wär" },
  ],
  'wallbox-11-oder-22-kw': [
    { url: "/wallbox/lastmanagement-wallbox-hausanschluss-ueberlastung", anchor: "Lastmanagement", context: "ergibt und ob später noch Photovoltaik, Lastmanagement oder ein zweites El" },
  ],
  'wallbox-anmelden-netzbetreiber': [
    { url: "/wallbox/paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen", anchor: "§14a EnWG", context: "rundsätzlich in das neue Regelwerk nach §14a EnWG eingeordnet werden." },
    { url: "/wallbox/wallbox-11-oder-22-kw", anchor: "22 kW", context: ", aber nicht genehmigungspflichtig. Bei 22 kW kommt zusätzlich di" },
  ],
  'wallbox-kosten': [
    { url: "/wallbox/wallbox-zu-hause-laden", anchor: "Laden zu Hause", context: "ssanter. Dann geht es nicht mehr nur um Laden zu Hause, sondern um das Lad" },
    { url: "/wallbox/wallbox-11-oder-22-kw", anchor: "22 kW", context: "In vielen Einfamilienhäusern bringt 22 kW im Alltag aber weni" },
    { url: "/solaranlage/zaehlerschrank-pv-waermepumpe-smart-meter", anchor: "Zählerschrank", context: "icherung, Anmeldung oder Anpassungen am Zählerschrank hinzukommen, versch" },
  ],
  'wallbox-mit-pv-laden': [
    { url: "/wallbox/wallbox-phasenumschaltung-pv-ueberschussladen", anchor: "Phasenumschaltung", context: "Genau deshalb ist die automatische Phasenumschaltung so interessant. Ohn" },
    { url: "/wallbox/pv-ueberschussladen-funktioniert-nicht-ursachen", anchor: "PV-Überschussladen", context: "PV-Überschussladen bedeutet, dass das " },
    { url: "/wallbox/wallbox-11-oder-22-kw", anchor: "11 kW", context: "gemeldet werden muss. Oberhalb von etwa 11 kW ist zusätzlich eine" },
  ],
  'wallbox-phasenumschaltung-pv-ueberschussladen': [
    { url: "/wallbox/pv-ueberschussladen-funktioniert-nicht-ursachen", anchor: "PV-Überschussladen", context: "teht eine technische Schwelle, die beim PV-Überschussladen entscheidend ist." },
  ],
  'wallbox-zu-hause-laden': [
    { url: "/wallbox/wallbox-11-oder-22-kw", anchor: "Ladegeschwindigkeit", context: "n. Entscheidend ist dabei nicht nur die Ladegeschwindigkeit, sondern vor allem " },
    { url: "/wallbox/wallbox-mit-pv-laden", anchor: "Solaranlage", context: "Gerade wenn zusätzlich eine Solaranlage vorhanden ist oder " },
    { url: "/wallbox/lastmanagement-wallbox-hausanschluss-ueberlastung", anchor: "Hausanschluss", context: "allbox passt automatisch zu jedem Haus. Hausanschluss, Leitungsweg, Absic" },
  ],
  'warmwasser-waermepumpe-temperatur-legionellenschutz-kosten': [
    { url: "/waermepumpe/heizstab-waermepumpe-sinnvoll-stromverbrauch", anchor: "Heizstabeinsatz", context: "rhub, Wärmeverlusten und gegebenenfalls Heizstabeinsatz. Eine feste Eurozah" },
    { url: "/waermepumpe/jaz-wirkungsgrad", anchor: "COP", context: "Benötigt die Wärmepumpe dafür bei einem COP von 3 etwa 0,8 kWh " },
    { url: "/waermepumpe/waermepumpe-vorlauftemperatur", anchor: "Vorlauftemperaturen", context: "ung arbeitet idealerweise mit niedrigen Vorlauftemperaturen. Warmwasser verlang" },
  ],
  'was-bringt-eine-solaranlage-im-winter': [
    { url: "/solaranlage/solaranlage-fuer-waermepumpe-auslegen", anchor: "Wärmepumpe", context: "Gerade bei Wärmepumpe oder hohem Strombed" },
    { url: "/solaranlage/wie-viel-strom-erzeugt-eine-10-kwp-solaranlage", anchor: "Ertrag", context: "h im Winter Strom. Allerdings liegt der Ertrag in den dunkleren Mo" },
  ],
  'welche-waermepumpe-fuer-mein-haus': [
    { url: "/waermepumpe/wie-funktioniert-eine-waermepumpe", anchor: "Kältekreis", context: "terschiede für Planung, Frostschutz und Kältekreis wichtig sind, erklä" },
    { url: "/waermepumpe/waermepumpe-richtig-aufstellen-standort-schall", anchor: "Außengerät", context: "ne Luft-Wasser-Wärmepumpe – die mit dem Außengerät, das aussieht wie e" },
  ],
  'wer-darf-photovoltaikanlagen-installieren': [
    { url: "/solaranlage/ab-wieviel-qm-lohnt-sich-eine-solaranlage", anchor: "Dachfläche", context: " muss geprüft werden, ob die vorhandene Dachfläche für die geplante An" },
  ],
  'westnetz-smart-meter-steuerbox-2026': [
    { url: "/strom-energiemanagement/cloud-ems-vs-lokales-ems-energiedaten", anchor: "Energiedaten", context: "verweist für die lokale Darstellung der Energiedaten über HAN ausdrückli" },
    { url: "/strom-energiemanagement/offene-schnittstellen-pv-speicher-hems-hersteller-app", anchor: "HAN-Schnittstelle", context: "mart-Meter-Gateway eine standardisierte HAN-Schnittstelle über RJ45, über die" },
  ],
  'wie-funktioniert-eine-waermepumpe': [
    { url: "/waermepumpe/welche-waermepumpe-fuer-mein-haus", anchor: "Wärmequelle", context: " – der Differenz zwischen Wärmequelle und Vorlauftemperat" },
    { url: "/waermepumpe/waermepumpe-vorlauftemperatur", anchor: "Vorlauftemperatur", context: "epumpe mit Heizkörpern\" und „Wärmepumpe Vorlauftemperatur erklärt\". Und dass " },
    { url: "/waermepumpe/monoblock-oder-split-waermepumpe", anchor: "Kältemittel", context: "on selbst hinein. Genau das leistet das Kältemittel." },
    { url: "/waermepumpe/heizlastberechnung-waermepumpe", anchor: "Heizlast", context: ": Heizlast rechnen statt schät" },
  ],
  'wie-gross-sollte-ein-stromspeicher-sein': [
    { url: "/stromspeicher/stromspeicher-kapazitaet-leistung-kw-kwh", anchor: "Kapazität in kWh", context: "algröße. Entscheidend ist nicht nur die Kapazität in kWh, sondern wie gut de" },
    { url: "/stromspeicher/stromspeicher-waermepumpe-nachts-versorgen", anchor: "Wärmepumpe", context: "annst und wie gut PV-Anlage, Verbrauch, Wärmepumpe, E-Auto und Alltag " },
    { url: "/strom-energiemanagement/eigenverbrauch-optimieren-100-prozent-autarkie", anchor: "überdimensionierte Variante", context: " System wirtschaftlich stärker als eine überdimensionierte Variante." },
  ],
  'wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein': [
    { url: "/solaranlage/ab-wieviel-qm-lohnt-sich-eine-solaranlage", anchor: "nutzbare Dachfläche", context: "Die nutzbare Dachfläche ist einer der wicht" },
    { url: "/solaranlage/ost-west-oder-sueddach-solaranlage", anchor: "Ausrichtung", context: "icht nur die reine Fläche, sondern auch Ausrichtung, Verschattung und d" },
    { url: "/solaranlage/zaehlerschrank-pv-waermepumpe-smart-meter", anchor: "Zählerschrank", context: "t nur die kWp-Zahl auf dem Papier. Auch Zählerschrank, Leitungswege, Wech" },
  ],
  'wie-lange-haelt-ein-stromspeicher': [
    { url: "/stromspeicher/batteriezellen-stromspeicher-zellspannung-temperatur-balancing", anchor: "Lade- und Entladeverhalten", context: "der Speicher belastet wird. Temperatur, Lade- und Entladeverhalten, Auslegung und Syst" },
  ],
  'wie-viel-strom-erzeugt-eine-10-kwp-solaranlage': [
    { url: "/solaranlage/kosten-10-kwp-solaranlage-mit-speicher", anchor: "10 kWp", context: "Eine 10 kWp Solaranlage ist für" },
    { url: "/solaranlage/ost-west-oder-sueddach-solaranlage", anchor: "Dachausrichtung", context: "Entscheidend sind unter anderem Dachausrichtung, Dachneigung, Stand" },
  ],
  'wie-viel-strom-erzeugt-eine-15-kwp-solaranlage': [
    { url: "/solaranlage/kosten-15-kwp-solaranlage-mit-speicher", anchor: "15 kWp", context: "Eine 15 kWp Solaranlage ist für" },
    { url: "/solaranlage/ab-wieviel-qm-lohnt-sich-eine-solaranlage", anchor: "Dachfläche", context: "age kann sehr viel Strom erzeugen, wenn Dachfläche und technische Ausg" },
    { url: "/solaranlage/ost-west-oder-sueddach-solaranlage", anchor: "Dachausrichtung", context: "ngt aber nicht nur von der Leistung ab. Dachausrichtung, Dachneigung, Versc" },
  ],
  'zaehlerschrank-pv-waermepumpe-smart-meter': [
    { url: "/solaranlage/wer-darf-photovoltaikanlagen-installieren", anchor: "Elektrofachbetrieb", context: "eckungen gehören selbstverständlich zum Elektrofachbetrieb." },
  ],
  'zeitvariable-netzentgelte-paragraph-14a-modul-3': [
    { url: "/wallbox/paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen", anchor: "§ 14a EnWG", context: "§ 14a EnWG regelt die netzorie" },
    { url: "/waermepumpe/14a-enwg-waermepumpe-messkonzept-8", anchor: "separater Wärmepumpenzähler", context: "haftlich wichtiger: Gemeinsamer Zähler, separater Wärmepumpenzähler oder mehrere Marktl" },
  ],
  'zwei-e-autos-zuhause-laden-wallboxen-hausanschluss': [
    { url: "/wallbox/lastmanagement-wallbox-hausanschluss-ueberlastung", anchor: "Lastmanagement", context: "istung. Meist entscheidet intelligentes Lastmanagement, wie verfügbare Lei" },
    { url: "/wallbox/wallbox-11-oder-22-kw", anchor: "22 kW", context: "euten nicht automatisch, dass dauerhaft 22 kW zusätzlich aus dem " },
  ],
}
