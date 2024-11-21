"use client";
import { useTheme } from "next-themes";
import {
  HeaderWrapper,
  Container,
  LeftSection,
  Nav,
  NavLink,
  RightSection,
  BurgerButton,
  NavItem,
  NavButton,
  Backdrop,
} from "./Header.styles";
import { ThemeToggle } from "./ThemeToggle";
import { useMemo, useState } from "react";
import Link from "next/link";
import { TradeButton } from "@/app/shared/TradeButton/TradeButton";
import MobileMenu from "./MobileMenu";
import DesktopSubmenu from "./DesktopSubmenu";
import {
  SparkLogotype,
  IconSpark,
  IconTransitionTop,
  IconArticle,
  IconInfinity,
  IconRouteSquare,
  IconBook2,
  IconBrandGithubFilled,
  IconFireHydrant,
  IconMenu2,
} from "@/app/shared/icons";
import { MIXPANEL_EVENTS, trackEvent } from "@/app/utils/mixPanel";

const navItems = {
  learn: {
    label: "Learn",
    items: [
      {
        icon: <IconSpark />,
        text: "What is Spark?",
        href: "https://docs.sprk.fi/more/spark-architecture-overview",
        onClick: () => {
          trackEvent(MIXPANEL_EVENTS.HEADER_CLICK_WHAT_IS_SPARK);
        },
      },
      {
        icon: <IconTransitionTop />,
        text: "Trading 101",
        href: "/",
        badge: "soon",
      },
      {
        icon: <IconArticle />,
        text: "Blog",
        href: "https://mirror.xyz/sprkfi.eth",
        onClick: () => {
          trackEvent(MIXPANEL_EVENTS.HEADER_CLICK_BLOG);
        },
      },
    ],
  },
  trade: {
    label: "Trade",
    items: [
      {
        icon: <IconTransitionTop />,
        text: "Limit",
        href: "https://app.sprk.fi/#/spot/BTC-USDC",
        onClick: () => {
          trackEvent(MIXPANEL_EVENTS.HEADER_CLICK_LIMIT);
        },
      },
      {
        icon: <IconInfinity />,
        text: "Perpetuals",
        href: "/",
        badge: "soon",
      },
      {
        icon: <IconRouteSquare />,
        text: "Swap",
        href: "/",
        badge: "soon",
      },
    ],
  },
  build: {
    label: "Build",
    items: [
      {
        icon: <IconBook2 />,
        text: "Docs",
        href: "https://docs.sprk.fi/",
        onClick: () => {
          trackEvent(MIXPANEL_EVENTS.HEADER_CLICK_DOCS);
        },
      },
      {
        icon: <IconBrandGithubFilled />,
        text: "GitHub",
        href: "https://github.com/compolabs/",
        onClick: () => {
          trackEvent(MIXPANEL_EVENTS.HEADER_CLICK_GITHUB);
        },
      },
      {
        icon: <IconFireHydrant />,
        text: "Faucet",
        href: "https://app.sprk.fi/#/faucet",
        onClick: () => {
          trackEvent(MIXPANEL_EVENTS.HEADER_CLICK_FAUCET);
        },
      },
    ],
  },
};

export const Header = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleBurgerClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMouseEnter = (menuName: string) => {
    setActiveSubmenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <HeaderWrapper isDark={isDark}>
      <Backdrop isDark={isDark} />
      <Container isDark={isDark}>
        <LeftSection size="small">
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", color: "inherit" }}
          >
            <SparkLogotype width="110" height="33" />
          </Link>

          <Nav>
            {Object.entries(navItems).map(([key, { label, items }]) => (
              <NavItem
                key={key}
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <NavButton
                  isActive={activeSubmenu === key}
                  onClick={() => handleMouseEnter(key)}
                >
                  {label}
                </NavButton>
                <DesktopSubmenu
                  isDark={isDark}
                  isOpen={activeSubmenu === key}
                  items={items}
                />
              </NavItem>
            ))}
            <NavLink
              href="https://docs.sprk.fi/provide-liquidity/getting-started-as-a-market-maker/market-maker-incentive-program"
              target="_blank"
              onClick={() => {
                trackEvent(MIXPANEL_EVENTS.HEADER_CLICK_LIQUIDITY);
              }}
            >
              Liquidity
            </NavLink>
          </Nav>
        </LeftSection>

        <RightSection>
          <div className="theme-toggle">
            <ThemeToggle />
          </div>
          <TradeButton
            buttonText="Trade Now"
            size="small"
            onClick={() => {
              trackEvent(MIXPANEL_EVENTS.HEADER_CLICK_TRADE_NOW);
            }}
          />
          <BurgerButton
            className="burger-button"
            onClick={handleBurgerClick}
            isDark={isDark}
            type="button"
          >
            <IconMenu2 />
          </BurgerButton>
        </RightSection>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </Container>
    </HeaderWrapper>
  );
};
