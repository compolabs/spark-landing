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
    <SectionWrapper disableMaxWidth>
      <footer css={cssStyles.footer} className={syne}>
        <main css={cssStyles.footerContent}>
          <div css={cssStyles.listsWrapper}>
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
          </div>

          <div css={cssStyles.iconsWrapper}>
            <SVGIcon size={[82, 25]} iconName="LogoMini" />
            <LinksList type="horizontal" links={socialMediaLinks} />
          </div>
        </main>

        <ExternalLinkButton
          label="Terms of use"
          href={externalLinks.termsOfUse}
          styles={cssStyles.termsOfUse}
        />
      </footer>
    </SectionWrapper>
  );
};

const cssStyles = {
  footer: css`
    margin: ${theme.spacing.huge} 0;
    position: relative;
    width: 100%;

    ${theme.media.tablet} {
      margin: ${theme.spacing.custom[40]} 0;
    }
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
    margin-bottom: 4.3rem;
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
    bottom: ${theme.spacing.default};
    left: 0;
    font-size: ${theme.text.size.extraTiny};

    ${theme.media.tablet} {
      right: 0;
      left: auto;
    }
  `,
};

export default Footer;
