// Ausführen mit:
// node scripts/ratgeber/ab-wieviel-qm-lohnt-sich-eine-solaranlage.mjs
//
// Voraussetzung:
// DATABASE_URL muss als Umgebungsvariable gesetzt sein.

import { MongoClient, ObjectId } from 'mongodb'

const URL = process.env.DATABASE_URL

if (!URL) {
  throw new Error('DATABASE_URL fehlt')
}

const client = new MongoClient(String(URL))

function p(...children) {
  return {
    type: 'paragraph',
    children,
    direction: null,
    format: '',
    indent: 0,
    version: 1,
    textFormat: 0,
    textStyle: '',
  }
}

function t(text, format = 0) {
  return {
    type: 'text',
    text,
    format,
    detail: 0,
    mode: 'normal',
    style: '',
    version: 1,
  }
}

function bold(text) {
  return t(text, 1)
}

function h(tag, ...children) {
  return {
    type: 'heading',
    tag,
    children,
    direction: null,
    format: '',
    indent: 0,
    version: 1,
  }
}

function ul(...items) {
  return {
    type: 'list',
    listType: 'bullet',
    tag: 'ul',
    start: 1,
    direction: null,
    format: '',
    indent: 0,
    version: 1,
    children: items.map((item, i) => ({
      type: 'listitem',
      value: i + 1,
      direction: null,
      format: '',
      indent: 0,
      version: 1,
      children: [t(item)],
    })),
  }
}

