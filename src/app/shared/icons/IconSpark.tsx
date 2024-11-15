import React from "react";

export const IconSpark = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    width={props.width || "24"}
    height={props.height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_3297_18574)">
      <mask
        id="mask0_3297_18574"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path d="M24 0H0V24H24V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_3297_18574)">
        <path
          d="M14.34 1.31993C14.42 1.07993 14.66 0.959929 14.92 1.01993C15.16 1.07993 15.3 1.31993 15.26 1.57993L13.46 10.5399L22.2 8.69993C22.46 8.63993 22.7 8.79993 22.76 9.03993C22.82 9.27993 22.68 9.53993 22.44 9.61993L13.9 12.5399L19.82 19.3599C19.98 19.5599 19.98 19.8399 19.82 20.0199C19.64 20.1999 19.36 20.1999 19.18 20.0199L12.56 14.0199L9.75999 22.6399C9.67999 22.8799 9.43999 22.9999 9.17999 22.9399C8.93999 22.8799 8.79999 22.6399 8.83999 22.3799L10.64 13.3999L1.85999 15.2399C1.59999 15.2999 1.35999 15.1399 1.29999 14.8999C1.23999 14.6599 1.37999 14.3999 1.61999 14.3199L10.04 11.4399L4.01999 4.61993C3.85999 4.43993 3.85999 4.13993 4.01999 3.95993C4.17999 3.77993 4.47999 3.77993 4.65999 3.95993L11.44 10.0999L14.3 1.33993L14.34 1.31993Z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_3297_18574">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

IconSpark.displayName = "IconSpark";
