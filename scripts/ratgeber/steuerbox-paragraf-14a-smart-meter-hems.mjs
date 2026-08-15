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
  titel: 'Steuerbox nach § 14a: Was Smart Meter, Steuerbox und HEMS jeweils machen',
  slug: 'steuerbox-paragraf-14a-smart-meter-hems',
  kategorie: 'strom-energiemanagement',
  status: 'veroeffentlicht',
  teaser:
    'Smart Meter, Smart-Meter-Gateway, Steuerbox und HEMS werden bei § 14a oft in einen Topf geworfen. Dabei erfüllen sie völlig unterschiedliche Aufgaben. Wir erklären die Signalkette, Direktsteuerung versus EMS, digitale Schnittstellen und was 2026 technisch wirklich relevant ist.',
  lesezeit: 15,

  seo: seo(
    'Steuerbox § 14a: Smart Meter & HEMS erklärt | PEAK.Energy',
    'Wie funktioniert die Steuerbox nach § 14a? Smart Meter, SMGW, Steuerbox, HEMS, Direktsteuerung, EEBUS und Mindestleistung verständlich erklärt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('§ 14a betrifft neue steuerbare Verbrauchseinrichtungen mit mehr als '),
      bold('4,2 kW Netzanschlussleistung'),
      t(' – typischerweise Wallbox, Wärmepumpe, Klimagerät und netzladender Stromspeicher.'),
    ),
    summaryPoint(
      t('Das '),
      bold('Smart-Meter-Gateway'),
      t(' ist die sichere Kommunikationsplattform. Eine Steuerbox beziehungsweise andere zulässige Steuerungseinrichtung setzt Steuerinformationen technisch zur Kundenanlage um.'),
    ),
    summaryPoint(
      t('Bei der '),
      bold('Direktansteuerung'),
      t(' wird eine steuerbare Verbrauchseinrichtung einzeln begrenzt. Bei Steuerung über ein '),
      bold('EMS/HEMS'),
      t(' erhält das Energiemanagement eine gemeinsame Leistungsgrenze und verteilt sie innerhalb des Hauses.'),
    ),
    summaryPoint(
      t('Der Netzbetreiber darf den normalen Haushaltsstrom nicht dimmen. Bei einer §-14a-Maßnahme geht es um den '),
      bold('netzwirksamen Leistungsbezug der steuerbaren Verbraucher'),
      t(' – nicht um eine willkürliche Abschaltung des Hauses.'),
    ),
    summaryPoint(
      t('Technisch entwickelt sich die Architektur weiter: VDE FNN beschreibt inzwischen sowohl die Steuerung über eine FNN-Steuerbox als auch eine '),
      bold('Steuerung direkt aus dem Smart-Meter-Gateway'),
      t('. Deshalb sollte man den Zählerschrank nicht auf eine einzige Übergangstechnik festnageln.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum bei § 14a so viele Begriffe durcheinandergehen')),
      p(
        t('Seit § 14a EnWG im Alltag angekommen ist, tauchen in Angeboten und Netzbetreiberunterlagen Begriffe wie Smart Meter, iMSys, Smart-Meter-Gateway, Steuerbox, CLS, EEBUS und HEMS gleichzeitig auf. Daraus entsteht schnell der Eindruck, das seien verschiedene Namen für dasselbe Gerät.'),
      ),
      p(
        t('Das sind sie nicht. Am einfachsten wird die Logik, wenn man die Aufgaben trennt: '),
        bold('messen, sicher kommunizieren, Steuerinformation übergeben und im Haus intelligent verteilen'),
        t('. Genau dafür sind unterschiedliche Komponenten zuständig.'),
      ),
    ),

    tabelleBlock('Die vier Ebenen im §-14a-System', [
      {
        spalte1: 'Stromzähler / moderne Messeinrichtung',
        spalte2: 'misst Energiebezug und Einspeisung',
        spalte3: 'Messung',
      },
      {
        spalte1: 'Smart-Meter-Gateway (SMGW)',
        spalte2: 'sichere Kommunikationsplattform des intelligenten Messsystems',
        spalte3: 'Kommunikation',
      },
      {
        spalte1: 'Steuerbox / Steuerungseinrichtung',
        spalte2: 'setzt Steuerinformationen an der Schnittstelle zur Kundenanlage um',
        spalte3: 'Steuerung',
      },
      {
        spalte1: 'EMS / HEMS',
        spalte2: 'verteilt verfügbare Leistung intelligent auf Wärmepumpe, Wallbox, Speicher usw.',
        spalte3: 'Optimierung im Gebäude',
      },
    ]),

    textBlock(
      h('h2', t('Welche Geräte fallen unter § 14a?')),
      p(
        t('Die neuen Regeln gelten seit dem 1. Januar 2024 für neu in Betrieb genommene steuerbare Verbrauchseinrichtungen mit mehr als 4,2 kW Netzanschlussleistung. Dazu gehören private Ladeeinrichtungen für Elektroautos, Wärmepumpen einschließlich bestimmter Zusatzheizungen, Anlagen zur Raumkühlung sowie Stromspeicher hinsichtlich ihrer Stromentnahme aus dem Netz.'),
      ),
      p(
        t('Wichtig beim Speicher: § 14a betrifft hier den '),
        bold('Netzbezug zum Laden'),
        t('. Die Einspeisung aus dem Speicher ins öffentliche Netz ist nicht Gegenstand dieser §-14a-Regelung.'),
      ),
      p(
        t('Die Bundesnetzagentur erklärt die aktuellen Regeln und betroffenen Anlagen auf ihrer '),
        link('Informationsseite zu steuerbaren Verbrauchseinrichtungen', 'https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/artikel.html', { newTab: true }),
        t('.'),
      ),
    ),

    hinweisBlock(
      '§ 14a bedeutet nicht „der Netzbetreiber schaltet dein Haus ab“',
      p(
        t('Der normale Haushaltsstrom ist von der netzorientierten Steuerung nicht betroffen. Im konkreten Gefährdungsfall darf der Netzbetreiber den netzwirksamen Leistungsbezug der steuerbaren Verbrauchseinrichtung reduzieren. Für typische Einzelanlagen muss grundsätzlich eine Mindestleistung von 4,2 kW verfügbar bleiben; für große Wärmepumpen und bestimmte Konstellationen gelten abweichende Berechnungen.'),
      ),
    ),

    textBlock(
      h('h2', t('Was macht das Smart-Meter-Gateway?')),
      p(
        t('Das Smart-Meter-Gateway ist die sichere Kommunikationseinheit des intelligenten Messsystems. Es verbindet die Mess- und Steuerungswelt im Gebäude mit den berechtigten externen Markt- und Netzrollen. Es ist deshalb weit mehr als ein WLAN-Modul am Stromzähler.'),
      ),
      p(
        t('Für § 14a ist diese sichere Kommunikationsinfrastruktur entscheidend, weil Steuerinformationen nicht über irgendeinen offenen Cloud-Kanal übertragen werden sollen. Das iMSys bildet dafür die standardisierte Infrastruktur.'),
      ),
      p(
        t('Was ein Smart Meter sonst kann und wann es Pflicht wird, erklären wir in unserem '),
        link('Smart-Meter-Ratgeber 2026', '/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Was macht die Steuerbox?')),
      p(
        t('Die Steuerbox ist vereinfacht die technische Brücke zwischen der sicheren Kommunikationswelt des Smart-Meter-Gateways und der Kundenanlage. Sie kann Steuerbefehle beziehungsweise Leistungsgrenzen an definierte Schnittstellen übergeben.'),
      ),
      p(
        t('Dabei gibt es analoge und digitale Konzepte. Relaisbasierte Lösungen können beispielsweise zwischen „keine Reduzierung“ und einer vorgegebenen Reduzierung umschalten. Digitale Schnittstellen ermöglichen deutlich feinere Leistungswerte und eine bessere Integration in ein Energiemanagement.'),
      ),
      p(
        t('VDE FNN hat die technische Spezifikation 2026 weiterentwickelt. Die aktuelle Testfallspezifikation zur FNN-Steuerbox berücksichtigt unter anderem digitale Schnittstellen auf Basis von '),
        bold('EEBUS und KNX'),
        t('. Weitere Informationen stellt '),
        link('VDE FNN zur aktuellen Steuerbox-Spezifikation', 'https://www.vde.com/de/fnn/aktuelles/testfallspezifiktion-steuerbox', { newTab: true }),
        t(' bereit.'),
      ),
    ),

    hinweisBlock(
      'Die Steuerbox ist nicht die einzige denkbare Architektur',
      p(
        t('Die Technik entwickelt sich weiter. VDE FNN beschreibt inzwischen zwei Steuerungsoptionen: über eine FNN-Steuerbox oder direkt über das Smart-Meter-Gateway. Für die Planung ist deshalb wichtiger, standardisierte Schnittstellen und ausreichend Platz vorzubereiten, als das gesamte Haus auf eine einzige aktuelle Gerätegeneration festzulegen.'),
      ),
    ),

    textBlock(
      h('h2', t('Direktansteuerung oder Steuerung über EMS?')),
      p(
        t('Die Bundesnetzagentur lässt grundsätzlich zwei Wege zu. Bei der Direktansteuerung wird die einzelne steuerbare Verbrauchseinrichtung betrachtet. Bei der Steuerung über ein EMS wird eine gesamthafte Leistungsobergrenze für die angeschlossenen steuerbaren Verbraucher übermittelt.'),
      ),
      p(
        t('Das EMS entscheidet dann innerhalb dieser Grenze selbst, wie die verfügbare Leistung verteilt wird. Dadurch kann beispielsweise die Wärmepumpe priorisiert werden, während das E-Auto langsamer lädt. Gleichzeitig kann lokal erzeugter PV-Strom oder Energie aus dem Speicher berücksichtigt werden.'),
      ),
    ),

    tabelleBlock('Direktsteuerung oder HEMS/EMS?', [
      {
        spalte1: 'Direktansteuerung',
        spalte2: 'Gerät wird einzeln betrachtet',
        spalte3: 'einfacher bei einzelnen Verbrauchern, weniger flexibel im Gesamtsystem',
      },
      {
        spalte1: 'EMS/HEMS-Steuerung',
        spalte2: 'gemeinsame Leistungsgrenze am Netzanschluss',
        spalte3: 'Leistung kann intelligent zwischen mehreren Geräten verteilt werden',
      },
      {
        spalte1: 'PV + Speicher + Wärmepumpe + Wallbox',
        spalte2: 'EMS meist technisch interessanter',
        spalte3: 'Eigenerzeugung und Prioritäten können im Haus berücksichtigt werden',
      },
    ]),

    textBlock(
      h('h2', t('Ein Beispiel aus dem Einfamilienhaus')),
      p(
        t('Angenommen, ein Haus hat Wärmepumpe, 11-kW-Wallbox, Stromspeicher und Photovoltaik. Eine reine Direktsteuerung betrachtet die steuerbaren Verbraucher getrennt. Ein HEMS kann dagegen den tatsächlichen Netzbezug am Anschluss als Ganzes betrachten.'),
      ),
      p(
        t('Scheint mittags die Sonne, kann die Wallbox trotz einer netzseitigen Bezugsgrenze mehr Leistung nutzen, solange der zusätzliche Strom aus der eigenen PV-Anlage kommt und der zulässige Netzbezug nicht überschritten wird. Abends kann das System dagegen Wallbox und Speicherladung reduzieren und die Wärmepumpe priorisieren.'),
      ),
      p(
        t('Genau diese lokale Optimierung ist der Unterschied zwischen '),
        bold('„steuerbar sein“'),
        t(' und '),
        bold('„intelligent gesteuert werden“'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum der Zählerschrank Teil der Planung ist')),
      p(
        t('Für Smart-Meter-Gateway, Steuertechnik, Schnittstellen und Kommunikationsleitungen braucht es geeignete Funktionsflächen und eine saubere Übergabe zur Kundenanlage. Besonders bei älteren Zählerschränken ist deshalb zu prüfen, ob die vorhandene Anlage erweitert werden kann oder angepasst werden muss.'),
      ),
      p(
        t('Das heißt ausdrücklich nicht: „Alt = neuer Zählerschrank“. Entscheidend sind Zustand, Aufbau, Platz, Schutzkonzept, Dauerstrombelastung und die Anforderungen des zuständigen Netz- beziehungsweise Messstellenbetreibers.'),
      ),
    ),

    tippBlock(
      'Heute schon die Datenleitung mitdenken',
      p(
        t('Wer PV, Wärmepumpe oder Wallbox neu baut, sollte die spätere digitale Steuerung nicht erst beim Einbau der Steuerbox entdecken. Datenwege zwischen Zählerschrank, HEMS und steuerbaren Geräten gehören in die Elektroplanung.'),
      ),
    ),

    textBlock(
      h('h2', t('Was hat die Steuerbox mit PEAK.Flex oder einem HEMS zu tun?')),
      p(
        t('Eine Steuerbox ist keine Konkurrenz zu einem HEMS. Sie erfüllt die netzseitige Steuerungsfunktion. Das HEMS optimiert dagegen den Betrieb innerhalb der Kundenanlage – nach PV-Erzeugung, Strompreis, Ladezustand, Komfortvorgaben und Prioritäten.'),
      ),
      p(
        t('Ein gutes System muss deshalb zwei Welten gleichzeitig beherrschen: '),
        bold('externe Vorgaben sicher respektieren und innerhalb dieser Grenzen lokal möglichst intelligent arbeiten'),
        t('. Genau das ist langfristig die spannendere Aufgabe als nur einzelne Geräte per Relais ein- und auszuschalten.'),
      ),
      p(
        t('Mehr zur Rolle eines echten Energiemanagementsystems findest du im Artikel '),
        link('HEMS oder Hersteller-App?', '/strom-energiemanagement/hems-home-energy-management-system-hersteller-app'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Schnittstellen statt Insellösungen planen')),
      p(
        t('§ 14a macht das Energiesystem im Haus nicht automatisch schlechter – es zwingt uns vielmehr dazu, Messung, Kommunikation und Steuerung sauber zu strukturieren. Wer nur die Steuerbox betrachtet, sieht deshalb zu wenig.'),
      ),
      p(
        t('Für ein modernes Haus gehören Smart Meter, sichere Steuerkommunikation und lokales Energiemanagement zusammen. Die beste Lösung ist nicht die mit den meisten Geräten, sondern die, bei der '),
        bold('jede Ebene eine klare Aufgabe hat und über offene beziehungsweise standardisierte Schnittstellen zusammenspielt'),
        t('.'),
      ),
    ),

    ctaBlock({
      titel: '§ 14a nicht als Einzelbauteil planen',
      text:
        'Wir betrachten Zählerschrank, Smart Meter, Wärmepumpe, Speicher, Wallbox und Energiemanagement als ein System. So bleibt die Anlage steuerbar, verständlich und erweiterbar.',
      buttonText: 'Energiesystem planen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist eine Steuerbox nach § 14a?',
      'Die Steuerbox ist eine technische Steuerungseinrichtung im Umfeld des intelligenten Messsystems. Sie kann Netzbetreiber-Steuerinformationen an definierte Schnittstellen der Kundenanlage beziehungsweise an steuerbare Verbrauchseinrichtungen oder ein EMS übergeben.',
    ),
    faqItem(
      'Brauche ich für § 14a ein Smart Meter?',
      'Die steuerbare Verbrauchseinrichtung muss grundsätzlich in die vorgesehene intelligente Mess- und Steuerungsinfrastruktur eingebunden werden können. Der tatsächliche Rollout von iMSys und Steuertechnik erfolgt nach den gesetzlichen Vorgaben und Prozessen des Messstellenbetreibers.',
    ),
    faqItem(
      'Kann der Netzbetreiber mit § 14a meine Wärmepumpe ausschalten?',
      'Die Regelung sieht eine temporäre Begrenzung des netzwirksamen Leistungsbezugs bei einer konkreten Netzgefährdung vor, keine beliebige Komplettabschaltung des Haushalts. Für typische Einzelanlagen muss grundsätzlich eine Mindestleistung verfügbar bleiben.',
    ),
    faqItem(
      'Was ist besser: Direktsteuerung oder HEMS?',
      'Bei nur einem Verbraucher kann Direktsteuerung technisch einfach sein. Bei PV, Speicher, Wärmepumpe und Wallbox bietet ein EMS/HEMS deutlich mehr Möglichkeiten, die verfügbare Netzleistung sinnvoll auf mehrere Geräte zu verteilen.',
    ),
    faqItem(
      'Ist EEBUS für § 14a vorgeschrieben?',
      'Nicht pauschal für jede Kundenanlage. EEBUS ist eine relevante standardisierte digitale Schnittstelle und wird in den aktuellen VDE-FNN-Spezifikationen für Steuerboxen berücksichtigt. Welche Schnittstelle konkret eingesetzt wird, hängt vom Messstellenbetreiber und der technischen Umsetzung ab.',
    ),
  ],
}

await upsertRatgeberArticle(article)
