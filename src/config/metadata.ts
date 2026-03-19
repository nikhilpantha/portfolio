export const metadataConfig = {
  // PRIMARY SEO FIELDS - CRITICAL
  title: "Nikhil Pantha | Full Stack Developer & React Specialist | Nepal",
  description:
    "Nikhil Pantha is an award-winning Full Stack Developer and React specialist from Nepal with 4+ years of experience. Expert in Next.js, TypeScript, and modern web technologies. Building high-performance web applications, custom solutions, and digital transformations. Available for freelance projects, consulting, and collaborations. Proven track record: 50+ successful projects, 100% client satisfaction.",

  // ENHANCED KEYWORDS - 30+ Strategic Keywords
  keywords: [
    // Brand & Name
    "Nikhil Pantha",
    "Nikhil Pantha Developer",

    // Core Technologies (High Volume)
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",

    // Skill-Based (Long-tail)
    "React.js Specialist",
    "Next.js Expert",
    "Web Application Developer",
    "Custom Web Development",
    "React Development Services",
    "Next.js Development Services",

    // Geographic (Local SEO)
    "Web Developer Nepal",
    "Developer Nepal",
    "Full Stack Developer Nepal",
    "React Developer Nepal",
    "Freelance Developer Nepal",

    // Service-Based
    "Web Development",
    "Web Design",
    "UI/UX Development",
    "Responsive Web Design",
    "Progressive Web Apps",
    "Web Application Development",

    // Additional SEO
    "Portfolio",
    "Freelance Developer",
    "Hire Developer",
    "Web Development Services",
    "Custom Web Solutions",
    "Modern Web Technologies",
  ],

  author: "Nikhil Pantha",
  url: "http://nikhilpantha.com.np",
  siteName: "Nikhil Pantha - Full Stack Developer Portfolio",
  twitter: "@nikhilpantha",
  locale: "en_US",
  type: "website",
  image: "http://nikhilpantha.com.np/og-image.jpg",

  // SCHEMA STRUCTURED DATA
  structuredData: {
    // Organization Schema
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Nikhil Pantha - Developer",
      url: "http://nikhilpantha.com.np",
      logo: "http://nikhilpantha.com.np/logo.jpg",
      description:
        "Full Stack Developer specializing in modern web technologies",
      sameAs: [
        "https://linkedin.com/in/nikhilpantha",
        "https://github.com/nikhilpantha",
        "https://twitter.com/nikhilpantha",
        "https://instagram.com/pantha.nikhil",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "General Support",
        email: "nikhilpantha207@gmail.com",
      },
      areaServed: "NP",
    },

    // Person Schema
    person: {
      "@context": "https://schema.org/",
      "@type": "Person",
      name: "Nikhil Pantha",
      url: "http://nikhilpantha.com.np",
      image: "http://nikhilpantha.com.np/profile.jpg",
      jobTitle: "Full Stack Developer",
      worksFor: {
        "@type": "Organization",
        name: "Freelance",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Frontend Development",
        "Backend Development",
        "Web Development",
        "Full Stack Development",
        "Tailwind CSS",
        "Node.js",
        "AWS",
        "Web Design",
        "UI/UX",
      ],
      sameAs: [
        "https://linkedin.com/in/nikhilpantha",
        "https://github.com/nikhilpantha",
        "https://twitter.com/nikhilpantha",
      ],
    },

    // Website Schema
    website: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Nikhil Pantha Portfolio",
      url: "http://nikhilpantha.com.np",
      description:
        "Full Stack Developer portfolio showcasing React, Next.js, and modern web development expertise",
      creator: {
        "@type": "Person",
        name: "Nikhil Pantha",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "http://nikhilpantha.com.np/search?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  },
};
