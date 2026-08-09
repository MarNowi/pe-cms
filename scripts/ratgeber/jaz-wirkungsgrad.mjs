import { upsertRatgeberArticle } from './_articleFactory.mjs'
import {
  t,
  bold,
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
  titel: 'JAZ, COP und SCOP: Was die Effizienz-Kennzahlen der Wärmepumpe wirklich aussagen',
  slug: 'jaz-wirkungsgrad',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'COP 5,2 im Prospekt, JAZ 3,1 im Betrieb – und der Nachbar redet von SCOP. Die Effizienz-Kennzahlen der Wärmepumpe verwirren mehr, als sie helfen, wenn man nicht weiß, was sie messen. Welche Zahl zählt, welche Werte realistisch sind und woran eine gute Anlage in der Praxis zu erkennen ist.',
  lesezeit: 8,
  seo: seo(
    'JAZ, COP, SCOP erklärt: Wärmepumpen-Effizienz verstehen | PEAK.Energy',
    'Wärmepumpen-Kennzahlen entwirrt: COP (Laborpunkt), SCOP (Normsaison) und JAZ (echte Praxis) – realistische Werte, die größten Effizienz-Stellhebel und warum die Auslegung wichtiger ist als das Datenblatt.',
  ),
  zusammenfassung: [
    summaryPoint(
      bold('COP'),
      t(' ist ein Laborwert für einen Betriebspunkt, '),
      bold('SCOP'),
      t(' ein genormter Saisondurchschnitt – die einzige Zahl, die Ihre Heizkosten wirklich beschreibt, ist die '),
      bold('Jahresarbeitszahl (JAZ)'),
      t(' im realen Betrieb.'),
    ),
    summaryPoint(
      t('Realistisch sind heute '),
      bold('JAZ 3,0–4,5 für Luft-Wärmepumpen'),
      t(' und '),
      bold('4,0–5,0+ für Erdwärme'),
      t(' – abhängig vor allem von der Vorlauftemperatur, nicht von der Marke.'),
    ),
    summaryPoint(
      t('Schon der Unterschied zwischen JAZ 3 und JAZ 4 bedeutet '),
      bold('rund 25 % weniger Stromverbrauch'),
      t(' – die Auslegung verdient deshalb mehr Aufmerksamkeit als der Prospektvergleich.'),
    ),
    summaryPoint(
      t('Eine JAZ unter 3 ist fast immer ein Auslegungs- oder Einstellungsproblem – und meist behebbar.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Drei Kennzahlen, drei verschiedene Fragen')),
      ul(
        p(
          bold('COP (Coefficient of Performance):'),
          t(' Das Verhältnis von Wärmeleistung zu Stromaufnahme in einem einzigen Laborpunkt, z. B. „A7/W35" – 7 °C Außenluft, 35 °C Vorlauf. Ein COP von 4,8 heißt: Unter genau diesen Bedingungen macht das Gerät aus 1 kWh Strom 4,8 kWh Wärme. Aussagekraft für Ihre Heizkosten: gering – der Winter besteht nicht aus 7-Grad-Tagen.'),
        ),
        p(
          bold('SCOP (Seasonal COP):'),
          t(' Der über eine genormte Heizsaison gemittelte COP – Grundlage des EU-Energielabels. Deutlich ehrlicher als der COP und gut zum '),
          bold('Vergleichen von Geräten'),
          t(', aber immer noch eine Normrechnung, nicht Ihr Haus.'),
        ),
        p(
          bold('JAZ (Jahresarbeitszahl):'),
          t(' Die Bilanz der echten Anlage im echten Haus über ein echtes Jahr – erzeugte Wärme geteilt durch verbrauchten Strom, inklusive Heizstab, Warmwasser und aller kalten Nächte. '),
          bold('Das ist die Zahl, die auf Ihrer Stromrechnung ankommt.'),
        ),
      ),
      p(
        t('Der typische Zusammenhang: Die JAZ liegt spürbar unter dem SCOP und weit unter dem Prospekt-COP. Ein Gerät mit COP 5 im Datenblatt kann im schlecht ausgelegten Altbau eine JAZ von 2,8 liefern – und dasselbe Gerät im passenden Haus eine 4,2.'),
      ),
    ),
    tabelleBlock('Realistische Jahresarbeitszahlen (Stand der Technik)', [
      {
        spalte1: 'Luft-Wasser-WP + Flächenheizung',
        spalte2: 'JAZ ca. 3,8–4,5',
        spalte3: 'Niedriger Vorlauf (30–35 °C) – der Idealfall im Neubau und sanierten Bestand',
      },
      {
        spalte1: 'Luft-Wasser-WP + Heizkörper (45–55 °C)',
        spalte2: 'JAZ ca. 3,0–3,8',
        spalte3: 'Der typische Altbau-Fall – gut auslegbar, Heizkörper-Check lohnt',
      },
      {
        spalte1: 'Sole-Wasser-WP (Erdwärme)',
        spalte2: 'JAZ ca. 4,0–5,0+',
        spalte3: 'Konstante Quelltemperatur zahlt sich aus – dafür höhere Erschließungskosten',
      },
      {
        spalte1: 'JAZ unter 3,0',
        spalte2: 'Warnsignal',
        spalte3: 'Meist Auslegungs-/Einstellungsfehler: zu hoher Vorlauf, Heizstab-Dauerbetrieb, falsche Hydraulik',
      },
    ]),
    textBlock(
      h('h2', t('Was die JAZ wirklich bestimmt')),
      p(
        t('Die Rangfolge der Einflussfaktoren überrascht viele – das Gerät steht nicht oben:'),
      ),
      ul(
        p(
          bold('1. Vorlauftemperatur:'),
          t(' Der dominante Faktor. Als Faustregel kostet jedes Grad mehr Vorlauf rund 2,5 % Effizienz – zwischen 35 °C und 55 °C liegt damit fast der Unterschied einer ganzen JAZ-Stufe. Details im Beitrag zur Vorlauftemperatur.'),
        ),
        p(
          bold('2. Auslegung und Hydraulik:'),
          t(' Passende Heizlast, hydraulischer Abgleich, richtig dimensionierte Heizkörper, sinnvoll eingestellte Heizkurve. Hier entstehen die stillen Verluste – und die vermeidbaren Heizstab-Stunden.'),
        ),
        p(
          bold('3. Warmwasser-Anteil:'),
          t(' Warmwasser braucht 50 °C und mehr und drückt die Gesamt-JAZ – je größer sein Anteil (kleines Haus, viele Personen), desto spürbarer. Legionellen-Programme mit Augenmaß statt täglicher 65-Grad-Aufheizung helfen.'),
        ),
        p(
          bold('4. Wärmequelle und Klima:'),
          t(' Erdreich schlägt Luft, milde Region schlägt Höhenlage – am Niederrhein sind die Bedingungen für Luft-Wärmepumpen ausgesprochen gut.'),
        ),
        p(
          bold('5. Das Gerät selbst:'),
          t(' Moderne Invertergeräte namhafter Hersteller liegen effizienzseitig nah beieinander – die Unterschiede im Datenblatt sind kleiner als die Unterschiede, die eine gute oder schlechte Auslegung macht.'),
        ),
      ),
    ),
    hinweisBlock(
      'JAZ und Wirtschaftlichkeit: der Strompreis-Hebel',
      p(
        t('Die JAZ übersetzt sich direkt in Heizkosten: 15.000 kWh Wärmebedarf kosten bei JAZ 3 und 28 ct/kWh Wärmepumpenstrom rund 1.400 € – bei JAZ 4 nur 1.050 €. Mit PV-Strom vom eigenen Dach für die Sonnenstunden und einem Wärmepumpentarif oder dynamischen Tarif für den Rest sinkt die Rechnung weiter. Effizienz und Strombezugskosten sind die zwei Hebel – wer beide zieht, heizt konkurrenzlos günstig.'),
      ),
    ),
    tippBlock(
      'JAZ messen statt glauben',
      p(
        t('Ob die versprochene Effizienz ankommt, zeigt nur die Messung: Wärmemengenzähler plus Stromzähler für die Wärmepumpe – bei Förderanlagen ohnehin vorgesehen – machen die reale JAZ sichtbar. Ein Monitoring, das beides erfasst, deckt Ausreißer (Heizstab!) sofort auf und ist die Grundlage für Nachjustierungen der Heizkurve im ersten Winter. Wir richten das standardmäßig mit ein.'),
      ),
    ),
    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('COP verkauft, SCOP vergleicht, JAZ bezahlt: Wer Wärmepumpen beurteilen will, sollte Prospektwerte als das nehmen, was sie sind – Laborpunkte – und die Aufmerksamkeit dorthin lenken, wo die Effizienz tatsächlich entsteht: Vorlauftemperatur, Auslegung, Einstellung. Eine JAZ zwischen 3 und 4,5 ist im Bestand realistisch erreichbar; alles darunter ist kein Schicksal, sondern ein Arbeitsauftrag.'),
      ),
      p(
        bold('Deshalb beginnt bei uns jede Wärmepumpe mit Rechnen und Messen'),
        t(': Heizlast, Vorlauf-Check, Hydraulik – und nach der Installation mit einem Monitoring, das die versprochene JAZ überprüfbar macht. Effizienz ist kein Prospektversprechen, sondern ein Messergebnis.'),
      ),
    ),
    ctaBlock({
      titel: 'Realistische JAZ für Ihr Haus ermitteln',
      text:
        'Heizlastberechnung, Vorlauf-Analyse und ehrliche JAZ-Prognose statt Prospekt-COP – inklusive Monitoring, das die Effizienz im Betrieb nachweist.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Was ist eine gute Jahresarbeitszahl?',
      'Im Bestand mit Heizkörpern: 3,0–3,8. Mit Flächenheizung: 3,8–4,5. Erdwärme: 4,0 und mehr. Werte unter 3,0 deuten auf Auslegungs- oder Einstellungsprobleme hin – zu hoher Vorlauf und unnötige Heizstab-Stunden sind die häufigsten Ursachen.',
    ),
    faqItem(
      'Warum erreicht meine Wärmepumpe den Prospekt-COP nicht?',
      'Weil der COP einen Laborpunkt beschreibt (z. B. 7 °C Außenluft, 35 °C Vorlauf), Ihr Winter aber aus kalten Nächten, 50 °C Heizkörper-Vorlauf und Warmwasserbereitung besteht. Das ist normal. Vergleichen Sie Ihre gemessene JAZ mit den realistischen Bandbreiten – nicht mit dem Datenblatt.',
    ),
    faqItem(
      'Lohnt sich ein Gerät mit höherem SCOP-Wert?',
      'Bei sonst gleichen Bedingungen ja – aber die Unterschiede zwischen guten Geräten sind meist klein gegen den Effekt der Auslegung. Ein Mittelklasse-Gerät mit 40 °C Vorlauf schlägt das Premium-Gerät mit 60 °C deutlich. Erst die Anlage optimieren, dann über Geräte-Feinheiten reden.',
    ),
    faqItem(
      'Wie kann ich meine JAZ verbessern?',
      'Die wirksamsten Schritte: Heizkurve absenken (so weit, wie es der Komfort erlaubt), hydraulischen Abgleich machen lassen, einzelne zu kleine Heizkörper tauschen, Warmwassertemperatur mit Augenmaß einstellen und Heizstab-Einsätze im Monitoring kontrollieren. Zusammen ist oft eine halbe bis ganze JAZ-Stufe drin.',
    ),
    faqItem(
      'Zählt der Heizstab in die JAZ hinein?',
      'Ja – und genau deshalb ist die JAZ die ehrlichste Kennzahl: Sie bilanziert die gesamte Anlage inklusive Heizstab-Strom. Ein hoher Heizstab-Anteil drückt die JAZ sofort sichtbar und ist das klassische Signal, dass Auslegung oder Einstellung nachjustiert werden müssen.',
    ),
  ],
}

await upsertRatgeberArticle(article)
