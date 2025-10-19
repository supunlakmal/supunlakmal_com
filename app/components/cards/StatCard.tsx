type StatCardProps = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
      {icon && (
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
    </div>
  );
}
