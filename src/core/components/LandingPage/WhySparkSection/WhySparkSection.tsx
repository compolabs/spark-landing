import { css, keyframes } from "@emotion/react";
import Image from "next/image";

import { useMobileWindowWidth } from "@/core/hooks/useMobileWindowWidth";
import theme from "@/core/styles/theme";
import SectionWrapper from "@/core/components/common/SectionWrapper";
import ProductDigits from "@/core/components/LandingPage/WhySparkSection/ProductDigits";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

const WhySparkSection = () => {
  const isMobile = useMobileWindowWidth();
  return (
    <SectionWrapper>
      <div css={cssStyle.container}>
        <Image
          src="./images/bg.png"
          alt="bg"
          css={cssStyle.bgImage}
          fill
          priority
        />

        <ProductDigits />

        <div css={cssStyle.imageContainer(isMobile)}>
          <Image
            src={
              isMobile
                ? "./images/trade-platform_mobile.png"
                : "./images/main-screen.png"
            }
            alt="product"
            fill
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`;

const cssStyle = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 0 auto ${theme.spacing.custom[10]};
    padding: ${theme.spacing.custom[20]} ${theme.spacing.custom[20]} 0;
    border-radius: ${theme.borderRadius.default};
    width: 100%;

    ${theme.media.tabletBreakPoint} {
      padding: ${theme.spacing.normal} ${theme.spacing.normal}
        ${theme.spacing.custom[40]};
    }

    ${theme.media.tabletLandscape} {
      padding-left: ${theme.spacing.custom[40]};
      padding-right: ${theme.spacing.custom[40]};
    }
  `,
  bgImage: css`
    border-radius: ${theme.borderRadius.default};
    z-index: -1;
  `,
  imageContainer: (isMobile: boolean) => css`
    margin-top: 1.25rem;
    position: relative;
    width: 20.5rem;
    height: 20.5rem;

    ${theme.media.tabletBreakPoint} {
      width: 100%;
      height: 50vw;
    }

    ${theme.media.tabletLandscape} {
      width: 100%;
      height: 50vw;
    }

    ${theme.media.tablet} {
      width: 100%;
      height: 50vw;
      max-height: ${convertPxToRem(814.54)};
    }

    ${theme.media.desktop} {
      max-height: ${convertPxToRem(814.54)};
      width: 90rem;
      height: 51rem;
    }
  `,
};

export default WhySparkSection;
