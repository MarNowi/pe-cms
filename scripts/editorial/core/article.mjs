import { article } from '../editorial/core/article.mjs'
import { seo } from './_helpers.mjs'

const document = article({
  type: 'ratgeber',

  titel: 'Wer darf Photovoltaikanlagen installieren?',
  slug: 'wer-darf-photovoltaikanlagen-installieren',
  kategorie: 'solaranlage',

  teaser:
    'Was das OLG-Urteil für Hausbesitzer, Komplettanbieter und qualifizierte Fachbetriebe bedeutet.',

  status: 'veroeffentlicht',
  lesezeit: 12,

  titelbild: heroMediaId,

  zusammenfassung: [
    // summaryPoint(...)
  ],

  inhalt: [
    // textBlock(...)
    // hinweisBlock(...)
    // bildBlock(...)
  ],

  faq: [
    // faqItem(...)
  ],

  seo: seo(
    'Wer darf Photovoltaikanlagen installieren? | PEAK.Energy',
    'Das OLG-Urteil verständlich erklärt: Handwerksrolle, Dachdecker, Elektriker und Auswahl eines qualifizierten PV-Fachbetriebs.',
  ),
})
