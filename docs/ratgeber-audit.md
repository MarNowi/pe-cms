# Ratgeber-Audit (Phase 1)

Stand: 28.09.2026 · Datenbasis: öffentliche Payload-API `cms.peak-energy.gmbh/api/ratgeber` (133 veröffentlichte Artikel) plus Code in `MarNowi/pe-cms` und `MarNowi/pe`. In dieser Phase wurde nichts geändert – weder Code noch Datenbank.

---

## 0. Kurzfassung

**Sofort relevant (unabhängig von der Cluster-Arbeit):**

1. **7 Repowering-Artikel sind live unsichtbar.** Unter `/repowering/<slug>` liegen im Frontend statische Leistungsseiten mit exakt denselben Slugs (`notstrom-backup`, `hems-monitoring`, `speicher-nachruesten`, `komponenten-tausch`, `rueckbau-montage`, `entsorgung-recycling`, `wirtschaftlichkeit-eeg`). Next.js liefert immer die statische Seite aus; die CMS-Artikel werden nie angezeigt, stehen aber in Listen, `llms.txt` und als Karten auf `/ratgeber?kategorie=repowering` – wer draufklickt, landet auf der Leistungsseite.
2. **7 interne Links in Artikeln führen auf 404** (falsche Kategorie im Pfad oder nicht existierende Slugs), Details in Abschnitt 8.1.
3. **Jede Kategorie-Korrektur ändert die URL.** Artikel-URLs sind `/{kategorie}/{slug}`, und die Artikelseite prüft die Kategorie (`getRatgeber(kategorie, slug)`). Wer die Kategorie ändert, erzeugt für die alte URL eine 404. Jede Verschiebung braucht also eine 301 im Frontend (`pe/next.config.mjs`).
4. **Das Suffix „WE ♥️ ENERGY“ steckt nicht (nur) im CMS**, sondern wird vom Frontend zentral an **jeden** Seitentitel gehängt (`pe/src/lib/seo/titles.ts` → `normalizePeakSeoTitle`). Wenn du es in den CMS-Feldern entfernst, ändert sich live nichts.

**Zahlen:**

| Kennzahl | Wert |
|---|---|
| Artikel gesamt (live) | 133 (Solaranlage 40, Wärmepumpe 24, Strom & EM 20, Stromspeicher 19, Repowering 18, Wallbox 12) |
| Artikel ohne einen einzigen internen Ratgeber-Link im Text | 74 |
| Artikel, auf die kein anderer Artikel verlinkt | 70 |
| Titelbilder, die in mehreren Artikeln verwendet werden | 12 Bilder in 27 Artikeln |
| Vorkommen „ehrlich…“ | 274 in 66 Artikeln, davon 71 × „ehrliche Einordnung / ehrlich eingeordnet“ |
| Artikel mit Sie-Form (ohne Zitate) | 16 |
| Artikel mit Link-Liste „Passende Ratgeber zum Weiterlesen“ am Ende | 20 |
| Dünne Artikel (< 500 Wörter, Gerüst „1. … / 2. Fazit“) | 10 |

**Empfohlene Kannibalisierungs-Entscheidungen (Freigabe nötig, Abschnitt 7):** 4 Zusammenlegungen mit 301, 7 verdeckte Repowering-Artikel bereinigen, restliche Gruppen klar abgrenzen.

---

## 1. Datenbasis und Export

### 1.1 So ist dieser Bericht entstanden

- Alle veröffentlichten Artikel (`status = veroeffentlicht`, `publishedAt ≤ jetzt`) über `GET /api/ratgeber?limit=1000&depth=1` gelesen – die API ist ohne Login lesbar, genau wie das Frontend sie nutzt.
- Entwürfe und geplante Artikel sind dort **nicht** enthalten. Vier Scripts in `scripts/ratgeber/` erzeugen Slugs, die live nicht existieren:
  - `lohnt-sich-eine-solaranlage-ohne-speicher`
  - `was-kostet-eine-solaranlage-ohne-speicher-fuer-einfamilienhaus`
  - `wallbox-einfamilienhaus-richtig-planen` (auf diesen Slug verlinkt bereits ein Live-Artikel → 404)
  - `waermepumpe-groesse-berechnen`

  Entweder wurden die Scripts nie ausgeführt, oder die Artikel sind Entwurf/geplant. Das klärt der Export (unten). Wichtig: Zwei davon würden bestehende Kannibalisierung verschärfen (siehe 7.4 und 7.10).

### 1.2 Export-Script (nur lesend)

Neu: `scripts/ratgeber/export-ratgeber.mjs`. Es liest die Collection `ratgebers` inkl. Entwürfen und geplanter Artikel, schreibt nichts.

```bash
# TSV-Übersicht (Slug, Titel, Kategorie, Cluster, Status, Datum, Bild, Alt, interne Links)
node scripts/ratgeber/export-ratgeber.mjs

# vollständiges JSON inkl. Inhalt und FAQ
node scripts/ratgeber/export-ratgeber.mjs --json --out=/tmp/ratgeber.json
```

Bitte einmal in Coolify ausführen und mir die TSV-Ausgabe schicken, damit ich die vier fehlenden Slugs und eventuelle Entwürfe einordnen kann.

---

## 2. Technischer Überblick

### 2.1 Collection `ratgeber` (pe-cms, `src/collections/Ratgeber.ts`)

| Feld | Typ | Bemerkung |
|---|---|---|
| `titel`, `slug` | text | Slug unique, wird normalisiert |
| `kategorie` | select | 6 Werte, bestimmt die URL |
| `lesezeit`, `publishedAt`, `status` | | `publishedAt` in der Zukunft = geplant |
| `teaser` | textarea (max. 420) | Karten + SEO-Fallback |
| `titelbild` | upload → `media` | Alt-Text liegt im Media-Dokument, nicht im Artikel |
| `zusammenfassung` | array richText | „Das Wesentliche in Kürze“ |
| `inhalt` | blocks | `text`, `tipp`, `hinweis`, `tabelle`, `bild`, `cta` |
| `faq` | array | wird als FAQ-Schema ausgegeben |
| `relatedArticles` | relationship | nur bei 1 Artikel gepflegt, im Frontend nicht ausgewertet |
| `seo.metaTitle`, `seo.metaDescription` | | |

Es gibt **kein** Feld für Unterthemen/Cluster. `upsertRatgeberArticle` (`_articleFactory.mjs`) überschreibt beim erneuten Ausführen eines Scripts `titel`, `kategorie`, `teaser`, `inhalt`, `faq`, `seo` komplett – spätere Änderungen per Migration würden durch ein erneutes Ausführen des Ursprungs-Scripts wieder überschrieben. Das ist für Phase 2/3 wichtig (siehe 10).

### 2.2 Routing und Kategorieseiten (pe)

| URL | Was dort liegt |
|---|---|
| `/{kategorie}/{slug}` | Artikelseite (`RatgeberArticlePage`), 404 bei falscher Kategorie |
| `/ratgeber` | Übersicht, 3 Featured-Artikel, alle Karten |
| `/ratgeber?kategorie=…` | gefilterte Liste – das ist die eigentliche „Kategorieseite“, flach nach Datum sortiert, Canonical mit Query-Parameter |
| `/strom-energiemanagement` | einzige echte Hub-Seite mit Gruppen (`GROUPS`, Slugs fest im Code), Rest unter „Weitere Themen“ |
| `/solaranlage`, `/stromspeicher` | Produktseiten, darunter die 6 neuesten Ratgeber der Kategorie |
| `/wallbox`, `/waermepumpe`, `/repowering` | Produktseiten ohne Ratgeber-Bereich |
| Artikelende | `RelatedRatgeberSection`: die 3 **neuesten** Artikel der Kategorie, nicht thematisch passend |

Auf `/strom-energiemanagement` landen heute 10 von 20 Artikeln unter „Weitere Themen“, weil die Gruppen fest verdrahtete Slug-Listen sind.

`FEATURED_ARTICLES` in `ratgeber/page.tsx` enthält Slugs, die es nicht gibt (z. B. `lohnt-sich-pv-auf-dem-gewerbedach`); die Auswahl funktioniert nur über den Titel-Fallback.

---

## 3. Verdeckte Repowering-Artikel

| CMS-Artikel (unsichtbar) | Statische Seite unter derselben URL | Inhaltliche Überschneidung |
|---|---|---|
| `notstrom-backup` | Leistungsseite Notstrom & Backup | Notstrom-Cluster (7.1) |
| `hems-monitoring` | Leistungsseite HEMS & Monitoring | HEMS-Cluster |
| `speicher-nachruesten` | Leistungsseite Speicher nachrüsten | `stromspeicher-nachruesten` (7.5) |
| `komponenten-tausch` | Leistungsseite Komponenten-Tausch | `alten-wechselrichter-tauschen-…` |
| `rueckbau-montage` | Leistungsseite Rückbau & Montage | `pv-anlage-dachsanierung-demontage-repowering` |
| `entsorgung-recycling` | Leistungsseite Entsorgung & Recycling | kein anderer Artikel – einziger Recycling-Ratgeber |
| `wirtschaftlichkeit-eeg` | Leistungsseite Wirtschaftlichkeit & EEG | `alte-pv-anlage-nach-20-jahren` (7.9) |

Weil diese Artikel nie unter ihrer URL erreichbar waren, braucht eine Bereinigung **keine** 301. Vorschlag pro Artikel:

- `entsorgung-recycling` → **neuer Slug** (z. B. `pv-module-entsorgen-recycling`), dann ist er erstmals erreichbar. Keine Überschneidung mit anderen Artikeln.
- `speicher-nachruesten`, `wirtschaftlichkeit-eeg`, `notstrom-backup` → **auf Entwurf setzen**, weil jeweils ein sichtbarer Artikel dieselbe Suchabsicht bedient. Inhalte können in Phase 4 in den sichtbaren Artikel übernommen werden, wenn du das willst.
- `hems-monitoring`, `komponenten-tausch`, `rueckbau-montage` → **neuer Slug** oder Entwurf, deine Wahl. Mit neuem Slug wären sie echte Ergänzungen im Repowering-Cluster „Umbau“.

Solange sie veröffentlicht bleiben, sollten sie mindestens aus Listen und `llms.txt` herausgefiltert werden.

---

## 4. Alle Artikel

„Links raus/rein“ = interne Links auf andere Ratgeber im Fließtext / Anzahl anderer Ratgeber, die auf diesen Artikel verlinken (Stand heute). „Cluster“ ist mein Vorschlag für Phase 2; steht dahinter eine andere Kategorie in Klammern, schlage ich eine Verschiebung vor.

