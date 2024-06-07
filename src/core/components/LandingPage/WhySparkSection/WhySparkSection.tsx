import { css, keyframes } from "@emotion/react";
import Image from "next/image";

import { getIdAnchor } from "@/core/utils/getidAnchor";
import { SourceNames } from "@/core/utils/pageSources";
import { useMobileWindowWidth } from "@/core/hooks/useMobileWindowWidth";
import theme from "@/core/styles/theme";
import SectionWrapper from "@/core/components/common/SectionWrapper";
import ProductDigits from "@/core/components/LandingPage/WhySparkSection/ProductDigits";

const WhySparkSection = () => {
  const isMobile = useMobileWindowWidth();
  return (
    <SectionWrapper>
      <div
        id={getIdAnchor(SourceNames.WhySpark)}
        css={cssStyle.container}
      >
        <Image
          src="./images/bg.png"
          alt="bg"
          css={cssStyle.bgImage}
          fill
          priority
        />

        <ProductDigits />

        <div css={cssStyle.imageContainer}>
          <Image
            src={isMobile ? "./images/trade-platform_mobile.png" : "./images/main_screen.png"}
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
      padding: ${theme.spacing.normal} ${theme.spacing.normal} ${theme.spacing.custom[40]};
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
  imageContainer: css`
    margin-top: 1.25rem;
    position: relative;
    width: 20.5rem;
    height: 20.5rem;
    
    ${theme.media.tabletBreakPoint} {
      width: 33.5rem;
      height: 18.75rem;
      
      &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: 0;
        background: ${theme.colors.purpleShadow};
        border-radius: ${theme.borderRadius.default};
        width: calc(33.5rem - 3.5rem);
        height: 2.5rem;
        top: -1rem;
        left: 1.75rem;
        right: 0;
        animation: ${fadeIn} .2s;
      }
    }
    
    ${theme.media.tabletLandscape} {
      width: 54rem;
      height: 30.5rem;
      &:before {
        width: calc(54rem - 3.5rem);
        height: 3rem;
        top: -1.25rem;
      }
    }
    
    ${theme.media.tablet} {
      width: 70rem;
      height: 39.5rem;
      &:before {
        width: calc(70rem - 3.5rem);
      }
    }
    
    ${theme.media.desktop} {
      width: 90rem;
      height: 51rem;
      &:before {
        width: calc(90rem - 3.5rem);
      }
    }
  `,
};

export default WhySparkSection;
