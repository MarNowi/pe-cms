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
  titel: 'Wärmepumpe und Photovoltaik: Lohnt die Kombination wirklich?',
  slug: 'waermepumpe-und-photovoltaik',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Wärmepumpe plus PV-Anlage klingt nach der perfekten Energie-Kombination. In der Praxis funktioniert das gut – aber anders als die Werbung suggeriert. Sonnenstrom kommt im Sommer, geheizt wird im Winter. Wer das ehrlich einordnet, plant beide Systeme passend.',
  lesezeit: 10,

  seo: seo(
    'Wärmepumpe mit Photovoltaik: Lohnt sich die Kombination? | PEAK.Energy',
    'Wärmepumpe und PV-Anlage: Wie viel Eigenverbrauch realistisch ist, ob ein Speicher sinnvoll wird und wann sich die Kombination wirklich rechnet – ehrliche Einordnung.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Eine PV-Anlage versorgt eine Wärmepumpe in einem typischen Einfamilienhaus übers Jahr häufig nur zu einem Teil direkt mit Solarstrom – oft in einer Größenordnung von '),
      bold('etwa 25–35 %'),
      t('. Die tatsächliche Quote hängt stark von Gebäude, PV-Größe, Wärmepumpe, Regelung und Verbrauchsprofil ab.'),
    ),
    summaryPoint(
      t('Im '),
      bold('Sommer'),
      t(' deckt PV den WP-Strombedarf für Warmwasser häufig weitgehend. Im Winter, wenn die Wärmepumpe richtig arbeitet, liefert die PV deutlich weniger – das gehört zur ehrlichen Rechnung.'),
    ),
    summaryPoint(
      t('Ein '),
      bold('Stromspeicher hilft begrenzt'),
      t(' – er verschiebt Tagesüberschuss in den Abend, kann aber nicht den Sommer-Winter-Versatz überbrücken.'),
    ),
    summaryPoint(
      t('Wirtschaftlich kann sich die Kombination trotzdem sehr gut ergänzen – nicht weil sie die Wärmepumpe „autark" macht, sondern weil selbst genutzter PV-Strom Netzbezug reduziert und der zusätzliche Verbrauch der Wärmepumpe die PV-Anlage besser auslasten kann.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('„Wärmepumpe mit PV – die perfekte Kombination." Das hört man oft. Es klingt logisch: Solaranlage erzeugt Strom, Wärmepumpe braucht Strom – passt also zusammen. Stimmt grundsätzlich, aber die Realität ist nuancierter, als die einfache Rechnung suggeriert.'),
      ),
      p(
        t('Eine Wärmepumpe braucht Strom vor allem dann, wenn das Haus warm sein soll – also '),
        bold('im Winter, in den Übergangsmonaten, in der Nacht und am frühen Morgen'),
        t('. Eine PV-Anlage liefert Strom dann, wenn die Sonne scheint – '),
        bold('also vor allem tagsüber und mit deutlich höherem Ertrag im Sommerhalbjahr'),
        t('. Diese beiden Profile passen nur teilweise zusammen.'),
      ),
      p(
        t('Wer die Kombination ehrlich einordnet, weiß: Sie ist sinnvoll, wirtschaftlich oft attraktiv, aber sie macht die Wärmepumpe nicht autark. Sie kann Stromkosten senken und die PV-Auslastung erhöhen – das reicht als Argument, ohne aus dem System ein Autarkie-Versprechen zu machen.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie viel WP-Strom kommt realistisch aus PV?')),
      p(
        t('Über das Jahr sind bei vielen typischen Einfamilienhäusern Größenordnungen von '),
        bold('etwa 25 bis 35 % des Wärmepumpen-Strombedarfs'),
        t(' als direkte oder zeitnah verschobene PV-Deckung plausibel. Das ist aber keine feste physikalische Grenze: Dachgröße, Gebäudestandard, Heizsystem, Warmwasser, Speicher und Energiemanagement können die Quote deutlich verändern.'),
      ),
      p(
        t('Der Grund für die begrenzte Jahresdeckung ist einfach: Ein großer Teil des Wärmepumpenstroms wird in der Heizperiode benötigt – also genau dann, wenn die PV-Anlage im Jahresvergleich weniger produziert. Im Sommer ist das Bild umgekehrt: Die PV produziert viel, während die Wärmepumpe häufig fast nur Warmwasser bereitet.'),
      ),
      p(
        bold('Es ist vor allem ein zeitliches Versatzproblem.'),
      ),
    ),

    tabelleBlock('PV-Eigenversorgung der Wärmepumpe nach Saison – typische Größenordnung', [
      {
        spalte1: 'Sommer (Juni–August)',
        spalte2: 'häufig hohe PV-Deckung',
        spalte3:
          'Wärmepumpe macht überwiegend Warmwasser, während die PV viel produziert. Die konkrete Quote hängt stark von Warmwasserprofil, PV-Größe und Regelung ab.',
      },
      {
        spalte1: 'Übergangsmonate',
        spalte2: 'mittlere bis hohe PV-Deckung möglich',
        spalte3:
          'PV-Erzeugung und Heizbedarf überlappen besser. Speicher und Wärmepumpenregelung können Tagesüberschüsse zusätzlich nutzbar machen.',
      },
      {
        spalte1: 'Winter',
        spalte2: 'meist deutlich geringere PV-Deckung',
        spalte3:
          'PV produziert weniger, während der Heizbedarf hoch ist. Ein erheblicher Teil des Wärmepumpenstroms kommt deshalb weiterhin aus dem Netz.',
      },
      {
        spalte1: 'Jahresbetrachtung',
        spalte2: 'projektabhängig',
        spalte3:
          'Typische Einfamilienhäuser liegen häufig im Bereich von etwa 25–35 %. Große PV-Anlagen, niedriger Wärmebedarf und intelligente Steuerung können davon abweichen.',
      },
    ]),

    hinweisBlock(
      'Wärmepumpentarif oder gemeinsamer Haushaltstarif?',
      p(
        t('Ein separater Wärmepumpentarif kann wirtschaftlich interessant sein, muss aber gegen zusätzliche Messkosten, §14a-Netzentgeltmodell und den Wert des PV-Eigenverbrauchs gerechnet werden. Wichtig: Ein separater Wärmepumpenzähler bedeutet '),
        bold('nicht automatisch, dass die Wärmepumpe keinen PV-Strom nutzen kann'),
        t('. Mit einem geeigneten Kaskadenmesskonzept lassen sich beide Ziele verbinden.'),
      ),
      p(
        t('Wie sich klassischer Wärmepumpentarif, dynamischer Tarif, §14a und PV unterscheiden, erklären wir ausführlich in '),
        link('Wärmepumpentarif oder dynamischer Stromtarif: Was lohnt sich 2026?', '/waermepumpe/waermepumpentarif-oder-dynamischer-stromtarif'),
        t('. Für das Westnetz-Gebiet zeigen wir die Kaskadenlogik zusätzlich in '),
        link('§ 14a EnWG bei Wärmepumpen und Messkonzept 8', '/waermepumpe/14a-enwg-waermepumpe-messkonzept-8'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Lohnt sich ein Stromspeicher in der Kombination?')),
      p(
        t('Mit einer Wärmepumpe kann ein Stromspeicher wirtschaftlich interessanter werden, weil zusätzlicher Stromverbrauch in Zeiten anfällt, in denen die PV nicht immer direkt liefert. Ob er sich wirklich rechnet, hängt aber vom Lastprofil, der PV-Größe, Speicherpreis, Tarif und der nutzbaren Zyklenzahl ab.'),
      ),
      p(
        t('Was ein Speicher leisten kann: '),
        bold('Tagesüberschuss von der PV in den Abend oder frühen Morgen verschieben'),
        t('. So kann Solarstrom zeitversetzt für Haushalt und teilweise auch Wärmepumpe genutzt werden.'),
      ),
      p(
        t('Was ein Speicher '),
        bold('nicht'),
        t(' leisten kann: Den '),
        bold('Sommer-Winter-Versatz'),
        t(' mit einem üblichen Heimspeicher überbrücken. Die im Juli erzeugten Überschüsse stehen im Januar nicht einfach zur Verfügung. Dafür wäre eine ganz andere Speichergröße und Technologie nötig.'),
      ),
      p(
        t('Die passende Speichergröße sollte deshalb '),
        bold('aus dem realen Verbrauchs- und Erzeugungsprofil abgeleitet werden'),
        t(' – nicht aus einer pauschalen Regel „10 kWp PV = 10 kWh Speicher“.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann sich die Kombination wirtschaftlich rechnet')),
      p(
        t('Die Wärmepumpe-PV-Kombination ist wirtschaftlich besonders interessant, wenn mehrere Faktoren zusammenkommen.'),
      ),
      ul(
        p(
          bold('Ausreichend große PV-Anlage'),
          t(' – nicht die kleinste mögliche Anlage. Wer ohnehin eine Wärmepumpe plant, sollte das verfügbare Dachpotenzial und den zusätzlichen Strombedarf gemeinsam betrachten.'),
        ),
        p(
          bold('Niedrige Systemtemperaturen und effiziente Wärmepumpe'),
          t(' – denn jede vermiedene Kilowattstunde Wärmepumpenstrom ist wirtschaftlich mindestens so wichtig wie eine zusätzliche selbst erzeugte Kilowattstunde.'),
        ),
        p(
          bold('Passende Regelung'),
          t(' – Warmwasserbereitung und ein Teil des Heizbetriebs lassen sich in Grenzen in PV-reiche Stunden verschieben, ohne den Komfort zu opfern.'),
        ),
        p(
          bold('Speicher nur in sinnvoller Größe'),
          t(' – wenn die zusätzlichen Zyklen durch Haushalt, Wärmepumpe und eventuell Wallbox tatsächlich genutzt werden.'),
        ),
      ),
      p(
        t('Die Wärmepumpe erhöht den Strombedarf des Gebäudes. Das kann den Eigenverbrauch der PV-Anlage erhöhen – ob dadurch die Amortisation des Gesamtsystems kürzer wird, muss aber projektbezogen gerechnet werden.'),
      ),
    ),

    tippBlock(
      'PV nicht „nur für die Wärmepumpe" planen',
      p(
        t('Sinnvoller ist es, die PV als Gesamtanlage zu denken: für Haushaltsstrom, Wärmepumpe, eventuell Wallbox und Speicher. Die Größe ergibt sich aus Dachpotenzial, Jahresverbrauch, Lastprofil und Zukunftsplanung – nicht aus dem Wärmepumpenverbrauch allein.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele bei der Kombination falsch einschätzen')),
      p(
        t('Bei der Verbindung von Wärmepumpe und PV tauchen immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('„Mit PV heize ich kostenlos.“ Stimmt nicht. Gerade in der Heizperiode bleibt Netzbezug üblich.')),
        p(t('„Eine kleine PV reicht für die Wärmepumpe.“ Nicht zwingend. Entscheidend sind Dachpotenzial, Wärmebedarf und das komplette Stromprofil des Gebäudes.')),
        p(t('„Der Speicher überbrückt den Winter.“ Stimmt bei üblichen Heimspeichern nicht. Sie verschieben Energie über Stunden, nicht über Jahreszeiten.')),
        p(t('„Wärmepumpentarif ist immer günstiger.“ Stimmt nicht. Tarifdifferenz, Messkosten, §14a, Kaskadenmessung und PV-Eigenverbrauch müssen gemeinsam gerechnet werden.')),
        p(t('„Mit R290 gibt es automatisch 5 % mehr KfW-Förderung.“ Das ist seit dem 21.07.2026 veraltet: Der frühere Effizienzbonus ist entfallen.')),
      ),
      p(
        t('Den aktuellen Förderstand erklären wir in '),
        link('Wärmepumpen-Förderung 2026', '/waermepumpe/waermepumpe-foerderung-2026'),
        t('.'),
      ),
      p(
        bold('Eine ehrliche Einordnung der WP-PV-Kombination braucht Erzeugung, Wärmebedarf und Stromverbrauch gleichzeitig'),
        t(' – nicht nur einen sonnigen Sommertag als Beispiel.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Wärmepumpe und PV ergänzen sich gut, aber nicht so vollständig, wie manche Werbeaussagen suggerieren. In vielen typischen Einfamilienhäusern deckt die PV einen relevanten, aber begrenzten Teil des Wärmepumpen-Strombedarfs. Die tatsächliche Quote ist immer projektabhängig.'),
      ),
      p(
        t('Wirtschaftlich kann die Kombination trotzdem sehr sinnvoll sein – weil eigener Solarstrom Netzbezug reduziert, die Wärmepumpe zusätzlichen Eigenverbrauch schafft und Speicher sowie Energiemanagement mehr nutzbare Flexibilität bekommen.'),
      ),
      p(
        bold('Die ehrliche Antwort auf „lohnt sich Wärmepumpe mit PV?“ lautet deshalb meistens: Das System hat sehr gute Voraussetzungen – gerechnet werden muss trotzdem.'),
        t(' Nicht „kostenlos heizen“, sondern Erzeugung und Verbrauch sinnvoll zusammenbringen.'),
      ),
    ),

    ctaBlock({
      titel: 'Wärmepumpe und PV als System planen lassen',
      text:
        'Wir prüfen, wie Wärmepumpe, PV-Anlage, Speicher, §14a und Messkonzept in deinem Haus zusammenspielen – mit realistischen Annahmen statt Marketing-Prozenten.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Lohnt sich PV mit Wärmepumpe wirtschaftlich?',
      'In vielen Fällen ja. Wie gut die Kombination wirtschaftlich ist, hängt aber von PV-Größe, Wärmebedarf, Wärmepumpeneffizienz, Stromtarif, Messkonzept und Eigenverbrauch ab. Eine pauschale Autarkie- oder Amortisationsquote wäre unseriös.',
    ),
    faqItem(
      'Wie groß muss die PV für eine Wärmepumpe sein?',
      'Es gibt keine feste kWp-Größe nur wegen der Wärmepumpe. Sinnvoll ist, Dachpotenzial, Haushaltsstrom, Wärmepumpe, mögliche Wallbox und zukünftigen Verbrauch gemeinsam zu betrachten und die verfügbare Dachfläche wirtschaftlich zu nutzen.',
    ),
    faqItem(
      'Brauche ich einen Stromspeicher mit Wärmepumpe und PV?',
      'Nicht zwingend. Ein Speicher kann Tagesüberschüsse in Abend- und Morgenstunden verschieben und dadurch den Eigenverbrauch erhöhen. Ob er sich lohnt und wie groß er sein sollte, hängt vom realen Lastprofil und den Kosten ab.',
    ),
    faqItem(
      'Wie viel Wärmepumpenstrom kommt aus der PV-Anlage?',
      'Bei vielen typischen Einfamilienhäusern sind über das Jahr Größenordnungen um 25–35 % plausibel. Die tatsächliche Quote kann je nach PV-Größe, Gebäude, Heizsystem, Speicher und Energiemanagement deutlich abweichen.',
    ),
    faqItem(
      'Kann ein separater Wärmepumpenzähler trotzdem PV-Strom nutzen?',
      'Ja. Mit einem geeigneten Kaskadenmesskonzept kann die Wärmepumpe Solarstrom aus der Kundenanlage nutzen und der verbleibende Netzbezug trotzdem separat als Wärmepumpenstrom abgerechnet werden. Die genaue Umsetzung hängt vom Netzbetreiber ab.',
    ),
    faqItem(
      'Sondertarif für Wärmepumpenstrom oder gemeinsamer Haushaltstarif mit PV?',
      'Das muss gerechnet werden. Relevant sind Wärmepumpen-Netzbezug, Tarifdifferenz, zusätzliche Messkosten, §14a-Modul und PV-Eigenverbrauch. Ein separater Tarif kann auch mit PV sinnvoll sein, wenn das Messkonzept passend aufgebaut ist.',
    ),
  ],
}

await upsertRatgeberArticle(article)