| # | Titel | Slug | Kategorie (heute) | Datum | Cluster (Vorschlag) | Links raus/rein | Aktion |
|---|---|---|---|---|---|---|---|
| 1 | Was kostet eine Solaranlage für ein Einfamilienhaus? | `kosten-solaranlage-einfamilienhaus` | Solaranlage | 2026-03-18 | Kosten & Wirtschaftlichkeit | 0/0 | → zusammenlegen in `kosten-solaranlage-mit-speicher-einfamilienhaus` (301) |
| 2 | PV-Anlage planen: So gehst du bei Dach, Größe und Speicher richtig vor | `pv-anlage-planen` | Solaranlage | 2026-03-18 | Planung & Anlagengröße | 0/0 |  |
| 3 | Was kostet eine Solaranlage mit Speicher für ein Einfamilienhaus? | `kosten-solaranlage-mit-speicher-einfamilienhaus` | Solaranlage | 2026-03-24 | Kosten & Wirtschaftlichkeit | 0/0 |  |
| 4 | Ab wieviel qm lohnt sich eine Solaranlage? | `ab-wieviel-qm-lohnt-sich-eine-solaranlage` | Solaranlage | 2026-03-24 | Planung & Anlagengröße | 0/0 |  |
| 5 | Was kostet eine 10 kWp Solaranlage mit Speicher? | `kosten-10-kwp-solaranlage-mit-speicher` | Solaranlage | 2026-03-24 | Kosten & Wirtschaftlichkeit | 0/0 |  |
| 6 | Was kostet eine 15 kWp Solaranlage mit Speicher? | `kosten-15-kwp-solaranlage-mit-speicher` | Solaranlage | 2026-03-24 | Kosten & Wirtschaftlichkeit | 0/0 |  |
| 7 | Solaranlage mit oder ohne Speicher: Was ist sinnvoller? | `solaranlage-mit-oder-ohne-speicher` | Solaranlage | 2026-03-24 | Planung & Anlagengröße | 0/0 |  |
| 8 | Braucht man einen Stromspeicher? | `braucht-man-einen-stromspeicher` | Solaranlage | 2026-03-24 | Nutzen & Speichergröße (Stromspeicher) | 0/0 | → zusammenlegen in `lohnt-sich-ein-stromspeicher` (301) |
| 9 | Was bringt eine Solaranlage im Winter? | `was-bringt-eine-solaranlage-im-winter` | Solaranlage | 2026-03-24 | Ertrag & Technik | 0/2 |  |
| 10 | Wie viel Autarkie ist realistisch? | `wie-viel-autarkie-ist-realistisch` | Solaranlage | 2026-03-24 | Speicher & Eigenverbrauch (Strom & EM) | 0/0 | → zusammenlegen in `eigenverbrauch-optimieren-100-prozent-autarkie` (301) |
| 11 | Wie viel Strom erzeugt eine 10 kWp Solaranlage? | `wie-viel-strom-erzeugt-eine-10-kwp-solaranlage` | Solaranlage | 2026-03-24 | Ertrag & Technik | 0/0 |  |
| 12 | Wie viel Strom erzeugt eine 15 kWp Solaranlage? | `wie-viel-strom-erzeugt-eine-15-kwp-solaranlage` | Solaranlage | 2026-03-24 | Ertrag & Technik | 0/0 |  |
| 13 | Wie groß sollte eine Solaranlage für ein Einfamilienhaus sein? | `wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein` | Solaranlage | 2026-03-24 | Planung & Anlagengröße | 0/1 |  |
| 14 | Ost-West oder Süddach: Was ist für Solaranlagen sinnvoller? | `ost-west-oder-sueddach-solaranlage` | Solaranlage | 2026-03-24 | Planung & Anlagengröße | 0/1 |  |
| 15 | Solaranlage für Wärmepumpe auslegen: Worauf kommt es an? | `solaranlage-fuer-waermepumpe-auslegen` | Solaranlage | 2026-03-24 | Planung & Anlagengröße | 0/0 |  |
| 16 | Solaranlage für E-Auto auslegen: Worauf kommt es an? | `solaranlage-fuer-e-auto-auslegen` | Solaranlage | 2026-03-24 | Planung & Anlagengröße | 0/0 |  |
| 17 | Typische Fehler bei Solaranlagen: Worauf sollte man achten? | `typische-fehler-bei-solaranlagen` | Solaranlage | 2026-03-25 | Planung & Anlagengröße | 0/1 |  |
| 18 | Hybrid-Wechselrichter oder getrennte Geräte: Was ist sinnvoller bei PV mit Speicher? | `hybrid-wechselrichter-oder-getrennte-geraete` | Solaranlage | 2026-05-06 | Ertrag & Technik | 0/0 |  |
| 19 | Solardachpflicht NRW 2026: Was bei Neubau und Sanierung wirklich gilt | `solardachpflicht-nrw-2026` | Solaranlage | 2026-05-09 | Förderung, Steuern & Anmeldung | 0/0 |  |
| 20 | 0 € Anzahlung bei der Solaranlage: Was steckt wirklich dahinter? | `null-euro-anzahlung-photovoltaik` | Solaranlage | 2026-05-09 | Anbieterwahl, Verträge & Garantie | 0/1 |  |
| 21 | PV in der Landwirtschaft: Was bei Stalldach, Asbest und Lastprofil wirklich anders ist | `pv-landwirtschaft-stalldach` | Solaranlage | 2026-05-27 | Gewerbe, Landwirtschaft & Mehrfamilienhaus | 3/2 |  |
| 22 | Lohnt sich PV auf dem Gewerbedach? Wirtschaftlichkeitsrechnung an einem Beispielbetrieb | `pv-gewerbe-wirtschaftlichkeit-beispielrechnung` | Solaranlage | 2026-05-27 | Gewerbe, Landwirtschaft & Mehrfamilienhaus | 2/2 |  |
| 23 | Solaranlage auf dem Gewerbedach: Was bei Hallen, Ställen und Werkstätten anders ist | `solaranlage-gewerbedach` | Solaranlage | 2026-05-27 | Gewerbe, Landwirtschaft & Mehrfamilienhaus | 0/3 |  |
| 24 | PV-Anlage anmelden: Netzbetreiber, Marktstammdatenregister und Finanzamt Schritt für Schritt | `pv-anlage-anmelden-marktstammdatenregister` | Solaranlage | 2026-05-27 | Förderung, Steuern & Anmeldung | 7/1 |  |
| 25 | Garantie vs. Gewährleistung bei der Solaranlage: Wer haftet wofür – und was im Ernstfall wirklich greift | `garantie-vs-gewaehrleistung-pv-anlage` | Solaranlage | 2026-05-27 | Anbieterwahl, Verträge & Garantie | 1/3 |  |
| 26 | Solarteur insolvent: Was jetzt mit Anlage, Anzahlung und Garantie zu tun ist | `solarteur-insolvent-was-tun` | Solaranlage | 2026-05-27 | Anbieterwahl, Verträge & Garantie | 1/2 |  |
| 27 | Wer darf Photovoltaikanlagen installieren? | `wer-darf-photovoltaikanlagen-installieren` | Solaranlage | 2026-07-15 | Anbieterwahl, Verträge & Garantie | 0/0 |  |
| 28 | Amortisation der PV-Anlage: Wann sie sich wirklich bezahlt gemacht hat | `amortisation-pv-anlage` | Solaranlage | 2026-08-09 | Kosten & Wirtschaftlichkeit | 0/0 |  |
| 29 | Photovoltaik und Steuern: 0 % Mehrwertsteuer, Einkommensteuer und was 2026 gilt | `photovoltaik-steuern` | Solaranlage | 2026-08-09 | Förderung, Steuern & Anmeldung | 0/0 |  |
| 30 | Photovoltaik-Förderung 2026: Was es wirklich gibt – und was nur gut klingt | `photovoltaik-foerderung` | Solaranlage | 2026-08-09 | Förderung, Steuern & Anmeldung | 0/0 |  |
| 31 | Einspeisevergütung Photovoltaik 2026: Was gilt aktuell? | `einspeiseverguetung-photovoltaik-2026` | Solaranlage | 2026-08-10 | Förderung, Steuern & Anmeldung | 0/2 |  |
| 32 | Zählerschrank für PV, Wärmepumpe und Smart Meter: Wann muss er wirklich erneuert werden? | `zaehlerschrank-pv-waermepumpe-smart-meter` | Solaranlage | 2026-08-21 | Ertrag & Technik | 2/1 |  |
| 33 | Mieterstrom oder gemeinschaftliche Gebäudeversorgung: Was ist 2026 sinnvoller? | `mieterstrom-gemeinschaftliche-gebaeudeversorgung-2026` | Solaranlage | 2026-08-22 | Gewerbe, Landwirtschaft & Mehrfamilienhaus | 0/0 |  |
| 34 | 40 Jahre Garantie auf Solarmodule: Was Produkt- und Leistungsgarantie wirklich wert sind | `solarmodule-40-jahre-garantie-produkt-leistung` | Solaranlage | 2026-08-25 | Anbieterwahl, Verträge & Garantie | 1/0 |  |
| 35 | Verschattung bei Photovoltaik: Wann Leistungsoptimierer helfen – und wann gutes Stringdesign besser ist | `pv-verschattung-leistungsoptimierer-stringdesign` | Solaranlage | 2026-09-01 | Planung & Anlagengröße | 0/0 |  |
| 36 | EEG 2027: Was der Kabinettsentwurf für neue Dach-PV unter 25 kW vorsieht – und was noch nicht beschlossen ist | `eeg-2027-dach-pv-unter-25-kw` | Solaranlage | 2026-09-07 | Förderung, Steuern & Anmeldung | 3/0 |  |
| 37 | Solarmodule voll belegen oder Dachfläche freilassen? Warum größer oft sinnvoller ist | `solarmodule-dach-voll-belegen-dachflaeche-freilassen` | Solaranlage | 2026-09-13 | Planung & Anlagengröße | 2/0 |  |
| 38 | PV-Anlage liefert weniger als berechnet: Welche Abweichung ist normal? | `pv-anlage-liefert-weniger-als-berechnet-abweichung-normal` | Solaranlage | 2026-09-19 | Ertrag & Technik | 2/0 |  |
| 39 | Was passiert mit meiner PV-Anlage bei Stromausfall? Warum Solarstrom allein nicht reicht | `pv-anlage-bei-stromausfall-solarstrom-reicht-nicht` | Solaranlage | 2026-09-25 | Notstrom & Ersatzstrom (Stromspeicher) | 1/0 | → Kategorie **Stromspeicher** (301) |
| 40 | Alle sind Testsieger – aber was wurde eigentlich wie getestet? | `photovoltaik-testsieger` | Solaranlage | 2026-09-28 | Anbieterwahl, Verträge & Garantie | 2/0 |  |
| 41 | Stromspeicher nachrüsten: Geht das überhaupt? | `stromspeicher-nachruesten` | Stromspeicher | 2026-03-24 | Kosten, Förderung & Nachrüstung | 0/0 |  |
| 42 | Wie lange hält ein Stromspeicher? | `wie-lange-haelt-ein-stromspeicher` | Stromspeicher | 2026-03-24 | Technik, Lebensdauer & Aufstellort | 0/2 |  |
| 43 | Wie groß sollte ein Stromspeicher sein? | `wie-gross-sollte-ein-stromspeicher-sein` | Stromspeicher | 2026-03-24 | Nutzen & Speichergröße | 0/5 |  |
| 44 | Notstrom oder Ersatzstrom: Was ist der Unterschied? | `notstrom-oder-ersatzstrom` | Stromspeicher | 2026-03-24 | Notstrom & Ersatzstrom | 0/1 |  |
| 45 | Was kostet ein Stromspeicher? Anschaffung, Installation und laufende Kosten 2026 | `stromspeicher-kosten` | Stromspeicher | 2026-05-09 | Kosten, Förderung & Nachrüstung | 0/0 |  |
| 46 | Lohnt sich ein Stromspeicher? Eine ehrliche Einordnung für 2026 | `lohnt-sich-ein-stromspeicher` | Stromspeicher | 2026-05-09 | Nutzen & Speichergröße | 0/1 |  |
| 47 | Stromspeicher Förderung NRW 2026: Was wirklich verfügbar ist | `stromspeicher-foerderung-nrw` | Stromspeicher | 2026-05-09 | Kosten, Förderung & Nachrüstung | 0/0 |  |
| 48 | §14a EnWG für Stromspeicher: Was die Pflicht zur Steuerbarkeit bedeutet | `paragraf-14a-enwg-stromspeicher` | Stromspeicher | 2026-05-09 | Technik, Lebensdauer & Aufstellort | 0/2 |  |
| 49 | Cloud-Speicher und virtuelle Stromspeicher: Lohnt sich das wirklich? | `cloud-speicher-stromspeicher-vergleich` | Stromspeicher | 2026-05-09 | Kosten, Förderung & Nachrüstung | 0/0 |  |
| 50 | Cloud-EMS vs. lokales EMS: Wem gehören deine Energiedaten? | `cloud-ems-vs-lokales-ems-energiedaten` | Stromspeicher | 2026-05-15 | Lokal, Cloud & Schnittstellen (Strom & EM) | 0/2 | → Kategorie **Strom & EM** (301) |
| 51 | Lastspitzenkappung mit Stromspeicher: Wann sich Peak Shaving im Gewerbe wirklich rechnet | `lastspitzenkappung-stromspeicher-gewerbe` | Stromspeicher | 2026-05-27 | Gewerbespeicher & Multi-Use | 1/5 |  |
| 52 | Multi-Use bei Stromspeicher: Wie ein Speicher mehrere Aufgaben gleichzeitig erledigt | `multi-use-stromspeicher` | Stromspeicher | 2026-05-27 | Gewerbespeicher & Multi-Use | 3/1 |  |
| 53 | Stromspeicher: kW oder kWh? Warum Kapazität und Leistung zwei völlig verschiedene Dinge sind | `stromspeicher-kapazitaet-leistung-kw-kwh` | Stromspeicher | 2026-08-19 | Nutzen & Speichergröße | 2/5 |  |
| 54 | Stromspeicher + Wärmepumpe: Kann die Batterie die Wärmepumpe nachts wirklich versorgen? | `stromspeicher-waermepumpe-nachts-versorgen` | Stromspeicher | 2026-08-27 | Nutzen & Speichergröße | 3/0 |  |
| 55 | Gewerbespeicher richtig auslegen: Warum Lastgang und kW wichtiger sein können als Jahresverbrauch und kWh | `gewerbespeicher-richtig-auslegen-lastgang-kw-kwh` | Stromspeicher | 2026-08-31 | Gewerbespeicher & Multi-Use | 4/0 |  |
| 56 | Wo darf ein Stromspeicher stehen? Keller, HWR, Garage, Temperatur und Brandschutz | `stromspeicher-aufstellort-keller-garage-brandschutz` | Stromspeicher | 2026-09-03 | Technik, Lebensdauer & Aufstellort | 1/0 |  |
| 57 | Warum ein Stromspeicher im Winter oft leer bleibt – und warum das kein Fehler ist | `stromspeicher-im-winter-oft-leer` | Stromspeicher | 2026-09-11 | Nutzen & Speichergröße | 2/0 |  |
| 58 | Speicherwirkungsgrad erklärt: Warum aus 10 kWh geladen nicht 10 kWh nutzbar werden | `speicherwirkungsgrad-verluste-geladen-nutzbar` | Stromspeicher | 2026-09-17 | Technik, Lebensdauer & Aufstellort | 2/0 |  |
| 59 | Batteriezellen im Stromspeicher: Was Zellspannung, Temperatur und Balancing über den Akku verraten | `batteriezellen-stromspeicher-zellspannung-temperatur-balancing` | Stromspeicher | 2026-09-23 | Technik, Lebensdauer & Aufstellort | 2/0 |  |
| 60 | Wallbox zu Hause laden: Worauf kommt es an? | `wallbox-zu-hause-laden` | Wallbox | 2026-03-24 | Planung, Kosten & Anmeldung | 0/0 |  |
| 61 | Was kostet eine Wallbox? Anschaffung, Installation und laufende Kosten 2026 | `wallbox-kosten` | Wallbox | 2026-03-27 | Planung, Kosten & Anmeldung | 0/0 |  |
| 62 | 11 kW oder 22 kW Wallbox? Was im Einfamilienhaus wirklich sinnvoll ist | `wallbox-11-oder-22-kw` | Wallbox | 2026-03-27 | Planung, Kosten & Anmeldung | 0/3 |  |
| 63 | Wallbox anmelden: Was muss ich beim Netzbetreiber beachten? | `wallbox-anmelden-netzbetreiber` | Wallbox | 2026-03-27 | Planung, Kosten & Anmeldung | 0/2 |  |
| 64 | Wallbox mit PV laden: Wann es sich lohnt und worauf es wirklich ankommt | `wallbox-mit-pv-laden` | Wallbox | 2026-03-27 | Laden mit Solarstrom & bidirektional | 0/3 |  |
| 65 | §14a EnWG: Was die Pflicht zur Steuerbarkeit für Wallbox, Wärmepumpe und Speicher bedeutet | `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen` | Wallbox | 2026-05-06 | § 14a & Netzregeln (Strom & EM) | 0/2 | → Kategorie **Strom & EM** (301) |
| 66 | Bidirektionales Laden: Wenn das E-Auto zum Stromspeicher wird | `bidirektionales-laden` | Wallbox | 2026-07-29 | Laden mit Solarstrom & bidirektional | 0/0 |  |
| 67 | 1-phasig oder 3-phasig laden: Warum die Phasenumschaltung beim PV-Überschussladen wichtig ist | `wallbox-phasenumschaltung-pv-ueberschussladen` | Wallbox | 2026-08-28 | Laden mit Solarstrom & bidirektional | 2/2 |  |
| 68 | Dienstwagen zuhause laden: Wallbox, MID-Zähler, PV-Strom und Arbeitgeber-Erstattung | `dienstwagen-zuhause-laden-wallbox-stromkosten-arbeitgeber` | Wallbox | 2026-09-04 | Planung, Kosten & Anmeldung | 3/0 |  |
| 69 | PV-Überschussladen funktioniert nicht: Die häufigsten Ursachen und wie man sie findet | `pv-ueberschussladen-funktioniert-nicht-ursachen` | Wallbox | 2026-09-10 | Laden mit Solarstrom & bidirektional | 2/0 |  |
| 70 | Zwei E-Autos zuhause laden: Brauche ich zwei Wallboxen oder einen größeren Hausanschluss? | `zwei-e-autos-zuhause-laden-wallboxen-hausanschluss` | Wallbox | 2026-09-16 | Lastmanagement & mehrere Fahrzeuge | 1/1 |  |
| 71 | Lastmanagement bei Wallboxen: Wie verhindert man, dass der Hausanschluss überlastet wird? | `lastmanagement-wallbox-hausanschluss-ueberlastung` | Wallbox | 2026-09-22 | Lastmanagement & mehrere Fahrzeuge | 2/0 |  |
| 72 | Wärmepumpe im Altbau: Geht das überhaupt? | `waermepumpe-im-altbau` | Wärmepumpe | 2026-03-30 | Planung im Bestand & Heizsystem | 0/0 |  |
| 73 | Wärmepumpe mit Heizkörpern: Geht das wirklich? | `waermepumpe-mit-heizkoerpern` | Wärmepumpe | 2026-03-30 | Planung im Bestand & Heizsystem | 0/0 |  |
| 74 | Wärmepumpe Stromverbrauch berechnen: Wovon hängt er wirklich ab? | `waermepumpe-stromverbrauch-berechnen` | Wärmepumpe | 2026-03-30 | Kosten, Förderung, Strom & Tarife | 0/0 |  |
| 75 | Wärmepumpe Vorlauftemperatur erklärt: Warum sie so wichtig ist | `waermepumpe-vorlauftemperatur` | Wärmepumpe | 2026-03-30 | Planung im Bestand & Heizsystem | 0/1 |  |
| 76 | Wärmepumpe Kosten im Einfamilienhaus: Womit muss man realistisch rechnen? | `waermepumpe-kosten-einfamilienhaus` | Wärmepumpe | 2026-03-30 | Kosten, Förderung, Strom & Tarife | 0/0 |  |
| 77 | Welche Wärmepumpe für mein Haus? Luft, Sole und Wasser im Vergleich | `welche-waermepumpe-fuer-mein-haus` | Wärmepumpe | 2026-05-09 | Grundlagen & Auswahl | 3/0 |  |
| 78 | Wärmepumpe und Photovoltaik: Lohnt die Kombination wirklich? | `waermepumpe-und-photovoltaik` | Wärmepumpe | 2026-05-09 | Kosten, Förderung, Strom & Tarife | 3/1 |  |
| 79 | Wärmepumpe Schallpegel: Was Nachbarschaft und Genehmigung wirklich bedeuten | `waermepumpe-schallpegel` | Wärmepumpe | 2026-05-09 | Aufstellung, Schall & Winterbetrieb | 0/1 |  |
| 80 | Wärmepumpe Förderung 2026: Neue KfW-Regeln seit Juli | `waermepumpe-foerderung-2026` | Wärmepumpe | 2026-08-08 | Kosten, Förderung, Strom & Tarife | 0/2 |  |
| 81 | § 14a EnWG bei Wärmepumpen: Drosselung, Wärmepumpentarif und Messkonzept 8 | `14a-enwg-waermepumpe-messkonzept-8` | Wärmepumpe | 2026-08-08 | Kosten, Förderung, Strom & Tarife | 0/1 |  |
| 82 | Wie funktioniert eine Wärmepumpe? Das Prinzip verständlich erklärt | `wie-funktioniert-eine-waermepumpe` | Wärmepumpe | 2026-08-09 | Grundlagen & Auswahl | 0/0 |  |
| 83 | JAZ, COP und SCOP: Was die Effizienz-Kennzahlen der Wärmepumpe wirklich aussagen | `jaz-wirkungsgrad` | Wärmepumpe | 2026-08-09 | Grundlagen & Auswahl | 0/0 |  |
| 84 | Heizlastberechnung für Wärmepumpen: Warum die alte Heizung kein Maßstab ist | `heizlastberechnung-waermepumpe` | Wärmepumpe | 2026-08-11 | Planung im Bestand & Heizsystem | 0/1 |  |
| 85 | Wärmepumpe richtig einstellen: Heizkurve, Takten und Nachtabsenkung | `waermepumpe-richtig-einstellen` | Wärmepumpe | 2026-08-12 | Betrieb & Optimierung | 0/3 |  |
| 86 | Hydraulischer Abgleich bei Wärmepumpen: Warum er so wichtig ist | `hydraulischer-abgleich-waermepumpe` | Wärmepumpe | 2026-08-13 | Planung im Bestand & Heizsystem | 0/1 |  |
| 87 | Pufferspeicher bei Wärmepumpen: notwendig oder Effizienzkiller? | `pufferspeicher-waermepumpe` | Wärmepumpe | 2026-08-14 | Planung im Bestand & Heizsystem | 0/1 |  |
| 88 | Wärmepumpentarif oder dynamischer Stromtarif: Was lohnt sich 2026? | `waermepumpentarif-oder-dynamischer-stromtarif` | Wärmepumpe | 2026-08-15 | Kosten, Förderung, Strom & Tarife | 0/1 |  |
| 89 | Monoblock oder Split-Wärmepumpe: Was ist für ein Einfamilienhaus sinnvoller? | `monoblock-oder-split-waermepumpe` | Wärmepumpe | 2026-08-16 | Grundlagen & Auswahl | 0/2 |  |
| 90 | Lebensdauer und Wartung einer Wärmepumpe: Was nach 10, 15 oder 20 Jahren passiert | `waermepumpe-lebensdauer-wartung` | Wärmepumpe | 2026-08-17 | Betrieb & Optimierung | 0/0 |  |
| 91 | Wärmepumpe richtig aufstellen: Warum der Standort über Schall, Effizienz und Ärger entscheidet | `waermepumpe-richtig-aufstellen-standort-schall` | Wärmepumpe | 2026-08-26 | Aufstellung, Schall & Winterbetrieb | 2/1 |  |
| 92 | Warum eine Wärmepumpe vereist: Abtauung, Kondensat und Effizienz im Winter | `waermepumpe-abtauung-vereisung-kondensat` | Wärmepumpe | 2026-09-02 | Aufstellung, Schall & Winterbetrieb | 2/0 |  |
| 93 | Heizstab bei der Wärmepumpe: Wann er sinnvoll ist und wann er unnötig Strom verbraucht | `heizstab-waermepumpe-sinnvoll-stromverbrauch` | Wärmepumpe | 2026-09-12 | Betrieb & Optimierung | 2/1 |  |
| 94 | Wärmepumpe taktet ständig: Wie viele Starts sind normal und wann stimmt etwas nicht? | `waermepumpe-taktet-staendig-starts-normal` | Wärmepumpe | 2026-09-18 | Betrieb & Optimierung | 2/0 |  |
| 95 | Warmwasser mit Wärmepumpe: Welche Temperatur ist sinnvoll und was kostet Legionellenschutz? | `warmwasser-waermepumpe-temperatur-legionellenschutz-kosten` | Wärmepumpe | 2026-09-24 | Betrieb & Optimierung | 2/0 |  |
| 96 | Typische Fehler beim Repowering: Was viele falsch einschätzen | `typische-fehler-beim-repowering` | Repowering | 2026-04-10 | Entscheidung & Kosten | 0/1 |  |
| 97 | Was kostet ein Repowering einer alten Solaranlage? | `repowering-kosten` | Repowering | 2026-04-10 | Entscheidung & Kosten | 0/0 |  |
| 98 | Repowering vs. Neuanlage: Was ist bei einer alten Solaranlage sinnvoller? | `repowering-vs-neuanlage` | Repowering | 2026-04-10 | Entscheidung & Kosten | 0/0 |  |
| 99 | Alte PV-Anlage nach 20 Jahren: Weiterbetreiben, repowern oder abbauen? | `alte-pv-anlage-nach-20-jahren` | Repowering | 2026-04-10 | Entscheidung & Kosten | 0/2 |  |
| 100 | Repowering einer Solaranlage: Wann lohnt es sich wirklich? | `repowering-solaranlage` | Repowering | 2026-04-10 | Entscheidung & Kosten | 0/1 |  |
| 101 | Wirtschaftlichkeit nach dem EEG-Ende: Weiterbetrieb, Umrüstung oder Repowering? | `wirtschaftlichkeit-eeg` | Repowering | 2026-06-01 | Entscheidung & Kosten | 0/0 | verdeckt durch statische Seite |
| 102 | Speicher nachrüsten beim Repowering: AC, DC – und wann sich was rechnet | `speicher-nachruesten` | Repowering | 2026-06-29 | Umbau, Erweiterung & Komponenten | 0/0 | verdeckt durch statische Seite |
| 103 | Rückbau und Montage: So läuft der Umbau einer PV-Anlage ab | `rueckbau-montage` | Repowering | 2026-06-29 | Umbau, Erweiterung & Komponenten | 0/0 | verdeckt durch statische Seite |
| 104 | Notstrom und Backup nachrüsten: Was beim Repowering möglich wird | `notstrom-backup` | Repowering | 2026-06-29 | Umbau, Erweiterung & Komponenten | 0/0 | verdeckt durch statische Seite |
| 105 | HEMS und Monitoring nachrüsten: Die Altanlage endlich sichtbar machen | `hems-monitoring` | Repowering | 2026-06-29 | Umbau, Erweiterung & Komponenten | 0/2 | verdeckt durch statische Seite |
| 106 | PV-Module entsorgen: Recycling, Pflichten und was Altmodule noch wert sind | `entsorgung-recycling` | Repowering | 2026-06-29 | Umbau, Erweiterung & Komponenten | 0/1 | verdeckt durch statische Seite |
| 107 | Komponenten-Tausch: Wenn nicht die ganze Anlage neu muss | `komponenten-tausch` | Repowering | 2026-06-29 | Umbau, Erweiterung & Komponenten | 0/2 | verdeckt durch statische Seite |
| 108 | PV-Anlage und Dachsanierung: Alte Module abbauen, wiederverwenden oder gleich repowern? | `pv-anlage-dachsanierung-demontage-repowering` | Repowering | 2026-08-29 | Umbau, Erweiterung & Komponenten | 1/1 |  |
| 109 | Alte PV-Anlage prüfen statt blind tauschen: Stringmessung, Isolation, Hotspots und Ertragsfehler | `pv-anlage-fehlerdiagnose-stringmessung-isolation-hotspots` | Repowering | 2026-09-06 | Diagnose & Zustand | 2/2 |  |
| 110 | Alten Wechselrichter tauschen: Kann ich moderne Wechselrichter an alten PV-Modulen betreiben? | `alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module` | Repowering | 2026-09-08 | Umbau, Erweiterung & Komponenten | 2/0 |  |
| 111 | Alte PV-Module messen: Was Leerlaufspannung, Kurzschlussstrom und Kennlinie verraten | `alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie` | Repowering | 2026-09-14 | Diagnose & Zustand | 2/0 |  |
| 112 | Alte PV-Anlage erweitern: Darf eine neue Anlage neben der bestehenden betrieben werden? | `alte-pv-anlage-erweitern-neue-anlage-daneben` | Repowering | 2026-09-20 | Umbau, Erweiterung & Komponenten | 2/0 |  |
| 113 | PID, Hotspots, Mikrorisse und Delamination: Welche Alterungsfehler treten bei PV-Modulen auf? | `pid-hotspots-mikrorisse-delamination-pv-module` | Repowering | 2026-09-26 | Diagnose & Zustand | 2/0 |  |
| 114 | Smart Meter 2026: Wer einen braucht, was er kostet – und was er bei PV wirklich bringt | `smart-meter-2026-pv-kosten-pflicht-vorteile` | Strom & EM | 2026-08-10 | Smart Meter & Messdaten | 3/10 |  |
| 115 | Solarspitzengesetz 2026: 60-%-Regel, negative Strompreise und Smart Meter verständlich erklärt | `solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter` | Strom & EM | 2026-08-10 | § 14a & Netzregeln | 2/4 |  |
| 116 | Dynamischer Stromtarif mit PV und Speicher: Wann er sich wirklich lohnt – und wann nicht | `dynamischer-stromtarif-pv-speicher-lohnt-sich` | Strom & EM | 2026-08-10 | Strommarkt & Tarife | 2/6 |  |
| 117 | Negative Strompreise 2026: Problem für die PV-Anlage oder Chance für Speicher und E-Auto? | `negative-strompreise-2026-pv-speicher-eauto` | Strom & EM | 2026-08-10 | Strommarkt & Tarife | 2/4 |  |
| 118 | Zeitvariable Netzentgelte nach § 14a: Was Modul 3 bringt – und für wen es sich lohnt | `zeitvariable-netzentgelte-paragraph-14a-modul-3` | Strom & EM | 2026-08-10 | § 14a & Netzregeln | 3/3 |  |
| 119 | Stromspeicher aus dem Netz laden: Wann dynamisches Laden sinnvoll ist – und wann es nur den Akku verschleißt | `stromspeicher-aus-netz-laden-dynamisch-sinnvoll` | Strom & EM | 2026-08-10 | Speicher & Eigenverbrauch | 3/6 |  |
| 120 | HEMS: Was ein Home Energy Management System wirklich macht – und warum die Hersteller-App nicht dasselbe ist | `hems-home-energy-management-system-hersteller-app` | Strom & EM | 2026-08-10 | HEMS & Steuerung | 6/5 |  |
| 121 | PV, Speicher, Wallbox und Wärmepumpe intelligent steuern: So arbeitet ein Energiesystem im Alltag | `pv-speicher-wallbox-waermepumpe-intelligent-steuern` | Strom & EM | 2026-08-10 | HEMS & Steuerung | 5/3 |  |
| 122 | Eigenverbrauch optimieren: Warum 100 % Autarkie nicht das richtige Ziel ist | `eigenverbrauch-optimieren-100-prozent-autarkie` | Strom & EM | 2026-08-10 | Speicher & Eigenverbrauch | 3/0 |  |
| 123 | Strommarkt einfach erklärt: Warum Börsenstrompreis, Netzentgelt und dein Strompreis drei verschiedene Dinge sind | `strommarkt-einfach-erklaert-boersenstrompreis-netzentgelt-strompreis` | Strom & EM | 2026-08-10 | Strommarkt & Tarife | 6/0 |  |
| 124 | Smart Meter auslesen: So kommst du an Verbrauchsdaten, 15-Minuten-Werte und TRuDI | `smart-meter-auslesen-verbrauchsdaten-trudi` | Strom & EM | 2026-08-18 | Smart Meter & Messdaten | 2/2 |  |
| 125 | Steuerbox nach § 14a: Was Smart Meter, Steuerbox und HEMS jeweils machen | `steuerbox-paragraf-14a-smart-meter-hems` | Strom & EM | 2026-08-20 | § 14a & Netzregeln | 2/2 |  |
| 126 | Lastgang verstehen: Was 15-Minuten-Werte über Verbrauch, PV und Speicher verraten | `lastgang-15-minuten-werte-verstehen` | Strom & EM | 2026-08-23 | Smart Meter & Messdaten | 3/1 |  |
| 127 | Westnetz Smart Meter & Steuerbox 2026: HAN, TRuDI, § 14a und Zählerschrank erklärt | `westnetz-smart-meter-steuerbox-2026` | Strom & EM | 2026-08-24 | Smart Meter & Messdaten | 3/0 |  |
| 128 | Dynamischer Stromtarif trifft § 14a: Was passiert, wenn Börsenpreis und Netzentgelt gegeneinander arbeiten? | `dynamischer-stromtarif-paragraf-14a-netzentgelt` | Strom & EM | 2026-08-30 | Strommarkt & Tarife | 2/1 |  |
| 129 | Warum ein gutes HEMS in die Zukunft schaut: Wetterprognose, Strompreis und Ladezustand zusammen planen | `hems-wetterprognose-strompreis-ladezustand` | Strom & EM | 2026-09-05 | HEMS & Steuerung | 2/2 |  |
| 130 | PV-Anlage abregeln oder Strom sinnvoll nutzen? Was ein HEMS bei Einspeisebegrenzung machen kann | `pv-anlage-abregeln-strom-nutzen-hems-einspeisebegrenzung` | Strom & EM | 2026-09-09 | HEMS & Steuerung | 2/0 |  |
| 131 | Was passiert bei Internetausfall mit PV, Speicher, Wallbox und HEMS? | `internetausfall-pv-speicher-wallbox-hems` | Strom & EM | 2026-09-15 | Lokal, Cloud & Schnittstellen | 1/1 |  |
| 132 | Warum offene Schnittstellen bei PV, Speicher und HEMS wichtiger werden als die Hersteller-App | `offene-schnittstellen-pv-speicher-hems-hersteller-app` | Strom & EM | 2026-09-21 | Lokal, Cloud & Schnittstellen | 1/0 |  |
| 133 | Lokales HEMS oder Hersteller-Cloud: Was funktioniert noch, wenn Server oder Internet ausfallen? | `lokales-hems-hersteller-cloud-server-internet-ausfall` | Strom & EM | 2026-09-27 | Lokal, Cloud & Schnittstellen | 1/0 | → zusammenlegen in `cloud-ems-vs-lokales-ems-energiedaten` (301) |

