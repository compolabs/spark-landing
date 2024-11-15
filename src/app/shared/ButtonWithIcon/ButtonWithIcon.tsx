"use client";
import React, { useMemo } from "react";
import { useTheme } from "next-themes";
import {
  TradeButtonContainer,
  BtnsContentWrapper,
  IconArrowRightStyled,
} from "./ButtonWithIcon.styles";

interface ButtonWithIconProps {
  buttonText: string;
  size?: "large" | "small";
  LeftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  backgroundColor?: string;
  borderColor?: string;
  width?: string;
  href: string;
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  buttonText,
  size = "large",
  LeftIcon,
  backgroundColor,
  borderColor,
  width,
  href,
}) => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);

  return (
    <TradeButtonContainer
      isDark={isDark}
      size={size}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      width={width}
      href={href}
      target="_blank"
    >
      <BtnsContentWrapper id="btns-content-wrapper">
        <BtnsContentWrapper>
          {LeftIcon && <LeftIcon />}
          <span>{buttonText}</span>
          <IconArrowRightStyled />
        </BtnsContentWrapper>
      </BtnsContentWrapper>
    </TradeButtonContainer>
  );
};
