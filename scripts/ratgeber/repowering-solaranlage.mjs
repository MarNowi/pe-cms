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
  titel: 'Repowering einer Solaranlage: Wann lohnt es sich wirklich?',
  slug: 'repowering-solaranlage',
  kategorie: 'repowering',
  status: 'veroeffentlicht',
  teaser:
    'Die alte PV-Anlage läuft noch, aber die Einspeisevergütung endet oder die Technik ist veraltet. Repowering kann sinnvoll sein – muss es aber nicht. Entscheidend sind Zustand, Ziel und die ehrliche Bewertung des Bestands.',
  lesezeit: 11,

  seo: seo(
    'Repowering Solaranlage: Wann lohnt es sich? | PEAK.Energy',
    'Repowering einer Solaranlage ehrlich eingeordnet: Wann sich Austausch oder Erweiterung lohnen, was mit der alten Anlage passiert und welche Fehler man vermeiden sollte – praxisnah von PEAK.Energy.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Repowering bedeutet, eine bestehende Solaranlage technisch zu modernisieren – durch Austausch einzelner Komponenten, Erweiterung oder kompletten Neuaufbau auf derselben Dachfläche.'),
    ),
    summaryPoint(
      t('Ob Repowering sinnvoll ist, hängt nicht vom Alter allein ab. '),
      bold('Entscheidend sind Zustand der Anlage, technische Möglichkeiten auf dem Dach, Eigenverbrauchssituation und das wirtschaftliche Ziel'),
      t('.'),
    ),
    summaryPoint(
      t('Nicht jede alte Anlage braucht ein Repowering. Manchmal reicht ein neuer Wechselrichter, manchmal ist ein Weiterbetrieb die bessere Lösung – und manchmal ist ein vollständiger Neuaufbau die ehrlichere Antwort.'),
    ),
    summaryPoint(
      t('Wer Repowering sauber bewerten will, sollte nicht mit der Wunschtechnik starten, sondern mit der realen Situation auf dem Dach und im Zählerschrank.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Was bedeutet Repowering bei Solaranlagen?')),
      p(
        t('Repowering bedeutet im Kern: Eine bestehende Solaranlage wird technisch modernisiert. Das kann den Austausch einzelner Komponenten betreffen, eine Erweiterung um neue Module oder Speicher – oder den vollständigen Rückbau und Neuaufbau auf derselben Fläche.'),
      ),
      p(
        t('Der Begriff wird im Markt nicht immer einheitlich verwendet. Manche meinen damit nur den Modultausch, andere eine komplette Neuanlage. '),
        bold('Wichtig ist, den konkreten Umfang sauber zu klären, bevor man über Kosten oder Sinn spricht'),
        t('.'),
      ),
      p(
        t('In der Praxis betrifft Repowering vor allem Anlagen, die 15 bis 25 Jahre alt sind – häufig solche, deren EEG-Vergütung ausgelaufen ist oder bald ausläuft.'),
      ),
    ),

    hinweisBlock(
      'Repowering ist nicht gleich Reparatur',
      p(
        t('Ein defekter Wechselrichter oder ein einzelnes Modul mit Schaden ist eine Reparatur, kein Repowering. Der Begriff beschreibt eine bewusste technische Modernisierung – nicht die Beseitigung eines akuten Problems.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann wird Repowering zum Thema?')),
      p(
        t('Es gibt einige typische Situationen, in denen sich die Frage nach einem Repowering stellt.'),
      ),
      ul(
        p(t('die EEG-Vergütung ist nach 20 Jahren ausgelaufen oder läuft bald aus')),
        p(t('die Modulleistung hat über die Jahre deutlich nachgelassen')),
        p(t('der Wechselrichter ist defekt oder technisch veraltet')),
        p(t('neue Verbraucher wie Wärmepumpe, Wallbox oder Speicher sollen integriert werden')),
        p(t('die Dachfläche wurde damals nicht voll genutzt und bietet jetzt Potenzial')),
        p(t('die Anlage soll auf Eigenverbrauch statt Volleinspeisung umgestellt werden')),
      ),
      p(
        t('Nicht jeder dieser Punkte führt automatisch zu einem Repowering. Aber wenn mehrere zusammenkommen, lohnt sich eine saubere technische Bewertung.'),
      ),
    ),

    tabelleBlock('Typische Ausgangssituationen für Repowering', [
      {
        spalte1: 'EEG-Vergütung ausgelaufen',
        spalte2: 'häufigster Auslöser',
        spalte3:
          'ohne Vergütung stellt sich die Frage neu, ob Weiterbetrieb, Umstellung auf Eigenverbrauch oder Neuaufbau wirtschaftlich sinnvoller ist',
      },
      {
        spalte1: 'Wechselrichter defekt',
        spalte2: 'technisch erzwungen',
        spalte3:
          'wenn der alte Wechselrichter nicht mehr lieferbar ist, kann ein Repowering wirtschaftlich sinnvoller sein als ein reiner Ersatz',
      },
      {
        spalte1: 'neue Verbraucher geplant',
        spalte2: 'strategisch sinnvoll',
        spalte3:
          'wer Wärmepumpe, Wallbox oder Speicher ergänzen will, sollte prüfen, ob die alte Anlage dafür noch die richtige Basis ist',
      },
      {
        spalte1: 'Dachfläche nicht ausgereizt',
        spalte2: 'Potenzial vorhanden',
        spalte3:
          'moderne Module liefern auf derselben Fläche oft deutlich mehr Leistung als Anlagen von vor 15 bis 20 Jahren',
      },
    ]),

    textBlock(
      h('h2', t('Repowering, Weiterbetrieb oder Neuanlage: Wie ordnet man das ein?')),
      p(
        t('Nicht jede alte Anlage muss ausgetauscht werden. In der Praxis gibt es drei grundsätzliche Optionen, die man sauber gegeneinander abwägen sollte.'),
      ),
      p(
        bold('Weiterbetrieb:'),
        t(' Die Anlage läuft technisch stabil weiter, der Eigenverbrauch wird optimiert und die Einspeisung über die Anschlussvergütung oder Direktvermarktung geregelt. Sinnvoll, wenn Anlage und Dach in gutem Zustand sind und kein größerer Verbraucher dazukommt.'),
      ),
      p(
        bold('Teilweises Repowering:'),
        t(' Einzelne Komponenten werden getauscht – zum Beispiel der Wechselrichter – oder ein Speicher wird ergänzt. Die Module bleiben. Sinnvoll, wenn die Module noch brauchbare Leistung bringen und das Dach keinen Neuaufbau erfordert.'),
      ),
      p(
        bold('Vollständiger Neuaufbau:'),
        t(' Die alte Anlage wird zurückgebaut, das Dach komplett neu belegt. Sinnvoll, wenn Module stark degradiert sind, das Dach ohnehin saniert werden muss oder deutlich mehr Leistung gebraucht wird.'),
      ),
    ),

    tippBlock(
      'Erst den Bestand bewerten, dann entscheiden',
      p(
        t('Die Entscheidung zwischen Weiterbetrieb, Teil-Repowering und Neuaufbau sollte nicht aus dem Bauch heraus fallen. Entscheidend ist eine saubere Bewertung von Modulzustand, Dach, Zählerschrank und den zukünftigen Verbrauchern.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Rolle spielt das Dach beim Repowering?')),
      p(
        t('Das Dach ist beim Repowering ein zentraler Faktor – und einer, der häufig unterschätzt wird.'),
      ),
      p(
        t('Wenn eine Anlage 20 Jahre auf dem Dach lag, stellt sich die Frage: Wie sieht die Eindeckung darunter aus? Muss vorher etwas gemacht werden? Ist die Unterkonstruktion noch tragfähig?'),
      ),
      p(
        t('Wer Module tauschen will, muss in der Regel auch die Unterkonstruktion prüfen – denn '),
        bold('neue Module haben oft andere Maße als die alten und passen nicht einfach auf die bestehende Schiene'),
        t('. Das wird in der Planung häufig zu spät berücksichtigt.'),
      ),
      p(
        t('Auch eine anstehende Dachsanierung spielt hinein. Wenn das Dach ohnehin in den nächsten Jahren gemacht werden müsste, kann es sinnvoller sein, beides zusammen zu denken – statt die alte Anlage jetzt zu reparieren und in zwei Jahren für die Dachsanierung wieder abzubauen.'),
      ),
    ),

    hinweisBlock(
      'Dach und Anlage zusammen denken',
      p(
        t('Wer beim Repowering das Dach ausblendet, riskiert doppelten Aufwand. Eine ehrliche Einordnung berücksichtigt den Zustand der Eindeckung, Unterkonstruktion und mögliche Sanierungszeitpunkte.'),
      ),
    ),

    textBlock(
      h('h2', t('Was passiert mit der alten Anlage und der Anmeldung?')),
      p(
        t('Beim Repowering ist nicht nur die Technik relevant, sondern auch die formale Seite. Je nach Umfang kann sich die Anlagenkonfiguration im Marktstammdatenregister ändern, die Zählerstruktur angepasst werden müssen oder eine Neuanmeldung beim Netzbetreiber nötig werden.'),
      ),
      p(
        t('Auch die Frage, ob die alte Anlage stillgelegt oder als Bestandsanlage weitergeführt wird, beeinflusst die Vergütungssituation und mögliche steuerliche Aspekte.'),
      ),
      p(
        bold('Diese Punkte sollten vor dem Repowering sauber geklärt werden'),
        t(' – nicht erst, wenn der Elektriker auf dem Dach steht.'),
      ),
    ),

    textBlock(
      h('h2', t('Was kostet ein Repowering?')),
      p(
        t('Die Kosten hängen stark davon ab, wie umfangreich das Repowering ausfällt.'),
      ),
      p(
        t('Ein reiner Wechselrichtertausch bewegt sich in einem überschaubaren Rahmen. Ein vollständiger Neuaufbau mit Rückbau, neuen Modulen, neuer Unterkonstruktion und Speicher kommt preislich einer neuen Anlage nahe – bringt aber auch die entsprechende Leistung und Technik mit.'),
      ),
      p(
        t('Entscheidend ist auch hier: '),
        bold('Die Kosten ergeben sich aus dem konkreten Projekt, nicht aus einer pauschalen Zahl'),
        t('. Dachzustand, Elektrik, Zählerschrank, Montagezugang und der gewünschte Zielzustand bestimmen den Aufwand.'),
      ),
    ),

    tabelleBlock('Kostenbereiche beim Repowering im Überblick', [
      {
        spalte1: 'Wechselrichtertausch',
        spalte2: 'überschaubar',
        spalte3:
          'oft die wirtschaftlichste Maßnahme, wenn Module noch brauchbar sind und kein Neuaufbau nötig ist',
      },
      {
        spalte1: 'Speicher ergänzen',
        spalte2: 'mittlerer Aufwand',
        spalte3:
          'sinnvoll bei Umstellung auf Eigenverbrauch, setzt aber passende Technik und freien Platz im Zählerschrank voraus',
      },
      {
        spalte1: 'Modultausch',
        spalte2: 'projektabhängig',
        spalte3:
          'neue Module erfordern oft neue Unterkonstruktion und bringen Folgefragen zu Dach, Verschattung und Belegung mit',
      },
      {
        spalte1: 'Vollständiger Neuaufbau',
        spalte2: 'wie eine Neuanlage',
        spalte3:
          'inklusive Rückbau, neue Module, Wechselrichter, Unterkonstruktion und ggf. Speicher – dafür technisch auf aktuellem Stand',
      },
    ]),

    textBlock(
      h('h2', t('Typische Fehler beim Repowering')),
      p(
        t('Auch beim Repowering gibt es Denkfehler, die in der Praxis regelmäßig auftauchen.'),
      ),
      ul(
        p(t('alte Module überschätzen, obwohl die Leistung deutlich nachgelassen hat')),
        p(t('Dachzustand ignorieren und später doppelt bauen')),
        p(t('Zählerschrank und Elektrik nicht mitdenken')),
        p(t('Repowering nur als Modultausch verstehen, ohne das Gesamtsystem zu betrachten')),
        p(t('Vergütung und Anmeldung erst im Nachhinein klären')),
        p(t('neue Verbraucher wie Wärmepumpe oder Wallbox nicht in die Planung einbeziehen')),
      ),
      p(
        t('Wer diese Punkte vor dem Projektstart ehrlich klärt, vermeidet unnötige Kosten und bekommt eine Lösung, die technisch und wirtschaftlich belastbar ist.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Repowering kann eine sehr sinnvolle Maßnahme sein – aber nur dann, wenn die Ausgangslage ehrlich bewertet wird. Nicht jede alte Anlage muss komplett getauscht werden. Und nicht jede alte Anlage sollte einfach weiterlaufen, nur weil sie „noch geht".'),
      ),
      p(
        t('Die richtige Entscheidung hängt davon ab, was das Dach hergibt, wie die Technik dasteht, welche Verbraucher heute und in Zukunft versorgt werden sollen und was wirtschaftlich ehrlich Sinn ergibt.'),
      ),
      p(
        bold('Wer sauber hinschaut, statt pauschal zu entscheiden, bekommt am Ende die bessere Lösung'),
        t(' – ob das nun ein Weiterbetrieb, ein gezielter Komponententausch oder ein vollständiger Neuaufbau ist.'),
      ),
    ),

    ctaBlock({
      titel: 'Repowering ehrlich einordnen lassen',
      text:
        'Wir schauen uns deine bestehende Anlage, das Dach, die Technik und deine zukünftigen Verbraucher gemeinsam an – praxisnah, sauber und ohne pauschale Versprechen.',
      buttonText: 'Repowering anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was bedeutet Repowering bei einer Solaranlage?',
      'Repowering bedeutet die technische Modernisierung einer bestehenden Solaranlage – durch Komponententausch, Erweiterung oder vollständigen Neuaufbau auf derselben Dachfläche.',
    ),
    faqItem(
      'Wann lohnt sich ein Repowering?',
      'Vor allem dann, wenn die EEG-Vergütung ausgelaufen ist, die Technik veraltet ist, neue Verbraucher wie Wärmepumpe oder Wallbox dazukommen oder die Dachfläche besser genutzt werden könnte.',
    ),
    faqItem(
      'Muss ich meine alte Anlage komplett austauschen?',
      'Nicht zwingend. In manchen Fällen reicht ein Wechselrichtertausch oder die Ergänzung eines Speichers. Entscheidend ist der Zustand der bestehenden Anlage und das Ziel.',
    ),
    faqItem(
      'Was passiert mit meiner alten Einspeisevergütung?',
      'Das hängt davon ab, ob die Anlage als Bestandsanlage weitergeführt oder durch eine neue Konfiguration ersetzt wird. Die formale Seite sollte vor dem Repowering sauber geklärt werden.',
    ),
    faqItem(
      'Was kostet ein Repowering?',
      'Das hängt vom Umfang ab. Ein reiner Wechselrichtertausch ist überschaubar, ein vollständiger Neuaufbau bewegt sich preislich auf dem Niveau einer neuen Anlage. Entscheidend sind Dach, Elektrik und Zielzustand.',
    ),
    faqItem(
      'Sollte ich das Dach vor dem Repowering prüfen lassen?',
      'Ja. Wer Module tauscht oder neu belegt, sollte vorher den Zustand der Eindeckung und der Unterkonstruktion kennen. Sonst riskiert man doppelten Aufwand.',
    ),
  ],
}

await upsertRatgeberArticle(article)
