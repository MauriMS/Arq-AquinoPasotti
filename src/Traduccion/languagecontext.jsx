import { createContext, useContext, useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
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

  // Cambio de idioma con crossfade suave (View Transitions API).
  // Si el navegador no la soporta, o la persona pidió reducir movimiento,
  // el cambio es instantáneo como antes.
  const setLang = (nuevo) => {
    if (nuevo === lang) return;

    const sinAnimacion =
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (sinAnimacion) {
      setLangState(nuevo);
      return;
    }

    document.startViewTransition(() => {
      // flushSync obliga a React a actualizar el DOM de inmediato,
      // que es lo que el navegador necesita para capturar el estado nuevo
      flushSync(() => setLangState(nuevo));
    });
  };

  const t = (path) => {
    const keys = path.split('.');

    let value = translations[lang];
    for (const k of keys) value = value?.[k];
    if (value !== undefined) return value;

    let fallback = translations.es;
    for (const k of keys) fallback = fallback?.[k];
    return fallback !== undefined ? fallback : path;
  };

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