"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Tambahkan tanda tanya (?) setelah items
export default function ProductCard({ title, items, subItems }: { title: any, items?: any, subItems: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#303030] rounded-[24px] p-6 bg-[#111111] w-full md:w-[450px]">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <span className="text-[#D4AF37]">{isOpen ? "−" : "+"}</span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-6 space-y-4 text-gray-400">
{subItems.map((sub: { name: string; details: string[] }, i: number) => (
                <div key={i}>
                  <p className="font-bold text-[#D4AF37]">{sub.name}</p>
                  <ul className="list-disc pl-5 mt-2">
                    {sub.details.map((d, j: number) => <li key={j}>{d}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}