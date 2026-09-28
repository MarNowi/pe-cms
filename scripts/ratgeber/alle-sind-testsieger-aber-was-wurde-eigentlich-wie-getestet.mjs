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
  titel: "Alle sind Testsieger – aber was wurde eigentlich wie getestet?",
  slug: "photovoltaik-testsieger",
  kategorie: "solaranlage",
  status: "veroeffentlicht",
  teaser:
    "Testsieger, Top-Anbieter, Deutschlands Beste: Auszeichnungen begegnen dir bei der Suche nach einer Photovoltaikanlage überall. Was solche Siegel wirklich aussagen – und worauf du bei der Wahl eines PV-Betriebs stattdessen achten solltest.",
  lesezeit: 9,
  seo: seo(
    "PV-Anbieter Testsieger: Was Tests wirklich aussagen | PEAK.Energy",
    "Testsieger, Siegel, Awards: Was Tests von Photovoltaik-Anbietern prüfen, was nicht – und woran du einen guten Installationsbetrieb wirklich erkennst.",
  ),
  zusammenfassung: [
    summaryPoint(
      t("Die entscheidende Information steht selten auf dem Siegel: "),
      bold("Wer hat wen nach welchen Kriterien worin getestet?"),
    ),
    summaryPoint(
      t("Seriöse Anbietertests legen Methodik und Testfeld offen. Sie enden aber meist "),
      bold("mit dem ersten Angebot"),
      t(" – Montage, Netzanmeldung und Service werden nicht bewertet."),
    ),
    summaryPoint(
      t("Unternehmensauszeichnungen mit "),
      bold("kostenpflichtiger Siegel-Lizenz"),
      t(" sind nicht automatisch wertlos – aber etwas anderes als ein unabhängiger Vergleichstest."),
    ),
    summaryPoint(
      t("Bei einer Anlage, die 20 Jahre und länger laufen soll, zählen andere Fragen: Wer plant, wer baut, wer meldet an, wie hoch ist die Anzahlung – und "),
      bold("welche Anlagen hat der Betrieb wirklich gebaut?"),
    ),
  ],
  inhalt: [
    textBlock(
      h("h2", t("Alle sind ausgezeichnet")),
      p(
        t("Wer heute nach einer Photovoltaikanlage sucht, muss nicht lange suchen, bis ihm die ersten Auszeichnungen begegnen: "),
        bold("Testsieger. Top-Anbieter. Deutschlands Beste. Top Innovator. Sehr gut. Kundenliebling. Ausgezeichnet."),
      ),
      p(
        t("Schaut man sich lange genug um, könnte man meinen, es gäbe in der Solarbranche überhaupt keine durchschnittlichen Unternehmen mehr. Irgendwo ist fast jeder einmal Testsieger."),
      ),
      p(
        t("Das klingt überspitzt. Dahinter steckt aber eine ernst gemeinte Frage. Denn die entscheidende Information steht meistens nicht auf dem bunten Siegel. Sie lautet: "),
        bold("Wer hat wen – nach welchen Kriterien – worin getestet?"),
      ),
    ),
    textBlock(
      h("h2", t("Ein Testsieger kann tatsächlich ein Testsieger sein")),
      p(
        t("Vorweg: Nicht jedes Testsiegel ist fragwürdig und nicht jede Auszeichnung wertlos. Ein gutes Beispiel ist der "),
        link("Vergleich von Photovoltaik-Anbietern durch CHIP", "https://www.chip.de/artikel/Test-Solaranlagen-Anbieter-2025-Das-sind-die-besten-Photovoltaik-Firmen_186202106.html", { newTab: true }),
        t(" (Stand: Test 2025)."),
      ),
      p(
        t("CHIP beschreibt seine Methodik vergleichsweise transparent. Tester treten als reale Interessenten auf und lassen sich Angebote für tatsächlich existierende Häuser erstellen. Bewertet werden unter anderem Webseite, Leistungsspektrum, Flexibilität, Angebotsprozess, Beratungsgespräch und Angebotsqualität. Auch die Gewichtung ist offengelegt: Beratung und Angebotsqualität machen zusammen 50 Prozent der Bewertung aus."),
      ),
      p(
        t("Das ist ein nachvollziehbarer Test. Aber jetzt kommt der Teil, der auf keinem Logo Platz findet: Im Vergleich treten "),
        bold("sechs überregional tätige Anbieter"),
        t(" gegeneinander an. Wer nur regional arbeitet, liegt schon aufgrund seiner Struktur außerhalb des Testfeldes."),
      ),
      p(
        t("Ein Testsieg bedeutet also: Dieser Anbieter hat unter diesen Teilnehmern nach dieser Methodik am besten abgeschnitten. Das ist eine völlig legitime Aussage. Sie bedeutet aber nicht automatisch: "),
        bold("Das ist der beste Photovoltaikbetrieb Deutschlands."),
      ),
    ),
    textBlock(
      h("h2", t("Der Test endet dort, wo das Handwerk beginnt")),
      p(
        t("Der Testprozess läuft laut CHIP bis zur Abgabe des ersten Angebots. Beratung, Geschwindigkeit, Planung und Angebotsqualität lassen sich so gut untersuchen. Was ein solcher Test naturgemäß nicht beantworten kann, ist das, was danach passiert:"),
      ),
      ul(
        p(t("Wird wirklich das montiert, was angeboten wurde?")),
        p(t("Wer steht auf dem Dach – eigene Leute, feste Partner oder wechselnde Subunternehmer?")),
        p(t("Wie werden Dachdetails, Durchdringungen und Kabelwege ausgeführt?")),
        p(t("Wie sieht der Zählerschrank anschließend aus?")),
        p(t("Funktionieren Wechselrichter, Speicher, Wallbox und Energiemanagement später tatsächlich miteinander?")),
        p(t("Wie zuverlässig läuft die Anmeldung beim Netzbetreiber?")),
        p(t("Wer ist erreichbar, wenn die Anlage nach einigen Jahren eine Störung hat?")),
        p(t("Gibt es den Anbieter in fünf oder zehn Jahren überhaupt noch?")),
      ),
      p(
        t("Das ist keine Kritik am CHIP-Test. CHIP beschreibt selbst, wo sein Test endet – und genau deshalb ist das Beispiel so hilfreich. Es zeigt, dass selbst ein ordentlich durchgeführter Test nur bewerten kann, was Bestandteil des Tests war. "),
        bold("Ein hervorragendes Beratungsgespräch ist noch keine hervorragend gebaute Photovoltaikanlage."),
        t(" Wer haftet, wenn nach der Montage etwas nicht stimmt, erklären wir in "),
        link("Garantie vs. Gewährleistung bei der Solaranlage", "/solaranlage/garantie-vs-gewaehrleistung-pv-anlage"),
        t("."),
      ),
      p(
        t("Wie wichtig die letzte Frage ist, zeigt das Testfeld selbst: Einer der sechs verglichenen Anbieter, Soly, hat inzwischen Insolvenz angemeldet. Das ist kein Vorwurf an den Test – "),
        bold("wirtschaftliche Stabilität kann kein Test messen, der mit dem ersten Angebot endet."),
        t(" Für Kunden mit geleisteter Anzahlung oder laufender Gewährleistung ist sie aber entscheidend. Was Betroffene jetzt tun können, beschreiben wir in "),
        link("Solarteur insolvent: Was tun?", "/solaranlage/solarteur-insolvent-was-tun"),
        t("."),
      ),
    ),
    textBlock(
      h("h2", t("Noch komplizierter wird es bei Auszeichnungen")),
      p(
        t("Neben klassischen Vergleichstests gibt es eine ganze Welt aus Unternehmensauszeichnungen, Rankings und Wirtschaftssiegeln. Unternehmen werden analysiert, nominiert oder zu Prüfverfahren eingeladen. Berücksichtigt werden etwa öffentliche Informationen, Kundenbewertungen, Webseiten oder Unternehmensdaten. Anschließend besteht teilweise die Möglichkeit, mit der Auszeichnung zu werben – gegen eine Siegel-Lizenz."),
      ),
      p(
        t("Dazu kommen Auszeichnungen, die gar nicht die Installation bewerten: Marken- und Gründerpreise, Wachstums-Rankings oder der Testsieg eines Produkts, das ein Anbieter lediglich verkauft."),
      ),
    ),
    hinweisBlock(
      "Wir kennen das aus eigener Erfahrung",
      p(
        t("Auch PEAK.Energy wurde bereits für Auszeichnungen wie "),
        bold("„Deutschlands Top Innovator“"),
        t(" und "),
        bold("„Deutschlands Beste“"),
        t(" nominiert beziehungsweise zu einem Prüfverfahren eingeladen. Die entsprechenden Siegel hätten wir anschließend lizenzieren und für unsere Außendarstellung nutzen können. Auch aktuell erhalten wir wieder solche Einladungen. Wir hätten unsere Webseite also durchaus mit weiteren Auszeichnungen schmücken können. Genau deshalb schreiben wir diesen Artikel: nicht, weil solche Auszeichnungen grundsätzlich wertlos wären, sondern weil wir aus eigener Erfahrung wissen, wie schnell aus einem hübschen Siegel beim Betrachter eine viel größere Aussage entsteht, als tatsächlich geprüft wurde."),
      ),
    ),
    textBlock(
      h("h2", t("Eine Siegel-Lizenz macht eine Auszeichnung nicht automatisch wertlos")),
      p(
        t("Auch hier ist eine Unterscheidung wichtig. Dass ein Unternehmen für die Nutzung eines Siegels bezahlt, bedeutet nicht, dass die Bewertung gekauft wurde. Lizenzmodelle sind in vielen Bereichen üblich."),
      ),
      p(
        t("Trotzdem besteht ein Unterschied zwischen „Ein unabhängiger Test hat mehrere Anbieter nach festgelegten Kriterien verglichen“ und „Ein Unternehmen wurde ausgezeichnet und kann anschließend die Lizenz zur werblichen Nutzung des Siegels erwerben“. "),
        bold("Beides kann seriös sein. Aber es ist nicht dasselbe."),
      ),
    ),
    tabelleBlock("Siegel richtig lesen: die wichtigere Frage", [
      {
        spalte1: "Testsieger",
        spalte2: "Gegen wen?",
        spalte3: "Ein Sieg unter sechs überregionalen Anbietern ist etwas anderes als ein Sieg im gesamten Markt",
      },
      {
        spalte1: "Sehr gut",
        spalte2: "Wofür?",
        spalte3: "Beratung und Angebot sind nicht dasselbe wie Montage und Service",
      },
      {
        spalte1: "Bester Anbieter",
        spalte2: "Für welche Kundengruppe?",
        spalte3: "Ein Einfamilienhaus-Testfall sagt wenig über Gewerbe oder Landwirtschaft",
      },
      {
        spalte1: "Top Beratung",
        spalte2: "Wie wurde sie getestet?",
        spalte3: "Telefonat, Videocall oder Termin vor Ort – das macht einen großen Unterschied",
      },
      {
        spalte1: "Deutschlandweit ausgezeichnet",
        spalte2: "Waren regionale Betriebe überhaupt beteiligt?",
        spalte3: "Oft wurden nur überregional tätige Unternehmen verglichen",
      },
      {
        spalte1: "Kundenliebling",
        spalte2: "Wie viele Kunden wurden befragt – und von wem?",
        spalte3: "Stichprobe und Auftraggeber entscheiden über die Aussagekraft",
      },
      {
        spalte1: "Ausgezeichnet",
        spalte2: "Das Unternehmen oder ein Produkt, das es verkauft?",
        spalte3: "Ein Produkttestsieg sagt nichts über die Installation",
      },
      {
        spalte1: "Siegel",
        spalte2: "Ist die Nutzung lizenzpflichtig?",
        spalte3: "Nicht automatisch unseriös – aber kein unabhängiger Vergleichstest",
      },
    ]),
    tippBlock(
      "Fünf Fragen, die jedes Siegel beantworten sollte",
      ul(
        p(t("Wer hat getestet oder bewertet?")),
        p(t("Welche Unternehmen wurden miteinander verglichen?")),
        p(t("Welche Kriterien wurden verwendet und wie wurden sie gewichtet?")),
        p(t("Was war Bestandteil des Tests – und was nicht?")),
        p(t("Ist die Nutzung des Siegels an eine kostenpflichtige Lizenz gebunden?")),
      ),
    ),
    textBlock(
      h("h2", t("Und was ist mit Google-Bewertungen?")),
      p(
        t("Auch Kundenbewertungen sind keine perfekte Wissenschaft. Eine einzelne Fünf-Sterne-Bewertung beweist wenig, hundert allein auch nicht unbedingt. Interessanter ist, "),
        bold("was Kunden tatsächlich schreiben"),
        t(": Beschreiben sie konkrete Projekte? Geht es um Beratung, Montage und Inbetriebnahme? Werden Mitarbeiter genannt? Gibt es Erfahrungen über einen längeren Zeitraum? Und wie geht das Unternehmen mit Kritik um?"),
      ),
      p(
        t("Eine glaubwürdige Bewertung erzählt oft mehr als ein Logo mit der aktuellen Jahreszahl daneben. Aber auch sie ist nur ein Teil der Entscheidung."),
      ),
    ),
    textBlock(
      h("h2", t("Bei einer Photovoltaikanlage würden wir andere Fragen stellen")),
      p(
        t("Eine Photovoltaikanlage ist kein Smartphone, das man nach drei Jahren austauscht. Module liegen Jahrzehnte auf dem Dach, Wechselrichter, Speicher und Energiemanagement sollen viele Jahre zuverlässig zusammenarbeiten. Deshalb würden wir einen Betrieb nicht danach auswählen, wer die meisten Siegel auf seiner Startseite unterbringt, sondern wissen wollen:"),
      ),
      ul(
        p(bold("Wer plant die Anlage – und wer baut sie?")),
        p(bold("Wer übernimmt die Elektroinstallation und die Anmeldung beim Netzbetreiber?")),
        p(bold("Welche Komponenten werden eingesetzt – und warum?")),
        p(
          bold("Ist das System offen"),
          t(" oder bindet es dich langfristig an einen bestimmten Anbieter?"),
        ),
        p(
          bold("Wie hoch ist die Anzahlung, und wann wird sie fällig?"),
          t(" Hohe Vorkasse ist ein echtes Risiko, falls der Betrieb während des Projekts ausfällt – was dann passiert, beschreiben wir in "),
          link("Solarteur insolvent: Was tun mit PV-Anlage, Anzahlung und Garantie?", "/solaranlage/solarteur-insolvent-was-tun"),
          t("."),
        ),
        p(bold("Kann der Betrieb reale Anlagen zeigen, die er selbst gebaut hat?")),
        p(bold("Geht nach der Inbetriebnahme noch jemand ans Telefon?")),
      ),
      p(
        t("Das sind weniger glamouröse Fragen. Für eine Anlage, die zwanzig Jahre oder länger funktionieren soll, sind sie aber die wichtigeren."),
      ),
    ),
    textBlock(
      h("h2", t("Referenzen schlagen Medaillen")),
      p(
        t("Wir haben uns deshalb für einen anderen Weg entschieden. Statt weiterer Siegel zeigen wir lieber, was tatsächlich gebaut wurde. Eine reale Referenz kann man hinterfragen: welche Module verbaut wurden, welche Leistung die Anlage hat, wie groß der Speicher ist, warum ein bestimmter Wechselrichter gewählt wurde und welche Besonderheiten das Gebäude hatte."),
      ),
      p(
        t("Bei vielen unserer "),
        link("Referenzanlagen in der Region", "/einsatzorte"),
        t(" kannst du sogar sehen, wie sich die Anlage im realen Betrieb verhält. Das ist weniger spektakulär als ein goldenes Abzeichen – sagt aber ziemlich viel darüber aus, was ein Betrieb wirklich kann."),
      ),
    ),
    textBlock(
      h("h2", t("Unser Fazit: Sind Testsieger-Siegel sinnlos?")),
      p(
        t("Nein. Ein seriös durchgeführter Vergleich kann sehr hilfreich sein, ein gutes Siegel Orientierung geben. Man sollte nur nicht mehr hineininterpretieren, als tatsächlich untersucht wurde. Wer nicht nur das Logo, sondern auch den Test liest, kann das Ergebnis richtig einordnen."),
      ),
      p(
        t("Frag also bei einem Testsieger: "),
        bold("Gegen wen?"),
        t(" Bei einem „Sehr gut“: "),
        bold("Wofür?"),
        t(" Bei einer Unternehmensauszeichnung: "),
        bold("Nach welchen Kriterien?"),
        t(" Und bei einem Photovoltaikbetrieb vor allem: "),
        bold("Zeig mir, was ihr gebaut habt."),
      ),
      p(
        bold("Denn am Ende hängt auf deinem Dach kein Testsiegel. Da hängt die Arbeit des Betriebs, für den du dich entschieden hast."),
      ),
    ),
    ctaBlock({
      titel: "Schau dir an, was wir gebaut haben",
      text:
        "Wir planen, montieren und melden selbst an – als Meisterbetrieb vom Niederrhein, mit eigenen Leuten und ohne Callcenter. Gern zeigen wir dir eine Referenzanlage in deiner Nähe.",
      buttonText: "Beratung anfragen",
      buttonLink: "/kontakt",
    }),
  ],
  faq: [
    faqItem(
      "Ist ein Testsieger bei PV-Anbietern automatisch eine gute Wahl?",
      "Nicht automatisch. Ein Testsieg zeigt, dass ein Anbieter unter den Teilnehmern nach der jeweiligen Methodik am besten abgeschnitten hat – meist bei Beratung, Angebot und Webauftritt. Montagequalität, Netzanmeldung und Service nach der Inbetriebnahme werden in der Regel nicht geprüft. Ein Testsieger kann trotzdem eine gute Wahl sein, das Siegel allein belegt es nur nicht.",
    ),
    faqItem(
      "Warum sind regionale Meisterbetriebe selten in Anbietertests vertreten?",
      "Bundesweite Tests vergleichen meist Anbieter, die in ganz Deutschland verfügbar sind, damit der Testfall überall gleich ablaufen kann. Regionale Betriebe fallen dadurch strukturell aus dem Testfeld – nicht wegen schlechterer Qualität, sondern weil sie nur in ihrer Region arbeiten.",
    ),
    faqItem(
      "Sagt ein Testsieg etwas über die wirtschaftliche Stabilität eines Anbieters?",
      "Nein. Anbietertests bewerten in der Regel Beratung, Angebot und Webauftritt zu einem bestimmten Zeitpunkt. Ob ein Unternehmen in einigen Jahren noch existiert und Gewährleistung und Service leisten kann, ist nicht Bestandteil. Auch Teilnehmer bekannter Tests sind bereits insolvent gegangen. Eine niedrige Anzahlung und ein Betrieb mit langer regionaler Präsenz reduzieren dieses Risiko.",
    ),
    faqItem(
      "Sind Siegel mit kostenpflichtiger Lizenz unseriös?",
      "Nicht automatisch. Lizenzmodelle sind in vielen Bereichen üblich, und eine Lizenzgebühr bedeutet nicht, dass die Bewertung gekauft wurde. Es ist aber etwas anderes als ein unabhängiger Vergleichstest. Entscheidend ist, ob offengelegt wird, wie die Auszeichnung zustande kam.",
    ),
    faqItem(
      "Was sagt Stiftung Warentest über PV-Anbieter?",
      "Stiftung Warentest testet vor allem Produkte, etwa Module, Speicher oder Balkonkraftwerke – nicht die Arbeit von Installationsbetrieben. Wirbt ein Anbieter mit einem Warentest-Ergebnis, lohnt sich der Blick, ob das Unternehmen bewertet wurde oder ein Produkt, das es verkauft.",
    ),
    faqItem(
      "Woran erkenne ich einen guten PV-Installationsbetrieb?",
      "An konkreten Antworten: Wer plant und montiert, wer macht die Elektrik, wer meldet beim Netzbetreiber an, wie hoch ist die Anzahlung und wer ist nach der Inbetriebnahme Ansprechpartner. Dazu reale Referenzanlagen in deiner Nähe und aktuelle, konkrete Bewertungen. Das sagt mehr als jedes Siegel.",
    ),
  ],
}

await upsertRatgeberArticle(article)
