# PsychoLexicon Page Authoring, Migration, Recovery, and Route Superguide

Date: 2026-05-10
Audience:
- Content authors creating new pages
- Developers extending the content model
- Recovery agents extracting material from former versions
- Reviewers validating no-loss migrations

Purpose:
- This is the canonical long-form operating manual for page creation and migration in the active `app/`.
- It merges the practical guidance previously spread across `app/README.md`, `README.md`, `info.md`, `app/info.md`, `psyc/RECOVERY_INTEGRATION_AUDIT.md`, `psyc/.../plan.md`, and `_guidance_zip/illustration_guide.md`.
- It explains how pages are represented in JSON, how routes behave, how categories work, how to preserve all currently used data when migrating, and how to selectively fetch assets or content from former versions without reintroducing architectural drift.

---

## 1. Executive Summary

Canonical runtime:
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\`

Canonical runtime content:
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\src\content\articles\*.json`

Legacy migration input:
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\content\thema-*.yml`

Recovered former-version source pool:
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\psyc\`

Core rules:
- Do not create new runtime pages as hardcoded `Subject01.tsx`-style implementations.
- Do not merge entire former-version app trees.
- Do not use build artifacts as source.
- Create or edit page content in canonical JSON, or migrate from legacy YAML through the migration tooling.
- Categories drive navigation; articles belong to one canonical navigation category.

---

## 2. Canonical Paths and Files

Repository root:
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\`

Active application:
- `c:\Users\tanag\Desktop\PsychoLexikon\PsychoLexikon\app\`

Primary runtime files:
- `app/src/main.tsx`
- `app/src/App.tsx`
- `app/src/components/Layout.tsx`
- `app/src/pages/CategoryPage.tsx`
- `app/src/pages/SubjectPage.tsx`
- `app/src/components/content/ArticleRenderer.tsx`
- `app/src/components/SubjectCard.tsx`

Content model and migration files:
- `app/src/content/schema.ts`
- `app/src/content/taxonomy.ts`
- `app/src/content/api.ts`
- `app/src/content/transformers.ts`
- `app/scripts/migrate-legacy-content.ts`
- `app/scripts/validate-content.test.ts`

Illustration and visual asset files:
- `app/src/components/svgs/articleIllustrations.tsx`
- `app/src/components/svgs/Subject01SVGs.tsx` ... `Subject12SVGs.tsx`

Legacy authoring input:
- `content/thema-01.yml` ... `content/thema-12.yml`

Recovered former-version trees:
- `psyc/Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)/PsychoLexikon/`
- `psyc/Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)/psycholex-v3/`
- `psyc/Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)/psycholex/`

Do not use as runtime source:
- `psyc/.../psycholex-deploy/`
- `psyc/.../psycholex-dist/`
- `psycholex/dist/`

---

## 3. Current Route Map

The app runs under `HashRouter`, which means URLs are hash-based in deployed static hosting.

Current route contract:
- `/`
  - Home page
  - Overview entrypoint
  - Can show all articles as cards
- `/thema`
  - Redirects to `/`
- `/kategorie/:slug`
  - Category landing page
  - Lists all articles in the selected category
- `/thema/:id`
  - Article page
  - Renders one canonical article document
- `*`
  - Not found page

Important behavior:
- Tabs in the notebook layout are category tabs.
- Category pages are not disguised article pages.
- Article pages must retain visible category context.
- The application uses `HashRouter` in `app/src/main.tsx`, so route expectations must stay compatible with static hosting.

Practical examples:
- `/#/`
- `/#/kategorie/wahrnehmung-und-kognition`
- `/#/thema/03`

---

## 4. Category and Navigation Contract

Current canonical navigation uses 8 categories:

1. `biological-psychology`
- Label: `Biologische Psychologie`
- Slug: `biologische-psychologie`
- Articles: `01`

2. `perception-and-cognition`
- Label: `Wahrnehmung & Kognition`
- Slug: `wahrnehmung-und-kognition`
- Articles: `02`, `03`

