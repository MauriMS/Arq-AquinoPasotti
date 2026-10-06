import { Link } from 'react-router-dom';
import './proyectos.css';
import { proyectos } from '../Data/proyectos.js';
import { useLanguage } from '../Traduccion/languagecontext.jsx';
import Footer from '../components/Footer.jsx';
import TituloPagina from '../components/TituloPagina.jsx';
import SubNav from '../components/SubNav.jsx';

function Proyectos() {
  const { t, field } = useLanguage();

  return (
    <div className="proyectos-page page-con-footer">
      <SubNav grupo="proyectos" />
      <TituloPagina>{t('proyectos.title')}</TituloPagina>
      <div className="proyectos-container">

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
      <Footer />
    </div>
  );
}

export default Proyectos;