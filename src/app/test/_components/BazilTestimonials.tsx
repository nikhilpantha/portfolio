"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://i.pravatar.cc/150?img=1",
    content:
      "Working with this team was an absolute pleasure. They transformed our vision into a stunning digital experience that exceeded all expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, Creative Co",
    image: "https://i.pravatar.cc/150?img=2",
    content:
      "The attention to detail and creative approach brought our brand to life. Highly recommended for anyone looking for top-tier design work.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, BrandHub",
    image: "https://i.pravatar.cc/150?img=3",
    content:
      "Exceptional work! The team delivered a beautiful, functional website that has significantly improved our online presence and conversions.",
    rating: 5,
  },
];

export function BazilTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400 font-medium">
            Client Feedback
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold">
            What Our Clients{" "}
            <span className="text-[#FDA228]">Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-cursor-text="READ"
              className="group p-8 bg-gray-50 dark:bg-gray-950 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Quote Icon */}
              <div className="mb-6 text-[#FDA228]">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#FDA228]"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FDA228] rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="mt-6 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#FDA228]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-[#FDA228] to-[#FDB758] rounded-3xl p-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch and let's
            discuss how we can bring your vision to life.
          </p>
          <button
            data-cursor-text="CONTACT"
            className="group px-10 py-4 bg-black text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">Get In Touch</span>
          </button>
        </div>
      </div>
    </section>
  );
}
