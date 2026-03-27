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
  titel: 'Wallbox anmelden: Was muss ich beim Netzbetreiber beachten?',
  slug: 'wallbox-anmelden-netzbetreiber',
  kategorie: 'wallbox',
  status: 'veroeffentlicht',
  teaser:
    'Eine Wallbox zu Hause zu installieren ist kein reines Geräte-Thema. Vor der Inbetriebnahme muss der Netzbetreiber eingebunden werden – und je nach Ladeleistung reicht eine Meldung nicht aus.',
  lesezeit: 10,

  seo: {
    metaTitle: 'Wallbox anmelden: Netzbetreiber, 11 kW, 22 kW | PEAK.Energy',
    metaDescription:
      'Wallbox anmelden: Was ist bei 11 kW und 22 kW zu beachten? Wir erklären Meldepflicht, Genehmigung, Netzbetreiber und typische Praxisfehler verständlich und ehrlich.',
  },

  zusammenfassung: [
    {
      punkt: rich(
        paragraph(
          'Eine private Wallbox muss vor der Inbetriebnahme beim Netzbetreiber gemeldet werden. Das gilt auch im Einfamilienhaus.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Bis etwa 11 kW reicht in der Regel die Anmeldung. Oberhalb davon ist zusätzlich eine Genehmigung des Netzbetreibers erforderlich.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'In der Praxis übernimmt die Anmeldung meist der Elektrofachbetrieb. Wichtig ist, dass Wallbox, Hausanschluss und Zählerschrank sauber zusammen betrachtet werden.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Neue Wallboxen über 4,2 kW fallen grundsätzlich in die Systematik der steuerbaren Verbrauchseinrichtungen nach §14a EnWG. Das sollte früh mitgedacht werden, damit die Lösung nicht nur heute, sondern auch später sauber passt.',
        ),
      ),
    },
  ],

  inhalt: [
    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Warum eine Wallbox überhaupt angemeldet werden muss'),
        paragraph(
          'Viele denken bei einer Wallbox zuerst an das Gerät an der Wand. Aus Sicht des Stromnetzes ist eine Wallbox aber vor allem eine zusätzliche leistungsstarke Verbrauchseinrichtung. Genau deshalb interessiert sich der Netzbetreiber dafür, was am Haus angeschlossen wird.',
        ),
        paragraph(
          'Es geht dabei nicht darum, private Ladepunkte unnötig zu erschweren. Es geht darum, die Netzsituation am Anschluss sauber einschätzen zu können. Denn eine Wallbox greift deutlich stärker in die elektrische Infrastruktur ein als eine normale Haushaltssteckdose.',
        ),
        paragraph(
          'Deshalb ist die Wallbox nicht einfach nur ein Zubehörteil fürs Auto, sondern ein technischer Bestandteil des Hausanschlusses, der mitgedacht werden muss.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was ist der Unterschied zwischen Anmeldung und Genehmigung?'),
        paragraph(
          'Genau hier entsteht oft Verwirrung. Viele sprechen allgemein von „Wallbox anmelden“, meinen aber eigentlich zwei unterschiedliche Dinge: die reine Meldung beim Netzbetreiber und die zusätzliche Genehmigungspflicht bei höherer Ladeleistung.',
        ),
        paragraph(
          'Für eine private Wallbox bis etwa 11 kW reicht in der Regel die Anmeldung. Das heißt: Der Netzbetreiber wird informiert, dass diese Ladeeinrichtung installiert werden soll oder installiert wird.',
        ),
        paragraph(
          'Bei Ladeeinrichtungen oberhalb von etwa 11 kW ist zusätzlich eine Genehmigung des Netzbetreibers nötig. Das bedeutet: Hier reicht das reine Informieren nicht mehr aus. Der Anschluss muss ausdrücklich freigegeben werden.',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: '11 kW und 22 kW sind nicht gleich',
      content: rich(
        paragraph(
          'Eine 11-kW-Wallbox ist im Regelfall anmeldepflichtig, aber nicht genehmigungspflichtig. Bei 22 kW kommt zusätzlich die Genehmigung durch den Netzbetreiber dazu. Genau deshalb ist 22 kW nicht nur eine Frage der Ladegeschwindigkeit, sondern auch des formalen und technischen Aufwands.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Wer meldet die Wallbox beim Netzbetreiber an?'),
        paragraph(
          'In der Praxis übernimmt das meist der Elektrofachbetrieb, der die Wallbox installiert. Genau so ist es auch sinnvoll. Denn der Elektriker kennt den Anschluss, prüft die elektrische Situation vor Ort und kann die technischen Angaben zum Ladepunkt sauber einreichen.',
        ),
        paragraph(
          'Wer selbst versucht, das Thema nur aus der Produktbeschreibung der Wallbox heraus zu lösen, übersieht häufig wichtige Punkte. Entscheidend ist nicht nur, was das Gerät kann, sondern auch, ob Hausanschluss, Absicherung, Leitungslängen und Zählerschrank dazu passen.',
        ),
      ),
    },

    {
      blockType: 'tipp',
      titel: 'Nicht Netzbetreiber und Stromanbieter verwechseln',
      content: rich(
        paragraph(
          'Für die Anmeldung der Wallbox ist nicht Ihr Stromtarif-Anbieter entscheidend, sondern der örtliche Netzbetreiber. Das wird in der Praxis erstaunlich oft durcheinandergebracht.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was prüft der Netzbetreiber eigentlich?'),
        paragraph(
          'Der Netzbetreiber schaut nicht auf die Optik der Wallbox, sondern auf die elektrische Wirkung am Anschluss. Relevant sind vor allem die beantragte Ladeleistung, die vorhandene Netzsituation und die Frage, ob der Anschluss diese zusätzliche Last sauber tragen kann.',
        ),
        paragraph(
          'Je höher die beantragte Leistung, desto relevanter wird die Prüfung. Deshalb ist der Schritt von 11 kW auf 22 kW nicht nur formal größer, sondern oft auch technisch deutlich spürbarer.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Warum 11 kW im Einfamilienhaus oft die saubere Lösung sind'),
        paragraph(
          'Für viele private Haushalte ist 11 kW nicht nur alltagstauglich, sondern auch der pragmatischste Weg. Die Ladeleistung reicht im normalen Zuhause-Ladealltag häufig gut aus, während der formale Ablauf einfacher bleibt.',
        ),
        paragraph(
          'Gerade wenn das Fahrzeug über Nacht oder über mehrere Stunden am Haus steht, ist die 11-kW-Klasse in vielen Fällen die vernünftige Standardlösung. Das heißt nicht, dass 22 kW falsch wären – aber 11 kW sind oft der sauberere Einstieg.',
        ),
      ),
    },

    {
      blockType: 'tabelle',
      titel: 'Anmeldung oder Genehmigung?',
      zeilen: [
        {
          spalte1: 'Wallbox bis etwa 11 kW',
          spalte2: 'Anmeldung erforderlich',
          spalte3:
            'typische Privat-Lösung, in der Regel ohne zusätzliche Genehmigung',
        },
        {
          spalte1: 'Wallbox über etwa 11 kW',
          spalte2: 'Genehmigung zusätzlich nötig',
          spalte3:
            'höhere Ladeleistung, mehr Abstimmung mit dem Netzbetreiber',
        },
      ],
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was bedeutet §14a EnWG für neue Wallboxen?'),
        paragraph(
          'Seit Anfang 2024 müssen neue steuerbare Verbrauchseinrichtungen wie Wallboxen über 4,2 kW grundsätzlich in das neue Regelwerk nach §14a EnWG eingeordnet werden. Das klingt erst einmal technischer, als es im Alltag wirkt, ist aber trotzdem wichtig.',
        ),
        paragraph(
          'Im Kern geht es darum, dass solche Verbraucher im Engpassfall netzdienlich gesteuert werden können. Gleichzeitig bleibt eine Mindestbezugsleistung von 4,2 kW gesichert. Das heißt: Es geht nicht um ein willkürliches Abschalten, sondern um eine definierte netzseitige Steuerbarkeit.',
        ),
        paragraph(
          'Für Bauherren und Eigentümer heißt das vor allem: Wallbox, Messkonzept und technische Einbindung sollten früh sauber geplant werden, damit es später keine unnötigen Schleifen gibt.',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: 'Nicht erst am Ende an Steuerbarkeit denken',
      content: rich(
        paragraph(
          'Wenn Wallbox, Messkonzept und Zählerschrank erst ganz am Ende zusammengeschoben werden, entstehen oft unnötige Zusatzschritte. Sauberer ist es, das Thema von Anfang an als Teil des Gesamtsystems zu planen.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Welche Unterlagen oder Angaben sind typischerweise wichtig?'),
        paragraph(
          'Die genauen Formulare unterscheiden sich je nach Netzbetreiber. Inhaltlich geht es aber fast immer um ähnliche Punkte: Standort, Leistung der Wallbox, technische Daten des Geräts, ausführender Fachbetrieb und die elektrische Einbindung am Hausanschluss.',
        ),
        paragraph(
          'Genau deshalb ist es sinnvoll, den Elektrofachbetrieb früh einzubinden. Dann wird nicht nur ein Formular ausgefüllt, sondern die Wallbox wird in ihrem tatsächlichen technischen Kontext betrachtet.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Wann sollte man die Anmeldung erledigen?'),
        paragraph(
          'Nicht erst nach der Montage und nicht irgendwann „wenn alles fertig ist“. Sauber ist es, das Thema vor der Inbetriebnahme und idealerweise schon im Rahmen der Planung mitzunehmen.',
        ),
        paragraph(
          'Gerade wenn eine 22-kW-Lösung angedacht ist oder wenn zusätzliche Arbeiten am Hausanschluss oder Zählerschrank nötig sein könnten, sollte das Thema frühzeitig angestoßen werden. So vermeidet man unnötige Verzögerungen und unklare Zuständigkeiten.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was viele in der Praxis falsch einschätzen'),
        paragraph(
          'Ein häufiger Fehler ist, die Wallbox nur als Produktkauf zu sehen. Dann wird zuerst ein Gerät ausgesucht und erst später gefragt, ob Hausanschluss, Zählerschrank oder Netzbetreiber dazu passen.',
        ),
        paragraph(
          'Der sauberere Weg ist genau andersherum: erst die technische Situation ansehen, dann die passende Ladeleistung wählen und daraus die richtige Wallbox ableiten. So wird aus der Anmeldung kein nachgelagerter Papierpunkt, sondern Teil einer sinnvollen Planung.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Unser Fazit'),
        paragraph(
          'Eine Wallbox anzumelden ist kein bürokratischer Selbstzweck. Es ist ein fester Bestandteil einer sauberen Installation. Genau deshalb sollte das Thema nicht zwischen Gerät, Angebot und Montage verloren gehen.',
        ),
        paragraph(
          'Für viele Einfamilienhäuser ist 11 kW der pragmatische und alltagstaugliche Weg: leistungsfähig genug, formal einfacher und oft sehr gut passend zur realen Nutzung. Wer über 22 kW nachdenkt, sollte die zusätzliche Genehmigung und die technische Gesamtsituation von Anfang an mitdenken.',
        ),
        paragraph(
          'Am Ende gilt: Die bessere Wallbox ist nicht automatisch die stärkere, sondern die, die sauber zum Haus, zum Fahrzeug und zum Netzanschluss passt.',
        ),
      ),
    },

    {
      blockType: 'cta',
      titel: 'Wallbox sauber planen statt später nacharbeiten',
      text:
        'Wenn Wallbox, Zählerschrank, Hausanschluss und Netzbetreiber von Anfang an zusammen gedacht werden, läuft das Projekt deutlich sauberer – technisch wie organisatorisch.',
      buttonText: 'Wallbox anfragen',
      buttonLink: '/wallbox',
    },
  ],

  faq: [
    {
      frage: 'Muss eine private Wallbox immer angemeldet werden?',
      antwort:
        'Ja. Eine private Wallbox muss vor der Inbetriebnahme beim zuständigen Netzbetreiber gemeldet werden.',
    },
    {
      frage: 'Braucht eine 11-kW-Wallbox eine Genehmigung?',
      antwort:
        'In der Regel nicht. Bei etwa 11 kW reicht normalerweise die Anmeldung beim Netzbetreiber.',
    },
    {
      frage: 'Wann ist eine Genehmigung nötig?',
      antwort:
        'Bei Wallboxen oberhalb von etwa 11 kW ist zusätzlich eine Genehmigung des Netzbetreibers erforderlich.',
    },
    {
      frage: 'Wer übernimmt die Anmeldung der Wallbox?',
      antwort:
        'In der Praxis macht das meist der Elektrofachbetrieb, der die Anlage plant und installiert.',
    },
    {
      frage: 'Was bedeutet §14a EnWG für Wallboxen?',
      antwort:
        'Neue Wallboxen über 4,2 kW fallen grundsätzlich in die Systematik steuerbarer Verbrauchseinrichtungen. Das sollte bei Planung, Messkonzept und technischer Einbindung früh berücksichtigt werden.',
    },
    {
      frage: 'Warum sollte man das nicht erst kurz vor der Inbetriebnahme klären?',
      antwort:
        'Weil Wallbox, Zählerschrank, Hausanschluss und Netzbetreiber zusammen gedacht werden müssen. Wer das Thema zu spät angeht, riskiert unnötige Rückfragen, Verzögerungen oder Zusatzaufwand.',
    },
  ],
}

await upsertRatgeberArticle(article)
