import {
  bold,
  ctaBlock,
  h,
  p,
  seo as buildSeo,
  summaryPoint,
  t,
  tabelleBlock,
  textBlock,
  ul,
} from './_helpers.mjs'

export function createArticleBase({
  titel,
  slug,
  kategorie = 'solaranlage',
  teaser,
  lesezeit = 10,
  zusammenfassung = [],
  inhalt = [],
  faq = [],
  metaTitle,
  metaDescription,
  titelbild = null,
  relatedArticles = [],
  status = 'veroeffentlicht',
}) {
  if (!titel) throw new Error('titel fehlt')
  if (!slug) throw new Error('slug fehlt')
  if (!kategorie) throw new Error('kategorie fehlt')
  if (!teaser) throw new Error('teaser fehlt')
  if (!metaTitle) throw new Error('metaTitle fehlt')
  if (!metaDescription) throw new Error('metaDescription fehlt')

  return {
    titel,
    slug,
    kategorie,
    teaser,
    lesezeit,
    status,
    titelbild,
    relatedArticles,
    zusammenfassung,
    inhalt,
    faq,
    seo: buildSeo(metaTitle, metaDescription),
  }
}

export function createStandardKostenSummary({
  ohneSpeicherText,
  mitSpeicherText,
  groessenText,
  planungsText,
}) {
  return [
    summaryPoint(
      bold(ohneSpeicherText.bold),
      t(ohneSpeicherText.rest)
    ),
    summaryPoint(
      bold(mitSpeicherText.bold),
      t(mitSpeicherText.rest)
    ),
    summaryPoint(
      bold(groessenText.bold),
      t(groessenText.rest)
    ),
    summaryPoint(
      bold(planungsText.bold),
      t(planungsText.rest)
    ),
  ]
}

export function createPreisTabelle({
  titel,
  header1 = 'Projekttyp',
  header2 = 'typischer Preisbereich',
  header3 = 'Bemerkung',
  rows = [],
}) {
  return tabelleBlock(titel, [
    {
      spalte1: header1,
      spalte2: header2,
      spalte3: header3,
    },
    ...rows,
  ])
}

export function createStandardKostenBloeckeBlock({
  title = 'Welche Kosten stecken in der Anlage?',
  anlageLabel = 'PV-Anlage',
  extraListItems = [],
  outro,
}) {
  return textBlock(
    h('h2', t(title)),
    p(
      t(
        `Die Gesamtkosten einer ${anlageLabel} entstehen nicht nur durch die Solarmodule. Gerade bei solchen Projekten spielen Montage, Anschluss, Planung und die technische Einbindung ins Gebäude eine große Rolle.`
      )
    ),
    ul(
      'Solarmodule',
      'Wechselrichter',
      'Unterkonstruktion',
      'DC- und AC-Verkabelung',
      'Montage auf dem Dach',
      'elektrischer Anschluss',
      'Planung, Anmeldung und Dokumentation',
      'optional: Stromspeicher',
      ...extraListItems
    ),
    p(
      t(
        outro ||
          'Wer Angebote vergleicht, sollte deshalb immer prüfen, welche Leistungen wirklich enthalten sind. Gleiche kWp-Zahl bedeutet noch lange nicht gleiches Projekt.'
      )
    )
  )
}

export function createStandardKostenbloeckeTabelle() {
  return tabelleBlock('Typische Kostenblöcke', [
    {
      spalte1: 'Baustein',
      spalte2: 'Rolle im Gesamtpreis',
      spalte3: 'Worauf achten?',
    },
    {
      spalte1: 'Module',
      spalte2: 'großer Materialblock',
      spalte3: 'Leistung, Qualität, Optik',
    },
    {
      spalte1: 'Wechselrichter',
      spalte2: 'zentral für die Systemarchitektur',
      spalte3: 'Passung zur Anlagengröße und Erweiterbarkeit',
    },
    {
      spalte1: 'Montage / Unterkonstruktion / Kabel',
      spalte2: 'hoher Praxisanteil',
      spalte3: 'stark abhängig von Dachform und Aufwand',
    },
    {
      spalte1: 'Anschluss / Anmeldung / Inbetriebnahme',
      spalte2: 'oft unterschätzt',
      spalte3: 'muss sauber enthalten sein',
    },
    {
      spalte1: 'Speicher',
      spalte2: 'großer Zusatzblock',
      spalte3: 'sollte sinnvoll statt maximal groß gewählt werden',
    },
  ])
}

