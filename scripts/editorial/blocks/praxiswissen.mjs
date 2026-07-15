export function praxiswissenBlock(helpers, titel, ...children) {
  if (!helpers?.hinweisBlock) {
    throw new TypeError('PEAK.Editorial: helpers.hinweisBlock fehlt.')
  }

  return helpers.hinweisBlock(titel || 'Praxiswissen', ...children)
}
