import {
  createResearchQueue,
  createSourcePolicy,
  createSourceRegistry,
  knowledgeProposal,
  researchTask,
  reviewProposal,
  source,
} from './research/index.mjs'

const registry = createSourceRegistry()
const policy = createSourcePolicy()
const queue = createResearchQueue()

registry.register(source({
  id: 'official-court-source',
  title: 'Gerichtsentscheidung',
  publisher: 'OLG Koblenz',
  url: 'https://example.org/court',
  type: 'court',
  tier: 'A',
}))

registry.register(source({
  id: 'official-law-source',
  title: 'Gesetzestext',
  publisher: 'Bundesministerium der Justiz',
  url: 'https://example.org/law',
  type: 'law',
  tier: 'A',
}))

queue.enqueue(researchTask({
  id: 'research-handwerksrolle',
  type: 'source-gap',
  entityId: 'handwerksrolle',
  query: 'Aktuelle offizielle Definition und Rechtsgrundlage der Handwerksrolle',
  topicType: 'law',
  priority: 'high',
}))

const proposal = knowledgeProposal({
  id: 'proposal-handwerksrolle-1',
  entityId: 'handwerksrolle',
  action: 'update',
  claim: 'Die Handwerksrolle wird von der zuständigen Handwerkskammer geführt.',
  topicType: 'law',
  confidence: 0.95,
  evidence: ['official-court-source', 'official-law-source'],
  changedFields: ['description', 'sources', 'verifiedAt'],
  status: 'review-required',
})

const review = reviewProposal({ proposal, sourceRegistry: registry, sourcePolicy: policy })

if (registry.size() !== 2) throw new Error('Quellenregister fehlerhaft.')
if (queue.size() !== 1 || queue.next()?.priority !== 'high') throw new Error('Research Queue fehlerhaft.')
if (!review.readyForReview) throw new Error(review.reasons.join('\n'))
if (!review.humanReviewRequired) throw new Error('Rechtliche Claims müssen menschlich geprüft werden.')

console.log('✅ PEAK.Knowledge Research Foundation erfolgreich')
console.log(`   Sources: ${registry.size()}`)
console.log(`   Queue: ${queue.size()}`)
console.log(`   Ready for review: ${review.readyForReview}`)
console.log(`   Human review required: ${review.humanReviewRequired}`)
