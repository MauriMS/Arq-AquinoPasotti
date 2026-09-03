import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo1.jpg"; 
import './Nav.css';

function Nav() {
  const location = useLocation();
  
  
  const isHome = location.pathname === '/';

  return (
    
    <nav className={`navbar ${isHome ? 'nav-transparent' : 'nav-solid'}`}>
      
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