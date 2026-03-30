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
  titel: 'Wärmepumpe Vorlauftemperatur erklärt: Warum sie so wichtig ist',
  slug: 'waermepumpe-vorlauftemperatur',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Die Vorlauftemperatur ist einer der wichtigsten Faktoren für eine Wärmepumpe. Sie beeinflusst Effizienz, Stromverbrauch und die Frage, ob ein Gebäude technisch gut zur Anlage passt.',
  lesezeit: 11,

  seo: seo(
    'Wärmepumpe Vorlauftemperatur erklärt: ehrlich eingeordnet | PEAK.Energy',
    'Wärmepumpe Vorlauftemperatur erklärt: Was sie bedeutet, warum sie für Effizienz und Stromverbrauch wichtig ist und welche Denkfehler bei der Einordnung häufig passieren.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Die Vorlauftemperatur beschreibt, mit welcher Temperatur das Heizwasser in das Heizsystem geschickt wird. Sie ist für Wärmepumpen besonders wichtig.'),
    ),
    summaryPoint(
      t('Grundsätzlich gilt: '),
      bold('Je niedriger die notwendige Vorlauftemperatur, desto günstiger ist die Ausgangslage für eine Wärmepumpe in der Regel'),
      t('.'),
    ),
    summaryPoint(
      t('Entscheidend ist aber nicht irgendein Prospektwert, sondern welche Vorlauftemperatur das Gebäude unter realen Winterbedingungen tatsächlich braucht.'),
    ),
    summaryPoint(
      t('Hohe Vorlauftemperaturen sind nicht automatisch ein Ausschlusskriterium. Sie müssen aber ehrlich eingeordnet werden, weil sie Effizienz, Stromverbrauch und Systemauslegung spürbar beeinflussen.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Was ist die Vorlauftemperatur überhaupt?')),
      p(
        t('Die Vorlauftemperatur beschreibt die Temperatur des Heizwassers, das von der Heizung in das Heizsystem geschickt wird. Dieses warme Wasser fließt also in Heizkörper oder Flächenheizung und gibt dort Wärme an die Räume ab.'),
      ),
      p(
        t('Je nachdem, wie das Gebäude beschaffen ist und wie groß die vorhandenen Heizflächen sind, kann dafür eine niedrigere oder höhere Temperatur nötig sein. Genau deshalb ist die Vorlauftemperatur keine Nebensache, sondern ein zentraler Teil der technischen Einordnung.'),
      ),
      p(
        t('Beim Thema Wärmepumpe ist sie besonders wichtig, weil die Anlage umso entspannter arbeiten kann, je niedriger die nötige Systemtemperatur im Alltag ausfällt.'),
      ),
    ),

    hinweisBlock(
      'Nicht irgendeine Zahl, sondern reale Anforderung',
      p(
        t('Wichtig ist nicht, welche Vorlauftemperatur theoretisch mal angenommen wurde, sondern welche Temperatur das Gebäude unter echten Bedingungen wirklich braucht, damit es zuverlässig warm wird.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum die Vorlauftemperatur für Wärmepumpen so wichtig ist')),
      p(
        t('Die Vorlauftemperatur beeinflusst direkt, wie effizient eine Wärmepumpe arbeiten kann. Muss das System dauerhaft hohe Temperaturen bereitstellen, steigt der technische Aufwand. Kann das Haus dagegen mit moderateren Temperaturen gut versorgt werden, ist die Ausgangslage meist deutlich besser.'),
      ),
      p(
        t('Genau deshalb taucht das Thema in fast jeder ernsthaften Wärmepumpen-Beratung auf. '),
        bold('Die Vorlauftemperatur ist einer der wichtigsten Prüfsteine dafür, wie gut Gebäude und Wärmepumpe zusammenpassen'),
        t('.'),
      ),
      p(
        t('Sie beeinflusst nicht nur die Effizienz, sondern auch Stromverbrauch, Laufverhalten und die Frage, ob die geplante Lösung technisch wirklich sauber ist oder nur auf dem Papier schön aussieht.'),
      ),
    ),

    tippBlock(
      'Die Vorlauftemperatur ist kein Randdetail',
      p(
        t('Wer die Vorlauftemperatur nur grob schätzt oder nebenbei behandelt, übersieht oft einen der wichtigsten Hebel in der Planung. Genau hier trennt sich saubere Einordnung von oberflächlicher Beratung.'),
      ),
    ),

    textBlock(
      h('h2', t('Was gilt grundsätzlich: niedrig ist meist besser')),
      p(
        t('Für Wärmepumpen gilt grundsätzlich: Je niedriger die notwendige Vorlauftemperatur, desto besser ist die Ausgangslage in der Regel. Das bedeutet nicht, dass ein Haus mit etwas höheren Temperaturen automatisch ungeeignet ist. Es bedeutet aber, dass die Bedingungen ehrlicher eingeordnet werden müssen.'),
      ),
      p(
        t('Niedrigere Vorlauftemperaturen helfen der Wärmepumpe, effizienter zu arbeiten. Höhere Vorlauftemperaturen erhöhen in vielen Fällen den Aufwand und damit oft auch den Stromverbrauch.'),
      ),
      p(
        t('Genau deshalb ist die Vorlauftemperatur kein theoretischer Technikbegriff, sondern eine ganz praktische Größe für Alltag, Effizienz und Wirtschaftlichkeit.'),
      ),
    ),

    tabelleBlock('Wie die Vorlauftemperatur praktisch einzuordnen ist', [
      {
        spalte1: 'niedrigere Vorlauftemperatur',
        spalte2: 'meist günstige Ausgangslage',
        spalte3:
          'hilft der Wärmepumpe in der Regel, effizienter und entspannter zu arbeiten',
      },
      {
        spalte1: 'mittlere Vorlauftemperatur',
        spalte2: 'genauer hinschauen',
        spalte3:
          'kann gut funktionieren, muss aber sauber im Kontext von Gebäude und Heizflächen bewertet werden',
      },
      {
        spalte1: 'höhere Vorlauftemperatur',
        spalte2: 'kritischer einordnen',
        spalte3:
          'ist nicht automatisch ein Ausschlusskriterium, beeinflusst aber Effizienz und Verbrauch spürbar',
      },
    ]),

    textBlock(
      h('h2', t('Wovon hängt die notwendige Vorlauftemperatur ab?')),
      p(
        t('Die nötige Vorlauftemperatur entsteht nicht zufällig. Sie ist das Ergebnis aus Gebäude, Heizflächen und Wärmebedarf.'),
      ),
      ul(
        p(t('Wie hoch sind die Wärmeverluste des Gebäudes?')),
        p(t('Wie groß und wirksam sind die vorhandenen Heizflächen?')),
        p(t('Wie ist die Hydraulik des Heizsystems abgestimmt?')),
        p(t('Wie wird das Haus tatsächlich genutzt und beheizt?')),
        p(t('Welche Außentemperaturen sind unter realen Winterbedingungen relevant?')),
      ),
      p(
        t('Genau deshalb kann man die Vorlauftemperatur nicht isoliert betrachten. Zwei Häuser mit ähnlicher Wohnfläche können völlig unterschiedliche Systemtemperaturen brauchen.'),
      ),
    ),

    hinweisBlock(
      'Nicht das Baujahr allein entscheidet',
      p(
        t('Auch bei der Vorlauftemperatur gilt: Nicht das Schlagwort Altbau oder Neubau entscheidet allein, sondern die konkrete Gebäudesituation. Fenster, Hülle, Heizflächen und Hydraulik sind oft wichtiger als das reine Baujahr.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Rolle spielen Heizkörper und Fußbodenheizung?')),
      p(
        t('Große Heizflächen können dieselbe Wärme mit niedrigeren Temperaturen an den Raum abgeben. Genau deshalb ist eine Fußbodenheizung für Wärmepumpen oft komfortabel. Das bedeutet aber nicht, dass Heizkörper automatisch problematisch sind.'),
      ),
      p(
        t('Auch mit Heizkörpern kann eine Wärmepumpe funktionieren – entscheidend ist, ob diese Heizflächen ausreichend dimensioniert sind und wie hoch die real nötige Vorlauftemperatur dadurch ausfällt.'),
      ),
      p(
        t('Die saubere Frage lautet deshalb nicht: Heizkörper oder Fußbodenheizung? Sondern: '),
        bold('Welche Temperaturen braucht dieses konkrete Haus mit seinen vorhandenen Heizflächen wirklich?'),
      ),
    ),

    tippBlock(
      'Nicht das Systemetikett, sondern die reale Leistung zählt',
      p(
        t('Eine Fußbodenheizung ist kein automatischer Freifahrtschein. Heizkörper sind kein automatisches Gegenargument. Entscheidend ist, wie das Gesamtsystem unter realen Bedingungen arbeitet.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum zu hohe Vorlauftemperaturen ein Warnsignal sein können')),
      p(
        t('Wenn ein Haus dauerhaft hohe Vorlauftemperaturen braucht, ist das ein Zeichen dafür, dass genauer hingeschaut werden sollte. Das kann an kleinen Heizflächen, an hoher Heizlast, an der Gebäudehülle oder an der Systemabstimmung liegen.'),
      ),
      p(
        t('Hohe Vorlauftemperaturen sind also nicht nur eine Zahl im Display. Sie geben oft Hinweise darauf, wo technische Engstellen im System liegen.'),
      ),
      p(
        t('Genau deshalb sollte man hohe Werte nicht einfach wegdiskutieren, sondern als Anlass nehmen, sauber zu prüfen, '),
        bold('warum das Gebäude diese Temperaturen überhaupt braucht'),
        t('.'),
      ),
    ),

    tabelleBlock('Was hohe Vorlauftemperaturen oft bedeuten können', [
      {
        spalte1: 'kleine Heizflächen',
        spalte2: 'häufiger Grund',
        spalte3:
          'wenn Heizkörper wenig Fläche haben, brauchen sie oft höhere Temperaturen, um genug Wärme abzugeben',
      },
      {
        spalte1: 'hohe Wärmeverluste',
        spalte2: 'Gebäude genauer prüfen',
        spalte3:
          'ein hoher Wärmebedarf kann dazu führen, dass mehr Temperatur ins System gegeben werden muss',
      },
      {
        spalte1: 'schwache Hydraulik oder Einstellung',
        spalte2: 'oft übersehen',
        spalte3:
          'nicht immer ist nur das Gebäude das Problem – auch die Systemabstimmung kann eine Rolle spielen',
      },
    ]),

    textBlock(
      h('h2', t('Kann man die Vorlauftemperatur verbessern?')),
      p(
        t('Ja, oft ist das möglich. Entscheidend ist aber, nicht dogmatisch vorzugehen. Nicht jedes Haus braucht sofort die große Komplettsanierung. Häufig helfen schon gezielte Maßnahmen an den richtigen Stellen.'),
      ),
      ul(
        p(t('hydraulischer Abgleich')),
        p(t('sinnvoll eingestellte Heizkurven')),
        p(t('gezielter Austausch einzelner kleiner Heizkörper')),
        p(t('Verbesserung einzelner Schwachstellen an der Gebäudehülle')),
        p(t('saubere Einordnung des realen Heizverhaltens im Winter')),
      ),
      p(
        t('Wichtig ist, die größten Engstellen zuerst zu erkennen. Dann lässt sich besser beurteilen, welche Maßnahmen wirklich etwas bringen und welche nur nach Aktivität aussehen.'),
      ),
    ),

    hinweisBlock(
      'Nicht blind optimieren',
      p(
        t('Eine niedrigere Vorlauftemperatur ist kein Selbstzweck. Sie ist dann sinnvoll, wenn das Haus trotzdem zuverlässig warm bleibt und das Gesamtsystem technisch sauber arbeitet.'),
      ),
    ),

    textBlock(
      h('h2', t('Typische Denkfehler bei der Vorlauftemperatur')),
      p(
        t('Rund um die Vorlauftemperatur tauchen in der Praxis immer wieder dieselben Missverständnisse auf.'),
      ),
      ul(
        p(t('eine einzelne Zahl ohne Kontext bewerten')),
        p(t('theoretische Annahmen mit realem Winterbetrieb verwechseln')),
        p(t('hohe Vorlauftemperatur automatisch mit „geht nicht“ gleichsetzen')),
        p(t('Heizkörper pauschal verantwortlich machen')),
        p(t('Effizienzversprechen machen, ohne die Systemtemperaturen sauber einzuordnen')),
      ),
      p(
        t('Genau deshalb lohnt sich hier eine nüchterne, technische Betrachtung mehr als jede schnelle Schlagwort-Aussage.'),
      ),
    ),

    tippBlock(
      'Eine ehrliche Einordnung ist wertvoller als ein schöner Grenzwert',
      p(
        t('Viele Diskussionen drehen sich um starre Schwellen. In der Praxis ist wichtiger, wie das Gebäude real arbeitet und welche Maßnahmen sinnvoll sind, damit das System im Alltag sauber läuft.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die Vorlauftemperatur ist einer der wichtigsten Faktoren bei einer Wärmepumpe. Sie beeinflusst Effizienz, Stromverbrauch und die Frage, wie gut ein Gebäude technisch zur Anlage passt.'),
      ),
      p(
        t('Grundsätzlich gilt: Niedrigere notwendige Vorlauftemperaturen sind meist günstiger. Höhere Temperaturen sind nicht automatisch ein Ausschlusskriterium, müssen aber ehrlich eingeordnet werden.'),
      ),
      p(
        t('Entscheidend ist am Ende nicht irgendein pauschaler Richtwert, sondern welche Vorlauftemperatur das konkrete Haus unter realen Bedingungen wirklich braucht. Genau dort beginnt eine saubere Planung.'),
      ),
    ),

    ctaBlock({
      titel: 'Lass uns die Vorlauftemperatur deines Hauses ehrlich einordnen',
      text:
        'Wir schauen uns Heizflächen, Wärmebedarf, Systemtemperaturen und Gebäudesituation gemeinsam an – praxisnah, ehrlich und ohne pauschale Schnellurteile.',
      buttonText: 'Wärmepumpe anfragen',
      buttonLink: '/waermepumpe',
    }),
  ],

  faq: [
    faqItem(
      'Was ist die Vorlauftemperatur bei einer Wärmepumpe?',
      'Die Vorlauftemperatur ist die Temperatur des Heizwassers, das von der Wärmepumpe in das Heizsystem geschickt wird. Sie ist wichtig, weil sie Effizienz und Stromverbrauch direkt beeinflusst.',
    ),
    faqItem(
      'Warum ist die Vorlauftemperatur für Wärmepumpen so wichtig?',
      'Weil Wärmepumpen in der Regel umso günstiger arbeiten, je niedriger die notwendige Vorlauftemperatur ausfällt. Hohe Temperaturen erhöhen häufig den technischen Aufwand und den Verbrauch.',
    ),
    faqItem(
      'Sind hohe Vorlauftemperaturen automatisch ein Ausschlusskriterium?',
      'Nein. Sie sind aber ein klares Signal dafür, dass genauer hingeschaut werden sollte. Hohe Werte beeinflussen Effizienz und Systemauslegung spürbar.',
    ),
    faqItem(
      'Hängt die Vorlauftemperatur von den Heizkörpern ab?',
      'Ja, unter anderem. Größe und Wirkung der Heizflächen spielen eine wichtige Rolle. Größere Heizflächen können Wärme oft schon bei niedrigeren Temperaturen an den Raum abgeben.',
    ),
    faqItem(
      'Kann man die notwendige Vorlauftemperatur verbessern?',
      'Oft ja. Mögliche Hebel sind zum Beispiel hydraulischer Abgleich, passende Heizkurven, größere Heizflächen in einzelnen Räumen oder Verbesserungen an Schwachstellen der Gebäudehülle.',
    ),
    faqItem(
      'Ist eine Fußbodenheizung immer besser für die Vorlauftemperatur?',
      'Sie ist oft günstig, weil sie große Heizflächen bietet. Aber auch mit Heizkörpern kann eine Wärmepumpe funktionieren. Entscheidend ist nicht das Systemetikett, sondern die reale Temperaturanforderung des Hauses.',
    ),
  ],
}

await upsertRatgeberArticle(article)