function root(...children) {
  return {
    root: {
      type: 'root',
      children,
      direction: null,
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

async function seed() {
  await client.connect()

  const db = client.db('test')
  const col = db.collection('ratgebers')

  const now = new Date()

  await col.deleteMany({ slug: 'ab-wieviel-qm-lohnt-sich-eine-solaranlage' })

  await col.insertOne({
    _id: new ObjectId(),
    titel: 'Ab wieviel qm lohnt sich eine Solaranlage?',
    slug: 'ab-wieviel-qm-lohnt-sich-eine-solaranlage',
    kategorie: 'solaranlage',
    teaser:
      'Eine feste Mindestfläche gibt es nicht. Entscheidend ist, wie viel nutzbare Dachfläche wirklich belegt werden kann, wie hoch dein Eigenverbrauch ist und ob die Anlage sauber geplant wird.',
    lesezeit: 11,
    status: 'veroeffentlicht',
    publishedAt: now,
    createdAt: now,
    updatedAt: now,

    titelbild: null,
    relatedArticles: [],

    zusammenfassung: [
      {
        id: new ObjectId().toString(),
        punkt: root(
          p(
            bold('Eine harte Mindestgröße in Quadratmetern gibt es nicht'),
            t(' – wirtschaftlich wird eine Solaranlage nicht nur über die Fläche, sondern über Eigenverbrauch, Dachqualität und Systemauslegung.')
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        punkt: root(
          p(
            bold('Als grober Richtwert brauchst du für 1 kWp etwa 5 bis 7 m² nutzbare Dachfläche'),
            t(' – je nach Modulgröße, Dachform und Belegungsplan.')
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        punkt: root(
          p(
            bold('Schon kleinere Dachflächen können sinnvoll sein'),
            t(' – vor allem dann, wenn der erzeugte Strom direkt im Haushalt genutzt wird und nicht fast nur eingespeist wird.')
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        punkt: root(
          p(
            bold('Wichtiger als die reine qm-Zahl sind Verschattung, Ausrichtung, Dachzustand und künftige Verbraucher'),
            t(' wie Wärmepumpe oder E-Auto.')
          )
        ),
      },
    ],

    inhalt: [
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('1. Gibt es eine Mindestfläche, ab der sich Photovoltaik lohnt?')),
          p(
            t(
              'Kurz gesagt: nein. Es gibt keine feste Quadratmetergrenze, ab der sich eine Solaranlage automatisch lohnt – und auch keine, unter der sie automatisch unsinnig ist.'
            )
          ),
          p(
            t(
              'Die Fläche ist nur ein Teil der Rechnung. Entscheidend ist, wie viel Leistung du auf dieser Fläche sinnvoll installieren kannst und wie viel des erzeugten Stroms du später selbst nutzt.'
            )
          ),
          p(
            t(
              'Genau deshalb kann eine kleinere, sauber geplante Anlage wirtschaftlich sinnvoller sein als eine größere Anlage, die schlecht belegt wurde oder deren Strom überwiegend ins Netz fließt.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('2. Wie viele Quadratmeter braucht man pro kWp?')),
          p(
            t(
              'Als grober Richtwert kannst du mit etwa 5 bis 7 Quadratmetern pro 1 kWp Anlagenleistung rechnen. Dieser Bereich passt gut als erste Orientierung, ersetzt aber keine echte Belegungsplanung.'
            )
          ),
          p(
            t(
              'Warum die Spanne? Weil nicht jedes Dach gleich ist. Modulabmessungen, Sicherheitsabstände, Dachaufbauten, Verschattung und die Art der Belegung beeinflussen, wie viel Leistung pro Quadratmeter tatsächlich möglich ist.'
            )
          ),
          ul(
            'weniger Fläche pro kWp bei leistungsstarken Modulen und guter Dachgeometrie',
            'mehr Fläche pro kWp bei ungünstiger Dachform oder vielen Aussparungen',
            'zusätzliche Verluste durch Gauben, Kamine, Dachfenster oder Verschattung'
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tabelle',
        titel: 'Grobe Orientierung nach nutzbarer Dachfläche',
        zeilen: [
          {
            id: new ObjectId().toString(),
            spalte1: 'Nutzbare Dachfläche',
            spalte2: 'Grobe PV-Leistung',
            spalte3: 'Typische Einordnung',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'ca. 10 m²',
            spalte2: 'etwa 1,5–2 kWp',
            spalte3: 'klein, nur mit gutem Eigenverbrauch interessant',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'ca. 15–20 m²',
            spalte2: 'etwa 2,5–4 kWp',
            spalte3: 'für kleine Haushalte bereits interessant',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'ca. 25–35 m²',
            spalte2: 'etwa 4–6 kWp',
            spalte3: 'oft sinnvoll für typische Einfamilienhäuser',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'ca. 40–60 m²',
            spalte2: 'etwa 6–10 kWp',
            spalte3: 'sehr gute Basis für Eigenverbrauch und spätere Erweiterungen',
          },
        ],
      },
      {
        id: new ObjectId().toString(),
        blockType: 'hinweis',
        titel: 'Wichtig: Nutzbare Fläche ist nicht gleich Dachfläche',
        content: root(
          p(
            t(
              'Entscheidend ist nicht die gesamte Dachfläche, sondern nur die wirklich belegbare Fläche. Dachfenster, Kamine, Randabstände und Verschattung reduzieren die nutzbaren Quadratmeter oft deutlich.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('3. Wann lohnt sich auch eine kleine Dachfläche?')),
          p(
            t(
              'Kleinere Dachflächen können sich durchaus lohnen – vor allem dann, wenn der Solarstrom direkt im Haus verbraucht wird. Der eigene Stromverbrauch ist in vielen Fällen wirtschaftlich deutlich attraktiver als reine Einspeisung.'
            )
          ),
          p(
            t(
              'Typische gute Fälle sind Haushalte mit konstantem Tagesverbrauch, Homeoffice, Warmwasserbereitung, Wärmepumpe oder späterem E-Auto. Dann kann auch eine kleinere Anlage sinnvoll sein, wenn sie sauber in das Verbrauchsprofil passt.'
            )
          ),
          ul(
            'tagsüber laufende Verbraucher',
            'Homeoffice oder regelmäßige Anwesenheit',
            'hoher Grundverbrauch',
            'spätere Einbindung von Wärmepumpe oder Wallbox'
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tipp',
        titel: 'Nicht nur auf die Einspeisung schauen',
        content: root(
          p(
            t(
              'Gerade bei kleineren Anlagen ist Eigenverbrauch der eigentliche Hebel. Wer den Solarstrom direkt selbst nutzt, verbessert die Wirtschaftlichkeit meist deutlich.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('4. Wann wird es eher schwierig?')),
          p(
            t(
              'Schwieriger wird es, wenn nur sehr wenig nutzbare Fläche vorhanden ist und zusätzlich Verschattung, ungünstige Dachform oder ein sehr niedriger Eigenverbrauch dazukommen.'
            )
          ),
          p(
            t(
              'Dann bleibt oft nur eine kleine Leistung übrig, während Planungs-, Montage- und Nebenkosten relativ hoch bleiben. Solche Fälle muss man ehrlich durchrechnen statt pauschal schönzureden.'
            )
          ),
          ul(
            'starke Verschattung',
            'sehr kleine, zerschnittene Dachflächen',
            'viele Dachaufbauten',
            'kaum Eigenverbrauch und fast nur Netzeinspeisung'
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'hinweis',
        titel: 'Billig gerechnet ist nicht sauber geplant',
        content: root(
          p(
            t(
              'Wenn kleine Anlagen nur über kWp-Preis verglichen werden, fehlt oft der Blick auf Eigenverbrauch, Dachrealität und langfristigen Nutzen. Genau dort entstehen später die Enttäuschungen.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('5. Diese Faktoren sind wichtiger als nur qm')),
          p(
            t(
              'Die Quadratmeterzahl ist nur der Einstieg. In der Praxis entscheiden mehrere Punkte gleichzeitig über die Wirtschaftlichkeit.'
            )
          ),
          ul(
            'Ausrichtung des Dachs',
            'Verschattung im Tagesverlauf',
            'nutzbare statt theoretische Dachfläche',
            'Stromverbrauch und Lastprofil',
            'zukünftige Verbraucher wie Wärmepumpe oder E-Auto',
            'Zustand des Dachs und des Zählerschranks'
          ),
          p(
            t(
              'Ein gut belegtes Ost-West-Dach kann sinnvoller sein als eine kleine, verschattete Südfäche. Und ein Haushalt mit hohem Tagesverbrauch kann auch mit weniger Dachfläche besser fahren als jemand mit fast reinem Abwesenheitsprofil.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('6. Rechenbeispiele für die Praxis')),
          p(
            t(
              'Wer nur 10 bis 12 m² nutzbare Fläche hat, landet oft bei einer eher kleinen Anlage. Das kann passen, wenn der Strom direkt genutzt wird und die Fläche unverschattet ist.'
            )
          ),
          p(
            t(
              'Ab etwa 15 bis 20 m² wird es für viele kleinere Haushalte deutlich interessanter. Ab 25 m² und mehr lassen sich oft schon Anlagen planen, die für typische Einfamilienhäuser wirklich relevant werden.'
            )
          ),
          p(
            t(
              'Spannend wird es besonders dann, wenn freie Dachfläche nicht künstlich kleingerechnet wird. Viele Anlagen werden in der Planung eher zu klein als zu groß gebaut.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tabelle',
        titel: 'Praktische Einordnung',
        zeilen: [
          {
            id: new ObjectId().toString(),
            spalte1: 'Wenig nutzbare Fläche',
            spalte2: 'nur bauen, wenn Eigenverbrauch gut passt',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Mittlere Fläche',
            spalte2: 'für viele Haushalte bereits wirtschaftlich interessant',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Größere Fläche',
            spalte2: 'gute Basis für PV, Speicher und spätere Verbraucher',
          },
        ],
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('7. Unser Fazit: Ab wann lohnt es sich wirklich?')),
          p(
            t(
              'Nicht ab einer festen qm-Zahl – sondern ab dem Punkt, an dem genügend nutzbare, möglichst unverschattete Fläche vorhanden ist und der erzeugte Strom sinnvoll im Haus genutzt werden kann.'
            )
          ),
          p(
            t(
              'Als grobe Daumenregel gilt: Ab etwa 15 bis 20 m² nutzbarer Fläche wird es für viele Einfamilienhäuser interessant. Darunter kann es sich ebenfalls lohnen, muss aber genauer geprüft werden.'
            )
          ),
          p(
            t(
              'Die ehrlichste Antwort lautet deshalb: Nicht die Quadratmeter allein entscheiden, sondern die Kombination aus Fläche, Dachqualität, Verbrauch und Planung.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'cta',
        titel: 'Lass uns prüfen, ob sich deine Dachfläche lohnt',
        text:
          'Wir schauen uns deine nutzbare Dachfläche, Verschattung, deinen Stromverbrauch und mögliche Erweiterungen ehrlich an – und sagen dir auch klar, wenn es keinen Sinn ergibt.',
        buttonText: 'Jetzt Beratung anfragen',
        buttonLink: '/kontakt',
      },
    ],

    faq: [
      {
        id: new ObjectId().toString(),
        frage: 'Ab wieviel qm lohnt sich eine Solaranlage?',
        antwort:
          'Eine feste Mindestfläche gibt es nicht. Für viele Einfamilienhäuser wird es ab etwa 15 bis 20 m² nutzbarer Dachfläche interessant. Darunter kann es sich ebenfalls lohnen, wenn der Eigenverbrauch gut passt.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Wie viele Quadratmeter braucht man pro kWp?',
        antwort:
          'Als grober Richtwert kannst du mit etwa 5 bis 7 m² pro 1 kWp Anlagenleistung rechnen. Die tatsächliche Belegung hängt aber stark von Dachform, Modulgröße und Verschattung ab.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Lohnt sich eine Solaranlage auch auf kleiner Dachfläche?',
        antwort:
          'Ja, das kann sich lohnen – besonders dann, wenn der erzeugte Strom direkt im Haushalt verbraucht wird. Kleine Anlagen, die fast nur einspeisen, sind wirtschaftlich oft schwächer.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Was ist wichtiger als die reine qm-Zahl?',
        antwort:
          'Wichtiger sind nutzbare Dachfläche, Verschattung, Ausrichtung, dein Stromverbrauch und künftige Verbraucher wie Wärmepumpe oder E-Auto.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Sollte ich freie Dachfläche lieber direkt mitbelegen?',
        antwort:
          'In vielen Fällen ja. Häufig werden Anlagen eher zu klein geplant. Ob die Fläche komplett genutzt werden sollte, hängt aber vom Dach, Verbrauch und Gesamtkonzept ab.',
      },
    ],

    seo: {
      metaTitle: 'Ab wieviel qm lohnt sich eine Solaranlage? | PEAK.Energy',
      metaDescription:
        'Ab wieviel qm lohnt sich eine Solaranlage wirklich? Erfahre, wie viel Dachfläche pro kWp nötig ist und ab wann Photovoltaik für Einfamilienhäuser interessant wird.',
    },
  })

  console.log('✅ Artikel erfolgreich angelegt: ab-wieviel-qm-lohnt-sich-eine-solaranlage')
  await client.close()
}

seed().catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
