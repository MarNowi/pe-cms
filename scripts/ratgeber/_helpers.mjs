import { ObjectId } from 'mongodb'

export function uid() {
  return new ObjectId().toString()
}

export function t(text, format = 0) {
  return {
    type: 'text',
    text,
    format,
    detail: 0,
    mode: 'normal',
    style: '',
    version: 1,
  }
}

export function bold(text) {
  return t(text, 1)
}

export function link(label, url, options = {}) {
  const children =
    typeof label === 'string'
      ? [t(label)]
      : Array.isArray(label)
        ? label
        : [label]

  return {
    type: 'link',
    children,
    direction: null,
    fields: {
      linkType: 'custom',
      url,
      newTab: options.newTab ?? false,
    },
    format: '',
    indent: 0,
    version: 3,
  }
}

export function p(...children) {
  return {
    type: 'paragraph',
    children,
    direction: null,
    format: '',
    indent: 0,
    version: 1,
    textFormat: 0,
    textStyle: '',
  }
}

export function h(tag, ...children) {
  return {
    type: 'heading',
    tag,
    children,
    direction: null,
    format: '',
    indent: 0,
    version: 1,
  }
}

function isParagraphNode(node) {
  return Boolean(
    node &&
      typeof node === 'object' &&
      node.type === 'paragraph' &&
      Array.isArray(node.children),
  )
}

function normalizeListChildren(item) {
  if (typeof item === 'string') {
    return [t(item)]
  }

  if (Array.isArray(item)) {
    return item.flatMap((child) =>
      isParagraphNode(child) ? child.children : child,
    )
  }

  if (isParagraphNode(item)) {
    return item.children
  }

  return [item]
}

export function ul(...items) {
  return {
    type: 'list',
    listType: 'bullet',
    tag: 'ul',
    start: 1,
    direction: null,
    format: '',
    indent: 0,
    version: 1,
    children: items.map((item, i) => ({
      type: 'listitem',
      value: i + 1,
      direction: null,
      format: '',
      indent: 0,
      version: 1,
      children: normalizeListChildren(item),
    })),
  }
}

export function ol(...items) {
  return {
    type: 'list',
    listType: 'number',
    tag: 'ol',
    start: 1,
    direction: null,
    format: '',
    indent: 0,
    version: 1,
    children: items.map((item, i) => ({
      type: 'listitem',
      value: i + 1,
      direction: null,
      format: '',
      indent: 0,
      version: 1,
      children: normalizeListChildren(item),
    })),
  }
}

export function root(...children) {
  return {
    root: {
      type: 'root',
      children,
      direction: null,
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

export function summaryPoint(...children) {
  return {
    id: uid(),
    punkt: root(p(...children)),
  }
}

export function textBlock(...children) {
  return {
    id: uid(),
    blockType: 'text',
    content: root(...children),
  }
}

export function hinweisBlock(titel, ...children) {
  return {
    id: uid(),
    blockType: 'hinweis',
    titel,
    content: root(...children),
  }
}

export function tippBlock(titel, ...children) {
  return {
    id: uid(),
    blockType: 'tipp',
    titel,
    content: root(...children),
  }
}

export function tabelleBlock(titel, zeilen) {
  return {
    id: uid(),
    blockType: 'tabelle',
    titel,
    zeilen: zeilen.map((zeile) => ({
      id: zeile.id ?? uid(),
      ...zeile,
    })),
  }
}
export function bildBlock({
  bild,
  beschriftung = '',
}) {
  if (!bild) {
    throw new Error('bildBlock benötigt eine Media-ID im Feld "bild".')
  }

  return {
    id: uid(),
    blockType: 'bild',
    bild,
    beschriftung,
  }
}
export function ctaBlock({
  titel,
  text,
  buttonText = 'Jetzt Beratung anfragen',
  buttonLink = '/kontakt',
}) {
  return {
    id: uid(),
    blockType: 'cta',
    titel,
    text,
    buttonText,
    buttonLink,
  }
}

export function faqItem(frage, antwort) {
  return {
    id: uid(),
    frage,
    antwort,
  }
}

export function seo(metaTitle, metaDescription) {
  return {
    metaTitle,
    metaDescription,
  }
}

