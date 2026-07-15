export function begriff({
  name,
  definition,
  url,
  aliases = [],
  related = [],
}) {
  if (!name || !definition) {
    throw new TypeError('PEAK.Editorial: begriff.name und begriff.definition sind Pflicht.')
  }

  return {
    begriff: name,
    definition,
    url,
    aliases,
    related,
  }
}
