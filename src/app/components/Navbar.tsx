import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Appearances", href: "#appearances" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setActiveLink(href);

    const target = document.querySelector(href);
    if (!target) return;

    // Offset accounts for the fixed navbar so sections align elegantly on arrival.
    const navbarOffset = 96;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    window.history.replaceState(null, "", href);
  };

  useEffect(() => {
    const handleActiveNavEvent = (event: Event) => {
      const customEvent = event as CustomEvent<{ href?: string }>;
      if (customEvent.detail?.href) {
        setActiveLink(customEvent.detail.href);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const fromTop = window.scrollY + 120;
      const currentSection = navLinks.findLast((link) => {
        const section = document.querySelector(link.href);
        return section instanceof HTMLElement && section.offsetTop <= fromTop;
      });

      if (currentSection) {
        setActiveLink(currentSection.href);
      }
    };

    if (window.location.hash) {
      setActiveLink(window.location.hash);
    }

    window.addEventListener("nav:set-active", handleActiveNavEvent as EventListener);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("nav:set-active", handleActiveNavEvent as EventListener);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 border-b border-transparent ${
          isScrolled ? "bg-[#F8F5F2]/90 backdrop-blur-md border-black/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-24">
          <a
            href="#"
            className={`gold-shine-on-hover font-['Playfair_Display'] text-xl tracking-widest uppercase transition-colors duration-500 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Namratha
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-['Inter'] text-sm tracking-widest uppercase transition-colors duration-300 ${
                  activeLink === link.href
                    ? "gold-shine-active"
                    : isScrolled
                      ? "text-black/70 hover:text-[#C6A769]"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-[#F8F5F2] flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-8 right-6 p-2 text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="font-['Playfair_Display'] text-3xl tracking-widest uppercase text-black hover:text-[#C6A769] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
