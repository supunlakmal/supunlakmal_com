import ParallaxSection from "@/app/components/ParallaxSection";
import ProjectCard from "@/app/components/cards/ProjectCard";
import { projects } from "@/app/data/portfolio";
import { PARALLAX_BACKGROUND_COLOR, PARALLAX_SPEEDS } from "@/app/utils/constants";

export default function ProjectsSection() {
  return (
    <ParallaxSection id="projects" backgroundColor={PARALLAX_BACKGROUND_COLOR} className="py-20 px-4" speed={PARALLAX_SPEEDS.projects}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-black">Featured Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A selection of my recent work across web3, full-stack development, mobile apps, and more
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              category={project.category}
              techStack={project.techStack}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/supunlakmal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            View All Projects on GitHub
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </ParallaxSection>
  );
}
