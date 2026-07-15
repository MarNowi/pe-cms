export function seoDescription(value, maxLength = 160) {
  if (typeof value !== 'string' || !value.trim()) {
    throw new TypeError('PEAK.Editorial: seoDescription() erwartet Text.')
  }

  const normalized = value.replace(/\s+/g, ' ').trim()

  return normalized.length <= maxLength
    ? normalized
    : `${normalized.slice(0, maxLength - 1).trim()}…`
}
