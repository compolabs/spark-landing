import { css } from "@emotion/react";

import { CommonEntity } from "core/types";

import LinkButton from "@/core/components/common/LinkButton";
import theme from "@/core/styles/theme";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

interface PropTypes extends CommonEntity {
  label?: string | null;
  href?: string;
}

const OptimizedMobileButton = ({
  label = null,
  href = "",
  styles,
  children,
}: PropTypes) => {
  return (
    <LinkButton
      type="external"
      data={{
        href,
        label,
      }}
      styles={styles}
    >
      {label ?? (
        <button css={[cssStyles.mobileBtn, styles]}> {children}</button>
      )}
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
    color: white;
    cursor: pointer;
    width: 100%;
    height: ${convertPxToRem(56)};
    padding: ${convertPxToRem(16)} ${convertPxToRem(20)};

    ${theme.media.tablet} {
      padding: ${convertPxToRem(16)} ${convertPxToRem(32)};
    }
  `,
};

export default OptimizedMobileButton;