---

## 5. Cluster-Vorschlag

Nach dem Vorbild von `/strom-energiemanagement`, aber als Feld im CMS statt als Slug-Liste im Code. Jede Kategorie bekommt 3–6 Cluster, jeder Artikel genau einen. Zusammengelegte und verdeckte Artikel sind hier nicht mehr aufgeführt. Der jeweils erste Artikel ist der Kandidat für den Einstiegsartikel des Clusters.

**Solaranlage**

- **Planung & Anlagengröße** (`planung`, 10): `pv-anlage-planen`, `wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein`, `ab-wieviel-qm-lohnt-sich-eine-solaranlage`, `solarmodule-dach-voll-belegen-dachflaeche-freilassen`, `ost-west-oder-sueddach-solaranlage`, `pv-verschattung-leistungsoptimierer-stringdesign`, `solaranlage-fuer-waermepumpe-auslegen`, `solaranlage-fuer-e-auto-auslegen`, `solaranlage-mit-oder-ohne-speicher`, `typische-fehler-bei-solaranlagen`
- **Kosten & Wirtschaftlichkeit** (`kosten`, 4): `kosten-solaranlage-mit-speicher-einfamilienhaus`, `kosten-10-kwp-solaranlage-mit-speicher`, `kosten-15-kwp-solaranlage-mit-speicher`, `amortisation-pv-anlage`
- **Ertrag & Technik** (`ertrag`, 6): `wie-viel-strom-erzeugt-eine-10-kwp-solaranlage`, `wie-viel-strom-erzeugt-eine-15-kwp-solaranlage`, `was-bringt-eine-solaranlage-im-winter`, `pv-anlage-liefert-weniger-als-berechnet-abweichung-normal`, `hybrid-wechselrichter-oder-getrennte-geraete`, `zaehlerschrank-pv-waermepumpe-smart-meter`
- **Förderung, Steuern & Anmeldung** (`recht`, 6): `photovoltaik-foerderung`, `einspeiseverguetung-photovoltaik-2026`, `eeg-2027-dach-pv-unter-25-kw`, `photovoltaik-steuern`, `pv-anlage-anmelden-marktstammdatenregister`, `solardachpflicht-nrw-2026`
- **Anbieterwahl, Verträge & Garantie** (`anbieter`, 6): `wer-darf-photovoltaikanlagen-installieren`, `photovoltaik-testsieger`, `garantie-vs-gewaehrleistung-pv-anlage`, `solarmodule-40-jahre-garantie-produkt-leistung`, `solarteur-insolvent-was-tun`, `null-euro-anzahlung-photovoltaik`
- **Gewerbe, Landwirtschaft & Mehrfamilienhaus** (`gewerbe`, 4): `solaranlage-gewerbedach`, `pv-gewerbe-wirtschaftlichkeit-beispielrechnung`, `pv-landwirtschaft-stalldach`, `mieterstrom-gemeinschaftliche-gebaeudeversorgung-2026`

