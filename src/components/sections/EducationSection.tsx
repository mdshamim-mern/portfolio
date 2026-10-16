import Link from "next/link";

export default function EducationSection({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section id="education" className={`relative isolate overflow-hidden bg-slate-50 ${standalone ? "pb-20 pt-32 sm:pt-40" : "py-20 sm:py-24"}`}>
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {standalone && <Link href="/#skills" className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900">← Back to portfolio</Link>}
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">Education & learning</p>
            <Heading className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">The foundation behind <span className="text-sky-600">my work.</span></Heading>
            <p className="mt-5 text-base leading-relaxed text-slate-600">A journey from science to software engineering, connecting classroom fundamentals with the applications I build.</p>
          </div>
          {!standalone && <Link href="/education" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full border border-sky-200 bg-white px-6 text-sm font-bold text-sky-700 shadow-sm transition hover:border-sky-400 hover:bg-sky-50">Explore education <span aria-hidden="true">↗</span></Link>}
        </div>
        <article className="relative overflow-hidden rounded-[2rem] border border-white bg-white/90 shadow-xl shadow-slate-200/50">
          <div className="grid lg:grid-cols-[1fr_1.8fr]">
            <div className="bg-slate-900 p-6 text-white sm:p-9">
              <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold text-sky-200">Currently pursuing</span>
              <p className="mt-8 text-5xl font-black tracking-tight text-white">DIU<span className="text-sky-400">.</span></p>
              <p className="mt-3 text-lg font-semibold leading-relaxed text-slate-200">Daffodil International University</p>
              <p className="mt-8 text-sm text-slate-300">January 2024 – 2027 (expected)</p>
            </div>
            <div className="min-w-0 p-6 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-700">Undergraduate degree</p>
              <h3 className="mt-3 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">BSc in Computer Science and Engineering</h3>
              <dl className="mt-6 grid gap-4 border-y border-slate-100 py-5 sm:grid-cols-2">
                <div><dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Session / admission</dt><dd className="mt-1 font-semibold text-slate-800">January 2024</dd></div>
                <div><dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Expected graduation</dt><dd className="mt-1 font-semibold text-slate-800">2027</dd></div>
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">Building a foundation in computational thinking, programming, and software design, and applying these concepts to full-stack projects.</p>
              <ul aria-label="Academic focus" className="mt-5 flex flex-wrap gap-2">
                {["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management", "Compiler Design"].map(subject => <li key={subject} className="rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-800">{subject}</li>)}
              </ul>
            </div>
          </div>
        </article>
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
