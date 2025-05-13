import React from 'react';
import Navbar from '../navigation/Navbar';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import AIParticles from '../ui/AIParticles';

const Layout = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="min-h-screen bg-primary transition-colors duration-500 ai-background">
      <AIParticles />
      <Navbar />
      <main>{children}</main>
      
      {/* Motifs d'arrière-plan liés à l'IA */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Motif de circuit */}
        <div className="absolute inset-0 circuit-bg opacity-10"></div>
        
        {/* Flux de données */}
        <div className="absolute inset-0 data-flow-bg opacity-15"></div>
        
        {/* Particules IA */}
        <div className="ai-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="ai-particle" 
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                opacity: Math.random() * 0.3,
                background: i % 3 === 0 ? 'var(--neon-green)' : i % 3 === 1 ? 'var(--tech-blue)' : 'var(--purple)'
              }}
            />
          ))}
        </div>
        {/* Cercles lumineux flottants */}
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            top: '10%',
            left: '5%',
            background: isDark 
              ? 'radial-gradient(circle, rgba(0,191,255,0.1) 0%, rgba(0,191,255,0) 70%)'
              : 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(56,189,248,0) 70%)',
            filter: 'blur(40px)',
            opacity: isDark ? 0.6 : 0.5
          }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        
        <motion.div
          className="absolute w-80 h-80 rounded-full"
          style={{
            top: '60%',
            right: '10%',
            background: isDark
              ? 'radial-gradient(circle, rgba(57,255,20,0.1) 0%, rgba(57,255,20,0) 70%)'
              : 'radial-gradient(circle, rgba(74,222,128,0.15) 0%, rgba(74,222,128,0) 70%)',
            filter: 'blur(40px)',
            opacity: isDark ? 0.6 : 0.5
          }}
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        
        <motion.div
          className="absolute w-72 h-72 rounded-full"
          style={{
            bottom: '15%',
            left: '20%',
            background: isDark
              ? 'radial-gradient(circle, rgba(157,78,221,0.1) 0%, rgba(157,78,221,0) 70%)'
              : 'radial-gradient(circle, rgba(167,139,250,0.15) 0%, rgba(167,139,250,0) 70%)',
            filter: 'blur(40px)',
            opacity: isDark ? 0.6 : 0.5
          }}
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </div>
    </div>
  );
};

export default Layout;
