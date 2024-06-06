import React from "react";
import { css } from '@emotion/react';

import { Styles } from "core/types";

import theme from "@/core/styles/theme";
import Badge from "@/core/components/common/Badge";
import { FeatureCardTypes } from "@/core/enums/featureCardTypes";

interface PropTypes {
  image: React.ReactNode;
  title: string;
  paragraph: string | React.ReactNode;
  type: FeatureCardTypes;
  badgeText?: string;
  styles?: Styles;
}

const FeatureCard = ({ image, title, paragraph, type, badgeText, styles }: PropTypes) => {
  const isTopType = type === FeatureCardTypes.Top;
  return (
    <div css={[cssStyles.card, styles]}>
      <main css={cssStyles.mainContent({
        tabletMargin: isTopType ? "0 auto" : "",
        tabletTextAlign: isTopType ? "center" : "",
      })}>
        <div css={cssStyles.imageWrapper}>
          {badgeText && <Badge text={badgeText} styles={cssStyles.badge}/>}
          {image}
        </div>

        <h3 css={cssStyles.title({
          tabletFontSize: isTopType ? theme.text.size.headline : theme.text.size.medium,
          tabletFontWeight: isTopType ? theme.text.weight.extraBold : theme.text.weight.medium,
        })}>
          {title}
        </h3>

        <p css={cssStyles.paragraph}>{paragraph}</p>
      </main>
    </div>
  );
};

const cssStyles = {
  card: css`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 20px;
    background: ${theme.colors.grey.dark};
    border-radius: ${theme.borderRadius.default};

    ${theme.media.tablet} {
      padding: 30px;
      font-size: ${theme.text.size.tiny};
    }
  `,

  mainContent: ({ tabletMargin = "0", tabletTextAlign = "left" }) => css`
    display: flex;
    flex-direction: column;
    
    ${theme.media.tabletLandscape} {
      max-width: 23.5rem;
      margin: ${tabletMargin};
      text-align: ${tabletTextAlign};
    }
  `,

  badge: css`
    margin-bottom: ${theme.spacing.large};
  `,

  imageWrapper: css`
    margin-bottom: ${theme.spacing.extra};

    ${theme.media.tablet} {
      margin-bottom: ${theme.spacing.extraHuge};
    }
  `,

  title: ({ tabletFontSize, tabletFontWeight }: { tabletFontSize: string, tabletFontWeight: number }) => css`
    font-size: ${theme.text.size.medium};
    color: ${theme.colors.white.default};
    font-weight: ${theme.text.weight.medium};
    margin: 0 0 ${theme.spacing.normal};
    
    ${theme.media.tablet} {
      margin-bottom: ${theme.spacing.medium};
      font-size: ${tabletFontSize};
      font-weight: ${tabletFontWeight};
    }
  `,

  paragraph: css`
    color: ${theme.colors.grey.light};
    font-size: ${theme.text.size.tiny};
    
    ${theme.media.tablet} {
      font-size: ${theme.text.size.small};
    }
  `
};


export default FeatureCard;
