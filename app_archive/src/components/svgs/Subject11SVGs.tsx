export function Subject11SVG1() {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
    >
      <title>Hierarchie der psychometrischen Gitekriterien</title>
      <desc>
        Die drei Gitekriterien bilden eine Pyramide: Objektivitat ist Grundvoraussetzung,
        Reliabilitat sichert Messgenauigkeit, Validitat begrundet den wissenschaftlichen Nutzen.
      </desc>

      {/* Objektivitat - unten */}
      <rect x="80" y="280" width="240" height="50" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <text x="200" y="300" fontSize="12" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">
        Objektivitat
      </text>
      <text x="200" y="318" fontSize="9" fill="#555555" fontFamily="DM Sans, sans-serif" textAnchor="middle">
        Durchfuhrung · Auswertung · Interpretation
      </text>

      {/* Pfeil nach oben */}
      <line x1="200" y1="280" x2="200" y2="250" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="200,250 195,257 205,257" fill="#1a1a1a" />

      {/* Reliabilitat - mitte */}
      <rect x="100" y="190" width="200" height="60" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <text x="200" y="215" fontSize="12" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">
        Reliabilitat
      </text>
      <text x="200" y="232" fontSize="9" fill="#555555" fontFamily="DM Sans, sans-serif" textAnchor="middle">
        Test-Retest · Interne Konsistenz (a) · Interrater
      </text>

      {/* Pfeil nach oben (gestrichelt - notwendig aber nicht hinreichend) */}
      <line x1="200" y1="190" x2="200" y2="160" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="5 3" />
      <polygon points="200,160 195,167 205,167" fill="#1a1a1a" />
      <text x="220" y="180" fontSize="8" fill="#888888" fontFamily="DM Sans, sans-serif">
        notwendig, aber nicht hinreichend
      </text>

      {/* Validitat - oben */}
      <rect x="120" y="100" width="160" height="60" rx="4" fill="#d4a8a8" fillOpacity="0.1" stroke="#1a1a1a" strokeWidth="2" />
      <text x="200" y="125" fontSize="12" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">
        Validitat
      </text>
      <text x="200" y="142" fontSize="9" fill="#555555" fontFamily="DM Sans, sans-serif" textAnchor="middle">
        Inhalt · Kriterium · Konstrukt
      </text>

      {/* Rahmen um Validitat */}
      <rect x="115" y="95" width="170" height="70" rx="6" fill="none" stroke="#d4a8a8" strokeWidth="1" strokeDasharray="3 3" />
      <text x="200" y="85" fontSize="10" fill="#d4a8a8" fontFamily="DM Sans, sans-serif" textAnchor="middle">
        wissenschaftliche Brauchbarkeit
      </text>
    </svg>
  );
}

export function Subject11SVG2() {
  return (
    <svg
      viewBox="0 0 500 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
    >
      <title>Multitrait-Multimethod-Matrix</title>
      <desc>
        Die Matrix zeigt, wie ein Konstrukt nur dann valide ist, wenn Messungen desselben
        Merkmals mit verschiedenen Methoden einander ahnlich sind.
      </desc>

      {/* Grid */}
      <rect x="80" y="60" width="340" height="260" fill="none" stroke="#1a1a1a" strokeWidth="2" />

      {/* Vertikale Linien */}
      <line x1="165" y1="60" x2="165" y2="320" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="250" y1="60" x2="250" y2="320" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="335" y1="60" x2="335" y2="320" stroke="#1a1a1a" strokeWidth="1" />

      {/* Horizontale Linien */}
      <line x1="80" y1="125" x2="420" y2="125" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="80" y1="190" x2="420" y2="190" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="80" y1="255" x2="420" y2="255" stroke="#1a1a1a" strokeWidth="1" />

      {/* Kopfzeilen */}
      <text x="122" y="52" fontSize="9" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">Extraversion (F)</text>
      <text x="207" y="52" fontSize="9" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">Extraversion (B)</text>
      <text x="292" y="52" fontSize="9" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">Neurotizismus (F)</text>
      <text x="377" y="52" fontSize="9" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">Neurotizismus (B)</text>

      {/* Zeilenbeschriftungen */}
      <text x="72" y="100" fontSize="9" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="end">Extraversion (F)</text>
      <text x="72" y="165" fontSize="9" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="end">Extraversion (B)</text>
      <text x="72" y="230" fontSize="9" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="end">Neurotizismus (F)</text>
      <text x="72" y="295" fontSize="9" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="end">Neurotizismus (B)</text>

      {/* Diagonale Zellen - Monotrait-Monomethod */}
      <rect x="80" y="60" width="85" height="65" fill="#d4a8a8" fillOpacity="0.1" stroke="#1a1a1a" strokeWidth="2" />
      <text x="122" y="97" fontSize="14" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="700">++</text>

      <rect x="165" y="125" width="85" height="65" fill="#d4a8a8" fillOpacity="0.1" stroke="#1a1a1a" strokeWidth="2" />
      <text x="207" y="162" fontSize="14" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="700">++</text>

      <rect x="250" y="190" width="85" height="65" fill="#d4a8a8" fillOpacity="0.1" stroke="#1a1a1a" strokeWidth="2" />
      <text x="292" y="227" fontSize="14" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="700">++</text>

      <rect x="335" y="255" width="85" height="65" fill="#d4a8a8" fillOpacity="0.1" stroke="#1a1a1a" strokeWidth="2" />
      <text x="377" y="292" fontSize="14" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="700">++</text>

      {/* Monotrait-Heteromethod */}
      <text x="207" y="97" fontSize="12" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">+</text>
      <text x="122" y="162" fontSize="12" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">+</text>
      <text x="377" y="227" fontSize="12" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">+</text>
      <text x="292" y="292" fontSize="12" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">+</text>

      {/* Heterotrait */}
      <text x="292" y="97" fontSize="12" fill="#888888" fontFamily="DM Sans, sans-serif" textAnchor="middle">o</text>
      <text x="377" y="97" fontSize="12" fill="#888888" fontFamily="DM Sans, sans-serif" textAnchor="middle">o</text>
      <text x="122" y="227" fontSize="12" fill="#888888" fontFamily="DM Sans, sans-serif" textAnchor="middle">o</text>
      <text x="122" y="292" fontSize="12" fill="#888888" fontFamily="DM Sans, sans-serif" textAnchor="middle">o</text>
      <text x="207" y="227" fontSize="12" fill="#888888" fontFamily="DM Sans, sans-serif" textAnchor="middle">o</text>
      <text x="207" y="292" fontSize="12" fill="#888888" fontFamily="DM Sans, sans-serif" textAnchor="middle">o</text>
      <text x="292" y="162" fontSize="12" fill="#888888" fontFamily="DM Sans, sans-serif" textAnchor="middle">o</text>
      <text x="377" y="162" fontSize="12" fill="#888888" fontFamily="DM Sans, sans-serif" textAnchor="middle">o</text>

      {/* Legende */}
      <text x="80" y="355" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" fontWeight="600">++ = konvergente Validitat</text>
      <text x="220" y="355" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" fontWeight="600">+ = methodenspezifischer Einfluss</text>
      <text x="80" y="372" fontSize="10" fill="#888888" fontFamily="DM Sans, sans-serif">o = diskriminante Validitat</text>
    </svg>
  );
}
