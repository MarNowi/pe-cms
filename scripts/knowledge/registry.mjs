import { isEntity } from './entity.mjs'
import { isRelation } from './relation.mjs'

export function createRegistry() {
  const entities = new Map()
  const relations = new Map()
  const topics = new Map()

  return {
    registerEntity(value) {
      if (!isEntity(value)) throw new TypeError('PEAK.Knowledge: Ungültige Entity.')
      if (entities.has(value.id)) throw new Error(`PEAK.Knowledge: Entity "${value.id}" existiert bereits.`)
      entities.set(value.id, value)
      return value
    },
    registerRelation(value) {
      if (!isRelation(value)) throw new TypeError('PEAK.Knowledge: Ungültige Relation.')
      relations.set(value.id, value)
      return value
    },
    registerTopic(value) {
      if (!value?.slug) throw new TypeError('PEAK.Knowledge: Ungültiges Topic.')
      if (topics.has(value.slug)) throw new Error(`PEAK.Knowledge: Topic "${value.slug}" existiert bereits.`)
      topics.set(value.slug, value)
      return value
    },
    getEntity(id) { return entities.get(id) ?? null },
    getTopic(slug) { return topics.get(slug) ?? null },
    listEntities() { return [...entities.values()] },
    listRelations() { return [...relations.values()] },
    listTopics() { return [...topics.values()] },
    hasEntity(id) { return entities.has(id) },
    clear() { entities.clear(); relations.clear(); topics.clear() },
  }
}
