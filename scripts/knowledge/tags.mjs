export const knowledgeTags = Object.freeze({
  PHOTOVOLTAIK: 'photovoltaik',
  DACH: 'dach',
  ELEKTROTECHNIK: 'elektrotechnik',
  SPEICHER: 'stromspeicher',
  WALLBOX: 'wallbox',
  WAERMEPUMPE: 'waermepumpe',
  EMS: 'energiemanagement',
  NETZ: 'netz',
  RECHT: 'recht',
  NORMEN: 'normen',
  FOERDERUNG: 'foerderung',
  VERBRAUCHERSCHUTZ: 'verbraucherschutz',
})

export function normalizeTags(...values) {
  return [...new Set(values.flat().filter(Boolean).map((value) => String(value).trim().toLowerCase()))]
}
