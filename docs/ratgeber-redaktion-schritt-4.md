# Ratgeber – Redaktion (Schritt 4, Teil 1)

Stand: 30.09.2026 · Branch `claude/vibrant-mccarthy-pep1xa`

Dieser Schritt korrigiert Form, nicht Inhalt. Fachliche Aussagen bleiben unverändert.

## Was geändert wird

| | Anzahl |
|---|---|
| Floskel „ehrliche Einordnung / ehrlich eingeordnet / ehrlich erklärt“ und verwandte Standardformeln in Titel, Teaser, metaTitle, metaDescription | 71 Stellen |
| Sie-Form → Du-Form | 37 Stellen in 17 Artikeln |
| Tippfehler, unvollständige Sätze, Nummerierung | 4 Stellen |
| „– WE ♥️ ENERGY“ und doppelte Leerzeichen im metaTitle | 24 Artikel |
| Alt-Texte der Titelbilder | 15 Bilder (19 Artikel) |
| Frontend (pe): Fallback-Beschreibung „Ehrliche Informationen vom …“ | 1 Text an 2 Stellen |

Insgesamt 61 Artikel. Die Zahlen stammen aus einem Probelauf gegen eine Kopie der Live-Daten.

## So wird es umgesetzt

- `scripts/ratgeber/_textCorrections.mjs`: Alle Textkorrekturen als Paare *vorher → nachher* je Artikel und Feld. `normalizeMetaTitle` entfernt den Slogan aus dem metaTitle.
- `scripts/ratgeber/_mediaAlt.mjs`: neue Alt-Texte je Bilddatei.
- `scripts/ratgeber/migrate-2026-09-30-redaktion.mjs`: schreibt beides in die Datenbank. Ohne `--apply` zeigt es nur eine Vorschau, mit `--details` jede einzelne Stelle.
- `upsertRatgeberArticle` wendet die Textkorrekturen ebenfalls an. Wenn ein Ursprungs-Script erneut läuft, stellt es die alten Texte also nicht wieder her.
- Drei Scripts schrieben bisher an `upsertRatgeberArticle` vorbei: `ab-wieviel-qm-lohnt-sich-eine-solaranlage.mjs`, `kosten-solaranlage-mit-speicher-einfamilienhaus.mjs` und `scripts/seed-ratgeber.mjs` (Ursprung von `kosten-solaranlage-einfamilienhaus`). Sie haben den Artikel gelöscht und neu angelegt. Dabei gingen Titelbild, Cluster, interne Links und Veröffentlichungsdatum verloren. Jetzt laufen sie über `upsertRatgeberArticle`. Den Text habe ich nicht angefasst. In `seed-ratgeber.mjs` fehlte der Teaser, den ich aus dem Live-Stand übernommen habe.

Aufruf in Coolify:

```
node scripts/ratgeber/migrate-2026-09-30-redaktion.mjs            # Vorschau
node scripts/ratgeber/migrate-2026-09-30-redaktion.mjs --details  # Vorschau mit allen Stellen
node scripts/ratgeber/migrate-2026-09-30-redaktion.mjs --apply    # schreiben
```

## Bitte besonders prüfen

Stellen, an denen nicht nur gestrichen wird:

1. **Teaser mit Tippfehlern oder abgebrochenen Sätzen** in `hybrid-wechselrichter-oder-getrennte-geraete`, `wallbox-11-oder-22-kw` und `typische-fehler-beim-repowering`. In den Ursprungs-Scripts stehen diese Sätze vollständig und fehlerfrei. Live ist offenbar eine im Admin gekürzte Fassung. Ich übernehme den Wortlaut der Scripts, formuliere also nichts neu:
   - „… von Anlagenkonzept, Bestand ect.“ → „… von Anlagenkonzept, Bestand und Erweiterungsplänen.“
   - „Entscheidend sind nicht nur Ladezeit␠␠sondern Fahrzeug, Hausanschluss ect“ → „Entscheidend sind nicht nur Ladezeit und Gerät, sondern Fahrzeug, Hausanschluss, Netzbetreiber und Alltag.“
   - „Wer Modulzustand, Dach, Elektrik oder Wirtschaftlichkeit falsch einschätzt.“ → „… falsch einschätzt, zahlt am Ende mehr als nötig.“
2. **`lohnt-sich-ein-stromspeicher`, Titel (H1):** „Lohnt sich ein Stromspeicher? Eine ehrliche Einordnung für 2026“ → „Lohnt sich ein Stromspeicher 2026?“
3. **`wallbox-kosten`, Zwischenüberschrift:** „Worauf Sie beim Kauf nicht nur auf den Preis schauen sollten“ ist doppelt gemoppelt (worauf … auf). Neu: „Beim Kauf nicht nur auf den Preis schauen“.
4. **Teaser nach Muster „Hier findest du eine ehrliche Einordnung zu A, B und C.“** werden zu „Hier geht es um A, B und C.“ Beispiel: `braucht-man-einen-stromspeicher`. Ausnahmen: `notstrom-oder-ersatzstrom` („Hier erfährst du, worin …“), `stromspeicher-nachruesten` und `wallbox-zu-hause-laden` („Worauf es dabei ankommt, liest du hier.“).
5. **metaDescriptions nach Muster „X? Ehrliche Einordnung zu A, B und typischen Denkfehlern – von PEAK.Energy.“** werden zu „X? A, B und typische Denkfehler – von PEAK.Energy.“
6. **`wer-darf-photovoltaikanlagen-installieren`:** „Fragen Sie: „Warum empfehlen Sie …““ wird zu „Frag nach: „Warum empfehlen Sie …““. Die Frage an den Berater bleibt in Sie-Form, weil sie wörtlich zitiert ist.

