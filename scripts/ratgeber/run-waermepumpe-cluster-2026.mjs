const articles = [
  './waermepumpe-foerderung-2026.mjs',
  './welche-waermepumpe-fuer-mein-haus.mjs',
  './waermepumpe-und-photovoltaik.mjs',
  './heizlastberechnung-waermepumpe.mjs',
  './waermepumpe-richtig-einstellen.mjs',
  './hydraulischer-abgleich-waermepumpe.mjs',
  './pufferspeicher-waermepumpe.mjs',
  './waermepumpentarif-oder-dynamischer-stromtarif.mjs',
  './monoblock-oder-split-waermepumpe.mjs',
  './waermepumpe-lebensdauer-wartung.mjs',
]

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL fehlt')
}

console.log(`Aktualisiere Wärmepumpen-Cluster mit ${articles.length} Artikeln …`)

for (const article of articles) {
  console.log(`\n→ ${article}`)
  await import(article)
}

console.log('\n✅ Wärmepumpen-Cluster 2026 vollständig aktualisiert.')
