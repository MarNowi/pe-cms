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
  titel: 'Alte PV-Anlage nach 20 Jahren: Weiterbetreiben, repowern oder abbauen?',
  slug: 'alte-pv-anlage-nach-20-jahren',
  kategorie: 'repowering',
  status: 'veroeffentlicht',
  teaser:
    'Nach 20 Jahren endet die EEG-Vergütung – aber nicht automatisch der Nutzen der Anlage. Ob Weiterbetrieb, Repowering oder Abbau sinnvoll ist, hängt von Zustand, Dach, Verbrauch und Ziel ab. Nicht von Pauschalregeln.',
  lesezeit: 13,

  seo: seo(
    'Alte PV-Anlage nach 20 Jahren: Was jetzt? | PEAK.Energy',
    'Alte PV-Anlage nach 20 Jahren: ehrliche Einordnung zu Weiterbetrieb, Repowering und Abbau – was sich wann lohnt, welche Fehler man vermeiden sollte und worauf es wirklich ankommt. Praxisnah von PEAK.Energy.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Nach 20 Jahren endet die feste EEG-Einspeisevergütung. Die Anlage darf weiter betrieben werden – aber die wirtschaftliche Grundlage verändert sich grundlegend.'),
    ),
    summaryPoint(
      t('Es gibt drei grundsätzliche Optionen: Weiterbetrieb mit Eigenverbrauch oder Anschlussvergütung, gezieltes Repowering einzelner Komponenten oder vollständiger Neuaufbau. '),
      bold('Welche Option passt, hängt vom konkreten Haus ab – nicht von einer Pauschalempfehlung'),
      t('.'),
    ),
    summaryPoint(
      t('Viele Anlagen aus den frühen 2000er-Jahren liefern noch brauchbare Erträge. Aber brauchbar heißt nicht automatisch optimal – vor allem, wenn sich Verbrauch, Technik oder Ziel in der Zwischenzeit verändert haben.'),
    ),
    summaryPoint(
      t('Wer die Situation ehrlich bewerten will, sollte nicht nur auf die Module schauen, sondern auf das Gesamtbild: Dach, Wechselrichter, Zählerschrank, Eigenverbrauch und zukünftige Verbraucher.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Was passiert nach 20 Jahren EEG-Vergütung?')),
      p(
        t('Wer seine Solaranlage vor 2005 oder in den Jahren danach in Betrieb genommen hat, bekommt nach 20 Jahren keine feste Einspeisevergütung mehr. Das bedeutet aber nicht, dass die Anlage wertlos wird.'),
      ),
      p(
        t('Die Anlage darf weiterhin Strom erzeugen und einspeisen. Für den eingespeisten Strom gibt es eine sogenannte Anschlussvergütung – orientiert am Marktwert Solar. '),
        bold('Diese liegt deutlich unter der alten EEG-Vergütung'),
        t(' und schwankt je nach Börsenstrompreis.'),
      ),
      p(
        t('Genau an diesem Punkt stellt sich für viele Hausbesitzer die Frage: Lohnt es sich, die Anlage so weiterlaufen zu lassen? Oder ist jetzt der richtige Zeitpunkt für eine Veränderung?'),
      ),
    ),

    hinweisBlock(
      'Die Vergütung endet, nicht die Anlage',
      p(
        t('Nach 20 Jahren fällt nicht die Anlage aus, sondern die wirtschaftliche Grundlage ändert sich. Genau deshalb lohnt sich eine saubere Neubewertung – nicht aus Panik, sondern als Grundlage für eine gute Entscheidung.'),
      ),
    ),

    textBlock(
      h('h2', t('Option 1: Weiterbetrieb der alten Anlage')),
      p(
        t('Der einfachste Weg ist, die bestehende Anlage weiterlaufen zu lassen. Das kann in vielen Fällen sinnvoll sein – vor allem, wenn die Module noch stabil laufen, der Wechselrichter funktioniert und das Dach in Ordnung ist.'),
      ),
      p(
        t('Beim Weiterbetrieb verschiebt sich die wirtschaftliche Logik: Statt hoher Einspeisevergütung steht jetzt '),
        bold('der Eigenverbrauch im Mittelpunkt'),
        t('. Jede Kilowattstunde, die im Haus direkt genutzt wird, spart den Bezug vom Netz – und ist damit deutlich mehr wert als die Anschlussvergütung für eingespeisten Strom.'),
      ),
      p(
        t('Für Anlagen, die bisher auf Volleinspeisung liefen, kann das bedeuten: Die Anlage erzeugt zwar weiterhin Strom, aber der wirtschaftliche Nutzen ist im Alltag spürbar geringer als vorher – es sei denn, der Eigenverbrauch wird gezielt erhöht.'),
      ),
    ),

    tabelleBlock('Weiterbetrieb: Wann sinnvoll, wann nicht?', [
      {
        spalte1: 'Module in gutem Zustand',
        spalte2: 'spricht für Weiterbetrieb',
        spalte3:
          'wenn die Ertragsminderung überschaubar ist und kein größerer technischer Defekt vorliegt, kann ein Weiterbetrieb wirtschaftlich die beste Option sein',
      },
      {
        spalte1: 'Wechselrichter funktioniert',
        spalte2: 'wichtig für die Entscheidung',
        spalte3:
          'ein funktionierender Wechselrichter vermeidet kurzfristigen Investitionsbedarf – ist aber nach 20 Jahren ein Bauteil mit begrenzter Restlaufzeit',
      },
      {
        spalte1: 'kaum Eigenverbrauch möglich',
        spalte2: 'wirtschaftlich schwächer',
        spalte3:
          'wer den erzeugten Strom überwiegend einspeist, bekommt ohne EEG-Vergütung nur noch einen Bruchteil des früheren Ertrags',
      },
      {
        spalte1: 'neue Verbraucher geplant',
        spalte2: 'Weiterbetrieb allein reicht oft nicht',
        spalte3:
          'wer Wärmepumpe, Wallbox oder Speicher ergänzen will, sollte prüfen, ob die alte Anlage dafür technisch und leistungsmäßig noch die richtige Basis ist',
      },
    ]),

    tippBlock(
      'Eigenverbrauch als neuer Hebel',
      p(
        t('Ohne EEG-Vergütung wird der Eigenverbrauch zum wichtigsten wirtschaftlichen Faktor. Wer bisher voll eingespeist hat, sollte prüfen, ob sich der Eigenverbrauchsanteil mit einfachen Mitteln wie einem Speicher oder angepasstem Verhalten steigern lässt.'),
      ),
    ),

    textBlock(
      h('h2', t('Option 2: Gezieltes Repowering einzelner Komponenten')),
      p(
        t('Wenn die Module noch brauchbar sind, aber der Wechselrichter defekt oder veraltet ist, kann ein gezielter Komponententausch sinnvoll sein.'),
      ),
      p(
        t('Häufige Maßnahmen in diesem Bereich sind der Tausch des Wechselrichters gegen ein aktuelles Modell, die Ergänzung eines Stromspeichers zur Eigenverbrauchserhöhung oder die Anpassung der Zählerstruktur.'),
      ),
      p(
        t('Der Vorteil: '),
        bold('Der Aufwand bleibt überschaubar, die bestehenden Module werden weitergenutzt und die Anlage bekommt eine neue wirtschaftliche Grundlage'),
        t('. Der Nachteil: Die alten Module liefern nicht mehr dieselbe Leistung wie neue – und die Unterkonstruktion, die Verkabelung und das Dach bleiben unverändert.'),
      ),
      p(
        t('Ob sich das rechnet, hängt davon ab, wie viel Restleistung die Module realistisch noch bringen, wie lange sie voraussichtlich noch laufen und ob der Investitionsaufwand in einem sinnvollen Verhältnis zum Ertrag steht.'),
      ),
    ),

    hinweisBlock(
      'Nicht jeder Wechselrichter passt zur alten Anlage',
      p(
        t('Beim Tausch eines alten Wechselrichters muss geprüft werden, ob das neue Gerät zur bestehenden Modulkonfiguration passt. Stringspannung, Leistung und Anschlusswerte sind nicht beliebig kombinierbar.'),
      ),
    ),

    textBlock(
      h('h2', t('Option 3: Vollständiger Neuaufbau')),
      p(
        t('Wenn die Module stark degradiert sind, das Dach ohnehin saniert werden muss oder deutlich mehr Leistung gewünscht ist, kann ein vollständiger Neuaufbau die ehrlichere Lösung sein.'),
      ),
      p(
        t('Moderne Module liefern auf derselben Fläche oft die doppelte bis dreifache Leistung im Vergleich zu Modulen aus den frühen 2000er-Jahren. '),
        bold('Wo vorher vielleicht 3 bis 5 kWp installiert waren, passen heute auf dieselbe Fläche 8 bis 12 kWp oder mehr'),
        t('.'),
      ),
      p(
        t('Ein Neuaufbau bringt gleichzeitig die Möglichkeit, das Gesamtsystem von Grund auf sauber zu planen: Speicher, Wechselrichter, Zählerstruktur, Eigenverbrauchsoptimierung und Vorbereitung für zukünftige Verbraucher wie Wärmepumpe oder Wallbox.'),
      ),
      p(
        t('Nachteil: Der Aufwand ist höher, weil neben der neuen Anlage auch der Rückbau der alten Technik, die Prüfung des Dachs und gegebenenfalls die Anpassung des Zählerschranks dazukommen.'),
      ),
    ),

    tabelleBlock('Drei Optionen im Vergleich', [
      {
        spalte1: 'Weiterbetrieb',
        spalte2: 'geringster Aufwand',
        spalte3:
          'wirtschaftlich sinnvoll, wenn Module und Wechselrichter noch stabil laufen und Eigenverbrauch möglich ist',
      },
      {
        spalte1: 'Teil-Repowering',
        spalte2: 'mittlerer Aufwand',
        spalte3:
          'guter Kompromiss, wenn die Module noch brauchbar sind und gezielte Maßnahmen den Nutzen spürbar verbessern',
      },
      {
        spalte1: 'Neuaufbau',
        spalte2: 'höchster Aufwand',
        spalte3:
          'bringt die größte Leistung und Zukunftssicherheit, lohnt sich vor allem bei schlechtem Modulzustand, Dachsanierung oder neuen Verbrauchern',
      },
    ]),

    textBlock(
      h('h2', t('Welche Fragen man sich vor der Entscheidung ehrlich stellen sollte')),
      p(
        t('Bevor man sich für eine der drei Optionen entscheidet, helfen einige Leitfragen bei der Einordnung.'),
      ),
      ul(
        p(t('Wie viel Ertrag liefern die Module noch realistisch – nicht laut Datenblatt, sondern gemessen am tatsächlichen Zustand?')),
        p(t('Wie alt ist der Wechselrichter, und wie wahrscheinlich ist ein Ausfall in den nächsten Jahren?')),
        p(t('In welchem Zustand ist das Dach – und steht in absehbarer Zeit eine Sanierung an?')),
        p(t('Wie hoch ist der aktuelle Eigenverbrauch, und lässt er sich mit einfachen Mitteln steigern?')),
        p(t('Kommen in den nächsten Jahren neue Verbraucher wie Wärmepumpe, Wallbox oder E-Auto dazu?')),
        p(t('Ist der Zählerschrank für eine Umstellung oder Erweiterung vorbereitet?')),
      ),
      p(
        t('Die ehrliche Beantwortung dieser Fragen liefert eine deutlich bessere Entscheidungsgrundlage als jede pauschale Empfehlung.'),
      ),
    ),

    tippBlock(
      'Nicht nur auf die Module schauen',
      p(
        t('Die Module sind nur ein Teil des Bildes. Wechselrichter, Dach, Zählerschrank und die zukünftige Verbrauchssituation entscheiden mit, welche Option wirklich passt.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele nach 20 Jahren falsch einschätzen')),
      p(
        t('In der Praxis begegnen uns nach dem Ende der EEG-Vergütung immer wieder dieselben Denkfehler.'),
      ),
      ul(
        p(t('die Anlage wird aus Gewohnheit einfach weiterbetrieben, ohne die neue Wirtschaftlichkeit ehrlich zu prüfen')),
        p(t('der Modulzustand wird überschätzt, weil die Anlage „ja noch läuft"')),
        p(t('ein Speicher wird ergänzt, ohne zu prüfen, ob der alte Wechselrichter dafür überhaupt geeignet ist')),
        p(t('das Dach wird ignoriert, obwohl eine Sanierung in wenigen Jahren ansteht')),
        p(t('ein Neuaufbau wird pauschal abgelehnt, weil die alte Anlage „noch nicht kaputt" ist')),
        p(t('ein Neuaufbau wird pauschal gewünscht, obwohl ein Weiterbetrieb wirtschaftlich sinnvoller wäre')),
      ),
      p(
        bold('Beide Extreme – reflexhaftes Festhalten und vorschneller Austausch – führen selten zum besten Ergebnis'),
        t('. Die bessere Entscheidung liegt fast immer in einer sauberen Einzelfallbewertung.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ist mit Förderung und Anmeldung?')),
      p(
        t('Je nachdem, welche Option gewählt wird, können sich auch formale Fragen stellen: Muss die Anlage im Marktstammdatenregister neu angemeldet werden? Gibt es eine Förderung für den Speicher? Ändert sich die steuerliche Behandlung?'),
      ),
      p(
        t('Diese Punkte sind nicht trivial und hängen vom konkreten Umfang ab. Ein reiner Weiterbetrieb erfordert in der Regel keine neue Anmeldung. Bei einem Repowering mit neuen Komponenten oder einem Neuaufbau sieht das anders aus.'),
      ),
      p(
        bold('Wichtig ist, diese Fragen vor Projektstart zu klären'),
        t(' – nicht als Nachgedanken, sondern als festen Bestandteil der Planung.'),
      ),
    ),

    hinweisBlock(
      'Formales nicht vergessen',
      p(
        t('Anmeldung, Vergütung, Steuer und Förderung hängen vom gewählten Weg ab. Wer hier nachträglich korrigieren muss, verliert Zeit und unter Umständen Geld.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Nach 20 Jahren ist eine alte PV-Anlage nicht automatisch ein Fall für den Abbau – aber auch nicht automatisch in der besten Aufstellung für die nächsten Jahre.'),
      ),
      p(
        t('Die richtige Entscheidung hängt davon ab, wie ehrlich man den Zustand von Modulen, Wechselrichter und Dach bewertet, wie sich der Eigenverbrauch entwickelt hat und welche Verbraucher in Zukunft dazukommen könnten.'),
      ),
      p(
        t('Wer sich die Zeit nimmt, die Ausgangslage sauber zu bewerten, bekommt am Ende eine Lösung, die technisch und wirtschaftlich belastbar ist. '),
        bold('Nicht aus Panik, nicht aus Gewohnheit – sondern aus einer fundierten Einordnung heraus'),
        t('.'),
      ),
    ),

    ctaBlock({
      titel: 'Alte PV-Anlage ehrlich bewerten lassen',
      text:
        'Wir schauen uns deine bestehende Anlage, das Dach und deine Verbrauchssituation gemeinsam an – und ordnen ehrlich ein, ob Weiterbetrieb, Repowering oder Neuaufbau für dich am meisten Sinn ergibt.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was passiert mit meiner PV-Anlage nach 20 Jahren?',
      'Die feste EEG-Einspeisevergütung endet. Die Anlage darf aber weiterhin Strom erzeugen. Für eingespeisten Strom gibt es eine deutlich niedrigere Anschlussvergütung am Marktwert.',
    ),
    faqItem(
      'Lohnt sich der Weiterbetrieb einer alten PV-Anlage?',
      'Das hängt vom Zustand der Module, vom Eigenverbrauchsanteil und von der restlichen Technik ab. Wenn die Anlage noch stabil läuft und der Strom überwiegend selbst genutzt wird, kann ein Weiterbetrieb wirtschaftlich sinnvoll sein.',
    ),
    faqItem(
      'Wann ist ein Neuaufbau sinnvoller als ein Weiterbetrieb?',
      'Vor allem dann, wenn die Module stark degradiert sind, das Dach saniert werden muss, deutlich mehr Leistung gewünscht ist oder neue Verbraucher wie Wärmepumpe oder Wallbox integriert werden sollen.',
    ),
    faqItem(
      'Kann ich einen Speicher an meine alte Anlage nachrüsten?',
      'Grundsätzlich ja – aber nicht mit jedem Wechselrichter. Es muss geprüft werden, ob die bestehende Technik eine Speicheranbindung zulässt oder ob ein Wechselrichtertausch nötig wird.',
    ),
    faqItem(
      'Was bekomme ich für eingespeisten Strom nach Ende der EEG-Vergütung?',
      'Die Anschlussvergütung orientiert sich am Marktwert Solar und liegt aktuell deutlich unter der alten EEG-Vergütung. Der genaue Betrag schwankt je nach Börsenstrompreis.',
    ),
    faqItem(
      'Muss ich meine Anlage nach 20 Jahren abbauen?',
      'Nein. Es gibt keine Pflicht, die Anlage nach Ende der EEG-Vergütung abzubauen. Die Entscheidung, ob Weiterbetrieb, Repowering oder Neuaufbau sinnvoller ist, sollte aber bewusst und sauber getroffen werden.',
    ),
  ],
}

await upsertRatgeberArticle(article)
