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
  titel: 'Wärmepumpe Förderung 2026: Neue KfW-Regeln seit Juli',
  slug: 'waermepumpe-foerderung-2026',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Seit dem 21. Juli 2026 gelten neue Regeln für die KfW-Heizungsförderung: bis zu 80 % Zuschuss, 16 % Klimageschwindigkeitsbonus, ein gestaffelter Einkommensbonus und nur noch 28.000 € förderfähige Kosten beim Einfamilienhaus. Wir erklären, was davon im eigenen Fall wirklich ankommt.',
  lesezeit: 12,

  seo: seo(
    'Wärmepumpe Förderung 2026: neue KfW-Regeln | PEAK.Energy',
    'Wärmepumpe Förderung 2026: Seit 21. Juli gelten neue KfW-458-Regeln. Bis zu 80 % Zuschuss, 16 % Klimabonus, Einkommensbonus, Familienzuschlag und 28.000 € Förderhöchstbetrag verständlich erklärt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Seit dem '),
      bold('21. Juli 2026'),
      t(' gelten neue Bedingungen bei KfW 458. Die Grundförderung bleibt bei 30 %, der Klimageschwindigkeitsbonus beträgt aktuell 16 % und der Einkommensbonus wurde auf 10 %, 30 % oder 40 % gestaffelt.'),
    ),
    summaryPoint(
      t('Bei einem Einfamilienhaus werden aktuell höchstens '),
      bold('28.000 € förderfähige Kosten'),
      t(' berücksichtigt. Die reguläre Förderobergrenze liegt bei 70 %; in der höchsten Einkommensbonus-Stufe sind für Selbstnutzer bis zu 80 % möglich. Das entspricht maximal 22.400 € Zuschuss.'),
    ),
    summaryPoint(
      t('Der frühere '),
      bold('5-%-Effizienzbonus und der Emissionsminderungszuschlag sind entfallen'),
      t('. Eine Wärmepumpe mit R290 bekommt dadurch seit dem 21. Juli 2026 keinen zusätzlichen Förderbonus mehr.'),
    ),
    summaryPoint(
      t('Wichtig ist die Reihenfolge: Erst BzA erstellen lassen, dann einen Liefer- oder Leistungsvertrag '),
      bold('mit aufschiebender oder auflösender Förderbedingung'),
      t(' abschließen, anschließend den KfW-Antrag stellen – und erst nach Zusage mit den Arbeiten vor Ort beginnen.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Was hat sich bei der Wärmepumpen-Förderung geändert?')),
      p(
        t('Die Wärmepumpen-Förderung wurde mitten im Jahr 2026 neu geordnet. Seit dem '),
        bold('21. Juli 2026'),
        t(' gelten bei der KfW-Heizungsförderung für Privatpersonen neue Förderhöhen und neue Einkommensgrenzen. Wer noch mit 20 % Klimageschwindigkeitsbonus, 5 % Effizienzbonus und 30.000 € förderfähigen Kosten rechnet, rechnet mit dem alten Stand.'),
      ),
      p(
        t('KfW 458 bleibt das zentrale Zuschussprogramm für private Eigentümer bestehender Wohngebäude. Gefördert werden unter anderem elektrisch angetriebene Wärmepumpen, die dazugehörige Fachplanung und Baubegleitung sowie bestimmte notwendige Umfeldmaßnahmen. Voraussetzung ist grundsätzlich ein bestehendes Wohngebäude, dessen Bauantrag beziehungsweise Bauanzeige bei Antragstellung mindestens fünf Jahre zurückliegt.'),
      ),
      p(
        t('Die wichtigste Botschaft lautet deshalb nicht einfach „bis zu 80 % Förderung“. Entscheidend ist, '),
        bold('welche Bonusstufe zur konkreten Immobilie, zur alten Heizung, zur Selbstnutzung und zum Haushaltseinkommen passt'),
        t('. Erst daraus ergibt sich der tatsächliche Zuschuss.'),
      ),
    ),

    textBlock(
      h('h2', t('So setzt sich die Förderung seit 21. Juli 2026 zusammen')),
      p(
        t('Die KfW-Förderung besteht aus einer Grundförderung und möglichen Bonusbausteinen. Nicht jeder Baustein gilt für jeden Antragsteller.'),
      ),
      p(
        bold('Grundförderung: 30 %'),
        t('. Sie bleibt unverändert. Für eine förderfähige Wärmepumpe in einem bestehenden Wohngebäude werden grundsätzlich 30 % der berücksichtigten förderfähigen Kosten bezuschusst.'),
      ),
      p(
        bold('Klimageschwindigkeitsbonus: aktuell +16 %'),
        t('. Selbstnutzende Eigentümer können ihn erhalten, wenn sie unter anderem eine funktionsfähige Öl-, Kohle-, Gas-Etagen- oder Nachtspeicherheizung austauschen. Bei normalen Gas- und Biomasseheizungen muss die Inbetriebnahme mindestens 20 Jahre zurückliegen. Die alte Heizung muss fachgerecht demontiert und entsorgt werden.'),
      ),
      p(
        bold('Einkommensbonus: +10 %, +30 % oder +40 %'),
        t('. Er gilt für die selbstgenutzte Haupt- oder alleinige Wohneinheit und richtet sich nach dem durchschnittlichen zu versteuernden Haushaltsjahreseinkommen. Haushalte mit mindestens einem kindergeldberechtigten minderjährigen Kind erhalten einen einmaligen Familienzuschlag von 10.000 € auf die jeweilige Einkommensgrenze.'),
      ),
      p(
        bold('Effizienzbonus: entfallen'),
        t('. Der bisherige zusätzliche 5-%-Bonus für bestimmte Wärmequellen oder natürliche Kältemittel wurde zum 21. Juli 2026 gestrichen. R290 kann technisch weiterhin eine sehr sinnvolle Wahl sein – einen zusätzlichen 5-%-Förderbonus gibt es dafür aktuell aber nicht mehr.'),
      ),
      p(
        bold('Förderobergrenze: 70 % beziehungsweise 80 %'),
        t('. Normalerweise werden Grundförderung und Boni bei 70 % gedeckelt. Für selbstnutzende Eigentümer in der höchsten Einkommensbonus-Stufe liegt die Obergrenze bei 80 %. Ohne Kind betrifft das ein zu versteuerndes Haushaltsjahreseinkommen bis 30.000 €, mit Familienzuschlag bis 40.000 €.'),
      ),
    ),

    tabelleBlock('Förderbeispiele seit 21.07.2026 (Einfamilienhaus, 28.000 € förderfähige Kosten)', [
      {
        spalte1: 'Nur Grundförderung',
        spalte2: '30 %',
        spalte3:
          '8.400 € Zuschuss. Beispiel: förderfähige Wärmepumpe ohne Klimageschwindigkeits- oder Einkommensbonus.',
      },
      {
        spalte1: 'Alte Ölheizung raus',
        spalte2: '30 % + 16 % = 46 %',
        spalte3:
          '12.880 € Zuschuss bei Selbstnutzung und erfüllten Voraussetzungen für den Klimageschwindigkeitsbonus.',
      },
      {
        spalte1: 'Alte Ölheizung + 10 % Einkommensbonus',
        spalte2: '30 % + 16 % + 10 % = 56 %',
        spalte3:
          '15.680 € Zuschuss. Ohne Kind gilt die 10-%-Stufe bei einem zu versteuernden Haushaltsjahreseinkommen von 40.001 bis 50.000 €.',
      },
      {
        spalte1: 'Familie + 30 % Einkommensbonus + alte Heizung',
        spalte2: '30 % + 16 % + 30 % = 76 % → gedeckelt auf 70 %',
        spalte3:
          '19.600 € Zuschuss. Mit minderjährigem kindergeldberechtigtem Kind gilt die 30-%-Stufe bei 40.001 bis 50.000 € zu versteuerndem Haushaltsjahreseinkommen.',
      },
      {
        spalte1: 'Höchste Einkommensstufe + alte Heizung',
        spalte2: '30 % + 16 % + 40 % = 86 % → gedeckelt auf 80 %',
        spalte3:
          '22.400 € maximaler Zuschuss. Die 80-%-Obergrenze gilt in der höchsten Einkommensbonus-Stufe.',
      },
    ]),

    hinweisBlock(
      '28.000 € sind die aktuelle Bezugsgröße – nicht der Zuschuss',
      p(
        t('Bei einem Einfamilienhaus berücksichtigt die KfW seit dem 21. Juli 2026 maximal '),
        bold('28.000 € förderfähige Kosten'),
        t('. Kostet die Maßnahme beispielsweise 35.000 €, wird der Fördersatz trotzdem nur auf maximal 28.000 € angewendet. Bei 70 % ergibt das höchstens 19.600 €, bei der 80-%-Obergrenze höchstens 22.400 € Zuschuss.'),
      ),
      p(
        t('Bei Mehrfamilienhäusern gelten aktuell 28.000 € für die erste Wohneinheit, jeweils 15.000 € für die zweite bis sechste Wohneinheit und jeweils 8.000 € ab der siebten Wohneinheit.'),
      ),
    ),

    textBlock(
      h('h2', t('Der Klimageschwindigkeitsbonus sinkt jetzt deutlich schneller')),
      p(
        t('Die neue Regelung macht den Zeitpunkt der Antragstellung relevanter. Der Klimageschwindigkeitsbonus beträgt aktuell 16 % und wird ab 2027 halbjährlich reduziert.'),
      ),
      ul(
        p(bold('bis 31.01.2027: '), t('16 %')),
        p(bold('ab 01.02.2027: '), t('12 %')),
        p(bold('ab 01.08.2027: '), t('8 %')),
        p(bold('ab 01.02.2028: '), t('4 %')),
        p(bold('ab 01.08.2028: '), t('0 %')),
      ),
      p(
        t('Für die jeweilige Bonusstufe ist der '),
        bold('Zeitpunkt der Antragstellung'),
        t(' entscheidend. Wer einen förderfähigen Heizungstausch ohnehin plant, kann deshalb einen konkreten Förderunterschied haben, wenn der Antrag in die nächste Absenkungsstufe rutscht.'),
      ),
    ),

    textBlock(
      h('h2', t('Auch die förderfähigen Kosten sinken ab 2027')),
      p(
        t('Nicht nur der Klimageschwindigkeitsbonus wird reduziert. Der Förderhöchstbetrag für die erste Wohneinheit sinkt erstmals zum '),
        bold('1. Februar 2027 um 750 €'),
        t(' und danach jeweils zum 1. Februar und 1. August eines Jahres erneut um 750 €.'),
      ),
      p(
        t('Damit gelten für die erste Wohneinheit beispielsweise 28.000 € bis 31.01.2027, 27.250 € ab 01.02.2027 und 26.500 € ab 01.08.2027. Auch hier zählt der Zeitpunkt der Antragstellung.'),
      ),
    ),

    textBlock(
      h('h2', t('Der neue Einkommensbonus: Familien werden stärker berücksichtigt')),
      p(
        t('Der Einkommensbonus wurde zum 21. Juli 2026 komplett neu gestaffelt. Maßgeblich ist das zu versteuernde Haushaltsjahreseinkommen – nicht einfach das Bruttogehalt. Für einen Antrag im Jahr 2026 werden grundsätzlich die Einkommensteuerbescheide des vorletzten und vorvorletzten Jahres benötigt, also regelmäßig 2024 und 2023.'),
      ),
    ),

    tabelleBlock('Einkommensbonus 2026', [
      {
        spalte1: 'bis 30.000 € zVE',
        spalte2: '40 %',
        spalte3: 'Ohne Kind 40 %. Mit mindestens einem berücksichtigungsfähigen minderjährigen Kind ebenfalls 40 %.',
      },
      {
        spalte1: '30.001 bis 40.000 € zVE',
        spalte2: '30 % / mit Kind 40 %',
        spalte3: 'Durch den Familienzuschlag steigt die höchste Bonusstufe für Familien um 10.000 €.',
      },
      {
        spalte1: '40.001 bis 50.000 € zVE',
        spalte2: '10 % / mit Kind 30 %',
        spalte3: 'Familien profitieren auch in dieser Einkommensspanne von der verschobenen Grenze.',
      },
      {
        spalte1: '50.001 bis 60.000 € zVE',
        spalte2: '0 % / mit Kind 10 %',
        spalte3: 'Ohne Familienzuschlag gibt es hier keinen Einkommensbonus mehr.',
      },
      {
        spalte1: 'ab 60.001 € zVE',
        spalte2: '0 %',
        spalte3: 'Kein Einkommensbonus – unabhängig vom Familienzuschlag.',
      },
    ]),

    textBlock(
      h('h2', t('Antrag stellen: Die richtige Reihenfolge nach aktuellem KfW-Stand')),
      p(
        t('Bei KfW 458 ist nicht nur entscheidend, was eingebaut wird, sondern auch in welcher Reihenfolge das Förderverfahren läuft.'),
      ),
      ul(
        p(
          bold('Schritt 1: Fachunternehmen oder Energieeffizienz-Experten einbinden und BzA erstellen lassen'),
          t('. Die Bestätigung zum Antrag enthält die geplante Heizung, die förderfähigen Kosten und die Bestätigung, dass die technischen Mindestanforderungen eingehalten werden.'),
        ),
        p(
          bold('Schritt 2: Liefer- oder Leistungsvertrag abschließen'),
          t('. Für den KfW-Antrag muss ein Vertrag vorliegen. Dieser muss zwingend eine aufschiebende oder auflösende Bedingung in Bezug auf die KfW-Förderzusage enthalten und ein voraussichtliches Umsetzungsdatum nennen.'),
        ),
        p(
          bold('Schritt 3: Zuschuss bei „Meine KfW“ beantragen'),
          t('. Dafür wird unter anderem die 15-stellige BzA-ID benötigt. Der Antrag muss vor Beginn der Arbeiten vor Ort gestellt werden.'),
        ),
        p(
          bold('Schritt 4: Förderzusage abwarten und Vorhaben umsetzen'),
          t('. Nach der Zusage kann die Maßnahme umgesetzt werden. Die KfW nennt dafür grundsätzlich einen Bewilligungszeitraum von 36 Monaten ab Zusage.'),
        ),
        p(
          bold('Schritt 5: BnD und Rechnungen einreichen'),
          t('. Nach Fertigstellung erstellt das Fachunternehmen oder der Energieeffizienz-Experte die Bestätigung nach Durchführung. Anschließend werden die Nachweise im KfW-Portal eingereicht.'),
        ),
      ),
    ),

    tippBlock(
      'Vertrag ohne Förderbedingung kann den Antrag verhindern',
      p(
        t('Ein normal unterschriebener Liefer- oder Leistungsvertrag ohne aufschiebende oder auflösende Förderbedingung gilt grundsätzlich als schädlicher Vorhabenbeginn. Die KfW weist ausdrücklich darauf hin, dass die Förderbedingung nicht einfach nachträglich in einen bereits abgeschlossenen Vertrag aufgenommen werden darf. Genau deshalb sollte der Förderablauf vor der Unterschrift geklärt sein.'),
      ),
    ),

    textBlock(
      h('h2', t('R290: technisch interessant, aber kein 5-%-Bonus mehr')),
      p(
        t('In vielen älteren Ratgebern wird R290 beziehungsweise Propan noch direkt mit einem zusätzlichen 5-%-Effizienzbonus verknüpft. Dieser Bonus ist seit dem 21. Juli 2026 entfallen.'),
      ),
      p(
        t('Das macht ein natürliches Kältemittel nicht schlechter. Die Wahl einer Wärmepumpe sollte ohnehin nicht an einem einzelnen Förderbonus hängen, sondern an Heizlast, Vorlauftemperatur, Effizienz, Schall, Aufstellort, Hydraulik und der langfristigen technischen Eignung für das Gebäude.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ist für Wärmepumpen ab 2027 angekündigt?')),
      p(
        t('Die KfW kündigt für das erste Quartal 2027 zusätzlich einen '),
        bold('Wertschöpfungsbonus für Wärmepumpen'),
        t(' an. Nach dem derzeit veröffentlichten Plan soll die Grundförderung für Wärmepumpen dann grundsätzlich auf 15 % sinken. Wärmepumpen, die innerhalb der EU gefertigt, gebaut beziehungsweise zusammengebaut wurden, sollen zusätzlich 15 % Wertschöpfungsbonus erhalten und damit wieder auf insgesamt 30 % kommen.'),
      ),
      p(
        bold('Wichtig:'),
        t(' Das ist im August 2026 eine angekündigte Regelung für 2027. Für eine konkrete Investitionsentscheidung sollte deshalb vor Antragstellung noch einmal geprüft werden, welche endgültigen Bedingungen dann tatsächlich gelten.'),
      ),
    ),

    textBlock(
      h('h2', t('KfW-Zuschuss oder Steuerermäßigung nach § 35c EStG?')),
      p(
        t('Für selbstgenutzte ältere Gebäude kann neben der KfW-Förderung grundsätzlich auch die Steuerermäßigung nach § 35c EStG interessant sein. Für dieselbe öffentlich geförderte Maßnahme mit steuerfreiem Zuschuss oder zinsverbilligtem Darlehen kann § 35c jedoch nicht zusätzlich genutzt werden.'),
      ),
      p(
        bold('§ 35c EStG'),
        t(' verteilt die Steuerermäßigung über drei Jahre: 7 % im Jahr des Abschlusses, 7 % im Folgejahr und 6 % im dritten Jahr. Insgesamt sind damit 20 % der begünstigten Aufwendungen möglich; der Höchstbetrag der Steuerermäßigung beträgt 40.000 € je begünstigtem Objekt. Voraussetzung ist unter anderem, dass das selbstgenutzte Gebäude älter als zehn Jahre ist und die gesetzlichen technischen Anforderungen erfüllt werden.'),
      ),
      p(
        t('Ob KfW 458 oder § 35c wirtschaftlich sinnvoller ist, hängt vom Einzelfall ab – unter anderem von förderfähigen Kosten, Bonusstufen und der tatsächlich vorhandenen Einkommensteuerbelastung. Für die meisten Wärmepumpenprojekte sollte diese Entscheidung '),
        bold('vor Beginn der Maßnahme'),
        t(' getroffen werden.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele bei der neuen Förderung falsch einschätzen')),
      p(
        t('Nach der Umstellung zum 21. Juli 2026 kursieren alte und neue Förderregeln parallel. Das führt schnell zu falschen Erwartungen.'),
      ),
      ul(
        p(t('„Jede Wärmepumpe bekommt 80 %.“ Falsch. 30 % Grundförderung ist der Ausgangspunkt. Die 80-%-Obergrenze gilt nur in der höchsten Einkommensbonus-Stufe und nur bei entsprechend kombinierbaren Boni.')),
        p(t('„R290 bringt weiterhin 5 % extra.“ Falsch. Der Effizienzbonus ist seit 21. Juli 2026 entfallen.')),
        p(t('„Es werden weiterhin 30.000 € beim Einfamilienhaus angesetzt.“ Falsch. Aktuell sind es 28.000 € für die erste Wohneinheit.')),
        p(t('„Der Klimageschwindigkeitsbonus beträgt bis Ende 2028 20 %.“ Falsch. Aktuell sind es 16 %; ab Februar 2027 sinkt der Bonus halbjährlich und entfällt für Antragstellungen ab 1. August 2028.')),
        p(t('„Ich darf erst nach dem KfW-Antrag einen Vertrag unterschreiben.“ So pauschal ebenfalls falsch. Für die Antragstellung muss bereits ein Liefer- oder Leistungsvertrag vorliegen – allerdings zwingend mit der vorgeschriebenen Förderbedingung.')),
        p(t('„Entscheidend ist die spätere Inbetriebnahme.“ Für die Höhe des Klimageschwindigkeitsbonus und des sinkenden Förderhöchstbetrags ist nach aktuellem KfW-Stand der Zeitpunkt der Antragstellung entscheidend.')),
      ),
      p(
        bold('Eine belastbare Förderprognose braucht deshalb immer den aktuellen KfW-Stand'),
        t(' und die konkrete Situation des Haushalts. Alte Fördertabellen aus dem Frühjahr 2026 sind für neue Anträge nicht mehr geeignet.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die neue Wärmepumpen-Förderung ist nicht einfach großzügiger oder schlechter als vorher – sie verteilt die Förderung anders. Die Grundförderung bleibt bei 30 %, während der Klimageschwindigkeitsbonus gesunken und der Effizienzbonus weggefallen ist. Gleichzeitig können Haushalte mit geringerem Einkommen und Familien durch die neue Staffelung stärker profitieren.'),
      ),
      p(
        t('Für einen typischen selbstnutzenden Eigentümer, der aktuell eine förderfähige alte Öl- oder Gasheizung ersetzt und keinen Einkommensbonus erhält, sind '),
        bold('46 % Förderung'),
        t(' ein realistischer Rechenwert. Bei 28.000 € förderfähigen Kosten entspricht das 12.880 € Zuschuss. Die beworbenen 80 % sind möglich – aber eben keine Standardförderung.'),
      ),
      p(
        t('Und bei aller Förderung gilt: '),
        bold('Eine schlechte Wärmepumpenplanung wird durch einen hohen Zuschuss nicht gut.'),
        t(' Heizlast, Vorlauftemperatur, Heizflächen, Hydraulik, Schall, Elektroinstallation und die Einbindung in Photovoltaik und Energiemanagement müssen zuerst technisch passen. Die Förderung kommt danach obendrauf.'),
      ),
    ),

    ctaBlock({
      titel: 'Wärmepumpe und Förderung sauber planen',
      text:
        'Wir prüfen nicht nur den möglichen KfW-Zuschuss, sondern ob die Wärmepumpe technisch zu deinem Gebäude passt. Dazu gehören Heizlast, Hydraulik, Aufstellort, Elektroinstallation und auf Wunsch die Einbindung von Photovoltaik, Speicher und Energiemanagement.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Wie hoch ist die maximale Wärmepumpen-Förderung seit Juli 2026?',
      'Seit dem 21. Juli 2026 sind für selbstnutzende Eigentümer in der höchsten Einkommensbonus-Stufe bis zu 80 % der förderfähigen Kosten möglich. Bei einem Einfamilienhaus werden aktuell maximal 28.000 € berücksichtigt. Damit liegt der maximale Zuschuss derzeit bei 22.400 €. In den übrigen Bonuskonstellationen gilt grundsätzlich eine Obergrenze von 70 %.',
    ),
    faqItem(
      'Wie hoch ist der Klimageschwindigkeitsbonus aktuell?',
      'Bis zum 31. Januar 2027 beträgt der Klimageschwindigkeitsbonus 16 %. Ab 1. Februar 2027 sinkt er auf 12 %, ab 1. August 2027 auf 8 %, ab 1. Februar 2028 auf 4 %. Für Antragstellungen ab 1. August 2028 wird kein Klimageschwindigkeitsbonus mehr gewährt.',
    ),
    faqItem(
      'Gibt es noch 5 % extra Förderung für R290-Wärmepumpen?',
      'Nein. Der bisherige Effizienzbonus von 5 % ist zum 21. Juli 2026 entfallen. Ein natürliches Kältemittel wie R290 kann technisch weiterhin sinnvoll sein, führt aktuell aber nicht mehr zu einem zusätzlichen 5-%-KfW-Bonus.',
    ),
    faqItem(
      'Wie funktioniert der neue Einkommensbonus?',
      'Für Selbstnutzer beträgt der Einkommensbonus 40 % bei einem zu versteuernden Haushaltsjahreseinkommen bis 30.000 €, 30 % bis 40.000 € und 10 % bis 50.000 €. Lebt mindestens ein kindergeldberechtigtes minderjähriges Kind im Haushalt, werden die Einkommensgrenzen pauschal um 10.000 € angehoben.',
    ),
    faqItem(
      'Welche förderfähigen Kosten gelten beim Einfamilienhaus?',
      'Seit dem 21. Juli 2026 berücksichtigt die KfW bei einem Einfamilienhaus maximal 28.000 € förderfähige Kosten. Ab 1. Februar 2027 sinkt dieser Förderhöchstbetrag erstmals um 750 € und danach halbjährlich jeweils zum 1. Februar und 1. August erneut um 750 €.',
    ),
    faqItem(
      'Muss der KfW-Antrag vor oder nach dem Vertrag gestellt werden?',
      'Für den KfW-Antrag muss bereits ein Liefer- oder Leistungsvertrag vorliegen. Dieser Vertrag muss zwingend eine aufschiebende oder auflösende Bedingung enthalten, die ihn von der KfW-Förderzusage abhängig macht. Vorher sollte die BzA erstellt werden. Der Antrag selbst muss vor Beginn der Arbeiten vor Ort gestellt werden.',
    ),
    faqItem(
      'Welche Einkommensteuerbescheide braucht die KfW 2026?',
      'Die KfW verlangt grundsätzlich die Einkommensteuerbescheide des vorletzten und vorvorletzten Jahres vor Antragstellung. Bei einem Antrag im Jahr 2026 sind das regelmäßig die Bescheide für 2024 und 2023. Maßgeblich ist das zu versteuernde Einkommen.',
    ),
    faqItem(
      'Kann ich KfW 458 und § 35c EStG für dieselbe Wärmepumpe kombinieren?',
      'Nein. Für eine öffentlich geförderte energetische Maßnahme, für die ein steuerfreier Zuschuss oder ein zinsverbilligtes Darlehen genutzt wird, kann die Steuerermäßigung nach § 35c EStG für dieselben Aufwendungen nicht zusätzlich beansprucht werden.',
    ),
  ],
}

await upsertRatgeberArticle(article)
