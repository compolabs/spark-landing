import React from "react";

import useMainFont from "@/core/hooks/useMainFont";

import { WhySparkSection } from "./WhySparkSection";
import Features from "./Features/Features";
import InterfaceSection from "./InterfaceSection";
import { TradingPlatformSection } from "./TradingPlatformSection";
import ResourcesSection from "./ResourcesSection";
import GetStartedSection from "./GetStartedSection";
import Background from "./Background";

const LandingPage = () => {
  const syne = useMainFont();
  return (
    <main className={syne}>
      <Background />
      <div style={{ paddingTop: "300px"}}></div>
      <WhySparkSection />
      <InterfaceSection />
      <Features />
      <TradingPlatformSection />
      <ResourcesSection />
      <GetStartedSection />
    </main>
  );
};

export default LandingPage;
