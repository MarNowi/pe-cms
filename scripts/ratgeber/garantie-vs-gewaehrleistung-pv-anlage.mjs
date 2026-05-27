// scripts/articles/garantie-vs-gewaehrleistung-pv-anlage.mjs

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
  titel: 'Garantie vs. Gewährleistung bei der Solaranlage: Wer haftet wofür – und was im Ernstfall wirklich greift',
  slug: 'garantie-vs-gewaehrleistung-pv-anlage',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'Garantie und Gewährleistung werden oft synonym verwendet – juristisch sind es zwei völlig verschiedene Dinge. Wer den Unterschied nicht kennt, glaubt sich abgesichert, wo er es nicht ist, und übersieht echte Ansprüche, die ihm zustehen. Eine ehrliche Einordnung mit konkreten Schadensfällen, Stolperfallen in den Garantiebedingungen und einer klaren Antwort, was im Insolvenzfall wirklich bleibt.',
  lesezeit: 14,

  seo: seo(
    'Garantie vs. Gewährleistung bei der Solaranlage: Wer haftet wofür | PEAK.Energy',
    'Was Garantie und Gewährleistung bei PV-Anlagen unterscheidet, wer wofür haftet, wie lange Ansprüche laufen, was bei Insolvenz von Solarteur oder Hersteller passiert – und welche Klauseln in Verträgen am häufigsten übersehen werden.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Garantie ist eine '),
      bold('freiwillige Zusage des Herstellers'),
      t(' (z. B. Modul-, Wechselrichter-, Speicherhersteller). Gewährleistung ist ein '),
      bold('gesetzlicher Anspruch'),
      t(' gegen den Vertragspartner (Installateur). Das ist nicht nur juristisch verschieden – es entscheidet im Schadensfall, wer überhaupt zuständig ist.'),
    ),
    summaryPoint(
      t('Bei PV-Anlagen gilt überwiegend Werkvertragsrecht mit '),
      bold('5 Jahren Gewährleistung'),
      t(', weil die Anlage als Bauwerk eingestuft wird. Aber: Manche Anbieter trennen Lieferung (Kauf, 2 Jahre) und Montage (Werkvertrag, 5 Jahre) – das kann den Schutz halbieren.'),
    ),
    summaryPoint(
      t('Hersteller-Garantien laufen typischerweise '),
      bold('12 bis 30 Jahre für Module, 5 bis 12 Jahre für Wechselrichter, 10 Jahre für Speicher'),
      t('. Aber sie decken oft nur die Komponente selbst – Demontage, Versand und Wiedereinbau zahlt häufig der Kunde.'),
    ),
    summaryPoint(
      t('Bei Insolvenz des Installateurs ist die '),
      bold('Gewährleistung faktisch verloren'),
      t(', die Hersteller-Garantien bleiben. Bei Insolvenz eines Herstellers ist es umgekehrt – das ist seltener, aber real (z. B. SunPower 2024).'),
    ),
    summaryPoint(
      t('Was vor Vertragsabschluss zu prüfen ist: Vertragstyp (Werkvertrag oder Kauf), Registrierungspflichten beim Hersteller, '),
      bold('was die Garantie an Servicekosten abdeckt'),
      t(', Wartungspflichten als Garantiebedingung – und ob die mündlichen Zusagen tatsächlich im Vertrag stehen.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('„Auf Ihre Anlage haben Sie 25 Jahre Garantie." Solche Sätze sind in Verkaufsgesprächen Standard – und sie sind in den allermeisten Fällen entweder unpräzise oder schlicht falsch. Denn was im Alltag „Garantie" heißt, ist juristisch zwei sehr verschiedene Dinge: '),
        bold('Garantie'),
        t(' im Rechtssinn ist eine freiwillige Zusage des Herstellers. '),
        bold('Gewährleistung'),
        t(' ist ein gesetzlicher Anspruch gegen den Vertragspartner – also den Installateur, nicht den Hersteller. Die beiden funktionieren völlig unterschiedlich.'),
      ),
      p(
        t('Im Alltag spielt der Unterschied selten eine Rolle – solange die Anlage läuft. Aber im Schadensfall, bei Mängeln oder bei Insolvenz eines Beteiligten wird er plötzlich entscheidend. Wer dann nicht weiß, gegen wen er welchen Anspruch hat, bleibt oft auf Kosten sitzen, die er eigentlich nicht selbst tragen müsste.'),
      ),
      p(
        t('In diesem Artikel klären wir: Was genau ist der Unterschied. Welche Fristen gelten. Welche Komponenten typisch wie lange durch wen abgesichert sind. Was im Vertrag stehen sollte. Und was bei Insolvenz von Solarteur oder Hersteller mit den jeweiligen Ansprüchen passiert. Wer schon im akuten Insolvenz-Fall ist, findet die konkreten Sofort-Schritte in unserem Artikel '),
        link('Solarteur insolvent – was jetzt zu tun ist', '/solaranlage/solarteur-insolvent-was-tun'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Die Kern-Definition: Garantie ist freiwillig, Gewährleistung ist Pflicht')),
      p(
        bold('Gewährleistung'),
        t(' ist die gesetzliche Mängelhaftung nach §§ 434 ff. BGB (Kaufrecht) bzw. §§ 633 ff. BGB (Werkvertragsrecht). Sie greift automatisch und kann nicht ausgeschlossen werden (bei Verbraucherverträgen). Sie richtet sich gegen den unmittelbaren Vertragspartner – bei einer PV-Anlage in der Regel den Installateur, nicht den Hersteller der Module.'),
      ),
      p(
        t('Konkret: Wenn der Wechselrichter falsch dimensioniert wurde, ein Kabel nicht fachgerecht verlegt ist oder die Anlage nicht den vereinbarten Ertrag erreicht – das sind Gewährleistungsfälle gegenüber dem Installateur. Die Ansprüche reichen von Nachbesserung über Ersatzlieferung bis zu Minderung oder Rücktritt.'),
      ),
      p(
        bold('Garantie'),
        t(' ist dagegen eine freiwillige zusätzliche Zusage. Sie kann von Herstellern, manchmal auch von Händlern oder Installateuren gegeben werden. Ihr Umfang, ihre Dauer und ihre Bedingungen sind frei vereinbar – sie steht in den Garantiebedingungen, nicht im Gesetz.'),
      ),
      p(
        t('Wenn der Modulhersteller 25 Jahre Leistungsgarantie gibt, ist das eine vertragliche Zusicherung gegenüber dir – aber nicht gegenüber deinem Solarteur. Und sie sagt nichts darüber aus, wer im Schadensfall die Demontage, den Versand oder die Wiedermontage bezahlt. Das steht in den Garantiebedingungen, und genau da liegen oft die unangenehmen Überraschungen.'),
      ),
    ),

    tabelleBlock('Garantie und Gewährleistung im direkten Vergleich', [
      {
        spalte1: 'Rechtliche Grundlage',
        spalte2: 'Garantie: vertragliche Zusage · Gewährleistung: §§ 434 ff., 633 ff. BGB',
        spalte3: 'Garantie ist freiwillig, Gewährleistung gesetzlich vorgeschrieben',
      },
      {
        spalte1: 'Gegen wen',
        spalte2: 'Garantie: gegen den Garantiegeber (meist Hersteller) · Gewährleistung: gegen den Vertragspartner (meist Installateur)',
        spalte3: 'Wer dir die Anlage verkauft hat, ist nicht automatisch derselbe, der die Garantie ausspricht',
      },
      {
        spalte1: 'Dauer',
        spalte2: 'Garantie: vertraglich (typisch 5 bis 30 Jahre) · Gewährleistung: 2 Jahre Kauf, 5 Jahre Werkvertrag/Bauwerk',
        spalte3: 'PV gilt überwiegend als Bauwerk – 5 Jahre Gewährleistung',
      },
      {
        spalte1: 'Beweislast',
        spalte2: 'Garantie: meist beim Kunden · Gewährleistung: erste 12 Monate beim Verkäufer (Verbrauchsgüterkauf)',
        spalte3: 'Bei Gewährleistung in den ersten 12 Monaten muss der Installateur beweisen, dass kein Mangel vorlag',
      },
      {
        spalte1: 'Was abgedeckt',
        spalte2: 'Garantie: Komponenten-Defekt nach Garantiebedingungen · Gewährleistung: Mängel der vereinbarten Werkleistung',
        spalte3: 'Garantie typisch enger, dafür länger; Gewährleistung umfassend, dafür kürzer',
      },
      {
        spalte1: 'Kosten der Behebung',
        spalte2: 'Garantie: oft nur Ersatzkomponente, Servicekosten teils selbst · Gewährleistung: vollständige Nachbesserung',
        spalte3: 'Wichtigste Differenz: Wer zahlt Demontage, Versand, Wiedereinbau?',
      },
      {
        spalte1: 'Bei Insolvenz des Anbieters',
        spalte2: 'Garantie: bleibt (Hersteller) · Gewährleistung: faktisch weg (Installateur insolvent)',
        spalte3: 'Genau hier liegt der größte praktische Unterschied im Schadensfall',
      },
    ]),

    textBlock(
      h('h2', t('Werkvertrag oder Kaufvertrag? Der unterschätzte Punkt')),
      p(
        t('Wie lange du Gewährleistungsansprüche hast, hängt entscheidend davon ab, ob deine PV-Anlage rechtlich als '),
        bold('Werkvertrag'),
        t(' oder als '),
        bold('Kaufvertrag'),
        t(' eingestuft wird. Der Unterschied ist 2 vs. 5 Jahre Gewährleistung – also mehr als doppelt so lang.'),
      ),
      p(
        t('Die überwiegende Rechtsprechung (BGH-Urteile zur PV-Einordnung) sieht eine PV-Anlage als '),
        bold('Werk an einem Bauwerk'),
        t(', wenn sie fest mit dem Gebäude verbunden wird – also in den allermeisten Fällen. Folge: 5 Jahre Gewährleistung nach § 634a BGB.'),
      ),
      p(
        t('Aber – und hier wird es interessant: Manche Anbieter formulieren ihre Verträge bewusst so, dass die Anlage als reine Lieferung mit Montage gilt. Oder sie trennen den Vertrag in zwei Verträge auf: einen Kaufvertrag über die Komponenten (2 Jahre Gewährleistung) und einen separaten Montage-Werkvertrag (5 Jahre Gewährleistung auf die Montage). Im Schadensfall ist dann unklar, wer wofür haftet, und Ansprüche laufen unterschiedlich schnell ab.'),
      ),
      p(
        t('Was du vor Vertragsabschluss prüfen solltest: Steht im Vertrag etwas wie „Werkvertrag", „schlüsselfertige Anlage" oder „Errichtung einer Photovoltaikanlage"? Das spricht für Werkvertrag und 5 Jahre Gewährleistung. Heißt es dagegen „Lieferung und Montage" oder „Verkauf und Aufstellung" in getrennten Klauseln, ist genauer hinzuschauen.'),
      ),
    ),

    hinweisBlock(
      'Lieferung und Montage getrennt = oft 2 statt 5 Jahre auf die Komponenten',
      p(
        t('Wir sehen das in der Praxis regelmäßig: Anbieter formulieren den Vertrag so, dass die '),
        bold('Hardware als Kaufvertrag'),
        t(' (2 Jahre Gewährleistung) und die Montage separat als Werkvertrag (5 Jahre auf die Montageleistung) läuft. Das ist rechtlich zulässig, aber kundenungünstig: Wenn nach 3 Jahren ein Wechselrichter ausfällt, weil das Gerät selbst einen Material-Mangel hat, ist die Gewährleistung bereits abgelaufen – nur die Hersteller-Garantie greift noch, mit den jeweiligen Einschränkungen. '),
        bold('Vor Vertragsabschluss prüfen, ob „Lieferung und Montage" zusammen als Werkleistung verkauft werden – nicht in getrennten Klauseln'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Typische Hersteller-Garantien bei PV-Komponenten')),
      p(
        t('Jeder Hersteller hat seine eigenen Garantiebedingungen. Die Bandbreite ist groß – auch zwischen ähnlich teuren Komponenten. Ein grober Überblick zu den Standardwerten 2026:'),
      ),
    ),

    tabelleBlock('Typische Garantiedauern bei PV-Komponenten', [
      {
        spalte1: 'Module – Produktgarantie',
        spalte2: '12 bis 25 Jahre',
        spalte3: 'Premium-Hersteller geben heute oft 25 Jahre auf das Produkt selbst',
      },
      {
        spalte1: 'Module – Leistungsgarantie',
        spalte2: '25 bis 30 Jahre',
        spalte3: 'Garantiert Mindestleistung (typisch 80 bis 87 % Restleistung nach Garantieende)',
      },
      {
        spalte1: 'Wechselrichter',
        spalte2: '5 bis 12 Jahre',
        spalte3: 'Verlängerung auf 15 oder 20 Jahre meist kostenpflichtig, lohnt sich oft',
      },
      {
        spalte1: 'Stromspeicher – Produktgarantie',
        spalte2: '5 bis 10 Jahre',
        spalte3: 'Beim Speicher zusätzlich auf Zyklen- oder Kapazitätsgarantie achten',
      },
      {
        spalte1: 'Stromspeicher – Kapazitätsgarantie',
        spalte2: 'Meist 10 Jahre auf 70 bis 80 % Restkapazität',
        spalte3: 'Vertragsformulierung genau prüfen – schwammige Klauseln sind häufig',
      },
      {
        spalte1: 'Wallbox',
        spalte2: '2 bis 5 Jahre',
        spalte3: 'Deutlich kürzer als andere Komponenten, oft mit engen Bedingungen',
      },
      {
        spalte1: 'Montagesystem',
        spalte2: '10 bis 20 Jahre',
        spalte3: 'Wichtig bei Sturmschäden oder Korrosion in Stallumgebung',
      },
    ]),

    textBlock(
      h('h2', t('Garantiebedingungen – die kleinen Stolpersteine')),
      p(
        t('Eine Garantie ist nur so gut wie ihre Bedingungen. Die wichtigsten Punkte, die in den Garantiebedingungen typisch versteckt sind:'),
      ),
      p(
        bold('Registrierungspflicht. '),
        t('Manche Hersteller (vor allem im Speicher- und Wechselrichterbereich) verlangen, dass die Anlage binnen 4 bis 12 Wochen nach Inbetriebnahme online registriert wird. Ohne Registrierung verfallen Garantieansprüche – auch wenn das Gerät tadellos läuft.'),
      ),
      p(
        bold('Wartungsintervalle. '),
        t('Bei manchen Komponenten ist regelmäßige Wartung durch einen zertifizierten Fachbetrieb Voraussetzung für die Garantie. Wer die Wartung selbst macht oder einen nicht-zertifizierten Betrieb beauftragt, kann den Garantieanspruch verlieren.'),
      ),
      p(
        bold('Eingriffe durch Dritte. '),
        t('Sobald jemand etwas an der Anlage verändert, der nicht zertifiziert ist, kann die Garantie erlöschen. Das ist im Insolvenzfall des ursprünglichen Installateurs besonders relevant – jeder Folge-Installateur muss zertifiziert sein.'),
      ),
      p(
        bold('Cloud-Anbindung. '),
        t('Einzelne Hersteller (z. B. SolarEdge mit dem Monitoring-Portal) machen die Garantie von einer aktiven Cloud-Anbindung abhängig. Wer aus Datenschutz-Gründen die Cloud-Verbindung trennt, riskiert die Garantie.'),
      ),
      p(
        bold('Standortbedingungen. '),
        t('Stallumgebung mit Ammoniak (Tierhaltung), Meeresnähe (Salzluft) oder besonders extreme Temperaturen können von der Standardgarantie ausgeschlossen sein. Für diese Bedingungen braucht es speziell zertifizierte Komponenten (z. B. Module nach IEC TS 62804-2 für Stall).'),
      ),
      p(
        bold('Garantieabwicklung über den Installateur. '),
        t('In den Bedingungen vieler Hersteller läuft die Schadensanmeldung formell über den ausführenden Fachbetrieb, nicht direkt durch den Endkunden. Bei Insolvenz des Installateurs muss man sich um die Direktanmeldung beim Hersteller separat bemühen – das ist meist möglich, aber kein Automatismus.'),
      ),
    ),

    tippBlock(
      'Garantieunterlagen aktiv sichern',
      p(
        t('Direkt nach der Inbetriebnahme: Alle Garantiebedingungen als PDF speichern, Registrierungen beim Hersteller durchführen (Modul, Wechselrichter, Speicher – jeweils einzeln), Inbetriebnahmeprotokoll mit Seriennummern archivieren, Wartungsplan einrichten. Das kostet eine Stunde und macht im Schadensfall den Unterschied zwischen funktionierender Garantie und „leider können wir Ihren Anspruch nicht prüfen". Vor allem: Rechnungsbelege aufbewahren – ohne Kaufbeleg ist auch die beste Garantie wertlos.'),
      ),
    ),

    textBlock(
      h('h2', t('Was Garantie typisch nicht abdeckt')),
      p(
        t('Eine der häufigsten Enttäuschungen kommt nicht von der Garantielänge, sondern von dem, was die Garantie '),
        bold('nicht'),
        t(' beinhaltet. Im Standardfall deckt eine Hersteller-Garantie nur das defekte Bauteil selbst ab – nicht die Begleitkosten.'),
      ),
      p(
        bold('Was typisch nicht abgedeckt ist:'),
      ),
      ul(
        p(t('Demontage der defekten Komponente (Arbeitszeit, Anfahrt)')),
        p(t('Versand zum Hersteller und zurück')),
        p(t('Wiedereinbau der reparierten oder ersetzten Komponente')),
        p(t('Ertragsausfall während der Reparatur')),
        p(t('Anpassungen an anderen Komponenten, falls eine reparierte/ersetzte Komponente technisch leicht anders ist')),
        p(t('Folgeschäden an anderen Anlagenteilen')),
      ),
      p(
        t('Bei einem ausgefallenen Wechselrichter, der 1.500 € kostet, kommen so schnell 500 bis 1.000 € Service-Kosten dazu, die der Kunde tragen muss. Bei Modulen ist es ähnlich – das einzelne Modul kostet vielleicht 150 €, aber Ausbau, Versand und Wiedereinbau eines Moduls auf dem Dach sind aufwendig.'),
      ),
      p(
        t('Einige Premium-Hersteller bieten erweiterte Garantien („all-inclusive" oder „comfort warranty") an, die diese Servicekosten mit abdecken. Diese kosten extra (typisch 5 bis 15 % der Komponente), können sich aber lohnen – vor allem bei Wechselrichtern, wo Defekte realistisch innerhalb der Lebensdauer auftreten.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bei Insolvenz passiert – beide Seiten')),
      p(
        bold('Insolvenz des Installateurs. '),
        t('Das ist der häufigere Fall in der aktuellen Insolvenzwelle 2024/2025. Die Hersteller-Garantien laufen ungestört weiter – sie sind ein Vertrag zwischen dir und dem Hersteller, der Installateur war nur Vermittler. Die Installateurs-Gewährleistung dagegen ist faktisch verloren, weil niemand mehr da ist, der sie erfüllen könnte. Mehr dazu im Detail in '),
        link('Solarteur insolvent – was jetzt zu tun ist', '/solaranlage/solarteur-insolvent-was-tun'),
        t('.'),
      ),
      p(
        bold('Insolvenz eines Herstellers. '),
        t('Seltener, aber real. SunPower (USA, 2024) ist das jüngste prominente Beispiel im Modulbereich, im deutschen Markt waren in der Vergangenheit Q-Cells (2012), Solon, Solarworld betroffen. In dem Fall ist die Garantie zwar formal vorhanden, aber faktisch nicht durchsetzbar – der Garantiegeber existiert nicht mehr. Wer einen Mangel an einer betroffenen Komponente hat, muss diese auf eigene Kosten ersetzen oder durch ein anderes Fabrikat tauschen.'),
      ),
      p(
        t('Manche Hersteller schließen für diesen Fall Garantieausfallversicherungen ab oder lassen Treuhand-Konstruktionen einrichten. Das ist die Ausnahme – verlässlich darauf bauen kann man nicht. Was sich verlässlich tun lässt, ist die Wahl eines etablierten Herstellers mit solider Bilanz – auch wenn ein paar Euro pro Modul teurer.'),
      ),
    ),

    hinweisBlock(
      'Mündliche Garantiezusagen sind nichts wert',
      p(
        t('„30 Jahre Garantie auf alles" gehört zu den häufigeren mündlichen Aussagen im Vertriebsgespräch. Im Streitfall zählt nur, was schriftlich vereinbart und vom Hersteller bestätigt ist. '),
        bold('Was nicht in den Garantiebedingungen oder im Vertrag steht, existiert juristisch nicht'),
        t('. Wer eine besondere Garantiezusage bekommt, sollte sie sich schriftlich bestätigen lassen – sonst ist sie Verkaufsdeko, kein Anspruch.'),
      ),
    ),

    textBlock(
      h('h2', t('Drei konkrete Schadensfälle und wie sie laufen')),
      p(
        bold('Fall 1: Wechselrichter fällt nach 7 Jahren aus. '),
        t('Hersteller-Garantie (typisch 10 Jahre) greift. Hersteller liefert Ersatzgerät kostenlos. Demontage, Versand des defekten Geräts, Einbau des neuen Geräts: oft 600 bis 1.000 € Service-Kosten, die der Kunde trägt – außer es wurde damals eine erweiterte Garantie mitgebucht. Installateurs-Gewährleistung ist nach 5 Jahren abgelaufen, kommt also nicht mehr ins Spiel.'),
      ),
      p(
        bold('Fall 2: Modulleistung fällt nach 12 Jahren unter den garantierten Wert. '),
        t('Modul-Leistungsgarantie (typisch 25 bis 30 Jahre) greift. Voraussetzung: Nachweis über Anlagen-Monitoring oder Sachverständigen-Gutachten, dass die Leistung tatsächlich unter dem Garantiewert liegt. Hersteller liefert Ersatzmodule (heute oft mit anderer Wattzahl – Anpassung der String-Konfiguration nötig). Tausch durch Fachbetrieb auf Dach: 2.000 bis 4.000 € je nach Anzahl der betroffenen Module, davon zahlt der Hersteller meist nur die Module selbst.'),
      ),
      p(
        bold('Fall 3: Kabel an einer Verbindung lose, dadurch Lichtbogen und Schäden nach 3 Jahren. '),
        t('Das ist ein '),
        bold('Montagefehler'),
        t(' – Sache der Installateurs-Gewährleistung. Wenn der Installateur noch existiert: Nachbesserungsanspruch nach BGB § 634, der Installateur trägt die Kosten. Bei Insolvenz: faktisch verloren, Reparatur auf eigene Kosten, Forderung gegen den Insolvenzverwalter mit niedriger Quote. Module und Wechselrichter, die durch den Lichtbogen geschädigt wurden, sind ein Fall für die Gebäudeversicherung – das hat mit Garantie nichts zu tun.'),
      ),
      p(
        t('Die drei Fälle zeigen: Wer haftet, hängt nicht nur vom Defekt ab, sondern auch vom Zeitpunkt, der Ursache und der Frage, wer den Schaden verursacht hat. Diese Klärung passiert oft erst im Schadensfall – mit teils unangenehmen Überraschungen.'),
      ),
    ),

    textBlock(
      h('h2', t('Was du im Vertrag prüfen solltest')),
      p(
        t('Bevor du einen PV-Vertrag unterschreibst, lohnt sich der Blick auf folgende Punkte:'),
      ),
      p(
        bold('Vertragstyp. '),
        t('Werkvertrag (5 Jahre Gewährleistung) oder getrennter Kauf plus Montage (2 Jahre auf die Komponenten)? Im Zweifel klarstellen lassen, dass es sich um einen einheitlichen Werkvertrag handelt.'),
      ),
      p(
        bold('Garantiebedingungen der Komponenten. '),
        t('Die konkreten Garantiebedingungen der vorgesehenen Module, Wechselrichter und Speicher sollten als Anlage zum Vertrag bereitgestellt werden – nicht „auf der Herstellerwebsite einsehbar". Was nicht im Vertrag liegt, kann später schwer einzufordern sein.'),
      ),
      p(
        bold('Garantieumfang. '),
        t('Werden Service-Kosten (Demontage, Versand, Einbau) im Garantiefall vom Installateur, vom Hersteller oder vom Kunden getragen? Manche Installateure übernehmen das vertraglich – das ist ein klarer Mehrwert, gehört dann aber schriftlich fixiert.'),
      ),
      p(
        bold('Wartungspflichten. '),
        t('Falls die Hersteller-Garantie regelmäßige Wartung verlangt: Bietet der Installateur diese Wartung an, zu welchem Preis, und sind die Intervalle realistisch?'),
      ),
      p(
        bold('Anzahlungsabsicherung. '),
        t('Bei größeren Anzahlungen: gibt es eine Anzahlungsbürgschaft, Vertragserfüllungsbürgschaft oder einen Insolvenzschutz? Bei kleineren Solarteuren ist das selten – aber beim Vergleich von Angeboten ein realer Wertfaktor.'),
      ),
      p(
        bold('Registrierungspflichten. '),
        t('Welche Komponenten müssen registriert werden, in welcher Frist, durch wen (Installateur oder Endkunde)? Wer übernimmt die Registrierung im Zweifel?'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Garantie und Gewährleistung sind nicht dasselbe. Wer den Unterschied nicht kennt, geht oft mit falschen Erwartungen in einen PV-Vertrag – und merkt es erst im Schadensfall, wenn niemand zuständig ist.'),
      ),
      p(
        bold('Was zu merken ist: '),
        t('Hersteller-Garantien sind lang, aber eng – sie decken die Komponente selbst, oft ohne Servicekosten. Sie laufen direkt zwischen dir und dem Hersteller, sind bei Installateurs-Insolvenz aber sicher. Gewährleistung gegen den Installateur ist kürzer (2 bis 5 Jahre), dafür umfassender – sie deckt die gesamte Werkleistung. Bei Insolvenz des Installateurs ist sie faktisch verloren.'),
      ),
      p(
        t('Praktischer Rat: Vor dem Vertragsabschluss die Garantiebedingungen der Komponenten lesen, beim Vertragstyp auf einheitlichen Werkvertrag bestehen, mündliche Zusagen schriftlich bestätigen lassen, Registrierungen direkt nach Inbetriebnahme durchführen und Belege archivieren. Das ist eine Stunde Aufwand vor dem Vertrag und eine weitere nach der Inbetriebnahme – und im Schadensfall der Unterschied zwischen einer Anlage, die sich selbst absichert, und einer, bei der nach 7 Jahren plötzlich alles auf dich zukommt.'),
      ),
    ),

    ctaBlock({
      titel: 'Vertrag oder Bestandsanlage prüfen lassen',
      text:
        'Du planst eine PV-Anlage und willst den Vertragsentwurf vorab prüfen lassen – auf Vertragstyp, Garantieumfang, Service-Kostenregelung und Anzahlungsabsicherung? Oder du hast eine bestehende Anlage und möchtest wissen, welche Garantien aktiv sind und welche Registrierungen noch fehlen? Wir prüfen am Niederrhein und im Ruhrgebiet beides – ehrlich und ohne Verkaufsdruck.',
      buttonText: 'Termin anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was genau ist der Unterschied zwischen Garantie und Gewährleistung?',
      'Gewährleistung ist ein gesetzlicher Anspruch nach BGB gegen den Vertragspartner (in der Regel den Installateur). Sie greift automatisch, kann nicht ausgeschlossen werden und dauert 2 Jahre (Kauf) oder 5 Jahre (Werkvertrag/Bauwerk). Garantie ist eine freiwillige zusätzliche Zusage – meist vom Hersteller, mit eigenen Bedingungen, Dauer und Umfang. Beide existieren parallel und decken unterschiedliche Dinge ab.',
    ),
    faqItem(
      'Wie lange habe ich Gewährleistung auf meine PV-Anlage?',
      'Bei einem Werkvertrag, der überwiegend angenommen wird, 5 Jahre nach Abnahme (PV gilt als Bauwerk). Bei einem getrennten Kaufvertrag über die Komponenten plus separatem Montagevertrag sind es 2 Jahre auf die Komponenten und 5 Jahre auf die Montageleistung. Vor Vertragsabschluss klärt sich das durch die Vertragsformulierung – idealerweise ein einheitlicher Werkvertrag.',
    ),
    faqItem(
      'Was ist eine Leistungsgarantie bei Modulen?',
      'Eine Zusage des Modulherstellers, dass die Module über eine bestimmte Zeit eine Mindestleistung erbringen. Typisch 25 bis 30 Jahre auf 80 bis 87 % der Nennleistung. Wenn die Module nachweislich unter diesen Wert fallen, ersetzt der Hersteller die betroffenen Module. Nachweis braucht meist Monitoring-Daten oder ein Sachverständigen-Gutachten – nicht jede gefühlte Minderleistung ist auch garantierelevant.',
    ),
    faqItem(
      'Was passiert bei einer Insolvenz des Modulherstellers?',
      'Die Garantie ist formal weiterhin vorhanden, aber faktisch oft nicht durchsetzbar, weil der Garantiegeber nicht mehr existiert. Ersatzmodule müssen dann auf eigene Kosten beschafft werden, gegebenenfalls von einem anderen Hersteller mit angepasster String-Konfiguration. Manche Hersteller haben Garantieausfallversicherungen, das ist aber die Ausnahme. Praktischer Schutz: etablierten Hersteller mit solider Bilanz wählen.',
    ),
    faqItem(
      'Muss ich die Garantie aktiv registrieren?',
      'Bei vielen Herstellern ja – meist binnen 4 bis 12 Wochen nach Inbetriebnahme online im Herstellerportal. Ohne Registrierung verfallen Garantieansprüche, auch wenn das Gerät tadellos läuft. Idealerweise übernimmt der Installateur die Registrierung als Teil der Inbetriebnahme – das gehört aber im Vertrag vereinbart und nach der Inbetriebnahme geprüft.',
    ),
    faqItem(
      'Wer trägt die Servicekosten bei einem Garantiefall?',
      'Im Standardfall trägt der Hersteller nur die Ersatzkomponente. Demontage, Versand, Wiedereinbau und Anfahrt zahlt typisch der Kunde – das können bei einem Wechselrichteraustausch schnell 500 bis 1.000 € sein, bei Modultausch auf dem Dach 2.000 bis 4.000 €. Einige Premium-Hersteller bieten erweiterte Garantien („comfort warranty"), die diese Kosten abdecken. Vor Vertragsabschluss prüfen.',
    ),
    faqItem(
      'Was bedeutet Beweislastumkehr?',
      'Bei einem Verbrauchsgüterkauf gilt in den ersten 12 Monaten nach Übergabe: Wenn ein Mangel auftritt, muss der Verkäufer beweisen, dass der Mangel bei Übergabe nicht vorhanden war. Praktisch heißt das: In den ersten 12 Monaten ist die Reklamation deutlich leichter durchzusetzen. Danach muss der Käufer beweisen, dass der Mangel schon bei Übergabe angelegt war – das ist oft schwierig ohne Sachverständigen-Gutachten.',
    ),
    faqItem(
      'Ist meine PV-Anlage ein Bauwerk im Rechtssinn?',
      'In den meisten Fällen ja – wenn die Anlage fest mit dem Gebäude verbunden ist (typische Aufdach- oder Indach-Anlage). Folge: Werkvertragsrecht mit 5 Jahren Gewährleistung. Bei mobilen oder rein gestellten Anlagen (Balkonkraftwerk, manche Freifeld-Lösungen) kann die Einstufung anders ausfallen. Im Zweifel klärt das ein im PV-Recht erfahrener Anwalt.',
    ),
    faqItem(
      'Was tun, wenn der Hersteller eine Garantiereklamation ablehnt?',
      'Schriftliche Begründung anfordern – das ist Pflicht des Herstellers. Bei nicht nachvollziehbarer Ablehnung: Sachverständigen-Gutachten erstellen lassen (Kosten 500 bis 1.500 €, im Erfolgsfall vom Hersteller zu tragen). Bei größeren Streitwerten lohnt sich anwaltliche Beratung – im PV-Bereich sind viele Standardstreitigkeiten dokumentiert, ein erfahrener Anwalt kann oft binnen 1 bis 2 Schreiben einen Erfolg erzielen.',
    ),
    faqItem(
      'Kann ich Garantien verlängern lassen?',
      'Bei vielen Herstellern ja, vor allem bei Wechselrichtern und Speichern. Verlängerungen müssen meist innerhalb eines Zeitfensters nach Inbetriebnahme (oft 1 bis 12 Monate) abgeschlossen werden. Kosten typisch 5 bis 15 % der Komponente für eine Verlängerung von 10 auf 15 oder 20 Jahre. Lohnt sich häufig, weil Defekte bei Wechselrichtern statistisch genau in dem Zeitraum auftreten, in dem die Standardgarantie ausläuft.',
    ),
    faqItem(
      'Was, wenn der Wechselrichter durch einen Montagefehler des Installateurs Schaden nimmt?',
      'Dann ist die Hersteller-Garantie meist nicht zuständig (Eingriff oder Bedingungen außer Spezifikation), sondern die Installateurs-Gewährleistung. Wenn der Installateur insolvent ist: faktisch verloren, Reparatur auf eigene Kosten, Insolvenzforderung möglich. Wenn die Anlage versichert ist, kann die Gebäude- oder PV-Versicherung greifen – das ist eine andere Logik als Garantie/Gewährleistung und kann unabhängig davon angemeldet werden.',
    ),
  ],
}

await upsertRatgeberArticle(article)
