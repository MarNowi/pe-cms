// Interne Verlinkung im Fließtext – gemeinsame Logik für Migration und upsertRatgeberArticle.
//
// 1. removeLinkLists: entfernt die Textblöcke „Passende Ratgeber zum Weiterlesen“ (reine Linklisten).
// 2. applyInternalLinks: setzt die Links aus _internalLinks.mjs in den bestehenden Text.
//
// Beide Funktionen sind idempotent und verändern keinen Wortlaut: Ein Link wird nur gesetzt,
// wenn der Ankertext genau an der hinterlegten Stelle steht und die Ziel-URL im Artikel
// noch nicht verlinkt ist.

import { INTERNAL_LINKS } from './_internalLinks.mjs'

export const LINK_LIST_HEADING = 'Passende Ratgeber zum Weiterlesen'

const LINKABLE_BLOCKS = new Set(['text', 'tipp', 'hinweis'])

function rootChildren(block) {
  return block?.content?.root?.children ?? []
}

function nodeText(node) {
  return (node?.children ?? []).map((child) => child?.text ?? '').join('')
}

function isLinkListBlock(block) {
  if (block?.blockType !== 'text') return false
  const children = rootChildren(block)
  const [first, ...rest] = children
  if (first?.type !== 'heading' || nodeText(first).trim() !== LINK_LIST_HEADING) return false

  // Sicherheitsnetz: nur entfernen, wenn der Rest ausschließlich aus Absätzen mit Links besteht
  return rest.every(
    (node) =>
      node?.type === 'paragraph' &&
      (node.children ?? []).every(
        (child) => child?.type === 'link' || (child?.type === 'text' && !child.text?.trim()),
      ),
  )
}

export function removeLinkLists(inhalt) {
  if (!Array.isArray(inhalt)) return { inhalt, removed: 0 }
  const kept = inhalt.filter((block) => !isLinkListBlock(block))
  return { inhalt: kept, removed: inhalt.length - kept.length }
}

function collectUrls(node, urls) {
  if (Array.isArray(node)) {
    for (const child of node) collectUrls(child, urls)
    return urls
  }
  if (!node || typeof node !== 'object') return urls
  if (node.type === 'link' && node.fields?.url) urls.add(node.fields.url)
  for (const value of Object.values(node)) {
    if (value && typeof value === 'object') collectUrls(value, urls)
  }
  return urls
}

function makeLink(textNode, anchor, url) {
  return {
    type: 'link',
    children: [{ ...textNode, text: anchor }],
    direction: null,
    fields: { linkType: 'custom', url, newTab: false },
    format: '',
    indent: 0,
    version: 3,
  }
}

/** Sucht im Absatz/Listenpunkt den Textknoten mit dem Kontext und ersetzt den Anker durch einen Link. */
function linkInContainer(container, spec) {
  const children = container?.children
  if (!Array.isArray(children)) return false

  for (let i = 0; i < children.length; i += 1) {
    const child = children[i]
    if (child?.type !== 'text' || typeof child.text !== 'string') continue

    const contextIndex = child.text.indexOf(spec.context)
    if (contextIndex === -1) continue

    const anchorIndex = child.text.indexOf(spec.anchor, contextIndex)
    if (anchorIndex === -1 || anchorIndex + spec.anchor.length > contextIndex + spec.context.length) return false

    const before = child.text.slice(0, anchorIndex)
    const after = child.text.slice(anchorIndex + spec.anchor.length)
    const replacement = [
      ...(before ? [{ ...child, text: before }] : []),
      makeLink(child, spec.anchor, spec.url),
      ...(after ? [{ ...child, text: after }] : []),
    ]
    children.splice(i, 1, ...replacement)
    return true
  }

  return false
}

function linkInBlocks(inhalt, spec) {
  for (const block of inhalt) {
    if (!LINKABLE_BLOCKS.has(block?.blockType)) continue
    for (const node of rootChildren(block)) {
      if (node?.type === 'paragraph' && linkInContainer(node, spec)) return true
      if (node?.type === 'list') {
        for (const item of node.children ?? []) {
          if (linkInContainer(item, spec)) return true
        }
      }
    }
  }
  return false
}

/**
 * Setzt die hinterlegten Links für einen Artikel. Gibt den (kopierten) Inhalt zurück und
 * listet auf, welche Links gesetzt, übersprungen (schon vorhanden) oder nicht gefunden wurden.
 */
export function applyInternalLinks(slug, inhalt) {
  const specs = INTERNAL_LINKS[slug] ?? []
  const result = { inhalt, applied: [], present: [], notFound: [] }
  if (!specs.length || !Array.isArray(inhalt)) return result

  const copy = structuredClone(inhalt)
  const urls = collectUrls(copy, new Set())

  for (const spec of specs) {
    if (urls.has(spec.url)) {
      result.present.push(spec)
      continue
    }
    if (linkInBlocks(copy, spec)) {
      urls.add(spec.url)
      result.applied.push(spec)
    } else {
      result.notFound.push(spec)
    }
  }

  result.inhalt = copy
  return result
}

/** Beides in der richtigen Reihenfolge: erst Linklisten entfernen, dann Links im Text setzen. */
export function transformArticleLinks(slug, inhalt) {
  const { inhalt: ohneListen, removed } = removeLinkLists(inhalt)
  const linked = applyInternalLinks(slug, ohneListen)
  return { ...linked, removedLists: removed }
}
