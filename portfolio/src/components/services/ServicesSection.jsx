import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ServicesSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { t } = useLanguage(); // Hook pour les traductions

  // Données des services proposés avec traductions
  const services = [
    {
      id: 'custom-dev',
      title: t('services.customDev.title'),
      description: t('services.customDev.description'),
      icon: '💻',
      color: 'from-blue-600 to-indigo-600',
      features: [
        t('services.customDev.features.0'),
        t('services.customDev.features.1'),
        t('services.customDev.features.2'),
        t('services.customDev.features.3')
      ]
    },
    {
      id: 'ai-solutions',
      title: t('services.aiSolutions.title'),
      description: t('services.aiSolutions.description'),
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        t('services.aiSolutions.features.0'),
        t('services.aiSolutions.features.1'),
        t('services.aiSolutions.features.2'),
        t('services.aiSolutions.features.3')
      ]
    },
    {
      id: 'consulting',
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      icon: '🔍',
      color: 'from-amber-500 to-orange-600',
      features: [
        t('services.consulting.features.0'),
        t('services.consulting.features.1'),
        t('services.consulting.features.2'),
        t('services.consulting.features.3')
      ]
    },
    {
      id: 'automation',
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      icon: '🤖',
      color: 'from-green-500 to-teal-500',
      features: [
        t('services.automation.features.0'),
        t('services.automation.features.1'),
        t('services.automation.features.2'),
        t('services.automation.features.3')
      ]
    },
    {
      id: 'training',
      title: t('services.training.title'),
      description: t('services.training.description'),
      icon: '🖥️',
      color: 'from-red-500 to-pink-500',
      features: [
        t('services.training.features.0'),
        t('services.training.features.1'),
        t('services.training.features.2'),
        t('services.training.features.3')
      ]
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
        staggerChildren: 0.1,
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

  const featureVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-deep-black to-space-gray">
      {/* Fond avec effet de grille */}
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-neon-green/10 to-tech-blue/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-l from-neon-green/10 to-tech-blue/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
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
              {t('services.subtitle')}
            </h2>
            <div className="w-24 h-1 bg-neon-green mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              {t('services.sectionDescription')}
            </p>
          </motion.div>
          
          {/* Services directement sans les caractéristiques principales */}
          
          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="glass-effect rounded-xl overflow-hidden relative group"
              >
                {/* Effet de lueur au survol */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Contenu */}
                <div className="p-6 relative z-10">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  
                  <p className="text-gray-300 mb-5">{service.description}</p>
                  
                  <motion.ul
                    variants={containerVariants}
                    className="space-y-2 mt-4"
                  >
                    {Array.isArray(service.features) && service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        variants={featureVariants}
                        className="flex items-center"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-green mr-2"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                
                {/* Bordure inférieure animée */}
                <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500 ease-out`}></div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass-effect p-8 rounded-xl max-w-3xl mx-auto relative overflow-hidden">
              {/* Effet de lueur en arrière-plan */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-neon-green/20 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-tech-blue/20 blur-3xl"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{t('services.cta.title')}</h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                {t('services.cta.description')}
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-neon-green text-dark-blue font-medium rounded-lg hover:bg-white transition-colors duration-300"
              >
                {t('services.cta.button')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
