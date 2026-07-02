export default function Features() {
  const features = [
    "Professional Treatment", "Premium Chemicals", 
    "Experienced Team", "Pickup & Delivery"
  ];

  return (
    <section className="py-20 px-10 bg-rich-black">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <div key={i} className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:border-gold transition-colors text-center">
            <h3 className="text-white font-semibold">{feature}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}