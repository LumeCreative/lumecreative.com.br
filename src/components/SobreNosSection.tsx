
import React from 'react';
import Trafego from "../assets/Wiframe _ lp porto _ V2-07.webp";
import Trafego2 from "../assets/Wiframe _ lp porto _ V2-08.webp";

const SobreNosSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-[#13130f]">
      <div className="container mx-auto px-4 lg:max-w-screen-lg 2xl:max-w-screen-2xl">
        <h2 className="tracking-widest text-3xl sm:text-4xl xl:text-[55px] 2xl:text-[85px] font-clash font-extralight mb-48 text-center items-center justify-center">
          <span className="tracking-[1em] uppercase text-center">SOBRE NÓS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="w-full flex flex-row gap-4">
            <img
              src={Trafego}
              alt="Equipe trabalhando"
              className="w-10/12 h-auto object-cover rounded"
            />
            <img
              src={Trafego2}
              alt="Equipe trabalhando"
              className="w-1/12 px-3 object-cover rounded"
            />
          </div>

          <div className="text-white">
            <p className="text-xl md:text-xl 2xl:text-2xl mb-6 text-gray-300 tracking-[0.2rem] text-justify px-0 sm:px-20">
              A Lume Creative Studio é uma
              agência de marketing fundada no
              Brasil em 2021, com presença
              consolidada também em Portugal.
              Actuamos com foco em
              estratégia, criatividade e
              performance, oferecendo
              soluções completas para marcas
              que procuram crescer de forma
              inteligente e relevante.
            </p>

            <p className="text-xl md:text-xl 2xl:text-2xl  mb-6 text-gray-300 tracking-[0.2rem] text-justify px-0 sm:px-20">
              Com um portfólio de mais de 70
              clientes atendidos, alcançamos
              mais de 30 milhões pessoas nas
              redes sociais e impactamos mais
              de 200 mil através de campanhas
              de tráfego pago, sempre com
              resultados mensuráveis e
              compromisso com a excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosSection;
