export function Subject12SVG1() {
  return (
    <svg
      viewBox="0 0 500 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
    >
      <title>Selbstbestimmungstheorie: Grundbedurfnisse und Regulationsstufen</title>
      <desc>
        Die Selbstbestimmungstheorie zeigt, wie die Befriedigung der drei Grundbedurfnisse
        intrinsische Motivation aufrechterhalt und wie Regulationsstufen vom Selbst nach außen verlaufen.
      </desc>

      {/* Zentrale Kreis - Selbstbestimmung */}
      <circle cx="250" cy="140" r="45" fill="#d4a8a8" fillOpacity="0.1" stroke="#1a1a1a" strokeWidth="2" />
      <text x="250" y="136" fontSize="11" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">
        Selbst-
      </text>
      <text x="250" y="150" fontSize="11" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">
        bestimmung
      </text>

      {/* Autonomie - links oben */}
      <rect x="50" y="60" width="110" height="55" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <text x="105" y="82" fontSize="11" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">Autonomie</text>
      <text x="105" y="98" fontSize="9" fill="#555555" fontFamily="DM Sans, sans-serif" textAnchor="middle">Eigenwahl</text>
      <text x="105" y="110" fontSize="9" fill="#555555" fontFamily="DM Sans, sans-serif" textAnchor="middle">Selbstwirksamkeit</text>

      {/* Pfeil Autonomie → Zentrum */}
      <line x1="160" y1="88" x2="205" y2="115" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="205,115 197,112 199,120" fill="#1a1a1a" />

      {/* Kompetenz - rechts oben */}
      <rect x="340" y="60" width="110" height="55" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <text x="395" y="82" fontSize="11" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">Kompetenz</text>
      <text x="395" y="98" fontSize="9" fill="#555555" fontFamily="DM Sans, sans-serif" textAnchor="middle">Meisterschaft</text>
      <text x="395" y="110" fontSize="9" fill="#555555" fontFamily="DM Sans, sans-serif" textAnchor="middle">Optimale Herausforderung</text>

      {/* Pfeil Kompetenz → Zentrum */}
      <line x1="340" y1="88" x2="295" y2="115" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="295,115 303,112 301,120" fill="#1a1a1a" />

      {/* Soziale Eingebundenheit - unten */}
      <rect x="195" y="230" width="110" height="55" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <text x="250" y="252" fontSize="11" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">
        Soziale
      </text>
      <text x="250" y="266" fontSize="11" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">
        Eingebundenheit
      </text>
      <text x="250" y="280" fontSize="9" fill="#555555" fontFamily="DM Sans, sans-serif" textAnchor="middle">
        Zugehorigkeit · Beziehungsqualitat
      </text>

      {/* Pfeil unten → Zentrum */}
      <line x1="250" y1="230" x2="250" y2="185" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="250,185 245,192 255,192" fill="#1a1a1a" />

      {/* Regulationsstufen - Slider unten */}
      <text x="250" y="325" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle" fontWeight="600">
        Regulationsstufen
      </text>

      {/* Slider-Balken */}
      <line x1="100" y1="340" x2="400" y2="340" stroke="#1a1a1a" strokeWidth="2" />

      {/* Stufen Markierungen */}
      <line x1="130" y1="335" x2="130" y2="345" stroke="#1a1a1a" strokeWidth="2" />
      <text x="130" y="358" fontSize="8" fill="#22c55e" fontFamily="DM Sans, sans-serif" textAnchor="middle">intrinsisch</text>

      <line x1="220" y1="335" x2="220" y2="345" stroke="#1a1a1a" strokeWidth="2" />
      <text x="220" y="358" fontSize="8" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">identifiziert</text>

      <line x1="310" y1="335" x2="310" y2="345" stroke="#1a1a1a" strokeWidth="2" />
      <text x="310" y="358" fontSize="8" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">introjiziert</text>

      <line x1="370" y1="335" x2="370" y2="345" stroke="#1a1a1a" strokeWidth="2" />
      <text x="370" y="358" fontSize="8" fill="#888888" fontFamily="DM Sans, sans-serif" textAnchor="middle">auber</text>

      {/* Kontrastbalken rechts */}
      <rect x="420" y="335" width="15" height="60" rx="2" fill="#22c55e" fillOpacity="0.3" stroke="none" />
      <rect x="420" y="375" width="15" height="20" rx="2" fill="#888888" fillOpacity="0.3" stroke="none" />
      <text x="445" y="365" fontSize="8" fill="#22c55e" fontFamily="DM Sans, sans-serif">autonom</text>
      <text x="445" y="390" fontSize="8" fill="#888888" fontFamily="DM Sans, sans-serif">kontrolliert</text>
    </svg>
  );
}

