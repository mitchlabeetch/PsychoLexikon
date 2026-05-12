# JSON Sublanguage Authoring Spec

Date: 2026-05-11

Purpose:
- Define the canonical JSON sublanguage for future user-authored pages.
- Keep authoring GUI-friendly while preserving every content element currently needed by recovered and canonical knowledge pages.
- Cover text, glossary terms, citations, inline annotations, images, SVGs, and internal or external related links.

Scope:
- Authoring drafts live in a richer page-composition format.
- Runtime articles may still be generated or curated from these drafts.
- The authoring sublanguage is defined in `app/src/content/authoringSchema.ts`.

## Files

Canonical schema files:
- `app/src/content/authoringSchema.ts`
- `app/src/content/schema.ts`

Recovered draft outputs:
- `app/src/content/recovered/analzy-authoring-drafts.json`
- `app/src/content/recovered/analzy-import-drafts.json`
- `app/src/content/recovered/analzy-pages/*.bundle.txt`

## Design Goals

The sublanguage is optimized for GUI authoring:
- human-readable blocks
- stable IDs for GUI editing and drag/drop
- first-class glossary terms
- first-class source list
- first-class image and SVG assets
- first-class internal and external links
- section-based composition compatible with the current article renderer

## Top-Level Shape

Each page draft uses this shape:

```json
{
  "schemaVersion": "1.0.0",
  "pageType": "knowledge-article-draft",
  "origin": {},
  "identity": {},
  "header": {},
  "glossary": [],
  "sources": [],
  "assets": [],
  "connections": [],
  "sections": [],
  "notes": {}
}
```

## Field Semantics

### `origin`

Tracks where the draft came from:
- `gui`
- `recovered-bundle`
- `legacy-yaml`
- `manual-import`

Useful fields:
- `sourcePath`
- `recoveredRoute`
- `snapshotPath`

### `identity`

Stable page identity:
- `articleId`
- `slug`

GUI rule:
- Treat `slug` as the durable editor slug.
- Treat `articleId` as optional when drafting future pages before final slot assignment.

### `header`

Page-level summary metadata:
- `title`
- `subtitle`
- `discipline`
- `difficulty`
- `categoryId`
- `keywords`
- `audience`
- `leadTeaser`
- `estimatedReadMinutes`

GUI rule:
- `title`, `categoryId`, and at least one `keyword` are required.
- `subtitle` is optional but strongly recommended.

### `glossary`

First-class definitions for tooltip-ready authoring:
- `id`
- `term`
- `label`
- `aliases`
- `definition`
- `sourceIds`

Use this whenever a concept needs reusable explanation in the GUI.

### `sources`

First-class bibliography items:
- `id`
- `rawCitation`
- `excerpt`
- `url`
- `doi`
- `notes`

GUI rule:
- The editor can let users create a source once and reuse its `id` across glossary items and annotations.

### `assets`

First-class visual/media registry for a page:
- `id`
- `title`
- `placement`
- `asset`
- `caption`
- `tags`

Supported asset kinds:
- `svg-component`
- `image-file`

`image-file` supports:
- `src`
- `alt`
- `description`
- `credit`
- `width`
- `height`

This is the main mechanism for user-uploaded page images.

### `connections`

First-class related links:
- `id`
- `category`
- `title`
- `description`
- `target`

Supported targets:
- `external-url`
- `internal-article`
- `internal-category`
- `internal-route`

This is the canonical way to represent:
- related concept pages
- category navigation
- internal app pathways
- external references

### `sections`

Page body composition.

Supported text section types:
- `lead`
- `definition`
- `explanation`
- `deep_dive`
- `example`
- `summary`

Supported visual section type:
- `visual`

`visual` supports:
- `assetIds`
- `layout`
- `caption`

Supported visual layouts:
- `single`
- `stack`
- `gallery`

This allows a GUI to support:
- one image
- multiple inline figures
- image groups or galleries

## Entry Types

Text sections use entry arrays:
- `subheading`
- `paragraph`
- `bullet_list`

