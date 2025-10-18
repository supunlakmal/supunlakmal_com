"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#e3e3e1]/95 backdrop-blur-md border-b border-gray-300 shadow-sm" style={{ zIndex: 100 }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl sm:text-2xl font-bold tracking-tight text-black hover:text-blue-600 transition-colors"
            >
              Supun Lakmal
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-black hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-sm font-medium text-black hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm font-medium text-black hover:text-blue-600 transition-colors">
              Projects
            </button>
            <Link href="/expermnets" className="text-sm font-medium text-black hover:text-blue-600 transition-colors">
              Experiments
            </Link>
            <button onClick={() => scrollToSection("experience")} className="text-sm font-medium text-black hover:text-blue-600 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-black hover:text-blue-600 transition-colors">
              Contact
            </button>
            <a
              href="/Supun_Lakml_CV_2025.pdf"
              download
              className="ml-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-black hover:text-blue-600 transition-colors">
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-300 pt-4">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-sm font-medium text-black hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left py-2 text-sm font-medium text-black hover:text-blue-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left py-2 text-sm font-medium text-black hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
              <Link href="/expermnets" className="text-left py-2 text-sm font-medium text-black hover:text-blue-600 transition-colors">
                Experiments
              </Link>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left py-2 text-sm font-medium text-black hover:text-blue-600 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-sm font-medium text-black hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
              <a
                href="/Supun_Lakml_CV_2025.pdf"
                download
                className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
