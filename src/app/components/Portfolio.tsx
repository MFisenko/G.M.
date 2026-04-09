import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Editorial", "Pageants", "Campaigns"];

  const works = [
    {
      id: 1,
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1642263039799-7515d7143225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2d1ZSUyMHN0eWxlJTIwZmFzaGlvbiUyMHdvbWFufGVufDF8fHx8MTc3NDU1MzI3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Vogue Silhouette",
    },
    {
      id: 2,
      category: "Pageants",
      image: "https://images.unsplash.com/photo-1761574028714-7c2882992a9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjB3b21hbiUyMGV2ZW5pbmclMjBnb3dufGVufDF8fHx8MTc3NDUyODAxMHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Evening Elegance",
    },
    {
      id: 3,
      category: "Campaigns",
      image: "https://images.unsplash.com/photo-1761637986331-39a8748dd84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwbW9kZWx8ZW58MXx8fHwxNzc0NTUzMjc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "L'Or High Jewelry",
    },
    {
      id: 4,
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1636935621723-8f91b0cc56eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMG1vZGVsfGVufDF8fHx8MTc3NDU0NTU0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Minimalist Muse",
    }
  ];

  const filteredWorks = activeCategory === "All" 
    ? works 
    : works.filter(w => w.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 lg:py-48 bg-[#F8F5F2] text-black min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="font-['Inter'] text-[#C6A769] tracking-[0.2em] text-xs uppercase mb-4 block">
              Selected Works
            </span>
            <h2 className="font-['Playfair_Display'] text-5xl lg:text-7xl">Portfolio</h2>
          </div>
          
          <div className="flex space-x-6 overflow-x-auto pb-4 md:pb-0 no-scrollbar w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-['Inter'] text-sm tracking-wider uppercase transition-all duration-500 pb-1 border-b ${
                  activeCategory === cat 
                    ? "border-black text-black" 
                    : "border-transparent text-black/40 hover:text-black/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                key={work.id}
                className="group relative cursor-pointer overflow-hidden aspect-[3/4]"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0">
                  <span className="font-['Inter'] text-[#C6A769] text-xs tracking-[0.2em] uppercase mb-2 drop-shadow-md">
                    {work.category}
                  </span>
                  <h3 className="font-['Playfair_Display'] text-3xl text-white drop-shadow-md">
                    {work.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
