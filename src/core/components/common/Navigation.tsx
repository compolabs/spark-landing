import { css } from "@emotion/react";
import theme from "@/core/styles/theme";
import LinkButton from "@/core/components/common/LinkButton";
import {
  SelectOption,
  SourceNames,
  sourceLabelAnchorArray,
} from "@/core/utils/pageSources";

const Navigation = () => {
  return (
    <nav css={cssStyles.nav}>
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
  nav: css`
    display: none;

    ${theme.media.tabletBreakPoint} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `,
  navLink: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    background: #000;
  `,
};

export default Navigation;
