import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

import { createCompleteEnergielexikonKnowledge } from './energielexikon-complete.mjs'
import { analyzeKnowledgeTerms } from '../editorial/knowledge/analyzeTerms.mjs'

const currentDir = dirname(fileURLToPath(import.meta.url))
const articlePath = resolve(
  currentDir,
  '../ratgeber/wer-darf-photovoltaikanlagen-installieren.mjs',
)

const candidateTerms = [
  'Photovoltaik',
  'Solaranlage',
  'Handwerksrolle',
  'Handwerksordnung',
  'Dachdeckerhandwerk',
  'Elektrotechnikerhandwerk',
  'Elektriker',
  'Unterkonstruktion',
  'Netzanschluss',
  'Netzbetreiber',
  'Installateurverzeichnis',
  'Potentialausgleich',
  'Überspannungsschutz',
  'Zählerschrank',
  'Wechselrichter',
  'Stromspeicher',
  'Inbetriebnahme',
  'Dokumentation',
  'Statik',
]

const source = await readFile(articlePath, 'utf8')
const knowledge = createCompleteEnergielexikonKnowledge()
const report = analyzeKnowledgeTerms({
  text: source,
  terms: candidateTerms,
  knowledge,
  maxLinksPerTerm: 1,
})

console.log('PEAK.Editorial Knowledge-Analyse: OLG-Ratgeber (vollständig)')
console.log('')
console.log(`Geprüfte Begriffe: ${report.summary.scannedTerms}`)
console.log(`Im Lexikon vorhanden: ${report.summary.foundTerms}`)
console.log(`Im Lexikon fehlend: ${report.summary.missingTerms}`)
console.log('')

for (const item of report.found) {
  console.log(
    `  ✓ ${item.term} (${item.occurrences}×) → ${item.entity.name} → ${item.entity.url}`,
  )
}

if (report.missing.length > 0) {
  console.log('')
  console.log('Fehlende Begriffe:')
  for (const item of report.missing) {
    console.log(`  ✗ ${item.term} (${item.occurrences}×)`)
  }
  process.exitCode = 1
} else {
  console.log('')
  console.log('✅ Alle im Artikel vorkommenden Kandidaten sind aufgelöst.')
}
