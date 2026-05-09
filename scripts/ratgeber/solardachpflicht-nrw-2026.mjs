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
  titel: 'Solardachpflicht NRW 2026: Was bei Neubau und Sanierung wirklich gilt',
  slug: 'solardachpflicht-nrw-2026',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'Seit 1. Januar 2026 gilt die NRW-Solardachpflicht auch für Bestandsgebäude – aber nicht pauschal, sondern bei vollständiger Erneuerung der Dachhaut. Wer Reparatur und Sanierung unterscheidet und die Pauschalregelung kennt, weiß, was im eigenen Fall gefordert ist.',
  lesezeit: 10,

  seo: seo(
    'Solardachpflicht NRW 2026: Bestand und Neubau erklärt | PEAK.Energy',
    'Solardachpflicht NRW 2026: § 42a BauO NRW, SAN-VO, Pauschalregelung, Ausnahmen und was als „vollständige Erneuerung der Dachhaut" zählt – ehrliche Einordnung.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Seit '),
      bold('1. Januar 2026'),
      t(' gilt die Solardachpflicht in NRW auch für Bestandsgebäude – ausgelöst durch eine vollständige Erneuerung der Dachhaut. Reparaturen oder Teilarbeiten lösen die Pflicht in der Regel nicht aus.'),
    ),
    summaryPoint(
      t('Bei Neubauten gilt die Pflicht für Wohngebäude '),
      bold('seit 1. Januar 2025'),
      t(' (Bauantrag), für Nichtwohngebäude bereits seit 1. Januar 2024.'),
    ),
    summaryPoint(
      t('Mindestbelegung: '),
      bold('30 % der geeigneten Dachfläche'),
      t(' – oder alternativ als Pauschallösung 3 kWp (1–2 WE), 4 kWp (3–5 WE), 8 kWp (6–10 WE oder Nichtwohngebäude).'),
    ),
    summaryPoint(
      t('Ausnahmen gibt es bei Denkmalschutz, ungeeigneter Dachausrichtung (reines Norddach), zu kleinen Gebäuden (unter 50 m² Nutzfläche), wirtschaftlicher Unzumutbarkeit oder fehlender Statik – aber sie sind eng definiert und müssen begründet werden.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('Wer in NRW ein neues Haus baut oder ein bestehendes Dach grundlegend saniert, kommt seit Anfang 2026 nicht mehr ohne Photovoltaik aus. Die '),
        bold('Solardachpflicht'),
        t(' ist seit Längerem Bundesländer-Politik – NRW hat sie schrittweise eingeführt, mit dem 1. Januar 2026 als wichtigstem Stichtag für den Bestand.'),
      ),
      p(
        t('Rechtliche Grundlage ist '),
        bold('§ 42a der Landesbauordnung NRW'),
        t(' (BauO NRW) in Verbindung mit der '),
        bold('Solaranlagen-Verordnung NRW (SAN-VO NRW)'),
        t(' vom 6. Juni 2024. Das Gesetz steht – die Frage ist nur noch, wie es im konkreten Fall ausgelegt wird. Genau hier entstehen die häufigsten Missverständnisse.'),
      ),
      p(
        t('Wer ein Dach saniert oder neu baut, sollte das Thema deshalb nicht abwarten, sondern in die Planung mitnehmen. Die Anlage kostet als Nachzügler oft mehr als die, die direkt mit der Dacharbeit kombiniert wird – und ist im Streitfall mit der Bauaufsicht nicht verhandelbar.'),
      ),
    ),

    textBlock(
      h('h2', t('Die wichtigen Stichtage in NRW')),
      p(
        t('Die Solardachpflicht in NRW wurde gestaffelt eingeführt – das macht es manchmal unübersichtlich, was im konkreten Fall greift.'),
      ),
      ul(
        p(
          bold('1. Januar 2024'),
          t(': Neubau '),
          bold('Nichtwohngebäude'),
          t(' (Gewerbe, Industrie, öffentliche Gebäude). Stichtag: Bauantragseinreichung.'),
        ),
        p(
          bold('Stellplätze ab 2024'),
          t(': Bei Nichtwohngebäuden mit '),
          bold('mehr als 35 Stellplätzen'),
          t(' (Bauantrag ab 1. Januar 2024) gilt die Pflicht zur Überdachung mit PV.'),
        ),
        p(
          bold('1. Januar 2025'),
          t(': Neubau '),
          bold('Wohngebäude'),
          t('. Stichtag: Bauantragseinreichung.'),
        ),
        p(
          bold('1. Januar 2026'),
          t(': '),
          bold('Bestandsgebäude'),
          t(' bei vollständiger Erneuerung der Dachhaut – sowohl Wohn- als auch Nichtwohngebäude. Stichtag: Beginn der Baumaßnahme.'),
        ),
      ),
      p(
        t('Wichtig dabei: '),
        bold('Bei Neubauten ist der Bauantrag entscheidend, beim Bestand der Beginn der Baumaßnahme'),
        t('. Wer 2025 ein Dach saniert hat und im November 2025 fertig wurde, fällt nicht unter die Pflicht. Wer im Februar 2026 anfängt, schon.'),
      ),
    ),

    tabelleBlock('Stichtage und Stichtags-Bezug der NRW-Solarpflicht', [
      {
        spalte1: 'Neubau Nichtwohngebäude',
        spalte2: 'Pflicht ab Bauantrag 1. Januar 2024',
        spalte3:
          'Gewerbe-, Industrie-, öffentliche Gebäude. 30 % der gesamten (Brutto-)Dachfläche oder Pauschalgrenze',
      },
      {
        spalte1: 'Neubau Wohngebäude',
        spalte2: 'Pflicht ab Bauantrag 1. Januar 2025',
        spalte3:
          'Einzelhäuser, Mehrfamilienhäuser, alle Wohngebäude. 30 % der gesamten Dachfläche',
      },
      {
        spalte1: 'Bestandsgebäude (Sanierung)',
        spalte2: 'Pflicht ab Baubeginn 1. Januar 2026',
        spalte3:
          'Bei vollständiger Erneuerung der Dachhaut. 30 % der geeigneten Dachfläche oder Pauschalregelung (3/4/8 kWp)',
      },
      {
        spalte1: 'Stellplätze (Nichtwohngebäude)',
        spalte2: 'Pflicht ab Bauantrag 1. Januar 2024',
        spalte3:
          'Bei mehr als 35 Stellplätzen müssen geeignete Stellplätze mit PV überdacht werden – z. B. Carports, Solartrellis',
      },
      {
        spalte1: 'Anbau/Erweiterung im Bestand',
        spalte2: 'Pflicht bei Schaffung neuer geeigneter Dachflächen',
        spalte3:
          'Wenn ein Anbau oder Aufbau eine neue, geeignete Dachfläche schafft, gilt die Pflicht entsprechend dem Stichtag und Gebäudetyp',
      },
    ]),

    textBlock(
      h('h2', t('Was bedeutet „vollständige Erneuerung der Dachhaut"?')),
      p(
        t('Die größte Hürde bei der Auslegung der Pflicht im Bestand ist der Begriff '),
        bold('„vollständige Erneuerung der Dachhaut"'),
        t('. Das ist kein zufälliger Begriff – er definiert genau, wann die Pflicht greift und wann nicht.'),
      ),
      p(
        t('Eine vollständige Erneuerung der Dachhaut liegt nach SAN-VO NRW vor, wenn '),
        bold('die Eindeckung (z. B. Ziegel) oder die Abdichtung (z. B. Bitumenbahnen) komplett entfernt und durch neues Material ersetzt'),
        t(' wird. Das umfasst klassische Umdeckungen mit gleichem oder neuem Material und großflächige Sanierungen nach Sturmschäden, sofern sie das ganze Dach betreffen.'),
      ),
      p(
        t('Was '),
        bold('nicht'),
        t(' als vollständige Erneuerung gilt:'),
      ),
      ul(
        p(t('Punktuelle Reparaturen einzelner Ziegel oder Bahnen')),
        p(t('Austausch eines einzelnen Dachflächenfensters')),
        p(t('Modernisierung der Wärmedämmung von innen, wenn die Dachhaut intakt bleibt')),
        p(t('Austausch der Dachrinne oder einzelner Spenglerteile')),
        p(t('Sturmschadenreparatur an Teilflächen ohne komplette Neuabdeckung')),
      ),
      p(
        t('Schwierig wird es, wenn '),
        bold('aus mehreren Einzelmaßnahmen über die Zeit faktisch eine vollständige Erneuerung'),
        t(' wird. Hier kann die Bauaufsicht im Einzelfall die Pflicht trotzdem bejahen. Wer in der Grauzone arbeitet, sollte das vorher mit der Behörde klären.'),
      ),
    ),

    hinweisBlock(
      'Reparatur ist nicht Sanierung',
      p(
        t('Die Pflicht greift nicht bei einzelnen Reparaturen – auch nicht bei größeren Reparaturen. Erst wenn die Dachhaut komplett ausgetauscht wird, wird sie ausgelöst. Wer Sorge hat, mit einer geplanten Reparatur unbeabsichtigt eine PV-Pflicht auszulösen, holt sich '),
        bold('vor Auftragserteilung eine schriftliche Auskunft der unteren Bauaufsicht'),
        t(' – das schafft Rechtssicherheit und ist meistens kostenfrei.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie groß muss die Solaranlage sein?')),
      p(
        t('Die SAN-VO NRW kennt zwei Wege, die Pflicht zu erfüllen: über die Dachflächenbelegung oder über eine Mindestleistung als Pauschallösung. Eigentümer können wählen, was praxisgerechter ist.'),
      ),
      p(
        bold('Variante 1: Dachflächenanteil'),
        t(' – mindestens 30 % der '),
        bold('geeigneten Dachfläche'),
        t(' (im Bestand, im Neubau auf die gesamte Dachfläche bezogen). „Geeignet" heißt: nutzbar nach Ausrichtung, Neigung, Verschattung, Statik. Dachfenster, Gauben, Kamine und Mindestabstände sind herauszurechnen.'),
      ),
      p(
        bold('Variante 2: Pauschalleistung im Bestand'),
        t(' – einfacher, weil keine Flächenberechnung nötig:'),
      ),
      ul(
        p(
          bold('3 kWp'),
          t(' bei Wohngebäuden mit 1–2 Wohneinheiten'),
        ),
        p(
          bold('4 kWp'),
          t(' bei Wohngebäuden mit 3–5 Wohneinheiten'),
        ),
        p(
          bold('8 kWp'),
          t(' bei Wohngebäuden mit 6–10 Wohneinheiten oder Nichtwohngebäuden'),
        ),
      ),
      p(
        t('Bei sehr großen Bestandsgebäuden (über 10 Wohneinheiten) oder größeren Nichtwohngebäuden gilt die Flächenregel verbindlich – die Pauschallösung greift dort nicht.'),
      ),
    ),

    textBlock(
      h('h2', t('Erfüllungsoptionen jenseits der klassischen PV')),
      p(
        t('Die Pflicht muss nicht zwingend mit einer eigenen, klassischen PV-Anlage auf dem Hauptdach erfüllt werden. SAN-VO NRW erlaubt Alternativen.'),
      ),
      ul(
        p(
          bold('Gemietete oder geleaste PV-Anlagen'),
          t(' erfüllen die Pflicht genauso wie gekaufte – wer keine Investition stemmen will, kann sich einen Anbieter mit Mietmodell suchen.'),
        ),
        p(
          bold('Solarthermie statt Photovoltaik'),
          t(' – wenn das wirtschaftliche Flächenpotenzial vollständig durch Solarthermie ausgeschöpft wird. Anteilige Anrechnung gegen PV ist nicht möglich.'),
        ),
        p(
          bold('PV auf anderen Außenflächen'),
          t(' – Garagendach, Carport, Fassade. Wenn die Pflicht-Mindestleistung dort erbracht wird, ist das Hauptdach frei.'),
        ),
        p(
          bold('Balkonkraftwerke (Stecker-Solar) reichen NICHT'),
          t('. Die Pflicht ist mit einer 800-W-Steckdosen-Anlage in der Regel nicht zu erfüllen.'),
        ),
      ),
    ),

    textBlock(
      h('h2', t('Ausnahmen: Wann die Pflicht nicht greift')),
      p(
        t('§ 42a Abs. 5 BauO NRW listet Konstellationen, in denen die Pflicht ganz oder teilweise entfallen kann.'),
      ),
      ul(
        p(
          bold('Denkmalschutz'),
          t(' – wenn die PV-Installation denkmalrechtlichen Vorgaben widerspricht. Im Einzelfall durch die untere Denkmalschutzbehörde zu klären.'),
        ),
        p(
          bold('Andere öffentlich-rechtliche Pflichten'),
          t(' – z. B. eine Gestaltungssatzung der Kommune, die Solaranlagen ausschließt.'),
        ),
        p(
          bold('Gebäude unter 50 m² Nutzfläche'),
          t(' – kleine Nebengebäude und Gartenhäuser fallen nicht unter die Pflicht.'),
        ),
        p(
          bold('Reines Norddach'),
          t(' – wenn die Dachausrichtung ausschließlich zwischen Ostnordost (ONO) und Westnordwest (WNW) liegt. Süd-, Ost- und Westausrichtungen sind in der Regel als geeignet zu betrachten.'),
        ),
        p(
          bold('Statisch nicht tragfähig'),
          t(' – wenn der Dachstuhl die zusätzliche Last nicht trägt. Bei alten Dachstühlen häufiger Fall, aber Nachweis erforderlich.'),
        ),
        p(
          bold('Wirtschaftliche Unzumutbarkeit'),
          t(' – Auslegungssache; die SAN-VO definiert das nicht im Detail. In der Praxis selten anerkannt, wenn die Anlage einfach kein gutes Geschäft wäre – sondern nur, wenn sie '),
          bold('nachweislich wirtschaftlich nicht darstellbar'),
          t(' ist.'),
        ),
        p(
          bold('Kein Stromanschluss möglich'),
          t(' – sehr seltener Fall.'),
        ),
      ),
      p(
        t('Wichtig: Die Ausnahmen wirken nicht automatisch. Eigentümer müssen sie '),
        bold('bei der Bauaufsicht geltend machen und begründen'),
        t(' – bei Neubau im Antragsverfahren, bei Sanierung in Verbindung mit der Maßnahme.'),
      ),
    ),

    tippBlock(
      'Vor Auftragserteilung Bauaufsicht einbinden',
      p(
        t('Bei Sanierungsfällen mit Sondersituationen – Denkmalschutz, schwierige Statik, wirtschaftliche Zweifel – lohnt sich eine schriftliche Voranfrage bei der unteren Bauaufsicht. Sie ist meist kostenfrei und schafft Rechtssicherheit. Wer ohne diese Klärung saniert und später Probleme bekommt, hat keine Argumente gegen einen Bescheid.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele bei der Solardachpflicht falsch einschätzen')),
      p(
        t('Bei der NRW-Solardachpflicht tauchen immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('„Die Pflicht gilt für jedes Dach in NRW." Stimmt nicht. Sie gilt nur bei Neubauten oder vollständigen Dachsanierungen – nicht für Häuser, die so weiter genutzt werden wie bisher.')),
        p(t('„Eine kleine Reparatur löst die Pflicht aus." Stimmt nicht. Punktuelle Arbeiten lösen sie nicht aus. Erst wenn die ganze Dachhaut neu kommt.')),
        p(t('„Ein Balkonkraftwerk reicht." Stimmt nicht. Die Mindestleistung von 3 kWp wird mit Stecker-Solaranlagen (800 W) nicht erreicht.')),
        p(t('„30 % der Dachfläche heißt 30 % der gesamten Fläche." Im Neubau ja, im Bestand bezieht sich der Wert auf die geeignete Fläche – Kamine, Gauben, Verschattungen, Mindestabstände gehen ab.')),
        p(t('„Bei Denkmalschutz fällt die Pflicht automatisch weg." Stimmt nicht. Die Ausnahme muss explizit geltend gemacht werden – die Denkmalschutzbehörde entscheidet im Einzelfall, oft auch in Richtung „Anlage möglich, mit Auflagen".')),
        p(t('„Wirtschaftliche Unzumutbarkeit ist eine einfache Ausstiegsklausel." Stimmt nicht. Die Hürde ist hoch – es muss nachgewiesen werden, dass die Anlage nachweislich nicht wirtschaftlich ist, nicht nur nicht optimal rentabel.')),
      ),
      p(
        bold('Eine ehrliche Einordnung der Solardachpflicht braucht den Blick auf die konkrete Maßnahme'),
        t(' – Art, Umfang, Stichtag, Eigenschaften des Dachs.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die NRW-Solardachpflicht ist seit 2026 für den Bestand Realität. Sie ist nicht so umfassend, wie viele befürchten – Reparaturen lösen sie nicht aus, nur vollständige Dacherneuerungen. Sie ist auch nicht so flexibel, wie manche hoffen – Ausnahmen sind eng definiert und müssen begründet werden.'),
      ),
      p(
        t('Wer ohnehin eine Dachsanierung plant, sollte die PV-Anlage von Anfang an mitdenken. Die Synergien sind erheblich: Das Gerüst steht ohnehin, Handwerker sind vor Ort, der Aufbau der PV ist deutlich günstiger als nachträglich. Die Pauschalregelung mit 3 kWp für Ein- und Zweifamilienhäuser ist außerdem '),
        bold('eine Mindestbelegung – kein Maximum'),
        t('. Wer mehr Strom selbst nutzen will, kann die Anlage größer auslegen.'),
      ),
      p(
        bold('Die Pflicht ist gesetzte Realität – die wirtschaftliche Frage ist nicht „muss ich eine Anlage", sondern „in welcher Größe lohnt sie sich für mich"'),
        t('. Eine ehrliche Auslegung berücksichtigt Verbrauch, Dachfläche, Zukunftsbedarfe (Wärmepumpe, E-Auto) und das passende Speicherkonzept.'),
      ),
    ),

    ctaBlock({
      titel: 'Solarpflicht-Pflicht und PV sinnvoll planen lassen',
      text:
        'Wir prüfen, ob deine Sanierung oder dein Neubau unter die Pflicht fällt und welche Variante (30 %-Belegung oder Pauschallösung) für dich passt – und legen die Anlage so aus, dass sie über die Pflicht hinaus wirtschaftlich Sinn ergibt.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Wann gilt die Solardachpflicht für Bestandsgebäude in NRW?',
      'Seit 1. Januar 2026 – ausgelöst durch eine vollständige Erneuerung der Dachhaut. Stichtag ist der Beginn der Baumaßnahme, nicht die Auftragserteilung. Wer nach diesem Datum mit der Sanierung beginnt, ist betroffen. Reparaturen oder Teilarbeiten lösen die Pflicht in der Regel nicht aus.',
    ),
    faqItem(
      'Was zählt als „vollständige Erneuerung der Dachhaut"?',
      'Die komplette Erneuerung von Eindeckung (Ziegel, Schiefer) oder Abdichtung (Bitumen, EPDM). Klassisches Umdecken oder Neuabdichten. Reine Reparaturen, einzelne Dachflächenfenster oder Modernisierung der Innendämmung lösen die Pflicht nicht aus. Bei mehreren Einzelmaßnahmen, die in Summe einer Volldeckung entsprechen, kann die Bauaufsicht im Einzelfall die Pflicht bejahen.',
    ),
    faqItem(
      'Wie groß muss die Solaranlage mindestens sein?',
      'Im Bestand: 30 % der geeigneten Dachfläche oder Pauschallösung (3 kWp bei 1–2 Wohneinheiten, 4 kWp bei 3–5 WE, 8 kWp bei 6–10 WE oder Nichtwohngebäuden). Im Neubau: 30 % der gesamten Dachfläche. Größere Anlagen sind erlaubt und meist wirtschaftlich sinnvoll – die Pflichtgröße ist eine Untergrenze, kein Maximum.',
    ),
    faqItem(
      'Kann ich die Pflicht mit Solarthermie statt Photovoltaik erfüllen?',
      'Ja, aber nur wenn das wirtschaftliche Flächenpotenzial vollständig mit Solarthermie ausgeschöpft wird. Eine anteilige Mischung (PV plus Solarthermie auf separate Pflichtflächen) ist nicht möglich. In der Praxis ist Photovoltaik wirtschaftlich meist die bessere Wahl – Solarthermie deckt nur Warmwasser, PV liefert universell nutzbaren Strom.',
    ),
    faqItem(
      'Was passiert bei Denkmalschutz oder anderen Ausnahmen?',
      'Die Pflicht entfällt nicht automatisch, sondern muss bei der Bauaufsicht geltend gemacht und begründet werden. Bei Denkmalschutz entscheidet die untere Denkmalschutzbehörde – oft mit Auflagen statt vollständigem Ausschluss (z. B. Indach-Module statt Aufdach, oder Anlage auf rückwärtigem Dach). Andere Ausnahmen wie Gestaltungssatzung, ungeeignetes Norddach, kleines Nebengebäude unter 50 m² oder fehlende Statik gelten ebenfalls nur nach behördlicher Bestätigung.',
    ),
    faqItem(
      'Reicht ein Balkonkraftwerk zur Erfüllung der Solardachpflicht?',
      'Nein. Stecker-Solaranlagen mit 800 W Wechselrichterleistung erreichen die Mindestleistung von 3 kWp nicht – ein Balkonkraftwerk ist also keine Lösung für die NRW-Solarpflicht. Wer die Pflichtgröße erfüllen will, braucht eine fest installierte Aufdach- oder Indach-Anlage oder eine PV-Anlage auf einer anderen geeigneten Außenfläche (z. B. Carport).',
    ),
  ],
}

await upsertRatgeberArticle(article)
