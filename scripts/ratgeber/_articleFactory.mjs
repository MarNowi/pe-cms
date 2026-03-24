import { MongoClient, ObjectId } from 'mongodb'

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
    dbName = 'test',
    collectionName = 'ratgebers',
    log = true,
  } = options

  if (!mongoUrl) {
    throw new Error('DATABASE_URL fehlt')
  }

  assertRequired(article)

  const now = new Date()
  const client = new MongoClient(String(mongoUrl))

  const doc = {
    _id: article._id ?? new ObjectId(),
    titel: article.titel,
    slug: article.slug,
    kategorie: article.kategorie,
    teaser: article.teaser,
    lesezeit: article.lesezeit ?? 10,
    status: article.status ?? 'veroeffentlicht',
    publishedAt: article.publishedAt ?? now,
    createdAt: article.createdAt ?? now,
    updatedAt: now,

    titelbild: article.titelbild ?? null,
    relatedArticles: article.relatedArticles ?? [],

    zusammenfassung: article.zusammenfassung ?? [],
    inhalt: article.inhalt ?? [],
    faq: article.faq ?? [],
    seo: article.seo,
  }

  try {
    await client.connect()

    const db = client.db(dbName)
    const col = db.collection(collectionName)

    await col.deleteMany({ slug: doc.slug })
    await col.insertOne(doc)

    if (log) {
      console.log(`✅ Artikel erfolgreich angelegt: ${doc.slug}`)
    }

    return doc
  } finally {
    await client.close()
  }
}
