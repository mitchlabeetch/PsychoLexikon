export function AttributionFlowSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
    >
      <title>Attributionsprozess nach Weiner</title>
      <desc>
        Flussdiagramm der drei Attributiondimensionen und ihrer Auswirkungen
        auf Emotion und Verhalten.
      </desc>

      {/* Box 1: Ereignis */}
      <rect x="20" y="110" width="75" height="50" rx="4" fill="#a8d8ea" fillOpacity="0.10" stroke="#1a1a1a" strokeWidth="2" />
      <text x="57" y="130" textAnchor="middle" fontSize="11" fontWeight="600" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Ereignis
      </text>
      <text x="57" y="146" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        (Erfolg / Misserfolg)
      </text>

      {/* Arrow 1→2 */}
      <line x1="95" y1="135" x2="120" y2="135" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#arrowhead7)" />

      {/* Box 2: Attribution (larger, with tiers) */}
      <rect x="120" y="80" width="150" height="110" rx="4" fill="#a8d8ea" fillOpacity="0.10" stroke="#1a1a1a" strokeWidth="2" />
      <text x="195" y="98" textAnchor="middle" fontSize="12" fontWeight="600" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Attribution
      </text>
      {/* Tier 1 */}
      <line x1="130" y1="108" x2="260" y2="108" stroke="#1a1a1a" strokeWidth="0.5" />
      <text x="195" y="122" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Locus: intern ↔ extern
      </text>
      {/* Tier 2 */}
      <line x1="130" y1="132" x2="260" y2="132" stroke="#1a1a1a" strokeWidth="0.5" />
      <text x="195" y="146" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Stabilitaet: stabil ↔ instabil
      </text>
      {/* Tier 3 */}
      <line x1="130" y1="156" x2="260" y2="156" stroke="#1a1a1a" strokeWidth="0.5" />
      <text x="195" y="170" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Kontrollierbarkeit: ja ↔ nein
      </text>

      {/* Arrow 2→3 */}
      <line x1="270" y1="135" x2="295" y2="135" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#arrowhead7)" />

      {/* Box 3: Emotion */}
      <rect x="295" y="110" width="80" height="50" rx="4" fill="#a8d8ea" fillOpacity="0.10" stroke="#1a1a1a" strokeWidth="2" />
      <text x="335" y="130" textAnchor="middle" fontSize="11" fontWeight="600" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Emotion
      </text>
      <text x="335" y="146" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        (Stolz / Scham)
      </text>

      {/* Arrow 3→4 (small curved arrow) */}
      <path d="M 335 160 Q 335 180 335 190" fill="none" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#arrowhead7)" />

      {/* Box 4: Verhalten */}
      <rect x="295" y="190" width="80" height="40" rx="4" fill="#a8d8ea" fillOpacity="0.10" stroke="#1a1a1a" strokeWidth="2" />
      <text x="335" y="208" textAnchor="middle" fontSize="11" fontWeight="600" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        Verhalten
      </text>
      <text x="335" y="222" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        (Anstrengung)
      </text>

      {/* Example pathways */}
      {/* Pathway A: Success */}
      <text x="20" y="265" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        <tspan fontWeight="600">Erfolg:</tspan> intern / stabil / kontrollierbar → Stolz → Persistenz
      </text>

      {/* Pathway B: Failure */}
      <text x="20" y="282" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        <tspan fontWeight="600">Misserfolg:</tspan> intern / stabil / unkontrollierbar → Scham → Rueckzug
      </text>

      <defs>
        <marker id="arrowhead7" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#1a1a1a" />
        </marker>
      </defs>
    </svg>
  )
}
