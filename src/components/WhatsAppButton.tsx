"use client";

import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname();

  if (pathname?.startsWith("/dashboard") || pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-12 z-[9999] flex items-end justify-end w-64 h-20 pointer-events-none">
      
      <a 
        href="https://wa.me/8801865190471" 
        target="_blank" 
        rel="noreferrer"
        className="absolute right-10 bottom-12 z-20 bg-slate-800 text-white text-[13px] font-semibold py-2.5 px-2 rounded-xl shadow-2xl flex items-center gap-2 hover:bg-slate-800 transition-all duration-300 pointer-events-auto animate-bounce"
        style={{ animationDuration: '2.5s' }}
      >
        <span className="text-sm">💬Let's talk on WhatsApp</span> 
      </a>

      <a
        href="https://wa.me/8801865190471"
        target="_blank"
        rel="noreferrer"
        className="absolute right-10 bottom-0 z-10 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 pointer-events-auto"
      >
        <span 
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" 
          style={{ animationDuration: '2s' }}
        ></span>
        
        <span 
          className="absolute inset-[-6px] rounded-full bg-[#25D366] opacity-40 animate-ping" 
          style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}
        ></span>

        <FaWhatsapp className="text-3xl relative z-20" />
        
        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 border-2 border-white z-30"></span>
      </a>
      
    </div>
  );
}