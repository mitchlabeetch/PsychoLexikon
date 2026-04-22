import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const subjectLinks = [
  { to: '/aktionspotential', label: 'Aktionspotential' },
  { to: '/gestaltgesetze', label: 'Gestaltgesetze' },
  { to: '/arbeitsgedaechtnis', label: 'Arbeitsgedächtnis' },
  { to: '/konditionierung', label: 'Konditionierung' },
  { to: '/bis-modell', label: 'BIS-Modell' },
  { to: '/piaget', label: 'Piaget' },
  { to: '/attribution', label: 'Attribution' },
  { to: '/big-five', label: 'Big Five' },
  { to: '/versuchsplanung', label: 'Versuchsplanung' },
  { to: '/signifikanztestung', label: 'Signifikanztestung' },
  { to: '/psychometrie', label: 'Psychometrie' },
  { to: '/motivation-emotion', label: 'Motivation & Emotion' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <nav
        className={[
          'sticky top-0 z-50 h-14 flex items-center border-b transition-shadow duration-200',
          scrolled ? 'shadow-nav-scroll' : '',
        ].join(' ')}
        style={{
          background: 'rgba(247, 242, 232, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderColor: '#D6D0C4',
        }}
      >
        <div className="container-content w-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif font-semibold text-ui text-ink hover:opacity-70 transition-opacity duration-200"
          >
            PsychologieLexikon
          </Link>

          {/* Center: Subject breadcrumb (only on subject pages) */}
          {!isHome && (
            <span className="hidden lg:block absolute left-1/2 -translate-x-1/2 font-sans font-normal text-caption text-inkSecondary truncate max-w-xs">
              {subjectLinks.find((s) => s.to === location.pathname)?.label || ''}
            </span>
          )}

          {/* Desktop: Alle Themen link */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/"
              className="font-sans font-medium text-caption text-inkSecondary hover:text-ink transition-colors duration-200"
            >
              Alle Themen
            </Link>
          </div>

          {/* Mobile: Hamburger */}
          <button
            className="md:hidden p-2 -mr-2 text-inkSecondary hover:text-ink transition-colors"
            onClick={handleMenuToggle}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-mobile-menu md:hidden"
          style={{ background: 'rgba(247, 242, 232, 0.98)', top: '56px' }}
        >
          <div className="container-content py-8 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 56px)' }}>
            <p className="font-sans font-medium text-caption text-inkMuted uppercase tracking-widest mb-4">
              Alle Themen
            </p>
            <div className="grid grid-cols-2 gap-3">
              {subjectLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={[
                    'font-sans text-sm py-2 px-3 rounded-lg transition-colors duration-200',
                    location.pathname === link.to
                      ? 'bg-sepiaPale text-sepia font-medium'
                      : 'text-inkSecondary hover:bg-creamDark hover:text-ink',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
