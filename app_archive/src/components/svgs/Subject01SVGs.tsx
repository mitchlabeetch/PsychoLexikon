export function AktionspotentialGraph() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" role="img" aria-labelledby="apTitle apDesc">
      <title id="apTitle">Verlauf eines Aktionspotentials mit Depolarisation, Repolarisation und Refraktärzeit</title>
      <desc id="apDesc">Diagramm zeigt den charakteristischen Spannungsverlauf eines Nervenimpulses über vier Millisekunden mit beschrifteten Phasen</desc>

      {/* Hintergrund-Achsen */}
      <line x1="50" y1="250" x2="380" y2="250" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="50" y1="250" x2="50" y2="30" stroke="#1a1a1a" strokeWidth="1" />

      {/* Y-Achse Beschriftungen */}
      <text x="35" y="255" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="end">−70</text>
      <text x="35" y="195" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="end">−55</text>
      <text x="35" y="145" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="end">0</text>
      <text x="35" y="85" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="end">+40</text>
      <text x="30" y="30" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="end" fontWeight="600">mV</text>

      {/* X-Achse Beschriftungen */}
      <text x="50" y="270" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">0</text>
      <text x="130" y="270" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">1</text>
      <text x="210" y="270" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">2</text>
      <text x="290" y="270" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">3</text>
      <text x="370" y="270" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">4</text>
      <text x="370" y="285" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#555" textAnchor="middle">ms</text>

      {/* Schwelle gestrichelt */}
      <line x1="50" y1="195" x2="380" y2="195" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4,4" />
      <text x="385" y="198" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#888">Schwelle</text>

      {/* Phasen-Hintergründe */}
      <rect x="130" y="40" width="80" height="210" fill="#98d4bb" fillOpacity="0.12" />
      <rect x="210" y="40" width="70" height="210" fill="#dc2626" fillOpacity="0.08" />
      <rect x="280" y="40" width="100" height="210" fill="#2563eb" fillOpacity="0.06" />

      {/* Hauptkurve */}
      <path
        d="M 50 250
           L 130 250
           C 140 250, 145 245, 150 230
           C 155 210, 160 180, 170 140
           C 180 100, 190 85, 200 85
           C 210 85, 215 100, 220 130
           C 225 160, 230 200, 240 240
           C 250 270, 260 265, 270 255
           C 280 248, 300 250, 320 250
           L 370 250"
        stroke="#1a1a1a"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Phasenbeschriftungen */}
      <text x="170" y="55" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Depolarisation</text>
      <text x="245" y="55" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Repolarisation</text>
      <text x="330" y="55" fontSize="10" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Refraktärzeit</text>

      {/* Ruhepotenzial Markierung */}
      <text x="90" y="245" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555">Ruhepotenzial</text>

      {/* Hyperpolarisation Pfeil */}
      <line x1="260" y1="260" x2="260" y2="275" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#arrow)" />
      <text x="265" y="275" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555">Hyperpolarisation</text>

      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#1a1a1a" />
        </marker>
      </defs>
    </svg>
  );
}

