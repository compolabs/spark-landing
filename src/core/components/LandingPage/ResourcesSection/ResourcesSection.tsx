import React from "react";
import { css } from "@emotion/react";

import { getIdAnchor } from "@/core/utils/getidAnchor";
import { SourceNames } from "@/core/utils/pageSources";
import SectionWrapper from "@/core/components/common/SectionWrapper";
import { DecorationPlus } from "@/core/components/common/DecorationPlus";
import theme from "@/core/styles/theme";
import { resourceCards } from "@/core/components/LandingPage/ResourcesSection/constants";
import NumberedCard from "@/core/components/LandingPage/ResourcesSection/NumberedCard";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

const ResourcesSection = () => {
  return (
    <SectionWrapper>
      <div
        id={getIdAnchor(SourceNames.Resources)}
        css={cssStyles.container}
        style={{
          backgroundImage: "url(./images/bg2.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <DecorationPlus>
          <h2 css={cssStyles.title}>Knowledge & Insights:</h2>

          {resourceCards.map(({ title, paragraph, renderContent}, index) => (
            <NumberedCard
              key={title}
              number={index + 1}
              title={title}
              paragraph={paragraph}
              styles={cssStyles.card}
            >
              {renderContent()}
            </NumberedCard>
          ))}
        </DecorationPlus>
      </div>
    </SectionWrapper>
  );
};

const cssStyles = {
  container: css`
    padding: ${theme.spacing.custom[20]} 0 ${theme.spacing.extraHuge};
    margin-bottom: ${theme.spacing.custom[20]};
    margin-top: ${theme.spacing.custom[20]};
    position: relative;
    width: 100%;
    text-align: center;
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.grey.dark};
    
    ${theme.media.tabletBreakPoint} {
      padding: ${theme.spacing.custom[40]} 0;
    }
  `,
  title: css`
    margin-bottom: ${theme.spacing.huge};
    color: ${theme.colors.grey.light};
    font-weight: ${theme.text.weight.regular};
    font-size: ${theme.text.size.tiny};
    
    ${theme.media.tabletLandscape} {
      margin-bottom: ${convertPxToRem(80)};
      font-weight: ${theme.text.weight.medium};
      font-size: ${theme.text.size.subtitle};
    }
  `,
  card: css`
    &:first-of-type {
      margin-bottom: ${theme.spacing.section};
    }
    
    ${theme.media.tabletLandscape} {
      &:first-of-type {
        margin-bottom: ${convertPxToRem(116)};
      }
    }
  `,
}

export default ResourcesSection;
