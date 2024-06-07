import { css } from "@emotion/react";
import React from "react";

import { ChildrenType } from "core/types";

import theme from "@/core/styles/theme";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

import SVGIcon from "./SVGIcon";

type PropTypes = {
  children: ChildrenType;
  disableDecoration?: boolean;
};

export const DecorationPlus = ({
  children,
  disableDecoration = false,
}: PropTypes) => {
  const positions = [
    { key: "leftTop", style: cssStyles.leftTop },
    { key: "rightTop", style: cssStyles.rightTop },
    { key: "leftBottom", style: cssStyles.leftBottom },
    { key: "rightBottom", style: cssStyles.rightBottom },
  ];
  return (
    <>
      {children}
      {positions.map((pos) => (
        <span key={pos.key} css={pos.style}>
          <SVGIcon iconName="Plus" color={theme.colors.grey.lightDark} />
        </span>
      ))}
    </>
  );
};
const cssStyles = {
  decoration: css`
    position: relative;
    width: 100%;
    height: 100%;
  `,
  leftTop: css`
    position: absolute;
    left: ${convertPxToRem(8)};
    top: ${convertPxToRem(8)};
    display: none;
    ${theme.media.tabletBreakPoint} {
      display: block;
    }
  `,
  rightTop: css`
    position: absolute;
    right: ${convertPxToRem(8)};
    top: ${convertPxToRem(8)};
    display: none;
    ${theme.media.tabletBreakPoint} {
      display: block;
    }
  `,
  leftBottom: css`
    position: absolute;
    left: ${convertPxToRem(8)};
    bottom: ${convertPxToRem(4)};
    display: none;
    ${theme.media.tabletBreakPoint} {
      display: block;
    }
  `,
  rightBottom: css`
    position: absolute;
    right: ${convertPxToRem(8)};
    bottom: ${convertPxToRem(4)};
    display: none;
    ${theme.media.tabletBreakPoint} {
      display: block;
    }
  `,
};
