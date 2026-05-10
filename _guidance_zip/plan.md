# PSYCHLERN — Build Plan

## Overview
Build a first-year German psychology bachelor study platform (PSYCHLERN) with 12 academically rigorous, ADHD-optimized subject pages, harmonized into a single cohesive notebook-tabs editorial website.

## Stage 1 — Deep Research (Orchestrator)
Load `deep-research-swarm` skill. Deploy research subagents to gather 2-3 high-quality academic sources per subject (36+ sources total). Define unified illustration style guide and shared style manifest.

Subjects to research:
1. Aktionspotential & Synaptische Transmission
2. Gestaltgesetze der Wahrnehmung & Prägnanzprinzip
3. Mehrkomponentenmodell des Arbeitsgedächtnisses (Baddeley)
4. Klassische und Operante Konditionierung
5. Berliner Intelligenzstrukturmodell (BIS, Jäger)
6. Kognitive Entwicklung nach Piaget
7. Attributionstheorie (Heider, Weiner)
8. Fünf-Faktoren-Modell (Big Five) & psychometrische Kritiken
9. Experimentelle Versuchsplanung (Interne/Externe Validität)
10. Signifikanztestung, p-Werte, Alpha-/Beta-Fehler
11. Psychometrische Gütekriterien (Objektivität, Reliabilität, Validität)
12. Theorien der Motivation und Emotion

## Stage 2 — Content Creation (Parallel Swarm)
Deploy 6 writer subagents simultaneously, each handling 2 subjects. Each receives:
- Researched sources from Stage 1
- Shared style manifest (ADHD formatting, APA 7th German, highlight system)
- Strict YAML output schema
- Design system constraints

Agents:
- Agent-01: Subjects 1-2
- Agent-02: Subjects 3-4
- Agent-03: Subjects 5-6
- Agent-04: Subjects 7-8
- Agent-05: Subjects 9-10
- Agent-06: Subjects 11-12

## Stage 3 — Webapp Building
Load `vibecoding-webapp-swarm` skill. Build the React + TypeScript + Vite + Tailwind application.

### Pages/Routes:
- `/` — Homepage with 12 subject cards
- `/thema/:id` — Individual subject pages (12 total)

### Design System:
- Notebook-tabs editorial aesthetic
- CSS variables for 6 color-coded tabs
- Bodoni Moda + DM Sans typography
- Inline SVG illustrations only
- Blue/red highlight tooltip system
- ADHD-optimized: ≤3-sentence paragraphs, subheadings every 150 words

### Technical Requirements:
- React + TypeScript + Vite
- Tailwind CSS + custom CSS vars
- React Router (wouter preferred if lightweight)
- Google Fonts (Bodoni Moda, DM Sans)
- Lucide React icons (zero emojis)
- Static SPA output in `dist/`
- All German text, UTF-8 umlauts

## Stage 4 — Integration & QA
- Content audit: German terminology consistency, APA formatting, no conflicting definitions
- Build verification: `npm run lint`, `npx tsc -b`, `npm run build` all pass
- Accessibility: WCAG 2.1 AA, keyboard-navigable, semantic HTML
- Responsive: mobile/tablet/desktop
- Deploy final static site

## Output
- Complete Vite React project at `/mnt/agents/output/psychlern/`
- Deployed static website
