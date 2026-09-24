import { Link } from 'react-router-dom';
import './novedades.css';
import { novedades } from '../Data/novedades';

function formatearFecha(fechaISO) {
  const fecha = new Date(fechaISO + 'T00:00:00');
  return fecha.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function Novedades() {
  return (
    <div className="novedades-page">
      <div className="novedades-container">
        <h1 className="novedades-title">novedades</h1>

        <div className="novedades-grid">
          {novedades.map((n) => (
            <div  className="novedad-card" key={n.id}>
              <div className="novedad-texto">
                <span className="novedad-fecha">{formatearFecha(n.fecha)}</span>
                <h2 className="novedad-titulo">{n.titulo}</h2>
                <p className="novedad-resumen">{n.resumen}</p>
                
              </div>
              <div className="novedad-img-wrap">
                <img src={n.imagen} alt={n.titulo} className="novedad-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <span>©2026 aquino pasotti</span>
      </footer>
    </div>
  );
}

export default Novedades;