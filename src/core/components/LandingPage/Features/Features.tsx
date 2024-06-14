import { css } from "@emotion/react";

import SectionWrapper from "@/core/components/common/SectionWrapper";
import { getIdAnchor } from "@/core/utils/getidAnchor";
import { SourceNames } from "@/core/utils/pageSources";

import { featureCards, isFeature } from "./constants";
import { FeatureCardsContainer } from "./FeatureCardsContainer";
import { FeatureCardShapeTypes } from "./enums";
import FeatureCard from "./FeatureCard";
import FeatureSubCard from "./FeatureSubCard";

const Features = () => {
  const {
    [FeatureCardShapeTypes.Card]: Card,
    [FeatureCardShapeTypes.SubCard]: SubCard,
  } = isFeature;

  return (
    <SectionWrapper
      anchorId={getIdAnchor(SourceNames.WhySpark)}
      styles={cssStyles.wrapper}
    >
      <FeatureCardsContainer
        cardsList={featureCards.filter(Card)}
        ChildrenCard={FeatureCard}
      />
      <FeatureCardsContainer
        cardsList={featureCards.filter(SubCard)}
        styles={cssStyles.containerSubCards}
        ChildrenCard={FeatureSubCard}
      />
    </SectionWrapper>
  );
};

const cssStyles = {
  wrapper: css`
    flex-direction: column;
  `,
  containerSubCards: css`
    display: flex;
    flex-direction: column;
  `,
};

export default Features;
