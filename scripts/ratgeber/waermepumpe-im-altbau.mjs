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
  titel: 'Wärmepumpe im Altbau: Geht das überhaupt?',
  slug: 'waermepumpe-im-altbau',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Geht eine Wärmepumpe auch im Altbau? Ja – entscheidend sind nicht Baujahr und Bauchgefühl, sondern Heizlast, Vorlauftemperatur, Heizflächen und der tatsächliche Zustand des Hauses.',
  lesezeit: 12,

  seo: {
    metaTitle:
      'Wärmepumpe im Altbau: Voraussetzungen, Heizkörper, Einordnung | PEAK.Energy',
    metaDescription:
      'Wärmepumpe im Altbau: ehrliche Einordnung zu Heizlast, Vorlauftemperatur, Heizkörpern, Gebäudestandard, Wirtschaftlichkeit und typischen Planungsfehlern – praxisnah von PEAK.Energy.',
  },

  zusammenfassung: [
    {
      punkt: rich(
        paragraph(
          'Eine Wärmepumpe im Altbau ist grundsätzlich möglich. Entscheidend ist aber nicht das Etikett „Altbau“, sondern wie das Gebäude technisch tatsächlich dasteht.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Wichtig sind vor allem Heizlast, Vorlauftemperatur, Dämmzustand und vorhandene Heizflächen. Genau daraus ergibt sich, ob eine Wärmepumpe sinnvoll passt.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Nicht jeder Altbau ist automatisch problematisch. Genauso wenig ist jede Wärmepumpe im Altbau automatisch die richtige Lösung. Pauschalurteile helfen hier selten weiter.',
        ),
      ),
    },
    {
      punkt: rich(
        paragraph(
          'Die richtige Entscheidung entsteht aus sauberer Bestandsaufnahme – nicht aus Werbung, nicht aus Angst und nicht aus einem pauschalen „geht immer“ oder „geht nie“.',
        ),
      ),
    },
  ],

  inhalt: [
    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Wärmepumpe im Altbau: Warum die Frage oft zu pauschal gestellt wird'),
        paragraph(
          'Ja, eine Wärmepumpe kann auch im Altbau sinnvoll funktionieren. Entscheidend ist aber nicht allein das Baujahr des Hauses, sondern der tatsächliche Zustand des Gebäudes und des Heizsystems.',
        ),
        paragraph(
          'Genau hier beginnt in der Praxis oft schon das Problem: Viele Diskussionen über Wärmepumpen im Altbau laufen viel zu pauschal. Die einen sagen, das funktioniere grundsätzlich nicht. Die anderen tun so, als sei es in jedem Altbau ohne weitere Prüfung die ideale Lösung. Beides ist zu kurz gedacht.',
        ),
        paragraph(
          'Wirklich relevant sind andere Fragen: Wie hoch ist die Heizlast? Welche Vorlauftemperaturen werden im Winter tatsächlich benötigt? Welche Heizflächen sind vorhanden? Wie ist der Dämmzustand? Wie gut sind Fenster, Dach und Gebäudehülle? Und wie sauber ist das bestehende Heizsystem hydraulisch überhaupt abgestimmt?',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: 'Nicht das Baujahr entscheidet',
      content: rich(
        paragraph(
          'Der Begriff Altbau klingt nach einem klaren Urteil, ist technisch aber viel zu ungenau. Entscheidend ist nicht das Etikett, sondern die reale Gebäudesituation vor Ort.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Was bei einer Wärmepumpe im Altbau wirklich entscheidend ist'),
        paragraph(
          'Wenn man eine Wärmepumpe im Bestand ehrlich bewerten will, kommt man an drei Themen nicht vorbei: Heizlast, notwendige Vorlauftemperatur und vorhandene Heizflächen.',
        ),
        bulletList([
          'Wie viel Wärme braucht das Gebäude unter ungünstigen Bedingungen wirklich?',
          'Welche Vorlauftemperatur ist im Winter tatsächlich nötig?',
          'Können die vorhandenen Heizflächen diese Wärme auch bei moderaten Temperaturen übertragen?',
        ]),
        paragraph(
          'Die Heizlast ist dabei keine Nebensache, sondern eine der wichtigsten Grundlagen für die Auslegung. Wer hier zu grob arbeitet, riskiert ein System, das entweder ineffizient oder unnötig groß ist.',
        ),
        paragraph(
          'Auch die Vorlauftemperatur ist zentral. Je niedriger die Temperatur, die das Haus tatsächlich braucht, desto entspannter ist die Ausgangslage für eine Wärmepumpe in der Regel.',
        ),
      ),
    },

    {
      blockType: 'tipp',
      titel: 'Praxis schlägt Prospekt',
      content: rich(
        paragraph(
          'Eine Wärmepumpe arbeitet nicht deshalb gut, weil ein Prospekt das verspricht, sondern weil System, Gebäude und Nutzungsverhalten zusammenpassen. Genau das muss man im Altbau besonders ehrlich bewerten.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Braucht man im Altbau zwingend eine Fußbodenheizung?'),
        paragraph(
          'Nein. Die Vorstellung, dass eine Wärmepumpe im Altbau nur mit Fußbodenheizung sinnvoll ist, hält sich hartnäckig, ist aber in dieser Pauschalität falsch.',
        ),
        paragraph(
          'Richtig ist: Große Heizflächen helfen, weil sie die gleiche Wärme mit geringeren Temperaturen in den Raum bringen können. Eine Fußbodenheizung ist deshalb oft komfortabel für die Wärmepumpe – aber eben nicht die einzige Lösung.',
        ),
        paragraph(
          'Auch vorhandene Heizkörper können funktionieren, wenn sie ausreichend dimensioniert sind oder wenn einzelne kritische Räume gezielt verbessert werden. In manchen Häusern reicht schon der Austausch einzelner kleiner Heizkörper, um das Gesamtsystem deutlich besser aufzustellen.',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: 'Ohne Fußbodenheizung ist nicht automatisch Schluss',
      content: rich(
        paragraph(
          'Wer pauschal sagt, ohne Fußbodenheizung gehe es nicht, macht es sich zu leicht. Genauso falsch ist aber auch die Gegenbehauptung, dass Heizkörper nie ein Problem seien. Entscheidend ist die reale Auslegung.',
        ),
      ),
    },

    {
      blockType: 'tabelle',
      titel: 'Worauf es im Altbau praktisch ankommt',
      zeilen: [
        {
          spalte1: 'Heizlast',
          spalte2: 'zentrale Planungsgrundlage',
          spalte3:
            'zeigt, wie viel Wärme das Gebäude wirklich braucht und wie sauber die Wärmepumpe ausgelegt werden muss',
        },
        {
          spalte1: 'Vorlauftemperatur',
          spalte2: 'entscheidend für die Effizienz',
          spalte3:
            'je niedriger die nötige Vorlauftemperatur, desto besser ist die Ausgangslage in der Regel',
        },
        {
          spalte1: 'Heizflächen',
          spalte2: 'oft unterschätzt',
          spalte3:
            'Heizkörper oder Flächenheizung bestimmen, wie gut Wärme bei moderaten Temperaturen in die Räume gelangt',
        },
        {
          spalte1: 'Gebäudezustand',
          spalte2: 'wichtiger als das Baujahr',
          spalte3:
            'Fenster, Dach, Hülle und einzelne Schwachstellen beeinflussen stark, wie gut das Gesamtsystem funktioniert',
        },
      ],
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Wann eine Wärmepumpe im Altbau oft gut passt'),
        paragraph(
          'Eine Wärmepumpe passt im Altbau oft gut, wenn das Gebäude einen vernünftigen energetischen Zustand hat, die Heizflächen brauchbar ausgelegt sind und die notwendigen Systemtemperaturen nicht dauerhaft hoch liegen.',
        ),
        paragraph(
          'Das gilt auch für viele Häuser, die nicht als Vollsanierung gelten. Teilmodernisierte Gebäude mit ordentlichen Fenstern, brauchbarer Gebäudehülle und einer insgesamt sauberen Heizverteilung werden oft schlechter eingeschätzt, als sie tatsächlich sind.',
        ),
        paragraph(
          'Wer hier ehrlich plant, merkt schnell: Viele Altbauten sind weder hoffnungslos noch ideal – aber durchaus vernünftig für eine Wärmepumpe geeignet.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Wann man ehrlich bremsen sollte'),
        paragraph(
          'So wichtig die Chancen sind, so wichtig ist auch die ehrliche Einordnung der Grenzen. Es gibt Bestandsgebäude, in denen die Verluste hoch sind, die Heizkörper klein, die hydraulische Situation schlecht und die Erwartungen an Effizienz oder Einsparung unrealistisch.',
        ),
        paragraph(
          'In solchen Fällen hilft es niemandem, die Wärmepumpe schönzurechnen. Dann muss offen angesprochen werden, wo die Engstellen liegen und welche Voraussetzungen zuerst verbessert werden sollten.',
        ),
        paragraph(
          'Seriöse Planung bedeutet deshalb nicht, jede Wärmepumpe schlechtzureden. Sie bedeutet aber auch nicht, jeden Altbau zwanghaft passend zu rechnen. Entscheidend ist, ob die Lösung im echten Alltag funktionieren und wirtschaftlich vertretbar laufen kann.',
        ),
      ),
    },

    {
      blockType: 'tipp',
      titel: 'Technisch möglich ist nicht automatisch sinnvoll',
      content: rich(
        paragraph(
          'Machbarkeit und Wirtschaftlichkeit sind zwei verschiedene Fragen. Eine ehrliche Planung bewertet deshalb nicht nur, ob es grundsätzlich geht, sondern auch, wie sinnvoll die Lösung im konkreten Fall ist.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Welche Maßnahmen oft mehr bringen als gedacht'),
        paragraph(
          'Zwischen „geht sofort perfekt“ und „geht gar nicht“ gibt es in der Praxis viele sinnvolle Zwischenschritte. Genau diese werden in vielen Diskussionen übersehen.',
        ),
        bulletList([
          'hydraulischer Abgleich',
          'sinnvoll eingestellte Heizkurven',
          'Prüfung der tatsächlichen Vorlauftemperaturen im Winter',
          'gezielter Austausch einzelner kleiner Heizkörper',
          'Verbesserung einzelner schwacher Bereiche der Gebäudehülle',
        ]),
        paragraph(
          'Es muss also nicht immer sofort das ganz große Sanierungspaket sein. Häufig ist es deutlich sinnvoller, die größten Engstellen ehrlich zu identifizieren und dann mit Augenmaß zu entscheiden, welche Maßnahmen wirklich etwas bringen.',
        ),
      ),
    },

    {
      blockType: 'hinweis',
      titel: 'Nicht dogmatisch planen',
      content: rich(
        paragraph(
          'Ein guter Bestand wird nicht künstlich schlechtgeredet. Ein problematischer Bestand wird aber auch nicht mit Verkaufsrhetorik schöngerechnet. Genau diese Ehrlichkeit macht am Ende den Unterschied.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Typische Beratungsfehler bei Wärmepumpen im Altbau'),
        paragraph(
          'Ein häufiger Fehler ist, nur mit dem Baujahr zu argumentieren. Das klingt schnell und einfach, sagt aber über die tatsächliche Eignung oft zu wenig aus.',
        ),
        paragraph(
          'Genauso problematisch ist es, Vorlauftemperaturen nur zu vermuten statt sauber einzuordnen. Wer nicht ehrlich auf das reale Heizverhalten schaut, plant schnell an der Praxis vorbei.',
        ),
        bulletList([
          'Baujahr mit Eignung verwechseln',
          'Vorlauftemperaturen nur schätzen statt sauber bewerten',
          'Heizkörper pauschal abschreiben oder pauschal schönreden',
          'Wirtschaftlichkeit zu weich darstellen',
          'Standardlösung verkaufen, obwohl der Bestand individuell geprüft werden müsste',
        ]),
        paragraph(
          'Die größten Fehler entstehen oft nicht bei der Technik selbst, sondern schon in der Einordnung davor.',
        ),
      ),
    },

    {
      blockType: 'text',
      content: rich(
        heading('h2', 'Unser Fazit'),
        paragraph(
          'Eine Wärmepumpe im Altbau kann sehr sinnvoll sein – aber nur, wenn Gebäude und Technik sauber bewertet werden. Entscheidend ist nicht das Schlagwort Altbau, sondern ob Heizlast, Heizflächen, Vorlauftemperaturen und Gebäudestandard zur geplanten Lösung passen.',
        ),
        paragraph(
          'Am Ende geht es nicht darum, eine Wärmepumpe um jeden Preis passend zu reden. Es geht darum, sauber herauszuarbeiten, wann sie im Altbau gut passt, wann kleinere Anpassungen sinnvoll sind und wann man Dinge offen ansprechen muss.',
        ),
        paragraph(
          'Genau diese Ehrlichkeit schafft Vertrauen – und sie führt fast immer zu besseren Entscheidungen als jedes pauschale Verkaufsversprechen.',
        ),
      ),
    },

    {
      blockType: 'cta',
      titel: 'Lass uns deinen Altbau ehrlich einordnen',
      text:
        'Wir schauen uns Gebäudesituation, Heizsystem, Heizflächen, Vorlauftemperaturen und technische Möglichkeiten gemeinsam an – praxisnah, ehrlich und ohne pauschale Standardantwort.',
      buttonText: 'Wärmepumpe anfragen',
      buttonLink: '/waermepumpe',
    },
  ],

  faq: [
    {
      frage: 'Kann eine Wärmepumpe im Altbau grundsätzlich funktionieren?',
      antwort:
        'Ja. Eine Wärmepumpe kann auch im Altbau sinnvoll funktionieren. Entscheidend sind aber nicht nur Baujahr oder Schlagwort Altbau, sondern Heizlast, Vorlauftemperatur, Heizflächen und der tatsächliche Zustand des Gebäudes.',
    },
    {
      frage: 'Ist ein unsanierter Altbau automatisch ungeeignet?',
      antwort:
        'Nein. Auch ein unsanierter oder nur teilweise sanierter Altbau kann in manchen Fällen mit einer Wärmepumpe funktionieren. Maßgeblich ist, wie hoch der Wärmebedarf wirklich ist und bei welchen Temperaturen das Heizsystem zuverlässig arbeitet.',
    },
    {
      frage: 'Braucht man für eine Wärmepumpe im Altbau zwingend eine Fußbodenheizung?',
      antwort:
        'Nein. Eine Fußbodenheizung ist hilfreich, aber keine Pflicht. Auch gut ausgelegte Heizkörper können funktionieren. Entscheidend ist, ob die benötigte Wärme bei möglichst moderaten Vorlauftemperaturen zuverlässig in die Räume gebracht werden kann.',
    },
    {
      frage: 'Welche Rolle spielt die Vorlauftemperatur?',
      antwort:
        'Eine sehr große. Je niedriger die notwendige Vorlauftemperatur, desto besser ist die Ausgangslage für eine Wärmepumpe in der Regel. Hohe Vorlauftemperaturen sind nicht automatisch ein Ausschlusskriterium, sollten aber ehrlich eingeordnet werden.',
    },
    {
      frage: 'Ist eine Wärmepumpe im Altbau immer wirtschaftlich?',
      antwort:
        'Nicht automatisch. Technische Machbarkeit und wirtschaftliche Sinnhaftigkeit sind zwei verschiedene Fragen. Eine ehrliche Planung bewertet deshalb nicht nur, ob es grundsätzlich geht, sondern auch, wie sinnvoll die Lösung im konkreten Fall ist.',
    },
    {
      frage: 'Muss ein Altbau zuerst komplett saniert werden?',
      antwort:
        'Nicht zwingend. Eine Vollsanierung ist nicht in jedem Fall Voraussetzung. Häufig helfen schon einzelne sinnvolle Maßnahmen, zum Beispiel ein hydraulischer Abgleich oder der Austausch einzelner Heizkörper.',
    },
  ],
}

await upsertRatgeberArticle(article)
