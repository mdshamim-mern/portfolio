"use client";

import { useEffect, useState } from "react";
import { FaTrash, FaExternalLinkAlt, FaGithub, FaImage, FaFolderOpen, FaEdit } from "react-icons/fa";
import Link from "next/link";

export default function ManageProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = () => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setProjects(data.data);
        } else if (Array.isArray(data)) {
          setProjects(data);
        } else {
          setProjects([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setProjects([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      
      if (data.success || res.ok) {
        setProjects(projects.filter((p) => p._id !== id && p.id !== id));
      } else {
        alert("Failed to delete project");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while deleting");
    }
  };

  return (
    <div className="p-8 lg:p-10 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">Manage Projects</h1>
        <Link 
          href="/dashboard/add-project" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 whitespace-nowrap"
        >
          + Add New Project
        </Link>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid gap-6">
          {projects.map((p: any) => (
            <div 
              key={p._id || p.id} 
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/60 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-5 items-center flex-1 min-w-0 w-full lg:w-auto">
                <div className="w-24 h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0 flex items-center justify-center group-hover:border-blue-200 transition-colors">
                  {p.images && p.images.length > 0 ? (
                    <img 
                      src={p.images[0]} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <div className={`text-slate-300 flex flex-col items-center ${p.images && p.images.length > 0 ? 'hidden' : ''}`}>
                    <FaImage className="text-2xl" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">{p.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2.5">
                    {(p.techStack || []).slice(0, 4).map((tech: string, i: number) => (
                      <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-bold uppercase tracking-wider border border-slate-200/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 shrink-0 flex-nowrap w-full lg:w-auto mt-4 lg:mt-0 pt-4 lg:pt-0 border-t border-slate-100 lg:border-t-0 overflow-x-auto pb-2 lg:pb-0">
                {p.livePreview && (
                  <a href={p.livePreview} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl font-bold text-sm transition-all border border-slate-200 hover:border-slate-300 hover:shadow-sm whitespace-nowrap">
                    <FaExternalLinkAlt className="text-blue-500" /> Live
                  </a>
                )}
                {p.repository && (
                  <a href={p.repository} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg whitespace-nowrap">
                    <FaGithub /> Repo
                  </a>
                )}
                
                {/* নতুন যুক্ত করা Edit বাটন */}
                <Link 
                  href={`/dashboard/projects/edit/${p._id || p.id}`} 
                  className="flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-slate-600 hover:text-blue-600 px-4 py-2.5 rounded-xl font-bold text-sm transition-all border border-slate-200 hover:border-blue-200 whitespace-nowrap"
                >
                  <FaEdit /> Edit
                </Link>

                <button 
                  onClick={() => handleDelete(p._id || p.id)} 
                  className="flex items-center justify-center gap-2 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 px-4 py-2.5 rounded-xl font-bold text-sm transition-all border border-slate-200 hover:border-red-200 whitespace-nowrap"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
          
          {projects.length === 0 && (
            <div className="text-center py-24 bg-white rounded-3xl border-2 border-slate-200 border-dashed">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFolderOpen className="text-3xl text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">No Projects Found</h3>
              <p className="text-slate-500 font-medium mb-6 max-w-md mx-auto">You haven't added any projects yet. Click the button below to add your first project.</p>
              <Link href="/dashboard/add-project" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap">
                Add Your First Project
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}