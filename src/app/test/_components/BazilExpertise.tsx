"use client";

import { useState, useEffect, useRef } from "react";

const expertiseData = {
  skills: [
    {
      category: "Frontend Development",
      description: "Building beautiful, responsive user interfaces",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vue.js",
        "HTML/CSS",
      ],
      icon: "💻",
    },
    {
      category: "Backend Development",
      description: "Robust server-side solutions and APIs",
      technologies: [
        "Node.js",
        "Express",
        "Python",
        "GraphQL",
        "REST APIs",
        "WebSockets",
      ],
      icon: "⚙️",
    },
    {
      category: "Database & Storage",
      description: "Efficient data management and optimization",
      technologies: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Firebase"],
      icon: "🗄️",
    },
    {
      category: "DevOps & Cloud",
      description: "Deployment, scaling, and infrastructure",
      technologies: ["Docker", "AWS", "Git", "CI/CD", "Nginx", "Kubernetes"],
      icon: "☁️",
    },
  ],
  services: [
    {
      title: "Full-Stack Development",
      description:
        "Complete web applications from frontend to backend, database design, and deployment.",
      highlights: ["Scalable Architecture", "Clean Code", "Best Practices"],
    },
    {
      title: "Performance Optimization",
      description:
        "Speed improvements, code optimization, and efficient resource management for better UX.",
      highlights: ["Faster Load Times", "SEO Friendly", "Better Rankings"],
    },
    {
      title: "API Development",
      description:
        "RESTful and GraphQL APIs with proper authentication, validation, and documentation.",
      highlights: ["Secure Endpoints", "Well Documented", "Versioning"],
    },
    {
      title: "Technical Consulting",
      description:
        "Architecture planning, code reviews, and mentoring to help teams build better products.",
      highlights: ["Expert Guidance", "Code Quality", "Team Growth"],
    },
  ],
};

export function BazilExpertise() {
  const [activeSkill, setActiveSkill] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-rotate carousel based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate scroll progress through the section
        const scrollProgress =
          (windowHeight - rect.top) / (windowHeight + rect.height);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        // Map scroll progress to skill index (0-3)
        const skillIndex = Math.floor(
          clampedProgress * expertiseData.skills.length
        );
        const boundedIndex = Math.min(
          skillIndex,
          expertiseData.skills.length - 1
        );

        setActiveSkill(boundedIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 px-6 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Subtle Background - Matching Hero Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-96 h-96 bg-[#FDA228] opacity-10 rounded-full blur-3xl animate-float"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#FDA228] opacity-10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s", animationDuration: "10s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Matching About Style */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#FDA228]" />
            <span className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-semibold">
              What I Do Best
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
            Expertise & <span className="text-[#FDA228]">Services</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Full-stack development expertise with a focus on building scalable,
            performant applications
          </p>
        </div>

        {/* Tech Carousel - Auto-rotating on scroll */}
        <div className="mb-24">
          {/* Carousel Navigation Dots */}
          <div className="flex justify-center gap-3 mb-12">
            {expertiseData.skills.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSkill(index)}
                className={`transition-all duration-500 rounded-full ${
                  activeSkill === index
                    ? "w-12 h-3 bg-[#FDA228]"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-700 hover:bg-[#FDA228]/50"
                }`}
                aria-label={`View ${expertiseData.skills[index].category}`}
              />
            ))}
          </div>

          {/* Carousel Content */}
          <div className="relative">
            {expertiseData.skills.map((skill, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  activeSkill === index
                    ? "opacity-100 scale-100 relative"
                    : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left - Icon & Category */}
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-[#FDA228]/20 to-[#FDA228]/5 mb-8 text-7xl">
                      {skill.icon}
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-bold mb-4 text-black dark:text-white">
                      {skill.category}
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                      {skill.description}
                    </p>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4 justify-center lg:justify-start">
                      <button
                        onClick={() =>
                          setActiveSkill(
                            (activeSkill - 1 + expertiseData.skills.length) %
                              expertiseData.skills.length
                          )
                        }
                        className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-[#FDA228] hover:bg-[#FDA228]/10 transition-all duration-300 flex items-center justify-center"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          setActiveSkill(
                            (activeSkill + 1) % expertiseData.skills.length
                          )
                        }
                        className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-[#FDA228] hover:bg-[#FDA228]/10 transition-all duration-300 flex items-center justify-center"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Right - Technologies */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {skill.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#FDA228] hover:scale-105 transition-all duration-300 text-center"
                        style={{
                          animation: `fadeIn 0.5s ease-out ${idx * 0.1}s both`,
                        }}
                      >
                        <div className="text-2xl font-bold text-black dark:text-white">
                          {tech}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Hint */}
          {/* <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>Scroll to explore different technologies</p>
          </div> */}
        </div>

        {/* Services Section - Clean List Style */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-20">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-black dark:text-white mb-4">
              How I Can Help
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Professional services tailored to your project needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertiseData.services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FDA228]/10 text-[#FDA228] font-bold mb-6">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold mb-3 text-black dark:text-white group-hover:text-[#FDA228] transition-colors">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3">
                  {service.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FDA228]" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats - Simple & Clean */}
        <div className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Technologies" },
              { value: "50+", label: "Projects" },
              { value: "4+", label: "Years" },
              { value: "30+", label: "Clients" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-[#FDA228] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