3. `learning-and-development`
- Label: `Lernen & Entwicklung`
- Slug: `lernen-und-entwicklung`
- Articles: `04`, `06`

4. `differential-and-personality`
- Label: `Differentielle & Persoenlichkeitspsychologie`
- Slug: `differentielle-und-persoenlichkeitspsychologie`
- Articles: `05`, `08`

5. `social-psychology`
- Label: `Sozialpsychologie`
- Slug: `sozialpsychologie`
- Articles: `07`

6. `research-methods`
- Label: `Forschungsmethoden`
- Slug: `forschungsmethoden`
- Articles: `09`

7. `statistics-and-psychometrics`
- Label: `Statistik & Psychometrie`
- Slug: `statistik-und-psychometrie`
- Articles: `10`, `11`

8. `motivation-and-emotion`
- Label: `Motivation & Emotion`
- Slug: `motivation-und-emotion`
- Articles: `12`

Machine-readable registry view:

| order | id | slug | label | color | articles |
| --- | --- | --- | --- | --- | --- |
| 1 | `biological-psychology` | `biologische-psychologie` | `Biologische Psychologie` | `#98d4bb` | `01` |
| 2 | `perception-and-cognition` | `wahrnehmung-und-kognition` | `Wahrnehmung & Kognition` | `#c7b8ea` | `02, 03` |
| 3 | `learning-and-development` | `lernen-und-entwicklung` | `Lernen & Entwicklung` | `#f4b8c5` | `04, 06` |
| 4 | `differential-and-personality` | `differentielle-und-persoenlichkeitspsychologie` | `Differentielle & Persoenlichkeitspsychologie` | `#a8d8ea` | `05, 08` |
| 5 | `social-psychology` | `sozialpsychologie` | `Sozialpsychologie` | `#b7d7f5` | `07` |
| 6 | `research-methods` | `forschungsmethoden` | `Forschungsmethoden` | `#ffe6a7` | `09` |
| 7 | `statistics-and-psychometrics` | `statistik-und-psychometrie` | `Statistik & Psychometrie` | `#f2c6a0` | `10, 11` |
| 8 | `motivation-and-emotion` | `motivation-und-emotion` | `Motivation & Emotion` | `#d4a8a8` | `12` |

Navigation invariants:
- Each article resolves to one canonical navigation category.
- Tabs map 1:1 to categories.
- A category page lists all articles in that category.
- Article pages use category label/color context.

---

## 5. What a “Page” Means in the Current App

There are two page concepts:

1. Category page
- A route-level browsing page
- Lists article cards
- Uses category label, color, description
- File: `app/src/pages/CategoryPage.tsx`

2. Article page
- A content page
- Backed by exactly one JSON document in `app/src/content/articles/`
- Rendered generically by `ArticleRenderer`
- File pair:
  - `app/src/pages/SubjectPage.tsx`
  - `app/src/components/content/ArticleRenderer.tsx`

When the user says “create a page”, you must clarify internally whether they mean:
- create a new article JSON document, or
- create or change category-level browsing/navigation behavior

In most content-authoring contexts, “create a page” means:
- create a new article JSON document

---

## 6. Supported Content Surface: All Elements and Tags That Currently Exist

This section is the no-loss baseline. It documents all content-bearing structures currently exercised by the active implementation and/or current legacy inputs.

### 6.1 Top-Level Article Structure

Every canonical article document currently contains:
- `schemaVersion`
- `id`
- `slug`
- `legacy`
- `meta`
- `taxonomy`
- `crm`
- `sections`
- `sources`
- `relatedResources`

### 6.2 Section Types Used on Real Pages

All legacy and current page content maps into these section types:
- `lead`
- `definition`
- `explanation`
- `visual`
- `deep_dive`
- `example`
- `summary`

These are the only section types currently required to preserve all existing page content.

### 6.3 Entry Types Used Within Text Sections

Non-visual sections contain entry arrays using:
- `subheading`
- `paragraph`
- `bullet_list`