**Stromspeicher**

- **Nutzen & Speichergröße** (`nutzen`, 5): `lohnt-sich-ein-stromspeicher`, `wie-gross-sollte-ein-stromspeicher-sein`, `stromspeicher-kapazitaet-leistung-kw-kwh`, `stromspeicher-waermepumpe-nachts-versorgen`, `stromspeicher-im-winter-oft-leer`
- **Kosten, Förderung & Nachrüstung** (`kosten`, 4): `stromspeicher-kosten`, `stromspeicher-foerderung-nrw`, `cloud-speicher-stromspeicher-vergleich`, `stromspeicher-nachruesten`
- **Technik, Lebensdauer & Aufstellort** (`technik`, 5): `wie-lange-haelt-ein-stromspeicher`, `speicherwirkungsgrad-verluste-geladen-nutzbar`, `batteriezellen-stromspeicher-zellspannung-temperatur-balancing`, `stromspeicher-aufstellort-keller-garage-brandschutz`, `paragraf-14a-enwg-stromspeicher`
- **Notstrom & Ersatzstrom** (`notstrom`, 2): `pv-anlage-bei-stromausfall-solarstrom-reicht-nicht`, `notstrom-oder-ersatzstrom`
- **Gewerbespeicher & Multi-Use** (`gewerbe`, 3): `lastspitzenkappung-stromspeicher-gewerbe`, `gewerbespeicher-richtig-auslegen-lastgang-kw-kwh`, `multi-use-stromspeicher`

**Wallbox**

- **Planung, Kosten & Anmeldung** (`planung`, 5): `wallbox-zu-hause-laden`, `wallbox-kosten`, `wallbox-11-oder-22-kw`, `wallbox-anmelden-netzbetreiber`, `dienstwagen-zuhause-laden-wallbox-stromkosten-arbeitgeber`
- **Laden mit Solarstrom & bidirektional** (`pv`, 4): `wallbox-mit-pv-laden`, `wallbox-phasenumschaltung-pv-ueberschussladen`, `pv-ueberschussladen-funktioniert-nicht-ursachen`, `bidirektionales-laden`
- **Lastmanagement & mehrere Fahrzeuge** (`last`, 2): `lastmanagement-wallbox-hausanschluss-ueberlastung`, `zwei-e-autos-zuhause-laden-wallboxen-hausanschluss`

**Wärmepumpe**

- **Grundlagen & Auswahl** (`grundlagen`, 4): `wie-funktioniert-eine-waermepumpe`, `welche-waermepumpe-fuer-mein-haus`, `monoblock-oder-split-waermepumpe`, `jaz-wirkungsgrad`
- **Planung im Bestand & Heizsystem** (`bestand`, 6): `waermepumpe-im-altbau`, `waermepumpe-mit-heizkoerpern`, `waermepumpe-vorlauftemperatur`, `heizlastberechnung-waermepumpe`, `hydraulischer-abgleich-waermepumpe`, `pufferspeicher-waermepumpe`
- **Aufstellung, Schall & Winterbetrieb** (`aufstellung`, 3): `waermepumpe-richtig-aufstellen-standort-schall`, `waermepumpe-schallpegel`, `waermepumpe-abtauung-vereisung-kondensat`
- **Betrieb & Optimierung** (`betrieb`, 5): `waermepumpe-richtig-einstellen`, `waermepumpe-taktet-staendig-starts-normal`, `heizstab-waermepumpe-sinnvoll-stromverbrauch`, `warmwasser-waermepumpe-temperatur-legionellenschutz-kosten`, `waermepumpe-lebensdauer-wartung`
- **Kosten, Förderung, Strom & Tarife** (`kosten`, 6): `waermepumpe-kosten-einfamilienhaus`, `waermepumpe-stromverbrauch-berechnen`, `waermepumpe-foerderung-2026`, `waermepumpentarif-oder-dynamischer-stromtarif`, `14a-enwg-waermepumpe-messkonzept-8`, `waermepumpe-und-photovoltaik`

**Repowering**

- **Entscheidung & Kosten** (`entscheidung`, 5): `repowering-solaranlage`, `alte-pv-anlage-nach-20-jahren`, `repowering-vs-neuanlage`, `repowering-kosten`, `typische-fehler-beim-repowering`
- **Diagnose & Zustand** (`diagnose`, 3): `pv-anlage-fehlerdiagnose-stringmessung-isolation-hotspots`, `alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie`, `pid-hotspots-mikrorisse-delamination-pv-module`
- **Umbau, Erweiterung & Komponenten** (`umbau`, 3): `alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module`, `alte-pv-anlage-erweitern-neue-anlage-daneben`, `pv-anlage-dachsanierung-demontage-repowering`

**Strom & Energiemanagement**

- **Strommarkt & Tarife** (`markt`, 4): `strommarkt-einfach-erklaert-boersenstrompreis-netzentgelt-strompreis`, `dynamischer-stromtarif-pv-speicher-lohnt-sich`, `negative-strompreise-2026-pv-speicher-eauto`, `dynamischer-stromtarif-paragraf-14a-netzentgelt`
- **Smart Meter & Messdaten** (`messung`, 4): `smart-meter-2026-pv-kosten-pflicht-vorteile`, `smart-meter-auslesen-verbrauchsdaten-trudi`, `westnetz-smart-meter-steuerbox-2026`, `lastgang-15-minuten-werte-verstehen`
- **§ 14a & Netzregeln** (`netz`, 4): `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen`, `zeitvariable-netzentgelte-paragraph-14a-modul-3`, `steuerbox-paragraf-14a-smart-meter-hems`, `solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter`
- **HEMS & Steuerung** (`hems`, 4): `hems-home-energy-management-system-hersteller-app`, `pv-speicher-wallbox-waermepumpe-intelligent-steuern`, `hems-wetterprognose-strompreis-ladezustand`, `pv-anlage-abregeln-strom-nutzen-hems-einspeisebegrenzung`
- **Lokal, Cloud & Schnittstellen** (`architektur`, 3): `cloud-ems-vs-lokales-ems-energiedaten`, `internetausfall-pv-speicher-wallbox-hems`, `offene-schnittstellen-pv-speicher-hems-hersteller-app`
- **Speicher & Eigenverbrauch** (`eigenverbrauch`, 2): `stromspeicher-aus-netz-laden-dynamisch-sinnvoll`, `eigenverbrauch-optimieren-100-prozent-autarkie`

Die bestehenden Gruppen auf `/strom-energiemanagement` gehen darin auf („Strommarkt & Preise“ → `markt`, „Smart Meter, Netz & Regeln“ → aufgeteilt in `messung` und `netz`, „HEMS & Gesamtsystem“ → `hems`, „Speicher & Eigenverbrauch“ → `eigenverbrauch`). Neu ist `architektur` für Cloud/lokal/Schnittstellen/Ausfall.

---

## 6. Falsch einsortierte Artikel

Jede Zeile bedeutet: neue URL + 301 von der alten URL.

| Artikel | heute | Vorschlag | Begründung |
|---|---|---|---|
| `cloud-ems-vs-lokales-ems-energiedaten` | Stromspeicher | Strom & EM → `architektur` | Thema ist Energiemanagement und Datenhoheit, nicht der Speicher. Drei Artikel verlinken bereits auf `/strom-energiemanagement/cloud-ems-…` (heute 404) – die Verschiebung repariert diese Links gleich mit. |
| `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen` | Wallbox | Strom & EM → `netz` | Sammelartikel für Wallbox, Wärmepumpe **und** Speicher. Gehört als Einstieg in den §-14a-Cluster, die gerätespezifischen Artikel (Speicher, Wärmepumpe/MK8) verlinken darauf. |
| `pv-anlage-bei-stromausfall-solarstrom-reicht-nicht` | Solaranlage | Stromspeicher → `notstrom` | Bildet mit `notstrom-oder-ersatzstrom` den Notstrom-Cluster; die Lösung (Ersatzstrom) ist ein Speicher-/Wechselrichterthema. |
| `braucht-man-einen-stromspeicher` | Solaranlage | zusammenlegen (7.2) | Falls du das Zusammenlegen ablehnst: nach Stromspeicher → `nutzen`. |
| `wie-viel-autarkie-ist-realistisch` | Solaranlage | zusammenlegen (7.3) | Falls du das Zusammenlegen ablehnst: bleibt Solaranlage → `ertrag`. |

Grenzfälle, die ich **nicht** verschieben würde (Aufwand/Risiko einer URL-Änderung größer als der Nutzen): `zaehlerschrank-pv-waermepumpe-smart-meter` (Solaranlage), `hybrid-wechselrichter-oder-getrennte-geraete` (Solaranlage), `stromspeicher-aus-netz-laden-dynamisch-sinnvoll` (Strom & EM, passt in den Hub), `paragraf-14a-enwg-stromspeicher` (Stromspeicher, gerätespezifisch), `waermepumpentarif-oder-dynamischer-stromtarif` (Wärmepumpe, gerätespezifisch).

---

## 7. Kannibalisierung

Legende: **Zusammenlegen** = ein Artikel bleibt, der andere wird 301 auf ihn weitergeleitet und auf Entwurf gesetzt (nicht gelöscht). **Abgrenzen** = beide bleiben, jeder bekommt eine klare Rolle, gegenseitige Links, keine doppelten FAQ-Fragen.

### 7.1 Stromausfall / Notstrom / Ersatzstrom

| Artikel | Wörter | Suchabsicht |
|---|---|---|
| `stromspeicher/notstrom-oder-ersatzstrom` | 867 | Begriffe: Unterschied Notstrom/Ersatzstrom, was brauche ich |
| `solaranlage/pv-anlage-bei-stromausfall-solarstrom-reicht-nicht` | 703 | Problem: warum schaltet meine PV bei Stromausfall ab |
| `repowering/notstrom-backup` | 822 | Nachrüsten bei Altanlagen – **unsichtbar** (Abschnitt 3) |

**Empfehlung: abgrenzen.** Die beiden sichtbaren Artikel bedienen unterschiedliche Suchanfragen („pv anlage stromausfall“ vs. „notstrom oder ersatzstrom“). Rollen: Stromausfall-Artikel erklärt das Problem und leitet auf die Lösung weiter, Notstrom-Artikel ist der Einstieg des Clusters `notstrom`. `notstrom-backup` auf Entwurf. Beide sichtbaren Artikel nach Stromspeicher → `notstrom` (6).

### 7.2 Braucht man / lohnt sich ein Stromspeicher

| Artikel | Wörter |
|---|---|
| `solaranlage/braucht-man-einen-stromspeicher` | 370 |
| `stromspeicher/lohnt-sich-ein-stromspeicher` | 1.760 |
| `solaranlage/solaranlage-mit-oder-ohne-speicher` | 983 |
| (nicht live) `lohnt-sich-eine-solaranlage-ohne-speicher` | – |

**Empfehlung: `braucht-man-einen-stromspeicher` → zusammenlegen in `lohnt-sich-ein-stromspeicher` (301).** Gleiche Frage, der kurze Artikel hat keinen eigenen Inhalt, den der lange nicht hat. `solaranlage-mit-oder-ohne-speicher` **abgrenzen**: Entscheidung bei der PV-Planung (Solaranlage → `planung`), verweist für die Wirtschaftlichkeit auf den Speicher-Artikel. Das nicht veröffentlichte Script `lohnt-sich-eine-solaranlage-ohne-speicher` würde eine vierte Seite mit derselben Frage erzeugen – nicht veröffentlichen.

### 7.3 Autarkie

| Artikel | Wörter |
|---|---|
| `solaranlage/wie-viel-autarkie-ist-realistisch` | 406 |
| `strom-energiemanagement/eigenverbrauch-optimieren-100-prozent-autarkie` | 2.881 |

**Empfehlung: zusammenlegen in `eigenverbrauch-optimieren-100-prozent-autarkie` (301).** Der lange Artikel beantwortet die Frage „Welcher Autarkiegrad ist bei einem Einfamilienhaus realistisch?“ bereits als FAQ und im Text. Alternative, falls dir der Suchbegriff „wie viel Autarkie ist realistisch“ als eigene URL wichtig ist: abgrenzen und den kurzen Artikel auf den langen verweisen lassen.

### 7.4 Kosten Solaranlage Einfamilienhaus

| Artikel | Wörter |
|---|---|
| `kosten-solaranlage-einfamilienhaus` | 612, keine FAQ, Nummerierung springt von 4 auf 6 |
| `kosten-solaranlage-mit-speicher-einfamilienhaus` | 1.520 |
| `kosten-10-kwp-…`, `kosten-15-kwp-…` | größenspezifisch, bleiben |
| (nicht live) `was-kostet-eine-solaranlage-ohne-speicher-fuer-einfamilienhaus` | – |

Die beiden ersten Artikel haben einen fast identischen Teaser und zielen auf dieselbe Suchanfrage. **Empfehlung: `kosten-solaranlage-einfamilienhaus` → zusammenlegen in `kosten-solaranlage-mit-speicher-einfamilienhaus` (301).** Das Script „ohne Speicher“ vorerst nicht veröffentlichen, oder – falls gewünscht – als klar abgegrenzter Artikel für PV ohne Speicher.

