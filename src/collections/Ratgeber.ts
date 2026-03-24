import type { CollectionConfig } from 'payload'

function formatSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function extractText(value: unknown): string {
  if (!value) return ''

  if (typeof value === 'string') return value

  if (Array.isArray(value)) {
    return value.map(extractText).join(' ')
  }

  if (typeof value === 'object') {
    return Object.values(value as Record<string, unknown>)
      .map(extractText)
      .join(' ')
  }

  return ''
}

function cleanZusammenfassung(value: unknown) {
  if (!Array.isArray(value)) return []

  return value.filter((item) => {
    if (!item || typeof item !== 'object') return false
    const entry = item as Record<string, unknown>
    return entry.punkt != null
  })
}

function cleanFaq(value: unknown) {
  if (!Array.isArray(value)) return []

  return value.filter((item) => {
    if (!item || typeof item !== 'object') return false

    const faq = item as Record<string, unknown>

    return (
      typeof faq.frage === 'string' &&
      faq.frage.trim().length > 0 &&
      typeof faq.antwort === 'string' &&
      faq.antwort.trim().length > 0
    )
  })
}

function cleanZeilen(value: unknown) {
  if (!Array.isArray(value)) return []

  return value.filter((row) => {
    if (!row || typeof row !== 'object') return false

    const entry = row as Record<string, unknown>

    return typeof entry.spalte1 === 'string' && entry.spalte1.trim().length > 0
  })
}

function cleanInhalt(value: unknown) {
  if (!Array.isArray(value)) return []

  return value
    .filter((block) => {
      if (!block || typeof block !== 'object') return false

      const entry = block as Record<string, unknown>

      return typeof entry.blockType === 'string' && entry.blockType.trim().length > 0
    })
    .map((block) => {
      const entry = block as Record<string, unknown>

      if (entry.blockType === 'tabelle') {
        return {
          ...entry,
          zeilen: cleanZeilen(entry.zeilen),
        }
      }

      return entry
    })
}

function sanitizeRatgeberData(data: Record<string, any>) {
  data.zusammenfassung = cleanZusammenfassung(data.zusammenfassung)
  data.inhalt = cleanInhalt(data.inhalt)
  data.faq = cleanFaq(data.faq)
  return data
}

function estimateReadingTime(data: Record<string, any>): number {
  const parts: string[] = []

  if (data?.titel) parts.push(String(data.titel))
  if (data?.teaser) parts.push(String(data.teaser))

  const zusammenfassung = cleanZusammenfassung(data?.zusammenfassung)
  for (const item of zusammenfassung) {
    const entry = item as Record<string, unknown>
    if (entry?.punkt) parts.push(extractText(entry.punkt))
  }

  const inhalt = cleanInhalt(data?.inhalt)
  for (const block of inhalt) {
    parts.push(extractText(block))
  }

  const text = parts.join(' ').replace(/\s+/g, ' ').trim()
  const words = text ? text.split(' ').length : 0

  return Math.max(1, Math.ceil(words / 180))
}

