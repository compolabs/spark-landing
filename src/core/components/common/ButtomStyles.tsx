import theme from "@/core/styles/theme";
import { css } from "@emotion/react";

const baseButtonCssStyles = {
  baseButton: (
    colors: string,
    minWidth: string | undefined,
    fontSize: string | undefined,
    fontWeight: number | undefined,
    isDisabled: boolean,
    height?: string | undefined
  ) => css`
    outline: none;
    position: relative;
    border-radius: ${theme.borderRadius.default};
    white-space: nowrap;
    line-height: 1.2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: ${minWidth ?? "initial"};
    background-color: "transparent";
    border: none;
    padding: 0;
    color: ${theme.colors.white.default};
  `,
};
