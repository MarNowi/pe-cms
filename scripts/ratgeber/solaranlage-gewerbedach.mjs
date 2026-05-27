// scripts/articles/solaranlage-gewerbedach.mjs

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
  titel: 'Solaranlage auf dem Gewerbedach: Was bei Hallen, Ställen und Werkstätten anders ist',
  slug: 'solaranlage-gewerbedach',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'Eine PV-Anlage auf einem Gewerbedach folgt nicht den gleichen Regeln wie auf dem Einfamilienhaus. Andere Größenordnungen, anderes Lastprofil, anderer Strompreis, andere Vorschriften – und steuerliche Hebel, die Privatkunden nicht haben. Worauf es bei Statik, Netzanschluss, Wirtschaftlichkeit und Genehmigung wirklich ankommt.',
  lesezeit: 10,

  seo: seo(
    'Solaranlage auf dem Gewerbedach: Was bei Hallen und Ställen anders ist | PEAK.Energy',
    'PV auf Gewerbedach, Stall oder Werkstatt folgt eigenen Regeln: anderes Lastprofil, höherer Eigenverbrauch, steuerliche Hebel wie IAB und Sonderabschreibung. Ehrliche Einordnung zu Statik, Netzanschluss, Brandschutz und Wirtschaftlichkeit.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Im Gewerbe verbraucht ein Betrieb meist tagsüber – genau dann, wenn die Sonne scheint. '),
      bold('Eigenverbrauchsquoten von 60 bis 80 % sind realistisch, oft ohne Speicher'),
      t('. Das ist der wichtigste wirtschaftliche Hebel.'),
    ),
    summaryPoint(
      t('Steuerliche Hebel wie Investitionsabzugsbetrag, Sonderabschreibung und Vorsteuerabzug verkürzen die Amortisation deutlich. '),
      bold('Typisch 6 bis 10 Jahre statt 12 bis 15 wie im Privathaushalt'),
      t('.'),
    ),
    summaryPoint(
      t('Wichtige Schwellen: '),
      bold('ab 100 kWp greift die Direktvermarktungspflicht'),
      t(', ab 750 kWp das EEG-Ausschreibungsverfahren. Bei den meisten Gewerbe- und Landwirtschaftsdächern liegt die sinnvolle Größe genau in diesem Bereich.'),
    ),
    summaryPoint(
      t('Statik, Netzanschluss und Brandschutz sind bei Gewerbeanlagen kein Selbstläufer. '),
      bold('Ohne saubere Vorabklärung kippt das Projekt – nicht selten am Netzbetreiber'),
      t('.'),
    ),
    summaryPoint(
      t('Sonderfall Landwirtschaft: Asbestzement-Dächer dürfen nicht belegt werden. Wer hier PV bauen will, '),
      bold('saniert das Dach gleich mit'),
      t(' – oft mit kombinierten Förderprogrammen.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum sich Gewerbedach und Einfamilienhaus grundsätzlich unterscheiden')),
      p(
        t('Beim Einfamilienhaus liegt die typische Anlagengröße bei 8 bis 15 kWp, der Strom wird abends und am Wochenende verbraucht, und der Eigenverbrauch endet meist bei 30 bis 40 % ohne Speicher. Im Gewerbe sieht das oft genau umgekehrt aus.'),
      ),
      p(
        t('Ein Metallbaubetrieb, eine Werkstatt, ein Logistiker mit Kühllager oder ein landwirtschaftlicher Hof verbraucht den meisten Strom genau dann, wenn die Sonne scheint – Maschinen laufen, Beleuchtung an, Lüftung in Betrieb, Stallklima geregelt, Melktechnik aktiv. Das bedeutet: '),
        bold('Eigenverbrauchsquoten von 60 bis 80 % sind realistisch, ohne dass überhaupt ein Speicher nötig wäre'),
        t('.'),
      ),
      p(
        t('Damit verschiebt sich die ganze Wirtschaftlichkeitsrechnung. Eigenverbrauch ist deutlich mehr wert als Einspeisung – bei Gewerbestrompreisen von 25 bis 35 ct/kWh und Einspeisevergütungen unter 7 ct/kWh ist jede selbst verbrauchte Kilowattstunde rund das Vier- bis Fünffache wert.'),
      ),
    ),

    tabelleBlock('Einfamilienhaus vs. Gewerbedach im Vergleich', [
      {
        spalte1: 'Anlagengröße',
        spalte2: 'EFH: 8 bis 15 kWp · Gewerbe: 30 bis 300 kWp typisch',
        spalte3: 'Bei größeren Dächern kommen Netzanschlussfragen hinzu',
      },
      {
        spalte1: 'Lastprofil',
        spalte2: 'EFH: abends und Wochenende · Gewerbe: tagsüber, werktags',
        spalte3: 'Gewerbeverbrauch deckt sich besser mit der PV-Erzeugung',
      },
      {
        spalte1: 'Eigenverbrauch (ohne Speicher)',
        spalte2: 'EFH: 30 bis 40 % · Gewerbe: 60 bis 80 %',
        spalte3: 'Speicher ist im Gewerbe oft nachrangig, nicht zentral',
      },
      {
        spalte1: 'Umsatzsteuer',
        spalte2: 'EFH: 0 % seit 2023 · Gewerbe: regulär, aber Vorsteuer abzugsfähig',
        spalte3: 'Effekt ist im Gewerbe ähnlich, läuft aber über die Buchhaltung',
      },
      {
        spalte1: 'Ertragsteuerliche Hebel',
        spalte2: 'EFH: Einkommensteuer-Befreiung · Gewerbe: IAB, Sonderabschreibung, AfA',
        spalte3: 'Im Gewerbe lassen sich teils 70 % der Investition steuerlich vorziehen',
      },
      {
        spalte1: 'Direktvermarktung',
        spalte2: 'EFH: praktisch nie · Gewerbe: Pflicht ab 100 kWp',
        spalte3: 'Anlage muss in dieser Größenordnung fernsteuerbar sein',
      },
      {
        spalte1: 'Brandschutz',
        spalte2: 'EFH: einfach · Gewerbe: Feuerwehrschalter, ggf. Brandschneisen',
        spalte3: 'Auflagen hängen von Gebäudeart und Anlagengröße ab',
      },
    ]),

    textBlock(
      h('h2', t('Dachformen und Statik – wo es zuerst hakt')),
      p(
        t('Gewerbedächer sehen anders aus als Wohngebäudedächer. Die wichtigsten Bauarten:'),
      ),
      p(
        bold('Flachdach. '),
        t('Typisch bei Hallen, Bürogebäuden, Discountern. Module werden aufgeständert, meist in Ost-West-Ausrichtung. Das nutzt die Fläche dichter aus als reine Südausrichtung und liefert über den Tag verteilte Erträge, was zum Gewerbelastprofil passt. Statisch entscheidend: Trägt das Dach die zusätzliche Last (Ständerwerk plus Module plus Ballast, je nach System 12 bis 25 kg/m²)? Bei älteren Hallen aus den 70ern und 80ern ist das nicht selbstverständlich.'),
      ),
      p(
        bold('Trapezblechdach. '),
        t('Sehr verbreitet bei Lagerhallen, landwirtschaftlichen Gebäuden, Reithallen. Module werden direkt auf das Trapezblech montiert. Hier ist die Tragfähigkeit der Trapezprofile entscheidend (Spannweite, Materialstärke), und die Befestigung muss zur Eindeckung passen (Kalzip, Stehfalz, Sandwichpaneel).'),
      ),
      p(
        bold('Sandwichpaneele. '),
        t('Häufig bei modernen Hallen. Funktioniert grundsätzlich gut, aber die Befestigung darf den Dämmkern nicht beschädigen.'),
      ),
      p(
        bold('Sheddach. '),
        t('Die klassische Industriedach-Bauform mit Nordlicht. Wirtschaftlich meist ungünstig, weil die Südseite klein ist und die Nordseite nicht belegt wird.'),
      ),
      p(
        bold('Asbestzement-Wellplatten. '),
        t('Sonderfall mit klaren Regeln – siehe weiter unten.'),
      ),
      p(
        t('Vor jeder Planung steht eine Statikprüfung. Bei größeren Anlagen verlangt der Versicherer ohnehin einen Nachweis. Wer das überspringt, riskiert im besten Fall einen späteren Rückbau, im schlechtesten einen Schaden.'),
      ),
    ),

    textBlock(
      h('h2', t('Lastprofil und Eigenverbrauch – der eigentliche wirtschaftliche Hebel')),
      p(
        t('Bei der Wirtschaftlichkeitsrechnung im Privathaushalt steht meist die Frage „Wie viel Speicher brauche ich, damit der Eigenverbrauch hoch genug ist?". Im Gewerbe ist das oft gar nicht mehr die zentrale Frage. Wenn der Betrieb tagsüber Strom braucht, deckt die PV-Anlage diesen Bedarf direkt – kein Umweg über einen Speicher nötig.'),
      ),
      p(
        t('Was dafür wichtig wird: das tatsächliche Lastprofil. Wann läuft welcher Verbraucher? Bei einem Metallbaubetrieb mit Schweißgeräten und Absauganlage in einer einzigen Tagschicht ist die Auslegung anders als bei einem Milchviehbetrieb mit Melktechnik morgens um fünf und nachmittags um vier.'),
      ),
      p(
        t('Aus den Lastgangdaten des Netzbetreibers – bei größeren Anschlüssen ohnehin vorhanden – lässt sich die optimale Anlagengröße sauber berechnen. Pauschale „so viel kWp wie möglich"-Auslegung passt selten. Entweder wird die Anlage zu groß und die Überschüsse landen für 7 ct in der Einspeisung, oder sie wird zu klein und der Gewerbestrom-Bezug bleibt hoch.'),
      ),
    ),

    tippBlock(
      'Lastgang vor der Auslegung anfordern',
      p(
        t('Bei Gewerbeanschlüssen mit RLM-Messung (registrierende Leistungsmessung) liegen die Lastgangdaten beim Netzbetreiber bereits viertelstundenscharf vor. Diese Daten kostenlos anfordern, bevor die Anlage geplant wird – sie sind die Grundlage für eine ehrliche Auslegung. Bei kleineren Anschlüssen ohne RLM hilft ein temporärer Lastgangrekorder über vier bis sechs Wochen.'),
      ),
    ),

    textBlock(
      h('h2', t('Größenordnungen, Vergütung und Direktvermarktungspflicht')),
      p(
        t('Im Gewerbe sind ein paar regulatorische Schwellen wichtig:'),
      ),
      ul(
        p(
          bold('bis 30 kWp – '),
          t('wie im Privatbereich, Festvergütung, keine Direktvermarktung, einfacher Marktstammdatenregister-Eintrag.'),
        ),
        p(
          bold('30 bis 100 kWp – '),
          t('Festvergütung weiterhin möglich, aber Direktvermarktung lohnt sich oft. Anlage muss in der Regel fernsteuerbar sein.'),
        ),
        p(
          bold('ab 100 kWp – '),
          t('Direktvermarktungspflicht. Strom wird über einen Direktvermarkter an der Börse verkauft, der Anlagenbetreiber bekommt die Marktprämie plus den Erlös aus der Vermarktung. Die Anlage muss fernsteuerbar sein.'),
        ),
        p(
          bold('ab 750 kWp – '),
          t('Anlagen müssen über das EEG-Ausschreibungsverfahren bezuschlagt werden, um die volle Förderung zu erhalten.'),
        ),
      ),
      p(
        t('Für die meisten KMU- und Landwirtschaftsdächer liegen die sinnvollen Größen zwischen 30 und 300 kWp – also genau im Bereich, wo Direktvermarktung relevant wird.'),
      ),
    ),

    textBlock(
      h('h2', t('Steuerliche Hebel: IAB, Sonderabschreibung, Vorsteuer')),
      p(
        t('Das ist der Punkt, der private Bauherren neidisch macht: Im Gewerbe und in der Landwirtschaft gibt es steuerliche Hebel, die im Privathaushalt nicht greifen.'),
      ),
      p(
        bold('Investitionsabzugsbetrag (IAB) nach § 7g EStG. '),
        t('Bis zu 50 % der voraussichtlichen Investitionskosten lassen sich bis zu drei Jahre vor der Anschaffung gewinnmindernd geltend machen. Bei einer 100.000-€-Anlage sind das bis zu 50.000 € weniger zu versteuernder Gewinn im Vorjahr.'),
      ),
      p(
        bold('Sonderabschreibung nach § 7g Abs. 5 EStG. '),
        t('Zusätzlich 20 % im Anschaffungsjahr und in den vier Folgejahren frei verteilbar.'),
      ),
      p(
        bold('Reguläre AfA. '),
        t('20 Jahre lineare Abschreibung.'),
      ),
      p(
        bold('Vorsteuerabzug. '),
        t('Anders als bei Wohngebäuden, die seit 2023 mit 0 % USt geliefert werden, wird beim Gewerbe die Umsatzsteuer auf die Anlage normal gezahlt, ist aber als Vorsteuer abzugsfähig, sofern der Betrieb umsatzsteuerpflichtig ist.'),
      ),
      p(
        t('Die Kombination aus IAB, Sonderabschreibung und hoher Eigenverbrauchsquote verkürzt die Amortisationszeit im Gewerbe deutlich gegenüber Privatanlagen – '),
        bold('typische Amortisation 6 bis 10 Jahre'),
        t(', je nach Eigenverbrauchsquote und steuerlicher Situation.'),
      ),
      p(
        t('Wichtig: Diese Hebel sind individuell. Sie sollten vor der Investitionsentscheidung mit dem Steuerberater abgestimmt werden – nicht erst beim Jahresabschluss.'),
      ),
    ),

    textBlock(
      h('h2', t('Netzanschluss – bei größeren Anlagen kein Selbstläufer')),
      p(
        t('Bei einer 10-kWp-Privatanlage ist der Netzanschluss eine Routine. Bei einer 200-kWp-Anlage auf einem Gewerbedach kann er das Projekt verzögern oder kippen.'),
      ),
      p(
        t('Entscheidend ist die Frage, was der bestehende Anschluss hergibt. Niederspannung (400 V) reicht je nach Trafo bis etwa 100 bis 150 kWp Einspeiseleistung. Darüber hinaus prüft der Netzbetreiber, ob der Ortsnetztrafo das verträgt – oder ob ein Mittelspannungsanschluss nötig wird (mit eigener Trafostation auf dem Grundstück, fünf- bis sechsstellige Zusatzkosten).'),
      ),
      p(
        t('Realistisch sollte vor jeder ernsthaften Planung eine Netzanschlussanfrage beim Netzbetreiber gestellt werden. Die Antwort dauert je nach Netzbetreiber zwischen vier Wochen und vier Monaten. Im Niederrhein und Ruhrgebiet ist das stark betreiberabhängig – '),
        bold('die Bearbeitungszeiten sind ein realer Planungsfaktor'),
        t(', der von Anfang an mitgedacht werden muss.'),
      ),
    ),

    textBlock(
      h('h2', t('Genehmigung und Brandschutz')),
      p(
        t('Auf privaten Dächern reicht in den meisten Fällen die Anzeige beim Netzbetreiber und der Eintrag im Marktstammdatenregister. Bei Gewerbeanlagen kommt mehr dazu:'),
      ),
      p(
        bold('Brandschutz. '),
        t('Größere Anlagen brauchen einen Feuerwehrschalter beziehungsweise eine DC-Notabschaltung, in der Regel in unmittelbarer Nähe des Haupteingangs. Bei besonders großen Dächern verlangt die Feuerwehr Brandschneisen zwischen Modulfeldern.'),
      ),
      p(
        bold('Bauantrag. '),
        t('Bei Aufständerungen über bestimmten Höhen oder bei statischen Veränderungen kann ein Bauantrag nötig sein. Bei Freiflächenanlagen ohnehin.'),
      ),
      p(
        bold('DGUV-Vorgaben. '),
        t('Für Wartung und Reinigung müssen sichere Zugänge geschaffen werden (Anschlagpunkte, Laufstege bei großen Flächen).'),
      ),
      p(
        bold('Versicherung. '),
        t('Gewerbeanlagen werden nicht automatisch von der Gebäudeversicherung mit abgedeckt. Sie müssen explizit eingeschlossen oder über eine separate Photovoltaik-Versicherung abgesichert werden.'),
      ),
    ),

    hinweisBlock(
      'Asbestdach: Eingriff löst Sanierungspflicht aus',
      p(
        t('Auf landwirtschaftlichen Gebäuden – Ställen, Maschinenhallen, Scheunen – sind Asbestzement-Wellplatten („Eternit") aus den 70ern und 80ern noch sehr verbreitet. Eine PV-Anlage darf darauf nicht montiert werden. '),
        bold('Sobald in die Substanz eingegriffen wird, greift die Sanierungspflicht nach Gefahrstoffverordnung'),
        t('. Die Sanierung muss durch einen nach TRGS 519 qualifizierten Fachbetrieb erfolgen – das ist keine PV-Leistung, sondern eine eigenständige Gewerkleistung.'),
      ),
    ),

    textBlock(
      h('h2', t('Sonderfall Landwirtschaft: Asbestzement-Dächer')),
      p(
        t('Wer auf seinem Stalldach PV bauen will, saniert in der Regel in einem Zug das Asbestdach. Das verteuert das Projekt zunächst – gleichzeitig nutzt es einen Sanierungsanlass, der sowieso irgendwann gekommen wäre, und es gibt regelmäßig Förderprogramme für Asbestsanierung in Kombination mit PV (Land NRW, je nach Programmstand).'),
      ),
      p(
        t('Im Niederrhein und im Ruhrgebiet betrifft das viele Höfe. Die Reihenfolge lautet hier typischerweise: Asbestsanierung durch zertifizierten Fachbetrieb, neue Dacheindeckung (meist Trapezblech oder Sandwichpaneele), dann PV-Montage. Die Gesamtinvestition ist höher als bei einem intakten Dach, aber durch die kombinierten Förderprogramme und die hohe Eigenverbrauchsquote eines landwirtschaftlichen Betriebs trotzdem oft wirtschaftlich tragfähig.'),
      ),
      p(
        t('Wichtig: Sanierungspflicht und Förderbedingungen ändern sich. Vor jedem Projekt sollte der aktuelle Stand der Programme geprüft und die Reihenfolge sauber dokumentiert werden – auch für die spätere Vorsteuer- und IAB-Geltendmachung.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann sich PV im Gewerbe rechnet – und wann nicht')),
      p(
        t('Die ehrliche Einordnung am Schluss: PV im Gewerbe rechnet sich in den meisten Fällen schneller als im Privathaushalt. Aber nicht immer.'),
      ),
      p(
        bold('Klar wirtschaftlich. '),
        t('Betriebe mit hohem Tagverbrauch, intaktem Dach mit Süd-, Ost- oder West-Ausrichtung, Anlagengröße passend zum Lastprofil, ausreichender Netzanschluss.'),
      ),
      p(
        bold('Genau prüfen. '),
        t('Betriebe mit überwiegend Nacht- oder Wochenendverbrauch, sehr kleine Dächer im Verhältnis zum Bedarf, sanierungsbedürftige Dächer ohne Sanierungsbudget.'),
      ),
      p(
        bold('Eher zurückstellen. '),
        t('Betriebe vor einem geplanten Umbau, Dächer mit ungeklärter Statik, Standorte mit absehbarem Netzanschluss-Engpass.'),
      ),
      p(
        t('Eine seriöse Wirtschaftlichkeitsrechnung für eine Gewerbeanlage ist umfangreicher als für eine Privatanlage – sie braucht Lastgang, Strompreis, geplante Erweiterungen (E-Fuhrpark, Wärmepumpe, Klimatisierung), steuerliche Situation. '),
        bold('Wer dir auf Basis von „Dachgröße mal Standardwert" eine Ja/Nein-Antwort gibt, hat das Projekt nicht durchgerechnet'),
        t('.'),
      ),
      p(
        t('Mehr zu unseren Lösungen für Gewerbe und Landwirtschaft findest du hier: '),
        link('Gewerbe & KMU', '/loesungen/gewerbe-kmu'),
        t(' und '),
        link('Landwirtschaft', '/loesungen/landwirtschaft'),
        t('.'),
      ),
    ),

    ctaBlock({
      titel: 'PV fürs Gewerbedach ehrlich durchrechnen lassen',
      text:
        'Du betreibst einen Hof, eine Werkstatt, eine Halle oder einen KMU-Betrieb am Niederrhein oder im Ruhrgebiet und überlegst, dein Dach mit PV zu belegen? Wir prüfen Statik, Lastgang, Netzanschluss und Wirtschaftlichkeit – und sagen ehrlich, wann es sich lohnt und wann nicht.',
      buttonText: 'Gewerbe-Anfrage stellen',
      buttonLink: '/loesungen/gewerbe-kmu',
    }),
  ],

  faq: [
    faqItem(
      'Lohnt sich PV auf dem Gewerbedach mehr als auf dem Einfamilienhaus?',
      'In den meisten Fällen ja – aber nicht wegen der Größe, sondern wegen des Lastprofils. Gewerbebetriebe verbrauchen Strom überwiegend tagsüber, wenn die PV-Anlage produziert. Dadurch sind Eigenverbrauchsquoten von 60 bis 80 % ohne Speicher realistisch. Zusammen mit steuerlichen Hebeln wie IAB und Sonderabschreibung verkürzt sich die Amortisation typisch auf 6 bis 10 Jahre.',
    ),
    faqItem(
      'Brauche ich für eine Gewerbeanlage zwingend einen Speicher?',
      'Oft nicht. Wenn der Hauptverbrauch tagsüber liegt, deckt die PV-Anlage den Bedarf direkt ab. Ein Speicher kann später ergänzt werden, wenn dynamische Tarife, Peak Shaving oder eine Notstromfunktion wirtschaftlich werden. Pauschal „Speicher dazu" wie im Privatbereich ergibt im Gewerbe selten Sinn.',
    ),
    faqItem(
      'Was ist Direktvermarktung und ab wann ist sie Pflicht?',
      'Direktvermarktung bedeutet, dass der eingespeiste Strom nicht zur festen Einspeisevergütung, sondern über einen Direktvermarkter an der Strombörse verkauft wird. Der Anlagenbetreiber bekommt die Marktprämie plus den Vermarktungserlös. Ab 100 kWp installierter Leistung ist die Teilnahme an der Direktvermarktung Pflicht, die Anlage muss dafür fernsteuerbar sein.',
    ),
    faqItem(
      'Was bringen Investitionsabzugsbetrag und Sonderabschreibung konkret?',
      'Der IAB nach § 7g EStG erlaubt, bis zu 50 % der voraussichtlichen Investitionskosten bis zu drei Jahre vor Anschaffung gewinnmindernd geltend zu machen. Zusätzlich gibt es eine Sonderabschreibung von 20 % im Anschaffungsjahr und in den vier Folgejahren. In Kombination lassen sich rund 70 % der Investition steuerlich vorziehen. Voraussetzungen und Größenschwellen unbedingt vorab mit dem Steuerberater klären.',
    ),
    faqItem(
      'Wer trägt die Verantwortung für die Dachstatik?',
      'Der Anlagenbauer plant die Befestigung, ein Statiker oder Tragwerksplaner muss aber die zusätzliche Last für das konkrete Dach bestätigen. Bei größeren Anlagen verlangen Versicherer ohnehin einen Nachweis. Wer ohne Statikprüfung baut, riskiert im Schadensfall den Versicherungsschutz.',
    ),
    faqItem(
      'Wie lange dauert eine Netzanschlussanfrage für eine größere PV-Anlage?',
      'Je nach Netzbetreiber zwischen vier Wochen und vier Monaten. Bei Anlagen, die einen Mittelspannungsanschluss oder einen Trafostations-Umbau erfordern, kann sich das auf ein halbes Jahr und länger ziehen. Die Anfrage sollte deshalb möglichst früh in der Projektphase gestellt werden, nicht erst nach Auftragsvergabe.',
    ),
    faqItem(
      'Was passiert, wenn das Dach Asbestzement-Platten enthält?',
      'Eine PV-Anlage darf darauf nicht montiert werden. Sobald in die Substanz eingegriffen wird, greift die Sanierungspflicht nach Gefahrstoffverordnung – das Dach muss durch einen nach TRGS 519 qualifizierten Fachbetrieb saniert werden. In der Praxis wird die Asbestsanierung mit der PV-Installation kombiniert, oft mit Förderprogrammen des Landes NRW.',
    ),
    faqItem(
      'Brauche ich einen Bauantrag für eine PV-Anlage auf dem Gewerbedach?',
      'Bei reiner Dachbelegung in der Regel nicht. Bei Aufständerungen auf Flachdächern, die bestimmte Höhen überschreiten, oder bei statischen Veränderungen am Gebäude kann eine Baugenehmigung nötig werden. Bei Freiflächenanlagen ist sie immer Pflicht. Im Zweifel die zuständige Bauaufsicht früh einbinden.',
    ),
    faqItem(
      'Was kostet eine Gewerbeanlage pro kWp?',
      'Eine pauschale Zahl ist unseriös. Die Kosten hängen von Dachform, Anlagengröße, Befestigungssystem, Wechselrichter-Konzept, Netzanschluss und Zählerschrank ab. Größere Anlagen sind pro kWp günstiger als kleine. Wer eine ehrliche Kalkulation will, braucht eine Vor-Ort-Bewertung – kein Standardangebot per Mail.',
    ),
  ],
}

await upsertRatgeberArticle(article)
