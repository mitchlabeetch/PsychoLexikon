export function Subject09SVG1() {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
    >
      <title>Interne und Externe Validität im Experiment</title>
      <desc>
        Flussdiagramm zeigt, wie Störvariablen die Ursache-Wirkung-Schätzung
        beeinflussen und wie Randomisierung sowie Kontrollgruppe als Schutz wirken.
      </desc>

      {/* Ursache (UV) - Raute */}
      <polygon points="80,100 120,80 160,100 120,120" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <text x="120" y="104" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Ursache (UV)</text>

      {/* Wirkung (AV) - Raute */}
      <polygon points="280,100 320,80 360,100 320,120" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <text x="320" y="104" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Wirkung (AV)</text>

      {/* Hauptpfeil */}
      <line x1="160" y1="100" x2="280" y2="100" stroke="#1a1a1a" strokeWidth="2" />
      <polygon points="280,100 270,95 270,105" fill="#1a1a1a" />

      {/* Schutzschild - Randomisierung */}
      <rect x="160" y="65" width="55" height="16" rx="3" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="187" y="77" fontSize="8" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Randomisierung</text>

      {/* Schutzschild - Kontrollgruppe */}
      <rect x="225" y="65" width="55" height="16" rx="3" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="252" y="77" fontSize="8" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Kontrollgruppe</text>

      {/* Lecks unter dem Pfeil */}
      {/* History */}
      <path d="M 175,115 Q 180,125 185,115 Q 190,125 195,115" fill="none" stroke="#dc2626" strokeWidth="1.5" />
      <text x="185" y="135" fontSize="8" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">History</text>

      {/* Maturation */}
      <path d="M 205,115 Q 210,125 215,115 Q 220,125 225,115" fill="none" stroke="#dc2626" strokeWidth="1.5" />
      <text x="215" y="135" fontSize="8" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Maturation</text>

      {/* Selection */}
      <path d="M 235,115 Q 240,125 245,115 Q 250,125 255,115" fill="none" stroke="#dc2626" strokeWidth="1.5" />
      <text x="245" y="135" fontSize="8" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Selection</text>

      {/* Mortality */}
      <path d="M 265,115 Q 270,125 275,115 Q 280,125 285,115" fill="none" stroke="#dc2626" strokeWidth="1.5" />
      <text x="275" y="135" fontSize="8" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Mortality</text>

      {/* Bedingungskonfounding - gestrichelter Bogen */}
      <path d="M 320,120 Q 340,160 280,160 Q 220,160 200,140" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="310" y="170" fontSize="8" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Bedingungskonfounding</text>

      {/* Skalen unten - Interne Validität */}
      <rect x="60" y="210" width="120" height="24" rx="3" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <text x="120" y="227" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">Interne Validität</text>

      {/* Skalen unten - Externe Validität */}
      <rect x="220" y="210" width="120" height="24" rx="3" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <text x="280" y="227" fontSize="10" fill="#888888" fontFamily="DM Sans, sans-serif" textAnchor="middle">Externe Validität</text>

      {/* Trade-off Pfeil */}
      <line x1="180" y1="222" x2="220" y2="222" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 2" />
      <polygon points="220,222 215,218 215,226" fill="#1a1a1a" />
      <text x="200" y="240" fontSize="9" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Trade-off</text>
    </svg>
  );
}
