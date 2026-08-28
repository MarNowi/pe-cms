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
  titel: "Wo darf ein Stromspeicher stehen? Keller, HWR, Garage, Temperatur und Brandschutz",
  slug: "stromspeicher-aufstellort-keller-garage-brandschutz",
  kategorie: "stromspeicher",
  status: "veroeffentlicht",
  teaser:
    "Keller, Hauswirtschaftsraum oder Garage: Wo ist ein Batteriespeicher wirklich gut aufgehoben? Die Antwort hängt nicht an einem pauschalen Raumverbot, sondern an Herstellerfreigabe, Temperatur, Feuchtigkeit, Untergrund, Abständen und sicherer Montage.",
  lesezeit: 11,

  seo: seo(
    "Stromspeicher Aufstellort: Keller, HWR oder Garage? | PEAK.Energy",
    "Wo darf ein PV-Stromspeicher stehen? Keller, Hauswirtschaftsraum, Garage, Temperatur, Feuchtigkeit, Untergrund und Brandschutz praxisnah erklärt.",
  ),

  zusammenfassung: [
    summaryPoint(
      t("Es gibt keinen sinnvollen pauschalen Satz wie „Batteriespeicher gehören immer in den Keller“ oder „dürfen nie in die Garage“. Maßgeblich sind "),
      bold("Herstellerfreigabe und konkrete Einbausituation"),
      t("."),
    ),
    summaryPoint(
      t("Ein guter Aufstellort ist trocken beziehungsweise innerhalb der zulässigen Luftfeuchte, vor direkter Witterung geschützt und bleibt möglichst "),
      bold("innerhalb eines moderaten Temperaturbereichs"),
      t("."),
    ),
    summaryPoint(
      t("Hitze und Kälte können Leistung, Ladefähigkeit und Lebensdauer beeinflussen. Manche Systeme besitzen Heizung oder erweiterten Temperaturbereich, andere nicht."),
    ),
    summaryPoint(
      t("Der Untergrund beziehungsweise die Trägerkonstruktion muss stabil sein; Hersteller verlangen je nach System "),
      bold("nicht brennbare oder feuerbeständige Befestigungsflächen"),
      t(" sowie definierte Abstände."),
    ),
    summaryPoint(
      t("Vor dem Kauf sollte der Speicherstandort feststehen. Batteriegröße, Wechselrichter, Leitungswege und Montagekonzept gehören "),
      bold("gemeinsam geplant"),
      t("."),
    ),
  ],

  inhalt: [
    textBlock(
      h("h2", t("Der Speicherstandort ist kein Detail für den Montagetag")),
      p(
        t("Bei Angeboten für Photovoltaik wird häufig zuerst über Kilowattstunden gesprochen und erst später gefragt, wo die Batterie eigentlich hin soll. Das ist die falsche Reihenfolge. Ein Batteriespeicher ist ein schweres elektrisches Betriebsmittel mit klaren Umgebungs- und Montagebedingungen. Der Standort sollte deshalb schon in der Planung feststehen."),
      ),
      p(
        t("Die wichtigste Regel lautet: "),
        bold("Nicht nach Internet-Pauschalen planen, sondern nach dem Handbuch des konkreten Speichers."),
        t(" Zwei äußerlich ähnliche Batteriesysteme können unterschiedliche Freigaben für Temperatur, Feuchtigkeit, Außenaufstellung, Wandabstände oder Montageart haben."),
      ),
    ),

    textBlock(
      h("h2", t("Keller: oft gut – aber nicht automatisch perfekt")),
      p(
        t("Ein trockener Keller kann sehr gute Bedingungen bieten: Temperaturen schwanken meist weniger stark als in einer Garage oder einem unbeheizten Nebengebäude, direkte Sonne und Regen spielen keine Rolle und Leitungswege zum Technikbereich sind oft kurz."),
      ),
      p(
        t("Problematisch sind dagegen feuchte Keller, Räume mit möglichem Hochwasser- oder Rückstaurisiko sowie Standorte, an denen Wasserleitungen oder Abflüsse über der Batterie verlaufen und ein Leck unmittelbar auf elektrische Komponenten treffen könnte. Auch die Zugänglichkeit für Montage und Service muss stimmen."),
      ),
    ),

    textBlock(
      h("h2", t("Hauswirtschaftsraum: technisch bequem, wenn Platz und Abstände passen")),
      p(
        t("Im HWR liegen Zählerschrank, Wechselrichter und Haustechnik häufig nah beieinander. Das kann Leitungswege verkürzen und die Montage übersichtlich machen. Gleichzeitig ist der Raum oft knapp bemessen."),
      ),
      p(
        t("Batteriespeicher brauchen je nach System seitliche, obere oder frontale Freiräume für Wärmeabfuhr, Montage und Service. Türen, Waschmaschine, Trockner, Regale oder spätere Einbauten dürfen diese Bereiche nicht einfach zustellen. Eine Batterie in eine „Restnische“ zu quetschen ist keine Planung."),
      ),
    ),

    textBlock(
      h("h2", t("Garage: kann funktionieren – wenn das konkrete System dafür geeignet ist")),
      p(
        t("Die Garage wird häufig pauschal entweder empfohlen oder ausgeschlossen. Beides greift zu kurz. Entscheidend sind Temperaturbereich, Feuchte, mögliche Kondensation, direkte Witterungseinwirkung, mechanischer Schutz und die Herstellerfreigabe."),
      ),
      p(
        t("Ein Beispiel: Für die Sungrow SBH nennt das Benutzerhandbuch je nach Hardwareversion definierte Lade- und Entladetemperaturen, Schutzart IP55 und Anforderungen an Luftfeuchtigkeit. Gleichzeitig soll direkte Einwirkung von Sonne, Regen und Schnee vermieden werden. Bei höheren Temperaturen kann das System seine Leistung reduzieren."),
      ),
      p(
        t("Die aktuelle Herstellerdokumentation findest du im "),
        link("Sungrow Servicebereich", "https://www.sungrowpower.com/de/de/installer/service-support", { newTab: true }),
        t(". Diese Werte sind ein Beispiel – für einen anderen Speicher gelten dessen eigene Unterlagen."),
      ),
    ),

    tabelleBlock("Aufstellorte im Praxischeck", [
      {
        spalte1: "Trockener Keller",
        spalte2: "meist stabile Temperatur",
        spalte3: "Feuchte, Hochwasser und Zugänglichkeit prüfen",
      },
      {
        spalte1: "Hauswirtschaftsraum",
        spalte2: "kurze Leitungswege, Technik gebündelt",
        spalte3: "Abstände und Serviceflächen nicht verbauen",
      },
      {
        spalte1: "Garage",
        spalte2: "kann je nach System geeignet sein",
        spalte3: "Frost, Hitze, Kondensation und mechanischen Schutz prüfen",
      },
      {
        spalte1: "Außenbereich",
        spalte2: "nur bei expliziter Freigabe",
        spalte3: "Witterungsschutz und Herstellervorgaben entscheidend",
      },
      {
        spalte1: "Dachboden",
        spalte2: "häufig thermisch ungünstig",
        spalte3: "Sommerhitze, Tragfähigkeit und Zugänglichkeit kritisch prüfen",
      },
    ]),

    textBlock(
      h("h2", t("Temperatur: Warum „funktioniert bis X Grad“ nicht die ganze Wahrheit ist")),
      p(
        t("Ein Datenblatt kann einen großen zulässigen Temperaturbereich nennen. Das bedeutet nicht, dass jede Temperatur innerhalb dieses Bereichs für Effizienz und Lebensdauer gleich gut ist. Lithium-Batterien reagieren auf Hitze und Kälte. Bei niedrigen Temperaturen kann die Ladeleistung begrenzt werden; hohe Temperaturen können zu Leistungsreduktion führen und sind für die Zellalterung grundsätzlich ungünstig."),
      ),
      p(
        t("Deshalb ist ein möglichst moderater, stabiler Standort häufig sinnvoller als ein Raum, der im Winter stark auskühlt und im Sommer sehr heiß wird. Systeme mit integrierter Batterieheizung erweitern die Einsatzmöglichkeiten, ersetzen aber keine saubere Standortprüfung."),
      ),
    ),

    textBlock(
      h("h2", t("Feuchtigkeit und Kondensation: Schutzart ist kein Freifahrtschein")),
      p(
        t("Eine Schutzart wie IP55 sagt etwas über Schutz gegen Staub und Wasser aus, aber nicht, dass ein Batteriespeicher beliebig nass stehen darf. Hersteller geben zusätzlich zulässige Luftfeuchtigkeit und oft ausdrücklich „nicht kondensierend“ vor."),
      ),
      p(
        t("Das ist gerade in unbeheizten Garagen wichtig: Wenn kalte Geräte auf feuchte Luft treffen, kann Kondensation entstehen. Ebenso sollte ein Speicher nicht an einem Ort stehen, an dem Schlagregen, stehendes Wasser oder eine regelmäßig nasse Wand zur Normalität gehören."),
      ),
    ),

    textBlock(
      h("h2", t("Untergrund, Gewicht und Brandschutz")),
      p(
        t("Modulare Hochvolt-Batterien bringen schnell deutlich über hundert Kilogramm auf die Waage. Boden oder Wand müssen die Last sicher aufnehmen können, und das System muss gegen Kippen beziehungsweise unbeabsichtigte Bewegung gesichert werden."),
      ),
      p(
        t("Hersteller fordern je nach System einen festen, tragfähigen und nicht brennbaren beziehungsweise feuerbeständigen Untergrund oder eine entsprechende Trägerkonstruktion. Sungrow verlangt beim SBH beispielsweise eine solide, feuerfeste beziehungsweise nicht aus brennbarem Material bestehende Trägerstruktur."),
      ),
      p(
        t("Zusätzlich gelten die allgemeinen elektrotechnischen, baulichen und herstellerspezifischen Anforderungen. Eine pauschale Internetliste ersetzt die Prüfung vor Ort nicht."),
      ),
    ),

    hinweisBlock(
      "Nicht mit beliebigen Mindestabständen arbeiten",
      p(
        t("Abstände zur Wand, zu anderen Geräten oder zur Decke unterscheiden sich zwischen Batteriesystemen. Wir würden deshalb keine allgemeine Zahl wie „50 cm überall“ versprechen. Maßgeblich sind Montageanleitung, Wärmeabfuhr und Servicezugang des konkreten Systems."),
      ),
    ),

    textBlock(
      h("h2", t("Was bei Hochwasser- und Überflutungsrisiko gilt")),
      p(
        t("Stehendes Wasser und Hochvolt-Batterien gehören nicht zusammen. In Kellern mit bekanntem Überflutungsrisiko, in Senken oder in Räumen mit regelmäßigem Wassereintritt sollte der Standort kritisch hinterfragt werden. Dabei reicht es nicht, die Batterie ein paar Zentimeter höher zu setzen, wenn der gesamte Technikraum gefährdet ist."),
      ),
      p(
        t("Bei der Planung gehören deshalb auch Gebäudesituation und Umgebung dazu – nicht nur das Datenblatt des Speichers."),
      ),
    ),

    textBlock(
      h("h2", t("Speichergröße und Standort zusammen denken")),
      p(
        t("Ein größerer Speicher braucht mehr Module, mehr Stellfläche und mehr Gewicht. Deshalb sollte die Frage „Wie viele kWh?“ nicht losgelöst vom Standort beantwortet werden. Wie wir die Kapazität bewerten, erklären wir in "),
        link("Wie groß sollte ein Stromspeicher sein?", "/stromspeicher/wie-gross-sollte-ein-stromspeicher-sein"),
        t("."),
      ),
      p(
        t("Das Ziel ist nicht der größtmögliche Turm im Technikraum, sondern ein System, das elektrisch, wirtschaftlich und räumlich zum Gebäude passt."),
      ),
    ),

    tippBlock(
      "Diese Punkte prüfen wir vor der Montage",
      ul(
        p(t("Ist der Aufstellort vom Hersteller freigegeben?")),
        p(t("Welche Temperatur- und Feuchtegrenzen gelten?")),
        p(t("Ist direkte Sonne, Regen oder Schnee ausgeschlossen?")),
        p(t("Sind Boden oder Wand ausreichend tragfähig und geeignet?")),
        p(t("Bleiben Montage-, Kühl- und Serviceabstände frei?")),
        p(t("Besteht Hochwasser-, Anfahr- oder sonstiges mechanisches Risiko?")),
        p(t("Sind Leitungswege zu Wechselrichter und Zählerschrank sinnvoll?")),
      ),
    ),

    textBlock(
      h("h2", t("Unser Fazit: Der beste Speicherplatz ist der technisch passende – nicht der bequemste")),
      p(
        t("Keller, HWR und Garage können geeignete Standorte sein. Ob sie es tatsächlich sind, entscheidet sich aber erst mit dem konkreten Batteriesystem und dem Gebäude."),
      ),
      p(
        t("Ein sauber geplanter Standort schützt Batterie, Gebäude und Investition. Deshalb klären wir ihn vor der Bestellung – nicht erst, wenn der Monteur mit den Batteriemodulen vor der Tür steht."),
      ),
    ),

    ctaBlock({
      titel: "Speicher und Technikraum zusammen planen",
      text:
        "Wir prüfen Kapazität, Batterieaufbau, Wechselrichter, Zählerschrank und Aufstellort als ein System – inklusive realer Platzverhältnisse vor Ort.",
      buttonText: "Speicher-Beratung anfragen",
      buttonLink: "/kontakt",
    }),
  ],

  faq: [
    faqItem(
      "Darf ein Stromspeicher im Keller stehen?",
      "Ein trockener Keller mit geeigneter Temperatur, tragfähigem Untergrund und ausreichenden Montageabständen kann sehr gut geeignet sein. Feuchte, Hochwasserrisiko und die Vorgaben des jeweiligen Herstellers müssen berücksichtigt werden.",
    ),
    faqItem(
      "Darf ein Batteriespeicher in die Garage?",
      "Das kann möglich sein, wenn der konkrete Speicher dafür freigegeben ist und Temperatur, Feuchte, Kondensation, Witterung und mechanischer Schutz passen. Eine pauschale Freigabe für jede Garage gibt es nicht.",
    ),
    faqItem(
      "Welche Temperatur ist für einen PV-Speicher ideal?",
      "Die zulässigen Bereiche unterscheiden sich je Hersteller. Für Betrieb und Lebensdauer ist ein moderater, möglichst stabiler Temperaturbereich in der Regel günstiger als starke Hitze oder Kälte. Maßgeblich ist das Datenblatt des konkreten Systems.",
    ),
    faqItem(
      "Muss ein Stromspeicher auf einer nicht brennbaren Wand stehen?",
      "Hersteller stellen konkrete Anforderungen an Trägerfläche und Montage. Bei einigen Systemen wird ausdrücklich eine feste, nicht brennbare beziehungsweise feuerbeständige Trägerstruktur verlangt. Deshalb muss die Montageanleitung des gewählten Speichers geprüft werden.",
    ),
    faqItem(
      "Kann ein Stromspeicher draußen montiert werden?",
      "Nur wenn das konkrete System für die Außenaufstellung freigegeben ist und die zusätzlichen Anforderungen an Witterung, Temperatur, Feuchte und Montage eingehalten werden. Eine IP-Schutzart allein ersetzt diese Prüfung nicht.",
    ),
  ],
}

await upsertRatgeberArticle(article)
