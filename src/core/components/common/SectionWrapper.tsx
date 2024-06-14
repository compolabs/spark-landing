import { css } from "@emotion/react";

import { ChildrenType, Styles } from "core/types";

import theme from "@/core/styles/theme";
import { SourceNames } from "@/core/utils/pageSources";

interface PropTypes {
  children: ChildrenType;
  styles?: Styles;
  anchorId?: SourceNames;
  disableMaxWidth?: boolean;
}

const SectionWrapper = ({
  children,
  styles,
  anchorId,
  disableMaxWidth = false,
}: PropTypes) => {
  return (
    <section
      id={anchorId}
      css={[
        cssStyles.wrapper(
          disableMaxWidth ? "none" : theme.media.section.maxWidth
        ),
        styles,
      ]}
    >
      {children}
    </section>
  );
};

const cssStyles = {
  wrapper: (maxWidth: string) => css`
    display: flex;
    margin: 0 auto;
    padding-left: ${theme.spacing.medium};
    padding-right: ${theme.spacing.medium};
    max-width: ${maxWidth};
    box-sizing: initial;

    ${theme.media.tabletBreakPoint} {
      padding-left: ${theme.spacing.custom[40]};
      padding-right: ${theme.spacing.custom[40]};
    }
  `,
};

export default SectionWrapper;
