# PsychoLexikon Recovery and Integration Audit

Date: 2026-05-10

Purpose:
- This document is the primary recovery briefing for future agents working on the recovered `psyc/` material.
- It is written to support LLM-first execution: a new agent should be able to open only this file and quickly understand the repository topology, the recovery context, the source-of-truth rules, the risks, the approved integration path, and the operational guardrails.
- This document intentionally favors clarity, explicit paths, and decision criteria over brevity.

Scope:
- Baseline analysis of the current production codebase excluding `./psyc`
- Manual forensic inventory and compatibility analysis of recovered `./psyc`
- Integration strategy, regression protocol, benchmark baselines, and agent operating guidance

## 0) Executive Summary

Core conclusion:
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\` is the only canonical runtime and integration target.
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\psyc\` contains valuable recovered artifacts, but also duplicate app trees, static build outputs, and divergent historical states.
- Recovered material should be treated as read-only forensic input unless and until specific fragments are intentionally extracted, adapted, validated, and integrated into `app/`.

Highest-risk facts:
- There are multiple near-duplicate app roots in `psyc/`.
- At least one recovered app uses routing patterns incompatible with the current production deployment strategy.
- Recovered static bundles are not source code and must not be merged as implementation.
- Copying whole files from recovered trees into `app/` is usually the wrong move; selective extraction and transformation are the correct model.

Recommended immediate operating stance:
- Read from `psyc/`.
- Write only to `app/`, test/config/docs, or to explicit audit documents.
- Prefer integration of content and visuals first.
- Defer route shell rewrites, duplicate UI primitives, and build artifact handling until after parity is secured.

## 1) Mission Definition

Mission objective:
- Recover prior development investment from `psyc/` without degrading production stability, architectural clarity, or build integrity.

What "successful recovery" means:
- Valuable recovered knowledge or code is transferred into the canonical application.
- The canonical application remains buildable, testable, and deployable throughout.
- Each adopted artifact has an auditable rationale: why it was reused, adapted, archived, or rejected.
- No recovered duplicate tree becomes a second unofficial source of truth.

What this mission is not:
- It is not a wholesale merge of any recovered app variant.
- It is not a migration of deployment artifacts into source control as active code.
- It is not permission to bypass current schema, routing, or build contracts.

## 2) Absolute Path Map

Repository root:
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\`

Canonical production application:
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\`

Recovered directory under investigation:
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\psyc\`

Recovered package cluster:
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\psyc\Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)\`

Important active project paths:
- Deploy workflow:
  - `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\.github\workflows\deploy-pages.yml`
- Legacy YAML source directory:
  - `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\content\`
- Canonical content schema:
  - `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\src\content\schema.ts`
- Canonical article runtime content:
  - `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\src\content\articles\`
- Content API:
  - `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\src\content\api.ts`
- Content transformer:
  - `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\src\content\transformers.ts`
- Legacy migration script:
  - `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\scripts\migrate-legacy-content.ts`
- Content validation test:
  - `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\scripts\validate-content.test.ts`
- Main app router:
  - `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\src\App.tsx`
- Main renderer:
  - `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\src\components\content\ArticleRenderer.tsx`
- Illustration registry:
  - `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\src\components\svgs\articleIllustrations.tsx`

Recovered roots:
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\psyc\Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)\PsychoLexikon\`
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\psyc\Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)\psycholex-v3\`
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\psyc\Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)\psycholex\`
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\psyc\Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)\psycholex-deploy\`
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\psyc\Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)\psycholex-dist\`

## 3) Source-of-Truth Rules

Authoritative:
- `app/` for runtime code
- `content/` plus migration pipeline for legacy-authoring input
- `.github/workflows/deploy-pages.yml` for deployment behavior

Non-authoritative but useful:
- Recovered YAML files in `psyc/.../content/`
- Recovered SVGs and subject-specific illustrations
- Recovered text structures and historical subject material
- Historical planning docs such as `psyc/.../plan.md`

Non-authoritative and generally non-integratable:
- `psycholex-deploy/`
- `psycholex-dist/`
- `psycholex/dist/`

Hard rule:
- Never assume the newest-looking recovered tree is canonical.
- Never assume a compiled artifact is the most correct source representation.
- Never promote a recovered duplicate app root to active status without explicit user approval.

## 4) Production Baseline (Excluding `./psyc`)

Canonical runtime target:
- `app/` is the production build and deploy source.
- The deploy workflow builds from `app/` and publishes `app/dist`.

Architecture baseline:
- Frontend framework: React + TypeScript + Vite
- Routing model: hash-based SPA routing with `HashRouter`
- Route shell: `app/src/App.tsx`
- App entry: `app/src/main.tsx`
- Content model: data-driven rendering via JSON articles in `app/src/content/articles/`
- Legacy compatibility model: YAML and legacy TS content are normalized through migration and transformation tooling rather than rendered directly

Active route shape:
- `/`
- `/thema`
- `/thema/:id`
- fallback `*`

Key architectural modules:
- Content contracts and validation:
  - `app/src/content/schema.ts`
  - `app/scripts/validate-content.test.ts`
- Content loading and lookup:
  - `app/src/content/api.ts`
- Content taxonomy/model support:
  - `app/src/content/taxonomy.ts`
- Legacy migration and transformation:
  - `app/scripts/migrate-legacy-content.ts`
  - `app/src/content/transformers.ts`
- Rendering pipeline:
  - `app/src/pages/SubjectPage.tsx`
  - `app/src/components/content/ArticleRenderer.tsx`
- Visual asset registry:
  - `app/src/components/svgs/articleIllustrations.tsx`

Implementation standards observed:
- Strict TypeScript enabled
- ESLint configured
- Import alias `@/*` used in active app
- Build gate includes `content:validate` before TypeScript/Vite build
- Modern render model favors schema-validated content over per-page hardcoded subject components

Practical meaning for future agents:
- If you are integrating recovered content, target the schema and content pipeline first.
- If you are integrating recovered visuals, target the illustration registry and renderer contracts.
- If you are tempted to add a legacy page component route, stop and compare that desire against the existing data-driven architecture.

## 4A) Theme vs Category Resolution

Context of the mismatch:
- The current content set contains 12 article pages (`thema-01`..`thema-12`).
- The current notebook tabs in `app/src/components/Layout.tsx` are only 6 grouped navigation entries.
- Each tab currently links directly to the first article in a hardcoded subject group instead of linking to a category landing page.
- The schema still allows multi-category assignment through:
  - `taxonomy.primaryCategoryId`
  - `taxonomy.categoryIds`
- This has created a conceptual mixup:
  - tabs visually behave like categories
  - URLs behave like article pages
  - article taxonomy still models multiple category membership

Resolved product logic:
- Tabs must represent categories, not individual articles.
- Clicking a tab must navigate to a category page.
- A category page must list all articles belonging to that category.
- Every article must belong to exactly one category.
- No article may belong to zero categories.
- No article may belong to more than one category.
- Article colors should be derived from category color, not hand-maintained independently per article.

Why this resolution is preferred:
- It makes the information architecture legible.
- It aligns the notebook-tab mental model with the actual UI behavior.
- It removes ambiguity between "topic page" and "category page".
- It simplifies filtering, browsing, future search, and category-level page generation.

### 4A.1 Recommended Canonical Category Count

Recommendation:
- Use 8 categories for the current 12-article corpus.

Why 8 is preferred over 6:
- 6 requires academically awkward mergers.
- 8 preserves meaningful distinctions while still reducing the current 12-category fragmentation.
- 8 produces a clean navigation model with grouped browsing and limited ambiguity.

Note:
- A later reduction from 8 to 7 or 6 remains possible, but only after validating actual browsing behavior and content growth.

### 4A.2 Recommended Category Set

Recommended canonical categories:

1. `biological-psychology`
- Label: `Biologische Psychologie`
- Color: `#98d4bb`
- Articles: `01`

2. `perception-and-cognition`
- Label: `Wahrnehmung & Kognition`
- Color: `#c7b8ea`
- Articles: `02`, `03`

3. `learning-and-development`
- Label: `Lernen & Entwicklung`
- Color: `#f4b8c5`
- Articles: `04`, `06`

4. `differential-and-personality`
- Label: `Differentielle & Persönlichkeitspsychologie`
- Color: `#a8d8ea`
- Articles: `05`, `08`

5. `social-psychology`
- Label: `Sozialpsychologie`
- Color: `#b7d7f5`
- Articles: `07`

6. `research-methods`
- Label: `Forschungsmethoden`
- Color: `#ffe6a7`
- Articles: `09`

7. `statistics-and-psychometrics`
- Label: `Statistik & Psychometrie`
- Color: `#f2c6a0`
- Articles: `10`, `11`

8. `motivation-and-emotion`
- Label: `Motivation & Emotion`
- Color: `#d4a8a8`
- Articles: `12`

### 4A.3 Recommended One-to-One Article Assignment

This is the recommended strict mapping for the existing 12 articles:

- `thema-01` -> `biological-psychology`
- `thema-02` -> `perception-and-cognition`
- `thema-03` -> `perception-and-cognition`
- `thema-04` -> `learning-and-development`
- `thema-05` -> `differential-and-personality`
- `thema-06` -> `learning-and-development`
- `thema-07` -> `social-psychology`
- `thema-08` -> `differential-and-personality`
- `thema-09` -> `research-methods`
- `thema-10` -> `statistics-and-psychometrics`
- `thema-11` -> `statistics-and-psychometrics`
- `thema-12` -> `motivation-and-emotion`

Important consequence:
- The current secondary-category semantics for methods/statistics/psychometrics should be removed.
- Existing articles `09`, `10`, and `11` should each keep exactly one category.

### 4A.4 Navigation Contract

Required future routing logic:
- Home page:
  - shows all articles or highlights categories plus recent/featured articles
- Category route:
  - `/kategorie/:slug`
  - lists all articles in that category
  - uses category label and category color consistently
- Article route:
  - `/thema/:id`
  - renders a single article
  - displays its parent category visually and semantically

Tab behavior:
- Notebook tabs map 1:1 to categories
- Each tab links to `/kategorie/:slug`
- Active tab is determined from:
  - current category page slug, or
  - current article's category

Article page behavior:
- Article page does not pretend to be a category page
- Article page should expose category context:
  - category label
  - category color
  - optional breadcrumb or back-link to category page

### 4A.5 Data Model Contract

Recommended category source of truth:
- Categories must live in a single canonical registry.
- Tabs, article cards, category pages, and taxonomy validation should all derive from that registry.

Recommended category object shape:
- `id`
- `slug`
- `label`
- `description`
- `color`
- `order`

Recommended article taxonomy shape:
- Replace multi-membership semantics with a single field:
  - `taxonomy.categoryId`

Preferred simplification:
- Remove or deprecate:
  - `taxonomy.primaryCategoryId`
  - `taxonomy.categoryIds`
- Keep exactly one category field for each article.

Color ownership:
- Category color should belong to the category registry.
- Article UI should consume the category color dynamically.
- `meta.tabColor` should eventually become derived data or be removed to avoid duplication drift.

### 4A.6 Implementation Consequences in `app/`

Files that will need refactor when this contract is implemented:

- `app/src/components/Layout.tsx`
  - Replace hardcoded tab groups with category registry driven tabs.
  - Route tabs to category pages, not article pages.

- `app/src/App.tsx`
  - Add category route:
    - `/kategorie/:slug`
  - Preserve article route:
    - `/thema/:id`

- `app/src/pages/SubjectPage.tsx`
  - Continue rendering single-article content.
  - Add category context resolution for the current article.

- New category page component required:
  - likely `app/src/pages/CategoryPage.tsx`
  - lists all articles for one category
  - applies label and color consistently

- `app/src/content/schema.ts`
  - Replace multi-category article taxonomy with exactly-one-category semantics.

- `app/src/content/taxonomy.ts`
  - Refactor from broad topic taxonomy plus article map into a true category registry for navigation.

- `app/src/components/SubjectCard.tsx`
  - Derive label/color from category, not duplicated per-article tab config.

- `app/scripts/validate-content.test.ts`
  - Add assertions that:
    - every article has exactly one category
    - every category slug resolves
    - all categories used by articles exist
    - category count stays within expected design bounds

### 4A.7 Validation Rules for the New Logic

Validation rules that should become mandatory:
- Every article must have exactly one category ID.
- Every category ID used by an article must resolve in the category registry.
- Every category tab must resolve to an existing category page.
- Every article page must resolve its category and inherit its display color.
- No orphan categories unless intentionally allowed.
- No empty article category assignment.
- No multi-category article assignment.

Recommended higher-level validation:
- Enforce a category count between 6 and 8.
- Enforce stable category ordering for tabs.
- Enforce that article cards shown within a category page all match the category color/label context.

### 4A.8 Points of Attention for Future Agents

Do not confuse these concepts:
- Article = one content page
- Category = one navigation bucket containing one or more articles
- Tab = UI control for a category

Do not preserve legacy ambiguity:
- A tab must not point to an arbitrary representative article.
- A category page must not be implemented as a disguised article page.
- An article must not retain hidden secondary membership just because old taxonomy supported it.

Recommended migration order:
1. Define canonical category registry
2. Migrate article taxonomy to exactly one category field
3. Add category route and category page
4. Refactor tabs to category navigation
5. Remove duplicated tab color logic from article metadata

Success criteria for this specific issue:
- Tab count equals category count
- Category page count equals category count
- Every article belongs to exactly one category
- Clicking a tab always lands on a category page
- From a category page, the user can access all articles in that category
- On an article page, the user can always tell which category the article belongs to

## 5) Recovered Inventory (`./psyc`)

Root:
- `psyc/Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)/`
  - `plan.md`
  - `PsychoLexikon/`
  - `psycholex-v3/`
  - `psycholex/`
  - `psycholex-deploy/`
  - `psycholex-dist/`

Interpretation of this root:
- `PsychoLexikon/` and `psycholex-v3/` are source-like recovered app trees with substantial overlap.
- `psycholex/` is a smaller app variant or scaffold branch that also contains built output.
- `psycholex-deploy/` and `psycholex-dist/` are compiled static outputs and belong to deployment/build history, not source authority.

### 5.1 `PsychoLexikon/`

Root files:
- `.gitignore`
- `README.md`
- `components.json`
- `eslint.config.js`
- `index.html`
- `info.md`
- `package-lock.json`
- `package.json`
- `postcss.config.js`
- `tailwind.config.js`
- `tsconfig.app.json`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`

`content/`:
- `thema-01.yml`
- `thema-02.yml`
- `thema-03.yml`
- `thema-04.yml`
- `thema-05.yml`
- `thema-06.yml`
- `thema-07.yml`
- `thema-08.yml`
- `thema-09.yml`
- `thema-10.yml`
- `thema-11.yml`
- `thema-12.yml`

`src/` top-level:
- `App.tsx`
- `index.css`
- `main.tsx`

`src/data/`:
- `subjects.ts`

`src/hooks/`:
- `use-mobile.ts`

`src/lib/`:
- `utils.ts`

`src/pages/`:
- `Home.tsx`
- `NotFoundPage.tsx`
- `Subject01.tsx`
- `Subject02.tsx`
- `Subject03.tsx`
- `Subject04.tsx`
- `Subject05.tsx`
- `Subject06.tsx`
- `Subject07.tsx`
- `Subject08.tsx`
- `Subject09.tsx`
- `Subject10.tsx`
- `Subject11.tsx`
- `Subject12.tsx`
- `SubjectPage.tsx`

`src/components/`:
- `Footer.tsx`
- `Layout.tsx`
- `Navbar.tsx`
- `NotebookPage.tsx`
- `ScrollToTop.tsx`
- `SubjectCard.tsx`
- `Tooltip.tsx`

`src/components/svgs/`:
- `Subject01SVGs.tsx`
- `Subject02SVGs.tsx`
- `Subject03SVGs.tsx`
- `Subject04SVGs.tsx`
- `Subject05SVGs.tsx`
- `Subject06SVGs.tsx`
- `Subject07SVGs.tsx`
- `Subject08SVGs.tsx`
- `Subject09SVGs.tsx`
- `Subject10SVGs.tsx`
- `Subject11SVGs.tsx`
- `Subject12SVGs.tsx`

`src/components/ui/`:
- `accordion.tsx`
- `alert-dialog.tsx`
- `alert.tsx`
- `aspect-ratio.tsx`
- `avatar.tsx`
- `badge.tsx`
- `breadcrumb.tsx`
- `button-group.tsx`
- `button.tsx`
- `calendar.tsx`
- `card.tsx`
- `carousel.tsx`
- `chart.tsx`
- `checkbox.tsx`
- `collapsible.tsx`
- `command.tsx`
- `context-menu.tsx`
- `dialog.tsx`
- `drawer.tsx`
- `dropdown-menu.tsx`
- `empty.tsx`
- `field.tsx`
- `form.tsx`
- `hover-card.tsx`
- `input-group.tsx`
- `input-otp.tsx`
- `input.tsx`
- `item.tsx`
- `kbd.tsx`
- `label.tsx`
- `menubar.tsx`
- `navigation-menu.tsx`
- `pagination.tsx`
- `popover.tsx`
- `progress.tsx`
- `radio-group.tsx`
- `resizable.tsx`
- `scroll-area.tsx`
- `select.tsx`
- `separator.tsx`
- `sheet.tsx`
- `sidebar.tsx`
- `skeleton.tsx`
- `slider.tsx`
- `sonner.tsx`
- `spinner.tsx`
- `switch.tsx`
- `table.tsx`
- `tabs.tsx`
- `textarea.tsx`
- `toggle-group.tsx`
- `toggle.tsx`
- `tooltip.tsx`

Operational interpretation:
- This tree appears to be a relatively complete historical app source.
- It is useful for content, page structure, visuals, and UI comparison.
- It must not be treated as an alternative production root.

### 5.2 `psycholex-v3/`

Root files:
- `components.json`
- `index.html`
- `package.json`
- `postcss.config.js`
- `tailwind.config.js`
- `tsconfig.app.json`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`

`content/`:
- `thema-01.yml`
- `thema-02.yml`
- `thema-03.yml`
- `thema-04.yml`
- `thema-05.yml`
- `thema-06.yml`
- `thema-07.yml`
- `thema-08.yml`
- `thema-09.yml`
- `thema-10.yml`
- `thema-11.yml`
- `thema-12.yml`

`src/` structure mirrors `PsychoLexikon/src`:
- `App.tsx`, `index.css`, `main.tsx`
- `data/subjects.ts`
- `hooks/use-mobile.ts`
- `lib/utils.ts`
- `pages/Home.tsx`, `NotFoundPage.tsx`, `Subject01.tsx`..`Subject12.tsx`, `SubjectPage.tsx`
- `components/Footer.tsx`, `Layout.tsx`, `Navbar.tsx`, `NotebookPage.tsx`, `ScrollToTop.tsx`, `SubjectCard.tsx`, `Tooltip.tsx`
- `components/svgs/Subject01SVGs.tsx`..`Subject12SVGs.tsx`
- `components/ui/` same 54 files as `PsychoLexikon/src/components/ui`

Operational interpretation:
- This is another near-duplicate source tree.
- It is valuable mostly as corroborating evidence when comparing drift across recovered variants.
- The missing lockfile makes it less reproducible than sibling copies.

### 5.3 `psycholex/`

Root files:
- `README.md`
- `components.json`
- `eslint.config.js`
- `index.html`
- `package-lock.json`
- `package.json`
- `postcss.config.js`
- `tailwind.config.js`
- `tsconfig.app.json`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`

`dist/`:
- `index.html`
- `assets/index-B3BmQ_c7.css`
- `assets/index-GDJkMjh4.js`

`src/`:
- `App.css`
- `App.tsx`
- `index.css`
- `main.tsx`
- `pages/Home.tsx`
- `hooks/use-mobile.ts`
- `lib/utils.ts`
- `components/ui/` same 54-file UI set

Operational interpretation:
- This appears to be a smaller branch or scaffold-like variant.
- It is useful for identifying router and configuration drift.
- It is not a safe direct merge source.

### 5.4 `psycholex-deploy/`

Files:
- `index.html`
- `assets/index-CMr_JzOB.js`
- `assets/index-BqNISRzj.css`
- `assets/external-link-CJpl1K7M.js`
- `assets/Tooltip-D94Wsv9V.js`
- `assets/SubjectPageTemplate-ZJnm532H.js`
- `assets/Subject01-chvI47Ep.js`
- `assets/Subject02-Da4C3nXV.js`
- `assets/Subject03-ohnSzcnL.js`
- `assets/Subject04-COrRVncX.js`
- `assets/Subject05-TLUjXxdR.js`
- `assets/Subject06-D665-DET.js`
- `assets/Subject07-D6yjiQ1a.js`
- `assets/Subject08-BW836dza.js`
- `assets/Subject09-TsWr7-L6.js`
- `assets/Subject10-DFBxrhvs.js`
- `assets/Subject11-CT3JhJuX.js`
- `assets/Subject12-DifUHVh5.js`

Operational interpretation:
- This is compiled output.
- Treat as evidence of historical runtime shape, chunking, and asset footprint.
- Do not use as source implementation.

### 5.5 `psycholex-dist/`

Files:
- `index.html`
- `assets/index-DPmXea2g.js`
- `assets/index-DgH5GIHW.css`
- `assets/external-link-BAQ7OhZm.js`
- `assets/Tooltip-BNb7geNC.js`
- `assets/SubjectPageTemplate-DVc3l3yf.js`
- `assets/Subject01-DZz39H8W.js`
- `assets/Subject02-CnYx_MYz.js`
- `assets/Subject03-CXS6w9oS.js`
- `assets/Subject04-B6uGUwb-.js`
- `assets/Subject05-DVzUvQs7.js`
- `assets/Subject06-yL-5t8L5.js`
- `assets/Subject07-DLHM71Lu.js`
- `assets/Subject08-Dz4GCBKN.js`
- `assets/Subject09-BIMBLSI4.js`
- `assets/Subject10-VjwGbE1m.js`
- `assets/Subject11-C_a3BWCe.js`
- `assets/Subject12-CsKUyFqt.js`

Operational interpretation:
- This is also compiled output.
- It may be useful for comparing bundle structure or confirming subject-page decomposition strategies.
- It is not source authority.

## 6) Forensic Analysis: Corruption, Conflict, Deprecation, Hidden Dependencies

Risk scale:
- P0 = critical blocker
- P1 = high integration risk
- P2 = moderate risk
- P3 = low risk

### 6.1 P0 Findings

Duplicate-project corruption risk:
- Multiple recovered app roots contain overlapping files, overlapping responsibilities, and likely overlapping history.
- This creates corruption-by-duplication risk even if file contents are valid, because agents can easily update the wrong tree or infer the wrong source of truth.

Impact:
- Wrong-target edits
- False assumptions about "current" dependency versions
- Reintroduction of deprecated architectural patterns

Mandatory agent response:
- Before editing anything, explicitly confirm whether the target file is under `app/` or under `psyc/`.
- If the planned edit affects code behavior, default to `app/`.

### 6.2 P1 Findings

Version drift:
- Recovered copies use different dependency versions.
- Recovered copies are not guaranteed to build the same way even if source structure looks similar.

Lockfile inconsistency:
- `psycholex-v3` lacks a lockfile while sibling trees have one.
- This means reconstructed dependency graphs may not be reproducible.

Impact:
- Silent runtime differences
- Install/build drift
- Misleading blame when adapting recovered components

Mandatory agent response:
- Use `app/package.json` as the canonical dependency contract.
- Do not import recovered dependency choices automatically.

### 6.3 P1/P2 Findings

Router incompatibility:
- The smaller recovered `psycholex` app uses `BrowserRouter`.
- The canonical production app uses `HashRouter`.

Why this matters:
- GitHub Pages and similar static hosting setups behave differently under browser-history routing.
- Direct reuse of router logic from recovered copies can produce broken deep links or require host rewrites that the current deployment model does not provide.

Mandatory agent response:
- Preserve current route contract unless the user explicitly requests a routing migration.

### 6.4 P2 Findings

Hidden runtime dependencies:
- Built `index.html` files in recovered static outputs reference external font or CDN resources.
- These are not npm-level dependencies and can be overlooked if an agent inspects only source packages.

Why this matters:
- Fonts or third-party network dependencies can affect privacy, rendering, and offline resilience.
- Static output can encode assumptions that are not present in `package.json`.

Mandatory agent response:
- When learning from built artifacts, inspect entry HTML and not just JS file names.

### 6.5 P3 Findings

Deprecation scan:
- No clear evidence was found in sampled recovered entrypoints of legacy React class-era APIs such as `ReactDOM.render` or `findDOMNode`.

Interpretation:
- Recovered material is not obviously ancient, but it is still architecturally older than the current normalized content pipeline.

## 7) Cross-Reference Mapping to Current Codebase

### 7.1 Reuse-Ready / Directly Mappable

Legacy YAML content:
- Recovered: `psyc/.../content/thema-01.yml`..`thema-12.yml`
- Current pathway: `content/*.yml` -> migration scripts -> `app/src/content/articles/*.json`
- Decision: keep as upstream authoring source only, not direct runtime input

SVG subject component assets:
- Recovered: `src/components/svgs/Subject*.tsx`
- Current: `app/src/components/svgs/Subject*.tsx`
- Decision: reusable if registered through the current illustration registry and aligned to current asset naming conventions

### 7.2 Adaptation-Required

Recovered `SubjectPage.tsx` and per-subject pages:
- Old model: route -> page component switch
- Current model: route -> typed content lookup -> `ArticleRenderer`
- Decision: do not restore page-per-topic routing as the primary runtime model
- Approved use: mine these files for textual structure, labels, visuals, citations, and presentation ideas

Recovered `subjects.ts`:
- Old model: large monolithic TypeScript data payload
- Current model: normalized schema + taxonomy + metadata-aware JSON content
- Decision: reference-only during migration or validation; not runtime source

Recovered UI primitives:
- Some recovered `components/ui/*.tsx` files may overlap with existing generated or customized UI components in `app/src/components/ui/`
- Decision: only adopt a recovered UI primitive if the capability is absent from the canonical app or the recovered version contains domain-specific behavior worth porting intentionally

### 7.3 Non-Integratable as Source

`psycholex-deploy/` and `psycholex-dist/`:
- Build outputs only
- Decision: forensic artifacts, not code merge candidates

Recovered duplicate root apps as full apps:
- `PsychoLexikon/`
- `psycholex-v3/`
- `psycholex/`
- Decision: do not integrate wholesale

## 8) Artifact Decision Matrix

Use this matrix before integrating anything from `psyc/`.

Artifact type: YAML content
- Default decision: adapt
- Destination: migration pipeline then canonical article JSON
- Questions to ask:
  - Is the content already present in canonical articles?
  - Does the recovered version contain richer structure, citations, or explanatory detail?
  - Does it fit the current schema without inventing new unsupported fields?

Artifact type: SVG / illustration component
- Default decision: adapt
- Destination: canonical SVG directory plus illustration registry
- Questions to ask:
  - Does it duplicate an existing asset?
  - Does it need renaming to fit `assetId` conventions?
  - Does the renderer support its intended use?

Artifact type: legacy page component
- Default decision: extract selectively
- Destination: none directly
- Questions to ask:
  - Is the value in the content, layout logic, or the visual?
  - Can the useful part be expressed in schema data or a renderer enhancement instead?

Artifact type: UI primitive
- Default decision: reject unless justified
- Destination: `app/src/components/ui/` only if capability gap exists
- Questions to ask:
  - Is this already present in canonical UI?
  - Is the recovered variant materially better or more domain-specific?
  - Does adopting it increase maintenance burden?

Artifact type: package/config file
- Default decision: compare only
- Destination: canonical config only after manual review
- Questions to ask:
  - Does this represent a needed capability?
  - Does it conflict with current build/deploy/tooling?

Artifact type: built asset
- Default decision: reject as source
- Destination: none
- Questions to ask:
  - Is this only useful as evidence?
  - Is the same behavior visible in source elsewhere?

## 9) Strategic Reuse Opportunities

High-value candidates:
- Subject-level textual and structural fragments not yet represented in normalized article JSON
- SVG illustrations and visual taxonomy mappings embedded in legacy subject pages
- Citation structures, references, or conceptual groupings that can improve canonical content quality
- Missing UX details that can be expressed via the current renderer without regressing architecture

Medium-value candidates:
- Small presentation utilities or helper logic that are absent from `app/`
- Specific UI patterns only if they solve a current gap and do not duplicate existing primitives

Low-value or reject candidates:
- Entire duplicate app skeletons
- Built bundle outputs
- Alternate router shells conflicting with active architecture
- Bulk adoption of recovered configs without justification

## 10) Phased Integration Strategy

### Phase 0 - Stabilize and Freeze Sources

Actions:
- Confirm `app/` as sole integration target
- Treat all recovered roots as read-only forensic inputs
- Record source-of-truth policy in docs

Success criteria:
- No active task writes functional code into recovered roots
- Team/agent decisions consistently reference `app/` as target

Failure signs:
- An agent starts "fixing" recovered app trees directly
- A recovered root is described as "the real app" without explicit user approval

### Phase 1 - Structured Extraction

Actions:
- Build an artifact-level extraction matrix by category:
  - content
  - visuals
  - UI primitive
  - route logic
  - build artifact
- Record one decision per artifact:
  - reuse
  - adapt
  - archive
  - reject

Success criteria:
- Every candidate artifact has a rationale
- There is no ambiguous "maybe merge later" bucket without notes

Points of attention:
- Favor smaller units of extraction
- Do not collapse multiple artifacts into one vague integration story

### Phase 2 - Adaptation Layer Implementation

Content adapter:
- Convert recovered content into schema-compliant article JSON through the existing migration/transform pipeline

Visual adapter:
- Register recovered visuals via `assetId` in the illustration registry

API adapter:
- Ensure any legacy field is transformed into current schema fields only

Success criteria:
- Recovered information appears in canonical runtime through existing content or renderer mechanisms
- No legacy-only field leaks into production runtime without explicit schema work

### Phase 3 - Refactor and Harden

Actions:
- Enforce strict TypeScript compatibility
- Remove duplicated logic from integrated fragments
- Add explicit error handling at transformation and lookup boundaries
- Align names, imports, and contracts with current code style

Success criteria:
- Integrated code looks native to `app/`
- Error cases are deliberate rather than accidental

### Phase 4 - Regression Hardening

Actions:
- Add a dedicated pull-request validation workflow
- Require smoke, route, and content-render tests
- Fail integration when schema, route, or source-mapping rules are broken

Success criteria:
- Integration changes are blocked automatically when core invariants break

### Phase 5 - Rollout and Cleanup

Actions:
- Merge in slices by topic (`thema-01`..`thema-12`) or by artifact family
- Benchmark each slice
- Archive or label untouched recovered material under an explicit retention policy

Success criteria:
- Recovery work is incremental, reviewable, and reversible
- No final state depends on keeping duplicate recovered apps alive as active references

## 11) Refactoring and Modernization Requirements

Every integrated artifact must pass:
- Type safety:
  - No implicit `any`
  - Strict schema alignment where applicable
- Error handling:
  - Explicit failures or fallbacks for missing content, unresolved assets, and invalid IDs
- Dependency modernization:
  - Use canonical dependency versions from `app/package.json`
- Router compliance:
  - Remain compatible with hash routing and current route contracts
- Rendering contract:
  - Use current `ArticleRenderer`-oriented content semantics
- Lint/style:
  - Pass lint and build validation

Recommended modernization checks:
- Avoid duplicating per-subject hardcoded render logic
- Prefer data normalization over bespoke component branches
- Add comments only where recovery logic would otherwise be non-obvious

## 12) Regression Test Protocol

Current mandatory gates:
- `npm run lint`
- `npm run content:validate`
- `npm run build`

Recommended additions during integration:
- Route contract tests:
  - `/`
  - `/thema`
  - `/thema/:id`
  - wildcard route
- Content rendering tests:
  - Title renders
  - Sources render
  - Annotation/source references resolve
  - Visual asset IDs resolve or produce intentional fallback
- Migration delta checks:
  - No silent reduction in article count
  - No silent loss of sections, sources, or taxonomy coverage

Important caveat:
- There is no `test:content` script in the active app at the time of this audit.
- Do not assume such a script exists unless it is added deliberately.

## 13) Baseline Benchmarks (Current State)

Measured baseline values:
- `app` content validation duration: ~0.83s
- `app` full build duration: ~11.01s
- `app` largest JS bundle: ~733,578 bytes
- `app` CSS bundle: ~90,143 bytes

Recovered artifact comparison:
- `psycholex-dist` main JS: ~556,428 bytes
- `psycholex-deploy` main JS: ~595,327 bytes

Interpretation:
- Current canonical app has a larger monolithic JS bundle than recovered static snapshots
- This does not make the recovered apps "better"; it only indicates different chunking/runtime composition
- Post-recovery optimization should consider code splitting, but only after correctness and parity are secured

## 14) Success Criteria

Global success criteria:
- Canonical app remains the single trusted runtime target
- Recovered content or visuals are integrated without bypassing the current schema/renderer architecture
- All integrated changes are justified in writing
- Build and validation continue to pass
- A future agent can explain exactly where each reused artifact came from and why it was adopted

Minimum success criteria for a recovery slice:
- The slice identifies one or more artifacts from `psyc/`
- Each artifact has a decision record
- Any integrated artifact is adapted into the canonical architecture
- Validation and build pass after integration

Strong success criteria:
- Route tests and content-render tests cover the slice
- Bundle or performance impact is measured
- The slice reduces duplication or ambiguity rather than adding more

## 15) Caveats and Points of Attention

Points of attention:
- Similar filenames across recovered roots do not imply equal trustworthiness
- Near-duplicate content files may differ subtly in wording, references, or metadata
- Recovered pages may embed content, visuals, and behavior in a way that should be split during integration
- Static bundles can reveal historical architecture but often hide source intent

Caveats:
- This audit is strong on topology and compatibility, but not a line-by-line semantic diff of every duplicate file
- Large recovered files such as `subjects.ts` likely contain high-value detail, but require targeted extraction work
- Some UI files in recovered trees may simply be generated vendor-style code with little domain value

Red flags:
- "This recovered app already works, so let's just swap it in"
- "This static build proves the source should look like this"
- "The file exists in two recovered trees, so either one is fine"

## 16) Agent Operating Instructions

Preferred workflow for future agents:
1. Re-read this file
2. Confirm the exact artifact family being investigated
3. Confirm the write target is `app/` or a documentation file, not a recovered duplicate root
4. Read the canonical implementation before reading the recovered candidate in depth
5. Decide whether the artifact is reuse, adapt, archive, or reject
6. Make the smallest viable integration
7. Run relevant validation
8. Record the decision and rationale

When to use sub-agents:
- Use search-oriented sub-agents for broad topology discovery, cross-tree comparisons, or concept-level questions
- Do not use sub-agents for narrow single-file edits when direct inspection is faster

Preferred tools and techniques:
- Use `Read` for exact file inspection
- Use `Grep` for conflict or pattern detection
- Use `SearchCodebase` for semantic discovery
- Use `RunCommand` for build/validation checks
- Use `GetDiagnostics` after substantive edits
- Use `apply_patch` for precise single-file changes

Skill relevance:
- The currently available workspace skills are not central to this recovery mission
- External-data or Flowise-specific skills should only be considered if the user explicitly expands scope

When to ask the user:
- If a change would promote a recovered tree to canonical status
- If integration requires a route-model migration
- If multiple recovered variants contain materially different content and the preferred source is ambiguous
- If a change would delete or quarantine recovered material

When to stop immediately:
- If unexpected third-party edits appear in files you are about to modify
- If the task seems to require reverting user changes
- If the integration target becomes ambiguous

## 17) Audit Trail of Decisions and Actions

Action log:
1. Baseline analysis completed for non-`psyc` production code
2. Full recovered directory inventory completed manually and categorized by type
3. Forensic risk assessment completed for duplication, version drift, router mismatch, and hidden dependencies
4. Cross-reference map completed between recovered artifacts and current implementation
5. Integration strategy defined with phased rollout, adapter boundaries, and test gates
6. Baseline benchmark values captured and recorded
7. This document was enriched into an agent-facing operational manual

Decision log:
- Canonical integration target is `app/` only
- Recovered duplicate app roots are forensic inputs, not direct merge targets
- Built artifact directories are excluded from source integration
- Legacy content enters production only through migration and validation paths
- Legacy route/component patterns are adapted into the current data-driven architecture rather than copied wholesale

## 18) Open Questions for Future Work

Questions not fully resolved by this audit:
- Which recovered YAML or page fragments contain materially better content than the current canonical articles?
- Which recovered SVGs or visual structures are present in legacy pages but absent from the current illustration registry?
- Is there any domain-specific UI behavior in recovered `components/ui/` that is truly absent from `app/`?
- Should a dedicated CI workflow be added immediately before the first recovery slice lands?

Recommended next implementation order:
1. Add PR validation workflow
2. Compare canonical article JSON against recovered YAML/topic sources
3. Register any missing recovered visuals through the current illustration registry
4. Only then assess whether small renderer enhancements are needed

## 19) Integration Readiness Verdict

Status:
- CONDITIONAL-GO

Conditions to proceed:
- Confirm `app/` as sole merge target
- Approve phased integration with content and visuals first
- Enforce regression gate workflow before the first merged recovery slice

Current blockers:
- Duplicate recovered roots can still confuse source selection unless explicitly quarantined by convention
- Missing dedicated PR CI workflow can allow regressions to reach the deploy branch

Final guidance:
- The recovered directory is a valuable archive, not a replacement app.
- The safest path is progressive extraction into the already-operational architecture.
