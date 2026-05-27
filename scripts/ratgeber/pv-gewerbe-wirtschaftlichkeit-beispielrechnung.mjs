// scripts/articles/pv-gewerbe-wirtschaftlichkeit-beispielrechnung.mjs

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
  titel: 'Lohnt sich PV auf dem Gewerbedach? Wirtschaftlichkeitsrechnung an einem Beispielbetrieb',
  slug: 'pv-gewerbe-wirtschaftlichkeit-beispielrechnung',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'Wer im Gewerbe eine PV-Anlage plant, bekommt oft schöne Renditeprognosen mit ungenannten Annahmen. Wir rechnen es anders herum durch – mit konservativen Werten, ohne Strompreissteigerung, an einem konkreten Metallbaubetrieb am Niederrhein. Was am Ende wirklich übrig bleibt, wie der Steuerhebel ehrlich wirkt – und wo die Rechnung kippen kann.',
  lesezeit: 14,

  seo: seo(
    'PV-Wirtschaftlichkeit im Gewerbe: Beispielrechnung 150 kWp | PEAK.Energy',
    'Konkrete Wirtschaftlichkeitsrechnung für eine 150-kWp-Anlage auf einem Gewerbedach am Niederrhein. Investition, Eigenverbrauch, Einspeisung, IAB und Sonderabschreibung – konservativ gerechnet, ehrlich erklärt, mit Sensitivität nach Strompreis und Eigenverbrauchsquote.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Konservativ rechnen heißt: '),
      bold('950 kWh/kWp Jahresertrag, kein Strompreisaufschlag, ehrliche Eigenverbrauchsquote'),
      t('. Was unter diesen Annahmen herauskommt, ist die Untergrenze – Aufschläge nach oben können später kommen.'),
    ),
    summaryPoint(
      t('Konkretes Beispiel: 150-kWp-Anlage auf einem Metallbaubetrieb mit 250.000 kWh Jahresverbrauch und 70 % Tagschicht-Anteil. Investition rund '),
      bold('150.000 € netto'),
      t(', Jahresertrag rund '),
      bold('24.000 €'),
      t(' im ersten Jahr.'),
    ),
    summaryPoint(
      t('Amortisation ohne steuerliche Hebel: '),
      bold('rund 6,5 Jahre'),
      t('. Mit IAB- und Sonderabschreibungs-Vorzieheffekt fühlt sie sich näher bei 5 Jahren an – aber das ist Liquidität, kein Steuergeschenk.'),
    ),
    summaryPoint(
      t('IAB und Sonderabschreibung sind '),
      bold('Steuerverlagerung, nicht zusätzliche Ersparnis'),
      t(' – über 20 Jahre saldiert ist der absolute Steuereffekt ähnlich wie bei reiner AfA. Aber der Liquiditätsvorteil in den ersten Jahren ist real.'),
    ),
    summaryPoint(
      t('Sensitivität: Strompreis ist der größte Hebel. Bei 30 ct/kWh statt 25 ct/kWh sinkt die Amortisation auf rund 5 Jahre, bei 20 ct/kWh steigt sie auf '),
      bold('über 8 Jahre'),
      t('. Eigenverbrauchsquote wirkt ähnlich stark.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('Wer im Gewerbe ein PV-Angebot bekommt, sieht oft Renditeprognosen, die schön aussehen – aber auf Annahmen beruhen, die im Angebot selten transparent stehen. Häufige Tricks: 1.050 kWh/kWp angesetzt statt realistischer 950 in unserer Region, jährliche Strompreissteigerung von 3 bis 5 % einkalkuliert, Eigenverbrauchsquote optimistisch geschätzt, Steuereffekte falsch verrechnet.'),
      ),
      p(
        t('Wir rechnen anders. '),
        bold('Konservativ heißt für uns: realistische Werte ansetzen, keine Strompreissteigerung einkalkulieren, ehrliche Eigenverbrauchsquote schätzen'),
        t('. Was dabei rauskommt, ist die ehrliche Untergrenze – die tatsächliche Anlage liefert in den meisten Fällen besser.'),
      ),
      p(
        t('Im Folgenden rechnen wir eine 150-kWp-Anlage auf einem typischen Metallbaubetrieb am Niederrhein durch. Zahlen aus dem Bauchladen wären zwar einfacher – aber genau das wollen wir nicht. Wer sich auf einen Investitionsvertrag einlässt, soll die Rechnung dahinter verstehen können.'),
      ),
      p(
        t('Vor dieser Rechnung lohnt sich der Blick auf den Kontext: '),
        link('Solaranlage auf dem Gewerbedach', '/solaranlage/solaranlage-gewerbedach'),
        t(' und – falls Speicher dazukommt – '),
        link('Lastspitzenkappung mit Stromspeicher', '/stromspeicher/lastspitzenkappung-stromspeicher-gewerbe'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Der Beispielbetrieb')),
      p(
        t('Ein Metallbaubetrieb am Niederrhein, 12 Mitarbeiter, klassischer Einschicht-Betrieb. Eckdaten:'),
      ),
      ul(
        p(t('Hallendach: Trapezblech, südausgerichtet, etwa 800 m² nutzbare Fläche, Statik geprüft und tragfähig')),
        p(t('Jahresverbrauch: 250.000 kWh (RLM-Anschluss in der Niederspannung)')),
        p(t('Lastprofil: rund 70 % des Verbrauchs zwischen 6 und 18 Uhr (Werktage), Nacht- und Wochenendverbrauch durch Druckluft-Leerlauf, IT und Beleuchtung')),
        p(t('Aktueller Gewerbestrompreis: 25 ct/kWh netto (Niederrhein-Mittel)')),
        p(t('Steuerstatus: GmbH, umsatzsteuerpflichtig, Grenzsteuersatz rund 30 % (Körperschaftsteuer plus Gewerbesteuer)')),
      ),
      p(
        t('Auf dieser Basis wird eine 150-kWp-Anlage geplant. Die Größe ist sauber an Dachfläche und Verbrauch angepasst – nicht maximal, sondern wirtschaftlich optimal.'),
      ),
    ),

    textBlock(
      h('h2', t('Anlage und Erzeugung')),
      p(
        t('Konservativ angesetzt mit '),
        bold('950 kWh/kWp Jahresertrag'),
        t(' (Niederrhein, modernes Modul, Süd-Trapezdach):'),
      ),
      ul(
        p(t('Installierte Leistung: 150 kWp')),
        p(t('Jahresertrag (Jahr 1): 142.500 kWh')),
        p(t('Eigenverbrauchsquote (PV-Eigenverbrauch / PV-Erzeugung): konservativ 65 %')),
        p(t('Direkt verbrauchter PV-Strom: rund 92.600 kWh/Jahr')),
        p(t('Einspeisung: rund 49.900 kWh/Jahr')),
        p(t('PV-Deckungsgrad (PV-Erzeugung / Verbrauch): 57 %')),
      ),
      p(
        t('Die 65 % Eigenverbrauchsquote sind bewusst am unteren Ende des realistischen Bereichs angesetzt. Bei einem Tagschicht-Betrieb sind 70 bis 75 % typisch erreichbar, aber wir wollen die Rechnung nicht schönen.'),
      ),
    ),

    textBlock(
      h('h2', t('Investitionskosten')),
      p(
        t('Eine schlüsselfertige 150-kWp-Anlage auf einem intakten Trapezblech-Dach kostet 2026 in unserer Region rund '),
        bold('1.000 €/kWp netto'),
        t(', also etwa 150.000 € netto. Aufgeschlüsselt:'),
      ),
      ul(
        p(t('Module und Wechselrichter: rund 90.000 € (60 %)')),
        p(t('Montagesystem: rund 18.000 € (12 %)')),
        p(t('Elektroinstallation (AC/DC, Zählerschrank, Verkabelung): rund 15.000 € (10 %)')),
        p(t('Projektierung, Planung, Netzanmeldung: rund 7.500 € (5 %)')),
        p(t('Anschluss und Inbetriebnahme: rund 9.000 € (6 %)')),
        p(t('Puffer für Unvorhergesehenes: rund 10.500 € (7 %)')),
      ),
      p(
        t('Wichtig: Diese Summe gilt für ein intaktes Dach mit ausreichendem Netzanschluss. Wenn das Dach saniert werden muss (z. B. Asbest) oder der Netzanschluss erweitert werden muss (Trafostation), kommen schnell 30.000 bis 100.000 € hinzu. Diese Sondersituationen sind in der Beispielrechnung '),
        bold('nicht'),
        t(' enthalten.'),
      ),
      p(
        t('Die Umsatzsteuer (19 % auf netto = 28.500 €) ist als Vorsteuer abzugsfähig, sofern der Betrieb umsatzsteuerpflichtig ist. Für die Wirtschaftlichkeitsrechnung wird mit dem Netto-Betrag von 150.000 € gerechnet.'),
      ),
    ),

    tabelleBlock('Jährliche Erträge und Betriebskosten (Jahr 1)', [
      {
        spalte1: 'Eigenverbrauch (Ertrag)',
        spalte2: '+ 23.150 €',
        spalte3: '92.600 kWh × 25 ct/kWh ersparter Strombezug',
      },
      {
        spalte1: 'Einspeisung (Ertrag)',
        spalte2: '+ 3.240 €',
        spalte3: '49.900 kWh × 6,5 ct/kWh (Direktvermarktung)',
      },
      {
        spalte1: 'Versicherung (Kosten)',
        spalte2: '− 500 €',
        spalte3: 'Gewerbe-PV-Versicherung, etwa 0,3 % der Investition',
      },
      {
        spalte1: 'Wartung und Monitoring (Kosten)',
        spalte2: '− 1.500 €',
        spalte3: 'Inspektion, Reinigung-Reserve, Monitoring-Dienst',
      },
      {
        spalte1: 'Direktvermarktung und Zähler (Kosten)',
        spalte2: '− 350 €',
        spalte3: 'Vermarktungsentgelt plus RLM-Messung',
      },
      {
        spalte1: 'Netto-Ertrag (Jahr 1)',
        spalte2: '≈ 24.000 €',
        spalte3: 'Vor Steuer und vor Degradation',
      },
    ]),

    textBlock(
      h('h2', t('Amortisation – die einfache Rechnung')),
      p(
        t('Reine Amortisation ohne Steuereffekte und ohne Degradation:'),
      ),
      p(
        bold('150.000 € Investition / 24.000 € Jahresertrag = 6,25 Jahre.'),
      ),
      p(
        t('Mit realistischer Degradation (0,5 % pro Jahr) liegt die tatsächliche Amortisation eher bei '),
        bold('6,5 bis 7 Jahren'),
        t('. Über 20 Jahre Laufzeit summieren sich die Erträge auf rund 455.000 € netto – die Anlage erwirtschaftet also etwa das Dreifache der ursprünglichen Investition.'),
      ),
      p(
        t('Das ist die Zahl ohne Steuerhebel und ohne Strompreissteigerung. Mit beiden wird es deutlich besser – aber genau hier müssen wir aufpassen, was wir uns selbst vorrechnen.'),
      ),
    ),

    textBlock(
      h('h2', t('Steuerliche Hebel – ehrlich erklärt')),
      p(
        t('IAB (Investitionsabzugsbetrag) und Sonderabschreibung nach § 7g EStG sind starke Hebel. Aber sie sind '),
        bold('Steuerverlagerung, nicht zusätzliche Steuerersparnis'),
        t('. Wer das nicht versteht, doppelt-rechnet sich in eine falsche Rendite hinein.'),
      ),
      p(
        t('Konkret an unserem Beispiel (Grenzsteuersatz 30 %):'),
      ),
      ul(
        p(t('IAB im Vorjahr: bis zu 50 % der Investition = 75.000 € Gewinnminderung → 22.500 € sofortige Steuerersparnis')),
        p(t('Sonderabschreibung Jahr 1: 20 % der Investition = 30.000 € Abschreibung → 9.000 € Steuerersparnis')),
        p(t('Reguläre AfA (linear, 20 Jahre) auf den Restwert nach IAB und SoAfA: gegenüber Vollabschreibung deutlich reduziert')),
      ),
      p(
        t('In Summe über 20 Jahre wird die gesamte Anschaffung steuerlich abgeschrieben – das ergibt bei 30 % Steuersatz 45.000 € Steuerersparnis insgesamt. Diese Summe ist '),
        bold('unabhängig'),
        t(' davon, ob man IAB und SoAfA nutzt oder reine 20-jährige AfA.'),
      ),
      p(
        t('Was IAB und SoAfA ändern, ist die '),
        bold('zeitliche Verteilung'),
        t('. Statt 2.250 € Steuerersparnis pro Jahr über 20 Jahre kommen rund 31.500 € in den ersten zwei Jahren auf einmal. Der absolute Steuereffekt ist gleich, aber der '),
        bold('Liquiditätseffekt'),
        t(' ist enorm – und damit auch der Effekt auf die wahrgenommene Amortisation.'),
      ),
    ),

    hinweisBlock(
      'Steuerhebel ist Liquidität, nicht Geschenk',
      p(
        t('In manchen Angeboten werden IAB und Sonderabschreibung als zusätzliche Rendite verkauft – „Mit Steuerhebel rechnet sich die Anlage schon nach 3 Jahren". Das stimmt in Bezug auf den Cashflow, aber nicht in Bezug auf den absoluten Steuereffekt. '),
        bold('Über die Gesamtlaufzeit gleicht sich der Steuereffekt aus'),
        t('. Was bleibt, ist ein realer Liquiditätsvorteil – wertvoll, aber nicht doppelt zu rechnen. Ein echter Zusatzeffekt entsteht nur, wenn der Grenzsteuersatz im IAB-Vorjahr deutlich höher ist als in den Folgejahren (z. B. durch einen Sondergewinn). Das ist die Ausnahme, nicht die Regel.'),
      ),
    ),

    textBlock(
      h('h2', t('Mit Steuerhebel: gefühlte Amortisation')),
      p(
        t('Trotz aller Vorsicht: Die Liquidität aus IAB und Sonderabschreibung verbessert die Investitionsrechnung deutlich, weil das Kapital schneller zurückfließt.'),
      ),
      ul(
        p(t('Investition: 150.000 €')),
        p(t('Steuerlicher Vorzieheffekt in den ersten 2 Jahren: rund 31.500 €')),
        p(t('Effektive Kapitalbindung nach 2 Jahren: rund 118.500 €')),
        p(t('Cashflow-Amortisation: rund 5 Jahre')),
      ),
      p(
        t('Das ist die ehrliche Zahl mit Steuerhebel. Sie ist real – aber sie spiegelt einen '),
        bold('Liquiditätseffekt'),
        t(', keinen zusätzlichen Ertrag.'),
      ),
    ),

    textBlock(
      h('h2', t('Sensitivität – wo die Rechnung wirklich kippt')),
      p(
        t('Eine Wirtschaftlichkeitsrechnung ist nur so gut wie ihre Annahmen. Drei Hebel verändern das Ergebnis am stärksten:'),
      ),
      p(
        bold('Strompreis. '),
        t('Bei 25 ct/kWh sind wir konservativ. Geht der Gewerbestrompreis hoch (was historisch der Trend war), verkürzt sich die Amortisation deutlich. Geht er runter, verlängert sie sich.'),
      ),
      p(
        bold('Eigenverbrauchsquote. '),
        t('Bei 65 % gerechnet. Wer durch besseres Lastmanagement oder einen Speicher auf 75 % kommt, verbessert die Rechnung spürbar. Wer aus Schichtprofil-Gründen nur 55 % erreicht, verschlechtert sie.'),
      ),
      p(
        bold('Einspeisevergütung. '),
        t('Bei 6,5 ct/kWh netto (Direktvermarktung). Bei sinkenden EEG-Vergütungen oder fallenden Börsenmarktwerten kann sich das verringern. Der Hebel ist aber kleiner als beim Strompreis, weil die Einspeisung nur 35 % der Erzeugung ausmacht.'),
      ),
    ),

    tabelleBlock('Sensitivitätsrechnung: Amortisation in verschiedenen Szenarien', [
      {
        spalte1: 'Basis (konservativ)',
        spalte2: '25 ct/kWh · 65 % Eigenverbrauch',
        spalte3: 'Rund 6,5 Jahre',
      },
      {
        spalte1: 'Strompreis höher',
        spalte2: '30 ct/kWh · 65 % Eigenverbrauch',
        spalte3: 'Rund 5,3 Jahre',
      },
      {
        spalte1: 'Strompreis niedriger',
        spalte2: '20 ct/kWh · 65 % Eigenverbrauch',
        spalte3: 'Rund 8,3 Jahre',
      },
      {
        spalte1: 'Eigenverbrauch höher',
        spalte2: '25 ct/kWh · 75 % Eigenverbrauch',
        spalte3: 'Rund 5,7 Jahre',
      },
      {
        spalte1: 'Eigenverbrauch niedriger',
        spalte2: '25 ct/kWh · 55 % Eigenverbrauch',
        spalte3: 'Rund 7,4 Jahre',
      },
      {
        spalte1: 'Strompreis steigt 3 %/Jahr',
        spalte2: '25 ct/kWh anfangs · langfristig steigend',
        spalte3: 'Rund 5,5 Jahre (Bonus-Szenario)',
      },
    ]),

    textBlock(
      h('h2', t('Was die Rechnung nicht hergibt')),
      p(
        t('Jede Wirtschaftlichkeitsrechnung ist ein Modell. Sie ist nur so robust wie ihre Annahmen, und sie blendet Faktoren aus, die im realen Betrieb relevant werden können.'),
      ),
      p(
        bold('Was hier nicht enthalten ist: '),
        t('Wechselrichtertausch nach 10 bis 15 Jahren (typisch 8.000 bis 15.000 € für eine 150-kWp-Anlage), eventuelle Modulausfälle nach Garantieende, Versicherungsbeitrags-Anpassungen, Netzentgeltänderungen, regulatorische Anpassungen (z. B. an der Direktvermarktungspflicht oder Marktprämienberechnung).'),
      ),
      p(
        bold('Was die Rechnung außerdem nicht abbildet: '),
        t('den strategischen Wert der Anlage. Eine 150-kWp-Anlage senkt nicht nur die Stromkosten, sie reduziert auch die Abhängigkeit von Strompreis-Schwankungen, schafft einen Hebel für Zertifizierung und ESG-Berichterstattung und ist die technische Grundlage für spätere Erweiterungen (Speicher, Wallbox, Wärmepumpe für die Hallenheizung).'),
      ),
      p(
        bold('Was die Rechnung ehrlich machen würde: '),
        t('eine konkrete Lastganganalyse statt Schätzung der Eigenverbrauchsquote, ein verbindliches Netzanschluss-Angebot statt Annahme, und eine Steuerberater-Bestätigung zu IAB-Fähigkeit und Grenzsteuersatz. Vor der Investitionsentscheidung gehören diese drei Schritte gemacht – nicht danach.'),
      ),
    ),

    tippBlock(
      'Drei Schritte vor jeder Investitionsentscheidung',
      p(
        t('Erstens: Lastgang vom Netzbetreiber anfordern (12 Monate Minimum, 24 besser). Zweitens: konkrete Netzanschluss-Anfrage an den Netzbetreiber stellen – nicht raten, ob die Spitze passt. Drittens: IAB-Fähigkeit und realistischen Grenzsteuersatz mit dem Steuerberater abstimmen. Diese drei Punkte kosten kein Geld und keine zwei Wochen, ändern die Wirtschaftlichkeitsrechnung aber substantiell.'),
      ),
    ),

    textBlock(
      h('h2', t('Was sich mit Speicher und Multi-Use ändert')),
      p(
        t('Diese Rechnung ist eine reine PV-Rechnung. Im Gewerbe ist das oft nur der Anfang. Wer einen Speicher hinzunimmt, verschiebt mehrere Hebel gleichzeitig:'),
      ),
      ul(
        p(t('Eigenverbrauchsquote kann von 65 auf 75–80 % steigen')),
        p(t('Bei RLM-Anschluss: Leistungspreis-Einsparung durch Peak Shaving')),
        p(t('Bei dynamischen Tarifen: zusätzlicher Ertrag durch Time-of-Use')),
        p(t('Bei wachsendem Bedarf: physikalische Spitzenkappung statt Netzausbau')),
      ),
      p(
        t('Die Rechnung wird damit komplexer, aber meist auch besser. Wie das im Detail aussieht, ist im Artikel zu '),
        link('Lastspitzenkappung mit Stromspeicher', '/stromspeicher/lastspitzenkappung-stromspeicher-gewerbe'),
        t(' beschrieben. Für unseren Beispielbetrieb wäre ein Multi-Use-Speicher mit 50 bis 100 kWh die naheliegende Erweiterung – die Wirtschaftlichkeit dieser Erweiterung steht und fällt aber mit dem Lastgang.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Unter konservativen Annahmen rechnet sich eine 150-kWp-PV-Anlage auf einem typischen Gewerbedach am Niederrhein in '),
        bold('6 bis 7 Jahren'),
        t(' (ohne Steuerhebel). Mit IAB und Sonderabschreibung fühlt sich die Amortisation näher bei 5 Jahren an – das ist ein realer Liquiditätsvorteil, aber kein zusätzliches Steuergeschenk. Über 20 Jahre Laufzeit erwirtschaftet die Anlage rund das Dreifache der Investition.'),
      ),
      p(
        t('Was diese Rechnung von vielen Angeboten unterscheidet: '),
        bold('keine ausgedachte Strompreissteigerung, keine geschönte Eigenverbrauchsquote, keine doppelte Steuerverbuchung'),
        t('. Was am Ende übrig bleibt, ist die ehrliche Untergrenze – und sie ist gut genug.'),
      ),
      p(
        t('Wenn ein Anbieter dir eine Amortisation unter 4 Jahren ohne Speicher und ohne Sondersituation verspricht, lohnt ein zweiter Blick auf die Annahmen. Meistens steckt darin entweder eine Strompreissteigerungs-Spirale, eine optimistische Ertragsschätzung – oder die doppelte Verbuchung des Steuerhebels.'),
      ),
    ),

    ctaBlock({
      titel: 'Ehrliche Rechnung für dein Dach',
      text:
        'Du willst wissen, wie eine PV-Anlage auf deinem Gewerbedach am Niederrhein oder im Ruhrgebiet tatsächlich rechnet? Wir kalkulieren auf Basis deines Lastgangs, deiner Stromkosten und deiner Steuersituation – mit konservativen Annahmen, ohne Schönrechnerei.',
      buttonText: 'Wirtschaftlichkeit prüfen lassen',
      buttonLink: '/loesungen/gewerbe-kmu',
    }),
  ],

  faq: [
    faqItem(
      'Warum rechnet ihr mit 950 kWh/kWp und nicht mit 1.050?',
      'Weil 950 kWh/kWp in unserer Region (Niederrhein, Ruhrgebiet) der ehrliche konservative Wert für ein Süd-Dach mit moderner Modultechnik ist. Bessere Anlagen liefern 1.000 bis 1.050 kWh/kWp – das ist dann das Upside, nicht das Versprechen. Wer von Anfang an mit 1.050 rechnet, hat keine Reserve, wenn das Dach leicht verschattet, etwas anders ausgerichtet oder das Wetterjahr unterdurchschnittlich ist.',
    ),
    faqItem(
      'Warum kalkuliert ihr ohne Strompreissteigerung?',
      'Weil eine Strompreissteigerung von 3 bis 5 % jährlich, wie sie viele Angebote ansetzen, eine Annahme ist, kein Fakt. Historisch ist der Gewerbestrompreis tendenziell gestiegen, kann aber auch fallen (wie in einzelnen Jahren bereits passiert). Eine ehrliche Rechnung sollte auch dann funktionieren, wenn der Strompreis stabil bleibt. Wenn er steigt, ist das eine Verbesserung des Ergebnisses – kein Bestandteil der Grundrechnung.',
    ),
    faqItem(
      'Was, wenn der Eigenverbrauch niedriger ausfällt als kalkuliert?',
      'Dann verlängert sich die Amortisation. Bei 55 % statt 65 % Eigenverbrauchsquote liegt die Amortisation in unserem Beispiel bei rund 7,4 statt 6,5 Jahren. Deshalb ist eine Lastganganalyse vor der Anlagenauslegung so wichtig – sie verhindert, dass man eine zu große Anlage baut, deren Überschüsse zu billiger Einspeisung gezwungen sind.',
    ),
    faqItem(
      'Wie wirken IAB und Sonderabschreibung konkret?',
      'IAB erlaubt, bis zu 50 % der voraussichtlichen Investitionskosten bis zu drei Jahre vor der Anschaffung gewinnmindernd geltend zu machen. Die Sonderabschreibung ergänzt das durch 20 % zusätzliche Abschreibung im ersten Jahr und in den vier Folgejahren. In Summe lassen sich rund 70 % der Investitionskosten in den ersten Jahren steuerlich verbuchen. Wichtig: Das ist eine zeitliche Verlagerung der Steuerersparnis, kein zusätzlicher Effekt. Die reguläre AfA reduziert sich entsprechend.',
    ),
    faqItem(
      'Was kostet eine 150-kWp-Anlage realistisch?',
      'In unserer Region 2026 liegt der Richtpreis bei rund 1.000 €/kWp netto für eine schlüsselfertige Anlage auf einem intakten Trapezblech-Dach – also rund 150.000 € netto für 150 kWp. Bei Flachdach mit Aufständerung kann es etwas mehr werden, bei sanierungsbedürftigem Dach oder Mittelspannungsanschluss deutlich. Pauschal pro kWp gilt: bei größeren Anlagen sinkt der Stückpreis, bei kleineren steigt er.',
    ),
    faqItem(
      'Was kostet Wartung und Versicherung im Jahr?',
      'Versicherung etwa 0,3 bis 0,5 % der Investitionskosten pro Jahr – bei 150.000 € also 450 bis 750 €. Wartung und Monitoring rund 1.000 bis 2.500 € pro Jahr (Inspektion, Modul-Reinigung bei Bedarf, Monitoring-Dienst). Direktvermarktung kostet rund 0,2 bis 0,5 ct pro eingespeister kWh. Zusammen rund 1,3 bis 2 % der Investition pro Jahr – in unserer Rechnung mit 2.350 € konservativ angesetzt.',
    ),
    faqItem(
      'Wie ändert sich die Rechnung mit zusätzlichem Speicher?',
      'Der Speicher kostet extra (etwa 60.000 bis 120.000 € für 50 bis 100 kWh nutzbar im Gewerbebereich), erhöht aber die Eigenverbrauchsquote auf 75 bis 80 % und ermöglicht zusätzlich Peak Shaving, Time-of-Use und perspektivisch Flexibilitätsvermarktung. Wirtschaftlich attraktiv wird der Speicher meist im Multi-Use-Konzept, nicht als Einzelinvestition. Details dazu in unserem Artikel zur Lastspitzenkappung.',
    ),
    faqItem(
      'Was passiert nach 20 Jahren?',
      'Die Module laufen typischerweise weiter mit etwa 85 % ihrer ursprünglichen Leistung (Garantie meist 25 oder 30 Jahre auf 80 bis 87 % Leistung). Die EEG-Förderung endet nach 20 Jahren, die Einspeisung erfolgt dann zum Marktwert (deutlich niedriger). Wirtschaftlich sinnvoll wird die Anlage dann, wenn der Eigenverbrauch hoch ist – oder Repowering steht an. Über 20 Jahre hinaus rechnen wir bewusst nicht, weil zu viele Unbekannte ins Spiel kommen.',
    ),
    faqItem(
      'Wie wirkt sich der Marktwert bei Direktvermarktung aus?',
      'Bei Direktvermarktungspflicht ab 100 kWp bekommt der Anlagenbetreiber den Marktwert (Börsenpreis) plus die Marktprämie. Zusammen ergibt sich der „anzulegende Wert" (aktuell rund 7,8 ct/kWh für Dachanlagen 100-1.000 kWp). Davon ab gehen Vermarktungsentgelte des Direktvermarkters (rund 0,2 bis 0,5 ct/kWh). Netto bleibt rund 6,5 ct/kWh – das ist der Wert, mit dem wir in der Beispielrechnung kalkulieren.',
    ),
    faqItem(
      'Lohnt sich PV im Gewerbe trotz schwankender Förderbedingungen?',
      'Ja. Die wesentliche Wirtschaftlichkeit kommt im Gewerbe aus dem Eigenverbrauch, nicht aus der Einspeisevergütung. Selbst bei deutlich sinkenden EEG-Sätzen bleibt der Eigenverbrauch (25 ct/kWh erspartes Bezugsentgelt vs. 6,5 ct/kWh Einspeisung) der Haupthebel. Solange Eigenverbrauchsquote und Strompreis stimmen, ist die Rechnung robust gegenüber Förderkürzungen.',
    ),
  ],
}

await upsertRatgeberArticle(article)
