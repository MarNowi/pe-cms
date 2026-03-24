import { MongoClient } from 'mongodb'

const URL = process.env.DATABASE_URL

if (!URL) {
  throw new Error('DATABASE_URL fehlt')
}

const client = new MongoClient(String(URL))

function cleanZusammenfassung(value) {
  if (!Array.isArray(value)) return []
  return value.filter((item) => item && typeof item === 'object' && item.punkt != null)
}

function cleanFaq(value) {
  if (!Array.isArray(value)) return []
  return value.filter(
    (item) =>
      item &&
      typeof item === 'object' &&
      typeof item.frage === 'string' &&
      item.frage.trim().length > 0 &&
      typeof item.antwort === 'string' &&
      item.antwort.trim().length > 0
  )
}

function cleanZeilen(value) {
  if (!Array.isArray(value)) return []
  return value.filter((row) => row && typeof row === 'object' && row.spalte1)
}

function cleanInhalt(value) {
  if (!Array.isArray(value)) return []

  return value
    .filter((block) => block && typeof block === 'object' && typeof block.blockType === 'string')
    .map((block) => {
      if (block.blockType === 'tabelle') {
        return {
          ...block,
          zeilen: cleanZeilen(block.zeilen),
        }
      }

      return block
    })
}

async function run() {
  await client.connect()

  const db = client.db('test')
  const col = db.collection('ratgebers')

  const docs = await col
    .find(
      {},
      {
        projection: {
          slug: 1,
          titel: 1,
          zusammenfassung: 1,
          inhalt: 1,
          faq: 1,
        },
      }
    )
    .toArray()

  let fixed = 0

  for (const doc of docs) {
    const neueZusammenfassung = cleanZusammenfassung(doc.zusammenfassung)
    const neuerInhalt = cleanInhalt(doc.inhalt)
    const neueFaq = cleanFaq(doc.faq)

    const oldZusammenfassungLength = Array.isArray(doc.zusammenfassung) ? doc.zusammenfassung.length : 0
    const oldInhaltLength = Array.isArray(doc.inhalt) ? doc.inhalt.length : 0
    const oldFaqLength = Array.isArray(doc.faq) ? doc.faq.length : 0

    const changed =
      oldZusammenfassungLength !== neueZusammenfassung.length ||
      oldInhaltLength !== neuerInhalt.length ||
      oldFaqLength !== neueFaq.length

    if (!changed) continue

    await col.updateOne(
      { _id: doc._id },
      {
        $set: {
          zusammenfassung: neueZusammenfassung,
          inhalt: neuerInhalt,
          faq: neueFaq,
          updatedAt: new Date(),
        },
      }
    )

    fixed += 1
    console.log(`✅ bereinigt: ${doc.slug || doc.titel || doc._id}`)
  }

  console.log(`\nFertig. Bereinigte Dokumente: ${fixed}`)
  await client.close()
}

run().catch((err) => {
  console.error('❌ Fehler:', err)
  process.exit(1)
})
