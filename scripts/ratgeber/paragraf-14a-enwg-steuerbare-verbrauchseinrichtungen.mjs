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
  titel: '§14a EnWG: Was die Pflicht zur Steuerbarkeit für Wallbox, Wärmepumpe und Speicher bedeutet',
  slug: 'paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen',
  kategorie: 'wallbox',
  status: 'veroeffentlicht',
  teaser:
    'Seit 2024 müssen neue Wallboxen, Wärmepumpen und Speicher steuerbar an den Netzbetreiber angeschlossen werden. Was das im Alltag wirklich bedeutet, welche Modelle es gibt und wo typische Denkfehler liegen.',
  lesezeit: 12,

  seo: seo(
    '§14a EnWG erklärt: Wallbox, Wärmepumpe, Speicher | PEAK.Energy',
    '§14a EnWG: ehrliche Einordnung zur Pflicht der Steuerbarkeit für Wallbox, Wärmepumpe und Speicher. Was Modul 1 und Modul 2 bedeuten, wie oft eine Drosselung wirklich kommt und was Bauherren ab 2024 beachten müssen.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Seit 1. Januar 2024 müssen neue steuerbare Verbrauchseinrichtungen wie Wallboxen, Wärmepumpen und Speicher an den Netzbetreiber angemeldet und steuerbar ausgeführt werden. Das regelt der überarbeitete '),
      bold('§14a EnWG'),
      t('.'),
    ),
    summaryPoint(
      t('Der Netzbetreiber darf in seltenen Engpasssituationen die Leistung auf '),
      bold('mindestens 4,2 kW'),
      t(' begrenzen – nicht abschalten. Damit bleibt eine Grundversorgung sichergestellt.'),
    ),
    summaryPoint(
      t('Im Gegenzug bekommt der Betreiber eine reduzierte Netzentgelt-Pauschale oder ein zeitvariables Netzentgelt. '),
      bold('Beide Modelle haben unterschiedliche Stärken'),
      t(' – die Wahl hängt vom Verbrauchsverhalten ab.'),
    ),
    summaryPoint(
      t('In der Praxis bleibt die Drosselung in vielen Regionen die Ausnahme. Sie betrifft nur einzelne Stunden im Jahr und meist nur dann, wenn das Netz tatsächlich ausgelastet ist.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es bei §14a EnWG?')),
      p(
        t('Das Stromnetz wurde nicht für die heutige Welt gebaut. Wenn in einer Straße gleichzeitig drei Wallboxen mit 11 kW laden, zwei Wärmepumpen heizen und mehrere Klimaanlagen laufen, gerät die Niederspannungsleitung an ihre Grenzen.'),
      ),
      p(
        t('Damit der Netzbetreiber neue Anschlüsse nicht generell verweigern muss, wurde der §14a Energiewirtschaftsgesetz überarbeitet. Seit dem 1. Januar 2024 gilt: '),
        bold('Neue steuerbare Verbrauchseinrichtungen mit mehr als 4,2 kW Anschlussleistung müssen über eine Steuerbox kommunikationsfähig angeschlossen werden'),
        t('. Im Gegenzug darf der Betrieb in Engpasszeiten gezielt reduziert werden.'),
      ),
      p(
        t('Wichtig ist die Einordnung: Es geht nicht um eine pauschale Drosselung im Alltag, sondern um eine Notbremse für seltene Engpässe. Im Normalbetrieb läuft die Anlage uneingeschränkt mit voller Leistung.'),
      ),
    ),

    hinweisBlock(
      'Pflicht statt Wahl',
      p(
        t('Wer ab 2024 eine neue Wallbox, Wärmepumpe oder einen Speicher mit über 4,2 kW Leistung in Betrieb nimmt, kann nicht entscheiden, ob er steuerbar wird – das ist gesetzlich vorgegeben. Wählen kann man nur das Abrechnungsmodell.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Geräte sind betroffen?')),
      p(
        t('Die Regelung bezieht sich auf Verbrauchseinrichtungen ab einer bestimmten Leistungsgröße, die typischerweise eine hohe und planbare Last erzeugen.'),
      ),
      p(
        t('Im Wesentlichen geht es um vier Geräte-Typen, die zunehmend in Wohnhäusern installiert werden und das Niederspannungsnetz herausfordern können.'),
      ),
    ),

    tabelleBlock('Steuerbare Verbrauchseinrichtungen nach §14a', [
      {
        spalte1: 'Wallbox / Ladepunkt',
        spalte2: 'ab 4,2 kW betroffen',
        spalte3:
          'gilt für reine Heim-Wallboxen ab 11 kW – aber auch für reduzierte 4,2-kW-Anschlüsse, die unter den Schwellenwert ausgelegt sind',
      },
      {
        spalte1: 'Wärmepumpe',
        spalte2: 'fast immer betroffen',
        spalte3:
          'bereits kleinere Wärmepumpen liegen über 4,2 kW Leistungsaufnahme – damit fällt nahezu jede neue Wärmepumpe unter §14a',
      },
      {
        spalte1: 'Stromspeicher',
        spalte2: 'ab 4,2 kW Ladeleistung betroffen',
        spalte3:
          'ein größerer Hausspeicher mit hoher Ladeleistung gilt als steuerbarer Verbraucher, sobald er über den Netzanschluss bezogen wird',
      },
      {
        spalte1: 'Klimaanlage',
        spalte2: 'in Einzelfällen',
        spalte3:
          'sehr leistungsstarke Klimaanlagen können ebenfalls unter die Regelung fallen, in der Praxis ist das aber selten der relevante Fall',
      },
    ]),

    tippBlock(
      'Bestandsanlagen sind nicht automatisch betroffen',
      p(
        t('Wer vor 2024 angemeldet hat und damals noch keine Steuerbox brauchte, bleibt im alten System. Die neue Regelung gilt nur für Neuanmeldungen ab dem Stichtag – außer es kommt zu einem Erweiterungs- oder Modernisierungsfall.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie funktioniert die Steuerung im Alltag?')),
      p(
        t('Die Steuerung läuft nicht über die App des Anbieters und auch nicht über eine Cloud-Plattform, sondern über eine Steuerbox am Hausanschluss. Sie kommuniziert direkt mit dem Netzbetreiber.'),
      ),
      p(
        t('Wenn das Netz an einem Punkt überlastet wäre, sendet der Netzbetreiber ein Signal. Die betroffenen Verbrauchseinrichtungen werden dann auf '),
        bold('mindestens 4,2 kW'),
        t(' reduziert – nicht abgeschaltet. Eine Wallbox mit 11 kW lädt also weiter, nur eben langsamer. Eine Wärmepumpe heizt weiter, nur eben mit reduzierter Aufnahme.'),
      ),
      p(
        t('Wichtig: Die Reduzierung darf in den meisten Fällen nicht länger als zwei Stunden am Stück und nicht mehr als zwei Stunden pro Tag andauern. Die Versorgung des Haushalts mit Licht, Kühlschrank, Kochen, Computer bleibt vollständig unberührt – sie liegt nicht im Anwendungsbereich des §14a.'),
      ),
    ),

    hinweisBlock(
      'Keine willkürliche Drosselung',
      p(
        t('Der Netzbetreiber darf nicht beliebig drosseln. Die Eingriffe sind auf konkrete Engpasssituationen beschränkt und müssen dokumentiert werden. In Regionen mit gut ausgebautem Netz kommt es im Jahr oft zu null bis wenigen Eingriffen.'),
      ),
    ),

    textBlock(
      h('h2', t('Modul 1 oder Modul 2: Was ist der Unterschied?')),
      p(
        t('Im Gegenzug zur Steuerbarkeit bekommt der Betreiber eine Vergünstigung beim Netzentgelt. Hier gibt es zwei Modelle zur Wahl, die sich grundlegend unterscheiden.'),
      ),
      p(
        bold('Modul 1: pauschale Reduzierung des Netzentgelts.'),
        t(' Der Netzentgelt-Anteil im Strompreis wird pauschal reduziert. Die Höhe hängt vom Netzbetreiber und der Region ab, liegt aber typischerweise zwischen 110 und 190 Euro pro Jahr.'),
      ),
      p(
        bold('Modul 2: zeitvariables Netzentgelt.'),
        t(' Statt einer Pauschale gilt ein dreistufiges Netzentgelt – günstig in Schwachlastzeiten, normal im Standardzeitfenster und teuer in Hochlastzeiten. Wer den Verbrauch gezielt in günstige Zeiten verschieben kann, profitiert deutlich stärker als im Modul 1.'),
      ),
      p(
        t('Modul 2 wird ab 2025 verbindlich angeboten und kann auch nachträglich gewählt werden. Wer das Modell flexibel ausnutzen will, braucht eine intelligente Steuerung – sonst bleibt der wirtschaftliche Vorteil theoretisch.'),
      ),
    ),

    tabelleBlock('Modul 1 vs. Modul 2 im Vergleich', [
      {
        spalte1: 'Modul 1 (pauschale Reduzierung)',
        spalte2: 'einfach und planbar',
        spalte3:
          'fester Rabatt aufs Netzentgelt, kein technischer Mehraufwand – sinnvoll für Haushalte ohne Energiemanagement-System',
      },
      {
        spalte1: 'Modul 2 (zeitvariables Netzentgelt)',
        spalte2: 'flexibel und größeres Sparpotenzial',
        spalte3:
          'drei Preisstufen je nach Tageszeit – sinnvoll für Haushalte mit steuerbarem Verbrauch (Wärmepumpe, Speicher, Wallbox) und passender Steuerung',
      },
      {
        spalte1: 'Wechsel zwischen den Modulen',
        spalte2: 'jährlich möglich',
        spalte3:
          'wer mit Modul 1 startet, kann später zu Modul 2 wechseln, sobald die technische Steuerung steht',
      },
    ]),

    tippBlock(
      'Modul 2 lohnt sich nur mit Steuerung',
      p(
        t('Ein zeitvariables Netzentgelt bringt nur dann einen Vorteil, wenn der Verbrauch in günstige Zeitfenster verlagert werden kann. Ohne Energiemanagement, das Wallbox, Wärmepumpe und Speicher entsprechend taktet, ist Modul 1 oft die ehrlichere Wahl.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie kommt die Steuerbox ins Haus?')),
      p(
        t('Die Steuerbox wird im Zählerschrank verbaut und mit der jeweiligen Verbrauchseinrichtung verbunden. Sie kommuniziert über ein sicheres Protokoll mit dem Netzbetreiber.'),
      ),
      p(
        t('In der Praxis bedeutet das: '),
        bold('Der Zählerschrank muss die nötige Platzreserve und die richtige Vorbereitung mitbringen'),
        t('. Bei alten Schränken aus den 80er- oder 90er-Jahren ist eine Erweiterung oder ein Tausch oft notwendig – nicht wegen §14a allein, aber weil viele dieser Schränke ohnehin den heutigen Anforderungen nicht mehr genügen.'),
      ),
      p(
        t('Die Anmeldung der Steuerbox läuft über den Elektroinstallateur und den zuständigen Netzbetreiber. Eigenmächtige Inbetriebnahmen ohne Anmeldung sind nicht zulässig und können bei späterer Prüfung Probleme machen.'),
      ),
    ),

    hinweisBlock(
      'Zählerschrank mitdenken',
      p(
        t('Wer eine Wallbox, Wärmepumpe oder einen Speicher plant, sollte den Zustand des Zählerschranks früh prüfen. Eine spätere Erweiterung wird teurer, wenn sie als Notlösung nachgeschoben werden muss.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele beim §14a falsch einschätzen')),
      p(
        t('Rund um die neue Regelung kursieren viele Halbwahrheiten – sowohl bei Bauherren als auch in mancher Vertriebsargumentation. Diese Denkfehler tauchen besonders häufig auf.'),
      ),
      ul(
        p(t('„Mein Auto wird nicht mehr fertig geladen": Eine Wallbox lädt mit 4,2 kW immer noch etwa 25 km Reichweite pro Stunde. Eine Drosselung von zwei Stunden bedeutet im Alltag selten ein echtes Problem.')),
        p(t('„Mein Haus wird kalt, wenn die Wärmepumpe gedrosselt wird": Wärmepumpen sind träge Systeme. Eine zweistündige Reduzierung wird durch den Pufferspeicher und die Gebäudemasse abgefedert – die Raumtemperatur ändert sich kaum.')),
        p(t('„§14a ist eine Zwangsbewirtschaftung": Tatsächlich ist es das Gegenteil. Ohne §14a würden Netzbetreiber neue Anschlüsse zunehmend ablehnen oder nur mit massiven Netzausbaukosten zustimmen müssen.')),
        p(t('„Modul 2 spart immer Geld": Nur wenn der Verbrauch tatsächlich in günstige Zeitfenster verlagert wird. Wer abends nach der Arbeit lädt und nichts steuert, kann mit Modul 2 sogar mehr zahlen als mit Modul 1.')),
        p(t('„Die Drosselung kommt jeden Tag": In den meisten Niederspannungsnetzen gibt es im ganzen Jahr nur sehr wenige Stunden, in denen tatsächlich gedrosselt wird – wenn überhaupt.')),
      ),
      p(
        bold('Die Realität ist nüchterner als die Schreckensszenarien'),
        t(' – aber auch weniger glamourös als manche Marketing-Versprechen rund um „dynamische Tarif-Optimierung". §14a ist ein technischer Rahmen, der dafür sorgt, dass das Netz mit der wachsenden Elektrifizierung mithalten kann.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bedeutet das für die Planung einer neuen Anlage?')),
      p(
        t('Wer heute Wallbox, Wärmepumpe oder Speicher plant, sollte §14a nicht als Hürde betrachten, sondern als festen Bestandteil der Auslegung.'),
      ),
      p(
        t('Konkret heißt das: Der Zählerschrank muss die Steuerbox aufnehmen können. Die Verbraucher müssen kommunikationsfähig sein. Und das Energiemanagement-Konzept sollte überlegt werden, bevor die ersten Geräte angeschlossen werden – nicht erst danach.'),
      ),
      p(
        bold('Wer das von Anfang an mitdenkt, baut ein System, das offen für Modul 2 und für künftige Erweiterungen bleibt'),
        t('. Wer es ignoriert, läuft Gefahr, einzelne Komponenten später teuer nachzurüsten.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('§14a EnWG ist kein Eingriff in die Versorgung, sondern ein Rahmen, der die Elektrifizierung von Heizen und Mobilität mit dem bestehenden Netz versöhnt.'),
      ),
      p(
        t('In der Praxis kommt die Drosselung deutlich seltener vor als befürchtet, der wirtschaftliche Vorteil über die Netzentgelt-Reduzierung ist real, und die technische Umsetzung ist mit einer ordentlichen Zählerschrank-Planung und einem sauberen Energiemanagement gut beherrschbar.'),
      ),
      p(
        bold('Wichtig ist, das Thema nicht erst beim Anschluss zu bemerken, sondern in der Planung mitzudenken'),
        t('. Wer heute investiert, sollte mit dem System rechnen, das in fünf bis zehn Jahren am Hausanschluss hängt – nicht mit der Welt von 2010.'),
      ),
    ),

    ctaBlock({
      titel: 'Wallbox, Wärmepumpe oder Speicher §14a-konform planen',
      text:
        'Wir denken Steuerbarkeit, Zählerschrank und Energiemanagement von Anfang an mit – damit deine Anlage nicht nur heute funktioniert, sondern auch in der Welt von Modul 2 und steigender Netzlast eine gute Basis bleibt.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was bedeutet §14a EnWG einfach erklärt?',
      'Der §14a regelt, dass neue Wallboxen, Wärmepumpen und größere Speicher steuerbar an den Netzbetreiber angeschlossen werden müssen. In Engpasszeiten darf die Leistung auf mindestens 4,2 kW reduziert werden – im Normalbetrieb läuft alles uneingeschränkt.',
    ),
    faqItem(
      'Wann gilt die §14a-Pflicht?',
      'Die Pflicht gilt für neue steuerbare Verbrauchseinrichtungen, die seit dem 1. Januar 2024 angemeldet werden und mehr als 4,2 kW Anschlussleistung haben. Bestandsanlagen vor diesem Datum sind nicht automatisch betroffen.',
    ),
    faqItem(
      'Wie oft kommt eine Drosselung im Alltag vor?',
      'In Regionen mit gut ausgebautem Netz kommt es im Jahr nur zu wenigen oder gar keinen Eingriffen. Die Drosselung ist auf konkrete Engpasssituationen beschränkt – nicht eine tägliche Routine.',
    ),
    faqItem(
      'Was ist der Unterschied zwischen Modul 1 und Modul 2?',
      'Modul 1 ist eine pauschale Reduzierung des Netzentgelts – einfach, planbar, kein technischer Mehraufwand. Modul 2 ist ein zeitvariables Netzentgelt mit drei Preisstufen – flexibler, mit größerem Sparpotenzial, aber nur sinnvoll bei steuerbarem Verbrauch.',
    ),
    faqItem(
      'Brauche ich für §14a einen neuen Zählerschrank?',
      'Nicht zwingend, aber häufig. Die Steuerbox braucht Platz im Zählerschrank und eine moderne Vorbereitung. Bei alten Schränken aus den 80er- oder 90er-Jahren ist eine Erweiterung oder ein Tausch oft sinnvoll oder nötig.',
    ),
    faqItem(
      'Lohnt sich Modul 2 ohne Energiemanagement?',
      'In der Regel nicht. Das zeitvariable Netzentgelt bringt nur dann einen echten Vorteil, wenn der Verbrauch gezielt in günstige Zeitfenster verlagert wird. Ohne Steuerung bleibt es bei Modul 1 oft günstiger.',
    ),
  ],
}

await upsertRatgeberArticle(article)
