import { css } from "@emotion/react";

import ExternalLinkButton from "@/core/components/common/ExternalLinkWrapper";
import { convertPxToRem } from "@/core/utils/convertPxToRem";
import theme from "@/core/styles/theme";
import { resourceLinks } from "@/core/components/LandingPage/ResourcesSection/constants";

const ResourceLinks = () => {
  return (
    <div css={cssStyles.wrapper}>
      {resourceLinks.map(({ label, href, svgIcon }) => (
        <ExternalLinkButton key={label} href={href} styles={cssStyles.link}>
          <span>{label}</span>
          {svgIcon}
        </ExternalLinkButton>
      ))}
    </div>
  );
};

const cssStyles = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.normal};
    width: 100%;

    ${theme.media.tabletBreakPoint} {
      flex-direction: row;
      justify-content: center;
    }
  `,
  link: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacing.normal};
    background: ${theme.colors.black.default};
    box-shadow: ${theme.shadow.inset};
    color: ${theme.colors.white.default};
    font-size: ${theme.text.size.body};
    border-radius: ${theme.borderRadius.default};
    max-width: ${convertPxToRem(320)};
    width: 100%;
    height: ${convertPxToRem(56)};

    & > img {
      padding: ${theme.spacing.small};
    }

    ${theme.media.tabletBreakPoint} {
      max-width: ${convertPxToRem(230)};
    }
  `,
};

export default ResourceLinks;
