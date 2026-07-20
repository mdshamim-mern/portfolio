import ProjectCard from "../ProjectCard"; 
import prisma from "@/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";

export default async function ProjectsSection() {
  noStore(); 

  let projects: any[] = [];
  try {
    const rawProjects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    projects = JSON.parse(JSON.stringify(rawProjects));
  } catch (error) {
    console.error("Failed to fetch projects from DB", error);
  }

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-slate-600 text-lg">Check out some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
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