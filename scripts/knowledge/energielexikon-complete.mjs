import {
  createGraph,
  createKnowledgeSearch,
  createRegistry,
  createResolver,
  entity,
} from './index.mjs'
import { energielexikonSections } from './data/energielexikon/index.mjs'
import { olgLexikonErgaenzungen } from './data/energielexikon/olg-ergaenzungen.mjs'
import {
  createEnergielexikonEntities,
  flattenEnergielexikon,
} from './data/energielexikon-adapter.mjs'

export const completeEnergielexikonSections = [
  ...energielexikonSections,
  ...olgLexikonErgaenzungen,
]

export function flattenCompleteEnergielexikon() {
  return flattenEnergielexikon(completeEnergielexikonSections)
}

export function createCompleteEnergielexikonEntities() {
  return createEnergielexikonEntities(completeEnergielexikonSections).map(
    (value) => {
      if (value.id !== 'photovoltaik-pv') return value

      return entity({
        ...value,
        aliases: [...value.aliases, 'Solaranlage', 'PV-Anlage'],
      })
    },
  )
}

export function createCompleteEnergielexikonKnowledge() {
  const registry = createRegistry()
  const entities = createCompleteEnergielexikonEntities()

  for (const value of entities) {
    registry.registerEntity(value)
  }

  return {
    registry,
    graph: createGraph(registry),
    resolver: createResolver(registry),
    search: createKnowledgeSearch(registry),
  }
}
