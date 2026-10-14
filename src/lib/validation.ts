import { safeLink } from "./links";
const projectFields = [
  "title",
  "overview",
  "clientCore",
  "serverLogic",
  "livePreview",
  "repository",
  "demoEmail",
  "demoPassword",
  "challenges",
  "futurePlans",
] as const;
export function projectInput(body: Record<string, unknown>) {
  const data: Record<string, string | string[]> = {};
  for (const key of projectFields) {
    if (typeof body[key] === "string")
      data[key] = (body[key] as string).trim().slice(0, 12000);
  }
  for (const key of ["images", "keyFeatures", "techStack"])
    if (Array.isArray(body[key]))
      data[key] = (body[key] as unknown[])
        .filter((s): s is string => typeof s === "string")
        .map((s) => s.trim())
        .filter(Boolean)
        .slice(0, 50);
  for (const key of [
    "title",
    "overview",
    "clientCore",
    "serverLogic",
    "livePreview",
    "repository",
  ])
    if (!data[key]) throw new Error(`Please complete ${key}.`);
  for (const key of ["livePreview", "repository"])
    if (!safeLink(data[key] as string).startsWith("http"))
      throw new Error("Project links must be valid HTTP or HTTPS URLs.");
  for (const key of ["images", "keyFeatures", "techStack"])
    if (!Array.isArray(data[key]) || !data[key].length)
      throw new Error(`Please add ${key}.`);
  if ((data.images as string[]).some((src) => !safeLink(src)))
    throw new Error("Please use valid image URLs.");
  return data;
}
export function profileInput(body: Record<string, unknown>) {
  const fields = [
    "name",
    "email",
    "phone",
    "image",
    "resume",
    "github",
    "linkedin",
    "facebook",
    "heroBio",
    "contactBio",
  ];
  const data: Record<string, string> = {};
  for (const key of fields)
    if (typeof body[key] === "string")
      data[key] = (body[key] as string).trim().slice(0, 4000);
  for (const key of ["image", "resume", "github", "linkedin", "facebook"])
    if (data[key] && !safeLink(data[key]))
      throw new Error(`Please enter a valid ${key} URL.`);
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    throw new Error("Please enter a valid email address.");
  return data;
}
