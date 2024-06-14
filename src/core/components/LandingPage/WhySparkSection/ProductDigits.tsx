import { css } from "@emotion/react";

import { useMobileWindowWidth } from "@/core/hooks/useMobileWindowWidth";
import theme from "@/core/styles/theme";
import { productDigits } from "@/core/components/LandingPage/WhySparkSection/constants";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

import SoonBadge from "./SoonBadge";

const ProductDigits = () => {
  const isMobile = useMobileWindowWidth();

  return (
    <div css={cssStyle.container}>
      {isMobile && <SoonBadge />}

      <div css={cssStyle.digitsWrapper}>
        {productDigits.map(({ title, numbers, mobileOrder, desktopOrder }) => (
          <div
            key={title}
            css={cssStyle.digitsCard(isMobile ? mobileOrder : desktopOrder)}
          >
            <div css={cssStyle.desktopCardTitleRow}>
              <span css={cssStyle.cardTitle}>{title}</span>
              {!isMobile && <SoonBadge />}
            </div>
            <span css={cssStyle.cardNumbers}>{numbers}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const cssStyle = {
  container: css`
    width: 100%;

    ${theme.media.tabletBreakPoint} {
      max-width: 100%;
      margin-bottom: ${theme.spacing.custom[80]};
    }
  `,
  digitsWrapper: css`
    display: flex;
    flex-wrap: wrap;
    padding-top: ${theme.spacing.large};
    gap: ${theme.spacing.large} ${theme.spacing.medium};

    ${theme.media.tabletBreakPoint} {
      flex-wrap: nowrap;
      padding-top: 0;
      gap: ${theme.spacing.large} 4%;
    }

    ${theme.media.tablet} {
      flex-wrap: nowrap;
      padding-top: 0;
      gap: ${theme.spacing.large} 0%;
    }
  `,
  desktopDigitsWrapper: css`
    display: flex;
    justify-content: space-between;
  `,
  digitsCard: (order: number) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    order: ${order};
    max-width: 8.5rem;
    
    ${theme.media.tabletBreakPoint} {
      border-left: ${order === 1
        ? "none"
        : `${convertPxToRem(1)} solid ${theme.colors.white[13]}`};
      max-width: unset;
      padding-left: ${theme.spacing.normal};
      max-width: unset;
      &:nth-child(2) {
        padding-left: 0;
      }
    }
  `,
  cardTitle: css`
    color: ${theme.colors.grey.textLight};
    font-size: ${theme.text.size.tiny};
    white-space: nowrap;

    ${theme.media.tabletBreakPoint} {
      margin-right: ${theme.spacing.normal};
      color: ${theme.colors.white.default};
    }
  `,
  desktopCardTitleRow: css`
    display: flex;
    width: 100%;

    ${theme.media.tabletBreakPoint} {
      align-items: flex-start;
      flex-direction: column-reverse;
      margin-bottom: ${theme.spacing.custom[60]};
    }

    ${theme.media.tabletLandscape} {
      flex-direction: row;
      align-items: center;
    }
  `,
  cardNumbers: css`
    text-shadow: 0 0 ${convertPxToRem(4)} ${theme.colors.orange};
    font-family: sans-serif;
    color: transparent;
    font-size: ${theme.text.size.medium};
    font-weight: ${theme.text.weight.medium};

    ${theme.media.tablet} {
      font-size: ${theme.text.size.subtitle};
      font-weight: ${theme.text.weight.regular};
    }
  `,
};

export default ProductDigits;
