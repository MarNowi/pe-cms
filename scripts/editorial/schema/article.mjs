export function articleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = 'PEAK.Energy',
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    image: image ? [image] : undefined,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PEAK.Energy',
    },
  }
}
