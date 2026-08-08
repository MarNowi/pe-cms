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
  titel: '§ 14a EnWG bei Wärmepumpen: Drosselung, Wärmepumpentarif und Messkonzept 8',
  slug: '14a-enwg-waermepumpe-messkonzept-8',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Darf der Netzbetreiber eine Wärmepumpe abschalten? Nein. Wir erklären § 14a EnWG, die 4,2-kW-Regel, Modul 1 bis 3 und warum sich ein separater Wärmepumpenzähler trotz Photovoltaik lohnen kann. Besonders interessant: Mit einer Kaskadenmessung wie Westnetz Messkonzept 8 lassen sich günstiger Wärmepumpentarif und PV-Eigenverbrauch kombinieren.',
  lesezeit: 14,

  seo: seo(
    '§14a Wärmepumpe: Messkonzept 8 & Tarif | PEAK.Energy – WE ♥️ ENERGY',
    '§14a EnWG bei Wärmepumpen erklärt: 4,2-kW-Drosselung, Modul 1–3, separater Wärmepumpenzähler und Westnetz Messkonzept 8 mit PV.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Neue Wärmepumpen mit mehr als '),
      bold('4,2 kW Netzanschlussleistung'),
      t(' fallen seit 2024 grundsätzlich unter § 14a EnWG. Der Netzbetreiber darf sie bei einer konkreten Netzüberlastung vorübergehend dimmen – aber nicht einfach abschalten.'),
    ),
    summaryPoint(
      t('Die '),
      bold('4,2 kW beziehen sich auf die elektrische Bezugsleistung aus dem Netz'),
      t(' und nicht auf die Heizleistung der Wärmepumpe. Der normale Haushaltsstrom ist von einer §14a-Steuerung nicht betroffen.'),
    ),
    summaryPoint(
      t('Bei Modul 2 wird der Netzentgelt-Arbeitspreis für die steuerbare Verbrauchseinrichtung auf '),
      bold('40 % des regulären Netzentgelt-Arbeitspreises'),
      t(' reduziert. Dafür ist ein separater Zähler erforderlich. Zusätzlich können Energieversorger spezielle Wärmepumpentarife anbieten.'),
    ),
    summaryPoint(
      t('Ein separater Wärmepumpenzähler muss nicht bedeuten, dass die Wärmepumpe keinen Solarstrom nutzen kann. Beim '),
      bold('Westnetz Messkonzept 8'),
      t(' werden Haushalt, PV und Wärmepumpe als Kaskade gemessen. So kann die PV einen Teil des Wärmepumpenverbrauchs decken und der verbleibende Netzbezug trotzdem über einen separaten Wärmepumpentarif laufen.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Darf der Netzbetreiber meine Wärmepumpe abschalten?')),
      p(
        t('Die kurze Antwort lautet: '),
        bold('Nein – jedenfalls nicht im Sinne eines vollständigen Abschaltens nach Belieben.'),
        t(' Seit dem 1. Januar 2024 gelten für neue steuerbare Verbrauchseinrichtungen die Regelungen des § 14a EnWG. Dazu gehören unter anderem Wärmepumpen, Wallboxen, Klimageräte und Batteriespeicher, sofern die jeweilige Anlage die maßgebliche Anschlussleistung überschreitet.'),
      ),
      p(
        t('Wenn in einem lokalen Niederspannungsnetz eine konkrete Überlastung droht, darf der Netzbetreiber den Netzbezug einer steuerbaren Verbrauchseinrichtung vorübergehend reduzieren. Bei einer üblichen einzelnen Wärmepumpe muss grundsätzlich weiterhin eine elektrische Mindestbezugsleistung von '),
        bold('4,2 kW'),
        t(' zur Verfügung stehen. Der normale Haushaltsverbrauch – Kühlschrank, Licht, Herd oder Fernseher – wird dabei nicht gedrosselt.'),
      ),
      p(
        t('Im Gegenzug erhalten Betreiber steuerbarer Verbrauchseinrichtungen reduzierte Netzentgelte. Die Idee hinter § 14a ist also kein pauschales Abschaltrecht, sondern ein Tausch: '),
        bold('schneller Netzanschluss und reduzierte Netzentgelte gegen begrenzte Steuerbarkeit in einer tatsächlichen Netzengpasssituation'),
        t('.'),
      ),
    ),

    hinweisBlock(
      '4,2 kW sind nicht 4,2 kW Heizleistung',
      p(
        t('Dieser Punkt wird häufig missverstanden. Die 4,2 kW beziehen sich auf die '),
        bold('elektrische Leistung, die aus dem öffentlichen Netz bezogen wird'),
        t(' – nicht auf die thermische Heizleistung der Wärmepumpe. Eine Wärmepumpe kann aus 4,2 kW elektrischer Leistung je nach Betriebszustand ein Mehrfaches an Wärme bereitstellen. Außerdem kann eigener PV-Strom zusätzlich genutzt werden, weil § 14a den Bezug aus dem öffentlichen Netz begrenzt und nicht die Nutzung selbst erzeugter Energie.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Wärmepumpen fallen unter § 14a EnWG?')),
      p(
        t('Die neuen Regeln gelten grundsätzlich für steuerbare Verbrauchseinrichtungen, die seit dem 1. Januar 2024 in Betrieb genommen wurden und eine Netzanschlussleistung von mehr als 4,2 kW haben. Bei Wärmepumpen werden auch elektrische Zusatz- oder Notheizungen wie Heizstäbe berücksichtigt. Mehrere kleinere Wärmepumpen oder Klimageräte derselben Kategorie können zusammenzufassen sein.'),
      ),
      p(
        t('Bei größeren Wärmepumpenanlagen mit mehr als 11 kW elektrischer Netzanschlussleistung gelten abweichende Berechnungen für die Mindestbezugsleistung. Bei Direktansteuerung wird dabei aktuell mit einem Skalierungsfaktor von 0,4 gearbeitet. Für ein typisches Einfamilienhaus ist jedoch die 4,2-kW-Regel der wichtigste Fall.'),
      ),
    ),

    textBlock(
      h('h2', t('Modul 1, Modul 2 oder Modul 3 – was bekommt der Kunde dafür?')),
      p(
        t('Für die Teilnahme an § 14a wird das Netzentgelt reduziert. Dabei muss man zwei Dinge auseinanderhalten: '),
        bold('Netzentgelt'),
        t(' und '),
        bold('Stromtarif'),
        t('. Die Bundesnetzagentur regelt die Netzentgeltreduzierung. Einen speziellen Wärmepumpen-Strompreis bietet dagegen ein Energieversorger an.'),
      ),
    ),

    tabelleBlock('Die drei §14a-Module im Überblick', [
      {
        spalte1: 'Modul 1',
        spalte2: 'Pauschale Netzentgeltreduzierung',
        spalte3:
          'Kein separater Zähler allein wegen des Moduls nötig. Die pauschale Reduzierung hängt vom jeweiligen Netzgebiet ab. Modul 1 ist der Standard, wenn keine andere Auswahl getroffen wird.',
      },
      {
        spalte1: 'Modul 2',
        spalte2: 'Netzentgelt-Arbeitspreis auf 40 % reduziert',
        spalte3:
          'Erfordert einen separaten Zähler für die steuerbare Verbrauchseinrichtung. Besonders bei Wärmepumpen mit relevantem Jahresverbrauch interessant. Ein Netz-Grundpreis darf für diesen separaten §14a-Zählpunkt nicht berechnet werden.',
      },
      {
        spalte1: 'Modul 3',
        spalte2: 'Zeitvariables Netzentgelt',
        spalte3:
          'Seit April 2025 zusätzlich zu Modul 1 wählbar. Der Netzbetreiber definiert Zeitfenster mit unterschiedlichen Netzentgeltstufen. Modul 3 ist nicht mit Modul 2 kombinierbar.',
      },
    ]),

    hinweisBlock(
      'Ein Wärmepumpentarif von rund 21 ct/kWh ist kein gesetzlicher §14a-Preis',
      p(
        t('In unseren Projekten sehen wir aktuell Wärmepumpentarife, die je nach Anbieter, Netzgebiet und Zeitpunkt ungefähr bei '),
        bold('0,21 € pro kWh'),
        t(' liegen können. Dieser Preis ist aber kein von § 14a garantierter Tarif. § 14a reduziert Netzentgelte; der tatsächliche Endkundenpreis wird vom Stromlieferanten kalkuliert und kann sich ändern. Genau deshalb vergleichen wir vor der Entscheidung immer den konkreten Haushalts- und Wärmepumpentarif.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum wir einen separaten Wärmepumpenzähler oft trotzdem sinnvoll finden')),
      p(
        t('Ein häufiges Gegenargument lautet: „Mit einem separaten Wärmepumpenzähler kann ich meinen eigenen PV-Strom doch gar nicht mehr für die Wärmepumpe nutzen." Das stimmt '),
        bold('nicht zwangsläufig'),
        t('. Entscheidend ist das Messkonzept.'),
      ),
      p(
        t('Wird die Wärmepumpe einfach vollständig von der PV-Kundenanlage getrennt, verschenkt man tatsächlich einen Teil des möglichen Eigenverbrauchs. Bei einer '),
        bold('Kaskadenmessung'),
        t(' lässt sich dagegen beides kombinieren: ein eigener Wärmepumpen-Zählpunkt mit eigenem Liefervertrag und gleichzeitig die Nutzung von überschüssigem Solarstrom für die Wärmepumpe.'),
      ),
      p(
        t('Genau deshalb setzen wir im Westnetz-Gebiet häufig das '),
        bold('Messkonzept 8 (MK8)'),
        t(' um, wenn Gebäude, Wärmepumpe und PV-Anlage dazu passen.'),
      ),
    ),

    textBlock(
      h('h2', t('Westnetz Messkonzept 8: Wärmepumpentarif und PV in einer Kaskade')),
      p(
        t('Westnetz beschreibt Messkonzept 8 als „Erzeugungsanlage mit Haushalt und unterbrechbarer Verbrauchseinrichtung", zum Beispiel einer Wärmepumpe. Dabei sitzen die Zähler hintereinander in einer Kaskade. Für den Wärmepumpenbezug und den Haushaltsbezug werden zwei separate Stromlieferverträge geführt.'),
      ),
      p(
        t('Vereinfacht gibt es einen überlagerten Hauptzähler Z1 und einen nachgelagerten Haushaltszähler Z2. Die Wärmepumpe ist zwischen diesen beiden Messpunkten angebunden, die PV-Anlage und die allgemeinen Haushaltsverbraucher liegen hinter Z2.'),
      ),
      p(
        t('Westnetz ermittelt den Netzbezug der Wärmepumpe dabei rechnerisch als '),
        bold('Bezug Z1 minus Bezug Z2'),
        t('. Der Haushaltsbezug entspricht dem Bezug von Z2, die Einspeisung ins öffentliche Netz wird an Z1 gemessen.'),
      ),
    ),

    tippBlock(
      'Der entscheidende Vorteil der Kaskade',
      p(
        t('Produziert die PV-Anlage mehr Strom als der Haushalt gerade benötigt, kann dieser Überschuss innerhalb der Kundenanlage zur Wärmepumpe fließen. Erst der danach noch notwendige Netzstrom wird dem separaten Wärmepumpen-Zählpunkt zugerechnet. Damit verbindet die Kaskade zwei Vorteile: '),
        bold('PV-Eigenverbrauch für die Wärmepumpe und einen separaten Wärmepumpentarif für den verbleibenden Netzbezug'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Ein einfaches Beispiel: Warum sich die Kaskade rechnen kann')),
      p(
        t('Nehmen wir eine Wärmepumpe mit einem jährlichen Strombedarf von 5.000 kWh. Durch die PV-Anlage werden davon in unserem Beispiel 30 % direkt gedeckt. Es bleiben also 3.500 kWh Netzbezug für die Wärmepumpe.'),
      ),
      p(
        t('Für die folgende Rechnung nehmen wir bewusst nur Beispielpreise an: Haushaltsstrom 0,31 €/kWh, Wärmepumpentarif 0,21 €/kWh und 120 € zusätzliche jährliche Fixkosten für den zweiten Zählpunkt beziehungsweise Tarif. Die tatsächlichen Preise müssen immer projektbezogen geprüft werden.'),
      ),
    ),

    tabelleBlock('Beispielrechnung: ein Zähler oder MK8-Kaskade', [
      {
        spalte1: 'Wärmepumpenstrom pro Jahr',
        spalte2: '5.000 kWh',
        spalte3: 'Davon im Beispiel 1.500 kWh durch PV und 3.500 kWh aus dem Netz',
      },
      {
        spalte1: 'Ein gemeinsamer Zähler',
        spalte2: '3.500 kWh × 0,31 €',
        spalte3: '1.085 € Netzstromkosten für die Wärmepumpe',
      },
      {
        spalte1: 'MK8 + Wärmepumpentarif',
        spalte2: '3.500 kWh × 0,21 €',
        spalte3: '735 € Netzstromkosten für die Wärmepumpe',
      },
      {
        spalte1: 'Tarifvorteil',
        spalte2: '350 € pro Jahr',
        spalte3: 'Vor zusätzlichen Fixkosten des zweiten Zählpunkts beziehungsweise Tarifs',
      },
      {
        spalte1: 'Nach 120 € Fixkosten',
        spalte2: 'ca. 230 € pro Jahr',
        spalte3: 'Beispielhafter verbleibender Vorteil – bei gleichzeitig weiterhin 30 % PV-Deckung',
      },
    ]),

    p(
      t('Das Entscheidende an diesem Vergleich: Die angenommene PV-Deckung ist in beiden Varianten gleich. Der wirtschaftliche Unterschied entsteht beim '),
      bold('verbleibenden Netzbezug'),
      t('. Genau deshalb kann ein separater Zähler trotz Photovoltaik sinnvoll sein, wenn die Kaskade richtig aufgebaut wird.'),
    ),

    hinweisBlock(
      'Die Wirtschaftlichkeit hängt nicht an einer pauschalen Verbrauchsgrenze',
      p(
        t('Als schnelle Näherung kann man den Break-even so rechnen: zusätzliche jährliche Fixkosten geteilt durch die Preisdifferenz zwischen Haushalts- und Wärmepumpentarif. Bei 120 € Fixkosten und 10 ct/kWh Preisvorteil liegt der Break-even bei etwa '),
        bold('1.200 kWh Wärmepumpen-Netzbezug pro Jahr'),
        t('. Liegt der tatsächliche Netzbezug deutlich darüber, wird der separate Tarif in diesem Beispiel zunehmend interessant. Ändern sich Tarifdifferenz oder Fixkosten, verschiebt sich die Grenze entsprechend.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann lohnt sich der separate Wärmepumpenzähler eher nicht?')),
      p(
        t('Wir würden einen zweiten Zähler nicht allein deshalb einbauen, weil es technisch möglich ist. Gegen einen separaten Wärmepumpentarif können beispielsweise sprechen:'),
      ),
      ul(
        p(t('ein sehr niedriger jährlicher Netzbezug der Wärmepumpe,')),
        p(t('nur eine kleine Preisdifferenz zwischen Haushalts- und Wärmepumpentarif,')),
        p(t('vergleichsweise hohe zusätzliche Messstellen- oder Tarifkosten,')),
        p(t('eine sehr hohe PV-Deckung, durch die nur noch wenig Wärmepumpenstrom aus dem Netz bezogen wird,')),
        p(t('oder ein Messkonzept beziehungsweise Zählerschrank, dessen Umbau wirtschaftlich unverhältnismäßig wäre.')),
      ),
      p(
        t('Deshalb rechnen wir nicht mit der pauschalen Aussage „zweiter Zähler lohnt immer", sondern mit dem realen Wärmepumpenverbrauch, dem erwarteten PV-Anteil, den verfügbaren Tarifen und den Kosten des Messkonzepts.'),
      ),
    ),

    textBlock(
      h('h2', t('Was passiert bei §14a mit meiner Photovoltaikanlage?')),
      p(
        t('Die Photovoltaikanlage selbst wird durch § 14a nicht gedrosselt. Die Regelung betrifft den '),
        bold('Strombezug aus dem öffentlichen Netz'),
        t(' steuerbarer Verbrauchseinrichtungen – nicht die PV-Einspeisung und nicht die Nutzung des eigenen Solarstroms.'),
      ),
      p(
        t('Das ist für PV-Wärmepumpen-Konzepte besonders wichtig: Eigener Solarstrom kann zusätzlich zur zulässigen Netzbezugsleistung genutzt werden. Bei einem Energiemanagementsystem können mehrere steuerbare Verbraucher außerdem koordiniert werden. Damit wird § 14a nicht zum Gegner von PV und Speicher, sondern zu einer weiteren Randbedingung, die ein gutes Energiesystem berücksichtigen sollte.'),
      ),
    ),

    textBlock(
      h('h2', t('Und was ist mit dem Heizstab?')),
      p(
        t('Elektrische Zusatz- und Notheizungen einer Wärmepumpe werden bei § 14a mit betrachtet. Das ist sinnvoll, denn gerade ein Heizstab kann mit mehreren Kilowatt elektrischer Leistung eine hohe Netzlast verursachen.'),
      ),
      p(
        t('Für die Praxis heißt das: Eine Wärmepumpe sollte nicht so geplant werden, dass sie regelmäßig auf einen großen Heizstabeinsatz angewiesen ist. Eine saubere Heizlastberechnung, passende Vorlauftemperaturen und eine vernünftige Auslegung sind nicht nur für die Jahresarbeitszahl wichtig, sondern auch für ein robustes Verhalten bei einer möglichen Netzsteuerung.'),
      ),
    ),

    textBlock(
      h('h2', t('Was gilt für Wärmepumpen von vor 2024?')),
      p(
        t('Bei Bestandsanlagen kommt es darauf an, wie sie vor dem 1. Januar 2024 betrieben wurden. Anlagen, für die bereits eine alte §14a-Steuerungsvereinbarung bestand, genießen grundsätzlich Übergangsregelungen bis Ende 2028 und werden anschließend in die neue Systematik überführt.'),
      ),
      p(
        t('Bestandsanlagen ohne eine solche Vereinbarung bleiben grundsätzlich außerhalb der verpflichtenden neuen Steuerung, können aber freiwillig wechseln. Wird eine alte Wärmepumpe durch eine neue Anlage ersetzt, gilt für die neue Wärmepumpe kein Bestandsschutz der alten Anlage.'),
      ),
    ),

    hinweisBlock(
      'Messkonzept 8 ist eine Westnetz-Bezeichnung',
      p(
        t('Die Nummerierung von Messkonzepten ist nicht bundesweit einheitlich. '),
        bold('MK8 bezeichnet hier ausdrücklich das aktuelle Westnetz-Messkonzept'),
        t(' für Erzeugungsanlage, Haushalt und unterbrechbare beziehungsweise steuerbare Verbrauchseinrichtung in Kaskade. Bei anderen Netzbetreibern kann dieselbe oder eine ähnliche Kaskadenlogik eine andere Nummer oder Bezeichnung haben. Das Messkonzept muss deshalb immer mit dem zuständigen Netzbetreiber abgestimmt werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Nicht „ein oder zwei Zähler?", sondern das Gesamtsystem betrachten')),
      p(
        t('Die Diskussion um § 14a wird häufig auf die Frage reduziert, ob der Netzbetreiber eine Wärmepumpe abschalten darf. Für die wirtschaftliche Planung ist aber eine andere Frage mindestens genauso wichtig: '),
        bold('Wie messen und versorgen wir Wärmepumpe, Haushalt und PV so, dass das Gesamtsystem sinnvoll arbeitet?'),
      ),
      p(
        t('Ein separater Wärmepumpenzähler kann sich bei einem attraktiven Wärmepumpentarif sehr wohl rechnen. Und mit einem passenden Kaskadenmesskonzept muss man dafür nicht auf den Solarstrom vom eigenen Dach verzichten. Im Westnetz-Gebiet ist Messkonzept 8 dafür ein sehr interessantes Werkzeug.'),
      ),
      p(
        t('Wir betrachten deshalb immer gemeinsam: Wärmepumpenverbrauch, PV-Erzeugung, möglichen PV-Deckungsanteil, Stromtarife, §14a-Modul, Messstellenkosten, vorhandenen Zählerschrank und gegebenenfalls Speicher und Energiemanagement. '),
        bold('Ein gutes Messkonzept ist kein Papierdetail – es entscheidet jedes Jahr mit über die Betriebskosten.'),
      ),
    ),

    ctaBlock({
      titel: 'Wärmepumpe, PV und Messkonzept gemeinsam planen',
      text:
        'Wir prüfen nicht nur die Wärmepumpe, sondern auch §14a, Zählerschrank, verfügbaren Wärmepumpentarif und die sinnvolle Einbindung deiner PV-Anlage. So wird aus einzelnen Komponenten ein stimmiges Energiesystem.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Darf der Netzbetreiber meine Wärmepumpe nach § 14a EnWG abschalten?',
      'Bei neuen steuerbaren Wärmepumpen darf der Netzbetreiber den Netzbezug bei einer konkreten Netzüberlastung temporär reduzieren. Bei einer üblichen einzelnen Anlage müssen grundsätzlich mindestens 4,2 kW elektrische Netzbezugsleistung verfügbar bleiben. Der normale Haushaltsstrom ist davon nicht betroffen.',
    ),
    faqItem(
      'Bedeutet die 4,2-kW-Grenze, dass meine Wärmepumpe nur noch 4,2 kW heizen kann?',
      'Nein. Die 4,2 kW beziehen sich auf die elektrische Bezugsleistung aus dem öffentlichen Netz, nicht auf die thermische Heizleistung. Zusätzlich kann eigener PV-Strom genutzt werden.',
    ),
    faqItem(
      'Brauche ich für § 14a zwingend einen separaten Wärmepumpenzähler?',
      'Nein. Modul 1 funktioniert grundsätzlich ohne separaten Zähler nur für die Wärmepumpe. Für Modul 2 ist dagegen eine separate Messung der steuerbaren Verbrauchseinrichtung erforderlich.',
    ),
    faqItem(
      'Kann meine Wärmepumpe mit einem separaten Zähler trotzdem PV-Strom nutzen?',
      'Ja, wenn das Messkonzept entsprechend aufgebaut ist. Bei einer Kaskadenmessung wie dem Westnetz Messkonzept 8 kann überschüssiger PV-Strom innerhalb der Kundenanlage zur Wärmepumpe fließen. Der verbleibende Netzbezug wird separat als Wärmepumpenstrom ermittelt.',
    ),
    faqItem(
      'Wie berechnet Westnetz beim Messkonzept 8 den Wärmepumpenverbrauch?',
      'Der Netzbezug der Wärmepumpe wird bei MK8 als Differenz aus dem Bezug des überlagerten Zählers Z1 und dem Bezug des Haushaltszählers Z2 ermittelt. Für Wärmepumpe und Haushalt sind separate Stromlieferverträge vorgesehen.',
    ),
    faqItem(
      'Ist ein Wärmepumpentarif von 21 Cent pro kWh garantiert?',
      'Nein. Rund 21 ct/kWh können je nach Anbieter, Netzgebiet und Zeitpunkt ein realistisch verfügbarer Wärmepumpentarif sein, sind aber kein gesetzlich garantierter Preis. Der konkrete Tarif muss vor Vertragsabschluss geprüft werden.',
    ),
    faqItem(
      'Wann lohnt sich ein zweiter Wärmepumpenzähler?',
      'Entscheidend sind der jährliche Netzbezug der Wärmepumpe, die Preisdifferenz zwischen Haushalts- und Wärmepumpentarif sowie zusätzliche Fix- und Messstellenkosten. Je höher Netzbezug und Tarifdifferenz, desto eher rechnet sich die separate Messung.',
    ),
    faqItem(
      'Ist Messkonzept 8 bundesweit gleich?',
      'Nein. MK8 ist in diesem Artikel die Bezeichnung des Westnetz-Messkonzepts. Andere Netzbetreiber können vergleichbare Kaskadenmessungen anders benennen oder andere technische Vorgaben haben.',
    ),
  ],
}

await upsertRatgeberArticle(article)
