import '../styles/globals.css';
import '../styles/modern-ui.css';
import '../styles/themes.css';
import '../styles/ai-patterns.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import { optimizedAnimationProps } from '../utils/performance-optimizations';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AnimatePresence 
          mode="wait" 
          initial={false} // Évite l'animation au premier rendu
          exitBeforeEnter={true} // Assure une transition plus fluide
          onExitComplete={() => window.scrollTo(0, 0)} // Réinitialise le scroll après les transitions
        >
          <Component 
            {...pageProps} 
            key={router.route} 
            {...optimizedAnimationProps} // Applique les optimisations à tous les composants
          />
        </AnimatePresence>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default MyApp;
