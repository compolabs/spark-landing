import Image from "next/image";

import ResourceLinks from "@/core/components/LandingPage/ResourcesSection/ResourceLinks";
import SVGIcon from "@/core/components/common/SVGIcon";
import { externalLinks } from "@/core/constants/externalLinks";

export const resourceCards = [
  {
    title: "Resource Library:",
    paragraph: {
      text: "Explore a rich repository of resources, tailored for those who seek to deepen their understanding",
      highlight: "Explore a rich repository of resources,",
    },
    renderContent: () => <ResourceLinks />
  },
  {
    title: "Expert-Led Learning:",
    paragraph: {
      text: "Gain exclusive insights from industry leaders tailored for those who seek to deepen their understanding",
      highlight: "Gain exclusive insights from industry leaders",
    },
    // TODO: replace with slider
    renderContent: () => <div>Slider</div>,
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
    svgIcon: <Image src="./images/svg/docs.svg" alt="doc" width={32} height={32} />,
    href: externalLinks.docsDevelopers,
  },
];
