import React from 'react';
import './off2.css';


import arq1 from '../../assets/logo2.jpg';
import arq2 from '../../assets/logo2.jpg';
import arq3 from '../../assets/logo2.jpg';

function Off2() {
  return (
    <div className="off2-page">
      <div className="off2-container">
        
        <h1 className="off2-title">oficina</h1>


        
        <hr className="off2-divider-line" />
        
        <div className="off2-architects-grid">
          <div className="off2-architect-item">
            <div className="off2-architect-caption">
              <span>Arq. Nombre Apellido</span>
            </div>
            <div className="off2-architect-arrow"></div>
            <div className="off2-architect-img-wrap">
              <img src={arq1} alt="Arquitecto 1" className="off2-architect-img" />
            </div>
          </div>
          <div className="off2-architect-item">
            <div className="off2-architect-caption">
              <span>Arq. Nombre Apellido</span>
            </div>
            <div className="off2-architect-arrow"></div>
            <div className="off2-architect-img-wrap">
              <img src={arq2} alt="Arquitecto 2" className="off2-architect-img" />
            </div>
          </div>
          <div className="off2-architect-item">
            <div className="off2-architect-caption">
              <span>Arq. Nombre Apellido</span>
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
        <span className="off2-footer-span">©2026 aquino pasotti</span>
      </footer>
    </div>
  );
}

export default Off2;