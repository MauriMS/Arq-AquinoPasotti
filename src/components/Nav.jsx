// Nav.jsx
import { Link } from 'react-router-dom';
import logo from "../assets/logo1.jpg"; // Reemplazá por la ruta real de tu logo
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      
      <div className="brand-group"> {/* Contenedor flex para logo y texto */}
        
        {/* Usamos el logo real dentro del Link */}
        <Link to="/" className="logo-link">
          <img src={logo} alt="Aquino Pasotti Logo" className="logo-img" />
        </Link>
        
        <div className="brand-text">
          <Link to="/" className="title">aquino pasotti</Link>
          <span className="subtitle">arquitectura + ingenieria</span>
        </div>
      </div>

      <ul className="nav-links">
        <li><Link to="/proyectos">proyectos</Link></li>
        <li><Link to="/oficina">oficina</Link></li>
        <li><Link to="/novedades">novedades</Link></li>
        <li><Link to="/contacto">contacto</Link></li>
      </ul>
      
    </nav>
  );
}

export default Nav;