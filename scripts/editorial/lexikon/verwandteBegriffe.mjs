export function verwandteBegriffe(...terms) {
  return [...new Set(terms.flat().filter(Boolean).map(String))]
}
