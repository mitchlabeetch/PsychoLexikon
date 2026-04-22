import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{ background: '#EDE6D6', borderColor: '#D6D0C4' }}
    >
      <div className="container-content py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Col 1: Wordmark */}
          <div>
            <p className="font-serif font-semibold text-h4 text-ink">
              PsychologieLexikon
            </p>
            <p className="font-sans text-caption text-inkSecondary mt-2">
              12 Kernthemen des Bachelor-Studiums Psychologie
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <p className="font-sans font-medium text-caption text-inkMuted uppercase tracking-widest mb-3">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="font-sans text-caption text-inkSecondary hover:text-ink transition-colors duration-200"
              >
                Startseite
              </Link>
              <Link
                to="/"
                className="font-sans text-caption text-inkSecondary hover:text-ink transition-colors duration-200"
              >
                Alle Themen
              </Link>
            </div>
          </div>

          {/* Col 3: Disclaimer */}
          <div>
            <p className="font-serif italic text-caption text-inkMuted leading-relaxed">
              Für Studierende im Bachelor Psychologie. Kein Ersatz für Lehrbücher.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t text-center" style={{ borderColor: '#D6D0C4' }}>
          <p className="font-sans text-caption text-inkMuted">
            2026 PsychologieLexikon
          </p>
        </div>
      </div>
    </footer>
  );
}
