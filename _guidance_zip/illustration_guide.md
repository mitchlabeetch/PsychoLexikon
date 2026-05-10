# PSYCHLERN — Illustration Style Guide

## SVG-Standard (Inline, kein externes Asset)

- **Format:** Inline SVG im React-JSX
- **ViewBox:** 0 0 400 300 (standard); 0 0 400 400 für quadratische
- **Stroke:** `#1a1a1a` (nur Linien, keine Flächenfüllung außer gezielter Akzent)
- **Background:** Transparent oder `#f8f6f1` (page background)
- **Linewidth:** 2px für Hauptlinien, 1px für Hilfslinien
- **Style:** Clean line-art, isometrisch oder Querschnitt bei anatomischen Themen, Flussdiagramme bei Prozessen, Matrix-Gitter bei Modellen
- **Keine dekorativen Bilder:** Jedes SVG muss 1:1 zu einem benachbarten Absatz-Kernkonzept passen

## Typologie pro Thema

### Anatomisch / Biologisch (z. B. Aktionspotential, Synapse)
- Querschnitt-Darstellung
- Beschriftung mit deutschen Fachbegriffen (12px, DM Sans)
- Pfeile für Ionenfluss oder Transmitter-Freisetzung
- Zellmembran als dicke Linie, Organellen als einfache Konturen

### Prozess / Fluss (z. B. Konditionierung, Gedächtnis-Modell)
- Flussdiagramm mit Boxen und Pfeilen
- Boxen: abgerundete Rechtecke (rx="4")
- Pfeile: gerade oder abgewinkelt, beschriftet
- Entscheidungsrauten bei Verzweigungen

### Matrix / Struktur (z. B. BIS, Big Five)
- Raster-Gitter mit Zellen
- Achsen beschriftet
- Faktorbezeichnungen in Zellen
- Farbige Zell-Hintergründe nur im zugehörigen Tab-Farbton (leicht, 10% Opazität)

### Wahrnehmung / Optik (z. B. Gestaltgesetze)
- Geometrische Figuren, Linien, Kreise
- Vorher/Nachher-Vergleich nebeneinander
- Pfeile für Gruppierungsrichtung
- Prägnanz durch Linienvereinfachung sichtbar machen

## Caption-Regel
Jedes SVG hat direkt darunter eine 1-Satz-Unterschrift in deutsch, die sagt, was der Leser aus dem Bild extrahieren soll — keine bloße Beschreibung.

Beispiel:
> "Das SVG zeigt, wie Natriumionen (Na+) den Axonhillock erreichen und das Aktionspotential auslösen — der entscheidende Moment der all-oder-nichts-Regel."

## Barrierefreiheit
- Jedes `<svg>` hat ein `<title>`-Element als Alt-Text
- Jedes `<svg>` hat ein `<desc>`-Element mit 1-Satz-Beschreibung
- Keine animation-bedingten Zugänglichkeitsprobleme (statische SVGs)
