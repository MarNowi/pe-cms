import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { createArticleBase } from './_templates.mjs'
import { createFaqOnlyPreset } from './_topicPresets.mjs'

const preset = createFaqOnlyPreset({
  summary: {
    ohneSpeicherText: {
      bold: 'Einen Stromspeicher kann man grundsätzlich auch später nachrüsten',
      rest: ' – wichtig ist aber, dass die bestehende PV-Anlage und die Technik dafür sauber geeignet sind.',
    },
    mitSpeicherText: {
      bold: 'Nicht jede Bestandsanlage ist automatisch perfekt für eine Nachrüstung vorbereitet',
      rest: ' – Wechselrichter, Platz, Verkabelung und Systemarchitektur müssen zusammenpassen.',
    },
    groessenText: {
      bold: 'Entscheidend ist nicht nur, ob Nachrüstung möglich ist',
      rest: ' – sondern ob sie technisch sinnvoll und wirtschaftlich sauber einzuordnen ist.',
    },
    planungsText: {
      bold: 'Die beste Nachrüstung ist die, die von Anfang an mitgedacht wurde',
      rest: ' – aber auch später kann ein Speicher noch sinnvoll sein, wenn die Basis stimmt.',
    },
  },

  intro: {
    title: '1. Kann man einen Stromspeicher später nachrüsten?',
    paragraphs: [
      'Ja, einen Stromspeicher kann man grundsätzlich auch nachträglich ergänzen. Ob das im konkreten Fall sinnvoll und technisch sauber umsetzbar ist, hängt aber stark von der bestehenden PV-Anlage und der vorhandenen Infrastruktur ab.',
      'Wichtig ist vor allem, dass Wechselrichter, Verkabelung, Platzverhältnisse und die gesamte Systemarchitektur zur geplanten Speicherlösung passen.',
      'Eine Nachrüstung ist also keine reine Ja-oder-nein-Frage, sondern sollte immer technisch und wirtschaftlich sauber geprüft werden.',
    ],
  },

  faq: [
    {
      frage: 'Kann man einen Stromspeicher bei einer bestehenden Solaranlage nachrüsten?',
      antwort:
        'Ja, das ist grundsätzlich möglich. Entscheidend ist aber, ob die bestehende Technik, der Wechselrichter, die elektrische Infrastruktur und die Systemarchitektur dafür geeignet sind.',
    },
    {
      frage: 'Was muss vor einer Speicher-Nachrüstung geprüft werden?',
      antwort:
        'Vor allem Wechselrichter, Zählerschrank, Leitungswege, Platzverhältnisse und die Frage, wie die bestehende PV-Anlage technisch aufgebaut ist. Erst danach lässt sich sauber bewerten, welche Speicherlösung passt.',
    },
    {
      frage: 'Ist eine Nachrüstung immer wirtschaftlich sinnvoll?',
      antwort:
        'Nicht automatisch. Eine Nachrüstung kann sinnvoll sein, wenn sie zum Verbrauchsprofil und zur bestehenden Anlage passt. Sie sollte aber nicht aus reiner Technikbegeisterung erfolgen, sondern sauber eingeordnet werden.',
    },
    {
      frage: 'Ist eine vorbereitete Anlage besser für spätere Nachrüstung?',
      antwort:
        'Ja. Wenn bei der ursprünglichen Planung Speicher, Erweiterbarkeit und technische Schnittstellen bereits mitgedacht wurden, ist eine spätere Nachrüstung oft einfacher und sauberer umsetzbar.',
    },
    {
      frage: 'Was ist der häufigste Fehler bei Speicher-Nachrüstung?',
      antwort:
        'Oft wird nur gefragt, ob es theoretisch möglich ist. Wichtiger ist aber, ob es technisch sauber, wirtschaftlich sinnvoll und zur bestehenden Anlage passend ist.',
    },
  ],

  outro: {
    title: '2. Fazit',
    paragraphs: [
      'Einen Stromspeicher kann man oft auch später nachrüsten – aber nicht jede Lösung ist automatisch sinnvoll.',
      'Entscheidend ist, ob die bestehende PV-Anlage, die Technik und dein Verbrauchsprofil sauber zu einer Nachrüstung passen.',
    ],
  },

  cta: {
    titel: 'Lass uns prüfen, ob Nachrüstung bei dir sinnvoll ist',
    text:
      'Wir schauen uns deine bestehende PV-Anlage, die technische Ausgangslage und dein Nutzungsprofil gemeinsam an – ehrlich, praxisnah und ohne Standardverkauf.',
  },
})

const article = createArticleBase({
  titel: 'Stromspeicher nachrüsten: Geht das überhaupt?',
  slug: 'stromspeicher-nachruesten',
  kategorie: 'stromspeicher',
  teaser:
    'Kann man einen Stromspeicher auch später ergänzen? Ja – aber nur, wenn PV-Anlage, Technik und Verbrauch sauber dazu passen. Hier findest du eine ehrliche Einordnung.',
  lesezeit: 7,

  zusammenfassung: preset.zusammenfassung,

  inhalt: [
    preset.blocks.introBlock,
    ...(preset.blocks.outroBlock ? [preset.blocks.outroBlock] : []),
    preset.blocks.ctaBlock,
  ],

  faq: preset.faq,

  metaTitle: 'Stromspeicher nachrüsten: Geht das überhaupt? | PEAK.Energy – WE ♥️ ENERGY',
  metaDescription:
    'Stromspeicher nachrüsten: Geht das bei bestehenden PV-Anlagen? Ehrliche Einordnung zu Technik, Wirtschaftlichkeit und typischen Denkfehlern – von PEAK.Energy.',
})

upsertRatgeberArticle(article).catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
