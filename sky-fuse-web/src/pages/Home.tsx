import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { AboutProject } from "@/components/sections/AboutProject";
import { Capabilities } from "@/components/sections/Capabilities";
import { Deployment } from "@/components/sections/Deployment";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Roadmap } from "@/components/sections/Roadmap";
import { WhatIsSkyFuse } from "@/components/sections/WhatIsSkyFuse";

export function Home() {
  return (
    <>
      <Hero />
      <WhatIsSkyFuse />
      <Capabilities />
      <HowItWorks />
      <Deployment />
      <Roadmap />
      <AboutProject />
      <SiteFooter />
    </>
  );
}
