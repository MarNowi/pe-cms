import { faqItem, h, p, t, textBlock, ul } from './_helpers.mjs'
import {
  createPreisTabelle,
  createStandardFehlerBlock,
  createStandardKostenBloeckeBlock,
  createStandardKostenCta,
  createStandardKostenSummary,
  createStandardKostenbloeckeTabelle,
  createStandardLaufendeKostenBlock,
  createStandardPreisfaktorenBlock,
} from './_templates.mjs'

function required(value, name) {
  if (value === undefined || value === null || value === '') {
    throw new Error(`${name} fehlt`)
  }
}

function createPreisTextBlock({ title, paragraph1, paragraph2 }) {
  const children = [h('h2', t(title)), p(t(paragraph1))]
  if (paragraph2) children.push(p(t(paragraph2)))
  return textBlock(...children)
}

export function createFaqOnlyFaqPreset(items = []) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('faq fehlt')
  }

  return items.map((item) => faqItem(item.frage, item.antwort))
}

export function createFaqOnlyPreset({
  summary,
  intro,
  faq,
  outro,
  cta = {},
}) {
  required(summary, 'summary')
  required(intro, 'intro')
  required(faq, 'faq')

  const introBlock = textBlock(
    h('h2', t(intro.title ?? '1. Kurz erklärt')),
    ...((intro.paragraphs ?? []).map((text) => p(t(text))))
  )

  const outroBlock = outro
    ? textBlock(
        h('h2', t(outro.title ?? '2. Fazit')),
        ...((outro.paragraphs ?? []).map((text) => p(t(text))))
      )
    : null

  const ctaBlock = createStandardKostenCta({
    titel: cta.titel ?? 'Lass uns deine Situation ehrlich einordnen',
    text:
      cta.text ??
      'Wir schauen uns Verbrauch, Dach, Speicher und technische Ausgangslage gemeinsam an – praxisnah und ohne Verkaufsdruck.',
    buttonText: cta.buttonText,
    buttonLink: cta.buttonLink,
  })

  return {
    zusammenfassung: createStandardKostenSummary(summary),
    blocks: {
      introBlock,
      outroBlock,
      ctaBlock,
    },
    faq: createFaqOnlyFaqPreset(faq),
  }
}

export function createStandardVergleichFaqPreset({
  frageTitel,
  optionA,
  optionB,
  grundsatzAntwort,
  optionAAntwort,
  optionBAntwort,
  fehlerAntwort,
  fazitAntwort,
  extra = [],
}) {
  required(frageTitel, 'frageTitel')
  required(optionA, 'optionA')
  required(optionB, 'optionB')
  required(grundsatzAntwort, 'grundsatzAntwort')
  required(optionAAntwort, 'optionAAntwort')
  required(optionBAntwort, 'optionBAntwort')
  required(fehlerAntwort, 'fehlerAntwort')
  required(fazitAntwort, 'fazitAntwort')

  return [
    faqItem(`${frageTitel}: Was ist sinnvoller?`, grundsatzAntwort),
    faqItem(`Wann ist ${optionA} sinnvoll?`, optionAAntwort),
    faqItem(`Wann ist ${optionB} sinnvoll?`, optionBAntwort),
    faqItem(
      'Was ist der häufigste Denkfehler bei diesem Vergleich?',
      fehlerAntwort
    ),
    faqItem('Was ist am Ende die beste Entscheidung?', fazitAntwort),
    ...extra.map((item) => faqItem(item.frage, item.antwort)),
  ]
}

