import React from 'react';
import './oficina.css'; // o './off2.css' dependiendo del nombre real de tu archivo CSS
import { useLanguage } from '../Traduccion/languagecontext.jsx';
import Footer from '../components/Footer.jsx';
import TituloPagina from '../components/TituloPagina.jsx';
import SubNav from '../components/SubNav.jsx';

import arq1 from '../assets/logo2.jpg';
import arq2 from '../assets/logo2.jpg';
import arq3 from '../assets/logo2.jpg';

function Oficina() {
  const { t } = useLanguage();
  const o = (key) => t(`oficina.${key}`);

  return (
    <div className="oficina-page page-con-footer">
      <SubNav grupo="oficina" />
      <TituloPagina>{o('title')}</TituloPagina>
      <div className="oficina-container">
        

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
                <strong>{item.fuerte}</strong> {item.texto}
              </li>
            ))}
          </ul>

          <h2 className="oficina-subtitle">{o('filosofiaTitulo')}</h2>
          <p className="oficina-quote">{o('filosofiaQuote')}</p>
        </div>

        <hr className="divider-line" />
        
        <div className="architects-grid">
          <div className="architect-item">
            <img src={arq1} alt="Arquitecto 1" className="architect-img" />
            <div className="architect-caption">
              <span>Arq. Aquino Pasotti</span>
            </div>
          </div>
          <div className="architect-item">
            <img src={arq2} alt="Arquitecto 2" className="architect-img" />
            <div className="architect-caption">
              <span>Arq. Daniel Aquino Pasotti</span>
            </div>
          </div>
          <div className="architect-item">
            <img src={arq3} alt="Arquitecto 3" className="architect-img" />
            <div className="architect-caption">
              <span>Ing. Aquino Pasotti</span>
            </div>
          </div>
        </div>

        <hr className="divider-line" />

      </div>
      <Footer />
    </div>
  );
}

export default Oficina;