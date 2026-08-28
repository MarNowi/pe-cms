const articles = [
  './pv-verschattung-leistungsoptimierer-stringdesign.mjs',
  './waermepumpe-abtauung-vereisung-kondensat.mjs',
  './stromspeicher-aufstellort-keller-garage-brandschutz.mjs',
  './dienstwagen-zuhause-laden-wallbox-stromkosten-arbeitgeber.mjs',
  './hems-wetterprognose-strompreis-ladezustand.mjs',
  './pv-anlage-fehlerdiagnose-stringmessung-isolation-hotspots.mjs',
  './eeg-2027-dach-pv-unter-25-kw.mjs',
]

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL fehlt')
}

console.log(`Aktualisiere gemischten Ratgeber-Cluster 01.–07.09.2026 mit ${articles.length} Artikeln …`)

for (const article of articles) {
  console.log(`\n→ ${article}`)
  await import(article)
}

console.log('\n✅ Ratgeber-Mix 01.–07.09.2026 vollständig eingespielt.')