export function createVergleichPreset({
  summary,
  grundsatz,
  unterschiede,
  optionA,
  optionB,
  wannA,
  wannB,
  fehler,
  fazit,
  cta = {},
  faq,
}) {
  required(summary, 'summary')
  required(grundsatz, 'grundsatz')
  required(unterschiede, 'unterschiede')
  required(optionA, 'optionA')
  required(optionB, 'optionB')
  required(wannA, 'wannA')
  required(wannB, 'wannB')
  required(fehler, 'fehler')
  required(fazit, 'fazit')
  required(faq, 'faq')

  const grundsatzBlock = textBlock(
    h('h2', t(grundsatz.title ?? '1. Worum geht es bei diesem Vergleich?')),
    ...((grundsatz.paragraphs ?? []).map((text) => p(t(text))))
  )

  const unterschiedeBlock = textBlock(
    h('h2', t(unterschiede.title ?? '2. Wo liegt der eigentliche Unterschied?')),
    ...((unterschiede.paragraphs ?? []).map((text) => p(t(text)))),
    ...(unterschiede.list?.length ? [ul(...unterschiede.list)] : [])
  )

  const optionABlock = textBlock(
    h('h2', t(optionA.title ?? '3. Vorteile von Option A')),
    ...((optionA.paragraphs ?? []).map((text) => p(t(text)))),
    ...(optionA.list?.length ? [ul(...optionA.list)] : [])
  )

  const optionBBlock = textBlock(
    h('h2', t(optionB.title ?? '4. Vorteile von Option B')),
    ...((optionB.paragraphs ?? []).map((text) => p(t(text)))),
    ...(optionB.list?.length ? [ul(...optionB.list)] : [])
  )

  const wannABlock = textBlock(
    h('h2', t(wannA.title ?? '5. Wann ist Option A sinnvoll?')),
    ...((wannA.paragraphs ?? []).map((text) => p(t(text)))),
    ...(wannA.list?.length ? [ul(...wannA.list)] : [])
  )

  const wannBBlock = textBlock(
    h('h2', t(wannB.title ?? '6. Wann ist Option B sinnvoll?')),
    ...((wannB.paragraphs ?? []).map((text) => p(t(text)))),
    ...(wannB.list?.length ? [ul(...wannB.list)] : [])
  )

  const fehlerBlock = createStandardFehlerBlock({
    title: fehler.title ?? '7. Typische Denkfehler bei diesem Vergleich',
    lead:
      fehler.lead ??
      'Die meisten Fehlentscheidungen entstehen nicht, weil eine der beiden Optionen grundsätzlich schlecht ist, sondern weil pauschal statt passend entschieden wird.',
    errors: fehler.errors ?? [],
    outro:
      fehler.outro ??
      'Die richtige Entscheidung ergibt sich nicht aus Schlagworten, sondern aus Dach, Verbrauch, Alltag und technischer Zielsetzung.',
  })

  const fazitBlock = textBlock(
    h('h2', t(fazit.title ?? '8. Fazit')),
    ...((fazit.paragraphs ?? []).map((text) => p(t(text))))
  )

  const ctaBlock = createStandardKostenCta({
    titel: cta.titel ?? 'Lass uns deine Situation realistisch einordnen',
    text:
      cta.text ??
      'Wir schauen uns Verbrauch, Dach, Technik und spätere Erweiterungen gemeinsam an – ehrlich, praxisnah und ohne Verkaufsdruck.',
    buttonText: cta.buttonText,
    buttonLink: cta.buttonLink,
  })

  return {
    zusammenfassung: createStandardKostenSummary(summary),
    blocks: {
      grundsatzBlock,
      unterschiedeBlock,
      optionABlock,
      optionBBlock,
      wannABlock,
      wannBBlock,
      fehlerBlock,
      fazitBlock,
      ctaBlock,
    },
    faq: createStandardVergleichFaqPreset(faq),
  }
}

export function createStandardPlanungsFaqPreset({
  hauptbegriff = 'PV-Anlage',
  planungAntwort,
  dachAntwort,
  speicherAntwort,
  fehlerAntwort,
  anmeldungAntwort,
  extra = [],
}) {
  required(planungAntwort, 'planungAntwort')
  required(dachAntwort, 'dachAntwort')
  required(speicherAntwort, 'speicherAntwort')
  required(fehlerAntwort, 'fehlerAntwort')
  required(anmeldungAntwort, 'anmeldungAntwort')

  return [
    faqItem(`Wie plane ich eine ${hauptbegriff} richtig?`, planungAntwort),
    faqItem('Welche Dachausrichtung ist am besten?', dachAntwort),
    faqItem('Sollte ich den Speicher direkt mitplanen?', speicherAntwort),
    faqItem(
      'Was wird bei der Planung am häufigsten vergessen?',
      fehlerAntwort
    ),
    faqItem(
      'Gehört die Anmeldung beim Netzbetreiber zur Planung dazu?',
      anmeldungAntwort
    ),
    ...extra.map((item) => faqItem(item.frage, item.antwort)),
  ]
}

