import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import DefinitionTooltip from '@/components/DefinitionTooltip';
import CitationTooltip from '@/components/CitationTooltip';
import Illustration from '@/components/Illustration';

export default function Psychometrie() {
  return (
    <Layout>
      {/* Hero Mini */}
      <section className="py-12 bg-creamDark">
        <div className="container-prose">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
            Diagnostik
          </span>
          <h1 className="font-serif font-bold text-h1 text-ink">
            Psychometrische Gütekriterien
          </h1>
          <p className="font-serif text-body text-ink mt-4 leading-relaxed">
            Gute Tests, schlechte Tests — Wie man psychologische Verfahren bewertet
          </p>
        </div>
      </section>

      <div className="container-prose py-12">
        {/* Einleitung */}
        <p className="font-serif text-body text-ink leading-relaxed">
          Du machst einen Persönlichkeitstest online. Er sagt: „Du bist introvertiert." Kannst du dem vertrauen? Drei Kriterien helfen, diese Frage zu beantworten:{" "}
          <strong>Objektivität</strong>, <strong>Reliabilität</strong> und <strong>Validität</strong>.
        </p>

        {/* Abbildung 1 */}
        <Illustration
          src="/illu-reliability-validity.png"
          alt="Reliabilität und Validität"
          caption={<>
            Zielscheiben-Analogie: Nur wenn Messungen <strong>zuverlässig</strong> (eng beieinander) UND <strong>gültig</strong> (am Zentrum) sind, ist der Test gut.
          </>}
          figureNumber={1}
          aspectRatio="1/1"
        />

        {/* Objektivität */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          1. Objektivität: Unabhängigkeit vom Testleiter
        </h2>

        <p className="font-serif text-body text-ink leading-relaxed">
          Ein objektiver Test liefert das <strong>gleiche Ergebnis</strong> — egal, wer ihn durchführt, auswertet oder interpretiert. Ohne Objektivität sind Reliabilität und Validität unmöglich.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">Durchführungsobjektivität</h4>
            <p className="font-serif text-sm text-ink leading-relaxed">
              Gleiche Instruktionen für alle Probanden. Kein Spielraum für den Testleiter, das Vorgehen zu variieren.
            </p>
          </div>
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">Auswertungsobjektivität</h4>
            <p className="font-serif text-sm text-ink leading-relaxed">
              Klare, eindeutige Scoring-Regeln. Zwei unabhängige Rater kommen zum selben Ergebnis.
            </p>
          </div>
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">Interpretationsobjektivität</h4>
            <p className="font-serif text-sm text-ink leading-relaxed">
              Normbasierte Interpretation. Ein IQ von 115 bedeutet immer das Gleiche — unabhängig vom Psychologen.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-6">
          <p className="font-serif text-body text-ink leading-relaxed">
            <CitationTooltip citation="Lienert, G. A. & Raatz, U. (1998). Testaufbau und Testanalyse (6. Aufl.). Psychologie Verlags Union.">
              Lienert &amp; Raatz (1998)
            </CitationTooltip>{" "}
            betonen: Objektivität ist die <strong>Grundvoraussetzung</strong> jeder Testgüte. Ein nicht-objektiver Test ist kein wissenschaftliches Instrument.
          </p>
        </div>

        {/* Reliabilität */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          2. Reliabilität: Zuverlässigkeit der Messung
        </h2>

        <p className="font-serif text-body text-ink leading-relaxed">
          Ein reliabler Test liefert bei <strong>wiederholter Anwendung unter gleichen Bedingungen</strong> ähnliche Ergebnisse. Reliabilität beschreibt die Messgenauigkeit — frei von Zufallsfehlern.
        </p>

        <div className="mt-6 space-y-4">
          {/* Test-Retest */}
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">
              <DefinitionTooltip term="Test-Retest-Reliabilität" definition="Wiederholte Messung desselben Tests zu verschiedenen Zeitpunkten zur Bestimmung der zeitlichen Stabilität.">
                Korrelation zwischen den Ergebnissen desselben Tests, der zu zwei verschiedenen Zeitpunkten (z. B. mit 4 Wochen Abstand) durchgeführt wird.
              </DefinitionTooltip>
            </h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              Derselbe Test wird nach einem Zeitintervall erneut durchgeführt. Der Korrelationskoeffizient zwischen beiden Messungen ist das Maß der Stabilität.
            </p>
            <p className="font-serif text-sm text-ink mt-2">
              <strong>Voraussetzung:</strong> Das gemessene Merkmal sollte sich im Intervall nicht verändert haben. Nicht geeignet für Zustandsmerkmale (z. B. aktuelle Stimmung).
            </p>
          </div>

          {/* Paralleltest */}
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">
              <DefinitionTooltip term="Paralleltest-Reliabilität" definition="Vergleich zweier äquivalenter Testformen, um die Konsistenz über verschiedene Items zu prüfen.">
                Korrelation zwischen zwei äquivalenten Testformen, die dieselbe Konstruktion messen, aber unterschiedliche Itemformulierungen verwenden.
              </DefinitionTooltip>
            </h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              Zwei verschiedene, aber inhaltlich äquivalente Testformen werden eingesetzt. Vermeidet Testwiederholungseffekte.
            </p>
          </div>

          {/* Split-Half */}
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">
              <DefinitionTooltip term="Split-Half-Reliabilität" definition="Aufteilung eines Tests in zwei Hälften und Korrelation der Ergebnisse (Bravais-Guttman-Formel).">
                Der Test wird in zwei Hälften geteilt (z. B. ungerade vs. gerade Items) und die Korrelation zwischen beiden Hälften berechnet. Nach der Spearman-Brown-Formel korrigiert.
              </DefinitionTooltip>
            </h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              Der Test wird in zwei Hälften aufgeteilt (z. B. ungerade vs. gerade Items). Die Korrelation zwischen beiden Hälften wird mit der <strong>Spearman-Brown-Formel</strong> korrigiert:
            </p>
            <div className="bg-white rounded-lg p-4 border border-creamDark mt-3 text-center">
              <code className="font-mono text-lg">r<sub>tt</sub> = 2 · r<sub>hälfte</sub> / (1 + r<sub>hälfte</sub>)</code>
            </div>
          </div>

          {/* Interne Konsistenz */}
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">
              <DefinitionTooltip term="Cronbach's Alpha (α)" definition="Ein zentrales Konzept in der Psychologie.">
                Ein Maß für die interne Konsistenz eines Tests. Gibt an, wie stark die Items eines Tests miteinander korrelieren. Werte ≥ .70 gelten als akzeptabel, ≥ .80 als gut, ≥ .90 als exzellent.
              </DefinitionTooltip>
            </h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              Cronbach&apos;s α ist das am häufigsten verwendete Maß der internen Konsistenz. Es quantifiziert, wie gut die Items <strong>ein</strong> Konstrukt messen.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div className="bg-amber-50 rounded p-3 text-center border border-amber-200">
                <p className="font-mono font-bold text-amber-700">α ≥ .70</p>
                <p className="font-serif text-xs text-ink">Akzeptabel</p>
              </div>
              <div className="bg-green-50 rounded p-3 text-center border border-green-200">
                <p className="font-mono font-bold text-green-700">α ≥ .80</p>
                <p className="font-serif text-xs text-ink">Gut</p>
              </div>
              <div className="bg-blue-50 rounded p-3 text-center border border-blue-200">
                <p className="font-mono font-bold text-blue-700">α ≥ .90</p>
                <p className="font-serif text-xs text-ink">Exzellent</p>
              </div>
            </div>
          </div>

          {/* Inter-Rater */}
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">
              <DefinitionTooltip term="Inter-Rater-Reliabilität (Cohen's κ)" definition="Ein zentrales Konzept in der Psychologie.">
                Cohen's Kappa (κ) korrigiert die Übereinstimmung zwischen zwei Ratern um den Zufall. κ = 0 bedeutet Zufallsübereinstimmung, κ = 1 bedeutet perfekte Übereinstimmung.
              </DefinitionTooltip>
            </h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              Wichtig bei Beurteilungsverfahren (z. B. klinische Diagnosen, Essays). Zwei unabhängige Rater bewerten dieselben Protokolle — ihre Übereinstimmung wird berechnet.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-6">
          <p className="font-serif text-body text-ink leading-relaxed">
            <CitationTooltip citation="Cronbach, L. J. (1951). Coefficient alpha and the internal structure of tests. Psychometrika, 16</em>(3), 297-334.">
              Cronbach (1951)
            </CitationTooltip>{" "}
            führte das nach ihm benannte Alpha ein. Eine umfassende deutschsprachige Darstellung bieten{" "}
            <CitationTooltip citation="Moosbrugger, H. & Kelava, A. (2012). Testtheorie und Fragebogenkonstruktion (2. Aufl.). Springer.">
              Moosbrugger &amp; Kelava (2012)
            </CitationTooltip>.
          </p>
        </div>

        {/* Abbildung 2 */}
        <Illustration
          src="/illu-test-quality.png"
          alt="Testgütekriterien"
          caption={<>
            Die drei <strong>Hauptgütekriterien</strong> bilden ein hierarchisches System: Objektivität ist Grundlage für Reliabilität, die wiederum Voraussetzung für Validität ist.
          </>}
          figureNumber={2}
        />

        {/* Validität */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          3. Validität: Gültigkeit der Messung
        </h2>

        <p className="font-serif text-body text-ink leading-relaxed">
          Validität ist die <strong>Königin</strong> der Gütekriterien: Misst der Test tatsächlich das, was er messen soll? Ein Test kann hoch reliabel und völlig ungültig sein (Beispiel: Kopfumfang misst zuverlässig — aber nicht Intelligenz).
        </p>

        <div className="mt-6 space-y-4">
          {/* Inhaltsvalidität */}
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">Inhaltsvalidität</h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              Deckt der Test das gesamte Konstrukt ab? Ein Intelligenztest, der nur mathematische Aufgaben enthält, hat keine Inhaltsvalidität für allgemeine Intelligenz.
            </p>
            <p className="font-serif text-sm text-ink mt-2">
              Beurteilt durch Expertenpanel: Repräsentieren die Items das gesamte Definitionsmerkmal?
            </p>
          </div>

          {/* Kriteriumsvalidität */}
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">
              <DefinitionTooltip term="Kriteriumsvalidität" definition="Zusammenhang zwischen Testwerten und einem externen Kriterium (konkurrent oder prädiktiv).">
                Der Zusammenhang zwischen Testwert und einem externen Kriterium. Kann konvergent (gleichzeitig) oder prädiktiv (zukünftig) sein.
              </DefinitionTooltip>
            </h4>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className="bg-white rounded-lg p-4 border border-creamDark">
                <p className="font-serif font-semibold text-ink text-sm mb-1">Konvergente Validität</p>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  Der Test korreliert <strong>jetzt</strong> mit einem anderen Maß desselben Konstrukts.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-creamDark">
                <p className="font-serif font-semibold text-ink text-sm mb-1">Prädiktive Validität</p>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  Der Test sagt ein <strong>zukünftiges</strong> Kriterium voraus (z. B. Eignungstest → Berufserfolg).
                </p>
              </div>
            </div>
          </div>

          {/* Konstruktvalidität */}
          <div className="bg-cream border border-creamDark rounded-lg p-5">
            <h4 className="font-serif font-semibold text-ink mb-2">
              <DefinitionTooltip term="Konstruktvalidität" definition="Messung des theoretischen Konstrukts durch konvergente und diskriminante Validität.">
                Der Test misst das theoretische Konstrukt, das er messen soll. Beurteilt über konvergente und diskriminante Validität mittels MTMM-Matrizen.
              </DefinitionTooltip>
            </h4>
            <p className="font-serif text-body text-ink leading-relaxed">
              Die Königsdisziplin der Validitätsprüfung: Misst der Test das <strong>theoretische Konstrukt</strong>, das er beansprucht?
            </p>
            <p className="font-serif text-body text-ink leading-relaxed mt-2">
              <strong>Konvergente Validität:</strong> Hohe Korrelation mit anderen Tests desselben Konstrukts.{" "}
              <strong>Diskriminante Validität:</strong> Niedrige Korrelation mit Tests <em>anderer</em> Konstrukte.
            </p>
            <p className="font-serif text-body text-ink leading-relaxed mt-2">
              Die{" "}
              <DefinitionTooltip term="MTMM-Matrix (Multitrait-Multimethod)" definition="Ein zentrales Konzept in der Psychologie.">
                Eine Matrix, die Korrelationen zwischen mehreren Traits (Konstrukten) und mehreren Messmethoden darstellt. Ermöglicht die Unterscheidung von trait-, method- und error-variance.
              </DefinitionTooltip>{" "}
              nach{" "}
              <CitationTooltip citation="Campbell, D. T. & Fiske, D. W. (1959). Convergent and discriminant validation by the multitrait-multimethod matrix. Psychological Bulletin, 56</em>(2), 81-105.">
                Campbell &amp; Fiske (1959)
              </CitationTooltip>{" "}
              ist das klassische Werkzeug zur Prüfung.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-6">
          <p className="font-serif text-body text-ink leading-relaxed">
            <CitationTooltip citation="Messick, S. (1995). Validity of psychological assessment. American Psychologist, 50</em>(9), 741-749.">
              Messick (1995)
            </CitationTooltip>{" "}
            erweiterte das Verständnis von Validität um <strong>Konsequenzen</strong> der Testnutzung: Ein Test ist nicht nur dann ungültig, wenn er das Falsche misst — sondern auch, wenn seine Anwendung schädliche Konsequenzen hat (z. B. diskriminierende Einstellungstests).
          </p>
        </div>

        {/* Zusammenhänge */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          4. Die hierarchische Beziehung: Ein sequenzieller Aufbau
        </h2>

        <p className="font-serif text-body text-ink leading-relaxed">
          Die drei Gütekriterien stehen nicht isoliert — sie bilden eine <strong>Notwendigkeitskette</strong>:
        </p>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-5 text-center min-w-[200px]">
            <h4 className="font-serif font-bold text-blue-800">Objektivität</h4>
            <p className="font-serif text-sm text-ink mt-1">Grundlage aller Güte</p>
          </div>
          <div className="text-2xl text-blue-400">→</div>
          <div className="bg-green-100 border-2 border-green-400 rounded-lg p-5 text-center min-w-[200px]">
            <h4 className="font-serif font-bold text-green-800">Reliabilität</h4>
            <p className="font-serif text-sm text-ink mt-1">Notwendig, nicht hinreichend</p>
          </div>
          <div className="text-2xl text-green-400">→</div>
          <div className="bg-purple-100 border-2 border-purple-400 rounded-lg p-5 text-center min-w-[200px]">
            <h4 className="font-serif font-bold text-purple-800">Validität</h4>
            <p className="font-serif text-sm text-ink mt-1">Oberstes Ziel</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="bg-cream border border-creamDark rounded-lg p-4">
            <p className="font-serif text-body text-ink leading-relaxed">
              <strong>Objektivität → Reliabilität:</strong> Ohne Objektivität variieren Ergebnisse je nach Testleiter — keine Zuverlässigkeit möglich.
            </p>
          </div>
          <div className="bg-cream border border-creamDark rounded-lg p-4">
            <p className="font-serif text-body text-ink leading-relaxed">
              <strong>Reliabilität → Validität:</strong> Ein unzuverlässiger Test kann nicht valide sein (Zufallsrauschen überdeckt den wahren Wert). Aber: Ein reliabler Test muss <strong>nicht</strong> valide sein (er kann systematisch das Falsche messen).
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-6">
          <p className="font-serif text-body text-ink leading-relaxed">
            <strong>Das Attenuation-Paradoxon:</strong> Höhere Reliabilität (z. B. durch mehr Items) kann die Validität <em>senken</em>, wenn die zusätzlichen Items irrelevantes Merkmal mitmessen. Mehr ist nicht immer besser!
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
              <span><strong>Objektivität</strong> sichert, dass Ergebnisse unabhängig vom Testleiter sind — sie ist Grundlage aller weiteren Gütekriterien.</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">2</span>
              <span><strong>Reliabilität</strong> (Zuverlässigkeit) gibt es in fünf Formen: Test-Retest, Paralleltest, Split-Half, interne Konsistenz (Cronbach's α) und Inter-Rater (Cohen's κ).</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">3</span>
              <span><strong>Validität</strong> (Gültigkeit) umfasst Inhalts-, Kriteriums- und Konstruktvalidität. Letztere wird über MTMM-Matrizen geprüft.</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">4</span>
              <span>Die drei Kriterien bilden eine <strong>Hierarchie</strong>: Objektivität → Reliabilität → Validität (jeweils notwendig, aber nicht hinreichend).</span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ink text-cream rounded-full flex items-center justify-center font-semibold text-xs">5</span>
              <span>Cronbach's α ≥ .70 ist akzeptabel, ≥ .80 gut, ≥ .90 exzellent — aber höhere Reliabilität kann die Validität senken (Attenuation-Paradoxon).</span>
            </li>
          </ol>
        </div>

        {/* Literatur */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Literatur
        </h2>

        <div className="bg-cream border border-creamDark rounded-lg p-6 space-y-3">
          <p className="font-serif text-sm text-ink leading-relaxed">
            Cronbach, L. J. (1951). Coefficient alpha and the internal structure of tests. <em>Psychometrika, 16</em>(3), 297-334.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Moosbrugger, H. &amp; Kelava, A. (2012). <em>Testtheorie und Fragebogenkonstruktion</em> (2. Aufl.). Springer.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Lienert, G. A. &amp; Raatz, U. (1998). <em>Testaufbau und Testanalyse</em> (6. Aufl.). Psychologie Verlags Union.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Messick, S. (1995). Validity of psychological assessment. <em>American Psychologist, 50</em>(9), 741-749.
          </p>
          <p className="font-serif text-sm text-ink leading-relaxed">
            Campbell, D. T. &amp; Fiske, D. W. (1959). Convergent and discriminant validation by the multitrait-multimethod matrix. <em>Psychological Bulletin, 56</em>(2), 81-105.
          </p>
        </div>

        {/* Zum Weiterforschen */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Zum Weiterforschen
        </h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
          <p className="font-serif text-body text-ink leading-relaxed">
            Erweitere dein Wissen in der psychologischen Diagnostik:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/versuchsplanung"
              className="block bg-white border border-blue-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h4 className="font-serif font-semibold text-blue-800">Experimentelle Versuchsplanung</h4>
              <p className="font-serif text-sm text-ink mt-1">Wie wir Kausalität durch kontrollierte Designs erkennen.</p>
            </Link>
            <Link
              to="/signifikanztestung"
              className="block bg-white border border-blue-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h4 className="font-serif font-semibold text-blue-800">Signifikanztestung &amp; p-Werte</h4>
              <p className="font-serif text-sm text-ink mt-1">Statistische Schlussfolgerungen: Was p-Werte bedeuten und was nicht.</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
