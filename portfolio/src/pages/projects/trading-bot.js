import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TechIcon from '../../components/ui/TechIcon';
import Image from 'next/image';

const TradingBotProject = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  
  // Données des images pour le carrousel
  const carouselImages = [
    {
      src: "/images/projects/trading-bot/dashboard.png",
      alt: "Tableau de bord du bot de trading"
    },
    {
      src: "/images/projects/trading-bot/performance.png",
      alt: "Analyse de performance du bot"
    },
    {
      src: "/images/projects/trading-bot/signals.png",
      alt: "Signaux de trading générés par le bot"
    },
    {
      src: "/images/projects/trading-bot/config.png",
      alt: "Interface de configuration du bot"
    },
    {
      src: "/images/projects/trading-bot/strategies.png",
      alt: "Stratégies de trading disponibles"
    },
    {
      src: "/images/projects/trading-bot/strategy-list.png",
      alt: "Liste des stratégies configurées"
    },
    {
      src: "/images/projects/trading-bot/notifications.png",
      alt: "Système de notifications et alertes"
    }
  ];
  
  // Fonctions de navigation du carrousel
  const nextImage = () => setActiveImage((prev) => (prev + 1) % carouselImages.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  const goToImage = (index) => setActiveImage(index);

  // Effet pour le défilement fluide
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Variables d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const tabVariants = {
    active: {
      color: "#00ff9d",
      transition: { duration: 0.3 }
    },
    inactive: {
      color: "#ffffff",
      transition: { duration: 0.3 }
    }
  };

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeInOut" }
  };

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  // Données du projet
  const projectData = {
    title: "Bot de Trading IA",
    description: "Un bot de trading avancé utilisant l'intelligence artificielle pour prédire les mouvements de marché et exécuter des transactions optimisées.",
    overview: "Ce bot de trading représente une solution complète pour les traders professionnels, combinant des modèles d'IA avancés avec des stratégies de trading algorithmique. Conçu pour fonctionner sur plusieurs marchés et temporalités, il offre une performance supérieure aux méthodes traditionnelles.",
    features: [
      {
        category: "Fonctionnalités IA",
        items: [
          "Réseaux de neurones LSTM pour la prédiction de prix",
          "Analyse de sentiment des news financières",
          "Apprentissage par renforcement pour l'optimisation des stratégies",
          "Détection d'anomalies pour identifier les opportunités",
          "Classification des conditions de marché en temps réel"
        ]
      },
      {
        category: "Gestion des risques",
        items: [
          "Gestion dynamique du capital",
          "Stop-loss et take-profit adaptatifs",
          "Diversification automatique du portefeuille",
          "Calcul de la valeur à risque (VaR) en temps réel",
          "Stress testing des stratégies"
        ]
      },
      {
        category: "Exécution des ordres",
        items: [
          "Algorithmes de smart order routing",
          "Fractionnement des ordres pour minimiser l'impact",
          "Optimisation du timing d'exécution",
          "Gestion des slippages",
          "Exécution multi-exchange"
        ]
      },
      {
        category: "Stratégies de trading",
        items: [
          "Suivi de tendance avancé",
          "Mean reversion avec indicateurs personnalisés",
          "Arbitrage statistique",
          "Analyse des corrélations inter-marchés",
          "Stratégies de market making"
        ]
      }
    ],
    architecture: [
      {
        name: "Module de données",
        description: "Collecte et prépare les données de marché pour l'analyse et la prise de décision",
        components: ["DataFetcher", "DataCleaner", "FeatureExtractor"]
      },
      {
        name: "Module IA",
        description: "Analyse les données et génère des prédictions de prix et de tendances",
        components: ["PredictionModel", "SentimentAnalyzer", "ReinforcementAgent"]
      },
      {
        name: "Moteur principal",
        description: "Prend les décisions de trading et gère les positions ouvertes",
        components: ["StrategySelector", "SignalGenerator", "PositionManager"]
      },
      {
        name: "Gestionnaire de risques",
        description: "Surveille et gère l'exposition au risque pour chaque position et pour le portefeuille global",
        components: ["RiskCalculator", "PositionSizer", "StopLossManager"]
      },
      {
        name: "Couche d'exécution",
        description: "Gère l'interaction avec les exchanges et l'exécution des ordres",
        components: ["OrderExecutor", "ExchangeConnector", "TransactionLogger"]
      }
    ],
    performance: {
      metrics: [
        { name: "ROI annualisé", value: "32.7%" },
        { name: "Ratio de Sharpe", value: "2.41" },
        { name: "Drawdown maximum", value: "12.3%" },
        { name: "Taux de réussite", value: "68.5%" },
        { name: "Ratio profit/perte", value: "1.8" }
      ],
      markets: [
        { name: "Crypto", performance: "+41.2%" },
        { name: "Forex", performance: "+28.6%" },
        { name: "Actions", performance: "+24.3%" },
        { name: "Matières premières", performance: "+19.8%" }
      ]
    },
    interface: {
      sections: [
        { name: "Dashboard", description: "Vue d'ensemble des performances et positions actuelles" },
        { name: "Analyse de marché", description: "Visualisations avancées et prédictions IA" },
        { name: "Gestion de portefeuille", description: "Allocation d'actifs et performance" },
        { name: "Configuration", description: "Paramètres des stratégies et gestion des risques" },
        { name: "Backtesting", description: "Tests sur données historiques et optimisation" }
      ]
    },
    stack: [
      { 
        name: "Python", 
        icon: "python.svg",
        description: "Langage de programmation principal, choisi pour sa richesse en bibliothèques d'analyse de données et d'IA."
      },
      { 
        name: "TensorFlow", 
        icon: "tensorflow.svg",
        description: "Framework d'apprentissage profond utilisé pour les modèles LSTM de prédiction de prix et l'analyse de séries temporelles."
      },
      { 
        name: "PyTorch", 
        icon: "pytorch.svg",
        description: "Bibliothèque d'apprentissage profond flexible employée pour les algorithmes d'apprentissage par renforcement."
      },
      { 
        name: "Streamlit", 
        icon: "streamlit.svg",
        description: "Framework pour créer rapidement des interfaces utilisateur interactives pour le monitoring et la configuration du bot."
      },
      { 
        name: "Pandas", 
        icon: "pandas.svg",
        description: "Bibliothèque d'analyse et manipulation de données, essentielle pour le prétraitement des données de marché."
      },
      { 
        name: "scikit-learn", 
        icon: "scikit-learn.svg",
        description: "Bibliothèque d'apprentissage automatique utilisée pour la détection d'anomalies et l'optimisation des hyperparamètres."
      }
    ]
  };

  // Les variables d'animation sont déjà définies plus haut

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>{projectData.title} | Portfolio</title>
        <meta name="description" content={projectData.description} />
      </Head>

      {/* Hero du projet - Design amélioré avec motif de graphique */}
      <section className="relative min-h-[80vh] md:min-h-[70vh] flex items-center overflow-hidden">
        {/* Arrière-plan avec gradient animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-teal-900 to-dark-blue z-0">
          {/* Motif de graphique */}
          <div className="absolute inset-0 bg-[url('/images/chart-pattern.svg')] bg-repeat opacity-30 z-0"></div>
        </div>
        
        {/* Overlay avec gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-blue/90 z-0">
        </div>
        
        {/* Particules animées avec effet 3D */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-green-400 animate-pulse-slow shadow-glow-green-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-teal-400 animate-pulse-slow shadow-glow-green-sm" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-neon-green animate-pulse-slow shadow-glow-green-sm" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-white/70 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        
        {/* Effet de lueur amélioré */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-green-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-teal-600/30 blur-[120px] rounded-full"></div>
        
        {/* Contenu */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-5xl mx-auto">
            <Link href="/#projects">
              <a className="inline-flex items-center text-white/80 hover:text-neon-green mb-6 transition-colors">
                <motion.span
                  whileHover={{ x: -5 }}
                  className="inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Retour aux projets
                </motion.span>
              </a>
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-teal-400">
                {projectData.title}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-white/80 max-w-3xl mb-8"
            >
              {projectData.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-green to-teal-400 text-dark-blue font-medium rounded-lg hover:from-white hover:to-white transition-all duration-300 shadow-glow-green-sm"
                href="#demo"
              >
                Voir la démo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-dark-blue/50 text-white font-medium rounded-lg border border-neon-green/30 hover:bg-dark-blue/80 transition-all duration-300"
                href="#details"
              >
                Détails techniques
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
        
        {/* Indicateur de défilement */}
        {/* Élément "Découvrir" supprimé */}
      </section>

      {/* Navigation par onglets */}
      <section id="details" className="bg-deep-black py-8 sticky top-0 z-30 border-b border-green-500/20 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-start space-x-2 md:space-x-4 overflow-x-auto pb-2 scrollbar-hide">
              <motion.button
                onClick={() => setActiveTab('overview')}
                animate={activeTab === 'overview' ? 'active' : 'inactive'}
                variants={tabVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 whitespace-nowrap rounded-full transition-all duration-300 ${activeTab === 'overview' ? 'bg-gradient-to-r from-green-900/50 to-teal-900/50 border border-neon-green/30 shadow-glow-sm' : 'hover:bg-dark-blue/30'}`}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Vue d'ensemble
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => setActiveTab('features')}
                animate={activeTab === 'features' ? 'active' : 'inactive'}
                variants={tabVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 whitespace-nowrap rounded-full transition-all duration-300 ${activeTab === 'features' ? 'bg-gradient-to-r from-green-900/50 to-teal-900/50 border border-neon-green/30 shadow-glow-sm' : 'hover:bg-dark-blue/30'}`}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Fonctionnalités
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => setActiveTab('architecture')}
                animate={activeTab === 'architecture' ? 'active' : 'inactive'}
                variants={tabVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 whitespace-nowrap rounded-full transition-all duration-300 ${activeTab === 'architecture' ? 'bg-gradient-to-r from-green-900/50 to-teal-900/50 border border-neon-green/30 shadow-glow-sm' : 'hover:bg-dark-blue/30'}`}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Architecture
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => setActiveTab('performance')}
                animate={activeTab === 'performance' ? 'active' : 'inactive'}
                variants={tabVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 whitespace-nowrap rounded-full transition-all duration-300 ${activeTab === 'performance' ? 'bg-gradient-to-r from-green-900/50 to-teal-900/50 border border-neon-green/30 shadow-glow-sm' : 'hover:bg-dark-blue/30'}`}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Performance
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => setActiveTab('stack')}
                animate={activeTab === 'stack' ? 'active' : 'inactive'}
                variants={tabVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 whitespace-nowrap rounded-full transition-all duration-300 ${activeTab === 'stack' ? 'bg-gradient-to-r from-green-900/50 to-teal-900/50 border border-neon-green/30 shadow-glow-sm' : 'hover:bg-dark-blue/30'}`}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Technologies
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal avec système d'onglets */}
      <section className="py-16 bg-gradient-to-b from-deep-black to-dark-blue/90 min-h-[60vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {activeTab === 'overview' && (
              <AnimatePresence mode="wait">
                <motion.div
                  key="overview-tab"
                  {...pageTransition}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-16"
                >
                  <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-6 text-white">
                    Vue d'ensemble
                  </motion.h2>
                  
                  <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed">
                    {projectData.overview}
                  </motion.p>
                  
                  {/* Dashboard mockup */}
                  <motion.div 
                    variants={itemVariants}
                    className="mt-10 p-4 bg-space-gray/80 backdrop-blur-sm rounded-xl overflow-hidden border border-green-500/10 shadow-glow-green-sm"
                  >
                    <div id="demo" className="w-full rounded-lg overflow-hidden border border-green-500/20 shadow-glow-green-sm">
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-teal-400 mb-2">Interface du Bot de Trading</div>
                        <p className="text-gray-400 max-w-md mx-auto">Découvrez l'interface Streamlit du bot et ses fonctionnalités</p>
                      </div>
                      
                      {/* Carrousel d'images */}
                      <div className="relative">
                        <div className="relative aspect-video bg-dark-blue/80 rounded-lg overflow-hidden">
                          {/* Image active */}
                          <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-dark-blue/80">
                            <img 
                              src={carouselImages[activeImage].src} 
                              alt={carouselImages[activeImage].alt} 
                              className="max-w-full max-h-full object-contain p-2"
                            />
                          </div>
                        </div>
                        
                        {/* Indicateurs de slide */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                          {carouselImages.map((image, index) => (
                            <button 
                              key={index}
                              onClick={() => goToImage(index)}
                              className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === activeImage ? 'bg-neon-green' : 'bg-white/30 hover:bg-white/50'}`}
                              aria-label={`Voir ${image.alt}`}
                            />
                          ))}
                        </div>
                        
                        {/* Flèches de navigation */}
                        <button 
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors duration-300"
                          aria-label="Image précédente"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors duration-300"
                          aria-label="Image suivante"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Miniatures des images */}
                      <div className="mt-4 grid grid-cols-7 gap-2">
                        {carouselImages.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`aspect-video rounded-md overflow-hidden ${index === activeImage ? 'border-2 border-neon-green' : 'border border-white/20 hover:border-neon-green'} transition-colors duration-300 bg-dark-blue/80 flex items-center justify-center`}
                            aria-label={`Sélectionner ${image.alt}`}
                          >
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              className="max-w-full max-h-full object-contain"
                            />
                          </button>
                        ))}
                      </div>
                      
                      {/* Informations complémentaires */}
                      <div className="mt-6 p-4 bg-dark-blue/50 rounded-lg border border-green-500/10">
                        <h3 className="text-lg font-semibold text-white mb-2">Fonctionnalités de l'interface</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <li className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 text-neon-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Dashboard avec métriques en temps réel
                          </li>
                          <li className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 text-neon-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Signaux de trading avec niveau de confiance
                          </li>
                          <li className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 text-neon-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Configuration des paramètres de risque
                          </li>
                          <li className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 text-neon-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Personnalisation des stratégies de trading
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            )}
            
            {activeTab === 'features' && (
              <AnimatePresence mode="wait">
                <motion.div
                  key="features-tab"
                  {...pageTransition}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-16"
                >
                  <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-6 text-white">
                    Fonctionnalités avancées
                  </motion.h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectData.features.map((category, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        className="glass-effect p-6 rounded-xl border border-green-500/10 shadow-glow-green-sm"
                      >
                        <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-teal-400 mb-4">{category.category}</h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-green to-teal-400 mr-3 animate-pulse-slow"></div>
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
            
            {activeTab === 'architecture' && (
              <AnimatePresence mode="wait">
                <motion.div
                  key="architecture-tab"
                  {...pageTransition}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-16"
                >
                  <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-6 text-white">
                    Architecture modulaire
                  </motion.h2>
                  
                  <motion.div variants={itemVariants} className="overflow-x-auto">
                    <div className="min-w-max">
                      <div className="grid grid-cols-5 gap-4">
                        {projectData.architecture.map((module, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div className="w-full h-20 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center mb-2 shadow-glow-green-sm border border-green-500/20">
                              <span className="font-medium text-white">{module.name}</span>
                            </div>
                            
                            {/* Lignes de connexion */}
                            {index < projectData.architecture.length - 1 && (
                              <div className="w-full flex justify-center">
                                <div className="w-8 h-8 border-t-2 border-r-2 border-green-700 transform rotate-45 translate-x-4"></div>
                              </div>
                            )}
                            
                            {/* Composants */}
                            <div className="mt-4 space-y-2 w-full">
                              {module.components.map((component, compIndex) => (
                                <div key={compIndex} className="bg-space-gray/80 backdrop-blur-sm p-2 rounded text-xs text-center text-gray-300 border border-gray-700/30 hover:border-green-500/30 transition-colors duration-300">
                                  {component}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            )}
            
            {activeTab === 'performance' && (
              <AnimatePresence mode="wait">
                <motion.div
                  key="performance-tab"
                  {...pageTransition}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-16"
                >
                  <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-6">
                    <span className="text-neon-green">#</span> Performance
                  </motion.h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Métriques de performance */}
                    <motion.div variants={itemVariants} className="glass-effect p-6 rounded-xl border border-green-500/10 shadow-glow-green-sm">
                      <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300 mb-4">Métriques clés</h3>
                      
                      <div className="space-y-4">
                        {projectData.performance.metrics.map((metric, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-gray-400">{metric.name}</span>
                            <span className="text-neon-green font-medium">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Performance par marché */}
                    <motion.div variants={itemVariants} className="glass-effect p-6 rounded-xl border border-green-500/10 shadow-glow-green-sm">
                      <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300 mb-4">Performance par marché</h3>
                      
                      <div className="space-y-4">
                        {projectData.performance.markets.map((market, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-3 h-3 rounded-full mr-3 shadow-glow-xs" style={{ backgroundColor: `hsl(${index * 40}, 70%, 60%)` }}></div>
                              <span className="text-gray-300">{market.name}</span>
                            </div>
                            <div className="text-neon-green font-medium">{market.performance}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
            
            {activeTab === 'stack' && (
              <AnimatePresence mode="wait">
                <motion.div
                  key="stack-tab"
                  {...pageTransition}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-6 text-white">
                    Stack technique
                  </motion.h2>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="flex flex-wrap gap-4"
                  >
                    {projectData.stack.map((tech, index) => (
                      <motion.div 
                        key={index} 
                        className="glass-effect p-4 rounded-lg border border-green-500/10 w-full sm:w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] min-w-0"
                        whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(0, 255, 157, 0.3)' }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 flex items-center justify-center mr-3 bg-gradient-to-br from-green-600/30 to-teal-600/30 rounded-full border border-green-500/20">
                            <TechIcon name={tech.name} icon={tech.icon} size={24} />
                          </div>
                          <h3 className="text-lg font-medium text-neon-green">{tech.name}</h3>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">{tech.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            )}
            
          </div>
        </div>
      </section>
      
      {/* CTA - Design amélioré */}
      <section className="py-16 bg-gradient-to-r from-dark-blue to-green-900 relative overflow-hidden">
        {/* Particules d'arrière-plan */}
        <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-neon-green/50 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-teal-400/50 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 rounded-full bg-green-400/50 animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Effet de lueur */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-green/10 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-4 text-center max-w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">Intéressé par ce type de projets ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            Je développe des solutions de trading algorithmique et d'intelligence artificielle sur mesure. Discutons de votre projet et des possibilités d'implémentation.
          </p>
          <Link href="/#contact">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-green to-teal-400 text-dark-blue font-medium rounded-lg hover:from-white hover:to-white transition-all duration-300 shadow-glow-green-sm"
            >
              Discutons de votre projet
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default TradingBotProject;
