import { MongoClient } from 'mongodb'
import { resolvePayloadDbName } from './_db.mjs'

const migrationId = 'ratgeber-mix-schedule-2026-09-08-27'
const mongoUrl = process.env.DATABASE_URL
if (!mongoUrl) throw new Error('DATABASE_URL fehlt – Veröffentlichungsplan wird nicht gesetzt')

// 07:00 Uhr Europe/Berlin; im September 2026 gilt CEST (UTC+2).
const schedule = [
  ['alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module', '2026-09-08T05:00:00.000Z'],
  ['pv-anlage-abregeln-strom-nutzen-hems-einspeisebegrenzung', '2026-09-09T05:00:00.000Z'],
  ['pv-ueberschussladen-funktioniert-nicht-ursachen', '2026-09-10T05:00:00.000Z'],
  ['stromspeicher-im-winter-oft-leer', '2026-09-11T05:00:00.000Z'],
  ['heizstab-waermepumpe-sinnvoll-stromverbrauch', '2026-09-12T05:00:00.000Z'],
  ['solarmodule-dach-voll-belegen-dachflaeche-freilassen', '2026-09-13T05:00:00.000Z'],
  ['alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie', '2026-09-14T05:00:00.000Z'],
  ['internetausfall-pv-speicher-wallbox-hems', '2026-09-15T05:00:00.000Z'],
  ['zwei-e-autos-zuhause-laden-wallboxen-hausanschluss', '2026-09-16T05:00:00.000Z'],
  ['speicherwirkungsgrad-verluste-geladen-nutzbar', '2026-09-17T05:00:00.000Z'],
  ['waermepumpe-taktet-staendig-starts-normal', '2026-09-18T05:00:00.000Z'],
  ['pv-anlage-liefert-weniger-als-berechnet-abweichung-normal', '2026-09-19T05:00:00.000Z'],
  ['alte-pv-anlage-erweitern-neue-anlage-daneben', '2026-09-20T05:00:00.000Z'],
  ['offene-schnittstellen-pv-speicher-hems-hersteller-app', '2026-09-21T05:00:00.000Z'],
  ['lastmanagement-wallbox-hausanschluss-ueberlastung', '2026-09-22T05:00:00.000Z'],
  ['batteriezellen-stromspeicher-zellspannung-temperatur-balancing', '2026-09-23T05:00:00.000Z'],
  ['warmwasser-waermepumpe-temperatur-legionellenschutz-kosten', '2026-09-24T05:00:00.000Z'],
  ['pv-anlage-bei-stromausfall-solarstrom-reicht-nicht', '2026-09-25T05:00:00.000Z'],
  ['pid-hotspots-mikrorisse-delamination-pv-module', '2026-09-26T05:00:00.000Z'],
  ['lokales-hems-hersteller-cloud-server-internet-ausfall', '2026-09-27T05:00:00.000Z'],
]

const client = new MongoClient(String(mongoUrl))
try {
  await client.connect()
  const db = client.db(resolvePayloadDbName(mongoUrl))
  const migrations = db.collection('_content_migrations')
  const ratgeber = db.collection('ratgebers')

  if (await migrations.findOne({ _id: migrationId })) {
    console.log(`ℹ️ Veröffentlichungsplan ${migrationId} wurde bereits gesetzt – überspringe.`)
    process.exit(0)
  }

  const slugs = schedule.map(([slug]) => slug)
  if (new Set(slugs).size !== slugs.length) throw new Error('Veröffentlichungsplan enthält doppelte Slugs')

  const existing = await ratgeber.find({ slug: { $in: slugs } }, { projection: { slug: 1 } }).toArray()
  const existingSlugs = new Set(existing.map((doc) => doc.slug))
  const missing = slugs.filter((slug) => !existingSlugs.has(slug))
  if (missing.length) throw new Error(`Veröffentlichungsplan abgebrochen – Artikel fehlen: ${missing.join(', ')}`)

  const now = new Date()
  const result = await ratgeber.bulkWrite(schedule.map(([slug, iso]) => ({
    updateOne: { filter: { slug }, update: { $set: { status: 'veroeffentlicht', publishedAt: new Date(iso), updatedAt: now } } },
  })), { ordered: true })

  if (result.matchedCount !== schedule.length) throw new Error(`Veröffentlichungsplan unvollständig: ${result.matchedCount}/${schedule.length}`)

  await migrations.updateOne(
    { _id: migrationId },
    { $set: { completedAt: new Date(), description: 'Ratgeber vom 08.–27.09.2026 täglich um 07:00 Uhr Europe/Berlin geplant', schedule: Object.fromEntries(schedule) } },
    { upsert: true },
  )
  console.log('✅ Veröffentlichungsplan 08.–27.09.2026 gespeichert.')
} finally {
  await client.close()
}
