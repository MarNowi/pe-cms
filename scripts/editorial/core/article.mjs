const SUPPORTED_TYPES = new Set([
  'ratgeber',
  'blog',
  'lexikon',
  'landingpage',
  'news',
])

const SUPPORTED_STATUS = new Set([
  'entwurf',
  'veroeffentlicht',
])

function isPlainObject(value) {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value))
}

function requireString(value, fieldName) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new TypeError(`PEAK.Editorial: "${fieldName}" muss ein nicht leerer String sein.`)
  }

  return value.trim()
}

function optionalString(value, fieldName) {
  if (value == null) return undefined

  if (typeof value !== 'string') {
    throw new TypeError(`PEAK.Editorial: "${fieldName}" muss ein String sein.`)
  }

  const normalized = value.trim()
  return normalized.length > 0 ? normalized : undefined
}

function normalizeArray(value, fieldName) {
  if (value == null) return []

  if (!Array.isArray(value)) {
    throw new TypeError(`PEAK.Editorial: "${fieldName}" muss ein Array sein.`)
  }

  return value.filter((entry) => entry != null)
}

function normalizePositiveInteger(value, fieldName) {
  if (value == null) return undefined

  const parsed = Number(value)

  if (!Number.isInteger(parsed) || parsed < 1) {
    throw new TypeError(`PEAK.Editorial: "${fieldName}" muss eine positive Ganzzahl sein.`)
  }

  return parsed
}

function normalizeDate(value, fieldName) {
  if (value == null) return undefined

  const parsed = value instanceof Date ? value : new Date(value)

  if (Number.isNaN(parsed.getTime())) {
    throw new TypeError(`PEAK.Editorial: "${fieldName}" enthält ein ungültiges Datum.`)
  }

  return parsed
}

function normalizeSeo(value) {
  if (!isPlainObject(value)) {
    throw new TypeError('PEAK.Editorial: "seo" muss ein Objekt sein.')
  }

  return {
    metaTitle: requireString(value.metaTitle, 'seo.metaTitle'),
    metaDescription: requireString(value.metaDescription, 'seo.metaDescription'),
  }
}

function normalizeStatus(value = 'entwurf') {
  const status = requireString(value, 'status')

  if (!SUPPORTED_STATUS.has(status)) {
    throw new TypeError(
      `PEAK.Editorial: Unbekannter Status "${status}". Erlaubt: ${[
        ...SUPPORTED_STATUS,
      ].join(', ')}.`,
    )
  }

  return status
}

function normalizeType(value = 'ratgeber') {
  const type = requireString(value, 'type')

  if (!SUPPORTED_TYPES.has(type)) {
    throw new TypeError(
      `PEAK.Editorial: Unbekannter Dokumenttyp "${type}". Erlaubt: ${[
        ...SUPPORTED_TYPES,
      ].join(', ')}.`,
    )
  }

  return type
}

export function article(config) {
  if (!isPlainObject(config)) {
    throw new TypeError('PEAK.Editorial: article() erwartet ein Konfigurationsobjekt.')
  }

  const status = normalizeStatus(config.status)

  const document = {
    type: normalizeType(config.type),
    titel: requireString(config.titel, 'titel'),
    slug: requireString(config.slug, 'slug'),
    kategorie: requireString(config.kategorie, 'kategorie'),
    teaser: requireString(config.teaser, 'teaser'),
    status,
    lesezeit: normalizePositiveInteger(config.lesezeit, 'lesezeit'),
    titelbild: config.titelbild ?? null,
    zusammenfassung: normalizeArray(config.zusammenfassung, 'zusammenfassung'),
    inhalt: normalizeArray(config.inhalt, 'inhalt'),
    faq: normalizeArray(config.faq, 'faq'),
    relatedArticles: normalizeArray(config.relatedArticles, 'relatedArticles'),
    seo: normalizeSeo(config.seo),
  }

  const publishedAt = normalizeDate(config.publishedAt, 'publishedAt')
  if (publishedAt) document.publishedAt = publishedAt
  else if (status === 'veroeffentlicht') document.publishedAt = new Date()

  const createdAt = normalizeDate(config.createdAt, 'createdAt')
  if (createdAt) document.createdAt = createdAt

  const optionalFields = {
    subtitle: optionalString(config.subtitle, 'subtitle'),
    canonical: optionalString(config.canonical, 'canonical'),
    language: optionalString(config.language, 'language'),
    excerpt: optionalString(config.excerpt, 'excerpt'),
  }

  for (const [key, value] of Object.entries(optionalFields)) {
    if (value !== undefined) document[key] = value
  }

  if (isPlainObject(config.meta)) document.meta = { ...config.meta }

  return document
}

export function isEditorialArticle(value) {
  return Boolean(
    isPlainObject(value) &&
      typeof value.titel === 'string' &&
      typeof value.slug === 'string' &&
      typeof value.kategorie === 'string' &&
      typeof value.teaser === 'string' &&
      isPlainObject(value.seo) &&
      Array.isArray(value.inhalt),
  )
}

export const editorialArticleTypes = Object.freeze([...SUPPORTED_TYPES])
export const editorialArticleStatus = Object.freeze([...SUPPORTED_STATUS])
