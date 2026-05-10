# PsychoLexicon — Aktueller Projektstand

Diese Datei beschreibt den aktuellen, produktiven Stand der Repository-Architektur.

## Kanonische Laufzeit

- Aktive Web-App: `app/`
- Aktive Artikeldaten: `app/src/content/articles/*.json`
- Aktive Schema-Definition: `app/src/content/schema.ts`
- Aktive Routing- und Rendering-Pipeline: `app/src/pages/SubjectPage.tsx` plus `app/src/components/content/ArticleRenderer.tsx`

## Legacy- und Migrationsstatus

- `content/thema-*.yml` bleibt als Legacy-Eingabe fuer die Migration erhalten.
- `app/src/data/subjects.ts` ist ein Altbestand und nicht mehr die produktive Quelle fuer neue Features.
- `app_archive/`, `app_new/`, `project/` und `project2/` sind veraltete oder duplizierte App-Staende.

## Aktuelle Content-Architektur

Die produktive Content-Pipeline ist jetzt JSON-basiert und validiert:

1. Legacy-YAML wird mit `app/scripts/migrate-legacy-content.ts` eingelesen.
2. Die Migration ueberfuehrt die Artikel in ein einheitliches JSON-Schema.
3. `app/scripts/validate-content.test.ts` prueft Schema, Taxonomie, Quellenreferenzen und CRM-Metadaten.
4. `app/src/content/api.ts` laedt die JSON-Dateien, validiert sie erneut und cached sie auf Modulebene.
5. `ArticleRenderer` rendert alle Artikel generisch ueber strukturierte Sections, Paragraphen und Annotationen.

## Inhaltliche Standardisierung

Das neue Schema deckt folgende Anforderungen ab:

- hierarchische Kategorien mit stabilen IDs und Metadaten
- strukturierte Erklaerungs- und Zusammenfassungsbloecke
- verifizierbare Quellen mit APA-Zitation, Short Citation und Verifikationsstatus
- Inline-Definitionen und Quellenmarkierungen
- benutzerdefinierte Highlights mit Laufzeit-Styling
- CRM-Metadaten und Cache-Tags pro Artikel

## CRM- und Backend-Hinweis

Es gibt aktuell kein produktives Backend und keine aktive CRM-Integration im Repository. Stattdessen existiert in `app/src/content/api.ts` eine stabile Integrationsgrenze:

- CRM-Payload-Serialisierung fuer Artikel
- optionale API-Synchronisation ueber `VITE_CONTENT_CRM_ENDPOINT`
- statischer Fallback fuer GitHub-Pages-Deployments

## Verifikation

Die Produktions-Build-Pipeline fuehrt die Content-Validierung vor dem Vite-Build aus:

```bash
cd app
npm run content:validate
npm run build
```