### 7.5 Speicher nachrüsten

`stromspeicher/stromspeicher-nachruesten` (392 Wörter, sichtbar) vs. `repowering/speicher-nachruesten` (919 Wörter, **unsichtbar**). **Empfehlung:** Repowering-Artikel auf Entwurf. Optional in Phase 4: dessen AC/DC-Abschnitt in den sichtbaren Artikel übernehmen (das wäre eine Inhaltserweiterung – nur mit deiner Freigabe).

### 7.6 Internetausfall / Cloud / lokales HEMS

| Artikel | Wörter | Kern |
|---|---|---|
| `stromspeicher/cloud-ems-vs-lokales-ems-energiedaten` | 2.247 | Cloud vs. lokal, Datenhoheit, evcc, PEAK.Flex |
| `strom-energiemanagement/lokales-hems-hersteller-cloud-server-internet-ausfall` | 712 | Cloud vs. lokal, Fallback, Latenz, Datenhoheit, Anbieterwechsel |
| `strom-energiemanagement/internetausfall-pv-speicher-wallbox-hems` | 736 | Was läuft bei Internetausfall weiter, Gerät für Gerät |
| `strom-energiemanagement/offene-schnittstellen-pv-speicher-hems-hersteller-app` | 693 | Schnittstellen, Modbus/EEBUS, Exit-Strategie |
| `strom-energiemanagement/hems-home-energy-management-system-hersteller-app` | 3.416 | Pillar HEMS, enthält Abschnitte „Lokal oder Cloud“ und „geschlossene Ökosysteme“ |

`lokales-hems-…` und `cloud-ems-vs-lokales-ems-…` beantworten dieselbe Frage („lokal oder Cloud?“), `lokales-hems-…` überschneidet sich zusätzlich mit `internetausfall-…`. **Empfehlung: `lokales-hems-hersteller-cloud-server-internet-ausfall` → zusammenlegen in `cloud-ems-vs-lokales-ems-energiedaten` (301)**, das gleichzeitig nach Strom & EM wandert (6). `internetausfall-…` und `offene-schnittstellen-…` **abgrenzen**: Ausfallverhalten bzw. Schnittstellen als eigene Unterfragen im Cluster `architektur`, jeweils mit Link zum HEMS-Pillar.

### 7.7 § 14a

| Artikel | Kategorie | Rolle (Vorschlag) |
|---|---|---|
| `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen` | Wallbox → Strom & EM | Einstieg § 14a (alle Geräte, Module 1/2) |
| `zeitvariable-netzentgelte-paragraph-14a-modul-3` | Strom & EM | Modul 3 im Detail |
| `steuerbox-paragraf-14a-smart-meter-hems` | Strom & EM | Technik: Signalkette Gateway/Steuerbox/HEMS |
| `paragraf-14a-enwg-stromspeicher` | Stromspeicher | Speicher-spezifisch |
| `14a-enwg-waermepumpe-messkonzept-8` | Wärmepumpe | WP-spezifisch, Messkonzept 8 |
| `dynamischer-stromtarif-paragraf-14a-netzentgelt` | Strom & EM | Zusammenspiel zweier Preissignale |
| `westnetz-smart-meter-steuerbox-2026` | Strom & EM | regional (Westnetz) |

**Empfehlung: abgrenzen, nichts zusammenlegen.** Die Artikel beantworten unterschiedliche Fragen; das Problem ist, dass es keinen klaren Einstieg gibt und die Spokes nicht auf ihn verlinken. Der Sammelartikel wird Einstieg (verschieben, 301), alle anderen verlinken auf ihn. Der Sammelartikel behandelt Modul 3 heute nicht – er sollte im Fließtext auf den Modul-3-Artikel verweisen. `dynamischer-stromtarif-paragraf-14a-netzentgelt` hat das höchste Überschneidungsrisiko (der Modul-3-Artikel hat einen Abschnitt „Modul 3 + dynamischer Stromtarif“, der Tarif-Pillar einen Abschnitt „Dynamischer Tarif und § 14a Modul 3“). Ich würde ihn als Praxis-/HEMS-Artikel stehen lassen und aus beiden Abschnitten auf ihn verlinken.

### 7.8 Smart Meter

| Artikel | Rolle |
|---|---|
| `smart-meter-2026-pv-kosten-pflicht-vorteile` | Einstieg: Pflicht, Kosten, Nutzen |
| `smart-meter-auslesen-verbrauchsdaten-trudi` | Anleitung: Daten auslesen, HAN, TRuDI |
| `westnetz-smart-meter-steuerbox-2026` | regional: Westnetz-Praxis |
| `zaehlerschrank-pv-waermepumpe-smart-meter` | Zählerschrank |
| `lastgang-15-minuten-werte-verstehen` | Daten interpretieren |

Überschneidung vor allem zwischen „auslesen“ und „Westnetz“: Beide erklären TRuDI/HAN bei Westnetz, beide nutzen **dasselbe Titelbild**, die Westnetz-FAQ „Wie kann ich bei Westnetz mein Smart Meter selbst auslesen?“ ist ein eigener Abschnitt im Auslese-Artikel. **Empfehlung: abgrenzen**, eigenes Bild für den Westnetz-Artikel, gegenseitige Links. Der Westnetz-Artikel ist als regionaler Artikel (euer Netzgebiet) wertvoll und sollte bleiben.

### 7.9 Alte Anlage nach 20 Jahren / EEG-Ende

`alte-pv-anlage-nach-20-jahren` (sichtbar) und `wirtschaftlichkeit-eeg` (unsichtbar) haben identische Suchabsicht und Gliederung (Weiterbetrieb / Umrüstung / Repowering). Kein Live-Problem, weil einer unsichtbar ist. **Empfehlung:** `wirtschaftlichkeit-eeg` auf Entwurf. `repowering-solaranlage`, `repowering-vs-neuanlage`, `repowering-kosten` sind klar genug abgegrenzt.

### 7.10 Weitere Gruppen – abgrenzen, nicht zusammenlegen

| Gruppe | Artikel | Was zu tun ist |
|---|---|---|
| PV-Größe & Planung | `pv-anlage-planen`, `wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein`, `solaranlage-fuer-waermepumpe-auslegen`, `solaranlage-fuer-e-auto-auslegen` | Aus einer Vorlage entstanden: 4 identische FAQ-Fragen („Sollte ich den Speicher direkt mitplanen?“, „Was wird bei der Planung am häufigsten vergessen?“, „Gehört die Anmeldung beim Netzbetreiber zur Planung dazu?“, „Welche Dachausrichtung ist am besten?“). Doppelte FAQ-Fragen im Schema entfernen bzw. spezifisch formulieren (dein OK nötig, siehe 9.8). |
| PV + Wärmepumpe | `solaranlage-fuer-waermepumpe-auslegen` ↔ `waermepumpe-und-photovoltaik` | Rollen: Dimensionierung der PV vs. Wirtschaftlichkeit der Kombination. Gegenseitig verlinken. |
| PV + E-Auto | `solaranlage-fuer-e-auto-auslegen` ↔ `wallbox-mit-pv-laden` | Rollen: PV-Auslegung vs. Ladetechnik. |
| PV-Überschussladen | `wallbox-mit-pv-laden`, `wallbox-phasenumschaltung-…`, `pv-ueberschussladen-funktioniert-nicht-…` | Einstieg + Technik + Fehlersuche, klar getrennt. |
| Wärmepumpe Schall | `waermepumpe-schallpegel` ↔ `waermepumpe-richtig-aufstellen-standort-schall` | Beide mit FAQ zum Abstand zum Nachbarn. Rollen: Recht/TA Lärm vs. Standortplanung. |
| WP-Betrieb | `waermepumpe-richtig-einstellen`, `waermepumpe-taktet-staendig-…`, `heizstab-…`, `pufferspeicher-…` | Einstellen-Artikel ist Einstieg, beantwortet „Wie viele Verdichterstarts sind normal?“ und „Soll der Heizstab deaktiviert werden?“ nur kurz → dort auf die Spezialartikel verlinken. |
| WP-Größe | `heizlastberechnung-waermepumpe` ↔ (nicht live) `waermepumpe-groesse-berechnen` | Das Script würde eine Dublette erzeugen – nicht veröffentlichen, bevor die Abgrenzung klar ist. |
| Gewerbespeicher | `lastspitzenkappung-stromspeicher-gewerbe`, `gewerbespeicher-richtig-auslegen-…`, `multi-use-stromspeicher` | Rollen: Peak Shaving / Auslegung / Mehrfachnutzung. |
| Garantie & Anbieter | `garantie-vs-gewaehrleistung-pv-anlage`, `solarmodule-40-jahre-garantie-…`, `solarteur-insolvent-was-tun`, `null-euro-anzahlung-photovoltaik` | Klar getrennt, bisher kaum verlinkt. |
| Solarteur insolvent | Ratgeber `/solaranlage/solarteur-insolvent-was-tun` ↔ Landingpage `/solarteur-insolvent-was-tun` | Gleicher Slug, fast gleicher Titel. Rollen: Anleitung vs. Leistungsangebot. Gegenseitig verlinken; die Landingpage ist in Sie-Form (außerhalb des Ratgebers, nur als Hinweis). |
| Einspeisevergütung | `einspeiseverguetung-photovoltaik-2026` (437 W.), `photovoltaik-foerderung`, `eeg-2027-…` | Einspeise-Artikel ist dünn, aber wichtiger Suchbegriff – bleibt, verlinkt auf EEG 2027 und Solarspitzengesetz. |

---

## 8. Fehlende interne Links

### 8.1 Kaputte Links (404)

| In Artikel | Link heute | Richtig wäre |
|---|---|---|
| `internetausfall-pv-speicher-wallbox-hems` | `/strom-energiemanagement/cloud-ems-vs-lokales-ems-energiedaten` | wird korrekt, sobald der Artikel verschoben ist (6) |
| `lokales-hems-hersteller-cloud-server-internet-ausfall` | dto. | dto. |
| `offene-schnittstellen-pv-speicher-hems-hersteller-app` | dto. | dto. |
| `solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter` | `/solaranlage/smart-meter-2026-pv-kosten-pflicht-vorteile` | `/strom-energiemanagement/smart-meter-2026-pv-kosten-pflicht-vorteile` |
| `pv-anlage-bei-stromausfall-solarstrom-reicht-nicht` | `/stromspeicher/notstrom-backup` | `/stromspeicher/notstrom-oder-ersatzstrom` |
| `stromspeicher-kapazitaet-leistung-kw-kwh` | `/stromspeicher/notstrom-backup` | `/stromspeicher/notstrom-oder-ersatzstrom` |
| `pv-verschattung-leistungsoptimierer-stringdesign` | `/solaranlage/solaranlage-planen` | `/solaranlage/pv-anlage-planen` |
| `zwei-e-autos-zuhause-laden-wallboxen-hausanschluss` | `/wallbox/wallbox-einfamilienhaus-richtig-planen` | Artikel existiert nicht live → `/wallbox/wallbox-zu-hause-laden` oder Script veröffentlichen |

Zusätzlich verweist `amortisation-pv-anlage` im Text auf den Ratgeber „Lohnt sich ein Stromspeicher?“, ohne ihn zu verlinken.

### 8.2 Befund

- 74 von 133 Artikeln verlinken auf keinen anderen Ratgeber: alle Artikel von März, April, Juni und Juli, 12 von 21 aus Mai und 16 von 39 aus August.
- 70 Artikel bekommen keinen einzigen eingehenden Link. Der am häufigsten verlinkte Artikel (`smart-meter-2026-…`) hat 10.
- 20 Artikel (die Serie vom 08.09. bis 27.09.) haben eine Link-Liste „Passende Ratgeber zum Weiterlesen“ am Ende – genau das Muster, das du nicht willst. Vorschlag für Phase 3: die Links aus der Liste in passende Sätze im Fließtext übernehmen und die Liste entfernen (Freigabe nötig, weil das Textblöcke entfernt).
- `relatedArticles` ist nur bei einem Artikel gepflegt und wird im Frontend nicht genutzt; „Mehr aus der Kategorie“ zeigt einfach die drei neuesten Artikel.

### 8.3 Link-Plan für Phase 3

Pro Artikel 2–4 neue Links im Fließtext (bereits vorhandene Links sind herausgerechnet). Grundregeln: jeder Spoke verlinkt auf den Einstieg seines Clusters, der Einstieg verlinkt auf seine wichtigsten Spokes, dazu 1–2 Querverbindungen in andere Kategorien. Nach diesem Plan hat jeder aktive Artikel mindestens einen eingehenden Link. Zusammengelegte und verdeckte Artikel sind ausgelassen. Die genaue Ankerstelle im Text bestimme ich in Phase 3 pro Artikel; wo kein Satz inhaltlich passt, lasse ich den Link weg, statt Text dazuzuerfinden.

#### Solaranlage

