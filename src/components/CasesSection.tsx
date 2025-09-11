import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Trafego2 from "../assets/Wiframe _ lp porto _ V2-08.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

interface ServiceProps {
  title: string;
  imageSrc: string;
  tipoService: string;
  time: string;
  caseUrl?: string;
  align?: 'left' | 'right';
}

const ServiceCard: React.FC<ServiceProps> = ({ title, imageSrc, tipoService, time, caseUrl }) => {
  const { ref, isInView } = useScrollAnimation();

  const CardContent = (
    <motion.div 
      ref={ref}
      className="flex flex-col items-center w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className={`relative w-full aspect-[4/5] overflow-hidden shadow-lg ${caseUrl ? 'cursor-pointer' : ''}`}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent flex flex-col">
          <div className="w-full text-left mt-2 bg-black bg-opacity-80  px-4 py-2">
            <div className="flex flex-row justify-between w-full text-xs text-white font-light tracking-[0.01em]">
              <span className="uppercase">{tipoService}</span>
              <span className="uppercase">{time}</span>
            </div>
            <span className="block text-3xl 2xl:text-[30px] font-semibold tracking-[0.001em] uppercase text-white">{title}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return caseUrl ? (
    <Link to={caseUrl} className="block">
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
};

import STFILM from "../assets/Wiframe _ Site Lume-14.webp";
import MATOS from "../assets/Wiframe _ Site Lume-15.webp";
import ARAUC from "../assets/Wiframe _ Site Lume-16.webp";
import ORA from "../assets/Wiframe _ Site Lume-17.webp";
import PIB from "../assets/Wiframe _ Site Lume-18.webp";
import SDA from "../assets/Wiframe _ Site Lume-19.webp";
import NEO from "../assets/Wiframe _ Site Lume-20.webp";
import CONTA from "../assets/Wiframe _ Site Lume-21.webp";
import Global from "../assets/Wiframe _ Site Lume-13.webp";

const CasesSection: React.FC = () => {
  const isMobile = useIsMobile();

  const services = [
    {
      title: "ST FILM",
      tipoService: "IDENTIDADE / SOCIAL MEDIA",
      time: "CORPORATIVO",
      imageSrc: STFILM,
      caseUrl: "/cases/stfilme",
      align: 'center'
    },
    {
      title: "MATOS E SEJANOSKI",
      tipoService: "IDENTIDADE / SOCIAL MEDIA",
      time: "CORPORATIVO",
      imageSrc: MATOS,
      caseUrl: "/cases/matosesejanoski",
      align: 'center'
    },
    {
      title: "ARAUCÁRIA TC",
      tipoService: "SITE",
      time: "CORPORATIVO",
      imageSrc: ARAUC,
      align: 'center'
    },
    {
      title: "ORA CURITIBA",
      tipoService: "IDENTIDADE / SITE / SOCIAL MEDIA / COBERTURA",
      time: "",
      imageSrc: ORA,
      align: 'center'
    },
    {
      title: "PIB CURITIBA",
      tipoService: "SOCIAL MEDIA",
      time: "MINISTERIAL",
      imageSrc: PIB,
      align: 'center'
    },
    {
      title: "SDA",
      tipoService: "IDENTIDADE / SOCIAL MEDIA / COBERTURA",
      time: "MINISTERIAL",
      imageSrc: SDA,
      align: 'center'
    },
    {
      title: "NEOYAMA",
      tipoService: "IDENTIDADE VISUAL",
      time: "CORPORATIVO",
      imageSrc: NEO,
      align: 'center'
    },
    {
      title: "CONTAFIX",
      tipoService: "SOCIAL MEDIA / SITE",
      time: "CORPORATIVO",
      imageSrc: CONTA,
      align: 'center'
    },

  ];

  return (
    <section id="cases" className="py-12 md:pb-20 relative overflow-hidden">
      {/* Purple glow effect */}
      <div className="absolute top-32 left-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[100px] md:blur-[150px] -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 lg:max-w-screen-lg 2xl:max-w-screen-2xl">
        <div className="relative w-full text-center py-20 overflow-hidden">
          {/* Texto contornado atrás (outline) */}
          <h2 className="absolute mb-3 inset-0 text-[80px] sm:text-[120px] md:text-[220px] 2xl:text-[330px] font-extrabold uppercase tracking-[-0.05em] text-transparent stroke-text z-0 select-none flex justify-center items-center pointer-events-none">
            CASES
          </h2>

          {/* Texto colorido na frente */}
          <div className="relative z-10 flex justify-center space-x-2 text-3xl sm:text-5xl xl:text-[55px] 2xl:text-[85px] font-semibold uppercase tracking-[0.2em]">
            <span className="text-white">CASES DE SUCESSO</span>
          </div>

          {/* Linha gradiente */}
          <div className='w-full flex justify-center items-center mt-3'>
            <img
              src={Trafego2}
              alt="Equipe trabalhando"
              className="w-1/2 px-3 h-3 object-cover rounded"
            />
          </div>

        </div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mt-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              tipoService={service.tipoService}
              time={service.time}
              imageSrc={service.imageSrc}
              caseUrl={service.caseUrl}
              align={service.align as 'left' | 'right'}
            />
          ))}
        </div>
        <section
          className="text-white py-16 bg-cover bg-center mt-20"
          style={{
            backgroundImage: `url(${Global})`,
            backgroundSize: "1400px", // ou outro tamanho fixo
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center", // ou "bottom right"
          }}
        >
          <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Texto à esquerda */}
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl sm:text-5xl xl:text-[55px] 2xl:text-[65px] font-clash font-medium mb-4">
                Global Youth Movement
              </h2>
              <p className="text-3xl 2xl:text-[45px] font-clash text-gray-300 mb-6">
                Unindo líderes<br /> jovens de todo o<br /> mundo.
              </p>
              <button className="text-xl 2xl:text-2xl border font-clash border-white text-white px-6 py-2 uppercase hover:bg-white hover:text-black transition-all">
                Saiba Mais
              </button>
            </div>

             {/* Player de vídeo à direita */}
            <div className="w-full md:w-2/3 aspect-video relative rounded-md shadow-lg overflow-hidden">
              <a
                href="https://youtube.com/shorts/lE1lsi1wUTw"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
              >
                <img
                  src="https://img.youtube.com/vi/lE1lsi1wUTw/hqdefault.jpg"
                  alt="YouTube Shorts Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition hover:bg-opacity-60">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default CasesSection;
