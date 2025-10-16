"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function BazilHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 lg:pt-0  bg-white dark:bg-black overflow-x-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#FDA228 1px, transparent 1px), linear-gradient(90deg, #FDA228 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-[#FDA228] opacity-10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s", animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#FDA228] opacity-10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s", animationDuration: "10s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#FDA228] to-black dark:to-white opacity-5 rounded-full blur-3xl animate-pulse-subtle" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 text-center lg:text-left animate-slideIn">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDA228]/10 border border-[#FDA228]/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FDA228] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FDA228]"></span>
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300 font-bold">
                Available for Work
              </span>
            </div>

            {/* Main Title with Staggered Animation */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                <span
                  className="block animate-slideUp"
                  style={{
                    animationDelay: "0.1s",
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  Creating
                </span>
                <span
                  className="block mt-2 pb-2 bg-gradient-to-r from-black via-[#FDA228] to-black dark:from-white dark:via-[#FDA228] dark:to-white bg-clip-text text-transparent animate-slideUp leading-tight"
                  style={{
                    animationDelay: "0.3s",
                    opacity: 0,
                    animationFillMode: "forwards",
                    lineHeight: "1.1",
                  }}
                >
                  Digital Magic
                </span>
                <span
                  className="block mt-2 animate-slideUp"
                  style={{
                    animationDelay: "0.5s",
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  Together
                </span>
              </h1>
            </div>

            {/* Description with enhanced styling */}
            <p
              className="max-w-xl text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed animate-fadeIn"
              style={{
                animationDelay: "0.7s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              Crafting digital experiences that blend{" "}
              <span className="text-[#FDA228] font-semibold">
                innovative design
              </span>{" "}
              with{" "}
              <span className="text-[#FDA228] font-semibold">clean code</span>
            </p>

            {/* Stats Row */}
            <div
              className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4 animate-fadeIn"
              style={{
                animationDelay: "0.9s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <div>
                <div className="text-3xl font-bold text-[#FDA228]">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FDA228]">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Exp
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FDA228]">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4 animate-bounceIn"
              style={{
                animationDelay: "1.1s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <button
                data-cursor-text="CLICK"
                className="group relative px-10 py-4 bg-[#FDA228] text-black font-bold text-base rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(253,162,40,0.5)]"
              >
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0" />
                <span className="relative z-20 flex items-center gap-2 group-hover:opacity-0 transition-opacity duration-300">
                  View My Work
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-[#FDA228] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold gap-2 z-10">
                  View My Work
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>

              <button
                data-cursor-text="CONTACT"
                className="group px-10 py-4 bg-transparent border-2 border-black dark:border-white text-black dark:text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Side - Creative Photo Display */}
          <div
            className="relative lg:h-[600px] h-[500px] flex items-center justify-center animate-fadeIn"
            style={{
              animationDelay: "0.5s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {/* Decorative Elements */}
            <div
              className="absolute inset-0 animate-rotate"
              style={{ animationDuration: "30s" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-[#FDA228] rounded-tr-[40px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-[#FDA228] rounded-bl-[40px]" />
            </div>

            {/* Animated Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-[400px] h-[400px] rounded-full border-2 border-dashed border-[#FDA228]/30 animate-rotate"
                style={{ animationDuration: "20s" }}
              />
            </div>

            {/* Main Photo Container with Creative Shape */}
            <div className="relative z-10 group">
              {/* Glowing effect behind photo */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#FDA228] via-transparent to-[#FDA228] opacity-50 blur-3xl group-hover:opacity-70 transition-opacity duration-500 rounded-full" />

              {/* Photo Frame with Modern Border */}
              <div className="relative w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]">
                {/* Animated border gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-[#FDA228] via-transparent to-[#FDA228] rounded-full animate-rotate p-[3px]"
                  style={{ animationDuration: "8s" }}
                >
                  <div className="w-full h-full bg-white dark:bg-black rounded-full" />
                </div>

                {/* Actual Image */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden border-4 border-white dark:border-black shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/Meghraj.png"
                    alt="Portfolio Hero"
                    fill
                    className="object-cover transition-all duration-500"
                    priority
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FDA228]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-[#FDA228] text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl animate-float border-4 border-white dark:border-black">
                  ⚡ Let&#39;s Build!
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-8 -left-8 w-4 h-4 bg-[#FDA228] rounded-full animate-pulse-subtle" />
              <div
                className="absolute -bottom-8 -right-8 w-6 h-6 bg-[#FDA228] rounded-full animate-pulse-subtle"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-1/2 -right-12 w-3 h-3 bg-[#FDA228] rounded-full animate-pulse-subtle"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <svg
              className="w-6 h-6 text-[#FDA228]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