| Artikel | Cluster | Neue Links im Fließtext auf |
|---|---|---|
| `pv-anlage-planen` | Planung & Anlagengröße | `wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein`, `ost-west-oder-sueddach-solaranlage`, `solaranlage-mit-oder-ohne-speicher`, `zaehlerschrank-pv-waermepumpe-smart-meter` |
| `wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein` | Planung & Anlagengröße | `solarmodule-dach-voll-belegen-dachflaeche-freilassen`, `ab-wieviel-qm-lohnt-sich-eine-solaranlage`, `solaranlage-fuer-waermepumpe-auslegen`, `wie-gross-sollte-ein-stromspeicher-sein` |
| `ab-wieviel-qm-lohnt-sich-eine-solaranlage` | Planung & Anlagengröße | `wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein`, `solarmodule-dach-voll-belegen-dachflaeche-freilassen`, `amortisation-pv-anlage` |
| `solarmodule-dach-voll-belegen-dachflaeche-freilassen` | Planung & Anlagengröße | `eigenverbrauch-optimieren-100-prozent-autarkie`, `solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter` |
| `ost-west-oder-sueddach-solaranlage` | Planung & Anlagengröße | `pv-verschattung-leistungsoptimierer-stringdesign`, `wie-viel-strom-erzeugt-eine-10-kwp-solaranlage`, `eigenverbrauch-optimieren-100-prozent-autarkie` |
| `pv-verschattung-leistungsoptimierer-stringdesign` | Planung & Anlagengröße | `pv-anlage-planen`, `ost-west-oder-sueddach-solaranlage`, `hybrid-wechselrichter-oder-getrennte-geraete` |
| `solaranlage-fuer-waermepumpe-auslegen` | Planung & Anlagengröße | `waermepumpe-und-photovoltaik`, `waermepumpe-stromverbrauch-berechnen`, `was-bringt-eine-solaranlage-im-winter`, `stromspeicher-waermepumpe-nachts-versorgen` |
| `solaranlage-fuer-e-auto-auslegen` | Planung & Anlagengröße | `wallbox-mit-pv-laden`, `wallbox-zu-hause-laden`, `wallbox-phasenumschaltung-pv-ueberschussladen`, `kosten-15-kwp-solaranlage-mit-speicher` |
| `solaranlage-mit-oder-ohne-speicher` | Planung & Anlagengröße | `lohnt-sich-ein-stromspeicher`, `wie-gross-sollte-ein-stromspeicher-sein`, `stromspeicher-nachruesten` |
| `typische-fehler-bei-solaranlagen` | Planung & Anlagengröße | `pv-anlage-planen`, `zaehlerschrank-pv-waermepumpe-smart-meter`, `wer-darf-photovoltaikanlagen-installieren`, `photovoltaik-testsieger` |
| `kosten-solaranlage-mit-speicher-einfamilienhaus` | Kosten & Wirtschaftlichkeit | `kosten-10-kwp-solaranlage-mit-speicher`, `kosten-15-kwp-solaranlage-mit-speicher`, `stromspeicher-kosten`, `amortisation-pv-anlage` |
| `kosten-10-kwp-solaranlage-mit-speicher` | Kosten & Wirtschaftlichkeit | `wie-viel-strom-erzeugt-eine-10-kwp-solaranlage`, `kosten-15-kwp-solaranlage-mit-speicher`, `photovoltaik-steuern` |
| `kosten-15-kwp-solaranlage-mit-speicher` | Kosten & Wirtschaftlichkeit | `wie-viel-strom-erzeugt-eine-15-kwp-solaranlage`, `kosten-10-kwp-solaranlage-mit-speicher`, `solaranlage-fuer-waermepumpe-auslegen` |
| `amortisation-pv-anlage` | Kosten & Wirtschaftlichkeit | `kosten-solaranlage-mit-speicher-einfamilienhaus`, `einspeiseverguetung-photovoltaik-2026`, `lohnt-sich-ein-stromspeicher`, `eeg-2027-dach-pv-unter-25-kw` |
| `wie-viel-strom-erzeugt-eine-10-kwp-solaranlage` | Ertrag & Technik | `kosten-10-kwp-solaranlage-mit-speicher`, `ost-west-oder-sueddach-solaranlage`, `pv-anlage-liefert-weniger-als-berechnet-abweichung-normal` |
| `wie-viel-strom-erzeugt-eine-15-kwp-solaranlage` | Ertrag & Technik | `kosten-15-kwp-solaranlage-mit-speicher`, `solaranlage-fuer-waermepumpe-auslegen`, `was-bringt-eine-solaranlage-im-winter` |
| `was-bringt-eine-solaranlage-im-winter` | Ertrag & Technik | `stromspeicher-im-winter-oft-leer`, `waermepumpe-und-photovoltaik`, `eigenverbrauch-optimieren-100-prozent-autarkie` |
| `pv-anlage-liefert-weniger-als-berechnet-abweichung-normal` | Ertrag & Technik | `pv-anlage-fehlerdiagnose-stringmessung-isolation-hotspots`, `pv-verschattung-leistungsoptimierer-stringdesign`, `wie-viel-strom-erzeugt-eine-10-kwp-solaranlage` |
| `hybrid-wechselrichter-oder-getrennte-geraete` | Ertrag & Technik | `stromspeicher-nachruesten`, `notstrom-oder-ersatzstrom`, `stromspeicher-kapazitaet-leistung-kw-kwh` |
| `zaehlerschrank-pv-waermepumpe-smart-meter` | Ertrag & Technik | `wallbox-kosten` |
| `photovoltaik-foerderung` | Förderung, Steuern & Anmeldung | `einspeiseverguetung-photovoltaik-2026`, `photovoltaik-steuern`, `stromspeicher-foerderung-nrw`, `eeg-2027-dach-pv-unter-25-kw` |
| `einspeiseverguetung-photovoltaik-2026` | Förderung, Steuern & Anmeldung | `eeg-2027-dach-pv-unter-25-kw`, `solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter`, `negative-strompreise-2026-pv-speicher-eauto`, `amortisation-pv-anlage` |
| `eeg-2027-dach-pv-unter-25-kw` | Förderung, Steuern & Anmeldung | `solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter` |
| `photovoltaik-steuern` | Förderung, Steuern & Anmeldung | `pv-anlage-anmelden-marktstammdatenregister`, `photovoltaik-foerderung`, `pv-gewerbe-wirtschaftlichkeit-beispielrechnung` |
| `pv-anlage-anmelden-marktstammdatenregister` | Förderung, Steuern & Anmeldung | `photovoltaik-steuern` |
| `solardachpflicht-nrw-2026` | Förderung, Steuern & Anmeldung | `pv-anlage-dachsanierung-demontage-repowering`, `photovoltaik-foerderung`, `pv-anlage-planen` |
| `wer-darf-photovoltaikanlagen-installieren` | Anbieterwahl, Verträge & Garantie | `photovoltaik-testsieger`, `garantie-vs-gewaehrleistung-pv-anlage`, `typische-fehler-bei-solaranlagen` |
| `photovoltaik-testsieger` | Anbieterwahl, Verträge & Garantie | `wer-darf-photovoltaikanlagen-installieren` |
| `garantie-vs-gewaehrleistung-pv-anlage` | Anbieterwahl, Verträge & Garantie | `solarmodule-40-jahre-garantie-produkt-leistung`, `null-euro-anzahlung-photovoltaik` |
| `solarmodule-40-jahre-garantie-produkt-leistung` | Anbieterwahl, Verträge & Garantie | `pid-hotspots-mikrorisse-delamination-pv-module` |
| `solarteur-insolvent-was-tun` | Anbieterwahl, Verträge & Garantie | `garantie-vs-gewaehrleistung-pv-anlage`, `pv-anlage-anmelden-marktstammdatenregister` |
| `null-euro-anzahlung-photovoltaik` | Anbieterwahl, Verträge & Garantie | `solarteur-insolvent-was-tun`, `garantie-vs-gewaehrleistung-pv-anlage`, `photovoltaik-testsieger` |
| `solaranlage-gewerbedach` | Gewerbe, Landwirtschaft & Mehrfamilienhaus | `pv-gewerbe-wirtschaftlichkeit-beispielrechnung`, `pv-landwirtschaft-stalldach`, `lastspitzenkappung-stromspeicher-gewerbe`, `lastgang-15-minuten-werte-verstehen` |
| `pv-gewerbe-wirtschaftlichkeit-beispielrechnung` | Gewerbe, Landwirtschaft & Mehrfamilienhaus | `gewerbespeicher-richtig-auslegen-lastgang-kw-kwh`, `lastgang-15-minuten-werte-verstehen` |
| `pv-landwirtschaft-stalldach` | Gewerbe, Landwirtschaft & Mehrfamilienhaus | `lastgang-15-minuten-werte-verstehen` |
| `mieterstrom-gemeinschaftliche-gebaeudeversorgung-2026` | Gewerbe, Landwirtschaft & Mehrfamilienhaus | `smart-meter-2026-pv-kosten-pflicht-vorteile`, `lastgang-15-minuten-werte-verstehen`, `solaranlage-gewerbedach` |

#### Stromspeicher

| Artikel | Cluster | Neue Links im Fließtext auf |
|---|---|---|
| `lohnt-sich-ein-stromspeicher` | Nutzen & Speichergröße | `wie-gross-sollte-ein-stromspeicher-sein`, `stromspeicher-kosten`, `eigenverbrauch-optimieren-100-prozent-autarkie`, `dynamischer-stromtarif-pv-speicher-lohnt-sich` |
| `wie-gross-sollte-ein-stromspeicher-sein` | Nutzen & Speichergröße | `stromspeicher-kapazitaet-leistung-kw-kwh`, `stromspeicher-waermepumpe-nachts-versorgen`, `eigenverbrauch-optimieren-100-prozent-autarkie` |
| `stromspeicher-kapazitaet-leistung-kw-kwh` | Nutzen & Speichergröße | `notstrom-oder-ersatzstrom`, `stromspeicher-waermepumpe-nachts-versorgen` |
| `stromspeicher-waermepumpe-nachts-versorgen` | Nutzen & Speichergröße | `waermepumpe-stromverbrauch-berechnen` |
| `stromspeicher-im-winter-oft-leer` | Nutzen & Speichergröße | `stromspeicher-aus-netz-laden-dynamisch-sinnvoll` |
| `stromspeicher-kosten` | Kosten, Förderung & Nachrüstung | `stromspeicher-foerderung-nrw`, `hybrid-wechselrichter-oder-getrennte-geraete`, `lohnt-sich-ein-stromspeicher`, `cloud-speicher-stromspeicher-vergleich` |
| `stromspeicher-foerderung-nrw` | Kosten, Förderung & Nachrüstung | `photovoltaik-foerderung`, `stromspeicher-kosten`, `photovoltaik-steuern` |
| `cloud-speicher-stromspeicher-vergleich` | Kosten, Förderung & Nachrüstung | `lohnt-sich-ein-stromspeicher`, `eigenverbrauch-optimieren-100-prozent-autarkie`, `dynamischer-stromtarif-pv-speicher-lohnt-sich` |
| `stromspeicher-nachruesten` | Kosten, Förderung & Nachrüstung | `hybrid-wechselrichter-oder-getrennte-geraete`, `paragraf-14a-enwg-stromspeicher`, `stromspeicher-aufstellort-keller-garage-brandschutz`, `alte-pv-anlage-nach-20-jahren` |
| `wie-lange-haelt-ein-stromspeicher` | Technik, Lebensdauer & Aufstellort | `batteriezellen-stromspeicher-zellspannung-temperatur-balancing`, `speicherwirkungsgrad-verluste-geladen-nutzbar`, `stromspeicher-aufstellort-keller-garage-brandschutz` |
| `speicherwirkungsgrad-verluste-geladen-nutzbar` | Technik, Lebensdauer & Aufstellort | `stromspeicher-aus-netz-laden-dynamisch-sinnvoll`, `batteriezellen-stromspeicher-zellspannung-temperatur-balancing` |
| `batteriezellen-stromspeicher-zellspannung-temperatur-balancing` | Technik, Lebensdauer & Aufstellort | `stromspeicher-aufstellort-keller-garage-brandschutz`, `speicherwirkungsgrad-verluste-geladen-nutzbar` |
| `stromspeicher-aufstellort-keller-garage-brandschutz` | Technik, Lebensdauer & Aufstellort | `wie-lange-haelt-ein-stromspeicher`, `stromspeicher-kosten`, `batteriezellen-stromspeicher-zellspannung-temperatur-balancing` |
| `paragraf-14a-enwg-stromspeicher` | Technik, Lebensdauer & Aufstellort | `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen`, `zeitvariable-netzentgelte-paragraph-14a-modul-3`, `stromspeicher-aus-netz-laden-dynamisch-sinnvoll` |
| `pv-anlage-bei-stromausfall-solarstrom-reicht-nicht` | Notstrom & Ersatzstrom | `stromspeicher-kapazitaet-leistung-kw-kwh`, `hybrid-wechselrichter-oder-getrennte-geraete` |
| `notstrom-oder-ersatzstrom` | Notstrom & Ersatzstrom | `pv-anlage-bei-stromausfall-solarstrom-reicht-nicht`, `stromspeicher-kapazitaet-leistung-kw-kwh`, `hybrid-wechselrichter-oder-getrennte-geraete`, `bidirektionales-laden` |
| `lastspitzenkappung-stromspeicher-gewerbe` | Gewerbespeicher & Multi-Use | `gewerbespeicher-richtig-auslegen-lastgang-kw-kwh`, `lastgang-15-minuten-werte-verstehen`, `multi-use-stromspeicher` |
| `gewerbespeicher-richtig-auslegen-lastgang-kw-kwh` | Gewerbespeicher & Multi-Use | `solaranlage-gewerbedach` |
| `multi-use-stromspeicher` | Gewerbespeicher & Multi-Use | `stromspeicher-aus-netz-laden-dynamisch-sinnvoll`, `notstrom-oder-ersatzstrom` |

#### Wallbox

| Artikel | Cluster | Neue Links im Fließtext auf |
|---|---|---|
| `wallbox-zu-hause-laden` | Planung, Kosten & Anmeldung | `wallbox-11-oder-22-kw`, `wallbox-kosten`, `wallbox-anmelden-netzbetreiber`, `wallbox-mit-pv-laden` |
| `wallbox-kosten` | Planung, Kosten & Anmeldung | `wallbox-zu-hause-laden`, `wallbox-11-oder-22-kw`, `wallbox-anmelden-netzbetreiber`, `zaehlerschrank-pv-waermepumpe-smart-meter` |
| `wallbox-11-oder-22-kw` | Planung, Kosten & Anmeldung | `wallbox-anmelden-netzbetreiber`, `lastmanagement-wallbox-hausanschluss-ueberlastung`, `wallbox-phasenumschaltung-pv-ueberschussladen` |
| `wallbox-anmelden-netzbetreiber` | Planung, Kosten & Anmeldung | `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen`, `wallbox-11-oder-22-kw`, `pv-anlage-anmelden-marktstammdatenregister` |
| `dienstwagen-zuhause-laden-wallbox-stromkosten-arbeitgeber` | Planung, Kosten & Anmeldung | `dynamischer-stromtarif-pv-speicher-lohnt-sich`, `wallbox-kosten` |
| `wallbox-mit-pv-laden` | Laden mit Solarstrom & bidirektional | `wallbox-phasenumschaltung-pv-ueberschussladen`, `pv-ueberschussladen-funktioniert-nicht-ursachen`, `solaranlage-fuer-e-auto-auslegen`, `pv-speicher-wallbox-waermepumpe-intelligent-steuern` |
| `wallbox-phasenumschaltung-pv-ueberschussladen` | Laden mit Solarstrom & bidirektional | `pv-ueberschussladen-funktioniert-nicht-ursachen` |
| `pv-ueberschussladen-funktioniert-nicht-ursachen` | Laden mit Solarstrom & bidirektional | `internetausfall-pv-speicher-wallbox-hems` |
| `bidirektionales-laden` | Laden mit Solarstrom & bidirektional | `notstrom-oder-ersatzstrom`, `multi-use-stromspeicher`, `wallbox-mit-pv-laden` |
| `lastmanagement-wallbox-hausanschluss-ueberlastung` | Lastmanagement & mehrere Fahrzeuge | `wallbox-11-oder-22-kw`, `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen` |
| `zwei-e-autos-zuhause-laden-wallboxen-hausanschluss` | Lastmanagement & mehrere Fahrzeuge | `lastmanagement-wallbox-hausanschluss-ueberlastung`, `dienstwagen-zuhause-laden-wallbox-stromkosten-arbeitgeber` |

#### Wärmepumpe

