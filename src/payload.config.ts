import { mongooseAdapter } from '@payloadcms/db-mongodb'
import {
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
  InlineCodeFeature,
  ParagraphFeature,
  HeadingFeature,
  AlignFeature,
  IndentFeature,
  UnorderedListFeature,
  OrderedListFeature,
  ChecklistFeature,
  LinkFeature,
  BlockquoteFeature,
  UploadFeature,
  HorizontalRuleFeature,
  BlocksFeature,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Ratgeber } from './collections/Ratgeber'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { imageConverterPlugin } from 'payload-img-convert'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Ratgeber],

  editor: lexicalEditor({
    features: () => [
      ParagraphFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
      BoldFeature(),
      ItalicFeature(),
      UnderlineFeature(),
      StrikethroughFeature(),
      SubscriptFeature(),
      SuperscriptFeature(),
      InlineCodeFeature(),
      AlignFeature(),
      IndentFeature(),
      UnorderedListFeature(),
      OrderedListFeature(),
      ChecklistFeature(),
      LinkFeature(),
      BlockquoteFeature(),
      HorizontalRuleFeature(),
      UploadFeature(),
    ],
  }),

  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [
     imageConverterPlugin({
      collections: ['media'],
      formats: ['webp', 'avif'],
      maxWidth: 1920,
      quality: 80,
      oversizeThreshold: 2000
    })
  ],
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'https://cms.peak-energy.gmbh',
  cors: [
    'https://peak-energy.gmbh',
    'https://www.peak-energy.gmbh',
    'http://localhost:3000',
  ],
  csrf: [
    'https://peak-energy.gmbh',
    'https://www.peak-energy.gmbh',
    'http://localhost:3000',
  ],
})