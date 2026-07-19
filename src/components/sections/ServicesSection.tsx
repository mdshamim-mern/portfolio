export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Services Header */}
        <div className="mb-16">
          <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-10 h-0.5 bg-sky-500"></span> Capabilities
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 leading-[1.15]">
            Services & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">What I Bring To The Table</span>
          </h2>
        </div>
        
        {/* Services Grid (2x2 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Service 1: Full-Stack Web Apps */}
          <div className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:border-sky-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-8 right-8 px-3 py-1 border border-slate-200 rounded-full text-[9px] sm:text-[10px] font-bold text-slate-500 tracking-widest uppercase group-hover:border-sky-200 group-hover:text-sky-600 transition-colors bg-white z-10">
              MERN / NEXT.JS
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 relative z-10">Full-Stack Web Apps</h3>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10">
              Building production-ready MERN & Next.js applications tailored for high scalability, type-safe structures, and clean modular architecture.
            </p>
          </div>

          {/* Service 2: Backend & API Architecture */}
          <div className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:border-sky-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-8 right-8 px-3 py-1 border border-slate-200 rounded-full text-[9px] sm:text-[10px] font-bold text-slate-500 tracking-widest uppercase group-hover:border-sky-200 group-hover:text-sky-600 transition-colors bg-white z-10">
              NODE.JS / PRISMA
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 relative z-10">Backend Architecture</h3>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10">
              Developing secure, high-performance server-side APIs with Node.js and Express, coupled with advanced database modeling using PostgreSQL and Prisma ORM.
            </p>
          </div>

          {/* Service 3: Cloud & DevOps Solutions */}
          <div className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:border-sky-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-8 right-8 px-3 py-1 border border-slate-200 rounded-full text-[9px] sm:text-[10px] font-bold text-slate-500 tracking-widest uppercase group-hover:border-sky-200 group-hover:text-sky-600 transition-colors bg-white z-10">
              DEVOPS / AWS
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-teal-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 relative z-10">Cloud & DevOps</h3>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10">
              Streamlining deployments through Docker containerization, automated CI/CD pipelines via GitHub Actions, and secure hosting on AWS EC2 & S3.
            </p>
          </div>

          {/* Service 4: AI & Automation Integration */}
          <div className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:border-sky-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-8 right-8 px-3 py-1 border border-slate-200 rounded-full text-[9px] sm:text-[10px] font-bold text-slate-500 tracking-widest uppercase group-hover:border-sky-200 group-hover:text-sky-600 transition-colors bg-white z-10">
              AI / AUTOMATION
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-rose-500/20 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 relative z-10">AI & Automation</h3>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10">
              Integrating intelligent LLM orchestration using LangChain, RAG systems, and self-hosted n8n workflows to automate business processes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}