"use client";

import { useState } from "react";

const services = [
  {
    id: 1,
    number: "01",
    icon: "🎨",
    title: "Full-Stack Development",
    description:
      "End-to-end application development from concept to deployment, using modern frameworks and best practices.",
    features: ["React & Next.js", "Node.js & Express", "Database Design", "API Development"],
    color: "#FDA228",
  },
  {
    id: 2,
    number: "02",
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Speed up your applications with advanced optimization techniques, caching strategies, and efficient code.",
    features: ["Code Splitting", "Lazy Loading", "CDN Integration", "Database Indexing"],
    color: "#10B981",
  },
  {
    id: 3,
    number: "03",
    icon: "🔧",
    title: "System Architecture",
    description:
      "Design scalable, maintainable systems that grow with your business using microservices and cloud technologies.",
    features: ["Cloud Architecture", "Microservices", "DevOps & CI/CD", "Infrastructure as Code"],
    color: "#8B5CF6",
  },
  {
    id: 4,
    number: "04",
    icon: "🚀",
    title: "Technical Consulting",
    description:
      "Expert guidance on technology decisions, code reviews, and best practices to elevate your development team.",
    features: ["Code Review", "Tech Stack Selection", "Team Mentoring", "Process Optimization"],
    color: "#EF4444",
  },
];

export function BazilServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-6 bg-white dark:bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDA228]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#FDA228]" />
            <span className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-semibold">
              What I Offer
            </span>
            <div className="h-px w-12 bg-[#FDA228]" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-black dark:text-white">Services &</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDA228] to-[#10B981]">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive full-stack solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid - Creative Bento Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative animate-fadeIn"
              style={{
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
                animationFillMode: "forwards",
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Card */}
              <div className="relative h-full p-8 lg:p-10 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                {/* Animated Gradient Background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${service.color}, transparent 70%)`,
                  }}
                />

                {/* Number Badge */}
                <div className="absolute top-6 right-6">
                  <div
                    className="text-8xl font-bold opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ color: service.color }}
                  >
                    {service.number}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Animated Background */}
                  <div className="relative inline-flex mb-6">
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                      style={{ backgroundColor: service.color }}
                    />
                    <div
                      className="relative text-5xl w-20 h-20 flex items-center justify-center rounded-2xl transition-all duration-500"
                      style={{
                        backgroundColor: hoveredService === service.id ? service.color : 'transparent',
                        border: `2px solid ${service.color}`,
                      }}
                    >
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold mb-4 text-black dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                    style={{
                      backgroundImage: hoveredService === service.id ? `linear-gradient(135deg, ${service.color}, ${service.color}dd)` : 'none',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 group/item"
                        style={{
                          animation: hoveredService === service.id ? `slideIn 0.3s ease-out ${idx * 0.1}s both` : 'none',
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover/item:w-8"
                          style={{ backgroundColor: service.color }}
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/item:text-black dark:group-hover/item:text-white transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-8 flex items-center gap-2 text-sm font-bold group/link cursor-pointer"
                    style={{ color: service.color }}
                  >
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      Learn More
                    </span>
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ backgroundColor: service.color }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Need something custom? Let&apos;s discuss your project
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FDA228] to-[#10B981] text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_40px_rgba(253,162,40,0.5)]"
          >
            <span>Start a Project</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
