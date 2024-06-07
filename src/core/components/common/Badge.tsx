import { css } from '@emotion/react';

import { Styles } from "core/types";

import theme from "@/core/styles/theme";

interface PropTypes {
  text: string;
  styles?: Styles;
}

const Badge = ({ text, styles }: PropTypes) => {
  return (
    <span css={[cssStyles.badge, styles]}>{text}</span>
  );
};

const cssStyles = {
  badge: css`
    display: inline-block;
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    color: ${theme.colors.white.default};
    font-size: ${theme.text.size.tiny};
    line-height: 1.5;
    border-radius: ${theme.borderRadius.large};
    border: 1px solid transparent;
    background: ${theme.colors.black[22]};
  `,
};

export default Badge;
