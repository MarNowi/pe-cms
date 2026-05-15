// scripts/articles/cloud-ems-vs-lokales-ems-energiedaten.mjs

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
  titel: 'Cloud-EMS vs. lokales EMS: Wem gehören deine Energiedaten?',
  slug: 'cloud-ems-vs-lokales-ems-energiedaten',
  kategorie: 'stromspeicher',
  status: 'veroeffentlicht',
  teaser:
    'Moderne PV-Anlagen erzeugen nicht nur Strom – sie erzeugen Daten. Wer wann Strom verbraucht, wann das Auto lädt, wann die Wärmepumpe läuft und wann jemand zu Hause ist, kann aus Energiedaten erstaunlich gut abgeleitet werden. Deshalb ist die Frage wichtig: Arbeitet dein Energiemanagement in einer Cloud – oder lokal bei dir zu Hause?',
  lesezeit: 10,

  seo: seo(
    'Cloud-EMS vs. lokales EMS: Wem gehören deine Energiedaten? | PEAK.Energy',
    'Cloud-EMS oder lokales Energiemanagement? Erfahre, warum Verbrauchsmuster sensible Daten sind, welche Vorteile lokale EMS-Systeme haben und worauf du bei PV, Speicher, Wallbox und Wärmepumpe achten solltest.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein Cloud-EMS verarbeitet Anlagendaten auf Servern des Anbieters. Das kann bequem sein, bedeutet aber auch: '),
      bold('Persönliche Verbrauchsmuster verlassen dein Zuhause'),
      t('.'),
    ),
    summaryPoint(
      t('Ein lokales EMS verarbeitet die wichtigste Steuerungslogik direkt im Haus. Externe Signale wie Wetterprognosen oder Strompreise können ergänzt werden, aber '),
      bold('deine Verbrauchsmuster müssen nicht dauerhaft in eine Cloud'),
      t('.'),
    ),
    summaryPoint(
      t('Für PV-Anlagen mit Speicher, Wallbox und Wärmepumpe wird diese Frage immer wichtiger. Denn je intelligenter ein System wird, desto genauer kennt es '),
      bold('dein Verhalten und deine Energieflüsse'),
      t('.'),
    ),
    summaryPoint(
      t('Unsere Haltung: Ein Energiesystem sollte zuerst dem Kunden dienen. Und persönliche Verbrauchsmuster gehören '),
      bold('nicht ungefragt auf fremde Server'),
      t('.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('Eine moderne Photovoltaikanlage ist längst nicht mehr nur ein Wechselrichter, ein paar Module und ein Speicher. Sobald Wallbox, Wärmepumpe, Smart Meter und dynamische Strompreise dazukommen, entsteht ein digitales Energiesystem.'),
      ),
      p(
        t('Dieses System misst ständig, was in deinem Haus passiert: wann Strom erzeugt wird, wann Strom verbraucht wird, wann der Speicher lädt, wann das Auto angeschlossen ist und wann die Wärmepumpe läuft.'),
      ),
      p(
        t('Das klingt erstmal harmlos. Schließlich geht es ja „nur“ um Energie. Aber genau hier wird es spannend. Denn Energiedaten sind nicht irgendeine technische Nebensache. Aus ihnen lassen sich Muster erkennen: Wann jemand zu Hause ist. Wann gekocht wird. Wann geduscht wird. Wann das Auto nachts in der Einfahrt steht. Wann ein Haushalt regelmäßig viel oder wenig Strom benötigt.'),
      ),
      p(
        t('Deshalb ist die Frage wichtig: '),
        bold('Wo arbeitet dein Energiemanagement-System eigentlich?'),
        t(' In einer Cloud des Anbieters – oder lokal bei dir zu Hause?'),
      ),
    ),

    textBlock(
      h('h2', t('Was macht ein Energiemanagement-System überhaupt?')),
      p(
        t('Ein Energiemanagement-System, kurz EMS, verbindet die stromrelevanten Komponenten deines Hauses miteinander. Dazu gehören zum Beispiel Photovoltaikanlage, Wechselrichter, Stromspeicher, Smart Meter, Wallbox, Wärmepumpe, dynamischer Stromtarif, Wetterprognose und Strompreissignale.'),
      ),
      p(
        t('Das EMS misst, bewertet und steuert. Es entscheidet also nicht nur, '),
        bold('was gerade passiert'),
        t(', sondern auch, '),
        bold('was als Nächstes sinnvoll ist'),
        t('.'),
      ),
      ul(
        p(t('Soll der Speicher jetzt geladen werden oder lieber später?')),
        p(t('Soll das E-Auto sofort laden oder erst nachts, wenn der Strom günstiger ist?')),
        p(t('Soll die Wärmepumpe mittags laufen, wenn PV-Ertrag vorhanden ist?')),
        p(t('Soll Netzstrom vermieden werden, weil der Preis gerade hoch ist?')),
        p(t('Soll der Speicher für den Abend geschont werden?')),
      ),
      p(
        t('Je mehr Geräte eingebunden sind, desto wertvoller wird ein EMS. Gleichzeitig wird aber auch klar: '),
        bold('Das System lernt sehr viel über den Haushalt.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum Energiedaten sensibler sind, als viele denken')),
      p(
        t('Viele Kunden denken bei Datenschutz an Namen, Adressen, Bankdaten oder E-Mails. Das ist verständlich. Aber Energiedaten sind ebenfalls sehr aussagekräftig. Ein einzelner Messwert sagt wenig. Viele Messwerte über Tage, Wochen oder Monate ergeben dagegen ein klares Bild.'),
      ),
      p(t('Aus Verbrauchsmustern lassen sich zum Beispiel Rückschlüsse ziehen auf:')),
      ul(
        p(t('Anwesenheit im Haus')),
        p(t('Tagesrhythmus')),
        p(t('Koch- und Waschzeiten')),
        p(t('Ladeverhalten des E-Autos')),
        p(t('Heizverhalten der Wärmepumpe')),
        p(t('Urlaubszeiten')),
        p(t('ungewöhnliche Verbrauchsspitzen')),
        p(t('typische Abend- und Morgenroutinen')),
      ),
      p(
        t('Je feiner die Messung, desto genauer wird dieses Bild. Ein intelligentes Messsystem, ein Speicher, eine Wallbox und eine Wärmepumpe erzeugen gemeinsam ein ziemlich detailliertes Energieprofil.'),
      ),
      p(
        t('Das bedeutet nicht, dass Energiedaten grundsätzlich gefährlich sind. Aber sie sind wertvoll. Und genau deshalb sollte klar sein, wer sie verarbeitet, wo sie gespeichert werden und wofür sie genutzt werden.'),
      ),
    ),

    hinweisBlock(
      'Verbrauchsmuster sind mehr als technische Messwerte',
      p(
        t('Ein Energiesystem sieht nicht deinen Namen auf dem Sofa sitzen. Aber es kann aus vielen kleinen Signalen erkennen, wann ein Haushalt aktiv ist, wann Geräte laufen und wann bestimmte Routinen stattfinden. Genau deshalb sollten persönliche Verbrauchsmuster nicht leichtfertig dauerhaft in fremde Clouds wandern.'),
      ),
    ),

    textBlock(
      h('h2', t('Cloud-EMS: Bequem, aber nicht ohne Preis')),
      p(
        t('Bei einem Cloud-EMS werden Anlagendaten an Server des Anbieters übertragen. Dort werden sie gespeichert, ausgewertet und für Steuerentscheidungen genutzt. Die Anlage bekommt anschließend Befehle zurück.'),
      ),
      p(t('Das kann Vorteile haben:')),
      ul(
        p(t('einfache Einrichtung')),
        p(t('zentrale Updates')),
        p(t('komfortable App-Nutzung')),
        p(t('Fernzugriff für Anbieter oder Service')),
        p(t('einfache Skalierung über viele Kundenanlagen')),
        p(t('gute Grundlage für Plattformmodelle und Batteriepools')),
      ),
      p(
        t('Aus Sicht großer Anbieter ist das logisch. Wer viele Anlagen zentral steuert, kann Prozesse vereinfachen, Daten auswerten und neue Geschäftsmodelle aufbauen.'),
      ),
      p(t('Für Kunden gibt es aber wichtige Fragen:')),
      ul(
        p(t('Welche Daten werden übertragen?')),
        p(t('Wie lange werden sie gespeichert?')),
        p(t('Wer darf sie auswerten?')),
        p(t('Werden sie nur für den Betrieb genutzt oder auch für Geschäftsmodelle?')),
        p(t('Kann die Anlage noch intelligent arbeiten, wenn die Cloud ausfällt?')),
        p(t('Was passiert, wenn der Anbieter sein System ändert oder vom Markt verschwindet?')),
      ),
      p(
        t('Ein Cloud-EMS ist also nicht automatisch schlecht. Aber es ist ein Modell, bei dem Kunden genau verstehen sollten, welche Kontrolle sie abgeben.'),
      ),
    ),

    textBlock(
      h('h2', t('Lokales EMS: Die Steuerung bleibt im Haus')),
      p(
        t('Bei einem lokalen EMS läuft die wichtigste Steuerungslogik direkt im Haus. Typischerweise auf einem kleinen Rechner, einem Mini-PC, einem Raspberry Pi oder einem lokalen Gateway.'),
      ),
      p(
        t('Die Anlage misst und verarbeitet ihre Daten vor Ort. Persönliche Verbrauchsmuster müssen das Haus nicht dauerhaft verlassen. Externe Daten können trotzdem genutzt werden – zum Beispiel Wetterprognosen, PV-Ertragsprognosen, EPEX- oder Strompreisdaten, Tarifinformationen und optionale Updates.'),
      ),
      p(
        t('Der Unterschied ist entscheidend: Nicht deine Verbrauchsdaten müssen ständig in eine Cloud, sondern neutrale externe Signale werden gezielt ins Haus geholt.'),
      ),
      p(
        bold('Cloud-EMS: '),
        t('Deine Daten gehen raus, Entscheidungen kommen zurück.'),
      ),
      p(
        bold('Lokales EMS: '),
        t('Neutrale Signale kommen rein, Entscheidungen bleiben im Haus.'),
      ),
      p(
        t('Genau das ist für uns der sauberere Ansatz.'),
      ),
    ),

    tabelleBlock('Cloud-EMS vs. lokales EMS im Vergleich', [
      {
        spalte1: 'Verarbeitung',
        spalte2: 'Cloud-EMS: auf Servern des Anbieters · Lokales EMS: im Haus',
        spalte3:
          'Beim lokalen EMS bleiben die wichtigsten Verbrauchsmuster dort, wo sie entstehen',
      },
      {
        spalte1: 'Datenhoheit',
        spalte2: 'Cloud-EMS: Anbieter verarbeitet Daten · Lokales EMS: Kunde behält mehr Kontrolle',
        spalte3:
          'Gerade bei fein aufgelösten Energiedaten ist Transparenz entscheidend',
      },
      {
        spalte1: 'Internetabhängigkeit',
        spalte2: 'Cloud-EMS: stark abhängig · Lokales EMS: Grundlogik kann lokal weiterlaufen',
        spalte3:
          'Cloud-Dienste können sinnvoll sein, sollten aber nicht die einzige Intelligenz des Systems sein',
      },
      {
        spalte1: 'Anpassbarkeit',
        spalte2: 'Cloud-EMS: oft standardisiert · Lokales EMS: stärker auf konkrete Anlage anpassbar',
        spalte3:
          'Jedes Haus ist anders – besonders mit Speicher, Wallbox und Wärmepumpe',
      },
      {
        spalte1: 'Plattformbindung',
        spalte2: 'Cloud-EMS: höheres Lock-in-Risiko · Lokales EMS: offener planbar',
        spalte3:
          'Wer heute offen plant, hält sich spätere Optionen offen',
      },
    ]),

    textBlock(
      h('h2', t('Die Vorteile eines lokalen EMS')),
      p(
        t('Ein lokales EMS hat mehrere Vorteile, die über reinen Datenschutz hinausgehen.'),
      ),
      p(
        bold('1. Datenhoheit. '),
        t('Verbrauchsmuster bleiben dort, wo sie entstehen: im Haus. Der Kunde behält mehr Kontrolle darüber, was mit seinen Daten passiert.'),
      ),
      p(
        bold('2. Unabhängigkeit. '),
        t('Eine lokale Steuerung hängt nicht dauerhaft an einem Anbieter-Server. Wenn eine Cloud ausfällt, ein Anbieter seine Bedingungen ändert oder ein Dienst eingestellt wird, läuft die lokale Basis weiter.'),
      ),
      p(
        bold('3. Geschwindigkeit. '),
        t('Manche Steuerentscheidungen müssen schnell getroffen werden. Lokale Systeme können direkt reagieren, ohne Umweg über externe Server.'),
      ),
      p(
        bold('4. Anpassbarkeit. '),
        t('Jedes Haus ist anders. Ein lokales EMS lässt sich besser auf die konkrete Anlage, das Verbrauchsverhalten und die Prioritäten des Kunden anpassen.'),
      ),
      p(
        bold('5. Transparenz. '),
        t('Offene oder lokal einsehbare Systeme machen nachvollziehbarer, was gesteuert wird und warum. Das ist besonders wichtig, wenn Speicher, Wallbox, Wärmepumpe und Stromtarif zusammenarbeiten.'),
      ),
      p(
        bold('6. Zukunftsfähigkeit. '),
        t('Wer heute offen und lokal plant, hält sich Optionen offen: dynamische Strompreise, evcc-Integration, Batteriepool, Wärmepumpensteuerung oder spätere Erweiterungen.'),
      ),
    ),

    textBlock(
      h('h2', t('Cloud ist nicht automatisch schlecht – aber sie sollte optional sein')),
      p(
        t('Wir sind nicht grundsätzlich gegen Cloud-Dienste. Eine App, Fernwartung, Updates oder ein externer Wetterdienst können sinnvoll sein. Der Punkt ist ein anderer: Die Cloud sollte nicht die einzige Stelle sein, an der dein Energiesystem intelligent ist.'),
      ),
      p(t('Eine gute Architektur trennt sauber:')),
      ul(
        p(t('persönliche Verbrauchsmuster bleiben lokal')),
        p(t('neutrale externe Daten werden gezielt ergänzt')),
        p(t('Fernzugriff ist optional')),
        p(t('Steuerlogik funktioniert auch ohne dauerhafte Cloud-Verbindung')),
        p(t('der Kunde versteht, welche Daten wofür genutzt werden')),
      ),
      p(
        t('Genau diese Trennung wird in Zukunft wichtiger. Denn je mehr ein Energiesystem kann, desto größer wird die Versuchung, daraus ein Plattformmodell zu bauen.'),
      ),
      p(
        t('Und Plattformmodelle haben fast immer dieselbe Frage im Kern: '),
        bold('Wer kontrolliert die Daten – und wer verdient an der Flexibilität?'),
      ),
    ),

    textBlock(
      h('h2', t('Warum das beim Batteriepool besonders wichtig wird')),
      p(
        t('Batteriepools werden in den nächsten Jahren ein großes Thema. Die Idee ist sinnvoll: Viele kleine Heimspeicher werden virtuell gebündelt und können gemeinsam Flexibilität bereitstellen.'),
      ),
      p(
        t('Das kann helfen, Strom besser zu nutzen, Netze zu entlasten und auf Preissignale zu reagieren. Aber dafür braucht ein Pool Informationen – zum Beispiel Speicherstand, verfügbare Leistung, Lade- und Entladegrenzen, Netzzustand, Prognosen und mögliche Flexibilität.'),
      ),
      p(
        t('Die entscheidende Frage ist: Wie viel davon muss zentral verarbeitet werden – und wie viel kann lokal entschieden werden?'),
      ),
      p(
        t('Unser Ansatz ist klar: Ein fairer Batteriepool sollte nicht bedeuten, dass der Kunde die Kontrolle über seinen Speicher verliert. Der Speicher gehört dem Kunden. Die Entscheidung über Teilnahme und Prioritäten muss nachvollziehbar bleiben.'),
      ),
      p(
        t('Wenn Flexibilität wirtschaftlichen Mehrwert schafft, soll dieser Vorteil transparent beim Speicher-Eigentümer ankommen – nicht unsichtbar in einem Plattformmodell verschwinden.'),
      ),
    ),

    textBlock(
      h('h2', t('evcc als offene Basis für lokales Energiemanagement')),
      p(
        t('Eine der spannendsten Grundlagen für lokales Energiemanagement ist '),
        bold('evcc'),
        t('.'),
      ),
      p(
        t('evcc ist eine Open-Source-Software, die ursprünglich für PV-Überschussladen von Elektroautos entwickelt wurde. Inzwischen kann evcc deutlich mehr: Wallboxen, Fahrzeuge, Speicher, Wechselrichter, dynamische Tarife und weitere Komponenten können eingebunden werden.'),
      ),
      p(t('Warum evcc für uns interessant ist:')),
      ul(
        p(t('lokal lauffähig')),
        p(t('Open Source')),
        p(t('herstellerübergreifend')),
        p(t('aktive Community')),
        p(t('dynamische Stromtarife integrierbar')),
        p(t('gute Grundlage für offene Systeme')),
        p(t('kein klassisches Plattform-Lock-in')),
      ),
      p(
        t('evcc ist nicht für jeden Endkunden direkt einfach einzurichten. Genau deshalb braucht es Betriebe, die nicht nur Module montieren, sondern Energiesysteme verstehen.'),
      ),
      p(
        t('Für uns ist evcc kein Spielzeug für Bastler. Es ist ein ernstzunehmendes Fundament für offene, lokale Energiearchitektur.'),
      ),
    ),

    tippBlock(
      'Nicht nur „smart“ kaufen – steuerbar planen',
      p(
        t('Viele Geräte nennen sich smart, sind aber praktisch nur über eine Hersteller-App bedienbar. Für ein echtes lokales EMS brauchst du offene oder dokumentierte Schnittstellen. Deshalb sollte schon bei der Planung klar sein, wie Wechselrichter, Speicher, Wallbox und Wärmepumpe später miteinander sprechen können.'),
      ),
    ),

    textBlock(
      h('h2', t('Was du bei deiner Anlage heute beachten solltest')),
      p(
        t('Wenn du heute eine PV-Anlage planst, solltest du nicht nur auf Modulgröße, Speichergröße und Preis schauen. Du solltest auch fragen: Kann dieses System morgen noch erweitert und gesteuert werden?'),
      ),
      p(
        bold('Offene Schnittstellen. '),
        t('Wechselrichter, Speicher, Wallbox und Wärmepumpe sollten möglichst über dokumentierte Schnittstellen verfügen. Zum Beispiel Modbus, OCPP, EEBUS, SG-Ready oder eine andere lokale Integrationsmöglichkeit.'),
      ),
      p(
        bold('Lokale Messung. '),
        t('Ein gutes Energiesystem braucht saubere Messwerte. Ohne verlässliche Messung von Hausverbrauch, PV-Erzeugung, Speicher und Netzanschluss kann kein EMS sinnvoll steuern.'),
      ),
      p(
        bold('Wallbox nicht isoliert betrachten. '),
        t('Eine Wallbox ist oft die größte flexible Last im Haus. Sie sollte nicht einfach nur „smart“ aussehen, sondern wirklich steuerbar sein.'),
      ),
      p(
        bold('Wärmepumpe mitdenken. '),
        t('Eine Wärmepumpe kann Energie zeitlich verschieben – aber nur begrenzt und nur mit Rücksicht auf Komfort, Gebäude und Hydraulik. Deshalb muss sie fachlich sauber eingebunden werden.'),
      ),
      p(
        bold('Speicher nicht nur als Autarkiebaustein sehen. '),
        t('Ein Speicher ist heute Eigenverbrauchswerkzeug. Morgen kann er auch Teil von dynamischer Tarifoptimierung oder einem fairen Batteriepool sein. Dafür muss er aber steuerbar und offen integrierbar sein.'),
      ),
      p(
        bold('Keine vorschnelle Plattformbindung. '),
        t('Ein günstiges Paket kann verlockend sein. Aber wenn daran lange Vertragslaufzeiten, geschlossene Steuerung oder unklare Flexibilitätsmodelle hängen, sollte man genau hinschauen.'),
      ),
    ),

    textBlock(
      h('h2', t('PEAK.Flex: Unser Ansatz')),
      p(
        t('PEAK.Flex ist unsere Antwort auf genau diese Fragen. Wir wollen Energiemanagement nicht als Blackbox verkaufen. Und wir wollen Kundendaten nicht unnötig in fremde Clouds schieben.'),
      ),
      p(t('Unser Ansatz:')),
      ul(
        p(t('lokale Verarbeitung von Verbrauchsmustern')),
        p(t('offene Anlagenplanung auf evcc-Basis')),
        p(t('PV, Speicher, Wallbox und Wärmepumpe als Gesamtsystem')),
        p(t('externe Signale wie Wetter und EPEX nur ergänzend')),
        p(t('perspektivisch ein fairer Batteriepool mit transparentem Kundenvorteil')),
      ),
      p(
        t('PEAK.Flex ist heute noch kein anonymes Massenprodukt. Es ist unser Pilotprogramm für Kunden, die ihr Energiesystem bewusst offen und zukunftsfähig aufbauen wollen.'),
      ),
     p(
  t('Mehr dazu findest du hier: '),
  link('PEAK.Flex Pilotprogramm 2026', '/peak-flex'),
  t('.'),
),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die Frage „Cloud oder lokal?“ klingt technisch. In Wahrheit ist sie strategisch. Wer die Daten kontrolliert, kontrolliert langfristig auch die Steuerung. Und wer die Steuerung kontrolliert, entscheidet mit darüber, wie Speicher, Wallbox und Wärmepumpe wirtschaftlich genutzt werden.'),
      ),
      p(
        t('Deshalb sollte ein modernes Energiesystem nicht nur effizient sein. Es sollte offen, nachvollziehbar und kundenseitig gedacht sein.'),
      ),
      p(
        bold('Für uns ist klar: '),
        t('Verbrauchsmuster gehören ins Haus. Externe Daten dürfen helfen. Aber die wichtigste Logik sollte dort arbeiten, wo auch die Energie fließt – beim Kunden.'),
      ),
    ),

    ctaBlock({
      titel: 'Energiesystem offen und lokal planen lassen',
      text:
        'Du willst PV, Speicher, Wallbox und Wärmepumpe so planen, dass dein System offen bleibt und deine Verbrauchsmuster nicht unnötig in die Cloud wandern? Dann sprechen wir über deine Anlage.',
      buttonText: 'PEAK.Flex ansehen',
      buttonLink: '/peak-flex',
    }),
  ],

  faq: [
    faqItem(
      'Was ist der Unterschied zwischen Cloud-EMS und lokalem EMS?',
      'Bei einem Cloud-EMS werden Anlagendaten an Server des Anbieters übertragen und dort verarbeitet. Bei einem lokalen EMS läuft die wichtigste Steuerungslogik direkt im Haus. Externe Daten wie Wetterprognosen oder Strompreise können trotzdem ergänzt werden.',
    ),
    faqItem(
      'Sind Energiedaten wirklich sensibel?',
      'Ja. Einzelne Messwerte sind meist harmlos, aber über längere Zeit entstehen klare Verbrauchsmuster. Daraus lassen sich Rückschlüsse auf Anwesenheit, Tagesabläufe, Ladeverhalten, Heizverhalten und Urlaubszeiten ziehen.',
    ),
    faqItem(
      'Braucht ein lokales EMS gar keine Internetverbindung?',
      'Für die lokale Grundfunktion nicht zwingend. Für Wetterprognosen, dynamische Strompreise, Updates oder optionale Fernwartung ist eine Internetverbindung aber sinnvoll. Der Unterschied ist: Die persönliche Steuerlogik muss nicht dauerhaft in einer Cloud laufen.',
    ),
    faqItem(
      'Ist Cloud-Steuerung grundsätzlich schlecht?',
      'Nein. Cloud-Dienste können sinnvoll sein, etwa für App-Zugriff, Updates oder Fernwartung. Kritisch wird es, wenn persönliche Verbrauchsmuster dauerhaft hochgeladen werden müssen und die Anlage ohne Cloud ihre Intelligenz verliert.',
    ),
    faqItem(
      'Was hat das mit dynamischen Strompreisen zu tun?',
      'Dynamische Strompreise sind externe Signale. Sie sagen nichts Persönliches über den Kunden aus. Ein lokales EMS kann diese Preise abrufen und im Haus verarbeiten, ohne persönliche Verbrauchsmuster dauerhaft nach außen zu übertragen.',
    ),
    faqItem(
      'Was hat das mit einem Batteriepool zu tun?',
      'Ein Batteriepool nutzt die Flexibilität vieler Speicher. Dafür braucht es Steuerung und Daten. Entscheidend ist, dass der Kunde versteht, welche Daten genutzt werden, wer die Kontrolle hat und wie der wirtschaftliche Vorteil verteilt wird.',
    ),
    faqItem(
      'Warum setzt PEAK.Energy auf evcc?',
      'evcc ist lokal lauffähig, Open Source und herstellerübergreifend. Für uns ist das eine starke Grundlage für offene Energiesysteme ohne unnötiges Plattform-Lock-in.',
    ),
    faqItem(
      'Kann meine bestehende Anlage lokal steuerbar gemacht werden?',
      'Das hängt von den verbauten Komponenten ab. Wechselrichter, Speicher, Wallbox und Wärmepumpe müssen passende Schnittstellen bieten. Viele Anlagen lassen sich nachrüsten oder zumindest teilweise einbinden. Das prüfen wir im Einzelfall.',
    ),
    faqItem(
      'Ist PEAK.Flex schon ein fertiges Produkt?',
      'PEAK.Flex ist unser Pilotprogramm für offenes, lokales Energiemanagement. Heute planen und installieren wir Anlagen bereits evcc-ready. Die weitergehende Optimierung und der faire Batteriepool sind Perspektivbausteine im Pilotprogramm.',
    ),
  ],
}

await upsertRatgeberArticle(article)
