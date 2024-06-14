import { externalLinks } from "@/core/constants/externalLinks";
import SVGIcon from "@/core/components/common/SVGIcon";

export const technologyLinks = [
  { label: "Bridge", href: externalLinks.bridgeTechnology },
  {
    label: "Liquidity Mining program",
    href: externalLinks.liquidityMiningProgramTechnology,
  },
];

export const developersLinks = [
  { label: "Docs", href: externalLinks.githubDocs },
  { label: "Github", href: externalLinks.github },
  { label: "Faucet", href: externalLinks.faucetDevelopers },
];

export const socialMediaLinks = [
  {
    icon: <SVGIcon iconName="Twitter" />,
    href: externalLinks.twitter,
  },
  {
    icon: <SVGIcon iconName="Discord" />,
    href: externalLinks.discord,
  },
  {
    icon: <SVGIcon iconName="Medium" />,
    href: externalLinks.medium,
  },
];
