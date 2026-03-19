export const generatePersonSchema = () => {
  return {
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
    sameAs: [
      "https://linkedin.com/in/nikhilpantha",
      "https://github.com/nikhilpantha",
      "https://twitter.com/nikhilpantha",
      "https://instagram.com/pantha.nikhil",
    ],
    description:
      "Full Stack Developer specializing in React, Next.js, and TypeScript. Building exceptional digital experiences with clean code and innovative solutions.",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "Full Stack Development",
      "Tailwind CSS",
      "Node.js",
      "AWS",
      "Web Design",
      "UI/UX Design",
    ],
    email: "nikhilpantha207@gmail.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "General",
      email: "nikhilpantha207@gmail.com",
    },
  };
};

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Nikhil Pantha Portfolio",
    url: "http://nikhilpantha.com.np",
    description:
      "Professional portfolio of Nikhil Pantha, Full Stack Developer from Nepal",
    creator: {
      "@type": "Person",
      name: "Nikhil Pantha",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "http://nikhilpantha.com.np/search?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
};

export const generateBreadcrumbSchema = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "http://nikhilpantha.com.np",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "http://nikhilpantha.com.np/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "http://nikhilpantha.com.np/#projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "http://nikhilpantha.com.np/#contact",
      },
    ],
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nikhil Pantha - Developer",
    url: "http://nikhilpantha.com.np",
    logo: "http://nikhilpantha.com.np/logo.jpg",
    description: "Full Stack Developer specializing in modern web technologies",
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
    serviceType: "Web Development Services",
  };
};

export const generateFAQSchema = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Nikhil Pantha do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nikhil Pantha is a Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. He builds high-performance web applications and provides consulting services.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Nikhil specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nikhil specializes in React, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, AWS, and modern frontend/backend web development.",
        },
      },
      {
        "@type": "Question",
        name: "Is Nikhil available for freelance projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Nikhil is available for freelance projects, consulting, and collaborations. Contact him via email at nikhilpantha207@gmail.com.",
        },
      },
      {
        "@type": "Question",
        name: "What is Nikhil's experience?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nikhil has 4+ years of professional experience in web development with 50+ successful projects completed and 100% client satisfaction.",
        },
      },
    ],
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    name: "Nikhil Pantha - Full Stack Developer",
    image: "http://nikhilpantha.com.np/profile.jpg",
    description:
      "Full Stack Developer providing web development services in Nepal",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressLocality: "Nepal",
    },
    telephone: "+977-XXXXXXXXXX",
    email: "nikhilpantha207@gmail.com",
    url: "http://nikhilpantha.com.np",
    sameAs: [
      "https://linkedin.com/in/nikhilpantha",
      "https://github.com/nikhilpantha",
      "https://twitter.com/nikhilpantha",
    ],
    priceRange: "$",
    serviceArea: {
      "@type": "Country",
      name: "Nepal",
    },
  };
};