This covers all currently used text layout patterns on the active pages.

### 6.4 Inline Annotation Types

Current schema supports:
- `definition`
- `citation`
- `highlight`

Currently exercised by legacy migration and active content:
- `definition`
- `citation`

Available but not yet common in the current article corpus:
- `highlight`

### 6.5 Legacy Tags and Their Migration Meaning

Current legacy YAML and/or legacy TS pages use these tag-bearing fields:
- `highlight_blue`
  - becomes `definition` annotations
- `highlight_red`
  - becomes `citation` annotations
- `tooltips`
  - provides tooltip text for definition annotations
- `sources_inline`
  - resolves inline red-highlight text to structured source IDs
- `svg_description`
  - becomes visual asset description
- `caption`
  - becomes visual caption
- `further_exploration`
  - becomes `relatedResources`

### 6.6 Visual Asset Types

Current runtime visual asset support:
- `asset.kind = "svg-component"`

Each visual section references:
- `assetId`
- optional `description`
- optional `alt`
- optional section-level `caption`

### 6.7 Source Types

Canonical source kinds supported in schema:
- `primary`
- `secondary`
- `review`
- `empirical`
- `manual`
- `standard`
- `other`

Observed legacy source types:
- `primary`
- `secondary`
- `review`
- `empirical`
- `manual`
- `standard`
- `standards`

Normalization rule:
- legacy `standards` must normalize to canonical `standard`

This mapping is important for no-loss migration because otherwise standards content silently degrades to `other`.

### 6.8 Source Verification Statuses

Schema supports:
- `verified`
- `legacy-imported`
- `pending-review`

Currently common in generated legacy migrations:
- `legacy-imported`

### 6.9 Related Resource Categories Already Seen

Observed categories used in content:
- `Forschung`
- `Buch`
- `Film`
- `Dokumentation`
- `Kunstwerk`

Important note:
- `relatedResources[].category` is currently a free-form string.
- If you add new categories here, the JSON schema allows it, but presentation may need explicit UI styling if the design should distinguish them visually.

---

## 7. Migration-Safe Coverage Statement

Current status:
- The normalized data model covers all legacy content block types currently used on pages.
- The active renderer covers all current normalized section and entry types.
- The main live preservation gap that previously existed was legacy source type `standards`, which should normalize to canonical `standard`.

No-loss migration requirements:
- Every legacy block type must map to a canonical section type.
- Every legacy inline emphasis/tooltip/source mechanism must become a structured annotation.
- Every legacy visual must preserve:
  - visual position
  - asset identity
  - description
  - caption
- Every legacy source must preserve:
  - citation text
  - inferred short citation
  - URL or DOI when recoverable
  - source kind
- Every related resource must preserve:
  - category
  - title
  - relevance
  - url

If a new legacy tag is discovered in former versions:
- do not discard it
- add schema or migration support first
- document its canonical mapping

---

## 8. Recommended Page Creation Workflows

There are two supported creation workflows.

### Workflow A: Direct JSON Authoring

Recommended when:
- creating a new canonical article
- editing existing runtime content directly
- no legacy YAML source is needed

Steps:
1. Choose or create the article file:
   - `app/src/content/articles/thema-XX.json`
2. Use the canonical schema in `app/src/content/schema.ts`
3. Ensure the article’s category resolves in `app/src/content/taxonomy.ts`
4. If visual sections are used:
   - add or reuse an SVG component
   - register its `assetId` in `app/src/components/svgs/articleIllustrations.tsx`
5. Run:
   - `npm run content:validate`
   - `npm run build`

### Workflow B: Legacy YAML Migration

Recommended when:
- the source material already exists in `content/thema-*.yml`
- you are recovering former-version content before normalizing it

Steps:
1. Edit or add `content/thema-XX.yml`
2. Dry-run the migration:

```bash
npm run content:migrate:dry
```

3. Write the migrated JSON:

```bash
npm run content:migrate
```

4. Validate:

