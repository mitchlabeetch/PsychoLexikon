export function PiagetStagesSVG() {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
    >
      <title>Piagets vier kognitive Entwicklungsstadien als aufeinanderfolgende Phasen</title>
      <desc>
        Ein vertikales Flussdiagramm, das die vier Entwicklungsstadien Piagets
        mit ihren Altersangaben und den Uebergangsmustern Assimilation,
        Akkommodation und Aequilibration abbildet.
      </desc>

      {/* Title */}
      <text
        x="200"
        y="22"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fontFamily="'Bodoni Moda', serif"
        fill="#1a1a1a"
      >
        Piagets vier Entwicklungsstadien
      </text>

      {/* Stage 1: Sensorimotorisch */}
      <rect x="40" y="40" width="320" height="55" rx="4" fill="#f4b8c5" fillOpacity="0.10" stroke="#1a1a1a" strokeWidth="2" />
      <text x="200" y="65" textAnchor="middle" fontSize="12" fontWeight="600" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Sensorimotorisch
      </text>
      <text x="200" y="82" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555555">
        (0–2 J.)
      </text>
      {/* Symbol: circle with dot */}
      <circle cx="345" cy="67" r="10" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <circle cx="345" cy="67" r="3" fill="#1a1a1a" />

      {/* Arrow 1→2 */}
      <line x1="200" y1="95" x2="200" y2="115" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#arrowhead2)" />
      <text x="200" y="110" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Assimilation ↔ Akkommodation
      </text>

      {/* Stage 2: Präoperational */}
      <rect x="40" y="120" width="320" height="55" rx="4" fill="#f4b8c5" fillOpacity="0.10" stroke="#1a1a1a" strokeWidth="2" />
      <text x="200" y="145" textAnchor="middle" fontSize="12" fontWeight="600" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Präoperational
      </text>
      <text x="200" y="162" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555555">
        (2–7 J.)
      </text>
      {/* Symbol: speech bubble */}
      <path
        d="M 335 62 Q 335 55 345 55 Q 355 55 355 62 Q 355 72 345 72 Q 340 72 338 75 L 338 72 Q 335 72 335 62 Z"
        transform="translate(0, 62)"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />

      {/* Arrow 2→3 */}
      <line x1="200" y1="175" x2="200" y2="195" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#arrowhead2)" />
      <text x="200" y="190" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Zentriertes → Dezentriertes Denken
      </text>

      {/* Stage 3: Konkret-operational */}
      <rect x="40" y="200" width="320" height="55" rx="4" fill="#f4b8c5" fillOpacity="0.10" stroke="#1a1a1a" strokeWidth="2" />
      <text x="200" y="225" textAnchor="middle" fontSize="12" fontWeight="600" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Konkret-operational
      </text>
      <text x="200" y="242" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555555">
        (7–11 J.)
      </text>
      {/* Symbol: scale */}
      <line x1="338" y1="228" x2="352" y2="228" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="345" y1="228" x2="345" y2="235" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="342" y1="235" x2="348" y2="235" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="340" y1="235" x2="340" y2="240" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="350" y1="235" x2="350" y2="240" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="338" y1="240" x2="352" y2="240" stroke="#1a1a1a" strokeWidth="1.5" />

      {/* Arrow 3→4 */}
      <line x1="200" y1="255" x2="200" y2="275" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#arrowhead2)" />
      <text x="200" y="270" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Konkret → Abstrakt
      </text>

      {/* Stage 4: Formal-operational */}
      <rect x="40" y="280" width="320" height="55" rx="4" fill="#f4b8c5" fillOpacity="0.10" stroke="#1a1a1a" strokeWidth="2" />
      <text x="200" y="305" textAnchor="middle" fontSize="12" fontWeight="600" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Formal-operational
      </text>
      <text x="200" y="322" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555555">
        (11+ J.)
      </text>
      {/* Symbol: thought bubble with question mark */}
      <circle cx="345" cy="308" r="10" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="345" y="312" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        ?
      </text>
      <circle cx="355" cy="318" r="3" fill="none" stroke="#1a1a1a" strokeWidth="1" />
      <circle cx="360" cy="323" r="1.5" fill="none" stroke="#1a1a1a" strokeWidth="1" />

      {/* Bottom label */}
      <text x="200" y="360" textAnchor="middle" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555555" fontStyle="italic">
        Aequilibration = Motor der Stufenfolge
      </text>

      <defs>
        <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#1a1a1a" />
        </marker>
      </defs>
    </svg>
  )
}
