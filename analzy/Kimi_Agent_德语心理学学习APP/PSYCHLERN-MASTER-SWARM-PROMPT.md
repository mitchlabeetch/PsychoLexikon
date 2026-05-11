# PSYCHLERN: Master-Swarm-Prompt -- ADHD-freundliche Lernplattform fuer Psychologie-Bachelor (Deutschland)

> **Dokumenttyp:** Einzelnes, autoritatives Swarm-Steuerdokument
> **Sprache der UI:** 100 % Deutsch (Hochdeutsch, DIN 5008 konform)
> **Zielplattform:** Lokale Desktop-Anwendung (Tauri v2 + React/TypeScript)
> **Datenspeicherung:** Lokale JSON-Dateistruktur (kein externer Server)
> **Authentifizierung:** Optionaler PIN-Zugang (user-aktivierbar)
> **Zielgruppe:** Erstsemester-Student*in Psychologie (B.Sc.) mit ADHS

---

## Inhaltsverzeichnis

1. [Architekturentscheidung und Begruendung](#1-architekturentscheidung)
2. [Agentic Swarm: Wellenstruktur und Agentenaufstellung](#2-swarm-wellenstruktur)
3. [Wave 0: Akademische Recherche-Agenten](#3-wave-0-recherche)
4. [Wave 1: Kernarchitektur und Datenmodell](#4-wave-1-kernarchitektur)
5. [Wave 2: Flashcard-Engine und Studi-Modi](#5-wave-2-flashcard-engine)
6. [Wave 3: Wissensbasis-Referenzsystem](#6-wave-3-wissensbasis)
7. [Wave 4: ADHS-optimiertes UI/UX](#7-wave-4-ui-ux)
8. [Wave 5: Onboarding, Tour und PIN-System](#8-wave-5-onboarding)
9. [Wave 6: Testabdeckung und Qualitaetssicherung](#9-wave-6-testing)
10. [Wave 7: Build, Packaging und Deployment](#10-wave-7-deployment)
11. [Akademische Fundierung: Quellen und Zitate](#11-akademische-fundierung)
12. [Deutsches Psychologie-Erstsemester-Curriculum](#12-erstsemester-curriculum)
13. [ADHS-Design-Prinzipien (Kernreferenz)](#13-adhs-design-prinzipien)
14. [Deutsche Typografie- und Sprachstandards](#14-typografie-standards)
15. [Erfolgskriterien und Abschluss-Checkliste](#15-erfolgskriterien)
16. [Anhang: Sub-Prompts fuer dedizierte Recherche-Agenten](#16-anhang-subprompts)

---

## 1. Architekturentscheidung und Begruendung {#1-architekturentscheidung}

### 1.1 Gewaehlte Architektur: Tauri v2 + React 18 + TypeScript + Tailwind CSS + lokales JSON-Backend

| Kriterium | Tauri v2 (2026) | Electron | PWA | Begruendung |
|---|---|---|---|---|
| Bundle-Groesse | ~3-10 MB | ~120-200 MB | N/A | Tauri: 20-50x kleiner |
| RAM-Idle | 20-80 MB | 100-300 MB | Browser-abhaengig | ADHS: Schneller Start |
| Cold-Start | 200-500 ms | 1-5 s | Netzwerk-abhaengig | Tauri: sub-second |
| Lokale Persistenz | Rust-FS + JSON | Node-FS + SQLite moeglich | IndexedDB (begrenzt) | JSON reicht fuer Karten |
| Offline-First | Nativ | Nativ | Service-Worker | Alle, Tauri am saubersten |
| Mobile (Zukunft) | iOS + Android (v2) | Nicht unterstuetzt | Responsive | Tauri: Option offen |
| Security-Modell | Rust Capabilities (deny-by-default) | Node.js full-access | Browser-Sandbox | Tauri: sicherer fuer lokale Daten |
| Multi-Plattform | Win/Mac/Linux | Win/Mac/Linux | Browser | Paritaet, Tauri kleiner |

**Entscheidung:** Tauri v2 mit React/TypeScript-Frontend. Die Anwendung laeuft 100 % lokal, ohne Cloud-Anbindung. Der Datenspeicher verwendet eine strukturierte JSON-Dateisammlung im App-Data-Verzeichnis (~/.local/share/psychlern/ auf Linux, %APPDATA%/psychlern/ auf Windows, ~/Library/Application Support/psychlern/ auf macOS).

### 1.2 Datenspeicherung: JSON-Dateistruktur statt SQLite

Begruendung: Fuer eine reine Karten- und Dokumentenanwendung ist SQLite over-engineered. JSON bietet:
- Menschenlesbare Daten (Student kann eigene Backups erstellen)
- Einfache Migration und Versionierung
- Keine Binary-Abhaengigkeit, kein Schema-Management
- Ausreichende Performance fuer <50.000 Karten (weit ueber Erstsemester-Bedarf)

**Dateistruktur:**
```
psychlern-data/
  ├── user/
  │   ├── settings.json          # Einstellungen, PIN-Hash, Theme
  │   ├── progress.json          # Gesamtfortschritt, Streaks
  │   └── sessions.jsonl         # Lernsitzungen (append-only)
  ├── decks/
  │   ├── user-decks.json        # Vom Nutzer erstellte Karten
  │   └── deck-index.json        # Metadaten aller Decks
  ├── wissensbasis/
  │   └── psychology-b1-ref.json # Referenz-Wissensbasis (vom System, read-only)
  ├── media/
  │   ├── images/                # Nutzer-hochgeladene Bilder
  │   └── audio/                 # Optional: Nutzer-aufgenommene Audio
  └── backups/
      └── auto/                  # Automatische taegliche Backups (rotierend, 7 Tage)
```

### 1.3 Technologie-Stack im Detail

```
Frontend:
  - React 18.3+ (StrictMode)
  - TypeScript 5.3+ (strict: true)
  - Tailwind CSS 3.4+ (Utility-First)
  - Framer Motion 11+ (Animationen -- subtile, ADHS-konforme Micro-Interactions)
  - shadcn/ui (Basis-UI-Komponenten -- anpassbar)
  - lucide-react (Icons -- konsistent, clean)
  - zustand (State-Management -- minimalistisch)

Backend (Tauri-Rust):
  - tauri::api::fs (Dateisystem-Operationen)
  - serde_json (Serialisierung)
  - chrono (Zeitstempel)
  - ring oder argon2 (PIN-Hashing)

Build/Packaging:
  - Vite 5+ (Bundler)
  - tauri-cli (Build und Packaging)
  - vitest (Unit-Tests)
  - playwright oder @testing-library/react (Integration-Tests)
  - MSIX-Installer (Windows), .dmg (macOS), .AppImage/.deb (Linux)
```

---

## 2. Agentic Swarm: Wellenstruktur und Agentenaufstellung {#2-swarm-wellenstruktur}

### 2.1 Ueberblick: 8 Wellen, 15+ Agenten

Die Entwicklung erfolgt in sequentiellen Wellen. Jede Wave ist eine abgeschlossene Phase mit definiertem Input (Vorwellen-Ergebnisse) und Output (lieferbare Artefakte). Wellen duerfen NICHT uebersprungen werden, aber innerhalb einer Wave koennen Agenten parallel arbeiten.

```
Welle 0: Akademische Recherche (2 dedizierte Agenten)
    |
    v
Welle 1: Kernarchitektur + Datenmodell (2 Agenten)
    |
    v
Welle 2: Flashcard-Engine + Studi-Modi (2 Agenten)
    |
    v
Welle 3: Wissensbasis-Referenzsystem (1 Agent)
    |
    v
Welle 4: ADHS-UI/UX + Animationssystem (2 Agenten)
    |
    v
Welle 5: Onboarding-Tour + PIN-System (1 Agent)
    |
    v
Welle 6: Testabdeckung + QA (2 Agenten)
    |
    v
Welle 7: Build + Packaging + Deployment-Vorbereitung (1 Agent)
    |
    v
FINAL: Gesamtsystem-Integration, End-to-End-Test, Acceptance
```

### 2.2 Agenten-Portraets

| Agent | Wave | Spezialisierung | Kernaufgabe |
|-------|------|-----------------|-------------|
| **AGENT-R1** | 0 | Recherche: Lernwissenschaft + Aufmerksamkeitsforschung | Meta-Analysen seit 2000 zu spaced repetition, working memory, multimedia learning, cognitive load theory recherchieren. Output: referenzierter Literaturbericht mit Zitationsdaten |
| **AGENT-R2** | 0 | Recherche: ADHS + digitale Lernwerkzeuge | Forschung zu ADHS-friendly UI/UX, digitale Interventionen, kognitive Belastung bei ADHS-Nutzern, Gamification fuer ADHS recherchieren. Output: evidenzbasierter Design-Guide |
| **AGENT-A1** | 1 | Tauri-Architekt + Rust-Entwickler | Tauri-v2-Projektsetup, Rust-Commands fuer Dateisystem, JSON-Schema-Validierung, Autoupdate-Konfiguration |
| **AGENT-A2** | 1 | Frontend-Architekt + Datenmodell | React/TypeScript-Projektstruktur, Zustand-Schema, JSON-Datenmodelle, TypeScript-Interfaces |
| **AGENT-F1** | 2 | Flashcard-Algorithmus-Entwickler | Leitner-Box-Implementation, adaptives Spaced-Repetition-Scheduling (basierend auf Reddy et al. 2016), Kartentypen-Engine |
| **AGENT-F2** | 2 | Studi-Modi-Entwickler | Drei spezialisierte Lernmodi: Paradigmen-Verstehen, Definitions-Repertoire, reines Merken (Daten/Namen) |
| **AGENT-W1** | 3 | Inhalt + Wissensbasis-Struktur | Referenz-Wissensbasis fuer erstes Studienjahr Psychologie (DE) strukturieren und anlegen. KEINE Vorseedung in Hauptkartei |
| **AGENT-U1** | 4 | ADHS-UX-Designer + UI-Entwickler | Komponenten-Bibliothek, Layout-System, Fokus-Modus, Animationskonzept, Farbsystem (NICHT infantilisierend) |
| **AGENT-U2** | 4 | Accessibility- + Animations-Spezialist | WCAG 2.2 AAA-Konformitaet, reduzierte Bewegung, Micro-Animations-System, Screen-Reader-Support |
| **AGENT-O1** | 5 | Onboarding- + PIN-System-Entwickler | Interaktive App-Tour, PIN-Setup- und Pruefflow, Tour-Deaktivierungsoption |
| **AGENT-T1** | 6 | Unit-Test-Entwickler | Vitest-Testabdeckung fuer alle Utilities, Algorithmen, Rust-Commands (Ziel: >90 %) |
| **AGENT-T2** | 6 | E2E- + Integrationstest-Entwickler | Playwright-E2E-Tests fuer kritische User Journeys, Snapshots fuer UI-Regressions |
| **AGENT-B1** | 7 | Build- + Packaging-Engineer | Tauri-Build fuer alle drei Plattformen, Installer-Erstellung, Codesigning-Setup, Auto-Update-Konfiguration |

### 2.3 Koordinationsprotokoll zwischen Agenten

1. **Jede Agent-Nachricht beginnt mit Statuszeile:** `[AGENT-XX][Wave N][Status: in_progress|blocked|completed]`
2. **Artefakte werden in `/mnt/agents/output/wave-N/` abgelegt** mit eindeutigem Dateinamen
3. **Blockierungen werden SOFORT eskaliert** an den Swarm-Koordinator (diese Prompt-Instanz)
4. **Kein Agent darf Code schreiben, bevor die vorherige Wave offiziell abgeschlossen ist**
5. **Deutsche Sprache ist verbindlich fuer alle UI-Strings** -- keine Ausnahmen, keine Fallbacks
6. **ADHS-Design-Prinzipien ueberschreiben generelle Best Practices** -- wenn in Konflikt, gewinnt die ADHS-Optimierung

---

## 3. Wave 0: Akademische Recherche-Agenten {#3-wave-0-recherche}

> **Kritisch:** Zwei dedizierte Agenten (AGENT-R1 und AGENT-R2) MUeSSEN zuerst aktiv werden und ihre Ergebnisse liefern, bevor eine einzige Zeile Anwendungscode geschrieben wird. Die Ergebnisse dieser Wave fliessen in ALLE nachfolgenden Wellen ein.

### 3.1 AGENT-R1: Lernwissenschaft + Aufmerksamkeitsforschung

**Auftrag:** Recherchiere ueber die Kimi Pro Data Feature (scholar data source) und das offene Internet die folgenden Themen und erstelle einen strukturierten Literaturbericht mit vollstaendigen Zitationsangaben:

**Recherchefelder:**

1. **Spaced Repetition Systeme (seit 2000):**
   - Leitner-System (Leitner 1972, digitale Adaptionen seit 2000)
   - SuperMemo-Algorithmus SM-2 bis SM-18 (Wozniak)
   - Anki-Algorithmus (Abwandlung von SM-2)
   - Optimale Scheduling-Algorithmen (Reddy et al. 2016 "Unbounded human learning")
   - Adaptive Sequencing (Whitmer et al. 2022)
   - Adaptive spaced education (Kerfoot 2010)

2. **Cognitive Load Theory + Multimedia Learning (seit 2000):**
   - Mayer & Moreno (2003) "Nine ways to reduce cognitive load in multimedia learning"
   - Schweppe & Rummer (2014) "Attention, working memory, and long-term memory in multimedia learning"
   - Anmarkrud et al. (2019) "Cognitive load and working memory in multimedia learning"
   - Lusk et al. (2009) "Multimedia learning and individual differences: Mediating the effects of working memory capacity with segmentation"
   - Mayer's Cognitive Theory of Multimedia Learning -- Coherence, Redundancy, Signaling, Spatial/Temporal Contiguity Principles

3. **Working Memory + Attention Mechanisms in Learning:**
   - Baddeley's multicomponent working memory model
   - Doolittle & Altstaedter (2009) "The effect of working memory capacity on multimedia learning"
   - Brunyé et al. (2006) "Learning procedures: The role of working memory in multimedia learning experiences"
   - Fenesi et al. (2016) "Split-attention and coherence principles in multimedia instruction can rescue performance for learners with lower working memory capacity"

4. **Active Recall + Flashcard-Design:**
   - Pham et al. (2016) "Card-based design combined with spaced repetition"
   - Colbran et al. (2018) "Comparing spaced repetition algorithms for legal digital flashcards"
   - Santhosh et al. (2024) RCT zur spaced repetition mit mobiler Flashcard-App
   - Die 20 Rules of Formulating Knowledge (Wozniak)

**Erwarteter Output:**
- Markdown-Dokument: `/mnt/agents/output/wave-0/R1-literaturbericht.md`
- Mind. 20 referenzierte Quellen mit vollstaendiger Zitation
- Design-Implikationen: konkrete Empfehlungen fuer die Flashcard-Engine
- Algorithmus-Empfehlung: welcher SR-Algorithmus fuer welchen Kartentyp optimal ist

### 3.2 AGENT-R2: ADHS + Digitale Lernwerkzeuge

**Auftrag:** Recherchiere evidenzbasierte Design-Patterns fuer digitale Lernwerkzeuge bei ADHS und erstelle einen Design-Guide.

**Recherchefelder:**

1. **ADHS + Digitale Lernwerkzeuge:**
   - Riaz et al. (2024) "Interaction Design Strategies for ADHD Learning Attention -- A Review"
   - Burbano & Alvarez (2023) "User Interface of Digital Platforms Used ADHD Patients"
   - Lewis & Brown (2012) "Individuals with ADHD and the Cognitive Processing of Multimedia"

2. **ADHS Neuroscience + Design-Implications:**
   - Working Memory bei ADHS: 3-5 Items statt 7+/-2 (Baddeley-Modell, angepasst)
   - Time Blindness: Warum konkrete Zeitangaben statt "bald" notwendig sind
   - Dopamin-Seeking: Immediate feedback, Gamification (aber NICHT hyperkompetitiv)
   - Object Permanence: "Out of sight = out of mind" -- Persistenz der Navigation
   - Rejection Sensitivity Dysphoria (RSD): Warum "shame design" (gebrochene Streaks etc.) vermieden werden muss

3. **ADHS-Friendly UI/UX Patterns:**
   - Kognitive Entlastung: One-action-per-screen, Wizard-Flows, Progressive Disclosure
   - Zeit-Konkretisierung: Countdown-Timer, Fortschrittsbalken mit %, "3 x 5min" statt "ca. 15min"
   - Celebration-System: Sofortiges Feedback, Milestones, verzeihende Streaks
   - Sichtbarer Zustand: Keine versteckten Menus, persistente Navigation, Thumbnails statt Textlisten
   - Forgiveness: Undo, flexible Ziele, Progress-over-Perfection

4. **Gamification fuer ADHS (kritisch):**
   - Gamification STIMULIERT hyperkompetitives Verhalten bei ADHS -- Quellen und Gegenmassnahmen recherchieren
   - Best Practices: Interne Motivation foerdern, keine Leaderboards, keine oeffentliche Scham

5. **Zugaenglichkeits-Standards:**
   - WCAG 2.2 AA/AAA Kriterien fuer kognitive Zugaenglichkeit
   - Reduced Motion (prefers-reduced-motion)
   - Fokus-Modi, Lesemodi

**Erwarteter Output:**
- Markdown-Dokument: `/mnt/agents/output/wave-0/R2-adhs-design-guide.md`
- Evidenzbasierter Design-Guide mit konkreten Zahlen (z.B. optimale Sitzungslaenge fuer ADHS)
- Tabellarische "Challenge -> Design Solution"-Uebersicht
- Liste von Anti-Patterns (was bei ADHS NICHT funktioniert)
- Empfohlene Animationsparameter (Dauer, easing, maximal zulaessige Bewegung)

---

## 4. Wave 1: Kernarchitektur und Datenmodell {#4-wave-1-kernarchitektur}

> **Input:** Wave-0-Rechercheberichte. **Output:** Lauffaehiges Tauri-v2-Projektgeruest mit TypeScript-Interfaces und lokalem JSON-Storage-Layer.

### 4.1 AGENT-A1: Tauri-Backend + Dateisystem-Layer

**Auftraege:**

1. **Projekt-Initialisierung:**
   ```bash
   npm create tauri-app@latest psychlern -- --template react-ts
   cd psychlern
   ```
   - Tauri v2 konfigurieren (tauri.conf.json)
   - Window-Config: Groesse 1280x800, min 1024x640, center, resizable

2. **Rust-Commands erstellen:**
   - `read_json_file(path: String) -> Result<JsonValue, String>`
   - `write_json_file(path: String, data: JsonValue) -> Result<(), String>`
   - `ensure_dir(path: String) -> Result<(), String>`
   - `list_files(dir: String) -> Result<Vec<String>, String>`
   - `backup_data() -> Result<String, String>` -- Rotierendes Backup (7 Tage)

3. **JSON-Storage-Manager:**
   - Datenverzeichnis bei App-Start erstellen (wenn nicht vorhanden)
   - Atomare Schreiboperationen (Temp-File + Rename)
   - Schema-Versionierung in jeder JSON-Datei (`_schema_version: 1`)

4. **Auto-Backup-System:**
   - Taegliches Backup beim App-Start (wenn letztes Backup >24h)
   - Rotierend: max. 7 Backup-Sets
   - Backups im Verzeichnis `backups/auto/backup-YYYY-MM-DD/`

5. **Sicherheit:**
   - Tauri-Capabilities: NUR `fs:read-app-data`, `fs:write-app-data`, `fs:scope` auf Psychlern-Verzeichnis
   - Keine Netzwerk-Berechtigungen (Offline-First!)
   - Keine Shell-Execution

### 4.2 AGENT-A2: Frontend-Architektur + Datenmodelle

**Auftraege:**

1. **Projektstruktur:**
   ```
   src/
   ├── main.tsx                    # Entry point
   ├── App.tsx                     # Root-Komponente, Routing
   ├── stores/
   │   ├── useAppStore.ts          # Zustand: globale App-States
   │   ├── useDeckStore.ts         # Zustand: Karten/decks
   │   ├── useStudyStore.ts        # Zustand: Lernsitzung
   │   └── useSettingsStore.ts     # Zustand: Einstellungen
   ├── types/
   │   ├── flashcard.ts            # Alle Kartentypen
   │   ├── deck.ts                 # Deck-Metadaten
   │   ├── study-session.ts        # Lernsitzungs-Typen
   │   ├── settings.ts             # Einstellungs-Typen
   │   ├── knowledge-base.ts       # Wissensbasis-Typen
   │   └── progress.ts             # Fortschritts-Typen
   ├── components/
   │   ├── ui/                     # Basis-UI (shadcn-adaptiert)
   │   ├── layout/                 # Layout-Komponenten
   │   ├── flashcard/              # Kartenkomponenten
   │   ├── study/                  # Lernmodus-Komponenten
   │   ├── dashboard/              # Dashboard-Komponenten
   │   ├── settings/               # Einstellungskomponenten
   │   └── onboarding/             # Onboarding/Tour
   ├── hooks/
   │   ├── useLocalStorage.ts      # JSON-Storage Hook
   │   ├── useSpacedRepetition.ts  # SR-Algorithmus
   │   ├── useTimer.ts             # Timer/Countdown
   │   └── useKeyboardShortcuts.ts # Tastaturkuerzel
   ├── utils/
   │   ├── sr-algorithm.ts         # Leitner + adaptive Spacing
   │   ├── german-text.ts          # Deutsche Textverarbeitung
   │   ├── validators.ts           # Schema-Validierung
   │   └── date-helpers.ts         # Datums-/Zeit-Hilfen
   ├── lib/
   │   ├── constants.ts            # App-Konstanten
   │   └── german-copy.ts          # ALLE deutschen UI-Strings
   └── styles/
       └── globals.css
   ```

2. **TypeScript-Interfaces definieren** (exemplarisch):

```typescript
// types/flashcard.ts
export type CardType = 'concept' | 'definition' | 'fact' | 'cloze';

export interface BaseFlashcard {
  id: string;                    // UUID v4
  createdAt: ISOString;
  updatedAt: ISOString;
  type: CardType;
  tags: string[];
  source?: string;               // z.B. "Allgemeine Psychologie I, Kap. 3"
  difficulty: 1 | 2 | 3;         // Selbsteinschaetzung
}

export interface ConceptCard extends BaseFlashcard {
  type: 'concept';
  front: {
    conceptName: string;         // z.B. "Gestaltgesetze"
    contextPrompt: string;       // z.B. "Erklaere die zentralen Gestaltgesetze und gib ein Alltagsbeispiel."
  };
  back: {
    explanation: string;         // Freitext-Erklaerung
    keyPoints: string[];         // Stichpunkt-Liste
    relatedConcepts: string[];   // Verlinkte Konzepte
  };
}

export interface DefinitionCard extends BaseFlashcard {
  type: 'definition';
  front: {
    term: string;                // z.B. "Proaktive Interferenz"
    discipline: string;          // z.B. "Gedaechtnispsychologie"
  };
  back: {
    definition: string;          // Praezise Definition
    example: string;             // Beispielsaus
    sourceAuthor?: string;       // z.B. "Anderson, 2015"
  };
}

export interface FactCard extends BaseFlashcard {
  type: 'fact';
  front: {
    question: string;            // z.B. "In welchem Jahr erschien Kahnemans 'Thinking, Fast and Slow' auf Deutsch?"
    category: string;            // z.B. "Wissenschaftsgeschichte"
  };
  back: {
    answer: string;              // "2011 (Original 2011, dt. 'Schnelles Denken, langsames Denken')"
    mnemonic?: string;           // Optional: Merkhilfe
  };
}

export interface ClozeCard extends BaseFlashcard {
  type: 'cloze';
  fullText: string;              // "Die {{c1::Aufmerksamkeit}} ist ein {{c2::kognitiver Prozess}}, der Informationen {{c3::selektiert}}."
  hint?: string;
}

export type Flashcard = ConceptCard | DefinitionCard | FactCard | ClozeCard;
```

3. **Deutsche UI-String-Zentrale:**
   - ALLE sichtbaren deutschen Texte zentral in `src/lib/german-copy.ts`
   - Keine Hardcoded Strings in Komponenten
   - Struktur: Namespace-basiert (dashboard, study, settings, errors, etc.)
   - Typografisch korrekt: „Anfuehrungszeichen" (U+201E/U+201C), Gedankenstrich (U+2013), Auslassungspunkte (U+2026), geschuetzte Leerzeichen vor Einheiten

4. **Zustand-Management mit Zustand:**
   - Stores sind modular und kombinierbar
   - Persistenz-Integration: Stores werden bei Aenderungen automatisch in JSON geschrieben
   - Dev-only: Redux DevTools Integration

---

## 5. Wave 2: Flashcard-Engine und Studi-Modi {#5-wave-2-flashcard-engine}

> **Input:** Wave-1-Architektur. **Output:** Voll funktionsfaehige Flashcard-Engine mit drei spezialisierten Lernmodi und adaptivem Scheduling.

### 5.1 AGENT-F1: Flashcard-Algorithmus-Engine

**Auftrag:** Implementiere den vollstaendigen Flashcard-Engine-Core.

#### 5.1.1 Leitner-Box-System mit adaptivem Scheduling

Basierend auf:
- **Leitner (1972)** -- urspruengliches 5-Schachtel-System
- **Reddy et al. (2016)** "Unbounded human learning: Optimal scheduling for spaced repetition" -- 103 Citations
- **Whitmer et al. (2022)** "Examining two adaptive sequencing approaches for flashcard learning"
- **Kerfoot (2010)** "Adaptive spaced education improves learning efficiency" -- 128 Citations

**Implementation:**

```typescript
// utils/sr-algorithm.ts

interface LeitnerBox {
  level: 1 | 2 | 3 | 4 | 5;
  reviewIntervalDays: number;  // 1, 3, 7, 14, 30
}

interface CardProgress {
  cardId: string;
  currentBox: 1 | 2 | 3 | 4 | 5;
  consecutiveCorrect: number;   // Fuer Aufstieg
  consecutiveWrong: number;     // Fuer Abstieg
  lastReviewed: ISOString | null;
  nextReview: ISOString | null;  // Berechnet durch Algorithmus
  totalReviews: number;
  totalCorrect: number;
  easeFactor: number;           // 2.5 default, Anki-SM-2-artig
}

// ADAPTIVES SCHEDULING
// --------------------
// 1. Basierend auf Leitner-Level + Ease-Faktor
// 2. Zusaetzliche Gewichtung durch:
//    - Zeit seit letzter Wiederholung (Vergessenskurve)
//    - Konsistenz der richtigen Antworten (Stabilitaet)
//    - Selbsteinschaetzung (Tippen vs. Wusste ich vs. Unsicher vs. Falsch)
// 3. Reddy et al. (2016): "Expected recall probability" als Steuerungsgroesse
//    Ziel: 90% Recall-Wahrscheinlichkeit bei naechster Wiederholung
//
// Formel (vereinfacht):
//   interval = baseInterval * easeFactor * stabilityMultiplier
//   wobei stabilityMultiplier = 1 + (consecutiveCorrect * 0.1)
//   und easeFactor angepasst wird nach:
//     - "Wusste ich sofort": easeFactor *= 1.15
//     - "Unsicher": easeFactor *= 0.95
//     - "Falsch": easeFactor *= 0.75, Box = 1

enum SelfAssessment {
  AGAIN = 'again',      // Nicht gewusst -> Box 1, ease *= 0.75
  HARD = 'hard',        // Schwer -> gleiche Box, ease *= 0.85
  GOOD = 'good',        // Gut -> Box +1, ease *= 1.0
  EASY = 'easy',        // Sehr einfach -> Box +1 (max 5), ease *= 1.15
}

function calculateNextReview(
  progress: CardProgress,
  assessment: SelfAssessment,
  now: Date = new Date()
): Date {
  // Implementation basierend auf obiger Formel
}

// Taegliche Lern-Queue
function generateDailyQueue(
  allProgress: CardProgress[],
  maxCards: number = 20,           // ADHS: Nicht zu viele auf einmal!
  maxNewCards: number = 5          // ADHS: Limit neuer Karten/Tag
): CardProgress[] {
  // 1. Alle Faellige (nextReview <= heute)
  // 2. Sortiert nach: Box-Level aufsteigend (schwierige zuerst)
  // 3. Neue Karten (Box 1, noch nie gelernt) begrenzt auf maxNewCards
  // 4. Gesamt begrenzt auf maxCards
  // ADHS: Kleine, abschliessbare Einheiten!
}
```

#### 5.1.2 Kartenerstellung und -verwaltung

- **Erstellen:** Formular mit Kartentyp-Auswahl, Vorschau, Tag-System
- **Bearbeiten:** Inline-Editing im Kontext
- **Import:** Tab-getrenntes Format (Anki-kompatibel), CSV
- **Export:** Tab-getrennt, JSON-Backup
- **Duplikat-Erkennung:** Begriffs-Vergleich via normalisierte Levenshtein-Distanz

### 5.2 AGENT-F2: Drei Studi-Modi

> Jeder Modus ist eine vollstaendig eigene Lern-Oberflaeche, spezialisiert auf den jeweiligen Inhaltstyp. Der Nutzer waehlt vor dem Lernen den Modus und das Deck.

#### MODUS A: "Paradigma & Konzept" (Tiefenverstaendnis)

**Fuer:** Grosse, kritische Psychologie-Konzepte und Paradigmen
**Beispiel-Karten:** Gestaltpsychologie, Behaviorismus, Kognitivismuss, psychoanalytische Theorie, Dual-Process-Theorie, Attributionstheorie

**Kartentypen:** ConceptCard, ClozeCard

**UI-Konzept:**
```
+-----------------------------------------------------------+
|  PARADIGMA & KONZEPT          Deck: Allgemeine Psychologie I  |
|  Karte 7 von 12 (heute)                                   |
+-----------------------------------------------------------+
|                                                           |
|  [Begriff/Frage oben, prominent]                          |
|                                                           |
|  "Erklaere die zentralen Gestaltgesetze und ihre          |
|   Bedeutung fuer die Wahrnehmungspsychologie."            |
|                                                           |
|  [Grosse Schaltflaeche: Antwort aufdecken]                |
|                                                           |
+-----------------------------------------------------------+
|  [ANTWORT-BEREICH -- erscheint nach Klick]                |
|                                                           |
|  Die Gestaltgesetze beschreiben, wie Menschen visuelle    |
|  Reize zu ganzheitlichen Formen organisieren ...          |
|                                                           |
|  [Stichpunkte]                                            |
|  -- Gesetz der Naehe: Nahe Elemente werden gruppiert      |
|  -- Gesetz der Aehnlichkeit: Aehnliche Elemente gruppieren|
|  -- Gesetz der guten Fortsetzung: Linien als glatt wahrgen.|
|  -- Gesetz der Geschlossenheit: Geschlossene Formen bevorz.|
|                                                           |
|  [Verwandte Konzepte: Wahrnehmung, Illusion, Aufmerksamkeit]|
+-----------------------------------------------------------+
|  [Wie gut wusstest du das?]                               |
|  [Nochmal] [Schwer] [Gut] [Einfach]                      |
+-----------------------------------------------------------+
```

**Besonderheiten:**
- **Freitext-Modus:** Nutzer kann Antwort eintippen (statt nur zu denken) -- fuer besseren Active Recall
- **Stichpunkt-Vergleich:** Nach Eingabe werden die erwarteten Stichpunkte eingeblendet, Nutzer markiert welche er hatte
- **Konzepkarten:** Visuelle Verknuepfungen zwischen verwandten Konzepten anzeigbar
- **Sitzungslaenge:** Konfigurierbar, Default 10 Karten (ADHS: abschliessbare Einheit)

#### MODUS B: "Definitions-Repertoire" (Begriffssicherheit)

**Fuer:** Fachbegriffe mit praezisen Definitionen
**Beispiel-Karten:** Proaktive Interferenz, Retrograde Amnesie, Operationalisierung, Double-Blind-Studie, Effektstaerke (Cohens d)

**Kartentypen:** DefinitionCard

**UI-Konzept:**
```
+-----------------------------------------------------------+
|  DEFINITIONS-REPERTOIRE     Deck: Methodenlehre I         |
|  Karte 15 von 25                                          |
+-----------------------------------------------------------+
|                                                           |
|              Proaktive Interferenz                        |
|                                                           |
|  [Disziplin: Gedaechtnispsychologie]                      |
|                                                           |
|  [Kurze Schaltflaeche: Definition anzeigen]               |
|                                                           |
+-----------------------------------------------------------+
|  [DEFINITION]                                             |
|                                                           |
|  Stoerung des Lernens neuer Informationen durch aeltere   |
|  (bereits gelernte) Informationen, die aehnlich sind.     |
|                                                           |
|  Beispiel: Schwierigkeiten, eine neue PIN zu merken,      |
|  weil die alte noch im Kopf ist.                          |
|                                                           |
|  Quelle: Anderson, 2015, Kapitel 7                        |
+-----------------------------------------------------------+
|  [Nochmal] [Schwer] [Gut] [Einfach]                      |
+-----------------------------------------------------------+
```

**Besonderheiten:**
- **Bidirektionales Lernen:** Kann umgekehrt werden (Definition -> Begriff)
- **Autoren- und Jahresangaben:** Immer mit anzeigen (fuer wissenschaftliches Arbeiten)
- **Beispiel-Integration:** Jeder Begriff hat ein konkretes Beispiel
- **Schnell-Modus:** Nur Vorderseite zeigen, Selbstbewertung ohne Aufdecken (fuer wiederholtes Durchgehen)

#### MODUS C: "Merken & Abrufen" (Fakten, Daten, Namen)

**Fuer:** Reines Faktenwissen: Jahreszahlen, Autoren, wichtige Studien, Kennzahlen
**Beispiel-Karten:** "Wann wurde das DSM-5 veroeffentlicht?", "Autor von 'Psychologie als Wissenschaft'", "Wie viele Informationseinheiten fuegt das Working Memory auf einmal?"

**Kartentypen:** FactCard, ClozeCard

**UI-Konzept:**
```
+-----------------------------------------------------------+
|  MERKEN & ABRUFEN            Deck: Wissenschaftsgeschichte |
|  Karte 3 von 10                                           |
+-----------------------------------------------------------+
|                                                           |
|  Wann wurde Wilhelm Wundts erstes psychologisches         |
|  Labor in Leipzig eroeffnet?                              |
|                                                           |
|  [Kategorie: Wissenschaftsgeschichte]                     |
|                                                           |
+-----------------------------------------------------------+
|  [ANTWORT AUFDECKEN]                                      |
+-----------------------------------------------------------+
|  1879                                                     |
|                                                           |
|  Merkhilfe: "1-8-7-9 -- Wundt war fast 80 (79)"           |
|  (geb. 1832, gest. 1920)                                  |
+-----------------------------------------------------------+
|  [Nochmal] [Schwer] [Gut] [Einfach]                      |
+-----------------------------------------------------------+
```

**Besonderheiten:**
- **Merkhilfen-System:** Nutzer kann Mnemonics zu jeder Karte hinzufuegen
- **Zahlen-Training:** Besondere Darstellung fuer Zahlen (gross, prominent)
- **Zeitlinien-Ansicht:** Fakten chronologisch sortierbar
- **Kategorie-Filter:** Nach Fachgebiet filtern

#### 5.2.1 Gemeinsame UI-Elemente aller Modi

**Lernfortschritt-Anzeige (ADHS-kritisch):**
- Kreis-Fortschritt mit Prozentzahl (visuell konkret)
- "X von Y Karten" (quantifizierbar)
- Geschaetzte verbleibende Zeit: "Noch ca. 5 Minuten" (zeitkonkret)
- Sitzungs-Timer oben rechts (Countdown)

**Selbstbewertung (4 Stufen -- basierend auf Anki-SM-2):**
- "Nochmal" (Again) -- rot: Karte zurueck auf Anfang
- "Schwer" (Hard) -- orange: Karte bleibt in aktueller Box
- "Gut" (Good) -- gruen: Karte eine Box hoch
- "Einfach" (Easy) -- blau: Karte eine Box hoch, laengeres Intervall

**ADHS-Optimierungen:**
- **Karten-Limit:** Max. 20 Karten pro Sitzung (Default), konfigurierbar
- **Pomodoro-Timer:** Integrierter 25-Minuten-Timer mit 5-Minuten-Pause (Cirillo 1980s)
- **Micro-Celebrations:** Kleine Animation bei jeder richtigen Antwort (NICHT aufdringlich)
- **Sitzungs-Zusammenfassung:** Am Ende: "12/15 richtig -- Das ist 80 %!" (positiv formuliert)
- **Keine Strafen:** Falsche Antworten fuehren nicht zu negativen Punkten, nur zu haeufigerer Wiederholung

---

## 6. Wave 3: Wissensbasis-Referenzsystem {#6-wave-3-wissensbasis}

> **Kernanforderung:** Eine vollstaendige, nach deutschem Erstsemester-Curriculum strukturierte Wissensbasis als NACHschlage-WERK, NICHT als vorseedete Hauptkartei. Die Wissensbasis ist ein separates Modul, das jederzeit im Lernprozess zugaenglich ist. Der Nutzer KANN daraus Karten generieren, muss aber nicht.

### 6.1 AGENT-W1: Wissensbasis-Strukturierung

**Auftrag:** Erstelle die vollstaendige Referenz-Wissensbasis fuer das erste Studienjahr Psychologie in Deutschland.

#### 6.1.1 Struktur der Wissensbasis

Die Wissensbasis ist als hierarchisches Nachschlagewerk organisiert:

```typescript
// types/knowledge-base.ts

interface KnowledgeModule {
  id: string;
  semester: 1 | 2;
  title: string;                 // z.B. "Allgemeine Psychologie I"
  ects?: number;
  description: string;
  chapters: KnowledgeChapter[];
}

interface KnowledgeChapter {
  id: string;
  moduleId: string;
  number: string;                // "1.3", "2.1" etc.
  title: string;                 // z.B. "Wahrnehmung"
  learningObjectives: string[];  // Lernziele
  sections: KnowledgeSection[];
}

interface KnowledgeSection {
  id: string;
  chapterId: string;
  title: string;
  content: string;               // Markdown-formatiert
  keyTerms: KeyTerm[];           // Definitionen
  keyStudies?: KeyStudy[];       // Wichtige Studien
  keyFigures?: KeyFigure[];      // Wichtige Forscher*innen
  visualAids?: string[];         // Platzhalter fuer Diagramme
  generateCardButton: boolean;   // Immer true: "Karte aus diesem Begriff erstellen"
}

interface KeyTerm {
  term: string;
  definition: string;
  source?: string;
  discipline: string;
}

interface KeyStudy {
  authors: string;
  year: number;
  title: string;
  findings: string;
  significance: string;          // Warum ist diese Studie wichtig?
}

interface KeyFigure {
  name: string;
  lifespan?: string;
  contribution: string;
  keyWork?: string;              // Wichtigstes Werk
}
```

#### 6.1.2 Inhaltliche Module (Erststudienjahr, Deutschland)

Basierend auf Modulhandbuendern von Universitaet zu Koeln, Uni Trier, Uni Mannheim, Leuphana, MHB Fontane, Uni Wien:

**Semester 1:**
1. **Einfuehrung in die Psychologie** (8 ECTS)
   - Geschichte der Psychologie (Wundt 1879, Behaviorismus, Humanismus, Kognitivwende)
   - Wissenschaftstheorie (Empirismus, Kritischer Rationalismus, Konstruktivismus)
   - Forschungsmethoden (Experiment, Befragung, Beobachtung, Fallstudie)
   - Ethik in der psychologischen Forschung

2. **Allgemeine Psychologie I: Wahrnehmung und Kognition** (6-8 ECTS)
   - Sinnesphysiologie und Psychophysik (Fechner, Weber-Fechner-Gesetz, absolute/relative Schwelle)
   - Wahrnehmung (Gestaltgesetze, Tiefenwahrnehmung, Farbwahrnehmung, Aufmerksamkeit)
   - Lernen (Klassische Konditionierung [Pawlow], Operante Konditionierung [Skinner], Kognitives Lernen [Kohler], Latentes Lernen [Tolman], Observatives Lernen [Bandura])
   - Gedaechtnis (Atkinson-Shiffrin-Modell, Arbeitsgedaechtnis [Baddeley], Langzeitgedaechtnis, Encodierung, Konsolidierung, Retrieval)
   - Denken und Problemlösen (Heuristiken [Tversky & Kahneman], Kreativitaet, Entscheidungsfindung)
   - Sprache (Chomsky, Skinner, Spracherwerb, Sprachproduktion, Sprachverstaendnis)

3. **Biologische Psychologie** (6 ECTS)
   - Nervensystem (Neuron, Synapse, Neurotransmitter)
   - Gehirn (Hirnareale, Lateralisation, Plastizitaet)
   - Methoden (EEG, fMRT, PET, TMS)
   - Physiologische Grundlagen von Wahrnehmung, Emotion, Schlaf

4. **Grundlagen der Sozialpsychologie** (6 ECTS)
   - Soziale Wahrnehmung und Attribution (Heider, Jones & Davis, Kelley)
   - Einstellungen und Einstellungsaenderung (Elaboration Likelihood Model, kognitive Dissonanz [Festinger])
   - Soziale Einflussprozesse (Konformitaet [Asch], Gehorsam [Milgram], soziales Facilitieren)
   - Selbst und soziale Identitaet (Selbstwert, Selbstkonzept, soziale Identitaet [Tajfel])
   - Gruppenprozesse (Gruppendenken [Janis], Soziales Faulenzen, Risikoverlagerung)

5. **Methodenlehre I: Statistik** (6 ECTS)
   - Deskriptive Statistik (Lage- und Streumasse, Korrelation, Regression)
   - Wahrscheinlichkeitstheorie (Verteilungen, Zentraler Grenzwertsatz)
   - Inferenzstatistik (Hypothesentesten, t-Test, ANOVA, Chi-Quadrat)

**Semester 2:**
6. **Allgemeine Psychologie II: Motivation und Emotion** (6 ECTS)
   - Motivationstheorien (Maslow, Herzberg, Selbstbestimmungstheorie [Deci & Ryan], Achievement Motivation [McClelland])
   - Emotionstheorien (James-Lange, Cannon-Bard, Schachter-Singer, Zajonc-LeDoux)
   - Physiologische Grundlagen der Emotion (Limbisches System, Amygdala)
   - Stress und Coping (Selye, Lazarus, soziale Unterstuetzung)

7. **Entwicklungspsychologie** (6-8 ECTS)
   - Theorien (Piaget, Vygotskij, Erikson, Bowlby, Ainsworth)
   - Praenatale Entwicklung bis Adoleszenz
   - Kognitive, emotionale, soziale Entwicklung
   - Bindung, Sprachentwicklung, Moralentwicklung (Kohlberg)

8. **Differentielle Psychologie / Persoenlichkeitspsychologie** (4-6 ECTS)
   - Intelligenz (g-Faktor [Spearman], GF-GC [Cattell], Mehrfachintelligenzen [Gardner], Emotionale Intelligenz [Goleman])
   - Persoenlichkeit (Big Five, Freud, Jung, Cattell 16PF)
   - Testguetekriterien (Objektivitaet, Reliabilitaet, Validitaet)

#### 6.1.3 Enrichment-Feature

Die Wissensbasis kann vom Nutzer angereichert werden:
- **Eigene Notizen zu jedem Abschnitt:** Freitext, mit Markdown-Unterstuetzung
- **Highlighting:** Wichtige Passagen markieren (verschiedene Farben)
- **Kartengenerierung:** Jeder Begriff hat einen "Karte erstellen"-Button, der einen Kartenerstellungs-Dialog mit vorausgefuellten Daten oeffnet
- **Querverweise:** Automatische Links zwischen verwandten Begriffen
- **Suchfunktion:** Volltextsuche ueber die gesamte Wissensbasis

#### 6.1.4 WICHTIG: KEINE Vorseedung der Hauptkartei

- Beim ersten Start ist die Hauptkartei (decks/user-decks.json) LEER
- Die Wissensbasis ist ein separates, read-only Modul (psychlern-data/wissensbasis/)
- Nutzer wird beim ersten Start freundlich begruesst und gefragt, ob sie die Wissensbasis erkunden moechten
- Die Wissensbasis ist als "Nachschlagewerk" konzipiert, NICHT als Lernpfad
- Kartenerstellung ist aktiv (Nutzer muss auf "Karte erstellen" klicken), nicht passiv

---

## 7. Wave 4: ADHS-optimiertes UI/UX {#7-wave-4-ui-ux}

> **Input:** Wave-0 ADHS-Design-Guide (AGENT-R2), Wave-1/2/3 Funktionalitaet.
> **Output:** Vollstaendiges Design-System mit ADHS-optimierten Komponenten.

### 7.1 Design-Pramissen (NIE verhandelbar)

1. **NIE infantilisierend:** Keine Comic-Schriftarten, keine uebermaessig bunten Cartoon-Elemente, keine Kinder-Illustrationen. Die UI soll modern, clean und erwachsen wirken -- wie Notion, linear.app oder aehnliche professionelle Tools.
2. **NIE shaming:** Keine "Streak broken"-Nachrichten, keine negativen Vergleiche, keine "Du hast heute nicht gelernt!"-Push. Stattdessen: "Letztes Mal vor 3 Tagen -- willkommen zurueck!"
3. **MEHR Feedback, MEHR Sichtbarkeit, MEHR Flexibilitaet:** Das Goldene Regel der ADHS-Design: Was fuer Neurotypiker "zu viel" ist, ist fuer ADHS oft genau richtig.

### 7.2 Farbsystem

**Primaere Palette:**
```css
:root {
  /* Brand: Beruhigendes Blaugruen -- professionell, erwachsen */
  --color-primary-50:  #f0fdfa;
  --color-primary-100: #ccfbf1;
  --color-primary-200: #99f6e4;
  --color-primary-300: #5eead4;
  --color-primary-400: #2dd4bf;
  --color-primary-500: #14b8a6;  /* Primaer */
  --color-primary-600: #0d9488;
  --color-primary-700: #0f766e;
  --color-primary-800: #115e59;
  --color-primary-900: #134e4a;

  /* Akzent: Warmes Amber -- Energie, Feierlichkeit */
  --color-accent-400:  #fbbf24;
  --color-accent-500:  #f59e0b;  /* Akzent */
  --color-accent-600:  #d97706;

  /* Semantische Farben */
  --color-success:     #10b981;  /* Gruen: Richtig */
  --color-warning:     #f59e0b;  /* Amber: Schwer */
  --color-error:       #ef4444;  /* Rot: Nochmal */
  --color-info:        #3b82f6;  /* Blau: Einfach */

  /* Neutral */
  --color-surface:     #fafaf9;  /* Hintergrund */
  --color-surface-alt: #f5f5f4;  /* Karten-Hintergrund */
  --color-border:      #e7e5e4;
  --color-text-primary:   #1c1917;
  --color-text-secondary: #78716c;
  --color-text-muted:     #a8a29e;
}

/* Dark Mode */
[data-theme="dark"] {
  --color-surface:     #1c1917;
  --color-surface-alt: #292524;
  --color-border:      #44403c;
  --color-text-primary:   #fafaf9;
  --color-text-secondary: #a8a29e;
  --color-text-muted:     #78716c;
}

/* High Contrast Mode (ADHS + Sehbehinderung) */
[data-theme="high-contrast"] {
  --color-surface:     #000000;
  --color-surface-alt: #000000;
  --color-border:      #ffffff;
  --color-text-primary:   #ffffff;
  --color-text-secondary: #ffffff;
}
```

### 7.3 Typografie

- **Schriftart:** Inter (Google Fonts) -- modern, hochlesbar, professionell
- **Fallback:** system-ui, -apple-system, sans-serif
- **Groessen:**
  - Display: 2rem (32px) -- Modul-Titel
  - H1: 1.5rem (24px)
  - H2: 1.25rem (20px)
  - H3: 1.125rem (18px)
  - Body: 1rem (16px) -- NIEMALS kleiner!
  - Small: 0.875rem (14px) -- Nur fuer Meta-Info
- **Zeilenabstand:** 1.6 (body), 1.4 (headings)
- **Maximale Zeilenlaenge:** 65 Zeichen (Lesbarkeit)
- **Deutsche Typografie:** Siehe Abschnitt 14

### 7.4 Layout-System

**Kernprinzipien:**
1. **Alles sichtbar:** Keine Hamburger-Menues fuer primaere Navigation. Persistente Seitenleiste mit Icons + Labels.
2. **Eine Sache pro Bildschirm:** Keine ueberladenen Dashboards. Fokus auf eine Aufgabe.
3. **Konsistente Positionen:** Navigation immer an derselben Stelle. Buttons immer unten rechts.
4. **Grosszuegiger Whitespace:** ADHS-Hirn braucht visuelle Ruhe zum Ausruhen.
5. **Card-basiert:** Inhalte in klar abgegrenzten Karten, nicht in endlosen Listen.

**Layout-Struktur:**
```
+-----------------------------------------------------------+
| [Logo] PSYCHLERN      [Suche]      [Zahnrad] [Profil]      |  <- Header (48px)
+------+----------------------------------------------------+
|      |                                                |  |
| D    |                                                |  |
| A    |              HAUPTBEREICH                      |  |  <- Scrollbar
| S    |                                                |  |     (sanfte, breite
| H    |                                                |  |      Scrollbar)
| B    |                                                |  |
| O    |                                                |  |
| A    |                                                |  |
| R    |                                                |  |
| D    |                                                |  |
|      |                                                |  |
+------+----------------------------------------------------+
```

**Sidebar-Navigation (immer sichtbar, 240px):**
- Dashboard (Home-Icon)
- Lernen (Buch-Icon) -- oeffnet Modus-Auswahl
- Meine Karten (Layers-Icon) -- Deck-Liste
- Wissensbasis (Library-Icon) -- Nachschlagewerk
- Statistik (BarChart-Icon)
- Einstellungen (Settings-Icon)
- Fokus-Modus (Zap-Icon) -- Deaktiviert alle Animationen

### 7.5 Animations-System (ADHS-konform)

**Goldene Regel der ADHS-Animation:** Subtil, schnell, zweckgebunden. Keine dekorativen Animationen. Jede Animation hat eine kommunikative Funktion.

**Parameter:**
```css
/* Dauer: Kurz! ADHS-Hirn will nicht warten */
--duration-instant:  100ms;  /* Button-Hover */
--duration-fast:     150ms;  /* Toggle, kleine Transition */
--duration-normal:   200ms;  /* Modale, Seitenwechsel */
--duration-slow:     300ms;  /* Karten-Flip (max!) */

/* Easing: Sanftes Auslaufen */
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce:  cubic-bezier(0.34, 1.56, 0.64, 1);  /* Nur fuer Celebrations */

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Erlaubte Animationen:**
1. **Button-Hover:** Skalierung 1.02, Farb-Transition (150ms)
2. **Karten-Flip:** rotateY 180deg (300ms) -- beim Lernen
3. **Fortschrittsbalken:** Breiten-Aenderung mit sanftem Easing (300ms)
4. **Modal-Einblendung:** Fade + leichte Skalierung 0.95->1 (200ms)
5. **Celebration:** Micro-Confetti bei Sitzungsende (max. 1.5 Sekunden, abschaltbar)
6. **Seitenwechsel:** Fade (200ms), KEIN Slide (verwirrend bei ADHS)

**VERBOTENE Animationen:**
- Kein Parallax-Scrolling
- Keine sich bewegenden Hintergruende
- Keine pulsierenden Elemente (ausser bei kritischen Warnungen)
- Keine Slide-Transitions zwischen Seiten
- Keine verzoegerten Einblendungen ("Content erscheint nach 500ms") -- alles sofort da
- Kein Auto-Play von irgendetwas

### 7.6 Fokus-Modus

Der Fokus-Modus ist eine zentrale ADHS-Funktion:

- **Toggle:** In Sidebar, immer zugaenglich (Zap-Icon)
- **Wirkung:**
  - Alle Animationen werden sofort deaktiviert
  - Hintergrund wird neutraler (weniger Farbe)
  - Navigation minimiert sich zu Icons-only (mehr Platz)
  - Keine Fortschritts-Celebrations (stille Bestaetigung)
  - Groessere Klickflaechen
  - Erhoehter Kontrast
- **Persistenz:** Wird in settings.json gespeichert
- **Schnellaktivierung:** Tastaturkuerzel `F` (waehrend des Lernens)

### 7.7 AGENT-U2: Accessibility + WCAG 2.2

**Auftraege:**
1. **WCAG 2.2 AA-Konformitaet sicherstellen:**
   - 1.4.3 Kontrastverhaeltnis 4.5:1 (Text), 3:1 (UI-Komponenten)
   - 2.4.7 Fokus-Indikatoren immer sichtbar (2px outline, primaere Farbe)
   - 2.4.6 Aussagekraeftige Ueberschriften und Labels
   - 3.2.3 Konsistente Navigation
   - 3.3.2 Labels oder Anweisungen

2. **Zusaetzlich (AAA wo moeglich):**
   - 1.4.6 Kontrast 7:1 fuer Text
   - 1.4.8 Zeilenabstand konfigurierbar
   - 2.3.2 Kein Blinken/Flackern (3 Flashes pro Sekunde max.)

3. **Screen-Reader-Support:**
   - Aria-Labels fuer alle interaktiven Elemente
   - Live-Regions fuer dynamische Inhalte (Karten-Fortschritt)
   - Semantisches HTML (keine div-Suppe)

4. **Tastatur-Navigation:**
   - Tab-Reihenfolge logisch
   - Enter/Space aktiviert Buttons
   - Pfeiltasten navigieren in Listen
   - Escape schliesst Modale
   - Shortcuts fuer alle Hauptfunktionen:
     - `1/2/3` -- Lernmodi auswaehlen
     - `Leertaste` -- Antwort aufdecken
     - `1/2/3/4` -- Bewertung (Nochmal/Schwer/Gut/Einfach)
     - `F` -- Fokus-Modus toggle
     - `S` -- Suche
     - `N` -- Neue Karte
     - `?` -- Tastaturkuerzel-Hilfe

---

## 8. Wave 5: Onboarding, Tour und PIN-System {#8-wave-5-onboarding}

### 8.1 AGENT-O1: Onboarding-System

#### 8.1.1 Erststart-Tour

Beim allerersten App-Start wird eine interaktive Tour angezeigt. Der Nutzer kann sie jederzeit ueberspringen.

**Struktur (5 Schritte):**

```
Schritt 1: Willkommen
"Willkommen bei Psychlern -- deinem Lernwerkzeug fuer das
Psychologie-Studium."
[Weiter] [Ueberspringen]

Schritt 2: "Deine Karten, dein Wissen"
"Du erstellst deine Lernkarten selbst. Wir bieten dir dafuer
verschiedene Lernmodi -- vom tiefen Konzeptverstaendnis bis
hin zum Faktenabfrufen."
[Zurueck] [Weiter] [Ueberspringen]

Schritt 3: "Nachschlagewerk"
"In der Wissensbasis findest du ein vollstaendiges
Nachschlagewerk fuer dein erstes Studienjahr. Du kannst
direkt daraus Karten erstellen."
[Zurueck] [Weiter] [Ueberspringen]

Schritt 4: "Lernen, das zu dir passt"
"Mit dem Fokus-Modus und anpassbaren Einstellungen kannst
du Psychlern auf deine Beduerfnisse zuschneiden.
Lernen sollte nicht stressen."
[Zurueck] [Weiter] [Ueberspringen]

Schritt 5: "Bereit?"
"Leg los! Erstelle dein erstes Deck oder erkunde die
Wissensbasis."
[Zurueck] [Los geht's!]
```

**Implementierung:**
- Spotlight/Tour-Library oder eigene Implementation
- Jeder Schritt hebt ein UI-Element hervor (Spotlight-Effekt)
- Schritte koennen mit Pfeiltasten oder Buttons navigiert werden
- Position der Tooltips: Automatisch (oben/unten/links/rechts je nach Platz)

#### 8.1.2 "Nicht mehr anzeigen"-Option

- Checkbox am Ende der Tour: "Diese Tour beim naechsten Start nicht mehr anzeigen"
- Wird in settings.json gespeichert: `tourCompleted: true`
- Tour kann spaeter in den Einstellungen erneut gestartet werden
- Wenn tourCompleted = true, wird beim Start direkt zum Dashboard navigiert

#### 8.1.3 PIN-System

**Flow:**
```
Erst-Einrichtung (in den Einstellungen):
  [ ] PIN-Schutz aktivieren
      -> 4- bis 6-stellige PIN eingeben
      -> PIN bestaetigen
      -> Gespeichert als Argon2id-Hash in settings.json
      -> Bei Aktivierung: "PIN-Schutz ist jetzt aktiv."

App-Start (wenn PIN aktiv):
  +-------------------------------------------+
  |                                           |
  |              PSYCHLERN                     |
  |                                           |
  |  [PIN-Eingabe: 4 Kringel]                 |
  |                                           |
  |  [1] [2] [3]                              |
  |  [4] [5] [6]          [Numpad oder        |
  |  [7] [8] [9]           direkte Eingabe]   |
  |  [  0  ] [<]                              |
  |                                           |
  |  [Entsperren]                             |
  |                                           |
  +-------------------------------------------+

  - Nach 3 falschen Versuchen: 30-Sekunden-Timeout
  - Keine "Falsch!"-Schamnachricht, sondern:
    "Das war nicht die richtige PIN. Noch X Versuche."
  - "PIN vergessen?" fuehrt zu:
    "Falls du deine PIN vergessen hast, loesche den Ordner
     [Pfad] und starte die App neu. Deine Lernkarten bleiben
     erhalten, die PIN wird zurueckgesetzt."
```

**Sicherheitsimplementierung:**
- PIN wird mit Argon2id (oder bcrypt) gehasht gespeichert
- Hash ist in settings.json, Klartext existiert nie auf der Festplatte
- Brute-Force-Schutz durch exponentielles Backoff (3 Versuche -> 30s, 6 Versuche -> 5min)
- Kein "Passwort zuruecksetzen" ueber Netzwerk (Offline-App!)

---

## 9. Wave 6: Testabdeckung und Qualitaetssicherung {#9-wave-6-testing}

> **Ziel:** 100 % Testabdeckung fuer alle kritischen Pfade. Die App muss ohne menschliches Zutun vollstaendig testbar sein.

### 9.1 AGENT-T1: Unit-Tests (Vitest)

**Testziele:**

| Modul | Ziel-Coverage | Testfaelle |
|-------|---------------|------------|
| `utils/sr-algorithm.ts` | 100 % | Leitner-Scheduling, Ease-Faktor-Berechnung, Queue-Generierung, Grenzfaelle (leere Decks, volle Boxen) |
| `utils/german-text.ts` | 100 % | Typografische Korrekturen, Datumsformate, Zahlenformatierung |
| `utils/validators.ts` | 100 % | Schema-Validierung fuer alle Kartentypen, Fehlerfaelle |
| `utils/date-helpers.ts` | 100 % | Intervallberechnung, Zeitformatierung, relative Zeitangaben |
| `stores/*.ts` | >90 % | State-Transitions, Persistenz, Fehlerbehandlung |
| `hooks/useTimer.ts` | 100 % | Countdown, Pomodoro-Phasen, Pause/Resume |
| `hooks/useSpacedRepetition.ts` | >95 % | Kartenbewertung, Intervall-Updates, Queue-Management |

**Test-Konventionen:**
- Jeder Test in `src/__tests__/` parallel zur Source-Struktur
- Test-Dateinamen: `[modul].test.ts`
- AAA-Pattern (Arrange-Act-Assert)
- Fuer SR-Algorithmus: Property-based Tests (z.B. mit fast-check)

**Beispiel-Test:**
```typescript
// utils/__tests__/sr-algorithm.test.ts
import { describe, it, expect } from 'vitest';
import { calculateNextReview, SelfAssessment } from '../sr-algorithm';

describe('calculateNextReview', () => {
  it('should reset card to box 1 on "again"', () => {
    const progress = createMockProgress({ currentBox: 3, easeFactor: 2.0 });
    const result = calculateNextReview(progress, SelfAssessment.AGAIN);
    expect(result.nextBox).toBe(1);
    expect(result.easeFactor).toBeLessThan(2.0);
  });

  it('should advance card on "good"', () => {
    const progress = createMockProgress({ currentBox: 2 });
    const result = calculateNextReview(progress, SelfAssessment.GOOD);
    expect(result.nextBox).toBe(3);
  });

  it('should cap box at level 5', () => {
    const progress = createMockProgress({ currentBox: 5 });
    const result = calculateNextReview(progress, SelfAssessment.EASY);
    expect(result.nextBox).toBe(5);
  });

  it('should handle empty deck gracefully', () => {
    const queue = generateDailyQueue([], 20, 5);
    expect(queue).toHaveLength(0);
  });

  it('should never exceed daily card limit', () => {
    const manyCards = createMockProgressArray(100);
    const queue = generateDailyQueue(manyCards, 15, 5);
    expect(queue.length).toBeLessThanOrEqual(15);
  });
});
```

### 9.2 AGENT-T2: E2E-Tests (Playwright)

**Kritische User Journeys:**

1. **Onboarding-Tour ueberspringen** -> Dashboard sichtbar
2. **Karte erstellen** (alle 4 Typen) -> Karte im Deck sichtbar
3. **Lernsession durchfuehren** (Modus A) -> Bewertung -> Fortschritt gespeichert
4. **Lernsession beenden** vorzeitig -> Kein Datenverlust
5. **PIN aktivieren** -> App neu starten -> PIN-Abfrage -> Entsperren
6. **Wissensbasis durchsuchen** -> Karte daraus erstellen
7. **Fokus-Modus toggeln** -> Animationen deaktiviert
8. **Theme wechseln** (Hell/Dunkel/Hochkontrast) -> UI aktualisiert
9. **Deck exportieren** -> Datei erstellt -> Deck importieren -> Daten identisch
10. **App 7 Tage nutzen** -> Backups rotieren korrekt

**Snapshot-Tests:**
- Jede Hauptseite (Dashboard, Lernen, Karten, Wissensbasis, Einstellungen)
- Dark Mode und Light Mode
- Mobile-Ansicht (768px) und Desktop (1280px)

**Test-Konventionen:**
- Tests in `e2e/` Verzeichnis
- Page Object Model fuer Wartbarkeit
- Deutsche Texte in Selectors verwenden (da UI auf Deutsch)
- Video-Aufzeichnung bei Fehlern aktivieren

---

## 10. Wave 7: Build, Packaging und Deployment-Vorbereitung {#10-wave-7-deployment}

### 10.1 AGENT-B1: Build- und Packaging-Engineer

**Auftraege:**

1. **Tauri-Build-Konfiguration:**
   - `tauri.conf.json` fuer alle Plattformen
   - Icons: 512x512 Source, alle benoetigten Groessen generieren
   - Identifier: `de.psychlern.app`
   - Kategorie: `Education`
   - Single-Instance-Enforcement (nur eine App-Instanz)

2. **Plattform-spezifische Builds:**
   - **Windows:** MSIX-Installer (Microsoft Store kompatibel) + .exe
   - **macOS:** .dmg (Intel + Apple Silicon Universal Binary)
   - **Linux:** .AppImage + .deb (Debian/Ubuntu)

3. **Auto-Update (optional, vorbereitet):**
   - Tauri-Updater konfigurieren
   - Update-Server-URL als Umgebungsvariable (wenn spaeter gewuenscht)
   - Signaturen fuer Updates vorbereitet

4. **Performance-Optimierung:**
   - Code-Splitting pro Route (React.lazy + Suspense)
   - Tree-Shaking fuer minimale Bundle-Groesse
   - Rust-Release-Build mit Optimierungen

5. **Lieferartefakte:**
   - `psychlern_1.0.0_x64_en-US.msi` (Windows)
   - `psychlern_1.0.0_x64.dmg` (macOS)
   - `psychlern_1.0.0_amd64.AppImage` (Linux)
   - `SHA256SUMS.txt` -- Pruefsummen fuer alle Dateien

---

## 11. Akademische Fundierung: Quellen und Zitate {#11-akademische-fundierung}

### 11.1 Spaced Repetition + Flashcard-Algorithmen

1. **Pham, X. L., Chen, G. D., Nguyen, T. H., & Hwang, W. Y.** (2016). Card-based design combined with spaced repetition: A new interface for displaying learning elements and improving active recall. *Computers & Education*, 96, 125-140. (51 Citations)

2. **Reddy, S., Labutov, I., Banerjee, S., & Joachims, T.** (2016). Unbounded human learning: Optimal scheduling for spaced repetition. *Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining*, 1815-1824. (103 Citations)

3. **Kerfoot, B. P.** (2010). Adaptive spaced education improves learning efficiency: A randomized controlled trial. *The Journal of Urology*, 183(2), 678-681. (128 Citations)

4. **Whitmer, D. E., Johnson, C. I., & Marraffino, M. D.** (2022). Examining two adaptive sequencing approaches for flashcard learning: The tradeoff between training efficiency and long-term retention. In *Artificial Intelligence in Education* (pp. 107-118). Springer. (5 Citations)

5. **Limongelli, C., Sciarrone, F., Temperini, M., & Vaste, G.** (2009). Adaptive learning with the LS-plan system: A field evaluation. *IEEE Transactions on Learning Technologies*, 2(3), 203-215. (149 Citations)

6. **Colbran, S., Jones, W., & Milburn, J.** (2018). Comparing spaced repetition algorithms for legal digital flashcards. *ASCILITE Publications*. (5 Citations)

7. **Santhosh, V. N., Coutinho, D., Ankola, A. V., et al.** (2024). Effectiveness of spaced repetition learning using a mobile flashcard application among dental students: A randomized controlled trial. *Journal of Dental Education*. (6 Citations)

8. **Durrani, S. F., Yousuf, N., Ali, R., et al.** (2024). Effectiveness of spaced repetition for clinical problem solving amongst undergraduate medical students studying paediatrics in Pakistan. *BMC Medical Education*. (28 Citations)

9. **Sun, M., Tsai, S., Engle, D. L., & Holmer, S.** (2021). Spaced repetition flashcards for teaching medical students psychiatry. *Medical Science Educator*, 31, 1897-1901. (43 Citations)

10. **Shah, D. P., Jagtap, N. M., Shah, S. S., et al.** (2020). Spaced repetition for slow learners. *IEEE Bombay Section Signature Conference*. (12 Citations)

11. **Leitner, S.** (1972). *So lernt man lernen*. Herder.

### 11.2 Cognitive Load Theory + Multimedia Learning

12. **Mayer, R. E., & Moreno, R.** (2003). Nine ways to reduce cognitive load in multimedia learning. *Educational Psychologist*, 38(1), 43-52.

13. **Schweppe, J., & Rummer, R.** (2014). Attention, working memory, and long-term memory in multimedia learning: An integrated perspective based on process models of working memory. *Educational Psychology Review*, 26, 285-306. (163 Citations)

14. **Anmarkrud, O., Andresen, A., & Braaten, I.** (2019). Cognitive load and working memory in multimedia learning: Conceptual and measurement issues. *Educational Psychologist*, 54(2), 61-83. (286 Citations)

15. **Schueler, A., Scheiter, K., & van Genuchten, E.** (2011). The role of working memory in multimedia instruction: Is working memory working during learning from text and pictures? *Educational Psychology Review*, 23, 353-371. (140 Citations)

16. **Lusk, D. L., Evans, A. D., Jeffrey, T. R., et al.** (2009). Multimedia learning and individual differences: Mediating the effects of working memory capacity with segmentation. *British Journal of Educational Technology*, 40(4), 636-651. (210 Citations)

17. **Brunye, T. T., Taylor, H. A., Rapp, D. N., et al.** (2006). Learning procedures: The role of working memory in multimedia learning experiences. *Applied Cognitive Psychology*, 20(7), 917-940. (122 Citations)

18. **Fenesi, B., Kramer, E., & Kim, J. A.** (2016). Split-attention and coherence principles in multimedia instruction can rescue performance for learners with lower working memory capacity. *Applied Cognitive Psychology*, 30(5), 741-749. (46 Citations)

19. **Doolittle, P. E., & Altstaedter, L. L.** (2009). The effect of working memory capacity on multimedia learning: Does attentional control result in improved performance? *Journal of Research in Innovative Teaching*, 2(1), 2-15. (39 Citations)

### 11.3 ADHS + Digitale Lernwerkzeuge

20. **Riaz, H., Ullah, A., Zito, C., & Soobhany, A. R.** (2024). Interaction design strategies for ADHD learning attention -- A review. In *International Conference on Human-Computer Interaction*. Springer.

21. **Burbano, D. C., & Alvarez, J. A.** (2023). User interface of digital platforms used ADHD patients: Case study in educational environment. In *International Congress of Telematics and Computing*. Springer.

22. **Lewis, D., & Brown, V.** (2012). Individuals with ADHD and the cognitive processing of multimedia. In *Proceedings of SITE International Conference*. AACE.

### 11.4 Produktivitaetsforschung

23. **Cirillo, F.** (1980s/2006). *The Pomodoro Technique*. Originally developed in the late 1980s, published 2006.

---

## 12. Deutsches Psychologie-Erstsemester-Curriculum {#12-erstsemester-curriculum}

> **Zusammenfassung der recherchierten Curricula** aus Modulhandbuendern von Universitaet zu Koeln, Universitaet Trier, Universitaet Mannheim, Leuphana Universitaet, Medizinische Hochschule Brandenburg (MHB), Universitaet zu Wien.

### 12.1 Ueberblick Erststudienjahr (Semester 1+2)

| Modul | ECTS | Inhalte | Pruefungsform |
|-------|------|---------|---------------|
| Einfuehrung in die Psychologie | 4-8 | Geschichte, Wissenschaftstheorie, Forschungsmethoden, Ethik | Klausur |
| Allgemeine Psychologie I (Wahrnehmung & Kognition) | 6-8 | Wahrnehmung, Lernen, Gedaechtnis, Denken, Sprache | Klausur |
| Allgemeine Psychologie II (Motivation & Emotion) | 6-8 | Motivation, Emotion, Stress, Handlung | Klausur |
| Biologische Psychologie | 6 | Nervensystem, Gehirn, Neurotransmitter, Methoden (EEG, fMRT) | Klausur |
| Sozialpsychologie | 6 | Soziale Wahrnehmung, Einstellungen, Einfluss, Gruppen | Klausur |
| Entwicklungspsychologie | 6-8 | Lebensspanne, Bindung, Kognition, Moral | Klausur |
| Differentielle Psychologie / Persoenlichkeit | 4-6 | Intelligenz, Persoenlichkeit, Testguete | Klausur |
| Methodenlehre I: Statistik | 6-12 | Deskriptiv, Wahrscheinlichkeit, Inferenz, Tests | Klausur |

### 12.2 Kernbegriffe pro Modul (Auszug)

**Allgemeine Psychologie I:**
- Psychophysik: Absoluter Schwellenwert, JND (Just Noticeable Difference), Fechnersches Gesetz, Stevens Potenzfunktion
- Wahrnehmung: Bottom-up vs. Top-down, Gestaltgesetze (Naehe, Aehnlichkeit, gute Fortsetzung, Geschlossenheit, Praegnanz), Tiefenwahrnehmung (monokular/binokular), Aufmerksamkeit (geteilte, selektive, verdeckte)
- Lernen: Habituation, Sensibilisierung, klassische Konditionierung (Pawlow), operante Konditionierung (Skinner, Verstaerkung, Bestrafung, Extinktion), kognitives Lernen (Kohlers Koehler-Affen), latentes Lernen (Tolman), Modelllernen (Bandura)
- Gedaechtnis: Modalitaetenmodell (Atkinson-Shiffrin), Arbeitsgedaechtnis (Baddeley: phonologische Schleife, visuell-raeumlicher Skizzenblock, Episodischer Puffer, Zentrale Exekutive), Enkodierung, Konsolidierung, Spurentheorie vs. Interferenztheorie
- Denken: Algorithmen vs. Heuristiken, Verfuegbarkeitsheuristik (Tversky & Kahneman), Repraesentativitaetsheuristik, Ankerheuristik, Konfirmationsbias, funktionale Fixiertheit
- Sprache: Phonem, Morphem, Syntax, Semantik, Spracherwerb (Chomsky: LAD, Behaviorismus-Kritik), Aphasie (Broca, Wernicke)

**Allgemeine Psychologie II:**
- Motivation: Beduerfnispyramide (Maslow), Zwei-Faktoren-Theorie (Herzberg), Selbstbestimmungstheorie (Deci & Ryan: Autonomie, Kompetenz, soziale Eingebundenheit), Leistungsmotivation (McClelland, Atkinson)
- Emotion: James-Lange-Theorie, Cannon-Bard-Theorie, Schachter-Singer-Zwei-Faktoren-Theorie, Zajonc-LeDoux, universale Emotionen (Ekman), limbisches System
- Stress: GAS (Selye: Alarm, Widerstand, Erschoepfung), kognitive Bewertung (Lazarus), Coping (problem- vs. emotionsfokussiert)

**Biologische Psychologie:**
- Neuron: Dendrit, Soma, Axon, Myelinscheide, Synapse, Aktionspotential, Neurotransmitter (Dopamin, Serotonin, GABA, Glutamat, Acetylcholin)
- Gehirn: Grosshirn, Kleinhirn, Stammhirn, Grosshirnrinde (Frontal, Temporal, Parietal, Okzipital), Lateralisation (Broca links, Wernicke links)
- Methoden: EEG (zeitlich hochaufloesend), fMRT (raeumlich hochaufloesend), PET (Stoffwechsel), TMS (Kausalitaet)

**Sozialpsychologie:**
- Attribution: Korrespondierender Schluss (Jones & Davis), Kovariationsmodell (Kelley), fundamentale Attributionfehler, selbstdienende Verzerrung
- Einstellungen: ABC-Modell (Affekt, Verhalten, Kognition), ELM (Petty & Cacioppo: zentraler/peripherer Weg), kognitive Dissonanz (Festinger)
- Konformitaet: Asch-Linienexperiment, Normativer vs. Informationsbeeinflussung
- Gehorsam: Milgram-Experiment
- Gruppen: Gruppendenken (Janis), Soziales Faulenzen (Ringelmann), Risikoverlagerung

**Entwicklungspsychologie:**
- Piaget: Sensorimotorisch (0-2), Praeoperational (2-7), Konkret-operational (7-11), Formal-operational (11+)
- Vygotskij: Zone der proximalen Entwicklung (ZPD), Scaffolding
- Bowlby/Ainsworth: Bindungstheorie, Strange Situation, sicher, unsicher-vermeidend, unsicher-ambivalent, desorganisiert
- Erikson: 8 Entwicklungsphasen (Vertrauen vs. Misstrauen, Autonomie vs. Scham...)
- Kohlberg: Praekonventionell, Konventionell, Postkonventionell

**Methodenlehre / Statistik:**
- Skalenniveaus: Nominal, Ordinal, Intervall, Verhaeltnis
- Lagemasse: Modus, Median, Mittelwert
- Streumasse: Spannweite, Varianz, Standardabweichung
- Verteilungen: Normalverteilung, z-Transformation, zentraler Grenzwertsatz
- Inferenz: Nullhypothese, Signifikanzniveau (alpha = 0.05), p-Wert, Effektstaerke (Cohens d), Teststaerke
- Tests: t-Test (unabhaengig/paired), ANOVA, Chi-Quadrat, Korrelation (Pearson, Spearman)

---

## 13. ADHS-Design-Prinzipien (Kernreferenz) {#13-adhs-design-prinzipien}

> Zusammenfassung der Forschung aus AGENT-R2. Diese Prinzipien ueberschreiben bei Konflikt alle anderen Design-Regeln.

### 13.1 Neuroscience-Referenz

| Challenge | Working Memory Limit | Design Solution |
|-----------|---------------------|-----------------|
| Working Memory | 3-5 Items (statt 7+/-2) | One action per screen, Wizard flows |
| Time Blindness | Kein Zeitgefuehl | Visuelle Countdowns, konkrete Dauerangaben |
| Task Initiation | Schwierigkeiten mit Starten | Offensichtlicher erster Schritt, niedrige Reibung |
| Dopamine Seeking | Beduerfnis nach Feedback | Sofortiges Feedback, Milestones, Celebrations |
| Object Permanence | "Out of sight = out of mind" | Alles sichtbar, keine versteckten Menus |
| Context Switching | Teure Kontextwechsel | Minimale Transitions, inline Editing |
| Rejection Sensitivity | Starke Reaktion auf "Fehler" | Mitfuehlende Sprache, NIEMALS Shame |

### 13.2 Core Principles (nach Prioritaet)

1. **Kognitive Entlastung (ruthless):** One primary action per screen. Wizard/stepped flows. Sensible defaults. "You are here"-Indikatoren.

2. **Zeit konkretisieren:** Immer Timer fuer lange Operationen. Fortschrittsbalken mit %. "3 x 5min-Sitzungen" statt "ca. 15min".

3. **Alles feiern:** Sofortiges visuelles Feedback. Milestones. Verzeihende Streaks ("86% -- das ist immer noch sehr gut!"). Achievements auch fuer kleine Gewinne.

4. **Sichtbarer Zustand & Gedaechtnis:** Persistente Navigation. Status immer sichtbar. Thumbnails ueber Textlisten. Konsistente Positionen.

5. **Vergebung & Erholung:** Streak-Freeze. "Das Leben passiert"-Erkennung. Flexible Ziele. Fokus auf Fortschritt, nicht Perfektion. NIEMALS Shame-Language.

### 13.3 Anti-Patterns (STRENG VERBOTEN)

| Anti-Pattern | Warum schaedlich | Stattdessen |
|--------------|------------------|-------------|
| **Punishment Design** | Gebrochene Streaks, "Fehlgeschlagen"-Nachrichten | Fortschritt feiern, Recovery-Optionen |
| **Information Hiding** | Kritische Info in Untermenus, Tooltips | Wichtige Info bleibt sichtbar |
| **Vage Zeitangaben** | "Bald", " spaeter", "eine Weile" | Konkrete Zahlen, Countdowns, Fortschrittsbalken |
| **Choice Overload** | 10+ Optionen ohne klaren Default | Max. 3-4 Optionen, Smart Defaults |
| **Hyperkompetitive Gamification** | Leaderboards, oeffentliche Rankings | Persoenliche Fortschritte, interne Motivation |
| **Infantilisierende UI** | Comic-Schriften, Cartoon-Illustrationen | Clean, modern, professionell (Notion-Stil) |

### 13.4 Die Goldene Regel

> "If a neurotypical person finds it 'too much', it's probably right for ADHD."
> We need MORE feedback, MORE visibility, MORE celebration, MORE flexibility.

---

## 14. Deutsche Typografie- und Sprachstandards {#14-typografie-standards}

> Alle UI-Texte MUeSSEN nach DIN 5008 und deutschen Typografie-Konventionen formatiert sein.

### 14.1 Typografische Zeichen

| Zeichen | Unicode | Verwendung | Beispiel |
|---------|---------|------------|----------|
| " | U+201E | Oeffnendes Anfuehrungszeichen | "Beispiel" |
| " | U+201C | Schliessendes Anfuehrungszeichen | "Beispiel" |
| ' | U+201A | Einfaches oeffnendes Anfuehrungszeichen | 'Beispiel' |
| ' | U+2018 | Einfaches schliessendes Anfuehrungszeichen | 'Beispiel' |
| -- | U+2013 | En-Dash (Gedankenstrich, Bereiche) | 2020--2025, S. 15--20 |
| ... | U+2026 | Auslassungspunkte | Er dachte nach ... |
| ' | U+2019 | Apostroph | Klauss Haus |
| x | U+00D7 | Malzeichen | 5 x 3 |

### 14.2 Zahlen und Einheiten

- **Nicht umbrechendes Leerzeichen** (U+00A0) vor Einheiten: `5 kg`, `20 Grad C`, `100 km/h`, `50 Euro`
- **Prozent:** Leerzeichen vor %: `25 %`
- **Dezimaltrennzeichen:** Immer Komma: `3,14`
- **Tausendertrennung:** Duenne Leerzeichen (DIN 5008): `1 000 000`
- **Uhrzeit:** 24h-Format mit Doppelpunkt: `14:30 Uhr`
- **Datum:** `24.12.2024`

### 14.3 Sprachstil

- **Anrede:** Informell ("du"), aber professionell
- **Saetze:** Kurz und aktiv. Subjekte vorne. Kein Passiv wo nicht noetig.
- **Fehlermeldungen:** "Es ist ein Fehler aufgetreten" -> "Wir konnten die Datei nicht speichern. Bitte pruefe, ob genug Speicherplatz vorhanden ist."
- **Begruendungen immer erklaeren:** Nicht "Fehler 404" sondern "Diese Seite konnte nicht gefunden werden. Moeglicherweise wurde sie verschoben."
- **Positive Formulierung:** "Nicht falsch!" -> "Fast richtig!"

---

## 15. Erfolgskriterien und Abschluss-Checkliste {#15-erfolgskriterien}

### 15.1 Funktionale Kriterien

| # | Kriterium | Gewichtung |
|---|-----------|------------|
| F1 | App startet lokal ohne Server/Internet | MUSS |
| F2 | Nutzer kann Karten aller 4 Typen erstellen, bearbeiten, loeschen | MUSS |
| F3 | Drei Lernmodi (Paradigma, Definition, Merken) sind voll funktionsfaehig | MUSS |
| F4 | Leitner-Box-Algorithmus mit adaptivem Scheduling funktioniert korrekt | MUSS |
| F5 | Wissensbasis ist vollstaendig und durchsuchbar | MUSS |
| F6 | Keine vorseedeten Karten in Hauptkartei (nur Nutzer-generiert) | MUSS |
| F7 | Wissensbasis-Karten koennen mit einem Klick in Hauptkartei uebernommen werden | MUSS |
| F8 | PIN-System ist aktivierbar/deaktivierbar und funktioniert | MUSS |
| F9 | Onboarding-Tour laeuft beim Erststart, kann uebersprungen werden | MUSS |
| F10 | Dark Mode, Light Mode, High-Contrast-Modus verfuegbar | MUSS |
| F11 | Fokus-Modus deaktiviert alle Animationen | MUSS |
| F12 | App-Tour kann in Einstellungen erneut gestartet werden | MUSS |
| F13 | Auto-Backup funktioniert (taeglich, rotierend, 7 Tage) | SOLL |
| F14 | Import/Export von Karten (Anki-kompatibel) funktioniert | SOLL |
| F15 | Tastaturkuerzel fuer alle Hauptfunktionen | SOLL |

### 15.2 UI/UX-Kriterien

| # | Kriterium | Gewichtung |
|---|-----------|------------|
| U1 | 100 % deutsche UI, typografisch korrekt | MUSS |
| U2 | UI wirkt professionell, NICHT infantilisierend | MUSS |
| U3 | ADHS-konform: Eine Aktion pro Screen | MUSS |
| U4 | ADHS-konform: Konkrete Zeitangaben, Fortschrittsbalken mit % | MUSS |
| U5 | ADHS-konform: Sofortiges Feedback auf Nutzeraktionen | MUSS |
| U6 | ADHS-konform: Keine Shame-Nachrichten, positive Formulierungen | MUSS |
| U7 | ADHS-konform: Persistente Navigation, keine versteckten Menus | MUSS |
| U8 | Animationen subtil (<300ms), reduzierte Bewegung unterstuetzt | MUSS |
| U9 | WCAG 2.2 AA konform (Kontrast, Fokus, Labels, Navigation) | MUSS |
| U10 | Font-Groesse NIEMALS unter 14px (UI) bzw. 16px (Body) | MUSS |

### 15.3 Qualitaetskriterien

| # | Kriterium | Ziel |
|---|-----------|------|
| Q1 | Unit-Test-Coverage | >= 90 % |
| Q2 | E2E-Tests fuer alle 10 User Journeys | 100 % |
| Q3 | Keine TypeScript-Fehler (strict: true) | 0 |
| Q4 | Lighthouse Accessibility Score | 100 |
| Q5 | Lighthouse Performance Score | >= 90 |
| Q6 | Bundle-Groesse (Tauri) | < 15 MB |
| Q7 | RAM-Usage at Idle | < 100 MB |
| Q8 | Cold-Start-Zeit | < 1 Sekunde |

### 15.4 Abschluss-Definition of Done

Die Swarm gilt als ERFOLGREICH abgeschlossen, wenn ALLE MUSS-Kriterien (F1-F12, U1-U10) erfuellt sind, Q1-Q5 erreicht sind, und die App auf allen drei Plattformen (Win/Mac/Linux) erfolgreich gebaut und gestartet werden kann. SOLL-Kriterien sind optional, aber anzustreben.

---

## 16. Anhang: Sub-Prompts fuer dedizierte Recherche-Agenten {#16-anhang-subprompts}

> Die folgenden Sub-Prompts koennen an spezialisierte Recherche-Agenten in der Swarm uebergeben werden, um spezifische Wissensluecken zu schliessen.

### Sub-Prompt R1-A: "Spaced Repetition Meta-Analyse"
```
Recherchiere Meta-Analysen und Review-Artikel zum Thema
"spaced repetition" und "distributed practice" aus der Zeit
2000-2024. Fokus auf:
1. Effektgroessen im Vergleich zu massed practice
2. Optimaler Spacing-Interval (kurzfristig vs. langfristig)
3. Interaktion mit Alter und kognitiven Faehigkeiten
4. Digitale vs. analoge Implementation

Nutze den Kimi Pro Data Feature (scholar data source) und
das offene Internet. Output: Strukturierter Bericht mit
vollstaendigen Zitationen.
```

### Sub-Prompt R1-B: "Cognitive Load in Educational Software"
```
Recherchiere empirische Studien zur kognitiven Belastung
durch Lernsoftware (2000-2024). Fokus auf:
1. Mayer's Cognitive Theory of Multimedia Learning --
   empirische Validierung
2. Unterschiede in kognitiver Belastung zwischen
   verschiedenen UI-Dichten
3. Individualisierung nach Working Memory Capacity
4. Messmethoden fuer kognitive Belastung in digitalen
   Lernumgebungen (NASA-TLX, pupillometry, etc.)

Nutze den Kimi Pro Data Feature und das offene Internet.
Output: Design-Implikationen fuer Lernsoftware.
```

### Sub-Prompt R2-A: "ADHS-Specific Interface Patterns"
```
Recherchiere Design-Patterns fuer Nutzer mit ADHS in
bildungsbezogenen digitalen Tools (2015-2024). Fokus auf:
1. Welche UI-Patterns empirisch die Aufgabenbewaeltigung
   verbessern?
2. Welche Gamification-Elemente wirken positiv vs. negativ?
3. Time-Management-Features (Timer, Countdowns, Estimation)
4. Vergleichstudien: ADHS-optimiert vs. Standard-UI

Nutze den Kimi Pro Data Feature und das offene Internet.
Output: Evidenzbasierte Pattern-Library mit Bewertung.
```

### Sub-Prompt R2-B: "ADHS and Rejection Sensitivity in UI"
```
Recherchiere das Phaenomen der Rejection Sensitivity
Dysphoria (RSD) bei ADHS und seine Implikationen fuer
UI/UX-Design. Fokus auf:
1. Wie aussert sich RSD in digitalen Interaktionen?
2. Welche Design-Entscheidungen koennen RSD ausloesen?
3. Welche Formulierungen und Feedback-Mechanismen sind
   protektiv?
4. Best Practices fuer "compassionate UX copy"

Nutze den Kimi Pro Data Feature und das offene Internet.
Output: Leitfaden fuer RSD-freundliches UX-Writing.
```

### Sub-Prompt W1-A: "German Psychology Textbook Analysis"
```
Analysiere die Inhaltsverzeichnisse und Kapitelstrukturen
der fuehrenden deutschen Lehrbuecher fuer das erste
Psychologie-Semester:
1. Becker-Carus & Wendt: "Allgemeine Psychologie"
2. Herrmann & Grabowski: "Psychologie fuer den Bachelor"
3. Gerrig & Zimbardo: "Psychologie" (deutsche Ausgabe)
4. Eysenck: "Psychologie" (deutsche Ausgabe)

Identifiziere die Ueberschneidungen (Kernbegriffe, die in
ALLEN Werken vorkommen) und erstelle eine konsolidierte
Begriffsliste fuer die Wissensbasis.

Nutze das offene Internet. Output: Konsolidierte
Begriffsliste mit Quellenangaben.
```

---

## Anhang B: Laufzeit-Anhaenge fuer die Swarm {#anhang-b-anhaenge}

> **Anweisung fuer den Swarm-Koordinator:** Die folgenden Dateien wurden im Rahmen der Prompt-Erstellung recherchiert und sollten an die dedizierten Recherche-Agenten (Wave 0) sowie die entsprechenden Implementierungs-Agenten angehaengt werden, um den Kontext zu vertiefen.

### Begleitdateien (im Verzeichnis `research/`):

| Datei | Inhalt | Ziel-Agent |
|-------|--------|------------|
| `spaced_repetition_papers.csv` | 7 Paper zu Spaced Repetition, Leitner-System, adaptivem Lernen (2000-2024) mit Zitationsdaten | AGENT-R1, AGENT-F1 |
| `attention_mechanism_papers.csv` | 9 Paper zu Working Memory, Attention, Multimedia Learning (2006-2019) mit Zitationsdaten | AGENT-R1, AGENT-F1 |
| `leitner_algorithm_papers.csv` | 7 Paper zum Leitner-System und adaptiven Scheduling-Algorithmen | AGENT-R1, AGENT-F1 |
| `adhd_learning_papers.csv` | 2 Paper zu ADHS-UI/UX in digitalen Lernumgebungen (2023-2024) | AGENT-R2, AGENT-U1 |

### Nutzungshinweis:
- Diese CSV-Dateien enthalten Titel, Autoren, Jahr, Zitationszahlen und Abstracts
- Sie dienen als **Startpunkt** fuer die Recherche-Agenten -- die Agenten sollen den Kimi Pro Data Feature nutzen, um diese Funde zu verifizieren und zu erweitern
- Die Zitationszahlen zeigen die relative wissenschaftliche Relevanz
- Agenten sollen mindestens 5 zusaetzliche Quellen pro Feld finden

---

**ENDE DES MASTER-SWARM-PROMPTS**

> **Hinweis an den Swarm-Koordinator:** Dieser Prompt ist als autoritatives Steuerdokument zu behandeln. Jeder Agent in der Swarm muss die hier definierten Standards, Architekturentscheidungen und Design-Prinzipien einhalten. Bei Unklarheiten hat der Output des dedizierten Recherche-Agenten (Wave 0) Vorrang vor allgemeinem Wissen. Die App ist fuer den Nutzer gedacht, nicht fuer den Entwickler -- jede Entscheidung muss den Nutzer (eine ADHS-Erstsemester-Studentin Psychologie) im Zentrum haben.
