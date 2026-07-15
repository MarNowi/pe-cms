import { resolveMediaMap } from '../editorial/media/resolver.mjs'

const media = await resolveMediaMap({
  hero: {
    filename: 'photovoltaik-handwerksrolle-olg.webp',
    required: true,
  },
  beratung: {
    filename: 'photovoltaik-handwerksrolle-beratung.webp',
    required: false,
  },
  dach: {
    filename: 'photovoltaik-handwerksrolle-dachmontage.webp',
    required: false,
  },
  elektro: {
    filename: 'photovoltaik-handwerksrolle-elektroinstallation.webp',
    required: false,
  },
  detail: {
    filename: 'photovoltaik-handwerksrolle-unterkonstruktion.webp',
    required: false,
  },
  kontrolle: {
    filename: 'photovoltaik-handwerksrolle-qualitaetskontrolle.webp',
    required: false,
  },
})

const mediaEnvironment = {
  RATGEBER_PV_HANDWERKSROLLE_HERO_ID: media.hero,
  RATGEBER_PV_HANDWERKSROLLE_BERATUNG_ID: media.beratung,
  RATGEBER_PV_HANDWERKSROLLE_DACH_ID: media.dach,
  RATGEBER_PV_HANDWERKSROLLE_ELEKTRO_ID: media.elektro,
  RATGEBER_PV_HANDWERKSROLLE_DETAIL_ID: media.detail,
  RATGEBER_PV_HANDWERKSROLLE_KONTROLLE_ID: media.kontrolle,
}

for (const [name, value] of Object.entries(mediaEnvironment)) {
  if (value) process.env[name] = value.toString()
  else delete process.env[name]
}

await import('./wer-darf-photovoltaikanlagen-installieren.mjs')
