const BASE_URL = "https://nikhilpantha.com.np";

export const generatePersonSchema = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Nikhil Pantha",
    givenName: "Nikhil",
    familyName: "Pantha",
    url: BASE_URL,
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}/profile.jpg`,
      width: 400,
      height: 400,
    },
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    birthPlace: {
      "@type": "Place",
      name: "Nepal",
    },
    nationality: {
      "@type": "Country",
      name: "Nepal",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": BASE_URL,
    },
    description:
      "Nikhil Pantha is a Full Stack Developer from Nepal specializing in React, Next.js, and TypeScript with 4+ years of professional experience building high-performance web applications.",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "Web Development",
      "Tailwind CSS",
      "Node.js",
      "AWS",
      "Web Design",
      "UI/UX Design",
      "React Native",
      "Docker",
    ],
    knowsLanguage: ["English", "Nepali"],
    sameAs: [
      "https://www.linkedin.com/in/nikhilpantha",
      "https://github.com/nikhilpantha",
      "https://twitter.com/nikhilpantha",
      "https://instagram.com/pantha.nikhil",
    ],
    email: "nikhilpantha207@gmail.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Professional",
      email: "nikhilpantha207@gmail.com",
      availableLanguage: ["English", "Nepali"],
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Tribhuvan University",
      sameAs: "https://www.tribhuvan-university.edu.np",
    },
  };
};

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "Nikhil Pantha - Full Stack Developer Portfolio",
    url: BASE_URL,
    description:
      "Official portfolio of Nikhil Pantha, Full Stack Developer from Nepal specializing in React, Next.js, and TypeScript.",
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Nikhil Pantha",
    },
    creator: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Nikhil Pantha",
    },
    dateModified: new Date().toISOString(),
  };
};

export const generateProfilePageSchema = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "ProfilePage",
    "@id": `${BASE_URL}/#profilepage`,
    name: "Nikhil Pantha - Full Stack Developer Portfolio",
    url: BASE_URL,
    description:
      "Official portfolio and profile of Nikhil Pantha, Full Stack Developer from Nepal.",
    mainEntity: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Nikhil Pantha",
    },
    about: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Nikhil Pantha",
    },
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Nikhil Pantha",
    },
    inLanguage: "en-US",
    dateModified: new Date().toISOString(),
  };
};

export const generateBreadcrumbSchema = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "@id": `${BASE_URL}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Nikhil Pantha - Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Nikhil Pantha",
        item: `${BASE_URL}/#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects by Nikhil Pantha",
        item: `${BASE_URL}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact Nikhil Pantha",
        item: `${BASE_URL}/#contact`,
      },
    ],
  };
};

export const generateFAQSchema = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Nikhil Pantha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nikhil Pantha is a Full Stack Developer from Nepal with 4+ years of professional experience. He specializes in React, Next.js, TypeScript, and modern web technologies, and has completed 50+ projects across Fin-Tech, Ed-Tech, E-Commerce, and Web3 industries.",
        },
      },
      {
        "@type": "Question",
        name: "What does Nikhil Pantha do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nikhil Pantha is a Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. He builds high-performance web applications and provides freelance consulting services.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Nikhil Pantha from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nikhil Pantha is from Nepal and is a graduate of Tribhuvan University (BSc CSIT, 2024).",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Nikhil Pantha specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nikhil Pantha specializes in React, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, AWS, and modern frontend and backend web development.",
        },
      },
      {
        "@type": "Question",
        name: "How can I hire Nikhil Pantha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nikhil Pantha is available for freelance projects, consulting, and full-time collaborations. You can contact him at nikhilpantha207@gmail.com or through his portfolio at nikhilpantha.com.np.",
        },
      },
    ],
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#service`,
    name: "Nikhil Pantha - Full Stack Developer",
    image: `${BASE_URL}/profile.jpg`,
    description:
      "Professional full stack web development services by Nikhil Pantha, specializing in React, Next.js, and TypeScript.",
    url: BASE_URL,
    email: "nikhilpantha207@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressLocality: "Nepal",
    },
    sameAs: [
      "https://www.linkedin.com/in/nikhilpantha",
      "https://github.com/nikhilpantha",
    ],
    areaServed: "Worldwide",
    availableLanguage: ["English", "Nepali"],
    priceRange: "$$",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
    ],
    provider: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Nikhil Pantha",
    },
  };
};
