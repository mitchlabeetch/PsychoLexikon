export function ArbeitsgedaechtnisModell() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" role="img" aria-labelledby="agTitle agDesc">
      <title id="agTitle">Mehrkomponentenmodell des Arbeitsgedächtnisses</title>
      <desc id="agDesc">Diagramm zeigt die vier Bausteine des Arbeitsgedächtnisses und ihre funktionalen Verbindungen</desc>

      {/* Zentrale Exekutive */}
      <rect x="120" y="20" width="160" height="45" rx="4" stroke="#1a1a1a" strokeWidth="2" fill="#c7b8ea" fillOpacity="0.2" />
      <text x="200" y="40" fontSize="12" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Zentrale Exekutive</text>
      <text x="200" y="55" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">Aufmerksamkeitskontrolle</text>

      {/* Pfeile zu Slave-Systemen */}
      <line x1="170" y1="65" x2="110" y2="120" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#agArrow)" />
      <line x1="230" y1="65" x2="290" y2="120" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#agArrow)" />

      {/* Phonologische Schleife */}
      <rect x="20" y="120" width="160" height="55" rx="4" stroke="#1a1a1a" strokeWidth="2" fill="#98d4bb" fillOpacity="0.2" />
      <text x="100" y="145" fontSize="12" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Phonologische Schleife</text>
      <text x="100" y="162" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">Sprachspeicher</text>

      {/* Visuell-räumlicher Notizblock */}
      <rect x="220" y="120" width="160" height="55" rx="4" stroke="#1a1a1a" strokeWidth="2" fill="#a8d8ea" fillOpacity="0.2" />
      <text x="300" y="145" fontSize="12" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Visuell-räumlicher</text>
      <text x="300" y="160" fontSize="12" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Notizblock</text>
      <text x="300" y="175" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">Bildspeicher</text>

      {/* Pfeile zum Episodischen Puffer */}
      <line x1="100" y1="175" x2="160" y2="220" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#agArrow)" />
      <line x1="300" y1="175" x2="240" y2="220" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#agArrow)" />
      <line x1="200" y1="65" x2="200" y2="220" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#agArrow)" strokeDasharray="4,4" />

      {/* Episodischer Puffer */}
      <rect x="120" y="220" width="160" height="45" rx="4" stroke="#1a1a1a" strokeWidth="2" fill="#f4b8c5" fillOpacity="0.2" />
      <text x="200" y="240" fontSize="12" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Episodischer Puffer</text>
      <text x="200" y="255" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">Integration</text>

      <defs>
        <marker id="agArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#1a1a1a" />
        </marker>
      </defs>
    </svg>
  );
}
