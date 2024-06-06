import { css } from "@emotion/react";

import { StyledProps } from "core/types";

import theme from "@/core/styles/theme";


type PropTypes = StyledProps & {
  text: string;
  highlight: string;
  color: string;
  isGradient?: boolean;
};

const TextHighlighter = ({
  text,
  highlight,
  color,
  isGradient = false,
  styles,
}: PropTypes) => {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <span css={[cssStyles.textWrapper, styles]}>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} css={cssStyles.highlight(isGradient, color)}>
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};

const cssStyles = {
  textWrapper: css`
    color: ${theme.colors.grey.light};
    font-size: ${theme.text.size.tiny};
  `,
  highlight: (isGradient: boolean, color: string) => css`
    ${isGradient
      ? `background: ${color}; -webkit-background-clip: text; -webkit-text-fill-color: transparent;`
      : `color: ${color}`}
  `,
};

export default TextHighlighter;
