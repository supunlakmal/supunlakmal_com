import ParallaxSection from "@/app/components/ParallaxSection";
import ExperienceCard from "@/app/components/cards/ExperienceCard";
import { experiences } from "@/app/data/portfolio";
import { PARALLAX_BACKGROUND_COLOR, PARALLAX_SPEEDS } from "@/app/utils/constants";

export default function ExperienceSection() {
  return (
    <ParallaxSection
      id="experience"
      backgroundColor={PARALLAX_BACKGROUND_COLOR}
      className="py-20 px-4"
      speed={PARALLAX_SPEEDS.experience}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-black">Work Experience</h2>
        <p className="text-center text-gray-600 mb-12">14+ years of professional software development experience</p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              index={index}
              role={exp.role}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              achievements={exp.achievements}
              projects={exp.projects}
              techStack={exp.techStack}
            />
          ))}
        </div>

        {/* Career Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-black">14+</div>
            <div className="text-sm text-gray-600 mt-1">Years Experience</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-black">5</div>
            <div className="text-sm text-gray-600 mt-1">Companies</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-black">20+</div>
            <div className="text-sm text-gray-600 mt-1">Projects Delivered</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-black">10+</div>
            <div className="text-sm text-gray-600 mt-1">Technologies</div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
