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
    <button css={[cssStyles.button, styles]} onClick={() => scrollToHash(hash)}>
      {children ?? label}
    </button>
  );
};

const cssStyles = {
  button: css`
    border: none;
    cursor: pointer;
    background: none;
    color: ${theme.colors.white.default};
  `,
};

export default AnchorLinkButton;