```bash
npm run content:validate
npm run build
```

Rule:
- Do not manually patch generated JSON blindly after a migration without understanding whether the migration logic itself should be improved.

---

## 9. Canonical JSON File Naming and Identity Rules

File path:
- `app/src/content/articles/thema-XX.json`

Identity rules:
- `id` must be two digits, for example `03`
- `slug` must match `thema-03`
- filename must match slug
- `meta.tabNumber` must remain stable and unique

If adding a new article:
- keep numbering deterministic
- do not reuse an existing number
- ensure category assignment is intentional

---

## 10. Precise JSON Field Reference

This section explains each top-level field precisely.

### 10.1 `schemaVersion`

Type:
- string literal

Purpose:
- identifies the canonical schema version used to validate the article

Rules:
- must match `ARTICLE_SCHEMA_VERSION`
- do not invent ad hoc versions inside content files

### 10.2 `id`

Type:
- two-digit string

Purpose:
- stable article identity for routes and asset naming

Examples:
- `01`
- `12`

### 10.3 `slug`

Type:
- `thema-XX`

Purpose:
- stable content slug aligned with file naming

### 10.4 `legacy`

Fields:
- `sourceFormat`
- `sourcePath`

Purpose:
- provenance metadata for migration/auditing

Typical values:
- `yaml-v1`
- `ts-v1`

### 10.5 `meta`

Fields:
- `title`
- `discipline`
- `difficulty`
- `tabColor`
- `tabNumber`
- `estimatedReadMinutes`
- `leadTeaser`

Meaning:
- `title`: article title shown in cards and page header
- `discipline`: human-readable discipline label; currently still present for compatibility
- `difficulty`: intended difficulty label
- `tabColor`: display accent color; currently retained for compatibility, but category color is the intended long-term authority
- `tabNumber`: ordering integer
- `estimatedReadMinutes`: positive integer reading time
- `leadTeaser`: short teaser used in cards/overview

### 10.6 `taxonomy`

Current fields:
- `categoryId`
- `keywords`
- `audience`

Current practical rule:
- navigation uses exactly one canonical category per article
- canonical JSON now stores the final single-category shape directly

Authoring rule:
- `categoryId` must resolve to the intended canonical category
- do not reintroduce multi-category article membership in stored JSON

### 10.7 `crm`

Fields:
- `system`
- `externalId`
- `recordType`
- `pipelineStage`
- `cacheTags`
- `syncEnabled`
- `metadata.taxonomyPath`
- `metadata.audience`
- `metadata.keywords`

Purpose:
- stable integration boundary for future backend or CRM sync

Rules:
- keep `externalId` unique
- ensure cache tags include article slug and category identity

### 10.8 `sections`

Type:
- ordered array of section objects

Purpose:
- actual page body content

Valid section `type` values:
- `lead`
- `definition`
- `explanation`
- `visual`
- `deep_dive`
- `example`
- `summary`

### 10.9 `sources`

Type:
- array of structured citations

Purpose:
- canonical source list for inline citation annotations and source rendering

Required fields:
- `id`
- `kind`
- `shortCitation`
- `apaCitation`
- `verification`

Optional:
- `tooltip`
- `url`
- `doi`

### 10.10 `relatedResources`

Type:
- array

Purpose:
- curated follow-up material after the main article

Required fields:
- `id`
- `category`
- `title`
- `relevance`
- `url`

---

## 11. Section and Entry Reference

### 11.1 Text Sections

The following section types use `entries`:
- `lead`
- `definition`
- `explanation`
- `deep_dive`
- `example`
- `summary`

Valid entry kinds:

1. `subheading`
- simple text heading inside the section

2. `paragraph`
- rich text object with inline annotations

3. `bullet_list`
- list of rich text items

### 11.2 Visual Sections

Visual sections use:
- `asset.kind`
- `asset.assetId`
- optional `asset.description`
- optional `asset.alt`
- optional `caption`

Use a visual section when:
- the adjacent concept truly depends on a diagram
- the image is explanatory, not decorative

