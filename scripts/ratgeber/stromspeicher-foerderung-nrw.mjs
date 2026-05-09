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
  titel: 'Stromspeicher Förderung NRW 2026: Was wirklich verfügbar ist',
  slug: 'stromspeicher-foerderung-nrw',
  kategorie: 'stromspeicher',
  status: 'veroeffentlicht',
  teaser:
    'Die Förderlandschaft für Stromspeicher in Nordrhein-Westfalen ist 2026 überschaubar. Eine landesweite Direktförderung gibt es aktuell nicht, kommunale Programme sind punktuell – im Niederrhein und Ruhrgebiet weitgehend nicht. Bundesweit bleiben KfW 270 und der 0 % USt-Vorteil als verlässliche Hebel.',
  lesezeit: 8,

  seo: seo(
    'Stromspeicher Förderung NRW 2026 | PEAK.Energy',
    'Stromspeicher Förderung NRW 2026: Ehrliche Übersicht über KfW 270, progres.nrw, kommunale Programme und den 0 % USt-Vorteil – ohne überzogene Versprechen.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Bundesweit gibt es 2026 '),
      bold('keinen Direktzuschuss für private Heimspeicher'),
      t(' – KfW 270 ist ein zinsgünstiger Kredit, kein Zuschuss.'),
    ),
    summaryPoint(
      t('Der '),
      bold('0 % USt-Vorteil seit 2023'),
      t(' senkt die Bruttokosten von PV-Anlagen mit Speicher unter bestimmten Voraussetzungen erheblich – das ist 2026 der wirtschaftlich relevanteste Förderhebel.'),
    ),
    summaryPoint(
      t('Auf Landesebene NRW: '),
      bold('progres.nrw ist Stand Anfang 2026 für private Speicher pausiert'),
      t(' – ein Neustart wurde angekündigt, der aktuelle Status sollte vor jedem Kauf bei der Bezirksregierung Arnsberg geprüft werden.'),
    ),
    summaryPoint(
      t('Auf kommunaler Ebene: punktuell vorhanden (z. B. Düsseldorf, Köln) – im Niederrhein und Ruhrgebiet aktuell weitgehend nicht. Wer kauft, sollte sich nicht auf Förderung verlassen, sondern eher auf eine saubere Auslegung.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('„Wie viel Förderung gibt es für meinen Speicher?" ist eine der häufigsten Fragen vor dem Kauf. Die ehrliche Antwort 2026: meist weniger, als man denkt – und in Nordrhein-Westfalen für die meisten Hauseigentümer aktuell sehr wenig.'),
      ),
      p(
        t('Die deutsche Förderlandschaft für Stromspeicher hat sich in den letzten Jahren stark verändert. Auf Bundesebene gibt es seit Jahren keinen Direktzuschuss mehr für private Heimspeicher – das KfW-Programm 275 wurde 2018 eingestellt, das ergänzende Programm 442 für Solar plus Wallbox plus Speicher ist 2024 ausgelaufen. Auf Landesebene sieht es in NRW ähnlich aus: '),
        bold('Stand Anfang 2026 ist progres.nrw für private Speicher pausiert'),
        t(', mit angekündigtem Neustart.'),
      ),
      p(
        t('Übrig bleiben drei Hebel: ein zinsgünstiger Bundeskredit, der Mehrwertsteuer-Vorteil seit 2023 und einzelne kommunale Programme. Wer 2026 einen Speicher plant, sollte diese Hebel kennen – aber auch realistisch einschätzen, was sie wirtschaftlich tatsächlich bringen.'),
      ),
    ),

    textBlock(
      h('h2', t('Bundesebene: KfW 270 und der 0 % USt-Vorteil')),
      p(
        t('Auf Bundesebene gibt es 2026 zwei verlässliche Förderwege.'),
      ),
      p(
        bold('KfW 270 „Erneuerbare Energien – Standard"'),
        t(' ist ein zinsgünstiger Kredit, kein Zuschuss. Gefördert werden Errichtung, Erweiterung und Erwerb von Anlagen zur Nutzung erneuerbarer Energien – inklusive Stromspeicher, auch als Nachrüstung. Laufzeit 5 bis 30 Jahre, der Zinssatz hängt von Bonität und Vorhaben ab. Antrag läuft über die Hausbank, '),
        bold('vor Vertragsabschluss'),
        t('. Wer den Kredit nach Auftragserteilung beantragt, geht leer aus.'),
      ),
      p(
        bold('Der 0 % Umsatzsteuersatz für PV-Anlagen mit Speicher'),
        t(' gilt seit 2023 für Anlagen unter bestimmten Voraussetzungen (Wohngebäude, Anlage bis 30 kWp, Speicher als Bestandteil der Lieferung). Praktisch bedeutet das: Auf den Bruttopreis fallen keine 19 % MwSt an. Das ist 2026 die wirtschaftlich relevanteste Förderung – sie wirkt wie ein Direktrabatt von 19 %.'),
      ),
      p(
        t('Wichtig zu wissen: Der 0 %-Satz greift nur, wenn der Speicher zusammen mit einer förderfähigen PV-Anlage geliefert und installiert wird. Wer einen Speicher rein als Nachrüstung an eine Bestandsanlage kauft, fällt je nach Auslegung des Steuerrechts wieder unter 19 % – die Details prüft der Steuerberater oder ein erfahrener Anbieter.'),
      ),
    ),

    textBlock(
      h('h2', t('Landesebene NRW: Status von progres.nrw')),
      p(
        t('Das Landesförderprogramm '),
        bold('progres.nrw'),
        t(' hat in den vergangenen Jahren Photovoltaik und Stromspeicher in Kombination gefördert – mit einer Bezuschussung pro nutzbarer Speicherkapazität. Die Antragsstellung wurde wegen hoher Nachfrage und Budgetfragen mehrfach pausiert.'),
      ),
      p(
        t('Stand Anfang 2026 ist progres.nrw für private Heimspeicher pausiert. Ein Neustart wurde für das erste Quartal 2026 angekündigt, der genaue Beginn und die konkreten Förderkonditionen waren bei Veröffentlichung dieses Artikels nicht abschließend festgelegt. Die '),
        bold('aktuelle Auskunft gibt es bei der Bezirksregierung Arnsberg'),
        t(' (zentrale Bewilligungsstelle für progres.nrw) – nicht in pauschalen Übersichtsartikeln und nicht auf Anbieter-Websites.'),
      ),
      p(
        t('Wer auf eine Landesförderung warten möchte, sollte das wissen: Die Programme sind in der Regel '),
        bold('schnell ausgeschöpft'),
        t(' und werden zum Antragsstart oft innerhalb weniger Wochen geschlossen. Antragstellung ausschließlich vor Auftragserteilung – wer schon installiert hat, kommt nicht mehr in das Programm.'),
      ),
    ),

    textBlock(
      h('h2', t('Kommunale Programme: Wo es welche gibt – und wo nicht')),
      p(
        t('Auf kommunaler Ebene gibt es in NRW einige Förderprogramme. Sie sind aber sehr ungleich verteilt und oft an Bedingungen geknüpft (z. B. Antrag vor Beauftragung, Kombination mit neuer PV-Anlage, jährliches Förderbudget begrenzt).'),
      ),
      p(
        bold('Programme mit Speicher-Förderung'),
        t(' gibt es 2026 unter anderem in Düsseldorf (250 € pro kWh Speicherkapazität, max. 10.000 € pro Objekt) und in Köln (500 bis 1.300 € pro kWh, abhängig von Programmstaffel). Beide Programme verlangen den Antrag vor Auftragserteilung.'),
      ),
      p(
        bold('Im Niederrhein und im weiteren Ruhrgebiet sieht es 2026 anders aus.'),
        t(' Städte wie Mönchengladbach, Krefeld, Duisburg, Wesel, Kleve oder Moers haben aktuell keine eigenen Speicher-Förderprogramme aufgelegt. Punktuell gibt es Klimaschutz-Initiativen einzelner Stadtwerke, die Energieberatung oder PV-Komponenten unterstützen – eine direkte Speicher-Bezuschussung in der Größenordnung der Düsseldorfer oder Kölner Programme ist selten.'),
      ),
      p(
        t('Wer wissen will, was im eigenen Wohnort verfügbar ist, fragt am besten direkt bei '),
        bold('Stadt, Kreis und Stadtwerken'),
        t(' nach. Die Förderdatenbank des Bundes (www.foerderdatenbank.de) listet aktuelle Programme – ist aber auf kommunaler Ebene nicht immer vollständig.'),
      ),
    ),

    tabelleBlock('Förderhebel für Stromspeicher 2026 in NRW', [
      {
        spalte1: 'KfW 270',
        spalte2: 'Zinsgünstiger Kredit, kein Zuschuss',
        spalte3:
          'bundesweit verfügbar – läuft über die Hausbank, Antrag vor Auftragserteilung. Spürbarer Zinsvorteil bei Finanzierung, aber kein Geschenk',
      },
      {
        spalte1: '0 % Umsatzsteuer',
        spalte2: 'Wirkt wie 19 % Direktrabatt auf den Bruttopreis',
        spalte3:
          'gilt für PV mit Speicher unter Voraussetzungen – wirtschaftlich der größte Hebel 2026, oft schon in den Angebotspreisen eingerechnet',
      },
      {
        spalte1: 'progres.nrw',
        spalte2: 'Landesförderung – Stand Anfang 2026 pausiert',
        spalte3:
          'angekündigter Neustart 2026, Konditionen offen – Status vor Kauf bei Bezirksregierung Arnsberg prüfen, nie verlassen, dass es zum eigenen Zeitpunkt wieder verfügbar ist',
      },
      {
        spalte1: 'Düsseldorf, Köln, Bonn',
        spalte2: 'Kommunale Programme mit Direktzuschuss',
        spalte3:
          'einige hundert Euro bis mehrere tausend Euro – nur in diesen Städten, Antrag vor Beauftragung Pflicht, Budget jährlich begrenzt',
      },
      {
        spalte1: 'Niederrhein und Ruhrgebiet',
        spalte2: 'Kommunal weitgehend keine Speicher-Förderung',
        spalte3:
          'in Städten wie Kleve, Wesel, Moers, Krefeld, Duisburg, Mönchengladbach gibt es 2026 keine eigene Speicher-Förderung – Stadtwerke-Programme prüfen, aber selten in nennenswerter Höhe',
      },
    ]),

    hinweisBlock(
      'Förderung ist nicht der Kaufgrund',
      p(
        t('Die Wirtschaftlichkeit eines Speichers entscheidet sich an Auslegung, Verbrauch und Preis – nicht primär an der Förderung. Wer auf Förderung wartet, die nie kommt oder schnell ausgeschöpft ist, verschiebt eine sinnvolle Investition aus dem falschen Grund. Wer eine bekommt, nimmt sie als Bonus mit. Eine ehrliche Wirtschaftlichkeitsrechnung sollte deshalb '),
        bold('ohne'),
        t(' Förderung schon stimmen.'),
      ),
    ),

    tippBlock(
      'Reihenfolge bei der Antragsstellung beachten',
      p(
        t('Bei fast allen Förderprogrammen – Bund, Land, Kommune – gilt: Antrag stellen, Bewilligung abwarten, dann erst Auftrag vergeben. Wer in der falschen Reihenfolge vorgeht, verliert den Anspruch. Ein seriöser Anbieter weist darauf hin und liefert die nötigen Unterlagen für den Antrag, statt Förderversprechen zu machen, die er nicht halten kann.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele bei der Förderung falsch einschätzen')),
      p(
        t('Bei der Frage „Welche Förderung gibt es?" tauchen immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('„Es gibt sicher eine Förderung – ich muss nur den richtigen Anbieter finden." Das stimmt 2026 nur in Ausnahmefällen. Anbieter, die mit „großzügigen Förderungen" werben, meinen oft den 0 % USt-Vorteil – der allen offen steht.')),
        p(t('Der KfW-Kredit wird mit einem Zuschuss verwechselt. Es ist ein Kredit. Der Vorteil liegt in den Konditionen, nicht in einer Auszahlung.')),
        p(t('Antragsfristen werden unterschätzt. Viele kommunale Budgets sind nach wenigen Wochen ausgeschöpft. Wer im November plant, hat im Programmjahr oft keine Chance mehr.')),
        p(t('„Förderung schließt Förderung nicht aus." Doch, oft schon. Bund-, Land- und Kommunalprogramme schließen sich teilweise aus – die Details stehen in den Förderrichtlinien.')),
        p(t('Die Förderhöhe wird über den Daumen geschätzt und in die Wirtschaftlichkeitsrechnung einbezogen, bevor sie tatsächlich bewilligt ist. Wer eine 4.000-Euro-Förderung einrechnet und dann 0 € bekommt, hat ein anderes Projekt vor sich als geplant.')),
      ),
      p(
        bold('Eine ehrliche Förderübersicht ist immer eine Momentaufnahme'),
        t(' – Programme ändern sich, werden eingestellt oder neu aufgelegt. Vor dem Kauf zählt der aktuelle Stand, nicht der Stand vom letzten Jahr.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die Förderlandschaft für Stromspeicher in NRW ist 2026 ehrlich gesagt überschaubar. Auf Bundesebene gibt es den KfW-Kredit und den 0 % USt-Vorteil – beides nutzbar, beides verlässlich. Auf Landesebene wartet NRW gerade auf einen Neustart von progres.nrw. Auf kommunaler Ebene gibt es Lichtblicke in einzelnen Großstädten – in den meisten Niederrhein- und Ruhrgebiet-Kommunen aktuell aber nichts.'),
      ),
      p(
        t('Wer einen Speicher 2026 plant, sollte deshalb nicht auf eine Förderung warten, die vielleicht nicht kommt. Sinnvoller ist eine ehrliche Wirtschaftlichkeitsrechnung, die ohne Förderung schon trägt – und die Förderung mitnimmt, wenn sie sich anbietet. Wer auf Verkäufer-Versprechen reinfällt, die mit „bis zu X € Förderung" werben, ohne den konkreten Anspruch zu prüfen, zahlt am Ende oft drauf.'),
      ),
      p(
        bold('Der wichtigste Hebel ist und bleibt eine saubere Auslegung'),
        t(' – ein passender Speicher zum richtigen Preis, sauber installiert. Das schlägt jede Förderung, die vielleicht doch nicht kommt.'),
      ),
    ),

    ctaBlock({
      titel: 'Speicher mit ehrlicher Förderprüfung kalkulieren',
      text:
        'Wir prüfen für deinen Wohnort, welche Förderhebel 2026 tatsächlich in Frage kommen – und kalkulieren das Angebot mit und ohne Förderung, damit du weißt, ob das Projekt auf eigenen Beinen steht.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Gibt es 2026 eine landesweite NRW-Förderung für Stromspeicher?',
      'Stand Anfang 2026 ist progres.nrw für private Heimspeicher pausiert. Ein Neustart wurde angekündigt, der genaue Status sollte vor jedem Kauf bei der Bezirksregierung Arnsberg geprüft werden. Eine andere landesweite Direktförderung gibt es aktuell nicht.',
    ),
    faqItem(
      'Welche Städte am Niederrhein fördern Stromspeicher?',
      'Aktuell wenige bis keine. Mönchengladbach, Krefeld, Duisburg, Wesel, Kleve, Moers haben 2026 keine eigenen Speicher-Förderprogramme. Punktuell gibt es Klimaschutz-Initiativen über Stadtwerke – meist für Energieberatung oder PV, selten für Speicher in nennenswerter Höhe. Direkt bei der Stadt nachfragen lohnt sich.',
    ),
    faqItem(
      'Wie funktioniert KfW 270?',
      'Es ist ein zinsgünstiger Kredit, kein Zuschuss. Gefördert werden PV-Anlagen, Speicher und Kombinationen. Antrag läuft über die Hausbank vor Auftragserteilung. Laufzeit 5 bis 30 Jahre. Der Zinsvorteil gegenüber einem Standardkredit ist spürbar, aber es gibt keine Auszahlung an den Bauherren.',
    ),
    faqItem(
      'Was ist der 0 % USt-Vorteil?',
      'Seit 2023 gilt für PV-Anlagen auf Wohngebäuden bis 30 kWp inkl. zugehörigem Speicher der Mehrwertsteuersatz von 0 %. Praktisch: Der Bruttopreis enthält keine 19 % MwSt – das wirkt wie ein direkter Rabatt. Voraussetzungen müssen erfüllt sein und werden vom Anbieter im Rechnungsbeleg ausgewiesen.',
    ),
    faqItem(
      'Wann muss man die Förderung beantragen?',
      'In nahezu allen Programmen vor Auftragserteilung. Wer Verträge unterschreibt oder Angebote annimmt und erst danach den Antrag stellt, verliert den Anspruch. Bei kommunalen Programmen kommt zusätzlich das jährliche Förderbudget – ist es ausgeschöpft, gibt es bis zum Folgejahr keine neuen Bewilligungen.',
    ),
    faqItem(
      'Lässt sich Förderung von Bund, Land und Kommune kombinieren?',
      'Manchmal ja, manchmal nein. KfW 270 (Kredit) ist in der Regel mit anderen Zuschüssen kombinierbar. Direktzuschüsse von Land und Kommune schließen sich oft gegenseitig aus. Die genauen Regeln stehen in den Förderrichtlinien jedes Programms – pauschale Aussagen sind nicht belastbar.',
    ),
  ],
}

await upsertRatgeberArticle(article)
