import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import DefinitionTooltip from '@/components/DefinitionTooltip';
import CitationTooltip from '@/components/CitationTooltip';
import Illustration from '@/components/Illustration';

export default function Aktionspotential() {
  return (
    <Layout>
      {/* HeroMini */}
      <section className="bg-creamDark py-12">
        <div className="container-prose">
          <p className="text-sm font-sans uppercase tracking-wider text-ink/60 mb-2">
            Biologische Psychologie
          </p>
          <h1 className="font-serif text-h1 text-ink">
            Aktionspotential & Synaptische Transmission
          </h1>
          <p className="font-serif text-body-lg text-ink/80 mt-3">
            Wie Neurone miteinander kommunizieren — von der Ionenpumpe bis zur Synapse
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
          Stell dir vor, du berührst eine heiße Herdplatte. Noch bevor du dich bewusst dafür
          entscheidest, die Hand zurückzuziehen, hat eine elektrische Welle in deinem
          Nervensystem bereits gehandelt. Diese Welle — das <strong>Aktionspotential</strong> —
          ist die Grundsprache des Gehirns.
        </p>

        {/* Illustration 1 */}
        <Illustration
          src="/illu-neuron.png"
          alt="Schematische Darstellung eines Neurons"
          caption={
            <>
              Neuron mit <strong>Dendriten</strong>, <strong>Soma</strong>,{' '}
              <strong>Axon</strong> und <strong>Synaptischen Endknöpfen</strong>. Die
              Myelinscheide (orange dargestellt) beschleunigt die Signalübertragung.
            </>
          }
          figureNumber={1}
        />

        {/* Ruhepotential */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Das Ruhepotential: -70 mV
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          Eine Nervenzelle in Ruhe trägt eine negative Ladung von etwa −70 Millivolt (mV)
          im Inneren relativ zum Außenraum. Diese Spannung entsteht durch drei Faktoren.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Erstens pumpt die{' '}
          <DefinitionTooltip
            term="Na⁺/K⁺-ATPase"
            definition="Eine Energie verbrauchende Ionenpumpe, die 3 Natrium-Ionen (Na⁺) aus der Zelle pumpt und 2 Kalium-Ionen (K⁺) hineintransportiert — gegen deren Konzentrationsgradienten."
          >
            Na⁺/K⁺-ATPase
          </DefinitionTooltip>{' '}
          ständig 3 Na⁺-Ionen hinaus und 2 K⁺-Ionen hinein. Zweitens sind{' '}
          <DefinitionTooltip
            term="K⁺-Leak-Kanäle"
            definition="Passiv geöffnete Ionenkanäle, die Kalium-Ionen (K⁺) aus der Zelle strömen lassen und so zur negativen Membranspannung beitragen."
          >
            K⁺-Leak-Kanäle
          </DefinitionTooltip>{' '}
          passiv geöffnet und lassen K⁺ ausströmen. Drittens bleiben große negative
          Anionen (Proteine, Chlorid) im Zellinneren gefangen.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Die Membran selbst besteht aus einer{' '}
          <DefinitionTooltip
            term="Phospholipid-Doppelschicht"
            definition="Doppelschicht aus Fettmolekülen, die die Zellmembran bildet und für deren elektrische Isolationsfähigkeit sorgt."
          >
            Phospholipid-Doppelschicht
          </DefinitionTooltip>
          , die für geladene Teilchen praktisch undurchdringlich ist. Erst{' '}
          <DefinitionTooltip
            term="Ionenkanal"
            definition="Protein in der Zellmembran, das den Durchtritt bestimmter Ionen ermöglicht — oft gesteuert durch Spannung, Liganden oder mechanische Reize."
          >
            Ionenkanäle
          </DefinitionTooltip>{' '}
          schaffen gezielte Durchlässe. Der{' '}
          <DefinitionTooltip
            term="Konzentrationsgradient"
            definition="Unterschied in der Ionenkonzentration zwischen Intra- und Extrazellulärraum, der als treibende Kraft für den passiven Ionenfluss wirkt."
          >
            Konzentrationsgradient
          </DefinitionTooltip>{' '}
          (hohe K⁺-Konzentration innen, hohe Na⁺-Konzentration außen) und der
          elektrische Gradient halten das Ruhepotential aufrecht.
        </p>

        {/* Aktionspotential */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Das Aktionspotential: Alles oder Nichts
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          Wenn ein Reiz das Membranpotential auf etwa −55 mV (Schwellenwert) anhebt,
          öffnen sich spannungsgesteuerte Na⁺-Kanäle. Natrium strömt ins Zellinnere —
          die Membran{' '}
          <DefinitionTooltip
            term="Depolarisation"
            definition="Phase des Aktionspotentials, bei der die Membran durch Na⁺-Einstrom positiv wird (von −70 mV bis ca. +30 mV)."
          >
            depolarisiert
          </DefinitionTooltip>
          . Bei +30 mV schließen die Na⁺-Kanäle (Inaktivierung), und K⁺-Kanäle öffnen
          sich. Kalium strömt heraus — die Membran{' '}
          <DefinitionTooltip
            term="Repolarisation"
            definition="Phase des Aktionspotentials, bei der K⁺-Ausstrom die Membran wieder negativ macht (Rückkehr zum Ruhepotential)."
          >
            repolarisiert
          </DefinitionTooltip>
          . Durch den verzögerten K⁺-Ausstrom entsteht kurzzeitig eine{' '}
          <DefinitionTooltip
            term="Hyperpolarisation"
            definition="Phase, in der die Membran kurzzeitig negativer als das Ruhepotential wird (ca. −80 mV), da K⁺-Kanäle träge schließen."
          >
            Hyperpolarisation
          </DefinitionTooltip>{' '}
          (ca. −80 mV).
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Das{' '}
          <strong>All-or-none-Gesetz</strong> besagt: Es gibt kein "kleines"
          Aktionspotential — entweder erreicht der Reiz den Schwellenwert und das
          Neuron feuert vollständig, oder es passiert nichts. Stärkere Reize erzeugen
          also keine höheren Spitzen, sondern höhere{' '}
          <em>Frequenzen</em> von Aktionspotentialen.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          In der{' '}
          <DefinitionTooltip
            term="Refraktärzeit"
            definition="Zeitfenster nach einem Aktionspotential, in dem ein neues AP unmöglich (absolute Refraktärzeit) oder nur durch stärkere Reize ausgelöst werden kann (relative Refraktärzeit)."
          >
            Refraktärzeit
          </DefinitionTooltip>{' '}
          kann kein neues Aktionspotential ausgelöst werden — während der absoluten
          Refraktärzeit sind die Na⁺-Kanäle inaktiviert. Dies verhindert, dass das
          Signal rückwärts läuft.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Das klassische mathematische Modell beschrieben{' '}
          <CitationTooltip citation="Hodgkin, A. L., & Huxley, A. F. (1952). A quantitative description of membrane current and its application to conduction and excitation in nerve. The Journal of Physiology, 117(4), 500–544. https://doi.org/10.1113/jphysiol.1952.sp004764">
            Hodgkin & Huxley (1952)
          </CitationTooltip>
          . Ihre Arbeit am Riesenaxon des Tintenfischs legte den Grundstein für unser
          Verständnis der Ionenkanäle — und brachte ihnen 1963 den Nobelpreis.
        </p>

        {/* Illustration 2 */}
        <Illustration
          src="/illu-action-potential.png"
          alt="Aktionspotential-Kurve"
          caption={
            <>
              Die Phasen des Aktionspotentials: Ruhepotential, Depolarisation,
              Repolarisation und Hyperpolarisation.
            </>
          }
          figureNumber={2}
          aspectRatio="16/9"
        />

        {/* Saltatorische Erregungsleitung */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Saltatorische Erregungsleitung: Springen statt Kriechen
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          Das Aktionspotential breitet sich entlang des Axons aus — aber nicht gleichmäßig
          langsam. Bei{' '}
          <DefinitionTooltip
            term="Myelinisierung"
            definition="Umhüllung von Axonen durch Gliazellen (Oligodendrozyten im ZNS, Schwann-Zellen im PNS), die eine isolierende Fettschicht bildet."
          >
            myelinierten
          </DefinitionTooltip>{' '}
          Axonen springt das Signal von{' '}
          <DefinitionTooltip
            term="Ranvier-Schnürring"
            definition="Lücken zwischen Myelinsegmenten, an denen das Aktionspotential regeneriert wird."
          >
            Ranvier-Schnürring
          </DefinitionTooltip>{' '}
          zu Ranvier-Schnürring — daher <em>saltatorisch</em> (lateinisch <em>salire</em>,
          springen). Dies beschleunigt die Leitung um den Faktor 100: Ein unmyeliniertes
          Axon leitet mit ~1 m/s, ein myeliniertes mit bis zu 120 m/s.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Bei{' '}
          <strong>Multipler Sklerose</strong> greift das Immunsystem die Myelinscheiden
          im zentralen Nervensystem an. Die Demyelinisierung führt zu verlangsamter oder
          blockierter Signalübertragung — sichtbar als Koordinationsstörungen,
          Muskelschwäche und Sehbeeinträchtigungen.
        </p>

        {/* Synaptische Transmission */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Synaptische Transmission: Vom elektrischen zum chemischen Signal
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          Wenn das Aktionspotential den synaptischen Endknopf erreicht, öffnen sich
          spannungsgesteuerte Ca²⁺-Kanäle. Der Calcium-Einstrom löst eine{' '}
          <DefinitionTooltip
            term="Exozytose"
            definition="Prozess, bei dem synaptische Vesikel mit der präsynaptischen Membran fusionieren und Neurotransmitter in den synaptischen Spalt freisetzen."
          >
            Exozytose
          </DefinitionTooltip>{' '}
          aus: Synaptische Vesikel fusionieren mit der Membran und setzen{' '}
          <DefinitionTooltip
            term="Neurotransmitter"
            definition="Chemische Botenstoffe, die über den synaptischen Spalt diffundieren und an postsynaptische Rezeptoren binden — z. B. Glutamat (erregend) oder GABA (hemmend)."
          >
            Neurotransmitter
          </DefinitionTooltip>{' '}
          frei.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Die Transmittermoleküle diffundieren durch den synaptischen Spalt (~20–40 nm
          breit) und binden an postsynaptische Rezeptoren. Man unterscheidet zwei
          Haupttypen:{' '}
          <DefinitionTooltip
            term="Ionotroper Rezeptor"
            definition="Ligandengesteuerter Ionenkanal — schnelle, direkte Antwort (Millisekunden), z. B. AMPA-Rezeptor für Glutamat."
          >
            ionotrope Rezeptoren
          </DefinitionTooltip>{' '}
          sind selbst Ionenkanäle und bewirken schnelle Antworten (Millisekunden).{' '}
          <DefinitionTooltip
            term="Metabotroper Rezeptor"
            definition="G-Protein-gekoppelter Rezeptor — langsame, indirekte Wirkung über Second-Messenger-Kaskaden (Sekunden bis Minuten)."
          >
            Metabotrope Rezeptor
          </DefinitionTooltip>{' '}
          aktivieren Second-Messenger-Kaskaden über G-Proteine — langsamer, aber
          vielfältiger in ihrer Wirkung.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          <strong>Glutamat</strong> ist der Haupt-erregende Neurotransmitter im
          Gehirn — über 50 % aller synaptischen Verbindungen nutzen es.{' '}
          <strong>GABA</strong> (γ-Aminobuttersäure) ist der wichtigste hemmende
          Transmitter. Das Gleichgewicht zwischen Erregung und Hemmung bestimmt,
          ob ein Neuron feuert oder schweigt.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Nach der Signalübertragung müssen Neurotransmitter schnell aufgeräumt werden.{' '}
          <DefinitionTooltip
            term="Reuptake-Transporter"
            definition="Proteine in der präsynaptischen Membran, die Neurotransmitter aus dem synaptischen Spalt zurück in die präsynaptische Zelle transportieren."
          >
            Reuptake-Transporter
          </DefinitionTooltip>{' '}
          pumpen sie zurück in die präsynaptische Zelle. Enzyme wie
          Acetylcholinesterase spalten andere Transmittermoleküle. Viele
          Antidepressiva wirken, indem sie den Reuptake von Serotonin oder
          Noradrenalin hemmen.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          <CitationTooltip citation="Katz, B. (1966). Nerve, muscle, and synapse. McGraw-Hill.">
            Katz (1966)
          </CitationTooltip>{' '}
          zeigte, dass Transmitter in quantisierten Paketen (Quanta) freigesetzt
          werden — jedes Vesikel enthält eine definierte Menge. Seine Arbeit am
          neuromuskulären Synapsen des Frosches etablierte die{' '}
          <strong>Quantalhypothese</strong> der synaptischen Übertragung.
        </p>

        {/* Illustration 3 */}
        <Illustration
          src="/illu-synapse.png"
          alt="Chemische Synapse im Detail"
          caption={
            <>
              Chemische Synapse: Vesikel (1) fusionieren mit der Membran (2) und
              setzen Neurotransmitter frei (3), die an postsynaptische Rezeptoren
              (4) binden.
            </>
          }
          figureNumber={3}
        />

        {/* Zusammenfassung */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Zusammenfassung
        </h2>
        <ol className="list-decimal list-inside space-y-2 font-serif text-body text-ink leading-relaxed">
          <li>
            Das <strong>Ruhepotential</strong> (−70 mV) entsteht durch die
            Na⁺/K⁺-ATPase, K⁺-Leak-Kanäle und eingeschlossene negative Anionen.
          </li>
          <li>
            Das <strong>Aktionspotential</strong> folgt dem All-or-none-Gesetz:
            Bei Erreichen des Schwellenwerts (−55 mV) entlädt sich das Neuron
            stets gleich stark — die Information liegt in der Frequenz, nicht in
            der Amplitude.
          </li>
          <li>
            <strong>Myelinisierung</strong> beschleunigt die Erregungsleitung
            durch saltatorische Sprünge zwischen den Ranvier-Schnürringen um das
            100-fache.
          </li>
          <li>
            An der <strong>Synapse</strong> wird das elektrische Signal in ein
            chemisches umgewandelt: Ca²⁺-Einstrom → Exozytose →
            Neurotransmitter-Freisetzung → Rezeptorbindung.
          </li>
          <li>
            <strong>Ionotrope Rezeptoren</strong> wirken schnell und direkt (über
            Kanalöffnung), <strong>metabotrope Rezeptoren</strong> langsam und
            indirekt (über Second-Messenger).
          </li>
        </ol>

        {/* Literatur */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Literatur
        </h2>
        <ul className="space-y-3 font-sans text-sm text-ink/80">
          <li>
            <a
              href="https://doi.org/10.1113/jphysiol.1952.sp004764"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Hodgkin, A. L., & Huxley, A. F. (1952). A quantitative description
              of membrane current and its application to conduction and excitation
              in nerve. <em>The Journal of Physiology, 117</em>(4), 500–544.
            </a>
          </li>
          <li>
            Katz, B. (1966). <em>Nerve, muscle, and synapse</em>. McGraw-Hill.
          </li>
          <li>
            <a
              href="https://doi.org/10.1038/nn0203-123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Kandel, E. R. (2003). The molecular biology of memory storage: A
              dialogue between genes and synapses. <em>Nature Reviews
              Neuroscience, 3</em>, 123–130.
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.1016/j.neuron.2007.08.025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Südhof, T. C. (2008). Neuroligins and neurexins link synaptic
              function to cognitive disease. <em>Nature, 455</em>(7215),
              903–911.
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.1016/j.cell.2012.10.017"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Nimmerjahn, A., Bergles, D. E., & Helmchen, F. (2012).{' '}
              <em>In vivo</em> imaging of astrocyte function.{' '}
              <em>Cell, 150</em>(5), 958–960.
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.1016/j.tins.2004.05.001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Fields, R. D. (2004). Myelin: More than insulation.{' '}
              <em>Trends in Neurosciences, 27</em>(7), 361–364.
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.1111/j.1469-7793.2001.t01-1-00447.x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Destexhe, A., Mainen, Z. F., & Sejnowski, T. J. (2001).{' '}
              <em>Kinetic models of synaptic transmission</em>. In{' '}
              <em>The Journal of Physiology, 535</em>(Pt 2), 447–455.
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
              href="https://de.wikipedia.org/wiki/Aktionspotential"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Wikipedia: Aktionspotential
            </a>{' '}
            — Umfassender Überblick mit mathematischen Modellen
          </li>
          <li>
            <a
              href="https://www.neuroknowledge.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              NeuroKnowledge
            </a>{' '}
            — Interaktive Neuronen-Simulation mit allen Phasen des Aktionspotentials
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=HYQm11hZOmg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              2-Minute Neuroscience: The Action Potential
            </a>{' '}
            — Kurzvideo mit Visualisierung aller Ionenbewegungen
          </li>
          <li>
            <a
              href="https://www.simurai.com/u/axon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Axon Game
            </a>{' '}
            — Spielerische Erkundung der synaptischen Übertragung
          </li>
          <li>
            <a
              href="https://www.ncbi.nlm.nih.gov/books/NBK11108/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              NCBI: Synaptic Transmission
            </a>{' '}
            — Kostenloses Lehrbuch-Kapitel mit Detailtiefe
          </li>
        </ul>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-creamDark flex justify-between">
          <Link
            to="/"
            className="font-sans text-sm text-ink/60 hover:text-ink transition-colors"
          >
            ← Zurück zur Übersicht
          </Link>
          <Link
            to="/gestaltgesetze"
            className="font-sans text-sm text-ink/60 hover:text-ink transition-colors"
          >
            Gestaltgesetze →
          </Link>
        </div>
      </div>
    </Layout>
  );
}
