import { css } from "@emotion/react";

import { CommonEntity } from "core/types";

import { externalLinks } from "@/core/constants/externalLinks";
import LinkButton from "@/core/components/common/LinkButton";
import theme from "@/core/styles/theme";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

interface PropTypes extends CommonEntity {
  label?: string | null;
  href?: string;
}

const RegularTradeButton = ({
  label = null,
  href = externalLinks.tradeApp,
  styles,
  children,
}: PropTypes) => {
  return (
    <LinkButton
      type="external"
      data={{
        label,
        href,
      }}
      styles={[cssStyles.tradeBtn, styles]}
    >
      {label ?? <button css={[cssStyles.tradeBtn, styles]}> {children}</button>}
    </LinkButton>
  );
};

const cssStyles = {
  tradeBtn: css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.gradients.buttonCTA};
    font-size: ${theme.text.size.body};
    border-radius: ${theme.borderRadius.default};
    border: none;
    width: 100%;
    height: ${convertPxToRem(56)};
    color: white;
    cursor: pointer;
   
 
    ${theme.media.tabletBreakPoint}{
      max
    }

    &:hover {
      background: ${theme.colors.purple.hover};
    }

    &:active {
      background: ${theme.colors.purple.focus};
      box-shadow: ${theme.shadow.inset};
    }

    &:focus:not(:active){
      outline: none;
      border: 0.1rem solid ${theme.colors.white.default}18;
      padding: calc(${theme.spacing.normal} - 0.1rem);
    }
  `,
};

export default RegularTradeButton;
