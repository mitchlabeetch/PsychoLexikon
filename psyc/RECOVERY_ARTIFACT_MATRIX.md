# PsychoLexikon Recovery Artifact Matrix

Date: 2026-05-10

Purpose:
- This matrix operationalizes `RECOVERY_INTEGRATION_AUDIT.md`.
- It records the current decision for each recovered artifact family.
- It is the live approval boundary for future recovery slices.

## Canonical Rules

- Canonical runtime target: `app/`
- Canonical legacy authoring source: `content/`
- Canonical deployment workflows: `.github/workflows/`
- Recovered trees under `psyc/` are forensic inputs, not active app roots.

## Artifact Matrix

| Artifact family | Recovered source | Current evidence | Decision | Canonical destination | Rationale | Status |
|---|---|---|---|---|---|---|
| Legacy YAML topic files | `psyc/Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)/PsychoLexikon/content/thema-*.yml` | 12 topic YAML files present; line-by-line exact-match with root `content/thema-*.yml` for all 12 topics | Preserve as mirrored source | `content/` remains canonical | Recovered copy contains no additional content beyond the canonical legacy authoring set | Fully ported |
| Legacy YAML topic files | `psyc/Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)/psycholex-v3/content/thema-*.yml` | 12 topic YAML files present; line-by-line exact-match with root `content/thema-*.yml` for all 12 topics | Preserve as mirrored source | `content/` remains canonical | Secondary recovered tree adds no content drift beyond the canonical legacy authoring set | Fully ported |
| Subject SVG source components | `psyc/Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)/PsychoLexikon/src/components/svgs/Subject*SVGs.tsx` | 12 SVG component files present; line-by-line exact-match with canonical `app/src/components/svgs/Subject*SVGs.tsx` | Preserve as mirrored source | `app/src/components/svgs/` plus `app/src/components/svgs/articleIllustrations.tsx` remain canonical | Recovered drawings are already fully present in the canonical app; only the registry layer is canonical-only | Fully ported |
| Subject SVG source components | `psyc/Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)/psycholex-v3/src/components/svgs/Subject*SVGs.tsx` | 12 SVG component files present; line-by-line exact-match with canonical `app/src/components/svgs/Subject*SVGs.tsx` | Preserve as mirrored source | `app/src/components/svgs/` plus illustration registry remain canonical | Secondary recovered tree adds no stronger SVG variant | Fully ported |
| Legacy subject pages and `SubjectPage.tsx` | `psyc/.../src/pages/Subject*.tsx`, `psyc/.../src/pages/SubjectPage.tsx` | `Subject02`..`Subject12` are exact mirrors of canonical legacy pages; `Subject01` differs only by responsive presentational tweaks; recovered `SubjectPage.tsx` uses the old page-switch router | Superseded by canonical renderer | `app/src/components/content/ArticleRenderer.tsx` and `app/src/pages/SubjectPage.tsx` | Canonical app already preserves the useful rendering patterns while replacing the old page-switch route model with schema-driven content rendering | Fully ported / superseded |
| Recovered full source app root | `psyc/.../PsychoLexikon/` | Full duplicate app tree with content, pages, SVGs, and UI primitives | Reject wholesale merge | None | Duplicate app roots create source-of-truth corruption risk | Rejected for direct merge |
| Recovered full source app root | `psyc/.../psycholex-v3/` | Near-duplicate source tree with overlapping responsibilities | Reject wholesale merge | None | Useful only as comparison evidence against sibling recovered trees | Rejected for direct merge |
| Smaller scaffold-like app root | `psyc/.../psycholex/` | Smaller branch-like app variant; no topic YAML or SVG source set surfaced in the current inventory | Reject as merge candidate | None | Divergent router/config history raises more risk than value for the canonical app | Rejected for direct merge |
| Static deploy artifacts | `psyc/.../psycholex-deploy/` | Compiled static bundle | Archive only | None | Build output is evidence, not source implementation | Archived forensic input |
| Static dist artifacts | `psyc/.../psycholex-dist/` | Compiled static bundle | Archive only | None | Build output is evidence, not source implementation | Archived forensic input |

## Operational Notes

- Recovery slices may write only to `app/`, `content/`, tests, workflows, or explicit recovery documents.
- Any recovered content adoption must remain reproducible through the migration pipeline.
- Any recovered visual adoption must resolve through the canonical illustration registry.
- No recovered app root may be promoted to canonical status without explicit user approval.

## Current Completion State

- Phase 0 implemented: `app/` remains the sole runtime target.
- Phase 1 implemented: artifact families now have explicit decisions and destinations.
- Phase 4 implemented operationally: PR validation, route checks, render smoke tests, migration delta tests, lint, and build gates now exist in the canonical app.
- Future slices should focus on selective content and visual extraction, not architectural replacement.
