// Ausführen mit:
// node scripts/ratgeber/kosten-10-kwp-solaranlage-mit-speicher.mjs
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

  await col.deleteMany({ slug: 'kosten-10-kwp-solaranlage-mit-speicher' })

  await col.insertOne({
    _id: new ObjectId(),
    titel: 'Was kostet eine 10 kWp Solaranlage mit Speicher?',
    slug: 'kosten-10-kwp-solaranlage-mit-speicher',
    kategorie: 'solaranlage',
    teaser:
      'Eine 10 kWp Solaranlage ist für viele Einfamilienhäuser eine starke Größenordnung. Aber was kostet sie heute wirklich – und wie verändert ein Speicher den Preis? Hier findest du eine ehrliche Einordnung mit typischen Preisfaktoren und Praxisblick.',
    lesezeit: 12,
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
            bold('Eine 10 kWp PV-Anlage ohne Speicher liegt heute oft grob im Bereich von rund 13.000 bis 16.000 Euro'),
            t(' – je nach Dach, Komponenten, Montageaufwand und technischer Ausgangslage.')
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        punkt: root(
          p(
            bold('Mit Speicher verschiebt sich die Investition meist deutlich nach oben'),
            t(' – für viele Projekte landet das Gesamtbudget dann grob im Bereich von rund 22.000 bis 29.000 Euro.')
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        punkt: root(
          p(
            bold('10 kWp ist für viele Einfamilienhäuser eine interessante Zielgröße'),
            t(' – weil sich Dachfläche, Eigenverbrauch und Anlagengröße hier oft gut treffen.')
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        punkt: root(
          p(
            bold('Entscheidend ist nicht nur der Preis'),
            t(' – sondern ob Speicher, Dachbelegung, Zählerschrank und spätere Verbraucher wie Wärmepumpe oder E-Auto sauber mitgedacht wurden.')
          )
        ),
      },
    ],

    inhalt: [
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('1. Warum 10 kWp für viele Häuser so relevant ist')),
          p(
            t(
              '10 kWp ist bei Einfamilienhäusern keine magische Zahl, aber eine sehr häufige Größenordnung. Sie passt oft gut zu typischen Dachflächen und ist groß genug, um einen relevanten Teil des Strombedarfs selbst zu decken.'
            )
          ),
          p(
            t(
              'Gerade wenn zusätzlich über Wärmepumpe, Wallbox oder steigenden Stromverbrauch nachgedacht wird, ist 10 kWp oft ein sinnvoller Planungspunkt. Gleichzeitig gilt aber: Nicht jedes Dach und nicht jeder Haushalt sollten automatisch auf genau diese Größe ausgelegt werden.'
            )
          ),
          p(
            t(
              'Eine gute Planung startet deshalb nicht bei der Zahl selbst, sondern bei Dach, Verbrauch, Verschattung und der Frage, wie der erzeugte Strom später im Alltag genutzt wird.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'hinweis',
        titel: '10 kWp ist Orientierung – kein Dogma',
        content: root(
          p(
            t(
              'Für manche Häuser ist etwas weniger sinnvoll, für andere deutlich mehr. Die passende Größe ergibt sich nicht aus einem Internetwert, sondern aus Dachfläche, Nutzung und technischer Zielsetzung.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('2. Was kostet eine 10 kWp Solaranlage ohne Speicher?')),
          p(
            t(
              'Für eine 10 kWp Anlage ohne Speicher liegt die grobe Orientierung heute oft im Bereich von etwa 13.000 bis 16.000 Euro. Sehr einfache Projekte können etwas darunter liegen, aufwendigere Anlagen mit höherem Montage- oder Technikaufwand auch darüber.'
            )
          ),
          p(
            t(
              'Wichtig ist dabei: Diese Zahl sagt noch nichts darüber aus, wie gut die Anlage geplant ist. Ein niedriger Preis kann attraktiv wirken, wenn aber Dachbelegung, Zählerschrank oder elektrische Einbindung nicht sauber berücksichtigt sind, ist der Vergleich oft schief.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tabelle',
        titel: 'Grobe Preisorientierung ohne Speicher',
        zeilen: [
          {
            id: new ObjectId().toString(),
            spalte1: 'Projekttyp',
            spalte2: 'typischer Preisbereich',
            spalte3: 'Bemerkung',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'einfaches Dach, übersichtliche Technik',
            spalte2: 'ca. 13.000 bis 14.500 €',
            spalte3: 'eher günstige Ausgangslage',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'typisches Einfamilienhaus',
            spalte2: 'ca. 14.500 bis 16.000 €',
            spalte3: 'realistische Standardorientierung',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'aufwendigeres Dach oder höhere Technikansprüche',
            spalte2: 'ca. 16.000 bis 18.000 €',
            spalte3: 'mehr Aufwand oder Zusatzkosten möglich',
          },
        ],
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('3. Was kostet dieselbe Anlage mit Speicher?')),
          p(
            t(
              'Mit Speicher steigt die Investition deutlich. Für viele 10 kWp Projekte liegt die grobe Orientierung dann oft bei rund 22.000 bis 29.000 Euro. Auch hier gilt: Je nach Speichergröße, Systemtechnik, Dachsituation und elektrischem Aufwand kann es nach oben oder unten abweichen.'
            )
          ),
          p(
            t(
              'Der Speicher ist dabei nicht einfach ein Zusatzprodukt, sondern ein eigener großer Kostenblock. Umso wichtiger ist es, ihn nicht aus dem Bauch heraus zu wählen, sondern passend zu Verbrauch, Anlagengröße und Nutzungsverhalten.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tabelle',
        titel: 'Grobe Preisorientierung mit Speicher',
        zeilen: [
          {
            id: new ObjectId().toString(),
            spalte1: 'Projekttyp',
            spalte2: 'typischer Preisbereich',
            spalte3: 'Bemerkung',
          },
          {
            id: new ObjectId().toString(),
            spalte1: '10 kWp mit kleinerem bis mittlerem Speicher',
            spalte2: 'ca. 22.000 bis 25.000 €',
            spalte3: 'gute Standardorientierung',
          },
          {
            id: new ObjectId().toString(),
            spalte1: '10 kWp mit mittlerem Speicher und sauberer Systemintegration',
            spalte2: 'ca. 25.000 bis 27.500 €',
            spalte3: 'häufige Praxisrange',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'aufwendigeres Projekt oder größere Speicherlösung',
            spalte2: 'ca. 27.500 bis 31.000 €',
            spalte3: 'je nach Technik und Ausgangslage',
          },
        ],
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tipp',
        titel: 'Speicher nicht als Pflicht verkaufen lassen',
        content: root(
          p(
            t(
              'Ein Speicher kann sehr sinnvoll sein, aber er ist kein Automatismus. Entscheidend ist, wie viel Solarstrom du tatsächlich in die Abend- und Nachtstunden verschieben kannst.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('4. Welche Kosten stecken in einer 10 kWp Anlage drin?')),
          p(
            t(
              'Die Gesamtkosten entstehen nicht nur durch die Module. Gerade bei einer 10 kWp Anlage spielen Montage, Anschluss, Planung und die technische Einbindung ins Gebäude eine große Rolle.'
            )
          ),
          ul(
            'Solarmodule',
            'Wechselrichter',
            'Unterkonstruktion',
            'DC- und AC-Verkabelung',
            'Montage auf dem Dach',
            'elektrischer Anschluss',
            'Planung, Anmeldung und Dokumentation',
            'optional: Stromspeicher',
            'optional: Anpassungen am Zählerschrank'
          ),
          p(
            t(
              'Wer Angebote vergleicht, sollte deshalb immer prüfen, welche Leistungen wirklich enthalten sind. Gleiche kWp-Zahl bedeutet noch lange nicht gleiches Projekt.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tabelle',
        titel: 'Typische Kostenblöcke',
        zeilen: [
          {
            id: new ObjectId().toString(),
            spalte1: 'Baustein',
            spalte2: 'Rolle im Gesamtpreis',
            spalte3: 'Worauf achten?',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Module',
            spalte2: 'zentraler Materialblock',
            spalte3: 'Leistung, Qualität, Optik',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Wechselrichter',
            spalte2: 'entscheidend für Systemauslegung',
            spalte3: 'Reserven und Erweiterbarkeit',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Montage / Unterkonstruktion / Kabel',
            spalte2: 'hoher Praxisanteil',
            spalte3: 'Dachform und Aufwand vor Ort',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Anschluss / Anmeldung / Inbetriebnahme',
            spalte2: 'oft unterschätzt',
            spalte3: 'muss sauber enthalten sein',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Speicher',
            spalte2: 'großer Zusatzblock',
            spalte3: 'sinnvoll statt maximal groß wählen',
          },
        ],
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('5. Was beeinflusst den Preis besonders stark?')),
          p(
            t(
              'Selbst bei gleicher Leistung kann eine 10 kWp Anlage am Ende deutlich unterschiedlich teuer sein. Das liegt nicht automatisch an überhöhten Preisen, sondern oft an realen Unterschieden im Projekt.'
            )
          ),
          ul(
            'Dachform und Dachhöhe',
            'Ausrichtung und nutzbare Fläche',
            'Verschattung durch Gauben, Kamine oder Bäume',
            'Zustand und Aufbau des Zählerschranks',
            'Leitungswege vom Dach bis zum Anschluss',
            'gewählte Komponenten und Systemarchitektur',
            'Speichergröße und Integrationsaufwand',
            'geplante Erweiterungen wie Wärmepumpe oder Wallbox'
          ),
          p(
            t(
              'Gerade der Zählerschrank ist oft ein klassischer Kostentreiber. Wird er im Angebot nicht sauber mitgedacht, taucht der Aufwand später als unangenehme Zusatzposition auf.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'hinweis',
        titel: 'Dachfläche gut nutzen',
        content: root(
          p(
            t(
              'Wenn Wärmepumpe oder E-Auto absehbar sind, ist eine zu klein geplante Anlage oft der eigentliche Fehler. Besser ist eine ehrliche Auslegung mit Blick auf die nächsten Jahre.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('6. Was ist an 10 kWp technisch und wirtschaftlich besonders?')),
          p(
            t(
              '10 kWp ist auch deshalb spannend, weil diese Größe in vielen Vergleichen und Berechnungen als typischer Referenzpunkt für Einfamilienhäuser auftaucht. Sie liegt oft an der Grenze dessen, was auf einer gut nutzbaren Dachfläche noch sehr sauber darstellbar ist.'
            )
          ),
          p(
            t(
              'Außerdem ist die 10-kWp-Schwelle energierechtlich relevant. Für Anlagen bis 10 kWp gilt aktuell ein eigener EEG-Vergütungssatz für eingespeisten Strom. Diese Grenze allein sollte zwar nicht deine gesamte Planung bestimmen, sie ist aber für die Einordnung trotzdem wichtig.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tipp',
        titel: '10 kWp nicht nur wegen der Grenze bauen',
        content: root(
          p(
            t(
              'Die wirtschaftlich beste Lösung ergibt sich aus Dach, Verbrauch und Zielsetzung – nicht aus einer reinen Fixierung auf eine runde Zahl. Die 10-kWp-Grenze ist relevant, ersetzt aber keine saubere Planung.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('7. Für wen ist 10 kWp mit Speicher oft sinnvoll?')),
          p(
            t(
              'Eine 10 kWp Anlage mit Speicher passt häufig gut zu Haushalten, die einen spürbaren Strombedarf haben und einen relevanten Teil ihres Solarstroms nicht nur tagsüber, sondern auch am Abend nutzen wollen.'
            )
          ),
          ul(
            'Familienhaushalte mit konstantem Strombedarf',
            'Haushalte mit Wärmepumpe',
            'Haushalte mit geplanter oder vorhandener Wallbox',
            'Häuser mit guter nutzbarer Dachfläche',
            'Nutzer, die Eigenverbrauch und Unabhängigkeit erhöhen wollen'
          ),
          p(
            t(
              'Ob das konkret passt, hängt aber immer davon ab, wie dein Strombedarf über den Tag verteilt ist und wie gut Dach, Speicher und spätere Verbraucher zusammenpassen.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('8. Welche laufenden Kosten sollte man mitdenken?')),
          p(
            t(
              'Die Anschaffung ist der größte Block, aber nicht die einzige Zahl. Zu einer ehrlichen Betrachtung gehören auch spätere Betriebskosten und Rücklagen.'
            )
          ),
          ul(
            'Versicherung oder Anpassung bestehender Policen',
            'gelegentliche Sicht- und Funktionskontrolle',
            'Rücklagen für Wechselrichter oder spätere Komponenten',
            'mögliche Service- oder Prüfkosten',
            'bei ungünstigen Dachsituationen eventuell Reinigung'
          ),
          p(
            t(
              'Diese Kosten sind meistens überschaubar, sollten aber in keiner Wirtschaftlichkeitsbetrachtung komplett fehlen.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('9. Typische Fehler bei 10 kWp Projekten')),
          p(
            t(
              'Viele Fehler entstehen nicht wegen der Leistungsklasse, sondern weil bei der Planung an den falschen Stellen vereinfacht wird.'
            )
          ),
          ul(
            'nur auf den Endpreis schauen',
            'Speicher blind als Pflicht einplanen',
            'Zählerschrank zu spät prüfen',
            'Wärmepumpe oder Wallbox nicht mitdenken',
            'Dachbelegung unnötig klein halten',
            'Angebote vergleichen, obwohl Leistungen nicht identisch sind'
          ),
          p(
            t(
              'Eine gute 10 kWp Anlage ist nicht die billigste, sondern die, die technisch sauber geplant ist und im Alltag langfristig funktioniert.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'cta',
        titel: 'Lass uns deine 10 kWp Anlage realistisch einordnen',
        text:
          'Wir schauen uns Dach, Verbrauch, Speicher, Zählerschrank und spätere Erweiterungen gemeinsam an – ehrlich, praxisnah und ohne Verkaufsdruck.',
        buttonText: 'Jetzt Beratung anfragen',
        buttonLink: '/kontakt',
      },
    ],

    faq: [
      {
        id: new ObjectId().toString(),
        frage: 'Was kostet eine 10 kWp Solaranlage ohne Speicher aktuell ungefähr?',
        antwort:
          'Als grobe Orientierung liegt eine 10 kWp Anlage ohne Speicher heute oft im Bereich von rund 13.000 bis 16.000 Euro. Je nach Dach, Technik und Aufwand vor Ort kann es aber abweichen.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Was kostet eine 10 kWp Solaranlage mit Speicher?',
        antwort:
          'Für viele Projekte liegt die grobe Orientierung mit Speicher heute oft bei etwa 22.000 bis 29.000 Euro. Die genaue Summe hängt stark von Speichergröße, Zählerschrank, Dach und Systemtechnik ab.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Ist 10 kWp für ein Einfamilienhaus immer die richtige Größe?',
        antwort:
          'Nein. 10 kWp ist eine häufig sinnvolle Größenordnung, aber nicht automatisch für jedes Haus ideal. Entscheidend sind Dachfläche, Verbrauch, Verschattung und geplante Zusatzverbraucher.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Warum unterscheiden sich Angebote für 10 kWp teilweise so stark?',
        antwort:
          'Weil Dachform, Montageaufwand, Speichergröße, Zählerschrank, Leitungswege und enthaltene Leistungen sehr unterschiedlich sein können. Gleiche Leistung heißt nicht automatisch gleiches Projekt.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Sollte ich bei 10 kWp direkt einen Speicher mitplanen?',
        antwort:
          'Zumindest konzeptionell ja. Ob ein Speicher sofort sinnvoll ist, hängt davon ab, wie viel Solarstrom du in die Abend- und Nachtstunden verschieben kannst und welche Verbraucher im Haus vorhanden sind.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Welche Rolle spielt die 10-kWp-Grenze?',
        antwort:
          'Sie ist für die energierechtliche Einordnung relevant und spielt bei der Einspeisevergütung eine Rolle. Sie sollte aber nicht der einzige Grund sein, warum eine Anlage genau auf diese Größe geplant wird.',
      },
    ],

    seo: {
      metaTitle: 'Was kostet eine 10 kWp Solaranlage mit Speicher? | PEAK.Energy – WE ♥️ ENERGY',
      metaDescription:
        '10 kWp Solaranlage mit Speicher: aktuelle Kosten, Preisfaktoren, Speicher-Einordnung und typische Fehler – ehrlich erklärt von PEAK.Energy.',
    },
  })

  console.log('✅ Artikel erfolgreich angelegt: kosten-10-kwp-solaranlage-mit-speicher')
  await client.close()
}

seed().catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
