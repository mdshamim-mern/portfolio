"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation"; 

interface ProjectType {
  _id: string;
  title: string;
  overview: string;
  keyFeatures: string[];
  clientCore: string;
  serverLogic: string;
  techStack: string[];
  livePreview: string;
  repository: string;
  images: string[];
  demoEmail?: string;
  demoPassword?: string;
}

export default function ProjectDetails() {
  const params = useParams(); 
  const [project, setProject] = useState<ProjectType | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0); 

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${params.id}`);
        const data = await res.json();
        if (data.success) {
          setProject(data.data);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-bold text-2xl text-sky-500 animate-pulse">Loading amazing details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bold text-2xl text-red-500">
        Project not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
        
        <div className="p-6 bg-slate-100 border-b border-slate-200">
          <img 
            src={project.images[activeImage]} 
            alt={project.title} 
            className="w-full h-[300px] md:h-[500px] object-cover rounded-xl shadow-sm mb-4 transition-all duration-500" 
          />
          <div className="flex gap-3 overflow-x-auto pb-2">
            {project.images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Thumbnail ${index + 1}`} 
                onClick={() => setActiveImage(index)} 
                className={`h-20 w-32 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                  activeImage === index ? 'border-sky-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-8 md:p-12">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-black text-sky-500 tracking-widest uppercase bg-sky-50 px-3 py-1 rounded-full mb-3 inline-block">
                FULL STACK
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900">{project.title}</h1>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={project.livePreview} target="_blank" className="bg-sky-500 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-sky-600 transition flex items-center justify-center gap-2">
                LIVE DEMO
              </Link>
              <Link href={project.repository} target="_blank" className="border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-lg font-bold hover:border-slate-400 transition flex items-center justify-center gap-2">
                FULL STACK CODE
              </Link>
            </div>
          </div>

          {(project.demoEmail || project.demoPassword) && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
              <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-500 rounded-full animate-ping"></span>
                Demo Credentials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-500 font-medium text-xs mb-1 uppercase">Email</p>
                  <p className="font-bold text-slate-900 bg-white border border-slate-200 px-3 py-2 rounded">{project.demoEmail}</p>
                </div>
                <div>
                  <p className="text-slate-500 font-medium text-xs mb-1 uppercase">Password</p>
                  <p className="font-bold text-slate-900 bg-white border border-slate-200 px-3 py-2 rounded">{project.demoPassword}</p>
                </div>
              </div>
            </div>
          )}

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Overview</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{project.overview}</p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 font-medium">
                  <span className="text-sky-500 mt-1 text-xl">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Client & Server Logic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 bg-slate-50 p-8 rounded-xl border border-slate-100">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Client Core</h4>
              <p className="text-slate-800 font-semibold">{project.clientCore}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Server Logic</h4>
              <p className="text-slate-800 font-semibold">{project.serverLogic}</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span key={index} className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-5 py-2 rounded-lg text-sm font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

