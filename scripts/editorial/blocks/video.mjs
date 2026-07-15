export function videoBlock({
  url,
  titel = '',
  beschriftung = '',
}) {
  if (!url) throw new TypeError('PEAK.Editorial: videoBlock.url fehlt.')

  return {
    blockType: 'video',
    url,
    titel,
    beschriftung,
  }
}
