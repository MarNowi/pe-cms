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
  titel: 'Wärmepumpe richtig aufstellen: Warum der Standort über Schall, Effizienz und Ärger entscheidet',
  slug: 'waermepumpe-richtig-aufstellen-standort-schall',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Vor die Hauswand stellen und fertig? Bei einer Luft-Wasser-Wärmepumpe entscheidet der Aufstellort über Schall, Luftführung, Kondensat, Leitungswege, Servicezugang und oft auch über die Zufriedenheit der Nachbarn. So wird der Standort sinnvoll geplant.',
  lesezeit: 12,

  seo: seo(
    'Wärmepumpe richtig aufstellen: Standort, Abstand & Schall | PEAK.Energy',
    'Wo sollte eine Luft-Wasser-Wärmepumpe stehen? Aufstellort, Schall, Nachbarn, Hauswand, Kondensat, Luftführung, Leitungswege und Regeln in NRW erklärt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Der beste Aufstellort ist nicht automatisch der kürzeste Leitungsweg. '),
      bold('Schall, Luftführung, Kondensat, Service und Hydraulik'),
      t(' müssen gemeinsam betrachtet werden.'),
    ),
    summaryPoint(
      t('Wärmepumpen sollten akustisch nicht unnötig auf '),
      bold('Schlafzimmerfenster, enge Mauerecken oder reflektierende Flächen'),
      t(' ausgerichtet werden.'),
    ),
    summaryPoint(
      t('In NRW sind Wärmepumpen und zugehörige Einhausungen nach § 6 BauO NRW grundsätzlich auch in Abstandsflächen beziehungsweise ohne eigene Abstandsfläche zulässig. Das bedeutet aber '),
      bold('nicht „Schall egal“'),
      t('. Immissionsschutz und örtliche Besonderheiten bleiben relevant.'),
    ),
    summaryPoint(
      t('Eine schwingungsentkoppelte Aufstellung und geeignete flexible Anschlüsse helfen, '),
      bold('Körperschallübertragung'),
      t(' ins Gebäude zu vermeiden.'),
    ),
    summaryPoint(
      t('Der Aufstellort sollte vor Bestellung des Geräts feststehen. Nachträgliche Schallschutzmaßnahmen sind meist '),
      bold('teurer und schlechter'),
      t(' als eine gute Planung.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Der Standort ist Teil der Wärmepumpenplanung')),
      p(
        t('Bei einer Luft-Wasser-Wärmepumpe steht draußen ein technisches Gerät mit Ventilator und Verdichter. Es bewegt große Luftmengen, erzeugt Kondensat, braucht freie Luftwege und muss gewartet werden können. Deshalb ist „da ist noch Platz“ kein ausreichendes Standortkonzept.'),
      ),
      p(
        t('Ein guter Platz erfüllt mehrere Anforderungen gleichzeitig: kurze und sinnvolle Leitungswege, möglichst wenig Schallwirkung auf eigene und fremde Aufenthaltsräume, sichere Kondensatableitung, freie Luftströmung und ausreichend Raum für Servicearbeiten.'),
      ),
      p(
        t('Wie Schallwerte grundsätzlich zu lesen sind und warum Schallleistung und Schalldruck nicht verwechselt werden dürfen, erklären wir in '),
        link('Wärmepumpe und Schallpegel', '/waermepumpe/waermepumpe-schallpegel'),
        t('. Hier konzentrieren wir uns auf die praktische Standortentscheidung.'),
      ),
    ),

    tabelleBlock('Was ein guter Wärmepumpen-Standort leisten muss', [
      {
        spalte1: 'Schall',
        spalte2: 'Abstand und Ausrichtung zu schutzbedürftigen Räumen',
        spalte3: 'Nicht unnötig auf Schlafräume oder Nachbarfenster abstrahlen',
      },
      {
        spalte1: 'Luftführung',
        spalte2: 'Ansaug- und Ausblasbereich frei halten',
        spalte3: 'Kurzschlussströmung und Rückansaugung kalter Luft vermeiden',
      },
      {
        spalte1: 'Kondensat',
        spalte2: 'Frostsichere Ableitung beziehungsweise Versickerung planen',
        spalte3: 'Im Winter entstehen relevante Wassermengen beim Betrieb und Abtauen',
      },
      {
        spalte1: 'Leitungsweg',
        spalte2: 'Technisch sinnvoll und zugänglich',
        spalte3: 'Nicht länger als nötig, aber nicht auf Kosten einer schlechten Aufstellung',
      },
      {
        spalte1: 'Service',
        spalte2: 'Herstellervorgaben für Freiräume einhalten',
        spalte3: 'Filter, Elektrik und Komponenten müssen erreichbar bleiben',
      },
    ]),

    textBlock(
      h('h2', t('1. Nicht direkt auf das Schlafzimmer des Nachbarn zielen')),
      p(
        t('Schall nimmt mit der Entfernung ab. Gleichzeitig beeinflussen Ausrichtung, Reflexionen und die Umgebung, wie viel davon am Immissionsort ankommt. Eine Wärmepumpe direkt gegenüber einem Schlafzimmerfenster ist deshalb akustisch meist ungünstiger als ein Standort, der die Hauptabstrahlrichtung von empfindlichen Bereichen wegführt.'),
      ),
      p(
        t('Besonders kritisch können enge Situationen zwischen zwei Wänden, Mauern oder Gebäuden sein. Harte Flächen reflektieren Schall. Eine optisch „schöne Nische“ ist daher nicht automatisch ein akustisch guter Platz.'),
      ),
      p(
        t('Die Bund/Länder-Arbeitsgemeinschaft Immissionsschutz weist in ihrem '),
        link('Leitfaden zu stationären Geräten', 'https://www.lai-immissionsschutz.de/Veroeffentlichungen-67.html/Impressum.html', { newTab: true }),
        t(' ausdrücklich darauf hin, dass ein ungünstiger Standort zu Beschwerden führen kann und die Nachtwerte besonders relevant sind.'),
      ),
    ),

    hinweisBlock(
      'Kein pauschaler „richtiger Abstand“',
      p(
        t('Eine Aussage wie „drei Meter reichen immer“ ist fachlich zu grob. Der notwendige akustische Abstand hängt unter anderem von Schallleistung, Betriebszustand, Baugebiet, Vorbelastung, Reflexionen und dem maßgeblichen Immissionsort ab. Deshalb rechnen und bewerten wir die konkrete Situation statt nur eine Meterzahl abzuhaken.'),
      ),
    ),

    textBlock(
      h('h2', t('2. NRW: Baurechtlicher Abstand und Schallschutz sind zwei verschiedene Themen')),
      p(
        t('In Nordrhein-Westfalen nennt § 6 Absatz 8 der Landesbauordnung Wärmepumpen und zugehörige Einhausungen ausdrücklich als Anlagen, die in Abstandsflächen eines Gebäudes sowie ohne eigene Abstandsflächen zulässig sein können. Das räumt mit der alten Vorstellung auf, jede Wärmepumpe müsse allein aus dem Abstandsflächenrecht pauschal drei Meter von der Grundstücksgrenze entfernt stehen.'),
      ),
      p(
        t('Das ist aber keine Freigabe, ein lautes Gerät beliebig an die Grenze zu setzen. '),
        bold('Baurecht und Immissionsschutz beantworten unterschiedliche Fragen.'),
        t(' Auch örtliche Satzungen, Grundstückssituationen und weitere Anforderungen können relevant sein. Die aktuelle Bauordnung stellt das Land NRW auf '),
        link('recht.nrw.de', 'https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw/', { newTab: true }),
        t(' bereit.'),
      ),
    ),

    textBlock(
      h('h2', t('3. Hauswand, Ecke oder frei stehend?')),
      p(
        t('Viele Außengeräte stehen direkt vor einer Fassade. Das kann wegen kurzer Leitungswege sinnvoll sein. Akustisch muss die Wand aber mitgedacht werden, weil sie Schall reflektieren kann. In einer Ecke kommen zusätzliche Reflexionsflächen hinzu.'),
      ),
      p(
        t('Freier aufgestellte Geräte können akustisch Vorteile haben, verursachen aber längere Leitungswege und brauchen eine saubere Gründung. Die richtige Lösung ergibt sich deshalb aus dem Grundstück – nicht aus einem Standardschema.'),
      ),
      p(
        t('Das Umweltbundesamt empfiehlt ausdrücklich eine schalltechnisch günstige Aufstellung und sachgerechte Installation. Auch eine schwingungsgeminderte Aufstellung sowie flexible Anschlüsse werden als Maßnahmen gegen unerwünschte Vibrationen genannt.'),
      ),
    ),

    textBlock(
      h('h2', t('4. Körperschall: Das Geräusch kann auch durchs Gebäude kommen')),
      p(
        t('Nicht jedes störende Geräusch gelangt über die Luft ins Haus. Vibrationen können über Fundament, Befestigung oder starre Rohrverbindungen in Bauteile eingeleitet werden. Dann wird aus dem eigentlichen Außengerät ein Körperschallproblem im Gebäude.'),
      ),
      p(
        t('Deshalb gehören geeignete Fundamente, vom Hersteller vorgesehene Schwingungsdämpfer und fachgerecht ausgeführte Anschlüsse zur Planung. Eine starre Verbindung an der falschen Stelle kann akustisch mehr kaputtmachen als ein zusätzlicher Meter Abstand draußen verbessert.'),
      ),
    ),

    textBlock(
      h('h2', t('5. Luft muss rein und wieder raus')),
      p(
        t('Eine Luft-Wasser-Wärmepumpe entzieht der Außenluft Wärme. Dafür muss der Verdampfer ausreichend mit Außenluft versorgt werden. Ansaug- und Ausblasbereiche dürfen nicht durch Wände, Hecken, Mülltonnen oder Einhausungen so eingeengt werden, dass die Luftführung beeinträchtigt wird.'),
      ),
      p(
        t('Besonders ungünstig ist eine Rückansaugung der bereits abgekühlten Ausblasluft. Das kann die Betriebsbedingungen verschlechtern. Deshalb gelten die Mindestabstände des konkreten Herstellers – und eine Einhausung muss technisch zum Gerät passen, nicht nur optisch.'),
      ),
    ),

    textBlock(
      h('h2', t('6. Kondensat und Abtauwasser nicht vergessen')),
      p(
        t('Beim Betrieb fällt Kondensat an. Im Winter kommt während der Abtauzyklen zusätzlich Wasser zusammen. Dieses Wasser muss kontrolliert und frostgerecht abgeführt werden. Sonst können Eisflächen rund um das Gerät, Schäden am Fundament oder Probleme an Wegen entstehen.'),
      ),
      p(
        t('Der Standort wird daher nicht nur in der Draufsicht geplant. Auch Untergrund, Gefälle, Versickerung und Leitungsführung gehören dazu.'),
      ),
    ),

    textBlock(
      h('h2', t('7. Der kürzeste Leitungsweg ist nicht immer der beste')),
      p(
        t('Kurze Leitungswege sind grundsätzlich attraktiv: weniger Material, weniger Wärmeverlust und oft geringere Montagekosten. Trotzdem würden wir einen akustisch schlechten Standort nicht wählen, nur um drei Meter Rohr zu sparen.'),
      ),
      p(
        t('Gerade bei Monoblock-Systemen müssen hydraulische Leitungen nach draußen sauber geplant und gegen Wärmeverlust sowie Frost geschützt werden. Was Monoblock und Split technisch unterscheidet, behandeln wir im Ratgeber '),
        link('Monoblock oder Split-Wärmepumpe?', '/waermepumpe/monoblock-oder-split-waermepumpe'),
        t('.'),
      ),
    ),

    tippBlock(
      'Standort festlegen, bevor bestellt wird',
      p(
        t('Gerät, Schallleistung, Heizlast und Aufstellort gehören zusammen. Erst das Modell kaufen und anschließend auf dem Grundstück nach einem Platz suchen, dreht die Planung um. Besser: mögliche Standorte prüfen, Schallsituation bewerten und dann das passende Gerät festlegen.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Ein guter Aufstellort fällt im Alltag nicht auf')),
      p(
        t('Die beste Wärmepumpe ist nicht die, deren Außengerät man ständig diskutieren muss. Eine sauber geplante Anlage läuft effizient, ist zugänglich, leitet Wasser kontrolliert ab und bleibt akustisch möglichst unauffällig.'),
      ),
      p(
        t('Genau deshalb gehört die Standortfrage in die Projektierung – nicht erst auf die Baustelle, wenn das Gerät schon vor der Tür steht.'),
      ),
    ),

    ctaBlock({
      titel: 'Wärmepumpe inklusive Standort planen',
      text:
        'Wir betrachten Heizlast, Hydraulik, Schall, Aufstellort und elektrische Einbindung als ein gemeinsames System – statt nur ein Außengerät zu verkaufen.',
      buttonText: 'Wärmepumpen-Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Wie weit muss eine Wärmepumpe vom Nachbargrundstück entfernt sein?',
      'Eine bundesweit pauschale Meterzahl für jede Situation gibt es nicht. In NRW sind Wärmepumpen nach der BauO NRW grundsätzlich auch ohne eigene Abstandsfläche zulässig. Unabhängig davon müssen Schall, örtliche Regeln und die konkrete Grundstückssituation berücksichtigt werden.',
    ),
    faqItem(
      'Darf eine Wärmepumpe direkt an der Hauswand stehen?',
      'Das kann technisch möglich sein, wenn die Herstellervorgaben eingehalten werden. Akustisch können Fassaden Schall reflektieren; außerdem müssen Luftführung, Kondensat, Körperschall und Serviceabstände geprüft werden.',
    ),
    faqItem(
      'Ist eine Ecke ein guter Standort für die Wärmepumpe?',
      'Nicht automatisch. Mehrere harte Flächen können Schall reflektieren und die Luftführung einschränken. Eine Ecke muss deshalb akustisch und strömungstechnisch bewertet werden.',
    ),
    faqItem(
      'Warum braucht eine Wärmepumpe ein Fundament?',
      'Das Außengerät braucht einen tragfähigen, dauerhaften und möglichst schwingungsentkoppelten Untergrund. Gleichzeitig muss die Kondensat- und Abtauwasserableitung berücksichtigt werden.',
    ),
    faqItem(
      'Kann man eine Wärmepumpe nachträglich einhausen?',
      'Grundsätzlich gibt es geeignete Schallschutz- oder Sichtschutzeinhausungen. Sie dürfen die notwendige Luftführung und Servicezugänglichkeit aber nicht beeinträchtigen und müssen zum jeweiligen Gerät passen.',
    ),
  ],
}

await upsertRatgeberArticle(article)
