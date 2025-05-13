import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import TechIcon from '../ui/TechIcon';
import { useLanguage } from '../../context/LanguageContext';

const AboutSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { t } = useLanguage(); // Hook pour les traductions

  // Logos des technologies avec catégories
  const techStack = [
    { name: 'Python', icon: '/icons/python.svg', category: 'languages' },
    { name: 'TensorFlow', icon: '/icons/tensorflow.svg', category: 'ai' },
    { name: 'React', icon: '/icons/react.svg', category: 'frontend' },
    { name: 'Node.js', icon: '/icons/node-js.svg', category: 'backend' },
    { name: 'Web3', icon: '/icons/web3.svg', category: 'blockchain' },
    { name: 'Docker', icon: '/icons/docker.svg', category: 'devops' },
    { name: 'AWS', icon: '/icons/aws.svg', category: 'cloud' },
    { name: 'MongoDB', icon: '/icons/mongodb.svg', category: 'database' },
  ];
  
  // Catégories pour filtrer les technologies avec traductions
  const categories = [
    { id: 'all', label: t('about.categories.all') },
    { id: 'languages', label: t('about.categories.languages') },
    { id: 'ai', label: t('about.categories.ai') },
    { id: 'frontend', label: t('about.categories.frontend') },
    { id: 'backend', label: t('about.categories.backend') },
    { id: 'blockchain', label: t('about.categories.blockchain') },
    { id: 'devops', label: t('about.categories.devops') },
    { id: 'cloud', label: t('about.categories.cloud') },
    { id: 'database', label: t('about.categories.database') },
  ];
  
  // État pour le filtre actif
  const [activeFilter, setActiveFilter] = React.useState('all');

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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const techItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Fond avec effet de grille */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      
      {/* Éléments décoratifs plus modernes */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-tech-blue/10 blur-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-neon-green/5 blur-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-purple-500/10 blur-2xl z-0 animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-tech-blue/5 blur-2xl z-0 animate-float-delay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Titre de section avec design amélioré */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <div className="inline-block">
              <span className="text-sm font-medium text-tech-blue tracking-wider uppercase mb-2 block">{t('about.subtitle')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 relative inline-block">
                <span className="relative z-10">{t('about.title')}</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-tech-blue/30 to-purple-500/30 rounded-full -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                ></motion.span>
              </h2>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Colonne de gauche - Texte avec design amélioré */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-tech-blue to-purple-500 rounded-full"></div>
                <motion.h3 
                  variants={itemVariants} 
                  className="text-2xl font-semibold text-white flex items-center"
                >
                  <span className="bg-gradient-to-r from-tech-blue to-purple-500 bg-clip-text text-transparent">{t('about.career.title')}</span>
                </motion.h3>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-300 mt-4 leading-relaxed"
                >
                  {t('about.career.description')}
                </motion.p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-neon-green to-tech-blue rounded-full"></div>
                <motion.h3 
                  variants={itemVariants} 
                  className="text-2xl font-semibold text-white flex items-center"
                >
                  <span className="bg-gradient-to-r from-neon-green to-tech-blue bg-clip-text text-transparent">{t('about.approach.title')}</span>
                </motion.h3>
              
                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4"
                >
                  <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-tech-blue/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-blue">
                    <div className="text-tech-blue text-xl mb-3">⚡</div>
                    <h4 className="text-white font-medium mb-2">Performance</h4>
                    <p className="text-sm text-gray-400">Optimisation constante pour des systèmes rapides et efficaces.</p>
                  </div>
                  
                  <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-purple">
                    <div className="text-purple-500 text-xl mb-3">🔄</div>
                    <h4 className="text-white font-medium mb-2">Fiabilité</h4>
                    <p className="text-sm text-gray-400">Architecture robuste pour un fonctionnement 24/7 sans interruption.</p>
                  </div>
                  
                  <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-neon-green/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-green">
                    <div className="text-neon-green text-xl mb-3">🔒</div>
                    <h4 className="text-white font-medium mb-2">Sécurité</h4>
                    <p className="text-sm text-gray-400">Protection des données et des transactions à chaque niveau.</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Colonne de droite - Image et stack technique améliorés */}
            <motion.div variants={itemVariants} className="space-y-10">
              <div className="relative w-full h-72 md:h-80 rounded-xl overflow-hidden modern-card border border-gray-800/50">
                <div className="absolute inset-0 bg-gradient-to-tr from-dark-blue via-tech-blue/30 to-purple-500/30 opacity-80 z-10"></div>
                
                {/* Effet de particules */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/50 animate-ping" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
                  <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-white/50 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                  <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-white/50 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-center p-6 backdrop-blur-sm bg-dark-blue/30 rounded-xl border border-white/10 max-w-sm transform hover:scale-105 transition-transform duration-300">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-tech-blue to-purple-500 flex items-center justify-center"
                    >
                      <span className="text-2xl">👨‍💻</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">{t('about.expertTitle')}</h3>
                    <p className="text-gray-300 max-w-xs mx-auto">{t('about.expertDesc')}</p>
                  </div>
                </div>
                
                {/* Effet de circuit */}
                <div className="absolute inset-0 bg-circuit-pattern opacity-30 z-5"></div>
              </div>
              
              <motion.div
                variants={techStackVariants}
                className="mt-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-white">{t('about.techStack')}</h3>
                  
                  {/* Filtres de catégories */}
                  <div className="flex flex-wrap justify-end gap-2">
                    {categories.slice(0, 4).map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveFilter(category.id)}
                        className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${activeFilter === category.id 
                          ? 'bg-tech-blue text-white' 
                          : 'bg-dark-blue/50 text-gray-400 hover:bg-dark-blue/80'}`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                  <AnimatePresence>
                    {techStack
                      .filter(tech => activeFilter === 'all' || tech.category === activeFilter)
                      .map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        variants={techItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="flex flex-col items-center"
                        layout
                      >
                        <div className="w-14 h-14 bg-gradient-to-br from-dark-blue to-space-gray rounded-xl flex items-center justify-center mb-2 border border-gray-700/50 shadow-lg hover:shadow-glow-blue transition-all duration-300">
  <TechIcon name={tech.name} icon={tech.icon} size={44} title={tech.name} />
</div>
                        <span className="text-xs text-gray-300">{tech.name}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
