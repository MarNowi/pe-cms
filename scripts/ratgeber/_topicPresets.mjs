import { faqItem, h, p, t, textBlock } from './_helpers.mjs'
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
    title: laufendeKosten.title ?? '8. Welche laufenden Kosten sollte man mitdenken?',
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
