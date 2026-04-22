import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import DefinitionTooltip from '@/components/DefinitionTooltip';
import CitationTooltip from '@/components/CitationTooltip';
import Illustration from '@/components/Illustration';

export default function Arbeitsgedaechtnis() {
  return (
    <Layout>
      {/* HeroMini */}
      <section className="bg-creamDark py-12">
        <div className="container-prose">
          <p className="text-sm font-sans uppercase tracking-wider text-ink/60 mb-2">
            Gedächtnis & Kognition
          </p>
          <h1 className="font-serif text-h1 text-ink">
            Das Arbeitsgedächtnis nach Baddeley
          </h1>
          <p className="font-serif text-body-lg text-ink/80 mt-3">
            Dein geistiger Arbeitsplatz — wie dein Gehirn Informationen am Laufen hält
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
          Versuch dir 7 Zufallszahlen zu merken, während du eine Kopfrechenaufgabe
          löst. Schwer? Das liegt daran, dass dein <strong>Arbeitsgedächtnis</strong>{' '}
          begrenzt ist — aber verblüffend flexibel. Es ist das kognitive System,
          das Informationen kurzfristig speichert und gleichzeitig verarbeitet, während
          du denkst, planst und entscheidest.
        </p>

        {/* Illustration 1 */}
        <Illustration
          src="/illu-working-memory.png"
          alt="Baddeleys Arbeitsgedächtnismodell"
          caption={
            <>
              Baddeleys <strong>Mehrkomponentenmodell</strong> mit zentraler
              Exekutive, phonologischer Schleife, visuell-räumlichem Notizblock
              und episodischem Puffer.
            </>
          }
          figureNumber={1}
        />

        {/* Vom KZG zum AG */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Vom Kurzzeitgedächtnis zum Arbeitsgedächtnis
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          Das klassische <strong>Atkinson-Shiffrin-Modell</strong> (1968) sah das
          Kurzzeitgedächtnis als passiven Zwischenspeicher: Informationen fließen
          vom Sensorischen Gedächtnis rein, werden kurz gehalten und entweder ins
          Langzeitgedächtnis überführt oder vergessen. Doch diese Sicht war zu
          simpel.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          <CitationTooltip citation="Baddeley, A. D., & Hitch, G. (1974). Working memory. In G. H. Bower (Ed.), The psychology of learning and motivation (Vol. 8, pp. 47–89). Academic Press.">
            Baddeley & Hitch (1974)
          </CitationTooltip>{' '}
          lieferten den entscheidenden Beweis: Probanden konnten gleichzeitig
          Ziffernfolgen speichern <em>und</em> logische Aufgaben lösen — aber mit
          sinkender Leistung. Je mehr Kapazität das Merken beanspruchte, desto
          langsamer wurde das Rechnen. Das zeigte: Es gibt ein flexibles System
          mit begrenzter Ressourcen, nicht nur einen statischen Speicher.
        </p>

        {/* Phonologische Schleife */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Die phonologische Schleife
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          Die <strong>phonologische Schleife</strong> ist das am besten erforschte
          Subsystem. Sie besteht aus zwei Komponenten: dem{' '}
          <DefinitionTooltip
            term="Phonologischer Speicher"
            definition="Kurzfristiger Speicher für sprachbasierte Information mit schnellem Verfall (ca. 1,5–2 Sekunden), wenn nicht rehearsed wird."
          >
            phonologischen Speicher
          </DefinitionTooltip>{' '}
          (hält Sprachlaute ca. 1,5–2 Sekunden) und der{' '}
          <DefinitionTooltip
            term="Artikulatorisches Rehearsal"
            definition="Unterdrückter Sprechprozess, der phonologische Informationen durch stilles Wiederholen aktiv im Arbeitsgedächtnis hält."
          >
            artikulatorischen Rehearsal
          </DefinitionTooltip>
          — einem stillen, inneren Sprechprozess, der den Verfall aufhält.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Drei Phänomene belegen dieses Modell. Erstens die{' '}
          <strong>artikulatorische Unterdrückung</strong>: Wenn Probanden lautlos
          „der, die, das" wiederholen, blockieren sie das Rehearsal — die
          Merkspanne für Wörter bricht von 7 auf 2–3 Einheiten ein. Zweitens der{' '}
          <strong>Word-Length-Effekt</strong>: Kurze Wörter („Brot, Hut, Tag")
          lassen sich besser merken als lange („Universität, Astronomie"), weil
          sie schneller durchgesprochen werden können. Drittens der{' '}
          <strong>Irrelevanter-Sound-Effekt</strong>: Hintergrundsprache stört
          das Gedächtnis für verbale Listen — auch wenn die Sprache fremd ist
          und man sie nicht versteht.
        </p>

        {/* Illustration 2 */}
        <Illustration
          src="/illu-phonological-loop.png"
          alt="Phonologische Schleife im Detail"
          caption={
            <>
              Die <strong>phonologische Schleife</strong> besteht aus einem
              phonologischen Speicher mit schnellem Verfall und einem
              artikulatorischen Rehearsal-Prozess.
            </>
          }
          figureNumber={2}
        />

        {/* Visuell-räumlicher Notizblock */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Der visuell-räumliche Notizblock
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          Der <strong>visuell-räumliche Notizblock</strong> speichert visuelle
          und räumliche Informationen — Farben, Formen, Positionen, Bewegungen.
          Er hat ebenfalls zwei Komponenten: den <strong>Visuellen Cache</strong>
          (für visuelle Merkmale wie Farbe und Form) und den{' '}
          <strong>Inneren Schreiber</strong> (für räumliche Bewegungen und
          Manipulation).
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Neuropsychologische Evidenz lieferte der berühmte Patient{' '}
          <CitationTooltip citation="Shallice, T., & Warrington, E. K. (1970). Independent functioning of verbal memory stores: A neuropsychological study. Quarterly Journal of Experimental Psychology, 22(2), 261–273. https://doi.org/10.1080/00335557043000031">
            K.F. (Shallice & Warrington, 1970)
          </CitationTooltip>
          . Nach einem Schädelhirntrauma war sein unmittelbares
          Wortgedächtnis auf 1–2 Einheiten reduziert — aber sein visuelles
          Kurzzeitgedächtnis blieb völlig intakt. Diese{' '}
          <strong>doppelte Dissoziation</strong> beweist, dass phonologische und
          visuelle Speicher unabhängige Systeme sind.
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Interessanterweise arbeiten beide Subsysteme weitgehend unabhängig.
          Du kannst gleichzeitig eine Ziffernfolge wiederholen <em>und</em> eine
          räumliche Aufgabe lösen — mit nur geringer gegenseitiger Störung.
          Erst wenn die zentrale Exekutive voll beansprucht ist, bricht die
          Leistung ein.
        </p>

        {/* Zentrale Exekutive */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Die zentrale Exekutive: Der Dirigent im Kopf
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          Die <strong>zentrale Exekutive</strong> ist kein Speicher — sie ist der
          „Dirigent", der die anderen Komponenten steuert. Sie bindet weder
          phonologische noch visuelle Information; stattdessen verwaltet sie die
          Aufmerksamkeitsressourcen. Ihre drei Kernfunktionen sind:
        </p>
        <ul className="list-disc list-inside space-y-2 font-serif text-body text-ink leading-relaxed mt-4">
          <li>
            <strong>Fokussieren</strong>: Aufrechterhaltung der Aufmerksamkeit
            auf relevante Information bei Ablenkung.
          </li>
          <li>
            <strong>Wechseln</strong>: Flexible Umschaltung zwischen Aufgaben
            und Denkstrategien.
          </li>
          <li>
            <strong>Hemmen</strong>: Unterdrückung von dominanten, aber
            unpassenden Antworten.
          </li>
        </ul>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          <CitationTooltip citation="Baddeley, A. D. (2012). Working memory: Theories, models, and controversies. Annual Review of Psychology, 63, 1–29. https://doi.org/10.1146/annurev-psych-120710-100422">
            Baddeley (2012)
          </CitationTooltip>{' '}
          vergleicht die Exekutive mit einem überarbeiteten Superhelden: Sie hat
          begrenzte Kapazität und kann nicht überall gleichzeitig sein. Wenn du
          beim Autofahren telefonierst, beansprucht das Gespräch die Exekutive —
          und die Reaktionsfähigkeit sinkt messbar.
        </p>

        {/* Episodischer Puffer */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Der episodische Puffer: Die multimodale Brücke
        </h2>
        <p className="font-serif text-body text-ink leading-relaxed">
          <CitationTooltip citation="Baddeley, A. D. (2000). The episodic buffer: A new component of working memory? Trends in Cognitive Sciences, 4(11), 417–423. https://doi.org/10.1016/S1364-6613(00)01538-2">
            Baddeley (2000)
          </CitationTooltip>{' '}
          ergänzte das Modell um den <strong>episodischen Puffer</strong>. Diese
          vierte Komponente bindet Informationen aus den anderen Subsystemen mit
          Informationen aus dem Langzeitgedächtnis zu kohärenten{' '}
          <DefinitionTooltip
            term="Episodische Repräsentation"
            definition="Zeitlich begrenzte, zusammenhängende Darstellung eines Ereignisses, die Informationen aus verschiedenen Quellen integriert."
          >
            episodischen Repräsentationen
          </DefinitionTooltip>
          . Sie ist die Antwort auf die Frage: Wie merken wir uns einen
          zusammenhängenden Satz, der länger ist als 2 Sekunden Sprechzeit?
        </p>
        <p className="font-serif text-body text-ink leading-relaxed mt-4">
          Der episodische Puffer hat vermutlich eine begrenzte Kapazität von
          etwa 4 <strong>Chunks</strong> (Einheiten). Diese Chunks können
          komplex sein — ein ganzer Satz, ein Bild, eine Melodie. Er ist auch
          die Schnittstelle zum <strong>Bewusstsein</strong>: Was gerade im
          episodischen Puffer aktiv ist, ist uns bewusst.
        </p>

        {/* Zusammenfassung */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Zusammenfassung
        </h2>
        <ol className="list-decimal list-inside space-y-2 font-serif text-body text-ink leading-relaxed">
          <li>
            Baddeleys <strong>Arbeitsgedächtnismodell</strong> ersetzte die
            Vorstellung eines passiven Kurzzeitgedächtnisses durch ein aktives,
            multifunktionales System mit vier Komponenten.
          </li>
          <li>
            Die <strong>phonologische Schleife</strong> speichert Sprachlaute
            (ca. 2 Sekunden) und hält sie durch artikulatorisches Rehearsal
            aktiv. Artikulatorische Unterdrückung und Word-Length-Effekt belegen
            ihr Funktionsprinzip.
          </li>
          <li>
            Der <strong>visuell-räumliche Notizblock</strong> ist unabhängig von
            der phonologischen Schleife und speichert visuelle und räumliche
            Informationen — belegt durch Patient K.F.
          </li>
          <li>
            Die <strong>zentrale Exekutive</strong> ist kein Speicher, sondern
            ein Aufmerksamkeitskontrollsystem mit den Funktionen Fokussieren,
            Wechseln und Hemmen.
          </li>
          <li>
            Der <strong>episodische Puffer</strong> (Baddeley, 2000) bindet
            multimodale Information zu kohärenten episodischen Repräsentationen
            und verbindet das Arbeitsgedächtnis mit dem Langzeitgedächtnis und
            dem Bewusstsein.
          </li>
        </ol>

        {/* Literatur */}
        <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
          Literatur
        </h2>
        <ul className="space-y-3 font-sans text-sm text-ink/80">
          <li>
            <a
              href="https://doi.org/10.1016/S1364-6613(00)01538-2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Baddeley, A. D. (2000). The episodic buffer: A new component of
              working memory? <em>Trends in Cognitive Sciences, 4</em>(11),
              417–423.
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.1146/annurev-psych-120710-100422"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Baddeley, A. D. (2012). Working memory: Theories, models, and
              controversies. <em>Annual Review of Psychology, 63</em>, 1–29.
            </a>
          </li>
          <li>
            Baddeley, A. D., & Hitch, G. (1974). Working memory. In G. H. Bower
            (Ed.), <em>The psychology of learning and motivation</em> (Vol. 8,
            pp. 47–89). Academic Press.
          </li>
          <li>
            <a
              href="https://doi.org/10.1080/00335557043000031"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Shallice, T., & Warrington, E. K. (1970). Independent functioning
              of verbal memory stores: A neuropsychological study.{' '}
              <em>Quarterly Journal of Experimental Psychology, 22</em>(2),
              261–273.
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.1037/11590-000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Cowan, N. (2005). <em>Working memory capacity</em>. Psychology
              Press.
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
              href="https://de.wikipedia.org/wiki/Arbeitsged%C3%A4chtnis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Wikipedia: Arbeitsgedächtnis
            </a>{' '}
            — Deutscher Überblick über das Baddeley-Modell
          </li>
          <li>
            <a
              href="https://www.simplypsychology.org/working-memory.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              SimplyPsychology: Working Memory
            </a>{' '}
            — Englischsprachige Einführung mit Animationsvideo
          </li>
          <li>
            <a
              href="https://www.cognifit.com/de/scientific-validation/working-memory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              CogniFit: Arbeitsgedächtnis-Training
            </a>{' '}
            — Interaktive Aufgaben zur Erforschung deiner Kapazität
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=uhU_Uw3Y_PC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              The Brain Channel: Working Memory
            </a>{' '}
            — Vorlesung von Alan Baddeley über die Entwicklung seines Modells
          </li>
        </ul>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-creamDark flex justify-between">
          <Link
            to="/gestaltgesetze"
            className="font-sans text-sm text-ink/60 hover:text-ink transition-colors"
          >
            ← Gestaltgesetze
          </Link>
          <Link
            to="/konditionierung"
            className="font-sans text-sm text-ink/60 hover:text-ink transition-colors"
          >
            Konditionierung →
          </Link>
        </div>
      </div>
    </Layout>
  );
}
