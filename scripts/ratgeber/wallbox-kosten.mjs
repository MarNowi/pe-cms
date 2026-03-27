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
  titel: 'Was kostet eine Wallbox? Anschaffung, Installation und laufende Kosten 2026',
  slug: 'wallbox-kosten',
  kategorie: 'wallbox',
  status: 'veroeffentlicht',
  teaser:
    'Die Kosten für eine Wallbox hängen nicht nur vom Gerät ab. Entscheidend sind vor allem Montageort, Kabelweg, Zählerschrank und die Frage, ob später PV, Lastmanagement oder ein zweites E-Auto dazukommen sollen.',
  lesezeit: 10,

  seo: {
    metaTitle: 'Wallbox Kosten 2026: Anschaffung, Installation & Betrieb | PEAK.Energy',
    metaDescription:
      'Was kostet eine Wallbox wirklich? Wir zeigen, womit Sie bei Kauf, Installation und Betrieb rechnen sollten – ehrlich, praxisnah und ohne Lockangebote.',
  },

  zusammenfassung: [
    {
      punkt: rich(
        paragraph(
          'Eine Wallbox selbst kostet je nach Hersteller, Leistung und Ausstattung grob zwischen etwa 200 und 2.000 Euro.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Für die Installation kommen häufig noch rund 500 bis 3.000 Euro hinzu. In einfachen Einfamilienhaus-Situationen liegt ein Gesamtprojekt oft deutlich günstiger als in komplexeren Bestandsgebäuden mit langen Kabelwegen oder Anpassungen am Zählerschrank.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Für private Wallboxen gilt: Die Ladeeinrichtung muss dem Netzbetreiber vor Inbetriebnahme gemeldet werden. Bei Ladeleistung oberhalb von rund 11 kW ist zusätzlich eine Genehmigung erforderlich.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Für die meisten Privathaushalte reicht 11 kW in der Praxis aus. Entscheidend für die Wirtschaftlichkeit ist meist nicht nur das Gerät, sondern die saubere Einbindung in Haus, Nutzung und spätere Erweiterungen.',
        ),
      ),
    },
  ],

  inhalt: [
    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was kostet eine Wallbox wirklich?'),
        paragraph(
          'Wer nach den Kosten einer Wallbox sucht, bekommt im Internet oft sehr glatte Zahlen. In der Praxis ist es aber wie so oft im Handwerk: Das Gerät selbst ist nur ein Teil der Rechnung. Ob eine Wallbox am Ende günstig oder teuer wird, entscheidet vor allem die Installation vor Ort.',
        ),
        paragraph(
          'Genau deshalb sollte man Wallbox-Kosten nicht nur nach Shop-Preis vergleichen. Wichtiger ist die Frage: Was kostet die Lösung insgesamt, sauber geplant und fachgerecht installiert?',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Woraus setzen sich die Wallbox-Kosten zusammen?'),
        paragraph(
          'Im Kern bestehen die Kosten aus vier Bausteinen: dem Gerätepreis der Wallbox, der Elektroinstallation, der Anmeldung oder Genehmigung sowie den laufenden Betriebskosten.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h3', '1. Die Wallbox selbst'),
        paragraph(
          'Der Gerätepreis hängt vor allem von diesen Punkten ab:',
        ),
        bulletList([
          '11 kW oder 22 kW',
          'App-Steuerung oder einfache Ausführung',
          'Zugangsschutz per RFID',
          'Lastmanagement',
          'PV-Kompatibilität',
          'eichrechtskonforme Erfassung für Sonderfälle',
        ]),
        paragraph(
          'Einfache Modelle sind deutlich günstiger, komfortablere oder systemfähige Wallboxen teurer. Der Markt bewegt sich hier grob von rund 200 bis 2.000 Euro, je nach Ausstattung und Qualitätsniveau.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h3', '2. Die Elektroinstallation'),
        paragraph(
          'Hier entsteht in der Praxis der größere Unterschied zwischen zwei Angeboten. Kostentreiber sind unter anderem:',
        ),
        bulletList([
          'Entfernung zwischen Zählerschrank und Stellplatz',
          'Wanddurchbrüche',
          'Erdarbeiten oder Kabelgräben',
          'Zustand der Hauselektrik',
          'Platz im Zählerschrank',
          'separater Leitungsschutz und FI',
          'mögliche Modernisierung älterer Verteilungen',
        ]),
        paragraph(
          'Gerade in Bestandsgebäuden wird nicht die Wallbox teuer, sondern der Weg dorthin. Typische Installationskosten liegen oft bei etwa 500 bis 3.000 Euro.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h3', '3. Anmeldung oder Genehmigung'),
        paragraph(
          'Die Installation einer Wallbox muss vor der Inbetriebnahme dem Netzbetreiber mitgeteilt werden. Oberhalb von etwa 11 kW ist eine Genehmigung des Netzbetreibers erforderlich. Das ist kein Detail, sondern ein fester Planungspunkt.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h3', '4. Laufende Kosten'),
        paragraph(
          'Die laufenden Kosten sind im Verhältnis zur Anschaffung meist überschaubar. Entscheidend ist vor allem der Strompreis. Hinzu kommen je nach technischer Ausführung Mess- und Steuerungsthemen sowie gegebenenfalls Wartung oder Prüfung in größeren Abständen.',
        ),
        paragraph(
          'Die eigentliche Wirtschaftlichkeit der Wallbox hängt deshalb weniger an der Hardware, sondern viel stärker daran, wie und wann geladen wird.',
        ),
      ),
    },

    {
      blockType: 'tipp',
      titel: 'Nicht nur den Gerätepreis vergleichen',
      content: rich(
        paragraph(
          'Ein attraktiver Shop-Preis klingt gut, sagt aber oft wenig über die Gesamtkosten aus. Wenn später Kabelweg, Absicherung, Anmeldung oder Anpassungen am Zählerschrank hinzukommen, verschiebt sich die Rechnung schnell deutlich.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was kostet eine Wallbox im Einfamilienhaus realistisch?'),
        paragraph(
          'Für ein typisches Einfamilienhaus mit gut erreichbarem Stellplatz lässt sich grob so rechnen:',
        ),
      ),
    },

    {
      blockType: 'tabelle',
      titel: 'Typische Kostenbereiche',
      zeilen: [
        {
          spalte1: 'Einfache Lösung',
          spalte2: 'ca. 1.000 bis 2.100 €',
          spalte3: 'Wallbox ca. 400–900 € + Installation ca. 600–1.200 €',
        },
        {
          spalte1: 'Solide Lösung mit App und sauberer Einbindung',
          spalte2: 'ca. 1.600 bis 3.200 €',
          spalte3: 'Wallbox ca. 700–1.400 € + Installation ca. 900–1.800 €',
        },
        {
          spalte1: 'Anspruchsvollere Lösung im Bestand',
          spalte2: 'ab ca. 2.400 € aufwärts',
          spalte3: 'Wallbox ca. 900–2.000 € + Installation ca. 1.500–3.000 € oder mehr',
        },
      ],
    },

    {
      blockType: 'text',
      content: rich(
        paragraph(
          'Diese Größenordnung passt auch zu typischen Marktspannen aus aktuellen Ratgebern. Entscheidend bleibt aber immer die Situation vor Ort.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Warum unterscheiden sich Angebote oft so stark?'),
        paragraph(
          'Weil zwei Häuser auf dem Papier ähnlich aussehen können, technisch aber völlig unterschiedlich sind.',
        ),
        paragraph(
          'Ein günstiger Preis funktioniert meistens dann, wenn:',
        ),
        bulletList([
          'der Stellplatz nah am Haus liegt',
          'der Zählerschrank in Ordnung ist',
          'keine langen Leitungswege nötig sind',
          'keine zusätzlichen Tiefbauarbeiten anfallen',
        ]),
        paragraph(
          'Teurer wird es häufig dann, wenn:',
        ),
        bulletList([
          'der Stellplatz weiter entfernt liegt',
          'Garage oder Carport separat stehen',
          'der Zählerschrank angepasst werden muss',
          'mehrere Ladepunkte oder späteres Lastmanagement mitgedacht werden sollen',
        ]),
        paragraph(
          'Genau deshalb sind reine Online-Preisvergleiche bei Wallboxen oft nur bedingt hilfreich.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', '11 kW oder 22 kW – was ist sinnvoll?'),
        paragraph(
          'Für die meisten privaten Haushalte ist 11 kW die vernünftige Wahl. Diese Leistung reicht im Alltag in vielen Fällen aus und ist regulatorisch einfacher, weil in der Regel nur die Anmeldung nötig ist. Oberhalb von 11 kW wird eine Genehmigung durch den Netzbetreiber erforderlich.',
        ),
        paragraph(
          '22 kW können sinnvoll sein, wenn:',
        ),
        bulletList([
          'das Fahrzeug es überhaupt AC-seitig nutzen kann',
          'das Nutzungsprofil kurze Ladefenster erfordert',
          'die elektrische Infrastruktur dafür geeignet ist',
        ]),
        paragraph(
          'In vielen Einfamilienhäusern bringt 22 kW im Alltag aber weniger Vorteil, als man zunächst denkt.',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: '11 kW sind oft die saubere Privat-Lösung',
      content: rich(
        paragraph(
          'Viele Wallbox-Projekte im Einfamilienhaus werden nicht durch die Ladeleistung besser, sondern durch eine saubere Einbindung in Hausanschluss, Zählerschrank und Alltag. Genau deshalb sind 11 kW oft die vernünftigere Lösung.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Welche Förderungen gibt es aktuell?'),
        paragraph(
          'Eine bundesweite KfW-Förderung für private Wallboxen gibt es derzeit nicht mehr. Gleichzeitig gibt es regional weiterhin Programme einzelner Länder, Städte oder Gemeinden.',
        ),
        paragraph(
          'Wer Förderungen nutzen will, sollte deshalb immer zuerst regional prüfen:',
        ),
        bulletList([
          'Bundesland',
          'Kommune',
          'lokaler Energieversorger',
          'Sonderprogramme für Mehrfamilienhäuser',
        ]),
        paragraph(
          'Wichtig ist dabei: Förderbedingungen ändern sich. Vor Kauf und Installation sollte deshalb immer der aktuelle Stand geprüft werden.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Lohnt sich eine Wallbox überhaupt?'),
        paragraph(
          'Ja, in vielen Fällen schon. Aber nicht nur wegen des Komforts.',
        ),
        paragraph(
          'Der größte Vorteil ist nicht, dass das Auto einfach irgendwie zu Hause lädt. Der eigentliche Vorteil ist:',
        ),
        bulletList([
          'planbares Laden am eigenen Stellplatz',
          'geringere Abhängigkeit von öffentlicher Ladeinfrastruktur',
          'bessere Integration mit PV',
          'bessere Steuerbarkeit über Zeitfenster, Strompreis oder Energiemanagement',
        ]),
        paragraph(
          'Wenn später zusätzlich eine Solaranlage dazukommt, wird die Wallbox noch interessanter. Dann geht es nicht mehr nur um Laden zu Hause, sondern um das Laden mit eigenem Strom.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Worauf Sie beim Kauf nicht nur auf den Preis schauen sollten'),
        paragraph(
          'Eine Wallbox sollte nicht nur heute passen, sondern auch in zwei oder fünf Jahren noch sinnvoll sein.',
        ),
        paragraph(
          'Darauf würden wir achten:',
        ),
        bulletList([
          'Saubere Grundfrage 1: Passt die Wallbox zur elektrischen Situation? Nicht jedes Haus ist ohne Anpassung sofort bereit.',
          'Saubere Grundfrage 2: Passt sie zu Ihrem Fahrzeug und Alltag? Nicht jeder braucht 22 kW. Nicht jede App ist ein echter Mehrwert.',
          'Saubere Grundfrage 3: Soll später PV oder Lastmanagement dazukommen? Dann sollte die Wallbox nicht isoliert gedacht werden.',
          'Saubere Grundfrage 4: Ist das Angebot vollständig? Ein sehr niedriger Gerätepreis hilft wenig, wenn Kabelweg, Absicherung, Anmeldung oder Anpassungen im Zählerschrank später extra dazukommen.',
        ]),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Unser Fazit'),
        paragraph(
          'Die Frage „Was kostet eine Wallbox?“ lässt sich ehrlich nur so beantworten:',
        ),
        paragraph(
          'Die Wallbox selbst ist oft nicht das Problem. Die eigentlichen Kosten entstehen durch die technische Realität vor Ort.',
        ),
        paragraph(
          'Wer nur den Shop-Preis vergleicht, vergleicht meistens zu kurz. Wer dagegen Gerät, Montageort, Zählerschrank, Leitungsweg und spätere Erweiterungen zusammen betrachtet, bekommt eine Lösung, die nicht nur heute günstig aussieht, sondern langfristig passt.',
        ),
        paragraph(
          'Gerade bei einer Wallbox lohnt sich deshalb eine konservative, saubere Planung mehr als ein vermeintlich billiger Einstieg.',
        ),
      ),
    },

    {
      blockType: 'cta',
      titel: 'Wallbox sinnvoll planen statt nur billig kaufen',
      text:
        'Wenn Wallbox, Hausanschluss, Zählerschrank und spätere Erweiterungen sauber zusammen gedacht werden, entsteht eine Lösung, die im Alltag wirklich funktioniert – und nicht nur auf dem Papier gut aussieht.',
      buttonText: 'Wallbox anfragen',
      buttonLink: '/wallbox',
    },
  ],

  faq: [
    {
      frage: 'Was kostet eine Wallbox mit Installation?',
      antwort:
        'In vielen Einfamilienhäusern liegt ein realistischer Gesamtbereich grob zwischen etwa 1.500 und 3.500 Euro. Nach unten und oben sind Abweichungen möglich, je nach Gerät, Kabelweg, Zählerschrank und Montageaufwand.',
    },
    {
      frage: 'Muss eine Wallbox angemeldet werden?',
      antwort:
        'Ja. Die Installation muss dem Netzbetreiber vor Inbetriebnahme mitgeteilt werden. Bei Wallboxen oberhalb von rund 11 kW ist zusätzlich eine Genehmigung erforderlich.',
    },
    {
      frage: 'Reicht 11 kW zu Hause aus?',
      antwort:
        'Für viele private Haushalte ja. 11 kW sind in der Praxis oft ausreichend und regulatorisch einfacher als 22 kW.',
    },
    {
      frage: 'Gibt es noch Förderungen für private Wallboxen?',
      antwort:
        'Eine bundesweite KfW-Förderung für private Wallboxen gibt es aktuell nicht. Regional können aber weiter Zuschüsse verfügbar sein. Vor Kauf und Installation sollte deshalb immer der aktuelle Förderstand geprüft werden.',
    },
    {
      frage: 'Was macht eine Wallbox teuer?',
      antwort:
        'Meist nicht das Gerät allein, sondern Installationsaufwand: lange Kabelwege, Wanddurchbrüche, Erdarbeiten, Anpassungen am Zählerschrank oder Modernisierung der Hauselektrik.',
    },
  ],
}

await upsertRatgeberArticle(article)
