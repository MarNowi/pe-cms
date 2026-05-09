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
  titel: 'Welche Wärmepumpe für mein Haus? Luft, Sole und Wasser im Vergleich',
  slug: 'welche-waermepumpe-fuer-mein-haus',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Luft-Wasser, Sole-Wasser oder Wasser-Wasser? Die drei Wärmepumpen-Typen unterscheiden sich in Effizienz, Erschließungskosten, Platzbedarf und Genehmigungsaufwand. Welche für dein Haus passt, hängt nicht vom Bauchgefühl ab, sondern von Grundstück, Bestand und langfristiger Wirtschaftlichkeit.',
  lesezeit: 10,

  seo: seo(
    'Welche Wärmepumpe für mein Haus? Vergleich 2026 | PEAK.Energy',
    'Luft-Wasser, Sole-Wasser oder Wasser-Wasser-Wärmepumpe – welche passt zu meinem Haus? Ehrlicher Vergleich von Effizienz, Kosten, Erschließung und Genehmigung.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Die drei Hauptarten unterscheiden sich nach Wärmequelle: '),
      bold('Luft, Erdreich (Sole) oder Grundwasser'),
      t('. Jede hat ihre Stärken – aber auch Voraussetzungen, die nicht jedes Grundstück erfüllt.'),
    ),
    summaryPoint(
      t('Luft-Wasser-Wärmepumpen sind '),
      bold('die am häufigsten verbaute Variante'),
      t(' – günstigste Anschaffung, einfachste Installation, niedrigerer Wirkungsgrad im Winter, Schallthema beachten.'),
    ),
    summaryPoint(
      t('Sole-Wasser-Wärmepumpen (Erdwärme) liefern über das Jahr '),
      bold('die konstantere und höhere Effizienz'),
      t(' – aber mit deutlich höheren Erschließungskosten und Genehmigungsaufwand.'),
    ),
    summaryPoint(
      t('Wasser-Wasser-Wärmepumpen sind die '),
      bold('effizienteste Variante'),
      t(' – brauchen aber Grundwasserzugang, wasserrechtliche Genehmigung und passenden geologischen Untergrund. Selten umsetzbar.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('Wer „Wärmepumpe" sagt, meint meistens automatisch eine Luft-Wasser-Wärmepumpe – die mit dem Außengerät, das aussieht wie eine Klimaanlage. Diese Variante ist 2026 die mit Abstand häufigste in Neubau und Modernisierung. Aber sie ist nicht die einzige, und nicht in jedem Fall die beste.'),
      ),
      p(
        t('Wärmepumpen unterscheiden sich vor allem nach der Wärmequelle: Luft, Erdreich oder Grundwasser. Diese Wahl hat starken Einfluss auf '),
        bold('Anschaffungskosten, Wirkungsgrad, Platzbedarf, Genehmigungsaufwand und Lebensdauer'),
        t(' – und damit auf die langfristige Wirtschaftlichkeit. Welcher Typ passt, lässt sich nicht pauschal beantworten – aber mit Blick auf Grundstück, Bestand und Verbrauch in den meisten Fällen klar einordnen.'),
      ),
    ),

    textBlock(
      h('h2', t('Luft-Wasser-Wärmepumpe: Die häufigste Variante')),
      p(
        t('Die Luft-Wasser-Wärmepumpe entzieht der Außenluft Wärme und überträgt sie auf das Heizungswasser im Haus. Sie braucht kein erschlossenes Grundstück, keine Bohrung, keine wasserrechtliche Genehmigung. Das macht sie zur '),
        bold('einfachsten und günstigsten Variante'),
        t(' in Anschaffung und Installation.'),
      ),
      p(
        t('Typische Anschaffungskosten 2026 inklusive Installation: '),
        bold('22.000 € bis 35.000 €'),
        t(' für ein Einfamilienhaus, je nach Größe, Aufstellung und Hydraulikaufwand. Es gibt zwei Bauformen: Monoblock (alles im Außengerät) und Split (Außen- und Innengerät). Monoblock ist meist einfacher, Split eignet sich für eingeschränkten Aufstellungsplatz.'),
      ),
      p(
        bold('Stärken'),
        t(': Geringer Platzbedarf, niedrige Anschaffungskosten, schnelle Installation, kein Genehmigungsaufwand. '),
        bold('Schwächen'),
        t(': Effizienz sinkt bei niedrigen Außentemperaturen – an einem -10°C-Tag arbeitet sie spürbar weniger effizient als bei +5°C. Schallthema beachten (siehe separater Ratgeber zur Schallproblematik). Außenoptik im Garten – nicht jedem gefällt das.'),
      ),
    ),

    textBlock(
      h('h2', t('Sole-Wasser-Wärmepumpe: Die Erdwärme-Variante')),
      p(
        t('Die Sole-Wasser-Wärmepumpe nutzt Erdwärme. Eine Soleflüssigkeit zirkuliert durch Erdsonden (Tiefenbohrungen, typisch 60 bis 100 m) oder Erdkollektoren (flach im Garten verlegt) und transportiert die Wärme aus dem Untergrund ins Haus. '),
        bold('Die Bodentemperatur ist über das Jahr konstant'),
        t(' – das macht diese Variante effizient, gerade im Winter, wenn die Luft-WP nachgibt.'),
      ),
      p(
        t('Anschaffungskosten 2026 inklusive Erschließung: '),
        bold('30.000 € bis 45.000 €'),
        t(' – also 8.000 € bis 15.000 € mehr als eine Luft-WP. Der Aufpreis liegt vor allem in der Bohrung oder im Erdkollektor.'),
      ),
      p(
        bold('Stärken'),
        t(': Hohe und stabile Jahresarbeitszahl (JAZ) – meist zwischen 4,0 und 4,7. Lange Lebensdauer der Erdsonden (50+ Jahre), geräuschlos im Außenbereich, kein Schallthema. '),
        bold('Schwächen'),
        t(': Höhere Investition, Bohrungen sind genehmigungspflichtig (untere Wasserbehörde), nicht jedes Grundstück geeignet (Geologie, Trinkwasserschutzgebiete schließen aus), längere Installationszeit. Erdkollektoren brauchen Gartenfläche.'),
      ),
    ),

    textBlock(
      h('h2', t('Wasser-Wasser-Wärmepumpe: Die effizienteste Variante')),
      p(
        t('Die Wasser-Wasser-Wärmepumpe (auch Grundwasser-Wärmepumpe) nutzt das Grundwasser als Wärmequelle. Aus einem Förderbrunnen wird Grundwasser entnommen, der Wärmepumpe zugeführt und über einen Schluckbrunnen wieder ins Erdreich zurückgeführt. Die Grundwassertemperatur ist '),
        bold('ganzjährig stabil bei 8 bis 12 °C'),
        t(' – wärmer als Erdsonden im Winter, was den Wirkungsgrad nochmal hebt.'),
      ),
      p(
        t('Anschaffungskosten 2026 inklusive Brunnenbohrung und Genehmigung: '),
        bold('30.000 € bis 50.000 €'),
        t(' für ein Einfamilienhaus.'),
      ),
      p(
        bold('Stärken'),
        t(': Höchste Effizienz aller Varianten – JAZ oft 4,5 bis 5,5. Konstantes Quellenniveau auch bei Frost. '),
        bold('Schwächen'),
        t(': Wasserrechtliche Genehmigung pflichtig, Voraussetzung ist genügend ergiebiges und nicht zu eisenhaltiges Grundwasser, regelmäßige Wartung der Brunnen, Standort muss von der unteren Wasserbehörde freigegeben sein. In der Praxis '),
        bold('für die meisten Privathäuser keine realistische Option'),
        t(' – weil entweder keine Genehmigung möglich oder das Grundwasser ungeeignet.'),
      ),
    ),

    tabelleBlock('Die drei Wärmepumpen-Typen im Vergleich', [
      {
        spalte1: 'Wärmequelle',
        spalte2:
          'Luft-WP: Außenluft · Sole-WP: Erdreich · Wasser-WP: Grundwasser',
        spalte3:
          'Bestimmt direkt die Effizienz – Luft schwankt, Erdreich ist stabil, Grundwasser ist ganzjährig wärmer als Erdreich',
      },
      {
        spalte1: 'Anschaffungskosten 2026',
        spalte2:
          'Luft: 22.000–35.000 € · Sole: 30.000–45.000 € · Wasser: 30.000–50.000 €',
        spalte3:
          'Inkl. Erschließung und Installation. Förderfähige Kosten (KfW 458) sind auf 30.000 € pro WE gedeckelt – größere Anlagen werden anteilig bezuschusst',
      },
      {
        spalte1: 'Jahresarbeitszahl (JAZ) typisch',
        spalte2:
          'Luft: 3,0–4,0 · Sole: 4,0–4,7 · Wasser: 4,5–5,5',
        spalte3:
          'JAZ höher = günstiger im Betrieb. Über 20 Jahre macht der Unterschied zwischen JAZ 3,5 und 4,5 mehrere tausend Euro Stromkosten aus',
      },
      {
        spalte1: 'Genehmigung',
        spalte2:
          'Luft: keine · Sole: untere Wasserbehörde · Wasser: wasserrechtliche Genehmigung',
        spalte3:
          'Luft-WP ist genehmigungsfrei, Sole und Wasser brauchen behördlichen Bescheid. Standort und Geologie sind ausschlaggebend',
      },
      {
        spalte1: 'Effizienzbonus KfW (5 %)',
        spalte2:
          'Luft: nur mit R290 · Sole: ja · Wasser: ja',
        spalte3:
          'Sole und Wasser bekommen den Bonus automatisch. Luft-WP nur, wenn das Kältemittel ein natürliches ist (z. B. Propan/R290)',
      },
    ]),

    hinweisBlock(
      'JAZ statt COP – die richtige Kennzahl',
      p(
        t('In Datenblättern steht oft der COP (Coefficient of Performance) – der Wirkungsgrad bei einem konkreten Betriebspunkt. Praktisch relevant ist aber die '),
        bold('Jahresarbeitszahl (JAZ)'),
        t(' – das durchschnittliche Verhältnis aus genutzter Wärme und eingesetztem Strom über ein ganzes Jahr. Eine Luft-WP mit COP 4,5 (bei +7 °C Außentemperatur) kann eine JAZ von 3,2 haben, wenn das Haus in der Praxis viel Wärme an kalten Tagen braucht. Wer Wärmepumpen vergleichen will, fragt deshalb nach der prognostizierten JAZ – nicht nach dem schönsten COP-Wert.'),
      ),
    ),

    textBlock(
      h('h2', t('Welcher Typ für welches Haus?')),
      p(
        t('Eine Faustregel, die in den meisten Fällen trägt:'),
      ),
      ul(
        p(
          bold('Einfamilienhaus, Standardgrundstück, Modernisierung'),
          t(': Luft-Wasser-Wärmepumpe ist meist die richtige Wahl. Günstigste Anschaffung, ausreichend effizient bei moderner Auslegung. Für gut gedämmte Häuser oder Niedrigenergie-Konzepte mit niedriger Vorlauftemperatur.'),
        ),
        p(
          bold('Großes Grundstück, Modernisierung mit langem Zeithorizont'),
          t(': Sole-Wasser-Wärmepumpe lohnt sich. Höhere Investition, aber über 20 Jahre niedrigere Stromkosten und stabilere Effizienz – gerade in Häusern mit höherem Wärmebedarf.'),
        ),
        p(
          bold('Bestand mit hoher Vorlauftemperatur und schwierigen Dämmwerten'),
          t(': Sole-WP oder ggf. eine Hochtemperatur-Luft-WP – die Effizienz wird hier wichtiger, weil die Vorlauftemperaturen die Luft-WP an ihre Grenzen bringen.'),
        ),
        p(
          bold('Spezialfall mit Grundwasserzugang und behördlicher Freigabe'),
          t(': Wasser-Wasser-Wärmepumpe technisch optimal, in der Praxis selten umsetzbar. Vor der Planung wasserrechtliche Voraussetzungen klären.'),
        ),
        p(
          bold('Reihenhaus, Doppelhaushälfte, kleines Grundstück'),
          t(': Luft-Wasser. Sole scheidet meist aus, weil Erdkollektor zu wenig Fläche hat und Bohrung sich für die geringe Heizlast oft nicht lohnt.'),
        ),
      ),
    ),

    tippBlock(
      'Vor der Auswahl Heizlast bestimmen',
      p(
        t('Wer eine Wärmepumpe plant, sollte vor der Typenwahl eine Heizlastberechnung nach DIN EN 12831 machen lassen – nicht den Durchsatz der alten Heizung als Maßstab nehmen. Das alte Gerät war oft überdimensioniert. Eine korrekte Heizlast zeigt, welche Leistung wirklich gebraucht wird, und gibt Aufschluss darüber, ob eine Luft-WP ausreicht oder ob die Effizienz einer Sole-WP wirtschaftlich besser ist.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele bei der Wärmepumpen-Wahl falsch einschätzen')),
      p(
        t('Bei der Frage „welcher Wärmepumpen-Typ" tauchen immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('„Sole-WP ist immer besser, weil effizienter." Stimmt im Datenblatt, aber die Mehrkosten von 8.000 bis 15.000 € amortisieren sich nicht in jedem Fall – gerade bei moderatem Heizbedarf rechnet sich die einfachere Luft-WP besser.')),
        p(t('„Luft-WP funktioniert im Winter nicht." Stimmt nicht. Auch bei -15 °C arbeitet eine moderne Luft-WP – nur weniger effizient. Korrekt ausgelegt heizt sie auch sehr kalte Häuser, der Stromverbrauch ist dann höher.')),
        p(t('Der COP-Wert wird mit der JAZ verwechselt. Ein Datenblatt-COP von 4,5 ist Marketing, die echte JAZ liegt in der Praxis oft 1,0 bis 1,3 darunter.')),
        p(t('„Wasser-WP ist machbar, weil ich einen Brunnen im Garten habe." Falsch. Ein Hausbrunnen ist meist nicht ergiebig genug – und braucht trotzdem eine wasserrechtliche Genehmigung als Grundwasserentnahme.')),
        p(t('„Sole bedeutet immer Tiefenbohrung." Nicht zwingend. Erdkollektoren werden flach im Garten verlegt – brauchen aber je nach Wärmebedarf 200 bis 400 m² unbebaute Fläche.')),
        p(t('Der Effizienzbonus 5 % der KfW wird übersehen. Sole und Wasser bekommen ihn automatisch, Luft nur mit natürlichem Kältemittel (typisch R290) – das verändert den Förderbetrag spürbar.')),
      ),
      p(
        bold('Eine ehrliche Wahl der Wärmepumpe braucht den Blick auf das ganze Bild'),
        t(' – Heizlast, Grundstück, Vorlauftemperatur, Investitionsbudget, Förderkulisse, Lebensdauer-Rechnung. Nicht den Hersteller-Datenblatt-Vergleich.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Für die meisten Einfamilienhäuser am Niederrhein ist 2026 die Luft-Wasser-Wärmepumpe die richtige Wahl: günstige Anschaffung, einfache Installation, ausreichend effizient bei moderner Auslegung. Mit dem Effizienzbonus (R290) und korrekter Heizlast-Auslegung ist sie auch wirtschaftlich solide.'),
      ),
      p(
        t('Sole-Wasser-Wärmepumpen sind die richtige Wahl für höhere Heizbedarfe, schwierige Bestände oder Hauseigentümer, die langfristig auf maximale Effizienz und Geräuschfreiheit setzen – mit dem Bewusstsein, dass die Mehrkosten nicht in fünf Jahren reinkommen, sondern über 15 bis 20 Jahre.'),
      ),
      p(
        t('Wasser-Wasser-Wärmepumpen sind technisch die Spitze – aber nur in seltenen Konstellationen mit passendem Grundwasserzugang umsetzbar. Wer einen Standort hat, der die wasserrechtliche Genehmigung erlaubt, sollte das ernst prüfen.'),
      ),
      p(
        bold('Die richtige Wärmepumpe ist die, die zum Haus, zum Grundstück und zum Heizbedarf passt'),
        t(' – nicht die mit dem schönsten Datenblatt oder dem höchsten Marketing-Aufwand.'),
      ),
    ),

    ctaBlock({
      titel: 'Wärmepumpen-Typ passend wählen lassen',
      text:
        'Wir prüfen mit Heizlastberechnung, Grundstücksdaten und Förderkulisse, welcher Wärmepumpen-Typ für dein Haus wirtschaftlich am besten passt – und nicht den Typ, den ein Hersteller gerade fördert.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist der Unterschied zwischen Luft, Sole und Wasser-Wärmepumpe?',
      'Sie unterscheiden sich nach Wärmequelle. Luft-WP nutzt die Außenluft, Sole-WP die Erdwärme über Bohrung oder Kollektor, Wasser-WP das Grundwasser über Förder- und Schluckbrunnen. Die Wahl beeinflusst Effizienz, Anschaffungskosten, Genehmigungsaufwand und Platzbedarf.',
    ),
    faqItem(
      'Welche Wärmepumpe ist am effizientesten?',
      'Wasser-Wasser-Wärmepumpen erreichen die höchsten Jahresarbeitszahlen (4,5–5,5), gefolgt von Sole-Wasser (4,0–4,7) und Luft-Wasser (3,0–4,0). Höhere Effizienz bedeutet niedrigere Stromkosten – aber auch höhere Investition und Genehmigungsaufwand.',
    ),
    faqItem(
      'Welche Wärmepumpe ist am günstigsten in der Anschaffung?',
      'Luft-Wasser-Wärmepumpen, mit 22.000 € bis 35.000 € Komplettkosten 2026 inklusive Installation. Sole-Wasser kostet 30.000 € bis 45.000 €, Wasser-Wasser 30.000 € bis 50.000 €. Über 20 Jahre kann der höhere Wirkungsgrad der Erdwärmepumpen die Mehrkosten teilweise wieder reinholen.',
    ),
    faqItem(
      'Brauche ich für eine Wärmepumpe eine Genehmigung?',
      'Bei Luft-Wasser-WP in der Regel keine Genehmigung – aber Schallschutzanforderungen prüfen (siehe Ratgeber zur Schallproblematik). Bei Sole-WP ist eine Anzeige bei der unteren Wasserbehörde nötig (Bohrung). Bei Wasser-WP eine wasserrechtliche Genehmigung – die wird nicht überall erteilt.',
    ),
    faqItem(
      'Welche Wärmepumpe fürs Reihenhaus oder Doppelhaushälfte?',
      'Meist Luft-Wasser. Sole scheidet oft aus, weil Erdkollektoren zu viel Gartenfläche brauchen und Tiefenbohrungen sich für die geringe Heizlast wirtschaftlich selten rechnen. Bei Reihenhäusern besonders auf Schallthema und Aufstellort achten – Nachbarschaftsabstände sind hier eng.',
    ),
    faqItem(
      'Welche Wärmepumpe bei kleinem Grundstück?',
      'Luft-Wasser-WP, in der Regel als Monoblock oder Split-Variante. Erdkollektor scheidet bei kleinem Garten aus (Flächenbedarf), Tiefenbohrungen sind möglich, aber bei kleinen Grundstücken oft wirtschaftlich nicht sinnvoll. Wasser-WP ist platzsparend, aber selten genehmigungsfähig.',
    ),
  ],
}

await upsertRatgeberArticle(article)
