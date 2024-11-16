"use client";
import React, { useMemo } from "react";
import {
  SecureTradingContainer,
  TradingContent,
  TradingVisual,
  TradingInfo,
  TradingTitle,
  TradingDescription,
  ActionArea,
  MobileOptimized,
  DekstopImage,
  MobileImage,
} from "./SecureTrading.styles";
import { useTheme } from "next-themes";
import { TradeButton } from "@/app/shared/TradeButton/TradeButton";
import { IconApple } from "@/app/shared/icons/IconApple";
import { IconAndroid } from "@/app/shared/icons/IconAndroid";

export const SecureTrading: React.FC = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);

  return (
    <SecureTradingContainer isDark={isDark}>
      <TradingContent isDark={isDark}>
        <TradingVisual isDark={isDark}>
          <DekstopImage
            src={`/images/mobile-${isDark ? "dark" : "light"}.png`}
            alt=""
            width={293}
            height={275}
          />
          <MobileImage
            src={`/images/mobile-${isDark ? "dark" : "light"}-mob.png`}
            alt=""
            width={220}
            height={275}
          />
        </TradingVisual>
        <TradingInfo>
          <TradingTitle>Self Custody and Secure Trading</TradingTitle>
          <TradingDescription>
            Trade securely with full control over your assets. No compromises
          </TradingDescription>
          <ActionArea>
            <TradeButton buttonText="Trade Now" size="small" />
            <MobileOptimized isDark={isDark}>
              <IconApple />
              <IconAndroid />
              <span>Mobile optimized</span>
            </MobileOptimized>
          </ActionArea>
        </TradingInfo>
      </TradingContent>
    </SecureTradingContainer>
  );
};