## Bewusst nicht geändert

- **Zitate in Sie-Form:** `cloud-speicher-stromspeicher-vergleich` (Werbeversprechen) und `garantie-vs-gewaehrleistung-pv-anlage` („Auf Ihre Anlage haben Sie …“, „leider können wir Ihren Anspruch nicht prüfen“).
- **„Ihr/Ihre“ in der 3. Person** (z. B. „Wärmepumpen modulieren. Ihre elektrische Aufnahme …“). Diese Stellen sind grammatisch richtig.
- **„ehrlich“ im Fließtext**, wie mit dir besprochen. Das betrifft auch vier Teaser, in denen „ehrlich“ Teil einer eigenen Aussage ist und keine Floskel:
  - `cloud-speicher-stromspeicher-vergleich`: „… selten ehrlich stehen“
  - `pv-gewerbe-wirtschaftlichkeit-beispielrechnung`: „wie der Steuerhebel ehrlich wirkt“
  - `repowering-solaranlage`: „die ehrliche Bewertung des Bestands“
  - `waermepumpe-und-photovoltaik`: „Wer das ehrlich einordnet“
- **„Ab wieviel qm“:** Die Schreibweise folgt dem Suchbegriff.
- **Verdeckte Artikel** (`notstrom-backup`, `speicher-nachruesten`, `wirtschaftlichkeit-eeg`) enthalten ebenfalls Sie-Form. Sie sind nicht öffentlich und werden in der Zusammenlegung ohnehin neu bewertet.
- **Marketingseiten außerhalb des Ratgebers** (`/ueber-uns`, `/leistungen/foerdermittelservice`, `/einsatzorte/…`) nutzen „ehrliche Einordnung“ ebenfalls, teils auch in Sie-Form. Das gehört nicht zum Ratgeber, deshalb nur als Hinweis.

## Alt-Texte

Ich habe mir alle 15 Bilder angesehen. Wo ein Bild in zwei Artikeln steckt, beschreibt der Alt-Text das Motiv so, dass er für beide passt.

| Bild | Artikel | vorher | nachher |
|---|---|---|---|
| Alte PV-Anlage prüfen statt blind tauschen.webp | pv-anlage-fehlerdiagnose-… | Alte PV-Anlage prüfen statt blind tauschen: | Techniker prüft eine PV-Anlage mit der Wärmebildkamera, daneben Grafiken zu Stringmessung, Isolation und Hotspots |
| Stromspeicher kW oder kWh.webp | stromspeicher-kapazitaet-leistung-kw-kwh | Stromspeicher: kW oder kWh?␠ | Heimspeicher im Einfamilienhaus mit Anzeige der Kapazität in kWh und der Leistung in kW |
| iMSys-Zaehler.webp | smart-meter-2026-…, waermepumpe-stromverbrauch-berechnen | ein intelligentes Messsystem␠ | Intelligentes Messsystem: Stromzähler mit aufgesetztem Smart-Meter-Gateway |
| MK8.webp | 14a-enwg-waermepumpe-messkonzept-8 | Meßkonzept Acht | Schema zu Messkonzept 8 (Kaskadenmessung) mit Zählern für Haushalt, Wärmepumpe und PV-Anlage |
| photovoltaik-handwerksrolle-olg.webp | wer-darf-photovoltaikanlagen-installieren | photovoltaik-handwerksrolle | Dachdecker montiert PV-Module, Elektriker arbeitet am Zählerschrank |
| foerderung.webp | wallbox-anmelden-netzbetreiber, pv-anlage-anmelden-marktstammdatenregister | Wallbox anmelden | Anmeldung im Online-Portal des Netzbetreibers am Computer |
| logistikhalle.webp | solaranlage-gewerbedach | ein Bild einer Logistikhalle mit einer PV-Anlage | Logistikhalle mit PV-Anlage auf dem Flachdach |
| peakflex.webp | cloud-ems-vs-lokales-ems-energiedaten | PEAK.Flex | Live-Ansicht in PEAK.Flex mit Autarkie, PV-Erzeugung, Hausverbrauch, Speicherstand und Netzbezug |
| 0€Anzahlung.webp | null-euro-anzahlung-photovoltaik | 0€ Anzahlung für dein Energiesystem | Goldenes 0-€-Zeichen vor Solarmodulen |
| Schallpegel-Waermepumpe.webp | waermepumpe-schallpegel | Schallpegel-Waermepumpe | Außengerät einer Luft-Wärmepumpe vor dem Haus mit Lautsprecher-Symbol |
| PV-und-Waermepumpe.webp | waermepumpe-und-photovoltaik | PV-und-Waermepumpe | Einfamilienhaus mit PV-Anlage auf dem Dach und Luft-Wärmepumpe im Garten |
| §14a_EnWG.webp | paragraf-14a-enwg-stromspeicher, paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen | §14a_EnWG | Paragrafenzeichen mit dem Schriftzug „14a EnWG“ |
| Wallbox-Haus.webp | wallbox-mit-pv-laden | Wallbox die ein Auto lädt | Wallbox an der Hauswand, die ein E-Auto lädt |
| 02_Solarstrom_speichern.webp | stromspeicher-nachruesten, notstrom-oder-ersatzstrom | Stromspeicher nachrüsten | Modernes Haus mit Solaranlage in der Abenddämmerung |
| privatkunden-2.webp | wie-viel-strom-erzeugt-eine-10/15-kwp-solaranlage | Zählerschrank | Geöffneter Zählerschrank, daneben der Wechselrichter einer PV-Anlage |

