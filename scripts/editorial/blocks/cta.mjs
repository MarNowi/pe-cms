export function ctaBlockAdapter(helpers, config) {
  if (!helpers?.ctaBlock) {
    throw new TypeError('PEAK.Editorial: helpers.ctaBlock fehlt.')
  }

  return helpers.ctaBlock(config)
}
