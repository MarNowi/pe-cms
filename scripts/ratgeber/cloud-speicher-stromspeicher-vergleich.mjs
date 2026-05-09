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
  titel: 'Cloud-Speicher und virtuelle Stromspeicher: Lohnt sich das wirklich?',
  slug: 'cloud-speicher-stromspeicher-vergleich',
  kategorie: 'stromspeicher',
  status: 'veroeffentlicht',
  teaser:
    'Cloud-Speicher klingt nach der eleganten Lösung: PV-Überschuss „in die Cloud" einspeisen, im Winter wieder abrufen. In der Praxis ist es ein Tarifmodell, kein physischer Speicher – mit Vor- und Nachteilen, die in den Werbeprospekten selten ehrlich stehen.',
  lesezeit: 10,

  seo: seo(
    'Cloud-Speicher und virtuelle Stromspeicher: Sinnvoll? | PEAK.Energy',
    'Cloud-Speicher kritisch erklärt: Wie virtuelle Stromspeicher wirklich funktionieren, was sie kosten, wo Vertragsfallen lauern und ob sie sich wirtschaftlich rechnen.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein Cloud-Speicher ist '),
      bold('kein physischer Speicher'),
      t(' – sondern ein Tarifmodell. Der Stromüberschuss wird ins Netz gespeist und „virtuell gutgeschrieben", später kann eine entsprechende Menge wieder bezogen werden.'),
    ),
    summaryPoint(
      t('Wirtschaftlich macht das oft '),
      bold('nicht den Unterschied, der versprochen wird'),
      t('. Monatliche Grundgebühren, Bezugslimits und Vertragslaufzeiten fressen einen großen Teil des Vorteils.'),
    ),
    summaryPoint(
      t('Der Strom wird '),
      bold('nicht physisch zwischengespeichert'),
      t(' – er wird sofort verbraucht (von anderen Netznutzern). Wer im Dezember „seinen" Sommerstrom abruft, bekommt aktuellen Netzstrom.'),
    ),
    summaryPoint(
      t('Vertragslaufzeiten von '),
      bold('5 bis 25 Jahren'),
      t(' und Anbieter-Insolvenzrisiko sind die größten Schwachstellen. Wer sich für 20 Jahre an einen Anbieter bindet, übernimmt dessen Geschäftsmodellrisiko.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('„Speichern Sie Ihren Sommerstrom für den Winter – mit unserem Cloud-Speicher." Solche Versprechen sind in der PV-Werbung allgegenwärtig. Sie klingen logisch und attraktiv: Was ich im Sommer zu viel produziere, hole ich mir im Dezember wieder. Das wäre die Lösung des größten Problems jeder PV-Anlage – des saisonalen Versatzes zwischen Erzeugung und Verbrauch.'),
      ),
      p(
        t('Die ehrliche Antwort lautet: Ein Cloud-Speicher ist '),
        bold('keine technische Lösung dieses Problems – sondern eine wirtschaftliche Verpackung'),
        t('. Der Strom wird nicht physisch über Monate zwischengespeichert. Stattdessen wird die im Sommer eingespeiste Menge auf einem virtuellen Konto „gutgeschrieben", und später wird eine entsprechende Menge aus dem Netz bezogen – zu vergünstigten Konditionen.'),
      ),
      p(
        t('Das ist kein Betrug. Es ist ein legitimes Tarifmodell. Aber es ist nicht das, was die Werbung suggeriert. Wer das versteht, kann ehrlich einordnen, ob sich Cloud-Speicher für ihn rechnen.'),
      ),
    ),

    textBlock(
      h('h2', t('Was Cloud-Speicher tatsächlich sind')),
      p(
        t('Hinter einem Cloud-Speicher (auch: virtueller Stromspeicher, Stromcloud) steht ein Vertrag mit einem Energieversorger oder Anbieter. Der Vertrag funktioniert in groben Zügen so:'),
      ),
      ul(
        p(
          bold('PV-Überschuss wird ins Netz eingespeist'),
          t(' – wie bei jeder PV-Anlage. Die eingespeiste kWh wird auf einem Cloud-Konto verbucht.'),
        ),
        p(
          bold('Wenn Strom benötigt wird'),
          t(' (abends, nachts, im Winter) und das Cloud-Konto Guthaben hat, wird Strom aus dem Netz bezogen – zu einem reduzierten Preis oder „gegen Verrechnung mit dem Guthaben".'),
        ),
        p(
          bold('Übersteigt der Bezug das Guthaben'),
          t(', wird normaler Tarif berechnet. Übersteigt das Guthaben den Bezug, verfällt es nach Vertragsdetails (oft jährlich oder zum Vertragsende).'),
        ),
      ),
      p(
        t('Es ist also '),
        bold('kein Speicher'),
        t(' im technischen Sinn. Der Sommerstrom wird im Sommer von anderen Netznutzern verbraucht – das Netz kann Strom nicht über Monate halten. Was bleibt, ist eine Buchungslogik: Anbieter A hat im Juli vom Kunden 500 kWh bekommen, im Dezember liefert er 500 kWh „aus dem Cloud-Guthaben" – tatsächlich aktuellen Netzstrom.'),
      ),
    ),

    textBlock(
      h('h2', t('Was die Anbieter versprechen – und was wirklich passiert')),
      p(
        t('Werbeaussagen und Realität klaffen bei Cloud-Speichern oft auseinander. Wer den Vertrag verstanden hat, sieht den Unterschied klar.'),
      ),
      p(
        bold('Werbeversprechen 1: „Speichern Sie Ihren Solarstrom unbegrenzt"'),
        t('. Realität: Es gibt fast immer ein '),
        bold('jährliches Bezugslimit'),
        t(', das den Cloud-Bezug deckelt. Wer mehr Strom braucht, als die Cloud erlaubt, zahlt regulären Netztarif.'),
      ),
      p(
        bold('Werbeversprechen 2: „Sie werden energieautark"'),
        t('. Realität: Energieautarkie heißt eigene Produktion und eigener Speicher. Cloud-Speicher ist Bezug aus dem Netz – mit allem, was dazugehört (Netzentgelte, Konzessionsabgaben, EEG-Umlage in den Tarifen). Autarkie ist das Gegenteil.'),
      ),
      p(
        bold('Werbeversprechen 3: „Sie sparen 100 % der Stromkosten"'),
        t('. Realität: Cloud-Speicher haben '),
        bold('monatliche Grundgebühren'),
        t(' (typisch 15–40 € pro Monat) und einen reduzierten Tarif – nicht null. Über 12 Monate gerechnet sind das 180 bis 480 € fixe Kosten, bevor eine kWh fließt.'),
      ),
      p(
        bold('Werbeversprechen 4: „Lebenslang ohne Stromrechnung"'),
        t('. Realität: Vertragslaufzeit oft 10 bis 25 Jahre. Wer früher kündigt, hat Restkosten. Wer länger lebt, muss neu abschließen – zu dann gültigen Konditionen.'),
      ),
    ),

    tabelleBlock('Cloud-Speicher vs. eigener Hausspeicher im Vergleich', [
      {
        spalte1: 'Investition',
        spalte2: 'Cloud: 0 € · Hausspeicher: 9.000–13.500 €',
        spalte3:
          'Cloud spart die Anschaffung – dafür laufen monatliche Grundgebühren, oft auf 20+ Jahre vertraglich gebunden',
      },
      {
        spalte1: 'Monatliche Grundgebühr',
        spalte2: 'Cloud: 15–40 € · Hausspeicher: 0 €',
        spalte3:
          'Über 20 Jahre macht das 3.600 € bis 9.600 € Grundgebühr ohne jede gelieferte kWh',
      },
      {
        spalte1: 'Vertragsbindung',
        spalte2: 'Cloud: 5–25 Jahre · Hausspeicher: keine',
        spalte3:
          'Ein eigener Speicher ist nach Kauf flexibel nutzbar – Cloud-Verträge binden lange und sind nur eingeschränkt kündbar',
      },
      {
        spalte1: 'Strom wirklich gespeichert?',
        spalte2: 'Cloud: nein (virtuell) · Hausspeicher: ja (physisch)',
        spalte3:
          'Cloud ist eine Buchungslogik, kein Speicher – bei Stromausfall hilft sie nicht. Ein Hausspeicher mit Notstrom liefert weiter',
      },
      {
        spalte1: 'Saisonaler Ausgleich',
        spalte2: 'Cloud: ja, im Vertragsrahmen · Hausspeicher: nein',
        spalte3:
          'Hier hat Cloud einen echten Punkt: Sommer-Winter-Ausgleich ist mit Hausspeichern wirtschaftlich nicht machbar',
      },
      {
        spalte1: 'Anbieter-Insolvenzrisiko',
        spalte2: 'Cloud: hoch · Hausspeicher: gering',
        spalte3:
          'Geht der Cloud-Anbieter pleite, ist das Cloud-Guthaben oft weg – ein eigener Speicher gehört dem Eigentümer',
      },
    ]),

    hinweisBlock(
      'Vertragslaufzeit ist die unterschätzte Schwachstelle',
      p(
        t('Cloud-Speicher-Verträge laufen typischerweise 10, 15 oder 25 Jahre. Wer einen 20-Jahres-Vertrag abschließt, '),
        bold('übernimmt 20 Jahre lang das Geschäftsrisiko des Anbieters'),
        t('. Geht der Anbieter pleite, sind Cloud-Guthaben in der Regel verloren – sie sind keine Forderung im Insolvenzverfahren, sondern ein Vertragsversprechen ohne Substanz. Wer 2026 einen 25-Jahres-Vertrag unterschreibt, wettet darauf, dass der Anbieter bis 2051 zahlungsfähig ist. Das ist eine sehr lange Wette.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann sich ein Cloud-Speicher dennoch rechnen kann')),
      p(
        t('Trotz der berechtigten Kritik gibt es Konstellationen, in denen ein Cloud-Speicher wirtschaftlich attraktiv ist – wenn man die Schwächen kennt und mit ihnen leben kann.'),
      ),
      ul(
        p(
          bold('Hoher Stromverbrauch im Winter'),
          t(' – wenn der Wärmepumpen- oder E-Auto-Bedarf in der dunklen Jahreszeit deutlich über die PV-Produktion hinausgeht, kann der saisonale Ausgleich der Cloud rechnerisch helfen. Voraussetzung: das Bezugslimit der Cloud passt zum tatsächlichen Bedarf.'),
        ),
        p(
          bold('Keine Investitionsmöglichkeit für Hausspeicher'),
          t(' – wer keine 10.000 € für einen Speicher in die Hand nehmen will und mit der Vertragslaufzeit lebt, kann mit Cloud rechnerisch ähnlich abschneiden wie mit einem eigenen Speicher.'),
        ),
        p(
          bold('Geringe Komplexitätsbereitschaft'),
          t(' – ein Hausspeicher braucht Wartung und nimmt Platz ein. Wer das nicht will, hat mit Cloud weniger Aufwand. Dafür langjährige Vertragsbindung.'),
        ),
      ),
      p(
        t('Wichtig: Diese Konstellationen sind '),
        bold('Spezialfälle'),
        t('. Im Standardfall – Eigenheim, normaler Verbrauch, Investitionsmöglichkeit – ist der eigene Hausspeicher fast immer wirtschaftlich besser.'),
      ),
    ),

    tippBlock(
      'Vertragsdetails vor Unterschrift prüfen',
      p(
        t('Wer einen Cloud-Speicher in Erwägung zieht, sollte vor Unterschrift mindestens diese Punkte klären: Was passiert mit Cloud-Guthaben am Vertragsende? Bei Anbieterwechsel? Bei Insolvenz? Wie hoch ist das Bezugslimit? Was kostet eine kWh über dem Limit? Wie ist die Kündigung geregelt? Gibt es eine Bürgschaft oder Insolvenzschutz? Wer auf diese Fragen keine schriftliche Antwort bekommt, sollte die Finger von dem Vertrag lassen.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele bei Cloud-Speichern falsch einschätzen')),
      p(
        t('Bei der Frage „lohnt sich ein Cloud-Speicher" tauchen immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('„Mein Sommerstrom wird im Winter zurückgegeben." Stimmt physikalisch nicht. Es ist eine Buchungslogik – der Strom wird sofort verbraucht. Im Winter kommt aktueller Netzstrom.')),
        p(t('„Ich werde energieautark." Stimmt nicht. Bezug aus dem Netz ist das Gegenteil von Autarkie. Bei Stromausfall liefert die Cloud genau gar nichts.')),
        p(t('„Cloud ist günstiger als Hausspeicher." Über 20 Jahre meistens nicht – die monatlichen Grundgebühren summieren sich auf den Hausspeicher-Anschaffungspreis und mehr.')),
        p(t('Die Vertragslaufzeit wird beim Vergleich übersehen. Ein 25-Jahres-Vertrag mit 30 € Grundgebühr/Monat = 9.000 € fixe Kosten. Plus reduzierter Tarif für jede bezogene kWh.')),
        p(t('„Beim Anbieter-Wechsel kann ich einfach kündigen." Selten so einfach. Vertragsdetails prüfen – manche Anbieter erlauben nur zum Ende der Mindestlaufzeit.')),
        p(t('„Wenn der Anbieter insolvent ist, übernimmt jemand anderes." Stimmt nicht. Cloud-Guthaben ist meist keine durchsetzbare Forderung – sondern ein Vertragsversprechen, das mit dem Anbieter verschwindet.')),
        p(t('Cloud-Speicher und PEAK.Flex werden in einen Topf geworfen. Sie sind grundverschiedene Konzepte – Cloud ist Bezugslogik, Flexibilität-Pools verkaufen Netzdienstleistungen am Markt und teilen Erlöse. Das ist ein anderes Geschäftsmodell.')),
      ),
      p(
        bold('Eine ehrliche Bewertung von Cloud-Speichern braucht den Blick auf das gesamte Vertragsmodell'),
        t(' – nicht nur das Werbeversprechen.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Cloud-Speicher sind kein Betrug, aber auch nicht das, was die Werbung verspricht. Sie sind ein Tarifmodell mit langer Vertragsbindung – wer die Bindung akzeptiert und einen Anwendungsfall hat, in dem der saisonale Ausgleich wirklich relevant ist, kann damit rechnen. Im Standardfall liegt der eigene Hausspeicher wirtschaftlich besser.'),
      ),
      p(
        t('Wer sich für Cloud entscheidet, sollte nicht auf Werbeversprechen vertrauen, sondern den Vertrag verstehen. Bezugslimit, Grundgebühr, Laufzeit, Kündigungsbedingungen, Insolvenzschutz – das sind die Stellschrauben, die über die Wirtschaftlichkeit entscheiden. Nicht das schöne Bild von „grünem Sommerstrom im Winter".'),
      ),
      p(
        bold('Die ehrlichste Empfehlung: Im Zweifel den eigenen Hausspeicher'),
        t('. Er gehört dem Eigentümer, hat keine Vertragsbindung, ist bei Stromausfall eine echte Versorgung und macht das ganze System unabhängiger – nicht abhängiger von einem Anbieter, der vielleicht in 10 Jahren noch existiert oder nicht.'),
      ),
    ),

    ctaBlock({
      titel: 'Speicherkonzept ohne Werbe-Versprechen prüfen lassen',
      text:
        'Wir vergleichen für deinen konkreten Fall, ob ein eigener Hausspeicher oder eine Cloud-Lösung wirtschaftlich Sinn ergibt – mit ehrlichen Zahlen, nicht mit Marketing-Folien.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist ein virtueller Stromspeicher oder Cloud-Speicher?',
      'Ein Tarifmodell, kein physischer Speicher. PV-Überschuss wird ins Netz eingespeist und auf einem virtuellen Konto verbucht. Bei späterem Strombezug wird die Menge mit dem Konto verrechnet – zu vergünstigten Konditionen. Der Strom wird nicht über Monate zwischengespeichert; das Netz kann das physikalisch nicht.',
    ),
    faqItem(
      'Lohnt sich ein Cloud-Speicher wirtschaftlich?',
      'Im Standardfall meist nicht besser als ein eigener Hausspeicher. Monatliche Grundgebühren (15–40 €) summieren sich über 20 Jahre auf 3.600–9.600 €. Dazu kommen reduzierte Tarife für den Cloud-Bezug. In Spezialfällen (sehr hoher Winterverbrauch, keine Investitionsbereitschaft) kann Cloud rechnerisch ähnlich gut sein – nicht besser.',
    ),
    faqItem(
      'Bekomme ich meinen gespeicherten Strom wirklich zurück?',
      'Im Rahmen des Bezugslimits ja – aber zu den vertraglich festgelegten Konditionen, nicht „kostenlos". Übersteigt der Bezug das Limit, gilt der reguläre Tarif. Übersteigt das Guthaben den Bezug, verfällt es meist jährlich oder zum Vertragsende. Der „zurückgegebene" Strom ist physikalisch aktueller Netzstrom.',
    ),
    faqItem(
      'Was passiert bei einem Umzug?',
      'Kommt auf den Vertrag an. Manche Anbieter erlauben Vertragsübernahme an die neue Adresse, manche nur in eigenen Versorgungsgebieten, manche gar nicht. Bei Verkauf des Hauses ist die Übertragung an den Käufer oft schwierig – ein Punkt, der vor Vertragsabschluss geklärt werden sollte.',
    ),
    faqItem(
      'Was passiert bei Insolvenz des Anbieters?',
      'In der Regel ist das Cloud-Guthaben verloren. Es ist meist keine durchsetzbare Forderung im Insolvenzverfahren, sondern ein Vertragsversprechen ohne physische Substanz. Wer einen 20-Jahres-Vertrag abschließt, übernimmt damit das Insolvenzrisiko des Anbieters über die gesamte Laufzeit.',
    ),
    faqItem(
      'Brauche ich neben einer Cloud zusätzlich einen Hausspeicher?',
      'Hängt von Anwendungsfall ab. Cloud bringt nichts bei Stromausfall (kein Notstrom) und nichts für die Verschiebung von Tagesüberschüssen in den Abend (Tag-Nacht-Profil). Ein kleiner Hausspeicher kann das ergänzen, ist aber wirtschaftlich oft Doppelkosten – einer von beiden Wegen ist meist die bessere Wahl.',
    ),
  ],
}

await upsertRatgeberArticle(article)
