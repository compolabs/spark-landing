import { css } from "@emotion/react";
import Image from "next/image";

import { FeatureCardTypes } from "@/core/enums/featureCardTypes";
import theme from "@/core/styles/theme";

const cssStyles = {
  highlightedText: css`
    color: ${theme.colors.white.default}
  `,

  imageContainer: css`
    position: relative;
    width: 100%;
  `,

  medium: css`
    height: 7rem;
    width: 7.5rem;
  `,

  top: css`
    height: 5.75rem;
    width: 16.75rem;
    
    ${theme.media.tabletBreakPoint} {
      height: 7.5rem;
      width: 25rem;
    }
  `,

  image: css`
    position: static !important;
    height: auto!important;
    width: 100%;
  `,

  extraBadgeContainer: css`
    position: absolute;
    right: -1.5rem;
    top: -1rem;
    width: 3.5rem;
    height: 3.5rem;
    
    ${theme.media.tabletBreakPoint} {
      width: 5rem;
      height: 5rem;
      top: -1.5rem;
      right: 1rem;
    }
  `
};

export const featureCards = [
  {
    title: "Leverage & Margin:",
    paragraph: (
      <>
        Our on-chain CLOB provides unmatched speed and accuracy, ensuring
        <span css={cssStyles.highlightedText}> high-volume trade execution without compromise.</span>
      </>
    ),
    type: FeatureCardTypes.Top,
    badgeText: "Familiar tools",
    image: (
      <div css={[cssStyles.imageContainer, cssStyles.top]}>
        <Image css={cssStyles.image} src="/images/feature_big_1.png" alt="familiar_tools" fill />
        <div css={cssStyles.extraBadgeContainer}>
          <Image src="/images/svg/up_to_50x.svg" alt="up to 50x" fill />
        </div>
      </div>
    ),
  },
  {
    title: "On-chain Orderbook:",
    paragraph: (
      <>
        Access dynamic leverage options and sophisticated risk management tools
        <span css={cssStyles.highlightedText}> designed for strategic trade optimization.</span>
      </>
    ),
    type: FeatureCardTypes.Top,
    badgeText: "Top feature",
    image: (
      <div
        css={[cssStyles.imageContainer, cssStyles.top]}
      >
        <Image css={cssStyles.image} src="/images/feature_big_2.png" alt="familiar_tools" fill />
      </div>
    ),
  },
  {
    title: "Fast data: 2500tps",
    paragraph: (
      <>
        <span css={cssStyles.highlightedText}>Trade fast</span> quick settlements and minimal fees.
      </>
    ),
    type: FeatureCardTypes.Medium,
    image: (
      <div css={[cssStyles.imageContainer, cssStyles.medium]}>
        <Image src="/images/svg/feature_small_1.svg" alt="fast data" fill />
      </div>
    ),
  },
  {
    title: "Low fees: $0.00000001.",
    paragraph: (
      <>
        <span css={cssStyles.highlightedText}>Instant order execution.</span> No lag, no downtime.
      </>
    ),
    type: FeatureCardTypes.Medium,
    image: (
      <div css={[cssStyles.imageContainer, cssStyles.medium]}>
        <Image src="/images/svg/feature_small_2.svg" alt="low fees" fill />
      </div>
    )
  },
  {
    title: "RISC engine",
    paragraph: (
      <>
        A robust system that keeps your <span css={cssStyles.highlightedText}>trades safer, smarter.</span>
      </>
    ),
    type: FeatureCardTypes.Medium,
    image: (
      <div css={[cssStyles.imageContainer, cssStyles.medium]}>
        <Image src="/images/svg/feature_small_3.svg" alt="engine" fill />
      </div>
    )
  },
];
