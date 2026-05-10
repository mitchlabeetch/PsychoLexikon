export function KonditionierungVergleich() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" role="img" aria-labelledby="kondTitle kondDesc">
      <title id="kondTitle">Klassische und Operante Konditionierung im Vergleich</title>
      <desc id="kondDesc">Diagramm zeigt den Lernprozess bei klassischer Konditionierung durch Reizpaarung und bei operanter Konditionierung durch Verhaltenskonsequenzen</desc>

      {/* Trennlinie */}
      <line x1="200" y1="20" x2="200" y2="280" stroke="#ccc" strokeWidth="1" />

      {/* --- Linke Seite: Klassische Konditionierung --- */}
      <text x="100" y="30" fontSize="11" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Klassische Konditionierung</text>

      {/* Unbedingter Reiz → Unbedingte Reaktion */}
      <rect x="20" y="50" width="160" height="40" rx="4" stroke="#1a1a1a" strokeWidth="2" fill="#98d4bb" fillOpacity="0.15" />
      <text x="100" y="68" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Unbedingter Reiz</text>
      <text x="100" y="82" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">(Nahrung)</text>

      <line x1="100" y1="90" x2="100" y2="110" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#kondArrow)" />

      <rect x="20" y="115" width="160" height="40" rx="4" stroke="#1a1a1a" strokeWidth="2" fill="#98d4bb" fillOpacity="0.15" />
      <text x="100" y="133" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Unbedingte Reaktion</text>
      <text x="100" y="147" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">(Speichel)</text>

      {/* Neutraler Reiz */}
      <rect x="20" y="170" width="160" height="40" rx="4" stroke="#1a1a1a" strokeWidth="2" fill="#f4b8c5" fillOpacity="0.15" />
      <text x="100" y="188" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Neutraler Reiz</text>
      <text x="100" y="202" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">(Glocke)</text>

      {/* Paarungspfeil */}
      <line x1="100" y1="130" x2="100" y2="165" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="3,3" />
      <text x="115" y="150" fontSize="8" fontFamily="DM Sans, sans-serif" fill="#888">Paarung</text>

      {/* Ergebnis */}
      <line x1="100" y1="210" x2="100" y2="230" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#kondArrow)" />
      <rect x="20" y="235" width="160" height="40" rx="4" stroke="#1a1a1a" strokeWidth="2" fill="#c7b8ea" fillOpacity="0.15" />
      <text x="100" y="253" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Bedingte Reaktion</text>
      <text x="100" y="267" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">auf Glocke allein</text>

      {/* --- Rechte Seite: Operante Konditionierung --- */}
      <text x="300" y="30" fontSize="11" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Operante Konditionierung</text>

      {/* Verhalten */}
      <rect x="220" y="80" width="160" height="40" rx="4" stroke="#1a1a1a" strokeWidth="2" fill="#a8d8ea" fillOpacity="0.15" />
      <text x="300" y="98" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Verhalten</text>
      <text x="300" y="112" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">(Hund hebt Pfote)</text>

      {/* Pfeil zu Konsequenzen */}
      <line x1="300" y1="120" x2="300" y2="145" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#kondArrow)" />

      {/* Verstärkung */}
      <rect x="220" y="155" width="75" height="45" rx="4" stroke="#16a34a" strokeWidth="2" fill="#16a34a" fillOpacity="0.1" />
      <text x="257" y="173" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#16a34a" textAnchor="middle" fontWeight="600">Verstärkung</text>
      <text x="257" y="188" fontSize="8" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">(Leckerli)</text>

      {/* Bestrafung */}
      <rect x="305" y="155" width="75" height="45" rx="4" stroke="#dc2626" strokeWidth="2" fill="#dc2626" fillOpacity="0.1" />
      <text x="342" y="173" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#dc2626" textAnchor="middle" fontWeight="600">Bestrafung</text>
      <text x="342" y="188" fontSize="8" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">(Kein Leckerli)</text>

      {/* Rückpfeile */}
      <line x1="257" y1="155" x2="280" y2="130" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#kondArrowGr)" />
      <line x1="342" y1="155" x2="320" y2="130" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#kondArrowRd)" />

      <text x="257" y="140" fontSize="8" fontFamily="DM Sans, sans-serif" fill="#16a34a" textAnchor="middle">+</text>
      <text x="342" y="140" fontSize="8" fontFamily="DM Sans, sans-serif" fill="#dc2626" textAnchor="middle">−</text>

      <defs>
        <marker id="kondArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#1a1a1a" />
        </marker>
        <marker id="kondArrowGr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#16a34a" />
        </marker>
        <marker id="kondArrowRd" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#dc2626" />
        </marker>
      </defs>
    </svg>
  );
}
