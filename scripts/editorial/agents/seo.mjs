export function seoBrief({
  primaryKeyword,
  secondaryKeywords = [],
  searchIntent = '',
  competitors = [],
}) {
  return {
    agent: 'seo',
    primaryKeyword,
    secondaryKeywords,
    searchIntent,
    competitors,
    status: 'pending',
  }
}
