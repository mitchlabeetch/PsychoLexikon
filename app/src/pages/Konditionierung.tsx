import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import DefinitionTooltip from '@/components/DefinitionTooltip';
import CitationTooltip from '@/components/CitationTooltip';
import Illustration from '@/components/Illustration';

export default function Konditionierung() {
  return (
    <Layout>
      {/* HeroMini */}
      <section className="bg-creamDark py-12">
        <div className="container-prose">
          <p className="text-sm font-sans uppercase tracking-wider text-ink/60 mb-2">
            Lernpsychologie
          </p>
          <h1 className="font-serif text-h1 text-ink">
            Klassische & Operante Konditionierung
          </h1>
          <p className="font-serif text-body-lg text-ink/80 mt-3">
            Gelernt ist gelernt? Wie Erfahrung Verhalten formt
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
          Jedes Mal, wenn du die Kaffeemaschine anschaltest und duftender Kaffee
          rauskommt, lernst du etwas. Nicht durch Bewusstsein — durch{' '}
          <strong>Assoziation</strong>. Konditionierung ist die grundlegendste Form
          des Lernens: Ein neutraler Reiz wird mit einem bedeutsamen Ereignis
          verknüpft, und das Verhalten ändert sich.
        </p>

        {/* Illustration 1 */}
        <Illustration
          src="/illu-classical-conditioning.png"
          alt="Klassische Konditionierung"
          caption={
            <>
              Vor, während und nach der Konditionierung: Der <strong>CS</strong>{' '}
              (Glocke) wird mit dem <strong>US</strong> (Futter) assoziiert.
            </>
          }
          figureNumber={1}
        />

        {/* Klassische Konditionierung */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Klassische Konditionierung: Pavlov und seine Hunde
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          <CitationTooltip citation="Pavlov, I. P. (1927). Conditioned reflexes: An investigation of the physiological activity of the cerebral cortex. Oxford University Press.">
            Pavlov (1927)
          </CitationTooltip>{' '}
          entdeckte den Mechanismus, der seither sein Namenszug ist. Ein Hund
          saliviert natürlicherweise beim Anblick von Futter — das ist die
          ungelernte, reflexartige Reaktion. Wenn aber jedes Mal, bevor das Futter
          kommt, eine Glocke läutet, lernt der Hund: Glocke bedeutet Futter. Bald
          genug reicht die Glocke allein, um Speichelfluss auszulösen.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Die Fachbegriffe sind präzise: Der{' '}
          <DefinitionTooltip
            term="Unconditioned Stimulus (US)"
            definition="Natürlicher, nicht gelernt auslösender Reiz, der reflexartig eine Reaktion hervorruft (z. B. Futter → Speicheln)."
          >
            Unconditioned Stimulus (US)
          </DefinitionTooltip>{' '}
          (Futter) löst natürlicherweise die{' '}
          <DefinitionTooltip
            term="Unconditioned Response (UR)"
            definition="Ungelernte, reflexartige Reaktion auf den US (z. B. Speicheln beim Anblick von Futter)."
          >
            Unconditioned Response (UR)
          </DefinitionTooltip>{' '}
          (Speicheln) aus. Der zunächst neutrale{' '}
          <DefinitionTooltip
            term="Conditioned Stimulus (CS)"
            definition="Zunächst neutraler Reiz, der durch wiederholte Kopplung mit dem US eine gelernte Reaktion auslöst (z. B. Glocke nach Konditionierung)."
          >
            Conditioned Stimulus (CS)
          </DefinitionTooltip>{' '}
          (Glocke) wird durch Kopplung mit dem US zum Auslöser der{' '}
          <DefinitionTooltip
            term="Conditioned Response (CR)"
            definition="Gelernte Reaktion auf den CS, die der UR ähnelt aber nicht identisch ist (z. B. Speicheln bei alleiniger Glocke)."
          >
            Conditioned Response (CR)
          </DefinitionTooltip>
          .
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Fünf Phänomene prägen die klassische Konditionierung:
        </p>
        <ul className="list-disc list-inside space-y-2 font-serif text-body text-ink leading-relaxed mt-4">
          <li>
            <strong>Akquisition</strong>: Die CR wird durch wiederholte
            CS-US-Paarungen aufgebaut. Die zeitliche Ordnung ist kritisch: Der
            CS muss <em>vor</em> dem US kommen (Vorwärtskonditionierung).
          </li>
          <li>
            <strong>Extinktion</strong>: Wird der CS wiederholt ohne den US
            präsentiert, schwächt die CR ab. Der Hund hört schließlich auf zu
            salivieren, wenn die Glocke ohne Futter ertönt.
          </li>
          <li>
            <strong>Spontanerholung</strong>: Nach einer Pause erscheint die
            CR beim erneuten Präsentieren des CS in abgeschwächter Form wieder —
            obwohl sie zuvor extinguiert schien. Das zeigt: Extinktion ist nicht
            einfaches Vergessen, sondern <em>neues</em> Lernen.
          </li>
          <li>
            <strong>Generalisierung</strong>: Ähnliche Reize wie der ursprüngliche
            CS lösen ebenfalls die CR aus. Ein leicht anders klingendes
            Glockengeräusch ruft ebenfalls Speicheln hervor.
          </li>
          <li>
            <strong>Diskrimination</strong>: Durch selektive Verstärkung (nur der
            ursprüngliche CS wird mit dem US gepaart) lernt das Tier,
            zwischen ähnlichen Reizen zu unterscheiden.
          </li>
        </ul>

        {/* Rescorla-Wagner */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Das Rescorla-Wagner-Modell: Überraschung treibt Lernen
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          <CitationTooltip citation="Rescorla, R. A., & Wagner, A. R. (1972). A theory of Pavlovian conditioning: Variations in the effectiveness of reinforcement and nonreinforcement. In A. H. Black & W. F. Prokasy (Eds.), Classical conditioning II: Current research and theory (pp. 64–99). Appleton-Century-Crofts.">
            Rescorla & Wagner (1972)
          </CitationTooltip>{' '}
          formulierten ein mathematisches Modell, das die Grundintuition
          zusammenfasst: Lernen geschieht durch{' '}
          <strong>Fehlerkorrektur</strong>. Die Formel lautet:{' '}
          <em>ΔV = αβ(λ − ΣV)</em>. Die Veränderung der Assoziationsstärke (ΔV)
          hängt ab von der Differenz zwischen dem tatsächlichen Ergebnis (λ) und
          dem erwarteten Ergebnis (ΣV) — multipliziert mit Lernraten für den CS
          (α) und den US (β).
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Konkret: Je überraschender ein Ereignis, desto mehr wird gelernt. Ein
          US, der <em>erwartet</em> wird, erzeugt kaum Lernen. Ein unerwarteter
          US erzeugt starkes Lernen. Dies erklärt zwei wichtige Phänomene:
        </p>
        <ul className="list-disc list-inside space-y-2 font-serif text-body text-ink leading-relaxed mt-4">
          <li>
            <strong>Blocking</strong>: Wird ein bekannter CS (z. B. Licht) mit
            einem neuen CS (z. B. Ton) gemeinsam mit dem US gepaart, lernt das
            Tier nichts über den neuen Ton. Der Licht-CS „blockiert" das Lernen,
            weil der US nicht überraschend ist.
          </li>
          <li>
            <strong>Overshadowing</strong>: Wird ein salienter CS (lauter Ton)
            mit einem schwachen CS (leises Licht) gepaart, dominiert der
            auffälligere Reiz. Das schwächere Lernen wird überschattet.
          </li>
        </ul>

        {/* Furchtkonditionierung */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Furchtkonditionierung und die Amygdala
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          Furcht ist die am besten erforschte emotionale Konditionierung. Ein
          neutraler Ton (CS), der mit einem elektrischen Schock (US) gepaart wird,
          löst nach wenigen Paarungen allein eine Stressantwort aus:
          erhöhte Herzrate, Schweißproduktion, eingefrorenes Verhalten.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          <CitationTooltip citation="LeDoux, J. E. (1996). The emotional brain: The mysterious underpinnings of emotional life. Simon & Schuster.">
            LeDoux (1996)
          </CitationTooltip>{' '}
          entdeckte die neuronalen Schaltkreise hinter dieser Furcht. Seine{' '}
          <strong>duale Pfad-Theorie</strong> beschreibt zwei Routen von der
          Sinneswahrnehmung zur Amygdala:
        </p>
        <ul className="list-disc list-inside space-y-2 font-serif text-body text-ink leading-relaxed mt-4">
          <li>
            Der <strong>„Low Road"</strong> (Thalamus → Amygdala) ist schnell
            (~12 ms) und unbewusst. Er ermöglicht sofortige Reaktionen auf
            potenzielle Gefahren — bevor wir überhaupt wissen, was passiert.
          </li>
          <li>
            Der <strong>„High Road"</strong> (Thalamus → Kortex → Amygdala) ist
            langsaner aber analytisch. Er liefert den Kontext: „Das war nur ein
            Stock, der knallte — keine Schlangengefahr."
          </li>
        </ul>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Diese Schaltung erklärt <strong>PTSD</strong> (Posttraumatische
          Belastungsstörung) und <strong>Phobien</strong>: Die Amygdala hat
          gelernt, dass ein bestimmter CS gefährlich ist, und der „Low Road"
          aktiviert die Furcht, bevor der Kortex rational eingreifen kann.
          Therapien wie Expositionstherapie zielen darauf ab, das
          Amygdala-Gedächtnis durch sichere Wiederholung neu zu konditionieren.
        </p>

        {/* Operante Konditionierung */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Operante Konditionierung: Verhalten formt Verhalten
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          Während die klassische Konditionierung <em>reflektorische</em> Reaktionen
          (Speicheln, Herzrasen) betrifft, formt die{' '}
          <strong>operante Konditionierung</strong> <em>willkürliches</em> Verhalten
          durch dessen Konsequenzen. <CitationTooltip citation="Skinner, B. F. (1938). The behavior of organisms: An experimental analysis. Appleton-Century.">
            Skinner (1938)
          </CitationTooltip>{' '}
          entwickelte diesen Ansatz systematisch in der berühmten{' '}
          <DefinitionTooltip
            term="Skinner-Box"
            definition="Versuchsaufbau zur Untersuchung operanten Verhaltens, in dem ein Tier (z. B. Ratte, Taube) durch Aktivierung eines Mechanismus (Hebel, Knopf) eine Belohnung oder Bestrafung erhält."
          >
            Skinner-Box
          </DefinitionTooltip>
          .
        </p>

        {/* Illustration 2 */}
        <Illustration
          src="/illu-operant-conditioning.png"
          alt="Operante Konditionierung"
          caption={
            <>
              Die vier Quadranten der <strong>operanten Konditionierung</strong>:
              Verstärkung vs. Bestrafung, jeweils positiv und negativ.
            </>
          }
          figureNumber={2}
        />

        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Die zentrale Unterscheidung ist zwischen{' '}
          <strong>Verstärkung</strong> (Verhalten wird häufiger) und{' '}
          <strong>Bestrafung</strong> (Verhalten wird seltener). Beide können
          <em>positiv</em> (etwas wird hinzugefügt) oder <em>negativ</em> (etwas
          wird entfernt) sein:
        </p>
        <ul className="list-disc list-inside space-y-2 font-serif text-body text-ink leading-relaxed mt-4">
          <li>
            <strong>Positive Verstärkung</strong>: Ein Verhalten wird durch
            Hinzufügen eines wünschenswerten Reizes verstärkt. Die Ratte drückt
            den Hebel und bekommt ein Futterpellet. Du erledigst eine Aufgabe
            und bekommst Lob.
          </li>
          <li>
            <strong>Negative Verstärkung</strong>: Ein Verhalten wird durch
            <em>Entfernen</em> eines unangenehmen Reizes verstärkt.{' '}
            <em>Negativ heißt Subtraktion, nicht Bestrafung!</em> Du nimmst eine
            Aspirin, um Kopfschmerzen loszuwerden. Die Ratte drückt den Hebel,
            um einen lauten Ton abzuschalten. Das Verhalten (Aspirin nehmen,
            Hebel drücken) wird häufiger, weil etwas Unangenehmes wegfällt.
          </li>
          <li>
            <strong>Positive Bestrafung</strong>: Ein unangenehmer Reiz wird
            hinzugefügt, um ein Verhalten zu reduzieren. Ein Strafzettel für
            zu schnelles Fahren.
          </li>
          <li>
            <strong>Negative Bestrafung</strong>: Ein wünschenswerter Reiz wird
            entfernt, um ein Verhalten zu reduzieren. Zeit-out für ein Kind,
            das andere schlägt — Spielzeug/Spielzeit wird entzogen.
          </li>
        </ul>

        {/* Illustration 3 */}
        <Illustration
          src="/illu-skinner-box.png"
          alt="Skinner-Box"
          caption={
            <>
              Die <strong>Skinner-Box</strong>: Ein Laboraufbau zur Untersuchung
              operanten Verhaltens bei Tieren.
            </>
          }
          figureNumber={3}
        />

        <h3 className="font-serif font-semibold text-h4 text-ink mt-8 mb-3">
          Verstärkungspläne
        </h3>
        <p className="font-serif text-body text-ink leading-relaxed">
          Skinner entdeckte, dass <em>wann</em> eine Verstärkung kommt, das
          Verhalten dramatisch beeinflusst. Vier Hauptpläne unterscheiden sich
          nach <strong>Intervall</strong> (zeitbasiert) vs.{' '}
          <strong>Ratio</strong> (verhaltensbasiert) und <strong>fix</strong> vs.
          <strong>variabel</strong>:
        </p>
        <ul className="list-disc list-inside space-y-2 font-serif text-body text-ink leading-relaxed mt-4">
          <li>
            <strong>FR</strong> (Fixed Ratio): Belohnung nach einer festen
            Anzahl von Verhaltensweisen — z. B. jeder 10. Hebeldruck.
            Erzeugt hohe, stabile Rate mit kurzer Pause nach der Belohnung.
          </li>
          <li>
            <strong>VR</strong> (Variable Ratio): Belohnung nach einer
            variablen, unvorhersagbaren Anzahl — z. B. Spielautomat.
            Erzeugt die höchste und widerstandsfähigste Verhaltensrate.
            Glücksspielsucht beruht auf diesem Plan.
          </li>
          <li>
            <strong>FI</strong> (Fixed Interval): Erste Belohnung nach einer
            festen Zeit — z. B. Prüfung nach genau 4 Wochen. Erzeugt
            „Skallop"-Muster: Wenig Verhalten direkt nach Belohnung,
            dann steigende Rate.
          </li>
          <li>
            <strong>VI</strong> (Variable Interval): Erste Belohnung nach
            variabler Zeit — z. B. unangekündigte Kontrollen. Erzeugt
            moderate, stabile Rate.
          </li>
        </ul>

        {/* Neurobiologie */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Neurobiologie: Belohnungssysteme im Gehirn
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          Hinter operantem Lernen steht das <strong>mesolimbische
          Dopaminsystem</strong>. Es beginnt im Ventralen Tegmentalen Areal (VTA)
          und projiziert zum Nucleus accumbens und dem präfrontalen Kortex.
          Ursprünglich glaubte man, Dopamin signalisiere <em>Lust</em> — heute
          weiß man: Dopamin signalisiert <em>Belohnungsvorhersage-Fehler</em>.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          <CitationTooltip citation="Domjan, M. (2015). The principles of learning and behavior (7th ed.). Cengage Learning.">
            Domjan (2015)
          </CitationTooltip>{' '}
          fasst zusammen: Wenn eine Belohnung <em>besser als erwartet</em> ausfällt,
          steigt die dopaminerge Aktivität — das treibt Lernen. Ist die Belohnung
          schlechter als erwartet, sinkt sie. Genau wie beim Rescorla-Wagner-Modell
          ist es die <strong>Überraschung</strong>, nicht die Belohnung selbst, die
          das Lernen antreibt.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Die <strong>Basalganglien</strong> — insbesondere das Striatum — spielen
          eine Schlüsselrolle bei der Auswahl und Automatisierung von Verhalten.
          Sie vergleichen aktuelle Situationen mit gespeicherten Gewohnheiten und
          aktivieren die passenden motorischen Programme. Ohne funktionierende
          Basalganglien (wie bei der Parkinson-Krankheit) wird das Anstoßen neuer
          Handlungen massiv erschwert — während alte Gewohnheiten oft erhalten
          bleiben.
        </p>

        {/* Zusammenfassung */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Zusammenfassung
        </h2>
        <ol className="list-decimal list-inside space-y-2 font-serif text-body text-ink leading-relaxed">
          <li>
            Die <strong>klassische Konditionierung</strong> verknüpft neutrale
            Reize (CS) mit reflexauslösenden Ereignissen (US). Phänomene:
            Akquisition, Extinktion, Spontanerholung, Generalisierung,
            Diskrimination.
          </li>
          <li>
            Das <strong>Rescorla-Wagner-Modell</strong> erklärt Konditionierung
            als Fehlerkorrektur-Lernen: Überraschung treibt Lernen. Blocking
            und Overshadowing zeigen, dass Assoziationen kompetitiv gebildet
            werden.
          </li>
          <li>
            <strong>Furchtkonditionierung</strong> nutzt den schnellen „Low
            Road" (Thalamus → Amygdala) für unbewusste Furcht und den langsamen
            „High Road" (über den Kortex) für kontextuelle Modulation.
          </li>
          <li>
            Die <strong>operante Konditionierung</strong> formt Verhalten durch
            seine Konsequenzen: Verstärkung (positiv/negativ) macht Verhalten
            häufiger, Bestrafung (positiv/negativ) seltener.
          </li>
          <li>
            Das <strong>mesolimbische Dopaminsystem</strong> signalisiert
            Belohnungsvorhersage-Fehler und treibt operantes Lernen an. Die
            Basalganglien automatisieren erfolgreiches Verhalten zu Gewohnheiten.
          </li>
        </ol>

        {/* Literatur */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Literatur
        </h2>
        <ul className="space-y-3 font-sans text-sm text-ink/80">
          <li>
            Pavlov, I. P. (1927). <em>Conditioned reflexes: An investigation of
            the physiological activity of the cerebral cortex</em>. Oxford
            University Press.
          </li>
          <li>
            <a
              href="https://doi.org/10.4324/9781315886825"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Rescorla, R. A., & Wagner, A. R. (1972). A theory of Pavlovian
              conditioning. In A. H. Black & W. F. Prokasy (Eds.),{' '}
              <em>Classical conditioning II</em> (pp. 64–99). Appleton-Century-Crofts.
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.1016/j.neuron.2007.08.025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LeDoux, J. E. (2000). Emotion circuits in the brain.{' '}
              <em>Annual Review of Neuroscience, 23</em>, 155–184.
            </a>
          </li>
          <li>
            Skinner, B. F. (1938). <em>The behavior of organisms: An experimental
            analysis</em>. Appleton-Century.
          </li>
          <li>
            <a
              href="https://doi.org/10.1016/S0896-6273(02)00963-7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Schultz, W. (2002). Getting formal with dopamine and reward.{' '}
              <em>Neuron, 36</em>(2), 241–263.
            </a>
          </li>
          <li>
            Domjan, M. (2015). <em>The principles of learning and behavior</em>
            (7th ed.). Cengage Learning.
          </li>
          <li>
            <a
              href="https://doi.org/10.1016/j.tics.2014.06.005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Redish, A. D., Jensen, S., & Johnson, A. (2008). A unified
              framework for addiction: Vulnerabilities in the decision process.{' '}
              <em>Behavioral and Brain Sciences, 31</em>(4), 415–437.
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
              href="https://de.wikipedia.org/wiki/Klassische_Konditionierung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Wikipedia: Klassische Konditionierung
            </a>{' '}
            — Ausführlicher Artikel mit allen Phänomenen
          </li>
          <li>
            <a
              href="https://www.simplypsychology.org/operant-conditioning.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              SimplyPsychology: Operant Conditioning
            </a>{' '}
            — Übersicht über alle vier Quadranten mit Beispielen
          </li>
          <li>
            <a
              href="https://www.nobelprize.org/prizes/medicine/1904/pavlov/biographical/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Nobel Prize: Ivan Pavlov
            </a>{' '}
            — Biographie und Forschungsgeschichte
          </li>
          <li>
            <a
              href="https://psych.hanover.edu/classes/conditioning/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Hanover College: Classical Conditioning Simulation
            </a>{' '}
            — Interaktive Simulation eines Konditionierungsexperiments
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=vmff1nPIaT8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LeDoux: The Emotional Brain
            </a>{' '}
            — Vortrag über Furcht, Amygdala und das emotionale Gedächtnis
          </li>
        </ul>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-creamDark flex justify-between">
          <Link
            to="/arbeitsgedaechtnis"
            className="font-sans text-sm text-ink/60 hover:text-ink transition-colors"
          >
            ← Arbeitsgedächtnis
          </Link>
          <Link
            to="/"
            className="font-sans text-sm text-ink/60 hover:text-ink transition-colors"
          >
            Zurück zur Übersicht →
          </Link>
        </div>
      </div>
    </Layout>
  );
}
