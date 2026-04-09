import React from "react";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-white/40 font-['Inter'] text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          &copy; {new Date().getFullYear()} Namratha Gollamandala. All Rights Reserved.
        </div>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-xs">Instagram</a>
          <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-xs">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-xs">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
