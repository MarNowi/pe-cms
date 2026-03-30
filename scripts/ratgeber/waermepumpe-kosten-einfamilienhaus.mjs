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
  titel: 'Wärmepumpe Kosten im Einfamilienhaus: Womit muss man realistisch rechnen?',
  slug: 'waermepumpe-kosten-einfamilienhaus',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Die Kosten einer Wärmepumpe im Einfamilienhaus hängen nicht nur vom Gerät ab. Entscheidend sind Gebäude, Heizsystem, Montageaufwand, Elektrik und die Frage, was vor Ort wirklich nötig ist.',
  lesezeit: 12,

  seo: seo(
    'Wärmepumpe Kosten im Einfamilienhaus: ehrlich eingeordnet | PEAK.Energy',
    'Wärmepumpe Kosten im Einfamilienhaus: ehrliche Einordnung zu Gerät, Montage, Heizsystem, Elektrik, Umbauten und typischen Kostenfehlern – praxisnah von PEAK.Energy.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Die Kosten einer Wärmepumpe im Einfamilienhaus bestehen nicht nur aus dem Gerät. Zur realistischen Einordnung gehören auch Montage, Heizsystem, Elektrik, Hydraulik und mögliche Anpassungen im Bestand.'),
    ),
    summaryPoint(
      t('Wer nur einen Paketpreis vergleicht, vergleicht oft am falschen Ende. '),
      bold('Entscheidend ist, was im konkreten Haus wirklich enthalten und technisch nötig ist'),
      t('.'),
    ),
    summaryPoint(
      t('Nicht jedes Einfamilienhaus braucht denselben Aufwand. Gebäudezustand, Heizflächen, Aufstellort und bestehende Technik beeinflussen die Kosten oft deutlich.'),
    ),
    summaryPoint(
      t('Eine günstige Zahl auf dem Papier ist nicht automatisch das bessere Angebot. Wichtiger ist, ob die Lösung sauber geplant, vollständig gedacht und im Alltag technisch sinnvoll ist.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Wärmepumpe Kosten im Einfamilienhaus: Warum pauschale Preise oft wenig helfen')),
      p(
        t('Viele Hausbesitzer möchten beim Thema Wärmepumpe vor allem eines wissen: Was kostet das Ganze im Einfamilienhaus? Die Frage ist berechtigt – aber die Antwort wird in der Praxis oft zu simpel dargestellt.'),
      ),
      p(
        t('Denn die Kosten bestehen nicht nur aus dem Wärmepumpengerät. '),
        bold('Entscheidend ist das Gesamtsystem'),
        t(': also Montage, Hydraulik, Warmwasserlösung, Elektrik, Aufstellort, Einbindung in den Bestand und die Frage, welche Anpassungen im Haus wirklich nötig sind.'),
      ),
      p(
        t('Genau deshalb sind pauschale Lockpreise oft wenig hilfreich. Zwei Häuser können auf den ersten Blick ähnlich wirken und am Ende trotzdem einen deutlich unterschiedlichen Aufwand mitbringen.'),
      ),
    ),

    hinweisBlock(
      'Nicht nur das Gerät kostet Geld',
      p(
        t('Eine Wärmepumpe ist kein Einzelprodukt, das man einfach an die Wand hängt. Die realen Kosten entstehen aus Gerät, Einbindung, Umfeld und der technischen Situation im Haus.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Kostenblöcke bei einer Wärmepumpe wirklich eine Rolle spielen')),
      p(
        t('Wer die Kosten realistisch einordnen will, sollte das Projekt nicht als Gerätepreis betrachten, sondern in sinnvolle Bausteine zerlegen.'),
      ),
      ul(
        p(t('Wärmepumpengerät und Inneneinheit')),
        p(t('Warmwasserbereitung und Speicherlösung')),
        p(t('Montage und Verrohrung')),
        p(t('Hydraulische Einbindung ins Heizsystem')),
        p(t('Elektrik und Absicherung')),
        p(t('Regelung, Zubehör und Inbetriebnahme')),
        p(t('mögliche Anpassungen an Heizflächen oder Bestand')),
      ),
      p(
        t('Erst aus dieser Gesamtsicht wird klar, warum Angebote im Markt so stark auseinandergehen können. Nicht jede Differenz ist automatisch Abzocke – aber nicht jeder niedrige Preis ist automatisch ehrlich oder vollständig.'),
      ),
    ),

    tabelleBlock('Diese Bereiche beeinflussen die Wärmepumpen-Kosten im Einfamilienhaus', [
      {
        spalte1: 'Gerät',
        spalte2: 'sichtbarer Hauptposten',
        spalte3:
          'das Wärmepumpengerät selbst ist wichtig, bildet aber nur einen Teil der Gesamtkosten ab',
      },
      {
        spalte1: 'Montage',
        spalte2: 'stark objektspezifisch',
        spalte3:
          'Leitungswege, Aufstellort, Bestand und Zugänglichkeit beeinflussen den Aufwand teils deutlich',
      },
      {
        spalte1: 'Elektrik',
        spalte2: 'oft unterschätzt',
        spalte3:
          'Absicherung, Leitungswege, Verteiler und bestehende Hausinstallation können Mehrkosten auslösen',
      },
      {
        spalte1: 'Heizsystem',
        spalte2: 'entscheidet mit',
        spalte3:
          'je nach Bestand können hydraulische Anpassungen oder einzelne Maßnahmen an Heizflächen sinnvoll werden',
      },
      {
        spalte1: 'Warmwasser',
        spalte2: 'gehört zur Realität dazu',
        spalte3:
          'die Warmwasserlösung muss zum Haus und zum Nutzungsverhalten passen und beeinflusst den Projektumfang mit',
      },
    ]),

    textBlock(
      h('h2', t('Warum jedes Einfamilienhaus kostenmäßig anders sein kann')),
      p(
        t('Nicht jedes Einfamilienhaus bringt dieselben Voraussetzungen mit. Genau deshalb ist es fachlich zu grob, Wärmepumpenpreise so zu behandeln, als wäre jedes Haus ein Standardfall.'),
      ),
      p(
        t('Schon kleine Unterschiede können viel verändern: Ist die bestehende Elektrik gut vorbereitet oder muss nachgerüstet werden? Sind die Heizflächen bereits brauchbar oder braucht es punktuelle Anpassungen? Ist der Aufstellort einfach oder technisch anspruchsvoll?'),
      ),
      p(
        t('Auch das Gebäude selbst spielt hinein. '),
        bold('Ein Haus mit vernünftigem Bestand und klarer technischer Situation ist oft ganz anders zu bewerten als ein Gebäude mit mehreren offenen Baustellen'),
        t('. Genau deshalb sollte eine seriöse Kosteneinordnung immer vom konkreten Objekt ausgehen.'),
      ),
    ),

    tippBlock(
      'Der Bestand entscheidet mit',
      p(
        t('Nicht nur die Wärmepumpe selbst, sondern auch die Situation vor Ort bestimmt die Kosten. Wer diese Realität ausblendet, vergleicht oft nur schöne Zahlen statt belastbare Lösungen.'),
      ),
    ),

    textBlock(
      h('h2', t('Was Wärmepumpen-Angebote oft künstlich günstig wirken lässt')),
      p(
        t('Im Markt sieht man immer wieder Angebote, die auf den ersten Blick sehr attraktiv aussehen. Das Problem ist nur: Nicht jeder Preis bildet denselben Leistungsumfang ab.'),
      ),
      p(
        t('Manche Angebote wirken günstig, weil bestimmte Leistungen noch gar nicht sauber berücksichtigt wurden. Andere rechnen mit idealen Voraussetzungen, die vor Ort so nicht gegeben sind. Wieder andere lassen Spielräume offen, die später zu Nachträgen oder Zusatzaufwand führen.'),
      ),
      p(
        t('Genau deshalb sollte man sich nicht nur fragen, was ein Angebot kostet, sondern '),
        bold('was konkret enthalten ist und was möglicherweise noch fehlt'),
        t('.'),
      ),
    ),

    hinweisBlock(
      'Günstig ist nicht automatisch vollständig',
      p(
        t('Ein niedriger Einstiegspreis kann attraktiv wirken. Wirklich vergleichbar wird ein Angebot aber erst dann, wenn klar ist, welche Leistungen, Anpassungen und Voraussetzungen tatsächlich enthalten sind.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Punkte die Kosten häufig nach oben treiben')),
      p(
        t('Es gibt einige typische Gründe, warum ein Wärmepumpenprojekt im Einfamilienhaus aufwendiger wird als zunächst gedacht.'),
      ),
      ul(
        p(t('komplizierte Leitungswege oder schwieriger Aufstellort')),
        p(t('notwendige Arbeiten an Elektrik oder Verteilung')),
        p(t('hydraulische Anpassungen im Bestand')),
        p(t('punktuelle Maßnahmen an Heizkörpern oder Heizflächen')),
        p(t('schlecht vorbereitete oder unklare Bestandsituation')),
        p(t('fehlende saubere Planung im Vorfeld')),
      ),
      p(
        t('Wichtig ist dabei: Mehrkosten sind nicht automatisch ein Zeichen für schlechte Arbeit. Problematisch wird es eher dann, wenn offensichtliche Punkte in der Einordnung vorher gar nicht sauber auf dem Tisch lagen.'),
      ),
    ),

    tabelleBlock('Typische Kostentreiber im Bestand', [
      {
        spalte1: 'unklare Bestandslage',
        spalte2: 'führt oft zu Überraschungen',
        spalte3:
          'je schlechter der Bestand vorab eingeordnet wurde, desto größer ist das Risiko späterer Zusatzaufwände',
      },
      {
        spalte1: 'Elektrik',
        spalte2: 'häufig zu spät betrachtet',
        spalte3:
          'wenn Verteilung, Absicherung oder Leitungswege nicht passen, steigt der Aufwand schnell',
      },
      {
        spalte1: 'Hydraulik und Heizflächen',
        spalte2: 'technisch entscheidend',
        spalte3:
          'anpassungsbedürftige Heizflächen oder schwache Systemabstimmung beeinflussen die Kosten oft direkt',
      },
      {
        spalte1: 'Aufstellort',
        spalte2: 'praktisch relevant',
        spalte3:
          'Zugänglichkeit, Leitungsführung und Gerätesituation wirken sich unmittelbar auf die Montage aus',
      },
    ]),

    textBlock(
      h('h2', t('Sind günstige Wärmepumpen-Angebote automatisch schlecht?')),
      p(
        t('Nein. Ein günstigeres Angebot ist nicht automatisch unseriös. Es kann Gründe geben, warum ein Projekt bei einem Objekt schlanker und effizienter umgesetzt werden kann.'),
      ),
      p(
        t('Problematisch wird es erst dann, wenn ein Angebot nur deshalb günstig wirkt, weil wichtige Punkte nicht sauber berücksichtigt wurden oder weil es eher auf Verkaufswirkung als auf technische Belastbarkeit optimiert wurde.'),
      ),
      p(
        t('Deshalb sollte man nicht reflexhaft teuer gegen günstig stellen. Die bessere Frage lautet: '),
        bold('Ist die Lösung technisch sauber eingeordnet, vollständig gedacht und nachvollziehbar kalkuliert?'),
      ),
    ),

    tippBlock(
      'Nicht nur Preise vergleichen, sondern Leistungsbilder',
      p(
        t('Wer Angebote sinnvoll vergleichen will, sollte nicht nur auf die Endsumme schauen, sondern auf enthaltene Leistungen, Annahmen, technische Tiefe und mögliche Lücken im Umfang.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Rolle spielen Betrieb und Folgekosten?')),
      p(
        t('Bei der Frage nach den Wärmepumpen-Kosten im Einfamilienhaus denken viele zuerst nur an die Investition. Zur ehrlichen Einordnung gehört aber auch der spätere Betrieb.'),
      ),
      p(
        t('Denn eine Wärmepumpe ist nicht nur ein Anschaffungsthema. Auch Stromverbrauch, Effizienz, Regelung und die Frage, wie gut das System zum Haus passt, beeinflussen die Wirtschaftlichkeit über die Jahre.'),
      ),
      p(
        t('Genau deshalb ist ein vermeintlich günstiger Einstiegspreis nicht automatisch die beste Entscheidung. '),
        bold('Wenn eine Lösung technisch nicht sauber passt, kann sie im Betrieb unnötig teuer oder unruhig werden'),
        t('.'),
      ),
    ),

    hinweisBlock(
      'Nicht nur Investition, sondern Gesamtsystem betrachten',
      p(
        t('Eine Wärmepumpe sollte nicht nur beim Kauf, sondern auch im Alltag sinnvoll sein. Deshalb lohnt sich der Blick auf Planung, Effizienz und spätere Betriebssicherheit genauso wie auf den Anschaffungspreis.'),
      ),
    ),

    textBlock(
      h('h2', t('Typische Denkfehler beim Thema Wärmepumpen-Kosten')),
      p(
        t('Gerade bei den Kosten tauchen in der Praxis immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('nur den Gerätepreis betrachten')),
        p(t('Angebote nur über die Endsumme vergleichen')),
        p(t('Bestand und Elektrik zu wenig mitdenken')),
        p(t('technische Anpassungen als unnötigen Zusatz abtun')),
        p(t('günstige Einstiegspreise mit realen Gesamtkosten verwechseln')),
      ),
      p(
        t('Wer diese Punkte sauber trennt, bekommt meist eine deutlich bessere Grundlage für die Entscheidung als mit jeder Schnellbehauptung über den „üblichen Preis“ einer Wärmepumpe.'),
      ),
    ),

    tabelleBlock('Schneller Preisvergleich vs. saubere Einordnung', [
      {
        spalte1: 'nur Endpreis anschauen',
        spalte2: 'zu grob',
        spalte3:
          'ohne Leistungsumfang und Bestandsbezug ist die Aussagekraft gering',
      },
      {
        spalte1: 'Gerät als Hauptkriterium',
        spalte2: 'oft zu kurz gedacht',
        spalte3:
          'entscheidend ist das Gesamtsystem inklusive Montage, Einbindung und Anpassungen',
      },
      {
        spalte1: 'saubere Objektbewertung',
        spalte2: 'deutlich belastbarer',
        spalte3:
          'liefert eine realistischere Grundlage für Kosten, Vergleich und Erwartung',
      },
    ]),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die Kosten einer Wärmepumpe im Einfamilienhaus lassen sich nicht sauber auf einen pauschalen Gerätepreis reduzieren. Entscheidend ist das Zusammenspiel aus Gerät, Montage, Heizsystem, Elektrik, Warmwasser und den realen Anforderungen des Bestands.'),
      ),
      p(
        t('Nicht jedes Haus braucht denselben Aufwand. Genau deshalb lohnt sich eine ehrliche Einordnung mehr als jeder Lockpreis.'),
      ),
      p(
        t('Die bessere Frage ist am Ende nicht nur: Was kostet eine Wärmepumpe? Sondern: '),
        bold('Was ist in diesem konkreten Haus technisch sinnvoll und vollständig gedacht?'),
        t(' Genau dort beginnt eine belastbare Kostenbewertung.'),
      ),
    ),

    ctaBlock({
      titel: 'Lass uns die Wärmepumpen-Kosten für dein Einfamilienhaus ehrlich einordnen',
      text:
        'Wir schauen uns Bestand, Heizsystem, Elektrik, Aufstellort und technischen Aufwand gemeinsam an – praxisnah, sauber und ohne künstlichen Lockpreis.',
      buttonText: 'Wärmepumpe anfragen',
      buttonLink: '/waermepumpe',
    }),
  ],

  faq: [
    faqItem(
      'Wovon hängen die Kosten einer Wärmepumpe im Einfamilienhaus am meisten ab?',
      'Vor allem vom Gerät, vom Montageaufwand, vom Heizsystem, von der Elektrik, von der Warmwasserlösung und von der technischen Situation im Bestand.',
    ),
    faqItem(
      'Reicht es, nur den Gerätepreis zu vergleichen?',
      'Nein. Der Gerätepreis ist nur ein Teil der Gesamtkosten. Wirklich aussagekräftig wird der Vergleich erst, wenn auch Montage, Einbindung, Elektrik und mögliche Anpassungen mitgedacht werden.',
    ),
    faqItem(
      'Warum unterscheiden sich Wärmepumpen-Angebote oft so stark?',
      'Weil nicht jedes Einfamilienhaus dieselben Voraussetzungen mitbringt und weil Angebote nicht immer denselben Leistungsumfang oder dieselbe technische Tiefe abbilden.',
    ),
    faqItem(
      'Sind günstige Angebote automatisch unseriös?',
      'Nein. Günstigere Angebote können in bestimmten Fällen nachvollziehbar sein. Kritisch wird es dann, wenn der Preis nur deshalb niedrig wirkt, weil wichtige Leistungen oder Voraussetzungen nicht sauber berücksichtigt wurden.',
    ),
    faqItem(
      'Welche Punkte werden bei den Kosten häufig unterschätzt?',
      'Häufig unterschätzt werden Elektrik, hydraulische Einbindung, Leitungswege, Aufstellort, Heizflächen und der allgemeine Zustand des Bestands.',
    ),
    faqItem(
      'Sollte man bei Wärmepumpen nur auf die Investitionskosten schauen?',
      'Nein. Zur ehrlichen Einordnung gehören auch Effizienz, Stromverbrauch, Betrieb und die Frage, ob das Gesamtsystem technisch wirklich sauber zum Haus passt.',
    ),
  ],
}

await upsertRatgeberArticle(article)
