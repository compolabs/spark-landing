import React from "react";
import { css } from "@emotion/react";

import theme from "@/core/styles/theme";

import SVGIcon from "../SVGIcon";

type PropTypes = {
  setOpenMenu: () => void;
  isOpenMenu: boolean;
};

export default function MenuButton({ setOpenMenu, isOpenMenu }: PropTypes) {
  return (
    <button css={cssStyle.menuButton} onClick={setOpenMenu}>
      <SVGIcon iconName={isOpenMenu ? "Close" : "Menu"} />
    </button>
  );
}

const cssStyle = {
  menuButton: css`
    background-color: unset;
    border: none;
    cursor: pointer;

    ${theme.media.tabletBreakPoint} {
      display: none;
    }
  `,
};
