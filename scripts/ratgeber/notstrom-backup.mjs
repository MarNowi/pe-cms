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
  titel: 'Notstrom und Backup nachrüsten: Was beim Repowering möglich wird',
  slug: 'notstrom-backup',
  kategorie: 'repowering',
  status: 'veroeffentlicht',
  teaser:
    'Eine klassische PV-Anlage schaltet bei Stromausfall ab – ausgerechnet dann, wenn man sie am dringendsten bräuchte. Beim Repowering lässt sich das ändern: vom Notstrom an der Steckdose bis zur automatischen Ersatzstromversorgung fürs ganze Haus. Was geht, was es braucht und was realistisch ist.',
  lesezeit: 7,
  seo: seo(
    'Notstrom & Ersatzstrom bei PV nachrüsten: Möglichkeiten | PEAK.Energy',
    'Notstrom oder Ersatzstrom nachrüsten: Warum alte PV-Anlagen bei Blackout abschalten, welche Technik Backup-Fähigkeit bringt (Hybrid-WR, Umschalteinrichtung, schwarzstartfähiger Speicher) und was realistisch versorgt werden kann.',
  ),
  zusammenfassung: [
    summaryPoint(
      t('Ohne Speicher und Backup-Technik schaltet jede netzgekoppelte PV-Anlage bei Stromausfall ab – '),
      bold('das ist Vorschrift'),
      t(' (Netzschutz), kein Defekt.'),
    ),
    summaryPoint(
      bold('Notstrom'),
      t(' heißt: eine versorgte Steckdose am Speicher, manuell genutzt. '),
      bold('Ersatzstrom'),
      t(' heißt: automatische Umschaltung, das Haus läuft weiter – inklusive PV-Nachladung im Inselbetrieb.'),
    ),
    summaryPoint(
      t('Voraussetzung ist ein '),
      bold('backupfähiger Hybrid-Wechselrichter mit schwarzstartfähigem Speicher'),
      t(' und – für Ersatzstrom – eine Umschalteinrichtung im Zählerschrank.'),
    ),
    summaryPoint(
      t('Realistische Erwartung: Grundversorgung über Stunden bis Tage – nicht der Durchlauferhitzer und nicht die Sauna.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Warum die Anlage beim Blackout dunkel bleibt')),
      p(
        t('Der häufigste Irrtum bei Altanlagen: „Ich habe doch Solar – bei Stromausfall bin ich versorgt." Das Gegenteil ist der Fall. Netzgekoppelte Wechselrichter müssen sich bei Netzausfall sofort abschalten, damit sie keine Spannung in ein Netz einspeisen, an dem gerade Monteure arbeiten. Ohne Zusatztechnik ist die PV-Anlage beim Blackout schlicht aus – egal wie die Sonne scheint.'),
      ),
      p(
        t('Backup-Fähigkeit ist also keine Selbstverständlichkeit, sondern eine bewusste Systementscheidung: Es braucht einen Speicher als Puffer, einen Wechselrichter, der ein eigenes Inselnetz aufbauen kann, und eine saubere Trennung vom öffentlichen Netz. Genau diese Weichen lassen sich beim Repowering stellen – wenn ohnehin Wechselrichter oder Speicher neu geplant werden.'),
      ),
    ),
    textBlock(
      h('h2', t('Notstrom oder Ersatzstrom: Zwei sehr verschiedene Lösungen')),
      ul(
        p(
          bold('Notstrom (Basis):'),
          t(' Der Speicher oder Wechselrichter stellt eine oder mehrere Notstrom-Steckdosen bereit. Bei Netzausfall steckt man um: Kühlschrank, Router, Handyladung. Einfach, günstig – aber manuell, mit begrenzter Leistung und ohne Versorgung der Hausinstallation.'),
        ),
        p(
          bold('Ersatzstrom (Komfort):'),
          t(' Eine Umschalteinrichtung trennt das Haus bei Netzausfall automatisch vom Netz, der Wechselrichter baut binnen Sekunden ein Inselnetz auf, und die Hausinstallation läuft weiter – Licht, Heizungssteuerung, Kühlgeräte. Gute Systeme laden den Speicher im Inselbetrieb aus der PV nach und überstehen so auch längere Ausfälle.'),
        ),
      ),
      p(
        t('Die begriffliche Feinabgrenzung und die Technik dahinter erklären wir ausführlich im Ratgeber „Notstrom oder Ersatzstrom: Was ist der Unterschied?" – hier geht es um die Nachrüst-Perspektive: Was braucht die Altanlage dafür?'),
      ),
    ),
    tabelleBlock('Was die Nachrüstung braucht', [
      {
        spalte1: 'Backupfähiger Hybrid-Wechselrichter',
        spalte2: 'Pflicht für beide Varianten',
        spalte3: 'Nicht jeder Hybrid kann Inselbetrieb – das Datenblatt entscheidet, nicht der Prospekt',
      },
      {
        spalte1: 'Schwarzstartfähiger Speicher',
        spalte2: 'Pflicht',
        spalte3: 'Der Speicher muss das Inselnetz ohne Netzspannung starten können – und eine Notreserve vorhalten',
      },
      {
        spalte1: 'Umschalteinrichtung im Zählerschrank',
        spalte2: 'Für Ersatzstrom',
        spalte3: 'Trennt allpolig vom Netz; Einbau und Anmeldung durch den Elektrofachbetrieb',
      },
      {
        spalte1: 'PV-Nachladung im Inselbetrieb',
        spalte2: 'Dringend empfohlen',
        spalte3: 'Erst damit übersteht das System mehrtägige Ausfälle – sonst ist nach einer Speicherladung Schluss',
      },
      {
        spalte1: 'Lastkonzept',
        spalte2: 'Immer sinnvoll',
        spalte3: 'Festlegen, was im Inselbetrieb läuft – Großverbraucher bleiben außen vor',
      },
    ]),
    hinweisBlock(
      'Realistische Erwartungen: Grundversorgung, nicht Normalbetrieb',
      p(
        t('Ein Heimspeicher mit 10 kWh und begrenzter Entladeleistung versorgt Kühlgeräte, Licht, Kommunikation und Heizungssteuerung problemlos über Stunden bis Tage – besonders mit PV-Nachladung. Er versorgt nicht: Durchlauferhitzer, Elektroherd auf allen Platten, Sauna oder das ladende E-Auto. Wer Ersatzstrom plant, plant deshalb immer auch, welche Stromkreise im Inselbetrieb aktiv bleiben. Genau diese Priorisierung ist Teil der Auslegung.'),
      ),
    ),
    tippBlock(
      'Der günstigste Zeitpunkt ist der Systemwechsel',
      p(
        t('Backup-Fähigkeit nachträglich in ein bestehendes Speichersystem zu bauen ist oft teuer oder unmöglich, wenn Wechselrichter oder Speicher sie nicht vorsehen. Beim Repowering – wenn Wechselrichter-Tausch oder Speicher-Nachrüstung ohnehin anstehen – kostet die richtige Geräteauswahl dagegen wenig Aufpreis. Wer die Option auch nur erwägt, sollte sie bei der Systemauswahl festschreiben: backupfähig und schwarzstartfähig sind Datenblatt-Kriterien, keine Nachrüst-Features.'),
      ),
    ),
    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Backup-Fähigkeit ist der Punkt, an dem aus der Renditeanlage ein Stück Versorgungssicherheit wird. Ob einem das eine Notstromsteckdose wert ist oder die automatische Vollversorgung, ist eine persönliche Abwägung – die Technik dafür ist ausgereift und beim Repowering mit überschaubarem Mehraufwand zu haben.'),
      ),
      p(
        bold('Wichtig ist die ehrliche Auslegung'),
        t(': klare Ansage, welche Lasten im Inselbetrieb laufen, wie lange die Reserve trägt und was das System nicht kann. Ein Backup, das beim ersten Ernstfall überlastet abschaltet, ist keins – deshalb planen wir Ersatzstrom immer vom Lastkonzept her, nicht vom Prospektversprechen.'),
      ),
    ),
    ctaBlock({
      titel: 'Backup-Fähigkeit prüfen lassen',
      text:
        'Wir prüfen, was Ihre Anlage für Not- oder Ersatzstrom braucht, und planen Speicher, Wechselrichter und Umschalteinrichtung als stimmiges System – inklusive Lastkonzept.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Kann ich Notstrom auch ohne neuen Wechselrichter nachrüsten?',
      'Teilweise: AC-gekoppelte Speichersysteme mit eigener Backup-Funktion lassen sich neben dem bestehenden PV-Wechselrichter installieren. Ob die Altanlage im Inselbetrieb nachladen kann, hängt dann vom Zusammenspiel der Geräte ab – das prüfen wir vor der Auslegung.',
    ),
    faqItem(
      'Wie lange hält ein 10-kWh-Speicher bei Stromausfall?',
      'Bei reiner Grundversorgung (Kühlgeräte, Licht, Router, Heizungssteuerung – zusammen grob 200–500 W) rechnerisch ein bis zwei Tage. Mit PV-Nachladung im Inselbetrieb deutlich länger, im Sommer quasi unbegrenzt. Mit Großverbrauchern schrumpft die Zeit auf Stunden – deshalb gehört das Lastkonzept zur Planung.',
    ),
    faqItem(
      'Schaltet das Ersatzstromsystem automatisch um?',
      'Ja – das ist der Kern der Ersatzstromlösung. Die Umschalteinrichtung erkennt den Netzausfall, trennt das Haus allpolig vom Netz und der Wechselrichter baut das Inselnetz auf; je nach System in Sekundenbruchteilen bis wenigen Sekunden. Bei Netzwiederkehr wird automatisch zurückgeschaltet.',
    ),
    faqItem(
      'Läuft meine Wärmepumpe im Ersatzstrombetrieb weiter?',
      'Die Steuerung und Umwälzpumpen problemlos – der Verdichter ist die Streitfrage: Sein Anlaufstrom und seine Leistung überfordern kleinere Backup-Systeme. Bei entsprechend dimensioniertem Speicher und Wechselrichter ist auch Wärmepumpenbetrieb möglich; das muss aber explizit so ausgelegt werden.',
    ),
  ],
}

await upsertRatgeberArticle(article)
