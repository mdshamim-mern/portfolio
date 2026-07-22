"use client";

import { useState, useEffect } from "react";
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
    bio: "remoto job high paying badly needed"
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch("/api/profile");
      const data = await res.json();
      if (data.success && data.data) {
        setFormData(data.data);
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-white ml-64 min-h-screen bg-[#0f172a]">Loading...</div>;

  return (
    <div className="p-8 ml-64 min-h-screen bg-[#0f172a] text-white">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl bg-gray-900 p-8 rounded-xl border border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-400">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-400">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-400">Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-400">Bio / Tagline</label>
            <input type="text" name="bio" value={formData.bio} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2 text-gray-400">Profile Image URL</label>
            <input type="text" name="image" value={formData.image} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" required />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2 text-gray-400">Resume PDF URL</label>
            <input type="text" name="resume" value={formData.resume} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" required />
          </div>
          
          <div className="md:col-span-2 mt-4">
            <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2 mb-4">Social Links</h3>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-400">GitHub URL</label>
            <input type="text" name="github" value={formData.github} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-400">LinkedIn URL</label>
            <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-400">Facebook URL</label>
            <input type="text" name="facebook" value={formData.facebook} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" required />
          </div>
          
        </div>
        
        <div className="pt-6">
          <button type="submit" disabled={saving} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-lg transition-colors disabled:opacity-70">
            {saving ? "Saving Updates..." : "Save Profile Information"}
          </button>
        </div>
      </form>
    </div>
  );
}