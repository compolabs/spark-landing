import { css } from "@emotion/react";
import Image from "next/image";

import SectionWrapper from "@/core/components/common/SectionWrapper";
import theme from "@/core/styles/theme";
import ExternalLinkButton from "@/core/components/common/ExternalLinkWrapper";
import { externalLinks } from "@/core/constants/externalLinks";

const GetStartedSection = () => {
  return (
    <SectionWrapper>
      <section id="#tradeSmart" css={cssStyles.container}>
        <main css={cssStyles.content}>
          <h2 css={cssStyles.header}>Get Started</h2>
          <p css={cssStyles.paragraph}>
            Begin with a bespoke onboarding session to align our platform
            capabilities with your trading methodologies.
          </p>
          <ExternalLinkButton
            href={externalLinks.tradeApp}
            label="Launch trading"
            styles={cssStyles.linkButton}
          />
        </main>

        <div css={cssStyles.imageContainer}>
          <Image
            src="./images/rocket.png"
            alt="rocket"
            css={cssStyles.image}
            fill
          />
        </div>
      </section>
    </SectionWrapper>
  );
};

const cssStyles = {
  container: css`
    position: relative;
    margin: ${theme.spacing.custom[10]} 0 ${theme.spacing.custom[20]};
    border-radius: ${theme.borderRadius.default};
    width: 100%;

    ${theme.media.tablet} {
      display: flex;
      justify-content: space-between;
      margin: ${theme.spacing.custom[10]} 0 ${theme.spacing.custom[40]};
    }

    ${theme.media.desktop} {
      padding: calc(${theme.spacing.extra} + ${theme.spacing.small});
      margin: ${theme.spacing.custom[10]} 0 ${theme.spacing.custom[40]};
    }
  `,

  content: css`
    padding: ${theme.spacing.medium};

    ${theme.media.tabletBreakPoint} {
      padding: ${theme.spacing.custom[40]};
    }

    ${theme.media.desktop} {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  `,

  header: css`
    font-size: ${theme.text.size.large};
    padding-bottom: ${theme.spacing.medium};
    color: ${theme.colors.white.title};
    font-weight: ${theme.text.weight.regular};
    line-height: 1;
    max-width: 18rem;

    ${theme.media.tabletBreakPoint} {
      font-size: ${theme.text.size.huge};
    }

    ${theme.media.desktop} {
      max-width: 100%;
      padding-bottom: ${theme.spacing.large};
    }
  `,

  paragraph: css`
    font-size: ${theme.text.size.tiny};
    color: ${theme.colors.white.default};
    margin-bottom: ${theme.spacing.huge};
    max-width: 18rem;

    ${theme.media.tabletBreakPoint} {
      max-width: 27.5rem;
      font-size: ${theme.text.size.medium};
      padding-bottom: ${theme.spacing.extra};
      margin-bottom: ${theme.spacing.default};
    }

    ${theme.media.tabletLandscape} {
      color: ${theme.colors.grey.light};
    }

    ${theme.media.desktop} {
      max-width: 37.5rem;
      color: ${theme.colors.white.text};
    }
  `,

  linkButton: css`
    display: flex;
    justify-content: center;
    padding: ${theme.spacing.normal};
    background: ${theme.colors.gradients.buttonCTA};
    font-size: ${theme.text.size.body};
    border-radius: ${theme.borderRadius.default};
    width: 100%;
    box-shadow: ${theme.shadow.inset};

    ${theme.media.tabletBreakPoint} {
      max-width: 13.75rem;
    }
  `,

  imageContainer: css`
    position: absolute;
    z-index: -1;
    background: ${theme.colors.grey.bgDark};
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    border-radius: ${theme.borderRadius.default};
  `,

  image: css`
    opacity: 0.4;
    border-radius: ${theme.borderRadius.default};
    object-fit: cover;

    ${theme.media.tabletBreakPoint} {
      left: auto !important;
      max-width: 39rem;
    }

    ${theme.media.tabletLandscape} {
      opacity: 1;
    }

    ${theme.media.desktop} {
      max-width: 48rem;
    }
  `,
};

export default GetStartedSection;
