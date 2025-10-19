import ParallaxSection from "@/app/components/ParallaxSection";
import SkillCategoryCard from "@/app/components/cards/SkillCategoryCard";
import { PARALLAX_BACKGROUND_COLOR, PARALLAX_SPEEDS } from "@/app/utils/constants";

const FrontendIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const BackendIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  </svg>
);

const MobileIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    />
  </svg>
);

const BlockchainIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
    />
  </svg>
);

const AIIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

export default function SkillsSection() {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: <FrontendIcon />,
      skills: ["React.js", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "SCSS", "TypeScript", "JavaScript"],
    },
    {
      title: "Backend Development",
      icon: <BackendIcon />,
      skills: ["Node.js", "Express.js", "Laravel", "PHP", "GraphQL", "Python", "Socket.IO"],
    },
    {
      title: "Databases & Storage",
      icon: <DatabaseIcon />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Firebase"],
    },
    {
      title: "Mobile & Desktop",
      icon: <MobileIcon />,
      skills: ["React Native", "Electron.js"],
    },
    {
      title: "Cloud & DevOps",
      icon: <CloudIcon />,
      skills: ["AWS", "Google Cloud", "Linux", "Docker", "Git"],
    },
    {
      title: "Blockchain & Web3",
      icon: <BlockchainIcon />,
      skills: ["Web3.js", "Ethereum", "Solana", "Solidity", "XRP Ledger", "IPFS"],
    },
    {
      title: "AI/ML & Specialized",
      icon: <AIIcon />,
      skills: ["Machine Learning", "AI", "OpenCV", "Computer Vision", "OpenPose", "OpenAI"],
    },
  ];

  return (
    <ParallaxSection id="skills" backgroundColor={PARALLAX_BACKGROUND_COLOR} className="py-20 px-4" speed={PARALLAX_SPEEDS.skills}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-black">Technical Skills</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Expertise across modern web technologies, frameworks, and development tools</p>

        <div className="space-y-8">
          {skillsData.map((category, index) => (
            <SkillCategoryCard key={index} title={category.title} icon={category.icon} skills={category.skills} />
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
