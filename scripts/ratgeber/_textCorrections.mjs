// Redaktionelle Korrekturen im Ratgeber – gemeinsame Daten für Migration und upsertRatgeberArticle.
//
// Inhalt (siehe docs/ratgeber-redaktion-schritt-4.md):
// - Floskel „ehrliche Einordnung / ehrlich eingeordnet / ehrlich erklärt“ in Titel, Teaser und SEO-Feldern
// - Sie-Form → Du-Form (direkte Zitate, z. B. Werbeversprechen, bleiben in Sie-Form)
// - Tippfehler und unvollständige Sätze
// - Slogan „– WE ♥️ ENERGY“ und doppelte Leerzeichen im metaTitle (für alle Artikel, siehe normalizeMetaTitle)
//
// Jede Korrektur ersetzt einen genauen Textausschnitt `alt` durch `neu`. Fachliche Aussagen bleiben
// unverändert. Ist `alt` nicht (mehr) da und `neu` vorhanden, gilt die Korrektur als erledigt.
//
// feld:
//   'titel' | 'teaser' | 'seo.metaTitle' | 'seo.metaDescription'  → einfaches Textfeld
//   'inhalt' | 'faq' | 'zusammenfassung'                           → alle Texte im Feld (Rich Text, CTA, FAQ)

