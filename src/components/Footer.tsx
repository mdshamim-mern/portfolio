"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Footer() {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/dashboard");
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/profile");
        const data = await res.json();
        if (data.success) {
          setProfile(data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <footer className={`bg-[#0b1120] py-6 mt-auto ${isAdminPage ? "ml-64" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-[13px] text-slate-400">
          © {new Date().getFullYear()} <span className="text-white font-semibold">{profile?.name || "Md Shamim"}</span>. All Rights Reserved.
        </p>
        
        <Link 
          href="#home"
          className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-300 text-xs font-semibold hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
        >
          Back to Top <span className="text-lg leading-none group-hover:-translate-y-0.5 transition-transform duration-300">↑</span>
        </Link>

      </div>
    </footer>
  );
}