import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Proyectosporrama.css';
import { proyectos } from '../Data/proyectos.js';
import { useLanguage } from '../Traduccion/languagecontext.jsx';
import Footer from '../components/Footer.jsx';
import TituloPagina from '../components/TituloPagina.jsx';
import SubNav from '../components/SubNav.jsx';

function ProyectosPorRama({ rama }) {
  const { t, field } = useLanguage();
  const [filtro, setFiltro] = useState('todos');
  const location = useLocation();

  // Vuelve a "todos" cuando cambia la rama o cuando se vuelve a hacer click
  // en la misma rama (el router genera un location.key nuevo en cada click).
  useEffect(() => {
    setFiltro('todos');
  }, [rama, location.key]);

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
    if (filtro === 'todos') return true;
    return p.tipo === filtro;
  });

  return (
    <div className="rama-page page-con-footer">
      <SubNav grupo="proyectos" />
      <TituloPagina className="rama-title">{titulo}</TituloPagina>
      <div className="rama-container">

        <div className="rama-header">
          <div className="rama-filtros">
            {filtros.map((f) => (
              <button
                key={f.value}
                className={filtro === f.value ? 'active' : ''}
                onClick={() => setFiltro(filtro === f.value ? 'todos' : f.value)}
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
                key={`${filtro}-${p.id}`}
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
      <Footer />
    </div>
  );
}

export default ProyectosPorRama;