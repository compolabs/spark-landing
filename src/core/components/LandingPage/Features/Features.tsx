import { css } from '@emotion/react';

import SectionWrapper from "@/core/components/common/SectionWrapper";
import theme from "@/core/styles/theme";
import { featureCards } from "@/core/components/LandingPage/Features/constants";
import FeatureCard from "@/core/components/LandingPage/components/FeatureCard";

const Features = () => {
  return (
    <SectionWrapper>
      <section css={cssStyles.container}>
        {featureCards.map((card, index) => (
          <FeatureCard
            key={card.title}
            title={card.title}
            image={card.image}
            paragraph={card.paragraph}
            type={card.type}
            badgeText={card.badgeText}
            styles={cssStyles.card}
          />
        ))}
      </section>
    </SectionWrapper>
  );
};

const cssStyles = {
  container: css`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 10px;
    width: 100%;
  `,

  topRow: css`
    ${theme.media.tabletBreakPoint} {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  `,
  mediumRow: css`
    display: flex;
    flex-direction: column;`,

  card: css`
    flex: 1 1 100%;

    ${theme.media.tabletBreakPoint} {
      &:nth-child(1), &:nth-child(2) {
        flex: 1 1 calc(50% - 10px);
      }
      &:nth-child(1) {
        order: 2;
      }
      &:nth-child(2) {
        order: 1;
      }
      
      &:nth-child(3), &:nth-child(4), &:nth-child(5) {
        flex: 1 1 calc(33.333% - 10px);
        order: 3;
      }
    }
  `,
}

export default Features;
