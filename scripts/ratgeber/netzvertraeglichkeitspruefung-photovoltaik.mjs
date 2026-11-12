import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { t, bold, link, p, h, ul, summaryPoint, textBlock, hinweisBlock, tippBlock, tabelleBlock, ctaBlock, faqItem, seo } from './_helpers.mjs'

const article = {
  titel: 'Netzverträglichkeitsprüfung für Photovoltaik: Ablauf, Fristen und Netzanschluss richtig verstehen',
  slug: 'netzvertraeglichkeitspruefung-photovoltaik',
  kategorie: 'solaranlage',
  cluster: 'pv-recht',
  status: 'entwurf',
  lesezeit: 11,
  teaser: 'Vor dem Netzanschluss einer PV-Anlage prüft der Netzbetreiber, ob und wo eingespeist werden kann. Was bedeutet Netzverträglichkeitsprüfung? Welche Angaben werden benötigt, was gilt bei 30 und 100 kW und was passiert bei Verzögerungen? Wir erklären den Ablauf ohne falsche Versprechen.',
  seo: seo('Netzverträglichkeitsprüfung PV: Ablauf & Fristen | PEAK.Energy', 'Netzverträglichkeitsprüfung einer PV-Anlage: Netzanschlussbegehren, § 8 EEG, 8-Wochen-Frist, Netzverknüpfungspunkt und Sonderregeln bis 30 bzw. 100 kW.'),
  zusammenfassung: [
    summaryPoint(t('Die Netzverträglichkeitsprüfung klärt, ob das Netz die geplante Einspeisung am vorgesehenen '), bold('Netzverknüpfungspunkt'), t(' aufnehmen kann und welche Maßnahmen nötig sind.')),
    summaryPoint(t('Ein '), bold('Netzanschlussbegehren'), t(' sollte frühzeitig mit vollständigen und richtigen Daten beim zuständigen Netzbetreiber eingehen.')),
    summaryPoint(t('Die '), bold('Acht-Wochen-Frist'), t(' aus § 8 Abs. 6 EEG betrifft die Rückmeldung nach Eingang der erforderlichen Informationen; sie ist keine generelle Pflicht, acht Wochen vor Montage anzumelden.')),
    summaryPoint(t('Für bestimmte Anlagen bis 30 kW und Solaranlagen bis höchstens 100 kW an bestehenden Netzanschlüssen gibt es gesetzliche Sonderregeln – aber keinen Freibrief für eigenmächtiges Anschließen.')),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Was bedeutet Netzverträglichkeitsprüfung bei einer PV-Anlage?')),
      p(t('Eine Photovoltaikanlage speist elektrische Leistung in ein Netz ein, das ursprünglich vielerorts vor allem für den Verbrauch dimensioniert wurde. Vor dem Anschluss muss deshalb geklärt werden, ob der vorgesehene Netzverknüpfungspunkt technisch geeignet ist. Die Prüfung betrachtet unter anderem Spannungshaltung, Betriebsmittelbelastung, Netzstruktur und die geplante Einspeiseleistung.')),
      p(t('Das Ergebnis kann eine Zustimmung für den vorhandenen Anschluss, technische Vorgaben oder die Prüfung eines anderen Netzverknüpfungspunkts sein. Eine günstige Dachfläche garantiert noch keine unproblematische Netzanschlusssituation.')),
    ),
    textBlock(
      h('h2', t('Netzanschlussbegehren: Was der Netzbetreiber wissen muss')),
      p(t('Am Anfang steht die Mitteilung des geplanten Vorhabens an den zuständigen Verteilnetzbetreiber. Je nach Anlagengröße, Anschlusskonstellation und Netzbetreiber unterscheiden sich die einzureichenden Unterlagen. Typisch sind:')),
      ul(
        p(t('Standort, vorhandener Hausanschluss und Angaben zum Anschlussnutzer beziehungsweise Anlagenbetreiber.')),
        p(t('Geplante PV-Modulleistung, Wechselrichterdaten und maximale Einspeiseleistung.')),
        p(t('Informationen zu bereits vorhandenen Erzeugungsanlagen und Batteriespeichern.')),
        p(t('Anschlusskonzept, einpolige Übersicht und gegebenenfalls Schutz- und Messkonzept.')),
        p(t('Für größere oder komplexe Anlagen weitere elektrische Nachweise nach den einschlägigen Anschlussregeln.')),
      ),
      p(t('Wer beim Antrag unterschiedliche kWp-, kW- und kVA-Angaben verwechselt oder eine spätere Speichererweiterung nicht bedenkt, verursacht vermeidbare Rückfragen.')),
    ),
    textBlock(
      h('h2', t('Welche Frist gilt nach § 8 EEG?')),
      p(t('Nach § 8 Abs. 6 EEG muss der Netzbetreiber nach Eingang der erforderlichen Informationen grundsätzlich unverzüglich, spätestens innerhalb von acht Wochen, das Ergebnis der Netzverträglichkeitsprüfung und weitere vorgeschriebene Anschlussinformationen übermitteln. Für bestimmte Konstellationen und Webportalverfahren gelten besondere Regelungen.')),
      p(t('Das ist '), bold('keine pauschale achtwöchige Anmeldefrist vor der Montage'), t('. Außerdem ist die Frist für eine Rückmeldung nicht automatisch mit einer garantierten Fertigstellung des Anschlusses gleichzusetzen. Bei einem notwendigen Netzausbau kann sich die tatsächliche Umsetzung verzögern.')),
    ),
    hinweisBlock('Keine automatische Anschlussfreigabe für jeden Fall',
      p(t('§ 8 EEG kennt unter bestimmten Voraussetzungen Sonderregeln bei ausbleibender Netzbetreiberreaktion – insbesondere für bestimmte Anlagen bis 30 kW und Solaranlagen bis höchstens 100 kW auf Grundstücken mit bestehendem Netzanschluss. Voraussetzungen, Fristen, Anschlussleistung, technische Regeln und die konkrete Fallgruppe müssen vollständig geprüft werden. Daraus folgt nicht, dass Laien die Anlage eigenmächtig anschließen oder in Betrieb nehmen dürfen.')),
    ),
    textBlock(
      h('h2', t('Bis 30 kW, bis 100 kW und größere PV-Anlagen: Was unterscheidet sich?')),
      p(t('Kleine Dachanlagen an bestehenden Netzanschlüssen können von vereinfachten digitalen Anschlussverfahren profitieren. Für Solaranlagen über 30 bis höchstens 100 kW sind die gesetzlichen Besonderheiten enger an die Anschlusskonstellation geknüpft; die Prüfung der bereits vorhandenen Leistung und der vereinbarten Anschlusskapazität ist wichtig.')),
      p(t('Bei größeren Gewerbe- und Freiflächenvorhaben ist eine frühe Abstimmung oft entscheidend. Dort können Netzverstärkung, Übergabestation, Schutztechnik, Anschlussleitung und wirtschaftliche Planung maßgebliche Projektbestandteile sein.')),
      p(t('Entscheidend ist nicht allein die Anzahl der Solarmodule. Die rechtliche Betrachtung verwendet unterschiedliche Leistungsbegriffe und muss zur konkreten Anlage passen.')),
    ),
    tabelleBlock('Netzanschluss: Typische Projektphasen', [
      { spalte1: '1. Vorprüfung', spalte2: 'Dach, Leistung, Hausanschluss', spalte3: 'Technisches Vorhaben und Anschlussleistung sauber aufnehmen' },
      { spalte1: '2. Anschlussbegehren', spalte2: 'Daten an Netzbetreiber', spalte3: 'Vollständige Unterlagen und Eingang dokumentieren' },
      { spalte1: '3. Netzprüfung', spalte2: 'Netzverknüpfungspunkt', spalte3: 'Rückmeldung, mögliche Auflagen und Kosten prüfen' },
      { spalte1: '4. Ausführung', spalte2: 'Montage und Elektroinstallation', spalte3: 'Freigegebenes Anschluss- und Messkonzept umsetzen' },
      { spalte1: '5. Inbetriebsetzung', spalte2: 'Prüfprotokolle, Zähler, Registrierung', spalte3: 'Anforderungen des VNB und Marktstammdatenregister erfüllen' },
    ]),
    textBlock(
      h('h2', t('Was passiert, wenn der Netzbetreiber eine andere Anschlussstelle nennt?')),
      p(t('Die Wahl des technisch und wirtschaftlich geeigneten Netzverknüpfungspunkts richtet sich nach den EEG-Vorgaben und den örtlichen Bedingungen. Der vom Netzbetreiber vorgeschlagene Punkt kann bauliche oder wirtschaftliche Auswirkungen haben: Leitungslänge, Tiefbau, Schutzkonzept oder eine Trafostation sind dann neu zu bewerten.')),
      p(t('Eine unklare oder späte Rückmeldung sollte sachlich dokumentiert und mit dem zuständigen Netzbetreiber geklärt werden. Für Konflikte kommen je nach Fall Beratung, Clearingstelle und rechtliche Wege in Betracht; eine verbindliche Einzelfallbewertung ist keine Aufgabe eines allgemeinen Ratgeberartikels.')),
    ),
    textBlock(
      h('h2', t('Beispiel aus der Planung: PV auf dem Gewerbedach')),
      p(t('Angenommen, ein Betrieb plant 180 kWp Module auf einer Halle. Ob die gesamte Leistung am bestehenden Niederspannungsanschluss eingespeist werden kann, hängt nicht nur vom Dach ab. Relevante Größen sind insbesondere Wechselrichter-Scheinleistung, mögliche Wirkleistungsbegrenzung, Bestandserzeugung, Netzstruktur und Anschlusskapazität.')),
      p(t('Deshalb würden wir vor einer verbindlichen Wirtschaftlichkeitsrechnung die Netzanschlussfrage klären. Eine ansonsten günstige PV-Investition kann sich deutlich verändern, wenn zusätzliche Anschlusskosten oder ein Ausbau erforderlich werden.')),
    ),
    tippBlock('Frühzeitig beantragen statt auf den letzten Moment',
      p(t('Schon bei der Vorplanung die zuständige Netzgesellschaft ermitteln, Unterlagen konsistent aufbereiten und die Rückmeldung dokumentieren. Der Installationsbetrieb kann den Austausch übernehmen; der Anlagenbetreiber sollte trotzdem wissen, welcher Anschlusspunkt und welche Einspeiseleistung bestätigt wurden.')),
    ),
    textBlock(
      h('h2', t('Netzverträglichkeitsprüfung, Inbetriebnahme und Marktstammdatenregister unterscheiden')),
      p(t('Die Netzprüfung beantwortet, ob und unter welchen Bedingungen die Einspeisung möglich ist. Die elektrische Inbetriebsetzung und der Zählerbetrieb folgen weiteren technischen und organisatorischen Anforderungen. Die Registrierung im Marktstammdatenregister ist ein eigener Schritt und ersetzt weder Anschlussbegehren noch fachgerechte Inbetriebsetzung.')),
      p(t('Mehr dazu in unserem Ratgeber '), link('PV-Anlage anmelden und Marktstammdatenregister', '/solaranlage/pv-anlage-anmelden-marktstammdatenregister'), t('.')),
    ),
    textBlock(
      h('h2', t('Quellen und rechtliche Grundlagen')),
      p(link('§ 8 EEG – Netzanschluss', 'https://www.gesetze-im-internet.de/eeg_2014/__8.html', {newTab:true}), t(' · '),
        link('Bundesnetzagentur – FAQ Netzanschluss EE-Anlagen', 'https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/Netzanschluss/faq_table1.html', {newTab:true}), t(' · '),
        link('Clearingstelle EEG/KWKG – Netzanschlussbegehren', 'https://www.clearingstelle-eeg-kwkg.de/haeufige-rechtsfrage/135', {newTab:true}), t('.')),
      p(t('Die Rechtslage und Netzbetreiberverfahren können sich ändern. Der Beitrag beschreibt den Stand November 2026, keine individuelle Netzanschlusszusage.')),
    ),
    textBlock(h('h2',t('Fazit')),p(t('Ein gutes PV-Projekt beginnt nicht erst bei der Modulmontage. Der Netzanschluss gehört früh in die Planung. Wir trennen Dachpotenzial, technisch zulässige Einspeisung und wirtschaftlich tragfähige Anschlusslösung – damit aus einer schönen PV-Prognose auch eine umsetzbare Anlage wird.'))),
    ctaBlock({titel:'Netzanschluss und PV-Vorhaben gemeinsam prüfen',text:'Du planst PV auf einem Wohn-, Landwirtschafts- oder Gewerbedach am Niederrhein? Wir betrachten Dach, elektrische Einbindung und Anschlussprozess zusammen.',buttonText:'PV-Projekt anfragen',buttonLink:'/kontakt'}),
  ],
  faq: [
    faqItem('Was ist eine Netzverträglichkeitsprüfung?', 'Der Netzbetreiber bewertet, ob die vorgesehene PV-Einspeisung am Netzverknüpfungspunkt technisch möglich ist und ob Maßnahmen notwendig sind.'),
    faqItem('Muss die PV-Anlage acht Wochen vor Montage angemeldet werden?', 'Nein. Acht Wochen sind grundsätzlich die gesetzliche Höchstfrist für bestimmte Rückmeldungen des Netzbetreibers nach Eingang der erforderlichen Informationen, keine allgemeine Vorlaufpflicht vor Montage.'),
    faqItem('Wer stellt das Netzanschlussbegehren?', 'Der Anschlussbegehrende oder ein Bevollmächtigter. In der Praxis kümmert sich häufig der beauftragte Installationsbetrieb darum.'),
    faqItem('Darf ich ohne Antwort des Netzbetreibers anschließen?', 'Nur in eng definierten gesetzlichen Sonderkonstellationen und unter allen weiteren technischen und rechtlichen Voraussetzungen. Eine pauschale Anschlussfreigabe ergibt sich aus Schweigen nicht.'),
    faqItem('Ist die MaStR-Registrierung dasselbe wie die Netzanschlussanmeldung?', 'Nein. Netzanschlussprozess und Registrierung im Marktstammdatenregister sind verschiedene Pflichten.'),
    faqItem('Was passiert bei einem erforderlichen Netzausbau?', 'Anschlussweg, zusätzliche technische Maßnahmen, Kosten und Projektzeitplan müssen konkret geklärt werden.'),
  ],
}
await upsertRatgeberArticle(article)
