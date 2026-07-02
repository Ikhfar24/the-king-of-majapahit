"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="block w-[70px] h-[40px] relative">
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              fill 
              className="object-contain"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-light uppercase text-sm tracking-wide">
          <a href="/" className="hover:text-[#D4AF37] transition-all">Home</a>
          <a href="/#services" className="hover:text-[#D4AF37] transition-all">Services</a>
          <a href="/#products" className="hover:text-[#D4AF37] transition-all">Products</a>
          <a href="/#contact" className="hover:text-[#D4AF37] transition-all">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#D4AF37]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        
        // Di dalam komponen Navbar.tsx, bagian mobile menu
        
<nav className="flex flex-col items-center gap-8 text-white text-s">
  <a href="/" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] transition-all duration-300 active:scale-95">Home</a>
  <a href="/#services" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] transition-all duration-300 active:scale-95">Services</a>
  <a href="/#products" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] transition-all duration-300 active:scale-95">Products</a>
  <a href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] transition-all duration-300 active:scale-95">Contact</a>
  <div className="mt-auto mb-1"></div>
</nav>

      )}
    </nav>
  );
}