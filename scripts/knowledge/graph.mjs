export function createGraph(registry) {
  if (!registry?.listEntities || !registry?.listRelations) {
    throw new TypeError('PEAK.Knowledge: createGraph() erwartet eine Registry.')
  }

  function related(id, options = {}) {
    const { direction = 'both', type = null, depth = 1 } = options
    const visited = new Set([id])
    let frontier = [id]
    const results = []

    for (let level = 0; level < depth; level += 1) {
      const next = []

      for (const current of frontier) {
        for (const rel of registry.listRelations()) {
          if (type && rel.type !== type) continue

          const outgoing = direction !== 'incoming' && rel.from === current ? rel.to : null
          const incoming = direction !== 'outgoing' && rel.to === current ? rel.from : null
          const target = outgoing ?? incoming

          if (!target || visited.has(target)) continue
          visited.add(target)
          next.push(target)

          const entity = registry.getEntity(target)
          if (entity) results.push({ entity, relation: rel, depth: level + 1 })
        }
      }

      frontier = next
      if (frontier.length === 0) break
    }

    return results
  }

  function validate() {
    const errors = []
    for (const rel of registry.listRelations()) {
      if (!registry.hasEntity(rel.from)) errors.push(`Unbekannte Entity: ${rel.from}`)
      if (!registry.hasEntity(rel.to)) errors.push(`Unbekannte Entity: ${rel.to}`)
    }
    return { valid: errors.length === 0, errors }
  }

  return { related, validate }
}
