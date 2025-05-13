import React, { createContext, useState, useEffect, useContext } from 'react';
import translationsData, { defaultLocale, locales } from '../locales';

// Création du contexte de langue
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // État pour stocker la langue actuelle
  const [locale, setLocale] = useState(defaultLocale);
  const [translations, setTranslations] = useState(translationsData[defaultLocale] || {});
  const [direction, setDirection] = useState('ltr');

  // Charger les traductions au démarrage et quand la langue change
  useEffect(() => {
    const selectedLocale = localStorage.getItem('locale') || defaultLocale;
    changeLanguage(selectedLocale);
  }, []);

  // Fonction pour changer de langue
  const changeLanguage = (newLocale) => {
    // Vérifier si la langue est disponible
    const localeObj = locales.find(l => l.code === newLocale);
    if (!localeObj) return;

    // Mettre à jour la langue et la direction du texte
    setLocale(newLocale);
    setDirection(localeObj.direction);
    
    // Utiliser les traductions préchargées
    if (translationsData[newLocale]) {
      setTranslations(translationsData[newLocale]);
      
      // Sauvegarder la préférence de langue dans localStorage
      localStorage.setItem('locale', newLocale);
      
      // Mettre à jour la direction du document pour les langues RTL comme l'arabe
      document.documentElement.dir = localeObj.direction;
      document.documentElement.lang = newLocale;
      
      // Ajouter une classe au body pour les styles spécifiques RTL
      if (localeObj.direction === 'rtl') {
        document.body.classList.add('rtl');
      } else {
        document.body.classList.remove('rtl');
      }
    } else {
      console.error(`Translations for ${newLocale} not found`);
    }
  };

  // Fonction pour traduire une clé
  const t = (key) => {
    if (!key || typeof key !== 'string') {
      console.warn('Invalid translation key:', key);
      return '';
    }

    // Diviser la clé en parties (par exemple "hero.title" devient ["hero", "title"])
    const keys = key.split('.');
    
    // Récupérer la valeur dans l'objet de traduction
    let value = translations;
    
    try {
      for (const k of keys) {
        if (value && value[k] !== undefined) {
          value = value[k];
        } else {
          console.warn(`Translation key not found: ${key}`);
          // Si la clé n'existe pas, retourner une chaîne vide ou la clé elle-même
          return key; // Ou retourner une chaîne vide si vous préférez: return '';
        }
      }
      
      return value;
    } catch (error) {
      console.error(`Error translating key: ${key}`, error);
      return key;
    }
  };

  // Valeur du contexte
  const contextValue = {
    locale,
    setLocale: changeLanguage,
    t,
    direction,
    locales
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte de langue
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageProvider;
