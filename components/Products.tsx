import ProductCard from "./ProductCard";

export default function Products() {
  // Pastikan kedua data ini ada di dalam array
  const laundrySepatu = [
    { name: "Set Chemical Sepatu (Rp 85.000)", details: ["Antiseptic", "Suede Lotion", "Clean Guard", "Cleaner & Conditioner (250ml)"] },
    { name: "Set Laundry Sepatu", details: ["Sikat Halus & Kasar: Rp 65.000", "Parfum, Lotion, Antinoda, Detergen", "Sikat Panjang: Rp 25.000", "Microfiber: Rp 15.000", "Catokan Sepatu"] },
    { name: "Leather Balsam (Rp 55.000)", details: ["Untuk sepatu & tas kulit", "Tersedia 50gr & 100gr"] }
  ];

  const supportingLaundry = [
    { name: "Konsetrat Softener (Rp 150.000)", details: ["Untuk melembutkan & mengharumkan Pakaian", "30 Liter", "Aroma: Ocean Fresh, Sakura, Snappy, Downy, Ifara"] },
    { name: "Konsetrat Detergent (Rp 170.000)", details: ["Deterjen cair siap jual", "Lebih hemat", "Hasil cucian bersih, busa melimpah, wangi tahan lama", "Tambahan air 25lt"] },
    { name: "Konsetrat Cuci Piring (Rp 225.000)", details: ["Hemat penggunaan rumah tangga & usaha", "Efektif angkat minyak dan lemak"] }
  ];

  return (
    <section id="products" className="py-24 px-6 bg-[#0A0A0A]">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
        Our <span className="text-[#D4AF37]">Products</span>
      </h2>
      
      {/* Container untuk menampung kedua kartu */}
      <div className="flex flex-col items-center gap-6">
        <ProductCard title="Laundry Sepatu" subItems={laundrySepatu} />
        <ProductCard title="Supporting Laundry" subItems={supportingLaundry} />
      </div>
    </section>
  );
}