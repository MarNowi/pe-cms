function normalize(value) {
  return String(value ?? '').trim().toLocaleLowerCase('de-DE')
}

export function createResolver(registry) {
  if (!registry?.listEntities) {
    throw new TypeError('PEAK.Knowledge: createResolver() erwartet eine Registry.')
  }

  function resolve(value) {
    const needle = normalize(value)
    if (!needle) return null

    return registry.listEntities().find((entry) => {
      const candidates = [entry.id, entry.name, ...(entry.aliases ?? [])]
      return candidates.some((candidate) => normalize(candidate) === needle)
    }) ?? null
  }

  function resolveMany(values = []) {
    return values.map(resolve).filter(Boolean)
  }

  function missing(values = []) {
    return values.filter((value) => !resolve(value))
  }

  return { resolve, resolveMany, missing }
}
