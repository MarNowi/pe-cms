function normalize(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim()
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function extractEvidenceSnippets({
  text,
  keywords = [],
  contextChars = 220,
  maxSnippets = 8,
}) {
  if (typeof text !== 'string') {
    throw new TypeError('PEAK.Knowledge: evidence text muss ein String sein.')
  }

  const normalizedText = normalize(text)
  const terms = [...new Set(keywords.map(normalize).filter(Boolean))]
  const snippets = []

  for (const keyword of terms) {
    const pattern = new RegExp(escapeRegExp(keyword), 'giu')

    for (const match of normalizedText.matchAll(pattern)) {
      const start = Math.max(0, match.index - contextChars)
      const end = Math.min(
        normalizedText.length,
        match.index + match[0].length + contextChars,
      )

      snippets.push({
        keyword,
        text: normalizedText.slice(start, end).trim(),
        position: match.index,
      })

      if (snippets.length >= maxSnippets) return snippets
    }
  }

  return snippets
}
