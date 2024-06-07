import { Styles } from "core/types";

import { FeatureCardShapeTypes } from "./enums";

type ArticleTextType = {
  highlightedText: string;
  text: string;
};

type ArticleType = {
  header: string;
  title: ArticleTextType;
};

export type FeatureCardType = {
  type: FeatureCardShapeTypes;
  badge: string | null;
  imageSrc: string;
  imageLabel: string | null;
  article: ArticleType;
};

export type CardsListType = {
  cardsList: Array<FeatureCardType>;
  styles?: Styles;
  ChildrenCard: React.ElementType<{ card: FeatureCardType }>;
};
