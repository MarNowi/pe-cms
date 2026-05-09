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
  titel: 'Wärmepumpe Förderung 2026: Was BEG und KfW wirklich bieten',
  slug: 'waermepumpe-foerderung-2026',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Bis zu 70 % Zuschuss für eine neue Wärmepumpe – das stimmt, aber nur unter bestimmten Voraussetzungen. Wer KfW 458, Klimageschwindigkeitsbonus, Einkommensbonus und Effizienzbonus richtig einordnet, weiß realistisch, was im eigenen Fall ankommt.',
  lesezeit: 11,

  seo: seo(
    'Wärmepumpe Förderung 2026: KfW 458 erklärt | PEAK.Energy',
    'Wärmepumpe Förderung 2026: KfW 458, Klimageschwindigkeitsbonus, Einkommensbonus, Effizienzbonus, Antrag und typische Fehler – ehrliche Einordnung der BEG-Förderung.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Die Wärmepumpen-Förderung läuft 2026 über '),
      bold('KfW 458 (BEG Heizungsförderung)'),
      t(' – Zuschuss, kein Kredit. Maximal 70 % der förderfähigen Kosten, gedeckelt auf 30.000 € pro Wohneinheit. Das sind bis zu 21.000 € Zuschuss.'),
    ),
    summaryPoint(
      t('Die 70 % entstehen durch Kombination von Bausteinen: Grundförderung 30 %, Klimageschwindigkeitsbonus 20 %, Einkommensbonus 30 %, Effizienzbonus 5 %. Rechnerisch ergibt das 85 % – '),
      bold('die KfW kappt aber bei 70 %'),
      t('.'),
    ),
    summaryPoint(
      t('Der Klimageschwindigkeitsbonus ist '),
      bold('bis Ende 2028 in voller Höhe'),
      t(' verfügbar – ab 2029 schmilzt er alle zwei Jahre um 3 Prozentpunkte ab.'),
    ),
    summaryPoint(
      t('Antrag '),
      bold('vor Auftragserteilung'),
      t(' – das ist der häufigste Fehler. Wer in der falschen Reihenfolge vorgeht, verliert den Anspruch komplett.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('„Bis zu 70 % Förderung für eine Wärmepumpe" – so steht es in Werbeanzeigen, in Beratungsgesprächen, auf Anbieter-Websites. Stimmt das? Ja, aber mit Bedingungen. Die 70 % sind das obere Maximum, das nur erreicht, wer drei Boni gleichzeitig in Anspruch nehmen kann. Im Standardfall liegt die Förderung deutlich darunter – aber sie ist trotzdem substantiell.'),
      ),
      p(
        t('Seit der BEG-Reform Anfang 2024 ist die Förderlandschaft für Heizungen klar strukturiert. '),
        bold('KfW 458'),
        t(' (Heizungsförderung für Privatpersonen – Wohngebäude) ist 2026 das zentrale Programm. Es ersetzt die früheren BAFA-Heizungsprogramme. Das BAFA bleibt zuständig für Gebäudehülle (Dämmung, Fenster, Lüftung), die Heizung selbst läuft über die KfW als '),
        bold('Zuschuss, nicht als Kredit'),
        t('. Geld, das nicht zurückgezahlt werden muss.'),
      ),
      p(
        t('Wer eine Wärmepumpe plant, sollte das Förderverfahren von Anfang an mitdenken. Nicht erst, wenn das Angebot vom Heizungsbauer auf dem Tisch liegt – sonst ist der Zug oft schon abgefahren.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie sich die 70 % zusammensetzen')),
      p(
        t('Die KfW-Heizungsförderung ist kein einzelner Topf. Sie ist ein System aus vier Bausteinen, die kombiniert werden können – mit einer harten Obergrenze.'),
      ),
      p(
        bold('Grundförderung: 30 %'),
        t('. Diese bekommt jeder, der in einem bestehenden Wohngebäude (Bauantrag mindestens 5 Jahre alt) seine Heizung gegen eine Wärmepumpe austauscht. Voraussetzungen: zertifiziertes Gerät auf der KfW-Liste, Mindesteffizienz erfüllt, hydraulischer Abgleich nach Verfahren B durchgeführt. Im Neubau gibt es diese Förderung nicht.'),
      ),
      p(
        bold('Klimageschwindigkeitsbonus: +20 %'),
        t('. Greift beim Austausch einer fossilen Bestandsheizung – also Öl, Gas (mind. 20 Jahre alt) oder Nachtspeicher. Voll bis Ende 2028, '),
        bold('ab 2029 schmilzt der Bonus alle zwei Jahre um 3 Prozentpunkte'),
        t(' und ist 2035 vollständig weg. Nur Selbstnutzer.'),
      ),
      p(
        bold('Einkommensbonus: +30 %'),
        t('. Für Selbstnutzer mit einem zu versteuernden Haushaltseinkommen von maximal 40.000 € pro Jahr. Nachweis über die Einkommenssteuerbescheide der zweit- und drittletzten Jahre.'),
      ),
      p(
        bold('Effizienzbonus: +5 %'),
        t('. Für besonders effiziente Wärmepumpen – Wasser, Erdreich oder Abwasser als Wärmequelle, oder Luft-Wasser-Geräte mit natürlichem Kältemittel (typisch R290/Propan).'),
      ),
      p(
        bold('Wichtig:'),
        t(' Rechnet man alles zusammen, kommt man auf 85 %. Die KfW kappt das aber automatisch '),
        bold('auf 70 %'),
        t('. Das ist der harte Deckel. Wer den Maximalförderbetrag erreichen will, muss kein Mathematiker sein, sondern nur die richtige Kombination treffen.'),
      ),
    ),

    tabelleBlock('Förderbeispiele 2026 (Einfamilienhaus, 28.000 € Investition)', [
      {
        spalte1: 'Standardfall',
        spalte2: 'Grundförderung 30 %',
        spalte3:
          'Bei reinem Heizungstausch ohne fossile Altanlage und ohne Einkommensgrenze – Zuschuss 8.400 € auf 28.000 €',
      },
      {
        spalte1: 'Ölheizung raus, Luft-WP rein',
        spalte2: '30 % + 20 % = 50 %',
        spalte3:
          'Klassischer Klimageschwindigkeitsbonus-Fall – Zuschuss 14.000 € auf 28.000 €. Solange bis Ende 2028 in voller Höhe',
      },
      {
        spalte1: 'Ölheizung raus, Luft-WP mit R290',
        spalte2: '30 % + 20 % + 5 % = 55 %',
        spalte3:
          'Klimageschwindigkeitsbonus + Effizienzbonus durch natürliches Kältemittel – Zuschuss 15.400 €',
      },
      {
        spalte1: 'Ölheizung raus + niedriges Einkommen',
        spalte2: '30 % + 20 % + 30 % = 80 % (gedeckelt 70 %)',
        spalte3:
          'Maximale Konstellation für Selbstnutzer mit Einkommen ≤ 40.000 €. Zuschuss 19.600 € auf 28.000 € (70 %-Deckel)',
      },
      {
        spalte1: 'Erdwärmepumpe + Ölheizung-Austausch',
        spalte2: '30 % + 20 % + 5 % = 55 %',
        spalte3:
          'Effizienzbonus automatisch durch Erdwärme – Zuschuss 15.400 €. Erschließungskosten sind Teil der förderfähigen Kosten',
      },
    ]),

    hinweisBlock(
      'Die 30.000 € sind keine Förderhöhe – sondern die Bezugsgröße',
      p(
        t('Förderfähig sind Kosten bis zu 30.000 € pro Wohneinheit. Wer 40.000 € investiert, bekommt den Förderprozentsatz trotzdem nur auf 30.000 € gerechnet. Bei 70 % sind das 21.000 € Zuschuss als Maximum. Zusätzlich kann ein '),
        bold('Emissionsminderungszuschlag von 2.500 €'),
        t(' anfallen – damit erhöht sich der maximale Zuschuss auf 23.500 €. Bei Mehrfamilienhäusern erhöht sich die Bezugsgröße um 15.000 € pro weiterer Wohneinheit.'),
      ),
    ),

    textBlock(
      h('h2', t('Antrag stellen: Reihenfolge ist alles')),
      p(
        t('Bei der KfW-Heizungsförderung ist der Antragsweg eng definiert – und Fehler in der Reihenfolge sind der häufigste Ablehnungsgrund.'),
      ),
      ul(
        p(
          bold('Schritt 1: Liefer- oder Leistungsvertrag mit Fachbetrieb'),
          t('. Im Vertrag muss eine '),
          bold('aufschiebende oder auflösende Bedingung'),
          t(' stehen – der Vertrag tritt erst in Kraft, wenn die KfW-Förderung zugesagt wird. Standardvertrag ohne Bedingung ist Förder-Aus.'),
        ),
        p(
          bold('Schritt 2: Bestätigung zum Antrag (BzA)'),
          t('. Der Fachbetrieb erstellt diese mit einer 15-stelligen Kennnummer und gibt die technischen Daten ins KfW-Prüftool ein.'),
        ),
        p(
          bold('Schritt 3: Antrag im KfW-Kundenportal „Meine KfW"'),
          t('. Online-Antrag mit BzA-ID. Direkt bei der KfW – nicht über die Hausbank, anders als bei KfW-Krediten. Eigentümer (mit Grundbucheintrag) stellen den Antrag selbst.'),
        ),
        p(
          bold('Schritt 4: Förderzusage abwarten'),
          t('. Erst nach schriftlicher Zusage darf das Vorhaben starten. Wer früher anfängt, verliert den Anspruch komplett. 36 Monate Zeit nach Zusage zur Umsetzung.'),
        ),
        p(
          bold('Schritt 5: Bestätigung nach Durchführung (BnD)'),
          t('. Nach Einbau erstellt der Fachbetrieb die BnD. Mit BnD und Rechnungen die Auszahlung im Portal anstoßen. Etwa 4 Wochen bis Geld auf dem Konto.'),
        ),
      ),
    ),

    tippBlock(
      'Aufschiebende Bedingung im Vertrag – Standard prüfen',
      p(
        t('Nicht jeder Fachbetrieb formuliert die aufschiebende Bedingung von sich aus richtig. Der Vertrag muss explizit festhalten, dass er erst in Kraft tritt, wenn die Förderzusage vorliegt – und dass das voraussichtliche Umsetzungsdatum innerhalb des Bewilligungszeitraums liegt. Ein erfahrener Anbieter hat dafür eine Standardklausel. Wer das nicht weiß, riskiert die komplette Förderung. Vor Unterschrift gegenlesen.'),
      ),
    ),

    textBlock(
      h('h2', t('KfW-Zuschuss oder Steuerbonus § 35c EStG?')),
      p(
        t('Es gibt zwei Wege, eine Heizungsmodernisierung steuerlich oder direkt finanziell zu vergünstigen. Sie sind '),
        bold('nicht kombinierbar'),
        t(' – es ist ein Wahlrecht.'),
      ),
      p(
        bold('KfW 458'),
        t(' ist der Zuschuss-Weg: 30 bis 70 % der förderfähigen Kosten, sofort ausgezahlt nach Maßnahmenabschluss. Antrag vor Auftragserteilung. Maximale Wirkung: bis 21.000 € Zuschuss bei 30.000 € Investition.'),
      ),
      p(
        bold('§ 35c EStG'),
        t(' (Steuerbonus für energetische Sanierungen) erlaubt 20 % der Kosten über drei Jahre verteilt steuerlich abzusetzen – maximal 40.000 € absetzbare Kosten. Kein Antrag vor der Maßnahme nötig, läuft über die Steuererklärung.'),
      ),
      p(
        t('In den meisten Fällen ist '),
        bold('KfW 458 wirtschaftlich klar besser'),
        t('. Die 30 % Grundförderung als Zuschuss schlagen die 20 % Steuerbonus über drei Jahre. Erst wenn der KfW-Antrag aus Reihenfolge-Gründen nicht mehr möglich ist – z. B. weil schon vor Antragstellung gebaut wurde – wird der Steuerbonus zur sinnvollen Alternative.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele bei der Förderung falsch einschätzen')),
      p(
        t('Bei der KfW-Heizungsförderung tauchen immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('„Ich bekomme automatisch 70 %." Stimmt nicht. 70 % ist das Maximum für eine spezifische Konstellation aus drei Boni. Der typische Standardfall liegt bei 30 bis 50 %.')),
        p(t('Der Antrag wird nach Vertragsabschluss gestellt. Falsch – bzw. nur dann gültig, wenn der Vertrag eine aufschiebende oder auflösende Bedingung enthält. Wer einen Standardvertrag unterschreibt und dann den Antrag stellt, verliert die komplette Förderung.')),
        p(t('Förderfähige Kosten = Gesamtkosten. Stimmt nicht. Die 30.000 € Bezugsgröße ist gedeckelt. Eine 40.000-€-Investition wird mit 21.000 € (70 % von 30.000 €) als Maximum bezuschusst – nicht mit 70 % von 40.000 €.')),
        p(t('Klimageschwindigkeitsbonus läuft ewig. Stimmt nicht. Voll nur bis Ende 2028. Ab 2029 alle zwei Jahre minus 3 Prozentpunkte. 2035 weg.')),
        p(t('„Ich nehme den Steuerbonus, das ist einfacher." In den meisten Fällen finanziell schlechter. KfW 458 mit 30 % Zuschuss schlägt § 35c EStG mit 20 % Steuerbonus deutlich.')),
        p(t('Förderprogramme der Stadt obendrauf? Selten – die meisten Kommunen haben ihre Wärmepumpen-Förderung wegen der hohen KfW-Bundesförderung eingestellt. Vorher prüfen, aber nicht darauf bauen.')),
      ),
      p(
        bold('Eine ehrliche Förderprognose braucht den Blick auf die konkrete Konstellation'),
        t(' – Bestandsheizung, Einkommen, gewünschte Wärmepumpe, Zeitplan. Nicht das Werbeversprechen „bis zu 70 %".'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die Wärmepumpen-Förderung 2026 ist substantiell und planbar. Wer eine Bestandsheizung – idealerweise Öl oder alte Gasheizung – durch eine Wärmepumpe ersetzt, kommt im Standardfall auf 50 % Zuschuss (Grundförderung plus Klimageschwindigkeitsbonus). Bei niedrigem Einkommen oder mit einem effizienten Gerät kann die Förderung auf bis zu 70 % steigen.'),
      ),
      p(
        t('Entscheidend ist die Reihenfolge: '),
        bold('Vertrag mit aufschiebender Bedingung, BzA, Antrag, Förderzusage, dann erst Beauftragung'),
        t('. Wer das durcheinanderbringt, verliert den kompletten Anspruch – und das ist 2026 der häufigste Fehler. Ein erfahrener Fachbetrieb kennt diesen Ablauf und liefert die nötigen Unterlagen, statt mit Förderversprechen zu werben, die er nicht halten kann.'),
      ),
      p(
        bold('Wer 2026 eine Wärmepumpe plant und auf den vollen Klimageschwindigkeitsbonus setzt, sollte nicht bis 2028 warten'),
        t(' – die Auftragsbücher der Heizungsbauer sind voll, und ab 2029 schmilzt der Bonus jedes zweite Jahr ab. Wer den Bonus mitnehmen will, plant am besten 2026 oder 2027 – mit Umsetzung bis Ende 2028.'),
      ),
    ),

    ctaBlock({
      titel: 'Wärmepumpe mit Förderung sauber planen',
      text:
        'Wir prüfen für deinen Fall, welche Förderbausteine in Frage kommen, und stellen den Vertrag mit der korrekten aufschiebenden Bedingung – damit der Antragsweg läuft und kein Anspruch verloren geht.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Wie hoch ist die maximale Förderung für eine Wärmepumpe 2026?',
      'Maximal 70 % der förderfähigen Kosten, gedeckelt auf 30.000 € pro Wohneinheit. Das ergibt bis zu 21.000 € Zuschuss. Mit Emissionsminderungszuschlag (2.500 €) sind insgesamt bis zu 23.500 € möglich. Bei Mehrfamilienhäusern erhöht sich die Bezugsgröße um 15.000 € pro weiterer Wohneinheit.',
    ),
    faqItem(
      'Wann läuft der Klimageschwindigkeitsbonus aus?',
      'Voll mit 20 % bis Ende 2028. Ab 2029 schmilzt er alle zwei Jahre um 3 Prozentpunkte ab und ist 2035 vollständig weg. Wichtig: Nicht der Antrag, sondern die Inbetriebnahme der Wärmepumpe muss innerhalb der Frist liegen.',
    ),
    faqItem(
      'Kann ich KfW-Förderung und Steuerbonus § 35c EStG kombinieren?',
      'Nein. Es ist ein Wahlrecht – entweder KfW 458 (Zuschuss bis 70 %) oder § 35c EStG (Steuerbonus 20 % über drei Jahre). KfW 458 ist in den meisten Fällen finanziell deutlich besser. § 35c wird zur Alternative, wenn der KfW-Weg aus Reihenfolge-Gründen nicht mehr möglich ist.',
    ),
    faqItem(
      'Wer bekommt den Einkommensbonus?',
      'Selbstnutzende Eigentümer mit einem zu versteuernden Haushaltseinkommen von maximal 40.000 € pro Jahr. Nachweis über die Einkommenssteuerbescheide der zweit- und drittletzten Jahre vor Antragstellung. Für 2026 also die Bescheide für 2023 und 2024.',
    ),
    faqItem(
      'Muss der Antrag vor oder nach Vertragsabschluss gestellt werden?',
      'Nach Vertragsabschluss – aber der Vertrag muss eine aufschiebende oder auflösende Bedingung enthalten, die ihn von der KfW-Förderzusage abhängig macht. Erst nach schriftlicher Förderzusage darf das Vorhaben starten. Wer ohne diese Bedingung unterschreibt oder vor Förderzusage baut, verliert den kompletten Anspruch.',
    ),
    faqItem(
      'Was passiert, wenn ich vor dem Antrag baue?',
      'Die Förderung ist endgültig verloren. Es gibt keine Heilungsmöglichkeit – auch nicht mit nachträglich eingefügten Klauseln im Vertrag. Die KfW prüft den Beginn der Maßnahme als Datum der ersten Lieferung oder Installation. Wer schon vor Förderzusage Material liefert oder mit der Montage beginnt, fällt aus dem Programm.',
    ),
  ],
}

await upsertRatgeberArticle(article)
