const ENTITY_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

function normalizeStrings(values = []) {
  if (!Array.isArray(values)) {
    throw new TypeError('PEAK.Knowledge: Erwartet wurde ein Array.')
  }

  return [...new Set(values.map(String).map((value) => value.trim()).filter(Boolean))]
}

export function entity({
  id,
  name,
  type = 'begriff',
  description,
  shortDescription = '',
  aliases = [],
  tags = [],
  url = '',
  sources = [],
  metadata = {},
}) {
  if (typeof id !== 'string' || !ENTITY_ID_PATTERN.test(id)) {
    throw new TypeError(
      'PEAK.Knowledge: entity.id muss ein stabiler Kebab-Case-Bezeichner sein.',
    )
  }

  if (typeof name !== 'string' || !name.trim()) {
    throw new TypeError('PEAK.Knowledge: entity.name fehlt.')
  }

  if (typeof description !== 'string' || !description.trim()) {
    throw new TypeError('PEAK.Knowledge: entity.description fehlt.')
  }

  return Object.freeze({
    id,
    name: name.trim(),
    type: String(type).trim() || 'begriff',
    description: description.trim(),
    shortDescription: String(shortDescription).trim(),
    aliases: normalizeStrings(aliases),
    tags: normalizeStrings(tags),
    url: String(url).trim(),
    sources: Array.isArray(sources) ? sources.filter(Boolean) : [],
    metadata: metadata && typeof metadata === 'object' ? { ...metadata } : {},
  })
}

export function isEntity(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      ENTITY_ID_PATTERN.test(value.id ?? '') &&
      typeof value.name === 'string' &&
      typeof value.description === 'string',
  )
}
