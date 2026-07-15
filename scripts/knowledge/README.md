# PEAK.Knowledge Core

Unabhängige Wissensschicht für PEAK.Editorial, PEAK.OS und PEAK.Flex.

## Grundsatz

PEAK.Knowledge speichert und verknüpft fachliche Begriffe. Es veröffentlicht nichts, verändert keine Payload-Collections und schreibt nicht in die Datenbank.

## Bausteine

- `entity.mjs`: stabiler Wissenseintrag mit ID, Definition, Aliasen, Tags und Quellen
- `relation.mjs`: gerichtete Beziehung zwischen zwei Entities
- `topic.mjs`: thematische Bündelung mehrerer Entities
- `registry.mjs`: zentrale In-Memory-Registrierung
- `graph.mjs`: Verwandtschaftssuche und Konsistenzprüfung
- `resolver.mjs`: Auflösung über ID, Namen oder Alias
- `search.mjs`: gewichtete Volltextsuche
- `tags.mjs`: kanonische Themen-Tags

## Smoke-Test

```bash
node scripts/knowledge/smoke-test.mjs
```

## Beispiel

```js
import { createPhotovoltaikInstallationKnowledge } from './examples/photovoltaik-installation.mjs'

const knowledge = createPhotovoltaikInstallationKnowledge()

const handwerksrolle = knowledge.resolver.resolve('Handwerksrolle')
const verwandteBegriffe = knowledge.graph.related('handwerksrolle', { depth: 2 })
const treffer = knowledge.search('Elektriker')
```

## Safe Mode

Noch nicht enthalten:

- automatische Änderungen an Lexical-Inhalten
- automatische Veröffentlichung
- Datenbankpersistenz
- automatische Übernahme juristischer Aussagen
- autonome Agents

Die nächste Ausbaustufe verbindet vorhandene Lexikon- und Ratgeberdaten lesend mit dieser Wissensschicht.
