import { socialsSub, socialsFooter } from "@/shared";

type SocialItem = {
  title?: string;
  icon: React.FC;
  href: string;
};

const socialTitles: string[] = [
  "Stay Connected",
  "Need help?",
  "Check our blog",
  "Check our code",
];

const socialLinks: string[] = [
  "https://x.com/compolabs",
  "https://t.co/EfXHTEhXHc",
  "https://mirror.xyz/sprkfi.eth",
  "https://github.com/compolabs/",
];

const socialKeysSub = Object.keys(socialsSub) as (keyof typeof socialsSub)[];
const socialKeysFooter = Object.keys(
  socialsFooter,
) as (keyof typeof socialsFooter)[];

export const socialList: SocialItem[] = socialTitles.map((title, index) => ({
  title: title,
  icon: socialsSub[socialKeysSub[index]],
  href: socialLinks[index],
}));

export const socialListFooter: SocialItem[] = socialKeysFooter.map(
  (key, index) => ({
    icon: socialsFooter[key],
    href: socialLinks[index],
  }),
);
