"use client";
import React, { useMemo } from "react";
import { FeatureCard, FeatureCardProps } from "./FeatureCard";
import { SecureTrading } from "./SecureTrading";
import { useTheme } from "next-themes";
import {
  IconChartCandle,
  IconCoins,
  IconTerminal2,
  IconCheckupList,
} from "@/shared";
import {
  RedemptionSectionContainer,
  SectionHeader,
  MainTitle,
  Subtitle,
  FeatureCardsContainer,
  AdditionalFeature,
  FeatureContent,
  FeatureTitle,
  FeatureDescription,
  StyledImage,
} from "./RedemptionSection.styles";

const featureCards: FeatureCardProps[] = [
  {
    title: "On-Chain trading with NO LIMITS.",
    buttonText: "Trade Now",
    icon: IconChartCandle,
    imageSrc: "/images/permissionless-v2.png",
    backgroundColor: "rgba(255, 247, 242)",
    backgroundColorDark: "rgba(28, 11, 0)",
    borderColor: "rgba(255, 225, 206, 1)",
    borderColorDark: "rgba(42, 16, 0, 1)",
    buttonColor: "var(--copper-600, #2a1000)",
    buttonColorDark: "rgba(255, 225, 206, 1)",
    href: "https://app.sprk.fi/",
  },
  {
    title: "Earn rewards with Spark incentives.",
    buttonText: "Provide Liquidity",
    icon: IconCoins,
    imageSrc: "/images/incentives-v2.png",
    backgroundColor: "rgba(239, 252, 255, 1)",
    backgroundColorDark: "rgba(0, 22, 26, 1)",
    borderColor: "rgba(191, 242, 252, 1)",
    borderColorDark: "rgba(0, 47, 56, 1)",
    buttonColor: "var(--blue-600, #002f38)",
    buttonColorDark: "rgba(191, 242, 252, 1)",
    href: "https://docs.sprk.fi/provide-liquidity/getting-started-as-a-market-maker",
  },
  {
    title: "Build the Future of DeFi dApps.",
    buttonText: "Build Now",
    icon: IconTerminal2,
    imageSrc: "/images/build-v2.png",
    backgroundColor: "rgba(244, 255, 236, 1)",
    backgroundColorDark: "rgba(10, 22, 0, 1)",
    borderColor: "rgba(196, 255, 196, 1)",
    borderColorDark: "rgba(0, 39, 0, 1)",
    buttonColor: "var(--green-600, #002700)",
    buttonColorDark: "rgba(196, 255, 196, 1)",
    href: "https://docs.sprk.fi/",
  },
  {
    title: "List any token, even meme coins.",
    buttonText: "Coming Soon",
    icon: IconCheckupList,
    imageSrc: "/images/list.png",
    backgroundColor: "rgba(252, 248, 232, 1)",
    backgroundColorDark: "rgba(35, 28, 1, 1)",
    borderColor: "rgba(255, 241, 162, 1)",
    borderColorDark: "rgba(58, 49, 1, 1)",
    buttonColor: "var(--yellow-600, #3a3101)",
    buttonColorDark: "rgba(255, 241, 162, 1)",
    href: "/",
  },
];

const additionalFeatures = [
  {
    title: (
      <>
        Composable
        <br /> Ecosystem.
      </>
    ),
    description: "Shared liquidity with other protocols",
    imageSrc: "/images/composable.png",
  },
  {
    title: (
      <>
        Bulletproof
        <br /> Infrastructure.
      </>
    ),
    description: "Top indexers, market makers, and Spark data relayers",
    imageSrc: "/images/bulletproof.png",
  },
];

export const RedemptionSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);
  return (
    <RedemptionSectionContainer>
      <SectionHeader>
        <MainTitle>THE REDEMPTION IS HERE</MainTitle>
        <Subtitle>Get Started Now</Subtitle>
      </SectionHeader>
      <FeatureCardsContainer>
        {featureCards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
        {additionalFeatures.map((feature, index) => (
          <AdditionalFeature key={index} isDark={isDark}>
            <StyledImage
              src={feature.imageSrc}
              alt=""
              width={260}
              height={260}
            />
            <FeatureContent>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureContent>
          </AdditionalFeature>
        ))}
      </FeatureCardsContainer>
      <SecureTrading />
    </RedemptionSectionContainer>
  );
};
