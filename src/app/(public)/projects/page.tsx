import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Full Stack E-Commerce",
      description: "A complete e-commerce solution with product management, Cloudinary integration, and secure checkout.",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
    },
    {
      id: 2,
      title: "Social Media Platform",
      description: "A scalable social media app featuring posts, comments, dynamic routing, and a suggestion sidebar.",
      techStack: ["Next.js", "TypeScript", "Express", "Prisma"],
    },
    {
      id: 3,
      title: "Lexical Analyzer",
      description: "University lab project for matching IPv4 addresses and identifiers using Flex/Bison.",
      techStack: ["C++", "Flex/Lex", "Compiler Design"],
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition duration-300">
            {/* Image Placeholder */}
            <div className="h-48 bg-slate-200 flex items-center justify-center">
              <span className="text-slate-500 font-medium">Project Image</span>
            </div>
            
            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link 
                href={`/projects/${project.id}`} 
                className="mt-auto block w-full text-center bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}