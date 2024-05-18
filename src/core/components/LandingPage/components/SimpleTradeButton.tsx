import React from "react";
import LinkButton from "../../common/LinkButton";
import theme from "@/core/styles/theme";
import { css } from "@emotion/react";
import { externalLinks } from "@/core/constants/externalLinks";

const SimpleTradeButton = ({ title = "Trade" }: { title?: string }) => {
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
  header: css`
    position: absolute;
    top: 20px;
    width: 100%;
    transition: top 0.25s linear;
  `,
  headerWrapper: css`
    display: flex;
    justify-content: space-between;
    // position: absolute;
    // top:20px;
    // transition: top .25s linear;
    padding: 0 40px 0;
  `,
  nav: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  navLink: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    background: #000;
  `,
  tradeButton: css`
    cursor: pointer;
      width: 107px;
      height: 38px;
      border: none;
      padding: 8px;
      border-radius: 12px;
      background: #ffffff12;
      color: white;
      font-size: 16px;
      backdrop-filter: blur(1px);
  
      &:hover{
        background: #ffffff24;
      },
      &:active{
        background: #ffffff36;
      },
      &:focus{
        border: .1rem solid ${theme.colors.white.default}18;
      },
    `,
  tradeButtonLink: css`
    cursor: pointer;
    font-size: ${theme.text.size.tiny};
    font-weight: ${theme.text.weight.bold};
    line-height: ${theme.text.size.tiny};

    ${theme.media.desktop} {
    }
    ${theme.media.tablet} {
    }
    ${theme.media.mobile} {
    }
  `,
};
export default SimpleTradeButton;
