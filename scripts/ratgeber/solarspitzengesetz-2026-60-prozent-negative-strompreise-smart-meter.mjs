// scripts/articles/solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter.mjs

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
  titel: 'Solarspitzengesetz 2026: 60-%-Regel, negative Strompreise und Smart Meter verständlich erklärt',
  slug: 'solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'Seit dem Solarspitzengesetz gelten für neue PV-Anlagen andere Spielregeln: Ohne intelligente Steuerung kann die Netzeinspeisung auf 60 % begrenzt sein, bei negativen Börsenpreisen kann die EEG-Vergütung zeitweise auf null fallen – und das Smart Meter wird zum Scharnier zwischen beiden Regeln. Was davon 2026 für Einfamilienhäuser wirklich gilt, welche Bestandsanlagen geschützt sind und warum 60 % nicht 40 % Ertragsverlust bedeuten.',
  lesezeit: 16,

  seo: seo(
    'Solarspitzengesetz 2026: 60-%-Regel & negative Strompreise | PEAK.Energy',
    'Solarspitzengesetz 2026 verständlich erklärt: 60-%-Einspeisebegrenzung, negative Strompreise, Smart Meter, Steuerbox, Bestandsschutz und Folgen für PV-Anlagen.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Das sogenannte Solarspitzengesetz gilt seit dem '),
      bold('25. Februar 2025'),
      t('. Für typische private Neuanlagen ist vor allem wichtig: Die 60-%-Regel betrifft die maximale Einspeisung ins öffentliche Netz – nicht die gesamte PV-Erzeugung.'),
    ),
    summaryPoint(
      t('Bei neuen PV-Anlagen in der Einspeisevergütung oder mit Mieterstromzuschlag kann die Wirkleistungseinspeisung am Netzverknüpfungspunkt auf '),
      bold('60 % der installierten Leistung'),
      t(' begrenzt sein, bis intelligentes Messsystem, Steuerungseinrichtung und die erfolgreiche Ansteuerbarkeit durch den Netzbetreiber zusammenkommen.'),
    ),
    summaryPoint(
      t('Bei negativen Börsenstrompreisen kann der EEG-Zahlungsanspruch für Neuanlagen auf '),
      bold('0 Cent'),
      t(' sinken. Bei Anlagen unter 100 kW greift diese Regel aber grundsätzlich erst nach Ablauf des Kalenderjahres, in dem ein intelligentes Messsystem eingebaut wurde.'),
    ),
    summaryPoint(
      t('Seit Oktober 2025 arbeitet der gekoppelte Day-Ahead-Markt mit '),
      bold('15-Minuten-Produkten'),
      t('. Für die neue §51-Regel kann deshalb 2026 bereits eine einzelne negative Viertelstunde relevant sein – sobald die Regel für die konkrete Anlage anwendbar ist.'),
    ),
    summaryPoint(
      t('Speicher und HEMS sind durch das Solarspitzengesetz '),
      bold('nicht vorgeschrieben'),
      t('. Sie können aber helfen, PV-Leistung im Haus zu nutzen, statt sie an der 60-%-Grenze abzuregeln oder in ungünstigen Marktzeiten einzuspeisen.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum das Solarspitzengesetz 2026 für PV-Betreiber wichtig ist')),
      p(
        t('Das Solarspitzengesetz klingt zunächst nach einer Spezialregel für Stromnetze. In der Praxis landet es aber direkt im Einfamilienhaus: bei der Auslegung der PV-Anlage, beim Wechselrichter, beim Smart Meter, beim Speicher und bei der Frage, wie viel Strom eine Anlage wann ins Netz einspeisen darf.'),
      ),
      p(
        t('Das Gesetz selbst trägt einen deutlich längeren Namen: „Gesetz zur Änderung des Energiewirtschaftsrechts zur Vermeidung von temporären Erzeugungsüberschüssen". Die wesentlichen Änderungen sind am '),
        bold('25. Februar 2025'),
        t(' in Kraft getreten. 2026 sind sie damit keine Zukunftsmusik mehr, sondern Bestandteil der Planung neuer Anlagen.'),
      ),
      p(
        t('Trotzdem werden drei Dinge regelmäßig durcheinandergeworfen: die '),
        bold('60-%-Einspeisebegrenzung'),
        t(', die '),
        bold('Nullvergütung bei negativen Börsenpreisen'),
        t(' und der '),
        bold('Smart-Meter-Rollout'),
        t('. Sie hängen zusammen, sind aber nicht dasselbe. Genau diese Trennung ist wichtig, um die wirtschaftlichen Folgen richtig einzuordnen.'),
      ),
    ),

    tabelleBlock('Die drei Regeln auf einen Blick', [
      {
        spalte1: '60-%-Regel',
        spalte2: 'Begrenzt vorübergehend die maximale Netzeinspeisung bestimmter neuer PV-Anlagen',
        spalte3: 'Betrifft die Einspeisung am Netzverknüpfungspunkt – nicht automatisch die PV-Erzeugung',
      },
      {
        spalte1: 'Negative Strompreise',
        spalte2: 'Der EEG-Zahlungsanspruch kann in negativen Marktzeitfenstern auf null sinken',
        spalte3: 'Bei Anlagen unter 100 kW grundsätzlich erst nach Ablauf des iMSys-Einbaujahres',
      },
      {
        spalte1: 'Smart Meter + Steuerung',
        spalte2: 'Schafft Mess- und Steuerbarkeit für Netz und Markt',
        spalte3: 'Kann die 60-%-Begrenzung beenden; gleichzeitig wird §51 für kleine Neuanlagen später relevant',
      },
    ]),

    hinweisBlock(
      'Stand dieses Artikels: 10. August 2026',
      p(
        t('Energierecht ändert sich derzeit schnell. Dieser Beitrag bildet den Rechtsstand vom 10. August 2026 ab und konzentriert sich auf typische private PV-Anlagen. Bei größeren Gewerbeanlagen, Direktvermarktung, Mieterstrom oder Sondermesskonzepten gelten zusätzliche Regeln.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bedeutet die 60-%-Regel genau?')),
      p(
        t('§ 9 EEG begrenzt bei bestimmten neuen Anlagen die '),
        bold('maximale Wirkleistungseinspeisung am Netzverknüpfungspunkt'),
        t(' auf 60 % der installierten Leistung. Entscheidend ist das Wort Einspeisung. Die PV-Anlage muss nicht grundsätzlich auf 60 % ihrer Erzeugungsleistung gedrosselt werden. Strom, der im Gebäude gleichzeitig verbraucht oder in einen Speicher geladen wird, muss gar nicht erst ins öffentliche Netz.'),
      ),
      p(
        t('Bei einer 10-kWp-PV-Anlage bedeutet die Regel vereinfacht: Es dürfen maximal '),
        bold('6 kW ins öffentliche Netz'),
        t(' fließen. Produziert die Anlage gerade 9 kW und das Haus verbraucht 1 kW, während der Speicher mit 2 kW lädt, bleiben 6 kW für das Netz. Die Grenze wird exakt eingehalten – obwohl die PV-Anlage mit 9 kW produziert.'),
      ),
      p(
        t('Ist der Speicher dagegen voll, das Haus verbraucht nur 0,5 kW und die Anlage erzeugt 9 kW, würden rechnerisch 8,5 kW ins Netz fließen. Dann muss die Einspeisung auf 6 kW begrenzt werden. Die verbleibende Leistung kann in diesem Moment nicht genutzt werden und wird abgeregelt.'),
      ),
    ),

    hinweisBlock(
      '60 % Einspeisegrenze heißt nicht 40 % Jahresertrag verlieren',
      p(
        t('Die Grenze greift nur in den Zeitfenstern, in denen die mögliche Netzeinspeisung tatsächlich über 60 % der installierten PV-Leistung steigt. Morgens, abends, bei Bewölkung, bei Ost-West-Dächern und immer dann, wenn Hausverbrauch, Wärmepumpe, Wallbox oder Speicher gleichzeitig Leistung aufnehmen, entsteht oft überhaupt keine Abregelung. Wie groß der reale Jahresverlust ist, hängt deshalb stark von Dachausrichtung, Anlagengröße, Verbrauchsprofil und Speicherstrategie ab.'),
      ),
    ),

    textBlock(
      h('h2', t('Für welche neuen PV-Anlagen gilt die 60-%-Begrenzung?')),
      p(
        t('Für den typischen privaten Bereich ist die Regel vor allem bei Anlagen relevant, die ab dem 25. Februar 2025 in Betrieb genommen wurden und der '),
        bold('Einspeisevergütung'),
        t(' oder dem '),
        bold('Mieterstromzuschlag'),
        t(' zugeordnet sind. Das Gesetz unterscheidet dabei nach Anlagengröße.'),
      ),
    ),

    tabelleBlock('60-%-Regel nach Anlagengröße – vereinfacht für 2026', [
      {
        spalte1: 'Unter 25 kW',
        spalte2: '60 % maximale Wirkleistungseinspeisung',
        spalte3: 'Bis iMSys + Steuerungseinrichtung eingebaut und die Ansteuerbarkeit erfolgreich getestet wurde',
      },
      {
        spalte1: '25 bis unter 100 kW',
        spalte2: '60 % bei Einspeisevergütung/Mieterstrom plus zusätzliche technische Fernsteuerbarkeit',
        spalte3: 'Ebenfalls Übergangsregel bis zur neuen Mess- und Steuertechnik samt erfolgreichem Test',
      },
      {
        spalte1: 'Ab 100 kW',
        spalte2: 'Andere technische und vermarktungsbezogene Pflichten',
        spalte3: 'Die 60-%-Regel ist hier nicht der zentrale Mechanismus; größere Anlagen separat planen',
      },
    ]),

    textBlock(
      h('h2', t('Wann endet die 60-%-Begrenzung?')),
      p(
        t('Ein häufiger Irrtum lautet: „Sobald das Smart Meter eingebaut ist, sind die 60 % weg." So einfach ist es nicht. § 9 EEG verknüpft das Ende der Übergangsregel mit '),
        bold('drei Schritten'),
        t(':'),
      ),
      ul(
        p(t('Ein intelligentes Messsystem (iMSys) ist eingebaut.')),
        p(t('Die erforderliche Steuerungseinrichtung ist eingebaut.')),
        p(t('Der Netzbetreiber hat die Anlage über diese Technik erstmals erfolgreich auf Ansteuerbarkeit getestet.')),
      ),
      p(
        t('Erst diese Kombination ist entscheidend. Ein digitaler Zähler allein reicht nicht. Auch ein Smart-Meter-Gateway ohne die notwendige Steuerungseinrichtung hebt die 60-%-Grenze nicht automatisch auf.'),
      ),
      p(
        t('Was ein intelligentes Messsystem technisch ist, welche Pflichteinbaufälle gelten und was der Messstellenbetrieb kostet, erklären wir ausführlich in '),
        link('Smart Meter 2026: Pflicht, Kosten und Nutzen bei PV', '/solaranlage/smart-meter-2026-pv-kosten-pflicht-vorteile'),
        t('.'),
      ),
    ),

    tippBlock(
      'Bei der Planung nicht nur nach „Smart-Meter-ready" fragen',
      p(
        t('Für eine neue PV-Anlage ist 2026 die wichtigere Frage: '),
        bold('Ist das Gesamtsystem für Messung, Steuerung und Energiemanagement vorbereitet?'),
        t(' Dazu gehören Zählerschrank, Wechselrichter, Kommunikationsschnittstellen, Speicher und HEMS. „Smart-Meter-ready" auf einem Datenblatt sagt noch nicht, ob die spätere Steuerung im konkreten Netzgebiet sauber umgesetzt werden kann.'),
      ),
    ),

    textBlock(
      h('h2', t('Was passiert bei negativen Strompreisen?')),
      p(
        t('Negative Börsenpreise entstehen, wenn im Strommarkt zeitweise mehr Strom angeboten als nachgefragt wird. Das passiert besonders häufig in Stunden mit hoher Wind- oder Solarproduktion und gleichzeitig niedriger Nachfrage. Ein negativer Börsenpreis bedeutet aber nicht, dass dein Haushaltsstrompreis automatisch negativ wird. Der Börsenpreis ist nur ein Bestandteil des Endkundenpreises.'),
      ),
      p(
        t('Für neue EEG-Anlagen wurde § 51 deutlich verschärft. Sobald die Vorschrift für die konkrete Anlage greift, '),
        bold('verringert sich der anzulegende Wert in negativen Marktzeitfenstern auf null'),
        t('. Vereinfacht: Für die betroffene Einspeisung gibt es in diesem Zeitraum keine EEG-Vergütung.'),
      ),
      p(
        t('Seit dem 1. Oktober 2025 wird der gekoppelte europäische Day-Ahead-Markt mit 15-Minuten-Produkten abgewickelt. Damit kann 2026 für die neue Regel bereits eine '),
        bold('einzelne negative Viertelstunde'),
        t(' relevant sein. Die früher oft genannte Logik „erst nach mehreren negativen Stunden" beschreibt die neue Rechtslage für Neuanlagen nicht mehr.'),
      ),
    ),

    hinweisBlock(
      '0 Cent Vergütung ist keine Strafzahlung',
      p(
        t('Wenn § 51 greift, wird der EEG-Zahlungsanspruch für das betreffende negative Zeitfenster auf null reduziert. Das bedeutet nicht automatisch, dass ein Betreiber für die Einspeisung eine „Strafe" an den Netzbetreiber zahlen muss. Wirtschaftlich ist trotzdem sinnvoll, den Strom in solchen Zeiten möglichst selbst zu nutzen, zu speichern oder flexible Verbraucher zu verschieben.'),
      ),
    ),

    textBlock(
      h('h2', t('Der wichtige Haken: Bei kleinen Neuanlagen greift § 51 nicht sofort')),
      p(
        t('Gerade für Einfamilienhäuser ist § 51 Absatz 2 entscheidend. Bei Anlagen mit weniger als 100 kW gilt die Nullvergütung bei negativen Preisen '),
        bold('nicht vor Ablauf des Kalenderjahres, in dem die Anlage mit einem intelligenten Messsystem ausgestattet wird'),
        t('.'),
      ),
      p(
        t('Beispiel: Eine 10-kWp-Anlage wird 2026 gebaut und erhält im Mai 2026 ein iMSys. Dann greift die neue §51-Logik für diese Anlage grundsätzlich erst '),
        bold('ab dem 1. Januar 2027'),
        t('. Wird das iMSys erst 2027 eingebaut, verschiebt sich der Beginn entsprechend.'),
      ),
      p(
        t('Das ist ein bemerkenswerter Zusammenhang: Das Smart Meter hilft technisch dabei, die starre 60-%-Begrenzung zu verlassen. Gleichzeitig schafft es die Voraussetzung dafür, dass negative Marktpreise später zeitgenau in der EEG-Abrechnung berücksichtigt werden können.'),
      ),
    ),

    tabelleBlock('60-%-Regel und negative Preise – warum das Smart Meter das Scharnier ist', [
      {
        spalte1: 'Vor iMSys + Steuerung + erfolgreichem Test',
        spalte2: 'Bei betroffenen Neuanlagen 60-%-Einspeisebegrenzung',
        spalte3: '§51 bei <100 kW noch nicht aktiv, solange das gesetzliche iMSys-Kriterium nicht erfüllt ist',
      },
      {
        spalte1: 'Nach erfolgreicher Ansteuerbarkeit',
        spalte2: 'Starre 60-%-Übergangsbegrenzung kann entfallen',
        spalte3: 'Netzbetreiber kann die Anlage über die vorgesehene Technik steuern',
      },
      {
        spalte1: 'Nach Ablauf des iMSys-Einbaujahres',
        spalte2: 'Keine starre 60-%-Logik mehr, sofern die technischen Voraussetzungen erfüllt sind',
        spalte3: 'Negative Börsenpreis-Zeitfenster können nach §51 zu 0-Cent-EEG-Zahlungsanspruch führen',
      },
    ]),

    textBlock(
      h('h2', t('Was passiert mit den nicht vergüteten Zeiten?')),
      p(
        t('Das EEG enthält mit § 51a einen Kompensationsmechanismus. Die Idee: Zeiträume, in denen wegen negativer Preise keine EEG-Zahlung erfolgt, sollen den Förderzeitraum am Ende verlängern. Für Solaranlagen ist das allerdings '),
        bold('keine einfache 1:1-Verlängerung'),
        t(' nach dem Motto „eine negative Stunde = eine Stunde länger Vergütung".'),
      ),
      p(
        t('Bei Solarstrom werden die betroffenen Viertelstunden zunächst mit einem Faktor von 0,5 in sogenannte Volllastviertelstunden umgerechnet. Anschließend wird daraus anhand gesetzlich festgelegter Monatswerte ein zusätzlicher Vergütungszeitraum am Ende der regulären Förderung berechnet.'),
      ),
      p(
        t('Der Mechanismus verhindert also, dass die ausgefallenen Zeitfenster völlig ignoriert werden. Wirtschaftlich ist eine spätere Verlängerung trotzdem nicht identisch mit Geld, das heute zufließt: Die Anlage ist dann älter, der Zeitpunkt liegt viele Jahre in der Zukunft und der heutige Barwert ist entsprechend geringer.'),
      ),
    ),

    textBlock(
      h('h2', t('Was gilt für Bestandsanlagen?')),
      p(
        t('Das Solarspitzengesetz hat keinen pauschalen Rückwärtsknopf. Für Bestandsanlagen gibt es Übergangs- und Bestandsschutzregeln. Deshalb ist es falsch, jedem Betreiber einer zehn Jahre alten PV-Anlage zu sagen, seine Einspeisevergütung falle 2026 bei jeder negativen Viertelstunde weg.'),
      ),
      p(
        t('Besonders relevant: Anlagen, die nach dem 31. Dezember 2022 und vor dem 25. Februar 2025 in Betrieb genommen wurden, bleiben hinsichtlich § 51 grundsätzlich in der alten Rechtslage. Diese alte Fassung nahm Anlagen mit weniger als 400 kW vom Negativpreis-Mechanismus aus. Für eine typische private Dachanlage aus 2023 oder 2024 ist die neue 0-Cent-Regel deshalb nicht automatisch anzuwenden.'),
      ),
      p(
        t('Auch die neue 60-%-Regel gilt nach der Übergangsvorschrift nicht für Anlagen, die nach dem 31. Dezember 2022 und vor dem 25. Februar 2025 in Betrieb genommen wurden. Ältere Anlagen können wiederum noch unter frühere technische Vorgaben fallen. Bei Bestandsanlagen muss deshalb immer das '),
        bold('Inbetriebnahmedatum zusammen mit der damals geltenden EEG-Fassung'),
        t(' betrachtet werden.'),
      ),
    ),

    tabelleBlock('Inbetriebnahmezeitpunkt – typische Einordnung für private PV', [
      {
        spalte1: 'Vor 1. Januar 2023',
        spalte2: 'Bestandsanlage mit älteren Übergangsregeln',
        spalte3: 'Neue 60-%-Regel und neue §51-Logik nicht pauschal übertragen',
      },
      {
        spalte1: '1. Januar 2023 bis 24. Februar 2025',
        spalte2: 'Bestandsschutz / alte §51-Fassung',
        spalte3: 'Keine neue 60-%-Regel; typische private Anlagen <400 kW sind von der alten Negativpreisregel ausgenommen',
      },
      {
        spalte1: 'Ab 25. Februar 2025',
        spalte2: 'Neue Solarspitzen-Regeln',
        spalte3: '60-%-Übergangsregel und neue §51-Systematik je nach Größe, Vermarktungsform und Messausstattung',
      },
    ]),

    hinweisBlock(
      'Die oft zitierte „2-Stunden-Regel 2026" ist für private Neuanlagen der falsche Maßstab',
      p(
        t('Die alte §51-Fassung sah für 2026 zwei aufeinanderfolgende negative Stunden vor. Sie gilt über Übergangsrecht weiter für bestimmte ältere Anlagen. Gleichzeitig waren Anlagen unter 400 kW in dieser Fassung ausgenommen. Für typische private Neuanlagen ab 25. Februar 2025 gilt dagegen die neue Systematik – sobald ihre Voraussetzungen erfüllt sind. Wer beide Fassungen vermischt, kommt fast zwangsläufig zu falschen Aussagen.'),
      ),
    ),

    textBlock(
      h('h2', t('Braucht man wegen des Solarspitzengesetzes zwingend einen Speicher?')),
      p(
        t('Nein. Ein Batteriespeicher ist durch das Solarspitzengesetz nicht vorgeschrieben. Trotzdem wird er technisch interessanter, weil er Leistung aufnehmen kann, die sonst in einem ungünstigen Moment ins Netz fließen würde.'),
      ),
      p(
        t('Bei der 60-%-Regel kann der Speicher PV-Überschuss aufnehmen, bevor die Einspeisegrenze erreicht wird. Bei negativen Preisen kann ein intelligentes System die Strategie später so ausrichten, dass möglichst wenig unvergüteter Solarstrom ins Netz geht.'),
      ),
      p(
        t('Das funktioniert aber nur, wenn der Speicher nicht schon morgens ohne Strategie vollgeladen wurde. Genau hier entscheidet die Steuerung. Ein Speicher allein ist noch kein intelligentes Energiesystem. Mehr zur wirtschaftlichen Seite findest du in '),
        link('Lohnt sich ein Stromspeicher 2026?', '/stromspeicher/lohnt-sich-ein-stromspeicher'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum HEMS und flexible Verbraucher wichtiger werden')),
      p(
        t('Die eigentliche Konsequenz des Solarspitzengesetzes lautet nicht „jede PV-Anlage braucht einen größeren Speicher". Sie lautet: '),
        bold('Energieflüsse werden zeitabhängiger'),
        t('.'),
      ),
      p(
        t('Ein HEMS kann PV-Erzeugung, Hausverbrauch, Speicher, Wallbox und Wärmepumpe koordinieren. Es kann zum Beispiel den Speicher nicht sofort am Morgen vollladen, sondern Kapazität für die Mittagsproduktion freihalten. Oder das Fahrzeug dann laden, wenn viel eigener Solarstrom vorhanden ist.'),
      ),
      p(
        t('Mit einem dynamischen Stromtarif kommt eine zweite Zeitachse hinzu: Dann geht es nicht nur darum, wann die PV-Anlage produziert, sondern auch darum, wann Netzstrom günstig oder teuer ist. Genau deshalb betrachten wir bei PEAK Tarif und Technik nicht getrennt. Einen Überblick dazu gibt es unter '),
        link('Dynamischer oder fester Stromtarif?', '/stromtarife'),
        t('.'),
      ),
      p(
        t('Wichtig bleibt: Ein HEMS kann die Anlage wirtschaftlich optimieren, aber es hebt eine gesetzliche 60-%-Begrenzung nicht eigenmächtig auf. Die rechtliche und technische Freigabe hängt von iMSys, Steuerungseinrichtung und der erfolgreichen Ansteuerbarkeit durch den Netzbetreiber ab.'),
      ),
    ),

    tippBlock(
      '2026 nicht auf maximale Einspeisung, sondern auf das Gesamtsystem planen',
      p(
        t('Eine PV-Anlage nur nach „möglichst viele kWp aufs Dach und Rest einspeisen" zu dimensionieren, greift immer kürzer. Sinnvoller ist eine Planung nach Lastprofil: Hausverbrauch, Wärmepumpe, E-Auto, Speicher, Dachausrichtung und mögliche Lastverschiebung zusammen betrachten. Dann wird die 60-%-Grenze nicht zum Schreckgespenst, sondern zu einer technischen Randbedingung, die in der Planung berücksichtigt wird.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie groß ist der wirtschaftliche Schaden durch die 60-%-Regel?')),
      p(
        t('Eine pauschale Prozentzahl ist unseriös. Wer aus „60 % Einspeiseleistung" automatisch „40 % weniger Ertrag" macht, verwechselt Leistung mit Energie. Entscheidend ist, wie viele Kilowattstunden über das Jahr tatsächlich oberhalb der Einspeisegrenze liegen und nicht anderweitig genutzt werden können.'),
      ),
      p(
        t('Eine steile Südanlage ohne Speicher und mit niedrigem Tagesverbrauch trifft die Grenze häufiger als eine Ost-West-Anlage mit breiter Erzeugungskurve. Ein Haushalt mit Wärmepumpe, E-Auto und intelligent gesteuertem Speicher kann wiederum deutlich mehr Leistung intern aufnehmen.'),
      ),
      p(
        t('Deshalb sollte eine seriöse Wirtschaftlichkeitsrechnung die Abregelung '),
        bold('simulieren'),
        t(' statt pauschal zu schätzen. Gleiches gilt für negative Preise: Relevant ist nicht die Anzahl negativer Marktviertelstunden allein, sondern wie viel die konkrete Anlage in diesen Zeitfenstern einspeist und ob Strom stattdessen sinnvoll genutzt werden kann.'),
      ),
    ),

    textBlock(
      h('h2', t('Was eine neue PV-Anlage 2026 technisch mitbringen sollte')),
      p(
        t('Das Solarspitzengesetz macht keine bestimmte Marke und kein bestimmtes Ökosystem verpflichtend. Genau deshalb lohnt sich ein offenes System. Bei einer heutigen Planung achten wir insbesondere auf:'),
      ),
      ul(
        p(t('einen Zählerschrank, der für iMSys und notwendige Steuertechnik geeignet ist,')),
        p(t('einen Wechselrichter mit sauber dokumentierten Schnittstellen und Leistungsregelung,')),
        p(t('einen Speicher, der nicht nur PV-Überschuss speichern, sondern sinnvoll gesteuert werden kann,')),
        p(t('Wallbox und Wärmepumpe, die in ein Energiemanagement integrierbar sind,')),
        p(t('ein HEMS/EMS, das lokale Energieflüsse auch ohne unnötigen Plattform-Lock-in koordinieren kann,')),
        p(t('eine Anlagenplanung, die die 60-%-Einspeisegrenze und spätere Marktpreissignale bereits in der Simulation berücksichtigt.')),
      ),
      p(
        t('Wie wir lokales Energiemanagement und offene Schnittstellen einordnen, haben wir zusätzlich im Beitrag '),
        link('Lokales Energiemanagement: Warum dein Speicher dir gehören sollte', '/blog/lokales-energiemanagement-ems-evcc-flex-erloese'),
        t(' beschrieben.'),
      ),
    ),

    textBlock(
      h('h2', t('Fünf typische Denkfehler zum Solarspitzengesetz')),
      p(
        bold('„Meine neue 10-kWp-Anlage darf nur noch 6 kW produzieren." '),
        t('Falsch. Begrenzt wird die maximale Einspeisung am Netzverknüpfungspunkt. Eigenverbrauch und Speicherladung können darüber hinausgehen.'),
      ),
      p(
        bold('„Mit Speicher gilt die 60-%-Regel nicht." '),
        t('Falsch. Ein Speicher kann Abregelung vermeiden, hebt die gesetzliche Grenze aber nicht auf.'),
      ),
      p(
        bold('„Sobald ein Smart Meter eingebaut ist, sind die 60 % weg." '),
        t('Unvollständig. Zusätzlich braucht es die Steuerungseinrichtung und die erfolgreiche Ansteuerbarkeit durch den Netzbetreiber.'),
      ),
      p(
        bold('„Bei negativem Börsenpreis muss ich fürs Einspeisen bezahlen." '),
        t('So lässt sich die EEG-Regel nicht beschreiben. Der gesetzliche Zahlungsanspruch kann auf null sinken; das ist nicht automatisch eine Strafzahlung an den Netzbetreiber.'),
      ),
      p(
        bold('„Das gilt jetzt für jede alte PV-Anlage." '),
        t('Falsch. Inbetriebnahmedatum und Übergangsrecht sind entscheidend. Typische private Bestandsanlagen fallen nicht automatisch unter die neue Neuanlagen-Systematik.'),
      ),
    ),

    textBlock(
      h('h2', t('Was wir bei einer PV-Planung 2026 konkret prüfen würden')),
      p(
        t('Bei einem neuen Einfamilienhaus-Projekt würden wir das Solarspitzengesetz nicht als isolierte Rechtsfrage behandeln, sondern in die technische Auslegung einbauen:'),
      ),
      ul(
        p(t('Wie groß ist die PV-Anlage und welche Einspeisegrenze ist bis zur vollständigen Steuerbarkeit zu berücksichtigen?')),
        p(t('Wie sieht das reale Lastprofil tagsüber aus?')),
        p(t('Welche PV-Spitzen kann der Speicher sinnvoll aufnehmen, ohne unnötig groß zu werden?')),
        p(t('Kann die Wallbox PV-Überschussladen und ein- bzw. dreiphasig sinnvoll regeln?')),
        p(t('Lässt sich die Wärmepumpe zeitlich moderat verschieben, ohne Komfortverlust?')),
        p(t('Ist der Zählerschrank für Smart Meter und Steuertechnik vorbereitet?')),
        p(t('Bleibt das System offen für zukünftige Tarif- und HEMS-Modelle?')),
      ),
      p(
        t('Erst wenn diese Fragen beantwortet sind, lässt sich seriös beurteilen, ob das Solarspitzengesetz bei einem konkreten Haus überhaupt einen messbaren wirtschaftlichen Nachteil erzeugt – oder ob ein großer Teil der vermeintlichen „Abregelung" durch vernünftige Planung ohnehin vermieden wird.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Das Solarspitzengesetz verändert die Logik neuer PV-Anlagen, aber es macht Photovoltaik nicht plötzlich unwirtschaftlich. Die 60-%-Regel ist eine '),
        bold('Einspeisebegrenzung'),
        t(', keine pauschale Ertragskürzung. Negative Börsenpreise können den EEG-Zahlungsanspruch zeitweise auf null reduzieren, bei privaten Neuanlagen unter 100 kW aber grundsätzlich erst nach Ablauf des Jahres, in dem ein iMSys eingebaut wurde.'),
      ),
      p(
        t('Der entscheidende Punkt ist das Zusammenspiel: Smart Meter und Steuerung lösen die starre Übergangsbegrenzung ab, gleichzeitig wird die Anlage stärker in das tatsächliche Markt- und Netzgeschehen eingebunden. Speicher, Wallbox, Wärmepumpe und HEMS können dann helfen, Strom genau dort zu verwenden, wo er den größten Wert hat – im eigenen Haus.'),
      ),
      p(
        t('Für die Planung 2026 bedeutet das: Nicht vor der 60-%-Zahl erschrecken. '),
        bold('Lastprofil, Steuerbarkeit und Eigenverbrauch sauber planen'),
        t('. Eine Anlage, die als Energiesystem gedacht wird, ist für diese Regeln deutlich besser aufgestellt als eine Anlage, die nur möglichst viele Kilowattstunden ins Netz drücken soll.'),
      ),
      p(
        t('Die jeweils aktuelle Höhe der Einspeisevergütung behandeln wir separat in '),
        link('Einspeisevergütung Photovoltaik 2026', '/solaranlage/einspeiseverguetung-photovoltaik-2026'),
        t('.'),
      ),
    ),

    ctaBlock({
      titel: 'PV-Anlage 2026 richtig auslegen lassen',
      text:
        'Du planst eine neue Solaranlage und willst wissen, wie 60-%-Regel, Smart Meter, Speicher und Energiemanagement bei deinem Haus zusammenspielen? Wir planen am Niederrhein und im Ruhrgebiet nicht nur die kWp auf dem Dach, sondern das komplette Energiesystem – mit realem Lastprofil, sauberer Dachplanung und offenen Schnittstellen.',
      buttonText: 'Projekt besprechen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist das Solarspitzengesetz?',
      'Als Solarspitzengesetz wird das Gesetz zur Änderung des Energiewirtschaftsrechts zur Vermeidung von temporären Erzeugungsüberschüssen bezeichnet. Die für private PV-Anlagen besonders relevanten Änderungen sind seit 25. Februar 2025 in Kraft. Dazu gehören unter anderem die 60-%-Einspeisebegrenzung für bestimmte Neuanlagen, neue Regeln bei negativen Börsenpreisen sowie ein stärkerer Smart-Meter- und Steuerungsrollout.',
    ),
    faqItem(
      'Gilt die 60-%-Regel 2026 für jede PV-Anlage?',
      'Nein. Sie betrifft insbesondere neue Anlagen ab 25. Februar 2025, die der Einspeisevergütung oder dem Mieterstromzuschlag zugeordnet sind. Für typische private Anlagen unter 25 kW wird die maximale Wirkleistungseinspeisung am Netzverknüpfungspunkt auf 60 % begrenzt, bis iMSys, Steuerungseinrichtung und die erfolgreiche Ansteuerbarkeit durch den Netzbetreiber vorhanden sind. Für ältere Anlagen gelten Übergangsregeln.',
    ),
    faqItem(
      'Bedeutet 60 % Einspeisebegrenzung, dass meine PV-Anlage nur noch 60 % erzeugen darf?',
      'Nein. Die Grenze betrifft die Einspeisung ins öffentliche Netz, nicht die gesamte Erzeugung. Produziert eine 10-kWp-Anlage beispielsweise 9 kW, während Haus und Speicher zusammen 3 kW aufnehmen, fließen nur 6 kW ins Netz – die 60-%-Grenze wird eingehalten, obwohl die Anlage mit 90 % ihrer Nennleistung produziert.',
    ),
    faqItem(
      'Verliere ich durch die 60-%-Regel 40 % meines Jahresertrags?',
      'Nein. 60 % ist eine Leistungsgrenze am Netzverknüpfungspunkt, keine pauschale Kürzung der Jahresenergie. Abgeregelt wird nur dann, wenn die mögliche Netzeinspeisung in einem konkreten Moment oberhalb der Grenze liegt und der Strom weder im Haus verbraucht noch gespeichert werden kann. Der reale Verlust hängt stark von Dachausrichtung, Verbrauch und Speicherstrategie ab.',
    ),
    faqItem(
      'Wann fällt die 60-%-Begrenzung weg?',
      'Nach § 9 EEG endet die Übergangsregel nicht allein durch den Einbau eines digitalen Zählers. Erforderlich sind ein intelligentes Messsystem, die vorgesehene Steuerungseinrichtung und die erstmalige erfolgreiche Testung der Ansteuerbarkeit durch den Netzbetreiber über diese neue Technik.',
    ),
    faqItem(
      'Bekomme ich bei negativen Strompreisen 2026 keine Einspeisevergütung?',
      'Bei Neuanlagen nach der neuen §51-Systematik kann der EEG-Zahlungsanspruch in negativen Marktzeitfenstern auf null sinken. Bei Anlagen unter 100 kW greift das aber grundsätzlich nicht vor Ablauf des Kalenderjahres, in dem ein intelligentes Messsystem eingebaut wurde. Für ältere Anlagen gelten andere Übergangsregeln.',
    ),
    faqItem(
      'Reicht 2026 eine negative Viertelstunde für 0 Cent EEG-Vergütung?',
      'Für Neuanlagen, auf die die neue §51-Regel bereits anwendbar ist, kann eine einzelne negative Viertelstunde relevant sein. Der gekoppelte europäische Day-Ahead-Markt arbeitet seit dem 1. Oktober 2025 mit 15-Minuten-Produkten. Die früher oft genannten Schwellen von mehreren negativen Stunden gehören zur alten §51-Systematik.',
    ),
    faqItem(
      'Muss ich bei negativem Börsenpreis Geld für meine Einspeisung bezahlen?',
      'Die EEG-Regel nach § 51 bedeutet zunächst, dass der anzulegende Wert im betroffenen Zeitraum auf null sinkt. Das ist nicht dasselbe wie eine pauschale Strafzahlung des Anlagenbetreibers an den Netzbetreiber. Bei anderen Vermarktungsformen können Marktpreise und Vertragsbedingungen zusätzlich eine Rolle spielen.',
    ),
    faqItem(
      'Werden negative Preiszeiten später ausgeglichen?',
      '§ 51a EEG verlängert den Förderzeitraum. Bei Solaranlagen werden die betroffenen Viertelstunden mit dem Faktor 0,5 in Volllastviertelstunden umgerechnet und nach gesetzlich festgelegten Monatswerten in einen zusätzlichen Vergütungszeitraum am Ende der Förderung übersetzt. Das ist keine einfache 1:1-Verlängerung jeder ausgefallenen Viertelstunde.',
    ),
    faqItem(
      'Brauche ich wegen des Solarspitzengesetzes einen Stromspeicher?',
      'Nein, ein Speicher ist nicht vorgeschrieben. Er kann aber helfen, PV-Leistung aufzunehmen, die sonst oberhalb der 60-%-Einspeisegrenze liegen würde, und später die Eigenverbrauchsstrategie bei negativen Preisen zu verbessern. Ob sich ein Speicher wirtschaftlich lohnt, muss trotzdem separat gerechnet werden.',
    ),
    faqItem(
      'Kann ein HEMS die 60-%-Grenze aufheben?',
      'Nein. Ein HEMS kann Hausverbrauch, Speicher, Wallbox und Wärmepumpe intelligent koordinieren und dadurch Abregelung vermeiden. Die gesetzliche Übergangsbegrenzung darf es aber nicht eigenmächtig deaktivieren. Dafür sind iMSys, Steuerungseinrichtung und die erfolgreiche Ansteuerbarkeit durch den Netzbetreiber maßgeblich.',
    ),
    faqItem(
      'Gilt das Solarspitzengesetz auch für meine PV-Anlage von 2023 oder 2024?',
      'Nicht in derselben Form wie für Neuanlagen ab 25. Februar 2025. Anlagen, die zwischen 1. Januar 2023 und 24. Februar 2025 in Betrieb genommen wurden, fallen über § 100 EEG grundsätzlich unter die frühere §51-Fassung und sind von der neuen 60-%-Regel ausgenommen. In der alten §51-Fassung waren Anlagen unter 400 kW vom Negativpreis-Mechanismus ausgenommen – damit typische private Dachanlagen.',
    ),
  ],
}

await upsertRatgeberArticle(article)
