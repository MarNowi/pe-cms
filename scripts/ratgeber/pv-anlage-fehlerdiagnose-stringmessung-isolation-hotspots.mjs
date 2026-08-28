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
  titel: "Alte PV-Anlage prüfen statt blind tauschen: Stringmessung, Isolation, Hotspots und Ertragsfehler",
  slug: "pv-anlage-fehlerdiagnose-stringmessung-isolation-hotspots",
  kategorie: "repowering",
  status: "veroeffentlicht",
  teaser:
    "Eine ältere PV-Anlage liefert weniger als früher – aber warum? Bevor Module oder Wechselrichter auf Verdacht getauscht werden, sollte die Ursache eingegrenzt werden. Wir erklären, was Monitoring, Sichtprüfung, Stringvergleich, Isolationsmessung und Thermografie leisten.",
  lesezeit: 12,

  seo: seo(
    "PV-Anlage prüfen: Stringmessung, Isolation & Hotspots | PEAK.Energy",
    "PV-Ertrag gesunken? So werden alte Solaranlagen fachlich geprüft: Monitoring, Stringvergleich, Isolationsmessung, Thermografie, Hotspots und Repowering-Entscheidung.",
  ),

  zusammenfassung: [
    summaryPoint(
      t("Weniger Ertrag bedeutet nicht automatisch, dass alle Module „alt“ sind. Zuerst müssen "),
      bold("Wetter, Verschattung, Verschmutzung, Wechselrichter und einzelne Strings"),
      t(" voneinander getrennt werden."),
    ),
    summaryPoint(
      t("Monitoring- und Ertragsdaten zeigen, "),
      bold("wann"),
      t(" die Abweichung begonnen hat – oft ist das der schnellste Hinweis auf die Fehlerklasse."),
    ),
    summaryPoint(
      t("Spannungs-, Strom- und Stringvergleiche können auffällige Generatorbereiche eingrenzen. Arbeiten auf der DC-Seite gehören wegen hoher Gleichspannungen "),
      bold("in Fachhände"),
      t("."),
    ),
    summaryPoint(
      t("Bei Isolationsfehlern kann eine fachgerecht durchgeführte "),
      bold("Isolationswiderstandsmessung"),
      t(" helfen, einen betroffenen String zu lokalisieren."),
    ),
    summaryPoint(
      t("Thermografie kann Temperaturauffälligkeiten und Hotspots sichtbar machen. Erst die Kombination mehrerer Prüfmethoden entscheidet, ob "),
      bold("reparieren, Teiltausch oder Repowering"),
      t(" sinnvoll ist."),
    ),
  ],

  inhalt: [
    textBlock(
      h("h2", t("15 Prozent weniger Ertrag – und jetzt den Wechselrichter tauschen?")),
      p(
        t("Genau so beginnen viele unnötig teure Reparaturen. Die Anlage produziert weniger als erwartet, ein Bauteil ist alt und deshalb wird dieses Teil auf Verdacht ersetzt. Wenn die eigentliche Ursache ein beschädigter Steckverbinder, eine neue Verschattung oder ein fehlerhafter String ist, hat man danach zwei Probleme: eine Rechnung und weiterhin Minderertrag."),
      ),
      p(
        t("Bei Bestandsanlagen sollte die Reihenfolge deshalb lauten: "),
        bold("erst diagnostizieren, dann entscheiden"),
        t(". Repowering ist sinnvoll, wenn es einen technischen oder wirtschaftlichen Grund gibt – nicht allein wegen des Baujahrs."),
      ),
      p(
        t("Was Repowering grundsätzlich bedeutet, erklären wir in "),
        link("Repowering einer Solaranlage", "/repowering/repowering-solaranlage"),
        t("."),
      ),
    ),

    textBlock(
      h("h2", t("Schritt 1: Ertragsverlauf lesen, bevor jemand aufs Dach steigt")),
      p(
        t("Gute Wechselrichter- und Monitoringdaten sind eine Art Krankengeschichte der PV-Anlage. Interessant ist nicht nur der Jahresertrag, sondern der Zeitpunkt, an dem sich das Verhalten verändert hat."),
      ),
      ul(
        p(t("Plötzlicher Sprung: eher Ausfall, Abschaltung, Steckverbindung, String oder Wechselrichterereignis.")),
        p(t("Langsamer Trend: Alterung, zunehmende Verschattung, Verschmutzung oder mehrere kleine Effekte möglich.")),
        p(t("Nur zu bestimmten Tageszeiten: Ausrichtung, neue Schattenquelle, Tracker- oder Stringthema prüfen.")),
        p(t("Nur bei Nässe: Isolations- beziehungsweise Feuchtigkeitsthema kann eine Spur sein.")),
      ),
      p(
        t("Dabei muss immer gegen Einstrahlung und Wetter normalisiert gedacht werden. Ein schlechtes Solarjahr ist noch kein Defekt."),
      ),
    ),

    textBlock(
      h("h2", t("Schritt 2: Sichtprüfung – banal, aber erstaunlich ergiebig")),
      p(
        t("Viele Probleme sind sichtbar, wenn man gezielt danach sucht: beschädigte Module, auffällige Verfärbungen, lose Leitungen, nicht fachgerecht befestigte Stecker, Tierverbiss, gealterte Kabel, verschmutzte Modulbereiche oder neu gewachsene Bäume."),
      ),
      p(
        t("Auch mechanische Themen gehören dazu: Ist die Unterkonstruktion auffällig? Haben sich Kabel aus Clips gelöst? Gibt es Stellen, an denen Leitungen auf der Dachhaut scheuern? Eine elektrische Ertragsabweichung kann ihren Ursprung durchaus in einem mechanischen Detail haben."),
      ),
    ),

    textBlock(
      h("h2", t("Schritt 3: Strings miteinander vergleichen")),
      p(
        t("Bei Anlagen mit mehreren Strings lassen sich ähnliche Generatorbereiche miteinander vergleichen. Wenn zwei gleich aufgebaute, gleich ausgerichtete Strings unter vergleichbaren Bedingungen deutlich voneinander abweichen, ist das ein wertvoller Hinweis."),
      ),
      p(
        t("Je nach Anlage werden dafür Betriebsdaten, DC-Spannungen, Ströme oder Kennlinien betrachtet. Bei größeren oder komplexeren Anlagen kann IV-Kurvenmessung zusätzliche Informationen liefern. Fraunhofer ISE nennt bei der Feldinspektion unter anderem visuelle Inspektion, IV-Kurven-Tracing, Thermografie und Leistungsbewertung als Methoden der Qualitätssicherung."),
      ),
      p(
        link("Fraunhofer ISE: Digitale Qualitätssicherung von PV-Kraftwerken", "https://www.ise.fraunhofer.de/de/geschaeftsfelder/solarkraftwerke-und-integrierte-photovoltaik/photovoltaische-kraftwerke/digitale-qualitaetssicherung-von-pv-kraftwerken.html", { newTab: true }),
      ),
    ),

    hinweisBlock(
      "DC-Messungen sind keine Heimwerkerdiagnose",
      p(
        t("PV-Strings können gefährliche Gleichspannungen führen, auch wenn der Netzschalter ausgeschaltet ist. Messungen, Trennen von Steckverbindern und Isolationsprüfungen gehören zu qualifizierten Elektrofachkräften mit passenden Messmitteln und sicherem Verfahren."),
      ),
    ),

    textBlock(
      h("h2", t("Was eine Isolationsmessung herausfinden kann")),
      p(
        t("Meldet der Wechselrichter einen Isolationsfehler oder Erdschluss, kann die Ursache beispielsweise in beschädigten Leitungen, Steckverbindern, Feuchtigkeit oder einem Modul liegen. Eine Spannungsmessung kann erste Hinweise geben; wenn sie nicht ausreicht, kann eine Isolationswiderstandsmessung den betroffenen String genauer eingrenzen."),
      ),
      p(
        t("SMA weist in seiner technischen Anleitung ausdrücklich darauf hin, dass dafür eine geeignete Vorrichtung zum sicheren Trennen und Kurzschließen sowie ein Isolationsmessgerät erforderlich sind. Ohne geeignete Vorrichtung darf die Messung nicht durchgeführt werden."),
      ),
      p(
        t("Die Fachinformation findest du beispielhaft unter "),
        link("PV-Anlage mittels Isolationswiderstandsmessung auf Erdschluss prüfen", "https://manuals.sma.de/STPxx3SE40/de-DE/14267430539.html", { newTab: true }),
        t("."),
      ),
    ),

    textBlock(
      h("h2", t("Thermografie: Temperatur macht manche Fehler sichtbar")),
      p(
        t("Eine Wärmebildkamera kann Auffälligkeiten zeigen, die mit bloßem Auge nicht erkennbar sind. Lokale Hotspots, ungewöhnliche Temperaturverteilungen oder auffällige Module können Hinweise auf Zell-, Kontakt- oder Verschaltungsprobleme geben."),
      ),
      p(
        t("Fraunhofer ISE nutzt Thermografie sowohl in der Modulanalytik als auch in der Qualitätssicherung von PV-Kraftwerken. Entscheidend ist aber die Interpretation: Ein warmes Bildpixel allein ist noch keine fertige Diagnose. Einstrahlung, Lastzustand, Wind, Blickwinkel und Messbedingungen beeinflussen das Wärmebild."),
      ),
      p(
        t("Mehr zur Methode beschreibt das "),
        link("Fraunhofer ISE TestLab PV Modules", "https://www.ise.fraunhofer.de/de/fue-infrastruktur/akkreditierte-labs/testlab-pv-modules/analytikplattformen.html", { newTab: true }),
        t("."),
      ),
    ),

    tabelleBlock("Prüfmethode und typische Aussage", [
      {
        spalte1: "Monitoring / Ertragsdaten",
        spalte2: "Zeitpunkt und Muster der Abweichung",
        spalte3: "gute erste Eingrenzung ohne Eingriff",
      },
      {
        spalte1: "Sichtprüfung",
        spalte2: "mechanische, sichtbare und umgebungsbedingte Fehler",
        spalte3: "Leitungen, Stecker, Module, Verschattung, Verschmutzung",
      },
      {
        spalte1: "Stringvergleich / IV-Kurve",
        spalte2: "elektrische Abweichung einzelner Generatorbereiche",
        spalte3: "hilft schwachen String einzugrenzen",
      },
      {
        spalte1: "Isolationswiderstand",
        spalte2: "Erdschluss / Isolationsproblem",
        spalte3: "nur fachgerecht und sicher durchführen",
      },
      {
        spalte1: "Thermografie",
        spalte2: "Temperaturauffälligkeiten / Hotspots",
        spalte3: "Messbedingungen und Interpretation entscheidend",
      },
    ]),

    textBlock(
      h("h2", t("Hotspot gefunden – muss das Modul sofort raus?")),
      p(
        t("Nicht jede Temperaturabweichung hat dieselbe Bedeutung. Ein echtes Hotspot-Problem kann sicherheits- und ertragsrelevant sein, doch die Ursache muss bewertet werden. Verschattung, Zellschaden, Kontaktproblem oder Diode können unterschiedliche Maßnahmen erfordern."),
      ),
      p(
        t("Fraunhofer ISE weist darauf hin, dass Thermografie Hotspots und andere lokale Defekte sichtbar machen kann. Bei einer Bestandsanlage sollte daraus eine fachliche Entscheidung folgen: beobachten, gezielt ersetzen oder den Generatorabschnitt weiter prüfen."),
      ),
    ),

    textBlock(
      h("h2", t("Wann Reparatur sinnvoller ist als Repowering")),
      p(
        t("Ist die Anlage grundsätzlich gut ausgelegt und nur ein klar abgegrenztes Bauteil defekt, kann eine Reparatur die beste Lösung sein. Ein beschädigter Stecker, ein einzelnes Modul oder ein Kommunikationsproblem rechtfertigen nicht automatisch einen Komplettumbau."),
      ),
      p(
        t("Repowering wird interessanter, wenn mehrere Faktoren zusammenkommen: alter Wechselrichter ohne Ersatzteilperspektive, deutlich geringere Flächeneffizienz, anstehende Dacharbeiten, gewünschter Speicher, neue Verbrauchslasten oder ein Generatorkonzept, das ohnehin neu verschaltet werden muss."),
      ),
      p(
        t("Gerade bei Dacharbeiten lohnt der Blick auf "),
        link("PV-Anlage bei Dachsanierung demontieren und repowern", "/repowering/pv-anlage-dachsanierung-demontage-repowering"),
        t("."),
      ),
    ),

    tippBlock(
      "Für eine Diagnose diese Daten bereithalten",
      ul(
        p(t("Inbetriebnahmejahr und ursprüngliche Anlagendokumentation")),
        p(t("Modul- und Wechselrichtertypen sowie Stringplan, wenn vorhanden")),
        p(t("Jahres- und Monatsverläufe der Erträge")),
        p(t("Fehlermeldungen des Wechselrichters")),
        p(t("Zeitpunkt, seit dem der Minderertrag auffällt")),
        p(t("Veränderungen am Gebäude oder in der Umgebung, etwa Bäume, Gauben oder neue Aufbauten")),
      ),
    ),

    textBlock(
      h("h2", t("Unser Fazit: Die beste Repowering-Entscheidung beginnt mit einer Diagnose")),
      p(
        t("Eine alte PV-Anlage muss nicht blind weiterlaufen – aber sie muss auch nicht blind ersetzt werden. Wer zuerst misst und Fehler eingrenzt, kann gezielt investieren."),
      ),
      p(
        t("Das Ergebnis kann eine kleine Reparatur, ein Teiltausch oder ein komplettes Repowering sein. Entscheidend ist, dass die Maßnahme zur Ursache passt und nicht nur zum Alter auf dem Typenschild."),
      ),
    ),

    ctaBlock({
      titel: "Bestandsanlage technisch prüfen lassen",
      text:
        "Wir schauen uns Ertragsdaten, Generator, Wechselrichter und Dach gemeinsam an und entscheiden erst danach, ob Reparatur, Erweiterung oder Repowering sinnvoll ist.",
      buttonText: "PV-Bestandscheck anfragen",
      buttonLink: "/kontakt",
    }),
  ],

  faq: [
    faqItem(
      "Wie erkennt man, ob eine alte PV-Anlage Leistung verloren hat?",
      "Am besten über einen Vergleich von Monitoring- und Ertragsdaten unter Berücksichtigung von Wetter und Anlagenänderungen. Auffällige Zeitmuster können anschließend durch Sichtprüfung und elektrische Messungen eingegrenzt werden.",
    ),
    faqItem(
      "Was ist eine Stringmessung bei Photovoltaik?",
      "Dabei werden elektrische Werte einzelner PV-Strings betrachtet beziehungsweise miteinander verglichen. Je nach Diagnose können Spannung, Strom oder eine IV-Kennlinie relevant sein. Wegen hoher DC-Spannungen gehört die Messung zur Elektrofachkraft.",
    ),
    faqItem(
      "Wozu dient die Isolationswiderstandsmessung bei PV?",
      "Sie kann helfen, einen Erdschluss oder ein Isolationsproblem auf einen bestimmten String einzugrenzen, wenn andere Messungen keine ausreichende Aussage liefern. Die Durchführung erfordert geeignete Mess- und Sicherheitstechnik.",
    ),
    faqItem(
      "Kann man defekte Solarmodule mit einer Wärmebildkamera finden?",
      "Thermografie kann Temperaturauffälligkeiten und Hotspots sichtbar machen und ist ein etabliertes Diagnosewerkzeug. Für eine belastbare Bewertung müssen jedoch Messbedingungen und mögliche Ursachen fachlich interpretiert werden.",
    ),
    faqItem(
      "Wann lohnt sich Repowering statt Reparatur?",
      "Wenn mehrere Komponenten veraltet sind, Ersatzteile fehlen, die Dachfläche mit heutiger Technik deutlich besser genutzt werden kann oder ohnehin Umbauten wie Dachsanierung, Speicher oder neue Verschaltung anstehen. Ein einzelner klarer Defekt spricht dagegen nicht automatisch für einen Komplettumbau.",
    ),
  ],
}

await upsertRatgeberArticle(article)
