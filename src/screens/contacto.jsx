import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './contacto.css';
import { useLanguage } from '../Traduccion/languagecontext.jsx';
import Footer from '../components/Footer.jsx';
import TituloPagina from '../components/TituloPagina.jsx';
import fotoFondo from '../assets/1-vista-3d.jpeg';



// Mismas claves que usa el Nav, para no duplicar traducciones
const linksInferiores = [
  { labelKey: 'nav.proyectos', to: '/proyectos' },
  { labelKey: 'nav.oficina', to: '/oficina' },
  { labelKey: 'nav.novedades', to: '/novedades' },
  { labelKey: 'nav.contacto', to: '/contacto' },
  { labelKey: 'subnav.legales', to: '/legales' },
];

function Contacto() {
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <div className="contacto-page page-con-footer">

      
      <div className="contacto-hero">
        <img src={fotoFondo} alt="" className="contacto-hero-img" />
        <div className="contacto-hero-overlay" />
        <TituloPagina className="contacto-hero-title">{t('contacto.heroTitle')}</TituloPagina>
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
            <span>aquino pasotti  consultora</span>
            <span className="separator">|</span>
            <span>{t('contacto.taglineMid')}</span>
          </div>

          <nav className="contacto-footer-nav">
            {linksInferiores.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={location.pathname === item.to ? 'active' : ''}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>

          <div className="contacto-fields">
            <div className="contacto-field-row">
              <span className="contacto-field-label">{t('contacto.ubicacion')}</span>
              <div className="contacto-field-value">
                
                <p>resistencia - chaco - argentina</p>
              </div>
            </div>

            <div className="contacto-field-row">
              <span className="contacto-field-label">{t('contacto.telefonos')}</span>
              <div className="contacto-field-value">
                
                <p>+54 9 362 4629733  (es).</p>
                <p>+54 9 362 490 0180 (en).</p>
              </div>
            </div>
            
            <div className="contacto-field-row">
              <span className="contacto-field-label">{t('contacto.mail')}</span>
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
              <a 
                href="https://www.instagram.com/aquino_pasotti_consultora/" /* <- Acá poné el link real de ellos */
                target="_blank" 
                rel="noopener noreferrer" 
                className="instagram-link"
                title="Ir al Instagram"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="instagram-icon"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;