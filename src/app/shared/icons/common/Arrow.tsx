import { FC } from "react";
import { type TIconProps } from "../type";

export const Arrow: FC<TIconProps> = ({ color }) => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.99976V11.9998M10 5.99985V2.41385C10 2.2161 10.0587 2.0228 10.1686 1.85839C10.2785 1.69398 10.4346 1.56584 10.6173 1.49017C10.8 1.4145 11.0011 1.3947 11.195 1.43327C11.389 1.47183 11.5671 1.56704 11.707 1.70685L18.293 8.29285C18.4805 8.48038 18.5858 8.73469 18.5858 8.99985C18.5858 9.26501 18.4805 9.51932 18.293 9.70685L11.707 16.2928C11.5671 16.4327 11.389 16.5279 11.195 16.5664C11.0011 16.605 10.8 16.5852 10.6173 16.5095C10.4346 16.4339 10.2785 16.3057 10.1686 16.1413C10.0587 15.9769 10 15.7836 10 15.5858V11.9998H4V5.99985H10Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
