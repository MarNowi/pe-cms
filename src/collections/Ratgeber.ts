import type { CollectionConfig } from 'payload'

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
    defaultColumns: ['titel', 'kategorie', 'status', 'updatedAt'],
  },
  // versions: {
  //   drafts: true, // später aktivieren wenn Redaktions-Workflow gebraucht wird
  // },
  fields: [
    // ── Meta ──────────────────────────────────────────────
    {
      name: 'titel',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: { description: 'z.B. kosten-solaranlage-einfamilienhaus (ohne Produktpräfix)' },
    },
    {
      name: 'kategorie',
      type: 'select',
      options: [
        { label: 'Solaranlage', value: 'solaranlage' },
        { label: 'Stromspeicher', value: 'stromspeicher' },
        { label: 'Wallbox', value: 'wallbox' },
        { label: 'Wärmepumpe', value: 'waermepumpe' },
        { label: 'Repowering', value: 'repowering' },
      ],
      required: true,
    },
    {
      name: 'lesezeit',
      type: 'number',
      admin: { description: 'Minuten' },
    },
    {
      name: 'titelbild',
      type: 'upload',
      relationTo: 'media',
    },

    // ── Zusammenfassung oben (wie "Das Wesentliche in Kürze") ──
    {
      name: 'zusammenfassung',
      type: 'array',
      label: 'Das Wesentliche in Kürze',
      fields: [
        {
          name: 'punkt',
          type: 'richText',
        },
      ],
    },

    // ── Hauptinhalt als Blocks ────────────────────────────
    {
      name: 'inhalt',
      type: 'blocks',
      blocks: [

        // Normaler Fließtext
        {
          slug: 'text',
          labels: { singular: 'Text', plural: 'Texte' },
          fields: [
            { name: 'content', type: 'richText', required: true },
          ],
        },

        // Grüner Tipp-Kasten
        {
          slug: 'tipp',
          labels: { singular: 'Tipp-Box', plural: 'Tipp-Boxen' },
          fields: [
            { name: 'titel', type: 'text' },
            { name: 'content', type: 'richText', required: true },
          ],
        },

        // Gelber Hinweis-Kasten
        {
          slug: 'hinweis',
          labels: { singular: 'Hinweis-Box', plural: 'Hinweis-Boxen' },
          fields: [
            { name: 'titel', type: 'text' },
            { name: 'content', type: 'richText', required: true },
          ],
        },

        // Tabelle (z.B. Kostenübersicht)
        {
          slug: 'tabelle',
          labels: { singular: 'Tabelle', plural: 'Tabellen' },
          fields: [
            { name: 'titel', type: 'text' },
            {
              name: 'zeilen',
              type: 'array',
              fields: [
                { name: 'spalte1', type: 'text' },
                { name: 'spalte2', type: 'text' },
                { name: 'spalte3', type: 'text' },
              ],
            },
          ],
        },

        // Bild mit optionaler Beschriftung
        {
          slug: 'bild',
          labels: { singular: 'Bild', plural: 'Bilder' },
          fields: [
            { name: 'bild', type: 'upload', relationTo: 'media', required: true },
            { name: 'beschriftung', type: 'text' },
          ],
        },

        // CTA – "Jetzt Angebot anfragen"
        {
          slug: 'cta',
          labels: { singular: 'Call-to-Action', plural: 'Call-to-Actions' },
          fields: [
            { name: 'titel', type: 'text', required: true },
            { name: 'text', type: 'textarea' },
            { name: 'buttonText', type: 'text', defaultValue: 'Jetzt Angebot anfragen' },
            { name: 'buttonLink', type: 'text', defaultValue: '/kontakt' },
          ],
        },
      ],
    },

    // ── SEO ──────────────────────────────────────────────
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
      ],
    },

    // ── Status ───────────────────────────────────────────
    {
      name: 'status',
      type: 'select',
      defaultValue: 'entwurf',
      options: [
        { label: 'Entwurf', value: 'entwurf' },
        { label: 'Veröffentlicht', value: 'veroeffentlicht' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
}