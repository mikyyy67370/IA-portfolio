import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSelector = () => {
  const { locale, setLocale, locales, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Trouver la langue actuelle
  const currentLanguage = locales.find(l => l.code === locale);

  // Fonction pour changer de langue
  const handleLanguageChange = (code) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-full bg-dark-blue/50 border border-gray-700/50 hover:bg-dark-blue/80 transition-all duration-300"
        aria-label="Select language"
      >
        <span className="text-sm font-medium text-white">{currentLanguage?.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-40 rounded-lg bg-dark-blue/90 backdrop-blur-md border border-gray-700/50 shadow-xl overflow-hidden"
          >
            <div className="py-1">
              {locales.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    locale === language.code
                      ? 'bg-tech-blue/20 text-white'
                      : 'text-gray-300 hover:bg-gray-800/50'
                  } transition-colors duration-200`}
                >
                  {language.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
