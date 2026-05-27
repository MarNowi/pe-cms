// scripts/articles/pv-anlage-anmelden-marktstammdatenregister.mjs

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
  titel: 'PV-Anlage anmelden: Netzbetreiber, Marktstammdatenregister und Finanzamt Schritt für Schritt',
  slug: 'pv-anlage-anmelden-marktstammdatenregister',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'Eine PV-Anlage wird nicht „einmal" angemeldet – es sind mindestens drei separate Anmeldungen mit unterschiedlichen Fristen, Zuständigkeiten und Konsequenzen bei Versäumnis. Wer den Marktstammdatenregister-Eintrag zu spät macht, kann die Einspeisevergütung verlieren. Wer den Netzbetreiber zu spät einbindet, blockiert die Inbetriebnahme. Eine ehrliche Schritt-für-Schritt-Anleitung mit allen Stolpersteinen.',
  lesezeit: 12,

  seo: seo(
    'PV-Anlage anmelden: Netzbetreiber, MaStR und Finanzamt | PEAK.Energy',
    'Alle Anmeldungen einer PV-Anlage Schritt für Schritt erklärt: Netzbetreiber, Inbetriebsetzungsanzeige, Marktstammdatenregister, Finanzamt, Zähler. Mit Fristen, Zuständigkeiten und Konsequenzen bei Versäumnis – am Niederrhein und im Ruhrgebiet.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Eine PV-Anlage wird nicht einmal angemeldet, sondern '),
      bold('mindestens dreifach'),
      t(': beim Netzbetreiber (vor Bau), im Marktstammdatenregister (nach Inbetriebnahme) und beim Finanzamt (mit der nächsten Steuererklärung). Plus Inbetriebsetzungsanzeige und Zählerwechsel.'),
    ),
    summaryPoint(
      t('Die '),
      bold('Reihenfolge zählt'),
      t(': Netzbetreiber VOR Installation, Inbetriebsetzungsanzeige BEI Inbetriebnahme, Marktstammdatenregister INNERHALB EINES MONATS nach Inbetriebnahme. Wer diese Reihenfolge missachtet, blockiert sich selbst.'),
    ),
    summaryPoint(
      t('Versäumnisse haben reale Folgen: Ein verspäteter '),
      bold('MaStR-Eintrag'),
      t(' kann zum '),
      bold('Verlust der Einspeisevergütung'),
      t(' für den Zeitraum zwischen Inbetriebnahme und Eintrag führen – plus Bußgeld bis 50.000 € möglich.'),
    ),
    summaryPoint(
      t('Der Großteil der Anmeldungen läuft '),
      bold('über den eingetragenen Elektroinstallateur'),
      t(' (Netzbetreiber, Inbetriebsetzungsprotokoll). Aber der MaStR-Eintrag liegt formal in der Verantwortung des Anlagenbetreibers – also bei dir.'),
    ),
    summaryPoint(
      t('Bei späterer Erweiterung um Speicher oder Wallbox: '),
      bold('neue Anmeldungen erforderlich'),
      t(', sowohl beim Netzbetreiber als auch im MaStR. Ein „kleiner Nachtrag" ist es nicht – die §14a-EnWG-Anforderungen kommen seit 2024 dazu.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('„Anlage ist angemeldet" – diesen Satz hören Kunden oft nach der Installation. Was viele nicht wissen: Es gibt nicht '),
        bold('die'),
        t(' Anmeldung. Eine PV-Anlage durchläuft im normalen Fall mindestens fünf verschiedene Eintragungen und Meldungen – bei verschiedenen Stellen, mit verschiedenen Fristen, in verschiedenen Verantwortlichkeiten.'),
      ),
      p(
        t('Wer als Anlagenbetreiber nicht weiß, was wo passiert sein muss, hat im Zweifelsfall ein Problem: Eine falsch oder zu spät registrierte Anlage kann die Einspeisevergütung kosten, Bußgelder auslösen oder bei der nächsten Betriebsprüfung Diskussionen mit dem Finanzamt verursachen. Das ist nicht hypothetisch – die Bundesnetzagentur prüft Marktstammdatenregister-Einträge stichprobenartig und verhängt regelmäßig Sanktionen.'),
      ),
      p(
        t('In diesem Artikel klären wir, welche Anmeldungen wirklich nötig sind, in welcher Reihenfolge sie laufen, wer sie macht und was bei Versäumnis passiert. Die Anleitung gilt für klassische Aufdach-Anlagen auf Einfamilienhäusern und kleinere Gewerbeanlagen. Bei größeren Gewerbeanlagen (ab 100 kWp) kommen zusätzliche Schritte dazu, die wir am Schluss kurz einordnen.'),
      ),
    ),

    textBlock(
      h('h2', t('Übersicht: Welche Anmeldung wann')),
      p(
        t('Bevor wir in die Details gehen, der Gesamtüberblick. Die folgende Tabelle zeigt, welche Anmeldung wann fällig ist, wer sie macht und was bei Versäumnis droht.'),
      ),
    ),

    tabelleBlock('Alle Anmeldungen einer PV-Anlage im Überblick', [
      {
        spalte1: 'Netzanschlussanfrage',
        spalte2: 'Vor Planung (bei Anlagen ab 30 kWp empfohlen, ab 100 kWp Pflicht)',
        spalte3: 'Ohne: Netzanschluss nicht gesichert, Projekt kann scheitern',
      },
      {
        spalte1: 'Netzbetreiber-Anmeldung',
        spalte2: 'Vor Installation, durch eingetragenen Elektroinstallateur',
        spalte3: 'Ohne: Inbetriebnahme rechtlich nicht möglich',
      },
      {
        spalte1: 'Inbetriebsetzungsanzeige',
        spalte2: 'Mit Inbetriebnahme, durch Installateur',
        spalte3: 'Ohne: Anlage darf formell nicht laufen, EEG-Vergütung startet nicht',
      },
      {
        spalte1: 'Marktstammdatenregister (MaStR)',
        spalte2: 'Innerhalb eines Monats nach Inbetriebnahme, durch Anlagenbetreiber',
        spalte3: 'Ohne: Verlust EEG-Vergütung, Bußgeld bis 50.000 €',
      },
      {
        spalte1: 'Zählerwechsel auf Zweirichtungszähler',
        spalte2: 'Bei oder nach Inbetriebnahme, durch Messstellenbetreiber',
        spalte3: 'Ohne: Einspeisemengen werden nicht korrekt erfasst',
      },
      {
        spalte1: 'Finanzamt-Anmeldung',
        spalte2: 'Mit nächster Steuererklärung, durch Anlagenbetreiber',
        spalte3: 'Ohne: Steuerliche Komplikationen, Nachforderungen möglich',
      },
    ]),

    textBlock(
      h('h2', t('1. Netzanschlussanfrage (bei größeren Anlagen)')),
      p(
        t('Bevor eine PV-Anlage geplant wird, sollte – bei größeren Anlagen – der Netzbetreiber gefragt werden, ob der vorhandene Hausanschluss die Einspeisung überhaupt verträgt. Das ist die '),
        bold('Netzanschlussanfrage'),
        t(' (manchmal auch „Netzverträglichkeitsprüfung").'),
      ),
      p(
        t('Für kleine Aufdach-Anlagen (typisch unter 10 kWp am Einfamilienhaus) ist das meist Routine und wird mit der eigentlichen Anmeldung kombiniert. Ab etwa 30 kWp empfehlen wir eine separate Anfrage vor der Planung – sonst kann sich am Ende herausstellen, dass der Anschluss nicht reicht und ein teurer Umbau nötig ist. Ab 100 kWp ist die Anfrage faktisch Pflicht, weil die Antwort die Anlagengröße direkt mitbestimmt.'),
      ),
      p(
        t('Die Bearbeitungszeit der Netzbetreiber liegt im Niederrhein und Ruhrgebiet typisch bei '),
        bold('4 Wochen bis 4 Monaten'),
        t(' – stark betreiberabhängig. Bei größeren Projekten ist das ein realer Planungsfaktor.'),
      ),
    ),

    textBlock(
      h('h2', t('2. Netzbetreiber-Anmeldung (vor Installation)')),
      p(
        t('Diese Anmeldung ist die eigentliche „Anmeldung der Anlage" beim Netzbetreiber. Sie erfolgt '),
        bold('vor der Installation'),
        t(' durch einen Elektroinstallateur, der im '),
        bold('Installateurverzeichnis des Netzbetreibers'),
        t(' eingetragen ist. Wer nicht eingetragen ist, darf die Anmeldung nicht vornehmen – das ist eine harte gesetzliche Vorgabe.'),
      ),
      p(
        t('Die Anmeldung umfasst:'),
      ),
      ul(
        p(t('Anlagendaten (Hersteller, Modell, Leistung von Modulen, Wechselrichtern, Speicher)')),
        p(t('Standort, Schaltbild, Zählerkonzept')),
        p(t('Daten zum Anlagenbetreiber (Vor- und Nachname, Adresse, Steuer-Nummer bei Gewerbe)')),
        p(t('Geplanter Inbetriebnahme-Zeitpunkt')),
      ),
      p(
        t('Nach der Anmeldung erteilt der Netzbetreiber die Zustimmung zur Inbetriebnahme. Das kann je nach Netzbetreiber 2 bis 8 Wochen dauern. Bei Bestandsanlagen mit reiner Speicher-Nachrüstung oft schneller, bei kompletten Neuanlagen langsamer.'),
      ),
      p(
        t('In der Praxis erledigt diese Anmeldung der ausführende PV-Installateur. Du als Anlagenbetreiber unterschreibst meist eine Vollmacht, dass der Installateur stellvertretend für dich tätig werden darf. Die Vollmacht solltest du dir geben lassen – sie ist auch für später nützlich, falls Anpassungen oder Erweiterungen anstehen.'),
      ),
    ),

    textBlock(
      h('h2', t('3. Inbetriebsetzungsanzeige (bei Inbetriebnahme)')),
      p(
        t('Die '),
        bold('Inbetriebsetzungsanzeige'),
        t(' wird vom Installateur direkt am Tag oder kurz nach der Inbetriebnahme an den Netzbetreiber geschickt. Sie ist die formale Mitteilung „Die Anlage läuft jetzt". Daran knüpft der Start der EEG-Vergütung.'),
      ),
      p(
        t('Mit der Anzeige geht das '),
        bold('Inbetriebsetzungsprotokoll'),
        t(' einher – ein Dokument, in dem der Installateur die ordnungsgemäße Funktion bestätigt: Schutzeinrichtungen geprüft, Anlage in Betrieb, Messwerte plausibel. Dieses Protokoll ist für später wichtig – zum Beispiel für Hersteller-Garantien, die oft die ordnungsgemäße Inbetriebnahme als Voraussetzung haben (siehe '),
        link('Garantie vs. Gewährleistung bei der Solaranlage', '/solaranlage/garantie-vs-gewaehrleistung-pv-anlage'),
        t(').'),
      ),
      p(
        t('Was du nach der Inbetriebnahme im Original oder als PDF haben solltest: das Inbetriebsetzungsprotokoll, die schriftliche Inbetriebsetzungsanzeige an den Netzbetreiber, das Schaltbild der Anlage, eine Komponentenliste mit Seriennummern. Diese Unterlagen brauchst du im Garantiefall und für jede spätere Anpassung.'),
      ),
    ),

    textBlock(
      h('h2', t('4. Marktstammdatenregister (innerhalb eines Monats)')),
      p(
        t('Das '),
        bold('Marktstammdatenregister (MaStR)'),
        t(' ist das zentrale Register der Bundesnetzagentur für alle Stromerzeugungs- und Stromverbrauchsanlagen in Deutschland. Jede PV-Anlage – egal wie klein, sogar Balkonkraftwerke – muss eingetragen werden.'),
      ),
      p(
        t('Die Frist: '),
        bold('innerhalb eines Monats nach Inbetriebnahme'),
        t('. Eintragung über '),
        link('marktstammdatenregister.de', 'https://www.marktstammdatenregister.de'),
        t('. Der Eintrag erfolgt online, kostenlos, und ist Aufgabe des '),
        bold('Anlagenbetreibers'),
        t(' – also in der Regel dir, nicht des Installateurs. Manche Installateure übernehmen den MaStR-Eintrag als Service mit; das ist im Vertrag zu regeln, der Anlagenbetreiber bleibt aber formal verantwortlich.'),
      ),
      p(
        t('Was eingetragen werden muss:'),
      ),
      ul(
        p(t('Anlagenbetreiber (Person oder Firma, mit Steuer-ID)')),
        p(t('Anlage selbst (Standort, Leistung, Inbetriebnahmedatum, Module, Wechselrichter)')),
        p(t('Speicher (falls vorhanden, als separate Einheit)')),
        p(t('Zähleranlage und Netzbetreiber')),
      ),
      p(
        t('Die Eintragung selbst dauert für einen geübten Nutzer 20 bis 60 Minuten. Wer es zum ersten Mal macht, sollte 1 bis 2 Stunden einplanen – die Begriffe sind nicht intuitiv, und manche Felder erfordern Daten aus dem Inbetriebsetzungsprotokoll.'),
      ),
    ),

    hinweisBlock(
      'Frist im MaStR ist hart – Konsequenzen sind real',
      p(
        t('Wer die Eintragung im Marktstammdatenregister versäumt, riskiert zweierlei: Erstens '),
        bold('Verlust der EEG-Einspeisevergütung'),
        t(' für den Zeitraum zwischen Inbetriebnahme und Eintragung. Bei einer mittleren Anlage geht es um mehrere hundert bis tausend Euro pro Monat. Zweitens ein '),
        bold('Bußgeld bis 50.000 €'),
        t(' nach § 111 EnWG. Die Bundesnetzagentur prüft stichprobenartig und sanktioniert tatsächlich. Wer nach der Inbetriebnahme schon die Frist überschritten hat: Eintragung trotzdem schnellstmöglich nachholen und die Verzögerung schriftlich erläutern – die Quote der zurückgegebenen Vergütung sinkt mit der Verspätung, ist aber selten null.'),
      ),
    ),

    textBlock(
      h('h2', t('5. Zählerwechsel auf Zweirichtungszähler')),
      p(
        t('Damit Einspeisung und Bezug korrekt abgerechnet werden können, braucht es einen '),
        bold('Zweirichtungszähler'),
        t(' – ein Zähler, der beide Energierichtungen erfasst. Den Wechsel veranlasst der Netzbetreiber bzw. der zuständige Messstellenbetreiber, meist im Rahmen der Anmeldung.'),
      ),
      p(
        t('Bei kleineren Anlagen kann das ein moderner Standardzähler („moderne Messeinrichtung") sein. Bei Anlagen über 7 kWp Erzeugungsleistung greift die '),
        bold('Pflicht zum intelligenten Messsystem (iMSys)'),
        t(' nach Messstellenbetriebsgesetz – ein Smart Meter mit Datenübertragung an den Netzbetreiber. Bei Anlagen ab 25 kWp ist das iMSys faktisch immer Pflicht.'),
      ),
      p(
        t('Was du als Anlagenbetreiber davon merkst: Termin mit dem Messstellenbetreiber, kurzer Stromausfall beim Zählerwechsel (typisch 30 Minuten bis 2 Stunden), neue Zählerstände dokumentieren. Die jährlichen Kosten für das iMSys (typisch 100 bis 130 € bei Erzeugungsanlagen) werden vom Messstellenbetreiber abgerechnet.'),
      ),
    ),

    textBlock(
      h('h2', t('6. Finanzamt – die oft übersehene Anmeldung')),
      p(
        t('Eine PV-Anlage ist steuerlich relevant – auch wenn sie privat auf dem eigenen Dach betrieben wird. Was konkret beim Finanzamt zu tun ist, hängt von Anlagengröße, Gebäudetyp und Optionen ab.'),
      ),
      p(
        bold('Anlagen bis 30 kWp auf Wohngebäuden: '),
        t('Seit 2022 gilt § 3 Nr. 72 EStG – Einnahmen und Entnahmen sind '),
        bold('einkommensteuerfrei'),
        t('. Eine separate Anmeldung beim Finanzamt ist meist nicht nötig. Seit 2023 gilt zusätzlich der '),
        bold('Nullsteuersatz für die Umsatzsteuer'),
        t(' – die Anlage wird beim Kauf netto wie brutto behandelt, ein Vorsteuerabzug entfällt entsprechend (ist aber auch nicht nötig).'),
      ),
      p(
        bold('Gewerbeanlagen und größere Anlagen: '),
        t('Die PV-Anlage ist eine gewerbliche Tätigkeit. Anmeldung beim Finanzamt als gewerblicher Betrieb (oder als Teilbetrieb), Umsatzsteuer regulär, Investitionsabzugsbetrag und Sonderabschreibung möglich. Konkrete Schritte: '),
        link('PV-Wirtschaftlichkeit am Beispielbetrieb', '/solaranlage/pv-gewerbe-wirtschaftlichkeit-beispielrechnung'),
        t('. Bei Landwirten ist zusätzlich die USt-Pauschalierungsfrage zu klären: '),
        link('PV in der Landwirtschaft', '/solaranlage/pv-landwirtschaft-stalldach'),
        t('.'),
      ),
      p(
        t('Wer unsicher ist, ob seine Anlage in die EStG-Befreiung fällt oder steuerlich angemeldet werden muss, klärt das am besten mit dem Steuerberater bei der nächsten Steuererklärung. Bei Privatkunden mit kleiner Anlage ist das oft mit einem kurzen Hinweis erledigt.'),
      ),
    ),

    tippBlock(
      'Reihenfolge in der Praxis',
      p(
        t('1. Bei größeren Anlagen Netzanschlussanfrage stellen (4–16 Wochen Vorlauf einplanen). 2. PV-Installateur beauftragt Netzbetreiber-Anmeldung vor Bau. 3. Anlage wird installiert. 4. Installateur meldet Inbetriebsetzung und übergibt Protokoll. 5. '),
        bold('Anlagenbetreiber'),
        t(' (du!) trägt innerhalb eines Monats die Anlage im Marktstammdatenregister ein. 6. Messstellenbetreiber tauscht den Zähler. 7. Mit der nächsten Steuererklärung wird der Status beim Finanzamt geklärt. Schritte 1–4 und 6 laufen meist über den Installateur; Schritte 5 und 7 sind deine Verantwortung. Wer das von Anfang an klar trennt, hat keine Lücken im Prozess.'),
      ),
    ),

    textBlock(
      h('h2', t('Erweiterungen: Speicher oder Wallbox nachrüsten')),
      p(
        t('Bei späterer Erweiterung um Stromspeicher oder Wallbox sind neue Anmeldungen erforderlich – das ist nicht einfach „Anlage besteht ja schon".'),
      ),
      p(
        bold('Speicher-Nachrüstung. '),
        t('Neue Anmeldung beim Netzbetreiber (durch Installateur), neuer MaStR-Eintrag für den Speicher als eigene Einheit, ggf. § 14a-EnWG-Modulwahl für die Netzentgeltreduzierung. Wer die Anmeldung versäumt, bleibt ohne Modulvorteil – nicht dramatisch, aber kostspielig im Jahr. Details: '),
        link('§ 14a EnWG für Stromspeicher', '/stromspeicher/paragraf-14a-enwg-stromspeicher'),
        t('.'),
      ),
      p(
        bold('Wallbox-Nachrüstung. '),
        t('Anmeldung beim Netzbetreiber ab Ladeleistung 3,7 kW Pflicht, ab 12 kW genehmigungspflichtig. § 14a EnWG für steuerbare Verbrauchseinrichtungen seit 2024 relevant. Mehr dazu: '),
        link('Wallbox anmelden beim Netzbetreiber', '/wallbox/wallbox-anmelden-netzbetreiber'),
        t(' und '),
        link('§ 14a EnWG für Wallbox', '/wallbox/paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen'),
        t('.'),
      ),
      p(
        t('Wichtig: Bei nachträglich angeschlossenem Speicher oder Wallbox auch das Schaltbild der bestehenden Anlage entsprechend ergänzen. Bei einem Schadensfall oder einer späteren Anlagenprüfung sollten die aktuellen Anlagengrenzen und Verschaltungen dokumentiert sein.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bei größeren Anlagen zusätzlich kommt (ab 100 kWp)')),
      p(
        t('Bei Gewerbe- und Landwirtschaftsanlagen ab 100 kWp Leistung kommen weitere Schritte dazu:'),
      ),
      ul(
        p(t('Direktvermarktungsvertrag: Anlage wird über einen Direktvermarkter an der Börse verkauft, mit Marktprämie nach EEG. Vertragsvereinbarung vor Inbetriebnahme.')),
        p(t('Anlagenfernsteuerung: Direktvermarkter braucht technische Anbindung zur Steuerung der Anlage (Abregelung bei Negativpreisen, Netzdienlichkeit).')),
        p(t('Erweiterte Netzbetreiber-Anforderungen: bei Mittelspannungsanschluss ggf. eigene Trafostation, Zertifikate für Anlagensicherheit nach VDE-AR-N 4110/4120.')),
        p(t('Bei Anlagen ab 750 kWp: Teilnahme am EEG-Ausschreibungsverfahren für die Förderung.')),
      ),
      p(
        t('Diese Schritte sind nicht Selbstläufer und erhöhen den Projektaufwand spürbar. Bei der Planung von vornherein einkalkulieren. Mehr zum Gewerbe-Kontext: '),
        link('Solaranlage auf dem Gewerbedach', '/solaranlage/solaranlage-gewerbedach'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bei Eigentümerwechsel oder Verpachtung passiert')),
      p(
        t('Ändern sich die Eigentümerverhältnisse einer Anlage, müssen die Anmeldungen entsprechend angepasst werden. Konkret:'),
      ),
      ul(
        p(t('Marktstammdatenregister: Anlagenbetreiber-Daten aktualisieren (Käufer wird neuer Anlagenbetreiber)')),
        p(t('Netzbetreiber: Vertragspartner-Wechsel anzeigen')),
        p(t('Finanzamt: bei gewerblichen Anlagen Übertragung des Betriebs anmelden')),
        p(t('Hersteller-Garantien: bei einigen Herstellern muss der Käufer als neuer Eigentümer registriert werden, sonst Garantieverlust')),
      ),
      p(
        t('Wenn die Anlage als Teil eines Hofverkaufs oder einer Verpachtung übergeht, gehört das in den Notarvertrag aufgenommen – Vertragsformulierung „mit allen Rechten und Pflichten am Stromanschluss und der PV-Anlage" reicht meist nicht für die saubere Übertragung. Im Zweifel mit Notar und Steuerberater die Klauseln durchgehen.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit')),
      p(
        t('Die Anmeldung einer PV-Anlage ist kein einzelner Vorgang, sondern ein Bündel aus mindestens fünf Schritten mit unterschiedlichen Zuständigkeiten und Fristen. Der Großteil läuft über den Installateur, aber der Marktstammdatenregister-Eintrag und die steuerliche Klärung bleiben in deiner Verantwortung – und genau da entstehen die meisten Versäumnisse.'),
      ),
      p(
        bold('Was zu merken ist: '),
        t('Netzbetreiber vor Bau, Inbetriebsetzungsanzeige mit Bau, MaStR innerhalb eines Monats nach Inbetriebnahme. Die MaStR-Frist ist hart – mit echten finanziellen Folgen bei Versäumnis. Wer die Eintragung selbst nicht machen will, sollte das schriftlich mit dem Installateur vereinbaren; ohne Vereinbarung bleibt die Verantwortung beim Anlagenbetreiber.'),
      ),
      p(
        t('Bei kleinen Wohnhaus-Anlagen ist der Gesamtaufwand überschaubar – wenige Stunden eigene Arbeit über die ersten 4 bis 8 Wochen nach Inbetriebnahme. Bei größeren Anlagen wird es komplexer, aber auch dort gilt: Strukturiert vorgehen, Unterlagen archivieren, Fristen einhalten – dann ist der Verwaltungsaufwand kein Drama.'),
      ),
    ),

    ctaBlock({
      titel: 'Anmeldungen prüfen oder übernehmen lassen',
      text:
        'Du planst eine PV-Anlage und willst die Anmeldungen sauber durch den Installateur erledigt haben – inklusive MaStR? Oder du hast eine Anlage und bist unsicher, ob alle Anmeldungen korrekt sind und keine Frist verpasst wurde? Wir prüfen am Niederrhein und im Ruhrgebiet beides und übernehmen die fehlenden Schritte.',
      buttonText: 'Anmeldungs-Check anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was passiert, wenn ich den Marktstammdatenregister-Eintrag vergesse?',
      'Zwei Konsequenzen sind real: Erstens kann die Einspeisevergütung für den Zeitraum zwischen Inbetriebnahme und Eintragung verloren gehen – bei einer mittleren Anlage schnell mehrere hundert Euro pro Monat. Zweitens kann ein Bußgeld bis 50.000 € nach § 111 EnWG verhängt werden. Die Bundesnetzagentur prüft stichprobenartig. Wer die Frist überschritten hat: Eintragung schnellstmöglich nachholen, Verzögerung schriftlich erläutern.',
    ),
    faqItem(
      'Muss ich die Anmeldungen selbst machen oder übernimmt das der Installateur?',
      'Die Netzbetreiber-Anmeldung und Inbetriebsetzungsanzeige macht der Installateur (das geht gar nicht anders, weil er im Installateurverzeichnis eingetragen sein muss). Der Marktstammdatenregister-Eintrag liegt formal in der Verantwortung des Anlagenbetreibers – also bei dir. Viele Installateure übernehmen das als Service, das gehört aber im Vertrag vereinbart. Im Zweifel: selbst eintragen, dauert eine bis zwei Stunden.',
    ),
    faqItem(
      'Wann genau gilt die Anlage als „in Betrieb"?',
      'Mit dem Tag der ersten Stromerzeugung in das öffentliche Netz – also wenn die Anlage zum ersten Mal Strom erzeugt und der Wechselrichter ans Netz gegangen ist. Das Datum steht im Inbetriebsetzungsprotokoll. Daran knüpfen die EEG-Vergütungshöhe (Vergütungssatz zum Inbetriebnahmedatum), die MaStR-Frist (ein Monat danach) und die Gewährleistungsfrist (5 Jahre ab Abnahme, die meist zeitnah zur Inbetriebnahme erfolgt).',
    ),
    faqItem(
      'Muss ich meine Anlage beim Finanzamt anmelden?',
      'Bei Anlagen bis 30 kWp auf Wohngebäuden meist nicht – seit 2022 gilt § 3 Nr. 72 EStG, Einnahmen sind einkommensteuerfrei. Eine kurze Erwähnung in der nächsten Steuererklärung reicht oft. Bei Gewerbeanlagen oder bei größeren Privatanlagen ist eine gewerbliche Anmeldung üblich. Bei Landwirten kommt zusätzlich die USt-Pauschalierungsfrage dazu. Im Zweifel mit Steuerberater klären – vor der Investition, nicht erst beim Jahresabschluss.',
    ),
    faqItem(
      'Brauche ich einen neuen Zähler?',
      'Ja – einen Zweirichtungszähler, der Einspeisung und Bezug separat erfasst. Der Tausch erfolgt durch den Messstellenbetreiber im Rahmen der Anlagenanmeldung. Bei Anlagen über 7 kWp Erzeugungsleistung greift die Pflicht zum intelligenten Messsystem (Smart Meter mit Datenanbindung). Bei kleineren Anlagen reicht meist eine moderne Messeinrichtung. Kosten typisch 20 bis 130 € pro Jahr je nach Zählertyp.',
    ),
    faqItem(
      'Was ist, wenn ich nachträglich einen Speicher dazu kaufe?',
      'Dann sind neue Anmeldungen fällig: erneute Netzbetreiber-Anmeldung durch den Installateur (mit aktualisiertem Schaltbild), neuer MaStR-Eintrag für den Speicher als eigene Einheit, ggf. § 14a-EnWG-Modulwahl für die Netzentgeltreduzierung. Das ist kein „kleiner Nachtrag", sondern ein eigenes Anmeldeverfahren. Die Verantwortung für den MaStR-Eintrag liegt wieder bei dir – ein Monat Frist ab Inbetriebnahme des Speichers.',
    ),
    faqItem(
      'Was ist mit Mieterstrom-Konstellationen?',
      'Bei Mieterstrom (Vermieter erzeugt Strom für Mieter im selben Gebäude) gibt es zusätzliche Anmeldungen: Mieterstrom-Vertrag mit jedem Mieter, ggf. Anmeldung des Mieterstrom-Modells beim Netzbetreiber, separate steuerliche Behandlung. Das ist deutlich komplexer als eine reine Einspeise-Anlage und gehört in jedem Fall mit einem im Energierecht erfahrenen Steuerberater oder Anwalt geklärt. Standardanleitungen reichen hier nicht.',
    ),
    faqItem(
      'Was passiert mit den Anmeldungen, wenn ich die Anlage verkaufe?',
      'Beim Verkauf oder bei der Verpachtung müssen die Anlagenbetreiber-Daten im MaStR aktualisiert werden, der Netzbetreiber-Vertrag wechselt auf den neuen Eigentümer, bei gewerblichen Anlagen ist die Übertragung beim Finanzamt anzumelden. Auch Hersteller-Garantien sollten umgeschrieben werden – manche Hersteller verlangen explizite Re-Registrierung, sonst Garantieverlust. Beim Notar-Termin gehört das alles auf die Checkliste.',
    ),
    faqItem(
      'Wie lange dauert eine Netzanschlussanfrage?',
      'Bei kleinen Anlagen (unter 30 kWp) ist die Anmeldung meist routinemäßig und mit der eigentlichen Netzbetreiber-Anmeldung kombiniert – wenige Wochen Bearbeitungszeit. Bei größeren Anlagen mit eigener Netzanschlussanfrage dauert es im Niederrhein und Ruhrgebiet typisch 4 Wochen bis 4 Monate, bei Anlagen über 100 kWp mit ggf. Trafostation auch länger. Der Faktor ist stark betreiberabhängig – idealerweise früh in der Planung anfangen.',
    ),
    faqItem(
      'Was tun, wenn meine Anlage schon Jahre läuft und ich unsicher bin, ob alles korrekt angemeldet ist?',
      'Drei Schritte: 1. Eigene Unterlagen prüfen – Inbetriebsetzungsprotokoll, MaStR-Bestätigung, Steuerunterlagen vorhanden? 2. MaStR-Online-Portal aufrufen und unter eigenem Konto prüfen, ob die Anlage korrekt eingetragen ist (Korrekturen sind möglich). 3. Bei Unsicherheiten Steuerberater einbinden, ob die steuerliche Anmeldung passt. Wer Lücken findet: schnellstmöglich nachholen, bei Mängeln offen mit dem Netzbetreiber oder der Bundesnetzagentur kommunizieren – das senkt mögliche Sanktionen erheblich.',
    ),
  ],
}

await upsertRatgeberArticle(article)
