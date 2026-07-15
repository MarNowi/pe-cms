import { article } from '../core/article.mjs'

export function blog(config) {
  return article({
    type: 'blog',
    status: 'entwurf',
    zusammenfassung: [],
    inhalt: [],
    faq: [],
    relatedArticles: [],
    ...config,
  })
}
