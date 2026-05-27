// scripts/articles/solarteur-insolvent-was-tun.mjs

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
  titel: 'Solarteur insolvent: Was jetzt mit Anlage, Anzahlung und Garantie zu tun ist',
  slug: 'solarteur-insolvent-was-tun',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'Die Insolvenzwelle 2024 und 2025 hat viele Hauseigentümer mit halbfertigen Anlagen, verlorenen Anzahlungen oder offenen Garantiefragen zurückgelassen. Was du in den ersten 14 Tagen tun solltest, was wirklich verloren ist und was nicht – und wie es konkret weitergeht. Keine Beruhigungsphrasen, sondern eine ehrliche Einordnung.',
  lesezeit: 13,

  seo: seo(
    'Solarteur insolvent: Was tun mit PV-Anlage, Anzahlung und Garantie? | PEAK.Energy',
    'Ehrliche Schritt-für-Schritt-Anleitung bei Insolvenz des Solarteurs: Erste 14 Tage, vier Phasen-Szenarien, realistische Anzahlungs-Aussichten, was an Garantie bleibt und was wirklich verloren ist – am Niederrhein und im Ruhrgebiet.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Eine Insolvenz des Solarteurs ist eine Stressituation, aber '),
      bold('meistens nicht so katastrophal'),
      t(' wie sie im ersten Moment wirkt. Was tatsächlich verloren ist und was nicht, hängt stark davon ab, in welcher Phase die Anlage gerade ist.'),
    ),
    summaryPoint(
      t('Die ersten 14 Tage entscheiden viel: '),
      bold('Unterlagen sichern, Insolvenzverwalter kontaktieren, keine eigenständigen Eingriffe'),
      t(' an einer halbfertigen Anlage. Wer hier durchhängt, verliert oft wertvolle Optionen.'),
    ),
    summaryPoint(
      t('Hersteller-Garantien auf '),
      bold('Module, Wechselrichter und Speicher bleiben bestehen'),
      t(', sofern die Anlage ordnungsgemäß installiert und abgenommen war. Diese laufen direkt zum Hersteller, nicht über den Solarteur.'),
    ),
    summaryPoint(
      t('Die '),
      bold('Installateurs-Gewährleistung'),
      t(' (5 Jahre Nachbesserungsanspruch nach BGB) ist faktisch verloren, weil niemand mehr leistet. Eine Insolvenzforderung kann angemeldet werden, die realistische Quote liegt aber bei 2 bis 10 %.'),
    ),
    summaryPoint(
      t('Anzahlungen sind je nach Zahlungszeitpunkt und Vertrag oft '),
      bold('zum großen Teil verloren'),
      t(' – außer es bestand eine Bürgschaft, Versicherung oder Insolvenzschutz, was bei kleineren Solarteuren leider die Ausnahme war.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('Die Insolvenzwelle in der Solarbranche 2024 und 2025 hat in Deutschland mehrere zehntausend Hauseigentümer betroffen – mit halbfertigen Anlagen, verlorenen Anzahlungen oder offenen Mängeln, für die plötzlich niemand mehr zuständig war. Auch im Niederrhein und im Ruhrgebiet ist das eine reale Erfahrung vieler Kunden – nicht nur bei kleinen lokalen Anbietern, sondern auch bei größeren Namen.'),
      ),
      p(
        t('Wenn du diesen Artikel liest, ist die Situation vermutlich akut. Deshalb vorweg: '),
        bold('Eine Insolvenz ist fast nie das Ende deiner Anlage'),
        t('. Was verloren ist, ist meistens Geld – Anzahlungen oder Nachbesserungsansprüche. Die Anlage selbst kann in praktisch allen Fällen weitergeführt, fertiggestellt oder repariert werden. Die Frage ist nur, durch wen und zu welchem Preis.'),
      ),
      p(
        t('Im Folgenden findest du, was in den ersten 14 Tagen konkret zu tun ist, in welcher Phase deine Anlage sein kann und was das jeweils bedeutet, und was an Garantie und Vermögen tatsächlich auf dem Spiel steht. Keine Beruhigungsphrasen, sondern eine ehrliche Einordnung.'),
      ),
    ),

    textBlock(
      h('h2', t('Die ersten 14 Tage: Was sofort zu tun ist')),
      p(
        t('Die akute Phase nach Bekanntwerden der Insolvenz ist wichtig. Wer hier strukturiert vorgeht, hält sich Optionen offen.'),
      ),
      p(
        bold('1. Insolvenzbekanntmachung prüfen. '),
        t('Unter www.insolvenzbekanntmachungen.de nachschauen, ob und wann das Verfahren eröffnet wurde. Aktenzeichen, Insolvenzgericht und Insolvenzverwalter notieren. Diese Daten brauchst du später für jede Korrespondenz.'),
      ),
      p(
        bold('2. Alle Unterlagen sichern. '),
        t('Verträge, Anzahlungsquittungen, Rechnungen, E-Mail-Korrespondenz, Planungsunterlagen, Datenblätter, Inbetriebnahme- und Abnahmeprotokolle, Fotos vom Bauzustand. Ausdrucken und digital sichern – nicht nur auf dem Server des Solarteurs, der gleich nicht mehr existieren wird.'),
      ),
      p(
        bold('3. Zustand der Anlage dokumentieren. '),
        t('Bei halbfertiger Anlage: Fotos von allen Komponenten, was verbaut ist, was fehlt, wie der Zwischenstand aussieht. Das ist später wichtig für jeden Folge-Installateur und für eventuelle rechtliche Ansprüche.'),
      ),
      p(
        bold('4. Keine eigenständigen Eingriffe. '),
        t('Auch wenn die Versuchung groß ist – nicht selbst weitermachen, nicht selbst Komponenten umbauen, keinen Bekannten „mal eben" dranlassen. Das gefährdet Garantieansprüche und Versicherungsschutz.'),
      ),
      p(
        bold('5. Insolvenzverwalter kontaktieren. '),
        t('Schriftlich, per Einschreiben. Status der Anlage erfragen, eigene Forderungen ankündigen, Frist zur Forderungsanmeldung erfragen. Der Insolvenzverwalter ist nicht dein Gegner – er muss aber alle Gläubiger gleich behandeln.'),
      ),
      p(
        bold('6. Hersteller direkt kontaktieren. '),
        t('Bei verbauten Komponenten direkt beim Hersteller fragen: Wie ist der Garantiestatus? Welche Unterlagen werden für Garantieansprüche gebraucht? Viele Hersteller haben für Insolvenz-Betroffene spezielle Servicewege.'),
      ),
      p(
        bold('7. Forderungsanmeldung beim Insolvenzverwalter. '),
        t('Innerhalb der genannten Frist (meist 4 bis 8 Wochen nach Verfahrenseröffnung) müssen offene Forderungen formell angemeldet werden – Anzahlungen, Nachbesserungsansprüche, geleistete Vorkasse. Versäumte Fristen heißen meist: keine Beteiligung an der Insolvenzquote.'),
      ),
    ),

    hinweisBlock(
      'Keine eigenständigen Eingriffe an der Anlage',
      p(
        t('So nachvollziehbar der Impuls ist, „wenigstens das Schlimmste zu retten" – Eingriffe durch Laien oder nicht qualifizierte Helfer können später Garantieansprüche gegen Hersteller, Versicherungsschutz gegen Brand- oder Sturmschaden und sogar die Betriebssicherheit der Anlage zerstören. '),
        bold('Module, Wechselrichter und Speicher dürfen nur von qualifizierten Elektrofachkräften berührt werden'),
        t(' – das ist nicht Pingeligkeit, sondern Vorgabe der jeweiligen Hersteller und der Versicherer.'),
      ),
    ),

    tippBlock(
      'Unterlagen-Checkliste für die Sicherung',
      p(
        t('Was in den ersten Tagen kopiert und gesichert sein sollte: Vertrag mit Solarteur, alle Auftragsbestätigungen und Änderungen, Anzahlungs- und Restzahlungsquittungen, Bankbelege, Verkabelungs- und Anlagenpläne, Datenblätter aller verbauten Komponenten mit Seriennummern, Inbetriebnahme- und Abnahmeprotokoll (falls vorhanden), Korrespondenz mit dem Solarteur (E-Mails, Briefe, Notizen), Fotos vom aktuellen Zustand und ggf. vom Bauverlauf, ggf. Energiezähler-Stände. Alles digital und ausgedruckt vorhalten, an zwei verschiedenen Orten.'),
      ),
    ),

    textBlock(
      h('h2', t('In welcher Phase ist deine Anlage?')),
      p(
        t('Was konkret zu tun ist und was realistisch erreichbar ist, hängt entscheidend davon ab, wie weit die Anlage bei Insolvenzeröffnung war. Vier typische Phasen mit jeweils unterschiedlicher Ausgangslage:'),
      ),
    ),

    tabelleBlock('Vier Phasen – was wem gehört und was zu tun ist', [
      {
        spalte1: 'Phase 1: Vertrag unterschrieben, Anzahlung geleistet, Anlage noch nicht begonnen',
        spalte2: 'Geld ist im wesentlichen weg – die Anlage existiert noch gar nicht.',
        spalte3: 'Forderung als Insolvenzgläubiger anmelden, neuen Solarteur suchen. Bürgschaft/Anzahlungsversicherung prüfen.',
      },
      {
        spalte1: 'Phase 2: Anlage in Bau, teilweise montiert, nicht abgenommen',
        spalte2: 'Teilkomponenten verbaut, oft mit Eigentumsvorbehalt der Hersteller. Restzahlung noch offen.',
        spalte3: 'Bauzustand dokumentieren, Zugang sichern. Neuer Installateur prüft Übernahme und Fertigstellung.',
      },
      {
        spalte1: 'Phase 3: Anlage technisch fertig, aber nicht förmlich abgenommen',
        spalte2: 'Komponenten verbaut und meist im Eigentum des Kunden, Gewährleistung beginnt erst mit Abnahme.',
        spalte3: 'Abnahmeprozess mit neuem Fachbetrieb durchführen, Status protokollieren, Hersteller-Garantien aktivieren.',
      },
      {
        spalte1: 'Phase 4: Anlage abgenommen und in Betrieb',
        spalte2: 'Eigentum geklärt, Hersteller-Garantien laufen, Installateurs-Gewährleistung läuft – aber niemand mehr da, der sie erfüllen kann.',
        spalte3: 'Wartung und Service neu organisieren. Bei Mängeln: Hersteller direkt, ggf. Ersatzvornahme mit Kostenforderung im Insolvenzverfahren.',
      },
    ]),

    textBlock(
      h('h2', t('Anzahlung weg? Realistische Aussichten')),
      p(
        t('Die Frage, die in praktisch jedem Fall zuerst kommt: Bekomme ich meine Anzahlung zurück?'),
      ),
      p(
        t('Die ehrliche Antwort: meistens nur einen kleinen Teil. Insolvenzquoten – also der Anteil, der von angemeldeten Forderungen tatsächlich ausgezahlt wird – liegen in deutschen Regelinsolvenzen typisch bei '),
        bold('2 bis 10 %'),
        t('. Bei sehr geordneten Verfahren mehr, bei chaotischen weniger. Die Auszahlung erfolgt nach 1 bis 3 Jahren.'),
      ),
      p(
        t('Was die Aussicht verbessern kann:'),
      ),
      ul(
        p(t('Anzahlungsbürgschaft oder Vertragserfüllungsbürgschaft – falls der Solarteur eine hatte, springt die Bank ein')),
        p(t('Insolvenzschutzversicherung des Solarteurs (selten bei kleineren Betrieben, häufiger bei größeren Anbietern)')),
        p(t('Anzahlung per Kreditkarte: Manche Kreditkarten haben Käuferschutz, der greifen kann')),
        p(t('Anzahlung über einen Treuhand-Service: einige neuere Solaranbieter arbeiten mit Treuhandkonten, die im Insolvenzfall schützen')),
      ),
      p(
        t('Was die Aussicht verschlechtert: Wenn der Solarteur schon vor der Insolvenz Liquiditätsprobleme hatte (was häufig der Fall ist) und die Anzahlung längst in andere Projekte oder Verbindlichkeiten geflossen ist. Dann ist auf dem Konto schlicht kein Geld mehr.'),
      ),
      p(
        t('Wer noch keinen Vertrag unterschrieben hat oder vor einer großen Anzahlung steht, sollte sich vor allem damit beschäftigen, wie man so eine Situation überhaupt vermeidet – mehr dazu in unserem Artikel '),
        link('0 € Anzahlung bei der Solaranlage – was steckt wirklich dahinter', '/solaranlage/null-euro-anzahlung-photovoltaik'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Garantien: Was bleibt und was wirklich verloren ist')),
      p(
        t('Hier wird oft alles in einen Topf geworfen, dabei sind das zwei sehr verschiedene Dinge.'),
      ),
      p(
        bold('Hersteller-Garantien bleiben bestehen. '),
        t('Modul-Produktgarantie (typisch 12 bis 25 Jahre), Modul-Leistungsgarantie (25 bis 30 Jahre), Wechselrichter-Garantie (5 bis 12 Jahre), Speicher-Garantie (typisch 10 Jahre Produktgarantie). Diese Garantien gibt der Hersteller direkt – Solarteur oder Installateur sind nur Vermittler. Bei einer Insolvenz des Installateurs ändert sich an diesen Garantien nichts, sofern:'),
      ),
      ul(
        p(t('die Anlage ordnungsgemäß installiert war (Inbetriebnahmeprotokoll)')),
        p(t('die Komponenten vom Solarteur an den Hersteller bezahlt waren (kein offener Eigentumsvorbehalt)')),
        p(t('du als Endkunde die Komponenten beim Hersteller registrieren kannst (manche verlangen Registrierung)')),
      ),
      p(
        bold('Installateurs-Gewährleistung ist faktisch verloren. '),
        t('Nach BGB § 634 hast du gegenüber dem Solarteur 5 Jahre lang Anspruch auf Nachbesserung bei Mängeln (bei Werkverträgen für Bauwerke). Bei einer Insolvenz besteht dieser Anspruch zwar weiter – aber niemand kann ihn mehr erfüllen. Eine Insolvenzforderung wegen Mängelbeseitigungskosten kannst du anmelden, die Quote liegt im realistischen 2-bis-10-%-Bereich.'),
      ),
      p(
        t('Was das praktisch bedeutet: Wenn die Anlage einen Mangel hat, der unter Installateurs-Gewährleistung gefallen wäre, musst du jetzt einen anderen Fachbetrieb mit der Behebung beauftragen und die Kosten selbst tragen. Du kannst diese Kosten als Schadenersatzforderung im Insolvenzverfahren anmelden, wirst aber nur einen Bruchteil zurückbekommen.'),
      ),
      p(
        t('Diese Unterscheidung zwischen Hersteller-Garantie und Installateurs-Gewährleistung ist '),
        bold('die wichtigste juristische Klärung'),
        t(' – sie wird in einem eigenen, vertiefenden Artikel behandelt.'),
      ),
    ),

    hinweisBlock(
      'Hersteller-Garantie an die Bedingungen geknüpft',
      p(
        t('Damit die Hersteller-Garantie auf Module, Wechselrichter und Speicher greift, müssen formale Voraussetzungen erfüllt sein: ordnungsgemäße Installation (dokumentiert über Inbetriebnahmeprotokoll), Bezahlung der Komponenten durch den Solarteur an den Hersteller (kein offener Eigentumsvorbehalt), und oft eine Online-Registrierung beim Hersteller. '),
        bold('Wer in den ersten Tagen nach der Insolvenz nicht prüft, ob alle drei Voraussetzungen erfüllt sind, riskiert Garantieansprüche'),
        t(' – auch wenn die Komponenten technisch einwandfrei laufen.'),
      ),
    ),

    textBlock(
      h('h2', t('Anlage fertigstellen lassen')),
      p(
        t('Bei einer Anlage in Phase 2 oder 3 ist die meist drängendste Frage: Wer macht die Anlage fertig?'),
      ),
      p(
        t('Der Insolvenzverwalter wird das Geschäft des Solarteurs in der Regel nicht weiterführen, sondern abwickeln. Manchmal werden Restaufträge an andere Firmen verkauft oder vermittelt – aber darauf solltest du dich nicht verlassen.'),
      ),
      p(
        t('Der übliche Weg: '),
        bold('Neuer Vertrag mit einem neuen Installationsbetrieb'),
        t(', der den Bauzustand übernimmt und fertigstellt. Wichtig dabei:'),
      ),
      ul(
        p(t('Bestandsaufnahme des Bauzustands durch den neuen Betrieb – nicht über die Pläne des insolventen Solarteurs, sondern eigene Begehung')),
        p(t('Klärung des Eigentums an verbauten Komponenten (Eigentumsvorbehalt prüfen)')),
        p(t('Klarer separater Werkvertrag über die Restleistungen – keine Übernahme der alten Vertragsverhältnisse')),
        p(t('Separate Gewährleistung des neuen Betriebs auf die eigenen Leistungen (nicht auf die Vorleistung des Insolvenzfalls)')),
        p(t('Hersteller-Garantien neu aktivieren oder bestätigen lassen')),
      ),
      p(
        t('Die Kosten der Fertigstellung musst du in voller Höhe tragen – sie als Forderung beim Insolvenzverwalter anzumelden ist möglich, bringt aber wie überall nur die Quote.'),
      ),
      p(
        t('Wirtschaftlich heißt das: Du zahlst die Anlage in Summe oft doppelt – einmal die Anzahlung an den insolventen Solarteur (verloren bis auf Quote), einmal den vollen Betrag an den neuen Betrieb. Das ist bitter, aber meistens immer noch besser als eine halbfertige Anlage auf dem Dach zu haben.'),
      ),
    ),

    textBlock(
      h('h2', t('Mängel an einer fertigen Anlage')),
      p(
        t('Bei Phase 4 (Anlage in Betrieb) ist die Situation rechtlich klarer, aber praktisch je nach Mängelbild trotzdem aufwendig.'),
      ),
      p(
        bold('Mängel an Komponenten (Modul, Wechselrichter, Speicher): '),
        t('Direkt zum Hersteller. Mit Inbetriebnahmeprotokoll und Seriennummer ist das in der Regel unkompliziert. Hersteller stellen Ersatz, der Austausch erfolgt durch einen vom Hersteller zertifizierten Fachbetrieb.'),
      ),
      p(
        bold('Mängel an der Installation (Montage, Verkabelung, Einstellungen): '),
        t('Das ist der schwierige Fall. Diese Mängel fallen unter Installateurs-Gewährleistung – die der insolvente Solarteur nicht mehr erfüllen kann. Optionen:'),
      ),
      ul(
        p(t('Ersatzvornahme durch einen anderen Fachbetrieb auf eigene Kosten')),
        p(t('Anschließend Insolvenzforderung wegen Mängelbeseitigungskosten anmelden (geringe Quote)')),
        p(t('Bei schwerwiegenden, sicherheitsrelevanten Mängeln: Versicherung prüfen (manchmal greift Gebäudeversicherung)')),
      ),
      p(
        t('Wichtig vor jeder Mängelbeseitigung: Bestandsaufnahme durch einen unabhängigen Sachverständigen, falls der Mangel später Gegenstand einer Forderung sein soll. Ohne Beweissicherung wird die spätere Geltendmachung schwierig.'),
      ),
    ),

    textBlock(
      h('h2', t('Service und Wartung neu organisieren')),
      p(
        t('Selbst wenn die Anlage technisch ohne Mängel läuft, fällt mit der Insolvenz der Solarteur als Ansprechpartner für Wartung, Monitoring und Service weg. Das ist nicht akut dramatisch, sollte aber organisiert werden:'),
      ),
      p(
        bold('Monitoring. '),
        t('Wenn der Solarteur die Anlagenüberwachung gehostet hat, kann der Zugang verlorengehen. Wechselrichter und Speicher bieten meist eigene Hersteller-Portale – Zugang neu einrichten, alte Zugänge dokumentieren.'),
      ),
      p(
        bold('Wartung. '),
        t('Inspektion, Sichtprüfung, Modul-Reinigung bei Bedarf – kann ein anderer PV-Fachbetrieb übernehmen. Empfohlen alle 2 bis 4 Jahre.'),
      ),
      p(
        bold('Im Schadensfall. '),
        t('Klären, welcher Fachbetrieb im Schadensfall (Brand, Sturm, Wassereintritt) zuständig wäre. Das gehört in den Versicherungsunterlagen aktualisiert.'),
      ),
    ),

    textBlock(
      h('h2', t('Was sich daraus für die Zukunft lernen lässt')),
      p(
        t('Wer einmal in dieser Situation war, will nicht wieder in sie geraten. Ein paar Lehren, die sich aus den Erfahrungen der Insolvenzwelle 2024/2025 ziehen lassen:'),
      ),
      p(
        bold('Anzahlungen kritisch hinterfragen. '),
        t('Branchenüblich sind 30 bis 50 % Anzahlung – das ist gleichzeitig das, was im Insolvenzfall verloren geht. Modelle ohne oder mit minimaler Anzahlung, mit Bürgschaft oder mit Treuhandschutz reduzieren das Risiko substantiell.'),
      ),
      p(
        bold('Vertragspartner prüfen. '),
        t('Größe und Etabliertheit sind keine Garantie (auch große Anbieter sind insolvent gegangen), aber lange Firmenhistorie, Meisterbetrieb-Status, Bonitätsauskunft und Erfahrungswerte aus dem regionalen Umfeld geben mehr Sicherheit als ein günstiger Onlinepreis.'),
      ),
      p(
        bold('Förderungen, die Anzahlungen schützen, nutzen. '),
        t('KfW-Programme zahlen oft erst nach Inbetriebnahme aus – das ist kein Versehen, sondern Schutz.'),
      ),
      p(
        bold('Hersteller-Garantien dokumentieren. '),
        t('Direkt beim Hersteller registrieren (wo möglich), Seriennummern und Belege selbst archivieren. Damit ist die Anlage selbst bei Insolvenz des Installateurs maximal abgesichert.'),
      ),
      p(
        bold('Lokale Betriebe haben einen Vorteil. '),
        t('Nicht in der Risikofreiheit – auch lokale Betriebe können insolvent werden. Aber im Schadens- oder Insolvenzfall hast du persönliche Ansprechpartner, klare Wege, oft auch eine Nachbarschaft, die mitbekommt, wenn etwas nicht stimmt. Online-Anbieter aus 500 km Entfernung sind im Krisenfall häufig schwerer zu greifen.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Eine Insolvenz des Solarteurs fühlt sich im ersten Moment an wie ein Totalausfall. Praktisch ist sie das in den seltensten Fällen. '),
        bold('Die Anlage selbst läuft weiter oder kann fertiggestellt werden'),
        t(' – was verloren ist, ist meistens Geld in Form der Anzahlung und der Installateurs-Gewährleistung, nicht die Substanz der Investition.'),
      ),
      p(
        t('Was den Unterschied macht zwischen einem ärgerlichen Erlebnis und einem echten Verlust: Die ersten 14 Tage. Wer Unterlagen sichert, den Bauzustand dokumentiert, fristgerecht Forderungen anmeldet und Hersteller-Garantien aktiv hält, hat fast immer eine tragfähige Lösung.'),
      ),
      p(
        t('Wir übernehmen am Niederrhein und im Ruhrgebiet regelmäßig Anlagen aus Insolvenzfällen – sowohl Fertigstellungen halbfertiger Projekte als auch Übernahme von Service und Mängelbeseitigung. Wenn du in einer solchen Situation bist, lohnt sich ein direkter Termin vor Ort, bei dem wir Bauzustand und Optionen gemeinsam durchgehen.'),
      ),
    ),

    ctaBlock({
      titel: 'Anlage aus Insolvenzfall prüfen lassen',
      text:
        'Du bist von der Insolvenz eines Solarteurs am Niederrhein oder im Ruhrgebiet betroffen? Wir prüfen den Bauzustand vor Ort, klären offene Garantiefragen mit den Herstellern, machen eine Bestandsaufnahme für die Fertigstellung oder Mängelbeseitigung – und sagen ehrlich, was geht und was nicht. Erstgespräch und Vor-Ort-Termin sind kostenlos.',
      buttonText: 'Vor-Ort-Termin vereinbaren',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Wer übernimmt die Anlage, wenn der Solarteur insolvent ist?',
      'In der Regel niemand automatisch. Der Insolvenzverwalter wickelt das Unternehmen ab, übernimmt aber selten Restaufträge. Die übliche Lösung ist ein neuer Vertrag mit einem anderen Fachbetrieb, der den Bauzustand übernimmt und fertigstellt. Die Kosten dieser Fertigstellung trägst du selbst – sie können als Forderung beim Insolvenzverwalter angemeldet werden, die Quote ist aber niedrig.',
    ),
    faqItem(
      'Bekomme ich meine Anzahlung zurück?',
      'In den meisten Fällen nur zu einem kleinen Teil. Insolvenzquoten in Deutschland liegen typisch bei 2 bis 10 % der angemeldeten Forderungen, die Auszahlung erfolgt nach 1 bis 3 Jahren. Bessere Aussichten bestehen, wenn der Solarteur eine Anzahlungsbürgschaft, Vertragserfüllungsbürgschaft oder Insolvenzschutzversicherung hatte – das war bei kleineren Betrieben leider die Ausnahme.',
    ),
    faqItem(
      'Was passiert mit der Garantie auf meine Module?',
      'Die Hersteller-Garantie auf Module läuft direkt zwischen dir und dem Modulhersteller, unabhängig vom Solarteur. Sie bleibt also bestehen, sofern die Anlage ordnungsgemäß installiert war (Inbetriebnahmeprotokoll vorhanden) und der Solarteur die Module beim Hersteller bezahlt hat (kein offener Eigentumsvorbehalt). In den ersten Tagen nach Bekanntwerden der Insolvenz prüfen, ob Online-Registrierung beim Hersteller nötig ist.',
    ),
    faqItem(
      'Was ist mit der Gewährleistung des Solarteurs?',
      'Rechtlich besteht der Anspruch auf 5 Jahre Nachbesserung nach BGB § 634 weiter. Praktisch kann ihn niemand mehr erfüllen, weil der Vertragspartner zahlungsunfähig ist. Eine Forderung wegen Mängelbeseitigungskosten kann beim Insolvenzverwalter angemeldet werden – die Quote bleibt aber im typischen 2-bis-10-%-Bereich. Diese Gewährleistung ist faktisch der eigentliche finanzielle Verlust einer Solarteur-Insolvenz, neben der Anzahlung.',
    ),
    faqItem(
      'Darf ich die Anlage selbst weiterbenutzen?',
      'Wenn die Anlage abgenommen und im Eigentum des Kunden ist, ja. Die Anlage gehört dir, kannst du nutzen, der Strom fließt weiter. Wenn die Anlage noch nicht vollständig bezahlt war oder Komponenten unter Eigentumsvorbehalt stehen, ist die rechtliche Lage komplizierter und gehört geklärt, bevor die Anlage weiterbetrieben wird.',
    ),
    faqItem(
      'Wem gehören die verbauten Komponenten bei halbfertiger Anlage?',
      'Das hängt vom Eigentumsvorbehalt ab. Viele Hersteller liefern unter erweitertem Eigentumsvorbehalt – die Komponenten gehören dem Hersteller, bis sie vom Solarteur bezahlt sind. Wenn der Solarteur vor der Insolvenz nicht bezahlt hat, können Hersteller theoretisch Eigentumsansprüche geltend machen. In der Praxis ist das bei bereits verbauten Komponenten kompliziert, weil sie meist nicht mehr ohne Schaden ausgebaut werden können – endgültig klären muss das der Insolvenzverwalter.',
    ),
    faqItem(
      'Was kostet es, die Anlage fertigstellen zu lassen?',
      'Das hängt vom Bauzustand und dem fehlenden Umfang ab. Bei einer Anlage, bei der nur noch Verkabelung, Wechselrichter oder Inbetriebnahme fehlt, sind oft 20 bis 40 % einer vollständigen Anlage zu rechnen. Bei einer Anlage, die nur strukturell montiert ist und der Elektroinstallation fehlt, können es 50 bis 70 % sein. Eine pauschale Antwort gibt es nicht – eine Vor-Ort-Bestandsaufnahme durch einen Fachbetrieb klärt das verbindlich.',
    ),
    faqItem(
      'Kann ich die Insolvenz steuerlich geltend machen?',
      'Bei Privatkunden in der Regel nicht – Anzahlungsverluste für eine private Solaranlage sind keine Werbungskosten und keine außergewöhnliche Belastung. Bei Gewerbe- und Landwirtschaftsbetrieben sind solche Verluste in der Regel als Betriebsausgabe absetzbar. Die genaue Behandlung gehört in jedem Fall mit dem Steuerberater geklärt.',
    ),
    faqItem(
      'Wie erkenne ich frühzeitig, ob ein Solarteur in Schieflage ist?',
      'Warnsignale sind unter anderem: ungewöhnlich lange Lieferzeiten ohne klare Begründung, Druck auf hohe Anzahlungen oder Vorkasse für noch nicht verfügbare Komponenten, ausbleibende Rechnungen für Teilleistungen, ausweichende Antworten auf Statusanfragen, häufige Personalwechsel, vereinzelte Forenbeiträge zu Zahlungsverzug, kurzfristige Vertragsänderungen zu Lasten des Kunden. Keine dieser Punkte ist für sich genommen Beweis – mehrere zusammen sind ein Grund, kritisch nachzufragen.',
    ),
    faqItem(
      'Wer hilft mir rechtlich in einer Insolvenz-Situation?',
      'Erste Anlaufstellen sind Verbraucherzentrale (für Privatkunden) und bei größeren Schäden ein im Insolvenzrecht erfahrener Rechtsanwalt. Für die formale Forderungsanmeldung beim Insolvenzverwalter reicht in der Regel die Eigenanmeldung. Wenn größere Beträge auf dem Spiel stehen oder komplexe Vertragsverhältnisse vorliegen (Mietkauf, Vermittlerverträge, gemischte Verträge mit Finanzierung), lohnt sich eine anwaltliche Beratung.',
    ),
    faqItem(
      'Lohnt sich der Wechsel auf einen neuen Solarteur überhaupt noch?',
      'Wenn die Anlage halbfertig ist: praktisch immer. Eine unfertige Anlage produziert nichts und altert ungenutzt auf dem Dach. Wenn die Anlage abgenommen läuft und keine akuten Mängel hat: Wechsel ist nicht zwingend, aber Service und Monitoring sollten organisiert sein. Wir empfehlen einen jährlichen kurzen Anlagencheck durch einen lokalen Fachbetrieb – das fängt Probleme früh ab und hält die Hersteller-Garantieansprüche aktiv.',
    ),
  ],
}

await upsertRatgeberArticle(article)
