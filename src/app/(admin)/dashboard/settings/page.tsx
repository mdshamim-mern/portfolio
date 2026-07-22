"use client";

import { useState } from "react";
import { refreshProfile } from "@/actions/profileActions";

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
        <h1 className="text-3xl font-bold mb-8 text-slate-800">Profile Settings</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full p-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full p-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full p-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-slate-700">Hero Section Bio</label>
              <textarea name="heroBio" value={formData.heroBio} onChange={handleChange} placeholder="Leave blank to keep current" rows={3} className="w-full p-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none resize-none"></textarea>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-slate-700">Contact Section Bio</label>
              <textarea name="contactBio" value={formData.contactBio} onChange={handleChange} placeholder="Leave blank to keep current" rows={3} className="w-full p-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none resize-none"></textarea>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-slate-700">Profile Image URL</label>
              <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full p-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none" />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-slate-700">Resume PDF URL</label>
              <input type="text" name="resume" value={formData.resume} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full p-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none" />
            </div>
            
            <div className="md:col-span-2 mt-2">
              <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 mb-2">Social Links</h3>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">GitHub URL</label>
              <input type="text" name="github" value={formData.github} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full p-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">LinkedIn URL</label>
              <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full p-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Facebook URL</label>
              <input type="text" name="facebook" value={formData.facebook} onChange={handleChange} placeholder="Leave blank to keep current" className="w-full p-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all outline-none" />
            </div>
            
          </div>
          
          <div className="pt-4">
            <button type="submit" disabled={saving} className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg shadow-sky-500/30 disabled:opacity-70">
              {saving ? "Saving Updates..." : "Save Profile Information"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}