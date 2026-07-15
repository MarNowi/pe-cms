import { article } from '../core/article.mjs'

export function news(config) {
  return article({
    type: 'news',
    status: 'entwurf',
    zusammenfassung: [],
    inhalt: [],
    faq: [],
    relatedArticles: [],
    ...config,
  })
}
