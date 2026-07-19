import HeroSection from "@/components/sections/HeroSection";
import SkillChart from "@/components/SkillChart";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Home Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-3">Expertise</h2>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800">Professional <span className="text-sky-500">Skills</span></h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Technologies, frameworks, and tools I use to build scalable web applications.</p>
          </div>
          <SkillChart />
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section (Now available on scroll!) */}
      <ContactSection />
    </main>
  );
}