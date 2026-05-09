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
  titel: 'Wärmepumpe und Photovoltaik: Lohnt die Kombination wirklich?',
  slug: 'waermepumpe-und-photovoltaik',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Wärmepumpe plus PV-Anlage klingt nach der perfekten Energie-Kombination. In der Praxis funktioniert das gut – aber anders als die Werbung suggeriert. Sonnenstrom kommt im Sommer, geheizt wird im Winter. Wer das ehrlich einordnet, plant beide Systeme passend.',
  lesezeit: 10,

  seo: seo(
    'Wärmepumpe mit Photovoltaik: Lohnt sich die Kombination? | PEAK.Energy',
    'Wärmepumpe und PV-Anlage: Wie viel Eigenverbrauch realistisch ist, ob ein Speicher sinnvoll wird und wann sich die Kombination wirklich rechnet – ehrliche Einordnung.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Eine PV-Anlage versorgt eine Wärmepumpe '),
      bold('jährlich nur zu etwa 25–35 %'),
      t(' direkt mit Solarstrom – weil Heizbedarf und Sonnenertrag zeitlich nicht zusammenpassen.'),
    ),
    summaryPoint(
      t('Im '),
      bold('Sommer'),
      t(' deckt PV den WP-Strombedarf für Warmwasser fast vollständig. Im Winter, wenn die Wärmepumpe richtig arbeitet, liefert die PV deutlich weniger – das gehört zur ehrlichen Rechnung.'),
    ),
    summaryPoint(
      t('Ein '),
      bold('Stromspeicher hilft begrenzt'),
      t(' – er verschiebt Tagesüberschuss in den Abend, kann aber nicht den Sommer-Winter-Versatz überbrücken.'),
    ),
    summaryPoint(
      t('Wirtschaftlich rechnet sich die Kombination trotzdem oft – nicht weil sie die Wärmepumpe „autark" macht, sondern weil PV-Strom günstiger ist als Netzstrom und der zusätzliche Verbrauch der Wärmepumpe die PV-Anlage besser auslastet.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('„Wärmepumpe mit PV – die perfekte Kombination." Das hört man oft. Es klingt logisch: Solaranlage erzeugt Strom, Wärmepumpe braucht Strom – passt also zusammen. Stimmt grundsätzlich, aber die Realität ist nuancierter, als die einfache Rechnung suggeriert.'),
      ),
      p(
        t('Eine Wärmepumpe braucht Strom vor allem dann, wenn das Haus warm sein soll – also '),
        bold('im Winter, in den Übergangsmonaten, in der Nacht und am frühen Morgen'),
        t('. Eine PV-Anlage liefert Strom dann, wenn die Sonne scheint – '),
        bold('also im Sommer, mittags, an klaren Tagen'),
        t('. Diese beiden Profile passen nur teilweise zusammen.'),
      ),
      p(
        t('Wer die Kombination ehrlich einordnet, weiß: Sie ist sinnvoll, wirtschaftlich oft attraktiv, aber sie macht die Wärmepumpe nicht autark. Sie senkt die Stromkosten und erhöht die PV-Auslastung – das reicht als Argument, aber es ist ein anderes Argument als „selbst erzeugte Heizung aus der Sonne".'),
      ),
    ),

    textBlock(
      h('h2', t('Wie viel WP-Strom kommt realistisch aus PV?')),
      p(
        t('Die Werbung verspricht oft hohe Eigenverbrauchsquoten der Wärmepumpe aus Solarstrom. Realistisch sind über das Jahr betrachtet '),
        bold('25 bis 35 % des WP-Strombedarfs'),
        t(' – abhängig von Anlagengröße, Verbrauchsprofil, Wärmepumpentyp und Speicher.'),
      ),
      p(
        t('Der Grund ist einfach: Eine Wärmepumpe verbraucht in einem typischen Einfamilienhaus etwa 3.000 bis 5.000 kWh Strom pro Jahr. Davon entfallen rund '),
        bold('60 bis 70 % auf die Heizperiode (Oktober bis April)'),
        t(' – also genau die Zeit, in der die PV-Anlage am wenigsten produziert. Im Dezember liefert eine 10-kWp-PV vielleicht 200 bis 350 kWh pro Monat, eine Wärmepumpe braucht in der gleichen Zeit 600 bis 900 kWh. Da geht sich nicht alles aus.'),
      ),
      p(
        t('Im Sommer ist das Bild umgekehrt: Die PV produziert mit Volldampf, die Wärmepumpe macht fast nur Warmwasser und braucht entsprechend wenig Strom. Hier ist die Deckung hoch, aber der Bedarf gering. Es ist ein Versatzproblem, kein Mengenproblem.'),
      ),
    ),

    tabelleBlock('PV-Eigenversorgung der Wärmepumpe nach Saison (typisch)', [
      {
        spalte1: 'Sommer (Juni–August)',
        spalte2: 'PV-Deckung WP-Strom: 80–95 %',
        spalte3:
          'Wärmepumpe macht fast nur Warmwasser – PV produziert reichlich. Mittagsstrom geht direkt in den Speicher, Nachterzeugung übernimmt der Stromspeicher (falls vorhanden)',
      },
      {
        spalte1: 'Übergangsmonate (April–Mai, September–Oktober)',
        spalte2: 'PV-Deckung WP-Strom: 40–60 %',
        spalte3:
          'PV produziert solide, Wärmepumpe braucht moderat Strom für Heizung und Warmwasser. Der Speicher kann Tagesüberschüsse verschieben',
      },
      {
        spalte1: 'Winter (November–März)',
        spalte2: 'PV-Deckung WP-Strom: 5–15 %',
        spalte3:
          'PV produziert wenig, Wärmepumpe braucht viel Strom. Hauptverbrauch kommt aus dem Netz – das ist 2026 schlicht physikalische Realität',
      },
      {
        spalte1: 'Jahresdeckung Wärmepumpe',
        spalte2: '25–35 %',
        spalte3:
          'Über alle Monate gemittelt – mit größerer PV-Anlage (12–15 kWp) und Stromspeicher kann die Quote bis 40 % steigen, mehr ist über reines Eigenverbrauchsprinzip nicht möglich',
      },
    ]),

    hinweisBlock(
      'Sondertarif WP-Strom oder Haushaltstarif?',
      p(
        t('Wer eine Wärmepumpe betreibt, hat oft die Wahl zwischen einem speziellen Wärmepumpentarif (mit eigenem Zähler, oft 5 bis 8 Cent günstiger pro kWh) oder dem normalen Haushaltstarif. Bei Kombination mit PV und Speicher kann das einfache '),
        bold('Eintarif-System (alles auf einem Zähler)'),
        t(' wirtschaftlich besser sein, weil PV-Eigenverbrauch direkt der WP zugutekommt. Bei reinem WP-Strom ohne PV ist der Sondertarif meist günstiger. Die richtige Wahl hängt vom Verhältnis zwischen WP-Verbrauch, PV-Eigenverbrauch und der Tarif-Differenz ab – konkret durchrechnen lohnt sich.'),
      ),
    ),

    textBlock(
      h('h2', t('Lohnt sich ein Stromspeicher in der Kombination?')),
      p(
        t('Mit einer Wärmepumpe wird ein Stromspeicher tendenziell wirtschaftlicher – aber nicht aus dem Grund, den die Werbung oft suggeriert.'),
      ),
      p(
        t('Was ein Speicher leisten kann: '),
        bold('Tagesüberschuss von der PV in den Abend verschieben'),
        t('. Das ist relevant, weil die Wärmepumpe abends und nachts gerne Wärme bereitstellt – der Hauptverbrauch fällt nicht zur Mittagszeit an. Ohne Speicher würde der Mittagsstrom für 7,78 Cent pro kWh ins Netz gehen, der Abendstrom für 32 bis 38 Cent zugekauft werden. Der Speicher schließt diese Lücke.'),
      ),
      p(
        t('Was ein Speicher '),
        bold('nicht'),
        t(' leisten kann: Den '),
        bold('Sommer-Winter-Versatz'),
        t(' überbrücken. Die im Juli erzeugten Überschüsse stehen im Januar nicht zur Verfügung – die Speicherkapazität dafür wäre absurd groß und unwirtschaftlich. Wer hier auf saisonale Speicher setzen will, schaut auf Wasserstoff oder Wärmespeicher – das ist bei privaten Häusern bisher kein realistischer Ansatz.'),
      ),
      p(
        bold('Faustregel:'),
        t(' Bei einer 10-kWp-PV mit Wärmepumpe und Standardverbrauch (4.000–6.000 kWh) lohnt sich ein 10-kWh-Speicher fast immer – die Kombination hebt die Eigenverbrauchsquote über das Jahr von 25–30 % auf 55–65 %.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann sich die Kombination wirtschaftlich rechnet')),
      p(
        t('Die Wärmepumpe-PV-Kombination lohnt sich finanziell vor allem in einer Konstellation, in der drei Faktoren zusammenkommen.'),
      ),
      ul(
        p(
          bold('Ausreichend große PV-Anlage'),
          t(' – nicht die kleinste mögliche Anlage. Wer ohnehin eine Wärmepumpe plant, sollte die PV-Größe darauf auslegen: typisch 10 bis 14 kWp bei einem Einfamilienhaus mit Wärmepumpe. Eine zu kleine PV deckt den WP-Bedarf nicht und macht die Kombination weniger attraktiv.'),
        ),
        p(
          bold('Höherer Strombedarf insgesamt'),
          t(' – die Wärmepumpe erhöht den Verbrauch deutlich. Damit lastet sie die PV besser aus. Wer ohne WP einen geringen Eigenverbrauch hatte, profitiert mit WP überproportional.'),
        ),
        p(
          bold('Speicher in passender Größe'),
          t(' – meist 8 bis 12 kWh. Der Speicher verschiebt Tagesüberschüsse in die Abend- und Morgenstunden, in denen die WP den Spitzenbedarf hat.'),
        ),
      ),
      p(
        t('Im Standardfall verkürzt die Wärmepumpe als zusätzlicher Verbraucher die Amortisation der gesamten PV-Anlage – nicht weil sie ein Wundereffekt ist, sondern weil sie die Eigenverbrauchsquote anhebt und damit jede selbst genutzte kWh mehr wirtschaftlichen Wert hat.'),
      ),
    ),

    tippBlock(
      'PV nicht „nur für die Wärmepumpe" planen',
      p(
        t('Wer die PV-Anlage allein wegen der Wärmepumpe baut, sollte das ehrlich durchrechnen. Die PV deckt den WP-Bedarf nur teilweise – und gerade in der Heizperiode wenig. Sinnvoller ist es, die PV als Gesamtanlage zu denken: für Haushaltsstrom, Wärmepumpe, eventuell Wallbox. Die Größe ergibt sich aus der Summe der Bedarfe und dem Dachpotenzial – nicht aus dem alleinigen WP-Verbrauch.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele bei der Kombination falsch einschätzen')),
      p(
        t('Bei der Verbindung von Wärmepumpe und PV tauchen immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('„Mit PV heize ich kostenlos." Stimmt nicht. Die Hauptlast der Heizperiode wird über Netzstrom gedeckt – die PV trägt 25 bis 35 % bei, der Rest kommt aus dem Netz.')),
        p(t('„Eine kleine PV reicht für die Wärmepumpe." Stimmt selten. Wer die WP wirtschaftlich mit PV koppeln will, braucht eine ausreichend große Anlage – kleine 5-kWp-Anlagen liefern im Winter zu wenig.')),
        p(t('„Der Speicher überbrückt den Winter." Stimmt nicht. Saisonale Speicherung über Monate ist mit Lithium-Ionen-Speichern wirtschaftlich unmöglich.')),
        p(t('„Wärmepumpentarif ist immer günstiger." Stimmt nicht. Bei Kombination mit PV-Eigenverbrauch kann der einheitliche Tarif wirtschaftlich besser sein – konkret rechnen.')),
        p(t('Die Eigenverbrauchsquote wird auf den gesamten Strombedarf gerechnet statt auf die Wärmepumpe selbst. Das verzerrt das Bild – die echte Frage ist, wie viel WP-Strom aus PV kommt, nicht wie viel Haushaltsstrom.')),
        p(t('Die Klimageschwindigkeitsbonus-Förderung wird mit dem Effizienzbonus verwechselt. Erstere greift bei Heizungsaustausch, letzterer bei besonders effizienten Geräten – beide sind kombinierbar.')),
      ),
      p(
        bold('Eine ehrliche Einordnung der WP-PV-Kombination braucht beide Profile gleichzeitig'),
        t(' – Erzeugung und Verbrauch über das Jahr. Nicht nur den Sommer-Schnappschuss.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Wärmepumpe und PV ergänzen sich gut, aber nicht so vollständig, wie viele Werbeaussagen suggerieren. Realistisch deckt eine PV-Anlage 25 bis 35 % des Wärmepumpen-Strombedarfs übers Jahr – mit Speicher und passender Anlagengröße sind 40 % möglich, mehr ist physikalisch nicht drin.'),
      ),
      p(
        t('Wirtschaftlich lohnt sich die Kombination in den meisten Konstellationen trotzdem – weil PV-Strom günstiger ist als Netzstrom, weil die Wärmepumpe die PV-Auslastung erhöht und weil ein Stromspeicher mit Wärmepumpe häufig sinnvoll wird. Wer beide Systeme zusammen plant, kommt mit weniger Aufwand zu einem ausgewogenen Ergebnis als beim nachträglichen Aufrüsten.'),
      ),
      p(
        bold('Die ehrliche Antwort auf „lohnt sich Wärmepumpe mit PV?" ist: ja, in den meisten Fällen'),
        t(' – aber nicht aus dem Grund, der oft genannt wird. Nicht „kostenlos heizen", sondern „Stromkosten senken und PV besser auslasten". Das reicht als wirtschaftliches Argument, ohne dass man Versprechen macht, die nicht haltbar sind.'),
      ),
    ),

    ctaBlock({
      titel: 'Wärmepumpe und PV als System planen lassen',
      text:
        'Wir prüfen, wie Wärmepumpe, PV-Anlage und Speicher in deinem Haus optimal zusammenspielen – mit ehrlichen Eigenverbrauchsquoten, nicht mit Marketing-Prozenten.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Lohnt sich PV mit Wärmepumpe wirtschaftlich?',
      'In den meisten Fällen ja – aber nicht weil die PV die Wärmepumpe „autark" macht. Sie senkt die Stromkosten, weil PV-Eigenstrom günstiger ist als Netzstrom, und sie lastet die PV-Anlage durch den höheren WP-Verbrauch besser aus. Über das Jahr deckt die PV typisch 25–35 % des WP-Bedarfs.',
    ),
    faqItem(
      'Wie groß muss die PV für eine Wärmepumpe sein?',
      'Für ein Einfamilienhaus mit Wärmepumpe und Haushaltsstrom typisch 10 bis 14 kWp – abhängig von Dachfläche, Verbrauch und ggf. zusätzlicher Wallbox. Kleinere Anlagen (5–8 kWp) decken den WP-Bedarf zu wenig ab und machen die Kombination weniger attraktiv.',
    ),
    faqItem(
      'Brauche ich einen Stromspeicher mit Wärmepumpe und PV?',
      'Sinnvoll ist er fast immer. Der Speicher verschiebt Tagesüberschüsse in den Abend, wenn die WP gerne Wärme bereitstellt. Bei einer 10-kWp-PV mit WP lohnt sich typisch ein 10-kWh-Speicher – die Eigenverbrauchsquote steigt damit über das Jahr von 25–30 % auf 55–65 %.',
    ),
    faqItem(
      'Wie viel WP-Strom kommt aus der PV-Anlage?',
      'Realistisch 25 bis 35 % über das Jahr. Im Sommer 80–95 % (WP läuft fast nur für Warmwasser, PV produziert reichlich), im Winter 5–15 % (PV liefert wenig, WP braucht viel). Der Sommer-Winter-Versatz ist nicht durch Speicher überbrückbar.',
    ),
    faqItem(
      'Lohnt sich die PV nur für die Wärmepumpe?',
      'Selten. Eine PV nur wegen der WP zu bauen, rechnet sich meist nicht – weil die Heizperiode genau die Zeit ist, in der die PV wenig liefert. Sinnvoller ist es, die PV als Gesamtanlage für Haushaltsstrom, WP und ggf. Wallbox zu denken. Dann ergänzen sich die Verbraucher und lasten die PV besser aus.',
    ),
    faqItem(
      'Sondertarif für WP-Strom oder gemeinsamer Haushaltstarif mit PV?',
      'Kommt auf die Konstellation an. Bei reiner Wärmepumpe ohne PV ist der WP-Sondertarif (eigener Zähler, 5–8 Cent günstiger) meist sinnvoll. Bei Kombination mit PV und Speicher ist oft ein einheitlicher Tarif wirtschaftlich besser, weil PV-Eigenverbrauch direkt der WP zugutekommt. Konkret durchrechnen lohnt sich.',
    ),
  ],
}

await upsertRatgeberArticle(article)