Offen bleiben:

- **Motive, die nicht zum Thema passen.** Der Zählerschrank bei den Ertragsartikeln und das Haus in der Dämmerung beim Notstrom-Artikel lassen sich nur mit einem anderen Bild lösen.
- **64 Artikel, deren Alt-Text der Artikeltitel ist.** Das ist nicht falsch, aber auch keine Bildbeschreibung. Ich kann diese Bilder genauso durchgehen, wenn du willst.

## Weitere Befunde

- **Zugangsdaten im Repository.** `scripts/seed-ratgeber.mjs` enthielt als Rückfallwert eine vollständige MongoDB-URL samt Root-Passwort. Ich habe sie entfernt. Das Script bricht jetzt wie alle anderen ab, wenn `DATABASE_URL` fehlt. Das Passwort steht aber weiter in der Git-Historie. **Bitte das Datenbank-Passwort in Coolify ändern.**
- **`einspeiseverguetung-photovoltaik-2026.mjs` ist neuer als der Live-Artikel.** Das Script wurde am 10.08. auf die Sätze ab 1. August 2026 aktualisiert, aber nie ausgeführt. Live steht noch die ältere Fassung. Führt jemand das Script aus, ersetzt es den Artikel komplett, und zwei interne Links („saubere Planung“, „Größe der Anlage“) fallen weg, weil der neue Text diese Stellen nicht hat. Ob die neue Fassung live gehen soll, ist eine inhaltliche Entscheidung. Ich habe nichts daran geändert.
- **Gegenprobe aus Schritt 3 und 4.** Ich habe eine leere Datenbank nur aus den 118 Ursprungs-Scripts neu aufgebaut. Alle Scripts laufen ohne Fehler durch. 335 der 337 internen Links entstehen neu (es fehlen nur die zwei oben genannten). Alle Korrekturen dieses Schritts sind danach enthalten, keine bleibt offen.

## Alle Textstellen

### Floskel „ehrlich …“ (71)

