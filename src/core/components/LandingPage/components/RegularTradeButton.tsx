import { css } from "@emotion/react";

import { CommonEntity } from "core/types";

import { externalLinks } from "@/core/constants/externalLinks";
import LinkButton from "@/core/components/common/LinkButton";
import theme from "@/core/styles/theme";

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
    height: 56px;
    color: white;
    box-shadow: ${theme.shadow.inset};
 
    ${theme.media.tabletBreakPoint}{
      max
    }

    &:hover {
      background: ${theme.colors.purple.hover};
    }

    &:active {
      background: ${theme.colors.purple.focus};
    }

    &:focus {
      border: 0.1rem solid ${theme.colors.white.default}18;
      padding: calc(${theme.spacing.normal} - 0.1rem);
    }
  `,
};

export default RegularTradeButton;
