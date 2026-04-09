import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const [isCtaClicked, setIsCtaClicked] = useState(false);

  const handleExplorePortfolioClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setIsCtaClicked(true);
    window.setTimeout(() => setIsCtaClicked(false), 800);

    window.dispatchEvent(
      new CustomEvent("nav:set-active", {
        detail: { href: "#portfolio" },
      }),
    );

    const target = document.querySelector("#portfolio");
    if (!target) return;

    const navbarOffset = 96;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    window.history.replaceState(null, "", "#portfolio");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1763454640760-3242809ce4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMGNpbmVtYXRpYyUyMGZlbWFsZSUyMG1vZGVsfGVufDF8fHx8MTc3NDU1MzI3Mnww&ixlib=rb-4.1.0&q=80&w=2000&utm_source=figma&utm_medium=referral"
          alt="Namratha Gollamandala"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Inter'] text-[#C6A769] tracking-[0.2em] text-sm uppercase mb-6"
        >
          Model &bull; Speaker &bull; Miss Tourism World India 2023
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="gold-shine-on-hover font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl text-[#F8F5F2] tracking-wide font-medium leading-tight mb-12 max-w-5xl"
        >
          Namratha <br className="md:hidden" /> Gollamandala
        </motion.h1>

        <motion.a
          href="#portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          onClick={handleExplorePortfolioClick}
          className={`group relative inline-flex items-center justify-center overflow-hidden border border-[#F8F5F2]/30 px-8 py-4 font-['Inter'] text-xs uppercase tracking-[0.15em] text-[#F8F5F2] hover:border-[#C6A769] transition-colors duration-500 ${
            isCtaClicked ? "portfolio-cta-clicked" : ""
          }`}
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
            Explore Portfolio
          </span>
          <div className="absolute inset-0 bg-[#C6A769] translate-y-[100%] transition-transform duration-500 ease-in-out group-hover:translate-y-0" />
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-[1px] h-16 bg-[#F8F5F2]/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#C6A769]"
          />
        </div>
      </motion.div>
    </section>
  );
}
