import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface ProjectType {
  _id?: string;
  id?: string;
  title?: string;
  overview?: string;
  techStack?: string[];
  livePreview?: string;
  repository?: string;
  images?: string[];
}

export default function ProjectCard({ project }: { project: ProjectType }) {
  const projectId = project?._id || project?.id || "";
  
  const imageUrl = project?.images && project.images.length > 0 
    ? project.images[0] 
    : "https://placehold.co/600x400/png?text=No+Image";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      
      <div className="w-full h-56 overflow-hidden bg-slate-100 flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={project?.title || "Project Image"} 
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          {project?.title || "Untitled Project"}
        </h2>
        
        <p className="text-gray-600 text-sm mb-5 line-clamp-3">
          {project?.overview || "No description available for this project."}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {(project?.techStack || []).slice(0, 3).map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2">
        
          <a 
            href={project?.livePreview || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white text-xs text-center font-bold py-2 rounded-lg transition-colors flex items-center justify-center"
          >
            LIVE
          </a>

          <a 
            href={project?.repository || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-white text-xs text-center font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1"
          >
            <FaGithub className="text-sm" /> REPO
          </a>
          
          <Link 
            href={`/projects/${projectId}`} 
            className="border-2 border-slate-200 hover:border-slate-300 text-slate-700 text-xs text-center font-bold py-2 rounded-lg transition-colors flex items-center justify-center"
          >
            DETAILS
          </Link>

        </div>
      </div>
    </div>
  );
}