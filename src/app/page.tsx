"use client";

import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="font-bold text-xl text-blue-600">Nikhil Pantha</span>
          <ul className="flex gap-6">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center min-h-[60vh] text-center pt-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white"
          >
            Hi, I&apos;m Nikhil Pantha
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-6"
          >
            React & React Native Frontend Engineer
          </motion.p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="text-blue-600 hover:underline">
              GitHub
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Resume
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
            I am a passionate frontend engineer specializing in building
            beautiful, performant web and mobile apps using React and React
            Native. I love crafting delightful user experiences and solving
            real-world problems with code.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Skills
          </motion.h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded font-semibold">
              React
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded font-semibold">
              React Native
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded font-semibold">
              TypeScript
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded font-semibold">
              JavaScript
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded font-semibold">
              Next.js
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded font-semibold">
              Tailwind CSS
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded font-semibold">
              Framer Motion
            </span>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Example Project Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Project One
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                A brief description of your project goes here. Highlight what
                makes it special!
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                  React
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                  Next.js
                </span>
              </div>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                View on GitHub
              </a>
            </motion.div>
            {/* Add more project cards as needed */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Contact
          </motion.h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
          >
            Email Me
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Nikhil Pantha. All rights reserved.
      </footer>
    </div>
  );
}