| Artikel | Feld | vorher | nachher |
|---|---|---|---|
| `amortisation-pv-anlage` | seo.metaDescription | Wann amortisiert sich eine Solaranlage? Die ehrliche Rechnung: Eigenverbrauch | Wann amortisiert sich eine Solaranlage? Die Rechnung: Eigenverbrauch |
| `einspeiseverguetung-photovoltaik-2026` | teaser | Hier findest du eine ehrliche Einordnung zu Überschusseinspeisung, Anlagengröße und typischen Denkfehlern. | Hier geht es um Überschusseinspeisung, Anlagengröße und typische Denkfehler. |
| `einspeiseverguetung-photovoltaik-2026` | seo.metaDescription | Einspeisevergütung Photovoltaik 2026: ehrliche Einordnung zu Überschusseinspeisung, Anlagengröße und Wirtschaftlichkeit – von PEAK.Energy. | Einspeisevergütung Photovoltaik 2026: Überschusseinspeisung, Anlagengröße und Wirtschaftlichkeit – von PEAK.Energy. |
| `garantie-vs-gewaehrleistung-pv-anlage` | teaser | Eine ehrliche Einordnung mit konkreten Schadensfällen, Stolperfallen in den Garantiebedingungen und einer klaren Antwort, was im Insolvenzfall wirklich bleibt. | Mit konkreten Schadensfällen, Stolperfallen in den Garantiebedingungen und einer klaren Antwort, was im Insolvenzfall wirklich bleibt. |
| `hybrid-wechselrichter-oder-getrennte-geraete` | seo.metaDescription | Hybrid-Wechselrichter oder getrennte Geräte? Ehrliche Einordnung zu Topologie, Notstrom, Erweiterbarkeit und typischen Denkfehlern bei der Auswahl | Hybrid-Wechselrichter oder getrennte Geräte? Topologie, Notstrom, Erweiterbarkeit und typische Denkfehler bei der Auswahl |
| `kosten-10-kwp-solaranlage-mit-speicher` | seo.metaDescription | – ehrlich erklärt von PEAK.Energy. | – erklärt von PEAK.Energy. |
| `kosten-15-kwp-solaranlage-mit-speicher` | seo.metaDescription | – ehrlich erklärt von PEAK.Energy. | – erklärt von PEAK.Energy. |
| `kosten-solaranlage-einfamilienhaus` | seo.metaTitle | Was kostet eine Solaranlage? Ehrliche Preise vom Meisterbetrieb | Was kostet eine Solaranlage? Preise vom Meisterbetrieb |
| `kosten-solaranlage-mit-speicher-einfamilienhaus` | seo.metaDescription | – ehrlich erklärt von PEAK.Energy. | – erklärt von PEAK.Energy. |
| `ost-west-oder-sueddach-solaranlage` | teaser | Hier findest du eine ehrliche Einordnung zu Ertrag, Alltag und typischen Denkfehlern. | Hier geht es um Ertrag, Alltag und typische Denkfehler. |
| `ost-west-oder-sueddach-solaranlage` | seo.metaDescription | Ehrlicher Vergleich zu Ertrag, Alltag, Verbrauch und typischen Denkfehlern | Vergleich zu Ertrag, Alltag, Verbrauch und typischen Denkfehlern |
| `photovoltaik-foerderung` | teaser | Ein ehrlicher Überblick, welche Förderung wie viel bringt | Ein Überblick, welche Förderung wie viel bringt |
| `pv-anlage-anmelden-marktstammdatenregister` | teaser | Eine ehrliche Schritt-für-Schritt-Anleitung mit allen Stolpersteinen. | Eine Schritt-für-Schritt-Anleitung mit allen Stolpersteinen. |
| `pv-anlage-planen` | seo.metaDescription | – ehrlich erklärt von PEAK.Energy. | – erklärt von PEAK.Energy. |
| `pv-gewerbe-wirtschaftlichkeit-beispielrechnung` | seo.metaDescription | – konservativ gerechnet, ehrlich erklärt, mit Sensitivität | – konservativ gerechnet, mit Sensitivität |
| `pv-landwirtschaft-stalldach` | seo.metaDescription | – mit ehrlicher Einordnung zu Asbestsanierung, | – mit Einordnung zu Asbestsanierung, |
| `solaranlage-fuer-e-auto-auslegen` | teaser | Hier findest du eine ehrliche Einordnung zu Dach, Wallbox, Ladebedarf und typischen Fehlern. | Hier geht es um Dach, Wallbox, Ladebedarf und typische Fehler. |
| `solaranlage-fuer-e-auto-auslegen` | seo.metaDescription | – ehrlich erklärt von PEAK.Energy. | – erklärt von PEAK.Energy. |
| `solaranlage-fuer-waermepumpe-auslegen` | teaser | Hier findest du eine ehrliche Einordnung zu Auslegung, Dachfläche, Speicher und typischen Fehlern. | Hier geht es um Auslegung, Dachfläche, Speicher und typische Fehler. |
| `solaranlage-fuer-waermepumpe-auslegen` | seo.metaDescription | – ehrlich erklärt von PEAK.Energy. | – erklärt von PEAK.Energy. |
| `solaranlage-gewerbedach` | seo.metaDescription | Ehrliche Einordnung zu Statik, Netzanschluss, Brandschutz und Wirtschaftlichkeit. | Was bei Statik, Netzanschluss, Brandschutz und Wirtschaftlichkeit zählt. |
| `solaranlage-mit-oder-ohne-speicher` | seo.metaDescription | Solaranlage mit oder ohne Speicher? Ehrlicher Vergleich zu Eigenverbrauch | Solaranlage mit oder ohne Speicher? Vergleich zu Eigenverbrauch |
| `solardachpflicht-nrw-2026` | seo.metaDescription |  zählt – ehrliche Einordnung. |  zählt. |
| `solarteur-insolvent-was-tun` | teaser | und wie es konkret weitergeht. Keine Beruhigungsphrasen, sondern eine ehrliche Einordnung. | und wie es konkret weitergeht – ohne Beruhigungsphrasen. |
| `solarteur-insolvent-was-tun` | seo.metaDescription | Ehrliche Schritt-für-Schritt-Anleitung bei Insolvenz des Solarteurs: | Schritt-für-Schritt-Anleitung bei Insolvenz des Solarteurs: |
| `typische-fehler-bei-solaranlagen` | teaser | Hier findest du eine ehrliche Einordnung zu Auslegung, Speicher, Zählerschrank, Dach und Angebotsvergleich. | Hier geht es um Auslegung, Speicher, Zählerschrank, Dach und Angebotsvergleich. |
| `typische-fehler-bei-solaranlagen` | seo.metaDescription | Typische Fehler bei Solaranlagen: ehrliche Einordnung zu Planung, Speicher, Zählerschrank, Auslegung und Angebotsvergleich | Typische Fehler bei Solaranlagen: Planung, Speicher, Zählerschrank, Auslegung und Angebotsvergleich |
| `was-bringt-eine-solaranlage-im-winter` | teaser | Hier findest du eine ehrliche Einordnung zu Ertrag, Grenzen und typischen Denkfehlern. | Hier geht es um Ertrag, Grenzen und typische Denkfehler. |
| `was-bringt-eine-solaranlage-im-winter` | seo.metaDescription | Ehrliche Einordnung zu Ertrag, Wetter, Wärmepumpe und typischen Denkfehlern | Ertrag, Wetter, Wärmepumpe und typische Denkfehler |
| `wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein` | teaser | Hier findest du eine ehrliche Einordnung zu Dachfläche, Stromverbrauch und späteren Verbrauchern. | Hier geht es um Dachfläche, Stromverbrauch und spätere Verbraucher. |
| `wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein` | seo.metaDescription | Ehrliche Einordnung zu Dachfläche, Verbrauch, Wärmepumpe, Speicher und typischen Fehlern | Dachfläche, Verbrauch, Wärmepumpe, Speicher und typische Fehler |
| `wie-viel-autarkie-ist-realistisch` | teaser | Hier findest du eine ehrliche Einordnung zu Autarkie, Speicher, Wintergrenzen und typischen Denkfehlern. | Hier geht es um Autarkie, Speicher, Wintergrenzen und typische Denkfehler. |
| `wie-viel-autarkie-ist-realistisch` | seo.metaDescription | Ehrliche Einordnung zu Speicher, Winter, Eigenversorgung und typischen Denkfehlern | Speicher, Winter, Eigenversorgung und typische Denkfehler |
| `wie-viel-strom-erzeugt-eine-10-kwp-solaranlage` | teaser | Hier findest du eine ehrliche Einordnung zu Dach, Ertrag, Winter und typischen Denkfehlern. | Hier geht es um Dach, Ertrag, Winter und typische Denkfehler. |
| `wie-viel-strom-erzeugt-eine-10-kwp-solaranlage` | seo.metaDescription | Ehrliche Einordnung zu Ertrag, Dachausrichtung, Winter und typischen Denkfehlern | Ertrag, Dachausrichtung, Winter und typische Denkfehler |
| `wie-viel-strom-erzeugt-eine-15-kwp-solaranlage` | teaser | Hier findest du eine ehrliche Einordnung zu Dach, Ertrag, Winter und sinnvoller Nutzung im Alltag. | Hier geht es um Dach, Ertrag, Winter und sinnvolle Nutzung im Alltag. |
| `wie-viel-strom-erzeugt-eine-15-kwp-solaranlage` | seo.metaDescription | Ehrliche Einordnung zu Ertrag, Dachfläche, Winter und sinnvoller Nutzung | Ertrag, Dachfläche, Winter und sinnvolle Nutzung |
| `braucht-man-einen-stromspeicher` | teaser | Hier findest du eine ehrliche Einordnung zu Nutzen, Alltag und typischen Denkfehlern. | Hier geht es um Nutzen, Alltag und typische Denkfehler. |
| `braucht-man-einen-stromspeicher` | seo.metaDescription | Ehrliche Einordnung zu Nutzen, Alltag, Wirtschaftlichkeit und typischen Denkfehlern | Nutzen, Alltag, Wirtschaftlichkeit und typische Denkfehler |
| `lohnt-sich-ein-stromspeicher` | titel | Lohnt sich ein Stromspeicher? Eine ehrliche Einordnung für 2026 | Lohnt sich ein Stromspeicher 2026? |
| `lohnt-sich-ein-stromspeicher` | seo.metaDescription | Lohnt sich ein Stromspeicher? Ehrliche Einordnung zu Eigenverbrauchsquote, Amortisation, Wirtschaftlichkeit mit Wärmepumpe oder E-Auto und nicht-monetären Gründen. | Lohnt sich ein Stromspeicher? Eigenverbrauchsquote, Amortisation, Wirtschaftlichkeit mit Wärmepumpe oder E-Auto und nicht-monetäre Gründe. |
| `notstrom-oder-ersatzstrom` | teaser | Hier findest du eine ehrliche Einordnung dazu, worin der Unterschied liegt | Hier erfährst du, worin der Unterschied liegt |
| `notstrom-oder-ersatzstrom` | seo.metaDescription | Ehrliche Einordnung zu Unterschieden, Bedarf, Speicher und typischen Denkfehlern | Unterschiede, Bedarf, Speicher und typische Denkfehler |
| `stromspeicher-foerderung-nrw` | seo.metaDescription | Stromspeicher Förderung NRW 2026: Ehrliche Übersicht über KfW 270 | Stromspeicher Förderung NRW 2026: Übersicht über KfW 270 |
| `stromspeicher-kosten` | seo.metaDescription | Was kostet ein Stromspeicher 2026? Ehrliche Einordnung zu Hardware-Preisen, Installation, Zählerschrank, AC- und DC-Kopplung sowie laufenden Kosten | Was kostet ein Stromspeicher 2026? Hardware-Preise, Installation, Zählerschrank, AC- und DC-Kopplung sowie laufende Kosten |
| `stromspeicher-nachruesten` | teaser | Hier findest du eine ehrliche Einordnung. | Worauf es dabei ankommt, liest du hier. |
| `stromspeicher-nachruesten` | seo.metaDescription | Ehrliche Einordnung zu Technik, Wirtschaftlichkeit und typischen Denkfehlern | Technik, Wirtschaftlichkeit und typische Denkfehler |
| `wie-gross-sollte-ein-stromspeicher-sein` | teaser | Hier findest du eine ehrliche Einordnung ohne Verkaufslogik. | Hier findest du eine Einordnung ohne Verkaufslogik. |
| `wie-gross-sollte-ein-stromspeicher-sein` | seo.metaDescription | Ehrliche Einordnung zu PV-Anlage, Verbrauch, Wärmepumpe, E-Auto und typischen Denkfehlern | PV-Anlage, Verbrauch, Wärmepumpe, E-Auto und typische Denkfehler |
| `wie-lange-haelt-ein-stromspeicher` | teaser | Hier findest du eine ehrliche Einordnung ohne Werbegelaber. | Hier findest du eine Einordnung ohne Werbegelaber. |
| `wie-lange-haelt-ein-stromspeicher` | seo.metaDescription | Ehrliche Einordnung zu Lebensdauer, Nutzung, Qualität und typischen Denkfehlern | Lebensdauer, Nutzung, Qualität und typische Denkfehler |
| `bidirektionales-laden` | seo.metaDescription | , verfügbare Technik und ehrliche Einordnung. |  und verfügbare Technik. |
| `wallbox-11-oder-22-kw` | seo.metaTitle | 11 kW oder 22 kW Wallbox? Der ehrliche Vergleich | 11 kW oder 22 kW Wallbox? Der Vergleich |
| `wallbox-anmelden-netzbetreiber` | seo.metaDescription | typische Praxisfehler verständlich und ehrlich. | typische Praxisfehler verständlich. |
| `wallbox-kosten` | seo.metaDescription | Wir zeigen, womit Sie bei Kauf, Installation und Betrieb rechnen sollten – ehrlich, praxisnah und ohne Lockangebote. | Wir zeigen, womit du bei Kauf, Installation und Betrieb rechnen solltest – praxisnah und ohne Lockangebote. |
| `wallbox-zu-hause-laden` | teaser | Hier findest du eine ehrliche Einordnung. | Worauf es dabei ankommt, liest du hier. |
| `wallbox-zu-hause-laden` | seo.metaDescription | Ehrliche Einordnung zu Technik, Hausanschluss, PV-Kombination und typischen Denkfehlern | Technik, Hausanschluss, PV-Kombination und typische Denkfehler |
| `waermepumpe-im-altbau` | seo.metaDescription | Wärmepumpe im Altbau: ehrliche Einordnung zu Heizlast, Vorlauftemperatur, Heizkörpern, Gebäudestandard, Wirtschaftlichkeit und typischen Planungsfehlern | Wärmepumpe im Altbau: Heizlast, Vorlauftemperatur, Heizkörper, Gebäudestandard, Wirtschaftlichkeit und typische Planungsfehler |
| `waermepumpe-kosten-einfamilienhaus` | seo.metaTitle | Wärmepumpe Kosten im Einfamilienhaus: ehrlich eingeordnet | Wärmepumpe: Kosten im Einfamilienhaus |
| `waermepumpe-kosten-einfamilienhaus` | seo.metaDescription | Wärmepumpe Kosten im Einfamilienhaus: ehrliche Einordnung zu Gerät, Montage, Heizsystem, Elektrik, Umbauten und typischen Kostenfehlern | Wärmepumpe Kosten im Einfamilienhaus: Gerät, Montage, Heizsystem, Elektrik, Umbauten und typische Kostenfehler |
| `waermepumpe-mit-heizkoerpern` | seo.metaDescription | Wärmepumpe mit Heizkörpern: ehrliche Einordnung zu Vorlauftemperatur, Heizflächen, Heizlast, typischen Denkfehlern und sinnvollen Maßnahmen | Wärmepumpe mit Heizkörpern: Vorlauftemperatur, Heizflächen, Heizlast, typische Denkfehler und sinnvolle Maßnahmen |
| `waermepumpe-stromverbrauch-berechnen` | seo.metaDescription | Wärmepumpe Stromverbrauch berechnen: ehrliche Einordnung zu Wärmebedarf, Jahresarbeitszahl, Vorlauftemperatur, Warmwasser und typischen Denkfehlern | Wärmepumpe Stromverbrauch berechnen: Wärmebedarf, Jahresarbeitszahl, Vorlauftemperatur, Warmwasser und typische Denkfehler |
| `waermepumpe-und-photovoltaik` | seo.metaDescription | wann sich die Kombination wirklich rechnet – ehrliche Einordnung. | wann sich die Kombination wirklich rechnet. |
| `waermepumpe-vorlauftemperatur` | seo.metaTitle | Wärmepumpe Vorlauftemperatur erklärt: ehrlich eingeordnet | Wärmepumpe: Vorlauftemperatur erklärt |
| `welche-waermepumpe-fuer-mein-haus` | seo.metaDescription | welche passt zu meinem Haus? Ehrlicher Vergleich von Effizienz | welche passt zu meinem Haus? Vergleich von Effizienz |
| `alte-pv-anlage-nach-20-jahren` | seo.metaDescription | Alte PV-Anlage nach 20 Jahren: ehrliche Einordnung zu Weiterbetrieb, Repowering und Abbau | Alte PV-Anlage nach 20 Jahren: Weiterbetrieb, Repowering oder Abbau |
| `repowering-kosten` | seo.metaDescription | Repowering Kosten ehrlich eingeordnet: | Repowering Kosten eingeordnet: |
| `repowering-solaranlage` | seo.metaDescription | Repowering einer Solaranlage ehrlich eingeordnet: | Repowering einer Solaranlage eingeordnet: |
| `repowering-vs-neuanlage` | seo.metaDescription | Repowering oder Neuanlage? Ehrliche Einordnung zu Modulzustand, Dach, Kosten, Leistung und typischen Denkfehlern | Repowering oder Neuanlage? Modulzustand, Dach, Kosten, Leistung und typische Denkfehler |
| `typische-fehler-beim-repowering` | seo.metaDescription | Typische Fehler beim Repowering: ehrliche Einordnung zu Modulbewertung, Dach, Elektrik, Zählerschrank, Kosten und Planung | Typische Fehler beim Repowering: Modulbewertung, Dach, Elektrik, Zählerschrank, Kosten und Planung |
| `paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen` | seo.metaDescription | §14a EnWG: ehrliche Einordnung zur Pflicht der Steuerbarkeit | §14a EnWG: Was die Pflicht zur Steuerbarkeit bedeutet |

