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
  titel: 'Amortisation der PV-Anlage: Wann sie sich wirklich bezahlt gemacht hat',
  slug: 'amortisation-pv-anlage',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'Zwischen „rechnet sich nie" und „nach 6 Jahren geschenkt" liegt die Wahrheit: Die Amortisation einer Solaranlage lässt sich seriös berechnen – wenn man die richtigen Größen einsetzt. Welche Faktoren zählen, wie die Rechnung funktioniert und mit welchen Zeiträumen man 2026 realistisch planen kann.',
  lesezeit: 9,
  seo: seo(
    'PV-Anlage Amortisation: Rechnung & realistische Zeiträume | PEAK.Energy',
    'Wann amortisiert sich eine Solaranlage? Die ehrliche Rechnung: Eigenverbrauch, Einspeisevergütung, Strompreis und Betriebskosten – mit Beispielrechnung und den Stellhebeln, die wirklich zählen.',
  ),
  zusammenfassung: [
    summaryPoint(
      t('Realistisch amortisiert sich eine gut ausgelegte PV-Anlage im Einfamilienhaus heute nach etwa '),
      bold('8 bis 13 Jahren'),
      t(' – bei 25–30 Jahren Lebensdauer bleiben danach viele Jahre mit fast kostenlosem Strom.'),
    ),
    summaryPoint(
      t('Der größte Werttreiber ist der '),
      bold('Eigenverbrauch'),
      t(': Jede selbst genutzte Kilowattstunde spart 30–40 ct Netzstrom, jede eingespeiste bringt nur rund 7,7 ct Vergütung.'),
    ),
    summaryPoint(
      t('In die ehrliche Rechnung gehören auch '),
      bold('Betriebskosten'),
      t(' (Versicherung, Wartung, Rücklage Wechselrichter) und realistische Strompreis-Annahmen – nicht nur der Anschaffungspreis.'),
    ),
    summaryPoint(
      t('Ein Speicher verlängert die reine Amortisationszeit oft leicht – erhöht aber Autarkie und Gesamtersparnis über die Laufzeit. Beides gehört in die Entscheidung.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Die Grundrechnung: einfacher als gedacht')),
      p(
        t('Die Amortisationszeit beantwortet eine einzige Frage: Nach wie vielen Jahren haben die Erträge der Anlage die Investition eingespielt? Die Formel dazu ist simpel:'),
      ),
      p(
        bold('Amortisationszeit = Investitionskosten ÷ jährlicher Nutzen'),
      ),
      p(
        t('Der jährliche Nutzen setzt sich aus zwei Teilen zusammen: der '),
        bold('vermiedene Netzbezug'),
        t(' (selbst genutzte Kilowattstunden × Strompreis) plus die '),
        bold('Einspeisevergütung'),
        t(' (eingespeiste Kilowattstunden × Vergütungssatz), abzüglich der laufenden Betriebskosten. Die Kunst liegt nicht in der Formel, sondern in ehrlichen Eingangswerten.'),
      ),
    ),
    textBlock(
      h('h2', t('Beispielrechnung: 10 kWp mit Speicher im Einfamilienhaus')),
      p(
        t('Ein Haushalt mit 4.500 kWh Jahresverbrauch, 10-kWp-Anlage (rund 9.500 kWh Ertrag am Niederrhein) und 8-kWh-Speicher, Strompreis 35 ct/kWh, Einspeisevergütung 7,7 ct/kWh (Stand August 2026):'),
      ),
      ul(
        p(
          bold('Vermiedener Netzbezug:'),
          t(' ca. 3.100 kWh selbst genutzt × 0,35 € ≈ 1.085 € pro Jahr.'),
        ),
        p(
          bold('Einspeisevergütung:'),
          t(' ca. 6.400 kWh eingespeist × 0,077 € ≈ 490 € pro Jahr.'),
        ),
        p(
          bold('Betriebskosten:'),
          t(' Versicherung, gelegentliche Wartung, Rücklage für den Wechselrichter-Tausch – konservativ ca. 250 € pro Jahr.'),
        ),
        p(
          bold('Jährlicher Nettonutzen:'),
          t(' rund 1.325 €. Bei einer Investition von beispielsweise 16.000 € ergibt das eine Amortisationszeit von etwa 12 Jahren – ohne Strompreissteigerungen gerechnet.'),
        ),
      ),
      p(
        t('Steigt der Strompreis über die Jahre, verkürzt sich die Zeit spürbar; die Zahlen sind bewusst konservativ gerundet. Und wichtig: Nach der Amortisation produziert die Anlage noch 15 Jahre und länger – dann nahezu zum Nulltarif. Was Anlagen in verschiedenen Größen kosten, steht in unseren Kosten-Ratgebern für 10 kWp und 15 kWp.'),
      ),
    ),
    tabelleBlock('Was die Amortisation beschleunigt – und was sie bremst', [
      {
        spalte1: 'Hoher Eigenverbrauch',
        spalte2: 'Beschleunigt stark',
        spalte3: 'Lastverschiebung, Speicher, E-Auto und Wärmepumpe heben den Anteil des 35-ct-Stroms',
      },
      {
        spalte1: 'Steigende Strompreise',
        spalte2: 'Beschleunigt',
        spalte3: 'Jeder Cent mehr je kWh Netzstrom erhöht den Wert der Eigenerzeugung',
      },
      {
        spalte1: 'Überteuerte Anschaffung',
        spalte2: 'Bremst stark',
        spalte3: 'Der häufigste Grund für enttäuschende Rechnungen – Angebote vergleichen lohnt',
      },
      {
        spalte1: 'Schlechte Auslegung',
        spalte2: 'Bremst',
        spalte3: 'Zu kleiner/zu großer Speicher, ignoriertes Lastprofil, verschattete Belegung',
      },
      {
        spalte1: 'Unbemerkte Ausfälle',
        spalte2: 'Bremst still',
        spalte3: 'Ohne Monitoring frisst ein toter Strang die Rendite – monatelang unbemerkt',
      },
    ]),
    hinweisBlock(
      'Speicher: längere Amortisation, höherer Gesamtnutzen',
      p(
        t('Ein Speicher erhöht die Investition und verlängert die reine Amortisationszeit oft um ein bis drei Jahre – gleichzeitig verdoppelt er grob die Autarkie und damit die jährliche Ersparnis über die gesamte Laufzeit. Wer nur auf die Amortisationszahl schaut, unterschätzt den Speicher; wer nur auf die Autarkie schaut, überschätzt ihn. Entscheidend ist die Gesamtrechnung über 20+ Jahre – und die hängt am Lastprofil. Ob sich ein Speicher in Ihrem Fall trägt, beleuchtet der Ratgeber „Lohnt sich ein Stromspeicher?".'),
      ),
    ),
    textBlock(
      h('h2', t('Was 2026/2027 in die Rechnung gehört')),
      p(
        t('Zwei aktuelle Entwicklungen sollte man kennen: Erstens entfällt bei neuen Anlagen die Einspeisevergütung während Stunden mit negativen Börsenpreisen – die Ausfallzeiten werden an die 20-jährige Vergütungsdauer angehängt. Für die Amortisation im Einfamilienhaus ist der Effekt klein, er unterstreicht aber den Trend: '),
        bold('Der Wert der Anlage verschiebt sich weiter von der Einspeisung zum Eigenverbrauch.'),
      ),
      p(
        t('Zweitens wird über eine EEG-Reform beraten, die die feste Einspeisevergütung für Neuanlagen ab 2027 durch ein anderes Modell ersetzen könnte – beschlossen ist das noch nicht. Sicher ist: '),
        bold('Bestandsanlagen behalten ihre zugesagten Konditionen für 20 Jahre.'),
        t(' Wer 2026 in Betrieb nimmt, sichert sich die aktuellen Sätze – Details in unserem Ratgeber zur Einspeisevergütung.'),
      ),
    ),
    tippBlock(
      'Amortisation ist kein Liquiditätsproblem',
      p(
        t('Eine Amortisationszeit von 10 Jahren heißt nicht, dass 10 Jahre lang Geld fehlt: Mit Finanzierung und 0 € Anzahlung stehen der monatlichen Rate von Anfang an die eingesparten Stromkosten gegenüber – je nach Konstellation trägt sich die Anlage von Monat eins an weitgehend selbst. Wie das funktioniert, steht im Beitrag „0 € Anzahlung bei der Solaranlage".'),
      ),
    ),
    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Eine sauber geplante und fair bepreiste PV-Anlage amortisiert sich im Einfamilienhaus verlässlich innerhalb ihrer halben Lebensdauer – meist nach 8 bis 13 Jahren, mit Tendenz nach unten bei steigenden Strompreisen und hohem Eigenverbrauch. Misstrauen ist bei beiden Extremen angebracht: bei Verkäufern, die 5 Jahre versprechen, und bei Pauschalurteilen, PV rechne sich nicht.'),
      ),
      p(
        bold('Wir rechnen die Amortisation mit Ihren Zahlen'),
        t(' – Verbrauch, Lastprofil, Dach, Strompreis – und legen jede Annahme offen. Eine Prognose, die man nachrechnen kann, ist die Grundlage, auf der man investieren sollte. Alles andere ist Prospekt.'),
      ),
    ),
    ctaBlock({
      titel: 'Amortisation für Ihr Dach berechnen lassen',
      text:
        'Wir kalkulieren mit realem Verbrauch, ehrlichen Ertragsprognosen und offenen Annahmen – damit Sie wissen, wann sich Ihre Anlage bezahlt gemacht hat. Mit 0 € Anzahlung.',
      buttonText: 'Angebot anfragen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Wie schnell amortisiert sich eine Solaranlage ohne Speicher?',
      'Oft etwas schneller als mit Speicher – typischerweise 8 bis 11 Jahre, weil die Investition kleiner ist. Dafür bleibt die Autarkie bei 25–40 % und die jährliche Ersparnis geringer. Die Speicherfrage sollte über die Gesamtrechnung entschieden werden, nicht über die reine Amortisationszahl.',
    ),
    faqItem(
      'Welche Betriebskosten muss ich einrechnen?',
      'Versicherung (oft über die Wohngebäudeversicherung integrierbar), gelegentliche Wartung/Reinigung, Zählergebühren und eine Rücklage für den Wechselrichter-Tausch nach 10–15 Jahren. Zusammen realistisch 1–2 % der Investitionssumme pro Jahr – wer sie weglässt, rechnet sich die Anlage schöner als sie ist.',
    ),
    faqItem(
      'Lohnt sich PV noch, wenn die Einspeisevergütung weiter sinkt?',
      'Ja – weil die Vergütung längst nicht mehr der Haupthebel ist. Der wirtschaftliche Kern ist der vermiedene Netzbezug zu 30–40 ct/kWh, und der wird mit sinkender Vergütung sogar relativ wichtiger. Die Auslegung sollte dem folgen: Eigenverbrauch maximieren statt Einspeisung optimieren.',
    ),
    faqItem(
      'Verkürzt ein E-Auto oder eine Wärmepumpe die Amortisation?',
      'Deutlich – beide verwandeln Überschussstrom, der sonst für 7,7 ct eingespeist würde, in vermiedene Kosten von 30–40 ct (bzw. vermiedene Fahr- und Heizkosten). Wer solche Verbraucher plant, sollte die Anlage von Anfang an größer auslegen; das Dach voll zu belegen ist fast immer die richtige Entscheidung.',
    ),
    faqItem(
      'Was passiert nach der Amortisation?',
      'Die schönste Phase: Die Anlage ist bezahlt und produziert weiter – Module halten 25–30 Jahre und mehr. Es bleiben nur die geringen Betriebskosten und irgendwann ein Wechselrichter-Tausch. Jede Kilowattstunde ist dann fast reiner Gewinn; nach dem EEG-Zeitraum stellt sich später die Ü20-Frage, die wir im Repowering-Bereich behandeln.',
    ),
  ],
}

await upsertRatgeberArticle(article)
