export function compact(value) {
  if (Array.isArray(value)) return value.filter(Boolean)
  if (!value || typeof value !== 'object') return value

  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined && entry !== null),
  )
}

export function slugify(value) {
  if (typeof value !== 'string') {
    throw new TypeError('PEAK.Editorial: slugify() erwartet einen String.')
  }

  return value
    .toLowerCase()
    .trim()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function assertNonEmptyArray(value, fieldName) {
  if (!Array.isArray(value) || value.length === 0) {
    throw new TypeError(`PEAK.Editorial: "${fieldName}" muss mindestens einen Eintrag enthalten.`)
  }

  return value
}
