import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { t, bold, link, p, h, ul, summaryPoint, textBlock, hinweisBlock, tippBlock, tabelleBlock, ctaBlock, faqItem, seo } from './_helpers.mjs'

const article = {
  titel: 'PV-Verkabelung richtig auslegen: Querschnitt, Spannungsfall, Steckverbinder und Sicherheit',
  slug: 'pv-verkabelung-leitungsquerschnitt-spannungsfall',
  kategorie: 'solaranlage',
  cluster: 'pv-ertrag',
  status: 'entwurf',
  lesezeit: 12,
  teaser: 'Reichen 4 mm² für einen PV-String? Die Antwort hängt von Strom, Leitungslänge, Verlegeart, Temperatur und Leitungstyp ab. Wir zeigen die Spannungsfall-Rechnung und erklären, warum passende Steckverbinder und geprüfte Altleitungen wichtiger sind als eine pauschale Querschnittsregel.',
  seo: seo('PV-Kabel: Querschnitt & Spannungsfall berechnen | PEAK.Energy', 'PV-Verkabelung fachgerecht auslegen: 4 oder 6 mm², DC-Spannungsfall, Strombelastbarkeit, H1Z2Z2-K, MC4-Steckverbinder und Sicherheitsprüfung.'),
  zusammenfassung: [
    summaryPoint(t('Bei PV-DC-Leitungen entscheiden '), bold('Strombelastbarkeit, Verlegeart, Temperatur, Spannungsfall und Sicherheit'), t(' gemeinsam über den passenden Querschnitt.')),
    summaryPoint(t('Der Spannungsfall lässt sich für einen zweipoligen Kupfer-Stromkreis überschlägig mit '), bold('ΔU = 2 × l × I × ρ / A'), t(' abschätzen; die Leitungslänge l ist dabei die einfache Strecke.')),
    summaryPoint(t('PV-Leitungen müssen für die Spannungen und Beanspruchungen geeignet sein; ein typischer Leitungstyp ist H1Z2Z2-K nach EN 50618.')),
    summaryPoint(t('„MC4-kompatibel“ ist kein ausreichender Sicherheitsnachweis für das Zusammenstecken unterschiedlicher Steckverbinderfabrikate.')),
    summaryPoint(t('Bei Altanlagen ist nicht nur der Querschnitt entscheidend: Zustand, Isolationsfestigkeit, Kennzeichnung und Steckverbindungen müssen fachgerecht geprüft werden.')),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Warum 4 mm² oder 6 mm² keine pauschale Antwort ist')),
      p(t('Ein 20 Meter langer PV-String mit 4 mm² kann elektrisch durchaus passend ausgelegt sein. Dieselbe Leitung kann in einem anderen System dennoch ungeeignet sein – etwa bei höherem Strom, erhöhter Temperatur, ungünstiger Verlegeart oder beschädigter Isolation.')),
      p(t('Wir unterscheiden deshalb drei Fragen: Hält die Leitung den Betriebs- und Fehlerbedingungen sicher stand? Bleibt der Spannungsfall wirtschaftlich sinnvoll? Sind Leitungsführung und Steckverbinder dauerhaft zuverlässig?')),
    ),
    textBlock(
      h('h2', t('Welche Daten brauche ich zur DC-Kabelauslegung?')),
      ul(
        p(t('Moduldaten und Stringkonfiguration: maximaler Betriebsstrom, Kurzschlussstrom und maximale Leerlaufspannung bei tiefster Auslegungstemperatur.')),
        p(t('Wechselrichterdaten, zulässige Eingangsspannungen und maximale Ströme je MPPT.')),
        p(t('Leitungstyp, Querschnitt, einfache Leitungslänge und tatsächliche Verlegeart.')),
        p(t('Umgebungstemperatur, Bündelung, Leitungsführung über Dach, in Rohren oder Dämmung.')),
        p(t('Schutzmaßnahmen, Überstromschutz falls erforderlich, Trenn- und Schaltgeräte und Herstellerfreigaben.')),
      ),
      p(t('Der Betriebsstrom einer Reihenschaltung ist nicht die Summe aller Modulströme. In einem String fließt im Wesentlichen derselbe Strom durch alle in Reihe geschalteten Module. Bei parallel geschalteten Strings sind die Summenströme dagegen zu berücksichtigen.')),
    ),
    textBlock(
      h('h2', t('Spannungsfall bei PV berechnen – Beispiel mit 20 Metern')),
      p(t('Für eine vereinfachte DC-Rechnung mit Kupfer gilt: '), bold('ΔU = 2 × l × I × ρ / A'), t('. Dabei ist l die einfache Entfernung zwischen Generator und Wechselrichter, I der Strom, A der Kupferquerschnitt und ρ der spezifische Leiterwiderstand bei der angesetzten Temperatur.')),
      p(t('Beispiel mit 20 m einfacher Strecke, 13 A Stringstrom und 4 mm² Kupfer. Mit einem vereinfachten Widerstandswert von 0,0178 Ω·mm²/m bei 20 °C ergibt sich:')),
      p(bold('ΔU = 2 × 20 × 13 × 0,0178 / 4 = 2,314 V')),
      p(t('Bei einer beispielhaften Stringbetriebsspannung von 350 V sind das '), bold('0,66 % Spannungsfall'), t('. Auf 6 mm² reduziert sich die Rechnung auf rund 1,54 V beziehungsweise 0,44 %.')),
      p(t('Das ist ausschließlich eine Spannungsfallrechnung unter vereinfachten Bedingungen, kein Nachweis der Strombelastbarkeit oder normgerechten Sicherheit. Bei wärmeren Leitern steigt der Widerstand. Der reale Betrieb erfordert Berechnung mit geeigneten Bemessungswerten und Prüfung der gesamten Installation.')),
    ),
    tabelleBlock('Spannungsfall-Beispiel: 20 m einfache Strecke, 13 A, 350 V', [
      {spalte1:'4 mm² Kupfer',spalte2:'2,31 V',spalte3:'ca. 0,66 % bei 20 °C (vereinfachte Rechnung)'},
      {spalte1:'6 mm² Kupfer',spalte2:'1,54 V',spalte3:'ca. 0,44 % bei 20 °C (vereinfachte Rechnung)'},
      {spalte1:'Entscheidung',spalte2:'nicht nur ΔU',spalte3:'Strombelastbarkeit, Verlegeart, Temperatur und Schutzmaßnahmen prüfen'},
    ]),
    textBlock(
      h('h2', t('Welche Leitung eignet sich für PV-DC?')),
      p(t('Auf der DC-Seite sind die Anforderungen an Isolation, Temperatur- und Wetterbeständigkeit sowie Spannungshöhe besonders wichtig. Die DIN EN 50618 beschreibt hierfür geeignete PV-Leitungen wie H1Z2Z2-K, die für die dauerhafte Nutzung unter anspruchsvollen Bedingungen ausgelegt sind.')),
      p(t('Dass eine Leitung zufällig 4 mm² hat oder geschützt verlegt ist, macht sie noch nicht automatisch zur geeigneten PV-Leitung. Der konkrete Typ und seine zulässige Anwendung müssen anhand der Kennzeichnung und der Herstellerdaten geprüft werden.')),
    ),
    textBlock(
      h('h2', t('Warum Steckverbinder wichtiger sind als ein halbes Prozent Verlust')),
      p(t('Ein zu hoher Übergangswiderstand an einer Steckverbindung kann lokale Erwärmung und im Fehlerfall gefährliche Lichtbögen verursachen. Die DKE weist ausdrücklich auf Risiken durch das Zusammenstecken von Steckverbindern unterschiedlicher Hersteller hin.')),
      p(t('Deshalb gelten bei uns keine pauschalen Aussagen wie „mechanisch passend ist elektrisch passend“. Steckverbinder müssen zur gleichen freigegebenen Produktfamilie gehören, fachgerecht mit geeignetem Werkzeug verarbeitet und nach Herstellervorgaben montiert werden.')),
      p(t('Beschädigte, gealterte oder unbekannte Steckverbindungen sind besonders bei Repowering-Projekten ein Grund für eine sorgfältige Bestandsaufnahme.')),
    ),
    hinweisBlock('DC-Steckverbindungen niemals unter Last trennen',
      p(t('PV-Strings können bei Lichteinfall auch dann gefährliche Gleichspannungen führen, wenn der Wechselrichter abgeschaltet ist. Steckverbindungen und Leitungen dürfen nur entsprechend den Sicherheits- und Abschaltvorgaben durch qualifizierte Elektrofachkräfte bearbeitet werden.')),
    ),
    textBlock(
      h('h2', t('Darf ich die 15 oder 20 Jahre alte PV-Leitung weiterverwenden?')),
      p(t('Das kommt auf die vorhandene Leitung an. Bei einer Modernisierung prüfen wir Typ, Dokumentation, Kennzeichnung, Alterung, Temperatur- und Umweltbeanspruchung, mechanische Schäden, Isolation und die elektrische Eignung für die neue Modulgeneration.')),
      p(t('Besonders kritisch ist es, wenn der alte Leitungstyp für die neue Systemspannung oder die vorgesehenen Schutzmaßnahmen nicht geeignet ist oder sich der Zustand nicht hinreichend sicher belegen lässt. Neue Steckverbinder allein heilen keine ungeeignete Leitung.')),
      p(t('Auch bei geschützter Verlegung muss eine nicht geeignete oder beschädigte Leitung ersetzt werden. Die Ersparnis einiger Meter Kabel rechtfertigt kein Sicherheitsrisiko.')),
    ),
    textBlock(
      h('h2', t('DC- und AC-Verkabelung nicht verwechseln')),
      p(t('Auf der DC-Seite beurteilen wir PV-Stringstrom, Stringspannung und die Leitungsführung zum Wechselrichter. Auf der AC-Seite bestimmen unter anderem Ausgangsleistung, Netzform, Absicherung, Verlegebedingungen, Spannungsfall und gegebenenfalls Selektivität den Querschnitt.')),
      p(t('Eine pauschale Aussage wie „für eine 10-kWp-Anlage reichen immer 6 mm²“ wäre auf beiden Seiten falsch. Querschnitte sind das Ergebnis einer Berechnung, nicht einer Verkaufsfaustregel.')),
    ),
    tippBlock('Bestandsleitungen bei Repowering systematisch prüfen',
      p(t('Vor einer Wiederverwendung dokumentieren wir den genauen Leitungstyp, prüfen die Eignung für die neue maximale Systemspannung und den vorgesehenen Strom, kontrollieren die Verlegebedingungen und führen die erforderlichen elektrischen Prüfungen durch. Bei Zweifeln wird erneuert.')),
    ),
    textBlock(
      h('h2', t('Welche Normen und Quellen sind entscheidend?')),
      p(t('Die Auslegung orientiert sich an den jeweils anwendbaren elektrotechnischen Regeln und Herstellerangaben. Dazu gehören insbesondere die Anforderungen für PV-Stromversorgungssysteme nach DIN VDE 0100-712, geeignete PV-Leitungen nach EN 50618 und geeignete DC-Steckverbinder.')),
      p(link('DKE – PV-Leitungen nach DIN EN 50618', 'https://www.dke.de/de/normen-standards/dokument?id=7063630&type=dke%7Cdokument', {newTab:true}), t(' · '),
        link('DKE – Kompatibilität von PV-DC-Steckverbindern', 'https://www.dke.de/de/arbeitsfelder/core-safety/normenhinweise/kompatibilitaet-von-steckverbindern', {newTab:true}), t(' · '),
        link('DKE – DIN VDE 0100-712', 'https://www.dke.de/de/normen-standards/dokument?id=7170959&type=dke%7Cdokument', {newTab:true}), t('.')),
      p(t('Weiterlesen: '), link('Typische Fehler bei Solaranlagen', '/solaranlage/typische-fehler-bei-solaranlagen'), t(' sowie '), link('PV-Verschattung und Stringdesign', '/solaranlage/pv-verschattung-leistungsoptimierer-stringdesign'), t('.')),
    ),
    textBlock(h('h2',t('Fazit')),p(t('Die richtige PV-Verkabelung ist eine Frage der gesamten Systemauslegung. Ein niedriger Spannungsfall ist gut – entscheidend bleibt aber, dass jede Leitung und Steckverbindung elektrisch und mechanisch sicher ist. Gerade alte PV-Leitungen beurteilen wir nach Nachweisen und Zustand, nicht nach dem Wunsch, Material einzusparen.'))),
    ctaBlock({titel:'PV-Elektrik und Bestandsanlage prüfen lassen',text:'Du planst eine neue PV-Anlage oder willst ältere Strings und Leitungen beim Repowering nutzen? Wir betrachten die technische Auslegung am Niederrhein fachgerecht.',buttonText:'PV-Projekt anfragen',buttonLink:'/kontakt'}),
  ],
  faq: [
    faqItem('Reichen 4 mm² für eine PV-Anlage?', 'Das kann passen, wenn Strombelastbarkeit, Verlegeart, Temperatur, Spannungsfall, Systemspannung und Schutzmaßnahmen nachgewiesen sind. Pauschal lässt sich die Frage nicht beantworten.'),
    faqItem('Wie berechnet man den Spannungsfall bei einem PV-String?', 'Vereinfacht bei Kupfer: ΔU = 2 × einfache Leitungslänge × Strom × spezifischer Widerstand / Querschnitt. Für die reale Auslegung sind Betriebsbedingungen und Leitererwärmung zu berücksichtigen.'),
    faqItem('Ist 6 mm² immer besser als 4 mm²?', '6 mm² reduziert bei gleicher Länge und gleichem Strom den ohmschen Spannungsfall, ersetzt aber keine vollständige Sicherheits- und Wirtschaftlichkeitsprüfung.'),
    faqItem('Kann man MC4-Stecker verschiedener Hersteller kombinieren?', 'Nicht allein wegen einer vermeintlichen mechanischen Kompatibilität. Die DKE warnt vor inkompatiblen PV-DC-Steckverbindungen und fordert die passende Produktfamilie und Herstellervorgaben.'),
    faqItem('Darf eine alte PV-Stringleitung wiederverwendet werden?', 'Nur nach fachgerechter Prüfung von Leitungstyp, Zustand, Spannungseignung, Strombelastbarkeit, Verlegung und den notwendigen elektrischen Prüfungen.'),
    faqItem('Ist der Spannungsfall der einzige Grund für einen größeren Querschnitt?', 'Nein. Strombelastbarkeit, Verlegeart, Temperatur, Überstrombedingungen und Schutzkonzept können maßgeblich sein.'),
  ],
}
await upsertRatgeberArticle(article)
