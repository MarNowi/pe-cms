// Alt-Texte für Titelbilder im Ratgeber (Collection `media`, Schlüssel: Dateiname).
//
// Der Alt-Text hängt am Bild, nicht am Artikel. Bilder, die in zwei Artikeln stecken, haben
// deshalb einen Alt-Text, der das Motiv beschreibt und für beide Artikel stimmt.
// Beschreibungen nach Sichtung der Bilder (siehe docs/ratgeber-redaktion-schritt-4.md).
// Bei Grafiken mit Überschrift steht der sichtbare Text in Anführungszeichen im Alt-Text.

export const MEDIA_ALT = {
  // pv-anlage-fehlerdiagnose-stringmessung-isolation-hotspots – vorher: Artikeltitel mit Doppelpunkt
  'Alte PV-Anlage prüfen statt blind tauschen.webp':
    'Techniker prüft eine PV-Anlage mit der Wärmebildkamera, daneben Grafiken zu Stringmessung, Isolation und Hotspots',
  // stromspeicher-kapazitaet-leistung-kw-kwh – vorher: Artikeltitel mit Leerzeichen am Ende
  'Stromspeicher kW oder kWh.webp': 'Heimspeicher im Einfamilienhaus mit Anzeige der Kapazität in kWh und der Leistung in kW',
  // smart-meter-2026-pv-kosten-pflicht-vorteile, waermepumpe-stromverbrauch-berechnen – vorher: „ein intelligentes Messsystem “
  'iMSys-Zaehler.webp': 'Intelligentes Messsystem: Stromzähler mit aufgesetztem Smart-Meter-Gateway',
  // 14a-enwg-waermepumpe-messkonzept-8 – vorher: „Meßkonzept Acht“
  'MK8.webp': 'Schema zu Messkonzept 8 (Kaskadenmessung) mit Zählern für Haushalt, Wärmepumpe und PV-Anlage',
  // wer-darf-photovoltaikanlagen-installieren – vorher: Slug
  'photovoltaik-handwerksrolle-olg.webp': 'Dachdecker montiert PV-Module, Elektriker arbeitet am Zählerschrank',
  // wallbox-anmelden-netzbetreiber, pv-anlage-anmelden-marktstammdatenregister – vorher: „Wallbox anmelden“
  'foerderung.webp': 'Anmeldung im Online-Portal des Netzbetreibers am Computer',
  // solaranlage-gewerbedach – vorher: „ein Bild einer Logistikhalle mit einer PV-Anlage“
  'logistikhalle.webp': 'Logistikhalle mit PV-Anlage auf dem Flachdach',
  // cloud-ems-vs-lokales-ems-energiedaten – vorher: „PEAK.Flex“
  'peakflex.webp': 'Live-Ansicht in PEAK.Flex mit Autarkie, PV-Erzeugung, Hausverbrauch, Speicherstand und Netzbezug',
  // null-euro-anzahlung-photovoltaik – vorher: „0€ Anzahlung für dein Energiesystem“
  '0€Anzahlung.webp': 'Goldenes 0-€-Zeichen vor Solarmodulen',
  // waermepumpe-schallpegel – vorher: Dateiname
  'Schallpegel-Waermepumpe.webp': 'Außengerät einer Luft-Wärmepumpe vor dem Haus mit Lautsprecher-Symbol',
  // waermepumpe-und-photovoltaik – vorher: Dateiname
  'PV-und-Waermepumpe.webp': 'Einfamilienhaus mit PV-Anlage auf dem Dach und Luft-Wärmepumpe im Garten',
  // paragraf-14a-enwg-stromspeicher, paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen – vorher: Dateiname
  '§14a_EnWG.webp': 'Paragrafenzeichen mit dem Schriftzug „14a EnWG“',
  // wallbox-mit-pv-laden – vorher: „Wallbox die ein Auto lädt“
  'Wallbox-Haus.webp': 'Wallbox an der Hauswand, die ein E-Auto lädt',
  // stromspeicher-nachruesten, notstrom-oder-ersatzstrom – vorher: „Stromspeicher nachrüsten“
  '02_Solarstrom_speichern.webp': 'Modernes Haus mit Solaranlage in der Abenddämmerung',
  // wie-viel-strom-erzeugt-eine-10/15-kwp-solaranlage – vorher: „Zählerschrank“ (Motiv passt weiterhin nicht zum Thema Ertrag)
  'privatkunden-2.webp': 'Geöffneter Zählerschrank, daneben der Wechselrichter einer PV-Anlage',

  // ─── Alt-Text war bisher der Artikeltitel (Schritt 4, Teil 2) ───────────────
  // pid-hotspots-mikrorisse-delamination-pv-module
  'pid-hotspots-mikrorisse-delamination-pv-module.webp': 'Nahaufnahme eines gealterten PV-Moduls mit Hotspot, Mikrorissen und Verfärbungen',
  // zwei-e-autos-zuhause-laden-wallboxen-hausanschluss
  'zwei-e-autos-zuhause-laden-wallboxen-hausanschluss.webp': 'Zwei Elektroautos laden an zwei Wallboxen vor der Garage eines Einfamilienhauses',
  // eeg-2027-dach-pv-unter-25-kw
  'EEG2027.webp': 'Grafik „EEG 2027“ zum Kabinettsentwurf für neue Dach-PV unter 25 kW, im Hintergrund ein Haus mit Solaranlage',
  // hems-wetterprognose-strompreis-ladezustand
  'Warum ein gutes HEMS in die Zukunft schaut.webp': 'Grafik „Warum ein gutes HEMS in die Zukunft schaut“: Smartphone mit HEMS-App vor einem Haus mit PV-Anlage, Speicher und E-Auto, dazu Wetterprognose, Strompreis und Ladezustand',
  // dienstwagen-zuhause-laden-wallbox-stromkosten-arbeitgeber
  'Dienstwagen zuhause laden.webp': 'Grafik „Dienstwagen zuhause laden“: Firmenwagen an der Wallbox vor dem Haus, dazu Hinweise zu MID-Zähler, PV-Strom und Erstattung',
  // stromspeicher-aufstellort-keller-garage-brandschutz
  'Wo darf ein Stromspeicher stehen.webp': 'Grafik „Wo darf ein Stromspeicher stehen?“: Stromspeicher im Hauswirtschaftsraum mit Hinweisen zu Temperatur, Feuchtigkeit, Brandschutz und Abständen',
  // waermepumpe-abtauung-vereisung-kondensat
  'Warum eine Wärmepumpe vereist.webp': 'Grafik „Warum eine Wärmepumpe vereist“: Techniker prüft mit dem Hausbesitzer das vereiste Außengerät einer Wärmepumpe im Winter',
  // pv-verschattung-leistungsoptimierer-stringdesign
  'Verschattung bei Photovoltaik.webp': 'Grafik „Verschattung bei Photovoltaik“: Haus mit teilverschatteter Solaranlage, Vergleich von Ertragsverlust und optimiertem Stringdesign',
  // gewerbespeicher-richtig-auslegen-lastgang-kw-kwh
  'Gewerbespeicher richtig auslegen.webp': 'Gewerbespeicher in Schrankbauweise vor einer Halle mit PV-Dach, eingeblendet eine Lastkurve',
  // dynamischer-stromtarif-paragraf-14a-netzentgelt
  'Dynamischer Stromtarif trifft § 14a.webp': 'Haus mit PV-Anlage, Stromspeicher, Wärmepumpe, Wallbox und Zählerschrank, verbunden durch eingeblendete Steuersignale',
  // pv-anlage-dachsanierung-demontage-repowering
  'PV-Anlage und Dachsanierung.webp': 'Schrägdach während der Sanierung: alte PV-Module teilweise abgebaut, daneben neu belegte Dachfläche',
  // wallbox-phasenumschaltung-pv-ueberschussladen
  '1-phasig oder 3-phasig laden.webp': 'Wallbox an der Hauswand lädt ein E-Auto, eingeblendete Linien stehen für die Stromphasen',
  // stromspeicher-waermepumpe-nachts-versorgen
  'Stromspeicher + Wärmepumpe.webp': 'Stromspeicher an der Hauswand und Luft-Wärmepumpe im Garten am Abend, verbunden durch eine leuchtende Linie',
  // waermepumpe-richtig-aufstellen-standort-schall
  'Wärmepumpe richtig aufstellen.webp': 'Außengerät einer Luft-Wärmepumpe auf einem Sockel neben der Hauswand',
  // solarmodule-40-jahre-garantie-produkt-leistung
  '40 Jahre Garantie auf Solarmodule.webp': 'Schrägdach mit schwarzen Solarmodulen im Abendlicht',
  // westnetz-smart-meter-steuerbox-2026, smart-meter-auslesen-verbrauchsdaten-trudi
  'Smart Meter auslesen So kommst du an Verbrauchsdaten.webp': 'Geöffneter Zählerschrank mit Smart Meter, die Verbrauchsdaten erscheinen auf einem Tablet',
  // lastgang-15-minuten-werte-verstehen
  'Lastgang verstehen.webp': 'Tablet zeigt den Tagesverlauf von PV-Erzeugung und Verbrauch, im Hintergrund ein Haus mit Solaranlage und Stromspeicher',
  // mieterstrom-gemeinschaftliche-gebaeudeversorgung-2026
  'Mieterstrom oder gemeinschaftliche Gebäudeversorgung.webp': 'Schnittbild eines Mehrfamilienhauses mit PV-Anlage auf dem Dach und Stromverteilung an die Wohnungen',
  // zaehlerschrank-pv-waermepumpe-smart-meter
  'Zählerschrank für PV, Wärmepumpe und Smart Meter.webp': 'Geöffneter Zählerschrank mit Zählern und Schutztechnik, verbunden mit PV-Anlage und Wärmepumpe eines Einfamilienhauses',
  // steuerbox-paragraf-14a-smart-meter-hems
  'Steuerbox nach § 14a.webp': 'Haus mit Wärmepumpe, Wallbox und Speicher, im Zählerschrank eine Steuerbox mit Verbindung zum Stromnetz',
  // waermepumpe-lebensdauer-wartung
  'Lebensdauer und Wartung einer Wärmepumpe.webp': 'Techniker wartet das Außengerät einer Wärmepumpe, daneben der Hausbesitzer, eingeblendet eine Zeitleiste mit 10, 15 und 20 Jahren',
  // monoblock-oder-split-waermepumpe
  'Monoblock oder Split-Wärmepumpe.webp': 'Zweigeteiltes Bild: Berater erklärt einem Paar am Laptop Monoblock- und Split-Wärmepumpe, jeweils mit Schema der Leitungsführung',
  // waermepumpentarif-oder-dynamischer-stromtarif
  'Wärmepumpentarif oder dynamischer Stromtarif.webp': 'Berater zeigt einem Paar am Laptop Wärmepumpentarif und dynamischen Stromtarif, eingeblendet eine schwankende Preiskurve',
  // pufferspeicher-waermepumpe
  'Pufferspeicher bei Wärmepumpen.webp': 'Berater erklärt einem Paar den Pufferspeicher, eingeblendet der Weg von der Wärmepumpe über den Pufferspeicher in die Heizkreise',
  // hydraulischer-abgleich-waermepumpe
  'Hydraulischer Abgleich bei Wärmepumpen.webp': 'Techniker mit Tablet am Heizungsverteiler, daneben Schnittbild eines Hauses mit Heizkörpern und Fußbodenheizung',
  // waermepumpe-richtig-einstellen
  'Wärmepumpe richtig einstellen Heizkurve, Takten und Nachtabsenkung.webp': 'Berater zeigt einer Kundin am Tablet Heizkurve, Taktung und Nachtabsenkung der Wärmepumpe',
  // heizlastberechnung-waermepumpe
  'Heizlastberechnung für Wärmepumpen.webp': 'Berater bespricht mit einem Paar die Heizlast, eingeblendet Grundriss und Wärmeverluste des Hauses',
  // einspeiseverguetung-photovoltaik-2026
  'Einspeisevergütung Photovoltaik 2026.webp': 'Berater mit Tablet vor einem Haus mit Solaranlage, eingeblendet der Vergütungssatz 7,70 ct/kWh',
  // strommarkt-einfach-erklaert-boersenstrompreis-netzentgelt-strompreis
  'Strommarkt einfach erklärt.webp': 'Haus mit Solaranlage und Speicher, im Hintergrund Kraftwerk, Windräder und Strommast, eingeblendet Erzeugung, Netz und Haushalt',
  // eigenverbrauch-optimieren-100-prozent-autarkie
  'Eigenverbrauch optimieren.webp': 'Familie im Haus mit Solaranlage, eingeblendete Stromflüsse zu Speicher, E-Auto und Haushaltsgeräten',
  // pv-speicher-wallbox-waermepumpe-intelligent-steuern
  'PV, Speicher, Wallbox und Wärmepumpe intelligent steuern.webp': 'Einfamilienhaus mit Solaranlage, Stromspeicher, Wallbox und Wärmepumpe, verbunden durch eingeblendete Energieflüsse',
  // hems-home-energy-management-system-hersteller-app
  'Was ein Home Energy Management System wirklich macht.webp': 'Haus mit PV-Anlage, Speicher, Wallbox und Wärmepumpe, in der Mitte ein HEMS-Symbol, das alle Geräte verbindet',
  // stromspeicher-aus-netz-laden-dynamisch-sinnvoll
  'Stromspeicher aus dem Netz laden.webp': 'Stromspeicher und Wechselrichter in der Garage, über eine eingeblendete Preiskurve mit dem Stromnetz verbunden',
  // zeitvariable-netzentgelte-paragraph-14a-modul-3
  'Zeitvariable Netzentgelte nach Paragraf 14a.webp': 'Mann lädt ein E-Auto an der Wallbox, darüber ein Tagesbogen mit Uhr zwischen teurer und günstiger Netzzeit',
  // negative-strompreise-2026-pv-speicher-eauto
  'Negative Strompreise 2026.webp': 'E-Auto an der Wallbox und Stromspeicher am Haus, eingeblendet eine Preiskurve, die unter null fällt',
  // dynamischer-stromtarif-pv-speicher-lohnt-sich
  'Dynamischer Stromtarif mit PV und Speicher.webp': 'Haus mit PV-Anlage, Speicher und Wallbox, eingeblendet eine Strompreiskurve und eine Smartphone-App',
  // solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter
  'Solarspitzengesetz 2026 60-Prozent-Regel.webp': 'Haus mit Solaranlage und Technikraum, eingeblendet der Weg vom PV-Modul ins Netz mit der 60-%-Grenze',
  // pv-anlage-rueckbau-montage
  'Rückbau und Montage So läuft der Umbau einer PV-Anlage ab.webp': 'Zweigeteiltes Bild: Monteure bauen alte PV-Module vom Dach ab und montieren neue',
  // hems-monitoring-nachruesten
  'HEMS und Monitoring nachrüsten Die Altanlage endlich sichtbar machen.webp': 'Grafik „HEMS und Monitoring nachrüsten“: Techniker mit Tablet vor einem Haus mit älterer PV-Anlage, eingeblendet Erzeugung, Verbrauch und Speicherstand',
  // pv-module-entsorgen-recycling
  'PV-Module entsorgen Recycling, Pflichten und was Altmodule noch wert sind.webp': 'Grafik „PV-Module entsorgen“: Arbeiter sortieren ausgebaute Solarmodule auf einem Recyclinghof',
  // komponenten-tausch-pv-anlage
  'Komponenten-Tausch Wenn nicht die ganze Anlage neu muss.webp': 'Grafik „Komponenten-Tausch“: Techniker tauscht ein Bauteil am Wechselrichter, eingeblendet die Kette aus PV-Modulen, Wechselrichter, Speicher und Monitoring',
  // jaz-wirkungsgrad
  'JAZ, COP und SCOP Was die Effizienz-Kennzahlen der Wärmepumpe wirklich aussagen.webp': 'Techniker mit Tablet vor dem Außengerät einer Wärmepumpe, eingeblendet Kennzahlen zu JAZ, COP und SCOP',
  // wie-funktioniert-eine-waermepumpe
  'Wie funktioniert eine Wärmepumpe Das Prinzip verständlich erklärt.webp': 'Berater erklärt einem Paar eine Luft-Wärmepumpe, eingeblendet der Kreislauf von der Außenluft über den Verdichter zu Heizkörper, Fußbodenheizung und Warmwasserspeicher',
  // bidirektionales-laden
  'Bidirektionales Laden Wenn das E-Auto zum Stromspeicher wird.webp': 'E-Auto an der Wallbox, eingeblendete Energieflüsse zwischen Autobatterie und Hausspeicher in beide Richtungen',
  // photovoltaik-foerderung
  'Photovoltaik-Förderung 2026 Was es wirklich gibt – und was nur gut klingt.webp': 'Mann prüft Unterlagen zur PV-Förderung mit Tablet und Checkliste vor einem Haus mit Solaranlage',
  // photovoltaik-steuern
  'Photovoltaik und Steuern 0 Prozent Mehrwertsteuer, Einkommensteuer und was 2026 gilt.webp': 'Berater am Laptop vor einem Haus mit Solaranlage, eingeblendet „0 % MwSt.“, daneben Unterlagen vom Finanzamt und ein Taschenrechner',
  // amortisation-pv-anlage
  'Amortisation der PV-Anlage Wann sie sich wirklich bezahlt gemacht hat.webp': 'Berater rechnet mit einer Kundin die Amortisation einer PV-Anlage durch, eingeblendet die Kurve der aufsummierten Ersparnis über die Jahre',
  // solarteur-insolvent-was-tun
  'Solarteur insolvent.webp': 'Grafik „Solarteur insolvent“: Paar mit Unterlagen vor einem Haus mit unfertiger Solaranlage, daneben erste Schritte zu Anlage, Anzahlung und Garantie',
  // garantie-vs-gewaehrleistung-pv-anlage
  'Garantie vs. Gewährleistung.webp': 'Grafik „Garantie vs. Gewährleistung“: Paar prüft Vertragsunterlagen, daneben die Gegenüberstellung von Herstellergarantie und gesetzlicher Gewährleistung',
  // multi-use-stromspeicher
  'Multi-Use bei Stromspeichern.webp': 'Grafik „Multi-Use bei Stromspeichern“: Gewerbespeicher vor einer Halle mit PV-Dach, daneben Peak Shaving, Eigenverbrauch, Notstrom, Ladeinfrastruktur und Tarifoptimierung',
  // lastspitzenkappung-stromspeicher-gewerbe
  'Lastspitzenkappung.webp': 'Gewerbespeicher vor einer Halle mit PV-Dach, eingeblendet ein Lastprofil mit und ohne Peak Shaving',
  // pv-gewerbe-wirtschaftlichkeit-beispielrechnung
  'Wirtschaftlichkeitsrechnung.webp': 'Grafik „Lohnt sich PV auf dem Gewerbedach?“: Gewerbehalle mit PV-Anlage, daneben Kennzahlen der Beispielrechnung',
  // pv-landwirtschaft-stalldach
  'PV-in-der-Landwirtschaft.webp': 'Grafik „PV in der Landwirtschaft“: Stall mit PV-Dach und Traktor, daneben Hinweise zu Stalldach, Asbest und Lastprofil',
  // cloud-speicher-stromspeicher-vergleich
  'cloud-speicher.webp': 'Leuchtende Wolke mit Batteriesymbol über einer Stadt bei Nacht',
  // lohnt-sich-ein-stromspeicher, wie-gross-sollte-ein-stromspeicher-sein, wie-lange-haelt-ein-stromspeicher, solaranlage-mit-oder-ohne-speicher
  'stromspeicher.webp': 'Weißer Heimspeicher an einer Hauswand auf der Terrasse',
  // waermepumpe-im-altbau
  'Waermepumpe-im-Altbau.webp': 'Älteres Einfamilienhaus mit PV-Anlage und Luft-Wärmepumpe im Garten',
  // solaranlage-fuer-waermepumpe-auslegen
  'waermepumpe.webp': 'Außengerät einer Luft-Wärmepumpe im Schnee vor einer Holzfassade',
  // wie-viel-autarkie-ist-realistisch
  'Autarkie.webp': 'Screenshot eines PV-Monitorings mit Produktion, Verbrauch und Ladezustand über drei Tage',
  // was-bringt-eine-solaranlage-im-winter
  'Solaranlage-im-Winter.webp': 'Verschneites Dach mit teilweise schneebedeckter Solaranlage',

  // ─── Alt-Text zu knapp, ungenau oder Themen- statt Bildbeschreibung (Schritt 4, Teil 3) ─
  // lokales-hems-hersteller-cloud-server-internet-ausfall – vorher: „Lokales HEMS arbeitet unabhängig von der Hersteller-Cloud“
  'lokales-hems-hersteller-cloud-server-internet-ausfall.webp': 'Haus mit Stromspeicher, Wärmepumpe und Wallbox, alle mit einer zentralen Steuerbox verbunden, die Cloud nur gestrichelt angebunden',
  // pv-anlage-bei-stromausfall-solarstrom-reicht-nicht – vorher: „PV-Anlage mit Batterie und Ersatzstrom bei Netzausfall“
  'pv-anlage-bei-stromausfall-solarstrom-reicht-nicht.webp': 'Einfamilienhaus mit Solaranlage und Stromspeicher bei Nacht, einzelne Räume beleuchtet',
  // warmwasser-waermepumpe-temperatur-legionellenschutz-kosten – vorher: „Warmwassertemperatur an einer Wärmepumpe einstellen“
  'warmwasser-waermepumpe-temperatur-legionellenschutz-kosten.webp': 'Techniker zeigt einer Kundin die Einstellung am Warmwasserspeicher der Wärmepumpe',
  // batteriezellen-stromspeicher-zellspannung-temperatur-balancing – vorher: „Zellspannungen und Balancing in einem Batteriespeicher“
  'batteriezellen-stromspeicher-zellspannung-temperatur-balancing.webp': 'Geöffneter Batteriespeicher mit einer Reihe von Zellen, farbig hervorgehoben',
  // lastmanagement-wallbox-hausanschluss-ueberlastung – vorher: „Lastmanagement verteilt Leistung auf zwei Wallboxen“
  'lastmanagement-wallbox-hausanschluss-ueberlastung.webp': 'Schnittbild eines Hauses mit zwei E-Autos an zwei Wallboxen, die Leistung wird im Zählerschrank verteilt',
  // offene-schnittstellen-pv-speicher-hems-hersteller-app – vorher: „Offene Schnittstellen verbinden Geräte im Energiesystem“
  'offene-schnittstellen-pv-speicher-hems-hersteller-app.webp': 'Stromspeicher, Wechselrichter, Wärmepumpe und Wallbox, über farbige Leitungen mit einer zentralen Steuerbox verbunden',
  // pv-anlage-liefert-weniger-als-berechnet-abweichung-normal – vorher: „Ertrag einer Photovoltaikanlage mit Prognose vergleichen“
  'pv-anlage-liefert-weniger-als-berechnet-abweichung-normal.webp': 'Mann vergleicht auf dem Tablet den Ertrag seiner PV-Anlage mit der Prognose',
  // waermepumpe-taktet-staendig-starts-normal – vorher: „Verdichterstarts einer Wärmepumpe fachlich auswerten“
  'waermepumpe-taktet-staendig-starts-normal.webp': 'Techniker zeigt einer Kundin am Außengerät der Wärmepumpe eine Auswertung auf dem Tablet',
  // speicherwirkungsgrad-verluste-geladen-nutzbar – vorher: „Energiefluss und Umwandlungsverluste eines Stromspeichers“
  'speicherwirkungsgrad-verluste-geladen-nutzbar.webp': 'Stromspeicher und Wechselrichter an der Hauswand, eingeblendet der Energiefluss vom Dach ins Haus',
  // internetausfall-pv-speicher-wallbox-hems – vorher: „Lokales Energiesystem arbeitet bei Internetausfall weiter“
  'internetausfall-pv-speicher-wallbox-hems.webp': 'Haus mit Solaranlage, Speicher, Wärmepumpe und Wallbox bei Nacht, die Cloud nur gestrichelt angebunden',
  // alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie – vorher: „Fachgerechte Kennlinienmessung an älteren PV-Modulen“
  'alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie.webp': 'Techniker misst mit einem Kennlinien-Messgerät an älteren PV-Modulen auf einem Flachdach',
  // solarmodule-dach-voll-belegen-dachflaeche-freilassen – vorher: „Sinnvoll voll belegtes Solardach eines Einfamilienhauses“
  'solarmodule-dach-voll-belegen-dachflaeche-freilassen.webp': 'Einfamilienhaus mit voll belegtem Solardach',
  // heizstab-waermepumpe-sinnvoll-stromverbrauch – vorher: „Heizstab und Hydraulik einer Wärmepumpenanlage prüfen“
  'heizstab-waermepumpe-sinnvoll-stromverbrauch.webp': 'Techniker erklärt einer Kundin die Wärmepumpenanlage im Technikraum',
  // stromspeicher-im-winter-oft-leer – vorher: „Stromspeicher und Photovoltaikanlage an einem Wintertag“
  'stromspeicher-im-winter-oft-leer.webp': 'Stromspeicher und Wechselrichter im Hauswirtschaftsraum, draußen verschneite Solardächer',
  // pv-ueberschussladen-funktioniert-nicht-ursachen – vorher: „Fehlersuche beim PV-Überschussladen an der Wallbox“
  'pv-ueberschussladen-funktioniert-nicht-ursachen.webp': 'Techniker und Kundin prüfen am Tablet die Wallbox, an der ein E-Auto lädt',
  // alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module – vorher: „Alten PV-Wechselrichter durch modernes Gerät ersetzen“
  'alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module.webp': 'Techniker montiert einen neuen Wechselrichter neben dem alten Gerät in der Garage',
  // waermepumpe-foerderung-2026 – vorher: „Stiebel-Eltron Wärmepumpe“
  'IMG_20260610_190646891.webp': 'Außengerät einer Stiebel-Eltron-Wärmepumpe im Garten hinter Sträuchern',
  // solardachpflicht-nrw-2026 – vorher: „Ein Einfamilienhaus mit einer Solaranlage“
  'Solardachpflicht.webp': 'Einfamilienhaus mit Solaranlage, davor ein Klemmbrett mit den Punkten Neubau, Sanierung und Ausnahmen',
  // welche-waermepumpe-fuer-mein-haus – vorher: „Ein Bild von unterschiedlichen Wärmequellen“
  'Waermepumpentyp.webp': 'Dreigeteiltes Bild der Wärmequellen: Luft-Wärmepumpe am Haus, Erdkollektor im Boden und Wärmepumpe am Wasser',
  // stromspeicher-foerderung-nrw – vorher: „eine Fahne von NRW“
  'nrw_speicherfoerderung.webp': 'Flagge von Nordrhein-Westfalen mit Landeswappen',
  // stromspeicher-kosten – vorher: „Sungrow Hybrid-Wechselrichter mit SBR128“
  'Sungrow Hybrid-Wechselrichter mit SBR128.webp': 'Sungrow-Hybrid-Wechselrichter und Batteriespeicher SBR128 neben dem Zählerschrank im Hausanschlussraum',
  // hybrid-wechselrichter-oder-getrennte-geraete – vorher: „Hybridwechselrichter“
  'SMA_Tripower.webp': 'Hybrid-Wechselrichter SMA Sunny Tripower Smart Energy vor orangem Hintergrund',
  // repowering-solaranlage, alte-pv-anlage-nach-20-jahren, repowering-kosten – vorher: „Repowering von PV-Anlagen“
  'repowering.webp': 'Leuchtende Steckverbinder von PV-Kabeln in Nahaufnahme',
  // repowering-vs-neuanlage, typische-fehler-beim-repowering – vorher: „Alter Zähler auf einer Montageplatte“
  'Screenshot 2026-04-22 105130.webp': 'Alter Stromzähler auf einer abgenutzten Holz-Montageplatte',
  // waermepumpe-kosten-einfamilienhaus – vorher: „Pufferspeicher im Hauswirtschaftsraum“
  'Pufferspeicher-im-HWR.webp': 'Hauswirtschaftsraum mit Pufferspeicher, Inneneinheit der Wärmepumpe und Waschmaschinen, draußen das Außengerät',
  // waermepumpe-vorlauftemperatur – vorher: „eine Buderus Regelung zur Anpassung der Wohnraumtemperatur“
  'Buderus-Regelung.webp': 'Bedienteil einer Buderus-Heizungsregelung mit Temperaturanzeige',
  // waermepumpe-mit-heizkoerpern – vorher: „eine Frau sitzt vor einem Heizkörper“
  'Frau-vor-Heizkoerper.webp': 'Frau sitzt mit Kopfhörern und Smartphone vor einem Heizkörper',
  // wallbox-11-oder-22-kw, wallbox-zu-hause-laden – vorher: „SMA Wallbox“
  'SMA-Wallbox.webp': 'Modernes Holzhaus mit offener Garage, in der ein E-Auto an einer SMA-Wallbox lädt',
  // wallbox-kosten – vorher: „Wallbox an einer Garagenwand“
  'Sungrow-Wallbox.webp': 'Sungrow-Wallbox an einer Betonwand',
  // typische-fehler-bei-solaranlagen – vorher: „Montagefehler“
  'Montagefehler.webp': 'Aluminium-Montageschiene mit Modulklemme auf einem Kiesdach',
  // solaranlage-fuer-e-auto-auslegen – vorher: „E-Auto laden“
  'wallox2.webp': 'Frau mit Smartphone lehnt an einem E-Auto, das gerade geladen wird',
  // ost-west-oder-sueddach-solaranlage, kosten-solaranlage-einfamilienhaus – vorher: „ein Dach mit einer Solaranlage in Moers“
  'Solaranlage in moers.webp': 'Walmdach in Moers mit schwarzen Solarmodulen auf mehreren Dachseiten, Luftaufnahme',
  // wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein – vorher: „Solaranlage in Geldern“
  'Solaranlage-in-Geldern.webp': 'Klinkerhaus in Geldern mit schwarzer Solaranlage auf dem Satteldach',
  // braucht-man-einen-stromspeicher – vorher: „Solarmodul mit einem Stromspeicher“
  'pv-speicher.webp': 'Schwarzes Solarmodul und weißer Heimspeicher vor orangem Hintergrund',
  // kosten-15-kwp-solaranlage-mit-speicher – vorher: „ein Dach mit einer Solaranlage in Kleve“
  'Solaranlage-in-Kleve.webp': 'Satteldach in Kleve mit Solarmodulen und Solarthermie-Kollektoren, Luftaufnahme',
  // kosten-10-kwp-solaranlage-mit-speicher, pv-anlage-planen – vorher: „Planung einer Solaranlage“
  'Solaranlage in voerde.webp': 'Flachdach eines Hauses in Voerde mit Solarmodulen, Luftaufnahme',
  // ab-wieviel-qm-lohnt-sich-eine-solaranlage – vorher: „ein Dach mit einer Solaranlage in Goch“
  'Solaranlage-in-Goch.webp': 'Walmdach in Goch mit schwarzen Solarmodulen, Luftaufnahme',
  // kosten-solaranlage-mit-speicher-einfamilienhaus – vorher: „ein Dach mit einer Solaranlage in Xanten“
  'Solaranlage_in_Xanten.webp': 'Satteldach in Xanten mit schwarzer Solaranlage im Gegenlicht',
}