| Artikel | Cluster | Neue Links im Fließtext auf |
|---|---|---|
| `wie-funktioniert-eine-waermepumpe` | Grundlagen & Auswahl | `welche-waermepumpe-fuer-mein-haus`, `jaz-wirkungsgrad`, `waermepumpe-vorlauftemperatur`, `monoblock-oder-split-waermepumpe` |
| `welche-waermepumpe-fuer-mein-haus` | Grundlagen & Auswahl | `wie-funktioniert-eine-waermepumpe`, `waermepumpe-richtig-aufstellen-standort-schall`, `waermepumpe-kosten-einfamilienhaus` |
| `monoblock-oder-split-waermepumpe` | Grundlagen & Auswahl | `welche-waermepumpe-fuer-mein-haus`, `waermepumpe-richtig-aufstellen-standort-schall`, `waermepumpe-abtauung-vereisung-kondensat` |
| `jaz-wirkungsgrad` | Grundlagen & Auswahl | `waermepumpe-stromverbrauch-berechnen`, `waermepumpe-vorlauftemperatur`, `heizstab-waermepumpe-sinnvoll-stromverbrauch` |
| `waermepumpe-im-altbau` | Planung im Bestand & Heizsystem | `heizlastberechnung-waermepumpe`, `waermepumpe-mit-heizkoerpern`, `waermepumpe-vorlauftemperatur`, `hydraulischer-abgleich-waermepumpe` |
| `waermepumpe-mit-heizkoerpern` | Planung im Bestand & Heizsystem | `waermepumpe-vorlauftemperatur`, `hydraulischer-abgleich-waermepumpe`, `waermepumpe-im-altbau` |
| `waermepumpe-vorlauftemperatur` | Planung im Bestand & Heizsystem | `waermepumpe-richtig-einstellen`, `waermepumpe-mit-heizkoerpern`, `jaz-wirkungsgrad` |
| `heizlastberechnung-waermepumpe` | Planung im Bestand & Heizsystem | `waermepumpe-im-altbau`, `welche-waermepumpe-fuer-mein-haus`, `waermepumpe-taktet-staendig-starts-normal` |
| `hydraulischer-abgleich-waermepumpe` | Planung im Bestand & Heizsystem | `waermepumpe-vorlauftemperatur`, `waermepumpe-foerderung-2026`, `pufferspeicher-waermepumpe` |
| `pufferspeicher-waermepumpe` | Planung im Bestand & Heizsystem | `waermepumpe-taktet-staendig-starts-normal`, `waermepumpe-abtauung-vereisung-kondensat`, `hydraulischer-abgleich-waermepumpe` |
| `waermepumpe-richtig-aufstellen-standort-schall` | Aufstellung, Schall & Winterbetrieb | `waermepumpe-abtauung-vereisung-kondensat` |
| `waermepumpe-schallpegel` | Aufstellung, Schall & Winterbetrieb | `waermepumpe-richtig-aufstellen-standort-schall`, `welche-waermepumpe-fuer-mein-haus` |
| `waermepumpe-abtauung-vereisung-kondensat` | Aufstellung, Schall & Winterbetrieb | `jaz-wirkungsgrad` |
| `waermepumpe-richtig-einstellen` | Betrieb & Optimierung | `waermepumpe-taktet-staendig-starts-normal`, `heizstab-waermepumpe-sinnvoll-stromverbrauch`, `warmwasser-waermepumpe-temperatur-legionellenschutz-kosten`, `waermepumpe-vorlauftemperatur` |
| `waermepumpe-taktet-staendig-starts-normal` | Betrieb & Optimierung | `pufferspeicher-waermepumpe`, `heizlastberechnung-waermepumpe`, `waermepumpe-lebensdauer-wartung` |
| `heizstab-waermepumpe-sinnvoll-stromverbrauch` | Betrieb & Optimierung | `warmwasser-waermepumpe-temperatur-legionellenschutz-kosten`, `jaz-wirkungsgrad` |
| `warmwasser-waermepumpe-temperatur-legionellenschutz-kosten` | Betrieb & Optimierung | `waermepumpe-und-photovoltaik` |
| `waermepumpe-lebensdauer-wartung` | Betrieb & Optimierung | `waermepumpe-taktet-staendig-starts-normal`, `waermepumpe-abtauung-vereisung-kondensat`, `waermepumpe-kosten-einfamilienhaus` |
| `waermepumpe-kosten-einfamilienhaus` | Kosten, Förderung, Strom & Tarife | `waermepumpe-foerderung-2026`, `waermepumpe-stromverbrauch-berechnen`, `heizlastberechnung-waermepumpe`, `waermepumpe-lebensdauer-wartung` |
| `waermepumpe-stromverbrauch-berechnen` | Kosten, Förderung, Strom & Tarife | `jaz-wirkungsgrad`, `waermepumpentarif-oder-dynamischer-stromtarif`, `waermepumpe-und-photovoltaik` |
| `waermepumpe-foerderung-2026` | Kosten, Förderung, Strom & Tarife | `waermepumpe-kosten-einfamilienhaus`, `hydraulischer-abgleich-waermepumpe`, `heizlastberechnung-waermepumpe` |
| `waermepumpentarif-oder-dynamischer-stromtarif` | Kosten, Förderung, Strom & Tarife | `14a-enwg-waermepumpe-messkonzept-8`, `dynamischer-stromtarif-pv-speicher-lohnt-sich`, `zeitvariable-netzentgelte-paragraph-14a-modul-3` |
| `14a-enwg-waermepumpe-messkonzept-8` | Kosten, Förderung, Strom & Tarife | `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen`, `waermepumpentarif-oder-dynamischer-stromtarif`, `steuerbox-paragraf-14a-smart-meter-hems` |
| `waermepumpe-und-photovoltaik` | Kosten, Förderung, Strom & Tarife | `solaranlage-fuer-waermepumpe-auslegen`, `stromspeicher-waermepumpe-nachts-versorgen` |

#### Repowering

| Artikel | Cluster | Neue Links im Fließtext auf |
|---|---|---|
| `repowering-solaranlage` | Entscheidung & Kosten | `alte-pv-anlage-nach-20-jahren`, `repowering-vs-neuanlage`, `repowering-kosten`, `pv-anlage-fehlerdiagnose-stringmessung-isolation-hotspots` |
| `alte-pv-anlage-nach-20-jahren` | Entscheidung & Kosten | `repowering-solaranlage`, `stromspeicher-nachruesten`, `alte-pv-anlage-erweitern-neue-anlage-daneben` |
| `repowering-vs-neuanlage` | Entscheidung & Kosten | `repowering-kosten`, `alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie`, `pv-anlage-dachsanierung-demontage-repowering` |
| `repowering-kosten` | Entscheidung & Kosten | `repowering-vs-neuanlage`, `alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module`, `zaehlerschrank-pv-waermepumpe-smart-meter` |
| `typische-fehler-beim-repowering` | Entscheidung & Kosten | `pv-anlage-fehlerdiagnose-stringmessung-isolation-hotspots`, `zaehlerschrank-pv-waermepumpe-smart-meter`, `repowering-kosten` |
| `pv-anlage-fehlerdiagnose-stringmessung-isolation-hotspots` | Diagnose & Zustand | `alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie`, `pid-hotspots-mikrorisse-delamination-pv-module`, `pv-anlage-liefert-weniger-als-berechnet-abweichung-normal` |
| `alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie` | Diagnose & Zustand | `alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module` |
| `pid-hotspots-mikrorisse-delamination-pv-module` | Diagnose & Zustand | `solarmodule-40-jahre-garantie-produkt-leistung` |
| `alten-wechselrichter-tauschen-moderne-wechselrichter-alte-pv-module` | Umbau, Erweiterung & Komponenten | `alte-pv-module-messen-leerlaufspannung-kurzschlussstrom-kennlinie`, `hybrid-wechselrichter-oder-getrennte-geraete` |
| `alte-pv-anlage-erweitern-neue-anlage-daneben` | Umbau, Erweiterung & Komponenten | `stromspeicher-nachruesten`, `solarmodule-dach-voll-belegen-dachflaeche-freilassen` |
| `pv-anlage-dachsanierung-demontage-repowering` | Umbau, Erweiterung & Komponenten | `solardachpflicht-nrw-2026`, `repowering-vs-neuanlage` |

#### Strom & Energiemanagement

| Artikel | Cluster | Neue Links im Fließtext auf |
|---|---|---|
| `dynamischer-stromtarif-pv-speicher-lohnt-sich` | Strommarkt & Tarife | `strommarkt-einfach-erklaert-boersenstrompreis-netzentgelt-strompreis`, `waermepumpentarif-oder-dynamischer-stromtarif`, `stromspeicher-aus-netz-laden-dynamisch-sinnvoll`, `dynamischer-stromtarif-paragraf-14a-netzentgelt` |
| `negative-strompreise-2026-pv-speicher-eauto` | Strommarkt & Tarife | `eeg-2027-dach-pv-unter-25-kw`, `wallbox-mit-pv-laden` |
| `dynamischer-stromtarif-paragraf-14a-netzentgelt` | Strommarkt & Tarife | `zeitvariable-netzentgelte-paragraph-14a-modul-3`, `hems-wetterprognose-strompreis-ladezustand` |
| `smart-meter-2026-pv-kosten-pflicht-vorteile` | Smart Meter & Messdaten | `smart-meter-auslesen-verbrauchsdaten-trudi`, `zaehlerschrank-pv-waermepumpe-smart-meter` |
| `smart-meter-auslesen-verbrauchsdaten-trudi` | Smart Meter & Messdaten | `westnetz-smart-meter-steuerbox-2026`, `lastgang-15-minuten-werte-verstehen` |
| `lastgang-15-minuten-werte-verstehen` | Smart Meter & Messdaten | `gewerbespeicher-richtig-auslegen-lastgang-kw-kwh`, `mieterstrom-gemeinschaftliche-gebaeudeversorgung-2026` |
| `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen` | § 14a & Netzregeln | `zeitvariable-netzentgelte-paragraph-14a-modul-3`, `steuerbox-paragraf-14a-smart-meter-hems`, `14a-enwg-waermepumpe-messkonzept-8`, `paragraf-14a-enwg-stromspeicher` |
| `zeitvariable-netzentgelte-paragraph-14a-modul-3` | § 14a & Netzregeln | `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen`, `14a-enwg-waermepumpe-messkonzept-8`, `dynamischer-stromtarif-paragraf-14a-netzentgelt` |
| `steuerbox-paragraf-14a-smart-meter-hems` | § 14a & Netzregeln | `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen`, `westnetz-smart-meter-steuerbox-2026` |
| `solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter` | § 14a & Netzregeln | `smart-meter-2026-pv-kosten-pflicht-vorteile`, `pv-anlage-abregeln-strom-nutzen-hems-einspeisebegrenzung`, `eeg-2027-dach-pv-unter-25-kw` |
| `hems-home-energy-management-system-hersteller-app` | HEMS & Steuerung | `cloud-ems-vs-lokales-ems-energiedaten`, `offene-schnittstellen-pv-speicher-hems-hersteller-app`, `hems-wetterprognose-strompreis-ladezustand` |
| `pv-speicher-wallbox-waermepumpe-intelligent-steuern` | HEMS & Steuerung | `hems-wetterprognose-strompreis-ladezustand`, `wallbox-mit-pv-laden`, `waermepumpe-richtig-einstellen` |
| `hems-wetterprognose-strompreis-ladezustand` | HEMS & Steuerung | `pv-speicher-wallbox-waermepumpe-intelligent-steuern` |
| `pv-anlage-abregeln-strom-nutzen-hems-einspeisebegrenzung` | HEMS & Steuerung | `solarspitzengesetz-2026-60-prozent-negative-strompreise-smart-meter`, `hems-home-energy-management-system-hersteller-app` |
| `cloud-ems-vs-lokales-ems-energiedaten` | Lokal, Cloud & Schnittstellen | `internetausfall-pv-speicher-wallbox-hems`, `offene-schnittstellen-pv-speicher-hems-hersteller-app`, `hems-home-energy-management-system-hersteller-app` |
| `internetausfall-pv-speicher-wallbox-hems` | Lokal, Cloud & Schnittstellen | `cloud-ems-vs-lokales-ems-energiedaten`, `pv-ueberschussladen-funktioniert-nicht-ursachen` |
| `offene-schnittstellen-pv-speicher-hems-hersteller-app` | Lokal, Cloud & Schnittstellen | `cloud-ems-vs-lokales-ems-energiedaten` |
| `stromspeicher-aus-netz-laden-dynamisch-sinnvoll` | Speicher & Eigenverbrauch | `speicherwirkungsgrad-verluste-geladen-nutzbar`, `paragraf-14a-enwg-stromspeicher`, `stromspeicher-im-winter-oft-leer` |
| `eigenverbrauch-optimieren-100-prozent-autarkie` | Speicher & Eigenverbrauch | `wie-gross-sollte-ein-stromspeicher-sein`, `solarmodule-dach-voll-belegen-dachflaeche-freilassen` |

---

## 9. Qualitätsmängel

### 9.1 Doppelte Titelbilder

| Bild | Alt-Text | verwendet in |
|---|---|---|
| `stromspeicher.webp` | Stromspeicher | `solaranlage-mit-oder-ohne-speicher`, `lohnt-sich-ein-stromspeicher`, `wie-gross-sollte-ein-stromspeicher-sein`, `wie-lange-haelt-ein-stromspeicher` |
| `repowering.webp` | Repowering von PV-Anlagen | `repowering-solaranlage`, `alte-pv-anlage-nach-20-jahren`, `repowering-kosten` |
| `Screenshot 2026-04-22 105130.webp` | Alter Zähler auf einer Montageplatte | `repowering-vs-neuanlage`, `typische-fehler-beim-repowering` |
| `foerderung.webp` | **Wallbox anmelden** | `wallbox-anmelden-netzbetreiber`, `pv-anlage-anmelden-marktstammdatenregister` (Alt-Text passt nicht zum PV-Artikel) |
| `Solaranlage in moers.webp` | ein Dach mit einer Solaranlage in Moers | `ost-west-oder-sueddach-solaranlage`, `kosten-solaranlage-einfamilienhaus` |
| `privatkunden-2.webp` | **Zählerschrank** | `wie-viel-strom-erzeugt-eine-10-kwp-solaranlage`, `…-15-kwp-…` (Motiv passt nicht zum Thema Ertrag) |
| `Solaranlage in voerde.webp` | Planung einer Solaranlage | `kosten-10-kwp-solaranlage-mit-speicher`, `pv-anlage-planen` |
| `Smart Meter auslesen So kommst du an Verbrauchsdaten.webp` | Smart Meter auslesen: … | `smart-meter-auslesen-verbrauchsdaten-trudi`, `westnetz-smart-meter-steuerbox-2026` |
| `iMSys-Zaehler.webp` | ein intelligentes Messsystem | `smart-meter-2026-…`, `waermepumpe-stromverbrauch-berechnen` |
| `§14a_EnWG.webp` | §14a_EnWG | `paragraf-14a-enwg-stromspeicher`, `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen` |
| `02_Solarstrom_speichern.webp` | **Stromspeicher nachrüsten** | `stromspeicher-nachruesten`, `notstrom-oder-ersatzstrom` (Alt-Text passt nicht zum Notstrom-Artikel) |
| `SMA-Wallbox.webp` | SMA Wallbox | `wallbox-11-oder-22-kw`, `wallbox-zu-hause-laden` |

Wichtig für die Umsetzung: Der Alt-Text hängt am Media-Dokument. Ein geänderter Alt-Text ändert ihn in **allen** Artikeln, die dasselbe Bild nutzen. Wo ein Bild zwei Themen bedient, braucht es ein zweites Bild, nicht nur einen anderen Alt-Text. Neue Bilder kann ich nicht erzeugen – dafür brauche ich Dateien von dir oder die Freigabe, vorhandene Bilder umzuverteilen.

### 9.2 Unpassende Alt-Texte

