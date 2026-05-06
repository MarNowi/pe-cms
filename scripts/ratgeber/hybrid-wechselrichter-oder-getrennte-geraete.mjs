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
  titel: 'Hybrid-Wechselrichter oder getrennte Geräte: Was ist sinnvoller bei PV mit Speicher?',
  slug: 'hybrid-wechselrichter-oder-getrennte-geraete',
  kategorie: 'solaranlage',
  status: 'veroeffentlicht',
  teaser:
    'PV-Wechselrichter und Batterie-Wechselrichter in einem Gerät – oder zwei getrennte Systeme? Beide Wege haben Berechtigung. Welcher passt, hängt nicht von Werbeversprechen ab, sondern von Anlagenkonzept, Bestand und Erweiterungsplänen.',
  lesezeit: 11,

  seo: seo(
    'Hybrid-Wechselrichter vs. getrennte Geräte | PEAK.Energy',
    'Hybrid-Wechselrichter oder getrennte Geräte? Ehrliche Einordnung zu Topologie, Notstrom, Erweiterbarkeit und typischen Denkfehlern bei der Auswahl von PV-Wechselrichter und Speicher-Wechselrichter.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein Hybrid-Wechselrichter vereint PV-Wechselrichter und Batterie-Wechselrichter in '),
      bold('einem Gerät'),
      t('. Eine Verkabelung, eine Kommunikation, eine Bedienoberfläche.'),
    ),
    summaryPoint(
      t('Bei einem AC-gekoppelten System sind PV-Wechselrichter und Speicher '),
      bold('zwei getrennte Geräte'),
      t(' mit eigener Steuerung. Sie können von unterschiedlichen Herstellern kommen.'),
    ),
    summaryPoint(
      t('Hybrid ist meistens die richtige Wahl, wenn PV und Speicher gleichzeitig geplant werden. AC-gekoppelt ist sinnvoll, wenn an eine bestehende PV-Anlage später ein Speicher ergänzt werden soll.'),
    ),
    summaryPoint(
      t('Wichtige Unterschiede zeigen sich in den Themen Notstrom, Erweiterbarkeit und Wirkungsgrad – und nicht im Marketing-Datenblatt.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Worum geht es eigentlich?')),
      p(
        t('Wer eine PV-Anlage mit Speicher plant, hat zwei grundlegend verschiedene Wege zur Auswahl. Auf den ersten Blick wirken beide gleich – am Ende kommt ja in beiden Fällen Strom aus der Steckdose. Technisch sind die Unterschiede aber substanziell.'),
      ),
      p(
        t('Beide Topologien funktionieren, beide haben ihre Berechtigung. Welche im konkreten Fall die richtige ist, entscheidet sich an wenigen Punkten: Ist es ein Neubau oder eine Bestandsanlage? Soll Notstrom möglich sein? Wie soll später erweitert werden?'),
      ),
    ),

    textBlock(
      h('h2', t('Hybrid-Wechselrichter: ein Gerät für PV und Speicher')),
      p(
        t('Ein Hybrid-Wechselrichter (auch DC-gekoppelt genannt) verarbeitet sowohl den Solarstrom vom Dach als auch den Strom aus der Batterie über '),
        bold('einen einzigen Wechselrichter'),
        t('. Die Module liefern Gleichstrom, die Batterie speichert Gleichstrom – die Wandlung in Wechselstrom passiert nur einmal, an einer zentralen Stelle.'),
      ),
      p(
        t('Das hat mehrere Vorteile in der Praxis: weniger Verkabelung, weniger Kommunikationsschnittstellen, weniger potenzielle Fehlerquellen. Die Steuerung des Energieflusses zwischen Modul, Speicher, Hausverbrauch und Netz läuft im selben Gerät.'),
      ),
      p(
        t('Typische Vertreter sind etwa Sungrow SH-RT, Fronius GEN24 Plus, Huawei SUN2000 oder Kostal Plenticore. Sie unterscheiden sich in Detail-Eigenschaften wie MPP-Trackern, Backup-Verhalten oder Kommunikationsoptionen, folgen aber demselben Konzept.'),
      ),
    ),

    hinweisBlock(
      'Hybrid heißt nicht automatisch besser',
      p(
        t('Der Begriff „Hybrid" wird im Marketing oft als Qualitätsmerkmal verwendet. Tatsächlich beschreibt er nur die Topologie. Ob ein Hybrid-Wechselrichter im konkreten Fall der bessere Weg ist, hängt vom Anlagenkonzept ab – nicht vom Wort auf dem Datenblatt.'),
      ),
    ),

    textBlock(
      h('h2', t('AC-gekoppelt: zwei getrennte Geräte')),
      p(
        t('Beim AC-gekoppelten System bleibt der PV-Wechselrichter ein klassisches Gerät, das den Solarstrom in Wechselstrom umwandelt. Der Speicher hat einen '),
        bold('eigenen Batterie-Wechselrichter'),
        t(', der unabhängig vom PV-Wechselrichter arbeitet. Beide kommunizieren über ein Energiemanagement, das den Energiefluss regelt.'),
      ),
      p(
        t('Das hat einen entscheidenden Vorteil: '),
        bold('PV-Wechselrichter und Speicher sind unabhängig voneinander wählbar'),
        t('. Eine bestehende SMA Tripower-Anlage kann zum Beispiel mit einem Speicher von BYD, Sonnen oder einem anderen Hersteller ergänzt werden, ohne den PV-Wechselrichter zu tauschen.'),
      ),
      p(
        t('Der Nachteil: Der Strom wird zweimal gewandelt – einmal von Modul-DC in AC durch den PV-Wechselrichter und nochmal von AC zurück in Batterie-DC, wenn er in den Speicher fließt. Daraus ergibt sich ein leicht schlechterer Wirkungsgrad bei der Speicherung. In der Praxis liegt der Unterschied bei wenigen Prozent.'),
      ),
    ),

    tabelleBlock('Hybrid und AC-gekoppelt im Vergleich', [
      {
        spalte1: 'Anzahl Geräte',
        spalte2: 'Hybrid: ein Gerät · AC-gekoppelt: zwei',
        spalte3:
          'Hybrid braucht weniger Platz, weniger Kabel und reduziert die Komplexität. AC-gekoppelt erlaubt unabhängige Hersteller-Wahl',
      },
      {
        spalte1: 'Wirkungsgrad bei Speicherung',
        spalte2: 'Hybrid leicht besser',
        spalte3:
          'eine Wandlung weniger spart einige Prozent Verlust beim Laden und Entladen – im Jahresergebnis spürbar, aber kein Game-Changer',
      },
      {
        spalte1: 'Erweiterung an Bestandsanlage',
        spalte2: 'AC-gekoppelt klar im Vorteil',
        spalte3:
          'wer eine bestehende PV-Anlage hat und später einen Speicher ergänzen möchte, kommt mit AC-Kopplung ohne Tausch des PV-Wechselrichters aus',
      },
      {
        spalte1: 'Notstromfähigkeit',
        spalte2: 'oft beim Hybrid einfacher',
        spalte3:
          'viele Hybrid-Wechselrichter bringen eine integrierte Notstromfunktion mit – AC-gekoppelte Lösungen brauchen meist eine zusätzliche Umschalt-Komponente',
      },
      {
        spalte1: 'Hersteller-Bindung',
        spalte2: 'Hybrid: Komponenten meist vom selben Hersteller',
        spalte3:
          'Hybrid-Wechselrichter und passende Speicher kommen häufig vom gleichen Hersteller. AC-gekoppelt erlaubt freiere Auswahl',
      },
    ]),

    tippBlock(
      'Wirkungsgrad ist nicht das Hauptkriterium',
      p(
        t('Der Wirkungsgradunterschied zwischen Hybrid und AC-gekoppelt ist real, aber meist nicht das entscheidende Argument. Wichtiger sind die Fragen Notstrom, Erweiterung und Bestand. Wer rein nach Datenblatt-Wirkungsgrad entscheidet, verpasst die wirtschaftlich relevanteren Punkte.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann ist ein Hybrid-Wechselrichter sinnvoll?')),
      p(
        t('Hybrid ist meistens die richtige Wahl in Standardsituationen, in denen PV und Speicher von Anfang an zusammen geplant werden.'),
      ),
      ul(
        p(t('Bei einer Neuinstallation, wo PV-Anlage und Speicher gleichzeitig gebaut werden')),
        p(t('Wenn der Speicher modular erweiterbar bleiben soll – viele Hybrid-Hersteller bieten dazu passende Speicher in mehreren Größenstufen')),
        p(t('Wenn Notstrom oder Backup-Fähigkeit gewünscht ist und mit einer integrierten Lösung umgesetzt werden soll')),
        p(t('Wenn Platzangebot im Hauswirtschaftsraum oder Keller eng ist')),
        p(t('Wenn ein einheitliches Monitoring und eine zentrale Steuerung gewünscht sind')),
      ),
      p(
        t('In diesen Fällen spielt der Hybrid seine strukturellen Vorteile aus. Weniger Geräte, weniger Schnittstellen, weniger potenzielle Fehlerquellen – und die Möglichkeit, das System mit einem klaren Konzept aufzubauen.'),
      ),
    ),

    textBlock(
      h('h2', t('Wann ist AC-gekoppelt die bessere Wahl?')),
      p(
        t('AC-gekoppelte Systeme haben dort ihre Berechtigung, wo Hybrid an seine Grenzen kommt – vor allem im Bestand und bei größeren Anlagen.'),
      ),
      ul(
        p(t('Wenn an eine bestehende PV-Anlage ein Speicher ergänzt werden soll und der vorhandene PV-Wechselrichter erhalten bleibt')),
        p(t('Wenn ein deutlich größerer Speicher geplant ist, als die Hybrid-Lösungen typischer Hersteller hergeben')),
        p(t('Wenn der Speicher gezielt von einem anderen Hersteller kommen soll als der PV-Wechselrichter')),
        p(t('Wenn mehrere PV-Stränge mit unterschiedlichen Eigenschaften (verschiedene Dachflächen, unterschiedliche Module) bedient werden müssen')),
        p(t('Wenn ein bestehendes Notstrom-Konzept mit eigener Umschalteinrichtung weiter genutzt werden soll')),
      ),
      p(
        bold('Die wirtschaftliche Faustregel: Wer von Null plant, fährt mit Hybrid meist günstiger und einfacher. Wer Bestand integrieren will, ist mit AC-Kopplung flexibler'),
        t('.'),
      ),
    ),

    hinweisBlock(
      'Bestandsanlage nachrüsten heißt nicht zwingend AC-gekoppelt',
      p(
        t('Es ist nicht ausgeschlossen, eine bestehende PV-Anlage durch einen Hybrid-Wechselrichter zu ersetzen und damit auf DC-Kopplung umzustellen. Sinnvoll ist das aber nur, wenn der bestehende PV-Wechselrichter ohnehin am Lebensende ist oder die Anlage komplett überarbeitet wird.'),
      ),
    ),

    textBlock(
      h('h2', t('Notstrom: ein wichtiger Unterschied in der Praxis')),
      p(
        t('Eines der häufigsten Auswahlkriterien ist die Frage, ob bei Stromausfall noch Strom verfügbar sein soll. Hier unterscheiden sich beide Topologien deutlich.'),
      ),
      p(
        t('Hybrid-Wechselrichter haben oft eine integrierte Notstromfunktion: Bei Netzausfall trennt sich das Haus vom Netz und wird aus Speicher und PV weiterversorgt. Die Umschaltung passiert in unter 20 Millisekunden – '),
        bold('schnell genug, dass Computer und Beleuchtung nicht ausgehen'),
        t('.'),
      ),
      p(
        t('AC-gekoppelte Systeme können das auch, brauchen dafür aber meist eine separate Umschalt-Komponente, einen sogenannten Backup-Switch oder eine Inselnetzbildung über den Speicher-Wechselrichter. Das funktioniert technisch sauber, ist aber ein zusätzliches Bauteil und ein zusätzlicher Planungsaufwand.'),
      ),
      p(
        t('Wichtig zu wissen: Notstrom ist nicht gleich Notstrom. Manche Lösungen versorgen das ganze Haus, andere nur ausgewählte Stromkreise. Manche schalten in Millisekunden, andere brauchen Sekunden. Diese Details gehören in die Planung – nicht in die Werbung.'),
      ),
    ),

    textBlock(
      h('h2', t('Was viele bei der Auswahl falsch einschätzen')),
      p(
        t('Bei der Entscheidung zwischen Hybrid und AC-gekoppelt tauchen immer wieder dieselben Denkfehler auf.'),
      ),
      ul(
        p(t('Hybrid wird als „die moderne Lösung" verkauft, AC-gekoppelt als „veraltet" – das ist beides falsch. Beide Topologien werden aktiv weiterentwickelt und haben ihre eigenen Stärken.')),
        p(t('Der Wirkungsgrad-Unterschied wird in den Vordergrund gestellt, obwohl er im Jahresertrag oft im einstelligen Prozentbereich liegt.')),
        p(t('Notstrom wird als „Standardfunktion" angenommen, obwohl die konkrete Umsetzung je nach Wechselrichter und Konzept stark variiert.')),
        p(t('Die Erweiterbarkeit wird übersehen – wer in fünf Jahren den Speicher verdoppeln möchte, sollte das schon heute mitdenken.')),
        p(t('Die Hersteller-Bindung wird unterschätzt: Bei Hybrid-Lösungen bleibt man oft im Ökosystem eines Herstellers, was Vor- und Nachteile hat.')),
      ),
      p(
        bold('Eine ehrliche Einordnung muss alle Aspekte gleichzeitig betrachten – nicht nur das Argument, das gerade in den eigenen Verkaufstrichter passt'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Was wir in der Praxis empfehlen')),
      p(
        t('Für die meisten Privathaushalte, die heute neu planen, ist ein Hybrid-Wechselrichter die richtige Wahl. Die Komplexität bleibt überschaubar, das Notstromthema ist sauber abgedeckt, der modulare Speicher kann später wachsen.'),
      ),
      p(
        t('Bei Bestandsanlagen, die nachgerüstet werden sollen, lohnt sich fast immer die AC-gekoppelte Variante. Der vorhandene PV-Wechselrichter bleibt erhalten, der Speicher wird sauber integriert, und das Gesamtsystem läuft weiter.'),
      ),
      p(
        t('In jedem Fall gilt: '),
        bold('Die Topologie ist nicht die wichtigste Entscheidung – sondern die Frage, ob das gewählte Konzept zum Haus, zum Verbrauch und zu den Plänen der nächsten Jahre passt'),
        t('. Ein gut geplantes AC-System ist besser als ein schlecht geplantes Hybrid-System – und umgekehrt.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die Entscheidung zwischen Hybrid-Wechselrichter und AC-gekoppeltem System ist keine Glaubensfrage, sondern eine Auslegungsfrage. Beide Topologien funktionieren, beide haben ihre Stärken, beide werden aktiv weiterentwickelt.'),
      ),
      p(
        t('Wer von Null plant, fährt mit Hybrid in den meisten Fällen einfacher. Wer im Bestand erweitern will, profitiert von der Flexibilität der AC-Kopplung. Notstrom, Erweiterbarkeit und Hersteller-Wahl sind die Kriterien, die in der Praxis den Unterschied machen – nicht der Datenblatt-Wirkungsgrad allein.'),
      ),
      p(
        bold('Die richtige Wahl hängt davon ab, wie ehrlich man die eigene Ausgangslage und die Pläne der nächsten Jahre einordnet'),
        t(' – nicht von Marketing-Argumenten und nicht von einem pauschalen Urteil zugunsten einer Topologie.'),
      ),
    ),

    ctaBlock({
      titel: 'PV mit Speicher sauber auslegen lassen',
      text:
        'Wir prüfen, welche Topologie zu deinem Haus, deinem Verbrauch und deinen Erweiterungsplänen passt – und legen das System ehrlich aus, statt eine vorgefertigte Lösung durchzudrücken.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist der Unterschied zwischen Hybrid-Wechselrichter und AC-gekoppeltem System?',
      'Ein Hybrid-Wechselrichter verarbeitet PV-Strom und Batterie-Strom in einem Gerät. Ein AC-gekoppeltes System nutzt zwei getrennte Wechselrichter – einen für die PV-Anlage und einen separaten für den Speicher.',
    ),
    faqItem(
      'Ist ein Hybrid-Wechselrichter immer besser?',
      'Nein. Hybrid ist bei Neuinstallationen oft die einfachere und effizientere Lösung. Bei Nachrüstung an einer bestehenden PV-Anlage ist meist AC-gekoppelt sinnvoller, weil der bestehende PV-Wechselrichter erhalten bleiben kann.',
    ),
    faqItem(
      'Wie groß ist der Wirkungsgradunterschied?',
      'Beim Hybrid-Wechselrichter wird der Strom seltener gewandelt, deshalb liegt der Wirkungsgrad bei Speicherung leicht höher. In der Praxis liegt der Unterschied im Jahresertrag bei wenigen Prozent – relevant, aber selten das entscheidende Kriterium.',
    ),
    faqItem(
      'Geht Notstrom mit beiden Topologien?',
      'Ja, aber unterschiedlich umgesetzt. Hybrid-Wechselrichter haben oft eine integrierte Notstromfunktion. AC-gekoppelte Systeme brauchen meist einen zusätzlichen Backup-Switch oder eine Inselnetzbildung über den Speicher-Wechselrichter.',
    ),
    faqItem(
      'Kann ich an einen Hybrid-Wechselrichter jeden Speicher anschließen?',
      'Nein. Hybrid-Wechselrichter sind in der Regel auf bestimmte Speicherserien des gleichen Herstellers ausgelegt. Wer freier wählen möchte, ist mit AC-gekoppelten Systemen flexibler.',
    ),
    faqItem(
      'Lohnt sich ein Wechsel von AC-gekoppelt auf Hybrid?',
      'Selten allein deshalb. Sinnvoll wird das nur, wenn der bestehende PV-Wechselrichter ohnehin am Lebensende ist oder die gesamte Anlage überarbeitet wird. Ein reiner Topologie-Wechsel rechnet sich in der Regel nicht.',
    ),
  ],
}

await upsertRatgeberArticle(article)
