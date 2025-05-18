import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import TechIcon from '../ui/TechIcon';
import { useLanguage } from '../../context/LanguageContext';

const ContactSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { t } = useLanguage(); // Hook pour les traductions
  
  // État du formulaire
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // État de soumission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Réinitialisation du formulaire
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Réinitialisation après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

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

  // Réseaux sociaux
  const socialLinks = [
    { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: 'https://www.linkedin.com/in/mikael-leclerc-822536344/', color: 'bg-blue-600' },
    { name: 'GitHub', icon: '/icons/github.svg', url: '#', color: 'bg-gray-800' },
    { name: 'Twitter', icon: '/icons/twitter.svg', url: '#', color: 'bg-sky-500' },
    { name: 'Email', icon: '/icons/email.svg', url: 'mailto:mikaleclerc5@gmail.com', color: 'bg-red-500' }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Fond avec effet de grille amélioré */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      
      {/* Éléments décoratifs modernes */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-space-gray to-transparent opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-neon-green/5 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-tech-blue/10 blur-3xl rounded-full animate-float"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-500/10 blur-xl rounded-full animate-float-delay"></div>
      
      {/* Particules animées */}
      <div className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full bg-white/50 animate-ping" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-white/50 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Titre de section avec design amélioré */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <div className="inline-block">
              <span className="text-sm font-medium text-tech-blue tracking-wider uppercase mb-2 block">{t('contact.subtitle')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 relative inline-block">
                <span className="relative z-10">{t('contact.title')}</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-tech-blue/30 to-purple-500/30 rounded-full -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                ></motion.span>
              </h2>
            </div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 rounded-xl relative overflow-hidden border border-white/10 hover:border-tech-blue/20 transition-all duration-500">
                {/* Effet de lueur en arrière-plan */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-tech-blue/20 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
                
                {/* Effet de circuit */}
                <div className="absolute inset-0 bg-circuit-pattern opacity-10 z-0"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-tech-blue to-purple-500 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{t('contact.title')}</h3>
                  </div>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-tech-blue/10 to-purple-500/10 backdrop-blur-sm border border-tech-blue/30 rounded-xl p-8 text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-tech-blue to-purple-500 flex items-center justify-center mx-auto mb-6"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h4 className="text-xl font-semibold text-white mb-3">{t('contact.success')}</h4>
                    <p className="text-gray-300">{t('contact.success')}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <label htmlFor="name" className="block text-gray-300 text-sm mb-2 transition-all duration-300 group-focus-within:text-tech-blue">{t('contact.name')}</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-space-gray/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tech-blue/50 focus:shadow-glow-blue transition-all duration-300"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-blue to-purple-500 group-focus-within:w-full transition-all duration-500"></div>
                        </div>
                      </div>
                      <div className="relative group">
                        <label htmlFor="email" className="block text-gray-300 text-sm mb-2 transition-all duration-300 group-focus-within:text-tech-blue">{t('contact.email')}</label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-space-gray/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tech-blue/50 focus:shadow-glow-blue transition-all duration-300"
                          />
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-blue to-purple-500 group-focus-within:w-full transition-all duration-500"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <label htmlFor="subject" className="block text-gray-300 text-sm mb-2 transition-all duration-300 group-focus-within:text-tech-blue">{t('contact.subject')}</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-space-gray/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tech-blue/50 focus:shadow-glow-blue transition-all duration-300"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-blue to-purple-500 group-focus-within:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <label htmlFor="message" className="block text-gray-300 text-sm mb-2 transition-all duration-300 group-focus-within:text-tech-blue">{t('contact.message')}</label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full bg-space-gray/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tech-blue/50 focus:shadow-glow-blue transition-all duration-300 resize-none"
                        ></textarea>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-tech-blue to-purple-500 group-focus-within:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(56, 182, 255, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-lg font-medium text-lg transition-all duration-300 ${
                        isSubmitting 
                          ? 'bg-gray-600/50 text-gray-300 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-tech-blue to-purple-500 text-white hover:from-tech-blue hover:to-tech-blue'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          {t('contact.send')}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      )}
                    </motion.button>
                  </form>
                )}
                </div>
              </div>
            </motion.div>
            
            {/* Informations de contact */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card p-8 rounded-xl border border-white/10 hover:border-tech-blue/20 transition-all duration-500 relative overflow-hidden">
                {/* Effet de circuit */}
                <div className="absolute inset-0 bg-circuit-pattern opacity-10 z-0"></div>
                {/* Effet de lueur */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-tech-blue flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Informations de contact</h3>
                  </div>
                
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start p-4 rounded-xl bg-dark-blue/30 border border-white/5 hover:border-tech-blue/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-blue"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-tech-blue to-tech-blue/50 flex items-center justify-center mr-4 flex-shrink-0 shadow-glow-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">{t('contact.email')}</h4>
                        <a 
                          href="mikaleclerc5@gmail.com" 
                          className="text-gray-300 hover:text-tech-blue transition-colors flex items-center group"
                        >
                          mikaleclerc5@gmail.com
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start p-4 rounded-xl bg-dark-blue/30 border border-white/5 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-purple"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-500/50 flex items-center justify-center mr-4 flex-shrink-0 shadow-glow-purple">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">{t('contact.phone')}</h4>
                        <a 
                          href="tel:+33769812391" 
                          className="text-gray-300 hover:text-purple-500 transition-colors flex items-center group"
                        >
                          +33 7 69 81 23 91
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start p-4 rounded-xl bg-dark-blue/30 border border-white/5 hover:border-neon-green/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-green"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-green to-neon-green/50 flex items-center justify-center mr-4 flex-shrink-0 shadow-glow-green">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">{t('contact.location')}</h4>
                        <p className="text-gray-300 flex items-center group">
                          Paris, France
                          <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            🇫🇷
                          </span>
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Réseaux sociaux */}
              <div className="glass-card p-8 rounded-xl border border-white/10 hover:border-tech-blue/20 transition-all duration-500 relative overflow-hidden">
                {/* Effet de circuit */}
                <div className="absolute inset-0 bg-circuit-pattern opacity-10 z-0"></div>
                {/* Effet de lueur */}
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-tech-blue/10 blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-tech-blue to-purple-500 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{t('contact.socialMedia')}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.3 } }}
                        className="flex items-center p-4 bg-dark-blue/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-tech-blue/30 transition-all duration-300 hover:shadow-glow-blue"
                      >
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${social.color.split('-')[1]}-500 to-${social.color.split('-')[1]}-700 flex items-center justify-center mr-3 shadow-md`}>
                          <TechIcon name={social.name} icon={social.icon} size={32} title={social.name} />
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Calendly */}
              <div className="glass-card p-8 rounded-xl border border-white/10 hover:border-purple-500/20 transition-all duration-500 relative overflow-hidden">
                {/* Effet de circuit */}
                <div className="absolute inset-0 bg-circuit-pattern opacity-10 z-0"></div>
                {/* Effet de lueur */}
                <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-tech-blue flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{t('contact.schedule')}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 ml-14">{t('contact.scheduleDescription')}</p>
                  
                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)' }}
                    whileTap={{ scale: 0.97 }}
                    className="ml-14 inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-tech-blue text-white font-medium rounded-lg transition-all duration-300"
                  >
                    <span className="flex items-center">
                      {t('contact.scheduleButton')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
