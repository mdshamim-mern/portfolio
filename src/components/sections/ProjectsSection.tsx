"use client"; 

import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        if (data.success) {
          setProjects(data.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-slate-600 text-lg">Check out some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <p className="col-span-full text-center text-slate-500 font-bold text-xl py-10">
              Loading projects...
            </p>
          ) : projects.length > 0 ? (
            projects.map((project: any) => (
              <ProjectCard key={project._id || project.id} project={project} />
            ))
          ) : (
            <p className="col-span-full text-center text-slate-500 font-bold text-xl py-10">
              No projects added yet. Please add a project from the admin dashboard!
            </p>
          )}
        </div>

      </div>
    </section>
  );
}