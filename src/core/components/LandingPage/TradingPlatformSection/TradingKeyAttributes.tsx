import { css, SerializedStyles } from "@emotion/react";

import {
  activeIndex,
  bottomLeftActiveIndex,
  bottomRightActiveIndex,
  postActiveIndex,
  preActiveIndex,
  tradingKeyAttributes,
} from "@/core/components/LandingPage/TradingPlatformSection/constants";
import Badge from "@/core/components/common/Badge";
import theme from "@/core/styles/theme";

const getBadgeStyles = (index: number): SerializedStyles | string => {
  switch (index) {
    case preActiveIndex:
      return cssStyles.preActive;
    case postActiveIndex:
      return cssStyles.postActive;
    case bottomLeftActiveIndex:
      return cssStyles.bottomLeftActive;
    case bottomRightActiveIndex:
      return cssStyles.bottomRightActive;
    default:
      return "";
  }
};

const TradingKeyAttributes = () => {
  return (
    <div css={cssStyles.container}>
      {tradingKeyAttributes.map((attribute, index) => (
        <Badge
          key={attribute}
          content={attribute}
          borderStyles={getBadgeStyles(index)}
          styles={index === activeIndex ? cssStyles.active : ""}
          bgColor={theme.colors.grey.dark}
        />
      ))}
    </div>
  );
};

const cssStyles = {
  container: css`
    margin: 0 auto ${theme.spacing.custom[20]};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 23.25rem;
    gap: ${theme.spacing.normal} ${theme.spacing.default};
    font-size: ${theme.text.size.extraTiny};

    ${theme.media.tabletBreakPoint} {
      gap: ${theme.spacing.normal} ${theme.spacing.default};
      font-size: ${theme.text.size.tiny};
    }

    ${theme.media.tablet} {
      gap: ${theme.spacing.normal} ${theme.spacing.default};
      max-width: 36rem;
      font-size: ${theme.text.size.tiny};
      margin: 0 auto ${theme.spacing.extraHuge};
    }

    ${theme.media.desktop} {
      gap: ${theme.spacing.normal} ${theme.spacing.default};
      max-width: 50.5rem;
      font-size: ${theme.text.size.tiny};
      margin: 0 auto ${theme.spacing.extraHuge};
    }
  `,
  active: css`
    background: ${theme.colors.gradients.buttonTrading};
    box-shadow: ${theme.shadow.inset};

    ${theme.media.tablet} {
      background: ${theme.colors.green[100]};
      box-shadow: ${theme.shadow.green};
    }
  `,
  preActive: css`
    ${theme.media.tablet} {
      background: linear-gradient(
        84.21deg,
        #2a2a2a 88.38%,
        rgba(105, 255, 195, 0.3825) 97.67%
      );
    }
  `,
  postActive: css`
    ${theme.media.tablet} {
      background: linear-gradient(
        275.51deg,
        #2a2a2a 72.5%,
        rgba(105, 255, 195, 0.3825) 95.75%
      );
    }
  `,
  bottomRightActive: css`
    ${theme.media.tablet} {
      background: linear-gradient(
        333.6deg,
        rgba(134, 101, 255, 0) 69.92%,
        rgba(105, 255, 195, 0.3825) 103.32%
      );
    }
  `,
  bottomLeftActive: css`
    ${theme.media.tablet} {
      background: linear-gradient(
        1.11deg,
        rgba(134, 101, 255, 0) 59.35%,
        rgba(105, 255, 195, 0.3825) 107.33%
      );
    }
  `,
};

export default TradingKeyAttributes;
