export default function WhyUs() {
  const features = ["Professional Treatment", "Premium Chemicals", "Experienced Team", "Pickup & Delivery"];
  
  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-20">
          Why <span className="text-[#D4AF37]">Choose Us?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-[#111111] border border-[#303030] p-10 rounded-[16px] hover:border-[#D4AF37] transition-all duration-500 group">
              <div className="text-[#D4AF37] mb-4 text-3xl font-light">0{i + 1}</div>
              <h3 className="text-white font-bold text-xl">{f}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}