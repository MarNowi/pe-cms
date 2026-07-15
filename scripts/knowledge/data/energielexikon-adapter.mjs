import {
  createGraph,
  createKnowledgeSearch,
  createRegistry,
  createResolver,
  entity,
} from '../index.mjs'
import { energielexikonSections } from './energielexikon/index.mjs'

function slugify(value) {
  return String(value)
    .toLocaleLowerCase('de-DE')
    .replace(/§/g, 'paragraph-')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/²/g, '2')
    .replace(/₂/g, '2')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function aliasesFor(term) {
  const aliases = []
  const match = String(term).match(/^(.+?)\s*\((.+?)\)$/)

  if (match) {
    aliases.push(match[1].trim(), match[2].trim())
  }

  return [...new Set(aliases.filter((value) => value && value !== term))]
}

export function flattenEnergielexikon(
  sections = energielexikonSections,
) {
  return sections.flatMap((section) =>
    section.entries.map((entry) => ({
      ...entry,
      letter: section.letter,
    })),
  )
}

export function createEnergielexikonEntities(
  sections = energielexikonSections,
) {
  const usedIds = new Map()

  return flattenEnergielexikon(sections).map((entry) => {
    const baseId = slugify(entry.term)
    const count = usedIds.get(baseId) ?? 0
    usedIds.set(baseId, count + 1)

    const id = count === 0 ? baseId : `${baseId}-${count + 1}`

    return entity({
      id,
      name: entry.term,
      type: 'lexikon',
      description: entry.description,
      aliases: aliasesFor(entry.term),
      tags: entry.categories ?? [],
      url: `/energielexikon#${id}`,
      metadata: {
        letter: entry.letter,
        note: entry.note ?? '',
        links: entry.links ?? [],
        source: 'MarNowi/pe',
      },
    })
  })
}

export function createEnergielexikonKnowledge(
  sections = energielexikonSections,
) {
  const registry = createRegistry()
  const entities = createEnergielexikonEntities(sections)

  for (const value of entities) {
    registry.registerEntity(value)
  }

  return {
    registry,
    graph: createGraph(registry),
    resolver: createResolver(registry),
    search: createKnowledgeSearch(registry),
  }
}
