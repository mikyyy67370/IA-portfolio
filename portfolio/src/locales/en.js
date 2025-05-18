// English translations
const en = {
  // Navigation
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    services: "Services",
    contact: "Contact",
  },
  
  // Hero Section
  hero: {
    title: "MIKAEL LECLERC, 25 YEARS OLD | AI & AUTOMATION EXPERT",
    heading1: "Development of",
    heading2: "AI solutions",
    heading3: "for complex needs",
    description: "Specialized in designing autonomous systems and intelligent bots that optimize processes and generate measurable results.",
    stats: {
      years: "5+",
      yearsLabel: "Years of experience",
      projects: "50+",
      projectsLabel: "Projects completed",
      satisfaction: "100%",
      satisfactionLabel: "Client satisfaction",
    },
    cta: "Explore my projects",
  },
  
  // About Section
  about: {
    subtitle: "Discover",
    title: "About me",
    career: {
      title: "Professional background",
      description: "My name is Mikael Leclerc, I'm 25 years old and I'm an artificial intelligence engineer and developer specialized in creating autonomous systems. I have developed expertise in designing advanced bots and automation solutions for various sectors.",
    },
    approach: {
      title: "My approach",
      description: "I combine technical expertise and strategic vision to create custom solutions that precisely meet the specific needs of each project. My methodology is based on a deep understanding of the issues and iterative development.",
    },
    techStack: "Tech stack",
    categories: {
      all: "All",
      languages: "Languages",
      ai: "AI",
      frontend: "Frontend",
      backend: "Backend",
      blockchain: "Blockchain",
      devops: "DevOps",
      cloud: "Cloud",
      database: "Database",
    },
    expertTitle: "AI & Bots Expert",
    expertDesc: "Transforming complex ideas into concrete technological solutions",
  },
  
  // Skills Section
  skills: {
    description: "Technical expertise in various fields of artificial intelligence and development",
    domains: {
      ai: "AI & Machine Learning",
      backend: "Back-End Development",
      web3: "Web3 & Crypto",
      automation: "Automation & Bots",
      devops: "DevOps & Monitoring"
    },
    viewProjects: "View related projects",
    skills: {
      ai: [
        "Prediction",
        "Reinforcement Learning",
        "NLP",
        "Federated Learning"
      ],
      backend: [
        "Modular Architecture",
        "Threading",
        "REST API",
        "Databases"
      ],
      web3: [
        "Flash Loans",
        "Multi-DEX Arbitrage",
        "MEV Protection",
        "Smart Contracts"
      ],
      automation: [
        "Scheduling",
        "Risk Control",
        "Real-time Interaction",
        "Monitoring"
      ],
      devops: [
        "Security",
        "Alerts",
        "Streamlit Interface",
        "Continuous Deployment"
      ]
    }
  },

  // Projects Section
  projects: {
    subtitle: "My portfolio",
    title: "Recent projects",
    viewProject: "View project",
    featuredTitle: "Featured Projects",
    featuredDescription: "Discover my most innovative achievements in artificial intelligence and automation",
    projectNumber: "Project",
    keyFeatures: "Key Features",
    viewDetails: "View details",
    flashLoanBot: {
      title: "Multi-DEX Flash Loan Bot",
      description: "An advanced arbitrage bot leveraging flash loan opportunities across multiple DEXs and blockchains simultaneously.",
      overview: "This bot represents the state of the art in crypto arbitrage, combining 22 advanced features across 5 main categories. Designed to operate 24/7 on 7 different blockchain networks, it can identify and execute arbitrage opportunities in milliseconds.",
      stackTitle: "Tech stack",
      ctaTitle: "Interested in this type of project?",
      ctaDescription: "I can develop similar solutions tailored to your specific needs, whether it's arbitrage, algorithmic trading, or other autonomous systems.",
      ctaButton: "Let's discuss your project",
      features: {
        0: "Multi-chain arbitrage (Ethereum, BSC, Polygon, Avalanche, etc.)",
        1: "MEV extraction with Flashbots",
        2: "Predictive AI for price analysis",
        3: "Multi-threading for parallel execution",
        4: "Transaction obfuscation techniques",
        main: "Core Features",
        ai: "Advanced AI Features",
        execution: "Execution Features",
        security: "Security and Monitoring",
        main: {
          0: "MEV Extraction with Flashbots",
          1: "Multi-Chain Arbitrage",
          2: "Strategic AI",
          3: "Multi-Threading",
          4: "Transaction Obfuscation"
        },
        ai: {
          0: "Predictive Analysis (TensorFlow.js with LSTM)",
          1: "Sentiment Analysis (BERT)",
          2: "Pattern Recognition",
          3: "Anomaly Detection",
          4: "Reinforcement Learning"
        },
        execution: {
          0: "Wallet Rotation",
          1: "Gas Optimization",
          2: "Intelligent Routing",
          3: "Liquidity Aggregation",
          4: "Security Protocols"
        },
        security: {
          0: "Transaction Privacy",
          1: "Anti-MEV Protection",
          2: "Sandboxed Execution",
          3: "Real-time Monitoring",
          4: "Auto-Recovery"
        }
      },
      architecture: {
        coreEngine: "Core Engine",
        coreEngineDesc: "Main engine managing arbitrage opportunities and flash loan execution",
        networkLayer: "Network Layer",
        networkLayerDesc: "Managing connections to different blockchain networks",
        aiModule: "AI Module",
        aiModuleDesc: "Artificial intelligence components for prediction and optimization",
        securityLayer: "Security Layer",
        securityLayerDesc: "Security and obfuscation mechanisms",
        monitoringSystem: "Monitoring System",
        monitoringSystemDesc: "Real-time monitoring system"
      },
      stack: ["TypeScript", "Web3.js", "TensorFlow.js", "Node.js", "Ethers.js"],
      flashLoanBotStackJavaScript: "JavaScript",
      flashLoanBotStackSolidity: "Solidity",
      flashLoanBotStackWeb3js: "Web3.js",
      flashLoanBotStackEthersjs: "Ethers.js",
      flashLoanBotStackTensorFlowjs: "TensorFlow.js",
      flashLoanBotStackNodejs: "Node.js",
      flashLoanBotStackReact: "React",
      flashLoanBotStackMongoDB: "MongoDB",
      flashLoanBotStackDocker: "Docker",
      
      flashLoanBotStackDescJavaScript: "Main language for business logic",
      flashLoanBotStackDescSolidity: "Smart contracts for flash loans",
      flashLoanBotStackDescWeb3js: "Blockchain interaction",
      flashLoanBotStackDescEthersjs: "Alternative library for certain chains",
      flashLoanBotStackDescTensorFlowjs: "Machine learning models",
      flashLoanBotStackDescNodejs: "Backend and strategy execution",
      flashLoanBotStackDescReact: "Monitoring interface",
      flashLoanBotStackDescMongoDB: "Data storage and logging",
      flashLoanBotStackDescDocker: "Deployment and scaling"
    },
    tradingBot: {
      title: "Professional AI Trading Bot",
      description: "An algorithmic trading solution using artificial intelligence to predict market movements and execute optimized strategies.",
      overview: "This advanced trading bot combines multiple artificial intelligence techniques to analyze markets, predict price movements, and execute optimized trading strategies. Its modular design allows for great flexibility and adaptability to different markets and conditions.",
      stackTitle: "Tech stack",
      ctaTitle: "Need an intelligent trading system?",
      ctaDescription: "I can develop custom algorithmic trading solutions tailored to your specific strategies and markets, with intuitive interfaces for monitoring and configuration.",
      ctaButton: "Let's discuss your project",
      carousel: {
        dashboard: "Trading bot dashboard",
        performance: "Performance metrics",
        signals: "Trading signals",
        config: "Bot configuration",
        strategies: "Trading strategies",
        strategyList: "List of available strategies",
        notifications: "Notification settings"
      },
      features: {
        0: "Reinforcement learning for strategy optimization",
        1: "Advanced risk management with dynamic stop-losses",
        2: "Streamlit user interface for real-time monitoring",
        3: "Backtesting with historical data",
        4: "Multi-exchange integration (Binance, FTX, Coinbase)",
        ai: "Artificial Intelligence",
        risk: "Risk Management",
        execution: "Execution and Monitoring",
        strategies: "Trading Strategies",
        ai: {
          0: "LSTM models for price prediction",
          1: "Reinforcement learning (DQN and PPO)",
          2: "Social media sentiment analysis",
          3: "Anomaly and pattern detection",
          4: "Bayesian hyperparameter optimization"
        },
        risk: {
          0: "Dynamic stop-loss and take-profit",
          1: "Adaptive capital allocation",
          2: "Automatic portfolio diversification",
          3: "Drawdown detection and adjustment",
          4: "Market exposure limits"
        },
        execution: {
          0: "Multi-strategy execution",
          1: "Real-time monitoring",
          2: "Advanced backtesting",
          3: "Automatic alerts and notifications",
          4: "Detailed transaction logging"
        },
        strategies: {
          0: "Adaptive mean reversion",
          1: "Trend following with AI filters",
          2: "Multi-asset statistical arbitrage",
          3: "Event trading with NLP",
          4: "Volatility strategies"
        }
      },
      architecture: {
        dataModule: "Data Module",
        dataModuleDesc: "Market data collection and preprocessing",
        aiModule: "AI Engine",
        aiModuleDesc: "Artificial intelligence engines for analysis and prediction",
        coreEngine: "Strategy Manager",
        coreEngineDesc: "Management and execution of trading strategies",
        riskManager: "Risk Manager",
        riskManagerDesc: "Dynamic risk management and capital allocation",
        executionLayer: "Execution Engine",
        executionLayerDesc: "Order execution and exchange interaction",
        backtestingEngine: "Backtesting Engine",
        backtestingEngineDesc: "Simulation and analysis system for strategies on historical data"
      },
      performance: {
        metrics: {
          0: "Annualized return",
          1: "Sharpe ratio",
          2: "Maximum drawdown",
          3: "Success rate",
          4: "Average profit / average loss"
        }
      },
      stack: ["Python", "TensorFlow", "Streamlit", "Pandas", "ccxt"],
      tradingBotStackPython: "Python",
      tradingBotStackTensorFlow: "TensorFlow",
      tradingBotStackPyTorch: "PyTorch",
      tradingBotStackPandas: "Pandas",
      tradingBotStackNumpy: "Numpy",
      tradingBotStackScikitlearn: "Scikit-learn",
      tradingBotStackStreamlit: "Streamlit",
      tradingBotStackDocker: "Docker",
      tradingBotStackAWS: "AWS",
      
      tradingBotStackDescPython: "Main language for bot development",
      tradingBotStackDescTensorFlow: "Framework for deep learning models",
      tradingBotStackDescPyTorch: "Alternative framework for specific models",
      tradingBotStackDescPandas: "Financial data manipulation and analysis",
      tradingBotStackDescNumpy: "Optimized numerical and vector calculations",
      tradingBotStackDescScikitlearn: "Classical machine learning algorithms",
      tradingBotStackDescStreamlit: "Interactive user interface",
      tradingBotStackDescDocker: "Containerization for deployment",
      tradingBotStackDescAWS: "Cloud infrastructure for hosting",
      overview: "Overview",
      architecture: "Architecture",
      performance: "Performance",
      techStack: "Tech stack",
      interface: "Interface",
      demo: "Trading Bot Interface",
      demoDesc: "Streamlit interface of the bot and its features",
      interfaceFeatures: {
        dashboard: "Dashboard with real-time metrics",
        signals: "Trading signals with confidence level",
        risk: "Risk parameter configuration",
        strategies: "Trading strategy customization",
      },
    },

  },
  
  // Services Section
  services: {
    title: "Services",
    description: "I offer the following services",
    subtitle: "Services offered",
    sectionDescription: "Tailored solutions to meet your needs in artificial intelligence, automation, and autonomous system development.",

    customDev: {
      title: "Custom Development",
      description: "Creation of intelligent autonomous systems tailored to your specific needs, with a modular and scalable architecture.",
      features: {
        0: "Modular and scalable architecture",
        1: "Complete and maintainable documentation",
        2: "Automated testing and continuous deployment",
        3: "Support and maintenance"
      }
    },
    aiSolutions: {
      title: "Advanced AI Solutions",
      description: "Design and implementation of artificial intelligence models to solve complex problems and optimize your processes.",
      features: {
        0: "Predictive models (LSTM, Transformers)",
        1: "Reinforcement learning",
        2: "Bayesian hyperparameter optimization",
        3: "Sentiment analysis and NLP"
      }
    },
    consulting: {
      title: "Technical Consulting",
      description: "Analysis and optimization of your existing systems to improve efficiency.",
      features: {
        0: "Code and algorithm optimization",
        1: "Detailed recommendations",
        2: "Performance and security audit",
        3: "Technical strategy and roadmap"
      }
    },
    automation: {
      title: "Intelligent Automation",
      description: "Implementation of automation systems to reduce repetitive tasks and increase productivity.",
      features: {
        0: "Web scraping and data collection",
        1: "Business process automation",
        2: "Monitoring and alert bots",
        3: "Integration with your existing systems"
      }
    },
    training: {
      title: "Custom UI/UX Website",
      description: "Creation of modern and responsive websites with optimal user experience and custom design.",
      features: {
        0: "Custom and modern UI/UX design",
        1: "Intuitive and optimized user experience",
        2: "Fully responsive websites",
        3: "Integration of advanced features"
      }
    },
    cta: {
      title: "Need a custom solution?",
      description: "Each project is unique. Contact me to discuss your specific needs and discover how I can help you achieve your goals.",
      button: "Let's discuss your project"
    },
  },
  
  // Contact Section
  contact: {
    subtitle: "Let's discuss your project",
    title: "Contact Me",
    description: "Interested in my services or have a question? Feel free to contact me.",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send",
    success: "Message sent successfully!",
    error: "An error occurred. Please try again.",
    contactInfo: "Contact Information",
    socialMedia: "Social Media",
    schedule: "Schedule a Call",
    scheduleDescription: "Would you prefer to schedule a call? Book a time slot directly in my calendar.",
    scheduleButton: "Book a Call",
    phone: "Phone",
    location: "Location",
  },
  
  // Language Selector
  language: {
    fr: "French",
    en: "English",
    de: "German",
    ar: "Arabic",
  },

  // Footer
  footer: {
    description: "Artificial Intelligence Engineer and automation bot developer, specialized in creating intelligent, scalable, and secure autonomous systems.",
    copyright: "AI Portfolio. All rights reserved.",
    privacy: "Privacy Policy",
    legal: "Legal Notice",
  },
};
export default en;
