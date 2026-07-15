export function imageBrief({
  articleSlug,
  images = [],
  style = 'PEAK.Editorial',
}) {
  return {
    agent: 'image',
    articleSlug,
    images,
    style,
    status: 'pending',
  }
}
