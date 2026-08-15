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
  titel: 'Westnetz Smart Meter & Steuerbox 2026: HAN, TRuDI, § 14a und Zählerschrank erklärt',
  slug: 'westnetz-smart-meter-steuerbox-2026',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'Was passiert bei Westnetz praktisch, wenn Smart Meter, Wärmepumpe, Wallbox oder Speicher zusammenkommen? Wir ordnen die Rollen von Messstellenbetreiber und Installateur, HAN-Zugang, TRuDI, EEBUS, §14a-Steuerung und Bestandszählerschrank anhand der aktuell veröffentlichten Westnetz-Unterlagen ein.',
  lesezeit: 16,

  seo: seo(
    'Westnetz Smart Meter & Steuerbox 2026 | PEAK.Energy',
    'Westnetz Smart Meter und Steuerbox 2026: HAN, TRuDI, EEBUS, §14a, EMS und Zählerschrank im Bestand praxisnah erklärt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Westnetz setzt als grundzuständiger Messstellenbetreiber intelligente Messsysteme nach den Vorgaben des MsbG ein. Das '),
      bold('Smart-Meter-Gateway'),
      t(' bildet dabei die Kommunikationsplattform.'),
    ),
    summaryPoint(
      t('Kunden können Messwerte lokal über die '),
      bold('HAN-Schnittstelle'),
      t(' des Gateways auslesen. Westnetz nennt dafür ausdrücklich die Transparenz- und Displaysoftware '),
      bold('TRuDI'),
      t('.'),
    ),
    summaryPoint(
      t('Für die digitale §-14a-Steuerung bietet Westnetz nach seiner veröffentlichten technischen Anforderung die Protokollausprägung '),
      bold('EEBUS'),
      t(' an und empfiehlt bei mehreren steuerbaren Verbrauchern beziehungsweise PV-Kombinationen die Steuerung über ein EMS.'),
    ),
    summaryPoint(
      t('Ein alter Zählerschrank muss für die Steuertechnik '),
      bold('nicht pauschal komplett erneuert'),
      t(' werden. Westnetz beschreibt für geeignete Bestandsanlagen auch Nachrüst- und externe Steuergeräte-Lösungen.'),
    ),
    summaryPoint(
      t('Entscheidend ist die Rollenverteilung: '),
      bold('Messstellenbetreiber liefert und verbindet Mess-/Steuertechnik bis zur definierten Schnittstelle; der Anlagen-Errichter bereitet die Kundenanlage und Leitungswege vor'),
      t('.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum wir Westnetz einmal ganz konkret betrachten')),
      p(
        t('Bei Smart Meter und § 14a gibt es bundesweite Gesetze und Festlegungen – die praktische Umsetzung landet aber beim jeweiligen Netz- und Messstellenbetreiber. Für viele unserer Projekte am Niederrhein ist das Westnetz. Deshalb hilft eine konkrete Betrachtung mehr als die zehnte allgemeine Erklärung von „Smart Metern“.'),
      ),
      p(
        t('Westnetz veröffentlicht technische Anforderungen für Zählerplätze, Kommunikations- und Steuertechnik. Daraus lässt sich ziemlich gut ablesen, was ein Installationsbetrieb im Zählerschrank vorbereiten soll und was der Messstellenbetreiber selbst übernimmt.'),
      ),
    ),

    hinweisBlock(
      'Westnetz ist nicht automatisch bei jedem Kunden der Messstellenbetreiber',
      p(
        t('Die folgenden Aussagen beziehen sich auf Fälle, in denen Westnetz als grundzuständiger beziehungsweise zuständiger Messstellenbetreiber tätig ist. Bei einem wettbewerblichen Messstellenbetreiber können Prozesse und technische Details abweichen.'),
      ),
    ),

    textBlock(
      h('h2', t('Smart Meter bei Westnetz: Zähler plus Gateway')),
      p(
        t('Westnetz setzt standardmäßig moderne Messeinrichtungen ein, die bei Bedarf mit einem Smart-Meter-Gateway verbunden werden können. Ein intelligentes Messsystem kommt nach Maßgabe des Messstellenbetriebsgesetzes zum Einsatz.'),
      ),
      p(
        t('Das Gateway ist dabei die entscheidende Kommunikationskomponente. Es verbindet Zählerdaten mit der sicheren energiewirtschaftlichen Kommunikation und stellt zugleich eine lokale Kundenschnittstelle bereit.'),
      ),
      p(
        t('Wer die Grundlagen zu Pflicht, Kosten und Nutzen noch nicht kennt, startet am besten mit unserem '),
        link('Smart-Meter-Ratgeber 2026', '/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('HAN: Die lokale Kundenschnittstelle am Smart-Meter-Gateway')),
      p(
        t('HAN steht für Home Area Network. Westnetz beschreibt am Smart-Meter-Gateway eine standardisierte HAN-Schnittstelle über RJ45, über die der Kunde seine Daten lokal auslesen kann.'),
      ),
      p(
        t('Auf der Westnetz-Serviceseite wird die Vorgehensweise sehr konkret beschrieben: Endgerät per Netzwerk mit dem intelligenten Messsystem verbinden, passende TRuDI-Software nutzen und die bereitgestellten HAN-Zugangsdaten verwenden.'),
      ),
      p(
        t('Die HAN-Schnittstelle ist bei den dort beschriebenen Gateways auf '),
        bold('192.168.1.200'),
        t(' eingestellt. Bei vor 2022 hergestellten Gateways nennt Westnetz als mögliche Alternative 192.168.2.100. Diese IP-Angaben sind geräte- und betreiberspezifisch – sie sind keine allgemeine Smart-Meter-Norm.'),
      ),
      p(
        t('Die aktuelle Anleitung findest du bei Westnetz unter '),
        link('„Messwerte selbst auslesen“', 'https://www.westnetz.de/de/service/zaehler/han.html', { newTab: true }),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('TRuDI: Warum Westnetz die Software ausdrücklich nennt')),
      p(
        t('Westnetz verweist für die lokale Darstellung der Energiedaten über HAN ausdrücklich auf '),
        bold('TRuDI'),
        t('. Die Transparenz- und Displaysoftware wurde im Rahmen der Initiative BundesDisplay von PTB und ZVEI entwickelt und dient insbesondere dazu, Mess- und abrechnungsrelevante Daten eines Smart-Meter-Gateways nachvollziehbar darzustellen.'),
      ),
      p(
        t('Wichtig: Es gibt herstellerspezifisch geprüfte Versionen. Die PTB weist ausdrücklich darauf hin, dass der jeweilige Gateway-Hersteller für die konkrete Software verantwortlich ist. Deshalb nicht irgendeine TRuDI-Datei aus einem Downloadportal installieren, sondern über PTB beziehungsweise Hersteller gehen.'),
      ),
      p(
        t('Eine ausführliche Schritt-für-Schritt-Einordnung haben wir in '),
        link('Smart Meter auslesen: 15-Minuten-Werte und TRuDI', '/strom-energiemanagement/smart-meter-auslesen-verbrauchsdaten-trudi'),
        t(' zusammengestellt.'),
      ),
    ),

    textBlock(
      h('h2', t('§ 14a bei Westnetz: Welche Geräte müssen steuerbar sein?')),
      p(
        t('Die veröffentlichte Westnetz-Anforderung nennt die typischen §-14a-Verbrauchseinrichtungen: nicht öffentliche Ladepunkte, Wärmepumpen einschließlich Zusatz- oder Notheizung, Anlagen zur Raumkühlung sowie Stromspeicher hinsichtlich der Einspeicherung aus dem Netz.'),
      ),
      p(
        t('Bei mehr als 4,2 kW Leistungsbezug sind diese neuen Anlagen im Anwendungsbereich der §-14a-Regelung steuerbar auszuführen. Für die Kundenanlage bedeutet das: Steuer- beziehungsweise Datenwege zum Zählerplatz müssen vorbereitet werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Direktsteuerung oder EMS: Westnetz empfiehlt die digitale EMS-Lösung')),
      p(
        t('Besonders interessant ist die Empfehlung in den technischen Unterlagen: Westnetz bevorzugt die digitale Steuerung. Wenn mehrere steuerbare Verbrauchseinrichtungen vorhanden sind oder PV beziehungsweise Erzeugungsanlagen hinzukommen, wird eine digitale Steuerung über ein '),
        bold('Energiemanagementsystem (EMS)'),
        t(' empfohlen.'),
      ),
      p(
        t('Der Grund ist praktisch: Ein EMS kann eine Leistungsreduzierung auf mehrere Verbraucher verteilen. Wärmepumpe, Wallbox und Speicher müssen dann nicht stumpf unabhängig voneinander reagieren. Eigenerzeugung und Prioritäten innerhalb der Kundenanlage können besser berücksichtigt werden.'),
      ),
    ),

    tabelleBlock('Westnetz-Steuerung: analog oder digital', [
      {
        spalte1: 'Analog / Relais',
        spalte2: 'vereinfachte Stufensteuerung',
        spalte3: 'keine Reduzierung oder Reduzierung auf Mindestleistung',
      },
      {
        spalte1: 'Digital',
        spalte2: 'genauer Leistungswert über digitale Kommunikation',
        spalte3: 'flexiblere Leistungsbegrenzung',
      },
      {
        spalte1: 'Digital + EMS',
        spalte2: 'gemeinsame Steuerung mehrerer Verbraucher',
        spalte3: 'von Westnetz besonders bei mehreren SteuVE / Erzeugung empfohlen',
      },
    ]),

    textBlock(
      h('h2', t('Welche digitale Schnittstelle nutzt Westnetz?')),
      p(
        t('In der aktuell öffentlich abrufbaren technischen Anforderung vom 1. September 2025 legt Westnetz für seine digitale Schnittstelle als grundzuständiger Messstellenbetreiber die Protokollausprägung '),
        bold('EEBUS'),
        t(' fest.'),
      ),
      p(
        t('Die Schnittstelle zur steuerbaren Verbrauchseinrichtung beziehungsweise zum EMS wird am Zählerplatz über eine RJ45-Verbindung vorbereitet. Für Planer und Installateure heißt das: Netzwerkkabel und Schnittstellen gehören von Anfang an in die Leitungsplanung.'),
      ),
      p(
        t('Die technische Spezifikation findest du im Westnetz-Dokument '),
        link('„Technische Anforderungen und Hinweise an Zählerplätze“', 'https://www.westnetz.de/content/dam/revu-global/westnetz/documents/bauen/ihr-weg-zum-netzanschluss/niederspannung/250901-anforderungen-hinweise-gmsb-zaehlerplaetze.pdf', { newTab: true }),
        t('.'),
      ),
    ),

    hinweisBlock(
      'Technische Standards entwickeln sich weiter',
      p(
        t('VDE FNN hat die Steuerungsarchitektur seit Veröffentlichung dieser Westnetz-Unterlage weiterentwickelt und beschreibt inzwischen sowohl Steuerung über eine FNN-Steuerbox als auch direkt über das Smart-Meter-Gateway. Vor jeder neuen Planung sollte deshalb geprüft werden, ob Westnetz seine technische Vorgabe zwischenzeitlich aktualisiert hat.'),
      ),
    ),

    textBlock(
      h('h2', t('Wer macht was? Messstellenbetreiber und Elektrofachbetrieb')),
      p(
        t('Die Abgrenzung ist für Baustellen wichtig. Westnetz beschreibt Montage, Betrieb und Wartung von Messeinrichtungen einschließlich Kommunikations- und Steuerungstechnik als Aufgabe des Messstellenbetreibers. Dazu gehört auch die Verbindung der entsprechenden Mess- und Steuerkomponenten bis zur definierten Übergabe.'),
      ),
      p(
        t('Der Anlagen-Errichter stellt dagegen den geeigneten Zählerplatz und bereitet die kundenseitigen Leitungen und Schnittstellen vor. Bei § 14a bedeutet das insbesondere: Daten- beziehungsweise Steuerleitung von der steuerbaren Verbrauchseinrichtung oder vom EMS zum vorgesehenen Übergabepunkt im Zählerschrank.'),
      ),
    ),

    textBlock(
      h('h2', t('Muss der alte Zählerschrank für die Steuerbox komplett neu?')),
      p(
        t('Nein – jedenfalls nicht pauschal. Westnetz verlangt bei Erweiterungen eine Prüfung, ob der vorhandene Zählerplatz geeignet ist. Für Bestandsanlagen beschreibt das Dokument mehrere Möglichkeiten zur Unterbringung der Steuertechnik.'),
      ),
      ul(
        p(t('Vorhandenes Steuergerätefeld nutzen,')),
        p(t('geeignetes plombierbares Verteilerfeld als zusätzlichen Raum für Zusatzanwendungen vorbereiten,')),
        p(t('oder – wenn im Bestand kein passender Funktionsraum vorhanden ist – ein externes plombierbares Gehäuse unmittelbar neben dem Zählerschrank vorsehen.')),
      ),
      p(
        t('Das ist keine Freigabe für jeden alten Schrank. Belastbarkeit, Schutztechnik, Leitungen und die gesamte Erweiterung müssen weiterhin passen. Mehr dazu im Ratgeber '),
        link('Zählerschrank für PV, Wärmepumpe und Smart Meter', '/solaranlage/zaehlerschrank-pv-waermepumpe-smart-meter'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum ein EMS bei PV + Wärmepumpe + Speicher besonders sinnvoll wird')),
      p(
        t('Ein Netzbetreiber interessiert sich im §-14a-Fall für den netzwirksamen Bezug. Das Haus selbst interessiert sich dagegen zusätzlich für PV-Erzeugung, Batterieladezustand, Strompreis, Komfort und Ladeziele. Genau diese beiden Ebenen müssen zusammengebracht werden.'),
      ),
      p(
        t('Ein EMS kann beispielsweise die Wärmepumpe priorisieren, die Wallbox reduzieren und gleichzeitig vorhandenen Solarstrom weiter nutzen. Das macht die netzorientierte Steuerung für den Nutzer deutlich weniger spürbar als eine Reihe unabhängig reagierender Einzelgeräte.'),
      ),
    ),

    tippBlock(
      'Bei Neubau und Sanierung Cat-Kabel mitplanen',
      p(
        t('Eine fehlende Datenleitung ist später oft ärgerlicher als das eigentliche Steuergerät. Wer Zählerschrank, Wärmepumpe, Wallbox oder Technikraum neu plant, sollte geeignete Kommunikationswege gleich mit vorsehen – inklusive Reserve für spätere Geräte.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Westnetz ist technisch konkreter, als viele denken')),
      p(
        t('Wer nur § 14a liest, weiß noch nicht, wo im Zählerschrank das Kabel endet. Genau dafür sind die technischen Unterlagen des Messstellenbetreibers wichtig. Westnetz beschreibt HAN-Auslesung, Smart-Meter-Gateway, Steuerung, EEBUS-Schnittstelle und Bestandslösungen bereits ziemlich detailliert.'),
      ),
      p(
        t('Für uns ist die Konsequenz klar: Ein modernes Energieprojekt endet nicht am Wechselrichter. '),
        bold('Messkonzept, Zählerschrank, Datenleitung, Smart Meter und Energiemanagement gehören von Anfang an in dieselbe Planung'),
        t('. Dann wird die spätere Steuerbox kein Überraschungsprojekt.'),
      ),
    ),

    ctaBlock({
      titel: 'Westnetz-Projekte sauber vorbereiten',
      text:
        'Wir planen PV, Speicher, Wärmepumpe, Wallbox, Zählerschrank und §14a-Schnittstellen gemeinsam – mit Blick auf die aktuellen technischen Anforderungen im Netzgebiet.',
      buttonText: 'Projekt anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Wie kann ich bei Westnetz mein Smart Meter selbst auslesen?',
      'Westnetz bietet bei intelligenten Messsystemen einen lokalen Zugriff über die HAN-Schnittstelle des Smart-Meter-Gateways. Für die Anzeige der Energiedaten nennt Westnetz ausdrücklich die Software TRuDI und stellt HAN-Zugangsdaten bereit.',
    ),
    faqItem(
      'Welche IP-Adresse hat die HAN-Schnittstelle bei Westnetz?',
      'Westnetz nennt für die aktuell beschriebenen Gateways 192.168.1.200. Bei vor 2022 hergestellten Gateways kann 192.168.2.100 relevant sein. Maßgeblich ist immer die aktuelle Westnetz- beziehungsweise Herstelleranleitung.',
    ),
    faqItem(
      'Nutzt Westnetz EEBUS für § 14a?',
      'In der aktuell öffentlich abrufbaren technischen Anforderung an Zählerplätze vom 1. September 2025 bietet Westnetz die digitale Schnittstelle mit der Protokollausprägung EEBUS an. Da sich technische Standards weiterentwickeln, sollte vor Ausführung die aktuelle Vorgabe geprüft werden.',
    ),
    faqItem(
      'Empfiehlt Westnetz ein Energiemanagementsystem?',
      'Ja. In der veröffentlichten technischen Anforderung empfiehlt Westnetz die digitale Steuerung über ein EMS insbesondere bei mehreren steuerbaren Verbrauchseinrichtungen oder bei Kombination mit Erzeugungsanlagen.',
    ),
    faqItem(
      'Muss bei Westnetz für die Steuerbox jeder alte Zählerschrank ersetzt werden?',
      'Nein. Für geeignete Bestandsanlagen beschreibt Westnetz auch Nachrüstvarianten und unter bestimmten Voraussetzungen einen externen Steuergeräteplatz. Ob der vorhandene Zählerplatz insgesamt geeignet ist, muss im Einzelfall geprüft werden.',
    ),
  ],
}

await upsertRatgeberArticle(article)
