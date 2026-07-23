"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navStyle = (section: string) => {
    if (pathname === "/" && activeSection === section) {
      return "bg-white text-sky-600 font-bold shadow-sm ring-1 ring-slate-200/50";
    }
    return "text-slate-500 font-semibold hover:bg-slate-100/80 hover:text-sky-500";
  };

  if (pathname?.startsWith("/dashboard")) return null;

  return (
    <div className="fixed top-4 w-full z-50 px-4 md:px-8">
      
      <header className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/40 border border-white/80 rounded-full px-4 md:px-6 py-2.5 flex justify-between items-center transition-all duration-500">
        
        <div className="flex flex-col justify-center">
          <Link href="/#home" className="text-xl md:text-2xl font-black tracking-tighter leading-none">
            <span className="text-sky-500">Shamim</span><span className="text-slate-800">.dev</span>
          </Link>
          <span className="text-[10px] md:text-xs font-black text-slate-400 tracking-[0.2em] uppercase mt-0.5">
            Full Stack
          </span>
        </div>

        <nav className="hidden lg:flex items-center p-1.5 bg-slate-50 border border-slate-100/80 rounded-full space-x-1">
          <Link href="/#home" className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${navStyle('home')}`}>Home</Link>
          <Link href="/#about" className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${navStyle('about')}`}>About</Link>
          <Link href="/#skills" className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${navStyle('skills')}`}>Skills</Link>
          <Link href="/#projects" className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${navStyle('projects')}`}>Projects</Link>
          <Link href="/#services" className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${navStyle('services')}`}>Services</Link>
          <Link href="/#contact" className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${navStyle('contact')}`}>Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-3">
          <Link href="/dashboard" className="text-sm font-bold text-slate-400 hover:text-sky-500 transition-colors px-4 py-2 rounded-full hover:bg-slate-50">
            Admin
          </Link>
          <Link 
            href="/#contact" 
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 transform hover:-translate-y-0.5"
          >
            Let's Talk
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <Link href="/#contact" className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 shadow-md shadow-sky-500/30">
            Let's Talk
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-600 hover:text-sky-500 bg-slate-50 hover:bg-sky-50 rounded-full p-2 transition-all duration-300 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-3 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-3xl p-4 space-y-1 shadow-2xl duration-300">
          <Link href="/#home" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 rounded-2xl text-sm transition-all duration-300 ${navStyle('home')}`}>Home</Link>
          <Link href="/#about" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 rounded-2xl text-sm transition-all duration-300 ${navStyle('about')}`}>About</Link>
          <Link href="/#skills" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 rounded-2xl text-sm transition-all duration-300 ${navStyle('skills')}`}>Skills</Link>
          <Link href="/#projects" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 rounded-2xl text-sm transition-all duration-300 ${navStyle('projects')}`}>Projects</Link>
          <Link href="/#services" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 rounded-2xl text-sm transition-all duration-300 ${navStyle('services')}`}>Services</Link>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 rounded-2xl text-sm transition-all duration-300 ${navStyle('contact')}`}>Contact</Link>
          <div className="pt-2 mt-2 border-t border-slate-100">
            <Link href="/dashboard" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-2xl text-sm font-bold text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-all duration-300">Admin Dashboard</Link>
          </div>
        </div>
      )}
    </div>
  );
}