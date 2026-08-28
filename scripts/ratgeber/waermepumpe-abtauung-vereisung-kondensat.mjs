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
  titel: "Warum eine Wärmepumpe vereist: Abtauung, Kondensat und Effizienz im Winter",
  slug: "waermepumpe-abtauung-vereisung-kondensat",
  kategorie: "waermepumpe",
  status: "veroeffentlicht",
  teaser:
    "Eis am Außengerät und eine Pfütze darunter wirken schnell wie ein Defekt. Bei Luft-Wasser-Wärmepumpen ist Vereisung bei feucht-kaltem Wetter jedoch normal – entscheidend ist, ob Abtauung und Kondensatablauf funktionieren. Wir erklären den Ablauf und echte Warnzeichen.",
  lesezeit: 10,

  seo: seo(
    "Wärmepumpe vereist: Abtauung & Kondensat erklärt | PEAK.Energy",
    "Warum Luft-Wasser-Wärmepumpen vereisen, wie die automatische Abtauung funktioniert, wo Kondensat bleibt und wann Eis am Außengerät auf ein Problem hindeutet.",
  ),

  zusammenfassung: [
    summaryPoint(
      t("Bei feucht-kaltem Wetter kann der Verdampfer einer Luft-Wasser-Wärmepumpe "),
      bold("ganz normal vereisen"),
      t("."),
    ),
    summaryPoint(
      t("Wird der Luftstrom durch Eis zu stark behindert, startet das Gerät automatisch einen "),
      bold("Abtauvorgang"),
      t("."),
    ),
    summaryPoint(
      t("Beim Abtauen entsteht Wasser. Deshalb sind "),
      bold("Kondensatwanne, Ablauf und frostfreie Entwässerung"),
      t(" Teil der technischen Planung."),
    ),
    summaryPoint(
      t("Kurze Abtauphasen gehören zum Winterbetrieb. Problematisch werden "),
      bold("dauerhafte Eisblöcke, wiederholte Störungen oder ein blockierter Ablauf"),
      t("."),
    ),
    summaryPoint(
      t("Ein gut ausgelegtes Heizsystem stellt während der Abtauung ausreichend Wärme bereit, ohne dass Bewohner jeden Abtauzyklus überhaupt bemerken."),
    ),
  ],

  inhalt: [
    textBlock(
      h("h2", t("Eis am Außengerät: erst einmal kein Grund zur Panik")),
      p(
        t("An kalten, feuchten Tagen passiert etwas, das viele neue Wärmepumpenbesitzer überrascht: Auf den Lamellen des Außengeräts bildet sich Reif oder Eis. Kurz darauf verändert sich das Geräusch, der Ventilator kann vorübergehend anders laufen und unter dem Gerät entsteht Wasser."),
      ),
      p(
        t("Bei einer Luft-Wasser-Wärmepumpe ist das grundsätzlich ein normaler physikalischer Vorgang. Der Verdampfer entzieht der Außenluft Wärme. Seine Oberfläche kann dabei unter den Gefrierpunkt abkühlen. Enthält die Außenluft genügend Feuchtigkeit, kondensiert Wasser an den Lamellen und friert dort fest."),
      ),
      p(
        t("Wie Standort und Luftführung grundsätzlich geplant werden sollten, erklären wir in "),
        link("Wärmepumpe richtig aufstellen", "/waermepumpe/waermepumpe-richtig-aufstellen-standort-schall"),
        t("."),
      ),
    ),

    textBlock(
      h("h2", t("Warum Vereisung die Leistung irgendwann verschlechtert")),
      p(
        t("Eine dünne Reifschicht ist zunächst kein Defekt. Wird sie jedoch dicker, verschlechtert sie den Wärmeübergang und behindert den Luftstrom durch den Verdampfer. Der Ventilator müsste gegen einen immer größeren Widerstand arbeiten und das Gerät könnte weniger Umweltwärme aufnehmen."),
      ),
      p(
        t("Deshalb überwacht die Wärmepumpenregelung ihren Betriebszustand. Erkennt sie, dass Abtauung erforderlich ist, startet sie automatisch einen definierten Abtauzyklus. Die genaue Logik ist hersteller- und modellabhängig."),
      ),
    ),

    textBlock(
      h("h2", t("Wie eine Wärmepumpe abtaut")),
      p(
        t("Bei vielen Luft-Wasser-Wärmepumpen wird für die Abtauung der Kältekreis kurzzeitig umgekehrt. Wärme, die normalerweise ins Heizsystem abgegeben wird, wird dann genutzt, um den vereisten Verdampfer zu erwärmen. Das Eis schmilzt und läuft als Wasser ab."),
      ),
      p(
        t("Buderus beschreibt für entsprechende Geräte, dass der Kältekreis bei niedrigen Temperaturen über ein 4-Wege-Ventil umgekehrt wird und sich das Heizungswasser während des Vorgangs geringfügig abkühlen kann. Die genaue Dauer hängt unter anderem von Vereisung und Außentemperatur ab."),
      ),
      p(
        t("Die Herstellerbeschreibung zum Winterbetrieb findest du beispielhaft in den "),
        link("Buderus Unterlagen zur Abtauung", "https://www.buderus.de/resource/blob/79014/4b19ab74c0d497ce4b8149f7a0910f31/idu-itp-data.pdf", { newTab: true }),
        t(". Für die eigene Anlage gilt immer die Dokumentation des konkreten Modells."),
      ),
    ),

    tabelleBlock("Was im Winter normal sein kann – und was geprüft werden sollte", [
      {
        spalte1: "Dünner Reif auf den Lamellen",
        spalte2: "häufig normal",
        spalte3: "Regelung beobachtet den Zustand",
      },
      {
        spalte1: "Kurzer Abtauvorgang",
        spalte2: "normaler Betriebszustand",
        spalte3: "Eis schmilzt, Wasser läuft ab",
      },
      {
        spalte1: "Wasser unter dem Außengerät",
        spalte2: "oft normales Kondensat",
        spalte3: "Ablauf und Versickerung müssen passen",
      },
      {
        spalte1: "Massiver Eisblock über längere Zeit",
        spalte2: "nicht einfach ignorieren",
        spalte3: "Abtauung, Luftweg und Ablauf prüfen lassen",
      },
      {
        spalte1: "Wiederkehrende Störmeldung",
        spalte2: "Servicefall",
        spalte3: "Ursache fachlich diagnostizieren",
      },
    ]),

    textBlock(
      h("h2", t("Kondensat: Im Winter kommt mehr Wasser zusammen, als viele erwarten")),
      p(
        t("Beim Heizbetrieb entsteht am Verdampfer Feuchtigkeit; beim Abtauen kommt das geschmolzene Eis hinzu. Je nach Wetter, Gerätegröße und Betriebszustand können während eines Abtauvorgangs erhebliche Wassermengen anfallen. Herstellerhandbücher nennen für einzelne Geräte Größenordnungen von mehreren Litern pro Stunde – diese Werte lassen sich aber nicht pauschal auf jede Wärmepumpe übertragen."),
      ),
      p(
        t("Entscheidend ist deshalb nicht eine feste Literzahl, sondern eine robuste Entwässerung: Wasser darf nicht unter dem Gerät zu einem massiven Eisblock gefrieren, Wege vereisen oder in Richtung Hausfundament beziehungsweise Fassade laufen."),
      ),
    ),

    hinweisBlock(
      "Kondensatablauf gehört zur Aufstellplanung",
      p(
        t("Ein gutes Fundament allein reicht nicht. Der Ablauf muss so geplant sein, dass Wasser auch bei Frost sicher wegkommt. Je nach Gerät, Untergrund und Einbausituation geschieht das beispielsweise über geeignete Versickerung, einen frostfrei geführten Ablauf oder eine vom Hersteller freigegebene Lösung."),
      ),
    ),

    textBlock(
      h("h2", t("Warum Puffervolumen bei der Abtauung eine Rolle spielen kann")),
      p(
        t("Für das Abtauen braucht die Wärmepumpe kurzfristig Wärme. Je nach hydraulischem Konzept kommt diese aus dem Heizsystem beziehungsweise einem vorhandenen Puffervolumen. Das bedeutet aber nicht, dass jede Wärmepumpe zwingend einen großen klassischen Pufferspeicher braucht."),
      ),
      p(
        t("Entscheidend sind Mindestvolumenstrom, vorhandenes Wasservolumen, Hydraulik und Herstellervorgaben. Mehr dazu erklären wir in "),
        link("Pufferspeicher bei Wärmepumpen", "/waermepumpe/pufferspeicher-waermepumpe"),
        t("."),
      ),
    ),

    textBlock(
      h("h2", t("Was häufige Abtauungen über die Effizienz aussagen")),
      p(
        t("Jeder Abtauvorgang kostet Energie, weil die Wärmepumpe für kurze Zeit keine normale Heizwärme liefert und Wärme zum Enteisen benötigt. Trotzdem ist die Schlussfolgerung „Abtauung ist ineffizient, also stimmt etwas nicht“ falsch. Bei bestimmten Kombinationen aus Temperatur und hoher Luftfeuchte ist Abtauung schlicht unvermeidbar."),
      ),
      p(
        t("Auffällig wäre eher, wenn das Gerät ungewöhnlich häufig und ohne erkennbaren Wettereinfluss abtaut, nicht vollständig eisfrei wird oder unmittelbar wieder massiv zufriert. Dann sollte geprüft werden, ob Luftführung, Verdampfer, Sensorik, Kältekreis, Hydraulik und Einstellungen in Ordnung sind."),
      ),
    ),

    tippBlock(
      "Was du als Betreiber selbst beobachten kannst",
      ul(
        p(t("Ist der Luftweg vor und hinter dem Außengerät frei?")),
        p(t("Sind Laub, Schnee oder andere Hindernisse an Lamellen und Kondensatbereich sichtbar?")),
        p(t("Verschwindet die Vereisung nach einem Abtauzyklus weitgehend?")),
        p(t("Kann das Wasser frei ablaufen oder wächst unter dem Gerät ein Eisblock?")),
        p(t("Zeigt die Regelung Störungen oder auffällige Betriebswerte?")),
      ),
      p(
        t("Nicht selbst am Kältekreis oder an elektrischen Komponenten arbeiten. Bei Störungen gehört die Diagnose zum Fachbetrieb."),
      ),
    ),

    textBlock(
      h("h2", t("Unser Fazit: Abtauung ist Teil des Systems – kein Betriebsfehler")),
      p(
        t("Eine Luft-Wasser-Wärmepumpe muss im Winter mit Feuchtigkeit und Eis umgehen können. Vereisung, Abtauung und Kondensat sind deshalb keine Randthemen, sondern gehören schon in die Planung von Standort, Fundament und Hydraulik."),
      ),
      p(
        t("Wenn das Gerät sauber abtaut und das Wasser sicher abläuft, ist eine Reifschicht an einem kalten Wintermorgen normalerweise kein Anlass für Sorge. Ein dauerhaft vereistes Gerät dagegen sollte nicht mit „Das ist bei Wärmepumpen eben so“ abgetan werden."),
      ),
    ),

    ctaBlock({
      titel: "Wärmepumpe winterfest planen",
      text:
        "Wir betrachten Außengerät, Schall, Fundament, Kondensat, Hydraulik und Regelung zusammen – damit die Anlage auch bei feucht-kaltem Niederrheinwetter ruhig und zuverlässig läuft.",
      buttonText: "Wärmepumpen-Beratung anfragen",
      buttonLink: "/kontakt",
    }),
  ],

  faq: [
    faqItem(
      "Ist Eis an einer Luft-Wasser-Wärmepumpe normal?",
      "Ja, eine zeitweise Reif- oder Eisbildung am Verdampfer kann bei kalter und feuchter Außenluft normal sein. Die Wärmepumpe sollte das Eis durch automatische Abtauzyklen wieder entfernen.",
    ),
    faqItem(
      "Warum kommt beim Abtauen Wasser aus der Wärmepumpe?",
      "Das zuvor gefrorene Kondensat schmilzt. Zusätzlich entsteht im Heizbetrieb Feuchtigkeit am Verdampfer. Deshalb muss das Außengerät über eine geeignete Kondensatführung beziehungsweise Entwässerung verfügen.",
    ),
    faqItem(
      "Wie lange dauert die Abtauung einer Wärmepumpe?",
      "Das ist modell- und wetterabhängig. Dauer und Häufigkeit hängen unter anderem von Außentemperatur, Luftfeuchte und Vereisungsgrad ab. Eine pauschale Minutenzahl für alle Geräte wäre unseriös.",
    ),
    faqItem(
      "Ist häufiges Abtauen schlecht für die Wärmepumpe?",
      "Abtauzyklen gehören zum normalen Winterbetrieb. Ungewöhnlich häufige Zyklen, unvollständiges Abtauen, wiederkehrende Störungen oder starke Dauervereisung sollten jedoch fachlich geprüft werden.",
    ),
    faqItem(
      "Braucht eine Wärmepumpe für die Abtauung immer einen Pufferspeicher?",
      "Nein. Entscheidend sind Hydraulik, Mindestvolumenstrom, verfügbares Anlagenwasser und die Herstellervorgaben. Manche Systeme kommen ohne großen klassischen Pufferspeicher aus.",
    ),
  ],
}

await upsertRatgeberArticle(article)
