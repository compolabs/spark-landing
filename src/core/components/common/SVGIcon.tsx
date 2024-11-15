import theme from "@/core/styles/theme";
import ICONS from "@/core/icons";

export type IconsType = keyof typeof ICONS;

interface IconProps {
  color?: string;
  viewBox?: string;
  iconName?: IconsType;
  iconPath?: string;
  size?: number | [number, number];
}

export default function SVGIcon({
  color = theme.colors.white.default,
  iconName,
  iconPath,
  size = 32,
  viewBox,
}: IconProps) {
  const width = typeof size === "number" ? size : size[0];
  const height = typeof size === "number" ? size : size[1];
  const viewBoxParams = !!viewBox ? viewBox :  `0 0 ${width} ${height}`;
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox={viewBoxParams}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {iconName && <path d={ICONS[iconName as keyof typeof ICONS]} />}
      {iconPath && <path d={iconPath} fillRule="evenodd" />}
    </svg>
  );
}
