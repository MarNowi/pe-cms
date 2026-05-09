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
  titel: 'Wärmepumpe Schallpegel: Was Nachbarschaft und Genehmigung wirklich bedeuten',
  slug: 'waermepumpe-schallpegel',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Eine Luft-Wärmepumpe ist keine Klimaanlage und kein Kühlturm – aber sie steht draußen und macht Geräusche. Wer Schallpegel, TA Lärm und Aufstellort sauber einordnet, vermeidet Streit mit Nachbarn und Stress mit der Behörde.',
  lesezeit: 9,

  seo: seo(
    'Wärmepumpe Schallpegel und TA Lärm: Was wirklich gilt | PEAK.Energy',
    'Wärmepumpe Schallpegel: Schallleistung vs. Schalldruck, TA Lärm Grenzwerte, Mindestabstand zum Nachbarn und praktische Tipps für leise Aufstellung.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Moderne Luft-Wärmepumpen liegen 2026 typisch bei '),
      bold('45–55 dB(A) Schallleistungspegel'),
      t(' – das ist die Quellangabe, nicht das, was beim Nachbarn ankommt.'),
    ),
    summaryPoint(
      t('Entscheidend ist der '),
      bold('Schalldruckpegel am Immissionsort'),
      t(' – also dort, wo der Nachbar wohnt. Der ist meist 15–25 dB(A) niedriger als die Quelle, abhängig von Abstand, Reflexion und Aufstellort.'),
    ),
    summaryPoint(
      t('Die '),
      bold('TA Lärm'),
      t(' regelt verbindliche Grenzwerte: tagsüber 50–55 dB(A) im allgemeinen Wohngebiet, nachts 35–40 dB(A) – am Immissionsort des Nachbarn, nicht an der Maschine.'),
    ),
    summaryPoint(
      t('Der '),
      bold('Aufstellort entscheidet mehr als das Gerät'),
      t(' – ein günstig aufgestelltes lautes Gerät ist oft leiser am Nachbarhaus als ein leises Gerät zwischen zwei Hauswänden.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('„Sind Wärmepumpen laut?" ist eine der häufigsten Fragen vor dem Kauf – und sie wird selten ehrlich beantwortet. Hersteller werben mit niedrigen Dezibel-Werten im Datenblatt. Foren-Beiträge erzählen von genervten Nachbarn. Was stimmt davon?'),
      ),
      p(
        t('Beides – und das macht es unübersichtlich. '),
        bold('Moderne Luft-Wärmepumpen sind technisch leise'),
        t('. Im Vergleich zu Geräten von vor 10 Jahren ist der Sprung enorm. Aber leise heißt nicht lautlos – ein Außengerät arbeitet mit Ventilator und Kompressor, und beides macht Geräusche. Wenn das Gerät schlecht aufgestellt ist, in einem Hausnischen-Schalltrichter steht oder die Nachtgrenzwerte missachtet werden, gibt es Streit.'),
      ),
      p(
        t('Wer eine Luft-Wärmepumpe plant, sollte deshalb das Schallthema nicht überhören und nicht überdramatisieren. Es ist ein technisches Thema mit klaren Regeln und Lösungen – wenn man es vor der Installation behandelt, nicht hinterher.'),
      ),
    ),

    textBlock(
      h('h2', t('Schallleistungspegel und Schalldruckpegel: Der Unterschied')),
      p(
        t('Beim Thema Wärmepumpe-Schall werden zwei Werte häufig verwechselt. Wer die Unterscheidung kennt, versteht Datenblätter besser.'),
      ),
      p(
        bold('Schallleistungspegel (Lw)'),
        t(' ist die akustische Leistung, die das Gerät selbst abgibt – unabhängig von Aufstellort und Entfernung. Das ist die Zahl, die im Datenblatt steht. Moderne Luft-Wärmepumpen liegen 2026 bei 45 bis 55 dB(A) Schallleistung. Geräte mit Inverter-Technik, optimierten Lüftern und Schallschutzhauben können auf 42 bis 48 dB(A) kommen.'),
      ),
      p(
        bold('Schalldruckpegel (Lp)'),
        t(' ist das, was am Immissionsort tatsächlich ankommt – beim Nachbarn, am Schlafzimmerfenster, im Nutzergarten. Dieser Wert hängt von Abstand, Reflexion und Untergrund ab und ist '),
        bold('15 bis 25 dB(A) niedriger'),
        t(' als der Schallleistungspegel.'),
      ),
      p(
        t('Eine grobe Faustregel: '),
        bold('Pro Verdoppelung des Abstands sinkt der Schalldruck um etwa 6 dB(A)'),
        t('. Eine Wärmepumpe mit 50 dB(A) Schallleistung erreicht bei 3 m Abstand etwa 35–40 dB(A) Schalldruck, bei 6 m etwa 30–35 dB(A). Reflexionen an Hauswänden können das aber wieder 3–6 dB(A) anheben.'),
      ),
    ),

    textBlock(
      h('h2', t('TA Lärm: Was rechtlich gilt')),
      p(
        t('Verbindlich für Schallimmissionen ist die '),
        bold('TA Lärm (Technische Anleitung zum Schutz gegen Lärm)'),
        t('. Sie definiert Immissionsrichtwerte am Nachbargrundstück – nicht an der Wärmepumpe selbst. Diese Werte gelten zur „lautesten Nachtstunde" und können auch tagsüber Probleme machen, wenn die Anlage nahe an Wohnhäusern steht.'),
      ),
      p(
        t('Die Richtwerte am Immissionsort hängen vom Gebietstyp ab:'),
      ),
      ul(
        p(
          bold('Reines Wohngebiet'),
          t(': tagsüber 50 dB(A), nachts 35 dB(A)'),
        ),
        p(
          bold('Allgemeines Wohngebiet'),
          t(': tagsüber 55 dB(A), nachts 40 dB(A)'),
        ),
        p(
          bold('Mischgebiet'),
          t(': tagsüber 60 dB(A), nachts 45 dB(A)'),
        ),
        p(
          bold('Gewerbegebiet'),
          t(': tagsüber 65 dB(A), nachts 50 dB(A)'),
        ),
      ),
      p(
        t('Tag ist hier 6:00 bis 22:00 Uhr, Nacht 22:00 bis 6:00 Uhr. '),
        bold('Die Nachtwerte sind kritischer'),
        t(' – die Wärmepumpe läuft nachts oft mit reduzierter Leistung, aber sie läuft. Wer in einem allgemeinen Wohngebiet wohnt, muss sicherstellen, dass am Schlafzimmerfenster des Nachbarn nicht mehr als 40 dB(A) ankommen.'),
      ),
    ),

    tabelleBlock('Mindestabstand zum Nachbargrundstück (Faustwerte)', [
      {
        spalte1: 'Gerät 50 dB(A) Schallleistung',
        spalte2: 'Mindestabstand zum Nachbar-Schlafzimmerfenster: ca. 3–4 m',
        spalte3:
          'Bei freier Aufstellung im Garten – mit Reflexionen an Hauswänden ggf. mehr nötig. Im allgemeinen Wohngebiet meist machbar',
      },
      {
        spalte1: 'Gerät 55 dB(A) Schallleistung',
        spalte2: 'Mindestabstand zum Nachbar-Schlafzimmerfenster: ca. 5–7 m',
        spalte3:
          'Bei lauteren Geräten oder ungünstiger Aufstellung kann es eng werden. Im reinen Wohngebiet (35 dB(A) nachts) oft nicht ohne weitere Maßnahmen einzuhalten',
      },
      {
        spalte1: 'Gerät 45 dB(A) Schallleistung',
        spalte2: 'Mindestabstand: ca. 2–3 m',
        spalte3:
          'Sehr leise Geräte mit Schallschutzhaube oder Nachtmodus – auch bei engen Reihenhausgrundstücken meist umsetzbar',
      },
      {
        spalte1: 'Aufstellung in Hausnische',
        spalte2: 'Reflexionen können +3 bis +6 dB(A) addieren',
        spalte3:
          'Schallausbreitung wird durch Hauswände kanalisiert – in einer L-Nische zwischen zwei Wänden klingt das Gerät deutlich lauter als bei freier Aufstellung',
      },
      {
        spalte1: 'Aufstellung an offener Außenseite',
        spalte2: 'Beste Konstellation – minimale Reflexion',
        spalte3:
          'Das Gerät arbeitet im freien Schallfeld, der Pegel sinkt mit Abstand schneller. Wenn möglich, immer der bevorzugte Aufstellort',
      },
    ]),

    hinweisBlock(
      'Aufstellort entscheidet mehr als das Gerätemodell',
      p(
        t('Ein Gerät mit 52 dB(A) Schallleistung an freier Außenwand kann am Nachbarhaus leiser ankommen als ein 47-dB(A)-Gerät in einer ungünstigen Hausnische zwischen zwei Wänden. Wer das Gerät zwischen Hauswand und Garage aufstellt, baut sich einen Schalltrichter – die Schallwellen reflektieren mehrfach und addieren sich. Die '),
        bold('Aufstellortwahl ist deshalb mindestens so wichtig wie die Gerätewahl'),
        t(' – idealerweise in die Planung beider gleichzeitig einbeziehen.'),
      ),
    ),

    textBlock(
      h('h2', t('Praktische Tipps für leise Aufstellung')),
      p(
        t('Es gibt mehrere Hebel, mit denen sich der Schallpegel am Nachbarn reduzieren lässt – einige kostenlos, andere mit Aufwand verbunden.'),
      ),
      ul(
        p(
          bold('Aufstellort an offener Außenwand'),
          t(' wählen, nicht in einer Hausnische. Schallausbreitung möglichst frei in einen großen Raum, nicht zwischen Wände kanalisiert.'),
        ),
        p(
          bold('Auspuff/Ausblasrichtung'),
          t(' weg vom Nachbargrundstück richten. Die meisten Außengeräte haben einen klaren Hauptausstoß – diesen optisch erkennbaren Bereich nicht zur Nachbarschaftsgrenze.'),
        ),
        p(
          bold('Abstand zum Nachbarn maximieren'),
          t(' – jede zusätzliche Verdoppelung des Abstands bringt rund 6 dB(A) weniger. Statt direkt an der Grundstücksgrenze, wenn möglich auf dem hauseigenen Grundstücksstreifen weiter weg vom Nachbarn.'),
        ),
        p(
          bold('Schallschutzhaube oder akustische Schallschutzwand'),
          t(' – nachträglich möglich, kostet aber 2.000 bis 5.000 € extra. Bei korrekter Erstaufstellung meist nicht nötig.'),
        ),
        p(
          bold('Nachtmodus aktivieren'),
          t(' – die meisten modernen WP haben einen Schallschutzmodus, der nachts den Lüfter und Kompressor begrenzt. Spart Pegel um 3–5 dB(A), aber reduziert Heizleistung in der lautesten Zeit.'),
        ),
        p(
          bold('Gerät auf Schwingungsdämpfer'),
          t(' setzen – damit Vibrationen nicht über Boden oder Wand ins Nachbarhaus übertragen werden. Wichtig bei Reihenhäusern.'),
        ),
      ),
    ),

    tippBlock(
      'Schallgutachten vor der Installation',
      p(
        t('Bei kritischen Konstellationen – enge Reihenhausgrundstücke, reines Wohngebiet, Nachbar mit Vorgeschichte – lohnt sich ein Schallgutachten vor der Installation. Es kostet 300 bis 800 € und prognostiziert mit Geräte-, Aufstellungs- und Geometriedaten den Pegel am Immissionsort. Wer das Gutachten in der Hand hat, kann auch im Nachbarschaftsstreit belegen, dass die Anlage rechtskonform ist – oder rechtzeitig vor Aufstellung umplanen, wenn nicht.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele beim Schallthema falsch einschätzen')),
      p(
        t('Bei der Schallproblematik tauchen immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('„Eine moderne WP ist lautlos." Stimmt nicht. Sie ist leise – etwa wie ein leiser Kühlschrank in 3 m Entfernung. Aber lautlos ist sie nicht, und nachts hört man sie auch.')),
        p(t('Der Datenblatt-Wert wird mit dem Pegel am Nachbarn verwechselt. Schallleistung 50 dB(A) heißt nicht, dass beim Nachbarn 50 dB(A) ankommen – sondern 25–35 dB(A), je nach Abstand und Aufstellort.')),
        p(t('„Ich kann die WP irgendwo hinstellen, sie ist ja leise." Stimmt nicht. Der Aufstellort ist mindestens so wichtig wie das Gerät – Hausnischen, Garageneinfahrten und Innenecken sind Schallverstärker.')),
        p(t('„Tagsüber gilt nichts." Doch, auch tagsüber gelten TA-Lärm-Werte. Sie sind nur höher als nachts. Im allgemeinen Wohngebiet gelten 55 dB(A) tagsüber – auch das kann bei ungünstiger Aufstellung kritisch werden.')),
        p(t('„Wenn der Nachbar nicht klagt, ist alles OK." Stimmt rechtlich nicht. Auch ohne Klage ist eine Anlage, die TA-Lärm-Werte überschreitet, formell nicht in Ordnung – das wird relevant, wenn später jemand klagt oder das Haus verkauft wird.')),
        p(t('Schallschutzhauben werden als Standard-Lösung präsentiert. Bei richtiger Erstaufstellung sind sie selten nötig – sie sind die Notlösung, nicht der Regelfall.')),
      ),
      p(
        bold('Eine ehrliche Einordnung des Schallthemas braucht den Blick auf die konkrete Aufstellung'),
        t(' – Pauschalaussagen wie „die ist leise" oder „die stört garantiert" sind beide nicht belastbar.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Moderne Luft-Wärmepumpen sind technisch leise genug, um in den meisten Konstellationen ohne Schallprobleme installiert zu werden. Wer einen vernünftigen Aufstellort wählt, ausreichend Abstand zur Nachbarschaft hält und im Zweifel den Nachtmodus aktiviert, kommt im allgemeinen Wohngebiet ohne weitere Maßnahmen aus.'),
      ),
      p(
        t('Kritisch wird es in engen Reihenhausgrundstücken, reinen Wohngebieten oder bei Aufstellung in Hausnischen mit starken Reflexionen. Hier lohnt sich ein Schallgutachten vor der Installation – es kostet wenige hundert Euro und schützt vor jahrelangem Ärger.'),
      ),
      p(
        bold('Der wichtigste Hebel ist nicht die Wahl des leisesten Geräts, sondern die richtige Aufstellung'),
        t(' – mit Abstand zum Nachbarn, freier Schallausbreitung, weg von Reflexionsflächen und mit Blick auf die TA-Lärm-Werte des konkreten Gebiets.'),
      ),
    ),

    ctaBlock({
      titel: 'Wärmepumpe schalltechnisch sauber planen',
      text:
        'Wir prüfen Aufstellort, Mindestabstände und – wenn nötig – ein Schallgutachten, damit deine Wärmepumpe rechtskonform und nachbarschaftsverträglich läuft.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Wie laut ist eine moderne Wärmepumpe wirklich?',
      'Moderne Luft-Wärmepumpen liegen 2026 typisch bei 45–55 dB(A) Schallleistung am Gerät. Am Immissionsort beim Nachbarn (3–5 m Abstand) kommen davon nur 25–35 dB(A) an – das ist leiser als ein leises Gespräch. Im Nachtmodus reduziert sich der Pegel nochmal um 3–5 dB(A).',
    ),
    faqItem(
      'Welcher Mindestabstand zum Nachbarhaus ist nötig?',
      'Es gibt keinen pauschalen Mindestabstand – die TA Lärm definiert Pegel am Immissionsort des Nachbarn. Faustwerte: bei einem 50-dB(A)-Gerät reichen meist 3–4 m bei freier Aufstellung. Bei lauteren Geräten oder Hausnischen-Aufstellung können 6 m und mehr nötig werden. Im reinen Wohngebiet (35 dB(A) nachts) wird es eng.',
    ),
    faqItem(
      'Was ist die TA Lärm?',
      'Die Technische Anleitung zum Schutz gegen Lärm ist eine bundesweit verbindliche Verwaltungsvorschrift. Sie regelt Immissionsrichtwerte für verschiedene Gebietstypen – am Immissionsort beim Nachbarn, nicht an der Maschine. Tagwerte (6:00–22:00) sind höher als Nachtwerte. Bei Überschreitung kann der Nachbar Beseitigung verlangen.',
    ),
    faqItem(
      'Was ist der Unterschied zwischen Schallleistung und Schalldruck?',
      'Schallleistung (Lw) ist die akustische Leistung, die das Gerät selbst abgibt – steht im Datenblatt. Schalldruck (Lp) ist das, was am Hörort ankommt – hängt von Abstand und Reflexion ab und ist 15–25 dB(A) niedriger. Pro Abstandsverdopplung sinkt der Schalldruck um etwa 6 dB(A).',
    ),
    faqItem(
      'Wie kann ich meine Wärmepumpe leiser machen?',
      'Aufstellort an offener Wand statt in einer Nische. Auspuff weg vom Nachbarn richten. Schwingungsdämpfer am Sockel. Nachtmodus aktivieren. Bei nachträglich erkannten Problemen: Schallschutzhaube oder akustische Schallschutzwand. Beste Wirkung erzielt man durch Aufstellort-Optimierung vor der Installation.',
    ),
    faqItem(
      'Welche Wärmepumpe ist die leiseste?',
      'Geräte mit Inverter-Technik, modernen EC-Lüftern und integrierter Schallschutzhaube können auf 42–48 dB(A) Schallleistung kommen. Hersteller wie Daikin, Panasonic, Stiebel Eltron, Vaillant, Wolf und Buderus haben in den letzten Jahren deutliche Sprünge gemacht. Die Datenblatt-Werte sind aber nur ein Anhaltspunkt – die Aufstellung entscheidet ebenso stark über den Pegel beim Nachbarn.',
    ),
  ],
}

await upsertRatgeberArticle(article)
