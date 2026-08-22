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
  titel: '40 Jahre Garantie auf Solarmodule: Was Produkt- und Leistungsgarantie wirklich wert sind',
  slug: 'solarmodule-40-jahre-garantie-produkt-leistung',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    '40 Jahre Garantie klingt nach 40 Jahren Rundum-sorglos. So einfach ist es nicht. Wir erklären den Unterschied zwischen Produkt- und Leistungsgarantie, was im Garantiefall wirklich zählt und warum Garantiebedingungen wichtiger sind als die größte Jahreszahl im Prospekt.',
  lesezeit: 11,

  seo: seo(
    '40 Jahre Garantie auf Solarmodule: Was bedeutet das? | PEAK.Energy',
    'Produktgarantie, Leistungsgarantie und gesetzliche Mängelrechte bei PV-Modulen: Was 40 Jahre Garantie wirklich bedeuten und worauf Käufer achten sollten.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Eine '),
      bold('40-jährige Produktgarantie'),
      t(' und eine 40-jährige Leistungsgarantie sind zwei verschiedene Zusagen. Die eine betrifft Mängel am Produkt, die andere eine zugesagte Mindestleistung über die Zeit.'),
    ),
    summaryPoint(
      t('Eine Herstellergarantie besteht '),
      bold('zusätzlich zu gesetzlichen Mängelrechten'),
      t('. Entscheidend sind der konkrete Garantiegeber und die Bedingungen des tatsächlich gekauften Modells.'),
    ),
    summaryPoint(
      t('Eine lange Garantie bedeutet nicht automatisch, dass im Schadenfall '),
      bold('jede Arbeits-, Transport-, Gerüst- oder Austauschkostenposition'),
      t(' übernommen wird.'),
    ),
    summaryPoint(
      t('Bei einer Leistungsgarantie zählt nicht, ob ein Modul nach Jahrzehnten noch funktioniert, sondern ob seine gemessene Leistung '),
      bold('unter die zugesagte Garantiekurve'),
      t(' gefallen ist und die Garantiebedingungen erfüllt sind.'),
    ),
    summaryPoint(
      t('Für die Anlagenentscheidung sind deshalb neben der Laufzeit auch '),
      bold('Garantieinhalt, Hersteller, Abwicklung, Dokumentation und Systemplanung'),
      t(' wichtig.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('40 Jahre Garantie – heißt das wirklich 40 Jahre Ruhe?')),
      p(
        t('Solarmodule werden heute mit immer längeren Garantiezeiten beworben. 25 oder 30 Jahre sind längst keine Seltenheit mehr. Bei der 2026 vorgestellten AIKO Z-Serie nennt der Hersteller sogar '),
        bold('40 Jahre Produktgarantie und 40 Jahre Leistungsgarantie'),
        t('. Das ist ein starkes Signal – aber nur, wenn man versteht, was diese beiden Garantien tatsächlich versprechen.'),
      ),
      p(
        t('Denn „40 Jahre Garantie“ ist kein pauschaler Vertrag, nach dem ein Installateur vier Jahrzehnte lang kostenlos aufs Dach fährt und jedes Problem beseitigt. Garantie ist eine zusätzliche Zusage mit definiertem Umfang. Das Bürgerliche Gesetzbuch stellt ausdrücklich klar, dass eine Garantie neben den gesetzlichen Mängelrechten besteht. Welche Leistung aus der Garantie folgt, richtet sich nach der Garantieerklärung.'),
      ),
      p(
        t('Den grundsätzlichen Unterschied zwischen freiwilliger Garantie und gesetzlicher Mängelhaftung erklären wir ausführlich in '),
        link('Garantie vs. Gewährleistung bei der Solaranlage', '/solaranlage/garantie-vs-gewaehrleistung-pv-anlage'),
        t('. Hier geht es eine Ebene tiefer: Was sagen Produkt- und Leistungsgarantie eines Moduls wirklich aus?'),
      ),
    ),

    tabelleBlock('Produktgarantie und Leistungsgarantie', [
      {
        spalte1: 'Produktgarantie',
        spalte2: 'Mängel am Modul nach den Garantiebedingungen',
        spalte3: 'Zum Beispiel Material- oder Verarbeitungsfehler, sofern sie vom Garantieumfang erfasst sind',
      },
      {
        spalte1: 'Leistungsgarantie',
        spalte2: 'Zugesagte Mindestleistung über einen Zeitraum',
        spalte3: 'Relevant, wenn die gemessene Modulleistung unter die definierte Garantiekurve fällt',
      },
      {
        spalte1: 'Gesetzliche Mängelrechte',
        spalte2: 'Ansprüche gegen den Vertragspartner nach dem Gesetz',
        spalte3: 'Bestehen unabhängig von einer zusätzlichen Herstellergarantie',
      },
    ]),

    textBlock(
      h('h2', t('Was deckt die Produktgarantie ab?')),
      p(
        t('Die Produktgarantie bezieht sich auf das Modul als Produkt. Typische Themen können Material, Verarbeitung, Anschlussdose, Laminat, Rahmen oder andere Bestandteile sein. Ob ein konkreter Fehler tatsächlich erfasst ist, entscheidet aber nicht die Überschrift „Produktgarantie“, sondern das Garantiepapier des Herstellers.'),
      ),
      p(
        t('Dort stehen auch Ausschlüsse und Voraussetzungen: zulässige Montage, elektrische Auslegung, Umgang mit dem Modul, Dokumentation, Meldefristen und die konkrete Form der Abhilfe. Ein Hersteller kann je nach Bedingungswerk reparieren, Ersatz liefern, einen Zeitwert oder eine andere vereinbarte Leistung gewähren.'),
      ),
    ),

    hinweisBlock(
      'Die Jahreszahl allein reicht nicht',
      p(
        t('Zwei Hersteller können beide „30 Jahre Produktgarantie“ schreiben und trotzdem sehr unterschiedliche Leistungen versprechen. Entscheidend ist, '),
        bold('was'),
        t(' garantiert wird, '),
        bold('wer'),
        t(' Garantiegeber ist und '),
        bold('wie'),
        t(' ein Garantiefall abgewickelt wird.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bedeutet Leistungsgarantie?')),
      p(
        t('Photovoltaikmodule verlieren über viele Jahre typischerweise einen Teil ihrer ursprünglichen Leistung. Hersteller können deshalb eine Leistungskurve garantieren: Nach einer bestimmten Betriebsdauer soll mindestens ein definierter Anteil der Ausgangsleistung vorhanden sein.'),
      ),
      p(
        t('Das ist etwas anderes als ein Defekt. Ein Modul kann Strom produzieren und trotzdem unter einer garantierten Leistungsschwelle liegen. Umgekehrt kann ein sichtbares oder elektrisches Produktproblem vorliegen, obwohl die reine Leistungsmessung noch innerhalb der Leistungsgarantie liegt.'),
      ),
      p(
        t('Bei einem Verdacht muss außerdem sauber gemessen werden. Verschattung, Verschmutzung, Temperatur, Verkabelung, Wechselrichterbegrenzung oder ein Fehler an anderer Stelle der Anlage können den Ertrag beeinflussen, ohne dass das Modul selbst seine garantierte Leistung unterschritten hat.'),
      ),
    ),

    textBlock(
      h('h2', t('Das Beispiel AIKO Z-Serie: 40 + 40 Jahre')),
      p(
        t('AIKO hat 2026 für die Z-Serie eine '),
        bold('40-jährige Produktgarantie und eine 40-jährige Leistungsgarantie'),
        t(' angekündigt. Für uns ist das interessant, weil die Garantiezeit damit stärker an die lange technische Nutzung einer Dachanlage heranrückt.'),
      ),
      p(
        t('Trotzdem gilt auch hier: Maßgeblich sind immer die offiziellen Garantiebedingungen des konkret gelieferten Modells. Unsere technischen Eckdaten und die Einordnung der neuen Serie findest du auf der Seite '),
        link('AIKO Solarmodule mit ABC-Technologie', '/solaranlage/aiko-solarmodule'),
        t('.'),
      ),
      p(
        t('Die Herstellerankündigung zur Z-Serie ist außerdem direkt bei '),
        link('AIKO', 'https://aikosolar.com/de/aiko-bc-technology-infinite-ultra-z-series-new-launch/', { newTab: true }),
        t(' dokumentiert.'),
      ),
    ),

    textBlock(
      h('h2', t('Wer bezahlt Ausbau, Gerüst und Wiedermontage?')),
      p(
        t('Das ist eine der wichtigsten Fragen überhaupt. Ein neues Modul kann im Einkauf vergleichsweise günstig sein. Der Austausch auf einem Dach verursacht aber zusätzliche Arbeit: Fehlerdiagnose, Gerüst oder Absturzsicherung, Demontage, Transport, Montage und elektrische Prüfung.'),
      ),
      p(
        t('Eine Herstellergarantie muss nicht automatisch jede dieser Nebenleistungen abdecken. Deshalb kann eine formal lange Garantie wirtschaftlich weniger wert sein, wenn die Abwicklung eng gefasst ist. Genau hier trennt sich eine gute Garantie von einer großen Zahl auf dem Datenblatt.'),
      ),
    ),

    tippBlock(
      'Vor dem Kauf fünf Fragen beantworten',
      ul(
        p(t('Wie lange gelten Produkt- und Leistungsgarantie getrennt voneinander?')),
        p(t('Wer ist der rechtliche Garantiegeber?')),
        p(t('Welche Fehler und welche Kosten sind tatsächlich abgedeckt?')),
        p(t('Welche Nachweise, Registrierungen oder Meldefristen werden verlangt?')),
        p(t('Wie wird ein Austausch nach vielen Jahren praktisch abgewickelt, wenn das ursprüngliche Modul nicht mehr lieferbar ist?')),
      ),
    ),

    textBlock(
      h('h2', t('Was passiert, wenn es das Modul in 25 Jahren nicht mehr gibt?')),
      p(
        t('Modulserien ändern sich schnell. Abmessungen, elektrische Kennwerte, Optik und Zelltechnologie entwickeln sich weiter. Nach Jahrzehnten ist deshalb nicht garantiert, dass ein identisches Ersatzmodul noch im Regal liegt.'),
      ),
      p(
        t('Eine sinnvolle Anlagenplanung denkt solche Fälle mit: Stringauslegung, Wechselrichterfenster, Modulmaße und Befestigungssystem sollten dokumentiert sein. Je besser die Projektdokumentation, desto leichter kann später beurteilt werden, welche Ersatzlösung technisch funktioniert.'),
      ),
    ),

    textBlock(
      h('h2', t('Lange Garantie ersetzt keine gute Planung')),
      p(
        t('Ein Modul mit langer Garantie kann trotzdem Teil einer schlecht geplanten Anlage sein. Verschattung, falsche Stringauslegung, ungeeignete Unterkonstruktion, schlechte Kabelwege oder ein unpassender Wechselrichter werden durch 40 Jahre Modulgarantie nicht besser.'),
      ),
      p(
        t('Deshalb betrachten wir die Garantie als einen Baustein. Ebenso wichtig sind Flächeneffizienz, mechanische Eigenschaften, elektrische Daten, Systemkompatibilität, Lieferfähigkeit, Herstellerstruktur und die Qualität der Montage.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: 40 Jahre sind stark – wenn die Bedingungen stark sind')),
      p(
        t('Eine lange Produkt- und Leistungsgarantie ist positiv. Sie zeigt, dass ein Hersteller für einen sehr langen Zeitraum eine definierte Verantwortung übernehmen will. Aber der Wert entsteht erst aus der Kombination von '),
        bold('Laufzeit, Inhalt, Garantiegeber und praktikabler Abwicklung'),
        t('.'),
      ),
      p(
        t('Wer nur die größte Jahreszahl vergleicht, vergleicht deshalb nicht vollständig. Wer Garantiebedingungen zusammen mit Technik und Anlagenplanung betrachtet, bekommt ein wesentlich realistischeres Bild.'),
      ),
    ),

    ctaBlock({
      titel: 'PV-Anlage für Jahrzehnte statt fürs Datenblatt planen',
      text:
        'Wir planen Module, Wechselrichter, Speicher und Unterkonstruktion als Gesamtsystem – offen, nachvollziehbar und passend zum Dach.',
      buttonText: 'PV-Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist der Unterschied zwischen Produktgarantie und Leistungsgarantie bei Solarmodulen?',
      'Die Produktgarantie betrifft Mängel am Modul nach den jeweiligen Garantiebedingungen. Die Leistungsgarantie sichert eine definierte Mindestleistung beziehungsweise Leistungskurve über einen Zeitraum zu.',
    ),
    faqItem(
      'Bedeutet 40 Jahre Garantie, dass jede Reparatur kostenlos ist?',
      'Nein. Welche Leistungen und Nebenkosten übernommen werden, ergibt sich aus den konkreten Garantiebedingungen. Arbeits-, Transport-, Gerüst- oder Wiedermontagekosten sind nicht automatisch vollständig enthalten.',
    ),
    faqItem(
      'Hat die AIKO Z-Serie 40 Jahre Garantie?',
      'AIKO hat für die 2026 vorgestellte Z-Serie 40 Jahre Produktgarantie und 40 Jahre Leistungsgarantie angekündigt. Maßgeblich sind die offiziellen Bedingungen des konkret gelieferten Modells.',
    ),
    faqItem(
      'Ersetzt eine Herstellergarantie die Gewährleistung?',
      'Nein. Eine Garantie besteht zusätzlich zu den gesetzlichen Mängelrechten. Ansprechpartner, Voraussetzungen und Rechtsfolgen unterscheiden sich.',
    ),
    faqItem(
      'Was ist bei einer langen Modulgarantie am wichtigsten?',
      'Neben der Laufzeit sollten Garantieumfang, Ausschlüsse, Garantiegeber, Abwicklung, notwendige Nachweise und die Übernahme von Nebenkosten geprüft werden.',
    ),
  ],
}

await upsertRatgeberArticle(article)
