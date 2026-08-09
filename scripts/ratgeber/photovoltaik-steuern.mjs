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
  titel: 'Photovoltaik und Steuern: 0 % Mehrwertsteuer, Einkommensteuer und was 2026 gilt',
  slug: 'photovoltaik-steuern',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'Seit 2023 ist die private Solaranlage weitgehend steuerfrei: null Prozent Mehrwertsteuer beim Kauf, keine Einkommensteuer auf die Erträge. Was hinter dem Nullsteuersatz steckt, welche Grenzen gelten, was für Speicher und Erweiterungen gilt – und wo trotzdem Fallstricke lauern.',
  lesezeit: 8,
  seo: seo(
    'Photovoltaik & Steuern 2026: 0 % MwSt und ESt-Befreiung erklärt | PEAK.Energy',
    'PV-Anlage und Steuern: Nullsteuersatz bei der Umsatzsteuer, Einkommensteuer-Befreiung bis 30 kWp, Regeln für Speicher und Erweiterungen – verständlich erklärt, Stand 2026.',
  ),
  zusammenfassung: [
    summaryPoint(
      t('Beim Kauf gilt der '),
      bold('Nullsteuersatz'),
      t(': 0 % Umsatzsteuer auf Lieferung und Installation von PV-Anlagen bis 30 kWp auf oder an Wohngebäuden – inklusive Speicher und wesentlicher Komponenten.'),
    ),
    summaryPoint(
      t('Die Erträge sind '),
      bold('einkommensteuerfrei'),
      t(': Für Anlagen bis 30 kWp (je Wohn-/Gewerbeeinheit, max. 100 kWp je Person) entfallen Steuer auf Einspeisevergütung und Eigenverbrauch – und damit auch die Gewinnermittlung.'),
    ),
    summaryPoint(
      t('Es gibt '),
      bold('nichts zu beantragen'),
      t(': Beide Befreiungen greifen automatisch, wenn die Voraussetzungen erfüllt sind.'),
    ),
    summaryPoint(
      t('Fallstricke bleiben bei Sonderfällen: größere Anlagen, Gewerbe, Vermietung, Altverträge mit Regelbesteuerung – hier lohnt der Blick zum Steuerberater.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Der Nullsteuersatz beim Kauf: 0 % statt 19 %')),
      p(
        t('Seit dem 1. Januar 2023 gilt für Photovoltaik ein eigener Umsatzsteuersatz von '),
        bold('null Prozent'),
        t(' (§ 12 Abs. 3 UStG). Er umfasst die Lieferung und Installation von Solarmodulen, Wechselrichtern, Unterkonstruktion, anlagenspezifischer Elektroinstallation – und ausdrücklich auch '),
        bold('Batteriespeicher'),
        t('. Voraussetzung: Die Anlage wird auf oder in der Nähe von Wohngebäuden bzw. öffentlichen oder gemeinnützig genutzten Gebäuden installiert. Bei Anlagen bis 30 kWp gilt diese Voraussetzung pauschal als erfüllt.'),
      ),
      p(
        t('Praktisch heißt das: Der Angebotspreis ist der Endpreis – die früher übliche Konstruktion, sich als Kleinunternehmer die Mehrwertsteuer vom Finanzamt zurückzuholen, ist für Neuanlagen überflüssig geworden. Kein Umsatzsteuer-Papierkram, keine Regelbesteuerung, keine Fristen.'),
      ),
    ),
    textBlock(
      h('h2', t('Einkommensteuer: Erträge bleiben steuerfrei')),
      p(
        t('Parallel dazu stellt § 3 Nr. 72 EStG die Einnahmen und Entnahmen aus dem Betrieb kleiner PV-Anlagen steuerfrei – Einspeisevergütung wie Eigenverbrauch. Die Grenzen: '),
        bold('30 kWp je Wohn- oder Gewerbeeinheit'),
        t(' und maximal 100 kWp je Steuerpflichtigem über alle Anlagen. Für Anlagen, die seit 2025 angeschafft wurden, gilt die 30-kWp-Grenze einheitlich je Einheit – auch in Mehrfamilienhäusern.'),
      ),
      p(
        t('Die Befreiung wirkt automatisch und hat einen angenehmen Nebeneffekt: '),
        bold('Es entfällt die komplette Gewinnermittlung'),
        t(' – keine Einnahmen-Überschuss-Rechnung, keine Anlage EÜR, keine Abschreibungstabellen. Die Anlage taucht in der Steuererklärung schlicht nicht mehr auf. Die Kehrseite: Kosten der Anlage lassen sich im Gegenzug auch nicht mehr steuerlich absetzen.'),
      ),
    ),
    hinweisBlock(
      'Anmelden ja – nur nicht beim Finanzamt',
      p(
        t('Steuerfrei heißt nicht meldefrei: Die Anmeldung im Marktstammdatenregister und beim Netzbetreiber bleibt Pflicht, ebenso ggf. die vereinfachte Mitteilung ans Finanzamt bei Betriebseröffnung in Sonderfällen. Was wohin gemeldet wird, haben wir im Ratgeber „PV-Anlage anmelden: Netzbetreiber und Marktstammdatenregister" zusammengestellt – bei uns ist das Teil der Installation.'),
      ),
    ),
    tabelleBlock('Die Steuerlage im Überblick (Stand 2026)', [
      {
        spalte1: 'Umsatzsteuer beim Kauf',
        spalte2: '0 % (Nullsteuersatz)',
        spalte3: 'PV bis 30 kWp auf/an Wohngebäuden, inkl. Speicher und Installation',
      },
      {
        spalte1: 'Einkommensteuer auf Erträge',
        spalte2: 'Befreit',
        spalte3: 'Bis 30 kWp je Einheit, max. 100 kWp je Person – automatisch, ohne Antrag',
      },
      {
        spalte1: 'Gewinnermittlung / EÜR',
        spalte2: 'Entfällt',
        spalte3: 'Keine Anlage EÜR, keine Abschreibung – aber auch kein Kostenabzug',
      },
      {
        spalte1: 'Gewerbesteuer',
        spalte2: 'Regelmäßig keine',
        spalte3: 'Kleine Anlagen sind von der Gewerbesteuer befreit; keine IHK-Pflichtmitgliedschaft',
      },
      {
        spalte1: 'Speicher-Nachrüstung',
        spalte2: '0 % USt',
        spalte3: 'Auch die spätere Nachrüstung fällt unter den Nullsteuersatz',
      },
      {
        spalte1: 'Reparatur & Erweiterung',
        spalte2: 'Differenziert',
        spalte3: 'Erweiterungen/Austausch von PV-Komponenten: 0 %. Reine Wartungs-/Reparaturdienstleistungen: teils 19 % – im Angebot ausweisen lassen',
      },
    ]),
    textBlock(
      h('h2', t('Wo es kompliziert bleibt')),
      ul(
        p(
          bold('Größere Anlagen:'),
          t(' Oberhalb der 30-kWp-Grenzen (bzw. 100 kWp je Person) gelten die normalen Regeln – Gewinnermittlung, Umsatzsteuer-Optionen, Abschreibung. Für Gewerbedächer ist das kein Nachteil, sondern Gestaltungsspielraum; es gehört aber in fachkundige Planung.'),
        ),
        p(
          bold('Bestandsanlagen mit Regelbesteuerung:'),
          t(' Wer vor 2023 zur Umsatzsteuer optiert hat, um die Vorsteuer zu ziehen, bleibt zunächst im System und muss den Wechsel zur Kleinunternehmerregelung mit Fristen sauber vollziehen – ein klassisches Steuerberater-Thema.'),
        ),
        p(
          bold('Vermietung, WEG und Mieterstrom:'),
          t(' Sobald Strom an Dritte verkauft wird, entstehen eigene steuerliche Fragen. Für Wohnungseigentümergemeinschaften gibt es Lösungen – aber keine Pauschalantworten.'),
        ),
      ),
    ),
    tippBlock(
      'Steuerfreiheit in die Wirtschaftlichkeit einpreisen',
      p(
        t('Die Steuerbefreiungen sind ein stiller Renditetreiber: 0 % statt 19 % Mehrwertsteuer wirkt wie ein Rabatt von rund 16 % auf den Bruttopreis von früher, und die steuerfreien Erträge machen die Amortisationsrechnung einfacher und besser. Wie sich das konkret auswirkt, zeigt unser Beitrag zur Amortisation der PV-Anlage.'),
      ),
    ),
    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Für die typische Anlage auf dem Einfamilienhaus ist die Steuerfrage heute erfreulich langweilig: 0 % beim Kauf, steuerfreie Erträge, kein Papierkram – der Gesetzgeber hat private PV bewusst entbürokratisiert. Wichtig ist nur, die Grenzen zu kennen und Sonderfälle zu erkennen, bevor sie teuer werden.'),
      ),
      p(
        bold('Wir weisen den Nullsteuersatz sauber im Angebot aus'),
        t(' und übernehmen die Anmeldungen bei Netzbetreiber und Marktstammdatenregister. Steuerliche Einzelfallberatung dürfen und wollen wir nicht ersetzen – bei Sonderkonstellationen arbeiten wir mit Ihrem Steuerberater zusammen statt an ihm vorbei.'),
      ),
    ),
    ctaBlock({
      titel: 'Angebot mit 0 % Mehrwertsteuer anfragen',
      text:
        'Transparente Preise mit Nullsteuersatz, Anmeldung inklusive – und eine Wirtschaftlichkeitsrechnung, in der die Steuervorteile korrekt eingepreist sind.',
      buttonText: 'Angebot anfragen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Muss ich für den Nullsteuersatz etwas beantragen?',
      'Nein. Der Nullsteuersatz wird direkt vom Installationsbetrieb in der Rechnung angewendet – Sie zahlen schlicht keinen Umsatzsteueraufschlag. Voraussetzung ist nur, dass die Anlage die Kriterien erfüllt (bis 30 kWp auf/an Wohngebäuden gilt das pauschal).',
    ),
    faqItem(
      'Gilt die 0 % Mehrwertsteuer auch für den Batteriespeicher?',
      'Ja – Speicher fallen ausdrücklich unter den Nullsteuersatz, sowohl beim gemeinsamen Kauf mit der Anlage als auch bei späterer Nachrüstung. Gleiches gilt für wesentliche Komponenten wie Wechselrichter und Montagesystem.',
    ),
    faqItem(
      'Muss ich die Einspeisevergütung in der Steuererklärung angeben?',
      'Bei Anlagen innerhalb der Befreiungsgrenzen: nein. Die Einnahmen sind steuerfrei gestellt und die Gewinnermittlung entfällt komplett – die Anlage taucht in der Einkommensteuererklärung nicht auf.',
    ),
    faqItem(
      'Was gilt, wenn ich meine Anlage später erweitere?',
      'Die Erweiterung (zusätzliche Module, größerer Wechselrichter, Speicher) fällt ebenfalls unter den Nullsteuersatz, solange die Anlage die Kriterien weiter erfüllt. Aufpassen bei der Einkommensteuer: Wer mit der Erweiterung über die 30-kWp-Grenze je Einheit rutscht, verliert die Befreiung – vorher rechnen.',
    ),
    faqItem(
      'Ich habe eine Altanlage mit Regelbesteuerung – was soll ich tun?',
      'Prüfen lassen, ob und wann der Wechsel in die Kleinunternehmerregelung sinnvoll ist – dabei spielen Fristen und ggf. die Vorsteuer-Berichtigung eine Rolle. Das ist ein Fall für den Steuerberater; die technische Seite (z. B. Repowering oder Speicher-Nachrüstung) planen wir gern parallel dazu.',
    ),
  ],
}

await upsertRatgeberArticle(article)
