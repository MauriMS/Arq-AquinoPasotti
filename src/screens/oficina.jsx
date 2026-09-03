import React from 'react';
import './oficina.css';


import arq1 from '../assets/logo2.jpg';
import arq2 from '../assets/logo2.jpg';
import arq3 from '../assets/logo2.jpg';

function Oficina() {
  return (
    <div className="oficina-page">
      <div className="oficina-container">
        
        <h1 className="oficina-title">oficina</h1>

        <div className="oficina-content">
          <p>
            somos un estudio internacional de arquitectura, diseño, urbanismo e ingeniería civil con más de 60 años de trayectoria.
          </p>
          <p>
            nuestra historia se ha forjado brindando asistencia técnica estratégica a colegas, empresas constructoras y del sector inmobiliario, labor que consolidamos en paralelo con el asesoramiento técnico para el ministerio de gobierno de la provincia del chaco.
          </p>
          <p>
            los últimos 25 años de ejercicio profesional independiente, celebramos hoy la integración formal de la arquitectura y la ingeniería, ofreciendo soluciones integrales y multidisciplinarias.
          </p>

          <h2 className="oficina-subtitle">nuestra visión</h2>
          <ul className="oficina-list">
            <li>crear y modelar espacios para ser habitados por el hombre y su entorno.</li>
            <li>diseñar el universo.</li>
          </ul>

          <h2 className="oficina-subtitle">nuestra misión</h2>
          <ul className="oficina-list">
            <li>la meta es proveer amplios servicios de arquitectura e ingeniería para los ámbitos de la vivienda, el comercio, la industria, el urbanismo y actividades especiales;</li>
            <li>proveer servicios de asistencia técnica profesional a colegas, comercios, industrias y la vivienda;</li>
            <li>entendemos que la construcción es la materialización estética de una organización determinada, por lo tanto el proyecto debe basarse en condiciones de escalabilidad, flexibilidad, ecología e integración de nuevas tecnologías;</li>
            <li>crear con calidad, equidad e inclusión los espacios, en sus formas y en sus detalles. cuidando el medioambiente e incorporando tecnología innovadora;</li>
            <li>concentrarnos en pocos elementos a fin de obtener una síntesis constructiva y eliminar así futuros factores de desperfectos y simplificar el mantenimiento;</li>
            <li>“tratamos de dar respuestas simples a necesidades complejas” arq. mario roberto álvarez.</li>
          </ul>

          <h2 className="oficina-subtitle">nuestra labor se fundamenta en los siguientes pilares estratégicos</h2>
          <ul className="oficina-list">
            <li><strong>excelencia multidisciplinaria:</strong> Proveer servicios integrales de arquitectura e ingeniería con altos estándares de calidad en los sectores residencial, comercial, industrial y urbanístico.</li>
            <li><strong>soporte técnico especializado:</strong> Brindar asistencia profesional estratégica a colegas, empresas e instituciones, compartiendo nuestra sólida trayectoria técnica.</li>
            <li><strong>innovación y sostenibilidad:</strong> Concebir la construcción como la materialización de sistemas organizados, priorizando la escalabilidad, la flexibilidad funcional y la integración de tecnologías de vanguardia bajo criterios de respeto ambiental.</li>
            <li><strong>compromiso social y detalle:</strong> Diseñar con un enfoque de equidad, inclusión y calidad, garantizando que cada detalle constructivo aporte valor al tejido social y al entorno.</li>
            <li><strong>síntesis constructiva:</strong> Priorizar la eficiencia mediante la reducción de elementos innecesarios, optimizando la ejecución técnica para minimizar desperfectos y simplificar el mantenimiento a largo plazo.</li>
          </ul>

          <h2 className="oficina-subtitle">nuestra filosofía de trabajo</h2>
          <p className="oficina-quote">
            “tratamos de dar respuestas simples a necesidades complejas” — arq. mario roberto álvarez.
          </p>
        </div>

        
        <hr className="divider-line" />
        
        <div className="architects-grid">
          <img src={arq1} alt="Arquitecto 1" className="architect-img" />
          <img src={arq2} alt="Arquitecto 2" className="architect-img" />
          <img src={arq3} alt="Arquitecto 3" className="architect-img" />
        </div>

        <hr className="divider-line" />

      </div>
      <footer className="oficina_footer">
        <span className="footer-span">©2026 aquino pasotti</span>
      </footer>
    </div>
  );
}

export default Oficina;