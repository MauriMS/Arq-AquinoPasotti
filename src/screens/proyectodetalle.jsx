import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './proyectodetalle.css';
import { proyectos } from '../Data/proyectos.js';

function ProyectoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const proyecto = proyectos.find((p) => p.id === id);
  const [index, setIndex] = useState(0);

  if (!proyecto) {
    return (
      <div className="detalle-page">
        <div className="detalle-info">
          <button className="detalle-back" onClick={() => navigate('/proyectos')}>
            &larr; volver
          </button>
          <p>No se encontró el proyecto.</p>
        </div>
      </div>
    );
  }

  const total = proyecto.imagenes.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="detalle-page">
      <div className="detalle-carousel">
        <img
          src={proyecto.imagenes[index]}
          alt={`${proyecto.nombre} ${index + 1}`}
          className="detalle-carousel-img"
        />

        {total > 1 && (
          <>
            <button className="detalle-carousel-btn prev" onClick={prev} aria-label="Anterior">
              &#8249;
            </button>
            <button className="detalle-carousel-btn next" onClick={next} aria-label="Siguiente">
              &#8250;
            </button>

            <span className="detalle-carousel-counter">
              {index + 1} / {total}
            </span>

            <div className="detalle-thumbs">
              {proyecto.imagenes.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className={`detalle-thumb ${i === index ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="detalle-info">
        <button className="detalle-back" onClick={() => navigate('/proyectos')}>
          &larr; volver
        </button>

        <h1 className="detalle-titulo">{proyecto.nombre}</h1>

        <p className="detalle-field">
          <strong>Ubicación:</strong> {proyecto.ubicacion}
        </p>
        <p className="detalle-field">
          <strong>Proyecto y Dirección:</strong> {proyecto.proyectoYDireccion}
        </p>
        <p className="detalle-field">
          <strong>Colaboradores:</strong> {proyecto.colaboradores}
        </p>
        <p className="detalle-field">
          <strong>Superficie del terreno:</strong> {proyecto.superficieTerreno}
        </p>
        <p className="detalle-field">
          <strong>Superficie construida:</strong> {proyecto.superficieConstruida}
        </p>
        <p className="detalle-field">
          <strong>Año de construcción:</strong> {proyecto.anio}
        </p>
        <p className="detalle-field">
          <strong>Ejecución:</strong> {proyecto.ejecucion}
        </p>
        <p className="detalle-field">
          <strong>Paisajismo:</strong> {proyecto.paisajismo}
        </p>
        <p className="detalle-field">
          <strong>Fotos:</strong> {proyecto.fotos}
        </p>

        <h2 className="detalle-memoria-title">memoria</h2>
        <div className="detalle-memoria">
          <p>{proyecto.memoria}</p>
        </div>
      </div>
    </div>
  );
}

export default ProyectoDetalle;