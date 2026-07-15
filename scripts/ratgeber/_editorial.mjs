import { ObjectId } from 'mongodb'
import { bildBlock, hinweisBlock, p, t, bold } from './_helpers.mjs'

export function mediaIdFromEnv(name) {
  const value = process.env[name]?.trim()
  if (!value) return null

  if (!ObjectId.isValid(value)) {
    throw new Error(`${name} enthält keine gültige MongoDB ObjectId.`)
  }

  return new ObjectId(value)
}

export function optionalBildBlock({ bild, beschriftung }) {
  return bild ? bildBlock({ bild, beschriftung }) : null
}

export function compactBlocks(...blocks) {
  return blocks.flat(Infinity).filter(Boolean)
}

export function gutZuWissen(titel, ...children) {
  return hinweisBlock(
    titel,
    p(bold('Gut zu wissen: '), ...children),
  )
}

export function praxiswissen(titel, ...children) {
  return hinweisBlock(
    titel,
    p(bold('Praxiswissen: '), ...children),
  )
}

export function checkpunkt(titel, ...children) {
  return hinweisBlock(
    titel,
    p(bold('Checkpunkt: '), ...children),
  )
}

export function rechtsHinweis() {
  return hinweisBlock(
    'Unsere Einordnung',
    p(
      t('Dieser Beitrag dient der allgemeinen Information und ersetzt keine Rechtsberatung. '),
      t('Er ordnet die veröffentlichten Aussagen des Oberlandesgerichts Koblenz und die handwerkliche Praxis verständlich ein.'),
    ),
  )
}
