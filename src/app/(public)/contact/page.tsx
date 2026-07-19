"use client";

import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaUserAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50 py-24 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-10 h-0.5 bg-sky-500"></span> Contact
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-[1.15]">
            Reach out & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Let's Collaborate</span>
          </h1>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* ---------------- LEFT SIDE (Profile & Links) ---------------- */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Mini Profile Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-5">
              <div className="w-16 h-16 bg-sky-50 text-sky-500 rounded-full flex items-center justify-center flex-shrink-0 border border-sky-100">
                <FaUserAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Md Shamim</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 mb-3">Full-Stack Developer</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop me a line!
                </p>
              </div>
            </div>

            {/* Contact Links List */}
            <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-2">
              
              {/* WhatsApp */}
              <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                <div className="w-12 h-12 bg-green-50 text-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-slate-700">+880 1XX XXX XXXX</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:contact@shamim.dev" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                <div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Email</p>
                  <p className="text-sm font-semibold text-slate-700">contact@shamim.dev</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaLinkedin className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">LinkedIn</p>
                  <p className="text-sm font-semibold text-slate-700">Md Shamim</p>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaGithub className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">GitHub</p>
                  <p className="text-sm font-semibold text-slate-700">shamim-dev</p>
                </div>
              </a>

            </div>
          </div>

          {/* ---------------- RIGHT SIDE (Inquiry Form) ---------------- */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-lg shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Send an Inquiry</h3>
              
              <form className="space-y-6">
                
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-2xl px-5 py-4 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="johndoe@example.com" 
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-2xl px-5 py-4 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all"
                    required
                  />
                </div>

                {/* Project Type Field */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Project Type</label>
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-2xl px-5 py-4 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled selected>Select project category...</option>
                    <option value="fullstack">Full-Stack Development</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Architecture</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your project, goals, and timeline..." 
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-2xl px-5 py-4 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm py-4 rounded-2xl transition-all duration-300 shadow-md shadow-sky-500/30 hover:shadow-lg hover:shadow-sky-500/50 flex items-center justify-center gap-2 mt-4"
                >
                  Send Inquiry 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}