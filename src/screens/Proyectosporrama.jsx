import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Proyectosporrama.css';
import { proyectos } from '../Data/proyectos.js';

// Config por rama: título de la página y categorías de filtro.
// Para sumar/cambiar categorías, tocá solo esto.
const RAMAS = {
  arquitectura: {
    titulo: 'proyectos de arquitectura :',
    filtros: ['viviendas', 'comercial', 'urbanismo', 'concursos'],
  },
  ingenieria: {
    titulo: 'proyectos de ingeniería :',
    // TODO: sumar más categorías si hace falta (ej: industrial, infraestructura)
    filtros: ['edificios', 'casas', 'viviendas'],
  },
};

function ProyectosPorRama({ rama }) {
  const config = RAMAS[rama];
  const [filtro, setFiltro] = useState('todos');
  const navigate = useNavigate();

  const proyectosFiltrados = proyectos.filter((p) => {
    if (p.rama !== rama) return false;
    if (filtro === 'todos') return true;
    return p.tipo === filtro;
  });

  return (
    <div className="rama-page">
      <div className="rama-container">
        <button className="rama-back" onClick={() => navigate('/proyectos')}>
          &larr; volver
        </button>

        <div className="rama-header">
          <h1 className="rama-title">{config.titulo}</h1>

          <div className="rama-filtros">
            <button
              className={filtro === 'todos' ? 'active' : ''}
              onClick={() => setFiltro('todos')}
            >
              todos
            </button>
            {config.filtros.map((f) => (
              <button
                key={f}
                className={filtro === f ? 'active' : ''}
                onClick={() => setFiltro(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {proyectosFiltrados.length > 0 ? (
          <div className="rama-grid">
            {proyectosFiltrados.map((p) => (
              <Link to={`/proyectos/${p.id}`} className="rama-card" key={p.id}>
                <img src={p.cover} alt={p.nombre} className="rama-cover" />
                <div className="rama-overlay">
                  <span>{p.nombre}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="rama-vacio">
            Todavía no hay proyectos cargados en esta categoría.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProyectosPorRama;