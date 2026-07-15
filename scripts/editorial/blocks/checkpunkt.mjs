export function checkpunktBlock(helpers, titel, ...children) {
  if (!helpers?.tippBlock) {
    throw new TypeError('PEAK.Editorial: helpers.tippBlock fehlt.')
  }

  return helpers.tippBlock(titel || 'Checkpunkt', ...children)
}
