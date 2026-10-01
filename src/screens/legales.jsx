import React from 'react';
import './legales.css';
import { useLanguage } from '../Traduccion/languagecontext.jsx';

function Legales() {
  const { t } = useLanguage();
  const l = (key) => t(`legales.${key}`);

  return (
    <div className="legales-page">
      <div className="legales-container">

        <div className="legales-content">

          <h1 className="legales-title">{l('title')}</h1>

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
        </div>
      </div>
      <footer className="footer">
        <span>{t('footer')}</span>
      </footer>
    </div>
  );
}

export default Legales;