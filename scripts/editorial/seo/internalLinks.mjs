export function internalLinkMap(entries = []) {
  if (!Array.isArray(entries)) {
    throw new TypeError('PEAK.Editorial: internalLinkMap() erwartet ein Array.')
  }

  return entries
    .filter((entry) => entry?.term && entry?.url)
    .map((entry) => ({
      term: String(entry.term),
      url: String(entry.url),
      maxLinks: Number.isInteger(entry.maxLinks) ? entry.maxLinks : 1,
    }))
}
