import React, { createContext, useState, useEffect, useContext } from 'react';

// Création du contexte de thème
const ThemeContext = createContext();

// Hook personnalisé pour utiliser le contexte de thème
export const useTheme = () => useContext(ThemeContext);

// Fournisseur de contexte de thème
export const ThemeProvider = ({ children }) => {
  // Vérifier si le thème est stocké dans localStorage ou utiliser le thème par défaut (sombre standard)
  const [theme, setTheme] = useState('dark');
  
  // Effet pour initialiser le thème depuis localStorage au chargement
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Par défaut, utiliser le thème sombre standard
      setTheme('dark');
    }
  }, []);
  
  // Effet pour appliquer le thème au document HTML
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    }
    // Sauvegarder le thème dans localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };
  
  // Valeurs exposées par le contexte
  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
