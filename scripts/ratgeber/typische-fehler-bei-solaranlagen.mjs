import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Die meisten Fehler bei Solaranlagen entstehen nicht erst bei der Montage',
      rest: ' – sondern viel früher, bei zu schnellen Annahmen zu Dach, Verbrauch, Technik und Zukunftsplanung.',
    },
    mitSpeicherText: {
      bold: 'Zu kleine Anlagen, falsch bewertete Dächer und pauschale Speicherempfehlungen sind typische Probleme',
      rest: ' – oft nicht aus Absicht, sondern weil zu wenig ganzheitlich geplant wird.',
    },
    groessenText: {
      bold: 'Wer nur auf den Einstiegspreis schaut, vergleicht Solaranlagen oft am falschen Ende',
      rest: ' – weil Dachzustand, Zählerschrank, Leitungswege, Gerüst, Reserven und spätere Verbraucher mitentscheiden.',
    },
    planungsText: {
      bold: 'Eine gute Solaranlage ist nicht die günstigste auf dem Papier',
      rest: ' – sondern die, die technisch sauber geplant ist, wirtschaftlich nachvollziehbar bleibt und langfristig zum Haus passt.',
    },
  },

  intro: {
    title: '1. Wo entstehen die typischen Fehler bei Solaranlagen wirklich?',
    paragraphs: [
      'Die meisten Fehler bei Solaranlagen entstehen nicht auf dem Dach, sondern lange vorher – in der Planung, in zu groben Annahmen oder in einem Vergleich, der nur Preis und kWp gegenüberstellt.',
      'Genau dort werden oft Entscheidungen getroffen, die später zu Enttäuschung führen: Anlagen werden zu knapp ausgelegt, Speicher ohne saubere Einordnung eingeplant oder technische Randbedingungen wie Zählerschrank, Leitungswege und Dachbesonderheiten zu spät berücksichtigt.',
      'Viele Angebote wirken auf den ersten Blick ähnlich, sind es aber in der Praxis nicht. Denn zwei Anlagen mit derselben Leistung können sich deutlich unterscheiden – etwa bei Montageaufwand, Ertragsannahmen, Wechselrichterauslegung, Speichergröße oder den enthaltenen Leistungen.',
      'Ein weiterer häufiger Fehler ist der zu enge Blick auf den aktuellen Stromverbrauch. Wer heute nur den Ist-Zustand betrachtet, plant oft am Haus vorbei. Spätere Verbraucher wie Wärmepumpe, Wallbox, Klimagerät oder ein verändertes Nutzungsverhalten werden dann nicht ausreichend mitgedacht.',
      'Auch beim Thema Speicher gibt es viele Missverständnisse. Ein Speicher kann sinnvoll sein – muss es aber nicht automatisch. Entscheidend ist nicht, ob Speicher gut oder schlecht sind, sondern ob sie in Größe, Nutzung und Erwartung wirklich zur Anlage und zum Alltag passen.',
      'Ebenso wichtig ist die technische Ausgangslage. Dachform, Verschattung, Belegung, Zustand der Elektroverteilung und die Frage, was im Angebot tatsächlich enthalten ist, beeinflussen die spätere Wirtschaftlichkeit oft stärker als ein vermeintlich niedriger Einstiegspreis.',
      'Wer Solaranlagen sauber bewerten will, sollte deshalb nicht nur fragen: Was kostet die Anlage? Sondern vor allem: Passt die Planung wirklich zu Dach, Haus, Verbrauch und den nächsten Jahren?',
    ],
  },

  faq: [
    {
      frage: 'Was ist der häufigste Fehler bei Solaranlagen?',
      antwort:
        'Der häufigste Fehler ist eine zu vereinfachte Bewertung über Preis und kWp. Eine Solaranlage ist nur dann wirklich passend, wenn Dach, Verbrauch, technische Infrastruktur, Verschattung, spätere Verbraucher und die Ausführung zusammen sauber betrachtet wurden.',
    },
    {
      frage: 'Warum werden Solaranlagen oft zu klein geplant?',
      antwort:
        'Weil häufig nur der aktuelle Haushaltsstrom als Grundlage genommen wird. Wenn später Wärmepumpe, Wallbox, Klimatisierung oder allgemein höherer Eigenverbrauch dazukommen, ist die ursprünglich knapp geplante Anlage schnell nicht mehr ideal.',
    },
    {
      frage: 'Kann eine Solaranlage auch zu groß geplant werden?',
      antwort:
        'Ja, wenn die Größe nur aus Verkaufslogik heraus gewählt wird und weder Dach noch Verbrauchsprofil noch Wirtschaftlichkeit sauber eingeordnet werden. Gleichzeitig ist „zu groß“ nicht pauschal an einer bestimmten kWp-Zahl festzumachen. Entscheidend ist immer der Gesamtkontext.',
    },
    {
      frage: 'Warum reicht es nicht, nur auf die Dachfläche zu schauen?',
      antwort:
        'Weil nicht jede Dachfläche automatisch gleich gut nutzbar ist. Dachausrichtung, Neigung, Verschattung, Abstände, Dachfenster, Gauben, Belegungslogik und die praktische Montagefähigkeit beeinflussen, was technisch sinnvoll und wirtschaftlich sauber ist.',
    },
    {
      frage: 'Spielt der Zählerschrank bei Fehlern wirklich eine große Rolle?',
      antwort:
        'Ja. Der Zählerschrank wird in vielen Angeboten zu spät oder zu oberflächlich betrachtet. Dabei kann genau dort zusätzlicher technischer und finanzieller Aufwand entstehen. Wer das nicht früh prüft, erlebt später oft unangenehme Überraschungen.',
    },
    {
      frage: 'Ist ein Speicher automatisch sinnvoll?',
      antwort:
        'Nein. Ein Speicher kann sehr sinnvoll sein, ist aber kein Pflichtbaustein. Wichtig ist, ob Speichergröße, Nutzung, Lastprofil und Erwartungen zusammenpassen. Ein Speicher sollte nicht pauschal mitverkauft, sondern nachvollziehbar eingeordnet werden.',
    },
    {
      frage: 'Was ist der größte Denkfehler bei Angebotsvergleichen?',
      antwort:
        'Der größte Denkfehler ist anzunehmen, dass scheinbar ähnliche Anlagen automatisch vergleichbar sind. In der Praxis unterscheiden sich Komponenten, Montageaufwand, Dachbelegung, Speicherkonzept, Leitungswege, Elektroarbeiten und enthaltene Leistungen oft deutlich.',
    },
    {
      frage: 'Warum sind günstige Angebote nicht automatisch die besseren Angebote?',
      antwort:
        'Weil ein niedriger Einstiegspreis oft nur einen Teil des Projekts abbildet. Wenn wichtige Punkte wie Zählerschrank, Leitungsführung, Gerüst, Zusatzarbeiten oder technische Randbedingungen unklar bleiben, ist das Angebot auf dem Papier zwar günstig, in der Realität aber oft nicht sauber vergleichbar.',
    },
    {
      frage: 'Welche Rolle spielen spätere Verbraucher wie Wärmepumpe oder Wallbox?',
      antwort:
        'Eine große. Wer weiß oder vermutet, dass später eine Wärmepumpe, Wallbox oder ein höherer Strombedarf dazukommt, sollte das von Anfang an in die Planung einbeziehen. Sonst ist die Anlage zwar heute rechnerisch passend, in kurzer Zeit aber schon zu knapp gedacht.',
    },
    {
      frage: 'Sind gute Module allein schon die halbe Miete?',
      antwort:
        'Nein. Gute Komponenten sind wichtig, aber sie ersetzen keine saubere Planung. Auch hochwertige Module helfen wenig, wenn Belegung, Auslegung, Wechselrichterkonzept oder die technische Einbindung ins Haus nicht sauber gelöst sind.',
    },
    {
      frage: 'Woran erkennt man eine saubere Beratung?',
      antwort:
        'An einer Beratung, die nicht nur verkauft, sondern einordnet. Gute Beratung fragt nach Dach, Verbrauch, Zukunftsplänen, Elektrobestand, möglichen Reserven und den tatsächlichen Zielen des Kunden. Sie erklärt auch, wann etwas sinnvoll ist – und wann nicht.',
    },
    {
      frage: 'Was sollte man vor der Unterschrift unbedingt klären?',
      antwort:
        'Vor der Entscheidung sollten Dachbelegung, technische Ausgangslage, enthaltene Leistungen, Umgang mit dem Zählerschrank, Speicherfrage, Erweiterungsoptionen und die Herleitung der empfohlenen Anlagengröße klar nachvollziehbar sein. Je transparenter diese Punkte sind, desto belastbarer ist das Angebot.',
    },
  ],

  outro: {
    title: '2. Worauf du vor einer Entscheidung konkret achten solltest',
    paragraphs: [
      'Die typischen Fehler bei Solaranlagen sind meistens keine Montagefehler, sondern Planungsfehler. Genau deshalb lohnt es sich, vor der Entscheidung nicht nur Zahlen zu vergleichen, sondern die gesamte Ausgangslage sauber zu prüfen.',
      'Wichtig ist vor allem, dass die Anlagengröße nicht isoliert, sondern im Zusammenhang mit Dach, Verbrauch, technischer Infrastruktur und den nächsten Jahren gedacht wird. Wer nur den heutigen Zustand betrachtet, plant häufig zu kurz.',
      'Ebenso wichtig ist ein ehrlicher Angebotsvergleich. Nicht jede Position steht in jedem Angebot gleich klar drin, und nicht jede vermeintlich gleiche Anlage ist in Wirklichkeit gleichwertig. Eine gute Planung macht Unterschiede sichtbar, statt sie zu überdecken.',
      'Auch die Speicherfrage sollte nicht ideologisch beantwortet werden. Weder „immer mit Speicher“ noch „nie mit Speicher“ ist eine seriöse Standardantwort. Entscheidend ist, was zu Haus, Verbrauch, Zielbild und Budget wirklich passt.',
      'Unterm Strich gilt: Eine gute Solaranlage erkennt man nicht daran, dass sie auf dem Papier am billigsten aussieht. Sondern daran, dass sie technisch stimmig, nachvollziehbar geplant und langfristig sinnvoll für das Haus ausgelegt ist.',
    ],
  },

  cta: {
    titel: 'Lass uns dein Projekt ehrlich und sauber einordnen',
    text:
      'Wir schauen uns Dach, Verbrauch, Speicherfrage, spätere Verbraucher und die technische Ausgangslage gemeinsam an – praxisnah, ehrlich und ohne Standardverkauf.',
  },
})

const article = createArticleBase({
  titel: 'Typische Fehler bei Solaranlagen: Worauf sollte man achten?',
  slug: 'typische-fehler-bei-solaranlagen',
  kategorie: 'solaranlage',
  teaser:
    'Viele Fehler bei Solaranlagen entstehen schon in der Planung. Hier findest du eine ehrliche Einordnung zu Auslegung, Speicher, Zählerschrank, Dach und Angebotsvergleich.',
  lesezeit: 9,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,
    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Typische Fehler bei Solaranlagen: Worauf sollte man achten? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Typische Fehler bei Solaranlagen: ehrliche Einordnung zu Planung, Speicher, Zählerschrank, Auslegung und Angebotsvergleich – praxisnah erklärt von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