export function createPlanungsPreset({
  summary,
  dach,
  groesse,
  speicher,
  technik,
  buerokratie,
  fehler,
  ablauf,
  cta = {},
  faq,
}) {
  required(summary, 'summary')
  required(dach, 'dach')
  required(groesse, 'groesse')
  required(speicher, 'speicher')
  required(technik, 'technik')
  required(buerokratie, 'buerokratie')
  required(fehler, 'fehler')
  required(ablauf, 'ablauf')
  required(faq, 'faq')

  const dachBlock = textBlock(
    h('h2', t(dach.title ?? '2. Ist dein Dach überhaupt geeignet?')),
    ...((dach.paragraphs ?? []).map((text) => p(t(text)))),
    ...(dach.list?.length ? [ul(...dach.list)] : [])
  )

  const groessenBlock = textBlock(
    h('h2', t(groesse.title ?? '3. Wie groß sollte die PV-Anlage sein?')),
    ...((groesse.paragraphs ?? []).map((text) => p(t(text)))),
    ...(groesse.list?.length ? [ul(...groesse.list)] : [])
  )

  const speicherBlock = textBlock(
    h('h2', t(speicher.title ?? '4. Speicher direkt mitplanen – ja oder nein?')),
    ...((speicher.paragraphs ?? []).map((text) => p(t(text)))),
    ...(speicher.list?.length ? [ul(...speicher.list)] : [])
  )

  const technikBlock = textBlock(
    h('h2', t(technik.title ?? '5. Technik und Infrastruktur nicht vergessen')),
    ...((technik.paragraphs ?? []).map((text) => p(t(text)))),
    ...(technik.list?.length ? [ul(...technik.list)] : [])
  )

  const buerokratieBlock = textBlock(
    h('h2', t(buerokratie.title ?? '6. Bürokratie und Anmeldung gehören zur Planung dazu')),
    ...((buerokratie.paragraphs ?? []).map((text) => p(t(text)))),
    ...(buerokratie.list?.length ? [ul(...buerokratie.list)] : [])
  )

  const fehlerBlock = createStandardFehlerBlock({
    title: fehler.title ?? '7. Typische Fehler bei der Planung',
    lead:
      fehler.lead ??
      'Die meisten Probleme entstehen nicht auf dem Dach, sondern vorher – bei falschen Annahmen, unvollständigen Angeboten oder zu kurz gedachten Systemen.',
    errors: fehler.errors ?? [],
    outro:
      fehler.outro ??
      'Eine gute PV-Anlage ist nicht die billigste auf dem Papier, sondern die, die technisch sauber geplant ist und im Alltag langfristig funktioniert.',
  })

  const ablaufBlock = textBlock(
    h('h2', t(ablauf.title ?? '8. So läuft eine saubere PV-Planung in der Praxis ab')),
    ...((ablauf.paragraphs ?? []).map((text) => p(t(text)))),
    ...(ablauf.list?.length ? [ul(...ablauf.list)] : [])
  )

  const ctaBlock = createStandardKostenCta({
    titel: cta.titel ?? 'Lass uns deine PV-Anlage sauber planen',
    text:
      cta.text ??
      'Wir schauen uns Dach, Verbrauch, spätere Erweiterungen und die technische Umsetzung gemeinsam an – ehrlich, praxisnah und ohne Verkaufsdruck.',
    buttonText: cta.buttonText,
    buttonLink: cta.buttonLink,
  })

  return {
    zusammenfassung: createStandardKostenSummary(summary),
    blocks: {
      dachBlock,
      groessenBlock,
      speicherBlock,
      technikBlock,
      buerokratieBlock,
      fehlerBlock,
      ablaufBlock,
      ctaBlock,
    },
    faq: createStandardPlanungsFaqPreset(faq),
  }
}

export function createStandardKostenFaqPreset({
  leistungLabel,
  ohneSpeicherAntwort,
  mitSpeicherAntwort,
  groessenAntwort,
  preisunterschiedeAntwort,
  speicherAntwort,
  extra = [],
}) {
  required(leistungLabel, 'leistungLabel')
  required(ohneSpeicherAntwort, 'ohneSpeicherAntwort')
  required(mitSpeicherAntwort, 'mitSpeicherAntwort')
  required(groessenAntwort, 'groessenAntwort')
  required(preisunterschiedeAntwort, 'preisunterschiedeAntwort')
  required(speicherAntwort, 'speicherAntwort')

  return [
    faqItem(
      `Was kostet eine ${leistungLabel} Solaranlage ohne Speicher aktuell ungefähr?`,
      ohneSpeicherAntwort
    ),
    faqItem(
      `Was kostet eine ${leistungLabel} Solaranlage mit Speicher?`,
      mitSpeicherAntwort
    ),
    faqItem(
      `Ist ${leistungLabel} für ein Einfamilienhaus immer die richtige Größe?`,
      groessenAntwort
    ),
    faqItem(
      `Warum unterscheiden sich Angebote für ${leistungLabel} teilweise so stark?`,
      preisunterschiedeAntwort
    ),
    faqItem(
      `Sollte ich bei ${leistungLabel} direkt einen Speicher mitplanen?`,
      speicherAntwort
    ),
    ...extra.map((item) => faqItem(item.frage, item.antwort)),
  ]
}

