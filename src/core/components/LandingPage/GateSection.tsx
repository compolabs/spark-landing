import { css } from "@emotion/react";
import Image from "next/image";

import SectionWrapper from "@/core/components/common/SectionWrapper";
import theme from "@/core/styles/theme";
import Badge from "@/core/components/common/Badge";
import { convertPxToRem } from "@/core/utils/convertPxToRem";
import RegularTradeButton from "@/core/components/LandingPage/components/RegularTradeButton";

const GateSection = () => {
  return (
    <SectionWrapper>
      <div css={cssStyles.container}>
        <Badge
          content="Introducing Spark.fi"
          borderStyles={cssStyles.badge}
          bgColor="transparent"
        />

        <h1 css={cssStyles.title}>
          World's fastest <br /> on-chain order book
        </h1>

        <p css={cssStyles.tagline}>
          {`Trade spot crypto with low fees & fast `}
          <br />
          {`transactions. Build your
          strategies.`}
        </p>

        <RegularTradeButton styles={cssStyles.appBtn}>
          <span css={cssStyles.appBtnText}>Launch app</span>
          <Image
            src="./images/svg/fuel.svg"
            alt="fuel-logo"
            width={72}
            height={17}
          />
        </RegularTradeButton>
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
};

export default GateSection;
