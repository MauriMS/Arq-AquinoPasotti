import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './proyectodetalle.css';
import { proyectos } from '../Data/proyectos';

function ProyectoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const proyecto = proyectos.find((p) => p.id === id);
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const thumbRefs = useRef([]);
  const lightboxThumbRefs = useRef([]);

  useEffect(() => {
    thumbRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
    lightboxThumbRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [index]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % total);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + total) % total);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
    
  }, [lightboxOpen]);

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
          className="detalle-carousel-img detalle-carousel-img-clickable"
          onClick={() => setLightboxOpen(true)}
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
                  ref={(el) => (thumbRefs.current[i] = el)}
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
          <strong>ubicación:</strong> {proyecto.ubicacion}
        </p>
        <p className="detalle-field">
          <strong>superficie lote:</strong> {proyecto.superficieTerreno}
        </p>
        <p className="detalle-field">
          <strong>superficie:</strong> {proyecto.superficieConstruida}
        </p>
        
        <p className="detalle-field">
          <strong>año:</strong> {proyecto.anio}
        </p>

        <p className="detalle-field">
          <strong>cliente:</strong> {proyecto.cliente}
        </p>

        <h2 className="detalle-memoria-title">memoria</h2>
        <div className="detalle-memoria">
          <p>{proyecto.memoria}</p>
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Cerrar"
          >
            &times;
          </button>

          <span className="lightbox-counter">
            {index + 1} / {total}
          </span>

          <img
            src={proyecto.imagenes[index]}
            alt={`${proyecto.nombre} ${index + 1}`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          {total > 1 && (
            <>
              <button
                className="lightbox-btn prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Anterior"
              >
                &#8249;
              </button>
              <button
                className="lightbox-btn next"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Siguiente"
              >
                &#8250;
              </button>

              <div className="lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
                {proyecto.imagenes.map((img, i) => (
                  <img
                    key={i}
                    ref={(el) => (lightboxThumbRefs.current[i] = el)}
                    src={img}
                    alt=""
                    className={`lightbox-thumb ${i === index ? 'active' : ''}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ProyectoDetalle;