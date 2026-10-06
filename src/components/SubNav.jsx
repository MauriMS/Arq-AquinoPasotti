import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../Traduccion/languagecontext.jsx';
import './SubNav.css';

// Cada item guarda una CLAVE de traducción (labelKey), no el texto fijo,
// así cambia solo al cambiar de idioma.
const GRUPOS = {
  proyectos: [
    { labelKey: 'subnav.arquitectura', to: '/proyectos/arquitectura' },
    { labelKey: 'subnav.ingenieria', to: '/proyectos/ingenieria' },
  ],
  oficina: [
    { labelKey: 'subnav.oficina', to: '/oficina' },
    { labelKey: 'subnav.servicios', to: '/servicios' },
  ],
  legales: [
    { labelKey: 'subnav.legales', to: './terminos-legales.pdf', esPdf: true },
  ],
};

// Uso: <SubNav grupo="proyectos" />  (primer hijo del div de la página)
function SubNav({ grupo }) {
  const location = useLocation();
  const { t } = useLanguage();
  const items = GRUPOS[grupo] || [];

  return (
    <div className="subnav-botones">
      {items.map((item) =>
        item.esPdf ? (
          <a
            key={item.to}
            href={item.to}
            target="_blank"
            rel="noopener noreferrer"
            className="subnav-btn"
          >
            {t(item.labelKey)}
          </a>
        ) : (
          <Link
            key={item.to}
            to={item.to}
            className={`subnav-btn ${location.pathname === item.to ? 'active' : ''}`}
          >
            {t(item.labelKey)}
          </Link>
        )
      )}
    </div>
  );
}

export default SubNav;
