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
  titel: 'Wie funktioniert eine Wärmepumpe? Das Prinzip verständlich erklärt',
  slug: 'wie-funktioniert-eine-waermepumpe',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Eine Wärmepumpe heizt mit Wärme, die schon da ist – in Luft, Erdreich oder Grundwasser. Wie aus 5 Grad Außenluft 50 Grad Heizungswasser werden, warum aus einer Kilowattstunde Strom drei bis fünf Kilowattstunden Wärme entstehen und was das für Ihr Haus bedeutet: das Prinzip ohne Fachchinesisch.',
  lesezeit: 8,
  seo: seo(
    'Wie funktioniert eine Wärmepumpe? Einfach erklärt | PEAK.Energy',
    'Wärmepumpe einfach erklärt: Der Kältekreis in vier Schritten, warum aus 1 kWh Strom 3–5 kWh Wärme werden, die Unterschiede von Luft-, Sole- und Wasser-Wärmepumpe – und die Rolle von PV und Speicher.',
  ),
  zusammenfassung: [
    summaryPoint(
      t('Eine Wärmepumpe erzeugt keine Wärme, sie '),
      bold('verschiebt sie'),
      t(': Sie entzieht der Umgebung (Luft, Erdreich, Grundwasser) Wärme und hebt sie mit einem Kältekreis auf Heiztemperatur.'),
    ),
    summaryPoint(
      t('Der Strom treibt nur den Verdichter an – deshalb liefert 1 kWh Strom je nach Bedingungen '),
      bold('3 bis 5 kWh Wärme'),
      t('. Diese Effizienz beschreibt die Jahresarbeitszahl (JAZ).'),
    ),
    summaryPoint(
      t('Das Prinzip funktioniert auch bei Minusgraden – entscheidend für die Effizienz ist der '),
      bold('Temperaturhub'),
      t(': je niedriger die nötige Vorlauftemperatur, desto besser.'),
    ),
    summaryPoint(
      t('In Kombination mit PV wird die Wärmepumpe zur '),
      bold('Solarheizung'),
      t(': Selbst erzeugter Strom heizt das Haus – das Herzstück eines integrierten Energiesystems.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Das Grundprinzip: Der umgekehrte Kühlschrank')),
      p(
        t('Jeder hat eine Wärmepumpe zu Hause – sie hängt nur falsch herum: Der Kühlschrank entzieht seinem Innenraum Wärme und gibt sie hinten an die Küche ab. Die Heizungs-Wärmepumpe macht exakt dasselbe mit vertauschten Seiten: Sie entzieht draußen der Umwelt Wärme und gibt sie drinnen an das Heizsystem ab.'),
      ),
      p(
        t('Der scheinbare Widerspruch – Wärme aus 0 Grad kalter Luft gewinnen? – löst sich physikalisch einfach auf: Auch kalte Luft enthält thermische Energie (absolut kalt wäre erst −273 °C). Die Wärmepumpe braucht nur ein Medium, das noch kälter ist als die Außenluft – dann fließt Wärme von selbst hinein. Genau das leistet das Kältemittel.'),
      ),
    ),
    textBlock(
      h('h2', t('Der Kältekreis in vier Schritten')),
      ul(
        p(
          bold('1. Verdampfen:'),
          t(' Das Kältemittel ist bei sehr niedriger Temperatur flüssig und extrem kalt – kälter als die Außenluft. Im Verdampfer nimmt es Umweltwärme auf und wird gasförmig, so wie Wasser beim Kochen verdampft, nur eben schon bei etwa −10 °C.'),
        ),
        p(
          bold('2. Verdichten:'),
          t(' Der Verdichter (Kompressor) presst das Gas zusammen – und hier passiert der Trick: Durch die Kompression steigt die Temperatur stark an, wie bei einer Luftpumpe, die beim Aufpumpen warm wird. Aus lauwarmem Gas werden 60, 70 Grad. Nur dieser Schritt braucht nennenswert Strom.'),
        ),
        p(
          bold('3. Verflüssigen:'),
          t(' Das heiße Gas gibt seine Wärme im Verflüssiger an das Heizungswasser ab – Vorlauf für Heizkörper oder Fußbodenheizung, Warmwasser für die Dusche. Dabei kühlt es ab und wird wieder flüssig.'),
        ),
        p(
          bold('4. Entspannen:'),
          t(' Ein Expansionsventil senkt den Druck schlagartig, das Kältemittel wird dabei wieder eiskalt – und der Kreislauf beginnt von vorn. Rund und rund, viele tausend Mal am Tag.'),
        ),
      ),
      p(
        t('Die Bilanz: Von den etwa vier Teilen Wärme, die ins Haus fließen, stammen drei aus der Umwelt – gratis – und nur einer aus dem Stromnetz oder vom eigenen Dach.'),
      ),
    ),
    tabelleBlock('Die drei Wärmequellen im Vergleich', [
      {
        spalte1: 'Luft-Wasser-Wärmepumpe',
        spalte2: 'Wärmequelle: Außenluft',
        spalte3: 'Günstigste Erschließung, keine Bohrung – Standard im Bestand; Effizienz sinkt an sehr kalten Tagen',
      },
      {
        spalte1: 'Sole-Wasser-Wärmepumpe (Erdwärme)',
        spalte2: 'Wärmequelle: Erdreich (Sonde oder Kollektor)',
        spalte3: 'Konstant hohe Quelltemperatur, beste JAZ – dafür Bohrung/Erdarbeiten und höhere Investition',
      },
      {
        spalte1: 'Wasser-Wasser-Wärmepumpe',
        spalte2: 'Wärmequelle: Grundwasser',
        spalte3: 'Effizienzspitze, aber genehmigungspflichtig und standortabhängig – der Sonderfall',
      },
    ]),
    textBlock(
      h('h2', t('Warum die Vorlauftemperatur über alles entscheidet')),
      p(
        t('Die Effizienz einer Wärmepumpe hängt am '),
        bold('Temperaturhub'),
        t(' – der Differenz zwischen Wärmequelle und Vorlauftemperatur. Von 5 °C Außenluft auf 35 °C Fußbodenheizung zu heben ist leichte Arbeit; auf 65 °C für alte Heizkörper zu kommen, kostet den Verdichter ein Vielfaches an Strom. Deshalb gilt: '),
        bold('Jedes Grad weniger Vorlauf spart bares Geld'),
        t(' – als Faustregel rund 2,5 % Stromverbrauch pro Grad.'),
      ),
      p(
        t('Die gute Nachricht: Auch viele Altbauten kommen mit 45–55 °C aus, oft reicht der Tausch einzelner Heizkörper. Ob Ihr Haus geeignet ist, klärt der hydraulische Blick aufs Heizsystem – mehr dazu in den Beiträgen „Wärmepumpe mit Heizkörpern" und „Wärmepumpe Vorlauftemperatur erklärt". Und dass moderne Geräte auch bei −15 °C zuverlässig heizen, ist längst Praxis – sie tun es nur mit etwas schlechterer Arbeitszahl.'),
      ),
    ),
    hinweisBlock(
      'Der Heizstab ist Reserve, nicht Regelbetrieb',
      p(
        t('Fast jede Wärmepumpe hat einen elektrischen Heizstab für Extremfälle. Bei einer sauber ausgelegten Anlage springt er nur an wenigen Stunden im Jahr an – bei einer schlecht ausgelegten läuft er regelmäßig mit und ruiniert Effizienz und Stromrechnung. Ein hoher Heizstab-Anteil ist das sicherste Indiz für einen Auslegungsfehler, nicht für eine „schwache Technologie".'),
      ),
    ),
    tippBlock(
      'Mit PV wird die Wärmepumpe zur Solarheizung',
      p(
        t('Die Wärmepumpe ist der ideale Partner der Solaranlage: Sie verwandelt PV-Überschuss in Wärme – mit dem Faktor 3 bis 5. Eine Kilowattstunde Solarstrom, die sonst für wenige Cent eingespeist würde, wird zu drei bis fünf Kilowattstunden Heizwärme. Ein Energiemanagement hebt Warmwasserbereitung und Heizzyklen gezielt in die Sonnenstunden. Wie stark die Kombination rechnet, zeigt der Beitrag „Wärmepumpe und Photovoltaik: Lohnt die Kombination?".'),
      ),
    ),
    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die Wärmepumpe ist kein Wundergerät, sondern angewandte Physik mit 150 Jahren Reifezeit: Sie verschiebt vorhandene Umweltwärme ins Haus und braucht Strom nur als Antrieb – darum schlägt sie jede Direktheizung um den Faktor drei bis fünf. Ob sie auch in Ihrem Haus effizient läuft, entscheidet nicht die Marke, sondern die Auslegung: Wärmequelle, Vorlauftemperatur, Hydraulik.'),
      ),
      p(
        bold('Genau da setzen wir an'),
        t(': Heizlast rechnen statt schätzen, Vorlauftemperaturen messen statt vermuten, und die Wärmepumpe als Teil des Gesamtsystems mit PV, Speicher und Energiemanagement planen – vom Meisterbetrieb, der Elektrik und Wärme zusammen denkt.'),
      ),
    ),
    ctaBlock({
      titel: 'Prüfen lassen, ob Ihr Haus bereit ist',
      text:
        'Heizlastberechnung, Vorlauf-Check und ehrliche Auslegung – wir sagen Ihnen, welche Wärmepumpe zu Ihrem Haus passt und wie sie mit PV zusammenspielt.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Funktioniert eine Wärmepumpe auch bei Minusgraden?',
      'Ja – moderne Luft-Wärmepumpen heizen zuverlässig bis −20 °C und darunter. Auch −10 °C kalte Luft enthält nutzbare Wärme. Die Effizienz sinkt an sehr kalten Tagen (mehr Verdichterarbeit), im Jahresmittel bleibt der Vorteil groß – sichtbar in der Jahresarbeitszahl, die genau diese Schwankungen einrechnet.',
    ),
    faqItem(
      'Wie viel Strom verbraucht eine Wärmepumpe?',
      'Als Faustregel: Heizwärmebedarf geteilt durch Jahresarbeitszahl. Ein Haus mit 15.000 kWh Wärmebedarf und JAZ 4 braucht rund 3.750 kWh Strom pro Jahr. Die genaue Rechnung mit allen Stellgrößen steht im Beitrag „Wärmepumpe Stromverbrauch berechnen".',
    ),
    faqItem(
      'Braucht eine Wärmepumpe zwingend eine Fußbodenheizung?',
      'Nein. Fußbodenheizung ist ideal (niedriger Vorlauf), aber viele Häuser heizen mit passend dimensionierten Heizkörpern bei 45–55 °C effizient. Oft genügt der Tausch einzelner Heizkörper gegen größere Modelle. Details im Beitrag „Wärmepumpe mit Heizkörpern: Geht das wirklich?".',
    ),
    faqItem(
      'Kann eine Wärmepumpe auch kühlen?',
      'Viele Modelle ja – der Kältekreis lässt sich umkehren oder passiv nutzen. Mit Flächenheizungen ist eine sanfte Temperierung um einige Grad möglich; ein Ersatz für eine Klimaanlage ist das nicht, aber ein spürbarer Sommerkomfort-Bonus, der bei der Geräteauswahl mitentschieden werden sollte.',
    ),
    faqItem(
      'Welche Wärmepumpe passt zu meinem Haus?',
      'Im Bestand ist die Luft-Wasser-Wärmepumpe der Standard: keine Bohrung, überschaubare Investition, ausgereifte Technik. Erdwärme lohnt bei Neubau oder ohnehin anstehenden Erdarbeiten. Die Entscheidungshilfe mit allen Kriterien: „Welche Wärmepumpe für mein Haus? Luft, Sole und Wasser".',
    ),
  ],
}

await upsertRatgeberArticle(article)
