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
  titel: 'Wirtschaftlichkeit nach dem EEG-Ende: Weiterbetrieb, Umrüstung oder Repowering?',
  slug: 'wirtschaftlichkeit-eeg',
  kategorie: 'repowering',
  status: 'veroeffentlicht',
  teaser:
    'Nach 20 Jahren endet die EEG-Vergütung – und aus der Renditeanlage wird ein Rechenexempel. Drei Wege stehen offen: weiterlaufen lassen, auf Eigenverbrauch umrüsten oder neu bauen. Welche Option wann gewinnt und welche Zahlen wirklich in die Rechnung gehören.',
  lesezeit: 9,
  seo: seo(
    'PV-Wirtschaftlichkeit nach EEG-Ende: 3 Optionen im Vergleich | PEAK.Energy',
    'EEG-Vergütung läuft aus – was nun? Weiterbetrieb mit Anschlussvergütung, Umrüstung auf Eigenverbrauch mit Speicher oder Repowering mit neuer Vergütung: die Wirtschaftlichkeit ehrlich verglichen.',
  ),
  zusammenfassung: [
    summaryPoint(
      t('Die EEG-Vergütung läuft '),
      bold('20 Jahre plus Inbetriebnahmejahr'),
      t(' – für Anlagen von 2006 ist jetzt Schluss, die starken Jahrgänge 2009–2012 folgen.'),
    ),
    summaryPoint(
      t('Der automatische Weiterbetrieb bringt nur die '),
      bold('Anschlussvergütung'),
      t(' (Jahresmarktwert minus Vermarktungspauschale, aktuell netto rund 4 ct/kWh) – nach derzeitigem Stand befristet bis Ende 2032.'),
    ),
    summaryPoint(
      t('Für die meisten Haushalte ist die '),
      bold('Umrüstung auf Eigenverbrauch'),
      t(' – meist mit Speicher – die wirtschaftlichste Option: Selbst genutzter Strom ist rund das Zehnfache der Anschlussvergütung wert.'),
    ),
    summaryPoint(
      bold('Repowering'),
      t(' gewinnt, wenn die Alttechnik schwächelt oder das Dach mehr hergibt: Neue Anlagen bekommen wieder 20 Jahre EEG-Vergütung – bei drei- bis vierfacher Leistung vom selben Dach.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Die Ausgangslage: Was nach 20 Jahren passiert')),
      p(
        t('Die EEG-Einspeisevergütung gilt für 20 volle Kalenderjahre nach dem Inbetriebnahmejahr. Danach fällt die Anlage nicht ins Nichts: Sie darf weiter einspeisen und erhält als „ausgeförderte Anlage" eine Anschlussvergütung in Höhe des '),
        bold('Jahresmarktwerts Solar abzüglich einer Vermarktungskostenpauschale'),
        t(' – zuletzt netto rund 4 ct/kWh, nach aktuellem Stand befristet bis Ende 2032.'),
      ),
      p(
        t('Zum Vergleich: Wer früh eingespeist hat, bekam 40, 50 Cent und mehr pro Kilowattstunde. Der Absturz auf 4 Cent ist also brutal – aber er ist kein Grund zur Panik, sondern der Startschuss für eine Neubewertung. Denn die Anlage selbst ist abgeschrieben, läuft oft noch ordentlich und produziert Strom, der im eigenen Haus ein Vielfaches wert ist.'),
      ),
    ),
    textBlock(
      h('h2', t('Option 1: Einfach weiterlaufen lassen')),
      p(
        t('Der Weiterbetrieb mit Volleinspeisung passiert automatisch – kein Umbau, keine Investition. Bei einer 5-kWp-Anlage mit 4.500 kWh Jahresertrag bedeutet das: rund 180 € Erlös pro Jahr. Das deckt Betriebskosten wie Versicherung und Rücklagen gerade so – '),
        bold('verdient wird hier nichts mehr'),
        t('.'),
      ),
      p(
        t('Als Dauerlösung überzeugt das selten. Sinnvoll ist der unveränderte Weiterbetrieb vor allem als Überbrückung: wenn die Entscheidung über Umrüstung oder Repowering noch aussteht oder das Dach mittelfristig ohnehin saniert werden muss.'),
      ),
    ),
    textBlock(
      h('h2', t('Option 2: Auf Eigenverbrauch umrüsten')),
      p(
        t('Die Umstellung auf Überschusseinspeisung dreht die Logik um: Erst versorgt die Anlage das eigene Haus, nur der Rest geht ins Netz. Jede selbst genutzte Kilowattstunde ersetzt Netzstrom für 30–40 Cent – '),
        bold('rund das Zehnfache der Anschlussvergütung'),
        t('. Technisch braucht es dafür wenig: Zweirichtungszähler, angepasstes Messkonzept, Anmeldung – ein überschaubarer Eingriff.'),
      ),
      p(
        t('Den großen Hebel liefert der Speicher: Ohne ihn nutzt der Haushalt vielleicht 30 % des Solarstroms selbst, mit passendem Speicher deutlich mehr als das Doppelte. Bei einem Reststrompreis-Niveau von 35 Cent trägt die Kombination aus abgeschriebener Anlage und neuem Speicher die Speicherinvestition in vielen Fällen über die Laufzeit – wie schnell, hängt am Lastprofil. Die technischen Wege dazu stehen im Beitrag „Speicher nachrüsten".'),
      ),
    ),
    textBlock(
      h('h2', t('Option 3: Repowering – neu bauen auf bewährtem Dach')),
      p(
        t('Die dritte Option nutzt einen einfachen Fakt: Moderne Module holen aus derselben Dachfläche '),
        bold('das Drei- bis Vierfache der Leistung von 2005'),
        t('. Aus der alten 4-kWp-Anlage werden 12–15 kWp – mit neuer Technik, neuer Garantiezeit und wieder '),
        bold('20 Jahren EEG-Vergütung'),
        t(' zum aktuellen Satz für die Überschusseinspeisung.'),
      ),
      p(
        t('Repowering gewinnt die Rechnung immer dann, wenn ohnehin investiert werden müsste – schwächelnde Module, fälliger Wechselrichter, anstehende Dachsanierung – oder wenn der Strombedarf gewachsen ist: E-Auto und Wärmepumpe verwandeln jede zusätzliche Kilowattstunde vom Dach in vermiedene Netzkosten. Was der Umbau kostet, steht im Ratgeber „Was kostet ein Repowering?"; die Abwägung gegen die kleine Lösung im Beitrag „Repowering vs. Neuanlage".'),
      ),
    ),
    tabelleBlock('Die drei Optionen im Vergleich (typisches EFH, Ü20-Anlage)', [
      {
        spalte1: 'Weiterbetrieb (Volleinspeisung)',
        spalte2: 'Investition: 0 € · Erlös: ~4 ct/kWh',
        spalte3: 'Deckt kaum die Betriebskosten – als Überbrückung okay, als Dauerlösung schwach; Anschlussvergütung zudem befristet',
      },
      {
        spalte1: 'Umrüstung auf Eigenverbrauch + Speicher',
        spalte2: 'Investition: moderat (Zähler, ggf. Speicher)',
        spalte3: 'Für die meisten Haushalte die wirtschaftlichste Option – Wert je kWh springt von ~4 auf 30–40 ct',
      },
      {
        spalte1: 'Repowering (Neuanlage)',
        spalte2: 'Investition: am höchsten',
        spalte3: 'Drei- bis vierfache Leistung, neue Technik, 20 Jahre neue EEG-Vergütung – stark bei Defekten, Dachsanierung oder wachsendem Verbrauch',
      },
    ]),
    hinweisBlock(
      'Die Rechnung braucht echte Zahlen',
      p(
        t('Pauschalaussagen („Repowering lohnt immer", „bloß nichts investieren") führen in die Irre. In die ehrliche Rechnung gehören: technischer Zustand (Diagnose-Check), reales Lastprofil, künftige Verbraucher wie E-Auto und Wärmepumpe, Zustand der Dachhaut, Strompreisannahmen und die Restlaufzeit der Anschlussvergütung. Zwei Nachbarn mit identischen Anlagen können zu Recht unterschiedliche Entscheidungen treffen.'),
      ),
    ),
    tippBlock(
      'Das EEG-Ende nicht abwarten, sondern planen',
      p(
        t('Wer ein bis zwei Jahre vor dem Vergütungsende plant, entscheidet in Ruhe: Diagnose-Check machen, Optionen mit echten Zahlen durchrechnen, Umbau in die ohnehin anstehenden Arbeiten integrieren. Wer erst nach dem Auslaufen reagiert, verschenkt Monate mit 4-Cent-Einspeisung – und entscheidet unter Zeitdruck meist teurer.'),
      ),
    ),
    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Das EEG-Ende ist kein Ende, sondern eine Weggabelung mit drei Richtungen. Der reine Weiterbetrieb ist die bequemste und schwächste Option. Die Umrüstung auf Eigenverbrauch – meist mit Speicher – ist für die Mehrheit der Haushalte der wirtschaftlichste Weg. Und das Repowering ist die richtige Antwort, wenn Technik oder Dach ohnehin Investitionen fordern oder der Strombedarf des Hauses gewachsen ist.'),
      ),
      p(
        bold('Wir rechnen alle drei Wege mit Ihren Zahlen durch'),
        t(' – Zustand, Lastprofil, Dach und Pläne fürs Haus – und legen die Annahmen offen. Am Ende steht eine Empfehlung, die man nachrechnen kann. Ohne Schönrechnen, ohne Verkaufsdruck.'),
      ),
    ),
    ctaBlock({
      titel: 'Ü20-Anlage durchrechnen lassen',
      text:
        'Weiterbetrieb, Umrüstung oder Repowering? Wir prüfen Zustand und Zahlen Ihrer Anlage und vergleichen alle drei Optionen transparent – mit Empfehlung zum Nachrechnen.',
      buttonText: 'Wirtschaftlichkeits-Check anfragen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Wann genau endet meine EEG-Vergütung?',
      'Nach 20 vollen Kalenderjahren zusätzlich zum Inbetriebnahmejahr: Eine im Juni 2006 in Betrieb genommene Anlage wird bis 31. Dezember 2026 vergütet. Das Datum steht in der Inbetriebnahmebestätigung bzw. beim Netzbetreiber.',
    ),
    faqItem(
      'Wie hoch ist die Anschlussvergütung für ausgeförderte Anlagen?',
      'Sie entspricht dem Jahresmarktwert Solar abzüglich einer Vermarktungskostenpauschale – zuletzt netto rund 4 ct/kWh, der genaue Wert schwankt mit den Börsenpreisen des jeweiligen Jahres. Nach aktueller Rechtslage ist diese Regelung bis Ende 2032 befristet.',
    ),
    faqItem(
      'Muss ich nach dem EEG-Ende etwas unternehmen?',
      'Nein – der Weiterbetrieb mit Anschlussvergütung läuft automatisch. Ratsam ist trotzdem ein technischer Check (Stichwort Sicherheit und Minderertrag) und eine bewusste Entscheidung über die Zukunft der Anlage, statt sie einfach bei 4 Cent weiterlaufen zu lassen.',
    ),
    faqItem(
      'Lohnt sich ein Speicher für meine Ü20-Anlage?',
      'Oft ja – die Anlage ist abgeschrieben, und jede selbst genutzte Kilowattstunde ist rund das Zehnfache der Anschlussvergütung wert. Ob und wie schnell sich der Speicher trägt, hängt vom Lastprofil und der Anlagengröße ab. Voraussetzung ist ein gesunder technischer Zustand – deshalb zuerst der Diagnose-Check.',
    ),
    faqItem(
      'Bekomme ich nach einem Repowering wirklich wieder die volle EEG-Vergütung?',
      'Ja – eine neue Anlage erhält die aktuelle EEG-Vergütung für 20 Jahre, unabhängig davon, dass auf dem Dach vorher eine geförderte Anlage stand. Die Sätze sind niedriger als vor 20 Jahren, dafür erzeugt die neue Anlage ein Mehrfaches – und der Eigenverbrauch ist heute der größere Werttreiber.',
    ),
  ],
}

await upsertRatgeberArticle(article)
