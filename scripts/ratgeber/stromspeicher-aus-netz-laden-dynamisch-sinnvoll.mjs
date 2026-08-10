// scripts/articles/stromspeicher-aus-netz-laden-dynamisch-sinnvoll.mjs

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
  titel: 'Stromspeicher aus dem Netz laden: Wann dynamisches Laden sinnvoll ist – und wann es nur den Akku verschleißt',
  slug: 'stromspeicher-aus-netz-laden-dynamisch-sinnvoll',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'Günstigen Netzstrom nachts in den Batteriespeicher laden und abends teuren Strom vermeiden: Mit dynamischen Tarifen klingt das nach einem einfachen Geschäftsmodell. In der Praxis entscheiden aber Wirkungsgrad, Teillastverluste, PV-Prognose, Ladezustand, Batteriealterung, § 14a und das Messkonzept. Wir zeigen, wann Netzladen wirtschaftlich sinnvoll sein kann – und warum ein Speicher nicht wegen jeder kleinen Preisdifferenz zusätzliche Zyklen fahren sollte.',
  lesezeit: 17,

  seo: seo(
    'Stromspeicher aus dem Netz laden: Wann lohnt sich das 2026? | PEAK.Energy',
    'Batteriespeicher mit günstigem Netzstrom laden: dynamische Tarife, Wirkungsgrad, Batteriealterung, PV-Prognose, §14a, EEG und HEMS verständlich erklärt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Netzladen kann wirtschaftlich sinnvoll sein, wenn der spätere vermiedene Strompreis '),
      bold('deutlich höher'),
      t(' ist als der Preis beim Laden – und die Differenz groß genug ist, um Speicherverluste und weitere Kosten auszugleichen.'),
    ),
    summaryPoint(
      t('Die HTW Berlin zeigt 2026 an einem Beispiel: Bei 25 ct/kWh Ladestrom und 35 ct/kWh vermiedenem Netzbezug braucht das Gesamtsystem mindestens rund '),
      bold('71 % Systemwirkungsgrad'),
      t(', damit die Rechnung überhaupt vor zusätzlicher Batteriealterung aufgeht.'),
    ),
    summaryPoint(
      t('Der Datenblatt-Wirkungsgrad allein reicht nicht. Besonders beim nächtlichen Entladen mit wenigen hundert Watt können '),
      bold('Teillastverluste des Wechselrichters'),
      t(' die Wirtschaftlichkeit deutlich verschlechtern.'),
    ),
    summaryPoint(
      t('Bei einer PV-Anlage darf der Speicher nicht blind nachts vollgeladen werden. Sonst fehlt am nächsten sonnigen Mittag '),
      bold('freie Kapazität für eigenen Solarstrom'),
      t('. Ein sinnvoller Ladefahrplan braucht deshalb mindestens Strompreis, PV-Prognose, Speicherfüllstand und Verbrauchsprognose.'),
    ),
    summaryPoint(
      t('Netzladen und spätere Netzeinspeisung sind 2026 auch regulatorisch zu unterscheiden: Bei einem mit Netz- und PV-Strom gemischt geladenen Speicher kann die '),
      bold('EEG-Förderfähigkeit der Speichereinspeisung'),
      t(' betroffen sein. Das Mess- und Betriebsmodell muss deshalb vor Aktivierung der Funktion geprüft werden.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum Netzladen 2026 plötzlich interessant wird')),
      p(
        t('Klassische Heimspeicher wurden lange nach einer einfachen Logik betrieben: Tagsüber lädt die PV-Anlage den Speicher, abends und nachts versorgt der Speicher das Haus. Netzstrom wurde möglichst nicht in die Batterie geladen.'),
      ),
      p(
        t('Mit dynamischen Stromtarifen verändert sich diese Logik. Wenn Netzstrom nachts oder in wind- und sonnenreichen Stunden sehr günstig ist, kann es wirtschaftlich sinnvoll erscheinen, die Batterie gezielt aus dem öffentlichen Netz zu laden und den gespeicherten Strom später in teureren Stunden im eigenen Haus zu verbrauchen.'),
      ),
      p(
        t('Technisch können das immer mehr Speichersysteme. Die entscheidende Frage lautet aber nicht: '),
        bold('„Kann mein Speicher Netzladen?"'),
        t(' Sondern: '),
        bold('„Wann lohnt es sich nach allen Verlusten, Alterungseffekten und Randbedingungen wirklich?"'),
      ),
      p(
        t('Genau hier wird aus einer simplen Ladefunktion ein Energiemanagement-Thema.'),
      ),
    ),

    hinweisBlock(
      'Stand dieses Artikels: 10. August 2026',
      p(
        t('Bei Stromspeichern ändern sich derzeit sowohl technische Funktionen als auch energierechtliche Rahmenbedingungen. Dieser Beitrag beschreibt die typische Nutzung im Einfamilienhaus. Bei Direktvermarktung, komplexen Messkonzepten oder Einspeisung aus einem gemischt geladenen Speicher sollte das konkrete Anlagen- und Vermarktungskonzept separat geprüft werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Die Grundidee: billig laden, teuren Netzbezug vermeiden')),
      p(
        t('Die einfachste Form des dynamischen Netzladens ist kein Stromhandel. Der Speicher kauft nicht selbst Strom an der Börse und verkauft ihn später wieder. Im Einfamilienhaus geht es meist darum, '),
        bold('günstigen Netzstrom zu speichern und später teureren Netzbezug des Hauses zu vermeiden'),
        t('.'),
      ),
      p(
        t('Ein Beispiel: Nachts kostet eine Kilowattstunde im dynamischen Tarif vollständig betrachtet 25 Cent. Am frühen Abend wären es 35 Cent. Wenn der Speicher nachts lädt und abends das Haus versorgt, beträgt die theoretische Preisdifferenz 10 Cent pro Kilowattstunde.'),
      ),
      p(
        t('Diese 10 Cent sind aber noch nicht der Gewinn. Denn zwischen Netz und späterem Hausverbrauch liegen Batterie, Wechselrichter und Leistungselektronik – und damit Verluste.'),
      ),
    ),

    textBlock(
      h('h2', t('Die wichtigste Rechnung: Wie groß muss der Preisabstand sein?')),
      p(
        t('Die HTW Berlin hat die Netzstromspeicherung in der Stromspeicher-Inspektion 2026 ausdrücklich untersucht. Ihr Beispiel: Der Speicher lädt bei '),
        bold('25 ct/kWh'),
        t(' und ersetzt später Netzstrom zu '),
        bold('35 ct/kWh'),
        t('. Damit sich dieser Vorgang allein unter Berücksichtigung der Umwandlungsverluste lohnt, muss der Systemwirkungsgrad mindestens rund '),
        bold('71 %'),
        t(' betragen.'),
      ),
      p(
        t('Die Logik dahinter ist einfach: Aus einer eingekauften Kilowattstunde kommen wegen Lade-, Batterie- und Entladeverlusten weniger als eine Kilowattstunde wieder im Haus an. Je kleiner der Preisabstand, desto effizienter muss das System sein.'),
      ),
    ),

    tabelleBlock('Vereinfachte Preislogik beim Netzladen', [
      {
        spalte1: 'Ladepreis 25 ct/kWh → später 35 ct/kWh vermeiden',
        spalte2: 'Mindestens ca. 71 % Systemwirkungsgrad',
        spalte3: 'HTW-Beispiel 2026; zusätzliche Alterung und fixe Kosten noch nicht eingerechnet',
      },
      {
        spalte1: 'Kleine Preisdifferenz',
        spalte2: 'Sehr hoher Wirkungsgrad nötig',
        spalte3: 'Schon geringe Verluste können den Vorteil vollständig aufzehren',
      },
      {
        spalte1: 'Große Preisdifferenz',
        spalte2: 'Mehr wirtschaftlicher Spielraum',
        spalte3: 'Trotzdem PV-Prognose, Alterung und Tarifbestandteile berücksichtigen',
      },
    ]),

    hinweisBlock(
      'Die Break-even-Rechnung enthält noch keinen „Verschleißpreis"',
      p(
        t('Die reine Wirkungsgradrechnung sagt nur, ob nach den elektrischen Verlusten überhaupt ein Preisvorteil übrig bleibt. Zusätzliche Batteriealterung, mögliche Garantielimits, Grundpreise, Messkosten oder andere tarifliche Kosten sind darin noch nicht enthalten. Deshalb sollte eine Steuerung nicht bereits bei jedem rechnerisch positiven Zehntelcent einen zusätzlichen Ladezyklus auslösen.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum der Datenblatt-Wirkungsgrad nicht reicht')),
      p(
        t('Auf Datenblättern stehen häufig Wirkungsgrade von 97, 98 oder sogar mehr Prozent. Diese Werte beschreiben aber meist einzelne optimale Betriebspunkte. Für dynamisches Netzladen ist der '),
        bold('gesamte Pfad'),
        t(' relevant: Netz → Wechselrichter → Batterie → Batterie → Wechselrichter → Hausverbrauch.'),
      ),
      p(
        t('Besonders kritisch ist die Entladung bei geringer Leistung. Ein typisches Einfamilienhaus benötigt nachts oder in ruhigen Phasen vielleicht nur einige hundert Watt. Genau in diesem Teillastbereich unterscheiden sich Speichersysteme stark.'),
      ),
      p(
        t('Die HTW Berlin weist deshalb darauf hin, dass die Wirtschaftlichkeit der Netzstromspeicherung stark vom Wechselrichterwirkungsgrad bei der späteren Entladung abhängt. Wer nur den maximalen Wirkungsgrad aus dem Datenblatt verwendet, kann die reale Einsparung deutlich überschätzen.'),
      ),
    ),

    textBlock(
      h('h2', t('Ein Speicher ist kein kostenloser Energie-Parkplatz')),
      p(
        t('Jeder Batteriespeicher altert. Dabei gibt es zwei grundlegende Mechanismen: '),
        bold('kalendarische Alterung'),
        t(' durch Zeit, Temperatur und Ladezustand sowie '),
        bold('zyklische Alterung'),
        t(' durch Laden und Entladen.'),
      ),
      p(
        t('Das heißt nicht, dass jeder zusätzliche Zyklus schlecht ist. Ein Speicher wurde schließlich zum Speichern gebaut. Aber zusätzliche Zyklen sollten einen wirtschaftlichen oder technischen Nutzen haben. Einen 10- oder 15-kWh-Speicher für zwei Cent Preisunterschied mehrfach hin- und herzuschieben, nur weil die Funktion technisch verfügbar ist, ist keine intelligente Optimierung.'),
      ),
      p(
        t('Wie hoch ein sinnvoller kalkulatorischer Wert pro zusätzlicher gespeicherter Kilowattstunde ist, lässt sich nicht seriös für alle Batterien pauschal festlegen. Zellchemie, Temperatur, Ladezustände, nutzbarer Energiedurchsatz, Garantiebedingungen und Ersatzkosten unterscheiden sich zu stark.'),
      ),
      p(
        t('Die HTW Berlin hat 2026 die Garantiebedingungen von 20 Herstellern untersucht. Allein die garantierte Restkapazität am Ende des Garantiezeitraums lag je nach Hersteller zwischen '),
        bold('60 und 85 % der Anfangskapazität'),
        t('. Schon daran sieht man, warum eine universelle „Batterie kostet x Cent pro Zyklus"-Regel zu grob ist.'),
      ),
    ),

    tippBlock(
      'Eine Mindestmarge statt jeder kleinen Preisdifferenz',
      p(
        t('Ein vernünftiges HEMS sollte Netzladen nicht bei jeder mathematisch positiven Preisdifferenz starten. Sinnvoll ist eine Sicherheitsmarge, die Umwandlungsverluste, Unsicherheit der Prognosen und einen Wert für zusätzliche Batteriebeanspruchung berücksichtigt. Erst wenn der erwartete Vorteil darüber liegt, wird geladen.'),
      ),
    ),

    textBlock(
      h('h2', t('Hoher Ladezustand kann ebenfalls Lebensdauer kosten')),
      p(
        t('Batteriealterung hängt nicht nur von der Zahl der Zyklen ab. Lithium-Ionen-Batterien altern auch schneller, wenn sie lange bei sehr hohem Ladezustand stehen.'),
      ),
      p(
        t('KIT und HTW Berlin haben 2025 gezeigt, dass prognosebasierte Ladestrategien die Zeit bei sehr hohen Ladezuständen deutlich reduzieren können. Bei einem getesteten System wurde die Standzeit im vollgeladenen Zustand an sonnigen Tagen um acht Stunden verkürzt; während des Testzeitraums halbierte sich die Zeit oberhalb von 90 % Ladezustand.'),
      ),
      p(
        t('Das ist für dynamisches Netzladen wichtig: Ein System, das nachts um 2 Uhr auf 100 % lädt und den Akku anschließend bis zum Abend voll stehen lässt, kann zwar einen günstigen Preis erwischt haben – aber energetisch und alterungsseitig trotzdem schlecht geplant sein.'),
      ),
    ),

    textBlock(
      h('h2', t('Der größte Denkfehler bei PV: nachts billig vollmachen')),
      p(
        t('Bei einem Haus ohne PV ist die Logik des Netzladens relativ einfach. Bei einer PV-Anlage kommt eine zweite Energiequelle hinzu – und die hat Grenzkosten von praktisch null, sobald die Anlage vorhanden ist.'),
      ),
      p(
        t('Wenn der Speicher nachts komplett mit Netzstrom gefüllt wird und am nächsten Mittag die Sonne scheint, fehlt freie Kapazität für den eigenen Solarüberschuss. Der Effekt kann absurd werden: Du kaufst nachts vermeintlich günstigen Netzstrom und speist am nächsten Tag eigenen PV-Strom für deutlich weniger Geld ins Netz ein oder musst ihn wegen einer Einspeisegrenze sogar abregeln.'),
      ),
      p(
        t('Deshalb muss ein HEMS vor dem Netzladen mindestens wissen:'),
      ),
      ul(
        p(t('Wie viel Energie ist aktuell im Speicher?')),
        p(t('Wie hoch wird der Verbrauch bis zum nächsten PV-Fenster voraussichtlich sein?')),
        p(t('Wie viel PV-Ertrag wird morgen erwartet?')),
        p(t('Welche Einspeisebegrenzung oder Marktregel betrifft die Anlage?')),
        p(t('Wie entwickeln sich die Strompreise in den kommenden Zeitfenstern?')),
      ),
      p(
        t('Erst daraus ergibt sich, wie viel freie Speicherkapazität nachts überhaupt sinnvoll mit Netzstrom belegt werden darf.'),
      ),
    ),

    textBlock(
      h('h2', t('Winter und Sommer: Netzladen ist nicht in jeder Jahreszeit gleich sinnvoll')),
      p(
        t('Im Winter ist die PV-Erzeugung niedrig und der Speicher bleibt häufiger leer. Gleichzeitig können deutliche Preisunterschiede zwischen windreichen Nachtstunden und teuren Abendstunden auftreten. Hier hat Netzladen grundsätzlich mehr Platz und mehr Potenzial.'),
      ),
      p(
        t('Im Sommer produziert eine ausreichend große PV-Anlage dagegen oft genug Energie, um den Speicher täglich selbst zu laden. Zusätzlicher Netzstrom kann dann eher stören als helfen – insbesondere, wenn dadurch mittags kein Speicherplatz mehr vorhanden ist.'),
      ),
      p(
        t('Ein gutes Energiemanagement sollte deshalb keine starre Funktion „Netzladen an/aus" haben, sondern seine Strategie täglich neu aus '),
        bold('Wetter, Preisen und Verbrauch'),
        t(' ableiten.'),
      ),
    ),

    tabelleBlock('Wann Netzladen typischerweise interessanter wird', [
      {
        spalte1: 'Winter, wenig PV, große Preisunterschiede',
        spalte2: 'Eher interessant',
        spalte3: 'Speicher hat freie Kapazität und kann teuren Abendbezug ersetzen',
      },
      {
        spalte1: 'Sommer, sonniger Folgetag',
        spalte2: 'Oft weniger sinnvoll',
        spalte3: 'Freier Speicherplatz für PV kann wertvoller sein als günstiger Nachtstrom',
      },
      {
        spalte1: 'Negativ- oder Niedrigpreisphase + später hohe Preise',
        spalte2: 'Interessant bei ausreichender Marge',
        spalte3: 'Gesamttarifpreis und Systemwirkungsgrad prüfen',
      },
      {
        spalte1: 'Nur 2–3 ct/kWh Preisunterschied',
        spalte2: 'Meist kritisch',
        spalte3: 'Verluste und Batteriebeanspruchung können den Vorteil aufzehren',
      },
      {
        spalte1: 'Keine Verbrauchs- oder PV-Prognose',
        spalte2: 'Riskant',
        spalte3: 'Speicher kann zur falschen Zeit voll oder leer sein',
      },
    ]),

    textBlock(
      h('h2', t('Dynamischer Stromtarif: Welcher Preis gehört in die Rechnung?')),
      p(
        t('Für die Entscheidung darf nicht nur der Börsenpreis betrachtet werden. Relevant ist der Preis, der dir im konkreten Tarif für den Netzbezug tatsächlich berechnet wird.'),
      ),
      p(
        t('Ein dynamischer Tarif koppelt den Arbeitspreis an den Spotmarkt. Trotzdem können Netzentgelte, Steuern, Umlagen, Lieferantenaufschläge und weitere Preisbestandteile hinzukommen. Ein negativer Börsenpreis bedeutet deshalb nicht automatisch, dass der Speicher kostenlos geladen wird.'),
      ),
      p(
        t('Die komplette Tariflogik erklären wir in '),
        link('Dynamischer Stromtarif mit PV und Speicher: Wann er sich wirklich lohnt', '/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Modul 3 nach § 14a: auch das Netzentgelt kann zeitabhängig werden')),
      p(
        t('Beim Netzladen kann neben dem Energiepreis ein zweites Signal relevant werden: das zeitvariable Netzentgelt nach § 14a Modul 3.'),
      ),
      p(
        t('Ein Speicher kann hinsichtlich seiner Stromaufnahme aus dem öffentlichen Netz eine steuerbare Verbrauchseinrichtung sein. Für neue Anlagen mit mehr als 4,2 kW Netzanschlussleistung greifen grundsätzlich die §14a-Regeln. Im Gegenzug gibt es reduzierte Netzentgelte.'),
      ),
      p(
        t('Mit Modul 3 können sich zusätzlich Hoch-, Standard- und Niedriglastzeiten ergeben. Dann kann eine Kilowattstunde sowohl wegen eines günstigen Börsenpreises als auch wegen eines günstigen Netzentgelt-Zeitfensters interessant sein – oder beide Signale können gegeneinander laufen.'),
      ),
      p(
        t('Mehr dazu in '),
        link('Zeitvariable Netzentgelte nach § 14a: Was Modul 3 bringt', '/strom-energiemanagement/zeitvariable-netzentgelte-paragraph-14a-modul-3'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('§ 14a bedeutet nicht, dass der Netzbetreiber deinen Speicher leerzieht')),
      p(
        t('§ 14a betrifft beim Stromspeicher die '),
        bold('Stromentnahme aus dem Netz – also das Einspeichern'),
        t('. Der Netzbetreiber kann in einer konkreten Engpasssituation den netzwirksamen Leistungsbezug begrenzen. Er erhält damit nicht das Recht, deinen Batteriespeicher nach Belieben zu entladen oder dessen Energie ins Netz zu schicken.'),
      ),
      p(
        t('Bei einer Steuerung über ein EMS kann eigener PV-Strom zusätzlich berücksichtigt werden. Das ist ein weiterer Grund, Netzbezug, PV-Leistung und Speichersteuerung nicht als getrennte Systeme zu planen.'),
      ),
    ),

    textBlock(
      h('h2', t('Der wichtige EEG-Punkt: Netzladen und spätere Netzeinspeisung')),
      p(
        t('Für ein typisches Eigenheim muss zwischen zwei Betriebsfällen unterschieden werden:'),
      ),
      p(
        bold('Fall 1: Netzstrom laden und später im eigenen Haus verbrauchen. '),
        t('Das ist die klassische Preisoptimierung dieses Artikels. Die Batterie ersetzt später teuren Netzbezug.'),
      ),
      p(
        bold('Fall 2: Netzstrom und PV-Strom im selben Speicher mischen und später aus dem Speicher ins öffentliche Netz einspeisen. '),
        t('Hier wird die EEG-Zuordnung relevant.'),
      ),
      p(
        t('Nach dem aktuell praktisch verfügbaren EEG-Modell – der sogenannten Ausschließlichkeitsoption – kann EEG-Förderung für aus dem Speicher eingespeisten Strom nur beansprucht werden, wenn im Speicher ausschließlich erneuerbarer Strom zwischengespeichert wurde. Wird zusätzlich Netzstrom eingespeichert, kann die Förderfähigkeit der Speichereinspeisung entfallen.'),
      ),
      p(
        t('Deshalb werden Systeme in der Praxis häufig so konfiguriert, dass entweder kein Netzstrom in den förderfähigen Speicher geladen wird oder dass nach Netzladung keine Energie aus dem Speicher ins öffentliche Netz zurückgespeist wird.'),
      ),
    ),

    hinweisBlock(
      'MiSpeL soll Mischspeicher flexibler machen – ist aber noch nicht einfach „fertig aktiv"',
      p(
        t('Das EEG enthält inzwischen eine Abgrenzungs- und eine Pauschaloption für gemischt geladene Speicher. Die konkrete Nutzung hängt aber von der Festlegung „Marktintegration von Speichern und Ladepunkten" (MiSpeL) der Bundesnetzagentur ab. Nach dem öffentlich dokumentierten Verfahrensstand ist MiSpeL 2026 weiterhin ein laufendes Festlegungsverfahren. Wer Netzladen mit späterer Netzeinspeisung kombinieren möchte, sollte deshalb den aktuellen Stand für sein Mess- und Vermarktungskonzept prüfen und nicht einfach eine App-Funktion aktivieren.'),
      ),
    ),

    textBlock(
      h('h2', t('Negative Strompreise: gute Gelegenheit – aber nicht automatisch')),
      p(
        t('Negative Strompreise sind das plakativste Argument für Netzladen. Wenn im Strommarkt viel Energie vorhanden ist, kann der variable Tarifpreis sehr niedrig werden. Das macht flexible Verbraucher und Speicher grundsätzlich wertvoll.'),
      ),
      p(
        t('Trotzdem gilt auch hier: Der Börsenpreis ist nicht der vollständige Haushaltsstrompreis. Und der Speicher sollte nicht geladen werden, wenn dadurch später eigener Solarstrom verdrängt wird.'),
      ),
      p(
        t('Wie negative Preise für PV, Speicher und E-Auto zusammenspielen, erklären wir in '),
        link('Negative Strompreise 2026: Problem für die PV-Anlage oder Chance für Speicher und E-Auto?', '/strom-energiemanagement/negative-strompreise-2026-pv-speicher-eauto'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ein gutes HEMS beim Netzladen entscheiden muss')),
      p(
        t('Eine sinnvolle Netzladefunktion braucht mehr als eine Preisliste. Das HEMS sollte mindestens folgende Größen berücksichtigen:'),
      ),
      ul(
        p(t('vollständiger Strombezugspreis je Zeitfenster,')),
        p(t('erwarteter Strompreis beim später vermiedenen Netzbezug,')),
        p(t('Systemwirkungsgrad des konkreten Speichers bei Lade- und Entladeleistung,')),
        p(t('PV-Ertragsprognose für den nächsten Tag,')),
        p(t('aktueller Speicherfüllstand und gewünschte Reserve,')),
        p(t('erwarteter Hausverbrauch,')),
        p(t('Wallbox- und Wärmepumpenverbrauch,')),
        p(t('zeitvariable Netzentgelte nach §14a, soweit genutzt,')),
        p(t('Batterieschonung und zulässige Ladezustandsbereiche,')),
        p(t('EEG- und Messkonzept, wenn der Speicher auch ins Netz einspeisen kann.')),
      ),
      p(
        t('Erst dann kann das System entscheiden, ob eine Kilowattstunde Netzstrom im Speicher tatsächlich einen höheren Wert bekommt – oder ob der Akku besser frei bleibt.'),
      ),
    ),

    textBlock(
      h('h2', t('Ein sinnvoller Ladefahrplan – vereinfachtes Beispiel')),
      p(
        t('Angenommen, für morgen ist ein sonniger Tag vorhergesagt. Der Speicher steht um Mitternacht bei 25 %. Zwischen 2 und 4 Uhr ist Netzstrom günstig, am Abend wird er teuer.'),
      ),
    ),

    tabelleBlock('Schlechte und gute Speicherstrategie im Vergleich', [
      {
        spalte1: '02:00 Uhr',
        spalte2: 'Schlecht: Speicher blind auf 100 % laden',
        spalte3: 'Gut: Nur so weit laden, wie bis zum PV-Fenster voraussichtlich gebraucht wird',
      },
      {
        spalte1: '08:00 Uhr',
        spalte2: 'Schlecht: Batterie steht bereits lange voll',
        spalte3: 'Gut: Speicher hat Reserve für Vormittag und noch freie Kapazität',
      },
      {
        spalte1: '12:30 Uhr',
        spalte2: 'Schlecht: PV-Überschuss kann nicht gespeichert werden',
        spalte3: 'Gut: PV lädt die bewusst freigehaltene Kapazität',
      },
      {
        spalte1: '19:00 Uhr',
        spalte2: 'Schlecht: Netzbezug trotz unnötiger Nachtladung möglich',
        spalte3: 'Gut: Speicher deckt den teuren Abendverbrauch',
      },
    ]),

    p(
      t('Der Unterschied ist nicht die Hardware. Es ist die '),
      bold('Prognosequalität und Betriebsstrategie'),
      t('.'),
    ),

    textBlock(
      h('h2', t('Wann Netzladen aus unserer Sicht sinnvoll sein kann')),
      ul(
        p(t('Der Preisabstand ist nach allen Tarifbestandteilen deutlich genug.')),
        p(t('Der konkrete Speicher arbeitet im relevanten Lade- und Entladebereich effizient.')),
        p(t('Für den nächsten Tag wird wenig oder nicht genug PV-Energie erwartet.')),
        p(t('Der gespeicherte Netzstrom ersetzt später tatsächlich teuren Netzbezug im Haus.')),
        p(t('Das HEMS berücksichtigt PV-Prognose und erwarteten Verbrauch.')),
        p(t('Die Batterie steht nach dem Laden nicht unnötig lange bei sehr hohem Ladezustand.')),
        p(t('§14a-, Mess- und EEG-Konzept passen zum vorgesehenen Betrieb.')),
      ),
    ),

    textBlock(
      h('h2', t('Wann wir den Speicher lieber nicht aus dem Netz laden würden')),
      ul(
        p(t('Der Preisunterschied beträgt nur wenige Cent und liegt nahe an den Systemverlusten.')),
        p(t('Am nächsten Tag wird viel PV-Überschuss erwartet und Speicherplatz wird gebraucht.')),
        p(t('Das System kennt nur den aktuellen Preis, aber keine PV- oder Verbrauchsprognose.')),
        p(t('Der Speicher ist bei geringer Entladeleistung ineffizient.')),
        p(t('Das Netzladen erzeugt zusätzliche Zyklen ohne nennenswerten wirtschaftlichen Vorteil.')),
        p(t('Garantiebedingungen oder Herstellerfunktionen begrenzen den vorgesehenen Betrieb.')),
        p(t('Das Mess- oder EEG-Konzept für eine mögliche Speichereinspeisung ist ungeklärt.')),
      ),
    ),

    textBlock(
      h('h2', t('Fünf typische Fehler beim dynamischen Netzladen')),
      p(
        bold('1. Nur den Börsenpreis ansehen. '),
        t('Entscheidend ist dein vollständiger Bezugspreis inklusive der tariflich relevanten Bestandteile.'),
      ),
      p(
        bold('2. Mit 98 % Datenblatt-Wirkungsgrad rechnen. '),
        t('Relevant ist der Systemwirkungsgrad des gesamten Lade- und Entladepfads – insbesondere bei realer Teillast.'),
      ),
      p(
        bold('3. Jeden Preisunterschied handeln. '),
        t('Ein Speicher sollte nicht für minimale Margen zusätzliche Energieumsätze fahren.'),
      ),
      p(
        bold('4. Die PV-Prognose ignorieren. '),
        t('Freier Speicherplatz für eigenen Solarstrom kann am nächsten Mittag mehr wert sein als günstiger Netzstrom in der Nacht.'),
      ),
      p(
        bold('5. Netzladen und Netzeinspeisung verwechseln. '),
        t('Für den Eigenverbrauch gespeicherter Netzstrom und eine spätere Speichereinspeisung ins öffentliche Netz sind regulatorisch nicht dasselbe.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Entscheidungscheck für bestehende Speicher')),
      p(
        t('Bevor wir bei einem bestehenden PV-Speicher dynamisches Netzladen aktivieren würden, würden wir diese Punkte prüfen:'),
      ),
      ul(
        p(t('Kann der Wechselrichter bzw. das Speichersystem Netzladen überhaupt freigeben?')),
        p(t('Kann die Funktion extern oder über ein offenes HEMS gesteuert werden?')),
        p(t('Wie effizient ist das System bei typischen Lade- und Entladeleistungen?')),
        p(t('Welche Garantiebedingungen gelten für Kapazität, Nutzung und Betriebsweise?')),
        p(t('Wie groß ist der verbleibende Netzbezug im Winter und in den Übergangszeiten?')),
        p(t('Wie hoch sind reale Preisunterschiede im konkreten dynamischen Tarif?')),
        p(t('Ist ein intelligentes Messsystem vorhanden?')),
        p(t('Greift §14a beim Netzbezug des Speichers?')),
        p(t('Kann der Speicher aus technischen Gründen ins Netz entladen und ist diese Funktion im EEG-/Messkonzept sauber behandelt?')),
      ),
      p(
        t('Erst danach lässt sich beurteilen, ob Netzladen ein echter Mehrwert ist oder lediglich eine hübsche Funktion in der Hersteller-App.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Einen Batteriespeicher aus dem Netz zu laden kann 2026 sinnvoll sein. Aber nur, wenn '),
        bold('Preisabstand, Effizienz, PV-Prognose und Betriebsstrategie zusammenpassen'),
        t('.'),
      ),
      p(
        t('Die HTW-Untersuchungen zeigen, warum die Rechnung knapper ist, als viele Apps suggerieren: Schon die Umwandlungsverluste können eine vermeintliche Preisdifferenz vollständig aufzehren. Dazu kommen Batteriealterung und die Frage, ob am nächsten Tag eigener Solarstrom in den Speicher passen muss.'),
      ),
      p(
        t('Der richtige Ansatz lautet deshalb nicht „immer laden, wenn Strom billig ist". Ein gutes HEMS lädt nur dann Netzstrom, wenn die '),
        bold('erwartete Gesamtersparnis'),
        t(' groß genug ist und die Energie später tatsächlich gebraucht wird.'),
      ),
      p(
        t('Genau daran erkennt man den Unterschied zwischen einem Speicher mit Tarif-App und einem intelligent betriebenen Energiesystem.'),
      ),
    ),

    ctaBlock({
      titel: 'Speicher nicht nur besitzen – sinnvoll betreiben',
      text:
        'Du hast bereits einen Stromspeicher oder planst PV, Speicher, Wallbox und Wärmepumpe gemeinsam? Wir prüfen, ob dynamisches Netzladen bei deinem System technisch möglich und wirtschaftlich sinnvoll ist – mit Blick auf Smart Meter, §14a, PV-Prognose, Wirkungsgrad und offene Energiemanagement-Schnittstellen.',
      buttonText: 'Energiesystem prüfen lassen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Darf ich meinen Batteriespeicher aus dem Stromnetz laden?',
      'Grundsätzlich können moderne Batteriespeicher technisch Netzstrom laden, sofern System, Wechselrichter und Betriebsweise das unterstützen. Bei PV-Anlagen müssen aber Messkonzept, §14a und insbesondere eine mögliche spätere Einspeisung aus dem Speicher berücksichtigt werden. Netzladen für späteren Eigenverbrauch und Netzladen mit anschließender Netzeinspeisung sind regulatorisch unterschiedlich zu bewerten.',
    ),
    faqItem(
      'Wann lohnt sich das Laden eines Speichers aus dem Netz?',
      'Es lohnt sich nur, wenn der spätere vermiedene Netzstrompreis hoch genug über dem Ladepreis liegt, um mindestens Lade-, Batterie- und Entladeverluste auszugleichen. Zusätzlich sollten Batteriebeanspruchung, PV-Prognose, Tarifkosten und gegebenenfalls zeitvariable Netzentgelte berücksichtigt werden.',
    ),
    faqItem(
      'Wie hoch muss der Preisunterschied beim Netzladen sein?',
      'Das hängt vom Wirkungsgrad des konkreten Systems ab. Die HTW Berlin zeigt 2026 ein Beispiel mit 25 ct/kWh Ladepreis und 35 ct/kWh später vermiedenem Strompreis. In diesem Fall muss der Systemwirkungsgrad mindestens rund 71 % betragen, damit die Netzstromspeicherung allein nach Umwandlungsverlusten überhaupt vorteilhaft ist. Batteriealterung ist dabei noch nicht eingerechnet.',
    ),
    faqItem(
      'Warum reicht der Wirkungsgrad aus dem Datenblatt nicht?',
      'Datenblätter nennen häufig maximale Wirkungsgrade in günstigen Betriebspunkten. Beim Netzladen zählt der gesamte Pfad vom Netz über Wechselrichter und Batterie bis zur späteren Entladung. Besonders bei kleinen Entladeleistungen können Wechselrichter deutlich ineffizienter arbeiten. Deshalb sollte mit realen Systemwirkungsgraden gerechnet werden.',
    ),
    faqItem(
      'Verschleißt Netzladen den Batteriespeicher?',
      'Jeder zusätzliche Energieumsatz trägt grundsätzlich zur zyklischen Nutzung der Batterie bei. Gleichzeitig spielen kalendarische Alterung, Temperatur und lange Standzeiten bei hohen Ladezuständen eine große Rolle. Ob ein zusätzlicher Ladezyklus wirtschaftlich sinnvoll ist, hängt deshalb vom konkreten Speicher und vom erzielten Preisvorteil ab; einen universellen Verschleißpreis pro kWh gibt es nicht.',
    ),
    faqItem(
      'Sollte ich meinen Speicher bei negativem Strompreis immer voll laden?',
      'Nein. Ein negativer Börsenpreis ist nicht automatisch dein vollständiger Endkundenpreis. Außerdem kann ein vollgeladener Speicher am nächsten sonnigen Tag keinen eigenen PV-Überschuss mehr aufnehmen. Ein HEMS sollte Preis, PV-Prognose, Speicherfüllstand und erwarteten Verbrauch gemeinsam betrachten.',
    ),
    faqItem(
      'Ist Netzladen im Winter sinnvoller als im Sommer?',
      'Häufig ja. Im Winter steht weniger PV-Energie zur Verfügung und der Speicher hat öfter freie Kapazität. Im Sommer kann eigener PV-Strom den Speicher häufig vollständig laden. Ob Netzladen sinnvoll ist, sollte trotzdem täglich anhand der Prognosen und Preise entschieden werden.',
    ),
    faqItem(
      'Brauche ich für dynamisches Netzladen einen dynamischen Stromtarif?',
      'Nicht zwingend technisch, aber wirtschaftlich entsteht der interessante Anwendungsfall vor allem bei zeitlich schwankenden Bezugspreisen. Für einen echten dynamischen Stromtarif ist ein intelligentes Messsystem erforderlich. Auch zeitvariable Netzentgelte nach §14a Modul 3 können zusätzliche Preisunterschiede erzeugen.',
    ),
    faqItem(
      'Fällt ein netzladender Stromspeicher unter §14a?',
      'Ein Stromspeicher gilt hinsichtlich der Stromentnahme aus dem öffentlichen Netz als steuerbare Verbrauchseinrichtung. Für neue Anlagen mit einer Netzanschlussleistung von mehr als 4,2 kW gelten grundsätzlich die §14a-Regelungen. Der normale Haushaltsstrom und die PV-Einspeisung werden dadurch nicht steuerbar.',
    ),
    faqItem(
      'Kann der Netzbetreiber meinen Speicher nach §14a entladen?',
      '§14a betrifft beim Stromspeicher die Stromentnahme beziehungsweise Einspeicherung aus dem Netz. Der Netzbetreiber erhält damit nicht pauschal das Recht, deinen Speicher zu entladen oder dessen Energie ins Netz einzuspeisen. Bei Engpässen kann der netzwirksame Leistungsbezug der steuerbaren Verbrauchseinrichtung begrenzt werden.',
    ),
    faqItem(
      'Kann ich Netzstrom laden und später aus dem Speicher ins Netz einspeisen?',
      'Technisch ist das möglich, energierechtlich aber anspruchsvoller. Unter der aktuell praktisch verfügbaren EEG-Ausschließlichkeitsoption kann die Förderfähigkeit der Speichereinspeisung entfallen, wenn im Speicher auch Netzstrom zwischengespeichert wurde. Neue Abgrenzungs- und Pauschaloptionen sollen Mischspeicher flexibler machen, hängen aber von der MiSpeL-Festlegung der Bundesnetzagentur ab. Das konkrete Mess- und Vermarktungskonzept sollte daher geprüft werden.',
    ),
    faqItem(
      'Was muss ein HEMS für intelligentes Netzladen können?',
      'Es sollte mindestens Strompreise, PV-Ertragsprognose, erwarteten Verbrauch, Speicherfüllstand, Wirkungsgrad und gewünschte Reserve berücksichtigen. Idealerweise fließen außerdem Wallbox, Wärmepumpe, §14a-Zeitfenster und die regulatorischen Grenzen einer möglichen Speichereinspeisung ein.',
    ),
  ],
}

await upsertRatgeberArticle(article)
