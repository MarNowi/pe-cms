import { createPhotovoltaikInstallationKnowledge } from './examples/photovoltaik-installation.mjs'

const knowledge = createPhotovoltaikInstallationKnowledge()
const validation = knowledge.graph.validate()

if (!validation.valid) {
  throw new Error(`Knowledge Graph ungültig:\n${validation.errors.join('\n')}`)
}

const resolved = knowledge.resolver.resolve('PV-Anlage')
if (resolved?.id !== 'photovoltaikanlage') {
  throw new Error('Alias-Auflösung für PV-Anlage fehlgeschlagen.')
}

const related = knowledge.graph.related('photovoltaikanlage')
if (related.length < 2) {
  throw new Error('Verknüpfungen der Photovoltaikanlage fehlen.')
}

const results = knowledge.search('Handwerksrolle')
if (results[0]?.entity?.id !== 'handwerksrolle') {
  throw new Error('Knowledge-Suche liefert nicht das erwartete Ergebnis.')
}

console.log('✅ PEAK.Knowledge Smoke-Test erfolgreich')
console.log(`   Entities: ${knowledge.registry.listEntities().length}`)
console.log(`   Relations: ${knowledge.registry.listRelations().length}`)
console.log(`   Topics: ${knowledge.registry.listTopics().length}`)
