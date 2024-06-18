import { css } from "@emotion/react";

import theme from "@/core/styles/theme";
import Badge from "@/core/components/common/Badge";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

const SoonBadge = () => (
  <Badge
    content="Soon"
    borderStyles={cssStyles.badge}
    bgColor="transparent"
    styles={cssStyles.content}
  />
);

const cssStyles = {
  badge: css`
    border: ${convertPxToRem(1)} solid ${theme.colors.grey[45]};
    height: ${convertPxToRem(30)};
    width: ${convertPxToRem(56)};
    padding: ${convertPxToRem(2)};
    text-align: center;
    ${theme.media.tabletBreakPoint} {
      margin-bottom: ${theme.spacing.normal};
    }

    ${theme.media.tabletLandscape} {
      margin-bottom: 0;
    }
  `,
  content: css`
    padding: 0;
    font-size: ${theme.text.size.tiny};
  `,
};

export default SoonBadge;
