"use client";
import { useTheme } from "next-themes";
import { useMemo, useState } from "react";
import Link from "next/link";
import { socialListFooter } from "@/helpers";
import { TIconProps } from "@/shared";
import {
  FooterContainer,
  Wrapper,
  Info,
  List,
  ListItem,
  Social,
  SocialItem,
  Texts,
  SocialItemWrapper,
} from "./Footer.styles";
import { SparkLogotype } from "@/app/shared/icons/SparkLogotype";
import { MIXPANEL_EVENTS, trackEvent } from "@/app/utils/mixPanel";

export const Footer = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <FooterContainer isDark={isDark}>
      <Wrapper isDark={isDark}>
        <Info>
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", color: "inherit" }}
          >
            <SparkLogotype width="110" height="33" />
          </Link>
          <List>
            <ListItem
              href="https://docs.sprk.fi/"
              isDark={isDark}
              target="_blank"
              onClick={() => {
                trackEvent(MIXPANEL_EVENTS.FOOTER_CLICK_DOCS);
              }}
            >
              Docs
            </ListItem>
            <ListItem
              href="https://t.co/EfXHTEhXHc"
              isDark={isDark}
              target="_blank"
              onClick={() => {
                trackEvent(MIXPANEL_EVENTS.FOOTER_CLICK_SUPPORT);
              }}
            >
              Support
            </ListItem>
            <ListItem
              href="https://compo-labs.notion.site/93d1f8917cb64f88a222fe24e0df8a9e?v=503fafab97464f049e79bc66ca09afa9"
              isDark={isDark}
              target="_blank"
              onClick={() => {
                trackEvent(MIXPANEL_EVENTS.FOOTER_CLICK_CAREERS);
              }}
            >
              Careers
            </ListItem>
          </List>
          <Social>
            {socialListFooter.map(({ icon, title, href, event }, index) => {
              const SocialComponent: React.FC<TIconProps> = icon;
              return (
                <SocialItemWrapper
                  href={href}
                  key={title}
                  isDark={isDark}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  target="_blank"
                  onClick={() => {
                    trackEvent(event);
                  }}
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
        </Info>
        <Texts>
          <p>© 2024 - Composability Labs</p>
          <Link
            href="https://drive.google.com/file/d/1VEWD0WIO1BqnFoP6O9sa2ILRKX_pvFbv/view"
            target="_blank"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Terms of Service
          </Link>
        </Texts>
      </Wrapper>
    </FooterContainer>
  );
};
