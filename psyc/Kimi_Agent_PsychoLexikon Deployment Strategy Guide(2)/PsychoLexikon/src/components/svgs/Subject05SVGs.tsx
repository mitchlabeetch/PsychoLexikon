export function BISMatrixSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
    >
      <title>BIS-Intersektionsmodell: 2 operative Faktoren kreuzen 3 Inhaltsfaktoren</title>
      <desc>
        Das Gitter zeigt die 6 Facetten des Berliner Intelligenzstrukturmodells,
        die aus der Kreuzung von Verarbeitungskapazität und -geschwindigkeit
        mit verbalen, numerischen und figuralen Inhalten entstehen.
      </desc>

      {/* Background fills for cells */}
      <rect x="60" y="70" width="160" height="55" fill="#f4b8c5" fillOpacity="0.10" />
      <rect x="220" y="70" width="160" height="55" fill="#f4b8c5" fillOpacity="0.10" />
      <rect x="60" y="125" width="160" height="55" fill="#f4b8c5" fillOpacity="0.10" />
      <rect x="220" y="125" width="160" height="55" fill="#f4b8c5" fillOpacity="0.10" />
      <rect x="60" y="180" width="160" height="55" fill="#f4b8c5" fillOpacity="0.10" />
      <rect x="220" y="180" width="160" height="55" fill="#f4b8c5" fillOpacity="0.10" />

      {/* Outer grid frame */}
      <rect x="60" y="70" width="320" height="165" fill="none" stroke="#1a1a1a" strokeWidth="2" />

      {/* Vertical divider */}
      <line x1="220" y1="70" x2="220" y2="235" stroke="#1a1a1a" strokeWidth="1" />

      {/* Horizontal dividers */}
      <line x1="60" y1="125" x2="380" y2="125" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="60" y1="180" x2="380" y2="180" stroke="#1a1a1a" strokeWidth="1" />

      {/* Column headers */}
      <text x="140" y="45" textAnchor="middle" fontSize="11" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Verarbeitungskapazität
      </text>
      <text x="300" y="45" textAnchor="middle" fontSize="11" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Verarbeitungsgeschwindigkeit
      </text>

      {/* Row headers */}
      <text x="30" y="100" textAnchor="middle" fontSize="11" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Verbal
      </text>
      <text x="30" y="155" textAnchor="middle" fontSize="11" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Numerisch
      </text>
      <text x="30" y="210" textAnchor="middle" fontSize="11" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Figural
      </text>

      {/* Left axis label */}
      <text
        x="12"
        y="155"
        textAnchor="middle"
        fontSize="10"
        fontFamily="DM Sans, sans-serif"
        fill="#555555"
        transform="rotate(-90, 12, 155)"
      >
        Inhaltsfaktoren
      </text>

      {/* Top axis label */}
      <text x="220" y="18" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555555">
        Operative Faktoren
      </text>

      {/* Cell content */}
      <text x="140" y="95" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Verbales Gedächtnis
      </text>
      <text x="140" y="108" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        / Verständnis
      </text>

      <text x="300" y="95" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Schnelles Sprach-
      </text>
      <text x="300" y="108" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        vergleichen
      </text>

      <text x="140" y="150" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Komplexe Zahlen-
      </text>
      <text x="140" y="163" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        logik
      </text>

      <text x="300" y="157" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Schnelles Rechnen
      </text>

      <text x="140" y="205" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Räumliches
      </text>
      <text x="140" y="218" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Vorstellen
      </text>

      <text x="300" y="205" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Schnelle Form-
      </text>
      <text x="300" y="218" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        vergleiche
      </text>

      {/* General factor arrow */}
      <line x1="220" y1="255" x2="220" y2="270" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
      <text x="220" y="288" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555555" fontStyle="italic">
        Allgemeiner Faktor (g)
      </text>

      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#1a1a1a" />
        </marker>
      </defs>
    </svg>
  )
}
