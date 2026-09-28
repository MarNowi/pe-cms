# Ratgeber – Zusammenlegung (Schritt 4)

Stand: 30.09.2026 · Branch `claude/vibrant-mccarthy-pep1xa` (pe-cms und pe)

Drei Artikel gehen in einem stärkeren Artikel auf. Dafür passiert Folgendes:

- Die Quelle wird Entwurf. Gelöscht wird nichts.
- Ihre URL leitet per 301 auf das Ziel weiter.
- Inhalte, die dem Ziel fehlten, werden wortgleich übernommen. Neu geschrieben wird nichts.

## Datengrundlage (Search Console, 27.06.–26.09.2026)

| Artikel | Klicks | Impressionen | Ø Position |
|---|---|---|---|
| `braucht-man-einen-stromspeicher` | 0 | 86 | 8,2 |
| → `lohnt-sich-ein-stromspeicher` | 0 | 25 | 6,7 |
| `lokales-hems-hersteller-cloud-server-internet-ausfall` | 0 | 0 | – |
| → `cloud-ems-vs-lokales-ems-energiedaten` (damals `/stromspeicher/…`) | 19 | 1.856 | 10,6 |
| `wie-viel-autarkie-ist-realistisch` | 1 | 40 | 7,9 |
| → `eigenverbrauch-optimieren-100-prozent-autarkie` | 7 | 388 | 6,8 |

Der Seiten-Export ist vollständig: 767 Zeilen, unter dem Limit von 1.000. Eine fehlende Seite hatte also keine einzige Impression.

Die Suchanfragen zu Cloud und lokalem Energiemanagement holt bereits das Ziel. Beispiele:

- „cloud ems“, Position 6,1
- „cloud energiemanagement system“, Position 7,0
- „ist ein energiemanager auch ohne cloud sicher?“, Position 6,6

Suchanfragen mit „braucht man … Speicher“ kommen im Export nicht vor.

Entscheidung am 30.09.2026: alle drei zusammenlegen.

## Was übernommen wird

### `braucht-man-einen-stromspeicher` → `lohnt-sich-ein-stromspeicher`

Das Ziel deckt Nutzen, Wirtschaftlichkeit, Wärmepumpe/E-Auto und Denkfehler bereits ausführlicher ab. Übernommen werden zwei FAQ-Fragen, die im Ziel fehlten:

- „Braucht man für eine Solaranlage zwingend einen Speicher?“ – deckt auch die Suchformulierung der alten Seite ab
- „Kann man einen Speicher später nachrüsten?“

### `lokales-hems-hersteller-cloud-server-internet-ausfall` → `cloud-ems-vs-lokales-ems-energiedaten`

Das Ziel behandelt Datenhoheit, Vor- und Nachteile, evcc und PEAK.Flex. Aus der Quelle fehlte der Blick auf den Ausfall. Diese Teile werden nach dem Abschnitt „Cloud ist nicht automatisch schlecht – aber sie sollte optional sein“ eingefügt:

- Abschnitt „Regelkreis und Optimierung trennen“
- Abschnitt „Was bei Dienstausfall weiterlaufen sollte“
- Tipp-Box „Darauf sollte die Prüfung aufbauen“ (Checkliste mit fünf Punkten)
- FAQ „Kann eine Cloud bei Ausfall die PV abschalten?“

Nicht übernommen:

- Die übrigen Abschnitte (Stärken, Latenz, Datenhoheit) und FAQs (dynamische Preise, „immer besser?“) stehen sinngleich schon im Ziel.
- Das Ausfallthema vertieft zusätzlich `internetausfall-pv-speicher-wallbox-hems`.

### `wie-viel-autarkie-ist-realistisch` → `eigenverbrauch-optimieren-100-prozent-autarkie`

Nichts. Das Ziel enthält jede Aussage der Quelle, meist ausführlicher. Die FAQ „Welcher Autarkiegrad ist bei einem Einfamilienhaus realistisch?“ steht dort bereits.

## Umsetzung

**pe-cms**

- `scripts/ratgeber/_merges.mjs` enthält die drei Zusammenlegungen und die übernommenen Inhalte.
- `migrate-2026-09-30-zusammenlegung.mjs` ergänzt die Ziele und setzt die Quellen auf Entwurf. Das Script prüft vorher, ob jedes Ziel veröffentlicht ist, sonst bricht es ohne Änderung ab.
- `upsertRatgeberArticle` wendet `_merges.mjs` ebenfalls an:
  - Ursprungs-Scripts der Quellen speichern immer als Entwurf. Das gilt auch für das Sammel-Script `run-ratgeber-mix-2026-09-08-27.mjs`, das den HEMS-Artikel enthält.
  - Ursprungs-Scripts der Ziele enthalten die übernommenen Teile automatisch.
- Die beiden eigenständigen Quell-Scripts tragen zusätzlich `status: 'entwurf'` und einen Hinweis.
- Kein anderer Artikel verlinkt auf die drei Quellen, auch nicht über „Weitere Ratgeber“. Links müssen deshalb nicht umgebogen werden.

**pe**

- `src/lib/seo/ratgeber-redirects.mjs` enthält drei Einträge (301/308 permanent). Sie greifen vor jedem Seiten-Rendering.

## Reihenfolge beim Ausrollen

1. pe deployen. Ab dann leiten die alten URLs weiter, auch wenn die Quellen im CMS noch veröffentlicht sind.
2. pe-cms deployen.
3. `node scripts/ratgeber/migrate-2026-09-30-zusammenlegung.mjs` als Vorschau ausführen. Erwartet: `6 Teile übernommen · 3 Quellen auf Entwurf`.
4. Dasselbe mit `--apply` ausführen.

Umgekehrt wären die alten URLs zwischen Migration und Frontend-Deploy 404.

## Getestet

- **Migration gegen eine Kopie der Live-Daten:**
  - Vorschau, `--apply` und ein zweiter Lauf ergeben: 6 Teile übernommen, 3 Quellen als Entwurf, danach 0 Änderungen.
  - Die neuen Abschnitte stehen an der richtigen Stelle.
- **Ursprungs-Scripts danach erneut ausgeführt** (beide Quell-Scripts, das Mix-Script und die drei Ziel-Scripts):
  - Die Quellen bleiben Entwurf.
  - Die Ziele behalten die übernommenen Teile.
  - Die Migration meldet weiterhin 0 Änderungen.
- **Frontend (lokal):** Alle drei alten Pfade antworten mit 308 auf das richtige Ziel.
