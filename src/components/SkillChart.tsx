"use client";

import { useState } from "react";
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, 
  SiExpress, SiPostgresql, SiMongodb, SiPrisma, SiRedis, 
  SiNginx, SiPostman, SiCplusplus 
} from "react-icons/si";

import { 
  FaReact, FaNodeJs, FaDatabase, FaCode, FaLock, FaCogs, 
  FaDocker, FaAws, FaGithub, FaLinux, FaNetworkWired, 
  FaRobot, FaSearch, FaKeyboard, FaJava, FaMicrochip, FaWifi, FaBrain, FaArrowRight 
} from "react-icons/fa";

export default function SkillChart() {
  const [showAll, setShowAll] = useState(false);

  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Building responsive and highly interactive user interfaces.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
      ),
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Tanstack Query", icon: <FaDatabase /> },
        { name: "Shadcn UI", icon: <SiVercel /> }
      ]
    },
    {
      id: 2,
      title: "Backend Architecture",
      description: "Developing robust and scalable server-side applications.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
      ),
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <FaNetworkWired /> },
        { name: "JWT Auth", icon: <FaLock /> },
        { name: "Query Builder", icon: <FaDatabase /> },
        { name: "Modular Pattern", icon: <FaCode /> }
      ]
    },
    {
      id: 3,
      title: "Database & ORM",
      description: "Designing efficient data models and query optimizations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
      ),
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Prisma ORM", icon: <SiPrisma /> },
        { name: "pgvector", icon: <FaDatabase /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Normalization", icon: <FaCogs /> }
      ]
    },
    {
      id: 4,
      title: "Tools & Deployment",
      description: "Managing containerization, CI/CD pipelines, and cloud hosting.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
      ),
      skills: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS EC2 & S3", icon: <FaAws /> },
        { name: "GitHub Actions", icon: <FaGithub /> },
        { name: "NGINX", icon: <SiNginx /> },
        { name: "Linux", icon: <FaLinux /> },
        { name: "Postman", icon: <SiPostman /> }
      ]
    },
    {
      id: 5,
      title: "AI & Automation",
      description: "Integrating intelligent workflows and LLM orchestration.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
      ),
      skills: [
        { name: "LangChain", icon: <FaNetworkWired /> },
        { name: "RAG System", icon: <FaDatabase /> },
        { name: "OpenAI API", icon: <FaBrain /> },
        { name: "n8n Automation", icon: <FaRobot /> },
        { name: "Semantic Search", icon: <FaSearch /> },
        { name: "Prompt Eng.", icon: <FaKeyboard /> }
      ]
    },
    {
      id: 6,
      title: "Core Computer Science",
      description: "Strong theoretical foundation and problem-solving skills.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
      ),
      skills: [
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "DSA", icon: <FaNetworkWired /> },
        { name: "OOP", icon: <FaCode /> },
        { name: "Compiler Design", icon: <FaMicrochip /> },
        { name: "Computer Network", icon: <FaWifi /> }
      ]
    }
  ];

  const displayedCategories = showAll ? skillCategories : skillCategories.slice(0, 3);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-10">
        {displayedCategories.map((category) => (
          <div 
            key={category.id} 
            className="group relative bg-white border border-slate-200 shadow-sm rounded-3xl p-6 sm:p-8 hover:border-sky-300 hover:shadow-xl transition-all duration-500 flex flex-col h-full overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

            <div className="relative z-10 mb-6 flex flex-col items-start">
              <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-5 border border-sky-100 group-hover:scale-110 group-hover:bg-sky-100 transition-all duration-500">
                {category.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">{category.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="relative z-10 mt-auto pt-6 flex flex-wrap gap-2 sm:gap-2.5">
              {category.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="group/pill inline-flex items-center justify-center gap-2 text-center px-3 py-1.5 sm:px-3.5 sm:py-2 bg-slate-50 border border-slate-200 rounded-xl text-[11px] sm:text-xs font-semibold text-slate-700 hover:!bg-sky-50 hover:!border-sky-200 hover:!text-sky-700 transition-colors cursor-default whitespace-normal break-words leading-tight"
                >
                  <span className="text-sky-500 group-hover/pill:text-sky-600 text-sm sm:text-base transition-colors">
                    {skill.icon}
                  </span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={() => setShowAll(!showAll)}
        className="group flex items-center gap-2 bg-slate-900 hover:bg-sky-600 text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-sky-500/30"
      >
        {showAll ? "Show Less Skills" : "Show More Skills"}
        <FaArrowRight className={`transition-transform duration-300 ${showAll ? "-rotate-90" : "group-hover:translate-x-1"}`} />
      </button>
    </div>
  );
}