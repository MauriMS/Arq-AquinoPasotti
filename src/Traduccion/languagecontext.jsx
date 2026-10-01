import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('idioma') === 'en' ? 'en' : 'es';
    } catch {
      return 'es';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('idioma', lang);
    } catch {
      // si localStorage no está disponible, no pasa nada grave
    }
  }, [lang]);

  // t('seccion.clave') -> busca ese texto en el idioma actual; si no existe,
  // cae al español en vez de romper, y si tampoco existe devuelve la clave.
  const t = (path) => {
    const keys = path.split('.');

    let value = translations[lang];
    for (const k of keys) value = value?.[k];
    if (value !== undefined) return value;

    let fallback = translations.es;
    for (const k of keys) fallback = fallback?.[k];
    return fallback !== undefined ? fallback : path;
  };

  // field(proyecto, 'nombre') -> si el idioma es inglés y existe `nombre_en`
  // en el objeto, lo devuelve; si no, devuelve el campo en español de siempre.
  // Así, a medida que vayas sumando campos "_en" en Data/proyectos.js o
  // Data/novedades.js, se van traduciendo solos sin tocar el código.
  const field = (obj, campo) => {
    if (!obj) return undefined;
    if (lang === 'en' && obj[`${campo}_en`] != null && obj[`${campo}_en`] !== '') {
      return obj[`${campo}_en`];
    }
    return obj[campo];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, field }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage() tiene que usarse dentro de <LanguageProvider>');
  }
  return ctx;
}