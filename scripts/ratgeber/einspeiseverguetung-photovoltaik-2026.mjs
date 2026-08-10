// scripts/articles/einspeiseverguetung-photovoltaik-2026.mjs

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
  titel: 'Einspeisevergütung Photovoltaik 2026: Was gilt aktuell?',
  slug: 'einspeiseverguetung-photovoltaik-2026',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'Seit dem 1. August 2026 gelten neue EEG-Fördersätze für Photovoltaikanlagen. Für typische Aufdachanlagen sind jetzt 7,70 ct/kWh für die ersten 10 kW bei Überschusseinspeisung vorgesehen; bei Volleinspeisung sind es 12,22 ct/kWh. Wir erklären die Leistungsstufen, rechnen Beispiele durch und zeigen, was 60-%-Regel, Smart Meter und negative Strompreise für neue Anlagen bedeuten.',
  lesezeit: 15,

  seo: seo(
    'Einspeisevergütung Photovoltaik 2026: aktuelle Sätze ab August | PEAK.Energy',
    'PV-Einspeisevergütung ab 1. August 2026: 7,70 ct/kWh bis 10 kW bei Überschusseinspeisung, Volleinspeisung, Leistungsstufen, 60-%-Regel und negative Strompreise erklärt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Für neue Gebäude-PV-Anlagen mit Inbetriebnahme vom '),
      bold('1. August 2026 bis 31. Januar 2027'),
      t(' beträgt die Einspeisevergütung bei Überschusseinspeisung 7,70 ct/kWh bis 10 kW, 6,66 ct/kWh für den Leistungsanteil über 10 bis 40 kW und 5,44 ct/kWh für den Anteil über 40 bis 100 kW.'),
    ),
    summaryPoint(
      t('Bei Volleinspeisung gelten höhere Sätze: '),
      bold('12,22 ct/kWh bis 10 kW und 10,24 ct/kWh für die darüberliegenden Leistungsanteile bis 100 kW'),
      t('.'),
    ),
    summaryPoint(
      t('Die Vergütung wird '),
      bold('stufenweise berechnet'),
      t('. Eine 15-kW-Anlage erhält also nicht für alle eingespeisten Kilowattstunden nur den Satz der zweiten Stufe.'),
    ),
    summaryPoint(
      t('Die gesetzlich bestimmten Solar-Fördersätze sinken nach aktueller Rechtslage '),
      bold('alle sechs Monate um 1 %'),
      t('. Die nächste reguläre Absenkung ist damit für den 1. Februar 2027 vorgesehen.'),
    ),
    summaryPoint(
      t('Für neue PV-Anlagen ist 2026 nicht nur die Vergütung wichtig: '),
      bold('60-%-Einspeisebegrenzung, Smart Meter und negative Strompreise'),
      t(' verändern, wann Einspeisung tatsächlich vergütet wird und wie wertvoll Eigenverbrauch und Speichersteuerung sind.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Einspeisevergütung 2026: Seit August gelten neue Werte')),
      p(
        t('Wer eine Photovoltaikanlage 2026 in Betrieb nimmt, sollte beim Thema Einspeisevergütung genau auf das Datum schauen. Seit dem '),
        bold('1. August 2026'),
        t(' gelten neue Fördersätze. Sie gelten für Anlagen, die bis einschließlich 31. Januar 2027 in Betrieb genommen werden.'),
      ),
      p(
        t('Für typische PV-Anlagen auf Wohngebäuden unterscheidet das EEG zwischen '),
        bold('Überschusseinspeisung'),
        t(' und '),
        bold('Volleinspeisung'),
        t('. Bei der Überschusseinspeisung wird der Solarstrom zuerst im Haus genutzt; nur der verbleibende Überschuss geht ins Netz. Bei der Volleinspeisung wird grundsätzlich die gesamte erzeugte Energie ins Netz abgegeben.'),
      ),
      p(
        t('Die Bundesnetzagentur veröffentlicht die jeweils geltenden Fördersätze. Entscheidend sind Inbetriebnahmedatum, Anlagenart und installierte Leistung.'),
      ),
    ),

    hinweisBlock(
      'Stand: 10. August 2026',
      p(
        t('Dieser Beitrag berücksichtigt die von der Bundesnetzagentur veröffentlichten EEG-Fördersätze für Inbetriebnahmen vom 1. August 2026 bis 31. Januar 2027 sowie die zu diesem Zeitpunkt geltende Fassung des EEG.'),
      ),
    ),

    textBlock(
      h('h2', t('Aktuelle Einspeisevergütung ab 1. August 2026')),
      p(
        t('Für Solaranlagen auf Gebäuden oder Lärmschutzwänden bis 100 kW gelten bei der klassischen Einspeisevergütung folgende Werte:'),
      ),
    ),

    tabelleBlock('Einspeisevergütung 1. August 2026 bis 31. Januar 2027', [
      {
        spalte1: 'Leistungsstufe',
        spalte2: 'Überschusseinspeisung',
        spalte3: 'Volleinspeisung',
      },
      {
        spalte1: 'bis 10 kW',
        spalte2: '7,70 ct/kWh',
        spalte3: '12,22 ct/kWh',
      },
      {
        spalte1: 'über 10 bis 40 kW',
        spalte2: '6,66 ct/kWh',
        spalte3: '10,24 ct/kWh',
      },
      {
        spalte1: 'über 40 bis 100 kW',
        spalte2: '5,44 ct/kWh',
        spalte3: '10,24 ct/kWh',
      },
    ]),

    p(
      t('Wichtig: Die Werte in der Tabelle sind '),
      bold('Leistungsstufen'),
      t('. Sie funktionieren ähnlich wie ein gestaffelter Tarif. Nicht die gesamte Anlage bekommt automatisch den Satz der höchsten erreichten Stufe.'),
    ),

    textBlock(
      h('h2', t('Beispiel: Was bekommt eine 15-kW-Anlage?')),
      p(
        t('Bei einer 15-kW-Anlage in Überschusseinspeisung werden die ersten 10 kW mit 7,70 ct/kWh bewertet. Nur die darüberliegenden 5 kW fallen in die zweite Stufe mit 6,66 ct/kWh.'),
      ),
      p(
        t('Gewichtet ergibt sich daraus für die Anlage ein durchschnittlicher Förderwert von rund '),
        bold('7,35 ct/kWh'),
        t(' für die eingespeiste Energie.'),
      ),
      p(
        t('Bei Volleinspeisung ergibt dieselbe Staffelung bei 15 kW einen gewichteten Wert von rund '),
        bold('11,56 ct/kWh'),
        t('.'),
      ),
    ),

    tabelleBlock('Beispiele für den gewichteten Vergütungssatz', [
      {
        spalte1: '10 kW',
        spalte2: '7,70 ct/kWh Überschuss',
        spalte3: '12,22 ct/kWh Voll',
      },
      {
        spalte1: '15 kW',
        spalte2: 'ca. 7,35 ct/kWh Überschuss',
        spalte3: 'ca. 11,56 ct/kWh Voll',
      },
      {
        spalte1: '20 kW',
        spalte2: 'ca. 7,18 ct/kWh Überschuss',
        spalte3: 'ca. 11,23 ct/kWh Voll',
      },
      {
        spalte1: '30 kW',
        spalte2: 'ca. 7,01 ct/kWh Überschuss',
        spalte3: 'ca. 10,90 ct/kWh Voll',
      },
    ]),

    tippBlock(
      'Nicht die PV-Anlage wegen der Vergütungsstufe kleiner bauen',
      p(
        t('Eine größere Anlage verliert nicht rückwirkend den höheren Satz für die unteren Leistungsstufen. Deshalb ist es in der Regel falsch, eine sinnvolle Dachbelegung nur deshalb zu verkleinern, um unter 10 kW zu bleiben. Dachfläche, Jahresertrag, zukünftiger Verbrauch und Wirtschaftlichkeit sollten gemeinsam betrachtet werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum die Werte niedriger sind als im ersten Halbjahr 2026')),
      p(
        t('Das EEG sieht für gesetzlich bestimmte Solar-Fördersätze seit 2024 eine feste Degression vor. Die anzulegenden Werte sinken '),
        bold('alle sechs Monate um 1 %'),
        t('.'),
      ),
      p(
        t('Deshalb gelten seit 1. August 2026 niedrigere Werte als für Anlagen, die zwischen Februar und Juli 2026 in Betrieb gegangen sind. Nach aktueller Gesetzeslage folgt die nächste reguläre Absenkung zum 1. Februar 2027.'),
      ),
      p(
        t('Entscheidend ist das tatsächliche '),
        bold('Inbetriebnahmedatum'),
        t(' der Anlage – nicht das Datum des Angebots oder der Bestellung.'),
      ),
    ),

    textBlock(
      h('h2', t('Einspeisevergütung und anzulegender Wert sind nicht dasselbe')),
      p(
        t('Im Zusammenhang mit dem EEG tauchen häufig zwei unterschiedliche Zahlen auf. Für die Marktprämie in der Direktvermarktung veröffentlicht die Bundesnetzagentur den sogenannten '),
        bold('anzulegenden Wert'),
        t('. Für die klassische Einspeisevergütung wird dieser Wert bei Solaranlagen nach § 53 EEG um 0,4 ct/kWh reduziert.'),
      ),
      p(
        t('Für die erste Leistungsstufe bis 10 kW liegt der anzulegende Wert ab August 2026 beispielsweise bei 8,10 ct/kWh in Teileinspeisung. Die tatsächliche Einspeisevergütung beträgt nach dem Abzug 7,70 ct/kWh.'),
      ),
      p(
        t('Wer Zahlen aus verschiedenen Tabellen vergleicht, sollte deshalb immer prüfen, ob gerade von '),
        bold('Einspeisevergütung oder Marktprämie'),
        t(' gesprochen wird.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie lange gilt der Vergütungssatz?')),
      p(
        t('Der bei der Inbetriebnahme maßgebliche Fördersatz bleibt für die Anlage grundsätzlich über den gesetzlichen Förderzeitraum erhalten. Nach § 25 EEG werden Marktprämie und Einspeisevergütung grundsätzlich für 20 Jahre gezahlt; bei gesetzlich bestimmten Werten reicht der Zeitraum bis zum 31. Dezember des zwanzigsten Zahlungsjahres.'),
      ),
      p(
        t('Die halbjährliche Degression verändert also nicht nachträglich die Vergütung einer bereits in Betrieb genommenen Anlage. Sie betrifft neue Anlagen, die erst im folgenden Vergütungszeitraum in Betrieb gehen.'),
      ),
    ),

    textBlock(
      h('h2', t('Überschusseinspeisung oder Volleinspeisung: Was ist sinnvoller?')),
      p(
        t('Die Volleinspeisung wird deutlich höher vergütet. Daraus folgt aber nicht automatisch, dass sie wirtschaftlich besser ist.'),
      ),
      p(
        t('Bei der Überschusseinspeisung ersetzt jede direkt selbst verbrauchte Kilowattstunde Solarstrom Netzbezug. Liegt der vermiedene Strompreis deutlich über der Einspeisevergütung, kann Eigenverbrauch wirtschaftlich wertvoller sein als die zusätzliche Vergütung der Volleinspeisung.'),
      ),
      p(
        t('Gerade mit Batteriespeicher, E-Auto oder Wärmepumpe ist die Überschusseinspeisung deshalb häufig die logischere Systemstrategie. Bei großen Dachflächen und geringem Eigenverbrauch kann eine Volleinspeisung dagegen interessant sein.'),
      ),
      p(
        t('Wie Eigenverbrauch und Autarkie richtig eingeordnet werden, erklären wir in '),
        link('Eigenverbrauch optimieren: Warum 100 % Autarkie nicht das richtige Ziel ist', '/strom-energiemanagement/eigenverbrauch-optimieren-100-prozent-autarkie'),
        t('.'),
      ),
    ),

    hinweisBlock(
      'Volleinspeisung muss dem Netzbetreiber mitgeteilt werden',
      p(
        t('Wer die erhöhte Vergütung für Volleinspeisung nutzen möchte, muss die gesetzlichen Voraussetzungen erfüllen und die Zuordnung rechtzeitig gegenüber dem Netzbetreiber erklären. Für Folgejahre ist eine Änderung grundsätzlich mit Mitteilung vor dem 1. Dezember für das nächste Kalenderjahr möglich.'),
      ),
    ),

    textBlock(
      h('h2', t('Die 60-%-Regel betrifft die Einspeisung – nicht die PV-Erzeugung')),
      p(
        t('Für viele neue PV-Anlagen ist 2026 zusätzlich § 9 EEG relevant. Bis ein intelligentes Messsystem und die erforderliche Steuerungstechnik eingebaut und die Ansteuerbarkeit erfolgreich getestet wurden, kann die maximale Wirkleistungseinspeisung am Netzverknüpfungspunkt auf '),
        bold('60 % der installierten Leistung'),
        t(' begrenzt sein.'),
      ),
      p(
        t('Das bedeutet nicht, dass die PV-Anlage nur 60 % produzieren darf. Strom, der gleichzeitig im Haus verbraucht oder in einen Batteriespeicher geladen wird, kann die Anlage weiterhin sinnvoll nutzen. Begrenzt wird die Einspeisung in das öffentliche Netz.'),
      ),
      p(
        t('Die Hintergründe erklären wir ausführlich in '),
        link('Solarspitzengesetz 2026: 60-%-Regel, negative Strompreise und Smart Meter', '/strom-energiemanagement/solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Negative Strompreise: Wann die EEG-Zahlung auf null fällt')),
      p(
        t('Ein weiterer Punkt wird für neue Anlagen wichtiger: § 51 EEG. In Zeiträumen mit negativem Spotmarktpreis kann sich der anzulegende Wert auf '),
        bold('null'),
        t(' reduzieren.'),
      ),
      p(
        t('Für Anlagen unter 100 kW gilt dabei eine Übergangsregel: Die Nullvergütung greift für diese Anlagen grundsätzlich erst nach Ablauf des Kalenderjahres, in dem sie mit einem intelligenten Messsystem ausgestattet wurden.'),
      ),
      p(
        t('Die betroffenen Zeiten gehen nicht vollständig verloren. § 51a verlängert den Förderzeitraum anhand der betroffenen Viertelstunden; bei Solaranlagen wird für diese Berechnung ein Faktor von 0,5 angewendet.'),
      ),
      p(
        t('Mehr dazu: '),
        link('Negative Strompreise 2026: Problem für die PV-Anlage oder Chance für Speicher und E-Auto?', '/strom-energiemanagement/negative-strompreise-2026-pv-speicher-eauto'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Bis 100 kW Einspeisevergütung – darüber wird Direktvermarktung wichtig')),
      p(
        t('Die klassische EEG-Einspeisevergütung nach § 21 Absatz 1 Nummer 1 ist für Anlagen mit einer installierten Leistung von '),
        bold('bis zu 100 kW'),
        t(' vorgesehen.'),
      ),
      p(
        t('Bei größeren Anlagen wird für einen vergüteten EEG-Stromverkauf regelmäßig die Direktvermarktung mit Marktprämie relevant. Für Gewerbedächer ist deshalb nicht nur die Höhe der Vergütung, sondern auch das Vermarktungsmodell ein Teil der Planung.'),
      ),
    ),

    hinweisBlock(
      'Die angekündigten +1,5 ct/kWh ab 40 kW sind noch nicht wirksam',
      p(
        t('Im Solarpaket I wurde für bestimmte Anlagen ab 40 kW eine Erhöhung um 1,5 ct/kWh vorgesehen. Die Bundesnetzagentur weist aktuell ausdrücklich darauf hin, dass diese Erhöhung noch nicht rechtlich wirksam ist, weil die erforderliche beihilferechtliche Genehmigung der Europäischen Kommission bislang nicht erteilt wurde. Für eine Wirtschaftlichkeitsrechnung sollte deshalb derzeit nicht mit diesem Aufschlag gerechnet werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bringt die Einspeisevergütung in Euro?')),
      p(
        t('Ein Beispiel zeigt die Größenordnung. Angenommen, eine 10-kW-Anlage speist im Jahr 5.000 kWh Überschuss ins Netz ein. Bei 7,70 ct/kWh ergeben sich daraus rund '),
        bold('385 Euro Einspeisevergütung pro Jahr'),
        t('.'),
      ),
      p(
        t('Wer dagegen 5.000 kWh zusätzlich selbst verbrauchen könnte und dadurch beispielsweise Netzstrom zu 30 ct/kWh ersetzt, würde rechnerisch 1.500 Euro Netzbezug vermeiden. In der Praxis sind solche Mengen und Preise individuell – das Beispiel zeigt aber, warum der Eigenverbrauch bei vielen Wohngebäuden wirtschaftlich stärker wirkt als die Einspeisevergütung allein.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum wir eine PV-Anlage nicht auf die Einspeisevergütung optimieren würden')),
      p(
        t('Die Einspeisevergütung ist eine sichere und wichtige Einnahmekomponente. Sie sollte aber nicht zum einzigen Planungsziel werden.'),
      ),
      p(
        t('Für eine gute Anlagenplanung betrachten wir mindestens:'),
      ),
      ul(
        p(t('geeignete und sinnvoll nutzbare Dachfläche,')),
        p(t('realistischen Jahresertrag und Verschattung,')),
        p(t('heutigen und zukünftigen Stromverbrauch,')),
        p(t('E-Auto und Wärmepumpe als zusätzliche Verbraucher,')),
        p(t('passende Speichergröße statt maximaler Speicherkapazität,')),
        p(t('Eigenverbrauch und Netzbezug,')),
        p(t('60-%-Regel und mögliche Abregelung,')),
        p(t('dynamische Strompreise und zukünftige Steuerbarkeit.')),
      ),
      p(
        t('Eine große PV-Anlage kann trotz niedrigerem durchschnittlichem Vergütungssatz wirtschaftlich besser sein, weil sie mehr Energie erzeugt – auch morgens, abends, im Winter und bei diffusem Licht.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit: Die neue Einspeisevergütung ab August 2026 ist nur ein Teil der Rechnung')),
      p(
        t('Seit dem 1. August 2026 gelten für typische Gebäude-PV-Anlagen neue EEG-Sätze. Bei Überschusseinspeisung sind es 7,70 ct/kWh für die ersten 10 kW, danach 6,66 ct/kWh bis 40 kW und 5,44 ct/kWh bis 100 kW. Die Volleinspeisung wird weiterhin deutlich höher vergütet.'),
      ),
      p(
        t('Entscheidend ist aber nicht, ob eine Anlage möglichst viel Vergütung kassiert. Entscheidend ist, wie gut sie '),
        bold('Eigenverbrauch, Einspeisung, Speicher, flexible Verbraucher und zukünftige Strompreise'),
        t(' miteinander verbindet.'),
      ),
      p(
        t('Die Einspeisevergütung bleibt damit ein wichtiger Sicherheitsanker – aber sie ist 2026 nicht mehr die ganze Geschichte einer Photovoltaikanlage.'),
      ),
    ),

    ctaBlock({
      titel: 'PV nicht nach einer Cent-Zahl planen',
      text:
        'Wir rechnen Dachfläche, Ertrag, Eigenverbrauch, Speicher und Einspeisung gemeinsam. So siehst du, welche Anlagengröße für dein Haus wirklich sinnvoll ist – mit aktuellen EEG-Werten statt alten Vergütungstabellen.',
      buttonText: 'PV-Anlage planen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Wie hoch ist die Einspeisevergütung ab August 2026?',
      'Für neue Gebäude-PV-Anlagen mit Inbetriebnahme vom 1. August 2026 bis 31. Januar 2027 beträgt die Einspeisevergütung bei Überschusseinspeisung 7,70 ct/kWh bis 10 kW, 6,66 ct/kWh für den Leistungsanteil über 10 bis 40 kW und 5,44 ct/kWh für den Anteil über 40 bis 100 kW.',
    ),
    faqItem(
      'Wie hoch ist die Volleinspeisevergütung ab August 2026?',
      'Bei Volleinspeisung gelten für neue Gebäude-PV-Anlagen 12,22 ct/kWh bis 10 kW und 10,24 ct/kWh für die darüberliegenden Leistungsanteile bis 100 kW.',
    ),
    faqItem(
      'Bekommt eine 15-kW-PV-Anlage nur 6,66 Cent pro kWh?',
      'Nein. Die Vergütung wird nach Leistungsstufen berechnet. Die ersten 10 kW werden bei Überschusseinspeisung mit 7,70 ct/kWh bewertet und nur die weiteren 5 kW mit 6,66 ct/kWh. Gewichtet ergibt das rund 7,35 ct/kWh.',
    ),
    faqItem(
      'Wann sinkt die Einspeisevergütung wieder?',
      'Nach aktueller Rechtslage sinken die gesetzlich bestimmten Solar-Fördersätze alle sechs Monate um 1 %. Nach dem aktuellen Zeitraum August 2026 bis Januar 2027 ist die nächste reguläre Absenkung zum 1. Februar 2027 vorgesehen.',
    ),
    faqItem(
      'Bleibt mein Vergütungssatz nach der Inbetriebnahme gleich?',
      'Grundsätzlich ja. Maßgeblich ist der bei der Inbetriebnahme geltende Fördersatz. Die späteren halbjährlichen Absenkungen betreffen neu in Betrieb genommene Anlagen und reduzieren nicht rückwirkend den Satz einer bereits laufenden Anlage.',
    ),
    faqItem(
      'Wie lange wird die Einspeisevergütung gezahlt?',
      'Nach §25 EEG werden Einspeisevergütung und Marktprämie grundsätzlich für 20 Jahre gezahlt. Bei gesetzlich bestimmten Werten reicht der Förderzeitraum bis zum 31. Dezember des zwanzigsten Zahlungsjahres.',
    ),
    faqItem(
      'Was ist der Unterschied zwischen Einspeisevergütung und anzulegendem Wert?',
      'Der anzulegende Wert ist unter anderem die Grundlage für die Marktprämie in der Direktvermarktung. Bei der klassischen Einspeisevergütung für Solaranlagen werden nach §53 EEG 0,4 ct/kWh vom anzulegenden Wert abgezogen. Deshalb sind die veröffentlichten Werte für Marktprämie und Einspeisevergütung unterschiedlich.',
    ),
    faqItem(
      'Ist Volleinspeisung besser als Eigenverbrauch?',
      'Nicht automatisch. Volleinspeisung wird höher vergütet, aber bei Überschusseinspeisung kann selbst verbrauchter Solarstrom teuren Netzbezug ersetzen. Welche Variante wirtschaftlich besser ist, hängt von Verbrauch, Anlagengröße, Strompreis und möglichem Eigenverbrauch ab.',
    ),
    faqItem(
      'Was bedeutet die 60-Prozent-Regel für meine PV-Anlage?',
      'Bei vielen neuen Anlagen ist die maximale Wirkleistungseinspeisung am Netzverknüpfungspunkt vorübergehend auf 60 % der installierten PV-Leistung begrenzt, bis Smart-Meter- und Steuerungstechnik eingebaut und erfolgreich getestet wurden. Die PV-Erzeugung selbst ist nicht auf 60 % begrenzt; Eigenverbrauch und Speicherladung können zusätzliche Solarleistung aufnehmen.',
    ),
    faqItem(
      'Bekomme ich bei negativen Strompreisen weiterhin Einspeisevergütung?',
      'Nach §51 EEG kann der anzulegende Wert bei negativem Spotmarktpreis auf null sinken. Für Anlagen unter 100 kW gilt dies grundsätzlich erst nach Ablauf des Kalenderjahres, in dem ein intelligentes Messsystem eingebaut wurde. §51a sieht zugleich eine Verlängerung des Förderzeitraums anhand der betroffenen Viertelstunden vor.',
    ),
    faqItem(
      'Gilt der angekündigte Zuschlag von 1,5 Cent ab 40 kW schon?',
      'Nein. Die Bundesnetzagentur weist aktuell darauf hin, dass die im Solarpaket I vorgesehene Erhöhung um 1,5 ct/kWh noch nicht rechtlich wirksam ist, weil die erforderliche beihilferechtliche Genehmigung der Europäischen Kommission noch nicht erteilt wurde.',
    ),
    faqItem(
      'Kann ich wegen der höheren Vergütung unter 10 kW bleiben?',
      'Das ist meist kein sinnvoller Grund, eine geeignete Dachfläche ungenutzt zu lassen. Die Vergütung ist gestaffelt: Auch bei einer größeren Anlage bleiben die ersten 10 kW in der höheren Leistungsstufe. Die optimale Größe sollte nach Dach, Verbrauch und Wirtschaftlichkeit bestimmt werden.',
    ),
  ],
}

await upsertRatgeberArticle(article)
