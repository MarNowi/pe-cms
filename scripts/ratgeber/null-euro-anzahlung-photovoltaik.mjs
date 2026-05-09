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
  titel: '0 € Anzahlung bei der Solaranlage: Was steckt wirklich dahinter?',
  slug: 'null-euro-anzahlung-photovoltaik',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'Anzahlungen von 30 bis 50 % des Anlagenpreises sind in der Solarbranche üblich – und ein Risiko, das bei der Insolvenzwelle 2024/2025 für viele Hauseigentümer real wurde. Was bedeutet eigentlich 0 € Anzahlung? Wie funktioniert das wirtschaftlich? Und wann ist es ein echter Schutz, wann nur ein Marketing-Versprechen?',
  lesezeit: 9,

  seo: seo(
    '0 € Anzahlung bei PV: Was bedeutet das wirklich? | PEAK.Energy',
    '0 € Anzahlung bei der Solaranlage: Wie übliche Anzahlungsmodelle funktionieren, was bei Insolvenz mit Ihrer Anzahlung passiert und wie ein echter Insolvenzschutz aussieht.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('In der Solarbranche sind Anzahlungen von '),
      bold('30 bis 50 % des Auftragswerts'),
      t(' bei Vertragsabschluss üblich. Das macht in vielen Fällen 8.000 bis 15.000 € beim Eigenheim.'),
    ),
    summaryPoint(
      t('Bei Insolvenz des Solarteurs ist die Anzahlung in der Regel '),
      bold('verloren'),
      t(' – sie ist eine Forderung im Insolvenzverfahren, in dem private Auftraggeber meist nichts oder nur Bruchteile zurückbekommen.'),
    ),
    summaryPoint(
      t('Die Insolvenzwelle 2024/2025 hat gezeigt: '),
      bold('Auch große Anbieter mit Werbung in TV und Plakaten gehen pleite'),
      t(' – die Größe des Anbieters ist kein Schutz für die Anzahlung.'),
    ),
    summaryPoint(
      t('„0 € Anzahlung" ist nur dann ein echter Schutz, wenn der Anbieter '),
      bold('das Anlagenkapital tatsächlich vorfinanzieren kann'),
      t(' – nicht alle, die so werben, halten das wirtschaftlich durch.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('Wer eine Solaranlage kauft, unterschreibt in der Regel einen Werkvertrag mit einem Solarteur. Im Vertrag steht nicht nur, was geliefert wird, sondern auch, '),
        bold('wann wie viel zu zahlen ist'),
        t('. Üblich sind in der Branche Anzahlungen von 30 bis 50 % bei Vertragsabschluss, eine zweite Rate bei Materiallieferung und der Restbetrag nach Inbetriebnahme.'),
      ),
      p(
        t('Das ist legitim und nicht ungewöhnlich. Solarteure müssen Material vorfinanzieren, Mitarbeiter bezahlen und Material in den Lagern oder schon auf dem Dach haben, bevor die Inbetriebnahme stattfindet. Wer die ganze Investition vorstrecken will, braucht einen entsprechenden Cashflow oder eine Bankenfinanzierung.'),
      ),
      p(
        t('Das Problem: '),
        bold('Wenn der Solarteur zwischen Anzahlung und Fertigstellung insolvent wird'),
        t(', ist die Anzahlung des Kunden meist verloren. Genau das ist 2024 und 2025 bei vielen Anbietern passiert – mit echten Schäden für echte Hauseigentümer. Wer sich heute für eine Solaranlage entscheidet, sollte das Risiko zumindest verstehen.'),
      ),
    ),

    textBlock(
      h('h2', t('Die typischen Anzahlungsmodelle in der Branche')),
      p(
        t('Die meisten Solarteure arbeiten mit einem von drei Modellen.'),
      ),
      ul(
        p(
          bold('30/30/40 oder 50/50'),
          t(' – Anzahlung bei Vertragsabschluss, Zwischenrate bei Lieferung, Restbetrag nach Inbetriebnahme. Klassisches Werkvertrags-Modell, in der Branche weit verbreitet.'),
        ),
        p(
          bold('Hohe Anzahlung 60–70 %'),
          t(' bei Auftragserteilung. Wird vor allem bei hochpreisigen Komplettsystemen genutzt – und ist das mit Abstand riskanteste Modell für Kunden. Bei einer 25.000-€-Anlage liegen damit 15.000 bis 17.500 € beim Anbieter, bevor das erste Modul auf dem Dach ist.'),
        ),
        p(
          bold('Zahlung erst nach Inbetriebnahme'),
          t(' (oder „nach Fertigstellung"). Das günstigste Modell für Kunden, wirtschaftlich für den Anbieter aber nur möglich, wenn er erhebliches Working Capital oder eine Bankenfinanzierung hat.'),
        ),
      ),
      p(
        t('Das dritte Modell ist die '),
        bold('„0 € Anzahlung"-Variante'),
        t(' – meistens kombiniert mit einer Anzahlung erst nach Materiallieferung oder einem reinen Zahlungsplan nach Inbetriebnahme. Das ist nicht überall üblich, weil es vom Anbieter ein anderes Geschäftsmodell verlangt.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bei Insolvenz mit der Anzahlung passiert')),
      p(
        t('Geht der Solarteur insolvent, steht der Insolvenzverwalter zwischen dem Kunden und seinem Geld. In den meisten Fällen ist das Bild ernüchternd.'),
      ),
      p(
        bold('Die Anzahlung ist eine ungesicherte Forderung'),
        t(' im Insolvenzverfahren. Sie wird im Nachgang eingereicht, vom Verwalter geprüft und – wenn überhaupt – in Bruchteilen ausgezahlt. Übliche Insolvenzquoten in der Solarbranche 2024/2025: '),
        bold('zwischen 0 % und 8 %'),
        t('. Wer 12.000 € angezahlt hat, bekommt im Schnitt 0 bis 1.000 € zurück.'),
      ),
      p(
        bold('Bestellte Materialien gehen oft an den Insolvenzverwalter'),
        t(' – auch wenn sie eigentlich für den Kundenauftrag bestimmt waren. Es sei denn, eine Eigentumsvorbehalts-Klausel oder eine Verfügungsbeschränkung greift. In der Praxis selten zugunsten des Privatkunden.'),
      ),
      p(
        bold('Den Auftrag muss der Kunde neu vergeben'),
        t(' – an einen anderen Solarteur, der die halb fertige Anlage übernimmt. Das ist möglich, kostet aber meist deutlich mehr als der ursprüngliche Vertrag, weil der neue Anbieter Risiken einpreist.'),
      ),
      p(
        t('Die Insolvenzwelle in der Solarbranche 2024/2025 hat gezeigt: '),
        bold('Auch große, bekannte Anbieter sind nicht immun'),
        t('. Hauseigentümer mit Anzahlungen im fünfstelligen Bereich standen plötzlich ohne Geld und ohne fertige Anlage da.'),
      ),
    ),

    tabelleBlock('Anzahlungsmodelle und tatsächliches Kundenrisiko', [
      {
        spalte1: '50 % Anzahlung',
        spalte2: 'Risiko bei Insolvenz: 50 % des Auftragswerts',
        spalte3:
          'Klassisches Modell – bei einer 25.000-€-Anlage liegen 12.500 € im Risiko zwischen Vertrag und Inbetriebnahme',
      },
      {
        spalte1: '30 % Anzahlung',
        spalte2: 'Risiko bei Insolvenz: 30 % des Auftragswerts',
        spalte3:
          'Mittelweg – bei 25.000 € sind 7.500 € im Risiko, plus 30 % bei Materiallieferung. In Summe oft 50–60 % Risiko vor Inbetriebnahme',
      },
      {
        spalte1: '60–70 % Anzahlung',
        spalte2: 'Risiko bei Insolvenz: bis zu 70 %',
        spalte3:
          'Hochpreisige Komplettsysteme oder problematische Anbieter – bei 25.000 € liegen bis zu 17.500 € im Risiko. Hier besondere Vorsicht',
      },
      {
        spalte1: '0 % Anzahlung (echte)',
        spalte2: 'Risiko bei Insolvenz: 0 € (vor Lieferung)',
        spalte3:
          'Erst Zahlung bei oder nach Materiallieferung – dann sind die Module schon vor Ort und gehen meist über zum Käufer. Risiko fast nicht vorhanden, wenn Eigentumsübergang sauber geregelt ist',
      },
      {
        spalte1: 'Bürgschaft / Anzahlungsgarantie',
        spalte2: 'Risiko bei Insolvenz: gedeckt',
        spalte3:
          'Eine Bankbürgschaft sichert die Anzahlung im Insolvenzfall ab – kostet den Anbieter Gebühren und ist deshalb selten kostenlos. Aber: echter Schutz, wenn vorhanden',
      },
    ]),

    hinweisBlock(
      'Insolvenzschutz ist nicht gleich Insolvenzschutz',
      p(
        t('Wenn ein Anbieter mit „Insolvenzschutz" wirbt, lohnt der Blick ins Detail. Eine '),
        bold('Bankbürgschaft auf erste Anforderung'),
        t(' ist ein echter Schutz – das Geld ist von einer Bank garantiert, unabhängig von der Insolvenz des Anbieters. Eine reine '),
        bold('Verzichtserklärung'),
        t(' oder ein Vertragspassus ohne externe Sicherheit hilft im Insolvenzfall meist nicht. Wer das Konzept genau verstehen will, lässt sich die Bürgschaftsurkunde zeigen, bevor er unterschreibt.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann „0 € Anzahlung" ein echter Schutz ist')),
      p(
        t('Nicht jeder Anbieter, der mit „0 € Anzahlung" wirbt, hält dieses Versprechen wirtschaftlich nachhaltig durch. Es kommt auf den Hintergrund an.'),
      ),
      p(
        bold('Echte 0 € Anzahlung funktioniert, wenn der Anbieter:'),
      ),
      ul(
        p(t('Substanzielles Eigenkapital oder eine Bankenfinanzierung hat, mit der er Material und Lohn vorfinanzieren kann')),
        p(t('Eine niedrige Insolvenzwahrscheinlichkeit aufweist – nachweisbar über Geschäftsalter, Branchenruf, Eigentümerstruktur')),
        p(t('Die Vertragsdetails so regelt, dass das Material spätestens bei Lieferung im Eigentum des Kunden steht – damit es bei späterer Insolvenz nicht in die Insolvenzmasse fällt')),
        p(t('Trotz „0 € Anzahlung" mit klaren Zahlungsmeilensteinen arbeitet (z. B. nach Materiallieferung) – das ist akzeptabel, weil das Material dann beim Kunden ist')),
      ),
      p(
        bold('Vorsicht ist geboten, wenn der Anbieter:'),
      ),
      ul(
        p(t('„0 € Anzahlung" mit ungewöhnlich niedrigen Preisen kombiniert – das kann ein Warnsignal sein')),
        p(t('Sehr aggressiv wirbt und auf schnelle Vertragsabschlüsse drängt')),
        p(t('Im Vertrag Klauseln hat, die nach Materiallieferung doch eine Anzahlung verlangen, ohne dass das im Werbematerial stand')),
        p(t('Erst seit kurzer Zeit am Markt ist und keine nachprüfbare Bilanzhistorie hat')),
      ),
    ),

    tippBlock(
      'Anzahlung absichern – auch ohne 0 €-Modell',
      p(
        t('Wenn der gewählte Anbieter mit Anzahlung arbeitet, lassen sich Risiken trotzdem reduzieren. Möglich sind: eine '),
        bold('Bankbürgschaft auf erste Anforderung'),
        t(' (gegen einen kleinen Aufpreis vom Anbieter zu bekommen, deckt die Anzahlung ab), eine '),
        bold('Treuhandzahlung'),
        t(' (Anzahlung an einen Notar oder Treuhänder, der erst bei Lieferung freigibt) oder eine '),
        bold('Eigentumsvorbehalt-Klausel mit Direkteigentum'),
        t(' am gelieferten Material. Wer das beim Anbieter anfragt und keine Auskunft bekommt, hat einen klaren Hinweis auf die wirtschaftliche Situation.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele bei Anzahlungen falsch einschätzen')),
      p(
        t('Bei der Anzahlungsfrage tauchen immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('„Der Anbieter ist groß und bekannt, da kann nichts passieren." Stimmt nicht. Die Insolvenzwelle 2024/2025 hat auch große, bundesweit aktive Anbieter erwischt – Plakatwerbung schützt nicht vor Insolvenz.')),
        p(t('„Ich bekomme im Schlimmsten Fall die Anzahlung von der Versicherung zurück." Stimmt nur, wenn der Anbieter eine entsprechende Bürgschaft oder Anzahlungsgarantie für genau diesen Auftrag stellt – das ist die Ausnahme, nicht die Regel.')),
        p(t('Die Insolvenzquote wird als kalkulierbares Risiko gesehen. In der Praxis liegen Quoten zwischen 0 und 8 % – wer 12.000 € anzahlt, sollte mental von 0 € Rückzahlung ausgehen.')),
        p(t('„0 € Anzahlung ist immer besser." Nicht zwingend. Wenn der Anbieter mit 0 € wirbt, aber wirtschaftlich nicht stabil ist, sind die Folgen für den Kunden ähnlich – nur dass das Risiko sich in andere Vertragsphasen verschiebt.')),
        p(t('Eigentumsvorbehalt am Material wird unterschätzt. Eine saubere Klausel kann im Insolvenzfall den Unterschied machen, ob das Material beim Kunden bleibt oder in die Insolvenzmasse fällt.')),
        p(t('„Bürgschaft und Insolvenzschutz sind dasselbe." Sind sie nicht. Eine Bankbürgschaft auf erste Anforderung ist echter Schutz – „Insolvenzschutz" ohne externe Sicherheit ist oft nur Marketing.')),
      ),
      p(
        bold('Eine ehrliche Einordnung von Anzahlungen braucht den Blick auf das Geschäftsmodell des Anbieters'),
        t(' – nicht das Werbeversprechen.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Anzahlungen sind in der Solarbranche üblich und nicht per se schlecht – sie spiegeln das Working-Capital-Bedürfnis der Solarteure wider. Sie werden zum Problem, wenn der Anbieter zwischen Anzahlung und Fertigstellung insolvent wird. Das ist 2024 und 2025 vielen Hauseigentümern passiert, mit Schäden im fünfstelligen Bereich.'),
      ),
      p(
        t('„0 € Anzahlung" ist ein echter Schutz, wenn der Anbieter dieses Modell wirtschaftlich nachhaltig anbieten kann. Es ist kein Schutz, wenn es nur Marketing ist und im Vertrag versteckte Zwischenzahlungen stehen. Eine '),
        bold('Bankbürgschaft auf erste Anforderung'),
        t(' ist die wirtschaftlich verlässlichste Absicherung – sie funktioniert unabhängig vom Geschäftsmodell.'),
      ),
      p(
        bold('Wer eine Solaranlage kauft, sollte die Vertragsdetails verstehen, bevor er unterschreibt'),
        t(' – Anzahlungshöhe, Eigentumsvorbehalt, Bürgschaftsregelung, Zahlungsmeilensteine. Wer sich darauf verlässt, dass „der Anbieter schon nicht insolvent geht", übernimmt ein Risiko, das in der Praxis real ist.'),
      ),
    ),

    ctaBlock({
      titel: 'Solaranlage ohne Anzahlungsrisiko',
      text:
        'Wir arbeiten ohne Anzahlung – Material und Arbeit werden vorfinanziert, gezahlt wird erst nach Lieferung. Das geht, weil wir wirtschaftlich stabil sind und es uns wichtig ist.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Warum verlangen viele Solar-Anbieter eine Anzahlung?',
      'Solarteure müssen Material und Personal vorfinanzieren, bevor die Anlage in Betrieb geht. Wer das eigene Kapital begrenzt hält, finanziert sich über Anzahlungen. Das ist legitimes Geschäftsmodell – aber es überträgt das Insolvenzrisiko teilweise auf den Kunden. Anbieter mit substanzieller Eigenkapitalausstattung oder Bankenfinanzierung können auf Anzahlung verzichten, ohne wirtschaftlich Probleme zu bekommen.',
    ),
    faqItem(
      'Was passiert mit meiner Anzahlung bei Insolvenz des Solarteurs?',
      'In der Regel ist sie verloren oder es gibt einen Bruchteil zurück. Die Anzahlung ist eine ungesicherte Forderung im Insolvenzverfahren – Insolvenzquoten in der Solarbranche 2024/2025 lagen bei 0 bis 8 %. Wer 12.000 € angezahlt hat, sollte realistisch mit 0 bis 1.000 € Rückzahlung rechnen.',
    ),
    faqItem(
      'Ist 0 € Anzahlung wirklich möglich?',
      'Ja, wenn der Anbieter wirtschaftlich stabil ist und Material plus Lohn vorfinanzieren kann. Solche Anbieter haben entweder substanzielles Eigenkapital, eine Bankenlinie oder ein Geschäftsmodell, das sie tragen können. „0 € Anzahlung" als reines Marketing ohne wirtschaftliche Substanz dahinter ist riskant – das Risiko verschiebt sich nur in andere Phasen des Auftrags.',
    ),
    faqItem(
      'Wie erkenne ich seriöse Solar-Anbieter?',
      'Mehrere Indikatoren: Geschäftsalter (Firmen mit langer Bestandshistorie sind weniger insolvenzgefährdet), Eigentümerstruktur (inhabergeführt vs. Investoren-getrieben), Standortbindung (regionale Meisterbetriebe sind tendenziell stabiler als bundesweit aggressiv expandierende Anbieter), Ausstellung von Bürgschaften oder Anzahlungsgarantien, transparente Vertragsdetails und realistische Preise. Ungewöhnlich niedrige Preise mit hoher Anzahlung sind ein Warnsignal.',
    ),
    faqItem(
      'Was sind typische Bonitätsprobleme bei Solarteuren 2024/2025?',
      'Aggressives Wachstum mit dünner Kapitaldecke, hohe Lagerbestände bei sinkenden Materialpreisen (Modul- und Batteriepreise sind in den letzten Jahren stark gefallen), nicht erfüllbare Ablieferversprechen, Auftragsbestände, die das Personal nicht mehr abarbeiten kann. Anbieter, die in der Insolvenzwelle untergegangen sind, hatten oft kombinierte Probleme aus diesen Faktoren.',
    ),
    faqItem(
      'Was bedeutet „Bürgschaft" oder „Insolvenzschutz" wirklich?',
      'Eine Bankbürgschaft auf erste Anforderung ist eine bankseitige Garantie für die Anzahlung – das Geld ist unabhängig von der Solvenz des Anbieters geschützt. Sie kostet den Anbieter Bankgebühren und ist deshalb selten kostenlos. „Insolvenzschutz" als Vertragspassus ohne externe Sicherheit hilft im echten Insolvenzfall meist nicht. Wer ein Bürgschaftsdokument vorgelegt bekommt, hat echten Schutz – wer nur eine Vertragsklausel bekommt, sollte nachfragen.',
    ),
  ],
}

await upsertRatgeberArticle(article)
