import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const sharedSummary = {
  ohneSpeicherText: {
    bold: 'Eine Wärmepumpe im Altbau ist grundsätzlich möglich',
    rest: ' – entscheidend ist aber nicht das Etikett „Altbau“, sondern wie das Gebäude technisch wirklich dasteht.',
  },
  mitSpeicherText: {
    bold: 'Wichtig sind vor allem Heizlast, Vorlauftemperatur, Dämmzustand und vorhandene Heizflächen',
    rest: ' – also die Frage, wie viel Wärme das Haus braucht und wie effizient diese Wärme verteilt werden kann.',
  },
  groessenText: {
    bold: 'Nicht jeder Altbau ist automatisch problematisch',
    rest: ' – genauso wenig ist jede Wärmepumpe im Altbau automatisch sinnvoll. Pauschalurteile helfen hier selten weiter.',
  },
  planungsText: {
    bold: 'Die richtige Entscheidung entsteht aus sauberer Bestandsaufnahme',
    rest: ' – nicht aus Werbung, nicht aus Angst und nicht aus pauschalen Standardaussagen.',
  },
}

const sharedCta = {
  titel: 'Lass uns deinen Altbau ehrlich einordnen',
  text:
    'Wir schauen uns Gebäudesituation, Heizsystem, Heizflächen und technische Möglichkeiten gemeinsam an – praxisnah, ehrlich und ohne pauschale Standardantwort.',
}

const faq = [
  {
    frage: 'Kann eine Wärmepumpe im Altbau grundsätzlich funktionieren?',
    antwort:
      'Ja. Eine Wärmepumpe kann auch im Altbau sinnvoll funktionieren. Entscheidend sind aber nicht nur Baujahr oder Schlagwort Altbau, sondern Heizlast, Vorlauftemperatur, Heizflächen und der tatsächliche Zustand des Gebäudes.',
  },
  {
    frage: 'Ist ein unsanierter Altbau automatisch ungeeignet?',
    antwort:
      'Nein. Auch ein unsanierter oder nur teilweise sanierter Altbau kann in manchen Fällen mit einer Wärmepumpe funktionieren. Maßgeblich ist, wie hoch der Wärmebedarf wirklich ist und bei welchen Temperaturen das Heizsystem zuverlässig arbeitet.',
  },
  {
    frage: 'Braucht man für eine Wärmepumpe im Altbau zwingend eine Fußbodenheizung?',
    antwort:
      'Nein. Eine Fußbodenheizung ist hilfreich, aber keine Pflicht. Auch gut ausgelegte Heizkörper können funktionieren. Entscheidend ist, ob die benötigte Wärme bei möglichst moderaten Vorlauftemperaturen in die Räume gebracht werden kann.',
  },
  {
    frage: 'Können vorhandene Heizkörper im Altbau ausreichen?',
    antwort:
      'Ja, das ist durchaus möglich. Viele Bestandsgebäude werden an dieser Stelle zu pauschal bewertet. Ob vorhandene Heizkörper ausreichen, muss sauber geprüft werden – am besten auf Basis realer Betriebsdaten und nicht nach Bauchgefühl.',
  },
  {
    frage: 'Welche Rolle spielt die Vorlauftemperatur?',
    antwort:
      'Eine sehr große. Je niedriger die notwendige Vorlauftemperatur, desto effizienter arbeitet eine Wärmepumpe in der Regel. Hohe Vorlauftemperaturen sind nicht automatisch ein Ausschlusskriterium, sollten aber ehrlich eingeordnet werden.',
  },
  {
    frage: 'Was bedeutet Heizlast – und warum ist sie so wichtig?',
    antwort:
      'Die Heizlast beschreibt, wie viel Wärme ein Gebäude unter bestimmten Bedingungen benötigt. Sie ist eine zentrale Grundlage für die Auslegung. Wer hier nur grob schätzt, riskiert Fehlplanung, unnötige Kosten oder schlechte Effizienz.',
  },
  {
    frage: 'Muss ein Altbau zuerst komplett saniert werden?',
    antwort:
      'Nicht zwingend. Eine Vollsanierung ist nicht in jedem Fall Voraussetzung. Häufig helfen schon einzelne sinnvolle Maßnahmen, zum Beispiel ein hydraulischer Abgleich, passende Heizkörper oder die Verbesserung einzelner schwacher Bereiche.',
  },
  {
    frage: 'Ist eine Wärmepumpe im Altbau immer wirtschaftlich?',
    antwort:
      'Nicht automatisch. Technische Machbarkeit und wirtschaftliche Sinnhaftigkeit sind zwei verschiedene Fragen. Eine ehrliche Planung bewertet deshalb nicht nur, ob es grundsätzlich geht, sondern auch, wie sinnvoll die Lösung im konkreten Fall ist.',
  },
  {
    frage: 'Kann man eine Wärmepumpe schrittweise in einen Altbau integrieren?',
    antwort:
      'Ja. In vielen Fällen ist eine schrittweise Herangehensweise sinnvoll. Erst wird das Gebäude sauber eingeordnet, dann werden Engstellen identifiziert und anschließend kann entschieden werden, welche Maßnahmen sofort und welche später sinnvoll sind.',
  },
  {
    frage: 'Was ist der häufigste Denkfehler bei Wärmepumpen im Altbau?',
    antwort:
      'Der häufigste Fehler ist pauschales Denken. Sowohl „geht nie“ als auch „geht immer“ führt in der Praxis oft zu schlechten Entscheidungen. Die richtige Antwort entsteht fast immer aus der konkreten Gebäudesituation.',
  },
  {
    frage: 'Was sollte man sich bei einer Beratung unbedingt zeigen lassen?',
    antwort:
      'Wichtig sind nachvollziehbare Aussagen zu Heizlast, Vorlauftemperatur, Heizflächen, Gerätegröße und realistischem Betriebsverhalten. Eine gute Beratung erklärt, warum eine Lösung passt – oder wo Grenzen liegen.',
  },
  {
    frage: 'Woran erkennt man eine unseriöse Einordnung?',
    antwort:
      'Misstrauisch sollte man werden, wenn pauschale Aussagen ohne echte Bestandsaufnahme getroffen werden. Auch zu schön gerechnete Einsparungen, fehlende technische Herleitung oder reines Verkaufsframing sind klare Warnzeichen.',
  },
]

