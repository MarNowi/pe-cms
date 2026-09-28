import { MongoClient, ObjectId } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'
import { isClusterOfKategorie, resolveCluster } from './_clusters.mjs'
import { transformArticleLinks } from './_linkTransform.mjs'
import { applyTextCorrections } from './_textCorrections.mjs'
import { applyMergeContent, mergedInto } from './_merges.mjs'

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

  // Redaktionelle Korrekturen aus _textCorrections.mjs (Floskeln, Du-Form, Tippfehler, metaTitle)
  const korrigiert = applyTextCorrections(article.slug, article).article

  // Zusammenlegung (_merges.mjs): Inhalte aus aufgelösten Artikeln im Ziel ergänzen
  const text = applyMergeContent(article.slug, korrigiert).article

  // Aufgelöste Artikel bleiben Entwurf – kein Ursprungs-Script darf sie wieder veröffentlichen
  const merge = mergedInto(article.slug)
  if (merge && article.status !== 'entwurf') {
    console.warn(`⚠️ ${article.slug} ist in ${merge.ziel.slug} aufgegangen – wird als Entwurf gespeichert`)
  }

  const now = new Date()
  const client = new MongoClient(String(mongoUrl))

  try {
    await client.connect()

    const db = client.db(dbName)
    const col = db.collection(collectionName)

    const setDoc = {
      titel: text.titel,
      slug: article.slug,
      kategorie: article.kategorie,
      teaser: text.teaser,
      lesezeit: article.lesezeit ?? 10,
      status: merge ? 'entwurf' : article.status ?? 'veroeffentlicht',
      updatedAt: now,
      zusammenfassung: text.zusammenfassung ?? [],
      // Linklisten entfernen, interne Links aus _internalLinks.mjs im Fließtext setzen
      inhalt: transformArticleLinks(article.slug, text.inhalt ?? []).inhalt,
      faq: text.faq ?? [],
      seo: text.seo,
    }

    // Cluster aus dem Artikel oder aus der zentralen Zuordnung in _clusters.mjs
    const cluster = resolveCluster(article.slug, article.cluster)
    if (cluster && isClusterOfKategorie(cluster, article.kategorie)) {
      setDoc.cluster = cluster
    } else if (cluster) {
      console.warn(`⚠️ Cluster ${cluster} passt nicht zur Kategorie ${article.kategorie} – Cluster von ${article.slug} nicht gesetzt`)
    } else if (setDoc.status === 'veroeffentlicht') {
      console.warn(`⚠️ ${article.slug} hat keinen Cluster – bitte in _clusters.mjs eintragen, sonst fehlt der Artikel in der Gruppierung der Themenseite`)
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
