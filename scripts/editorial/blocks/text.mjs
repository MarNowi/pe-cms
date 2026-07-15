export function textBlockAdapter(helpers, ...children) {
  if (!helpers?.textBlock) {
    throw new TypeError('PEAK.Editorial: helpers.textBlock fehlt.')
  }

  return helpers.textBlock(...children)
}

export function paragraphAdapter(helpers, ...children) {
  if (!helpers?.p) throw new TypeError('PEAK.Editorial: helpers.p fehlt.')
  return helpers.p(...children)
}

export function headingAdapter(helpers, level, ...children) {
  if (!helpers?.h) throw new TypeError('PEAK.Editorial: helpers.h fehlt.')
  return helpers.h(level, ...children)
}