const mainPreset = createFaqOnlyPreset({
  summary: sharedSummary,

  intro: {
    title: '1. Wärmepumpe im Altbau: Geht das überhaupt?',
    paragraphs: [
      'Ja, eine Wärmepumpe kann auch im Altbau sinnvoll funktionieren. Entscheidend ist aber nicht allein das Baujahr des Hauses, sondern der tatsächliche Zustand des Gebäudes und des Heizsystems.',
      'Genau hier beginnt in der Praxis oft schon das Problem: Viele Diskussionen über Wärmepumpen im Altbau laufen viel zu pauschal. Die einen sagen, das funktioniere grundsätzlich nicht. Die anderen tun so, als sei es in jedem Altbau ohne weitere Prüfung die ideale Lösung. Beides ist zu kurz gedacht.',
      'Wirklich relevant sind andere Fragen: Wie hoch ist die Heizlast? Welche Vorlauftemperaturen werden im Winter tatsächlich benötigt? Welche Heizflächen sind vorhanden? Wie ist der Dämmzustand? Wie gut sind Fenster, Dach und Gebäudehülle? Und wie sauber ist das bestehende Heizsystem hydraulisch überhaupt abgestimmt?',
      'Ein Altbau ist also nicht automatisch ungeeignet. Gleichzeitig sollte man aber auch nicht so tun, als sei jede Wärmepumpe überall ohne Prüfung die richtige Lösung. Die richtige Antwort entsteht fast immer aus der konkreten Gebäudesituation.',
    ],
  },

  faq,

  outro: {
    title: '7. Fazit',
    paragraphs: [
      'Eine Wärmepumpe im Altbau kann sehr sinnvoll sein – aber nur, wenn Gebäude und Technik sauber bewertet werden. Entscheidend ist nicht das Schlagwort Altbau, sondern ob Heizlast, Heizflächen, Vorlauftemperaturen und Gebäudestandard zur geplanten Lösung passen.',
      'Genau deshalb sollte die Entscheidung weder aus Angst noch aus Werbeversprechen getroffen werden. Wer seriös plant, schaut ehrlich auf den Bestand, benennt Chancen genauso wie Grenzen und baut kein Papierkonzept, sondern eine Lösung, die im Alltag wirklich funktioniert.',
    ],
  },

  cta: sharedCta,
})

const sectionBaujahrPreset = createFaqOnlyPreset({
  summary: sharedSummary,

  intro: {
    title: '2. Warum „Altbau“ allein noch gar nichts entscheidet',
    paragraphs: [
      'Der Begriff Altbau klingt oft nach einem klaren technischen Urteil, ist in Wahrheit aber viel zu ungenau. Zwischen einem teilweise modernisierten Haus aus den 60er Jahren, einem sanierten Gebäude aus den 80ern und einem energetisch schwachen Bestand liegen in der Praxis Welten.',
      'Deshalb ist das Baujahr nur ein grober Rahmen – mehr nicht. Entscheidend ist, wie das Haus heute tatsächlich dasteht. Dazu gehören unter anderem Fenster, Dach, Fassade, Kellerdecke, Luftdichtheit, Heizverteilung und das reale Nutzerverhalten.',
      'Viele Häuser sind in den letzten Jahren schrittweise verbessert worden, ohne dass sie als „voll saniert“ gelten würden. Genau diese Gebäude werden in pauschalen Debatten oft falsch einsortiert. Sie sind weder perfekter Neubau noch hoffnungsloser Problemfall.',
      'Wer nur mit dem Begriff Altbau argumentiert, trifft deshalb oft schlechte Entscheidungen. Nicht das Etikett zählt, sondern die technische Realität vor Ort.',
    ],
  },

  faq: [],
  outro: {
    title: 'Zwischenfazit',
    paragraphs: ['Nicht das Baujahr entscheidet, sondern die konkrete Gebäudesituation.'],
  },
  cta: sharedCta,
})

