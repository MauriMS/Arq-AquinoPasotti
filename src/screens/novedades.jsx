import { Link } from 'react-router-dom';
import './novedades.css';
import { novedades } from '../Data/novedades';
import { useLanguage } from '../Traduccion/languagecontext.jsx';

function Novedades() {
  const { t, field, lang } = useLanguage();

  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO + 'T00:00:00');
    return fecha.toLocaleDateString(t('novedades.localeFecha'), {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="novedades-page">
      <div className="novedades-container">
        <h1 className="novedades-title">{t('novedades.title')}</h1>

        <div className="novedades-grid">
          {novedades.map((n) => (
            <div className="novedad-card" key={n.id}>
              <div className="novedad-texto">
                <span className="novedad-fecha">{formatearFecha(n.fecha)}</span>
                <h2 className="novedad-titulo">{field(n, 'titulo')}</h2>
                <p className="novedad-resumen">{field(n, 'resumen')}</p>
              </div>
              <div className="novedad-img-wrap">
                <img src={n.imagen} alt={field(n, 'titulo')} className="novedad-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <span>{t('footer')}</span>
      </footer>
    </div>
  );
}

export default Novedades;