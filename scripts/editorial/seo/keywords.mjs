export function keywords(...values) {
  return [...new Set(values.flat().filter(Boolean).map((value) => String(value).trim()))]
}