const sectionTechnikPreset = createFaqOnlyPreset({
  summary: sharedSummary,

  intro: {
    title: '3. Heizlast, Vorlauftemperatur und Heizflächen: Das sind die Kernfragen',
    paragraphs: [
      'Wenn man eine Wärmepumpe im Altbau ehrlich bewerten will, kommt man an drei Themen nicht vorbei: Heizlast, notwendige Vorlauftemperatur und vorhandene Heizflächen.',
      'Die Heizlast beschreibt, wie viel Wärme das Gebäude unter ungünstigen Bedingungen wirklich braucht. Sie ist keine Nebensache, sondern eine zentrale Grundlage für die Auslegung. Wer hier zu grob arbeitet, riskiert am Ende ein System, das entweder ineffizient oder unnötig groß ist.',
      'Die Vorlauftemperatur zeigt, auf welchem Temperaturniveau das Heizsystem arbeiten muss, damit die Räume warm werden. Je niedriger dieser Wert in der Praxis ausfällt, desto entspannter ist die Ausgangslage für eine Wärmepumpe. Hohe Temperaturen sind nicht automatisch ein Ausschlusskriterium, sie verschlechtern aber häufig die Effizienz und müssen deshalb sauber eingeordnet werden.',
      'Die Heizflächen – also Heizkörper oder Flächenheizungen – bestimmen, wie gut sich Wärme bei einem bestimmten Temperaturniveau überhaupt in den Raum übertragen lässt. Genau deshalb ist die Frage nach den vorhandenen Heizkörpern im Altbau so wichtig.',
      'Wer diese drei Punkte sauber erfasst, hat eine deutlich bessere Grundlage als jeder pauschale Prospektvergleich.',
    ],
  },

  faq: [],
  outro: {
    title: 'Zwischenfazit',
    paragraphs: ['Ohne saubere Einordnung von Heizlast, Vorlauf und Heizflächen bleibt jede Bewertung zu grob.'],
  },
  cta: sharedCta,
})

const sectionHeizkoerperPreset = createFaqOnlyPreset({
  summary: sharedSummary,

  intro: {
    title: '4. Wärmepumpe im Altbau ohne Fußbodenheizung – geht das auch?',
    paragraphs: [
      'Ja, das kann funktionieren. Die Vorstellung, dass eine Wärmepumpe im Altbau nur mit Fußbodenheizung sinnvoll ist, hält sich zwar hartnäckig, ist aber in dieser Pauschalität falsch.',
      'Richtig ist: Große Heizflächen helfen, weil sie die gleiche Wärme mit geringeren Temperaturen in den Raum bringen können. Eine Fußbodenheizung ist deshalb oft komfortabel für die Wärmepumpe – aber eben nicht die einzige Lösung.',
      'Auch vorhandene Heizkörper können funktionieren, wenn sie ausreichend dimensioniert sind oder wenn einzelne kritische Räume gezielt verbessert werden. In manchen Häusern reicht schon der Austausch einzelner kleiner Heizkörper, um das Gesamtsystem deutlich besser aufzustellen.',
      'Genau hier ist ehrliche Praxis wichtiger als pauschale Theorie. Nicht jeder Heizkörperbestand ist gut. Aber nicht jeder Bestand ist automatisch ein Ausschlusskriterium. Man muss hinschauen, messen, vergleichen und vernünftig einordnen.',
      'Wer pauschal sagt, ohne Fußbodenheizung gehe es nicht, macht es sich zu leicht. Wer pauschal sagt, Heizkörper seien nie ein Problem, macht es sich genauso zu leicht.',
    ],
  },

  faq: [],
  outro: {
    title: 'Zwischenfazit',
    paragraphs: ['Auch mit Heizkörpern kann eine Wärmepumpe funktionieren – entscheidend ist die reale Auslegung.'],
  },
  cta: sharedCta,
})

