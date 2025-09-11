
import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import Strategy from "../assets/Wiframe _ lp porto _ V2-09.webp";

const Navbar: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || 0;
      const threshold = 50;
      const goingDown = currentY > lastScrollY.current;
      const shouldHide = goingDown && currentY > threshold && !menuOpen;
      setIsHidden(shouldHide);
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-10 w-full z-50 transition-all duration-500 transform ${isHidden
          ? 'opacity-0 -translate-y-full pointer-events-none'
          : 'opacity-100 translate-y-0 pointer-events-auto bg-black bg-opacity-0 backdrop-blur-md py-3'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center lg:max-w-screen-lg 2xl:max-w-screen-2xl">
        <div className="flex items-center">
          <div className="text-white text-4xl xl:text-4xl 2xl:text-6xl font-semibold">
            <a href="/" className="text-white hover:text-gray-300 transition-colors"><span className="notranslate" translate="no">LUME.</span></a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex xl:space-x-14 2xl:space-x-20">
          <a href="/" className="text-white uppercase hover:text-gray-300 transition-colors xl:text-base 2xl:text-xl">
            Home
          </a>
          <a href="/#servicos" className="text-white uppercase hover:text-gray-300 transition-colors xl:text-base 2xl:text-xl">
            Serviços
          </a>
          <a href="/#cases" className="text-white uppercase hover:text-gray-300 transition-colors xl:text-base 2xl:text-xl">
            Cases
          </a>
          <a href="/sobre" className="text-white uppercase hover:text-gray-300 transition-colors xl:text-base 2xl:text-xl">
            Sobre Nós
          </a>
          <a href="/#contato" className="text-white uppercase hover:text-gray-300 transition-colors xl:text-base 2xl:text-xl">
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            <a
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/#servicos"
              className="text-white hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="/#cases"
              className="text-white hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Cases
            </a>
            <a
              href="/sobre"
              className="text-white hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a
              href="/#contato"
              className="text-white hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
