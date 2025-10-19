import Link from "next/link";

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  isLink?: boolean;
};

export default function ContactCard({ icon, title, value, href, isLink = false }: ContactCardProps) {
  const cardContent = (
    <>
      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 break-all">{value}</p>
    </>
  );

  if (isLink) {
    return (
      <a
        href={href}
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center group"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">{cardContent}</div>
  );
}
