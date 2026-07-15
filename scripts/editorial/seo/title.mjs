export function seoTitle(title, brand = 'PEAK.Energy') {
  if (!title) throw new TypeError('PEAK.Editorial: seoTitle.title fehlt.')

  const suffix = brand ? ` | ${brand}` : ''
  const maxBaseLength = Math.max(20, 60 - suffix.length)
  const base =
    title.length > maxBaseLength
      ? `${title.slice(0, maxBaseLength - 1).trim()}…`
      : title

  return `${base}${suffix}`
}
