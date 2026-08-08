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
  titel: 'Speicher nachrüsten beim Repowering: AC, DC – und wann sich was rechnet',
  slug: 'speicher-nachruesten',
  kategorie: 'repowering',
  status: 'veroeffentlicht',
  teaser:
    'Für Altanlagen ist der Speicher oft der wertvollste Repowering-Baustein – besonders wenn die EEG-Vergütung ausläuft und Eigenverbrauch plötzlich mehr wert ist als Einspeisung. Welche Nachrüst-Architektur zu welcher Anlage passt, was Messkonzept und §14a bedeuten und wie groß der Speicher sein sollte.',
  lesezeit: 8,
  seo: seo(
    'Stromspeicher bei alter PV-Anlage nachrüsten: AC oder DC? | PEAK.Energy',
    'Speicher-Nachrüstung beim Repowering: AC-Kopplung für Bestandsanlagen, DC/Hybrid beim Wechselrichter-Tausch, Messkonzept, §14a EnWG und die richtige Dimensionierung – ehrlich eingeordnet.',
  ),
  zusammenfassung: [
    summaryPoint(
      t('Je näher das '),
      bold('EEG-Ende'),
      t(' rückt, desto stärker dreht sich die Rechnung: Selbst genutzter Strom ersetzt teuren Netzstrom – Einspeisung bringt nur noch wenige Cent.'),
    ),
    summaryPoint(
      bold('AC-Kopplung'),
      t(' ergänzt den Speicher neben der Bestandsanlage (Wechselrichter bleibt), '),
      bold('DC-/Hybrid-Kopplung'),
      t(' lohnt, wenn der Wechselrichter ohnehin getauscht wird – die Repowering-Situation entscheidet die Architektur.'),
    ),
    summaryPoint(
      t('Die Nachrüstung zieht Formalitäten nach sich: '),
      bold('Messkonzept, Netzbetreiber-Anmeldung, Marktstammdatenregister'),
      t(' – und ab 4,2 kW netzwirksamer Ladeleistung §14a EnWG.'),
    ),
    summaryPoint(
      t('Die richtige Größe bestimmt die '),
      bold('Abend- und Nachtlast'),
      t(', nicht der Jahresverbrauch – zu große Speicher sind totes Kapital.'),
    ),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Warum der Speicher der Repowering-Klassiker ist')),
      p(
        t('Altanlagen wurden für eine andere Welt gebaut: hohe Einspeisevergütung, Volleinspeisung, Eigenverbrauch spielte keine Rolle. Diese Welt endet mit dem 20. Betriebsjahr. Danach bringt die eingespeiste Kilowattstunde nur noch wenige Cent – während die zugekaufte ein Vielfaches kostet. Plötzlich ist jede selbst genutzte Kilowattstunde das Wertvollste, was die Anlage produziert.'),
      ),
      p(
        t('Ohne Speicher schafft ein typischer Haushalt aber nur 25–40 % Autarkie – die Anlage erzeugt mittags, das Haus verbraucht abends. Der Speicher schließt genau diese Lücke und verdoppelt die Autarkie grob. Deshalb ist die Speicher-Nachrüstung für viele Ü20- und bald-Ü20-Anlagen der wirtschaftliche Kern des Repowerings – noch vor jedem Modultausch.'),
      ),
    ),
    textBlock(
      h('h2', t('AC oder DC: Die Architektur-Entscheidung')),
      ul(
        p(
          bold('AC-Kopplung – der Bestandsfreund:'),
          t(' Der Speicher bekommt einen eigenen Batteriewechselrichter und hängt parallel zur Bestandsanlage am Hausnetz. Der alte PV-Wechselrichter bleibt unangetastet, die Anlage läuft weiter wie bisher. Ideal, wenn der Bestands-Wechselrichter noch gesund ist – und die einzige Option, wenn er nicht speicherfähig ist.'),
        ),
        p(
          bold('DC-/Hybrid-Kopplung – der Systemwechsel:'),
          t(' Ein Hybrid-Wechselrichter ersetzt das Altgerät und bindet den Speicher direkt auf der Gleichstromseite an – effizienter, aufgeräumter, mit Monitoring und meist Backup-Option ab Werk. Der logische Weg, wenn der Wechselrichter ohnehin am Lebensende ist.'),
        ),
      ),
      p(
        t('Die Faustregel ist deshalb einfach: '),
        bold('Wechselrichter gesund → AC nachrüsten. Wechselrichter fällig → Hybrid-Tausch mit DC-Speicher.'),
        t(' Der Diagnose-Check liefert die Antwort, in welchem Fall man sich befindet – und wer Notstrom oder Ersatzstrom will, sollte die Backup-Fähigkeit bei der Geräteauswahl gleich mitentscheiden.'),
      ),
    ),
    hinweisBlock(
      'Formalitäten nicht unterschätzen: Messkonzept und §14a',
      p(
        t('Ein nachgerüsteter Speicher ist anmeldepflichtig: beim Netzbetreiber und im Marktstammdatenregister. Je nach Konstellation – etwa wenn die Altanlage ihre Einspeisevergütung behalten soll und der Speicher sauber davon getrennt bilanziert werden muss – braucht es das passende Messkonzept im Zählerschrank. Und kann der Speicher mit mehr als 4,2 kW aus dem Netz laden, wird er als steuerbare Verbrauchseinrichtung nach §14a EnWG angemeldet – mit Netzentgeltreduzierung als Gegenleistung. Das ist alles lösbar, gehört aber in die Planung, nicht in die Nacharbeit.'),
      ),
    ),
    tabelleBlock('Welcher Weg für welche Ausgangslage', [
      {
        spalte1: 'Anlage gesund, Wechselrichter gut, EEG läuft noch',
        spalte2: 'AC-Speicher nachrüsten',
        spalte3: 'Eigenverbrauch steigt sofort; Vergütung für Resteinspeisung bleibt',
      },
      {
        spalte1: 'Anlage gesund, Wechselrichter altersschwach',
        spalte2: 'Hybrid-Tausch + DC-Speicher',
        spalte3: 'Zwei Fliegen: fälliger Tausch und Speicherfähigkeit in einem Eingriff',
      },
      {
        spalte1: 'EEG-Ende erreicht oder nah',
        spalte2: 'Speicher + Umstellung auf Eigenverbrauch',
        spalte3: 'Die wirtschaftlichste Option für die meisten Ü20-Anlagen – Details im Beitrag Wirtschaftlichkeit & EEG',
      },
      {
        spalte1: 'Module und Substanz schwach',
        spalte2: 'Komplett-Repowering mit Speicher',
        spalte3: 'Neue Anlage gleich als Gesamtsystem planen statt in Altsubstanz investieren',
      },
    ]),
    tippBlock(
      'Größe: Nachtlast schlägt Faustformel',
      p(
        t('Die richtige Speichergröße bestimmt sich aus der typischen Abend- und Nachtlast des Haushalts – dem Verbrauch zwischen Sonnenuntergang und Sonnenaufgang. Ein Speicher, der diese Last deckt, ist gut dimensioniert; jede kWh darüber wird selten genutzt. Für die meisten Einfamilienhäuser landet man bei 5–12 kWh. Wichtig: kommende Verbraucher (E-Auto, Wärmepumpe) mitdenken – und lieber ein modulares System wählen, das mitwachsen kann. Die ausführliche Herleitung steht im Ratgeber „Wie groß sollte ein Stromspeicher sein?".'),
      ),
    ),
    textBlock(
      h('h2', t('Unser Fazit')),
      p(
        t('Die Speicher-Nachrüstung ist das Repowering-Modul mit dem klarsten wirtschaftlichen Hebel – vorausgesetzt, Architektur und Größe passen zur Anlage und zum Haushalt. AC für den gesunden Bestand, Hybrid beim fälligen Wechselrichter-Tausch, und in beiden Fällen: sauberes Messkonzept, korrekte Anmeldung, §14a-konforme Umsetzung.'),
      ),
      p(
        bold('Wir legen Speicher nach Lastprofil aus, nicht nach Katalogseite'),
        t(' – mit modularer LFP-Technik, die sich erweitern lässt, wenn E-Auto oder Wärmepumpe dazukommen. Und wenn die Rechnung gegen den Speicher spricht, sagen wir auch das.'),
      ),
    ),
    ctaBlock({
      titel: 'Speicher-Nachrüstung durchrechnen lassen',
      text:
        'Wir prüfen Anlage und Lastprofil, empfehlen AC- oder Hybrid-Architektur und übernehmen Messkonzept, Anmeldung und §14a – Speicher nachrüsten als sauber geplantes Projekt.',
      buttonText: 'Beratung anfragen',
      buttonLink: '/kontakt',
    }),
  ],
  faq: [
    faqItem(
      'Kann ich an jede alte PV-Anlage einen Speicher hängen?',
      'Technisch fast immer – per AC-Kopplung sogar ohne Eingriff in die Bestandsanlage. Die eigentlichen Fragen sind wirtschaftlicher Natur (Lastprofil, Strompreis, Vergütungssituation) und formaler Natur (Messkonzept, Anmeldung). Ein grundsätzliches „geht nicht" ist selten.',
    ),
    faqItem(
      'Verliere ich durch den Speicher meine Einspeisevergütung?',
      'Nein – bei korrektem Messkonzept bleibt die EEG-Vergütung für den eingespeisten Strom erhalten. Wichtig ist die saubere messtechnische Trennung, besonders wenn der Speicher auch aus dem Netz laden können soll. Genau dafür gibt es die definierten Messkonzepte der Netzbetreiber.',
    ),
    faqItem(
      'AC oder DC – was ist effizienter?',
      'DC-Kopplung hat weniger Wandlungsschritte und ist auf dem Papier effizienter; im Alltag ist der Unterschied moderat. Wirtschaftlich entscheidend ist meist nicht der Wirkungsgrad, sondern die Ausgangslage: Ein gesunder Bestands-Wechselrichter spricht für AC, ein fälliger Tausch für Hybrid/DC.',
    ),
    faqItem(
      'Fällt mein nachgerüsteter Speicher unter §14a EnWG?',
      'Wenn er aus dem Netz laden kann und seine Ladeleistung über 4,2 kW liegt: ja. Er wird dann als steuerbare Verbrauchseinrichtung angemeldet – dafür gibt es reduzierte Netzentgelte, und im Alltag merkt man von der Steuerbarkeit praktisch nichts. Details im Ratgeber „§14a EnWG für Stromspeicher".',
    ),
    faqItem(
      'Lohnt der Speicher auch, solange die EEG-Vergütung noch läuft?',
      'Je höher die alte Vergütung, desto schwächer der Hebel – bei Anlagen mit 30+ Cent Altvergütung lohnt Einspeisen weiterhin. Bei Anlagen der 2010er-Jahre mit niedrigerer Vergütung und erst recht bei Ü20-Anlagen dreht sich das Bild. Das rechnen wir konkret mit Ihren Zahlen durch, nicht mit Durchschnittswerten.',
    ),
  ],
}

await upsertRatgeberArticle(article)
