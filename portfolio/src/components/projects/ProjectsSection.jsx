import React, { useState, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Link from 'next/link';
import BinaryCodeEffect from '../ui/BinaryCodeEffect';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const ProjectsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  // État pour suivre le projet en survol
  const [hoveredProject, setHoveredProject] = useState(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { t } = useLanguage(); // Hook pour les traductions

  // Données des projets phares avec traductions
  const featuredProjects = [
    {
      id: 'flash-loan-bot',
      title: t('projects.flashLoanBot.title'),
      description: t('projects.flashLoanBot.description'),
      features: [
        t('projects.flashLoanBot.features.0'),
        t('projects.flashLoanBot.features.1'),
        t('projects.flashLoanBot.features.2'),
        t('projects.flashLoanBot.features.3'),
        t('projects.flashLoanBot.features.4')
      ],
      stack: ['TypeScript', 'Web3.js', 'TensorFlow.js', 'Node.js', 'Ethers.js'],
      image: '/flash-loan-bot.jpg',
      bgColor: 'from-blue-600 to-purple-600',
      shadowColor: 'rgba(79, 70, 229, 0.4)'
    },
    {
      id: 'trading-bot',
      title: t('projects.tradingBot.title'),
      description: t('projects.tradingBot.description'),
      features: [
        t('projects.tradingBot.features.0'),
        t('projects.tradingBot.features.1'),
        t('projects.tradingBot.features.2'),
        t('projects.tradingBot.features.3'),
        t('projects.tradingBot.features.4')
      ],
      stack: ['Python', 'TensorFlow', 'Streamlit', 'Pandas', 'ccxt'],
      image: '/trading-bot.jpg',
      bgColor: 'from-green-500 to-teal-500',
      shadowColor: 'rgba(16, 185, 129, 0.4)'
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Arrière-plan avec effet de gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black to-dark-blue opacity-80 z-0"></div>
      
      {/* Effet de code binaire */}
      <div className="absolute inset-0 z-0 opacity-30">
        <BinaryCodeEffect height="100%" opacity={0.2} />
      </div>
      
      {/* Motif de circuit */}
      <div className="absolute inset-0 circuit-bg z-0 opacity-10"></div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-tech-blue/10 blur-3xl rounded-full animate-pulse-slow" style={{ animationDuration: '15s' }}></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-neon-green/5 blur-3xl rounded-full animate-pulse-slow" style={{ animationDuration: '20s', animationDelay: '-5s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full animate-pulse-slow" style={{ animationDuration: '25s', animationDelay: '-10s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Titre de section */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-neon-green/20 to-tech-blue/20 px-3 py-1 rounded-full text-white/80 text-xs font-medium tracking-wider">{t('projects.subtitle')}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('projects.featuredTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-tech-blue mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
              {t('projects.featuredDescription')}
            </p>
          </motion.div>
          
          {/* Projets */}
          <div className="space-y-24 md:space-y-32">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row gap-8 md:gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image du projet */}
                <motion.div 
                  className="w-full lg:w-1/2 relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <div className={`relative overflow-hidden rounded-xl aspect-video modern-card border border-gray-800/50 transition-all duration-500 ${hoveredProject === project.id ? 'shadow-lg shadow-tech-blue/20' : ''}`}>
                    {/* Overlay avec gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} opacity-80 mix-blend-multiply group-hover:opacity-70 transition-opacity duration-300`}></div>
                    
                    {/* Effet de particules dynamiques */}
                    <div className="absolute inset-0 z-0">
                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <>
                            <motion.div 
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/70 animate-ping" 
                              style={{ animationDuration: '3s', animationDelay: '0s' }}
                            />
                            <motion.div 
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-white/70 animate-ping" 
                              style={{ animationDuration: '4s', animationDelay: '1s' }}
                            />
                            <motion.div 
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-white/70 animate-ping" 
                              style={{ animationDuration: '5s', animationDelay: '2s' }}
                            />
                          </>
                        )}
                      </AnimatePresence>
                      
                      {/* Particules toujours présentes mais moins visibles */}
                      <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-white/30 animate-ping" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
                      <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-white/30 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 rounded-full bg-white/30 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
                    </div>
                    
                    {/* Contenu de la carte */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 z-10">
                      <motion.div 
                        className="bg-dark-blue/80 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                        initial={{ y: 2, opacity: 0.9 }}
                        animate={{
                          y: hoveredProject === project.id ? 0 : 2,
                          opacity: hoveredProject === project.id ? 1 : 0.9,
                          borderColor: hoveredProject === project.id ? 'rgba(56, 182, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.h4 
                          className="text-lg sm:text-xl font-bold mb-2 text-white"
                          animate={{
                            color: hoveredProject === project.id ? '#38B6FF' : '#FFFFFF'
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {project.title}
                        </motion.h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-4">
                          {project.stack.map((tech, techIndex) => (
                            <motion.span 
                              key={techIndex}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium"
                              whileHover={{ y: -2, backgroundColor: 'rgba(56, 182, 255, 0.2)' }}
                              transition={{ duration: 0.2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                        
                        {/* Bouton aperçu avec animation améliorée */}
                        <div className="flex justify-end">
                          <motion.div 
                            className="text-xs text-white/70 hover:text-white flex items-center cursor-pointer transition-colors duration-300"
                            whileHover={{ x: 3, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <AnimatePresence>
                              {hoveredProject === project.id && (
                                <motion.span
                                  initial={{ opacity: 0, x: -5 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -5 }}
                                  transition={{ duration: 0.2 }}
                                  className="mr-1"
                                >
                                  Aperçu
                                </motion.span>
                              )}
                            </AnimatePresence>
                            <motion.svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-3.5 w-3.5" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              animate={{
                                x: hoveredProject === project.id ? 2 : 0,
                                color: hoveredProject === project.id ? '#38B6FF' : 'currentColor'
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </motion.svg>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Overlay avec motif de circuit */}
                    <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
                  </div>
                  
                  {/* Effet de lueur amélioré */}
                  <motion.div 
                    className="absolute -inset-4 rounded-xl blur-xl -z-10"
                    animate={{
                      opacity: hoveredProject === project.id ? 0.4 : 0.2,
                      scale: hoveredProject === project.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ background: `radial-gradient(circle, ${project.shadowColor} 0%, transparent 70%)` }}
                  ></motion.div>
                </motion.div>
                
                {/* Détails du projet */}
                <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                  <motion.div variants={featureVariants} className="space-y-1">
                    <div className="text-neon-green text-sm font-medium">{t('projects.projectNumber')} {index + 1}</div>
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-white"
                    >
                      {project.title}
                    </motion.h3>
                  </motion.div>
                  
                  <motion.p 
                    variants={featureVariants}
                    className="text-gray-400 text-sm sm:text-base"
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    variants={featureVariants}
                    className="space-y-3 bg-dark-blue/30 p-4 sm:p-5 rounded-lg border border-gray-800/50"
                  >
                    <h4 className="text-lg sm:text-xl font-semibold text-tech-blue">{t('projects.keyFeatures')}</h4>
                    <ul className="space-y-2">
                      {Array.isArray(project.features) && project.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          variants={featureVariants}
                          className="flex items-start"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-tech-blue/20 border border-tech-blue/50 flex items-center justify-center mt-0.5 mr-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-tech-blue"></div>
                          </div>
                          <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    variants={featureVariants}
                    className="pt-2 sm:pt-4"
                  >
                    <Link href={`/projects/${project.id}`}>
                      <a className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-dark-blue border border-tech-blue/50 rounded-lg text-tech-blue hover:bg-tech-blue/10 transition-all duration-300">
                        <motion.span
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center text-sm sm:text-base"
                        >
                          {t('projects.viewDetails')}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.span>
                      </a>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
