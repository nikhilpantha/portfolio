export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  metrics?: string[];
  image: string;
  url: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "College Cost Secrets",
    category: "Ed-Tech",
    description:
      "A free to use web platform that helps parents search for schools based on financial and academic qualifications",
    metrics: ["10% Test Data"],
    image:
      "https://www.inseed.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fb5imttu4%2Fproduction%2F6a4a7ddfa1774c5a13071449f2211e088f07a7a2-1280x719.jpg&w=3840&q=75",
    url: "https://www.inseed.dev/projects/ccs",
    color: "#FDA228",
  },
  {
    id: 2,
    title: "LaunchX",
    category: "Website",
    description:
      "A software agency providing customer tailored software solutions ranging from SaaS web products, Mobile Apps, Smart TV apps",
    metrics: ["20k increase in user"],
    image:
      "https://www.inseed.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fb5imttu4%2Fproduction%2F175add208a61d8e87da62c8d1c2ab9277007307c-1375x904.png&w=3840&q=75",
    url: "https://www.inseed.dev/projects/launchx",
    color: "#4F46E5",
  },
  {
    id: 3,
    title: "Al Light Electricity App",
    category: "Fin-Tech",
    description:
      "An online payment application for electricity bills in Butwal city with customer rewards",
    metrics: [
      "25% Increase in User Retention",
      "8k Daily Users",
      "84% Increase in time spent on website",
    ],
    image:
      "https://www.inseed.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fb5imttu4%2Fproduction%2F123330190d28ae3f95441db7f79c8a7730edae46-5120x3412.jpg&w=3840&q=75",
    url: "https://www.inseed.dev/projects/alight",
    color: "#10B981",
  },
  {
    id: 4,
    title: "E Tutor Class",
    category: "Ed-Tech",
    description:
      "An innovative online learning platform connecting students with expert tutors for personalized education",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    url: "https://www.inseed.dev/projects/etutor-class",
    color: "#EF4444",
  },
  {
    id: 5,
    title: "Sax Loan Dashboard",
    category: "Web3",
    description:
      "A decentralized finance dashboard for managing crypto loans and lending protocols",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    url: "https://www.inseed.dev/projects/sax-dash",
    color: "#8B5CF6",
  },
  {
    id: 6,
    title: "Sunaulo Shopping",
    category: "E-Commerce",
    description:
      "A comprehensive e-commerce platform offering seamless shopping experience with diverse product categories",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    url: "https://www.inseed.dev/projects/sunaulo",
    color: "#F59E0B",
  },
  {
    id: 7,
    title: "Result Processing System",
    category: "Ed-Tech",
    description:
      "An automated system for processing and managing academic results efficiently",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    url: "https://www.inseed.dev/projects/blems",
    color: "#06B6D4",
  },
  {
    id: 8,
    title: "BookVid",
    category: "Website",
    description:
      "A platform for booking video consultations and managing appointments seamlessly",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    url: "https://www.inseed.dev/projects/bookvid",
    color: "#EC4899",
  },
  {
    id: 9,
    title: "Lyve App",
    category: "Marketplace",
    description:
      "A dynamic marketplace app connecting buyers and sellers for local services and products",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    url: "https://www.inseed.dev/projects/lyve",
    color: "#14B8A6",
  },
];

export const categories = [
  "All",
  "Ed-Tech",
  "Fin-Tech",
  "Web3",
  "E-Commerce",
  "Website",
  "Marketplace",
];