export const Ratgeber: CollectionConfig = {
  slug: 'ratgeber',
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    readVersions: ({ req }) => !!req.user,
  },
  admin: {
    useAsTitle: 'titel',
    defaultColumns: ['titel', 'kategorie', 'status', 'publishedAt', 'updatedAt'],
  },
  // versions: {
  //   drafts: true,
  // },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'titel',
          label: 'Titel',
          type: 'text',
          required: true,
          admin: {
            width: '70%',
          },
        },
        {
          name: 'slug',
          label: 'Slug',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          admin: {
            width: '30%',
            description: 'z. B. kosten-solaranlage-einfamilienhaus (ohne Produktpräfix)',
          },
          hooks: {
            beforeValidate: [
              ({ value, data }) => {
                if (typeof value === 'string' && value.trim()) {
                  return formatSlug(value)
                }

                if (data?.titel) {
                  return formatSlug(String(data.titel))
                }

                return value
              },
            ],
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'kategorie',
          label: 'Kategorie',
          type: 'select',
          options: [
            { label: 'Solaranlage', value: 'solaranlage' },
            { label: 'Stromspeicher', value: 'stromspeicher' },
            { label: 'Wallbox', value: 'wallbox' },
            { label: 'Wärmepumpe', value: 'waermepumpe' },
            { label: 'Repowering', value: 'repowering' },
          ],
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'lesezeit',
          label: 'Lesezeit',
          type: 'number',
          min: 1,
          admin: {
            width: '25%',
            description: 'Minuten. Wird automatisch vorbelegt.',
          },
        },
        {
          name: 'publishedAt',
          label: 'Veröffentlicht am',
          type: 'date',
          admin: {
            width: '25%',
            date: {
              pickerAppearance: 'dayOnly',
            },
          },
        },
      ],
    },
    {
      name: 'teaser',
      label: 'Kurzbeschreibung / Teaser',
      type: 'textarea',
      required: true,
      maxLength: 220,
      admin: {
        description: 'Für Listen, Vorschauen und als Fallback für SEO.',
      },
    },
    {
      name: 'titelbild',
      label: 'Titelbild',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'zusammenfassung',
      type: 'array',
      label: 'Das Wesentliche in Kürze',
      fields: [
        {
          name: 'punkt',
          label: 'Punkt',
          type: 'richText',
        },
      ],
    },
    {
      name: 'inhalt',
      label: 'Inhalt',
      type: 'blocks',
      blocks: [
        {
          slug: 'text',
          labels: { singular: 'Text', plural: 'Texte' },
          fields: [{ name: 'content', label: 'Inhalt', type: 'richText', required: true }],
        },
        {
          slug: 'tipp',
          labels: { singular: 'Tipp-Box', plural: 'Tipp-Boxen' },
          fields: [
            { name: 'titel', label: 'Titel', type: 'text' },
            { name: 'content', label: 'Inhalt', type: 'richText', required: true },
          ],
        },
        {
          slug: 'hinweis',
          labels: { singular: 'Hinweis-Box', plural: 'Hinweis-Boxen' },
          fields: [
            { name: 'titel', label: 'Titel', type: 'text' },
            { name: 'content', label: 'Inhalt', type: 'richText', required: true },
          ],
        },
        {
          slug: 'tabelle',
          labels: { singular: 'Tabelle', plural: 'Tabellen' },
          fields: [
            { name: 'titel', label: 'Titel', type: 'text' },
            {
              name: 'zeilen',
              label: 'Zeilen',
              type: 'array',
              fields: [
                { name: 'spalte1', label: 'Spalte 1', type: 'text', required: true },
                { name: 'spalte2', label: 'Spalte 2', type: 'text', required: true },
                { name: 'spalte3', label: 'Spalte 3', type: 'text' },
              ],
            },
          ],
        },
        {
          slug: 'bild',
          labels: { singular: 'Bild', plural: 'Bilder' },
          fields: [
            { name: 'bild', label: 'Bild', type: 'upload', relationTo: 'media', required: true },
            { name: 'beschriftung', label: 'Beschriftung', type: 'text' },
          ],
        },
        {
          slug: 'cta',
          labels: { singular: 'Call-to-Action', plural: 'Call-to-Actions' },
          fields: [
            { name: 'titel', label: 'Titel', type: 'text', required: true },
            { name: 'text', label: 'Text', type: 'textarea' },
            {
              name: 'buttonText',
              label: 'Button Text',
              type: 'text',
              defaultValue: 'Jetzt Angebot anfragen',
            },
            {
              name: 'buttonLink',
              label: 'Button Link',
              type: 'text',
              defaultValue: '/kontakt',
            },
          ],
        },
      ],
    },
    {
      name: 'faq',
      label: 'FAQ',
      type: 'array',
      fields: [
        {
          name: 'frage',
          label: 'Frage',
          type: 'text',
          required: true,
        },
        {
          name: 'antwort',
          label: 'Antwort',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'relatedArticles',
      label: 'Verwandte Artikel',
      type: 'relationship',
      relationTo: 'ratgeber',
      hasMany: true,
      admin: {
        allowCreate: false,
      },
    },
    {
      name: 'seo',
      label: 'SEO',
      type: 'group',
      fields: [
        { name: 'metaTitle', label: 'Meta Title', type: 'text' },
        { name: 'metaDescription', label: 'Meta Description', type: 'textarea' },
      ],
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      defaultValue: 'entwurf',
      options: [
        { label: 'Entwurf', value: 'entwurf' },
        { label: 'Veröffentlicht', value: 'veroeffentlicht' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return data

        sanitizeRatgeberData(data)

        if (!data.slug && data.titel) {
          data.slug = formatSlug(String(data.titel))
        }

        if (!data.lesezeit) {
          data.lesezeit = estimateReadingTime(data)
        }

        return data
      },
    ],
    beforeChange: [
      ({ data, originalDoc }) => {
        if (!data) return data

        sanitizeRatgeberData(data)

        if (data.status === 'veroeffentlicht' && !data.publishedAt) {
          data.publishedAt = originalDoc?.publishedAt || new Date().toISOString()
        }

        if (!data.lesezeit) {
          data.lesezeit = estimateReadingTime(data)
        }

        return data
      },
    ],
  },
}
