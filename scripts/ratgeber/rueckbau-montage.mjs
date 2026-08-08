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
  titel: 'Rückbau und Montage: So läuft der Umbau einer PV-Anlage ab',
  slug: 'rueckbau-montage',
  kategorie: 'repowering',
  status: 'veroeffentlicht',
  teaser:
    'Zwischen Altanlage und Neuanlage liegt Handwerk: spannungsfrei schalten, demontieren, Dach prüfen, neu montieren. Wie ein sauberer Rückbau abläuft, warum der Blick auf die Dachhaut dazugehört und weshalb Dach- und Elektroarbeiten aus einer Hand hier bares Geld sparen.',
  lesezeit: 7,
  seo: seo(
    'PV-Rückbau & Neumontage: Ablauf, Dauer, Dachsanierung | PEAK.Energy',
    'Rückbau und Montage beim Repowering: Ablauf von Freischaltung bis Neumontage, Prüfung der Dachhaut, Kombination mit Dachsanierung und typische Projektdauer – Dach und Elektro aus einer Hand.',
  ),
  zusammenfassung: [
    summaryPoint(
      t('Rückbau ist Elektroarbeit unter Spannung und Dacharbeit in der Höhe – '),
      bold('beides gehört in Fachhände'),
      t(', von der Freischaltung bis zur Absturzsicherung.'),
    ),
    summaryPoint(
      t('Die abgeräumte Dachfläche ist die '),
      bold('einmalige Gelegenheit'),
      t(', Dachhaut, Dachhaken und Durchdringungen zu prüfen – und nötige Sanierungen ohne zweites Gerüst zu erledigen.'),
    ),
    summaryPoint(
      bold('Dach und Elektro aus einer Hand'),
      t(' spart beim Repowering doppelt: ein Gerüst, ein Zeitplan, keine Schnittstellenprobleme zwischen Gewerken.'),
    ),
    summaryPoint(
      t('Ein typisches Einfamilienhaus-Repowering ist in wenigen Tagen erledigt – die Anlage steht nicht wochenlang still.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Der Ablauf: Vom Abschalten bis zum Anschalten')),
      ul(
        p(
          bold('1. Freischalten und Abmelden:'),
          t(' Die Anlage wird DC- und AC-seitig spannungsfrei geschaltet, der Rückbau bzw. Umbau dem Netzbetreiber angezeigt und im Marktstammdatenregister nachgeführt. An DC-Leitungen liegt bei Licht immer Spannung an – der erste Handgriff ist deshalb ein Fachthema, kein Laienthema.'),
        ),
        p(
          bold('2. Demontage:'),
          t(' Module, Verkabelung und je nach Konzept die Unterkonstruktion kommen herunter – mit Gerüst oder Absturzsicherung, sortiert nach Weiterverwendung, Verwertung und Entsorgung.'),
        ),
        p(
          bold('3. Dachprüfung:'),
          t(' Die freigelegte Fläche zeigt, was 15 Jahre unter der Anlage passiert ist: Zustand von Ziegeln, Dachhaken, Dichtungen und Durchdringungen. Kleinreparaturen passieren sofort, größere Befunde fließen in die Entscheidung Dachsanierung ja/nein ein.'),
        ),
        p(
          bold('4. Neumontage:'),
          t(' Neue Unterkonstruktion nach aktuellem Stand (Statik, Windlast), Modulbelegung nach neuem Layout, saubere DC-Verkabelung mit neuen Steckverbindern – gealterte Stecker sind einer der häufigsten Brandrisikofaktoren und werden grundsätzlich nicht wiederverwendet.'),
        ),
        p(
          bold('5. Elektroinstallation und Inbetriebnahme:'),
          t(' Wechselrichter, ggf. Speicher und Zählerschrank-Anpassung, Messkonzept, Anmeldung, Inbetriebnahmeprotokoll. Danach läuft die Anlage – dokumentiert und normgerecht.'),
        ),
      ),
    ),
    hinweisBlock(
      'Sonderfall Asbest: Erst das Dach, dann die Anlage',
      p(
        t('Auf Dächern mit Asbestzementplatten – im Altbestand von Landwirtschaft und Gewerbe keine Seltenheit – darf keine PV-Anlage montiert oder wiedermontiert werden; hier steht zwingend die Dachsanierung durch einen zugelassenen Betrieb an erster Stelle. Was das für Stall- und Hallendächer bedeutet, haben wir im Ratgeber „PV in der Landwirtschaft: Stalldach und Asbest" aufgeschrieben.'),
      ),
    ),
    textBlock(
      h('h2', t('Warum die Dachfrage zum Repowering gehört')),
      p(
        t('Eine neue Anlage läuft 25 bis 30 Jahre. Die entscheidende Frage vor der Neumontage lautet deshalb: '),
        bold('Hält das Dach so lange durch?'),
        t(' Eine Dachhaut, die in acht Jahren saniert werden muss, bedeutet dann: Anlage runter, Gerüst stellen, sanieren, Anlage wieder rauf – die halben Repowering-Kosten noch einmal.'),
      ),
      p(
        t('Deshalb gehört die ehrliche Dachbewertung in jedes Repowering-Projekt. Ist die Sanierung absehbar, wird sie mit dem Anlagenumbau kombiniert: ein Gerüst, ein Team, ein Zeitplan. Genau dafür haben wir Dachdecker und Elektriker im eigenen Haus – die Gewerke-Schnittstelle, an der solche Projekte sonst haken, gibt es bei uns nicht.'),
      ),
    ),
    tabelleBlock('Typischer Zeitrahmen (Einfamilienhaus)', [
      {
        spalte1: 'Rückbau der Altanlage',
        spalte2: '1 Tag',
        spalte3: 'Inklusive Freischaltung, Demontage und Sortierung der Altkomponenten',
      },
      {
        spalte1: 'Dachprüfung / Kleinreparaturen',
        spalte2: 'im selben Zug',
        spalte3: 'Größere Sanierungen verlängern das Projekt entsprechend – aber ohne zweites Gerüst',
      },
      {
        spalte1: 'Montage der Neuanlage',
        spalte2: '1–2 Tage',
        spalte3: 'Unterkonstruktion, Module, DC-Verkabelung',
      },
      {
        spalte1: 'Elektro & Inbetriebnahme',
        spalte2: '1 Tag',
        spalte3: 'Wechselrichter, Speicher, Zählerschrank, Messkonzept, Protokoll',
      },
      {
        spalte1: 'Netzanschluss-Formalitäten',
        spalte2: 'parallel',
        spalte3: 'Anmeldung und Registereinträge übernehmen wir – bei Anlagen bis 12 kWp geht der Anschluss besonders schnell',
      },
    ]),
    tippBlock(
      'Stillstandszeit klein halten',
      p(
        t('Gute Planung minimiert die Tage ohne Ertrag: Material und Gerüst stehen bereit, bevor die Altanlage vom Netz geht, und Rückbau und Neumontage folgen direkt aufeinander. Bei kombinierten Dachsanierungen planen wir die Reihenfolge so, dass die ertragsstarken Dachflächen zuletzt frei- und zuerst wieder belegt werden.'),
      ),
    ),
    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Rückbau und Montage sind das handwerkliche Herz des Repowerings – und der Moment, in dem sich saubere Arbeit von Pfusch unterscheidet: neue Steckverbinder statt wiederverwendeter, geprüfte Dachhaken statt „wird schon halten", dokumentierte Inbetriebnahme statt Zettelwirtschaft.'),
      ),
      p(
        bold('Dach und Elektro aus einer Hand'),
        t(' ist dabei kein Marketingsatz, sondern die Antwort auf das häufigste Problem solcher Projekte: zwei Gewerke, die aufeinander warten und im Zweifel aufeinander zeigen. Bei uns trägt ein Betrieb die Verantwortung für beides – vom ersten Gerüstrohr bis zum Inbetriebnahmeprotokoll.'),
      ),
    ),
    ctaBlock({
      titel: 'Repowering-Umbau planen lassen',
      text:
        'Rückbau, Dachprüfung, Neumontage und Elektro als ein Projekt mit einem Ansprechpartner – auf Wunsch inklusive Dachsanierung. Meisterbetrieb für Dach und Elektro.',
      buttonText: 'Anfrage stellen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Wie lange ist die Anlage während des Umbaus außer Betrieb?',
      'Bei einem gut geplanten Einfamilienhaus-Projekt wenige Tage – Rückbau, Montage und Inbetriebnahme folgen direkt aufeinander. Mit kombinierter Dachsanierung entsprechend länger, dafür entfällt ein späterer zweiter Umbau.',
    ),
    faqItem(
      'Kann die alte Unterkonstruktion weiterverwendet werden?',
      'Manchmal – Aluminium-Schienen altern kaum. In der Praxis scheitert es aber oft am neuen Modul-Layout (andere Modulmaße, andere Klemmbereiche) und an gealterten Dachhaken und Dichtungen. Was bleiben kann, entscheidet die Prüfung; Sicherheitskomponenten und DC-Steckverbinder tauschen wir grundsätzlich.',
    ),
    faqItem(
      'Was passiert mit den alten Modulen und Komponenten?',
      'Sie werden sortiert: Funktionsfähiges wird geprüft und ggf. weiterverwendet oder vermarktet, der Rest geht in die geregelte Verwertung nach ElektroG. Details dazu im Beitrag „Entsorgung und Recycling" – die Organisation übernehmen wir als Teil des Projekts.',
    ),
    faqItem(
      'Muss beim Umbau ein Gerüst gestellt werden?',
      'In aller Regel ja – Arbeitsschutz gilt für Rückbau wie Montage. Das Gerüst ist einer der Gründe, Dacharbeiten zu bündeln: Wer Sanierung und Anlagenumbau getrennt beauftragt, zahlt es zweimal.',
    ),
  ],
}

await upsertRatgeberArticle(article)
