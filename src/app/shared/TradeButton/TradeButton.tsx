"use client";
import React, { useMemo } from "react";
import { useTheme } from "next-themes";
import {
  TradeButtonContainer,
  BtnsContentWrapper,
  IconArrowRightStyled,
} from "./TradeButton.styles";
import { IconSparkSmallLogo } from "../icons/IconSparkSmallLogo";
interface TradeButtonProps {
  buttonText: string;
  size?: "large" | "small";
}

export const TradeButton: React.FC<TradeButtonProps> = ({
  buttonText,
  size = "large",
}) => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme !== "light", [theme]);

  return (
    <TradeButtonContainer
      isDark={isDark}
      size={size}
      href="https://app.sprk.fi/"
      target="_blank"
    >
      <BtnsContentWrapper id="btns-content-wrapper">
        <BtnsContentWrapper>
          <IconSparkSmallLogo />
          <span>{buttonText}</span>
          <IconArrowRightStyled />
        </BtnsContentWrapper>
      </BtnsContentWrapper>
    </TradeButtonContainer>
  );
};
