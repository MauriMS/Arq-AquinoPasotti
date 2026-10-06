import { useLanguage } from '../Traduccion/languagecontext.jsx';
import './Footer.css';

// Uso: en cada página, la raíz lleva la clase "page-con-footer"
// y <Footer /> va como último hijo.
function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <span>{t('footer')}</span>
    </footer>
  );
}

export default Footer;
