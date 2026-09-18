import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './contacto.css';


const fotoFondo = 'https://picsum.photos/id/1076/1600/900';

const linksInferiores = [
  { label: 'proyectos', to: '/proyectos' },
  { label: 'oficina', to: '/oficina' },
  { label: 'novedades', to: '/novedades' },
  { label: 'contacto', to: '/contacto' },
  { label: 'legales', to: '/legales' },
];

function Contacto() {
  const location = useLocation();

  return (
    <div className="contacto-page">

      
      <div className="contacto-hero">
        <img src={fotoFondo} alt="" className="contacto-hero-img" />
        <div className="contacto-hero-overlay" />
        <h1 className="contacto-hero-title">contacto</h1>
      </div>

      
      <div className="contacto-lower">

        <div className="contacto-map">
          
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps?q=San+Lorenzo+386,+Resistencia,+Chaco&output=embed&iwloc=B"
          loading="lazy"
          allowFullScreen
        ></iframe>
        </div>

        <div className="contacto-info">

          <div className="contacto-tagline">
            <span>aquino pasotti</span>
            <span className="separator">|</span>
            <span>consultora</span>
            <span className="separator">|</span>
            <span>arquitectura + ingenieria</span>
          </div>

          <nav className="contacto-footer-nav">
            {linksInferiores.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={location.pathname === item.to ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="contacto-fields">
            <div className="contacto-field-row">
              <span className="contacto-field-label">ubicación:</span>
              <div className="contacto-field-value">
                
                <p>san lorenzo 386</p>
                <p>cp h3500  - resistenncia - chaco - argentina</p>
              </div>
            </div>

            <div className="contacto-field-row">
              <span className="contacto-field-label">telefonos:</span>
              <div className="contacto-field-value">
                
                <p>+54 9 362 4629733 (es)</p>
                <p>+54 9 490 0180 (en)</p>
              </div>
            </div>
            
            <div className="contacto-field-row">
              <span className="contacto-field-label">mail:</span>
              <div className="contacto-field-value">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@aquinopasotti.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contacto-mail-link"
                >
                  info@aquinopasotti.com
                </a>
              </div>
            </div>
          </div>

        </div>
        
      </div>
      <footer className="contacto-footer">
        <span>©2026 aquino pasotti</span>
      </footer>
    </div>
  );
}

export default Contacto;