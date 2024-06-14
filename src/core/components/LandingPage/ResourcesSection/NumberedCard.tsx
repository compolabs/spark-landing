import { css } from "@emotion/react";

import { CommonEntity } from "core/types";

import TextHighlighter from "@/core/components/common/TextHighlighter";
import theme from "@/core/styles/theme";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

interface PropTypes extends CommonEntity {
  number: number;
  title: string;
  paragraph: {
    text: string;
    highlight: string;
  };
}

const NumberedCard = ({
  number,
  title,
  paragraph,
  children,
  styles,
}: PropTypes) => {
  return (
    <article css={[cssStyles.card, styles]}>
      <span css={cssStyles.cardNumber}>{number}</span>

      <h4 css={cssStyles.title}>{title}</h4>

      <TextHighlighter
        text={paragraph.text}
        highlight={paragraph.highlight}
        color={theme.colors.gradients.text}
        styles={cssStyles.paragraph}
        isGradient
      />

      {children && children}
    </article>
  );
};

const cssStyles = {
  card: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
  cardNumber: css`
    margin-bottom: ${theme.spacing.custom[40]};
    font-size: ${theme.text.size.medium};
    color: ${theme.colors.grey.medium};
    border: ${convertPxToRem(1)} solid ${theme.colors.grey[33]};
    border-radius: 50%;
    width: ${convertPxToRem(35)};
    height: ${convertPxToRem(35)};
  `,
  title: css`
    margin-bottom: ${theme.spacing.normal};
    color: ${theme.colors.white.default};
    font-size: ${theme.text.size.tiny};
    font-weight: ${theme.text.weight.bold};

    ${theme.media.tabletLandscape} {
      margin-bottom: ${theme.spacing.medium};
    }
  `,
  paragraph: css`
    margin-bottom: ${theme.spacing.custom[40]};
    max-width: ${convertPxToRem(300)};

    ${theme.media.tabletLandscape} {
      max-width: ${convertPxToRem(732)};
      font-size: ${theme.text.size.subtitle};
    }
  `,
};

export default NumberedCard;
