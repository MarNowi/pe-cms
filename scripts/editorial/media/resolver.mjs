import { MongoClient } from 'mongodb'

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export async function resolveMediaByFilename(filename, options = {}) {
  if (typeof filename !== 'string' || !filename.trim()) {
    throw new TypeError('PEAK.Editorial: filename fehlt.')
  }

  const {
    mongoUrl = process.env.DATABASE_URL,
    dbName = process.env.PAYLOAD_DB_NAME || 'test',
    collectionName = 'media',
    required = true,
  } = options

  if (!mongoUrl) throw new Error('DATABASE_URL fehlt.')

  const client = new MongoClient(String(mongoUrl))

  try {
    await client.connect()

    const collection = client.db(dbName).collection(collectionName)
    const exactFilename = filename.trim()

    const document = await collection.findOne({
      filename: {
        $regex: `^${escapeRegExp(exactFilename)}$`,
        $options: 'i',
      },
    })

    if (!document && required) {
      throw new Error(
        `PEAK.Editorial: Medium "${exactFilename}" wurde in "${dbName}.${collectionName}" nicht gefunden.`,
      )
    }

    return document?._id ?? null
  } finally {
    await client.close()
  }
}

export async function resolveMediaMap(definitions, options = {}) {
  if (!definitions || typeof definitions !== 'object') {
    throw new TypeError('PEAK.Editorial: resolveMediaMap() erwartet ein Objekt.')
  }

  const resolved = {}

  for (const [key, definition] of Object.entries(definitions)) {
    const config =
      typeof definition === 'string'
        ? { filename: definition, required: false }
        : definition

    resolved[key] = await resolveMediaByFilename(config.filename, {
      ...options,
      required: config.required ?? false,
    })
  }

  return resolved
}
