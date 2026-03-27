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
  titel: '11 kW oder 22 kW Wallbox? Was im Einfamilienhaus wirklich sinnvoll ist',
  slug: 'wallbox-11-oder-22-kw',
  kategorie: 'wallbox',
  status: 'veroeffentlicht',
  teaser:
    '11 kW oder 22 kW – auf dem Papier klingt die größere Wallbox oft automatisch besser. In der Praxis ist das im Einfamilienhaus aber nicht immer so. Entscheidend sind nicht nur Ladezeit und Gerät, sondern Fahrzeug, Hausanschluss, Netzbetreiber und Alltag.',
  lesezeit: 11,

  seo: {
    metaTitle: '11 kW oder 22 kW Wallbox? Der ehrliche Vergleich | PEAK.Energy',
    metaDescription:
      '11 kW oder 22 kW Wallbox? Wir zeigen, was im Einfamilienhaus wirklich sinnvoll ist – mit Blick auf Ladezeit, Kosten, Genehmigung und Alltag.',
  },

  zusammenfassung: [
    {
      punkt: rich(
        paragraph(
          'Für viele private Haushalte ist eine 11-kW-Wallbox die vernünftige Standardlösung. Sie lädt im Alltag meist schnell genug, ist regulatorisch einfacher und passt häufig besser zur realen Nutzung.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Eine 22-kW-Wallbox lädt nur dann wirklich schneller, wenn das Elektroauto AC-seitig überhaupt 22 kW aufnehmen kann. Viele Fahrzeuge können das nicht.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Wallboxen über etwa 11 kW benötigen zusätzlich zur Meldung eine Genehmigung des Netzbetreibers. Genau deshalb ist 22 kW nicht nur eine Frage der Ladeleistung, sondern auch von Hausanschluss, Planung und Aufwand.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Wer zu Hause über Nacht lädt, fährt mit 11 kW oft schon sehr gut. 22 kW werden eher dann interessant, wenn kurze Ladefenster, mehrere Fahrzeuge oder besondere Nutzungsprofile wirklich dafür sprechen.',
        ),
      ),
    },
  ],

  inhalt: [
    {
      blockType: 'text',
      content: rich(
        heading('h2', '11 kW oder 22 kW – warum die Frage überhaupt wichtig ist'),
        paragraph(
          'Auf den ersten Blick scheint die Sache klar: 22 kW sind mehr als 11 kW, also muss 22 kW automatisch besser sein. Genau so wird das Thema oft dargestellt. In der Praxis ist diese Sicht aber zu kurz.',
        ),
        paragraph(
          'Denn die Entscheidung für eine Wallbox ist nicht nur eine Frage der maximalen Ladeleistung. Sie hängt auch davon ab, wie das Auto tatsächlich lädt, wie Ihr Alltag aussieht, was Ihr Hausanschluss hergibt und ob später noch Photovoltaik, Lastmanagement oder ein zweites Elektroauto dazukommen sollen.',
        ),
        paragraph(
          'Genau deshalb lohnt sich der Vergleich nicht nur über Zahlen, sondern über die reale Nutzung.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was ist der technische Unterschied zwischen 11 kW und 22 kW?'),
        paragraph(
          'Der Unterschied ist zunächst simpel: Eine 22-kW-Wallbox kann theoretisch etwa doppelt so viel Ladeleistung bereitstellen wie eine 11-kW-Wallbox. Das bedeutet aber nicht automatisch, dass jedes angeschlossene Fahrzeug auch doppelt so schnell lädt.',
        ),
        paragraph(
          'Zu Hause laden Sie im Normalfall mit Wechselstrom. Wie viel davon tatsächlich im Auto ankommt, hängt vom im Fahrzeug verbauten AC-Bordladegerät ab. Das ist ein Punkt, der im Verkauf oft zu wenig erklärt wird.',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: 'Die Wallbox ist nicht allein entscheidend',
      content: rich(
        paragraph(
          'Ein Elektroauto lädt im AC-Betrieb nur so schnell, wie das Bordladegerät des Fahrzeugs es zulässt. Wer also eine 22-kW-Wallbox montiert, aber ein Fahrzeug mit 11-kW-AC-Lader fährt, bekommt im Alltag keinen echten 22-kW-Vorteil.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Wie groß ist der Unterschied bei der Ladezeit wirklich?'),
        paragraph(
          'Auf dem Papier ist 22 kW ungefähr doppelt so schnell wie 11 kW. Für ein Fahrzeug mit rund 50 kWh Batteriekapazität kann das den Unterschied zwischen grob 5 bis 8 Stunden und etwa 2 bis 3 Stunden ausmachen.',
        ),
        paragraph(
          'Das klingt erst einmal stark. Die wichtigere Frage lautet aber: Brauchen Sie diese Zeitersparnis im Alltag tatsächlich? Viele private Fahrzeuge stehen nachts oder über mehrere Stunden zu Hause. In diesen Fällen reicht 11 kW oft völlig aus.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Warum 11 kW im Einfamilienhaus oft schon genug sind'),
        paragraph(
          'Für typische private Haushalte ist eine 11-kW-Wallbox in vielen Fällen der sinnvollste Mittelweg. Sie lädt deutlich schneller als eine Steckdose, ist im Alltag komfortabel und deckt den normalen Ladebedarf meist gut ab.',
        ),
        paragraph(
          'Wer abends nach Hause kommt und das Fahrzeug über Nacht lädt, braucht in vielen Fällen keine besonders hohen AC-Leistungen. Entscheidend ist dann nicht der theoretisch schnellste Ladevorgang, sondern eine robuste, saubere und unkomplizierte Lösung.',
        ),
        bulletList([
          'Das Fahrzeug kann nachts oder über viele Stunden laden.',
          'Die tägliche Fahrleistung ist normal und nicht extrem hoch.',
          'Es wird in erster Linie ein Fahrzeug am Haus geladen.',
          'PV oder intelligentes Laden sollen später sinnvoll eingebunden werden.',
        ]),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Wann 22 kW wirklich sinnvoll sein können'),
        paragraph(
          '22 kW sind nicht grundsätzlich falsch. Es gibt Situationen, in denen die höhere Leistung sinnvoll sein kann. Aber dann sollte auch wirklich ein echter Nutzen dahinterstehen.',
        ),
        bulletList([
          'Das Fahrzeug unterstützt AC-seitig tatsächlich 22 kW.',
          'Es gibt regelmäßig kurze Ladefenster mit hohem Nachladebedarf.',
          'Mehrere Fahrzeuge müssen zeitnah nacheinander geladen werden.',
          'Die elektrische Infrastruktur ist dafür geeignet und sauber geplant.',
        ]),
        paragraph(
          'Wenn diese Punkte nicht erfüllt sind, wird aus 22 kW oft eher ein technischer Mehrwert auf dem Papier als ein echter Alltagsvorteil.',
        ),
      ),
    },

    {
      blockType: 'tipp',
      titel: 'Mehr Leistung ist nicht automatisch mehr Nutzen',
      content: rich(
        paragraph(
          'Gerade bei Wallboxen wird Leistung schnell mit Qualität verwechselt. In Wirklichkeit ist die bessere Lösung meist die, die zu Fahrzeug, Haus und Alltag passt – nicht automatisch die mit der höchsten Zahl auf dem Datenblatt.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was sagt der Netzbetreiber – und warum das wichtig ist'),
        paragraph(
          'Auch regulatorisch gibt es einen klaren Unterschied. Eine private Wallbox muss beim Netzbetreiber gemeldet werden. Bei Ladeeinrichtungen oberhalb von etwa 11 kW ist zusätzlich eine Genehmigung erforderlich.',
        ),
        paragraph(
          'Genau das macht 22 kW nicht nur zu einer Frage von Tempo, sondern auch von Planung, Abstimmung und möglichem Zusatzaufwand. In vielen Fällen ist 11 kW deshalb die einfachere und pragmatischere Lösung.',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: '11 kW ist oft der saubere Standard',
      content: rich(
        paragraph(
          'Viele private Ladeprojekte werden nicht dadurch besser, dass man die höchste Ladeleistung wählt. Sie werden dadurch besser, dass Wallbox, Hausanschluss, Zählerschrank und Nutzung sauber zusammenpassen.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was bedeutet das für die Kosten?'),
        paragraph(
          'Eine 22-kW-Wallbox ist nicht automatisch extrem viel teurer als eine 11-kW-Wallbox. Der größere Unterschied entsteht häufig indirekt: durch Genehmigung, höhere Anforderungen an die elektrische Infrastruktur oder zusätzliche Prüf- und Planungsaufwände.',
        ),
        paragraph(
          'Wenn ohnehin Anpassungen am Zählerschrank oder an der Verteilung nötig sind, kann sich der Aufwand weiter vergrößern. Deshalb sollte die Frage 11 oder 22 kW nie isoliert vom Gesamtprojekt gestellt werden.',
        ),
      ),
    },

    {
      blockType: 'tabelle',
      titel: '11 kW oder 22 kW – der praxisnahe Vergleich',
      zeilen: [
        {
          spalte1: '11-kW-Wallbox',
          spalte2: 'meist die Privat-Standardlösung',
          spalte3:
            'für viele Haushalte schnell genug, einfacher im Ablauf, oft sehr gut für den normalen Alltag geeignet',
        },
        {
          spalte1: '22-kW-Wallbox',
          spalte2: 'nur sinnvoll mit echtem Bedarf',
          spalte3:
            'interessant bei passenden Fahrzeugen, kurzen Ladefenstern oder mehreren Fahrzeugen – aber mit höherem Planungs- und Genehmigungsbedarf',
        },
      ],
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Welche Rolle spielt das Auto selbst?'),
        paragraph(
          'Ein häufiger Denkfehler ist: Wenn die Wallbox 22 kW kann, lädt das Auto auch mit 22 kW. Genau das stimmt oft nicht.',
        ),
        paragraph(
          'Viele Elektroautos sind AC-seitig auf 11 kW ausgelegt. In so einem Fall bringt eine 22-kW-Wallbox im privaten Alltag keinen echten Geschwindigkeitsvorteil. Deshalb sollte vor der Auswahl immer zuerst geklärt werden, welche AC-Ladeleistung das Fahrzeug überhaupt unterstützt.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Und was ist mit Photovoltaik?'),
        paragraph(
          'Wenn später eine Solaranlage oder ein Energiemanagement dazukommen soll, ist nicht automatisch die maximale AC-Leistung entscheidend. Viel wichtiger ist, ob die Wallbox sinnvoll steuerbar ist und sauber in das Gesamtsystem eingebunden werden kann.',
        ),
        paragraph(
          'Im Alltag ist es oft wertvoller, flexibel und passend zu PV-Erzeugung oder Ladefenstern zu laden, als auf dem Papier möglichst hohe Ladeleistung zu haben.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was würden wir im Einfamilienhaus in den meisten Fällen empfehlen?'),
        paragraph(
          'Für das klassische Einfamilienhaus mit einem Fahrzeug, planbarem Ladealltag und normaler nächtlicher Standzeit ist 11 kW meistens die vernünftige Wahl.',
        ),
        paragraph(
          'Nicht weil 22 kW grundsätzlich schlecht wären, sondern weil 11 kW in vielen realen Situationen bereits alles liefern, was gebraucht wird – mit weniger Reibung und oft mit der saubereren Gesamtlogik.',
        ),
        paragraph(
          '22 kW würden wir eher dann ernsthaft prüfen, wenn das Fahrzeug es wirklich nutzen kann und der Alltag einen klaren Mehrwert daraus zieht.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Unser Fazit'),
        paragraph(
          'Die Frage „11 kW oder 22 kW?“ lässt sich nicht sinnvoll mit einem pauschalen „mehr ist besser“ beantworten.',
        ),
        paragraph(
          'Im Einfamilienhaus ist 11 kW in sehr vielen Fällen die vernünftige, saubere und alltagstaugliche Lösung. 22 kW können sinnvoll sein – aber nur dann, wenn Fahrzeug, Nutzung und Infrastruktur wirklich dafür sprechen.',
        ),
        paragraph(
          'Die bessere Wallbox ist deshalb nicht automatisch die stärkere, sondern die, die technisch und praktisch wirklich zu Ihrem Haus passt.',
        ),
      ),
    },

    {
      blockType: 'cta',
      titel: 'Wallbox passend planen statt nur Leistung vergleichen',
      text:
        'Wenn Fahrzeug, Zählerschrank, Hausanschluss und spätere Erweiterungen sauber zusammen gedacht werden, wird aus einer Wallbox eine Lösung, die im Alltag wirklich funktioniert.',
      buttonText: 'Wallbox anfragen',
      buttonLink: '/wallbox',
    },
  ],

  faq: [
    {
      frage: 'Ist 22 kW immer besser als 11 kW?',
      antwort:
        'Nein. 22 kW sind nur dann wirklich besser, wenn das Fahrzeug die Leistung AC-seitig überhaupt nutzen kann und der Alltag davon profitiert. In vielen privaten Haushalten reicht 11 kW völlig aus.',
    },
    {
      frage: 'Muss eine 22-kW-Wallbox genehmigt werden?',
      antwort:
        'Ja. Wallboxen oberhalb von etwa 11 kW benötigen zusätzlich zur Meldung eine Genehmigung des Netzbetreibers.',
    },
    {
      frage: 'Reicht eine 11-kW-Wallbox für zuhause?',
      antwort:
        'Für viele private Haushalte ja. Wer das Fahrzeug über Nacht oder über mehrere Stunden lädt, kommt mit 11 kW im Alltag oft sehr gut zurecht.',
    },
    {
      frage: 'Lädt jedes Elektroauto mit 22 kW an einer 22-kW-Wallbox?',
      antwort:
        'Nein. Ein Fahrzeug lädt zuhause nur so schnell, wie sein AC-Bordladegerät es zulässt. Viele Elektroautos sind AC-seitig auf 11 kW ausgelegt.',
    },
    {
      frage: 'Wann lohnen sich 22 kW wirklich?',
      antwort:
        'Vor allem dann, wenn das Fahrzeug AC-seitig 22 kW unterstützt, regelmäßig kurze Ladefenster genutzt werden oder mehrere Fahrzeuge zeitnah geladen werden müssen.',
    },
    {
      frage: 'Welche Wallbox ist für ein Einfamilienhaus meistens sinnvoll?',
      antwort:
        'In vielen typischen Einfamilienhäusern ist 11 kW die vernünftige Standardlösung – schnell genug für den Alltag, regulatorisch einfacher und oft besser passend zur realen Nutzung.',
    },
  ],
}

await upsertRatgeberArticle(article)
