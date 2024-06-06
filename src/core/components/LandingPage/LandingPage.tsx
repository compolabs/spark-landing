import React, { Fragment } from "react";
import HeroSection from "./HeroSection";
import Features from "./Features/Features";
import InterfaceSection from "./InterfaceSection";
import TradingPlatformSection from "./TradingPlatformSection";
import ResourcesSection from "./ResourcesSection";
import GetStartedSection from "./GetStartedSection";
import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"] });

const LandingPage = () => {
  return (
    <main className={`${syne.className}`}>
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
