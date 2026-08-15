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
  titel: 'Zählerschrank für PV, Wärmepumpe und Smart Meter: Wann muss er wirklich erneuert werden?',
  slug: 'zaehlerschrank-pv-waermepumpe-smart-meter',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    '„Für die PV muss der Zählerschrank neu“ stimmt genauso wenig wie „Bestandsschutz bedeutet, dass alles bleiben darf“. Entscheidend sind Zustand, Zählerplatz, Dauerstrombelastung, Schutztechnik, Smart-Meter- und Steuertechnik sowie die konkrete Erweiterung. Wir zeigen, worauf es 2026 ankommt.',
  lesezeit: 16,

  seo: seo(
    'Zählerschrank für PV & Wärmepumpe: neu nötig? | PEAK.Energy',
    'Wann muss ein alter Zählerschrank bei PV, Wärmepumpe, Speicher oder Smart Meter erneuert werden? Anforderungen, Bestand, §14a und Westnetz erklärt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein älterer Zählerschrank muss bei einer PV-Anlage '),
      bold('nicht automatisch komplett ersetzt'),
      t(' werden. Vor einer Erweiterung muss aber geprüft werden, ob der vorhandene Zählerplatz technisch geeignet ist.'),
    ),
    summaryPoint(
      t('PV, Speicher, Wärmepumpe und Wallbox können '),
      bold('Dauerbetriebsanwendungen'),
      t(' sein. Damit ändern sich die Anforderungen an Belastbarkeit, Zählerplatz und Anschlusskomponenten.'),
    ),
    summaryPoint(
      t('Smart-Meter-Gateway und §-14a-Steuerung benötigen geeignete '),
      bold('Funktionsflächen, Spannungsversorgung und Kommunikationswege'),
      t('. Im Bestand sind je nach Aufbau auch Nachrüst- oder externe Lösungen möglich.'),
    ),
    summaryPoint(
      t('Der Netzbetreiber beziehungsweise Messstellenbetreiber bestimmt nicht nach Geschmack, ob ein Schrank neu muss. Grundlage sind technische Regeln, TAB und die '),
      bold('konkrete Änderung der elektrischen Anlage'),
      t('.'),
    ),
    summaryPoint(
      t('Eine gute Planung prüft den Zählerschrank '),
      bold('vor dem Angebot beziehungsweise spätestens vor der Ausführungsplanung'),
      t(' – nicht erst, wenn Monteure und Zählerwechseltermin vor der Tür stehen.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum der Zählerschrank bei Energietechnik plötzlich wichtig wird')),
      p(
        t('Viele Häuser haben Jahrzehnte problemlos mit ihrem bestehenden Zählerschrank funktioniert. Dann kommen Photovoltaik, Batteriespeicher, Wärmepumpe, Wallbox und Smart Meter dazu – und plötzlich wird aus einem unscheinbaren Schrank ein zentraler Teil des Energiesystems.'),
      ),
      p(
        t('Das liegt nicht daran, dass jede neue Technik automatisch einen neuen Schrank verlangt. Der Hausanschluss wird aber stärker und anders genutzt. Zusätzlich benötigen Mess- und Steuerungstechnik Platz, Spannungsversorgung und Kommunikationswege. Deshalb muss bei einer Erweiterung neu bewertet werden, ob der vorhandene Zählerplatz für die künftige Aufgabe geeignet ist.'),
      ),
    ),

    hinweisBlock(
      'Zwei pauschale Aussagen sind falsch',
      p(
        bold('„Bei Photovoltaik muss immer ein neuer Zählerschrank her.“'),
        t(' – falsch. Ebenso falsch ist: '),
        bold('„Der Schrank ist Bestand und darf deshalb bei jeder Erweiterung unverändert bleiben.“'),
        t(' Entscheidend ist die technische Bewertung der konkreten Anlage.'),
      ),
    ),

    textBlock(
      h('h2', t('Was wird bei einem bestehenden Zählerschrank geprüft?')),
      p(
        t('Eine seriöse Beurteilung beginnt nicht beim Baujahr, sondern beim tatsächlichen Aufbau. Typische Punkte sind:'),
      ),
      ul(
        p(t('Zustand von Gehäuse, Verdrahtung und Anschlusskomponenten,')),
        p(t('Zählerplatz und vorhandene Befestigungstechnik,')),
        p(t('Dimensionierung und Belastbarkeit der Hauptleitungen und Schutzeinrichtungen,')),
        p(t('Trenn- und Schutzkonzept,')),
        p(t('Platz für Smart-Meter-Gateway und weitere Zusatzanwendungen,')),
        p(t('Möglichkeiten für §-14a-Steuertechnik und Kommunikationsleitungen,')),
        p(t('Anzahl der Messstellen und gewünschtes Messkonzept,')),
        p(t('sowie die Anforderungen der aktuellen TAB und des zuständigen Messstellenbetreibers.')),
      ),
      p(
        t('Deshalb kann ein älterer, gut aufgebauter Schrank unter Umständen sinnvoll weitergenutzt oder ergänzt werden, während ein jüngerer, sehr knapp dimensionierter Schrank bei einer großen Erweiterung mehr Anpassungen benötigt.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum PV, Speicher, Wärmepumpe und Wallbox anders zu bewerten sind')),
      p(
        t('Bei einem klassischen Haushalt treten hohe Leistungen häufig nur zeitweise auf. Eine Wärmepumpe kann dagegen über lange Zeit laufen, ein Speicher über Stunden laden, eine Wallbox mehrere Stunden mit hoher Leistung arbeiten und eine PV-Anlage dauerhaft einspeisen.'),
      ),
      p(
        t('Genau deshalb werden solche Anwendungen bei der Zählerplatzplanung als mögliche '),
        bold('Dauerbetriebsanwendungen'),
        t(' betrachtet. Dabei geht es nicht nur um die Summe der auf Typenschildern stehenden Kilowatt, sondern um zu erwartende Betriebsströme, Gleichzeitigkeiten und die thermische Belastung des Zählerplatzes.'),
      ),
    ),

    tabelleBlock('Neue Technik – was ändert sich am Zählerplatz?', [
      {
        spalte1: 'Photovoltaik',
        spalte2: 'Einspeisung, Messkonzept, Dauerstrom',
        spalte3: 'Zählerplatz und Trennmöglichkeiten prüfen',
      },
      {
        spalte1: 'Stromspeicher',
        spalte2: 'Lade- und Entladeleistung, ggf. Netzladen',
        spalte3: 'Belastung und §14a bei Netzbezug berücksichtigen',
      },
      {
        spalte1: 'Wärmepumpe',
        spalte2: 'längerer Leistungsbezug, §14a',
        spalte3: 'Messkonzept, Steuerbarkeit und Dauerbetrieb prüfen',
      },
      {
        spalte1: 'Wallbox',
        spalte2: 'hoher Leistungsbezug über Stunden, §14a',
        spalte3: 'Anschlussleistung und Steuerweg berücksichtigen',
      },
      {
        spalte1: 'Smart Meter / Steuertechnik',
        spalte2: 'zusätzliche Geräte und Datenwege',
        spalte3: 'Funktionsflächen, Spannungsversorgung und Kommunikation vorbereiten',
      },
    ]),

    textBlock(
      h('h2', t('Smart Meter: Der Zähler allein ist nicht das ganze System')),
      p(
        t('Ein intelligentes Messsystem besteht aus einem digitalen Zähler und einem Smart-Meter-Gateway. Für das Gateway braucht es eine geeignete Einbausituation, Versorgung und Kommunikation. Hinzu kann bei steuerbaren Verbrauchern eine Steuerungseinrichtung kommen.'),
      ),
      p(
        t('Das ist einer der Gründe, weshalb moderne Zählerplätze zusätzliche Funktionsräume vorsehen. Ein Smart Meter ist damit kein bloßer „digitaler Zählertausch“, wenn der vorhandene Schrank die nötige Infrastruktur nicht aufnehmen kann.'),
      ),
      p(
        t('Die Grundlagen zu iMSys, Kosten und Pflichteinbau findest du in unserem '),
        link('Smart-Meter-Ratgeber 2026', '/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('§ 14a: Warum Kommunikationswege in den Zählerschrank gehören')),
      p(
        t('Bei neuer Wärmepumpe, Wallbox oder netzladendem Speicher über 4,2 kW muss die steuerbare Verbrauchseinrichtung in die vorgesehene Steuerungsinfrastruktur eingebunden werden können. Dafür braucht es eine technische Verbindung zwischen Zählerplatz beziehungsweise Steuerungseinrichtung und Verbraucher oder Energiemanagement.'),
      ),
      p(
        t('Bei einer digitalen Lösung bedeutet das in der Praxis Datenleitungen und definierte Schnittstellen. Wer diese Leitungen beim Neubau oder bei einer größeren Sanierung nicht mitplant, produziert später unnötige Nacharbeit.'),
      ),
      p(
        t('Wie Smart-Meter-Gateway, Steuerbox und HEMS zusammenspielen, erklären wir im Artikel '),
        link('Steuerbox nach § 14a', '/strom-energiemanagement/steuerbox-paragraf-14a-smart-meter-hems'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Westnetz 2026: Was im Bestand ausdrücklich möglich ist')),
      p(
        t('Für unseren regionalen Schwerpunkt ist die aktuelle technische Anforderung des grundzuständigen Messstellenbetreibers Westnetz besonders interessant. Westnetz schreibt nicht pauschal vor, dass bei jeder Steuerungsnachrüstung der komplette bestehende Zählerschrank ersetzt werden muss. Stattdessen ist bei einer geplanten Erweiterung zu prüfen, ob der vorhandene Zählerplatz geeignet ist.'),
      ),
      p(
        t('Für Bestandszählerplätze beschreibt Westnetz mehrere Wege. Vorhandene Steuergerätefelder können genutzt werden. Unter bestimmten Voraussetzungen kann ein plombierbares Verteilerfeld als zusätzlicher Raum für Zusatzanwendungen vorbereitet werden. Ist im Zählerschrank kein geeigneter Platz vorhanden, kann für die Steuerung sogar ein '),
        bold('externes plombierbares Gehäuse in unmittelbarer Nähe des Zählerschranks'),
        t(' vorgesehen werden.'),
      ),
      p(
        t('Das ist ein gutes Beispiel dafür, warum „alter Schrank = Komplettaustausch“ zu pauschal ist. Gleichzeitig bedeutet eine mögliche Nachrüstlösung nicht, dass jeder alte Schrank automatisch geeignet ist.'),
      ),
      p(
        t('Die technischen Details veröffentlicht Westnetz in den '),
        link('Anforderungen an Zählerplätze in der Niederspannung', 'https://www.westnetz.de/content/dam/revu-global/westnetz/documents/bauen/ihr-weg-zum-netzanschluss/niederspannung/250901-anforderungen-hinweise-gmsb-zaehlerplaetze.pdf', { newTab: true }),
        t('.'),
      ),
    ),

    hinweisBlock(
      'Bestandsschutz ist kein Freifahrtschein für Erweiterungen',
      p(
        t('Eine bestehende elektrische Anlage muss nicht allein wegen ihres Alters auf jeden heutigen Neubaustandard umgebaut werden. Wird sie erweitert oder wesentlich geändert, muss aber geprüft werden, ob der betroffene Anlagenteil für die neue Nutzung geeignet und sicher ist. Genau hier entsteht die Einzelfallbewertung.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann ist ein neuer Zählerschrank meistens die sinnvollere Lösung?')),
      p(
        t('Eine Komplettmodernisierung kann sinnvoll sein, wenn mehrere Probleme zusammenkommen. Typische Beispiele sind:'),
      ),
      ul(
        p(t('technisch ungeeigneter oder beschädigter Zählerplatz,')),
        p(t('fehlender Platz für benötigte Mess- und Steuertechnik,')),
        p(t('unzureichende Belastbarkeit für die geplante Erweiterung,')),
        p(t('umfangreiche Umbauten, bei denen eine Nachrüstlösung wirtschaftlich kaum noch sinnvoll ist,')),
        p(t('mehrere neue Zähler beziehungsweise ein grundlegend neues Messkonzept,')),
        p(t('oder eine ohnehin geplante Sanierung der Hauptverteilung.')),
      ),
      p(
        t('Dann kann ein sauber neu aufgebauter Schrank günstiger, übersichtlicher und zukunftsfester sein als viele einzelne Anpassungen an einem technisch überholten Aufbau.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann kann eine Anpassung des Bestands ausreichen?')),
      p(
        t('Wenn Gehäuse, Leitungen, Schutztechnik und Zählerplatz grundsätzlich geeignet sind und die fehlenden Funktionen normgerecht ergänzt werden können, kann eine Bestandsanpassung die bessere Lösung sein. Das kann beispielsweise Zusatzraum, Datenleitung, passende Befestigungstechnik oder eine externe Steuergeräte-Lösung betreffen.'),
      ),
      p(
        t('Die Entscheidung sollte aber nicht anhand eines Fotos aus zwei Metern Entfernung fallen. Für die endgültige Planung gehören die relevanten Komponenten, Leitungsquerschnitte und Anschlussbedingungen geprüft.'),
      ),
    ),

    tippBlock(
      'Zählerschrank früh fotografieren',
      p(
        t('Für eine erste Einschätzung helfen scharfe Fotos vom gesamten Schrank, geöffneten Zählerfeldern soweit zulässig, Typenschildern und der Umgebung. Arbeiten hinter plombierten oder spannungsführenden Abdeckungen gehören selbstverständlich zum Elektrofachbetrieb.'),
      ),
    ),

    textBlock(
      h('h2', t('Was kostet ein neuer Zählerschrank?')),
      p(
        t('Pauschalpreise sind hier wenig hilfreich. Ein einfacher Zählerplatz ist etwas anderes als eine Mehrzähleranlage mit Wärmepumpen-Messkonzept, Smart-Meter-Vorbereitung, Überspannungsschutz, neuer Hauptverteilung und umfangreichen Leitungsarbeiten.'),
      ),
      p(
        t('Deshalb sollte im Angebot klar stehen, '),
        bold('was tatsächlich erneuert oder angepasst wird'),
        t(' – statt nur die Position „Zählerschrank neu“ aufzuführen. Das macht Angebote vergleichbarer und verhindert Überraschungen auf der Baustelle.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Nicht erneuern, weil er alt ist – sondern weil es technisch sinnvoll ist')),
      p(
        t('Der Zählerschrank ist kein dekoratives Zubehör der PV-Anlage. Er ist Teil der elektrischen Infrastruktur und wird mit Wärmepumpe, Speicher, Wallbox, Smart Meter und Steuertechnik immer wichtiger.'),
      ),
      p(
        t('Unser Maßstab ist deshalb weder „alles neu“ noch „alles Bestand“. Wir wollen wissen, was die bestehende Anlage kann, was künftig angeschlossen werden soll und welche Anpassung dafür '),
        bold('technisch sauber, sicher und wirtschaftlich sinnvoll'),
        t(' ist.'),
      ),
    ),

    ctaBlock({
      titel: 'Zählerschrank vor der Montage sauber klären',
      text:
        'Wir betrachten PV, Speicher, Wärmepumpe, Wallbox, Messkonzept und Zählerschrank gemeinsam. So steht vor der Baustelle fest, welche Elektroarbeiten wirklich notwendig sind.',
      buttonText: 'Energieprojekt anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Muss bei jeder Photovoltaikanlage der Zählerschrank erneuert werden?',
      'Nein. Entscheidend ist, ob der vorhandene Zählerplatz für die geplante Erweiterung technisch geeignet ist. Zustand, Belastbarkeit, Schutztechnik, Messkonzept und Anforderungen des Netz- und Messstellenbetreibers müssen geprüft werden.',
    ),
    faqItem(
      'Braucht ein Smart Meter einen neuen Zählerschrank?',
      'Nicht automatisch. Das intelligente Messsystem benötigt jedoch geeignete Einbau- und Kommunikationsmöglichkeiten. Bei älteren Anlagen kann eine Anpassung oder Zusatzlösung erforderlich sein.',
    ),
    faqItem(
      'Kann bei Westnetz eine Steuerbox außerhalb des Zählerschranks sitzen?',
      'Für bestimmte Bestandszählerplätze beschreibt Westnetz eine mögliche externe, plombierbare Steuergeräte-Lösung in unmittelbarer Nähe des Zählerschranks, wenn innerhalb des Bestands kein geeigneter Funktionsraum hergestellt werden kann. Die konkrete Ausführung muss den technischen Anforderungen entsprechen.',
    ),
    faqItem(
      'Warum ist eine Wärmepumpe für den Zählerschrank relevant?',
      'Wärmepumpen können über lange Zeit höhere Ströme beziehen und fallen bei entsprechender Leistung unter § 14a. Deshalb müssen Dauerbetriebsbelastung, Messkonzept und Steuerbarkeit berücksichtigt werden.',
    ),
    faqItem(
      'Was bedeutet Bestandsschutz beim Zählerschrank?',
      'Eine bestehende Anlage muss nicht allein wegen ihres Alters vollständig auf Neubaustandard gebracht werden. Bei Erweiterungen muss aber geprüft werden, ob der betroffene Bestand für die neue Nutzung geeignet und sicher ist.',
    ),
  ],
}

await upsertRatgeberArticle(article)
