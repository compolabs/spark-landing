const landingTheme = {
  spacing: {
    unit: 0.4,
    get(size: number) {
      return `${(size * this.unit).toFixed(1)}rem`;
    },
    get small() {
      return this.get(1);
    },
    get default() {
      return this.get(2);
    },
    get normal() {
      return this.get(3);
    },
    get medium() {
      return this.get(4);
    },
    get large() {
      return this.get(6);
    },
    get huge() {
      return this.get(8);
    },
    get extra() {
      return this.get(11);
    },
    get extraHuge() {
      return this.get(16);
    },
    get section() {
      return this.get(25);
    },
  },

  colors: {
    white: {
      default: "#ffffff",
      100: "#2A2A2A",
      75: "#FEFFF05E",
      50: "##A2A2A2",
    },
    black: {
      default: "#000",
    },
    orange: "#FD9C59",
    gradients: {
      text: "linear-gradient(90deg, #FFFFFF 4.15%, #FF9B57 13.73%, #54BB94 76.04%)",
      buttonCTA: " linear-gradient(148deg, #7A56FF 23.16%, #6743EE 63.65%)",
      buttonTrading: "linear-gradient(to right, #3f5efb, #fc466b)",
    },
    green: {
      100: "#149667",
      75: "#55BB94",
    },
    pink: "#E395FF",
  },

  borderRadius: {
    default: "0.8rem", // 12px
    large: "1.25rem", // 20px
  },

  shadow: {
    inset: `0 0.06rem 0.06rem 0 #FFFFFF54 inset`, // button inner shadow
    default: "0 1rem 0.9rem -0.37rem #15141540, 0 0.12rem 0.3rem 0 #00000038)", // button outer shadow
  },

  text: {
    weight: {
      extraBold: 700,
      bold: 600,
      medium: 500,
      regular: 400,
    },

    size: {
      extraTiny: "0.9rem", // 14px
      tiny: "1rem", // 16px
      small: "1.1rem", // 18px
      body: "1.25rem", // 20px
      medium: "1.5rem", // 24px
      subtitle: "2rem", // 32px
      large: "4rem", // 64px
      huge: "6.25rem", // 100px
    },
  },

  breakpoints: { breakpoints: "1" },

  media: {
    breakpoints: {
      mobile: 360,
      tabletBreakPoint: 640,
      tablet: 1280,
    },
    get mobile() {
      return `@media (max-width: ${this.breakpoints.mobile}px)`;
    },
    get tabletBreakPoint() {
      return `@media (min-width: ${this.breakpoints.tabletBreakPoint}px)`;
    },
    get tablet() {
      return `@media (min-width: ${this.breakpoints.tablet}px)`;
    },
    get desktop() {
      return `@media (min-width: ${this.breakpoints.tablet}px)`;
    },
  },
};

export default landingTheme;