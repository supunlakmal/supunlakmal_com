import StatCard from "@/app/components/cards/StatCard";
import ParallaxSection from "@/app/components/ParallaxSection";
import { PARALLAX_BACKGROUND_COLOR, PARALLAX_SPEEDS } from "@/app/utils/constants";

const ExperienceIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const RoleIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const ProjectsIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default function AboutSection() {
  return (
    <ParallaxSection id="about" backgroundColor={PARALLAX_BACKGROUND_COLOR} className="py-20 px-4" speed={PARALLAX_SPEEDS.about}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-black">About Me</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Passionate software engineer with expertise in Web3, full-stack development, and cutting-edge technologies
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <StatCard value="14+" label="Years Experience" icon={<ExperienceIcon />} />
          <StatCard value="Lead Front End Developer" label="DxDy (SmallAxe Pvt Ltd)" icon={<RoleIcon />} />
          <StatCard value="20+" label="Projects Delivered" icon={<ProjectsIcon />} />
        </div>

        {/* Bio Section */}
        <div className="bg-white/70 rounded-2xl p-8 shadow-lg">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              I&apos;m a <span className="font-semibold text-gray-900">Full Stack Developer</span> and{" "}
              <span className="font-semibold text-gray-900">founder of ThisMyPC</span>, with over 14 years of experience building innovative web applications,
              blockchain solutions, and enterprise platforms. Specializing in <span className="font-semibold text-gray-900">MEAN and LAMP stack</span>{" "}
              technologies, my journey began with PHP development in 2011 and has evolved into mastering modern JavaScript frameworks, Web3 technologies, and
              full-stack architecture.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Currently leading front-end development at <span className="font-semibold text-gray-900">DxDy (SmallAxe Pvt Ltd)</span>, where I architect and
              build scalable React applications, mentor development teams, and drive innovation through emerging technologies. As a passionate{" "}
              <span className="font-semibold text-gray-900">open source developer</span>, I&apos;m committed to finding and developing new technologies that
              help Sri Lankan developers and the global developer community work more efficiently.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">⛓️</span>
                  Web3 & Blockchain
                </h4>
                <p className="text-gray-700 text-sm">
                  Built multiple NFT marketplaces, metaverse ecosystems, and blockchain identity solutions. Winner of 3rd place at OASIS Network&apos;s Sapphire
                  Hackathon for On-Chain.ID project.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  Enterprise Solutions
                </h4>
                <p className="text-gray-700 text-sm">
                  Delivered production-ready applications for Fortune 500 companies including Brookfield Place NY, Causeway Capital, and World Bicycle Relief
                  with AWS infrastructure and CI/CD optimization.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond traditional development, I&apos;ve gained recognition for my creative application of{" "}
              <span className="font-semibold text-gray-900">AI and machine learning</span>, particularly in the{" "}
              <span className="font-semibold text-gray-900">colorization of historical black and white imagery from Sri Lanka</span>. Using Python and neural
              networks trained on millions of images, I bring historical moments to life with color. As I often say:{" "}
              <em>&quot;While black and white photography is fantastic, the colours of an era often help you more accurately grasp the times gone by.&quot;</em>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              My technical interests also extend to <span className="font-semibold text-gray-900">AI-powered human body tracking technology</span> using
              OpenPose, blockchain data storage solutions with IPFS, and building cross-platform applications with React Native and Electron. I&apos;m
              passionate about optimizing performance through modern build tools and staying at the forefront of Web3 innovation.
            </p>

            <p className="text-gray-700 leading-relaxed">
              When I&apos;m not coding, I contribute to open-source projects (94+ public repositories), explore emerging blockchain protocols (Solana, Ethereum,
              XRP Ledger), colorize historical videos for my <span className="font-semibold text-gray-900">YouTube channel</span>, and experiment with
              cutting-edge frameworks. I believe in writing clean, maintainable code, preserving history through technology, and sharing knowledge with the
              developer community.
            </p>

            {/* Key Specializations */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Core Specializations:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "React & Next.js",
                  "Web3 & Blockchain",
                  "Node.js & Laravel",
                  "React Native",
                  "TypeScript",
                  "AWS & Cloud",
                  "CI/CD Pipelines",
                  "UI/UX Design",
                ].map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-black">▸</span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