Do not use a visual section when:
- the image is just ornamental
- the image duplicates obvious text with no added learning value

---

## 12. Annotation Reference

### 12.1 `definition`

Purpose:
- explanatory highlight with tooltip

Use for:
- terminology
- concept definitions
- short clarifications

### 12.2 `citation`

Purpose:
- source-backed inline highlight

Use for:
- claims tied to one or more structured sources

Requirements:
- `sourceIds` must reference real source entries in the article

### 12.3 `highlight`

Purpose:
- custom visual emphasis with explicit colors

Use sparingly:
- only when the default definition/citation patterns are insufficient

---

## 13. Source Reference

Recommended source authoring rules:
- always provide full APA citation text
- provide a stable `shortCitation`
- provide URL when available
- preserve DOI when detectable
- use the most accurate canonical `kind`

Canonical `kind` guidance:
- `primary`: original source material or foundational primary text
- `secondary`: explanatory or summarizing secondary source
- `review`: review article or high-level synthesis
- `empirical`: empirical study
- `manual`: manual or instructional handbook
- `standard`: formal standard or standards document
- `other`: only use when none of the above fits

Important migration rule:
- if legacy data says `standards`, canonicalize to `standard`

---

## 14. Related Resource Reference

Use `relatedResources` for high-value follow-up items only.

Observed real categories:
- `Forschung`
- `Buch`
- `Film`
- `Dokumentation`
- `Kunstwerk`

Guidance:
- category should describe the type of follow-up resource
- title should be human-readable and specific
- relevance should explain why the user should care
- url must be valid

---

## 15. Visual Asset Authoring and Fetching Rules

### 15.1 Canonical Runtime Model

Current runtime visuals are React SVG components registered in:
- `app/src/components/svgs/articleIllustrations.tsx`

The registry maps `assetId` to a React SVG component.

Examples:
- `01-visual-1`
- `11-visual-2`

### 15.2 What Must Be Preserved When Fetching From Former Versions

When recovering a visual from a former version, preserve:
- conceptual intent
- article association
- visual order
- caption meaning
- explanatory description
- accessibility text

Do not preserve blindly:
- unused wrapper markup
- obsolete component names
- route-specific legacy coupling
- whole page imports if only one SVG is needed

### 15.3 Former-Version Asset Fetching Workflow

Use this workflow instead of copying entire pages:

1. Identify the source visual:
- recovered page component
- recovered `SubjectXXSVGs.tsx`
- archived tree under `psyc/`

2. Determine whether the asset already exists in the canonical registry.

3. If missing:
- extract only the SVG component
- place or adapt it in `app/src/components/svgs/`
- register it in `articleIllustrations.tsx`

4. Reference it from the article JSON using a visual section.

5. Add or preserve:
- `asset.description`
- `asset.alt`
- `caption`

### 15.4 Illustration Style Rules Merged From Historical Guidance

Derived from `_guidance_zip/illustration_guide.md`:
- Inline SVG, not remote image fetch
- Transparent or paper-style background
- Dark line-art style
- No decorative illustrations
- Each SVG must correspond to a nearby concept
- Prefer:
  - anatomical cross-sections for biological topics
  - flow charts for processes
  - matrices/grids for factor models
  - geometric figures for perception topics

Accessibility:
- include meaningful title/description semantics in the SVG component where appropriate
- captions should explain the takeaway, not merely describe the picture

---

## 16. Legacy-to-Canonical Mapping Table

Legacy source field -> Canonical destination:

- `subject_meta.title` -> `meta.title`
- `subject_meta.discipline` -> `meta.discipline`
- `subject_meta.difficulty` -> `meta.difficulty`
- `subject_meta.tab_color` -> `meta.tabColor` (compatibility field)
- `subject_meta.tab_number` -> `meta.tabNumber`
- `content_blocks[]` -> `sections[]`
- `content_blocks[].type = lead` -> `sections[].type = lead`
- `content_blocks[].type = definition` -> `sections[].type = definition`
- `content_blocks[].type = explanation` -> `sections[].type = explanation`
- `content_blocks[].type = visual` -> `sections[].type = visual`
- `content_blocks[].type = deep_dive` -> `sections[].type = deep_dive`
- `content_blocks[].type = example` -> `sections[].type = example`
- `content_blocks[].type = summary` -> `sections[].type = summary`
- `highlight_blue` + `tooltips` -> `definition` annotations
- `highlight_red` + `sources_inline` -> `citation` annotations
- `svg_description` -> `asset.description`
- `caption` -> `caption`
- `sources[]` -> `sources[]`
- `further_exploration[]` -> `relatedResources[]`

This is the preservation baseline. If a legacy structure cannot be mapped here, the migration is incomplete.

---

## 17. Precise JSON Example

The following example is intentionally complete. It is not the only valid article shape, but it demonstrates the major structures and recommended conventions.

```json
{
  "schemaVersion": "2.0.0",
  "id": "13",
  "slug": "thema-13",
  "legacy": {
    "sourceFormat": "yaml-v1",
    "sourcePath": "content/thema-13.yml"
  },
  "meta": {
    "title": "Beispielthema",
    "discipline": "Psychologie",
    "difficulty": "Grundlagen",
    "tabColor": "#c7b8ea",
    "tabNumber": 13,
    "estimatedReadMinutes": 8,
    "leadTeaser": "Kurze, klare Einfuehrung in das Thema mit Fokus auf Verstaendlichkeit."
  },
  "taxonomy": {
    "categoryId": "perception-and-cognition",
    "keywords": ["wahrnehmung", "kognition", "modell"],
    "audience": ["erstsemester", "adhs-freundlich", "selbststudium"]
  },
  "crm": {
    "system": "content-hub",
    "externalId": "thema-13",
    "recordType": "knowledge-article",
    "pipelineStage": "published",
    "cacheTags": ["thema-13", "perception-and-cognition"],
    "syncEnabled": false,
    "metadata": {
      "taxonomyPath": ["Wahrnehmung & Kognition"],
      "audience": ["erstsemester", "adhs-freundlich", "selbststudium"],
      "keywords": ["wahrnehmung", "kognition", "modell"]
    }
  },
  "sections": [
    {
      "id": "13-lead-1",
      "type": "lead",
      "title": "Einstieg",
      "entries": [
        {
          "kind": "paragraph",
          "content": {
            "text": "Das Beispielthema erklaert einen zentralen Mechanismus der Kognition.",
            "annotations": [
              {
                "id": "13-lead-1-def-1",
                "kind": "definition",
                "text": "Kognition",
                "tooltip": "Kognition bezeichnet mentale Prozesse wie Denken, Erinnern und Problemlösen.",
                "tone": "blue"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "13-definition-1",
      "type": "definition",
      "entries": [
        {
          "kind": "subheading",
          "text": "Kerndefinition"
        },
        {
          "kind": "paragraph",
          "content": {
            "text": "Ein Modell beschreibt vereinfacht, wie Informationen verarbeitet werden.",
            "annotations": []
          }
        }
      ]
    },
    {
      "id": "13-explanation-1",
      "type": "explanation",
      "entries": [
        {
          "kind": "paragraph",
          "content": {
            "text": "Studien zeigen, dass Aufmerksamkeit und Vorwissen die Interpretation von Reizen beeinflussen.",
            "annotations": [
              {
                "id": "13-explanation-1-src-1",
                "kind": "citation",
                "text": "Aufmerksamkeit",
                "tooltip": "Musterautor (2024)",
                "tone": "red",
                "sourceIds": ["13-source-1"]
              }
            ]
          }
        }
      ]
    },
    {
      "id": "13-visual-1",
      "type": "visual",
      "title": "Schema",
      "asset": {
        "kind": "svg-component",
        "assetId": "13-visual-1",
        "description": "Diagramm eines vereinfachten Verarbeitungsmodells.",
        "alt": "Schema der Informationsverarbeitung"
      },
      "caption": "Das Diagramm zeigt, wie Reize gefiltert, interpretiert und in Verhalten uebersetzt werden."
    },
    {
      "id": "13-deep-dive-1",
      "type": "deep_dive",
      "entries": [
        {
          "kind": "paragraph",
          "content": {
            "text": "Im Detail unterscheiden sich konkurrierende Modelle vor allem in der Rolle top-down gesteuerter Prozesse.",
            "annotations": []
          }
        }
      ]
    },
    {
      "id": "13-example-1",
      "type": "example",
      "entries": [
        {
          "kind": "paragraph",
          "content": {
            "text": "Ein alltagsnahes Beispiel ist das selektive Hören in einer lauten Umgebung.",
            "annotations": []
          }
        }
      ]
    },
    {
      "id": "13-summary-1",
      "type": "summary",
      "entries": [
        {
          "kind": "bullet_list",
          "items": [
            {
              "text": "Modelle reduzieren Komplexitaet.",
              "annotations": []
            },
            {
              "text": "Aufmerksamkeit beeinflusst Wahrnehmung.",
              "annotations": []
            }
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "id": "13-source-1",
      "kind": "review",
      "shortCitation": "Musterautor (2024)",
      "apaCitation": "Musterautor, A. (2024). Beispielhafte Uebersichtsarbeit.",
      "tooltip": "Verwendet als Uebersicht fuer die Kernargumentation.",
      "url": "https://example.org/review",
      "verification": {
        "status": "pending-review",
        "checkedAgainst": ["draft-source-list"]
      }
    }
  ],
  "relatedResources": [
    {
      "id": "13-resource-1",
      "category": "Forschung",
      "title": "Vertiefender Ueberblick",
      "relevance": "Erweitert die Kernidee mit weiteren empirischen Perspektiven.",
      "url": "https://example.org/resource"
    }
  ]
}
```

