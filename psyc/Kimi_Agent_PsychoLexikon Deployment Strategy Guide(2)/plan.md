# PsychoLexikon — Full Execution Plan

## Objective
Clone, execute, and enhance the PsychoLexikon repository per the attached roadmap documentation, applying best real-world decisions for production-quality deployment.

## Project Overview
- German-language psychology learning portal for first-year university students
- ADHD-friendly design with warm paper aesthetic
- React 19 + Vite + TypeScript + Tailwind CSS + shadcn/ui
- 12 subject articles with YAML content, inline SVGs, tooltips, citations
- HashRouter for static hosting compatibility

## Strategy
The roadmap contains 62+ tasks across 9 categories. The #1 blocker is the per-subject TSX architecture — this must be fixed first to enable scaling. We execute in prioritized phases.

## Execution Stages

### Stage 1: Project Setup & Baseline Build
- Set up project at `/mnt/agents/output/PsychoLexikon/`
- Install dependencies and build the existing app as-is
- Verify it compiles and runs

### Stage 2: Core Architecture Transformation (P0 — Critical Path)
Per the roadmap Part 4, implement the YAML-first content pipeline:
- **2A: Vite Plugin** — Build a Vite plugin that loads content/thema-*.yml at build time
- **2B: Zod Schema** — Define complete content schema with all block types
- **2C: BlockRenderer** — Create generic block renderer components for all block types (lead, definition, explanation, visual, deep_dive, example, summary, sources)
- **2D: SVG Lazy Loading** — Implement dynamic SVG component imports
- **2E: Generic SubjectPage** — Replace hardcoded SubjectPage.tsx with YAML-driven renderer
- **2F: Content Migration** — Convert YAML files to enhanced format, remove subjects.ts dependency

### Stage 3: UI/UX & Navigation Improvements (P0-P1)
- **3A: Navigation** — Table of Contents sidebar, back-to-top button, prev/next navigation, breadcrumbs
- **3B: Tooltip System** — Viewport overflow detection, touch/mobile support, persistent state
- **3C: Accessibility** — Skip links, keyboard shortcuts, focus indicators, ARIA landmarks

### Stage 4: Feature Enhancements (P1)
- **4A: Search** — Fuse.js client-side search indexing all content
- **4B: Quiz System** — Quiz block type with generic QuizWidget
- **4C: Bookmarking** — localStorage-based favorites system
- **4D: Focus Mode** — Distraction-free reading toggle

### Stage 5: Polish & Deploy (P2-P3)
- Reading progress indicator, print styles, reading time display
- Dark mode support
- Build optimization, bundle analysis
- Deploy to production

## Agent Allocation
- **Stage 1**: Main agent (setup + baseline)
- **Stage 2**: Multi-agent (parallel: 2A+2B schema/plugin, 2C block components, 2D+2E+2F migration)
- **Stage 3**: Multi-agent (parallel: 3A nav, 3B tooltips, 3C a11y)
- **Stage 4**: Multi-agent (parallel: 4A search, 4B quiz, 4C bookmarks, 4D focus)
- **Stage 5**: Main agent (polish + deploy)

## Key Decisions
- Use the existing app/ directory as the live version (delete app_archive, app_new, project, project2)
- Keep HashRouter for static hosting compatibility
- Maintain warm paper aesthetic (#f8f6f1) as the design identity
- All content stays in German (content language)
- Use Zod v4 (already in dependencies) for schema validation
- Use Framer Motion (already in deps) for animations
- Use next-themes (already in deps) for dark mode
- Use Fuse.js for search (lightweight, client-side)
