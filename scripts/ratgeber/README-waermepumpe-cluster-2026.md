# Wärmepumpen-Cluster 2026

Dieser Patch ergänzt sieben neue Wärmepumpen-Ratgeber und aktualisiert bestehende Artikel auf den Förderstand seit 21.07.2026.

## Neue Artikel

- `heizlastberechnung-waermepumpe.mjs`
- `waermepumpe-richtig-einstellen.mjs`
- `hydraulischer-abgleich-waermepumpe.mjs`
- `pufferspeicher-waermepumpe.mjs`
- `waermepumpentarif-oder-dynamischer-stromtarif.mjs`
- `monoblock-oder-split-waermepumpe.mjs`
- `waermepumpe-lebensdauer-wartung.mjs`

## Aktualisierte Artikel

- `welche-waermepumpe-fuer-mein-haus.mjs`
  - KfW-Förderhöchstbetrag erste Wohneinheit auf 28.000 € aktualisiert
  - alten 5-%-Effizienzbonus entfernt
  - Förderhinweise auf Stand 21.07.2026 gebracht
  - interne Links zu Heizlast, Monoblock/Split und Förderung ergänzt
- `waermepumpe-und-photovoltaik.mjs`
  - veralteten Effizienzbonus entfernt
  - Aussagen zu PV-Deckung und Speicherwirtschaftlichkeit weniger pauschal formuliert
  - Kaskadenmessung und §14a berücksichtigt
  - interne Links zu Tarifvergleich, Messkonzept 8 und Förderung ergänzt

## Einspielen in Payload/MongoDB

Nach Merge in einer Umgebung mit gesetzter `DATABASE_URL` ausführen:

```bash
node scripts/ratgeber/run-waermepumpe-cluster-2026.mjs
```

Der Runner aktualisiert die beiden bestehenden Artikel, den Förderartikel und legt die sieben neuen Artikel per `upsertRatgeberArticle()` an.

## Geplante Veröffentlichung

Payload liefert nicht angemeldeten Besuchern nur Ratgeber aus, deren Status `veroeffentlicht` ist und deren `publishedAt` nicht in der Zukunft liegt. Ein zukünftiger Zeitpunkt im Feld **Veröffentlichen am** ist damit zugleich die Veröffentlichungsplanung.

Für diesen Cluster wird der Zeitplan einmalig über

```bash
node scripts/ratgeber/schedule-waermepumpe-cluster-2026-once.mjs
```

gesetzt:

- 11.08.2026, 07:00 Uhr – Heizlastberechnung
- 12.08.2026, 07:00 Uhr – Wärmepumpe richtig einstellen
- 13.08.2026, 07:00 Uhr – Hydraulischer Abgleich
- 14.08.2026, 07:00 Uhr – Pufferspeicher
- 15.08.2026, 07:00 Uhr – Wärmepumpentarif oder dynamischer Stromtarif
- 16.08.2026, 07:00 Uhr – Monoblock oder Split
- 17.08.2026, 07:00 Uhr – Lebensdauer und Wartung

Die Migration setzt einen Marker in `_content_migrations` und überschreibt spätere manuelle Terminänderungen nicht erneut.

## Fachlicher Stand

Geprüft am 11.08.2026 gegen die aktuellen offiziellen Informationen von KfW, Bundesnetzagentur und § 41a EnWG.
