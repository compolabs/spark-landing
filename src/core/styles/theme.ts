const landingTheme = {
  spacing: {
    custom: {
      80: "5rem",
      60: "3.75rem",
      40: "2.5rem",
      20: "1.25rem",
      10: "0.6rem",
    },
    unit: 0.25,
    get(size: number) {
      return `${(size * this.unit).toFixed(1)}rem`;
    },
    get small() {
      return this.get(1); // 4px
    },
    get default() {
      return this.get(2); // 8px
    },
    get normal() {
      return this.get(3); // 12px
    },
    get medium() {
      return this.get(4); // 16px
    },
    get large() {
      return this.get(6); // 24px
    },
    get huge() {
      return this.get(8); // 32px
    },
    get extra() {
      return this.get(11); // 44px
    },
    get extraHuge() {
      return this.get(16); // 64px
    },
    get section() {
      return this.get(25); // 100px
    },
  },

  colors: {
    white: {
      default: "#ffffff",
      title: "#EBF1E6",
      text: "#F8FCFC",
      100: "#FEFFF0",
      37: "#FEFFF05E",
      13: "#FFFFFF21",
    },
    grey: {
      light: "#A2A2A2",
      dark: "#2A2A2A",
      bgDark: "#232322",
      lightDark: "#3d3d3d",
      lightDarkSecond: "#5F5F5F",
      textLight: "#8E8E8E",
      medium: "#999393",
      45: "#A3A3A373",
      33: "#99939347",
      borderPrimary: '#4B4B4B'
    },
    purple: {
      hover: "linear-gradient(0deg, #8E70FF, #8E70FF)",
      focus: "linear-gradient(148deg, #6d47fa 23.16%, #5f39ec 63.65%)",
    },
    black: {
      default: "#000",
      deepDark: "#101419",
      22: "#07070838",
    },
    orange: "#FD9C59",
    gradients: {
      text: "linear-gradient(90deg, #FFFFFF 4.15%, #FF9B57 13.73%, #54BB94 76.04%)",
      buttonCTA: "linear-gradient(148deg, #7A56FF 23.16%, #6743EE 63.65%)",
      buttonTrading:
        "linear-gradient(190.8deg, #149566 56.59%, #6642ee 76.58%)",
    },
    green: {
      100: "#149667",
      75: "#55BB94",
      50: "#00E388",
      25: "#7DFFCB",
      20: "#54BB9433",
    },
    pink: "#E395FF",
    purpleShadow: "#1D1927",
  },

  borderRadius: {
    default: "0.8rem", // 12px
    large: "1.25rem", // 20px
  },

  shadow: {
    inset: `0px -1px 1px 0px #FFFFFF2E inset, 0px 2px 12px 0px #00000075 inset`, // button inner shadow
    default: "0 1rem 0.9rem -0.37rem #15141540, 0 0.12rem 0.3rem 0 #00000038)", // button outer shadow
    green: "0px -2px 20px #149667b8", // green button shadow
    app: `0px 1.85px 1.66px 0px #00000015,
    0px 4.46px 3.99px 0px #0000001e,
    0px 8.39px 7.51px 0px #00000025,
    0px 14.97px 13.4px 0px #0000002c,
    0px 27.99px 25.07px 0px #00000035,
    0px 67px 60px 0px #0000004a`,
  },

  text: {
    weight: {
      extraBold: 700,
      bold: 600,
      medium: 500,
      regular: 400,
    },

    size: {
      extraTiny: "0.875rem", // 14px
      tiny: "1rem", // 16px
      small: "1.1rem", // 18px
      body: "1.25rem", // 20px
      medium: "1.5rem", // 24px
      subtitle: "2rem", // 32px
      headline: "2.5rem", // 40px
      large: "4rem", // 64px
      huge: "6.25rem", // 100px
    },
  },

  media: {
    section: { maxWidth: "1520px" },
    breakpoints: {
      mobile: 360,
      tabletBreakPoint: 640,
      tabletLandscape: 1024,
      tablet: 1280,
      desktop: 1920,
    },
    get mobile() {
      return `@media (max-width: ${this.breakpoints.mobile}px)`;
    },
    get tabletBreakPoint() {
      return `@media (min-width: ${this.breakpoints.tabletBreakPoint}px)`;
    },
    get tabletLandscape() {
      return `@media (min-width: ${this.breakpoints.tabletLandscape}px)`;
    },
    get tablet() {
      return `@media (min-width: ${this.breakpoints.tablet}px)`;
    },
    get desktop() {
      return `@media (min-width: ${this.breakpoints.desktop}px)`;
    },
  },
};

export default landingTheme;
