// scripts/articles/strommarkt-einfach-erklaert-boersenstrompreis-netzentgelt-strompreis.mjs

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
  titel: 'Strommarkt einfach erklärt: Warum Börsenstrompreis, Netzentgelt und dein Strompreis drei verschiedene Dinge sind',
  slug: 'strommarkt-einfach-erklaert-boersenstrompreis-netzentgelt-strompreis',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'An der Strombörse kostet Energie zeitweise nur wenige Cent pro Kilowattstunde – auf der Haushaltsrechnung stehen trotzdem 30 Cent oder mehr. Das ist kein Widerspruch. Börsenstrompreis, Netzentgelt und Endkundenpreis beschreiben unterschiedliche Ebenen des Stromsystems. Wir erklären Terminmarkt, Day-Ahead- und Intraday-Markt, Preisbestandteile, dynamische Tarife und § 14a so, dass klar wird, welcher Preis für PV, Speicher, Wallbox und Wärmepumpe tatsächlich relevant ist.',
  lesezeit: 16,

  seo: seo(
    'Strommarkt einfach erklärt: Börsenstrompreis, Netzentgelt & Strompreis | PEAK.Energy',
    'Wie entsteht der Strompreis? Börse, Day-Ahead, Intraday, Netzentgelt, Steuern, dynamische Tarife und §14a verständlich für PV, Speicher und Wärmepumpe erklärt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Der Börsenstrompreis ist '),
      bold('nicht dein Haushaltsstrompreis'),
      t('. Er beschreibt den Großhandelspreis für elektrische Energie. Auf der Endkundenrechnung kommen unter anderem Netzentgelte, Steuern, Umlagen, Messkosten sowie Vertrieb und Marge hinzu.'),
    ),
    summaryPoint(
      t('Strom wird nicht nur kurzfristig gekauft. Lieferanten beschaffen Energie auch über den '),
      bold('Terminmarkt'),
      t('. Deshalb folgt ein klassischer Festpreistarif den aktuellen Day-Ahead-Preisen nicht Viertelstunde für Viertelstunde.'),
    ),
    summaryPoint(
      t('Der kurzfristige Spotmarkt besteht aus '),
      bold('Day-Ahead- und Intraday-Handel'),
      t('. Seit Oktober 2025 wird der gekoppelte europäische Day-Ahead-Markt in 15-Minuten-Zeitintervallen abgerechnet.'),
    ),
    summaryPoint(
      t('Das Netzentgelt bezahlt die Nutzung der Stromnetze und wird nicht an der Strombörse gebildet. Mit § 14a Modul 3 kann dieser Preisbestandteil für bestimmte Haushalte '),
      bold('zeitvariabel'),
      t(' werden.'),
    ),
    summaryPoint(
      t('Für ein HEMS zählt deshalb nicht „der Strompreis", sondern die '),
      bold('Gesamtkosten einer Kilowattstunde zum konkreten Zeitpunkt'),
      t(' – zusammen mit PV-Ertrag, Speicherverlusten, Ladezielen und Wärmebedarf.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum beim Strom ständig über unterschiedliche Preise gesprochen wird')),
      p(
        t('In einer Nachricht steht: „Börsenstrom kostet heute Mittag 4 Cent pro Kilowattstunde." In deiner Stromrechnung stehen vielleicht mehr als 30 Cent. Gleichzeitig veröffentlicht dein Netzbetreiber ein eigenes Preisblatt, und die App deines dynamischen Tarifs zeigt für jede Viertelstunde wieder einen anderen Wert.'),
      ),
      p(
        t('Alle diese Zahlen können gleichzeitig richtig sein. Sie beschreiben nur '),
        bold('unterschiedliche Ebenen derselben Kilowattstunde'),
        t('.'),
      ),
      p(
        t('Wer PV, Batteriespeicher, Wallbox oder Wärmepumpe intelligent steuern möchte, muss diese Ebenen auseinanderhalten. Sonst entstehen schnell falsche Schlussfolgerungen: negativer Börsenpreis wird mit Gratisstrom verwechselt, ein günstiges Netzentgelt mit einem günstigen Stromtarif oder die Einspeisevergütung mit dem Marktpreis.'),
      ),
      p(
        t('Dieser Artikel ist deshalb das Fundament für unseren Bereich Strom & Energiemanagement.'),
      ),
    ),

    hinweisBlock(
      'Stand dieses Artikels: 10. August 2026',
      p(
        t('Strompreise, Umlagen und Netzentgelte verändern sich regelmäßig. Wir erklären deshalb vor allem die Struktur des Strommarkts und nennen nur dort aktuelle Werte, wo sie für das Verständnis notwendig sind. Für eine konkrete Tarifentscheidung zählt immer das aktuelle Preisblatt des Lieferanten und Netzbetreibers.'),
      ),
    ),

    textBlock(
      h('h2', t('Die drei wichtigsten Preise in einem Satz')),
      p(
        bold('Börsenstrompreis: '),
        t('Was elektrische Energie im Großhandel zu einem bestimmten Lieferzeitpunkt kostet.'),
      ),
      p(
        bold('Netzentgelt: '),
        t('Was für Transport und Verteilung des Stroms durch die regulierten Stromnetze berechnet wird.'),
      ),
      p(
        bold('Endkundenpreis: '),
        t('Was du deinem Stromlieferanten beziehungsweise über die Stromrechnung insgesamt pro Kilowattstunde und als Grundpreis bezahlst.'),
      ),
      p(
        t('Der Endkundenpreis enthält den Börsen- beziehungsweise Beschaffungspreis also nur als '),
        bold('einen Bestandteil'),
        t('.'),
      ),
    ),

    tabelleBlock('Börse, Netz und Stromrechnung im Vergleich', [
      {
        spalte1: 'Börsen-/Großhandelspreis',
        spalte2: 'Preis der elektrischen Energie im Großhandel',
        spalte3: 'Entsteht durch Angebot und Nachfrage im Stromhandel',
      },
      {
        spalte1: 'Netzentgelt',
        spalte2: 'Preis für Nutzung der Stromnetze',
        spalte3: 'Reguliert; vom jeweiligen Netzbetreiber veröffentlicht',
      },
      {
        spalte1: 'Endkundenpreis',
        spalte2: 'Preis des Stromvertrags für Haushalt oder Gewerbe',
        spalte3: 'Enthält Beschaffung, Vertrieb/Marge, Netzentgelt, Steuern, Umlagen, Messung und weitere Bestandteile',
      },
    ]),

    textBlock(
      h('h2', t('Wie setzt sich der Haushaltsstrompreis zusammen?')),
      p(
        t('Die Bundesnetzagentur teilt die Stromrechnung grundsätzlich in beeinflussbare und nicht beziehungsweise nur begrenzt vom Lieferanten beeinflussbare Bestandteile. Zur ersten Gruppe gehören insbesondere '),
        bold('Beschaffung, Vertrieb und Marge'),
        t('.'),
      ),
      p(
        t('Hinzu kommen regulierte oder gesetzlich geprägte Bestandteile wie:'),
      ),
      ul(
        p(t('Netzentgelte,')),
        p(t('Entgelt für Messstellenbetrieb,')),
        p(t('Stromsteuer und Umsatzsteuer,')),
        p(t('Konzessionsabgabe,')),
        p(t('gesetzliche Umlagen beziehungsweise Aufschläge.')),
      ),
      p(
        t('Deshalb kann ein Lieferant Strom am Großhandelsmarkt günstig beschaffen, ohne dass dein kompletter Endkundenpreis auf denselben Wert fällt. Die Netzinfrastruktur, Messung und gesetzlichen Preisbestandteile verschwinden dadurch nicht.'),
      ),
    ),

    hinweisBlock(
      '100 €/MWh sind 10 ct/kWh',
      p(
        t('Großhandelspreise werden meist in Euro pro Megawattstunde angegeben. Für den schnellen Vergleich gilt: 1 MWh sind 1.000 kWh. Ein Börsenpreis von 100 €/MWh entspricht deshalb 10 ct/kWh für den reinen Energiepreis – noch nicht dem vollständigen Haushaltsstrompreis.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum dein Festpreistarif nicht dem heutigen Börsenpreis folgt')),
      p(
        t('Ein häufiger Denkfehler lautet: „Wenn Strom heute an der Börse billig ist, warum senkt mein Anbieter nicht sofort meinen Preis?"'),
      ),
      p(
        t('Weil Energieversorger Strom nicht ausschließlich heute für morgen einkaufen. Ein wesentlicher Teil der Beschaffung kann lange vor der tatsächlichen Lieferung stattfinden. Dafür gibt es den '),
        bold('Terminmarkt'),
        t('.'),
      ),
      p(
        t('Auf dem Terminmarkt werden Strommengen Monate oder Jahre im Voraus gehandelt. Unternehmen können sich damit gegen stark steigende Preise absichern und ihre Beschaffung planbarer machen.'),
      ),
      p(
        t('Ein klassischer Festpreistarif enthält deshalb meist einen Beschaffungsmix und Risikokosten. Der Lieferant garantiert dir einen relativ stabilen Preis und übernimmt dafür einen Teil des Marktpreisrisikos.'),
      ),
      p(
        t('Das erklärt auch den umgekehrten Fall: Wenn der Day-Ahead-Preis plötzlich stark steigt, wird dein bestehender Festpreistarif nicht automatisch am nächsten Tag genauso teuer.'),
      ),
    ),

    textBlock(
      h('h2', t('Terminmarkt und Spotmarkt: zwei unterschiedliche Zeithorizonte')),
      p(
        t('Der Stromgroßhandel lässt sich vereinfacht in zwei große Bereiche aufteilen.'),
      ),
    ),

    tabelleBlock('Terminmarkt und Spotmarkt', [
      {
        spalte1: 'Terminmarkt',
        spalte2: 'Lieferung Monate bis Jahre im Voraus vereinbaren',
        spalte3: 'Planungssicherheit und Absicherung gegen Preisrisiken',
      },
      {
        spalte1: 'Day-Ahead-Markt',
        spalte2: 'Strom für den folgenden Tag handeln',
        spalte3: 'Zentraler kurzfristiger Referenzpreis für konkrete Lieferzeitpunkte',
      },
      {
        spalte1: 'Intraday-Markt',
        spalte2: 'Noch kurzfristiger am Liefer- beziehungsweise selben Tag handeln',
        spalte3: 'Korrektur von Prognoseabweichungen bei Verbrauch und Erzeugung',
      },
    ]),

    p(
      t('Die Bundesnetzagentur beschreibt den Day-Ahead-Preis als einen wichtigen Referenzwert des Strommarkts. Der Intraday-Handel erlaubt anschließend weitere Anpassungen, wenn sich Prognosen ändern – etwa weil mehr Wind oder weniger PV-Erzeugung eintritt als erwartet.'),
    ),

    textBlock(
      h('h2', t('Was passiert am Day-Ahead-Markt?')),
      p(
        t('Am Day-Ahead-Markt treffen Angebote von Erzeugern und Nachfrage von Stromhändlern, Versorgern und anderen Marktteilnehmern für den folgenden Tag zusammen. Aus diesen Geboten entstehen Preise für die einzelnen Lieferzeitfenster.'),
      ),
      p(
        t('Seit dem 1. Oktober 2025 arbeitet das europäische Single Day-Ahead Coupling mit einer '),
        bold('15-Minuten-Marktzeiteinheit'),
        t('. Für Deutschland/Luxemburg gibt es damit 96 Day-Ahead-Preisintervalle an einem normalen Tag statt der früher üblichen 24 Stundenpreise.'),
      ),
      p(
        t('Das passt besser zu einem Stromsystem mit viel Photovoltaik und Wind, weil sich Erzeugung und Verbrauch innerhalb einer Stunde deutlich verändern können.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum Strom mittags billig und abends teuer sein kann')),
      p(
        t('Der kurzfristige Großhandelspreis folgt Angebot und Nachfrage. Vereinfacht gilt: Viel verfügbare Erzeugung bei geringer Nachfrage drückt den Preis. Hohe Nachfrage bei knapperer Erzeugung erhöht ihn.'),
      ),
      p(
        t('An sonnigen Tagen liefern Millionen PV-Anlagen gleichzeitig viel Strom. Gerade im Frühjahr und Sommer können die Großhandelspreise deshalb mittags sehr niedrig oder negativ werden.'),
      ),
      p(
        t('Am Abend verschwindet die Solarproduktion, während viele Haushalte gleichzeitig Strom benötigen. Dann kann sich die Situation umkehren.'),
      ),
      p(
        t('Genau diese Schwankung ist das wirtschaftliche Signal, auf das ein dynamischer Stromtarif reagieren kann.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bedeutet ein negativer Börsenstrompreis?')),
      p(
        t('Ein negativer Großhandelspreis bedeutet, dass in einem konkreten Marktzeitfenster mehr Strom angeboten wird, als wirtschaftlich nachgefragt wird. Zusätzlicher Verbrauch beziehungsweise weniger Erzeugung bekommt in diesem Moment einen Wert.'),
      ),
      p(
        t('2025 traten nach Angaben der Bundesnetzagentur in Deutschland in '),
        bold('573 von 8.760 Stunden'),
        t(' negative Day-Ahead-Großhandelspreise auf. Gleichzeitig gab es auch hohe positive Preisspitzen.'),
      ),
      p(
        t('Das bedeutet aber nicht „573 Stunden kostenloser Haushaltsstrom". Der Börsenpreis bleibt nur ein Teil des Endkundenpreises.'),
      ),
      p(
        t('Die Folgen für PV, Speicher und E-Auto behandeln wir ausführlich in '),
        link('Negative Strompreise 2026: Problem für die PV-Anlage oder Chance für Speicher und E-Auto?', '/strom-energiemanagement/negative-strompreise-2026-pv-speicher-eauto'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum ein negativer Börsenpreis nicht automatisch Gratisstrom ist')),
      p(
        t('Nehmen wir einen Extremfall: Der reine Börsenpreis wird negativ. Dann kann der Energie-Beschaffungsanteil eines dynamischen Tarifs sehr niedrig oder negativ sein.'),
      ),
      p(
        t('Trotzdem können weiterhin positive Bestandteile anfallen: Netzentgelt, Steuern, Umlagen, Lieferantenaufschläge, Messstellenbetrieb oder Grundpreis.'),
      ),
      p(
        t('Ob dein tatsächlicher variabler Arbeitspreis in diesem Zeitfenster ebenfalls negativ wird, hängt deshalb vom '),
        bold('konkreten Tarifmodell'),
        t(' ab.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ist das Netzentgelt?')),
      p(
        t('Der Börsenhandel bezahlt die Energie. Das Netzentgelt bezahlt vereinfacht die Infrastruktur, über die diese Energie transportiert und verteilt wird. Dazu gehören Übertragungs- und vor allem Verteilnetze mit Leitungen, Umspannwerken und weiteren Betriebsmitteln.'),
      ),
      p(
        t('Stromnetze sind natürliche Monopole. Du kannst dir für dein Haus nicht parallel fünf unterschiedliche Niederspannungsnetze aussuchen. Deshalb entstehen Netzentgelte nicht im freien Wettbewerb wie ein Stromliefervertrag, sondern unterliegen der Regulierung.'),
      ),
      p(
        t('Der örtliche Netzbetreiber veröffentlicht seine Netzentgelte. Sie können sich regional unterscheiden, weil auch Netzkosten und Rahmenbedingungen unterschiedlich sind.'),
      ),
    ),

    hinweisBlock(
      'Stromlieferant und Netzbetreiber sind nicht dasselbe',
      p(
        t('Den Stromlieferanten kannst du grundsätzlich wechseln. Den lokalen Netzbetreiber nicht. Er betreibt das physische Netz an deinem Standort. In der normalen Haushaltsabrechnung zieht der Lieferant die Netzentgelte ein und führt sie im Marktprozess weiter – deshalb erscheinen beide Welten häufig auf derselben Rechnung.'),
      ),
    ),

    textBlock(
      h('h2', t('§ 14a Modul 3: Jetzt kann auch das Netzentgelt zeitabhängig werden')),
      p(
        t('Mit § 14a Modul 3 kommt eine weitere Zeitabhängigkeit in den Strompreis. Seit April 2025 müssen Netzbetreiber für geeignete steuerbare Verbrauchseinrichtungen ein zeitvariables Netzentgelt anbieten.'),
      ),
      p(
        t('Dabei gibt es Hoch-, Standard- und Niedrigtarifzeiten – HT, ST und NT. Die Zeitfenster werden vom Netzbetreiber festgelegt und spiegeln die Belastung des lokalen Netzes wider.'),
      ),
      p(
        t('Damit können in einem Haus gleichzeitig zwei verschiedene Preissignale existieren:'),
      ),
      ul(
        p(t('Der dynamische Stromtarif spiegelt die Situation am Strommarkt.')),
        p(t('Modul 3 spiegelt die zeitliche Belastung beziehungsweise Tariflogik des lokalen Netzes.')),
      ),
      p(
        t('Die günstigste Börsenviertelstunde muss deshalb nicht automatisch die günstigste Netzentgelt-Viertelstunde sein.'),
      ),
      p(
        t('Die Details erklären wir in '),
        link('Zeitvariable Netzentgelte nach § 14a: Was Modul 3 bringt', '/strom-energiemanagement/zeitvariable-netzentgelte-paragraph-14a-modul-3'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Dynamischer Stromtarif: Was wird wirklich dynamisch?')),
      p(
        t('Bei einem dynamischen Stromvertrag orientiert sich der Arbeitspreis an kurzfristigen Börsenpreisen und kann sich mehrmals täglich ändern. Für die Nutzung ist ein intelligentes Messsystem erforderlich. Seit 2025 müssen alle Stromlieferanten mindestens einen dynamischen Tarif anbieten.'),
      ),
      p(
        t('Wichtig ist das Wort '),
        bold('orientiert'),
        t('. Ein Tarif muss nicht einfach 1:1 den nackten EPEX-Preis durchreichen. Anbieter können Aufschläge, Gebühren und eigene Abrechnungsmodelle haben. Vor Vertragsabschluss muss deshalb die Preisformel verstanden werden.'),
      ),
      p(
        t('Wie sich das mit PV und Speicher auswirkt, erklären wir in '),
        link('Dynamischer Stromtarif mit PV und Speicher: Wann er sich wirklich lohnt', '/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum das Smart Meter dafür wichtig ist')),
      p(
        t('Ein Festpreistarif muss für die Abrechnung nicht wissen, ob du eine Kilowattstunde um 3:00 Uhr oder um 19:00 Uhr verbraucht hast – der Arbeitspreis ist gleich.'),
      ),
      p(
        t('Ein dynamischer Tarif dagegen muss den Verbrauch einem konkreten Preisintervall zuordnen können. Dafür wird ein '),
        bold('intelligentes Messsystem'),
        t(' benötigt.'),
      ),
      p(
        t('Das Smart Meter macht den Strom nicht billiger. Es schafft die Mess- und Kommunikationsgrundlage dafür, zeitabhängige Preise korrekt abzurechnen.'),
      ),
      p(
        t('Mehr dazu in '),
        link('Smart Meter 2026: Wer einen braucht, was er kostet und was er bei PV wirklich bringt', '/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('PV-Betreiber: Drei Preise gleichzeitig im Kopf behalten')),
      p(
        t('Für einen Haushalt mit Photovoltaik sind häufig drei wirtschaftliche Werte relevant:'),
      ),
      ul(
        p(t('Was kostet eine zusätzliche Kilowattstunde Netzbezug?')),
        p(t('Welchen Wert hat eine selbst verbrauchte PV-Kilowattstunde, weil sie diesen Netzbezug ersetzt?')),
        p(t('Welche Vergütung beziehungsweise welchen Vermarktungserlös bringt eine eingespeiste PV-Kilowattstunde?')),
      ),
      p(
        t('Das sind nicht dieselben Werte. Eine PV-Kilowattstunde, die du selbst verbrauchst, ersetzt grundsätzlich deinen jeweiligen Netzbezug. Eine eingespeiste Kilowattstunde wird dagegen nach dem für deine Anlage geltenden Vergütungs- oder Vermarktungsmodell bewertet.'),
      ),
      p(
        t('Deshalb ist es wirtschaftlich oft sinnvoll, eigenen Solarstrom im Haus zu nutzen – aber nicht um jeden Preis. Ein ineffizienter zusätzlicher Speicherzyklus oder eine unnötig heiß betriebene Wärmepumpe kann den vermeintlichen Vorteil wieder reduzieren.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum der Speicher den Marktpreis nicht einfach „handeln" sollte')),
      p(
        t('Bei großen Preisunterschieden erscheint die Strategie simpel: billig laden, teuer entladen. Ein Batteriespeicher hat aber Verluste.'),
      ),
      p(
        t('Wenn eine Kilowattstunde beim Laden 25 Cent kostet und später 35 Cent Netzbezug ersetzen soll, stehen theoretisch 10 Cent Differenz zur Verfügung. Davon müssen Lade-, Batterie- und Entladeverluste sowie gegebenenfalls zusätzliche Batteriebeanspruchung getragen werden.'),
      ),
      p(
        t('Ein HEMS muss deshalb nicht nur Preise vergleichen, sondern die '),
        bold('Kosten pro tatsächlich wieder nutzbarer Kilowattstunde'),
        t(' berechnen.'),
      ),
      p(
        t('Das behandeln wir ausführlich in '),
        link('Stromspeicher aus dem Netz laden: Wann dynamisches Laden sinnvoll ist', '/strom-energiemanagement/stromspeicher-aus-netz-laden-dynamisch-sinnvoll'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Ein praktisches Beispiel: dieselbe Kilowattstunde, drei Entscheidungen')),
      p(
        t('Angenommen, das Haus benötigt heute Abend 1 kWh Energie. Das HEMS könnte sie auf drei Arten bereitstellen. Die Werte dienen nur der Logik und sind kein aktuelles Tarifangebot.'),
      ),
    ),

    tabelleBlock('Drei Wege zur Kilowattstunde am Abend', [
      {
        spalte1: 'PV direkt am Abend',
        spalte2: 'Wenn gleichzeitig Solarstrom vorhanden ist',
        spalte3: 'Kein Netzbezug und kein zusätzlicher Speicherverlust',
      },
      {
        spalte1: 'Tagsüber PV in Batterie speichern',
        spalte2: 'PV-Strom wird zeitlich verschoben',
        spalte3: 'Netzbezug wird vermieden, aber Speicherverluste entstehen',
      },
      {
        spalte1: 'Günstigen Netzstrom vorher speichern',
        spalte2: 'Nur bei ausreichender Preisdifferenz sinnvoll',
        spalte3: 'Tarifpreis, Wirkungsgrad, Speicherbeanspruchung und PV-Prognose prüfen',
      },
    ]),

    p(
      t('Das ist die eigentliche Aufgabe von Energiemanagement: nicht einen einzelnen Preis zu beobachten, sondern '),
      bold('mehrere mögliche Energiepfade miteinander zu vergleichen'),
      t('.'),
    ),

    textBlock(
      h('h2', t('Warum ein HEMS den Gesamtpreis statt nur die Börse ansehen muss')),
      p(
        t('Eine einfache Tarif-App kann anzeigen, dass die nächste Viertelstunde günstig ist. Ein HEMS muss mehr wissen.'),
      ),
      p(
        t('Für eine sinnvolle Entscheidung können relevant sein:'),
      ),
      ul(
        p(t('vollständiger Arbeitspreis des dynamischen Tarifs,')),
        p(t('Modul-3-Netzentgelt beziehungsweise weitere Netzentgeltlogik,')),
        p(t('PV-Prognose,')),
        p(t('Speicherfüllstand und Wirkungsgrad,')),
        p(t('Abfahrtszeit und Ladeziel des E-Autos,')),
        p(t('Wärmebedarf und Effizienz der Wärmepumpe,')),
        p(t('§14a-Leistungsgrenzen,')),
        p(t('gewünschte Backup-Reserve.')),
      ),
      p(
        t('Die Systemlogik dazu zeigen wir in '),
        link('PV, Speicher, Wallbox und Wärmepumpe intelligent steuern', '/strom-energiemanagement/pv-speicher-wallbox-waermepumpe-intelligent-steuern'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Fünf typische Strompreis-Mythen')),
      p(
        bold('„Der Börsenstrompreis ist mein Strompreis." '),
        t('Nein. Er ist ein Teil beziehungsweise Referenzwert der Energiebeschaffung. Der Endkundenpreis enthält weitere Bestandteile.'),
      ),
      p(
        bold('„Wenn die Börse negativ ist, ist Strom zu Hause kostenlos." '),
        t('Nicht automatisch. Netzentgelte, Steuern, Umlagen und Tarifaufschläge können weiterhin positiv sein.'),
      ),
      p(
        bold('„Mein Festpreisanbieter verdient automatisch riesig, wenn Spotstrom billig ist." '),
        t('So lässt sich die Beschaffung nicht beurteilen. Lieferanten kaufen Strom auch langfristig und sichern Preisrisiken ab.'),
      ),
      p(
        bold('„Modul 3 ist ein dynamischer Stromtarif." '),
        t('Nein. Modul 3 verändert das Netzentgelt. Der dynamische Tarif verändert den marktpreisabhängigen Energiepreis.'),
      ),
      p(
        bold('„Mit PV ist der Strompreis egal." '),
        t('Nein. PV reduziert den Netzbezug, aber gerade im Winter, nachts, beim E-Auto und bei der Wärmepumpe bleibt der Bezugspreis wirtschaftlich relevant.'),
      ),
    ),

    textBlock(
      h('h2', t('Was wir bei einem Tarifvergleich tatsächlich ansehen würden')),
      p(
        t('Statt nur einen Werbe-Arbeitspreis zu vergleichen, würden wir bei einem Haushalt mit PV und flexiblen Verbrauchern prüfen:'),
      ),
      ul(
        p(t('Grundpreis und vollständige Preisformel des Tarifs,')),
        p(t('Börsenpreis-Kopplung und Lieferantenaufschlag,')),
        p(t('Messstellenkosten und vorhandenes iMSys,')),
        p(t('lokale Netzentgelte und mögliche §14a-Module,')),
        p(t('tatsächliches zeitliches Lastprofil statt nur Jahresverbrauch,')),
        p(t('PV-Eigenversorgung in den günstigen Tagesstunden,')),
        p(t('verschiebbare Energiemengen von Wallbox, Wärmepumpe und Speicher,')),
        p(t('Risiko hoher Preise in nicht verschiebbaren Verbrauchszeiten.')),
      ),
      p(
        t('Erst daraus wird sichtbar, ob ein Tarif wirklich zum Haus passt.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('„Der Strompreis" existiert eigentlich nicht. Es gibt einen Großhandelspreis für Energie, regulierte Netzentgelte, gesetzliche Preisbestandteile und den daraus entstehenden Endkundenpreis.'),
      ),
      p(
        t('Der Terminmarkt erklärt, warum klassische Stromtarife nicht unmittelbar jedem kurzfristigen Börsenausschlag folgen. Der Spotmarkt erklärt, warum Energie von Viertelstunde zu Viertelstunde unterschiedlich wertvoll sein kann. § 14a zeigt, dass inzwischen sogar das Netzentgelt zeitabhängiger werden kann.'),
      ),
      p(
        t('Für Haushalte mit PV, Speicher, Wallbox und Wärmepumpe ist genau diese Entwicklung spannend: Sie können Verbrauch zeitlich verschieben. Damit wird aus Stromverbrauch zunehmend eine steuerbare Größe.'),
      ),
      p(
        t('Die entscheidende Frage lautet deshalb nicht: '),
        bold('„Wie hoch ist der Börsenstrompreis?"'),
        t(' Sondern: '),
        bold('„Was kostet oder spart die nächste Kilowattstunde in meinem konkreten Energiesystem?"'),
      ),
    ),

    ctaBlock({
      titel: 'Nicht nur den Tarif – das ganze Energiesystem betrachten',
      text:
        'Du hast PV, Speicher, Wallbox oder Wärmepumpe und möchtest wissen, welcher Stromtarif und welche Steuerung wirklich zu deinem Haus passen? Wir betrachten Netzbezug, Smart Meter, §14a, Speicherstrategie und flexible Verbraucher gemeinsam – statt nur einen Cent-pro-kWh-Wert zu vergleichen.',
      buttonText: 'Energiesystem besprechen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist der Unterschied zwischen Börsenstrompreis und Haushaltsstrompreis?',
      'Der Börsenstrompreis beschreibt den Großhandelspreis der elektrischen Energie. Der Haushaltsstrompreis enthält zusätzlich unter anderem Vertrieb und Marge des Lieferanten, Netzentgelte, Messstellenbetrieb, Steuern, Umlagen und Abgaben. Deshalb ist der Börsenpreis nur ein Bestandteil des Endkundenpreises.',
    ),
    faqItem(
      'Was bedeutet 100 Euro pro Megawattstunde in Cent pro Kilowattstunde?',
      'Eine Megawattstunde entspricht 1.000 Kilowattstunden. 100 €/MWh entsprechen daher 0,10 €/kWh beziehungsweise 10 ct/kWh. Das ist der entsprechende Großhandelspreis und noch nicht der vollständige Haushaltsstrompreis.',
    ),
    faqItem(
      'Was ist der Terminmarkt für Strom?',
      'Am Terminmarkt werden Stromlieferungen Monate oder Jahre im Voraus gehandelt. Lieferanten und andere Marktteilnehmer können sich dadurch gegen Preisrisiken absichern und Beschaffung planbarer machen. Deshalb folgt ein Festpreistarif nicht unmittelbar jedem kurzfristigen Day-Ahead-Preis.',
    ),
    faqItem(
      'Was ist der Day-Ahead-Strommarkt?',
      'Am Day-Ahead-Markt wird Strom für den folgenden Liefertag gehandelt. Aus Kauf- und Verkaufsgeboten entstehen Preise für die jeweiligen Lieferintervalle. Seit 1. Oktober 2025 arbeitet das europäische Single Day-Ahead Coupling grundsätzlich mit 15-Minuten-Marktzeiteinheiten.',
    ),
    faqItem(
      'Was ist der Unterschied zwischen Day-Ahead und Intraday?',
      'Day-Ahead wird Strom für den nächsten Tag gehandelt. Intraday können Marktteilnehmer ihre Positionen näher am tatsächlichen Lieferzeitpunkt anpassen. Das ist beispielsweise wichtig, wenn sich Wind-, PV- oder Verbrauchsprognosen kurzfristig ändern.',
    ),
    faqItem(
      'Warum kann Strom an der Börse negativ werden?',
      'Negative Preise können entstehen, wenn in einem Marktzeitfenster sehr viel Strom angeboten wird und gleichzeitig zu wenig Nachfrage vorhanden ist. Das Preissignal schafft einen Anreiz, Erzeugung zu reduzieren oder zusätzlichen Verbrauch in dieses Zeitfenster zu verschieben.',
    ),
    faqItem(
      'Ist Strom bei negativem Börsenpreis für Haushalte kostenlos?',
      'Nicht automatisch. Der Börsenpreis ist nur ein Bestandteil des Endkundenpreises. Netzentgelte, Steuern, Umlagen, Lieferantenaufschläge, Messstellenkosten oder Grundpreise können weiterhin anfallen. Ob der variable Arbeitspreis eines konkreten dynamischen Tarifs tatsächlich negativ wird, hängt von dessen Preisformel ab.',
    ),
    faqItem(
      'Was ist ein Netzentgelt?',
      'Das Netzentgelt ist der Preisbestandteil für die Nutzung der Stromnetze. Es wird nicht an der Strombörse gebildet. Stromnetze sind regulierte natürliche Monopole; die jeweiligen Netzbetreiber veröffentlichen ihre Netzentgelte auf Basis der regulatorischen Vorgaben.',
    ),
    faqItem(
      'Kann das Netzentgelt zeitabhängig sein?',
      'Ja. Für geeignete steuerbare Verbrauchseinrichtungen gibt es nach §14a mit Modul 3 ein zeitvariables Netzentgelt mit Hoch-, Standard- und Niedrigtarifzeiten. Modul 3 ist kein dynamischer Stromtarif, sondern betrifft den Netzpreisbestandteil.',
    ),
    faqItem(
      'Was wird bei einem dynamischen Stromtarif dynamisch?',
      'Der Arbeitspreis orientiert sich an kurzfristigen Börsenpreisen und kann sich mehrmals täglich ändern. Anbieter können zusätzlich eigene Aufschläge und Tarifbestandteile berechnen. Für die Nutzung eines dynamischen Stromtarifs ist ein intelligentes Messsystem erforderlich.',
    ),
    faqItem(
      'Warum brauche ich für einen dynamischen Tarif ein Smart Meter?',
      'Weil der Verbrauch dem jeweiligen Preiszeitfenster zugeordnet werden muss. Ein intelligentes Messsystem erfasst den Verbrauch zeitaufgelöst und stellt die notwendige Kommunikationsinfrastruktur für die Abrechnung bereit.',
    ),
    faqItem(
      'Welcher Strompreis ist für einen Batteriespeicher wichtig?',
      'Für Netzladen zählt der vollständige Preis beim Laden im Vergleich zum später vermiedenen Netzbezug. Zusätzlich müssen Lade- und Entladeverluste, Batteriebeanspruchung, PV-Prognose und gegebenenfalls zeitvariable Netzentgelte berücksichtigt werden. Der reine Börsenpreis reicht für die Entscheidung nicht.',
    ),
    faqItem(
      'Welcher Preis ist für den PV-Eigenverbrauch relevant?',
      'Eine direkt selbst verbrauchte PV-Kilowattstunde ersetzt grundsätzlich Netzbezug zu dem Preis, der sonst für diese Kilowattstunde angefallen wäre. Eine eingespeiste Kilowattstunde wird dagegen nach dem jeweiligen Vergütungs- oder Vermarktungsmodell bewertet. Deshalb sind Eigenverbrauch und Einspeisung wirtschaftlich unterschiedlich zu betrachten.',
    ),
  ],
}

await upsertRatgeberArticle(article)
