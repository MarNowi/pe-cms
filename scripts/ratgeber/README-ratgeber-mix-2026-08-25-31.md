# Ratgeber-Mix 25.–31.08.2026

Sieben vertiefende Beiträge mit täglichem Themenwechsel. Die Veröffentlichung wird nach dem bestehenden Content-Migrationsmuster automatisch auf 07:00 Uhr Europe/Berlin gesetzt.

| Datum | Kategorie | Slug |
| --- | --- | --- |
| 25.08.2026 | Solaranlage | `solarmodule-40-jahre-garantie-produkt-leistung` |
| 26.08.2026 | Wärmepumpe | `waermepumpe-richtig-aufstellen-standort-schall` |
| 27.08.2026 | Stromspeicher | `stromspeicher-waermepumpe-nachts-versorgen` |
| 28.08.2026 | Wallbox | `wallbox-phasenumschaltung-pv-ueberschussladen` |
| 29.08.2026 | Repowering | `pv-anlage-dachsanierung-demontage-repowering` |
| 30.08.2026 | Strom & Energiemanagement | `dynamischer-stromtarif-paragraf-14a-netzentgelt` |
| 31.08.2026 | Stromspeicher / Gewerbe | `gewerbespeicher-richtig-auslegen-lastgang-kw-kwh` |

## Inhaltliche Leitplanken

- Anschluss an bestehende Gewinner- und Wissenscluster statt Keyword-Duplikate.
- Interne Links auf passende bestehende PEAK-Ratgeber und Produktseiten.
- Gewerbespeicher bleibt bewusst im Pfad `/stromspeicher/`.
- Keine Titelbilder werden per Migration gesetzt; vorhandene Media-Verknüpfungen werden vom Upsert nicht überschrieben.
- Technische und regulatorische Angaben wurden zum Stand 22.08.2026 gegen Primärquellen beziehungsweise Herstellerdokumentation geprüft.

## Quellencheck

Für aktuelle bzw. regelungsabhängige Aussagen wurden insbesondere geprüft:

- Bürgerliches Gesetzbuch §§ 443 und 479 (Garantie)
- AIKO, Vorstellung Z-Serie 2026 (40 Jahre Produkt- und Leistungsgarantie)
- Bauordnung NRW § 6 sowie LAI/Umweltbundesamt zu Wärmepumpen-Schall und Aufstellung
- Bundesnetzagentur zu dynamischen Stromtarifen und § 14a Netzentgeltmodulen
- Herstellerdokumentation zum AC-Laden und zur 1-/3-Phasenumschaltung (6 A Mindestladestrom / ca. 1,38 bzw. 4,14 kW)

## Ausführung

`run-ratgeber-mix-2026-08-25-31-once.mjs` legt die Inhalte einmalig an bzw. aktualisiert sie.

`schedule-ratgeber-mix-2026-08-25-31-once.mjs` setzt anschließend die Veröffentlichungstermine. Beide Schritte werden über `package.json` vor `next start` aufgerufen und über `_content_migrations` idempotent abgesichert.
