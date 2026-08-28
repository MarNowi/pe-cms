# Ratgeber-Mix 01.–07.09.2026

Sieben neue Ratgeber mit täglichem Themenwechsel. Die Veröffentlichung wird nach dem bestehenden Content-Migrationsmuster automatisch auf 07:00 Uhr Europe/Berlin gesetzt.

Der 31.08.2026 ist bereits mit `gewerbespeicher-richtig-auslegen-lastgang-kw-kwh` aus dem vorherigen Wochen-Mix belegt. Deshalb startet dieser Mix am 01.09. und läuft bis 07.09.

| Datum | Kategorie | Slug |
| --- | --- | --- |
| 01.09.2026 | Solaranlage | `pv-verschattung-leistungsoptimierer-stringdesign` |
| 02.09.2026 | Wärmepumpe | `waermepumpe-abtauung-vereisung-kondensat` |
| 03.09.2026 | Stromspeicher | `stromspeicher-aufstellort-keller-garage-brandschutz` |
| 04.09.2026 | Wallbox | `dienstwagen-zuhause-laden-wallbox-stromkosten-arbeitgeber` |
| 05.09.2026 | Strom & Energiemanagement | `hems-wetterprognose-strompreis-ladezustand` |
| 06.09.2026 | Repowering | `pv-anlage-fehlerdiagnose-stringmessung-isolation-hotspots` |
| 07.09.2026 | Solaranlage / aktuell | `eeg-2027-dach-pv-unter-25-kw` |

## Inhaltliche Leitplanken

- Echte Wissenslücken statt Varianten bestehender Überschriften.
- Täglicher Wechsel des Themenfelds.
- Interne Links auf bestehende PEAK-Ratgeber und Produktpfade.
- Regulatorische Aussagen mit Primärquellen und klarer Trennung zwischen geltendem Recht und politischem Entwurf.
- Kein pauschales Verkaufsversprechen bei Ertrag, Förderung, Batterie-Standort oder HEMS-Einsparung.
- Elektrische Diagnosearbeiten an PV-Strings werden ausdrücklich als Facharbeit eingeordnet.
- Keine Titelbilder werden per Migration gesetzt; Media-Verknüpfungen bleiben separat.

## Quellencheck

Besonders geprüft wurden:

- BMWE: EEG-Novelle und Netzanschlusspaket, Kabinettsbeschluss 29.07.2026
- BMF: Dienstwagen / häusliches Laden, Schreiben vom 21.07.2026
- Bundesnetzagentur: dynamische Stromtarife
- Fraunhofer ISE: prognosebasierte Optimierung, PV-Qualitätssicherung und Thermografie
- SMA: Verschattungsmanagement / Stringaufteilung sowie Isolationsmessung bei PV-Erdschluss
- Buderus: Vereisung, Abtauung und Kondensat bei Luft-Wasser-Wärmepumpen
- Sungrow: SBH Montage- und Umgebungsanforderungen

## Ausführung

`run-ratgeber-mix-2026-09-01-07-once.mjs` legt die Inhalte einmalig an beziehungsweise aktualisiert sie.

`schedule-ratgeber-mix-2026-09-01-07-once.mjs` setzt anschließend die Veröffentlichungstermine. Beide Schritte werden über `package.json` vor `next start` aufgerufen und über `_content_migrations` idempotent abgesichert.
