import { upsertRatgeberArticle } from './_articleFactory.mjs'
import {
  t,
  bold,
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
  titel: 'Wärmepumpentarif oder dynamischer Stromtarif: Was lohnt sich 2026?',
  slug: 'waermepumpentarif-oder-dynamischer-stromtarif',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Der günstigste Cent-Preis ist nicht automatisch der günstigste Wärmepumpen-Tarif. Entscheidend sind Zählerkonzept, Netzentgelt, PV-Eigenverbrauch, Verbrauchsprofil und Steuerbarkeit.',
  lesezeit: 14,

  seo: seo(
    'Wärmepumpentarif oder dynamischer Stromtarif 2026? | PEAK.Energy',
    'Wärmepumpentarif, dynamischer Stromtarif, §14a und PV im Vergleich. Wann separater Zähler oder flexible Preise sinnvoller sind.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein klassischer Wärmepumpentarif nutzt häufig eine '),
      bold('separate Messung'),
      t(' für die Wärmepumpe. Ob sich das lohnt, hängt von Tarifdifferenz, Jahresverbrauch und zusätzlichen Messkosten ab.'),
    ),
    summaryPoint(
      t('Dynamische Stromtarife geben zeitabhängige Preisänderungen an Kunden weiter und benötigen für die zeitaufgelöste Abrechnung ein '),
      bold('intelligentes Messsystem'),
      t('.'),
    ),
    summaryPoint(
      t('Seit 1. Januar 2025 müssen Stromlieferanten für Kunden mit intelligentem Messsystem grundsätzlich einen dynamischen Tarif anbieten.'),
    ),
    summaryPoint(
      t('§ 14a EnWG betrifft die '),
      bold('Netzentgelte und Steuerbarkeit'),
      t(' – nicht den eigentlichen Energiepreis. Besonders mit PV, Speicher und Wärmepumpe müssen Tarif, Messkonzept und Netzentgeltmodell gemeinsam betrachtet werden.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Drei Ebenen, die gerne durcheinandergeworfen werden')),
      p(
        t('Beim Strom für Wärmepumpen geht es nicht nur um den Tarifpreis des Lieferanten. Auf der Rechnung wirken unter anderem Energiepreis, Netzentgelte, Messstellenbetrieb, Steuern und Umlagen.'),
      ),
      p(
        t('Ein dynamischer Stromtarif verändert vor allem den zeitabhängigen Energiepreis. § 14a betrifft dagegen die Netzentgeltseite. Ein klassischer Wärmepumpentarif kann wiederum ein eigenes Mess- und Lieferkonzept nutzen.'),
      ),
      p(
        bold('Wer nur den beworbenen Arbeitspreis vergleicht, sieht deshalb nicht das ganze System.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ist ein klassischer Wärmepumpentarif?')),
      p(
        t('Wärmepumpentarife werden speziell für Heizstrom angeboten. Häufig wird die Wärmepumpe separat gemessen. Dadurch kann ein eigener Liefervertrag genutzt werden und je nach §14a-Modul ein anderes Netzentgelt gelten.'),
      ),
      p(
        t('Ob sich das lohnt, hängt davon ab, wie groß die tatsächliche Ersparnis gegenüber dem Haushaltsstromtarif ist. Ein zusätzlicher Zähler kann zusätzliche Mess- und Grundkosten verursachen.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ist ein dynamischer Stromtarif?')),
      p(
        t('Bei einem dynamischen Tarif verändert sich der Energiepreis zeitabhängig. Typischerweise orientiert er sich an kurzfristigen Strommarktpreisen. Ist viel günstige Energie im Markt, kann der Bezug zeitweise sehr preiswert sein. In knappen Stunden kann er dagegen deutlich teurer werden.'),
      ),
      p(
        t('Seit dem 1. Januar 2025 sind Stromlieferanten grundsätzlich verpflichtet, Kunden mit intelligentem Messsystem den Abschluss eines dynamischen Tarifs anzubieten. Für die praktische Nutzung ist das Smart Meter deshalb ein zentraler Baustein.'),
      ),
    ),

    hinweisBlock(
      'Dynamisch heißt nicht: Komfort nach Börsenpreis',
      p(
        t('Gutes Energiemanagement bedeutet nicht, dass das Haus nur heizt, wenn Strom gerade billig ist. Die Wärmepumpe muss zuerst das Gebäude zuverlässig versorgen. Innerhalb dieses Komfort- und Technikrahmens können bestimmte Verbräuche zeitlich verschoben werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie flexibel ist eine Wärmepumpe wirklich?')),
      p(
        t('Ein Gebäude, eine Fußbodenheizung und ein Warmwasserspeicher können begrenzt Wärme speichern. Dadurch lässt sich ein Teil des Verbrauchs verschieben – zum Beispiel Warmwasserbereitung oder eine leichte thermische Vorladung vor teuren Stunden.'),
      ),
      p(
        t('Wie weit das sinnvoll ist, hängt von Gebäude, Heizsystem, Außentemperatur und Komfortanspruch ab. '),
        bold('Eine Wärmepumpe sollte nicht wegen eines günstigen Preissignals ineffizient mit unnötig hohen Temperaturen gefahren werden.'),
      ),
    ),

    textBlock(
      h('h2', t('§ 14a EnWG: eine andere Ebene')),
      p(
        t('Neue steuerbare Verbrauchseinrichtungen mit mehr als 4,2 kW elektrischer Netzanschlussleistung fallen grundsätzlich unter die Regeln des § 14a EnWG. Dazu gehören unter anderem Wärmepumpen. Im Gegenzug für die netzorientierte Steuerbarkeit erhalten Betreiber reduzierte Netzentgelte.'),
      ),
    ),

    tabelleBlock('§14a-Module für die Tarifentscheidung', [
      {
        spalte1: 'Modul 1',
        spalte2: 'Pauschale Netzentgeltreduzierung',
        spalte3:
          'Kein separater Zähler allein wegen des Moduls erforderlich. Seit April 2025 mit Modul 3 kombinierbar.',
      },
      {
        spalte1: 'Modul 2',
        spalte2: 'Netzentgelt-Arbeitspreis auf 40 % reduziert',
        spalte3:
          'Separate Messung der steuerbaren Verbrauchseinrichtung erforderlich. Kann bei Wärmepumpen mit relevantem Jahresverbrauch interessant sein.',
      },
      {
        spalte1: 'Modul 3',
        spalte2: 'Zeitvariables Netzentgelt',
        spalte3:
          'Zusätzlich zu Modul 1 möglich. Nicht mit Modul 2 kombinierbar.',
      },
    ]),

    textBlock(
      h('h2', t('Photovoltaik macht die Rechnung interessanter')),
      p(
        t('Ohne PV lässt sich relativ geradlinig vergleichen: Jahresverbrauch der Wärmepumpe, Tarifdifferenz und zusätzliche Messkosten. Mit Photovoltaik kommt der Wert des Eigenverbrauchs hinzu.'),
      ),
      p(
        t('Ein separater Wärmepumpenzähler sollte nicht dazu führen, dass Solarstrom unnötig von der Wärmepumpe getrennt wird. '),
        bold('Kaskadenmessungen'),
        t(' können – abhängig vom Netzbetreiber und Messkonzept – getrennte Abrechnung und PV-Eigenverbrauch miteinander verbinden.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann spricht mehr für einen klassischen Wärmepumpentarif?')),
      ul(
        p(t('wenn die Wärmepumpe einen hohen Netzbezug pro Jahr hat,')),
        p(t('wenn die Tarifdifferenz zum Haushaltsstrom relevant ist,')),
        p(t('wenn zusätzliche Messkosten wirtschaftlich bleiben,')),
        p(t('wenn §14a-Modul 2 interessant ist,')),
        p(t('und wenn der PV-Eigenverbrauch im Messkonzept sinnvoll berücksichtigt wird.')),
      ),
    ),

    textBlock(
      h('h2', t('Wann spricht mehr für einen dynamischen Tarif?')),
      ul(
        p(t('wenn ein intelligentes Messsystem vorhanden ist,')),
        p(t('wenn Wärmepumpe, Speicher oder Wallbox steuerbar sind,')),
        p(t('wenn Verbrauch tatsächlich verschoben werden kann,')),
        p(t('wenn ein Energiemanagementsystem die Preissignale automatisiert verarbeitet,')),
        p(t('und wenn der Nutzer zeitliche Preisschwankungen bewusst akzeptiert.')),
      ),
    ),

    tippBlock(
      'Arbeitspreis niemals allein vergleichen',
      p(
        t('Eine brauchbare Vergleichsrechnung betrachtet mindestens Energiepreis, Netzentgelte, Grundpreise, Messkosten und den Wert des PV-Eigenverbrauchs. Bei dynamischen Tarifen kommt hinzu, wie gut Verbrauch tatsächlich in günstige Stunden verschoben wird.'),
      ),
    ),

    textBlock(
      h('h2', t('Wenn PV, Speicher und Wärmepumpe zusammenkommen')),
      p(
        t('Dann würden wir nicht zuerst den Tarif wählen, sondern zuerst das Energiesystem betrachten: Lastprofile, PV-Erzeugung, Speicher, steuerbare Verbraucher, §14a-Modul und Messkonzept. Erst danach ergibt der Stromtarifvergleich wirklich Sinn.'),
      ),
      p(
        t('Sonst optimiert man einen einzelnen Cent-Wert und verschlechtert möglicherweise den Rest des Systems.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Wärmepumpentarif und dynamischer Tarif sind keine Gegensätze')),
      p(
        t('Der Wärmepumpentarif ist vor allem ein Liefer- und häufig auch Messkonzept. Der dynamische Tarif verändert den zeitabhängigen Energiepreis. § 14a verändert wiederum die Netzentgeltseite. Diese Ebenen können je nach System kombiniert werden.'),
      ),
      p(
        t('Deshalb gibt es keine pauschale Antwort „dynamisch ist immer besser“ oder „Wärmepumpentarif spart immer“. Die wirtschaftlich beste Lösung entsteht aus '),
        bold('Verbrauch, Messkonzept, Photovoltaik, §14a und Steuerung'),
        t(' zusammen.'),
      ),
    ),

    ctaBlock({
      titel: 'Stromsystem statt Einzeltarif planen',
      text:
        'Wir schauen auf Wärmepumpe, PV, Speicher, Smart Meter, §14a und Messkonzept gemeinsam – damit ein günstiger Tarif nicht an anderer Stelle teurer wird.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Brauche ich für einen dynamischen Stromtarif ein Smart Meter?',
      'Für einen echten dynamischen Tarif ist ein intelligentes Messsystem erforderlich, damit der Verbrauch zeitaufgelöst erfasst und abgerechnet werden kann.',
    ),
    faqItem(
      'Muss jeder Stromanbieter einen dynamischen Tarif anbieten?',
      'Seit dem 1. Januar 2025 gilt die Verpflichtung grundsätzlich für alle Stromlieferanten gegenüber Kunden mit intelligentem Messsystem.',
    ),
    faqItem(
      'Was bringt § 14a bei einer Wärmepumpe?',
      'Die Wärmepumpe wird netzorientiert steuerbar. Im Gegenzug erhält der Betreiber reduzierte Netzentgelte. Die Bundesnetzagentur sieht dafür mehrere Module vor.',
    ),
    faqItem(
      'Ist Modul 2 immer besser als Modul 1?',
      'Nein. Modul 2 hängt stärker vom Verbrauch ab und benötigt eine separate Messung. Welches Modell günstiger ist, muss für den konkreten Jahresverbrauch gerechnet werden.',
    ),
    faqItem(
      'Kann ich PV-Eigenverbrauch und einen separaten Wärmepumpentarif kombinieren?',
      'Je nach Netzbetreiber und Messkonzept ja. Kaskadenmessungen können eine getrennte Abrechnung ermöglichen und gleichzeitig PV-Strom für die Wärmepumpe nutzbar machen.',
    ),
  ],
}

await upsertRatgeberArticle(article)
