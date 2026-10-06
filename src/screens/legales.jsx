import React from 'react';
import './legales.css';
import { useLanguage } from '../Traduccion/languagecontext.jsx';
import Footer from '../components/Footer.jsx';
import TituloPagina from '../components/TituloPagina.jsx';
import SubNav from '../components/SubNav.jsx';

import logo from '../assets/logo3.jpg';

// Mismo PDF que usa el SubNav (en la carpeta /public)
const PDF_LEGALES = './terminos-legales.pdf';

function Legales() {
  const { t } = useLanguage();
  const l = (key) => t(`legales.${key}`);

  return (
    <div className="legales-page page-con-footer">
      <SubNav grupo="legales" />
      <TituloPagina>{l('title')}</TituloPagina>
      <div className="legales-container">

        <div className="legales-content">


          <p className="legales-intro">{l('intro')}</p>

          <div className="legales-section">
            <h7>{l('s1Titulo')}</h7>
            <p>{l('s1Texto')}</p>
          </div>

          <div className="legales-section">
            <h7>{l('s2Titulo')}</h7>
            <p>{l('s2Texto')}</p>
          </div>

          <div className="legales-section">
            <h7>{l('s3Titulo')}</h7>
            <p>{l('s3Texto')}</p>
          </div>

          <footer className="legales-footer">
            <p>{l('footer')}</p>
          </footer>

          <a
            href={PDF_LEGALES}
            target="_blank"
            rel="noopener noreferrer"
            className="legales-logo-link"
            aria-label="Aquino Pasotti - PDF"
          >
            <img src={logo} alt="Aquino Pasotti" className="legales-logo" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Legales;