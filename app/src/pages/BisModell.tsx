import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import DefinitionTooltip from '@/components/DefinitionTooltip';
import CitationTooltip from '@/components/CitationTooltip';
import Illustration from '@/components/Illustration';

export default function BisModell() {
  return (
    <Layout>
      {/* Hero Mini */}
      <section className="bg-creamDark py-12">
        <div className="container-prose">
          <span className="font-sans text-sm font-medium uppercase tracking-widest text-cornflower mb-2 block">
            Differentielle Psychologie
          </span>
          <h1 className="font-serif font-bold text-h1 text-ink">
            Berliner Intelligenzstrukturmodell (BIS)
          </h1>
          <p className="font-serif text-subtitle text-ink mt-3">
            Wie sich Intelligenz entfaltet — Jägers mehrdimensionales Modell
          </p>
        </div>
      </section>

      <main className="bg-creamLight">
        <div className="container-prose py-8">

          {/* Einleitung */}
          <section>
            <p className="font-serif text-body text-ink leading-relaxed">
              Stell dir vor, du löst ein Kreuzworträtsel. Du brauchst <strong>Wortschatz</strong>{' '}
              (verbal), <strong>räumliches Vorstellungsvermögen</strong> (figural) und{' '}
              <strong>logisches Denken</strong> (numerisch) — gleichzeitig. Intelligenz ist nicht
              eindimensional. Sie zeigt sich in vielen Facetten gleichzeitig. Genau das fängt das{' '}
              <DefinitionTooltip term="Berliner Intelligenzstrukturmodell" definition="Ein mehrdimensionales Intelligenzmodell nach Jörg Jäger, das operative Fähigkeiten mit inhaltlichen Fähigkeiten kreuzt.">
                Berliner Intelligenzstrukturmodell (BIS)
              </DefinitionTooltip>{' '}
              ein.
            </p>
          </section>

          {/* Das BIS als mehrdimensionales Modell */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Das BIS als mehrdimensionales Modell
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Jäger kreuzt zwei Dimensionen miteinander und erhält eine{' '}
              <strong>3 × 4-Matrix mit 12 Zellen</strong>:
            </p>

            <div className="bg-white rounded-xl p-6 mt-6 border border-sand shadow-sm">
              <h3 className="font-sans font-semibold text-sm uppercase tracking-wide text-ink mb-4">
                Operative Fähigkeiten (4 Faktoren)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-cornflower/10 rounded-lg p-3">
                  <span className="font-sans font-bold text-cornflower text-lg">B</span>
                  <p className="font-serif text-sm text-ink mt-1">
                    <strong>Bearbeitungsgeschwindigkeit</strong> (Speed) — Wie schnell löse ich Aufgaben?
                  </p>
                </div>
                <div className="bg-cornflower/10 rounded-lg p-3">
                  <span className="font-sans font-bold text-cornflower text-lg">M</span>
                  <p className="font-serif text-sm text-ink mt-1">
                    <strong>Merkfähigkeit</strong> — Wie gut speichere und erinnere ich Informationen?
                  </p>
                </div>
                <div className="bg-cornflower/10 rounded-lg p-3">
                  <span className="font-sans font-bold text-cornflower text-lg">E</span>
                  <p className="font-serif text-sm text-ink mt-1">
                    <strong>Einfallsreichtum / Kreativität</strong> — Wie originell sind meine Lösungen?
                  </p>
                </div>
                <div className="bg-cornflower/10 rounded-lg p-3">
                  <span className="font-sans font-bold text-cornflower text-lg">K</span>
                  <p className="font-serif text-sm text-ink mt-1">
                    <strong>Verarbeitungskapazität</strong> — Wie viele Informationen verarbeite ich parallel?
                  </p>
                </div>
              </div>

              <h3 className="font-sans font-semibold text-sm uppercase tracking-wide text-ink mb-4">
                Inhaltliche Fähigkeiten (3 Faktoren)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-terracotta/10 rounded-lg p-3 text-center">
                  <span className="font-sans font-bold text-terracotta text-lg">V</span>
                  <p className="font-serif text-sm text-ink mt-1">
                    <strong>Verbal</strong> — Sprache, Wortschatz, Textverständnis
                  </p>
                </div>
                <div className="bg-terracotta/10 rounded-lg p-3 text-center">
                  <span className="font-sans font-bold text-terracotta text-lg">F</span>
                  <p className="font-serif text-sm text-ink mt-1">
                    <strong>Figural-bildhaft</strong> — Räumliches Denken, Mustererkennung
                  </p>
                </div>
                <div className="bg-terracotta/10 rounded-lg p-3 text-center">
                  <span className="font-sans font-bold text-terracotta text-lg">N</span>
                  <p className="font-serif text-sm text-ink mt-1">
                    <strong>Numerisch</strong> — Zahlen, Logik, mathematisches Denken
                  </p>
                </div>
              </div>
            </div>

            <p className="font-serif text-body text-ink leading-relaxed mt-6">
              Jede der 12 Zellen (z. B. verbal + Merkfähigkeit, numerisch + Bearbeitungsgeschwindigkeit)
              lässt sich mit spezifischen Aufgabentypen messen. So entsteht ein fein strukturiertes Bild
              der intellektuellen Leistungsfähigkeit.
            </p>

            <CitationTooltip
              citation="Jäger, A. O. (1982). Mehrmodale Klassifikation von Intelligenzleistungen. *Diagnostica*, 28, 195–225."
            >
              Jäger publizierte das Modell erstmals 1982 in der Fachzeitschrift Diagnostica.
            </CitationTooltip>

            <Illustration
              src="/illu-bis-radex.png"
              alt="Berliner Intelligenzstrukturmodell"
              caption={
                <>
                  Das <strong>BIS</strong> als 3×4-Matrix: Operative Fähigkeiten (B, M, E, K) kreuzen sich mit
                  inhaltlichen Fähigkeiten (V, F, N).
                </>
              }
              figureNumber={1}
              aspectRatio="4/3"
            />
          </section>

          {/* Jägers Forschungsprogramm */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Jägers Forschungsprogramm: Von der Idee zum Test
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Das BIS ist kein theoretisches Gedankenspiel — es ruht auf einem der umfangreichsten
              Forschungsprogramme der deutschsprachigen Psychologie:
            </p>
            <ol className="font-serif text-body text-ink leading-relaxed mt-4 space-y-2 list-decimal list-inside">
              <li>
                <strong>~2.000 verschiedene Aufgabentypen</strong> wurden systematisch gesammelt
              </li>
              <li>
                Reduktion auf <strong>98 repräsentative Aufgaben</strong>
              </li>
              <li>
                Durchführung bei <strong>545 Abiturienten</strong>
              </li>
              <li>
                <DefinitionTooltip term="Faktorenanalyse" definition="Ein statistisches Verfahren, das Korrelationen zwischen Variablen analysiert und diese zu wenigen übergeordneten Faktoren zusammenfasst.">
                  Faktorenanalyse
                </DefinitionTooltip>{' '}
                ergab <strong>4 operative + 3 inhaltliche Faktoren</strong>
              </li>
              <li>
                Über allen Faktoren steht der <strong>g-Faktor</strong> — eine generelle Intelligenzkomponente
              </li>
            </ol>

            <CitationTooltip
              citation="Jäger, A. O., Süß, H.-M., & Beauducel, A. (1997). *Berliner Intelligenzstruktur-Test: BIS-Test, Form 4*. Hogrefe."
            >
              Die BIS-4 stellt die umfassendste und am besten evaluierte Testform dar.
            </CitationTooltip>
          </section>

          {/* Vergleich mit anderen Modellen */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Vergleich mit anderen Intelligenzmodellen
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Um das BIS einordnen zu können, hilft ein Blick auf alternative Konzeptionen:
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left font-serif text-body border-collapse">
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th className="py-2 pr-4 font-semibold">Modell</th>
                    <th className="py-2 pr-4 font-semibold">Autor(en)</th>
                    <th className="py-2 font-semibold">Kernidee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-sand">
                    <td className="py-3 pr-4 font-semibold">g-Faktor</td>
                    <td className="py-3 pr-4">Spearman</td>
                    <td className="py-3">Eine einzige übergeordnete Intelligenz</td>
                  </tr>
                  <tr className="border-b border-sand">
                    <td className="py-3 pr-4 font-semibold">Primärfaktoren</td>
                    <td className="py-3 pr-4">Thurstone</td>
                    <td className="py-3">7 unabhängige Grundfähigkeiten</td>
                  </tr>
                  <tr className="border-b border-sand">
                    <td className="py-3 pr-4 font-semibold">gf / gc</td>
                    <td className="py-3 pr-4">Cattell</td>
                    <td className="py-3">Fluide vs. kristalline Intelligenz</td>
                  </tr>
                  <tr className="border-b border-sand">
                    <td className="py-3 pr-4 font-semibold">Three-Stratum / CHC</td>
                    <td className="py-3 pr-4">Carroll, McGrew</td>
                    <td className="py-3">Drei Ebenen mit g an der Spitze</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-cornflower">BIS</td>
                    <td className="py-3 pr-4">Jäger</td>
                    <td className="py-3">
                      Operativ × Inhaltlich als Matrix; deutschsprachige Alternative
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <CitationTooltip
              citation="Carroll, J. B. (1993). *Human cognitive abilities: A survey of factor-analytic studies*. Cambridge University Press."
            >
              Carrolls Three-Stratum-Modell ist die vielleicht einflussreichste integrative Arbeit der Intelligenzforschung.
            </CitationTooltip>

            <CitationTooltip
              citation="McGrew, K. S. (2009). CHC theory and the human cognitive abilities project. *Journal of Psychoeducational Assessment*, 37(1), 8–14."
            >
              McGrew erweiterte das CHC-Modell (Cattell-Horn-Carroll) und machte es zum Standard in der diagnostischen Praxis.
            </CitationTooltip>
          </section>

          {/* Kritik & Bedeutung */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Kritik und aktuelle Bedeutung
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Das BIS wird heute weniger international rezipiert als das CHC-Modell. Dennoch bleibt es
              in der deutschsprachigen Psychologie relevant:
            </p>
            <ul className="font-serif text-body text-ink leading-relaxed mt-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Kulturelle Verankerung:</strong> Entwickelt und validiert mit deutschen Stichproben
              </li>
              <li>
                <strong>Flynn-Effekt:</strong> Der Anstieg der IQ-Werte über Generationen ist stärker bei
                fluiden Aufgaben (K, B) als bei kristallinen (Wissenstests)
              </li>
              <li>
                <strong>Diagnostische Anwendung:</strong> BIS-4 (240 Items) und BIS-HB (Hochbegabung)
                sind standardisierte Verfahren mit guten psychometrischen Kennwerten
              </li>
              <li>
                <strong>Kritik:</strong> Geringere internationale Verbreitung; CHC-Modell hat sich als
                integrativerer Rahmen durchgesetzt
              </li>
            </ul>
          </section>

          {/* Zusammenfassung */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Zusammenfassung
            </h2>
            <div className="bg-white rounded-xl p-6 border border-sand shadow-sm">
              <ol className="font-serif text-body text-ink leading-relaxed space-y-3 list-decimal list-inside">
                <li>
                  Das BIS ist ein <strong>mehrdimensionales Intelligenzmodell</strong> mit 4 operativen
                  und 3 inhaltlichen Faktoren, die 12 Zellen bilden.
                </li>
                <li>
                  Operative Faktoren: <strong>Bearbeitungsgeschwindigkeit (B), Merkfähigkeit (M),
                  Einfallsreichtum (E), Verarbeitungskapazität (K)</strong>.
                </li>
                <li>
                  Inhaltliche Faktoren: <strong>Verbal (V), Figural-bildhaft (F), Numerisch (N)</strong>.
                </li>
                <li>
                  Empirisch abgesichert durch Faktorenanalyse mit 545 Probanden — einer der
                  umfangreichsten deutschsprachigen Studien.
                </li>
                <li>
                  Das BIS steht im Dialog mit g-Faktor, Thurstones Primärfaktoren, Cattells gf/gc und
                  dem CHC-Modell — als eigenständige deutschsprachige Alternative.
                </li>
              </ol>
            </div>
          </section>

          {/* Literatur */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Literatur
            </h2>
            <ul className="font-sans text-sm text-ink leading-relaxed space-y-2">
              <li>
                Jäger, A. O. (1982). Mehrmodale Klassifikation von Intelligenzleistungen.{' '}
                <em>Diagnostica</em>, 28, 195–225.
              </li>
              <li>
                Jäger, A. O., Süß, H.-M., & Beauducel, A. (1997).{' '}
                <em>Berliner Intelligenzstruktur-Test: BIS-Test, Form 4</em>. Hogrefe.
              </li>
              <li>
                Carroll, J. B. (1993). <em>Human cognitive abilities: A survey of factor-analytic studies</em>.{' '}
                Cambridge University Press.
              </li>
              <li>
                McGrew, K. S. (2009). CHC theory and the human cognitive abilities project.{' '}
                <em>Journal of Psychoeducational Assessment</em>, 37(1), 8–14.
              </li>
              <li>
                Flynn, J. R. (1987). Massive IQ gains in 14 nations. <em>Psychological Bulletin</em>, 101(2), 171–191.
              </li>
            </ul>
          </section>

          {/* Zum Weiterforschen */}
          <section className="pb-12">
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Zum Weiterforschen
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/intelligenztheorien"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                Intelligenztheorien im Überblick
              </Link>
              <Link
                to="/faktorenanalyse"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                Faktorenanalyse
              </Link>
              <Link
                to="/iq-tests"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                IQ-Tests und Diagnostik
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
