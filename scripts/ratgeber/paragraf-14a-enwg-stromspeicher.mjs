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
  titel: '§14a EnWG für Stromspeicher: Was die Pflicht zur Steuerbarkeit bedeutet',
  slug: 'paragraf-14a-enwg-stromspeicher',
  kategorie: 'stromspeicher',
  status: 'veroeffentlicht',
  teaser:
    'Seit 2024 müssen neue Stromspeicher unter bestimmten Voraussetzungen steuerbar an den Netzbetreiber angeschlossen werden. Was das im Alltag bedeutet, welche Speicher betroffen sind, welche nicht – und welche Module zur Netzentgeltreduzierung gewählt werden können.',
  lesezeit: 10,

  seo: seo(
    '§14a EnWG Stromspeicher: Steuerbarkeit erklärt | PEAK.Energy',
    '§14a EnWG für Stromspeicher: Wann ein Speicher als steuerbare Verbrauchseinrichtung gilt, was Modul 1 bis 3 bedeuten und was die Steuerung im Alltag wirklich heißt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('§14a EnWG ist seit 1. Januar 2024 in Kraft. Neue Stromspeicher gelten als '),
      bold('steuerbare Verbrauchseinrichtung (SteuVE)'),
      t(', wenn sie aus dem Netz Strom beziehen und ihre Bezugsleistung über 4,2 kW liegt.'),
    ),
    summaryPoint(
      t('Speicher, die '),
      bold('ausschließlich PV-Strom speichern'),
      t(' (kein Netzbezug), fallen nicht unter §14a – das ist eine wichtige technische Unterscheidung, die oft übersehen wird.'),
    ),
    summaryPoint(
      t('Im Gegenzug zur Steuerbarkeit gibt es eine '),
      bold('Netzentgeltreduzierung'),
      t(' – wahlweise als jährliche Pauschale (Modul 1, ca. 110–190 € je nach Netzbetreiber), als prozentuale Reduzierung (Modul 2) oder als zeitvariables Netzentgelt (Modul 3).'),
    ),
    summaryPoint(
      t('Bestandsanlagen, die vor dem 1. Januar 2024 in Betrieb genommen wurden, haben Bestandsschutz.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('Mit der Energiewende wachsen die Lasten im Niederspannungsnetz: Wärmepumpen, Wallboxen, Klimaanlagen und Stromspeicher kommen in Häuser, die bisher nur Lampen, Kühlschrank und ein paar Steckdosen versorgt haben. Wenn alle diese Geräte gleichzeitig hohe Leistung beziehen, kann das in einzelnen Straßenzügen das lokale Verteilnetz überlasten.'),
      ),
      p(
        t('Damit der Netzausbau nicht jeden neuen Anschluss verzögert, hat der Gesetzgeber mit '),
        bold('§14a EnWG'),
        t(' einen Kompromiss geschaffen. Bestimmte Geräte werden steuerbar gemacht – das heißt, der Netzbetreiber kann sie in seltenen Engpasssituationen vorübergehend in der Bezugsleistung drosseln. Im Gegenzug dürfen Anschlüsse für solche Geräte nicht mehr aus Netzgründen verzögert oder abgelehnt werden, und die Betreiber bekommen reduzierte Netzentgelte.'),
      ),
      p(
        t('Die Regelung gilt seit 1. Januar 2024 verpflichtend für alle neu in Betrieb genommenen steuerbaren Verbrauchseinrichtungen. Dazu zählen Wärmepumpen, private Ladeeinrichtungen, fest installierte Klimaanlagen – und unter bestimmten Voraussetzungen Stromspeicher.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann ein Stromspeicher als SteuVE gilt')),
      p(
        t('Ein Stromspeicher fällt unter §14a EnWG, wenn '),
        bold('zwei Bedingungen gleichzeitig erfüllt'),
        t(' sind.'),
      ),
      ul(
        p(
          bold('1. Der Speicher kann aus dem öffentlichen Netz geladen werden.'),
          t(' Reine PV-Speicher, die ausschließlich Solarstrom speichern und keine Möglichkeit haben, Strom aus dem Netz aufzunehmen, sind keine steuerbaren Verbrauchseinrichtungen im Sinne von §14a.'),
        ),
        p(
          bold('2. Die Bezugsleistung des Speichers (Ladeleistung) liegt über 4,2 kW.'),
          t(' Bei kleineren Speichern unter dieser Schwelle gilt die Regelung nicht. Wichtig dabei: Es geht um die Ladeleistung in kW, nicht um die Speicherkapazität in kWh.'),
        ),
      ),
      p(
        t('Das bedeutet in der Praxis: '),
        bold('Die meisten modernen Hybrid-Wechselrichter mit Speicher sind so ausgelegt, dass sie auch Netzstrom aufnehmen können'),
        t(' – etwa für die Vorkonditionierung des Speichers oder bei dynamischen Tarifen. Damit fallen sie unter §14a, sobald die Ladeleistung über 4,2 kW liegt. Das ist bei den meisten 10-kWh-Speichern und größer der Fall.'),
      ),
      p(
        t('Für Bestandsanlagen, die vor dem 1. Januar 2024 in Betrieb genommen wurden, gibt es Bestandsschutz. Sie müssen nicht nachgerüstet werden, können aber auf Wunsch des Betreibers in das neue Modell überführt werden.'),
      ),
    ),

    hinweisBlock(
      'Reine PV-Speicher fallen nicht unter §14a',
      p(
        t('Wenn der Speicher technisch so eingerichtet ist, dass er ausschließlich PV-Überschussstrom aufnimmt und kein Netzbezug zum Laden möglich ist, ist er keine steuerbare Verbrauchseinrichtung. Das schließt Notstromfunktion und Eigenverbrauchsoptimierung nicht aus – nur das aktive Beziehen aus dem Netz. Diese Konfiguration wird seltener, weil moderne Energiemanagement-Systeme den Netzbezug als zusätzliche Option behalten möchten.'),
      ),
    ),

    textBlock(
      h('h2', t('Was Steuerbarkeit in der Praxis bedeutet')),
      p(
        t('Wenn ein Speicher unter §14a fällt, muss er '),
        bold('für den Netzbetreiber drosselbar'),
        t(' sein. Das heißt: Bei einer drohenden Netzüberlastung kann der Verteilnetzbetreiber die Bezugsleistung des Speichers temporär auf eine Mindestleistung von 4,2 kW absenken. Vollständig abgeschaltet werden darf der Speicher nicht – diese Mindestleistung bleibt jederzeit verfügbar.'),
      ),
      p(
        t('Wichtig: '),
        bold('Die Drosselung betrifft nur den Netzbezug, nicht die Einspeisung'),
        t('. Der Speicher kann weiter aus PV laden, kann den Hausverbrauch versorgen und kann auch ins Netz einspeisen. Eingegriffen wird nur, wenn der Speicher Strom '),
        bold('aus'),
        t(' dem Netz beziehen will.'),
      ),
      p(
        t('In der Praxis wird die netzorientierte Steuerung selten zum Tragen kommen. Sie ist als Vorsorgeinstrument für absolute Engpasssituationen gedacht – nicht als Standardbetrieb. Wer einen 10-kWh-Speicher hat und ihn ohnehin überwiegend aus PV lädt, wird im Alltag kaum etwas davon merken.'),
      ),
    ),

    textBlock(
      h('h2', t('Module 1, 2 und 3: Welche Netzentgeltreduzierung möglich ist')),
      p(
        t('Im Gegenzug zur Steuerbarkeit gibt es eine Netzentgeltreduzierung. Der Betreiber kann zwischen drei Modulen wählen.'),
      ),
      p(
        bold('Modul 1 – Pauschale Netzentgeltreduzierung'),
        t(' ist der Grundfall. Es gibt jährlich eine pauschale Gutschrift, die je nach Netzbetreiber zwischen rund 110 € und 190 € (brutto) liegt. Diese wird auf das tatsächlich abgerechnete Netzentgelt angerechnet. Modul 1 ist die Standardvariante und greift, wenn der Betreiber nicht aktiv wählt.'),
      ),
      p(
        bold('Modul 2 – Prozentuale Reduzierung des Arbeitspreises'),
        t(' senkt den Arbeitspreis-Anteil des Netzentgelts um einen festen Prozentsatz. Wirtschaftlich attraktiver bei höherem Stromverbrauch der steuerbaren Einrichtung – wenig vorteilhaft bei kleinen Verbräuchen. Muss aktiv vom Betreiber gewählt werden, setzt einen separaten Zähler oder eine getrennte Erfassung voraus.'),
      ),
      p(
        bold('Modul 3 – Zeitvariables Netzentgelt'),
        t(' kombiniert Modul 1 mit zeitlich differenzierten Netzentgelten. Das Netzentgelt ist tageszeitabhängig – günstiger in lastschwachen Zeiten. Modul 3 wird voraussichtlich erst ab 2025/2026 vollständig umsetzbar, weil dafür ein intelligentes Messsystem (iMSys) und entsprechende Tarifkommunikation nötig sind.'),
      ),
    ),

    tabelleBlock('Module 1, 2 und 3 im Vergleich', [
      {
        spalte1: 'Modul 1',
        spalte2: 'Pauschale Gutschrift ca. 110–190 € pro Jahr (brutto, je nach Netzbetreiber)',
        spalte3:
          'Standard – greift automatisch, wenn nicht aktiv ein anderes Modul gewählt wird. Einfach in der Abrechnung, kein zusätzlicher Aufwand',
      },
      {
        spalte1: 'Modul 2',
        spalte2: 'Prozentuale Reduzierung des Netzentgelt-Arbeitspreises',
        spalte3:
          'wirtschaftlich vorteilhaft bei hohen Stromverbräuchen über die SteuVE – meist getrennte Erfassung erforderlich, Aufwand höher',
      },
      {
        spalte1: 'Modul 3',
        spalte2: 'Zeitvariables Netzentgelt zusätzlich zu Modul 1',
        spalte3:
          'spannend bei dynamischen Stromtarifen und großen Lasten – setzt ein iMSys voraus, voll nutzbar erst mit dem Smart-Meter-Rollout',
      },
      {
        spalte1: 'Modulwechsel',
        spalte2: 'Möglich, aber an Fristen gebunden',
        spalte3:
          'wer mit Modul 1 startet, kann später wechseln – die genauen Fristen regeln Festlegung der Bundesnetzagentur und der jeweilige Netzbetreiber',
      },
    ]),

    tippBlock(
      'EMS oder Direktansteuerung – was sinnvoll ist',
      p(
        t('Es gibt zwei Wege, die Steuerbarkeit umzusetzen: Direktansteuerung der einzelnen Geräte oder Steuerung über ein Energiemanagementsystem (EMS). Bei einem Haus mit Speicher, Wallbox und Wärmepumpe ist EMS in der Regel die sauberere Lösung. Es bekommt vom Netzbetreiber eine Gesamt-Leistungsobergrenze, die intelligent auf die Geräte verteilt wird – statt jedes Gerät einzeln zu drosseln. Die meisten modernen Hybrid-Wechselrichter und ihre EMS-Komponenten sind dafür ausgelegt.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele bei §14a falsch einschätzen')),
      p(
        t('Bei §14a EnWG für Stromspeicher tauchen immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('„Mein Speicher wird ständig gedrosselt." Die netzorientierte Steuerung ist als Ausnahmefall gedacht. In der Praxis kommt sie selten zum Einsatz und betrifft nur den Netzbezug, nicht den Hausverbrauch.')),
        p(t('„§14a gilt automatisch für jeden Speicher." Stimmt nicht. Die Bezugsleistung muss über 4,2 kW liegen und der Speicher muss netzgeladen werden können. Reine PV-Speicher fallen nicht darunter.')),
        p(t('„Die Pauschale macht Modul 2 immer schlechter." Stimmt nicht. Bei hohen Verbräuchen über die steuerbare Einrichtung kann Modul 2 die wirtschaftlich bessere Wahl sein – allerdings mit höherem Aufwand.')),
        p(t('„Bestandsanlagen müssen ab 2029 zwingend in das neue Modell wechseln." Nicht ganz – Bestandsschutz bleibt grundsätzlich bestehen, aber bestehende §14a-Verträge mit alten Konditionen werden bis Ende 2028 in das neue Modell überführt. Wer keinen alten §14a-Vertrag hat, hat dauerhaft Bestandsschutz.')),
        p(t('„Ich brauche dafür einen Smart Meter." Nicht zwingend für Modul 1. Für Modul 2 und 3 wird ein intelligentes Messsystem in den meisten Fällen Voraussetzung – das wird aber im Rahmen des allgemeinen Smart-Meter-Rollouts ohnehin verbaut.')),
      ),
      p(
        bold('Eine ehrliche Einordnung von §14a EnWG braucht den Blick auf den eigenen Anschluss'),
        t(' – nicht auf pauschale Behauptungen über „Drosselung" oder „Eingriff durch den Netzbetreiber".'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('§14a EnWG ist für die meisten Hauseigentümer mit modernem Stromspeicher 2026 Realität – ohne dass es im Alltag großen Einfluss hat. Die Steuerbarkeit ist eine Vorsorgemaßnahme für seltene Engpassfälle, der Netzbezug bleibt im Normalbetrieb voll verfügbar, der PV-Eigenverbrauch und die Hausversorgung sind ohnehin nicht betroffen.'),
      ),
      p(
        t('Wirtschaftlich gleicht die Netzentgeltreduzierung den minimalen praktischen Eingriff aus. Modul 1 ist für die meisten Privathaushalte mit Speicher der unkomplizierte Standardweg – pauschal, automatisch, ohne Aufwand. Wer höhere steuerbare Verbräuche hat (große Wärmepumpe, Wallbox, Speicher), kann mit Modul 2 oder Modul 3 mehr rausholen, muss aber den Mehraufwand mitkalkulieren.'),
      ),
      p(
        bold('Wichtig ist eine saubere Anmeldung beim Netzbetreiber und eine fachgerechte technische Umsetzung'),
        t(' – nicht das Aufregen über Steuerbarkeit, die in den allermeisten Fällen kein Thema ist. Wer modern installiert, ist mit einem aktuellen Hybrid-System und EMS automatisch §14a-konform.'),
      ),
    ),

    ctaBlock({
      titel: 'Speicher §14a-konform planen lassen',
      text:
        'Wir planen Stromspeicher und Energiemanagement so, dass sie §14a-konform angemeldet werden – ohne dass die Steuerbarkeit den Alltagsbetrieb spürbar einschränkt.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Fällt jeder Stromspeicher unter §14a EnWG?',
      'Nein. Ein Speicher gilt nur dann als steuerbare Verbrauchseinrichtung, wenn er aus dem Netz geladen werden kann und seine Bezugsleistung über 4,2 kW liegt. Reine PV-Speicher ohne Netzbezugsmöglichkeit sind nicht betroffen. Außerdem haben Bestandsanlagen vor dem 1. Januar 2024 Bestandsschutz.',
    ),
    faqItem(
      'Was bedeutet Steuerbarkeit konkret?',
      'Der Netzbetreiber kann bei drohender Netzüberlastung die Bezugsleistung des Speichers temporär auf eine Mindestleistung von 4,2 kW absenken. Eine vollständige Abschaltung ist nicht möglich. Betroffen ist ausschließlich der Netzbezug – Hausverbrauch, PV-Laden und Einspeisung bleiben unverändert.',
    ),
    faqItem(
      'Wie viel kann der Netzbetreiber drosseln?',
      'Auf eine Mindestleistung von 4,2 kW. Diese Mindestleistung bleibt jederzeit verfügbar. In der Praxis wird die Drosselung selten zum Einsatz kommen – sie ist als Vorsorgeinstrument für Engpasssituationen gedacht.',
    ),
    faqItem(
      'Welches Modul der Netzentgeltreduzierung ist sinnvoll?',
      'Für die meisten Privathaushalte mit Speicher ist Modul 1 (pauschale Gutschrift, ca. 110–190 € pro Jahr je nach Netzbetreiber) der unkomplizierte Standard. Modul 2 oder 3 lohnen sich vor allem bei hohen Verbräuchen über die steuerbaren Einrichtungen oder bei Nutzung eines dynamischen Stromtarifs.',
    ),
    faqItem(
      'Was passiert mit Bestandsanlagen vor dem 1. Januar 2024?',
      'Sie haben grundsätzlich Bestandsschutz. Wer keinen alten §14a-Vertrag mit reduziertem Netzentgelt hatte, behält den bestehenden Anschluss unverändert. Wer bereits einen §14a-Vertrag nach alter Regelung hatte, wird bis Ende 2028 in die neuen Module überführt. Eine freiwillige Überführung in das neue Modell ist möglich.',
    ),
    faqItem(
      'Brauche ich für die Steuerbarkeit ein EMS?',
      'Nicht zwingend, aber bei mehreren steuerbaren Geräten (Speicher, Wallbox, Wärmepumpe) ist ein Energiemanagementsystem die sauberere Lösung. Das EMS bekommt vom Netzbetreiber eine Gesamt-Leistungsobergrenze und verteilt sie intelligent auf die Geräte. Die meisten modernen Hybrid-Wechselrichter und ihre EMS-Komponenten sind dafür ausgelegt.',
    ),
  ],
}

await upsertRatgeberArticle(article)
