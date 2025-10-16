"use client";

import { BazilHero } from "./_components/BazilHero";
import { BazilAbout } from "./_components/BazilAbout";
import { BazilExpertise } from "./_components/BazilExpertise";
import { BazilProjects } from "./_components/BazilProjects";
import { BazilContact } from "./_components/BazilContact";
import { CustomCursor } from "./_components/CustomCursor";

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
