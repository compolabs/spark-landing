import { Syne } from "next/font/google";
import { css } from "@emotion/react";

import SectionWrapper from '@/core/components/common/SectionWrapper';
import theme from '@/core/styles/theme';
import { LinksList } from '@/core/components/common/Footer/LinksList';
import { externalLinks } from '@/core/constants/externalLinks';
import SVGIcon from '@/core/components/common/SVGIcon';
import ExternalLinkButton from '@/core/components/common/ExternalLinkWrapper';

const syne = Syne({ subsets: ["latin"] });

const technologyLinks = [
  { label: "Bridge", href: externalLinks.bridgeTechnology },
  { label: "Liquidity Mining program", href: externalLinks.liquidityMiningProgramTechnology },
];
const developersLinks = [
  { label: "Docs", href: externalLinks.docsDevelopers },
  { label: "Github", href: externalLinks.githubDevelopers },
  { label: "Faucet", href: externalLinks.faucetDevelopers },
];
const socialMediaLinks = [
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

const Footer = () => {
  return (
    <SectionWrapper>
      <footer css={cssStyles.footer} className={syne.className}>
        <main css={cssStyles.footerContent}>
          <div css={cssStyles.listsWrapper}>
            <LinksList listHeader="Technology" links={technologyLinks} listStyles={cssStyles.listTech} />
            <LinksList listHeader="Developers" links={developersLinks} listStyles={cssStyles.listDevs} />
          </div>

          <div css={cssStyles.iconsWrapper}>
            <SVGIcon size={[82, 25]} iconName="LogoMini" />
            <LinksList type="horizontal" links={socialMediaLinks}/>
          </div>
        </main>

        <ExternalLinkButton label="Terms of use" href={externalLinks.termsOfUse} styles={cssStyles.termsOfUse}/>
      </footer>
    </SectionWrapper>
  );
};

const cssStyles = {
  footer: css`
    padding: ${theme.spacing.huge} 0;
    position: relative;
    width: 100%;
  `,
  footerContent: css`
    display: flex;
    justify-content: space-between;
  `,
  listsWrapper: css`
    display: flex;
    flex-direction: column;

    ${theme.media.tablet} {
      flex-direction: row;
      justify-content: space-between;
      width: 50%;
    }
  `,
  listTech: css`
    margin-bottom: ${theme.spacing.extra};

    ${theme.media.tablet} {
      width: 50%;
    }
  `,
  listDevs: css`
    margin-bottom: 70px;
    ${theme.media.tablet} {
      width: 50%;
    }
  `,
  iconsWrapper: css`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-between;
    height: inherit;
    
    ${theme.media.tablet} {
      flex-direction: row-reverse;
      align-items: flex-start;
      width: 50%;
    }
  `,
  termsOfUse: css`
    position: absolute;
    bottom: 38px;
    left: 0;
    font-size: ${theme.text.size.extraTiny};
    
    ${theme.media.tablet} {
      right: 0;
      left: auto;
    }
  `,
};

export default Footer;
