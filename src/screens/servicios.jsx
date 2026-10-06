import React from 'react';
import './servicios.css';
import { useLanguage } from '../Traduccion/languagecontext.jsx';
import Footer from '../components/Footer.jsx';
import TituloPagina from '../components/TituloPagina.jsx';
import SubNav from '../components/SubNav.jsx';

import foto1 from '../assets/logo2.jpg';
import foto2 from '../assets/logo2.jpg';

function Servicios() {
  const { t } = useLanguage();

  return (
    <div className="servicios-page page-con-footer">
      <SubNav grupo="oficina" />
      <TituloPagina>{t('servicios.titulo')}</TituloPagina>
      <div className="servicios-container">

        <div className="servicios-texto">
          <div className="servicios-content">
            <p>
              {t('servicios.p1')}
              {t('servicios.p2')}
              {t('servicios.p3')}
            </p>
          </div>
        </div>

        <div className="servicios-fotos">
          <div className="servicio-foto-wrap">
            <img src={foto1} alt="Servicios 1" className="servicio-foto" />
          </div>
          <div className="servicio-foto-wrap">
            <img src={foto2} alt="Servicios 2" className="servicio-foto" />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Servicios;