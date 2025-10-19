type EducationCardProps = {
  icon: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  type: string;
};

export default function EducationCard({ icon, degree, institution, location, period, type }: EducationCardProps) {
  return (
    <div className="bg-white/70 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 mt-1">
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-3xl">{icon}</div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{degree}</h3>
              <p className="text-lg text-black font-medium mb-1">{institution}</p>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {location}
                </span>
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
              </div>
            </div>

            {/* Type Badge */}
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700">{type}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
