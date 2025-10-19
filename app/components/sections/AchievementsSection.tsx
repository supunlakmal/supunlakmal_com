import ParallaxSection from "@/app/components/ParallaxSection";
import AchievementCard from "@/app/components/cards/AchievementCard";
import { achievements } from "@/app/data/portfolio";
import { PARALLAX_BACKGROUND_COLOR, PARALLAX_SPEEDS } from "@/app/utils/constants";

export default function AchievementsSection() {
  return (
    <ParallaxSection
      id="achievements"
      backgroundColor={PARALLAX_BACKGROUND_COLOR}
      className="py-20 px-4"
      speed={PARALLAX_SPEEDS.achievements}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-black">Key Achievements</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Milestones and innovations that showcase expertise across Web3, AI, and full-stack development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
              category={achievement.category}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-white/70 rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Career Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">20+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">4+</div>
              <div className="text-sm text-gray-600">Startups Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">10+</div>
              <div className="text-sm text-gray-600">Tech Stacks Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">1</div>
              <div className="text-sm text-gray-600">Hackathon Award</div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
