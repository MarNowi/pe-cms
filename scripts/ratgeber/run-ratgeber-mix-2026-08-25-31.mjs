const articles = [
  './solarmodule-40-jahre-garantie-produkt-leistung.mjs',
  './waermepumpe-richtig-aufstellen-standort-schall.mjs',
  './stromspeicher-waermepumpe-nachts-versorgen.mjs',
  './wallbox-phasenumschaltung-pv-ueberschussladen.mjs',
  './pv-anlage-dachsanierung-demontage-repowering.mjs',
  './dynamischer-stromtarif-paragraf-14a-netzentgelt.mjs',
  './gewerbespeicher-richtig-auslegen-lastgang-kw-kwh.mjs',
]

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL fehlt')
}

console.log(`Aktualisiere gemischten Ratgeber-Cluster 25.–31.08.2026 mit ${articles.length} Artikeln …`)

for (const article of articles) {
  console.log(`\n→ ${article}`)
  await import(article)
}

console.log('\n✅ Ratgeber-Mix 25.–31.08.2026 vollständig eingespielt.')
