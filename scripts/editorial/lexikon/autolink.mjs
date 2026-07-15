export function autolinkText(text, entries = [], options = {}) {
  if (typeof text !== 'string') {
    throw new TypeError('PEAK.Editorial: autolinkText() erwartet Text.')
  }

  const { maxLinksPerTerm = 1 } = options
  let output = text

  for (const entry of entries) {
    if (!entry?.begriff || !entry?.url) continue

    let count = 0
    const escaped = entry.begriff.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const pattern = new RegExp(`\\b${escaped}\\b`, 'i')

    while (count < maxLinksPerTerm && pattern.test(output)) {
      output = output.replace(pattern, `[${entry.begriff}](${entry.url})`)
      count += 1
    }
  }

  return output
}
