"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { cleanOverview, safeLink } from "@/lib/links";
import { portfolioClientSource } from "@/lib/project-content";
interface Project {
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
  challenges?: string;
  futurePlans?: string;
}
export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [active, setActive] = useState(0);
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    setActive(0);
    fetch(`/api/projects/${id}`, { signal: controller.signal })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok || !data.success)
          throw new Error(
            res.status === 404
              ? "This project could not be found."
              : "This project could not be loaded.",
          );
        return data.data;
      })
      .then(setProject)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [id, retry]);
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <Link
        href="/#projects"
        className="mb-6 inline-flex min-h-11 items-center text-sm font-semibold text-slate-500 hover:text-sky-700"
      >
        ← Back to projects
      </Link>
      {loading ? (
        <p
          role="status"
          className="rounded-3xl bg-white p-12 text-center text-slate-500"
        >
          Loading project details…
        </p>
      ) : error || !project ? (
        <div className="rounded-3xl bg-white p-8 text-center">
          <p role="alert">{error || "Project not found."}</p>
          <button
            className="secondary-button mt-5"
            onClick={() => setRetry(retry + 1)}
          >
            Try again
          </button>
        </div>
      ) : (
        <article className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-xl shadow-slate-200/40">
          <div className="bg-slate-100 p-3 sm:p-6">
            <img
              src={safeLink(project.images?.[active], "/images/portfolio.png")}
              alt={`${project.title} screenshot ${active + 1}`}
              className="max-h-[560px] w-full rounded-2xl object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/portfolio.png";
              }}
            />
            {project.images?.length > 1 && (
              <div
                className="mt-4 flex gap-3 overflow-x-auto pb-2"
                aria-label="Project screenshots"
              >
                {project.images.map((src, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    aria-label={`Show screenshot ${index + 1}`}
                    aria-pressed={index === active}
                    className={`shrink-0 overflow-hidden rounded-xl border-2 p-1 ${index === active ? "border-sky-600" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <img
                      src={safeLink(src, "/images/portfolio.png")}
                      alt=""
                      className="h-16 w-24 rounded-lg object-cover sm:h-20 sm:w-32"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-9 p-5 sm:p-8 lg:p-12">
            <header>
              <p className="eyebrow mb-3">PROJECT CASE STUDY</p>
              <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <div className="mt-6 flex flex-wrap gap-3">
                {safeLink(project.livePreview) && (
                  <a
                    href={safeLink(project.livePreview)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-button"
                  >
                    Live demo ↗
                  </a>
                )}
                {safeLink(project.repository) && (
                  <a
                    href={safeLink(project.repository)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button"
                  >
                    {project.repository === portfolioClientSource ? "Client source ↗" : "GitHub repository ↗"}
                  </a>
                )}
              </div>
            </header>
            <section>
              <h2 className="mb-4 text-xl font-bold">Overview</h2>
              <p className="leading-relaxed text-slate-600">
                {cleanOverview(project.overview)}
              </p>
            </section>
            <section>
              <h2 className="mb-4 text-xl font-bold">Technology stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
            <section>
              <h2 className="mb-4 text-xl font-bold">Key features</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {project.keyFeatures?.map((feature, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-slate-600"
                  >
                    <span aria-hidden className="text-sky-600">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
            <div className="grid gap-5 md:grid-cols-2">
              {[
                ["Client architecture", project.clientCore],
                ["Server architecture", project.serverLogic],
                ["Challenges faced", project.challenges],
                ["Improvements & future plans", project.futurePlans],
              ]
                .filter(([, text]) => text)
                .map(([title, text]) => (
                  <section
                    key={title}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5 sm:p-6"
                  >
                    <h2 className="mb-3 text-lg font-bold">{title}</h2>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-slate-600">
                      {text}
                    </p>
                  </section>
                ))}
            </div>
            {(project.demoEmail || project.demoPassword) && (
              <section className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                <h2 className="mb-4 font-bold">Try the demo</h2>
                <dl className="grid gap-4 sm:grid-cols-2">
                  {project.demoEmail && (
                    <div>
                      <dt className="text-xs font-bold text-slate-500">
                        EMAIL
                      </dt>
                      <dd className="mt-1 break-all font-mono text-sm">
                        {project.demoEmail}
                      </dd>
                    </div>
                  )}
                  {project.demoPassword && (
                    <div>
                      <dt className="text-xs font-bold text-slate-500">
                        PASSWORD
                      </dt>
                      <dd className="mt-1 break-all font-mono text-sm">
                        {project.demoPassword}
                      </dd>
                    </div>
                  )}
                </dl>
              </section>
            )}
          </div>
        </article>
      )}
    </div>
  );
}
