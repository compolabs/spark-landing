import { css } from "@emotion/react";
import React from "react";

import { ChildrenType } from "core/types";

import theme from "@/core/styles/theme";
import { convertPxToRem } from "@/core/utils/convertPxToRem";

import SVGIcon from "./SVGIcon";

type PropTypes = {
  children: ChildrenType;
  color?: string;
  disableDecoration?: boolean;
};

export const DecorationPlus = ({
  children,
  color,
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
          <SVGIcon
            iconName="Plus"
            color={color ?? theme.colors.grey.lightDark}
          />
        </span>
      ))}
    </>
  );
};

const cssStyles = {
  leftTop: css`
    position: absolute;
    left: ${convertPxToRem(16)};
    top: ${convertPxToRem(16)};
    display: none;
    ${theme.media.tabletBreakPoint} {
      display: block;
    }
  `,
  rightTop: css`
    position: absolute;
    right: ${convertPxToRem(16)};
    top: ${convertPxToRem(16)};
    display: none;
    ${theme.media.tabletBreakPoint} {
      display: block;
    }
  `,
  leftBottom: css`
    position: absolute;
    left: ${convertPxToRem(16)};
    bottom: ${convertPxToRem(8)};
    display: none;
    ${theme.media.tabletBreakPoint} {
      display: block;
    }
  `,
  rightBottom: css`
    position: absolute;
    right: ${convertPxToRem(16)};
    bottom: ${convertPxToRem(8)};
    display: none;
    ${theme.media.tabletBreakPoint} {
      display: block;
    }
  `,
};
