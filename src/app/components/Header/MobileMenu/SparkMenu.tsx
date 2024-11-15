"use client";
import React, { useState, useEffect } from "react";
import MenuButton from "./MenuButton";
import MobileMenuButton from "./MobileMenuButton";
import CallToAction from "./CallToAction";
import { ThemeToggle } from "../ThemeToggle";
import {
  Container,
  MenuSection,
  CallToActionSection,
  FooterSection,
  RootContainer,
  Social,
  MenuItemContainer,
} from "./styles";
import SubMenu from "./SubMenu";
import { IconSpark, TIconProps } from "@/app/shared/icons";
import { IconTransitionTop } from "@/app/shared/icons";
import { IconCoins } from "@/app/shared/icons";
import { IconArticle } from "@/app/shared/icons";
import { IconInfinity } from "@/app/shared/icons";
import { IconRouteSquare } from "@/app/shared/icons";
import { IconBook2 } from "@/app/shared/icons";
import { IconBrandGithubFilled } from "@/app/shared/icons";
import { IconFireHydrant } from "@/app/shared/icons";
import { SocialItem, SocialItemWrapper } from "../../Footer/Footer.styles";
import { socialListFooter } from "@/app/helpers";

interface SparkMenuProps {
  isDark: boolean;
  isOpen?: boolean;
}

interface MenuItem {
  icon: React.ReactNode;
  text: string;
  href: string;
}

interface SubMenuItem {
  text: string;
  submenu?: Array<{
    icon: React.ReactNode;
    text: string;
    badge?: string;
    href: string;
  }>;
}

const menuItems: MenuItem[] = [
  {
    icon: <IconSpark width={18} height={18} />,
    text: "What is Spark?",
    href: "https://docs.sprk.fi/more/spark-architecture-overview",
  },
  {
    icon: <IconTransitionTop width={18} height={18} />,
    text: "Limit Trading",
    href: "https://app.sprk.fi/#/spot/BTC-USDC",
  },
  {
    icon: <IconCoins width={18} height={18} />,
    text: "Provide Liquidity",
    href: "https://docs.sprk.fi/provide-liquidity/getting-started-as-a-market-maker/market-maker-incentive-program",
  },
];

const mobileMenuItems: SubMenuItem[] = [
  {
    text: "Learn",
    submenu: [
      {
        icon: <IconSpark width={18} height={18} />,
        text: "What is Spark?",
        href: "https://docs.sprk.fi/more/spark-architecture-overview",
      },
      {
        icon: <IconTransitionTop width={18} height={18} />,
        text: "Trading 101",
        badge: "soon",
        href: "/",
      },
      {
        icon: <IconArticle width={18} height={18} />,
        text: "Blog",
        href: "https://mirror.xyz/sprkfi.eth",
      },
    ],
  },
  {
    text: "Trade",
    submenu: [
      {
        icon: <IconTransitionTop width={18} height={18} />,
        text: "Limit",
        href: "https://app.sprk.fi/#/spot/BTC-USDC",
      },
      {
        icon: <IconInfinity width={18} height={18} />,
        text: "Perpetuals",
        badge: "soon",
        href: "/",
      },
      {
        icon: <IconRouteSquare width={18} height={18} />,
        text: "Swap",
        badge: "soon",
        href: "/",
      },
    ],
  },
  {
    text: "Build",
    submenu: [
      {
        icon: <IconBook2 width={18} height={18} />,
        text: "Docs",
        href: "https://docs.sprk.fi/",
      },
      {
        icon: <IconBrandGithubFilled width={18} height={18} />,
        text: "GitHub",
        href: "https://github.com/compolabs/",
      },
      {
        icon: <IconFireHydrant width={18} height={18} />,
        text: "Faucet",
        href: "https://app.sprk.fi/#/faucet",
      },
    ],
  },
];

const SparkMenu: React.FC<SparkMenuProps> = ({ isDark, isOpen }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setActiveSubmenu(null);
    }
  }, [isOpen]);

  const handleMenuClick = (menuName: string) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  return (
    <RootContainer isDark={isDark}>
      <Container isDark={isDark}>
        <MenuSection isDark={isDark}>
          {menuItems.map((item, index) => (
            <MenuButton
              key={index}
              icon={item.icon}
              text={item.text}
              isDark={isDark}
              href={item.href}
            />
          ))}
          {mobileMenuItems.map((item, index) => (
            <MenuItemContainer key={index}>
              <MobileMenuButton
                text={item.text}
                isDark={isDark}
                onClick={() => handleMenuClick(item.text)}
                isOpen={activeSubmenu === item.text}
              />
              {item.submenu && (
                <SubMenu
                  isDark={isDark}
                  isOpen={activeSubmenu === item.text}
                  items={item.submenu}
                />
              )}
            </MenuItemContainer>
          ))}
        </MenuSection>
        <CallToActionSection>
          <CallToAction
            icon={<IconSpark width={36} height={36} />}
            title="Spark is Mobile Optimized"
            subtitle="Start trading now"
          />
        </CallToActionSection>
        <FooterSection isDark={false}>
          <Social>
            {socialListFooter.map(({ icon, title, href }, index) => {
              const SocialComponent: React.FC<TIconProps> = icon;
              return (
                <SocialItemWrapper
                  href={href}
                  target="_blank"
                  key={title}
                  isDark={isDark}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <SocialItem
                    isDark={isDark}
                    isHovered={hoveredIndex === index}
                  >
                    <SocialComponent
                      isHovered={
                        index === 2 && !isDark ? false : hoveredIndex === index
                      }
                      color={
                        index === 2
                          ? "#1C012A"
                          : hoveredIndex === index
                            ? isDark
                              ? "#FFFFFF"
                              : "#1C012A"
                            : "#1C012A"
                      }
                      isDark={isDark}
                    />
                  </SocialItem>
                </SocialItemWrapper>
              );
            })}
          </Social>
          <ThemeToggle />
        </FooterSection>
      </Container>
    </RootContainer>
  );
};

export default SparkMenu;
