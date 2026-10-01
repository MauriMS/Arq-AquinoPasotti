import React from 'react';
import './oficina.css';
import { useLanguage } from '../Traduccion/languagecontext.jsx';

import arq1 from '../assets/logo2.jpg';
import arq2 from '../assets/logo2.jpg';
import arq3 from '../assets/logo2.jpg';

function Off2() {
  const { t } = useLanguage();
  const o = (key) => t(`oficina.${key}`);

  return (
    <div className="off2-page">
      <div className="off2-container">

        <h1 className="off2-title">{o('title')}</h1>

        <div className="oficina-content">
          <p>{o('p1')}</p>
          <p>{o('p2')}</p>
          <p>{o('p3')}</p>

          <h2 className="oficina-subtitle">{o('visionTitulo')}</h2>
          <ul className="oficina-list">
            {o('vision').map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="oficina-subtitle">{o('misionTitulo')}</h2>
          <ul className="oficina-list">
            {o('mision').map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="oficina-subtitle">{o('pilaresTitulo')}</h2>
          <ul className="oficina-list">
            {o('pilares').map((item, i) => (
              <li key={i}>
                <strong>{item.fuerte}</strong>
                {item.texto}
              </li>
            ))}
          </ul>

          <h2 className="oficina-subtitle">{o('filosofiaTitulo')}</h2>
          <p className="oficina-quote">{o('filosofiaQuote')}</p>
        </div>

        
        <hr className="off2-divider-line" />
        
        <div className="off2-architects-grid">
          <div className="off2-architect-item">
            <div className="off2-architect-caption">
              <span>Arq. Aquino Pasotti</span>
            </div>
            <div className="off2-architect-arrow"></div>
            <div className="off2-architect-img-wrap">
              <img src={arq1} alt="Arquitecto 1" className="off2-architect-img" />
            </div>
          </div>
          <div className="off2-architect-item">
            <div className="off2-architect-caption">
              <span>Arq. Daniel Aquino Pasotti</span>
            </div>
            <div className="off2-architect-arrow"></div>
            <div className="off2-architect-img-wrap">
              <img src={arq2} alt="Arquitecto 2" className="off2-architect-img" />
            </div>
          </div>
          <div className="off2-architect-item">
            <div className="off2-architect-caption">
              <span>Ing. Aquino Pasotti</span>
            </div>
            <div className="off2-architect-arrow"></div>
            <div className="off2-architect-img-wrap">
              <img src={arq3} alt="Arquitecto 3" className="off2-architect-img" />
            </div>
          </div>
        </div>

        <hr className="off2-divider-line" />

      </div>
      <footer className="off2_footer">
        <span className="off2-footer-span">{t('footer')}</span>
      </footer>
    </div>
  );
}

export default Off2;