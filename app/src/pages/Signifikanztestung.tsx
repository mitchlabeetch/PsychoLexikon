import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import DefinitionTooltip from '@/components/DefinitionTooltip';
import CitationTooltip from '@/components/CitationTooltip';
import Illustration from '@/components/Illustration';

export default function Signifikanztestung() {
  return (
    <Layout>
      {/* Hero Mini */}
      <section className="py-12 bg-creamDark">
        <div className="container-prose">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            Statistik
          </span>
          <h1 className="font-serif font-bold text-h1 text-ink">
            Signifikanztestung & p-Werte
          </h1>
          <p className="font-serif text-body text-ink mt-4 leading-relaxed">
            Der p-Wert: Statistisches Werkzeug oder Ritual?
          </p>
        </div>
      </section>

      <div className="container-prose py-12">
        {/* Einleitung */}
        <p className="font-serif text-body text-ink leading-relaxed">
          Eine Studie findet: &apos;p &lt; .05 — signifikant!&apos; Was bedeutet das wirklich? Und was bedeutet es <strong>NICHT</strong>?
        </p>

        {/* NHST-Logik */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          1. Die Logik des Nullhypothesen-Signifikanztestens (NHST)
        </h2>

        <p className="font-serif text-body text-ink leading-relaxed">
          Das NHST-Framework basiert auf <strong>Falsifikationslogik</strong>: Wir können eine Hypothese widerlegen, aber nie endgültig beweisen.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h3 className="font-serif font-semibold text-red-800 mb-2">H₀ — Nullhypothese</h3>
            <p className="font-serif text-body text-ink leading-relaxed">
              „Es gibt <strong>keinen Effekt</strong>." Beispiel: „Das neue Medikament wirkt nicht besser als Placebo."
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-serif font-semibold text-green-800 mb-2">H₁ — Alternativhypothese</h3>
            <p className="font-serif text-body text-ink leading-relaxed">
              „Es gibt <strong>einen Effekt</strong>." Beispiel: „Das neue Medikament wirkt besser als Placebo."
            </p>
          </div>
        </div>

        <p className="font-serif text-body text-ink leading-relaxed mt-6">
          Der entscheidende Schritt: Wir berechnen, wie wahrscheinlich unsere Daten <strong>wären</strong>, wenn H₀ tatsächlich wahr wäre. Ist diese Wahrscheinlichkeit sehr niedrig, lehnen wir H₀ ab.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-6">
          <p className="font-serif text-body text-ink leading-relaxed">
            Historisch entstand das NHST aus zwei Traditionen:{" "}
            <strong>Ronald Fisher</strong> fokussierte auf den p-Wert als kontinuierliches Evidenzmaß.{" "}
            <strong>Neyman &amp; Pearson</strong> entwickelten das Rahmenwerk mit α, β und Power als Entscheidungsregel.{" "}
            <CitationTooltip citation="Neyman, J. & Pearson, E. S. (1933). On the problem of the most efficient tests of statistical hypotheses. Philosophical Transactions of the Royal Society A, 231, 289-337.">
              Neyman &amp; Pearson (1933)
            </CitationTooltip>
          </p>
        </div>

        {/* Abbildung 1 */}
        <Illustration
          src="/illu-p-value.png"
          alt="p-Wert und Verteilung"
          caption={<>
            Die <strong>Nullhypothese-Verteilung</strong> mit dem kritischen Wert und dem p-Wert-Bereich.
          </>}
          figureNumber={1}
          aspectRatio="16/9"
        />

        {/* Alpha- & Beta-Fehler */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          2. Alpha- und Beta-Fehler: Die zwei Arten, sich zu irren
        </h2>

        <p className="font-serif text-body text-ink leading-relaxed">
          In der Statistik können wir auf zwei Weisen falsch liegen. Die gute Nachricht: Wir können die Wahrscheinlichkeit beider Fehler kontrollieren.
        </p>

        {/* Abbildung 2 */}
        <Illustration
          src="/illu-error-types.png"
          alt="Fehlerarten in der Statistik"
          caption={<>
            Die vier Felder der <strong>Statistischen Entscheidung</strong>: Richtige und falsche Entscheidungen bezüglich H₀.
          </>}
          figureNumber={2}
        />

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="font-serif font-semibold text-ink mb-2">
              Typ-I-Fehler (α) — „Ghost detected!"
            </h3>
            <p className="font-serif text-body text-ink leading-relaxed">
              Wir lehnen H₀ ab, obwohl sie wahr ist. Ein <strong>falsch positiver</strong> Befund. Wir glauben, ein Effekt existiert — aber er tut es nicht.
            </p>
            <p className="font-serif text-body text-ink leading-relaxed mt-3">
              Analogie: Ein Geigerszähler schlägt an, obwohl keine Strahlung vorhanden ist.
            </p>
            <p className="font-serif text-sm text-ink mt-2">
              Typischer Wert: <strong>α = .05</strong> (5% Wahrscheinlichkeit)
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h3 className="font-serif font-semibold text-ink mb-2">
              Typ-II-Fehler (β) — „Schatz verpasst!"
            </h3>
            <p className="font-serif text-body text-ink leading-relaxed">
              Wir behalten H₀ bei, obwohl sie falsch ist. Ein <strong>falsch negativer</strong> Befund. Ein echter Effekt bleibt unentdeckt.
            </p>
            <p className="font-serif text-body text-ink leading-relaxed mt-3">
              Analogie: Ein Metalldetektor übergeht einen vergrabenen Schatz.
            </p>
            <p className="font-serif text-sm text-ink mt-2">
              Typischer Wert: <strong>β = .20</strong> → Power = <strong>.80</strong>
            </p>
          </div>
        </div>

        <div className="bg-cream border border-creamDark rounded-lg p-5 mt-6">
          <h4 className="font-serif font-semibold text-ink mb-2">
            <DefinitionTooltip term="Power (Teststärke)" definition="Ein zentrales Konzept in der Psychologie.">
              Die Wahrscheinlichkeit, einen statistisch signifikanten Effekt zu finden, wenn ein echter Effekt existiert. Power = 1 − β.
            </DefinitionTooltip>
          </h4>
          <p className="font-serif text-body text-ink leading-relaxed">
            Power hängt ab von: (1) Effektstärke, (2) Stichprobengröße, (3) α-Niveau. Eine Power von .80 gilt als Standard — das bedeutet: Wenn ein Effekt existiert, finden wir ihn in 80% der Fälle.{" "}
            <CitationTooltip citation="Cohen, J. (1988). Statistical Power Analysis for the Behavioral Sciences (2nd ed.). Lawrence Erlbaum.">
              Cohen (1988)
            </CitationTooltip>
          </p>
        </div>

        {/* p-Werte verstehen */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          3. p-Werte richtig verstehen
        </h2>

        <div className="bg-red-50 border border-red-300 rounded-lg p-6">
          <h3 className="font-serif font-semibold text-red-800 mb-3 text-lg">
            Der häufigste Fehler in der Psychologie
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <p className="font-serif font-semibold text-ink text-sm mb-1">Was ein p-Wert IST:</p>
              <p className="font-serif text-ink leading-relaxed">
                <strong>p = P(Daten | H₀)</strong>
              </p>
              <p className="font-serif text-sm text-ink mt-1">
                Die Wahrscheinlichkeit der Daten, <em>gegeben</em> die Nullhypothese ist wahr.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <p className="font-serif font-semibold text-ink text-sm mb-1">Was ein p-Wert NICHT ist:</p>
              <p className="font-serif text-ink leading-relaxed">
                <strong>p ≠ P(H₀ | Daten)</strong>
              </p>
              <p className="font-serif text-sm text-ink mt-1">
                Nicht die Wahrscheinlichkeit, dass die Nullhypothese wahr ist!
              </p>
            </div>
          </div>
        </div>

        <p className="font-serif text-body text-ink leading-relaxed mt-6">
          Dieser Fehler wird so oft gemacht, dass er einen Namen hat: Der{" "}
          <DefinitionTooltip term="Fehler der transconditionalen Wahrscheinlichkeit" definition="Ein zentrales Konzept in der Psychologie.">
            Die Verwechslung von P(A|B) mit P(B|A). Ein p-Wert gibt nicht an, wie wahrscheinlich die Nullhypothese ist — dafür bräuchte man Bayes'sche Statistik.
          </DefinitionTooltip>.{" "}
          <CitationTooltip citation="Cohen, J. (1994). The earth is round (p &lt; .05). American Psychologist, 49</em>(12), 997-1003.">
            Cohen (1994)
          </CitationTooltip>
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-6">
          <p className="font-serif text-body text-ink leading-relaxed">
            <strong>Beispiel:</strong> p = .03 bedeutet: „Wenn das Medikament <em>keinen</em> Effekt hätte, wären solche Daten in 3% der Fälle zu erwarten." Es bedeutet <strong>NICHT</strong>: „Die Wahrscheinlichkeit, dass das Medikament keinen Effekt hat, beträgt 3%."
          </p>
        </div>

        <h3 className="font-serif font-semibold text-h4 text-ink mt-8 mb-3">
          Die Replikationskrise
        </h3>

        <p className="font-serif text-body text-ink leading-relaxed">
          Die blindere Vertrauen auf p &lt; .05 führte zu einer Krise in den Verhaltenswissenschaften.{" "}
          <CitationTooltip citation="Wasserstein, R. L. & Lazar, N. A. (2016). The ASA&apos;s statement on p-values: Context, process, and purpose. The American Statistician, 70</em>(2), 129-133.">
            Wasserstein &amp; Lazar (2016)
          </CitationTooltip>{" "}
          veröffentlichten ein wegweisendes Statement: p-Werte allein sind kein gutes Evidenzmaß.
        </p>

        {/* Effektstärken */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          4. Effektstärken: Was p-Werte verschweigen
        </h2>

        <p className="font-serif text-body text-ink leading-relaxed">
          Ein p-Wert sagt <strong>nichts</strong> über die <strong>Größe</strong> eines Effekts. Mit genug Probanden wird jeder noch so kleine Effekt signifikant.
        </p>

        <div className="bg-cream border border-creamDark rounded-lg p-5 mt-6">
          <h4 className="font-serif font-semibold text-ink mb-3">Cohen&apos;s d — Konventionen</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border border-creamDark">
              <div className="text-2xl font-bold text-blue-600">d = 0.20</div>
              <p className="font-serif text-sm text-ink mt-1">Kleiner Effekt</p>
              <p className="font-serif text-xs text-ink mt-1">Unterschied von 0.2 Standardabweichungen</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-creamDark">
              <div className="text-2xl font-bold text-blue-600">d = 0.50</div>
              <p className="font-serif text-sm text-ink mt-1">Mittlerer Effekt</p>
              <p className="font-serif text-xs text-ink mt-1">Halbe Standardabweichung Unterschied</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-creamDark">
              <div className="text-2xl font-bold text-blue-600">d = 0.80</div>
              <p className="font-serif text-sm text-ink mt-1">Großer Effekt</p>
              <p className="font-serif text-xs text-ink mt-1">0.8 Standardabweichungen Unterschied</p>
            </div>
          </div>
        </div>

        <p className="font-serif text-body text-ink leading-relaxed mt-6">
          <CitationTooltip citation="Cumming, G. (2014). The New Statistics: Why and How. Psychological Science, 25</em>(1), 7-29.">
            Cumming (2014)
          </CitationTooltip>{" "}
          plädiert für die „New Statistics": Statt p-Werte sollten wir <strong>Konfidenzintervalle</strong> und <strong>Effektstärken</strong> berichten. Ein 95%-Konfidenzintervall zeigt eine plausible Bandbreite für den wahren Effekt.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-6">
          <p className="font-serif text-body text-ink leading-relaxed">
            <strong>Merksatz:</strong> Berichte immer Effektstärken <em>und</em> Konfidenzintervalle — nicht nur p-Werte. Frage dich: „Ist der Effekt <em>praktisch bedeutsam</em>, nicht nur statistisch signifikant?"
          </p>
        </div>

        {/* Replikationskrise */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          5. Die Replikationskrise in der Psychologie
        </h2>

        <p className="font-serif text-body text-ink leading-relaxed">
          Viele klassische Befunde der Psychologie ließen sich nicht replizieren. Drei Studien schockierten die Disziplin:
        </p>

        <div className="mt-6 space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h4 className="font-serif font-semibold text-red-800 mb-2">
              Open Science Collaboration (2015)
            </h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              100 psychologische Replikationsstudien: Nur <strong>36%</strong> der ursprünglich signifikanten Ergebnisse konnten repliziert werden. Die durchschnittliche Effektstärke war halb so groß wie im Original.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h4 className="font-serif font-semibold text-red-800 mb-2">
              Ioannidis (2005): „Why most published research findings are false"
            </h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              In Disziplinen mit kleinen Effektstärken, Flexibilität in der Forschung und finanziellen Interessen ist die Mehrheit publizierter Befunde wahrscheinlich falsch.
            </p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mt-6">
          <h4 className="font-serif font-semibold text-green-800 mb-3">
            Lösungsansätze
          </h4>
          <ol className="space-y-2">
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-xs">1</span>
              <span><strong>Präregistrierung:</strong> Hypothesen und Analysepläne werden vor der Datenerhebung öffentlich dokumentiert.</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-xs">2</span>
              <span><strong>Größere Stichproben:</strong> Mehr Power, um echte Effekte zu finden.</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-xs">3</span>
              <span><strong>Open Data &amp; Code:</strong> Transparenz ermöglicht unabhängige Prüfung.</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-xs">4</span>
              <span><strong>Bayes'sche Alternativen:</strong> Geben die gesuchte P(H|D) statt P(D|H).</span>
            </li>
          </ol>
          <p className="font-serif text-sm text-ink leading-relaxed mt-4">
            <CitationTooltip citation="Benjamin, D. J. et al. (2018). Redefine statistical significance. Nature Human Behaviour, 2</em>, 6-10.">
              Benjamin et al. (2018)
            </CitationTooltip>{" "}
            schlugen vor, das Signifikanzniveau von α = .05 auf α = .005 zu senken — um die Fehlerrate zu reduzieren.
          </p>
        </div>

        {/* Zusammenfassung */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Zusammenfassung
        </h2>

        <div className="bg-cream border border-creamDark rounded-lg p-6">
          <ol className="space-y-3">
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">1</span>
              <span>NHST testet die <strong>Nullhypothese</strong> — wir können H₀ ablehnen, aber H₁ nie „beweisen" (Falsifikationslogik).</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">2</span>
              <span><strong>Typ-I-Fehler</strong> (α): Falsch positiv — wir finden einen Effekt, der nicht existiert.</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">3</span>
              <span><strong>Typ-II-Fehler</strong> (β): Falsch negativ — wir übersehen einen echten Effekt. Power = 1 − β sollte ≥ .80 sein.</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">4</span>
              <span>Ein <strong>p-Wert</strong> ist P(Daten|H₀) — NICHT P(H₀|Daten). Der häufigste Fehler in der Psychologie.</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">5</span>
              <span><strong>Effektstärken</strong> und <strong>Konfidenzintervalle</strong> sind informativer als p-Werte allein.</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">6</span>
              <span>Die <strong>Replikationskrise</strong> zeigt: Präregistrierung, große Stichproben und Open Science sind essenziell.</span>
            </li>
          </ol>
        </div>

        {/* Literatur */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Literatur
        </h2>

        <div className="bg-cream border border-creamDark rounded-lg p-6 space-y-3">
          <p className="font-serif text-sm text-ink leading-relaxed">
            Cohen, J. (1988). <em>Statistical Power Analysis for the Behavioral Sciences</em> (2. Aufl.). Lawrence Erlbaum.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Cohen, J. (1994). The earth is round (p &lt; .05). <em>American Psychologist, 49</em>(12), 997-1003.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Cumming, G. (2014). The New Statistics: Why and How. <em>Psychological Science, 25</em>(1), 7-29.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Neyman, J. &amp; Pearson, E. S. (1933). On the problem of the most efficient tests of statistical hypotheses. <em>Philosophical Transactions of the Royal Society A, 231</em>, 289-337.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Open Science Collaboration (2015). Estimating the reproducibility of psychological science. <em>Science, 349</em>(6251), aac4716.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Ioannidis, J. P. A. (2005). Why most published research findings are false. <em>PLoS Medicine, 2</em>(8), e124.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Wasserstein, R. L. &amp; Lazar, N. A. (2016). The ASA&apos;s statement on p-values. <em>The American Statistician, 70</em>(2), 129-133.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Benjamin, D. J. et al. (2018). Redefine statistical significance. <em>Nature Human Behaviour, 2</em>, 6-10.
          </p>
        </div>

        {/* Zum Weiterforschen */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Zum Weiterforschen
        </h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
          <p className="font-serif text-body text-ink leading-relaxed">
            Vertiefe dein Verständnis für psychologische Methoden:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/versuchsplanung"
              className="block bg-white border border-blue-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h4 className="font-serif font-semibold text-blue-800">Experimentelle Versuchsplanung</h4>
              <p className="font-serif text-sm text-ink mt-1">Wie wir Kausalität durch Randomisierung und Kontrolle erkennen.</p>
            </Link>
            <Link
              to="/psychometrie"
              className="block bg-white border border-blue-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h4 className="font-serif font-semibold text-blue-800">Psychometrische Gütekriterien</h4>
              <p className="font-serif text-sm text-ink mt-1">Objektivität, Reliabilität und Validität psychologischer Tests.</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
