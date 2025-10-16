// import { HeroSection } from "@/components/sections/HeroSection";
// import { AboutSection } from "@/components/sections/AboutSection";
// import { SkillsSection } from "@/components/sections/SkillsSection";
// import { ProjectsSection } from "@/components/sections/ProjectsSection";
// import { ContactSection } from "@/components/sections/ContactSection";

// export default function Home() {
//   return (
//     <div className="animate-fadeIn">
//       <HeroSection />
//       <ProjectsSection />
//       <SkillsSection />
//       <AboutSection />
//       <ContactSection />
//     </div>
//   );
// }

"use client";

import { BazilAbout } from "./test/_components/BazilAbout";
import { BazilContact } from "./test/_components/BazilContact";
import { BazilExpertise } from "./test/_components/BazilExpertise";
import { BazilHero } from "./test/_components/BazilHero";
import { BazilProjects } from "./test/_components/BazilProjects";
import { CustomCursor } from "./test/_components/CustomCursor";

export default function TestPage() {
  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-white">
      <CustomCursor />
      <BazilHero />
      <BazilAbout />
      <BazilExpertise />
      <BazilProjects />
      <BazilContact />
    </div>
  );
}
