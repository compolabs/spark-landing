import { css } from "@emotion/react";

import { CommonEntity } from "core/types";

import { externalLinks } from "@/core/constants/externalLinks";
import LinkButton from "@/core/components/common/LinkButton";
import theme from "@/core/styles/theme";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

interface PropTypes extends CommonEntity {
  label?: string | null;
}

const OptimizedMobileButton = ({
  label = null,
  styles,
  children,
}: PropTypes) => {
  return (
    <LinkButton
      type="external"
      data={{
        label,
      }}
      styles={[cssStyles.mobileBtn, styles]}
    >
      {label ?? <button css={[cssStyles.mobileBtn, styles]}> {children}</button>}
    </LinkButton>
  );
};

const cssStyles = {
  mobileBtn: css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    font-size: ${theme.text.size.body};
    border-radius: ${theme.borderRadius.default};
    border: 2px dashed ${theme.colors.grey.lightDark};
    width: 100%;
    height: ${convertPxToRem(56)};
    color: white;
    cursor: pointer;
  `,
};

export default OptimizedMobileButton;