export const TEXT_CORRECTIONS = {
  // ─── Solaranlage ────────────────────────────────────────────────────────────
  'amortisation-pv-anlage': [
    {
      feld: 'seo.metaDescription',
      alt: 'Wann amortisiert sich eine Solaranlage? Die ehrliche Rechnung: Eigenverbrauch',
      neu: 'Wann amortisiert sich eine Solaranlage? Die Rechnung: Eigenverbrauch',
    },
    { feld: 'inhalt', alt: 'Ob sich ein Speicher in Ihrem Fall trägt', neu: 'Ob sich ein Speicher in deinem Fall trägt' },
    { feld: 'inhalt', alt: 'Wir rechnen die Amortisation mit Ihren Zahlen', neu: 'Wir rechnen die Amortisation mit deinen Zahlen' },
    { feld: 'inhalt', alt: 'Amortisation für Ihr Dach berechnen lassen', neu: 'Amortisation für dein Dach berechnen lassen' },
    {
      feld: 'inhalt',
      alt: 'damit Sie wissen, wann sich Ihre Anlage bezahlt gemacht hat.',
      neu: 'damit du weißt, wann sich deine Anlage bezahlt gemacht hat.',
    },
  ],
  'einspeiseverguetung-photovoltaik-2026': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung zu Überschusseinspeisung, Anlagengröße und typischen Denkfehlern.',
      neu: 'Hier geht es um Überschusseinspeisung, Anlagengröße und typische Denkfehler.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Einspeisevergütung Photovoltaik 2026: ehrliche Einordnung zu Überschusseinspeisung, Anlagengröße und Wirtschaftlichkeit – von PEAK.Energy.',
      neu: 'Einspeisevergütung Photovoltaik 2026: Überschusseinspeisung, Anlagengröße und Wirtschaftlichkeit – von PEAK.Energy.',
    },
  ],
  'garantie-vs-gewaehrleistung-pv-anlage': [
    {
      feld: 'teaser',
      alt: 'Eine ehrliche Einordnung mit konkreten Schadensfällen, Stolperfallen in den Garantiebedingungen und einer klaren Antwort, was im Insolvenzfall wirklich bleibt.',
      neu: 'Mit konkreten Schadensfällen, Stolperfallen in den Garantiebedingungen und einer klaren Antwort, was im Insolvenzfall wirklich bleibt.',
    },
  ],
  'hybrid-wechselrichter-oder-getrennte-geraete': [
    // Satzende wie im Ursprungs-Script
    {
      feld: 'teaser',
      alt: 'sondern von Anlagenkonzept, Bestand ect.',
      neu: 'sondern von Anlagenkonzept, Bestand und Erweiterungsplänen.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Hybrid-Wechselrichter oder getrennte Geräte? Ehrliche Einordnung zu Topologie, Notstrom, Erweiterbarkeit und typischen Denkfehlern bei der Auswahl',
      neu: 'Hybrid-Wechselrichter oder getrennte Geräte? Topologie, Notstrom, Erweiterbarkeit und typische Denkfehler bei der Auswahl',
    },
  ],
  'kosten-10-kwp-solaranlage-mit-speicher': [
    { feld: 'seo.metaDescription', alt: '– ehrlich erklärt von PEAK.Energy.', neu: '– erklärt von PEAK.Energy.' },
  ],
  'kosten-15-kwp-solaranlage-mit-speicher': [
    { feld: 'seo.metaDescription', alt: '– ehrlich erklärt von PEAK.Energy.', neu: '– erklärt von PEAK.Energy.' },
  ],
  'kosten-solaranlage-einfamilienhaus': [
    {
      feld: 'seo.metaTitle',
      alt: 'Was kostet eine Solaranlage? Ehrliche Preise vom Meisterbetrieb',
      neu: 'Was kostet eine Solaranlage? Preise vom Meisterbetrieb',
    },
    // Zwischenüberschriften springen von 4 auf 6
    { feld: 'inhalt', alt: '6. Wie viel kannst du sparen?', neu: '5. Wie viel kannst du sparen?' },
  ],
  'kosten-solaranlage-mit-speicher-einfamilienhaus': [
    { feld: 'seo.metaDescription', alt: '– ehrlich erklärt von PEAK.Energy.', neu: '– erklärt von PEAK.Energy.' },
  ],
  'null-euro-anzahlung-photovoltaik': [
    { feld: 'seo.metaDescription', alt: 'mit Ihrer Anzahlung passiert', neu: 'mit deiner Anzahlung passiert' },
  ],
  'ost-west-oder-sueddach-solaranlage': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung zu Ertrag, Alltag und typischen Denkfehlern.',
      neu: 'Hier geht es um Ertrag, Alltag und typische Denkfehler.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrlicher Vergleich zu Ertrag, Alltag, Verbrauch und typischen Denkfehlern',
      neu: 'Vergleich zu Ertrag, Alltag, Verbrauch und typischen Denkfehlern',
    },
  ],
  'photovoltaik-foerderung': [
    {
      feld: 'teaser',
      alt: 'Ein ehrlicher Überblick, welche Förderung wie viel bringt',
      neu: 'Ein Überblick, welche Förderung wie viel bringt',
    },
    { feld: 'inhalt', alt: 'Förderlage für Ihr Projekt prüfen lassen', neu: 'Förderlage für dein Projekt prüfen lassen' },
    { feld: 'inhalt', alt: 'Wir legen Ihre Anlage so aus', neu: 'Wir legen deine Anlage so aus' },
  ],
  'photovoltaik-steuern': [
    { feld: 'inhalt', alt: 'arbeiten wir mit Ihrem Steuerberater zusammen', neu: 'arbeiten wir mit deinem Steuerberater zusammen' },
    { feld: 'faq', alt: '– Sie zahlen schlicht keinen Umsatzsteueraufschlag.', neu: '– du zahlst schlicht keinen Umsatzsteueraufschlag.' },
  ],
  'pv-anlage-anmelden-marktstammdatenregister': [
    {
      feld: 'teaser',
      alt: 'Eine ehrliche Schritt-für-Schritt-Anleitung mit allen Stolpersteinen.',
      neu: 'Eine Schritt-für-Schritt-Anleitung mit allen Stolpersteinen.',
    },
  ],
  'pv-anlage-planen': [
    { feld: 'seo.metaDescription', alt: '– ehrlich erklärt von PEAK.Energy.', neu: '– erklärt von PEAK.Energy.' },
  ],
  'pv-gewerbe-wirtschaftlichkeit-beispielrechnung': [
    {
      feld: 'seo.metaDescription',
      alt: '– konservativ gerechnet, ehrlich erklärt, mit Sensitivität',
      neu: '– konservativ gerechnet, mit Sensitivität',
    },
  ],
  'pv-landwirtschaft-stalldach': [
    {
      feld: 'seo.metaDescription',
      alt: '– mit ehrlicher Einordnung zu Asbestsanierung,',
      neu: '– mit Einordnung zu Asbestsanierung,',
    },
  ],
  'solaranlage-fuer-e-auto-auslegen': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung zu Dach, Wallbox, Ladebedarf und typischen Fehlern.',
      neu: 'Hier geht es um Dach, Wallbox, Ladebedarf und typische Fehler.',
    },
    { feld: 'seo.metaDescription', alt: '– ehrlich erklärt von PEAK.Energy.', neu: '– erklärt von PEAK.Energy.' },
  ],
  'solaranlage-fuer-waermepumpe-auslegen': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung zu Auslegung, Dachfläche, Speicher und typischen Fehlern.',
      neu: 'Hier geht es um Auslegung, Dachfläche, Speicher und typische Fehler.',
    },
    { feld: 'seo.metaDescription', alt: '– ehrlich erklärt von PEAK.Energy.', neu: '– erklärt von PEAK.Energy.' },
  ],
  'solaranlage-gewerbedach': [
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrliche Einordnung zu Statik, Netzanschluss, Brandschutz und Wirtschaftlichkeit.',
      neu: 'Was bei Statik, Netzanschluss, Brandschutz und Wirtschaftlichkeit zählt.',
    },
  ],
  'solaranlage-mit-oder-ohne-speicher': [
    {
      feld: 'seo.metaDescription',
      alt: 'Solaranlage mit oder ohne Speicher? Ehrlicher Vergleich zu Eigenverbrauch',
      neu: 'Solaranlage mit oder ohne Speicher? Vergleich zu Eigenverbrauch',
    },
  ],
  'solardachpflicht-nrw-2026': [
    { feld: 'seo.metaDescription', alt: ' zählt – ehrliche Einordnung.', neu: ' zählt.' },
  ],
  'solarteur-insolvent-was-tun': [
    {
      feld: 'teaser',
      alt: 'und wie es konkret weitergeht. Keine Beruhigungsphrasen, sondern eine ehrliche Einordnung.',
      neu: 'und wie es konkret weitergeht – ohne Beruhigungsphrasen.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrliche Schritt-für-Schritt-Anleitung bei Insolvenz des Solarteurs:',
      neu: 'Schritt-für-Schritt-Anleitung bei Insolvenz des Solarteurs:',
    },
  ],
  'typische-fehler-bei-solaranlagen': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung zu Auslegung, Speicher, Zählerschrank, Dach und Angebotsvergleich.',
      neu: 'Hier geht es um Auslegung, Speicher, Zählerschrank, Dach und Angebotsvergleich.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Typische Fehler bei Solaranlagen: ehrliche Einordnung zu Planung, Speicher, Zählerschrank, Auslegung und Angebotsvergleich',
      neu: 'Typische Fehler bei Solaranlagen: Planung, Speicher, Zählerschrank, Auslegung und Angebotsvergleich',
    },
  ],
  'was-bringt-eine-solaranlage-im-winter': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung zu Ertrag, Grenzen und typischen Denkfehlern.',
      neu: 'Hier geht es um Ertrag, Grenzen und typische Denkfehler.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrliche Einordnung zu Ertrag, Wetter, Wärmepumpe und typischen Denkfehlern',
      neu: 'Ertrag, Wetter, Wärmepumpe und typische Denkfehler',
    },
  ],
  'wer-darf-photovoltaikanlagen-installieren': [
    {
      feld: 'inhalt',
      alt: 'Lassen Sie sich spätestens zur Inbetriebnahme die wesentlichen Unterlagen übergeben',
      neu: 'Lass dir spätestens zur Inbetriebnahme die wesentlichen Unterlagen übergeben',
    },
    // Die Frage an den Berater im Zitat bleibt in Sie-Form
    { feld: 'inhalt', alt: 'Fragen Sie: „Warum empfehlen Sie', neu: 'Frag nach: „Warum empfehlen Sie' },
    {
      feld: 'inhalt',
      alt: 'Vergleichen Sie nicht nur Module, Speicher und Preise. Prüfen Sie auch,',
      neu: 'Vergleiche nicht nur Module, Speicher und Preise. Prüfe auch,',
    },
    { feld: 'faq', alt: 'Fragen Sie nach den ausführenden Betrieben', neu: 'Frag nach den ausführenden Betrieben' },
    { feld: 'faq', alt: 'Lassen Sie sich außerdem erklären', neu: 'Lass dir außerdem erklären' },
  ],
  'wie-gross-sollte-eine-solaranlage-fuer-einfamilienhaus-sein': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung zu Dachfläche, Stromverbrauch und späteren Verbrauchern.',
      neu: 'Hier geht es um Dachfläche, Stromverbrauch und spätere Verbraucher.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrliche Einordnung zu Dachfläche, Verbrauch, Wärmepumpe, Speicher und typischen Fehlern',
      neu: 'Dachfläche, Verbrauch, Wärmepumpe, Speicher und typische Fehler',
    },
  ],
  'wie-viel-autarkie-ist-realistisch': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung zu Autarkie, Speicher, Wintergrenzen und typischen Denkfehlern.',
      neu: 'Hier geht es um Autarkie, Speicher, Wintergrenzen und typische Denkfehler.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrliche Einordnung zu Speicher, Winter, Eigenversorgung und typischen Denkfehlern',
      neu: 'Speicher, Winter, Eigenversorgung und typische Denkfehler',
    },
  ],
  'wie-viel-strom-erzeugt-eine-10-kwp-solaranlage': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung zu Dach, Ertrag, Winter und typischen Denkfehlern.',
      neu: 'Hier geht es um Dach, Ertrag, Winter und typische Denkfehler.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrliche Einordnung zu Ertrag, Dachausrichtung, Winter und typischen Denkfehlern',
      neu: 'Ertrag, Dachausrichtung, Winter und typische Denkfehler',
    },
  ],
  'wie-viel-strom-erzeugt-eine-15-kwp-solaranlage': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung zu Dach, Ertrag, Winter und sinnvoller Nutzung im Alltag.',
      neu: 'Hier geht es um Dach, Ertrag, Winter und sinnvolle Nutzung im Alltag.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrliche Einordnung zu Ertrag, Dachfläche, Winter und sinnvoller Nutzung',
      neu: 'Ertrag, Dachfläche, Winter und sinnvolle Nutzung',
    },
  ],

  // ─── Stromspeicher ──────────────────────────────────────────────────────────
  'braucht-man-einen-stromspeicher': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung zu Nutzen, Alltag und typischen Denkfehlern.',
      neu: 'Hier geht es um Nutzen, Alltag und typische Denkfehler.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrliche Einordnung zu Nutzen, Alltag, Wirtschaftlichkeit und typischen Denkfehlern',
      neu: 'Nutzen, Alltag, Wirtschaftlichkeit und typische Denkfehler',
    },
  ],
  'lohnt-sich-ein-stromspeicher': [
    { feld: 'titel', alt: 'Lohnt sich ein Stromspeicher? Eine ehrliche Einordnung für 2026', neu: 'Lohnt sich ein Stromspeicher 2026?' },
    {
      feld: 'seo.metaDescription',
      alt: 'Lohnt sich ein Stromspeicher? Ehrliche Einordnung zu Eigenverbrauchsquote, Amortisation, Wirtschaftlichkeit mit Wärmepumpe oder E-Auto und nicht-monetären Gründen.',
      neu: 'Lohnt sich ein Stromspeicher? Eigenverbrauchsquote, Amortisation, Wirtschaftlichkeit mit Wärmepumpe oder E-Auto und nicht-monetäre Gründe.',
    },
  ],
  'notstrom-oder-ersatzstrom': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung dazu, worin der Unterschied liegt',
      neu: 'Hier erfährst du, worin der Unterschied liegt',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrliche Einordnung zu Unterschieden, Bedarf, Speicher und typischen Denkfehlern',
      neu: 'Unterschiede, Bedarf, Speicher und typische Denkfehler',
    },
  ],
  'stromspeicher-foerderung-nrw': [
    {
      feld: 'seo.metaDescription',
      alt: 'Stromspeicher Förderung NRW 2026: Ehrliche Übersicht über KfW 270',
      neu: 'Stromspeicher Förderung NRW 2026: Übersicht über KfW 270',
    },
  ],
  'stromspeicher-kosten': [
    {
      feld: 'seo.metaDescription',
      alt: 'Was kostet ein Stromspeicher 2026? Ehrliche Einordnung zu Hardware-Preisen, Installation, Zählerschrank, AC- und DC-Kopplung sowie laufenden Kosten',
      neu: 'Was kostet ein Stromspeicher 2026? Hardware-Preise, Installation, Zählerschrank, AC- und DC-Kopplung sowie laufende Kosten',
    },
  ],
  'stromspeicher-nachruesten': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung.',
      neu: 'Worauf es dabei ankommt, liest du hier.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrliche Einordnung zu Technik, Wirtschaftlichkeit und typischen Denkfehlern',
      neu: 'Technik, Wirtschaftlichkeit und typische Denkfehler',
    },
  ],
  'wie-gross-sollte-ein-stromspeicher-sein': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung ohne Verkaufslogik.',
      neu: 'Hier findest du eine Einordnung ohne Verkaufslogik.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrliche Einordnung zu PV-Anlage, Verbrauch, Wärmepumpe, E-Auto und typischen Denkfehlern',
      neu: 'PV-Anlage, Verbrauch, Wärmepumpe, E-Auto und typische Denkfehler',
    },
  ],
  'wie-lange-haelt-ein-stromspeicher': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung ohne Werbegelaber.',
      neu: 'Hier findest du eine Einordnung ohne Werbegelaber.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrliche Einordnung zu Lebensdauer, Nutzung, Qualität und typischen Denkfehlern',
      neu: 'Lebensdauer, Nutzung, Qualität und typische Denkfehler',
    },
  ],

  // ─── Wallbox ────────────────────────────────────────────────────────────────
  'bidirektionales-laden': [
    {
      feld: 'seo.metaDescription',
      alt: ', verfügbare Technik und ehrliche Einordnung.',
      neu: ' und verfügbare Technik.',
    },
    { feld: 'inhalt', alt: 'sobald es für Sie passt', neu: 'sobald es für dich passt' },
  ],
  'wallbox-11-oder-22-kw': [
    // Satz wie im Ursprungs-Script
    {
      feld: 'teaser',
      alt: 'Entscheidend sind nicht nur Ladezeit  sondern Fahrzeug, Hausanschluss ect',
      neu: 'Entscheidend sind nicht nur Ladezeit und Gerät, sondern Fahrzeug, Hausanschluss, Netzbetreiber und Alltag.',
    },
    { feld: 'seo.metaTitle', alt: '11 kW oder 22 kW Wallbox? Der ehrliche Vergleich', neu: '11 kW oder 22 kW Wallbox? Der Vergleich' },
    {
      feld: 'inhalt',
      alt: 'wie Ihr Alltag aussieht, was Ihr Hausanschluss hergibt',
      neu: 'wie dein Alltag aussieht, was dein Hausanschluss hergibt',
    },
    { feld: 'inhalt', alt: 'Zu Hause laden Sie im Normalfall mit Wechselstrom.', neu: 'Zu Hause lädst du im Normalfall mit Wechselstrom.' },
    { feld: 'inhalt', alt: 'Brauchen Sie diese Zeitersparnis', neu: 'Brauchst du diese Zeitersparnis' },
    { feld: 'inhalt', alt: 'wirklich zu Ihrem Haus passt.', neu: 'wirklich zu deinem Haus passt.' },
  ],
  'wallbox-anmelden-netzbetreiber': [
    {
      feld: 'seo.metaDescription',
      alt: 'typische Praxisfehler verständlich und ehrlich.',
      neu: 'typische Praxisfehler verständlich.',
    },
    { feld: 'inhalt', alt: 'ist nicht Ihr Stromtarif-Anbieter entscheidend', neu: 'ist nicht dein Stromtarif-Anbieter entscheidend' },
  ],
  'wallbox-kosten': [
    {
      feld: 'seo.metaDescription',
      alt: 'Wir zeigen, womit Sie bei Kauf, Installation und Betrieb rechnen sollten – ehrlich, praxisnah und ohne Lockangebote.',
      neu: 'Wir zeigen, womit du bei Kauf, Installation und Betrieb rechnen solltest – praxisnah und ohne Lockangebote.',
    },
    // Zwischenüberschrift war zusätzlich grammatisch doppelt („Worauf … auf“)
    {
      feld: 'inhalt',
      alt: 'Worauf Sie beim Kauf nicht nur auf den Preis schauen sollten',
      neu: 'Beim Kauf nicht nur auf den Preis schauen',
    },
    { feld: 'inhalt', alt: 'Passt sie zu Ihrem Fahrzeug und Alltag?', neu: 'Passt sie zu deinem Fahrzeug und Alltag?' },
  ],
  'wallbox-mit-pv-laden': [
    { feld: 'inhalt', alt: 'in Ihrem konkreten System', neu: 'in deinem konkreten System' },
    { feld: 'inhalt', alt: 'welche Wallbox in Ihrem Fall wirklich sinnvoll ist', neu: 'welche Wallbox in deinem Fall wirklich sinnvoll ist' },
  ],
  'wallbox-zu-hause-laden': [
    {
      feld: 'teaser',
      alt: 'Hier findest du eine ehrliche Einordnung.',
      neu: 'Worauf es dabei ankommt, liest du hier.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Ehrliche Einordnung zu Technik, Hausanschluss, PV-Kombination und typischen Denkfehlern',
      neu: 'Technik, Hausanschluss, PV-Kombination und typische Denkfehler',
    },
  ],

  // ─── Wärmepumpe ─────────────────────────────────────────────────────────────
  'jaz-wirkungsgrad': [
    { feld: 'zusammenfassung', alt: 'die Ihre Heizkosten wirklich beschreibt', neu: 'die deine Heizkosten wirklich beschreibt' },
    { feld: 'inhalt', alt: 'Aussagekraft für Ihre Heizkosten', neu: 'Aussagekraft für deine Heizkosten' },
    { feld: 'inhalt', alt: 'nicht Ihr Haus.', neu: 'nicht dein Haus.' },
    { feld: 'inhalt', alt: 'die auf Ihrer Stromrechnung ankommt', neu: 'die auf deiner Stromrechnung ankommt' },
    { feld: 'inhalt', alt: 'Realistische JAZ für Ihr Haus ermitteln', neu: 'Realistische JAZ für dein Haus ermitteln' },
    { feld: 'faq', alt: 'Ihr Winter aber aus kalten Nächten', neu: 'dein Winter aber aus kalten Nächten' },
    { feld: 'faq', alt: 'Vergleichen Sie Ihre gemessene JAZ', neu: 'Vergleiche deine gemessene JAZ' },
  ],
  'waermepumpe-im-altbau': [
    {
      feld: 'seo.metaDescription',
      alt: 'Wärmepumpe im Altbau: ehrliche Einordnung zu Heizlast, Vorlauftemperatur, Heizkörpern, Gebäudestandard, Wirtschaftlichkeit und typischen Planungsfehlern',
      neu: 'Wärmepumpe im Altbau: Heizlast, Vorlauftemperatur, Heizkörper, Gebäudestandard, Wirtschaftlichkeit und typische Planungsfehler',
    },
  ],
  'waermepumpe-kosten-einfamilienhaus': [
    {
      feld: 'seo.metaTitle',
      alt: 'Wärmepumpe Kosten im Einfamilienhaus: ehrlich eingeordnet',
      neu: 'Wärmepumpe: Kosten im Einfamilienhaus',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Wärmepumpe Kosten im Einfamilienhaus: ehrliche Einordnung zu Gerät, Montage, Heizsystem, Elektrik, Umbauten und typischen Kostenfehlern',
      neu: 'Wärmepumpe Kosten im Einfamilienhaus: Gerät, Montage, Heizsystem, Elektrik, Umbauten und typische Kostenfehler',
    },
  ],
  'waermepumpe-mit-heizkoerpern': [
    {
      feld: 'seo.metaDescription',
      alt: 'Wärmepumpe mit Heizkörpern: ehrliche Einordnung zu Vorlauftemperatur, Heizflächen, Heizlast, typischen Denkfehlern und sinnvollen Maßnahmen',
      neu: 'Wärmepumpe mit Heizkörpern: Vorlauftemperatur, Heizflächen, Heizlast, typische Denkfehler und sinnvolle Maßnahmen',
    },
  ],
  'waermepumpe-stromverbrauch-berechnen': [
    {
      feld: 'seo.metaDescription',
      alt: 'Wärmepumpe Stromverbrauch berechnen: ehrliche Einordnung zu Wärmebedarf, Jahresarbeitszahl, Vorlauftemperatur, Warmwasser und typischen Denkfehlern',
      neu: 'Wärmepumpe Stromverbrauch berechnen: Wärmebedarf, Jahresarbeitszahl, Vorlauftemperatur, Warmwasser und typische Denkfehler',
    },
  ],
  'waermepumpe-und-photovoltaik': [
    {
      feld: 'seo.metaDescription',
      alt: 'wann sich die Kombination wirklich rechnet – ehrliche Einordnung.',
      neu: 'wann sich die Kombination wirklich rechnet.',
    },
  ],
  'waermepumpe-vorlauftemperatur': [
    {
      feld: 'seo.metaTitle',
      alt: 'Wärmepumpe Vorlauftemperatur erklärt: ehrlich eingeordnet',
      neu: 'Wärmepumpe: Vorlauftemperatur erklärt',
    },
  ],
  'welche-waermepumpe-fuer-mein-haus': [
    {
      feld: 'seo.metaDescription',
      alt: 'welche passt zu meinem Haus? Ehrlicher Vergleich von Effizienz',
      neu: 'welche passt zu meinem Haus? Vergleich von Effizienz',
    },
  ],
  'wie-funktioniert-eine-waermepumpe': [
    { feld: 'teaser', alt: 'was das für Ihr Haus bedeutet', neu: 'was das für dein Haus bedeutet' },
    { feld: 'inhalt', alt: 'Ob Ihr Haus geeignet ist', neu: 'Ob dein Haus geeignet ist' },
    { feld: 'inhalt', alt: 'Ob sie auch in Ihrem Haus effizient läuft', neu: 'Ob sie auch in deinem Haus effizient läuft' },
    { feld: 'inhalt', alt: 'Prüfen lassen, ob Ihr Haus bereit ist', neu: 'Prüfen lassen, ob dein Haus bereit ist' },
    {
      feld: 'inhalt',
      alt: 'wir sagen Ihnen, welche Wärmepumpe zu Ihrem Haus passt',
      neu: 'wir sagen dir, welche Wärmepumpe zu deinem Haus passt',
    },
  ],

  // ─── Repowering ─────────────────────────────────────────────────────────────
  'alte-pv-anlage-nach-20-jahren': [
    {
      feld: 'seo.metaDescription',
      alt: 'Alte PV-Anlage nach 20 Jahren: ehrliche Einordnung zu Weiterbetrieb, Repowering und Abbau',
      neu: 'Alte PV-Anlage nach 20 Jahren: Weiterbetrieb, Repowering oder Abbau',
    },
  ],
  'pv-module-entsorgen-recycling': [
    { feld: 'inhalt', alt: 'als Teil Ihres Repowering-Projekts', neu: 'als Teil deines Repowering-Projekts' },
  ],
  'repowering-kosten': [
    { feld: 'seo.metaDescription', alt: 'Repowering Kosten ehrlich eingeordnet:', neu: 'Repowering Kosten eingeordnet:' },
  ],
  'repowering-solaranlage': [
    {
      feld: 'seo.metaDescription',
      alt: 'Repowering einer Solaranlage ehrlich eingeordnet:',
      neu: 'Repowering einer Solaranlage eingeordnet:',
    },
  ],
  'repowering-vs-neuanlage': [
    {
      feld: 'seo.metaDescription',
      alt: 'Repowering oder Neuanlage? Ehrliche Einordnung zu Modulzustand, Dach, Kosten, Leistung und typischen Denkfehlern',
      neu: 'Repowering oder Neuanlage? Modulzustand, Dach, Kosten, Leistung und typische Denkfehler',
    },
  ],
  'typische-fehler-beim-repowering': [
    // Teaser endete mit einem Nebensatz ohne Hauptsatz – Satzende wie im Ursprungs-Script
    {
      feld: 'teaser',
      alt: 'oder Wirtschaftlichkeit falsch einschätzt.',
      neu: 'oder Wirtschaftlichkeit falsch einschätzt, zahlt am Ende mehr als nötig.',
    },
    {
      feld: 'seo.metaDescription',
      alt: 'Typische Fehler beim Repowering: ehrliche Einordnung zu Modulbewertung, Dach, Elektrik, Zählerschrank, Kosten und Planung',
      neu: 'Typische Fehler beim Repowering: Modulbewertung, Dach, Elektrik, Zählerschrank, Kosten und Planung',
    },
  ],

  // ─── Strom & Energiemanagement ──────────────────────────────────────────────
  'paragraf-14a-enwg-steuerbare-verbrauchseinrichtungen': [
    {
      feld: 'seo.metaDescription',
      alt: '§14a EnWG: ehrliche Einordnung zur Pflicht der Steuerbarkeit',
      neu: '§14a EnWG: Was die Pflicht zur Steuerbarkeit bedeutet',
    },
  ],
}

