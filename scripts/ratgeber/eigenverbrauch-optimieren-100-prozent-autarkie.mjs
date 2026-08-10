// scripts/articles/eigenverbrauch-optimieren-100-prozent-autarkie.mjs

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
  titel: 'Eigenverbrauch optimieren: Warum 100 % Autarkie nicht das richtige Ziel ist',
  slug: 'eigenverbrauch-optimieren-100-prozent-autarkie',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'Autarkie klingt nach dem perfekten Ziel: möglichst keinen Strom mehr aus dem Netz kaufen. In der Praxis kann die Jagd nach 90 oder 100 % aber zu übergroßen Speichern, unnötigen Kosten und schlechter ausgelasteter Technik führen. Entscheidend ist nicht die höchste Prozentzahl in der App, sondern wie viel Netzstrom, Energiekosten und Verluste das Gesamtsystem tatsächlich vermeidet. Wir erklären Eigenverbrauchsanteil und Autarkiegrad – und zeigen, wie PV, Speicher, Wallbox, Wärmepumpe und HEMS sinnvoll zusammenspielen.',
  lesezeit: 17,

  seo: seo(
    'Eigenverbrauch optimieren: Warum 100 % Autarkie nicht das Ziel ist | PEAK.Energy',
    'PV-Eigenverbrauch und Autarkiegrad verständlich erklärt: Speichergröße, Wärmepumpe, Wallbox, HEMS, Wirtschaftlichkeit und warum maximale Autarkie nicht optimal sein muss.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Autarkiegrad und Eigenverbrauchsanteil sind '),
      bold('zwei verschiedene Kennzahlen'),
      t(': Autarkie beschreibt, welcher Anteil deines Stromverbrauchs aus PV und Speicher gedeckt wird. Eigenverbrauch beschreibt, welcher Anteil des erzeugten Solarstroms im Haus genutzt wird.'),
    ),
    summaryPoint(
      t('Ein hoher Eigenverbrauchsanteil ist nicht automatisch gut. Eine sehr kleine PV-Anlage kann fast ihren gesamten Solarstrom selbst verbrauchen und trotzdem nur einen '),
      bold('geringen Teil des Jahresverbrauchs'),
      t(' decken.'),
    ),
    summaryPoint(
      t('100 % Autarkie sind in einem typischen deutschen Einfamilienhaus mit PV und Heimspeicher praktisch kaum erreichbar, weil '),
      bold('Sommererzeugung und Winterverbrauch zeitlich auseinanderliegen'),
      t('. Für die letzten Autarkie-Prozent wären meist unverhältnismäßig große PV- und Speicherreserven nötig.'),
    ),
    summaryPoint(
      t('Die HTW Berlin empfiehlt, PV-Flächen nicht künstlich klein zu planen, nur um den Eigenverbrauchsanteil hochzuhalten. Gleichzeitig sollte der Batteriespeicher '),
      bold('bedarfsgerecht statt maximal groß'),
      t(' dimensioniert werden.'),
    ),
    summaryPoint(
      t('Ein HEMS sollte nicht „maximale Autarkie" optimieren, sondern '),
      bold('Gesamtkosten, Effizienz, Komfort und Flexibilität'),
      t(' – inklusive dynamischem Tarif, E-Auto, Wärmepumpe, Speicherverlusten und gewünschter Backup-Reserve.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum 100 % Autarkie so verführerisch klingt')),
      p(
        t('„Wie unabhängig werde ich mit der Anlage?" gehört zu den häufigsten Fragen bei einer PV-Beratung. Das ist verständlich. Wer auf dem eigenen Dach Strom erzeugt, möchte möglichst wenig davon später teuer aus dem Netz zurückkaufen.'),
      ),
      p(
        t('Daraus entsteht schnell ein scheinbar logisches Ziel: '),
        bold('100 % Autarkie'),
        t('. Kein Netzbezug mehr, maximaler Eigenverbrauch, möglichst großer Speicher – fertig.'),
      ),
      p(
        t('Genau diese Denkweise kann aber zu einer schlechten Anlagenplanung führen. Denn die letzten Prozentpunkte Autarkie sind technisch und wirtschaftlich deutlich schwieriger als die ersten. Ein Speicher, der den Sommerabend hervorragend überbrückt, löst noch keine zwei dunklen Winterwochen.'),
      ),
      p(
        t('Deshalb sollte nicht die höchste Prozentzahl das Ziel sein, sondern ein System, das '),
        bold('möglichst viele Energiekosten mit möglichst sinnvoll eingesetzter Technik'),
        t(' vermeidet.'),
      ),
    ),

    textBlock(
      h('h2', t('Eigenverbrauch und Autarkie: der Unterschied')),
      p(
        t('Die beiden Begriffe werden häufig verwechselt, messen aber unterschiedliche Dinge.'),
      ),
    ),

    tabelleBlock('Eigenverbrauchsanteil und Autarkiegrad', [
      {
        spalte1: 'Eigenverbrauchsanteil',
        spalte2: 'Anteil des erzeugten Solarstroms, der im eigenen Haus genutzt wird',
        spalte3: 'Frage: Was passiert mit meiner PV-Erzeugung?',
      },
      {
        spalte1: 'Autarkiegrad',
        spalte2: 'Anteil des Stromverbrauchs, der durch PV und Batteriespeicher gedeckt wird',
        spalte3: 'Frage: Wie viel meines Verbrauchs decke ich selbst?',
      },
      {
        spalte1: 'Netzbezug',
        spalte2: 'Strommenge, die trotz PV und Speicher aus dem öffentlichen Netz kommt',
        spalte3: 'Für die tatsächlichen Stromkosten häufig wichtiger als die reine Prozentzahl',
      },
      {
        spalte1: 'Netzeinspeisung',
        spalte2: 'PV-Strom, der nicht im Haus genutzt oder gespeichert wird',
        spalte3: 'Ist nicht „verloren", sondern wird ins Netz abgegeben und je nach Modell vergütet/vermarktet',
      },
    ]),

    p(
      t('Die HTW Berlin definiert den Autarkiegrad als den Anteil des Stromverbrauchs, der durch zeitgleichen PV-Direktverbrauch oder die Entladung des Batteriespeichers versorgt wird. Der Eigenverbrauchsanteil beschreibt dagegen den Anteil der erzeugten PV-Energie, der im Haus genutzt beziehungsweise zur Speicherladung verwendet wird.'),
    ),

    hinweisBlock(
      'Eine hohe Eigenverbrauchsquote kann sogar von einer zu kleinen PV-Anlage kommen',
      p(
        t('Wenn eine kleine PV-Anlage fast nie mehr Strom produziert als das Haus gerade benötigt, wird nahezu jede erzeugte Kilowattstunde selbst verbraucht. Der Eigenverbrauchsanteil sieht hervorragend aus – trotzdem bleibt der jährliche Netzbezug hoch. Die Kennzahl allein sagt deshalb wenig über die Qualität der Anlage aus.'),
      ),
    ),

    textBlock(
      h('h2', t('Ein einfaches Beispiel: gleiche Person, völlig andere Aussage')),
      p(
        t('Nehmen wir einen Haushalt mit 5.000 kWh Jahresstromverbrauch. Die folgenden Zahlen sind bewusst vereinfacht und dienen nur dazu, die Kennzahlen zu erklären.'),
      ),
    ),

    tabelleBlock('Warum Eigenverbrauchsanteil und Autarkie nicht dasselbe sind', [
      {
        spalte1: 'Kleine PV-Anlage',
        spalte2: '2.500 kWh PV-Erzeugung · davon 2.000 kWh selbst genutzt',
        spalte3: '80 % Eigenverbrauch, aber nur 40 % des Jahresverbrauchs selbst gedeckt',
      },
      {
        spalte1: 'Größere PV-Anlage',
        spalte2: '7.000 kWh PV-Erzeugung · davon 3.250 kWh selbst genutzt',
        spalte3: 'Nur rund 46 % Eigenverbrauch, aber bereits 65 % des Jahresverbrauchs selbst gedeckt',
      },
    ]),

    p(
      t('Die größere Anlage hat im Beispiel den deutlich schlechteren Eigenverbrauchsanteil – und trotzdem den höheren Autarkiegrad, mehr selbst genutzte Kilowattstunden und mehr erzeugten Solarstrom insgesamt.'),
    ),
    p(
      t('Deshalb wäre es falsch, die zweite Anlage künstlich zu verkleinern, nur damit in der App wieder 80 % Eigenverbrauch steht.'),
    ),

    textBlock(
      h('h2', t('Warum eine große PV-Anlage meistens sinnvoller ist als eine „auf Eigenverbrauch optimierte" kleine Anlage')),
      p(
        t('Die Dachfläche ist häufig der begrenzende Faktor einer PV-Anlage. Wenn geeignete Flächen vorhanden sind, spricht technisch meist wenig dafür, sie nur deshalb frei zu lassen, weil der heutige Haushaltsverbrauch kleiner ist als der mögliche Jahresertrag.'),
      ),
      p(
        t('Die HTW Berlin empfiehlt bei der Systemauslegung ausdrücklich, geeignete Dachflächen möglichst weitgehend zur Solarstromproduktion zu nutzen und die PV-Anlage nicht nur auf die bilanzielle Deckung des heutigen Stromverbrauchs zu beschränken.'),
      ),
      p(
        t('Dafür gibt es mehrere Gründe:'),
      ),
      ul(
        p(t('Auch eingespeister Solarstrom hat einen Wert und wird im Stromsystem genutzt.')),
        p(t('Der Stromverbrauch kann später durch E-Auto oder Wärmepumpe steigen.')),
        p(t('Eine größere PV-Anlage erzeugt morgens, abends und bei schlechtem Wetter ebenfalls mehr Leistung.')),
        p(t('In den Wintermonaten hilft zusätzliche Modulfläche stärker als ein größerer Heimspeicher.')),
        p(t('Fixkosten wie Gerüst, Planung und Netzanschluss verteilen sich auf mehr installierte Leistung.')),
      ),
    ),

    tippBlock(
      'PV eher groß – Speicher eher passend',
      p(
        t('Eine sinnvolle Faustregel lautet nicht „PV und Speicher beide maximal groß". Die PV-Fläche darf bei geeigneten Dächern großzügig geplant werden. Beim Batteriespeicher lohnt dagegen eine deutlich genauere Dimensionierung nach PV-Größe, Verbrauch, Nachtlast, E-Auto, Wärmepumpe und gewünschter Betriebsstrategie.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum ein größerer Speicher nicht linear mehr Autarkie bringt')),
      p(
        t('Ein Batteriespeicher verschiebt Solarstrom vom Tag in den Abend und die Nacht. Für diesen täglichen Ausgleich ist er hervorragend geeignet.'),
      ),
      p(
        t('Aber Speichergröße und Autarkie wachsen nicht proportional. Die ersten Kilowattstunden Kapazität werden häufig sehr gut genutzt. Jede weitere Kilowattstunde bringt weniger zusätzlichen Nutzen, weil der Speicher an vielen Tagen gar nicht vollständig geladen oder entladen wird.'),
      ),
      p(
        t('Die HTW Berlin warnt deshalb vor pauschalen 1:1-Auslegungsregeln und vor überdimensionierten Heimspeichern. Als technische Obergrenze für typische Einfamilienhäuser nennt sie in ihren Auslegungsempfehlungen maximal etwa '),
        bold('1,5 kWh nutzbare Speicherkapazität je 1 kWp PV-Leistung'),
        t(' und zusätzlich maximal etwa 1,5 kWh je 1.000 kWh Jahresstromverbrauch. Das sind keine universellen Kaufgrößen, sondern Obergrenzen zur Vermeidung deutlicher Überdimensionierung.'),
      ),
      p(
        t('Bei E-Auto, Wärmepumpe, Ersatzstromwunsch oder außergewöhnlichen Lastprofilen kann eine individuelle Simulation davon abweichen. Entscheidend ist der tatsächliche Energiefluss.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum die letzten Autarkie-Prozent so teuer werden')),
      p(
        t('Das grundlegende Problem ist saisonal: In Deutschland produziert eine PV-Anlage den größten Teil ihrer Energie im Frühjahr und Sommer. Der elektrische Bedarf kann dagegen im Winter besonders hoch sein – erst recht mit Wärmepumpe.'),
      ),
      p(
        t('Ein klassischer Lithium-Heimspeicher speichert Energie für Stunden oder vielleicht wenige Tage, nicht wirtschaftlich für mehrere Monate. Überschüsse aus dem Juli stehen deshalb nicht im Januar zur Verfügung.'),
      ),
      p(
        t('Die HTW Berlin kommt bei typischen Einfamilienhäusern zu dem Ergebnis, dass hohe Autarkiegrade mit PV und Batterie gut erreichbar sind, vollständige Unabhängigkeit vom Netz aber '),
        bold('praktisch kaum erreichbar'),
        t(' ist. Für Autarkiegrade nahe 80 % werden bereits größere PV-Anlagen und Batteriespeicher benötigt.'),
      ),
      p(
        t('Technisch ließe sich die Unabhängigkeit weiter erhöhen – etwa mit sehr großer PV-Leistung, deutlich überdimensioniertem Speicher, saisonaler Speicherung oder einem zusätzlichen Generator. Wirtschaftlich ist das aber ein völlig anderes System als eine normale netzgekoppelte PV-Anlage.'),
      ),
    ),

    hinweisBlock(
      'Netzanschluss ist kein Scheitern der Autarkie',
      p(
        t('Das öffentliche Netz kann als extrem leistungsfähige Ergänzung des eigenen Energiesystems verstanden werden: Im Sommer nimmt es Überschüsse auf, im Winter liefert es Energie zurück. Eine wirtschaftlich gute PV-Anlage muss das Netz nicht „besiegen". Sie sollte den Netzbezug dort reduzieren, wo das mit vertretbarem Aufwand sinnvoll ist.'),
      ),
    ),

    textBlock(
      h('h2', t('Direktverbrauch ist energetisch meist wertvoller als Batteriespeicherung')),
      p(
        t('Wenn Solarstrom genau in dem Moment verbraucht wird, in dem er erzeugt wird, ist kein zusätzlicher Lade- und Entladevorgang notwendig.'),
      ),
      p(
        t('Deshalb ist direkter Verbrauch – etwa durch Haus, Wallbox oder Wärmepumpe – grundsätzlich attraktiv. Der Batteriespeicher ist die zweite Ebene: Er übernimmt Energie, die nicht zeitgleich sinnvoll genutzt werden kann, und verschiebt sie.'),
      ),
      p(
        t('Das heißt aber nicht, dass jeder Verbraucher künstlich in die Mittagszeit gezwungen werden sollte. Komfort und Effizienz bleiben wichtiger. Eine Wärmepumpe mit unnötig hoher Temperatur zu betreiben, nur um mehr PV-Strom „selbst zu verbrauchen", kann energetisch schlechter sein als eine vernünftige Einspeisung.'),
      ),
    ),

    textBlock(
      h('h2', t('Das E-Auto verändert den Eigenverbrauch stärker als die Waschmaschine')),
      p(
        t('Bei Eigenverbrauchsoptimierung wird oft über Waschmaschine und Geschirrspüler gesprochen. Die verschiebbaren Energiemengen sind dort jedoch vergleichsweise klein.'),
      ),
      p(
        t('Ein E-Auto kann dagegen an einem einzigen Ladevorgang 20, 30 oder mehr Kilowattstunden aufnehmen. Wenn das Fahrzeug tagsüber am Haus steht, kann PV-Überschussladen den Eigenverbrauch deutlich erhöhen, ohne dass dieser Strom vorher durch den Heimspeicher laufen muss.'),
      ),
      p(
        t('Ein gutes HEMS berücksichtigt deshalb nicht nur „PV-Überschuss vorhanden", sondern auch Abfahrtszeit und gewünschtes Ladeziel. Das Fahrzeug soll nicht maximal solar laden – es soll '),
        bold('rechtzeitig und möglichst sinnvoll'),
        t(' geladen sein.'),
      ),
    ),

    textBlock(
      h('h2', t('Wärmepumpe: Autarkie erhöhen, ohne den COP zu ruinieren')),
      p(
        t('Eine Wärmepumpe erhöht den jährlichen Stromverbrauch und kann damit den Eigenverbrauch von PV-Strom deutlich steigern. Gleichzeitig verschiebt sie einen großen Teil des Strombedarfs in die Wintermonate, in denen die PV-Erzeugung geringer ist.'),
      ),
      p(
        t('Deshalb kann ein Haus nach dem Einbau einer Wärmepumpe mehr Solarstrom selbst nutzen und trotzdem prozentual einen niedrigeren Autarkiegrad haben. Das ist kein Widerspruch: Der Gesamtverbrauch ist schlicht gestiegen.'),
      ),
      p(
        t('Im Betrieb sollte die Wärmepumpe nicht für eine schöne Eigenverbrauchskurve ineffizient gemacht werden. Warmwasser oder Heizbetrieb lassen sich innerhalb vernünftiger Grenzen in PV-Zeiten verschieben. Überhöhte Vorlauftemperaturen nur zur Solarstromaufnahme können dagegen den COP verschlechtern.'),
      ),
      p(
        bold('Erst effizient heizen – danach Eigenverbrauch optimieren.'),
      ),
    ),

    textBlock(
      h('h2', t('Dynamische Stromtarife stellen die alte Eigenverbrauchslogik auf den Kopf')),
      p(
        t('Bei einem klassischen Festpreistarif ist die Rechnung einfach: Jede selbst genutzte PV-Kilowattstunde ersetzt ungefähr denselben Netzstrompreis. Mit einem dynamischen Tarif verändert sich der Wert des Netzbezugs im Tagesverlauf.'),
      ),
      p(
        t('Dann kann es Situationen geben, in denen Netzstrom sehr günstig ist, während die gespeicherte PV-Energie später in einer teuren Stunde einen höheren Wert hat. Das HEMS kann deshalb bewusst entscheiden, den Speicher nicht sofort zu entladen oder flexible Verbraucher in ein günstiges Netzzeitfenster zu verschieben.'),
      ),
      p(
        t('Das Ziel lautet dann nicht mehr „möglichst wenig Netzbezug um jeden Preis", sondern '),
        bold('möglichst niedrige Gesamtkosten'),
        t('.'),
      ),
      p(
        t('Mehr dazu in '),
        link('Dynamischer Stromtarif mit PV und Speicher: Wann er sich wirklich lohnt', '/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Ein Beispiel: Warum 85 % Autarkie teurer sein können als 75 %')),
      p(
        t('Nehmen wir zwei technisch unterschiedliche Varianten für denselben Haushalt. Die Werte sind wieder bewusst illustrativ.'),
      ),
    ),

    tabelleBlock('Mehr Autarkie ist nicht automatisch mehr Wirtschaftlichkeit', [
      {
        spalte1: 'Variante A',
        spalte2: 'Große PV + passend dimensionierter Speicher → 75 % Autarkie',
        spalte3: 'Gute Speicherauslastung, mehr Einspeisung, moderater Invest',
      },
      {
        spalte1: 'Variante B',
        spalte2: 'Gleiche PV + deutlich größerer Speicher → 85 % Autarkie',
        spalte3: 'Höherer Invest, zusätzliche Kapazität wird nur an wenigen Tagen wirklich gebraucht',
      },
      {
        spalte1: 'Ergebnis',
        spalte2: 'Variante B kauft weniger Netzstrom',
        spalte3: 'Die eingesparten zusätzlichen kWh müssen aber die Mehrkosten des größeren Speichers tragen',
      },
    ]),

    p(
      t('Die richtige Frage lautet deshalb nicht: „Wie viel Autarkie bekomme ich maximal?" Sondern: '),
      bold('„Was kostet mich jede zusätzliche vermiedene Kilowattstunde Netzbezug?"'),
      t(''),
    ),

    textBlock(
      h('h2', t('Backup-Reserve senkt die nutzbare Autarkie – und kann trotzdem richtig sein')),
      p(
        t('Ein Speicher kann zusätzlich eine Notstrom- oder Backup-Aufgabe übernehmen. Dafür wird häufig ein Mindest-Ladezustand reserviert. Diese Energie steht im normalen Betrieb nicht vollständig für Eigenverbrauchsoptimierung zur Verfügung.'),
      ),
      p(
        t('Rein mathematisch kann dadurch der Autarkiegrad etwas sinken. Trotzdem kann die Strategie exakt richtig sein, wenn Versorgungssicherheit für den Betreiber einen höheren Wert hat als die letzten eingesparten Kilowattstunden Netzstrom.'),
      ),
      p(
        t('Das zeigt erneut: Ein Energiesystem braucht '),
        bold('Ziele und Prioritäten'),
        t(' – keine einzelne Prozentkennzahl.'),
      ),
    ),

    textBlock(
      h('h2', t('Solarspitzengesetz und 60-%-Regel: Eigenverbrauch wird zeitlich wichtiger')),
      p(
        t('Bei bestimmten neuen PV-Anlagen kann die Einspeisung vorübergehend auf 60 % der installierten Leistung begrenzt sein, bis die erforderliche Mess- und Steuertechnik samt erfolgreicher Ansteuerbarkeit vorhanden ist.'),
      ),
      p(
        t('In diesen Stunden kann zusätzlicher direkter Verbrauch oder freie Speicherkapazität besonders wertvoll sein, weil sonst Leistung abgeregelt werden kann. Das macht aber auch hier keine pauschale Maximierung des Eigenverbrauchs sinnvoll. Entscheidend ist, ob tatsächlich eine Erzeugungsspitze ansteht.'),
      ),
      p(
        t('Wie diese Regel funktioniert, erklären wir in '),
        link('Solarspitzengesetz 2026: 60-%-Regel, negative Strompreise und Smart Meter', '/strom-energiemanagement/solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ein HEMS stattdessen optimieren sollte')),
      p(
        t('Ein vernünftig programmiertes Energiemanagement braucht keine Zielgröße „Autarkie maximal". Es sollte mehrere Größen gemeinsam bewerten:'),
      ),
      ul(
        p(t('aktuellen und prognostizierten PV-Ertrag,')),
        p(t('aktuellen und erwarteten Hausverbrauch,')),
        p(t('Strompreis und gegebenenfalls zeitvariable Netzentgelte,')),
        p(t('Speicherfüllstand, Wirkungsgrad und gewünschte Backup-Reserve,')),
        p(t('Ladeziel und Abfahrtszeit des E-Autos,')),
        p(t('Wärmebedarf und effiziente Betriebsgrenzen der Wärmepumpe,')),
        p(t('Einspeisegrenzen und §14a-Leistungsgrenzen,')),
        p(t('technische Lebensdauer und unnötige Speicherzyklen.')),
      ),
      p(
        t('Wie diese Komponenten im Tagesablauf zusammenspielen, zeigen wir in '),
        link('PV, Speicher, Wallbox und Wärmepumpe intelligent steuern', '/strom-energiemanagement/pv-speicher-wallbox-waermepumpe-intelligent-steuern'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Kennzahlen wir statt nur „Autarkie" ansehen würden')),
      p(
        t('Für die Bewertung eines Energiesystems sind mehrere Kennzahlen sinnvoller als eine einzelne App-Zahl:'),
      ),
    ),

    tabelleBlock('Kennzahlen für ein gutes Energiesystem', [
      {
        spalte1: 'Jährlicher Netzbezug in kWh',
        spalte2: 'Wie viel Energie muss tatsächlich gekauft werden?',
        spalte3: 'Direkter und leicht verständlicher Kostenhebel',
      },
      {
        spalte1: 'Autarkiegrad',
        spalte2: 'Welcher Anteil des Verbrauchs wird selbst gedeckt?',
        spalte3: 'Gut für die energetische Einordnung, aber nicht allein entscheiden',
      },
      {
        spalte1: 'Eigenverbrauchte PV-kWh',
        spalte2: 'Wie viel Solarstrom wird im Gebäude tatsächlich genutzt?',
        spalte3: 'Absoluter Wert oft aussagekräftiger als Eigenverbrauchs-Prozent',
      },
      {
        spalte1: 'Netzeinspeisung',
        spalte2: 'Wie viel Solarstrom geht ins Netz?',
        spalte3: 'Nicht automatisch schlecht – große PV-Anlagen speisen zwangsläufig mehr ein',
      },
      {
        spalte1: 'Speicherverluste / Wirkungsgrad',
        spalte2: 'Wie viel Energie geht beim Verschieben verloren?',
        spalte3: 'Wichtig bei hohem Batterieumsatz und dynamischem Netzladen',
      },
      {
        spalte1: 'Stromkosten pro Jahr',
        spalte2: 'Was kostet das gesamte System nach Bezug und Erlösen?',
        spalte3: 'Für die Wirtschaftlichkeit wichtiger als die höchste Autarkiezahl',
      },
    ]),

    textBlock(
      h('h2', t('Fünf typische Fehler bei der Eigenverbrauchsoptimierung')),
      p(
        bold('1. PV-Anlage kleiner machen, damit die Eigenverbrauchsquote steigt. '),
        t('Eine hohe Quote ist kein Selbstzweck. Mehr PV kann mehr Eigenversorgung, mehr Winterertrag und mehr saubere Gesamterzeugung bringen.'),
      ),
      p(
        bold('2. Speicher nach Wunsch-Autarkie statt Lastprofil dimensionieren. '),
        t('Die letzten Prozentpunkte benötigen oft unverhältnismäßig viel zusätzliche Kapazität.'),
      ),
      p(
        bold('3. Speicher morgens sofort voll laden. '),
        t('Damit kann zur Mittagszeit wertvolle freie Kapazität fehlen. Prognosebasiertes Laden ist häufig sinnvoller.'),
      ),
      p(
        bold('4. Wärmepumpe künstlich heiß fahren. '),
        t('Mehr Eigenverbrauch hilft nicht, wenn die Wärmepumpe dafür ineffizienter arbeitet.'),
      ),
      p(
        bold('5. Einspeisung als Verlust betrachten. '),
        t('Nicht selbst verbrauchter Solarstrom verschwindet nicht. Er wird ins öffentliche Netz eingespeist und hat weiterhin einen energetischen und je nach Vermarktungsmodell wirtschaftlichen Wert.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Zielbild: hohe Eigenversorgung ohne Autarkie-Fetisch')),
      p(
        t('Für ein typisches Einfamilienhaus würden wir folgende Reihenfolge bevorzugen:'),
      ),
      ul(
        p(t('geeignete PV-Flächen sinnvoll ausnutzen,')),
        p(t('Batteriespeicher nach tatsächlichem Verbrauch und Energiefluss dimensionieren,')),
        p(t('große flexible Verbraucher wie E-Auto und Wärmepumpe integrieren,')),
        p(t('Speicher und Lasten prognosebasiert statt starr steuern,')),
        p(t('dynamische Preise und §14a nur dort nutzen, wo ein realer Vorteil entsteht,')),
        p(t('Backup- und Komfortwünsche bewusst als eigene Ziele berücksichtigen,')),
        p(t('den verbleibenden Netzanschluss als sinnvolle Ergänzung statt als Niederlage betrachten.')),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Autarkiegrad und Eigenverbrauchsanteil sind nützliche Kennzahlen. Sie werden problematisch, wenn sie zum alleinigen Planungsziel werden.'),
      ),
      p(
        t('Eine kleine PV-Anlage kann einen hervorragenden Eigenverbrauchsanteil haben und trotzdem viel Netzstrom benötigen. Ein riesiger Speicher kann den Autarkiegrad erhöhen und wirtschaftlich trotzdem schlechter sein als ein passend dimensionierter Speicher.'),
      ),
      p(
        t('100 % Autarkie sind bei einem typischen deutschen Einfamilienhaus mit PV und Heimspeicher wegen der saisonalen Unterschiede praktisch kaum sinnvoll erreichbar. Das muss auch nicht das Ziel sein.'),
      ),
      p(
        t('Das bessere Ziel lautet: '),
        bold('möglichst viel sinnvollen Eigenverbrauch erzeugen, Netzbezug wirtschaftlich reduzieren und das Gesamtsystem effizient betreiben.'),
      ),
      p(
        t('Wenn PV, Speicher, Wallbox und Wärmepumpe gemeinsam gesteuert werden, entsteht daraus weit mehr Wert als aus der Jagd nach einer möglichst hohen Prozentzahl in der App.'),
      ),
    ),

    ctaBlock({
      titel: 'Nicht auf Prozentwerte – auf dein Haus optimieren',
      text:
        'Du planst PV und Speicher oder möchtest eine bestehende Anlage mit Wallbox, Wärmepumpe und Energiemanagement erweitern? Wir betrachten Dachfläche, Lastprofil, Speichergröße und flexible Verbraucher gemeinsam und zeigen, welche Auslegung für dein Haus sinnvoll ist – statt einfach eine maximale Autarkiequote zu verkaufen.',
      buttonText: 'Energiesystem planen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist der Unterschied zwischen Eigenverbrauch und Autarkie?',
      'Der Eigenverbrauchsanteil beschreibt, welcher Anteil des erzeugten Solarstroms im eigenen Haus genutzt wird. Der Autarkiegrad beschreibt dagegen, welcher Anteil des gesamten Stromverbrauchs durch PV-Direktverbrauch und Batteriespeicher gedeckt wird. Eine Anlage kann deshalb einen hohen Eigenverbrauchsanteil und trotzdem einen niedrigen Autarkiegrad haben.',
    ),
    faqItem(
      'Ist ein hoher Eigenverbrauchsanteil immer gut?',
      'Nein. Eine sehr kleine PV-Anlage kann fast ihren gesamten Solarstrom selbst verbrauchen und dadurch einen hohen Eigenverbrauchsanteil erreichen. Trotzdem erzeugt sie möglicherweise zu wenig Energie, um einen großen Teil des Jahresverbrauchs zu decken. Absolute selbst verbrauchte PV-kWh und Netzbezug sind deshalb ebenfalls wichtig.',
    ),
    faqItem(
      'Sind 100 Prozent Autarkie mit Photovoltaik und Speicher möglich?',
      'Technisch lässt sich ein sehr hoher Unabhängigkeitsgrad mit entsprechend großen Anlagen, Speichern oder zusätzlicher saisonaler Versorgung erreichen. Für typische netzgekoppelte Einfamilienhäuser in Deutschland ist vollständige Unabhängigkeit mit PV und einem normalen Lithium-Heimspeicher praktisch kaum erreichbar, weil Sommererzeugung und Winterverbrauch stark auseinanderliegen.',
    ),
    faqItem(
      'Welcher Autarkiegrad ist bei einem Einfamilienhaus realistisch?',
      'Das hängt stark von Jahresverbrauch, Lastprofil, PV-Leistung und Speicherkapazität ab. Die HTW Berlin zeigt mit ihrem Unabhängigkeitsrechner, dass PV-Speichersysteme in typischen Einfamilienhäusern hohe Autarkiegrade erreichen können. Für Autarkie in Richtung 80 % sind bereits größere PV-Anlagen und Speicher notwendig. Eine pauschale Zielzahl ist deshalb weniger sinnvoll als eine individuelle Simulation.',
    ),
    faqItem(
      'Sollte ich die PV-Anlage kleiner bauen, damit ich mehr selbst verbrauche?',
      'In der Regel nicht nur aus diesem Grund. Eine größere PV-Anlage kann zwar den prozentualen Eigenverbrauchsanteil senken, gleichzeitig aber mehr absolute Eigenversorgung, mehr Winterertrag und mehr Gesamtproduktion liefern. Geeignete Dachflächen sollten deshalb nicht künstlich frei bleiben, nur um eine hohe Eigenverbrauchsquote zu erzielen.',
    ),
    faqItem(
      'Wie groß sollte der Batteriespeicher sein?',
      'Die Größe sollte zu PV-Leistung und Stromverbrauch passen. Die HTW Berlin empfiehlt zur Vermeidung deutlicher Überdimensionierung als technische Obergrenze etwa 1,5 kWh nutzbare Speicherkapazität je 1 kWp PV-Leistung und zusätzlich maximal etwa 1,5 kWh je 1.000 kWh Jahresverbrauch. Die konkrete Auslegung kann durch E-Auto, Wärmepumpe, Backup-Wunsch und Lastprofil abweichen.',
    ),
    faqItem(
      'Erhöht ein größerer Stromspeicher immer die Autarkie?',
      'Meist steigt der Autarkiegrad zunächst, aber mit abnehmendem Zusatznutzen. Sehr große Speicher werden an vielen Tagen nicht vollständig genutzt. Die letzten zusätzlichen Prozentpunkte Autarkie können deshalb deutlich teurer sein als die ersten.',
    ),
    faqItem(
      'Wie erhöht ein E-Auto den PV-Eigenverbrauch?',
      'Ein E-Auto kann große Energiemengen zeitlich flexibel aufnehmen. Wenn das Fahrzeug während der PV-Produktion am Haus steht, kann eine intelligente Wallbox Solarüberschuss direkt ins Fahrzeug laden. Dadurch steigt der absolute Eigenverbrauch häufig stärker als durch das Verschieben kleiner Haushaltsgeräte.',
    ),
    faqItem(
      'Wie beeinflusst eine Wärmepumpe den Autarkiegrad?',
      'Eine Wärmepumpe erhöht den Stromverbrauch und kann besonders tagsüber zusätzlichen Solarstrom nutzen. Gleichzeitig liegt ein großer Teil ihres Verbrauchs im Winter, wenn die PV-Erzeugung geringer ist. Dadurch kann der absolute PV-Eigenverbrauch steigen, während der prozentuale Autarkiegrad nicht im gleichen Maß wächst oder sogar sinkt.',
    ),
    faqItem(
      'Sollte ein Speicher immer sofort mit PV-Überschuss geladen werden?',
      'Nicht zwingend. Bei einem sonnigen Tag kann es sinnvoll sein, vormittags Speicherkapazität für die stärkere Mittagsproduktion freizuhalten. Prognosebasiertes Laden kann Erzeugungsspitzen besser aufnehmen und lange Standzeiten bei sehr hohen Ladezuständen reduzieren.',
    ),
    faqItem(
      'Kann ein dynamischer Stromtarif den Autarkiegrad senken?',
      'Ja, bewusst. Wenn Netzstrom in einem Zeitfenster sehr günstig ist, kann es wirtschaftlich sinnvoll sein, einen flexiblen Verbraucher aus dem Netz zu versorgen und gespeicherte Energie für spätere teure Stunden aufzuheben. Der Autarkiegrad kann dadurch etwas sinken, während die Gesamtkosten trotzdem niedriger werden.',
    ),
    faqItem(
      'Was sollte ein HEMS statt maximaler Autarkie optimieren?',
      'Ein gutes HEMS sollte Gesamtkosten, PV-Prognose, Speicherwirkungsgrad, E-Auto-Ladeziel, Wärmepumpeneffizienz, Komfort, §14a-Grenzen und gegebenenfalls Backup-Reserve gemeinsam berücksichtigen. Autarkie ist dabei eine Kennzahl – nicht das einzige Ziel.',
    ),
  ],
}

await upsertRatgeberArticle(article)
