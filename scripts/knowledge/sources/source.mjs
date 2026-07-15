const SOURCE_TYPES = new Set([
  'law',
  'court',
  'authority',
  'standard',
  'grid-operator',
  'manufacturer',
  'research',
  'association',
  'consumer',
  'trade-media',
  'company',
  'community',
])

const SOURCE_TIERS = new Set(['A', 'B', 'C'])

function requiredString(value, field) {
  if (typeof value !== 'string' || !value.trim()) {
    throw new TypeError(`PEAK.Knowledge: source.${field} fehlt.`)
  }
  return value.trim()
}

function optionalDate(value, field) {
  if (value == null) return null
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) {
    throw new TypeError(`PEAK.Knowledge: source.${field} ist ungültig.`)
  }
  return date.toISOString()
}

export function source({
  id,
  title,
  publisher,
  url,
  type,
  tier,
  retrievedAt = new Date(),
  publishedAt = null,
  validFrom = null,
  validUntil = null,
  jurisdiction = '',
  language = 'de',
  metadata = {},
}) {
  const normalizedType = requiredString(type, 'type')
  const normalizedTier = requiredString(tier, 'tier').toUpperCase()

  if (!SOURCE_TYPES.has(normalizedType)) {
    throw new TypeError(`PEAK.Knowledge: Unbekannter Quellentyp "${normalizedType}".`)
  }
  if (!SOURCE_TIERS.has(normalizedTier)) {
    throw new TypeError(`PEAK.Knowledge: Quellenstufe muss A, B oder C sein.`)
  }

  const normalizedUrl = requiredString(url, 'url')
  try {
    new URL(normalizedUrl)
  } catch {
    throw new TypeError('PEAK.Knowledge: source.url muss eine absolute URL sein.')
  }

  return Object.freeze({
    id: requiredString(id, 'id'),
    title: requiredString(title, 'title'),
    publisher: requiredString(publisher, 'publisher'),
    url: normalizedUrl,
    type: normalizedType,
    tier: normalizedTier,
    retrievedAt: optionalDate(retrievedAt, 'retrievedAt'),
    publishedAt: optionalDate(publishedAt, 'publishedAt'),
    validFrom: optionalDate(validFrom, 'validFrom'),
    validUntil: optionalDate(validUntil, 'validUntil'),
    jurisdiction: String(jurisdiction).trim(),
    language: String(language).trim() || 'de',
    metadata: metadata && typeof metadata === 'object' ? { ...metadata } : {},
  })
}

export const sourceTypes = Object.freeze([...SOURCE_TYPES])
export const sourceTiers = Object.freeze([...SOURCE_TIERS])