export function createStandardPreisfaktorenBlock({
  title = 'Was beeinflusst den Preis besonders stark?',
  lead,
  extraItems = [],
  outro,
}) {
  return textBlock(
    h('h2', t(title)),
    p(
      t(
        lead ||
          'Selbst bei gleicher Leistung kann eine Anlage am Ende deutlich unterschiedlich teuer sein. Das liegt nicht automatisch an überhöhten Preisen, sondern oft an realen Unterschieden im Projekt.'
      )
    ),
    ul(
      'Dachform und Dachhöhe',
      'Ausrichtung und nutzbare Fläche',
      'Verschattung durch Gauben, Kamine oder Bäume',
      'Zustand und Aufbau des Zählerschranks',
      'Leitungswege vom Dach bis zum Anschluss',
      'gewählte Komponenten und Systemarchitektur',
      'Speichergröße und Integrationsaufwand',
      ...extraItems
    ),
    p(
      t(
        outro ||
          'Gerade der Zählerschrank ist oft ein klassischer Kostentreiber. Wird er im Angebot nicht sauber mitgedacht, taucht der Aufwand später als Zusatzposition auf.'
      )
    )
  )
}

export function createStandardLaufendeKostenBlock({
  title = 'Welche laufenden Kosten sollte man mitdenken?',
  lead,
  outro,
}) {
  return textBlock(
    h('h2', t(title)),
    p(
      t(
        lead ||
          'Die Investition selbst ist der größte Block, aber nicht die einzige Zahl. Zu einer ehrlichen Betrachtung gehören auch Betriebskosten, Versicherungen und Rücklagen.'
      )
    ),
    ul(
      'Versicherung oder Anpassung bestehender Policen',
      'gelegentliche Sicht- und Funktionskontrollen',
      'Rücklagen für Wechselrichter oder spätere Komponenten',
      'mögliche Service- oder Prüfkosten',
      'bei ungünstigen Dachsituationen eventuell Reinigung'
    ),
    p(
      t(
        outro ||
          'Diese Kosten sind meistens überschaubar, sollten aber in keiner Wirtschaftlichkeitsbetrachtung komplett fehlen.'
      )
    )
  )
}

export function createStandardFehlerBlock({
  title = 'Typische Fehler bei solchen Projekten',
  lead,
  errors = [],
  outro,
}) {
  return textBlock(
    h('h2', t(title)),
    p(
      t(
        lead ||
          'Viele Fehler entstehen nicht wegen der Leistungsklasse selbst, sondern weil bei der Planung an den falschen Stellen vereinfacht wird.'
      )
    ),
    ul(
      ...errors
    ),
    p(
      t(
        outro ||
          'Eine gute Anlage ist nicht die billigste, sondern die, die technisch sauber geplant ist und im Alltag langfristig funktioniert.'
      )
    )
  )
}

export function createStandardKostenCta({
  titel = 'Lass uns deine Anlage realistisch einordnen',
  text = 'Wir schauen uns Dach, Verbrauch, Speicher, Zählerschrank und spätere Erweiterungen gemeinsam an – ehrlich, praxisnah und ohne Verkaufsdruck.',
  buttonText = 'Jetzt Beratung anfragen',
  buttonLink = '/kontakt',
}) {
  return ctaBlock({
    titel,
    text,
    buttonText,
    buttonLink,
  })
}
