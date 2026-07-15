function normalize(value) {
  return String(value ?? '')
    .trim()
    .toLocaleLowerCase('de-DE')
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function countOccurrences(text, term) {
  const normalizedText = normalize(text)
  const normalizedTerm = normalize(term)

  if (!normalizedText || !normalizedTerm) return 0

  const pattern = new RegExp(`(^|[^\\p{L}\\p{N}])${escapeRegExp(normalizedTerm)}(?=$|[^\\p{L}\\p{N}])`, 'giu')
  return [...normalizedText.matchAll(pattern)].length
}

export function analyzeKnowledgeTerms({
  text,
  terms,
  knowledge,
  maxLinksPerTerm = 1,
}) {
  if (typeof text !== 'string') {
    throw new TypeError('PEAK.Editorial: analyzeKnowledgeTerms.text muss ein String sein.')
  }

  if (!Array.isArray(terms)) {
    throw new TypeError('PEAK.Editorial: analyzeKnowledgeTerms.terms muss ein Array sein.')
  }

  if (!knowledge?.resolver?.resolve) {
    throw new TypeError('PEAK.Editorial: Eine Knowledge-Instanz mit Resolver wird benötigt.')
  }

  const uniqueTerms = [...new Set(terms.map(String).map((term) => term.trim()).filter(Boolean))]
  const found = []
  const missing = []

  for (const term of uniqueTerms) {
    const occurrences = countOccurrences(text, term)
    if (occurrences === 0) continue

    const entity = knowledge.resolver.resolve(term)

    if (!entity) {
      missing.push({ term, occurrences })
      continue
    }

    found.push({
      term,
      occurrences,
      entity,
      suggestedLinks: Math.min(occurrences, maxLinksPerTerm),
    })
  }

  return {
    found,
    missing,
    summary: {
      scannedTerms: uniqueTerms.length,
      foundTerms: found.length,
      missingTerms: missing.length,
      totalOccurrences:
        found.reduce((sum, item) => sum + item.occurrences, 0) +
        missing.reduce((sum, item) => sum + item.occurrences, 0),
    },
  }
}
