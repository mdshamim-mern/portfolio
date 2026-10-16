import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
const moduleUrl = (file, replace = {}) => {
  let code = ts.transpileModule(
    fs.readFileSync(new URL(`../src/lib/${file}.ts`, import.meta.url), "utf8"),
    {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
      },
    },
  ).outputText;
  for (const [from, to] of Object.entries(replace))
    code = code.replace(from, to);
  return "data:text/javascript;base64," + Buffer.from(code).toString("base64");
};
const linksUrl = moduleUrl("links");
const { correctProjectContent, portfolioClientSource } = await import(moduleUrl("project-content"));
test("portfolio case study points to public frontend and removes completed resume plan", () => {
  const project = { repository: "https://github.com/mdshamim-mern/portfolio.git", futurePlans: "Add a blog section, project filtering by technology, analytics for visitor insights, and a downloadable resume." };
  const result = correctProjectContent(project);
  assert.equal(result.repository, portfolioClientSource);
  assert.match(result.futurePlans, /already available/);
  assert.match(project.futurePlans, /a downloadable resume/);
  assert.equal(correctProjectContent({ ...project, futurePlans: "A new plan" }).futurePlans, "A new plan");
  const other = { ...project, repository: "https://github.com/mdshamim-mern/rentnest-frontend" };
  assert.equal(correctProjectContent(other), other);
});
const { phoneDigits, safeLink, cleanOverview } = await import(linksUrl);
const { projectInput, profileInput } = await import(
  moduleUrl("validation", { '"./links"': JSON.stringify(linksUrl) })
);
process.env.AUTH_SECRET = "unit-test-only-secret";
const { createSession, verifySession } = await import(moduleUrl("session"));
test("session rejects missing, forged, tampered, and expired tokens", async () => {
  assert.equal(await verifySession(), false);
  assert.equal(await verifySession("admin_access_token"), false);
  const session = await createSession();
  assert.equal(await verifySession(session), true);
  const pieces = session.split(".");
  assert.equal(await verifySession(`${pieces[0]}.changed.${pieces[2]}`), false);
  assert.equal(await verifySession(`1.${pieces[1]}.${pieces[2]}`), false);
  assert.equal(await verifySession(session + "a"), false);
});
test("normalizes Bangladesh WhatsApp numbers and keeps international numbers", () => {
  assert.equal(phoneDigits("01865190471"), "8801865190471");
  assert.equal(phoneDigits("+880 1865-190471"), "8801865190471");
  assert.equal(phoneDigits("0044 7700 900123"), "447700900123");
});
test("links reject script and protocol-relative URLs", () => {
  for (const value of [
    "javascript:alert(1)",
    "//evil.example",
    "data:text/html,test",
    "invalid",
  ])
    assert.equal(safeLink(value), "");
  assert.equal(safeLink("/resume/file.pdf"), "/resume/file.pdf");
  assert.equal(safeLink("https://example.com"), "https://example.com/");
});
test("repeated overview is deduplicated without altering ordinary prose", () => {
  assert.equal(cleanOverview("A project.A project."), "A project.");
  assert.equal(cleanOverview("A normal overview."), "A normal overview.");
});
test("project validator keeps case study data and rejects malformed URLs", () => {
  const project = {
    title: "Test",
    overview: "Overview",
    clientCore: "Client",
    serverLogic: "Server",
    livePreview: "https://example.com",
    repository: "https://github.com/example/project",
    images: ["https://example.com/image.png"],
    techStack: [" React ", ""],
    keyFeatures: ["One"],
    challenges: "A real challenge",
    futurePlans: "A plan",
    unexpected: "not allowed",
  };
  const parsed = projectInput(project);
  assert.deepEqual(parsed.techStack, ["React"]);
  assert.equal(parsed.unexpected, undefined);
  assert.equal(parsed.challenges, "A real challenge");
  assert.throws(() =>
    projectInput({ ...project, repository: "javascript:alert(1)" }),
  );
  assert.throws(() => projectInput({ ...project, images: [] }));
});
test("profile accepts local assets, clearing fields, and excludes unknown fields", () => {
  assert.deepEqual(
    profileInput({ resume: "/resume/file.pdf", facebook: "", role: "admin" }),
    { resume: "/resume/file.pdf", facebook: "" },
  );
  assert.throws(() => profileInput({ github: "javascript:alert(1)" }));
  assert.throws(() => profileInput({ email: "invalid" }));
});
