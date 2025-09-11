import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import MouseFollower from '../components/MouseFollower';
import HeroSobre from '../components/HeroSobre';
import ContatoSection from '../components/ContatoSection';
import Trafego2 from "../assets/Wiframe _ lp porto _ V2-08.webp";

const Sobre: React.FC = () => {
  return (
    <>
      <MouseFollower />
      <motion.div
        className="min-h-screen bg-[#13130f] text-white font-clash"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Navbar />

        {/* Hero igual ao topo da Home */}
        <HeroSobre />

        {/* Intro */}
        <AnimatedSection animation="slideUp" delay={0.15}>
          <section className="py-6 px-4 bg-[#13130f]">
            <div className="container mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl">
              <div className="space-y-6 text-gray-300 tracking-[0.12em] text-base sm:text-lg 2xl:text-2xl">
                <p>
                  Na Lume, acreditamos que comunicação de verdade nasce com intenção, com clareza e com processo bem feito.
                </p>
                <p>
                  Somos mais do que uma agência: somos um estúdio criativo.
                </p>
                <p>
                  Unimos estratégia, design, tecnologia e conteúdo para ajudar marcas e pessoas a se posicionarem com propósito e conquistarem o espaço que merecem.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Título no estilo da Home (NOSSOS SERVIÇOS) */}
        <AnimatedSection animation="slideUp" delay={0.25}>
          <section className="py-10 px-4 bg-[#13130f]">
            <div className="container mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl">
              <div className="relative w-full text-center py-10 overflow-hidden">
                <h2 className="absolute mb-3 inset-0 text-[80px] sm:text-[120px] md:text-[150px] 2xl:text-[230px] font-extrabold uppercase tracking-[-0.05em] text-transparent stroke-text z-0 select-none flex justify-center items-center pointer-events-none">
                 
                </h2>
                <div className="relative z-10 flex justify-center space-x-2 text-3xl sm:text-5xl xl:text-[55px] 2xl:text-[85px] font-semibold uppercase tracking-[0.2em]">
                  <span className="text-white">O que fazemos?</span>
                </div>
                <div className='w-full flex justify-center items-center mt-3'>
                  <img
                    src={Trafego2}
                    alt="Linha gradiente"
                    className="w-1/2 px-3 h-3 object-cover rounded"
                  />
                </div>
              </div>
              
            </div>
          </section>
        </AnimatedSection>

        {/* Encerramento */}
        <AnimatedSection animation="slideUp" delay={0.35}>
          <section className="py-6 px-4 bg-[#13130f]">
            <div className="container mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl">
              <div className="space-y-6 text-gray-300 tracking-[0.12em] text-base sm:text-lg 2xl:text-2xl">
                <p>Transformamos ideias em presença digital de impacto. Da criação de branding à gestão de redes sociais, do conteúdo em vídeo a campanhas que performam, cada projeto é construído com método, pesquisa e criatividade.</p>
                <p>
                  Acreditamos que cada marca tem um “porquê” único. E nosso trabalho é dar vida a ele, conectando negócios e pessoas de forma autêntica, intencional e estratégica.
                </p>
                <p>
                  <b>Somos a Lume.</b>
                </p>
                <p>
                  Um time apaixonado por criar, planejar e executar comunicação que faz diferença.
                </p>
                <p>
                  Se você também acredita que marketing não é fórmula pronta, mas construção inteligente, seja bem-vindo.
                </p>
                <br></br><br></br>
              </div>
            </div>
          </section>
        </AnimatedSection>
        

        {/* Contato (mesma sessão da Home) */}
        <AnimatedSection animation="slideUp" delay={0.45}>
          <ContatoSection />
        </AnimatedSection>

        <Footer />
      </motion.div>
    </>
  );
};

export default Sobre;

