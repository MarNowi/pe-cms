// MiSpeL-Festlegung der Bundesnetzagentur vom 01.10.2026
// Artikel-Import: node scripts/ratgeber/mispel-2026-batteriespeicher-photovoltaik.mjs

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
  titel: 'MiSpeL beschlossen: Was sich für Photovoltaik, Batteriespeicher und E-Autos ändert',
  slug: 'mispel-2026-batteriespeicher-photovoltaik',
  kategorie: 'strom-energiemanagement',
  cluster: 'em-netz',
  status: 'veroeffentlicht',
  teaser:
    'Die Bundesnetzagentur hat MiSpeL am 1. Oktober 2026 beschlossen. Damit soll die Verbindung von Solarstrom, Netzstrom, Batteriespeichern und bidirektionalen Ladepunkten einfacher werden. Was die Abgrenzungs- und Pauschaloption bedeuten, welche Hürden bleiben und für wen sich das lohnt.',
  lesezeit: 11,
  seo: seo(
    'MiSpeL 2026: Neue Regeln für PV und Batteriespeicher | PEAK.Energy',
    'MiSpeL ist beschlossen: Das ändert sich für Photovoltaik, Batteriespeicher, Netzladen, Direktvermarktung und bidirektionales Laden. Mit Fristen und Beispielen.',
  ),
  zusammenfassung: [
    summaryPoint(
      t('Die Bundesnetzagentur hat die '),
      bold('MiSpeL-Festlegung am 1. Oktober 2026 beschlossen'),
      t('. Es handelt sich nicht mehr nur um einen Entwurf.'),
    ),
    summaryPoint(
      t('MiSpeL erleichtert es, '),
      bold('Solarstrom und Netzstrom im selben Speicher'),
      t(' beziehungsweise in einem bidirektionalen Ladepunkt zu nutzen und die Strommengen regulatorisch korrekt zuzuordnen.'),
    ),
    summaryPoint(
      t('Es gibt zwei neue Modelle: die '),
      bold('Abgrenzungsoption mit Viertelstundenwerten'),
      t(' und die '),
      bold('Pauschaloption für Solaranlagen bis 30 kWp'),
      t('.'),
    ),
    summaryPoint(
      t('Bis Ende September 2027 ist eine frühere Anwendung nur mit Einverständnis von '),
      bold('Netz- und Messstellenbetreiber'),
      t(' möglich. Für die Pauschaloption steht zusätzlich die EU-beihilferechtliche Genehmigung noch aus.'),
    ),
    summaryPoint(
      t('Die Regelung eröffnet neue Vermarktungsmodelle. Sie macht aber '),
      bold('nicht jeden Heimspeicher automatisch zum profitablen Stromhändler'),
      t('. Messkonzept, Direktvermarktung, Speicherverluste und Kosten müssen zusammenpassen.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('MiSpeL 2026: Warum der Beschluss wichtig ist')),
      p(
        t('Dein Batteriespeicher lädt tagsüber Solarstrom und versorgt abends das Haus. Was wäre, wenn er zusätzlich günstigen Strom aus dem Netz aufnehmen und zu einem passenden Zeitpunkt wieder abgeben könnte – ohne dass die Förderfähigkeit des zuordenbaren Solarstroms im gemischten Speicher grundsätzlich verloren geht?'),
      ),
      p(
        t('Genau dafür schafft MiSpeL neue Spielräume. Am 1. Oktober 2026 hat die Bundesnetzagentur die '),
        bold('Festlegung zur Marktintegration von Speichern und Ladepunkten (MiSpeL)'),
        t(' beschlossen. Sie betrifft private PV-Anlagen ebenso wie Gewerbespeicher und bidirektionale Ladepunkte für Elektroautos.'),
      ),
      p(
        t('Wichtig ist die Unterscheidung zwischen '),
        bold('rechtlich beschlossen'),
        t(' und '),
        bold('im konkreten Kundenprojekt schon nutzbar'),
        t('. Die Festlegung ist da. Technische Messkonzepte, Prozesse bei Netzbetreibern und geeignete Vermarktungsangebote müssen aber ebenfalls vorhanden sein.'),
      ),
    ),
    hinweisBlock(
      'Stand: 9. Oktober 2026 – beschlossen, aber noch nicht flächendeckend umgesetzt',
      p(
        t('Die Bundesnetzagentur hat MiSpeL am 01.10.2026 veröffentlicht. Für die Umsetzung bei Netz- und Messstellenbetreibern gilt eine Übergangszeit bis Ende September 2027. In dieser Zeit ist die vorzeitige Anwendung nur mit deren Einverständnis möglich. Die Pauschaloption benötigt darüber hinaus die beihilferechtliche Genehmigung der gesetzlichen Grundlage durch die EU-Kommission.'),
      ),
    ),
    textBlock(
      h('h2', t('Was war bisher das Problem mit Netzstrom und Solarstrom im Speicher?')),
      p(
        t('Die klassische Betriebsweise eines PV-Heimspeichers ist einfach: Solarstrom laden, später selbst nutzen und mögliche Überschüsse einspeisen. Schwieriger wird es, wenn derselbe Speicher auch Netzstrom aufnimmt und anschließend wieder Strom ins öffentliche Netz einspeist.'),
      ),
      p(
        t('Unter der bisherigen '),
        bold('Ausschließlichkeitsoption'),
        t(' ist die Förderung der Speichereinspeisung nur unter engen Voraussetzungen möglich: Der Speicher muss ausschließlich erneuerbare Energie zur Einspeicherung verwenden. Mischbetrieb mit Netzstrom führt unter dieser Option zum Wegfall der Förderfähigkeit der Netzeinspeisung aus dem Speicher.'),
      ),
      p(
        t('MiSpeL eröffnet mit der Abgrenzungs- und Pauschaloption zwei zusätzliche Wege. Damit können förderfähige erneuerbare Strommengen und zuvor aus dem Netz bezogene Strommengen rechnerisch abgegrenzt werden. Die bisherige Ausschließlichkeitsoption bleibt daneben bestehen.'),
      ),
      p(
        t('Das bedeutet '),
        bold('nicht'),
        t(', dass beliebiger Netzstrom plötzlich als Solarstrom vergütet würde. Entscheidend ist gerade die saubere Zuordnung der verschiedenen Strommengen.'),
      ),
    ),
    textBlock(
      h('h2', t('Was ändert sich durch MiSpeL konkret?')),
      p(
        bold('Netzstrom flexibler speichern: '),
        t('Batteriespeicher können im passenden Betriebskonzept günstige Tarifzeiten zum Laden nutzen. Die neue MiSpeL-Systematik ermöglicht dabei auch die Einbindung in Modelle mit förderfähiger Einspeisung von zwischengespeichertem erneuerbarem Strom. '),
        link('Wann Netzladen wirtschaftlich sein kann', '/strom-energiemanagement/stromspeicher-aus-netz-laden-dynamisch-sinnvoll'),
        t(', ist eine separate Frage.'),
      ),
      p(
        bold('Einspeisung marktgerecht verschieben: '),
        t('Anstatt erneuerbaren Strom sofort einzuspeisen, kann ein Speicher bei entsprechendem Vermarktungsmodell die Einspeisung zeitlich verlagern. Das setzt einen passenden Direktvermarktungsvertrag und die technische Steuerbarkeit voraus.'),
      ),
      p(
        bold('Bidirektionale Ladepunkte einbeziehen: '),
        t('Auch ein geeignetes E-Auto kann Energie aufnehmen und wieder abgeben. Mit Vehicle-to-Grid (V2G) kann diese Energie ins öffentliche Netz zurückfließen. MiSpeL berücksichtigt solche Ladepunkte bei den Regeln zur Strommengenabgrenzung. Mehr zu '),
        link('bidirektionalem Laden', '/wallbox/bidirektionales-laden'),
        t('.'),
      ),
      p(
        bold('Netzstrom-Rückspeisung abgrenzen: '),
        t('Für zuvor aus dem Netz bezogene und später zurückgespeiste Strommengen können unter den gesetzlichen Bedingungen Vorteile bei der Saldierung von Umlagen und weiteren Entgeltbestandteilen entstehen. Die Regeln sind kein pauschaler Erlass sämtlicher Netzkosten.'),
      ),
    ),
    textBlock(
      h('h2', t('Abgrenzungsoption oder Pauschaloption: Wo liegt der Unterschied?')),
      p(
        t('Die Bundesnetzagentur hat zwei Modelle festgelegt, damit förderfähige Strommengen aus erneuerbaren Energien und die Rückspeisung von Netzstrom nachvollziehbar bleiben.'),
      ),
    ),
    tabelleBlock('Die beiden MiSpeL-Optionen im Überblick', [
      {
        spalte1: 'Abgrenzungsoption',
        spalte2: 'Viertelstündliche Messwerte und rechnerische Abgrenzung; in der Regel zwei Zähler, in Sonderfällen einer',
        spalte3: 'Für private, gewerbliche und industrielle Konstellationen grundsätzlich offen',
      },
      {
        spalte1: 'Pauschaloption',
        spalte2: 'Vereinfachte Zuordnung mit gesetzlichen Pauschalen; grundsätzlich ein geeigneter Zähler',
        spalte3: 'Für passende Solaranlagen bis insgesamt 30 kWp hinter einer Einspeisestelle; EU-Genehmigung abwarten',
      },
    ]),
    textBlock(
      h('h3', t('Abgrenzungsoption: genauere Messung, mehr Möglichkeiten')),
      p(
        t('Bei der Abgrenzungsoption werden die relevanten Energiemengen anhand viertelstündlicher Messwerte bestimmt. Damit lässt sich genauer zuordnen, welche Netzeinspeisung aus erneuerbarer Energie stammt und welche Mengen auf zuvor bezogenen Netzstrom zurückgehen.'),
      ),
      p(
        t('Die Formeln sehen im Regelfall zwei Zähler vor; bestimmte Sonderkonstellationen kommen mit einem aus. Für größere Speicher, gewerbliche Anlagen und anspruchsvollere Vermarktungsmodelle kann diese Genauigkeit wichtig sein.'),
      ),
    ),
    textBlock(
      h('h3', t('Pauschaloption: einfacher, aber nicht grenzenlos')),
      p(
        t('Die Pauschaloption ist vor allem für kleinere Anlagen gedacht. Sie vereinfacht die Zuordnung bei Solaranlagen mit insgesamt höchstens 30 kWp hinter einer Einspeisestelle. Die gesetzliche Pauschale begrenzt die grundsätzlich förderfähige Einspeisemenge auf '),
        bold('500 kWh pro installiertem kWp und Kalenderjahr'),
        t('.'),
      ),
      p(
        t('Beispiel: Bei einer PV-Anlage mit 10 kWp liegt diese rechnerische Grenze bei 5.000 kWh pro Kalenderjahr. Das ist '),
        bold('keine'),
        t(' Zusage, dass jede dieser Kilowattstunden eine Marktprämie erhält. Entscheidend sind zusätzlich die gesetzlichen Voraussetzungen, die tatsächlich eingespeiste Strommenge und das gewählte Vermarktungsmodell.'),
      ),
      p(
        t('Wer deutlich mehr Strom einspeist oder ein komplexes Anlagenkonzept betreibt, sollte die Abgrenzungsoption mitprüfen. Die Pauschaloption ist außerdem erst nutzbar, wenn die ausstehende beihilferechtliche Genehmigung vorliegt.'),
      ),
    ),
    textBlock(
      h('h2', t('Kann ich mit meinem Speicher jetzt Strom einkaufen und teurer verkaufen?')),
      p(
        t('Technisch ist das Prinzip nachvollziehbar: günstig Strom einkaufen, speichern und bei hohen Marktpreisen wieder ins Netz einspeisen. Aber '),
        bold('MiSpeL ist keine automatische Handelsfreigabe für jeden bestehenden Speicher'),
        t('.'),
      ),
      p(
        t('Für eine wirtschaftliche Marktteilnahme zählen unter anderem der verfügbare Stromtarif, der Direktvermarkter, das Messkonzept, die Freigaben, die anrechenbaren Energiemengen, die Batteriegarantie, die Systemverluste sowie Gebühren und Abgaben. Auch technische Beschränkungen durch den Netzanschluss bleiben zu beachten.'),
      ),
      p(
        t('Nicht zu verwechseln: '),
        bold('Netzstrom günstig laden und später den eigenen Hausbezug vermeiden'),
        t(' ist etwas anderes als '),
        bold('Strom aktiv in den Markt zurückverkaufen'),
        t('. Für Letzteres brauchst du ein geeignetes Vermarktungs- und Messmodell. Die unter MiSpeL mögliche EEG-Förderung betrifft die Marktprämie in der geförderten Direktvermarktung und ist nicht einfach die klassische feste Einspeisevergütung.'),
      ),
      p(
        t('Wenn dich vor allem die Nutzung von '),
        link('dynamischen Stromtarifen mit PV und Speicher', '/strom-energiemanagement/dynamischer-stromtarif-pv-speicher-lohnt-sich'),
        t(' interessiert, müssen daher nicht zwangsläufig alle MiSpeL-Funktionen aktiviert werden.'),
      ),
    ),
    textBlock(
      h('h2', t('Ab wann gilt MiSpeL für bestehende Anlagen?')),
      p(
        t('Die Festlegung wurde am 1. Oktober 2026 beschlossen. Für die technische und organisatorische Umsetzung bei Netz- und Messstellenbetreibern läuft eine Übergangszeit bis zum '),
        bold('30. September 2027'),
        t('. Schon vorher kann die Anwendung möglich sein, wenn die zuständigen Betreiber zustimmen.'),
      ),
      p(
        t('Für die Pauschaloption besteht zusätzlich eine weitere Voraussetzung: die beihilferechtliche Genehmigung durch die Europäische Kommission. Solange sie fehlt, darf diese Option nicht einfach verwendet werden.'),
      ),
      p(
        t('Wer bereits eine PV-Anlage mit Speicher betreibt, sollte vor Änderungen an Netzlade- oder Einspeiseparametern den Installationsbetrieb, den Netzbetreiber und gegebenenfalls den Direktvermarkter einbeziehen. Ein Software-Schalter ersetzt kein genehmigungsfähiges Mess- und Betriebskonzept.'),
      ),
    ),
    textBlock(
      h('h2', t('MiSpeL im Gewerbe: ein Baustein für Multi-Use und Batteriespeicher')),
      p(
        t('Für Unternehmen kann MiSpeL besonders interessant werden, weil ein Batteriespeicher oft mehrere Aufgaben erfüllen soll: Solarstrom nutzen, Lastspitzen begrenzen, günstige Preisphasen mitnehmen und bei geeigneter Konstellation Energie vermarkten.'),
      ),
      p(
        t('Diese Aufgaben konkurrieren teilweise miteinander. Eine Batterie, die zur Vermeidung einer kritischen Lastspitze gebraucht wird, kann ihren Ladezustand nicht vollständig für einen kurzfristigen Stromhandel einsetzen. Ein Energiemanagement muss die Anwendungsfälle koordinieren.'),
      ),
      p(
        t('Das nennen wir '),
        link('Multi-Use bei Stromspeichern', '/stromspeicher/multi-use-stromspeicher'),
        t('. Bei größeren Gewerbeanlagen gehören auch '),
        link('Peak Shaving und Lastgangdaten', '/stromspeicher/lastspitzenkappung-stromspeicher-gewerbe'),
        t(' in die Bewertung. MiSpeL erweitert hier die regulatorischen Möglichkeiten, ersetzt aber keine belastbare Simulation der Betriebsstrategien.'),
      ),
    ),
    textBlock(
      h('h2', t('Warum ein intelligentes Energiemanagement immer wichtiger wird')),
      p(
        t('Je flexibler ein Energiesystem wird, desto mehr Entscheidungen müssen im richtigen Moment getroffen werden: Soll die Batterie Solarstrom aufnehmen, den Hausverbrauch decken, Reserve vorhalten oder auf ein Marktpreissignal reagieren?'),
      ),
      p(
        t('Ein geeignetes HEMS berücksichtigt beispielsweise Strompreise, PV-Prognose, Eigenverbrauch, Batteriezustand, gewünschte Ladeziele für Elektroautos und die technischen Grenzen des Netzanschlusses.'),
      ),
      p(
        t('Bei PEAK.Energy achten wir deshalb nicht nur auf einzelne Geräte, sondern auf die Frage, ob sie sich '),
        bold('als Gesamtsystem sinnvoll, wirtschaftlich und möglichst offen steuern'),
        t(' lassen. Ein Speicher soll nicht möglichst viele Zyklen fahren, sondern einen erkennbaren Nutzen schaffen.'),
      ),
    ),
    tippBlock(
      'Was wir dir vor einer MiSpeL-Umstellung empfehlen',
      p(
        t('Prüfe zuerst den aktuellen Einspeise- und Direktvermarktungsvertrag, dann die Möglichkeiten von Wechselrichter, Speicher und Zählern. Erst danach solltest du entscheiden, ob ein Wechsel des Fördermodells und eine neue Betriebsstrategie voraussichtlich Geld sparen oder zusätzliche Erträge erwirtschaften.'),
      ),
    ),
    textBlock(
      h('h2', t('Fazit: Mehr Freiheit für Speicher – aber nicht ohne Planung')),
      p(
        t('Mit dem MiSpeL-Beschluss wird der rechtliche Rahmen für den gemeinsamen Einsatz von Solarstrom, Netzstrom, Batteriespeichern und bidirektionalen Ladepunkten deutlich flexibler. Damit können sich neue Möglichkeiten für Eigenverbrauch, zeitlich optimierte Einspeisung und Marktteilnahme eröffnen.'),
      ),
      p(
        t('Die Festlegung allein verwandelt aber keinen Speicher in eine Gelddruckmaschine. Entscheidend sind '),
        bold('eine saubere Messung, das passende Vermarktungsmodell und eine intelligente Steuerung'),
        t('. Wer jetzt neu plant, sollte diese Optionen mitdenken. Wer bereits eine Anlage betreibt, sollte nicht vorschnell umstellen.'),
      ),
      p(
        t('Offizielle Quelle: '),
        link('Bundesnetzagentur – MiSpeL-Festlegung vom 1. Oktober 2026', 'https://www.bundesnetzagentur.de/1067830', { newTab: true }),
        t('.'),
      ),
    ),
    ctaBlock({
      titel: 'Ist deine PV-Anlage oder dein Speicher bereit für die nächsten Energiemärkte?',
      text: 'Wir prüfen mit dir, welche Mess-, Speicher- und Energiemanagementlösung zu deinem Gebäude oder Gewerbebetrieb passt – ohne unrealistische Renditeversprechen.',
      buttonText: 'Energiekonzept anfragen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Was bedeutet MiSpeL?',
      'MiSpeL steht für Marktintegration von Speichern und Ladepunkten. Die Bundesnetzagentur hat die Festlegung am 1. Oktober 2026 beschlossen. Sie eröffnet neue Möglichkeiten zur Abgrenzung von Strommengen bei gemischt geladenen Speichern und bidirektionalen Ladepunkten.',
    ),
    faqItem(
      'Ist MiSpeL schon in Kraft?',
      'Die Festlegung wurde am 1. Oktober 2026 beschlossen. Bis Ende September 2027 läuft eine Übergangszeit bei Netz- und Messstellenbetreibern; eine frühere Anwendung ist nur mit deren Einverständnis möglich. Für die Pauschaloption wird zusätzlich die EU-beihilferechtliche Genehmigung benötigt.',
    ),
    faqItem(
      'Darf mein Batteriespeicher dann PV- und Netzstrom mischen?',
      'Unter den neuen MiSpeL-Optionen ist ein Mischbetrieb grundsätzlich vorgesehen. Welche Einspeisung förderfähig und welche Rückspeisung saldierungsfähig ist, muss nach dem gewählten Modell korrekt bestimmt werden. Die technische und vertragliche Umsetzung bleibt entscheidend.',
    ),
    faqItem(
      'Gilt MiSpeL auch für mein Elektroauto?',
      'Ja, geeignete bidirektionale Ladepunkte können in die neuen Modelle einbezogen werden. Das setzt ein kompatibles Fahrzeug, Ladehardware, Messkonzept und einen geeigneten Betriebs- beziehungsweise Vermarktungsprozess voraus.',
    ),
    faqItem(
      'Was unterscheidet Abgrenzungs- und Pauschaloption?',
      'Bei der Abgrenzungsoption werden förder- und saldierungsfähige Strommengen auf Basis viertelstündlicher Messwerte genauer ermittelt. Die Pauschaloption vereinfacht das bei passenden Solaranlagen bis 30 kWp, begrenzt aber die grundsätzlich förderfähige Menge auf 500 kWh je kWp und Kalenderjahr.',
    ),
    faqItem(
      'Bekomme ich weiterhin meine feste Einspeisevergütung?',
      'Die neue MiSpeL-Förderlogik bezieht sich auf die geförderte Direktvermarktung mit Marktprämie. Sie ist nicht automatisch mit der klassischen festen Einspeisevergütung gleichzusetzen. Für Bestandsanlagen muss ein Wechsel gesondert geprüft werden.',
    ),
    faqItem(
      'Lohnt sich MiSpeL finanziell?',
      'Das hängt von Strompreisen, Tarifen, Mess- und Vermarktungskosten, Speicherverlusten, Batteriealterung und den technischen Möglichkeiten ab. Eine allgemeingültige Ertragszusage wäre unseriös.',
    ),
  ],
}

await upsertRatgeberArticle(article)
