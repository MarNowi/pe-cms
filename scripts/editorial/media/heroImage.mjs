import { resolveMediaByFilename } from './resolver.mjs'

export async function resolveHeroImage(filename, options = {}) {
  return resolveMediaByFilename(filename, {
    ...options,
    required: true,
  })
}