### Sie-Form → Du-Form (37)

| Artikel | Feld | vorher | nachher |
|---|---|---|---|
| `amortisation-pv-anlage` | inhalt | Ob sich ein Speicher in Ihrem Fall trägt | Ob sich ein Speicher in deinem Fall trägt |
| `amortisation-pv-anlage` | inhalt | Wir rechnen die Amortisation mit Ihren Zahlen | Wir rechnen die Amortisation mit deinen Zahlen |
| `amortisation-pv-anlage` | inhalt | Amortisation für Ihr Dach berechnen lassen | Amortisation für dein Dach berechnen lassen |
| `amortisation-pv-anlage` | inhalt | damit Sie wissen, wann sich Ihre Anlage bezahlt gemacht hat. | damit du weißt, wann sich deine Anlage bezahlt gemacht hat. |
| `null-euro-anzahlung-photovoltaik` | seo.metaDescription | mit Ihrer Anzahlung passiert | mit deiner Anzahlung passiert |
| `photovoltaik-foerderung` | inhalt | Förderlage für Ihr Projekt prüfen lassen | Förderlage für dein Projekt prüfen lassen |
| `photovoltaik-foerderung` | inhalt | Wir legen Ihre Anlage so aus | Wir legen deine Anlage so aus |
| `photovoltaik-steuern` | inhalt | arbeiten wir mit Ihrem Steuerberater zusammen | arbeiten wir mit deinem Steuerberater zusammen |
| `photovoltaik-steuern` | faq | – Sie zahlen schlicht keinen Umsatzsteueraufschlag. | – du zahlst schlicht keinen Umsatzsteueraufschlag. |
| `wer-darf-photovoltaikanlagen-installieren` | inhalt | Lassen Sie sich spätestens zur Inbetriebnahme die wesentlichen Unterlagen übergeben | Lass dir spätestens zur Inbetriebnahme die wesentlichen Unterlagen übergeben |
| `wer-darf-photovoltaikanlagen-installieren` | inhalt | Fragen Sie: „Warum empfehlen Sie | Frag nach: „Warum empfehlen Sie |
| `wer-darf-photovoltaikanlagen-installieren` | inhalt | Vergleichen Sie nicht nur Module, Speicher und Preise. Prüfen Sie auch, | Vergleiche nicht nur Module, Speicher und Preise. Prüfe auch, |
| `wer-darf-photovoltaikanlagen-installieren` | faq | Fragen Sie nach den ausführenden Betrieben | Frag nach den ausführenden Betrieben |
| `wer-darf-photovoltaikanlagen-installieren` | faq | Lassen Sie sich außerdem erklären | Lass dir außerdem erklären |
| `bidirektionales-laden` | inhalt | sobald es für Sie passt | sobald es für dich passt |
| `wallbox-11-oder-22-kw` | inhalt | wie Ihr Alltag aussieht, was Ihr Hausanschluss hergibt | wie dein Alltag aussieht, was dein Hausanschluss hergibt |
| `wallbox-11-oder-22-kw` | inhalt | Zu Hause laden Sie im Normalfall mit Wechselstrom. | Zu Hause lädst du im Normalfall mit Wechselstrom. |
| `wallbox-11-oder-22-kw` | inhalt | Brauchen Sie diese Zeitersparnis | Brauchst du diese Zeitersparnis |
| `wallbox-11-oder-22-kw` | inhalt | wirklich zu Ihrem Haus passt. | wirklich zu deinem Haus passt. |
| `wallbox-anmelden-netzbetreiber` | inhalt | ist nicht Ihr Stromtarif-Anbieter entscheidend | ist nicht dein Stromtarif-Anbieter entscheidend |
| `wallbox-kosten` | inhalt | Worauf Sie beim Kauf nicht nur auf den Preis schauen sollten | Beim Kauf nicht nur auf den Preis schauen |
| `wallbox-kosten` | inhalt | Passt sie zu Ihrem Fahrzeug und Alltag? | Passt sie zu deinem Fahrzeug und Alltag? |
| `wallbox-mit-pv-laden` | inhalt | in Ihrem konkreten System | in deinem konkreten System |
| `wallbox-mit-pv-laden` | inhalt | welche Wallbox in Ihrem Fall wirklich sinnvoll ist | welche Wallbox in deinem Fall wirklich sinnvoll ist |
| `jaz-wirkungsgrad` | zusammenfassung | die Ihre Heizkosten wirklich beschreibt | die deine Heizkosten wirklich beschreibt |
| `jaz-wirkungsgrad` | inhalt | Aussagekraft für Ihre Heizkosten | Aussagekraft für deine Heizkosten |
| `jaz-wirkungsgrad` | inhalt | nicht Ihr Haus. | nicht dein Haus. |
| `jaz-wirkungsgrad` | inhalt | die auf Ihrer Stromrechnung ankommt | die auf deiner Stromrechnung ankommt |
| `jaz-wirkungsgrad` | inhalt | Realistische JAZ für Ihr Haus ermitteln | Realistische JAZ für dein Haus ermitteln |
| `jaz-wirkungsgrad` | faq | Ihr Winter aber aus kalten Nächten | dein Winter aber aus kalten Nächten |
| `jaz-wirkungsgrad` | faq | Vergleichen Sie Ihre gemessene JAZ | Vergleiche deine gemessene JAZ |
| `wie-funktioniert-eine-waermepumpe` | teaser | was das für Ihr Haus bedeutet | was das für dein Haus bedeutet |
| `wie-funktioniert-eine-waermepumpe` | inhalt | Ob Ihr Haus geeignet ist | Ob dein Haus geeignet ist |
| `wie-funktioniert-eine-waermepumpe` | inhalt | Ob sie auch in Ihrem Haus effizient läuft | Ob sie auch in deinem Haus effizient läuft |
| `wie-funktioniert-eine-waermepumpe` | inhalt | Prüfen lassen, ob Ihr Haus bereit ist | Prüfen lassen, ob dein Haus bereit ist |
| `wie-funktioniert-eine-waermepumpe` | inhalt | wir sagen Ihnen, welche Wärmepumpe zu Ihrem Haus passt | wir sagen dir, welche Wärmepumpe zu deinem Haus passt |
| `pv-module-entsorgen-recycling` | inhalt | als Teil Ihres Repowering-Projekts | als Teil deines Repowering-Projekts |

