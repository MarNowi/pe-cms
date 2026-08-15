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
  titel: 'Mieterstrom oder gemeinschaftliche Gebäudeversorgung: Was ist 2026 sinnvoller?',
  slug: 'mieterstrom-gemeinschaftliche-gebaeudeversorgung-2026',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'PV-Strom im Mehrfamilienhaus kann 2026 über klassisches Mieterstrommodell oder gemeinschaftliche Gebäudeversorgung genutzt werden. Beide Modelle klingen ähnlich, unterscheiden sich aber bei Reststrom, Messung, Förderung, Verträgen und Aufwand deutlich. Wir vergleichen sie praxisnah.',
  lesezeit: 17,

  seo: seo(
    'Mieterstrom vs. Gebäudeversorgung 2026 | PEAK.Energy',
    'Mieterstrom oder gemeinschaftliche Gebäudeversorgung? Unterschiede bei Reststrom, Smart Metern, Mieterstromzuschlag, Abrechnung und Aufwand 2026.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Beim klassischen '),
      bold('Mieterstrom'),
      t(' erhält der Teilnehmer grundsätzlich ein vollständiges Stromprodukt aus lokalem Solarstrom und erforderlichem Reststrom vom Mieterstromlieferanten.'),
    ),
    summaryPoint(
      t('Bei der '),
      bold('gemeinschaftlichen Gebäudeversorgung nach § 42b EnWG'),
      t(' wird nur der lokal erzeugte Gebäudestrom zugeteilt. Den restlichen Strom bezieht jeder Teilnehmer weiterhin über einen selbst gewählten normalen Stromliefervertrag.'),
    ),
    summaryPoint(
      t('Für die gemeinschaftliche Gebäudeversorgung müssen Erzeugung und Verbrauch der Teilnehmer '),
      bold('viertelstündlich gemessen'),
      t(' und der PV-Strom anhand eines vereinbarten Aufteilungsschlüssels zugeordnet werden.'),
    ),
    summaryPoint(
      t('Der '),
      bold('Mieterstromzuschlag'),
      t(' ist bei der gemeinschaftlichen Gebäudeversorgung ausdrücklich ausgeschlossen. Beim geförderten Mieterstrom kann er unter den gesetzlichen Voraussetzungen in Anspruch genommen werden.'),
    ),
    summaryPoint(
      t('Welches Modell wirtschaftlich besser ist, hängt von Gebäude, Teilnehmerzahl, Messkonzept, Dienstleisterkosten, Eigenverbrauch und Organisationsaufwand ab. '),
      bold('Einfacher bedeutet nicht automatisch wirtschaftlicher.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum es jetzt zwei Wege für PV-Strom im Mehrfamilienhaus gibt')),
      p(
        t('Photovoltaik auf Mehrfamilienhäusern war technisch nie das eigentliche Problem. Die Herausforderung war die energiewirtschaftliche Verteilung des Stroms auf mehrere Wohnungen. Wer bekommt welche Kilowattstunde? Wer liefert den Reststrom? Wer rechnet ab? Und wer übernimmt die Pflichten eines Stromlieferanten?'),
      ),
      p(
        t('Mit der gemeinschaftlichen Gebäudeversorgung nach § 42b EnWG gibt es neben dem klassischen Mieterstrom ein weiteres Modell. Beide ermöglichen, lokal erzeugten PV-Strom innerhalb eines Gebäudes zu nutzen. Die Rollen dahinter sind aber unterschiedlich.'),
      ),
    ),

    tabelleBlock('Mieterstrom und gemeinschaftliche Gebäudeversorgung im Vergleich', [
      {
        spalte1: 'Gelieferter Strom',
        spalte2: 'Mieterstrom: PV-Strom + Reststrom als vollständige Lieferung',
        spalte3: 'Gebäudeversorgung: nur zugeteilter PV-Strom; Reststromvertrag bleibt separat',
      },
      {
        spalte1: 'Reststromlieferung',
        spalte2: 'Mieterstromlieferant organisiert sie',
        spalte3: 'jeder Teilnehmer behält eigenen Lieferanten',
      },
      {
        spalte1: 'Mieterstromzuschlag',
        spalte2: 'unter gesetzlichen Voraussetzungen möglich',
        spalte3: 'ausdrücklich ausgeschlossen',
      },
      {
        spalte1: 'Messung',
        spalte2: 'abhängig vom Mieterstrom- und Messkonzept',
        spalte3: 'Erzeugung und Teilnehmer viertelstündlich',
      },
      {
        spalte1: 'Lieferantenpflichten',
        spalte2: 'umfangreicher, da Vollstromlieferung',
        spalte3: 'für Gebäudestrom vereinfacht',
      },
      {
        spalte1: 'Räumlicher Rahmen',
        spalte2: 'je nach Modell auch Quartiersbezug möglich',
        spalte3: 'dasselbe Gebäude und dessen Nebenanlagen',
      },
    ]),

    textBlock(
      h('h2', t('Wie funktioniert klassischer Mieterstrom?')),
      p(
        t('Beim geförderten Mieterstrom wird Solarstrom aus einer Anlage am Gebäude an die teilnehmenden Nutzer geliefert. Reicht die PV-Erzeugung nicht aus, organisiert der Mieterstromlieferant zusätzlich den notwendigen Strom aus dem öffentlichen Netz.'),
      ),
      p(
        t('Für den Teilnehmer fühlt sich das deshalb wie ein normaler Stromvertrag an: Er bekommt eine vollständige Stromlieferung von einem Vertragspartner. Für den Betreiber bedeutet das allerdings, dass neben der PV-Technik auch energiewirtschaftliche Pflichten, Vertragswesen und Abrechnung organisiert werden müssen.'),
      ),
      p(
        t('Die Bundesnetzagentur weist für geförderten Mieterstrom zudem auf Verbraucherschutzregeln hin. Dazu gehören unter anderem Vorgaben zu Vertragslaufzeit und Preisgrenze. Details stellt die '),
        link('Bundesnetzagentur zum Mieterstrom', 'https://www.bundesnetzagentur.de/DE/Vportal/Energie/Vertragsarten/Mieterstrom/start.html', { newTab: true }),
        t(' bereit.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie funktioniert die gemeinschaftliche Gebäudeversorgung?')),
      p(
        t('Bei § 42b EnWG wird nicht versucht, aus dem PV-Betreiber einen vollständigen Stromlieferanten zu machen. Stattdessen wird nur der lokal erzeugte Gebäudestrom unter den teilnehmenden Wohnungen beziehungsweise Gewerbeeinheiten aufgeteilt.'),
      ),
      p(
        t('Jeder Teilnehmer behält für den Reststrom seinen bestehenden beziehungsweise frei gewählten Stromlieferanten. Die PV-Anlage deckt also nur einen Teil des Verbrauchs; der übrige Strom kommt weiterhin aus dem normalen Liefervertrag.'),
      ),
      p(
        t('Genau diese Trennung reduziert einen wesentlichen Teil der organisatorischen Komplexität. Der Anlagenbetreiber muss keine vollständige und jederzeitige Stromversorgung sicherstellen.'),
      ),
    ),

    hinweisBlock(
      'Gemeinschaftliche Gebäudeversorgung ist kein „Stromliefervertrag light“',
      p(
        t('Es bleiben trotzdem Verträge, Messung, Datenzuordnung und Abrechnung notwendig. Vereinfacht wird vor allem die Rolle des Betreibers, weil er nicht zusätzlich den gesamten Reststrom für alle Teilnehmer beschaffen und als Vollstromprodukt liefern muss.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum 15-Minuten-Werte so wichtig sind')),
      p(
        t('Die gemeinschaftliche Gebäudeversorgung funktioniert nicht über eine Jahresrechnung nach dem Motto „Wohnung A bekommt 30 Prozent der PV-Erzeugung“. Das Gesetz ordnet den Strom in '),
        bold('15-Minuten-Zeitintervallen'),
        t(' zu.'),
      ),
      p(
        t('Dabei kann einem Teilnehmer höchstens so viel PV-Strom zugeteilt werden, wie er im jeweiligen Zeitintervall tatsächlich verbraucht hat. So bleibt nachvollziehbar, welche lokal erzeugte Energie zeitgleich innerhalb des Gebäudes genutzt wurde.'),
      ),
      p(
        t('Dafür müssen sowohl die PV-Erzeugung als auch die Verbräuche der teilnehmenden Letztverbraucher viertelstündlich erfasst werden. Das macht intelligente Messsysteme zu einem zentralen Baustein des Modells.'),
      ),
    ),

    textBlock(
      h('h2', t('Statischer oder dynamischer Aufteilungsschlüssel?')),
      p(
        t('Im Gebäudestromnutzungsvertrag wird festgelegt, wie der erzeugte Strom verteilt wird. Ein statischer Schlüssel könnte beispielsweise jeder von vier Wohnungen 25 Prozent zuordnen. Verbraucht eine Wohnung ihren Anteil in einer Viertelstunde nicht, kann dadurch Solarstrom ungenutzt für die Teilnehmer bleiben und ins Netz fließen.'),
      ),
      p(
        t('Ein dynamischer Schlüssel kann die innerhalb eines Zeitintervalls verfügbare PV-Energie stärker nach dem tatsächlichen Verbrauch der Teilnehmer verteilen. Das kann den gemeinschaftlichen Eigenverbrauch erhöhen – insbesondere wenn die Verbrauchsprofile unterschiedlich sind.'),
      ),
      p(
        t('Das Bundeswirtschaftsministerium beschreibt beide Varianten in seinen '),
        link('FAQ zur gemeinschaftlichen Gebäudeversorgung', 'https://www.bundeswirtschaftsministerium.de/Redaktion/DE/FAQ/Solarpaket/faq-solarpaket.html', { newTab: true }),
        t('.'),
      ),
    ),

    tippBlock(
      'Die beste Verteilung entsteht nicht nur auf dem Papier',
      p(
        t('Wärmepumpe, Ladepunkte, Allgemeinstrom oder Batteriespeicher können den Eigenverbrauch eines Mehrfamilienhauses stark verändern. Deshalb sollte der Aufteilungsschlüssel nicht isoliert von der technischen Anlagenplanung betrachtet werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Mieterstromzuschlag: der wichtigste Förderunterschied')),
      p(
        t('Beim geförderten Mieterstrom kann für den lokal gelieferten Solarstrom unter den Voraussetzungen des EEG ein Mieterstromzuschlag beansprucht werden. Dieser soll unter anderem den zusätzlichen Aufwand des Mieterstrommodells berücksichtigen.'),
      ),
      p(
        t('Bei der gemeinschaftlichen Gebäudeversorgung ist dieser Zuschlag gesetzlich ausdrücklich ausgeschlossen. Das ist kein Versehen: Das Modell soll gerade durch geringere Lieferantenpflichten einfacher sein.'),
      ),
      p(
        t('Überschüssiger Solarstrom, der nicht im Gebäude genutzt wird, kann dagegen auch bei der gemeinschaftlichen Gebäudeversorgung nach den jeweils einschlägigen EEG-Regeln ins Netz eingespeist und vergütet werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ist für Vermieter oder WEG einfacher?')),
      p(
        t('Wenn der Eigentümer oder die WEG möglichst wenig mit Strombeschaffung und Vollversorgung zu tun haben möchte, ist die gemeinschaftliche Gebäudeversorgung konzeptionell interessant. Die Teilnehmer behalten ihre bisherigen Stromlieferanten und beziehen zusätzlich den zugeteilten Solarstrom.'),
      ),
      p(
        t('Das bedeutet aber nicht, dass die WEG einfach eine PV-Anlage montiert und danach nichts mehr tun muss. Messstellenbetrieb, Aufteilungsschlüssel, Gebäudestromnutzungsverträge, Abrechnung und Datenprozesse müssen funktionieren. In vielen Projekten wird dafür ein spezialisierter Dienstleister sinnvoll sein.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann kann Mieterstrom trotzdem die bessere Lösung sein?')),
      p(
        t('Mieterstrom kann interessant sein, wenn ein professioneller Betreiber oder Dienstleister ohnehin die energiewirtschaftliche Abwicklung übernimmt und ein vollständiges lokales Stromprodukt angeboten werden soll. Dann kann auch der Mieterstromzuschlag in die Wirtschaftlichkeitsrechnung einfließen.'),
      ),
      p(
        t('Gerade bei größeren Projekten sollte man deshalb nicht automatisch das vermeintlich einfachere Modell wählen. Entscheidend sind Teilnehmerzahl, Erzeugungsprofil, Messkosten, Dienstleisterkosten, lokale Stromnutzung, Reststrombeschaffung und die langfristige Vertragsorganisation.'),
      ),
    ),

    tabelleBlock('Welches Modell passt eher?', [
      {
        spalte1: 'Eigentümer will keine Reststromlieferung organisieren',
        spalte2: 'Gebäudeversorgung eher interessant',
        spalte3: 'Teilnehmer behalten eigene Lieferanten',
      },
      {
        spalte1: 'Komplettes Stromprodukt aus einer Hand gewünscht',
        spalte2: 'Mieterstrom eher interessant',
        spalte3: 'PV- und Reststrom werden gemeinsam geliefert',
      },
      {
        spalte1: 'Mieterstromzuschlag soll genutzt werden',
        spalte2: 'Mieterstrom prüfen',
        spalte3: 'bei Gebäudeversorgung ausgeschlossen',
      },
      {
        spalte1: 'Teilnehmer sollen Lieferanten frei behalten',
        spalte2: 'Gebäudeversorgung sehr passend',
        spalte3: 'Reststromvertrag bleibt separat',
      },
      {
        spalte1: 'Mehrere Gebäude / Quartier',
        spalte2: 'gesonderte Prüfung nötig',
        spalte3: '§42b ist auf ein Gebäude und Nebenanlagen begrenzt',
      },
    ]),

    hinweisBlock(
      'Rechtslage rund um „Kundenanlagen“ weiter beobachten',
      p(
        t('Das Bundeswirtschaftsministerium weist darauf hin, dass die Auswirkungen des EuGH-Urteils vom 28. November 2024 zum Begriff der Kundenanlage weiterhin geprüft werden. Bei konkreten Mehrparteienprojekten sollte die energierechtliche und messtechnische Ausgestaltung deshalb immer mit aktuellem Stand geplant werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Technik zuerst: Ohne gutes Messkonzept funktioniert kein Modell')),
      p(
        t('Ob Mieterstrom oder gemeinschaftliche Gebäudeversorgung: Bevor Verträge geschrieben werden, muss klar sein, wie die Anlage elektrisch aufgebaut und gemessen wird. Anzahl der Zähler, Smart-Meter-Rollout, PV-Erzeugungsmessung, Allgemeinstrom, Wärmepumpe, Speicher und vorhandene Hausanschlüsse beeinflussen das Konzept.'),
      ),
      p(
        t('Gerade bei Bestandsgebäuden lohnt deshalb eine frühe Bestandsaufnahme des Zählerschranks und der Hausverteilung. Das verhindert, dass ein wirtschaftlich schön gerechnetes Modell später an der Mess- oder Elektroinfrastruktur scheitert.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Das Geschäftsmodell muss zum Gebäude passen')),
      p(
        t('Gemeinschaftliche Gebäudeversorgung ist eine echte Vereinfachung, weil der Betreiber nicht automatisch zum Vollstromlieferanten für alle Teilnehmer werden muss. Mieterstrom bleibt trotzdem attraktiv, wenn ein vollständiges Stromprodukt und professionelle Abwicklung gewünscht sind.'),
      ),
      p(
        t('Wir würden die Entscheidung deshalb nicht mit einem Schlagwort treffen. Zuerst gehören '),
        bold('Gebäude, PV-Potenzial, Teilnehmer, Verbrauch, Messkonzept und Betrieb'),
        t(' auf den Tisch. Danach lässt sich entscheiden, welches Modell technisch und wirtschaftlich wirklich passt.'),
      ),
    ),

    ctaBlock({
      titel: 'PV im Mehrfamilienhaus richtig aufsetzen',
      text:
        'Wir schauen zuerst auf Dach, Elektroanlage, Messkonzept und reale Verbräuche. Darauf lässt sich anschließend ein tragfähiges Mieterstrom- oder Gebäudestrommodell aufbauen.',
      buttonText: 'Mehrfamilienhaus anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist der Unterschied zwischen Mieterstrom und gemeinschaftlicher Gebäudeversorgung?',
      'Beim Mieterstrom erhält der Teilnehmer grundsätzlich ein vollständiges Stromprodukt aus lokalem Solarstrom und Reststrom. Bei der gemeinschaftlichen Gebäudeversorgung wird nur der lokale Gebäudestrom zugeteilt; den Reststrom bezieht jeder Teilnehmer weiterhin über einen eigenen Stromlieferanten.',
    ),
    faqItem(
      'Gibt es bei gemeinschaftlicher Gebäudeversorgung einen Mieterstromzuschlag?',
      'Nein. § 42b EnWG schließt die Anwendung des Mieterstromzuschlags ausdrücklich aus. Überschüssiger eingespeister PV-Strom kann aber nach den jeweils geltenden EEG-Regeln vergütet werden.',
    ),
    faqItem(
      'Braucht gemeinschaftliche Gebäudeversorgung Smart Meter?',
      'Für das Modell müssen Erzeugung und die Strombezugsmengen der teilnehmenden Letztverbraucher viertelstündlich gemessen werden. In der praktischen Umsetzung spielen intelligente Messsysteme deshalb eine zentrale Rolle.',
    ),
    faqItem(
      'Kann jeder Mieter seinen Stromlieferanten behalten?',
      'Bei der gemeinschaftlichen Gebäudeversorgung ja: Der Teilnehmer kann den ergänzenden Reststrom weiterhin von einem Lieferanten seiner Wahl beziehen. Der Gebäudestromvertrag darf diese Wahl nicht einschränken.',
    ),
    faqItem(
      'Ist gemeinschaftliche Gebäudeversorgung immer günstiger als Mieterstrom?',
      'Nein. Sie reduziert bestimmte organisatorische Pflichten, verzichtet aber auf den Mieterstromzuschlag und benötigt ebenfalls Messung, Datenverarbeitung und Abrechnung. Die Wirtschaftlichkeit muss für jedes Gebäude separat gerechnet werden.',
    ),
  ],
}

await upsertRatgeberArticle(article)
