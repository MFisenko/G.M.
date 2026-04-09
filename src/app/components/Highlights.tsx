import React from "react";
import { motion } from "motion/react";

export function Highlights() {
  const titles = [
    { title: "Miss South India", subtitle: "Miss Sensational", year: "2023" },
    { title: "Miss India Quintessential", subtitle: "1st Runner-Up", year: "2020" },
    { title: "Miss Climate", subtitle: "Miss Climate Values", year: "2019" }
  ];

  return (
    <section className="py-24 bg-black text-[#F8F5F2] border-y border-[#F8F5F2]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-0">
          {titles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center px-8 border-b md:border-b-0 md:border-r border-[#F8F5F2]/10 last:border-0 pb-8 md:pb-0 w-full md:w-1/3"
            >
              <span className="font-['Inter'] text-[#C6A769] text-xs tracking-[0.2em] uppercase mb-4">
                {item.year}
              </span>
              <h3 className="font-['Playfair_Display'] text-2xl lg:text-3xl font-medium tracking-wide mb-2">
                {item.title}
              </h3>
              <span className="font-['Inter'] text-sm text-white/60 font-light tracking-widest uppercase">
                {item.subtitle}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