// Bewusst NICHT geändert (Fließtext mit eigener Aussage, keine Floskel):
// cloud-speicher-stromspeicher-vergleich („… selten ehrlich stehen“), pv-gewerbe-wirtschaftlichkeit-beispielrechnung
// („wie der Steuerhebel ehrlich wirkt“), repowering-solaranlage („die ehrliche Bewertung des Bestands“),
// waermepumpe-und-photovoltaik („Wer das ehrlich einordnet“).

const SLOGAN = /\s*[-–—]\s*WE\s*♥️?\s*ENERGY\s*$/u

/** metaTitle ohne „– WE ♥️ ENERGY“ und ohne doppelte Leerzeichen (gilt für alle Artikel). */
export function normalizeMetaTitle(title) {
  if (typeof title !== 'string') return title
  return title.replace(SLOGAN, '').replace(/\s{2,}/g, ' ').trim()
}

const SIMPLE_FIELDS = new Set(['titel', 'teaser', 'seo.metaTitle', 'seo.metaDescription'])
const RICH_FIELDS = new Set(['inhalt', 'faq', 'zusammenfassung'])
// Technische Schlüssel, deren Werte kein Lesetext sind
const SKIP_KEYS = new Set(['id', 'type', 'blockType', 'blockName', 'format', 'direction', 'mode', 'style', 'tag', 'listType', 'url', 'linkType', 'fields'])

