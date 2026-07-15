import { ratgeber } from '../templates/ratgeber.mjs'
import { resolveHeroImage } from '../media/heroImage.mjs'
import { seoTitle } from '../seo/title.mjs'
import { seoDescription } from '../seo/description.mjs'

const hero = await resolveHeroImage(
  'photovoltaik-handwerksrolle-olg.webp',
)

const document = ratgeber({
  titel: 'Wer darf Photovoltaikanlagen installieren?',
  slug: 'wer-darf-photovoltaikanlagen-installieren',
  kategorie: 'solaranlage',
  teaser:
    'Das OLG-Urteil verständlich erklärt: Handwerksrolle, Verantwortung und Auswahl eines qualifizierten PV-Fachbetriebs.',
  status: 'veroeffentlicht',
  titelbild: hero,
  seo: {
    metaTitle: seoTitle(
      'Wer darf Photovoltaikanlagen installieren?',
    ),
    metaDescription: seoDescription(
      'Das OLG-Urteil verständlich erklärt: Wer Dacharbeiten und Elektroinstallation ausführen darf und worauf Hausbesitzer achten sollten.',
    ),
  },
})

// Bestehende Factory weiterhin separat verwenden:
// await upsertRatgeberArticle(document)

console.log(document)
