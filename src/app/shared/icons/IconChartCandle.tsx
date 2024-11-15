import React from "react";

export const IconChartCandle = React.forwardRef<
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 3C6.55228 3 7 3.44772 7 4V5C7.53043 5 8.03914 5.21071 8.41421 5.58579C8.78929 5.96086 9 6.46957 9 7V10C9 10.5304 8.78929 11.0391 8.41421 11.4142C8.03914 11.7893 7.53043 12 7 12V20C7 20.5523 6.55228 21 6 21C5.44772 21 5 20.5523 5 20V12C4.46957 12 3.96086 11.7893 3.58579 11.4142C3.21071 11.0391 3 10.5304 3 10V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5V4C5 3.44772 5.44772 3 6 3ZM5 7L5 10H7V7H5ZM12 3C12.5523 3 13 3.44772 13 4V13C13.5304 13 14.0391 13.2107 14.4142 13.5858C14.7893 13.9609 15 14.4696 15 15V18C15 18.5304 14.7893 19.0391 14.4142 19.4142C14.0391 19.7893 13.5304 20 13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C10.4696 20 9.96086 19.7893 9.58579 19.4142C9.21071 19.0391 9 18.5304 9 18V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13V4C11 3.44772 11.4477 3 12 3ZM11 15V18H13V15H11ZM18 3C18.5523 3 19 3.44772 19 4C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V10C21 10.5304 20.7893 11.0391 20.4142 11.4142C20.0391 11.7893 19.5304 12 19 12V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V12C16.4696 12 15.9609 11.7893 15.5858 11.4142C15.2107 11.0391 15 10.5304 15 10V6C15 5.46957 15.2107 4.96086 15.5858 4.58579C15.9609 4.21071 16.4696 4 17 4C17 3.44772 17.4477 3 18 3ZM17 6L17 10H19V6L17 6Z"
      fill="currentColor"
    />
  </svg>
));

IconChartCandle.displayName = "IconChartCandle";
