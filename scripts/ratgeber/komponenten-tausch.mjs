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
  titel: 'Komponenten-Tausch: Wenn nicht die ganze Anlage neu muss',
  slug: 'komponenten-tausch',
  kategorie: 'repowering',
  status: 'veroeffentlicht',
  teaser:
    'Repowering heißt nicht automatisch Komplettabriss. Oft reicht der gezielte Tausch einzelner Komponenten – meistens des Wechselrichters. Welche Bauteile wie lange halten, wann sich der Einzeltausch lohnt, wo seine Grenzen liegen und warum alte Module ein Ersatzteilproblem haben.',
  lesezeit: 8,
  seo: seo(
    'PV-Komponenten tauschen: Wechselrichter, Module, Verkabelung | PEAK.Energy',
    'Komponenten-Tausch statt Komplett-Repowering: Wann sich Wechselrichter-Tausch lohnt, warum Einzelmodul-Ersatz schwierig ist und wo die Grenze zum vollständigen Repowering verläuft.',
  ),
  zusammenfassung: [
    summaryPoint(
      t('Der '),
      bold('Wechselrichter'),
      t(' ist das Bauteil mit der kürzesten Lebensdauer – nach 10 bis 15 Jahren ist sein Tausch der Normalfall, kein Defektzeichen der Anlage.'),
    ),
    summaryPoint(
      t('Module halten deutlich länger (20–30+ Jahre), aber der '),
      bold('Ersatz einzelner Altmodule'),
      t(' scheitert oft an Verfügbarkeit und Kompatibilität – alte Modultypen werden schlicht nicht mehr gebaut.'),
    ),
    summaryPoint(
      t('Ein moderner Hybrid-Wechselrichter beim Tausch öffnet die Tür für '),
      bold('Speicher, Monitoring und Energiemanagement'),
      t(' – der Tausch ist oft der Einstieg ins Repowering, nicht nur eine Reparatur.'),
    ),
    summaryPoint(
      t('Ab einer gewissen Mängeldichte kippt die Rechnung: Wer in drei Jahren dreimal repariert, hätte einmal richtig erneuern sollen.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Lebensdauer: Was wann fällig wird')),
      p(
        t('Eine PV-Anlage altert nicht gleichmäßig. Die Module degradieren langsam und planbar – gute kristalline Module verlieren nur einen Bruchteil ihrer Leistung pro Jahr und arbeiten auch nach 25 Jahren noch ordentlich. Die Leistungselektronik dagegen hat ein hartes Leben: Der Wechselrichter arbeitet täglich unter Last, seine Kondensatoren und Lüfter altern thermisch.'),
      ),
      p(
        t('Deshalb ist die typische Reparatur-Biografie einer Anlage klar: '),
        bold('ein bis zwei Wechselrichter-Generationen pro Modul-Generation'),
        t('. Dazu kommen die stillen Alterungskandidaten: DC-Steckverbinder, die korrodieren, Leitungen mit spröder Isolierung, und gelegentlich einzelne Module mit defekten Bypass-Dioden.'),
      ),
    ),
    tabelleBlock('Typische Lebensdauern der Komponenten', [
      {
        spalte1: 'Module (kristallin)',
        spalte2: '25–30+ Jahre',
        spalte3: 'Langsame Degradation; Totalausfälle selten, meist Einzeldefekte',
      },
      {
        spalte1: 'Wechselrichter',
        spalte2: '10–15 Jahre',
        spalte3: 'Häufigster Tauschfall – Kondensatoren und Lüfter altern thermisch',
      },
      {
        spalte1: 'DC-Steckverbinder & Verkabelung',
        spalte2: '15–25 Jahre',
        spalte3: 'Witterungsabhängig; Korrosion und spröde Isolierung sind Sicherheitsthemen',
      },
      {
        spalte1: 'Unterkonstruktion (Aluminium)',
        spalte2: '30+ Jahre',
        spalte3: 'Meist unkritisch – prüfen sollte man Dachhaken und Dichtungen',
      },
      {
        spalte1: 'Zähler-/Messtechnik',
        spalte2: 'regulatorisch getrieben',
        spalte3: 'Umrüstung auf moderne Messeinrichtung bzw. iMSys erfolgt im Rollout ohnehin',
      },
    ]),
    textBlock(
      h('h2', t('Der Wechselrichter-Tausch: Mehr als Ersatz')),
      p(
        t('Wenn der alte Wechselrichter fällig ist, stellt sich die eigentliche Frage: '),
        bold('gleichwertig ersetzen oder aufrüsten?'),
        t(' Ein moderner Ersatz bringt ohnehin besseren Wirkungsgrad, präziseres MPP-Tracking und Monitoring ab Werk. Der interessantere Schritt ist aber der Wechsel auf einen Hybrid-Wechselrichter: Er macht die Anlage speicherfähig – und damit bereit für Eigenverbrauch, Notstrom und dynamische Tarife.'),
      ),
      p(
        t('Zu klären ist die Passung: Strangspannungen und -ströme der Altmodule müssen zum neuen Gerät passen, die Anlage muss nach aktuellen Netzanschlussregeln angemeldet werden, und je nach Konstellation zieht der Tausch eine Anpassung im Zählerschrank nach sich. Das ist Routine für den Fachbetrieb – aber genau der Grund, warum ein Wechselrichter-Tausch kein Bestellvorgang, sondern ein kleines Planungsprojekt ist. Welche Architektur wann gewinnt, vergleichen wir im Ratgeber „Hybrid-Wechselrichter oder getrennte Geräte?".'),
      ),
    ),
    hinweisBlock(
      'Das Ersatzteilproblem alter Module',
      p(
        t('Fällt ein einzelnes Modul aus, wird es kompliziert: Den Modultyp von 2009 stellt niemand mehr her, und ein modernes Modul hat andere Maße, andere Leistung und andere elektrische Werte – es passt weder mechanisch noch elektrisch sauber in den alten Strang. Die Optionen: gebrauchte baugleiche Module aus dem Zweitmarkt, das Stilllegen oder Umverdrahten des betroffenen Strangs – oder, bei mehreren Defekten, der Belegungstausch als Teil-Repowering. Pauschal richtig ist keine davon; das entscheidet die Messung.'),
      ),
    ),
    textBlock(
      h('h2', t('Wo der Einzeltausch endet')),
      p(
        t('Der Komponenten-Tausch hat einen natürlichen Feind: die Summe. Jeder Einzeleingriff kostet Anfahrt, Arbeitszeit und oft Gerüst – wer über drei Jahre erst den Wechselrichter, dann zwei Module, dann die Steckverbinder tauscht, zahlt dreimal Nebenkosten und hat am Ende trotzdem eine alte Anlage.'),
      ),
      ul(
        p(t('Ein Eingriff, klare Ursache, Rest der Anlage gesund → Komponenten-Tausch ist die richtige Wahl.')),
        p(t('Mehrere Baustellen gleichzeitig (Wechselrichter + Modulmängel + Verkabelung) → die Vollkostenrechnung eines Repowerings anstellen, bevor stückweise repariert wird.')),
        p(t('Dach ohnehin sanierungsbedürftig oder EEG-Ende in Sicht → die große Lösung rechnen; die Weichenstellung dazu im Beitrag „Repowering vs. Neuanlage".')),
      ),
    ),
    tippBlock(
      'Beim Tausch gleich die Zukunft mitdenken',
      p(
        t('Wer den Wechselrichter tauscht, sollte die nächsten zehn Jahre mitbestellen: Speicheranschluss (auch wenn der Speicher erst später kommt), Monitoring, offene Schnittstellen für ein Energiemanagement und §14a-Konformität. Der Aufpreis für Zukunftsfähigkeit ist beim geplanten Tausch klein – eine spätere Nachrüstung gegen ein geschlossenes System dagegen teuer.'),
      ),
    ),
    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Der gezielte Komponenten-Tausch ist das Werkzeug für gesunde Anlagen mit einzelnen Schwachstellen – allen voran dem altersschwachen Wechselrichter. Richtig gemacht, ist er mehr als eine Reparatur: Mit Hybrid-Wechselrichter, Monitoring und offenen Schnittstellen wird die Altanlage zur Basis eines modernen Energiesystems.'),
      ),
      p(
        bold('Die Grenze zieht die Messung, nicht der Katalog'),
        t(': Erst der Diagnose-Check zeigt, ob ein Eingriff genügt oder die Mängelliste für ein Repowering spricht. Wir rechnen beide Wege transparent vor – inklusive der Nebenkosten, die bei der Stückwerk-Variante gern unterschlagen werden.'),
      ),
    ),
    ctaBlock({
      titel: 'Komponenten-Tausch prüfen lassen',
      text:
        'Vom Wechselrichter-Tausch bis zum Teil-Repowering: Wir messen, rechnen beide Varianten vor und bauen die Lösung, die sich rechnet – nicht die, die sich am besten verkauft.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Woran merke ich, dass der Wechselrichter schwächelt?',
      'Typische Signale: sinkende Erträge trotz unveränderter Module, sporadische Abschaltungen an heißen Tagen, Fehlermeldungen im Display oder Fehlerspeicher, lauter werdende Lüfter. Sicherheit gibt der Blick in die Ertragsdaten und den Fehlerspeicher – Teil unseres Diagnose-Checks.',
    ),
    faqItem(
      'Kann ich beim Wechselrichter-Tausch einfach das gleiche Modell wieder nehmen?',
      'Das Modell von vor 12 Jahren gibt es ohnehin nicht mehr. Der Nachfolger ist fast immer besser – die eigentliche Entscheidung lautet: reiner PV-Wechselrichter oder Hybrid mit Speicheranschluss? Wer perspektivisch Eigenverbrauch, Speicher oder Notstrom will, stellt beim Tausch die Weichen.',
    ),
    faqItem(
      'Lohnt es sich, einzelne schwache Module zu tauschen?',
      'Selten eins zu eins – alte Modultypen sind kaum noch beschaffbar, und moderne Module passen elektrisch wie mechanisch nicht sauber in alte Stränge. Meist ist Strang-Umverdrahtung, Zweitmarkt-Ersatz oder ein Teil-Repowering die bessere Lösung. Die Entscheidung sollte auf einer Strangmessung basieren.',
    ),
    faqItem(
      'Muss die Anlage nach einem Komponenten-Tausch neu angemeldet werden?',
      'Ein Wechselrichter-Tausch ist dem Netzbetreiber mitzuteilen und muss den aktuellen Anschlussregeln entsprechen; auch das Marktstammdatenregister ist zu aktualisieren. Kommt ein Speicher hinzu, gelten zusätzlich §14a und ggf. ein neues Messkonzept. Diese Formalitäten übernehmen wir im Rahmen der Installation.',
    ),
  ],
}

await upsertRatgeberArticle(article)
