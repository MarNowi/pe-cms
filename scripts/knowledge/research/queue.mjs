const TASK_TYPES = new Set([
  'missing-entity',
  'stale-entity',
  'fact-check',
  'source-gap',
  'contradiction',
])

const PRIORITIES = new Set(['low', 'normal', 'high', 'critical'])

export function researchTask({
  id,
  type,
  entityId = '',
  query,
  topicType = 'general',
  priority = 'normal',
  reasons = [],
  requestedAt = new Date(),
  metadata = {},
}) {
  if (!id || !query) {
    throw new TypeError('PEAK.Knowledge: researchTask.id und query sind Pflicht.')
  }
  if (!TASK_TYPES.has(type)) {
    throw new TypeError(`PEAK.Knowledge: Unbekannter Research-Typ "${type}".`)
  }
  if (!PRIORITIES.has(priority)) {
    throw new TypeError(`PEAK.Knowledge: Unbekannte Priorität "${priority}".`)
  }

  return Object.freeze({
    id: String(id),
    type,
    entityId: String(entityId),
    query: String(query).trim(),
    topicType: String(topicType).trim() || 'general',
    priority,
    reasons: [...new Set((reasons ?? []).map(String).filter(Boolean))],
    requestedAt: new Date(requestedAt).toISOString(),
    status: 'queued',
    metadata: metadata && typeof metadata === 'object' ? { ...metadata } : {},
  })
}

export function createResearchQueue() {
  const tasks = new Map()

  return {
    enqueue(task) {
      if (!task?.id || task.status !== 'queued') {
        throw new TypeError('PEAK.Knowledge: Ungültige Research-Aufgabe.')
      }
      if (tasks.has(task.id)) {
        throw new Error(`PEAK.Knowledge: Research-Aufgabe "${task.id}" existiert bereits.`)
      }
      tasks.set(task.id, task)
      return task
    },
    next() {
      const weights = { critical: 4, high: 3, normal: 2, low: 1 }
      return [...tasks.values()]
        .filter((task) => task.status === 'queued')
        .sort((a, b) => weights[b.priority] - weights[a.priority])[0] ?? null
    },
    list() {
      return [...tasks.values()]
    },
    size() {
      return tasks.size
    },
  }
}

export const researchTaskTypes = Object.freeze([...TASK_TYPES])
