import { css } from "@emotion/react";

import { CommonEntity } from "core/types";

import { externalLinks } from "@/core/constants/externalLinks";
import LinkButton from "@/core/components/common/LinkButton";
import theme from "@/core/styles/theme";

interface PropTypes extends CommonEntity {
  label?: string;
  href?: string;
}

const RegularTradeButton = ({
  label = "",
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
      {children}
    </LinkButton>
  );
};

const cssStyles = {
  tradeBtn: css`
    display: flex;
    justify-content: center;
    padding: ${theme.spacing.normal};
    background: ${theme.colors.gradients.buttonCTA};
    font-size: ${theme.text.size.body};
    border-radius: ${theme.borderRadius.default};
    width: 100%;
    box-shadow: ${theme.shadow.inset};
  `
};

export default RegularTradeButton;
