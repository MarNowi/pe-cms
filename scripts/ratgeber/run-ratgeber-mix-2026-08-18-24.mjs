const articles = [
  './smart-meter-auslesen-verbrauchsdaten-trudi.mjs',
  './stromspeicher-kapazitaet-leistung-kw-kwh.mjs',
  './steuerbox-paragraf-14a-smart-meter-hems.mjs',
  './zaehlerschrank-pv-waermepumpe-smart-meter.mjs',
  './mieterstrom-gemeinschaftliche-gebaeudeversorgung-2026.mjs',
  './lastgang-15-minuten-werte-verstehen.mjs',
  './westnetz-smart-meter-steuerbox-2026.mjs',
]

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL fehlt')
}

console.log(`Aktualisiere gemischten Ratgeber-Cluster 18.–24.08.2026 mit ${articles.length} Artikeln …`)

for (const article of articles) {
  console.log(`\n→ ${article}`)
  await import(article)
}

console.log('\n✅ Ratgeber-Mix 18.–24.08.2026 vollständig eingespielt.')
