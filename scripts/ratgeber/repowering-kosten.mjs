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
  titel: 'Was kostet ein Repowering einer alten Solaranlage?',
  slug: 'repowering-kosten',
  kategorie: 'repowering',
  status: 'veroeffentlicht',
  teaser:
    'Die Kosten eines Repowerings hängen nicht von einem Pauschalpreis ab, sondern davon, wie viel an der bestehenden Anlage tatsächlich verändert werden muss. Entscheidend sind Umfang, Dach, Elektrik und Zielzustand.',
  lesezeit: 12,

  seo: seo(
    'Was kostet ein Repowering einer Solaranlage? | PEAK.Energy',
    'Repowering Kosten ehrlich eingeordnet: Wechselrichtertausch, Modultausch, Neuaufbau, Speicher, Elektrik und typische Kostenfallen – praxisnah von PEAK.Energy.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Die Kosten eines Repowerings lassen sich nicht auf eine einzige Zahl reduzieren. Der Aufwand hängt davon ab, ob nur der Wechselrichter getauscht, ein Speicher ergänzt oder die gesamte Anlage neu aufgebaut wird.'),
    ),
    summaryPoint(
      bold('Je mehr Komponenten verändert werden, desto näher rückt ein Repowering kostenmäßig an eine Neuanlage'),
      t(' – mit dem Unterschied, dass die alten Module weniger Leistung und kürzere Restlaufzeit mitbringen.'),
    ),
    summaryPoint(
      t('Neben den offensichtlichen Kosten für Geräte und Montage werden Elektrik, Zählerschrank, Dach und Anmeldung häufig unterschätzt oder zu spät berücksichtigt.'),
    ),
    summaryPoint(
      t('Eine ehrliche Kosteneinordnung beginnt nicht beim Wunschpreis, sondern bei der realen Situation vor Ort.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum es keinen Pauschalpreis für Repowering gibt')),
      p(
        t('Die Frage „Was kostet ein Repowering?" ist verständlich – aber die Antwort fällt je nach Ausgangslage sehr unterschiedlich aus.'),
      ),
      p(
        t('Ein reiner Wechselrichtertausch ist eine überschaubare Maßnahme. Ein Modultausch mit neuer Unterkonstruktion, Speicher, Zählerschrankanpassung und Neuanmeldung ist ein komplett anderes Projekt. Beides wird unter dem Begriff Repowering zusammengefasst – '),
        bold('aber die Kosten unterscheiden sich um ein Vielfaches'),
        t('.'),
      ),
      p(
        t('Genau deshalb ist es wichtig, den Umfang vorher sauber zu klären. Nicht jeder Anbieter meint mit Repowering dasselbe – und nicht jeder Preis bildet denselben Leistungsumfang ab.'),
      ),
    ),

    hinweisBlock(
      'Repowering ist kein Standardprodukt',
      p(
        t('Wer Repowering-Kosten vergleichen will, muss zuerst klären, was konkret gemeint ist. Ohne definierten Umfang ist jeder Preis beliebig.'),
      ),
    ),

    textBlock(
      h('h2', t('Die wichtigsten Kostenblöcke beim Repowering')),
      p(
        t('Um die Kosten sauber einordnen zu können, hilft es, das Projekt in einzelne Bausteine zu zerlegen. Nicht jeder davon ist in jedem Fall nötig – aber jeder kann relevant werden.'),
      ),
      ul(
        p(t('Wechselrichter: Tausch gegen ein aktuelles Gerät, ggf. mit Speichervorbereitung')),
        p(t('Speicher: Ergänzung eines Stromspeichers zur Eigenverbrauchserhöhung')),
        p(t('Module: Teilweiser oder vollständiger Modultausch')),
        p(t('Unterkonstruktion: neue Schienen und Befestigung, wenn die alten nicht mehr passen oder tragfähig sind')),
        p(t('Elektrik: Leitungswege, Absicherung, Verteilung und Anpassung der Hausinstallation')),
        p(t('Zählerschrank: Umbau oder Erweiterung, wenn die bestehende Struktur nicht mehr ausreicht')),
        p(t('Rückbau: Demontage und Entsorgung der alten Komponenten')),
        p(t('Anmeldung: Neuregistrierung oder Änderung im Marktstammdatenregister und beim Netzbetreiber')),
      ),
      p(
        t('Erst wenn klar ist, welche dieser Bausteine im konkreten Fall anfallen, lässt sich eine belastbare Kostenschätzung machen.'),
      ),
    ),

    tabelleBlock('Kostenblöcke beim Repowering im Überblick', [
      {
        spalte1: 'Wechselrichtertausch',
        spalte2: 'Basismaßnahme',
        spalte3:
          'häufigster Einzelposten beim Repowering, Kosten hängen von Leistungsklasse und Funktionsumfang ab',
      },
      {
        spalte1: 'Speicher ergänzen',
        spalte2: 'mittlerer Aufwand',
        spalte3:
          'wirtschaftlich sinnvoll bei Umstellung auf Eigenverbrauch, setzt passende Technik und Platz im Zählerschrank voraus',
      },
      {
        spalte1: 'Modultausch',
        spalte2: 'projektabhängig',
        spalte3:
          'neue Module erfordern oft auch neue Unterkonstruktion, Verkabelung und ggf. Dachanpassungen',
      },
      {
        spalte1: 'Elektrik und Zählerschrank',
        spalte2: 'häufig unterschätzt',
        spalte3:
          'alte Zählerschränke entsprechen oft nicht mehr den aktuellen Anforderungen und müssen erweitert oder umgebaut werden',
      },
      {
        spalte1: 'Rückbau Altanlage',
        spalte2: 'fällt bei Modultausch an',
        spalte3:
          'Demontage, Abtransport und fachgerechte Entsorgung alter Module und Unterkonstruktion kosten Zeit und Geld',
      },
    ]),

    textBlock(
      h('h2', t('Wechselrichtertausch: Was kostet das als Einzelmaßnahme?')),
      p(
        t('Der Wechselrichtertausch ist die häufigste und oft auch die wirtschaftlich sinnvollste Repowering-Maßnahme. Wenn die Module noch brauchbar sind und das Dach in Ordnung ist, kann ein neuer Wechselrichter die Anlage für weitere Jahre tragfähig machen.'),
      ),
      p(
        t('Die Kosten hängen vor allem von der Leistungsklasse des Geräts, vom Funktionsumfang und vom Installationsaufwand ab. '),
        bold('Ein einfacher Tausch ohne weitere Anpassungen ist eine überschaubare Investition'),
        t('. Sobald allerdings Leitungswege geändert, die Absicherung angepasst oder ein Speicher vorbereitet werden muss, steigt der Aufwand.'),
      ),
      p(
        t('Wichtig ist dabei: Nicht jeder neue Wechselrichter passt zur alten Modulkonfiguration. Stringspannung, Leistung und Eingangswerte müssen geprüft werden – sonst wird aus einem einfachen Tausch ein größeres Projekt.'),
      ),
    ),

    tippBlock(
      'Beim Wechselrichtertausch gleich an den Speicher denken',
      p(
        t('Wer heute einen neuen Wechselrichter einbaut, sollte prüfen, ob ein Hybridwechselrichter mit Speichervorbereitung sinnvoll ist. So lässt sich ein Speicher später ohne zweiten Gerätetausch ergänzen.'),
      ),
    ),

    textBlock(
      h('h2', t('Modultausch: Wann lohnt sich der Aufwand?')),
      p(
        t('Der Tausch einzelner oder aller Module ist die aufwendigere Variante des Repowerings. Neben den Modulkosten selbst fallen fast immer weitere Posten an.'),
      ),
      p(
        t('Neue Module haben in der Regel andere Abmessungen als alte. Das bedeutet: '),
        bold('Die bestehende Unterkonstruktion passt meistens nicht und muss mit ausgetauscht werden'),
        t('. Dazu kommen neue Verkabelung, veränderte Stringkonfiguration und häufig auch ein neuer Wechselrichter.'),
      ),
      p(
        t('In der Summe kann ein vollständiger Modultausch mit Unterkonstruktion, Wechselrichter und Elektrik schnell in einen Kostenbereich kommen, der nicht mehr weit von einer komplett neuen Anlage entfernt liegt. Der Unterschied: Bei einer Neuanlage bekommt man ein durchgängig abgestimmtes System mit voller Garantie und maximaler Leistung.'),
      ),
      p(
        t('Ein Modultausch kann trotzdem sinnvoll sein – etwa wenn nur ein Teil der Module getauscht werden muss oder wenn die bestehende Unterkonstruktion noch passt. Aber die Kosten sollten ehrlich mit einer Neuanlage verglichen werden.'),
      ),
    ),

    hinweisBlock(
      'Modultausch ist selten nur ein Modultausch',
      p(
        t('Wer Module tauscht, tauscht in der Regel auch Unterkonstruktion, Verkabelung und häufig den Wechselrichter. Diese Folgekosten werden oft erst im Angebot sichtbar – oder noch später.'),
      ),
    ),

    textBlock(
      h('h2', t('Speicher ergänzen: Was kommt an Kosten dazu?')),
      p(
        t('Die Ergänzung eines Stromspeichers ist bei vielen Repowering-Projekten ein zentraler Baustein – vor allem, wenn die Anlage von Volleinspeisung auf Eigenverbrauch umgestellt werden soll.'),
      ),
      p(
        t('Die Kosten für den Speicher selbst hängen von der Kapazität ab. Dazu kommen aber regelmäßig Folgekosten, die oft vergessen werden:'),
      ),
      ul(
        p(t('Wechselrichtertausch, wenn das Bestandsgerät keine Speicheranbindung unterstützt')),
        p(t('Zählerschrankanpassung, wenn kein Platz oder keine passende Struktur vorhanden ist')),
        p(t('zusätzliche Elektrik und Absicherung')),
        p(t('ggf. neuer Zählerplatz oder Umbau der Verteilung')),
      ),
      p(
        bold('Der Speicher allein ist selten die ganze Rechnung'),
        t('. Erst wenn alle Folgekosten sauber berücksichtigt sind, lässt sich beurteilen, ob die Investition wirtschaftlich Sinn ergibt.'),
      ),
    ),

    textBlock(
      h('h2', t('Elektrik und Zählerschrank: Die versteckten Kostentreiber')),
      p(
        t('Bei fast jedem Repowering stellt sich früher oder später die Frage: Was macht die Elektrik? Und in welchem Zustand ist der Zählerschrank?'),
      ),
      p(
        t('Viele Zählerschränke in Häusern mit Anlagen aus den frühen 2000er-Jahren entsprechen nicht mehr den aktuellen technischen Anforderungen. '),
        bold('Sobald ein neuer Wechselrichter, ein Speicher oder eine geänderte Zählerstruktur dazukommt, muss der Schrank häufig angepasst oder erweitert werden'),
        t('.'),
      ),
      p(
        t('Auch die Leitungswege zwischen Dach, Wechselrichter und Zählerschrank können im Bestand aufwendiger sein als bei einem Neubau. Kabelkanäle, Durchbrüche und Absicherung kosten Zeit und Geld – und werden in Angeboten nicht immer sauber abgebildet.'),
      ),
      p(
        t('Diese Posten sind keine Nebenkosten. In manchen Projekten machen Elektrik und Zählerschrank einen erheblichen Anteil der Gesamtkosten aus.'),
      ),
    ),

    tabelleBlock('Häufig unterschätzte Kostenpositionen', [
      {
        spalte1: 'Zählerschrankumbau',
        spalte2: 'oft zwingend nötig',
        spalte3:
          'alte Schränke haben häufig zu wenig Platz, keine passenden Felder oder entsprechen nicht mehr den Vorgaben des Netzbetreibers',
      },
      {
        spalte1: 'Leitungswege',
        spalte2: 'im Bestand teurer',
        spalte3:
          'nachträgliche Kabelführung durch Bestandsgebäude ist aufwendiger als bei einem Neubau',
      },
      {
        spalte1: 'Absicherung',
        spalte2: 'technisch notwendig',
        spalte3:
          'neue Geräte erfordern häufig eine angepasste Absicherung und ggf. einen eigenen Stromkreis',
      },
      {
        spalte1: 'Rückbau und Entsorgung',
        spalte2: 'wird oft vergessen',
        spalte3:
          'Demontage alter Module, Wechselrichter und Unterkonstruktion verursacht Arbeitszeit, Transport- und Entsorgungskosten',
      },
      {
        spalte1: 'Anmeldung und Umregistrierung',
        spalte2: 'geringer Aufwand, aber nötig',
        spalte3:
          'Änderungen im Marktstammdatenregister und beim Netzbetreiber gehören zum Projekt und sollten von Anfang an mitgeplant werden',
      },
    ]),

    textBlock(
      h('h2', t('Ab wann wird ein Repowering teurer als eine Neuanlage?')),
      p(
        t('Diese Frage stellt sich in der Praxis häufiger, als man denkt. Denn ein Repowering mit mehreren Einzelmaßnahmen summiert sich schnell.'),
      ),
      p(
        t('Wenn Wechselrichter, Speicher, Zählerschrank und Teile der Elektrik getauscht werden müssen, bleibt als einziger verbliebener Bestandteil oft nur das Modulfeld – '),
        bold('mit reduzierter Leistung, begrenzter Restlaufzeit und ohne aktuelle Garantie'),
        t('.'),
      ),
      p(
        t('In dieser Situation lohnt sich der ehrliche Vergleich: Was kostet das Repowering im Gesamtpaket – und was würde eine komplett neue Anlage kosten, die technisch auf aktuellem Stand ist, volle Garantie mitbringt und deutlich mehr Leistung liefert?'),
      ),
      p(
        t('Das heißt nicht, dass ein Repowering grundsätzlich die schlechtere Wahl ist. Aber es heißt, dass '),
        bold('die Entscheidung auf einer ehrlichen Gesamtrechnung basieren sollte – nicht auf der Annahme, dass weniger Maßnahmen automatisch weniger kosten'),
        t('.'),
      ),
    ),

    tippBlock(
      'Immer das Gesamtpaket vergleichen',
      p(
        t('Wer mehrere Repowering-Maßnahmen kombiniert, sollte sich parallel ein Angebot für einen Neuaufbau erstellen lassen. Nur so wird sichtbar, ob das Repowering wirtschaftlich tatsächlich die bessere Option ist.'),
      ),
    ),

    textBlock(
      h('h2', t('Typische Kostenfehler beim Repowering')),
      p(
        t('In der Praxis beobachten wir beim Thema Repowering-Kosten immer wieder dieselben Fehleinschätzungen.'),
      ),
      ul(
        p(t('nur den Gerätepreis betrachten und Montage, Elektrik und Zählerschrank ausblenden')),
        p(t('Repowering pauschal als günstiger einordnen, ohne die Summe der Einzelmaßnahmen ehrlich durchzurechnen')),
        p(t('den Rückbau alter Komponenten nicht einkalkulieren')),
        p(t('den Zählerschrank erst beim Installationstermin als Problem erkennen')),
        p(t('Angebote nur über die Endsumme vergleichen, ohne den Leistungsumfang zu prüfen')),
        p(t('die Kosten einer Neuanlage nicht als Vergleichswert heranziehen')),
      ),
      p(
        t('Wer diese Punkte vor der Entscheidung sauber klärt, vermeidet Überraschungen und bekommt eine belastbare Grundlage für den Vergleich.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die Kosten eines Repowerings lassen sich nicht auf eine pauschale Zahl reduzieren. Sie hängen vom konkreten Umfang ab – und der reicht vom einfachen Wechselrichtertausch bis zum nahezu vollständigen Neuaufbau.'),
      ),
      p(
        t('Wichtig ist, die Kosten nicht isoliert zu betrachten, sondern im Verhältnis zu Leistung, Restlaufzeit und Zukunftssicherheit. Ein günstiges Repowering auf einer schwachen Basis kann am Ende teurer sein als eine saubere Neuanlage.'),
      ),
      p(
        bold('Die ehrliche Kostenfrage beim Repowering lautet nicht nur: Was kostet es? Sondern: Was bekomme ich dafür – und wie steht das im Verhältnis zu den Alternativen?'),
      ),
    ),

    ctaBlock({
      titel: 'Repowering-Kosten ehrlich einordnen lassen',
      text:
        'Wir bewerten deine bestehende Anlage, klären den realistischen Umfang und stellen die Kosten transparent neben eine Neuanlage – damit du eine belastbare Entscheidung treffen kannst.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was kostet ein Repowering einer Solaranlage?',
      'Das hängt stark vom Umfang ab. Ein reiner Wechselrichtertausch ist eine überschaubare Investition. Ein Komplett-Repowering mit Modultausch, Speicher, Elektrik und Zählerschrank bewegt sich kostenmäßig in der Nähe einer Neuanlage.',
    ),
    faqItem(
      'Was kostet ein Wechselrichtertausch bei einer alten Anlage?',
      'Die Kosten hängen von Leistungsklasse, Funktionsumfang und Installationsaufwand ab. Sobald Leitungswege angepasst oder ein Speicher vorbereitet werden soll, steigt der Aufwand über den reinen Gerätepreis hinaus.',
    ),
    faqItem(
      'Ist ein Repowering immer günstiger als eine Neuanlage?',
      'Nein. Wenn mehrere Maßnahmen kombiniert werden, kann die Summe nah an eine Neuanlage herankommen – bei weniger Leistung und kürzerer Restlaufzeit. Deshalb lohnt sich ein ehrlicher Gesamtvergleich.',
    ),
    faqItem(
      'Welche Kosten werden beim Repowering häufig vergessen?',
      'Vor allem Zählerschrankumbau, Elektrik, Rückbau und Entsorgung alter Komponenten sowie die Anmeldung beim Netzbetreiber und Marktstammdatenregister.',
    ),
    faqItem(
      'Lohnt sich ein Speicher bei einem Repowering?',
      'Das hängt vom Eigenverbrauchspotenzial und von der vorhandenen Technik ab. Ein Speicher kann die Wirtschaftlichkeit deutlich verbessern – aber nur, wenn Wechselrichter, Zählerschrank und Elektrik dazu passen.',
    ),
    faqItem(
      'Wie kann ich Repowering-Angebote sinnvoll vergleichen?',
      'Nicht über die Endsumme allein, sondern über den enthaltenen Leistungsumfang. Und idealerweise mit einer Neuanlage als Vergleichswert, um die Verhältnismäßigkeit einordnen zu können.',
    ),
  ],
}

await upsertRatgeberArticle(article)
