"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  IconHashcloack,
  IconShieldHalfFilled,
  ButtonWithIcon,
  TIconProps,
  Arrow,
} from "@/shared";
import { socialList } from "@/helpers";
import { useTheme } from "next-themes";
import {
  Container,
  AuditBlock,
  Title,
  ButtonWrapper,
  List,
  Item,
  IconWrapper,
  SocialTitle,
  IconArrow,
  MainIcon,
} from "./Subscriptions.styles";

export const Subscriptions: React.FC = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 680);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <Container>
      <AuditBlock isDark={isDark}>
        <div>
          <IconHashcloack width={60} height={60} />
          <Title>Fully audited by privacy first HashCloak lab</Title>
        </div>
        <ButtonWrapper>
          <ButtonWithIcon
            buttonText="View Audit"
            LeftIcon={IconShieldHalfFilled}
            backgroundColor={isDark ? "#171717" : "#FFFFFF"}
            href={"https://docs.sprk.fi/security/audits"}
          />
        </ButtonWrapper>
      </AuditBlock>
      <List>
        {socialList.map(({ title, icon, href }, index) => {
          const SocialComponent: React.FC<TIconProps> = icon;
          return (
            <Item
              href={href}
              key={title}
              isDark={isDark}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              target="_blank"
            >
              <IconArrow
                isDark={isDark}
                style={{
                  width:
                    hoveredIndex === index ? "98%" : isMobile ? "39px" : "52px",
                }}
              >
                <Arrow color={isDark ? "#ffffff" : "#1C012A"} />
              </IconArrow>
              <IconWrapper isDark={isDark} id={`icon${index}`}>
                <MainIcon isDark={isDark}>
                  <SocialComponent
                    isDark={index === 2 ? isDark : undefined}
                    color={isDark ? "#ffffff" : "#1C012A"}
                  />
                </MainIcon>
              </IconWrapper>
              <SocialTitle isDark={isDark}>{title}</SocialTitle>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};
