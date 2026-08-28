import { upsertRatgeberArticle } from './_articleFactory.mjs'
import {
  t,
  bold,
  link,
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
  titel: "EEG 2027: Was der Kabinettsentwurf für neue Dach-PV unter 25 kW vorsieht – und was noch nicht beschlossen ist",
  slug: "eeg-2027-dach-pv-unter-25-kw",
  kategorie: "solaranlage",
  status: "veroeffentlicht",
  teaser:
    "Das Bundeskabinett hat Ende Juli 2026 die EEG-Novelle beschlossen. Für neue kleine PV-Anlagen unter 25 kW soll die dauerhafte Förderung entfallen und der Weg stärker in Richtung Direktvermarktung gehen. Das ist politisch wichtig – aber noch kein endgültig geltendes Gesetz.",
  lesezeit: 12,

  seo: seo(
    "EEG 2027: Was sich für PV unter 25 kW ändern soll | PEAK.Energy",
    "EEG-Novelle 2027 für Dach-PV unter 25 kW: geplantes Ende der dauerhaften Förderung, Übergangszahlung, Bestandsschutz und aktueller Gesetzesstand erklärt.",
  ),

  zusammenfassung: [
    summaryPoint(
      t("Das Bundeskabinett hat die EEG-Novelle am "),
      bold("29. Juli 2026"),
      t(" beschlossen. Damit beginnt jedoch nicht automatisch sofort neues geltendes Recht."),
    ),
    summaryPoint(
      t("Nach dem Regierungsentwurf soll es für "),
      bold("neue kleine PV-Anlagen unter 25 kW keine dauerhafte Förderung mehr"),
      t(" geben. Bestandsanlagen sollen ihre zugesicherte Förderung für die volle Laufzeit behalten."),
    ),
    summaryPoint(
      t("Der politische Zielpfad lautet: neue Anlagen stärker an "),
      bold("Direktvermarktung und Strompreissignale"),
      t(" heranführen."),
    ),
    summaryPoint(
      t("Für den Übergang von der klassischen Einspeisevergütung zur Direktvermarktung sieht das Paket eine "),
      bold("befristete Übergangszahlung"),
      t(" vor."),
    ),
    summaryPoint(
      t("Für Hausbesitzer wird damit Eigenverbrauch, Speicher und intelligentes Energiemanagement wichtiger – aber eine individuelle PV-Rechnung sollte "),
      bold("nicht so tun, als wäre der Entwurf bereits endgültiges Gesetz"),
      t("."),
    ),
  ],

  inhalt: [
    textBlock(
      h("h2", t("Was ist am 29. Juli 2026 tatsächlich passiert?")),
      p(
        t("Die Bundesregierung hat die EEG-Novelle und ein Netzanschlusspaket im Bundeskabinett beschlossen. Das Bundesministerium für Wirtschaft und Energie spricht von einem Paradigmenwechsel: Erneuerbare Energien sollen stärker auf Markt- und Netzsignale reagieren, und neue Anlagen sollen ihren Strom perspektivisch eigenverantwortlich vermarkten."),
      ),
      p(
        t("Für private Dachanlagen ist vor allem ein Punkt relevant: Für neue kleine Photovoltaikanlagen unter 25 kW soll es nach dem Regierungsplan künftig keine dauerhafte Förderung mehr geben."),
      ),
      p(
        t("Die offizielle Zusammenfassung steht in der "),
        link("BMWE-Pressemitteilung zur EEG-Novelle vom 29.07.2026", "https://www.bundeswirtschaftsministerium.de/Redaktion/DE/Pressemitteilungen/2026/07/20260729-eeg-novelle-und-netzanschlusspaket.html", { newTab: true }),
        t("."),
      ),
    ),

    hinweisBlock(
      "Kabinettsbeschluss ist noch nicht das Ende des Gesetzgebungsverfahrens",
      p(
        t("Der vom Kabinett beschlossene Entwurf muss das weitere parlamentarische Gesetzgebungsverfahren durchlaufen. Bundestag und Bundesrat werden beteiligt; Inhalte können sich dabei noch ändern. Verbindlich ist am Ende das beschlossene und verkündete Gesetz mit seinen konkreten Übergangs- und Inkrafttretensregeln."),
      ),
    ),

    textBlock(
      h("h2", t("Was soll sich für neue PV-Anlagen unter 25 kW ändern?")),
      p(
        t("Das BMWE formuliert klar, dass es für kleine Anlagen unter 25 kW künftig keine dauerhafte Förderung mehr geben soll. Gleichzeitig sollen Bestandsanlagen geschützt bleiben und ihre bereits zugesicherte Förderung für die gesamte Laufzeit behalten."),
      ),
      p(
        t("Damit zielt die Reform auf Neuanlagen. Wer heute bereits eine EEG-Anlage betreibt, soll nicht rückwirkend seine zugesagte Vergütung verlieren."),
      ),
      p(
        t("Wie die aktuell geltende Einspeisevergütung funktioniert, erklären wir separat in "),
        link("Einspeisevergütung Photovoltaik 2026", "/solaranlage/einspeiseverguetung-photovoltaik-2026"),
        t(". Dieser Beitrag beschreibt bewusst das geltende 2026er System – der hier vorliegende Artikel den politischen Änderungsplan für 2027."),
      ),
    ),

    textBlock(
      h("h2", t("Heißt das: Ab 2027 gibt es für neue Dach-PV gar kein Geld mehr für eingespeisten Strom?")),
      p(
        t("So pauschal sollte man es nicht formulieren. Der Regierungsplan will die dauerhafte klassische Förderung beenden und neue Anlagen stärker in die Direktvermarktung führen. Für den Übergang ist ausdrücklich eine befristete Übergangszahlung vorgesehen."),
      ),
      p(
        t("Wie hoch diese Zahlung im individuellen Fall ausfällt, welche Voraussetzungen gelten und wie der Übergang technisch und vertraglich organisiert wird, muss aus dem finalen Gesetz und den konkreten Marktangeboten beurteilt werden. Deshalb wäre es heute unseriös, einem Kunden bereits einen festen „EEG-2027-Centwert“ zu versprechen."),
      ),
    ),

    tabelleBlock("Stand August 2026: Was ist sicher, was ist noch offen?", [
      {
        spalte1: "Kabinett hat EEG-Novelle beschlossen",
        spalte2: "ja",
        spalte3: "29.07.2026",
      },
      {
        spalte1: "Dauerhafte Förderung für neue kleine PV <25 kW soll entfallen",
        spalte2: "Regierungsplan",
        spalte3: "laut BMWE",
      },
      {
        spalte1: "Bestandsanlagen behalten zugesicherte Förderung",
        spalte2: "im Regierungsplan vorgesehen",
        spalte3: "Bestandsschutz ausdrücklich genannt",
      },
      {
        spalte1: "Befristete Übergangszahlung",
        spalte2: "vorgesehen",
        spalte3: "Details finalem Recht entnehmen",
      },
      {
        spalte1: "Gesetz bereits endgültig in Kraft",
        spalte2: "nein",
        spalte3: "weiteres Gesetzgebungsverfahren läuft",
      },
    ]),

    textBlock(
      h("h2", t("Warum will die Bundesregierung von der Einspeisevergütung weg?")),
      p(
        t("Die politische Begründung lautet vereinfacht: Erneuerbare sollen stärker auf Markt- und Netzsignale reagieren. Wenn Strom an sonnigen Stunden im Überfluss vorhanden ist, soll nicht jede Anlage unabhängig von der Marktsituation denselben Anreiz zur Einspeisung erhalten."),
      ),
      p(
        t("Gleichzeitig will die Bundesregierung Direktvermarktung auch für kleinere Anlagen verbreiten. Damit ändern sich Rolle und Verantwortung des Betreibers beziehungsweise des Vermarkters: Nicht nur produzieren und einspeisen, sondern die Vermarktung stärker in das Energiesystem integrieren."),
      ),
    ),

    textBlock(
      h("h2", t("Was bedeutet das wirtschaftlich für ein Einfamilienhaus?")),
      p(
        t("Die einfache Antwort „Dann lohnt sich PV nicht mehr“ greift zu kurz. Eine private Solaranlage erzeugt wirtschaftlichen Nutzen nicht nur über die Einspeisung. Jede selbst genutzte Kilowattstunde kann einen Strombezug vermeiden, dessen Endkundenpreis regelmäßig deutlich über dem reinen Marktwert einer eingespeisten Kilowattstunde liegt."),
      ),
      p(
        t("Je weniger verlässlich die Einspeisevergütung zum wirtschaftlichen Hauptpfeiler wird, desto wichtiger werden deshalb "),
        bold("Eigenverbrauch, passende Anlagengröße, Batteriespeicher, E-Auto, Wärmepumpe und Energiemanagement"),
        t("."),
      ),
      p(
        t("Das heißt aber nicht, dass man blind auf 100 Prozent Eigenverbrauch optimieren sollte. Ein großes Dach kann auch ohne klassische Einspeisevergütung wirtschaftlich sinnvoll sein – die Rechnung muss nur realistischer auf Lastprofil, Anlagenkosten und Vermarktung schauen."),
      ),
    ),

    textBlock(
      h("h2", t("Warum Speicher dadurch wichtiger werden – aber nicht automatisch größer")),
      p(
        t("Ein Batteriespeicher kann Solarstrom vom Mittag in Abend und Nacht verschieben. Wenn die alternative Einspeisung weniger planbare Erlöse bringt, steigt der relative Wert einer sinnvoll gespeicherten Kilowattstunde."),
      ),
      p(
        t("Trotzdem bleibt Überdimensionierung teuer. Der Speicher sollte zum Verbrauch und zur PV-Anlage passen. Unser Leitfaden "),
        link("Wie groß sollte ein Stromspeicher sein?", "/stromspeicher/wie-gross-sollte-ein-stromspeicher-sein"),
        t(" bleibt deshalb auch unter neuen EEG-Regeln relevant."),
      ),
    ),

    textBlock(
      h("h2", t("Direktvermarktung für kleine Anlagen: Die Praxis wird entscheidend")),
      p(
        t("Für große Erzeugungsanlagen ist Direktvermarktung längst Alltag. Bei kleinen Hausdachanlagen muss der Markt dagegen Produkte anbieten, die technisch einfach, transparent und wirtschaftlich sind. Genau deshalb sieht die Bundesregierung einen schrittweisen Übergang vor."),
      ),
      p(
        t("Für Hausbesitzer wird wichtig sein: Welche laufenden Kosten hat der Vermarkter? Welche Mess- und Kommunikationshardware ist nötig? Gibt es Vertragsbindungen? Wie werden negative Preise, Überschüsse und Speicher berücksichtigt? Und bleibt der Betreiber bei Stromtarif und Hardware flexibel?"),
      ),
    ),

    textBlock(
      h("h2", t("Ein HEMS kann aus neuen Marktregeln einen Vorteil machen")),
      p(
        t("Wenn Einspeisung stärker an Marktpreise gekoppelt wird, bekommt der Zeitpunkt von Verbrauch und Speicherung mehr Bedeutung. Ein HEMS kann dann entscheiden, ob Solarstrom im Haus genutzt, im Speicher gehalten, ins Auto geladen oder vermarktet wird."),
      ),
      p(
        t("Warum dafür Prognosen wichtig werden, erklären wir in unserem Beitrag "),
        link("HEMS mit Wetterprognose, Strompreis und Ladezustand", "/strom-energiemanagement/hems-wetterprognose-strompreis-ladezustand"),
        t("."),
      ),
      p(
        t("Das ist aus unserer Sicht der eigentliche Wandel: Die PV-Anlage wird weniger zum isolierten Einspeisegerät und mehr zum Bestandteil eines steuerbaren Energiesystems."),
      ),
    ),

    tippBlock(
      "Wer 2026 plant, sollte zwei Szenarien rechnen",
      ul(
        p(t("Szenario A: Projekt nach den zum Inbetriebnahmezeitpunkt sicher geltenden Regeln.")),
        p(t("Szenario B: konservativeres Modell mit stärkerem Eigenverbrauch und weniger dauerhaft garantiertem Einspeiseertrag.")),
        p(t("Speicher, Wärmepumpe und E-Auto nur mit realistischen Lastprofilen einbeziehen.")),
        p(t("Keine zukünftige Vergütung als sicher darstellen, solange das Gesetz nicht final ist.")),
      ),
    ),

    textBlock(
      h("h2", t("Was wir Kunden jetzt nicht erzählen würden")),
      p(
        t("Wir würden weder behaupten „Ab 2027 ist die Einspeisevergütung definitiv komplett weg“ noch „Für Bestandsanlagen ändert sich gar nichts in jedem denkbaren Detail“. Der erste Satz ignoriert Übergangsregeln und das laufende Gesetzgebungsverfahren; der zweite wäre breiter, als der aktuell bekannte Bestandsschutz rechtfertigt."),
      ),
      p(
        t("Sauber ist: Der politische Kurs ist klar, aber die endgültigen Paragraphen und Übergangsdetails müssen abgewartet werden. Bis dahin planen wir mit dem geltenden Recht und zeigen transparent, wie robust ein Projekt auch bei veränderten Einspeiseerlösen bleibt."),
      ),
    ),

    textBlock(
      h("h2", t("Unser Fazit: Nicht das Ende der PV – sondern das Ende einer alten Logik")),
      p(
        t("Die geplante EEG-Novelle würde kleine Dach-PV stärker vom Modell „bauen und 20 Jahre einspeisen“ in Richtung Eigenverbrauch, Flexibilität und Vermarktung verschieben. Für gute Anlagen ist das kein Todesurteil, aber es verändert die Planung."),
      ),
      p(
        t("Wer seine Wirtschaftlichkeit heute fast ausschließlich mit garantierter Einspeisevergütung begründet, muss neu rechnen. Wer PV dagegen als Teil eines offenen Energiesystems mit Speicher, Verbrauchern und intelligenter Steuerung plant, ist für diese Entwicklung deutlich besser aufgestellt."),
      ),
    ),

    ctaBlock({
      titel: "PV so planen, dass sie nicht von einer einzelnen Vergütungsregel lebt",
      text:
        "Wir rechnen Eigenverbrauch, Speicher, Wärmepumpe, E-Auto und mögliche Vermarktung transparent zusammen – nach geltendem Recht und mit konservativen Zukunftsszenarien.",
      buttonText: "PV-Projekt durchrechnen",
      buttonLink: "/kontakt",
    }),
  ],

  faq: [
    faqItem(
      "Ist die Einspeisevergütung für kleine PV-Anlagen ab 2027 schon abgeschafft?",
      "Nein. Das Bundeskabinett hat am 29. Juli 2026 eine EEG-Novelle beschlossen, die für neue kleine Anlagen unter 25 kW keine dauerhafte Förderung mehr vorsieht. Das weitere Gesetzgebungsverfahren ist jedoch noch nicht abgeschlossen.",
    ),
    faqItem(
      "Verlieren bestehende PV-Anlagen ihre EEG-Vergütung?",
      "Nach dem Regierungsplan sind Bestandsanlagen geschützt und sollen ihre zugesicherte Förderung für die gesamte Laufzeit behalten. Maßgeblich bleibt am Ende die endgültig beschlossene Gesetzesfassung.",
    ),
    faqItem(
      "Was ist die geplante Übergangszahlung?",
      "Die Bundesregierung will den Wechsel von der Einspeisevergütung zur Direktvermarktung durch eine befristete Übergangszahlung erleichtern. Die konkreten Voraussetzungen und Details müssen aus dem finalen Gesetz abgelesen werden.",
    ),
    faqItem(
      "Lohnt sich eine Solaranlage ohne klassische Einspeisevergütung noch?",
      "Das kann weiterhin der Fall sein, insbesondere bei gutem Eigenverbrauch und wirtschaftlichen Investitionskosten. Die Rechnung verschiebt sich aber stärker zu vermiedenem Strombezug, Speicher, flexiblen Verbrauchern und Vermarktung statt zu einer pauschal garantierten Einspeisevergütung.",
    ),
    faqItem(
      "Sollte ich mit einer PV-Anlage bis 2027 warten?",
      "Eine pauschale Empfehlung wäre falsch. Entscheidend sind Investitionskosten, Dach, Verbrauch, Netzanschluss, geltende Regeln zum geplanten Inbetriebnahmezeitpunkt und die individuelle Wirtschaftlichkeit. Ein möglicher zukünftiger Rechtsrahmen sollte als Szenario berücksichtigt, aber nicht wie bereits geltendes Recht behandelt werden.",
    ),
  ],
}

await upsertRatgeberArticle(article)
