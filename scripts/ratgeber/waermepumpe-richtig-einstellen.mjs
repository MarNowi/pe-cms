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
  titel: 'Wärmepumpe richtig einstellen: Heizkurve, Takten und Nachtabsenkung',
  slug: 'waermepumpe-richtig-einstellen',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Eine perfekt geplante Wärmepumpe kann unnötig viel Strom verbrauchen, wenn sie mit zu hoher Heizkurve, aggressiver Nachtabsenkung oder häufigem Heizstabeinsatz betrieben wird.',
  lesezeit: 13,

  seo: seo(
    'Wärmepumpe richtig einstellen: Heizkurve & Takten | PEAK.Energy',
    'Wärmepumpe effizient einstellen: Heizkurve, Thermostate, Nachtabsenkung, Warmwasser, Heizstab und Takten verständlich erklärt.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Eine Wärmepumpe arbeitet besonders effizient mit '),
      bold('möglichst niedrigen Heizwassertemperaturen und langen Laufzeiten'),
      t('.'),
    ),
    summaryPoint(
      t('Die Heizkurve sollte so niedrig wie möglich und so hoch wie nötig eingestellt werden. Werkseinstellungen sind nur ein Ausgangspunkt.'),
    ),
    summaryPoint(
      t('Starke Nachtabsenkung ist bei trägen Gebäuden und Flächenheizungen häufig kontraproduktiv, weil morgens wieder mit höherer Leistung aufgeheizt werden muss.'),
    ),
    summaryPoint(
      t('Häufiges Takten kann auf Überdimensionierung, zu geringen Volumenstrom oder ungünstige Regelparameter hinweisen. '),
      bold('Messen ist besser als raten'),
      t('.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Warum die Einstellung so viel ausmacht')),
      p(
        t('Wärmepumpen sind keine klassischen Heizkessel. Ein Gas- oder Ölbrenner kann sehr schnell hohe Temperaturen erzeugen. Eine Wärmepumpe arbeitet effizienter, wenn sie kontinuierlich und mit möglichst niedriger Temperatur läuft.'),
      ),
      p(
        t('Deshalb kann dasselbe Gerät im selben Haus sehr unterschiedliche Stromverbräuche haben – je nachdem, wie Heizkurve, Warmwasser, Heizstab und Hydraulik eingestellt sind.'),
      ),
    ),

    textBlock(
      h('h2', t('Die Heizkurve: der wichtigste Hebel im Alltag')),
      p(
        t('Die Heizkurve sagt der Wärmepumpe, welche Vorlauftemperatur sie bei welcher Außentemperatur bereitstellen soll. Ist es draußen mild, genügt eine niedrige Vorlauftemperatur. Wird es kalt, steigt die erforderliche Temperatur.'),
      ),
      p(
        t('Ist die Heizkurve zu hoch, wird das Heizwasser wärmer als nötig. Die Thermostate drosseln anschließend wieder weg, was die Wärmepumpe vorher mit höherem Energieaufwand erzeugt hat. Das Ziel lautet deshalb: '),
        bold('so niedrig wie möglich – aber so hoch, dass alle Räume zuverlässig warm werden'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie stellt man die Heizkurve sinnvoll ein?')),
      ul(
        p(t('Thermostate in den maßgeblichen Räumen zunächst weit öffnen.')),
        p(t('Heizkurve nur in kleinen Schritten verändern.')),
        p(t('Nach einer Änderung mehrere Tage beobachten – besonders bei Fußbodenheizung.')),
        p(t('Ist es bei fast allen Außentemperaturen zu warm oder zu kalt, eher das Niveau korrigieren.')),
        p(t('Passt es bei mildem Wetter, aber nicht bei Kälte, ist eher die Steigung relevant.')),
      ),
      p(
        t('Die genaue Bedienlogik unterscheidet sich je nach Hersteller. Entscheidend ist das Prinzip: '),
        bold('Nicht täglich nervös nachregeln, sondern kontrolliert optimieren.'),
      ),
    ),

    textBlock(
      h('h2', t('Nachtabsenkung: bei Wärmepumpen oft überschätzt')),
      p(
        t('Die klassische Nachtabsenkung stammt aus einer Heizwelt, in der Brenner hohe Leistungen kurzfristig bereitstellen konnten. Bei einer Wärmepumpe kann eine starke Absenkung bedeuten, dass morgens in relativ kurzer Zeit viel Wärme nachgeliefert werden muss.'),
      ),
      p(
        t('Bei gut gedämmten und trägen Gebäuden ist deshalb eine geringe Absenkung oder ein weitgehend gleichmäßiger Betrieb häufig sinnvoller. Das ist keine starre Regel – entscheidend ist das reale Gebäude und seine thermische Trägheit.'),
      ),
    ),

    hinweisBlock(
      'Thermostate sollten nicht gegen die Heizkurve arbeiten',
      p(
        t('Ein häufiges Muster ist eine zu hohe Heizkurve bei gleichzeitig fast überall zugedrehten Thermostaten. Dann erzeugt die Wärmepumpe unnötig hohe Temperaturen, während die Ventile den Volumenstrom begrenzen. Besser ist ein hydraulisch abgestimmtes System, bei dem die zentrale Heizkurve möglichst viel der Regelarbeit übernimmt.'),
      ),
    ),

    textBlock(
      h('h2', t('Was bedeutet Takten?')),
      p(
        t('Takten bezeichnet Starts und Stopps des Verdichters. Eine moderne Wärmepumpe kann ihre Leistung innerhalb eines bestimmten Bereichs modulieren. Sinkt der Wärmebedarf unter die minimale Leistung des Geräts, muss sie irgendwann abschalten.'),
      ),
      p(
        t('Ein gewisses Takten ist deshalb normal, besonders in der Übergangszeit. Auffällig wird es, wenn die Anlage sehr kurze Laufzeiten und extrem viele Starts produziert.'),
      ),
      ul(
        p(t('mögliche Überdimensionierung,')),
        p(t('zu hohe Heizkurve,')),
        p(t('zu kleiner Volumenstrom,')),
        p(t('zu viele geschlossene Ventile,')),
        p(t('ungünstige Hysterese oder Regelparameter,')),
        p(t('zu kleines aktives Wasservolumen oder unpassende Hydraulik.')),
      ),
    ),

    textBlock(
      h('h2', t('Warmwasser nicht unnötig heiß fahren')),
      p(
        t('Trinkwarmwasser benötigt höhere Temperaturen als die Raumheizung. Für die Wärmepumpe ist das energetisch anspruchsvoller. Die Warmwassertemperatur sollte deshalb nicht ohne Grund höher eingestellt werden als erforderlich.'),
      ),
      p(
        t('Hygieneanforderungen und das konkrete Anlagenkonzept müssen selbstverständlich eingehalten werden. Ein pauschales „Warmwasser maximal runter“ ist genauso falsch wie dauerhaft unnötig hohe Temperaturen.'),
      ),
    ),

    textBlock(
      h('h2', t('Heizstab im Blick behalten')),
      p(
        t('Ein elektrischer Heizstab erzeugt aus einer Kilowattstunde Strom ungefähr eine Kilowattstunde Wärme. Die Wärmepumpe selbst kann aus derselben Strommenge typischerweise ein Mehrfaches an Wärme bereitstellen.'),
      ),
      p(
        t('Deshalb sollte der Heizstab nicht unbemerkt große Teile des regulären Heizbetriebs übernehmen. Sinnvoll ist, Freigaben, Einsatzgrenzen und Betriebsstunden zu kontrollieren. Für Notfälle, bestimmte Warmwasserfunktionen oder seltene Spitzen kann er trotzdem sinnvoll sein.'),
      ),
    ),

    tippBlock(
      'Die beste Optimierung ist Monitoring',
      p(
        t('Nicht raten, messen. Interessant sind insbesondere Stromverbrauch, erzeugte Wärmemenge, Vorlauf und Rücklauf, Außentemperatur, Verdichterstarts, Verdichterlaufzeit, Heizstabeinsatz und Warmwasseranteil. Daraus lässt sich auch die reale '),
        bold('Jahresarbeitszahl'),
        t(' deutlich besser einordnen.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Gute Hardware braucht gute Einstellungen')),
      p(
        t('Eine Wärmepumpe wird nicht mit der Montage automatisch effizient. Die Inbetriebnahme und die anschließende Feinabstimmung entscheiden mit darüber, wie gut sie im echten Gebäude läuft.'),
      ),
      p(
        t('Niedrige Heizkurve, passende Volumenströme, vernünftige Warmwassertemperaturen, wenig unnötiger Heizstabeinsatz und lange Verdichterlaufzeiten sind die Richtung. '),
        bold('Gute Optimierung bedeutet beobachten, verstehen und schrittweise anpassen.'),
      ),
    ),

    ctaBlock({
      titel: 'Deine Wärmepumpe als System optimieren',
      text:
        'Wir betrachten nicht nur die Hardware. Regelung, Hydraulik, Photovoltaik, Speicher und Energiemanagement gehören für uns zusammen.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Welche Heizkurve ist bei einer Wärmepumpe richtig?',
      'Es gibt keinen universellen Wert. Sie sollte so niedrig wie möglich eingestellt sein und trotzdem bei allen relevanten Außentemperaturen alle Räume ausreichend beheizen.',
    ),
    faqItem(
      'Sollte man eine Wärmepumpe nachts absenken?',
      'Eine starke Nachtabsenkung ist häufig nicht sinnvoll, besonders bei gut gedämmten Gebäuden und Fußbodenheizung. Eine geringe Absenkung kann funktionieren. Entscheidend ist das reale Gebäude.',
    ),
    faqItem(
      'Wie viele Verdichterstarts sind normal?',
      'Dafür gibt es keinen seriösen allgemeinen Grenzwert für jedes Gerät und Gebäude. Entscheidend sind Laufzeiten, Jahreszeit, Modulationsbereich und Herstellerkonzept. Sehr kurze Laufzeiten mit ständigem Neustart sollten geprüft werden.',
    ),
    faqItem(
      'Soll der Heizstab deaktiviert werden?',
      'Er sollte nicht unkontrolliert den regulären Heizbetrieb übernehmen. Ob und wann er freigegeben bleibt, hängt vom Anlagenkonzept und den Herstelleranforderungen ab.',
    ),
    faqItem(
      'Wie merke ich, ob meine Wärmepumpe effizient läuft?',
      'Am besten über reale Betriebsdaten: Stromaufnahme, erzeugte Wärmemenge, Laufzeiten, Heizstabeinsatz und daraus die Jahresarbeitszahl.',
    ),
  ],
}

await upsertRatgeberArticle(article)
