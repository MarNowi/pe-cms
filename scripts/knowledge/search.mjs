function normalize(value) {
  return String(value ?? '').trim().toLocaleLowerCase('de-DE')
}

export function createKnowledgeSearch(registry) {
  if (!registry?.listEntities) {
    throw new TypeError('PEAK.Knowledge: createKnowledgeSearch() erwartet eine Registry.')
  }

  return function search(query, options = {}) {
    const needle = normalize(query)
    if (!needle) return []

    const { limit = 10, types = [] } = options
    const allowedTypes = new Set(types)

    return registry.listEntities()
      .filter((entry) => allowedTypes.size === 0 || allowedTypes.has(entry.type))
      .map((entry) => {
        const haystack = [
          entry.id,
          entry.name,
          entry.description,
          entry.shortDescription,
          ...(entry.aliases ?? []),
          ...(entry.tags ?? []),
        ].map(normalize)

        let score = 0
        if (normalize(entry.id) === needle) score += 100
        if (normalize(entry.name) === needle) score += 90
        if ((entry.aliases ?? []).some((value) => normalize(value) === needle)) score += 80
        for (const value of haystack) if (value.includes(needle)) score += 10

        return { entity: entry, score }
      })
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score || a.entity.name.localeCompare(b.entity.name, 'de'))
      .slice(0, limit)
  }
}
