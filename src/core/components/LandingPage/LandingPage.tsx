import React from "react";

import useMainFont from "@/core/hooks/useMainFont";

import { WhySparkSection } from "./WhySparkSection";
import Features from "./Features/Features";
import { TradingPlatformSection } from "./TradingPlatformSection";
import { ResourcesSection } from "./ResourcesSection";
import { PartnersSection } from "./PartnersSection";
import GetStartedSection from "./GetStartedSection";
import Background from "./Background";
import GateSection from "./GateSection";
import CookiesPolicy from "@/core/components/LandingPage/components/CookiesPolicy";

const LandingPage = () => {
  const syne = useMainFont();
  return (
    <main className={syne}>
      <Background />
      <GateSection />
      <WhySparkSection />
      <Features />
      <TradingPlatformSection />
      <PartnersSection />
      <ResourcesSection />
      <GetStartedSection />
      <CookiesPolicy />
    </main>
  );
};

export default LandingPage;
