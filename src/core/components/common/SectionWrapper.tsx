import { ChildrenType, Styles } from "core/types";
import { css } from "@emotion/react";

interface PropsT {
  children: ChildrenType;
  styles?: Styles;
}

const SectionWrapper = ({ children, styles }: PropsT) => {
  return <div css={[cssStyles.wrapper, styles]}>{children}</div>;
};
const cssStyles = {
  wrapper: css`
    display: flex;
    padding: 0 40px 0;
  `,
};

export default SectionWrapper;
