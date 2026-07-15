export function hero({
  image,
  alt = '',
  caption = '',
  eyebrow = '',
}) {
  if (!image) {
    throw new TypeError('PEAK.Editorial: hero.image fehlt.')
  }

  return {
    image,
    alt,
    caption,
    eyebrow,
  }
}
