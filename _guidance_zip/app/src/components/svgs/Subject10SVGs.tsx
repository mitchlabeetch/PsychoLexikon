export function Subject10SVG1() {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
    >
      <title>Entscheidungsmatrix: Alpha- und Beta-Fehler</title>
      <desc>
        Die 2x2-Matrix zeigt die vier möglichen Ergebnisse eines Hypothesentests
        und wie Fehler 1. Art (Alpha) und Fehler 2. Art (Beta) balancieren.
      </desc>

      {/* Matrix-Rahmen */}
      <rect x="80" y="60" width="240" height="160" fill="none" stroke="#1a1a1a" strokeWidth="2" />

      {/* Vertikale Trennung */}
      <line x1="200" y1="60" x2="200" y2="220" stroke="#1a1a1a" strokeWidth="1.5" />

      {/* Horizontale Trennung */}
      <line x1="80" y1="140" x2="320" y2="140" stroke="#1a1a1a" strokeWidth="1.5" />

      {/* Kopfzeile: Tatsächlicher Zustand */}
      <text x="200" y="50" fontSize="11" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">
        Tatsächlicher Zustand
      </text>
      <text x="140" y="78" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">H₀ wahr</text>
      <text x="260" y="78" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">H₁ wahr</text>

      {/* Kopfzeile links: Entscheidung */}
      <text x="45" y="140" fontSize="11" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600" transform="rotate(-90 45 140)">
        Entscheidung
      </text>

      {/* Zeilenbeschriftungen */}
      <text x="65" y="112" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="end">H₀ beibehalten</text>
      <text x="65" y="192" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="end">H₀ verwerfen</text>

      {/* Zelle 1: H₀ beibehalten + H₀ wahr = Richtig */}
      <text x="140" y="112" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Richtig</text>

      {/* Zelle 2: H₀ beibehalten + H₁ wahr = Fehler 2. Art (β) */}
      <text x="260" y="105" fontSize="10" fill="#dc2626" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">Fehler 2. Art</text>
      <text x="260" y="120" fontSize="10" fill="#dc2626" fontFamily="DM Sans, sans-serif" textAnchor="middle">(β)</text>

      {/* Zelle 3: H₀ verwerfen + H₀ wahr = Fehler 1. Art (α) */}
      <text x="140" y="185" fontSize="10" fill="#dc2626" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">Fehler 1. Art</text>
      <text x="140" y="200" fontSize="10" fill="#dc2626" fontFamily="DM Sans, sans-serif" textAnchor="middle">(α)</text>

      {/* Zelle 4: H₀ verwerfen + H₁ wahr = Richtig (Teststärke) */}
      <text x="260" y="185" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Richtig</text>
      <text x="260" y="200" fontSize="9" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">(Teststärke = 1−β)</text>

      {/* Rechter Pfeil: α auf β */}
      <line x1="340" y1="185" x2="340" y2="105" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="340,105 335,112 345,112" fill="#1a1a1a" />
      <text x="355" y="148" fontSize="9" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="start">
        Wenn α sinkt,
      </text>
      <text x="355" y="160" fontSize="9" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="start">
        steigt β
      </text>

      {/* Unterer Pfeil: Stichprobe */}
      <line x1="80" y1="240" x2="320" y2="240" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="320,240 313,235 313,245" fill="#1a1a1a" />
      <text x="200" y="258" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">
        Stichprobe ↑ → beide Fehler ↓
      </text>
    </svg>
  );
}
