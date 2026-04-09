import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Highlights } from "./components/Highlights";
import { Portfolio } from "./components/Portfolio";
import { Appearances } from "./components/Appearances";
import { Brands } from "./components/Brands";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "../styles/fonts.css";

export default function App() {
  return (
    <main className="bg-[#F8F5F2] min-h-screen font-['Inter'] selection:bg-[#C6A769] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Portfolio />
      <Appearances />
      <Brands />
      <Contact />
      <Footer />
    </main>
  );
}
