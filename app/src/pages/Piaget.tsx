import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import DefinitionTooltip from '@/components/DefinitionTooltip';
import CitationTooltip from '@/components/CitationTooltip';
import Illustration from '@/components/Illustration';

export default function Piaget() {
  return (
    <Layout>
      {/* Hero Mini */}
      <section className="bg-creamDark py-12">
        <div className="container-prose">
          <span className="font-sans text-sm font-medium uppercase tracking-widest text-cornflower mb-2 block">
            Entwicklungspsychologie
          </span>
          <h1 className="font-serif font-bold text-h1 text-ink">
            Kognitive Entwicklung nach Piaget
          </h1>
          <p className="font-serif text-subtitle text-ink mt-3">
            Vom Baby zum logischen Denker — Piagets Entwicklungsstufen
          </p>
        </div>
      </section>

      <main className="bg-creamLight">
        <div className="container-prose py-8">

          {/* Einleitung */}
          <section>
            <p className="font-serif text-body text-ink leading-relaxed">
              Ein vierjähriges Kind glaubt, dass mehr Wasser in einem hohen, dünnen Glas ist als in einem
              breiten — obwohl die Menge identisch ist. Warum? Weil sein Denken noch anders strukturiert ist.
              Jean Piaget erklärte solche Phänomene mit einem{' '}
              <strong>stufenmodell der kognitiven Entwicklung</strong>, das bis heute prägend ist.
            </p>
          </section>

          {/* Assimilation & Akkommodation */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Die motorische Entwicklung: Assimilation und Akkommodation
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Piaget beschreibt kognitive Entwicklung als aktiven Konstruktionsprozess. Das Kind
              nutzt <DefinitionTooltip term="Schemata" definition="Mentale Baupläne oder kognitive Strukturen, die Wissen organisieren und Handlungen leiten. Schemata entwickeln sich durch Erfahrung.">Schemata</DefinitionTooltip> —
              mentale Baupläne, die Wissen organisieren:
            </p>
            <div className="bg-white rounded-xl p-6 mt-6 border border-sand shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-sans font-semibold text-cornflower mb-2">Assimilation</h3>
                  <p className="font-serif text-sm text-ink leading-relaxed">
                    Neues Wissen wird in ein <strong>bestehendes Schema</strong> eingeordnet. Ein Kind,
                    das einen Hund kennt, nennt auch einen Schäferhund „Hund" — es assimiliert die
                    neue Erfahrung in sein Tier-Schema.
                  </p>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-terracotta mb-2">Akkommodation</h3>
                  <p className="font-serif text-sm text-ink leading-relaxed">
                    Ein bestehendes Schema wird <strong>verändert oder neu gebildet</strong>, weil die
                    neue Erfahrung nicht passt. Das Kind lernt „Katze" als neues Schema — die Katze
                    miaut, nicht bellt.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-sand">
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong>Äquilibration</strong> — Der Wechsel zwischen Assimilation und Akkommodation
                  schafft eine Balance. Wenn ein Schema nicht mehr ausreicht, entsteht ein{' '}
                  <DefinitionTooltip term="kognitives Dissonanz" definition="Ein Zustand psychischer Unstimmigkeit, der entsteht, wenn neue Informationen mit bestehenden Überzeugungen kollidieren.">kognitives Ungleichgewicht</DefinitionTooltip>,
                  das das Kind antreibt, sein Denken weiterzuentwickeln.
                </p>
              </div>
            </div>

            <CitationTooltip
              citation="Piaget, J. (1936). *Origins of intelligence in the child*. Routledge & Kegan Paul."
            >
              In seinem Hauptwerk beschreibt Piaget die genetische Epistemologie — wie Wissen sich durch
              Entwicklung konstruiert.
            </CitationTooltip>
          </section>

          {/* Illustration: Stufenübersicht */}
          <Illustration
            src="/illu-piaget-stages.png"
            alt="Piagets vier Entwicklungsstufen"
            caption={
              <>
                Die vier <strong>Entwicklungsstufen</strong> nach Piaget mit typischen Altersbereichen und
                Leistungen.
              </>
            }
            figureNumber={1}
            aspectRatio="16/9"
          />

          {/* Sensorimotorisch */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              1. Sensorimotorisches Stadium (0–2 Jahre)
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Das Baby erkundet die Welt durch <strong>Sinne und Bewegung</strong>. Greifen, Saugen,
              Schauen sind die primären Erkenntniswerkzeuge.
            </p>
            <ul className="font-serif text-body text-ink leading-relaxed mt-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Objektpermanenz:</strong> Um 8–12 Monate lernt das Baby, dass Objekte{' '}
                <DefinitionTooltip term="Objektpermanenz" definition="Die Erkenntnis, dass Objekte auch dann weiter existieren, wenn sie nicht mehr sichtbar sind. Ein Meilenstein des sensorimotorischen Stadiums.">weiter existieren</DefinitionTooltip>,
                auch wenn es sie nicht mehr sieht. Vorher: „aus den Augen, aus dem Sinn."
              </li>
              <li>
                <strong>A-not-B-Fehler:</strong> Versteckt man ein Spielzeug unter Decke A, sucht das
                Baby dort. Versteckt man es dann unter Decke B, sucht es trotzdem unter A — eine
                automatisierte Reaktion überwiegt.
              </li>
              <li>
                <strong>Deferred imitation:</strong> Gegen Ende des Stadiums kann das Baby Handlungen
                imitieren, die es früher beobachtet hat.
              </li>
            </ul>

            <CitationTooltip
              citation="Diamond, A. (1985). Development of the ability to use recall to guide action. *Child Development*, 56(4), 868–883."
            >
              Diamond untersuchte den A-not-B-Fehler systematisch und zeigte dessen Abhängigkeit vom
              Arbeitsgedächtnis.
            </CitationTooltip>
          </section>

          {/* Präoperational */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              2. Präoperational Stadium (2–7 Jahre)
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Das Kind denkt jetzt <strong>symbolisch</strong> — es kann mit Sprache, Bildern und
              Fantasie umgehen. Doch das Denken hat noch erhebliche Grenzen:
            </p>
            <ul className="font-serif text-body text-ink leading-relaxed mt-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Egozentrismus:</strong> Das Kind kann sich nicht in andere Perspektiven
                versetzen. Im{' '}
                <DefinitionTooltip term="Three-Mountain-Task" definition="Piagets Experiment, bei dem ein Kind eine Bergszene aus seiner Perspektive beschreiben soll und nicht erkennt, wie sie von einer anderen Position aussieht.">Three-Mountain-Task</DefinitionTooltip>{' '}
                beschreibt es die Szene nur aus seiner eigenen Sicht.
              </li>
              <li>
                <strong>Zentrierung:</strong> Das Kind fokussiert sich auf <strong>nur einen Aspekt</strong>{' '}
                einer Situation. Beim Glas-Experiment: Es sieht nur die Höhe, nicht die Breite.
              </li>
              <li>
                <strong>Animismus:</strong> Leblosen Dingen werden menschliche Eigenschaften zugeschrieben —
                Bäume haben Gefühle, die Sonne „geht schlafen."
              </li>
              <li>
                <strong>Mangelnde Konservation:</strong> Gleiche Mengen erscheinen verschieden, wenn
                die Form verändert wird. Ein Ball Ton wird zu einer Wurst gerollt — „Jetzt ist mehr!"
              </li>
              <li>
                <strong>Irreversibilität:</strong> Das Kind kann Operationen nicht mental rückgängig machen.
                Es versteht nicht, dass die Wurst wieder zu einem Ball geformt werden kann.
              </li>
            </ul>

            <Illustration
              src="/illu-conservation-task.png"
              alt="Konservationstest"
              caption={
                <>
                  Der <strong>Konservationstest</strong>: Kinder im präoperationalen Stadium sehen
                  unterschiedliche Mengen — obwohl gleich viel vorhanden ist.
                </>
              }
              figureNumber={2}
            />
          </section>

          {/* Konkret-operational */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              3. Konkret-operational Stadium (7–11 Jahre)
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Ein entscheidender Durchbruch: Das Kind versteht jetzt{' '}
              <strong>Konservation</strong>! Die Wassermenge bleibt gleich, egal welches Glas — denn
              es kann Höhe und Breite gleichzeitig berücksichtigen.
            </p>
            <ul className="font-serif text-body text-ink leading-relaxed mt-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Klassifikation:</strong> Das Kind kann Objekte nach mehreren Kriterien sortieren
                (größer als, kleiner als, gleich).
              </li>
              <li>
                <strong>Seriation:</strong> Es kann eine Reihe nach Größe ordnen (Stäbchen von kurz
                nach lang).
              </li>
              <li>
                <strong>Logisches Denken über konkrete Objekte:</strong> „Wenn A größer als B und B
                größer als C, dann ist A größer als C." — aber nur mit greifbaren Inhalten.
              </li>
              <li>
                <strong>INRC-Gruppenstruktur:</strong> Das Kind beherrscht logische Operationen: Identität,
                Negation, Reziprozität und Korrelativität.
              </li>
              <li>
                <strong>Dezentrierung:</strong> Mehrere Aspekte einer Situation können gleichzeitig
                berücksichtigt werden.
              </li>
            </ul>

            <CitationTooltip
              citation="Piaget, J., & Inhelder, B. (1969). *The psychology of the child*. Basic Books."
            >
              In diesem zusammenfassenden Werk systematisieren Piaget und Inhelder die Operationen des
              konkret-operationalen Denkens.
            </CitationTooltip>
          </section>

          {/* Formal-operational */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              4. Formal-operational Stadium (ab ~11 Jahre)
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Jetzt wird das Denken <strong>abstrakt und hypothetisch</strong>. Jugendliche können über
              Möglichkeiten nachdenken, die nicht realisiert sind:
            </p>
            <ul className="font-serif text-body text-ink leading-relaxed mt-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Hypothetisch-deduktives Denken:</strong> Systematisches Prüfen von Hypothesen
                — „Wenn A wahr ist, dann müsste B folgen."
              </li>
              <li>
                <strong>Abstrakte Konzepte:</strong> Denken über Gerechtigkeit, Freiheit, Liebe —
                nicht nur über konkrete Dinge.
              </li>
              <li>
                <strong>Propositionale Logik:</strong> Logische Schlüsse aus sprachlichen Aussagen,
                unabhängig von konkretem Inhalt.
              </li>
              <li>
                <strong>Gedankenexperimente:</strong> „Was wäre, wenn...?" — das Erkunden
                hypothetischer Szenarien im Kopf.
              </li>
              <li>
                <strong>Metakognition:</strong> Denken über das eigene Denken wird möglich.
              </li>
            </ul>
          </section>

          {/* Moderne Kritik */}
          <section>
            <h2 className="font-serif font-semibold text-h3 text-ink mt-12 mb-4">
              Moderne Kritik und Neubewertung
            </h2>
            <p className="font-serif text-body text-ink leading-relaxed">
              Piagets Stufenmodell wurde durch empirische Befunde teilweise revidiert. Moderne Forschung
              zeigt, dass Kinder <strong>früher und kompetenter</strong> sind, als Piaget annahm:
            </p>

            <div className="bg-white rounded-xl p-6 mt-4 border border-sand shadow-sm">
              <h3 className="font-sans font-semibold text-ink mb-3">
                Baillargeon: Objektpermanenz schon im Säuglingsalter
              </h3>
              <p className="font-serif text-sm text-ink leading-relaxed">
                Baillargeon nutzte den{' '}
                <DefinitionTooltip term="Violation-of-Expectation-Paradigma" definition="Ein experimentelles Verfahren, das misst, ob Säuglinge länger zu unerwarteten Ereignissen schauen als zu erwarteten — als Indikator für implizites Wissen.">Violation-of-Expectation-Paradigma</DefinitionTooltip>:
                Säuglinge schauten länger zu, wenn ein Objekt durch einen scheinbar unmöglichen
                Schirm hindurch zu gleiten schien — ein Hinweis auf Objektpermanenz schon bei{' '}
                <strong>3,5 Monaten</strong>!
              </p>

              <CitationTooltip
                citation="Baillargeon, R. (1987). Object permanence in 3.5- and 4.5-month-old infants. *Developmental Psychology*, 23(5), 655–664."
              >
                Baillargeons bahnbrechende Studie revolutionierte das Verständnis früher kognitiver Kompetenzen.
              </CitationTooltip>
            </div>

            <div className="bg-white rounded-xl p-6 mt-4 border border-sand shadow-sm">
              <h3 className="font-sans font-semibold text-ink mb-3">
                Core Knowledge Theory (Spelke & Kinzler)
              </h3>
              <p className="font-serif text-sm text-ink leading-relaxed">
                Säuglinge sind mit <strong>domänenspezifischen Kernsystemen</strong> ausgestattet —
                z. B. für Objekte, Zahlen, Raum und Agenten (handelnde Wesen). Diese Fähigkeiten
                sind angeboren und werden durch Erfahrung verfeinert, nicht erst konstruiert.
              </p>

              <CitationTooltip
                citation="Spelke, E. S., & Kinzler, K. D. (2007). Core knowledge. *Developmental Science*, 10(1), 89–96."
              >
                Die Core Knowledge Theory ist heute ein wichtiger Gegenentwurf zu Piagets
                Konstruktivismus.
              </CitationTooltip>
            </div>

            <div className="mt-4">
              <p className="font-serif text-body text-ink leading-relaxed">
                <strong>Neo-Piagetianer</strong> (z. B. Robbie Case, Kurt Fischer) übernehmen Piagets
                Stufenstruktur, ergänzen sie aber durch Information-Processing-Theorien. Sie betonen,
                dass die Verarbeitungskapazität des Arbeitsgedächtnisses den Stufenwechsel antreibt —
                nicht nur Äquilibration.
              </p>
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
                  Piaget beschreibt kognitive Entwicklung durch{' '}
                  <strong>Assimilation, Akkommodation und Äquilibration</strong> — aktiver
                  Konstruktion durch das Kind.
                </li>
                <li>
                  <strong>Sensorimotorisch (0–2):</strong> Welt durch Sinne und Motorik; Objektpermanenz
                  als Kernleistung.
                </li>
                <li>
                  <strong>Präoperational (2–7):</strong> Symbolisches Denken, aber egozentrisch und
                  zentriert; keine Konservation.
                </li>
                <li>
                  <strong>Konkret-operational (7–11):</strong> Logisches Denken über konkrete Objekte;
                  Konservation, Klassifikation und Seriation beherrscht.
                </li>
                <li>
                  <strong>Formal-operational (11+):</strong> Abstraktes, hypothetisch-deduktives Denken
                  und Gedankenexperimente.
                </li>
                <li>
                  <strong>Kritik:</strong> Kinder sind früher kompetenter (Baillargeon); Core Knowledge
                  Theory postuliert angeborene Domänen; Neo-Piagetianer ergänzen durch
                  Arbeitsgedächtnismodelle.
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
                Piaget, J. (1936). <em>Origins of intelligence in the child</em>. Routledge & Kegan Paul.
              </li>
              <li>
                Piaget, J., & Inhelder, B. (1969). <em>The psychology of the child</em>. Basic Books.
              </li>
              <li>
                Diamond, A. (1985). Development of the ability to use recall to guide action.{' '}
                <em>Child Development</em>, 56(4), 868–883.
              </li>
              <li>
                Baillargeon, R. (1987). Object permanence in 3.5- and 4.5-month-old infants.{' '}
                <em>Developmental Psychology</em>, 23(5), 655–664.
              </li>
              <li>
                Spelke, E. S., & Kinzler, K. D. (2007). Core knowledge. <em>Developmental Science</em>,{' '}
                10(1), 89–96.
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
                to="/vygotsky"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                Vygotsky: Soziale Entwicklung
              </Link>
              <Link
                to="/sprachentwicklung"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                Sprachentwicklung im Kindesalter
              </Link>
              <Link
                to="/core-knowledge"
                className="font-sans text-sm font-medium text-cornflower bg-cornflower/10 rounded-full px-4 py-2 hover:bg-cornflower/20 transition-colors"
              >
                Core Knowledge Theory
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