---

## 18. Authoring Checklist for New JSON Pages

Before saving a new article:
- choose a unique `id`
- match filename, `id`, and `slug`
- assign the correct category
- keep `leadTeaser` concise and informative
- ensure each `citation` annotation references real `sourceIds`
- ensure each `visual` section references a registered `assetId`
- ensure `estimatedReadMinutes` is realistic
- ensure `cacheTags` include slug and category

Before review:
- run `npm run content:validate`
- run `npm run build`

Before merge:
- ensure the article appears in the intended category page
- verify card color/label match category
- confirm article breadcrumb shows category correctly

---

## 19. Selective Extraction (“Cherry-Picking”) From Former Versions

In this repository, “cherry-picking” should be understood as:
- selective extraction of content, visuals, or small implementation fragments from former versions
- not Git cherry-pick of random snapshots
- not wholesale copying of old app trees into `app/`

### 19.1 Approved Selective Extraction Sources

Content and historical structure:
- `psyc/.../PsychoLexikon/`
- `psyc/.../psycholex-v3/`

Visual assets:
- `psyc/.../src/components/svgs/`
- recovered per-subject page components containing inline SVG usage

Historical plans and guidance:
- `psyc/.../plan.md`
- `psyc/RECOVERY_INTEGRATION_AUDIT.md`

### 19.2 Prohibited Recovery Moves

Do not:
- copy `psycholex-dist/` or `psycholex-deploy/` JS/CSS into runtime code
- promote a recovered duplicate app to canonical status without explicit approval
- restore page-per-topic routing for new content work
- copy obsolete configs wholesale

### 19.3 Safe Selective Extraction Procedure

1. Identify the exact artifact:
- text
- SVG
- layout idea
- metadata
- citation

2. Check whether a canonical equivalent already exists in `app/`.

3. If extracting text or structure:
- convert it into canonical JSON sections/entries/annotations

4. If extracting an SVG:
- isolate the component
- register it in the illustration registry
- reference by `assetId`

5. If extracting source material:
- convert the source type into canonical `kind`
- preserve URL/DOI and verification status appropriately

