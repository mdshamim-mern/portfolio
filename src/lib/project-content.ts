// Compatibility correction for the existing portfolio case study. Exact matching
// leaves future dashboard edits and other projects untouched.
const portfolioRepository = "https://github.com/mdshamim-mern/portfolio";
export const portfolioClientSource = `${portfolioRepository}/tree/main/src/app/%28public%29`;
const oldPlans = "Add a blog section, project filtering by technology, analytics for visitor insights, and a downloadable resume.";

export function correctProjectContent<T extends { repository?: string; futurePlans?: string }>(project: T): T {
  const repository = project.repository?.replace(/\.git\/?$/, "").replace(/\/$/, "");
  if (repository !== portfolioRepository && repository !== portfolioClientSource) return project;
  return {
    ...project,
    repository: portfolioClientSource,
    futurePlans: project.futurePlans?.trim() === oldPlans
      ? "Add a blog section, project filtering by technology, and analytics for visitor insights. Resume downloading is already available in the hero section."
      : project.futurePlans,
  };
}
