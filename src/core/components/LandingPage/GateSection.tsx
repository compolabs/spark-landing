import { css } from "@emotion/react";
import Image from "next/image";

import SectionWrapper from "@/core/components/common/SectionWrapper";
import theme from "@/core/styles/theme";
import Badge from "@/core/components/common/Badge";
import { convertPxToRem } from "@/core/utils/convertPxToRem";
import RegularTradeButton from "@/core/components/LandingPage/components/RegularTradeButton";
import OptimizedMobileButton from "@/core/components/LandingPage/components/OptimizedMobileButton";

const GateSection = () => {
  return (
    <SectionWrapper>
      <div css={cssStyles.container}>
        <Badge
          content="Introducing Sprk.fi"
          borderStyles={cssStyles.badge}
          bgColor="transparent"
        />

        <h1 css={cssStyles.title}>
          Onchain Trading <br />
          <span css={cssStyles.scaled}>[Scaled]</span>
        </h1>

        <p css={cssStyles.tagline}>
          {`Spark is your all-in-one DeFi hub on the Fuel`}
          <br />
          {`Network, with an integrated order book for `}
          <br />
          {`seamless trading of your favorite assets.`}
        </p>

        <div css={cssStyles.buttons}>
          <RegularTradeButton styles={cssStyles.appBtn}>
            <span css={cssStyles.appBtnText}>Trade now</span>
            <Image
              src="./images/svg/fuel.svg"
              alt="fuel-logo"
              width={72}
              height={17}
            />
          </RegularTradeButton>
          <OptimizedMobileButton styles={cssStyles.mobileBtn} >
            <div css={cssStyles.mobileBtn_icons}>
            <Image
              src="./images/svg/apple.svg"
              alt="fuel-logo"
              width={19}
              height={24}
            />
            <Image
              src="./images/svg/android.svg"
              alt="fuel-logo"
              width={19}
              height={24}
            />
            </div>
            <span>Optimized for mobile</span>
          </OptimizedMobileButton>
        </div>
      </div>
    </SectionWrapper>
  );
};

const cssStyles = {
  container: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    padding: ${theme.spacing.section} 0 ${theme.spacing.custom[20]};
    text-align: center;

    ${theme.media.tabletBreakPoint} {
      width: auto;
      margin-bottom: ${convertPxToRem(40)};
    }

    ${theme.media.tabletLandscape} {
      width: auto;
      padding: ${convertPxToRem(148)} 0 ${theme.spacing.extra};
    }
  `,
  badge: css`
    display: inline-block;
    margin-bottom: ${theme.spacing.large};
    border: ${convertPxToRem(1)} solid ${theme.colors.green[20]};

    & > span {
      color: ${theme.colors.green[75]};
      padding: ${theme.spacing.small} ${theme.spacing.normal};
      line-height: 1.1;
    }

    ${theme.media.tabletLandscape} {
      background: ${theme.colors.black.deepDark};
    }
  `,
  title: css`
    margin-bottom: ${theme.spacing.huge};
    font-size: ${theme.text.size.subtitle};
    font-weight: ${theme.text.weight.medium};
    color: ${theme.colors.white.default};

    ${theme.media.tabletLandscape} {
      font-size: ${theme.text.size.large};
      margin-bottom: ${theme.spacing.large};
    }
  `,
  scaled: css`
    background-image: ${theme.colors.gradients.text};
    color: transparent;
    background-clip: text;
  `,
  tagline: css`
    margin-bottom: ${theme.spacing.huge};
    max-width: ${convertPxToRem(328)};
    color: ${theme.colors.white.default};
    font-size: ${theme.text.size.small};
    line-height: ${convertPxToRem(26)};

    ${theme.media.tabletLandscape} {
      margin-bottom: ${theme.spacing.large};
      max-width: ${convertPxToRem(428)};
    }
  `,
  appBtn: css`
    display: flex;
    align-items: center;

    ${theme.media.tabletLandscape} {
      max-width: ${convertPxToRem(302)};
    }
  `,
  appBtnText: css`
    margin-right: ${theme.spacing.custom[20]};
  `,
  buttons: css`
    display: flex;
    width: 100%;
    gap: 24px;
    flex-direction: column;
    margin: 0 0 ${convertPxToRem(50)} 0;

    ${theme.media.tabletLandscape} {
      flex-direction: row;
      width: ${convertPxToRem(641)};
      margin: unset;
    }
  `,
  mobileBtn: css`
    pointer-events: none;
    gap: 20px;
  `,
  mobileBtn_icons: css`
    display:flex;
    gap: 11px;
  `,
};

export default GateSection;
