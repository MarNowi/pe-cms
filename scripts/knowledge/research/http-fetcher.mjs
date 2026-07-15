const DEFAULT_TIMEOUT_MS = 15000
const DEFAULT_MAX_BYTES = 1_500_000

function normalizeAllowedHosts(values = []) {
  return new Set(
    values
      .map((value) => String(value).trim().toLowerCase())
      .filter(Boolean),
  )
}

function assertAllowedUrl(url, allowedHosts) {
  const parsed = new URL(url)

  if (parsed.protocol !== 'https:') {
    throw new Error('PEAK.Knowledge: Research-Quellen müssen HTTPS verwenden.')
  }

  if (allowedHosts.size > 0 && !allowedHosts.has(parsed.hostname.toLowerCase())) {
    throw new Error(
      `PEAK.Knowledge: Host "${parsed.hostname}" ist nicht für Research freigegeben.`,
    )
  }

  return parsed
}

export function createHttpResearchFetcher({
  allowedHosts = [],
  timeoutMs = DEFAULT_TIMEOUT_MS,
  maxBytes = DEFAULT_MAX_BYTES,
  userAgent = 'PEAK.Knowledge Research/0.1 (+https://www.peak-energy.gmbh)',
  fetchImpl = globalThis.fetch,
} = {}) {
  if (typeof fetchImpl !== 'function') {
    throw new TypeError('PEAK.Knowledge: Keine fetch()-Implementierung verfügbar.')
  }

  const allowed = normalizeAllowedHosts(allowedHosts)

  async function fetchSource(url) {
    const parsed = assertAllowedUrl(url, allowed)
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), timeoutMs)

    try {
      const response = await fetchImpl(parsed, {
        redirect: 'follow',
        signal: controller.signal,
        headers: {
          accept: 'text/html,application/xhtml+xml,text/plain,application/json;q=0.9,*/*;q=0.1',
          'user-agent': userAgent,
        },
      })

      if (!response.ok) {
        throw new Error(
          `PEAK.Knowledge: Quelle antwortete mit HTTP ${response.status}.`,
        )
      }

      const contentType = response.headers.get('content-type') ?? ''
      const contentLength = Number(response.headers.get('content-length') ?? 0)

      if (contentLength > maxBytes) {
        throw new Error(
          `PEAK.Knowledge: Quelle ist mit ${contentLength} Byte zu groß.`,
        )
      }

      const body = await response.text()
      const byteLength = Buffer.byteLength(body, 'utf8')

      if (byteLength > maxBytes) {
        throw new Error(
          `PEAK.Knowledge: Geladener Inhalt ist mit ${byteLength} Byte zu groß.`,
        )
      }

      return Object.freeze({
        requestedUrl: parsed.toString(),
        finalUrl: response.url || parsed.toString(),
        status: response.status,
        contentType,
        body,
        byteLength,
        retrievedAt: new Date().toISOString(),
      })
    } finally {
      clearTimeout(timer)
    }
  }

  return { fetchSource }
}
