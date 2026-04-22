import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import DefinitionTooltip from '@/components/DefinitionTooltip';
import CitationTooltip from '@/components/CitationTooltip';
import Illustration from '@/components/Illustration';

export default function Attribution() {
  return (
    <Layout>
      {/* Hero Mini */}
      <section className="bg-creamDark py-12">
        <div className="container-prose">
          <span className="font-sans text-sm font-medium uppercase tracking-widest text-cornflower mb-2 block">
            Sozialpsychologie
          </span>
          <h1 className="font-serif font-bold text-h1 text-ink">
            Attributionstheorie
          </h1>
          <p className="font-serif text-subtitle text-ink mt-3">
            Warum Menschen das tun, was sie tun — Die Psychologie der Ursachenzuschreibung
          </p>
        </div>
      </section>

      <main className="bg-creamLight">
        <div className="container-prose py-8">

          {/* Einleitung */}
          <section>
            <p className="font-serif text-body text-ink leading-relaxed">
              Dein Freund kommt zu spät. Denkst du: „Er ist unzuverlässig" (intern) oder „Die Bahn
              hatte Verspätung" (extern)? Diese <strong>Ursachenzuschreibung</strong> bestimmt, wie
              du dich fühlst und handelst. Die Attributionstheorie erforscht systematisch, wie Menschen
              solche <DefinitionTooltip term="Attribution" definition="Die Zuweisung von Ursachen zu Verhalten oder Ereignissen. Die Attribution beeinflusst Emotionen, Erwartungen und zukünftiges Verhalten.">Ursachen zuweisen</DefinitionTooltip>.
            </p>
          </section>

          {/* Legend Box */}
          <div className="bg-paleBlue rounded-xl p-5 mt-8 border border-cornflower/20">
            <p className="font-sans text-sm text-ink leading-relaxed">
              <strong className="text-cornflower">Blaue Begriffe</strong> enthalten Definitionen —{' '}
              hover oder klicke für Erklärungen.{' '}
              <strong className="text-terracotta">Rote Zitate</strong> zeigen Originalquellen und
              Kontext der Forschung.
            </p>
          </div>

          {/* Heiders naive Psychologie */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Heiders „Naive Psychologie"
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Fritz Heider legte den Grundstein: Menschen sind <strong>„naive Wissenschaftler"</strong>,
              die ständig nach Ursachen suchen, um die soziale Welt vorhersehbar zu machen. Seine
              zentrale Unterscheidung:
            </p>
            <div className="bg-white rounded-xl p-6 mt-6 border border-sand shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-l-4 border-cornflower pl-4">
                  <h3 className="font-sans font-semibold text-ink mb-2">
                    Interne (dispositionelle) Attribution
                  </h3>
                  <p className="font-serif text-sm text-ink leading-relaxed">
                    Die Ursache liegt <strong>in der Person</strong> selbst — Persönlichkeit,
                    Fähigkeiten, Charakter, Einstellungen. Beispiel: „Er hat bestanden, weil er
                    begabt ist."
                  </p>
                </div>
                <div className="border-l-4 border-terracotta pl-4">
                  <h3 className="font-sans font-semibold text-ink mb-2">
                    Externe (situationale) Attribution
                  </h3>
                  <p className="font-serif text-sm text-ink leading-relaxed">
                    Die Ursache liegt <strong>in der Situation</strong> — Umstände, Glück, andere
                    Personen, Aufgabenmerkmale. Beispiel: „Er hat bestanden, weil die Prüfung leicht
                    war."
                  </p>
                </div>
              </div>
            </div>

            <CitationTooltip
              citation="Heider, F. (1958). *The psychology of interpersonal relations*. Wiley."
            >
              Heiders Buch gilt als Gründungswerk der Attributionstheorie und beeinflusst die
              Sozialpsychologie bis heute.
            </CitationTooltip>
          </section>

          {/* Kelleys Kovariationsmodell */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Kelleys Kovariationsmodell
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Harold Kelley erweiterte Heiders Ansatz: Wir nutzen <strong> drei Informationsdimensionen</strong>,
              um Ursachen zu diagnostizieren. Stell dir vor: Maria lacht beim Komiker. Warum?
            </p>

            <div className="bg-white rounded-xl p-6 mt-6 border border-sand shadow-sm">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-cornflower text-white font-sans font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    K
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-ink">Konsistenz</h3>
                    <p className="font-serif text-sm text-ink leading-relaxed">
                      Verhält sich die Person <strong>immer so</strong>? Lacht Maria jedes Mal beim
                      Komiker? → Hohe Konsistenz spricht für eine interne Ursache.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-terracotta text-white font-sans font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    D
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-ink">Unterscheidbarkeit (Distinctiveness)</h3>
                    <p className="font-serif text-sm text-ink leading-relaxed">
                      Verhält sich die Person <strong>nur in dieser Situation</strong> so? Lacht Maria
                      nur bei diesem Komiker oder bei allen? → Hohe Unterscheidbarkeit spricht für eine
                      externe Ursache (der Komiker ist besonders lustig).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-ink text-white font-sans font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    K
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-ink">Konsens</h3>
                    <p className="font-serif text-sm text-ink leading-relaxed">
                      Verhalten sich <strong>andere Personen ähnlich</strong>? Lachen alle beim
                      Komiker? → Hoher Konsens spricht für eine externe Ursache (der Komiker ist
                      objektiv lustig).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-serif text-body text-ink leading-relaxed mt-6">
              Wenn alle drei Dimensionen <strong>hoch</strong> sind (Maria lacht immer, nur bei
              diesem Komiker, und alle lachen), folgern wir eine{' '}
              <strong>externe Attribution</strong>: Der Komiker ist besonders witzig. Wenn nur die
              Konsistenz hoch ist (Maria lacht immer, bei allen Komikern, und niemand sonst lacht),
              folgern wir eine <strong>interne Attribution</strong>: Maria lacht einfach gerne.
            </p>

            <CitationTooltip
              citation="Kelley, H. H. (1967). Attribution theory in social psychology. In D. Levine (Ed.), *Nebraska Symposium on Motivation* (Vol. 15, pp. 192–238). University of Nebraska Press."
            >
              Kelley formulierte das Kovariationsprinzip als systematisches Modell für
              Alltagsattributionen.
            </CitationTooltip>
          </section>

          {/* Weiners 3D-Modell */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Weiners dreidimensionales Attributionsmodell
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Bernard Weiner ergänzte die Attributionstheorie um eine entscheidende Dimension:
              <strong> die Zeit</strong> und <strong>die Kontrollierbarkeit</strong>. Sein Modell ist
              besonders wichtig für die Leistungsmotivation.
            </p>

            <div className="bg-white rounded-xl p-6 mt-6 border border-sand shadow-sm">
              <h3 className="font-sans font-semibold text-ink mb-4">
                Die drei Dimensionen
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-cornflower/10 rounded-lg p-4 text-center">
                  <span className="font-sans font-bold text-cornflower">Lokus</span>
                  <p className="font-serif text-sm text-ink mt-2">
                    Intern ↔ Extern
                  </p>
                </div>
                <div className="bg-terracotta/10 rounded-lg p-4 text-center">
                  <span className="font-sans font-bold text-terracotta">Stabilität</span>
                  <p className="font-serif text-sm text-ink mt-2">
                    Stabil ↔ Variabel
                  </p>
                </div>
                <div className="bg-ink/10 rounded-lg p-4 text-center">
                  <span className="font-sans font-bold text-ink">Kontrollierbarkeit</span>
                  <p className="font-serif text-sm text-ink mt-2">
                    Kontrollierbar ↔ Nicht kontrollierbar
                  </p>
                </div>
              </div>

              <h3 className="font-sans font-semibold text-ink mb-4">
                Beispiel: Attributionen für Prüfungserfolg
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-serif text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-ink">
                      <th className="py-2 pr-4 font-semibold">Attribution</th>
                      <th className="py-2 pr-4 font-semibold">Lokus</th>
                      <th className="py-2 pr-4 font-semibold">Stabilität</th>
                      <th className="py-2 font-semibold">Kontrollierbarkeit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-sand">
                      <td className="py-3 pr-4 font-semibold">Begabung</td>
                      <td className="py-3 pr-4 text-cornflower">Intern</td>
                      <td className="py-3 pr-4">Stabil</td>
                      <td className="py-3 text-terracotta">Nicht kontrollierbar</td>
                    </tr>
                    <tr className="border-b border-sand">
                      <td className="py-3 pr-4 font-semibold">Anstrengung</td>
                      <td className="py-3 pr-4 text-cornflower">Intern</td>
                      <td className="py-3 pr-4">Variabel</td>
                      <td className="py-3 text-cornflower">Kontrollierbar</td>
                    </tr>
                    <tr className="border-b border-sand">
                      <td className="py-3 pr-4 font-semibold">Aufgabenschwierigkeit</td>
                      <td className="py-3 pr-4 text-terracotta">Extern</td>
                      <td className="py-3 pr-4">Stabil</td>
                      <td className="py-3 text-terracotta">Nicht kontrollierbar</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold">Glück</td>
                      <td className="py-3 pr-4 text-terracotta">Extern</td>
                      <td className="py-3 pr-4">Variabel</td>
                      <td className="py-3 text-terracotta">Nicht kontrollierbar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="font-serif text-body text-ink leading-relaxed mt-6">
              Weiners Modell erklärt, <strong>warum Attributionen gefühle und Verhalten beeinflussen</strong>:
              Misserfolg auf mangelnde Begabung (intern, stabil, nicht kontrollierbar) zurückzuführen,
              führt zu Hoffnungslosigkeit. Misserfolg auf mangelnde Anstrengung (intern, variabel,
              kontrollierbar) führt zu Schuld — aber auch zu der Überzeugung, beim nächsten Mal mehr
              zu tun.
            </p>

            <CitationTooltip
              citation="Weiner, B. (1985). An attributional theory of achievement motivation and emotion. *Psychological Review*, 92(4), 548–573."
            >
              Weiners Artikel ist der einflussreichste theoretische Beitrag zur Attributionsforschung
              in der Leistungsmotivation.
            </CitationTooltip>

            <CitationTooltip
              citation="Weiner, B. (1986). *An attributional theory of motivation and emotion*. Springer."
            >
              In seinem Buch führt Weiner das 3D-Modell vollständig aus und verbindet es mit Emotionen.
            </CitationTooltip>

            <Illustration
              src="/illu-attribution-dimensions.png"
              alt="Attributionsdimensionen"
              caption={
                <>
                  Weiners dreidimensionales <strong>Attributionsmodell</strong>: Lokus × Stabilität ×
                  Kontrollierbarkeit.
                </>
              }
              figureNumber={1}
            />
          </section>

          {/* Attribution & Leistung */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Attribution und Leistung: Optimistisch vs. pessimistisch
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Martin Seligman zeigte, dass <strong>Attributionsstile</strong> langfristig die
              Leistung und das Wohlbefinden prägen:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-cornflower/10 rounded-xl p-5 border border-cornflower/20">
                <h3 className="font-sans font-semibold text-cornflower mb-3">
                  Optimistischer Stil
                </h3>
                <ul className="font-serif text-sm text-ink leading-relaxed space-y-2 list-disc list-inside">
                  <li>
                    <strong>Misserfolg = temporär</strong> — „Diesmal habe ich nicht bestanden"
                  </li>
                  <li>
                    <strong>Misserfolg = spezifisch</strong> — „Nur in Mathe war es schwierig"
                  </li>
                  <li>
                    <strong>Misserfolg = extern</strong> — „Die Prüfung war unfaire"
                  </li>
                </ul>
                <p className="font-serif text-sm text-ink mt-3">
                  → Bewältigungsmotivation bleibt hoch, Depressionen unwahrscheinlicher.
                </p>
              </div>
              <div className="bg-terracotta/10 rounded-xl p-5 border border-terracotta/20">
                <h3 className="font-sans font-semibold text-terracotta mb-3">
                  Pessimistischer Stil
                </h3>
                <ul className="font-serif text-sm text-ink leading-relaxed space-y-2 list-disc list-inside">
                  <li>
                    <strong>Misserfolg = permanent</strong> — „Ich werde nie bestehen"
                  </li>
                  <li>
                    <strong>Misserfolg = global</strong> — „Ich bin in allem schlecht"
                  </li>
                  <li>
                    <strong>Misserfolg = intern</strong> — „Ich bin einfach zu dumm"
                  </li>
                </ul>
                <p className="font-serif text-sm text-ink mt-3">
                  → Gelernte Hilflosigkeit, erhöhtes Depressionsrisiko.
                </p>
              </div>
            </div>

            <p className="font-serif text-body text-ink leading-relaxed mt-6">
              Diese Verbindung führte Seligman zu seinem Konzept der{' '}
              <DefinitionTooltip term="Gelernte Hilflosigkeit" definition="Ein Zustand, in dem Menschen aufhören, aktiv Probleme zu lösen, weil sie gelernt haben, dass ihre Handlungen keine Wirkung haben. Ursprünglich bei Hunden experimentell nachgewiesen.">gelernten Hilflosigkeit</DefinitionTooltip>{' '}
              — einem Muster, bei dem negative Ereignisse als unveränderlich und selbstverschuldet
              gesehen werden, was Handlungsunfähigkeit erzeugt.
            </p>

            <CitationTooltip
              citation="Seligman, M. E. P. (1975). *Helplessness: On depression, development, and death*. W. H. Freeman."
            >
              Seligmans Monografie etablierte die gelernte Hilflosigkeit als zentrales Konzept der
              klinischen und Motivationspsychologie.
            </CitationTooltip>
          </section>

          {/* Attributionsfehler */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Systematische Fehler in der Attribution
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Menschen folgen beim Attribuieren nicht immer logischen Regeln. Drei besonders robuste
              Fehlermuster:
            </p>

            <div className="space-y-4 mt-4">
              <div className="bg-white rounded-xl p-6 border border-sand shadow-sm">
                <h3 className="font-sans font-semibold text-ink mb-2">
                  Fundamentaler Attributionsfehler
                </h3>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  Wir neigen dazu, das Verhalten <strong>anderer</strong> eher ihrer Persönlichkeit
                  (intern) zuzuschreiben — während wir unser eigenes Verhalten stärker durch die
                  Situation (extern) erklären. Beispiel: Ein Kollege schreit im Meeting → „Er ist
                  ein Aggressiver Typ." Wir selbst schreien → „Ich hatte einen stressigen Tag."
                </p>

                <CitationTooltip
                  citation="Ross, L. (1977). The intuitive psychologist and his shortcomings. In L. Berkowitz (Ed.), *Advances in experimental social psychology* (Vol. 10, pp. 173–220). Academic Press."
                >
                  Ross prägte den Begriff „fundamentaler Attributionsfehler" und zeigte seine
                  Robustheit über Situationen hinweg.
                </CitationTooltip>
              </div>

              <div className="bg-white rounded-xl p-6 border border-sand shadow-sm">
                <h3 className="font-sans font-semibold text-ink mb-2">
                  Akteur-Beobachter-Differenz
                </h3>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  Als <strong>Akteure</strong> sehen wir unsere Handlungen situationell bedingt — als
                  <strong>Beobachter</strong> attribuieren wir dispositional. Warum? Wir kennen unsere
                  eigene Vergangenheit und Situation, beim anderen sehen wir nur das Verhalten.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-sand shadow-sm">
                <h3 className="font-sans font-semibold text-ink mb-2">
                  Selbstwertdienliche Verzerrung
                </h3>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  Erfolge schreiben wir <strong>uns selbst</strong> zu (intern), Misserfolge der{' '}
                  <strong>Situation</strong> (extern). Dies schützt das Selbstwertgefühl — ist aber
                  nicht immer realistisch.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-sand shadow-sm">
                <h3 className="font-sans font-semibold text-ink mb-2">
                  Kulturelle Unterschiede
                </h3>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  In <strong>individualistischen Kulturen</strong> (z. B. USA) attribuieren wir stärker
                  intern — die Person ist für ihren Erfolg verantwortlich. In{' '}
                  <strong>kollektivistischen Kulturen</strong> (z. B. China) attribuieren wir stärker
                  extern — soziale Kontexte und Beziehungen sind entscheidend.
                </p>

                <CitationTooltip
                  citation="Morris, M. W., & Peng, K. (1994). Culture and cause: American and Chinese attributions for social and physical events. *Journal of Personality and Social Psychology*, 67(6), 949–971."
                >
                  Morris und Peng zeigten kulturelle Unterschiede in der Attribution mit
                  Zeitungsanalysen von Gewalttaten — Amerikaner attribuierten stärker dispositionell.
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
                  <strong>Heider</strong> begründete die Attributionstheorie mit der Unterscheidung
                  interner vs. externer Ursachen — der „naive Wissenschaftler" sucht nach Erklärungen.
                </li>
                <li>
                  <strong>Kelleys Kovariationsmodell</strong> nutzt drei Dimensionen (Konsistenz,
                  Unterscheidbarkeit, Konsens), um systematisch Ursachen zu diagnostizieren.
                </li>
                <li>
                  <strong>Weiners 3D-Modell</strong> (Lokus × Stabilität × Kontrollierbarkeit)
                  erklärt, wie Attributionen Emotionen und Leistungsmotivation beeinflussen.
                </li>
                <li>
                  <strong>Attributionsstile</strong> (optimistisch vs. pessimistisch) prägen langfristig
                  Wohlbefinden und Leistung; Seligmans gelernte Hilflosigkeit zeigt die negativen
                  Konsequenzen.
                </li>
                <li>
                  <strong>Attributionsfehler</strong> (fundamentaler Attributionsfehler,
                  Akteur-Beobachter-Differenz, Selbstwertdienliche Verzerrung) zeigen systematische
                  Verzerrungen; Kulturen unterscheiden sich in ihrer Attributionstendenz.
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
                Heider, F. (1958). <em>The psychology of interpersonal relations</em>. Wiley.
              </li>
              <li>
                Kelley, H. H. (1967). Attribution theory in social psychology. In D. Levine (Ed.),{' '}
                <em>Nebraska Symposium on Motivation</em> (Vol. 15, pp. 192–238). University of
                Nebraska Press.
              </li>
              <li>
                Weiner, B. (1985). An attributional theory of achievement motivation and emotion.{' '}
                <em>Psychological Review</em>, 92(4), 548–573.
              </li>
              <li>
                Weiner, B. (1986). <em>An attributional theory of motivation and emotion</em>. Springer.
              </li>
              <li>
                Seligman, M. E. P. (1975). <em>Helplessness: On depression, development, and death</em>.
                W. H. Freeman.
              </li>
              <li>
                Ross, L. (1977). The intuitive psychologist and his shortcomings. In L. Berkowitz (Ed.),{' '}
                <em>Advances in experimental social psychology</em> (Vol. 10, pp. 173–220). Academic Press.
              </li>
              <li>
                Morris, M. W., & Peng, K. (1994). Culture and cause: American and Chinese attributions
                for social and physical events. <em>Journal of Personality and Social Psychology</em>,{' '}
                67(6), 949–971.
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
                to="/selbstwirksamkeit"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                Selbstwirksamkeit nach Bandura
              </Link>
              <Link
                to="/leistungsmotivation"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                Leistungsmotivation
              </Link>
              <Link
                to="/sozialkognition"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                Soziale Kognition
              </Link>
              <Link
                to="/lernen-hilflosigkeit"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                Gelernte Hilflosigkeit
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
