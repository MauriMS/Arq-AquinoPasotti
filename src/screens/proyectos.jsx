import { Link } from 'react-router-dom';
import './proyectos.css';
import { proyectos } from '../Data/proyectos.js';

function Proyectos() {
  return (
    <div className="proyectos-page">
      <div className="proyectos-container">
        <h1 className="proyectos-title">proyectos</h1>

        <div className="proyectos-grid">
          {proyectos.map((p) => (
            <Link to={`/proyectos/${p.id}`} className="proyecto-card" key={p.id}>
              <img src={p.cover} alt={p.nombre} className="proyecto-cover" />
              <div className="proyecto-overlay">
                <span>{p.nombre}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Proyectos;