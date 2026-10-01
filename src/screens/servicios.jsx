import React from 'react';
import './servicios.css';
import { useLanguage } from '../Traduccion/languagecontext.jsx';

import foto1 from '../assets/logo2.jpg';
import foto2 from '../assets/logo2.jpg';

function Servicios() {
  const { t } = useLanguage();

  return (
    <div className="servicios-page">
      <div className="servicios-container">

        <div className="servicios-texto">
          <h1 className="servicios-titulo">{t('servicios.titulo')}</h1>
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
      <footer className="footer">
        <span>{t('footer')}</span>
      </footer>
    </div>
  );
}

export default Servicios;