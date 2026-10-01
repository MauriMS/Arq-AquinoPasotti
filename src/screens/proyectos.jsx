import { Link } from 'react-router-dom';
import './proyectos.css';
import { proyectos } from '../Data/proyectos.js';
import { useLanguage } from '../Traduccion/languagecontext.jsx';

function Proyectos() {
  const { t, field } = useLanguage();

  return (
    <div className="proyectos-page">
      <div className="proyectos-container">
        <h1 className="proyectos-title">{t('proyectos.title')}</h1>

        <div className="proyectos-grid">
          {proyectos.map((p, i) => (
            <Link
              to={`/proyectos/${p.id}`}
              className="proyecto-card"
              key={p.id}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <img src={p.cover} alt={field(p, 'nombre')} className="proyecto-cover" />
              <div className="proyecto-overlay">
                <span>{field(p, 'nombre')}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer className="footer">
        <span>{t('footer')}</span>
      </footer>
    </div>
  );
}

export default Proyectos;