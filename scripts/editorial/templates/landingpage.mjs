import { article } from '../core/article.mjs'

export function landingpage(config) {
  return article({
    type: 'landingpage',
    status: 'entwurf',
    zusammenfassung: [],
    inhalt: [],
    faq: [],
    relatedArticles: [],
    ...config,
  })
}
