import React from "react";

interface IconSparkSmallLogoProps {
  width?: string;
  height?: string;
  color?: string;
}

export const IconSparkSmallLogo = React.forwardRef<
  SVGSVGElement,
  IconSparkSmallLogoProps
>((props, ref) => (
  <svg
    width={props.width || "28"}
    height={props.height || "28"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
  >
    <mask
      id="mask0_3747_49"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="28"
      height="28"
    >
      <path d="M28 0H0V28H28V0Z" fill={props.color || "#FFFFFF"} />
    </mask>
    <g mask="url(#mask0_3747_49)">
      <path
        d="M16.73 1.5402C16.8233 1.2602 17.1033 1.1202 17.4067 1.1902C17.6867 1.2602 17.85 1.5402 17.8033 1.84354L15.7033 12.2969L25.9 10.1502C26.2033 10.0802 26.4833 10.2669 26.5533 10.5469C26.6233 10.8269 26.46 11.1302 26.18 11.2235L16.2167 14.6302L23.1233 22.5869C23.31 22.8202 23.31 23.1469 23.1233 23.3569C22.9133 23.5669 22.5867 23.5669 22.3767 23.3569L14.6533 16.3569L11.3867 26.4135C11.2933 26.6935 11.0133 26.8335 10.71 26.7635C10.43 26.6935 10.2667 26.4135 10.3133 26.1102L12.4133 15.6335L2.16999 17.7802C1.86666 17.8502 1.58666 17.6635 1.51666 17.3835C1.44666 17.1035 1.60999 16.8002 1.88999 16.7069L11.7133 13.3469L4.68999 5.3902C4.50332 5.1802 4.50332 4.8302 4.68999 4.6202C4.87666 4.4102 5.22666 4.4102 5.43666 4.6202L13.3467 11.7835L16.6833 1.56353L16.73 1.5402Z"
        fill="currentColor"
      />
    </g>
  </svg>
));

IconSparkSmallLogo.displayName = "IconSparkSmallLogo";