for (const [slug, list] of Object.entries(TEXT_CORRECTIONS)) {
  for (const c of list) {
    if (!SIMPLE_FIELDS.has(c.feld) && !RICH_FIELDS.has(c.feld)) throw new Error(`${slug}: unbekanntes Feld ${c.feld}`)
    // Sonst würde die Korrektur bei jedem Lauf erneut greifen
    if (c.neu.includes(c.alt)) throw new Error(`${slug}: „neu“ enthält „alt“ – Korrektur wäre nicht idempotent`)
  }
}

function getField(article, feld) {
  return feld === 'seo.metaTitle' || feld === 'seo.metaDescription' ? article.seo?.[feld.slice(4)] : article[feld]
}

function setField(article, feld, value) {
  if (feld.startsWith('seo.')) article.seo = { ...(article.seo ?? {}), [feld.slice(4)]: value }
  else article[feld] = value
}

/** Ersetzt `alt` durch `neu` in allen Lesetexten eines Rich-Text-/Block-Felds. Gibt die Anzahl zurück. */
function replaceInTree(node, alt, neu) {
  let count = 0
  if (Array.isArray(node)) {
    for (const child of node) count += replaceInTree(child, alt, neu)
    return count
  }
  if (!node || typeof node !== 'object') return 0
  for (const [key, value] of Object.entries(node)) {
    if (SKIP_KEYS.has(key)) continue
    if (typeof value === 'string') {
      if (value.includes(alt)) {
        node[key] = value.split(alt).join(neu)
        count += 1
      }
    } else if (value && typeof value === 'object') {
      count += replaceInTree(value, alt, neu)
    }
  }
  return count
}

