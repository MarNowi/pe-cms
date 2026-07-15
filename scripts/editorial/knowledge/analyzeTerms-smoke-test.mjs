import { createEnergielexikonKnowledge } from '../../knowledge/energielexikon.mjs'
import { analyzeKnowledgeTerms } from './analyzeTerms.mjs'

const knowledge = createEnergielexikonKnowledge()
const report = analyzeKnowledgeTerms({
  text: 'Der Wechselrichter braucht Überspannungsschutz. Die Handwerksrolle fehlt im Lexikon.',
  terms: ['Wechselrichter', 'Überspannungsschutz', 'Handwerksrolle'],
  knowledge,
})

if (report.found.length !== 2) {
  throw new Error(`Erwartet wurden 2 vorhandene Begriffe, erhalten: ${report.found.length}`)
}

if (report.missing.length !== 1 || report.missing[0].term !== 'Handwerksrolle') {
  throw new Error('Die fehlende Handwerksrolle wurde nicht korrekt erkannt.')
}

if (report.found.some((item) => item.suggestedLinks !== 1)) {
  throw new Error('Die Linkbegrenzung wurde nicht korrekt angewendet.')
}

console.log('✅ PEAK.Editorial Knowledge-Analyse erfolgreich')
console.log(`   Found: ${report.found.length}`)
console.log(`   Missing: ${report.missing.length}`)
