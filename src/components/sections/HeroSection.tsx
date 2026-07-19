"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const titles = ["Full Stack Developer", "Software Engineer", "AI Architect"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFade(true);
      }, 300);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="relative w-full pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50 min-h-screen flex items-center">
      
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-slate-50 z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 w-full">
        
        <div className="flex-1 text-center lg:text-left">
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-2 leading-normal whitespace-nowrap">
            Hi There I'm
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-black text-sky-500 mb-4 tracking-tight">
            Md. Shamim
          </h1>
          
          <div className="h-[40px] md:h-[48px] mb-6 flex justify-center lg:justify-start items-center overflow-hidden">
            <h3 
              className={`text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 transition-all duration-300 ease-in-out ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {titles[titleIndex]}
            </h3>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
            A passionate software engineer focused on building modern web applications, scalable backend architectures, and immersive user experiences. Ready to transform complex problems into premium digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link 
              href="#projects" 
              className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-sky-500/30 hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              View Projects →
            </Link>
            
            <a 
              href="/resume/Md_Shamim_Resume.pdf" 
              target="_blank"
              className="px-8 py-4 bg-white text-slate-700 font-bold rounded-full border border-slate-200 hover:border-sky-200 hover:text-sky-500 transition-all duration-300 shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto group"
            >
              <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Resume
            </a>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center items-center mt-10 lg:mt-0">
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-sky-500 p-2 shadow-2xl bg-white z-10">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-100">
              <Image 
                src="/images/shamim_formal.jpg" 
                alt="Md Shamim" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute top-10 -left-4 md:left-4 z-20 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="bg-sky-100 text-sky-500 p-2 rounded-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Expert In</p>
              <p className="text-sm font-black text-slate-800">MERN Stack</p>
            </div>
          </div>

          <div 
            className="absolute bottom-10 -right-4 md:right-4 z-20 bg-slate-900 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-800 animate-bounce"
            style={{ animationDuration: '3.5s' }}
          >
            <div className="bg-slate-800 text-sky-400 p-2 rounded-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Specialist</p>
              <p className="text-sm font-black text-white">Next.js & React</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
