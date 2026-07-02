// src/components/Location.tsx
export default function Location() {
  return (
    <section id="location" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Our <span className="text-[#D4AF37]">Location</span>
        </h2>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Keterangan */}
          <div className="text-white space-y-6">
            <h3 className="text-2xl font-bold text-[#D4AF37]">The King Of Majapahit</h3>
            <p className="text-gray-400 leading-relaxed">
              Perum Griya Bhayangkara Permai Blok SS-29 RT:22 RW:09 <br/>
              Kel. Urang Agung, Kec. Sidoarjo <br/>
              Kab. Sidoarjo, 61234, Jawa Timur
            </p>
            <div className="pt-4 border-t border-[#303030]">
              <p className="font-bold">Operasional:</p>
              <p className="text-gray-400">Senin - Minggu: 08:00 - 20:00</p>
            </div>
          </div>

          {/* Kolom Kanan: Google Maps */}
          <div className="w-full h-[350px] rounded-[24px] overflow-hidden border border-[#303030] shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3317.5353641466986!2d112.6701!3d-7.4303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e39bb3c5d321%3A0xdaacf07d6168cf69!2sPerum%20Griya%20Bhayangkara%20Permai!5e1!3m2!1sid!2sid!4v1782979557143!5m2!1sid!2sid" // GANTI DENGAN LINK EMBED ANDA
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}