import React from "react";
import { css } from "@emotion/react";
import Image from "next/image";

import theme from "@/core/styles/theme";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

import { FeatureCardType } from "./types";
import TextHighlighter from "../../common/TextHighlighter";

const FeatureSubCard = ({ card }: { card: FeatureCardType }) => {
  const {
    imageSrc,
    article: { header, title },
  } = card;

  return (
    <div css={cssStyles.card}>
      <div css={cssStyles.imageContainer}>
        <Image src={imageSrc} alt="fast data" width={100} height={100} />
      </div>
      <div css={cssStyles.content}>
        <h3 css={cssStyles.h3}>{header}</h3>
        <TextHighlighter
          color={theme.colors.grey.light}
          text={title.text}
          highlight={title.highlightedText}
          styles={cssStyles.paragraph}
        />
      </div>
    </div>
  );
};

const cssStyles = {
  card: css`
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: ${theme.spacing.large};
    margin-bottom: ${theme.spacing.custom[10]};
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.grey.dark};

    ${theme.media.tabletBreakPoint} {
      flex-direction: row;
      justify-content: center;
    }

    ${theme.media.tabletLandscape} {
      flex-direction: column;
      width: 100%;
      margin-bottom: 0;
    }
  `,
  imageContainer: css`
    position: relative;
    margin-bottom: ${theme.spacing.large};

    ${theme.media.tabletBreakPoint} {
      margin-bottom: ${theme.spacing.huge};
      margin-right: ${theme.spacing.huge};
    }

    ${theme.media.tabletLandscape} {
      margin-bottom: calc(${theme.spacing.huge} + ${theme.spacing.large});
      margin-right: 0;
    }

    & img {
      width: ${convertPxToRem(120)};
      height: auto;
      object-fit: cover;
    }
  `,

  labelContainer: css`
    width: ${convertPxToRem(56)};
    height: ${convertPxToRem(56)};
    position: absolute;
    right: ${convertPxToRem(-22)};
    top: ${convertPxToRem(-29)};

    ${theme.media.tabletBreakPoint} {
      width: ${convertPxToRem(82)};
      height: ${convertPxToRem(82)};
    }

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,

  content: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    word-wrap: break-word;

    ${theme.media.tabletBreakPoint} {
      margin-left: 0;
      width: 50%;
    }
    ${theme.media.tabletLandscape} {
      margin-left: 0;
      width: 100%;
    }
  `,
  h3: css`
    font-size: ${theme.text.size.medium};
    font-weight: ${theme.text.size.medium};
    margin-bottom: ${theme.spacing.normal};

    ${theme.media.tabletLandscape} {
      white-space: wrap;
      margin-bottom: ${theme.spacing.medium};
    }

    ${theme.media.tablet} {
      white-space: nowrap;
      margin-bottom: ${theme.spacing.medium};
    }
  `,
  paragraph: css`
    line-height: ${convertPxToRem(26)};
    word-wrap: break-word;
    color: ${theme.colors.white.default};
    font-size: ${theme.text.size.extraTiny};
    width: 90%;

    ${theme.media.tabletBreakPoint} {
      font-size: ${theme.text.size.small};
      width: 70%;
    }
  `,
};

export default FeatureSubCard;
