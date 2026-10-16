import Link from "next/link";

export default function EducationSection({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
  const DegreeHeading = standalone ? "h2" : "h3";
  return (
    <section id="education" className={`relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 ${standalone ? "pb-20 pt-32 sm:pt-40" : "py-20 sm:py-24"}`}>
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {standalone && <Link href="/#skills" className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900">← Back to portfolio</Link>}
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">{standalone ? "Education, experience & community" : "Education & learning"}</p>
            <Heading className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">The foundation behind <span className="text-sky-600">my work.</span></Heading>
            <p className="mt-5 text-base leading-relaxed text-slate-600">A journey from science to software engineering, connecting classroom fundamentals with the applications I build.</p>
          </div>
          {!standalone && <Link href="/education" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full border border-sky-200 bg-white px-6 text-sm font-bold text-sky-700 shadow-sm transition hover:border-sky-400 hover:bg-sky-50">Explore education <span aria-hidden="true">↗</span></Link>}
        </div>
        {standalone && <nav aria-label="Education page sections" className="mb-8 flex flex-wrap gap-3">
          {[["academic", "Academic journey"], ["experience", "Experience"], ["community", "Beyond programming"]].map(([id, label]) => <a key={id} href={`#${id}`} className="inline-flex min-h-11 items-center rounded-full border border-sky-200 bg-white/80 px-5 text-sm font-semibold text-sky-800 shadow-sm transition hover:border-sky-400 hover:bg-sky-50">{label}<span aria-hidden="true" className="ml-3">↓</span></a>)}
        </nav>}
        <article id="academic" className="scroll-mt-28 relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white/90 shadow-xl shadow-slate-200/50">
          <div className="grid lg:grid-cols-[1fr_1.8fr]">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 p-6 text-white sm:p-6">
              <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold text-sky-200">Currently pursuing</span>
              <p className="mt-5 text-4xl font-black tracking-tight text-white">DIU<span className="text-sky-400">.</span></p>
              <p className="mt-3 text-lg font-semibold leading-relaxed text-slate-200">Daffodil International University</p>
              <p className="mt-5 text-sm text-slate-300">January 2024 – 2027 (expected)</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Programming foundations</p>
                <p className="mt-2 text-sm font-medium text-sky-200">C / C++ · Java · Problem solving</p>
              </div>
            </div>
            <div className="min-w-0 p-6 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-700">Undergraduate degree</p>
              <DegreeHeading className="mt-2 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">BSc in Computer Science and Engineering</DegreeHeading>
              <dl className="mt-4 grid gap-3 border-y border-slate-100 py-3 sm:grid-cols-2">
                <div><dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Session / admission</dt><dd className="mt-1 font-semibold text-slate-800">January 2024</dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Expected graduation</dt><dd className="mt-1 font-semibold text-slate-800">2027</dd></div>
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">Building a foundation in computational thinking, programming, and software design, and applying these concepts to full-stack projects.</p>
              <ul aria-label="Academic focus" className="mt-4 flex flex-wrap gap-2">
                {["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management", "Compiler Design"].map(subject => <li key={subject} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-800">{subject}</li>)}
              </ul>
            </div>
          </div>
        </article>
        <div className="mt-6 grid min-w-0 items-start gap-6 lg:grid-cols-2" aria-label="Experience and community">
          <article id="experience" className="scroll-mt-28 rounded-3xl border border-sky-100 bg-white/90 p-6 shadow-lg shadow-slate-200/30 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-600">Experience</p>
            <h3 className="mt-3 text-2xl font-bold text-slate-800">Independent Full-Stack Developer</h3>
            <p className="mt-2 text-sm font-semibold text-slate-600">Self-employed · June 2024 – Present</p>
            <p className="mt-1 text-sm text-slate-500">Dhaka, Bangladesh · Remote</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Building web applications with the MERN stack, Next.js App Router,
              and TypeScript. My work brings together responsive interfaces,
              modular backend systems, authentication, and database design.
            </p>
            <a href="https://www.linkedin.com/in/md-shamim471/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center font-semibold text-sky-700 hover:underline">View LinkedIn profile ↗</a>
          </article>
          <article id="community" className="scroll-mt-28 rounded-3xl border border-sky-100 bg-white/90 p-6 shadow-lg shadow-slate-200/30 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-600">Beyond programming</p>
            <h3 className="mt-3 text-2xl font-bold text-slate-800">Volunteering & Community</h3>
            <div className="mt-4 space-y-5 text-sm leading-relaxed text-slate-600">
              <div><h4 className="font-semibold text-slate-800">Volunteer · Daffodil International University</h4><p className="mt-1">Assisted in organizing and managing university convocation activities.</p></div>
              <div><h4 className="font-semibold text-slate-800">Member · Prothom Alo Bondhushova</h4><p className="mt-1">Participate in social and community activities, developing leadership, communication, and teamwork skills.</p></div>
            </div>
          </article>
        </div>
        {standalone && <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[{year: "2021", degree: "Higher Secondary Certificate", school: "Government Shah Sultan College, Bogura"}, {year: "2019", degree: "Secondary School Certificate", school: "Shabrul High School, Bogura"}].map(item => <article key={item.year} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3"><p className="text-sm font-bold text-sky-700">{item.year}</p><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Completed</span></div>
            <h2 className="mt-5 text-xl font-bold text-slate-900">{item.degree}</h2>
            <p className="mt-2 leading-relaxed text-slate-600">{item.school}</p>
            <p className="mt-4 text-sm font-semibold text-slate-500">Science Group</p>
          </article>)}
        </div>}
      </div>
    </section>
  );
}
