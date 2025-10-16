"use client";

import { useState, useMemo } from "react";
import { projects, categories } from "./projectsData";

export function BazilProjects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  // Display only 6 projects initially or all if showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  const handleProjectClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400 font-medium">
            My Portfolio
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            Featured <span className="text-[#FDA228]">Projects</span>
          </h2>
        </div>

        {/* Filter Section */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false); // Reset to show 6 when filter changes
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-[#FDA228] text-white shadow-lg shadow-[#FDA228]/30"
                  : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-2 text-xs opacity-70">
                  ({projects.filter((p) => p.category === category).length})
                </span>
              )}
              {category === "All" && (
                <span className="ml-2 text-xs opacity-70">
                  ({projects.length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {displayedProjects.length} of {filteredProjects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              data-cursor-text="VIEW"
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/5] transform transition-all duration-500 hover:scale-[1.02]"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleProjectClick(project.url)}
            >
              {/* Project Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-90"
                style={{ backgroundColor: project.color }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Metrics Badge */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <p className="text-xs text-white font-medium">
                        {project.metrics[0]}
                      </p>
                    </div>
                  </div>
                )}

                <div className="transform transition-all duration-500 group-hover:translate-y-[-30px]">
                  <p className="text-sm uppercase tracking-wider text-gray-300 group-hover:text-white mb-2 font-semibold">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Show Less Button */}
        {hasMoreProjects && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              data-cursor-text={showAll ? "LESS" : "MORE"}
              className="group relative px-10 py-4 border-2 border-black dark:border-white text-black dark:text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:text-white dark:hover:text-black"
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? "Show Less" : `View All Projects (${filteredProjects.length - 6} more)`}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    showAll ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-black dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
          </div>
        )}

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
