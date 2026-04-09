import React from "react";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 lg:py-48 bg-[#F8F5F2] text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1759021997901-fca347266879?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmVtYWxlJTIwc3R1ZGlvJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0NTUzMjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Namratha elegant portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#C6A769]/10 -z-10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <span className="font-['Inter'] text-[#C6A769] tracking-[0.2em] text-xs uppercase mb-6">
              The Essence
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl lg:text-6xl leading-tight mb-10">
              Grace. Purpose. <br className="hidden lg:block" />
              <span className="italic font-light">Global Presence.</span>
            </h2>
            <div className="font-['Inter'] text-black/70 space-y-6 text-lg font-light leading-relaxed max-w-lg">
              <p>
                As an emerging international model and beauty representative, Namratha Gollamandala curates a powerful presence across fashion shoots, public speaking, and global platforms.
              </p>
              <p>
                Rather than focusing on competition outcomes, her title as Miss Tourism World India 2023 serves as a testament to her international representation and sophisticated media presence. She carries an aura of elevated elegance, seamlessly blending editorial collaborations with impactful speaking engagements.
              </p>
            </div>
            <div className="mt-12">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Signature_placeholder.svg/200px-Signature_placeholder.svg.png" 
                alt="Signature" 
                className="h-16 opacity-30 invert mix-blend-multiply filter grayscale"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
