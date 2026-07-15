import { article } from '../core/article.mjs'

export function ratgeber(config) {
  return article({
    type: 'ratgeber',
    status: 'entwurf',
    zusammenfassung: [],
    inhalt: [],
    faq: [],
    relatedArticles: [],
    ...config,
  })
}
