import { article } from '../core/article.mjs'

export function lexikon(config) {
  return article({
    type: 'lexikon',
    status: 'entwurf',
    zusammenfassung: [],
    inhalt: [],
    faq: [],
    relatedArticles: [],
    ...config,
  })
}