These entries remain intentionally simple so a GUI can support them with:
- heading input
- rich text field
- repeatable bullet list editor

## Annotation Model

Inline text annotations remain part of the runtime-rich text language:
- `definition`
- `citation`
- `highlight`

Recommended GUI mapping:
- selected text -> attach glossary term
- selected text -> attach source reference
- selected text -> custom highlight

## Example Draft

```json
{
  "schemaVersion": "1.0.0",
  "pageType": "knowledge-article-draft",
  "origin": {
    "kind": "gui"
  },
  "identity": {
    "slug": "thema-13"
  },
  "header": {
    "title": "Selbstwirksamkeit nach Bandura",
    "subtitle": "Warum Erfolgserwartungen Verhalten steuern",
    "categoryId": "social-psychology",
    "keywords": ["selbstwirksamkeit", "bandura", "soziales lernen"],
    "audience": ["erstsemester", "selbststudium"],
    "leadTeaser": "Menschen handeln anders, wenn sie glauben, etwas schaffen zu koennen."
  },
  "glossary": [
    {
      "id": "13-glossary-1",
      "term": "Selbstwirksamkeit",
      "definition": "Die subjektive Ueberzeugung, eine Aufgabe erfolgreich bewaeltigen zu koennen.",
      "aliases": [],
      "sourceIds": ["13-source-1"]
    }
  ],
  "sources": [
    {
      "id": "13-source-1",
      "rawCitation": "Bandura, A. (1997). Self-efficacy: The exercise of control. Freeman."
    }
  ],
  "assets": [
    {
      "id": "13-asset-1",
      "title": "Selbstwirksamkeitszyklus",
      "placement": "hero",
      "asset": {
        "kind": "image-file",
        "src": "/uploads/selbstwirksamkeit-zyklus.png",
        "alt": "Diagramm zum Zyklus der Selbstwirksamkeit",
        "description": "Benutzerhochgeladenes Diagramm fuer die Seite"
      },
      "caption": "Erwartung, Handlung, Rueckmeldung und erneute Einschaetzung bilden einen Kreislauf.",
      "tags": ["diagramm", "selbstwirksamkeit"]
    }
  ],
  "connections": [
    {
      "id": "13-connection-1",
      "category": "verknuepfung",
      "title": "Sozialkognition",
      "target": {
        "kind": "internal-route",
        "path": "/sozialkognition"
      }
    }
  ],
  "sections": [
    {
      "id": "13-lead",
      "type": "lead",
      "entries": [
        {
          "kind": "paragraph",
          "content": {
            "text": "Menschen versuchen eher schwierige Aufgaben, wenn sie an ihre eigene Bewaeltigungsfaehigkeit glauben.",
            "annotations": []
          }
        }
      ]
    },
    {
      "id": "13-visuals",
      "type": "visual",
      "title": "Illustration",
      "assetIds": ["13-asset-1"],
      "layout": "single"
    }
  ]
}
```

## GUI Implementation Notes

Recommended editor panels:
- Header
- Glossary
- Sources
- Assets
- Connections
- Sections

Recommended GUI rules:
- assets are created once, then selected by `assetIds`
- connections are created once, then attached as related page links
- glossary terms are created once, then attached as inline annotations
- source IDs are created once, then attached to citations and glossary entries

## Recovered Analzy Mapping

The recovered `analzy` corpus now maps into this sublanguage:
- one authoring draft per recovered primary page
- all recovered images represented as first-class `assets`
- all recovered concept links represented as first-class `connections`
- recovered definitions represented in `glossary`
- recovered citations represented in `sources`
- recovered prose and headings represented in `sections`

This output is available in:
- `app/src/content/recovered/analzy-authoring-drafts.json`

## Runtime Compatibility

Runtime schema now also supports:
- `meta.subtitle`
- image visuals via `image-file`
- related resources with internal or external targets

This keeps future GUI-authored pages compatible with the active app architecture instead of forcing a return to hardcoded route components.
