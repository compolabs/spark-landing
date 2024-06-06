import React from "react";

import useMainFont from "@/core/hooks/useMainFont";

import HeroSection from "./HeroSection";
import Features from "./Features";
import InterfaceSection from "./InterfaceSection";
import TradingPlatformSection from "./TradingPlatformSection";
import ResourcesSection from "./ResourcesSection";
import GetStartedSection from "./GetStartedSection";
import Background from "./Background";

const LandingPage = () => {
  const syne = useMainFont();
  return (
    <main className={syne}>
      <Background />
      <HeroSection />
      <InterfaceSection />
      <Features />
      <TradingPlatformSection />
      <ResourcesSection />
      <GetStartedSection />
    </main>
  );
};

export default LandingPage;
