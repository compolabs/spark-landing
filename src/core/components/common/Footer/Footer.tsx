import { css } from "@emotion/react";
import Image from "next/image";

import SectionWrapper from "@/core/components/common/SectionWrapper";
import theme from "@/core/styles/theme";
import { LinksList } from "@/core/components/common/Footer/LinksList";
import { externalLinks } from "@/core/constants/externalLinks";
import { useMobileWindowWidth } from "@/core/hooks/useMobileWindowWidth";
import SVGIcon from "@/core/components/common/SVGIcon";
import ExternalLinkButton from "@/core/components/common/ExternalLinkWrapper";
import useMainFont from "@/core/hooks/useMainFont";


import {
  developersLinks,
  socialMediaLinks,
  technologyLinks,
  workWithUsLinks,
} from "./constants";

const Footer = () => {
  const syne = useMainFont();
  const isMobile = useMobileWindowWidth();

  return (
    <SectionWrapper disableMaxWidth styles={cssStyles.footerContainer}>
      <footer css={cssStyles.footer} className={syne}>
        <main css={cssStyles.footerContent}>
          <div css={cssStyles.svg}>
            <SVGIcon size={[82, 25]} iconName="LogoMini" />
          </div>
          <LinksList listHeader="Technology" links={technologyLinks} />
          <LinksList listHeader="Developers" links={developersLinks} />
          <LinksList listHeader="Socials" links={socialMediaLinks} />
          <LinksList listHeader="Work with us 🤟" links={workWithUsLinks} />
        </main>
        <div css={cssStyles.description}>
          <span css={cssStyles.descriptionText}>Built by Composability Labs</span>
          <div css={cssStyles.rights}>
            <ExternalLinkButton
              label="Terms of use"
              href={externalLinks.termsOfUse}
              styles={cssStyles.descriptionText}
            />
            <span css={cssStyles.descriptionText}>All rights reserved  © 2023-2024</span>
          </div>
        </div>
      </footer>
      {isMobile && (
        <div css={cssStyles.bg}>
          <Image src="./images/footer.png" alt="bg" fill />
        </div>
      )}
    </SectionWrapper>
  );
};

const cssStyles = {
  bg: css`
    z-index: -1;
    min-height: 215px;
    object-fit: contain;
    position: absolute;
    left: -100%;
    bottom: 0%;
    overflow:hidden;
    min-width: 1280px;
    min-height: 382px;
  }
  `,
  footerContainer: css`
    position: relative;
    ${theme.media.tabletBreakPoint} {
      background-image: url("./images/footer.png");
      background-size: cover;
      background-position: center;
      min-height: 382px;
    }
  `,
  footer: css`
    margin: ${theme.spacing.huge} 0;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 48px;
    ${theme.media.tablet} {
      margin: ${theme.spacing.custom[40]} 0;
    }
  `,
  footerContent: css`
    display: flex;
    flex-direction: column;
    gap: 48px;
    ${theme.media.tablet} {
      justify-content: space-between;
      flex-direction: row;
    }
  `,
  description: css`
    display: flex;
    gap: 16px;
    flex-direction: column;

    ${theme.media.tablet} {
      justify-content: space-between;
      flex-direction: row;
    }
  `,
  descriptionText: css`
    font-size: ${theme.text.size.extraTiny}  
  `,
  rights: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    ${theme.media.tablet} {
      flex-direction: row;
      gap: 32px;
    }
  `,
  svg: css`
    position: absolute;
    right: 0;
    ${theme.media.tablet} {
      position: unset;
    }
  `,
};

export default Footer;
