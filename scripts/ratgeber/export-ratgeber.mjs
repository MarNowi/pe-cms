// Nur lesender Export aller Ratgeber-Artikel – schreibt nichts in die Datenbank.
//
// Aufruf (z. B. im Coolify-Terminal des CMS-Containers):
//   node scripts/ratgeber/export-ratgeber.mjs            → TSV-Übersicht auf stdout
//   node scripts/ratgeber/export-ratgeber.mjs --json     → vollständiges JSON auf stdout
//   node scripts/ratgeber/export-ratgeber.mjs --json --out=/tmp/ratgeber.json
//
// Anders als die öffentliche API (/api/ratgeber) enthält der Export auch Entwürfe
// und Artikel mit publishedAt in der Zukunft.

import fs from 'node:fs/promises'
import { MongoClient, ObjectId } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'

const mongoUrl = process.env.DATABASE_URL

if (!mongoUrl) throw new Error('DATABASE_URL fehlt')

const args = process.argv.slice(2)
const asJson = args.includes('--json')
const outArg = args.find((arg) => arg.startsWith('--out='))
const outFile = outArg ? outArg.slice('--out='.length) : null

function toIso(value) {
  if (!value) return ''
  const date = value instanceof Date ? value : new Date(value)
  return Number.isNaN(date.getTime()) ? String(value) : date.toISOString()
}

function toObjectId(value) {
  if (!value) return null
  if (value instanceof ObjectId) return value
  if (typeof value === 'string' && ObjectId.isValid(value)) return new ObjectId(value)
  if (typeof value === 'object' && value.id) return toObjectId(value.id)
  return null
}

function collectLinks(node, links = []) {
  if (Array.isArray(node)) {
    for (const child of node) collectLinks(child, links)
    return links
  }

  if (!node || typeof node !== 'object') return links

  if (node.type === 'link' && node.fields?.url) links.push(node.fields.url)

  for (const value of Object.values(node)) {
    if (value && typeof value === 'object') collectLinks(value, links)
  }

  return links
}

function tsvCell(value) {
  return String(value ?? '').replace(/[\t\r\n]+/g, ' ').trim()
}

const client = new MongoClient(String(mongoUrl))

try {
  await client.connect()

  const db = client.db(resolvePayloadDbName(mongoUrl))
  const docs = await db
    .collection('ratgebers')
    .find({})
    .sort({ kategorie: 1, publishedAt: 1 })
    .toArray()

  const mediaIds = docs.map((doc) => toObjectId(doc.titelbild)).filter(Boolean)
  const media = mediaIds.length
    ? await db
        .collection('media')
        .find({ _id: { $in: mediaIds } }, { projection: { filename: 1, alt: 1 } })
        .toArray()
    : []
  const mediaById = new Map(media.map((item) => [String(item._id), item]))

  const rows = docs.map((doc) => {
    const bild = mediaById.get(String(toObjectId(doc.titelbild)))
    const links = collectLinks([doc.zusammenfassung, doc.inhalt])

    return {
      id: String(doc._id),
      slug: doc.slug,
      titel: doc.titel,
      kategorie: doc.kategorie,
      cluster: doc.cluster ?? '',
      status: doc.status,
      publishedAt: toIso(doc.publishedAt),
      updatedAt: toIso(doc.updatedAt),
      teaser: doc.teaser,
      metaTitle: doc.seo?.metaTitle ?? '',
      metaDescription: doc.seo?.metaDescription ?? '',
      titelbild: bild?.filename ?? '',
      titelbildAlt: bild?.alt ?? '',
      interneLinks: links.filter((url) => url.startsWith('/') || url.includes('peak-energy.gmbh')),
      relatedArticles: (doc.relatedArticles ?? []).map(String),
      ...(asJson
        ? {
            zusammenfassung: doc.zusammenfassung ?? [],
            inhalt: doc.inhalt ?? [],
            faq: doc.faq ?? [],
          }
        : {}),
    }
  })

  let output

  if (asJson) {
    output = JSON.stringify(rows, null, 2)
  } else {
    const columns = [
      'slug',
      'titel',
      'kategorie',
      'cluster',
      'status',
      'publishedAt',
      'titelbild',
      'titelbildAlt',
      'interneLinks',
    ]
    output = [
      columns.join('\t'),
      ...rows.map((row) =>
        columns
          .map((key) => tsvCell(Array.isArray(row[key]) ? row[key].join(' ') : row[key]))
          .join('\t'),
      ),
    ].join('\n')
  }

  if (outFile) {
    await fs.writeFile(outFile, output, 'utf8')
    console.error(`✅ ${rows.length} Ratgeber-Artikel exportiert nach ${outFile}`)
  } else {
    console.log(output)
    console.error(`✅ ${rows.length} Ratgeber-Artikel exportiert`)
  }
} finally {
  await client.close()
}
