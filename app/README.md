# PsychoLexicon App

Production app for the PsychoLexicon learning platform. The canonical runtime now lives in `app/` and uses a validated, JSON-based article model instead of the previous mix of hardcoded page components and loosely structured content.

## Primary Documentation

- End-user page authoring, migration, recovery, route, and asset guidance:
  - `PAGE_AUTHORING_MIGRATION_RECOVERY_SUPERGUIDE.md`

## Canonical Architecture

- Runtime source of truth: `src/content/articles/*.json`
- Schema and validation: `src/content/schema.ts`
- Taxonomy registry: `src/content/taxonomy.ts`
- Content API, cache, and CRM sync boundary: `src/content/api.ts`
- Generic article renderer: `src/components/content/ArticleRenderer.tsx`
- SVG illustration registry: `src/components/svgs/articleIllustrations.tsx`
- Legacy migration input: `../content/thema-*.yml`

## What Changed

- Replaced the old `subjects.ts`-driven data layer for active routes with validated JSON article documents.
- Replaced the hardcoded `Subject01.tsx` through `Subject12.tsx` routing path with a single generic subject renderer.
- Added a hierarchical taxonomy model so every article resolves to stable category IDs, labels, keywords, and CRM metadata.
- Added structured sections, paragraph entries, inline definitions, source-backed citations, and custom highlight support.
- Added a module-level article cache and an explicit CRM payload boundary for future backend sync.
- Added migration and validation tooling so legacy YAML can be converted and revalidated deterministically.

## Content Schema

Each article document contains:

- `schemaVersion`, `id`, `slug`, and `legacy` provenance metadata
- `meta` with title, discipline, tab color, reading time, and teaser
- `taxonomy` with hierarchical categories, keywords, and audience metadata
- `crm` with external ID, cache tags, record type, and sync metadata
- `sections` with typed blocks:
  - `lead`
  - `definition`
  - `explanation`
  - `visual`
  - `deep_dive`
  - `example`
  - `summary`
- `sources` with short citation, APA citation, verification status, DOI or URL
- `relatedResources` for follow-up material

Inline content is normalized into paragraph/list entries plus explicit annotations:

- `definition` annotations render blue explanatory highlights
- `citation` annotations render red source-backed highlights
- `highlight` annotations support custom runtime styling

## Migration Workflow

Legacy authoring files remain in `../content/` and can be migrated into canonical JSON:

```bash
npm run content:migrate:dry
npm run content:migrate
```

The migration script:

- Reads `../content/thema-*.yml`
- Infers article IDs from filenames
- Maps each article into the canonical JSON schema
- Resolves inline citations against the structured source list
- Writes validated output to `src/content/articles/`

## Validation Workflow

Validation is part of the production build:

```bash
npm run content:validate
npm run build
```

The validation suite checks:

- schema conformance for all generated JSON articles
- taxonomy references
- citation-to-source integrity
- CRM cache-tag and external-ID stability

## CRM Integration Boundary

There is no live backend or CRM service in the current GitHub Pages deployment. Instead, the app now exposes a production-safe integration boundary in `src/content/api.ts`:

- `buildCrmSyncPayload(article)` creates a stable outbound payload
- `pushArticleToCrm(article)` performs an optional POST when `VITE_CONTENT_CRM_ENDPOINT` is configured
- static deployments skip CRM sync automatically

This keeps the frontend compatible with a future backend API without hard-coding any vendor-specific credentials into the client.

## Development

```bash
npm install
npm run dev
npm run lint
npm run content:validate
npm run build
npm run preview
```

## Legacy Notes

- `../content/thema-*.yml` is now migration input, not the runtime source of truth.
- `src/data/subjects.ts` remains a legacy artifact and should not be used for new features.
- `app_archive/`, `app_new/`, `project/`, and `project2/` are not canonical runtime targets for this app.
