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
  titel: 'Pufferspeicher bei Wärmepumpen: notwendig oder Effizienzkiller?',
  slug: 'pufferspeicher-waermepumpe',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    '„Eine Wärmepumpe braucht immer einen Pufferspeicher“ ist genauso falsch wie „Pufferspeicher sind immer ineffizient“. Entscheidend ist, welche konkrete Aufgabe der Speicher im Heizsystem erfüllen soll.',
  lesezeit: 11,

  seo: seo(
    'Pufferspeicher Wärmepumpe: sinnvoll oder unnötig? | PEAK.Energy',
    'Braucht jede Wärmepumpe einen Pufferspeicher? Wir erklären Mindestvolumenstrom, Abtauung, Takten und wann ein Puffer sinnvoll oder unnötig ist.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein Pufferspeicher ist '),
      bold('kein Pflichtbauteil jeder Wärmepumpe'),
      t('. Ob er sinnvoll ist, hängt von Hydraulik, Heizflächen und Anlagenkonzept ab.'),
    ),
    summaryPoint(
      t('Ein Puffer kann Mindestvolumenstrom sichern, Abtauenergie bereitstellen oder unterschiedliche Heizkreise und Wärmeerzeuger hydraulisch entkoppeln.'),
    ),
    summaryPoint(
      t('Jeder zusätzliche Speicher kann aber auch '),
      bold('Wärmeverluste, zusätzliche Pumpenarbeit und höhere Systemtemperaturen'),
      t(' verursachen.'),
    ),
    summaryPoint(
      t('Die richtige Frage lautet nicht „Puffer ja oder nein?“, sondern: '),
      bold('Welche konkrete technische Aufgabe soll er erfüllen?'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum über Pufferspeicher so dogmatisch diskutiert wird')),
      p(
        t('Bei Wärmepumpen gibt es erstaunlich viele Glaubensfragen. Der Pufferspeicher gehört dazu. Die eine Seite sagt: Ohne Puffer funktioniert eine Wärmepumpe nicht sauber. Die andere sagt: Jeder Puffer zerstört die Effizienz.'),
      ),
      p(
        bold('Beides ist zu pauschal.'),
        t(' Ein Pufferspeicher ist zunächst ein Behälter mit Heizungswasser. Ob er sinnvoll ist, hängt davon ab, wie er eingebunden wird, wie groß er ist und welche hydraulische Aufgabe er erfüllen soll.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Aufgaben ein Pufferspeicher übernehmen kann')),
      p(
        t('Ein Pufferspeicher kann mehrere technische Aufgaben lösen. Genau deshalb sollte die Funktion vor der Dimensionierung feststehen.'),
      ),
      ul(
        p(
          bold('Mindestvolumenstrom: '),
          t('Viele Wärmepumpen benötigen einen bestimmten Durchfluss durch den Wärmetauscher. Ein geeignetes Anlagenkonzept kann diesen auch dann sicherstellen, wenn einzelne Heizkreise schließen.'),
        ),
        p(
          bold('Abtauung: '),
          t('Luft-Wasser-Wärmepumpen benötigen während eines Abtauvorgangs kurzfristig Wärme. Je nach System kann zusätzliche Wassermasse dabei hilfreich sein.'),
        ),
        p(
          bold('Hydraulische Entkopplung: '),
          t('Unterschiedliche Heizkreise, Pumpengruppen oder Volumenströme lassen sich bei Bedarf voneinander entkoppeln.'),
        ),
        p(
          bold('Mehrere Wärmeerzeuger: '),
          t('Bei Hybrid- oder komplexen Bestandsanlagen kann ein Speicher als hydraulische Schnittstelle dienen.'),
        ),
      ),
    ),

    textBlock(
      h('h2', t('Warum ein Pufferspeicher Effizienz kosten kann')),
      p(
        t('Ein Speicher ist kein kostenloses Bauteil. Er gibt Wärme an seine Umgebung ab. Zusätzliche Pumpen benötigen Strom. Und eine hydraulische Entkopplung kann dazu führen, dass Wärmepumpe und Heizkreis nicht mit exakt denselben Temperaturen und Volumenströmen arbeiten.'),
      ),
      p(
        t('Besonders ungünstig ist eine Lösung, bei der der Puffer die Wärmepumpe zwingt, '),
        bold('höhere Temperaturen als eigentlich nötig'),
        t(' zu erzeugen. Deshalb sollte ein Pufferspeicher nicht eingebaut werden, nur weil er in einem Standardschema eingezeichnet ist.'),
      ),
    ),

    hinweisBlock(
      'Pufferspeicher ist nicht gleich Warmwasserspeicher',
      p(
        t('Ein Heizungs-Pufferspeicher enthält Heizungswasser und dient dem Heizsystem. Ein Trinkwarmwasserspeicher hält beziehungsweise erzeugt Warmwasser für Dusche, Bad und Küche. Die Aufgaben und Anforderungen sind unterschiedlich.'),
      ),
    ),

    textBlock(
      h('h2', t('Fußbodenheizung: Das Gebäude speichert bereits Wärme')),
      p(
        t('Eine Fußbodenheizung bringt durch Estrich und Gebäudemasse bereits erhebliche thermische Masse mit. Bei einem einfachen, sauber geplanten System ist deshalb nicht automatisch ein großer zusätzlicher Heizpuffer erforderlich.'),
      ),
      p(
        t('Entscheidend bleiben jedoch der notwendige Volumenstrom, die Herstelleranforderungen und die konkrete Hydraulik. Eine pauschale Aussage nur anhand der Heizflächenart wäre genauso falsch wie eine pauschale Pufferpflicht.'),
      ),
    ),

    textBlock(
      h('h2', t('Heizkörperanlagen: andere Randbedingungen')),
      p(
        t('Bei Heizkörperanlagen ist das aktive Wasservolumen häufig kleiner. Thermostatventile können den Durchfluss stärker verändern. In solchen Anlagen kann ein kleiner Puffer oder eine andere hydraulische Lösung sinnvoll sein.'),
      ),
      p(
        t('Auch hier gilt aber: '),
        bold('Erst das Problem definieren, dann das Bauteil auswählen.'),
        t(' Wenn eigentlich Heizflächen zu klein sind oder die Wärmepumpe deutlich überdimensioniert ist, sollte ein großer Puffer diese Ursache nicht verdecken.'),
      ),
    ),

    tippBlock(
      'Frag nicht zuerst: „Wie groß muss mein Pufferspeicher sein?“',
      p(
        t('Die bessere erste Frage lautet: '),
        bold('Warum brauchen wir überhaupt einen?'),
        t(' Ein guter Planer kann erklären, ob der Speicher für Mindestvolumenstrom, hydraulische Entkopplung, Abtauung, mehrere Heizkreise oder eine andere konkrete Funktion vorgesehen ist.'),
      ),
    ),

    textBlock(
      h('h2', t('Kann ein Pufferspeicher das Takten verhindern?')),
      p(
        t('Zusätzliche Wassermasse kann Laufzeiten verlängern, weil mehr Energie aufgenommen werden kann. Ein Puffer kann deshalb bei bestimmten Anlagenkonzepten helfen.'),
      ),
      p(
        t('Er ist aber keine elegante Reparatur für eine massiv überdimensionierte Wärmepumpe. Wenn die Anlage viel zu groß ist, die Heizkurve zu hoch steht oder die Hydraulik nicht passt, sollte zuerst die Ursache korrigiert werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Ist „je größer, desto besser“ richtig?')),
      p(
        t('Nein. Ein größerer Speicher nimmt zwar mehr Energie auf, braucht aber mehr Platz, kostet mehr und verursacht höhere Bereitschaftsverluste. Die Größe sollte aus der technischen Aufgabe abgeleitet werden und nicht aus einem pauschalen Sicherheitsdenken.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Ein Puffer ist ein Werkzeug, kein Qualitätsmerkmal')),
      p(
        t('Ein Pufferspeicher kann bei einer Wärmepumpe sinnvoll sein. Er kann aber genauso gut unnötig sein. Die richtige Frage ist nicht, ob Pufferspeicher grundsätzlich gut oder schlecht sind. Entscheidend ist, ob das konkrete Heizsystem eine Aufgabe hat, die mit einem Puffer sinnvoll gelöst wird.'),
      ),
      p(
        t('Je einfacher eine Wärmepumpenanlage aufgebaut ist und je besser '),
        bold('Volumenstrom, Heizflächen, Regelung und Wärmepumpe'),
        t(' zusammenpassen, desto weniger zusätzliche Technik wird häufig benötigt.'),
      ),
    ),

    ctaBlock({
      titel: 'Wärmepumpen-Hydraulik sauber planen',
      text:
        'Wir betrachten Volumenstrom, Heizflächen, Heizkreise, Speicher und Regelung als Gesamtsystem – und bauen Bauteile nicht ein, nur weil sie in einem Standardschema stehen.',
      buttonText: 'Wärmepumpe anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Braucht jede Wärmepumpe einen Pufferspeicher?',
      'Nein. Ob ein Pufferspeicher nötig oder sinnvoll ist, hängt von Hydraulik, Heizflächen, Mindestvolumenstrom, Herstelleranforderungen und Anlagenkonzept ab.',
    ),
    faqItem(
      'Verhindert ein Pufferspeicher das Takten?',
      'Ein Puffer kann Laufzeiten verlängern. Er sollte aber nicht dazu dienen, eine falsch dimensionierte oder schlecht eingestellte Wärmepumpe zu kaschieren.',
    ),
    faqItem(
      'Ist bei Fußbodenheizung ein Pufferspeicher nötig?',
      'Nicht automatisch. Eine Fußbodenheizung bringt bereits viel thermische Masse mit. Entscheidend sind Mindestvolumenstrom, Herstelleranforderungen und die konkrete Hydraulik.',
    ),
    faqItem(
      'Verbraucht ein Pufferspeicher Energie?',
      'Er verursacht Wärmeverluste und kann zusätzliche Pumpenarbeit benötigen. Wie relevant das ist, hängt von Speichergröße, Dämmung, Temperatur und Einbindung ab.',
    ),
    faqItem(
      'Ist ein Warmwasserspeicher dasselbe wie ein Pufferspeicher?',
      'Nein. Ein Heizpuffer speichert Heizungswasser. Ein Trinkwarmwasserspeicher dient der Warmwasserbereitung.',
    ),
  ],
}

await upsertRatgeberArticle(article)
