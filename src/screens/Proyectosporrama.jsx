import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Proyectosporrama.css';
import { proyectos } from '../Data/proyectos.js';
import { useLanguage } from '../Traduccion/languagecontext.jsx';

function ProyectosPorRama({ rama }) {
  const { t, field } = useLanguage();
  const [filtro, setFiltro] = useState('todos');
  const [ramaActual, setRamaActual] = useState(rama);
  const navigate = useNavigate();

  if (rama !== ramaActual) {
    setRamaActual(rama);
    setFiltro('todos');
  }

  const filtroActivo = rama !== ramaActual ? 'todos' : filtro;

  // "value" queda fijo en español (coincide con el campo "tipo" de
  // Data/proyectos.js); "label" sí cambia según el idioma.
  const filtros = t(`proyectosPorRama.filtros.${rama}`);
  const titulo = t(
    rama === 'arquitectura'
      ? 'proyectosPorRama.tituloArquitectura'
      : 'proyectosPorRama.tituloIngenieria'
  );

  const proyectosFiltrados = proyectos.filter((p) => {
    if (p.rama !== rama) return false;
    if (filtroActivo === 'todos') return true;
    return p.tipo === filtroActivo;
  });

  return (
    <div className="rama-page">
      <div className="rama-container">
        <button className="rama-back" onClick={() => navigate('/proyectos')}>
          &larr; {t('proyectosPorRama.volver')}
        </button>

        <div className="rama-header">
          <h1 className="rama-title">{titulo}</h1>

          <div className="rama-filtros">
            <button
              className={filtroActivo === 'todos' ? 'active' : ''}
              onClick={() => setFiltro('todos')}
            >
              {t('proyectosPorRama.todos')}
            </button>
            {filtros.map((f) => (
              <button
                key={f.value}
                className={filtroActivo === f.value ? 'active' : ''}
                onClick={() => setFiltro(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {proyectosFiltrados.length > 0 ? (
          <div className="rama-grid">
            {proyectosFiltrados.map((p, i) => (
              <Link
                to={`/proyectos/${p.id}`}
                className="rama-card"
                key={`${filtroActivo}-${p.id}`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <img src={p.cover} alt={field(p, 'nombre')} className="rama-cover" />
                <div className="rama-overlay">
                  <span>{field(p, 'nombre')}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="rama-vacio">{t('proyectosPorRama.vacio')}</p>
        )}
      </div>
    </div>
  );
}

export default ProyectosPorRama;