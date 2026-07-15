import {
  createEnergielexikonKnowledge,
  flattenEnergielexikon,
} from './data/energielexikon-adapter.mjs'

const entries = flattenEnergielexikon()
const knowledge = createEnergielexikonKnowledge()

const wechselrichter = knowledge.resolver.resolve('Wechselrichter')
const hems = knowledge.resolver.resolve('HEMS')
const searchResults = knowledge.search('Überspannungsschutz')
const validation = knowledge.graph.validate()

if (entries.length !== knowledge.registry.listEntities().length) {
  throw new Error('Nicht alle Lexikon-Einträge wurden als Entities übernommen.')
}

if (!wechselrichter) {
  throw new Error('Wechselrichter konnte nicht aufgelöst werden.')
}

if (!hems) {
  throw new Error('HEMS-Alias konnte nicht aufgelöst werden.')
}

if (searchResults.length === 0) {
  throw new Error('Knowledge-Suche liefert keine Treffer.')
}

if (!validation.valid) {
  throw new Error(validation.errors.join('\n'))
}

console.log('✅ PEAK.Knowledge Energielexikon-Test erfolgreich')
console.log(`   Entries: ${entries.length}`)
console.log(`   Entities: ${knowledge.registry.listEntities().length}`)
console.log(`   Search hits: ${searchResults.length}`)
