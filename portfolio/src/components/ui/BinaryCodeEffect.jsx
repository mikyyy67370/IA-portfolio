import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const BinaryCodeEffect = ({ width = '100%', height = '100%', opacity = 0.15 }) => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let columns = [];
    let fontSize = 12;

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // Nombre de colonnes basé sur la largeur du canvas
      const columnCount = Math.floor(canvas.width / fontSize);
      
      // Réinitialiser les colonnes
      columns = [];
      for (let i = 0; i < columnCount; i++) {
        // Position Y aléatoire pour chaque colonne
        columns[i] = Math.random() * canvas.height;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Fonction pour dessiner le code binaire
    const draw = () => {
      // Fond semi-transparent pour créer un effet de traînée
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Couleur du texte basée sur le thème
      ctx.fillStyle = isDark 
        ? 'rgba(57, 255, 20, 0.7)' // Vert néon pour le thème sombre
        : 'rgba(74, 222, 128, 0.7)'; // Vert plus doux pour le thème clair
      ctx.font = `${fontSize}px monospace`;
      
      // Dessiner les caractères pour chaque colonne
      for (let i = 0; i < columns.length; i++) {
        // Caractère aléatoire (0 ou 1)
        const char = Math.random() < 0.5 ? '0' : '1';
        
        // Position X basée sur l'index de la colonne
        const x = i * fontSize;
        // Position Y basée sur la valeur de la colonne
        const y = columns[i];
        
        // Dessiner le caractère
        ctx.fillText(char, x, y);
        
        // Faire descendre la colonne
        columns[i] += fontSize;
        
        // Si la colonne atteint le bas, la réinitialiser avec une probabilité
        if (columns[i] > canvas.height && Math.random() > 0.975) {
          columns[i] = 0;
        }
      }
      
      animationFrameId = window.requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        width, 
        height, 
        opacity,
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none'
      }} 
    />
  );
};

export default BinaryCodeEffect;
