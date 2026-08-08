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
  titel: 'PV-Module entsorgen: Recycling, Pflichten und was Altmodule noch wert sind',
  slug: 'entsorgung-recycling',
  kategorie: 'repowering',
  status: 'veroeffentlicht',
  teaser:
    'Beim Repowering fallen Altmodule, Wechselrichter und Montagematerial an – und die dürfen nicht einfach in den Container. Was das Elektrogesetz vorschreibt, wie PV-Recycling funktioniert, wann Module ein zweites Leben verdienen und warum die Entsorgung zum Projekt gehört.',
  lesezeit: 7,
  seo: seo(
    'PV-Module entsorgen & recyceln: Pflichten und Ablauf | PEAK.Energy',
    'PV-Entsorgung beim Repowering: ElektroG-Pflichten, kostenlose Rücknahme, Recyclingquoten von über 80 %, Zweitmarkt für funktionierende Module – und was mit Wechselrichter und Speicher passiert.',
  ),
  zusammenfassung: [
    summaryPoint(
      t('PV-Module sind '),
      bold('Elektrogeräte im Sinne des ElektroG'),
      t(' – sie gehören in die getrennte Sammlung, nicht in Bauschutt oder Restmüll.'),
    ),
    summaryPoint(
      t('Für private Haushaltsmengen ist die Abgabe an kommunalen Sammelstellen '),
      bold('kostenlos'),
      t('; bei größeren gewerblichen Mengen laufen Rücknahme und Nachweise über spezialisierte Systeme.'),
    ),
    summaryPoint(
      t('Module bestehen zum großen Teil aus '),
      bold('Glas, Aluminium, Silizium und Kupfer'),
      t(' – der überwiegende Anteil der Materialien lässt sich zurückgewinnen.'),
    ),
    summaryPoint(
      t('Funktionierende Altmodule sind kein Müll: Für geprüfte Gebrauchtmodule gibt es einen Zweitmarkt – die Prüfung gehört zum Rückbau dazu.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Was das Gesetz verlangt')),
      p(
        t('Photovoltaikmodule fallen unter das '),
        bold('Elektro- und Elektronikgerätegesetz (ElektroG)'),
        t(', die deutsche Umsetzung der europäischen WEEE-Richtlinie. Das bedeutet: getrennte Sammlung, geregelte Verwertung und Rücknahmepflichten der Hersteller. Altmodule im Bauschutt-Container sind keine Grauzone, sondern ein Verstoß – und angesichts der funktionierenden Rücknahmewege auch völlig unnötig.'),
      ),
      p(
        t('Für '),
        bold('private Betreiber'),
        t(' ist die Sache erfreulich einfach: Haushaltsübliche Mengen können kostenlos an kommunalen Wertstoffhöfen abgegeben werden, die PV-Module als eigene Sammelgruppe führen. Auch Vertreiber und Hersteller nehmen unter bestimmten Bedingungen zurück.'),
      ),
      p(
        t('Bei '),
        bold('gewerblichen Anlagen'),
        t(' – Hallendächer, Freiflächen, größere Stückzahlen – läuft die Entsorgung über zertifizierte Erstbehandlungsanlagen und Rücknahmesysteme, inklusive der Nachweise, die ein Gewerbebetrieb für seine Unterlagen braucht. Das organisieren wir im Rahmen des Rückbaus mit.'),
      ),
    ),
    textBlock(
      h('h2', t('Wie PV-Recycling funktioniert')),
      p(
        t('Ein kristallines Standardmodul besteht grob aus zwei Dritteln Glas, einem Aluminiumrahmen, Silizium-Zellen, Kupferleitungen und Kunststofffolien. Rahmen und Anschlussdose werden demontiert, das Glas wird vom Zellverbund getrennt, Metalle werden zurückgewonnen. '),
        bold('Der überwiegende Teil des Modulgewichts lässt sich stofflich verwerten'),
        t(' – Glas und Aluminium nahezu vollständig, und moderne Verfahren holen zunehmend auch Silizium und Silber in verwertbarer Qualität zurück.'),
      ),
      p(
        t('Wechselrichter und Montagematerial gehen eigene Wege: Der Wechselrichter ist klassischer Elektroschrott mit hohem Metallanteil, die Aluminium-Unterkonstruktion ist sortenreiner Wertstoff und wird über den Metallhandel verwertet.'),
      ),
    ),
    hinweisBlock(
      'Speicher und Batterien laufen getrennt',
      p(
        t('Ein stillgelegter Batteriespeicher gehört nicht in die Modul-Sammlung: Für Batterien gilt das Batteriegesetz mit eigenen Rücknahmesystemen der Hersteller. Lithium-Speicher sind zudem Gefahrgut – Transport und Zwischenlagerung gehören in professionelle Hände. Wer beim Repowering einen Altspeicher ersetzt, sollte die Rücknahme direkt über Hersteller oder Fachbetrieb abwickeln.'),
      ),
    ),
    tabelleBlock('Was wohin geht', [
      {
        spalte1: 'PV-Module (privat, haushaltsübliche Menge)',
        spalte2: 'Kommunale Sammelstelle / Wertstoffhof',
        spalte3: 'Kostenlos – Module als eigene Sammelgruppe nach ElektroG',
      },
      {
        spalte1: 'PV-Module (gewerblich, größere Mengen)',
        spalte2: 'Zertifizierte Rücknahmesysteme',
        spalte3: 'Mit Verwertungsnachweis – Organisation über den Fachbetrieb',
      },
      {
        spalte1: 'Funktionsfähige Altmodule',
        spalte2: 'Zweitmarkt / Weiterverwendung',
        spalte3: 'Nach Prüfung und Leistungsmessung – besser als Verschrottung',
      },
      {
        spalte1: 'Wechselrichter',
        spalte2: 'Elektroschrott-Sammlung',
        spalte3: 'Hoher Metallanteil, gut verwertbar',
      },
      {
        spalte1: 'Unterkonstruktion (Aluminium/Stahl)',
        spalte2: 'Metallverwertung',
        spalte3: 'Sortenreiner Wertstoff mit Restwert',
      },
      {
        spalte1: 'Batteriespeicher',
        spalte2: 'Hersteller-Rücknahme nach Batteriegesetz',
        spalte3: 'Gefahrgut – nicht über die Modul-Schiene entsorgen',
      },
    ]),
    tippBlock(
      'Erst prüfen, dann entsorgen',
      p(
        t('Nicht jedes demontierte Modul ist Schrott. Module, die beim Diagnose-Check und der Demontage unbeschädigt bleiben und ihre Leistung im Test bestätigen, lassen sich als geprüfte Gebrauchtmodule weiterverwenden oder vermarkten – für Gartenprojekte, Inselanlagen oder den Export. Das ist ökologisch sinnvoller als Recycling und kann einen kleinen Teil der Repowering-Kosten zurückholen.'),
      ),
    ),
    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die Entsorgung ist der unglamouröseste Teil eines Repowering-Projekts – aber einer mit klaren Regeln und funktionierenden Wegen. Für Privathaushalte ist sie unkompliziert und kostenlos, für Gewerbebetriebe eine Frage der richtigen Organisation und Nachweise.'),
      ),
      p(
        bold('Bei uns gehört die Entsorgung zum Projekt'),
        t(': Wir demontieren, prüfen auf Weiterverwendbarkeit, trennen die Stoffströme und übernehmen die fachgerechte Entsorgung samt Nachweisen. Das Dach wird leer übergeben oder direkt neu belegt – ohne dass sich der Betreiber um Container und Sammelstellen kümmern muss.'),
      ),
    ),
    ctaBlock({
      titel: 'Rückbau und Entsorgung aus einer Hand',
      text:
        'Demontage, Prüfung auf Weiterverwendung und fachgerechte Entsorgung mit Nachweis – als Teil Ihres Repowering-Projekts oder als eigenständiger Auftrag.',
      buttonText: 'Anfrage stellen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Was kostet die Entsorgung alter PV-Module?',
      'Für private Betreiber mit haushaltsüblichen Mengen: nichts – die Abgabe an kommunalen Sammelstellen ist kostenlos. Kosten entstehen für Demontage und Transport, die beim Repowering ohnehin anfallen. Bei gewerblichen Mengen hängen die Kosten von Stückzahl und Logistik ab.',
    ),
    faqItem(
      'Kann ich alte Module einfach im Garten weiterverwenden?',
      'Grundsätzlich ja – funktionsfähige Module lassen sich etwa für eine Inselanlage nutzen. Wichtig ist eine elektrische Prüfung vor der Weiterverwendung, denn beschädigte Module (Glasbruch, Isolationsfehler) sind ein Sicherheitsrisiko. Für netzgekoppelte Weiterverwendung gelten die üblichen Anmelde- und Installationspflichten.',
    ),
    faqItem(
      'Wie viel eines PV-Moduls wird tatsächlich recycelt?',
      'Der überwiegende Teil des Modulgewichts – vor allem Glas und Aluminium – wird stofflich verwertet; die gesetzlichen Verwertungsquoten für diese Gerätekategorie liegen hoch. An der wirtschaftlichen Rückgewinnung von Silizium und Silber arbeitet die Branche mit zunehmendem Erfolg, getrieben durch die wachsenden Altmodulmengen.',
    ),
    faqItem(
      'Wer kümmert sich beim Repowering um die Entsorgung?',
      'Im Regelfall der ausführende Fachbetrieb – bei uns ist das fester Bestandteil des Rückbaus: Stoffströme trennen, Weiterverwendbares aussortieren, Übriges fachgerecht entsorgen, Nachweise dokumentieren. Details zum Ablauf im Beitrag zu Rückbau und Montage.',
    ),
  ],
}

await upsertRatgeberArticle(article)
