export default function Footer() {
  return (
    <footer className="bg-black py-12 px-6 border-t border-[#D4AF37]/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h3 className="text-[#D4AF37] font-bold text-lg mb-4 uppercase">The King Of Majapahit</h3>
          <p className="text-gray-400 text-sm">Pusat perawatan premium untuk sepatu, tas, dan pakaian Anda.</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Lokasi</h3>
          <p className="text-gray-400 text-sm">Perum Griya Bhayangkara Permai Blok SS-29 RT:22 RW:09  Kel. Urang Agung  Kec. Sidoarjo  Kab. Sidoarjo -61234 Jawa Timur</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Operasional</h3>
          <p className="text-gray-400 text-sm">Senin - Minggu: 08:00 - 20:00</p>
        </div>
      </div>
      <div className="text-center text-gray-600 text-xs mt-12">
        © 2026 The King Of Majapahit. All Rights Reserved.
      </div>
    </footer>
  );
}