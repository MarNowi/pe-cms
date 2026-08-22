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
  titel: 'PV-Anlage und Dachsanierung: Alte Module abbauen, wiederverwenden oder gleich repowern?',
  slug: 'pv-anlage-dachsanierung-demontage-repowering',
  kategorie: 'repowering',
  status: 'veroeffentlicht',
  teaser:
    'Das Dach muss neu, aber die Photovoltaikanlage läuft noch. Werden die alten Module einfach abgebaut und später wieder montiert – oder ist die Dachsanierung der richtige Moment für ein Repowering? Wir zeigen, welche technischen und wirtschaftlichen Fragen vorher geklärt werden sollten.',
  lesezeit: 12,

  seo: seo(
    'PV-Anlage bei Dachsanierung: abbauen oder repowern? | PEAK.Energy',
    'Was passiert mit einer Photovoltaikanlage bei Dachsanierung? Demontage, Zwischenlagerung, Wiederaufbau, Unterkonstruktion, Wechselrichter und Repowering erklärt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Eine funktionierende Altanlage muss bei einer Dachsanierung nicht automatisch ersetzt werden. Entscheidend sind '),
      bold('Alter, Zustand, Leistung, Vergütung, Dachfläche und Kosten des Wiederaufbaus'),
      t('.'),
    ),
    summaryPoint(
      t('Der reine Modulwert ist oft nicht der größte Kostenblock. '),
      bold('Demontage, Gerüst, Lagerung, Prüfung und erneute Montage'),
      t(' können einen erheblichen Teil des Projekts ausmachen.'),
    ),
    summaryPoint(
      t('Alte Unterkonstruktionen sollten nicht ungeprüft übernommen werden. Dachaufbau, Befestiger, Schienen, Korrosion, heutige Lastannahmen und die neue Dacheindeckung müssen zusammenpassen.'),
    ),
    summaryPoint(
      t('Repowering kann auf derselben Dachfläche deutlich mehr Leistung ermöglichen, weil moderne Module eine höhere Flächenleistung bieten.'),
    ),
    summaryPoint(
      t('Vor der Entscheidung sollten '),
      bold('Dachdecker- und PV-Planung zusammen'),
      t(' gedacht werden. Erst Dach sanieren und anschließend die PV neu erfinden verursacht unnötige Doppelarbeit.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Die typische Situation: Das Dach ist am Ende – die PV noch nicht')),
      p(
        t('Viele Photovoltaikanlagen aus den 2000er- und frühen 2010er-Jahren produzieren noch zuverlässig Strom, während Dachziegel, Abdichtungen oder andere Teile der Gebäudehülle sanierungsbedürftig werden. Dann entsteht eine unangenehme Zwischenfrage: Was macht man mit einer Anlage, die technisch noch funktioniert, aber für die Dacharbeiten im Weg ist?'),
      ),
      p(
        t('Einfach abbauen und exakt wieder aufbauen kann richtig sein. Es kann aber genauso wirtschaftlich unsinnig sein, zwei Mal Arbeitszeit in Technik zu stecken, die ohnehin kurz vor einer Modernisierung steht.'),
      ),
      p(
        t('Für ältere Anlagen lohnt außerdem unser Ratgeber '),
        link('Alte PV-Anlage nach 20 Jahren: weiterbetreiben oder repowern?', '/repowering/alte-pv-anlage-nach-20-jahren'),
        t('. Bei einer Dachsanierung kommt zusätzlich die komplette Demontage- und Wiederaufbaufrage hinzu.'),
      ),
    ),

    tabelleBlock('Drei mögliche Wege bei der Dachsanierung', [
      {
        spalte1: 'Altanlage wieder aufbauen',
        spalte2: 'Module und geeignete Komponenten weiterverwenden',
        spalte3: 'Sinnvoll bei guter Technik, passender Vergütung und überschaubarem Modernisierungsbedarf',
      },
      {
        spalte1: 'Teil-Repowering',
        spalte2: 'Einzelne Komponenten modernisieren',
        spalte3: 'Zum Beispiel Module neu, Wechselrichter je nach technischer Eignung weiterverwenden oder umgekehrt',
      },
      {
        spalte1: 'Vollständiges Repowering',
        spalte2: 'PV-Anlage neu planen',
        spalte3: 'Interessant bei sehr alter Technik, höherem Leistungsziel oder ohnehin notwendiger Neuverkabelung',
      },
    ]),

    textBlock(
      h('h2', t('1. Wie alt ist die bestehende Anlage – und wie gut ist sie wirklich?')),
      p(
        t('Das Baujahr allein entscheidet nicht. Eine 15 Jahre alte Anlage kann technisch sauber laufen, während eine jüngere Anlage durch schlechte Montage, PID, beschädigte Steckverbinder oder andere Probleme auffällig sein kann. Vor einer teuren Wiedermontage sollte deshalb geklärt werden, was überhaupt wieder aufs Dach soll.'),
      ),
      p(
        t('Zur Bestandsaufnahme gehören je nach Anlage Sichtprüfung, Ertragsdaten, elektrische Prüfung und die Bewertung von Modulen, Steckverbindern, Leitungen, Wechselrichter und Montagesystem. Wer die Anlage ohne Prüfung einlagert und Monate später wieder montiert, verschiebt die Entscheidung nur.'),
      ),
    ),

    textBlock(
      h('h2', t('2. Demontage ist mehr als „Module runter“')),
      p(
        t('Eine PV-Anlage ist ein elektrisches System auf dem Dach. Vor der Demontage muss sie fachgerecht außer Betrieb genommen werden. Module werden getrennt, Leitungen gesichert, Komponenten beschriftet und die Anlage so dokumentiert, dass später nachvollziehbar ist, was wo verbaut war.'),
      ),
      p(
        t('Gerade bei älteren Steckverbindern und Kabeln ist Vorsicht wichtig. UV-Strahlung, Temperaturwechsel und mechanische Belastung wirken über Jahre. Eine Verbindung, die 15 Jahre unberührt funktioniert hat, muss nach Lösen und erneutem Stecken nicht automatisch so behandelt werden, als wäre sie neu.'),
      ),
    ),

    hinweisBlock(
      'Fotos und Stringplan vor der Demontage sichern',
      p(
        t('Vor dem Rückbau gehören Modulbelegung, Stringführung, Wechselrichterzuordnung, Leitungswege und relevante Typenschilder in die Projektdokumentation. Das kostet wenig Zeit und spart bei Wiederaufbau oder Repowering später viel Rätselraten.'),
      ),
    ),

    textBlock(
      h('h2', t('3. Wohin mit den alten Modulen während der Dacharbeiten?')),
      p(
        t('Photovoltaikmodule sind groß, schwer und trotz ihrer Glasfläche empfindlich gegen falsche Punktbelastungen. Eine Zwischenlagerung auf der Baustelle muss deshalb trocken, standsicher und so organisiert sein, dass Module nicht umkippen, auf Kanten belastet oder mehrfach unnötig bewegt werden.'),
      ),
      p(
        t('Bei größeren Anlagen wird die Logistik schnell relevant: Palette, Transportweg, Diebstahlschutz, Kennzeichnung und Schutz vor Beschädigung gehören in die Ablaufplanung. Eine vermeintlich einfache Wiederverwendung kann sonst durch Handling-Schäden teuer werden.'),
      ),
    ),

    textBlock(
      h('h2', t('4. Kann die alte Unterkonstruktion wieder drauf?')),
      p(
        t('Das sollte nie automatisch entschieden werden. Die neue Dacheindeckung kann andere Befestigungspunkte, Dachhaken oder Abdichtungsdetails verlangen. Außerdem haben Schienen, Schrauben und Verbinder bereits viele Jahre Witterung hinter sich.'),
      ),
      p(
        t('Bei einer Sanierung entsteht die Chance, Dach und PV konstruktiv neu aufeinander abzustimmen. Dabei sind Dachaufbau, Tragfähigkeit, Befestigungsart, Rand- und Eckbereiche, Korrosionsumgebung und die Vorgaben des Montagesystems zu berücksichtigen.'),
      ),
      p(
        t('Eine alte Schiene nur deshalb wiederzuverwenden, weil sie noch im Hof liegt, ist keine Planung.'),
      ),
    ),

    textBlock(
      h('h2', t('5. Warum Repowering plötzlich attraktiv werden kann')),
      p(
        t('Moderne Module liefern auf derselben Fläche häufig deutlich mehr Leistung als ältere Generationen. Wo früher beispielsweise 5 oder 6 kWp installiert waren, kann heute je nach Geometrie erheblich mehr Leistung auf das Dach passen.'),
      ),
      p(
        t('Gleichzeitig können neue Wechselrichter, Speicher, Ersatzstromfunktionen und Energiemanagement hinzukommen. Die Dachsanierung wird damit zum natürlichen Zeitpunkt, die gesamte Energiearchitektur für die nächsten Jahrzehnte neu zu denken.'),
      ),
      p(
        t('Das heißt nicht, dass jede alte Anlage weg muss. Es heißt nur: Wenn ohnehin Gerüst, Demontage und Dacharbeit bezahlt werden, sinkt die zusätzliche Hürde für ein Repowering deutlich.'),
      ),
    ),

    textBlock(
      h('h2', t('6. Die Einspeisevergütung der Altanlage nicht vergessen')),
      p(
        t('Bei älteren EEG-Anlagen kann der bestehende Vergütungsstatus wirtschaftlich wertvoll sein. Deshalb darf ein Repowering nicht nur technisch betrachtet werden. Vor Änderungen muss geklärt werden, welche Anlagenteile ersetzt werden, wie die bestehende Anlage energierechtlich behandelt wird und welche Folgen die konkrete Umgestaltung hat.'),
      ),
      p(
        t('Gerade bei geförderten Bestandsanlagen sollte die technische Planung deshalb mit der energierechtlichen beziehungsweise abrechnungstechnischen Einordnung zusammenpassen. Eine pauschale Aussage „neue Module = neue Anlage“ oder „alles bleibt wie vorher“ wäre zu kurz.'),
      ),
    ),

    textBlock(
      h('h2', t('7. Wechselrichter weiterverwenden?')),
      p(
        t('Ein bestehender Wechselrichter kann technisch noch gut funktionieren. Bei neuen Modulen ändern sich aber Stringspannungen, Ströme und die mögliche Generatorleistung. Deshalb muss geprüft werden, ob das neue Modulfeld innerhalb der zulässigen MPPT- und DC-Grenzen des Geräts liegt.'),
      ),
      p(
        t('Außerdem stellt sich die strategische Frage: Soll künftig ein Speicher, Ersatzstrom oder ein HEMS integriert werden? Ein Wechselrichter, der gerade noch zum alten Konzept passt, kann zum Flaschenhals der neuen Anlage werden.'),
      ),
    ),

    tippBlock(
      'Dachsanierung und PV in einem Termin planen',
      p(
        t('Idealerweise steht vor dem ersten Gerüst bereits fest, welche PV-Komponenten zurückgebaut, geprüft, weiterverwendet oder ersetzt werden. So können Dachdetails, Befestigungspunkte, Kabelwege und die neue Modulbelegung direkt mitgeplant werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann spricht viel für Wiederaufbau?')),
      ul(
        p(t('Die Anlage ist vergleichsweise jung und technisch unauffällig.')),
        p(t('Die bestehende Vergütung und Anlagenstruktur sollen möglichst unverändert bleiben.')),
        p(t('Module und Wechselrichter passen weiterhin gut zum Verbrauchs- und Erzeugungskonzept.')),
        p(t('Der zusätzliche Leistungsgewinn eines Repowerings wäre gering.')),
        p(t('Die Wiederaufbaukosten stehen in einem guten Verhältnis zum Restwert der Technik.')),
      ),
    ),

    textBlock(
      h('h2', t('Wann spricht viel für Repowering?')),
      ul(
        p(t('Module oder Wechselrichter sind ohnehin am Ende ihrer wirtschaftlichen Nutzungsphase.')),
        p(t('Auf derselben Dachfläche lässt sich deutlich mehr PV-Leistung installieren.')),
        p(t('Speicher, Wärmepumpe, E-Auto oder neuer Gewerbeverbrauch haben den Strombedarf verändert.')),
        p(t('Die alte Verkabelung oder Unterkonstruktion müsste ohnehin umfangreich erneuert werden.')),
        p(t('Das System soll für weitere 20 bis 30 Jahre technisch neu aufgestellt werden.')),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Nicht die Module entscheiden – das Gesamtprojekt entscheidet')),
      p(
        t('Bei einer Dachsanierung gibt es keinen Automatismus. Eine gute Altanlage darf weiterlaufen. Eine alte Anlage muss aber auch nicht aus Nostalgie ein zweites Mal montiert werden, wenn Arbeitskosten und technische Grenzen dagegen sprechen.'),
      ),
      p(
        t('Der richtige Weg entsteht aus '),
        bold('Dachzustand, PV-Zustand, Vergütung, neuer Leistung, zukünftigen Verbrauchern und den Kosten beider Varianten'),
        t('. Genau deshalb sollten Dach und Energieanlage zusammen geplant werden.'),
      ),
    ),

    ctaBlock({
      titel: 'Dachsanierung mit PV sauber vorbereiten',
      text:
        'Wir prüfen Bestandsanlage, Dachfläche und zukünftiges Energiekonzept und vergleichen Wiederaufbau mit Repowering, bevor doppelte Arbeit entsteht.',
      buttonText: 'Bestandsanlage prüfen lassen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Muss eine PV-Anlage bei der Dachsanierung komplett erneuert werden?',
      'Nein. Eine technisch gute Anlage kann demontiert und wieder aufgebaut werden. Ob das wirtschaftlich sinnvoll ist, hängt von Alter, Zustand, Vergütung, Wiederaufbaukosten und dem möglichen Leistungsgewinn eines Repowerings ab.',
    ),
    faqItem(
      'Kann man alte Solarmodule nach der Dachsanierung wiederverwenden?',
      'Grundsätzlich ja, wenn die Module technisch in Ordnung sind und das neue Anlagenkonzept passt. Vor dem Wiederaufbau sollten Zustand, elektrische Daten und Kompatibilität geprüft werden.',
    ),
    faqItem(
      'Kann die alte PV-Unterkonstruktion wiederverwendet werden?',
      'Teilweise ist das möglich, sollte aber nicht vorausgesetzt werden. Neue Dacheindeckung, Befestigung, Statik, Korrosion und Herstellervorgaben des Montagesystems müssen geprüft werden.',
    ),
    faqItem(
      'Wann lohnt sich Repowering bei einer Dachsanierung?',
      'Repowering wird besonders interessant, wenn die bestehende Technik alt ist, moderne Module deutlich mehr Leistung auf derselben Fläche ermöglichen oder Speicher, Wärmepumpe und E-Mobilität ein neues Anlagenkonzept sinnvoll machen.',
    ),
    faqItem(
      'Was passiert mit der Einspeisevergütung bei Repowering?',
      'Das hängt von der konkreten Änderung und der energierechtlichen Einordnung der Bestandsanlage ab. Vor einem Repowering einer vergüteten Altanlage sollte deshalb geprüft werden, welche Folgen der Komponententausch und die Leistungserweiterung haben.',
    ),
  ],
}

await upsertRatgeberArticle(article)
