"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    images: "",
    techStack: "",
    livePreview: "",
    repository: "",
    projectType: "Full Stack"
  });

  useEffect(() => {
    if (id) {
      fetch(`/api/projects/${id}`)
        .then(res => res.json())
        .then(data => {
          const project = data.data || data;
          setFormData({
            title: project.title || "",
            // Fix: Checking both 'description' and 'overview' from backend
            description: project.description || project.overview || "",
            images: project.images ? project.images.join(", ") : "",
            techStack: project.techStack ? project.techStack.join(", ") : "",
            livePreview: project.livePreview || "",
            repository: project.repository || "",
            projectType: project.projectType || "Full Stack"
          });
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      ...formData,
      // Fix: Sending it as 'overview' too just in case your DB requires it
      overview: formData.description,
      images: formData.images.split(",").map(i => i.trim()).filter(i => i),
      techStack: formData.techStack.split(",").map(t => t.trim()).filter(t => t),
    };

    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert("Project Updated Successfully!");
        router.push("/dashboard/projects");
      } else {
        alert("Failed to update project");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating project");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="p-10 text-center font-bold text-slate-500">Loading project data...</div>;
  }

  return (
    <div className="p-8 lg:p-10 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-black text-slate-800 mb-8">Edit Project</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-3xl">
        <div className="grid gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Project Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows={4} required className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Image URLs (Comma separated)</label>
            <input type="text" name="images" value={formData.images} onChange={handleChange} placeholder="https://cloudinary.com/... , https://..." className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Tech Stack (Comma separated)</label>
            <input type="text" name="techStack" value={formData.techStack} onChange={handleChange} placeholder="React, Node.js, MongoDB" required className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Live URL</label>
              <input type="text" name="livePreview" value={formData.livePreview} onChange={handleChange} className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Repository URL</label>
              <input type="text" name="repository" value={formData.repository} onChange={handleChange} className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button type="submit" disabled={submitting} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all disabled:opacity-50">
            {submitting ? "Updating..." : "Update Project"}
          </button>
          <button type="button" onClick={() => router.push("/dashboard/projects")} className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-8 py-3 rounded-xl font-bold transition-all">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}