const RELATION_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function relation(from, type, to, metadata = {}) {
  for (const [field, value] of Object.entries({ from, type, to })) {
    if (typeof value !== 'string' || !RELATION_PATTERN.test(value)) {
      throw new TypeError(
        `PEAK.Knowledge: relation.${field} muss ein Kebab-Case-Bezeichner sein.`,
      )
    }
  }

  if (from === to) {
    throw new TypeError('PEAK.Knowledge: Eine Relation darf nicht auf sich selbst zeigen.')
  }

  return Object.freeze({
    id: `${from}:${type}:${to}`,
    from,
    type,
    to,
    metadata: metadata && typeof metadata === 'object' ? { ...metadata } : {},
  })
}

export function inverseRelation(value, inverseType = value?.type) {
  if (!value?.from || !value?.to) {
    throw new TypeError('PEAK.Knowledge: inverseRelation() erwartet eine Relation.')
  }

  return relation(value.to, inverseType, value.from, value.metadata)
}

export function isRelation(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      typeof value.from === 'string' &&
      typeof value.type === 'string' &&
      typeof value.to === 'string',
  )
}
