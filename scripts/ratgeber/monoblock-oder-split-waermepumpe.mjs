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
  titel: 'Monoblock oder Split-Wärmepumpe: Was ist für ein Einfamilienhaus sinnvoller?',
  slug: 'monoblock-oder-split-waermepumpe',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Monoblock und Split nutzen dieselbe Physik – unterscheiden sich aber deutlich darin, wo der Kältekreis sitzt und was zwischen Außengerät und Haus geführt wird.',
  lesezeit: 11,

  seo: seo(
    'Monoblock oder Split-Wärmepumpe? Unterschiede | PEAK.Energy',
    'Monoblock vs. Split-Wärmepumpe: Kältekreis, Leitungswege, Frostschutz, R290 und Aufstellung. Welche Bauform für dein Haus sinnvoll ist.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Beim Monoblock sitzt der geschlossene Kältekreis typischerweise komplett im Außengerät. Zwischen Außen- und Innenbereich verlaufen '),
      bold('Heizungswasserleitungen'),
      t('.'),
    ),
    summaryPoint(
      t('Bei Split-Systemen werden Außen- und Inneneinheit über '),
      bold('Kältemittelleitungen'),
      t(' verbunden.'),
    ),
    summaryPoint(
      t('Split ist nicht automatisch effizienter und Monoblock nicht automatisch besser. Entscheidend sind Gerät, Auslegung, Aufstellort und Gebäudesituation.'),
    ),
    summaryPoint(
      t('Bei modernen Hauswärmepumpen mit dem natürlichen Kältemittel '),
      bold('R290'),
      t(' sind Monoblock-Konzepte heute sehr verbreitet.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Gleiche Physik, anderer Aufbau')),
      p(
        t('Eine Luft-Wasser-Wärmepumpe entzieht der Außenluft Energie und überträgt sie auf das Heizsystem. Bei Monoblock und Split ist das Grundprinzip gleich. Der Unterschied liegt vor allem darin, wie der Kältekreis räumlich aufgebaut ist.'),
      ),
    ),

    textBlock(
      h('h2', t('So funktioniert der Monoblock')),
      p(
        t('Beim Monoblock befinden sich die wesentlichen Komponenten des Kältekreises in einer kompakten Einheit – bei typischen Außen-Monoblocks draußen. Das Heizungswasser wird bis zum Außengerät geführt, dort erwärmt und anschließend wieder ins Haus zurückgeleitet.'),
      ),
      p(
        t('Der Kältekreis ist dabei werkseitig geschlossen. Bei der normalen hydraulischen Verbindung zwischen Innen- und Außengerät muss vor Ort typischerweise keine Kältemittelleitung hergestellt werden. Dafür müssen die wasserführenden Außenleitungen sorgfältig geplant werden.'),
      ),
    ),

    hinweisBlock(
      'Frostschutz beim Monoblock gehört zur Planung',
      p(
        t('Weil Heizungswasser das Gebäude verlässt, muss die Installation berücksichtigen, was bei längerem Stromausfall oder Anlagenstillstand passiert. Kurze Leitungswege, gute Dämmung, geeignete Verlegung und das zum Herstellerkonzept passende Frostschutzkonzept gehören deshalb zur Planung.'),
      ),
    ),

    textBlock(
      h('h2', t('So funktioniert die Split-Wärmepumpe')),
      p(
        t('Beim Split-System ist der Kältekreis auf Außen- und Inneneinheit verteilt. Zwischen den Geräten verlaufen Kältemittelleitungen. Die Wärme wird im Innenbereich auf das Heizungswasser übertragen.'),
      ),
      p(
        t('Da bei Montage und Service Arbeiten am Kältemittelkreis relevant sein können, gelten dafür besondere fachliche und je nach Kältemittel auch rechtliche Anforderungen. Der hydraulische Teil des Heizsystems bleibt dagegen innerhalb des Gebäudes.'),
      ),
    ),

    tabelleBlock('Monoblock und Split im direkten Vergleich', [
      {
        spalte1: 'Verbindung außen–innen',
        spalte2: 'Monoblock: Heizungswasser',
        spalte3: 'Split: Kältemittelleitungen',
      },
      {
        spalte1: 'Kältekreis',
        spalte2: 'Typischerweise werkseitig geschlossen im Außengerät',
        spalte3: 'Auf Außen- und Inneneinheit verteilt',
      },
      {
        spalte1: 'Planungsschwerpunkt',
        spalte2: 'Hydraulik, Außenleitungen, Frostschutz',
        spalte3: 'Kältemittelleitungen, fachgerechte Kältemontage',
      },
      {
        spalte1: 'Effizienz',
        spalte2: 'Nicht allein durch die Bauform bestimmt',
        spalte3: 'Nicht allein durch die Bauform bestimmt',
      },
    ]),

    textBlock(
      h('h2', t('Was ist effizienter?')),
      p(
        bold('Die Bauform allein beantwortet diese Frage nicht.'),
        t(' Ein guter Monoblock kann effizienter sein als ein schlechtes Split-System – und umgekehrt.'),
      ),
      p(
        t('Für den realen Stromverbrauch sind unter anderem Heizlast, Vorlauftemperatur, Modulationsbereich, Außentemperatur, Hydraulik, Warmwasserstrategie, Abtauverhalten und Qualität der Installation wichtiger als das Schlagwort „Monoblock“ oder „Split“.'),
      ),
    ),

    textBlock(
      h('h2', t('R290 und Monoblock')),
      p(
        t('Viele aktuelle Hauswärmepumpen nutzen Propan beziehungsweise '),
        bold('R290'),
        t(' als natürliches Kältemittel. R290 besitzt ein sehr niedriges Treibhauspotenzial und gute thermodynamische Eigenschaften. Gleichzeitig ist Propan brennbar, weshalb Geräteaufbau und Aufstellung die vorgesehenen Sicherheitsanforderungen berücksichtigen müssen.'),
      ),
      p(
        t('Bei vielen R290-Hauswärmepumpen bleibt das Kältemittel vollständig im Außengerät. Das ist ein Grund, warum Monoblock-Lösungen in diesem Bereich sehr verbreitet sind.'),
      ),
    ),

    textBlock(
      h('h2', t('Aufstellort schlägt Bauform')),
      p(
        t('Die beste Wärmepumpe hilft wenig, wenn sie am falschen Ort steht. Wichtig sind Schallrichtung und Abstand zum Nachbarn, kurze Leitungswege, Kondensatableitung, Servicezugang und die Sicherheitsvorgaben des konkreten Geräts.'),
      ),
      p(
        t('Deshalb entscheiden wir die Bauform nicht isoliert, sondern zusammen mit dem Aufstellkonzept.'),
      ),
    ),

    tippBlock(
      'Lass dich nicht über die Bauform verkaufen',
      p(
        t('„Monoblock ist immer besser“ ist genauso pauschal wie „Split ist moderner“. Die sinnvollere Frage lautet: '),
        bold('Welches konkrete Gerät passt bei meiner Heizlast, meinem Aufstellort, meinem Heizsystem und meinem Leitungsweg am besten?'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Monoblock und Split sind keine Qualitätsklassen')),
      p(
        t('Monoblock und Split sind zwei technische Bauweisen. Für viele Einfamilienhäuser sind moderne Monoblock-Wärmepumpen eine sehr interessante Lösung, gerade im R290-Bereich. Split-Systeme können in anderen Einbausituationen ebenfalls sinnvoll sein.'),
      ),
      p(
        t('Entscheidend ist das Gesamtsystem aus '),
        bold('Heizlast, Vorlauftemperatur, Aufstellung, Leitungsweg, Schall, Kältemittel und Hydraulik'),
        t('.'),
      ),
    ),

    ctaBlock({
      titel: 'Wärmepumpe passend zum Haus auswählen',
      text:
        'Wir planen nicht vom Produktprospekt zum Gebäude, sondern anders herum: Erst Gebäude und Heizsystem verstehen, dann Gerät und Bauform auswählen.',
      buttonText: 'Wärmepumpe anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist der Hauptunterschied zwischen Monoblock und Split?',
      'Beim Monoblock bleibt der Kältekreis typischerweise komplett im Außengerät und Heizungswasser wird nach außen geführt. Beim Split verbinden Kältemittelleitungen Außen- und Inneneinheit.',
    ),
    faqItem(
      'Ist Monoblock effizienter als Split?',
      'Nicht grundsätzlich. Die Effizienz hängt stärker vom konkreten Gerät, der Auslegung, Vorlauftemperatur und Installation ab.',
    ),
    faqItem(
      'Kann ein Monoblock im Winter einfrieren?',
      'Bei korrektem Betrieb und fachgerechter Planung ist Frostschutz Teil des Systems. Trotzdem muss die Installation auch mögliche Stillstands- oder Ausfallsituationen berücksichtigen.',
    ),
    faqItem(
      'Ist R290 nur bei Monoblock möglich?',
      'Nein. Bei Hauswärmepumpen wird R290 jedoch sehr häufig in Monoblock-Geräten eingesetzt, damit der Kältekreis kompakt im Außengerät bleibt.',
    ),
    faqItem(
      'Welche Bauform ist für den Altbau besser?',
      'Das lässt sich nicht pauschal sagen. Heizlast, Vorlauftemperatur, Aufstellung und Leitungswege sind wichtiger als das Baujahr allein.',
    ),
  ],
}

await upsertRatgeberArticle(article)
