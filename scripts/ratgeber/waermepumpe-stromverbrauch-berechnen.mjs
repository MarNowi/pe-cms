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
  titel: 'Wärmepumpe Stromverbrauch berechnen: Wovon hängt er wirklich ab?',
  slug: 'waermepumpe-stromverbrauch-berechnen',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Den Stromverbrauch einer Wärmepumpe berechnet man nicht sauber über pauschale Werbewerte. Entscheidend sind Wärmebedarf, Vorlauftemperatur, Effizienz und das reale Verhalten des Hauses.',
  lesezeit: 12,

  seo: seo(
    'Wärmepumpe Stromverbrauch berechnen: realistisch einordnen | PEAK.Energy',
    'Wärmepumpe Stromverbrauch berechnen: ehrliche Einordnung zu Wärmebedarf, Jahresarbeitszahl, Vorlauftemperatur, Warmwasser und typischen Denkfehlern – praxisnah von PEAK.Energy.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Der Stromverbrauch einer Wärmepumpe ergibt sich nicht aus einer pauschalen Beispielzahl, sondern aus dem tatsächlichen Wärmebedarf des Hauses und der realen Effizienz des Systems.'),
    ),
    summaryPoint(
      t('Wichtig sind vor allem Heizlast, Jahresheizbedarf, Vorlauftemperatur, Warmwasserbedarf, Heizflächen und die Frage, wie sauber das Gesamtsystem ausgelegt wurde.'),
    ),
    summaryPoint(
      t('Je besser Gebäude und Heizsystem zur Wärmepumpe passen, '),
      bold('desto niedriger fällt der Stromverbrauch in der Regel aus'),
      t('.'),
    ),
    summaryPoint(
      t('Wer den Stromverbrauch seriös berechnen will, sollte keine Wunschwerte ansetzen, sondern mit realistischen Annahmen arbeiten.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Wärmepumpe Stromverbrauch berechnen: Warum pauschale Angaben oft wenig helfen')),
      p(
        t('Viele Menschen suchen beim Thema Wärmepumpe nach einer einfachen Zahl: Wie viel Strom verbraucht sie im Jahr? Genau diese Frage ist verständlich – aber in der Praxis oft zu grob gestellt.'),
      ),
      p(
        t('Denn eine Wärmepumpe hat keinen festen Stromverbrauch wie ein Toaster oder ein Kühlschrank. '),
        bold('Ihr Verbrauch hängt direkt davon ab, wie viel Wärme das Gebäude braucht und wie effizient das System diese Wärme bereitstellt'),
        t('.'),
      ),
      p(
        t('Deshalb führen pauschale Werbeangaben oder Beispielrechnungen oft in die falsche Richtung. Zwei Häuser mit ähnlicher Wohnfläche können beim Stromverbrauch der Wärmepumpe deutlich auseinanderliegen.'),
      ),
    ),

    hinweisBlock(
      'Nicht die Wärmepumpe allein verbraucht Strom',
      p(
        t('Der Stromverbrauch entsteht immer im Zusammenspiel aus Gebäude, Heizsystem, Vorlauftemperatur, Warmwasserbedarf und tatsächlichem Nutzungsverhalten. Nicht nur das Gerät selbst entscheidet.'),
      ),
    ),

    textBlock(
      h('h2', t('Die Grundlogik: Wärmebedarf geteilt durch reale Effizienz')),
      p(
        t('Vereinfacht gesagt ergibt sich der Stromverbrauch einer Wärmepumpe aus dem Wärmebedarf des Hauses geteilt durch die reale Effizienz des Systems. Genau an dieser Stelle wird es spannend.'),
      ),
      p(
        t('Wer zum Beispiel wenig Wärme braucht und ein gut passendes System mit vernünftigen Temperaturen hat, landet meist bei einem deutlich günstigeren Verbrauch als ein Haus mit hohem Bedarf und ungünstigen Betriebsbedingungen.'),
      ),
      p(
        t('Für eine erste Einordnung kann man sich deshalb an einer einfachen Logik orientieren: '),
        bold('Je höher der jährliche Wärmebedarf und je schwächer die reale Effizienz, desto höher der Stromverbrauch'),
        t('.'),
      ),
    ),

    tippBlock(
      'Die richtige Frage lautet nicht nur: Was verbraucht die Wärmepumpe?',
      p(
        t('Die bessere Frage ist: Wie viel Wärme braucht das Haus wirklich – und wie effizient kann die Wärmepumpe diese Wärme bereitstellen? Genau daraus entsteht eine belastbarere Einordnung.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Faktoren den Stromverbrauch wirklich beeinflussen')),
      p(
        t('Wer den Stromverbrauch sauber einschätzen will, sollte nicht nur auf die Wärmepumpe selbst schauen. Entscheidend ist das Gesamtsystem.'),
      ),
      ul(
        p(t('der tatsächliche Heizwärmebedarf des Gebäudes')),
        p(t('die erforderliche Vorlauftemperatur im Winter')),
        p(t('die Qualität und Größe der Heizflächen')),
        p(t('die reale Effizienz beziehungsweise Jahresarbeitszahl')),
        p(t('der Warmwasserbedarf im Haushalt')),
        p(t('Regelung, Hydraulik und Nutzungsverhalten')),
      ),
      p(
        t('Genau deshalb ist eine grobe Beispielzahl aus einem fremden Haus nur begrenzt hilfreich. Ein gut modernisiertes Gebäude mit vernünftigen Systemtemperaturen ist technisch etwas ganz anderes als ein Bestand mit hohen Verlusten und kritischen Heizflächen.'),
      ),
    ),

    tabelleBlock('Diese Faktoren beeinflussen den Stromverbrauch der Wärmepumpe', [
      {
        spalte1: 'Wärmebedarf des Hauses',
        spalte2: 'zentrale Grundlage',
        spalte3:
          'je mehr Wärme das Gebäude über das Jahr braucht, desto mehr Strom muss die Wärmepumpe in der Regel aufwenden',
      },
      {
        spalte1: 'Vorlauftemperatur',
        spalte2: 'wichtig für die Effizienz',
        spalte3:
          'je höher die notwendige Vorlauftemperatur, desto stärker steigt der Aufwand für die Wärmepumpe meist an',
      },
      {
        spalte1: 'Heizflächen',
        spalte2: 'oft unterschätzt',
        spalte3:
          'gut passende Heizflächen helfen, mit moderateren Temperaturen zu arbeiten und den Verbrauch günstiger zu halten',
      },
      {
        spalte1: 'Warmwasser',
        spalte2: 'mitdenken, aber realistisch',
        spalte3:
          'auch der Bedarf an Warmwasser gehört in die Betrachtung, sollte aber nicht pauschal überzogen angesetzt werden',
      },
      {
        spalte1: 'Regelung und Hydraulik',
        spalte2: 'häufig unterschätzt',
        spalte3:
          'ein schlecht abgestimmtes System kann den Verbrauch unnötig verschlechtern',
      },
    ]),

    textBlock(
      h('h2', t('Welche Rolle spielt die Jahresarbeitszahl?')),
      p(
        t('Die Jahresarbeitszahl, oft kurz JAZ genannt, beschreibt vereinfacht, wie effizient eine Wärmepumpe über das Jahr arbeitet. Sie zeigt, wie viel nutzbare Wärme im Verhältnis zum eingesetzten Strom erzeugt wird.'),
      ),
      p(
        t('Für die Verbrauchsrechnung ist sie deshalb ein wichtiger Anker. Wenn ein Haus zum Beispiel einen bestimmten Wärmebedarf hat, dann verändert eine bessere oder schlechtere reale JAZ den benötigten Strom deutlich.'),
      ),
      p(
        t('Wichtig ist dabei: '),
        bold('Nicht jeder Prospektwert ist automatisch ein realistischer Alltagswert'),
        t('. Wer mit zu optimistischen Annahmen rechnet, bekommt schnell eine schöne, aber wenig belastbare Verbrauchsprognose.'),
      ),
    ),

    hinweisBlock(
      'Prospektwerte sind nicht automatisch Praxiswerte',
      p(
        t('Für eine ehrliche Einordnung sollte die Effizienz nicht zu optimistisch angesetzt werden. Realistische Annahmen sind am Ende wertvoller als jede Wunschrechnung.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum Vorlauftemperatur und Heizflächen so stark hineinspielen')),
      p(
        t('Die Wärmepumpe arbeitet nicht im luftleeren Raum. Sie muss ihre Wärme in ein bestehendes Heizsystem abgeben. Genau deshalb sind Vorlauftemperatur und Heizflächen so wichtig für den späteren Stromverbrauch.'),
      ),
      p(
        t('Wenn das Haus mit moderaten Temperaturen zuverlässig warm wird, ist die Ausgangslage meist deutlich besser. Müssen dagegen dauerhaft hohe Temperaturen gefahren werden, steigt der Aufwand der Wärmepumpe häufig spürbar an.'),
      ),
      p(
        t('Genau an dieser Stelle zeigt sich auch, warum Häuser mit ähnlicher Größe am Ende sehr unterschiedliche Verbräuche haben können. '),
        bold('Nicht die Quadratmeterzahl allein entscheidet, sondern die technische Realität des Gesamtsystems'),
        t('.'),
      ),
    ),

    tippBlock(
      'Niedrigere Temperaturen helfen fast immer',
      p(
        t('Je niedriger die Systemtemperaturen im realen Betrieb ausfallen, desto entspannter ist die Ausgangslage für die Wärmepumpe in der Regel. Das wirkt sich häufig direkt auf den Stromverbrauch aus.'),
      ),
    ),

    textBlock(
      h('h2', t('Warmwasser nicht vergessen – aber auch nicht künstlich aufblasen')),
      p(
        t('Zur Berechnung des Stromverbrauchs gehört nicht nur das Heizen, sondern auch das Warmwasser. Gerade bei mehreren Personen im Haushalt oder besonderem Komfortanspruch kann dieser Anteil relevant sein.'),
      ),
      p(
        t('Gleichzeitig sollte man das Thema nicht unnötig aufblasen. Nicht jeder Haushalt hat denselben Bedarf, und nicht jede überschlägige Rechnung bildet die tatsächliche Nutzung sauber ab.'),
      ),
      p(
        t('Sinnvoll ist deshalb eine nüchterne Einordnung: '),
        bold('Warmwasser gehört in die Rechnung hinein, aber passend zum realen Haushalt'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Eine grobe Beispielrechnung – aber ehrlich eingeordnet')),
      p(
        t('Für eine erste Orientierung kann man sich eine vereinfachte Logik anschauen: Wenn ein Gebäude einen bestimmten jährlichen Wärmebedarf hat und die Wärmepumpe im Alltag mit einer realistischen Jahresarbeitszahl arbeitet, ergibt sich daraus der ungefähre Strombedarf.'),
      ),
      p(
        t('Die vereinfachte Denkweise lautet dabei sinngemäß: jährlicher Wärmebedarf geteilt durch reale Jahresarbeitszahl gleich ungefährer Stromverbrauch. Das ist keine vollständige Planung, aber eine brauchbare Grundlogik für die erste Einordnung.'),
      ),
      p(
        t('Entscheidend ist nur, dass beide Seiten der Rechnung realistisch sind. Wer beim Wärmebedarf zu optimistisch rechnet oder bei der Effizienz Wunschwerte annimmt, bekommt zwar niedrige Zahlen – aber keine verlässliche Aussage.'),
      ),
    ),

    tabelleBlock('Saubere Einordnung statt schöner Schnellrechnung', [
      {
        spalte1: 'zu niedriger Wärmebedarf angesetzt',
        spalte2: 'führt zu schönem Ergebnis',
        spalte3:
          'die Prognose wirkt günstig, bildet den realen Bedarf des Hauses aber nicht sauber ab',
      },
      {
        spalte1: 'zu hohe Effizienz angenommen',
        spalte2: 'ebenfalls riskant',
        spalte3:
          'eine zu optimistische JAZ senkt die Rechnung auf dem Papier, nicht aber automatisch den späteren Verbrauch',
      },
      {
        spalte1: 'realistische Annahmen',
        spalte2: 'belastbarer',
        spalte3:
          'liefert meist die ehrlichere Grundlage für Planung, Vergleich und Wirtschaftlichkeit',
      },
    ]),

    textBlock(
      h('h2', t('Typische Denkfehler bei der Verbrauchsberechnung')),
      p(
        t('Die meisten Fehler entstehen nicht erst beim Betrieb der Wärmepumpe, sondern schon in der Vorbetrachtung. Gerade beim Stromverbrauch werden immer wieder ähnliche Abkürzungen genommen.'),
      ),
      ul(
        p(t('nur mit pauschalen Werbewerten rechnen')),
        p(t('den tatsächlichen Wärmebedarf des Hauses zu grob ansetzen')),
        p(t('Vorlauftemperatur und Heizflächen zu wenig beachten')),
        p(t('Warmwasser pauschal zu hoch oder zu niedrig bewerten')),
        p(t('Prospekt-Effizienz mit realer Jahresarbeitszahl verwechseln')),
      ),
      p(
        t('Wer diese Punkte sauber trennt, kommt fast immer zu einer besseren Einordnung als mit jeder Schnellbehauptung zum angeblichen Standardverbrauch.'),
      ),
    ),

    hinweisBlock(
      'Nicht jede niedrige Zahl ist automatisch eine gute Zahl',
      p(
        t('Eine Verbrauchsprognose soll nicht beeindrucken, sondern realistisch helfen. Eine ehrliche Rechnung ist wertvoller als jede künstlich schön gerechnete Beispielzahl.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Den Stromverbrauch einer Wärmepumpe berechnet man nicht sauber über pauschale Beispielwerte, sondern über den tatsächlichen Wärmebedarf des Hauses und die reale Effizienz des Systems.'),
      ),
      p(
        t('Entscheidend sind Wärmebedarf, Vorlauftemperatur, Heizflächen, Warmwasser und die Frage, wie gut Wärmepumpe und Gebäude technisch zusammenpassen.'),
      ),
      p(
        t('Genau deshalb lohnt sich eine ehrliche Einordnung mehr als jede Schnellrechnung. Denn nur realistische Annahmen helfen am Ende wirklich bei Planung, Wirtschaftlichkeit und Erwartung an den späteren Betrieb.'),
      ),
    ),

    ctaBlock({
      titel: 'Lass uns den Stromverbrauch deiner Wärmepumpe realistisch einordnen',
      text:
        'Wir schauen uns Wärmebedarf, Systemtemperaturen, Heizflächen und Gebäudesituation gemeinsam an – praxisnah, ehrlich und ohne geschönte Beispielrechnung.',
      buttonText: 'Wärmepumpe anfragen',
      buttonLink: '/waermepumpe',
    }),
  ],

  faq: [
    faqItem(
      'Wie kann ich den Stromverbrauch einer Wärmepumpe grob berechnen?',
      'Vereinfacht ergibt sich der Stromverbrauch aus dem jährlichen Wärmebedarf geteilt durch die reale Effizienz beziehungsweise Jahresarbeitszahl. Für eine saubere Einordnung müssen beide Werte aber realistisch angesetzt werden.',
    ),
    faqItem(
      'Wovon hängt der Stromverbrauch einer Wärmepumpe am meisten ab?',
      'Vor allem vom Wärmebedarf des Hauses, der Vorlauftemperatur, den Heizflächen, dem Warmwasserbedarf und der realen Effizienz des Systems.',
    ),
    faqItem(
      'Reicht die Wohnfläche zur Berechnung aus?',
      'Nein. Die Wohnfläche kann allenfalls eine grobe erste Orientierung geben. Für eine belastbare Aussage reicht sie allein nicht aus.',
    ),
    faqItem(
      'Welche Rolle spielt die Jahresarbeitszahl?',
      'Eine sehr große. Sie beschreibt vereinfacht, wie effizient die Wärmepumpe über das Jahr arbeitet. Je realistischer diese Annahme ist, desto brauchbarer wird die Verbrauchsrechnung.',
    ),
    faqItem(
      'Muss Warmwasser bei der Berechnung berücksichtigt werden?',
      'Ja. Warmwasser gehört zur realistischen Einordnung dazu. Es sollte aber passend zum tatsächlichen Haushalt und nicht pauschal überzogen angesetzt werden.',
    ),
    faqItem(
      'Warum weichen Beispielrechnungen oft so stark voneinander ab?',
      'Weil Häuser, Heizsysteme und Annahmen sehr unterschiedlich sind. Schon kleine Unterschiede bei Wärmebedarf, Vorlauftemperatur oder Effizienz können den errechneten Stromverbrauch deutlich verändern.',
    ),
  ],
}

await upsertRatgeberArticle(article)
