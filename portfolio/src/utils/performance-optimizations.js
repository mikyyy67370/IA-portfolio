/**
 * Performance Optimizations
 * 
 * Ce fichier contient des fonctions et des constantes pour optimiser les performances
 * des animations et du rendu dans l'ensemble du portfolio.
 */
import React from 'react';

// Optimisations pour les animations Framer Motion
export const optimizedAnimationProps = {
  // Utilise ces propriétés pour activer l'accélération matérielle
  transformTemplate: (props) => `translateZ(0) ${props}`,
  style: { 
    willChange: 'transform, opacity',
  }
};

// Variantes d'animation optimisées pour la performance
export const optimizedVariants = {
  // Conteneur avec staggering optimisé
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.03,
      },
    },
  },
  
  // Items avec animations plus légères
  item: {
    hidden: { y: 8, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  
  // Transitions de page plus rapides
  page: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: 0.2, ease: "easeInOut" }
  },
  
  // Animations d'hover plus légères
  hover: {
    scale: 1.02,
    transition: { duration: 0.15 }
  }
};

// Optimisations pour les composants avec beaucoup d'éléments
export const optimizeRenderPerformance = (Component) => {
  return React.memo(Component, (prevProps, nextProps) => {
    // Logique de comparaison personnalisée si nécessaire
    return true; // Par défaut, utilise la comparaison superficielle de React.memo
  });
};

// Constantes pour les animations infinies (tokens, particules, etc.)
export const optimizedInfiniteAnimations = {
  // Pour les tokens et éléments flottants
  float: {
    y: [-5, 5, -5],
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut",
      // Utiliser des valeurs plus faibles pour les rotations
      repeatType: "mirror"
    }
  },
  
  // Pour les rotations 3D (plus légères)
  rotate: {
    rotateY: [0, 180, 360],
    transition: { 
      duration: 6, 
      repeat: Infinity, 
      ease: "linear" 
    }
  }
};

// Optimisations pour les images et les arrière-plans
export const optimizedImageRendering = {
  // Propriétés pour les images de fond
  backgroundImage: {
    loading: "lazy",
    decoding: "async",
    style: { 
      transform: "translateZ(0)",
      backfaceVisibility: "hidden"
    }
  }
};
