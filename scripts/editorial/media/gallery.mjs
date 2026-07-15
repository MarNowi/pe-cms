export function gallery(items = []) {
  if (!Array.isArray(items)) {
    throw new TypeError('PEAK.Editorial: gallery() erwartet ein Array.')
  }

  return items
    .filter((item) => item?.bild)
    .map((item) => ({
      bild: item.bild,
      beschriftung: item.beschriftung ?? '',
    }))
}
