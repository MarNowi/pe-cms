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
  titel: 'Stromspeicher: kW oder kWh? Warum Kapazität und Leistung zwei völlig verschiedene Dinge sind',
  slug: 'stromspeicher-kapazitaet-leistung-kw-kwh',
  kategorie: 'stromspeicher',
  status: 'veroeffentlicht',
  teaser:
    '10 kWh Speicher sind nicht automatisch 10 kW Leistung. Wer nur auf die Kapazität schaut, kann bei Wärmepumpe, Wallbox, Notstrom oder dynamischem Laden falsch planen. Wir erklären kW, kWh, C-Rate, Ladeleistung und Entladeleistung praxisnah.',
  lesezeit: 12,

  seo: seo(
    'Stromspeicher: kW vs. kWh einfach erklärt | PEAK.Energy',
    'Was bedeuten kW und kWh beim Stromspeicher? Kapazität, Ladeleistung, Entladeleistung, C-Rate und Praxisbeispiele für PV, Wärmepumpe und Notstrom.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Die Speicherkapazität in '),
      bold('kWh'),
      t(' sagt, wie viel Energie gespeichert werden kann. Die Leistung in '),
      bold('kW'),
      t(' sagt, wie schnell diese Energie geladen oder abgegeben werden kann.'),
    ),
    summaryPoint(
      t('Ein großer Speicher kann trotzdem eine relativ geringe Lade- oder Entladeleistung haben. Für hohe Lasten zählt deshalb nicht nur die Kapazität, sondern auch '),
      bold('Batterie-, Wechselrichter- und Systemleistung'),
      t('.'),
    ),
    summaryPoint(
      t('Für Eigenverbrauch reicht häufig eine moderate Leistung. Bei '),
      bold('Notstrom, Wärmepumpe, Wallbox, dynamischem Netzladen oder Lastspitzen'),
      t(' wird die Leistung deutlich wichtiger.'),
    ),
    summaryPoint(
      t('Die C-Rate beschreibt das Verhältnis aus Leistung und Kapazität. Ein 10-kWh-Speicher mit 5 kW Leistung arbeitet bei etwa 0,5 C.'),
    ),
    summaryPoint(
      t('Eine sinnvolle Speicherplanung betrachtet immer '),
      bold('Kapazität, Leistung, nutzbare Energie, Wechselrichter, Phasen, Notstromkonzept und Regelstrategie zusammen'),
      t('.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Der häufigste Denkfehler beim Stromspeicher')),
      p(
        t('Bei Batteriespeichern wird fast immer zuerst über Kilowattstunden gesprochen: 5 kWh, 10 kWh, 15 kWh. Das ist verständlich, denn die Kapazität lässt sich leicht mit dem Stromverbrauch vergleichen. Technisch ist sie aber nur die halbe Wahrheit.'),
      ),
      p(
        t('Ein Speicher kann viel Energie enthalten und sie trotzdem nur langsam abgeben. Umgekehrt kann ein kleinerer Speicher kurzfristig eine hohe Leistung liefern. Wer diese beiden Größen verwechselt, plant im schlimmsten Fall einen Speicher, der auf dem Papier groß aussieht, aber die gewünschten Verbraucher nicht versorgen kann.'),
      ),
    ),

    tabelleBlock('kWh und kW beim Stromspeicher', [
      {
        spalte1: 'Kapazität',
        spalte2: 'kWh',
        spalte3: 'Wie viel Energie kann gespeichert werden?',
      },
      {
        spalte1: 'Ladeleistung',
        spalte2: 'kW',
        spalte3: 'Wie schnell kann der Speicher Energie aufnehmen?',
      },
      {
        spalte1: 'Entladeleistung',
        spalte2: 'kW',
        spalte3: 'Wie viel Leistung kann der Speicher gleichzeitig abgeben?',
      },
      {
        spalte1: 'Nutzbare Kapazität',
        spalte2: 'kWh',
        spalte3: 'Welcher Teil der Bruttokapazität steht im Betrieb tatsächlich zur Verfügung?',
      },
      {
        spalte1: 'C-Rate',
        spalte2: '1/h',
        spalte3: 'Verhältnis zwischen Leistung und Speicherkapazität',
      },
    ]),

    textBlock(
      h('h2', t('Ein einfaches Beispiel: 10 kWh Speicher mit 5 kW Leistung')),
      p(
        t('Nehmen wir einen Speicher mit 10 kWh nutzbarer Kapazität und 5 kW maximaler Entladeleistung. Rein rechnerisch könnte er bei konstant 5 kW ungefähr zwei Stunden lang Energie liefern, bevor die 10 kWh verbraucht sind. In der Praxis kommen Wirkungsgrad, Leistungsgrenzen und Reservebereiche hinzu.'),
      ),
      p(
        t('Würde derselbe Speicher nur 2,5 kW abgeben können, hätte er immer noch 10 kWh Kapazität – aber für eine 6-kW-Last müsste der Rest der Leistung aus dem Netz kommen. Genau deshalb ist „10-kWh-Speicher“ keine vollständige technische Beschreibung.'),
      ),
    ),

    hinweisBlock(
      'Energie und Leistung nicht verwechseln',
      p(
        t('Eine Kilowattstunde beschreibt eine Energiemenge. Ein Kilowatt beschreibt Leistung zu einem bestimmten Zeitpunkt. Dasselbe Prinzip gilt beim Auto: Tankinhalt und Motorleistung sind zwei unterschiedliche Eigenschaften.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum die Ladeleistung bei Photovoltaik wichtig ist')),
      p(
        t('Ein Speicher soll PV-Überschuss aufnehmen, bevor er ins Netz eingespeist wird. Wenn die Solaranlage mittags 9 kW Überschuss erzeugt, der Speicher aber nur mit 3 kW laden kann, können maximal diese 3 kW in die Batterie fließen. Der restliche Überschuss wird weiterhin eingespeist oder anderweitig genutzt.'),
      ),
      p(
        t('Das ist nicht automatisch schlecht. Ein Einfamilienhaus braucht nicht zwingend eine Batterie, die jede kurze PV-Spitze vollständig schluckt. Entscheidend ist, welche Energiemengen über den Tag anfallen und wie häufig hohe Überschussleistung wirklich vorkommt.'),
      ),
      p(
        t('Die Frage nach der richtigen Größe behandeln wir deshalb separat im Artikel '),
        link('Wie groß sollte ein Stromspeicher sein?', '/stromspeicher/wie-gross-sollte-ein-stromspeicher-sein'),
        t('. Kapazität und Leistung müssen anschließend zusammenpassen.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum die Entladeleistung bei Wärmepumpe und Wallbox relevant wird')),
      p(
        t('Sobald größere elektrische Verbraucher ins Haus kommen, steigen die kurzzeitigen Leistungsanforderungen. Eine Wärmepumpe kann mehrere Kilowatt aufnehmen, eine Wallbox noch deutlich mehr. Dazu kommen Herd, Backofen, Durchlauferhitzer oder andere Verbraucher.'),
      ),
      p(
        t('Ein Speicher mit 3 kW Entladeleistung kann eine 11-kW-Wallbox nicht vollständig aus der Batterie versorgen. Das ist oft auch gar nicht sinnvoll. Aber man muss es vorher wissen. Ein gutes HEMS entscheidet dann beispielsweise, ob Netzbezug akzeptiert, die Wallbox gedrosselt oder ein anderer Verbraucher priorisiert wird.'),
      ),
    ),

    textBlock(
      h('h2', t('Notstrom: Hier wird Leistung oft wichtiger als Kapazität')),
      p(
        t('Im Ersatzstrom- oder Backupbetrieb verschiebt sich die Priorität. Jetzt zählt zuerst die Frage: Welche Geräte müssen gleichzeitig anlaufen und betrieben werden können? Ein Speicher mit 15 kWh Energie hilft wenig, wenn das Backup-System nur 3 kW liefern kann und eine notwendige Last beim Start deutlich mehr benötigt.'),
      ),
      p(
        t('Zusätzlich muss geprüft werden, ob das System ein- oder dreiphasig arbeitet, wie viel Leistung je Phase bereitsteht und ob hohe Anlaufströme zulässig sind. Mehr zu den grundsätzlichen Konzepten findest du unter '),
        link('Notstrom und Backup bei PV-Anlagen', '/stromspeicher/notstrom-backup'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bedeutet C-Rate?')),
      p(
        t('Die C-Rate beschreibt vereinfacht, wie schnell eine Batterie im Verhältnis zu ihrer Kapazität geladen oder entladen wird. Bei einem 10-kWh-Speicher bedeuten 5 kW ungefähr 0,5 C. 10 kW wären ungefähr 1 C.'),
      ),
      p(
        t('Eine hohe C-Rate ist nicht automatisch besser. Batteriezellen, Wechselrichter und Thermomanagement müssen darauf ausgelegt sein. Für einen Heimspeicher, der über Stunden PV-Energie verschiebt, kann eine moderate C-Rate völlig passend sein. Für Leistungsspitzen oder bestimmte Gewerbeanwendungen kann eine höhere Leistung entscheidend werden.'),
      ),
    ),

    tabelleBlock('Beispielhafte C-Rate bei 10 kWh nutzbarer Kapazität', [
      {
        spalte1: '2,5 kW',
        spalte2: '0,25 C',
        spalte3: 'rechnerisch rund 4 Stunden von voll bis leer',
      },
      {
        spalte1: '5 kW',
        spalte2: '0,5 C',
        spalte3: 'rechnerisch rund 2 Stunden',
      },
      {
        spalte1: '10 kW',
        spalte2: '1 C',
        spalte3: 'rechnerisch rund 1 Stunde',
      },
    ]),

    hinweisBlock(
      'Die C-Rate ist nur ein Vergleichswert',
      p(
        t('Aus der C-Rate allein lässt sich noch keine zulässige Dauerleistung ableiten. Herstellergrenzen, Temperatur, Ladezustand, Zellchemie und Wechselrichter können die tatsächlich verfügbare Leistung begrenzen.'),
      ),
    ),

    textBlock(
      h('h2', t('Der Wechselrichter kann zum Flaschenhals werden')),
      p(
        t('Bei einem Batteriesystem muss nicht nur die Batterie Leistung liefern können. Auch der Wechselrichter oder Hybridwechselrichter muss die Energie in der benötigten Leistung umsetzen. Deshalb lohnt ein Blick auf mindestens vier Werte:'),
      ),
      ul(
        p(t('maximale Batterieladeleistung,')),
        p(t('maximale Batterieentladeleistung,')),
        p(t('AC-Nennleistung des Wechselrichters,')),
        p(t('Leistung im Ersatzstrom- beziehungsweise Backupbetrieb.')),
      ),
      p(
        t('Diese Werte können voneinander abweichen. Ein System kann im normalen Netzparallelbetrieb eine andere Leistung bereitstellen als im Insel- oder Backupbetrieb.'),
      ),
    ),

    textBlock(
      h('h2', t('Dynamische Strompreise: Schnelles Laden kann wertvoll werden')),
      p(
        t('Wenn ein Speicher nicht nur PV-Überschuss nutzt, sondern gezielt bei günstigen Börsenpreisen aus dem Netz lädt, bekommt die Ladeleistung eine zusätzliche Bedeutung. Ein günstiges Zeitfenster kann kurz sein. Je höher die nutzbare Ladeleistung, desto mehr Energie kann innerhalb dieses Fensters aufgenommen werden.'),
      ),
      p(
        t('Das bedeutet trotzdem nicht, dass maximale Leistung immer wirtschaftlich ist. Höhere Leistung kann größere Wechselrichter, stärkere Anschlusskomponenten oder andere technische Anforderungen bedeuten. Entscheidend ist der reale Mehrwert gegenüber den Mehrkosten.'),
      ),
      p(
        t('Dazu passt unser Ratgeber '),
        link('Stromspeicher aus dem Netz laden: Wann dynamisches Laden sinnvoll ist', '/strom-energiemanagement/stromspeicher-aus-netz-laden-dynamisch-sinnvoll'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('So planen wir einen Speicher sinnvoll')),
      p(
        t('Wir würden einen Speicher nie nur mit „Jahresverbrauch geteilt durch 365“ dimensionieren. Für die Kapazität betrachten wir Verbrauchsprofil, PV-Erzeugung, Nachtbedarf und zukünftige Verbraucher. Für die Leistung schauen wir auf Lastspitzen, gewünschte Backup-Funktion, Wechselrichter, Wallbox, Wärmepumpe und Regelstrategie.'),
      ),
      p(
        t('Gerade bei modularen Batteriesystemen kann es außerdem vorkommen, dass mit zusätzlichen Batteriemodulen nicht nur die Kapazität steigt, sondern sich auch zulässige Ströme und damit Systemleistung verändern. Das muss immer anhand des konkreten Systems geprüft werden.'),
      ),
    ),

    tippBlock(
      'Nicht nach der größten Zahl im Datenblatt kaufen',
      p(
        t('Ein Speicher ist gut dimensioniert, wenn seine Energie und Leistung zu deinem Haus passen. Mehr kWh oder mehr kW sind nicht automatisch besser – ungenutzte Kapazität und unnötig hohe Leistung müssen ebenfalls bezahlt werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Der passende Speicher braucht zwei Dimensionen')),
      p(
        t('Kapazität beantwortet die Frage '),
        bold('„Wie lange?“'),
        t(' Leistung beantwortet die Frage '),
        bold('„Wie viel gleichzeitig?“'),
        t('. Erst beide Werte zusammen sagen, was ein Stromspeicher im Alltag wirklich kann.'),
      ),
      p(
        t('Für eine einfache PV-Eigenverbrauchsoptimierung kann ein System mit moderater Leistung perfekt passen. Sobald Wärmepumpe, E-Auto, Notstrom oder dynamische Tarife hinzukommen, wird die Leistungsseite wichtiger. Genau deshalb gehört sie in die Planung – und nicht erst in die Bedienungsanleitung nach der Montage.'),
      ),
    ),

    ctaBlock({
      titel: 'Speicher nach Haus statt nach Prospekt planen',
      text:
        'Wir dimensionieren Kapazität und Leistung gemeinsam mit PV, Wechselrichter, Wärmepumpe, Wallbox und Energiemanagement. So passt das System auch dann noch, wenn sich dein Energieverbrauch verändert.',
      buttonText: 'Stromspeicher anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist beim Stromspeicher wichtiger: kW oder kWh?',
      'Beides. kWh beschreibt die gespeicherte Energiemenge, kW die Lade- oder Entladeleistung. Für Laufzeit zählt die Kapazität, für gleichzeitig versorgbare Lasten die Leistung.',
    ),
    faqItem(
      'Kann ein 10-kWh-Speicher 10 kW liefern?',
      'Nicht automatisch. Die maximale Leistung hängt vom Batteriesystem und Wechselrichter ab. Ein 10-kWh-Speicher kann beispielsweise nur 5 kW oder auch eine andere Leistung bereitstellen.',
    ),
    faqItem(
      'Was bedeutet 0,5 C bei einer Batterie?',
      '0,5 C bedeutet vereinfacht, dass die Leistung der Hälfte der Batteriekapazität pro Stunde entspricht. Bei 10 kWh wären das etwa 5 kW.',
    ),
    faqItem(
      'Wie viel Leistung braucht ein Heimspeicher?',
      'Das hängt von den Verbrauchern und Zielen ab. Für Eigenverbrauch kann eine moderate Leistung reichen. Für Backup, Wärmepumpe, Wallbox oder dynamisches Laden kann mehr Leistung sinnvoll sein.',
    ),
    faqItem(
      'Ist hohe Ladeleistung bei dynamischem Stromtarif sinnvoll?',
      'Sie kann hilfreich sein, weil kurze günstige Preisfenster besser genutzt werden können. Ob sich die höhere Leistung wirtschaftlich lohnt, hängt aber vom Tarif, Speicher, Anschluss und Nutzungsmuster ab.',
    ),
  ],
}

await upsertRatgeberArticle(article)
