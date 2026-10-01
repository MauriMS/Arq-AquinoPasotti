import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "../assets/logo3.jpg"; 
import { useLanguage } from '../Traduccion/languagecontext.jsx';
import './Nav.css';



// Cada item del submenú guarda una CLAVE de traducción (labelKey), no el texto
// fijo, así cambia solo al cambiar de idioma.
const SUBNAV_PROYECTOS = [
  { labelKey: 'subnav.arquitectura', to: '/proyectos/arquitectura' },
  { labelKey: 'subnav.ingenieria', to: '/proyectos/ingenieria' },
];

const SUBNAV_MAP = {
  '/oficina': [
    { labelKey: 'subnav.oficina', to: '/oficina' },
    { labelKey: 'subnav.servicios', to: '/servicios' },
  ],
  '/servicios': [
    { labelKey: 'subnav.oficina', to: '/oficina' },
    { labelKey: 'subnav.servicios', to: '/servicios' },
  ],
  '/legales':[
    { labelKey: 'subnav.legales', to: './terminos-legales.pdf', esPdf: true },
  ],
  '/proyectos': SUBNAV_PROYECTOS,
  '/proyectos/arquitectura': SUBNAV_PROYECTOS,
  '/proyectos/ingenieria': SUBNAV_PROYECTOS,
};

function Nav() {
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();
  const isHome = location.pathname === '/';
  const isContacto = location.pathname === '/contacto';
  const subNavItems = SUBNAV_MAP[location.pathname];

  
  
  const [displayedSubNav, setDisplayedSubNav] = useState(subNavItems || []);
  const subnavOpen = Boolean(subNavItems);

  useEffect(() => {
    if (subNavItems) {
      setDisplayedSubNav(subNavItems);
    }
  }, [location.pathname]); 

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
          <ul className="nav-links">
            <li>
              <Link 
                to="/proyectos" 
                className={location.pathname.startsWith('/proyectos') ? 'active' : ''}
              >
                {t('nav.proyectos')}
              </Link>
            </li>
            <li>
              <Link 
                to="/oficina" 
                className={location.pathname.startsWith('/oficina') || location.pathname.startsWith('/servicios') ? 'active' : ''}
              >
                {t('nav.oficina')}
              </Link>
            </li>
            <li>
              <Link 
                to="/novedades" 
                className={location.pathname.startsWith('/novedades') ? 'active' : ''}
              >
                {t('nav.novedades')}
              </Link>
            </li>
            <li>
              <Link 
                to="/contacto" 
                className={location.pathname === '/contacto' ? 'active' : ''}
              >
                {t('nav.contacto')}
              </Link>
            </li>
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

      <div className={`navbar-subrow-wrap ${subnavOpen ? 'open' : ''}`}>
        <div className="navbar-subrow-inner">
          <div className="navbar-subrow">
            {/* El key fuerza a React a recrear la lista y disparar la animación de CSS */}
            <ul className="subnav-links" key={location.pathname}>
              {displayedSubNav.map((item) => (
                <li key={item.to}>
                  {item.esPdf ? (
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(item.labelKey)}
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      className={location.pathname === item.to ? 'active' : ''}
                    >
                      {t(item.labelKey)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </nav>
  );
}

export default Nav;