export function tabelleBlockAdapter(helpers, titel, zeilen) {
  if (!helpers?.tabelleBlock) {
    throw new TypeError('PEAK.Editorial: helpers.tabelleBlock fehlt.')
  }

  return helpers.tabelleBlock(titel, zeilen)
}
