import React from 'react';
import Trafego2 from "../assets/Wiframe _ lp porto _ V2-10.webp";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d10] py-8 pb-32">
      <div className="container mx-auto px-4 lg:max-w-screen-lg 2xl:max-w-screen-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img src={Trafego2} alt="Lume Logo" className="xl:h-8 2xl:h-12 w-auto" />
            </div>
          </div>
          <div className="w-full sm:w-fit text-white text-sm sm:text-xs 2xl:text-base text-start">
            <p>
              &copy; {currentYear} <span className="notranslate" translate="no">Lume Creative Studio</span>.
              <br />Todos os direitos reservados.
            </p>
          </div>
          <div className="w-full sm:w-fit text-white text-sm sm:text-xs 2xl:text-base text-start">
            <p>
              <span className='font-semibold'>Telefone:</span> (41) 3500-5671
            </p>
            <p>
              <span className='font-semibold'>Email:</span> lume@lumecreative.com.br
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-4">
            <a href="https://www.instagram.com/lume.creative/" className="text-white hover:text-white transition-colors flex flex-row gap-2 items-center justify-center">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 448 512"><path fill="currentColor" d="M224 202.66A53.34 53.34 0 1 0 277.36 256A53.38 53.38 0 0 0 224 202.66m124.71-41a54 54 0 0 0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 0 0-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0 0 30.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0 0 30.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33ZM224 338a82 82 0 1 1 82-82a81.9 81.9 0 0 1-82 82m85.38-148.3a19.14 19.14 0 1 1 19.13-19.14a19.1 19.1 0 0 1-19.09 19.18ZM400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48m-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0c-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132c1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0c25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/lumecreativee/" className="text-white hover:text-white transition-colors flex flex-row gap-2 items-center justify-center">
              <span className="sr-only">Linkedin</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