| Artikel | Alt-Text heute | Problem | Vorschlag |
|---|---|---|---|
| `pv-anlage-anmelden-marktstammdatenregister` | Wallbox anmelden | falsches Thema (geteiltes Bild) | eigenes Bild, dann z. B. „Unterlagen zur Anmeldung einer PV-Anlage“ |
| `notstrom-oder-ersatzstrom` | Stromspeicher nachrüsten | falsches Thema (geteiltes Bild) | eigenes Bild |
| `wie-viel-strom-erzeugt-eine-10/15-kwp-solaranlage` | Zählerschrank | Motiv passt nicht | eigenes Bild |
| `waermepumpe-stromverbrauch-berechnen` | ein intelligentes Messsystem␠ | Motiv passt nur bedingt, Leerzeichen am Ende | eigenes Bild oder „Stromzähler zur Messung des Wärmepumpenverbrauchs“ |
| `cloud-ems-vs-lokales-ems-energiedaten` | PEAK.Flex | beschreibt das Bild nicht | Bildinhalt beschreiben |
| `paragraf-14a-…` (2×) | §14a_EnWG | Dateiname | z. B. „Steuerbox nach § 14a EnWG im Zählerschrank“ (je nach Motiv) |
| `14a-enwg-waermepumpe-messkonzept-8` | Meßkonzept Acht | Rechtschreibung (ß), unverständlich | „Messkonzept 8: Kaskadenmessung für Wärmepumpe und PV“ |
| `wirtschaftlichkeit-eeg` | wirtschaftlichkeit-eeg | Slug | (Artikel verdeckt, siehe 3) |
| `wer-darf-photovoltaikanlagen-installieren` | photovoltaik-handwerksrolle | Slug | Bildinhalt beschreiben |
| `waermepumpe-schallpegel` | Schallpegel-Waermepumpe | Dateiname | „Außengerät einer Luft-Wärmepumpe an der Hauswand“ o. ä. |
| `waermepumpe-und-photovoltaik` | PV-und-Waermepumpe | Dateiname | Bildinhalt beschreiben |
| `pv-anlage-fehlerdiagnose-…` | „Alte PV-Anlage prüfen statt blind tauschen:“ | Doppelpunkt am Ende, Titel statt Bildbeschreibung | Bildinhalt beschreiben |
| `stromspeicher-kapazitaet-leistung-kw-kwh` | „Stromspeicher: kW oder kWh?␠“ | Leerzeichen am Ende, Titel statt Bildbeschreibung | Bildinhalt beschreiben |
| `solaranlage-gewerbedach` | ein Bild einer Logistikhalle mit einer PV-Anlage | „ein Bild“ überflüssig | „Logistikhalle mit PV-Anlage auf dem Flachdach“ |
| `wallbox-mit-pv-laden` | Wallbox die ein Auto lädt | Komma fehlt | „Wallbox, die ein E-Auto lädt“ |
| `null-euro-anzahlung-photovoltaik` | 0€ Anzahlung für dein Energiesystem | Werbesatz statt Bildbeschreibung | Bildinhalt beschreiben |

Außerdem ist bei 64 Artikeln der Alt-Text einfach der Artikeltitel (oder ein Teil davon). Das ist nicht falsch, beschreibt aber nicht, was auf dem Bild zu sehen ist. Für eine sinnvolle Beschreibung muss ich die Bilder sehen – das würde ich in Phase 3 mit einem eigenen Script machen, sofern du das willst.

### 9.3 Tippfehler und Formfehler

| Artikel | Feld | Fundstelle | Korrektur |
|---|---|---|---|
| `hybrid-wechselrichter-oder-getrennte-geraete` | Teaser | „… von Anlagenkonzept, Bestand ect.“ | Satz sauber beenden, z. B. „… von Anlagenkonzept, Bestand und Erweiterungsplänen.“ – genaue Formulierung stimme ich mit dir ab |
| `wallbox-11-oder-22-kw` | Teaser | „nicht nur Ladezeit␠␠sondern Fahrzeug, Hausanschluss ect“ | „nicht nur die Ladezeit, sondern auch Fahrzeug, Hausanschluss und …“ |
| `typische-fehler-beim-repowering` | Teaser | „Wer Modulzustand, Dach, Elektrik oder Wirtschaftlichkeit falsch einschätzt.“ | unvollständiger Satz, Hauptsatz fehlt |
| `kosten-solaranlage-einfamilienhaus` | Inhalt | Zwischenüberschriften 1–4, dann 6 | Nummerierung korrigieren (entfällt bei Zusammenlegung) |
| `solaranlage-mit-oder-ohne-speicher` | metaTitle | „PEAK.Energy␠␠– WE ♥️ ENERGY“ | doppeltes Leerzeichen (wird ohnehin vom Frontend ersetzt) |
| `14a-enwg-waermepumpe-messkonzept-8` | Alt-Text | „Meßkonzept“ | „Messkonzept“ |
| `ab-wieviel-qm-lohnt-sich-eine-solaranlage` | Titel, Meta, FAQ | „wieviel“ | Duden: „wie viel“. Die Schreibweise ist vermutlich bewusst am Suchbegriff orientiert – ich lasse sie, außer du willst es anders. |

„etc.“ in `multi-use-stromspeicher` („Tibber, awattar etc.“) ist korrekt.

### 9.4 Sie-Form statt Du-Form

16 Artikel, 47 Stellen. Direkte Zitate (z. B. „Speichern Sie Ihren Sommerstrom …“ in `cloud-speicher-stromspeicher-vergleich`, „Auf Ihre Anlage haben Sie 25 Jahre Garantie.“ und „leider können wir Ihren Anspruch nicht prüfen“ in `garantie-vs-gewaehrleistung-pv-anlage`) sind bewusst in Sie-Form und bleiben so.

| Artikel | Stellen | wo |
|---|---|---|
| `jaz-wirkungsgrad` | 8 | Text, CTA, FAQ |
| `wer-darf-photovoltaikanlagen-installieren` | 7 | Tipp-Box, Hinweis-Box, Fazit, FAQ |
| `wie-funktioniert-eine-waermepumpe` | 6 | **Teaser**, Text, CTA |
| `amortisation-pv-anlage` | 5 | Text, CTA |
| `wallbox-11-oder-22-kw` | 5 | Text, CTA |
| `wallbox-kosten` | 3 | **metaDescription**, Zwischenüberschrift „Worauf Sie beim Kauf …“, Text |
| `photovoltaik-foerderung` | 2 | CTA |
| `wirtschaftlichkeit-eeg` | 2 | Text, CTA (verdeckt) |
| `wallbox-mit-pv-laden` | 2 | Text |
| `null-euro-anzahlung-photovoltaik` | 1 | **metaDescription** |
| `photovoltaik-steuern`, `speicher-nachruesten`, `notstrom-backup`, `entsorgung-recycling`, `bidirektionales-laden`, `wallbox-anmelden-netzbetreiber` | je 1 | Text, FAQ oder CTA |
| `cloud-speicher-stromspeicher-vergleich`, `garantie-vs-gewaehrleistung-pv-anlage` | 0 (nur Zitate) | – |

### 9.5 Floskel „ehrliche Einordnung“

„ehrlich…“ kommt 274-mal in 66 Artikeln vor. Die feste Floskel „ehrliche Einordnung / ehrlich eingeordnet / Eine ehrliche Einordnung“ 71-mal, davon:

- **Titel:** `lohnt-sich-ein-stromspeicher` („Lohnt sich ein Stromspeicher? Eine ehrliche Einordnung für 2026“)
- **metaTitle (4):** `kosten-solaranlage-einfamilienhaus` („Ehrliche Preise vom Meisterbetrieb“), `waermepumpe-kosten-einfamilienhaus`, `waermepumpe-vorlauftemperatur` („ehrlich eingeordnet“), `wallbox-11-oder-22-kw` („Der ehrliche Vergleich“)
- **Teaser (24):** fast alle März-Artikel folgen dem Muster „Hier findest du eine ehrliche Einordnung zu …“ (`braucht-man-einen-stromspeicher`, `einspeiseverguetung-photovoltaik-2026`, `typische-fehler-bei-solaranlagen`, `solaranlage-fuer-e-auto-auslegen`, `solaranlage-fuer-waermepumpe-auslegen`, `ost-west-oder-sueddach-solaranlage`, `wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein`, `wie-viel-strom-erzeugt-eine-10/15-kwp-solaranlage`, `wie-viel-autarkie-ist-realistisch`, `was-bringt-eine-solaranlage-im-winter`, `notstrom-oder-ersatzstrom`, `wie-gross-sollte-ein-stromspeicher-sein`, `wie-lange-haelt-ein-stromspeicher`, `stromspeicher-nachruesten`, `wallbox-zu-hause-laden`, dazu `repowering-solaranlage`, `photovoltaik-foerderung`, `solarteur-insolvent-was-tun`, `garantie-vs-gewaehrleistung-pv-anlage`, `pv-anlage-anmelden-marktstammdatenregister`, `pv-gewerbe-wirtschaftlichkeit-beispielrechnung`, `cloud-speicher-stromspeicher-vergleich`, `waermepumpe-und-photovoltaik`)
- **metaDescription (48):** fast alle älteren Artikel enden auf „… – ehrlich eingeordnet / ehrlich erklärt von PEAK.Energy“.
- **Frontend-Code:** Intro der Kategorie Stromspeicher („Ehrliche Einordnungen zu …“) in `pe/src/app/(main)/stromspeicher/page.tsx` und `ratgeber/page.tsx`, metaDescription Strom & EM („… ehrlich eingeordnet.“) in `ratgeber/page.tsx`.

Die übrigen rund 200 Vorkommen im Fließtext sind unterschiedlich: „die ehrliche Antwort“, „Wann man ehrlich bremsen sollte“ (Zwischenüberschrift in zwei Wärmepumpen-Artikeln), „ehrlich gerechnet“ usw. Das ist inhaltlich nicht falsch, wirkt in dieser Häufung aber als Masche.

### 9.6 „WE ♥️ ENERGY“ im Title

- 20 Artikel haben das Suffix im Feld `seo.metaTitle` (fast alle März-Artikel).
- **Live hat es jeder Artikel**, weil `withPeakSeoTitle()` (`pe/src/lib/seo/titles.ts`) jeden Titel auf „… | PEAK.Energy – WE ♥️ ENERGY“ normalisiert. Auch `ratgeber/page.tsx` und die Produktseiten setzen es fest.
- Das Suffix ist 29 Zeichen lang. Mit Suffix ist jeder der 133 Artikel-Titel länger als 60 Zeichen und wird in den Suchergebnissen abgeschnitten; ohne Suffix wären es 15.

Die eigentliche Änderung liegt also im Frontend, nicht im CMS. Wie weit sie gehen soll, ist deine Entscheidung (siehe 10).

### 9.7 Dünne Artikel

Unter 500 Wörtern, Gerüst „1. [Frage] / 2. Fazit“: `braucht-man-einen-stromspeicher` (370), `stromspeicher-nachruesten` (392), `wie-viel-autarkie-ist-realistisch` (406), `was-bringt-eine-solaranlage-im-winter` (423), `wie-lange-haelt-ein-stromspeicher` (424), `wallbox-zu-hause-laden` (431), `wie-viel-strom-erzeugt-eine-10-kwp-solaranlage` (435), `einspeiseverguetung-photovoltaik-2026` (437), `wie-gross-sollte-ein-stromspeicher-sein` (442), `wie-viel-strom-erzeugt-eine-15-kwp-solaranlage` (448). Zwei davon verschwinden durch Zusammenlegen. Die übrigen inhaltlich auszubauen, ist nicht Teil dieses Auftrags (keine inhaltlichen Änderungen) – nur als Hinweis.

### 9.8 Weitere Strukturmängel

- **Doppelte Abschnitte in der Serie vom 08.09. bis 27.09. (20 Artikel):** Jeder Artikel besteht aus einem kurzen Block und einem Vertiefungsblock, die dieselben Unterfragen noch einmal behandeln (z. B. in `pv-anlage-bei-stromausfall-…`: „Leistung und Energie sind zwei Grenzen“ und „Leistung und Energie sind im Inselbetrieb knapper“; „Warum der Wechselrichter abschaltet“ und „Netzgekoppelte Wechselrichter müssen abschalten“). Die Zusammenfassung wiederholt Sätze aus der „kurzen Antwort“. Zusammenführen wäre eine Strukturänderung ohne neue Aussagen, verändert aber sichtbar viel Text – nur mit deiner Freigabe.
- **Doppelte FAQ-Fragen** in mehreren Artikeln (FAQ-Schema): siehe 7.10, außerdem „Was ist der häufigste Denkfehler bei diesem Vergleich?“ und „Was ist am Ende die beste Entscheidung?“ in `ost-west-oder-sueddach-solaranlage`, `solaranlage-mit-oder-ohne-speicher`, `notstrom-oder-ersatzstrom`.
- **metaDescription zu lang** (> 170 Zeichen, wird abgeschnitten): 33 Artikel, Spitzenreiter `lastspitzenkappung-stromspeicher-gewerbe` (293) und `multi-use-stromspeicher` (288).

---

## 10. Entscheidungen, die ich von dir brauche

1. **Zusammenlegen (Phase 4)** – bitte je Zeile Ja/Nein:
   - [ ] `braucht-man-einen-stromspeicher` → `lohnt-sich-ein-stromspeicher`
   - [ ] `wie-viel-autarkie-ist-realistisch` → `eigenverbrauch-optimieren-100-prozent-autarkie`
   - [ ] `kosten-solaranlage-einfamilienhaus` → `kosten-solaranlage-mit-speicher-einfamilienhaus`
   - [ ] `lokales-hems-hersteller-cloud-server-internet-ausfall` → `cloud-ems-vs-lokales-ems-energiedaten`
2. **Kategorie verschieben (Phase 2, jeweils mit 301):** `cloud-ems-vs-lokales-ems-energiedaten` → Strom & EM, `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen` → Strom & EM, `pv-anlage-bei-stromausfall-solarstrom-reicht-nicht` → Stromspeicher. Einverstanden?
3. **Verdeckte Repowering-Artikel (3):** `entsorgung-recycling` neuer Slug; `speicher-nachruesten`, `wirtschaftlichkeit-eeg`, `notstrom-backup` auf Entwurf; `hems-monitoring`, `komponenten-tausch`, `rueckbau-montage` neuer Slug oder Entwurf?
4. **Kategorieseiten (Phase 2):** Wo soll die gruppierte Ansicht leben? Heute ist `/ratgeber?kategorie=…` die Liste, `/solaranlage` usw. sind Produktseiten. Optionen:
   a) Gruppen auf `/ratgeber?kategorie=…` (kleinster Eingriff, aber URL mit Query-Parameter),
   b) eigene Hub-Seiten wie `/ratgeber/solaranlage` nach dem Muster von `/strom-energiemanagement` (beste Struktur für Google, neue URLs),
   c) Gruppen unter den Produktseiten `/solaranlage` usw. (vermischt Verkauf und Ratgeber).
   Meine Empfehlung: b), und `/ratgeber?kategorie=…` per 301 dorthin.
5. **„WE ♥️ ENERGY“:** nur für Ratgeber-Artikel entfernen, für alle Ratgeber-Seiten (inkl. Übersicht/Hubs) oder website-weit?
6. **„ehrlich“:** nur die feste Floskel „ehrliche Einordnung / ehrlich eingeordnet / ehrlich erklärt“ ersetzen (Titel, metaTitle, Teaser, metaDescription, Kategorie-Intros), oder zusätzlich die Häufung im Fließtext reduzieren?
7. **Link-Listen am Ende** der 20 September-Artikel: in den Fließtext überführen und die Liste entfernen?
8. **Doppelte FAQ-Fragen und doppelte Abschnitte (9.8):** in diesem Projekt bereinigen oder separat?
9. **Vier nicht veröffentlichte Scripts (1.1):** Status klären – dafür bitte einmal `export-ratgeber.mjs` ausführen.
10. **Umsetzungsweg:** Migrations-Scripts ändern die DB direkt. Wird danach ein ursprüngliches Artikel-Script erneut ausgeführt, überschreibt es die Änderungen. Soll ich in Phase 3 zusätzlich die Ursprungs-Scripts in `scripts/ratgeber/` anpassen, damit sie den neuen Stand enthalten? (Empfehlung: ja, bei Artikeln mit eigenem Script; bei den Sammel-Scripts `ratgeber-mix-…` schwieriger – dann Hinweis im README, sie nicht erneut auszuführen.)
