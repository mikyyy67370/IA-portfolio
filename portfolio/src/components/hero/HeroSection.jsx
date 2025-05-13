import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import gsap from 'gsap';
import { useTheme } from '../../context/ThemeContext';
import { optimizedAnimationProps, optimizedVariants, optimizedInfiniteAnimations } from '../../utils/performance-optimizations';

const HeroSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const { t } = useLanguage(); // Hook pour les traductions
  
  // Utilisons uniquement Framer Motion pour les animations pour éviter les conflits
  // et simplifier la gestion des animations
  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
  };
  
  const titleAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  
  const subtitleAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, delay: 0.3 } },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center py-16 sm:py-20 md:py-0">
      {/* Effet d'arrière-plan animé */}
      <div className={`absolute inset-0 z-0 bg-gradient-to-br ${theme === 'dark' ? 'from-dark-blue to-tech-blue' : 'from-blue-100 to-tech-blue/50'} animate-gradient-x`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-neon-green/30 blur-xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-purple-500/20 blur-xl animate-float" style={{ animationDelay: '-2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-blue-500/20 blur-xl animate-float" style={{ animationDelay: '-4s' }}></div>
        </div>
      </div>
      
      {/* Overlay avec gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-deep-black/90 to-dark-blue/70' : 'from-bg-primary/70 to-blue-200/50'} z-10`}></div>
      
      {/* Motif de réseau neuronal */}
      <div className="absolute inset-0 neural-network-bg z-20 opacity-20"></div>
      
      {/* Motif de circuit */}
      <div className="absolute inset-0 circuit-bg z-20 opacity-15"></div>
      
      {/* Flux de données */}
      <div className="absolute inset-0 data-flow-bg z-20 opacity-20"></div>
      
      {/* Contenu principal */}
      <motion.div 
        ref={containerRef} 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full"
        variants={containerAnimation}
        initial="initial"
        animate="animate"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12">
          {/* Texte principal */}
          <motion.div
            className="w-full lg:w-3/5 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            {...optimizedAnimationProps} // Applique les optimisations d'accélération matérielle
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-3 sm:mb-4 inline-block"
            >
              <span className="bg-gradient-to-r from-neon-green/20 to-tech-blue/20 px-3 sm:px-4 py-1 rounded-full text-white/80 text-xs sm:text-sm font-medium tracking-wider">{t('hero.title')}</span>
            </motion.div>
            
            <motion.h1 
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight"
              variants={titleAnimation}
              initial="initial"
              animate="animate"
            >
              <span className="text-primary">{t('hero.heading1')} </span>
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-tech-blue">{t('hero.heading2')}</span>
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-neon-green to-tech-blue opacity-75"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
              <span className="text-white block mt-1 sm:mt-2">{t('hero.heading3')}</span>
            </motion.h1>
            
            <motion.p 
              ref={subtitleRef}
              className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-gray-400 leading-relaxed max-w-xl"
              variants={subtitleAnimation}
              initial="initial"
              animate="animate"
            >
              {t('hero.description')}
            </motion.p>
            
            {/* Statistiques */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 xs:gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 mt-8 sm:mt-10 md:mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">{t('hero.stats.years')}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{t('hero.stats.yearsLabel')}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-tech-blue/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-tech-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">{t('hero.stats.projects')}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{t('hero.stats.projectsLabel')}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">{t('hero.stats.satisfaction')}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{t('hero.stats.satisfactionLabel')}</div>
                </div>
              </div>
            </motion.div>
            
            <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-3 xs:gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(57, 255, 20, 0.25)" }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-center py-2.5 xs:py-3 sm:py-4 px-5 xs:px-6 sm:px-8 rounded-md sm:rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 text-xs xs:text-sm sm:text-base"
              >
                <span>{t('hero.cta')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(30, 58, 138, 0.25)" }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary text-center py-2.5 xs:py-3 sm:py-4 px-5 xs:px-6 sm:px-8 rounded-md sm:rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 text-xs xs:text-sm sm:text-base"
              >
                <span>{t('contact.subtitle')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </motion.a>
            </div>
            
            {/* Élément visuel interactif - Version mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full mt-8 sm:mt-10 flex lg:hidden items-center justify-center"
            >
              <div className="relative w-full max-w-[280px] xs:max-w-xs">
                {/* Carte principale simplifiée pour mobile */}
                <motion.div 
                  className="w-full h-40 xs:h-48 modern-card rounded-lg xs:rounded-xl overflow-hidden relative animated-border"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Fond simplifié */}
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="w-36 xs:w-48 h-36 xs:h-48 rounded-full bg-tech-blue/20 blur-xl absolute animate-pulse-slow" style={{ animationDuration: '6s' }}></div>
                    <div className="w-24 xs:w-32 h-24 xs:h-32 rounded-full bg-neon-green/20 blur-xl absolute animate-pulse-slow" style={{ animationDuration: '8s', animationDelay: '-2s' }}></div>
                  </div>
                  
                  {/* Contenu central */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-3 xs:p-4 text-center">
                    <motion.div 
                      className="text-3xl xs:text-4xl font-bold mb-1 xs:mb-2 animated-icon"
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-tech-blue">AI</span>
                    </motion.div>
                    
                    <div className="space-y-1 xs:space-y-2">
                      <motion.div 
                        className="text-xs xs:text-sm text-white font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      >
                        Solutions Intelligentes
                      </motion.div>
                      
                      <motion.div 
                        className="flex flex-wrap justify-center gap-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                      >
                        <span className="px-1.5 xs:px-2 py-0.5 bg-tech-blue/20 rounded text-xs text-tech-blue">ML</span>
                        <span className="px-1.5 xs:px-2 py-0.5 bg-neon-green/20 rounded text-xs text-neon-green">Bots</span>
                        <span className="px-1.5 xs:px-2 py-0.5 bg-purple-500/20 rounded text-xs text-purple-500">Auto</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Éléments décoratifs simplifiés */}
                <div className="absolute -top-2 -left-2 xs:-top-3 xs:-left-3 w-6 h-6 xs:w-8 xs:h-8 border-t-2 border-l-2 border-neon-green animate-pulse-slow"></div>
                <div className="absolute -bottom-2 -right-2 xs:-bottom-3 xs:-right-3 w-6 h-6 xs:w-8 xs:h-8 border-b-2 border-r-2 border-tech-blue animate-pulse-slow" style={{ animationDelay: '-1.5s' }}></div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Élément visuel interactif - Version desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/5 hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Carte principale */}
              <motion.div 
                className="w-full h-96 modern-card rounded-xl overflow-hidden relative animated-border"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(57, 255, 20, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Effet de particules */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-neon-green animate-ping" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
                  <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-tech-blue animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                  <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-purple-500 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-neon-green animate-ping" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}></div>
                  <div className="absolute top-1/2 right-1/2 w-2 h-2 rounded-full bg-tech-blue animate-ping" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Cercles lumineux */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-64 h-64 rounded-full bg-tech-blue/20 blur-xl absolute animate-pulse-slow" style={{ animationDuration: '6s' }}></div>
                  <div className="w-48 h-48 rounded-full bg-neon-green/20 blur-xl absolute animate-pulse-slow" style={{ animationDuration: '8s', animationDelay: '-2s' }}></div>
                  <div className="w-32 h-32 rounded-full bg-purple-500/20 blur-xl absolute animate-pulse-slow" style={{ animationDuration: '10s', animationDelay: '-4s' }}></div>
                </div>
                
                {/* Grille de réseau neuronal */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 z-0 opacity-30">
                  {Array(64).fill(0).map((_, i) => (
                    <div key={i} className="border border-gray-700 flex items-center justify-center">
                      {Math.random() > 0.8 && (
                        <div className="w-1 h-1 rounded-full bg-neon-green animate-pulse"></div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Contenu central */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                  <motion.div 
                    className="text-6xl font-bold mb-6 animated-icon"
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-tech-blue">AI</span>
                  </motion.div>
                  
                  <div className="space-y-4">
                    <motion.div 
                      className="text-xl text-white font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      Solutions Intelligentes
                    </motion.div>
                    
                    <motion.div 
                      className="flex flex-wrap justify-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      <span className="px-2 py-1 bg-tech-blue/20 rounded-md text-xs text-tech-blue">Machine Learning</span>
                      <span className="px-2 py-1 bg-neon-green/20 rounded-md text-xs text-neon-green">Bots</span>
                      <span className="px-2 py-1 bg-purple-500/20 rounded-md text-xs text-purple-500">Automation</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Éléments décoratifs */}
              <div className="absolute -top-5 -left-5 w-16 h-16 border-t-2 border-l-2 border-neon-green animate-pulse-slow"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 border-b-2 border-r-2 border-tech-blue animate-pulse-slow" style={{ animationDelay: '-1.5s' }}></div>
              
              {/* Badges flottants */}
              <motion.div 
                className="absolute -right-4 top-1/4 bg-dark-blue/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-tech-blue/50"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
                  <span className="text-sm font-medium">Deep Learning</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -left-4 bottom-1/4 bg-dark-blue/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-neon-green/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-tech-blue animate-pulse"></div>
                  <span className="text-sm font-medium">Algorithmes</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Indicateur de défilement supprimé */}
      </motion.div>
      
      {/* Éléments décoratifs flottants */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-neon-green/20 blur-xl floating"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-tech-blue/20 blur-xl floating" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-purple-500/20 blur-xl floating" style={{ animationDelay: '-4s' }}></div>
      
      {/* Particules IA */}
      <div className="ai-particles">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="ai-particle" 
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.5,
              background: i % 3 === 0 ? 'var(--neon-green)' : i % 3 === 1 ? 'var(--tech-blue)' : 'var(--purple)'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
