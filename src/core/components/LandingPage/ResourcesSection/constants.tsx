import Image from "next/image";

import ResourceLinks from "@/core/components/LandingPage/ResourcesSection/ResourceLinks";
import SVGIcon from "@/core/components/common/SVGIcon";
import { externalLinks } from "@/core/constants/externalLinks";
import theme from "@/core/styles/theme";

export const resourceCards = [
  {
    title: "Resource Library:",
    paragraph: {
      text: "Explore a rich repository of resources, tailored for those who seek to deepen their understanding",
      highlight: "Explore a rich repository of resources,",
    },
    renderContent: () => <ResourceLinks />,
  },
  {
    title: "Expert-Led Learning:",
    paragraph: {
      text: "Gain exclusive insights from industry leaders tailored for those who seek to deepen their understanding",
      highlight: "Gain exclusive insights from industry leaders",
    },

    renderContent: () => null,
  },
];

export const resourceLinks = [
  {
    label: "Github",
    svgIcon: <SVGIcon iconName="Github" size={[32, 32]} />,
    href: externalLinks.github,
  },
  {
    label: "Documentation",
    svgIcon: (
      <Image src="./images/svg/docs.svg" alt="doc" width={32} height={32} />
    ),
    href: externalLinks.githubDocs,
  },
];
export const sliderCards = [
  {
    imgSource: "./images/medium_1.png",
    title: "Sequencers: Blockchain’s Air Traffic Controllers",
    isSquare: false,
    href: externalLinks.sequencers,
    label: "",
  },
  {
    imgSource: "./images/medium_2.png",
    title: "Predicates on FuelVM: Enabling a New DEX Paradigms",
    isSquare: true,
    href: externalLinks.fuelVM,
    label: "",
  },
  {
    imgSource: "./images/medium_3.png",
    title: "Defi in 2024: No Free Lunchs",
    isSquare: false,
    href: externalLinks.defi,
    label: "",
  },
  {
    imgSource: "./images/medium_4.png",
    title: "Modular smart Contract architecture",
    isSquare: false,
    href: externalLinks.modular,
    label: "",
  },
];

export const getSlideNumber = (width: number) => {
  if (width <= 500) {
    return 1.4;
  }

  if (width <= 800) {
    return 2;
  }
  if (width <= 1090) {
    return 3;
  }
  if (width <= theme.media.breakpoints.tablet) {
    return 4;
  }

  return 4;
};
