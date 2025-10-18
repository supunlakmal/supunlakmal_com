"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Experiment metadata
interface ExperimentMeta {
  id: string;
  name: string;
  category: "Particle Systems" | "Network" | "Chaotic Systems" | "Physics" | "Procedural 3D";
  description: string;
  path: string;
}

const experiments: ExperimentMeta[] = [
  { id: "test1", name: "Ink Wisps", category: "Particle Systems", description: "Flowing ink particles guided by Perlin noise with mouse interaction", path: "/expermnets/test1" },
  { id: "test2", name: "Celestial Dust", category: "Particle Systems", description: "Cosmic particles with gravity wells and physics simulation", path: "/expermnets/test2" },
  { id: "test3", name: "Neural Web", category: "Network", description: "Dynamic network visualization with node connections and pulse effects", path: "/expermnets/test3" },
  { id: "test5", name: "Living Watercolor", category: "Particle Systems", description: "Organic bloom expansion with watercolor-like effects", path: "/expermnets/test5" },
  { id: "test6", name: "Attractor Conductor", category: "Chaotic Systems", description: "Clifford Attractor visualization with mouse-controlled parameters", path: "/expermnets/test6" },
  { id: "test8", name: "Experiment 8", category: "Particle Systems", description: "Interactive canvas animation", path: "/expermnets/test8" },
  { id: "test9", name: "Experiment 9", category: "Particle Systems", description: "Interactive canvas animation", path: "/expermnets/test9" },
  { id: "test10", name: "Experiment 10", category: "Particle Systems", description: "Interactive canvas animation", path: "/expermnets/test10" },
  { id: "test11", name: "Experiment 11", category: "Particle Systems", description: "Interactive canvas animation", path: "/expermnets/test11" },
  { id: "test12", name: "Experiment 12", category: "Particle Systems", description: "Interactive canvas animation", path: "/expermnets/test12" },
  { id: "test13", name: "Experiment 13", category: "Particle Systems", description: "Interactive canvas animation", path: "/expermnets/test13" },
  { id: "test14", name: "Experiment 14", category: "Particle Systems", description: "Interactive canvas animation", path: "/expermnets/test14" },
  { id: "test15", name: "Ectoplasmic Lens", category: "Physics", description: "Metaballs with phase inversion and attraction physics", path: "/expermnets/test15" },
  { id: "test16", name: "Experiment 16", category: "Particle Systems", description: "Interactive canvas animation", path: "/expermnets/test16" },
  { id: "test17", name: "Experiment 17", category: "Particle Systems", description: "Interactive canvas animation", path: "/expermnets/test17" },
  { id: "test18", name: "Experiment 18", category: "Particle Systems", description: "Interactive canvas animation", path: "/expermnets/test18" },
  { id: "test19", name: "Architect's Dream", category: "Procedural 3D", description: "3D procedural architecture with grid-based generation", path: "/expermnets/test19" },
];

const categoryColors = {
  "Particle Systems": "bg-blue-100 text-blue-700",
  "Network": "bg-purple-100 text-purple-700",
  "Chaotic Systems": "bg-orange-100 text-orange-700",
  "Physics": "bg-green-100 text-green-700",
  "Procedural 3D": "bg-pink-100 text-pink-700",
};

// Component for individual experiment card
function ExperimentCard({ experiment }: { experiment: ExperimentMeta }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Animation Container */}
      <Link href={experiment.path} className="block relative">
        <div className="relative h-64 bg-gray-900 overflow-hidden">
          {isVisible && (
            <iframe
              ref={iframeRef}
              src={experiment.path}
              className="w-full h-full pointer-events-none"
              title={experiment.name}
              loading="lazy"
            />
          )}
          {!isVisible && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-500">
              <div className="text-center">
                <div className="text-4xl mb-2">✨</div>
                <div className="text-sm">Scroll to load</div>
              </div>
            </div>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-xl">
                View Fullscreen
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Card Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold text-gray-900">{experiment.name}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${categoryColors[experiment.category]}`}>
            {experiment.category}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{experiment.description}</p>
        <Link
          href={experiment.path}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          Launch Experiment
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function ExperimentsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(experiments.map((e) => e.category)))];

  const filteredExperiments = selectedCategory === "All"
    ? experiments
    : experiments.filter((e) => e.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Creative Experiments</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A collection of interactive canvas animations exploring particle systems, network visualizations,
            chaotic mathematics, physics simulations, and procedural generation. Click any card to experience the full animation.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>{filteredExperiments.length} Interactive Experiments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>All Mouse Interactive</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 z-10 bg-white shadow-md py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-gray-700 mr-2">Filter:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Experiments Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiments.map((experiment) => (
            <ExperimentCard key={experiment.id} experiment={experiment} />
          ))}
        </div>

        {filteredExperiments.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No experiments found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Tips Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 mt-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Interaction Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-3">🖱️</div>
              <h3 className="font-bold text-gray-900 mb-2">Mouse Movement</h3>
              <p className="text-sm text-gray-600">Move your mouse to influence particles, activate nodes, or control parameters</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-3">👆</div>
              <h3 className="font-bold text-gray-900 mb-2">Click Interactions</h3>
              <p className="text-sm text-gray-600">Click to create bursts, pulses, or trigger special modes in each experiment</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-gray-900 mb-2">Visual Variety</h3>
              <p className="text-sm text-gray-600">Each experiment features unique algorithms from particle flow to procedural generation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8 px-4 text-center">
        <p className="text-gray-400">
          Built with React, TypeScript, and HTML5 Canvas • {experiments.length} Experiments
        </p>
      </div>
    </div>
  );
}
