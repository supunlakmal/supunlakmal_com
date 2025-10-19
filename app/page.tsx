"use client";

import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import AchievementsSection from "./components/sections/AchievementsSection";
import EducationSection from "./components/sections/EducationSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content Wrapper */}
      <div className="relative" style={{ zIndex: 10 }}>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="w-full max-w-6xl">
            <Hero />
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Achievements Section */}
        <AchievementsSection />

        {/* Education Section */}
        <EducationSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200 text-center">
          <p className="text-gray-600">© 2025 Supun Lakmal</p>
        </footer>
      </div>
    </div>
  );
}
