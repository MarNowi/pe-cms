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
  titel: 'Typische Fehler beim Repowering: Was viele falsch einschätzen',
  slug: 'typische-fehler-beim-repowering',
  kategorie: 'repowering',
  status: 'veroeffentlicht',
  teaser:
    'Beim Repowering einer alten Solaranlage passieren viele Fehler nicht auf dem Dach, sondern in der Einordnung vorher. Wer Modulzustand, Dach, Elektrik oder Wirtschaftlichkeit falsch einschätzt, zahlt am Ende mehr als nötig.',
  lesezeit: 11,

  seo: seo(
    'Typische Fehler beim Repowering einer Solaranlage | PEAK.Energy',
    'Typische Fehler beim Repowering: ehrliche Einordnung zu Modulbewertung, Dach, Elektrik, Zählerschrank, Kosten und Planung – praxisnah von PEAK.Energy.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Die meisten Fehler beim Repowering entstehen nicht bei der Montage, sondern in der Planung und Einordnung davor.'),
    ),
    summaryPoint(
      bold('Besonders häufig werden Modulzustand, Dach, Elektrik und Wirtschaftlichkeit falsch eingeschätzt'),
      t(' – oft nicht aus Unwissen, sondern weil bestimmte Punkte zu früh als geklärt abgehakt werden.'),
    ),
    summaryPoint(
      t('Auch die Erwartungshaltung spielt eine Rolle. Wer ein Repowering nur als günstigen Auffrischer versteht, übersieht oft den tatsächlichen Projektumfang.'),
    ),
    summaryPoint(
      t('Wer die typischen Fehler kennt, kann sie vermeiden – und trifft am Ende eine deutlich belastbarere Entscheidung.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum beim Repowering so viel schiefgehen kann')),
      p(
        t('Repowering klingt erstmal überschaubar: alte Komponenten raus, neue rein, Anlage läuft wieder. In der Praxis ist es aber deutlich komplexer – '),
        bold('weil jedes Repowering-Projekt auf einem Bestand aufsetzt, der selten so einfach ist, wie er aussieht'),
        t('.'),
      ),
      p(
        t('Anders als bei einer Neuanlage auf einem leeren Dach müssen beim Repowering alte Technik, bestehende Elektrik, gewachsene Strukturen und die Eigenheiten des Gebäudes berücksichtigt werden. Und genau in dieser Komplexität stecken die meisten Fehler.'),
      ),
      p(
        t('Die gute Nachricht: Die häufigsten Fehler sind bekannt und vermeidbar – wenn man sie vorher kennt und ehrlich hinschaut.'),
      ),
    ),

    textBlock(
      h('h2', t('Fehler 1: Den Modulzustand überschätzen')),
      p(
        t('Der mit Abstand häufigste Fehler: Die alten Module werden als „noch gut" eingestuft, weil die Anlage „ja noch läuft". Das ist zwar nicht falsch – aber es ist auch kein Qualitätsurteil.'),
      ),
      p(
        t('Module degradieren über die Jahre. Nach 15 bis 20 Jahren kann die reale Leistung deutlich unter dem liegen, was das Datenblatt verspricht. Dazu kommen mögliche Mikrorisse, Hotspots, verfärbte Zellen oder nachlassende Kontaktierungen, die von außen nicht sichtbar sind.'),
      ),
      p(
        bold('„Läuft noch" ist keine belastbare Aussage über den Zustand'),
        t('. Wer auf dieser Grundlage ein Repowering plant – etwa einen teuren Speicher ergänzt – investiert möglicherweise in eine Basis, die in wenigen Jahren am Ende ist.'),
      ),
    ),

    tippBlock(
      'Modulzustand professionell prüfen lassen',
      p(
        t('Wer ehrlich wissen will, wie viel Restleistung die alten Module noch bringen, sollte sich nicht auf Sichtprüfung oder Bauchgefühl verlassen. Eine Ertragsanalyse oder Thermografie-Aufnahme liefert eine deutlich bessere Grundlage.'),
      ),
    ),

    textBlock(
      h('h2', t('Fehler 2: Das Dach ausblenden')),
      p(
        t('Das Dach wird beim Repowering erstaunlich oft ignoriert. Die Logik: „Die Module lagen 20 Jahre drauf, also wird das Dach schon passen." Das kann stimmen – muss es aber nicht.'),
      ),
      p(
        t('Unter den Modulen ist die Eindeckung über Jahre der Witterung und den Belastungen durch die Unterkonstruktion ausgesetzt. Ziegel können porös geworden sein, Abdichtungen undicht, Lattung weich. '),
        bold('Wer neue Module auf ein sanierungsbedürftiges Dach legt, baut das Problem nur ein'),
        t('.'),
      ),
      p(
        t('Noch kritischer wird es, wenn eine Dachsanierung in den nächsten Jahren ohnehin ansteht. Dann müssten die frisch montierten Module wieder abgebaut und nach der Sanierung erneut aufgebaut werden – mit doppeltem Aufwand und doppelten Kosten.'),
      ),
    ),

    hinweisBlock(
      'Dachsanierung und Repowering zusammen denken',
      p(
        t('Wer weiß, dass das Dach in absehbarer Zeit gemacht werden muss, sollte das Repowering nicht isoliert planen. Beides zusammen zu denken spart am Ende fast immer Geld und Aufwand.'),
      ),
    ),

    textBlock(
      h('h2', t('Fehler 3: Elektrik und Zählerschrank vergessen')),
      p(
        t('Elektrik und Zählerschrank gehören zu den am häufigsten unterschätzten Themen beim Repowering. Viele gehen davon aus, dass der alte Zählerschrank „einfach passt" – und werden erst bei der Installation überrascht.'),
      ),
      p(
        t('In der Realität sieht das oft anders aus: Alte Zählerschränke haben zu wenig Platz, nicht die richtigen Felder, keine passende Absicherung oder entsprechen nicht mehr den aktuellen Vorgaben des Netzbetreibers.'),
      ),
      p(
        t('Sobald ein neuer Wechselrichter, ein Speicher oder eine geänderte Zählerstruktur dazukommt, '),
        bold('muss der Zählerschrank häufig erweitert oder komplett umgebaut werden'),
        t('. Das kostet nicht nur Geld, sondern auch Zeit – und steht im schlimmsten Fall erst fest, wenn der Installateur vor Ort ist.'),
      ),
    ),

    tabelleBlock('Elektrik-Probleme, die beim Repowering häufig auftreten', [
      {
        spalte1: 'Zählerschrank zu klein',
        spalte2: 'sehr häufig',
        spalte3:
          'alte Schränke bieten oft keinen Platz für zusätzliche Zählerfelder, Überspannungsschutz oder Speicherabsicherung',
      },
      {
        spalte1: 'Absicherung veraltet',
        spalte2: 'sicherheitsrelevant',
        spalte3:
          'neue Geräte erfordern häufig eine angepasste Absicherung, die im alten System nicht vorgesehen ist',
      },
      {
        spalte1: 'Leitungswege ungeeignet',
        spalte2: 'im Bestand aufwendig',
        spalte3:
          'nachträgliche Kabelführung durch ein bestehendes Gebäude ist teurer und zeitintensiver als bei einem Neubau',
      },
      {
        spalte1: 'Netzbetreibervorgaben geändert',
        spalte2: 'oft übersehen',
        spalte3:
          'die technischen Anschlussbedingungen können sich seit der Erstinstallation geändert haben und erfordern Anpassungen',
      },
    ]),

    textBlock(
      h('h2', t('Fehler 4: Einen Speicher ergänzen, ohne die Technik zu prüfen')),
      p(
        t('Die Idee klingt einfach: alte Anlage weiternutzen und einen Speicher dazustellen, um den Eigenverbrauch zu steigern. In der Praxis scheitert das aber regelmäßig an der vorhandenen Technik.'),
      ),
      p(
        t('Nicht jeder alte Wechselrichter unterstützt eine Speicheranbindung. Viele Geräte aus den 2000er-Jahren haben weder die nötige Schnittstelle noch die passende Regelung. '),
        bold('Wer einen Speicher ergänzen will, muss in diesen Fällen auch den Wechselrichter tauschen'),
        t(' – was den Aufwand und die Kosten deutlich verändert.'),
      ),
      p(
        t('Auch die Frage, ob der Zählerschrank die neue Konfiguration abbilden kann, wird häufig erst im Nachhinein gestellt. Der Speicher allein löst das Problem nicht, wenn die technische Basis drum herum nicht passt.'),
      ),
    ),

    tippBlock(
      'Speicher nicht isoliert betrachten',
      p(
        t('Ein Speicher macht nur dann Sinn, wenn Wechselrichter, Zählerschrank und Elektrik dazu passen. Wer den Speicher als Einzelmaßnahme plant, übersieht oft den tatsächlichen Projektumfang.'),
      ),
    ),

    textBlock(
      h('h2', t('Fehler 5: Die Wirtschaftlichkeit schönrechnen')),
      p(
        t('Beim Repowering wird die Wirtschaftlichkeit häufig zu optimistisch dargestellt – entweder vom Anbieter oder vom Hausbesitzer selbst.'),
      ),
      p(
        t('Typische Denkfehler dabei:'),
      ),
      ul(
        p(t('die Restlaufzeit der alten Module wird zu hoch angesetzt')),
        p(t('der Eigenverbrauch wird optimistisch geschätzt, ohne das reale Nutzungsverhalten zu prüfen')),
        p(t('Folgekosten für Elektrik, Zählerschrank oder Anpassungen werden nicht eingerechnet')),
        p(t('die Kosten werden nicht mit einer Neuanlage verglichen, die deutlich mehr Leistung und längere Laufzeit bieten würde')),
      ),
      p(
        bold('Eine ehrliche Wirtschaftlichkeitsbetrachtung rechnet nicht mit Wunschwerten, sondern mit realistischen Annahmen'),
        t(' – zu Ertrag, Eigenverbrauch, Restlaufzeit und Gesamtkosten.'),
      ),
    ),

    textBlock(
      h('h2', t('Fehler 6: Anmeldung und Formalitäten unterschätzen')),
      p(
        t('Repowering ist nicht nur ein technisches Projekt. Je nach Umfang verändert sich die Anlagenkonfiguration – und das hat Konsequenzen für die Anmeldung im Marktstammdatenregister, die Vergütungssituation und unter Umständen auch die steuerliche Behandlung.'),
      ),
      p(
        t('In der Praxis wird dieser Punkt häufig zu spät bearbeitet. Die Anlage ist technisch fertig, aber die formale Seite ist unklar. '),
        bold('Das kann dazu führen, dass die Inbetriebnahme sich verzögert oder die Vergütung nicht wie erwartet greift'),
        t('.'),
      ),
      p(
        t('Auch die Frage, ob die alte Anlage als Bestandsanlage weitergeführt oder durch eine neue Konfiguration ersetzt wird, sollte vor dem Projekt geklärt werden – nicht als Nachgedanke.'),
      ),
    ),

    hinweisBlock(
      'Formales gehört in die Planung, nicht in die Nachbereitung',
      p(
        t('Anmeldung, Vergütung und steuerliche Einordnung sollten vor Projektstart geklärt werden. Wer das erst danach macht, riskiert Verzögerungen und im schlimmsten Fall finanzielle Nachteile.'),
      ),
    ),

    textBlock(
      h('h2', t('Fehler 7: Repowering ohne Zukunftsperspektive planen')),
      p(
        t('Ein Repowering wird oft rein auf den aktuellen Zustand ausgelegt: Was ist jetzt kaputt, was muss jetzt getauscht werden? Das ist nachvollziehbar – aber zu kurz gedacht.'),
      ),
      p(
        t('Wer in den nächsten Jahren eine Wärmepumpe, eine Wallbox oder ein E-Auto anschaffen will, braucht unter Umständen deutlich mehr PV-Leistung als die alte Anlage liefern kann. '),
        bold('Wird das nicht von Anfang an mitgedacht, muss unter Umständen wenige Jahre nach dem Repowering erneut umgebaut werden'),
        t('.'),
      ),
      p(
        t('Deshalb sollte die Frage bei jedem Repowering lauten: Was brauche ich heute – und was könnte in den nächsten 10 bis 15 Jahren dazukommen? Nur so entsteht eine Lösung, die nicht nur heute, sondern auch mittelfristig Bestand hat.'),
      ),
    ),

    tabelleBlock('Sieben typische Fehler beim Repowering auf einen Blick', [
      {
        spalte1: 'Modulzustand überschätzen',
        spalte2: 'sehr häufig',
        spalte3:
          '„läuft noch" ist kein belastbares Qualitätsurteil – reale Leistung prüfen lassen',
      },
      {
        spalte1: 'Dach ausblenden',
        spalte2: 'teuer bei Fehleinschätzung',
        spalte3:
          'wer das Dach ignoriert, riskiert doppelten Aufwand bei späterer Sanierung',
      },
      {
        spalte1: 'Elektrik und Zählerschrank vergessen',
        spalte2: 'häufigster versteckter Kostentreiber',
        spalte3:
          'alte Zählerschränke passen selten ohne Anpassung zur neuen Konfiguration',
      },
      {
        spalte1: 'Speicher ohne Technikprüfung ergänzen',
        spalte2: 'führt zu Folgeproblemen',
        spalte3:
          'ohne passenden Wechselrichter und Zählerschrank funktioniert die Speicheranbindung nicht sauber',
      },
      {
        spalte1: 'Wirtschaftlichkeit schönrechnen',
        spalte2: 'verzerrt die Entscheidung',
        spalte3:
          'realistische Annahmen zu Restlaufzeit, Eigenverbrauch und Gesamtkosten sind entscheidend',
      },
      {
        spalte1: 'Formalitäten unterschätzen',
        spalte2: 'verzögert das Projekt',
        spalte3:
          'Anmeldung, Vergütung und steuerliche Fragen gehören in die Planung, nicht in die Nachbereitung',
      },
      {
        spalte1: 'Ohne Zukunftsperspektive planen',
        spalte2: 'kurzsichtig',
        spalte3:
          'wer Wärmepumpe, Wallbox oder E-Auto nicht mitdenkt, plant heute unter Umständen zu knapp',
      },
    ]),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die typischen Fehler beim Repowering sind keine Exoten – sie passieren in der Praxis regelmäßig. Und sie entstehen fast nie auf dem Dach, sondern in der Einordnung und Planung vorher.'),
      ),
      p(
        t('Wer den Modulzustand realistisch bewertet, das Dach mitdenkt, Elektrik und Zählerschrank frühzeitig prüft, die Wirtschaftlichkeit ehrlich rechnet und auch die nächsten Jahre miteinbezieht, vermeidet die teuersten Fehler.'),
      ),
      p(
        bold('Gutes Repowering beginnt nicht mit einem Angebot, sondern mit einer sauberen Bestandsaufnahme'),
        t('. Wer dort ehrlich hinschaut, trifft am Ende die bessere Entscheidung – ob das nun ein gezielter Eingriff, ein Neuaufbau oder ein bewusster Weiterbetrieb ist.'),
      ),
    ),

    ctaBlock({
      titel: 'Repowering sauber planen statt typische Fehler machen',
      text:
        'Wir schauen uns deine bestehende Anlage, das Dach, die Elektrik und deine Zukunftspläne ehrlich an – damit du nicht in die üblichen Fallen tappst.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist der häufigste Fehler beim Repowering?',
      'Den Modulzustand zu überschätzen. Viele Hausbesitzer gehen davon aus, dass die Anlage noch gut ist, weil sie läuft. Die reale Leistung kann aber deutlich unter dem liegen, was das Datenblatt verspricht.',
    ),
    faqItem(
      'Warum sollte man das Dach vor dem Repowering prüfen?',
      'Weil ein sanierungsbedürftiges Dach dazu führen kann, dass die frisch montierte Anlage wenige Jahre später wieder abgebaut werden muss. Dach und Repowering sollten zusammen gedacht werden.',
    ),
    faqItem(
      'Passt jeder Speicher zu einer alten Anlage?',
      'Nein. Viele alte Wechselrichter unterstützen keine Speicheranbindung. In diesen Fällen muss auch der Wechselrichter getauscht werden, was den Projektumfang und die Kosten verändert.',
    ),
    faqItem(
      'Warum wird der Zählerschrank beim Repowering zum Problem?',
      'Weil alte Zählerschränke häufig zu wenig Platz, keine passenden Felder oder eine veraltete Absicherung haben. Sobald neue Geräte dazukommen, muss der Schrank oft erweitert oder umgebaut werden.',
    ),
    faqItem(
      'Sollte man beim Repowering auch an die nächsten Jahre denken?',
      'Unbedingt. Wer Wärmepumpe, Wallbox oder E-Auto plant, braucht unter Umständen mehr Leistung als die alte Anlage liefern kann. Das sollte von Anfang an mitgedacht werden.',
    ),
    faqItem(
      'Wie vermeidet man die typischen Fehler beim Repowering?',
      'Durch eine saubere Bestandsaufnahme vor dem Angebot: Modulzustand, Dach, Elektrik, Zählerschrank, Wirtschaftlichkeit und Zukunftsperspektive ehrlich bewerten – und erst dann entscheiden.',
    ),
  ],
}

await upsertRatgeberArticle(article)
