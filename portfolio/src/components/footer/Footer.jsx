import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  // Année actuelle pour le copyright
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage(); // Hook pour les traductions
  
  // Liens de navigation avec traductions
  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.contact'), href: '#contact' }
  ];
  
  // Réseaux sociaux
  const socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin.svg', url: '#' },
    { name: 'GitHub', icon: 'github.svg', url: '#' },
    { name: 'Twitter', icon: 'twitter.svg', url: '#' }
  ];

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-deep-black">
      {/* Élément décoratif supérieur */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
      
      {/* Éléments décoratifs */}
      <div className="absolute -top-40 left-20 w-80 h-80 bg-tech-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 right-20 w-80 h-80 bg-neon-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <Link href="/">
              <a className="inline-block mb-6 relative group">
                <div className="flex items-center relative z-10">
                  <div className="relative">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Mikael</span>
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neon-green to-tech-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                  <div className="relative ml-0.5">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-tech-blue">AI</span>
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-tech-blue/20 to-neon-green/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
              </a>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="w-10 h-10 rounded-full bg-space-gray flex items-center justify-center text-gray-300 hover:bg-tech-blue hover:text-white transition-colors duration-300"
                >
                  {/* Ici, vous pourriez ajouter de vraies icônes SVG */}
                  <span>{social.name.charAt(0)}</span>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t('nav.home')}</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="text-gray-400 hover:text-neon-green transition-colors duration-300 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-green/50 mr-2"></div>
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t('contact.title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-neon-green mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:contact@example.com" className="text-gray-400 hover:text-neon-green transition-colors duration-300">
                  contact@example.com
                </a>
              </li>
              <li className="flex items-start">
                <div className="text-neon-green mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-400">
                  Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Ligne de séparation */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} {t('footer.copyright')}
          </p>
          <div className="flex space-x-6">
            <Link href="#">
              <a className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">
                {t('footer.privacy')}
              </a>
            </Link>
            <Link href="#">
              <a className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300">
                {t('footer.legal')}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
