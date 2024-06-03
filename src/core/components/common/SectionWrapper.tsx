import { css } from "@emotion/react";

import { ChildrenType, Styles } from "core/types";

import theme from "@/core/styles/theme";

interface PropTypes {
  children: ChildrenType;
  styles?: Styles;
  disableMaxWidth?: boolean;
}

const SectionWrapper = ({
  children,
  styles,
  disableMaxWidth = false,
}: PropTypes) => {
  return (
    <div
      css={[
        cssStyles.wrapper(
          disableMaxWidth ? "none" : theme.media.section.maxWidth
        ),
        styles,
      ]}
    >
      {children}
    </div>
  );
};

const cssStyles = {
  wrapper: (maxWidth: string) => css`
    display: flex;
    margin: 0 auto;
    padding: 0 ${theme.spacing.medium} 0;
    max-width: ${maxWidth};

    ${theme.media.tabletBreakPoint} {
      padding: 0 ${theme.spacing.custom[40]} 0;
    }
  `,
};

export default SectionWrapper;
