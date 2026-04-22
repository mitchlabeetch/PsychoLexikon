import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import DefinitionTooltip from '@/components/DefinitionTooltip';
import CitationTooltip from '@/components/CitationTooltip';
import Illustration from '@/components/Illustration';

export default function Versuchsplanung() {
  return (
    <Layout>
      {/* Hero Mini */}
      <section className="py-12 bg-creamDark">
        <div className="container-prose">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Methodenlehre
          </span>
          <h1 className="font-serif font-bold text-h1 text-ink">
            Experimentelle Versuchsplanung
          </h1>
          <p className="font-serif text-body text-ink mt-4 leading-relaxed">
            Wie wir Kausalität erkennen — Die Kunst der Versuchsplanung
          </p>
        </div>
      </section>

      <div className="container-prose py-12">
        {/* Einleitung */}
        <p className="font-serif text-body text-ink leading-relaxed">
          Ein neues Medikament soll Depressionen lindern. Wie weiß man, ob es <strong>WIRKLICH</strong> wirkt — und nicht nur Zufall oder Placebo? Die Antwort liegt in der <strong>Versuchsplanung</strong>.
        </p>

        {/* Abbildung 1 */}
        <Illustration
          src="/illu-experimental-design.png"
          alt="Versuchsdesign-Typen"
          caption={<>
            Vergleich: <strong>Experimental</strong> (randomisiert, kontrolliert), <strong>quasi-experimentell</strong> und <strong>korrelativ</strong>.
          </>}
          figureNumber={1}
        />

        {/* Grundlagen */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          1. Die drei Grundtypen des Forschungsdesigns
        </h2>

        <p className="font-serif text-body text-ink leading-relaxed">
          Nicht jedes Design erlaubt kausale Schlüsse. Die Unterscheidung ist entscheidend:
        </p>

        <div className="mt-6 space-y-6">
          {/* Experimentell */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="font-serif font-semibold text-lg text-ink mb-2">
              1. Experimentelles Design (Goldstandard)
            </h3>
            <p className="font-serif text-body text-ink leading-relaxed">
              <strong>Randomisierte Kontrollgruppenstudie (RCT):</strong> Probanden werden zufällig einer Bedingung zugeordnet. Der Forscher manipuliert die{" "}
              <DefinitionTooltip term="Unabhängige Variable (UV)" definition="Ein zentrales Konzept in der Psychologie.">
                Die Variable, die vom Experimentator systematisch verändert wird (z. B. Medikament vs. Placebo).
              </DefinitionTooltip>{" "}
              und misst deren Effekt auf die{" "}
              <DefinitionTooltip term="Abhängige Variable (AV)" definition="Ein zentrales Konzept in der Psychologie.">
                Die Variable, die gemessen wird, um den Effekt der UV zu erfassen (z. B. Depressionswert nach 4 Wochen).
              </DefinitionTooltip>.
            </p>
            <p className="font-serif text-body text-ink leading-relaxed mt-3">
              Durch <strong>Randomisierung</strong> werden Störvariablen gleichmäßig auf die Gruppen verteilt — das ermöglicht kausale Schlüsse.
            </p>
          </div>

          {/* Quasi-experimentell */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h3 className="font-serif font-semibold text-lg text-ink mb-2">
              2. Quasi-experimentelles Design
            </h3>
            <p className="font-serif text-body text-ink leading-relaxed">
              Es gibt eine UV und eine AV, aber <strong>keine Randomisierung</strong>. Die Gruppen existieren bereits (z. B. Schüler verschiedener Klassen).
            </p>
            <p className="font-serif text-body text-ink leading-relaxed mt-3">
              <strong>Problem:</strong> Vorherige Unterschiede zwischen Gruppen (Selektion) können Ergebnisse verfälschen. Interne Validität ist eingeschränkt.
            </p>
          </div>

          {/* Korrelativ */}
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
            <h3 className="font-serif font-semibold text-lg text-ink mb-2">
              3. Korrelatives Design
            </h3>
            <p className="font-serif text-body text-ink leading-relaxed">
              Nur Beobachtung — <strong>keine Manipulation</strong>. Wir messen zwei Variablen und prüfen deren Zusammenhang.
            </p>
            <p className="font-serif text-body text-ink leading-relaxed mt-3">
              <strong>Wichtig:</strong> Korrelation bedeutet nicht Kausalität! Eiscreme-Verkäufe und Ertrinkungsfälle korrelieren stark — weil beide von der Temperatur abhängen (dritte Variable).
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-6">
          <p className="font-serif text-body text-ink leading-relaxed">
            <strong className="text-blue-800">Zentrale Begriffe:</strong>{" "}
            <DefinitionTooltip term="Kontrollvariablen" definition="Ein zentrales Konzept in der Psychologie.">
              Variablen, die konstant gehalten oder statistisch auspartialisiert werden, um ihre Wirkung auf die AV zu eliminieren.
            </DefinitionTooltip>{" "}
            werden gehalten, um sicherzustellen, dass nur die UV den Effekt erklärt. Die{" "}
            <CitationTooltip citation="Campbell, D. T. & Stanley, J. C. (1963). Experimental and Quasi-Experimental Designs for Research. Houghton Mifflin.">
              Campbell &amp; Stanley (1963)
            </CitationTooltip>{" "}
            gelten als das Grundlagenwerk zur Versuchsplanung.
          </p>
        </div>

        {/* Abbildung 2 */}
        <Illustration
          src="/illu-hypothesis-testing.png"
          alt="Hypothesentestung"
          caption={<>
            Der Ablauf der <strong>Hypothesenprüfung</strong> in der experimentellen Psychologie.
          </>}
          figureNumber={2}
        />

        {/* Interne Validität */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          2. Interne Validität: Können wir kausale Schlüsse ziehen?
        </h2>

        <p className="font-serif text-body text-ink leading-relaxed">
          Interne Validität beantwortet eine Frage: Wird die beobachtete Veränderung der AV <strong>tatsächlich</strong> durch die UV verursacht? Oder gibt es eine alternative Erklärung?
        </p>

        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          <CitationTooltip citation="Shadish, W. R., Cook, T. D. & Campbell, D. T. (2002). Experimental and Quasi-Experimental Designs for Generalized Causal Inference. Houghton Mifflin.">
            Shadish, Cook &amp; Campbell (2002)
          </CitationTooltip>{" "}
          identifizierten acht klassische Bedrohungen der internen Validität:
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              name: "History (Geschichte)",
              desc: "Ein externes Ereignis während der Studie beeinflusst das Ergebnis. Beispiel: Eine Naturkatastrophe tritt auf und verändert die Stimmung aller Probanden."
            },
            {
              name: "Maturation (Reifung)",
              desc: "Natürliche Veränderungen im Laufe der Zeit. Beispiel: Kinder werden älter und reifer — unabhängig von der Intervention."
            },
            {
              name: "Testeffekt",
              desc: "Die bloße Wiederholung eines Tests verbessert die Leistung. Beispiel: Im Post-Test weiß man bereits, welche Fragen kommen."
            },
            {
              name: "Instrumentierung",
              desc: "Die Messmethode ändert sich zwischen Prä- und Post-Test. Beispiel: Ein Rater wird müde und strenger."
            },
            {
              name: "Regression zur Mitte",
              desc: "Extreme Werte tendieren beim zweiten Messzeitpunkt zum Durchschnitt. Beispiel: Studierende mit sehr schlechtem Ersttest verbessern sich statistisch."
            },
            {
              name: "Selektion",
              desc: "Die Gruppen unterschieden sich bereits vor dem Experiment. Beispiel: Freiwillige für eine Therapiestudie sind motivierter."
            },
            {
              name: "Mortalität (Ausfälle)",
              desc: "Unterschiedliche Ausfallraten zwischen Gruppen. Beispiel: Frustrierte Probanden in der Kontrollgruppe brechen häufiger ab."
            }
          ].map((item, i) => (
            <div key={item.name} className="flex gap-4 bg-cream border border-creamDark rounded-lg p-4">
              <span className="flex-shrink-0 w-8 h-8 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-sm">
                {i + 1}
              </span>
              <div>
                <h4 className="font-serif font-semibold text-ink">{item.name}</h4>
                <p className="font-serif text-body text-ink leading-relaxed mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Externe Validität */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          3. Externe Validität: Generalisierbarkeit
        </h2>

        <p className="font-serif text-body text-ink leading-relaxed">
          Externe Validität fragt: Lassen sich die Ergebnisse auf andere Personen, Situationen und Zeiten übertragen? Ein perfekt intern valides Experiment nützt wenig, wenn es nur unter Laborbedingungen funktioniert.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">Ökologische Validität</h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              Gilt das Ergebnis auch außerhalb des Labors? Ein Strooptest im Labor zeigt interference — aber gilt das auch im Straßenverkehr?
            </p>
          </div>
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">Populationsvalidität</h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              Lassen sich Ergebnisse von WEIRD-Probanden (Western, Educated, Industrialized, Rich, Democratic) auf die Weltbevölkerung übertragen?
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-6">
          <p className="font-serif text-body text-ink leading-relaxed">
            <strong className="text-amber-800">Der Trade-off:</strong> Hohe interne Validität (streng kontrolliertes Labor) geht oft auf Kosten der externen Validität. Feldexperimente sind realistischer, aber schwerer zu kontrollieren.
          </p>
        </div>

        {/* Kontrollmethoden */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          4. Kontrollmethoden: So sichern wir Validität
        </h2>

        <div className="mt-6 space-y-6">
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">Randomisierung</h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              Zufällige Zuordnung zu Gruppen. Der Goldstandard, der alle bekannten und unbekannten Störvariablen gleichmäßig verteilt.
            </p>
          </div>

          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">Matching</h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              Probanden werden paarweise nach relevanten Merkmalen (Alter, Geschlecht, IQ) zusammengeführt und dann randomisiert zugeordnet.
            </p>
          </div>

          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">Counterbalancing</h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              Bei wiederholter Messung: Die Reihenfolge der Bedingungen wird systematisch variiert, um Übungs- und Ermüdungseffekte auszugleichen.
            </p>
          </div>

          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">Kontrollgruppen</h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              <strong>Placebo-Kontrollgruppe:</strong> Erhält eine scheinbare Behandlung.{" "}
              <strong>Wartelisten-Kontrollgruppe:</strong> Erhält die Behandlung später. Beide kontrollieren für Spontanheilung und Erwartungseffekte.
            </p>
          </div>
        </div>

        <h3 className="font-serif font-semibold text-h4 text-ink mt-8 mb-3">
          Blindheit: Wer weiß was?
        </h3>

        <p className="font-serif text-body text-ink leading-relaxed">
          Erwartungseffekte können Ergebnisse verfälschen — auf beiden Seiten:
        </p>

        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">👤</div>
            <h4 className="font-serif font-semibold text-ink text-sm mb-1">Einfach verblindet</h4>
            <p className="font-serif text-sm text-ink leading-relaxed">Der Proband weiß nicht, welcher Bedingung er zugeordnet ist.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">👥</div>
            <h4 className="font-serif font-semibold text-ink text-sm mb-1">Doppelt verblindet</h4>
            <p className="font-serif text-sm text-ink leading-relaxed">Proband <strong>und</strong> Experimentator wissen es nicht.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">👥📊</div>
            <h4 className="font-serif font-semibold text-ink text-sm mb-1">Dreifach verblindet</h4>
            <p className="font-serif text-sm text-ink leading-relaxed">Zusätzlich weiß der Datenanalyst nicht die Gruppenzugehörigkeit.</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-6">
          <p className="font-serif text-body text-ink leading-relaxed">
            <CitationTooltip citation="Orne, M. T. (1962). On the social psychology of the psychological experiment. American Psychologist, 17(11), 776-783.">
              Orne (1962)
            </CitationTooltip>{" "}
            beschrieb den "Demand Character" — Probanden versuchen, das vermutete Ergebnis zu bestätigen.{" "}
            <CitationTooltip citation="Rosenthal, R. (1966). Experimenter Effects in Behavioral Research. Appleton-Century-Crofts.">
              Rosenthal (1966)
            </CitationTooltip>{" "}
            zeigte, dass Experimentatoren unbewusst Probanden "hinführen" können (Rosenthal-Effekt).
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
              <span>Experimentelle Designs mit Randomisierung ermöglichen <strong>kausale Schlüsse</strong> — quasi-experimentelle und korrelative Designs nicht.</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">2</span>
              <span><strong>Interne Validität</strong> wird durch acht klassische Bedrohungen gefährdet (History, Maturation, Testeffekt, Instrumentierung, Regression, Selektion, Mortalität).</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">3</span>
              <span><strong>Externe Validität</strong> (Generaliserbarkeit) steht oft im Trade-off zur internen Validität.</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">4</span>
              <span><strong>Kontrollmethoden</strong> (Randomisierung, Matching, Counterbalancing, Kontrollgruppen, Blindheit) sichern die Qualität.</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">5</span>
              <span><strong>Demand Character</strong> und <strong>Rosenthal-Effekt</strong> zeigen: Auch subtile Erwartungen können Ergebnisse verfälschen.</span>
            </li>
          </ol>
        </div>

        {/* Literatur */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Literatur
        </h2>

        <div className="bg-cream border border-creamDark rounded-lg p-6 space-y-3">
          <p className="font-serif text-sm text-ink leading-relaxed">
            Campbell, D. T. & Stanley, J. C. (1963). <em>Experimental and Quasi-Experimental Designs for Research</em>. Houghton Mifflin.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Shadish, W. R., Cook, T. D. & Campbell, D. T. (2002). <em>Experimental and Quasi-Experimental Designs for Generalized Causal Inference</em>. Houghton Mifflin.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Rosenthal, R. (1966). <em>Experimenter Effects in Behavioral Research</em>. Appleton-Century-Crofts.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Orne, M. T. (1962). On the social psychology of the psychological experiment. <em>American Psychologist, 17</em>(11), 776-783.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Henrich, J., Heine, S. J. & Norenzayan, A. (2010). The weirdest people in the world? <em>Behavioral and Brain Sciences, 33</em>(2-3), 61-83.
          </p>
        </div>

        {/* Zum Weiterforschen */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Zum Weiterforschen
        </h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
          <p className="font-serif text-body text-ink leading-relaxed">
            Erkunde verwandte Themen der psychologischen Methodenlehre:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/signifikanztestung"
              className="block bg-white border border-blue-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h4 className="font-serif font-semibold text-blue-800">Signifikanztestung & p-Werte</h4>
              <p className="font-serif text-sm text-ink mt-1">Wie wir aus Daten Schlüsse ziehen — und welche Fehler dabei lauern.</p>
            </Link>
            <Link
              to="/psychometrie"
              className="block bg-white border border-blue-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h4 className="font-serif font-semibold text-blue-800">Psychometrische Gütekriterien</h4>
              <p className="font-serif text-sm text-ink mt-1">Was macht einen psychologischen Test wissenschaftlich?</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
