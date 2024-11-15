import { FeatureCardShapeTypes } from "./enums";
import { FeatureCardType } from "./types";

export const isFeature = {
  [FeatureCardShapeTypes.Card]: ({ type }: FeatureCardType) =>
    type === FeatureCardShapeTypes.Card,
  [FeatureCardShapeTypes.SubCard]: ({ type }: FeatureCardType) =>
    type === FeatureCardShapeTypes.SubCard,
};

export const featureCards = [
  {
    type: FeatureCardShapeTypes.SubCard,
    badge: null,
    imageSrc: "./images/svg/feature_small_1.png",
    imageLabel: null,
    article: {
      header: "Fast execution",
      title: {
        highlightedText: "with quick settlements and minimal fees.",
        text: "Trade fast with quick settlements and minimal fees.",
      },
    },
  },
  {
    type: FeatureCardShapeTypes.SubCard,
    badge: null,
    imageSrc: "./images/svg/feature_small_1.svg",
    imageLabel: null,
    article: {
      header: "Market Liquidity",
      title: {
        highlightedText:
          "on Fuel for optimal pricing",
        text: "Access unparalleled liquidity on Fuel for optimal pricing",
      },
    },
  },
  {
    type: FeatureCardShapeTypes.SubCard,
    badge: null,
    imageSrc: "./images/svg/feature_small_3.png",
    imageLabel: null,
    article: {
      header: "Self Custody and Secure",
      title: {
        highlightedText: "of your funds while trading.",
        text: "You maintain self custody of your funds while trading.",
      },
    },
  },
  {
    type: FeatureCardShapeTypes.SubCard,
    badge: null,
    imageSrc: "./images/svg/feature_small_3.svg",
    imageLabel: null,
    article: {
      header: "Governed by the Community",
      title: {
        highlightedText:
          "Spark traders will shape the future, with DAO treasury on the way.",
        text: "Spark traders will shape the future, with DAO treasury on the way.",
      },
    },
  },
  {
    type: FeatureCardShapeTypes.SubCard,
    badge: null,
    imageSrc: "./images/svg/feature_small_2.png",
    imageLabel: null,
    article: {
      header: "Low fees",
      title: {
        highlightedText: "The lowest transaction costs in DeFi with",
        text: "The lowest transaction costs in DeFi with near-zero gas fees",
      },
    },
  },
  {
    type: FeatureCardShapeTypes.SubCard,
    badge: null,
    imageSrc: "./images/svg/feature_small_2.svg",
    imageLabel: null,
    article: {
      header: "Personalized Trading Tools ",
      title: {
        highlightedText:
          "An intuitive interface designed to streamline your trading activities.",
        text: "An intuitive interface designed to streamline your trading activities.",
      },
    },
  },
];
