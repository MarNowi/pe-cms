import { MongoClient, ObjectId } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'

function assertRequired(article) {
  const required = ['titel', 'slug', 'kategorie', 'teaser']
  for (const key of required) {
    if (!article[key]) {
      throw new Error(`Pflichtfeld fehlt: ${key}`)
    }
  }

  if (!article.seo?.metaTitle || !article.seo?.metaDescription) {
    throw new Error('SEO-Felder fehlen: seo.metaTitle / seo.metaDescription')
  }
}

export async function upsertRatgeberArticle(article, options = {}) {
  const {
    mongoUrl = process.env.DATABASE_URL,
    dbName = resolvePayloadDbName(mongoUrl),
    collectionName = 'ratgebers',
    log = true,
  } = options

  if (!mongoUrl) {
    throw new Error('DATABASE_URL fehlt')
  }

  assertRequired(article)

  const now = new Date()
  const client = new MongoClient(String(mongoUrl))

  try {
    await client.connect()

    const db = client.db(dbName)
    const col = db.collection(collectionName)

    const setDoc = {
      titel: article.titel,
      slug: article.slug,
      kategorie: article.kategorie,
      teaser: article.teaser,
      lesezeit: article.lesezeit ?? 10,
      status: article.status ?? 'veroeffentlicht',
      updatedAt: now,
      zusammenfassung: article.zusammenfassung ?? [],
      inhalt: article.inhalt ?? [],
      faq: article.faq ?? [],
      seo: article.seo,
    }

    if (article.publishedAt !== undefined) setDoc.publishedAt = article.publishedAt
    if (article.createdAt !== undefined) setDoc.createdAt = article.createdAt
    if (article.titelbild !== undefined) setDoc.titelbild = article.titelbild
    if (article.relatedArticles !== undefined) setDoc.relatedArticles = article.relatedArticles

    const setOnInsert = {
      _id: article._id ?? new ObjectId(),
      createdAt: article.createdAt ?? now,
      publishedAt: article.publishedAt ?? now,
      titelbild: article.titelbild ?? null,
      relatedArticles: article.relatedArticles ?? [],
    }

    for (const key of Object.keys(setDoc)) {
      delete setOnInsert[key]
    }

    await col.updateOne(
      { slug: article.slug },
      {
        $set: setDoc,
        $setOnInsert: setOnInsert,
      },
      { upsert: true },
    )

    const doc = await col.findOne({ slug: article.slug })

    if (log) {
      console.log(`✅ Artikel erfolgreich aktualisiert: ${article.slug}`)
    }

    return doc
  } finally {
    await client.close()
  }
}
