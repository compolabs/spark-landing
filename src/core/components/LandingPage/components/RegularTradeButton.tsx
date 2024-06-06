import { css } from "@emotion/react";

import { StyledProps } from "core/types";

import { externalLinks } from "@/core/constants/externalLinks";
import LinkButton from "@/core/components/common/LinkButton";
import theme from "@/core/styles/theme";

type PropTypes = StyledProps & {
  label: string;
};

const RegularTradeButton = ({ label, styles }: PropTypes) => {
  return (
    <LinkButton
      type="external"
      data={{
        label,
        href: externalLinks.tradeApp,
      }}
      styles={[cssStyles.tradeBtn, styles]}
    />
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
