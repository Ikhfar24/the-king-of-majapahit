export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-[#D4AF37] rounded-3xl p-12 md:p-20 text-center text-black">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Siap Merawat Barang Kesayangan Anda?
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90">
          Jangan biarkan sepatu atau tas premium Anda kusam. Percayakan pada ahlinya sekarang.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/6282139938887">
          <button className="px-10 py-4 bg-black text-[#D4AF37] font-bold text-lg rounded-full hover:bg-black/80 transition-all duration-300">
            Book Pickup Sekarang
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}