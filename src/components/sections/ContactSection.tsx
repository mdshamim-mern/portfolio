"use client";

import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { useState } from 'react';

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(""); 

    const form = event.currentTarget;
    const formData = new FormData(form);

    const dbData = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("project_type"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const data = await response.json();

      if (response.status === 200 && data.success) {
        try {
          await fetch("/api/messages", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dbData),
          });
        } catch (dbError) {
          console.error("Database save error:", dbError);
        }

        setResult("✅ Message Sent Successfully! I will get back to you soon.");
        
        form.reset(); 
      } else {
        console.log("Web3Forms Error Data:", data);
        setResult(`❌ Form Error: ${data.message || "Invalid response from server"}`);
      }
    } catch (error: any) {
      console.error("Full Catch Error:", error);
      setResult(`❌ Error: ${error.message || "Failed to execute fetch request"}`);
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="w-full bg-slate-50 py-24 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-10 h-0.5 bg-sky-500"></span> Contact
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-[1.15]">
            Reach out & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Let's Collaborate</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-5">
              
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-sky-100 flex-shrink-0 bg-slate-100 relative">
                <Image 
                  src="/images/shamim_formal.jpg" 
                  alt="Md Shamim" 
                  fill 
                  sizes="64px" 
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800">Md Shamim</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 mb-3">Full-Stack Developer</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop me a line!
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-2">
              
              <a href="https://wa.me/8801865190471" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                <div className="w-12 h-12 bg-green-50 text-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-slate-700">+880 1865190471</p>
                </div>
              </a>

              <a href="mailto:mdshamim.mern@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                <div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Email</p>
                  <p className="text-sm font-semibold text-slate-700">mdshamim.mern@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/md-shamim471" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaLinkedin className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">LinkedIn</p>
                  <p className="text-sm font-semibold text-slate-700">Md Shamim</p>
                </div>
              </a>

              <a href="https://www.facebook.com/share/1HJb2Cwxvt/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaFacebook className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Facebook</p>
                  <p className="text-sm font-semibold text-slate-700">Md Shamim</p>
                </div>
              </a>

              <a href="https://github.com/mdshamim-mern" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaGithub className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">GitHub</p>
                  <p className="text-sm font-semibold text-slate-700">mdshamim-mern</p>
                </div>
              </a>

            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-lg shadow-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Send an Inquiry</h3>
              
              <form onSubmit={onSubmit} className="space-y-6">
                
                <input type="hidden" name="access_key" value="f16be326-2cea-40e1-8f10-02e6190b17b2" />
                <input type="hidden" name="subject" value="New message from Shamim.dev Portfolio" />

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="John Doe" 
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-2xl px-5 py-4 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="johndoe@example.com" 
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-2xl px-5 py-4 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Project Type</label>
                  <select 
                    name="project_type"
                    defaultValue="" 
                    className="w-full bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-2xl px-5 py-4 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select project category...</option> 
                    <option value="Full-Stack Development">Full-Stack Development</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Backend Architecture">Backend Architecture</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project, goals, and timeline..." 
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-2xl px-5 py-4 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm py-4 rounded-2xl transition-all duration-300 shadow-md shadow-sky-500/30 hover:shadow-lg hover:shadow-sky-500/50 flex items-center justify-center gap-2 mt-4 group disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Inquiry 
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    </>
                  )}
                </button>

                {result && (
                  <div className={`text-sm font-semibold p-4 rounded-2xl mt-4 text-center transition-all ${result.includes('❌') ? 'bg-red-50 text-red-500 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
                    {result}
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


