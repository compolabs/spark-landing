import { css } from "@emotion/react";

import { ChildrenType, Styles } from "core/types";
import theme from "@/core/styles/theme";

interface PropTypes {
  children: ChildrenType;
  styles?: Styles;
}

const SectionWrapper = ({ children, styles }: PropTypes) => {
  return <div css={[cssStyles.wrapper, styles]}>{children}</div>;
};
const cssStyles = {
  wrapper: css`
    display: flex;
    padding: 0 40px 0;
    
    ${theme.media.desktop} {
      margin: 0 auto;
      max-width: 1520px;
    }
  `,
};

export default SectionWrapper;
