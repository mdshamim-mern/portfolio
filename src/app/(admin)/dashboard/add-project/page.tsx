"use client";

import { useState } from "react";

export default function AddProjectForm() {
  const [formData, setFormData] = useState({
    title: "",
    overview: "",
    keyFeatures: "",
    clientCore: "",
    serverLogic: "",
    techStack: "",
    livePreview: "",
    repository: "",
    images: "",
    demoEmail: "",
    demoPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const payload = {
      ...formData,
      keyFeatures: formData.keyFeatures.split(",").map((item) => item.trim()),
      techStack: formData.techStack.split(",").map((item) => item.trim()),
      images: formData.images.split(",").map((item) => item.trim()),
    };

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Project added successfully!");
        setFormData({
          title: "", overview: "", keyFeatures: "", clientCore: "",
          serverLogic: "", techStack: "", livePreview: "", repository: "",
          images: "", demoEmail: "", demoPassword: ""
        });
      } else {
        setMessage("Failed to add project.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-2xl border border-slate-100 mt-10">
      <h2 className="text-3xl font-black text-slate-800 mb-6">Add New Project</h2>
      
      {message && (
        <div className="mb-4 p-4 text-sm font-semibold rounded-lg bg-green-50 text-green-600 border border-green-200">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold text-slate-700">Project Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition" placeholder="e.g. Inventory Management System" />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold text-slate-700">Overview (What, Why, For Whom)</label>
          <textarea name="overview" value={formData.overview} onChange={handleChange} required rows={3} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition" placeholder="Detailed overview of the project..."></textarea>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold text-slate-700">Key Features (Comma separated)</label>
          <textarea name="keyFeatures" value={formData.keyFeatures} onChange={handleChange} required rows={2} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition" placeholder="e.g. Firebase Auth, Real-time Chat, Dashboard"></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-700">Client Core Logic</label>
            <input type="text" name="clientCore" value={formData.clientCore} onChange={handleChange} required className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-sky-500 transition" placeholder="e.g. Dynamic routing, Redux state" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-700">Server Logic</label>
            <input type="text" name="serverLogic" value={formData.serverLogic} onChange={handleChange} required className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-sky-500 transition" placeholder="e.g. Node.js REST API, JWT Auth" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold text-slate-700">Tech Stack (Comma separated)</label>
          <input type="text" name="techStack" value={formData.techStack} onChange={handleChange} required className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-sky-500 transition" placeholder="e.g. React, Tailwind CSS, MongoDB, Express" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-700">Live Preview Link</label>
            <input type="url" name="livePreview" value={formData.livePreview} onChange={handleChange} required className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-sky-500 transition" placeholder="https://..." />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-700">GitHub Repository Link</label>
            <input type="url" name="repository" value={formData.repository} onChange={handleChange} required className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-sky-500 transition" placeholder="https://github.com/..." />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold text-slate-700">Project Images (Comma separated URLs)</label>
          <textarea name="images" value={formData.images} onChange={handleChange} required rows={2} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-sky-500 transition" placeholder="URL1, URL2, URL3"></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-700">Demo Email (Optional)</label>
            <input type="email" name="demoEmail" value={formData.demoEmail} onChange={handleChange} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-sky-500 transition" placeholder="admin@example.com" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-slate-700">Demo Password (Optional)</label>
            <input type="text" name="demoPassword" value={formData.demoPassword} onChange={handleChange} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-sky-500 transition" placeholder="123456" />
          </div>
        </div>

        <button type="submit" disabled={loading} className="mt-4 w-full bg-sky-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-sky-600 transition shadow-md disabled:bg-slate-400">
          {loading ? "Adding Project..." : "Save Project"}
        </button>
      </form>
    </div>
  );
}