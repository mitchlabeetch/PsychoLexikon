export function BigFiveDimensionsSVG() {
  return (
    <svg
      viewBox="0 0 400 320"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
    >
      <title>Big-Five-Dimensionen OCEAN</title>
      <desc>
        Matrix der fuenf Persoenlichkeitsdimensionen mit ihren jeweiligen Polen.
      </desc>

      {/* Title */}
      <text
        x="200"
        y="22"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fontFamily="'Bodoni Moda', serif"
        fill="#1a1a1a"
      >
        Die fuenf Dimensionen des Big-Five-Modells (OCEAN)
      </text>

      {/* Row backgrounds alternating */}
      <rect x="20" y="40" width="360" height="52" fill="#a8d8ea" fillOpacity="0.08" />
      <rect x="20" y="96" width="360" height="52" fill="none" />
      <rect x="20" y="152" width="360" height="52" fill="#a8d8ea" fillOpacity="0.08" />
      <rect x="20" y="208" width="360" height="52" fill="none" />
      <rect x="20" y="264" width="360" height="52" fill="#a8d8ea" fillOpacity="0.08" />

      {/* Row separators */}
      <line x1="20" y1="40" x2="380" y2="40" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="20" y1="92" x2="380" y2="92" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="20" y1="148" x2="380" y2="148" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="20" y1="204" x2="380" y2="204" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="20" y1="260" x2="380" y2="260" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="20" y1="316" x2="380" y2="316" stroke="#1a1a1a" strokeWidth="1.5" />

      {/* Vertical separator: factor label | continuum */}
      <line x1="120" y1="40" x2="120" y2="316" stroke="#1a1a1a" strokeWidth="1" />

      {/* Row 1: O - Offenheit */}
      <text x="25" y="72" fontSize="12" fontWeight="600" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        O – Offenheit
      </text>
      {/* Continuum line with ticks */}
      <line x1="140" y1="66" x2="360" y2="66" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="140" y1="62" x2="140" y2="70" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="195" y1="64" x2="195" y2="68" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="250" y1="60" x2="250" y2="72" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="305" y1="64" x2="305" y2="68" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="360" y1="62" x2="360" y2="70" stroke="#1a1a1a" strokeWidth="1" />
      {/* Pole labels */}
      <text x="140" y="84" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Traditionell
      </text>
      <text x="360" y="84" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Kreativ
      </text>

      {/* Row 2: C - Gewissenhaftigkeit */}
      <text x="25" y="128" fontSize="12" fontWeight="600" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        C – Gewissenhaftigkeit
      </text>
      {/* Continuum line with ticks */}
      <line x1="140" y1="122" x2="360" y2="122" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="140" y1="118" x2="140" y2="126" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="195" y1="120" x2="195" y2="124" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="250" y1="116" x2="250" y2="128" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="305" y1="120" x2="305" y2="124" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="360" y1="118" x2="360" y2="126" stroke="#1a1a1a" strokeWidth="1" />
      {/* Pole labels */}
      <text x="140" y="140" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Ungeordnet
      </text>
      <text x="360" y="140" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Diszipliniert
      </text>

      {/* Row 3: E - Extraversion */}
      <text x="25" y="184" fontSize="12" fontWeight="600" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        E – Extraversion
      </text>
      {/* Continuum line with ticks */}
      <line x1="140" y1="178" x2="360" y2="178" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="140" y1="174" x2="140" y2="182" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="195" y1="176" x2="195" y2="180" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="250" y1="172" x2="250" y2="184" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="305" y1="176" x2="305" y2="180" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="360" y1="174" x2="360" y2="182" stroke="#1a1a1a" strokeWidth="1" />
      {/* Pole labels */}
      <text x="140" y="196" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Reserviert
      </text>
      <text x="360" y="196" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Gesellig
      </text>

      {/* Row 4: A - Vertraeglichkeit */}
      <text x="25" y="240" fontSize="12" fontWeight="600" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        A – Vertraeglichkeit
      </text>
      {/* Continuum line with ticks */}
      <line x1="140" y1="234" x2="360" y2="234" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="140" y1="230" x2="140" y2="238" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="195" y1="232" x2="195" y2="236" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="250" y1="228" x2="250" y2="240" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="305" y1="232" x2="305" y2="236" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="360" y1="230" x2="360" y2="238" stroke="#1a1a1a" strokeWidth="1" />
      {/* Pole labels */}
      <text x="140" y="252" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Kritisch
      </text>
      <text x="360" y="252" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Hilfsbereit
      </text>

      {/* Row 5: N - Neurotizismus */}
      <text x="25" y="296" fontSize="12" fontWeight="600" fontFamily="DM Sans, sans-serif" fill="#1a1a1a">
        N – Neurotizismus
      </text>
      {/* Continuum line with ticks */}
      <line x1="140" y1="290" x2="360" y2="290" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="140" y1="286" x2="140" y2="294" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="195" y1="288" x2="195" y2="292" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="250" y1="284" x2="250" y2="296" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="305" y1="288" x2="305" y2="292" stroke="#1a1a1a" strokeWidth="1" />
      <line x1="360" y1="286" x2="360" y2="294" stroke="#1a1a1a" strokeWidth="1" />
      {/* Pole labels */}
      <text x="140" y="308" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Stabil
      </text>
      <text x="360" y="308" textAnchor="middle" fontSize="9" fontFamily="DM Sans, sans-serif" fill="#555555">
        Reizbar
      </text>
    </svg>
  )
}
