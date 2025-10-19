import ParallaxSection from "@/app/components/ParallaxSection";
import EducationCard from "@/app/components/cards/EducationCard";
import { education } from "@/app/data/portfolio";
import { PARALLAX_BACKGROUND_COLOR, PARALLAX_SPEEDS } from "@/app/utils/constants";

export default function EducationSection() {
  return (
    <ParallaxSection
      id="education"
      backgroundColor={PARALLAX_BACKGROUND_COLOR}
      className="py-20 px-4"
      speed={PARALLAX_SPEEDS.education}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-black">Education</h2>
        <p className="text-center text-gray-600 mb-12">Academic qualifications and professional certifications</p>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              icon={edu.icon}
              degree={edu.degree}
              institution={edu.institution}
              location={edu.location}
              period={edu.period}
              type={edu.type}
            />
          ))}
        </div>

        {/* Education Summary */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl">💡</div>
            <h3 className="text-xl font-bold text-gray-900">Continuous Learning</h3>
          </div>
          <p className="text-gray-700">
            Committed to staying current with emerging technologies through hands-on experimentation, open-source contributions, and practical application
            in real-world projects. Focus areas include blockchain technology, AI/ML, and modern web development frameworks.
          </p>
        </div>
      </div>
    </ParallaxSection>
  );
}
