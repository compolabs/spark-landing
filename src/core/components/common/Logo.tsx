import { css } from "@emotion/react";

import SVGIcon from "@/core/components/common/SVGIcon";
import theme from "@/core/styles/theme";
import LinkButton from "@/core/components/common/LinkButton";
import { sourceLabelAnchorArray } from "@/core/utils/pageSources";

type PropTypes = { mini?: boolean; isMobile: boolean };

const Logo = ({ mini = false, isMobile }: PropTypes) => {
  return (
    <LinkButton
      type="anchor"
      styles={cssStyles.navLink}
      data={sourceLabelAnchorArray[0]}
    >
      <SVGIcon
        size={isMobile ? [82, 24] : [120, 35]}
        iconName={mini || isMobile ? "LogoMini" : "Logo"}
      />
    </LinkButton>
  );
};

const cssStyles = {
  navLink: css`
    font-weight: ${theme.text.weight.regular};
  `,
};
export default Logo;
