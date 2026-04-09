import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 lg:py-48 bg-black text-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-['Inter'] text-[#C6A769] tracking-[0.2em] text-xs uppercase mb-6 block">
              Inquiries
            </span>
            <h2 className="font-['Playfair_Display'] text-5xl lg:text-7xl mb-12 leading-tight">
              Work with <br />
              <span className="italic font-light">Namratha</span>
            </h2>
            <p className="font-['Inter'] text-white/60 text-lg font-light max-w-md mb-16">
              Available for editorial campaigns, runway representations, and global speaking engagements.
            </p>

            <div className="space-y-8 font-['Inter']">
              <div>
                <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">Management</span>
                <a href="mailto:booking@namrathag.com" className="text-xl hover:text-[#C6A769] transition-colors inline-flex items-center gap-2 group">
                  booking@namrathag.com
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">Press & Media</span>
                <a href="mailto:press@namrathag.com" className="text-xl hover:text-[#C6A769] transition-colors inline-flex items-center gap-2 group">
                  press@namrathag.com
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </div>
            </div>

            <div className="mt-16">
              <a href="#" className="inline-flex items-center gap-4 text-xs font-['Inter'] uppercase tracking-widest text-[#C6A769] hover:text-white transition-colors py-4 border-b border-[#C6A769]/30 hover:border-white">
                Download Media Kit (PDF)
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111] p-10 lg:p-16"
          >
            <h3 className="font-['Playfair_Display'] text-3xl mb-10">Direct Message</h3>
            <form className="space-y-8 font-['Inter']">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-[#C6A769] transition-colors placeholder:text-white/30"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-[#C6A769] transition-colors placeholder:text-white/30"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject (e.g. Booking, Press, Speaking)" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-[#C6A769] transition-colors placeholder:text-white/30"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message Details..." 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-[#C6A769] transition-colors placeholder:text-white/30 resize-none"
                />
              </div>
              <button 
                type="button"
                className="w-full bg-[#F8F5F2] text-black py-4 uppercase text-xs tracking-[0.2em] font-medium hover:bg-[#C6A769] hover:text-white transition-colors duration-500"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
