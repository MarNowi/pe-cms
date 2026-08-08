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
  titel: 'HEMS und Monitoring nachrüsten: Die Altanlage endlich sichtbar machen',
  slug: 'hems-monitoring',
  kategorie: 'repowering',
  status: 'veroeffentlicht',
  teaser:
    'Viele Anlagen aus den 2000er- und 2010er-Jahren laufen blind: kein Monitoring, keine Fehlermeldung, kein Überblick. Beim Repowering lässt sich das ändern – vom einfachen Ertrags-Monitoring bis zum Energiemanagement, das Speicher, Wallbox und Wärmepumpe koordiniert.',
  lesezeit: 7,
  seo: seo(
    'Monitoring & HEMS für alte PV-Anlagen nachrüsten | PEAK.Energy',
    'Alte PV-Anlage ohne Monitoring? Was Nachrüstung bringt: Fehlererkennung, Ertragskontrolle und der Weg zum Energiemanagement (HEMS) mit Speicher, Wallbox und Wärmepumpe – lokal statt Cloud.',
  ),
  zusammenfassung: [
    summaryPoint(
      t('Ohne Monitoring bleiben Ausfälle und Minderertrag oft '),
      bold('monatelang unbemerkt'),
      t(' – bei Altanlagen die häufigste Ursache für still verlorenes Geld.'),
    ),
    summaryPoint(
      t('Monitoring lässt sich fast immer nachrüsten: über einen modernen Wechselrichter, einen Energiezähler im Schaltschrank oder beides.'),
    ),
    summaryPoint(
      t('Ein '),
      bold('HEMS (Energiemanagementsystem)'),
      t(' geht über das Beobachten hinaus: Es steuert Speicher, Wallbox und Wärmepumpe – und macht die Altanlage fit für Eigenverbrauch, §14a und dynamische Tarife.'),
    ),
    summaryPoint(
      t('Wir setzen auf '),
      bold('lokale, offene Systeme'),
      t(': Die Steuerung läuft im Haus, die Energiedaten bleiben beim Betreiber.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Blindflug: Der Normalzustand vieler Altanlagen')),
      p(
        t('Wer vor 2015 gebaut hat, hat oft nur eines: einen Einspeisezähler, der einmal im Jahr abgelesen wird. Ob die Anlage im Juni ihre volle Leistung gebracht hat oder ein Strang seit Ostern tot ist – das sieht man frühestens an der Jahresabrechnung, wenn überhaupt.'),
      ),
      p(
        t('Genau das macht Monitoring zur wirtschaftlichsten Nachrüstung überhaupt: Es erzeugt keinen einzigen Kilowattstunde Mehrertrag – aber es verhindert, dass Ausfälle unbemerkt bleiben. Ein toter Wechselrichter, der drei Monate unentdeckt bleibt, kostet bei einer 8-kWp-Anlage schnell einen mittleren dreistelligen Betrag. Ein Monitoring hätte ihn am ersten Tag gemeldet.'),
      ),
    ),
    textBlock(
      h('h2', t('Die Ausbaustufen')),
      ul(
        p(
          bold('Stufe 1 – Ertrags-Monitoring:'),
          t(' Die Anlage wird messbar. Entweder liefert ein moderner Wechselrichter die Daten ohnehin mit (beim Wechselrichter-Tausch quasi gratis), oder ein nachgerüsteter Energiezähler im Schaltschrank erfasst Erzeugung und Verbrauch. Ergebnis: Tagesaktuelle Erträge, automatische Störungsmeldung.'),
        ),
        p(
          bold('Stufe 2 – Erzeugung und Verbrauch im Blick:'),
          t(' Mit einem Zweirichtungs-Messkonzept wird sichtbar, wann das Haus wie viel verbraucht und wie viel davon die Anlage deckt. Das ist die Datengrundlage für jede sinnvolle Speicher- oder Eigenverbrauchsentscheidung – Auslegung nach echtem Lastprofil statt Faustformel.'),
        ),
        p(
          bold('Stufe 3 – Energiemanagement (HEMS):'),
          t(' Das System steuert aktiv: Es lädt den Speicher mit Überschuss, gibt der Wallbox das Signal zum PV-Laden, hebt die Warmwasserbereitung in die Mittagsstunden und setzt §14a-Vorgaben als intelligente Gesamtobergrenze um. Aus der alten Einspeiseanlage wird ein gesteuertes Energiesystem.'),
        ),
      ),
    ),
    hinweisBlock(
      'Monitoring ist nicht gleich Steuerung',
      p(
        t('Eine App, die Erträge anzeigt, ist Monitoring – nützlich, aber passiv. Ein HEMS greift aktiv ein und verschiebt Energieflüsse. Für den reinen Anlagen-Gesundheitscheck reicht Stufe 1; wer Speicher, Wallbox oder Wärmepumpe hat oder plant, sollte gleich die Steuerungsfähigkeit mitdenken. Der Unterschied steckt in den Schnittstellen: EEBUS, SG-Ready und Modbus entscheiden, was sich später einbinden lässt.'),
      ),
    ),
    textBlock(
      h('h2', t('Lokal oder Cloud – beim Nachrüsten besonders relevant')),
      p(
        t('Gerade bei Nachrüstlösungen drängen Cloud-Systeme in den Markt: schnell installiert, hübsche App, aber die Steuerlogik und die Energiedaten liegen auf Herstellerservern. Fällt das Internet aus oder ändert der Anbieter sein Geschäftsmodell, steht die Steuerung still.'),
      ),
      p(
        bold('Wir empfehlen lokale Systeme'),
        t(': Die Entscheidungen fallen im Haus, das System läuft auch offline weiter, und die Verbrauchsdaten – aus denen sich ein erstaunlich genaues Bild des Haushalts ablesen lässt – bleiben beim Betreiber. Warum uns das wichtig ist, steht ausführlich im Beitrag „Cloud-EMS vs. lokales EMS: Wem gehören deine Energiedaten?".'),
      ),
    ),
    tippBlock(
      'Die Reihenfolge macht den Preis',
      p(
        t('Monitoring und HEMS separat nachzurüsten ist möglich – aber wer ohnehin ein Repowering plant, sollte beides in einem Zug mitnehmen: Beim Wechselrichter-Tausch ist modernes Monitoring inklusive, beim Speicher-Einbau wird der Energiezähler sowieso gesetzt, und der Elektriker steht bereits im Zählerschrank. Dieselbe Nachrüstung einzeln beauftragt kostet spürbar mehr.'),
      ),
    ),
    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Monitoring ist die Versicherung, HEMS die Aufwertung: Das eine schützt den Bestand vor stillen Ausfällen, das andere holt aus der Altanlage heraus, was moderne Anlagen können – hohen Eigenverbrauch, gesteuerte Lasten, Tariffähigkeit. Beides zusammen macht aus einer Anlage von 2010 ein Energiesystem von heute, oft ohne dass ein einziges Modul getauscht werden muss.'),
      ),
      p(
        bold('Unsere Linie dabei bleibt gleich'),
        t(': offene Schnittstellen, lokale Steuerung, keine Plattform-Bindung. Das System soll dem Haus dienen – nicht dem Geschäftsmodell eines Herstellers.'),
      ),
    ),
    ctaBlock({
      titel: 'Monitoring oder HEMS nachrüsten lassen',
      text:
        'Vom Ertrags-Monitoring bis zum vollen Energiemanagement mit Speicher, Wallbox und Wärmepumpe – wir rüsten Altanlagen herstellerunabhängig und mit lokaler Steuerung nach.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Kann jede alte Anlage ein Monitoring bekommen?',
      'Praktisch ja. Selbst wenn der alte Wechselrichter keine Datenschnittstelle hat, lässt sich die Erzeugung über einen Energiezähler im Schaltschrank erfassen. Komfortabler wird es mit einem modernen Wechselrichter – der liefert Strangdaten und Fehlerdiagnose gleich mit.',
    ),
    faqItem(
      'Was bringt mir ein HEMS ohne Speicher?',
      'Weniger als mit – aber nicht nichts: PV-Überschussladen fürs E-Auto und die Ansteuerung einer Wärmepumpe funktionieren auch ohne Batterie. Der volle Nutzen entsteht aber im Zusammenspiel mit einem Speicher, weil das HEMS dann Erzeugung, Speicherung und Verbrauch gegeneinander optimieren kann.',
    ),
    faqItem(
      'Funktioniert das HEMS mit meinen bestehenden Geräten?',
      'Das hängt an den Schnittstellen. Geräte mit EEBUS, SG-Ready oder Modbus lassen sich in aller Regel einbinden, geschlossene Systeme nur eingeschränkt. Genau das prüfen wir vor jeder Nachrüstung – damit keine Insellösung entsteht, die in fünf Jahren niemand mehr erweitern kann.',
    ),
    faqItem(
      'Ist ein HEMS Voraussetzung für §14a EnWG?',
      'Nein, aber der elegantere Weg: Statt dass Wallbox, Wärmepumpe und Speicher einzeln gedrosselt werden, bekommt das HEMS eine Gesamt-Leistungsobergrenze und verteilt sie intelligent. Details dazu im Ratgeber „§14a EnWG für Stromspeicher".',
    ),
  ],
}

await upsertRatgeberArticle(article)
