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
  titel: 'Wallbox im Einfamilienhaus richtig planen: Worauf es wirklich ankommt',
  slug: 'wallbox-einfamilienhaus-richtig-planen',
  kategorie: 'wallbox',
  status: 'veroeffentlicht',
  teaser:
    'Eine Wallbox im Einfamilienhaus ist oft sinnvoll – aber nur dann wirklich gut, wenn Gerät, Hausanschluss, Zählerschrank, Stellplatz und spätere Erweiterungen sauber zusammen gedacht werden.',
  lesezeit: 11,

  seo: {
    metaTitle: 'Wallbox im Einfamilienhaus richtig planen | PEAK.Energy',
    metaDescription:
      'Wallbox im Einfamilienhaus richtig planen: Wir zeigen, worauf es bei Standort, Leistung, Zählerschrank, PV und Netzbetreiber wirklich ankommt.',
  },

  zusammenfassung: [
    {
      punkt: rich(
        paragraph(
          'Die richtige Wallbox beginnt nicht beim Gerät, sondern bei der Situation vor Ort: Stellplatz, Leitungsweg, Zählerschrank, Hausanschluss und Fahrzeug sollten zuerst zusammen betrachtet werden.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Für viele private Haushalte ist 11 kW die vernünftige Standardlösung. Sie ist oft alltagstauglich, regulatorisch einfacher und in vielen Fällen bereits völlig ausreichend.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Entscheidend für die Kosten ist meist nicht nur die Wallbox selbst, sondern vor allem die Installation: Kabelweg, Wanddurchbrüche, Erdarbeiten und der Zustand der vorhandenen Elektroverteilung machen in der Praxis den großen Unterschied.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Wer später PV, Speicher, Lastmanagement oder ein zweites E-Auto mitdenken will, sollte die Wallbox nicht isoliert planen. Genau dort entscheidet sich, ob eine Lösung langfristig sinnvoll bleibt.',
        ),
      ),
    },
  ],

  inhalt: [
    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Warum die Planung wichtiger ist als die Wallbox selbst'),
        paragraph(
          'Viele starten mit der Frage: Welche Wallbox soll ich kaufen? Das ist verständlich, aber oft nicht der richtige erste Schritt. Denn die eigentliche Qualität einer Wallbox-Lösung entscheidet sich selten am Produkt allein, sondern an der Planung drumherum.',
        ),
        paragraph(
          'Im Einfamilienhaus geht es nicht nur darum, ob eine Wallbox an die Wand passt. Es geht darum, wie sie elektrisch eingebunden wird, wie lang der Leitungsweg ist, wie der Zählerschrank aufgestellt ist und ob das System auch dann noch sinnvoll bleibt, wenn später PV, Speicher oder ein weiteres Fahrzeug dazukommen.',
        ),
        paragraph(
          'Genau deshalb sollte man Wallboxen nicht nur nach Datenblatt, App oder Markenname vergleichen. Eine Wallbox ist kein Einzelgerät im luftleeren Raum, sondern Teil des gesamten Energiesystems im Haus.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Die erste Frage: Wo soll die Wallbox überhaupt hin?'),
        paragraph(
          'Der Standort wirkt auf den ersten Blick banal, ist in der Praxis aber oft einer der wichtigsten Kosten- und Qualitätsfaktoren. Ob die Wallbox in der Garage, am Carport, an der Hauswand oder freistehend geplant wird, macht technisch und wirtschaftlich einen deutlichen Unterschied.',
        ),
        paragraph(
          'Ein günstiger Standort ist meistens nah am Zählerschrank oder an einer gut zugänglichen Leitungsführung. Je länger Kabelwege werden und je mehr Durchbrüche, Tiefbau oder Zusatzarbeiten nötig sind, desto aufwendiger wird das Projekt.',
        ),
        bulletList([
          'Wie weit ist der Stellplatz vom Zählerschrank entfernt?',
          'Sind Wanddurchführungen oder Erdarbeiten nötig?',
          'Ist die Wallbox vor Witterung und mechanischer Belastung sinnvoll geschützt?',
          'Lässt sich das Fahrzeug dort im Alltag bequem anschließen?',
        ]),
      ),
    },

    {
      blockType: 'hinweis',
      titel: 'Der beste Standort ist selten nur der optisch schönste',
      content: rich(
        paragraph(
          'Eine Wallbox an der perfekten Hausfassade sieht vielleicht gut aus. Wenn dafür aber der Leitungsweg unnötig lang wird oder die Installation deutlich komplizierter wird, ist das oft nicht die beste Lösung.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Welche Ladeleistung ist im Einfamilienhaus sinnvoll?'),
        paragraph(
          'Auch hier gilt: mehr ist nicht automatisch besser. Für viele private Haushalte ist eine 11-kW-Wallbox die vernünftige Standardlösung. Sie lädt im Alltag meist schnell genug, passt zu typischen Standzeiten zu Hause und ist regulatorisch einfacher als 22 kW.',
        ),
        paragraph(
          '22 kW können sinnvoll sein, wenn das Fahrzeug AC-seitig tatsächlich 22 kW nutzen kann und wenn der Alltag davon wirklich profitiert. In vielen Einfamilienhäusern ist der reale Mehrwert aber kleiner, als man zunächst denkt.',
        ),
        bulletList([
          'Steht das Auto oft über Nacht oder mehrere Stunden am Haus?',
          'Wie hoch ist die tägliche Fahrleistung wirklich?',
          'Kann das Fahrzeug AC-seitig überhaupt 22 kW nutzen?',
          'Wird nur ein Auto geladen oder später vielleicht zwei?',
        ]),
      ),
    },

    {
      blockType: 'tipp',
      titel: '11 kW sind oft der saubere Standard',
      content: rich(
        paragraph(
          'Für viele Einfamilienhäuser ist 11 kW die pragmatische und alltagstaugliche Lösung: schnell genug, technisch oft unkomplizierter und in der Abstimmung mit dem Netzbetreiber meist einfacher.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Zählerschrank und Hausanschluss nicht erst am Ende anschauen'),
        paragraph(
          'Ein häufiger Fehler ist, zuerst die Wallbox zu kaufen und erst danach zu prüfen, ob die vorhandene Elektroinstallation sauber dazu passt. Genau das führt in der Praxis oft zu unnötigen Zusatzkosten.',
        ),
        paragraph(
          'Der Zählerschrank ist kein Nebenthema. Dort entscheidet sich mit, ob genug Platz vorhanden ist, ob sauber abgesichert werden kann und ob zusätzliche Anpassungen nötig werden. Auch der Hausanschluss muss zur geplanten Zusatzlast passen.',
        ),
        paragraph(
          'Gerade in Bestandsgebäuden ist das oft der Punkt, an dem aus einem scheinbar einfachen Projekt plötzlich ein deutlich aufwendigeres wird.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Welche Rolle spielt der Netzbetreiber?'),
        paragraph(
          'Eine Wallbox im Einfamilienhaus ist nicht nur ein Thema zwischen Kunde, Wallbox und Elektriker. Auch der Netzbetreiber ist einzubinden. Private Ladeeinrichtungen müssen vor der Inbetriebnahme gemeldet werden. Oberhalb von etwa 11 kW ist zusätzlich eine Genehmigung nötig.',
        ),
        paragraph(
          'In der Praxis übernimmt diese Abstimmung meist der Elektrofachbetrieb. Genau so ist es auch sinnvoll. Denn der Netzbetreiber beurteilt nicht die Optik des Geräts, sondern die Wirkung der Ladeeinrichtung am Anschluss.',
        ),
      ),
    },

    {
      blockType: 'tabelle',
      titel: 'Planungspunkte im Einfamilienhaus',
      zeilen: [
        {
          spalte1: 'Standort',
          spalte2: 'früh festlegen',
          spalte3:
            'Kabelweg, Durchbrüche und Alltagstauglichkeit entscheiden direkt über Aufwand und Kosten',
        },
        {
          spalte1: 'Ladeleistung',
          spalte2: 'realistisch wählen',
          spalte3:
            '11 kW reichen im Alltag oft aus, 22 kW lohnen nur mit echtem Mehrwert',
        },
        {
          spalte1: 'Zählerschrank / Hausanschluss',
          spalte2: 'technisch mitprüfen',
          spalte3:
            'nicht jedes Bestandsgebäude ist ohne Anpassung sofort bereit',
        },
        {
          spalte1: 'Netzbetreiber',
          spalte2: 'nicht vergessen',
          spalte3:
            'Meldung ist nötig, über 11 kW zusätzlich Genehmigung',
        },
      ],
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was kostet eine Wallbox im Einfamilienhaus wirklich?'),
        paragraph(
          'Die Wallbox selbst ist nur ein Teil der Kosten. In einfachen Situationen ist die Installation vergleichsweise überschaubar. Sobald Leitungswege lang werden, Erdarbeiten nötig sind oder der Zählerschrank angepasst werden muss, verschiebt sich die Rechnung deutlich.',
        ),
        paragraph(
          'Genau deshalb bringt ein reiner Shop-Preisvergleich oft wenig. Die eigentliche Frage lautet nicht nur: Was kostet die Wallbox? Sondern: Was kostet die saubere Gesamtlösung an genau diesem Haus?',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: 'Nicht nur den Gerätepreis vergleichen',
      content: rich(
        paragraph(
          'Ein günstiges Gerät hilft wenig, wenn später Kabelweg, Schutztechnik, Anpassungen am Zählerschrank oder Zusatzarbeiten im Außenbereich dazukommen. Im Handwerk entscheidet oft die Realität vor Ort über die echten Kosten.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Soll die Wallbox später mit PV oder Speicher zusammenarbeiten?'),
        paragraph(
          'Spätestens hier trennt sich eine kurzfristige Lösung von einer guten Planung. Wenn später eine Photovoltaikanlage, ein Speicher oder ein Energiemanagement dazukommen sollen, sollte die Wallbox nicht isoliert geplant werden.',
        ),
        paragraph(
          'Wichtiger als maximale Ladeleistung ist dann oft die Frage, ob die Wallbox sauber steuerbar ist und sinnvoll mit dem restlichen System zusammenspielt. Gerade beim Laden mit PV-Überschuss entscheidet nicht nur die Wallbox, sondern die Qualität des Zusammenspiels.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was ist mit einem zweiten E-Auto oder Lastmanagement?'),
        paragraph(
          'Viele denken bei der Planung nur an das erste Fahrzeug. Das ist nachvollziehbar, kann aber schnell zu kurz sein. Wenn in zwei oder drei Jahren ein zweites Elektroauto dazukommt, wird die Wallbox vom Einzelgerät zum Teil einer kleinen Ladeinfrastruktur.',
        ),
        paragraph(
          'Genau deshalb sollte man früh überlegen, ob später Lastmanagement relevant werden könnte. Nicht jeder braucht es sofort. Aber wer die Möglichkeit von Anfang an mitdenkt, erspart sich später oft unnötige Umbauten oder teure Insellösungen.',
        ),
      ),
    },

    {
      blockType: 'tipp',
      titel: 'Heute klein denken, aber nicht kurz denken',
      content: rich(
        paragraph(
          'Es ist völlig in Ordnung, mit einer einfachen Wallbox zu starten. Wichtig ist nur, dass die Lösung nicht so eng geplant wird, dass spätere Erweiterungen unnötig teuer oder kompliziert werden.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Warum der Elektrofachbetrieb mehr ist als nur der Monteur'),
        paragraph(
          'Eine Wallbox im Einfamilienhaus ist keine reine Montagearbeit. Der Elektrofachbetrieb ist in einem guten Projekt nicht nur dafür da, das Gerät aufzuhängen, sondern die technische Gesamtsituation richtig zu bewerten.',
        ),
        paragraph(
          'Dazu gehören unter anderem die Prüfung des Anschlusses, die richtige Leitungsführung, die Absicherung, die Einbindung in den Zählerschrank und häufig auch die Kommunikation mit dem Netzbetreiber. Genau deshalb sollte die Planung nicht an der Haustür enden.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Unser Fazit'),
        paragraph(
          'Eine Wallbox im Einfamilienhaus richtig zu planen heißt nicht, das teuerste Gerät zu kaufen. Es heißt, Wallbox, Standort, Zählerschrank, Hausanschluss und spätere Erweiterungen sinnvoll zusammenzudenken.',
        ),
        paragraph(
          'Für viele private Haushalte ist eine 11-kW-Lösung dabei der vernünftige Standard. Sie ist alltagstauglich, technisch oft sauber integrierbar und lässt sich in vielen Fällen gut mit späteren Ausbaustufen kombinieren.',
        ),
        paragraph(
          'Die beste Wallbox ist deshalb nicht die mit der größten Werbeversprechung, sondern die, die zu Ihrem Haus, Ihrem Fahrzeug und Ihrem Alltag wirklich passt.',
        ),
      ),
    },

    {
      blockType: 'cta',
      titel: 'Wallbox im Einfamilienhaus sauber planen',
      text:
        'Wenn Standort, Ladeleistung, Zählerschrank und spätere Erweiterungen früh zusammen gedacht werden, entsteht eine Lösung, die nicht nur heute passt, sondern langfristig sinnvoll bleibt.',
      buttonText: 'Wallbox anfragen',
      buttonLink: '/wallbox',
    },
  ],

  faq: [
    {
      frage: 'Welche Wallbox ist für ein Einfamilienhaus meistens sinnvoll?',
      antwort:
        'Für viele private Haushalte ist eine 11-kW-Wallbox die vernünftige Standardlösung. Sie lädt im Alltag meist schnell genug und ist regulatorisch einfacher als 22 kW.',
    },
    {
      frage: 'Was ist bei der Planung einer Wallbox im Einfamilienhaus am wichtigsten?',
      antwort:
        'Entscheidend sind nicht nur Gerät und Leistung, sondern vor allem Standort, Kabelweg, Zählerschrank, Hausanschluss und die Frage, ob später PV, Speicher oder ein zweites E-Auto dazukommen sollen.',
    },
    {
      frage: 'Muss der Netzbetreiber eingebunden werden?',
      antwort:
        'Ja. Eine private Wallbox muss vor der Inbetriebnahme gemeldet werden. Oberhalb von etwa 11 kW ist zusätzlich eine Genehmigung des Netzbetreibers erforderlich.',
    },
    {
      frage: 'Warum wird der Zählerschrank bei Wallboxen so wichtig?',
      antwort:
        'Weil dort entschieden wird, ob die Ladeeinrichtung sauber eingebunden und abgesichert werden kann. Gerade in Bestandsgebäuden kann der Zählerschrank ein zentraler Kosten- und Planungspunkt sein.',
    },
    {
      frage: 'Sollte ich PV oder Speicher schon bei der Wallbox-Planung mitdenken?',
      antwort:
        'Ja, wenn das perspektivisch relevant ist. Dann sollte die Wallbox nicht isoliert gewählt werden, sondern als Teil eines späteren Energiesystems.',
    },
    {
      frage: 'Warum reicht ein reiner Preisvergleich oft nicht aus?',
      antwort:
        'Weil die eigentlichen Unterschiede meist in der Installation liegen: Leitungsweg, Wanddurchbrüche, Erdarbeiten, Schutztechnik und Zustand der Elektroverteilung haben in der Praxis großen Einfluss auf Aufwand und Kosten.',
    },
  ],
}

await upsertRatgeberArticle(article)
