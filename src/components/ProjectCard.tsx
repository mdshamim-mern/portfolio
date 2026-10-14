"use client";
import Link from "next/link";
import { FaGithub, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { safeLink, cleanOverview } from "@/lib/links";
interface Project {
  _id?: string;
  id?: string;
  title?: string;
  overview?: string;
  techStack?: string[];
  livePreview?: string;
  repository?: string;
  images?: string[];
}
export default function ProjectCard({ project }: { project: Project }) {
  const id = project._id || project.id;
  const live = safeLink(project.livePreview);
  const repo = safeLink(project.repository);
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={safeLink(project.images?.[0], "/images/portfolio.png")}
          alt={`${project.title || "Project"} preview`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/portfolio.png";
          }}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold leading-snug text-slate-900">
          {project.title}
        </h3>
        <p className="mb-5 mt-3 line-clamp-3 text-sm leading-relaxed text-slate-500">
          {cleanOverview(project.overview)}
        </p>
        <div className="mb-7 flex flex-wrap gap-2">
          {project.techStack?.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="rounded-lg bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
          {id && (
            <Link
              href={`/projects/${id}`}
              className="mr-auto inline-flex min-h-11 items-center gap-2 rounded-xl px-2 text-sm font-bold text-slate-900 hover:text-sky-700"
            >
              View details <FaArrowRight aria-hidden />
            </Link>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live website`}
              className="grid h-11 w-11 place-items-center rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-100"
            >
              <FaExternalLinkAlt aria-hidden />
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} GitHub repository`}
              className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
            >
              <FaGithub aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
