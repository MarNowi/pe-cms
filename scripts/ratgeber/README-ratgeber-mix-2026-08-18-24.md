# Ratgeber-Mix 18.–24.08.2026

Dieser Patch setzt den Ratgeber nach dem Wärmepumpen-Cluster bewusst mit wechselnden Themengebieten fort. Ziel ist ein täglicher Rhythmus aus Smart Meter, Stromspeicher, § 14a, Elektro-/PV-Praxis, Mehrfamilienhaus und regionalem Westnetz-Content.

## Neue Artikel

- `smart-meter-auslesen-verbrauchsdaten-trudi.mjs`
- `stromspeicher-kapazitaet-leistung-kw-kwh.mjs`
- `steuerbox-paragraf-14a-smart-meter-hems.mjs`
- `zaehlerschrank-pv-waermepumpe-smart-meter.mjs`
- `mieterstrom-gemeinschaftliche-gebaeudeversorgung-2026.mjs`
- `lastgang-15-minuten-werte-verstehen.mjs`
- `westnetz-smart-meter-steuerbox-2026.mjs`

## Inhaltliche Leitlinie

Der Cluster kopiert keine Wettbewerber-Themenlisten. Er nutzt reale Such- und Kundenfragen als Ausgangspunkt und verbindet sie mit PEAK-Praxis:

- konkrete Technik statt allgemeiner Definitionen,
- Netzbetreiber- und Messstellenbetreiber-Praxis,
- Zählerschrank und Schnittstellen,
- Zusammenspiel von PV, Speicher, Wärmepumpe, Wallbox und HEMS,
- aktuelle gesetzliche und technische Primärquellen.

Der Smart-Meter-Ausleseartikel enthält ausdrücklich die lokale Auslesung über die HAN-Schnittstelle und die **TRuDI Transparenz- und Displaysoftware**. Verlinkt sind die offiziellen Informationen der PTB sowie die aktuelle Westnetz-Anleitung zur HAN-Auslesung.

## Einspielen in Payload/MongoDB

Nach Merge wird der Cluster beim nächsten Start einmalig über

```bash
node scripts/ratgeber/run-ratgeber-mix-2026-08-18-24-once.mjs
```

eingespielt.

Der Migrationsmarker verhindert, dass der komplette Cluster bei jedem Neustart erneut geschrieben wird.

## Geplante Veröffentlichung

Der bereits bewährte Veröffentlichungszeitpunkt bleibt unverändert bei **07:00 Uhr Europe/Berlin**. Im August entspricht das 05:00 UTC.

- 18.08.2026, 07:00 – Smart Meter auslesen: Verbrauchsdaten, 15-Minuten-Werte und TRuDI
- 19.08.2026, 07:00 – Stromspeicher: kW oder kWh? Kapazität und Leistung
- 20.08.2026, 07:00 – Steuerbox nach § 14a: Smart Meter, Steuerbox und HEMS
- 21.08.2026, 07:00 – Zählerschrank für PV, Wärmepumpe und Smart Meter
- 22.08.2026, 07:00 – Mieterstrom oder gemeinschaftliche Gebäudeversorgung 2026
- 23.08.2026, 07:00 – Lastgang verstehen: 15-Minuten-Werte, PV und Speicher
- 24.08.2026, 07:00 – Westnetz Smart Meter & Steuerbox 2026

Der Zeitplan wird einmalig gesetzt über:

```bash
node scripts/ratgeber/schedule-ratgeber-mix-2026-08-18-24-once.mjs
```

Die öffentliche Ratgeber-Access-Regel blendet Artikel mit zukünftigem `publishedAt` bis zum jeweiligen Zeitpunkt aus.

## Fachlicher Stand

Geprüft am 15.08.2026 gegen aktuelle Primärquellen, insbesondere:

- Bundesnetzagentur zu § 14a EnWG und steuerbaren Verbrauchseinrichtungen,
- Messstellenbetriebsgesetz §§ 55, 61 und 62,
- § 42b EnWG zur gemeinschaftlichen Gebäudeversorgung,
- BMWE-FAQ zu Mieterstrom und gemeinschaftlicher Gebäudeversorgung,
- PTB zur Transparenz- und Displaysoftware TRuDI,
- VDE FNN zu Steuerbox / Steuerungs-Administration,
- Westnetz HAN-Anleitung sowie technische Anforderungen an Zählerplätze und §-14a-Steuerung.
