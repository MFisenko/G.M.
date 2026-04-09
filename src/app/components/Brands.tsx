import React from "react";
import { motion } from "motion/react";

export function Brands() {
  const brands = [
    "Darlins Production",
    "Global Representation",
    "Editorial Creatives",
    "International Photographers"
  ];

  return (
    <section className="py-24 bg-[#F8F5F2] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-center font-['Inter'] text-xs uppercase tracking-[0.2em] text-black/40 mb-16">
          Selected Collaborations & Representation
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="font-['Playfair_Display'] text-2xl md:text-3xl text-black/40 hover:text-black/80 transition-colors duration-500 cursor-default text-center"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
