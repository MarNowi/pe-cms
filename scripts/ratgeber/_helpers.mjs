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

function normalizeListChildren(item) {
  if (typeof item === 'string') return [t(item)]
  if (Array.isArray(item)) return item
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
