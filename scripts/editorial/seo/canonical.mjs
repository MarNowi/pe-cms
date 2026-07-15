export function canonicalUrl(path, baseUrl = 'https://www.peak-energy.gmbh') {
  if (!path) throw new TypeError('PEAK.Editorial: canonicalUrl.path fehlt.')

  if (/^https?:\/\//i.test(path)) return path

  const normalizedBase = baseUrl.replace(/\/+$/, '')
  const normalizedPath = `/${String(path).replace(/^\/+/, '')}`

  return `${normalizedBase}${normalizedPath}`
}
