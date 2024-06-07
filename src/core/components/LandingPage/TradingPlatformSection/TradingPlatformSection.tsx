import { css } from "@emotion/react";
import Image from "next/image";

import { SourceNames } from "@/core/utils/pageSources";
import { getIdAnchor } from "@/core/utils/getidAnchor";
import SectionWrapper from "@/core/components/common/SectionWrapper";
import { useMobileWindowWidth } from "@/core/hooks/useMobileWindowWidth";
import theme from "@/core/styles/theme";
import TextHighlighter from "@/core/components/common/TextHighlighter";
import RegularTradeButton from "@/core/components/LandingPage/components/RegularTradeButton";

import {
  tradingDescriptionHighlight,
  tradingToolkitDescription
} from "./constants";
import TradingKeyAttributes from "./TradingKeyAttributes";
import TradingFeatures from "./TradingFeatures";

const TradingPlatformSection = () => {
  const isMobile = useMobileWindowWidth();

  return (
    <SectionWrapper>
      <div
        id={getIdAnchor(SourceNames.TradeSmart)}
        css={cssStyles.section(isMobile)}
      >
        <div css={cssStyles.titleWrapper}>
          <h2  css={cssStyles.title}>Trading Toolkit: </h2>
          <TextHighlighter
            text={tradingToolkitDescription}
            highlight={tradingDescriptionHighlight}
            color={theme.colors.gradients.text}
            styles={cssStyles.subtitle}
            isGradient
          />
        </div>

        <TradingKeyAttributes />

        <div css={cssStyles.imageContainer}>
          <Image
            src="./images/trade-platform.png"
            alt="trade-platform"
            fill
          />
        </div>

        <TradingFeatures />

        <RegularTradeButton label= "Try it" styles={cssStyles.tryBtn} />
      </div>
    </SectionWrapper>
  );
};

const cssStyles = {
  section: (isMobile: boolean) => css`
    padding: ${isMobile ? `${theme.spacing.custom[40]} 0 ${theme.spacing.custom[20]}` : `${theme.spacing.section} 0`};
    width: 100%;
  `,
  titleWrapper: css`
    margin: 0 auto ${theme.spacing.huge};
    max-width: 30rem;
    text-align: center;
    
    ${theme.media.tablet} {
      max-width: 43rem;
    }
  `,
  title: css`
    margin-bottom: ${theme.spacing.normal};
    font-size: ${theme.text.size.small};
    color: ${theme.colors.white.default};
    
    ${theme.media.tablet} {
      margin-bottom: ${theme.spacing.medium};
    }
  `,
  subtitle: css`
    font-size: ${theme.text.size.small};
    
    ${theme.media.tablet} {
      font-size: ${theme.text.size.subtitle};
    }
  `,
  imageContainer: css`
    margin: ${theme.spacing.extraHuge} auto;
    position: relative;
    width: 20rem;
    height: 12.5rem;
    
    ${theme.media.tablet} {
      width: 31.5rem;
      height: 21.5rem;
    }
  `,
  tryBtn: css`
    max-width: 20.5rem;
    margin: 0 auto;

    ${theme.media.tabletBreakPoint} {
      max-width: 14.5rem;
    }
  `,
}

export default TradingPlatformSection;
