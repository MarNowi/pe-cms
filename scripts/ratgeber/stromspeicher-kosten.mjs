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
  titel: 'Was kostet ein Stromspeicher? Anschaffung, Installation und laufende Kosten 2026',
  slug: 'stromspeicher-kosten',
  kategorie: 'stromspeicher',
  status: 'veroeffentlicht',
  teaser:
    'Die Kosten für einen Stromspeicher hängen nicht nur vom Preis der Batterie ab. Entscheidend sind Größe, Topologie, Zählerschrank, Aufstellort und die Frage, was im Angebot tatsächlich enthalten ist – und was später nachberechnet wird.',
  lesezeit: 11,

  seo: seo(
    'Was kostet ein Stromspeicher 2026? Kosten im Überblick | PEAK.Energy',
    'Was kostet ein Stromspeicher 2026? Ehrliche Einordnung zu Hardware-Preisen, Installation, Zählerschrank, AC- und DC-Kopplung sowie laufenden Kosten – ohne Pauschalpreis-Logik.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Die Hardware-Kosten für moderne LFP-Speicher liegen 2026 grob zwischen '),
      bold('600 und 1.100 € netto pro nutzbarer kWh'),
      t(' – kleinere Speicher sind pro kWh teurer, größere günstiger.'),
    ),
    summaryPoint(
      t('Zur Hardware kommen '),
      bold('Installation, Elektrik und ggf. Zählerschrank-Anpassung'),
      t(' – das sind je nach Bestand zwischen 1.500 € und mehreren Tausend Euro zusätzlich.'),
    ),
    summaryPoint(
      t('Pauschalpreis-Angebote vergleichen sich gut, sind in der Praxis aber häufig unvollständig. Was zählt, ist der Komplettpreis für eine Anlage, die zum Haus passt – nicht der Preis pro kWh isoliert.'),
    ),
    summaryPoint(
      t('Laufende Kosten sind bei sauber geplanten Speichern gering – Wartung im einstelligen Bereich pro Jahr, Versicherung optional, größere Folgekosten erst nach Jahren.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('Wer nach den Kosten für einen Stromspeicher sucht, bekommt im Netz schnell eine Zahl serviert: „ab 4.000 €" oder „pro kWh ungefähr 800 €". Solche Angaben sind nicht falsch, aber sie bilden nur einen Teil der Wahrheit ab.'),
      ),
      p(
        t('Ein Stromspeicher ist nicht nur eine Batterie. Er ist ein '),
        bold('System aus Batterie, Wechselrichter, Energiemanagement, Verkabelung und Anschluss an den Zählerschrank'),
        t('. Die Frage „Was kostet ein Stromspeicher" lässt sich deshalb nicht sauber mit einem einzelnen Preis beantworten – sondern nur mit einem ehrlichen Blick auf alle Kostenblöcke, die zusammenkommen.'),
      ),
      p(
        t('Wer Speicher-Angebote vergleicht, sollte deshalb wissen, woraus sich der Preis zusammensetzt. Sonst vergleicht man am Ende einen Komplettpreis mit einer reinen Hardware-Position – und das Angebot mit dem niedrigeren Preis hat versteckte Folgekosten, die erst nach der Unterschrift sichtbar werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Hardware: Was die Batterie selbst kostet')),
      p(
        t('Der größte Posten ist die Batterie selbst – also die eigentlichen Speicherzellen plus Batterie-Management-System (BMS) und Gehäuse. Im Privatbereich ist '),
        bold('LFP (Lithium-Eisenphosphat) heute Standard'),
        t('. LFP gilt als sicher, langlebig und ist in Bezug auf Brandverhalten gut beherrschbar.'),
      ),
      p(
        t('Die Hardware-Kosten skalieren nicht linear mit der Größe. Kleine Speicher sind pro kWh teurer, weil Elektronik, Gehäuse und Anschlussaufwand sich wenig ändern, der Energieinhalt aber kleiner ist. Größere Speicher werden pro kWh günstiger, der Komplettpreis steigt aber natürlich an.'),
      ),
      p(
        t('Marken-Spreizung gibt es ebenfalls: Hersteller wie BYD, Sungrow, Huawei, Sonnen, Fronius, Kostal oder VARTA bewegen sich in unterschiedlichen Preisklassen. '),
        bold('Der reine Marken-Aufpreis sagt aber wenig über die wirtschaftliche Eignung im konkreten Fall'),
        t(' – wichtiger sind Garantiebedingungen, Service-Verfügbarkeit, Kompatibilität zum Wechselrichter und Erweiterbarkeit.'),
      ),
    ),

    textBlock(
      h('h2', t('Installation: Was zur Inbetriebnahme dazukommt')),
      p(
        t('Zur Hardware kommen die Kosten für eine fachgerechte Installation. Diese hängen stark vom Bestand und vom Aufstellort ab – aber sie sind nie null.'),
      ),
      ul(
        p(
          bold('Aufstellort und Kabelweg'),
          t(': Wie weit ist der Speicher vom Zählerschrank entfernt? Müssen Wände durchbohrt, Kabel verlegt oder zusätzliche Installationskanäle gebaut werden?'),
        ),
        p(
          bold('Wechselrichter'),
          t(': Bei einem Hybrid-Wechselrichter ist die Speicher-Schnittstelle integriert. Bei AC-gekoppelten Lösungen kommt ein eigener Batterie-Wechselrichter dazu, der separat verkabelt und konfiguriert werden muss.'),
        ),
        p(
          bold('Energiemanagement und Zähler'),
          t(': Für den korrekten Eigenverbrauchsbetrieb braucht es einen Energiezähler am Hausanschluss und eine saubere Kommunikation zwischen Speicher, Wechselrichter und ggf. Wallbox oder Wärmepumpe.'),
        ),
        p(
          bold('Inbetriebnahme und Anmeldung'),
          t(': Konfiguration, Funktionstest, Anmeldung beim Marktstammdatenregister und beim Netzbetreiber.'),
        ),
      ),
      p(
        t('In Summe liegen reine Installationskosten bei einem Standardfall (gleicher Raum wie Wechselrichter, kurzer Kabelweg, passender Zählerschrank) typischerweise zwischen '),
        bold('1.500 € und 3.500 €'),
        t('. Wird es komplexer – andere Etage, lange Kabelwege, größere Anlage – wird es entsprechend mehr.'),
      ),
    ),

    hinweisBlock(
      'Der Zählerschrank ist der oft unterschätzte Posten',
      p(
        t('Viele Bestandsanlagen haben einen Zählerschrank, der die heutigen Anforderungen (DIN VDE 0100-444, Platz für Smart Meter Gateway, Steuerbarkeit nach §14a EnWG) nicht mehr erfüllt. Ein Tausch oder eine Erweiterung kostet je nach Aufwand zwischen 1.500 € und 4.000 €. Das ist kein Speicher-Problem – aber es taucht oft erst bei der Speicher-Installation als notwendiger Zusatzposten auf.'),
      ),
    ),

    tabelleBlock('Typische Größenordnungen 2026 (netto, inkl. 19 % MwSt. = Endpreis)', [
      {
        spalte1: '5 kWh Speicher',
        spalte2: 'Hardware: 4.500 – 7.000 € · Installation: 1.500 – 2.500 €',
        spalte3:
          'kompakte Lösung für kleine Haushalte oder als Einstieg – pro kWh am teuersten, aber sinnvoll bei kleinem Verbrauch',
      },
      {
        spalte1: '10 kWh Speicher',
        spalte2: 'Hardware: 7.000 – 10.500 € · Installation: 1.500 – 3.000 €',
        spalte3:
          'Standardgröße für viele Einfamilienhäuser mit moderatem Verbrauch und einer üblichen PV-Anlage zwischen 8 und 12 kWp',
      },
      {
        spalte1: '15 kWh Speicher',
        spalte2: 'Hardware: 9.500 – 13.500 € · Installation: 2.000 – 3.500 €',
        spalte3:
          'sinnvoll bei höherem Verbrauch, Wärmepumpe, E-Auto oder größerer PV-Anlage – pro kWh günstiger als kleine Speicher',
      },
      {
        spalte1: 'Zählerschrank-Anpassung (falls nötig)',
        spalte2: 'zusätzlich 1.500 – 4.000 €',
        spalte3:
          'kein fester Bestandteil eines Speicher-Angebots, aber bei vielen Bestandsanlagen technisch erforderlich',
      },
      {
        spalte1: 'Erweiterung um Modul (modularer Speicher)',
        spalte2: 'pro zusätzlicher kWh: 500 – 900 €',
        spalte3:
          'wer modular plant und später erweitert, zahlt nur die zusätzliche Kapazität – ohne neuen Wechselrichter und ohne neue Inbetriebnahme',
      },
    ]),

    tippBlock(
      'Was im Angebot stehen sollte',
      p(
        t('Ein belastbares Speicher-Angebot listet Hardware, Installation und ggf. Zählerschrank getrennt auf – nicht als anonymen Pauschalpreis. Sind alle drei Posten klar benannt, lässt sich vergleichen. Steht nur ein Komplettpreis ohne Aufschlüsselung, fehlt meistens irgendwo etwas. Frag nach – nicht nach der Unterschrift, sondern davor.'),
      ),
    ),

    textBlock(
      h('h2', t('AC-gekoppelt oder Hybrid: Wie die Topologie die Kosten beeinflusst')),
      p(
        t('Ob der Speicher mit einem Hybrid-Wechselrichter (DC-gekoppelt) oder über einen separaten Batterie-Wechselrichter (AC-gekoppelt) angebunden wird, hat Einfluss auf die Kosten – aber nicht so groß, wie man vielleicht denken würde.'),
      ),
      p(
        t('Hybrid-Lösungen sind in einer '),
        bold('Neuinstallation'),
        t(' meistens die günstigere Wahl, weil PV- und Speicher-Wechselrichter in einem Gerät stecken. Eine Verkabelung, eine Inbetriebnahme, ein Monitoring. AC-gekoppelte Systeme verursachen hier typischerweise einige hundert Euro Mehrkosten – durch das zweite Gerät und den höheren Installationsaufwand.'),
      ),
      p(
        t('Bei einer '),
        bold('Nachrüstung an einer bestehenden PV-Anlage'),
        t(' kehrt sich das oft um: AC-gekoppelt ist hier deutlich günstiger, weil der vorhandene PV-Wechselrichter erhalten bleiben kann. Würde man stattdessen auf Hybrid umsteigen, müsste der bestehende Wechselrichter ersetzt werden – ein Kostenposten von 1.500 € bis 3.000 €, der sich nur bei ohnehin altersbedingtem Tausch rechnet.'),
      ),
    ),

    textBlock(
      h('h2', t('Laufende Kosten: Was nach der Installation noch dazukommt')),
      p(
        t('Im Vergleich zur Erstinvestition sind die laufenden Kosten überschaubar. Trotzdem sollten sie auf dem Schirm sein, wenn man das Gesamtbild bewerten will.'),
      ),
      ul(
        p(
          bold('Wartung'),
          t(': Bei einem sauber installierten LFP-Speicher fast nichts. Eine fachliche Sichtprüfung alle paar Jahre kostet im niedrigen dreistelligen Bereich. Tatsächliche Servicefälle sind selten und in der Regel über die Herstellergarantie abgedeckt.'),
        ),
        p(
          bold('Wirkungsgradverluste'),
          t(': Beim Laden und Entladen geht ein kleiner Teil der Energie verloren. In der Praxis liegen die Speicherverluste bei 8–15 % je nach Topologie und Auslastung. Das ist kein direkter Kostenposten, sondern fließt in die Wirtschaftlichkeitsrechnung ein.'),
        ),
        p(
          bold('Versicherung'),
          t(': Ein Speicher kann in die bestehende Wohngebäude-Police aufgenommen werden – meist über eine Erweiterung der Photovoltaik-Position. Aufpreis: typischerweise 50 € bis 150 € pro Jahr. Eine eigene Speicher-Police ist in der Regel nicht nötig.'),
        ),
        p(
          bold('Zeit nach 10 bis 15 Jahren'),
          t(': Speicher-Wechselrichter erreichen nach etwa 10 bis 15 Jahren oft das Lebensende und müssen ersetzt werden. Die Batterie selbst hält bei guter Auslegung deutlich länger. Folgekosten in dieser Größenordnung gehören in eine ehrliche 20-Jahres-Rechnung.'),
        ),
      ),
    ),

    textBlock(
      h('h2', t('Was viele bei den Kosten falsch einschätzen')),
      p(
        t('Beim Vergleich von Speicher-Angeboten tauchen immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('Der reine Hardware-Preis pro kWh wird als Vergleichsmaßstab verwendet – obwohl er nichts darüber aussagt, was die Anlage am Ende komplett kostet und ob sie zum Haus passt.')),
        p(t('Pauschalpreise „ab 8.000 € inkl. Installation" werden mit Detail-Angeboten verglichen, ohne zu prüfen, was der Pauschalpreis tatsächlich abdeckt – oft fehlt der Zählerschrank, manchmal sogar Energiemanagement und Anmeldung.')),
        p(t('Der Zählerschrank wird übersehen, bis der Elektriker bei der Vor-Ort-Begehung den Mehraufwand benennt. Dann ist das Angebot nicht mehr das, was es schien.')),
        p(t('Die Förderung wird falsch eingeplant: Bundesweit gibt es 2026 keine Direktförderung für Heimspeicher. Regionale Programme existieren punktuell, sind aber selten der ausschlaggebende Faktor.')),
        p(t('Der „günstige Speicher" rechnet sich nicht automatisch besser. Schlechte Garantiebedingungen, fehlende Service-Verfügbarkeit oder ungeeignete Wechselrichter-Kompatibilität fressen den Preisvorteil im 20-Jahres-Horizont oft auf.')),
      ),
      p(
        bold('Ein ehrlicher Vergleich braucht den Komplettpreis, nicht den niedrigsten Einzelposten'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Ein Stromspeicher kostet 2026 für ein Einfamilienhaus mit 10 kWh nutzbarer Kapazität in einer durchschnittlichen Konstellation '),
        bold('komplett zwischen 9.000 € und 13.500 €'),
        t(' – Hardware, Installation und Anschluss inkl. MwSt. Bei kleinerem oder größerem Speicher verschieben sich die Werte entsprechend. Zählerschrank-Anpassungen können zusätzlich anfallen, wenn der Bestand das nicht hergibt.'),
      ),
      p(
        t('Was der Speicher am Ende wirklich kostet, hängt weniger vom Listenpreis der Batterie ab und mehr davon, ob die Anlage sauber zum Haus, zum Verbrauch und zum bestehenden System ausgelegt ist. Ein passendes 10-kWh-System ist wirtschaftlich besser als ein günstigeres 15-kWh-System, das halb leer steht.'),
      ),
      p(
        bold('Wer Speicher-Angebote vergleicht, sollte deshalb nicht den Preis pro kWh prüfen, sondern den Komplettpreis und die Auslegung'),
        t(' – und im Zweifel ein zweites Angebot einholen, das die gleichen Posten transparent ausweist.'),
      ),
    ),

    ctaBlock({
      titel: 'Stromspeicher passend auslegen lassen',
      text:
        'Wir prüfen, welche Speichergröße zu deinem Haus, deiner PV-Anlage und deinem Verbrauch passt – und legen das Angebot transparent aus, damit du weißt, was der Speicher am Ende wirklich kostet.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was kostet ein 10 kWh Stromspeicher 2026?',
      'Komplett – also Hardware plus Installation – liegt ein 10 kWh LFP-Speicher 2026 typischerweise zwischen 9.000 € und 13.500 € inkl. MwSt. Falls der Zählerschrank angepasst werden muss, kommt das zusätzlich dazu.',
    ),
    faqItem(
      'Sind Stromspeicher in den letzten Jahren günstiger geworden?',
      'Ja, deutlich. Die Hardware-Preise pro kWh sind seit 2020 etwa um die Hälfte gefallen. Aktuell stagnieren die Preise auf einem niedrigen Niveau – die nächste größere Bewegung ist nicht absehbar, kleine Schwankungen ja.',
    ),
    faqItem(
      'Wie unterscheiden sich AC- und DC-gekoppelte Speicher im Preis?',
      'Bei einer Neuinstallation ist eine Hybrid-Lösung (DC-gekoppelt) oft einige hundert Euro günstiger. Bei der Nachrüstung an einer bestehenden PV-Anlage ist meist die AC-Kopplung deutlich günstiger, weil der vorhandene PV-Wechselrichter erhalten bleibt.',
    ),
    faqItem(
      'Was kostet ein Zählerschrank-Tausch zusätzlich?',
      'Je nach Aufwand zwischen 1.500 € und 4.000 €. Das hängt von Bestand, Hauseinführung und nötiger Erweiterung ab. Ein seriöser Anbieter prüft das vor Angebotsabgabe und weist es separat aus – nicht erst während der Installation.',
    ),
    faqItem(
      'Lohnt sich ein günstiger Speicher?',
      'Nicht automatisch. Der Anschaffungspreis ist nur ein Teil der Wirtschaftlichkeit. Garantiebedingungen, Servicefähigkeit vor Ort, Wechselrichter-Kompatibilität und Erweiterbarkeit spielen über 15 bis 20 Jahre eine größere Rolle als der Einstiegspreis.',
    ),
    faqItem(
      'Gibt es 2026 Förderungen für Stromspeicher?',
      'Bundesweit aktuell nein. Es gibt regionale Programme – einzelne Kommunen, manche Stadtwerke, gelegentlich Sonderaktionen. Die Förderhöhe macht den Speicher selten rentabel, ist aber als Bonus mitzunehmen, wenn vorhanden. KfW 270 ist ein Kreditprogramm, keine Direktförderung.',
    ),
  ],
}

await upsertRatgeberArticle(article)