function containsInTree(node, text) {
  if (typeof node === 'string') return node.includes(text)
  if (Array.isArray(node)) return node.some((child) => containsInTree(child, text))
  if (!node || typeof node !== 'object') return false
  return Object.entries(node).some(([key, value]) => !SKIP_KEYS.has(key) && containsInTree(value, text))
}

/**
 * Wendet die Korrekturen auf einen Artikel an (titel, teaser, seo, inhalt, faq, zusammenfassung).
 * Gibt eine Kopie zurück und listet auf, was geändert, schon erledigt oder nicht gefunden wurde.
 */
export function applyTextCorrections(slug, article) {
  const result = { article, applied: [], present: [], notFound: [], metaTitle: false }
  if (!article) return result

  const copy = structuredClone(article)

  const title = copy.seo?.metaTitle
  const normalized = normalizeMetaTitle(title)
  if (normalized !== title) {
    setField(copy, 'seo.metaTitle', normalized)
    result.metaTitle = true
  }

  for (const c of TEXT_CORRECTIONS[slug] ?? []) {
    const value = getField(copy, c.feld)

    if (SIMPLE_FIELDS.has(c.feld)) {
      if (typeof value === 'string' && value.includes(c.alt)) {
        setField(copy, c.feld, value.split(c.alt).join(c.neu))
        result.applied.push(c)
      } else if (typeof value === 'string' && value.includes(c.neu)) {
        result.present.push(c)
      } else {
        result.notFound.push(c)
      }
      continue
    }

    if (replaceInTree(value, c.alt, c.neu) > 0) result.applied.push(c)
    else if (containsInTree(value, c.neu)) result.present.push(c)
    else result.notFound.push(c)
  }

  result.article = copy
  return result
}
