export function faqSchema(entries = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries
      .filter((entry) => entry?.frage && entry?.antwort)
      .map((entry) => ({
        '@type': 'Question',
        name: entry.frage,
        acceptedAnswer: {
          '@type': 'Answer',
          text: entry.antwort,
        },
      })),
  }
}
