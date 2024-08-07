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
  tradingToolkitDescription,
} from "./constants";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

const TradingPlatformSection = () => {
  const isMobile = useMobileWindowWidth();

  return (
    <SectionWrapper
      anchorId={getIdAnchor(SourceNames.TradingToolkit)}
      styles={cssStyles.section(isMobile)}
    >
      <div css={cssStyles.titleWrapper}>
        <TextHighlighter
          text={tradingToolkitDescription}
          highlight={tradingDescriptionHighlight}
          color={theme.colors.gradients.text}
          styles={cssStyles.subtitle}
          isGradient
        />
        {!isMobile && (
          <RegularTradeButton styles={cssStyles.tryBtn}>Trade now!</RegularTradeButton>
        )}
      </div>

      <div css={cssStyles.imageContainer}>
        <Image
          src="./images/trade-platform.png"
          alt="trade-platform"
          fill
          priority
        />
      </div>
      {isMobile && (
        <RegularTradeButton styles={cssStyles.tryBtn}>Try it!</RegularTradeButton>
      )}
    </SectionWrapper>
  );
};

const cssStyles = {
  section: (isMobile: boolean) => css`
    ${isMobile ? "flex-direction: column;" : "align-items: center;"}
    padding-top: ${theme.spacing.custom[60]};
    padding-bottom: ${theme.spacing.custom[20]};

    ${theme.media.tablet} {
      padding-top: ${convertPxToRem(130)};
      padding-bottom: ${theme.spacing.section};
    }
  `,
  titleWrapper: css`
    margin: 0 auto ${theme.spacing.huge};
    max-width: 30rem;
    text-align: center;
    gap: 24px;
    display: flex;
    flex-direction: column;
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
    margin: ${theme.spacing.normal} auto;
    position: relative;
    width: 20rem;
    height: 12.5rem;

    ${theme.media.tablet} {
      margin: ${theme.spacing.extraHuge} auto;
      width: 31.5rem;
      height: 21.5rem;
    }
  `,
  tryBtn: css`
      margin: 50px 0;
      width: 100%;

    ${theme.media.tabletBreakPoint} {
      max-width: 14.5rem;
      margin: 50px auto;
    }
  `,
};

export default TradingPlatformSection;
