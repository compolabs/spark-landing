import { css } from "@emotion/react";

import { Styles } from "core/types";

import theme from "@/core/styles/theme";
import LinkButton from "@/core/components/common/LinkButton";
import {
  SelectOption,
  SourceNames,
  sourceLabelAnchorArray,
} from "@/core/utils/pageSources";

type PropTypes = {
  disableOnMobile?: boolean;
  styles?: Styles;
};

const Navigation = ({ disableOnMobile = false, styles }: PropTypes) => {
  return (
    <nav css={[cssStyles.nav(disableOnMobile ? "none" : "flex"), styles]}>
      {sourceLabelAnchorArray
        .slice(1)
        .map((data: SelectOption<SourceNames>) => (
          <LinkButton
            key={data.href}
            type="anchor"
            styles={cssStyles.navLink}
            data={data}
          />
        ))}
    </nav>
  );
};
const cssStyles = {
  nav: (isMobileOnly: string) => css`
    display: ${isMobileOnly};

    ${theme.media.tabletBreakPoint} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `,
  navLink: css`
    font-weight: ${theme.text.weight.regular};
    background: ${theme.colors.black.default};
  `,
};

export default Navigation;
