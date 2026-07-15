import {
  createResearchQueue,
  knowledgeProposal,
  researchTask,
} from './index.mjs'

const queue = createResearchQueue()

queue.enqueue(researchTask({
  id: 'check-handwerksrolle-sources',
  type: 'source-gap',
  entityId: 'handwerksrolle',
  query: 'Offizielle aktuelle Quellen zur Handwerksrolle und ihrer Rechtsgrundlage',
  topicType: 'law',
  priority: 'high',
}))

export const exampleProposal = knowledgeProposal({
  id: 'handwerksrolle-source-update',
  entityId: 'handwerksrolle',
  action: 'update',
  claim: 'Beispiel-Claim; vor Übernahme durch echte Recherche und Quellen zu ersetzen.',
  topicType: 'law',
  confidence: 0,
  evidence: [],
  changedFields: ['description', 'sources', 'verifiedAt'],
  status: 'draft',
})

export { queue }
