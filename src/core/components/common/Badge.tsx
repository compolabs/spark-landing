import { css } from "@emotion/react";

import { StyledProps, Styles } from "core/types";

import theme from "@/core/styles/theme";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

type PropTypes = StyledProps & {
  content: string;
  bgColor?: string;
  borderStyles?: Styles;
}

const Badge = ({ content, bgColor = theme.colors.grey.dark, borderStyles , styles }: PropTypes) => {
  return (
    <span css={[cssStyles.borderWrap, borderStyles]}>
      <span css={[cssStyles.wrapper(bgColor), styles]}>
        {content}
      </span>
    </span>
  );
};

const cssStyles = {
  borderWrap: css`
    display: inline-block;
    position: relative;
    background: transparent;
    border-radius: ${theme.borderRadius.large};
    // padding: ${convertPxToRem(1)};
  `,
  wrapper: (bgColor: string) => css`
    border-radius: ${theme.borderRadius.large};
    display: inline-block;
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    text-align: center;
    color: ${theme.colors.white.default};
    background: ${bgColor};
    line-height: 1.2;
  `,
};

export default Badge;
