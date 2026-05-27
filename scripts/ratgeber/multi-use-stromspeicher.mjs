// scripts/articles/multi-use-stromspeicher.mjs

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
  titel: 'Multi-Use bei Stromspeicher: Wie ein Speicher mehrere Aufgaben gleichzeitig erledigt',
  slug: 'multi-use-stromspeicher',
  kategorie: 'stromspeicher',
  status: 'veroeffentlicht',
  teaser:
    'Ein Stromspeicher kann mehr als nur Sonnenstrom zwischenparken. Eigenverbrauch, Lastspitzenkappung, dynamische Tarife, Notstrom, Pool-Flexibilität – aus all diesen Use Cases lässt sich Mehrwert ziehen, wenn das System sie gleichzeitig bedienen kann. Das nennt sich Multi-Use. Wie das technisch funktioniert, warum die Reihenfolge der Use Cases zählt und wo der Unterschied zwischen ehrlichem Multi-Use und Marketing-Multi-Use liegt.',
  lesezeit: 14,

  seo: seo(
    'Multi-Use bei Stromspeicher: Mehrere Use Cases gleichzeitig | PEAK.Energy',
    'Eigenverbrauch, Lastspitzenkappung, dynamische Tarife, Pool-Flexibilität – wie ein Multi-Use-Speicher mehrere Erträge gleichzeitig stapelt. Mit konkreter Beispielrechnung für EFH und Gewerbe, technischen Voraussetzungen und der Differenz zwischen lokalem Multi-Use und Plattform-Modellen.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Multi-Use ist der Branchenbegriff für '),
      bold('ein Speicher, der mehrere Aufgaben gleichzeitig übernimmt'),
      t(': Eigenverbrauchsoptimierung, Lastspitzenkappung, Nutzung dynamischer Tarife, Notstrom, Bereitstellung von Flexibilität in einem Pool. Erst durch das Stapeln dieser Erträge wird ein Speicher wirklich wirtschaftlich.'),
    ),
    summaryPoint(
      t('Die Use Cases sind '),
      bold('nicht gleichberechtigt'),
      t('. Es gibt eine klare Hierarchie: Notstrom-Reserve und Lastspitzenkappung haben immer Vorrang vor Eigenverbrauch, Tarifoptimierung und Pool. Wer das nicht sauber priorisiert, verliert mehr, als er gewinnt.'),
    ),
    summaryPoint(
      t('Multi-Use funktioniert nur mit einem '),
      bold('prognosebasierten EMS'),
      t('. Reine Schwellenlogik („Wenn X passiert, dann Y") versagt – das System muss vorausschauen, planen und Use Cases gegeneinander abwägen.'),
    ),
    summaryPoint(
      t('Im Gewerbe ist der Stacking-Effekt deutlich größer als im EFH. '),
      bold('Aus 5.000 € Peak-Shaving-Ersparnis können in der Multi-Use-Konfiguration 15.000 bis 25.000 € pro Jahr werden'),
      t(' – mit Amortisationszeiten von 6 bis 10 Jahren statt 15 plus für isolierte Use Cases.'),
    ),
    summaryPoint(
      t('Voraussetzung sind offene Schnittstellen, ein '),
      bold('lokal arbeitendes EMS'),
      t(' und steuerbare Komponenten. Plattform-Modelle versprechen Multi-Use, holen den wirtschaftlichen Wert aber oft in die Cloud des Anbieters – nicht zum Speicher-Eigentümer.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('Ein Stromspeicher wird in den meisten Angeboten so verkauft, als hätte er genau einen Job: PV-Überschuss tagsüber zwischenspeichern, abends wieder abgeben, Eigenverbrauchsquote von 30 auf 70 Prozent heben. Das stimmt – als Einstiegslogik. Aber es ist '),
        bold('eine'),
        t(' Aufgabe von vielen, die derselbe Speicher gleichzeitig erledigen könnte.'),
      ),
      p(
        t('Wenn der Speicher um sechs Uhr morgens leer ist, weil die Familie abends viel gewaschen und geheizt hat – warum sollte er nicht in den günstigsten Nachtstunden zu 12 ct/kWh nachladen, um morgens den Bezug zu 35 ct/kWh zu vermeiden? Wenn der Gewerbebetrieb an einem bedeckten Wintertag um 7 Uhr eine vorhersehbare Lastspitze hat – warum sollte der Speicher nicht ab 5 Uhr gezielt vorgeladen sein? Wenn das Stromnetz an einem windigen Sonntagnachmittag negative Preise hat – warum sollte der Speicher nicht in dieser Stunde besonders viel aufnehmen?'),
      ),
      p(
        t('Genau das macht ein '),
        bold('Multi-Use-Speicher'),
        t(': mehrere Aufgaben gleichzeitig, intelligent priorisiert, prognosebasiert gesteuert. In der Branche ist Multi-Use seit einigen Jahren ein etablierter Begriff – große Anbieter (Tesvolt, Sungrow, BYD, andere) nutzen ihn aktiv. Im Privat- und Kleingewerbe-Bereich ist die Multi-Use-Idee aber bei den meisten Installateuren noch nicht angekommen.'),
      ),
      p(
        t('Dieser Artikel ordnet ein, was Multi-Use technisch und wirtschaftlich bedeutet, welche Use Cases existieren, wie sie priorisiert werden müssen, und wo der Unterschied zwischen ehrlichem lokalem Multi-Use und reinen Marketing-Versprechen liegt. Wer den Peak-Shaving-Kontext schon kennt, findet hier die holistische Sicht – wer noch nicht, kann beim '),
        link('Lastspitzenkappung-Artikel', '/stromspeicher/lastspitzenkappung-stromspeicher-gewerbe'),
        t(' anfangen.'),
      ),
    ),

    textBlock(
      h('h2', t('Die Use Cases im Detail')),
      p(
        t('Ein Stromspeicher kann mindestens sieben verschiedene Aufgaben übernehmen. Nicht jede ist für jeden Kunden relevant – aber ein Multi-Use-fähiges System sollte sie alle technisch beherrschen, damit es bei sich ändernden Bedingungen mitwächst.'),
      ),
      p(
        bold('1. Eigenverbrauchsoptimierung. '),
        t('Der klassische Einstieg. PV-Überschüsse werden zwischengespeichert und in Stunden ohne Erzeugung verbraucht. Eigenverbrauchsquoten steigen von 30 bis 40 % (ohne Speicher) auf 60 bis 80 % (mit Speicher). Ertragsmechanik: Differenz zwischen Strombezug (35 ct/kWh privat, 25 ct/kWh Gewerbe) und Einspeisung (6 bis 8 ct/kWh). Wert pro vermiedener Bezugs-kWh: 25 bis 30 ct.'),
      ),
      p(
        bold('2. Lastspitzenkappung (RLM). '),
        t('Nur für Gewerbekunden mit RLM-Anschluss relevant. Der Speicher kappt die viertelstündliche Bezugsspitze, um den Leistungspreis zu senken (typisch 50 bis 150 €/kW pro Jahr). Mehr dazu im '),
        link('Lastspitzenkappung-Artikel', '/stromspeicher/lastspitzenkappung-stromspeicher-gewerbe'),
        t('.'),
      ),
      p(
        bold('3. Physikalische Spitzenkappung. '),
        t('Schwester-Use-Case zur RLM-Variante, aber technisch motiviert: Der Speicher hält die tatsächliche Bezugsleistung unter der Anschlussgrenze, damit neue Verbraucher (Wallbox-Flotte, Wärmepumpe, neue Maschinen) angeschlossen werden können, ohne den Hausanschluss zu erweitern.'),
      ),
      p(
        bold('4. Time-of-Use (dynamische Tarife). '),
        t('Der Speicher lädt in günstigen Stunden und entlädt in teuren – im Privathaushalt typisch günstig nachts und mittags (PV-Überschuss-Stunden im Netz), teuer morgens und abends. Voraussetzung: ein dynamischer Stromtarif (Tibber, awattar, Octopus Energy und andere). Spread zwischen Höchst- und Niedrigstpreisen liegt aktuell oft bei 5 bis 15 ct/kWh.'),
      ),
      p(
        bold('5. Notstrom / Backup. '),
        t('Bei Stromausfall versorgt der Speicher das Haus weiter – je nach Konfiguration nur einzelne Stromkreise (Black-Start-fähige Geräte) oder das ganze Haus (Inselbetriebs-fähige Anlagen). Wirtschaftlich schwer quantifizierbar (was kostet ein Stromausfall?), aber für viele Kunden ein gewichtiges Argument.'),
      ),
      p(
        bold('6. Flexibilitätspool / Netzdienstleistung. '),
        t('Der Speicher stellt ungenutzte Kapazität für netzdienliche Aufgaben zur Verfügung – Regelenergie, Frequenzhaltung, Spitzenglättung im Verteilnetz. Funktioniert über Aggregatoren oder kooperative Pool-Modelle. Pilothafte Erträge aktuell typisch 50 bis 300 €/Jahr im EFH, 1.000 bis 5.000 €/Jahr im Gewerbe – mit steigender Tendenz.'),
      ),
      p(
        bold('7. Direktvermarktungsoptimierung. '),
        t('Für PV-Anlagen ab 100 kWp mit Direktvermarktungspflicht: Der Speicher verschiebt die Einspeisung in Stunden mit höheren Börsenpreisen, statt blind alles in der Mittagsspitze einzuspeisen, wenn die Marktwerte am niedrigsten sind. Im klassischen 10-kWp-EFH irrelevant, im Gewerbe ab 100 kWp ein realer Hebel.'),
      ),
    ),

    tabelleBlock('Multi-Use Use Cases im Überblick', [
      {
        spalte1: 'Eigenverbrauchsoptimierung',
        spalte2: 'Bezug auf PV-Eigenverbrauch verlagern',
        spalte3: 'Voraussetzung: PV + Speicher + Smart Meter',
      },
      {
        spalte1: 'Lastspitzenkappung (RLM)',
        spalte2: 'Leistungspreis im Gewerbe senken',
        spalte3: 'Nur für RLM-Kunden ab 100.000 kWh Jahresverbrauch',
      },
      {
        spalte1: 'Physikalische Spitzenkappung',
        spalte2: 'Hausanschluss vor Überlast schützen',
        spalte3: 'Bei wachsenden Verbrauchern ohne Anschlusserweiterung',
      },
      {
        spalte1: 'Time-of-Use',
        spalte2: 'Strompreis-Spread nutzen',
        spalte3: 'Voraussetzung: dynamischer Tarif (Tibber, awattar etc.)',
      },
      {
        spalte1: 'Notstrom / Backup',
        spalte2: 'Versorgung bei Netzausfall',
        spalte3: 'Voraussetzung: backup-fähiger Speicher und Wechselrichter',
      },
      {
        spalte1: 'Flexibilitätspool',
        spalte2: 'Erlöse aus Netzdienstleistungen',
        spalte3: 'Voraussetzung: steuerbares EMS, Pool-Vertrag',
      },
      {
        spalte1: 'Direktvermarktungsoptimierung',
        spalte2: 'Einspeisezeitpunkt verlagern',
        spalte3: 'Nur für Anlagen ab 100 kWp mit Direktvermarktung',
      },
    ]),

    textBlock(
      h('h2', t('Warum die Use Cases nicht gleichberechtigt sind')),
      p(
        t('In der Theorie würde ein Multi-Use-Speicher gleichzeitig sieben Aufgaben optimal erledigen. In der Praxis '),
        bold('konkurrieren die Use Cases um dieselbe Speicherkapazität'),
        t(' – und das System muss entscheiden, welcher Use Case wann Vorrang hat.'),
      ),
      p(
        t('Ein konkretes Konfliktbeispiel: Der Speicher ist um 14 Uhr zur Hälfte gefüllt. Ein dynamischer Tarif zeigt für 17 Uhr einen Hochpreis – Time-of-Use würde sagen: Speicher bis 17 Uhr aufladen, dann teuer entladen. Aber: Für 6 Uhr morgens ist ein Lastpeak vorhergesagt – Peak Shaving würde sagen: Speicher voll halten für die Spitze. Und der Pool-Aggregator hat gerade einen Bedarf an Regelenergie gemeldet – Pool würde sagen: jetzt entladen, wir kriegen Geld dafür.'),
      ),
      p(
        t('Wer entscheidet? Die '),
        bold('Use-Case-Hierarchie im EMS'),
        t('. Sinnvolle Priorisierung von oben nach unten:'),
      ),
      ul(
        p(
          bold('Priorität 1: '),
          t('Notstrom-Reserve. Eine Mindestladung wird immer vorgehalten, damit bei Netzausfall noch Energie verfügbar ist.'),
        ),
        p(
          bold('Priorität 2: '),
          t('Lastspitzenkappung. Eine verpasste Spitze macht die Jahres-Einsparung kaputt – Vorrang vor allen anderen Use Cases.'),
        ),
        p(
          bold('Priorität 3: '),
          t('Eigenverbrauchsoptimierung. Das ist der wirtschaftlich verlässlichste Use Case, der praktisch immer Mehrwert liefert.'),
        ),
        p(
          bold('Priorität 4: '),
          t('Time-of-Use. Wirtschaftlich opportunistisch, aber kalkulierbar.'),
        ),
        p(
          bold('Priorität 5: '),
          t('Flexibilitätspool. Zusätzlicher Ertrag, aber nur wenn keine anderen Aufgaben gefährdet sind.'),
        ),
        p(
          bold('Priorität 6: '),
          t('Direktvermarktungsoptimierung. Bei großen Anlagen relevant, aber nachrangig.'),
        ),
      ),
      p(
        t('Diese Hierarchie ist nicht in Stein gemeißelt – sie hängt von der konkreten Kundensituation ab. Ein Kunde ohne RLM-Anschluss braucht Punkt 2 nicht. Ein Kunde ohne dynamischen Tarif nicht Punkt 4. Aber das Prinzip ist überall gleich: '),
        bold('Nicht alle Use Cases sind gleich wertvoll – und sie können sich gegenseitig blockieren'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum prognosebasiert essentiell ist')),
      p(
        t('Eine Use-Case-Priorisierung allein reicht nicht. Das System muss zusätzlich '),
        bold('vorausschauen'),
        t(' – sonst trifft es Entscheidungen, die im Moment richtig sind, aber später teuer werden.'),
      ),
      p(
        t('Beispiel: Es ist 11 Uhr vormittags, der Speicher ist zu 80 % voll, dynamischer Tarif zeigt einen leichten Preisvorteil für jetziges Entladen. Reine Schwellenlogik (Time-of-Use-Schwelle überschritten → entladen) würde den Speicher leeren. Eine prognosebasierte Logik sieht: Mittagspeak bei Wetterprognose, danach Bewölkung, am Abend Lastspitze. Konsequenz: nicht entladen, sondern erst nachmittag laden und für die Abendspitze sparen.'),
      ),
      p(
        t('Was ein prognosebasiertes EMS braucht:'),
      ),
      ul(
        p(t('Wetterprognose für die nächsten 24 bis 72 Stunden (Sonneneinstrahlung, Temperatur)')),
        p(t('Lastgang-Historie der eigenen Anlage (was wird typisch wann verbraucht?)')),
        p(t('Strompreis-Forecast (bei dynamischen Tarifen oft 24 bis 36 Stunden im Voraus verfügbar)')),
        p(t('Bei Gewerbe: Produktionsplan oder Schicht-Plan, falls vorhanden')),
        p(t('Anlagenstatus: aktuelle Lade-/Entladekapazität, Speicherstand, Temperatur')),
        p(t('Externe Signale: Pool-Bedarf vom Aggregator, Netzbetreiber-Sperrzeiten')),
      ),
      p(
        t('Diese Daten werden idealerweise '),
        bold('lokal verarbeitet'),
        t(' – externe Signale kommen ins Haus, die Entscheidungen bleiben dort. Mehr zum Daten- und Steuerungsaspekt: '),
        link('Cloud-EMS vs. lokales EMS', '/stromspeicher/cloud-ems-vs-lokales-ems-energiedaten'),
        t('.'),
      ),
    ),

    hinweisBlock(
      'Ohne prognosebasiertes EMS ist Multi-Use nur ein Wort',
      p(
        t('In vielen Angeboten wird Multi-Use als reines Verkaufsargument verwendet – „kann alles" – ohne dass das System die nötige Intelligenz tatsächlich mitbringt. Reine Schwellenlogik („wenn Speicher > 80 % → entladen") funktioniert bei einem Use Case, kollabiert aber, sobald mehrere Use Cases gleichzeitig priorisiert werden müssen. '),
        bold('Vor dem Kauf prüfen, ob das EMS Prognose-Daten verarbeitet, eine konfigurierbare Use-Case-Hierarchie hat und Konflikte zwischen Use Cases sauber löst'),
        t('. Das sind technisch nicht alle Systeme – auch wenn das Datenblatt es nahelegt.'),
      ),
    ),

    textBlock(
      h('h2', t('Ertragsstapelung – was Multi-Use konkret bringt')),
      p(
        t('Wie viel Mehrertrag Multi-Use bringt, hängt stark von der Kundensituation ab. Zwei realistische Beispielrechnungen – ein EFH und ein Gewerbebetrieb – machen den Stacking-Effekt sichtbar. Beide konservativ gerechnet, ohne Strompreissteigerungs-Annahme.'),
      ),
      p(
        bold('Beispiel 1: Einfamilienhaus, 10 kWp PV, 10 kWh Speicher.'),
      ),
      ul(
        p(t('Reine PV-Eigenverbrauchsersparnis (ohne Speicher): ca. 800 €/Jahr')),
        p(t('Mit Speicher Eigenverbrauch (Quote 35 → 70 %): zusätzlich ca. 700 €/Jahr')),
        p(t('Mit Time-of-Use (4.000 kWh Restbezug × 5 ct Spread): zusätzlich ca. 200 €/Jahr')),
        p(t('Mit Flex-Pool (Pilotphase): zusätzlich ca. 100 €/Jahr')),
        p(t('Multi-Use-Gesamtertrag: ca. 1.800 €/Jahr')),
      ),
      p(
        t('Im EFH ist der Mehrertrag durch Multi-Use gegenüber „nur Speicher für Eigenverbrauch" überschaubar (rund 300 €/Jahr zusätzlich) – aber bei einer 10-kWh-Speicher-Investition von rund 8.000 € macht das den Unterschied zwischen 8 Jahren und 6 Jahren Amortisation aus.'),
      ),
      p(
        bold('Beispiel 2: Metallbaubetrieb, 150 kWp PV, 80 kWh Speicher mit 60 kW Leistung, RLM-Anschluss.'),
      ),
      ul(
        p(t('Reine PV-Eigenverbrauchsersparnis: ca. 24.000 €/Jahr')),
        p(t('Mit Speicher (Eigenverbrauchsquote 65 → 80 %): zusätzlich ca. 3.500 €/Jahr')),
        p(t('Lastspitzenkappung (Leistungspreis 250 → 200 kW): zusätzlich ca. 5.000 €/Jahr')),
        p(t('Time-of-Use (Gewerbe-Tarif, 100.000 kWh Restbezug × Spread): zusätzlich ca. 2.500 €/Jahr')),
        p(t('Flex-Pool (Pilotphase): zusätzlich ca. 1.500 €/Jahr')),
        p(t('Multi-Use-Gesamtertrag: ca. 36.500 €/Jahr')),
      ),
      p(
        t('Im Gewerbe ist der Stacking-Effekt deutlich stärker. Aus 24.000 € reiner PV-Ersparnis werden mit Multi-Use rund 36.500 €/Jahr – ein Plus von 12.500 €/Jahr durch den Speicher-Mehrnutzen. Bei einer Speicher-Zusatzinvestition von rund 100.000 € liegt die Speicher-Amortisation damit bei rund 8 Jahren – statt der 20 Jahre, die er als reiner Eigenverbrauchsbaustein bräuchte.'),
      ),
      p(
        t('Die konkreten Zahlen variieren je nach Lastprofil, Strompreis und Pool-Vergütung. Aber der Effekt ist robust: Im Gewerbe rechnet sich ein Speicher fast immer nur durch Multi-Use, im EFH ist es ein nennenswertes Plus.'),
      ),
    ),

    textBlock(
      h('h2', t('Technische Voraussetzungen für Multi-Use')),
      p(
        t('Damit Multi-Use technisch funktioniert, müssen mehrere Komponenten zusammenspielen. Das ist kein Standardpaket aus dem Katalog – es muss bei der Planung mitgedacht werden.'),
      ),
      p(
        bold('Offene Schnittstellen. '),
        t('Wechselrichter, Speicher, Wallbox und Wärmepumpe brauchen dokumentierte Protokolle – Modbus, OCPP, EEBUS, SG-Ready oder gleichwertige. Geschlossene Hersteller-Apps mit eigener Cloud sind für Multi-Use praktisch unbrauchbar.'),
      ),
      p(
        bold('Smart Meter / iMSys. '),
        t('Ohne präzise Echtzeit-Messung des Bezugs und der Einspeisung kann das EMS nicht steuern. Ab 7 kWp Erzeugungsleistung ohnehin Pflicht.'),
      ),
      p(
        bold('Lokales EMS. '),
        t('Die Steuerungslogik läuft im Haus oder im Betrieb, nicht in der Cloud des Anbieters. Externe Signale (Wetter, Preise, Pool-Bedarf) kommen rein, Entscheidungen bleiben drin. Das schützt Verbrauchsdaten und macht das System unabhängig von Anbieter-Wechseln.'),
      ),
      p(
        bold('Steuerbare Komponenten. '),
        t('Eine Wallbox muss vom EMS in Ladestrom und Ladestart steuerbar sein, nicht nur „smart" über eine Hersteller-App. Eine Wärmepumpe muss SG-Ready oder besser unterstützen. Ein Speicher muss in seinen Lade-/Entlade-Parametern fernsteuerbar sein.'),
      ),
      p(
        bold('Internetverbindung – aber nur für externe Daten. '),
        t('Für Wetterprognose, Strompreis-Forecast und Pool-Signale braucht das EMS Internetzugang. Aber: Bei Internetausfall sollte das System weiter funktionieren, mit den letzten verfügbaren Prognosen und den lokal vorhandenen Use Cases.'),
      ),
      p(
        bold('Dimensionierung. '),
        t('Ein Multi-Use-Speicher ist tendenziell etwas größer dimensioniert als ein reiner Eigenverbrauchsspeicher, weil er Reserve für Peak Shaving und Notstrom braucht. Im Gewerbe sind 100 bis 500 kWh typisch, im EFH 10 bis 20 kWh.'),
      ),
    ),

    tippBlock(
      'Bei Neuanlage Multi-Use-fähig planen, auch wenn noch nicht alles genutzt wird',
      p(
        t('Multi-Use lässt sich später nachrüsten – aber meist deutlich teurer als von Anfang an mitgedacht. Bei einer Neuanlage gehören Multi-Use-fähige Komponenten und ein offenes EMS in die Spezifikation, auch wenn aktuell nur Eigenverbrauch genutzt wird. Die Mehrkosten sind moderat (typisch 10 bis 20 % auf den Speicher-Anteil), die spätere Aufrüstung dagegen deutlich aufwendiger – weil dann oft Wechselrichter, EMS-Box oder Steuerbox getauscht werden müssen. Ein geschlossenes Plattform-Paket spart anfangs Geld, kostet aber spätestens beim ersten Erweiterungswunsch.'),
      ),
    ),

    textBlock(
      h('h2', t('Plattform-Modelle: warum die meisten enttäuschen')),
      p(
        t('Mit Multi-Use als Begriff werben heute viele Anbieter – nicht nur Hersteller, sondern auch Plattform-Modelle, die Speicher in einen Pool integrieren und Multi-Use als integralen Service vermarkten. „Pool-Pakete", „Flat-Tarif für Stromspeicher", „virtuelles Kraftwerk" – die Marketing-Begriffe variieren, das Geschäftsmodell ist meist ähnlich.'),
      ),
      p(
        t('Das Grundproblem: Multi-Use erzeugt wirtschaftlichen Mehrwert. Die Frage ist, wem dieser Mehrwert zufließt – dem Speicher-Eigentümer oder dem Plattform-Betreiber. In vielen aktuellen Modellen ist die Antwort: '),
        bold('großteils dem Plattform-Betreiber'),
        t('. Der Kunde bekommt eine Pauschal-Vergütung, der Anbieter optimiert im Hintergrund und zieht die meisten Erträge.'),
      ),
      p(
        t('Dazu kommt der Daten-Aspekt: Wer die Steuerung kontrolliert, kennt das Verbrauchsverhalten des Kunden im Detail. Das ist – wie wir im '),
        link('Cloud-EMS-Artikel', '/stromspeicher/cloud-ems-vs-lokales-ems-energiedaten'),
        t(' beschrieben haben – aussagekräftiger, als viele Kunden denken.'),
      ),
      p(
        t('Und es gibt einen dritten Punkt: Lock-in. Wer in ein Plattform-Modell einsteigt, bindet sich oft für 5 bis 20 Jahre an einen Anbieter. Wenn dieser Anbieter sein Modell ändert, seine Konditionen verschlechtert oder vom Markt verschwindet, ist der Kunde in einer schwachen Verhandlungsposition – sein Speicher ist hardware-seitig oft so konfiguriert, dass ein Wechsel des Plattform-Partners nicht trivial ist.'),
      ),
      p(
        t('Ehrliches Multi-Use sieht anders aus: Der Speicher bleibt im Eigentum und unter Kontrolle des Kunden, die Steuerung läuft lokal, externe Pool-Teilnahme ist optional und mit transparenten Erträgen. Genau das ist der Ansatz, den wir mit '),
        link('PEAK.Flex', '/peak-flex'),
        t(' verfolgen.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann sich Multi-Use lohnt – und wann nicht')),
      p(
        bold('Klar wirtschaftlich (Gewerbe). '),
        t('Für Gewerbe- und Landwirtschaftsbetriebe mit RLM-Anschluss ist Multi-Use praktisch die einzige Logik, die einen Speicher rechtfertigt. Reine Eigenverbrauchsoptimierung allein amortisiert sich im Gewerbe selten, weil die Eigenverbrauchsquote auch ohne Speicher schon hoch ist (siehe '),
        link('PV in der Landwirtschaft', '/solaranlage/pv-landwirtschaft-stalldach'),
        t('). Erst Multi-Use macht den Speicher wirtschaftlich.'),
      ),
      p(
        bold('Lohnt sich (EFH mit Optimierungswillen). '),
        t('Im Einfamilienhaus ist der Mehrertrag pro Jahr moderat (200 bis 400 €), aber bei einer Speicher-Lebensdauer von 15 bis 20 Jahren summiert sich das auf 3.000 bis 8.000 €. Lohnt sich vor allem, wenn ein dynamischer Stromtarif (Tibber, awattar) ohnehin im Einsatz ist – dann sind die Voraussetzungen praktisch schon da.'),
      ),
      p(
        bold('Genau prüfen (kleine EFH-Anlagen). '),
        t('Bei sehr kleinen Anlagen (5 kWp PV, 5 kWh Speicher) bleibt der absolute Mehrertrag durch Multi-Use klein. Wirtschaftlich noch sinnvoll, aber die Komplexität der Konfiguration steht in keinem guten Verhältnis – einfacher Eigenverbrauch reicht oft.'),
      ),
      p(
        bold('Eher zurückstellen (Bestandsanlagen mit geschlossenen Systemen). '),
        t('Wenn die bestehende Anlage in einem geschlossenen Plattform-Modell läuft (proprietäre Cloud, keine offenen Schnittstellen), ist Multi-Use technisch oft nicht nachrüstbar – jedenfalls nicht ohne signifikanten Aufwand. Hier wäre die Alternative ein Repowering bei der nächsten Anlagenerneuerung.'),
      ),
    ),

    textBlock(
      h('h2', t('PEAK.Flex als lokaler Multi-Use-Ansatz')),
      p(
        t('Unser PEAK.Flex-Konzept ist genau auf diese Logik ausgelegt: Multi-Use lokal organisiert, ohne Datenextraktion in fremde Clouds, mit transparenten Pool-Erträgen beim Speicher-Eigentümer.'),
      ),
      p(
        t('Konkret heißt das:'),
      ),
      ul(
        p(t('Steuerung läuft lokal auf einer offenen evcc-Basis, nicht in der Anbieter-Cloud')),
        p(t('Use-Case-Priorisierung ist konfigurierbar und transparent (Peak Shaving immer Vorrang, Pool nachrangig)')),
        p(t('Pool-Teilnahme ist optional – wer nicht will, bleibt mit den klassischen Use Cases (Eigenverbrauch, Time-of-Use, Notstrom) ausgestattet')),
        p(t('Bei Pool-Teilnahme: kooperatives Modell, Erträge bleiben proportional beim Speicher-Eigentümer')),
        p(t('Offene Schnittstellen, keine Plattform-Lock-ins')),
      ),
      p(
        t('PEAK.Flex ist heute noch ein Pilotprogramm, kein anonymes Massenprodukt. Mehr zum aktuellen Stand: '),
        link('PEAK.Flex Pilotprogramm', '/peak-flex'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Ausblick: Was als nächstes kommt')),
      p(
        t('Multi-Use ist heute schon real einsetzbar – wird aber in den nächsten Jahren um weitere Use Cases erweitert. Drei Entwicklungen, die absehbar sind:'),
      ),
      p(
        bold('Bidirektionales Laden (V2H/V2G). '),
        t('Das E-Auto wird zum mobilen Speicher. Vehicle-to-Home (Strom ins Haus zurück) und Vehicle-to-Grid (Strom ins Netz) sind technisch verfügbar (z. B. CCS-V2G ab 2026 in mehreren Modellen), regulatorisch teilweise noch in Klärung. Für Multi-Use-Architekturen ein massiver Hebel: ein 60-kWh-Auto-Akku ist deutlich größer als die meisten Heimspeicher.'),
      ),
      p(
        bold('Wärmepumpen-Integration. '),
        t('Wärmepumpen werden zunehmend ins EMS eingebunden – nicht nur als steuerbarer Verbraucher (SG-Ready), sondern als thermischer Speicher. Eine Vorlauftemperatur lässt sich um 2 bis 3 Grad anheben, der Heizungs-Puffer aufladen, wenn PV-Strom anliegt – das verschiebt thermische Energie in die Nacht, ohne dass ein elektrischer Speicher nötig wäre.'),
      ),
      p(
        bold('Quartiers- und WEG-Lösungen. '),
        t('Multi-Use ist nicht nur Einzelhaus oder Einzelbetrieb. Quartiersspeicher mit gemeinsamer Nutzung, Mieterstrom-Modelle mit lokaler Bilanzierung, Energiegemeinschaften – die regulatorische Grundlage steht teils, teils kommt sie noch. In den nächsten 3 bis 5 Jahren wird sich hier viel bewegen.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Multi-Use ist nicht Marketing, sondern eine konkrete technische und wirtschaftliche Logik: Ein Stromspeicher wird wirtschaftlich attraktiv erst dann, wenn er mehrere Aufgaben gleichzeitig übernehmen kann. Im Gewerbe ist das praktisch unumgänglich, im EFH ein deutlicher Mehrwert.'),
      ),
      p(
        bold('Was zu merken ist: '),
        t('Use Cases sind nicht gleichberechtigt, sie brauchen Priorisierung. Reine Schwellenlogik reicht nicht – es braucht prognosebasierte Steuerung. Die Architektur muss offen und lokal sein, sonst extrahiert ein Plattform-Anbieter den Mehrwert, statt ihn beim Kunden zu lassen.'),
      ),
      p(
        t('Wer heute eine PV-Anlage mit Speicher plant, sollte die Multi-Use-Fähigkeit von Anfang an mitdenken – auch wenn anfangs nur ein oder zwei Use Cases genutzt werden. Nachrüsten ist möglich, aber meist deutlich teurer als von Anfang an offen geplant.'),
      ),
      p(
        t('Wer dir ein geschlossenes Komplettpaket mit „Multi-Use inklusive Cloud-Service" verkauft, hat oft das eigene Geschäftsmodell mehr im Blick als deinen langfristigen Mehrwert. Die ehrliche Variante ist die offenere, die lokalere – und sie ist heute technisch verfügbar.'),
      ),
    ),

    ctaBlock({
      titel: 'Multi-Use-Konzept für deine Anlage prüfen lassen',
      text:
        'Du planst eine PV-Anlage mit Speicher und willst Multi-Use von Anfang an mitdenken? Oder du hast eine Bestandsanlage und fragst dich, welche Use Cases noch nachrüstbar sind? Wir prüfen am Niederrhein und im Ruhrgebiet beides – mit offener Architektur, lokalem EMS und ehrlicher Wirtschaftlichkeitsrechnung.',
      buttonText: 'Multi-Use prüfen lassen',
      buttonLink: '/peak-flex',
    }),
  ],

  faq: [
    faqItem(
      'Was bedeutet „Multi-Use" bei einem Stromspeicher?',
      'Multi-Use bezeichnet den gleichzeitigen Einsatz eines Speichers für mehrere Anwendungsfälle – typischerweise eine Kombination aus Eigenverbrauchsoptimierung, Lastspitzenkappung, Nutzung dynamischer Stromtarife, Notstrom und perspektivisch Bereitstellung von Flexibilität in einem Pool. Voraussetzung ist ein Energiemanagement-System, das die Use Cases priorisiert und prognosebasiert steuert. Multi-Use ist Branchenstandard-Begriff, kein PEAK-Energy-Eigenname.',
    ),
    faqItem(
      'Welche Use Cases sind im Einfamilienhaus relevant?',
      'Praktisch immer: Eigenverbrauchsoptimierung. Häufig: Time-of-Use (bei dynamischem Tarif), Notstrom (bei Backup-fähigem Speicher). Wachsend: Flexibilitätspool, bidirektionales Laden mit E-Auto. Selten relevant im EFH: RLM-Lastspitzenkappung (keine RLM-Messung), Direktvermarktung (Anlagen meist zu klein).',
    ),
    faqItem(
      'Welche Use Cases sind im Gewerbe relevant?',
      'Eigenverbrauch (immer), Lastspitzenkappung in RLM und physikalisch (oft), Time-of-Use (wenn dynamischer Gewerbetarif vorhanden), Notstrom (situativ wichtig), Direktvermarktungsoptimierung (Anlagen ab 100 kWp), Flexibilitätspool (wachsend). Im Gewerbe ist Multi-Use praktisch immer der einzige Weg, einen Speicher wirtschaftlich zu rechtfertigen.',
    ),
    faqItem(
      'Welche Reihenfolge haben die Use Cases?',
      'Sinnvolle Priorisierung: 1. Notstrom-Reserve, 2. Lastspitzenkappung, 3. Eigenverbrauch, 4. Time-of-Use, 5. Flexibilitätspool, 6. Direktvermarktungsoptimierung. Die genaue Reihenfolge hängt von der Kundensituation ab und sollte im EMS konfigurierbar sein. Was nicht passieren darf: Pool oder Tarif-Aufgaben gefährden Peak Shaving oder Notstrom-Reserve.',
    ),
    faqItem(
      'Was ist der Unterschied zwischen reaktivem und prognosebasiertem EMS?',
      'Ein reaktives EMS reagiert erst, wenn eine Schwelle überschritten ist – „Speicher voll → entladen". Das funktioniert bei einem Use Case, scheitert bei Multi-Use, weil sich Use Cases gegenseitig blockieren können. Ein prognosebasiertes EMS nutzt Wetter-, Last- und Preis-Prognosen, um Aufgaben vorausschauend zu planen – „Morgen früh erwartete Spitze → heute nacht laden, auch wenn jetzt der Tarif niedrig ist". Multi-Use funktioniert seriös nur prognosebasiert.',
    ),
    faqItem(
      'Lohnt sich Multi-Use im Einfamilienhaus überhaupt?',
      'Ja, aber mit Augenmaß. Der Mehrertrag durch Multi-Use gegenüber reinem Eigenverbrauchsspeicher liegt im EFH typisch bei 200 bis 400 €/Jahr – nicht riesig, aber bei 15 bis 20 Jahren Speicher-Lebensdauer summiert sich das auf 3.000 bis 8.000 €. Lohnt sich besonders, wenn ein dynamischer Stromtarif ohnehin im Einsatz ist. Im Gewerbe ist der Effekt dramatischer (oft 10.000+ €/Jahr Mehrertrag).',
    ),
    faqItem(
      'Kann ich Multi-Use auch in einer Bestandsanlage nachrüsten?',
      'Das hängt von den verbauten Komponenten ab. Wenn die bestehende Anlage offene Schnittstellen hat (Modbus, OCPP, EEBUS, SG-Ready), kann ein neues EMS in vielen Fällen aufgesetzt werden, ohne Speicher oder Wechselrichter zu tauschen. Wenn die Anlage in einem geschlossenen Plattform-System läuft (proprietäre Cloud, keine dokumentierten Schnittstellen), ist Nachrüstung oft unwirtschaftlich – dann wäre die Alternative ein Repowering bei der nächsten Anlagenerneuerung.',
    ),
    faqItem(
      'Was bringen Plattform-Modelle wie virtuelle Kraftwerke wirklich?',
      'Sie funktionieren technisch, holen aber den wirtschaftlichen Wert oft in die Cloud des Anbieters. Pauschal-Vergütungen pro Jahr sind für den Kunden meist deutlich niedriger als der reale Wert der bereitgestellten Flexibilität. Dazu kommt Plattform-Lock-in (lange Verträge, schwer kündbar) und der Datenaspekt (Verbrauchsverhalten wird detailliert ausgewertet). Ehrlichere Modelle setzen auf lokale Steuerung mit optionaler, transparenter Pool-Teilnahme.',
    ),
    faqItem(
      'Was ist mit bidirektionalem Laden (V2H/V2G)?',
      'Vehicle-to-Home (Strom aus dem Auto zurück ins Haus) und Vehicle-to-Grid (zurück ins Netz) sind technisch verfügbar – einzelne E-Autos und Wallboxen unterstützen es 2026 bereits. Regulatorisch ist V2G in Deutschland noch in Klärung (Doppelbesteuerung, Marktregeln). V2H ist schon nutzbar. Im Multi-Use-Kontext ein massiver Hebel: ein 60-kWh-Auto-Akku ist mehrfach größer als die meisten Heimspeicher.',
    ),
    faqItem(
      'Brauche ich für Multi-Use einen dynamischen Stromtarif?',
      'Nicht zwingend. Eigenverbrauchsoptimierung, Lastspitzenkappung und Notstrom funktionieren auch mit klassischem Tarif. Aber: Time-of-Use als zusätzlicher Ertragsbaustein braucht einen dynamischen Tarif. Wer den Multi-Use-Effekt voll ausschöpfen will, kombiniert Speicher mit Tibber, awattar, Octopus Energy oder einem vergleichbaren Anbieter. Der Wechsel ist meist unkompliziert, der Mehrertrag im EFH typisch 150 bis 300 €/Jahr.',
    ),
    faqItem(
      'Wie viel kostet ein Multi-Use-fähiges System mehr als ein Standard-System?',
      'Die Multi-Use-Komponenten (offenes EMS, steuerbare Wallbox, offene Wechselrichter-Schnittstellen) kosten bei Neuanlage typisch 10 bis 20 % mehr als ein geschlossenes Standard-Paket. Bei einer 20.000-€-Anlage also 2.000 bis 4.000 € Mehrinvestition. Diese Mehrkosten amortisieren sich im EFH innerhalb von 5 bis 8 Jahren über die zusätzlichen Erträge, im Gewerbe oft schon innerhalb von 2 bis 4 Jahren.',
    ),
  ],
}

await upsertRatgeberArticle(article)
