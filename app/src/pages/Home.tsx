import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '@/components/Layout';
import DefinitionTooltip from '@/components/DefinitionTooltip';

gsap.registerPlugin(ScrollTrigger);

const subjects = [
  {
    num: '01',
    title: 'Aktionspotential & Synaptische Transmission',
    category: 'Biologische Psychologie',
    description: 'Wie Neuronen elektrische Signale erzeugen und übertragen — vom Ruhepotential bis zur chemischen Synapse',
    route: '/aktionspotential',
  },
  {
    num: '02',
    title: 'Gestaltgesetze & Prägnanzprinzip',
    category: 'Wahrnehmungspsychologie',
    description: 'Warum wir die Welt nicht als Punktwolke sehen, sondern als sinnvolle Formen und Ganzheiten',
    route: '/gestaltgesetze',
  },
  {
    num: '03',
    title: 'Das Arbeitsgedächtnis nach Baddeley',
    category: 'Gedächtnis & Kognition',
    description: 'Wie unser Geist Informationen vorübergehend speichert und verarbeitet — Baddeleys Modell',
    route: '/arbeitsgedaechtnis',
  },
  {
    num: '04',
    title: 'Klassische & Operante Konditionierung',
    category: 'Lernpsychologie',
    description: 'Wie Erfahrung Verhalten formt — von Pawlows Hund bis Skinners Labor',
    route: '/konditionierung',
  },
  {
    num: '05',
    title: 'Berliner Intelligenzstrukturmodell (BIS)',
    category: 'Differentielle Psychologie',
    description: 'Eine umfassende Struktur menschlicher Intelligenz — operative und kreative Leistungen',
    route: '/bis-modell',
  },
  {
    num: '06',
    title: 'Kognitive Entwicklung nach Piaget',
    category: 'Entwicklungspsychologie',
    description: 'Vier Stufen der geistigen Entwicklung — wie Kinder die Welt nach und nach verstehen',
    route: '/piaget',
  },
  {
    num: '07',
    title: 'Attributionstheorie',
    category: 'Sozialpsychologie',
    description: 'Wie wir Ursachen für Verhalten erklären — in uns selbst und in anderen',
    route: '/attribution',
  },
  {
    num: '08',
    title: 'Fünf-Faktoren-Modell (Big Five)',
    category: 'Persönlichkeitspsychologie',
    description: 'Die fünf Grunddimensionen menschlicher Persönlichkeit und ihre Messung',
    route: '/big-five',
  },
  {
    num: '09',
    title: 'Experimentelle Versuchsplanung',
    category: 'Methodenlehre',
    description: 'Vom Hypothesentest bis zur randomisierten Kontrollgruppe — die DNA der Psychologie',
    route: '/versuchsplanung',
  },
  {
    num: '10',
    title: 'Signifikanztestung & p-Werte',
    category: 'Statistik',
    description: 'Was ein signifikantes Ergebnis wirklich bedeutet — und wo die Grenzen liegen',
    route: '/signifikanztestung',
  },
  {
    num: '11',
    title: 'Psychometrische Gütekriterien',
    category: 'Diagnostik',
    description: 'Was einen guten psychologischen Test ausmacht — Objektivität, Reliabilität, Validität',
    route: '/psychometrie',
  },
  {
    num: '12',
    title: 'Theorien der Motivation & Emotion',
    category: 'Motivation & Emotion',
    description: 'Warum wir handeln und fühlen — von Drive-Reduction bis Selbstbestimmung',
    route: '/motivation-emotion',
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const heroCtaRef = useRef<HTMLAnchorElement>(null);
  const gridHeaderRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null);
  const aboutTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations on page load
      gsap.fromTo(
        heroTitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.1 }
      );
      gsap.fromTo(
        heroSubtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.3 }
      );
      gsap.fromTo(
        heroCtaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.5 }
      );

      // Grid header scroll animation
      if (gridHeaderRef.current) {
        gsap.fromTo(
          gridHeaderRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridHeaderRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Card staggered entrance
      const cardElements = cardsRef.current.filter(Boolean);
      if (cardElements.length > 0) {
        gsap.fromTo(
          cardElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.06,
            scrollTrigger: {
              trigger: cardElements[0],
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // About section animations
      if (aboutHeadingRef.current) {
        gsap.fromTo(
          aboutHeadingRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: aboutHeadingRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
      if (aboutTextRef.current) {
        gsap.fromTo(
          aboutTextRef.current,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
            delay: 0.1,
            scrollTrigger: {
              trigger: aboutTextRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const scrollToGrid = () => {
    const el = document.getElementById('subject-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full flex items-center justify-center overflow-hidden paper-bg"
        style={{
          minHeight: '70vh',
          paddingTop: 'clamp(4rem, 8vw, 6rem)',
          paddingBottom: 'clamp(3rem, 6vw, 4rem)',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(254,253,251,0.85) 0%, rgba(247,242,232,0.7) 50%, rgba(254,253,251,0.85) 100%)' }} />
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <h1
            ref={heroTitleRef}
            className="font-serif font-bold text-hero text-ink max-w-[800px] opacity-0 tracking-tight"
          >
            Die Grundlagen der Psychologie
          </h1>
          <p
            ref={heroSubtitleRef}
            className="font-serif text-body-lg text-inkSecondary max-w-[640px] mt-6 opacity-0"
          >
            12 Kernthemen des Bachelor-Studiums — erklärt, veranschaulicht und zum Mitdenken gemacht.
          </p>
          <a
            ref={heroCtaRef}
            onClick={(e) => {
              e.preventDefault();
              scrollToGrid();
            }}
            href="#subject-grid"
            className={[
              'mt-8 inline-block font-sans font-medium text-ui rounded-lg',
              'transition-all duration-200 ease-smooth',
              'hover:-translate-y-px opacity-0',
            ].join(' ')}
            style={{
              background: '#1C1917',
              color: '#FEFDFB',
              padding: '12px 24px',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#57534E';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#1C1917';
            }}
          >
            Alle Themen entdecken
          </a>
        </div>
      </section>

      {/* Subject Grid Section */}
      <section
        id="subject-grid"
        className="container-content"
        style={{
          paddingTop: 'clamp(4rem, 8vw, 6rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        }}
      >
        <h2
          ref={gridHeaderRef}
          className="font-serif font-semibold text-h2 text-ink mb-8 opacity-0"
        >
          12 Themen des Bachelor-Studiums
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {subjects.map((subject, i) => (
            <Link
              key={subject.num}
              to={subject.route}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={[
                'group relative rounded-xl p-6 border transition-all duration-300 ease-smooth opacity-0',
                'hover:-translate-y-0.5 hover:shadow-card-hover hover:border-inkMuted',
              ].join(' ')}
              style={{
                background: '#EDE6D6',
                borderColor: '#D6D0C4',
              }}
            >
              {/* Number badge */}
              <div
                className={[
                  'w-10 h-10 rounded-full flex items-center justify-center mb-4',
                  'font-serif font-bold text-sm',
                ].join(' ')}
                style={{ background: '#FDE68A', color: '#92400E' }}
              >
                {subject.num}
              </div>

              {/* Category tag */}
              <p
                className="font-sans font-medium text-caption uppercase mb-2"
                style={{
                  color: '#A8A29E',
                  letterSpacing: '0.08em',
                }}
              >
                {subject.category}
              </p>

              {/* Title */}
              <h3 className="font-serif font-semibold text-h4 text-ink mb-2 leading-snug">
                {subject.title}
              </h3>

              {/* Description */}
              <p className="font-serif text-body-sm text-inkSecondary line-clamp-2">
                {subject.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="container-prose border-t"
        style={{
          borderColor: '#D6D0C4',
          paddingTop: 'clamp(3rem, 6vw, 5rem)',
          paddingBottom: 'clamp(2rem, 4vw, 4rem)',
        }}
      >
        <h2
          ref={aboutHeadingRef}
          className="font-serif font-semibold text-h3 text-ink mb-6 opacity-0"
        >
          Über dieses Projekt
        </h2>
        <p
          ref={aboutTextRef}
          className="font-serif text-body text-inkSecondary leading-relaxed opacity-0"
        >
          PsychologieLexikon wurde entwickelt, um Studierenden im ersten Semester eine klare,
          strukturierte und zugängliche Einführung in die Kernbereiche des Bachelor-Studiums zu geben.
          Jedes Thema wird anhand konkreter Beispiele, wissenschaftlicher Illustrationen und interaktiver
          Elemente erklärt — optimiert für verschiedene Lernstile und Aufmerksamkeitsbedürfnisse.
          Die Inhalte basieren auf etablierten Lehrbüchern und aktueller Forschungsliteratur.
        </p>

        {/* Definition tooltip example */}
        <div className="mt-8 p-5 rounded-lg border" style={{ background: '#EFF6FF', borderColor: '#DBEAFE' }}>
          <p className="font-sans font-medium text-caption text-blue mb-2 uppercase tracking-wider">
            Interaktive Elemente
          </p>
          <p className="font-serif text-body text-ink">
            Diese Plattform nutzt{' '}
            <DefinitionTooltip
              term="Interaktive Tooltips"
              definition="Kleine Informationsfenster, die beim Hover über markierte Begriffe erscheinen und zusätzliche Erklärungen oder Quellenangaben anzeigen."
            >
              interaktive Tooltips
            </DefinitionTooltip>{' '}
            für Definitionen und Quellenangaben — bewege den Mauszeiger über den blau markierten Text, um mehr zu erfahren.
          </p>
        </div>
      </section>
    </Layout>
  );
}
