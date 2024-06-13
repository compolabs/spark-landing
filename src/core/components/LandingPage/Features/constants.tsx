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
    imageLabel: "./images/svg/up_to_50x.svg",
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
    imageSrc: "./images/svg/feature_small_1.svg",
    imageLabel: null,
    article: {
      header: "Fast data: 2500tps",
      title: {
        highlightedText: "with quick settlements and minimal fees.",
        text: "Trade fast with quick settlements and minimal fees.",
      },
    },
  },
  {
    type: FeatureCardShapeTypes.SubCard,
    badge: null,
    imageSrc: "./images/svg/feature_small_2.svg",
    imageLabel: null,
    article: {
      header: "Low fees: $0.00000001.",
      title: {
        highlightedText: "No lag, no downtime.",
        text: "Instant order execution. No lag, no downtime.",
      },
    },
  },
  {
    type: FeatureCardShapeTypes.SubCard,
    badge: null,
    imageSrc: "./images/svg/feature_small_3.svg",
    imageLabel: null,
    article: {
      header: "Best setup to trade crypto",
      title: {
        highlightedText:
          "Trade with solid tech in a user-friendly environment.",
        text: "Trade with solid tech in a user-friendly environment.",
      },
    },
  },
];

