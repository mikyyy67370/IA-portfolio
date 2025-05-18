import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TechIcon from '../../components/ui/TechIcon';
import Image from 'next/image';
import { optimizedAnimationProps, optimizedVariants, optimizedInfiniteAnimations } from '../../utils/performance-optimizations';

const FlashLoanBotProject = () => {
  const router = useRouter();

  // Effet pour le défilement fluide
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Données du projet
  const projectData = {
    title: "Bot Flash Loan Multi-DEX",
    description: "Un bot d'arbitrage avancé exploitant les opportunités de flash loan sur plusieurs DEX et blockchains simultanément.",
    overview: "Ce bot représente l'état de l'art en matière d'arbitrage crypto, combinant 22 fonctionnalités avancées réparties en 5 catégories principales. Conçu pour fonctionner 24/7 sur 7 réseaux blockchain différents, il peut identifier et exécuter des opportunités d'arbitrage en quelques millisecondes.",
    features: [
      {
        category: "Fonctionnalités principales",
        items: [
          "Arbitrage multi-chaînes (Ethereum, BSC, Polygon, Avalanche, etc.)",
          "Extraction MEV avec Flashbots",
          "IA prédictive pour l'analyse des prix",
          "Multi-threading pour l'exécution parallèle",
          "Techniques d'obfuscation des transactions"
        ]
      },
      {
        category: "Fonctionnalités IA avancées",
        items: [
          "Apprentissage par renforcement pour l'optimisation des stratégies",
          "Analyse de sentiment du marché en temps réel",
          "Prédiction de prix avec réseaux de neurones LSTM",
          "Détection d'anomalies pour identifier les opportunités rares",
          "Apprentissage fédéré pour la collaboration entre instances"
        ]
      },
      {
        category: "Fonctionnalités d'exécution",
        items: [
          "Exécution atomique des transactions",
          "Optimisation du gas en fonction de la congestion réseau",
          "Routage intelligent des ordres entre DEX",
          "Fractionnement des transactions pour minimiser l'impact",
          "Fail-safe avec mécanismes de rollback automatique"
        ]
      },
      {
        category: "Fonctionnalités de sécurité",
        items: [
          "Surveillance des attaques de front-running",
          "Chiffrement des données sensibles",
          "Authentification multi-facteurs",
          "Audit de sécurité continu",
          "Isolation des environnements d'exécution"
        ]
      }
    ],
    architecture: [
      {
        name: "Moteur principal",
        description: "Noyau du système responsable de l'identification et de l'exécution des opportunités d'arbitrage",
        components: ["ArbitrageStrategies", "FlashLoanReceiver", "OpportunityFinder"]
      },
      {
        name: "Couche réseau",
        description: "Gestion des connexions avec différentes blockchains et fournisseurs de liquidité",
        components: ["NetworkManager", "ChainConfig", "RPCProvider"]
      },
      {
        name: "Module IA",
        description: "Analyse et prédiction des mouvements de marché pour optimiser les stratégies",
        components: ["PricePredictionAI", "ReinforcementLearningAgent", "SentimentAnalyzer"]
      },
      {
        name: "Couche de sécurité",
        description: "Protection contre les attaques et sécurisation des transactions",
        components: ["TransactionObfuscator", "MEVProtection", "WalletRotator"]
      },
      {
        name: "Système de surveillance",
        description: "Interface utilisateur et outils de suivi des performances",
        components: ["DashboardUI", "AlertManager", "PerformanceTracker"]
      }
    ],
    results: {
      backtest: {
        initialCapital: "500€",
        finalCapital: "3 646,10€",
        netProfit: "3 146,10€",
        roi: "629,22%",
        annualizedRoi: "31468222047,67%",
        avgDailyProfit: "104,87€",
        successRate: "72,59%"
      },
      networkPerformance: [
        { network: "BSC", profit: "755,06€", opportunities: 139 },
        { network: "Polygon", profit: "597,76€", opportunities: 110 },
        { network: "Avalanche", profit: "503,38€", opportunities: 92 },
        { network: "Optimism", profit: "440,45€", opportunities: 81 },
        { network: "Fantom", profit: "408,99€", opportunities: 75 },
        { network: "Arbitrum", profit: "440,45€", opportunities: 81 }
      ],
      strategyPerformance: [
        { strategy: "Direct", profit: "1 132,59€", opportunities: 206 },
        { strategy: "Triangulaire", profit: "629,22€", opportunities: 116 },
        { strategy: "Multi-DEX", profit: "660,68€", opportunities: 121 },
        { strategy: "Multi-Hop", profit: "408,99€", opportunities: 75 },
        { strategy: "Optimisation Dynamique", profit: "314,61€", opportunities: 58 }
      ]
    },
    stack: [
      { 
        name: "TypeScript", 
        icon: "typescript.svg",
        description: "Surcouche typée de JavaScript offrant robustesse et sécurité au code, essentielle pour un bot manipulant des transactions financières."
      },
      { 
        name: "Node.js", 
        icon: "node-js.svg",
        description: "Environnement d'exécution JavaScript permettant une architecture asynchrone idéale pour les opérations blockchain simultanées."
      },
      { 
        name: "Ethers.js", 
        icon: "ethers-js.svg",
        description: "Bibliothèque complète pour interagir avec l'Ethereum Virtual Machine, utilisée pour les flash loans et les transactions."
      },
      { 
        name: "Web3.js", 
        icon: "web3.svg",
        description: "Interface JavaScript pour interagir avec les blockchains compatibles EVM, employée pour la connexion multi-chaînes."
      },
      { 
        name: "TensorFlow.js", 
        icon: "tensorflow.svg",
        description: "Version JavaScript du framework d'apprentissage profond, utilisée pour l'analyse prédictive des opportunités d'arbitrage."
      }
    ]
  };

  // État pour les tabs et les modals
  const [activeTab, setActiveTab] = useState('overview');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  
  // Utilisation des animations optimisées importées du fichier d'optimisation
  const containerVariants = useMemo(() => optimizedVariants.container, []);
  const itemVariants = useMemo(() => optimizedVariants.item, []);
  
  const tabVariants = useMemo(() => ({
    inactive: { opacity: 0.7, scale: 1 },
    active: { opacity: 1, color: '#00FF9D', scale: 1.03 }
  }), []);
  
  const pageTransition = useMemo(() => optimizedVariants.page, []);
  
  // Animation optimisée pour les tokens flottants
  const tokenAnimation = useMemo(() => ({
    ...optimizedInfiniteAnimations.float,
    ...optimizedInfiniteAnimations.rotate
  }), []);
  
  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...optimizedAnimationProps}
    >
      <Head>
        <title>{projectData.title} | Portfolio</title>
        <meta name="description" content={projectData.description} />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Arrière-plan animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-space-gray to-purple-900/80 z-0">
          {/* Effet de vagues animées */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-blue-500/20 to-transparent transform -skew-y-6"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-purple-500/20 to-transparent transform skew-y-6"></div>
          </div>
          
          {/* Effet de grille cybernétique */}
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10 animate-pulse-very-slow"></div>
          
          {/* Effet de lueur radiale */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent animate-pulse-very-slow"></div>
        </div>
        
        {/* Bouton retour avec effet de survol amélioré */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-50">
          <Link href="/#projects">
            <a className="group bg-white/10 backdrop-blur-md text-white font-medium px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 border border-white/10 hover:border-neon-green/50 hover:shadow-glow-sm text-xs sm:text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:text-neon-green transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="relative overflow-hidden">
                <span className="relative z-10 group-hover:text-neon-green transition-colors duration-300">Retour aux projets</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
          </Link>
        </div>
        
        {/* Éléments décoratifs améliorés */}
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl animate-pulse-slow opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-neon-green/5 to-blue-500/5 blur-3xl animate-pulse-slow opacity-70" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl animate-pulse-slow opacity-50" style={{animationDelay: '1.5s'}}></div>
        
        {/* Réseau de connexions blockchain */}
        <div className="absolute inset-0 z-10 overflow-hidden opacity-20">
          {/* Nœuds */}
          <div className="absolute top-[15%] left-[20%] w-2 h-2 bg-neon-green rounded-full shadow-glow-green-sm animate-pulse-slow"></div>
          <div className="absolute top-[65%] left-[15%] w-3 h-3 bg-blue-400 rounded-full shadow-glow-blue-sm animate-pulse-slow" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute top-[35%] left-[80%] w-2 h-2 bg-purple-400 rounded-full shadow-glow-purple-sm animate-pulse-slow" style={{animationDelay: '1.3s'}}></div>
          <div className="absolute top-[75%] left-[75%] w-2 h-2 bg-neon-green rounded-full shadow-glow-green-sm animate-pulse-slow" style={{animationDelay: '0.9s'}}></div>
          <div className="absolute top-[25%] left-[50%] w-3 h-3 bg-blue-400 rounded-full shadow-glow-blue-sm animate-pulse-slow" style={{animationDelay: '1.7s'}}></div>
          <div className="absolute top-[50%] left-[30%] w-2 h-2 bg-purple-400 rounded-full shadow-glow-purple-sm animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-[85%] left-[40%] w-2 h-2 bg-neon-green rounded-full shadow-glow-green-sm animate-pulse-slow" style={{animationDelay: '1.1s'}}></div>
          
          {/* Lignes de connexion */}
          <div className="absolute top-[15%] left-[20%] w-[60%] h-[0.5px] bg-gradient-to-r from-neon-green to-transparent transform rotate-12 origin-left animate-pulse-slow"></div>
          <div className="absolute top-[65%] left-[15%] w-[60%] h-[0.5px] bg-gradient-to-r from-blue-400 to-transparent transform -rotate-6 origin-left animate-pulse-slow" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute top-[35%] left-[20%] w-[60%] h-[0.5px] bg-gradient-to-r from-purple-400 to-transparent transform rotate-[25deg] origin-left animate-pulse-slow" style={{animationDelay: '1.3s'}}></div>
          <div className="absolute top-[25%] left-[50%] w-[30%] h-[0.5px] bg-gradient-to-r from-blue-400 to-transparent transform -rotate-45 origin-left animate-pulse-slow" style={{animationDelay: '1.7s'}}></div>
          <div className="absolute top-[50%] left-[30%] w-[45%] h-[0.5px] bg-gradient-to-r from-purple-400 to-transparent transform rotate-[5deg] origin-left animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Particules et étoiles améliorées */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse-slow shadow-glow-sm"></div>
          <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse-slow shadow-glow-sm" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-white rounded-full animate-pulse-slow shadow-glow-sm" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse-slow shadow-glow-sm" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse-slow shadow-glow-sm" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-white rounded-full animate-pulse-slow shadow-glow-sm" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute top-2/3 right-1/6 w-1 h-1 bg-white rounded-full animate-pulse-slow shadow-glow-sm" style={{animationDelay: '1.9s'}}></div>
          <div className="absolute bottom-2/3 left-1/6 w-1 h-1 bg-white rounded-full animate-pulse-slow shadow-glow-sm" style={{animationDelay: '1.1s'}}></div>
        </div>
        
        {/* Icônes blockchain flottantes améliorées */}
        <div className="absolute top-10 sm:top-16 md:top-20 right-6 sm:right-12 md:right-20 opacity-30 animate-float-slow z-10 hover:opacity-60 transition-opacity duration-500 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 sm:h-18 sm:w-18 md:h-24 md:w-24 text-neon-green drop-shadow-glow-green" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
        </div>
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-6 sm:left-12 md:left-20 opacity-20 animate-float-slow z-10 hover:opacity-50 transition-opacity duration-500 cursor-pointer" style={{animationDelay: '1.2s'}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-blue-400 drop-shadow-glow-blue" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="absolute top-[40%] right-[8%] sm:right-[12%] md:right-[15%] opacity-15 animate-float-slow z-10 hover:opacity-40 transition-opacity duration-500 cursor-pointer hidden sm:block" style={{animationDelay: '0.8s'}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-purple-400 drop-shadow-glow-purple" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
        </div>
        
        {/* Contenu principal */}
        <div className="relative z-10 max-w-5xl px-6 py-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative"
          >
            {/* Effet de lueur derrière le titre */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[120%] h-40 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-neon-green/10 blur-3xl rounded-full"></div>
            
            {/* Titre avec animation de texte */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="relative inline-block">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-neon-green">Bot Flash Loan</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-neon-green rounded-full opacity-70"></span>
              </span>
              <span className="relative inline-block mt-2 md:mt-0 md:ml-2">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-blue-400">Multi-DEX</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-70"></span>
              </span>
              
              {/* Particules autour du titre */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-neon-green rounded-full opacity-70 animate-ping-slow hidden md:block"></div>
              <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-ping-slow hidden md:block" style={{animationDelay: '1.2s'}}></div>
            </motion.h1>
            
            {/* Description avec animation de fade-in */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto relative px-4 sm:px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="relative">
                Un bot d'arbitrage avancé exploitant les opportunités de flash loan sur plusieurs DEX et blockchains simultanément.
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50 animate-expand-line"></span>
              </span>
            </motion.p>
            
            {/* Badges avec animations */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12 px-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div 
                className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-blue-900/30 to-blue-800/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-500/30 backdrop-blur-sm shadow-glow-blue-xs hover:shadow-glow-blue-sm transition-all duration-300 cursor-pointer group text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">7 blockchains</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-purple-900/30 to-purple-800/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-500/30 backdrop-blur-sm shadow-glow-purple-xs hover:shadow-glow-purple-sm transition-all duration-300 cursor-pointer group text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: 0.1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">ROI: 629,22%</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-green-900/30 to-green-800/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-green-500/30 backdrop-blur-sm shadow-glow-green-xs hover:shadow-glow-green-sm transition-all duration-300 cursor-pointer group text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 group-hover:text-green-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">Sécurité avancée</span>
              </motion.div>
            </motion.div>
            
            {/* Bouton avec animation */}
            <motion.div 
              className="mt-10 sm:mt-12 md:mt-16"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button 
                onClick={() => document.getElementById('overview').scrollIntoView({ behavior: 'smooth' })}
                className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-1.5 sm:gap-2 mx-auto overflow-hidden group text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Effet de particules sur le bouton */}
                <span className="absolute inset-0 w-full h-full">
                  <span className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-70 animate-ping-slow hidden sm:block"></span>
                  <span className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white rounded-full opacity-70 animate-ping-slow hidden sm:block" style={{animationDelay: '0.5s'}}></span>
                </span>
                
                {/* Effet de lueur sur le bouton */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/0 via-white/20 to-purple-400/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                
                <span className="relative z-10">Découvrir le projet</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 relative z-10 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Fin du Hero section */}

      {/* Navigation par onglets - Design amélioré */}
      <section id="overview" className="sticky top-0 z-30 bg-gradient-to-r from-space-gray/90 to-dark-blue/90 backdrop-blur-lg border-b border-blue-900/30 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex overflow-x-auto hide-scrollbar py-4 gap-3 md:gap-8 md:justify-center">
              <motion.button
                onClick={() => setActiveTab('overview')}
                animate={activeTab === 'overview' ? 'active' : 'inactive'}
                variants={tabVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 whitespace-nowrap rounded-full transition-all duration-300 ${activeTab === 'overview' ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-neon-green/30 shadow-glow-sm' : 'hover:bg-dark-blue/30'}`}
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
                className={`px-4 py-2 whitespace-nowrap rounded-full transition-all duration-300 ${activeTab === 'features' ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-neon-green/30 shadow-glow-sm' : 'hover:bg-dark-blue/30'}`}
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
                className={`px-4 py-2 whitespace-nowrap rounded-full transition-all duration-300 ${activeTab === 'architecture' ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-neon-green/30 shadow-glow-sm' : 'hover:bg-dark-blue/30'}`}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v3m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Architecture
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => setActiveTab('results')}
                animate={activeTab === 'results' ? 'active' : 'inactive'}
                variants={tabVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 whitespace-nowrap rounded-full transition-all duration-300 ${activeTab === 'results' ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-neon-green/30 shadow-glow-sm' : 'hover:bg-dark-blue/30'}`}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Résultats
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => setActiveTab('stack')}
                animate={activeTab === 'stack' ? 'active' : 'inactive'}
                variants={tabVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 whitespace-nowrap rounded-full transition-all duration-300 ${activeTab === 'stack' ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-neon-green/30 shadow-glow-sm' : 'hover:bg-dark-blue/30'}`}
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
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
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
                
                {/* Dashboard image */}
                <motion.div 
                  variants={itemVariants}
                  className="mt-10 p-4 bg-space-gray/80 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/10 shadow-glow-blue-sm"
                >
                  <div className="relative w-full rounded-lg overflow-hidden border border-blue-500/20">
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-dark-blue/90 to-purple-900/90 py-2 px-4 flex items-center">
                      <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-white text-sm font-medium ml-2">Dashboard Flash Loan Bot</span>
                    </div>
                    <div className="pt-10">
                      <img 
                        src="/images/projects/Dashboard.jpg" 
                        alt="Dashboard du Flash Loan Bot" 
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-dark-blue/90 to-purple-900/90 py-2 px-4">
                      <p className="text-gray-300 text-sm">Interface de surveillance en temps réel des opportunités d'arbitrage et des performances du bot</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              )}
            </AnimatePresence>
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
                      className="glass-effect p-6 rounded-xl border border-blue-500/10 shadow-glow-blue-sm"
                    >
                      <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-blue-400 mb-4">{category.category}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-green to-blue-400 mr-3 animate-pulse-slow"></div>
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
                          <div className="w-full h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-2 shadow-glow-blue-sm border border-blue-500/20">
                            <span className="font-medium text-white">{module.name}</span>
                          </div>
                          
                          {/* Lignes de connexion */}
                          {index < projectData.architecture.length - 1 && (
                            <div className="w-full flex justify-center">
                              <div className="w-8 h-8 border-t-2 border-r-2 border-gray-700 transform rotate-45 translate-x-4"></div>
                            </div>
                          )}
                          
                          {/* Composants */}
                          <div className="mt-4 space-y-2 w-full">
                            {module.components.map((component, compIndex) => (
                              <div key={compIndex} className="bg-space-gray/80 backdrop-blur-sm p-2 rounded text-xs text-center text-gray-300 border border-gray-700/30 hover:border-blue-500/30 transition-colors duration-300">
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

            {activeTab === 'results' && (
              <AnimatePresence mode="wait">
                <motion.div
                  key="results-tab"
                  {...pageTransition}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="mb-16"
                >
                <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Résultats de backtest
                </motion.h2>
                
                {/* Images de backtest */}
                <motion.div variants={itemVariants} className="mb-8">
                  <div className="glass-effect p-4 rounded-xl overflow-hidden border border-blue-500/10 shadow-glow-blue-sm mb-8">
                    <div className="relative w-full rounded-lg overflow-hidden border border-blue-500/20">
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-dark-blue/90 to-purple-900/90 py-2 px-4 flex items-center">
                        <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-white text-sm font-medium ml-2">Évolution du Capital (Backtest 30 jours)</span>
                      </div>
                      <div className="pt-10">
                        <img 
                          src="/images/projects/backtest/backtest-evolution.jpg" 
                          alt="Évolution du capital sur 30 jours" 
                          className="w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-effect p-4 rounded-xl overflow-hidden border border-blue-500/10 shadow-glow-blue-sm">
                    <div className="relative w-full rounded-lg overflow-hidden border border-blue-500/20">
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-dark-blue/90 to-purple-900/90 py-2 px-4 flex items-center">
                        <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-white text-sm font-medium ml-2">Répartition des profits par réseau et stratégie</span>
                      </div>
                      <div className="pt-10">
                        <img 
                          src="/images/projects/backtest/backtest-repartition.jpg" 
                          alt="Répartition des profits par réseau et stratégie" 
                          className="w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Métriques de performance */}
                  <motion.div variants={itemVariants} className="glass-effect p-6 rounded-xl">
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-4">Performance globale</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Capital initial</span>
                        <span className="text-white font-medium">{projectData.results.backtest.initialCapital}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Capital final</span>
                        <span className="text-neon-green font-medium">{projectData.results.backtest.finalCapital}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Profit net</span>
                        <span className="text-neon-green font-medium">{projectData.results.backtest.netProfit}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">ROI</span>
                        <span className="text-neon-green font-medium">{projectData.results.backtest.roi}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">ROI annualisé</span>
                        <span className="text-neon-green font-medium">{projectData.results.backtest.annualizedRoi}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Profit moyen quotidien</span>
                        <span className="text-white font-medium">{projectData.results.backtest.avgDailyProfit}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Taux de réussite</span>
                        <span className="text-white font-medium">{projectData.results.backtest.successRate}</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Performance par réseau */}
                  <motion.div variants={itemVariants} className="glass-effect p-6 rounded-xl">
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-4">Performance par réseau</h3>
                    
                    <div className="space-y-4">
                      {projectData.results.networkPerformance.map((network, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full mr-3 shadow-glow-xs" style={{ backgroundColor: `hsl(${index * 40}, 70%, 60%)` }}></div>
                            <span className="text-gray-300">{network.network}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-neon-green font-medium mr-4">{network.profit}</span>
                            <span className="text-xs text-gray-400">({network.opportunities} opp.)</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Performance par stratégie */}
                <motion.div variants={itemVariants} className="glass-effect p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-4">Performance par stratégie</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {projectData.results.strategyPerformance.map((strategy, index) => (
                      <div key={index} className="bg-space-gray/50 backdrop-blur-sm p-4 rounded-lg border border-blue-500/10 hover:border-neon-green/30 transition-all duration-300">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full mb-3 flex items-center justify-center" style={{ backgroundColor: `hsl(${index * 45}, 70%, 60%)` }}>
                            <span className="text-dark-blue font-bold text-lg">{index + 1}</span>
                          </div>
                          <h4 className="text-white font-medium text-center mb-2">{strategy.strategy}</h4>
                          <div className="text-neon-green font-bold text-lg mb-1">{strategy.profit}</div>
                          <div className="text-xs text-gray-400">{strategy.opportunities} opportunités</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
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
                        className="glass-effect p-4 rounded-lg border border-blue-500/10 w-full sm:w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] min-w-0"
                        whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(0, 255, 157, 0.3)' }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 flex items-center justify-center mr-3 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full border border-blue-500/20">
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
      <section className="py-16 bg-gradient-to-r from-dark-blue to-tech-blue relative overflow-hidden">
        {/* Particules d'arrière-plan */}
        <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-neon-green/50 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-blue-400/50 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 rounded-full bg-purple-400/50 animate-float" style={{animationDelay: '2s'}}></div>
        {/* Effet de lueur */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-green/10 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-4 text-center max-w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">Intéressé par ce type de projets ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            Je développe des solutions de trading algorithmique et d'arbitrage crypto sur mesure. Discutons de votre projet et des possibilités d'implémentation.
          </p>
          <Link href="/#contact" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 157, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-green to-blue-400 text-dark-blue font-medium rounded-lg hover:from-white hover:to-white transition-all duration-300 shadow-glow-green-sm"
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
}

export default FlashLoanBotProject;
