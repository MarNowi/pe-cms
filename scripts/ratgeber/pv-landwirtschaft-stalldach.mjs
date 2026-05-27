// scripts/articles/pv-landwirtschaft-stalldach.mjs

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
  titel: 'PV in der Landwirtschaft: Was bei Stalldach, Asbest und Lastprofil wirklich anders ist',
  slug: 'pv-landwirtschaft-stalldach',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'Eine Solaranlage auf dem Stalldach ist nicht dasselbe wie auf einer Werkstatt. Asbestzement-Wellplatten auf älteren Ställen verbieten die direkte Belegung, das Lastprofil eines Milchviehbetriebs sieht völlig anders aus als das eines Ackerbaubetriebs, und die Umsatzsteuer-Pauschalierung wird in vielen Angeboten schlicht übersehen. Worauf es bei PV auf landwirtschaftlichen Gebäuden wirklich ankommt – ehrlich eingeordnet.',
  lesezeit: 13,

  seo: seo(
    'PV in der Landwirtschaft: Stalldach, Asbest und Lastprofil | PEAK.Energy',
    'Solaranlage auf Stalldach, Hofgebäude und landwirtschaftlichen Hallen – mit ehrlicher Einordnung zu Asbestsanierung, Lastprofilen verschiedener Betriebsarten, USt-Pauschalierung, Förderprogrammen und Modulwahl für Stallumgebung.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Auf '),
      bold('Asbestzement-Dächern'),
      t(' darf nicht gebaut werden. Sobald in die Substanz eingegriffen wird, greift die Sanierungspflicht nach Gefahrstoffverordnung – aber genau das ist oft die wirtschaftlich tragfähigste Variante: Sanierung und PV in einem Zug, häufig mit kombinierter Förderung.'),
    ),
    summaryPoint(
      t('Lastprofile in der Landwirtschaft sind '),
      bold('extrem unterschiedlich'),
      t(' – Milchviehbetriebe mit 24/7-Stallklima eignen sich exzellent für PV ohne Speicher (Eigenverbrauchsquoten bis 80 %), reine Ackerbaubetriebe mit saisonalem Bedarf brauchen andere Konzepte.'),
    ),
    summaryPoint(
      t('Die '),
      bold('Umsatzsteuer-Pauschalierung nach § 24 UStG'),
      t(' wird in vielen PV-Angeboten an Landwirte schlicht ignoriert. Wer pauschaliert, kann die Vorsteuer auf die PV-Anlage nicht ohne weiteres abziehen – das gehört vor der Investition geklärt.'),
    ),
    summaryPoint(
      t('Stallumgebung ist '),
      bold('aggressiv für Standardmodule'),
      t('. Ammoniak aus Tierhaltung greift Modulrahmen und Glas an. Für Geflügel- und Schweineställe gehören Module mit Anti-Ammoniak-Zertifizierung (IEC TS 62804-2) verbaut.'),
    ),
    summaryPoint(
      t('Nebeneffekt für Tierwohl: Ein mit PV belegtes Dach senkt die sommerliche Stalltemperatur messbar um 2 bis 5 °C – ein konkreter, dokumentierter Vorteil bei Schweine- und Geflügelhaltung.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('Landwirtschaftliche Betriebe haben oft zwei Dinge, die Gewerbebetriebe selten haben: '),
        bold('viel ungenutzte Dachfläche'),
        t(' und '),
        bold('hohe Strompreise relativ zum Tagesbedarf'),
        t('. Ein Milchviehbetrieb mit 80 Kühen verbraucht 60.000 bis 90.000 kWh im Jahr nur für Melken, Kühlung und Stallklima – und das großteils tagsüber. Theoretisch ein Idealfall für PV.'),
      ),
      p(
        t('Praktisch hängt der Erfolg an Punkten, die in vielen Angeboten an Landwirte zu kurz kommen. Wir gehen sie der Reihe nach durch: Welche Dachtypen sind typisch, was machst du mit Asbest, wie unterscheiden sich die Lastprofile, was ist mit der Pauschalierung, welche Module gehören in einen Stall, und wann lohnt sich das Ganze wirklich?'),
      ),
      p(
        t('Für den allgemeinen Gewerbe-Kontext lohnt sich vorab der Blick in unseren Artikel '),
        link('Solaranlage auf dem Gewerbedach', '/solaranlage/solaranlage-gewerbedach'),
        t(' – die landwirtschaftlichen Besonderheiten setzen darauf auf.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Dachtypen typisch sind')),
      p(
        t('Auf landwirtschaftlichen Gebäuden im Niederrhein und Ruhrgebiet trifft man typischerweise auf:'),
      ),
      p(
        bold('Trapezblech. '),
        t('Moderner Standard bei Neubauten und Hallensanierungen ab den 90ern. Statisch meist unproblematisch, Befestigung gut dokumentiert. Der Wunschfall.'),
      ),
      p(
        bold('Asbestzement-Wellplatten („Eternit"). '),
        t('Sehr verbreitet auf Ställen, Maschinenhallen und Scheunen aus den 60ern bis frühen 80ern. Darf nicht belegt werden. Eigener Abschnitt unten.'),
      ),
      p(
        bold('Faserzement (asbestfrei). '),
        t('Seit den späten 80ern als Asbest-Ersatz verbaut. Optisch oft nicht von Asbest zu unterscheiden – eine sichere Bestimmung braucht eine Probe und Laborprüfung. Erst mit Bestätigung kann auf Belegung geplant werden.'),
      ),
      p(
        bold('Sandwichpaneele. '),
        t('Bei moderneren Stallneubauten verbreitet. Funktioniert grundsätzlich gut, aber die Befestigung darf den Dämmkern nicht beschädigen.'),
      ),
      p(
        bold('Holzkonstruktionen mit Dachpfannen. '),
        t('Bei älteren Scheunen, Reithallen oder Wohnhaus-nahen Gebäuden. Statik muss individuell geprüft werden – Holzbinder mit unklarer Geschichte sind ein häufiger Stolperstein.'),
      ),
    ),

    textBlock(
      h('h2', t('Asbest – die wichtigste Frage zuerst')),
      p(
        t('Bei jedem PV-Projekt auf einem älteren landwirtschaftlichen Gebäude steht eine Frage am Anfang: Enthält das Dach Asbest?'),
      ),
      p(
        t('Asbestzement-Wellplatten waren von etwa 1960 bis 1993 in Deutschland Standard. Sie sind grau, oft mit charakteristischer Wellenform, und optisch von späteren asbestfreien Faserzement-Platten kaum zu unterscheiden. Eine sichere Bestimmung erfolgt über eine '),
        bold('Materialprobe mit Laboranalyse'),
        t(' (Kosten typisch unter 100 €).'),
      ),
      p(
        t('Steht das Dach unter Asbest-Verdacht, gilt: Belegung verboten. Jede Bohrung, jeder Eingriff in die Substanz löst die '),
        bold('Sanierungspflicht nach Gefahrstoffverordnung'),
        t(' aus. Die Sanierung muss durch einen nach TRGS 519 qualifizierten Fachbetrieb erfolgen.'),
      ),
      p(
        t('In der Praxis bedeutet das fast immer: '),
        bold('Sanierung und PV werden in einem Projekt verbunden'),
        t('. Die Reihenfolge ist klar: Asbest-Fachbetrieb baut das alte Dach kontrolliert ab, neue Dacheindeckung (meist Trapezblech oder Sandwichpaneele) wird montiert, anschließend kommt die PV-Anlage drauf. Die Gesamtinvestition steigt zunächst – aber durch kombinierte Förderprogramme und die hohe Eigenverbrauchsquote eines landwirtschaftlichen Betriebs ist die Rechnung oft trotzdem tragfähig.'),
      ),
      p(
        t('Wichtig: Diese Reihenfolge muss '),
        bold('vor Projektbeginn'),
        t(' sauber dokumentiert werden – für die Förderprüfung, die Vorsteuer-Geltendmachung, die Versicherung und für den Fall einer späteren Betriebsprüfung.'),
      ),
    ),

    hinweisBlock(
      'Asbest: Bestimmung über Probe, nie über Bauchgefühl',
      p(
        t('Asbestzement und asbestfreier Faserzement sehen praktisch identisch aus. Wer auf Basis von „sieht aus wie Asbest, ist aber wahrscheinlich keiner" plant und bohrt, riskiert eine Straftat nach Gefahrstoffverordnung – und im Brand- oder Schadensfall den Versicherungsschutz. '),
        bold('Materialprobe mit Laboranalyse kostet unter 100 € und schafft Rechtssicherheit'),
        t('. Das Ergebnis braucht jedes seriöse Angebot, bevor überhaupt eine Anlage geplant wird.'),
      ),
    ),

    textBlock(
      h('h2', t('Statik, Stallklima und Modulwahl')),
      p(
        bold('Statik. '),
        t('Landwirtschaftliche Hallen aus den 70ern und 80ern haben oft Holzbinder mit Spannweiten von 12 bis 24 Metern. Die ursprüngliche Statik berücksichtigte Schnee- und Windlasten, aber selten zusätzliche 12 bis 25 kg/m² PV. Vor jeder Belegung gehört eine Statikprüfung durch einen Tragwerksplaner – bei Holzkonstruktionen besonders, weil Alterung und vergangene Umbauten oft nicht dokumentiert sind. Für den Niederrhein gilt Schneelastzone 1a bis 2 (relativ gering), aber der Punkt ist die individuelle Tragreserve, nicht der Mittelwert.'),
      ),
      p(
        bold('Stallklima. '),
        t('In Schweine-, Geflügel- und teilweise auch Rinderställen entstehen Ammoniak und Schwefelwasserstoff – Stoffe, die normale Modulrahmen, Anschlusskästen und Befestigungselemente schneller angreifen. Bei direkter Belegung eines Stalls mit Tierhaltung sind Module mit '),
        bold('Anti-Ammoniak-Zertifizierung nach IEC TS 62804-2'),
        t(' praktisch Pflicht. Sie sind etwas teurer, halten aber unter den realen Bedingungen.'),
      ),
      p(
        bold('Brandschutz. '),
        t('Bei Tierhaltung gelten oft strengere Brandschutzauflagen. DC-Notabschaltung (Feuerwehrschalter) gehört in nahezu jedes Projekt, bei größeren Anlagen können Brandabschnitte zwischen Modulfeldern verlangt werden. Tierwohl-Aspekt: Im Brandfall müssen Tiere evakuiert werden können – die PV-Anlage darf das nicht erschweren.'),
      ),
    ),

    textBlock(
      h('h2', t('Lastprofile – wo PV in der Landwirtschaft am besten passt')),
      p(
        t('Die Wirtschaftlichkeit einer PV-Anlage steht und fällt mit der Eigenverbrauchsquote, und die hängt am Lastprofil des Betriebs. In der Landwirtschaft sind die Profile so unterschiedlich, dass eine pauschale „PV lohnt sich"-Aussage selten trifft.'),
      ),
    ),

    tabelleBlock('Lastprofile und PV-Eignung nach Betriebsart', [
      {
        spalte1: 'Milchviehbetrieb',
        spalte2: 'Tagschwerpunkt mit konstanter Grundlast (Melken, Kühlung, Stallklima 24/7)',
        spalte3: 'Sehr gute Eignung. Eigenverbrauchsquote 70 bis 80 % auch ohne Speicher.',
      },
      {
        spalte1: 'Schweinemast/-zucht',
        spalte2: 'Hohe konstante Grundlast aus Lüftung, Heizung, Fütterung',
        spalte3: 'Sehr gute Eignung. Eigenverbrauchsquote 75 bis 85 %. Anti-Ammoniak-Module wichtig.',
      },
      {
        spalte1: 'Geflügelhaltung',
        spalte2: 'Klimatisierung und Beleuchtung mit Tag-Nacht-Zyklen',
        spalte3: 'Gute Eignung. Lastprofil tagsüber höher. Anti-Ammoniak-Module zwingend.',
      },
      {
        spalte1: 'Ackerbau (ohne Tierhaltung)',
        spalte2: 'Saisonale Spitzen (Ernte, Trocknung), niedrige Grundlast',
        spalte3: 'Mittlere Eignung. Ohne Speicher Eigenverbrauchsquote oft nur 30 bis 45 %.',
      },
      {
        spalte1: 'Gartenbau/Gewächshäuser',
        spalte2: 'Hohe Tageslast aus Belichtung, Klima, Heizung',
        spalte3: 'Sehr gute Eignung. Eigenverbrauchsquote 70 bis 85 %, kombinierbar mit Wärmepumpe.',
      },
      {
        spalte1: 'Biogasbetrieb',
        spalte2: 'Eigenproduktion, oft Volleinspeiser',
        spalte3: 'Geringe PV-Eignung, weil Eigenverbrauchsoptimierung weitgehend wegfällt.',
      },
    ]),

    textBlock(
      h('h2', t('Sektorkopplung und Speicher in der Landwirtschaft')),
      p(
        t('Bei landwirtschaftlichen Betrieben mit ausgeprägter Tagschwerpunkt-Last (Milchvieh, Schweinemast, Gartenbau) ist die Eigenverbrauchsquote ohne Speicher bereits hoch. Speicher rechnet sich dort meist nicht als reine Eigenverbrauchsoptimierung, sondern erst im Multi-Use-Kontext (siehe '),
        link('Lastspitzenkappung mit Stromspeicher', '/stromspeicher/lastspitzenkappung-stromspeicher-gewerbe'),
        t(').'),
      ),
      p(
        t('Anders bei Ackerbau-Betrieben mit saisonalen Spitzen: Hier kann ein Speicher den Überschuss aus Frühling und Sommer für die Erntephase puffern – das wird aber selten wirtschaftlich, weil die Speichergröße enorm wäre. In der Praxis ist die ehrlichere Antwort: Anlage nach Verbrauch dimensionieren, nicht maximal aufs Dach packen.'),
      ),
      p(
        t('Naheliegende Sektorkopplungen für die nächsten Jahre: '),
      ),
      ul(
        p(t('Wärmepumpe für Wohnhaus oder Stallheizung (Schweinezucht, Geflügelaufzucht)')),
        p(t('Elektrische Hoflader und perspektivisch elektrische Trecker')),
        p(t('Frequenzumrichter-Optimierung in Lüftung und Pumpen (oft mehr Sparpotenzial als die Anlage selbst)')),
        p(t('Direktvermarktungs-Kühlung (Hofläden, Käserei)')),
      ),
      p(
        t('Wer eine PV-Anlage baut, sollte diese Erweiterungen schon mitdenken – die Anlagengröße und das Energiemanagement-System lassen sich dann passend dimensionieren.'),
      ),
    ),

    textBlock(
      h('h2', t('Förderlandschaft – komplexer als im KMU')),
      p(
        t('Für landwirtschaftliche PV-Projekte gibt es mehrere Förderwege, die kombinierbar sind – aber jährlich variieren und antragsgebunden sind. Eine pauschale Empfehlung ist nicht möglich, der aktuelle Stand muss vor jedem Projekt geprüft werden.'),
      ),
      p(
        bold('Asbestsanierung. '),
        t('Land NRW und kommunale Programme fördern in wechselnden Konstellationen die Sanierung asbesthaltiger Dächer – teils nur in Kombination mit PV-Belegung. Die Programme laufen oft mit Stichtagen und Budget-Obergrenzen.'),
      ),
      p(
        bold('Agrarinvestitionsförderungsprogramm (AFP). '),
        t('Im Rahmen der GAP-Förderung können Investitionen in „umwelt- und tiergerechte Haltung" gefördert werden, darunter auch Energieeffizienzmaßnahmen und teils PV als Bestandteil eines Modernisierungspakets. Antragstellung über die Landwirtschaftskammer NRW.'),
      ),
      p(
        bold('GAK (Gemeinschaftsaufgabe Agrarstruktur). '),
        t('Bundesländer-Förderung für ländliche Entwicklung, kann punktuell PV-Investitionen mit abdecken.'),
      ),
      p(
        bold('KfW-Programme. '),
        t('KfW 270 (Erneuerbare Energien – Standard) für PV und Speicher mit zinsverbilligten Darlehen – funktioniert für Landwirte wie für andere Gewerbetreibende.'),
      ),
      p(
        t('Die '),
        bold('Landwirtschaftskammer NRW'),
        t(' ist erste Anlaufstelle für aktuelle Programmstände. Ein guter Antrag braucht Vorlauf von 3 bis 6 Monaten – das gehört in die Projektplanung eingerechnet.'),
      ),
    ),

    tippBlock(
      'Reihenfolge bei Asbest-PV-Projekten',
      p(
        t('Erstens: Asbestprobe ins Labor (unter 100 €). Zweitens: Wenn positiv, Förderprogramm-Stand bei der Landwirtschaftskammer und beim Land NRW prüfen – Programme haben Stichtage. Drittens: Sanierungsbetrieb nach TRGS 519 und PV-Installateur als koordiniertes Projekt anfragen, nicht getrennt. Viertens: Steuerberater wegen Pauschalierung und IAB-Fähigkeit einbinden – '),
        bold('vor'),
        t(' Vertragsabschluss. Diese Reihenfolge spart oft 5- bis 6-stellige Beträge an Förderung oder Steuerlast, die bei umgekehrter Reihenfolge schlicht verloren gehen.'),
      ),
    ),

    textBlock(
      h('h2', t('Steuer: Die Pauschalierungsfalle')),
      p(
        t('Landwirtschaftliche Betriebe können nach '),
        bold('§ 24 UStG'),
        t(' umsatzsteuerlich pauschalieren – sie schulden 10,7 % USt auf Verkäufe und können im Gegenzug die Vorsteuer pauschal verrechnen, ohne sie einzeln nachzuweisen. Für viele kleinere Betriebe ist das eine deutliche administrative Entlastung.'),
      ),
      p(
        t('Eine PV-Anlage gilt aber steuerlich '),
        bold('nicht als landwirtschaftlich, sondern als gewerblich'),
        t('. Wer pauschaliert und einfach eine PV-Anlage „dazubaut", kann die Vorsteuer auf die Anlage (in unserem Beispiel 28.500 € bei 150.000 € Netto-Investition) nicht ohne weiteres geltend machen.'),
      ),
      p(
        t('Drei Optionen, vereinfacht:'),
      ),
      ul(
        p(t('Komplett zur Regelbesteuerung wechseln (mindestens 5 Jahre Bindung) – Vorsteuer voll abzugsfähig, aber gesamter landwirtschaftlicher Bereich wird USt-pflichtig')),
        p(t('PV-Anlage als gesonderten gewerblichen Teilbetrieb führen – Vorsteuer abzugsfähig, restlicher Hof bleibt pauschal')),
        p(t('Pauschalierung beibehalten, Vorsteuer nicht ziehen – PV-Anlage wird brutto teurer')),
      ),
      p(
        t('Welche Option wirtschaftlich besser ist, hängt vom konkreten Betrieb ab. In den meisten Fällen lohnt sich Option zwei – aber das muss der Steuerberater einzeln prüfen, idealerweise '),
        bold('vor'),
        t(' der Investitionsentscheidung. Wer das im Nachhinein zu reparieren versucht, hat oft Optionsfristen verpasst.'),
      ),
    ),

    hinweisBlock(
      'Pauschalierung gehört vor den Anlagenbau geklärt',
      p(
        t('Wir sehen das immer wieder: Ein Landwirt unterschreibt einen PV-Vertrag, der Vorsteuerabzug wird in der Beispielrechnung selbstverständlich eingerechnet, und erst beim Steuerberater fällt auf, dass der Betrieb pauschaliert. Dann ist die Anlage faktisch 19 % teurer als kalkuliert. '),
        bold('Ein seriöses PV-Angebot an einen Landwirt fragt nach der USt-Behandlung – bevor es Zahlen liefert'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Tierwohl als Nebeneffekt')),
      p(
        t('Was in vielen Diskussionen unter den Tisch fällt: Ein mit PV belegtes Stalldach hat einen messbaren, dokumentierten Tierwohl-Effekt. Module beschatten das Dach, reduzieren die direkte Sonneneinstrahlung und damit die sommerliche Aufheizung des Innenraums.'),
      ),
      p(
        t('In Untersuchungen bei Schweine- und Geflügelställen wurden Stalltemperaturen um '),
        bold('2 bis 5 °C niedriger'),
        t(' gemessen als bei vergleichbaren unbelegten Dächern. Das senkt nicht nur Hitzestress (relevant für Tierwohl und Leistung), sondern auch den Stromverbrauch der Lüftung – ein Effekt, der die Eigenverbrauchsquote bei Tierhaltung noch einmal verbessert.'),
      ),
      p(
        t('Quantifizieren lässt sich der Effekt nicht pauschal. Aber für Betriebe, die ohnehin in Tierwohl-Programme einsteigen oder ihre Klimatisierung modernisieren wollen, ist das ein zusätzliches Argument, das in den meisten Standard-Wirtschaftlichkeitsrechnungen unsichtbar bleibt.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann es sich lohnt – und wann nicht')),
      p(
        bold('Klar wirtschaftlich. '),
        t('Tierhaltungsbetriebe mit 24/7-Lastprofil und intaktem Dach. Hier liegen Eigenverbrauchsquote, Ertrag und Investitionsfähigkeit in einer Kombination, die in praktisch jeder Konstellation funktioniert.'),
      ),
      p(
        bold('Lohnt sich mit Sanierung. '),
        t('Betriebe mit Asbestdach, die ohnehin vor einer Dachsanierung stehen oder stehen werden. Kombiniertes Projekt (Sanierung plus PV plus ggf. Förderung) ist oft tragfähig, auch wenn die reine PV-Investition länger amortisiert. Im Niederrhein und Ruhrgebiet ist das ein verbreiteter Fall.'),
      ),
      p(
        bold('Genau prüfen. '),
        t('Reine Ackerbaubetriebe ohne Tierhaltung. Die Eigenverbrauchsquote ist oft niedrig, Speicher rechnet sich selten als Lösung. Anlage strikt nach Verbrauch dimensionieren, nicht aufs Dach skaliert.'),
      ),
      p(
        bold('Eher zurückstellen. '),
        t('Holzgebäude mit ungeklärter Statik, sanierungsbedürftige Dächer ohne Förderbudget, Betriebe vor einer geplanten Übergabe oder Verpachtung ohne klare Anlagenzuordnung.'),
      ),
      p(
        t('Wer konkret rechnen will, findet eine durchgerechnete Beispielrechnung – wenn auch für einen KMU-Betrieb – hier: '),
        link('PV-Wirtschaftlichkeit am Beispielbetrieb', '/solaranlage/pv-gewerbe-wirtschaftlichkeit-beispielrechnung'),
        t('. Die Logik (konservativ rechnen, Steuerhebel ehrlich behandeln) gilt für landwirtschaftliche Betriebe genauso.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('PV in der Landwirtschaft ist in der richtigen Konstellation einer der wirtschaftlichsten Anwendungsfälle überhaupt – Tierhaltungsbetriebe mit intaktem Dach verbinden hohe Eigenverbrauchsquoten, große Dachflächen und steuerliche Hebel zu Amortisationszeiten, die KMUs neidisch machen.'),
      ),
      p(
        t('Aber der Weg dahin hat Stolpersteine, die im Privat- und KMU-Bereich gar nicht existieren: '),
        bold('Asbest, Pauschalierung, Stallklima, Förderbedingungen'),
        t('. Jeder dieser Punkte kann ein vermeintlich gutes Projekt kippen oder eine ehrlich gerechnete Investition unwirtschaftlich machen.'),
      ),
      p(
        t('Wer dir ein PV-Angebot ohne Fragen zu Asbest, USt-Status und Stallbedingungen vorlegt, kennt entweder die Landwirtschaft nicht – oder hofft, dass du die Lücken selbst nicht siehst.'),
      ),
    ),

    ctaBlock({
      titel: 'PV fürs Stalldach ehrlich planen lassen',
      text:
        'Du bewirtschaftest einen landwirtschaftlichen Betrieb am Niederrhein oder im Ruhrgebiet und überlegst, dein Stalldach mit PV zu belegen? Wir prüfen Asbest-Status, Statik, Lastprofil, Förderwege und steuerliche Konstellation – und sagen dir ehrlich, ob das Projekt jetzt sinnvoll ist oder noch warten sollte.',
      buttonText: 'Hof-Anfrage stellen',
      buttonLink: '/loesungen/landwirtschaft',
    }),
  ],

  faq: [
    faqItem(
      'Wie erkenne ich, ob mein Stalldach Asbest enthält?',
      'Asbestzement-Wellplatten wurden in Deutschland von etwa 1960 bis 1993 verbaut. Asbestfreie Faserzement-Platten sehen optisch praktisch identisch aus. Die sichere Bestimmung erfolgt über eine Materialprobe mit Laboranalyse – Kosten typisch unter 100 €. Solange die Probe nicht vorliegt, sollte nichts gebohrt oder zerschnitten werden, weil ein Eingriff in eine asbesthaltige Platte sofort die Sanierungspflicht nach Gefahrstoffverordnung auslöst.',
    ),
    faqItem(
      'Was kostet eine Asbestsanierung in Kombination mit PV?',
      'Die Asbestsanierung selbst kostet je nach Dachgröße und Zugänglichkeit rund 30 bis 80 €/m² (inklusive fachgerechter Entsorgung durch TRGS-519-Betrieb). Bei einem typischen 600-m²-Stalldach also 18.000 bis 48.000 € allein für die Sanierung. Die anschließende Neueindeckung kommt mit etwa 30 bis 60 €/m² dazu. PV-Anlage zusätzlich nach normaler Kalkulation. In Summe deutlich teurer als ein direktes PV-Projekt – aber häufig mit kombinierter Förderung tragfähig.',
    ),
    faqItem(
      'Welche Förderprogramme gibt es für PV in der Landwirtschaft?',
      'Mehrere kombinierbare Wege: Land NRW und kommunale Programme für Asbestsanierung, das Agrarinvestitionsförderungsprogramm (AFP) für Modernisierung mit Energiekomponente, KfW 270 für günstige Investitionsdarlehen, ggf. GAK-Mittel. Die Programme variieren jährlich und haben Stichtage. Erste Anlaufstelle ist die Landwirtschaftskammer NRW. Antragsvorlauf 3 bis 6 Monate einplanen.',
    ),
    faqItem(
      'Muss ich als Landwirt zur Regelbesteuerung wechseln, wenn ich eine PV-Anlage baue?',
      'Nicht zwingend, aber die Frage gehört vor der Investition geklärt. Wer USt-pauschaliert (§ 24 UStG) und einfach eine PV-Anlage dazubaut, kann die Vorsteuer auf die Anlage (19 %) nicht ohne weiteres abziehen. Drei typische Lösungswege: komplett zur Regelbesteuerung wechseln (5 Jahre Bindung), PV als gesonderten gewerblichen Teilbetrieb führen (oft die beste Lösung), oder pauschal bleiben und die Vorsteuer verloren geben. Die richtige Wahl macht der Steuerberater im konkreten Fall.',
    ),
    faqItem(
      'Wie wirkt PV auf das Stallklima?',
      'Ein mit PV belegtes Dach beschattet die Dachfläche und reduziert die sommerliche Aufheizung. In Studien bei Schweine- und Geflügelställen wurden Stalltemperaturen 2 bis 5 °C niedriger gemessen als bei vergleichbaren unbelegten Dächern. Das ist gut für Tierwohl (Hitzestress) und senkt nebenbei den Stromverbrauch der Lüftung. Pauschal quantifizieren lässt sich der Effekt nicht, aber er ist in den meisten Wirtschaftlichkeitsrechnungen unterbewertet.',
    ),
    faqItem(
      'Welche Module sind für Stallumgebung geeignet?',
      'In Geflügel- und Schweineställen entstehen Ammoniak (NH₃) und Schwefelwasserstoff (H₂S), die normale Modulrahmen, Anschlusskästen und Verkabelung angreifen. Module mit Anti-Ammoniak-Zertifizierung nach IEC TS 62804-2 sind hier praktisch Pflicht. Sie sind etwas teurer, halten aber unter realen Stallbedingungen. Bei reinen Rinderställen ist die Belastung geringer, in Außenklimaställen oft vernachlässigbar – aber im Zweifel ist die Zertifizierung die günstigere Wahl.',
    ),
    faqItem(
      'Lohnt sich PV auch bei Ackerbaubetrieben ohne Tierhaltung?',
      'Hängt stark vom Strombedarf ab. Reine Ackerbaubetriebe haben oft niedrigen Grundverbrauch und saisonale Spitzen (Ernte, Trocknung, Reinigung). Eigenverbrauchsquoten von 30 bis 45 % ohne Speicher sind typisch. Lösung: Anlage strikt nach Verbrauch dimensionieren, nicht maximal aufs Dach packen. Ein großes Dach voll zu belegen, dessen Überschüsse zu 6 ct/kWh eingespeist werden, ist wirtschaftlich selten der beste Weg.',
    ),
    faqItem(
      'Was bringt ein Speicher in der Landwirtschaft?',
      'Bei Betrieben mit Tagschwerpunkt-Last (Milchvieh, Schweinemast, Gartenbau) ist die Eigenverbrauchsquote auch ohne Speicher bereits hoch – Speicher rechnet sich dort meist nur im Multi-Use-Konzept (Lastspitzenkappung, dynamische Tarife, Flexibilität). Bei Ackerbaubetrieben kann ein Speicher saisonale Überschüsse puffern, was wegen der benötigten Speichergröße aber selten wirtschaftlich ist. Realistisch sind 10 bis 50 kWh Speicher in Kombination mit Wärmepumpe oder E-Hoflader als Sektorkopplungs-Baustein.',
    ),
    faqItem(
      'Wie lange dauert ein kombiniertes Asbest-PV-Projekt?',
      'Realistisch 6 bis 12 Monate von der ersten Planung bis zur Inbetriebnahme. Asbestprobe und Förderantrag in den ersten 4 bis 8 Wochen, Wartezeit auf Förderbescheid 6 bis 12 Wochen, dann Sanierung (2 bis 6 Wochen je nach Größe), Neueindeckung (2 bis 4 Wochen), PV-Montage (1 bis 3 Wochen), Netzanschluss und Inbetriebnahme (4 bis 12 Wochen je nach Netzbetreiber). Wer zum Frühjahr fertig sein will, beginnt im Herbst des Vorjahres.',
    ),
    faqItem(
      'Was ist mit Agri-PV (Solarmodule über Acker oder Weide)?',
      'Agri-PV ist ein eigenständiges Thema mit anderer Regulatorik (Sondertarife, EEG-Sonderregelungen, Baugenehmigung praktisch immer nötig). Auf Stalldächern ist das nicht relevant – dort gilt klassisches Aufdach-PV. Wer über Acker- oder Weidefläche eine PV-Anlage plant, sollte das als separates Projekt mit eigener Wirtschaftlichkeitsrechnung angehen. Die Regularien sind 2026 noch im Fluss.',
    ),
    faqItem(
      'Was passiert mit der Anlage, wenn ich den Hof verpachte oder verkaufe?',
      'Eine PV-Anlage erhöht in der Regel den Hofwert, aber die rechtliche Konstruktion muss vorher geklärt sein. Optionen: Anlage bleibt im Eigentum des bisherigen Betreibers (mit Dachnutzungsvertrag), wird mit dem Hof übertragen (Wertanrechnung) oder im Erbfall separat behandelt. Bei laufender EEG-Vergütung muss der Vergütungsanspruch sauber übertragen werden. Vor Pacht-, Übergabe- oder Kaufverträgen mit Notar und Steuerberater die Anlagenfrage klären – nachträglich ist das oft schwierig.',
    ),
  ],
}

await upsertRatgeberArticle(article)
