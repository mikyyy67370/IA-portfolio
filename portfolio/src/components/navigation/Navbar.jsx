import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSelector from '../ui/LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');  // Pour suivre la section active
  const { t } = useLanguage(); // Hook pour les traductions

  // Gestion du défilement pour changer l'apparence de la navbar et détecter la section active
  useEffect(() => {
    const handleScroll = () => {
      // Changement d'apparence de la navbar
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Détection de la section active
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Exécuter une fois au chargement pour définir la section initiale
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Liens de navigation avec traductions
  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 glass-effect' : 'py-3 sm:py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/">
              <a className="relative group py-1">
                <div className="flex items-center relative z-10">
                  <div className="relative">
                    <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Mikael</span>
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neon-green to-tech-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                  <div className="relative ml-0.5">
                    <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-tech-blue">AI</span>
                    <div className="absolute -top-1 -right-1 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-tech-blue/20 to-neon-green/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
              </a>
            </Link>
          </motion.div>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center">
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4 lg:space-x-8 mr-4"
            >
            {navLinks.map((link, index) => {
              // Vérifier si c'est la section active (en supprimant le # du href)
              const isActive = activeSection === link.href.replace('#', '') || 
                               (activeSection === '' && link.href === '#');
              
              return (
                <motion.li
                  key={index}
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <Link href={link.href}>
                    <a className={`transition-colors duration-300 text-sm lg:text-base py-1 ${isActive ? 'text-neon-green font-medium' : 'text-gray-300 hover:text-neon-green'}`}>
                      {link.name}
                      {isActive ? (
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-neon-green"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      ) : (
                        <motion.span
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green"
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </a>
                  </Link>
                </motion.li>
              );
            })}
            </motion.ul>
            
            {/* Sélecteur de langue */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mr-3"
            >
              <LanguageSelector />
            </motion.div>
            
            {/* Sélecteur de thème */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Bouton de menu mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-9 h-9 space-y-1.5 focus:outline-none rounded-md hover:bg-white/5 active:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-neon-green rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-neon-green rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-neon-green rounded-full"
              />
            </button>
          </motion.div>
        </nav>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect border-t border-gray-800/30"
          >
            <div className="container mx-auto px-4 sm:px-6 py-3">
              <div className="flex flex-col space-y-4">
                <ul className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => {
                  // Vérifier si c'est la section active (en supprimant le # du href)
                  const isActive = activeSection === link.href.replace('#', '') || 
                                 (activeSection === '' && link.href === '#');
                  
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link href={link.href}>
                        <a 
                          className={`transition-colors duration-300 block py-2 px-2 rounded-md ${isActive 
                            ? 'text-neon-green bg-white/5' 
                            : 'text-gray-300 hover:text-neon-green hover:bg-white/5 active:bg-white/10'}`}
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center">
                            <div className={`w-1 h-4 rounded-full mr-2 ${isActive 
                              ? 'bg-neon-green' 
                              : 'bg-neon-green/30'}`}></div>
                            {link.name}
                          </div>
                        </a>
                      </Link>
                    </motion.li>
                  );
                })}
                </ul>
                
                {/* Sélecteurs de langue et de thème mobile */}
                <div className="pt-2 border-t border-gray-800/30 mt-2 flex justify-center flex-wrap gap-4">
                  <div className="py-2 px-4">
                    <LanguageSelector />
                  </div>
                  <div className="py-2 px-4">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
