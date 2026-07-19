import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* ---------------- LEFT SIDE (Sticky Info & 2 Swapped Bottom Boxes) ---------------- */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              
              <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <span className="w-10 h-0.5 bg-sky-500"></span> 
                About Me
              </h2>
              
              <h3 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-[1.15]">
                Designing with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Logic.</span><br />
                Building with <span className="text-slate-900">Passion.</span>
              </h3>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                I am a full-stack developer dedicated to crafting robust, scalable, and visually stunning digital products. I bridge the gap between complex backend architectures and seamless frontend experiences.
              </p>

              {/* 2 Bottom Boxes */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                
                {/* Box 1 (Left): University Info & Skill Pills */}
                <div className="flex-[1.2] bg-gradient-to-br from-white to-sky-50/60 p-5 rounded-3xl shadow-md border border-sky-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-center relative overflow-hidden">
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
                  
                  <div className="mb-4 inline-block bg-white/90 backdrop-blur-md border border-sky-100 p-3.5 rounded-2xl relative z-10 shadow-sm w-full">
                    <p className="text-[11px] sm:text-xs font-black text-slate-800 flex items-center gap-2 mb-1.5">
                      <span className="text-sm">🎓</span> Computer Science
                    </p>
                    <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 flex items-center gap-2">
                      <span className="text-sm">📍</span> at Daffodil Int. University
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 relative z-10 w-full">
                    {["C++", "Java", "DSA", "OOP", "DBMS", "Flex/Lex"].map((skill) => (
                      <span key={skill} className="flex justify-center items-center py-1.5 bg-white text-sky-600 text-[10px] font-extrabold rounded-lg border border-sky-200 shadow-sm w-full text-center hover:bg-sky-50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Box 2 (Right): 3+ Projects & View Button */}
                <div className="flex-[0.8] bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center">
                  <h4 className="text-4xl md:text-5xl font-black text-sky-500 mb-2">3+</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center leading-relaxed mb-4">
                    Complex<br/>Projects
                  </p>
                  <Link href="#projects" className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-sky-500/20">
                    View Projects <span>→</span>
                  </Link>
                </div>

              </div>

            </div>
          </div>

          {/* ---------------- RIGHT SIDE (4 Bento Cards) ---------------- */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 lg:mt-0">
            
            {/* Card 1: Academic & Dev Focus */}
            <div className="group relative p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Academic & Dev Focus</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Pursuing CSE at DIU with a strong foundation in Data Structures, Algorithms, and Compiler Design. I seamlessly blend this core academic knowledge with modern web development to architect scalable applications.
                </p>
              </div>
            </div>

            {/* Card 2: Technical Arsenal */}
            <div className="group relative p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Technical Arsenal</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Specialized in the MERN stack. I leverage modern tools like Next.js, TypeScript, Tailwind CSS, and Prisma to create dynamic, type-safe, and highly responsive user interfaces.
                </p>
              </div>
            </div>

            {/* Card 3: Future Goals (Dark Premium Card) */}
            <div className="group relative p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-slate-800 text-sky-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Future Vision</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  My ultimate goal is to evolve into a top-tier Software Engineer. I am constantly refining my architectural patterns to thrive in elite, high-impact tech environments.
                </p>
              </div>
            </div>

            {/* Card 4: Engineering Philosophy */}
            <div className="group relative p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Philosophy</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  I believe in writing clean, self-documenting code. Beyond making things work, I focus on performance, secure APIs, and crafting accessible digital products.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}