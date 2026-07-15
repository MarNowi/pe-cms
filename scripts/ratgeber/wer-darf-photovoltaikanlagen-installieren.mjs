// scripts/articles/wer-darf-photovoltaikanlagen-installieren.mjs

import { upsertRatgeberArticle } from './_articleFactory.mjs'
import {
  t,
  bold,
  link,
  p,
  h,
  ul,
  ol,
  summaryPoint,
  textBlock,
  hinweisBlock,
  tippBlock,
  tabelleBlock,
  ctaBlock,
  faqItem,
  seo,
} from './_helpers.mjs'
import {
  mediaIdFromEnv,
  optionalBildBlock,
  compactBlocks,
  gutZuWissen,
  praxiswissen,
  checkpunkt,
  rechtsHinweis,
} from './_editorial.mjs'

const media = {
  hero: mediaIdFromEnv('RATGEBER_PV_HANDWERKSROLLE_HERO_ID'),
  beratung: mediaIdFromEnv('RATGEBER_PV_HANDWERKSROLLE_BERATUNG_ID'),
  dach: mediaIdFromEnv('RATGEBER_PV_HANDWERKSROLLE_DACH_ID'),
  elektro: mediaIdFromEnv('RATGEBER_PV_HANDWERKSROLLE_ELEKTRO_ID'),
  detail: mediaIdFromEnv('RATGEBER_PV_HANDWERKSROLLE_DETAIL_ID'),
  kontrolle: mediaIdFromEnv('RATGEBER_PV_HANDWERKSROLLE_KONTROLLE_ID'),
}

