# PEAK.Knowledge Research Foundation

Leitplanken für eine spätere selbstständige Web-Recherche.

## Enthalten

- klassifizierte Quellen mit Stufe A, B oder C
- Quellenregister
- Source Policy für Evidenz und reine Themenentdeckung
- Research Queue mit Prioritäten
- versionierbare Knowledge Proposals
- Review Gate für Quellenanzahl, Unabhängigkeit und Konfidenz

## Betriebsmodus

Aktuell ausschließlich Safe Mode:

- kein Web-Crawler
- keine automatische Recherche
- keine automatische Änderung bestehender Entities
- keine Datenbankpersistenz
- keine automatische Veröffentlichung
- Recht, Normen, Förderung, Steuern und Sicherheit benötigen immer menschliche Freigabe

## Test

```bash
node scripts/knowledge/research-smoke-test.mjs
```

Der nächste Sprint darf auf dieser Basis einen Research Runner bauen, der konkrete Queue-Aufgaben ausführt und ausschließlich Proposals erzeugt.
