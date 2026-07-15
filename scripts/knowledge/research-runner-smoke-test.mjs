import { knowledgeProposal } from './proposals/proposal.mjs'
import { createResearchQueue, researchTask } from './research/queue.mjs'
import { createHttpResearchFetcher } from './research/http-fetcher.mjs'
import { createResearchRunner } from './research/runner.mjs'
import { createSourcePolicy } from './sources/policy.mjs'
import { createSourceRegistry } from './sources/registry.mjs'
import { source } from './sources/source.mjs'

const pages = new Map([
  [
    'https://example-authority.test/handwerksrolle',
    '<html><body><article>Die Handwerksrolle ist ein Verzeichnis der Handwerkskammer. Zulassungspflichtige Handwerke werden dort geführt.</article></body></html>',
  ],
  [
    'https://example-court.test/entscheidung',
    '<html><body><main>Die Entscheidung behandelt die Handwerksrolle und die Ausübung zulassungspflichtiger Handwerke.</main></body></html>',
  ],
])

const mockFetch = async (url) => {
  const key = String(url)
  const body = pages.get(key)
  if (!body) return new Response('not found', { status: 404 })

  return new Response(body, {
    status: 200,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
}

const sourceRegistry = createSourceRegistry()
sourceRegistry.register(source({
  id: 'authority-handwerksrolle',
  title: 'Handwerksrolle',
  publisher: 'Beispielbehörde',
  url: 'https://example-authority.test/handwerksrolle',
  type: 'authority',
  tier: 'A',
}))
sourceRegistry.register(source({
  id: 'court-handwerksrolle',
  title: 'Gerichtsentscheidung',
  publisher: 'Beispielgericht',
  url: 'https://example-court.test/entscheidung',
  type: 'court',
  tier: 'A',
}))

const queue = createResearchQueue()
const task = queue.enqueue(researchTask({
  id: 'research-handwerksrolle',
  type: 'fact-check',
  entityId: 'handwerksrolle',
  query: 'Definition und rechtliche Funktion der Handwerksrolle',
  topicType: 'law',
  priority: 'high',
}))

const fetcher = createHttpResearchFetcher({
  allowedHosts: ['example-authority.test', 'example-court.test'],
  fetchImpl: mockFetch,
})

const runner = createResearchRunner({
  sourceRegistry,
  sourcePolicy: createSourcePolicy(),
  fetcher,
})

const packet = await runner.run({
  task,
  sourceIds: ['authority-handwerksrolle', 'court-handwerksrolle'],
  keywords: ['Handwerksrolle', 'zulassungspflichtige Handwerke'],
  proposedClaim:
    'Die Handwerksrolle ist das von der Handwerkskammer geführte Verzeichnis der Betriebe, die ein zulassungspflichtiges Handwerk selbstständig ausüben dürfen.',
  confidence: 0.9,
  action: 'review',
})

if (packet.summary.fetchedSources !== 2) {
  throw new Error('Research Runner hat nicht beide Quellen geladen.')
}
if (!packet.proposal || !packet.review?.readyForReview) {
  throw new Error('Proposal ist nicht zur menschlichen Prüfung bereit.')
}
if (!packet.review.humanReviewRequired) {
  throw new Error('Rechtliches Wissen muss menschlich geprüft werden.')
}
if (packet.results.some((entry) => entry.snippets.length === 0)) {
  throw new Error('Es wurden keine Evidenz-Snippets extrahiert.')
}

console.log('✅ PEAK.Knowledge Research Runner erfolgreich')
console.log(`   Fetched sources: ${packet.summary.fetchedSources}`)
console.log(`   Evidence sources: ${packet.summary.evidenceSources}`)
console.log(`   Ready for review: ${packet.review.readyForReview}`)
console.log(`   Human review required: ${packet.review.humanReviewRequired}`)
