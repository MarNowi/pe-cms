export function createSourceRegistry() {
  const sources = new Map()

  return {
    register(value) {
      if (!value?.id || !value?.url || !value?.tier) {
        throw new TypeError('PEAK.Knowledge: Ungültige Quelle.')
      }
      if (sources.has(value.id)) {
        throw new Error(`PEAK.Knowledge: Quelle "${value.id}" existiert bereits.`)
      }
      sources.set(value.id, value)
      return value
    },
    get(id) {
      return sources.get(id) ?? null
    },
    findByUrl(url) {
      return [...sources.values()].find((entry) => entry.url === url) ?? null
    },
    list({ tier = null, type = null } = {}) {
      return [...sources.values()].filter((entry) => {
        if (tier && entry.tier !== tier) return false
        if (type && entry.type !== type) return false
        return true
      })
    },
    has(id) {
      return sources.has(id)
    },
    size() {
      return sources.size
    },
  }
}