const sectionEinordnungPreset = createFaqOnlyPreset({
  summary: sharedSummary,

  intro: {
    title: '5. Wann es oft gut passt – und wann man ehrlich bremsen sollte',
    paragraphs: [
      'Eine Wärmepumpe passt im Altbau oft gut, wenn das Gebäude einen vernünftigen energetischen Zustand hat, die Heizflächen brauchbar ausgelegt sind und die notwendigen Systemtemperaturen nicht dauerhaft zu hoch liegen. Das gilt auch für viele Häuser, die nicht als Vollsanierung gelten.',
      'Oft sieht man in der Praxis Bestandsgebäude, die bereits neue Fenster, einzelne Dämmmaßnahmen oder eine insgesamt solide Hülle haben. Wenn dann noch Heizkörper und Hydraulik passen, ist eine Wärmepumpe häufig eine sehr vernünftige Lösung.',
      'Genauso wichtig ist aber die andere Seite: Es gibt Häuser, in denen die Verluste hoch sind, die Heizkörper klein, die hydraulische Situation schlecht und die Erwartungen an Effizienz oder Einsparung unrealistisch. Dann muss man ehrlich bremsen – nicht aus Prinzip, sondern aus Verantwortung.',
      'Seriöse Planung bedeutet deshalb nicht, jede Wärmepumpe schlechtzureden. Sie bedeutet aber auch nicht, jeden Altbau zwanghaft passend zu rechnen. Entscheidend ist, ob die Lösung im echten Alltag funktionieren und wirtschaftlich vertretbar laufen kann.',
    ],
  },

  faq: [],
  outro: {
    title: 'Zwischenfazit',
    paragraphs: ['Technisch möglich ist nicht automatisch sinnvoll – aber viele Altbauten werden auch unnötig schlechtgeredet.'],
  },
  cta: sharedCta,
})

const sectionMassnahmenPreset = createFaqOnlyPreset({
  summary: sharedSummary,

  intro: {
    title: '6. Welche Maßnahmen häufig mehr bringen als gedacht',
    paragraphs: [
      'Zwischen „geht sofort perfekt“ und „geht gar nicht“ gibt es in der Praxis viele sinnvolle Zwischenschritte. Genau diese werden in vielen Verkaufs- oder Angstdiskussionen übersehen.',
      'Oft helfen bereits einzelne technische Verbesserungen: ein sauberer hydraulischer Abgleich, sinnvoll gewählte Heizkurven, die Prüfung der tatsächlichen Vorlauftemperaturen im Winter oder der gezielte Austausch einzelner kleiner Heizkörper. Auch die Verbesserung einzelner schwacher Stellen an der Gebäudehülle kann einen größeren Effekt haben, als viele vermuten.',
      'Wichtig ist dabei, nicht dogmatisch zu denken. Nicht jedes Haus braucht sofort ein Komplettpaket. Häufig ist es deutlich sinnvoller, die größten Engstellen ehrlich zu identifizieren und dann mit Augenmaß zu entscheiden, welche Maßnahmen wirklich etwas bringen.',
      'Genau darin liegt oft die Stärke einer sauberen Bestandsplanung: Sie sucht nicht nach dem maximalen Verkaufsvolumen, sondern nach der technisch sinnvollen Lösung für das konkrete Gebäude.',
    ],
  },

  faq: [],
  outro: {
    title: 'Zwischenfazit',
    paragraphs: ['Oft sind es nicht die ganz großen Umbauten, sondern die richtigen technischen Stellschrauben, die den Unterschied machen.'],
  },
  cta: sharedCta,
})

const article = createArticleBase({
  titel: 'Wärmepumpe im Altbau: Geht das überhaupt?',
  slug: 'waermepumpe-im-altbau',
  kategorie: 'waermepumpe',
  teaser:
    'Geht eine Wärmepumpe auch im Altbau? Ja – aber nicht pauschal. Entscheidend sind Heizlast, Vorlauftemperatur, Heizflächen und der tatsächliche Gebäudezustand. Hier findest du eine ehrliche Einordnung ohne Werbeversprechen.',
  lesezeit: 11,

  zusammenfassung: mainPreset.zusammenfassung,

  inhalt: [
    mainPreset.blocks.introBlock,
    sectionBaujahrPreset.blocks.introBlock,
    sectionTechnikPreset.blocks.introBlock,
    sectionHeizkoerperPreset.blocks.introBlock,
    sectionEinordnungPreset.blocks.introBlock,
    sectionMassnahmenPreset.blocks.introBlock,
    ...(mainPreset.blocks.outroBlock ? [mainPreset.blocks.outroBlock] : []),
    mainPreset.blocks.ctaBlock,
  ],

  faq,

  metaTitle:
    'Wärmepumpe im Altbau: Voraussetzungen, Heizkörper, Einordnung | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Wärmepumpe im Altbau: ehrliche Einordnung zu Heizlast, Vorlauftemperatur, Heizkörpern, Dämmung und typischen Denkfehlern – praxisnah von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
