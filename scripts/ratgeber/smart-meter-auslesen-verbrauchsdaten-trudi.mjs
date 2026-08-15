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
  titel: 'Smart Meter auslesen: So kommst du an Verbrauchsdaten, 15-Minuten-Werte und TRuDI',
  slug: 'smart-meter-auslesen-verbrauchsdaten-trudi',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'Ein intelligentes Messsystem sammelt deutlich mehr Informationen als einen Jahreszählerstand. Wir zeigen, welche Verbrauchsdaten du 2026 sehen kannst, was HAN-Schnittstelle und Online-Portal unterscheiden, wofür TRuDI gedacht ist und wie das Auslesen bei Westnetz praktisch funktioniert.',
  lesezeit: 14,

  seo: seo(
    'Smart Meter auslesen: 15-Minuten-Werte & TRuDI | PEAK.Energy',
    'Smart Meter selbst auslesen: Verbrauchsdaten, HAN-Schnittstelle, Portal, 15-Minuten-Werte und TRuDI verständlich erklärt – inklusive Westnetz-Praxis.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein intelligentes Messsystem besteht aus digitalem Zähler und Smart-Meter-Gateway. Der Zähler misst – das Gateway übernimmt die '),
      bold('sichere Kommunikation und Datenbereitstellung'),
      t('.'),
    ),
    summaryPoint(
      t('Als Anschlussnutzer hast du bei einem iMSys Anspruch darauf, Verbrauchs- und abrechnungsrelevante Informationen einsehen zu können. Je nach Messstellenbetreiber geschieht das über '),
      bold('App, Online-Portal oder lokale Schnittstelle'),
      t('.'),
    ),
    summaryPoint(
      t('Bei intelligenten Messsystemen werden Messwerte typischerweise in einer Auflösung von '),
      bold('15 Minuten'),
      t(' verarbeitet. Das ist etwas anderes als ein Live-Leistungsmesswert im Sekundentakt.'),
    ),
    summaryPoint(
      t('Die Software '),
      bold('TRuDI'),
      t(' ist eine Transparenz- und Displaysoftware für Smart-Meter-Gateways. Sie hilft dabei, Mess- und Abrechnungswerte nachvollziehbar darzustellen und kann bei passenden Gateways über die HAN-Schnittstelle genutzt werden.'),
    ),
    summaryPoint(
      t('Für Energiemanagement gilt: Abrechnungsdaten aus dem iMSys und schnelle lokale Messwerte eines HEMS erfüllen unterschiedliche Aufgaben. Für eine Regelung von Speicher oder Wallbox werden häufig '),
      bold('schnellere lokale Daten'),
      t(' benötigt.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Was kann ich bei einem Smart Meter überhaupt auslesen?')),
      p(
        t('Beim klassischen Ferraris-Zähler war die Sache einfach: Auf dem Zähler stand ein kumulierter Verbrauchswert. Moderne Messeinrichtungen und intelligente Messsysteme können deutlich mehr Informationen bereitstellen. Entscheidend ist allerdings, welche Technik tatsächlich verbaut ist.'),
      ),
      p(
        t('Eine '),
        bold('moderne Messeinrichtung'),
        t(' ist zunächst ein digitaler Zähler. Ein '),
        bold('intelligentes Messsystem (iMSys)'),
        t(' entsteht erst, wenn dieser Zähler mit einem Smart-Meter-Gateway verbunden ist. Genau diese Unterscheidung erklären wir ausführlich in unserem '),
        link('Smart-Meter-Ratgeber 2026', '/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile'),
        t('.'),
      ),
      p(
        t('Das Smart-Meter-Gateway ist die Kommunikationseinheit. Es kann Messwerte verarbeiten, schützen und für berechtigte Marktteilnehmer beziehungsweise für dich als Anschlussnutzer bereitstellen. Das bedeutet aber nicht, dass jeder Wert automatisch in derselben App oder in Echtzeit erscheint.'),
      ),
    ),

    tabelleBlock('Welche Daten sind wo relevant?', [
      {
        spalte1: 'Zählerstand',
        spalte2: 'kWh seit Inbetriebnahme / Registerstand',
        spalte3: 'Abrechnung, Plausibilitätsprüfung',
      },
      {
        spalte1: '15-Minuten-Werte',
        spalte2: 'Verbrauch beziehungsweise Einspeisung je Viertelstunde',
        spalte3: 'Dynamische Tarife, Lastprofile, Verbrauchsanalyse',
      },
      {
        spalte1: 'Aktuelle Leistung',
        spalte2: 'Momentane Leistung in W oder kW – sofern lokal verfügbar',
        spalte3: 'Schnelle Verbrauchsanalyse und lokales Energiemanagement',
      },
      {
        spalte1: 'Tarif-/Abrechnungswerte',
        spalte2: 'Abrechnungsrelevante Messwerte und Tarifinformationen',
        spalte3: 'Rechnung kontrollieren',
      },
      {
        spalte1: 'Historische Werte',
        spalte2: 'Tages-, Wochen-, Monats- und Jahreswerte',
        spalte3: 'Vergleich und Verbrauchsentwicklung',
      },
    ]),

    textBlock(
      h('h2', t('Was bedeutet „15-Minuten-Wert“?')),
      p(
        t('Bei einem intelligenten Messsystem wird häufig von Viertelstundenwerten gesprochen. Gemeint ist eine zeitliche Auflösung des Verbrauchs oder der Einspeisung. Statt nur zu wissen, dass ein Haushalt im Monat 420 kWh verbraucht hat, lässt sich erkennen, in welchen Viertelstunden Energie bezogen oder eingespeist wurde.'),
      ),
      p(
        t('Das ist für dynamische Stromtarife, Bilanzierung und die Analyse flexibler Verbraucher wichtig. Ein Strompreis kann sich stündlich oder künftig noch feiner verändern, während das Messsystem die energiewirtschaftlich relevanten Mengen zeitlich zuordnet.'),
      ),
      p(
        t('Wichtig: '),
        bold('15-Minuten-Werte sind keine Echtzeitmessung.'),
        t(' Ein HEMS, das eine Wallbox oder einen Speicher innerhalb von Sekunden regeln soll, nutzt deshalb häufig zusätzliche lokale Messung direkt am Netzanschlusspunkt, Wechselrichter oder Energiemeter.'),
      ),
    ),

    hinweisBlock(
      '15 Minuten Auflösung ≠ alle 15 Minuten Datenversand',
      p(
        t('Die Auflösung eines Messwerts und der Zeitpunkt seiner Übertragung sind zwei verschiedene Dinge. Bei typischen Haushalten mit iMSys können Viertelstundenwerte gesammelt und gebündelt übertragen werden. Für dich können die Daten trotzdem über Portal oder lokale Schnittstelle verfügbar gemacht werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Drei Wege zu deinen Smart-Meter-Daten')),
      p(
        t('In der Praxis gibt es nicht „die eine Smart-Meter-App“. Der Zugang hängt vom Messstellenbetreiber, Gateway und vom gewünschten Anwendungsfall ab. Typisch sind drei Wege:'),
      ),
      ul(
        p(t('Online-Portal oder App des Messstellenbetreibers: bequem für historische Verbrauchs- und Einspeisedaten.')),
        p(t('Lokale HAN-Schnittstelle des Smart-Meter-Gateways: direkter Zugriff vor Ort auf dafür vorgesehene Daten.')),
        p(t('Anzeige beziehungsweise Schnittstelle der modernen Messeinrichtung: zum Beispiel optische Kundenschnittstelle oder Display am Zähler.')),
      ),
      p(
        t('Welche Variante für dich sinnvoll ist, hängt davon ab, ob du nur deinen Monatsverbrauch nachvollziehen, einen dynamischen Tarif prüfen oder technische Daten lokal in ein Energiemanagement übernehmen möchtest.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ist TRuDI?')),
      p(
        t('TRuDI steht für '),
        bold('Transparenz- und Displaysoftware'),
        t('. Sie wurde im Umfeld der Gemeinschaftsinitiative „BundesDisplay“ von Physikalisch-Technischer Bundesanstalt (PTB) und ZVEI entwickelt. Der Kern ist nicht „noch eine Energie-App“, sondern die nachvollziehbare Darstellung von Messwerten und abrechnungsrelevanten Informationen eines intelligenten Messsystems.'),
      ),
      p(
        t('Die PTB stellt eine Übersicht der geprüften beziehungsweise im Rahmen herstellerspezifischer Smart-Meter-Gateway-Prüfungen identifizierten TRuDI-Versionen bereit. Wichtig dabei: Verantwortlich für die konkrete Softwareversion ist der jeweilige '),
        bold('Hersteller des Smart-Meter-Gateways'),
        t('. Deshalb sollte die Version immer zum tatsächlich verbauten Gateway passen.'),
      ),
      p(
        t('Die offizielle Übersicht findest du bei der '),
        link('Physikalisch-Technischen Bundesanstalt (PTB)', 'https://www.ptb.de/cms/ptb/fachabteilungen/abt2/fb-23/ag-234/info-center-234/trudi.html', { newTab: true }),
        t('.'),
      ),
    ),

    tippBlock(
      'TRuDI nicht irgendwo herunterladen',
      p(
        t('Nutze die PTB-Übersicht beziehungsweise die Herstellerseite deines Smart-Meter-Gateways. Bei Mess- und Abrechnungssoftware würden wir keine beliebige Downloadquelle aus einem Forum oder Softwareportal verwenden.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie funktioniert das Auslesen über die HAN-Schnittstelle?')),
      p(
        t('HAN steht für Home Area Network. Vereinfacht gesagt ist das die Kundenschnittstelle auf der Gebäudeseite des Smart-Meter-Gateways. Sie ist bewusst von den externen Marktkommunikationswegen getrennt.'),
      ),
      p(
        t('Für den Zugriff brauchst du je nach Messstellenbetreiber und Gateway passende Zugangsdaten, eine Netzwerkverbindung zum Gateway und die für dein Gerät vorgesehene Software. Das kann beispielsweise TRuDI sein.'),
      ),
      p(
        t('Die Einrichtung ist damit technischer als das Öffnen einer normalen Smartphone-App. Dafür greifst du lokal auf das intelligente Messsystem zu und bist nicht darauf angewiesen, dass ein Cloud-Portal jede gewünschte Detailansicht anbietet.'),
      ),
    ),

    textBlock(
      h('h2', t('Westnetz: Smart Meter mit TRuDI selbst auslesen')),
      p(
        t('Für Kunden im Westnetz-Messstellenbetrieb gibt es dafür eine konkrete Anleitung. Westnetz stellt HAN-Zugangsdaten bereit und beschreibt, wie ein Endgerät vor Ort mit dem intelligenten Messsystem verbunden wird. Für die Anzeige der Energiedaten nennt Westnetz ausdrücklich die Software '),
        bold('TRuDI'),
        t('.'),
      ),
      p(
        t('Nach aktuellem Westnetz-Hinweis ist die HAN-Schnittstelle typischerweise auf die IP-Adresse '),
        bold('192.168.1.200'),
        t(' eingestellt. Das Endgerät muss sich im gleichen Netzwerksegment befinden. Bei älteren Gateways nennt Westnetz als mögliche Alternative 192.168.2.100. Solche technischen Angaben können sich mit Gerätetypen ändern – deshalb immer die aktuelle Anleitung des Messstellenbetreibers prüfen.'),
      ),
      p(
        t('Die aktuelle Westnetz-Seite findest du unter '),
        link('„Messwerte selbst auslesen“', 'https://www.westnetz.de/de/service/zaehler/han.html', { newTab: true }),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Moderne Messeinrichtung ohne Gateway: Daten direkt am Zähler')),
      p(
        t('Wenn kein Smart-Meter-Gateway verbaut ist, hast du möglicherweise trotzdem eine moderne Messeinrichtung. Dann lassen sich je nach Zählertyp zusätzliche Informationen am Display oder über eine optische Schnittstelle anzeigen. Häufig ist dafür eine PIN des Messstellenbetreibers nötig.'),
      ),
      p(
        t('Bei Westnetz kann diese PIN für moderne Messeinrichtungen online angefordert werden. Das ist allerdings ein anderer Zugangsweg als die HAN-Verbindung eines echten intelligenten Messsystems.'),
      ),
    ),

    textBlock(
      h('h2', t('Kann ich die Smart-Meter-Daten in mein HEMS übernehmen?')),
      p(
        t('Grundsätzlich kann die Smart-Meter-Infrastruktur Daten für weitere Anwendungen bereitstellen. In der Praxis muss man aber genau unterscheiden, welche Schnittstelle, welches Gateway, welcher Messstellenbetreiber und welches HEMS beteiligt sind.'),
      ),
      p(
        t('Für eine Eigenverbrauchsregelung ist zudem die Geschwindigkeit entscheidend. Wenn eine Wolke über die PV-Anlage zieht, soll ein Speicher oder eine Wallbox nicht erst auf den nächsten Viertelstundenwert warten. Ein gutes Energiemanagement nutzt deshalb oft '),
        bold('lokale schnelle Messung für die Regelung'),
        t(' und das iMSys für energiewirtschaftlich sichere Messung, Tarife und Kommunikation.'),
      ),
      p(
        t('Warum diese Trennung wichtig ist, erklären wir auch in unserem Artikel '),
        link('HEMS oder Hersteller-App – was ein echtes Energiemanagement ausmacht', '/strom-energiemanagement/hems-home-energy-management-system-hersteller-app'),
        t('.'),
      ),
    ),

    tabelleBlock('Smart Meter und HEMS: unterschiedliche Aufgaben', [
      {
        spalte1: 'Abrechnungsrelevante Messung',
        spalte2: 'iMSys / Messstellenbetreiber',
        spalte3: 'geeichte und energiewirtschaftlich relevante Daten',
      },
      {
        spalte1: 'Dynamischer Tarif',
        spalte2: 'iMSys + Lieferant + ggf. HEMS',
        spalte3: 'Messung und tarifabhängige Optimierung',
      },
      {
        spalte1: 'PV-Überschussregelung',
        spalte2: 'HEMS / lokale Messung',
        spalte3: 'schnelle Reaktion auf Erzeugung und Hausverbrauch',
      },
      {
        spalte1: '§14a-Steuerung',
        spalte2: 'iMSys + Steuerungseinrichtung + ggf. HEMS',
        spalte3: 'sichere netzorientierte Steuerung und lokale Verteilung',
      },
    ]),

    textBlock(
      h('h2', t('Unser Fazit: Die Daten gehören nicht nur dem Energieversorger')),
      p(
        t('Ein Smart Meter ist für Kunden dann wirklich nützlich, wenn die Messdaten verständlich und zugänglich sind. Genau deshalb ist der eigene Zugriff wichtig. Das Messsystem ist nicht bloß ein fernablesbarer Zähler für Netzbetreiber und Lieferant.'),
      ),
      p(
        t('Für die Praxis würden wir drei Ebenen auseinanderhalten: '),
        bold('Abrechnungsdaten'),
        t(' aus dem intelligenten Messsystem, '),
        bold('lokale Transparenz'),
        t(' über HAN beziehungsweise TRuDI und '),
        bold('schnelle Steuerdaten'),
        t(' für ein HEMS. Erst wenn diese Ebenen sinnvoll zusammenspielen, wird aus „digital messen“ ein wirklich intelligentes Energiesystem.'),
      ),
    ),

    ctaBlock({
      titel: 'Smart Meter, PV und Energiemanagement zusammen denken',
      text:
        'Wir planen PV, Speicher, Wärmepumpe, Wallbox und Energiemanagement nicht als Insellösungen. Entscheidend ist, welche Daten lokal verfügbar sind und wie die Systeme langfristig miteinander kommunizieren.',
      buttonText: 'Energiesystem anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Kann ich mein Smart Meter selbst auslesen?',
      'Ja. Bei einem intelligenten Messsystem können Verbrauchs- und Abrechnungsinformationen je nach Messstellenbetreiber über App, Online-Portal oder lokale HAN-Schnittstelle bereitgestellt werden. Für die lokale Schnittstelle werden Zugangsdaten und passende Software benötigt.',
    ),
    faqItem(
      'Was ist TRuDI?',
      'TRuDI ist eine Transparenz- und Displaysoftware für intelligente Messsysteme. Sie dient dazu, Messwerte und abrechnungsrelevante Informationen eines Smart-Meter-Gateways nachvollziehbar darzustellen. Die passende Version richtet sich nach dem Gateway-Hersteller.',
    ),
    faqItem(
      'Zeigt TRuDI Live-Verbrauch an?',
      'TRuDI stellt die vom Smart-Meter-Gateway verfügbaren Daten dar. Welche Aktualität und Messwerte verfügbar sind, hängt vom Gateway und dessen Konfiguration ab. Für sehr schnelle Regelungen im HEMS werden häufig zusätzliche lokale Energiemessungen genutzt.',
    ),
    faqItem(
      'Was sind 15-Minuten-Werte beim Smart Meter?',
      'Das sind zeitlich auf Viertelstunden aufgelöste Messwerte für Verbrauch oder Einspeisung. Sie ermöglichen deutlich genauere Lastprofile als ein einzelner Monats- oder Jahreszählerstand.',
    ),
    faqItem(
      'Brauche ich bei Westnetz TRuDI?',
      'Westnetz nennt TRuDI ausdrücklich als Software zum lokalen Auslesen von Energiedaten über die HAN-Schnittstelle des Smart-Meter-Gateways. Entscheidend ist die zum verbauten Gateway passende Version.',
    ),
    faqItem(
      'Kann ein HEMS direkt mit dem Smart Meter arbeiten?',
      'Das ist grundsätzlich möglich, hängt aber von den verfügbaren Schnittstellen und der konkreten Systemarchitektur ab. Für schnelle PV-, Speicher- oder Wallbox-Regelung nutzen viele HEMS zusätzlich eigene lokale Messwerte.',
    ),
  ],
}

await upsertRatgeberArticle(article)
