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
  titel: 'Stromspeicher + Wärmepumpe: Kann die Batterie die Wärmepumpe nachts wirklich versorgen?',
  slug: 'stromspeicher-waermepumpe-nachts-versorgen',
  kategorie: 'stromspeicher',
  status: 'veroeffentlicht',
  teaser:
    '10 kWh Speicher, also zehn Stunden Wärmepumpe? Leider nein. Wie lange eine Batterie nachts wirklich hilft, hängt von nutzbarer Kapazität, Entladeleistung, Hausgrundlast, Außentemperatur, Wärmebedarf und Regelung ab. Wir rechnen das praxisnah durch.',
  lesezeit: 11,

  seo: seo(
    'Stromspeicher für Wärmepumpe nachts: Reicht die Batterie? | PEAK.Energy',
    'Kann ein Stromspeicher die Wärmepumpe nachts versorgen? So wirken Kapazität, kW-Leistung, COP, Hauslast, Außentemperatur und HEMS auf die Laufzeit.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Ein 10-kWh-Speicher liefert nicht automatisch zehn Stunden Wärmepumpenbetrieb. Entscheidend ist, wie viel '),
      bold('elektrische Energie pro Stunde'),
      t(' Wärmepumpe und übriges Haus tatsächlich benötigen.'),
    ),
    summaryPoint(
      t('Neben der Kapazität muss die Batterie auch genügend '),
      bold('Entladeleistung in kW'),
      t(' bereitstellen. Sonst kommt trotz voller Batterie zusätzlich Leistung aus dem Netz.'),
    ),
    summaryPoint(
      t('Der COP beschreibt das Verhältnis von abgegebener Wärme zu eingesetztem Strom. Für die Batterielaufzeit zählt aber der '),
      bold('reale elektrische Verbrauch'),
      t(' der Wärmepumpe im jeweiligen Betriebszustand.'),
    ),
    summaryPoint(
      t('Im Winter ist die Aufgabe am schwierigsten: weniger PV-Ertrag, längere Nächte und meist höherer Wärmebedarf fallen gleichzeitig zusammen.'),
    ),
    summaryPoint(
      t('Ein HEMS kann Batterie, Wärmepumpe und PV besser koordinieren – zum Beispiel '),
      bold('Wärme vorzuziehen, solange PV-Strom verfügbar ist'),
      t(', statt nachts jede Kilowattstunde aus der Batterie zu erzwingen.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Die Kundenfrage: „Reichen 10 kWh für meine Wärmepumpe über Nacht?“')),
      p(
        t('Die Frage klingt einfach, lässt sich aber nicht mit der Speichergröße allein beantworten. 10 kWh sind eine Energiemenge. Wie lange diese Energie reicht, hängt davon ab, wie viele Kilowatt die Wärmepumpe gerade elektrisch aufnimmt – und welche anderen Verbraucher gleichzeitig aus dem Speicher versorgt werden.'),
      ),
      p(
        t('Genau deshalb haben wir im Ratgeber '),
        link('Stromspeicher: kW oder kWh?', '/stromspeicher/stromspeicher-kapazitaet-leistung-kw-kwh'),
        t(' Kapazität und Leistung getrennt. Bei der Kombination mit einer Wärmepumpe werden beide Größen unmittelbar praktisch.'),
      ),
    ),

    textBlock(
      h('h2', t('Die einfache Rechnung – und warum sie nur der Anfang ist')),
      p(
        t('Angenommen, ein Speicher stellt nachts tatsächlich 9 kWh nutzbare Energie zur Verfügung. Das Haus benötigt ohne Wärmepumpe im Mittel 0,4 kW. Die Wärmepumpe nimmt während ihrer Laufzeit elektrisch 2 kW auf.'),
      ),
      p(
        t('Laufen beide Lasten gleichzeitig, liegen wir bei 2,4 kW. Würde diese Leistung konstant anliegen, wären 9 kWh rechnerisch nach etwa '),
        bold('3,75 Stunden'),
        t(' verbraucht. Läuft die Wärmepumpe nur zeitweise, reicht der Speicher entsprechend länger.'),
      ),
      p(
        t('In der Praxis kommen Umwandlungsverluste, Reservebereiche, Warmwasserbereitung, Abtauvorgänge und schwankende Leistungen hinzu. Die Rechnung zeigt aber den entscheidenden Punkt: Nicht die thermische Heizleistung, sondern die '),
        bold('elektrische Energieaufnahme über die Zeit'),
        t(' leert die Batterie.'),
      ),
    ),

    tabelleBlock('Beispiel: 9 kWh nachts nutzbare Batterieenergie', [
      {
        spalte1: '0,5 kW mittlere Hauslast',
        spalte2: 'ohne Wärmepumpe',
        spalte3: 'rechnerisch etwa 18 Stunden',
      },
      {
        spalte1: '1,5 kW Gesamtlast',
        spalte2: 'Haus + moderate Wärmepumpenlast',
        spalte3: 'rechnerisch etwa 6 Stunden',
      },
      {
        spalte1: '2,5 kW Gesamtlast',
        spalte2: 'Haus + höhere Wärmepumpenlast',
        spalte3: 'rechnerisch etwa 3,6 Stunden',
      },
      {
        spalte1: '4,5 kW Gesamtlast',
        spalte2: 'hohe Last beziehungsweise Zusatzverbraucher',
        spalte3: 'rechnerisch etwa 2 Stunden',
      },
    ]),

    hinweisBlock(
      'Das sind Rechenbeispiele, keine Anlagenprognose',
      p(
        t('Wärmepumpen modulieren. Ihre elektrische Aufnahme ändert sich mit Außentemperatur, Vorlauftemperatur, Warmwasser, Abtauung und Gebäude. Für eine echte Auslegung braucht man deshalb reale oder belastbar prognostizierte Verbrauchsprofile.'),
      ),
    ),

    textBlock(
      h('h2', t('Was hat der COP mit der Batterie zu tun?')),
      p(
        t('Eine Wärmepumpe erzeugt nicht aus einer Kilowattstunde Strom nur eine Kilowattstunde Wärme. Ein COP von 4 bedeutet vereinfacht: Unter den betrachteten Bedingungen entstehen aus 1 kWh elektrischer Energie etwa 4 kWh Wärme. Der Rest stammt aus der Umwelt.'),
      ),
      p(
        t('Für die Speicherfrage ist das hilfreich, aber der COP allein reicht nicht. Wenn das Gebäude in einer kalten Nacht 8 kW Wärme benötigt und das Wärmepumpensystem unter diesen Bedingungen einen COP von 4 erreicht, wären vereinfacht etwa 2 kW elektrische Leistung nötig. Sinkt der COP bei schwierigeren Bedingungen, steigt die elektrische Aufnahme.'),
      ),
      p(
        t('Wie gut Photovoltaik und Wärmepumpe grundsätzlich zusammenarbeiten, erklären wir in '),
        link('Wärmepumpe und Photovoltaik', '/waermepumpe/waermepumpe-und-photovoltaik'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Kapazität reicht – aber die Leistung nicht?')),
      p(
        t('Das ist der zweite typische Denkfehler. Eine Batterie kann noch genug Energie enthalten und trotzdem nicht die komplette momentane Last liefern. Beispiel: Speicher und Wechselrichter können maximal 3 kW entladen, während Haus und Wärmepumpe zusammen gerade 4,5 kW benötigen. Dann fehlen 1,5 kW Leistung.'),
      ),
      p(
        t('Im normalen Netzparallelbetrieb kommt diese Differenz typischerweise aus dem Netz. Im Ersatzstrombetrieb kann die Leistungsgrenze dagegen darüber entscheiden, ob bestimmte Verbraucher überhaupt gleichzeitig betrieben werden können.'),
      ),
    ),

    textBlock(
      h('h2', t('Warum der Winter die schwierigste Jahreszeit ist')),
      p(
        t('Ausgerechnet dann, wenn die Wärmepumpe am meisten arbeiten muss, liefert die PV-Anlage häufig weniger Energie. Die Tage sind kurz, die Sonne steht niedrig und längere Schlechtwetterphasen sind möglich. Gleichzeitig steigt bei sinkender Außentemperatur der Wärmebedarf des Gebäudes.'),
      ),
      p(
        t('Ein Speicher, der von Frühjahr bis Herbst regelmäßig voll wird, kann im Dezember morgens schon leer sein – oder am Vortag gar nicht vollständig geladen worden sein. Deshalb ist es keine gute Idee, einen Heimspeicher so groß zu machen, dass er theoretisch jede Winternacht vollständig abdecken könnte. Die zusätzliche Kapazität würde über große Teile des Jahres womöglich kaum genutzt.'),
      ),
    ),

    textBlock(
      h('h2', t('Wärme speichern kann günstiger sein als Strom speichern')),
      p(
        t('Ein Haus selbst ist ein thermischer Speicher. Fußbodenheizung, Estrich und Gebäudemasse können Wärme zeitlich begrenzt puffern. Auch ein sinnvoll eingebundener Warmwasserspeicher oder Pufferspeicher kann Lasten verschieben.'),
      ),
      p(
        t('Ein Energiemanagement kann deshalb bei PV-Überschuss die Solltemperatur innerhalb sinnvoller Komfortgrenzen leicht anheben oder die Warmwasserbereitung vorziehen. Dadurch wird Sonnenstrom direkt in Wärme umgewandelt, statt ihn erst in die Batterie und später wieder aus der Batterie zu schicken.'),
      ),
      p(
        t('Das Ziel ist nicht, das Haus zu überheizen. Es geht um kleine, kontrollierte Verschiebungen innerhalb der ohnehin notwendigen Wärmeerzeugung.'),
      ),
    ),

    tippBlock(
      'Nicht „Batterie gegen Netz“ denken – das Gesamtsystem optimieren',
      p(
        t('PV, Batterie, Wärmepumpe, Warmwasser, Gebäudemasse und gegebenenfalls dynamischer Stromtarif liefern mehrere Freiheitsgrade. Ein gutes HEMS entscheidet nicht stur „Batterie zuerst“, sondern nutzt die jeweils wirtschaftlich und technisch sinnvollste Möglichkeit.'),
      ),
    ),

    textBlock(
      h('h2', t('Was ein HEMS nachts besser machen kann')),
      ul(
        p(t('Batteriereserve für die echte Nachtgrundlast berücksichtigen,')),
        p(t('Warmwasser bevorzugt in PV-Zeiten bereiten,')),
        p(t('Wärmepumpenbetrieb innerhalb zulässiger Grenzen zeitlich verschieben,')),
        p(t('dynamische Strompreise in die Ladeentscheidung einbeziehen,')),
        p(t('Wallbox und andere große Lasten priorisieren oder begrenzen.')),
      ),
      p(
        t('Je mehr steuerbare Verbraucher zusammenkommen, desto weniger sinnvoll ist es, jedes Gerät separat zu optimieren. Das ist genau der Punkt, an dem ein Energiemanagement vom Monitoring zur echten Systemsteuerung wird.'),
      ),
    ),

    textBlock(
      h('h2', t('Wie groß sollte der Speicher mit Wärmepumpe sein?')),
      p(
        t('Eine pauschale Formel wie „Jahresverbrauch geteilt durch 1.000“ reicht nicht. Wir betrachten PV-Leistung und Ausrichtung, typischen Nachtverbrauch, elektrische Wärmepumpenlast, Warmwasser, weitere Verbraucher, gewünschte Backup-Funktion und die Lade-/Entladeleistung des Systems.'),
      ),
      p(
        t('Mehr zur allgemeinen Dimensionierung findest du unter '),
        link('Wie groß sollte ein Stromspeicher sein?', '/stromspeicher/wie-gross-sollte-ein-stromspeicher-sein'),
        t('. Bei einer Wärmepumpe kommt zusätzlich die saisonale Lastverschiebung hinzu.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Der Speicher hilft nachts – aber nicht mit einer einfachen Stundenformel')),
      p(
        t('Ein Stromspeicher kann den Netzbezug einer Wärmepumpe nachts deutlich reduzieren. Ob er zwei, fünf oder zehn Stunden hilft, hängt aber nicht vom Aufdruck „10 kWh“ allein ab.'),
      ),
      p(
        t('Entscheidend sind nutzbare Energie, Entladeleistung und der tatsächliche Verbrauch des Gesamthauses. Noch besser wird das System, wenn es die Wärmepumpe nicht nur mit Batterieenergie versorgt, sondern '),
        bold('Wärmeerzeugung intelligent in günstige und sonnige Zeiten verschiebt'),
        t('.'),
      ),
    ),

    ctaBlock({
      titel: 'PV, Speicher und Wärmepumpe zusammen planen',
      text:
        'Wir dimensionieren den Speicher nicht nach einer Faustformel, sondern nach Erzeugung, Lastprofil, Wärmepumpe und der gewünschten Systemstrategie.',
      buttonText: 'Energiesystem planen lassen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Wie lange kann ein 10-kWh-Speicher eine Wärmepumpe betreiben?',
      'Das hängt von nutzbarer Batterieenergie, elektrischer Leistungsaufnahme der Wärmepumpe und den übrigen Hauslasten ab. Bei 2 kW Gesamtlast reichen 10 kWh rechnerisch etwa fünf Stunden, bei 4 kW nur etwa 2,5 Stunden – jeweils vor realen Verlusten und Reserven.',
    ),
    faqItem(
      'Kann eine Wärmepumpe komplett aus dem Stromspeicher laufen?',
      'Ja, wenn Batterie und Wechselrichter ausreichend Entladeleistung bereitstellen und genügend Energie gespeichert ist. Im Netzparallelbetrieb kann fehlende Leistung zusätzlich aus dem Netz kommen.',
    ),
    faqItem(
      'Ist für eine Wärmepumpe ein größerer Stromspeicher sinnvoll?',
      'Häufig steigt der sinnvolle Speicherbedarf, aber nicht unbegrenzt. Besonders im Winter fehlt oft die PV-Energie, um einen sehr großen Speicher regelmäßig zu füllen. Die Auslegung sollte deshalb saisonale Erzeugung und Lastprofile berücksichtigen.',
    ),
    faqItem(
      'Was ist wichtiger: kW oder kWh bei Wärmepumpe und Speicher?',
      'Beides. kWh bestimmen, wie viel Energie verfügbar ist. kW bestimmen, ob der Speicher die momentane elektrische Last der Wärmepumpe und des Hauses überhaupt liefern kann.',
    ),
    faqItem(
      'Kann ein HEMS die Wärmepumpe mit PV-Strom optimieren?',
      'Ja. Je nach Schnittstellen und System kann ein HEMS Betriebszeiten, Warmwasserbereitung, Batterie und weitere Verbraucher so koordinieren, dass mehr eigener PV-Strom genutzt und Netzbezug in ungünstigen Zeiten reduziert wird.',
    ),
  ],
}

await upsertRatgeberArticle(article)
