import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { articles } from './ratgeber-mix-2026-09-08-27-content.mjs'

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL fehlt')

console.log(`Aktualisiere Ratgeber-Mix 08.–27.09.2026 mit ${articles.length} Artikeln …`)

for (const article of articles) {
  await upsertRatgeberArticle(article)
}

console.log('✅ Ratgeber-Mix 08.–27.09.2026 vollständig eingespielt.')
