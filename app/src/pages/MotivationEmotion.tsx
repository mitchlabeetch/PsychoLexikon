import { useRef, useEffect } from 'react';
import Layout from '@/components/Layout';
import DefinitionTooltip from '@/components/DefinitionTooltip';
import CitationTooltip from '@/components/CitationTooltip';
import Illustration from '@/components/Illustration';

export default function MotivationEmotion() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Mini */}
      <section className="bg-creamDark py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-block px-3 py-1 bg-sepiaPale text-sepia font-mono text-xs tracking-wider mb-4">
            MOTIVATION & EMOTION
          </div>
          <h1 className="font-serif font-semibold text-h1 text-ink mb-4">
            Theorien der Motivation & Emotion
          </h1>
          <p className="font-serif text-xl text-inkSecondary max-w-3xl">
            Warum wir tun, was wir tun — Und was wir dabei fühlen
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="bg-bluePale py-3">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-sans text-sm text-inkSecondary">
            <span className="inline-block w-3 h-3 bg-blue rounded-full mr-2" />
            <strong>Blau unterstrichene Begriffe</strong> zeigen Definitionen beim Hover.
            <span className="inline-block w-3 h-3 bg-red rounded-full ml-4 mr-2" />
            <strong>Rot unterstrichene Texte</strong> zeigen wissenschaftliche Quellenangaben beim Hover.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12" ref={contentRef}>
        {/* Einleitung */}
        <section>
          <p className="font-serif text-body text-ink leading-relaxed">
            Warum stehst du morgens auf? Warum fühlst du Angst vor einer Prüfung?{' '}
            <strong>Motivation</strong> und <strong>Emotion</strong> sind zwei Seiten derselben
            Medaille — sie treiben unser Handeln an und färben unsere Erfahrung. Doch wie entstehen
            sie wirklich? Die Psychologie hat über ein Jahrhundert lang verschiedene Theorien
            entwickelt, um diese grundlegenden Kräfte des menschlichen Erlebens zu verstehen.
          </p>
        </section>

        {/* Motivationstheorien */}
        <section className="mt-16">
          <h2 className="font-serif font-semibold text-h2 text-ink mb-6">
            Was treibt uns an? — Motivationstheorien
          </h2>

          <p className="font-serif text-body text-ink leading-relaxed">
            Motivation beschreibt die Kräfte, die ein Verhalten initiieren, lenken und aufrechterhalten.
            Verschiedene Theorien haben unterschiedliche Antworten darauf geliefert, was diese Kräfte
            genau sind.
          </p>

          <h3 className="font-serif font-semibold text-h3 text-ink mt-8 mb-4">
            Hulls Drive-Reduction-Theorie
          </h3>
          <p className="font-serif text-body text-ink leading-relaxed">
            <CitationTooltip citation="Hull, C. L. (1943). Principles of Behavior. Appleton-Century-Crofts.">
              Clark L. Hulls Behaviorismus-Modell
            </CitationTooltip>{' '}
            postuliert eine einfache Kette: Ein <strong>Bedürfnis</strong> (z.B. Hunger) erzeugt einen{' '}
            <strong>Drive</strong> (einen energetischen Zustand), der <strong>Verhalten</strong> antreibt
            (Essen suchen), das zur <strong>Reduktion</strong> des Drives führt (Sättigung). Das System
            strebt nach <DefinitionTooltip term="Homöostase" definition="Der Bestreben eines Organismus, ein inneres Gleichgewicht und konstante Lebensbedingungen aufrechtzuerhalten.">Homöostase</DefinitionTooltip>.
            Doch Hulls Modell kann Phänomene wie <strong>Neugier</strong> oder{' '}
            <strong>exploratives Verhalten</strong> nicht erklären — warum sollte jemand freiwillig
            Komplexität statt Einfachheit suchen?
          </p>

          <h3 className="font-serif font-semibold text-h3 text-ink mt-8 mb-4">
            Maslows Bedürfnishierarchie
          </h3>
          <p className="font-serif text-body text-ink leading-relaxed">
            Abraham Maslows berühmte Pyramide ordnet Bedürfnisse hierarchisch:
            <strong>Physiologische Bedürfnisse</strong> (Hunger, Durst) bilden die Basis, darüber folgen
            <strong> Sicherheit</strong>, <strong>soziale Zugehörigkeit</strong>,{' '}
            <strong>Anerkennung</strong> und schließlich <strong>Selbstverwirklichung</strong>.
            CitationTooltip{" "}
            <CitationTooltip citation="Maslow, A. H. (1943). A theory of human motivation. Psychological Review, 50(4), 370–396.">
              Maslows Hierarchie
            </CitationTooltip>{' '}
            wurde weithin populär — doch die empirische Basis ist dünn:
            CitationTooltip{" "}
            <CitationTooltip citation="Wahba, M. A. & Bridwell, L. G. (1976). Maslow reconsidered: A review of research on the need hierarchy theory. Organizational Behavior and Human Performance, 15(2), 212–240.">
              Wahba & Bridwell (1976)
            </CitationTooltip>{' '}
            fanden keine überzeugende Evidenz für die strikte hierarchische Abfolge. Zudem ist das
            Modell kulturell verankert in <strong>individualistischen</strong> Gesellschaften.
          </p>

          <Illustration
            src="/illu-maslow-pyramid.png"
            alt="Maslows Bedürfnishierarchie als Pyramide"
            caption={
              <>
                Die <strong>Bedürfnispyramide</strong> nach Maslow: Von grundlegenden
                physiologischen Bedürfnissen bis zur Selbstverwirklichung an der Spitze.
              </>
            }
            figureNumber={1}
            aspectRatio="3/4"
          />

          <h3 className="font-serif font-semibold text-h3 text-ink mt-8 mb-4">
            Selbstbestimmungstheorie (SDT) nach Deci & Ryan
          </h3>
          <p className="font-serif text-body text-ink leading-relaxed">
            Die{' '}
            <CitationTooltip citation="Deci, E. L. & Ryan, R. M. (1985). Intrinsic Motivation and Self-Determination in Human Behavior. Plenum Press.">
              Selbstbestimmungstheorie
            </CitationTooltip>{' '}
            postuliert drei universelle psychologische Grundbedürfnisse:
          </p>
          <ul className="space-y-3 mt-4 mb-6">
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="font-mono text-blue font-bold shrink-0">1.</span>
              <span>
                <DefinitionTooltip term="Autonomie" definition="Das Erleben von Handlungen als selbstbestimmt, willentlich und freiwillig, nicht durch äußere Zwänge kontrolliert.">Autonomie</DefinitionTooltip> —
                das Erleben von Handlungen als selbstbestimmt und freiwillig
              </span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="font-mono text-blue font-bold shrink-0">2.</span>
              <span>
                <DefinitionTooltip term="Kompetenz" definition="Das Grundbedürfnis, sich bei Handlungen als wirksam und fähig zu erleben, Herausforderungen zu meistern.">Kompetenz</DefinitionTooltip> —
                das Gefühl, eigene Fähigkeiten effektiv einsetzen zu können
              </span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="font-mono text-blue font-bold shrink-0">3.</span>
              <span>
                <DefinitionTooltip term="Soziale Eingebundenheit" definition="Das Grundbedürfnis nach sozialer Verbundenheit, Zugehörigkeit und wertschätzenden Beziehungen zu anderen Menschen.">Soziale Eingebundenheit</DefinitionTooltip> —
                das Bedürfnis nach wertschätzenden sozialen Beziehungen
              </span>
            </li>
          </ul>
          <p className="font-serif text-body text-ink leading-relaxed">
            Erfüllte Bedürfnisse fördern <strong>intrinsische Motivation</strong> — das Handeln
            aus eigenem Antrieb heraus, ohne äußere Belohnung. Deci & Ryan differenzieren ein
            Kontinuum der <strong>Extrinsischen Motivation</strong>: von externer Regulierung
            ("weil ich muss") über introjizierte ("weil ich mich sonst schuldig fühle") und
            identifizierte ("weil es wichtig ist") bis hin zur integrierten Regulierung
            ("weil es zu meinen Werten passt").
            CitationTooltip{" "}
            <CitationTooltip citation="Ryan, R. M. & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. American Psychologist, 55(1), 68–78.">
              Ryan & Deci (2000)
            </CitationTooltip>{' '}
            zeigten, dass Autonomieunterstützung die intrinsische Motivation fördert, während
            kontrollierende Bedingungen sie untergraben.
          </p>
        </section>

        {/* Emotionstheorien */}
        <section className="mt-16">
          <h2 className="font-serif font-semibold text-h2 text-ink mb-6">
            Was ist eine Emotion? — Emotionstheorien
          </h2>

          <p className="font-serif text-body text-ink leading-relaxed">
            Emotionen sind komplexe Zustände aus subjektivem Erleben, physiologischer Erregung und
            ausdrucksverhalten. Doch welcher dieser Aspekte kommt zuerst? Die klassischen
            Emotionstheorien liefern unterschiedliche Antworten.
          </p>

          <h3 className="font-serif font-semibold text-h3 text-ink mt-8 mb-4">
            James-Lange-Theorie
          </h3>
          <p className="font-serif text-body text-ink leading-relaxed">
            CitationTooltip{" "}
            <CitationTooltip citation="James, W. (1884). What is an emotion?. Mind, 9(34), 188-205.">
              William James' bahnbrechende These
            </CitationTooltip>{' '}
            lautet: Wir fühlen traurig, WEIL wir weinen — nicht umgekehrt. Der <strong>Reiz</strong>{' '}
            (z.B. ein Bär) löst eine <strong>Körperreaktion</strong> (Herzrasen, Zittern) aus, und
            die <strong>Wahrnehmung dieser Körperreaktion</strong> IST die Emotion. Das klingt
            gegenintuitiv, aber: Patienten mit einer lähmenden Rückenmarksverletzung berichten
            tatsächlich weniger intensive emotionale Gefühle.
          </p>

          <h3 className="font-serif font-semibold text-h3 text-ink mt-8 mb-4">
            Cannon-Bard-Theorie
          </h3>
          <p className="font-serif text-body text-ink leading-relaxed">
            CitationTooltip{" "}
            <CitationTooltip citation="Cannon, W. B. (1927). The James-Lange theory of emotions: A critical examination and an alternative theory. American Journal of Psychology, 39(1/4), 106–124.">
              Cannon und Bard
            </CitationTooltip>{' '}
            widersprachen: Thalamus-Signale lösen <strong>gleichzeitig</strong> physiologische
            Erregung (über den Hypothalamus) UND emotionales Erleben (über den Kortex) aus.
            Man kann nicht jede Emotion eindeutig einer Körperreaktion zuordnen — Herzrasen
            tritt bei Angst UND Aufregung auf.
          </p>

          <Illustration
            src="/illu-james-lange.png"
            alt="Vergleich der Emotionstheorien"
            caption={
              <>
                Vergleich: <strong>James-Lange</strong> (Körper zuerst),{' '}
                <strong>Cannon-Bard</strong> (gleichzeitig) und{' '}
                <strong>Schachter-Singer</strong> (Erregung + Kognition).
              </>
            }
            figureNumber={2}
            aspectRatio="16/9"
          />

          <h3 className="font-serif font-semibold text-h3 text-ink mt-8 mb-4">
            Schachter-Singer Zwei-Faktoren-Theorie
          </h3>
          <p className="font-serif text-body text-ink leading-relaxed">
            CitationTooltip{" "}
            <CitationTooltip citation="Schachter, S. & Singer, J. E. (1962). Cognitive, social, and physiological determinants of emotional state. Psychological Review, 69(5), 379–399.">
              Schachter und Singers klassisches Experiment
            </CitationTooltip>{' '}
            zeigte: <strong>Physiologische Erregung</strong> allein reicht nicht — sie muss{' '}
            <strong>kognitiv bewertet</strong> werden. Versuchspersonen erhielten Adrenalin
            (Herzrasen, Zittern). Die, die mit einem "glücklichen" Komplizen saßen, fühlten sich
            euphorisch; die mit einem "wütenden" wütend. Gleiche Körperreaktion, unterschiedliche
            Emotion — durch kognitive Bewertung.
          </p>
          <p className="font-serif text-body text-ink leading-relaxed">
            Die berühmte{' '}
            <DefinitionTooltip term="Brücken-Studie (Dutton & Aron, 1974)" definition="Klassisches Experiment zur Fehlattribution von Erregung: Männer auf einer schwankenden Brücke fühlten mehr Attraktion gegenüber einer Frau als auf einer stabilen Brücke.">Brücken-Studie</DefinitionTooltip>{' '}
            von Dutton & Aron bestätigte dies: Männer auf einer schwankenden Hängebrücke
            (hohe Erregung) fühlten mehr Attraktion zu einer Frau, die sie befragte, als Männer
            auf einer stabilen Brücke — sie fehlattributierten ihre Angst-Erregung als romantische
            Anziehung.
          </p>

          <h3 className="font-serif font-semibold text-h3 text-ink mt-8 mb-4">
            Lazarus' kognitive Bewertungstheorie
          </h3>
          <p className="font-serif text-body text-ink leading-relaxed">
            CitationTooltip{" "}
            <CitationTooltip citation="Lazarus, R. S. (1991). Emotion and Adaptation. Oxford University Press.">
              Richard Lazarus
            </CitationTooltip>{' '}
            ging noch weiter: Die <strong>kognitive Bewertung kommt ERST</strong>, noch vor der
            physiologischen Reaktion. Die <strong>Primärbewertung</strong> fragt: "Ist dies für
            mich relevant?" Die <strong>Sekundärbewertung</strong>: "Kann ich damit umgehen?"
            Erst diese Bewertung erzeugt Emotion UND Körperreaktion. Stress entsteht, wenn die
            Anforderungen die Bewältigungsressourcen übersteigen.
          </p>

          <Illustration
            src="/illu-schachter-singer.png"
            alt="Schachter-Singer Zwei-Faktoren-Modell"
            caption={
              <>
                Die <strong>Zwei-Faktoren-Theorie</strong>: Identische körperliche Erregung wird
                durch kognitive Bewertung in unterschiedliche Emotionen übersetzt.
              </>
            }
            figureNumber={3}
            aspectRatio="16/9"
          />
        </section>

        {/* Neurobiologie */}
        <section className="mt-16">
          <h2 className="font-serif font-semibold text-h2 text-ink mb-6">
            Neurobiologie der Emotion
          </h2>
          <p className="font-serif text-body text-ink leading-relaxed">
            Emotionen werden durch ein komplexes Netzwerk von Hirnstrukturen generiert und
            reguliert. Zwei Systeme sind besonders wichtig.
          </p>

          <h3 className="font-serif font-semibold text-h3 text-ink mt-8 mb-4">
            Der Papez-Kreis
          </h3>
          <p className="font-serif text-body text-ink leading-relaxed">
            Der <DefinitionTooltip term="Papez-Kreis" definition="Neuronaler Schaltkreis in limbischen Strukturen (Hippocampus, Gyrus cinguli, Hypothalamus), der eine zentrale Rolle bei der Emotionsverarbeitung und -regulation spielt.">Papez-Kreis</DefinitionTooltip>{' '}
            beschreibt einen neuronalen Schaltkreis in <strong>limbischen Strukturen</strong>:
            Hippocampus → Gyrus cinguli → Hypothalamus. Dieser Kreis ist zentral für die
            Verknüpfung von kognitiver Bewertung und emotionaler Reaktion.
          </p>

          <h3 className="font-serif font-semibold text-h3 text-ink mt-8 mb-4">
            Die Amygdala und LeDoux' dualer Pfad
          </h3>
          <p className="font-serif text-body text-ink leading-relaxed">
            CitationTooltip{" "}
            <CitationTooltip citation="LeDoux, J. E. (1996). The Emotional Brain: The Mysterious Underpinnings of Emotional Life. Simon & Schuster.">
              Joseph LeDoux
            </CitationTooltip>{' '}
            entdeckte zwei Wege der Furchtverarbeitung in der{' '}
            <DefinitionTooltip term="Amygdala" definition="Mandelkern im Temporallappen, zentral für die Verarbeitung von Angst, Bedrohung und emotionalen Erinnerungen.">Amygdala</DefinitionTooltip>:
          </p>
          <ul className="space-y-3 mt-4 mb-6">
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="font-mono text-blue font-bold shrink-0">1.</span>
              <span>
                <strong>Low Road</strong> (schnell, unbewusst): Thalamus → Amygdala in
                Millisekunden. Du zuckst zurück, BEVOR du weißt, was passiert.
              </span>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed flex gap-3">
              <span className="font-mono text-blue font-bold shrink-0">2.</span>
              <span>
                <strong>High Road</strong> (langsam, bewusst): Thalamus → Kortex → Amygdala.
                Bewusste Analyse und emotionale Regulation.
              </span>
            </li>
          </ul>
          <p className="font-serif text-body text-ink leading-relaxed">
            Dies erklärt <strong>PTSD</strong>: Traumatische Erinnerungen werden über den schnellen
            Weg aktiviert, bevor der Kortex rational eingreifen kann. Die Amygdala-präfrontale
            Interaktion ist zudem entscheidend für <strong>Emotionsregulation</strong>:
            Das präfrontale Cortex hemmt die Amygdala und ermöglicht bewusste Kontrolle
            emotionaler Reaktionen.
          </p>

          <p className="font-serif text-body text-ink leading-relaxed mt-4">
            Ein faszinierendes Detail: Das Belohnungssystem unterscheidet zwischen{' '}
            <strong>"wanting"</strong> (Verlangen, durch Dopamin) und{' '}
            <strong>"liking"</strong> (Genuss, durch Opioid-Systeme). Süchtiges Verhalten
            entsteht, wenn das "wanting"-System überaktiv wird, während das "liking"-System
            gleich bleibt — man will mehr, genießt aber nicht mehr.
          </p>
        </section>

        {/* Integration */}
        <section className="mt-16">
          <h2 className="font-serif font-semibold text-h2 text-ink mb-6">
            Integration: Motivation trifft Emotion
          </h2>
          <p className="font-serif text-body text-ink leading-relaxed">
            Moderne Ansätze integrieren Motivation und Emotion:{' '}
            <strong>Annäherungs-Vermeidungs-Motivation</strong> beschreibt, wie positive Emotionen
            Annäherungsverhalten fördern und negative Emotionen Vermeidung auslösen. Die{' '}
            <strong>Bewertungstheorien</strong> (Lazarus, Schachter-Singer) zeigen, dass Kognition
            die Brücke zwischen Motivation und Emotion schlägt: Wie wir eine Situation bewerten,
            bestimmt, was wir fühlen und wie wir handeln.
          </p>
          <p className="font-serif text-body text-ink leading-relaxed">
            Für die Psychologie des ersten Studienjahres ist entscheidend: Motivation und Emotion
            sind keine isolierten Konstrukte, sondern eng verflochtene Prozesse, die Kognition,
            Physiologie und Verhalten gleichermaßen beeinflussen. Das Verständnis beider
            Bereiche ist unerlässlich für klinische, pädagogische und arbeitspsychologische
            Anwendungen.
          </p>
        </section>

        {/* Zusammenfassung */}
        <section className="mt-16 bg-sepiaPale p-8">
          <h2 className="font-serif font-semibold text-h2 text-ink mb-6">
            Zusammenfassung
          </h2>
          <ol className="list-decimal list-inside space-y-3">
            <li className="font-serif text-body text-ink leading-relaxed">
              <strong>Motivation</strong> beschreibt die Kräfte, die Verhalten initiieren und
              aufrechterhalten — von biologischen Drives (Hull) über Bedürfnishierarchien (Maslow)
              bis zu psychologischen Grundbedürfnissen (SDT).
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              Die <strong>Selbstbestimmungstheorie</strong> (Deci & Ryan) ist aktuell die am besten
              belegte Motivationstheorie mit den drei Grundbedürfnissen Autonomie, Kompetenz und
              soziale Eingebundenheit.
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              <strong>Emotionen</strong> entstehen durch das Zusammenspiel von physiologischer
              Erregung, kognitiver Bewertung und Verhalten — die Reihenfolge bleibt theoretisch
              umstritten (James-Lange vs. Cannon-Bard vs. Schachter-Singer vs. Lazarus).
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              Die <strong>Amygdala</strong> spielt eine zentrale Rolle bei der Furchtverarbeitung
              über einen schnellen (subkortikalen) und einen langsamen (kortikalen) Pfad.
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              Motivation und Emotion sind eng verflochten: Bewertungsprozesse verbinden beide
              Systeme und bestimmen, wie wir Situationen erleben und darauf reagieren.
            </li>
          </ol>
        </section>

        {/* Literatur */}
        <section className="mt-16">
          <h2 className="font-serif font-semibold text-h2 text-ink mb-6">Literatur</h2>
          <ul className="space-y-3">
            <li className="font-serif text-body text-ink leading-relaxed">
              Hull, C. L. (1943). <em>Principles of Behavior</em>. Appleton-Century-Crofts.
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              Maslow, A. H. (1943). A theory of human motivation.{' '}
              <em>Psychological Review, 50</em>(4), 370–396.
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              Wahba, M. A. & Bridwell, L. G. (1976). Maslow reconsidered: A review of research on the
              need hierarchy theory. <em>Organizational Behavior and Human Performance, 15</em>(2), 212–240.
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              Deci, E. L. & Ryan, R. M. (1985). <em>Intrinsic Motivation and Self-Determination in
              Human Behavior</em>. Plenum Press.
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              Ryan, R. M. & Deci, E. L. (2000). Self-determination theory and the facilitation of
              intrinsic motivation, social development, and well-being.{' '}
              <em>American Psychologist, 55</em>(1), 68–78.
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              James, W. (1884). What is an emotion? <em>Mind, 9</em>(34), 188–205.
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              Cannon, W. B. (1927). The James-Lange theory of emotions: A critical examination and
              an alternative theory. <em>American Journal of Psychology, 39</em>(1/4), 106–124.
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              Schachter, S. & Singer, J. E. (1962). Cognitive, social, and physiological
              determinants of emotional state. <em>Psychological Review, 69</em>(5), 379–399.
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              Lazarus, R. S. (1991). <em>Emotion and Adaptation</em>. Oxford University Press.
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              LeDoux, J. E. (1996). <em>The Emotional Brain: The Mysterious Underpinnings of
              Emotional Life</em>. Simon & Schuster.
            </li>
          </ul>
        </section>

        {/* Zum Weiterforschen */}
        <section className="mt-16 bg-creamDark p-8">
          <h2 className="font-serif font-semibold text-h2 text-ink mb-6">
            Zum Weiterforschen
          </h2>
          <ul className="space-y-3">
            <li className="font-serif text-body text-ink leading-relaxed">
              <strong>Film:</strong>{' '}
              <a href="https://www.youtube.com/watch?v=rbP3S5o0b2o" className="text-blue hover:underline" target="_blank" rel="noopener noreferrer">
                Eternal Sunshine of the Spotless Mind (2004)
              </a>{' '}
              — Emotion, Gedächtnis und Identität
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              <strong>Interaktiv:</strong>{' '}
              <a href="https://selfdeterminationtheory.org/" className="text-blue hover:underline" target="_blank" rel="noopener noreferrer">
                selfdeterminationtheory.org
              </a>{' '}
              — Offizielle SDT-Website mit umfassenden Ressourcen
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              <strong>Wikipedia:</strong>{' '}
              <a href="https://de.wikipedia.org/wiki/James-Lange-Theorie" className="text-blue hover:underline" target="_blank" rel="noopener noreferrer">
                James-Lange-Theorie
              </a>
              ,{' '}
              <a href="https://de.wikipedia.org/wiki/Zwei-Faktoren-Theorie_(Emotion)" className="text-blue hover:underline" target="_blank" rel="noopener noreferrer">
                Zwei-Faktoren-Theorie
              </a>
              ,{' '}
              <a href="https://de.wikipedia.org/wiki/Amygdala" className="text-blue hover:underline" target="_blank" rel="noopener noreferrer">
                Amygdala
              </a>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              <strong>Lehrbuch:</strong>{' '}
              <a href="https://www.hogrefe.com/shop/schmerz-und-emotion-1.html" className="text-blue hover:underline" target="_blank" rel="noopener noreferrer">
                LeDoux, J. (2003): Das Netz der Gefühle. Wie Emotionen entstehen.
              </a>
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              <strong>Podcast:</strong>{' '}
              <a href="https://hiddenbrain.org/" className="text-blue hover:underline" target="_blank" rel="noopener noreferrer">
                Hidden Brain (NPR)
              </a>{' '}
              — Episoden zu Motivation und Emotion
            </li>
            <li className="font-serif text-body text-ink leading-relaxed">
              <strong>Dokumentation:</strong>{' '}
              <a href="https://www.pbs.org/show/mind-explained" className="text-blue hover:underline" target="_blank" rel="noopener noreferrer">
                The Mind, Explained (Netflix)
              </a>{' '}
              — Episode "Memory" und "Anxiety"
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
