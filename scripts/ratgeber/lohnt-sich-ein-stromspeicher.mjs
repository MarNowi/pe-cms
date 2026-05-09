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
  titel: 'Lohnt sich ein Stromspeicher? Eine ehrliche Einordnung für 2026',
  slug: 'lohnt-sich-ein-stromspeicher',
  kategorie: 'stromspeicher',
  status: 'veroeffentlicht',
  teaser:
    'Ein Stromspeicher rechnet sich nicht in jeder Konstellation. Ob er sich lohnt, hängt von PV-Anlage, Verbrauch, Eigenverbrauchsquote und den Plänen der nächsten Jahre ab – nicht von einer Pauschalantwort und auch nicht vom günstigsten Angebotspreis.',
  lesezeit: 10,

  seo: seo(
    'Lohnt sich ein Stromspeicher 2026? | PEAK.Energy',
    'Lohnt sich ein Stromspeicher? Ehrliche Einordnung zu Eigenverbrauchsquote, Amortisation, Wirtschaftlichkeit mit Wärmepumpe oder E-Auto und nicht-monetären Gründen.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein Stromspeicher rechnet sich vor allem dann, wenn '),
      bold('PV-Eigenverbrauchsquote, Strompreis und Speichergröße zusammenpassen'),
      t(' – nicht jede Konstellation bringt schwarze Zahlen.'),
    ),
    summaryPoint(
      t('Bei einer typischen 10-kWp-PV-Anlage mit 4–5.000 kWh Jahresverbrauch liegt die Amortisation 2026 zwischen '),
      bold('10 und 14 Jahren'),
      t('. Mit Wärmepumpe oder E-Auto wird sie kürzer.'),
    ),
    summaryPoint(
      t('Ohne PV-Anlage rechnet sich ein Heimspeicher in der Regel nicht – das einzige Szenario, in dem er denkbar wird, ist die Kombination mit einem dynamischen Stromtarif.'),
    ),
    summaryPoint(
      t('Notstrom, Unabhängigkeit und Lastverschiebung sind nicht-monetäre Gründe, die den Ausschlag geben können – aber bewusst und nicht in Kombination mit einer überzogenen Wirtschaftlichkeitserwartung.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('„Ein Stromspeicher zahlt sich aus." So formuliert, klingt das wie eine Tatsache. In der Praxis ist es eine Konditionalaussage: Ein Stromspeicher zahlt sich aus, '),
        bold('wenn'),
        t(' bestimmte Voraussetzungen stimmen. Sind diese Voraussetzungen nicht gegeben, rechnet sich der Speicher nicht – egal wie hochwertig die Hardware ist und wie schön das Datenblatt aussieht.'),
      ),
      p(
        t('Wer wissen will, ob sich ein Speicher lohnt, muss deshalb nicht den Verkäufer fragen, sondern die eigene Konstellation prüfen: Wie viel Strom verbrauche ich? Wann verbrauche ich ihn? Habe ich eine PV-Anlage – und wenn ja, wie groß? Was kommt in den nächsten Jahren dazu?'),
      ),
      p(
        t('Aus diesen Antworten ergibt sich, ob ein Speicher wirtschaftlich sinnvoll ist – und in welcher Größe. Ohne diese Antworten ist jede Aussage zur Wirtschaftlichkeit nur eine Vermutung.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann sich ein Speicher rechnet')),
      p(
        t('Ein Stromspeicher rechnet sich finanziell vor allem in einer Konstellation, in der drei Faktoren zusammenkommen.'),
      ),
      ul(
        p(
          bold('Eine PV-Anlage liefert mehr Strom, als gerade verbraucht wird'),
          t(' – Überschuss, der ohne Speicher in das Netz eingespeist und für 7,78 Cent pro kWh vergütet wird (Stand Februar 2026).'),
        ),
        p(
          bold('Der bezogene Strompreis liegt deutlich höher als die Einspeisevergütung'),
          t(' – aktuell typischerweise zwischen 32 und 38 Cent pro kWh. Die Differenz ist der Hebel: Jede selbst genutzte gespeicherte kWh ist wirtschaftlich rund 25 Cent mehr wert als die eingespeiste.'),
        ),
        p(
          bold('Es gibt einen erheblichen Verbrauch in den Abend- und Morgenstunden'),
          t(' – also dann, wenn die PV nicht oder kaum produziert. Genau diese Stunden überbrückt der Speicher.'),
        ),
      ),
      p(
        t('Treffen alle drei Faktoren zu, kann der Speicher die Eigenverbrauchsquote von typischen 25–35 % (PV ohne Speicher) auf 60–75 % heben. Das übersetzt sich in spürbar geringere Stromkosten – und macht den Speicher über 15 bis 20 Jahre zu einer wirtschaftlichen Investition.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann sich ein Speicher nicht rechnet')),
      p(
        t('Genauso ehrlich gehört zur Wahrheit: Es gibt Konstellationen, in denen ein Speicher kein wirtschaftlicher Gewinn ist.'),
      ),
      ul(
        p(t('Sehr niedriger Stromverbrauch (unter etwa 2.500 kWh/Jahr): Der Speicher steht oft halb leer und nutzt sein Potenzial nicht aus.')),
        p(t('PV-Anlage zu klein für den Verbrauch: Wenn der Eigenverbrauch ohnehin schon hoch ist (über 50 %), ist der zusätzliche Hebel durch einen Speicher klein.')),
        p(t('Hauptverbrauch tagsüber durch Homeoffice, Klimaanlage oder produzierendes Gewerbe: Der erzeugte Strom wird ohnehin direkt verbraucht – der Speicher hat wenig zu tun.')),
        p(t('Geplanter Auszug oder Verkauf des Hauses innerhalb der nächsten 5 Jahre: Die Investition amortisiert sich nicht in dieser Zeit.')),
        p(t('Reine Wirtschaftlichkeitsbetrachtung ohne nicht-monetäre Gründe: Wer einen Speicher nur „weil er sich rechnet" kauft, sollte konservativ rechnen – die Amortisation ist nicht garantiert.')),
      ),
      p(
        bold('Ohne PV-Anlage rechnet sich ein Heimspeicher in der Regel überhaupt nicht'),
        t(' – das einzige theoretische Szenario ist die Kombination mit einem dynamischen Stromtarif, bei dem zu günstigen Stunden geladen und zu teuren Stunden entladen wird. Auch das funktioniert wirtschaftlich nur in begrenztem Umfang.'),
      ),
    ),

    tabelleBlock('Wirtschaftlichkeit nach Verbrauchsprofil (10 kWp PV + 10 kWh Speicher)', [
      {
        spalte1: 'Familie, 4.500 kWh/Jahr',
        spalte2: 'Amortisation 10–13 Jahre',
        spalte3:
          'Standardfall mit Verbrauch über Tag und Abend – Speicher nutzt sein Potenzial gut aus, gute Wirtschaftlichkeit',
      },
      {
        spalte1: 'Single, 1.800 kWh/Jahr',
        spalte2: 'Amortisation 16+ Jahre',
        spalte3:
          'kleiner Verbrauch, der Speicher ist häufig nicht ausgelastet – Wirtschaftlichkeit kritisch, ein kleinerer Speicher (5 kWh) ist hier oft passender',
      },
      {
        spalte1: 'Familie + Wärmepumpe, 7.500 kWh/Jahr',
        spalte2: 'Amortisation 8–11 Jahre',
        spalte3:
          'höherer Verbrauch, viel Bedarf in den Übergangsmonaten – Speicher hat hohe Auslastung, oft sehr gute Wirtschaftlichkeit',
      },
      {
        spalte1: 'Familie + E-Auto, 6.000–8.000 kWh/Jahr',
        spalte2: 'Amortisation 9–12 Jahre',
        spalte3:
          'kommt darauf an, ob das E-Auto tagsüber zu Hause lädt – wenn ja, oft direkter PV-Verbrauch ohne Speicher; wenn abends, profitiert der Speicher stark',
      },
      {
        spalte1: 'Homeoffice / hoher Tagesverbrauch',
        spalte2: 'Amortisation 14+ Jahre',
        spalte3:
          'Eigenverbrauch ist auch ohne Speicher schon hoch – der zusätzliche Hebel durch den Speicher ist begrenzt, kleinere Speichergröße sinnvoll',
      },
    ]),

    hinweisBlock(
      'Eigenverbrauchsquote ist die Schlüsselkennzahl',
      p(
        t('Die einzige Kennzahl, die wirklich aussagt, ob sich ein Speicher lohnt, ist die Eigenverbrauchsquote vorher und nachher. Liegt sie ohne Speicher schon bei 50 % oder mehr, bringt ein Speicher meist weniger als erwartet. Liegt sie bei 20–30 %, ist der wirtschaftliche Hebel groß. Pauschal-Aussagen wie „Speicher zahlen sich immer aus" oder „Speicher rechnen sich nie" ignorieren diesen Punkt.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie sich die Lage durch Wärmepumpe oder E-Auto ändert')),
      p(
        t('Mit einer Wärmepumpe verschiebt sich die Wirtschaftlichkeit deutlich. Eine Wärmepumpe verbraucht typischerweise 2.500 bis 5.000 kWh pro Jahr zusätzlich zum normalen Haushaltsstrom – und sie verbraucht auch in den Übergangsmonaten, in denen die PV-Anlage gut produziert. '),
        bold('Der Speicher läuft dadurch deutlich häufiger und intensiver'),
        t(' – die Amortisation verkürzt sich entsprechend.'),
      ),
      p(
        t('Beim E-Auto hängt es davon ab, wann geladen wird. Lädt das Auto tagsüber während der PV-Produktion direkt am Haus, geht der Strom direkt vom Dach ins Auto – der Speicher hat dabei keine Rolle. Lädt das Auto abends oder nachts, profitiert es vom Speicher. Wer ein E-Auto plant, sollte bei der Speicherauslegung die typischen Ladezeiten ehrlich einschätzen.'),
      ),
      p(
        t('Wichtig dabei: '),
        bold('Wärmepumpe und E-Auto erhöhen den Strombedarf, aber sie ersetzen keine ehrliche Anlagenauslegung'),
        t('. Wer einen 10-kWp-PV mit 10-kWh-Speicher bei einem Verbrauch von 12.000 kWh/Jahr durch Haus, Wärmepumpe und Auto installiert, deckt nur einen Teil ab – der Speicher allein macht das System nicht autark.'),
      ),
    ),

    tippBlock(
      'Was sich durch dynamische Stromtarife verschiebt',
      p(
        t('Mit einem dynamischen Tarif kann der Speicher zusätzlich zur PV-Funktion auch netzgeladen werden – wenn der Strompreis am Markt sehr niedrig ist, wird er voll. Das verschiebt die Wirtschaftlichkeitsrechnung, weil der Speicher unabhängig vom Sonnenstand arbeiten kann. Realistisch verbessert das die Amortisation um ein bis zwei Jahre, vorausgesetzt das Energiemanagement kann diese Strategie sauber umsetzen. Voraussetzung dafür: ein Smart Meter und ein EMS, das mit dem Tarif kommuniziert.'),
      ),
    ),

    textBlock(
      h('h2', t('Nicht-monetäre Gründe – die zählen auch')),
      p(
        t('Neben der reinen Wirtschaftlichkeit gibt es Gründe, die in einer Tabelle nicht gut aufgehen, in der Praxis aber den Ausschlag geben können.'),
      ),
      ul(
        p(
          bold('Notstrom und Ersatzstrom'),
          t(': Wer bei Stromausfall den Kühlschrank, die Heizung oder die Beleuchtung weiterbetreiben will, braucht einen Speicher mit Notstromfunktion. Das ist ein konkreter Nutzen, der sich nicht über Eigenverbrauchsquoten messen lässt.'),
        ),
        p(
          bold('Unabhängigkeit'),
          t(': Wer aus politischen oder persönlichen Gründen weniger vom Stromversorger und vom Netz abhängig sein möchte, akzeptiert höhere Anschaffungskosten für ein gewisses Maß an Eigenständigkeit.'),
        ),
        p(
          bold('Vorbereitung auf zukünftige Verbrauchsprofile'),
          t(': Wer in den nächsten 3–5 Jahren eine Wärmepumpe oder ein E-Auto plant, kann den Speicher heute schon mit Blick darauf auslegen – statt zweimal zu bauen.'),
        ),
        p(
          bold('Lastverschiebung und Flexibilität'),
          t(': In Kombination mit einem Energiemanagement und ggf. dynamischem Tarif kann der Speicher Lasten verschieben und so weitere kleine Hebel nutzen.'),
        ),
      ),
      p(
        t('Diese Gründe sind legitim. Sie ersetzen aber nicht die Wirtschaftlichkeitsrechnung – sie ergänzen sie. Wer einen Speicher aus nicht-monetären Gründen kauft, sollte das ehrlich so einordnen und keine zusätzliche Erwartung an die Amortisation knüpfen.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele bei der Frage falsch einschätzen')),
      p(
        t('Bei der Entscheidung „lohnt sich ein Speicher" tauchen immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('„Mein Nachbar hat einen Speicher und ist zufrieden – also lohnt er sich für mich auch." Stimmt selten – andere Anlage, anderer Verbrauch, anderes Verbrauchsprofil.')),
        p(t('Die Einspeisevergütung wird als Rechengröße ignoriert. Sie ist 2026 noch bei 7,78 Cent pro kWh – das ist nicht null und gehört in die Rechnung.')),
        p(t('Die Amortisation wird über 30 Jahre gerechnet, obwohl die typische Lebensdauer Speicherwechselrichter eher bei 10–15 Jahren liegt. Folgekosten gehören in eine ehrliche Rechnung.')),
        p(t('Autarkie wird mit Wirtschaftlichkeit verwechselt. Hohe Autarkie kostet Geld – ab einem bestimmten Punkt wird jede zusätzliche kWh Unabhängigkeit überproportional teuer.')),
        p(t('Der Speicher wird größer dimensioniert als nötig, weil „mehr ja besser ist". Tatsächlich rechnen sich überdimensionierte Speicher schlechter, weil viele kWh ungenutzt bleiben.')),
      ),
      p(
        bold('Eine ehrliche Antwort auf die Frage „lohnt sich ein Speicher" braucht eine ehrliche Bestandsaufnahme der eigenen Verbrauchsdaten'),
        t(' – nicht eine Hochrechnung von Versprechen.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Ein Stromspeicher lohnt sich für viele Eigenheimbesitzer mit PV-Anlage – aber nicht automatisch und nicht in jeder Konstellation. Entscheidend sind PV-Anlagengröße, Stromverbrauch, Verbrauchsprofil und die Pläne der nächsten 5 bis 10 Jahre.'),
      ),
      p(
        t('Wer einen mittleren bis hohen Verbrauch hat, eine ausreichend große PV-Anlage und einen Teil seines Bedarfs außerhalb der Sonnenstunden hat, fährt mit einem passend dimensionierten Speicher meist gut. Wer keinen oder einen sehr kleinen Verbrauch hat, sollte zweimal hinschauen.'),
      ),
      p(
        bold('Die ehrlichste Antwort auf „Lohnt sich ein Speicher?" ist eine konkrete Auslegung'),
        t(' – mit den eigenen Verbrauchsdaten, einer realistischen PV-Prognose und einer 20-Jahres-Rechnung, die Folgekosten ehrlich enthält. Pauschalantworten von Verkäufern oder aus Werbung sind selten belastbar – im einen wie im anderen Sinn.'),
      ),
    ),

    ctaBlock({
      titel: 'Speicher konkret durchrechnen lassen',
      text:
        'Wir prüfen mit deinen tatsächlichen Verbrauchsdaten, ob und in welcher Größe sich ein Stromspeicher für dich rechnet – ohne Pauschalantwort und ohne überzogene Versprechen.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Wie lange dauert die Amortisation eines Stromspeichers typischerweise?',
      'Bei einer durchschnittlichen Konstellation (10 kWp PV, 10 kWh Speicher, 4.500 kWh Verbrauch) liegt die Amortisation 2026 zwischen 10 und 14 Jahren. Mit Wärmepumpe oder einem E-Auto, das abends lädt, verkürzt sie sich. Bei niedrigem Verbrauch verlängert sie sich entsprechend.',
    ),
    faqItem(
      'Lohnt sich ein Stromspeicher ohne PV-Anlage?',
      'In der Regel nicht. Ohne PV gibt es keinen günstigen Strom zum Speichern – außer in Kombination mit einem dynamischen Stromtarif, bei dem zu günstigen Marktpreisen geladen wird. Diese Konstellation ist möglich, aber wirtschaftlich begrenzt und braucht ein passendes Energiemanagement.',
    ),
    faqItem(
      'Rechnet sich ein Speicher schneller mit Wärmepumpe oder E-Auto?',
      'Mit einer Wärmepumpe in der Regel ja, weil der Verbrauch deutlich steigt und der Speicher häufiger entladen wird. Beim E-Auto hängt es davon ab, wann geladen wird – tagsüber direkt aus PV oder abends aus dem Speicher. Eine ehrliche Auslegung berücksichtigt das.',
    ),
    faqItem(
      'Lohnt sich ein Speicher noch bei der niedrigen Einspeisevergütung 2026?',
      'Ja, eher mehr. Die Differenz zwischen Einspeisevergütung (7,78 Cent/kWh) und Bezugsstrompreis (32–38 Cent) ist der wirtschaftliche Hebel. Sinkt die Einspeisevergütung weiter, wird Eigenverbrauch durch Speicherung relativ wertvoller.',
    ),
    faqItem(
      'Verändert ein dynamischer Stromtarif die Wirtschaftlichkeit?',
      'Ja, in der Regel positiv. Mit einem dynamischen Tarif kann der Speicher zusätzlich zu günstigen Marktpreisen geladen werden. Realistisch verkürzt sich die Amortisation dadurch um ein bis zwei Jahre, vorausgesetzt das Energiemanagement kann den Tarif nutzen.',
    ),
    faqItem(
      'Wann sollte ich besser keinen Stromspeicher kaufen?',
      'Bei sehr kleinem Stromverbrauch, hohem Eigenverbrauch durch Homeoffice oder Gewerbe, geplanter Veräußerung des Hauses innerhalb der nächsten 5 Jahre oder wenn die PV-Anlage zu klein ist, um regelmäßig Überschüsse zu erzeugen. In diesen Fällen rechnet sich der Speicher selten.',
    ),
  ],
}

await upsertRatgeberArticle(article)
