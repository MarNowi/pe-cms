function normalizeContent(content) {
  if (content == null) return []
  return Array.isArray(content) ? content.filter(Boolean) : [content]
}

export function section({
  id,
  heading,
  content = [],
  image = null,
  blocks = [],
}) {
  if (typeof heading !== 'string' || !heading.trim()) {
    throw new TypeError('PEAK.Editorial: section.heading fehlt.')
  }

  return {
    id: id ?? null,
    heading: heading.trim(),
    content: normalizeContent(content),
    image,
    blocks: normalizeContent(blocks),
  }
}

export function flattenSections(sections, mapper) {
  if (!Array.isArray(sections)) {
    throw new TypeError('PEAK.Editorial: flattenSections() erwartet ein Array.')
  }

  const output = []

  for (const item of sections) {
    if (!item) continue

    if (typeof mapper === 'function') {
      const mapped = mapper(item)
      if (Array.isArray(mapped)) output.push(...mapped.filter(Boolean))
      else if (mapped) output.push(mapped)
      continue
    }

    output.push(...item.content, ...item.blocks)
  }

  return output
}
