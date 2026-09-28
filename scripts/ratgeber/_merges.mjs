// Zusammengelegte Ratgeber-Artikel – gemeinsame Daten für Migration und upsertRatgeberArticle.
//
// Pro Eintrag:
// - quelle: Artikel, der als Entwurf aus dem Netz geht (nichts wird gelöscht).
//   upsertRatgeberArticle setzt ihn immer auf „entwurf“, damit kein Ursprungs-Script ihn
//   wieder veröffentlicht.
// - ziel: Artikel, der das Thema übernimmt. Die 301-Weiterleitung alt → neu steht im
//   Frontend (pe: src/lib/seo/ratgeber-redirects.mjs).
// - uebernahme: Inhalte, die im Ziel fehlten – wortgleich aus der Quelle übernommen.
//   Blöcke werden nach dem Block mit der Überschrift `nach` eingefügt, FAQ-Fragen hinten angehängt.
//   Bereits vorhandene Überschriften und Fragen werden übersprungen (idempotent).
//
// Entscheidung und Search-Console-Daten: docs/ratgeber-zusammenlegung-schritt-4.md

import { h, p, t, textBlock, tippBlock, ul, faqItem } from './_helpers.mjs'

export const RATGEBER_MERGES = [
  {
    quelle: { slug: 'braucht-man-einen-stromspeicher', kategorie: 'solaranlage' },
    ziel: { slug: 'lohnt-sich-ein-stromspeicher', kategorie: 'stromspeicher' },
    uebernahme: {
      faq: [
        [
          'Braucht man für eine Solaranlage zwingend einen Speicher?',
          'Nein. Eine Solaranlage kann auch ohne Speicher sehr sinnvoll sein. Entscheidend ist, wie dein Stromverbrauch über den Tag verteilt ist und welche Ziele du mit der Anlage verfolgst.',
        ],
        [
          'Kann man einen Speicher später nachrüsten?',
          'Ja, das ist grundsätzlich möglich. Wichtig ist aber, die Anlage und Technik von Anfang an so zu planen, dass eine spätere Nachrüstung sauber umsetzbar bleibt.',
        ],
      ],
    },
  },
  {
    quelle: { slug: 'lokales-hems-hersteller-cloud-server-internet-ausfall', kategorie: 'strom-energiemanagement' },
    ziel: { slug: 'cloud-ems-vs-lokales-ems-energiedaten', kategorie: 'strom-energiemanagement' },
    uebernahme: {
      nach: 'Cloud ist nicht automatisch schlecht – aber sie sollte optional sein',
      bloecke: () => [
        textBlock(
          h('h2', t('Regelkreis und Optimierung trennen')),
          p(t('Schnelle Regelaufgaben wie die Begrenzung am Netzanschlusspunkt profitieren von lokaler Messung und lokaler Stellwertübertragung. Wetterprognosen, Tarifdaten und Flottenauswertungen können sinnvoll in der Cloud erfolgen.')),
          p(t('Eine hybride Architektur verbindet beide Ebenen: sichere Grundregelung vor Ort und zusätzliche Optimierung mit externen Daten.')),
        ),
        textBlock(
          h('h2', t('Was bei Dienstausfall weiterlaufen sollte')),
          p(t('Heizung, Batterieschutz, sichere Ladegrenzen und Einspeisevorgaben benötigen definierte lokale Zustände. Komfortoptimierung oder dynamische Tarifplanung darf vorübergehend entfallen, ohne das Gebäude funktionsunfähig zu machen.')),
          p(t('Der Fallback sollte dokumentiert und testbar sein. „Funktioniert offline“ ist zu ungenau, wenn damit lediglich die Wechselrichter-Grunderzeugung gemeint ist.')),
        ),
        tippBlock(
          'Darauf sollte die Prüfung aufbauen',
          ul(
            ...[
              'Daten- und Befehlsweg skizzieren lassen',
              'Offline-Funktionen einzeln bestätigen',
              'Fallback bei fehlenden Preisen definieren',
              'Update- und Supportzeitraum klären',
              'Export und Wechselmöglichkeit prüfen',
            ].map((punkt) => p(t(punkt))),
          ),
        ),
      ],
      faq: [
        [
          'Kann eine Cloud bei Ausfall die PV abschalten?',
          'Das hängt vom Produkt ab. Lokale Schutz- und Grundfunktionen sollten nicht von einem externen Server abhängig sein; die Dokumentation ist maßgeblich.',
        ],
      ],
    },
  },
  {
    quelle: { slug: 'wie-viel-autarkie-ist-realistisch', kategorie: 'solaranlage' },
    ziel: { slug: 'eigenverbrauch-optimieren-100-prozent-autarkie', kategorie: 'strom-energiemanagement' },
    // Das Ziel deckt alle Aussagen der Quelle bereits ab – nichts zu übernehmen
    uebernahme: {},
  },
]

const BY_QUELLE = new Map(RATGEBER_MERGES.map((m) => [m.quelle.slug, m]))
const BY_ZIEL = new Map(RATGEBER_MERGES.map((m) => [m.ziel.slug, m]))

/** Ist der Artikel in einen anderen aufgegangen? Dann gibt es den Ziel-Eintrag zurück. */
export function mergedInto(slug) {
  return BY_QUELLE.get(slug) ?? null
}

function nodeText(node) {
  return (node?.children ?? []).map((child) => child?.text ?? nodeText(child)).join('')
}

/** Überschrift eines Blocks: erste Zwischenüberschrift im Text oder Titel von Tipp/Hinweis/Tabelle */
function blockHeading(block) {
  const first = block?.content?.root?.children?.find((node) => node?.type === 'heading')
  return (first ? nodeText(first) : block?.titel ?? '').trim()
}

/**
 * Fügt die Inhalte aus zusammengelegten Artikeln in den Ziel-Artikel ein.
 * Gibt eine Kopie zurück und listet eingefügte, schon vorhandene und nicht platzierbare Teile.
 */
export function applyMergeContent(slug, article) {
  const result = { article, applied: [], present: [], notFound: [] }
  const merge = BY_ZIEL.get(slug)
  if (!merge || !article) return result

  const copy = structuredClone(article)
  const { nach, bloecke, faq = [] } = merge.uebernahme

  if (bloecke) {
    const inhalt = Array.isArray(copy.inhalt) ? copy.inhalt : []
    const vorhanden = new Set(inhalt.map(blockHeading))
    const neu = bloecke().filter((block) => {
      const titel = blockHeading(block)
      if (vorhanden.has(titel)) {
        result.present.push(`Abschnitt „${titel}“`)
        return false
      }
      return true
    })
    if (neu.length) {
      const index = inhalt.findIndex((block) => blockHeading(block) === nach)
      if (index === -1) {
        result.notFound.push(`Abschnitt „${nach}“ (Einfügestelle)`)
      } else {
        inhalt.splice(index + 1, 0, ...neu)
        for (const block of neu) result.applied.push(`Abschnitt „${blockHeading(block)}“`)
        copy.inhalt = inhalt
      }
    }
  }

  if (faq.length) {
    const liste = Array.isArray(copy.faq) ? copy.faq : []
    const fragen = new Set(liste.map((item) => item?.frage?.trim()))
    for (const [frage, antwort] of faq) {
      if (fragen.has(frage)) {
        result.present.push(`FAQ „${frage}“`)
        continue
      }
      liste.push(faqItem(frage, antwort))
      result.applied.push(`FAQ „${frage}“`)
    }
    copy.faq = liste
  }

  result.article = copy
  return result
}
