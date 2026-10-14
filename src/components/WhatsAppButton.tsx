"use client";

import { useEffect, useState } from "react";
import { phoneDigits } from "@/lib/links";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [phone, setPhone] = useState("8801865190471");
  useEffect(() => {
    if (pathname.startsWith("/dashboard") || pathname === "/login") return;
    let active = true;
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        if (active && data.success && data.data?.phone)
          setPhone(phoneDigits(data.data.phone));
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [pathname]);

  if (
    pathname?.startsWith("/dashboard") ||
    pathname?.startsWith("/admin") ||
    pathname === "/login"
  ) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex items-end justify-end w-14 h-14 pointer-events-none">
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noreferrer"
        className="absolute right-0 bottom-16 hidden w-max whitespace-nowrap sm:flex z-20 bg-slate-800 text-white text-[13px] font-semibold py-2.5 px-2 rounded-xl shadow-2xl flex items-center gap-2 hover:bg-slate-800 transition-all duration-300 pointer-events-auto animate-bounce"
        style={{ animationDuration: "2.5s" }}
      >
        <span className="text-sm">💬Let's talk on WhatsApp</span>
      </a>

      <a
        aria-label="Chat on WhatsApp"
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noreferrer"
        className="absolute right-0 bottom-0 z-10 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 pointer-events-auto"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
          style={{ animationDuration: "2s" }}
        ></span>

        <span
          className="absolute inset-[-6px] rounded-full bg-[#25D366] opacity-40 animate-ping"
          style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
        ></span>

        <FaWhatsapp className="text-3xl relative z-20" />

        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 border-2 border-white z-30"></span>
      </a>
    </div>
  );
}