### Tippfehler und Formfehler (4)

| Artikel | Feld | vorher | nachher |
|---|---|---|---|
| `hybrid-wechselrichter-oder-getrennte-geraete` | teaser | sondern von Anlagenkonzept, Bestand ect. | sondern von Anlagenkonzept, Bestand und Erweiterungsplänen. |
| `kosten-solaranlage-einfamilienhaus` | inhalt | 6. Wie viel kannst du sparen? | 5. Wie viel kannst du sparen? |
| `wallbox-11-oder-22-kw` | teaser | Entscheidend sind nicht nur Ladezeit  sondern Fahrzeug, Hausanschluss ect | Entscheidend sind nicht nur Ladezeit und Gerät, sondern Fahrzeug, Hausanschluss, Netzbetreiber und Alltag. |
| `typische-fehler-beim-repowering` | teaser | oder Wirtschaftlichkeit falsch einschätzt. | oder Wirtschaftlichkeit falsch einschätzt, zahlt am Ende mehr als nötig. |

### metaTitle: „– WE ♥️ ENERGY“ entfernt (24)

Live war der Slogan schon unsichtbar, weil das Frontend ihn herausfiltert. Jetzt ist er auch im CMS-Feld weg. Bei `solaranlage-mit-oder-ohne-speicher` fällt außerdem das doppelte Leerzeichen weg.

