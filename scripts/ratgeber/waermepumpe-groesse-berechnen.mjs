import { upsertRatgeberArticle } from './_articleFactory.mjs'

function textNode(text) {
  return {
    detail: 0,
    format: 0,
    mode: 'normal',
    style: '',
    text,
    type: 'text',
    version: 1,
  }
}

function paragraph(text) {
  return {
    children: [textNode(text)],
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'paragraph',
    version: 1,
  }
}

function heading(tag, text) {
  return {
    children: [textNode(text)],
    direction: 'ltr',
    format: '',
    indent: 0,
    tag,
    type: 'heading',
    version: 1,
  }
}

function listItem(text) {
  return {
    children: [paragraph(text)],
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'listitem',
    version: 1,
    value: 1,
  }
}

function bulletList(items) {
  return {
    children: items.map(listItem),
    direction: 'ltr',
    format: '',
    indent: 0,
    listType: 'bullet',
    start: 1,
    tag: 'ul',
    type: 'list',
    version: 1,
  }
}

function rich(...nodes) {
  return {
    root: {
      children: nodes,
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}

const article = {
  titel: 'Wärmepumpe Größe berechnen: Welche Leistung passt wirklich?',
  slug: 'waermepumpe-groesse-berechnen',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Die richtige Wärmepumpen-Größe berechnet sich nicht sauber über Wohnfläche allein. Entscheidend sind Heizlast, Warmwasser, Vorlauftemperatur und das echte Verhalten des Hauses.',
  lesezeit: 11,

  seo: {
    metaTitle:
      'Wärmepumpe Größe berechnen: So wird richtig dimensioniert | PEAK.Energy',
    metaDescription:
      'Wärmepumpe Größe berechnen: ehrliche Einordnung zu Heizlast, Wohnfläche, Warmwasser, Vorlauftemperatur und typischen Auslegungsfehlern – praxisnah von PEAK.Energy.',
  },

  zusammenfassung: [
    {
      punkt: rich(
        paragraph(
          'Die richtige Wärmepumpen-Größe ergibt sich nicht sauber aus der Wohnfläche allein. Entscheidend ist die tatsächliche Heizlast des Gebäudes.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Wichtig sind unter anderem Gebäudezustand, Vorlauftemperatur, Heizflächen, Warmwasserbedarf und die Frage, wie das Haus an kalten Tagen wirklich arbeitet.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Zu groß dimensionierte Wärmepumpen sind nicht automatisch besser. Zu klein dimensionierte Anlagen sind aber ebenfalls problematisch. Gute Planung sucht nicht Maximum oder Minimum, sondern die passende Lösung.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Faustformeln können eine erste grobe Orientierung geben. Für eine saubere Auslegung reichen sie allein aber nicht aus.',
        ),
      ),
    },
  ],

  inhalt: [
    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Wärmepumpe Größe berechnen: Warum diese Frage so wichtig ist'),
        paragraph(
          'Die Größe einer Wärmepumpe entscheidet nicht nur darüber, ob ein Haus warm wird. Sie beeinflusst auch Effizienz, Laufverhalten, Wirtschaftlichkeit und die Frage, wie sauber das gesamte System im Alltag funktioniert.',
        ),
        paragraph(
          'Genau deshalb ist die Auslegung einer Wärmepumpe kein Nebenthema. Wer hier zu grob arbeitet, übernimmt einen Fehler direkt in das Herzstück der Anlage. Und dieser Fehler begleitet das System dann über viele Jahre.',
        ),
        paragraph(
          'In der Praxis wird die Leistung einer Wärmepumpe trotzdem oft zu vereinfacht betrachtet. Mal wird nur auf die Wohnfläche geschaut, mal auf die Größe des alten Kessels, mal auf eine grobe Faustformel. Für eine erste Richtung kann das hilfreich sein. Für eine saubere Planung reicht es aber nicht.',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: 'Die richtige Größe ist nicht die größte',
      content: rich(
        paragraph(
          'Eine Wärmepumpe muss nicht möglichst groß sein, sondern möglichst passend. Reserve auf Reserve klingt sicher, führt in der Praxis aber oft nicht zu einer besseren Lösung.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was bei der Berechnung der Wärmepumpen-Größe wirklich zählt'),
        paragraph(
          'Entscheidend ist nicht eine einzelne Zahl, sondern das Zusammenspiel mehrerer Faktoren. Im Kern geht es darum, wie viel Wärme das Gebäude unter ungünstigen Bedingungen wirklich braucht und auf welchem Temperaturniveau diese Wärme bereitgestellt werden muss.',
        ),
        bulletList([
          'die tatsächliche Heizlast des Gebäudes',
          'der energetische Zustand von Dach, Fassade, Fenstern und Hülle',
          'die erforderliche Vorlauftemperatur im Winter',
          'die vorhandenen Heizflächen',
          'der Warmwasserbedarf',
          'das reale Nutzerverhalten im Haus',
        ]),
        paragraph(
          'Genau deshalb ist die reine Wohnfläche allein zu wenig. Zwei Häuser mit gleicher Quadratmeterzahl können bei Wärmebedarf und Systemanforderung völlig unterschiedlich sein.',
        ),
      ),
    },

    {
      blockType: 'tipp',
      titel: 'Wohnfläche ist nur der Einstieg',
      content: rich(
        paragraph(
          'Die Wohnfläche kann eine grobe erste Orientierung geben. Sie ersetzt aber keine saubere technische Einordnung. Ein gut modernisiertes Haus und ein energetisch schwächeres Haus mit gleicher Fläche brauchen oft nicht annähernd dieselbe Leistung.',
        ),
      ),
    },

    {
      blockType: 'tabelle',
      titel: 'Diese Faktoren bestimmen die passende Wärmepumpen-Größe',
      zeilen: [
        {
          spalte1: 'Heizlast',
          spalte2: 'zentrale Planungsgrundlage',
          spalte3:
            'zeigt, wie viel Wärme das Gebäude an kalten Tagen tatsächlich benötigt',
        },
        {
          spalte1: 'Vorlauftemperatur',
          spalte2: 'wichtig für Betrieb und Effizienz',
          spalte3:
            'je höher die nötige Temperatur, desto genauer muss das System eingeordnet werden',
        },
        {
          spalte1: 'Heizflächen',
          spalte2: 'oft unterschätzt',
          spalte3:
            'Heizkörper oder Flächenheizung beeinflussen, wie gut Wärme mit moderaten Temperaturen abgegeben wird',
        },
        {
          spalte1: 'Warmwasser',
          spalte2: 'mitdenken, aber nicht blind aufblasen',
          spalte3:
            'der Bedarf gehört zur Planung dazu, sollte aber nicht pauschal überzogen angesetzt werden',
        },
        {
          spalte1: 'Gebäudezustand',
          spalte2: 'wichtiger als das Baujahr',
          spalte3:
            'Dämmung, Fenster und Hülle beeinflussen den Wärmebedarf teils deutlich',
        },
      ],
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Warum die Heizlast wichtiger ist als die alte Kesselgröße'),
        paragraph(
          'Ein häufiger Fehler ist, die Leistung des alten Heizkessels als Maßstab zu nehmen. Das klingt naheliegend, führt aber oft in die falsche Richtung.',
        ),
        paragraph(
          'Viele ältere Öl- oder Gasheizungen wurden großzügig oder sogar deutlich zu groß ausgelegt. Das war lange üblich und galt als sicher. Wer diese Leistung einfach übernimmt, dimensioniert die neue Wärmepumpe oft ebenfalls unnötig groß.',
        ),
        paragraph(
          'Für eine saubere Auslegung ist deshalb die tatsächliche Heizlast deutlich aussagekräftiger als das Typenschild des Altgeräts. Nicht die alte Kesselgröße entscheidet, sondern das, was das Gebäude heute wirklich braucht.',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: 'Der alte Kessel ist oft kein sauberer Maßstab',
      content: rich(
        paragraph(
          'Wer die neue Wärmepumpe einfach an der alten Heizungsleistung ausrichtet, übernimmt häufig alte Sicherheitszuschläge oder frühere Überdimensionierungen direkt mit ins neue System.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Reicht eine Faustformel zur Berechnung?'),
        paragraph(
          'Für eine erste grobe Einordnung kann eine Faustformel hilfreich sein. Mehr aber auch nicht. Sie kann zeigen, in welcher Größenordnung man sich ungefähr bewegt. Eine belastbare Planung ersetzt sie nicht.',
        ),
        paragraph(
          'Das Problem ist einfach: Faustformeln glätten Unterschiede. Sie berücksichtigen nicht sauber, wie gut oder schlecht die Gebäudehülle wirklich ist, wie hoch die Vorlauftemperaturen im Winter ausfallen oder wie sich der tatsächliche Warmwasserbedarf darstellt.',
        ),
        paragraph(
          'Gerade deshalb sollte man Faustformeln als Orientierung sehen – nicht als endgültige Entscheidung. Wer daraus direkt eine Anlage bestellt, plant oft zu grob.',
        ),
      ),
    },

    {
      blockType: 'tabelle',
      titel: 'Faustformel vs. saubere Auslegung',
      zeilen: [
        {
          spalte1: 'Wohnfläche × grober Richtwert',
          spalte2: 'nur erste Orientierung',
          spalte3:
            'hilft für ein erstes Gefühl, reicht aber nicht für eine verlässliche Systemauslegung',
        },
        {
          spalte1: 'alte Kesselgröße übernehmen',
          spalte2: 'oft fehleranfällig',
          spalte3:
            'kann frühere Überdimensionierung direkt in die neue Anlage übertragen',
        },
        {
          spalte1: 'saubere Heizlast-Einordnung',
          spalte2: 'deutlich belastbarer',
          spalte3:
            'bildet den tatsächlichen Wärmebedarf und damit die bessere Planungsgrundlage ab',
        },
      ],
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was passiert, wenn die Wärmepumpe zu groß gewählt wird?'),
        paragraph(
          'Viele denken zuerst: Zu groß ist doch besser als zu klein. In der Praxis ist das zu simpel. Eine zu große Wärmepumpe ist nicht automatisch die sichere Wahl.',
        ),
        paragraph(
          'Wenn die Anlage dauerhaft mehr Leistung bereitstellt, als das Gebäude im Alltag sauber abnimmt, leidet oft das Laufverhalten. Dann arbeitet das System weniger ruhig, fährt unnötig Reserven mit und nutzt seine Stärken nicht optimal aus.',
        ),
        paragraph(
          'Gerade deshalb ist Augenmaß wichtig. Eine Wärmepumpe soll zum Haus passen, nicht gegen jede Unsicherheit maximal aufgeblasen werden.',
        ),
      ),
    },

    {
      blockType: 'tipp',
      titel: 'Reserve ja – Übertreibung nein',
      content: rich(
        paragraph(
          'Saubere Planung bedeutet nicht, jede Reserve wegzudrücken. Sie bedeutet aber auch nicht, aus Unsicherheit pauschal zu groß zu planen. Entscheidend ist die passende Balance.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was passiert, wenn die Wärmepumpe zu klein gewählt wird?'),
        paragraph(
          'Auch die andere Richtung ist problematisch. Wenn die Wärmepumpe zu klein ausgelegt ist, kann das an kalten Tagen zu unnötigem Stress im System führen.',
        ),
        paragraph(
          'Dann wird schnell versucht, die Grenzen später mit Kompromissen, Zusatzheizung oder Schönrechnerei zu kaschieren. Genau deshalb ist eine zu kleine Auslegung nicht automatisch effizienter oder schlauer.',
        ),
        paragraph(
          'Die richtige Lösung liegt also weder im reflexhaften Übergroß noch im kleinsten möglichen Gerät. Sie liegt in einer ehrlichen, zum Gebäude passenden Dimensionierung.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Welche Rolle spielen Warmwasser und Nutzerverhalten?'),
        paragraph(
          'Warmwasser gehört zur Planung dazu. Gerade bei mehreren Personen im Haushalt, besonderen Komfortansprüchen oder hohem gleichzeitigen Bedarf muss dieser Anteil vernünftig mitgedacht werden.',
        ),
        paragraph(
          'Gleichzeitig sollte man auch hier nicht pauschal aufblasen. Nicht jeder Haushalt hat automatisch denselben Bedarf. Entscheidend ist, wie das Haus tatsächlich genutzt wird.',
        ),
        paragraph(
          'Auch das Nutzerverhalten spielt eine Rolle: Heizgewohnheiten, Nachtabsenkung, Lüftungsverhalten und die Frage, ob das Haus eher konstant oder stark wechselnd gefahren wird, beeinflussen die Bewertung des Systems.',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: 'Nicht nur das Haus, auch der Alltag zählt',
      content: rich(
        paragraph(
          'Eine Wärmepumpe wird nicht für ein theoretisches Haus geplant, sondern für ein bewohntes Gebäude mit realem Nutzungsverhalten. Genau deshalb gehört der Alltag mit in die Einordnung.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Typische Denkfehler bei der Größenberechnung'),
        paragraph(
          'Die meisten Fehler entstehen nicht erst bei der Montage, sondern schon viel früher – in der Einordnung. Gerade bei der Leistungsgröße werden in der Praxis immer wieder dieselben Abkürzungen genommen.',
        ),
        bulletList([
          'nur mit der Wohnfläche rechnen',
          'die alte Kesselgröße einfach übernehmen',
          'Warmwasser pauschal zu hoch ansetzen',
          'Gebäudezustand und Vorlauftemperatur zu wenig beachten',
          'aus Unsicherheit lieber deutlich zu groß dimensionieren',
        ]),
        paragraph(
          'Wer diese Fehler vermeidet, hat schon einen großen Schritt in Richtung sauberer Auslegung gemacht.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Unser Fazit'),
        paragraph(
          'Die passende Wärmepumpen-Größe lässt sich nicht sauber über Quadratmeter allein berechnen. Entscheidend ist die tatsächliche Heizlast – ergänzt um Vorlauftemperatur, Heizflächen, Warmwasserbedarf und die reale Gebäudesituation.',
        ),
        paragraph(
          'Faustformeln können für eine erste grobe Orientierung helfen. Für eine belastbare Planung reichen sie allein aber nicht aus. Wer seriös plant, schaut genauer hin und dimensioniert die Wärmepumpe nicht möglichst groß oder möglichst klein, sondern passend.',
        ),
        paragraph(
          'Genau diese saubere Einordnung ist am Ende wichtiger als jede schnelle Überschlagsrechnung. Denn die richtige Wärmepumpen-Größe entscheidet nicht nur über Wärme, sondern über die Qualität des gesamten Systems.',
        ),
      ),
    },

    {
      blockType: 'cta',
      titel: 'Lass uns die passende Wärmepumpen-Größe ehrlich einordnen',
      text:
        'Wir schauen uns Wärmebedarf, Gebäudesituation, Vorlauftemperaturen und Heizflächen gemeinsam an – praxisnah, sauber und ohne pauschale Standardformel.',
      buttonText: 'Wärmepumpe anfragen',
      buttonLink: '/waermepumpe',
    },
  ],

  faq: [
    {
      frage: 'Kann ich die Wärmepumpen-Größe selbst berechnen?',
      antwort:
        'Für eine grobe erste Orientierung ja. Für eine saubere Auslegung reicht eine einfache Überschlagsrechnung aber nicht aus. Entscheidend sind Heizlast, Vorlauftemperatur, Heizflächen, Warmwasser und der tatsächliche Gebäudezustand.',
    },
    {
      frage: 'Reicht die Wohnfläche zur Berechnung aus?',
      antwort:
        'Nein, nicht als verlässliche Grundlage. Die Wohnfläche kann einen groben Einstieg geben, sagt aber allein zu wenig über den tatsächlichen Wärmebedarf des Gebäudes aus.',
    },
    {
      frage: 'Kann ich mich an der alten Heizungsgröße orientieren?',
      antwort:
        'Nur sehr eingeschränkt. Viele ältere Heizkessel sind größer ausgelegt, als das Gebäude real braucht. Wer diese Leistung einfach übernimmt, riskiert eine unnötig große Wärmepumpe.',
    },
    {
      frage: 'Was passiert bei einer zu großen Wärmepumpe?',
      antwort:
        'Eine zu große Wärmepumpe ist nicht automatisch besser. Sie kann zu einem weniger sauberen Laufverhalten und zu einer unnötig aufgeblasenen Auslegung führen.',
    },
    {
      frage: 'Was passiert bei einer zu kleinen Wärmepumpe?',
      antwort:
        'Eine zu kleine Wärmepumpe kann an kalten Tagen an Grenzen geraten. Deshalb ist nicht das kleinste Gerät entscheidend, sondern die passend dimensionierte Lösung.',
    },
    {
      frage: 'Spielt Warmwasser bei der Größenberechnung eine Rolle?',
      antwort:
        'Ja. Warmwasser gehört zur Planung dazu. Es sollte aber weder ignoriert noch pauschal übertrieben angesetzt werden, sondern passend zum tatsächlichen Haushalt bewertet werden.',
    },
  ],
}

await upsertRatgeberArticle(article)
