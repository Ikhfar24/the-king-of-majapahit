import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products"; // Tambahkan ini
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import WhyUs from "@/components/WhyUs";        // Baru
import HowItWorks from "@/components/HowItWorks"; // Baru
import FloatingWA from "@/components/FloatingWA";
import Contact from "@/components/Contact"; // Tambahkan ini
import Footer from "@/components/Footer";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white">
      <Navbar />
      <Hero />
      <div id="services"><Services /></div>
      <div id="products"><Products /></div>
      
      <WhyUs />
      <HowItWorks />
      <Location />
      <div id="testimonials"><Testimonials /></div>
      <CTA />
      <div id="contact"><Contact /></div>
      <FloatingWA />

      <Footer />
    </main>
  );
}