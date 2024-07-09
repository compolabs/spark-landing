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
    type: FeatureCardShapeTypes.Card,
    badge: "Top feature",
    imageSrc: "./images/img_feature_big_2.png",
    imageLabel: null,
    article: {
      header: "On-chain Orderbook:",
      title: {
        highlightedText:
          "Our on-chain CLOB provides unmatched speed and accuracy, ensuring",
        text: "Our on-chain CLOB provides unmatched speed and accuracy, ensuring high-volume trade execution without compromise.",
      },
    },
  },
  {
    type: FeatureCardShapeTypes.Card,
    badge: "Familiar tools",
    imageSrc: "./images/img_feature_big_1.png",
    imageLabel: null,
    article: {
      header: "Leverage & Margin:",
      title: {
        highlightedText:
          "Access dynamic leverage options and sophisticated risk management tools",
        text: "Access dynamic leverage options and sophisticated risk management tools designed for strategic trade optimization.",
      },
    },
  },
  {
    type: FeatureCardShapeTypes.SubCard,
    badge: null,
    imageSrc: "./images/svg/feature_small_1.png",
    imageLabel: null,
    article: {
      header: "Fast data",
      title: {
        highlightedText: "with quick settlements and minimal fees.",
        text: "Trade fast with quick settlements and minimal fees.",
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
    imageSrc: "./images/svg/feature_small_3.png",
    imageLabel: null,
    article: {
      header: "Self Custody and Secure",
      title: {
        highlightedText:
          "of your funds while trading.",
        text: "You maintain self custody of your funds while trading.",
      },
    },
  },
];
