export function topic({ slug, title, description = '', entities = [], tags = [], metadata = {} }) {
  if (typeof slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new TypeError('PEAK.Knowledge: topic.slug muss Kebab-Case sein.')
  }
  if (typeof title !== 'string' || !title.trim()) {
    throw new TypeError('PEAK.Knowledge: topic.title fehlt.')
  }

  return Object.freeze({
    slug,
    title: title.trim(),
    description: String(description).trim(),
    entities: [...new Set(entities.map(String).map((v) => v.trim()).filter(Boolean))],
    tags: [...new Set(tags.map(String).map((v) => v.trim()).filter(Boolean))],
    metadata: metadata && typeof metadata === 'object' ? { ...metadata } : {},
  })
}
