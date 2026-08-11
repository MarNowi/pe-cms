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
  titel: 'Heizlastberechnung für Wärmepumpen: Warum die alte Heizung kein Maßstab ist',
  slug: 'heizlastberechnung-waermepumpe',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    '24-kW-Gasheizung raus, 24-kW-Wärmepumpe rein? Genau so entstehen überdimensionierte Anlagen. Entscheidend ist nicht das Typenschild der alten Heizung, sondern die tatsächliche Heizlast des Gebäudes.',
  lesezeit: 12,

  seo: seo(
    'Heizlastberechnung Wärmepumpe: richtig auslegen | PEAK.Energy',
    'Warum die Heizlastberechnung für eine Wärmepumpe entscheidend ist, was DIN EN 12831 bedeutet und warum die alte Heizleistung kein Maßstab ist.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Die '),
      bold('Heizlast beschreibt die Wärmeleistung, die ein Gebäude bei definierten kalten Bedingungen benötigt'),
      t(', um die gewünschten Raumtemperaturen zu halten.'),
    ),
    summaryPoint(
      t('Die Leistung der alten Öl- oder Gasheizung ist '),
      bold('kein verlässlicher Maßstab'),
      t('. Bestandskessel wurden häufig deutlich größer ausgelegt als tatsächlich nötig.'),
    ),
    summaryPoint(
      t('Eine zu große Wärmepumpe kann unnötig teuer sein und in der Übergangszeit häufiger takten. Eine zu kleine Anlage ist ebenfalls keine gute Planung. Entscheidend ist die '),
      bold('passende Auslegung im Gesamtsystem'),
      t('.'),
    ),
    summaryPoint(
      t('Heizlast, Heizflächen, Vorlauftemperatur, Modulationsbereich und Hydraulik müssen zusammen betrachtet werden. '),
      bold('Quadratmeter-Faustformeln reichen dafür nicht aus'),
      t('.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum die alte Heizung fast nie die richtige Antwort liefert')),
      p(
        t('In vielen Bestandsgebäuden hängt noch ein Heizkessel mit 20, 24 oder sogar 30 kW Leistung im Keller. Daraus entsteht schnell die Annahme: Wenn die alte Heizung 24 kW hatte, braucht die neue Wärmepumpe ebenfalls 24 kW.'),
      ),
      p(
        bold('Das ist kein belastbares Auslegungskriterium.'),
        t(' Öl- und Gasheizungen wurden früher häufig großzügig dimensioniert. Zusätzlich musste der Wärmeerzeuger hohe Temperaturen und Warmwasser komfortabel bereitstellen können. Das Typenschild sagt deshalb wenig darüber aus, welche Heizleistung das Gebäude an einem kalten Wintertag tatsächlich benötigt.'),
      ),
      p(
        t('Eine Wärmepumpe arbeitet dagegen besonders angenehm, wenn sie lange, gleichmäßig und mit möglichst niedrigen Vorlauftemperaturen läuft. Genau dafür braucht man eine belastbare Heizlast.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bedeutet Heizlast überhaupt?')),
      p(
        t('Die Heizlast ist die Wärmeleistung, die erforderlich ist, um ein Gebäude bei einer festgelegten Außentemperatur auf der gewünschten Innentemperatur zu halten. Vereinfacht berücksichtigt sie Wärmeverluste über Bauteile und Wärmeverluste durch Luftwechsel beziehungsweise Lüftung.'),
      ),
      p(
        t('Eine fachgerechte Norm-Heizlast wird in Deutschland nach '),
        bold('DIN EN 12831-1 in Verbindung mit den nationalen Ergänzungen'),
        t(' ermittelt. Für eine gute Wärmepumpenplanung ist dabei nicht nur die Gesamt-Heizlast interessant, sondern auch die raumweise Betrachtung.'),
      ),
    ),

    tabelleBlock('Was die Heizlast für die Planung beantwortet', [
      {
        spalte1: 'Gebäude',
        spalte2: 'Benötigte Gesamtleistung',
        spalte3:
          'Wie viel Wärme muss der Wärmeerzeuger unter den angesetzten Auslegungsbedingungen bereitstellen?',
      },
      {
        spalte1: 'Raum',
        spalte2: 'Raumweise Heizlast',
        spalte3:
          'Welche Wärmeleistung muss die jeweilige Heizfläche im Wohnzimmer, Bad oder Schlafzimmer übertragen?',
      },
      {
        spalte1: 'Heizflächen',
        spalte2: 'Leistung bei niedriger Temperatur',
        spalte3:
          'Reichen vorhandene Heizkörper bei der geplanten Vorlauftemperatur aus oder müssen einzelne Heizflächen angepasst werden?',
      },
    ]),

    textBlock(
      h('h2', t('Warum eine Wärmepumpe nicht einfach „etwas größer“ gewählt werden sollte')),
      p(
        t('Bei klassischen Brennern war Überdimensionierung zwar nicht optimal, ließ sich aber oft vergleichsweise leicht kaschieren. Bei einer Wärmepumpe ist der Modulationsbereich wichtiger. Sinkt der Wärmebedarf unter die minimale Leistung des Geräts, muss die Wärmepumpe irgendwann abschalten und später erneut starten.'),
      ),
      p(
        t('Dieses Ein- und Ausschalten nennt man '),
        bold('Takten'),
        t('. Ein gewisses Takten ist normal. Problematisch wird es, wenn das Gerät wegen Überdimensionierung, ungünstiger Hydraulik oder falscher Regelung sehr kurze Laufzeiten produziert. Mehr Nennleistung bedeutet deshalb nicht automatisch mehr Sicherheit.'),
      ),
    ),

    hinweisBlock(
      '8 kW Heizlast bedeutet nicht automatisch „8-kW-Wärmepumpe bestellen“',
      p(
        t('Zusätzlich zur Heizlast müssen die Leistungskennlinie bei niedrigen Außentemperaturen, der Bivalenzpunkt, der Modulationsbereich, Warmwasser, mögliche elektrische Zusatzheizung und das konkrete Heizsystem betrachtet werden. Die Heizlast ist die Grundlage – nicht die komplette Geräteauswahl.'),
      ),
    ),

    textBlock(
      h('h2', t('Heizlast und Vorlauftemperatur gehören zusammen')),
      p(
        t('Zwei Häuser können dieselbe Heizlast haben und für eine Wärmepumpe trotzdem völlig unterschiedliche Aufgaben darstellen. Ein Gebäude erreicht die notwendige Wärme vielleicht mit einer Fußbodenheizung bei niedriger Vorlauftemperatur. Ein anderes Gebäude braucht dafür kleine Heizkörper und deutlich höhere Temperaturen.'),
      ),
      p(
        t('Für die Effizienz ist deshalb entscheidend, '),
        bold('welche Heizwassertemperatur bei der benötigten Leistung wirklich erforderlich ist'),
        t('. Darum gehören Heizlast, Heizflächen und Vorlauftemperatur immer in dieselbe Planung.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum Quadratmeter-Faustformeln nur für eine erste Orientierung taugen')),
      p(
        t('Aussagen wie „50 Watt pro Quadratmeter“ können für eine sehr grobe Vorprüfung helfen. Für die endgültige Auswahl einer Wärmepumpe sind sie zu ungenau. Zwei Häuser mit 160 m² Wohnfläche können wegen Baujahr, Dämmung, Fenstern, Luftdichtheit, Geometrie und Nutzung völlig unterschiedliche Heizlasten haben.'),
      ),
      p(
        t('Auch der historische Gas- oder Ölverbrauch kann eine gute Plausibilisierung liefern. Er hängt aber von Wetter, Warmwasseranteil, Nutzerverhalten und Wirkungsgrad der alten Heizung ab. Verbrauchsdaten sind deshalb wertvoll, ersetzen eine technische Betrachtung des Gebäudes aber nicht.'),
      ),
    ),

    tippBlock(
      'Nicht nur die Gesamt-Heizlast ansehen',
      p(
        t('Gerade bei Wärmepumpen im Bestand ist die '),
        bold('raumweise Heizlast'),
        t(' besonders hilfreich. Manchmal ist nicht das ganze Haus das Problem, sondern nur ein einzelnes Bad oder ein Raum mit zu kleiner Heizfläche. Ein gezielter Heizkörpertausch kann dann sinnvoller sein, als die Vorlauftemperatur für das gesamte Gebäude anzuheben.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Erst rechnen, dann Gerät auswählen')),
      p(
        t('Die Heizlast ist eine der wichtigsten Grundlagen jeder Wärmepumpenplanung. Nicht weil eine einzelne Zahl automatisch eine gute Anlage macht, sondern weil sie verhindert, dass die Wärmepumpe nach Bauchgefühl, altem Kesselschild oder Quadratmeter-Faustformel ausgewählt wird.'),
      ),
      p(
        t('Eine gute Planung bringt '),
        bold('Heizlast, Heizflächen, Vorlauftemperatur, Modulationsbereich und Hydraulik'),
        t(' zusammen. Erst daraus ergibt sich, welche Wärmepumpe wirklich zum Haus passt.'),
      ),
    ),

    ctaBlock({
      titel: 'Wärmepumpe passend zum Gebäude planen',
      text:
        'Wir betrachten nicht nur das Gerät, sondern das gesamte Heizsystem: Heizlast, Heizflächen, Vorlauftemperatur, Hydraulik und auf Wunsch die Einbindung von Photovoltaik, Speicher und Energiemanagement.',
      buttonText: 'Wärmepumpe anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Brauche ich für eine Wärmepumpe eine Heizlastberechnung?',
      'Für eine saubere Auslegung ist eine belastbare Heizlast eine wichtige Grundlage. Besonders im Bestand verhindert sie, dass die Leistung nur aus der alten Heizung oder aus Quadratmeter-Faustwerten abgeleitet wird.',
    ),
    faqItem(
      'Kann man die Heizlast aus dem Gasverbrauch berechnen?',
      'Verbrauchsdaten können die Planung gut plausibilisieren. Sie hängen aber von Wetter, Warmwasser, Nutzerverhalten und dem Wirkungsgrad der alten Heizung ab und sollten nicht die einzige Auslegungsgrundlage sein.',
    ),
    faqItem(
      'Warum ist eine zu große Wärmepumpe ungünstig?',
      'Eine deutlich überdimensionierte Anlage kann in Teillast häufiger takten, ist meist teurer und passt schlechter zum tatsächlichen Wärmebedarf. Entscheidend ist immer das Gesamtsystem inklusive Modulationsbereich und Hydraulik.',
    ),
    faqItem(
      'Bedeutet 8 kW Heizlast, dass ich exakt eine 8-kW-Wärmepumpe brauche?',
      'Nicht zwingend. Zusätzlich spielen Leistungskennlinie, Bivalenzpunkt, Warmwasser, Heizstabstrategie und Modulationsbereich eine Rolle.',
    ),
    faqItem(
      'Welche Norm gilt für die Heizlastberechnung?',
      'Die Norm-Heizlast wird in Deutschland nach DIN EN 12831-1 in Verbindung mit den nationalen Ergänzungen bestimmt.',
    ),
  ],
}

await upsertRatgeberArticle(article)
