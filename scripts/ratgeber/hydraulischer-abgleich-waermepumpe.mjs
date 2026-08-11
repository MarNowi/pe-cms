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
  titel: 'Hydraulischer Abgleich bei Wärmepumpen: Warum er so wichtig ist',
  slug: 'hydraulischer-abgleich-waermepumpe',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Wenn ein Heizkörper zu viel Wasser bekommt und der entfernteste Raum zu wenig, wird häufig einfach die Vorlauftemperatur erhöht. Genau das kostet einer Wärmepumpe Effizienz.',
  lesezeit: 11,

  seo: seo(
    'Hydraulischer Abgleich Wärmepumpe: einfach erklärt | PEAK.Energy',
    'Was ein hydraulischer Abgleich bei Wärmepumpen bringt, warum er niedrige Vorlauftemperaturen unterstützt und weshalb er zur guten Planung gehört.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Beim hydraulischen Abgleich wird der Heizwasserstrom so eingestellt, dass '),
      bold('jeder Raum die benötigte Wärmemenge erhält'),
      t('.'),
    ),
    summaryPoint(
      t('Bei Wärmepumpen ist das besonders wichtig, weil niedrige Vorlauftemperaturen und stabile Volumenströme die Effizienz des Gesamtsystems unterstützen.'),
    ),
    summaryPoint(
      t('Bei der aktuellen KfW-Heizungsförderung ist die Optimierung des Heizungsverteilungs-Systems inklusive hydraulischem Abgleich grundsätzlich Bestandteil der Fördervoraussetzungen.'),
    ),
    summaryPoint(
      t('Ein hydraulischer Abgleich ersetzt '),
      bold('keine zu kleinen Heizkörper und keine falsche Wärmepumpenauslegung'),
      t('. Er ist ein Teil des Gesamtsystems.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Was passiert in einer nicht abgeglichenen Heizungsanlage?')),
      p(
        t('Heizungswasser nimmt bevorzugt den Weg mit dem geringsten hydraulischen Widerstand. Heizkörper oder Heizkreise nahe an der Umwälzpumpe können deshalb zu viel Wasser erhalten, während weiter entfernte Bereiche zu wenig bekommen.'),
      ),
      p(
        t('In der Praxis entsteht dann ein bekanntes Bild: Manche Räume werden sehr schnell warm, andere bleiben zu kühl, Ventile rauschen und die Umwälzpumpe läuft unnötig hoch. Häufig wird anschließend die Vorlauftemperatur angehoben, damit auch der schlechteste Raum warm wird.'),
      ),
      p(
        bold('Bei einer Wärmepumpe ist genau diese Kompensation teuer.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum niedrige Vorlauftemperaturen so wichtig sind')),
      p(
        t('Je kleiner der erforderliche Temperaturhub, desto leichter hat es die Wärmepumpe. Wenn wegen eines einzelnen schlecht versorgten Raums die gesamte Heizkurve erhöht wird, muss die Wärmepumpe für das ganze Haus höhere Temperaturen erzeugen.'),
      ),
      p(
        t('Ein sauberer hydraulischer Abgleich hilft dabei, die vorhandene Wärme dorthin zu bringen, wo sie gebraucht wird. Er macht aus einem zu kleinen Heizkörper keinen großen Heizkörper – verhindert aber, dass eine schlechte Verteilung durch unnötig hohe Systemtemperaturen kaschiert wird.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie läuft ein hydraulischer Abgleich ab?')),
      p(
        t('Bei einer fachgerechten Betrachtung werden nicht einfach alle Ventile auf denselben Wert gestellt. Relevant sind unter anderem:'),
      ),
      ul(
        p(t('die raumweise Heizlast,')),
        p(t('die vorhandenen Heizflächen,')),
        p(t('die gewünschten Raumtemperaturen,')),
        p(t('die erforderlichen Volumenströme,')),
        p(t('Ventil- und Heizkreis-Einstellungen,')),
        p(t('Pumpeneinstellung und Druckverhältnisse,')),
        p(t('sowie die Regelung und Heizkurve des Wärmeerzeugers.')),
      ),
      p(
        t('Danach werden Heizkörperventile beziehungsweise Heizkreisverteiler so eingestellt, dass jeder Bereich einen sinnvollen Volumenstrom erhält.'),
      ),
    ),

    hinweisBlock(
      '„Alle Thermostate voll auf“ ist kein hydraulischer Abgleich',
      p(
        t('Für die Optimierung einer Wärmepumpe kann es sinnvoll sein, Thermostate während der Einstellung weit zu öffnen und die Raumtemperatur stärker über die Heizkurve zu führen. Das ist aber nicht dasselbe wie ein hydraulischer Abgleich. Der Abgleich verteilt die Wassermengen – die Heizkurve bestimmt die erforderliche Vorlauftemperatur.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bringt der Abgleich bei Fußbodenheizung?')),
      p(
        t('Bei einer Fußbodenheizung werden die einzelnen Heizkreise am Verteiler auf passende Volumenströme abgestimmt. Zu viel Durchfluss in kurzen Kreisen und zu wenig in langen Kreisen führt auch hier zu ungleichmäßigen Raumtemperaturen.'),
      ),
      p(
        t('Eine gut abgeglichene Fußbodenheizung ist für eine Wärmepumpe besonders interessant, weil sie große Heizflächen mit niedrigen Temperaturen kombiniert.'),
      ),
    ),

    textBlock(
      h('h2', t('Und bei Heizkörpern?')),
      p(
        t('Auch Heizkörper lassen sich hydraulisch abgleichen. Dabei zeigt sich häufig, ob einzelne Heizflächen bei der gewünschten niedrigen Vorlauftemperatur zu klein sind.'),
      ),
      p(
        t('Dann ist ein '),
        bold('gezielter Austausch einzelner Heizkörper'),
        t(' oft sinnvoller, als die Temperatur für das gesamte Gebäude anzuheben.'),
      ),
    ),

    tippBlock(
      'Erst hydraulisch sauber machen, dann an der Heizkurve feilen',
      p(
        t('Wer gleichzeitig fünf Parameter verändert, weiß am Ende nicht, welche Änderung geholfen hat. Sinnvoll ist eine Reihenfolge: Heizflächen und Hydraulik prüfen, Volumenströme einstellen, Pumpenparameter kontrollieren und danach die Heizkurve schrittweise optimieren.'),
      ),
    ),

    textBlock(
      h('h2', t('Hydraulischer Abgleich und KfW-Förderung 2026')),
      p(
        t('Bei der aktuellen KfW-Heizungsförderung für private Wohngebäude ist der Einbau der geförderten Heizungsanlage mit einer '),
        bold('Optimierung des gesamten Heizungsverteilungs-Systems'),
        t(' verbunden. Dazu gehört grundsätzlich auch die Durchführung des hydraulischen Abgleichs beziehungsweise bei Luftheizungen die Anpassung der Luftvolumenströme.'),
      ),
      p(
        t('Der hydraulische Abgleich ist damit nicht nur eine Effizienzempfehlung, sondern bei einer geförderten Heizungsmodernisierung ein wichtiger Bestandteil der fachgerechten Umsetzung.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Effizienz entsteht im System')),
      p(
        t('Der hydraulische Abgleich ist bei einer Wärmepumpe kein Bürokratie-Baustein, den man nur für die Förderung abhakt. Er ist ein Werkzeug, um das Heizsystem mit möglichst niedrigen Temperaturen und passenden Volumenströmen zu betreiben.'),
      ),
      p(
        t('Ein großer Teil der realen Wärmepumpen-Effizienz entscheidet sich nicht auf dem Datenblatt, sondern im Zusammenspiel von '),
        bold('Gebäude, Heizflächen, Hydraulik und Regelung'),
        t('.'),
      ),
    ),

    ctaBlock({
      titel: 'Heizsystem statt Einzelgerät optimieren',
      text:
        'Wir prüfen nicht nur die Wärmepumpe. Wir betrachten Heizflächen, Volumenströme, Heizkurve und Hydraulik gemeinsam – damit das System im Alltag funktioniert.',
      buttonText: 'Wärmepumpe anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Was ist ein hydraulischer Abgleich einfach erklärt?',
      'Er sorgt dafür, dass jeder Heizkörper beziehungsweise Heizkreis die Wassermenge bekommt, die für die benötigte Wärmeleistung sinnvoll ist.',
    ),
    faqItem(
      'Spart ein hydraulischer Abgleich Strom?',
      'Er kann die Effizienz des Gesamtsystems verbessern, weil Pumpenleistung und Vorlauftemperatur optimiert werden können. Die tatsächliche Einsparung hängt vom Ausgangszustand ab.',
    ),
    faqItem(
      'Braucht eine Fußbodenheizung einen hydraulischen Abgleich?',
      'Ja, auch bei Fußbodenheizungen müssen die einzelnen Heizkreise sinnvoll aufeinander abgestimmt sein.',
    ),
    faqItem(
      'Muss ich nach dem hydraulischen Abgleich die Heizkurve anpassen?',
      'Häufig ja. Der Abgleich schafft die hydraulische Grundlage; anschließend kann die Heizkurve auf möglichst niedrige, aber komfortable Temperaturen eingestellt werden.',
    ),
    faqItem(
      'Ist der hydraulische Abgleich bei KfW-Förderung vorgeschrieben?',
      'Bei der aktuellen Heizungsförderung gehört die Optimierung des Heizungsverteilungs-Systems inklusive hydraulischem Abgleich grundsätzlich zu den Fördervoraussetzungen.',
    ),
  ],
}

await upsertRatgeberArticle(article)
