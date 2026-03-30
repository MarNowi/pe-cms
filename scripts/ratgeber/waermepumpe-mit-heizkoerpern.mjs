import { upsertRatgeberArticle } from './_articleFactory.mjs'
import {
  t,
  bold,
  p,
  h,
  ul,
  summaryPoint,
  textBlock,
  hinweisBlock,
  tippBlock,
  tabelleBlock,
  ctaBlock,
  faqItem,
  seo,
} from './_helpers.mjs'

const article = {
  titel: 'Wärmepumpe mit Heizkörpern: Geht das wirklich?',
  slug: 'waermepumpe-mit-heizkoerpern',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Wärmepumpe mit Heizkörpern? Ja, das kann funktionieren. Entscheidend sind nicht Pauschalurteile, sondern Vorlauftemperatur, Heizkörpergröße, Hydraulik und der tatsächliche Wärmebedarf.',
  lesezeit: 11,

  seo: seo(
    'Wärmepumpe mit Heizkörpern: Geht das wirklich? | PEAK.Energy',
    'Wärmepumpe mit Heizkörpern: ehrliche Einordnung zu Vorlauftemperatur, Heizflächen, Heizlast, typischen Denkfehlern und sinnvollen Maßnahmen – praxisnah von PEAK.Energy.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Eine Wärmepumpe kann auch mit Heizkörpern funktionieren. '),
      bold('Entscheidend ist nicht das Vorurteil gegen Heizkörper'),
      t(', sondern ob das System im konkreten Gebäude technisch sauber passt.'),
    ),
    summaryPoint(
      t('Wichtig sind vor allem Heizlast, notwendige Vorlauftemperatur, Größe der Heizkörper und die hydraulische Situation im Haus.'),
    ),
    summaryPoint(
      t('Nicht jeder Heizkörperbestand ist automatisch geeignet. '),
      bold('Aber genauso wenig sind Heizkörper automatisch ein Ausschlusskriterium'),
      t('.'),
    ),
    summaryPoint(
      t('Oft helfen schon einzelne gezielte Maßnahmen, zum Beispiel der Austausch weniger kleiner Heizkörper, ein sauberer hydraulischer Abgleich oder eine ehrliche Einordnung der realen Winterbedingungen.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Wärmepumpe mit Heizkörpern: Warum diese Frage so oft falsch gestellt wird')),
      p(
        t('Viele Hausbesitzer hören beim Thema Wärmepumpe und Heizkörper sofort zwei Extreme: Die einen sagen, das gehe grundsätzlich nicht. Die anderen tun so, als sei das immer völlig problemlos. Beides hilft in der Praxis kaum weiter.'),
      ),
      p(
        t('Die eigentliche Frage lautet nicht, ob irgendwo im Haus Heizkörper hängen. Die entscheidende Frage ist, '),
        bold('ob das Gebäude mit seinen vorhandenen Heizflächen bei vernünftigen Systemtemperaturen zuverlässig warm wird'),
        t('.'),
      ),
      p(
        t('Genau deshalb ist „Heizkörper ja oder nein?“ zu grob. Entscheidend sind Wärmebedarf, Vorlauftemperatur, Größe der Heizkörper, Regelung und die Frage, wie das Haus an kalten Tagen tatsächlich arbeitet.'),
      ),
    ),

    hinweisBlock(
      'Heizkörper sind nicht automatisch ein K.-o.-Kriterium',
      p(
        t('Eine Wärmepumpe scheitert nicht allein daran, dass Heizkörper vorhanden sind. Entscheidend ist, ob diese Heizflächen die nötige Wärme auch bei moderaten Vorlauftemperaturen sinnvoll in die Räume bringen können.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bei Wärmepumpe und Heizkörpern wirklich entscheidend ist')),
      p(
        t('Wenn man ein Haus mit Heizkörpern ehrlich bewertet, kommt man an vier Punkten nicht vorbei: Heizlast, Vorlauftemperatur, Heizkörpergröße und Hydraulik.'),
      ),
      ul(
        p(t('Wie viel Wärme braucht das Gebäude an kalten Tagen wirklich?')),
        p(t('Welche Vorlauftemperatur ist dafür im Winter tatsächlich nötig?')),
        p(t('Sind die vorhandenen Heizkörper ausreichend dimensioniert?')),
        p(t('Ist das Heizsystem hydraulisch sauber abgestimmt oder eher historisch gewachsen?')),
      ),
      p(
        t('Diese Punkte sind wichtiger als jede pauschale Aussage. Denn zwei Häuser mit ähnlichen Heizkörpern können technisch völlig unterschiedlich zu bewerten sein.'),
      ),
    ),

    tabelleBlock('Worauf es bei Heizkörpern und Wärmepumpe praktisch ankommt', [
      {
        spalte1: 'Heizlast',
        spalte2: 'zentrale Grundlage',
        spalte3:
          'zeigt, wie viel Wärme das Gebäude wirklich benötigt und wie belastbar die Systemauslegung sein muss',
      },
      {
        spalte1: 'Vorlauftemperatur',
        spalte2: 'entscheidend für die Einordnung',
        spalte3:
          'je niedriger die real nötige Vorlauftemperatur, desto entspannter ist die Ausgangslage in der Regel',
      },
      {
        spalte1: 'Heizkörpergröße',
        spalte2: 'oft wichtiger als das Etikett Heizkörper',
        spalte3:
          'größere Heizflächen können dieselbe Wärme mit niedrigeren Temperaturen an den Raum abgeben',
      },
      {
        spalte1: 'Hydraulik',
        spalte2: 'häufig unterschätzt',
        spalte3:
          'ein schlecht abgestimmtes System kann Probleme verursachen, die fälschlich allein den Heizkörpern zugeschrieben werden',
      },
    ]),

    textBlock(
      h('h2', t('Warum die Größe der Heizkörper wichtiger ist als ihr bloßes Vorhandensein')),
      p(
        t('Oft wird so gesprochen, als seien Heizkörper ein einheitliches Problem. Das ist technisch zu grob. Ein großer, passend ausgelegter Heizkörper ist etwas völlig anderes als ein kleiner alter Heizkörper in einem kritischen Raum.'),
      ),
      p(
        t('Wärmeübertragung hängt stark von der verfügbaren Heizfläche ab. '),
        bold('Je besser die Wärme in den Raum übertragen werden kann, desto niedriger kann die nötige Vorlauftemperatur ausfallen'),
        t('. Genau deshalb ist die Größe und Position einzelner Heizkörper oft wichtiger als das pauschale Label „Haus mit Heizkörpern“.'),
      ),
      p(
        t('In der Praxis zeigt sich deshalb häufig: Nicht das gesamte Heizkörpersystem ist das Problem, sondern einzelne Engstellen. Manchmal reichen schon gezielte Anpassungen in wenigen Räumen, um die Ausgangslage deutlich zu verbessern.'),
      ),
    ),

    tippBlock(
      'Ein einzelner Raum kann das ganze Bild verzerren',
      p(
        t('Oft ist nicht das komplette Haus problematisch, sondern ein oder zwei Räume mit zu kleinen Heizkörpern oder ungünstiger Wärmeverteilung. Genau deshalb sollte man nicht pauschal urteilen, sondern sauber hinschauen.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Rolle die Vorlauftemperatur spielt')),
      p(
        t('Die Vorlauftemperatur ist einer der wichtigsten Prüfsteine bei Wärmepumpen mit Heizkörpern. Je niedriger die Temperatur ist, die das Haus im Winter real braucht, desto besser ist die Ausgangslage in der Regel.'),
      ),
      p(
        t('Hohe Vorlauftemperaturen sind nicht automatisch ein Ausschlusskriterium. Sie müssen aber ehrlich eingeordnet werden. Wer nur schönredet oder grob schätzt, plant schnell an der Praxis vorbei.'),
      ),
      p(
        t('Entscheidend ist deshalb nicht, was theoretisch irgendwann mal angenommen wurde, sondern wie das System sich unter realen Winterbedingungen verhält. Genau dort zeigt sich, ob Heizkörper und Wärmepumpe sauber zusammenpassen können.'),
      ),
    ),

    hinweisBlock(
      'Nicht schätzen, sondern sauber einordnen',
      p(
        t('Die notwendige Vorlauftemperatur sollte nicht aus Bauchgefühl bewertet werden. Je genauer man das reale Verhalten des Hauses kennt, desto besser lässt sich das System einordnen.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann eine Wärmepumpe mit Heizkörpern oft gut funktioniert')),
      p(
        t('Eine Wärmepumpe mit Heizkörpern funktioniert oft gut, wenn das Gebäude einen vernünftigen energetischen Zustand hat, die Heizkörper brauchbar dimensioniert sind und die realen Vorlauftemperaturen nicht dauerhaft in problematische Bereiche laufen.'),
      ),
      p(
        t('Das betrifft auch viele Häuser, die nicht perfekt saniert sind. Teilmodernisierte Gebäude mit ordentlichen Fenstern, vernünftiger Hülle und ausreichend großen Heizflächen werden häufig schlechter eingeschätzt, als sie tatsächlich sind.'),
      ),
      p(
        t('Wer hier sauber plant, merkt oft schnell: Viele Bestandsgebäude mit Heizkörpern sind nicht idealisiert perfekt – aber trotzdem technisch gut genug für eine sinnvolle Wärmepumpenlösung.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann man ehrlich bremsen sollte')),
      p(
        t('Genauso wichtig ist die andere Seite. Es gibt Häuser, in denen die Verluste hoch sind, die Heizkörper klein, die Hydraulik schwach und die Erwartungen an Komfort oder Einsparung unrealistisch.'),
      ),
      p(
        t('In solchen Fällen hilft es niemandem, Heizkörper und Wärmepumpe einfach passend zu reden. Dann muss offen angesprochen werden, wo die Engstellen liegen und welche Maßnahmen zuerst sinnvoll sind.'),
      ),
      p(
        t('Seriöse Planung bedeutet deshalb nicht, Heizkörper pauschal schlechtzureden. Sie bedeutet aber auch nicht, jeden Bestand zwanghaft passend zu rechnen. '),
        bold('Entscheidend ist, ob die Lösung im Alltag vernünftig und wirtschaftlich vertretbar laufen kann'),
        t('.'),
      ),
    ),

    tippBlock(
      'Technisch möglich ist nicht automatisch sinnvoll',
      p(
        t('Machbarkeit und Sinnhaftigkeit sind zwei verschiedene Fragen. Gute Planung schaut deshalb nicht nur darauf, ob es irgendwie geht, sondern ob das System im echten Betrieb sauber funktioniert.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Maßnahmen oft mehr bringen als gedacht')),
      p(
        t('Zwischen „geht sofort perfekt“ und „geht gar nicht“ gibt es viele sinnvolle Zwischenschritte. Genau diese werden in Diskussionen über Wärmepumpen mit Heizkörpern oft übersehen.'),
      ),
      ul(
        p(t('hydraulischer Abgleich')),
        p(t('sinnvoll eingestellte Heizkurven')),
        p(t('Prüfung der realen Vorlauftemperaturen im Winter')),
        p(t('gezielter Austausch einzelner kleiner Heizkörper')),
        p(t('Verbesserung einzelner schwacher Stellen an der Gebäudehülle')),
      ),
      p(
        t('Oft braucht es also kein komplettes Neuaufrollen des Hauses, sondern eine ehrliche Bewertung der größten Engstellen und dann gezielte, technisch sinnvolle Maßnahmen.'),
      ),
    ),

    tabelleBlock('Häufige Aussagen und die saubere Einordnung dazu', [
      {
        spalte1: '„Mit Heizkörpern geht Wärmepumpe nie.“',
        spalte2: 'zu pauschal',
        spalte3:
          'entscheidend sind reale Vorlauftemperaturen, Heizflächen, Heizlast und Systemzustand',
      },
      {
        spalte1: '„Heizkörper sind nie ein Problem.“',
        spalte2: 'ebenfalls zu pauschal',
        spalte3:
          'kleine oder ungünstige Heizkörper können sehr wohl eine technische Grenze darstellen',
      },
      {
        spalte1: '„Dann tauscht man einfach alles.“',
        spalte2: 'nicht immer nötig',
        spalte3:
          'häufig reichen gezielte Anpassungen statt eines vollständigen Umbaus',
      },
      {
        spalte1: '„Altbau mit Heizkörpern ist automatisch ungeeignet.“',
        spalte2: 'fachlich zu grob',
        spalte3:
          'nicht das Schlagwort entscheidet, sondern die konkrete Gebäudesituation',
      },
    ]),

    textBlock(
      h('h2', t('Typische Beratungsfehler bei Wärmepumpe und Heizkörpern')),
      p(
        t('Die größten Fehler entstehen oft nicht bei der Technik selbst, sondern schon in der Einordnung davor. Gerade beim Thema Heizkörper werden in der Praxis immer wieder dieselben Abkürzungen genommen.'),
      ),
      ul(
        p(t('Heizkörper pauschal als ungeeignet abstempeln')),
        p(t('Vorlauftemperaturen nur vermuten statt sauber bewerten')),
        p(t('einzelne kritische Räume auf das ganze Haus übertragen')),
        p(t('Hydraulik und Regelung zu wenig beachten')),
        p(t('Wirtschaftlichkeit oder Grenzen zu weich darstellen')),
      ),
      p(
        t('Wer diese Fehler vermeidet, kommt fast immer zu einer belastbareren Einordnung als mit jeder Schnellbehauptung über Heizkörper.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Eine Wärmepumpe mit Heizkörpern kann sehr gut funktionieren. Entscheidend ist nicht das Vorhandensein von Heizkörpern allein, sondern ob Heizlast, Vorlauftemperatur, Heizflächen und Hydraulik zum geplanten System passen.'),
      ),
      p(
        t('Nicht jeder Bestand ist automatisch geeignet. Aber genauso wenig sind Heizkörper automatisch ein Gegenargument. Die ehrliche Antwort entsteht fast immer aus der konkreten Gebäudesituation.'),
      ),
      p(
        t('Genau deshalb lohnt sich eine saubere Einordnung mehr als jede pauschale Aussage. Denn gute Planung trennt Vorurteile von technischer Realität.'),
      ),
    ),

    ctaBlock({
      titel: 'Lass uns deine Heizkörper ehrlich einordnen',
      text:
        'Wir schauen uns Heizflächen, Vorlauftemperaturen, Wärmebedarf und Gebäudesituation gemeinsam an – praxisnah, ehrlich und ohne pauschale Standardantwort.',
      buttonText: 'Wärmepumpe anfragen',
      buttonLink: '/waermepumpe',
    }),
  ],

  faq: [
    faqItem(
      'Kann eine Wärmepumpe mit normalen Heizkörpern funktionieren?',
      'Ja. Eine Wärmepumpe kann auch mit Heizkörpern funktionieren. Entscheidend sind aber Heizlast, Vorlauftemperatur, Größe der Heizkörper und die hydraulische Situation des Hauses.',
    ),
    faqItem(
      'Braucht man für eine Wärmepumpe zwingend eine Fußbodenheizung?',
      'Nein. Eine Fußbodenheizung ist hilfreich, aber keine Pflicht. Auch ausreichend große und passend eingebundene Heizkörper können funktionieren.',
    ),
    faqItem(
      'Sind alte Heizkörper automatisch ein Problem?',
      'Nicht automatisch. Manche Heizkörperbestände funktionieren besser, als pauschale Aussagen vermuten lassen. Kritisch wird es vor allem dann, wenn einzelne Heizflächen zu klein sind oder hohe Vorlauftemperaturen dauerhaft nötig werden.',
    ),
    faqItem(
      'Welche Rolle spielt die Vorlauftemperatur?',
      'Eine sehr große. Je niedriger die real notwendige Vorlauftemperatur ist, desto besser ist die Ausgangslage für eine Wärmepumpe in der Regel.',
    ),
    faqItem(
      'Muss man alle Heizkörper austauschen?',
      'Nein. Häufig reichen gezielte Anpassungen, zum Beispiel in einzelnen kritischen Räumen. Ob ein kompletter Austausch nötig ist, lässt sich nicht pauschal sagen.',
    ),
    faqItem(
      'Was ist der häufigste Denkfehler bei Wärmepumpe und Heizkörpern?',
      'Der häufigste Fehler ist pauschales Denken. Weder „geht nie“ noch „geht immer“ ist eine saubere technische Antwort. Entscheidend ist die konkrete Gebäudesituation.',
    ),
  ],
}

await upsertRatgeberArticle(article)
