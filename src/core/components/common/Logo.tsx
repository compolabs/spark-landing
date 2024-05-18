import { css } from "@emotion/react";
import SVGIcon from "@/core/components/common/SVGIcon";
import theme from "@/core/styles/theme";
import LinkButton from "@/core/components/common/LinkButton";
import { sourceLabelAnchorArray } from "@/core/utils/pageSources";

const Logo = () => {
  return (
    <LinkButton
      type="anchor"
      styles={cssStyles.navLink}
      data={sourceLabelAnchorArray[0]}
    >
      <SVGIcon size={[120, 35]} iconName="Logo" />
    </LinkButton>
  );
};

const cssStyles = {
  navLink: css`
    font-size: ${theme.spacing.small};;
    font-weight: ${theme.text.weight.regular};
    line-height:${theme.text.size.medium}
    background:${theme.colors.black.default};

    ${theme.media.desktop} {
    }
    ${theme.media.tablet} {
    }
    ${theme.media.mobile} {
    }
  `,
};
export default Logo;