| Artikel | metaTitle vorher |
|---|---|
| `einspeiseverguetung-photovoltaik-2026` | Einspeisevergütung Photovoltaik 2026: Was gilt aktuell? \| PEAK.Energy – WE ♥️ ENERGY |
| `14a-enwg-waermepumpe-messkonzept-8` | §14a Wärmepumpe: Messkonzept 8 & Tarif \| PEAK.Energy – WE ♥️ ENERGY |
| `typische-fehler-bei-solaranlagen` | Typische Fehler bei Solaranlagen: Worauf sollte man achten? \| PEAK.Energy – WE ♥️ ENERGY |
| `solaranlage-fuer-e-auto-auslegen` | Solaranlage für E-Auto auslegen: Worauf kommt es an? \| PEAK.Energy – WE ♥️ ENERGY |
| `notstrom-oder-ersatzstrom` | Notstrom oder Ersatzstrom: Was ist der Unterschied? \| PEAK.Energy – WE ♥️ ENERGY |
| `wallbox-zu-hause-laden` | Wallbox zu Hause laden: Worauf kommt es an? \| PEAK.Energy – WE ♥️ ENERGY |
| `wie-gross-sollte-ein-stromspeicher-sein` | Wie groß sollte ein Stromspeicher sein? \| PEAK.Energy – WE ♥️ ENERGY |
| `wie-lange-haelt-ein-stromspeicher` | Wie lange hält ein Stromspeicher? \| PEAK.Energy – WE ♥️ ENERGY |
| `stromspeicher-nachruesten` | Stromspeicher nachrüsten: Geht das überhaupt? \| PEAK.Energy – WE ♥️ ENERGY |
| `solaranlage-fuer-waermepumpe-auslegen` | Solaranlage für Wärmepumpe auslegen: Worauf kommt es an? \| PEAK.Energy – WE ♥️ ENERGY |
| `ost-west-oder-sueddach-solaranlage` | Ost-West oder Süddach: Was ist für Solaranlagen sinnvoller? \| PEAK.Energy – WE ♥️ ENERGY |
| `wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein` | Wie groß sollte eine Solaranlage für ein Einfamilienhaus sein? \| PEAK.Energy – WE ♥️ ENERGY |
| `wie-viel-strom-erzeugt-eine-15-kwp-solaranlage` | Wie viel Strom erzeugt eine 15 kWp Solaranlage? \| PEAK.Energy – WE ♥️ ENERGY |
| `wie-viel-strom-erzeugt-eine-10-kwp-solaranlage` | Wie viel Strom erzeugt eine 10 kWp Solaranlage? \| PEAK.Energy – WE ♥️ ENERGY |
| `wie-viel-autarkie-ist-realistisch` | Wie viel Autarkie ist realistisch? \| PEAK.Energy – WE ♥️ ENERGY |
| `was-bringt-eine-solaranlage-im-winter` | Was bringt eine Solaranlage im Winter? \| PEAK.Energy – WE ♥️ ENERGY |
| `braucht-man-einen-stromspeicher` | Braucht man einen Stromspeicher? \| PEAK.Energy – WE ♥️ ENERGY |
| `solaranlage-mit-oder-ohne-speicher` | Solaranlage mit oder ohne Speicher: Was ist sinnvoller? \| PEAK.Energy  – WE ♥️ ENERGY |
| `kosten-15-kwp-solaranlage-mit-speicher` | Was kostet eine 15 kWp Solaranlage mit Speicher? \| PEAK.Energy – WE ♥️ ENERGY |
| `kosten-10-kwp-solaranlage-mit-speicher` | Was kostet eine 10 kWp Solaranlage mit Speicher? \| PEAK.Energy – WE ♥️ ENERGY |
| `ab-wieviel-qm-lohnt-sich-eine-solaranlage` | Ab wieviel qm lohnt sich eine Solaranlage? \| PEAK.Energy – WE ♥️ ENERGY |
| `kosten-solaranlage-mit-speicher-einfamilienhaus` | Was kostet eine Solaranlage mit Speicher fürs Einfamilienhaus? \| PEAK.Energy – WE ♥️ ENERGY |
| `pv-anlage-planen` | PV-Anlage planen: Dach, Größe, Speicher richtig abstimmen \| PEAK.Energy – WE ♥️ ENERGY |
| `kosten-solaranlage-einfamilienhaus` | Was kostet eine Solaranlage? Ehrliche Preise vom Meisterbetrieb \| PEAK.Energy – WE ♥️ ENERGY |
