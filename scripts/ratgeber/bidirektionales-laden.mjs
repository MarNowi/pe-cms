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
  titel: 'Bidirektionales Laden: Wenn das E-Auto zum Stromspeicher wird',
  slug: 'bidirektionales-laden',
  kategorie: 'wallbox',
  status: 'veroeffentlicht',
  teaser:
    'Ein E-Auto hat 40 bis 100 kWh Batterie an Bord – das Fünf- bis Zehnfache eines Heimspeichers. Bidirektionales Laden macht diese Kapazität fürs Haus und fürs Netz nutzbar. 2026 fallen dafür wichtige regulatorische Hürden. Was V2H und V2G können, was heute schon geht und worauf man beim Wallbox-Kauf achten sollte.',
  lesezeit: 9,
  seo: seo(
    'Bidirektionales Laden erklärt: V2H, V2G & Stand 2026 | PEAK.Energy',
    'Bidirektionales Laden 2026: Vehicle-to-Home und Vehicle-to-Grid erklärt – rechtlicher Stand (keine doppelten Netzentgelte, VDE-Norm, ISO 15118-20), verfügbare Technik und ehrliche Einordnung.',
  ),
  zusammenfassung: [
    summaryPoint(
      bold('V2H (Vehicle-to-Home)'),
      t(' versorgt das eigene Haus aus der Autobatterie, '),
      bold('V2G (Vehicle-to-Grid)'),
      t(' speist ins Netz zurück und vermarktet die Flexibilität – zwei verwandte, aber verschiedene Anwendungen.'),
    ),
    summaryPoint(
      t('Die Regulatorik zieht nach: Seit Ende 2025 entfallen '),
      bold('doppelte Netzentgelte'),
      t(' für zwischengespeicherten Strom, seit 2026 regelt eine VDE-Anwendungsregel bidirektionale Wallboxen, ab 2027 wird der Kommunikationsstandard ISO 15118-20 EU-weit verbindlich.'),
    ),
    summaryPoint(
      t('Praktisch braucht es heute drei Dinge: ein '),
      bold('bidirektional fähiges Fahrzeug'),
      t(', eine '),
      bold('DC-Wallbox mit Wechselrichter'),
      t(' und ein Energiemanagement, das die Flüsse steuert – das Angebot wächst, ist aber noch überschaubar.'),
    ),
    summaryPoint(
      t('Der Batterieverschleiß durch V2G ist nach Studienlage moderat – mit intelligentem Lademanagement teils geringer als bei stumpfem Volladen.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Die Idee: 60 kWh stehen nutzlos in der Garage')),
      p(
        t('Ein durchschnittliches E-Auto steht über 90 % der Zeit – mit einer Batterie, die den Tagesverbrauch eines Einfamilienhauses fünf- bis zehnmal decken könnte. Bidirektionales Laden dreht den Ladestecker um: Das Auto nimmt Strom nicht nur auf, sondern gibt ihn gezielt wieder ab. Damit wird die teuerste Komponente des Fahrzeugs vom Stehzeug zum größten Speicher des Hauses.'),
      ),
      p(
        t('Die Anwendungen unterscheiden sich im Ziel: '),
        bold('V2L (Vehicle-to-Load)'),
        t(' versorgt einzelne Geräte über eine Steckdose am Auto – nett fürs Camping, energiewirtschaftlich irrelevant. '),
        bold('V2H (Vehicle-to-Home)'),
        t(' speist ins Hausnetz: PV-Überschuss vom Wochenende deckt den Montagabend, das Auto übernimmt die Rolle des Heimspeichers oder ergänzt ihn. '),
        bold('V2G (Vehicle-to-Grid)'),
        t(' geht den letzten Schritt und vermarktet die Batterie am Strommarkt – gegen Vergütung, gebündelt über Aggregatoren.'),
      ),
    ),
    textBlock(
      h('h2', t('Was sich 2025/2026 regulatorisch getan hat')),
      ul(
        p(
          bold('Keine doppelten Netzentgelte mehr:'),
          t(' Der historische Bremsklotz – Netzentgelte und Umlagen sowohl beim Laden als auch beim Rückspeisen zu zahlen – ist seit Ende 2025 beseitigt; zwischengespeicherter Strom wird nur noch einmal belastet (zunächst befristet, ein Folgemodell ist in Arbeit).'),
        ),
        p(
          bold('VDE-Anwendungsregel für bidirektionale Wallboxen:'),
          t(' Seit 2026 gelten klare technische Anforderungen (Netzschutz, Inselerkennung); das rückspeisende Auto wird netztechnisch wie eine Erzeugungsanlage behandelt und entsprechend angemeldet.'),
        ),
        p(
          bold('ISO 15118-20 wird Pflicht:'),
          t(' Ab 2027 ist der Kommunikationsstandard, der bidirektionales Laden herstellerübergreifend regelt, für neue Ladepunkte EU-weit verbindlich – das Ende der Insellösungen ist absehbar.'),
        ),
        p(
          bold('Offene Baustelle Messwesen:'),
          t(' Wie PV-Strom, Netzstrom und rückgespeister Strom messtechnisch sauber auseinandergehalten werden, wird noch final geregelt – hier entstehen die Detailregeln gerade.'),
        ),
      ),
    ),
    tabelleBlock('V2H und V2G im Vergleich', [
      {
        spalte1: 'V2H (Vehicle-to-Home)',
        spalte2: 'Eigenverbrauch maximieren, Notstrom-Option',
        spalte3: 'Heute technisch machbar mit passendem Fahrzeug + DC-Wallbox; wirtschaftlich analog zum Heimspeicher',
      },
      {
        spalte1: 'V2G (Vehicle-to-Grid)',
        spalte2: 'Vermarktung am Strommarkt, Netzdienstleistung',
        spalte3: 'Erste Angebote über Aggregatoren, zunächst v. a. für Flotten – Privatmarkt im Aufbau',
      },
      {
        spalte1: 'Voraussetzung Fahrzeug',
        spalte2: 'Bidirektionale Freigabe des Herstellers',
        spalte3: 'Modellliste wächst – vor dem Autokauf explizit prüfen, inkl. Garantiebedingungen',
      },
      {
        spalte1: 'Voraussetzung Wallbox',
        spalte2: 'DC-Wallbox mit integriertem Wechselrichter',
        spalte3: 'Deutlich teurer als AC-Laden; AC-bidirektional ist angekündigt, aber noch nicht Serie',
      },
      {
        spalte1: 'Voraussetzung System',
        spalte2: 'HEMS + Anmeldung beim Netzbetreiber',
        spalte3: 'Steuerung der Energieflüsse, §14a-konforme Einbindung, passendes Messkonzept',
      },
    ]),
    hinweisBlock(
      'Macht V2H den Heimspeicher überflüssig?',
      p(
        t('Nicht so schnell. Das Auto ist nicht immer zu Hause – ausgerechnet tagsüber, wenn die PV liefert, steht es oft beim Arbeitgeber. Der stationäre Speicher ist immer da, arbeitet unabhängig vom Fahrplan und ist auf tägliche Zyklen ausgelegt. Realistisch ist ein Zusammenspiel: Der Heimspeicher deckt die tägliche Grundlast, das Auto bringt die große Reserve für Schlechtwetterphasen, hohe Preisstunden oder Notstrom. Wie ein HEMS beide koordiniert, zeigt unser Beitrag zum Energiemanagement.'),
      ),
    ),
    textBlock(
      h('h2', t('Rechnet sich das schon?')),
      p(
        t('Ehrliche Antwort: Es kommt darauf an, und die Rechnung verändert sich gerade monatlich zugunsten des bidirektionalen Ladens. Die Mehrkosten stecken heute vor allem in der DC-Wallbox. Dem stehen gegenüber: vermiedener Netzbezug wie bei einem großen Heimspeicher, mögliche Erlöse aus Vermarktung – interessant vor allem in Kombination mit dynamischen Stromtarifen – und der vermiedene oder kleinere stationäre Speicher.'),
      ),
      p(
        t('Zum Batterieverschleiß zeigen Studien ein beruhigendes Bild: Der zusätzliche Kapazitätsverlust durch V2G-Betrieb liegt über zehn Jahre im einstelligen bis niedrigen zweistelligen Prozentbereich – und intelligentes Lademanagement, das die Batterie im mittleren Ladefenster hält, kann die Alterung sogar unter die des unmanaged Ladens drücken. Die Hersteller-Garantiebedingungen bleiben trotzdem der Punkt, den man vor dem Einstieg prüft.'),
      ),
    ),
    tippBlock(
      'Heute kaufen, ohne sich zu verbauen',
      p(
        t('Wer jetzt Wallbox oder E-Auto anschafft und bidirektional später nutzen will, sollte drei Dinge tun: ein Fahrzeug mit angekündigter oder vorhandener Bidirektional-Freigabe wählen (und die Garantiebedingungen lesen), bei der Wallbox auf ISO-15118-Fähigkeit achten, und die Hausinstallation mit offenem Energiemanagement und ausreichend Platz im Zählerschrank vorbereiten. Dann ist der Umstieg ein Gerätetausch – kein Neubau der Infrastruktur. Genau dieser Denkweise folgt auch unser PEAK.Flex-Ansatz: Flexibilität im Haus aufbauen, bevor der Markt sie vergütet.'),
      ),
    ),
    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Bidirektionales Laden ist kein Hype mehr, sondern ein Markt im Hochlauf: Die regulatorischen Bremsen sind 2025/2026 weitgehend gelöst, die Standards stehen, die Fahrzeugliste wächst. Für die breite Masse der Einfamilienhäuser ist V2H der naheliegende Einstieg – V2G folgt, sobald Aggregator-Angebote den Privatmarkt erreichen.'),
      ),
      p(
        bold('Unsere Empfehlung: vorbereiten statt abwarten oder überstürzen.'),
        t(' Wer heute PV, Speicher und Wallbox plant, sollte die bidirektionale Zukunft in Schnittstellen und Auslegung mitdenken – und einsteigen, wenn Fahrzeug und Wallbox-Preis für den eigenen Fall passen. Wir beraten dazu herstelleroffen und ohne Glaskugel-Versprechen.'),
      ),
    ),
    ctaBlock({
      titel: 'Ladeinfrastruktur zukunftssicher planen',
      text:
        'Wallbox, PV und Energiemanagement so geplant, dass bidirektionales Laden andocken kann, sobald es für Sie passt – herstelleroffen und §14a-konform.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Welche Autos können heute bidirektional laden?',
      'Die Liste wächst laufend – freigegeben haben u. a. mehrere asiatische und europäische Hersteller einzelne Modelle, teils nur V2L, teils volles V2H/V2G. Da sich Freigaben und Garantiebedingungen schnell ändern, gehört die Frage konkret in die Kaufberatung: nicht „kann die Marke das", sondern „ist dieses Modell mit dieser Software für V2H freigegeben".',
    ),
    faqItem(
      'Brauche ich eine spezielle Wallbox?',
      'Ja – bidirektionales Laden läuft derzeit über DC-Wallboxen mit eingebautem Wechselrichter, die deutlich teurer sind als normale AC-Wallboxen. AC-bidirektionale Lösungen (Wechselrichter im Auto) sind angekündigt und würden die Kosten deutlich senken. Die Wallbox muss zudem als Erzeugungsanlage angemeldet werden.',
    ),
    faqItem(
      'Schadet Rückspeisen der Autobatterie?',
      'Nach aktueller Studienlage moderat: Der zusätzliche Verschleiß durch V2G liegt über zehn Jahre grob im Bereich von 10 % Kapazität – mit intelligentem Lademanagement teils weniger als bei täglichem Volladen ohne Steuerung. Wichtiger als die Technik ist die Garantie: Manche Hersteller begrenzen die freigegebene Rückspeise-Energiemenge.',
    ),
    faqItem(
      'Kann ich mit V2H mein Haus bei Stromausfall versorgen?',
      'Prinzipiell ja – wenn Wallbox und Hausinstallation für Insel-/Ersatzstrombetrieb ausgelegt sind, analog zum Heimspeicher-Backup: Umschalteinrichtung, Netztrennung, Lastkonzept. Ein 60-kWh-Auto überbrückt dann auch mehrtägige Ausfälle. Die Anforderungen erklären wir im Beitrag „Notstrom und Backup nachrüsten".',
    ),
    faqItem(
      'Verdiene ich mit V2G wirklich Geld?',
      'Perspektivisch ja, aktuell überwiegend in Pilot- und Flottenprogrammen: Aggregatoren bündeln Fahrzeugbatterien und vermarkten die Flexibilität, die Vergütungsmodelle für Privatkunden sind im Aufbau. Kurzfristig liegt der greifbare Nutzen im V2H-Eigenverbrauch – besonders in Kombination mit einem dynamischen Stromtarif.',
    ),
  ],
}

await upsertRatgeberArticle(article)
