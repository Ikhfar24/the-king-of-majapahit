"use client";
import { Sparkles, ShieldCheck, Zap, Package } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Deep Cleaning", icon: <Sparkles />, desc: "Perawatan mendalam untuk sepatu dan tas Anda." },
    { title: "Premium Repair", icon: <ShieldCheck />, desc: "Perbaikan profesional dengan material berkualitas." },
    { title: "Fast Treatment", icon: <Zap />, desc: "Layanan cepat tanpa mengurangi kualitas hasil." },
    { title: "Pickup & Delivery", icon: <Package />, desc: "Kemudahan layanan jemput-antar untuk Anda." },
  ];

  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Our <span className="text-[#D4AF37]">Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div key={index} className="p-8 bg-[#111] border border-[#D4AF37]/20 rounded-3xl hover:border-[#D4AF37] transition-all duration-300 group">
              <div className="text-[#D4AF37] mb-6 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}