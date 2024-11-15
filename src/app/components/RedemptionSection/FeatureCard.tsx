"use client";
import React, { useMemo } from "react";
import { useTheme } from "next-themes";
import {
  ActionButton,
  BtnsContentWrapper,
  CardContent,
  CardTitle,
  DisabledBtnsContentWrapper,
  FeatureCardContainer,
  FeatureImage,
} from "./FeatureCard.styles";
import { IconArrowRightStyled } from "@/app/shared/TradeButton/TradeButton.styles";

export interface FeatureCardProps {
  title: string;
  buttonText: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  imageSrc: string;
  backgroundColor: string;
  backgroundColorDark: string;
  borderColor: string;
  borderColorDark: string;
  buttonColor: string;
  buttonColorDark: string;
  href: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  buttonText,
  icon: Icon,
  imageSrc,
  backgroundColor,
  backgroundColorDark,
  borderColor,
  borderColorDark,
  buttonColor,
  buttonColorDark,
  href,
}) => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);
  const isDisabled = !href || href === "/";

  return (
    <FeatureCardContainer
      isDark={isDark}
      backgroundColor={backgroundColor}
      backgroundColorDark={backgroundColorDark}
      borderColor={borderColor}
      borderColorDark={borderColorDark}
      isDisabled={isDisabled}
    >
      <FeatureImage src={imageSrc} alt="" />
      <CardContent>
        <ActionButton
          isDark={isDark}
          buttonColor={buttonColor}
          buttonColorDark={buttonColorDark}
          isHome={isDisabled}
        >
          {isDisabled ? (
            <DisabledBtnsContentWrapper>
              <Icon />
              <span>{buttonText}</span>
            </DisabledBtnsContentWrapper>
          ) : (
            <BtnsContentWrapper
              id="btns-content-wrapper"
              href={href}
              target="_blank"
            >
              <BtnsContentWrapper href={href} target="_blank">
                <Icon />
                <span>{buttonText}</span>
                <IconArrowRightStyled />
              </BtnsContentWrapper>
            </BtnsContentWrapper>
          )}
        </ActionButton>
        <CardTitle>{title}</CardTitle>
      </CardContent>
    </FeatureCardContainer>
  );
};
