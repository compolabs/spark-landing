import { socialsSub, socialsFooter } from "@/shared";
import { MIXPANEL_EVENTS } from "../utils/mixPanel";

type SocialItem = {
  title?: string;
  icon: React.FC;
  href: string;
  event: MIXPANEL_EVENTS;
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

const socialEvents: MIXPANEL_EVENTS[] = [
  MIXPANEL_EVENTS.LAST_CLICK_X,
  MIXPANEL_EVENTS.LAST_CLICK_DISCORD,
  MIXPANEL_EVENTS.LAST_CLICK_BLOG,
  MIXPANEL_EVENTS.LAST_CLICK_GITHUB,
];

const socialEventsFooter: MIXPANEL_EVENTS[] = [
  MIXPANEL_EVENTS.FOOTER_CLICK_X,
  MIXPANEL_EVENTS.FOOTER_CLICK_DISCORD,
  MIXPANEL_EVENTS.FOOTER_CLICK_BLOG,
  MIXPANEL_EVENTS.FOOTER_CLICK_GITHUB,
];

const socialKeysSub = Object.keys(socialsSub) as (keyof typeof socialsSub)[];
const socialKeysFooter = Object.keys(
  socialsFooter
) as (keyof typeof socialsFooter)[];

export const socialList: SocialItem[] = socialTitles.map((title, index) => ({
  title: title,
  icon: socialsSub[socialKeysSub[index]],
  href: socialLinks[index],
  event: socialEvents[index],
}));

export const socialListFooter: SocialItem[] = socialKeysFooter.map(
  (key, index) => ({
    icon: socialsFooter[key],
    href: socialLinks[index],
    event: socialEventsFooter[index],
  })
);
