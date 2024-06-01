import { css } from "@emotion/react";

import { ChildrenType, Styles } from "core/types";

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
  `,
};

export default SectionWrapper;
