export function resolvePayloadDbName(mongoUrl = process.env.DATABASE_URL) {
  if (process.env.PAYLOAD_DB_NAME) {
    return process.env.PAYLOAD_DB_NAME
  }

  if (!mongoUrl) {
    throw new Error('DATABASE_URL fehlt')
  }

  try {
    const url = new URL(String(mongoUrl))
    const dbName = decodeURIComponent(url.pathname.replace(/^\//, '').split('/')[0] || '')

    if (dbName) {
      return dbName
    }
  } catch {
    // MongoClient liefert bei einer ungültigen URL anschließend die aussagekräftigere Fehlermeldung.
  }

  // MongoDB verwendet ohne expliziten Datenbanknamen standardmäßig "test".
  return 'test'
}