export function Subject12SVG2() {
  return (
    <svg
      viewBox="0 0 500 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
    >
      <title>Drei klassische Emotionstheorien im Vergleich</title>
      <desc>
        Die drei klassischen Emotionstheorien unterscheiden sich in der kausalen
        Reihenfolge: James-Lange lasst den Korper vorausgehen, Cannon-Bard postuliert
        Gleichzeitigkeit, Schachter-Singer setzt die kognitive Interpretation entscheidend ein.
      </desc>

      {/* James-Lange - oben */}
      <text x="60" y="40" fontSize="11" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" fontWeight="600">James-Lange</text>
      <text x="60" y="55" fontSize="9" fill="#555555" fontFamily="DM Sans, sans-serif">Korper zuerst</text>

      {/* Reiz */}
      <rect x="60" y="70" width="50" height="25" rx="3" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="85" y="87" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Reiz</text>

      <line x1="110" y1="82" x2="150" y2="82" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="150,82 143,77 143,87" fill="#1a1a1a" />

      {/* Korperreaktion */}
      <rect x="150" y="70" width="85" height="25" rx="3" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="192" y="87" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Korperreaktion</text>

      <line x1="235" y1="82" x2="275" y2="82" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="275,82 268,77 268,87" fill="#1a1a1a" />

      {/* Emotion */}
      <rect x="275" y="70" width="90" height="25" rx="3" fill="#d4a8a8" fillOpacity="0.1" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="320" y="87" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Bewusstsein</text>

      {/* Cannon-Bard - mitte */}
      <text x="60" y="155" fontSize="11" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" fontWeight="600">Cannon-Bard</text>
      <text x="60" y="170" fontSize="9" fill="#555555" fontFamily="DM Sans, sans-serif">Thalamus aktiviert beides</text>

      {/* Reiz */}
      <rect x="60" y="185" width="50" height="25" rx="3" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="85" y="202" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Reiz</text>

      <line x1="110" y1="197" x2="140" y2="197" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="140,197 133,192 133,202" fill="#1a1a1a" />

      {/* Thalamus - Split-Diamond */}
      <polygon points="140,197 155,182 170,197 155,212" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="155" y="201" fontSize="8" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Thalamus</text>

      <line x1="170" y1="190" x2="210" y2="175" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="210,175 202,175 205,183" fill="#1a1a1a" />

      <line x1="170" y1="204" x2="210" y2="219" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="210,219 202,219 205,211" fill="#1a1a1a" />

      {/* Korperreaktion + Emotion parallel */}
      <rect x="210" y="162" width="85" height="25" rx="3" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="252" y="179" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Korperreaktion</text>

      <rect x="210" y="206" width="90" height="25" rx="3" fill="#d4a8a8" fillOpacity="0.1" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="255" y="223" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Bewusstsein</text>

      {/* Schachter-Singer - unten */}
      <text x="60" y="290" fontSize="11" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" fontWeight="600">Schachter-Singer</text>
      <text x="60" y="305" fontSize="9" fill="#555555" fontFamily="DM Sans, sans-serif">Erregung + Kognition</text>

      {/* Reiz */}
      <rect x="60" y="320" width="50" height="25" rx="3" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="85" y="337" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Reiz</text>

      <line x1="110" y1="332" x2="150" y2="332" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="150,332 143,327 143,337" fill="#1a1a1a" />

      {/* Unspezifische Erregung */}
      <rect x="150" y="320" width="105" height="25" rx="3" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="202" y="337" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">unspezifische Erregung</text>

      <line x1="255" y1="332" x2="290" y2="332" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="290,332 283,327 283,337" fill="#1a1a1a" />

      {/* Kognitive Bewertung - Diamond */}
      <polygon points="290,332 305,317 320,332 305,347" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="305" y="336" fontSize="8" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Kognition</text>

      <line x1="320" y1="332" x2="355" y2="332" stroke="#1a1a1a" strokeWidth="1.5" />
      <polygon points="355,332 348,327 348,337" fill="#1a1a1a" />

      {/* Emotion */}
      <rect x="355" y="320" width="70" height="25" rx="3" fill="#d4a8a8" fillOpacity="0.1" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="390" y="337" fontSize="10" fill="#1a1a1a" fontFamily="DM Sans, sans-serif" textAnchor="middle">Emotion</text>

      {/* Feedback-Pfeil */}
      <path d="M 390,320 Q 390,290 320,300" fill="none" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 2" />
      <polygon points="320,300 327,295 327,305" fill="#1a1a1a" />

      {/* Appraisal-Overlay */}
      <circle cx="430" cy="200" r="30" fill="none" stroke="#d4a8a8" strokeWidth="1" strokeDasharray="3 3" />
      <text x="430" y="196" fontSize="9" fill="#d4a8a8" fontFamily="DM Sans, sans-serif" textAnchor="middle">Appraisal</text>
      <text x="430" y="208" fontSize="8" fill="#d4a8a8" fontFamily="DM Sans, sans-serif" textAnchor="middle">kognitive</text>
      <text x="430" y="218" fontSize="8" fill="#d4a8a8" fontFamily="DM Sans, sans-serif" textAnchor="middle">Bewertung</text>
    </svg>
  );
}
