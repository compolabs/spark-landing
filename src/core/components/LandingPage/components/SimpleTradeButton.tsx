import React from "react";
import { css } from "@emotion/react";

import theme from "@/core/styles/theme";
import { externalLinks } from "@/core/constants/externalLinks";

import LinkButton from "../../common/LinkButton";

type PropsType = { title: string };

const SimpleTradeButton = ({ title }: PropsType) => {
  return (
    <LinkButton
      type="external"
      styles={cssStyles.tradeButtonLink}
      data={{ href: externalLinks.tradeApp, label: null }}
    >
      <button css={cssStyles.tradeButton}>{title}</button>
    </LinkButton>
  );
};

const cssStyles = {
  tradeButton: css`
    cursor: pointer;
    width: 100px;
    height: 36px;
    border: none;
    padding: ${theme.spacing.default};
    margin-right: ${theme.spacing.medium};
    border-radius: ${theme.borderRadius.default};
    background: ${theme.colors.white.default}12;
    color: ${theme.colors.white.default};
    font-size: ${theme.spacing.medium};
    backdrop-filter: blur(${theme.spacing.small});

    &:hover {
      background: ${theme.colors.white.default}24;
    }

    &:active {
      background: ${theme.colors.white.default}36;
    }

    &:focus {
      border: 0.1rem solid ${theme.colors.white.default}18;
    }

    ${theme.media.tabletBreakPoint} {
      height: 40px;
      width: 120px;
      margin-right: 0;
    }
  `,
  tradeButtonLink: css`
    cursor: pointer;
    font-size: ${theme.text.size.tiny};
    font-weight: ${theme.text.weight.bold};
    line-height: ${theme.text.size.tiny};
  `,
};
export default SimpleTradeButton;
