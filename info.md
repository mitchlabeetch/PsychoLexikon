# PsychoLexicon — Psychologie-Lernplattform

Ein interaktives, wissenschaftlich fundiertes Lernportal für das erste Psychologie-Studienjahr.

## Projektübersicht

**PsychoLexicon** (ehemals PsychoLexikon/PSYCHLERN) präsentiert 12 Kernthemen des Bachelor-Studiums Psychologie in einem ADHS-freundlichen, notebook-inspirierten Design.

## Design-Philosophie

### Notebook-Ästhetik
- **Kontinuierliche Ringbuchlöcher**: Dynamisch generiert alle 220px entlang der gesamten Seitenlänge
- **Kategorische Navigation**: Sticky Tabs auf der rechten Seite verlinken zu Themenkategorien
- **Papier-Textur**: Warme Cream-Töne und subtile Verläufe

### ADHS-freundliche Didaktik
- Chunking: Inhalte in überschaubare, visuell klar abgegrenzte Einheiten
- Dual Coding: Jedes konzeptuelle Element mit visuellem Schema/Illustration
- Progressive Disclosure: Vom Konkreten zum Abstrakten
- Interaktive Tooltips für Definitionen (blau) und Quellen (rot)

### Wissenschaftliche Akkuratheit
- Alle Inhalte basieren auf Metaanalysen, seminale Werke und hochzitierter Literatur
- APA-7 Zitierweise durchgängig
- Unterscheidung zwischen etabliertem Wissen, kontroversen Positionen und aktuellen Revisionen
- Methodische Kontextualisierung: Woher wissen wir das?

## Technische Architektur

### Frontend-Stack
- React 19.2 + TypeScript
- Vite 7.3 als Build-Tool
- Tailwind CSS 3.4 für Styling
- Framer Motion für Animationen
- React Router 7 für Navigation

### Content-Management
- YAML-basierte Content-Dateien (content/thema-01.yml bis thema-12.yml)
- Strukturierte Datenmodelle für konsistente Darstellung
- Inline-SVG-Illustrationen für wissenschaftliche Diagramme

### Design-System
- **Farben**: Warm-Cream-Hintergrund (#FAF7F0), Schwarz für Text (#1A1A1A)
- **Typografie**:
  - Display: Bodoni Moda (Überschriften, wissenschaftlicher Charakter)
  - Body: DM Sans (Lesetext, optimale Lesbarkeit)
- **Kategoriefarben**:
  - Bio/Neuro: #98d4bb (Mint)
  - Gedächtnis: #c7b8ea (Lavendel)
  - Lernen/Entw.: #f4b8c5 (Rosa)
  - Persönlichkeit: #a8d8ea (Hellblau)
  - Methoden: #ffe6a7 (Gelb)
  - Motivation: #d4a8a8 (Mauve)

## 12 Kernthemen

1. **Aktionspotential & Synaptische Transmission** — Biologische Psychologie
2. **Gestaltgesetze & Prägnanzprinzip** — Wahrnehmungspsychologie
3. **Arbeitsgedächtnis nach Baddeley** — Gedächtnis & Kognition
4. **Klassische & Operante Konditionierung** — Lernpsychologie
5. **Berliner Intelligenzstrukturmodell (BIS)** — Differentielle Psychologie
6. **Kognitive Entwicklung nach Piaget** — Entwicklungspsychologie
7. **Attributionstheorie** — Sozialpsychologie
8. **Fünf-Faktoren-Modell (Big Five)** — Persönlichkeitspsychologie
9. **Experimentelle Versuchsplanung** — Methodenlehre
10. **Signifikanztestung & p-Werte** — Statistik
11. **Psychometrische Gütekriterien** — Diagnostik
12. **Theorien der Motivation & Emotion** — Motivationspsychologie

## Entwicklung

```bash
# Installation
npm install

# Entwicklungsserver
npm run dev

# Linting
npm run lint

# Build für Production
npm run build

# Preview des Builds
npm run preview
```

## Quellen & Referenzen

Alle Inhalte sind mit akademischen Quellen belegt:
- Metaanalysen und Reviews aus Top-Journals
- Seminale Originalarbeiten (z.B. Hodgkin & Huxley, 1952; Baddeley & Hitch, 1974)
- Aktuelle Lehrbücher (z.B. Bear et al., Neurowissenschaften; Bortz & Döring, Forschungsmethoden)
- Deutsche und englische Fachliteratur

DOI-Links werden wo verfügbar bereitgestellt.

## Lizenz

Dieses Projekt wurde für Bildungszwecke erstellt.
