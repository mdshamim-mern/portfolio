"use client";

import { useState } from "react";
import { refreshProfile } from "@/actions/profileActions";
import { 
  FaUserCog, FaUser, FaEnvelope, FaPhone, FaHeading, 
  FaAddressCard, FaImage, FaFilePdf, FaGithub, FaLinkedin, FaFacebook 
} from "react-icons/fa";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    image: "",
    resume: "",
    github: "",
    linkedin: "",
    facebook: "",
    heroBio: "",
    contactBio: ""
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        await refreshProfile();
        alert("Profile updated successfully!");
        setFormData({
          name: "", email: "", phone: "", image: "", resume: "",
          github: "", linkedin: "", facebook: "", heroBio: "", contactBio: ""
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-5xl">
        
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-sky-100 rounded-xl text-sky-500 shadow-sm">
            <FaUserCog className="text-2xl" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Profile Settings</h1>
            <p className="text-sm text-slate-500 mt-1 font-medium">Update your personal details and social links</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-sky-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FaUser />
                </div>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full pl-11 p-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none font-medium" />
              </div>
            </div>
            
            {/* Email */}
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FaEnvelope />
                </div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full pl-11 p-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none font-medium" />
              </div>
            </div>
            
            {/* Phone */}
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">Phone</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FaPhone />
                </div>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full pl-11 p-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none font-medium" />
              </div>
            </div>

            {/* Hero Section Bio */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold mb-2 text-slate-700">Hero Section Bio</label>
              <div className="relative">
                <div className="absolute top-4 left-4 flex items-center pointer-events-none text-slate-400">
                  <FaHeading />
                </div>
                <textarea name="heroBio" value={formData.heroBio} onChange={handleChange} placeholder="Leave blank to keep current" rows={3} className="w-full pl-11 p-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none resize-none font-medium"></textarea>
              </div>
            </div>

            {/* Contact Section Bio */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold mb-2 text-slate-700">Contact Section Bio</label>
              <div className="relative">
                <div className="absolute top-4 left-4 flex items-center pointer-events-none text-slate-400">
                  <FaAddressCard />
                </div>
                <textarea name="contactBio" value={formData.contactBio} onChange={handleChange} placeholder="Leave blank to keep current" rows={3} className="w-full pl-11 p-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none resize-none font-medium"></textarea>
              </div>
            </div>
            
            {/* Image URL */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold mb-2 text-slate-700">Profile Image URL</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FaImage />
                </div>
                <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full pl-11 p-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none font-medium" />
              </div>
            </div>
            
            {/* Resume URL */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold mb-2 text-slate-700">Resume PDF URL</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <FaFilePdf />
                </div>
                <input type="text" name="resume" value={formData.resume} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full pl-11 p-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none font-medium" />
              </div>
            </div>
            
            {/* Social Links Section */}
            <div className="md:col-span-2 mt-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-2">
                <h3 className="text-lg font-black text-slate-800">Social Links</h3>
              </div>
            </div>

            {/* GitHub */}
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">GitHub URL</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-700">
                  <FaGithub />
                </div>
                <input type="text" name="github" value={formData.github} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full pl-11 p-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-slate-500/30 focus:border-slate-500 transition-all outline-none font-medium" />
              </div>
            </div>
            
            {/* LinkedIn */}
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">LinkedIn URL</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-600">
                  <FaLinkedin />
                </div>
                <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full pl-11 p-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all outline-none font-medium" />
              </div>
            </div>
            
            {/* Facebook */}
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-700">Facebook URL</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-500">
                  <FaFacebook />
                </div>
                <input type="text" name="facebook" value={formData.facebook} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full pl-11 p-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all outline-none font-medium" />
              </div>
            </div>
            
          </div>
          
          <div className="pt-6 mt-4 border-t border-slate-100 relative z-10">
            <button type="submit" disabled={saving} className="w-full bg-sky-500 hover:bg-sky-600 text-white font-black py-4 px-4 rounded-xl transition-all shadow-lg shadow-sky-500/30 disabled:opacity-70 flex justify-center items-center gap-2 text-lg">
              {saving ? "Saving Updates..." : "Save Profile Information"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}