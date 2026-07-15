import { knowledgeProposal } from '../proposals/proposal.mjs'
import { reviewProposal } from '../proposals/review.mjs'
import { extractEvidenceSnippets } from './evidence-extractor.mjs'
import { extractResearchText } from './text-extractor.mjs'

function unique(values) {
  return [...new Set(values.filter(Boolean))]
}

export function createResearchRunner({
  sourceRegistry,
  sourcePolicy,
  fetcher,
}) {
  if (!sourceRegistry?.get || !sourcePolicy?.evaluate || !fetcher?.fetchSource) {
    throw new TypeError('PEAK.Knowledge: Research Runner fehlen Abhängigkeiten.')
  }

  async function run({
    task,
    sourceIds,
    keywords = [],
    proposedClaim = '',
    confidence = 0,
    action = task?.type === 'missing-entity' ? 'create' : 'review',
  }) {
    if (!task?.id || task.status !== 'queued') {
      throw new TypeError('PEAK.Knowledge: Research Runner benötigt eine queued Task.')
    }

    if (!Array.isArray(sourceIds) || sourceIds.length === 0) {
      throw new TypeError('PEAK.Knowledge: Mindestens eine Source-ID ist erforderlich.')
    }

    const results = []

    for (const sourceId of unique(sourceIds)) {
      const source = sourceRegistry.get(sourceId)
      if (!source) {
        results.push({ sourceId, status: 'rejected', reasons: ['Quelle nicht registriert'] })
        continue
      }

      const decision = sourcePolicy.evaluate(source, { topicType: task.topicType })
      if (!decision.accepted) {
        results.push({ sourceId, status: 'rejected', reasons: decision.reasons })
        continue
      }

      try {
        const fetched = await fetcher.fetchSource(source.url)
        const text = extractResearchText(fetched)
        const snippets = extractEvidenceSnippets({ text, keywords })

        results.push({
          sourceId,
          status: 'fetched',
          role: decision.role,
          fetched: {
            finalUrl: fetched.finalUrl,
            contentType: fetched.contentType,
            byteLength: fetched.byteLength,
            retrievedAt: fetched.retrievedAt,
          },
          snippets,
          textLength: text.length,
        })
      } catch (error) {
        results.push({
          sourceId,
          status: 'failed',
          role: decision.role,
          error: error instanceof Error ? error.message : String(error),
        })
      }
    }

    const evidenceIds = results
      .filter((entry) => entry.status === 'fetched' && entry.role === 'evidence')
      .map((entry) => entry.sourceId)

    let proposal = null
    let review = null

    if (proposedClaim.trim() && evidenceIds.length > 0) {
      proposal = knowledgeProposal({
        id: `proposal-${task.id}`,
        entityId: task.entityId || task.id,
        action,
        claim: proposedClaim,
        topicType: task.topicType,
        confidence,
        evidence: evidenceIds,
        changedFields: action === 'create' ? ['description', 'sources'] : ['sources'],
        status: 'review-required',
        metadata: {
          taskId: task.id,
          researchResults: results.map(({ sourceId, status, role, snippets = [] }) => ({
            sourceId,
            status,
            role,
            snippetCount: snippets.length,
          })),
        },
      })

      review = reviewProposal({ proposal, sourceRegistry, sourcePolicy })
    }

    return Object.freeze({
      taskId: task.id,
      executedAt: new Date().toISOString(),
      results,
      proposal,
      review,
      summary: {
        requestedSources: unique(sourceIds).length,
        fetchedSources: results.filter((entry) => entry.status === 'fetched').length,
        failedSources: results.filter((entry) => entry.status === 'failed').length,
        rejectedSources: results.filter((entry) => entry.status === 'rejected').length,
        evidenceSources: evidenceIds.length,
      },
    })
  }

  return { run }
}
