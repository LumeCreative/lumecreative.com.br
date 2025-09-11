
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicosSection from '../components/ServicosSection';
import CasesSection from '../components/CasesSection';
import ContatoSection from '../components/ContatoSection';
import AnimatedSection from '../components/AnimatedSection';
import MouseFollower from '../components/MouseFollower';

const Index: React.FC = () => {
  return (
    <>
      <MouseFollower />
      <motion.div 
        className="min-h-screen bg-[#13130f] text-white font-clash"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />
        <HeroSection />
        <AnimatedSection animation="slideUp" delay={0.2}>
          <ServicosSection />
        </AnimatedSection>
        <AnimatedSection animation="slideUp" delay={0.3}>
          <CasesSection />
        </AnimatedSection>
        <AnimatedSection animation="slideUp" delay={0.4}>
          <ContatoSection />
        </AnimatedSection>
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
