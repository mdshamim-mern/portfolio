"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const empty = {
  title: "",
  overview: "",
  keyFeatures: "",
  clientCore: "",
  serverLogic: "",
  techStack: "",
  livePreview: "",
  repository: "",
  images: "",
  demoEmail: "",
  demoPassword: "",
  challenges: "",
  futurePlans: "",
};
const fields: {
  name: keyof typeof empty;
  label: string;
  hint?: string;
  multiline?: boolean;
  optional?: boolean;
  type?: string;
}[] = [
  { name: "title", label: "Project title" },
  {
    name: "overview",
    label: "Overview",
    multiline: true,
    hint: "What you built, who it helps, and why it matters.",
  },
  {
    name: "keyFeatures",
    label: "Key features",
    multiline: true,
    hint: "One feature per line.",
  },
  {
    name: "techStack",
    label: "Technology stack",
    hint: "Separate technologies with commas.",
  },
  { name: "clientCore", label: "Client architecture", multiline: true },
  { name: "serverLogic", label: "Server architecture", multiline: true },
  { name: "livePreview", label: "Live project URL", type: "url" },
  { name: "repository", label: "GitHub repository URL", type: "url" },
  {
    name: "images",
    label: "Project images",
    multiline: true,
    hint: "One image URL per line. The first image is the cover.",
  },
  {
    name: "challenges",
    label: "Challenges faced",
    multiline: true,
    optional: true,
    hint: "Describe actual development challenges and how you solved them.",
  },
  {
    name: "futurePlans",
    label: "Improvements & future plans",
    multiline: true,
    optional: true,
  },
  {
    name: "demoEmail",
    label: "Public demo email",
    type: "email",
    optional: true,
  },
  {
    name: "demoPassword",
    label: "Public demo password",
    optional: true,
    hint: "Use a restricted demo account only. This is visible on your portfolio.",
  },
];
export default function ProjectForm({ projectId }: { projectId?: string }) {
  const router = useRouter();
  const [values, setValues] = useState(empty);
  const [loading, setLoading] = useState(!!projectId);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    if (!projectId) return;
    const controller = new AbortController();
    setLoading(true);
    setError("");
    fetch(`/api/projects/${projectId}`, { signal: controller.signal })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok || !data.success)
          throw new Error(data.error || "Could not load this project.");
        return data.data;
      })
      .then((project) => {
        const next = { ...empty };
        for (const key of Object.keys(empty) as (keyof typeof empty)[])
          next[key] = Array.isArray(project[key])
            ? project[key].join(key === "techStack" ? ", " : "\n")
            : project[key] || "";
        setValues(next);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [projectId, retry]);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const list = (value: string, commas = false) =>
      value
        .split(commas ? /[,\n]/ : /\n/)
        .map((x) => x.trim())
        .filter(Boolean);
    const payload = {
      ...values,
      images: list(values.images),
      techStack: list(values.techStack, true),
      keyFeatures: list(values.keyFeatures),
    };
    try {
      const res = await fetch(
        projectId ? `/api/projects/${projectId}` : "/api/projects",
        {
          method: projectId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const data = await res.json();
      if (!res.ok || !data.success)
        throw new Error(data.error || "Could not save your project.");
      router.push("/dashboard/projects?saved=1");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Connection failed. Your changes are still here.",
      );
      setBusy(false);
    }
  }
  if (loading)
    return (
      <div
        role="status"
        className="glass-panel p-10 text-center text-slate-500"
      >
        Loading project…
      </div>
    );
  if (projectId && error && !values.title)
    return (
      <div className="glass-panel p-6">
        <p role="alert" className="notice-error">
          {error}
        </p>
        <button
          onClick={() => setRetry(retry + 1)}
          className="secondary-button mt-4"
        >
          Try again
        </button>
      </div>
    );
  return (
    <div className="mx-auto max-w-4xl">
      <Link
        href="/dashboard/projects"
        className="mb-5 inline-flex min-h-11 items-center text-sm font-semibold text-slate-500 hover:text-sky-700"
      >
        ← Back to projects
      </Link>
      <h1 className="page-heading">
        {projectId ? "Edit project" : "Add a new project"}
      </h1>
      <p className="mb-8 mt-2 text-sm text-slate-500">
        Give your work the details it deserves.
      </p>
      <form onSubmit={submit} className="glass-panel space-y-6 p-5 sm:p-8">
        {error && (
          <p role="alert" className="notice-error">
            {error}
          </p>
        )}
        <div className="grid gap-6 sm:grid-cols-2">
          {fields.map((field) => (
            <div
              key={field.name}
              className={field.multiline ? "sm:col-span-2" : ""}
            >
              <label htmlFor={field.name} className="field-label">
                {field.label}
                {field.optional && (
                  <span className="ml-2 text-xs font-normal text-slate-400">
                    Optional
                  </span>
                )}
              </label>
              {field.multiline ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={3}
                  className="field"
                  required={!field.optional}
                  value={values[field.name]}
                  onChange={(e) =>
                    setValues({ ...values, [field.name]: e.target.value })
                  }
                  aria-describedby={
                    field.hint ? `${field.name}-hint` : undefined
                  }
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type || "text"}
                  className="field"
                  required={!field.optional}
                  value={values[field.name]}
                  onChange={(e) =>
                    setValues({ ...values, [field.name]: e.target.value })
                  }
                  aria-describedby={
                    field.hint ? `${field.name}-hint` : undefined
                  }
                />
              )}
              {field.hint && (
                <p
                  id={`${field.name}-hint`}
                  className="mt-2 text-xs leading-relaxed text-slate-500"
                >
                  {field.hint}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col-reverse gap-3 border-t border-slate-200/70 pt-6 sm:flex-row sm:justify-end">
          <Link href="/dashboard/projects" className="secondary-button">
            Cancel
          </Link>
          <button disabled={busy} className="primary-button">
            {busy ? "Saving project…" : "Save project"}
          </button>
        </div>
      </form>
    </div>
  );
}
