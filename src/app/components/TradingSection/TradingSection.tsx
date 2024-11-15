"use client";
/** @jsxImportSource @emotion/react */
import React, { useMemo } from "react";
import styled from "@emotion/styled";
import FeatureItem from "./FeatureItem";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ButtonWithIcon } from "@/app/shared/ButtonWithIcon/ButtonWithIcon";
import { IconBrandGithubFilled } from "@/app/shared/icons/IconBrandGithubFilled";
import { IconHashcloack } from "@/app/shared/icons/IconHashcloack";
import { IconFuel } from "@/app/shared/icons/IconFuel";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
  row-gap: 8px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 48px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: 700;

  @media screen and (max-width: 680px) {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 28px;
  font-weight: 500;

  @media screen and (max-width: 680px) {
    font-weight: 400;
    font-size: 16px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 32px;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    row-gap: 48px;
  }
  @media screen and (max-width: 680px) {
    row-gap: 32px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 688px;
  height: fit-content;
  position: relative;
  @media screen and (max-width: 1024px) {
    max-width: none;
    max-height: 576px;
    overflow: hidden;
  }
  @media screen and (max-width: 680px) {
    max-height: 320px;
    overflow: hidden;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 688px;

  @media screen and (max-width: 1280px) {
    max-width: 518px;
  }

  @media screen and (max-width: 1024px) {
    max-width: none;
  }
`;

const MainImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  @media screen and (max-width: 1024px) {
    max-width: unset;
  }

  @media screen and (max-width: 680px) {
    min-height: 320px;
  }
`;

const InfoBox = styled.div<{ isDark?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${({ isDark }) =>
    isDark ? "rgba(20, 20, 20, 0.6)" : "rgba(255, 255, 255, 0.9)"};
  border: ${({ isDark }) =>
    isDark
      ? "1px solid rgba(255, 255, 255, 1)"
      : "1px solid rgba(219, 211, 255, 1)"};
  border-radius: 8px;
  position: absolute;
  backdrop-filter: blur(30px);
  bottom: 0;
  @media screen and (max-width: 680px) {
    width: 100%;
    padding: 16px;
  }
`;

const FuelLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(219, 211, 255, 1);

  @media screen and (max-width: 1280px) {
    width: 181px;
  }

  @media screen and (max-width: 1024px) {
    height: 40px;
  }

  @media screen and (max-width: 680px) {
    border-right: none;
    width: 169px;
  }
`;

const FuelDescription = styled.p`
  margin-left: 12px;
  font-size: 16px;
  @media screen and (max-width: 680px) {
    display: none;
  }
`;

const TradingFreedomCard = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: auto;
  background: ${({ isDark }) =>
    isDark
      ? "var(--Landing-Gradients-holo-dark, linear-gradient(128.85deg, #6B0D97 0%, #000000 33%, rgba(107, 13, 151, 0.956863) 66%, #000000 100%))"
      : "linear-gradient(129deg, #fac8ff 0%, #c8ffee 33%, #e9ff44 66%, #35ebff 100%)"};
  animation: gradientAnimation 3s infinite alternate;
  border-radius: 20px;
  width: 100%;
  max-width: 624px;
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
  background-size: 200% 200%;

  @media screen and (max-width: 1024px) {
    max-width: none;
  }
`;

const CardContent = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  margin: 4px;
  box-sizing: border-box;
  height: 100%;
  width: calc(100% - 8px);
  gap: 24px;
  background-color: ${({ isDark }) =>
    isDark ? "rgba(23, 23, 23, 1)" : "rgba(255, 255, 255, 1)"};
  border-radius: 16px;
  @media screen and (max-width: 680px) {
    padding: 16px;
    gap: 24px;
  }
`;

const CardHeader = styled.div`
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 54px;
  font-weight: 700;
  text-align: start;
  @media screen and (max-width: 680px) {
    font-size: 32px;
  }
`;

const CardSubtitle = styled.p`
  font-size: 24px;
  @media screen and (max-width: 680px) {
    font-size: 16px;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
  width: 100%;
  > a {
    width: 50%;
  }

  @media screen and (max-width: 680px) {
    flex-direction: column;
    font-size: 16px;
    margin-top: 8px;
    > a {
      width: 100%;
    }
  }
`;

const features = [
  { text: "Permissionless trading" },
  { text: "Superior price discovery" },
  { text: "Maximized capital efficiency" },
  { text: "Precise risk management" },
];

export const TradingSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);
  return (
    <Section>
      <Header>
        <Title>ONCHAIN TRADING IS THE ENDGAME</Title>
        <Subtitle>
          Centralised trading has held crypto back for too long.
          <br />
          Onchain trading gives individuals full control of their assets.
        </Subtitle>
      </Header>
      <Content>
        <ImageWrapper>
          <ImageContainer>
            <MainImage
              loading="lazy"
              src={"/images/trading-freedom.png"}
              alt="Trading platform interface"
              width={928}
              height={576}
            />
          </ImageContainer>
          <InfoBox isDark={isDark}>
            <FuelLogo>
              <IconFuel />
            </FuelLogo>
            <FuelDescription>
              Fuel&apos;s cutting-edge execution layer transforms Ethereum
              rollups, enabling unparalleled scalability, speed, and innovation
            </FuelDescription>
          </InfoBox>
        </ImageWrapper>
        <TradingFreedomCard isDark={isDark}>
          <CardContent isDark={isDark}>
            <CardHeader>
              <CardTitle>Unlock Your Trading Freedom</CardTitle>
            </CardHeader>
            <CardSubtitle>
              Built for professional traders and institutions:
            </CardSubtitle>
            <FeatureList>
              {features.map((feature, index) => (
                <li key={index}>
                  <FeatureItem text={feature.text} />
                </li>
              ))}
            </FeatureList>
            <ButtonContainer>
              <ButtonWithIcon
                LeftIcon={IconBrandGithubFilled}
                buttonText="View code"
                size="large"
                href={"https://github.com/compolabs/"}
              />
              <ButtonWithIcon
                LeftIcon={IconHashcloack}
                buttonText="Audit Report"
                backgroundColor="unset"
                borderColor={isDark ? "white" : "black"}
                size="large"
                href={"https://docs.sprk.fi/security/audits"}
              />
            </ButtonContainer>
          </CardContent>
        </TradingFreedomCard>
      </Content>
    </Section>
  );
};
