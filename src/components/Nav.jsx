import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "../assets/logo3.jpg"; 
import { useLanguage } from '../Traduccion/languagecontext.jsx';
import './Nav.css';

const NAV_LINKS = [
  { to: '/proyectos', labelKey: 'nav.proyectos', activo: (p) => p.startsWith('/proyectos') },
  { to: '/oficina', labelKey: 'nav.oficina', activo: (p) => p.startsWith('/oficina') || p.startsWith('/servicios') },
  { to: '/novedades', labelKey: 'nav.novedades', activo: (p) => p.startsWith('/novedades') },
  { to: '/contacto', labelKey: 'nav.contacto', activo: (p) => p === '/contacto' },
];

function Nav() {
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();
  const isHome = location.pathname === '/';
  const isContacto = location.pathname === '/contacto';
  // Si hay una sección seleccionada, las demás se atenúan (en Home no hay ninguna)
  const hayActivo = NAV_LINKS.some((l) => l.activo(location.pathname));

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (isHome) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 50) {
        setIsVisible(true);
      } else if (currentScroll > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true);  
      }
      
      setLastScrollY(currentScroll);
    };

    const handleMouseMove = (e) => {
      
      if (e.clientY < 90) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY, isHome]);

  return (
    <nav className={`navbar ${isHome || isContacto ? 'nav-transparent' : 'nav-solid'} ${isVisible ? '' : 'nav-hidden'}`}>

      <div className="navbar-row">
        <div className="brand-group">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Aquino Pasotti Logo" className="logo-img" />
          </Link>

          <div className="brand-text">
            <Link to="/" className="title">aquino pasotti</Link>
            <span className="subtitle">{t('nav.subtitle')}</span>
          </div>
        </div>

        <div className="nav-right">
          <ul className={`nav-links ${hayActivo ? 'con-seleccion' : ''}`}>
            {NAV_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={item.activo(location.pathname) ? 'active' : ''}
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="lang-switcher">
            <button
              className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
              onClick={() => setLang('es')}
            >
              ES
            </button>
            <span className="lang-separator">/</span>
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>

    </nav>
  );
}

export default Nav;