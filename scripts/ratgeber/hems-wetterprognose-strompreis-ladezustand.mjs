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
  titel: "Warum ein gutes HEMS in die Zukunft schaut: Wetterprognose, Strompreis und Ladezustand zusammen planen",
  slug: "hems-wetterprognose-strompreis-ladezustand",
  kategorie: "strom-energiemanagement",
  status: "veroeffentlicht",
  teaser:
    "Ein HEMS, das nur auf den aktuellen PV-Überschuss reagiert, verschenkt Potenzial. Wirklich intelligente Regelung plant voraus: Wie viel Sonne kommt morgen, wann ist Strom günstig, wann muss das Auto voll sein und wie viel Platz braucht der Speicher?",
  lesezeit: 11,

  seo: seo(
    "HEMS mit Prognose: Wetter, Strompreis & Speicher intelligent planen | PEAK.Energy",
    "Wie prognosebasiertes HEMS PV, Batteriespeicher, Wallbox, Wärmepumpe und dynamische Strompreise vorausplant statt nur auf den Moment zu reagieren.",
  ),

  zusammenfassung: [
    summaryPoint(
      t("Ein einfaches Energiemanagement reagiert auf Messwerte von jetzt. Ein prognosebasiertes HEMS berücksichtigt zusätzlich "),
      bold("kommende PV-Erzeugung, Strompreise und Nutzungsziele"),
      t("."),
    ),
    summaryPoint(
      t("Der Speicher sollte nicht automatisch immer sofort vollgeladen werden. Erwartet das System mittags viel PV, kann "),
      bold("freier Speicherplatz später wertvoller"),
      t(" sein."),
    ),
    summaryPoint(
      t("Bei dynamischen Stromtarifen ist nicht jede billige Stunde automatisch eine Kaufempfehlung. Entscheidend sind Gesamtsystem, PV-Prognose, Ladezustand und verschiebbare Verbraucher."),
    ),
    summaryPoint(
      t("Wallbox und Wärmepumpe haben Komfortziele: Das Auto muss zu einer Abfahrtszeit geladen sein, das Haus warm bleiben. Prognosebasierte Optimierung arbeitet "),
      bold("innerhalb solcher Grenzen"),
      t("."),
    ),
    summaryPoint(
      t("Gute Regelung braucht nicht nur KI. Sie braucht vor allem verlässliche Messdaten, saubere Geräteintegration und nachvollziehbare Prioritäten."),
    ),
  ],

  inhalt: [
    textBlock(
      h("h2", t("Reagieren ist gut. Vorausplanen ist besser.")),
      p(
        t("Viele Energiemanagementsysteme funktionieren heute nach einer einfachen Logik: Am Netzanschlusspunkt sind 3 kW Überschuss – also Batterie laden oder Wallbox hochregeln. Das ist bereits viel besser, als Geräte völlig unabhängig voneinander arbeiten zu lassen."),
      ),
      p(
        t("Aber das System kennt dabei nur den Moment. Es weiß nicht, dass in zwei Stunden eine breite Sonnenphase angekündigt ist, dass der Strompreis nachts stark fällt oder dass das Auto morgen früh garantiert 70 Prozent Ladezustand braucht."),
      ),
      p(t("Genau an dieser Stelle beginnt prognosebasiertes Energiemanagement.")),
    ),

    textBlock(
      h("h2", t("Welche Informationen ein HEMS für die Zukunft nutzen kann")),
      ul(
        p(t("PV-Erzeugungsprognose aus Wetterdaten, Anlagengröße, Ausrichtung und Standort")),
        p(t("zeitvariable beziehungsweise dynamische Strompreise")),
        p(t("aktuellen Ladezustand und Leistungsgrenzen des Batteriespeichers")),
        p(t("Hausverbrauch und wiederkehrende Lastmuster")),
        p(t("Abfahrtszeit und gewünschtes Ladeziel des E-Autos")),
        p(t("Temperatur- und Komfortgrenzen der Wärmepumpe")),
        p(t("Netzentgelt- oder Netzrestriktionen, soweit verfügbar und relevant")),
      ),
      p(
        t("Fraunhofer ISE beschreibt solche Verfahren als "),
        link("prognosebasierte Optimierung und modellprädiktive Regelung", "https://www.ise.fraunhofer.de/de/geschaeftsfelder/systemintegration/flexibilitaetsmanagement-von-energieanlagen/energiemanagement-prognosebasierte-optimierung.html", { newTab: true }),
        t(". Dabei werden Ladefahrpläne und Batterieeinsatz nicht nur aus einem aktuellen Messwert, sondern aus einem erwarteten Verlauf abgeleitet."),
      ),
    ),

    textBlock(
      h("h2", t("Beispiel Speicher: Morgens billig laden oder Platz für die Sonne lassen?")),
      p(
        t("Angenommen, der Batteriespeicher steht morgens bei 20 Prozent. Der dynamische Strompreis ist um 6 Uhr günstig. Eine rein preisbasierte Regelung könnte den Speicher sofort aus dem Netz voll laden."),
      ),
      p(
        t("Wenn für 11 bis 15 Uhr aber sehr hohe PV-Erzeugung prognostiziert ist, wäre das möglicherweise kontraproduktiv: Der Speicher ist mittags bereits voll und überschüssiger Solarstrom muss eingespeist oder abgeregelt werden. Ein vorausschauendes System kann deshalb bewusst nur teilweise laden oder ganz warten."),
      ),
      p(
        t("Umgekehrt kann Netzladung sinnvoll werden, wenn ein trüber Folgetag erwartet wird, der Speicher leer ist und eine günstige Preisphase bevorsteht. Warum Netzladen nicht pauschal gut oder schlecht ist, erklären wir in "),
        link("Stromspeicher aus dem Netz laden", "/strom-energiemanagement/stromspeicher-aus-netz-laden-dynamisch-sinnvoll"),
        t("."),
      ),
    ),

    tabelleBlock("Reaktive und prognosebasierte Regelung im Vergleich", [
      {
        spalte1: "PV-Überschuss",
        spalte2: "reaktiv: jetzt laden",
        spalte3: "prognosebasiert: zusätzlich erwartete PV-Kurve und Speicherplatz berücksichtigen",
      },
      {
        spalte1: "Dynamischer Preis",
        spalte2: "reaktiv: bei billigem Preis laden",
        spalte3: "prognosebasiert: Preis gegen PV, SoC und Bedarf abwägen",
      },
      {
        spalte1: "E-Auto",
        spalte2: "reaktiv: laden, wenn Überschuss da ist",
        spalte3: "prognosebasiert: Ladeziel bis Abfahrtszeit sicherstellen",
      },
      {
        spalte1: "Wärmepumpe",
        spalte2: "reaktiv: Solltemperatur halten",
        spalte3: "prognosebasiert: thermische Flexibilität innerhalb Komfortgrenzen nutzen",
      },
    ]),

    textBlock(
      h("h2", t("Das E-Auto macht den Unterschied besonders sichtbar")),
      p(
        t("Ein Auto kann viele Stunden angeschlossen sein, obwohl es nur wenige davon tatsächlich laden muss. Diese zeitliche Flexibilität ist wertvoll. Statt sofort mit 11 kW zu starten, kann ein HEMS die Ladung in sonnenreiche oder preisgünstige Zeitfenster verschieben."),
      ),
      p(
        t("Die Bedingung lautet aber immer: Das Mobilitätsziel muss eingehalten werden. Wenn um 7 Uhr 60 kWh im Akku gebraucht werden, darf die Regelung nicht auf eine möglicherweise günstige Stunde um 8 Uhr warten."),
      ),
      p(
        t("Fraunhofer ISE untersucht genau solche prognosebasierten Ladefahrpläne in Projekten zur intelligenten Ladeinfrastruktur. Für das private Haus gilt dasselbe Grundprinzip: Flexibilität ist nur dann nützlich, wenn sie den Nutzer nicht ausbremst."),
      ),
    ),

    textBlock(
      h("h2", t("Wärmepumpe: Ein Haus ist selbst ein kleiner Energiespeicher")),
      p(
        t("Auch Wärme lässt sich zeitlich begrenzt verschieben. Ein gut gedämmtes Gebäude verliert seine Temperatur nicht in dem Moment, in dem der Verdichter abschaltet. Estrich, Heizflächen und Gebäudemasse speichern Energie."),
      ),
      p(
        t("Ein HEMS kann diese Trägheit nutzen, um innerhalb sinnvoller Grenzen eher in Zeiten mit PV-Überschuss oder günstigeren Stromkosten zu heizen. Das darf aber nicht in extreme Sollwertsprünge oder schlechte Effizienz ausarten. Eine Wärmepumpe arbeitet am besten mit niedrigen Vorlauftemperaturen und ruhigem Betrieb."),
      ),
      p(
        t("Deshalb ist intelligente Steuerung nicht „Wärmepumpe an bei billig, aus bei teuer“, sondern eine Optimierung mit Komfort- und Effizienzgrenzen."),
      ),
    ),

    textBlock(
      h("h2", t("Dynamischer Strompreis ist nur ein Teil des Gesamtpreises")),
      p(
        t("Ein Börsenpreis kann ein starkes Signal sein, aber er ist nicht der einzige Kostenbestandteil. Hinzu kommen Netzentgelte, Steuern, Abgaben und tarifabhängige Bestandteile. Mit § 14a können zudem zeitvariable Netzentgelt-Signale relevant werden."),
      ),
      p(
        t("Deshalb haben wir im Beitrag "),
        link("Dynamischer Stromtarif trifft § 14a", "/strom-energiemanagement/dynamischer-stromtarif-paragraf-14a-netzentgelt"),
        t(" bewusst gezeigt, dass ein HEMS mehrere Signale gemeinsam bewerten sollte."),
      ),
      p(
        t("Die Bundesnetzagentur erklärt die Grundlagen dynamischer Stromtarife unter "),
        link("Dynamische Stromtarife", "https://www.bundesnetzagentur.de/DE/Vportal/Energie/Vertragsarten/DynStromtarife/start.html", { newTab: true }),
        t("."),
      ),
    ),

    hinweisBlock(
      "Prognose ist keine Gewissheit",
      p(
        t("Wetter- und Verbrauchsprognosen liegen nie immer exakt richtig. Gute Optimierung plant deshalb nicht mit einer einzigen vermeintlich sicheren Zukunft, sondern berücksichtigt Unsicherheit, Reserven und die Möglichkeit, den Fahrplan laufend anzupassen."),
      ),
    ),

    textBlock(
      h("h2", t("Was passiert, wenn die Wetterprognose falsch liegt?")),
      p(
        t("Dann muss das System neu planen. Eine prognosebasierte Regelung ist kein einmal morgens berechneter Stundenplan, der stur bis Mitternacht abgearbeitet wird. Neue Messwerte und aktualisierte Prognosen verschieben den optimalen Fahrplan laufend."),
      ),
      p(
        t("Genau deshalb ist die lokale Messung am Netzanschlusspunkt weiterhin unverzichtbar. Prognose sagt, was wahrscheinlich kommt; der Zähler sagt, was tatsächlich passiert."),
      ),
    ),

    textBlock(
      h("h2", t("Warum offene Schnittstellen wichtiger sind als ein hübsches KI-Logo")),
      p(
        t("Ein HEMS kann nur Geräte optimieren, die es zuverlässig lesen und steuern kann. Wechselrichter, Batterie, Wallbox, Wärmepumpe, Smart Meter und Tarifdaten müssen technisch zusammenarbeiten. Eine beeindruckende App hilft wenig, wenn ein Gerät nur über eine geschlossene Cloud erreichbar ist oder wichtige Sollwerte nicht freigibt."),
      ),
      p(
        t("Deshalb ist für uns Datenhoheit und offene Integration ein Kernpunkt: Die Intelligenz darf komplex sein – die Abhängigkeiten sollten es nicht unnötig werden."),
      ),
    ),

    tippBlock(
      "Vier Fragen an ein HEMS",
      ul(
        p(t("Kann es PV- und Lastprognosen verarbeiten oder reagiert es nur auf aktuelle Leistung?")),
        p(t("Kann es dynamische Preise und andere Zeitfenster als echte Optimierungsgröße nutzen?")),
        p(t("Kann der Nutzer Ziele vorgeben – etwa Abfahrtszeit, Mindest-SoC oder Komfortgrenzen?")),
        p(t("Funktioniert die Regelung noch sinnvoll, wenn Cloud oder Internet zeitweise nicht verfügbar sind?")),
      ),
    ),

    textBlock(
      h("h2", t("Unser Fazit: Intelligenz heißt nicht mehr schalten – sondern besser entscheiden")),
      p(
        t("Ein gutes HEMS muss nicht möglichst oft eingreifen. Es soll zum richtigen Zeitpunkt entscheiden, wann Energie erzeugt, gespeichert, gekauft oder verbraucht wird."),
      ),
      p(
        t("Dafür braucht es den Blick nach vorn: Wetter, Preise, Ladezustände und Nutzerziele. Erst aus dieser Kombination wird aus einfachem Überschussmanagement eine echte Betriebsstrategie für das Haus."),
      ),
    ),

    ctaBlock({
      titel: "Energiesystem nicht nur vernetzen, sondern koordinieren",
      text:
        "PEAK.Flex denken wir lokal, offen und prognosefähig: PV, Speicher, Wallbox, Wärmepumpe und Tarif sollen als ein System arbeiten – mit Kontrolle beim Nutzer.",
      buttonText: "Energiemanagement kennenlernen",
      buttonLink: "/peak-flex",
    }),
  ],

  faq: [
    faqItem(
      "Was ist ein prognosebasiertes HEMS?",
      "Ein prognosebasiertes Home Energy Management System nutzt neben aktuellen Messwerten auch erwartete Entwicklungen wie PV-Erzeugung, Strompreise und Verbrauch. Daraus plant es den Einsatz von Speicher, Wallbox oder Wärmepumpe voraus.",
    ),
    faqItem(
      "Warum lädt ein intelligentes HEMS den Speicher nicht immer sofort voll?",
      "Weil freier Speicherplatz später wertvoller sein kann. Wenn mittags viel PV-Erzeugung erwartet wird, kann es sinnvoll sein, morgens Platz im Speicher zu lassen statt ihn trotz eines günstigen Strompreises vollständig aus dem Netz zu laden.",
    ),
    faqItem(
      "Kann ein HEMS die Wetterprognose für die PV-Anlage nutzen?",
      "Ja. Prognosebasierte Systeme können Wetter- beziehungsweise PV-Erzeugungsprognosen einbeziehen und ihre Lade- oder Verbrauchsplanung entsprechend anpassen. Die tatsächliche Umsetzung hängt vom jeweiligen System ab.",
    ),
    faqItem(
      "Was passiert, wenn die Prognose falsch ist?",
      "Das System sollte laufend neu rechnen und aktuelle Messwerte berücksichtigen. Prognosen sind eine zusätzliche Entscheidungsgrundlage, kein Ersatz für die Echtzeitmessung.",
    ),
    faqItem(
      "Braucht prognosebasiertes Energiemanagement zwingend künstliche Intelligenz?",
      "Nein. Viele gute Verfahren basieren auf mathematischer Optimierung, modellprädiktiver Regelung und Forecasts. Entscheidend ist nicht das KI-Label, sondern ob das System Daten, technische Grenzen und Nutzerziele sinnvoll zusammenführt.",
    ),
  ],
}

await upsertRatgeberArticle(article)
