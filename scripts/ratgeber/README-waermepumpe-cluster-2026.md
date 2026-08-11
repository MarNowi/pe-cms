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

Nach Merge in einer Umgebung mit gesetzter `DATABASE_URL` und dem korrekten `PAYLOAD_DB_NAME` ausführen:

```bash
node scripts/ratgeber/run-waermepumpe-cluster-2026.mjs
```

Der Runner aktualisiert die beiden bestehenden Artikel, den Förderartikel und legt die sieben neuen Artikel per `upsertRatgeberArticle()` an.

## Fachlicher Stand

Geprüft am 11.08.2026 gegen die aktuellen offiziellen Informationen von KfW, Bundesnetzagentur und § 41a EnWG.
