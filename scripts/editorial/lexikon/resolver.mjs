export function resolveLexikonEntry(term, entries = []) {
  if (!term) return null

  const normalized = String(term).trim().toLowerCase()

  return (
    entries.find((entry) => {
      const candidates = [
        entry?.begriff,
        ...(Array.isArray(entry?.aliases) ? entry.aliases : []),
      ]
        .filter(Boolean)
        .map((value) => String(value).trim().toLowerCase())

      return candidates.includes(normalized)
    }) ?? null
  )
}
