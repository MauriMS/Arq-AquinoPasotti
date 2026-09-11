import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "../assets/logo3.jpg"; 
import './Nav.css';

function Nav() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (isHome) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 50) {
        setIsVisible(true);
      } else if (currentScroll > lastScrollY) {
        setIsVisible(false); // Baja = se oculta
      } else {
        setIsVisible(true);  // Sube = reaparece
      }
      
      setLastScrollY(currentScroll);
    };

    const handleMouseMove = (e) => {
      // Si el mouse sube a los primeros 90px de la pantalla, aparece el menú
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
    <nav className={`navbar ${isHome ? 'nav-transparent' : 'nav-solid'} ${isVisible ? '' : 'nav-hidden'}`}>
      
      <div className="brand-group"> 
        <Link to="/" className="logo-link">
          <img src={logo} alt="Aquino Pasotti Logo" className="logo-img" />
        </Link>
        
        <div className="brand-text">
          <Link to="/" className="title">aquino pasotti</Link>
          <span className="subtitle">arquitectura + ingenieria</span>
        </div>
      </div>

      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/proyectos">proyectos</Link></li>
          <li><Link to="/oficina">oficina</Link></li>
          <li><Link to="/novedades">novedades</Link></li>
          <li><Link to="/contacto">contacto</Link></li>
        </ul>
        
        <div className="lang-switcher">
          <button className="lang-btn active">ES</button>
          <span className="lang-separator">/</span>
          <button className="lang-btn">EN</button>
        </div>
      </div>
      
    </nav>
  );
}

export default Nav;