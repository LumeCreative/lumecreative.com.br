import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import MouseFollower from '../components/MouseFollower';

// Importando as imagens do case
import MatosServicos from "../assets/matos-servicos.webp";
import WireframeSiteLume from "../assets/Wiframe _ Site Lume-27.webp";
import WireframeSiteLumeLine from "../assets/Wiframe _ Site Lume-28.webp";
import WireframeSiteLume2 from "../assets/Wiframe _ Site Lume-29.webp";
import WireframeSiteLume3 from "../assets/Wiframe _ Site Lume-30.webp";
import WireframeSiteLume4 from "../assets/Wiframe _ Site Lume-31.webp";
import MatosLogo from "../assets/Wiframe _ Site Lume-26.webp";
import WireframeImage1 from "../assets/Wiframe _ Site Lume-41.webp";
import WireframeImage2 from "../assets/Wiframe _ Site Lume-39.webp";
import WireframeImage3 from "../assets/Wiframe _ Site Lume-38.webp";
import WireframeImage4 from "../assets/Wiframe _ Site Lume-37.webp";
import WireframeImage5 from "../assets/Wiframe _ Site Lume-36.webp";
import WireframeImage6 from "../assets/Wiframe _ Site Lume-35.webp";
import MaterialImage1 from "../assets/Wiframe _ Site Lume-34.webp";
import MaterialImage2 from "../assets/Wiframe _ Site Lume-33.webp";
import MaterialImage3 from "../assets/Wiframe _ Site Lume-32.webp";

