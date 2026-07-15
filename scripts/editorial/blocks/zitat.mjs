export function zitatBlock({
  text,
  autor = '',
  quelle = '',
}) {
  if (!text) throw new TypeError('PEAK.Editorial: zitatBlock.text fehlt.')

  return {
    blockType: 'zitat',
    text,
    autor,
    quelle,
  }
}
