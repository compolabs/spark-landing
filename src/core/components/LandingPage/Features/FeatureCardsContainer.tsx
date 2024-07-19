import React from "react";
import { css } from "@emotion/react";

import theme from "@/core/styles/theme";

import { CardsListType, FeatureCardType } from "./types";

export const FeatureCardsContainer = ({
  cardsList,
  styles,
  ChildrenCard,
}: CardsListType) => (
  <div css={[cssStyles.container, styles]}>
    {cardsList.map((card: FeatureCardType) => (
      <ChildrenCard key={card.article.title.text} card={card} />
    ))}
  </div>
);

const cssStyles = {
  container: css`
    display: flex;
    width: 100%;
    flex-direction: column-reverse;

    ${theme.media.tabletLandscape} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
  `,
};
