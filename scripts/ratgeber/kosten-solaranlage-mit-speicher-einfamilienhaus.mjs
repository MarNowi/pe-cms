// Ausführen mit:
// node scripts/ratgeber/kosten-solaranlage-mit-speicher-einfamilienhaus.mjs
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

  await col.deleteMany({ slug: 'kosten-solaranlage-mit-speicher-einfamilienhaus' })

  await col.insertOne({
    _id: new ObjectId(),
    titel: 'Was kostet eine Solaranlage mit Speicher für ein Einfamilienhaus?',
    slug: 'kosten-solaranlage-mit-speicher-einfamilienhaus',
    kategorie: 'solaranlage',
    teaser:
      'Die Kosten für eine Solaranlage mit Speicher hängen nicht nur von der kWp-Zahl ab, sondern auch von Dach, Zählerschrank, Speichergröße und späteren Verbrauchern wie Wärmepumpe oder E-Auto. So ordnest du realistische Preisrahmen sauber ein.',
    lesezeit: 14,
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
            bold('Für ein typisches Einfamilienhaus ist eine PV-Anlage mit Speicher oft eine Investition im mittleren fünfstelligen Bereich'),
            t(' – der genaue Preis hängt aber stark von Dach, Anlagengröße, Speicher und technischer Ausgangslage ab.')
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        punkt: root(
          p(
            bold('Nicht nur die Module kosten Geld'),
            t(' – auch Wechselrichter, Unterkonstruktion, Verkabelung, Montage, Anmeldung und ein möglicher Umbau des Zählerschranks gehören zur Gesamtrechnung.')
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        punkt: root(
          p(
            bold('Ein Speicher kann sinnvoll sein, ist aber kein Selbstzweck'),
            t(' – er sollte zur Anlage, zum Verbrauch und zu deinem Alltag passen und nicht nur auf dem Papier gut aussehen.')
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        punkt: root(
          p(
            bold('Wer sauber plant, spart später doppelt'),
            t(' – durch mehr Eigenverbrauch, weniger Nachrüstungen und eine Anlage, die technisch und wirtschaftlich langfristig funktioniert.')
          )
        ),
      },
    ],

    inhalt: [
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('1. Was kostet eine Solaranlage mit Speicher wirklich?')),
          p(
            t(
              'Viele Preisangaben im Internet wirken auf den ersten Blick klar. In der Praxis sind sie aber oft nur grobe Orientierungswerte. Der reale Preis entsteht immer aus der Kombination von Dach, Anlagengröße, Speicher, technischer Infrastruktur und Aufwand vor Ort.'
            )
          ),
          p(
            t(
              'Für ein Einfamilienhaus kann eine kleine bis mittlere PV-Anlage ohne Speicher grob im unteren bis mittleren fünfstelligen Bereich liegen. Mit Speicher verschiebt sich das Gesamtbudget meist deutlich nach oben. Entscheidend ist deshalb nicht nur die Frage „Was kostet die Anlage?“, sondern: „Was bekomme ich dafür – und passt das System sauber zu meinem Haus?“'
            )
          ),
          p(
            t(
              'Genau hier trennt sich ehrliche Planung von reiner Angebotsoptik. Eine gute Anlage ist nicht die billigste auf dem Papier, sondern die, die auf deinem Dach sauber funktioniert und wirtschaftlich nachvollziehbar bleibt.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tabelle',
        titel: 'Grobe Orientierung für typische Preisbereiche',
        zeilen: [
          {
            id: new ObjectId().toString(),
            spalte1: 'Anlagengröße / Situation',
            spalte2: 'ohne Speicher',
            spalte3: 'mit Speicher',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'kleinere Anlage für niedrigen Verbrauch',
            spalte2: 'ca. 9.000 bis 13.000 €',
            spalte3: 'ca. 16.000 bis 22.000 €',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'typisches Einfamilienhaus mit mittlerem Verbrauch',
            spalte2: 'ca. 13.000 bis 18.000 €',
            spalte3: 'ca. 22.000 bis 29.000 €',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'größere Anlage z. B. mit Wärmepumpe oder E-Auto',
            spalte2: 'ca. 18.000 bis 26.000 €',
            spalte3: 'ca. 29.000 bis 39.000 €',
          },
        ],
      },
      {
        id: new ObjectId().toString(),
        blockType: 'hinweis',
        titel: 'Wichtig zur Einordnung',
        content: root(
          p(
            t(
              'Diese Werte sind bewusst als grobe Orientierung gedacht. Dachform, Gerüst, Leitungswege, Zählerschrank, Modulwahl, Speichergröße und regionale Montagesituation können den Preis spürbar beeinflussen.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('2. Wie setzen sich die Kosten zusammen?')),
          p(
            t(
              'Die Gesamtkosten einer PV-Anlage bestehen aus deutlich mehr als nur den Solarmodulen. Gerade bei Einfamilienhäusern werden Preisvergleiche schnell schief, wenn nur auf den Endpreis geschaut wird.'
            )
          ),
          p(t('Typische Kostenbausteine sind:')),
          ul(
            'Solarmodule',
            'Wechselrichter',
            'Unterkonstruktion und Verkabelung',
            'Montage auf dem Dach',
            'elektrischer Anschluss und Inbetriebnahme',
            'Planung, Anmeldung und Dokumentation',
            'optional: Stromspeicher',
            'optional: Anpassungen am Zählerschrank'
          ),
          p(
            t(
              'Je nach Projekt entfällt ein großer Teil der Kosten nicht auf das Material allein, sondern auf Planung, Montage, Anschluss und die technische Einbindung ins Gebäude. Genau deshalb sind vermeintlich billige Vergleichspreise oft nicht sauber vergleichbar.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tabelle',
        titel: 'Typische Kostenblöcke einer PV-Anlage',
        zeilen: [
          {
            id: new ObjectId().toString(),
            spalte1: 'Baustein',
            spalte2: 'typische Rolle im Gesamtpreis',
            spalte3: 'Bemerkung',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Module',
            spalte2: 'wesentlicher Materialblock',
            spalte3: 'Qualität, Leistung und Optik wirken sich aus',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Wechselrichter',
            spalte2: 'zentral für die Systemauslegung',
            spalte3: 'muss zur Anlage und zu möglichen Erweiterungen passen',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Unterkonstruktion / Kabel / Montage',
            spalte2: 'hoher Praxisanteil',
            spalte3: 'stark abhängig von Dach und Aufwand vor Ort',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Planung / Anschluss / Anmeldung',
            spalte2: 'oft unterschätzt',
            spalte3: 'gehört zwingend zur Gesamtrechnung',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Speicher',
            spalte2: 'separater größerer Zusatzblock',
            spalte3: 'sollte sinnvoll dimensioniert werden',
          },
        ],
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('3. Welche Faktoren treiben den Preis nach oben oder unten?')),
          p(
            t(
              'Nicht jede 10-kWp-Anlage kostet gleich viel. Zwei Häuser mit ähnlichem Verbrauch können am Ende deutlich unterschiedliche Angebote bekommen – und das ist oft völlig plausibel.'
            )
          ),
          ul(
            'Dachform, Dachhöhe und Zugänglichkeit',
            'Ausrichtung und nutzbare Fläche',
            'Verschattung durch Gauben, Kamine, Bäume oder Nachbargebäude',
            'Qualität und Leistung der Module',
            'gewählte Wechselrichter- und Speichertechnik',
            'Länge und Komplexität der Leitungswege',
            'Zustand des Zählerschranks',
            'spätere Erweiterungen wie Wärmepumpe oder Wallbox'
          ),
          p(
            t(
              'Besonders beim Zählerschrank wird es oft interessant: Ist dort Anpassungsbedarf vorhanden, taucht dieser Punkt nicht als „versteckter Aufpreis“ auf, sondern als notwendiger Teil einer technisch sauberen Umsetzung.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tipp',
        titel: 'Nicht zu klein denken',
        content: root(
          p(
            t(
              'Wer heute schon weiß, dass später eine Wärmepumpe oder ein E-Auto dazukommt, sollte das direkt in die Auslegung einbeziehen. Spätere Nachrüstung ist oft teurer und ungeschickter als eine saubere Planung von Anfang an.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('4. Was kostet der Speicher – und wann ist er sinnvoll?')),
          p(
            t(
              'Ein Stromspeicher erhöht den Gesamtpreis spürbar. Gleichzeitig kann er den Eigenverbrauch deutlich verbessern, weil tagsüber erzeugter Solarstrom am Abend oder in der Nacht genutzt werden kann.'
            )
          ),
          p(
            t(
              'Ob sich ein Speicher in deinem Fall lohnt, hängt nicht nur von der Technik ab, sondern vor allem von deinem Verbrauchsverhalten. Wer tagsüber wenig zu Hause ist und abends einen relevanten Strombedarf hat, profitiert oft stärker als jemand, der Solarstrom ohnehin direkt verbraucht.'
            )
          ),
          p(
            t(
              'Wichtig ist vor allem die saubere Dimensionierung. Ein zu kleiner Speicher verschenkt Potenzial, ein zu großer Speicher sieht im Verkaufsgespräch manchmal besser aus als in der Realität.'
            )
          ),
          ul(
            'Abend- und Nachtverbrauch prüfen',
            'Anlagengröße und Speichergröße zusammen denken',
            'Wärmepumpe und E-Auto mit berücksichtigen',
            'nicht maximale Autarkie, sondern sinnvolle Praxis anstreben'
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'hinweis',
        titel: 'Speicher ist kein Pflichtfeld',
        content: root(
          p(
            t(
              'Ein Speicher kann sinnvoll sein – muss aber zur Nutzung passen. Gute Planung heißt nicht, alles maximal groß auszulegen, sondern das System sauber auf den tatsächlichen Bedarf abzustimmen.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('5. Typische Beispiele für Einfamilienhäuser')),
          p(
            t(
              'Zur ersten Einordnung helfen Praxisbilder mehr als abstrakte kWp-Zahlen. Die folgenden Fälle sind keine exakten Angebote, sondern typische Denkrichtungen.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tabelle',
        titel: 'Praxisnahe Orientierung',
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
            spalte2: 'kleinere bis mittlere Anlage',
            spalte3: 'nicht blind zu groß oder zu klein planen',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Familie mit 3–4 Personen',
            spalte2: 'mittlere Anlage, Speicher oft interessant',
            spalte3: 'tagsüberer Verbrauch und Abendnutzung prüfen',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Haushalt mit Wärmepumpe',
            spalte2: 'größere PV-Anlage sinnvoll',
            spalte3: 'Winterverbrauch realistisch einordnen',
          },
          {
            id: new ObjectId().toString(),
            spalte1: 'Haushalt mit Wärmepumpe und E-Auto',
            spalte2: 'Dachfläche möglichst gut nutzen',
            spalte3: 'Lastmanagement, Wallbox und Speicher gemeinsam denken',
          },
        ],
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('6. Welche laufenden Kosten kommen später noch dazu?')),
          p(
            t(
              'Auch wenn eine PV-Anlage sehr wartungsarm ist, endet die Kalkulation nicht mit dem Kaufpreis. Es gibt laufende Kosten und Rücklagen, die du ehrlich mitdenken solltest.'
            )
          ),
          ul(
            'regelmäßige Sicht- und Funktionskontrolle',
            'gegebenenfalls Reinigung bei ungünstigen Dachsituationen',
            'Versicherung oder Erweiterung bestehender Policen',
            'Rücklagen für Wechselrichter oder spätere Komponenten',
            'eventuelle Service- oder Prüfkosten'
          ),
          p(
            t(
              'Diese Kosten sind im Verhältnis zur gesamten Stromersparnis meist überschaubar, gehören aber zu einer sauberen Wirtschaftlichkeitsbetrachtung dazu.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('7. Warum reine Preisvergleiche oft in die Irre führen')),
          p(
            t(
              'Die Frage „Wer ist am billigsten?“ klingt logisch, hilft aber bei PV oft nur begrenzt. Ein günstiger Preis ist wenig wert, wenn Dachbelegung, Speichergröße, Zählerschrank oder spätere Erweiterbarkeit nicht sauber bedacht wurden.'
            )
          ),
          p(
            t(
              'Besonders problematisch sind Vergleiche, bei denen Angebote auf dem Papier ähnlich wirken, aber in Wahrheit unterschiedliche Qualität, andere Speichergrößen, weniger Montageaufwand oder unvollständige Nebenleistungen enthalten.'
            )
          ),
          ul(
            'Sind Anmeldung und Inbetriebnahme enthalten?',
            'Ist der Zählerschrank sauber betrachtet?',
            'Passt die Speichergröße wirklich zur Anlage?',
            'Wurden Leitungswege und Montagesituation realistisch kalkuliert?',
            'Ist spätere Erweiterung mitgedacht?'
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'tipp',
        titel: 'Nicht nur den Endpreis lesen',
        content: root(
          p(
            t(
              'Bei Angeboten ist nicht nur wichtig, was unten rechts steht, sondern was technisch wirklich enthalten ist. Genau dort entstehen später oft die Unterschiede zwischen „günstig gekauft“ und „sauber geplant“.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('8. Wann lohnt sich die Investition?')),
          p(
            t(
              'Eine Solaranlage mit Speicher lohnt sich nicht deshalb, weil jemand eine besonders schöne Hochglanzrechnung zeigt. Sie lohnt sich dann, wenn sie zu deinem Dach, deinem Verbrauch und deinen Zielen passt.'
            )
          ),
          p(
            t(
              'Je mehr selbst erzeugter Strom im Haus genutzt wird, desto stärker sinkt meist die Abhängigkeit vom Netzstrom. Genau deshalb ist eine gute Kombination aus Anlagengröße, Verbrauchsprofil und Speicher oft wichtiger als eine aggressive Verkaufsaussage zur maximalen Autarkie.'
            )
          ),
          p(
            t(
              'Unterm Strich gilt: Die beste Lösung ist meist nicht die kleinste, aber auch nicht automatisch die größte. Entscheidend ist die saubere Auslegung.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'text',
        content: root(
          h('h2', t('9. Typische Fehler bei der Kostenplanung')),
          p(
            t(
              'Die meisten Fehlentscheidungen entstehen nicht auf dem Dach, sondern schon davor – bei falschen Annahmen, zu kurzen Vergleichen oder zu optimistischen Erwartungen.'
            )
          ),
          ul(
            'nur auf den Gesamtpreis schauen',
            'zukünftige Verbraucher nicht einplanen',
            'Speicher nach Gefühl statt nach Nutzung auswählen',
            'Zählerschrank und elektrische Infrastruktur übersehen',
            'Dachfläche unnötig klein belegen',
            'laufende Kosten und Rücklagen ausblenden'
          ),
          p(
            t(
              'Wer diese Punkte sauber klärt, bekommt nicht nur ein besseres Angebot, sondern meist auch das bessere Gesamtsystem.'
            )
          )
        ),
      },
      {
        id: new ObjectId().toString(),
        blockType: 'cta',
        titel: 'Lass uns deine Anlage realistisch einordnen',
        text:
          'Wir schauen uns Dach, Verbrauch, Speicher, spätere Erweiterungen und die technische Ausgangslage gemeinsam an – ehrlich, praxisnah und ohne Verkaufsdruck.',
        buttonText: 'Jetzt Beratung anfragen',
        buttonLink: '/kontakt',
      },
    ],

    faq: [
      {
        id: new ObjectId().toString(),
        frage: 'Was kostet eine Solaranlage mit Speicher für ein Einfamilienhaus ungefähr?',
        antwort:
          'Das hängt von Anlagengröße, Dach, Speicher, Zählerschrank und Aufwand vor Ort ab. Für viele Einfamilienhäuser bewegt sich die Investition mit Speicher grob im mittleren fünfstelligen Bereich.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Wie groß sollte eine PV-Anlage für ein Einfamilienhaus sein?',
        antwort:
          'Das richtet sich nicht nur nach dem heutigen Stromverbrauch, sondern auch nach Dachfläche, Ausrichtung und künftigen Verbrauchern wie Wärmepumpe oder E-Auto. Eine saubere Auslegung ist wichtiger als pauschale Faustregeln.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Ist ein Speicher bei einer Solaranlage immer sinnvoll?',
        antwort:
          'Nicht automatisch. Ein Speicher kann sehr sinnvoll sein, wenn er zum Verbrauchsverhalten und zur Anlagengröße passt. Er sollte aber nicht als Pflicht verkauft, sondern sauber dimensioniert werden.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Warum unterscheiden sich Angebote für ähnliche Anlagen teilweise so stark?',
        antwort:
          'Weil Dach, Montageaufwand, Leitungswege, Speichergröße, Zählerschrank, enthaltene Leistungen und Qualität der Komponenten stark variieren können. Gleiche kWp-Zahlen bedeuten nicht automatisch gleiche Projekte.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Welche Kosten werden bei PV-Angeboten häufig unterschätzt?',
        antwort:
          'Oft werden der Zählerschrank, elektrische Anpassungen, Anmeldung, Inbetriebnahme, Leitungswege und spätere Erweiterungen zu spät berücksichtigt. Genau diese Punkte beeinflussen den Gesamtpreis aber häufig spürbar.',
      },
      {
        id: new ObjectId().toString(),
        frage: 'Sollte ich Wärmepumpe oder Wallbox direkt mit einplanen?',
        antwort:
          'Ja, wenn sie absehbar sind. Eine spätere Nachrüstung ist oft teurer und unpraktischer als eine von Anfang an sauber geplante PV-Anlage mit ausreichend Reserve und passender Technik.',
      },
    ],

    seo: {
      metaTitle:
        'Was kostet eine Solaranlage mit Speicher fürs Einfamilienhaus? | PEAK.Energy',
      metaDescription:
        'Realistische Kosten für Solaranlage mit Speicher im Einfamilienhaus: Preisrahmen, Einflussfaktoren, Speicher, Zählerschrank und typische Fehler – ehrlich erklärt von PEAK.Energy.',
    },
  })

  console.log('✅ Artikel erfolgreich angelegt: kosten-solaranlage-mit-speicher-einfamilienhaus')
  await client.close()
}

seed().catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
