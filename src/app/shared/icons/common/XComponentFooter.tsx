import { FC } from "react";
import { type TIconProps } from "../type";

export const XComponentFooter: FC<TIconProps> = ({
  className,
  width = 36,
  height = 36,
  color = "#FFFFFF",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6 30 10.152-10.152m3.69-3.69L30 6M6 6l17.6 24H30L12.4 6H6Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
