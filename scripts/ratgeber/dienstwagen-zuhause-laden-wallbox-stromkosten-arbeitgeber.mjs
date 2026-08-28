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
  titel: "Dienstwagen zuhause laden: Wallbox, MID-Zähler, PV-Strom und Arbeitgeber-Erstattung",
  slug: "dienstwagen-zuhause-laden-wallbox-stromkosten-arbeitgeber",
  kategorie: "wallbox",
  status: "veroeffentlicht",
  teaser:
    "Wer den elektrischen Dienstwagen zuhause lädt, will die Stromkosten sauber vom Arbeitgeber erstattet bekommen. Seit 2026 gelten neue Vereinfachungen. Wichtig: Ein MID-Zähler ist steuerlich nicht automatisch Pflicht – entscheidend sind messbare kWh und die gewählte Kostenmethode.",
  lesezeit: 12,

  seo: seo(
    "Dienstwagen zuhause laden: Wallbox, Zähler & Erstattung 2026 | PEAK.Energy",
    "E-Dienstwagen zuhause laden: Stromzähler, MID, PV-Strom, dynamischer Tarif und Strompreispauschale 2026 für die Arbeitgeber-Erstattung verständlich erklärt.",
  ),

  zusammenfassung: [
    summaryPoint(
      t("Für zuhause geladenen Dienstwagenstrom braucht es einen nachvollziehbaren Nachweis der geladenen Strommenge. Nach dem BMF kann dafür ein "),
      bold("gesonderter stationärer oder mobiler Zähler"),
      t(" genutzt werden – zum Beispiel in Wallbox oder Fahrzeug."),
    ),
    summaryPoint(
      t("Das BMF stellt ausdrücklich klar: Dieser Zähler muss für den steuerlichen Nachweis "),
      bold("nicht eichrechtskonform"),
      t(" sein. Ein MID-Zähler kann betrieblich trotzdem sinnvoll oder vom Arbeitgeber verlangt sein."),
    ),
    summaryPoint(
      t("Bei tatsächlichen Stromkosten werden Arbeitspreis und anteiliger Grundpreis berücksichtigt. Bei dynamischen Tarifen darf der "),
      bold("monatliche Durchschnittspreis"),
      t(" einschließlich anteiligem Grundpreis verwendet werden."),
    ),
    summaryPoint(
      t("Private PV-Erzeugung muss bei der vereinfachten Ermittlung nicht separat herausgerechnet werden. Seit 2026 gibt es außerdem eine "),
      bold("Strompreispauschale auf Basis von Destatis"),
      t("."),
    ),
    summaryPoint(
      t("Technisch sollte die Wallbox Nutzer beziehungsweise Fahrzeuge sauber zuordnen können – besonders dann, wenn privat und dienstlich mehrere Fahrzeuge am selben Ladepunkt laden."),
    ),
  ],

  inhalt: [
    textBlock(
      h("h2", t("Das Problem ist nicht das Laden – sondern die saubere Zuordnung")),
      p(
        t("Ein elektrischer Dienstwagen lässt sich zuhause bequem über die eigene Wallbox laden. Schwieriger wird die Frage danach: Wie viele Kilowattstunden gehörten wirklich zum Dienstwagen und welchen Preis darf der Arbeitgeber dafür erstatten?"),
      ),
      p(
        t("Genau hier hat sich 2026 etwas getan. Das Bundesministerium der Finanzen hat die Regeln zur Ermittlung selbst getragener Stromkosten angepasst und eine neue Strompreispauschale eingeführt. Für Arbeitnehmer, Arbeitgeber und Fuhrparkverantwortliche wird die Abrechnung dadurch flexibler."),
      ),
      p(
        t("Die steuerlichen Details stehen im "),
        link("BMF-Schreiben vom 21. Juli 2026", "https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Steuerarten/Einkommensteuer/2026-07-21-nutzung-betriebliches-kfz-privat.pdf?__blob=publicationFile&v=5", { newTab: true }),
        t(". Wir erklären hier die technische Praxis – keine individuelle Steuerberatung."),
      ),
    ),

    textBlock(
      h("h2", t("Welche Strommenge muss gemessen werden?")),
      p(
        t("Für die häusliche Ladevorrichtung kann der betriebliche Anteil grundsätzlich mit einem gesonderten stationären oder mobilen Stromzähler nachgewiesen werden. Das BMF nennt ausdrücklich wallboxinterne und fahrzeuginterne Zähler als Beispiele."),
      ),
      p(
        t("Das ist ein wichtiger Punkt: Für die steuerliche Nachweisregelung muss der Zähler laut BMF "),
        bold("nicht eichrechtskonform"),
        t(" sein. Die oft gehörte Aussage „Für jeden Dienstwagen braucht man zwingend eine MID-Wallbox“ ist deshalb steuerlich zu pauschal."),
      ),
    ),

    hinweisBlock(
      "MID kann trotzdem sinnvoll sein",
      p(
        t("Ein Arbeitgeber, Leasinganbieter oder Fuhrparkprozess kann strengere technische Anforderungen an Messung, Export oder Dokumentation stellen. MID-konforme Zähler, RFID-Nutzerzuordnung und automatisierte Reports können deshalb betrieblich sehr sinnvoll sein – auch wenn das BMF sie für den beschriebenen steuerlichen Nachweis nicht pauschal verlangt."),
      ),
    ),

    textBlock(
      h("h2", t("Was gilt, wenn mehrere Autos an derselben Wallbox laden?")),
      p(
        t("Dann reicht ein Gesamtzähler allein häufig nicht aus. Die geladenen Kilowattstunden müssen dem betrieblichen Fahrzeug nachvollziehbar zugeordnet werden können. Das kann über RFID-Chips, Nutzerprofile, Fahrzeugerkennung oder eine fahrzeuginterne Erfassung gelöst werden."),
      ),
      p(
        t("Je mehr gemischt geladen wird – privates Auto, Dienstwagen des Partners, Besucher – desto wichtiger wird eine saubere Nutzerzuordnung. Eine Wallbox sollte deshalb nicht nur nach maximaler Ladeleistung ausgewählt werden, sondern auch nach ihrer Mess- und Reporting-Funktion."),
      ),
      p(
        t("Zur grundsätzlichen Dimensionierung findest du unseren Vergleich "),
        link("Wallbox mit 11 oder 22 kW", "/wallbox/wallbox-11-oder-22-kw"),
        t("."),
      ),
    ),

    textBlock(
      h("h2", t("Methode 1: Tatsächliche Stromkosten abrechnen")),
      p(
        t("Wer die tatsächlichen Kosten ansetzt, multipliziert die nachgewiesene Strommenge mit dem individuellen Strompreis. Nach dem BMF gehört neben dem kWh-Arbeitspreis auch ein anteiliger Grundpreis dazu."),
      ),
      p(
        t("Bei einem dynamischen Stromvertrag bestehen keine Bedenken, die durchschnittlichen monatlichen Stromkosten pro kWh einschließlich anteiligem Grundpreis zugrunde zu legen. Damit muss nicht jede einzelne Ladesession mit dem stundengenauen Börsenpreis verknüpft werden."),
      ),
    ),

    textBlock(
      h("h2", t("Und was passiert mit selbst erzeugtem PV-Strom?")),
      p(
        t("Das ist für viele Hausbesitzer besonders interessant: Der Dienstwagen lädt mittags direkt aus der eigenen Photovoltaikanlage. Muss dafür ein separater fiktiver PV-Strompreis berechnet werden?"),
      ),
      p(
        t("Für die vom BMF beschriebene Vereinfachung lautet die Antwort: nein. Die Einspeisung beziehungsweise Nutzung einer privaten PV-Anlage wird bei der Ermittlung der individuellen Stromkosten aus Vereinfachungsgründen nicht gesondert berücksichtigt. Auch die Strompreispauschale kann bei Nutzung einer privaten PV-Anlage angewendet werden."),
      ),
      p(
        t("Technisch lohnt PV-geführtes Laden natürlich trotzdem, weil es den tatsächlichen Netzbezug des Haushalts reduziert. Mehr dazu in "),
        link("Wallbox mit PV laden", "/wallbox/wallbox-mit-pv-laden"),
        t(" und unserem Beitrag zur "),
        link("1-/3-Phasenumschaltung", "/wallbox/wallbox-phasenumschaltung-pv-ueberschussladen"),
        t("."),
      ),
    ),

    textBlock(
      h("h2", t("Methode 2: Strompreispauschale seit 2026")),
      p(
        t("Seit 2026 kann alternativ eine Strompreispauschale verwendet werden. Grundlage ist der vom Statistischen Bundesamt veröffentlichte Gesamtstrompreis privater Haushalte für den Verbrauchsbereich 5.000 bis unter 15.000 kWh. Maßgeblich ist der Wert für das erste Halbjahr des Vorjahres; er wird auf volle Cent abgerundet."),
      ),
      p(
        t("Dieser Cent-Wert wird mit den nachgewiesenen geladenen Kilowattstunden multipliziert. Das Wahlrecht zwischen tatsächlichen Stromkosten und Strompreispauschale muss für das Wirtschaftsjahr einheitlich ausgeübt werden."),
      ),
    ),

    tabelleBlock("Zwei Wege für die Stromkosten", [
      {
        spalte1: "Tatsächliche Stromkosten",
        spalte2: "gemessene kWh × individueller Strompreis",
        spalte3: "inkl. anteiligem Grundpreis; dynamischer Tarif als Monatsdurchschnitt möglich",
      },
      {
        spalte1: "Strompreispauschale",
        spalte2: "gemessene kWh × Destatis-Pauschalwert",
        spalte3: "einheitliche Wahl für das Wirtschaftsjahr",
      },
      {
        spalte1: "Private PV",
        spalte2: "keine separate PV-Preisermittlung nötig",
        spalte3: "BMF-Vereinfachung gilt auch bei privater PV",
      },
    ]),

    textBlock(
      h("h2", t("Brauche ich für 2026 genau 34 Cent je kWh?")),
      p(
        t("Das BMF erläutert das Verfahren, der konkrete Pauschalwert hängt aber vom jeweils maßgeblichen Destatis-Wert und dem Wirtschaftsjahr ab. In der aktuellen Verwaltungsregelung wird der relevante Durchschnittspreis auf volle Cent abgerundet. Deshalb sollte die Lohnbuchhaltung den für das jeweilige Jahr gültigen Wert dokumentieren, statt dauerhaft eine Zahl in der Wallbox zu hinterlegen."),
      ),
      p(
        t("Für die Wallbox ist vor allem wichtig, dass sie verlässlich die geladenen kWh liefert. Die steuerliche Preisbewertung kann anschließend im Abrechnungsprozess erfolgen."),
      ),
    ),

    textBlock(
      h("h2", t("Welche Wallbox-Funktionen wir für Dienstwagen sinnvoll finden")),
      ul(
        p(t("separater Energiezähler beziehungsweise nachvollziehbare kWh-Erfassung")),
        p(t("RFID oder andere Nutzer-/Fahrzeugzuordnung bei mehreren Fahrzeugen")),
        p(t("Export oder Report der Ladevorgänge nach Zeitraum")),
        p(t("PV-Überschussladen, wenn eine Solaranlage vorhanden ist")),
        p(t("dynamische Leistungsregelung und Lastmanagement am Hausanschluss")),
        p(t("offene Schnittstellen, wenn Daten in ein HEMS oder Fuhrparksystem sollen")),
      ),
    ),

    tippBlock(
      "Arbeitgeber-Anforderung vor dem Wallboxkauf klären",
      p(
        t("Steuerrecht, Fuhrparkprozess und technische Abrechnung sind drei verschiedene Ebenen. Frag vor dem Kauf, welches Format dein Arbeitgeber akzeptiert: monatlicher kWh-Report, RFID-Zuordnung, CSV/PDF, MID-Messung oder ein bestimmtes Backend. Dann wählen wir die Hardware passend zum Prozess – nicht umgekehrt."),
      ),
    ),

    textBlock(
      h("h2", t("Unser Fazit: Messbare kWh sind wichtiger als das Schlagwort MID")),
      p(
        t("Für die Erstattung zuhause geladenen Dienstwagenstroms braucht es vor allem eine saubere, nachvollziehbare Strommengenerfassung. Das BMF lässt dafür ausdrücklich wallbox- oder fahrzeuginterne Zähler zu und verlangt in dieser Regelung keine Eichrechtskonformität."),
      ),
      p(
        t("MID, RFID und automatisierte Reports können trotzdem genau die richtigen Funktionen sein – aber weil sie zum Arbeitgeberprozess passen, nicht weil jede private Dienstwagenladung gesetzlich automatisch dieselbe Hardware braucht."),
      ),
    ),

    ctaBlock({
      titel: "Wallbox für Dienstwagen und PV passend auswählen",
      text:
        "Wir planen Ladeleistung, Messung, Nutzerzuordnung, PV-Überschuss und Energiemanagement gemeinsam – und berücksichtigen dabei auch die Abrechnungsanforderungen deines Arbeitgebers.",
      buttonText: "Wallbox-Beratung anfragen",
      buttonLink: "/kontakt",
    }),
  ],

  faq: [
    faqItem(
      "Brauche ich für einen Dienstwagen zuhause zwingend einen MID-Zähler?",
      "Für den im BMF-Schreiben beschriebenen steuerlichen Nachweis nicht zwingend. Das BMF erlaubt einen gesonderten stationären oder mobilen Zähler, beispielsweise in Wallbox oder Fahrzeug, und stellt ausdrücklich klar, dass dieser Zähler nicht eichrechtskonform sein muss. Arbeitgeber können intern dennoch strengere Anforderungen stellen.",
    ),
    faqItem(
      "Wie werden die Stromkosten für den Dienstwagen zuhause berechnet?",
      "Seit 2026 kann je nach Fall mit den tatsächlichen Stromkosten oder der Strompreispauschale gearbeitet werden. Bei tatsächlichen Kosten zählen Arbeitspreis und anteiliger Grundpreis; bei dynamischen Tarifen kann ein monatlicher Durchschnittspreis verwendet werden.",
    ),
    faqItem(
      "Kann ich PV-Strom für den Dienstwagen vom Arbeitgeber erstatten lassen?",
      "Das BMF berücksichtigt die Nutzung einer privaten PV-Anlage in der Vereinfachungsregelung ausdrücklich. Für die Kostenmethode muss nicht jede selbst erzeugte kWh mit einem eigenen PV-Preis bewertet werden. Die konkrete lohnsteuerliche Umsetzung sollte der Arbeitgeber beziehungsweise die Steuerberatung prüfen.",
    ),
    faqItem(
      "Wie trenne ich private und dienstliche Ladevorgänge?",
      "Am einfachsten über eine Wallbox oder ein Backend mit Nutzer- beziehungsweise Fahrzeugzuordnung, zum Beispiel RFID. Alternativ kann eine eindeutige fahrzeuginterne Strommengenerfassung genutzt werden, sofern sie zum Abrechnungsprozess passt.",
    ),
    faqItem(
      "Funktioniert die Abrechnung auch mit einem dynamischen Stromtarif?",
      "Ja. Nach dem BMF können bei der tatsächlichen Kostenmethode die durchschnittlichen monatlichen Stromkosten je kWh einschließlich anteiligem Grundpreis angesetzt werden. Alternativ kann die Strompreispauschale gewählt werden, wenn die Voraussetzungen erfüllt sind.",
    ),
  ],
}

await upsertRatgeberArticle(article)
