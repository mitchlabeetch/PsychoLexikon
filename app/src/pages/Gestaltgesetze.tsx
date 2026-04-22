import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import DefinitionTooltip from '@/components/DefinitionTooltip';
import CitationTooltip from '@/components/CitationTooltip';
import Illustration from '@/components/Illustration';

export default function Gestaltgesetze() {
  return (
    <Layout>
      {/* HeroMini */}
      <section className="bg-creamDark py-12">
        <div className="container-prose">
          <p className="text-sm font-sans uppercase tracking-wider text-ink/60 mb-2">
            Wahrnehmungspsychologie
          </p>
          <h1 className="font-serif text-h1 text-ink">
            Gestaltgesetze & Prägnanzprinzip
          </h1>
          <p className="font-serif text-body-lg text-ink/80 mt-3">
            Warum wir mehr sehen, als vor unseren Augen ist
          </p>
        </div>
      </section>

      <div className="container-prose py-8">
        {/* Legend */}
        <div className="bg-[#EFF6FF] border border-blue-200 rounded-lg p-4 mb-8">
          <p className="font-sans text-sm text-ink/80">
            <span className="inline-block w-3 h-3 rounded-full bg-blue-400 mr-2" />
            Blau unterstrichene Begriffe zeigen Definitionen beim Hover.
            <span className="inline-block w-3 h-3 rounded-full bg-red-400 ml-4 mr-2" />
            Rot unterstrichene Texte zeigen Quellenangaben beim Hover.
          </p>
        </div>

        {/* Einleitung */}
        <p className="font-serif text-body text-ink leading-relaxed">
          Schau dir drei ausgeschnittene Kreisbögen an, die ein Dreieck andeuten —
          du siehst ein weißes Dreieck, obwohl keines gezeichnet ist. Das ist nicht
          Magie. Das ist dein Wahrnehmungssystem, das nach{' '}
          <strong>Ganzheiten</strong> sucht. Die Berliner Schule der Gestaltpsychologie
          erforschte ab 1910 diese Prinzipien systematisch.
        </p>

        {/* Illustration 1 */}
        <Illustration
          src="/illu-gestalt-grouping.png"
          alt="Gestaltgesetze der Gruppierung"
          caption={
            <>
              Die <strong>Gestaltgesetze</strong> erklären, warum wir Punkte als
              Spalten (Nähe) oder Reihen (Ähnlichkeit) gruppieren.
            </>
          }
          figureNumber={1}
        />

        {/* Gestaltgesetze */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Die klassischen Gestaltgesetze
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          <CitationTooltip citation="Wertheimer, M. (1923). Untersuchungen zur Lehre von der Gestalt. II. Psychologische Forschung, 4, 301–350.">
            Wertheimer (1923)
          </CitationTooltip>{' '}
          formulierte die grundlegenden Gesetze, nach denen wir Reize organisieren.
          Sie erklären, warum wir aus einzelnen Elementen automatisch sinnvolle
          Einheiten konstruieren.
        </p>

        <h3 className="font-serif font-semibold text-h4 text-ink mt-8 mb-3">
          Gesetz der Nähe
        </h3>
        <p className="font-serif text-body text-ink leading-relaxed">
          Elemente, die räumlich nah beieinander liegen, werden als Gruppe
          wahrgenommen. Stell dir 12 Punkte vor, die in drei Reihen á vier Punkte
          angeordnet sind — du siehst <em>Reihen</em>. Ordne dieselben Punkte in
          vier Spalten á drei Punkte an — du siehst <em>Spalten</em>. Die Nähe
          überstimmt andere Ordnungsprinzipien.
        </p>

        <h3 className="font-serif font-semibold text-h4 text-ink mt-8 mb-3">
          Gesetz der Ähnlichkeit
        </h3>
        <p className="font-serif text-body text-ink leading-relaxed">
          Ähnliche Elemente werden gruppiert — nach Farbe, Form, Größe oder
          Orientierung. Ein Schachbrettmuster aus schwarzen und weißen Kreisen
          wahrnehmen wir als Reihen gleicher Farbe, nicht als abwechselnde Diagonalen.
          In einem Scatterplot markieren wir verschiedene Gruppen mit
          unterschiedlichen Farben — genau weil unser visuelles System Ähnlichkeit
          nutzt.
        </p>

        <h3 className="font-serif font-semibold text-h4 text-ink mt-8 mb-3">
          Gesetz der geschlossenen Form
        </h3>
        <p className="font-serif text-body text-ink leading-relaxed">
          Wir neigen dazu, offene Figuren als geschlossen wahrzunehmen. Zwei
          überlappende Kreise mit Lücken an den Schnittpunkten sehen wir dennoch als
          zwei vollständige Kreise — nicht als drei eigenwillige Formen. Das
          <strong>Prinzip der guten Gestalt</strong> treibt uns dazu, die einfachste
          mögliche Interpretation zu wählen.
        </p>

        <h3 className="font-serif font-semibold text-h4 text-ink mt-8 mb-3">
          Gesetz der guten Fortsetzung
        </h3>
        <p className="font-serif text-body text-ink leading-relaxed">
          Linien werden so wahrgenommen, dass sie sich möglichst glatt fortsetzen.
          Wenn zwei Linien sich kreuzen, sehen wir nicht zwei spitze Winkel,
          sondern zwei durchgehende Linien, die sich überkreuzen. Das erklärt, warum
          wir verschlungene Schnüre als separate, kontinuierliche Fäden erkennen.
        </p>

        <h3 className="font-serif font-semibold text-h4 text-ink mt-8 mb-3">
          Gesetz des gemeinsamen Schicksals
        </h3>
        <p className="font-serif text-body text-ink leading-relaxed">
          Elemente, die sich gemeinsam in dieselbe Richtung bewegen, werden als
          Einheit gesehen — unabhängig von ihrer räumlichen Nähe oder Ähnlichkeit.
          Ein Schwarm Vögel, der synchron durch den Himmel zieht, wird als eine
          Gruppe wahrgenommen, selbst wenn die einzelnen Vögel weit auseinanderliegen.
        </p>

        <h3 className="font-serif font-semibold text-h4 text-ink mt-8 mb-3">
          Figur-Grund-Organisation
        </h3>
        <p className="font-serif text-body text-ink leading-relaxed">
          Jede Wahrnehmung teilt sich in eine{' '}
          <DefinitionTooltip
            term="Figur"
            definition="Der vordergründige, hervorgehobene Teil einer Wahrnehmung, auf den sich die Aufmerksamkeit richtet."
          >
            Figur
          </DefinitionTooltip>{' '}
          (den hervorgehobenen Vordergrund) und einen{' '}
          <DefinitionTooltip
            term="Grund"
            definition="Der unauffällige Hintergrund einer Wahrnehmung, gegen den sich die Figur abhebt."
          >
            Grund
          </DefinitionTooltip>{' '}
          (den unauffälligen Hintergrund). Das klassische Beispiel ist{' '}
          <strong>Rubins Vase</strong>: Entweder siehst du eine weiße Vase auf
          schwarzem Grund — oder zwei schwarze Gesichter im Profil auf weißem Grund.
          Beide Interpretationen sind gleich valide, aber nicht gleichzeitig
          erlebbar. Diese <strong>Multistabilität</strong> zeigt, dass
          Wahrnehmung ein aktiver Konstruktionsprozess ist.
        </p>

        {/* Illustration 2 */}
        <Illustration
          src="/illu-praegnanz.png"
          alt="Prägnanzprinzip Beispiele"
          caption={
            <>
              <strong>Prägnanzprinzip</strong>: Wir sehen das einfachste,
              stabilste Objekt — ob Dreieck, Würfel oder Vase.
            </>
          }
          figureNumber={2}
        />

        {/* Prägnanzprinzip */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Das Prägnanzprinzip: Das Ganze ist anders als die Summe seiner Teile
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          <CitationTooltip citation="Koffka, K. (1935). Principles of Gestalt psychology. Harcourt, Brace and Company.">
            Koffka (1935)
          </CitationTooltip>{' '}
          prägte den berühmten Satz: „Das Ganze ist anders als die Summe seiner
          Teile." Diese <strong>Emergenz</strong> beschreibt, dass Eigenschaften
          einer Gestalt nicht aus den Eigenschaften ihrer Einzelteile vorhersagbar
          sind. Ein Dreieck hat die Eigenschaft „Dreieckigkeit" — keiner seiner
          drei Linien hat diese Eigenschaft für sich allein.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          <CitationTooltip citation="Köhler, W. (1947). Gestalt psychology. Liveright Publishing.">
            Köhler (1947)
          </CitationTooltip>{' '}
          unterschied vier Erscheinungsformen des Prägnanzprinzips:
        </p>

        <ul className="list-disc list-inside space-y-2 font-serif text-body text-ink leading-relaxed mt-4">
          <li>
            <strong>Emergenz</strong>: Neue Qualitäten entstehen durch die
            Anordnung von Teilen (z. B. ein Gesicht aus Punkten).
          </li>
          <li>
            <strong>Reifikation</strong>: Wir sehen Dinge, die physisch gar nicht
            da sind — wie das illusorische Dreieck von Kanizsa.
          </li>
          <li>
            <strong>Multistabilität</strong>: Wahrnehmungen wechseln zwischen
            mehreren stabilen Interpretationen — wie beim{' '}
            <DefinitionTooltip
              term="Necker-Würfel"
              definition="Durchsichtige Zeichnung eines Würfels, bei der die Vorder- und Rückseite wechseln können — ein klassisches Beispiel für multistabile Wahrnehmung."
            >
              Necker-Würfel
            </DefinitionTooltip>
            .
          </li>
          <li>
            <strong>Invarianz</strong>: Wir erkennen Objekte unabhängig von
            Rotation, Größe oder Beleuchtung — ein Hund bleibt ein Hund, egal aus
            welchem Winkel wir ihn sehen.
          </li>
        </ul>

        {/* Illustration 3 */}
        <Illustration
          src="/illu-optical-illusions.png"
          alt="Optische Illusionen"
          caption={
            <>
              Die <strong>Müller-Lyer-Illusion</strong> zeigt: Unsere Wahrnehmung
              ist keine passive Kamera, sondern ein aktiver Konstruktionsprozess.
            </>
          }
          figureNumber={3}
        />

        {/* Bottom-up vs Top-down */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Bottom-up vs. Top-down: Zwei Wege zur Wahrnehmung
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          <strong>Bottom-up-Verarbeitung</strong> ist datengesteuert: Die
          Reizeigenschaften bestimmen, was wir wahrnehmen. Helle Farben ziehen
          unsere Aufmerksamkeit an, starke Geräusche lenken uns ab — unabhängig
          von unseren Erwartungen. Das Auge sendet Signale zum Hirn, und diese
          Signale formen unsere Wahrnehmung.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          <strong>Top-down-Verarbeitung</strong> ist konzeptgesteuert: Unsere
          Erwartungen, Erfahrungen und Wissen formen, was wir sehen. Wenn du in
          einem fremdsprachigen Text ein Wort erwartest, liest du es vielleicht —
          auch wenn es gar nicht dort steht. Diese{' '}
          <DefinitionTooltip
            term="Wahrnehmungsset"
            definition="Bereitschaft, Reize in einer bestimmten Weise zu interpretieren, beeinflusst durch Erwartungen, Kontext und vorherige Erfahrungen."
          >
            perceptual set
          </DefinitionTooltip>{' '}
          zeigt die Macht der Erwartung.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          <CitationTooltip citation="Gibson, J. J. (1979). The ecological approach to visual perception. Houghton Mifflin.">
            Gibson (1979)
          </CitationTooltip>{' '}
          stellte mit seinem <strong>ökologischen Ansatz</strong> einen Gegenpol
          dar: Wahrnehmung brauche keine internen Konstruktionsprozesse, weil alle
          notwendige Information direkt in den Reizen vorhanden sei. Seine{' '}
          <DefinitionTooltip
            term="Affordanz"
            definition="Handlungsmöglichkeit, die ein Objekt oder eine Umgebung direkt anbietet — z. B. bietet eine Stuhlfläche das Sitzen an, ohne dass wir darüber nachdenken müssen."
          >
            Affordanzen
          </DefinitionTooltip>{' '}
          (eine Stuhloberfläche „bietet" Sitzen an) sind direkt wahrnehmbar,
          ohne kognitive Umwege. Die Debatte zwischen konstruktivistischen und
          direkten Wahrnehmungstheorien prägt die Forschung bis heute.
        </p>

        {/* Zusammenfassung */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Zusammenfassung
        </h2>
        <ol className="list-decimal list-inside space-y-2 font-serif text-body text-ink leading-relaxed">
          <li>
            Die <strong>Gestaltgesetze</strong> (Nähe, Ähnlichkeit, geschlossene
            Form, gute Fortsetzung, gemeinsames Schicksal) beschreiben, wie wir
            automatisch Reize zu sinnvollen Einheiten organisieren.
          </li>
          <li>
            Das <strong>Prägnanzprinzip</strong> besagt: Wir sehen die
            einfachste, stabilstre und symmetrischste Gestalt — nicht die
            komplizierteste Interpretation.
          </li>
          <li>
            <strong>Figur-Grund-Organisation</strong> und{' '}
            <strong>Multistabilität</strong> zeigen, dass Wahrnehmung ein
            aktiver, konstruktiver Prozess ist — keine passive Abbildung der Welt.
          </li>
          <li>
            <strong>Bottom-up</strong>-Prozesse werden durch Reizdaten getrieben,
            <strong>Top-down</strong>-Prozesse durch Erwartungen und Wissen.
          </li>
          <li>
            Gibsons <strong>ökologischer Ansatz</strong> betont, dass
            Wahrnehmung direkt aus den umgebungsstrukturierten Reizen
            hervorgehen kann — ohne interne Repräsentation.
          </li>
        </ol>

        {/* Literatur */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Literatur
        </h2>
        <ul className="space-y-3 font-sans text-sm text-ink/80">
          <li>
            <a
              href="https://doi.org/10.1007/BF00410688"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Wertheimer, M. (1923). Untersuchungen zur Lehre von der Gestalt.
              II. <em>Psychologische Forschung, 4</em>, 301–350.
            </a>
          </li>
          <li>
            Koffka, K. (1935). <em>Principles of Gestalt psychology</em>. Harcourt,
            Brace and Company.
          </li>
          <li>
            <a
              href="https://doi.org/10.1037/11497-000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Köhler, W. (1947). <em>Gestalt psychology</em>. Liveright Publishing.
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.4324/9781315742657"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Gibson, J. J. (1979). <em>The ecological approach to visual
              perception</em>. Houghton Mifflin.
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.1016/j.visres.2014.06.016"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Todorovic, D. (2008). Gestalt principles. <em>Scholarpedia, 3</em>(12),
              5345.
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.1146/annurev.psych.53.100901.135148"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Palmer, S. E. (2002). Common region: A new principle of perceptual
              grouping. <em>Psychological Science, 2</em>(4), 247–252.
            </a>
          </li>
        </ul>

        {/* Zum Weiterforschen */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Zum Weiterforschen
        </h2>
        <ul className="space-y-2 font-sans text-sm text-ink/80">
          <li>
            <a
              href="https://de.wikipedia.org/wiki/Gestaltgesetze"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Wikipedia: Gestaltgesetze
            </a>{' '}
            — Übersicht aller Gesetze mit Beispielabbildungen
          </li>
          <li>
            <a
              href="https://www.simonsays.com/products/simon-says-gestalt-principles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Interactive Gestalt Laws
            </a>{' '}
            — Interaktive Demonstration aller Gruppierungsgesetze
          </li>
          <li>
            <a
              href="https://michaelbach.de/ot/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Michael Bach: Optische Täuschungen
            </a>{' '}
            — Sammlung von 100+ Illusionen mit wissenschaftlichen Erklärungen
          </li>
          <li>
            <a
              href="https://www.verywellmind.com/what-is-gestalt-psychology-2795808"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Verywell Mind: Gestalt Psychology
            </a>{' '}
            — Englischsprachige Einführung mit Alltagsbeispielen
          </li>
        </ul>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-creamDark flex justify-between">
          <Link
            to="/aktionspotential"
            className="font-sans text-sm text-ink/60 hover:text-ink transition-colors"
          >
            ← Aktionspotential
          </Link>
          <Link
            to="/arbeitsgedaechtnis"
            className="font-sans text-sm text-ink/60 hover:text-ink transition-colors"
          >
            Arbeitsgedächtnis →
          </Link>
        </div>
      </div>
    </Layout>
  );
}
