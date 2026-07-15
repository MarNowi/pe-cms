export function faq(helpers, entries = []) {
  if (!helpers?.faqItem) {
    throw new TypeError('PEAK.Editorial: helpers.faqItem fehlt.')
  }

  return entries
    .filter((entry) => entry?.frage && entry?.antwort)
    .map((entry) => helpers.faqItem(entry.frage, entry.antwort))
}
