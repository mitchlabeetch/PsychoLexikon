# PSYCHLERN — Shared Style Manifest

## Sprach- und Tonfall-Vorgaben

- **Sprache:** Akademisches Hochdeutsch (Fachsprache der Psychologie). Kein Englisch in der UI.
- **Tonfall:** "Vulgarisiert, aber NICHT reduziert" — konkret, metapherngestützt, akademisch respektabel.
- **Du-Form** für direkte Ansprache; sonst impersonal-sachlich.
- **Umlaute:** Ä, Ö, Ü, ß — UTF-8 throughout. Keine AE-OE-UE-Ersatzschreibungen.
- **Fachbegriffe:** Erstnennung mit deutscher Übersetzung/Paraphrase in Klammern; danach Fachbegriff allein.

## ADHD-Formatierungsregeln (verpflichtend)

1. **Absatzlänge:** Maximal 3 Sätze pro Absatz. Nach 3 Sätzen kommt ein Zwischentitel oder visuelle Trennung.
2. **Zwischentitel:** Alle 100–150 Wörter ein beschreibender Zwischentitel (H3 oder H4). Keine generischen "Zusammenfassung"-Titel — beschreibend, informativ.
3. **Progressive Disclosure:**
   - Ebene 1: Kernidee in einem Satz (fett oder hervorgehoben)
   - Ebene 2: Erklärung in 1–2 Sätzen
   - Ebene 3: Nuance, Kontroverse oder Formalismus
4. **Bullet-Lists:** Frei verwenden für Aufzählungen ab 3 Elementen.
5. **Whitespace:** Generous vertical spacing zwischen Absätzen.

## Zitationsstandard (APA 7, deutsche Lokalisierung)

### Kurzzitate im Text
- 1 Autor: (Müller, 2019)
- 2 Autoren: (Müller & Schmidt, 2019)
- 3+ Autoren: (Müller et al., 2019)
- Im Fließtext: Müller und Schmidt (2019) fanden...
- In Klammern: (Müller & Schmidt, 2019)

### Quellenverzeichnis
- Alle Autoren nennen (kein et al. in der Liste)
- DOI wo verfügbar; sonst URL oder Verlag
- Auflage in Klammern nach dem Titel

### highlight_red-Regel
Jeder `highlight_red`-Begruch verweist auf eine konkrete Quelle aus `source_architecture.md`. Tooltip zeigt Kurzzitation.

## Highlight-System

### Blau — Definitorisch (`<mark class="def">`)
- Jeder zentrale Fachbegriff wird beim ersten Vorkommen blau hervorgehoben.
- Tooltip: Plain-Deutsch-Erklärung des Begriffs im jeweiligen Kontext (nicht Wörterbuch-Definition, sondern erklärend-situativ).
- Beispiel: "Das **Aktionspotential** ist ein kurzzeitiger, all-oder-nichts-Spannungsimpuls, der entlang einer Nervenfaser läuft."

### Rot — Attribuiert (`<mark class="src">`)
- Jede Theorie-Zuschreibung, jede empirische Behauptung und jede Zahlenangabe mit Quellenbezug wird rot hervorgehoben.
- Tooltip: APA-Kurzzitation + 1-Satz-Kontext.
- Beispiel: "Baddeley et al. (1974) schlugen das Arbeitsgedächtnis als multikomponentiges System vor."

## Qualitätsgatter pro Seite

- [ ] Mindestens 1 Alltagsbeispiel pro Thema
- [ ] Mindestens 1 Inline-SVG pro Thema, maximal 2
- [ ] Jedes SVG hat eine 1-Satz-Deutsche Caption
- [ ] Kein Absatz >3 Sätze ohne Zwischentitel
- [ ] Mindestens 2 akademische Quellen zitiert
- [ ] Alle highlight_blue haben Tooltip-Text
- [ ] Alle highlight_red haben verifizierbare Quelle
- [ ] Keine bloßen Stichpunkt-Wände — erklärender Text zwingend

## Fachterminologische Konsistenz

| Begriff | Standardisierte Form | Vermiedene Varianten |
|---------|---------------------|----------------------|
| Arbeitsgedächtnis | Arbeitsgedächtnis | Kurzzeitgedächtnis, Kurzzeitspeicher |
| Aktionspotential | Aktionspotential | Nervenimpuls (nur umgangssprachlich) |
| Synapse | Synapse | Nervenknoten |
| Validität | Validität | Gültigkeit |
| Reliabilität | Reliabilität | Zuverlässigkeit |
| Objektivität | Objektivität | Unvoreingenommenheit |
| Prägnanz | Prägnanz | Einfachheit, Klarheit |
| Reiz-Reaktions-Koppelung | Reiz-Reaktions-Koppelung | Stimulus-Response |
| Verstärkung | Verstärkung | Belohnung (nur im Alltagsbeispiel erlaubt) |
| Konditionierung | Konditionierung | Konditionierung (nicht Conditioning) |
| Intelligenzstruktur | Intelligenzstruktur | Strukturmodell |
| Attribution | Attribution | Zuschreibung (erstnennung erlaubt) |
| Faktorenmodell | Faktorenmodell | Faktorenstruktur |
| Signifikanzniveau | Signifikanzniveau | Alpha-Niveau (als Synonym erlaubt) |
| p-Wert | p-Wert | Signifikanzwert |
| Fehler 1. Art | Fehler 1. Art | Alpha-Fehler (als Synonym erlaubt) |
| Fehler 2. Art | Fehler 2. Art | Beta-Fehler (als Synonym erlaubt) |
| Gütekriterien | Gütekriterien | Qualitätskriterien |
