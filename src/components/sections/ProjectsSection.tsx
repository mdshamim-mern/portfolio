"use client";
import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
export default function ProjectsSection() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    fetch("/api/projects", { signal: controller.signal })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok || !data.success)
          throw new Error("Projects are temporarily unavailable.");
        return data.data;
      })
      .then(setProjects)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [retry]);
  return (
    <section id="projects" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className="eyebrow mb-4">SELECTED WORK</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Ideas turned into thoughtful digital experiences.
          </p>
        </div>
        {error ? (
          <div
            role="alert"
            className="rounded-2xl border border-slate-200 bg-white p-8 text-center"
          >
            <p className="text-slate-500">{error}</p>
            <button
              onClick={() => setRetry(retry + 1)}
              className="secondary-button mt-4"
            >
              Try again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              [1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
                  aria-hidden="true"
                >
                  <div className="aspect-[16/10] animate-pulse bg-slate-200" />
                  <div className="space-y-4 p-6">
                    <div className="h-5 w-2/3 animate-pulse rounded bg-slate-100" />
                    <div className="h-16 animate-pulse rounded bg-slate-100" />
                  </div>
                </div>
              ))
            ) : projects.length ? (
              projects.map((project) => (
                <ProjectCard
                  key={project._id || project.id}
                  project={project}
                />
              ))
            ) : (
              <p className="col-span-full py-10 text-center text-slate-500">
                New projects are on the way. Check back soon.
              </p>
            )}
          </div>
        )}
        {loading && (
          <p role="status" className="sr-only">
            Loading projects
          </p>
        )}
      </div>
    </section>
  );
}
