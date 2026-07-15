export function bildBlock({
  bild,
  beschriftung = '',
  id,
}) {
  if (!bild) {
    throw new TypeError('PEAK.Editorial: bildBlock.bild fehlt.')
  }

  return {
    ...(id ? { id } : {}),
    blockType: 'bild',
    bild,
    beschriftung,
  }
}
