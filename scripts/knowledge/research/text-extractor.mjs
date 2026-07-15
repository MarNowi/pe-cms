function decodeEntities(value) {
  return value
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
}

function stripHtml(value) {
  return decodeEntities(
    value
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
      .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, ' ')
      .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
}

export function extractResearchText({ body, contentType = '' }) {
  if (typeof body !== 'string') {
    throw new TypeError('PEAK.Knowledge: extractResearchText.body muss Text sein.')
  }

  let text = body

  if (/application\/json/i.test(contentType)) {
    try {
      text = JSON.stringify(JSON.parse(body), null, 2)
    } catch {
      text = body
    }
  } else if (/html|xhtml/i.test(contentType) || /<html|<body|<article/i.test(body)) {
    text = stripHtml(body)
  }

  return text
    .replace(/\r/g, '\n')
    .replace(/[\t\f\v]+/g, ' ')
    .replace(/ +/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}
