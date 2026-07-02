"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center z-10"
      >
        {/* Tagline kecil untuk memberi kesan premium */}
        <span className="text-[#D4AF37] font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
          Pusat Apparel Care Premium
        </span>
        
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight">
          The King Of <span className="text-[#D4AF37]">Majapahit</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
          Solusi premium untuk perawatan sepatu, tas, dan pakaian dengan standar profesional.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/6282139938887?text=Halo%20The%20King%20of%20Majapahit,%20saya%20ingin%20melakukan%20booking%20layanan." 
    target="_blank" 
    rel="noopener noreferrer">
          <button className="px-10 py-4 bg-[#D4AF37] text-black font-bold text-lg rounded-full hover:bg-white transition-all duration-300">
            Book Pickup
          </button>
          </a>
          <a href="https://wa.me/6282139938887?text=Halo%20The%20King%20of%20Majapahit,%20saya%20ingin%20melakukan%20booking%20layanan." 
    target="_blank" 
    rel="noopener noreferrer">
          <button className="px-10 py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold text-lg rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
            Chat WhatsApp
          </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}