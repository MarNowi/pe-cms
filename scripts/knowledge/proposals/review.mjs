export function reviewProposal({ proposal, sourceRegistry, sourcePolicy }) {
  if (!proposal?.evidence || !sourceRegistry?.get || !sourcePolicy?.requirementsFor) {
    throw new TypeError('PEAK.Knowledge: reviewProposal() fehlen Abhängigkeiten.')
  }

  const requirements = sourcePolicy.requirementsFor(proposal.topicType)
  const evidence = proposal.evidence
    .map((id) => sourceRegistry.get(typeof id === 'string' ? id : id?.sourceId))
    .filter(Boolean)

  const evidenceSources = evidence.filter(
    (entry) => sourcePolicy.evaluate(entry, { topicType: proposal.topicType }).role === 'evidence',
  )
  const publishers = new Set(evidenceSources.map((entry) => entry.publisher))
  const reasons = []

  if (publishers.size < requirements.minimumIndependentSources) {
    reasons.push(
      `Mindestens ${requirements.minimumIndependentSources} unabhängige Evidenzquelle(n) erforderlich.`,
    )
  }

  if (proposal.confidence < 0.75) {
    reasons.push('Konfidenz liegt unter 0,75.')
  }

  return {
    readyForReview: reasons.length === 0,
    humanReviewRequired: requirements.humanReviewRequired,
    evidenceCount: evidenceSources.length,
    independentPublishers: publishers.size,
    reasons,
  }
}
