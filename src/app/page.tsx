"use client";

import styled from "@emotion/styled";
import {
  Header,
  TradeAsset,
  TradingSection,
  RedemptionSection,
  BackedBest,
  Subscriptions,
  Footer,
} from "./components";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CookieNotification } from "./components/CookieNotification/CookieNotification";

const RootWrapper = styled.div`
  width: 100%;
`;

const Main = styled.div`
  max-width: 1440px;
  width: 100%;
  padding-right: 50px;
  padding-left: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 120px;

  @media screen and (max-width: 1280px) {
    max-width: 1280px;
    padding-right: 48px;
    padding-left: 48px;
    gap: 80px;
  }

  @media screen and (max-width: 680px) {
    max-width: 680px;
    padding-right: 8px;
    padding-left: 8px;
    gap: 64px;
  }
`;

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <RootWrapper>
      <Header />
      <Main>
        <TradeAsset />
        <TradingSection />
        <RedemptionSection />
      </Main>
      <BackedBest />
      <Main>
        <Subscriptions />
      </Main>
      <CookieNotification />
      <Footer />
    </RootWrapper>
  );
}
