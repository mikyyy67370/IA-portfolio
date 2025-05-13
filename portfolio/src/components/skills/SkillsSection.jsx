import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SkillsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { t } = useLanguage(); // Hook pour les traductions

  // Définition des compétences par domaine avec traductions
  const skillDomains = [
    {
      domain: t('skills.domains.ai'),
      skills: t('skills.skills.ai'),
      level: 90,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path><path d="M12 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M12 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M16 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M8 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M4.93 4.93l2.83 2.83"></path><path d="M16.24 16.24l2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M4.93 19.07l2.83-2.83"></path><path d="M16.24 7.76l2.83-2.83"></path></svg>,
      color: 'from-purple-500 to-tech-blue',
      shadowColor: 'rgba(139, 92, 246, 0.3)'
    },
    {
      domain: t('skills.domains.backend'),
      skills: t('skills.skills.backend'),
      level: 85,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"></path></svg>,
      color: 'from-tech-blue to-blue-400',
      shadowColor: 'rgba(59, 130, 246, 0.3)'
    },
    {
      domain: t('skills.domains.web3'),
      skills: t('skills.skills.web3'),
      level: 80,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>,
      color: 'from-neon-green to-green-400',
      shadowColor: 'rgba(52, 211, 153, 0.3)'
    },
    {
      domain: t('skills.domains.automation'),
      skills: t('skills.skills.automation'),
      level: 95,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>,
      color: 'from-orange-400 to-amber-300',
      shadowColor: 'rgba(251, 146, 60, 0.3)'
    },
    {
      domain: t('skills.domains.devops'),
      skills: t('skills.skills.devops'),
      level: 75,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
      color: 'from-red-400 to-pink-400',
      shadowColor: 'rgba(251, 113, 133, 0.3)'
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-space-gray">
      {/* Fond avec effet de grille */}
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-r from-dark-blue to-tech-blue opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-r from-tech-blue to-dark-blue opacity-30"></div>
      
      {/* Cercles lumineux décoratifs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-tech-blue/10 blur-3xl"></div>
      
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('nav.skills')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-tech-blue mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{t('skills.description')}</p>
          </motion.div>
          
          {/* Cartes de compétences */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {skillDomains.map((domain, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: `0 15px 30px -10px ${domain.shadowColor}` }}
                className="modern-card p-6 rounded-xl border border-gray-800/50 relative overflow-hidden group transition-all duration-300"
              >
                {/* Effet de lueur en arrière-plan */}
                <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${domain.color} opacity-10 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Entête avec icône et niveau */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${domain.color} flex items-center justify-center text-white`} 
                      style={{ boxShadow: `0 0 15px ${domain.shadowColor}` }}>
                      {domain.icon}
                    </div>
                    
                    <div className="text-xs text-gray-400 font-medium">
                      <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${domain.level}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + (index * 0.1) }}
                          className={`h-full bg-gradient-to-r ${domain.color}`}
                        />
                      </div>
                      <div className="mt-1 text-right">{domain.level}%</div>
                    </div>
                  </div>
                  
                  {/* Titre du domaine */}
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-neon-green transition-colors duration-300">{domain.domain}</h3>
                  
                  {/* Liste des compétences */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {domain.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        variants={skillVariants}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(57, 255, 20, 0.1)' }}
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-dark-blue/30 border border-gray-800/50 hover:border-neon-green/30 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Ligne décorative */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50 my-4"></div>
                  
                  {/* Bouton d'action */}
                  <motion.div 
                    className="text-xs text-gray-400 hover:text-neon-green flex items-center justify-end cursor-pointer transition-colors duration-300"
                    whileHover={{ x: 3 }}
                  >
                    <span>{t('skills.viewProjects')}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
