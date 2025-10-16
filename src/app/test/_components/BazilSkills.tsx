"use client";

import { useState } from "react";

const skillCategories = [
  {
    category: "Frontend",
    color: "#FDA228",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "TypeScript", level: 92, icon: "TS" },
      { name: "Tailwind CSS", level: 88, icon: "🎨" },
      { name: "Vue.js", level: 75, icon: "💚" },
    ],
  },
  {
    category: "Backend",
    color: "#10B981",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express", level: 88, icon: "🚂" },
      { name: "Python", level: 80, icon: "🐍" },
      { name: "GraphQL", level: 85, icon: "◆" },
      { name: "REST APIs", level: 93, icon: "🔌" },
    ],
  },
  {
    category: "Database",
    color: "#8B5CF6",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    skills: [
      { name: "MongoDB", level: 87, icon: "🍃" },
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "Redis", level: 82, icon: "⚡" },
      { name: "MySQL", level: 80, icon: "🐬" },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "#EF4444",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    skills: [
      { name: "Docker", level: 88, icon: "🐳" },
      { name: "AWS", level: 82, icon: "☁️" },
      { name: "Git", level: 95, icon: "📦" },
      { name: "CI/CD", level: 80, icon: "🔄" },
    ],
  },
];

export function BazilSkills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FDA228]/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse-subtle"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-3xl animate-pulse-subtle"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#FDA228] to-transparent" />
            <span className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-semibold">
              Full-Stack Expertise
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#FDA228] to-transparent" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDA228] via-[#10B981] to-[#8B5CF6]">
              Tech Arsenal
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From pixel-perfect frontends to robust backends - I build complete,
            scalable solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((cat, index) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(index)}
              className={`group relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 ${
                activeCategory === index
                  ? "bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-2xl scale-105"
                  : "bg-white/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-900"
              }`}
              style={{
                borderWidth: activeCategory === index ? "2px" : "1px",
                borderColor:
                  activeCategory === index ? cat.color : "transparent",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`transition-colors duration-300 ${activeCategory === index ? "" : "text-gray-500"}`}
                  style={{
                    color: activeCategory === index ? cat.color : undefined,
                  }}
                >
                  {cat.icon}
                </div>
                <span
                  className={`transition-colors duration-300 ${activeCategory === index ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-400"}`}
                >
                  {cat.category}
                </span>
                <div
                  className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${activeCategory === index ? "bg-black/10 dark:bg-white/10" : "bg-gray-200 dark:bg-gray-800"}`}
                >
                  {cat.skills.length}
                </div>
              </div>
              {activeCategory === index && (
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 rounded-t-full"
                  style={{ backgroundColor: cat.color }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skills Display - Creative Layout */}
        <div className="relative">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className={`transition-all duration-700 ${
                activeCategory === catIndex
                  ? "opacity-100 scale-100 relative"
                  : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
              }`}
            >
              {/* Circular/Radial Layout */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Side - Visual Circle */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-square">
                    {/* Center Circle */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl animate-pulse-subtle"
                      style={{ backgroundColor: category.color }}
                    >
                      <div className="text-white text-4xl">{category.icon}</div>
                    </div>

                    {/* Orbiting Skills */}
                    {category.skills.map((skill, index) => {
                      const angle = (index * 360) / category.skills.length;
                      const radius = 45; // percentage
                      const x =
                        50 + radius * Math.cos(((angle - 90) * Math.PI) / 180);
                      const y =
                        50 + radius * Math.sin(((angle - 90) * Math.PI) / 180);

                      return (
                        <div
                          key={skill.name}
                          className="absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 animate-fadeIn"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            animationDelay: `${index * 0.1}s`,
                            opacity: 0,
                            animationFillMode: "forwards",
                          }}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div
                            className={`w-full h-full rounded-full flex items-center justify-center text-2xl cursor-pointer transition-all duration-300 ${
                              hoveredSkill === skill.name
                                ? "scale-125 shadow-2xl"
                                : "scale-100"
                            }`}
                            style={{
                              backgroundColor:
                                hoveredSkill === skill.name
                                  ? category.color
                                  : "white",
                              boxShadow:
                                hoveredSkill === skill.name
                                  ? `0 0 30px ${category.color}80`
                                  : "0 4px 6px rgba(0,0,0,0.1)",
                            }}
                          >
                            <span
                              className={`${hoveredSkill === skill.name ? "" : "grayscale"}`}
                            >
                              {skill.icon}
                            </span>
                          </div>
                          {hoveredSkill === skill.name && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-lg text-xs font-bold whitespace-nowrap">
                              {skill.name}
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* Connecting Lines */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      style={{ zIndex: -1 }}
                    >
                      {category.skills.map((_, index) => {
                        const angle = (index * 360) / category.skills.length;
                        const radius = 45;
                        const x =
                          50 +
                          radius * Math.cos(((angle - 90) * Math.PI) / 180);
                        const y =
                          50 +
                          radius * Math.sin(((angle - 90) * Math.PI) / 180);

                        return (
                          <line
                            key={index}
                            x1="50%"
                            y1="50%"
                            x2={`${x}%`}
                            y2={`${y}%`}
                            stroke={category.color}
                            strokeWidth="1"
                            opacity="0.2"
                            strokeDasharray="4 4"
                          />
                        );
                      })}
                    </svg>
                  </div>
                </div>

                {/* Right Side - Skill Bars with Levels */}
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group animate-slideIn"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-bold text-lg text-black dark:text-white group-hover:text-[#FDA228] transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                          <div className="relative w-12 h-12">
                            <svg className="w-full h-full transform -rotate-90">
                              <circle
                                cx="24"
                                cy="24"
                                r="20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                className="text-gray-200 dark:text-gray-700"
                              />
                              <circle
                                cx="24"
                                cy="24"
                                r="20"
                                fill="none"
                                stroke={category.color}
                                strokeWidth="4"
                                strokeDasharray={`${2 * Math.PI * 20}`}
                                strokeDashoffset={`${2 * Math.PI * 20 * (1 - skill.level / 100)}`}
                                className="transition-all duration-1000"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: category.color,
                            boxShadow:
                              hoveredSkill === skill.name
                                ? `0 0 20px ${category.color}`
                                : "none",
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Technologies", value: "20+", icon: "💻" },
            { label: "Years Coding", value: "4+", icon: "⏱️" },
            { label: "Projects Built", value: "50+", icon: "🚀" },
            { label: "Lines of Code", value: "100K+", icon: "📝" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#FDA228] transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#FDA228] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
