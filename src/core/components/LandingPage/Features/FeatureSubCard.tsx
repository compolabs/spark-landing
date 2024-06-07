import React from "react";
import { css } from "@emotion/react";
import Image from "next/image";

import theme from "@/core/styles/theme";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

import { FeatureCardType } from "./types";

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
        <p css={cssStyles.paragraph}>{title.text}</p>
      </div>
    </div>
  );
};
//TODO: Technical Debt - rewrite styles for FeatureSubCard and FeatureCard to exclude style duplicates for
const cssStyles = {
  card: css`
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: ${theme.spacing.huge};
    margin-bottom: ${theme.spacing.custom[10]};
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.grey.dark};

    ${theme.media.tabletBreakPoint} {
      flex-direction: row;
      justify-content: center;
    }

    ${theme.media.tabletLandscape} {
      flex-direction: column;
      width: calc((100% - (${theme.spacing.custom[10]} * 2)) / 3);
      margin-right: ${theme.spacing.custom[10]};
      &:last-child {
        margin-right: 0;
      }
    }
  `,
  imageContainer: css`
    position: relative;
    margin-bottom: ${theme.spacing.large};
    width: auto;
    height: ${convertPxToRem(120)};

    ${theme.media.tabletBreakPoint} {
      margin-bottom: ${theme.spacing.huge};
      margin-right: ${theme.spacing.huge};
    }
    ${theme.media.tabletLandscape} {
      margin-bottom: ${theme.spacing.huge};
      margin-right: 0;
    }

    & > img {
      width: 100%;
      height: 100%;
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
      margin-bottom: ${theme.spacing.medium};
    }
  `,
  paragraph: css`
    word-wrap: break-word;
    color: ${theme.colors.grey.light};
    font-size: ${theme.text.size.extraTiny};
    margin-bottom: ${theme.spacing.medium};
    width: 90%;

    ${theme.media.tabletBreakPoint} {
      font-size: ${theme.text.size.small};
      width: 65%;
    }
  `,
};

export default FeatureSubCard;
