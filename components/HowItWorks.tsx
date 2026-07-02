const steps = ["Book", "Pickup", "Treatment", "Delivery"];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto">
        <div className="relative flex flex-col md:flex-row justify-between gap-12">
          {/* Garis penghubung di tengah */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#303030] hidden md:block"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center bg-[#0A0A0A] px-4">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] bg-[#0A0A0A] mb-6">
                {i + 1}
              </div>
              <span className="text-white font-medium text-lg">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}