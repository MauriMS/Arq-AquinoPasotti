import { useParams, useNavigate, Link } from 'react-router-dom';
import './novedadDetalle.css';
import { novedades } from '../Data/novedades.js';

function formatearFecha(fechaISO) {
  const fecha = new Date(fechaISO + 'T00:00:00');
  return fecha.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function NovedadDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const novedad = novedades.find((n) => n.id === id);

  if (!novedad) {
    return (
      <div className="novedad-detalle-page">
        <div className="novedad-detalle-container">
          <button className="novedad-back" onClick={() => navigate('/novedades')}>
            &larr; volver
          </button>
          <p>No se encontró la novedad.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="novedad-detalle-page">
      <div className="novedad-detalle-container">
        <button className="novedad-back" onClick={() => navigate('/novedades')}>
          &larr; volver
        </button>

        <span className="novedad-detalle-fecha">{formatearFecha(novedad.fecha)}</span>
        <h1 className="novedad-detalle-titulo">{novedad.titulo}</h1>

        <div className="novedad-detalle-img-wrap">
          <img src={novedad.imagen} alt={novedad.titulo} className="novedad-detalle-img" />
        </div>

        <div className="novedad-detalle-contenido">
          {novedad.contenido.split('\n').map((parrafo, i) => (
            <p key={i}>{parrafo}</p>
          ))}
        </div>

        <Link to="/novedades" className="novedad-detalle-volver-link">
          &larr; ver todas las novedades
        </Link>
      </div>
    </div>
  );
}

export default NovedadDetalle;