import { css } from "@emotion/react";

import { CommonEntity } from "core/types";

import theme from "@/core/styles/theme";
import { scrollToHash } from "@/core/utils/scrollToHash";

interface PropTypes extends CommonEntity {
  hash: string;
  label?: string;
}

const AnchorLinkButton = ({ hash, children, styles, label }: PropTypes) => {
  return (
    <button css={[styles, cssStyles.button]} onClick={() => scrollToHash(hash)}>
      {children ?? label}
    </button>
  );
};

const cssStyles = {
  button: css`
    background: none;
    color: ${theme.colors.white.default};
    padding: ${theme.spacing.small};
    margin-right: ${theme.spacing.small};
    font-size: ${theme.text.size.tiny};
    border: none;
    cursor: pointer;
  `,
};

export default AnchorLinkButton;
