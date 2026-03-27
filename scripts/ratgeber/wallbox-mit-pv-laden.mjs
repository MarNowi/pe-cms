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
  titel: 'Wallbox mit PV laden: Wann es sich lohnt und worauf es wirklich ankommt',
  slug: 'wallbox-mit-pv-laden',
  kategorie: 'wallbox',
  status: 'veroeffentlicht',
  teaser:
    'Wallbox und Photovoltaik wirken auf den ersten Blick wie die perfekte Kombination. In der Praxis funktioniert das aber nur dann richtig gut, wenn Wallbox, PV-Anlage, Hausverbrauch und Steuerung sauber zusammenpassen.',
  lesezeit: 11,

  seo: {
    metaTitle: 'Wallbox mit PV laden: So klappt Überschussladen wirklich | PEAK.Energy',
    metaDescription:
      'Wallbox mit PV laden: Wir erklären, wann Überschussladen sinnvoll ist, welche Technik nötig ist und worauf es bei Wallbox, Steuerung und Alltag wirklich ankommt.',
  },

  zusammenfassung: [
    {
      punkt: rich(
        paragraph(
          'Wallbox und Photovoltaik passen grundsätzlich sehr gut zusammen. Interessant wird es vor allem dann, wenn möglichst viel Solarstrom direkt im eigenen Auto landet.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Damit das in der Praxis funktioniert, reicht nicht jede beliebige Wallbox. Für echtes PV-Überschussladen braucht es eine passende Steuerung oder ein Energiemanagement, das den verfügbaren Solarstrom erkennt und die Ladeleistung anpasst.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Besonders wichtig ist die Frage, wie flexibel die Wallbox laden kann. Je besser sie mit kleinen und schwankenden Überschüssen umgehen kann, desto sinnvoller wird das Laden mit PV im Alltag.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Nicht die höchste Ladeleistung ist entscheidend, sondern die saubere Abstimmung von PV-Anlage, Hausverbrauch, Fahrzeug und Ladeverhalten.',
        ),
      ),
    },
  ],

  inhalt: [
    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Wallbox und Photovoltaik – warum die Kombination so spannend ist'),
        paragraph(
          'Wer ein Elektroauto zu Hause lädt und gleichzeitig eine Photovoltaikanlage auf dem Dach hat, denkt fast automatisch an die perfekte Kombination: selbst erzeugten Strom direkt ins Auto laden. Genau diese Idee ist auch naheliegend.',
        ),
        paragraph(
          'Denn je mehr Solarstrom direkt selbst verbraucht wird, desto sinnvoller wird die PV-Anlage im Alltag. Das Auto wird dann nicht nur geladen, sondern wird zum zusätzlichen Stromverbraucher im Haus, der tagsüber gezielt Überschüsse aufnehmen kann.',
        ),
        paragraph(
          'Trotzdem funktioniert das nicht automatisch mit jeder Wallbox und nicht in jeder Konstellation gleich gut. Zwischen „Auto lädt zu Hause“ und „Auto lädt intelligent mit Solarstrom“ liegt technisch ein deutlicher Unterschied.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was bedeutet PV-Überschussladen überhaupt?'),
        paragraph(
          'PV-Überschussladen bedeutet, dass das Elektroauto möglichst genau mit dem Strom geladen wird, den die Solaranlage gerade produziert und der im Haus im Moment nicht anderweitig gebraucht wird.',
        ),
        paragraph(
          'Das Ziel ist also nicht einfach nur, irgendwann tagsüber zu laden. Das Ziel ist, den gerade verfügbaren Überschuss sinnvoll ins Auto zu verschieben, statt ihn unnötig ins Netz einzuspeisen oder das Auto mit Netzstrom zu laden, obwohl auf dem Dach gerade Energie verfügbar wäre.',
        ),
        paragraph(
          'Genau dafür braucht es eine Lösung, die laufend erkennt, wie viel PV-Leistung vorhanden ist, wie viel davon im Haus verbraucht wird und was als Überschuss für das Auto übrig bleibt.',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: 'PV-Laden ist mehr als nur eine Wallbox',
      content: rich(
        paragraph(
          'Für echtes PV-Überschussladen reicht in der Praxis nicht einfach irgendeine Wallbox. Entscheidend ist, dass die Wallbox oder ein übergeordnetes Energiemanagement den Solarüberschuss sauber erkennt und die Ladeleistung entsprechend steuert.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Welche Technik braucht man dafür wirklich?'),
        paragraph(
          'Damit Wallbox und PV-Anlage sinnvoll zusammenarbeiten, braucht es in der Regel drei Dinge: eine geeignete Wallbox, eine Möglichkeit zur Erfassung der Energieflüsse im Haus und eine Logik, die daraus ein sauberes Ladeverhalten macht.',
        ),
        bulletList([
          'eine Wallbox, die sich steuern oder regeln lässt',
          'eine Messung von Hausverbrauch und PV-Erzeugung',
          'eine Steuerung bzw. ein Energiemanagement, das den Überschuss erkennt',
        ]),
        paragraph(
          'Je nach System sitzt diese Logik direkt in der Wallbox, im Wechselrichter, im Speicher-Management oder in einem separaten Energiemanager. Wichtig ist nicht, wo sie sitzt, sondern dass sie zuverlässig funktioniert.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Warum viele einfache Wallboxen dafür nicht ideal sind'),
        paragraph(
          'Eine einfache Wallbox kann ein Auto laden. Das ist ihr Grundjob. Für gutes PV-Laden reicht das aber oft nicht aus. Denn Solarstrom ist kein starrer Wert. Er schwankt mit Wetter, Tageszeit und gleichzeitigem Hausverbrauch.',
        ),
        paragraph(
          'Wenn eine Wallbox diese Schwankungen nicht sauber ausregeln kann, lädt das Auto entweder zu oft mit Netzstrom nach oder der Ladevorgang startet und stoppt unnötig häufig. Beides ist nicht die saubere Lösung, die man sich von einem gut geplanten Energiesystem erhofft.',
        ),
      ),
    },

    {
      blockType: 'tipp',
      titel: 'Nicht nur „PV-kompatibel“ lesen',
      content: rich(
        paragraph(
          'Die Formulierung PV-kompatibel klingt gut, sagt aber für sich allein noch wenig. Entscheidend ist, ob die Wallbox in Ihrem konkreten System den Überschuss wirklich sauber erkennt, flexibel regeln kann und im Alltag stabil arbeitet.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Warum die Phasenumschaltung so wichtig sein kann'),
        paragraph(
          'Ein entscheidender Praxispunkt beim PV-Überschussladen ist die Frage, ab welcher Leistung das Auto überhaupt sinnvoll laden kann. Elektroautos benötigen einen Mindestladestrom. Einphasig liegt man dadurch ungefähr bei 1,4 kW, dreiphasig eher bei rund 4,2 kW.',
        ),
        paragraph(
          'Genau deshalb ist die automatische Phasenumschaltung so interessant. Ohne sie braucht es bei dreiphasigem Laden oft deutlich mehr Überschuss, bis das Fahrzeug überhaupt anfängt zu laden. Mit intelligenter Umschaltung kann an guten Tagen mehr Leistung genutzt werden und an schwächeren Tagen trotzdem früher geladen werden.',
        ),
        paragraph(
          'Gerade bei wechselhaftem Wetter oder kleineren PV-Anlagen macht das in der Praxis einen klaren Unterschied.',
        ),
      ),
    },

    {
      blockType: 'tabelle',
      titel: 'Was beim PV-Laden praktisch wichtig ist',
      zeilen: [
        {
          spalte1: 'Einfache Wallbox',
          spalte2: 'für reines Laden oft ausreichend',
          spalte3:
            'gut für das normale Zuhause-Laden, aber nicht automatisch stark beim echten Überschussladen',
        },
        {
          spalte1: 'PV-fähige Wallbox mit Steuerung',
          spalte2: 'deutlich besser für Solarstrom',
          spalte3:
            'kann Überschüsse besser nutzen und sauberer mit schwankender PV-Leistung umgehen',
        },
        {
          spalte1: 'Phasenumschaltung',
          spalte2: 'im Alltag oft sehr wertvoll',
          spalte3:
            'hilft dabei, auch kleinere oder schwankende Solarüberschüsse nutzbar zu machen',
        },
      ],
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Lohnt sich Wallbox-Laden mit PV wirtschaftlich?'),
        paragraph(
          'In vielen Fällen ja. Der eigentliche Charme liegt darin, dass ein größerer Teil des selbst erzeugten Stroms direkt im eigenen Haus bleibt. Statt den Strom nur ins Netz zu geben, wird er zum Laden des Autos genutzt – und damit direkt im Alltag verwertet.',
        ),
        paragraph(
          'Ob sich das wirtschaftlich stark bemerkbar macht, hängt von mehreren Faktoren ab: von der Größe der PV-Anlage, vom Fahrprofil, von den Ladezeiten, vom Netzstrompreis und davon, wie oft das Fahrzeug tagsüber tatsächlich zu Hause ist.',
        ),
        paragraph(
          'Ein Auto, das nur abends und nachts am Haus steht, nutzt tagsüber erzeugten Solarstrom naturgemäß schlechter als ein Fahrzeug, das regelmäßig tagsüber geladen werden kann. Trotzdem kann auch dann eine Wallbox mit intelligenter Steuerung sinnvoll sein – etwa in Verbindung mit Ladefenstern, Speicher oder bewusster Nutzung im Alltag.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was viele bei Wallbox und PV unterschätzen'),
        paragraph(
          'Viele denken zuerst an das Gerät an der Wand. In Wirklichkeit entscheidet aber die Abstimmung des Gesamtsystems. Eine teure Wallbox allein macht noch kein gutes PV-Ladesystem. Genauso wenig ist eine günstige Wallbox automatisch schlecht, wenn sie sauber in ein passendes Energiemanagement eingebunden ist.',
        ),
        bulletList([
          'Wie viel PV-Leistung ist überhaupt vorhanden?',
          'Wann steht das Auto typischerweise am Haus?',
          'Wie hoch ist der sonstige Hausverbrauch tagsüber?',
          'Gibt es bereits einen Speicher oder ist einer geplant?',
          'Soll die Lösung offen und erweiterbar bleiben?',
        ]),
        paragraph(
          'Erst aus diesen Fragen ergibt sich, welche Wallbox in Ihrem Fall wirklich sinnvoll ist.',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: 'PV-Laden lebt von der Realität, nicht vom Prospekt',
      content: rich(
        paragraph(
          'Auf dem Papier klingt „Auto mit eigenem Solarstrom laden“ immer hervorragend. In der Praxis kommt es darauf an, ob Fahrzeug, Hausverbrauch, Ladezeiten und Steuerung wirklich zusammenpassen. Genau hier trennt sich Marketing von sauberer Planung.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Braucht man dafür zwingend einen Batteriespeicher?'),
        paragraph(
          'Nein. PV-Überschussladen ist auch ohne Batteriespeicher möglich und oft sinnvoll. Der Speicher kann das System ergänzen, ist aber nicht die Voraussetzung dafür, dass das Auto mit Solarstrom geladen werden kann.',
        ),
        paragraph(
          'Entscheidend ist zuerst, ob die Wallbox den verfügbaren Überschuss sauber nutzen kann. Ein Speicher kann später dabei helfen, Energie zeitlich etwas besser zu verschieben. Er ersetzt aber keine gute Steuerung der Wallbox.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Welche Wallbox passt dazu – offen gedacht oder im Herstellersystem?'),
        paragraph(
          'Hier kommt es stark auf die langfristige Zielrichtung an. Manche Lösungen funktionieren besonders bequem innerhalb eines geschlossenen Systems. Andere Ansätze setzen stärker auf Offenheit und flexible Kombinationen.',
        ),
        paragraph(
          'Wichtig ist aus unserer Sicht nicht, dass alles aus einer Hand kommt, sondern dass die Lösung dauerhaft sinnvoll bleibt. Wer später offen bleiben will – zum Beispiel bei Wechselrichter, Speicher oder Wallbox – sollte das früh mitdenken und nicht erst dann, wenn das System schon feststeht.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was ist regulatorisch zu beachten?'),
        paragraph(
          'Auch wenn Wallbox und PV inhaltlich gut zusammenpassen, bleibt die Wallbox selbst eine Ladeeinrichtung, die vor Inbetriebnahme beim Netzbetreiber gemeldet werden muss. Oberhalb von etwa 11 kW ist zusätzlich eine Genehmigung nötig.',
        ),
        paragraph(
          'Gerade deshalb ist es sinnvoll, Wallbox, Ladeleistung und Gesamtsystem nicht isoliert zu betrachten. Was technisch möglich ist, sollte auch praktisch und regulatorisch sauber ins Haus passen.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Unser Fazit'),
        paragraph(
          'Wallbox und Photovoltaik sind eine starke Kombination – aber nicht deshalb, weil das Auto einfach irgendwie am Haus lädt. Spannend wird es dann, wenn der selbst erzeugte Solarstrom intelligent und sauber in den Alltag integriert wird.',
        ),
        paragraph(
          'Dafür braucht es keine Show, sondern eine gute Planung: passende Wallbox, saubere Erfassung der Energieflüsse, sinnvolle Steuerung und ein System, das auch im Alltag mit wechselnder Sonne und wechselndem Hausverbrauch stabil funktioniert.',
        ),
        paragraph(
          'Die beste Lösung ist deshalb nicht automatisch die mit der größten Werbeversprechung, sondern die, die PV-Anlage, Haus und Fahrzeug wirklich sauber zusammenbringt.',
        ),
      ),
    },

    {
      blockType: 'cta',
      titel: 'Wallbox und PV sauber zusammendenken',
      text:
        'Wenn Wallbox, PV-Anlage, Hausverbrauch und spätere Erweiterungen sinnvoll zusammen geplant werden, wird aus einer Ladebox ein echter Baustein im Energiesystem.',
      buttonText: 'Wallbox anfragen',
      buttonLink: '/wallbox',
    },
  ],

  faq: [
    {
      frage: 'Kann ich mein Elektroauto direkt mit Solarstrom laden?',
      antwort:
        'Ja, grundsätzlich schon. Interessant wird es vor allem dann, wenn die Wallbox oder ein Energiemanagement den aktuellen PV-Überschuss erkennt und die Ladeleistung passend steuert.',
    },
    {
      frage: 'Brauche ich für PV-Überschussladen eine spezielle Wallbox?',
      antwort:
        'In der Praxis meist ja oder zumindest eine Wallbox, die sich sauber steuern lässt. Für echtes Überschussladen reicht eine einfache Ladebox oft nicht aus, wenn keine passende Steuerung dahintersteht.',
    },
    {
      frage: 'Brauche ich dafür einen Batteriespeicher?',
      antwort:
        'Nein. PV-Überschussladen funktioniert auch ohne Batteriespeicher. Ein Speicher kann ergänzend sinnvoll sein, ist aber keine Voraussetzung für das Laden mit Solarstrom.',
    },
    {
      frage: 'Warum ist die Phasenumschaltung so wichtig?',
      antwort:
        'Weil Elektroautos einen Mindestladestrom brauchen. Einphasig kann oft schon ab rund 1,4 kW geladen werden, dreiphasig erst ab etwa 4,2 kW. Mit Phasenumschaltung lassen sich kleinere Überschüsse oft besser nutzen.',
    },
    {
      frage: 'Lohnt sich eine Wallbox mit PV wirtschaftlich?',
      antwort:
        'In vielen Fällen ja, vor allem wenn das Fahrzeug regelmäßig dann geladen werden kann, wenn die PV-Anlage Strom liefert. Entscheidend sind aber Fahrprofil, Hausverbrauch, Ladezeiten und die Qualität der Steuerung.',
    },
    {
      frage: 'Muss eine Wallbox mit PV trotzdem beim Netzbetreiber gemeldet werden?',
      antwort:
        'Ja. Auch in Verbindung mit einer PV-Anlage bleibt die Wallbox eine Ladeeinrichtung, die vor Inbetriebnahme dem Netzbetreiber gemeldet werden muss. Oberhalb von etwa 11 kW ist zusätzlich eine Genehmigung nötig.',
    },
  ],
}

await upsertRatgeberArticle(article)