6. Validate and document what was adopted.

---

## 20. Former-Version Asset Fetching Protocol

When recovering visuals from former versions:

Source search order:
1. `app/src/components/svgs/`
2. `psyc/.../PsychoLexikon/src/components/svgs/`
3. `psyc/.../psycholex-v3/src/components/svgs/`
4. legacy page components containing inline-rendered diagrams

Decision rules:
- If the asset already exists canonically, reuse it.
- If the asset exists only in a recovered tree, extract only the SVG component.
- If the same visual exists in multiple recovered trees, prefer the variant closest to the current `app/` style and naming conventions.

Required post-fetch steps:
- ensure `assetId` matches the article/visual order
- update `articleIllustrations.tsx`
- ensure caption and description survive
- confirm the image is explanatory, not decorative

---

## 21. Runtime Commands

Run inside `app/`.

Development server:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Validate content:

```bash
npm run content:validate
```

Dry-run legacy migration:

```bash
npm run content:migrate:dry
```

Write migrated JSON:

```bash
npm run content:migrate
```

Production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 22. Validation Expectations

Current validation covers:
- all generated articles validate against the canonical schema
- taxonomy/category references resolve
- citation annotations reference valid sources
- annotation terms exist in text
- CRM cache tags and external IDs remain stable
- navigation category count remains within the intended 6 to 8 range

Recommended manual QA after adding or migrating a page:
- open home page
- open the article card
- open the article’s category page
- confirm breadcrumb path
- confirm source links
- confirm visual rendering
- confirm no category/tab mismatch

---

## 23. Documentation Merge Provenance

This guide consolidates the actionable content of:
- `README.md`
- `info.md`
- `app/README.md`
- `app/info.md`
- `psyc/RECOVERY_INTEGRATION_AUDIT.md`
- `psyc/Kimi_Agent_PsychoLexikon Deployment Strategy Guide(2)/plan.md`
- `_guidance_zip/illustration_guide.md`

How each source is represented here:
- app architecture and migration flow:
  - `app/README.md`
  - `app/info.md`
- canonical/non-canonical project boundaries:
  - `README.md`
  - `info.md`
  - `psyc/RECOVERY_INTEGRATION_AUDIT.md`
- recovery and former-version extraction rules:
  - `psyc/RECOVERY_INTEGRATION_AUDIT.md`
  - `psyc/.../plan.md`
- SVG/illustration handling:
  - `_guidance_zip/illustration_guide.md`

---

## 24. No-Loss Migration Checklist

Use this before closing any migration or recovery task.

Content preservation:
- all legacy blocks mapped
- all subheadings preserved
- all paragraphs preserved
- all summary bullets preserved

Annotation preservation:
- all blue highlights mapped to definitions where applicable
- all red highlights mapped to citations where applicable
- all tooltip text preserved
- all inline source references resolved

Visual preservation:
- all visuals preserved or intentionally rejected with rationale
- all captions preserved
- all descriptions preserved
- all asset IDs registered

Source preservation:
- all source entries migrated
- `standards` normalized to `standard`
- DOI or URL preserved when available
- verification status assigned

Resource preservation:
- all related resources migrated
- category, title, relevance, and URL preserved

Navigation preservation:
- category assignment correct
- article reachable from category page
- article breadcrumb correct
- category tab behavior correct

Build preservation:
- `npm run content:validate` passes
- `npm run build` passes

---

## 25. Final Operating Guidance

If you are creating a new page:
- create or edit canonical JSON
- use the schema and category registry
- register any visual assets properly
- validate before asking for review

If you are migrating a page:
- preserve every currently used element and tag
- improve the migration logic if data would otherwise be lost
- never silently downgrade semantics

If you are recovering from former versions:
- extract surgically
- do not merge whole apps
- use former versions as evidence and source material, not as replacement architecture

If in doubt:
- `app/` is canonical
- JSON is canonical runtime content
- former versions are recovery inputs only
