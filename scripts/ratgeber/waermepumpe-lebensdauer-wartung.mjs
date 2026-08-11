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
  titel: 'Lebensdauer und Wartung einer Wärmepumpe: Was nach 10, 15 oder 20 Jahren passiert',
  slug: 'waermepumpe-lebensdauer-wartung',
  kategorie: 'waermepumpe',
  status: 'veroeffentlicht',
  teaser:
    'Eine Wärmepumpe ist kein wartungsfreies Gerät für die Ewigkeit – aber auch kein System, das nach zehn Jahren komplett ersetzt werden muss. Entscheidend sind Auslegung, Laufweise, Wartbarkeit und Service.',
  lesezeit: 12,

  seo: seo(
    'Wärmepumpe Lebensdauer & Wartung: was ist realistisch? | PEAK.Energy',
    'Wie lange hält eine Wärmepumpe? Wartung, Verdichter, Ventilator, Pumpen, typische Reparaturen und Service verständlich eingeordnet.',
  ),

  zusammenfassung: [
    summaryPoint(
      t('Eine Wärmepumpe besteht aus mehreren Komponenten mit '),
      bold('unterschiedlichen Lebensdauern'),
      t('. Ein einzelner Defekt bedeutet nicht automatisch, dass die ganze Anlage ersetzt werden muss.'),
    ),
    summaryPoint(
      t('Der Verdichter ist das zentrale mechanische Bauteil. Gute Auslegung und unnötig seltenes Takten sind für einen ruhigen Betrieb wichtiger als eine möglichst große Nennleistung.'),
    ),
    summaryPoint(
      t('Luft-Wasser-Wärmepumpen brauchen unter anderem freie Luftwege, eine funktionierende Kondensatableitung und regelmäßige Kontrolle der Betriebsdaten.'),
    ),
    summaryPoint(
      t('Beim Kauf zählen deshalb nicht nur COP und Preis, sondern auch '),
      bold('Ersatzteilverfügbarkeit, Servicezugang, Garantiebedingungen und Hersteller-Support'),
      t('.'),
    ),
  ],

  inhalt: [
    textBlock(
      h('h2', t('Wie lange hält eine Wärmepumpe?')),
      p(
        t('Die Frage klingt einfach, ist aber ähnlich wie „Wie lange hält ein Auto?“. Eine Wärmepumpe besteht nicht aus einem einzigen Verschleißteil. Verdichter, Ventilator, Umwälzpumpen, Ventile, Sensorik, Elektronik und Speicher altern unterschiedlich.'),
      ),
      p(
        t('Bei vernünftiger Auslegung und Wartung sind Betriebszeiten von vielen Jahren bis deutlich über ein Jahrzehnt üblich. Eine pauschale Garantie für „20 Jahre ohne Reparatur“ wäre trotzdem unseriös. Wichtiger ist die Frage, welche Komponenten im Lebenszyklus Aufmerksamkeit brauchen.'),
      ),
    ),

    textBlock(
      h('h2', t('Der Verdichter: Herzstück der Wärmepumpe')),
      p(
        t('Der Verdichter komprimiert das Kältemittel und ist das zentrale mechanische Bauteil der Wärmepumpe. Er arbeitet besonders angenehm, wenn die Anlage lange Laufzeiten hat und nicht ständig startet und stoppt.'),
      ),
      p(
        t('Deshalb hängen Lebensdauer und Auslegung zusammen. Eine stark überdimensionierte Wärmepumpe, die sehr häufig taktet, kann mechanisch stärker beansprucht werden als ein Gerät, das lange im passenden Modulationsbereich läuft.'),
      ),
      p(
        t('Das bedeutet nicht, dass jeder Verdichterstart schädlich ist. Start-Stopp-Betrieb gehört zur Technik. Es geht um '),
        bold('unnötig häufiges Takten'),
        t('.'),
      ),
    ),

    textBlock(
      h('h2', t('Welche Teile können sonst verschleißen?')),
      ul(
        p(t('Ventilatoren bei Luft-Wasser-Wärmepumpen,')),
        p(t('Umwälzpumpen,')),
        p(t('Umschalt- und Regelventile,')),
        p(t('Temperatur- und Drucksensoren,')),
        p(t('Leistungselektronik und Steuerung,')),
        p(t('elektrische Schalt- und Sicherungskomponenten,')),
        p(t('sowie je nach System Komponenten der Wärmequelle.')),
      ),
      p(
        t('Eine Anlage ist deshalb nach 15 Jahren nicht automatisch „komplett kaputt“. Genauso gut kann ein einzelnes austauschbares Bauteil betroffen sein.'),
      ),
    ),

    textBlock(
      h('h2', t('Was gehört zur Wartung?')),
      p(
        t('Der konkrete Umfang richtet sich nach Hersteller, Gerät und Anlagenart. Typische Prüfpunkte sind:'),
      ),
      ul(
        p(t('Sichtprüfung und Kontrolle von Fehlermeldungen,')),
        p(t('Betriebsdaten, Temperaturen und Drücke prüfen,')),
        p(t('Anlagendruck und Heizungswasser kontrollieren,')),
        p(t('Filter beziehungsweise Schmutzfänger prüfen,')),
        p(t('Kondensatablauf kontrollieren,')),
        p(t('Luftwege und Wärmetauscherflächen frei halten,')),
        p(t('Pumpen und Ventile kontrollieren,')),
        p(t('Regelung, Heizstab-Betriebsstunden und auffällige Geräusche betrachten.')),
      ),
      p(
        t('Je nach Kältemittel, Füllmenge und Anlagenkonzept können zusätzliche gesetzliche Prüf- oder Dokumentationspflichten bestehen.'),
      ),
    ),

    hinweisBlock(
      'Wartung ist mehr als „keine Fehlermeldung vorhanden“',
      p(
        t('Eine Wärmepumpe kann technisch laufen und trotzdem schlechter laufen als früher. Deshalb gehören auch Stromverbrauch, erzeugte Wärmemenge, Jahresarbeitszahl, Verdichterstarts und Heizstabeinsatz zur sinnvollen Bewertung.'),
      ),
    ),

    textBlock(
      h('h2', t('Außengerät: Luftwege und Kondensat nicht vergessen')),
      p(
        t('Eine Luft-Wasser-Wärmepumpe bewegt große Luftmengen. Laub, Pflanzen, Schmutz oder ungünstige Einhausungen können den Luftstrom behindern. Auch der Kondensatablauf muss funktionieren, denn beim Abtauen entstehen je nach Wetter erhebliche Wassermengen.'),
      ),
      p(
        t('Eine optisch schöne Verkleidung, die den Luftstrom einschränkt, kann deshalb technisch eine schlechte Idee sein.'),
      ),
    ),

    textBlock(
      h('h2', t('Reparaturkosten: Warum Pauschalwerte wenig helfen')),
      p(
        t('Die Spannweite möglicher Reparaturen ist groß. Ein Sensor, eine Pumpe oder ein Ventil ist eine andere Größenordnung als Leistungselektronik oder Verdichter. Dazu kommen Hersteller, Gerätegröße, Zugänglichkeit und Arbeitsaufwand.'),
      ),
      p(
        t('Wir würden deshalb keine scheinpräzise Tabelle mit allgemeingültigen Reparaturpreisen veröffentlichen. Für die Kaufentscheidung sind langfristig wichtig: '),
        bold('Ersatzteilverfügbarkeit, Servicenetz, Garantiebedingungen, dokumentierte Inbetriebnahme und Hersteller-Support'),
        t('.'),
      ),
    ),

    tippBlock(
      'Beim Kauf nicht nur auf den COP schauen',
      p(
        t('Ein Gerät kann auf dem Papier fantastische Werte haben. Wenn aber langfristig Ersatzteile schlecht verfügbar sind oder Service nur mit großem Aufwand möglich ist, hilft der beste Datenblattwert wenig. '),
        bold('Wartbarkeit ist für uns Teil der technischen Qualität.'),
      ),
    ),

    textBlock(
      h('h2', t('Garantie ist nicht Lebensdauer')),
      p(
        t('Herstellergarantie und erwartbare Nutzungsdauer sind zwei verschiedene Dinge. Eine fünf- oder zehnjährige Garantie bedeutet nicht, dass das Gerät danach ausfällt. Umgekehrt bedeutet eine lange Produktgarantie nicht automatisch, dass jedes Bauteil und jede Arbeitsleistung vollständig abgedeckt ist.'),
      ),
      p(
        t('Die konkreten Garantiebedingungen sollte man deshalb lesen, statt nur die Jahreszahl im Prospekt zu vergleichen.'),
      ),
    ),

    textBlock(
      h('h2', t('Unser Fazit: Langfristige Qualität beginnt bei der Planung')),
      p(
        t('Eine Wärmepumpe ist langfristige Haustechnik. Wer sie nur nach Anschaffungspreis und Prospekt-COP auswählt, betrachtet zu wenig.'),
      ),
      p(
        t('Auslegung, Wartbarkeit, Ersatzteile, Monitoring und Service entscheiden mit darüber, wie entspannt die Anlage nach zehn oder fünfzehn Jahren noch betrieben werden kann. Eine gute Wärmepumpe ist deshalb nicht nur am ersten Tag effizient – sondern '),
        bold('über ihren gesamten Lebenszyklus sinnvoll betreibbar'),
        t('.'),
      ),
    ),

    ctaBlock({
      titel: 'Wärmepumpe langfristig planen',
      text:
        'Wir denken bei der Auswahl nicht nur an Montage und Förderung, sondern auch an Servicezugang, Monitoring, Ersatzteilstrategie und den späteren Betrieb.',
      buttonText: 'Wärmepumpe anfragen',
      buttonLink: '/kontakt',
    }),
  ],

  faq: [
    faqItem(
      'Wie viele Jahre hält eine Wärmepumpe?',
      'Es gibt keine feste Lebensdauer für jede Anlage. Viele Systeme laufen weit über ein Jahrzehnt. Auslegung, Betriebsweise, Wartung, Gerät und einzelne Komponenten beeinflussen die tatsächliche Nutzungsdauer.',
    ),
    faqItem(
      'Muss eine Wärmepumpe jedes Jahr gewartet werden?',
      'Das hängt vom Hersteller, Gerät und Anlagenkonzept ab. Regelmäßige Kontrolle ist sinnvoll; verbindliche Intervalle ergeben sich aus Herstellerangaben und gegebenenfalls gesetzlichen Anforderungen.',
    ),
    faqItem(
      'Was ist das teuerste Bauteil einer Wärmepumpe?',
      'Der Verdichter gehört zu den zentralen und teuersten Komponenten. Viele Störungen betreffen aber kleinere Bauteile wie Sensoren, Pumpen oder Ventile.',
    ),
    faqItem(
      'Macht häufiges Takten die Wärmepumpe schneller kaputt?',
      'Sehr häufige kurze Laufzyklen erhöhen die Zahl der Starts und können auf eine ungünstige Auslegung oder Einstellung hinweisen. Starkes Takten sollte deshalb geprüft werden.',
    ),
    faqItem(
      'Ist eine Wärmepumpe wartungsfrei?',
      'Nein. Sie hat zwar keine Verbrennung wie Öl oder Gas, enthält aber mechanische, hydraulische und elektrische Komponenten, die kontrolliert werden sollten.',
    ),
  ],
}

await upsertRatgeberArticle(article)
