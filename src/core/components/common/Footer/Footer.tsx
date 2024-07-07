import { css } from "@emotion/react";

import SectionWrapper from "@/core/components/common/SectionWrapper";
import theme from "@/core/styles/theme";
import { LinksList } from "@/core/components/common/Footer/LinksList";
import { externalLinks } from "@/core/constants/externalLinks";
import SVGIcon from "@/core/components/common/SVGIcon";
import ExternalLinkButton from "@/core/components/common/ExternalLinkWrapper";
import useMainFont from "@/core/hooks/useMainFont";

import {
  developersLinks,
  socialMediaLinks,
  technologyLinks,
} from "./constants";

const Footer = () => {
  const syne = useMainFont();

  return (
    <SectionWrapper disableMaxWidth styles={cssStyles.footerContainer}>
      <footer css={cssStyles.footer} className={syne}>
        <main css={cssStyles.footerContent}>
          <div css={cssStyles.svg}>
            <SVGIcon size={[82, 25]} iconName="LogoMini" />
          </div>
          <LinksList
            listHeader="Technology"
            links={technologyLinks}
            listStyles={cssStyles.listTech}
          />
          <LinksList
            listHeader="Developers"
            links={developersLinks}
            listStyles={cssStyles.listDevs}
          />
          <LinksList
            listHeader="Socials"
            listStyles={cssStyles.listDevs}
            links={socialMediaLinks}
          />
          <LinksList
            listHeader="Work with us 🤟"
            listStyles={cssStyles.listDevs}
            links={developersLinks}
          />
        </main>
        <div css={cssStyles.description}>
          <span>Built by Composability Labs</span>
          <div css={cssStyles.rights}>
            <ExternalLinkButton
              label="Terms of use"
              href={externalLinks.termsOfUse}
              styles={cssStyles.termsOfUse}
            />
            <span>All rights reserved  © 2023-2024</span>
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
};

const cssStyles = {
  footerContainer: css`
    background-image: url("./images/footer.png");
    background-size: cover;
    background-position: center;
    min-height: 382px;
  `,
  footer: css`
    margin: ${theme.spacing.huge} 0;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    ${theme.media.tablet} {
      margin: ${theme.spacing.custom[40]} 0;
    }
    gap: 48px
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
  `
};

export default Footer;