const article = {
  titel: 'Wer darf Photovoltaikanlagen installieren?',
  slug: 'wer-darf-photovoltaikanlagen-installieren',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'Wer darf eine Photovoltaikanlage planen, montieren, anschließen und in Betrieb nehmen? Wir erklären das Urteil des OLG Koblenz, die Rolle von Dachdecker- und Elektrotechnikerhandwerk und woran Hausbesitzer einen qualifizierten Fachbetrieb erkennen.',
  lesezeit: 14,
  titelbild: media.hero,

  seo: seo(
    'Wer darf Photovoltaikanlagen installieren? | OLG-Urteil erklärt | PEAK.Energy',
    'Wer darf PV-Anlagen installieren? Verständliche Einordnung zu Handwerksrolle, Dachdecker- und Elektrotechnikerhandwerk, Komplettanbietern und dem Urteil des OLG Koblenz.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Eine Photovoltaikanlage ist kein gewöhnliches Produkt. Sie verbindet '),
      bold('Arbeiten am Dach mit sicherheitsrelevanter Elektrotechnik'),
      t('.'),
    ),
    summaryPoint(
      t('Das OLG Koblenz hat entschieden, dass Planung, Installation, Inbetriebnahme und Wartung von PV-Anlagen grundsätzlich '),
      bold('wesentliche Tätigkeiten zulassungspflichtiger Handwerke'),
      t(' sein können.'),
    ),
    summaryPoint(
      t('Wer solche Leistungen selbstständig anbietet und ausführt, benötigt grundsätzlich die passende '),
      bold('Eintragung in die Handwerksrolle'),
      t('.'),
    ),
    summaryPoint(
      t('Nachunternehmer sind nicht pauschal ausgeschlossen. Entscheidend sind '),
      bold('Qualifikation, klare Verantwortlichkeiten und eine fachgerechte Organisation'),
      t('.'),
    ),
    summaryPoint(
      t('Hausbesitzer sollten nicht nur Komponenten und Preis vergleichen, sondern auch prüfen, '),
      bold('wer Dach, Elektrik, Prüfung, Dokumentation und Service tatsächlich verantwortet'),
      t('.'),
    ),
  ],

  inhalt: compactBlocks(
    rechtsHinweis(),

    textBlock(
      h('h2', t('Warum diese Frage heute wichtiger ist denn je')),
      p(
        t('Wer heute eine Photovoltaikanlage kaufen möchte, findet regionale Meisterbetriebe, bundesweite Komplettanbieter, Vermittlungsplattformen und reine Vertriebsunternehmen. Viele Angebote sehen auf den ersten Blick ähnlich aus: Module, Wechselrichter, Speicher und ein Gesamtpreis.'),
      ),
      p(
        t('Der entscheidende Unterschied liegt jedoch häufig nicht im Datenblatt. Er liegt in der Frage, '),
        bold('wer die Anlage plant, montiert, elektrisch anschließt, prüft und langfristig verantwortet'),
        t('.'),
      ),
      p(
        t('Eine PV-Anlage wird dauerhaft mit dem Gebäude verbunden. Sie muss Wind, Schnee, Feuchtigkeit und Temperaturwechsel aushalten, sicher in die elektrische Anlage eingebunden werden und über Jahrzehnte zuverlässig funktionieren. Deshalb ist die Installation keine bloße Produktlieferung, sondern eine handwerkliche Gesamtleistung.'),
      ),
    ),

    optionalBildBlock({
      bild: media.beratung,
      beschriftung:
        'Eine fachgerechte PV-Anlage beginnt mit der Prüfung des Gebäudes und einer nachvollziehbaren Beratung – nicht mit dem Verkauf eines Standardpakets.',
    }),

    checkpunkt(
      'Individuelle Planung erkennen',
      t('Ein seriöser Betrieb stellt zunächst Fragen zu Dach, Elektroanlage, Verbrauch, Erweiterungswünschen und Gebäudesituation. Eine schnelle Standardlösung ohne Prüfung ist nicht automatisch falsch, sollte aber kritisch hinterfragt werden.'),
    ),

    textBlock(
      h('h2', t('Das Urteil des OLG Koblenz einfach erklärt')),
      p(
        t('Der 9. Zivilsenat des Oberlandesgerichts Koblenz hatte über ein Unternehmen zu entscheiden, das auf seiner Internetseite Photovoltaikanlagen mit eigenem Team von der Planung über Installation und Inbetriebnahme bis zur Wartung anbot. Das Unternehmen war weder für das Dachdecker- noch für das Elektrotechnikerhandwerk in die Handwerksrolle eingetragen.'),
      ),
      p(
        t('Das Gericht bestätigte die Vorinstanz. Nach seiner Auffassung gehören Planung, Installation, Inbetriebnahme und Wartung von Photovoltaikanlagen, insbesondere auf Dächern, zum Kernbereich sowohl des Dachdecker- als auch des Elektrotechnikerhandwerks.'),
      ),
      p(
        t('Wer solche wesentlichen Tätigkeiten selbstständig anbietet und ausführt, muss grundsätzlich in die Handwerksrolle eingetragen sein. Das Gericht bewertete die entsprechende Werbung des nicht eingetragenen Unternehmens daher als unlautere geschäftliche Handlung.'),
      ),
      p(
        t('Die offizielle Mitteilung nennt das Aktenzeichen '),
        bold('9 U 1015/25'),
        t(' und bezeichnet die Entscheidung als erste obergerichtliche Entscheidung zu dieser konkreten Frage. '),
        link(
          'Zur Pressemitteilung des OLG Koblenz',
          'https://olgko.justiz.rlp.de/presse-aktuelles/detail/installation-von-photovoltaikanlagen-grundsaetzlich-nur-mit-eintragung-in-die-handwerksrolle',
          { newTab: true },
        ),
        t('.'),
      ),
    ),

    gutZuWissen(
      'Was das Urteil nicht sagt',
      t('Es bedeutet nicht, dass nur eine bestimmte Unternehmensform PV-Anlagen verkaufen darf. Maßgeblich sind die tatsächlich angebotenen und ausgeführten Tätigkeiten sowie die Frage, ob dafür die handwerksrechtlichen Voraussetzungen erfüllt sind.'),
    ),

    textBlock(
      h('h2', t('Warum Photovoltaik mehrere Handwerke verbindet')),
      p(
        t('Eine Photovoltaikanlage besteht sichtbar aus Modulen. Das technisch und handwerklich Entscheidende liegt jedoch häufig darunter, daneben oder im Gebäude.'),
      ),
      p(t('Auf dem Dach müssen unter anderem beurteilt werden:')),
      ul(
        p(t('Zustand und Eignung der Dacheindeckung')),
        p(t('Tragfähigkeit und Lastabtragung')),
        p(t('Wind- und Schneelasten')),
        p(t('Befestigung der Unterkonstruktion')),
        p(t('Regensicherheit und Schutz der Dachhaut')),
        p(t('Leitungsführung und Wartungswege')),
      ),
      p(t('Auf der elektrischen Seite geht es unter anderem um:')),
      ul(
        p(t('DC- und AC-Leitungsführung')),
        p(t('Wechselrichter und Stromspeicher')),
        p(t('Schutz- und Schaltgeräte')),
        p(t('Potentialausgleich und Überspannungsschutz')),
        p(t('Zählerschrank und Messkonzept')),
        p(t('Prüfung, Dokumentation und Netzanschluss')),
      ),
      p(
        t('Beide Bereiche greifen ineinander. Eine gute Anlage entsteht deshalb nicht durch die isolierte Betrachtung einzelner Komponenten, sondern durch eine abgestimmte Gesamtplanung.'),
      ),
    ),

    optionalBildBlock({
      bild: media.dach,
      beschriftung:
        'Die Dachmontage betrifft Dacheindeckung, Befestigung, Lastabtragung und dauerhafte Regensicherheit.',
    }),

    textBlock(
      h('h2', t('Welche Aufgaben zum Dachdeckerhandwerk gehören')),
      p(
        t('Die Montage auf einem Dach ist mehr als das Befestigen von Modulen. Zunächst muss geprüft werden, ob die vorhandene Dachfläche für die geplante Anlage geeignet ist und wie Lasten dauerhaft in die Konstruktion eingeleitet werden können.'),
      ),
      p(
        t('Bei geneigten Dächern werden Dachziegel oder Dachsteine aufgenommen, Befestigungspunkte hergestellt und die Dacheindeckung anschließend wieder fachgerecht geschlossen. Bei Flachdächern spielen Abdichtungsschutz, Auflast, Windsog, Entwässerung und Bewegungen der Konstruktion eine zentrale Rolle.'),
      ),
      p(
        t('Fehler bleiben oft zunächst unsichtbar. Undichte Stellen, gebrochene Ziegel, zu hohe Punktlasten oder ungeeignete Befestigungen können sich erst nach mehreren Jahren oder bei extremen Wetterlagen zeigen.'),
      ),
    ),

    praxiswissen(
      'Qualität zeigt sich oft erst später',
      t('Eine sauber ausgeführte Unterkonstruktion fällt dem Kunden am Tag der Montage kaum auf. Ihr Wert zeigt sich über viele Jahre daran, dass das Dach dicht bleibt, die Anlage sicher befestigt ist und Wartungsarbeiten ohne unnötige Folgeschäden möglich sind.'),
    ),

    optionalBildBlock({
      bild: media.elektro,
      beschriftung:
        'Zur Elektroinstallation gehören Schutzkonzept, Zählerschrank, Messungen, Inbetriebnahme und vollständige Dokumentation.',
    }),

    textBlock(
      h('h2', t('Welche Aufgaben zum Elektrotechnikerhandwerk gehören')),
      p(
        t('Auch die elektrische Seite darf nicht auf das Zusammenstecken vorkonfektionierter Stecker reduziert werden. Eine PV-Anlage ist eine Erzeugungsanlage, die mit der Hausinstallation und dem öffentlichen Netz zusammenarbeitet.'),
      ),
      p(
        t('Der Elektrofachbetrieb bewertet die vorhandene Installation, plant Schutzmaßnahmen, dimensioniert Leitungen und Schaltgeräte, bindet Wechselrichter und Speicher ein und führt die erforderlichen Messungen durch.'),
      ),
      p(
        t('Für Arbeiten am Netzanschluss gelten zusätzlich die technischen Anschlussbedingungen und Prozesse des zuständigen Netzbetreibers. In der Praxis spielt daher neben der Handwerksrolle häufig auch das Installateurverzeichnis des Netzbetreibers eine wichtige Rolle.'),
      ),
    ),

    tippBlock(
      'Dokumentation vor der Schlusszahlung prüfen',
      p(
        t('Lassen Sie sich spätestens zur Inbetriebnahme die wesentlichen Unterlagen übergeben: Datenblätter, Schalt- oder Stromlaufplan, Prüf- und Messprotokolle, Garantien, Bedienungsunterlagen sowie Angaben zur Anmeldung beim Netzbetreiber.'),
      ),
    ),

    textBlock(
      h('h2', t('Was die Handwerksrolle bedeutet')),
      p(
        t('Die Handwerksrolle ist das Verzeichnis der Betriebe, die ein zulassungspflichtiges Handwerk selbstständig ausüben dürfen. Grundlage ist die Handwerksordnung.'),
      ),
      p(
        t('Die Eintragung setzt grundsätzlich voraus, dass die fachlichen und persönlichen Voraussetzungen erfüllt sind. Häufig geschieht das über einen Meistertitel, möglich sind je nach Fall aber auch andere gesetzlich vorgesehene Eintragungswege.'),
      ),
      p(
        t('Die Eintragung ist kein pauschales Versprechen, dass jede einzelne Arbeit fehlerfrei ausgeführt wird. Sie stellt aber sicher, dass ein Betrieb die gesetzlichen Voraussetzungen für die selbstständige Ausübung des jeweiligen zulassungspflichtigen Handwerks erfüllt.'),
      ),
    ),

    hinweisBlock(
      'Begriff erklärt: Handwerksrolle',
      p(
        t('Die Handwerksrolle ist das von der zuständigen Handwerkskammer geführte Verzeichnis der Betriebe, die ein zulassungspflichtiges Handwerk ausüben dürfen. Der Begriff eignet sich zugleich als eigener Eintrag für das '),
        link('PEAK.Energy Energielexikon', '/energielexikon'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Dürfen Komplettanbieter mit Nachunternehmern arbeiten?')),
      p(
        t('Ja. Die Zusammenarbeit mit qualifizierten Partner- oder Nachunternehmen ist im Bau- und Ausbauhandwerk üblich und nicht grundsätzlich problematisch.'),
      ),
      p(
        t('Entscheidend ist, dass die jeweiligen Arbeiten durch fachlich geeignete und berechtigte Betriebe ausgeführt werden und die Verantwortlichkeiten klar geregelt sind.'),
      ),
      p(t('Für Kunden sollte transparent sein:')),
      ul(
        p(t('Wer ist mein Vertragspartner?')),
        p(t('Welcher Betrieb führt die Dacharbeiten aus?')),
        p(t('Welcher Betrieb übernimmt die Elektroinstallation?')),
        p(t('Wer prüft und dokumentiert die Anlage?')),
        p(t('Wer bearbeitet spätere Gewährleistungs- oder Servicefälle?')),
      ),
      p(
        t('Problematisch wird es, wenn eine vollständige handwerkliche Leistung beworben wird, die tatsächliche Ausführung aber intransparent bleibt und sich im Problemfall niemand für das Gesamtergebnis verantwortlich fühlt.'),
      ),
    ),

    tabelleBlock('Wer übernimmt bei einer PV-Anlage welche Aufgaben?', [
      {
        spalte1: 'Dachdeckerfachbetrieb',
        spalte2: 'Dachprüfung, Befestigung, Dacheindeckung, Abdichtungsschutz, Lastabtragung',
        spalte3: 'Verantwortet die fachgerechte Einbindung der Anlage in das Dach',
      },
      {
        spalte1: 'Elektrofachbetrieb',
        spalte2: 'Wechselrichter, Speicher, Zählerschrank, Schutzkonzept, Messung und Prüfung',
        spalte3: 'Verantwortet die sichere elektrische Einbindung und Inbetriebnahme',
      },
      {
        spalte1: 'Komplettanbieter',
        spalte2: 'Vertrag, Koordination, Gesamtplanung und Organisation der beteiligten Gewerke',
        spalte3: 'Muss transparent machen, wer die Facharbeiten ausführt und verantwortet',
      },
      {
        spalte1: 'Netzbetreiber',
        spalte2: 'Vorgaben zum Netzanschluss, Prüfung der Anmeldung und gegebenenfalls Zählerprozesse',
        spalte3: 'Ist nicht für die handwerkliche Qualität der Gesamtanlage verantwortlich',
      },
      {
        spalte1: 'Hersteller',
        spalte2: 'Produktunterlagen, Produktgarantien und technische Vorgaben',
        spalte3: 'Die Produktgarantie ersetzt nicht die Verantwortung des Installationsbetriebs',
      },
    ]),

    optionalBildBlock({
      bild: media.detail,
      beschriftung:
        'Viele Qualitätsunterschiede liegen im Detail: Befestigung, Leitungsführung, Schutztechnik und Dokumentation.',
    }),

    textBlock(
      h('h2', t('Woran Hausbesitzer einen qualifizierten Fachbetrieb erkennen')),
      p(
        t('Ein guter Fachbetrieb muss nicht der größte oder bekannteste Anbieter sein. Er sollte jedoch verständlich erklären können, wie er arbeitet, welche Qualifikationen vorhanden sind und wer die Verantwortung übernimmt.'),
      ),
      p(t('Positive Merkmale sind unter anderem:')),
      ul(
        p(t('benannte fachlich verantwortliche Personen')),
        p(t('nachvollziehbare Angaben zu Handwerksrolleneintragungen')),
        p(t('Prüfung von Dach und Elektroinstallation vor der endgültigen Planung')),
        p(t('klare Trennung und Benennung von Eigen- und Fremdleistungen')),
        p(t('verständliche technische Auslegung statt reiner Verkaufsargumente')),
        p(t('vollständige Prüf- und Anlagendokumentation')),
        p(t('erreichbare Ansprechpartner nach der Inbetriebnahme')),
        p(t('realistische Aussagen zu Ertrag, Wirtschaftlichkeit und Erweiterbarkeit')),
      ),
    ),

    checkpunkt(
      'Die wichtigste Frage im Beratungsgespräch',
      t('Fragen Sie: „Warum empfehlen Sie genau diese Lösung für mein Gebäude?“ Ein guter Berater kann Dimensionierung, Komponenten, Leitungswege, Speichergröße und spätere Erweiterbarkeit nachvollziehbar erklären.'),
    ),

    textBlock(
      h('h2', t('Zehn Fragen vor der Beauftragung')),
      ol(
        p(t('Wer führt die Dacharbeiten tatsächlich aus?')),
        p(t('Wer übernimmt die Elektroinstallation und die Prüfung?')),
        p(t('Für welche Handwerke bestehen Eintragungen in die Handwerksrolle?')),
        p(t('Wer ist mein alleiniger oder koordinierender Vertragspartner?')),
        p(t('Wird mein Dach vor der endgültigen Auslegung geprüft?')),
        p(t('Wird der vorhandene Zählerschrank fachlich bewertet?')),
        p(t('Welche Mess- und Prüfprotokolle erhalte ich?')),
        p(t('Wer übernimmt Anmeldung und Abstimmung mit dem Netzbetreiber?')),
        p(t('Wie ist der Service nach der Inbetriebnahme organisiert?')),
        p(t('Kann das System später um Speicher, Wallbox, Wärmepumpe oder Energiemanagement erweitert werden?')),
      ),
    ),

    optionalBildBlock({
      bild: media.kontrolle,
      beschriftung:
        'Prüfung und Dokumentation gehören zur Installation. Eine Anlage ist nicht fertig, nur weil sie bereits Strom erzeugt.',
    }),

    textBlock(
      h('h2', t('Typische Missverständnisse')),
      p(bold('„Jeder kann doch Module aufs Dach schrauben.“')),
      p(
        t('Einzelne Handgriffe mögen einfach aussehen. Die fachgerechte Gesamtleistung umfasst jedoch Dachbeurteilung, sichere Befestigung, elektrische Schutzmaßnahmen, Prüfung, Dokumentation und Netzanschluss.'),
      ),
      p(bold('„Es kommt hauptsächlich auf gute Module an.“')),
      p(
        t('Hochwertige Komponenten sind sinnvoll, können aber eine fehlerhafte Planung oder Montage nicht ausgleichen. Die Qualität einer Anlage ergibt sich aus dem Zusammenspiel von Produkt, Planung und Ausführung.'),
      ),
      p(bold('„Ein Komplettanbieter muss alles mit eigenen Mitarbeitern machen.“')),
      p(
        t('Nein. Fachgerechte Kooperationen sind möglich. Entscheidend sind qualifizierte Partner, klare Zuständigkeiten und eine verlässliche Verantwortung gegenüber dem Kunden.'),
      ),
      p(bold('„Die Eintragung in die Handwerksrolle ist nur Bürokratie.“')),
      p(
        t('Die Handwerksrolle bildet die gesetzliche Zugangsvoraussetzung für die selbstständige Ausübung zulassungspflichtiger Handwerke ab. Bei sicherheitsrelevanten Arbeiten ist sie ein wichtiges Orientierungsmerkmal.'),
      ),
    ),

    praxiswissen(
      'Nicht nur den Preis vergleichen',
      t('Zwei Angebote mit ähnlichen Komponenten können sich bei Dachprüfung, Schutzkonzept, Zählerschrankarbeiten, Dokumentation, Service und Erweiterbarkeit erheblich unterscheiden. Der Endpreis allein bildet diese Unterschiede selten vollständig ab.'),
    ),

    textBlock(
      h('h2', t('Unser Blick als Dachdecker- und Elektromeisterbetrieb')),
      p(
        t('Wir begrüßen die grundsätzliche Richtung der Entscheidung. Nicht, weil Photovoltaik nur von einer bestimmten Art Unternehmen angeboten werden sollte, sondern weil handwerkliche Verantwortung sichtbar bleiben muss.'),
      ),
      p(
        t('Bei PEAK.Energy betrachten wir das Dach, die elektrische Installation, den Speicher und das Energiemanagement als ein zusammenhängendes System. Eine Anlage soll nicht nur am Tag der Inbetriebnahme funktionieren, sondern auch Jahre später sicher, verständlich und erweiterbar bleiben.'),
      ),
      p(
        t('Gute Zusammenarbeit mit spezialisierten Partnern kann sinnvoll sein. Für den Kunden darf daraus jedoch kein Verantwortungs-Pingpong entstehen. Wer die Gesamtleistung verkauft, muss sie fachlich beherrschen oder transparent und verlässlich organisieren.'),
      ),
      p(
        bold('Photovoltaik ist Handwerk. '),
        t('Und Handwerk bedeutet, Verantwortung für das Ergebnis zu übernehmen.'),
      ),
    ),

    textBlock(
      h('h2', t('Fazit: Qualifikation ist genauso wichtig wie die Technik')),
      p(
        t('Das Urteil des OLG Koblenz schafft Orientierung in einem Markt, in dem Vertriebsmodell, tatsächliche Ausführung und fachliche Verantwortung nicht immer leicht auseinanderzuhalten sind.'),
      ),
      p(
        t('Für Hausbesitzer ist die wichtigste Erkenntnis einfach: Vergleichen Sie nicht nur Module, Speicher und Preise. Prüfen Sie auch, wer die Arbeiten ausführt, welche Qualifikationen vorhanden sind, wie die Verantwortlichkeiten geregelt sind und wer nach der Inbetriebnahme erreichbar bleibt.'),
      ),
      p(
        t('Eine Photovoltaikanlage kauft man an einem Tag. Mit der Qualität der Planung und Ausführung lebt das Gebäude über Jahrzehnte.'),
      ),
    ),

    ctaBlock({
      titel: 'Photovoltaik mit klarer Verantwortung planen',
      text:
        'Du möchtest eine Photovoltaikanlage, bei der Dach, Elektroinstallation, Speicher und Energiemanagement gemeinsam betrachtet werden? Wir beraten ehrlich, prüfen die Gebäudesituation und planen ein System, das langfristig zu dir passt.',
      buttonText: 'Beratung durch den Meisterbetrieb',
      buttonLink: '/kontakt',
    }),
  ),

  faq: [
    faqItem(
      'Wer darf eine Photovoltaikanlage installieren?',
      'Wer wesentliche Tätigkeiten eines zulassungspflichtigen Handwerks selbstständig anbietet und ausführt, benötigt grundsätzlich die passende Eintragung in die Handwerksrolle. Bei PV-Dachanlagen sind insbesondere das Dachdecker- und das Elektrotechnikerhandwerk betroffen. Entscheidend sind die konkret angebotenen und ausgeführten Leistungen.',
    ),
    faqItem(
      'Braucht ein PV-Unternehmen zwingend einen Meister?',
      'Für die Eintragung in die Handwerksrolle ist regelmäßig eine Meisterqualifikation oder eine andere gesetzlich anerkannte Eintragungsvoraussetzung erforderlich. Nicht jede Tätigkeit rund um den Verkauf von PV-Komponenten ist automatisch meisterpflichtig; maßgeblich ist die selbstständige Ausübung wesentlicher Tätigkeiten eines zulassungspflichtigen Handwerks.',
    ),
    faqItem(
      'Was hat das OLG Koblenz entschieden?',
      'Das OLG Koblenz bestätigte, dass Planung, Installation, Inbetriebnahme und Wartung von Photovoltaikanlagen, insbesondere auf Dächern, zum Kernbereich des Dachdecker- und Elektrotechnikerhandwerks gehören können. Wer solche Tätigkeiten selbstständig anbietet und ausführt, muss grundsätzlich in die Handwerksrolle eingetragen sein. Aktenzeichen: 9 U 1015/25.',
    ),
    faqItem(
      'Dürfen Komplettanbieter Nachunternehmer einsetzen?',
      'Ja. Entscheidend ist, dass die jeweiligen Arbeiten durch qualifizierte und berechtigte Fachbetriebe ausgeführt werden. Für Kunden müssen Zuständigkeiten, Prüfung, Dokumentation, Gewährleistung und Service transparent geregelt sein.',
    ),
    faqItem(
      'Wer darf die Module auf dem Dach montieren?',
      'Die rechtliche Einordnung hängt vom konkreten Arbeitsumfang ab. Werden Befestigungssysteme in die Dachkonstruktion eingebunden, Dacheindeckungen bearbeitet oder wesentliche Dacharbeiten ausgeführt, sind diese Tätigkeiten regelmäßig dem Dachdeckerhandwerk zuzuordnen.',
    ),
    faqItem(
      'Wer darf eine PV-Anlage elektrisch anschließen?',
      'Elektrische Installation, Schutzmaßnahmen, Prüfung und Inbetriebnahme gehören in die Hände eines entsprechend qualifizierten Elektrofachbetriebs. Für den Netzanschluss gelten zusätzlich die Vorgaben des zuständigen Netzbetreibers.',
    ),
    faqItem(
      'Was ist die Handwerksrolle?',
      'Die Handwerksrolle ist das Verzeichnis der Betriebe, die ein zulassungspflichtiges Handwerk selbstständig ausüben dürfen. Sie wird von der zuständigen Handwerkskammer geführt.',
    ),
    faqItem(
      'Wie prüfe ich die Qualifikation eines PV-Anbieters?',
      'Fragen Sie nach den ausführenden Betrieben, den fachlich verantwortlichen Personen und den Eintragungen in die Handwerksrolle. Lassen Sie sich außerdem erklären, wer Dacharbeiten, Elektroinstallation, Prüfung, Dokumentation und späteren Service übernimmt.',
    ),
    faqItem(
      'Ist ein günstiges PV-Angebot automatisch unseriös?',
      'Nein. Ein günstiger Preis ist kein Beweis für mangelnde Qualität. Wichtig ist, ob alle erforderlichen Leistungen enthalten sind, qualifizierte Betriebe eingesetzt werden und keine notwendigen Arbeiten an Dach, Zählerschrank, Schutztechnik oder Dokumentation fehlen.',
    ),
    faqItem(
      'Welche Unterlagen sollte ich nach der Installation erhalten?',
      'Dazu gehören je nach Anlage insbesondere technische Datenblätter, Schalt- oder Stromlaufpläne, Mess- und Prüfprotokolle, Bedienungsunterlagen, Garantieinformationen sowie Nachweise zur Anmeldung und Inbetriebnahme.',
    ),
  ],
}

await upsertRatgeberArticle(article)
