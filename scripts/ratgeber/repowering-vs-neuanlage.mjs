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
  titel: 'Repowering vs. Neuanlage: Was ist bei einer alten Solaranlage sinnvoller?',
  slug: 'repowering-vs-neuanlage',
  kategorie: 'repowering',
  status: 'veroeffentlicht',
  teaser:
    'Alte Module austauschen oder gleich komplett neu bauen? Die Antwort hängt nicht von einem Bauchgefühl ab, sondern von Modulzustand, Dach, Zählerschrank, Verbrauch und den Verbrauchern der nächsten Jahre.',
  lesezeit: 12,

  seo: seo(
    'Repowering vs. Neuanlage: Was ist sinnvoller? | PEAK.Energy',
    'Repowering oder Neuanlage? Ehrliche Einordnung zu Modulzustand, Dach, Kosten, Leistung und typischen Denkfehlern – praxisnah von PEAK.Energy.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Repowering und Neuanlage sind keine Gegensätze, sondern zwei Enden einer Skala. Dazwischen gibt es viele Abstufungen – vom Wechselrichtertausch bis zum kompletten Neuaufbau.'),
    ),
    summaryPoint(
      bold('Die richtige Wahl hängt nicht vom Preis allein ab'),
      t(', sondern vom Zusammenspiel aus Modulzustand, Dachsituation, Zählerschrank, Eigenverbrauch und zukünftigen Verbrauchern.'),
    ),
    summaryPoint(
      t('Ein Repowering ist nicht automatisch die sparsamere Lösung. Und eine Neuanlage ist nicht automatisch überdimensioniert. Entscheidend ist, welche Variante technisch und wirtschaftlich besser zum konkreten Haus passt.'),
    ),
    summaryPoint(
      t('Wer die Entscheidung sauber treffen will, braucht keine Meinung, sondern eine ehrliche Bestandsaufnahme.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Repowering oder Neuanlage: Warum die Frage nicht so einfach ist, wie sie klingt')),
      p(
        t('Die Frage „Repowering oder Neuanlage?" klingt nach einer klaren Entweder-oder-Entscheidung. In der Praxis ist sie das aber selten.'),
      ),
      p(
        t('Denn zwischen einem reinen Wechselrichtertausch und einem vollständigen Neuaufbau mit Rückbau liegt ein breites Spektrum an Möglichkeiten. Und welche davon sinnvoll ist, lässt sich nicht pauschal beantworten.'),
      ),
      p(
        bold('Entscheidend ist nicht, was im Allgemeinen günstiger oder besser klingt'),
        t(', sondern was im konkreten Fall technisch passt, wirtschaftlich belastbar ist und den Bedarf der nächsten 15 bis 20 Jahre sauber abdeckt.'),
      ),
    ),

    hinweisBlock(
      'Es geht nicht um ein Prinzip, sondern um das konkrete Haus',
      p(
        t('Wer die Entscheidung zwischen Repowering und Neuanlage an einer allgemeinen Regel festmacht, vergleicht an der falschen Stelle. Jedes Haus bringt andere Voraussetzungen mit.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann spricht mehr für ein Repowering?')),
      p(
        t('Ein gezieltes Repowering kann die bessere Lösung sein, wenn die bestehende Anlage noch eine brauchbare Grundlage bietet und der Aufwand für einen Neuaufbau in keinem sinnvollen Verhältnis zum Mehrertrag stehen würde.'),
      ),
      p(
        t('Typische Situationen, in denen Repowering Sinn ergibt:'),
      ),
      ul(
        p(t('die Module liefern noch solide Erträge und zeigen keine auffällige Degradation')),
        p(t('der Wechselrichter muss getauscht werden, aber die Module können bleiben')),
        p(t('ein Speicher soll ergänzt werden, ohne die Modulbelegung zu verändern')),
        p(t('das Dach ist in gutem Zustand und braucht in den nächsten Jahren keine Sanierung')),
        p(t('der Eigenverbrauch lässt sich mit überschaubaren Maßnahmen deutlich verbessern')),
        p(t('das Budget ist begrenzt und ein vollständiger Neuaufbau wäre wirtschaftlich nicht verhältnismäßig')),
      ),
      p(
        t('In diesen Fällen kann ein gezielter Eingriff die Anlage für weitere Jahre wirtschaftlich tragfähig machen – ohne den Aufwand eines Komplettrückbaus.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann spricht mehr für eine Neuanlage?')),
      p(
        t('Ein vollständiger Neuaufbau ist dann sinnvoller, wenn die bestehende Anlage technisch am Ende ist, das Dach ohnehin angefasst werden muss oder sich die Anforderungen an die Anlage grundlegend verändert haben.'),
      ),
      p(
        t('Typische Situationen, in denen eine Neuanlage Sinn ergibt:'),
      ),
      ul(
        p(t('die Module sind stark degradiert und liefern nur noch einen Bruchteil der ursprünglichen Leistung')),
        p(t('das Dach muss in den nächsten Jahren saniert werden – dann würde die alte Anlage ohnehin abgebaut')),
        p(t('neue Verbraucher wie Wärmepumpe, Wallbox oder E-Auto sollen versorgt werden und die alte Anlage reicht dafür nicht aus')),
        p(t('die Dachfläche wurde damals nicht voll genutzt und bietet deutlich mehr Potenzial')),
        p(t('die alte Unterkonstruktion ist nicht mehr tragfähig oder passt nicht zu aktuellen Modulformaten')),
        p(t('Zählerschrank und Elektrik müssen ohnehin grundlegend angepasst werden')),
      ),
      p(
        bold('Wenn mehrere dieser Punkte zusammentreffen, ist ein Neuaufbau oft nicht nur technisch besser, sondern auch wirtschaftlich ehrlicher'),
        t(' – weil ein teures Repowering auf wackeliger Basis am Ende mehr kostet als ein sauberer Neustart.'),
      ),
    ),

    tabelleBlock('Repowering vs. Neuanlage: Entscheidungsfaktoren', [
      {
        spalte1: 'Modulzustand',
        spalte2: 'zentrales Kriterium',
        spalte3:
          'brauchbare Module sprechen für Repowering, stark degradierte für Neuaufbau',
      },
      {
        spalte1: 'Dachzustand',
        spalte2: 'oft unterschätzt',
        spalte3:
          'steht eine Dachsanierung an, ist ein Neuaufbau fast immer die sinnvollere Variante',
      },
      {
        spalte1: 'Zukünftige Verbraucher',
        spalte2: 'strategisch entscheidend',
        spalte3:
          'wer Wärmepumpe, Wallbox oder Speicher plant, braucht oft mehr Leistung, als die alte Anlage liefern kann',
      },
      {
        spalte1: 'Zählerschrank',
        spalte2: 'technische Voraussetzung',
        spalte3:
          'wenn der Zählerschrank ohnehin umgebaut werden muss, relativiert das den Mehraufwand eines Neuaufbaus',
      },
      {
        spalte1: 'Budget',
        spalte2: 'realistisch einordnen',
        spalte3:
          'ein Repowering ist nicht automatisch günstiger – vor allem dann nicht, wenn mehrere Komponenten getauscht werden müssen',
      },
    ]),

    tippBlock(
      'Nicht nur den heutigen Stand betrachten',
      p(
        t('Eine Solaranlage wird für die nächsten 15 bis 20 Jahre gebaut. Wer nur den aktuellen Bedarf zugrunde legt, plant unter Umständen zu knapp. Wärmepumpe, E-Auto oder verändertes Nutzungsverhalten sollten mitgedacht werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Was oft vergessen wird: Die Kosten eines Repowerings summieren sich')),
      p(
        t('Ein häufiger Denkfehler: Repowering wird automatisch als die günstigere Option angesehen, weil „ja nicht alles neu gemacht wird". Das stimmt auf den ersten Blick – aber nicht immer auf den zweiten.'),
      ),
      p(
        t('Wenn beim Repowering der Wechselrichter getauscht, ein Speicher ergänzt, die Zählerstruktur angepasst und die Elektrik nachgerüstet werden muss, kommen schnell Kosten zusammen, die '),
        bold('nicht mehr weit von einer Neuanlage entfernt liegen – bei deutlich weniger Leistung und kürzerer Restlaufzeit der alten Module'),
        t('.'),
      ),
      p(
        t('Genau deshalb lohnt es sich, nicht nur die Einzelmaßnahme, sondern den Gesamtaufwand ehrlich nebeneinanderzustellen. Manchmal ist der vermeintlich teurere Weg am Ende der wirtschaftlich bessere.'),
      ),
    ),

    hinweisBlock(
      'Teilmaßnahmen ehrlich summieren',
      p(
        t('Wer beim Repowering drei oder vier Einzelmaßnahmen kombiniert, sollte die Summe mit einem Neuaufbau vergleichen. Nicht jede schrittweise Lösung ist am Ende günstiger als ein sauberer Neustart.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Rolle spielt die Modulleistung beim Vergleich?')),
      p(
        t('Ein zentraler Unterschied zwischen Repowering und Neuanlage ist die verfügbare Leistung pro Quadratmeter Dachfläche.'),
      ),
      p(
        t('Module aus den frühen 2000er-Jahren hatten typischerweise eine Leistung von 150 bis 200 Wp pro Modul. Heutige Module liegen bei 400 bis 450 Wp – bei oft ähnlichen oder sogar kompakteren Abmessungen.'),
      ),
      p(
        bold('Auf derselben Dachfläche lässt sich mit neuen Modulen also häufig die doppelte bis dreifache Leistung installieren'),
        t('. Das ist besonders relevant, wenn neue Verbraucher wie Wärmepumpe oder Wallbox geplant sind und die alte Anlage den zusätzlichen Bedarf nicht decken kann.'),
      ),
      p(
        t('Beim Repowering bleibt dieser Leistungssprung aus – die alten Module behalten ihre reduzierte Leistung, auch wenn der Rest der Technik modernisiert wird.'),
      ),
    ),

    tabelleBlock('Modulleistung im Zeitvergleich', [
      {
        spalte1: 'Module 2005–2010',
        spalte2: 'ca. 150–200 Wp',
        spalte3:
          'nach 15 bis 20 Jahren zusätzlich degradiert, reale Leistung oft noch niedriger',
      },
      {
        spalte1: 'Module 2010–2015',
        spalte2: 'ca. 200–280 Wp',
        spalte3:
          'technisch besser, aber ebenfalls mit Alterungsverlusten und kleinerer Ausgangsbasis als heutige Module',
      },
      {
        spalte1: 'Module 2024–2026',
        spalte2: 'ca. 400–450 Wp',
        spalte3:
          'deutlich mehr Leistung pro Fläche, bessere Schwachlichtverhalten, längere Garantiezeiträume',
      },
    ]),

    textBlock(
      h('h2', t('Typische Denkfehler bei der Entscheidung')),
      p(
        t('Ob Repowering oder Neuanlage – bei dieser Entscheidung tauchen in der Praxis immer wieder dieselben Fehler auf.'),
      ),
      ul(
        p(t('Repowering pauschal als „die günstigere Lösung" betrachten, ohne die Gesamtkosten ehrlich zu vergleichen')),
        p(t('den Modulzustand überschätzen, weil die Anlage „ja noch läuft"')),
        p(t('das Dach bei der Entscheidung ausblenden und später doppelt bauen')),
        p(t('eine Neuanlage ablehnen, weil die alte „noch nicht kaputt" ist')),
        p(t('eine Neuanlage wollen, obwohl ein gezieltes Repowering wirtschaftlich sinnvoller wäre')),
        p(t('zukünftige Verbraucher nicht mitdenken und die Anlage zu knapp planen')),
        p(t('Angebote nur über den Endpreis vergleichen, ohne den Leistungsumfang zu prüfen')),
      ),
      p(
        t('Wer diese Punkte sauber trennt, trifft eine deutlich bessere Entscheidung als mit einem Bauchgefühl oder einer pauschalen Empfehlung.'),
      ),
    ),

    tippBlock(
      'Beide Varianten durchrechnen lassen',
      p(
        t('Die beste Grundlage für die Entscheidung ist ein sauberer Vergleich: Was kostet das Repowering im Gesamtpaket, was bringt es an Leistung und Laufzeit – und wie steht das im Verhältnis zu einem Neuaufbau? Erst mit dieser Gegenüberstellung wird die Entscheidung belastbar.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die Frage „Repowering oder Neuanlage?" lässt sich nicht mit einer allgemeinen Regel beantworten. Beide Wege können sinnvoll sein – aber nur dann, wenn sie zur konkreten Situation passen.'),
      ),
      p(
        t('Ein Repowering ist die bessere Wahl, wenn die bestehende Anlage noch eine solide Grundlage bietet und gezielte Maßnahmen den Nutzen spürbar verbessern. Eine Neuanlage ist die bessere Wahl, wenn die alte Technik am Limit ist, das Dach angepasst werden muss oder die Anforderungen der nächsten Jahre deutlich über dem liegen, was die Bestandsanlage leisten kann.'),
      ),
      p(
        bold('Die ehrlichere Frage lautet nicht: Was ist grundsätzlich besser? Sondern: Was passt zu diesem Haus, diesem Dach und diesem Bedarf?'),
        t(' Genau dort beginnt eine belastbare Entscheidung.'),
      ),
    ),

    ctaBlock({
      titel: 'Repowering oder Neuanlage? Lass es uns gemeinsam einordnen',
      text:
        'Wir bewerten deine bestehende Anlage, das Dach und deinen zukünftigen Bedarf – und zeigen dir ehrlich, welche Option für dein Haus technisch und wirtschaftlich am meisten Sinn ergibt.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Ist Repowering immer günstiger als eine Neuanlage?',
      'Nein. Wenn mehrere Komponenten getauscht werden müssen, kann die Summe der Einzelmaßnahmen nah an die Kosten eines Neuaufbaus herankommen – bei deutlich weniger Leistung und kürzerer Restlaufzeit.',
    ),
    faqItem(
      'Wann lohnt sich ein Repowering mehr als eine Neuanlage?',
      'Vor allem dann, wenn die Module noch solide Erträge bringen, das Dach in gutem Zustand ist und der Mehrertrag einer Neuanlage den zusätzlichen Aufwand nicht rechtfertigt.',
    ),
    faqItem(
      'Wann ist eine Neuanlage die bessere Wahl?',
      'Wenn die Module stark degradiert sind, das Dach saniert werden muss, deutlich mehr Leistung benötigt wird oder neue Verbraucher wie Wärmepumpe oder Wallbox geplant sind.',
    ),
    faqItem(
      'Bringen neue Module wirklich so viel mehr Leistung?',
      'Ja. Aktuelle Module liefern pro Fläche oft die doppelte bis dreifache Leistung im Vergleich zu Modulen aus den frühen 2000er-Jahren. Dazu kommen bessere Garantien und besseres Schwachlichtverhalten.',
    ),
    faqItem(
      'Kann ich beim Repowering die alten Module behalten und nur den Wechselrichter tauschen?',
      'Grundsätzlich ja. Allerdings muss das neue Gerät zur bestehenden Modulkonfiguration passen. Stringspannung, Leistung und Anschlusswerte müssen geprüft werden.',
    ),
    faqItem(
      'Sollte ich beim Vergleich auch zukünftige Verbraucher einbeziehen?',
      'Unbedingt. Wer in den nächsten Jahren Wärmepumpe, Wallbox oder E-Auto plant, braucht unter Umständen deutlich mehr Leistung als die alte Anlage liefern kann. Das beeinflusst die Entscheidung erheblich.',
    ),
  ],
}

await upsertRatgeberArticle(article)
