# Recovery Parity Verdict

Date: 2026-05-10

Purpose:
- This document records the result of the exhaustive line-by-line parity pass across the recovered `psyc/` trees.
- It answers whether any interesting recovered content, visual asset, component behavior, or study material remained unported into the canonical app.

## Verdict

Status:
- YES

Meaning:
- Every substantive recovered content and illustration artifact in the source-like recovered trees is already present in the canonical app or canonical legacy source set.
- The only live shell-level UX gaps found during this pass were the compact mobile category tabs and the visible branded navbar; both have now been ported into `app/`.
- Remaining differences in recovered files are either:
  - mirrored duplicates already present canonically,
  - responsive-only presentational tweaks already superseded by canonical components,
  - generic UI primitive implementation differences where canonical abstractions preserve or exceed recovered capability,
  - or obsolete router/build artifacts that must not be merged as source.

## Line-by-Line Findings

### Canonical Legacy Content

- `PsychoLexikon/content/thema-01.yml` .. `thema-12.yml`:
  - Exact-match with root `content/thema-01.yml` .. `thema-12.yml`
- `psycholex-v3/content/thema-01.yml` .. `thema-12.yml`:
  - Exact-match with root `content/thema-01.yml` .. `thema-12.yml`

Result:
- No recovered topic text, source list, or research block exists only in `psyc/`.

### Canonical SVG Illustrations

- `PsychoLexikon/src/components/svgs/Subject01SVGs.tsx` .. `Subject12SVGs.tsx`:
  - Exact-match with `app/src/components/svgs/Subject01SVGs.tsx` .. `Subject12SVGs.tsx`
- `psycholex-v3/src/components/svgs/Subject01SVGs.tsx` .. `Subject12SVGs.tsx`:
  - Exact-match with `app/src/components/svgs/Subject01SVGs.tsx` .. `Subject12SVGs.tsx`

Result:
- No recovered illustration drawing or SVG component remains unported.
- Canonical-only value lives in the registry layer `app/src/components/svgs/articleIllustrations.tsx`, not in missing recovered art.

### Legacy Subject Pages

- `Subject02.tsx` .. `Subject12.tsx` in recovered trees:
  - Exact-match with the corresponding canonical legacy page files in `app/src/pages/`
- `Subject01.tsx`:
  - Presentational responsive diff only; no unique content, source, or visual logic missing from canonical runtime
- `SubjectPage.tsx`:
  - Recovered version uses the old component-switch routing model
  - Canonical version supersedes it with schema-driven article rendering via `ArticleRenderer`

Result:
- No recovered subject-page content or rendering pattern remains missing from the canonical runtime.

### Shell Components

- `Tooltip.tsx`, `Footer.tsx`, `ScrollToTop.tsx`:
  - Exact-match
- `NotebookPage.tsx`:
  - Canonical version is a responsive refinement of the recovered version
- `SubjectCard.tsx`:
  - Canonical version is an architectural upgrade that derives category label and accent color from the category registry
- `Layout.tsx`:
  - Recovered-only compact mobile tab behavior was missing at the start of this pass
  - Now ported into canonical `app/src/components/Layout.tsx`
- `Navbar.tsx`:
  - Recovered-only visible branded navbar was missing at the start of this pass
  - Now ported into canonical `app/src/components/Navbar.tsx`

Result:
- All recovered shell behaviors worth keeping are now present in canonical form.

### UI Primitive Library

- Recovered `src/components/ui/`:
  - 51 files exact-match canonical
  - 2 files differ: `context-menu.tsx`, `dropdown-menu.tsx`
- Canonical differences:
  - use `menu-factory.tsx` to remove duplication and preserve menu behavior centrally
  - include one extra canonical helper file: `menu-factory.tsx`

Result:
- Recovered UI primitives do not contain missing domain-specific capability.
- Canonical UI implementation equals or exceeds recovered behavior.

### Smaller `psycholex/` Variant

- Contains a scaffold-like source tree and a small `dist/`
- Does not contain the 12 YAML topic files or the 12 subject SVG source files
- Uses the obsolete `BrowserRouter` path incompatible with the canonical hash-routed deployment contract

Result:
- No unique source content or illustration value remained to port from `psycholex/`.

### Static Build Artifacts

- `psycholex-deploy/`
- `psycholex-dist/`
- `psycholex/dist/`

Result:
- Audited as compiled output only
- No source implementation should be ported from these directories

## Canonical Proof Points

- Canonical validation now enforces route contracts, render smoke tests, migration delta checks, and content invariants.
- Canonical JSON article files are reproducible from root `content/thema-*.yml`.
- Canonical app build, lint, and validation all pass after porting the final recovered shell features.

## Final Answer

- Every interesting recovered study topic, YAML content block, source list, and SVG illustration asset present in the source-like recovered trees is now accounted for in canonical form.
- Every recovered component behavior still worth preserving has either been:
  - confirmed already present,
  - intentionally superseded by a stronger canonical abstraction,
  - or ported during this pass.
- This parity verdict does not treat compiled bundle output as source code, by design.
