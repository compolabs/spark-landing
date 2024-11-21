"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  TradeAssetContainer,
  ContentWrapper,
  Subtitle,
  ImagesContainer,
  Description,
  Title2,
  AnimatedContainer,
  AnimatedTitleWrapper,
  Title,
  StaticTitle,
  Wrapper,
  AnimatedWrapper,
} from "@/app/components/TradeAsset/TradeAsset.styled";
import { TradeButton } from "@/app/shared/TradeButton/TradeButton";
import { useMemo, useState, useEffect } from "react";
import { MIXPANEL_EVENTS, trackEvent } from "@/app/utils/mixPanel";

export const TradeAsset = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setResetKey((prev) => prev + 1);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <TradeAssetContainer isDark={isDark}>
      <ContentWrapper>
        <Description isDark={isDark}>The Onchain Exchange</Description>
        <Wrapper>
          <AnimatedWrapper key={`${resetKey}-${isDark ? "dark" : "light"}`}>
            <AnimatedContainer>
              <AnimatedTitleWrapper>
                <Title>TRADE</Title>
                <Title>LIST</Title>
              </AnimatedTitleWrapper>
            </AnimatedContainer>
            <StaticTitle>ANY ASSET</StaticTitle>
          </AnimatedWrapper>
          <Title2>ONCHAIN</Title2>
        </Wrapper>
        <Subtitle>
          The first onchain orderbook exchange powered by the high performance
          FuelVM
        </Subtitle>
        <TradeButton
          buttonText="Trade Now"
          onClick={() => {
            trackEvent(MIXPANEL_EVENTS.HERO_CLICK_TRADE_NOW);
          }}
        />
      </ContentWrapper>
      <ImagesContainer>
        <Image
          src={`/images/order-book${isDark ? "" : "-light"}.png`}
          alt={""}
          width={276}
          height={556}
        />
        <Image
          src={`/images/order-creation${isDark ? "" : "-light"}.png`}
          alt={""}
          width={276}
          height={556}
        />
      </ImagesContainer>
    </TradeAssetContainer>
  );
};
