import { MessageCircle } from 'lucide-react'; // Import ikon pesan

export default function FloatingWA() {
  return (
    <a 
      href="https://wa.me/6282139938887" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[9999] bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
    >
      <MessageCircle size={28} className="text-white" /> 
    </a>
  );
}