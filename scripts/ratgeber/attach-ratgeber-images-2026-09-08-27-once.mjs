import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { MongoClient, ObjectId } from 'mongodb'
import sharp from 'sharp'
import { resolvePayloadDbName } from './_db.mjs'

const migrationId = 'ratgeber-images-2026-09-08-27'
const mongoUrl = process.env.DATABASE_URL

if (!mongoUrl) throw new Error('DATABASE_URL fehlt – Ratgeberbilder werden nicht zugeordnet')

const dirname = path.dirname(fileURLToPath(import.meta.url))
const assetDir = path.join(dirname, 'media', '2026-09-08-27')
const mediaDir = process.env.PAYLOAD_MEDIA_DIR || '/data/media'

const images = [
  ['alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module', 'Alten PV-Wechselrichter durch modernes Gerät ersetzen'],
  ['pv-anlage-abregeln-strom-nutzen-hems-einspeisebegrenzung', 'HEMS verteilt Solarstrom auf Speicher, Wallbox und Wärmepumpe'],
  ['pv-ueberschussladen-funktioniert-nicht-ursachen', 'Fehlersuche beim PV-Überschussladen an der Wallbox'],
  ['stromspeicher-im-winter-oft-leer', 'Stromspeicher und Photovoltaikanlage an einem Wintertag'],
  ['heizstab-waermepumpe-sinnvoll-stromverbrauch', 'Heizstab und Hydraulik einer Wärmepumpenanlage prüfen'],
  ['solarmodule-dach-voll-belegen-dachflaeche-freilassen', 'Sinnvoll voll belegtes Solardach eines Einfamilienhauses'],
  ['alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie', 'Fachgerechte Kennlinienmessung an älteren PV-Modulen'],
  ['internetausfall-pv-speicher-wallbox-hems', 'Lokales Energiesystem arbeitet bei Internetausfall weiter'],
  ['zwei-e-autos-zuhause-laden-wallboxen-hausanschluss', 'Zwei Elektroautos laden an zwei koordinierten Wallboxen'],
  ['speicherwirkungsgrad-verluste-geladen-nutzbar', 'Energiefluss und Umwandlungsverluste eines Stromspeichers'],
  ['waermepumpe-taktet-staendig-starts-normal', 'Verdichterstarts einer Wärmepumpe fachlich auswerten'],
  ['pv-anlage-liefert-weniger-als-berechnet-abweichung-normal', 'Ertrag einer Photovoltaikanlage mit Prognose vergleichen'],
  ['alte-pv-anlage-erweitern-neue-anlage-daneben', 'Alte und neue Solarmodule gemeinsam auf einem Dach'],
  ['offene-schnittstellen-pv-speicher-hems-hersteller-app', 'Offene Schnittstellen verbinden Geräte im Energiesystem'],
  ['lastmanagement-wallbox-hausanschluss-ueberlastung', 'Lastmanagement verteilt Leistung auf zwei Wallboxen'],
  ['batteriezellen-stromspeicher-zellspannung-temperatur-balancing', 'Zellspannungen und Balancing in einem Batteriespeicher'],
  ['warmwasser-waermepumpe-temperatur-legionellenschutz-kosten', 'Warmwassertemperatur an einer Wärmepumpe einstellen'],
  ['pv-anlage-bei-stromausfall-solarstrom-reicht-nicht', 'PV-Anlage mit Batterie und Ersatzstrom bei Netzausfall'],
  ['pid-hotspots-mikrorisse-delamination-pv-module', 'Hotspot, Mikrorisse und Alterung an einem PV-Modul'],
  ['lokales-hems-hersteller-cloud-server-internet-ausfall', 'Lokales HEMS arbeitet unabhängig von der Hersteller-Cloud'],
]

const client = new MongoClient(String(mongoUrl))

try {
  await client.connect()
  const db = client.db(resolvePayloadDbName(mongoUrl))
  const migrations = db.collection('_content_migrations')

  if (await migrations.findOne({ _id: migrationId })) {
    console.log(`ℹ️ Bildmigration ${migrationId} wurde bereits ausgeführt – überspringe.`)
    process.exit(0)
  }

  await fs.mkdir(mediaDir, { recursive: true })

  const media = db.collection('media')
  const ratgeber = db.collection('ratgebers')
  const now = new Date()

  for (const [slug, alt] of images) {
    const filename = `${slug}.webp`
    const source = path.join(assetDir, filename)
    const destination = path.join(mediaDir, filename)
    const buffer = await fs.readFile(source)
    const metadata = await sharp(buffer).metadata()

    await fs.copyFile(source, destination)

    const existingMedium = await media.findOne({ filename })
    const mediaId = existingMedium?._id ?? new ObjectId()

    await media.updateOne(
      { _id: mediaId },
      {
        $set: {
          alt,
          filename,
          mimeType: 'image/webp',
          filesize: buffer.length,
          width: metadata.width,
          height: metadata.height,
          focalX: 50,
          focalY: 50,
          url: `/api/media/file/${filename}`,
          updatedAt: now,
        },
        $setOnInsert: { createdAt: now },
      },
      { upsert: true },
    )

    const result = await ratgeber.updateOne(
      { slug },
      { $set: { titelbild: mediaId, updatedAt: now } },
    )

    if (result.matchedCount !== 1) throw new Error(`Ratgeber für Bildzuordnung fehlt: ${slug}`)
    console.log(`🖼️ ${slug} → ${filename}`)
  }

  await migrations.updateOne(
    { _id: migrationId },
    {
      $set: {
        completedAt: new Date(),
        description: '20 Titelbilder für den Ratgeber-Mix 08.–27.09.2026 gespeichert und zugeordnet',
      },
    },
    { upsert: true },
  )

  console.log(`✅ ${images.length} Ratgeberbilder gespeichert und zugeordnet.`)
} finally {
  await client.close()
}
