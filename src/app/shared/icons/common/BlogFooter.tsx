import { FC } from "react";
import { type TIconProps } from "../type";

export const BlogFooter: FC<TIconProps> = ({ isHovered }) => {
  return isHovered ? (
    <svg
      id="DARK"
      width="26"
      height="26"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.6001 14.28C5.6001 7.50614 11.1062 2 17.8801 2C24.654 2 30.1601 7.50614 30.1601 14.28V32.55C30.1601 33.3539 29.514 34 28.7101 34H7.0501C6.24624 34 5.6001 33.3539 5.6001 32.55V14.28Z"
        fill="url(#paint0_linear_5001_13687)"
        stroke="white"
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M29.1301 32.91V14.31C29.1301 8.07 24.0901 3.03 17.8801 3.03C11.6701 3.03 6.6301 8.07 6.6301 14.31V32.91C6.6301 32.91 6.6301 32.97 6.6901 32.97H29.0701C29.0701 32.97 29.1301 32.97 29.1301 32.91ZM17.8801 1.5C10.8301 1.5 5.1001 7.23 5.1001 14.31V32.91C5.1001 33.78 5.8201 34.5 6.6901 34.5H29.0701C29.9401 34.5 30.6601 33.78 30.6601 32.91V14.31C30.6601 7.23 24.9301 1.5 17.8801 1.5Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5001_13687"
          x1="6.8701"
          y1="4.38"
          x2="29.2201"
          y2="39.84"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stop-color="white" stopOpacity="0" />
          <stop offset="0.7" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.8999 9.52C3.8999 5.09614 7.49604 1.5 11.9199 1.5C16.3438 1.5 19.9399 5.09614 19.9399 9.52V21.7C19.9399 22.1439 19.5838 22.5 19.1399 22.5H4.6999C4.25604 22.5 3.8999 22.1439 3.8999 21.7V9.52Z"
        fill="url(#paint0_linear_5001_18759)"
        stroke="url(#paint1_linear_5001_18759)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.4199 21.94V9.54C19.4199 5.38 16.0599 2.02 11.9199 2.02C7.7799 2.02 4.4199 5.38 4.4199 9.54V21.94C4.4199 21.94 4.4199 21.98 4.4599 21.98H19.3799C19.3799 21.98 19.4199 21.98 19.4199 21.94ZM11.9199 1C7.2199 1 3.3999 4.82 3.3999 9.54V21.94C3.3999 22.52 3.8799 23 4.4599 23H19.3799C19.9599 23 20.4399 22.52 20.4399 21.94V9.54C20.4399 4.82 16.6199 1 11.9199 1Z"
        fill="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5001_18759"
          x1="11.9199"
          y1="1"
          x2="11.9199"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5001_18759"
          x1="11.9199"
          y1="1"
          x2="11.9199"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};
