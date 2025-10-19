type AchievementCardProps = {
  icon: string;
  title: string;
  description: string;
  category: string;
};

export default function AchievementCard({ icon, title, description, category }: AchievementCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center group">
      {/* Icon */}
      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>

      {/* Category Badge */}
      <div className="mb-3">
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
