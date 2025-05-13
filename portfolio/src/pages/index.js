import Head from 'next/head';
import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/hero/HeroSection';
import AboutSection from '../components/about/AboutSection';
import SkillsSection from '../components/skills/SkillsSection';
import ProjectsSection from '../components/projects/ProjectsSection';
import ServicesSection from '../components/services/ServicesSection';
import ContactSection from '../components/contact/ContactSection';
import Footer from '../components/footer/Footer';
import { optimizedAnimationProps, optimizedVariants } from '../utils/performance-optimizations';

export default function Home() {
  // Effet pour désactiver le défilement horizontal
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  // Utilisation des animations optimisées pour améliorer la fluidité
  const pageAnimation = useMemo(() => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 } // Durée réduite pour une transition plus rapide
  }), []);

  return (
    <motion.div
      {...pageAnimation}
      {...optimizedAnimationProps}
    >
      <Head>
        <title>Portfolio | Ingénieur IA & Développeur de Bots</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Section Hero */}
        <HeroSection />
        
        {/* Section À propos */}
        <AboutSection />
        
        {/* Section Compétences */}
        <SkillsSection />
        
        {/* Section Projets */}
        <ProjectsSection />
        
        {/* Section Services */}
        <ServicesSection />
        
        {/* Section Contact */}
        <ContactSection />
        {/* Pied de page */}
        <Footer />
      </Layout>
    </motion.div>
  );
}
