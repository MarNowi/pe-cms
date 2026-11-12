import { upsertRatgeberArticle } from './_articleFactory.mjs'
import { t, bold, link, p, h, ul, summaryPoint, textBlock, tippBlock, hinweisBlock, tabelleBlock, ctaBlock, faqItem, seo } from './_helpers.mjs'

const article = {
  titel: 'Performance Ratio bei Photovoltaik: Was die Kennzahl wirklich über den Ertrag aussagt',
  slug: 'performance-ratio-photovoltaik-berechnen',
  kategorie: 'solaranlage',
  cluster: 'pv-ertrag',
  status: 'entwurf',
  lesezeit: 10,
  teaser: 'Ist der Ertrag deiner Photovoltaikanlage wirklich zu niedrig? Die Performance Ratio berücksichtigt die verfügbare Einstrahlung und macht technische Verluste besser sichtbar als ein reiner kWh-Vergleich. Wir erklären Formel, Berechnung und typische Fehler.',
  seo: seo('Performance Ratio Photovoltaik: PR berechnen & verstehen | PEAK.Energy', 'Performance Ratio (PR) von PV-Anlagen: Formel, 10-kWp-Beispiel, typische Verluste, Temperatur und Unterschied zu Autarkie und kWh/kWp.'),
  zusammenfassung: [
    summaryPoint(t('Die '), bold('Performance Ratio (PR)'), t(' beschreibt den gemessenen AC-Ertrag im Verhältnis zum einstrahlungsbezogenen Referenzertrag.')),
    summaryPoint(t('Für eine belastbare PR braucht man '), bold('AC-Energie, DC-Nennleistung und Einstrahlung in der Modulebene'), t(' für denselben Zeitraum.')),
    summaryPoint(t('Die PR ist weder Autarkiequote noch Modulwirkungsgrad oder spezifischer Ertrag.')),
    summaryPoint(t('Temperatur, Verschattung, Wechselrichter, Kabel und Abregelungen beeinflussen den Wert.')),
  ],
  inhalt: [
    textBlock(
      h('h2', t('Was sagt die Performance Ratio aus?')),
      p(t('Zwei Solaranlagen mit jeweils 10 kWp können unterschiedliche Jahreserträge liefern, ohne dass eine davon defekt ist. Ausrichtung, Einstrahlung, Verschattung und Wetter unterscheiden sich. Die Performance Ratio – kurz PR – setzt den gemessenen Energieertrag zur tatsächlich verfügbaren Einstrahlung ins Verhältnis.')),
      p(t('Sie hilft dabei, die Systemperformance einzuordnen, ist aber kein einzelner „Qualitätsstempel“. Eine PR von 80 % bedeutet in der üblichen STC-basierten Definition, dass 80 % des anhand der Einstrahlung berechneten Referenzertrags am definierten AC-Messpunkt ankommen.')),
    ),
    textBlock(
      h('h2', t('Die Performance-Ratio-Formel')),
      p(bold('PR = (E_AC / P_STC) / (H_POA / G_STC)')),
      ul(
        p(t('E_AC: gemessene AC-Energie (kWh) im betrachteten Zeitraum.')),
        p(t('P_STC: installierte DC-Modulnennleistung (kWp).')),
        p(t('H_POA: Einstrahlung in der Ebene der Module (kWh/m²).')),
        p(t('G_STC: Referenzbestrahlungsstärke, 1 kW/m².')),
      ),
      p(t('E_AC/P_STC heißt finaler Systemertrag; H_POA/G_STC heißt Referenzertrag. Beide beziehen sich auf denselben Zeitraum. Das Verhältnis ist dimensionslos und wird oft in Prozent angegeben.')),
      p(t('Wichtig: Horizontale Globalstrahlung ist nicht dasselbe wie Einstrahlung in der geneigten Modulebene. Wer die falsche Einstrahlung einsetzt, erhält keine aussagekräftige PR.')),
    ),
    textBlock(
      h('h2', t('Beispielrechnung für 10 kWp')),
      p(t('Fiktives Beispiel: Eine 10-kWp-Anlage liefert in einem Jahr 9.600 kWh AC-Energie. Im selben Jahr werden in der Modulebene 1.200 kWh/m² Einstrahlung erfasst.')),
      ul(
        p(t('Finaler Ertrag: 9.600 kWh / 10 kWp = 960 kWh/kWp.')),
        p(t('Referenzertrag: 1.200 kWh/m² / 1 kW/m² = 1.200 Stunden.')),
        p(t('PR = 960 / 1.200 = '), bold('0,80 bzw. 80 %'), t('.')),
      ),
      p(t('Das ist ein Rechenbeispiel – kein gemessener Wert einer PEAK-Anlage und keine pauschale Mindestanforderung. Ob 80 % für eine konkrete Anlage plausibel sind, hängt von Auslegung und Betriebsbedingungen ab.')),
    ),
    tabelleBlock('Vier Kennzahlen – vier unterschiedliche Aussagen', [
      { spalte1: 'Performance Ratio', spalte2: '%', spalte3: 'Einstrahlungsbezogene Anlagenperformance; schließt Systemverluste ein' },
      { spalte1: 'Spezifischer Ertrag', spalte2: 'kWh/kWp', spalte3: 'Erzeugter Strom je installierter Generatorleistung' },
      { spalte1: 'Autarkiegrad', spalte2: '%', spalte3: 'Anteil des Verbrauchs, den eigene Energie deckt' },
      { spalte1: 'Eigenverbrauchsquote', spalte2: '%', spalte3: 'Anteil der PV-Erzeugung, der selbst genutzt wird' },
    ]),
    textBlock(
      h('h2', t('Was beeinflusst die Performance Ratio?')),
      p(t('Die Kennzahl reagiert auf mehrere Einflüsse gleichzeitig. Ein niedriger Wert identifiziert deshalb noch keine einzelne Fehlerursache.')),
      ul(
        p(bold('Hitze: '), t('Mit steigender Zelltemperatur sinkt die Modulleistung. Eine unkorrigierte PR kann im Sommer niedriger sein als im Winter.')),
        p(bold('Verschattung und Verschmutzung: '), t('Bäume, Gauben, Ablagerungen und Stringverschaltung beeinflussen die nutzbare Leistung.')),
        p(bold('Elektrische Verluste: '), t('Kabel, Mismatch und Wechselrichter verursachen zusätzliche Verluste.')),
        p(bold('Begrenzungen und Ausfälle: '), t('Clipping, Abregelungen, Netzunterbrechungen und technische Störungen vermindern die abgegebene Energie.')),
      ),
      p(t('Für aussagekräftige Vergleiche müssen Messpunkt, Anlagenkonfiguration, Berichtszeitraum und mögliche Korrekturen übereinstimmen. Bei bifazialen oder komplexen Anlagen sind zusätzliche Definitionen nötig.')),
    ),
    hinweisBlock('Die Netzeinspeisung ist nicht die PV-Erzeugung',
      p(t('Bei Anlagen mit Eigenverbrauch fließt ein Teil des erzeugten Stroms direkt ins Haus. Wer für E_AC nur den Einspeisezähler verwendet, unterschätzt den PV-Ertrag. Bei Hybridwechselrichtern und DC-gekoppelten Batterien ist die Bilanzierung besonders sorgfältig festzulegen.')),
    ),
    textBlock(
      h('h2', t('Sind 80, 85 oder 90 % eine gute PR?')),
      p(t('Pauschale Schwellwerte sind keine seriöse Diagnose. Eine PR kann durch Modultemperatur, Dachgeometrie, Temperaturkorrektur, Auslegung und Ertragsbegrenzung stark beeinflusst werden. Ein Anlagensoll muss diese Bedingungen berücksichtigen.')),
      p(t('Für eine belastbare Bewertung prüfen wir bevorzugt längere Zeitreihen und vergleichen sie mit einer fachlich nachvollziehbaren Referenz. Eine hohe Autarkiequote sagt dagegen nichts über die technische Performance aus.')),
    ),
    tippBlock('Vor der Diagnose die richtigen Daten sichern',
      p(t('Sammle zwölf Monate Erzeugungsdaten, installierte kWp, Dachausrichtung, Neigung, Wechselrichtertyp, Störungsmeldungen und – sofern vorhanden – Einstrahlung in der Modulebene. Ohne passende Einstrahlungsdaten lässt sich zunächst nur der spezifische Ertrag oder eine modellbasierte Soll-Ist-Abweichung ermitteln, nicht die gemessene PR.')),
    ),
    textBlock(
      h('h2', t('Was leisten PVGIS und Wechselrichter-Apps?')),
      p(t('PVGIS kann standortbezogene Ertragserwartungen liefern. Ein Vergleich des echten Ertrags mit einem PVGIS-Jahreswert beantwortet jedoch eine andere Frage als eine gemessene Performance Ratio nach IEC 61724-1. Die Simulation beruht unter anderem auf Wetterdaten und angenommenen Systemverlusten.')),
      p(t('Wer PR-Zahlen veröffentlicht, sollte immer Messperiode, Einstrahlungsquelle, Energie-Messpunkt und etwaige Temperaturkorrektur nennen.')),
    ),
    textBlock(
      h('h2', t('Weiterlesen und Quellen')),
      p(t('Passende Ratgeber: '), link('Ertrag einer 10-kWp-Anlage', '/solaranlage/wie-viel-strom-erzeugt-eine-10-kwp-solaranlage'), t(' sowie '), link('PV-Ertrag bleibt hinter Prognose', '/solaranlage/pv-anlage-liefert-weniger-als-berechnet-abweichung-normal'), t('.')),
      p(t('Technische Quellen: '), link('Sandia PVPMC – Performance Ratio', 'https://pvpmc.sandia.gov/modeling-guide/5-ac-system-output/pv-performance-metrics/performance-ratio/', { newTab: true }), t('; '), link('IEA PVPS O&M Guidelines', 'https://iea-pvps.org/wp-content/uploads/2022/11/IEA-PVPS-Report-T13-25-2022-OandM-Guidelines.pdf', { newTab: true }), t('; '), link('NREL – Performance of Photovoltaic Systems', 'https://www.nrel.gov/docs/fy20osti/75162.pdf', { newTab: true }), t('.')),
    ),
    textBlock(
      h('h2', t('Fazit')),
      p(t('Die Performance Ratio ist hilfreich, wenn die Daten stimmen. Sie ersetzt keine elektrische Prüfung und ist keine Kennzahl für Autarkie. Wer eine Anlage fair beurteilen will, muss Einstrahlung, Messgrenzen, Temperatur und Betriebsbedingungen einbeziehen.')),
    ),
    ctaBlock({ titel: 'PV-Ertrag fachlich prüfen lassen', text: 'Deine Anlage liefert weniger Strom als erwartet? Wir prüfen am Niederrhein Daten, Anlagenaufbau und technische Auffälligkeiten – ohne vorschnelle Schlussfolgerungen.', buttonText: 'PV-Anlage prüfen lassen', buttonLink: '/kontakt' }),
  ],
  faq: [
    faqItem('Was ist eine Performance Ratio?', 'Das Verhältnis des gemessenen finalen Systemertrags zum einstrahlungsbezogenen Referenzertrag im selben Zeitraum.'),
    faqItem('Wie lautet die PR-Formel?', 'PR = (AC-Energie / DC-Nennleistung) / (Einstrahlung in der Modulebene / 1 kW/m²).'),
    faqItem('Ist eine PR von 80 Prozent schlecht?', 'Nicht automatisch. Temperatur, Verschattung, Anlagendesign und Messmethode müssen berücksichtigt werden.'),
    faqItem('Kann die Wechselrichter-App die PR zeigen?', 'Nur wenn die nötige Einstrahlung und korrekte Messgrenzen berücksichtigt werden. Reine kWh-Werte reichen nicht.'),
    faqItem('Ist eine hohe Autarkie gleich einer guten Performance Ratio?', 'Nein. Autarkie beschreibt die Eigenversorgung des Verbrauchs, PR die einstrahlungsbezogene Anlagenperformance.'),
  ],
}

await upsertRatgeberArticle(article)
