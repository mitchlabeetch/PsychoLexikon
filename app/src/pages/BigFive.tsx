import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import DefinitionTooltip from '@/components/DefinitionTooltip';
import CitationTooltip from '@/components/CitationTooltip';
import Illustration from '@/components/Illustration';

export default function BigFive() {
  return (
    <Layout>
      {/* Hero Mini */}
      <section className="bg-creamDark py-12">
        <div className="container-prose">
          <span className="font-sans text-sm font-medium uppercase tracking-widest text-cornflower mb-2 block">
            Persönlichkeitspsychologie
          </span>
          <h1 className="font-serif font-bold text-h1 text-ink">
            Fünf-Faktoren-Modell (Big Five)
          </h1>
          <p className="font-serif text-subtitle text-ink mt-3">
            OCEAN — Die fünf Dimensionen, die Persönlichkeit strukturieren
          </p>
        </div>
      </section>

      <main className="bg-creamLight">
        <div className="container-prose py-8">

          {/* Einleitung */}
          <section>
            <p className="font-serif text-body text-ink leading-relaxed">
              Warum ist die eine Person offen für neue Erfahrungen, während die andere lieber bei
              Bewährtem bleibt? Warum ist jemand energisch und gesellig, während andere sich in
              Stille am wohlsten fühlen? Die <strong>Big Five</strong> liefern ein wissenschaftliches
              Raster, um diese Unterschiede systematisch zu erfassen — mit fünf Dimensionen, die in
              Hunderten von Studien repliziert wurden.
            </p>
          </section>

          {/* Lexikalische Hypothese */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Die lexikalische Hypothese: Vom Wortschatz zum Modell
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Das Big Five-Modell hat eine bemerkenswerte Geschichte — es begann nicht im Labor,
              sondern im <strong>Wörterbuch</strong>:
            </p>
            <ol className="font-serif text-body text-ink leading-relaxed mt-4 space-y-2 list-decimal list-inside">
              <li>
                <strong>Allport & Odbert (1936)</strong> sammelten <strong>4.500 Eigenschaftswörter</strong>{' '}
                aus dem Englischen — alles, was Persönlichkeit beschreibt.
              </li>
              <li>
                <strong>Raymond Cattell</strong> reduzierte diese Liste mit statistischen Methoden auf
                16 Grundfaktoren (16PF).
              </li>
              <li>
                Unabhängig voneinander fanden <strong>Fiske (1949), Norman (1963), Goldberg (1981)</strong>{' '}
                und schließlich <strong>McCrae & Costa (1987)</strong> bei der{' '}
                <DefinitionTooltip term="Faktorenanalyse" definition="Statistisches Verfahren, das Korrelationen zwischen Variablen analysiert und diese zu wenigen übergeordneten Faktoren zusammenfasst.">Faktorenanalyse</DefinitionTooltip>{' '}
                immer wieder dieselben <strong>fünf Faktoren</strong>.
              </li>
            </ol>
            <p className="font-serif text-body text-ink leading-relaxed mt-4">
              Die Konvergenz verschiedener Forschungsgruppen auf dieselben fünf Dimensionen ist das
              stärkste empirische Argument für das Modell.
            </p>

            <CitationTooltip
              citation="Goldberg, L. R. (1993). The structure of phenotypic personality traits. *American Psychologist*, 48(1), 26–34."
            >
              Goldbergs Übersichtsarbeit etablierte das Big Five als konsensfähiges Modell in der
              Persönlichkeitspsychologie.
            </CitationTooltip>

            <CitationTooltip
              citation="John, O. P., & Srivastava, S. (1999). The Big Five trait taxonomy. In L. A. Pervin & O. P. John (Eds.), *Handbook of personality: Theory and research* (2nd ed., pp. 102–138). Guilford Press."
            >
              John und Srivastava lieferten die vielleicht einflussreichste Darstellung der
              theoretischen Grundlagen und Forschungslage.
            </CitationTooltip>
          </section>

          {/* Die fünf Dimensionen */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Die fünf Dimensionen: OCEAN
            </h2>

            <div className="bg-white rounded-xl p-6 border border-sand shadow-sm">
              <div className="space-y-5">
                {/* O — Offenheit */}
                <div className="flex items-start gap-4 border-b border-sand pb-4">
                  <div className="bg-cornflower text-white font-sans font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg">
                    O
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-ink">
                      Offenheit für Erfahrung (Openness)
                    </h3>
                    <p className="font-serif text-sm text-ink leading-relaxed mt-1">
                      <strong>Hoch:</strong> Kreativ, neugierig, ästhetisch sensibel, offen für neue
                      Ideen und Erfahrungen, abstraktes Denken. <strong>Niedrig:</strong> Praktisch,
                      konventionell, liebt Routine, traditionelle Werte.
                    </p>
                    <p className="font-serif text-xs text-ink/60 mt-1">
                      Facetten: Fantasie, Ästhetik, Gefühle, Handlungen, Ideen, Werte
                    </p>
                  </div>
                </div>

                {/* C — Gewissenhaftigkeit */}
                <div className="flex items-start gap-4 border-b border-sand pb-4">
                  <div className="bg-terracotta text-white font-sans font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg">
                    C
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-ink">
                      Gewissenhaftigkeit (Conscientiousness)
                    </h3>
                    <p className="font-serif text-sm text-ink leading-relaxed mt-1">
                      <strong>Hoch:</strong> Organisiert, zuverlässig, diszipliniert, zielstrebig,
                      ordentlich, sorgfältig. <strong>Niedrig:</strong> Ungeordnet, nachlässig,
                      spontan, unzuverlässig.
                    </p>
                    <p className="font-serif text-xs text-ink/60 mt-1">
                      Facetten: Kompetenz, Ordnung, Pflichtbewusstsein, Leistungsstreben,
                      Selbstdisziplin, Besonnenheit
                    </p>
                  </div>
                </div>

                {/* E — Extraversion */}
                <div className="flex items-start gap-4 border-b border-sand pb-4">
                  <div className="bg-yellow-600 text-white font-sans font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg">
                    E
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-ink">
                      Extraversion (Extraversion)
                    </h3>
                    <p className="font-serif text-sm text-ink leading-relaxed mt-1">
                      <strong>Hoch:</strong> Gesellig, energisch, dominant, gesprächig, positiv
                      emotional. <strong>Niedrig:</strong> Introvertiert, zurückhaltend, bedacht,
                      reserviert.
                    </p>
                    <p className="font-serif text-xs text-ink/60 mt-1">
                      Facetten: Freundschaftlichkeit, Geselligkeit, Durchsetzungsvermögen,
                      Aktivität, Aufregungssuche, Positive Gefühle
                    </p>
                  </div>
                </div>

                {/* A — Verträglichkeit */}
                <div className="flex items-start gap-4 border-b border-sand pb-4">
                  <div className="bg-emerald-600 text-white font-sans font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg">
                    A
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-ink">
                      Verträglichkeit (Agreeableness)
                    </h3>
                    <p className="font-serif text-sm text-ink leading-relaxed mt-1">
                      <strong>Hoch:</strong> Kooperativ, empathisch, vertrauend, hilfsbereit,
                      freundlich, nachgiebig. <strong>Niedrig:</strong> Antagonistisch, misstrauisch,
                      kompetitiv, kritisch.
                    </p>
                    <p className="font-serif text-xs text-ink/60 mt-1">
                      Facetten: Vertrauen, Geradlinigkeit, Altruismus, Entgegenkommen, Bescheidenheit,
                      Mitgefühl
                    </p>
                  </div>
                </div>

                {/* N — Neurotizismus */}
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white font-sans font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg">
                    N
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-ink">
                      Neurotizismus (Neuroticism)
                    </h3>
                    <p className="font-serif text-sm text-ink leading-relaxed mt-1">
                      <strong>Hoch:</strong> Ängstlich, emotional instabil, gereizt, depressiv
                      anfällig, impulsiv, stressanfällig. <strong>Niedrig:</strong> Emotional stabil,
                      entspannt, sicher, gelassen.
                    </p>
                    <p className="font-serif text-xs text-ink/60 mt-1">
                      Facetten: Ängstlichkeit, Feindseligkeit, Depression, Selbstbewusstsein,
                      Impulsivität, Verletzlichkeit
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-serif text-body text-ink leading-relaxed mt-6">
              Insgesamt umfasst das NEO-PI-R <strong>30 Facetten</strong> — jeweils 6 pro Dimension —
              die ein differenziertes Profil ermöglichen.
            </p>

            <CitationTooltip
              citation="Costa, P. T., Jr., & McCrae, R. R. (1992). *Revised NEO Personality Inventory (NEO-PI-R) and NEO Five-Factor Inventory (NEO-FFI) professional manual*. Psychological Assessment Resources."
            >
              Costa und McCrae entwickelten das NEO-PI-R, den am häufigsten verwendeten Big Five-Fragebogen.
            </CitationTooltip>

            <Illustration
              src="/illu-big-five-radar.png"
              alt="Big Five Radar-Chart"
              caption={
                <>
                  Ein <strong>Radar-Chart</strong> zeigt, wie sich ein Mensch über die fünf
                  Dimensionen des Big Five verteilen könnte.
                </>
              }
              figureNumber={1}
              aspectRatio="1/1"
            />

            <Illustration
              src="/illu-big-five-traits.png"
              alt="Big Five Dimensionen und Facetten"
              caption={
                <>
                  Die fünf Dimensionen und jeweils sechs <strong>Facetten</strong> des Big Five.
                </>
              }
              figureNumber={2}
            />
          </section>

          {/* Messung */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Messung des Big Five
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Es gibt verschiedene etablierte Verfahren zur Erfassung der Big Five:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-xl p-5 border border-sand shadow-sm">
                <h3 className="font-sans font-semibold text-ink mb-2">NEO-PI-R</h3>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong>240 Items</strong>, 30 Facetten. Der umfassendste und am besten evaluierte
                  Fragebogen. Erfasst Domain- und Facettenscores. Erhältlich als Selbst- und
                  Fremdeinschätzung.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-sand shadow-sm">
                <h3 className="font-sans font-semibold text-ink mb-2">BFI (Big Five Inventory)</h3>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong>44 Items</strong>, nur Domain-Scores. Deutlich kürzer, trotzdem robust.
                  Ideal für screenings in großen Stichproben.
                </p>
              </div>
            </div>
            <p className="font-serif text-body text-ink leading-relaxed mt-4">
              Die <strong>Übereinstimmung zwischen Selbst- und Fremdeinschätzung</strong> liegt bei
              r ≈ .50–.60 — moderat, aber deutlich über dem Zufallsniveau. Fremdeinschätzungen
              vorhersehen manchmal sogar besser, weil sie weniger selbstwertdienste Verzerrungen haben.
            </p>
          </section>

          {/* Kritiken */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Kritiken und Kontroversen
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-sand shadow-sm">
                <h3 className="font-sans font-semibold text-ink mb-2">
                  Mischel's Person-Situations-Kontroverse
                </h3>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  Walter Mischel (1968) lieferte die größte Herausforderung: Verhalten ist stark{' '}
                  <strong>situationsabhängig</strong>! Die Korrelation zwischen Persönlichkeit und
                  Verhalten beträgt oft nur r ≈ .30. Das bedeutet: Die Big Five erklären nur etwa
                  10 % der Verhaltensvarianz in einer gegebenen Situation.
                </p>

                <CitationTooltip
                  citation="Mischel, W. (1968). *Personality and assessment*. Wiley."
                >
                  Mischels Buch löste die „Person-Situations-Kontroverse" aus — eine der wichtigsten
                  Debatten der Persönlichkeitspsychologie.
                </CitationTooltip>

                <p className="font-serif text-sm text-ink leading-relaxed mt-3">
                  <strong>Epsteins Antwort:</strong> Wenn man Verhalten <strong>über viele Situationen
                  aggregiert</strong>, steigt die Konsistenz deutlich. Die Big Five sagen besser
                  voraus, wie jemand „im Durchschnitt" handelt, als wie er in einer einzelnen
                  Situation handelt.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-sand shadow-sm">
                <h3 className="font-sans font-semibold text-ink mb-2">
                  Bandbreite-Fidelity-Dilemma
                </h3>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  Breite Dimensionen (wie die Big Five) haben hohe Vorhersagekraft über viele Kriterien
                  hinweg, aber geringe Spezifität. Spezifische Facetten sagen mehr über ein einzelnes
                  Kriterium voraus, gelten aber nicht allgemein. Es gibt kein „bestes" Abstraktionsniveau —
                  es hängt von der Fragestellung ab.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-sand shadow-sm">
                <h3 className="font-sans font-semibold text-ink mb-2">
                  HEXACO: Sechs statt fünf?
                </h3>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  Das <strong>HEXACO-Modell</strong> fügt eine sechste Dimension hinzu:{' '}
                  <DefinitionTooltip term="Honesty-Humility" definition="Eine Persönlichkeitsdimension, die Ehrlichkeit, Bescheidenheit, Fairness und Gierverzicht umfasst. Korreliert negativ mit Manipulation und materiellem Ehrgeiz.">Honesty-Humility</DefinitionTooltip>{' '}
                  (Ehrlichkeit-Bescheidenheit). In Kreuzkulturellen Studien tauchen Items dieser
                  Dimension bei Faktorenanalysen als separates Cluster auf — besonders in
                  asiatischen und südamerikanischen Stichproben.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-sand shadow-sm">
                <h3 className="font-sans font-semibold text-ink mb-2">
                  Kulturelle Replikation
                </h3>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  Die Big Five wurden in über <strong>50 Kulturen</strong> repliziert — von den USA
                  über Deutschland und China bis zu isolierten Gemeinschaften. Allerdings variieren
                  die mittleren Ausprägungen: Kulturen mit höherem Individualismus zeigen tendenziell
                  höhere Extraversion und Offenheit.
                </p>

                <CitationTooltip
                  citation="Digman, J. M. (1990). Personality structure: Emergence of the five-factor model. *Annual Review of Psychology*, 41, 417–440."
                >
                  Digmans Übersicht bestätigte die Replikation der fünf Faktoren über verschiedene
                  Kulturen und Methoden hinweg.
                </CitationTooltip>
              </div>
            </div>
          </section>

          {/* Zusammenfassung */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Zusammenfassung
            </h2>
            <div className="bg-white rounded-xl p-6 border border-sand shadow-sm">
              <ol className="font-serif text-body text-ink leading-relaxed space-y-3 list-decimal list-inside">
                <li>
                  Die Big Five basieren auf der <strong>lexikalischen Hypothese</strong> und wurden
                  durch konvergierende Faktorenanalysen unabhängiger Forschergruppen identifiziert.
                </li>
                <li>
                  Die fünf Dimensionen sind: <strong>Offenheit (O), Gewissenhaftigkeit (C),
                  Extraversion (E), Verträglichkeit (A), Neurotizismus (N)</strong> — mit je 6
                  Facetten.
                </li>
                <li>
                  <strong>NEO-PI-R</strong> (240 Items) und <strong>BFI</strong> (44 Items) sind die
                  etabliertesten Messinstrumente.
                </li>
                <li>
                  Mischels <strong>Person-Situations-Kontroverse</strong> zeigt, dass Verhalten
                  situationsabhängig ist — Aggregation über Situationen erhöht aber die Vorhersagekraft.
                </li>
                <li>
                  Kritische Perspektiven: HEXACO (+Honesty-Humility), kulturelle Variation und das
                  Bandbreite-Fidelity-Dilemma erweitern die Debatte.
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
                Goldberg, L. R. (1993). The structure of phenotypic personality traits.{' '}
                <em>American Psychologist</em>, 48(1), 26–34.
              </li>
              <li>
                John, O. P., & Srivastava, S. (1999). The Big Five trait taxonomy. In L. A. Pervin &
                O. P. John (Eds.), <em>Handbook of personality: Theory and research</em> (2nd ed.,
                pp. 102–138). Guilford Press.
              </li>
              <li>
                Costa, P. T., Jr., & McCrae, R. R. (1992). <em>Revised NEO Personality Inventory
                (NEO-PI-R) and NEO Five-Factor Inventory (NEO-FFI) professional manual</em>.{' '}
                Psychological Assessment Resources.
              </li>
              <li>
                Mischel, W. (1968). <em>Personality and assessment</em>. Wiley.
              </li>
              <li>
                Digman, J. M. (1990). Personality structure: Emergence of the five-factor model.{' '}
                <em>Annual Review of Psychology</em>, 41, 417–440.
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
                to="/hexaco"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                HEXACO-Modell
              </Link>
              <Link
                to="/persoenlichkeitsstoerungen"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                Persönlichkeitsstörungen
              </Link>
              <Link
                to="/mischel"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                Mischel: Person-Situation
              </Link>
              <Link
                to="/persoenlichkeitstests"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                Persönlichkeitstests
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
