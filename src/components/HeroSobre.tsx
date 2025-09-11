import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "../assets/Wiframe _ Site Lume _ v3-04.webp";
import React, { useRef } from "react";

export default function HeroSobre() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative place-items-center grid"
    >
      <div className="w-full lg:max-w-screen-lg 2xl:max-w-screen-2xl mt-[40px] sm:mt-[-15px] px-3">
        <motion.h1
          style={{ y: textY }}
          className="w-full font-semibold text-white text-[32px] xl:text-6xl 2xl:text-[5.5rem] relative z-10 tracking-[0.2em] mb-0 sm:mb-5"
        >
          SOBRE NÓS
        </motion.h1>
        <motion.h1
          style={{ y: textY }}
          className="w-full font-semibold text-white text-[32px] xl:text-6xl 2xl:text-[5.5rem] relative z-10 tracking-[0.2em] mb-0 sm:mb-5"
        >
        
        </motion.h1>
        <motion.h1
          style={{ y: textY }}
          className="w-full font-regular text-white text-[28px] xl:text-5xl 2xl:text-[4.5rem] relative z-30 tracking-[0.2em] mb-2 xl:mb-20 2xl:mb-32"
        >
   <br></br><br></br>
        </motion.h1>
      </div>

      <img
        src={Logo}
        alt="Lume logo"
        className="absolute mt-5 xl:mb-28 2xl:mb-48 right-0 w-32 md:w-[300px] 2xl:w-[500px] z-30"
      />

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/image-full.webp)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/image-bottom.webp)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}

