export function GestaltgesetzeDemo() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" role="img" aria-labelledby="ggTitle ggDesc">
      <title id="ggTitle">Demonstration der fünf klassischen Gestaltgesetze durch geometrische Anordnungen</title>
      <desc id="ggDesc">Fünf Panels zeigen, wie Nähe, Ähnlichkeit, gute Fortsetzung, Geschlossenheit und gemeinsame Region die automatische Gruppierung von Reizen steuern</desc>

      {/* Panel A — Gesetz der Nähe */}
      <rect x="10" y="10" width="120" height="85" fill="#f8f6f1" stroke="#ccc" strokeWidth="0.5" rx="4" />
      <text x="70" y="25" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Gesetz der Nähe</text>
      <circle cx="30" cy="45" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="30" cy="62" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="30" cy="79" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="45" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="62" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="79" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="90" cy="45" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="90" cy="62" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="90" cy="79" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="110" cy="45" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="110" cy="62" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="110" cy="79" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />

      {/* Panel B — Gesetz der Ähnlichkeit */}
      <rect x="140" y="10" width="120" height="85" fill="#f8f6f1" stroke="#ccc" strokeWidth="0.5" rx="4" />
      <text x="200" y="25" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Gesetz der Ähnlichkeit</text>
      <circle cx="160" cy="45" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="180" cy="45" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <rect x="218" y="40" width="10" height="10" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <rect x="238" y="40" width="10" height="10" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="160" cy="62" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="180" cy="62" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <rect x="218" y="57" width="10" height="10" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <rect x="238" y="57" width="10" height="10" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="160" cy="79" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="180" cy="79" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <rect x="218" y="74" width="10" height="10" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <rect x="238" y="74" width="10" height="10" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />

      {/* Panel C — Gesetz der guten Fortsetzung */}
      <rect x="270" y="10" width="120" height="85" fill="#f8f6f1" stroke="#ccc" strokeWidth="0.5" rx="4" />
      <text x="330" y="25" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Gute Fortsetzung</text>
      <path d="M 280 50 Q 300 40, 310 55 Q 320 70, 330 60 Q 340 50, 350 65 Q 360 80, 370 70" stroke="#1a1a1a" strokeWidth="2" fill="none" />
      <path d="M 280 65 Q 300 75, 310 60 Q 320 45, 330 55 Q 340 65, 350 50 Q 360 35, 370 45" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeDasharray="3,3" />

      {/* Panel D — Gesetz der Geschlossenheit */}
      <rect x="10" y="105" width="120" height="85" fill="#f8f6f1" stroke="#ccc" strokeWidth="0.5" rx="4" />
      <text x="70" y="120" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Geschlossenheit</text>
      <path d="M 35 150 A 20 20 0 0 1 55 130" stroke="#1a1a1a" strokeWidth="2" fill="none" />
      <path d="M 85 130 A 20 20 0 0 1 105 150" stroke="#1a1a1a" strokeWidth="2" fill="none" />
      <path d="M 105 170 A 20 20 0 0 1 85 190" stroke="#1a1a1a" strokeWidth="2" fill="none" />
      <path d="M 55 190 A 20 20 0 0 1 35 170" stroke="#1a1a1a" strokeWidth="2" fill="none" />

      {/* Panel E — Gesetz der gemeinsamen Region */}
      <rect x="140" y="105" width="250" height="85" fill="#f8f6f1" stroke="#ccc" strokeWidth="0.5" rx="4" />
      <text x="265" y="120" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Gemeinsame Region</text>
      <rect x="160" y="135" width="90" height="45" stroke="#1a1a1a" strokeWidth="1.5" fill="#c7b8ea" fillOpacity="0.15" rx="6" />
      <rect x="280" y="135" width="90" height="45" stroke="#1a1a1a" strokeWidth="1.5" fill="#c7b8ea" fillOpacity="0.15" rx="6" />
      <circle cx="185" cy="157" r="5" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      <circle cx="205" cy="150" r="5" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      <circle cx="225" cy="162" r="5" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      <circle cx="305" cy="157" r="5" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      <circle cx="325" cy="150" r="5" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      <circle cx="345" cy="162" r="5" stroke="#1a1a1a" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function FigureGrundReversibilitaet() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-auto" role="img" aria-labelledby="fgTitle fgDesc">
      <title id="fgTitle">Klassische Vase-Gesicht-Figur als Demonstration der Reversibilität</title>
      <desc id="fgDesc">Zwei gegenüberliegende Gesichtsprofile erzeugen im Zwischenraum eine Vase — ein Paradebeispiel für wechselnde Figure-Grund-Organisation</desc>

      {/* Hintergrund-Linie für Grenze */}
      <line x1="200" y1="30" x2="200" y2="170" stroke="#ccc" strokeWidth="1" strokeDasharray="4,4" />

      {/* Linke Gesichtsprofil-Silhouette */}
      <path
        d="M 200 60
           C 180 60, 160 70, 150 90
           C 140 110, 145 130, 155 140
           C 165 150, 180 155, 200 155
           L 200 60 Z"
        fill="#1a1a1a"
      />

      {/* Rechte Gesichtsprofil-Silhouette */}
      <path
        d="M 200 60
           C 220 60, 240 70, 250 90
           C 260 110, 255 130, 245 140
           C 235 150, 220 155, 200 155
           L 200 60 Z"
        fill="#1a1a1a"
      />

      {/* Vase (weißer Zwischenraum) — schon durch den Hintergrund */}

      {/* Beschriftungen */}
      <text x="90" y="100" fontSize="11" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Gesichter als Figur</text>
      <text x="310" y="100" fontSize="11" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Vase als Figur</text>

      {/* Pfeile */}
      <line x1="130" y1="105" x2="150" y2="105" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#arrFg)" />
      <line x1="270" y1="105" x2="250" y2="105" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#arrFg)" />

      <text x="200" y="185" fontSize="11" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle" fontStyle="italic">
        Figure-Grund-Organisation und Reversibilität
      </text>

      <defs>
        <marker id="arrFg" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#1a1a1a" />
        </marker>
      </defs>
    </svg>
  );
}
