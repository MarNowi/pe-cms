const ACTIONS = new Set(['create', 'update', 'deprecate', 'review'])
const STATUSES = new Set(['draft', 'review-required', 'approved', 'rejected', 'applied'])

function requiredString(value, field) {
  if (typeof value !== 'string' || !value.trim()) {
    throw new TypeError(`PEAK.Knowledge: proposal.${field} fehlt.`)
  }
  return value.trim()
}

export function knowledgeProposal({
  id,
  entityId,
  action,
  claim,
  topicType = 'general',
  confidence = 0,
  evidence = [],
  changedFields = [],
  status = 'draft',
  createdAt = new Date(),
  createdBy = 'research-agent',
  notes = '',
  metadata = {},
}) {
  const normalizedAction = requiredString(action, 'action')
  const normalizedStatus = requiredString(status, 'status')

  if (!ACTIONS.has(normalizedAction)) {
    throw new TypeError(`PEAK.Knowledge: Unbekannte Proposal-Aktion "${normalizedAction}".`)
  }
  if (!STATUSES.has(normalizedStatus)) {
    throw new TypeError(`PEAK.Knowledge: Unbekannter Proposal-Status "${normalizedStatus}".`)
  }
  if (!Number.isFinite(confidence) || confidence < 0 || confidence > 1) {
    throw new TypeError('PEAK.Knowledge: proposal.confidence muss zwischen 0 und 1 liegen.')
  }

  return Object.freeze({
    id: requiredString(id, 'id'),
    entityId: requiredString(entityId, 'entityId'),
    action: normalizedAction,
    claim: requiredString(claim, 'claim'),
    topicType: String(topicType).trim() || 'general',
    confidence,
    evidence: Array.isArray(evidence) ? [...evidence] : [],
    changedFields: [...new Set((changedFields ?? []).map(String).filter(Boolean))],
    status: normalizedStatus,
    createdAt: new Date(createdAt).toISOString(),
    createdBy: String(createdBy).trim() || 'research-agent',
    notes: String(notes).trim(),
    metadata: metadata && typeof metadata === 'object' ? { ...metadata } : {},
  })
}

export const proposalActions = Object.freeze([...ACTIONS])
export const proposalStatuses = Object.freeze([...STATUSES])
