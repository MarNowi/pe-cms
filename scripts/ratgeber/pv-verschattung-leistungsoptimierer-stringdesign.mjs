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
  titel: "Verschattung bei Photovoltaik: Wann Leistungsoptimierer helfen – und wann gutes Stringdesign besser ist",
  slug: "pv-verschattung-leistungsoptimierer-stringdesign",
  kategorie: "solaranlage",
  status: "veroeffentlicht",
  teaser:
    "Schornstein, Gaube oder Baum werfen Schatten auf einzelne Module: Braucht dann jedes Modul einen Leistungsoptimierer? Nicht automatisch. Wir erklären, wie Verschattung, MPP-Tracker, Stringdesign und Optimierer zusammenspielen – und warum die Planung vor der Hardware kommt.",
  lesezeit: 11,

  seo: seo(
    "PV Verschattung: Optimierer oder gutes Stringdesign? | PEAK.Energy",
    "Leistungsoptimierer bei PV-Verschattung: Wann sie helfen, wann MPP-Tracker und Stringdesign reichen und welche Planung Ertragsverluste wirklich reduziert.",
  ),

  zusammenfassung: [
    summaryPoint(
      t("Verschattung ist kein Ja-Nein-Thema: Entscheidend sind "),
      bold("Dauer, Tageszeit, betroffene Module und Stringaufteilung"),
      t("."),
    ),
    summaryPoint(
      t("Ein moderner Wechselrichter kann Teilverschattung über sein "),
      bold("MPP-Tracking und Verschattungsmanagement"),
      t(" oft deutlich besser beherrschen, als viele pauschale Aussagen vermuten lassen."),
    ),
    summaryPoint(
      t("Bei stärker unterschiedlicher Einstrahlung sollte man Module mit ähnlichen Bedingungen zusammenfassen und, wenn möglich, "),
      bold("getrennte MPP-Tracker"),
      t(" nutzen."),
    ),
    summaryPoint(
      t("Leistungsoptimierer können bei dauerhaftem Modul-Mismatch oder komplexen Dachflächen sinnvoll sein, sind aber "),
      bold("kein automatischer Standard für jedes verschattete Dach"),
      t("."),
    ),
    summaryPoint(
      t("Die wichtigste Maßnahme ist eine gute Planung: "),
      bold("Schattenverlauf simulieren, Stringlayout festlegen und erst danach Hardware auswählen"),
      t("."),
    ),
  ],

  inhalt: [
    textBlock(
      h("h2", t("Ein Schatten auf einem Modul bedeutet nicht automatisch: Optimierer drauf")),
      p(
        t("Bei Photovoltaik wird Verschattung häufig sehr verkürzt erklärt: Ein Schornstein wirft Schatten auf zwei Module – also müsse jedes Modul einen Leistungsoptimierer bekommen. So einfach ist es nicht. Ein Schatten kann morgens nur wenige Minuten auftreten, im Winter deutlich länger anliegen oder jeden Nachmittag einen ganzen Teilgenerator betreffen. Diese Situationen sind elektrisch und wirtschaftlich sehr verschieden."),
      ),
      p(
        t("Bevor über Optimierer gesprochen wird, sollte deshalb zuerst geklärt werden, "),
        bold("wann, wie lange und wie stark"),
        t(" ein Schatten auf welche Modulflächen fällt. Genau dafür gehört eine Verschattungsanalyse in eine saubere Anlagenplanung."),
      ),
      p(
        t("Unser grundsätzlicher Einstieg zur Planung ist "),
        link("Solaranlage richtig planen", "/solaranlage/solaranlage-planen"),
        t(". Hier gehen wir tiefer in die elektrische Seite der Verschattung."),
      ),
    ),

    textBlock(
      h("h2", t("Warum ein verschattetes Modul den String beeinflussen kann")),
      p(
        t("PV-Module in einem String sind elektrisch in Reihe geschaltet. Durch alle Module eines Strings fließt daher im Wesentlichen derselbe Strom. Wird ein Teil eines Moduls stark verschattet, kann das den Arbeitspunkt des gesamten Strings verändern. Bypass-Dioden im Modul helfen dabei, stark beeinträchtigte Teilbereiche zu umgehen – sie können die verlorene Einstrahlung aber natürlich nicht zurückholen."),
      ),
      p(
        t("Der Wechselrichter sucht über den Maximum-Power-Point-Regler den Arbeitspunkt, an dem aus dem angeschlossenen Generator die höchste Leistung kommt. Bei Teilverschattung können mehrere lokale Leistungsmaxima entstehen. Moderne Verschattungsalgorithmen versuchen, nicht am falschen lokalen Maximum hängen zu bleiben."),
      ),
    ),

    textBlock(
      h("h2", t("Gutes Stringdesign ist die erste Optimierung")),
      p(
        t("Schon die elektrische Aufteilung kann einen großen Unterschied machen. Hersteller wie SMA empfehlen bei stärkerer Verschattung, Module mit ähnlicher Einstrahlung zusammenzufassen und Strings mit deutlich unterschiedlichen Bedingungen möglichst nicht am selben MPP-Tracker parallel zu betreiben."),
      ),
      p(
        t("Das Prinzip dahinter ist herstellerunabhängig verständlich: Wenn zwei Teilflächen sehr unterschiedliche Einstrahlungsverläufe haben, sollte der Wechselrichter sie möglichst separat regeln können. Deshalb sind mehrere unabhängige MPP-Tracker bei Ost-West-Dächern, Gauben, Teilverschattung oder unterschiedlichen Dachneigungen wertvoll."),
      ),
      p(
        t("SMA beschreibt sein Verschattungsmanagement und Empfehlungen zur Stringaufteilung in der "),
        link("Dokumentation zu ShadeFix", "https://manuals.sma.de/Business-Systeme-PL/de-DE/14480773899.html", { newTab: true }),
        t(". Das ist eine Herstellerquelle, zeigt aber sehr gut, warum Stringdesign vor Zusatzhardware kommt."),
      ),
    ),

    tabelleBlock("Typische Verschattungssituationen – worauf wir zuerst schauen", [
      {
        spalte1: "Kurzzeitiger Schatten auf 1–2 Module",
        spalte2: "Schattenverlauf und String prüfen",
        spalte3: "Oft kein Grund für pauschal flächendeckende Optimierer",
      },
      {
        spalte1: "Dauerhaft verschattete Teilfläche",
        spalte2: "Teilflächen trennen / MPP-Tracker nutzen",
        spalte3: "Optimierer können zusätzlich sinnvoll werden",
      },
      {
        spalte1: "Gauben, mehrere Dachneigungen",
        spalte2: "Elektrische Gruppen sauber bilden",
        spalte3: "Mehrere MPP-Tracker sind besonders wertvoll",
      },
      {
        spalte1: "Sehr komplexe Modul-Mismatch-Situation",
        spalte2: "Simulation und Ertragsvergleich",
        spalte3: "Modul-Level-Elektronik kann einen echten Mehrwert haben",
      },
    ]),

    textBlock(
      h("h2", t("Wann Leistungsoptimierer wirklich helfen können")),
      p(
        t("Leistungsoptimierer sitzen auf Modulebene und beeinflussen den elektrischen Arbeitspunkt einzelner Module. Das kann bei stark unterschiedlichen Bedingungen innerhalb eines Strings Vorteile bringen – zum Beispiel bei dauerhaftem Teil-Schatten, sehr kleinteiligen Dachflächen oder technischem Mismatch."),
      ),
      p(
        t("Auch bei Anlagenkonzepten, die Modulüberwachung oder bestimmte Sicherheitsfunktionen auf Modulebene voraussetzen, kann die Entscheidung aus anderen Gründen fallen als nur wegen des Ertrags."),
      ),
      p(
        t("Wichtig ist aber die Gegenfrage: "),
        bold("Welches konkrete Problem löst der Optimierer hier?"),
        t(" Wenn die Anlage durch sinnvolle Stringaufteilung und gutes Wechselrichter-MPP-Tracking bereits sauber arbeitet, bringt zusätzliche Elektronik nicht automatisch einen messbaren wirtschaftlichen Vorteil."),
      ),
    ),

    hinweisBlock(
      "Mehr Elektronik bedeutet auch mehr Bauteile auf dem Dach",
      p(
        t("Optimierer sind aktive elektronische Komponenten. Das ist nicht grundsätzlich schlecht, sollte aber in die Systementscheidung einfließen: Zusätzliche Bauteile bedeuten zusätzliche Steckverbindungen, Montageaufwand und mögliche Fehlerstellen. Der erwartete Nutzen sollte deshalb zur konkreten Verschattungssituation passen."),
      ),
    ),

    textBlock(
      h("h2", t("Warum Moduloptimierer Verschattung nicht wegzaubern")),
      p(
        t("Ein Optimierer kann keine fehlende Sonnenenergie erzeugen. Liegt ein Modul im Schatten, steht dort schlicht weniger Einstrahlung zur Verfügung. Gute Leistungselektronik kann verhindern, dass ein schwaches Modul andere Module unnötig stark mitzieht – sie kann aber aus einem verschatteten Modul kein unverschattetes machen."),
      ),
      p(
        t("Deshalb ist es manchmal wirtschaftlicher, eine dauerhaft problematische Dachfläche gar nicht oder anders zu belegen, statt jede schwierige Fläche technisch zu erzwingen. Genau diese Abwägung sollte eine Planung leisten."),
      ),
    ),

    textBlock(
      h("h2", t("So würden wir ein verschattetes Dach planen")),
      ul(
        p(t("Schattenquellen aufnehmen: Schornstein, Gauben, Bäume, Nachbargebäude, Antennen.")),
        p(t("Schattenverlauf über Tages- und Jahreszeiten simulieren.")),
        p(t("Module nach ähnlichen Einstrahlungsbedingungen gruppieren.")),
        p(t("Verfügbare MPP-Tracker und zulässige Stringspannungen berücksichtigen.")),
        p(t("Erst danach prüfen, ob Moduloptimierer einen plausiblen Zusatznutzen liefern.")),
        p(t("Ertragsgewinn, Zusatzkosten, Wartbarkeit und Systemkomplexität gemeinsam bewerten.")),
      ),
    ),

    tippBlock(
      "Nicht nur auf die Jahres-kWh schauen",
      p(
        t("Eine Verschattungsanalyse sollte nicht nur einen pauschalen Jahresverlust auswerfen. Wichtig ist auch, wann der Verlust entsteht. Ein kleiner Verlust im Winter kann wirtschaftlich weniger relevant sein als ein ähnlicher Verlust an vielen Sommernachmittagen, wenn gleichzeitig E-Auto, Wärmepumpe oder Speicher geladen werden könnten."),
      ),
    ),

    textBlock(
      h("h2", t("Unser Fazit: Erst das Dach verstehen, dann die Elektronik wählen")),
      p(
        t("Leistungsoptimierer sind ein Werkzeug – nicht die Standardantwort auf jeden Schatten. Ein gut geplantes System beginnt mit Dachgeometrie, Schattenverlauf und Stringdesign. Danach kann man entscheiden, ob modernes Wechselrichter-MPP-Tracking reicht oder ob Modul-Level-Elektronik einen echten zusätzlichen Nutzen bringt."),
      ),
      p(
        t("Wenn dir pauschal gesagt wird, dass bei einem einzigen Kamin grundsätzlich jedes Modul einen Optimierer braucht, fehlt meistens ein Zwischenschritt: "),
        bold("die konkrete technische Begründung"),
        t("."),
      ),
    ),

    ctaBlock({
      titel: "Verschattung vor der Montage sauber bewerten",
      text:
        "Wir planen Belegung, Strings, MPP-Tracker und Speicher als Gesamtsystem – und setzen zusätzliche Elektronik dort ein, wo sie technisch wirklich etwas bringt.",
      buttonText: "PV-Planung anfragen",
      buttonLink: "/kontakt",
    }),
  ],

  faq: [
    faqItem(
      "Braucht jede PV-Anlage mit Schatten Leistungsoptimierer?",
      "Nein. Entscheidend sind Stärke und Dauer der Verschattung, Stringaufteilung, MPP-Tracker und der eingesetzte Wechselrichter. Bei vielen Anlagen kann gutes Stringdesign bereits einen großen Teil der möglichen Verluste vermeiden.",
    ),
    faqItem(
      "Was macht ein MPP-Tracker bei Verschattung?",
      "Der MPP-Tracker sucht den elektrischen Arbeitspunkt mit der höchsten aktuell verfügbaren Leistung. Bei Teilverschattung können mehrere lokale Leistungsmaxima entstehen; Verschattungsalgorithmen moderner Wechselrichter sollen den global besseren Arbeitspunkt finden.",
    ),
    faqItem(
      "Kann ein Optimierer den Ertrag eines verschatteten Moduls wiederherstellen?",
      "Nein. Fehlende Einstrahlung bleibt fehlende Einstrahlung. Ein Optimierer kann vor allem verhindern, dass ungünstiges Modul-Mismatch andere Module unnötig stark beeinflusst.",
    ),
    faqItem(
      "Sind mehrere MPP-Tracker bei einem komplexen Dach sinnvoll?",
      "Oft ja. Unterschiedliche Dachausrichtungen, Neigungen oder deutlich verschiedene Verschattungssituationen lassen sich mit getrennten MPP-Trackern unabhängiger regeln.",
    ),
    faqItem(
      "Wie erkennt man vor der Montage, ob Optimierer sinnvoll sind?",
      "Durch eine Verschattungssimulation, die geplante Modulbelegung und ein konkretes String- und MPP-Tracker-Layout. Erst daraus lässt sich sinnvoll ableiten, ob zusätzliche Modul-Level-Elektronik einen relevanten Mehrwert bietet.",
    ),
  ],
}

await upsertRatgeberArticle(article)
