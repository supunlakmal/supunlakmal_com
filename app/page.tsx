"use client";

import Hero from "./components/Hero";
import AnimatedBackground from "./components/AnimatedBackground";
import Navigation from "./components/Navigation";
import { useEffect, useRef, type ReactNode } from "react";

type ParallaxSectionProps = {
  id: string;
  backgroundColor: string;
  speed?: number;
  className?: string;
  children: ReactNode;
};

const ParallaxSection = ({ id, backgroundColor, speed = 0.25, className = "", children }: ParallaxSectionProps) => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const backgroundEl = backgroundRef.current;
    if (!backgroundEl) {
      return;
    }

    let frameId: number | null = null;

    const updateParallax = () => {
      const parent = backgroundEl.parentElement;
      if (!parent) {
        return;
      }

      const rect = parent.getBoundingClientRect();
      const offset = -rect.top * speed;
      backgroundEl.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        updateParallax();
        frameId = null;
      });
    };

    updateParallax();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed]);

  const composedClassName = `relative overflow-hidden ${className}`.trim();

  return (
    <section id={id} className={composedClassName}>
      <div
        ref={backgroundRef}
        className="pointer-events-none absolute left-0 right-0 -z-10"
        style={{
          backgroundColor,
          top: "-20%",
          height: "140%",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default function Home() {
  // Projects Data
  const projects = [
    {
      title: "ThisMyPC - Remote PC Access",
      description:
        "Founder & creator of a next-generation open source solution for remote PC access. Browse your desktop drives from any device through a neat web interface with real-time file system access.",
      image: "/projects/thismypc.jpg",
      category: "Open Source",
      techStack: ["Node.js", "GraphQL", "Angular", "Electron", "MongoDB", "React Native", "Socket.IO"],
      github: "https://github.com/supunlakmal/thismypc",
      demo: null,
    },
    {
      title: "Black & White Ceylon Colorization",
      description:
        "AI-powered colorization of historical black and white images and videos of Sri Lanka using Python neural networks. Featured in The Morning newspaper for bringing history to life with 70% accuracy. 12+ historical videos colorized.",
      image: "https://supunlakmal.github.io/static/media/2.09d28f3a.jpg",
      category: "AI/ML",
      techStack: ["Python", "AI", "Machine Learning", "OpenCV"],
      github: null,
      demo: "https://www.youtube.com/watch?v=-J7yrbyAFUs",
    },
    {
      title: "Human Pose Tracking - OpenPose",
      description:
        "Implementation of pose tracking technology for estimating multi-person human poses in videos with unique instance IDs. Used for action recognition, motion capture, and animation.",
      image: "https://supunlakmal.github.io/static/media/1.c8073801.jpg",
      category: "AI/ML",
      techStack: ["Python", "OpenPose", "Computer Vision", "AI"],
      github: null,
      demo: "https://www.youtube.com/watch?v=QJETULLd_Jo",
    },
    {
      title: "Edenlans Metaverse Ecosystem",
      description:
        "Open-source metaverse ecosystem with NFT marketplace integration. Led front-end team contributing to HashLips NFT project running on Ethereum blockchain.",
      image: "/projects/edenlans.jpg",
      category: "Web3",
      techStack: ["React", "Ethereum", "Web3.js", "TypeScript"],
      github: null,
      demo: "https://edenlans.com/",
    },
    {
      title: "Gameplex - Web3 Game Launcher",
      description:
        "Desktop launcher for Web3 games on Solana blockchain with torrent protocol file transfer. Full-stack implementation including blockchain integration.",
      image: "/projects/gameplex.jpg",
      category: "Web3",
      techStack: ["Electron", "Solana", "React", "TypeScript"],
      github: null,
      demo: null,
    },
    {
      title: "On-Chain.ID - Hackathon Winner",
      description: "3rd place winner at 'Keep it Confidential: The Sapphire Hackathon' by OASIS Network. EVM-compatible blockchain identity solution.",
      image: "/projects/onchain.jpg",
      category: "Web3",
      techStack: ["React", "Ethereum", "Solidity", "Web3.js"],
      github: null,
      demo: "https://testnet.on-chain.id/",
    },
    {
      title: "Bidds - NFT Marketplace",
      description: "Multi-chain NFT marketplace built from scratch for Coreum and XRP Ledger networks. Responsive design with SSR and SSG optimization.",
      image: "/projects/bidds.jpg",
      category: "Web3",
      techStack: ["Next.js", "TypeScript", "Tailwind", "XRP"],
      github: null,
      demo: "https://bidds.com/",
    },
    {
      title: "Brookfield Place NY Platform",
      description: "Enterprise web application for Brookfield Place New York with React and modern infrastructure on AWS.",
      image: "/projects/brookfield.jpg",
      category: "Full Stack",
      techStack: ["React", "Node.js", "AWS", "MongoDB"],
      github: null,
      demo: "https://bfplny.com/",
    },
    {
      title: "World Bicycle Relief",
      description: "Non-profit organization platform supporting sustainable transportation solutions globally with video streaming capabilities.",
      image: "/projects/wbr.jpg",
      category: "Full Stack",
      techStack: ["React", "Node.js", "AWS", "Video Streaming"],
      github: null,
      demo: "https://worldbicyclerelief.org/",
    },
    {
      title: "ParkMe CRM System",
      description: "Comprehensive CRM system for parking management with REST API, mobile app integration, and real-time data synchronization.",
      image: "/projects/parkme.jpg",
      category: "Full Stack",
      techStack: ["Laravel", "MySQL", "React Native", "Node.js"],
      github: null,
      demo: "https://www.parkmeapp.com/pmameter/",
    },
    {
      title: "Trackiex E-Commerce Platform",
      description: "Full-featured e-commerce system with inventory management, payment gateway integration, and customer analytics.",
      image: "/projects/trackiex.jpg",
      category: "Full Stack",
      techStack: ["Laravel", "MySQL", "PHP", "JavaScript"],
      github: null,
      demo: "https://trackiex.com/",
    },
    {
      title: "Ozone Desk CRM & E-Commerce",
      description: "Enterprise-grade customer relationship management and e-commerce platform with REST API architecture.",
      image: "/projects/ozonedesk.jpg",
      category: "Full Stack",
      techStack: ["PHP", "MySQL", "JavaScript", "REST API"],
      github: null,
      demo: "https://ozonedesk.com/",
    },
  ];

  // Work Experience Data
  const experiences = [
    {
      role: "Lead Front End Developer",
      company: "DxDy (SmallAxe Pvt Ltd)",
      period: "2019 - Present",
      description: "Leading front-end development for enterprise web applications using modern JavaScript frameworks and cloud infrastructure.",
      achievements: [
        "Developed and maintained React Native applications for Android and iOS platforms",
        "Built scalable video gallery with streaming capabilities for enterprise clients",
        "Led R&D initiatives in AI-powered human body tracking technology",
        "Pioneered blockchain data storage solutions using IPFS",
        "Optimized CI/CD pipelines reducing deployment time by 40%",
        "Managed AWS infrastructure including Apache, MySQL, MongoDB, and Node.js",
      ],
      projects: ["Brookfield Place NY", "Causeway Capital", "World Bicycle Relief", "Koach Hub"],
      techStack: ["React", "Vue.js", "Next.js", "Laravel", "React Native", "AWS", "Node.js"],
    },
    {
      role: "Full Stack Engineer",
      company: "Ceffectz Pvt Ltd",
      period: "2017 - 2019",
      description: "Full-stack development of e-commerce and CRM systems with a focus on Laravel framework and mobile applications.",
      achievements: [
        "Successfully integrated Laravel and Electron JS into existing software architecture",
        "Developed comprehensive e-commerce and CRM systems from scratch",
        "Configured and optimized Linux servers with Apache, MySQL, MongoDB, and Node.js",
        "Built cross-platform mobile applications using React Native",
        "Implemented RESTful APIs for mobile and web integration",
      ],
      projects: ["ParkMe App", "Video Window CRM", "Trackiex E-Commerce", "Career141 CV System"],
      techStack: ["Laravel", "Electron", "React Native", "PHP", "MySQL", "MongoDB", "Linux"],
    },
    {
      role: "PHP Developer",
      company: "Ozone Desk Pvt Ltd",
      period: "2016 - 2017",
      description: "Backend development for customer relationship management and e-commerce platform.",
      achievements: [
        "Developed core CRM features including customer tracking and analytics",
        "Built e-commerce modules with payment gateway integration",
        "Designed and implemented RESTful API architecture",
        "Optimized database queries improving system performance by 30%",
      ],
      projects: ["Ozone Desk CRM Platform"],
      techStack: ["PHP", "MySQL", "JavaScript", "REST API"],
    },
    {
      role: "PHP Developer",
      company: "MEDIASOLVE Pvt Ltd",
      period: "2015 - 2016",
      description: "Web development focusing on framework integration and payment system implementation.",
      achievements: [
        "Integrated Smarty template engine into existing PHP applications",
        "Redesigned Autolanka.com with modern UI/UX principles",
        "Implemented SMS gateway for customer notifications",
        "Integrated multiple payment gateways for secure transactions",
      ],
      projects: ["Autolanka.com"],
      techStack: ["PHP", "MySQL", "Smarty", "JavaScript"],
    },
    {
      role: "PHP Developer",
      company: "Lily Digital Pvt Ltd",
      period: "2011 - 2014",
      description: "Early career development building custom CMS solutions using vanilla PHP.",
      achievements: [
        "Developed custom CMS solutions from scratch",
        "Created reusable PHP components and modules",
        "Implemented database-driven dynamic websites",
        "Collaborated with design team for frontend integration",
      ],
      projects: ["Custom CMS Projects"],
      techStack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    },
  ];

  // Key Achievements Data
  const achievements = [
    {
      icon: "🏆",
      title: "Hackathon Winner",
      description: "3rd place at 'Keep it Confidential: The Sapphire Hackathon' by OASIS Network for blockchain identity solution",
      category: "Award",
    },
    {
      icon: "🎨",
      title: "Featured Media Coverage",
      description:
        "Featured in The Morning newspaper for AI-powered colorization of historical Sri Lankan imagery. Colorized 12+ historical videos from Ceylon era.",
      category: "Recognition",
    },
    {
      icon: "🚀",
      title: "Open Source Founder",
      description:
        "Founded ThisMyPC - a next-generation open source solution for remote PC access used by developers worldwide. 94+ public repositories on GitHub.",
      category: "Innovation",
    },
    {
      icon: "👥",
      title: "Team Leadership",
      description: "Led front-end team for Edenlans metaverse ecosystem, managing HashLips NFT project on Ethereum blockchain",
      category: "Leadership",
    },
    {
      icon: "🤖",
      title: "AI Research & Development",
      description: "Pioneered research in AI-powered human body tracking technology for enterprise applications",
      category: "Innovation",
    },
    {
      icon: "⛓️",
      title: "Blockchain Innovation",
      description: "Developed blockchain data storage solutions using IPFS and decentralized file storage systems",
      category: "Innovation",
    },
    {
      icon: "🚀",
      title: "CI/CD Optimization",
      description: "Reduced deployment time by 40% through improved continuous delivery pipelines and automation tools",
      category: "Performance",
    },
    {
      icon: "🎥",
      title: "Video Streaming Platform",
      description: "Built scalable video gallery with real-time streaming capabilities for enterprise clients",
      category: "Technology",
    },
    {
      icon: "📱",
      title: "Cross-Platform Development",
      description: "Developed and maintained React Native applications deployed to both Android and iOS platforms",
      category: "Development",
    },
    {
      icon: "💎",
      title: "Multi-Chain NFT Marketplace",
      description: "Built NFT marketplace from scratch supporting Coreum and XRP Ledger networks with SSR/SSG optimization",
      category: "Web3",
    },
    {
      icon: "🌐",
      title: "Enterprise Solutions",
      description: "Delivered 20+ production-ready projects for Fortune 500 companies and startups across multiple industries",
      category: "Impact",
    },
  ];

  // Education Data
  const education = [
    {
      degree: "BCS Higher Education Qualifications",
      institution: "ESOFT Computer Studies Pvt Ltd",
      location: "Colombo, Sri Lanka",
      period: "April 2012 - April 2013",
      type: "Higher Education",
      icon: "🎓",
    },
    {
      degree: "Certificate Course in Web Application Development",
      institution: "National Institute of Business Management",
      location: "Colombo, Sri Lanka",
      period: "September 2011 - January 2012",
      type: "Certificate",
      icon: "📜",
    },
  ];

  // Tech stack color mapping
  const techColors: { [key: string]: string } = {
    React: "bg-blue-100 text-blue-700",
    "Next.js": "bg-black text-white",
    "Vue.js": "bg-green-100 text-green-700",
    Angular: "bg-red-100 text-red-700",
    "Node.js": "bg-green-100 text-green-800",
    TypeScript: "bg-blue-100 text-blue-800",
    JavaScript: "bg-yellow-100 text-yellow-800",
    Python: "bg-blue-100 text-blue-600",
    PHP: "bg-indigo-100 text-indigo-700",
    Solana: "bg-purple-100 text-purple-700",
    Ethereum: "bg-slate-100 text-slate-800",
    "Web3.js": "bg-orange-100 text-orange-700",
    Solidity: "bg-gray-800 text-white",
    MongoDB: "bg-green-100 text-green-700",
    PostgreSQL: "bg-blue-100 text-blue-700",
    MySQL: "bg-blue-100 text-blue-600",
    Firebase: "bg-yellow-100 text-yellow-700",
    AWS: "bg-orange-100 text-orange-700",
    Tailwind: "bg-cyan-100 text-cyan-700",
    Laravel: "bg-red-100 text-red-600",
    Electron: "bg-teal-100 text-teal-700",
    "React Native": "bg-blue-200 text-blue-800",
    Redux: "bg-purple-100 text-purple-600",
    OpenAI: "bg-emerald-100 text-emerald-700",
    Stripe: "bg-indigo-100 text-indigo-700",
    SQLite: "bg-gray-100 text-gray-700",
    XRP: "bg-gray-900 text-white",
    "REST API": "bg-green-100 text-green-800",
    "Video Streaming": "bg-red-100 text-red-700",
    Smarty: "bg-yellow-100 text-yellow-800",
    "HTML/CSS": "bg-orange-100 text-orange-600",
    Linux: "bg-gray-800 text-white",
    "Socket.IO": "bg-green-100 text-green-700",
    AI: "bg-purple-100 text-purple-700",
    "Machine Learning": "bg-purple-100 text-purple-600",
    OpenCV: "bg-red-100 text-red-700",
    "Computer Vision": "bg-pink-100 text-pink-700",
    OpenPose: "bg-indigo-100 text-indigo-600",
    "Open Source": "bg-teal-100 text-teal-700",
  };

  return (
    <div className="min-h-screen bg-transparent relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}

      {/* Main Content Wrapper */}
      <div className="relative" style={{ zIndex: 10 }}>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
          {/* Hero component (see app/components/Hero.tsx) */}
          {/* Make sure your portrait image is available at /public/images/portrait.png or .webp/.avif */}
          <div className="w-full max-w-6xl">
            <Hero />
          </div>
        </section>

        {/* About Section */}
        <ParallaxSection id="about" backgroundColor="#e3e3e1" className="py-20 px-4" speed={0.18}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-black">About Me</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Passionate software engineer with expertise in Web3, full-stack development, and cutting-edge technologies
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Experience Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">14+</h3>
                <p className="text-gray-600 text-sm font-medium">Years Experience</p>
              </div>

              {/* Current Role Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Lead Front End Developer</h3>
                <p className="text-gray-600 text-sm">DxDy (SmallAxe Pvt Ltd)</p>
              </div>

              {/* Expertise Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">20+</h3>
                <p className="text-gray-600 text-sm font-medium">Projects Delivered</p>
              </div>
            </div>

            {/* Bio Section */}
            <div className="bg-white/70 rounded-2xl p-8 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  I&apos;m a <span className="font-semibold text-gray-900">Full Stack Developer</span> and{" "}
                  <span className="font-semibold text-gray-900">founder of ThisMyPC</span>, with over 14 years of experience building innovative web
                  applications, blockchain solutions, and enterprise platforms. Specializing in{" "}
                  <span className="font-semibold text-gray-900">MEAN and LAMP stack</span> technologies, my journey began with PHP development in 2011 and has
                  evolved into mastering modern JavaScript frameworks, Web3 technologies, and full-stack architecture.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Currently leading front-end development at <span className="font-semibold text-gray-900">DxDy (SmallAxe Pvt Ltd)</span>, where I architect and
                  build scalable React applications, mentor development teams, and drive innovation through emerging technologies. As a passionate{" "}
                  <span className="font-semibold text-gray-900">open source developer</span>, I&apos;m committed to finding and developing new technologies that
                  help Sri Lankan developers and the global developer community work more efficiently.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">⛓️</span>
                      Web3 & Blockchain
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Built multiple NFT marketplaces, metaverse ecosystems, and blockchain identity solutions. Winner of 3rd place at OASIS Network&apos;s
                      Sapphire Hackathon for On-Chain.ID project.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">🚀</span>
                      Enterprise Solutions
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Delivered production-ready applications for Fortune 500 companies including Brookfield Place NY, Causeway Capital, and World Bicycle
                      Relief with AWS infrastructure and CI/CD optimization.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Beyond traditional development, I&apos;ve gained recognition for my creative application of{" "}
                  <span className="font-semibold text-gray-900">AI and machine learning</span>, particularly in the{" "}
                  <span className="font-semibold text-gray-900">colorization of historical black and white imagery from Sri Lanka</span>. Using Python and
                  neural networks trained on millions of images, I bring historical moments to life with color. As I often say:{" "}
                  <em>
                    &quot;While black and white photography is fantastic, the colours of an era often help you more accurately grasp the times gone by.&quot;
                  </em>
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  My technical interests also extend to <span className="font-semibold text-gray-900">AI-powered human body tracking technology</span> using
                  OpenPose, blockchain data storage solutions with IPFS, and building cross-platform applications with React Native and Electron. I&apos;m
                  passionate about optimizing performance through modern build tools and staying at the forefront of Web3 innovation.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  When I&apos;m not coding, I contribute to open-source projects (94+ public repositories), explore emerging blockchain protocols (Solana,
                  Ethereum, XRP Ledger), colorize historical videos for my <span className="font-semibold text-gray-900">YouTube channel</span>, and experiment
                  with cutting-edge frameworks. I believe in writing clean, maintainable code, preserving history through technology, and sharing knowledge with
                  the developer community.
                </p>

                {/* Key Specializations */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Core Specializations:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">▸</span>
                      <span>React & Next.js</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">▸</span>
                      <span>Web3 & Blockchain</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">▸</span>
                      <span>Node.js & Laravel</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">▸</span>
                      <span>React Native</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">▸</span>
                      <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">▸</span>
                      <span>AWS & Cloud</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">▸</span>
                      <span>CI/CD Pipelines</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">▸</span>
                      <span>UI/UX Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Skills Section */}
        <ParallaxSection id="skills" backgroundColor="#e3e3e1" className="py-20 px-4" speed={0.22}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-black">Technical Skills</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Expertise across modern web technologies, frameworks, and development tools</p>

            <div className="space-y-8">
              {/* Frontend Technologies */}
              <div className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Frontend Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors">React.js</span>
                  <span className="px-4 py-2 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors">Next.js</span>
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium text-sm hover:bg-green-100 transition-colors">Vue.js</span>
                  <span className="px-4 py-2 bg-red-50 text-red-700 rounded-lg font-medium text-sm hover:bg-red-100 transition-colors">Angular</span>
                  <span className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg font-medium text-sm hover:bg-cyan-100 transition-colors">Tailwind CSS</span>
                  <span className="px-4 py-2 bg-pink-50 text-pink-700 rounded-lg font-medium text-sm hover:bg-pink-100 transition-colors">SCSS</span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors">TypeScript</span>
                  <span className="px-4 py-2 bg-yellow-50 text-yellow-700 rounded-lg font-medium text-sm hover:bg-yellow-100 transition-colors">
                    JavaScript
                  </span>
                </div>
              </div>

              {/* Backend Technologies */}
              <div className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Backend Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-green-50 text-green-800 rounded-lg font-medium text-sm hover:bg-green-100 transition-colors">Node.js</span>
                  <span className="px-4 py-2 bg-gray-50 text-gray-800 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">Express.js</span>
                  <span className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium text-sm hover:bg-red-100 transition-colors">Laravel</span>
                  <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium text-sm hover:bg-indigo-100 transition-colors">PHP</span>
                  <span className="px-4 py-2 bg-pink-50 text-pink-600 rounded-lg font-medium text-sm hover:bg-pink-100 transition-colors">GraphQL</span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors">Python</span>
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium text-sm hover:bg-green-100 transition-colors">Socket.IO</span>
                </div>
              </div>

              {/* Databases */}
              <div className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Databases & Storage</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium text-sm hover:bg-green-100 transition-colors">MongoDB</span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors">PostgreSQL</span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors">MySQL</span>
                  <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">SQLite</span>
                  <span className="px-4 py-2 bg-yellow-50 text-yellow-700 rounded-lg font-medium text-sm hover:bg-yellow-100 transition-colors">Firebase</span>
                </div>
              </div>

              {/* Mobile & Desktop */}
              <div className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Mobile & Desktop</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors">React Native</span>
                  <span className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg font-medium text-sm hover:bg-teal-100 transition-colors">Electron.js</span>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg font-medium text-sm hover:bg-orange-100 transition-colors">AWS</span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors">Google Cloud</span>
                  <span className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium text-sm hover:bg-gray-700 transition-colors">Linux</span>
                  <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg font-medium text-sm hover:bg-purple-100 transition-colors">Docker</span>
                  <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">Git</span>
                </div>
              </div>

              {/* Blockchain & Web3 */}
              <div className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Blockchain & Web3</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg font-medium text-sm hover:bg-orange-100 transition-colors">Web3.js</span>
                  <span className="px-4 py-2 bg-slate-50 text-slate-800 rounded-lg font-medium text-sm hover:bg-slate-100 transition-colors">Ethereum</span>
                  <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-medium text-sm hover:bg-purple-100 transition-colors">Solana</span>
                  <span className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium text-sm hover:bg-gray-700 transition-colors">Solidity</span>
                  <span className="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium text-sm hover:bg-gray-700 transition-colors">XRP Ledger</span>
                  <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium text-sm hover:bg-indigo-100 transition-colors">IPFS</span>
                </div>
              </div>

              {/* AI/ML & Special */}
              <div className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">AI/ML & Specialized</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-medium text-sm hover:bg-purple-100 transition-colors">
                    Machine Learning
                  </span>
                  <span className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg font-medium text-sm hover:bg-purple-100 transition-colors">AI</span>
                  <span className="px-4 py-2 bg-red-50 text-red-700 rounded-lg font-medium text-sm hover:bg-red-100 transition-colors">OpenCV</span>
                  <span className="px-4 py-2 bg-pink-50 text-pink-700 rounded-lg font-medium text-sm hover:bg-pink-100 transition-colors">Computer Vision</span>
                  <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg font-medium text-sm hover:bg-indigo-100 transition-colors">OpenPose</span>
                  <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg font-medium text-sm hover:bg-emerald-100 transition-colors">OpenAI</span>
                </div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Projects Section */}
        <ParallaxSection id="projects" backgroundColor="#e3e3e1" className="py-20 px-4" speed={0.3}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-black">Featured Projects</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              A selection of my recent work across web3, full-stack development, mobile apps, and more
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <div className="text-6xl mb-2">
                          {project.category === "Web3" && "⛓️"}
                          {project.category === "Full Stack" && "🌐"}
                          {project.category === "Mobile" && "📱"}
                          {project.category === "AI/ML" && "🤖"}
                          {project.category === "Desktop" && "💻"}
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-wider">{project.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{project.description}</p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-2.5 py-1 rounded-full text-xs font-medium ${techColors[tech] || "bg-gray-100 text-gray-600"}`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-12">
              <a
                href="https://github.com/supunlakmal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                View All Projects on GitHub
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </ParallaxSection>

        {/* Experience Section */}
        <ParallaxSection id="experience" backgroundColor="#e3e3e1" className="py-20 px-4" speed={0.2}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-black">Work Experience</h2>
            <p className="text-center text-gray-600 mb-12">14+ years of professional software development experience</p>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white/70 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-grow">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{index + 1}</div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                          <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
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
                              {exp.period}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 md:max-w-xs">
                      {exp.techStack.map((tech, techIdx) => (
                        <span key={techIdx} className={`px-2.5 py-1 rounded-full text-xs font-medium ${techColors[tech] || "bg-gray-100 text-gray-600"}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 ml-13">{exp.description}</p>

                  {/* Key Achievements */}
                  <div className="ml-13">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-blue-600 mt-1 flex-shrink-0">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  {exp.projects.length > 0 && (
                    <div className="mt-4 ml-13 pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">Notable Projects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.projects.map((project, projIdx) => (
                          <span key={projIdx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Career Summary Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">14+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600">5</div>
                <div className="text-sm text-gray-600 mt-1">Companies</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600">20+</div>
                <div className="text-sm text-gray-600 mt-1">Projects Delivered</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600">10+</div>
                <div className="text-sm text-gray-600 mt-1">Technologies</div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Achievements Section */}
        <ParallaxSection id="achievements" backgroundColor="#e3e3e1" className="py-20 px-4" speed={0.26}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-black">Key Achievements</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Milestones and innovations that showcase expertise across Web3, AI, and full-stack development
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center group"
                >
                  {/* Icon */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{achievement.icon}</div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        achievement.category === "Award"
                          ? "bg-yellow-100 text-yellow-700"
                          : achievement.category === "Recognition"
                          ? "bg-pink-100 text-pink-700"
                          : achievement.category === "Leadership"
                          ? "bg-blue-100 text-blue-700"
                          : achievement.category === "Innovation"
                          ? "bg-purple-100 text-purple-700"
                          : achievement.category === "Performance"
                          ? "bg-green-100 text-green-700"
                          : achievement.category === "Technology"
                          ? "bg-orange-100 text-orange-700"
                          : achievement.category === "Development"
                          ? "bg-cyan-100 text-cyan-700"
                          : achievement.category === "Web3"
                          ? "bg-indigo-100 text-indigo-700"
                          : achievement.category === "Impact"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {achievement.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{achievement.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="mt-16 bg-white/70 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Career Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">4+</div>
                  <div className="text-sm text-gray-600">Startups Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Tech Stacks Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">1</div>
                  <div className="text-sm text-gray-600">Hackathon Award</div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Education Section */}
        <ParallaxSection id="education" backgroundColor="#e3e3e1" className="py-20 px-4" speed={0.19}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-black">Education</h2>
            <p className="text-center text-gray-600 mb-12">Academic qualifications and professional certifications</p>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white/70 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl">
                        {edu.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                          <p className="text-lg text-blue-600 font-medium mb-1">{edu.institution}</p>
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
                              {edu.location}
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
                              {edu.period}
                            </span>
                          </div>
                        </div>

                        {/* Type Badge */}
                        <div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                              edu.type === "Higher Education" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                            }`}
                          >
                            {edu.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Summary */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
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

        {/* Contact Section */}
        <ParallaxSection id="contact" backgroundColor="#e3e3e1" className="py-20 px-4" speed={0.24}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-black">Get In Touch</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Let&apos;s collaborate on your next project. Feel free to reach out via email, phone, or connect on social media.
            </p>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Email Card */}
              <a
                href="mailto:supunlakmal61@gmail.com"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-sm text-gray-600 break-all">supunlakmal61@gmail.com</p>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+94715546940"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-sm text-gray-600">+94 71 55 46 940</p>
              </a>

              {/* Location Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-sm text-gray-600">Colombo, Sri Lanka</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/70 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Connect on Social Media</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/supunlakmal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/supun-lakmal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>

                {/* Portfolio Website */}
                <a
                  href="https://supunlakmal.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  Github page
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/channel/UC48UuOQIHZ3wNm4qA832u8Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>

                {/* Reddit */}
                <a
                  href="https://www.reddit.com/user/lakmal007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                  </svg>
                  Reddit
                </a>

                {/* Stack Overflow */}
                <a
                  href="https://stackoverflow.com/cv/supunabesekara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" />
                  </svg>
                  Stack Overflow
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-800 rounded-full font-medium">
                <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
                Available for freelance projects and collaborations
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200 text-center">
          <p className="text-gray-600">© 2025 Supun Lakmal</p>
        </footer>
      </div>
    </div>
  );
}
