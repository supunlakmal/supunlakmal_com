import { DEFAULT_TECH_STYLE } from "@/app/utils/constants";

type SkillCategoryCardProps = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

export default function SkillCategoryCard({ title, icon, skills }: SkillCategoryCardProps) {
  return (
    <div className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className={`px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors ${DEFAULT_TECH_STYLE}`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
