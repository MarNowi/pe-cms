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
  titel: 'Dynamischer Stromtarif trifft § 14a: Was passiert, wenn Börsenpreis und Netzentgelt gegeneinander arbeiten?',
  slug: 'dynamischer-stromtarif-paragraf-14a-netzentgelt',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'Der Börsenstrom ist billig – aber das zeitvariable Netzentgelt gerade hoch. Oder umgekehrt. Wer Wärmepumpe, Wallbox oder Speicher intelligent steuern will, darf deshalb nicht nur auf einen Preis schauen. Wir erklären, wie dynamischer Tarif und §-14a-Modul 3 zusammenspielen.',
  lesezeit: 12,

  seo: seo(
    'Dynamischer Stromtarif + § 14a Modul 3: Was optimieren? | PEAK.Energy',
    'Börsenpreis und zeitvariables Netzentgelt können unterschiedliche Signale senden. So funktionieren dynamischer Stromtarif, § 14a Modul 3 und HEMS zusammen.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein dynamischer Stromtarif und das zeitvariable Netzentgelt nach § 14a sind '),
      bold('zwei verschiedene Preissignale'),
      t(': Der eine kommt aus dem Energieliefervertrag, das andere aus dem Verteilnetz.'),
    ),
    summaryPoint(
      t('Modul 3 kann seit April 2025 mit '),
      bold('Modul 1'),
      t(' kombiniert werden. Der Netzbetreiber legt dafür Zeitfenster mit Hoch-, Standard- und Niedertarif fest.'),
    ),
    summaryPoint(
      t('Der billigste Börsenzeitpunkt muss nicht der billigste Zeitpunkt für den '),
      bold('gesamten Netzbezug'),
      t(' sein, wenn gleichzeitig ein hohes Netzentgelt gilt.'),
    ),
    summaryPoint(
      t('Ein HEMS sollte deshalb nicht nur den Börsenpreis sehen, sondern möglichst '),
      bold('Gesamtkosten, PV-Prognose, Speicherzustand und Komfortbedarf'),
      t(' berücksichtigen.'),
    ),
    summaryPoint(
      t('Bei Wallbox, Wärmepumpe und Batteriespeicher entsteht der größte Nutzen durch '),
      bold('verschiebbare Lasten'),
      t(' – nicht dadurch, dass zwingend jede billige Stunde genutzt wird.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Zwei Preise, zwei Signale – und plötzlich wird Energiemanagement interessant')),
      p(
        t('Dynamische Stromtarife machen den Energiepreis zeitabhängig. Gleichzeitig gibt es mit § 14a EnWG für steuerbare Verbrauchseinrichtungen reduzierte Netzentgelte – und mit Modul 3 sogar ein zeitvariables Netzentgelt. Beide Modelle wollen Verbrauch zeitlich flexibler machen. Sie folgen aber nicht demselben Signal.'),
      ),
      p(
        t('Das führt zu einer neuen Situation: Um 13 Uhr kann der energieseitige Preis sehr günstig sein, während das Netzentgelt im jeweiligen Netzgebiet gerade auf einer höheren Preisstufe liegt. Später kann das Verhältnis genau andersherum aussehen.'),
      ),
      p(
        t('Die richtige Frage lautet deshalb nicht mehr nur „Wann ist Strom an der Börse billig?“, sondern: '),
        bold('„Wann ist der zusätzliche Netzbezug für mein konkretes System insgesamt sinnvoll?“'),
      ),
    ),

    tabelleBlock('Dynamischer Tarif und § 14a Modul 3 im Vergleich', [
      {
        spalte1: 'Dynamischer Stromtarif',
        spalte2: 'Energielieferant / Beschaffungspreis',
        spalte3: 'Arbeitspreis verändert sich mehrmals täglich und orientiert sich am Börsenpreis',
      },
      {
        spalte1: '§ 14a Modul 3',
        spalte2: 'Verteilnetzbetreiber / Netzentgelt',
        spalte3: 'Zeitfenster mit Hoch-, Standard- und Niedertarif',
      },
      {
        spalte1: 'PV-Erzeugung',
        spalte2: 'eigene Erzeugung',
        spalte3: 'Kann Netzbezug ganz vermeiden und damit beide Preissignale überlagern',
      },
      {
        spalte1: 'HEMS',
        spalte2: 'Optimierungsebene',
        spalte3: 'Soll mehrere Signale und technische Grenzen gemeinsam bewerten',
      },
    ]),

    textBlock(
      h('h2', t('Was ist ein dynamischer Stromtarif?')),
      p(
        t('Bei einem dynamischen Stromvertrag orientiert sich der Arbeitspreis an den Preisen des Stromgroßhandels und kann sich mehrmals am Tag ändern. Für die Nutzung ist ein intelligentes Messsystem erforderlich. Seit 2025 müssen Stromlieferanten dynamische Tarife anbieten.'),
      ),
      p(
        t('Die Bundesnetzagentur erklärt die Funktionsweise und Voraussetzungen auf ihrer Seite '),
        link('Dynamische Stromtarife', 'https://www.bundesnetzagentur.de/DE/Vportal/Energie/Vertragsarten/DynStromtarife/start.html', { newTab: true }),
        t('. Wichtig: Der Börsenpreis ist nicht identisch mit dem vollständigen Endkundenpreis. Lieferantenbestandteile, Netzentgelte, Steuern, Umlagen und weitere Preisbestandteile kommen hinzu.'),
      ),
    ),

    textBlock(
      h('h2', t('Was macht § 14a Modul 3?')),
      p(
        t('Für neue steuerbare Verbrauchseinrichtungen wie private Wallboxen, Wärmepumpen und bestimmte Batteriespeicher gelten seit 2024 die neuen §-14a-Regeln. Im Gegenzug zur netzorientierten Steuerbarkeit gibt es reduzierte Netzentgelte.'),
      ),
      p(
        t('Seit April 2025 kann '),
        bold('Modul 3 zusätzlich zu Modul 1'),
        t(' gewählt werden. Der Netzbetreiber muss dafür zeitvariable Netzentgelte mit drei Preisstufen anbieten: Hochtarif, Standardtarif und Niedertarif. Die Zeitfenster werden für das jeweilige Netzgebiet festgelegt.'),
      ),
      p(
        t('Die aktuellen Grundlagen beschreibt die '),
        link('Bundesnetzagentur zu den §-14a-Netzentgeltmodulen', 'https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/Netzentgelt_table.html', { newTab: true }),
        t('. Unser technischer Einstieg zur Steuerung ist '),
        link('Steuerbox, § 14a, Smart Meter und HEMS', '/strom-energiemanagement/steuerbox-paragraf-14a-smart-meter-hems'),
        t('.'),
      ),
    ),

    hinweisBlock(
      'Modul 3 ist nicht der dynamische Stromtarif',
      p(
        t('Die beiden Dinge werden häufig vermischt. Modul 3 verändert den Netzentgelt-Anteil nach vorgegebenen Zeitfenstern. Ein dynamischer Liefervertrag verändert den energieseitigen Arbeitspreis. Beides kann gleichzeitig auf derselben Stromrechnung wirken.'),
      ),
    ),

    textBlock(
      h('h2', t('Beispiel 1: Börsenstrom billig, Netzentgelt hoch')),
      p(
        t('Nehmen wir an, der dynamische Tarif signalisiert um 18 Uhr einen ungewöhnlich günstigen Energiepreis. Gleichzeitig liegt dieses Zeitfenster beim lokalen Netzbetreiber im Hochtarif von Modul 3. Soll der Speicher jetzt aus dem Netz laden?'),
      ),
      p(
        t('Die Antwort lautet: '),
        bold('nicht automatisch'),
        t('. Das Energiemanagement müsste die zusätzlichen Gesamtkosten dieser Kilowattstunde bewerten. Ist der energieseitige Preisvorteil größer als der Netzentgelt-Nachteil, kann Laden trotzdem sinnvoll sein. Ist er kleiner, kann Warten günstiger sein.'),
      ),
      p(
        t('Zusätzlich zählt, wofür die Energie gebraucht wird. Wenn das Auto morgen früh voll sein muss oder der Speicher eine notwendige Reserve braucht, kann Versorgungssicherheit wichtiger sein als die theoretisch billigste Stunde.'),
      ),
    ),

    textBlock(
      h('h2', t('Beispiel 2: Netzentgelt niedrig, Börsenstrom teuer')),
      p(
        t('Umgekehrt kann ein Niedertarif-Fenster des Netzbetreibers auf eine Stunde mit relativ hohem Energiepreis fallen. Nur weil das Netzentgelt günstig ist, muss man dort nicht zwangsläufig laden.'),
      ),
      p(
        t('Vielleicht kommt wenige Stunden später PV-Erzeugung, die Batterie ist noch ausreichend gefüllt oder der dynamische Energiepreis fällt danach stärker. Ein gutes System bewertet daher nicht nur den aktuellen Preis, sondern auch die nächsten Stunden.'),
      ),
    ),

    textBlock(
      h('h2', t('Was müsste ein gutes HEMS eigentlich optimieren?')),
      ul(
        p(t('dynamischen Energiepreis inklusive tariflicher Aufschläge,')),
        p(t('zeitvariables Netzentgelt nach Modul 3,')),
        p(t('PV-Erzeugungsprognose und aktuellen Überschuss,')),
        p(t('Ladezustand und Leistungsgrenzen des Stromspeichers,')),
        p(t('Abfahrtszeit und Energiebedarf des E-Autos,')),
        p(t('Wärmebedarf und zulässige Verschiebung der Wärmepumpe,')),
        p(t('Hausanschlussgrenzen und Prioritäten weiterer Verbraucher.')),
      ),
      p(
        t('Das ist der Unterschied zwischen einer einfachen Tarif-App und einem echten Energiemanagement. Eine App kann einen günstigen Preis anzeigen. Ein HEMS muss entscheiden, '),
        bold('ob und wie viel Energie das Gesamtsystem in dieser Stunde wirklich beziehen sollte'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Der Speicher macht aus Preisen Zeitverschiebung')),
      p(
        t('Ein Batteriespeicher kann günstigen Netzstrom aufnehmen und später teureren Netzbezug vermeiden. Genau deshalb ist er für dynamische Tarife interessant. Die Wirtschaftlichkeit hängt aber von Preisdifferenz, Lade-/Entladeverlusten, Batterienutzung und den übrigen Preisbestandteilen ab.'),
      ),
      p(
        t('Nur weil der Börsenpreis negativ ist, ist die geladene Kilowattstunde zuhause nicht automatisch kostenlos. Und nur weil ein späterer Börsenpreis hoch ist, entsteht aus jeder gespeicherten Kilowattstunde automatisch Gewinn.'),
      ),
      p(
        t('Mehr dazu findest du in '),
        link('Stromspeicher aus dem Netz laden: Wann dynamisches Laden sinnvoll ist', '/strom-energiemanagement/stromspeicher-aus-netz-laden-dynamisch-sinnvoll'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Wärmepumpe: Komfort setzt Grenzen')),
      p(
        t('Eine Wärmepumpe hat thermische Flexibilität, aber sie ist kein beliebig verschiebbarer Verbraucher. Gebäude, Warmwasserspeicher und Heizflächen können Energie puffern, doch Raumtemperatur und Warmwasserkomfort setzen Grenzen.'),
      ),
      p(
        t('Ein HEMS kann günstige Zeitfenster nutzen, indem es innerhalb dieser Grenzen Wärme vorzieht. Es sollte aber nicht die Heizung stundenlang sperren, nur weil der nächste Preis rechnerisch ein paar Cent günstiger aussieht.'),
      ),
    ),

    textBlock(
      h('h2', t('Wallbox: meistens die flexibelste große Last')),
      p(
        t('Beim E-Auto ist der Spielraum häufig größer. Wenn das Fahrzeug ab 18 Uhr angeschlossen ist und erst um 7 Uhr wieder gebraucht wird, stehen viele Stunden zur Verfügung. Das System kann innerhalb dieses Fensters Energie- und Netzentgeltpreise vergleichen und die günstigsten passenden Ladephasen auswählen.'),
      ),
      p(
        t('Mit PV-Überschuss kommt eine dritte Option hinzu. Dann kann es sinnvoller sein, den Ladevorgang bis zum nächsten sonnigen Zeitfenster zu verschieben – solange die gewünschte Energiemenge bis zur Abfahrt sicher erreicht wird.'),
      ),
    ),

    tippBlock(
      'Nicht auf den billigsten Einzelpreis optimieren',
      p(
        t('Die wirtschaftlich beste Stunde ist die Stunde mit den günstigsten relevanten Gesamtkosten für die konkrete Aufgabe. Börsenpreis, Netzentgelt, Speicherverluste und der zukünftige Energiebedarf können die Reihenfolge verändern.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Jetzt beginnt die eigentliche Aufgabe des HEMS')),
      p(
        t('Solange es nur einen festen Strompreis gab, war Energiemanagement vergleichsweise einfach: möglichst viel PV selbst verbrauchen. Mit dynamischen Tarifen, § 14a, steuerbaren Verbrauchern und Speichern entstehen mehrere zeitabhängige Signale gleichzeitig.'),
      ),
      p(
        t('Das macht das System komplexer – aber auch wertvoller. Ein gutes HEMS optimiert nicht blind auf Börsenpreis oder Netzentgelt, sondern auf das '),
        bold('Gesamtsystem aus Kosten, Technik, Prognose und Nutzerziel'),
        t('. Genau dort liegt die nächste Entwicklungsstufe der dezentralen Energieversorgung.'),
      ),
    ),

    ctaBlock({
      titel: 'Dynamischen Tarif nicht isoliert betrachten',
      text:
        'Wir planen PV, Speicher, Wallbox, Wärmepumpe und Energiemanagement als ein System – offen für Tarife und ohne unnötigen Hersteller-Lock-in.',
      buttonText: 'Energiesystem besprechen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Ist § 14a Modul 3 dasselbe wie ein dynamischer Stromtarif?',
      'Nein. Modul 3 ist ein zeitvariables Netzentgelt des Verteilnetzbetreibers. Ein dynamischer Stromtarif betrifft den energieseitigen Arbeitspreis des Stromlieferanten und orientiert sich am Großhandelsmarkt.',
    ),
    faqItem(
      'Kann man Modul 3 allein wählen?',
      'Nein. Nach den Festlegungen der Bundesnetzagentur wird Modul 3 mit Modul 1 kombiniert. Eine Kombination von Modul 3 mit Modul 2 ist nicht vorgesehen.',
    ),
    faqItem(
      'Seit wann gibt es zeitvariable Netzentgelte nach Modul 3?',
      'Netzbetreiber müssen Modul 3 seit April 2025 anbieten. Es arbeitet mit Hoch-, Standard- und Niedertarif-Zeitfenstern im jeweiligen Netzgebiet.',
    ),
    faqItem(
      'Soll ein Speicher immer laden, wenn der Börsenstrom billig ist?',
      'Nein. Entscheidend sind die gesamten Bezugskosten, Speicherverluste, der erwartete spätere Bedarf, PV-Prognose und technische Grenzen. Ein niedriger Börsenpreis allein reicht nicht für eine optimale Entscheidung.',
    ),
    faqItem(
      'Welche Verbraucher eignen sich besonders für zeitvariable Preise?',
      'Vor allem flexible große Lasten wie E-Auto, Wärmepumpe und Batteriespeicher. Je größer das zeitliche Verschiebepotenzial, desto besser können günstige Zeitfenster genutzt werden.',
    ),
  ],
}

await upsertRatgeberArticle(article)
