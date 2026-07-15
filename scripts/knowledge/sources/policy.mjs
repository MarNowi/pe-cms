const SENSITIVE_TOPICS = new Set([
  'law',
  'tax',
  'funding',
  'standard',
  'safety',
  'grid-rule',
])

export function createSourcePolicy({
  allowedTiers = ['A', 'B'],
  discoveryTiers = ['C'],
  minimumIndependentSources = 1,
  sensitiveMinimumSources = 2,
} = {}) {
  const allowed = new Set(allowedTiers)
  const discovery = new Set(discoveryTiers)

  function evaluate(source, context = {}) {
    if (!source?.tier) {
      return { accepted: false, role: 'rejected', reasons: ['Quelle ohne Einstufung'] }
    }

    if (allowed.has(source.tier)) {
      return { accepted: true, role: 'evidence', reasons: [] }
    }

    if (discovery.has(source.tier)) {
      return {
        accepted: true,
        role: 'discovery-only',
        reasons: ['Quelle darf Themen entdecken, aber keinen Claim allein belegen'],
      }
    }

    return { accepted: false, role: 'rejected', reasons: ['Quellenstufe nicht zugelassen'] }
  }

  function requirementsFor(topicType) {
    const sensitive = SENSITIVE_TOPICS.has(topicType)
    return {
      sensitive,
      minimumIndependentSources: sensitive
        ? sensitiveMinimumSources
        : minimumIndependentSources,
      humanReviewRequired: sensitive,
    }
  }

  return { evaluate, requirementsFor }
}

export const sensitiveKnowledgeTopics = Object.freeze([...SENSITIVE_TOPICS])