const MatosCase: React.FC = () => {
    return (
        <>
            <MouseFollower />
            <motion.div
                className="min-h-screen bg-gray-100 text-white font-clash"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Navbar />

                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4 bg-black">
                    <div className="container mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl">
                    </div>
                </section>

                {/* Seção: Começamos com o Redesign da Marca */}
                <AnimatedSection animation="slideUp" delay={0.3}>
                    <section className="py-16 px-4 bg-gray-100">
                        <div className="container mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl">
                            <div className='w-full justify-between items-center flex flex-col sm:flex-row py-10'>
                                <div className="w-full text-left mb-12">
                                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.15em] mb-2 text-black">
                                        COMEÇAMOS COM
                                    </h2>
                                    <h3 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.15em] mb-8 text-black">
                                        O REDESIGN DA MARCA
                                    </h3>
                                </div>

                                {/* Logo Principal Matos e Sejanoski */}
                                <div className="flex justify-end mb-12">
                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-full max-w-md"
                                    >
                                        <img
                                            src={MatosLogo}
                                            alt="Logo Matos e Sejanoski"
                                            className="w-full h-auto"
                                        />
                                    </motion.div>
                                </div>
                            </div>

                        </div>
                    </section>
                </AnimatedSection>

                {/* Seção: Wireframe do Site */}
                <AnimatedSection animation="slideUp" delay={0.4}>
                    <section className="bg-gray-100">
                        <div className="w-full">
                            <div className="w-full aspect-[16/9] relative">
                                <img
                                    src={WireframeSiteLume}
                                    alt="Wireframe do Site"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                {/* Seção: Padronizamos a Identidade Visual */}
                <AnimatedSection animation="slideUp" delay={0.5}>
                    <section className="py-16 pt-24 bg-gray-100 relative overflow-hidden">
                        <div className="container mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl px-4">
                            <div className="w-full text-left mb-12">
                                <h2 className="text-2xl md:text-3xl 2xl:text-5xl font-semibold tracking-[0.15em] mb-4 text-black">
                                    PADRONIZAMOS
                                </h2>
                                <h3 className="text-2xl md:text-3xl 2xl:text-5xl font-semibold tracking-[0.15em] mb-8 text-black">
                                    A IDENTIDADE VISUAL
                                </h3>
                            </div>
                        </div>
                        {/* Linha que se estende até a borda direita */}
                        <div className="absolute bottom-28 left-1/2 right-0 flex items-end">
                            <div className="w-full ml-4 lg:ml-8">
                                <img src={WireframeSiteLumeLine} alt="Wireframe do Site" className="w-full h-4 object-cover" />
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={0.4}>
                    <section className="bg-gray-100">
                        <div className="w-full">
                            <div className="w-full aspect-[16/9] relative">
                                <img
                                    src={WireframeSiteLume2}
                                    alt="Wireframe do Site"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                {/* Seção: Desenvolvemos um Site Completo */}
                <AnimatedSection animation="slideUp" delay={0.6}>
                    <section className="py-16 pt-24 bg-gray-100 relative overflow-hidden">
                        <div className="container mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl px-4">
                            <div className="text-left mb-12 w-full">
                                <h2 className="text-2xl md:text-3xl 2xl:text-5xl font-semibold tracking-[0.15em] mb-4 text-black">
                                    DESENVOLVEMOS
                                </h2>
                                <h3 className="text-2xl md:text-3xl 2xl:text-5xl font-semibold tracking-[0.15em] mb-8 text-black">
                                    UM SITE COMPLETO
                                </h3>
                            </div>
                        </div>
                        {/* Linha que se estende até a borda direita */}
                        <div className="absolute bottom-28 left-1/2 right-0 flex items-end">
                            <div className="w-full ml-4 lg:ml-8">
                                <img src={WireframeSiteLumeLine} alt="Wireframe do Site" className="w-full h-4 object-cover" />
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={0.4}>
                    <section className="bg-gray-100">
                        <div className="w-full">
                            <div className="w-full aspect-[16/9] relative">
                                <img
                                    src={WireframeSiteLume3}
                                    alt="Wireframe do Site"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                {/* Seção: Cuidamos da Gestão das Redes Sociais */}
                <AnimatedSection animation="slideUp" delay={0.7}>
                    <section className="py-24 pb-8 bg-gray-100 relative overflow-hidden">
                        <div className="container mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl px-4">
                            <div className="w-full text-left mb-12">
                                <h2 className="text-2xl md:text-3xl 2xl:text-5xl font-semibold tracking-[0.15em] mb-4 text-black">
                                    CUIDAMOS DA GESTÃO
                                </h2>
                                <h3 className="text-2xl md:text-3xl 2xl:text-5xl font-semibold tracking-[0.15em] mb-8 text-black">
                                    DAS REDES SOCIAIS
                                </h3>
                            </div>
                        </div>
                        {/* Linha que se estende até a borda direita */}
                        <div className="absolute bottom-20 left-1/2 right-0 flex items-end">
                            <div className="w-full ml-4 lg:ml-8">
                                <img src={WireframeSiteLumeLine} alt="Wireframe do Site" className="w-full h-4 object-cover" />
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={0.4}>
                    <section className="bg-gray-100">
                        <div className="w-full">
                            <div className="w-full aspect-[16/9] relative">
                                <img
                                    src={WireframeSiteLume4}
                                    alt="Wireframe do Site"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                {/* Seção: Suporte para Pontos de Contato */}
                <AnimatedSection animation="slideUp" delay={0.8}>
                    <section className="py-24 md:pb-6 2xl:pb-16 bg-gray-100 relative overflow-hidden">
                        <div className="container mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl px-4">
                            <div className="w-full text-left mb-12">
                                <h2 className="text-2xl md:text-3xl 2xl:text-5xl font-semibold tracking-[0.15em] mb-4 text-black">
                                    SUPORTE PARA SEUS
                                </h2>
                                <h3 className="text-2xl md:text-3xl 2xl:text-5xl font-semibold tracking-[0.15em] mb-8 text-black">
                                    PONTOS DE CONTATO
                                </h3>
                            </div>
                        </div>
                        {/* Linha que se estende até a borda direita */}
                        <div className="absolute bottom-[75px] left-1/2 right-0 flex items-end">
                            <div className="w-full ml-4 lg:ml-8">
                                <img src={WireframeSiteLumeLine} alt="Wireframe do Site" className="w-full h-4 object-cover" />
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={0.4}>
                    <section className="bg-gray-100">
                        <div className="w-full">
                            <div className="w-full aspect-[16/9] relative">
                                <img
                                    src={WireframeSiteLume4}
                                    alt="Wireframe do Site"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </AnimatedSection>

                {/* Call to Action */}
                <AnimatedSection animation="slideUp" delay={0.9}>
                    <section className="py-16 px-4 bg-gray-100">
                        <div className="container mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-black">
                                    Pronto para transformar suas ideias em realidade?
                                </h2>
                                <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
                                    Venha conversar e começar essa jornada junto!
                                </p>
                                <Button
                                                                                    asChild
                                                                                    size="lg"
                                                                                    className="bg-[#B8860B] hover:bg-[#A0751F] text-white font-bold px-8 py-4 text-lg"
                                                                                    >
                                                                                    <a
                                                                                        href="https://wa.me/554135005671?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20Lume."
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer"
                                                                                    >
                                                                                        QUERO CONVERSAR
                                                                                    </a>
                                                                                    </Button>
                            </motion.div>
                        </div>
                    </section>
                </AnimatedSection>

                <Footer />
            </motion.div>
        </>
    );
};

export default MatosCase;