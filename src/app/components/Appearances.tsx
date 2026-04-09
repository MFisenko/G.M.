import React from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

export function Appearances() {
  return (
    <section id="appearances" className="py-32 lg:py-48 bg-[#111] text-[#F8F5F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="font-['Inter'] text-[#C6A769] tracking-[0.2em] text-xs uppercase mb-6">
              Speaking & Impact
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl lg:text-6xl leading-tight mb-8">
              A Voice for <br />
              <span className="italic font-light">Empowerment</span>
            </h2>
            <div className="font-['Inter'] text-white/60 space-y-6 text-lg font-light leading-relaxed mb-12">
              <p>
                Beyond the lens and the runway, Namratha is a commanding presence on stage. Engaging audiences globally, she brings her perspective as Miss Tourism World India to panels, universities, and distinguished events.
              </p>
            </div>
            
            <ul className="space-y-6">
              {[
                { title: "Saveetha Institute of Medical and Technical Sciences", detail: "International Women's Day Speaker" },
                { title: "Global Women's Leadership Summit", detail: "Keynote Speaker" },
                { title: "TEDx University Showcase", detail: "Guest Speaker" }
              ].map((item, i) => (
                <li key={i} className="flex flex-col border-l border-[#C6A769]/30 pl-6">
                  <span className="font-['Playfair_Display'] text-xl mb-1 leading-snug">{item.title}</span>
                  <span className="font-['Inter'] text-xs text-[#C6A769] uppercase tracking-wider mt-1">{item.detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="aspect-video relative overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1700651691401-b6775c93f5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNwZWFraW5nJTIwYXVkaWVuY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc0NTUzMjc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Namratha speaking at an event"
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:border-[#C6A769] group-hover:text-[#C6A769] transition-all duration-500">
                  <Play fill="currentColor" className="w-6 h-6 ml-1" />
                </div>
              </div>
            </div>
            {/* Caption */}
            <div className="mt-6 flex justify-between items-center text-sm font-['Inter'] text-white/40">
              <span>Showreel 2023</span>
              <span>03:45</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
