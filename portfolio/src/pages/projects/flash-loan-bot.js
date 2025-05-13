import React, { useEffect, useState, useMemo } from 'react';
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
      transition={{ duration: 0.3 }} // Durée réduite pour une transition plus rapide
      {...optimizedAnimationProps} // Ajout des optimisations pour l'accélération matérielle
    >
      <Head>
        <title>{projectData.title} | Portfolio</title>
        <meta name="description" content={projectData.description} />
      </Head>

      {/* Hero du projet - Design amélioré avec tokens 3D animés */}
      <section className="relative min-h-[80vh] md:min-h-[70vh] flex items-center overflow-hidden">
        {/* Arrière-plan avec gradient animé - optimisé */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-dark-blue z-0"
          style={{ transform: 'translateZ(0)', willChange: 'auto' }} // Optimisation GPU pour l'arrière-plan
        >
        </div>
        
        {/* Effet de lueur amélioré - optimisé avec taille réduite du flou */}
        <div 
          className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-600/30 blur-[80px] rounded-full"
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }} // Optimisation GPU pour les effets de flou
        ></div>
        <div 
          className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-purple-600/30 blur-[80px] rounded-full"
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }} // Optimisation GPU pour les effets de flou
        ></div>
        
        {/* Tokens 3D animés */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Token ETH - Animation optimisée avec le nouveau système */}
          <motion.div 
            className="absolute top-1/4 left-1/5"
            initial={{ y: 0, scale: 1 }}
            animate={tokenAnimation}
            {...optimizedAnimationProps}
          >
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 bg-blue-500/30 backdrop-blur-md rounded-full shadow-glow-blue-sm transform-gpu" />
              <div className="absolute inset-[15%] bg-blue-400/40 backdrop-blur-md rounded-full shadow-glow-blue-sm transform-gpu" />
              <div className="absolute inset-[30%] bg-blue-300/50 backdrop-blur-md rounded-full shadow-glow-blue-sm transform-gpu" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xl">ETH</span>
              </div>
            </div>
          </motion.div>
          
          {/* Token BTC - Animation optimisée avec le nouveau système */}
          <motion.div 
            className="absolute top-1/3 right-1/4"
            initial={{ y: 0, scale: 1 }}
            animate={tokenAnimation}
            transition={{ delay: 0.5 }}
            {...optimizedAnimationProps}
          >
            <div className="w-14 h-14 relative">
              <div className="absolute inset-0 bg-orange-500/30 backdrop-blur-md rounded-full shadow-glow-orange-sm transform-gpu" />
              <div className="absolute inset-[15%] bg-orange-400/40 backdrop-blur-md rounded-full shadow-glow-orange-sm transform-gpu" />
              <div className="absolute inset-[30%] bg-orange-300/50 backdrop-blur-md rounded-full shadow-glow-orange-sm transform-gpu" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg">BTC</span>
              </div>
            </div>
          </motion.div>
          
          {/* Token USDT */}
          <motion.div 
            className="absolute bottom-1/3 left-1/3"
            initial={{ y: 0, scale: 1 }}
            animate={{ y: [-5, 15, -5], rotateY: [0, 120, 240, 360], rotateX: [5, -15, 5], scale: [1, 1.03, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="w-12 h-12 relative">
              <div className="absolute inset-0 bg-green-500/30 backdrop-blur-md rounded-full shadow-glow-green-sm transform-gpu" />
              <div className="absolute inset-[15%] bg-green-400/40 backdrop-blur-md rounded-full shadow-glow-green-sm transform-gpu" />
              <div className="absolute inset-[30%] bg-green-300/50 backdrop-blur-md rounded-full shadow-glow-green-sm transform-gpu" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm">USDT</span>
              </div>
            </div>
          </motion.div>
          
          {/* Token LINK */}
          <motion.div 
            className="absolute top-2/3 right-1/5"
            initial={{ y: 0, scale: 1 }}
            animate={{ y: [8, -12, 8], rotateY: [0, -240, -360], rotateX: [15, -5, 15], scale: [1, 1.06, 1] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 bg-blue-600/30 backdrop-blur-md rounded-full shadow-glow-blue-sm transform-gpu" />
              <div className="absolute inset-[15%] bg-blue-500/40 backdrop-blur-md rounded-full shadow-glow-blue-sm transform-gpu" />
              <div className="absolute inset-[30%] bg-blue-400/50 backdrop-blur-md rounded-full shadow-glow-blue-sm transform-gpu" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xs">LINK</span>
              </div>
            </div>
          </motion.div>
          
          {/* Token UNI */}
          <motion.div 
            className="absolute bottom-1/4 right-1/3"
            initial={{ y: 0, scale: 1 }}
            animate={{ y: [-8, 12, -8], rotateY: [0, 210, 360], rotateX: [-15, 5, -15], scale: [1, 1.04, 1] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="w-12 h-12 relative">
              <div className="absolute inset-0 bg-pink-500/30 backdrop-blur-md rounded-full shadow-glow-pink-sm transform-gpu" />
              <div className="absolute inset-[15%] bg-pink-400/40 backdrop-blur-md rounded-full shadow-glow-pink-sm transform-gpu" />
              <div className="absolute inset-[30%] bg-pink-300/50 backdrop-blur-md rounded-full shadow-glow-pink-sm transform-gpu" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm">UNI</span>
              </div>
            </div>
          </motion.div>
          
          {/* Token AAVE */}
          <motion.div 
            className="absolute top-1/2 left-1/6"
            initial={{ y: 0, scale: 1 }}
            animate={tokenAnimation}
            transition={{ delay: 2.5 }}
            {...optimizedAnimationProps}
          >
            <div className="w-11 h-11 relative">
              <div className="absolute inset-0 bg-purple-500/30 backdrop-blur-md rounded-full shadow-glow-purple-sm transform-gpu" />
              <div className="absolute inset-[15%] bg-purple-400/40 backdrop-blur-md rounded-full shadow-glow-purple-sm transform-gpu" />
              <div className="absolute inset-[30%] bg-purple-300/50 backdrop-blur-md rounded-full shadow-glow-purple-sm transform-gpu" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xs">AAVE</span>
              </div>
            </div>
          </motion.div>
          
          {/* Token MATIC - optimisé */}
          <motion.div 
            className="absolute top-1/6 right-1/6"
            initial={{ y: 0, scale: 1 }}
            animate={tokenAnimation}
            transition={{ delay: 0.7 }}
            {...optimizedAnimationProps}
          >
            <div className="w-13 h-13 relative">
              <div className="absolute inset-0 bg-purple-600/30 backdrop-blur-md rounded-full shadow-glow-purple-sm transform-gpu" />
              <div className="absolute inset-[15%] bg-purple-500/40 backdrop-blur-md rounded-full shadow-glow-purple-sm transform-gpu" />
              <div className="absolute inset-[30%] bg-purple-400/50 backdrop-blur-md rounded-full shadow-glow-purple-sm transform-gpu" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MATIC</span>
              </div>
            </div>
          </motion.div>
          
          {/* Token DAI - optimisé */}
          <motion.div 
            className="absolute bottom-1/6 left-1/4"
            initial={{ y: 0, scale: 1 }}
            animate={tokenAnimation}
            transition={{ delay: 1.2 }}
            {...optimizedAnimationProps}
          >
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 bg-yellow-500/30 backdrop-blur-md rounded-full shadow-glow-orange-sm transform-gpu" />
              <div className="absolute inset-[15%] bg-yellow-400/40 backdrop-blur-md rounded-full shadow-glow-orange-sm transform-gpu" />
              <div className="absolute inset-[30%] bg-yellow-300/50 backdrop-blur-md rounded-full shadow-glow-orange-sm transform-gpu" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xs">DAI</span>
              </div>
            </div>
          </motion.div>
          
          {/* Token COMP */}
          <motion.div 
            className="absolute top-3/5 left-2/5"
            initial={{ y: 0, scale: 1 }}
            animate={{ y: [-7, 13, -7], rotateY: [0, 90, 180, 270, 360], rotateX: [0, 10, 0, -10, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          >
            <div className="w-9 h-9 relative">
              <div className="absolute inset-0 bg-green-600/30 backdrop-blur-md rounded-full shadow-glow-green-sm transform-gpu" />
              <div className="absolute inset-[15%] bg-green-500/40 backdrop-blur-md rounded-full shadow-glow-green-sm transform-gpu" />
              <div className="absolute inset-[30%] bg-green-400/50 backdrop-blur-md rounded-full shadow-glow-green-sm transform-gpu" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xs">COMP</span>
              </div>
            </div>
          </motion.div>
          
          {/* Token SOL */}
          <motion.div 
            className="absolute bottom-2/5 right-2/5"
            initial={{ y: 0, scale: 1 }}
            animate={{ y: [9, -11, 9], rotateY: [0, -90, -180, -270, -360], rotateX: [0, -10, 0, 10, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 9.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          >
            <div className="w-11 h-11 relative">
              <div className="absolute inset-0 bg-purple-400/30 backdrop-blur-md rounded-full shadow-glow-purple-sm transform-gpu" />
              <div className="absolute inset-[15%] bg-purple-300/40 backdrop-blur-md rounded-full shadow-glow-purple-sm transform-gpu" />
              <div className="absolute inset-[30%] bg-purple-200/50 backdrop-blur-md rounded-full shadow-glow-purple-sm transform-gpu" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SOL</span>
              </div>
            </div>
          </motion.div>
          
          {/* Lignes de connexion entre tokens */}
          <svg className="absolute inset-0 w-full h-full z-0 opacity-30" xmlns="http://www.w3.org/2000/svg">
            <line x1="20%" y1="25%" x2="33%" y2="33%" stroke="#4F46E5" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="33%" y1="33%" x2="20%" y2="50%" stroke="#4F46E5" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="33%" y1="33%" x2="40%" y2="60%" stroke="#4F46E5" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="33%" y1="33%" x2="60%" y2="40%" stroke="#4F46E5" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="60%" y1="40%" x2="75%" y2="20%" stroke="#4F46E5" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="60%" y1="40%" x2="80%" y2="67%" stroke="#4F46E5" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="40%" y1="60%" x2="25%" y2="83%" stroke="#4F46E5" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="40%" y1="60%" x2="67%" y2="75%" stroke="#4F46E5" strokeWidth="1" strokeDasharray="5,5" />
          </svg>
        </div>
        
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative rounded-2xl overflow-hidden shadow-glow-blue mb-6 lg:mb-0"
                >
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-dark-blue to-space-gray p-6 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full max-w-[300px] max-h-[300px] relative">
                        {/* Cercles concentriques animés */}
                        <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-ping-slow"></div>
                        <div className="absolute inset-[10%] border-2 border-purple-500/30 rounded-full animate-ping-slow" style={{animationDelay: '0.5s'}}></div>
                        <div className="absolute inset-[20%] border-2 border-neon-green/30 rounded-full animate-ping-slow" style={{animationDelay: '1s'}}></div>
                        
                        {/* Logo central */}
                        <div className="absolute inset-[30%] bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-4xl font-bold text-white">FL</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Lignes de code simulées */}
                    <div className="absolute bottom-4 left-4 right-4 bg-space-gray/80 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50 overflow-hidden">
                      <div className="text-xs text-gray-300 font-mono">
                        <div><span className="text-blue-400">async</span> <span className="text-neon-green">function</span> <span className="text-yellow-400">executeArbitrage</span>() &#123;</div>
                        <div className="pl-4"><span className="text-purple-400">const</span> opportunity = <span className="text-yellow-400">await</span> scanner.<span className="text-blue-400">findBestOpportunity</span>();</div>
                        <div className="pl-4"><span className="text-purple-400">return</span> flashLoan.<span className="text-blue-400">execute</span>(opportunity);</div>
                        <div>&#125;</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div>
                <motion.h1 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neon-green mb-4"
                >
                  {projectData.title}
                </motion.h1>
                
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-white/90 mb-6"
                >
                  {projectData.description}
                </motion.p>
                
                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center bg-blue-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-gray-300">7 blockchains</span>
                  </div>
                  
                  <div className="flex items-center bg-purple-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-gray-300">ROI: {projectData.results.backtest.roi}</span>
                  </div>
                  
                  <div className="flex items-center bg-green-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-300">Sécurité avancée</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation par onglets - Design amélioré */}
      <section className="sticky top-0 z-30 bg-gradient-to-r from-space-gray/90 to-dark-blue/90 backdrop-blur-lg border-b border-blue-900/30 shadow-xl">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
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
                        className="glass-effect p-4 rounded-lg border border-blue-500/10 w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Intéressé par ce type de projets ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Je développe des solutions de trading algorithmique et d'arbitrage crypto sur mesure. Discutons de votre projet et des possibilités d'implémentation.
          </p>
          <Link href="/#contact">
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
};

export default FlashLoanBotProject;
