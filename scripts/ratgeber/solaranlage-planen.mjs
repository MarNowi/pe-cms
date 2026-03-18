// Ausführen mit:
// node scripts/ratgeber/solaranlage-planen.mjs
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

  await col.deleteMany({ slug: 'pv-anlage-planen' })

  await col.insertOne({
    _id: new ObjectId(),
    titel: 'PV-Anlage planen: So gehst du bei Dach, Größe und Speicher richtig vor',
    slug: 'pv-anlage-planen',
    kategorie: 'solaranlage',
    teaser:
      'Wer eine PV-Anlage plant, sollte nicht mit dem Preis starten, sondern mit Dach, Verbrauch, zukünftigen Stromverbrauchern und einer sauberen Auslegung. So vermeidest du teure Fehlentscheidungen.',
    lesezeit: 13,
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
            bold('Eine gute PV-Planung beginnt nicht beim Modulpreis, sondern bei Dach, Verbrauch und Lastprofil'),
            t(' – also bei der Frage, wie viel Strom du wann selbst nutzen kannst.')
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        punkt: root(
          p(
            bold('Verschattung, Dachfläche, Zählerschrank und künftige Verbraucher'),
            t(' wie Wärmepumpe oder E-Auto entscheiden maßgeblich über die passende Anlagengröße.')
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        punkt: root(
          p(
            bold('Ein Speicher ist nicht automatisch Pflicht'),
            t(' – sinnvoll wird er dann, wenn du deinen Eigenverbrauch deutlich erhöhen und Netzbezug spürbar senken willst.')
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        punkt: root(
          p(
            bold('Wer sauber plant, spart später doppelt:'),
            t(' durch mehr Eigenverbrauch, weniger Nachrüstungen und weniger Ärger mit Technik oder Bürokratie.')
          )
        ),
      },
    ],

    inhalt: [
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('1. Warum gute Planung bei einer PV-Anlage so wichtig ist')),
          p(
            t(
              'Eine Photovoltaikanlage läuft im Idealfall 25 bis 30 Jahre. Fehler in der Planung wirken deshalb nicht nur ein paar Monate, sondern oft über die gesamte Lebensdauer.'
            )
          ),
          p(
            t(
              'Viele Angebote werden rein über kWp und Preis verglichen. Das greift zu kurz. Entscheidend ist, wie gut die Anlage zu deinem Dach, deinem Stromverbrauch und deinen zukünftigen Verbrauchern passt.'
            )
          ),
          p(t('Eine saubere Planung berücksichtigt immer:')),
          ul(
            'Dachfläche, Ausrichtung und Verschattung',
            'aktuellen Stromverbrauch und Lastprofil',
            'zukünftige Verbraucher wie Wärmepumpe oder E-Auto',
            'Zustand des Zählerschranks',
            'Sinn und Größe eines Speichers',
            'Bürokratie, Anmeldung und Inbetriebnahme'
          ),
          p(
            t(
              'Wer diese Punkte früh klärt, vermeidet typische Fehler wie zu kleine Anlagen, unnötige Nachrüstungen oder unpassende Speichergrößen.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('2. Ist dein Dach überhaupt geeignet?')),
          p(
            t(
              'Die beste Wirtschaftlichkeit beginnt mit einer geeigneten Dachfläche. Ideal ist eine möglichst unverschattete Fläche mit stabiler, intakter Dachkonstruktion.'
            )
          ),
          p(
            t(
              'Süddächer liefern meist die höchsten Spitzenerträge. Ost-West-Dächer können trotzdem sehr sinnvoll sein – vor allem dann, wenn der Strom morgens und abends gebraucht wird.'
            )
          ),
          p(
            t(
              'Nicht jedes Dach muss perfekt sein. Entscheidend ist, wie viel nutzbare Fläche realistisch belegt werden kann und ob Verschattung durch Gauben, Nachbargebäude, Bäume oder Kamine den Ertrag spürbar mindert.'
            )
          ),
          ul(
            'stabile, intakte Dachfläche',
            'möglichst geringe Verschattung',
            'ausreichend nutzbare Fläche',
            'saubere Belegungsplanung statt „irgendwie voll machen“'
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'hinweis',
        titel: 'Nicht nur nach Süden denken',
        content: root(
          p(
            t(
              'Auch Ost-West-Belegungen können sehr sinnvoll sein – besonders dann, wenn tagsüber im Haushalt gearbeitet wird, eine Wärmepumpe läuft oder ein E-Auto regelmäßig zu Hause lädt.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('3. Wie groß sollte die PV-Anlage sein?')),
          p(
            t(
              'Die passende Größe ergibt sich nicht allein aus dem aktuellen Haushaltsverbrauch. Wer heute nur den Status quo plant, baut oft zu klein.'
            )
          ),
          p(
            t(
              'Wichtige Fragen sind: Kommt später ein E-Auto dazu? Ist eine Wärmepumpe geplant? Soll der Eigenverbrauch maximiert werden? Gibt es noch freie Dachflächen, die man besser direkt mitbelegt?'
            )
          ),
          p(
            t(
              'In vielen Fällen ist es wirtschaftlich sinnvoller, die verfügbare Dachfläche gut auszunutzen, statt die Anlage künstlich klein zu halten.'
            )
          ),
          ul(
            'aktueller Jahresverbrauch',
            'Lastspitzen am Tag',
            'künftige Verbraucher',
            'verfügbare Dachfläche',
            'Ziel: Eigenverbrauch, Autarkie oder maximale Erzeugung'
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tabelle',
        titel: 'Orientierung für die Planung',
        zeilen: [
          {
            id: new ObjectId().toString(),
            spalte1: 'Typischer Fall',
            spalte2: 'Sinnvolle Richtung',
            spalte3: 'Worauf besonders achten?',
          },
          {
            id: new ObjectId().toString(),
            spalte1: '1–2 Personen ohne große Zusatzverbraucher',
            spalte2: 'eher kompakte bis mittlere Anlage',
            spalte3: 'Dachfläche und Grundverbrauch sauber abgleichen',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Familie mit 3–4 Personen',
            spalte2: 'mittlere bis größere Anlage',
            spalte3: 'tagsüberer Verbrauch und spätere Reserve mitdenken',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Haushalt mit Wärmepumpe',
            spalte2: 'größere PV-Anlage sinnvoll',
            spalte3: 'Winterbetrieb realistisch betrachten',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Haushalt mit E-Auto und Wärmepumpe',
            spalte2: 'Dachfläche möglichst gut nutzen',
            spalte3: 'Ladezeiten, Lastmanagement und Speicher prüfen',
          },
        ],
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('4. Speicher direkt mitplanen – ja oder nein?')),
          p(
            t(
              'Ein Speicher ist kein Muss, aber oft sinnvoll. Er hilft dabei, mittags erzeugten Solarstrom abends und nachts selbst zu nutzen.'
            )
          ),
          p(
            t(
              'Entscheidend ist nicht die maximale Autarkie auf dem Papier, sondern ob der Speicher zur Anlage und zum Verbrauch passt. Zu große Speicher sind wirtschaftlich oft schwächer als sauber dimensionierte Systeme.'
            )
          ),
          p(
            t(
              'Wer ohnehin mit Wärmepumpe, E-Auto oder höherem Abendverbrauch plant, sollte den Speicher früh in die Gesamtauslegung einbeziehen.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tipp',
        titel: 'Speicher nicht als Pflicht, sondern als Werkzeug sehen',
        content: root(
          p(
            t(
              'Die richtige Frage lautet nicht „Brauche ich unbedingt einen Speicher?“, sondern: „Wie viel zusätzlichen Eigenverbrauch kann ich sinnvoll verschieben – und lohnt sich das in meinem Fall?“'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('5. Technik und Infrastruktur nicht vergessen')),
          p(
            t(
              'Zur Planung gehört nicht nur das Dach. Auch der Zählerschrank, Leitungswege, Absicherung und die spätere Einbindung von Speicher, Wallbox oder Wärmepumpe müssen berücksichtigt werden.'
            )
          ),
          p(
            t(
              'Gerade bei Bestandsgebäuden ist der Zählerschrank oft ein kritischer Punkt. Wird das zu spät erkannt, kommen ungeplante Mehrkosten und Zeitverzug dazu.'
            )
          ),
          ul(
            'Zählerschrank prüfen',
            'Leitungswege früh festlegen',
            'Wechselrichterstandort sinnvoll wählen',
            'Schnittstellen für spätere Erweiterungen mitdenken'
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('6. Bürokratie und Anmeldung gehören zur Planung dazu')),
          p(
            t(
              'Eine PV-Anlage endet nicht mit der Montage. Auch Netzbetreiberanmeldung, Inbetriebnahme und Registrierung müssen sauber abgearbeitet werden.'
            )
          ),
          p(
            t(
              'Wer diesen Teil früh mitdenkt, spart später Rückfragen, Verzögerungen und unnötigen Abstimmungsaufwand.'
            )
          ),
          ul(
            'Netzbetreiberanfrage und technische Abstimmung',
            'Inbetriebnahme nach Fertigstellung',
            'Registrierung im Marktstammdatenregister',
            'Dokumentation und Einweisung'
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'hinweis',
        titel: 'Förderung und Finanzierung',
        content: root(
          p(
            t(
              'Je nach Situation kann eine Finanzierung sinnvoll sein. Wichtig ist, Finanzierung und Anlagenkonzept gemeinsam zu denken – nicht als getrennte Entscheidung.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('7. Typische Fehler bei der Planung')),
          p(
            t(
              'Die meisten Probleme entstehen nicht auf dem Dach, sondern vorher – bei falschen Annahmen, unvollständigen Angeboten oder zu kurz gedachten Systemen.'
            )
          ),
          ul(
            'nur nach Preis vergleichen',
            'zukünftige Verbraucher nicht berücksichtigen',
            'Dachfläche unnötig klein belegen',
            'Speicher blind nach Bauchgefühl auswählen',
            'Zählerschrank und Infrastruktur zu spät prüfen',
            'Bürokratie und Anmeldung unterschätzen'
          ),
          p(
            t(
              'Eine gute PV-Anlage ist nicht die billigste auf dem Papier, sondern die, die technisch sauber geplant ist und im Alltag langfristig funktioniert.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('8. So läuft eine saubere PV-Planung in der Praxis ab')),
          p(
            t(
              'In der Praxis hat sich ein klarer Ablauf bewährt: erst Dach und Verbrauch bewerten, dann Anlagengröße und Speicher sauber dimensionieren, danach Technik, Anmeldung und Umsetzung planen.'
            )
          ),
          ul(
            'Dach und Verschattung bewerten',
            'Verbrauch und Zukunftsbedarf analysieren',
            'Anlagengröße festlegen',
            'Speicher sinnvoll dimensionieren',
            'Technik und Zählerschrank prüfen',
            'Netzbetreiber und Registrierung mitdenken',
            'Montage und Inbetriebnahme sauber vorbereiten'
          ),
          p(
            t(
              'Genau an dieser Stelle trennt sich gute Handwerksplanung von reiner Angebotsoptik.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'cta',
        titel: 'Lass uns deine PV-Anlage sauber planen',
        text:
          'Wir schauen uns Dach, Verbrauch, spätere Erweiterungen und die technische Umsetzung gemeinsam an – ehrlich, praxisnah und ohne Verkaufsdruck.',
        buttonText: 'Jetzt Beratung anfragen',
        buttonLink: '/kontakt',
      },
    ],

    faq: [
      {
        id: new ObjectId().toString(),
        frage: 'Wie plane ich eine PV-Anlage richtig?',
        antwort:
          'Am besten startest du mit Dachfläche, Verschattung, Verbrauch und zukünftigen Stromverbrauchern. Erst danach sollten Anlagengröße, Speicher und Technik festgelegt werden.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Welche Dachausrichtung ist für eine Solaranlage am besten?',
        antwort:
          'Süddächer liefern meist die höchsten Spitzenerträge. Ost-West-Dächer können trotzdem sehr sinnvoll sein, wenn der Stromverbrauch morgens und abends höher ist.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Sollte ich den Speicher direkt mitplanen?',
        antwort:
          'Ja, zumindest konzeptionell. Ob er sofort umgesetzt wird oder später, sollte zur Anlagengröße, zum Verbrauch und zu künftigen Verbrauchern wie Wärmepumpe oder E-Auto passen.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Was wird bei der Planung am häufigsten vergessen?',
        antwort:
          'Oft werden zukünftige Verbraucher, der Zustand des Zählerschranks, Leitungswege und die spätere Einbindung von Speicher oder Wallbox zu spät berücksichtigt.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Gehört die Anmeldung beim Netzbetreiber zur Planung dazu?',
        antwort:
          'Ja. Eine saubere PV-Planung umfasst nicht nur Technik und Montage, sondern auch Anmeldung, Inbetriebnahme und Registrierung.',
      },
    ],

    seo: {
      metaTitle: 'PV-Anlage planen: Dach, Größe, Speicher richtig abstimmen | PEAK.Energy',
      metaDescription:
        'PV-Anlage planen ohne typische Fehler: So gehst du bei Dach, Ausrichtung, Größe, Speicher und Anmeldung richtig vor – ehrlich erklärt von PEAK.Energy.',
    },
  })

  console.log('✅ Artikel erfolgreich angelegt: pv-anlage-planen')
  await client.close()
}

seed().catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
