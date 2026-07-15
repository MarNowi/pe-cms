export function summary(...points) {
  return points.flat().filter(Boolean)
}

export function summaryText(...parts) {
  return parts.flat().filter(Boolean)
}