export function createKwpKostenPreset({
  leistungLabel,
  summary,
  preisOhneSpeicher,
  preisMitSpeicher,
  kostenBlock = {},
  preisfaktoren = {},
  laufendeKosten = {},
  fehler,
  cta = {},
  faq,
}) {
  required(leistungLabel, 'leistungLabel')
  required(summary, 'summary')
  required(preisOhneSpeicher, 'preisOhneSpeicher')
  required(preisMitSpeicher, 'preisMitSpeicher')
  required(fehler, 'fehler')
  required(faq, 'faq')

  const preisOhneBlock = createPreisTextBlock({
    title: `2. Was kostet eine ${leistungLabel} Solaranlage ohne Speicher?`,
    paragraph1: preisOhneSpeicher.paragraph1,
    paragraph2: preisOhneSpeicher.paragraph2,
  })

  const preisOhneTabelle = createPreisTabelle({
    titel: preisOhneSpeicher.titel ?? 'Grobe Preisorientierung ohne Speicher',
    rows: preisOhneSpeicher.rows ?? [],
  })

  const preisMitBlock = createPreisTextBlock({
    title: `3. Was kostet eine ${leistungLabel} Anlage mit Speicher?`,
    paragraph1: preisMitSpeicher.paragraph1,
    paragraph2: preisMitSpeicher.paragraph2,
  })

  const preisMitTabelle = createPreisTabelle({
    titel: preisMitSpeicher.titel ?? 'Grobe Preisorientierung mit Speicher',
    rows: preisMitSpeicher.rows ?? [],
  })

  const kostenBloeckeBlock = createStandardKostenBloeckeBlock({
    title:
      kostenBlock.title ??
      `4. Welche Kosten stecken in einer ${leistungLabel} Anlage?`,
    anlageLabel: kostenBlock.anlageLabel ?? `${leistungLabel} Anlage`,
    extraListItems: kostenBlock.extraListItems ?? [],
    outro: kostenBlock.outro,
  })

  const kostenBloeckeTabelle = createStandardKostenbloeckeTabelle()

  const preisfaktorenBlock = createStandardPreisfaktorenBlock({
    title:
      preisfaktoren.title ??
      `5. Was beeinflusst den Preis bei ${leistungLabel} besonders?`,
    lead: preisfaktoren.lead,
    extraItems: preisfaktoren.extraItems ?? [],
    outro: preisfaktoren.outro,
  })

  const laufendeKostenBlock = createStandardLaufendeKostenBlock({
    title:
      laufendeKosten.title ?? '8. Welche laufenden Kosten sollte man mitdenken?',
    lead: laufendeKosten.lead,
    outro: laufendeKosten.outro,
  })

  const fehlerBlock = createStandardFehlerBlock({
    title: fehler.title ?? `9. Typische Fehler bei ${leistungLabel} Projekten`,
    lead: fehler.lead,
    errors: fehler.errors ?? [],
    outro: fehler.outro,
  })

  const ctaBlock = createStandardKostenCta({
    titel:
      cta.titel ?? `Lass uns deine ${leistungLabel} Anlage realistisch einordnen`,
    text:
      cta.text ??
      'Wir schauen uns Dach, Verbrauch, Speicher, Zählerschrank und spätere Erweiterungen gemeinsam an – ehrlich, praxisnah und ohne Verkaufsdruck.',
    buttonText: cta.buttonText,
    buttonLink: cta.buttonLink,
  })

  return {
    zusammenfassung: createStandardKostenSummary(summary),
    blocks: {
      preisOhneBlock,
      preisOhneTabelle,
      preisMitBlock,
      preisMitTabelle,
      kostenBloeckeBlock,
      kostenBloeckeTabelle,
      preisfaktorenBlock,
      laufendeKostenBlock,
      fehlerBlock,
      ctaBlock,
    },
    faq: createStandardKostenFaqPreset({
      leistungLabel,
      ...faq,
    }),
  }
}
