import { DEFAULT_TECH_STYLE } from "@/app/utils/constants";

type ExperienceCardProps = {
  index: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  projects: string[];
  techStack: string[];
};

export default function ExperienceCard({ index, role, company, period, description, achievements, projects, techStack }: ExperienceCardProps) {
  return (
    <div className="bg-white/70 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div className="flex-grow">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">{index + 1}</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{role}</h3>
              <p className="text-lg text-black font-medium">{company}</p>
              <p className="text-sm text-gray-500 mt-1">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {period}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 md:max-w-xs">
          {techStack.map((tech, techIdx) => (
            <span key={techIdx} className={`px-2.5 py-1 rounded-full text-xs font-medium ${DEFAULT_TECH_STYLE}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4 ml-13">{description}</p>

      {/* Key Achievements */}
      <div className="ml-13">
        <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">Key Achievements:</h4>
        <ul className="space-y-2">
          {achievements.map((achievement, achIdx) => (
            <li key={achIdx} className="text-gray-700 text-sm flex items-start gap-2">
              <span className="text-black mt-1 flex-shrink-0">▸</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mt-4 ml-13 pt-4 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">Notable Projects:</h4>
          <div className="flex flex-wrap gap-2">
            {projects.map((project, projIdx) => (
              <span key={projIdx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                {project}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