export function SynapseDiagram() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto" role="img" aria-labelledby="synTitle synDesc">
      <title id="synTitle">Anatomischer Querschnitt einer chemischen Synapse mit Neurotransmitter-Freisetzung</title>
      <desc id="synDesc">Schematische Darstellung der Signalübertragung von der präsynaptischen zur postsynaptischen Zelle über den synaptischen Spalt</desc>

      {/* Präsynaptische Membran */}
      <path d="M 20 80 Q 100 70, 200 75 Q 300 80, 380 70" stroke="#1a1a1a" strokeWidth="3" fill="none" />
      <path d="M 20 95 Q 100 85, 200 90 Q 300 95, 380 85" stroke="#1a1a1a" strokeWidth="3" fill="none" />
      <text x="200" y="55" fontSize="11" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Präsynaptische Endigung</text>

      {/* Postsynaptische Membran */}
      <path d="M 20 280 Q 100 290, 200 285 Q 300 280, 380 290" stroke="#1a1a1a" strokeWidth="3" fill="none" />
      <path d="M 20 295 Q 100 305, 200 300 Q 300 295, 380 305" stroke="#1a1a1a" strokeWidth="3" fill="none" />
      <text x="200" y="330" fontSize="11" fontFamily="DM Sans, sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="600">Postsynaptische Membran</text>

      {/* Synaptische Spalt Hintergrund */}
      <rect x="20" y="96" width="360" height="184" fill="#f0ece4" fillOpacity="0.5" />
      <text x="200" y="190" fontSize="11" fontFamily="DM Sans, sans-serif" fill="#888" textAnchor="middle" fontStyle="italic">Synaptische Spalt</text>

      {/* Vesikel */}
      <circle cx="80" cy="50" r="12" stroke="#1a1a1a" strokeWidth="1.5" fill="#98d4bb" fillOpacity="0.3" />
      <circle cx="120" cy="60" r="10" stroke="#1a1a1a" strokeWidth="1.5" fill="#98d4bb" fillOpacity="0.3" />
      <circle cx="160" cy="45" r="11" stroke="#1a1a1a" strokeWidth="1.5" fill="#98d4bb" fillOpacity="0.3" />
      <circle cx="240" cy="55" r="13" stroke="#1a1a1a" strokeWidth="1.5" fill="#98d4bb" fillOpacity="0.3" />
      <circle cx="290" cy="48" r="10" stroke="#1a1a1a" strokeWidth="1.5" fill="#98d4bb" fillOpacity="0.3" />
      <text x="320" y="55" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555">Synapsenvesikel</text>

      {/* Ca²⁺ Ionen und Pfeile */}
      <circle cx="100" cy="20" r="4" stroke="#1a1a1a" strokeWidth="1" fill="#f4b8c5" fillOpacity="0.6" />
      <circle cx="140" cy="25" r="4" stroke="#1a1a1a" strokeWidth="1" fill="#f4b8c5" fillOpacity="0.6" />
      <circle cx="260" cy="22" r="4" stroke="#1a1a1a" strokeWidth="1" fill="#f4b8c5" fillOpacity="0.6" />
      <circle cx="220" cy="18" r="4" stroke="#1a1a1a" strokeWidth="1" fill="#f4b8c5" fillOpacity="0.6" />

      <line x1="100" y1="30" x2="100" y2="55" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#arrowSyn)" />
      <line x1="140" y1="35" x2="140" y2="60" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#arrowSyn)" />
      <line x1="260" y1="32" x2="260" y2="57" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#arrowSyn)" />
      <text x="60" y="22" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555">Ca²⁺</text>

      {/* Freigesetzte Neurotransmitter */}
      <circle cx="110" cy="150" r="3" stroke="#1a1a1a" strokeWidth="1" fill="#c7b8ea" fillOpacity="0.5" />
      <circle cx="145" cy="170" r="3" stroke="#1a1a1a" strokeWidth="1" fill="#c7b8ea" fillOpacity="0.5" />
      <circle cx="180" cy="140" r="3" stroke="#1a1a1a" strokeWidth="1" fill="#c7b8ea" fillOpacity="0.5" />
      <circle cx="220" cy="165" r="3" stroke="#1a1a1a" strokeWidth="1" fill="#c7b8ea" fillOpacity="0.5" />
      <circle cx="260" cy="155" r="3" stroke="#1a1a1a" strokeWidth="1" fill="#c7b8ea" fillOpacity="0.5" />
      <circle cx="290" cy="175" r="3" stroke="#1a1a1a" strokeWidth="1" fill="#c7b8ea" fillOpacity="0.5" />
      <circle cx="160" cy="185" r="3" stroke="#1a1a1a" strokeWidth="1" fill="#c7b8ea" fillOpacity="0.5" />
      <circle cx="240" cy="145" r="3" stroke="#1a1a1a" strokeWidth="1" fill="#c7b8ea" fillOpacity="0.5" />
      <text x="310" y="165" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555">Neurotransmitter</text>

      {/* Postsynaptische Rezeptoren */}
      <path d="M 100 280 L 100 265 L 90 255 L 110 255 L 100 265" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <path d="M 160 285 L 160 270 L 150 260 L 170 260 L 160 270" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <path d="M 220 282 L 220 267 L 210 257 L 230 257 L 220 267" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <path d="M 280 285 L 280 270 L 270 260 L 290 260 L 280 270" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <path d="M 340 280 L 340 265 L 330 255 L 350 255 L 340 265" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <text x="360" y="270" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555">Rezeptoren</text>

      {/* Gebundene Neurotransmitter an Rezeptoren */}
      <circle cx="100" cy="252" r="3" stroke="#1a1a1a" strokeWidth="1" fill="#c7b8ea" fillOpacity="0.7" />
      <circle cx="220" cy="254" r="3" stroke="#1a1a1a" strokeWidth="1" fill="#c7b8ea" fillOpacity="0.7" />

      {/* Na⁺ Pfeile (erregend) */}
      <line x1="100" y1="300" x2="100" y2="320" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arrowNa)" />
      <line x1="160" y1="300" x2="160" y2="320" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arrowNa)" />
      <text x="120" y="325" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#16a34a">Na⁺</text>

      <defs>
        <marker id="arrowSyn" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#1a1a1a" />
        </marker>
        <marker id="arrowNa" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#16a34a" />
        </marker>
      </defs>
    </svg>
  );
}
