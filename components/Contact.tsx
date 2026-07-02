// src/components/Contact.tsx
import { Mail, MessageCircle, ShoppingBag } from "lucide-react"; // Pastikan sudah install lucide-react

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Kolom Kiri: Logo & Slogan */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="images/logo.png" alt="Logo" className="w-32 mb-6" /> {/* Ganti path logo Anda */}
          <h2 className="text-4xl font-bold text-white mb-4">Temukan Kami</h2>
          <p className="text-gray-400">
            Terhubung dengan kami melalui media sosial dan platform resmi untuk layanan terbaik.
          </p>
        </div>

        {/* Kolom Kanan: Daftar Kontak */}
        <div className="space-y-4">
          <ContactItem icon={<MessageCircle />} label="WhatsApp" text="0821-3993-8887" link="https://wa.me/6282139938887" />
          <ContactItem icon={<Mail />} label="Email" text="majapahittreatmentsidoarjo@gmail.com" link="mailto:majapahittreatmentsidoarjo@gmail.com" />
          <ContactItem icon={<ShoppingBag />} label="Shopee" text="Toko Resmi Kami" link="#" />
        </div>
      </div>
    </section>
  );
}

// Komponen Pembantu agar kode rapi
function ContactItem({ icon, label, text, link }: { icon: React.ReactNode, label: string, text: string, link: string }) {
  return (
    <a href={link} className="flex items-center gap-4 p-4 bg-[#111111] rounded-xl border border-[#303030] hover:border-[#D4AF37] transition-all">
      <div className="text-[#D4AF37]">{icon}</div>
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest">{label}</p>
        <p className="text-white font-medium">{text}</p>
      </div>
    </a>
  );
}