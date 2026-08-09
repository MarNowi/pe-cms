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
  titel: 'Photovoltaik-Förderung 2026: Was es wirklich gibt – und was nur gut klingt',
  slug: 'photovoltaik-foerderung',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'Die große PV-Kaufprämie gibt es nicht – und trotzdem wird Photovoltaik 2026 auf mehreren Wegen gefördert: Nullsteuersatz, Einspeisevergütung, zinsgünstige Kredite und regionale Programme. Ein ehrlicher Überblick, welche Förderung wie viel bringt und in welcher Reihenfolge man vorgehen sollte.',
  lesezeit: 9,
  seo: seo(
    'Photovoltaik-Förderung 2026: Überblick für NRW & bundesweit | PEAK.Energy',
    'PV-Förderung 2026 im Überblick: 0 % Mehrwertsteuer, Einspeisevergütung, KfW-Kredit 270, progres.nrw und kommunale Programme – was wie viel bringt und worauf es bei der Reihenfolge ankommt.',
  ),
  zusammenfassung: [
    summaryPoint(
      t('Die zwei größten „Förderungen" stecken nicht in Antragsprogrammen: der '),
      bold('Nullsteuersatz (0 % MwSt)'),
      t(' beim Kauf und die '),
      bold('steuerfreie Einspeisevergütung'),
      t(' über 20 Jahre.'),
    ),
    summaryPoint(
      t('Die '),
      bold('KfW (Programm 270)'),
      t(' fördert über zinsgünstige Kredite statt Zuschüsse – interessant je nach Zinsumfeld und Finanzierungsbedarf.'),
    ),
    summaryPoint(
      t('Regionale Programme (Land, Kommunen, teils Netzbetreiber) kommen und gehen mit den Haushaltslagen – '),
      bold('vor Vertragsabschluss prüfen'),
      t(', denn viele fördern nur, was noch nicht beauftragt ist.'),
    ),
    summaryPoint(
      t('Wichtigste Regel: Erst Förderlage klären, dann bestellen – und keine Anlage kaufen, die sich nur mit Förderung rechnet.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Ebene 1: Die Förderung, die jeder bekommt')),
      p(
        t('Wer nach „PV-Förderung" sucht, erwartet meist einen Zuschuss-Antrag – und übersieht, dass die wirkungsvollste Förderung längst automatisch wirkt: Seit 2023 kostet die private PV-Anlage '),
        bold('0 % Mehrwertsteuer'),
        t(' (inklusive Speicher), und die Erträge sind bis 30 kWp '),
        bold('einkommensteuerfrei'),
        t('. Zusammen entspricht das einer Entlastung, die die meisten Zuschussprogramme alt aussehen lässt – ohne Antrag, ohne Warteliste, ohne Budgetdeckel. Die Details stehen im Beitrag „Photovoltaik und Steuern".'),
      ),
      p(
        t('Dazu kommt die '),
        bold('EEG-Einspeisevergütung'),
        t(': aktuell 7,70 ct/kWh für Überschusseinspeisung bis 10 kWp (Stand August 2026), garantiert für 20 Jahre ab Inbetriebnahme. Sie sinkt halbjährlich leicht ab – und für 2027 wird über eine grundlegende Reform beraten. Wer 2026 in Betrieb nimmt, sichert sich die heutigen Konditionen mit vollem Bestandsschutz.'),
      ),
    ),
    textBlock(
      h('h2', t('Ebene 2: Zinsgünstige Finanzierung')),
      p(
        t('Die bundesweite Investitionsförderung läuft über die '),
        bold('KfW mit dem Programm 270 („Erneuerbare Energien – Standard")'),
        t(': ein zinsgünstiger Kredit für PV, Speicher und zugehörige Kosten, beantragt über die Hausbank vor Vorhabensbeginn. Ob er sich lohnt, hängt vom aktuellen Zinsumfeld und den Konditionen der Hausbank ab – je nach Marktlage ist eine normale Baufinanzierungs- oder Modernisierungslinie gleichwertig oder besser.'),
      ),
      p(
        t('Unsere Einordnung: Der KfW-Kredit ist ein Finanzierungsbaustein, kein Geschenk. Er senkt die Hürde, macht die Anlage aber nicht „billiger". Wie sich Finanzierung und 0-€-Anzahlung kombinieren lassen, zeigen wir auf der Seite zur PV-Finanzierung.'),
      ),
    ),
    textBlock(
      h('h2', t('Ebene 3: Land, Kommune, Netzbetreiber')),
      p(
        t('Unterhalb der Bundesebene wird es kleinteilig – und schnelllebig. In NRW ist das Landesprogramm '),
        bold('progres.nrw'),
        t(' die zentrale Adresse; welche Bausteine dort aktuell beantragbar sind, wechselt mit der Haushaltslage. Dazu kommen einzelne Städte und Kreise mit eigenen Zuschüssen – oft für Speicher, Gründach-Kombinationen oder steckerfertige Anlagen – sowie punktuelle Aktionen von Stadtwerken.'),
      ),
      p(
        bold('Zwei Eigenheiten dieser Programme muss man kennen:'),
        t(' Erstens gilt fast überall der Grundsatz, dass nur gefördert wird, was zum Antragszeitpunkt noch nicht beauftragt ist – wer erst bestellt und dann beantragt, geht leer aus. Zweitens sind die Budgets gedeckelt und oft schnell erschöpft. Beides spricht dafür, die Förderlage früh im Projekt zu prüfen, nicht am Ende. Für Speicher haben wir die NRW-Situation im Beitrag „Stromspeicher Förderung NRW" aufgeschrieben.'),
      ),
    ),
    tabelleBlock('PV-Förderung 2026 im Überblick', [
      {
        spalte1: 'Nullsteuersatz (0 % MwSt)',
        spalte2: 'Automatisch beim Kauf',
        spalte3: 'Größter Einzeleffekt – gilt für Anlage, Speicher und Installation bis 30 kWp',
      },
      {
        spalte1: 'Einkommensteuer-Befreiung',
        spalte2: 'Automatisch',
        spalte3: 'Erträge bis 30 kWp je Einheit steuerfrei, keine Gewinnermittlung',
      },
      {
        spalte1: 'EEG-Einspeisevergütung',
        spalte2: 'Mit Anmeldung, 20 Jahre garantiert',
        spalte3: 'Aktuell 7,70 ct/kWh (Überschuss, bis 10 kWp); Volleinspeisung höher vergütet',
      },
      {
        spalte1: 'KfW 270',
        spalte2: 'Kreditantrag über Hausbank, vor Vorhabensbeginn',
        spalte3: 'Zinsgünstige Finanzierung – lohnt je nach Zinsumfeld, kein Zuschuss',
      },
      {
        spalte1: 'progres.nrw / Landesprogramme',
        spalte2: 'Antrag vor Beauftragung',
        spalte3: 'Bausteine und Budgets wechseln – tagesaktuell prüfen',
      },
      {
        spalte1: 'Kommunale Programme',
        spalte2: 'Antrag vor Beauftragung',
        spalte3: 'Sehr unterschiedlich je Stadt/Kreis; Budgets oft schnell erschöpft',
      },
      {
        spalte1: 'Wärmepumpen-Förderung (KfW)',
        spalte2: 'Separates Programm',
        spalte3: 'Bis zu 70 % Zuschuss für den Heizungstausch – Details im WP-Förder-Ratgeber',
      },
    ]),
    hinweisBlock(
      'Vorsicht vor der Förder-Verkaufsmasche',
      p(
        t('„Nur diese Woche: staatliche Förderung sichern!" ist ein Klassiker unseriöser Vertriebe – meist wird dabei der ohnehin geltende Nullsteuersatz als exklusiver Rabatt verkauft oder mit Programmen geworben, die längst erschöpft sind. Seriös ist das Gegenteil: Eine Anlage muss sich aus Eigenverbrauch und Einspeisung rechnen; jede echte Förderung ist Bonus, nicht Geschäftsgrundlage. Wie man solche Angebote erkennt, steht auch im Beitrag „Typische Fehler bei Solaranlagen".'),
      ),
    ),
    tippBlock(
      'Die richtige Reihenfolge',
      p(
        t('1. Anlage sauber auslegen und Angebot einholen. 2. Förderlage prüfen – Landes- und kommunale Programme vor der Beauftragung beantragen, KfW-Finanzierung über die Hausbank anstoßen. 3. Erst dann beauftragen. Wir prüfen im Rahmen unseres Fördermittelservice, welche Programme zum Projekt und Standort aktuell offen sind, und liefern die technischen Unterlagen für die Anträge zu.'),
      ),
    ),
    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die PV-Förderung 2026 ist unspektakulär, aber solide: Steuerbefreiung und Einspeisevergütung tragen die Wirtschaftlichkeit, Kredite und regionale Zuschüsse sind das Sahnehäubchen für die, die zur richtigen Zeit am richtigen Ort beantragen. Wer eine Anlage nur wegen eines Zuschusses kauft, kauft falsch – wer einen offenen Zuschuss liegen lässt, verschenkt Geld.'),
      ),
      p(
        bold('Wir rechnen die Anlage grundsätzlich ohne Zuschüsse wirtschaftlich'),
        t(' – und holen dann alles heraus, was tatsächlich verfügbar ist. So bleibt die Entscheidung robust, auch wenn ein Programm ausläuft, bevor der Antrag durch ist.'),
      ),
    ),
    ctaBlock({
      titel: 'Förderlage für Ihr Projekt prüfen lassen',
      text:
        'Wir legen Ihre Anlage so aus, dass sie sich ohne Zuschuss rechnet – und prüfen mit unserem Fördermittelservice, welche Programme aktuell zusätzlich offen sind.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Gibt es 2026 einen direkten staatlichen Zuschuss für PV-Anlagen?',
      'Bundesweit nein – die Bundesförderung läuft über Steuerbefreiungen, Einspeisevergütung und KfW-Kredite. Direkte Zuschüsse gibt es nur regional (Land, Kommune, teils Stadtwerke), mit wechselnden Budgets. Deshalb: vor der Beauftragung tagesaktuell prüfen.',
    ),
    faqItem(
      'Wie hoch ist die Einspeisevergütung aktuell?',
      'Für Anlagen bis 10 kWp mit Überschusseinspeisung 7,70 ct/kWh (Stand August 2026, Inbetriebnahmen bis 31. Januar 2027), größere Anlagenteile anteilig weniger, Volleinspeisung deutlich mehr. Die Sätze sinken halbjährlich um 1 %; der Satz zum Inbetriebnahmezeitpunkt gilt dann 20 Jahre. Details im Ratgeber zur Einspeisevergütung.',
    ),
    faqItem(
      'Ändert sich die Förderung 2027?',
      'Möglicherweise: Eine EEG-Reform ist in Beratung, die die feste Einspeisevergütung für Neuanlagen ab 2027 durch ein anderes Modell ersetzen könnte – beschlossen ist sie noch nicht. Sicher ist der Bestandsschutz: Wer vorher in Betrieb nimmt, behält seine Konditionen 20 Jahre. Das ist ein sachliches Argument, Projekte nicht unnötig zu schieben – aber kein Grund für Panik-Käufe.',
    ),
    faqItem(
      'Kann ich KfW-Kredit und Landeszuschuss kombinieren?',
      'Häufig ja – Kredit und Zuschuss schließen sich meist nicht aus, solange die Programme keine Ausschlussklauseln enthalten. Entscheidend sind die Bedingungen des jeweiligen Zuschussprogramms und die Reihenfolge (Anträge vor Beauftragung). Genau diese Kombination prüfen wir im Fördermittelservice.',
    ),
    faqItem(
      'Wird der Speicher separat gefördert?',
      'Der Nullsteuersatz gilt für den Speicher automatisch mit. Zusätzliche Speicher-Zuschüsse gibt es nur regional und mit wechselnder Verfügbarkeit – den aktuellen Stand für NRW fassen wir im Beitrag „Stromspeicher Förderung NRW" zusammen.',
    ),
  ],
}

await upsertRatgeberArticle(article)
