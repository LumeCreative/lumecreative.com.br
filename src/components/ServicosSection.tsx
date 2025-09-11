import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Trafego2 from "../assets/Wiframe _ lp porto _ V2-08.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ServiceProps {
  title: string;
  imageSrc: string;
  firstTitle: string;
  firstDescription: string;
  secondTitle: string;
  secondDescription: string;
  thirdTitle: string;
  thirdDescription: string;
  forthTitle: string;
  forthDescription: string;
  fifthTitle: string;
  fifthDescription: string;
  align?: 'left' | 'right';
}

const ServiceCard: React.FC<ServiceProps> = ({ title, imageSrc, firstTitle, firstDescription, secondTitle, secondDescription, thirdTitle, thirdDescription, forthTitle, forthDescription, fifthTitle, fifthDescription, align = 'left' }) => {
  const isMobile = useIsMobile();
  const { ref, isInView } = useScrollAnimation();

  const effectiveInView = isMobile || isInView;

  // Define flex direction and order based on align prop
  const isRight = align === 'right';
  const flexDirection = isMobile ? 'flex-col' : 'flex-row';
  const imageOrder = isRight && !isMobile ? 'order-2' : 'order-1';
  const textOrder = isRight && !isMobile ? 'order-1' : 'order-2';

  return (
    <motion.div
      ref={ref}
      className={`service-block ${!isMobile && align === 'right' ? 'mt-20' : ''} mb-10 md:mb-20`}
      initial={{ opacity: 0, y: 50 }}
      animate={effectiveInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className={`service-card border-0 bg-transparent text-white overflow-visible flex ${flexDirection} items-center justify-center gap-6`}>
        {/* Imagem */}
        <motion.div
          className={`relative w-full md:w-1/3 ${imageOrder}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <AspectRatio ratio={16 / 14} className="overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
            />
          </AspectRatio>
        </motion.div>
        {/* Texto */}
        <motion.div
          className={`flex flex-col items-center w-full md:w-1/2 ${textOrder}`}
          initial={{ opacity: 0, x: isRight ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRight ? -30 : 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <CardContent className={`flex flex-col items-center w-full ${isMobile ? 'px-0' : ''}`}>
            <div className={`text-2xl md:text-xl 2xl:text-4xl uppercase font-extralight mb-2 mt-2 text-white w-full flex justify-center items-center ${isMobile ? 'px-4' : ''}`}>
              <span className="w-full text-justify tracking-[0.2rem] font-semibold">{title}</span>
            </div>
            <div className={`relative z-10 mb-4 h-1 w-full bg-white ${isMobile ? 'mx-4' : 'mx-auto'}`} />
            {/* Lista de tópicos do serviço */}
            <div className={`w-full text-left ${isMobile ? 'px-4' : 'max-w-3xl mx-auto'}`}>
              <div className="mb-4">
                <span className="font-semibold tracking-[0.1rem] text-lg md:text-lg 2xl:text-xl text-white">{firstTitle}</span>
                <div className="text-gray-300 text-sm md:text-sm 2xl:text-base">{firstDescription}</div>
              </div>
              <div className="mb-4">
                <span className="font-semibold tracking-[0.1rem] text-lg md:text-lg 2xl:text-xl text-white">{secondTitle}</span>
                <div className="text-gray-300 text-sm md:text-sm 2xl:text-base">{secondDescription}</div>
              </div>
              <div className="mb-4">
                <span className="font-semibold tracking-[0.1rem] text-lg md:text-lg 2xl:text-xl text-white">{thirdTitle}</span>
                <div className="text-gray-300 text-sm md:text-sm 2xl:text-base">{thirdDescription}</div>
              </div>
              <div className="mb-4">
                <span className="font-semibold tracking-[0.1rem] text-lg md:text-lg 2xl:text-xl text-white">{forthTitle}</span>
                <div className="text-gray-300 text-sm md:text-sm 2xl:text-base">{forthDescription}</div>
              </div>
              <div>
                <span className="font-semibold tracking-[0.1rem] text-lg md:text-lg 2xl:text-xl text-white">{fifthTitle}</span>
                <div className="text-gray-300 text-sm md:text-sm 2xl:text-base">{fifthDescription}</div>
              </div>
            </div>
          </CardContent>
        </motion.div>
      </Card>
    </motion.div>
  );
};

import BRANDING from "../assets/Wiframe _ Site Lume-05.webp";
import DESIGN from "../assets/Wiframe _ Site Lume-06.webp";
import CRIACAO from "../assets/Wiframe _ Site Lume-07.webp";
import CONTE from "../assets/Wiframe _ Site Lume-10.webp";
import POSI from "../assets/Wiframe _ Site Lume-11.webp";
import AUDIO from "../assets/Wiframe _ Site Lume-12.webp";
import TRAFEGO from "../assets/Wiframe _ Site Lume-08.webp";
import EVENTOS from "../assets/Wiframe _ Site Lume-09.webp";

const ServicosSection: React.FC = () => {
  const isMobile = useIsMobile();

  const services = [
    {
      title: "BRANDING",
      firstTitle: "Identidade Visual",
      firstDescription: "Criação de logotipos, paleta de cores, tipografia e identidade.",
      secondTitle: "Posicionamento de Marca",
      secondDescription: "Definição de valores e tom de voz.",
      thirdTitle: "Naming",
      thirdDescription: "Desenvolvimento de nomes estratégicos e pesquisa no INPI",
      forthTitle: "Estratégia de Comunicação",
      forthDescription: "Planejamento para campanhas e lançamentos.",
      imageSrc: BRANDING,
      align: 'center'
    },
    {
      title: "DESIGN GRÁFICO",
      firstTitle: "Materiais Impressos",
      firstDescription: "Flyers, cartões e banners.",
      secondTitle: "Design Digital",
      secondDescription: "Imagens para redes sociais e sites.",
      thirdTitle: "Infográficos",
      thirdDescription: "Dados apresentados de forma visual.",
      forthTitle: "Packaging",
      forthDescription: "Design de embalagens diferenciadas.",
      imageSrc: DESIGN,
      align: 'center'
    },
    {
      title: "CRIAÇÃO DE CONTEÚDO",
      firstTitle: "Blog Posts",
      firstDescription: "Textos otimizados para SEO e ranqueamento no Google.",
      secondTitle: "Roteiros de Vídeos",
      secondDescription: "Scripts criativos para vídeos institucionais e promocionais.",
      thirdTitle: "E-books e Whitepapers",
      thirdDescription: "Materiais ricos para capturar leads e educar o público",
      forthTitle: "Conteúdo para Redes Sociais",
      forthDescription: "Textos curtos e impactantes para posts e campanhas.",
      fifthTitle: "E-mail Marketing",
      fifthDescription: "Estratégias para engajamento e nutrição de leads.",
      imageSrc: CRIACAO,
      align: 'center'
    },
    {
      title: "ESTRATÉGIA DE CONTEÚDO PARA REDES SOCIAIS",
      firstTitle: "Calendário Editorial",
      firstDescription: "Organização de postagens mensais para manter consistência.",
      secondTitle: "Criação de Conteúdo",
      secondDescription: "Desenvolvimento de textos, imagens e vídeos estratégicos.",
      thirdTitle: "Análise de Métricas",
      thirdDescription: "Monitoramento de desempenho para otimização contínua.",
      forthTitle: "",
      forthDescription: "",
      fifthTitle: "",
      fifthDescription: "",
      imageSrc: CONTE,
      align: 'center'
    },
    {
      title: "ESTRATÉGIA E POSICIONAMENTO E MARCA",
      firstTitle: "Análise de Mercado",
      firstDescription: "Pesquisa de concorrentes e tendências para insights estratégicos.",
      secondTitle: "Definição de Público-Alvo",
      secondDescription: "Segmentação precisa para comunicação eficaz",
      thirdTitle: "Criação de Proposta de Valor",
      thirdDescription: "Desenvolvimento de mensagens claras e impactantes",
      forthTitle: "Planejamento Estratégico",
      forthDescription: "Elaboração de ações para fortalecer a marca.",
      fifthTitle: "",
      fifthDescription: "",
      imageSrc: POSI,
      align: 'center'
    },
    {
      title: "PRODUÇÃO AUDIOVISUAL",
      firstTitle: "Vídeos Institucionais e Promocionais",
      firstDescription: "Apresentação da empresa, cultura, produtos ou serviços",
      secondTitle: "Animação e Motion Design",
      secondDescription: "Vídeos animados para explicar conceitos de forma dinâmica.",
      thirdTitle: "",
      thirdDescription: "",
      forthTitle: "",
      forthDescription: "",
      fifthTitle: "",
      fifthDescription: "",
      imageSrc: AUDIO,
      align: 'center'
    },
    {
      title: "TRÁFEGO PAGO",
      firstTitle: "Google Ads",
      firstDescription: "Anúncios para buscas, display, shopping e vídeos.",
      secondTitle: "Meta Ads (Facebook e Instagram)",
      secondDescription: "Campanhas para engajamento e conversão.",
      thirdTitle: "LinkedIn Ads",
      thirdDescription: "Publicidade direcionada para profissionais e empresas.",
      forthTitle: "Remarketing",
      forthDescription: "Estratégias para impactar os visitantes do site novamente.",
      fifthTitle: "Gerenciamento de Criativos",
      fifthDescription: "Artes e vídeos otimizados para anúncios.",
      imageSrc: TRAFEGO,
      align: 'center'
    },
    {
      title: "COBERTURA DE EVENTOS",
      firstTitle: "Fotografia e Filmagem",
      firstDescription: "Documentação profissional de eventos corporativos e sociais.",
      secondTitle: "Transmissão ao Vivo",
      secondDescription: "Streaming de eventos para plataformas online.",
      thirdTitle: "Produção de conteúdo pós-evento",
      thirdDescription: "Resumos, highlights e materiais promocionais.",
      forthTitle: "Gestão de Redes Sociais Durante o Evento",
      forthDescription: "Atualizações em tempo real",
      fifthTitle: "",
      fifthDescription: "",
      imageSrc: EVENTOS,
      align: 'center'
    },
  ];

  return (
    <section id="servicos" className="py-12 md:pb-20 relative overflow-hidden">
      {/* Purple glow effect */}
      <div className="absolute top-32 left-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[100px] md:blur-[150px] -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 lg:max-w-screen-lg 2xl:max-w-screen-2xl">
        <div className="relative w-full text-center py-20 overflow-hidden">
          {/* Texto contornado atrás (outline) */}
          <h2 className="absolute mb-3 inset-0 text-[80px] sm:text-[120px] md:text-[150px] 2xl:text-[230px] font-extrabold uppercase tracking-[-0.05em] text-transparent stroke-text z-0 select-none flex justify-center items-center pointer-events-none">
            SERVIÇOS
          </h2>

          {/* Texto colorido na frente */}
          <div className="relative z-10 flex justify-center space-x-2  text-3xl sm:text-5xl xl:text-[55px] 2xl:text-[85px] font-semibold uppercase tracking-[0.2em]">
            <span className="text-white">NOSSOS SERVIÇOS</span>
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
        <div className="grid grid-cols-1 gap-y-6 md:gap-x-48">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              firstTitle={service.firstTitle}
              firstDescription={service.firstDescription}
              secondTitle={service.secondTitle}
              secondDescription={service.secondDescription}
              thirdTitle={service.thirdTitle}
              thirdDescription={service.thirdDescription}
              forthTitle={service.forthTitle}
              forthDescription={service.forthDescription}
              fifthTitle={service.fifthTitle}
              fifthDescription={service.fifthDescription}
              imageSrc={service.imageSrc}
              align={service.align as 'left' | 'right'}
            />
          ))}
        </div>

        <div className="w-full text-center items-center relative z-10 flex justify-center text-3xl sm:text-5xl xl:text-[55px] 2xl:text-[85px] font-regular tracking-[0.1em] mb-1">
          <span className="text-white">+ 100 mil participantes impactados em eventos</span>
        </div>
        <div className="w-full text-center items-center relative z-10 flex justify-center text-3xl sm:text-5xl xl:text-[55px] 2xl:text-[85px] font-semibold tracking-[0.1em]">
          <span className="text-white">+ 30 milhões de pessoas alcançadas digitalmente</span>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
