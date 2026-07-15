export function googleBusinessPost({
  text,
  buttonText = 'Mehr erfahren',
  buttonUrl,
}) {
  if (!text) throw new TypeError('PEAK.Editorial: googleBusinessPost.text fehlt.')

  return {
    text: text.length > 1500 ? `${text.slice(0, 1499)}…` : text,
    buttonText,
    buttonUrl,
  }
}
